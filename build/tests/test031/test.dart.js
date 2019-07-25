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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jX(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jF:function jF(){},
kf:function(){return new P.dM("No element")},
lI:function(){return new P.dM("Too few elements")},
a6:function a6(a){this.a=a},
fs:function fs(){},
dp:function dp(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fW:function fW(a,b,c){this.a=a
this.b=b
this.$ti=c},
fX:function fX(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iA:function iA(a,b,c){this.a=a
this.b=b
this.$ti=c},
iB:function iB(a,b,c){this.a=a
this.b=b
this.$ti=c},
bQ:function bQ(){},
e0:function e0(){},
e_:function e_(){},
c5:function(a){var u,t=H.S(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
mH:function(a){return v.types[H.af(a)]},
mM:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Y(a).$iH},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aw(a)
if(typeof u!=="string")throw H.i(H.bb(a))
return u},
cs:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bT:function(a){return H.lR(a)+H.jU(H.bJ(a),0,null)},
lR:function(a){var u,t,s,r,q,p,o,n=J.Y(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.J||!!n.$ibW){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c5(t.length>1&&C.j.bd(t,0)===36?C.j.cH(t,1):t)},
ku:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
m_:function(a){var u,t,s,r=H.d([],[P.y])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.B)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bb(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.h.bg(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.i(H.bb(s))}return H.ku(r)},
kv:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bb(s))
if(s<0)throw H.i(H.bb(s))
if(s>65535)return H.m_(a)}return H.ku(a)},
lZ:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bg(u,10))>>>0,56320|u&1023)}throw H.i(P.b1(a,0,1114111,null,null))},
bS:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lY:function(a){var u=H.bS(a).getFullYear()+0
return u},
lW:function(a){var u=H.bS(a).getMonth()+1
return u},
lS:function(a){var u=H.bS(a).getDate()+0
return u},
lT:function(a){var u=H.bS(a).getHours()+0
return u},
lV:function(a){var u=H.bS(a).getMinutes()+0
return u},
lX:function(a){var u=H.bS(a).getSeconds()+0
return u},
lU:function(a){var u=H.bS(a).getMilliseconds()+0
return u},
F:function(a){throw H.i(H.bb(a))},
h:function(a,b){if(a==null)J.c8(a)
throw H.i(H.c0(a,b))},
c0:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aN(!0,b,s,null)
u=H.af(J.c8(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.U(b,a,s,null,u)
return P.dE(b,s)},
mz:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bU(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bU(a,c,!0,b,"end",u)
return new P.aN(!0,b,"end",null)},
bb:function(a){return new P.aN(!0,a,null,null)},
mu:function(a){if(typeof a!=="number")throw H.i(H.bb(a))
return a},
i:function(a){var u
if(a==null)a=new P.dA()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lb})
u.name=""}else u.toString=H.lb
return u},
lb:function(){return J.aw(this.dartException)},
t:function(a){throw H.i(a)},
B:function(a){throw H.i(P.ce(a))},
b8:function(a){var u,t,s,r,q,p
a=H.l8(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kD:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ko:function(a,b){return new H.hi(a,b==null?null:b.method)},
jG:function(a,b){var u=b==null,t=u?null:b.method
return new H.fL(a,t,u?null:b.receiver)},
bK:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jt(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.h.bg(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jG(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ko(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.le()
q=$.lf()
p=$.lg()
o=$.lh()
n=$.lk()
m=$.ll()
l=$.lj()
$.li()
k=$.ln()
j=$.lm()
i=r.ag(u)
if(i!=null)return f.$1(H.jG(H.S(u),i))
else{i=q.ag(u)
if(i!=null){i.method="call"
return f.$1(H.jG(H.S(u),i))}else{i=p.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=n.ag(u)
if(i==null){i=m.ag(u)
if(i==null){i=l.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=k.ag(u)
if(i==null){i=j.ag(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ko(H.S(u),i))}}return f.$1(new H.ig(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dL()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aN(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dL()
return a},
c3:function(a){var u
if(a==null)return new H.eB(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eB(a)},
mC:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.a8(0,a[u],a[t])}return b},
mL:function(a,b,c,d,e,f){H.k(a,"$ijB")
switch(H.af(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.q("Unsupported number of arguments for wrapped closure"))},
c_:function(a,b){var u
H.af(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mL)
a.$identity=u
return u},
lC:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hK().constructor.prototype):Object.create(new H.c9(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aO
if(typeof t!=="number")return t.n()
$.aO=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.ka(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.mH,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.k9:H.jv
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.i("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ka(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
lz:function(a,b,c,d){var u=H.jv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ka:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lB(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lz(t,!r,u,b)
if(t===0){r=$.aO
if(typeof r!=="number")return r.n()
$.aO=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ca
return new Function(r+H.l(q==null?$.ca=H.fa("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aO
if(typeof r!=="number")return r.n()
$.aO=r+1
o+=r
r="return function("+o+"){return this."
q=$.ca
return new Function(r+H.l(q==null?$.ca=H.fa("self"):q)+"."+H.l(u)+"("+o+");}")()},
lA:function(a,b,c,d){var u=H.jv,t=H.k9
switch(b?-1:a){case 0:throw H.i(H.m2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lB:function(a,b){var u,t,s,r,q,p,o,n=$.ca
if(n==null)n=$.ca=H.fa("self")
u=$.k8
if(u==null)u=$.k8=H.fa("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lA(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.aO
if(typeof u!=="number")return u.n()
$.aO=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.aO
if(typeof u!=="number")return u.n()
$.aO=u+1
return new Function(n+u+"}")()},
jX:function(a,b,c,d,e,f,g){return H.lC(a,b,H.af(c),d,!!e,!!f,g)},
jv:function(a){return a.a},
k9:function(a){return a.c},
fa:function(a){var u,t,s,r=new H.c9("self","target","receiver","name"),q=J.jD(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
C:function(a){if(a==null)H.mq("boolean expression must not be null")
return a},
S:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aJ(a,"String"))},
nB:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aJ(a,"double"))},
mR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aJ(a,"num"))},
l_:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aJ(a,"bool"))},
af:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aJ(a,"int"))},
l6:function(a,b){throw H.i(H.aJ(a,H.c5(H.S(b).substring(2))))},
mT:function(a,b){throw H.i(H.ly(a,H.c5(H.S(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Y(a)[b])return a
H.l6(a,b)},
c:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Y(a)[b]
else u=!0
if(u)return a
H.mT(a,b)},
k0:function(a){if(a==null)return a
if(!!J.Y(a).$ib)return a
throw H.i(H.aJ(a,"List<dynamic>"))},
mN:function(a,b){var u
if(a==null)return a
u=J.Y(a)
if(!!u.$ib)return a
if(u[b])return a
H.l6(a,b)},
l0:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.af(u)]
else return a.$S()}return},
eX:function(a,b){var u
if(typeof a=="function")return!0
u=H.l0(J.Y(a))
if(u==null)return!1
return H.kR(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.jR)return a
$.jR=!0
try{if(H.eX(a,b))return a
u=H.jq(b)
t=H.aJ(a,u)
throw H.i(t)}finally{$.jR=!1}},
jY:function(a,b){if(a!=null&&!H.jW(a,b))H.t(H.aJ(a,H.jq(b)))
return a},
aJ:function(a,b){return new H.i6("TypeError: "+P.de(a)+": type '"+H.kV(a)+"' is not a subtype of type '"+b+"'")},
ly:function(a,b){return new H.fb("CastError: "+P.de(a)+": type '"+H.kV(a)+"' is not a subtype of type '"+b+"'")},
kV:function(a){var u,t=J.Y(a)
if(!!t.$icc){u=H.l0(t)
if(u!=null)return H.jq(u)
return"Closure"}return H.bT(a)},
mq:function(a){throw H.i(new H.iC(a))},
mY:function(a){throw H.i(new P.fk(H.S(a)))},
m2:function(a){return new H.hx(a)},
l1:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bJ:function(a){if(a==null)return
return a.$ti},
nC:function(a,b,c){return H.c4(a["$a"+H.l(c)],H.bJ(b))},
c2:function(a,b,c,d){var u
H.S(c)
H.af(d)
u=H.c4(a["$a"+H.l(c)],H.bJ(b))
return u==null?null:u[d]},
aB:function(a,b,c){var u
H.S(b)
H.af(c)
u=H.c4(a["$a"+H.l(b)],H.bJ(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.af(b)
u=H.bJ(a)
return u==null?null:u[b]},
jq:function(a){return H.bI(a,null)},
bI:function(a,b){var u,t
H.j(b,"$ib",[P.o],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c5(a[0].name)+H.jU(a,1,b)
if(typeof a=="function")return H.c5(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.af(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.l(b[t])}if('func' in a)return H.mj(a,b)
if('futureOr' in a)return"FutureOr<"+H.bI("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mj:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.o]
H.j(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.h(a0,n)
p=C.j.n(p,a0[n])
m=u[q]
if(m!=null&&m!==P.O)p+=" extends "+H.bI(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bI(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bI(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bI(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.mB(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.S(b[h])
j=j+i+H.bI(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jU:function(a,b,c){var u,t,s,r,q,p
H.j(c,"$ib",[P.o],"$ab")
if(a==null)return""
u=new P.bD("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bI(p,c)}return"<"+u.i(0)+">"},
c4:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jV:function(a,b,c,d){var u,t
H.S(b)
H.k0(c)
H.S(d)
if(a==null)return!1
u=H.bJ(a)
t=J.Y(a)
if(t[b]==null)return!1
return H.kY(H.c4(t[d],u),null,c,null)},
j:function(a,b,c,d){H.S(b)
H.k0(c)
H.S(d)
if(a==null)return a
if(H.jV(a,b,c,d))return a
throw H.i(H.aJ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c5(b.substring(2))+H.jU(c,0,null),v.mangledGlobalNames)))},
kY:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aA(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aA(a[t],b,c[t],d))return!1
return!0},
nz:function(a,b,c){return a.apply(b,H.c4(J.Y(b)["$a"+H.l(c)],H.bJ(b)))},
l3:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="N"||a===-1||a===-2||H.l3(u)}return!1},
jW:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="N"||b===-1||b===-2||H.l3(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jW(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eX(a,b)}u=J.Y(a).constructor
t=H.bJ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aA(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.jW(a,b))throw H.i(H.aJ(a,H.jq(b)))
return a},
aA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.kR(a,b,c,d)
if('func' in a)return c.name==="jB"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aA("type" in a?a.type:l,b,s,d)
else if(H.aA(a,b,s,d))return!0
else{if(!('$i'+"ci" in t.prototype))return!1
r=t.prototype["$a"+"ci"]
q=H.c4(r,u?a.slice(1):l)
return H.aA(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kY(H.c4(m,u),b,p,d)},
kR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.mQ(h,b,g,d)},
mQ:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aA(c[s],d,a[s],b))return!1}return!0},
nA:function(a,b,c){Object.defineProperty(a,H.S(b),{value:c,enumerable:false,writable:true,configurable:true})},
mO:function(a){var u,t,s,r,q=H.S($.l2.$1(a)),p=$.jj[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jo[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.S($.kX.$2(a,q))
if(q!=null){p=$.jj[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jo[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jp(u)
$.jj[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jo[q]=u
return u}if(s==="-"){r=H.jp(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.l5(a,u)
if(s==="*")throw H.i(P.kE(q))
if(v.leafTags[q]===true){r=H.jp(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.l5(a,u)},
l5:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.k1(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jp:function(a){return J.k1(a,!1,null,!!a.$iH)},
mP:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jp(u)
else return J.k1(u,c,null,null)},
mJ:function(){if(!0===$.k_)return
$.k_=!0
H.mK()},
mK:function(){var u,t,s,r,q,p,o,n
$.jj=Object.create(null)
$.jo=Object.create(null)
H.mI()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l7.$1(q)
if(p!=null){o=H.mP(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mI:function(){var u,t,s,r,q,p,o=C.y()
o=H.bZ(C.z,H.bZ(C.A,H.bZ(C.t,H.bZ(C.t,H.bZ(C.B,H.bZ(C.C,H.bZ(C.D(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.l2=new H.jl(r)
$.kX=new H.jm(q)
$.l7=new H.jn(p)},
bZ:function(a,b){return a(b)||b},
lK:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.fE("Illegal RegExp pattern ("+String(r)+")",a))},
mW:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mA:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
l8:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l9:function(a,b,c){var u=H.mX(a,b,c)
return u},
mX:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.l8(b),'g'),H.mA(c))},
i4:function i4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hi:function hi(a,b){this.a=a
this.b=b},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(a){this.a=a},
jt:function jt(a){this.a=a},
eB:function eB(a){this.a=a
this.b=null},
cc:function cc(){},
hS:function hS(){},
hK:function hK(){},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i6:function i6(a){this.a=a},
fb:function fb(a){this.a=a},
hx:function hx(a){this.a=a},
iC:function iC(a){this.a=a},
aV:function aV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fP:function fP(a,b){this.a=a
this.b=b
this.c=null},
dn:function dn(a,b){this.a=a
this.$ti=b},
fQ:function fQ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
fK:function fK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bX:function(a){return a},
bH:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.c0(b,a))},
mi:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.mz(a,b,c))
return b},
cp:function cp(){},
dv:function dv(){},
co:function co(){},
dw:function dw(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
dx:function dx(){},
hf:function hf(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
mB:function(a){return J.kg(a?Object.keys(a):[],null)},
mS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eY:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.k_==null){H.mJ()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.i(P.kE("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.k3()]
if(r!=null)return r
r=H.mO(a)
if(r!=null)return r
if(typeof a=="function")return C.L
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.k3(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
lJ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.ju(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.b1(a,0,4294967295,"length",null))
return J.kg(new Array(a),b)},
kg:function(a,b){return J.jD(H.d(a,[b]))},
jD:function(a){H.k0(a)
a.fixed$length=Array
return a},
Y:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.di.prototype
return J.dh.prototype}if(typeof a=="string")return J.bz.prototype
if(a==null)return J.dj.prototype
if(typeof a=="boolean")return J.fJ.prototype
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.O)return a
return J.eY(a)},
mD:function(a){if(typeof a=="number")return J.by.prototype
if(typeof a=="string")return J.bz.prototype
if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.O)return a
return J.eY(a)},
jk:function(a){if(typeof a=="string")return J.bz.prototype
if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.O)return a
return J.eY(a)},
jZ:function(a){if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.O)return a
return J.eY(a)},
mE:function(a){if(typeof a=="number")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bW.prototype
return a},
mF:function(a){if(typeof a=="number")return J.by.prototype
if(typeof a=="string")return J.bz.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bW.prototype
return a},
mG:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.O)return a
return J.eY(a)},
ls:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.mD(a).n(a,b)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Y(a).q(a,b)},
k5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mF(a).v(a,b)},
lt:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mE(a).p(a,b)},
lu:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mM(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jk(a).j(a,b)},
lv:function(a,b,c,d){return J.mG(a).iq(a,b,c,d)},
k6:function(a,b){return J.jZ(a).H(a,b)},
lw:function(a,b){return J.jZ(a).P(a,b)},
bL:function(a){return J.Y(a).gJ(a)},
c7:function(a){return J.jZ(a).gU(a)},
c8:function(a){return J.jk(a).gk(a)},
aw:function(a){return J.Y(a).i(a)},
a:function a(){},
fJ:function fJ(){},
dj:function dj(){},
dk:function dk(){},
hm:function hm(){},
bW:function bW(){},
bd:function bd(){},
aC:function aC(a){this.$ti=a},
jE:function jE(a){this.$ti=a},
ao:function ao(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
by:function by(){},
di:function di(){},
dh:function dh(){},
bz:function bz(){}},P={
m9:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mr()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c_(new P.iE(s),1)).observe(u,{childList:true})
return new P.iD(s,u,t)}else if(self.setImmediate!=null)return P.ms()
return P.mt()},
ma:function(a){self.scheduleImmediate(H.c_(new P.iF(H.m(a,{func:1,ret:-1})),0))},
mb:function(a){self.setImmediate(H.c_(new P.iG(H.m(a,{func:1,ret:-1})),0))},
mc:function(a){P.jM(C.o,H.m(a,{func:1,ret:-1}))},
jM:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.h.a6(a.a,1000)
return P.mf(u<0?0:u,b)},
kC:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[P.b6]})
u=C.h.a6(a.a,1000)
return P.mg(u<0?0:u,b)},
mf:function(a,b){var u=new P.eH()
u.eI(a,b)
return u},
mg:function(a,b){var u=new P.eH()
u.eJ(a,b)
return u},
md:function(a,b){var u,t,s
b.a=1
try{a.eb(new P.iO(b),new P.iP(b),null)}catch(s){u=H.bK(s)
t=H.c3(s)
P.mU(new P.iQ(b,u,t))}},
kO:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaz")
if(u>=4){t=b.bT()
b.a=a.a
b.c=a.c
P.cK(b,t)}else{t=H.k(b.c,"$iba")
b.a=2
b.c=a
a.da(t)}},
cK:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iaj")
g=g.b
r=s.a
q=s.b
g.toString
P.je(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
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
P.je(i,i,g,r,q)
return}l=$.X
if(l!=n)$.X=n
else l=i
g=b.c
if(g===8)new P.iU(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.iT(u,b,o).$0()}else if((g&2)!==0)new P.iS(h,u,b).$0()
if(l!=null)$.X=l
g=u.b
if(!!J.Y(g).$ici){if(g.a>=4){k=H.k(q.c,"$iba")
q.c=null
b=q.bf(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kO(g,q)
return}}j=b.b
k=H.k(j.c,"$iba")
j.c=null
b=j.bf(k)
g=u.a
r=u.b
if(!g){H.E(r,H.x(j,0))
j.a=4
j.c=r}else{H.k(r,"$iaj")
j.a=8
j.c=r}h.a=j
g=j}},
mm:function(a,b){if(H.eX(a,{func:1,args:[P.O,P.aq]}))return H.m(a,{func:1,ret:null,args:[P.O,P.aq]})
if(H.eX(a,{func:1,args:[P.O]}))return H.m(a,{func:1,ret:null,args:[P.O]})
throw H.i(P.ju(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ml:function(){var u,t
for(;u=$.bY,u!=null;){$.cW=null
t=u.b
$.bY=t
if(t==null)$.cV=null
u.a.$0()}},
mp:function(){$.jS=!0
try{P.ml()}finally{$.cW=null
$.jS=!1
if($.bY!=null)$.k4().$1(P.kZ())}},
kU:function(a){var u=new P.e5(H.m(a,{func:1,ret:-1}))
if($.bY==null){$.bY=$.cV=u
if(!$.jS)$.k4().$1(P.kZ())}else $.cV=$.cV.b=u},
mo:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.bY
if(u==null){P.kU(a)
$.cW=$.cV
return}t=new P.e5(a)
s=$.cW
if(s==null){t.b=u
$.bY=$.cW=t}else{t.b=s.b
$.cW=s.b=t
if(t.b==null)$.cV=t}},
mU:function(a){var u,t=null,s={func:1,ret:-1}
H.m(a,s)
u=$.X
if(C.k===u){P.jg(t,t,C.k,a)
return}u.toString
P.jg(t,t,u,H.m(u.c5(a),s))},
kB:function(a,b){var u,t={func:1,ret:-1}
H.m(b,t)
u=$.X
if(u===C.k){u.toString
return P.jM(a,b)}return P.jM(a,H.m(u.c5(b),t))},
m8:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b6]}
H.m(b,s)
u=$.X
if(u===C.k){u.toString
return P.kC(a,b)}t=u.dl(b,P.b6)
$.X.toString
return P.kC(a,H.m(t,s))},
je:function(a,b,c,d,e){var u={}
u.a=d
P.mo(new P.jf(u,e))},
kS:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.X
if(t===c)return d.$0()
$.X=c
u=t
try{t=d.$0()
return t}finally{$.X=u}},
kT:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.E(e,g)
t=$.X
if(t===c)return d.$1(e)
$.X=c
u=t
try{t=d.$1(e)
return t}finally{$.X=u}},
mn:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
t=$.X
if(t===c)return d.$2(e,f)
$.X=c
u=t
try{t=d.$2(e,f)
return t}finally{$.X=u}},
jg:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.c5(d):c.iv(d,-1)
P.kU(d)},
iE:function iE(a){this.a=a},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
eH:function eH(){this.c=0},
j9:function j9(a,b){this.a=a
this.b=b},
j8:function j8(a,b,c,d){var _=this
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
az:function az(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iN:function iN(a,b){this.a=a
this.b=b},
iR:function iR(a,b){this.a=a
this.b=b},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iV:function iV(a){this.a=a},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a){this.a=a
this.b=null},
hN:function hN(){},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
cx:function cx(){},
hO:function hO(){},
b6:function b6(){},
aj:function aj(a,b){this.a=a
this.b=b},
jb:function jb(){},
jf:function jf(a,b){this.a=a
this.b=b},
j1:function j1(){},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a,b){this.a=a
this.b=b},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
lM:function(a,b){return new H.aV([a,b])},
lN:function(a){return H.mC(a,new H.aV([null,null]))},
lO:function(a){return new P.iZ([a])},
jQ:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kQ:function(a,b,c){var u=new P.j_(a,b,[c])
u.c=a.e
return u},
lH:function(a,b,c){var u,t
if(P.jT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.o])
C.a.h($.ar,a)
try{P.mk(a,u)}finally{if(0>=$.ar.length)return H.h($.ar,-1)
$.ar.pop()}t=P.kx(b,H.mN(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jC:function(a,b,c){var u,t
if(P.jT(a))return b+"..."+c
u=new P.bD(b)
C.a.h($.ar,a)
try{t=u
t.a=P.kx(t.a,a,", ")}finally{if(0>=$.ar.length)return H.h($.ar,-1)
$.ar.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jT:function(a){var u,t
for(u=$.ar.length,t=0;t<u;++t)if(a===$.ar[t])return!0
return!1},
mk:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.j(b,"$ib",[P.o],"$ab")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.l(u.gL(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gL(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL(u);++s
for(;u.B();o=n,n=m){m=u.gL(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
ki:function(a){var u,t={}
if(P.jT(a))return"{...}"
u=new P.bD("")
try{C.a.h($.ar,a)
u.a+="{"
t.a=!0
J.lw(a,new P.fV(t,u))
u.a+="}"}finally{if(0>=$.ar.length)return H.h($.ar,-1)
$.ar.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iZ:function iZ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cL:function cL(a){this.a=a
this.c=this.b=null},
j_:function j_(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fR:function fR(){},
u:function u(){},
fU:function fU(){},
fV:function fV(a,b){this.a=a
this.b=b},
ah:function ah(){},
j5:function j5(){},
ek:function ek(){},
cd:function cd(){},
d6:function d6(){},
ft:function ft(){},
ij:function ij(){},
ik:function ik(){},
ja:function ja(a){this.b=0
this.c=a},
lG:function(a){if(a instanceof H.cc)return a.i(0)
return"Instance of '"+H.bT(a)+"'"},
lP:function(a,b,c){var u,t
H.E(b,c)
u=J.lJ(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a8(u,t,b)
return H.j(u,"$ib",[c],"$ab")},
kh:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.c7(a);u.B();)C.a.h(s,H.E(u.gL(u),c))
if(b)return s
return H.j(J.jD(s),"$ib",t,"$ab")},
jL:function(a){var u,t,s=P.y
H.j(a,"$ie",[s],"$ae")
if(a.constructor===Array){H.j(a,"$iaC",[s],"$aaC")
u=a.length
t=P.jJ(0,null,u)
return H.kv(t<u?C.a.el(a,0,t):a)}return P.m4(a,0,null)},
m4:function(a,b,c){var u,t,s
H.j(a,"$ie",[P.y],"$ae")
u=J.c7(a)
for(t=0;t<b;++t)if(!u.B())throw H.i(P.b1(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gL(u))
return H.kv(s)},
m0:function(a){return new H.fK(a,H.lK(a,!1,!0,!1))},
kx:function(a,b,c){var u=J.c7(b)
if(!u.B())return a
if(c.length===0){do a+=H.l(u.gL(u))
while(u.B())}else{a+=H.l(u.gL(u))
for(;u.B();)a=a+c+H.l(u.gL(u))}return a},
mh:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.j(a,"$ib",[P.y],"$ab")
if(c===C.u){u=$.lr().b
u=u.test(b)}else u=!1
if(u)return b
t=C.F.ix(H.E(b,H.aB(c,"cd",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lZ(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lD:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lE:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d8:function(a){if(a>=10)return""+a
return"0"+a},
kc:function(a,b){return new P.aR(1e6*b+1000*a)},
de:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lG(a)},
lx:function(a){return new P.aN(!1,null,null,a)},
ju:function(a,b,c){return new P.aN(!0,a,b,c)},
dE:function(a,b){return new P.bU(null,null,!0,a,b,"Value not in range")},
b1:function(a,b,c,d,e){return new P.bU(b,c,!0,a,d,"Invalid value")},
jJ:function(a,b,c){if(0>a||a>c)throw H.i(P.b1(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.i(P.b1(b,a,c,"end",null))
return b}return c},
jI:function(a,b){if(typeof a!=="number")return a.aO()
if(a<0)throw H.i(P.b1(a,0,null,b,null))},
U:function(a,b,c,d,e){var u=H.af(e==null?J.c8(b):e)
return new P.fI(u,!0,a,c,"Index out of range")},
al:function(a){return new P.ih(a)},
kE:function(a){return new P.ie(a)},
ce:function(a){return new P.ff(a)},
q:function(a){return new P.ed(a)},
k2:function(a){H.mS(a)},
a2:function a2(){},
ax:function ax(a,b){this.a=a
this.b=b},
w:function w(){},
aR:function aR(a){this.a=a},
fq:function fq(){},
fr:function fr(){},
bs:function bs(){},
f2:function f2(){},
dA:function dA(){},
aN:function aN(a,b,c,d){var _=this
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
fI:function fI(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ih:function ih(a){this.a=a},
ie:function ie(a){this.a=a},
dM:function dM(a){this.a=a},
ff:function ff(a){this.a=a},
hl:function hl(){},
dL:function dL(){},
fk:function fk(a){this.a=a},
ed:function ed(a){this.a=a},
fE:function fE(a,b){this.a=a
this.b=b},
y:function y(){},
e:function e(){},
aU:function aU(){},
b:function b(){},
P:function P(){},
N:function N(){},
aa:function aa(){},
O:function O(){},
aq:function aq(){},
o:function o(){},
bD:function bD(a){this.a=a},
mx:function(a){var u,t=J.Y(a)
if(!!t.$ibu){u=t.gdz(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eM(a.data,a.height,a.width)},
mw:function(a){if(a instanceof P.eM)return{data:a.a,height:a.b,width:a.c}
return a},
bn:function(a){var u,t,s,r,q
if(a==null)return
u=P.lM(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=H.S(t[r])
u.a8(0,q,a[q])}return u},
mv:function(a){var u={}
a.P(0,new P.jh(u))
return u},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a){this.a=a},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(){},
fC:function fC(){},
iY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
me:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j0:function j0(){},
ap:function ap(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
be:function be(){},
fN:function fN(){},
bj:function bj(){},
hj:function hj(){},
hp:function hp(){},
hR:function hR(){},
p:function p(){},
bl:function bl(){},
i3:function i3(){},
ei:function ei(){},
ej:function ej(){},
es:function es(){},
et:function et(){},
eD:function eD(){},
eE:function eE(){},
eK:function eK(){},
eL:function eL(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(a){this.a=a},
f7:function f7(){},
bM:function bM(){},
hk:function hk(){},
e6:function e6(){},
d1:function d1(){},
dg:function dg(){},
dD:function dD(){},
dF:function dF(){},
bV:function bV(){},
dG:function dG(){},
dN:function dN(){},
dZ:function dZ(){},
hJ:function hJ(){},
ez:function ez(){},
eA:function eA(){}},W={
jw:function(){var u=document.createElement("canvas")
return u},
lF:function(a){H.k(a,"$if")
return"wheel"},
iX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kP:function(a,b,c,d){var u=W.iX(W.iX(W.iX(W.iX(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a9:function(a,b,c,d,e){var u=W.kW(new W.iM(c),W.n)
if(u!=null&&!0)J.lv(a,b,u,!1)
return new W.iL(a,b,u,!1,[e])},
kW:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.X
if(u===C.k)return a
return u.dl(a,b)},
r:function r(){},
eZ:function eZ(){},
f0:function f0(){},
f1:function f1(){},
d0:function d0(){},
bO:function bO(){},
cb:function cb(){},
bp:function bp(){},
cf:function cf(){},
fg:function fg(){},
Q:function Q(){},
cg:function cg(){},
fh:function fh(){},
aP:function aP(){},
aQ:function aQ(){},
fi:function fi(){},
fj:function fj(){},
fl:function fl(){},
da:function da(){},
fn:function fn(){},
db:function db(){},
dc:function dc(){},
fo:function fo(){},
fp:function fp(){},
iI:function iI(a,b){this.a=a
this.b=b},
a7:function a7(){},
n:function n(){},
f:function f(){},
aS:function aS(){},
fy:function fy(){},
fz:function fz(){},
fD:function fD(){},
aT:function aT(){},
fG:function fG(){},
bR:function bR(){},
bu:function bu(){},
ck:function ck(){},
aW:function aW(){},
fS:function fS(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(a){this.a=a},
h6:function h6(){},
h7:function h7(a){this.a=a},
aZ:function aZ(){},
h8:function h8(){},
ac:function ac(){},
iH:function iH(a){this.a=a},
I:function I(){},
cq:function cq(){},
b0:function b0(){},
hn:function hn(){},
hv:function hv(){},
hw:function hw(a){this.a=a},
hy:function hy(){},
b2:function b2(){},
hH:function hH(){},
b3:function b3(){},
hI:function hI(){},
b4:function b4(){},
hL:function hL(){},
hM:function hM(a){this.a=a},
aE:function aE(){},
b5:function b5(){},
aF:function aF(){},
hT:function hT(){},
hU:function hU(){},
hZ:function hZ(){},
b7:function b7(){},
aI:function aI(){},
i1:function i1(){},
i2:function i2(){},
bF:function bF(){},
ii:function ii(){},
iz:function iz(){},
b9:function b9(){},
cJ:function cJ(){},
iJ:function iJ(){},
e8:function e8(){},
iW:function iW(){},
ep:function ep(){},
j6:function j6(){},
j7:function j7(){},
iK:function iK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jP:function jP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iL:function iL(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iM:function iM(a){this.a=a},
A:function A(){},
df:function df(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e7:function e7(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
eq:function eq(){},
er:function er(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
cQ:function cQ(){},
cR:function cR(){},
ex:function ex(){},
ey:function ey(){},
eC:function eC(){},
eF:function eF(){},
eG:function eG(){},
cS:function cS(){},
cT:function cT(){},
eI:function eI(){},
eJ:function eJ(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){}},O={
fd:function(a){var u=new O.T([a])
u.bb(a)
return u},
T:function T(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cm:function cm(){this.b=this.a=null},
kz:function(a,b,c){var u,t,s,r=new O.aH(),q=r.a
r.a=c
c.gm().h(0,r.gad())
u=new D.z("texture",q,r.a,[T.dO])
u.b=!0
r.G(u)
t=V.aY()
if(!J.L(r.b,t)){q=r.b
r.b=t
u=new D.z("colorMatrix",q,t,[V.ab])
u.b=!0
r.G(u)}s=V.hq()
if(!J.L(r.c,s)){q=r.c
r.c=s
u=new D.z("source",q,s,[V.bC])
u.b=!0
r.G(u)}if(!J.L(r.d,a)){q=r.d
r.d=a
u=new D.z("destination",q,a,[V.bC])
u.b=!0
r.G(u)}if(r.e!==b){r.e=b
u=new D.z("flip",!b,b,[P.a2])
u.b=!0
r.G(u)}r.f=null
return r},
fm:function fm(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ds:function ds(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fY:function fY(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
du:function du(){},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aX:function aX(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h0:function h0(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h1:function h1(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dy:function dy(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dI:function dI(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bE:function bE(){},
dP:function dP(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aH:function aH(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
jz:function(){var u=new E.ak()
u.a=""
u.b=!0
u.sex(0,O.fd(E.ak))
u.y.aD(u.giQ(),u.giT())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sba(0,null)
u.sb1(null)
return u},
m1:function(a,b){var u=new E.hr(a)
u.es(a,b)
return u},
m7:function(a,b,c,d,e){var u,t,s=J.Y(a)
if(!!s.$ibO)return E.kA(a,!0,!0,!0,!1)
u=W.jw()
t=u.style
t.width="100%"
t.height="100%"
s.gds(a).h(0,u)
return E.kA(u,!0,!0,!0,!1)},
kA:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dU(),j=H.k(C.l.cD(a,"webgl2",P.lN(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibV")
if(j==null)H.t(P.q("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.m1(j,a)
u=new T.hW(j)
H.af(j.getParameter(3379))
u.c=H.af(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e1(a)
t=new X.fM()
t.c=new X.as(!1,!1,!1)
t.shr(P.lO(P.y))
u.b=t
t=new X.h9(u)
t.f=0
t.r=V.bk()
t.x=V.bk()
t.ch=t.Q=1
u.c=t
t=new X.fT(u)
t.r=0
t.x=V.bk()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i0(u)
t.f=V.bk()
t.r=V.bk()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sf4(H.d([],[[P.cx,P.O]]))
t=u.z
s=document
r=W.ac
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a9(s,"contextmenu",H.m(u.gfJ(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a9(a,"focus",H.m(u.gfT(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a9(a,"blur",H.m(u.gfD(),o),!1,p))
t=u.z
n=W.aW
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a9(s,"keyup",H.m(u.gfX(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a9(s,"keydown",H.m(u.gfV(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a9(a,"mousedown",H.m(u.gh0(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,"mouseup",H.m(u.gh4(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,l,H.m(u.gh2(),q),!1,r))
n=u.z
m=W.b9;(n&&C.a).h(n,W.a9(a,H.S(W.lF(a)),H.m(u.gh6(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a9(s,l,H.m(u.gfL(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a9(s,"mouseup",H.m(u.gfN(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a9(s,"pointerlockchange",H.m(u.gh8(),o),!1,p))
p=u.z
o=W.aI
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a9(a,"touchstart",H.m(u.gho(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchend",H.m(u.ghk(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchmove",H.m(u.ghm(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ax(Date.now(),!1)
k.cy=0
k.dd()
return k},
f9:function f9(){},
ak:function ak(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
dU:function dU(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hY:function hY(a){this.a=a}},Z={
jO:function(a,b,c){var u
H.j(c,"$ib",[P.y],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bX(c)),35044)
a.bindBuffer(b,null)
return new Z.e4(b,u)},
ay:function(a){return new Z.an(a)},
e4:function e4(a,b){this.a=a
this.b=b},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bG:function bG(a){this.a=a},
bc:function bc(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
an:function an(a){this.a=a}},D={
G:function(){var u=new D.bt()
u.saa(null)
u.saI(null)
u.c=null
u.d=0
return u},
fc:function fc(){},
bt:function bt(){var _=this
_.d=_.c=_.b=_.a=null},
fv:function fv(a){this.a=a},
fw:function fw(a){this.a=a},
v:function v(){this.b=null},
bw:function bw(a){this.b=null
this.$ti=a},
bx:function bx(a){this.b=null
this.$ti=a},
z:function z(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
br:function br(){var _=this
_.d=_.c=_.b=_.a=null},
a4:function a4(){},
dm:function dm(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dC:function dC(){},
dK:function dK(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){}},X={d3:function d3(a,b){this.a=a
this.b=b},dl:function dl(a,b){this.a=a
this.b=b},fM:function fM(){var _=this
_.d=_.c=_.b=_.a=null},dq:function dq(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fT:function fT(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},as:function as(a,b,c){this.a=a
this.b=b
this.c=c},bA:function bA(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},h9:function h9(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cn:function cn(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ho:function ho(){},dW:function dW(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i0:function i0(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e1:function e1(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k7:function(a,b,c){var u,t,s,r=new X.f8()
r.d=r.c=r.b=r.a=512
r.e=!0
r.f=!1
r.x=r.r=1
r.ch=T.ky(null)
r.cx=new V.a3(0,0,0,1)
r.cy=!0
r.db=2000
r.dx=!0
r.dy=V.hq()
r.sai(0,512)
r.saf(0,512)
if(c==null)c=new V.a3(0,0,0,1)
if(!r.cx.q(0,c)){u=r.cx
r.cx=c
t=new D.z("color",u,c,[V.a3])
t.b=!0
r.a2(t)}if(r.cy!==b){r.cy=b
t=new D.z("clearColor",!b,b,[P.a2])
t.b=!0
r.a2(t)}t=r.db
if(!(Math.abs(t-2000)<$.M().a)){r.db=2000
t=new D.z("depth",t,2000,[P.w])
t.b=!0
r.a2(t)}if(!r.f){r.f=!0
t=new D.z("autoResize",!1,!0,[P.a2])
t.b=!0
r.a2(t)}t=r.r
if(!(Math.abs(t-1)<$.M().a)){r.r=1
t=new D.z("autoResizeScalarX",t,1,[P.w])
t.b=!0
r.a2(t)}t=r.x
if(!(Math.abs(t-1)<$.M().a)){r.x=1
t=new D.z("autoResizeScalarY",t,1,[P.w])
t.b=!0
r.a2(t)}s=V.hq()
if(!J.L(r.dy,s)){u=r.dy
r.dy=s
t=new D.z("region",u,s,[V.bC])
t.b=!0
r.a2(t)}return r},
jA:function(a,b){var u=new X.fF(),t=new V.a3(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.hq()
u.r=t
return u},
kq:function(a){var u,t=new X.dB()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.sb1(a)
u=t.c
if(!(Math.abs(u-1.0471975511965976)<$.M().a)){t.c=1.0471975511965976
u=new D.z("fov",u,1.0471975511965976,[P.w])
u.b=!0
t.a2(u)}u=t.d
if(!(Math.abs(u-0.1)<$.M().a)){t.d=0.1
u=new D.z("near",u,0.1,[P.w])
u.b=!0
t.a2(u)}u=t.e
if(!(Math.abs(u-2000)<$.M().a)){t.e=2000
u=new D.z("far",u,2000,[P.w])
u.b=!0
t.a2(u)}return t},
f8:function f8(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bN:function bN(){},
fF:function fF(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fH:function fH(){this.b=this.a=null},
dB:function dB(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cy:function cy(){}},V={
n_:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.ei(a-b,u)
return(a<0?a+u:a)+b},
R:function(a,b,c){if(a==null)return C.j.ah("null",c)
return C.j.ah(C.d.ec(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
c1:function(a,b,c){var u,t,s,r,q,p
H.j(a,"$ib",[P.w],"$ab")
u=H.d([],[P.o])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.B)(a),++r){q=V.R(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.a8(u,p,C.j.ah(u[p],s))}return u},
cX:function(a){return C.d.jd(Math.pow(2,C.K.ck(Math.log(H.mu(a))/Math.log(2))))},
jH:function(){var u=$.kj
return u==null?$.kj=new V.cl(1,0,0,0,1,0,0,0,1):u},
aY:function(){var u=$.h2
return u==null?$.h2=V.bh(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bh:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ab(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
km:function(a,b,c){return V.bh(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kl:function(a,b,c){return V.bh(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
kk:function(a,b,c){var u=c.w(0,Math.sqrt(c.C(c))),t=b.ay(u),s=t.w(0,Math.sqrt(t.C(t))),r=u.ay(s),q=new V.K(a.a,a.b,a.c),p=s.S(0).C(q),o=r.S(0).C(q),n=u.S(0).C(q)
return V.bh(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bk:function(){var u=$.ks
return u==null?$.ks=new V.a5(0,0):u},
kt:function(){var u=$.cr
return u==null?$.cr=new V.a0(0,0,0):u},
hq:function(){var u=$.cu
return u==null?$.cu=V.ct(0,0,1,1):u},
ct:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bC(a,b,c,d)},
cI:function(){var u=$.kL
return u==null?$.kL=new V.K(0,0,0):u},
kM:function(){var u=$.kK
return u==null?$.kK=new V.K(0,1,0):u},
kN:function(){var u=$.il
return u==null?$.il=new V.K(0,0,1):u},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fu:function fu(a){this.a=a},
cl:function cl(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ab:function ab(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a5:function a5(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function(a){var u=new V.hz()
u.eu(a)
return u},
f_:function f_(){},
bg:function bg(){},
dr:function dr(){},
bi:function bi(){this.a=null},
hz:function hz(){this.a=null},
cw:function cw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a){this.b=a
this.c=null},
i_:function i_(){this.c=this.b=this.a=null},
cB:function cB(a){this.b=a
this.a=this.c=null},
mV:function(a){P.m8(C.I,new V.jr(a))},
m3:function(a){var u=new V.hD()
u.ev(a,!0)
return u},
jr:function jr(a){this.a=a},
hD:function hD(){this.b=this.a=null},
hF:function hF(a){this.a=a},
hE:function hE(a){this.a=a}},U={
kb:function(){var u=new U.fe()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jx:function(a){var u=new U.d5()
u.a=a
return u},
ke:function(){var u=new U.cj()
u.bb(U.ad)
u.aD(u.geA(),u.ghc())
u.e=null
u.f=V.aY()
u.r=0
return u},
kF:function(a,b){var u,t,s,r=new U.e2(),q=U.kb()
q.sef(0,!0)
q.sdZ(6.283185307179586)
q.se0(0)
q.sac(0,0)
q.se_(100)
q.sa1(0)
q.sdw(0.5)
r.b=q
u=r.gbc()
q.gm().h(0,u)
q=U.kb()
q.sef(0,!0)
q.sdZ(6.283185307179586)
q.se0(0)
q.sac(0,0)
q.se_(100)
q.sa1(0)
q.sdw(0.5)
r.c=q
q.gm().h(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.as(a,!1,!1)
s=r.d
r.d=t
q=new D.z("modifiers",s,t,[X.as])
q.b=!0
r.T(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.z("invertX",q,!1,[P.a2])
q.b=!0
r.T(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.z("invertY",q,!1,[P.a2])
q.b=!0
r.T(q)}r.c1(b)
return r},
kG:function(a,b){var u,t,s=new U.e3()
s.c=0.01
s.e=s.d=0
u=new X.as(a,!1,!1)
s.b=u
t=new D.z("modifiers",null,u,[X.as])
t.b=!0
s.T(t)
s.c1(b)
return s},
fe:function fe(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d5:function d5(){this.b=this.a=null},
cj:function cj(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ad:function ad(){},
e2:function e2(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
jy:function(){var u,t,s,r,q,p,o,n,m,l=null,k=new M.d7()
k.a=!0
u=E.jz()
t=F.jK()
s=t.a
r=new V.K(-1,-1,1)
r=r.w(0,Math.sqrt(r.C(r)))
q=s.bi(new V.aD(1,2,4,6),new V.a3(1,0,0,1),new V.a0(-1,-1,0),new V.a5(0,1),r,l)
s=t.a
r=new V.K(1,-1,1)
r=r.w(0,Math.sqrt(r.C(r)))
p=s.bi(new V.aD(0,3,4,6),new V.a3(0,0,1,1),new V.a0(1,-1,0),new V.a5(1,1),r,l)
s=t.a
r=new V.K(1,1,1)
r=r.w(0,Math.sqrt(r.C(r)))
o=s.bi(new V.aD(0,2,5,6),new V.a3(0,1,0,1),new V.a0(1,1,0),new V.a5(1,0),r,l)
s=t.a
r=V.bk()
n=new V.K(-1,1,1)
n=n.w(0,Math.sqrt(n.C(n)))
m=s.bi(new V.aD(0,2,4,7),new V.a3(1,1,0,1),new V.a0(-1,1,0),r,n,l)
t.d.ir(H.d([q,p,o,m],[F.am]))
t.aj()
u.sba(0,t)
k.e=u
k.saW(l)
k.saC(0,l)
k.sas(l)
return k},
kd:function(){var u,t=new M.dd()
t.a=!0
t.seT(0,O.fd(E.ak))
t.e.aD(t.gfF(),t.gfH())
t.y=t.x=t.r=t.f=null
u=X.jA(!0,null)
t.saW(null)
t.saC(0,u)
t.sas(null)
return t},
d4:function d4(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
d7:function d7(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dd:function dd(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
at:function at(){}},A={
lQ:function(a,b){var u=a.al,t=new A.dt(b,u)
t.aP(b,u)
t.er(a,b)
return t},
kn:function(a){var u,t=a!==C.c,s=a===C.f,r=a===C.e,q="Normal_"+C.h.i(a.a),p=$.ag(),o=$.aL()
o=p.a|o.a
u=new Z.an(o)
if(t)u=new Z.an(o|$.aK().a)
if(s)u=new Z.an(u.a|$.av().a)
return new A.hh(a,t,s,r,q,r?new Z.an(u.a|$.aM().a):u)},
m6:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.H
t=(s||b===C.m?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.G)t+="      clrAccum += color;\n"
else if(b===C.n)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.m
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
m5:function(a,b,c){var u="TextureLayout_"+a+"_"+C.h.i(b.a),t=new A.dQ(c,u)
t.aP(c,u)
t.ew(a,b,c)
return t},
jN:function(a,b,c,d,e){var u=new A.i8(a,c,e)
u.f=d
u.si_(P.lP(d,0,P.y))
return u},
d_:function d_(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a){this.a=a},
d9:function d9(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dt:function dt(a,b){var _=this
_.bl=_.dA=_.bk=_.al=_.ap=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dQ=_.cd=_.dP=_.by=_.dO=_.dN=_.bx=_.bw=_.dM=_.dL=_.bv=_.bu=_.bt=_.dK=_.dJ=_.bs=_.dI=_.dH=_.br=_.dG=_.dF=_.bq=_.bp=_.dE=_.dD=_.bo=_.bn=_.dC=_.dB=_.bm=null
_.cj=_.dU=_.ci=_.dT=_.cg=_.dS=_.cf=_.dR=_.ce=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h_:function h_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ap=b3
_.al=b4
_.bk=b5},
cC:function cC(a,b){this.b=a
this.c=b},
cF:function cF(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cD:function cD(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cG:function cG(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cE:function cE(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cH:function cH(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
dz:function dz(a,b){var _=this
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hh:function hh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cv:function cv(){},
bP:function bP(a,b){this.a=a
this.b=b},
bq:function bq(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dQ:function dQ(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dX:function dX(){},
ic:function ic(a){this.a=a},
D:function D(a,b,c){this.a=a
this.c=b
this.d=c},
i9:function i9(a,b,c){this.a=a
this.c=b
this.d=c},
ia:function ia(a,b,c){this.a=a
this.c=b
this.d=c},
ib:function ib(a,b,c){this.a=a
this.c=b
this.d=c},
i8:function i8(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
au:function au(a,b,c){this.a=a
this.c=b
this.d=c},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
dY:function dY(a,b,c){this.a=a
this.c=b
this.d=c},
id:function id(a,b,c){this.a=a
this.c=b
this.d=c},
bm:function bm(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
a1:function a1(a,b,c){this.a=a
this.c=b
this.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jd:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cU:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.K(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.K(u+a3,t+a1,s+a2)
q=new V.K(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.K(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jd(i)
l=F.jd(j.b)
k=F.la(d,a0,new F.jc(j,F.jd(j.c),F.jd(j.d),l,m,c),b)
if(k!=null)a.cq(k)},
mZ:function(){return F.my(15,30,0.5,1,new F.js())},
my:function(a,b,c,d,e){var u=F.la(a,b,new F.ji(H.m(e,{func:1,ret:V.a0,args:[P.w]}),d,b,c),null)
if(u==null)return
u.aj()
u.iP(new F.it(),new F.hg())
return u},
la:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.m(c,{func:1,ret:-1,args:[F.am,P.w,P.w]})
if(a<1)return
if(b<1)return
u=F.jK()
t=H.d([],[F.am])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.im(g,g,new V.a3(p,0,0,1),g,g,new V.a5(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.ca(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.im(g,g,new V.a3(j,i,h,1),g,g,new V.a5(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.ca(d))}}u.d.is(a+1,b+1,t)
return u},
ch:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.t(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.q("May not create a face with vertices attached to different shapes."))
u.bZ(a)
u.c_(b)
u.hC(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a4()
return u},
lL:function(a,b){var u=new F.bf(),t=a.a
if(t==null)H.t(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.q("May not create a line with vertices attached to different shapes."))
u.bZ(a)
u.c_(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a4()
return u},
jK:function(){var u=new F.dH(),t=new F.io(u)
t.b=!1
t.si0(H.d([],[F.am]))
u.a=t
t=new F.hC(u)
t.sbR(H.d([],[F.bB]))
u.b=t
t=new F.hB(u)
t.sfe(H.d([],[F.bf]))
u.c=t
t=new F.hA(u)
t.sf5(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
im:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.am(),r=new F.iw()
r.sbR(H.d([],[F.bB]))
s.b=r
r=new F.is()
u=[F.bf]
r.sff(H.d([],u))
r.sfg(H.d([],u))
s.c=r
r=new F.ip()
u=[F.a8]
r.sf6(H.d([],u))
r.sf7(H.d([],u))
r.sf8(H.d([],u))
s.d=r
h=$.lo()
s.e=0
r=$.ag()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aL().a)!==0?e:t
s.x=(u&$.aK().a)!==0?b:t
s.y=(u&$.av().a)!==0?f:t
s.z=(u&$.aM().a)!==0?g:t
s.Q=(u&$.lp().a)!==0?c:t
s.ch=(u&$.c6().a)!==0?i:0
s.cx=(u&$.bo().a)!==0?a:t
return s},
jc:function jc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
js:function js(){},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fx:function fx(){},
hG:function hG(){},
bf:function bf(){this.b=this.a=null},
fO:function fO(){},
i7:function i7(){},
bB:function bB(){this.a=null},
dH:function dH(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(a){this.a=a
this.b=null},
hB:function hB(a){this.a=a
this.b=null},
hC:function hC(a){this.a=a
this.b=null},
am:function am(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iy:function iy(a){this.a=a},
ix:function ix(a){this.a=a},
io:function io(a){this.a=a
this.c=this.b=null},
ip:function ip(){this.d=this.c=this.b=null},
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(a,b){this.a=a
this.b=b},
is:function is(){this.c=this.b=null},
iu:function iu(){},
it:function it(){},
iv:function iv(){},
hg:function hg(){},
iw:function iw(){this.b=null}},T={
ky:function(a){var u=new T.hV()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
aG:function aG(){},
dO:function dO(){},
hV:function hV(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cz:function cz(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hW:function hW(a){var _=this
_.a=a
_.e=_.d=_.c=null},
hX:function hX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},S={
l4:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6=V.m3("Test 031"),a7=W.jw()
a7.className="pageLargeCanvas"
a7.id=a4
a6.a.appendChild(a7)
u=[P.o]
a6.dk(H.d(["A test of the Distortion cover with a dynamic normal map. ","The distortion map is generated into one back buffer. ","The scene is generated into another back buffer. ","The two parts are combined with a Distortion cover. ","Use mouse to rotate cube in normal map and Ctrl plus mouse ","to rotate scene."],u))
a6.dk(H.d(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a4)
if(t==null)H.t(P.q("Failed to find an element with the identifier, testCanvas."))
s=E.m7(t,!0,!0,!0,!1)
r=E.jz()
q=F.jK()
F.cU(q,a5,a5,1,1,1,0,0,1)
F.cU(q,a5,a5,1,1,0,1,0,3)
F.cU(q,a5,a5,1,1,0,0,1,2)
F.cU(q,a5,a5,1,1,-1,0,0,0)
F.cU(q,a5,a5,1,1,0,-1,0,0)
F.cU(q,a5,a5,1,1,0,0,-1,3)
q.aj()
r.sba(0,q)
a6=U.ke()
a6.h(0,U.kF(!1,s.r))
a6.h(0,U.kG(!1,s.r))
r.sb1(a6)
p=new O.dy()
p.b=V.jH()
p.c=V.aY()
p.d=C.c
p.de(a5)
p.df(a5)
p.Y()
p.r=null
a6=s.f.iN("../resources/diceBumpMap")
if(p.d!==C.e){p.d=C.e
p.de(a5)
p.a=null}p.df(a6)
o=X.k7(!0,!0,new V.a3(0.5,0.5,1,1))
n=M.kd()
n.sas(p)
n.saC(0,o)
n.e.h(0,r)
n.b.sb1(U.jx(V.km(0,0,5)))
m=U.ke()
m.h(0,U.kF(!0,s.r))
m.h(0,U.kG(!0,s.r))
m.h(0,U.jx(V.km(0,0,5)))
l=X.kq(m)
k=X.k7(!0,!1,a5)
j=E.jz()
j.sba(0,F.mZ())
i=new O.ds()
i.seQ(O.fd(V.ab))
i.e.aD(i.gfz(),i.gfB())
a6=new O.aX(i,"emission")
a6.c=C.c
a6.f=new V.Z(0,0,0)
i.f=a6
a6=new O.aX(i,"ambient")
a6.c=C.c
a6.f=new V.Z(0,0,0)
i.r=a6
a6=new O.aX(i,"diffuse")
a6.c=C.c
a6.f=new V.Z(0,0,0)
i.x=a6
a6=new O.aX(i,"invDiffuse")
a6.c=C.c
a6.f=new V.Z(0,0,0)
i.y=a6
a6=new O.h1(i,"specular")
a6.c=C.c
a6.f=new V.Z(0,0,0)
a6.ch=100
i.z=a6
a6=new O.fZ(i,"bump")
a6.c=C.c
i.Q=a6
i.ch=null
a6=new O.aX(i,"reflect")
a6.c=C.c
a6.f=new V.Z(0,0,0)
i.cx=a6
a6=new O.h0(i,"refract")
a6.c=C.c
a6.f=new V.Z(0,0,0)
a6.ch=1
i.cy=a6
a6=new O.fY(i,"alpha")
a6.c=C.c
a6.f=1
i.db=a6
a6=new D.dm()
a6.bb(D.a4)
a6.sf0(H.d([],[D.br]))
a6.shq(H.d([],[D.dC]))
a6.shI(H.d([],[D.dK]))
a6.shW(H.d([],[D.dR]))
a6.shX(H.d([],[D.dS]))
a6.shY(H.d([],[D.dT]))
a6.ch=a6.Q=null
a6.cE(a6.gfv(),a6.gha(),a6.ghe())
i.dx=a6
u=a6.Q
a6=u==null?a6.Q=D.G():u
a6.h(0,i.ghx())
a6=i.dx
u=a6.ch
a6=u==null?a6.ch=D.G():u
a6.h(0,i.gad())
i.dy=null
a6=i.dx
h=V.kM()
u=U.jx(V.kk(V.kt(),h,new V.K(0,-1,-1)))
g=new V.Z(1,1,1)
f=new D.br()
f.c=new V.Z(1,1,1)
f.a=V.kN()
e=f.b
f.b=u
u.gm().h(0,f.gey())
u=new D.z("mover",e,f.b,[U.ad])
u.b=!0
f.at(u)
if(!f.c.q(0,g)){e=f.c
f.c=g
u=new D.z("color",e,g,[V.Z])
u.b=!0
f.at(u)}a6.h(0,f)
a6=i.r
a6.sao(0,new V.Z(0,0,1))
a6=i.x
a6.sao(0,new V.Z(0,1,0))
a6=i.z
a6.sao(0,new V.Z(1,0,0))
a6=i.z
if(a6.c===C.c){a6.c=C.i
a6.bF()
a6.bW(100)
u=a6.a
u.a=null
u.G(a5)}a6.bW(10)
a6=s.f.dX("../resources/maskonaive",".jpg")
d=M.jy()
u=new O.dI()
u.b=1.0471975511965976
u.d=new V.Z(1,1,1)
e=u.c
u.c=a6
a6.gm().h(0,u.gad())
a6=new D.z("boxTexture",e,u.c,[T.cz])
a6.b=!0
u.G(a6)
d.sas(u)
d.saC(0,k)
d.saW(l)
c=M.kd()
c.saW(l)
c.sas(i)
c.saC(0,k)
c.e.h(0,j)
b=new O.fm()
b.sdu(a5)
b.sdr(a5)
a=V.jH()
if(!J.L(b.d,a)){b.d=a
b.Y()}a=V.jH()
if(!J.L(b.e,a)){b.e=a
b.Y()}b.sdq(a5)
b.sdu(k.ch)
b.sdr(o.ch)
b.sdq(V.kl(0.05,0.05,0.05))
a0=M.jy()
a0.sas(b)
a1=new O.dP()
a1.a=new V.a3(0,0,0,0)
a1.sf3(O.fd(O.aH))
a1.c.aD(a1.gfP(),a1.gfR())
a1.d=0
a1.e=null
a1.r=a1.f=C.n
a2=new V.a3(0,0,0,0)
if(!a1.a.q(0,a2)){e=a1.a
a1.a=a2
a6=new D.z("backColor",e,a2,[V.a3])
a6.b=!0
a1.G(a6)}a1.sdm(C.n)
a1.sdm(C.m)
a6=a1.c
u=o.ch
a6.h(0,O.kz(V.ct(0,0.8,0.2,0.2),!0,u))
u=a1.c
a6=k.ch
u.h(0,O.kz(V.ct(0,0.6,0.2,0.2),!1,a6))
a3=M.jy()
a3.saC(0,X.jA(!1,a5))
a3.sas(a1)
a6=M.at
u=H.d([d,c,n,a0,a3],[a6])
f=new M.d4()
f.bb(a6)
f.e=!0
f.f=!1
f.r=null
f.aD(f.ghg(),f.ghi())
f.c0(0,u)
a6=s.d
if(a6!==f){if(a6!=null)a6.gm().F(0,s.gcK())
s.d=f
f.gm().h(0,s.gcK())
s.cL()}V.mV(s)}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jF.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gJ:function(a){return H.cs(a)},
i:function(a){return"Instance of '"+H.bT(a)+"'"}}
J.fJ.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$ia2:1}
J.dj.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dk.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.hm.prototype={}
J.bW.prototype={}
J.bd.prototype={
i:function(a){var u=a[$.ld()]
if(u==null)return this.en(a)
return"JavaScript function for "+H.l(J.aw(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijB:1}
J.aC.prototype={
h:function(a,b){H.E(b,H.x(a,0))
if(!!a.fixed$length)H.t(P.al("add"))
a.push(b)},
e7:function(a,b){if(!!a.fixed$length)H.t(P.al("removeAt"))
if(b<0||b>=a.length)throw H.i(P.dE(b,null))
return a.splice(b,1)[0]},
F:function(a,b){var u
if(!!a.fixed$length)H.t(P.al("remove"))
for(u=0;u<a.length;++u)if(J.L(a[u],b)){a.splice(u,1)
return!0}return!1},
c0:function(a,b){var u,t
H.j(b,"$ie",[H.x(a,0)],"$ae")
if(!!a.fixed$length)H.t(P.al("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.B)(b),++t)a.push(b[t])},
P:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.ce(a))}},
D:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.a8(t,u,H.l(a[u]))
return t.join(b)},
iL:function(a){return this.D(a,"")},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
el:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.b1(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.b1(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.x(a,0)])
return H.d(a.slice(b,c),[H.x(a,0)])},
giG:function(a){if(a.length>0)return a[0]
throw H.i(H.kf())},
gcn:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.kf())},
b9:function(a,b,c,d){var u,t,s=H.x(a,0)
H.j(d,"$ie",[s],"$ae")
if(!!a.immutable$list)H.t(P.al("setRange"))
P.jJ(b,c,a.length)
u=c-b
if(u===0)return
P.jI(0,"skipCount")
H.j(d,"$ib",[s],"$ab")
s=J.jk(d)
if(u>s.gk(d))throw H.i(H.lI())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
ak:function(a,b){var u
for(u=0;u<a.length;++u)if(J.L(a[u],b))return!0
return!1},
i:function(a){return P.jC(a,"[","]")},
gU:function(a){return new J.ao(a,a.length,[H.x(a,0)])},
gJ:function(a){return H.cs(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.al("set length"))
if(b<0)throw H.i(P.b1(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.i(H.c0(a,b))
return a[b]},
a8:function(a,b,c){H.E(c,H.x(a,0))
if(!!a.immutable$list)H.t(P.al("indexed set"))
if(b>=a.length||b<0)throw H.i(H.c0(a,b))
a[b]=c},
n:function(a,b){var u,t=[H.x(a,0)]
H.j(b,"$ib",t,"$ab")
u=C.h.n(a.length,b.gk(b))
t=H.d([],t)
this.sk(t,u)
this.b9(t,0,a.length,a)
this.b9(t,a.length,u,b)
return t},
$ie:1,
$ib:1}
J.jE.prototype={}
J.ao.prototype={
gL:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.i(H.B(s))
u=t.c
if(u>=r){t.sd_(null)
return!1}t.sd_(s[u]);++t.c
return!0},
sd_:function(a){this.d=H.E(a,H.x(this,0))},
$iaU:1}
J.by.prototype={
jd:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.al(""+a+".toInt()"))},
ck:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.al(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.al(""+a+".round()"))},
ec:function(a,b){var u,t
if(b>20)throw H.i(P.b1(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.i(H.bb(b))
return a+b},
p:function(a,b){if(typeof b!=="number")throw H.i(H.bb(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.i(H.bb(b))
return a*b},
ei:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eq:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dh(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dh(a,b)},
dh:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.al("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
bg:function(a,b){var u
if(a>0)u=this.hH(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hH:function(a,b){return b>31?0:a>>>b},
$iw:1,
$iaa:1}
J.di.prototype={$iy:1}
J.dh.prototype={}
J.bz.prototype={
c9:function(a,b){if(b<0)throw H.i(H.c0(a,b))
if(b>=a.length)H.t(H.c0(a,b))
return a.charCodeAt(b)},
bd:function(a,b){if(b>=a.length)throw H.i(H.c0(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.i(P.ju(b,null,null))
return a+b},
cI:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.dE(b,null))
if(b>c)throw H.i(P.dE(b,null))
if(c>a.length)throw H.i(P.dE(c,null))
return a.substring(b,c)},
cH:function(a,b){return this.cI(a,b,null)},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.E)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ah:function(a,b){var u=b-a.length
if(u<=0)return a
return this.v(" ",u)+a},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ikp:1,
$io:1}
H.a6.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.c9(this.a,b)},
$ae0:function(){return[P.y]},
$au:function(){return[P.y]},
$ae:function(){return[P.y]},
$ab:function(){return[P.y]}}
H.fs.prototype={}
H.dp.prototype={
gL:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.jk(s),q=r.gk(s)
if(t.b!==q)throw H.i(P.ce(s))
u=t.c
if(u>=q){t.saR(null)
return!1}t.saR(r.H(s,u));++t.c
return!0},
saR:function(a){this.d=H.E(a,H.x(this,0))},
$iaU:1}
H.fW.prototype={
gU:function(a){return new H.fX(J.c7(this.a),this.b,this.$ti)},
gk:function(a){return J.c8(this.a)},
H:function(a,b){return this.b.$1(J.k6(this.a,b))},
$ae:function(a,b){return[b]}}
H.fX.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.saR(u.c.$1(t.gL(t)))
return!0}u.saR(null)
return!1},
gL:function(a){return this.a},
saR:function(a){this.a=H.E(a,H.x(this,1))},
$aaU:function(a,b){return[b]}}
H.iA.prototype={
gU:function(a){return new H.iB(J.c7(this.a),this.b,this.$ti)}}
H.iB.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(H.C(t.$1(u.gL(u))))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.bQ.prototype={}
H.e0.prototype={}
H.e_.prototype={}
H.i4.prototype={
ag:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hi.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fL.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.ig.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jt.prototype={
$1:function(a){if(!!J.Y(a).$ibs)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.eB.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaq:1}
H.cc.prototype={
i:function(a){return"Closure '"+H.bT(this).trim()+"'"},
$ijB:1,
gjn:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hS.prototype={}
H.hK.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c5(u)+"'"}}
H.c9.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c9))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cs(this.a)
else u=typeof t!=="object"?J.bL(t):H.cs(t)
return(u^H.cs(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bT(u)+"'")}}
H.i6.prototype={
i:function(a){return this.a}}
H.fb.prototype={
i:function(a){return this.a}}
H.hx.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.iC.prototype={
i:function(a){return"Assertion failed: "+P.de(this.a)}}
H.aV.prototype={
gk:function(a){return this.a},
gaz:function(a){return new H.dn(this,[H.x(this,0)])},
dv:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cX(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cX(t,b)}else return s.iJ(b)},
iJ:function(a){var u=this.d
if(u==null)return!1
return this.cl(this.bL(u,J.bL(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.be(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.be(r,b)
s=t==null?null:t.b
return s}else return q.iK(b)},
iK:function(a){var u,t,s=this.d
if(s==null)return
u=this.bL(s,J.bL(a)&0x3ffffff)
t=this.cl(u,a)
if(t<0)return
return u[t].b},
a8:function(a,b,c){var u,t,s,r,q,p,o=this
H.E(b,H.x(o,0))
H.E(c,H.x(o,1))
if(typeof b==="string"){u=o.b
o.cP(u==null?o.b=o.bP():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cP(t==null?o.c=o.bP():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bP()
r=J.bL(b)&0x3ffffff
q=o.bL(s,r)
if(q==null)o.bX(s,r,[o.bQ(b,c)])
else{p=o.cl(q,b)
if(p>=0)q[p].b=c
else q.push(o.bQ(b,c))}}},
P:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.x(s,0),H.x(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.i(P.ce(s))
u=u.c}},
cP:function(a,b,c){var u,t=this
H.E(b,H.x(t,0))
H.E(c,H.x(t,1))
u=t.be(a,b)
if(u==null)t.bX(a,b,t.bQ(b,c))
else u.b=c},
bQ:function(a,b){var u=this,t=new H.fP(H.E(a,H.x(u,0)),H.E(b,H.x(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cl:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1},
i:function(a){return P.ki(this)},
be:function(a,b){return a[b]},
bL:function(a,b){return a[b]},
bX:function(a,b,c){a[b]=c},
eY:function(a,b){delete a[b]},
cX:function(a,b){return this.be(a,b)!=null},
bP:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bX(t,u,t)
this.eY(t,u)
return t}}
H.fP.prototype={}
H.dn.prototype={
gk:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.fQ(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fQ.prototype={
gL:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.ce(t))
else{t=u.c
if(t==null){u.scO(null)
return!1}else{u.scO(t.a)
u.c=u.c.c
return!0}}},
scO:function(a){this.d=H.E(a,H.x(this,0))},
$iaU:1}
H.jl.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jm.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.jn.prototype={
$1:function(a){return this.a(H.S(a))},
$S:32}
H.fK.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikp:1}
H.cp.prototype={$ini:1}
H.dv.prototype={
gk:function(a){return a.length},
$iH:1,
$aH:function(){}}
H.co.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]},
$abQ:function(){return[P.w]},
$au:function(){return[P.w]},
$ie:1,
$ae:function(){return[P.w]},
$ib:1,
$ab:function(){return[P.w]}}
H.dw.prototype={
$abQ:function(){return[P.y]},
$au:function(){return[P.y]},
$ie:1,
$ae:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.ha.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.hb.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.hc.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.hd.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.he.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.dx.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bH(b,a,a.length)
return a[b]},
$inj:1}
H.hf.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.cM.prototype={}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
P.iE.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.iD.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:29}
P.iF.prototype={
$0:function(){this.a.$0()},
$S:1}
P.iG.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eH.prototype={
eI:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c_(new P.j9(this,b),0),a)
else throw H.i(P.al("`setTimeout()` not found."))},
eJ:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c_(new P.j8(this,a,Date.now(),b),0),a)
else throw H.i(P.al("Periodic timer."))},
$ib6:1}
P.j9.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.j8.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.h.eq(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.ba.prototype={
iO:function(a){if(this.c!==6)return!0
return this.b.b.cA(H.m(this.d,{func:1,ret:P.a2,args:[P.O]}),a.a,P.a2,P.O)},
iI:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.x(this,1)},r=this.b.b
if(H.eX(u,{func:1,args:[P.O,P.aq]}))return H.jY(r.j7(u,a.a,a.b,null,t,P.aq),s)
else return H.jY(r.cA(H.m(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.az.prototype={
eb:function(a,b,c){var u,t,s,r=H.x(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.X
if(u!==C.k){u.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mm(b,u)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.az($.X,[c])
s=b==null?1:3
this.cQ(new P.ba(t,s,a,b,[r,c]))
return t},
jc:function(a,b){return this.eb(a,null,b)},
cQ:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$iba")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaz")
s=u.a
if(s<4){u.cQ(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jg(null,null,s,H.m(new P.iN(t,a),{func:1,ret:-1}))}},
da:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$iba")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaz")
u=q.a
if(u<4){q.da(a)
return}p.a=u
p.c=q.c}o.a=p.bf(a)
u=p.b
u.toString
P.jg(null,null,u,H.m(new P.iR(o,p),{func:1,ret:-1}))}},
bT:function(){var u=H.k(this.c,"$iba")
this.c=null
return this.bf(u)},
bf:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cT:function(a){var u,t,s=this,r=H.x(s,0)
H.jY(a,{futureOr:1,type:r})
u=s.$ti
if(H.jV(a,"$ici",u,"$aci"))if(H.jV(a,"$iaz",u,null))P.kO(a,s)
else P.md(a,s)
else{t=s.bT()
H.E(a,r)
s.a=4
s.c=a
P.cK(s,t)}},
cU:function(a,b){var u,t=this
H.k(b,"$iaq")
u=t.bT()
t.a=8
t.c=new P.aj(a,b)
P.cK(t,u)},
$ici:1}
P.iN.prototype={
$0:function(){P.cK(this.a,this.b)},
$S:1}
P.iR.prototype={
$0:function(){P.cK(this.b,this.a.a)},
$S:1}
P.iO.prototype={
$1:function(a){var u=this.a
u.a=0
u.cT(a)},
$S:14}
P.iP.prototype={
$2:function(a,b){H.k(b,"$iaq")
this.a.cU(a,b)},
$1:function(a){return this.$2(a,null)},
$S:35}
P.iQ.prototype={
$0:function(){this.a.cU(this.b,this.c)},
$S:1}
P.iU.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.e9(H.m(s.d,{func:1}),null)}catch(r){u=H.bK(r)
t=H.c3(r)
if(o.d){s=H.k(o.a.a.c,"$iaj").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iaj")
else q.b=new P.aj(u,t)
q.a=!0
return}if(!!J.Y(n).$ici){if(n instanceof P.az&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iaj")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jc(new P.iV(p),null)
s.a=!1}},
$S:3}
P.iV.prototype={
$1:function(a){return this.a},
$S:37}
P.iT.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.x(s,0)
q=H.E(n.c,r)
p=H.x(s,1)
n.a.b=s.b.b.cA(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bK(o)
t=H.c3(o)
s=n.a
s.b=new P.aj(u,t)
s.a=!0}},
$S:3}
P.iS.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iaj")
r=m.c
if(H.C(r.iO(u))&&r.e!=null){q=m.b
q.b=r.iI(u)
q.a=!1}}catch(p){t=H.bK(p)
s=H.c3(p)
r=H.k(m.a.a.c,"$iaj")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aj(t,s)
n.a=!0}},
$S:3}
P.e5.prototype={}
P.hN.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.az($.X,[P.y])
r.a=0
u=H.x(s,0)
t=H.m(new P.hP(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.hQ(r,q),{func:1,ret:-1})
W.a9(s.a,s.b,t,!1,u)
return q}}
P.hP.prototype={
$1:function(a){H.E(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.x(this.b,0)]}}}
P.hQ.prototype={
$0:function(){this.b.cT(this.a.a)},
$S:1}
P.cx.prototype={}
P.hO.prototype={}
P.b6.prototype={}
P.aj.prototype={
i:function(a){return H.l(this.a)},
$ibs:1}
P.jb.prototype={$inw:1}
P.jf.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dA():s
s=this.b
if(s==null)throw H.i(t)
u=H.i(t)
u.stack=s.i(0)
throw u},
$S:1}
P.j1.prototype={
j8:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.k===$.X){a.$0()
return}P.kS(r,r,this,a,-1)}catch(s){u=H.bK(s)
t=H.c3(s)
P.je(r,r,this,u,H.k(t,"$iaq"))}},
j9:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.k===$.X){a.$1(b)
return}P.kT(r,r,this,a,b,-1,c)}catch(s){u=H.bK(s)
t=H.c3(s)
P.je(r,r,this,u,H.k(t,"$iaq"))}},
iv:function(a,b){return new P.j3(this,H.m(a,{func:1,ret:b}),b)},
c5:function(a){return new P.j2(this,H.m(a,{func:1,ret:-1}))},
dl:function(a,b){return new P.j4(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
e9:function(a,b){H.m(a,{func:1,ret:b})
if($.X===C.k)return a.$0()
return P.kS(null,null,this,a,b)},
cA:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.X===C.k)return a.$1(b)
return P.kT(null,null,this,a,b,c,d)},
j7:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.X===C.k)return a.$2(b,c)
return P.mn(null,null,this,a,b,c,d,e,f)}}
P.j3.prototype={
$0:function(){return this.a.e9(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.j2.prototype={
$0:function(){return this.a.j8(this.b)},
$S:3}
P.j4.prototype={
$1:function(a){var u=this.c
return this.a.j9(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iZ.prototype={
gU:function(a){return P.kQ(this,this.r,H.x(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.E(b,H.x(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cR(u==null?s.b=P.jQ():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cR(t==null?s.c=P.jQ():t,b)}else return s.eL(0,b)},
eL:function(a,b){var u,t,s,r=this
H.E(b,H.x(r,0))
u=r.d
if(u==null)u=r.d=P.jQ()
t=r.cV(b)
s=u[t]
if(s==null)u[t]=[r.bH(b)]
else{if(r.d0(s,b)>=0)return!1
s.push(r.bH(b))}return!0},
F:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ht(this.c,b)
else return this.hs(0,b)},
hs:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.fb(r,b)
t=s.d0(u,b)
if(t<0)return!1
s.di(u.splice(t,1)[0])
return!0},
cR:function(a,b){H.E(b,H.x(this,0))
if(H.k(a[b],"$icL")!=null)return!1
a[b]=this.bH(b)
return!0},
ht:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$icL")
if(u==null)return!1
this.di(u)
delete a[b]
return!0},
d2:function(){this.r=1073741823&this.r+1},
bH:function(a){var u,t=this,s=new P.cL(H.E(a,H.x(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d2()
return s},
di:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d2()},
cV:function(a){return J.bL(a)&1073741823},
fb:function(a,b){return a[this.cV(b)]},
d0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1}}
P.cL.prototype={}
P.j_.prototype={
gL:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.ce(t))
else{t=u.c
if(t==null){u.scS(null)
return!1}else{u.scS(H.E(t.a,H.x(u,0)))
u.c=u.c.b
return!0}}},
scS:function(a){this.d=H.E(a,H.x(this,0))},
$iaU:1}
P.fR.prototype={$ie:1,$ib:1}
P.u.prototype={
gU:function(a){return new H.dp(a,this.gk(a),[H.c2(this,a,"u",0)])},
H:function(a,b){return this.j(a,b)},
jf:function(a,b){var u,t=this,s=H.d([],[H.c2(t,a,"u",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.a8(s,u,t.j(a,u))
return s},
je:function(a){return this.jf(a,!0)},
n:function(a,b){var u,t=this,s=[H.c2(t,a,"u",0)]
H.j(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sk(u,C.h.n(t.gk(a),b.gk(b)))
C.a.b9(u,0,t.gk(a),a)
C.a.b9(u,t.gk(a),u.length,b)
return u},
i:function(a){return P.jC(a,"[","]")}}
P.fU.prototype={}
P.fV.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:12}
P.ah.prototype={
P:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.c2(s,a,"ah",0),H.c2(s,a,"ah",1)]})
for(u=J.c7(s.gaz(a));u.B();){t=u.gL(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.c8(this.gaz(a))},
i:function(a){return P.ki(a)},
$iP:1}
P.j5.prototype={
i:function(a){return P.jC(this,"{","}")},
H:function(a,b){var u,t,s,r=this
P.jI(b,"index")
for(u=P.kQ(r,r.r,H.x(r,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.i(P.U(b,r,"index",null,t))},
$ie:1,
$ikw:1}
P.ek.prototype={}
P.cd.prototype={}
P.d6.prototype={}
P.ft.prototype={
$acd:function(){return[P.o,[P.b,P.y]]}}
P.ij.prototype={}
P.ik.prototype={
ix:function(a){var u,t,s=P.jJ(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ja(u)
if(t.f9(a,0,s)!==s)t.dj(C.j.c9(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mi(0,t.b,u.length)))},
$ad6:function(){return[P.o,[P.b,P.y]]}}
P.ja.prototype={
dj:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.h(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.h(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.h(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.h(s,r)
s[r]=128|a&63
return!1}},
f9:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.j.c9(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.j.bd(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dj(r,C.j.bd(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.h(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.h(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.h(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.h(u,q)
u[q]=128|r&63}}return s}}
P.a2.prototype={}
P.ax.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ax&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.h.bg(u,30))&1073741823},
i:function(a){var u=this,t=P.lD(H.lY(u)),s=P.d8(H.lW(u)),r=P.d8(H.lS(u)),q=P.d8(H.lT(u)),p=P.d8(H.lV(u)),o=P.d8(H.lX(u)),n=P.lE(H.lU(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.w.prototype={}
P.aR.prototype={
n:function(a,b){return new P.aR(C.h.n(this.a,b.gf1()))},
p:function(a,b){return new P.aR(C.h.p(this.a,b.gf1()))},
q:function(a,b){if(b==null)return!1
return b instanceof P.aR&&this.a===b.a},
gJ:function(a){return C.h.gJ(this.a)},
i:function(a){var u,t,s,r=new P.fr(),q=this.a
if(q<0)return"-"+new P.aR(0-q).i(0)
u=r.$1(C.h.a6(q,6e7)%60)
t=r.$1(C.h.a6(q,1e6)%60)
s=new P.fq().$1(q%1e6)
return""+C.h.a6(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.fq.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:13}
P.fr.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:13}
P.bs.prototype={}
P.f2.prototype={
i:function(a){return"Assertion failed"}}
P.dA.prototype={
i:function(a){return"Throw of null."}}
P.aN.prototype={
gbJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbI:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbJ()+o+u
if(!q.a)return t
s=q.gbI()
r=P.de(q.b)
return t+s+": "+r}}
P.bU.prototype={
gbJ:function(){return"RangeError"},
gbI:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.fI.prototype={
gbJ:function(){return"RangeError"},
gbI:function(){var u,t=H.af(this.b)
if(typeof t!=="number")return t.aO()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gk:function(a){return this.f}}
P.ih.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ie.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dM.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ff.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.de(u)+"."}}
P.hl.prototype={
i:function(a){return"Out of Memory"},
$ibs:1}
P.dL.prototype={
i:function(a){return"Stack Overflow"},
$ibs:1}
P.fk.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ed.prototype={
i:function(a){return"Exception: "+this.a}}
P.fE.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.j.cI(s,0,75)+"...":s
return t+"\n"+r}}
P.y.prototype={}
P.e.prototype={
gk:function(a){var u,t=this.gU(this)
for(u=0;t.B();)++u
return u},
H:function(a,b){var u,t,s
P.jI(b,"index")
for(u=this.gU(this),t=0;u.B();){s=u.gL(u)
if(b===t)return s;++t}throw H.i(P.U(b,this,"index",null,t))},
i:function(a){return P.lH(this,"(",")")}}
P.aU.prototype={}
P.b.prototype={$ie:1}
P.P.prototype={}
P.N.prototype={
gJ:function(a){return P.O.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
q:function(a,b){return this===b},
gJ:function(a){return H.cs(this)},
i:function(a){return"Instance of '"+H.bT(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.o.prototype={$ikp:1}
P.bD.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.r.prototype={}
W.eZ.prototype={
gk:function(a){return a.length}}
W.f0.prototype={
i:function(a){return String(a)}}
W.f1.prototype={
i:function(a){return String(a)}}
W.d0.prototype={}
W.bO.prototype={
cD:function(a,b,c){if(c!=null)return a.getContext(b,P.mv(c))
return a.getContext(b)},
eh:function(a,b){return this.cD(a,b,null)},
$ibO:1}
W.cb.prototype={$icb:1}
W.bp.prototype={
gk:function(a){return a.length}}
W.cf.prototype={$icf:1}
W.fg.prototype={
gk:function(a){return a.length}}
W.Q.prototype={$iQ:1}
W.cg.prototype={
gk:function(a){return a.length}}
W.fh.prototype={}
W.aP.prototype={}
W.aQ.prototype={}
W.fi.prototype={
gk:function(a){return a.length}}
W.fj.prototype={
gk:function(a){return a.length}}
W.fl.prototype={
gk:function(a){return a.length}}
W.da.prototype={$ida:1}
W.fn.prototype={
i:function(a){return String(a)}}
W.db.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[[P.ap,P.aa]]},
$au:function(){return[[P.ap,P.aa]]},
$ie:1,
$ae:function(){return[[P.ap,P.aa]]},
$ib:1,
$ab:function(){return[[P.ap,P.aa]]},
$aA:function(){return[[P.ap,P.aa]]}}
W.dc.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gai(a))+" x "+H.l(this.gaf(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.Y(b)
if(!u.$iap)return!1
return a.left===u.gbz(b)&&a.top===u.gbC(b)&&this.gai(a)===u.gai(b)&&this.gaf(a)===u.gaf(b)},
gJ:function(a){return W.kP(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(this.gai(a)),C.d.gJ(this.gaf(a)))},
gdn:function(a){return a.bottom},
gaf:function(a){return a.height},
gbz:function(a){return a.left},
gbB:function(a){return a.right},
gbC:function(a){return a.top},
gai:function(a){return a.width},
$iap:1,
$aap:function(){return[P.aa]}}
W.fo.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[P.o]},
$au:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$aA:function(){return[P.o]}}
W.fp.prototype={
gk:function(a){return a.length}}
W.iI.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.k(u[b],"$ia7")},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.je(this)
return new J.ao(u,u.length,[H.x(u,0)])},
$au:function(){return[W.a7]},
$ae:function(){return[W.a7]},
$ab:function(){return[W.a7]}}
W.a7.prototype={
gds:function(a){return new W.iI(a,a.children)},
gdt:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aO()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aO()
if(r<0)r=-r*0
return new P.ap(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
$ia7:1}
W.n.prototype={$in:1}
W.f.prototype={
iq:function(a,b,c,d){H.m(c,{func:1,args:[W.n]})
if(c!=null)this.eM(a,b,c,!1)},
eM:function(a,b,c,d){return a.addEventListener(b,H.c_(H.m(c,{func:1,args:[W.n]}),1),!1)},
$if:1}
W.aS.prototype={$iaS:1}
W.fy.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aS]},
$au:function(){return[W.aS]},
$ie:1,
$ae:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aA:function(){return[W.aS]}}
W.fz.prototype={
gk:function(a){return a.length}}
W.fD.prototype={
gk:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.fG.prototype={
gk:function(a){return a.length}}
W.bR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.I]},
$au:function(){return[W.I]},
$ie:1,
$ae:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$ibR:1,
$aA:function(){return[W.I]}}
W.bu.prototype={$ibu:1,
gdz:function(a){return a.data}}
W.ck.prototype={$ick:1}
W.aW.prototype={$iaW:1}
W.fS.prototype={
i:function(a){return String(a)}}
W.h3.prototype={
gk:function(a){return a.length}}
W.h4.prototype={
j:function(a,b){return P.bn(a.get(H.S(b)))},
P:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gaz:function(a){var u=H.d([],[P.o])
this.P(a,new W.h5(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.o,null]},
$iP:1,
$aP:function(){return[P.o,null]}}
W.h5.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.h6.prototype={
j:function(a,b){return P.bn(a.get(H.S(b)))},
P:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gaz:function(a){var u=H.d([],[P.o])
this.P(a,new W.h7(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.o,null]},
$iP:1,
$aP:function(){return[P.o,null]}}
W.h7.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aZ.prototype={$iaZ:1}
W.h8.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aZ]},
$au:function(){return[W.aZ]},
$ie:1,
$ae:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aA:function(){return[W.aZ]}}
W.ac.prototype={$iac:1}
W.iH.prototype={
gU:function(a){var u=this.a.childNodes
return new W.df(u,u.length,[H.c2(C.N,u,"A",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$au:function(){return[W.I]},
$ae:function(){return[W.I]},
$ab:function(){return[W.I]}}
W.I.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.em(a):u},
$iI:1}
W.cq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.I]},
$au:function(){return[W.I]},
$ie:1,
$ae:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$aA:function(){return[W.I]}}
W.b0.prototype={$ib0:1,
gk:function(a){return a.length}}
W.hn.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.b0]},
$au:function(){return[W.b0]},
$ie:1,
$ae:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aA:function(){return[W.b0]}}
W.hv.prototype={
j:function(a,b){return P.bn(a.get(H.S(b)))},
P:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gaz:function(a){var u=H.d([],[P.o])
this.P(a,new W.hw(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.o,null]},
$iP:1,
$aP:function(){return[P.o,null]}}
W.hw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hy.prototype={
gk:function(a){return a.length}}
W.b2.prototype={$ib2:1}
W.hH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.b2]},
$au:function(){return[W.b2]},
$ie:1,
$ae:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aA:function(){return[W.b2]}}
W.b3.prototype={$ib3:1}
W.hI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.b3]},
$au:function(){return[W.b3]},
$ie:1,
$ae:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aA:function(){return[W.b3]}}
W.b4.prototype={$ib4:1,
gk:function(a){return a.length}}
W.hL.prototype={
j:function(a,b){return a.getItem(H.S(b))},
P:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,P.o]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaz:function(a){var u=H.d([],[P.o])
this.P(a,new W.hM(u))
return u},
gk:function(a){return a.length},
$aah:function(){return[P.o,P.o]},
$iP:1,
$aP:function(){return[P.o,P.o]}}
W.hM.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:26}
W.aE.prototype={$iaE:1}
W.b5.prototype={$ib5:1}
W.aF.prototype={$iaF:1}
W.hT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aF]},
$au:function(){return[W.aF]},
$ie:1,
$ae:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$aA:function(){return[W.aF]}}
W.hU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.b5]},
$au:function(){return[W.b5]},
$ie:1,
$ae:function(){return[W.b5]},
$ib:1,
$ab:function(){return[W.b5]},
$aA:function(){return[W.b5]}}
W.hZ.prototype={
gk:function(a){return a.length}}
W.b7.prototype={$ib7:1}
W.aI.prototype={$iaI:1}
W.i1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.b7]},
$au:function(){return[W.b7]},
$ie:1,
$ae:function(){return[W.b7]},
$ib:1,
$ab:function(){return[W.b7]},
$aA:function(){return[W.b7]}}
W.i2.prototype={
gk:function(a){return a.length}}
W.bF.prototype={}
W.ii.prototype={
i:function(a){return String(a)}}
W.iz.prototype={
gk:function(a){return a.length}}
W.b9.prototype={
giB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.al("deltaY is not supported"))},
giA:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.al("deltaX is not supported"))},
$ib9:1}
W.cJ.prototype={
hw:function(a,b){return a.requestAnimationFrame(H.c_(H.m(b,{func:1,ret:-1,args:[P.aa]}),1))},
f2:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.Q]},
$au:function(){return[W.Q]},
$ie:1,
$ae:function(){return[W.Q]},
$ib:1,
$ab:function(){return[W.Q]},
$aA:function(){return[W.Q]}}
W.e8.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.Y(b)
if(!u.$iap)return!1
return a.left===u.gbz(b)&&a.top===u.gbC(b)&&a.width===u.gai(b)&&a.height===u.gaf(b)},
gJ:function(a){return W.kP(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gaf:function(a){return a.height},
gai:function(a){return a.width}}
W.iW.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aT]},
$au:function(){return[W.aT]},
$ie:1,
$ae:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aA:function(){return[W.aT]}}
W.ep.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.I]},
$au:function(){return[W.I]},
$ie:1,
$ae:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$aA:function(){return[W.I]}}
W.j6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.b4]},
$au:function(){return[W.b4]},
$ie:1,
$ae:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aA:function(){return[W.b4]}}
W.j7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aE]},
$au:function(){return[W.aE]},
$ie:1,
$ae:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aA:function(){return[W.aE]}}
W.iK.prototype={}
W.jP.prototype={}
W.iL.prototype={}
W.iM.prototype={
$1:function(a){return this.a.$1(H.k(a,"$in"))},
$S:31}
W.A.prototype={
gU:function(a){return new W.df(a,this.gk(a),[H.c2(this,a,"A",0)])}}
W.df.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd1(J.lu(u.a,t))
u.c=t
return!0}u.sd1(null)
u.c=s
return!1},
gL:function(a){return this.d},
sd1:function(a){this.d=H.E(a,H.x(this,0))},
$iaU:1}
W.e7.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eC.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
P.eM.prototype={$ibu:1,
gdz:function(a){return this.a}}
P.jh.prototype={
$2:function(a,b){this.a[a]=b},
$S:12}
P.fA.prototype={
gbM:function(){var u=this.b,t=H.aB(u,"u",0),s=W.a7
return new H.fW(new H.iA(u,H.m(new P.fB(),{func:1,ret:P.a2,args:[t]}),[t]),H.m(new P.fC(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.c8(this.gbM().a)},
j:function(a,b){var u=this.gbM()
return u.b.$1(J.k6(u.a,b))},
gU:function(a){var u=P.kh(this.gbM(),!1,W.a7)
return new J.ao(u,u.length,[H.x(u,0)])},
$au:function(){return[W.a7]},
$ae:function(){return[W.a7]},
$ab:function(){return[W.a7]}}
P.fB.prototype={
$1:function(a){return!!J.Y(H.k(a,"$iI")).$ia7},
$S:27}
P.fC.prototype={
$1:function(a){return H.c(H.k(a,"$iI"),"$ia7")},
$S:28}
P.j0.prototype={
gbB:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.F(t)
return H.E(u+t,H.x(this,0))},
gdn:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.F(t)
return H.E(u+t,H.x(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.Y(b)
if(!!u.$iap){t=p.a
if(t==u.gbz(b)){s=p.b
if(s==u.gbC(b)){r=p.c
if(typeof t!=="number")return t.n()
if(typeof r!=="number")return H.F(r)
q=H.x(p,0)
if(H.E(t+r,q)===u.gbB(b)){t=p.d
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.F(t)
u=H.E(s+t,q)===u.gdn(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.bL(s),q=t.b,p=J.bL(q),o=t.c
if(typeof s!=="number")return s.n()
if(typeof o!=="number")return H.F(o)
u=H.x(t,0)
o=C.h.gJ(H.E(s+o,u))
s=t.d
if(typeof q!=="number")return q.n()
if(typeof s!=="number")return H.F(s)
u=C.h.gJ(H.E(q+s,u))
return P.me(P.iY(P.iY(P.iY(P.iY(0,r),p),o),u))}}
P.ap.prototype={
gbz:function(a){return this.a},
gbC:function(a){return this.b},
gai:function(a){return this.c},
gaf:function(a){return this.d}}
P.be.prototype={$ibe:1}
P.fN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$au:function(){return[P.be]},
$ie:1,
$ae:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aA:function(){return[P.be]}}
P.bj.prototype={$ibj:1}
P.hj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$au:function(){return[P.bj]},
$ie:1,
$ae:function(){return[P.bj]},
$ib:1,
$ab:function(){return[P.bj]},
$aA:function(){return[P.bj]}}
P.hp.prototype={
gk:function(a){return a.length}}
P.hR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$au:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$aA:function(){return[P.o]}}
P.p.prototype={
gds:function(a){return new P.fA(a,new W.iH(a))}}
P.bl.prototype={$ibl:1}
P.i3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$au:function(){return[P.bl]},
$ie:1,
$ae:function(){return[P.bl]},
$ib:1,
$ab:function(){return[P.bl]},
$aA:function(){return[P.bl]}}
P.ei.prototype={}
P.ej.prototype={}
P.es.prototype={}
P.et.prototype={}
P.eD.prototype={}
P.eE.prototype={}
P.eK.prototype={}
P.eL.prototype={}
P.f4.prototype={
gk:function(a){return a.length}}
P.f5.prototype={
j:function(a,b){return P.bn(a.get(H.S(b)))},
P:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gaz:function(a){var u=H.d([],[P.o])
this.P(a,new P.f6(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.o,null]},
$iP:1,
$aP:function(){return[P.o,null]}}
P.f6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f7.prototype={
gk:function(a){return a.length}}
P.bM.prototype={}
P.hk.prototype={
gk:function(a){return a.length}}
P.e6.prototype={}
P.d1.prototype={$id1:1}
P.dg.prototype={$idg:1}
P.dD.prototype={$idD:1}
P.dF.prototype={$idF:1}
P.bV.prototype={
ea:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.Y(g)
if(!!u.$ibu&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.mw(g))
return}if(!!u.$ick&&h==null&&t&&!0){this.hN(a,b,c,d,e,f,g)
return}throw H.i(P.lx("Incorrect number or type of arguments"))},
ja:function(a,b,c,d,e,f,g){return this.ea(a,b,c,d,e,f,g,null,null,null)},
hN:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
K:function(a,b,c){return a.uniform1f(b,c)},
R:function(a,b,c){return a.uniform1i(b,c)},
bD:function(a,b,c,d){return a.uniform2f(b,c,d)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
jh:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ed:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cC:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibV:1}
P.dG.prototype={$idG:1}
P.dN.prototype={$idN:1}
P.dZ.prototype={$idZ:1}
P.hJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return P.bn(a.item(b))},
H:function(a,b){return this.j(a,b)},
$au:function(){return[[P.P,,,]]},
$ie:1,
$ae:function(){return[[P.P,,,]]},
$ib:1,
$ab:function(){return[[P.P,,,]]},
$aA:function(){return[[P.P,,,]]}}
P.ez.prototype={}
P.eA.prototype={}
O.T.prototype={
bb:function(a){var u=this
u.sfh(H.d([],[a]))
u.sd8(null)
u.sd4(null)
u.sd9(null)},
cE:function(a,b,c){var u=this,t=H.aB(u,"T",0)
H.m(b,{func:1,ret:P.a2,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.y,[P.e,t]]}
H.m(a,t)
H.m(c,t)
u.sd8(b)
u.sd4(a)
u.sd9(c)},
aD:function(a,b){return this.cE(a,null,b)},
d7:function(a){var u
H.j(a,"$ie",[H.aB(this,"T",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d3:function(a,b){var u
H.j(b,"$ie",[H.aB(this,"T",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.ao(u,u.length,[H.x(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aB(s,"T",0)
H.E(b,r)
r=[r]
if(H.C(s.d7(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.d3(t,H.d([b],r))}},
c0:function(a,b){var u,t,s=this
H.j(b,"$ie",[H.aB(s,"T",0)],"$ae")
if(H.C(s.d7(b))){u=s.a
t=u.length
C.a.c0(u,b)
s.d3(t,b)}},
sfh:function(a){this.a=H.j(a,"$ib",[H.aB(this,"T",0)],"$ab")},
sd8:function(a){this.b=H.m(a,{func:1,ret:P.a2,args:[[P.e,H.aB(this,"T",0)]]})},
sd4:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.y,[P.e,H.aB(this,"T",0)]]})},
sd9:function(a){H.m(a,{func:1,ret:-1,args:[P.y,[P.e,H.aB(this,"T",0)]]})},
$ie:1}
O.cm.prototype={
gk:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.G():u},
aE:function(){var u=this.b
if(u!=null)u.A(null)},
gZ:function(a){var u=this.a
if(u.length>0)return C.a.gcn(u)
else return V.aY()},
bA:function(a){var u=this.a
if(a==null)C.a.h(u,V.aY())
else C.a.h(u,a)
this.aE()},
aB:function(){var u=this.a
if(u.length>0){u.pop()
this.aE()}},
sbN:function(a){this.a=H.j(a,"$ib",[V.ab],"$ab")}}
E.f9.prototype={}
E.ak.prototype={
sba:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().F(0,s.ge5())
u=s.c
if(u!=null)u.gm().h(0,s.ge5())
t=new D.z("shape",r,s.c,[F.dH])
t.b=!0
s.aA(t)}},
sb1:function(a){var u,t,s=this
if(!J.L(s.r,a)){u=s.r
if(u!=null)u.gm().F(0,s.ge3())
if(a!=null)a.gm().h(0,s.ge3())
s.r=a
t=new D.z("mover",u,a,[U.ad])
t.b=!0
s.aA(t)}},
a9:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aN(0,b,s):null
if(!J.L(q,s.x)){u=s.x
s.x=q
t=new D.z("matrix",u,q,[V.ab])
t.b=!0
s.aA(t)}for(r=s.y.a,r=new J.ao(r,r.length,[H.x(r,0)]);r.B();)r.d.a9(0,b)},
a7:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gZ(s))
else C.a.h(s.a,r.v(0,s.gZ(s)))
s.aE()
a.cu(t.f)
s=a.dy
u=(s&&C.a).gcn(s)
if(u!=null&&t.d!=null)u.b5(a,t)
for(s=t.y.a,s=new J.ao(s,s.length,[H.x(s,0)]);s.B();)s.d.a7(a)
a.cs()
a.dx.aB()},
gm:function(){var u=this.z
return u==null?this.z=D.G():u},
aA:function(a){var u=this.z
if(u!=null)u.A(a)},
a4:function(){return this.aA(null)},
e6:function(a){H.k(a,"$iv")
this.e=null
this.aA(a)},
iW:function(){return this.e6(null)},
e4:function(a){this.aA(H.k(a,"$iv"))},
iV:function(){return this.e4(null)},
e2:function(a){this.aA(H.k(a,"$iv"))},
iS:function(){return this.e2(null)},
iR:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$ie",[E.ak],"$ae")
for(u=b.length,t=this.ge1(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bt()
o.saa(null)
o.saI(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.saa(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
iU:function(a,b){var u,t
H.j(b,"$ie",[E.ak],"$ae")
for(u=b.gU(b),t=this.ge1();u.B();)u.gL(u).gm().F(0,t)
this.a4()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sex:function(a,b){this.y=H.j(b,"$iT",[E.ak],"$aT")},
$ib_:1}
E.hr.prototype={
es:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ax(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cm()
t=[V.ab]
u.sbN(H.d([],t))
u.b=null
u.gm().h(0,new E.hs(s))
s.cy=u
u=new O.cm()
u.sbN(H.d([],t))
u.b=null
u.gm().h(0,new E.ht(s))
s.db=u
u=new O.cm()
u.sbN(H.d([],t))
u.b=null
u.gm().h(0,new E.hu(s))
s.dx=u
s.shM(H.d([],[O.bE]))
u=s.dy;(u&&C.a).h(u,null)
s.shG(new H.aV([P.o,A.cv]))},
gj3:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gZ(s)
u=t.db
u=t.z=s.v(0,u.gZ(u))
s=u}return s},
gct:function(){var u,t=this,s=t.ch
if(s==null){s=t.gj3()
u=t.dx
u=t.ch=s.v(0,u.gZ(u))
s=u}return s},
gee:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.gZ(s)
u=t.dx
u=t.cx=s.v(0,u.gZ(u))
s=u}return s},
cu:function(a){var u=this.dy,t=a==null?(u&&C.a).gcn(u):a;(u&&C.a).h(u,t)},
cs:function(){var u=this.dy
if(u.length>1)u.pop()},
aU:function(a){var u=a.b
if(u.length===0)throw H.i(P.q("May not cache a shader with no name."))
if(this.fr.dv(0,u))throw H.i(P.q('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a8(0,u,a)},
shM:function(a){this.dy=H.j(a,"$ib",[O.bE],"$ab")},
shG:function(a){this.fr=H.j(a,"$iP",[P.o,A.cv],"$aP")}}
E.hs.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.ch=u.z=null},
$S:9}
E.ht.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.hu.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.cx=u.ch=null},
$S:9}
E.dU.prototype={
cM:function(a){H.k(a,"$iv")
this.e8()},
cL:function(){return this.cM(null)},
giH:function(){var u,t=this,s=Date.now(),r=C.h.a6(P.kc(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ax(s,!1)
return u/r},
dd:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.v()
if(typeof r!=="number")return H.F(r)
u=C.d.ck(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.v()
t=C.d.ck(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kB(C.o,s.gj6())}},
e8:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.hY(this),{func:1,ret:-1,args:[P.aa]})
C.x.f2(u)
C.x.hw(u,W.kW(t,P.aa))}},
j5:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dd()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ax(r,!1)
s.y=P.kc(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aE()
r=s.db
C.a.sk(r.a,0)
r.aE()
r=s.dx
C.a.sk(r.a,0)
r.aE()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a7(p.e)}}catch(q){u=H.bK(q)
t=H.c3(q)
P.k2("Error: "+H.l(u))
P.k2("Stack: "+H.l(t))
throw H.i(u)}}}
E.hY.prototype={
$1:function(a){var u
H.mR(a)
u=this.a
if(u.ch){u.ch=!1
u.j5()}},
$S:39}
Z.e4.prototype={$in0:1}
Z.d2.prototype={
I:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bK(s)
t=P.q('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.i(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.bG.prototype={$in1:1}
Z.bc.prototype={
a3:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
I:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].I(a)},
a5:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a7:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.o],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aw(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(p,", ")+"\nAttrs:   "+C.a.D(r,", ")},
sfc:function(a){this.b=H.j(a,"$ib",[Z.bv],"$ab")},
$in7:1}
Z.bv.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bT(this.c)+"'")+"]"}}
Z.an.prototype={
gcG:function(a){var u=this.a,t=(u&$.ag().a)!==0?3:0
if((u&$.aL().a)!==0)t+=3
if((u&$.aK().a)!==0)t+=3
if((u&$.av().a)!==0)t+=2
if((u&$.aM().a)!==0)t+=3
if((u&$.cY().a)!==0)t+=3
if((u&$.cZ().a)!==0)t+=4
if((u&$.c6().a)!==0)++t
return(u&$.bo().a)!==0?t+4:t},
iu:function(a){var u,t=$.ag(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.av()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0)if(u===a)return t
return $.lq()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.an))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.o]),t=this.a
if((t&$.ag().a)!==0)C.a.h(u,"Pos")
if((t&$.aL().a)!==0)C.a.h(u,"Norm")
if((t&$.aK().a)!==0)C.a.h(u,"Binm")
if((t&$.av().a)!==0)C.a.h(u,"Txt2D")
if((t&$.aM().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cY().a)!==0)C.a.h(u,"Clr3")
if((t&$.cZ().a)!==0)C.a.h(u,"Clr4")
if((t&$.c6().a)!==0)C.a.h(u,"Weight")
if((t&$.bo().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.D(u,"|")}}
D.fc.prototype={}
D.bt.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.m(b,u)
if(this.a==null)this.saa(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
F:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.v]})
u=s.a
u=u==null?null:C.a.ak(u,b)
if(u===!0){u=s.a
t=(u&&C.a).F(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ak(u,b)
if(u===!0){u=s.b
t=(u&&C.a).F(u,b)||t}return t},
A:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.v()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.P(P.kh(u,!0,{func:1,ret:-1,args:[D.v]}),new D.fv(q))
u=r.b
if(u!=null){r.saI(H.d([],[{func:1,ret:-1,args:[D.v]}]))
C.a.P(u,new D.fw(q))}return!0},
cc:function(){return this.A(null)},
ar:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.A(u)}}},
saa:function(a){this.a=H.j(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
saI:function(a){this.b=H.j(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.fv.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.fw.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.v.prototype={}
D.bw.prototype={}
D.bx.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.d3.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d3))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dl.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dl))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.fM.prototype={
j0:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iX:function(a){this.c=a.b
this.d.F(0,a.a)
return!1},
shr:function(a){this.d=H.j(a,"$ikw",[P.y],"$akw")}}
X.dq.prototype={}
X.fT.prototype={
aS:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.v()
u=b.b
t=q.ch
if(typeof u!=="number")return u.v()
s=new V.a5(o.a+n*m,o.b+u*t)
t=q.a.gaL()
r=new X.bA(a,V.bk(),q.x,t,s)
r.b=!0
q.z=new P.ax(p,!1)
q.x=s
return r},
cr:function(a,b){this.r=a.a
return!1},
b3:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ej()
if(typeof u!=="number")return u.eg()
this.r=(u&~t)>>>0
return!1},
b2:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.aS(a,b))
return!0},
j1:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaL()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.v()
q=a.b
p=o.cy
if(typeof q!=="number")return q.v()
t=new X.cn(new V.W(s*r,q*p),u,t)
t.b=!0
n.A(t)
return!0},
h_:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dq(c,r.a.gaL(),b)
s.b=!0
t.A(s)
r.y=new P.ax(u,!1)
r.x=V.bk()}}
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
u+=H.C(this.b)?"Alt+":""
return u+(H.C(this.c)?"Shift+":"")}}
X.bA.prototype={}
X.h9.prototype={
bK:function(a,b,c){var u=this,t=new P.ax(Date.now(),!1),s=u.a.gaL(),r=new X.bA(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cr:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.A(this.bK(a,b,!0))
return!0},
b3:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ej()
if(typeof t!=="number")return t.eg()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.A(u.bK(a,b,!0))
return!0},
b2:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.bK(a,b,!1))
return!0},
j2:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaL()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.v()
r=a.b
q=p.ch
if(typeof r!=="number")return r.v()
u=new X.cn(new V.W(t*s,r*q),u,b)
u.b=!0
o.A(u)
return!0}}
X.cn.prototype={}
X.ho.prototype={}
X.dW.prototype={}
X.i0.prototype={
aS:function(a,b){var u,t,s,r,q=this
H.j(a,"$ib",[V.a5],"$ab")
u=new P.ax(Date.now(),!1)
t=a.length>0?a[0]:V.bk()
s=q.a.gaL()
r=new X.dW(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j_:function(a){var u
H.j(a,"$ib",[V.a5],"$ab")
u=this.b
if(u==null)return!1
u.A(this.aS(a,!0))
return!0},
iY:function(a){var u
H.j(a,"$ib",[V.a5],"$ab")
u=this.c
if(u==null)return!1
u.A(this.aS(a,!0))
return!0},
iZ:function(a){var u
H.j(a,"$ib",[V.a5],"$ab")
u=this.d
if(u==null)return!1
u.A(this.aS(a,!1))
return!0}}
X.e1.prototype={
gaL:function(){var u=this.a,t=C.l.gdt(u).c
t.toString
u=C.l.gdt(u).d
u.toString
return V.ct(0,0,t,u)},
cY:function(a){var u=a.keyCode,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dl(u,new X.as(t,a.altKey,a.shiftKey))},
aJ:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.as(t,a.altKey,a.shiftKey)},
bY:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.as(t,a.altKey,a.shiftKey)},
ax:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.p()
u=t.top
if(typeof r!=="number")return r.p()
return new V.a5(s-q,r-u)},
aT:function(a){return new V.W(a.movementX,a.movementY)},
bS:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a5])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
q=C.d.a0(r.pageX)
C.d.a0(r.pageY)
p=o.left
C.d.a0(r.pageX)
C.a.h(n,new V.a5(q-p,C.d.a0(r.pageY)-o.top))}return n},
au:function(a){var u=a.buttons,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.d3(u,new X.as(t,a.altKey,a.shiftKey))},
bO:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.p()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.p()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fU:function(a){this.f=!0},
fE:function(a){this.f=!1},
fK:function(a){H.k(a,"$iac")
if(H.C(this.f)&&this.bO(a))a.preventDefault()},
fY:function(a){var u
H.k(a,"$iaW")
if(!H.C(this.f))return
u=this.cY(a)
this.b.j0(u)},
fW:function(a){var u
H.k(a,"$iaW")
if(!H.C(this.f))return
u=this.cY(a)
this.b.iX(u)},
h1:function(a){var u,t,s,r,q=this
H.k(a,"$iac")
u=q.a
u.focus()
q.f=!0
q.aJ(a)
if(H.C(q.x)){t=q.au(a)
s=q.aT(a)
if(q.d.cr(t,s))a.preventDefault()
return}if(H.C(q.r)){q.y=a
u.requestPointerLock()
return}t=q.au(a)
r=q.ax(a)
if(q.c.cr(t,r))a.preventDefault()},
h5:function(a){var u,t,s,r=this
H.k(a,"$iac")
r.aJ(a)
u=r.au(a)
if(H.C(r.x)){t=r.aT(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.ax(a)
if(r.c.b3(u,s))a.preventDefault()},
fO:function(a){var u,t,s,r=this
H.k(a,"$iac")
if(!r.bO(a)){r.aJ(a)
u=r.au(a)
if(H.C(r.x)){t=r.aT(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.ax(a)
if(r.c.b3(u,s))a.preventDefault()}},
h3:function(a){var u,t,s,r=this
H.k(a,"$iac")
r.aJ(a)
u=r.au(a)
if(H.C(r.x)){t=r.aT(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.ax(a)
if(r.c.b2(u,s))a.preventDefault()},
fM:function(a){var u,t,s,r=this
H.k(a,"$iac")
if(!r.bO(a)){r.aJ(a)
u=r.au(a)
if(H.C(r.x)){t=r.aT(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.ax(a)
if(r.c.b2(u,s))a.preventDefault()}},
h7:function(a){var u,t,s=this
H.k(a,"$ib9")
s.aJ(a)
u=new V.W((a&&C.w).giA(a),C.w.giB(a)).w(0,180)
if(H.C(s.x)){if(s.d.j1(u))a.preventDefault()
return}if(H.C(s.r))return
t=s.ax(a)
if(s.c.j2(u,t))a.preventDefault()},
h9:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.au(s.y)
t=s.ax(s.y)
s.d.h_(u,t,r)}},
hp:function(a){var u,t=this
H.k(a,"$iaI")
t.a.focus()
t.f=!0
t.bY(a)
u=t.bS(a)
if(t.e.j_(u))a.preventDefault()},
hl:function(a){var u
H.k(a,"$iaI")
this.bY(a)
u=this.bS(a)
if(this.e.iY(u))a.preventDefault()},
hn:function(a){var u
H.k(a,"$iaI")
this.bY(a)
u=this.bS(a)
if(this.e.iZ(u))a.preventDefault()},
sf4:function(a){this.z=H.j(a,"$ib",[[P.cx,P.O]],"$ab")}}
D.br.prototype={
gm:function(){var u=this.d
return u==null?this.d=D.G():u},
at:function(a){var u
H.k(a,"$iv")
u=this.d
if(u!=null)u.A(a)},
ez:function(){return this.at(null)},
$ia4:1,
$ib_:1}
D.a4.prototype={$ib_:1}
D.dm.prototype={
gm:function(){var u=this.Q
return u==null?this.Q=D.G():u},
at:function(a){var u=this.Q
if(u!=null)u.A(a)},
d6:function(a){var u
H.k(a,"$iv")
u=this.ch
if(u!=null)u.A(a)},
fZ:function(){return this.d6(null)},
hb:function(a){var u,t,s
H.j(a,"$ie",[D.a4],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.B)(a),++t){s=a[t]
if(s==null||this.eV(s))return!1}return!0},
fw:function(a,b){var u,t,s,r,q,p,o,n=D.a4
H.j(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gd5(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=H.k(b[q],"$ia4")
if(p instanceof D.br)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bt()
o.saa(null)
o.saI(null)
o.c=null
o.d=0
p.d=o}H.m(t,s)
if(o.a==null)o.saa(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bw([n])
n.b=!0
this.at(n)},
hf:function(a,b){var u,t,s,r=D.a4
H.j(b,"$ie",[r],"$ae")
for(u=b.gU(b),t=this.gd5();u.B();){s=u.gL(u)
C.a.F(this.e,s)
s.gm().F(0,t)}r=new D.bx([r])
r.b=!0
this.at(r)},
eV:function(a){var u=C.a.ak(this.e,a)
return u},
sf0:function(a){this.e=H.j(a,"$ib",[D.br],"$ab")},
shq:function(a){this.f=H.j(a,"$ib",[D.dC],"$ab")},
shI:function(a){this.r=H.j(a,"$ib",[D.dK],"$ab")},
shW:function(a){this.x=H.j(a,"$ib",[D.dR],"$ab")},
shX:function(a){this.y=H.j(a,"$ib",[D.dS],"$ab")},
shY:function(a){this.z=H.j(a,"$ib",[D.dT],"$ab")},
$ae:function(){return[D.a4]},
$aT:function(){return[D.a4]}}
D.dC.prototype={$ia4:1,$ib_:1}
D.dK.prototype={$ia4:1,$ib_:1}
D.dR.prototype={$ia4:1,$ib_:1}
D.dS.prototype={$ia4:1,$ib_:1}
D.dT.prototype={$ia4:1,$ib_:1}
V.Z.prototype={
n:function(a,b){var u=C.d.n(this.a,b.gcv()),t=C.d.n(this.b,b.gbE()),s=C.d.n(this.c,b.gc6())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.Z(u,t,s)},
p:function(a,b){var u=C.d.p(this.a,b.gcv()),t=C.d.p(this.b,b.gbE()),s=C.d.p(this.c,b.gc6())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.Z(u,t,s)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.a3.prototype={
n:function(a,b){var u=this,t=C.d.n(u.a,b.gcv()),s=C.d.n(u.b,b.gbE()),r=C.d.n(u.c,b.gc6()),q=C.d.n(u.d,b.git(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.a3(t,s,r,q)},
p:function(a,b){var u=this,t=C.d.p(u.a,b.gcv()),s=C.d.p(u.b,b.gbE()),r=C.d.p(u.c,b.gc6()),q=C.d.p(u.d,b.git(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.a3(t,s,r,q)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.fu.prototype={}
V.cl.prototype={
V:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.w])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cl))return!1
u=b.a
t=$.M().a
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
i:function(a){var u,t,s,r,q=this,p=[P.w],o=V.c1(H.d([q.a,q.d,q.r],p),3,0),n=V.c1(H.d([q.b,q.e,q.x],p),3,0),m=V.c1(H.d([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.h(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.h(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.h(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.h(o,1)
r=" "+o[1]+", "
if(1>=t)return H.h(n,1)
r=r+n[1]+", "
if(1>=s)return H.h(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.h(o,2)
p=" "+o[2]+", "
if(2>=t)return H.h(n,2)
p=p+n[2]+", "
if(2>=s)return H.h(m,2)
return r+(p+m[2]+"]")}}
V.ab.prototype={
V:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.w])
return t},
cm:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.M().a)return V.aY()
u=1/b1
t=-n
s=-a0
return V.bh((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
v:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bh(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cB:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.K(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b8:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a0(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.M().a
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
i:function(a){return this.N()},
E:function(a){var u,t,s,r,q,p=this,o=[P.w],n=V.c1(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.c1(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.c1(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.c1(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.h(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.h(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.h(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.h(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.h(n,1)
q=q+n[1]+", "
if(1>=t)return H.h(m,1)
q=q+m[1]+", "
if(1>=s)return H.h(l,1)
q=q+l[1]+", "
if(1>=r)return H.h(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.h(n,2)
u=u+n[2]+", "
if(2>=t)return H.h(m,2)
u=u+m[2]+", "
if(2>=s)return H.h(l,2)
u=u+l[2]+", "
if(2>=r)return H.h(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.h(n,3)
q=q+n[3]+", "
if(3>=t)return H.h(m,3)
q=q+m[3]+", "
if(3>=s)return H.h(l,3)
q=q+l[3]+", "
if(3>=r)return H.h(k,3)
return u+(q+k[3]+"]")},
N:function(){return this.E("")}}
V.a5.prototype={
n:function(a,b){return new V.a5(this.a+b.a,this.b+b.b)},
p:function(a,b){return new V.a5(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.a0.prototype={
n:function(a,b){return new V.a0(this.a+b.a,this.b+b.b,this.c+b.c)},
p:function(a,b){return new V.a0(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.a0(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.aD.prototype={
n:function(a,b){var u=this
return new V.aD(C.d.n(u.a,b.gjk(b)),C.d.n(u.b,b.gjl(b)),C.d.n(u.c,b.gjm(b)),C.d.n(u.d,b.gjj(b)))},
p:function(a,b){var u=this
return new V.aD(C.d.p(u.a,b.gjk(b)),C.d.p(u.b,b.gjl(b)),C.d.p(u.c,b.gjm(b)),C.d.p(u.d,b.gjj(b)))},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aD))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.bC.prototype={
gaq:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bC))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.W.prototype={
co:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a,s=b.giC(b)
if(typeof t!=="number")return t.n()
s=C.d.n(t,s)
t=this.b
u=b.giD(b)
if(typeof t!=="number")return t.n()
return new V.W(s,C.d.n(t,u))},
p:function(a,b){var u,t=this.a,s=b.giC(b)
if(typeof t!=="number")return t.p()
s=C.d.p(t,s)
t=this.b
u=b.giD(b)
if(typeof t!=="number")return t.p()
return new V.W(s,C.d.p(t,u))},
v:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.v()
u=this.b
if(typeof u!=="number")return u.v()
return new V.W(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.kH
return u==null?$.kH=new V.W(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.W(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=this.a
s=$.M()
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
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.K.prototype={
co:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cp:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
ay:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
p:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
S:function(a){return new V.K(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.M().a)return V.cI()
return new V.K(this.a/b,this.b/b,this.c/b)},
dW:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
U.fe.prototype={
bG:function(a){var u=V.n_(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.G():u},
T:function(a){var u=this.y
if(u!=null)u.A(a)},
sef:function(a,b){},
sdZ:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.M().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bG(u)}s=new D.z("maximumLocation",s,t.b,[P.w])
s.b=!0
t.T(s)}},
se0:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.M().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bG(u)}s=new D.z("minimumLocation",s,t.c,[P.w])
s.b=!0
t.T(s)}},
sac:function(a,b){var u,t=this
b=t.bG(b)
u=t.d
if(!(Math.abs(u-b)<$.M().a)){t.d=b
u=new D.z("location",u,b,[P.w])
u.b=!0
t.T(u)}},
se_:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.M().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.z("maximumVelocity",r,a,[P.w])
r.b=!0
s.T(r)}},
sa1:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.M().a)){u.f=a
t=new D.z("velocity",t,a,[P.w])
t.b=!0
u.T(t)}},
sdw:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.M().a)){this.x=a
u=new D.z("dampening",u,a,[P.w])
u.b=!0
this.T(u)}},
a9:function(a,b){var u,t,s,r=this,q=r.f,p=$.M().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sac(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.M().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sa1(u)}}}
U.d5.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.G():u},
aN:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d5))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.cj.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.G():u},
T:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.A(a)},
am:function(){return this.T(null)},
eB:function(a,b){var u,t,s,r,q,p,o,n=U.ad
H.j(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gbc(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.m(t,s)
if(o.a==null)o.saa(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bw([n])
n.b=!0
this.T(n)},
hd:function(a,b){var u,t,s=U.ad
H.j(b,"$ie",[s],"$ae")
for(u=b.gU(b),t=this.gbc();u.B();)u.gL(u).gm().F(0,t)
s=new D.bx([s])
s.b=!0
this.T(s)},
aN:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aO()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ao(r,r.length,[H.x(r,0)]),u=null;r.B();){q=r.d
if(q!=null){t=q.aN(0,b,c)
if(t!=null)u=u==null?t:t.v(0,u)}}s.f=u==null?V.aY():u
r=s.e
if(r!=null)r.ar(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cj))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.L(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.ad]},
$aT:function(){return[U.ad]},
$iad:1}
U.ad.prototype={}
U.e2.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.G():u},
T:function(a){var u
H.k(a,"$iv")
u=this.fx
if(u!=null)u.A(a)},
am:function(){return this.T(null)},
c1:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.G():t
u.h(0,s.gfm())
u=s.a.c
t=u.d
u=t==null?u.d=D.G():t
u.h(0,s.gfo())
u=s.a.c
t=u.c
u=t==null?u.c=D.G():t
u.h(0,s.gfq())
u=s.a.d
t=u.f
u=t==null?u.f=D.G():t
u.h(0,s.gfi())
u=s.a.d
t=u.d
u=t==null?u.d=D.G():t
u.h(0,s.gfk())
u=s.a.e
t=u.b
u=t==null?u.b=D.G():t
u.h(0,s.ghT())
u=s.a.e
t=u.d
u=t==null?u.d=D.G():t
u.h(0,s.ghR())
u=s.a.e
t=u.c
u=t==null?u.c=D.G():t
u.h(0,s.ghP())
return!0},
an:function(a){var u=a.a,t=a.b
if(H.C(this.f)){if(typeof u!=="number")return u.S()
u=-u}if(H.C(this.r)){if(typeof t!=="number")return t.S()
t=-t}return new V.W(u,t)},
fn:function(a){var u=this
a=H.c(H.k(a,"$iv"),"$ibA")
if(!J.L(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fp:function(a){var u,t,s,r,q,p,o,n=this
a=H.c(H.k(a,"$iv"),"$ibA")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.p(0,a.y)
u=new V.W(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.an(new V.W(t.a,t.b).v(0,2).w(0,u.gaq()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sa1(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sa1(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.an(new V.W(s.a,s.b).v(0,2).w(0,u.gaq()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sac(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sac(0,-p*q+s)
n.b.sa1(0)
n.c.sa1(0)
t=t.p(0,a.z)
n.dx=n.an(new V.W(t.a,t.b).v(0,2).w(0,u.gaq()))}n.am()},
fs:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sa1(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sa1(-t*10*u)
r.am()}},
fj:function(a){var u=this
if(H.c(H.k(a,"$iv"),"$idq").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fl:function(a){var u,t,s,r,q,p,o,n=this
a=H.c(H.k(a,"$iv"),"$ibA")
if(!J.L(n.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=n.an(new V.W(s.a,s.b).v(0,2).w(0,u.gaq()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sac(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sac(0,-p*q+s)
n.b.sa1(0)
n.c.sa1(0)
t=t.p(0,a.z)
n.dx=n.an(new V.W(t.a,t.b).v(0,2).w(0,u.gaq()))
n.am()},
hU:function(a){var u=this
H.k(a,"$iv")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hS:function(a){var u,t,s,r,q,p,o,n=this
a=H.c(H.k(a,"$iv"),"$idW")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.p(0,a.y)
u=new V.W(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.an(new V.W(t.a,t.b).v(0,2).w(0,u.gaq()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sa1(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sa1(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.an(new V.W(s.a,s.b).v(0,2).w(0,u.gaq()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sac(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sac(0,-p*q+s)
n.b.sa1(0)
n.c.sa1(0)
t=t.p(0,a.z)
n.dx=n.an(new V.W(t.a,t.b).v(0,2).w(0,u.gaq()))}n.am()},
hQ:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sa1(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sa1(-t*10*u)
r.am()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.aO()
if(q<p){r.dy=p
u=b.y
r.c.a9(0,u)
r.b.a9(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bh(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.v(0,V.bh(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iad:1}
U.e3.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.G():u},
T:function(a){var u=this.r
if(u!=null)u.A(a)},
c1:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.G():t
t=r.gft()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.G():s).h(0,t)
return!0},
fu:function(a){var u,t,s,r,q=this
H.k(a,"$iv")
if(!J.L(q.b,q.a.b.c))return
H.c(a,"$icn")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){q.d=r
u=new D.z("zoom",u,r,[P.w])
u.b=!0
q.T(u)}},
aN:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.kl(u,u,u)}return t.f},
$iad:1}
M.d4.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.G():u},
X:function(a){var u
H.k(a,"$iv")
u=this.r
if(u!=null)u.A(a)},
aQ:function(){return this.X(null)},
hh:function(a,b){var u,t,s,r,q,p,o,n=M.at
H.j(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gW(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.m(t,s)
if(o.a==null)o.saa(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bw([n])
n.b=!0
this.X(n)},
hj:function(a,b){var u,t,s=M.at
H.j(b,"$ie",[s],"$ae")
for(u=b.gU(b),t=this.gW();u.B();)u.gL(u).gm().F(0,t)
s=new D.bx([s])
s.b=!0
this.X(s)},
a7:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.ao(u,u.length,[H.x(u,0)]);u.B();){t=u.d
if(t!=null)t.a7(a)}s.f=!1},
$ae:function(){return[M.at]},
$aT:function(){return[M.at]},
$iat:1}
M.d7.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.G():u},
X:function(a){var u
H.k(a,"$iv")
u=this.r
if(u!=null)u.A(a)},
aQ:function(){return this.X(null)},
saW:function(a){var u,t,s=this
if(a==null)a=new X.fH()
u=s.b
if(u!==a){if(u!=null)u.gm().F(0,s.gW())
t=s.b
s.b=a
a.gm().h(0,s.gW())
u=new D.z("camera",t,s.b,[X.bN])
u.b=!0
s.X(u)}},
saC:function(a,b){var u,t,s=this
if(b==null)b=X.jA(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gm().F(0,s.gW())
t=s.c
s.c=b
b.gm().h(0,s.gW())
u=new D.z("target",t,s.c,[X.cy])
u.b=!0
s.X(u)}},
sas:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().F(0,t.gW())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gW())
s=new D.z("technique",u,t.d,[O.bE])
s.b=!0
t.X(s)}},
a7:function(a){var u,t=this
a.cu(t.d)
t.c.I(a)
t.b.I(a)
u=t.d
if(u!=null)u.a9(0,a)
t.e.a9(0,a)
t.e.a7(a)
t.b.a5(a)
t.c.a5(a)
a.cs()},
$iat:1}
M.dd.prototype={
X:function(a){var u
H.k(a,"$iv")
u=this.y
if(u!=null)u.A(a)},
aQ:function(){return this.X(null)},
fG:function(a,b){var u,t,s,r,q,p,o,n=E.ak
H.j(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gW(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bt()
o.saa(null)
o.saI(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.saa(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bw([n])
n.b=!0
this.X(n)},
fI:function(a,b){var u,t,s=E.ak
H.j(b,"$ie",[s],"$ae")
for(u=b.gU(b),t=this.gW();u.B();)u.gL(u).gm().F(0,t)
s=new D.bx([s])
s.b=!0
this.X(s)},
saW:function(a){var u,t,s=this
if(a==null)a=X.kq(null)
u=s.b
if(u!==a){if(u!=null)u.gm().F(0,s.gW())
t=s.b
s.b=a
a.gm().h(0,s.gW())
u=new D.z("camera",t,s.b,[X.bN])
u.b=!0
s.X(u)}},
saC:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().F(0,t.gW())
u=t.c
t.c=b
b.gm().h(0,t.gW())
s=new D.z("target",u,t.c,[X.cy])
s.b=!0
t.X(s)}},
sas:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().F(0,t.gW())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gW())
s=new D.z("technique",u,t.d,[O.bE])
s.b=!0
t.X(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.G():u},
a7:function(a){var u,t=this
a.cu(t.d)
t.c.I(a)
t.b.I(a)
u=t.d
if(u!=null)u.a9(0,a)
for(u=t.e.a,u=new J.ao(u,u.length,[H.x(u,0)]);u.B();)u.d.a9(0,a)
for(u=t.e.a,u=new J.ao(u,u.length,[H.x(u,0)]);u.B();)u.d.a7(a)
t.b.toString
a.cy.aB()
a.db.aB()
t.c.a5(a)
a.cs()},
seT:function(a,b){this.e=H.j(b,"$iT",[E.ak],"$aT")},
$iat:1}
M.at.prototype={}
A.d_.prototype={}
A.f3.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iE:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
aX:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.d9.prototype={
ab:function(a,b,c){if(c==null||!c.d)C.b.R(b.a,b.d,1)
else{a.ek(c)
C.b.R(b.a,b.d,0)}}}
A.dt.prototype={
er:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.bD("")
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
d1.i2(u)
d1.i9(u)
d1.i3(u)
d1.ij(u)
d1.ik(u)
d1.ib(u)
d1.ip(u)
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
u=new P.bD("")
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
q.i6(u)
q.i1(u)
q.i4(u)
q.i7(u)
q.ih(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.ie(u)
q.ig(u)}q.ia(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.c){m=u.a=m+"uniform float alpha;\n"
if(l!==C.i){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.e){m+="uniform samplerCube alphaTxt;\n"
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
case C.e:m+=c7
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
k=H.d([],[P.o])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.D(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.i5(u)
q.ic(u)
q.ii(u)
q.il(u)
q.im(u)
q.io(u)
q.i8(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
p=p?u.a=m+"   vec3 norm = normal();\n":m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.o])
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
a6.b_(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.c(a6.y.l(0,"invViewMat"),"$ia_")
if(t)a6.dy=H.c(a6.y.l(0,"objMat"),"$ia_")
if(r)a6.fr=H.c(a6.y.l(0,"viewObjMat"),"$ia_")
a6.fy=H.c(a6.y.l(0,"projViewObjMat"),"$ia_")
if(d1.x2)a6.k1=H.c(a6.y.l(0,"txt2DMat"),"$ibm")
if(d1.y1)a6.k2=H.c(a6.y.l(0,"txtCubeMat"),"$ia_")
if(d1.y2)a6.k3=H.c(a6.y.l(0,"colorMat"),"$ia_")
a6.seP(H.d([],[A.a_]))
t=d1.ap
if(t>0){a6.k4=H.k(a6.y.l(0,"bendMatCount"),"$iD")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.q(a7+q+a8));(s&&C.a).h(s,H.c(g,"$ia_"))}}t=d1.a
if(t!==C.c){a6.r2=H.c(a6.y.l(0,"emissionClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.f:a6.rx=H.c(a6.y.l(0,a9),"$ia1")
a6.x1=H.c(a6.y.l(0,b0),"$iD")
break
case C.e:a6.ry=H.c(a6.y.l(0,a9),"$iae")
a6.x1=H.c(a6.y.l(0,b0),"$iD")
break}}t=d1.b
if(t!==C.c){a6.x2=H.c(a6.y.l(0,"ambientClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.f:a6.y1=H.c(a6.y.l(0,b1),"$ia1")
a6.ap=H.c(a6.y.l(0,b2),"$iD")
break
case C.e:a6.y2=H.c(a6.y.l(0,b1),"$iae")
a6.ap=H.c(a6.y.l(0,b2),"$iD")
break}}t=d1.c
if(t!==C.c){a6.al=H.c(a6.y.l(0,"diffuseClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.f:a6.bk=H.c(a6.y.l(0,b3),"$ia1")
a6.bl=H.c(a6.y.l(0,b4),"$iD")
break
case C.e:a6.dA=H.c(a6.y.l(0,b3),"$iae")
a6.bl=H.c(a6.y.l(0,b4),"$iD")
break}}t=d1.d
if(t!==C.c){a6.bm=H.c(a6.y.l(0,"invDiffuseClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.f:a6.dB=H.c(a6.y.l(0,b5),"$ia1")
a6.bn=H.c(a6.y.l(0,b6),"$iD")
break
case C.e:a6.dC=H.c(a6.y.l(0,b5),"$iae")
a6.bn=H.c(a6.y.l(0,b6),"$iD")
break}}t=d1.e
if(t!==C.c){a6.bq=H.c(a6.y.l(0,"shininess"),"$iV")
a6.bo=H.c(a6.y.l(0,"specularClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.f:a6.dD=H.c(a6.y.l(0,b7),"$ia1")
a6.bp=H.c(a6.y.l(0,b8),"$iD")
break
case C.e:a6.dE=H.c(a6.y.l(0,b7),"$iae")
a6.bp=H.c(a6.y.l(0,b8),"$iD")
break}}switch(d1.f){case C.c:break
case C.i:break
case C.f:a6.dF=H.c(a6.y.l(0,"bumpTxt"),"$ia1")
a6.br=H.c(a6.y.l(0,b9),"$iD")
break
case C.e:a6.dG=H.c(a6.y.l(0,"bumpTxt"),"$iae")
a6.br=H.c(a6.y.l(0,b9),"$iD")
break}if(d1.dy){a6.dH=H.c(a6.y.l(0,"envSampler"),"$iae")
a6.dI=H.c(a6.y.l(0,"nullEnvTxt"),"$iD")
t=d1.r
if(t!==C.c){a6.bs=H.c(a6.y.l(0,"reflectClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.f:a6.dJ=H.c(a6.y.l(0,c0),"$ia1")
a6.bt=H.c(a6.y.l(0,c1),"$iD")
break
case C.e:a6.dK=H.c(a6.y.l(0,c0),"$iae")
a6.bt=H.c(a6.y.l(0,c1),"$iD")
break}}t=d1.x
if(t!==C.c){a6.bu=H.c(a6.y.l(0,"refraction"),"$iV")
a6.bv=H.c(a6.y.l(0,"refractClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.f:a6.dL=H.c(a6.y.l(0,c2),"$ia1")
a6.bw=H.c(a6.y.l(0,c3),"$iD")
break
case C.e:a6.dM=H.c(a6.y.l(0,c2),"$iae")
a6.bw=H.c(a6.y.l(0,c3),"$iD")
break}}}t=d1.y
if(t!==C.c){a6.bx=H.c(a6.y.l(0,"alpha"),"$iV")
switch(t){case C.c:break
case C.i:break
case C.f:a6.dN=H.c(a6.y.l(0,c4),"$ia1")
a6.by=H.c(a6.y.l(0,c5),"$iD")
break
case C.e:a6.dO=H.c(a6.y.l(0,c4),"$iae")
a6.by=H.c(a6.y.l(0,c5),"$iD")
break}}a6.seC(H.d([],[A.cC]))
a6.seD(H.d([],[A.cD]))
a6.seE(H.d([],[A.cE]))
a6.seF(H.d([],[A.cF]))
a6.seG(H.d([],[A.cG]))
a6.seH(H.d([],[A.cH]))
if(d1.k2){t=d1.z
if(t>0){a6.dP=H.k(a6.y.l(0,"dirLightCount"),"$iD")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.c(g,"$iJ")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.c(f,"$iJ")
s=a6.cd;(s&&C.a).h(s,new A.cC(g,f))}}t=d1.Q
if(t>0){a6.dQ=H.k(a6.y.l(0,"pntLightCount"),"$iD")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.c(g,"$iJ")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.c(f,"$iJ")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.c(e,"$iJ")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.c(d,"$iV")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.c(c,"$iV")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.c(b,"$iV")
s=a6.ce;(s&&C.a).h(s,new A.cD(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.dR=H.k(a6.y.l(0,"spotLightCount"),"$iD")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.c(g,"$iJ")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.c(f,"$iJ")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.c(e,"$iJ")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.c(d,"$iJ")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.c(c,"$iV")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.c(b,"$iV")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.c(a,"$iV")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.q(a7+r+a8))
H.c(a0,"$iV")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.q(a7+r+a8))
H.c(a1,"$iV")
s=a6.cf;(s&&C.a).h(s,new A.cE(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.dS=H.k(a6.y.l(0,"txtDirLightCount"),"$iD")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.c(g,"$iJ")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.c(f,"$iJ")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.c(e,"$iJ")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.c(d,"$iJ")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.c(c,"$iJ")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.c(b,"$iD")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.c(a,"$ia1")
s=a6.cg;(s&&C.a).h(s,new A.cF(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.dT=H.k(a6.y.l(0,"txtPntLightCount"),"$iD")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.c(g,"$iJ")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.c(f,"$iJ")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.c(e,"$ibm")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.c(d,"$iJ")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.c(c,"$iD")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.c(b,"$iV")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.c(a,"$iV")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.q(a7+r+a8))
H.c(a0,"$iV")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.q(a7+r+a8))
H.c(a1,"$iae")
s=a6.ci;(s&&C.a).h(s,new A.cG(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.dU=H.k(a6.y.l(0,"txtSpotLightCount"),"$iD")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.c(g,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.c(f,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.c(e,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.c(d,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.c(c,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.c(b,"$iD")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.c(a,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.q(a7+r+a8))
H.c(a0,"$iV")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.q(a7+r+a8))
H.c(a1,"$iV")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.q(a7+r+a8))
H.c(a2,"$iV")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.q(a7+r+a8))
H.c(a3,"$iV")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.q(a7+r+a8))
H.c(a4,"$iV")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.q(a7+r+a8))
H.c(a5,"$ia1")
s=a6.cj;(s&&C.a).h(s,new A.cH(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ab:function(a,b,c){C.b.R(b.a,b.d,1)},
ae:function(a,b,c){C.b.R(b.a,b.d,1)},
seP:function(a){this.r1=H.j(a,"$ib",[A.a_],"$ab")},
seC:function(a){this.cd=H.j(a,"$ib",[A.cC],"$ab")},
seD:function(a){this.ce=H.j(a,"$ib",[A.cD],"$ab")},
seE:function(a){this.cf=H.j(a,"$ib",[A.cE],"$ab")},
seF:function(a){this.cg=H.j(a,"$ib",[A.cF],"$ab")},
seG:function(a){this.ci=H.j(a,"$ib",[A.cG],"$ab")},
seH:function(a){this.cj=H.j(a,"$ib",[A.cH],"$ab")}}
A.h_.prototype={
i2:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.ap+"];\n"
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
i9:function(a){var u
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
i3:function(a){var u
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
ij:function(a){var u,t
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
ik:function(a){var u,t
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
ib:function(a){var u
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
ip:function(a){var u
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
av:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.h(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.j.cH(c,1))+"Txt;\n")
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
i6:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.av(a,s,"emission")
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
case C.e:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
i1:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.av(a,s,"ambient")
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
case C.e:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
i4:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.av(a,s,"diffuse")
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
case C.e:s=u+t
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
i7:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.av(a,s,"invDiffuse")
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
case C.e:s=u+t
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
ih:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.av(a,s,"specular")
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
case C.e:s=u+t
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
ia:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
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
case C.e:u+="uniform samplerCube bumpTxt;\n"
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
case C.e:u+=q
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
ie:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.av(a,s,"reflect")
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
case C.e:s=u+t
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
ig:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.av(a,s,"refract")
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
case C.e:s=u+t
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
i5:function(a){var u,t=this.z
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
ic:function(a){var u,t=this.Q
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
ii:function(a){var u,t=this.ch
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
il:function(a){var u,t,s=this.cx
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
im:function(a){var u,t,s=this.cy
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
io:function(a){var u,t,s=this.db
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
i8:function(a){var u
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
i:function(a){return this.al}}
A.cC.prototype={}
A.cF.prototype={}
A.cD.prototype={}
A.cG.prototype={}
A.cE.prototype={}
A.cH.prototype={}
A.dz.prototype={}
A.hh.prototype={
i:function(a){return this.e}}
A.cv.prototype={
aP:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
b_:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cZ(b,35633)
r.f=r.cZ(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.C(H.l_(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.q("Failed to link shader: "+H.l(s)))}r.hD()
r.hF()},
I:function(a){a.a.useProgram(this.r)
this.x.iE()},
cZ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.C(H.l_(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.i(P.q("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
hD:function(){var u,t,s,r=this,q=H.d([],[A.d_]),p=r.a,o=H.af(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d_(p,t.name,s))}r.x=new A.f3(q)},
hF:function(){var u,t,s,r=this,q=H.d([],[A.dX]),p=r.a,o=H.af(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iz(t.type,t.size,t.name,s))}r.y=new A.ic(q)},
aF:function(a,b,c){var u=this.a
if(a===1)return new A.D(u,b,c)
else return A.jN(u,this.r,b,a,c)},
eW:function(a,b,c){var u=this.a
if(a===1)return new A.a1(u,b,c)
else return A.jN(u,this.r,b,a,c)},
eX:function(a,b,c){var u=this.a
if(a===1)return new A.ae(u,b,c)
else return A.jN(u,this.r,b,a,c)},
bh:function(a,b){return new P.ed(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
iz:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aF(b,c,d)
case 5121:return u.aF(b,c,d)
case 5122:return u.aF(b,c,d)
case 5123:return u.aF(b,c,d)
case 5124:return u.aF(b,c,d)
case 5125:return u.aF(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.au(u.a,c,d)
case 35665:return new A.J(u.a,c,d)
case 35666:return new A.dY(u.a,c,d)
case 35667:return new A.i9(u.a,c,d)
case 35668:return new A.ia(u.a,c,d)
case 35669:return new A.ib(u.a,c,d)
case 35674:return new A.id(u.a,c,d)
case 35675:return new A.bm(u.a,c,d)
case 35676:return new A.a_(u.a,c,d)
case 35678:return u.eW(b,c,d)
case 35680:return u.eX(b,c,d)
case 35670:throw H.i(u.bh("BOOL",c))
case 35671:throw H.i(u.bh("BOOL_VEC2",c))
case 35672:throw H.i(u.bh("BOOL_VEC3",c))
case 35673:throw H.i(u.bh("BOOL_VEC4",c))
default:throw H.i(P.q("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bP.prototype={
i:function(a){return this.b}}
A.bq.prototype={
i:function(a){return this.b}}
A.dJ.prototype={}
A.dQ.prototype={
ew:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.b_(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.m6(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.c(p.y.l(0,"txtCount"),"$iD")
p.ch=H.c(p.y.l(0,"backClr"),"$idY")
p.shZ(H.d([],[A.a1]))
p.seU(H.d([],[A.a_]))
u=[A.au]
p.shJ(H.d([],u))
p.shK(H.d([],u))
p.seZ(H.d([],u))
p.sf_(H.d([],u))
p.sfa(H.d([],[A.D]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.c(q,"$ia1"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.c(q,"$ia_"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.c(q,"$iau"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.c(q,"$iau"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.c(q,"$iau"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.c(q,"$iau"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.c(q,"$iD"))}},
shZ:function(a){this.cx=H.j(a,"$ib",[A.a1],"$ab")},
seU:function(a){this.cy=H.j(a,"$ib",[A.a_],"$ab")},
shJ:function(a){this.db=H.j(a,"$ib",[A.au],"$ab")},
shK:function(a){this.dx=H.j(a,"$ib",[A.au],"$ab")},
seZ:function(a){this.dy=H.j(a,"$ib",[A.au],"$ab")},
sf_:function(a){this.fr=H.j(a,"$ib",[A.au],"$ab")},
sfa:function(a){this.fx=H.j(a,"$ib",[A.D],"$ab")}}
A.dX.prototype={}
A.ic.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
l:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.D.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.i9.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.ia.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.ib.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.i8.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
si_:function(a){H.j(a,"$ib",[P.y],"$ab")}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.au.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.J.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.dY.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.id.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.bm.prototype={
a_:function(a){var u=new Float32Array(H.bX(H.j(a,"$ib",[P.w],"$ab")))
C.b.ed(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.a_.prototype={
a_:function(a){var u=new Float32Array(H.bX(H.j(a,"$ib",[P.w],"$ab")))
C.b.cC(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.a1.prototype={
ek:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.ae.prototype={
cF:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.jc.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cp(s.b,b).cp(s.d.cp(s.c,b),c)
a.sac(0,new V.a0(r.a,r.b,r.c))
a.sjb(r.w(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
u=new V.aD(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.L(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a4()}},
$S:22}
F.js.prototype={
$1:function(a){return new V.a0(Math.cos(a),Math.sin(a),0)},
$S:36}
F.ji.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.k5(n.$1(o),m)
m=J.lt(J.k5(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.K(m.a,m.b,m.c)
u=m.w(0,Math.sqrt(m.C(m)))
n=$.kJ
if(n==null){n=new V.K(1,0,0)
$.kJ=n
t=n}else t=n
n=u.ay(!J.L(u,t)?V.kN():t)
s=n.w(0,Math.sqrt(n.C(n)))
n=s.ay(u)
t=n.w(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.v(0,n*m)
m=s.v(0,q*m)
a.sac(0,J.ls(l,new V.a0(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:22}
F.a8.prototype={
aY:function(){var u=this
if(!u.gaZ()){C.a.F(u.a.a.d.b,u)
u.a.a.a4()}u.bU()
u.bV()
u.hu()},
bZ:function(a){this.a=a
C.a.h(a.d.b,this)},
c_:function(a){this.b=a
C.a.h(a.d.c,this)},
hC:function(a){this.c=a
C.a.h(a.d.d,this)},
bU:function(){var u=this.a
if(u!=null){C.a.F(u.d.b,this)
this.a=null}},
bV:function(){var u=this.b
if(u!=null){C.a.F(u.d.c,this)
this.b=null}},
hu:function(){var u=this.c
if(u!=null){C.a.F(u.d.d,this)
this.c=null}},
gaZ:function(){return this.a==null||this.b==null||this.c==null},
eO:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cI()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.dW())return
return s.w(0,Math.sqrt(s.C(s)))},
eS:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.p(0,q)
r=new V.K(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.C(r)))
r=t.p(0,q)
r=new V.K(r.a,r.b,r.c)
r=s.ay(r.w(0,Math.sqrt(r.C(r))))
return r.w(0,Math.sqrt(r.C(r)))},
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
s=V.cI()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.dW())return
return s.w(0,Math.sqrt(s.C(s)))},
eR:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.M().a){l=d.p(0,g)
l=new V.K(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.p(0,g).v(0,p).n(0,g).p(0,j)
l=new V.K(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.C(l)))
l=o.ay(q)
l=l.w(0,Math.sqrt(l.C(l))).ay(o)
q=l.w(0,Math.sqrt(l.C(l)))}return q},
c7:function(){var u,t=this
if(t.e!=null)return!0
u=t.eN()
if(u==null){u=t.eR()
if(u==null)return!1}t.e=u
t.a.a.a4()
return!0},
giw:function(a){var u=this
if(J.L(u.a,u.b))return!0
if(J.L(u.b,u.c))return!0
if(J.L(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){var u,t,s=this
if(s.gaZ())return a+"disposed"
u=a+C.j.ah(J.aw(s.a.e),0)+", "+C.j.ah(J.aw(s.b.e),0)+", "+C.j.ah(J.aw(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.E("")}}
F.fx.prototype={}
F.hG.prototype={
b0:function(a,b,c){var u,t=b.a
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
F.bf.prototype={
aY:function(){var u=this
if(!u.gaZ()){C.a.F(u.a.a.c.b,u)
u.a.a.a4()}u.bU()
u.bV()},
bZ:function(a){this.a=a
C.a.h(a.c.b,this)},
c_:function(a){this.b=a
C.a.h(a.c.c,this)},
bU:function(){var u=this.a
if(u!=null){C.a.F(u.c.b,this)
this.a=null}},
bV:function(){var u=this.b
if(u!=null){C.a.F(u.c.c,this)
this.b=null}},
gaZ:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){if(this.gaZ())return a+"disposed"
return a+C.j.ah(J.aw(this.a.e),0)+", "+C.j.ah(J.aw(this.b.e),0)},
N:function(){return this.E("")}}
F.fO.prototype={}
F.i7.prototype={
b0:function(a,b,c){var u,t=b.a
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
F.bB.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.ah(J.aw(u.e),0)},
N:function(){return this.E("")}}
F.dH.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.G():u},
cq:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){r=g[s]
h.a.h(0,r.iy())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bB()
if(n.a==null)H.t(P.q("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.A(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.n()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.lL(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.n()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.ch(l,k,i)}g=h.e
if(g!=null)g.ar(0)},
aj:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aj()||!1
if(!t.a.aj())u=!1
s=t.e
if(s!=null)s.ar(0)
return u},
aK:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aK()||!1
if(!t.a.aK())u=!1
s=t.e
if(s!=null)s.ar(0)
return u},
bj:function(){var u=this.e
if(u!=null)++u.d
this.a.bj()
u=this.e
if(u!=null)u.ar(0)
return!0},
iP:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.x(o,0)])
for(o=[F.am];u.length!==0;){t=C.a.giG(u)
C.a.e7(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.h(u,r)
q=u[r]
if(q!=null&&a.b0(0,t,q)){C.a.h(s,q)
C.a.e7(u,r)}}if(s.length>1)b.cq(s)}}p.a.u()
p.c.cw()
p.d.cw()
p.b.j4()
p.c.cz(new F.i7())
p.d.cz(new F.hG())
o=p.e
if(o!=null)o.ar(0)},
aV:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.ag()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.aL().a)!==0)++s
if((t&$.aK().a)!==0)++s
if((t&$.av().a)!==0)++s
if((t&$.aM().a)!==0)++s
if((t&$.cY().a)!==0)++s
if((t&$.cZ().a)!==0)++s
if((t&$.c6().a)!==0)++s
if((t&$.bo().a)!==0)++s
r=a3.gcG(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.w
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.d2])
for(n=0,m=0;m<s;++m){l=a3.iu(m)
k=l.gcG(l)
C.a.a8(o,m,new Z.d2(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].iM(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.a8(p,h,i[g]);++h}}n+=k}H.j(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.bX(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bc(new Z.e4(a0,f),o,a3)
e.sfc(H.d([],[Z.bv]))
if(a.b.b.length!==0){t=P.y
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)}b=Z.jO(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bv(0,d.length,b))}if(a.c.b.length!==0){t=P.y
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)}b=Z.jO(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bv(1,d.length,b))}if(a.d.b.length!==0){t=P.y
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].c
c.a.a.u()
C.a.h(d,c.e)}b=Z.jO(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bv(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.o])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.E(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.E(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.E(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.E(t))}return C.a.D(s,"\n")},
a4:function(){var u=this.e
if(u!=null)u.A(null)},
$in6:1}
F.hA.prototype={
ir:function(a){var u,t,s,r,q,p
H.j(a,"$ib",[F.am],"$ab")
u=H.d([],[F.a8])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.ch(t,q,p))}return u},
is:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,"$ib",[F.am],"$ab")
u=H.d([],[F.a8])
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
C.a.h(u,F.ch(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ch(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ch(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ch(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cz:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b0(0,p,n)){p.aY()
break}}}}},
cw:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.giw(s)
if(t)s.aY()}},
aj:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].c8())s=!1
return s},
aK:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].c7())s=!1
return s},
i:function(a){return this.N()},
E:function(a){var u,t,s,r=H.d([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].E(a))
return C.a.D(r,"\n")},
N:function(){return this.E("")},
sf5:function(a){this.b=H.j(a,"$ib",[F.a8],"$ab")}}
F.hB.prototype={
gk:function(a){return this.b.length},
cz:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b0(0,p,n)){p.aY()
break}}}}},
cw:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.L(s.a,s.b)
if(t)s.aY()}},
i:function(a){return this.N()},
E:function(a){var u,t,s=H.d([],[P.o]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.D(s,"\n")},
N:function(){return this.E("")},
sfe:function(a){this.b=H.j(a,"$ib",[F.bf],"$ab")}}
F.hC.prototype={
gk:function(a){return this.b.length},
j4:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.F(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.A(null)}s=t.a
if(s!=null){C.a.F(s.b.b,t)
t.a=null}}}},
i:function(a){return this.N()},
E:function(a){var u,t,s,r=H.d([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].E(a))
return C.a.D(r,"\n")},
N:function(){return this.E("")},
sbR:function(a){this.b=H.j(a,"$ib",[F.bB],"$ab")}}
F.am.prototype={
ca:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.im(u.cx,r,o,t,s,q,p,a,n)},
iy:function(){return this.ca(null)},
sac:function(a,b){var u
if(!J.L(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a4()}},
sjb:function(a){var u
if(!J.L(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a4()}},
iM:function(a){var u,t,s=this
if(a.q(0,$.ag())){u=s.f
t=[P.w]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.aL())){u=s.r
t=[P.w]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.aK())){u=s.x
t=[P.w]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.av())){u=s.y
t=[P.w]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.q(0,$.aM())){u=s.z
t=[P.w]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.cY())){u=s.Q
t=[P.w]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.cZ())){u=s.Q
t=[P.w]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.c6()))return H.d([s.ch],[P.w])
else if(a.q(0,$.bo())){u=s.cx
t=[P.w]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.w])},
c8:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cI()
t.d.P(0,new F.iy(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.ar(0)}return!0},
c7:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cI()
t.d.P(0,new F.ix(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.ar(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){var u,t,s=this,r="-",q=H.d([],[P.o])
C.a.h(q,C.j.ah(J.aw(s.e),0))
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
C.a.h(q,V.R(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.D(q,", ")
return a+"{"+t+"}"},
N:function(){return this.E("")}}
F.iy.prototype={
$1:function(a){var u,t
H.k(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:5}
F.ix.prototype={
$1:function(a){var u,t
H.k(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:5}
F.io.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.i(P.q("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a4()
return!0},
bi:function(a,b,c,d,e,f){var u=F.im(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
aj:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].c8()
return!0},
aK:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].c7()
return!0},
bj:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.L(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}}}return!0},
i:function(a){return this.N()},
E:function(a){var u,t,s,r
this.u()
u=H.d([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].E(a))
return C.a.D(u,"\n")},
N:function(){return this.E("")},
si0:function(a){this.c=H.j(a,"$ib",[F.am],"$ab")}}
F.ip.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.h(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.h(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.h(t,b)
return t[b]},
P:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.a8]})
C.a.P(u.b,b)
C.a.P(u.c,new F.iq(u,b))
C.a.P(u.d,new F.ir(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].E(""))
return C.a.D(r,"\n")},
sf6:function(a){this.b=H.j(a,"$ib",[F.a8],"$ab")},
sf7:function(a){this.c=H.j(a,"$ib",[F.a8],"$ab")},
sf8:function(a){this.d=H.j(a,"$ib",[F.a8],"$ab")}}
F.iq.prototype={
$1:function(a){H.k(a,"$ia8")
if(!J.L(a.a,this.a))this.b.$1(a)},
$S:5}
F.ir.prototype={
$1:function(a){var u
H.k(a,"$ia8")
u=this.a
if(!J.L(a.a,u)&&!J.L(a.b,u))this.b.$1(a)},
$S:5}
F.is.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.h(t,u)
return t[u]}else{if(b<0)return H.h(t,b)
return t[b]}},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].E(""))
return C.a.D(r,"\n")},
sff:function(a){this.b=H.j(a,"$ib",[F.bf],"$ab")},
sfg:function(a){this.c=H.j(a,"$ib",[F.bf],"$ab")}}
F.iu.prototype={}
F.it.prototype={
b0:function(a,b,c){return J.L(b.f,c.f)}}
F.iv.prototype={}
F.hg.prototype={
cq:function(a){var u,t,s,r,q,p,o,n,m
H.j(a,"$ib",[F.am],"$ab")
u=V.cI()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.C(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.B)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.w(0,Math.sqrt(o*o+n*n+m*m))}if(!J.L(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.A(null)}}}return}}
F.iw.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].E(""))
return C.a.D(r,"\n")},
sbR:function(a){this.b=H.j(a,"$ib",[F.bB],"$ab")}}
O.fm.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.G():u},
Y:function(){var u=this.r
if(u!=null)u.A(null)},
sdu:function(a){if(this.b!=a){this.b=a
this.Y()}},
sdr:function(a){if(this.c!=a){this.c=a
this.Y()}},
sdq:function(a){var u=a==null?V.aY():a
this.f=u
if(!J.L(u,a)){this.f=a
this.Y()}},
a9:function(a,b){},
M:function(a,b){H.j(a,"$ib",[T.aG],"$ab")
if(b!=null)if(!C.a.ak(a,b)){b.a=a.length
C.a.h(a,b)}},
b5:function(a,b){var u,t,s,r,q,p,o=this,n="Distort"
if(o.a==null){u=H.k(a.fr.j(0,n),"$id9")
if(u==null){t=a.a
u=new A.d9(t,n)
u.aP(t,n)
u.b_(0,"uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n","precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n")
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"txt2DAttr")
u.ch=H.c(u.y.l(0,"projViewObjMat"),"$ia_")
u.cx=H.c(u.y.l(0,"colorTxt2DMat"),"$ibm")
u.cy=H.c(u.y.l(0,"bumpTxt2DMat"),"$ibm")
u.db=H.c(u.y.l(0,"colorTxt"),"$ia1")
u.dx=H.c(u.y.l(0,"bumpTxt"),"$ia1")
u.dy=H.c(u.y.l(0,"nullColorTxt"),"$iD")
u.fr=H.c(u.y.l(0,"nullBumpTxt"),"$iD")
u.fx=H.c(u.y.l(0,"bumpMat"),"$ia_")
a.aU(u)}o.a=u}if(b.e==null){t=b.d
s=$.ag()
r=$.av()
r=t.aV(new Z.bG(a.a),new Z.an(s.a|r.a))
r.a3($.ag()).e=o.a.z.c
r.a3($.av()).e=o.a.Q.c
b.e=r}q=H.d([],[T.aG])
o.M(q,o.b)
o.M(q,o.c)
for(p=0;p<q.length;++p)q[p].I(a)
t=o.a
t.I(a)
s=o.b
t.ab(t.db,t.dy,s)
s=o.c
t.ab(t.dx,t.fr,s)
s=a.gct()
r=t.ch
r.toString
r.a_(s.V(0,!0))
s=o.d
r=t.cx
r.toString
r.a_(s.V(0,!0))
s=o.e
r=t.cy
r.toString
r.a_(s.V(0,!0))
s=o.f
t=t.fx
t.toString
t.a_(s.V(0,!0))
t=b.e
if(t instanceof Z.bc){t.I(a)
t.a7(a)
t.a5(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.aX()
for(p=0;p<q.length;++p){t=q[p]
if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(3553,null)}}}}
O.ds.prototype={
gm:function(){var u=this.dy
return u==null?this.dy=D.G():u},
G:function(a){var u
H.k(a,"$iv")
u=this.dy
if(u!=null)u.A(a)},
Y:function(){return this.G(null)},
dc:function(a){H.k(a,"$iv")
this.a=null
this.G(a)},
hy:function(){return this.dc(null)},
fA:function(a,b){var u=V.ab
H.j(b,"$ie",[u],"$ae")
u=new D.bw([u])
u.b=!0
this.G(u)},
fC:function(a,b){var u=V.ab
H.j(b,"$ie",[u],"$ae")
u=new D.bx([u])
u.b=!0
this.G(u)},
cW:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.h.a6(a1.e.length+3,4)*4,a3=C.h.a6(a1.f.length+3,4)*4,a4=C.h.a6(a1.r.length+3,4)*4,a5=C.h.a6(a1.x.length+3,4)*4,a6=C.h.a6(a1.y.length+3,4)*4,a7=C.h.a6(a1.z.length+3,4)*4,a8=C.h.a6(a0.e.a.length+3,4)*4
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
e=a1===C.e||u===C.e||t===C.e||s===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.ag()
if(h){j=$.aL()
a=new Z.an(a.a|j.a)}if(g){j=$.aK()
a=new Z.an(a.a|j.a)}if(f){j=$.av()
a=new Z.an(a.a|j.a)}if(e){j=$.aM()
a=new Z.an(a.a|j.a)}if(c){j=$.bo()
a=new Z.an(a.a|j.a)}return new A.h_(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
M:function(a,b){H.j(a,"$ib",[T.aG],"$ab")},
a9:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ao(u,u.length,[H.x(u,0)]);u.B();){t=u.d
t.toString
s=$.il
if(s==null)s=$.il=new V.K(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cB(s)}}},
b5:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.cW()
u=H.k(a3.fr.j(0,a2.al),"$idt")
if(u==null){u=A.lQ(a2,a3.a)
a3.aU(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bk
a2=a4.e
if(!(a2 instanceof Z.bc))a2=a4.e=null
if(a2==null||!a2.d.q(0,s)){a2=t.r1
if(a2)a4.d.aj()
r=t.r2
if(r)a4.d.aK()
q=t.ry
if(q)a4.d.bj()
p=a4.d.aV(new Z.bG(a3.a),s)
p.a3($.ag()).e=a1.a.Q.c
if(a2)p.a3($.aL()).e=a1.a.cx.c
if(r)p.a3($.aK()).e=a1.a.ch.c
if(t.rx)p.a3($.av()).e=a1.a.cy.c
if(q)p.a3($.aM()).e=a1.a.db.c
if(t.x1)p.a3($.bo()).e=a1.a.dx.c
a4.e=p}a2=T.aG
o=H.d([],[a2])
a1.a.I(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.gZ(q)
r=r.dy
r.toString
r.a_(q.V(0,!0))}if(t.fy){r=a1.a
q=a3.gee()
r=r.fr
r.toString
r.a_(q.V(0,!0))}r=a1.a
q=a3.gct()
r=r.fy
r.toString
r.a_(q.V(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.a_(C.p.V(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.a_(C.p.V(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.a_(C.p.V(q,!0))}if(t.ap>0){n=a1.e.a.length
r=a1.a.k4
C.b.R(r.a,r.d,n)
for(r=[P.w],m=0;m<n;++m){q=a1.a
l=a1.e.a
if(m>=l.length)return H.h(l,m)
l=l[m]
q.toString
H.k(l,"$iab")
q=q.r1
if(m>=q.length)return H.h(q,m)
q=q[m]
k=new Float32Array(H.bX(H.j(l.V(0,!0),"$ib",r,"$ab")))
C.b.cC(q.a,q.d,!1,k)}}switch(t.a){case C.c:break
case C.i:r=a1.a
q=a1.f.f
r=r.r2
r.toString
l=q.a
j=q.b
q=q.c
C.b.t(r.a,r.d,l,j,q)
break
case C.f:a1.M(o,a1.f.d)
r=a1.a
q=a1.f.d
r.ab(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break
case C.e:a1.M(o,a1.f.e)
r=a1.a
q=a1.f.e
r.ae(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break}if(t.k2){switch(t.b){case C.c:break
case C.i:r=a1.a
q=a1.r.f
r=r.x2
r.toString
l=q.a
j=q.b
q=q.c
C.b.t(r.a,r.d,l,j,q)
break
case C.f:a1.M(o,a1.r.d)
r=a1.a
q=a1.r.d
r.ab(r.y1,r.ap,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break
case C.e:a1.M(o,a1.r.e)
r=a1.a
q=a1.r.e
r.ae(r.y2,r.ap,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break}switch(t.c){case C.c:break
case C.i:r=a1.a
q=a1.x.f
r=r.al
r.toString
l=q.a
j=q.b
q=q.c
C.b.t(r.a,r.d,l,j,q)
break
case C.f:a1.M(o,a1.x.d)
r=a1.a
q=a1.x.d
r.ab(r.bk,r.bl,q)
q=a1.a
r=a1.x.f
q=q.al
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break
case C.e:a1.M(o,a1.x.e)
r=a1.a
q=a1.x.e
r.ae(r.dA,r.bl,q)
q=a1.a
r=a1.x.f
q=q.al
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break}switch(t.d){case C.c:break
case C.i:r=a1.a
q=a1.y.f
r=r.bm
r.toString
l=q.a
j=q.b
q=q.c
C.b.t(r.a,r.d,l,j,q)
break
case C.f:a1.M(o,a1.y.d)
r=a1.a
q=a1.y.d
r.ab(r.dB,r.bn,q)
q=a1.a
r=a1.y.f
q=q.bm
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break
case C.e:a1.M(o,a1.y.e)
r=a1.a
q=a1.y.e
r.ae(r.dC,r.bn,q)
q=a1.a
r=a1.y.f
q=q.bm
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
break}switch(t.e){case C.c:break
case C.i:r=a1.a
q=a1.z.f
r=r.bo
r.toString
l=q.a
j=q.b
q=q.c
C.b.t(r.a,r.d,l,j,q)
q=a1.a
j=a1.z.ch
q=q.bq
C.b.K(q.a,q.d,j)
break
case C.f:a1.M(o,a1.z.d)
r=a1.a
q=a1.z.d
r.ab(r.dD,r.bp,q)
q=a1.a
r=a1.z.f
q=q.bo
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
r=a1.a
j=a1.z.ch
r=r.bq
C.b.K(r.a,r.d,j)
break
case C.e:a1.M(o,a1.z.e)
r=a1.a
q=a1.z.e
r.ae(r.dE,r.bp,q)
q=a1.a
r=a1.z.f
q=q.bo
q.toString
l=r.a
j=r.b
r=r.c
C.b.t(q.a,q.d,l,j,r)
r=a1.a
j=a1.z.ch
r=r.bq
C.b.K(r.a,r.d,j)
break}if(t.z>0){n=a1.dx.e.length
r=a1.a.dP
C.b.R(r.a,r.d,n)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
l=a1.a.cd
if(h>=l.length)return H.h(l,h)
e=l[h]
l=i.cB(f.a)
j=l.a
d=l.b
c=l.c
c=l.w(0,Math.sqrt(j*j+d*d+c*c))
d=e.b
j=c.a
l=c.b
c=c.c
C.b.t(d.a,d.d,j,l,c)
c=f.c
l=e.c
C.b.t(l.a,l.d,c.a,c.b,c.c);++h}}if(t.Q>0){n=a1.dx.f.length
r=a1.a.dQ
C.b.R(r.a,r.d,n)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
l=a1.a.ce
if(h>=l.length)return H.h(l,h)
e=l[h]
l=f.gb4(f)
j=e.b
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=i.b8(f.gb4(f))
j=e.c
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gao(f)
j=e.d
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gc2()
j=e.e
C.b.K(j.a,j.d,l)
l=f.gc3()
j=e.f
C.b.K(j.a,j.d,l)
l=f.gc4()
j=e.r
C.b.K(j.a,j.d,l);++h}}if(t.ch>0){n=a1.dx.r.length
r=a1.a.dR
C.b.R(r.a,r.d,n)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
l=a1.a.cf
if(h>=l.length)return H.h(l,h)
e=l[h]
l=f.gb4(f)
j=e.b
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gcb(f).jq()
j=e.c
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=i.b8(f.gb4(f))
j=e.d
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gao(f)
j=e.e
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gjp()
j=e.f
C.b.K(j.a,j.d,l)
l=f.gjo()
j=e.r
C.b.K(j.a,j.d,l)
l=f.gc2()
j=e.x
C.b.K(j.a,j.d,l)
l=f.gc3()
j=e.y
C.b.K(j.a,j.d,l)
l=f.gc4()
j=e.z
C.b.K(j.a,j.d,l);++h}}if(t.cx>0){n=a1.dx.x.length
r=a1.a.dS
C.b.R(r.a,r.d,n)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.x,q=r.length,l=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
j=a1.a.cg
if(h>=j.length)return H.h(j,h)
e=j[h]
j=f.gb6()
H.j(o,"$ib",l,"$ab")
if(!C.a.ak(o,j)){j.sdV(0,o.length)
C.a.h(o,j)}j=f.gcb(f)
d=e.d
C.b.t(d.a,d.d,j.a,j.b,j.c)
j=f.gji()
d=e.b
C.b.t(d.a,d.d,j.a,j.b,j.c)
j=f.gbB(f)
d=e.c
C.b.t(d.a,d.d,j.a,j.b,j.c)
j=i.cB(f.gcb(f))
d=j.a
c=j.b
b=j.c
b=j.w(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
j=b.b
b=b.c
C.b.t(c.a,c.d,d,j,b)
b=f.gao(f)
j=e.f
C.b.t(j.a,j.d,b.a,b.b,b.c)
b=f.gb6()
j=b.gdY(b)
if(!j){j=e.x
C.b.R(j.a,j.d,1)}else{j=e.r
d=b.d
c=j.a
j=j.d
if(!d)c.uniform1i(j,0)
else c.uniform1i(j,b.a)
j=e.x
C.b.R(j.a,j.d,0)}++h}}if(t.cy>0){n=a1.dx.y.length
r=a1.a.dT
C.b.R(r.a,r.d,n)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.y,q=r.length,l=[P.w],j=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
d=a1.a.ci
if(h>=d.length)return H.h(d,h)
e=d[h]
d=f.gb6()
H.j(o,"$ib",j,"$ab")
if(!C.a.ak(o,d)){d.sdV(0,o.length)
C.a.h(o,d)}a=i.v(0,f.gZ(f))
d=f.gZ(f)
c=$.cr
d=d.b8(c==null?$.cr=new V.a0(0,0,0):c)
c=e.b
C.b.t(c.a,c.d,d.a,d.b,d.c)
d=$.cr
d=a.b8(d==null?$.cr=new V.a0(0,0,0):d)
c=e.c
C.b.t(c.a,c.d,d.a,d.b,d.c)
d=a.cm(0)
c=e.d
k=new Float32Array(H.bX(H.j(new V.cl(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).V(0,!0),"$ib",l,"$ab")))
C.b.ed(c.a,c.d,!1,k)
c=f.gao(f)
d=e.e
C.b.t(d.a,d.d,c.a,c.b,c.c)
c=f.gb6()
d=c.gdY(c)
if(!d){d=e.r
C.b.R(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.b.R(d.a,d.d,0)}d=f.gc2()
c=e.x
C.b.K(c.a,c.d,d)
d=f.gc3()
c=e.y
C.b.K(c.a,c.d,d)
d=f.gc4()
c=e.z
C.b.K(c.a,c.d,d);++h}}if(t.db>0){n=a1.dx.z.length
r=a1.a.dU
C.b.R(r.a,r.d,n)
r=a3.db
i=r.gZ(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
l=a1.a.cj
if(h>=l.length)return H.h(l,h)
e=l[h]
l=f.gb6()
H.j(o,"$ib",a2,"$ab")
if(!C.a.ak(o,l)){l.sdV(0,o.length)
C.a.h(o,l)}l=f.gb4(f)
j=e.b
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gcb(f)
j=e.c
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gji()
j=e.d
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gbB(f)
j=e.e
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=i.b8(f.gb4(f))
j=e.f
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gb6()
j=l.gdY(l)
if(!j){l=e.x
C.b.R(l.a,l.d,1)}else{j=e.r
d=l.d
c=j.a
j=j.d
if(!d)c.uniform1i(j,0)
else c.uniform1i(j,l.a)
l=e.x
C.b.R(l.a,l.d,0)}l=f.gao(f)
j=e.y
C.b.t(j.a,j.d,l.a,l.b,l.c)
l=f.gjr()
j=e.z
C.b.K(j.a,j.d,l)
l=f.gjs()
j=e.Q
C.b.K(j.a,j.d,l)
l=f.gc2()
j=e.ch
C.b.K(j.a,j.d,l)
l=f.gc3()
j=e.cx
C.b.K(j.a,j.d,l)
l=f.gc4()
j=e.cy
C.b.K(j.a,j.d,l);++h}}}switch(t.f){case C.c:break
case C.i:break
case C.f:a1.M(o,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.ab(a2.dF,a2.br,r)
break
case C.e:a1.M(o,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.ae(a2.dG,a2.br,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.gZ(r).cm(0)}a2=a2.id
a2.toString
a2.a_(r.V(0,!0))}if(t.dy){a1.M(o,a1.ch)
a2=a1.a
r=a1.ch
a2.ae(a2.dH,a2.dI,r)
switch(t.r){case C.c:break
case C.i:a2=a1.a
r=a1.cx.f
a2=a2.bs
a2.toString
q=r.a
l=r.b
r=r.c
C.b.t(a2.a,a2.d,q,l,r)
break
case C.f:a1.M(o,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.ab(a2.dJ,a2.bt,r)
r=a1.a
a2=a1.cx.f
r=r.bs
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.b.t(r.a,r.d,q,l,a2)
break
case C.e:a1.M(o,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.ae(a2.dK,a2.bt,r)
r=a1.a
a2=a1.cx.f
r=r.bs
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.b.t(r.a,r.d,q,l,a2)
break}switch(t.x){case C.c:break
case C.i:a2=a1.a
r=a1.cy.f
a2=a2.bv
a2.toString
q=r.a
l=r.b
r=r.c
C.b.t(a2.a,a2.d,q,l,r)
r=a1.a
l=a1.cy.ch
r=r.bu
C.b.K(r.a,r.d,l)
break
case C.f:a1.M(o,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.ab(a2.dL,a2.bw,r)
r=a1.a
a2=a1.cy.f
r=r.bv
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.b.t(r.a,r.d,q,l,a2)
a2=a1.a
l=a1.cy.ch
a2=a2.bu
C.b.K(a2.a,a2.d,l)
break
case C.e:a1.M(o,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.ae(a2.dM,a2.bw,r)
r=a1.a
a2=a1.cy.f
r=r.bv
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.b.t(r.a,r.d,q,l,a2)
a2=a1.a
l=a1.cy.ch
a2=a2.bu
C.b.K(a2.a,a2.d,l)
break}}a2=t.y
r=a2!==C.c
if(r){switch(a2){case C.c:break
case C.i:a2=a1.a
q=a1.db.f
a2=a2.bx
C.b.K(a2.a,a2.d,q)
break
case C.f:a1.M(o,a1.db.d)
a2=a1.a
q=a1.db.d
a2.ab(a2.dN,a2.by,q)
q=a1.a
a2=a1.db.f
q=q.bx
C.b.K(q.a,q.d,a2)
break
case C.e:a1.M(o,a1.db.e)
a2=a1.a
q=a1.db.e
a2.ae(a2.dO,a2.by,q)
q=a1.a
a2=a1.db.f
q=q.bx
C.b.K(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(m=0;m<o.length;++m)o[m].I(a3)
a2=a4.e
a2.I(a3)
a2.a7(a3)
a2.a5(a3)
if(r)a3.a.disable(3042)
for(m=0;m<o.length;++m)o[m].a5(a3)
a2=a1.a
a2.toString
a3.a.useProgram(null)
a2.x.aX()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cW().al},
seQ:function(a){this.e=H.j(a,"$iT",[V.ab],"$aT")}}
O.fY.prototype={}
O.du.prototype={
aH:function(){}}
O.fZ.prototype={}
O.aX.prototype={
dg:function(a){var u,t,s=this
if(!J.L(s.f,a)){u=s.f
s.f=a
t=new D.z(s.b+".color",u,a,[V.Z])
t.b=!0
s.a.G(t)}},
aH:function(){this.ep()
this.dg(new V.Z(1,1,1))},
sao:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.i
t.aH()
u=t.a
u.a=null
u.G(null)}t.dg(b)}}
O.h0.prototype={
hB:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.M().a)){u.ch=a
t=new D.z(u.b+".refraction",t,a,[P.w])
t.b=!0
u.a.G(t)}},
aH:function(){this.bF()
this.hB(1)}}
O.h1.prototype={
bW:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.M().a)){u.ch=a
t=new D.z(u.b+".shininess",t,a,[P.w])
t.b=!0
u.a.G(t)}},
aH:function(){this.bF()
this.bW(100)}}
O.dy.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.G():u},
G:function(a){var u
H.k(a,"$iv")
u=this.r
if(u!=null)u.A(a)},
Y:function(){return this.G(null)},
de:function(a){},
df:function(a){var u,t=this,s=t.f
if(s!=a){if(s!=null)s.gm().F(0,t.gad())
u=t.f
t.f=a
if(a!=null)a.gm().h(0,t.gad())
s=new D.z("bumpyTextureCube",u,t.f,[T.cz])
s.b=!0
t.G(s)}},
M:function(a,b){H.j(a,"$ib",[T.aG],"$ab")
if(b!=null)if(!C.a.ak(a,b)){b.a=a.length
C.a.h(a,b)}},
a9:function(a,b){},
b5:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i="nullBumpTxt",h="varying vec2 txt2D;\n",g="varying vec3 txtCube;\n",f=j.a
if(f==null){u=A.kn(j.d)
f=u.e
t=H.k(a.fr.j(0,f),"$idz")
if(t==null){s=a.a
t=new A.dz(s,f)
t.aP(s,f)
t.z=u
f=u.c
r=f?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n"
q=u.d
r=(q?r+"uniform mat4 txtCubeMat;\n":r)+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
p=u.b
if(p)r+="attribute vec3 binmAttr;\n"
if(f)r+="attribute vec2 txt2DAttr;\n"
r=(q?r+"attribute vec3 txtCubeAttr;\n":r)+"\nvarying vec3 normalVec;\n"
if(p)r+="varying vec3 binormalVec;\n"
if(f)r+=h
r=(q?r+g:r)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(p)r+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
if(f)r+="   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
r=(q?r+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":r)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
p=p?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
if(f)p+=h
p=(q?p+g:p)+"\n"
o=u.a
switch(o){case C.c:break
case C.i:break
case C.f:p+="uniform sampler2D bumpTxt;\nuniform int nullBumpTxt;\n"
break
case C.e:p+="uniform samplerCube bumpTxt;\nuniform int nullBumpTxt;\n"
break}p+="\nvec3 normal()\n{\n"
if(o===C.c||o===C.i)p+="   return normalize(normalVec);\n"
else{p+="   if(nullBumpTxt > 0) return normalVec;\n"
p=(o===C.f?p+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":p+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"}p+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
t.b_(0,r.charCodeAt(0)==0?r:r,p.charCodeAt(0)==0?p:p)
t.Q=t.x.j(0,"posAttr")
t.cx=t.x.j(0,"normAttr")
t.ch=t.x.j(0,"binmAttr")
t.cy=t.x.j(0,"txt2DAttr")
t.db=t.x.j(0,"txtCubeAttr")
t.dx=H.c(t.y.l(0,"viewObjMat"),"$ia_")
t.dy=H.c(t.y.l(0,"projViewObjMat"),"$ia_")
if(f)t.fr=H.c(t.y.l(0,"txt2DMat"),"$ibm")
if(q)t.fx=H.c(t.y.l(0,"txtCubeMat"),"$ia_")
switch(o){case C.c:break
case C.i:break
case C.f:t.fy=H.c(t.y.l(0,"bumpTxt"),"$ia1")
t.id=H.c(t.y.l(0,i),"$iD")
break
case C.e:t.go=H.c(t.y.l(0,"bumpTxt"),"$iae")
t.id=H.c(t.y.l(0,i),"$iD")
break}a.aU(t)}f=j.a=t
b.e=null}u=f.z
n=u.f
f=b.e
if(!(f instanceof Z.bc))f=b.e=null
if(f==null||!f.d.q(0,n)){b.d.aj()
f=u.b
if(f)b.d.aK()
r=u.d
if(r)b.d.bj()
m=b.d.aV(new Z.bG(a.a),n)
m.a3($.ag()).e=j.a.Q.c
m.a3($.aL()).e=j.a.cx.c
if(f)m.a3($.aK()).e=j.a.ch.c
if(u.c)m.a3($.av()).e=j.a.cy.c
if(r)m.a3($.aM()).e=j.a.db.c
b.e=m}l=H.d([],[T.aG])
j.a.I(a)
f=j.a
r=a.gee()
f=f.dx
f.toString
f.a_(r.V(0,!0))
r=j.a
f=a.gct()
r=r.dy
r.toString
r.a_(f.V(0,!0))
if(u.c){f=j.a
r=j.b
f=f.fr
f.toString
f.a_(r.V(0,!0))}if(u.d){f=j.a
r=j.c
f=f.fx
f.toString
f.a_(r.V(0,!0))}switch(u.a){case C.c:break
case C.i:break
case C.f:j.M(l,j.e)
f=j.a.id
C.b.R(f.a,f.d,1)
break
case C.e:j.M(l,j.f)
f=j.a
r=j.f
q=f.go
f=f.id
if(r==null||r.d<6)C.b.R(f.a,f.d,1)
else{q.cF(r)
C.b.R(f.a,f.d,0)}break}for(k=0;k<l.length;++k)l[k].I(a)
f=b.e
f.I(a)
f.a7(a)
f.a5(a)
for(f=a.a,k=0;k<l.length;++k){r=l[k]
if(r.c){r.c=!1
f.activeTexture(33984+r.a)
f.bindTexture(34067,null)}}r=j.a
r.toString
f.useProgram(null)
r.x.aX()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return A.kn(this.d).e}}
O.dI.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.G():u},
G:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.A(a)},
Y:function(){return this.G(null)},
a9:function(a,b){},
b5:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.k(a.fr.j(0,n),"$idJ")
if(u==null){t=a.a
u=new A.dJ(t,n)
u.aP(t,n)
u.b_(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.c(u.y.j(0,"fov"),"$iV")
u.ch=H.c(u.y.j(0,"ratio"),"$iV")
u.cx=H.c(u.y.j(0,"boxClr"),"$iJ")
u.cy=H.c(u.y.j(0,"boxTxt"),"$iae")
u.db=H.c(u.y.j(0,"viewMat"),"$ia_")
a.aU(u)}o.a=u}if(b.e==null){t=b.d.aV(new Z.bG(a.a),$.ag())
t.a3($.ag()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.I(a)}t=a.d
s=a.c
r=o.a
r.I(a)
q=o.b
p=r.Q
C.b.K(p.a,p.d,q)
q=r.ch
C.b.K(q.a,q.d,t/s)
s=o.c
r.cy.cF(s)
s=o.d
t=r.cx
C.b.t(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gZ(s).cm(0)
r=r.db
r.toString
r.a_(s.V(0,!0))
t=b.e
if(t instanceof Z.bc){t.I(a)
t.a7(a)
t.a5(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.aX()
t=o.c
if(t!=null)t.a5(a)}}
O.bE.prototype={}
O.dP.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.G():u},
G:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.A(a)},
Y:function(){return this.G(null)},
fQ:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$ie",[O.aH],"$ae")
for(u=b.length,t=this.gad(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.bt()
o.saa(null)
o.saI(null)
o.c=null
o.d=0
p.f=o}H.m(t,s)
if(o.a==null)o.saa(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Y()},
fS:function(a,b){var u,t
H.j(b,"$ie",[O.aH],"$ae")
for(u=b.gU(b),t=this.gad();u.B();)u.gL(u).gm().F(0,t)
this.Y()},
sdm:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.z("blend",u,a,[A.bq])
u.b=!0
this.G(u)}},
a9:function(a,b){},
fd:function(a){a=C.h.a6(a+3,4)*4
if(a<=0)return 4
return a},
b5:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.fd(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.h.i(u.a)
s=H.k(a.fr.j(0,t),"$idQ")
if(s==null){s=A.m5(g,u,a.a)
a.aU(s)}h.b=s
u=s}if(b.e==null){u=b.d.aV(new Z.bG(a.a),$.ag())
t=u.a3($.ag())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.I(a)
u=T.aG
q=H.d([],[u])
for(t=[P.w],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.j(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.ak(q,r)){r.a=q.length
C.a.h(q,r)}r=h.b
m=n.a
r=r.cx
if(p>=r.length)return H.h(r,p)
r=r[p]
l=m==null||!m.d
k=r.a
r=r.d
if(l)k.uniform1i(r,0)
else k.uniform1i(r,m.a)
r=h.b
m=n.b
r=r.cy
if(p>=r.length)return H.h(r,p)
r=r[p]
if(m==null){m=$.h2
if(m==null){m=new V.ab(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.h2=m}}j=new Float32Array(H.bX(H.j(m.V(0,!0),"$ib",t,"$ab")))
C.b.cC(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cu
if(m==null){m=V.ct(0,0,1,1)
$.cu=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.h(m,p)
m=m[p]
C.b.bD(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.h(r,p)
r=r[p]
C.b.bD(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cu
if(m==null){m=V.ct(0,0,1,1)
$.cu=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.h(m,p)
m=m[p]
C.b.bD(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.h(r,p)
r=r[p]
C.b.bD(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.h(r,p)
r=r[p]
m=H.C(m)?1:0
C.b.R(r.a,r.d,m);++p}}u=h.b.Q
C.b.R(u.a,u.d,p)
u=h.b
t=h.a
u=u.ch
C.b.jh(u.a,u.d,t.a,t.b,t.c,t.d)
for(o=0;o<q.length;++o)q[o].I(a)
u=b.e
if(u instanceof Z.bc){u.I(a)
u.a7(a)
u.a5(a)}else b.e=null
u=h.b
u.toString
t=a.a
t.useProgram(null)
u.x.aX()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}},
sf3:function(a){this.c=H.j(a,"$iT",[O.aH],"$aT")}}
O.aH.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.G():u},
G:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.A(a)},
Y:function(){return this.G(null)}}
T.aG.prototype={}
T.dO.prototype={}
T.hV.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.G():u},
I:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.cz.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.G():u},
I:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
a5:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.hW.prototype={
dX:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.cz()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aG(u,k,r,34069,!1,!1)
t.aG(u,k,o,34070,!1,!1)
t.aG(u,k,q,34071,!1,!1)
t.aG(u,k,n,34072,!1,!1)
t.aG(u,k,p,34073,!1,!1)
t.aG(u,k,m,34074,!1,!1)
return u},
iN:function(a){return this.dX(a,".png")},
aG:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.n
W.a9(t,"load",H.m(new T.hX(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hz:function(a,b,c){var u,t,s,r
b=V.cX(b)
u=V.cX(a.width)
t=V.cX(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jw()
s.width=u
s.height=t
r=H.k(C.l.eh(s,"2d"),"$icb")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mx(r.getImageData(0,0,s.width,s.height))}}}
T.hX.prototype={
$1:function(a){var u=this,t=u.a,s=t.hz(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.ja(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cc()}++t.e},
$S:25}
V.f_.prototype={
aM:function(a,b){return!0},
i:function(a){return"all"},
$ibg:1}
V.bg.prototype={}
V.dr.prototype={
aM:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)if(u[s].aM(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saw:function(a){this.a=H.j(a,"$ib",[V.bg],"$ab")},
$ibg:1}
V.bi.prototype={
aM:function(a,b){return!this.eo(0,b)},
i:function(a){return"!["+this.cJ(0)+"]"}}
V.hz.prototype={
eu:function(a){var u,t
if(a.a.length<=0)throw H.i(P.q("May not create a SetMatcher with zero characters."))
u=new H.aV([P.y,P.a2])
for(t=new H.dp(a,a.gk(a),[H.aB(a,"u",0)]);t.B();)u.a8(0,t.d,!0)
this.shA(u)},
aM:function(a,b){return this.a.dv(0,b)},
i:function(a){var u=this.a
return P.jL(new H.dn(u,[H.x(u,0)]))},
shA:function(a){this.a=H.j(a,"$iP",[P.y,P.a2],"$aP")},
$ibg:1}
V.cw.prototype={
D:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cB(this.a.O(0,b))
r.saw(H.d([],[V.bg]))
r.c=!1
C.a.h(this.c,r)
return r},
iF:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.aM(0,a))return r}return},
i:function(a){return this.b},
shV:function(a){this.c=H.j(a,"$ib",[V.cB],"$ab")}}
V.dV.prototype={
i:function(a){var u=H.l9(this.b,"\n","\\n"),t=H.l9(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cA.prototype={
i:function(a){return this.b},
shv:function(a){var u=P.o
this.c=H.j(a,"$iP",[u,u],"$aP")}}
V.i_.prototype={
O:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cw(this,b)
u.shV(H.d([],[V.cB]))
u.d=null
this.a.a8(0,b,u)}return u},
b7:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cA(a)
u=P.o
t.shv(new H.aV([u,u]))
this.b.a8(0,a,t)}return t},
jg:function(a){var u,t,s,r,q,p,o,n,m=H.d([],[V.dV]),l=this.c,k=[P.y],j=H.d([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.j.bd(a,s)
q=l.iF(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jL(j)
throw H.i(P.q("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.d([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jL(j)
o=l.d
n=o.c.j(0,p)
t=new V.dV(n==null?o.b:n,p,s)}++s}}},
shL:function(a){this.a=H.j(a,"$iP",[P.o,V.cw],"$aP")},
shO:function(a){this.b=H.j(a,"$iP",[P.o,V.cA],"$aP")}}
V.cB.prototype={
i:function(a){return this.b.b+": "+this.cJ(0)}}
X.f8.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.G():u},
a2:function(a){var u=this.fr
if(u!=null)u.A(a)},
sai:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.z("width",u,b,[P.y])
u.b=!0
t.a2(u)}},
saf:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.z("height",u,b,[P.y])
u.b=!0
t.a2(u)}},
I:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.v()
h.sai(0,C.h.a0(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.v()
h.saf(0,C.h.a0(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.af(u.getParameter(3379))
p=V.cX(s)
o=V.cX(r)
q=V.cX(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.b.ea(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.ky(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.cc()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cc()
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
a.c=C.d.a0(s*h.a)
r=t.d
a.d=C.d.a0(r*h.b)
l=t.a
k=h.c
j=C.d.a0(l*k)
t=t.b
l=h.d
u.viewport(j,C.d.a0(t*l),C.d.a0(s*k),C.d.a0(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
a5:function(a){a.a.bindFramebuffer(36160,null)}}
X.bN.prototype={$ib_:1}
X.fF.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.G():u},
I:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.F(u)
q=C.d.a0(r*u)
r=s.b
if(typeof t!=="number")return H.F(t)
p=C.d.a0(r*t)
r=C.d.a0(s.c*u)
a.c=r
s=C.d.a0(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
a5:function(a){}}
X.fH.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.G():u},
I:function(a){var u
a.cy.bA(V.aY())
u=V.aY()
a.db.bA(u)},
a5:function(a){a.cy.aB()
a.db.aB()},
$ib_:1,
$ibN:1}
X.dB.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.G():u},
a2:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.A(a)},
eK:function(){return this.a2(null)},
sb1:function(a){var u,t,s=this
if(!J.L(s.b,a)){u=s.b
if(u!=null)u.gm().F(0,s.gcN())
t=s.b
s.b=a
if(a!=null)a.gm().h(0,s.gcN())
u=new D.z("mover",t,s.b,[U.ad])
u.b=!0
s.a2(u)}},
I:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.bh(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bA(k)
r=$.kr
if(r==null){r=V.kt()
q=V.kM()
p=$.kI
r=V.kk(r,q,p==null?$.kI=new V.K(0,0,-1):p)
$.kr=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aN(0,a,s)
if(t!=null)u=t.v(0,u)}a.db.bA(u)},
a5:function(a){a.cy.aB()
a.db.aB()},
$ib_:1,
$ibN:1}
X.cy.prototype={}
V.jr.prototype={
$1:function(a){var u
H.k(a,"$ib6")
u=C.d.ec(this.a.giH(),2)
if(u!=="0.00")P.k2(u+" fps")},
$S:38}
V.hD.prototype={
ev:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a9(q,"scroll",H.m(new V.hF(o),{func:1,ret:-1,args:[r]}),!1,r)},
dk:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.j(a,"$ib",[P.o],"$ab")
this.hE()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jg(C.a.iL(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
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
if(1>=m.length)return H.h(m,1)
l.href=H.S(m[1])
l.textContent=H.S(m[0])
t.appendChild(l)}else{k=P.mh(C.M,n,C.u,!1)
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
hE:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.i_()
t=P.o
u.shL(new H.aV([t,V.cw]))
u.shO(new H.aV([t,V.cA]))
u.c=null
u.c=u.O(0,q)
t=u.O(0,q).D(0,p)
s=V.ai(new H.a6("*"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,p).D(0,p)
s=new V.bi()
r=[V.bg]
s.saw(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a6("*"))
C.a.h(s.a,t)
t=u.O(0,p).D(0,"BoldEnd")
s=V.ai(new H.a6("*"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,q).D(0,o)
s=V.ai(new H.a6("_"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,o).D(0,o)
s=new V.bi()
s.saw(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a6("_"))
C.a.h(s.a,t)
t=u.O(0,o).D(0,n)
s=V.ai(new H.a6("_"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,q).D(0,m)
s=V.ai(new H.a6("`"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,m).D(0,m)
s=new V.bi()
s.saw(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a6("`"))
C.a.h(s.a,t)
t=u.O(0,m).D(0,"CodeEnd")
s=V.ai(new H.a6("`"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,q).D(0,l)
s=V.ai(new H.a6("["))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,l).D(0,k)
s=V.ai(new H.a6("|"))
C.a.h(t.a,s)
s=u.O(0,l).D(0,j)
t=V.ai(new H.a6("]"))
C.a.h(s.a,t)
s.c=!0
s=u.O(0,l).D(0,l)
t=new V.bi()
t.saw(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a6("|]"))
C.a.h(t.a,s)
s=u.O(0,k).D(0,j)
t=V.ai(new H.a6("]"))
C.a.h(s.a,t)
s.c=!0
s=u.O(0,k).D(0,k)
t=new V.bi()
t.saw(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a6("|]"))
C.a.h(t.a,s)
C.a.h(u.O(0,q).D(0,i).a,new V.f_())
s=u.O(0,i).D(0,i)
t=new V.bi()
t.saw(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a6("*_`["))
C.a.h(t.a,s)
s=u.O(0,"BoldEnd")
s.d=s.a.b7(p)
s=u.O(0,n)
s.d=s.a.b7(o)
s=u.O(0,"CodeEnd")
s.d=s.a.b7(m)
s=u.O(0,j)
s.d=s.a.b7("Link")
s=u.O(0,i)
s.d=s.a.b7(i)
this.b=u}}
V.hF.prototype={
$1:function(a){P.kB(C.o,new V.hE(this.a))},
$S:25}
V.hE.prototype={
$0:function(){var u=C.d.a0(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:1};(function aliases(){var u=J.a.prototype
u.em=u.i
u=J.dk.prototype
u.en=u.i
u=O.du.prototype
u.ep=u.aH
u=O.aX.prototype
u.bF=u.aH
u=V.dr.prototype
u.eo=u.aM
u.cJ=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"mr","ma",11)
u(P,"ms","mb",11)
u(P,"mt","mc",11)
t(P,"kZ","mp",3)
var n
s(n=E.ak.prototype,"ge5",0,0,null,["$1","$0"],["e6","iW"],0,0)
s(n,"ge3",0,0,null,["$1","$0"],["e4","iV"],0,0)
s(n,"ge1",0,0,null,["$1","$0"],["e2","iS"],0,0)
r(n,"giQ","iR",7)
r(n,"giT","iU",7)
s(n=E.dU.prototype,"gcK",0,0,null,["$1","$0"],["cM","cL"],0,0)
q(n,"gj6","e8",3)
p(n=X.e1.prototype,"gfT","fU",10)
p(n,"gfD","fE",10)
p(n,"gfJ","fK",4)
p(n,"gfX","fY",17)
p(n,"gfV","fW",17)
p(n,"gh0","h1",4)
p(n,"gh4","h5",4)
p(n,"gfN","fO",4)
p(n,"gh2","h3",4)
p(n,"gfL","fM",4)
p(n,"gh6","h7",33)
p(n,"gh8","h9",10)
p(n,"gho","hp",8)
p(n,"ghk","hl",8)
p(n,"ghm","hn",8)
s(D.br.prototype,"gey",0,0,null,["$1","$0"],["at","ez"],0,0)
s(n=D.dm.prototype,"gd5",0,0,null,["$1","$0"],["d6","fZ"],0,0)
p(n,"gha","hb",34)
r(n,"gfv","fw",18)
r(n,"ghe","hf",18)
o(V.W.prototype,"gk","co",19)
o(V.K.prototype,"gk","co",19)
s(n=U.cj.prototype,"gbc",0,0,null,["$1","$0"],["T","am"],0,0)
r(n,"geA","eB",20)
r(n,"ghc","hd",20)
s(n=U.e2.prototype,"gbc",0,0,null,["$1","$0"],["T","am"],0,0)
p(n,"gfm","fn",2)
p(n,"gfo","fp",2)
p(n,"gfq","fs",2)
p(n,"gfi","fj",2)
p(n,"gfk","fl",2)
p(n,"ghT","hU",2)
p(n,"ghR","hS",2)
p(n,"ghP","hQ",2)
p(U.e3.prototype,"gft","fu",2)
s(n=M.d4.prototype,"gW",0,0,null,["$1","$0"],["X","aQ"],0,0)
r(n,"ghg","hh",21)
r(n,"ghi","hj",21)
s(M.d7.prototype,"gW",0,0,null,["$1","$0"],["X","aQ"],0,0)
s(n=M.dd.prototype,"gW",0,0,null,["$1","$0"],["X","aQ"],0,0)
r(n,"gfF","fG",7)
r(n,"gfH","fI",7)
s(n=O.ds.prototype,"gad",0,0,null,["$1","$0"],["G","Y"],0,0)
s(n,"ghx",0,0,null,["$1","$0"],["dc","hy"],0,0)
r(n,"gfz","fA",23)
r(n,"gfB","fC",23)
s(O.dy.prototype,"gad",0,0,null,["$1","$0"],["G","Y"],0,0)
s(O.dI.prototype,"gad",0,0,null,["$1","$0"],["G","Y"],0,0)
s(n=O.dP.prototype,"gad",0,0,null,["$1","$0"],["G","Y"],0,0)
r(n,"gfP","fQ",24)
r(n,"gfR","fS",24)
s(O.aH.prototype,"gad",0,0,null,["$1","$0"],["G","Y"],0,0)
s(X.dB.prototype,"gcN",0,0,null,["$1","$0"],["a2","eK"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.jF,J.a,J.ao,P.ek,P.e,H.dp,P.aU,H.bQ,H.e0,H.i4,P.bs,H.cc,H.eB,P.ah,H.fP,H.fQ,H.fK,P.eH,P.ba,P.az,P.e5,P.hN,P.cx,P.hO,P.b6,P.aj,P.jb,P.j5,P.cL,P.j_,P.u,P.cd,P.ja,P.a2,P.ax,P.aa,P.aR,P.hl,P.dL,P.ed,P.fE,P.b,P.P,P.N,P.aq,P.o,P.bD,W.fh,W.A,W.df,P.eM,P.j0,O.T,O.cm,E.f9,E.ak,E.hr,E.dU,Z.e4,Z.bG,Z.bc,Z.bv,Z.an,D.fc,D.bt,D.v,X.d3,X.dl,X.fM,X.fT,X.as,X.h9,X.i0,X.e1,D.br,D.a4,D.dC,D.dK,D.dR,D.dS,D.dT,V.Z,V.a3,V.fu,V.cl,V.ab,V.a5,V.a0,V.aD,V.bC,V.W,V.K,U.e2,U.e3,M.d7,M.dd,M.at,A.d_,A.f3,A.h_,A.cC,A.cF,A.cD,A.cG,A.cE,A.cH,A.hh,A.bP,A.bq,A.dX,A.ic,F.a8,F.fx,F.bf,F.fO,F.bB,F.dH,F.hA,F.hB,F.hC,F.am,F.io,F.ip,F.is,F.iu,F.iv,F.iw,O.bE,O.du,O.aH,T.hW,V.f_,V.bg,V.dr,V.hz,V.cw,V.dV,V.cA,V.i_,X.cy,X.bN,X.fH,X.dB,V.hD])
s(J.a,[J.fJ,J.dj,J.dk,J.aC,J.by,J.bz,H.cp,W.f,W.eZ,W.d0,W.cb,W.aP,W.aQ,W.Q,W.e7,W.fl,W.fn,W.e9,W.dc,W.eb,W.fp,W.n,W.ee,W.aT,W.fG,W.eg,W.bu,W.fS,W.h3,W.el,W.em,W.aZ,W.en,W.eq,W.b0,W.eu,W.ew,W.b3,W.ex,W.b4,W.eC,W.aE,W.eF,W.hZ,W.b7,W.eI,W.i2,W.ii,W.eN,W.eP,W.eR,W.eT,W.eV,P.be,P.ei,P.bj,P.es,P.hp,P.eD,P.bl,P.eK,P.f4,P.e6,P.d1,P.dg,P.dD,P.dF,P.bV,P.dG,P.dN,P.dZ,P.ez])
s(J.dk,[J.hm,J.bW,J.bd])
t(J.jE,J.aC)
s(J.by,[J.di,J.dh])
t(P.fR,P.ek)
s(P.fR,[H.e_,W.iI,W.iH,P.fA])
t(H.a6,H.e_)
s(P.e,[H.fs,H.fW,H.iA])
s(P.aU,[H.fX,H.iB])
s(P.bs,[H.hi,H.fL,H.ig,H.i6,H.fb,H.hx,P.f2,P.dA,P.aN,P.ih,P.ie,P.dM,P.ff,P.fk])
s(H.cc,[H.jt,H.hS,H.jl,H.jm,H.jn,P.iE,P.iD,P.iF,P.iG,P.j9,P.j8,P.iN,P.iR,P.iO,P.iP,P.iQ,P.iU,P.iV,P.iT,P.iS,P.hP,P.hQ,P.jf,P.j3,P.j2,P.j4,P.fV,P.fq,P.fr,W.h5,W.h7,W.hw,W.hM,W.iM,P.jh,P.fB,P.fC,P.f6,E.hs,E.ht,E.hu,E.hY,D.fv,D.fw,F.jc,F.js,F.ji,F.iy,F.ix,F.iq,F.ir,T.hX,V.jr,V.hF,V.hE])
s(H.hS,[H.hK,H.c9])
t(H.iC,P.f2)
t(P.fU,P.ah)
t(H.aV,P.fU)
t(H.dn,H.fs)
t(H.dv,H.cp)
s(H.dv,[H.cM,H.cO])
t(H.cN,H.cM)
t(H.co,H.cN)
t(H.cP,H.cO)
t(H.dw,H.cP)
s(H.dw,[H.ha,H.hb,H.hc,H.hd,H.he,H.dx,H.hf])
t(P.j1,P.jb)
t(P.iZ,P.j5)
t(P.d6,P.hO)
t(P.ft,P.cd)
t(P.ij,P.ft)
t(P.ik,P.d6)
s(P.aa,[P.w,P.y])
s(P.aN,[P.bU,P.fI])
s(W.f,[W.I,W.fz,W.b2,W.cQ,W.b5,W.aF,W.cS,W.iz,W.cJ,P.f7,P.bM])
s(W.I,[W.a7,W.bp])
s(W.a7,[W.r,P.p])
s(W.r,[W.f0,W.f1,W.bO,W.da,W.fD,W.ck,W.hy])
s(W.aP,[W.cf,W.fi,W.fj])
t(W.fg,W.aQ)
t(W.cg,W.e7)
t(W.ea,W.e9)
t(W.db,W.ea)
t(W.ec,W.eb)
t(W.fo,W.ec)
t(W.aS,W.d0)
t(W.ef,W.ee)
t(W.fy,W.ef)
t(W.eh,W.eg)
t(W.bR,W.eh)
t(W.bF,W.n)
s(W.bF,[W.aW,W.ac,W.aI])
t(W.h4,W.el)
t(W.h6,W.em)
t(W.eo,W.en)
t(W.h8,W.eo)
t(W.er,W.eq)
t(W.cq,W.er)
t(W.ev,W.eu)
t(W.hn,W.ev)
t(W.hv,W.ew)
t(W.cR,W.cQ)
t(W.hH,W.cR)
t(W.ey,W.ex)
t(W.hI,W.ey)
t(W.hL,W.eC)
t(W.eG,W.eF)
t(W.hT,W.eG)
t(W.cT,W.cS)
t(W.hU,W.cT)
t(W.eJ,W.eI)
t(W.i1,W.eJ)
t(W.b9,W.ac)
t(W.eO,W.eN)
t(W.iJ,W.eO)
t(W.e8,W.dc)
t(W.eQ,W.eP)
t(W.iW,W.eQ)
t(W.eS,W.eR)
t(W.ep,W.eS)
t(W.eU,W.eT)
t(W.j6,W.eU)
t(W.eW,W.eV)
t(W.j7,W.eW)
t(W.iK,P.hN)
t(W.jP,W.iK)
t(W.iL,P.cx)
t(P.ap,P.j0)
t(P.ej,P.ei)
t(P.fN,P.ej)
t(P.et,P.es)
t(P.hj,P.et)
t(P.eE,P.eD)
t(P.hR,P.eE)
t(P.eL,P.eK)
t(P.i3,P.eL)
t(P.f5,P.e6)
t(P.hk,P.bM)
t(P.eA,P.ez)
t(P.hJ,P.eA)
s(E.f9,[Z.d2,A.cv,T.aG])
s(D.v,[D.bw,D.bx,D.z,X.ho])
s(X.ho,[X.dq,X.bA,X.cn,X.dW])
s(O.T,[D.dm,U.cj,M.d4])
s(D.fc,[U.fe,U.ad])
t(U.d5,U.ad)
s(A.cv,[A.d9,A.dt,A.dz,A.dJ,A.dQ])
s(A.dX,[A.D,A.i9,A.ia,A.ib,A.i8,A.V,A.au,A.J,A.dY,A.id,A.bm,A.a_,A.a1,A.ae])
t(F.hG,F.fx)
t(F.i7,F.fO)
t(F.it,F.iu)
t(F.hg,F.iv)
s(O.bE,[O.fm,O.ds,O.dy,O.dI,O.dP])
s(O.du,[O.fY,O.fZ,O.aX])
s(O.aX,[O.h0,O.h1])
s(T.aG,[T.dO,T.cz])
t(T.hV,T.dO)
s(V.dr,[V.bi,V.cB])
s(X.cy,[X.f8,X.fF])
u(H.e_,H.e0)
u(H.cM,P.u)
u(H.cN,H.bQ)
u(H.cO,P.u)
u(H.cP,H.bQ)
u(P.ek,P.u)
u(W.e7,W.fh)
u(W.e9,P.u)
u(W.ea,W.A)
u(W.eb,P.u)
u(W.ec,W.A)
u(W.ee,P.u)
u(W.ef,W.A)
u(W.eg,P.u)
u(W.eh,W.A)
u(W.el,P.ah)
u(W.em,P.ah)
u(W.en,P.u)
u(W.eo,W.A)
u(W.eq,P.u)
u(W.er,W.A)
u(W.eu,P.u)
u(W.ev,W.A)
u(W.ew,P.ah)
u(W.cQ,P.u)
u(W.cR,W.A)
u(W.ex,P.u)
u(W.ey,W.A)
u(W.eC,P.ah)
u(W.eF,P.u)
u(W.eG,W.A)
u(W.cS,P.u)
u(W.cT,W.A)
u(W.eI,P.u)
u(W.eJ,W.A)
u(W.eN,P.u)
u(W.eO,W.A)
u(W.eP,P.u)
u(W.eQ,W.A)
u(W.eR,P.u)
u(W.eS,W.A)
u(W.eT,P.u)
u(W.eU,W.A)
u(W.eV,P.u)
u(W.eW,W.A)
u(P.ei,P.u)
u(P.ej,W.A)
u(P.es,P.u)
u(P.et,W.A)
u(P.eD,P.u)
u(P.eE,W.A)
u(P.eK,P.u)
u(P.eL,W.A)
u(P.e6,P.ah)
u(P.ez,P.u)
u(P.eA,W.A)})();(function constants(){var u=hunkHelpers.makeConstList
C.l=W.bO.prototype
C.J=J.a.prototype
C.a=J.aC.prototype
C.K=J.dh.prototype
C.h=J.di.prototype
C.p=J.dj.prototype
C.d=J.by.prototype
C.j=J.bz.prototype
C.L=J.bd.prototype
C.N=W.cq.prototype
C.v=J.hm.prototype
C.b=P.bV.prototype
C.q=J.bW.prototype
C.w=W.b9.prototype
C.x=W.cJ.prototype
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=function() {
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
C.D=function(getTagFallback) {
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
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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
C.C=function(hooks) {
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
C.B=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.E=new P.hl()
C.u=new P.ij()
C.F=new P.ik()
C.k=new P.j1()
C.m=new A.bq(0,"ColorBlendType.Overwrite")
C.G=new A.bq(1,"ColorBlendType.Additive")
C.H=new A.bq(2,"ColorBlendType.Average")
C.n=new A.bq(3,"ColorBlendType.AlphaBlend")
C.c=new A.bP(0,"ColorSourceType.None")
C.i=new A.bP(1,"ColorSourceType.Solid")
C.f=new A.bP(2,"ColorSourceType.Texture2D")
C.e=new A.bP(3,"ColorSourceType.TextureCube")
C.o=new P.aR(0)
C.I=new P.aR(5e6)
C.M=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])})()
var v={mangledGlobalNames:{y:"int",w:"double",aa:"num",o:"String",a2:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:P.N},{func:1,ret:-1,args:[D.v]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:P.N,args:[F.a8]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.y,[P.e,E.ak]]},{func:1,ret:-1,args:[W.aI]},{func:1,ret:P.N,args:[D.v]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.o,args:[P.y]},{func:1,ret:P.N,args:[,]},{func:1,args:[,]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[P.y,[P.e,D.a4]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.y,[P.e,U.ad]]},{func:1,ret:-1,args:[P.y,[P.e,M.at]]},{func:1,ret:P.N,args:[F.am,P.w,P.w]},{func:1,ret:-1,args:[P.y,[P.e,V.ab]]},{func:1,ret:-1,args:[P.y,[P.e,O.aH]]},{func:1,ret:P.N,args:[W.n]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.a2,args:[W.I]},{func:1,ret:W.a7,args:[W.I]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,args:[,P.o]},{func:1,args:[W.n]},{func:1,args:[P.o]},{func:1,ret:-1,args:[W.b9]},{func:1,ret:P.a2,args:[[P.e,D.a4]]},{func:1,ret:P.N,args:[,],opt:[P.aq]},{func:1,ret:V.a0,args:[P.w]},{func:1,ret:[P.az,,],args:[,]},{func:1,ret:P.N,args:[P.b6]},{func:1,ret:P.N,args:[P.aa]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aO=0
$.ca=null
$.k8=null
$.jR=!1
$.l2=null
$.kX=null
$.l7=null
$.jj=null
$.jo=null
$.k_=null
$.bY=null
$.cV=null
$.cW=null
$.jS=!1
$.X=C.k
$.ar=[]
$.kj=null
$.h2=null
$.ks=null
$.cr=null
$.cu=null
$.kH=null
$.kL=null
$.kJ=null
$.kK=null
$.il=null
$.kI=null
$.kr=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n4","ld",function(){return H.l1("_$dart_dartClosure")})
u($,"n5","k3",function(){return H.l1("_$dart_js")})
u($,"n8","le",function(){return H.b8(H.i5({
toString:function(){return"$receiver$"}}))})
u($,"n9","lf",function(){return H.b8(H.i5({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"na","lg",function(){return H.b8(H.i5(null))})
u($,"nb","lh",function(){return H.b8(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ne","lk",function(){return H.b8(H.i5(void 0))})
u($,"nf","ll",function(){return H.b8(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nd","lj",function(){return H.b8(H.kD(null))})
u($,"nc","li",function(){return H.b8(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nh","ln",function(){return H.b8(H.kD(void 0))})
u($,"ng","lm",function(){return H.b8(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nx","k4",function(){return P.m9()})
u($,"ny","lr",function(){return P.m0("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nq","lq",function(){return Z.ay(0)})
u($,"nk","lo",function(){return Z.ay(511)})
u($,"ns","ag",function(){return Z.ay(1)})
u($,"nr","aL",function(){return Z.ay(2)})
u($,"nm","aK",function(){return Z.ay(4)})
u($,"nt","av",function(){return Z.ay(8)})
u($,"nu","aM",function(){return Z.ay(16)})
u($,"nn","cY",function(){return Z.ay(32)})
u($,"no","cZ",function(){return Z.ay(64)})
u($,"np","lp",function(){return Z.ay(96)})
u($,"nv","c6",function(){return Z.ay(128)})
u($,"nl","bo",function(){return Z.ay(256)})
u($,"n3","lc",function(){return new V.fu(1e-9)})
u($,"n2","M",function(){return $.lc()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cp,ArrayBufferView:H.cp,Float32Array:H.co,Float64Array:H.co,Int16Array:H.ha,Int32Array:H.hb,Int8Array:H.hc,Uint16Array:H.hd,Uint32Array:H.he,Uint8ClampedArray:H.dx,CanvasPixelArray:H.dx,Uint8Array:H.hf,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLBodyElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableCellElement:W.r,HTMLTableDataCellElement:W.r,HTMLTableHeaderCellElement:W.r,HTMLTableColElement:W.r,HTMLTableElement:W.r,HTMLTableRowElement:W.r,HTMLTableSectionElement:W.r,HTMLTemplateElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.eZ,HTMLAnchorElement:W.f0,HTMLAreaElement:W.f1,Blob:W.d0,HTMLCanvasElement:W.bO,CanvasRenderingContext2D:W.cb,CDATASection:W.bp,CharacterData:W.bp,Comment:W.bp,ProcessingInstruction:W.bp,Text:W.bp,CSSNumericValue:W.cf,CSSUnitValue:W.cf,CSSPerspective:W.fg,CSSCharsetRule:W.Q,CSSConditionRule:W.Q,CSSFontFaceRule:W.Q,CSSGroupingRule:W.Q,CSSImportRule:W.Q,CSSKeyframeRule:W.Q,MozCSSKeyframeRule:W.Q,WebKitCSSKeyframeRule:W.Q,CSSKeyframesRule:W.Q,MozCSSKeyframesRule:W.Q,WebKitCSSKeyframesRule:W.Q,CSSMediaRule:W.Q,CSSNamespaceRule:W.Q,CSSPageRule:W.Q,CSSRule:W.Q,CSSStyleRule:W.Q,CSSSupportsRule:W.Q,CSSViewportRule:W.Q,CSSStyleDeclaration:W.cg,MSStyleCSSProperties:W.cg,CSS2Properties:W.cg,CSSImageValue:W.aP,CSSKeywordValue:W.aP,CSSPositionValue:W.aP,CSSResourceValue:W.aP,CSSURLImageValue:W.aP,CSSStyleValue:W.aP,CSSMatrixComponent:W.aQ,CSSRotation:W.aQ,CSSScale:W.aQ,CSSSkew:W.aQ,CSSTranslation:W.aQ,CSSTransformComponent:W.aQ,CSSTransformValue:W.fi,CSSUnparsedValue:W.fj,DataTransferItemList:W.fl,HTMLDivElement:W.da,DOMException:W.fn,ClientRectList:W.db,DOMRectList:W.db,DOMRectReadOnly:W.dc,DOMStringList:W.fo,DOMTokenList:W.fp,Element:W.a7,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aS,FileList:W.fy,FileWriter:W.fz,HTMLFormElement:W.fD,Gamepad:W.aT,History:W.fG,HTMLCollection:W.bR,HTMLFormControlsCollection:W.bR,HTMLOptionsCollection:W.bR,ImageData:W.bu,HTMLImageElement:W.ck,KeyboardEvent:W.aW,Location:W.fS,MediaList:W.h3,MIDIInputMap:W.h4,MIDIOutputMap:W.h6,MimeType:W.aZ,MimeTypeArray:W.h8,PointerEvent:W.ac,MouseEvent:W.ac,DragEvent:W.ac,Document:W.I,DocumentFragment:W.I,HTMLDocument:W.I,ShadowRoot:W.I,XMLDocument:W.I,Attr:W.I,DocumentType:W.I,Node:W.I,NodeList:W.cq,RadioNodeList:W.cq,Plugin:W.b0,PluginArray:W.hn,RTCStatsReport:W.hv,HTMLSelectElement:W.hy,SourceBuffer:W.b2,SourceBufferList:W.hH,SpeechGrammar:W.b3,SpeechGrammarList:W.hI,SpeechRecognitionResult:W.b4,Storage:W.hL,CSSStyleSheet:W.aE,StyleSheet:W.aE,TextTrack:W.b5,TextTrackCue:W.aF,VTTCue:W.aF,TextTrackCueList:W.hT,TextTrackList:W.hU,TimeRanges:W.hZ,Touch:W.b7,TouchEvent:W.aI,TouchList:W.i1,TrackDefaultList:W.i2,CompositionEvent:W.bF,FocusEvent:W.bF,TextEvent:W.bF,UIEvent:W.bF,URL:W.ii,VideoTrackList:W.iz,WheelEvent:W.b9,Window:W.cJ,DOMWindow:W.cJ,CSSRuleList:W.iJ,ClientRect:W.e8,DOMRect:W.e8,GamepadList:W.iW,NamedNodeMap:W.ep,MozNamedAttrMap:W.ep,SpeechRecognitionResultList:W.j6,StyleSheetList:W.j7,SVGLength:P.be,SVGLengthList:P.fN,SVGNumber:P.bj,SVGNumberList:P.hj,SVGPointList:P.hp,SVGStringList:P.hR,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.bl,SVGTransformList:P.i3,AudioBuffer:P.f4,AudioParamMap:P.f5,AudioTrackList:P.f7,AudioContext:P.bM,webkitAudioContext:P.bM,BaseAudioContext:P.bM,OfflineAudioContext:P.hk,WebGLBuffer:P.d1,WebGLFramebuffer:P.dg,WebGLProgram:P.dD,WebGLRenderbuffer:P.dF,WebGL2RenderingContext:P.bV,WebGLShader:P.dG,WebGLTexture:P.dN,WebGLUniformLocation:P.dZ,SQLResultSetRowList:P.hJ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dv.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.dw.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(S.l4,[])
else S.l4([])})})()
//# sourceMappingURL=test.dart.js.map
