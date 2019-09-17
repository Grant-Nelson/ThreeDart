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
a[c]=function(){a[c]=function(){H.ll(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iw(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
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
if(w[u][a])return w[u][a]}}var C={},H={il:function il(){},
es:function(){return new P.bs("No element")},
kc:function(){return new P.bs("Too many elements")},
l:function l(a){this.a=a},
e5:function e5(){},
cb:function cb(){},
bj:function bj(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
eK:function eK(a,b){this.a=null
this.b=a
this.c=b},
eL:function eL(a,b,c){this.a=a
this.b=b
this.$ti=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.$ti=c},
ho:function ho(a,b){this.a=a
this.b=b},
c_:function c_(){},
h6:function h6(){},
cB:function cB(){},
dC:function(a){var u,t=H.ln(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
l4:function(a){return v.types[a]},
lb:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.G(a).$ip},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.U(a)
if(typeof u!=="string")throw H.f(H.bK(a))
return u},
bp:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bq:function(a){return H.kh(a)+H.js(H.bL(a),0,null)},
kh:function(a){var u,t,s,r,q,p,o,n=J.G(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.G||!!n.$ib_){r=C.m(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.dC(t.length>1&&C.b.a8(t,0)===36?C.b.aB(t,1):t)},
j5:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kp:function(a){var u,t,s,r=H.b([],[P.B])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bK(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aq(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.bK(s))}return H.j5(r)},
j6:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bK(s))
if(s<0)throw H.f(H.bK(s))
if(s>65535)return H.kp(a)}return H.j5(a)},
io:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aq(u,10))>>>0,56320|u&1023)}throw H.f(P.a2(a,0,1114111,null,null))},
aV:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ko:function(a){var u=H.aV(a).getFullYear()+0
return u},
km:function(a){var u=H.aV(a).getMonth()+1
return u},
ki:function(a){var u=H.aV(a).getDate()+0
return u},
kj:function(a){var u=H.aV(a).getHours()+0
return u},
kl:function(a){var u=H.aV(a).getMinutes()+0
return u},
kn:function(a){var u=H.aV(a).getSeconds()+0
return u},
kk:function(a){var u=H.aV(a).getMilliseconds()+0
return u},
aH:function(a){throw H.f(H.bK(a))},
e:function(a,b){if(a==null)J.aJ(a)
throw H.f(H.dA(a,b))},
dA:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.V(!0,b,s,null)
u=J.aJ(a)
if(!(b<0)){if(typeof u!=="number")return H.aH(u)
t=b>=u}else t=!0
if(t)return P.v(b,a,s,null,u)
return P.cm(b,s)},
kY:function(a,b,c){var u="Invalid value"
if(a>c)return new P.aW(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.aW(a,c,!0,b,"end",u)
return new P.V(!0,b,"end",null)},
bK:function(a){return new P.V(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.ci()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jD})
u.name=""}else u.toString=H.jD
return u},
jD:function(){return J.U(this.dartException)},
T:function(a){throw H.f(a)},
q:function(a){throw H.f(P.al(a))},
a4:function(a){var u,t,s,r,q,p
a=H.jC(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fP(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fQ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jf:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
j1:function(a,b){return new H.f2(a,b==null?null:b.method)},
im:function(a,b){var u=b==null,t=u?null:b.method
return new H.ey(a,t,u?null:b.receiver)},
ai:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ia(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aq(t,16)&8191)===10)switch(s){case 438:return f.$1(H.im(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.j1(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.jG()
q=$.jH()
p=$.jI()
o=$.jJ()
n=$.jM()
m=$.jN()
l=$.jL()
$.jK()
k=$.jP()
j=$.jO()
i=r.R(u)
if(i!=null)return f.$1(H.im(u,i))
else{i=q.R(u)
if(i!=null){i.method="call"
return f.$1(H.im(u,i))}else{i=p.R(u)
if(i==null){i=o.R(u)
if(i==null){i=n.R(u)
if(i==null){i=m.R(u)
if(i==null){i=l.R(u)
if(i==null){i=o.R(u)
if(i==null){i=k.R(u)
if(i==null){i=j.R(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.j1(u,i))}}return f.$1(new H.h5(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cq()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.V(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cq()
return a},
iB:function(a){var u
if(a==null)return new H.dd(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dd(a)},
l1:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.S(0,a[u],a[t])}return b},
la:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.H("Unsupported number of arguments for wrapped closure"))},
b2:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.la)
a.$identity=u
return u},
k5:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.fw().constructor.prototype):Object.create(new H.ba(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.W
if(typeof t!=="number")return t.M()
$.W=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.iQ(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.k1(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.iQ(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
k1:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.l4,a)
if(typeof a=="function")if(b)return a
else{u=c?H.iO:H.ic
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
k2:function(a,b,c,d){var u=H.ic
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iQ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.k4(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.k2(t,!r,u,b)
if(t===0){r=$.W
if(typeof r!=="number")return r.M()
$.W=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bb
return new Function(r+H.d(q==null?$.bb=H.dM("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.W
if(typeof r!=="number")return r.M()
$.W=r+1
o+=r
r="return function("+o+"){return this."
q=$.bb
return new Function(r+H.d(q==null?$.bb=H.dM("self"):q)+"."+H.d(u)+"("+o+");}")()},
k3:function(a,b,c,d){var u=H.ic,t=H.iO
switch(b?-1:a){case 0:throw H.f(H.kt("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
k4:function(a,b){var u,t,s,r,q,p,o,n=$.bb
if(n==null)n=$.bb=H.dM("self")
u=$.iN
if(u==null)u=$.iN=H.dM("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.k3(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.W
if(typeof u!=="number")return u.M()
$.W=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.W
if(typeof u!=="number")return u.M()
$.W=u+1
return new Function(n+u+"}")()},
iw:function(a,b,c,d,e,f,g){return H.k5(a,b,c,d,!!e,!!f,g)},
ic:function(a){return a.a},
iO:function(a){return a.c},
dM:function(a){var u,t,s,r=new H.ba("self","target","receiver","name"),q=J.ij(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
lf:function(a,b){throw H.f(H.k0(a,H.dC(b.substring(2))))},
dB:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.G(a)[b]
else u=!0
if(u)return a
H.lf(a,b)},
l_:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
k0:function(a,b){return new H.dN("CastError: "+P.ih(a)+": type '"+H.d(H.kR(a))+"' is not a subtype of type '"+b+"'")},
kR:function(a){var u,t=J.G(a)
if(!!t.$ibc){u=H.l_(t)
if(u!=null)return H.lg(u)
return"Closure"}return H.bq(a)},
ll:function(a){throw H.f(new P.dW(a))},
kt:function(a){return new H.fh(a)},
jx:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bL:function(a){if(a==null)return
return a.$ti},
lT:function(a,b,c){return H.i8(a["$a"+H.d(c)],H.bL(b))},
l3:function(a,b,c,d){var u=H.i8(a["$a"+H.d(c)],H.bL(b))
return u==null?null:u[d]},
iA:function(a,b,c){var u=H.i8(a["$a"+H.d(b)],H.bL(a))
return u==null?null:u[c]},
b3:function(a,b){var u=H.bL(a)
return u==null?null:u[b]},
lg:function(a){return H.aF(a,null)},
aF:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.dC(a[0].name)+H.js(a,1,b)
if(typeof a=="function")return H.dC(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.d(b[t])}if('func' in a)return H.kJ(a,b)
if('futureOr' in a)return"FutureOr<"+H.aF("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kJ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.o])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.e(a0,m)
p=C.b.M(p,a0[m])
l=u[q]
if(l!=null&&l!==P.I)p+=" extends "+H.aF(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aF(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aF(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aF(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.l0(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aF(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
js:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aX("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aF(p,c)}return"<"+u.h(0)+">"},
i8:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lR:function(a,b,c){return a.apply(b,H.i8(J.G(b)["$a"+H.d(c)],H.bL(b)))},
lS:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lc:function(a){var u,t,s,r,q=$.jy.$1(a),p=$.hY[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.i4[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jv.$2(a,q)
if(q!=null){p=$.hY[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.i4[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.i6(u)
$.hY[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.i4[q]=u
return u}if(s==="-"){r=H.i6(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jA(a,u)
if(s==="*")throw H.f(P.jg(q))
if(v.leafTags[q]===true){r=H.i6(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jA(a,u)},
jA:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iD(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
i6:function(a){return J.iD(a,!1,null,!!a.$ip)},
ld:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.i6(u)
else return J.iD(u,c,null,null)},
l8:function(){if(!0===$.iC)return
$.iC=!0
H.l9()},
l9:function(){var u,t,s,r,q,p,o,n
$.hY=Object.create(null)
$.i4=Object.create(null)
H.l7()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jB.$1(q)
if(p!=null){o=H.ld(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
l7:function(){var u,t,s,r,q,p,o=C.u()
o=H.b1(C.v,H.b1(C.w,H.b1(C.n,H.b1(C.n,H.b1(C.x,H.b1(C.y,H.b1(C.z(C.m),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jy=new H.i1(r)
$.jv=new H.i2(q)
$.jB=new H.i3(p)},
b1:function(a,b){return a(b)||b},
ke:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.ej("Illegal RegExp pattern ("+String(p)+")",a))},
li:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kZ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jC:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
iF:function(a,b,c){var u=H.lj(a,b,c)
return u},
lj:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jC(b),'g'),H.kZ(c))},
fP:function fP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f2:function f2(a,b){this.a=a
this.b=b},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
h5:function h5(a){this.a=a},
ia:function ia(a){this.a=a},
dd:function dd(a){this.a=a
this.b=null},
bc:function bc(){},
fE:function fE(){},
fw:function fw(){},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dN:function dN(a){this.a=a},
fh:function fh(a){this.a=a},
Z:function Z(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eC:function eC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c9:function c9(a,b){this.a=a
this.$ti=b},
eD:function eD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
i1:function i1(a){this.a=a},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
ex:function ex(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
it:function(a){return a},
aE:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.dA(b,a))},
kI:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.kY(a,b,c))
return b},
bo:function bo(){},
cd:function cd(){},
bn:function bn(){},
ce:function ce(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
cf:function cf(){},
eZ:function eZ(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
l0:function(a){return J.iW(a?Object.keys(a):[],null)},
ln:function(a){return v.mangledGlobalNames[a]},
le:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
i0:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.iC==null){H.l8()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.jg("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.iH()]
if(r!=null)return r
r=H.lc(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.p
if(u===Object.prototype)return C.p
if(typeof s=="function"){Object.defineProperty(s,$.iH(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
kd:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.iM(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.a2(a,0,4294967295,"length",null))
return J.iW(new Array(a),b)},
iW:function(a,b){return J.ij(H.b(a,[b]))},
ij:function(a){a.fixed$length=Array
return a},
G:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c5.prototype
return J.ev.prototype}if(typeof a=="string")return J.ar.prototype
if(a==null)return J.ew.prototype
if(typeof a=="boolean")return J.eu.prototype
if(a.constructor==Array)return J.aq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.I)return a
return J.i0(a)},
ix:function(a){if(typeof a=="string")return J.ar.prototype
if(a==null)return a
if(a.constructor==Array)return J.aq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.I)return a
return J.i0(a)},
i_:function(a){if(a==null)return a
if(a.constructor==Array)return J.aq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.I)return a
return J.i0(a)},
l2:function(a){if(typeof a=="number")return J.bi.prototype
if(typeof a=="string")return J.ar.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.b_.prototype
return a},
iy:function(a){if(typeof a=="string")return J.ar.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.b_.prototype
return a},
iz:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.I)return a
return J.i0(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.G(a).n(a,b)},
iJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.l2(a).H(a,b)},
jV:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lb(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ix(a).l(a,b)},
jW:function(a,b,c,d){return J.iz(a).dz(a,b,c,d)},
ib:function(a,b){return J.i_(a).q(a,b)},
jX:function(a,b){return J.i_(a).D(a,b)},
jY:function(a){return J.iz(a).gdD(a)},
bO:function(a){return J.G(a).gB(a)},
aI:function(a){return J.i_(a).gF(a)},
aJ:function(a){return J.ix(a).gk(a)},
iK:function(a){return J.i_(a).ec(a)},
jZ:function(a,b,c){return J.iy(a).an(a,b,c)},
k_:function(a){return J.iy(a).el(a)},
U:function(a){return J.G(a).h(a)},
a:function a(){},
eu:function eu(){},
ew:function ew(){},
c6:function c6(){},
f6:function f6(){},
b_:function b_(){},
as:function as(){},
aq:function aq(a){this.$ti=a},
ik:function ik(a){this.$ti=a},
N:function N(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bi:function bi(){},
c5:function c5(){},
ev:function ev(){},
ar:function ar(){}},P={
kz:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.kS()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.b2(new P.hq(s),1)).observe(u,{childList:true})
return new P.hp(s,u,t)}else if(self.setImmediate!=null)return P.kT()
return P.kU()},
kA:function(a){self.scheduleImmediate(H.b2(new P.hr(a),0))},
kB:function(a){self.setImmediate(H.b2(new P.hs(a),0))},
kC:function(a){P.iq(C.h,a)},
iq:function(a,b){var u=C.d.ab(a.a,1000)
return P.kG(u<0?0:u,b)},
je:function(a,b){var u=C.d.ab(a.a,1000)
return P.kH(u<0?0:u,b)},
kG:function(a,b){var u=new P.dj()
u.cl(a,b)
return u},
kH:function(a,b){var u=new P.dj()
u.cm(a,b)
return u},
kL:function(){var u,t
for(;u=$.b0,u!=null;){$.bJ=null
t=u.b
$.b0=t
if(t==null)$.bI=null
u.a.$0()}},
kQ:function(){$.iu=!0
try{P.kL()}finally{$.bJ=null
$.iu=!1
if($.b0!=null)$.iI().$1(P.jw())}},
kO:function(a){var u=new P.cF(a)
if($.b0==null){$.b0=$.bI=u
if(!$.iu)$.iI().$1(P.jw())}else $.bI=$.bI.b=u},
kP:function(a){var u,t,s=$.b0
if(s==null){P.kO(a)
$.bJ=$.bI
return}u=new P.cF(a)
t=$.bJ
if(t==null){u.b=s
$.b0=$.bJ=u}else{u.b=t.b
$.bJ=t.b=u
if(u.b==null)$.bI=u}},
jd:function(a,b){var u=$.R
if(u===C.e)return P.iq(a,b)
return P.iq(a,u.dE(b))},
kx:function(a,b){var u=$.R
if(u===C.e)return P.je(a,b)
return P.je(a,u.br(b,P.cw))},
jt:function(a,b,c,d,e){var u={}
u.a=d
P.kP(new P.hV(u,e))},
kM:function(a,b,c,d){var u,t=$.R
if(t===c)return d.$0()
$.R=c
u=t
try{t=d.$0()
return t}finally{$.R=u}},
kN:function(a,b,c,d,e){var u,t=$.R
if(t===c)return d.$1(e)
$.R=c
u=t
try{t=d.$1(e)
return t}finally{$.R=u}},
hq:function hq(a){this.a=a},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
dj:function dj(){this.c=0},
hR:function hR(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cF:function cF(a){this.a=a
this.b=null},
cs:function cs(){},
fz:function fz(){},
cw:function cw(){},
hU:function hU(){},
hV:function hV(a,b){this.a=a
this.b=b},
hE:function hE(){},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function(a,b){return new H.Z([a,b])},
kf:function(a){return H.l1(a,new H.Z([null,null]))},
ca:function(a){return new P.hB([a])},
is:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kF:function(a,b){var u=new P.cV(a,b)
u.c=a.e
return u},
kb:function(a,b,c){var u,t
if(P.iv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.o])
$.M.push(a)
try{P.kK(a,u)}finally{if(0>=$.M.length)return H.e($.M,-1)
$.M.pop()}t=P.jb(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
ii:function(a,b,c){var u,t
if(P.iv(a))return b+"..."+c
u=new P.aX(b)
$.M.push(a)
try{t=u
t.a=P.jb(t.a,a,", ")}finally{if(0>=$.M.length)return H.e($.M,-1)
$.M.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iv:function(a){var u,t
for(u=$.M.length,t=0;t<u;++t)if(a===$.M[t])return!0
return!1},
kK:function(a,b){var u,t,s,r,q,p,o,n=a.gF(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.p())return
u=H.d(n.gv(n))
b.push(u)
m+=u.length+2;++l}if(!n.p()){if(l<=5)return
if(0>=b.length)return H.e(b,-1)
t=b.pop()
if(0>=b.length)return H.e(b,-1)
s=b.pop()}else{r=n.gv(n);++l
if(!n.p()){if(l<=4){b.push(H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.e(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gv(n);++l
for(;n.p();r=q,q=p){p=n.gv(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.d(r)
t=H.d(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
iY:function(a,b){var u,t,s=P.ca(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t)s.m(0,a[t])
return s},
j_:function(a){var u,t={}
if(P.iv(a))return"{...}"
u=new P.aX("")
try{$.M.push(a)
u.a+="{"
t.a=!0
J.jX(a,new P.eI(t,u))
u.a+="}"}finally{if(0>=$.M.length)return H.e($.M,-1)
$.M.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
hB:function hB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hC:function hC(a){this.a=a
this.c=this.b=null},
cV:function cV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eE:function eE(){},
n:function n(){},
eH:function eH(){},
eI:function eI(a,b){this.a=a
this.b=b},
aa:function aa(){},
hI:function hI(){},
cW:function cW(){},
dP:function dP(){},
dR:function dR(){},
e7:function e7(){},
eq:function eq(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
ep:function ep(a){this.a=a},
h9:function h9(){},
ha:function ha(){},
hS:function hS(a){this.b=0
this.c=a},
k9:function(a){if(a instanceof H.bc)return a.h(0)
return"Instance of '"+H.d(H.bq(a))+"'"},
kg:function(a,b,c){var u,t,s=J.kd(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
iZ:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aI(a);u.p();)t.push(u.gv(u))
if(b)return t
return J.ij(t)},
ip:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.j8(0,null,u)
return H.j6(t<u?C.a.c4(a,0,t):a)}return P.kv(a,0,null)},
kv:function(a,b,c){var u,t,s=J.aI(a)
for(u=0;u<b;++u)if(!s.p())throw H.f(P.a2(b,0,u,null,null))
t=[]
for(;s.p();)t.push(s.gv(s))
return H.j6(t)},
kq:function(a){return new H.ex(a,H.ke(a,!1,!0,!1,!1,!1))},
jb:function(a,b,c){var u=J.aI(b)
if(!u.p())return a
if(c.length===0){do a+=H.d(u.gv(u))
while(u.p())}else{a+=H.d(u.gv(u))
for(;u.p();)a=a+c+H.d(u.gv(u))}return a},
jr:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.jU().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.dG(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.io(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
k6:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
k7:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bW:function(a){if(a>=10)return""+a
return"0"+a},
iT:function(a){return new P.an(1000*a)},
ih:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.U(a)
if(typeof a==="string")return JSON.stringify(a)
return P.k9(a)},
iM:function(a,b,c){return new P.V(!0,a,b,c)},
cm:function(a,b){return new P.aW(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.aW(b,c,!0,a,d,"Invalid value")},
j8:function(a,b,c){if(0>a||a>c)throw H.f(P.a2(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.a2(b,a,c,"end",null))
return b}return c},
j7:function(a,b){if(typeof a!=="number")return a.b0()
if(a<0)throw H.f(P.a2(a,0,null,b,null))},
v:function(a,b,c,d,e){var u=e==null?J.aJ(b):e
return new P.er(u,!0,a,c,"Index out of range")},
a5:function(a){return new P.h7(a)},
jg:function(a){return new P.h4(a)},
ja:function(a){return new P.bs(a)},
al:function(a){return new P.dQ(a)},
H:function(a){return new P.cN(a)},
iE:function(a){H.le(a)},
aG:function aG(){},
am:function am(a,b){this.a=a
this.b=b},
A:function A(){},
an:function an(a){this.a=a},
e3:function e3(){},
e4:function e4(){},
aP:function aP(){},
ci:function ci(){},
V:function V(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aW:function aW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
er:function er(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
h7:function h7(a){this.a=a},
h4:function h4(a){this.a=a},
bs:function bs(a){this.a=a},
dQ:function dQ(a){this.a=a},
f5:function f5(){},
cq:function cq(){},
dW:function dW(a){this.a=a},
cN:function cN(a){this.a=a},
ej:function ej(a,b){this.a=a
this.b=b},
el:function el(){},
B:function B(){},
j:function j(){},
et:function et(){},
aT:function aT(){},
cc:function cc(){},
av:function av(){},
S:function S(){},
I:function I(){},
o:function o(){},
aX:function aX(a){this.a=a},
ah:function(a){var u,t,s,r,q
if(a==null)return
u=P.iX(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
u.S(0,q,a[q])}return u},
kW:function(a){var u={}
a.D(0,new P.hW(u))
return u},
hW:function hW(a){this.a=a},
ef:function ef(a,b){this.a=a
this.b=b},
eg:function eg(){},
eh:function eh(){},
hD:function hD(){},
a3:function a3(){},
aS:function aS(){},
eA:function eA(){},
aU:function aU(){},
f3:function f3(){},
f9:function f9(){},
br:function br(){},
fA:function fA(){},
i:function i(){},
aZ:function aZ(){},
fO:function fO(){},
cT:function cT(){},
cU:function cU(){},
d3:function d3(){},
d4:function d4(){},
df:function df(){},
dg:function dg(){},
dm:function dm(){},
dn:function dn(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(a){this.a=a},
dK:function dK(){},
aK:function aK(){},
f4:function f4(){},
cG:function cG(){},
fv:function fv(){},
db:function db(){},
dc:function dc(){}},W={
iL:function(){var u=document.createElement("a")
return u},
iP:function(){var u=document.createElement("canvas")
return u},
k8:function(a,b,c){var u=document.body,t=(u&&C.l).P(u,a,b,c)
t.toString
u=new H.bx(new W.J(t),new W.e6(),[W.w])
return u.ga5(u)},
ie:function(a){return"wheel"},
be:function(a){var u,t,s,r="element tag unavailable"
try{u=J.iz(a)
t=u.gbR(a)
if(typeof t==="string")r=u.gbR(a)}catch(s){H.ai(s)}return r},
hA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jp:function(a,b,c,d){var u=W.hA(W.hA(W.hA(W.hA(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
F:function(a,b,c,d){var u=W.ju(new W.hy(c),W.h)
if(u!=null&&!0)J.jW(a,b,u,!1)
return new W.hx(a,b,u,!1)},
jo:function(a){var u=W.iL(),t=window.location
u=new W.bz(new W.hH(u,t))
u.cg(a)
return u},
kD:function(a,b,c,d){return!0},
kE:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
jq:function(){var u=P.o,t=P.iY(C.i,u),s=H.b(["TEMPLATE"],[u])
t=new W.hO(t,P.ca(u),P.ca(u),P.ca(u),null)
t.ck(null,new H.eL(C.i,new W.hP(),[H.b3(C.i,0),u]),s,null)
return t},
ju:function(a,b){var u=$.R
if(u===C.e)return a
return u.br(a,b)},
k:function k(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
bQ:function bQ(){},
aL:function aL(){},
aM:function aM(){},
ak:function ak(){},
dS:function dS(){},
t:function t(){},
bd:function bd(){},
dT:function dT(){},
O:function O(){},
X:function X(){},
dU:function dU(){},
dV:function dV(){},
dY:function dY(){},
Q:function Q(){},
e0:function e0(){},
bX:function bX(){},
bY:function bY(){},
e1:function e1(){},
e2:function e2(){},
hu:function hu(a,b){this.a=a
this.b=b},
E:function E(){},
e6:function e6(){},
h:function h(){},
c:function c(){},
ao:function ao(){},
ed:function ed(){},
ee:function ee(){},
ei:function ei(){},
ap:function ap(){},
eo:function eo(){},
bh:function bh(){},
aR:function aR(){},
eF:function eF(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(a){this.a=a},
eQ:function eQ(){},
eR:function eR(a){this.a=a},
au:function au(){},
eS:function eS(){},
a_:function a_(){},
J:function J(a){this.a=a},
w:function w(){},
cg:function cg(){},
aw:function aw(){},
f8:function f8(){},
ff:function ff(){},
fg:function fg(a){this.a=a},
fi:function fi(){},
ax:function ax(){},
ft:function ft(){},
ay:function ay(){},
fu:function fu(){},
az:function az(){},
fx:function fx(){},
fy:function fy(a){this.a=a},
ae:function ae(){},
ct:function ct(){},
fB:function fB(){},
fC:function fC(){},
bt:function bt(){},
aA:function aA(){},
af:function af(){},
fF:function fF(){},
fG:function fG(){},
fI:function fI(){},
aB:function aB(){},
aY:function aY(){},
fM:function fM(){},
fN:function fN(){},
aC:function aC(){},
h8:function h8(){},
hm:function hm(){},
aD:function aD(){},
by:function by(){},
hv:function hv(){},
cI:function cI(){},
hz:function hz(){},
d0:function d0(){},
hL:function hL(){},
hM:function hM(){},
ht:function ht(){},
hw:function hw(a){this.a=a},
hx:function hx(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hy:function hy(a){this.a=a},
bz:function bz(a){this.a=a},
u:function u(){},
ch:function ch(a){this.a=a},
f0:function f0(a){this.a=a},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(){},
hJ:function hJ(){},
hK:function hK(){},
hO:function hO(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hP:function hP(){},
hN:function hN(){},
c0:function c0(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ac:function ac(){},
hH:function hH(a,b){this.a=a
this.b=b},
dp:function dp(a){this.a=a},
hT:function hT(a){this.a=a},
cH:function cH(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cO:function cO(){},
cP:function cP(){},
cR:function cR(){},
cS:function cS(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d1:function d1(){},
d2:function d2(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
bE:function bE(){},
bF:function bF(){},
d9:function d9(){},
da:function da(){},
de:function de(){},
dh:function dh(){},
di:function di(){},
bG:function bG(){},
bH:function bH(){},
dk:function dk(){},
dl:function dl(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){}},T={
x:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.H("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.a8(a,0)
t=C.b.a8(b,0)
s=new T.fa()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
m:function(a){var u=new T.fj()
u.cc(a)
return u},
a6:function a6(){},
c1:function c1(){},
at:function at(){},
L:function L(){this.a=null},
fa:function fa(){this.b=this.a=null},
fj:function fj(){this.a=null}},R={
fK:function(){var u=new R.fJ(),t=P.o
u.a=new H.Z([t,R.cr])
u.b=new H.Z([t,R.cy])
return u},
cr:function cr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a){this.b=a
this.c=null},
fJ:function fJ(){this.c=this.b=this.a=null},
cz:function cz(a){this.b=a
this.a=this.c=null},
jz:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="testCanvas",a1=V.ku("Test 004"),a2=W.iP()
a2.className="pageLargeCanvas"
a2.id=a0
a1.a.appendChild(a2)
u=[P.o]
a1.bp(H.b(["Test of repeat use of a single mover and shape. There are 9 rings ","moving at the same speed, however the second one is attached to ","the first, the third to the second, and so on."],u))
a1.bp(H.b(["\xab[Back to Tests|../]"],u))
t=new U.co()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.sbY(0)
t.sbK(0,0)
t.sbQ(0)
t.sby(0.1)
t.sbw(0.21)
t.sbx(0.32)
t.sby(0.51)
t.sbw(0.71)
t.sbx(0.92)
s=new U.bg()
s.b5(U.a0)
s.az(s.gcC(),s.gd7())
s.e=null
s.f=V.eM()
s.r=0
s.m(0,U.iS(V.ab(0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1)))
s.m(0,t)
r=F.lm(2,0.2)
q=E.a9(s,r)
p=E.a9(s,r)
p.y.m(0,q)
o=E.a9(s,r)
o.y.m(0,p)
n=E.a9(s,r)
n.y.m(0,o)
m=E.a9(s,r)
m.y.m(0,n)
l=E.a9(s,r)
l.y.m(0,m)
k=E.a9(s,r)
k.y.m(0,l)
j=E.a9(s,r)
j.y.m(0,k)
i=E.a9(s,r)
i.y.m(0,j)
h=new O.dZ()
h.b=1
h.c=10
h.f=h.e=h.d=!1
if(!(Math.abs(-2)<$.y().a)){h.b=3
u=new D.z("start",1,3)
u.b=!0
h.aM(u)}u=h.c
if(!(Math.abs(u-6)<$.y().a)){h.c=6
u=new D.z("stop",u,6)
u.b=!0
h.aM(u)}if(!h.d){h.d=!0
h.a=null
u=new D.z("grey",!1,!0)
u.b=!0
h.aM(u)}g=new M.bZ()
g.a=!0
u=O.iR(E.a8)
g.e=u
u.az(g.gcG(),g.gcI())
g.y=g.x=g.r=g.f=null
f=X.ka(null)
e=new X.cj()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.sbC(null)
u=e.c
if(!(Math.abs(u-1.0471975511965976)<$.y().a)){e.c=1.0471975511965976
u=new D.z("fov",u,1.0471975511965976)
u.b=!0
e.a7(u)}u=e.d
if(!(Math.abs(u-0.1)<$.y().a)){e.d=0.1
u=new D.z("near",u,0.1)
u.b=!0
e.a7(u)}u=e.e
if(!(Math.abs(u-2000)<$.y().a)){e.e=2000
u=new D.z("far",u,2000)
u.b=!0
e.a7(u)}u=g.b
if(u!==e){if(u!=null)u.gt().G(0,g.gW())
d=g.b
g.b=e
e.gt().m(0,g.gW())
u=new D.z("camera",d,g.b)
u.b=!0
g.Z(u)}u=g.c
if(u!==f){if(u!=null)u.gt().G(0,g.gW())
d=g.c
g.c=f
f.gt().m(0,g.gW())
u=new D.z("target",d,g.c)
u.b=!0
g.Z(u)}g.sbS(null)
g.sbS(h)
g.e.m(0,i)
g.b.sbC(U.iS(V.ab(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=document.getElementById(a0)
if(c==null)H.T(P.H("Failed to find an element with the identifier, testCanvas."))
b=E.kw(c,!0,!0,!0,!1)
u=b.d
if(u!==g){if(u!=null)u.gt().G(0,b.gb6())
b.d=g
g.gt().m(0,b.gb6())
b.b7()}u=b.z
if(u==null)u=b.z=D.Y()
a=u.b
u=a==null?u.b=H.b([],[{func:1,ret:-1,args:[D.K]}]):a
u.push(new R.i5(a1,h))
V.lh(b)},
i5:function i5(a,b){this.a=a
this.b=b}},O={
iR:function(a){var u=new O.aN([a])
u.b5(a)
return u},
aN:function aN(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bl:function bl(){this.b=this.a=null},
dZ:function dZ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cu:function cu(){}},E={
a9:function(a,b){var u,t,s,r,q=new E.a8()
q.a=""
q.b=!0
u=O.iR(E.a8)
q.y=u
u.az(q.gdZ(),q.ge1())
q.dy=q.dx=q.db=q.cy=q.cx=q.ch=q.Q=q.z=null
u=q.c
if(u!=b){q.d=q.c=b
q.e=null
if(u!=null)u.gt().G(0,q.gbH())
t=q.c
if(t!=null)t.gt().m(0,q.gbH())
s=new D.z("shape",u,q.c)
s.b=!0
q.a2(s)}if(!J.D(q.r,a)){r=q.r
if(r!=null)r.gt().G(0,q.gbF())
a.gt().m(0,q.gbF())
q.r=a
s=new D.z("mover",r,a)
s.b=!0
q.a2(s)}return q},
ks:function(a,b){var u=new E.fb(a)
u.cb(a,b)
return u},
kw:function(a,b,c,d,e){var u,t,s=J.G(a)
if(!!s.$iaM)return E.jc(a,!0,!0,!0,!1)
u=W.iP()
t=u.style
t.width="100%"
t.height="100%"
s.gbs(a).m(0,u)
return E.jc(u,!0,!0,!0,!1)},
jc:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.cv(),p=C.C.c0(a,"webgl2",P.kf(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.T(P.H("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.ks(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.cC(a)
t=new X.ez()
t.d=P.ca(P.B)
u.b=t
t=new X.eT(u)
t.f=0
t.r=V.cl()
t.x=V.cl()
t.ch=t.Q=1
u.c=t
t=new X.eG(u)
t.r=0
t.x=V.cl()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.fL(u)
t.f=V.cl()
t.r=V.cl()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.cs,P.I]])
u.z=t
s=document
t.push(W.F(s,"contextmenu",u.gcK(),!1))
u.z.push(W.F(a,"focus",u.gcQ(),!1))
u.z.push(W.F(a,"blur",u.gcE(),!1))
u.z.push(W.F(s,"keyup",u.gcU(),!1))
u.z.push(W.F(s,"keydown",u.gcS(),!1))
u.z.push(W.F(a,"mousedown",u.gcX(),!1))
u.z.push(W.F(a,"mouseup",u.gd0(),!1))
u.z.push(W.F(a,r,u.gcZ(),!1))
t=u.z
W.ie(a)
W.ie(a)
t.push(W.F(a,W.ie(a),u.gd2(),!1))
u.z.push(W.F(s,r,u.gcM(),!1))
u.z.push(W.F(s,"mouseup",u.gcO(),!1))
u.z.push(W.F(s,"pointerlockchange",u.gd4(),!1))
u.z.push(W.F(a,"touchstart",u.gde(),!1))
u.z.push(W.F(a,"touchend",u.gd9(),!1))
u.z.push(W.F(a,"touchmove",u.gdc(),!1))
q.Q=!0
q.ch=!1
q.cx=new P.am(Date.now(),!1)
q.cy=0
q.bj()
return q},
dL:function dL(){},
a8:function a8(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fb:function fb(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fc:function fc(a){this.a=a},
fd:function fd(a){this.a=a},
fe:function fe(a){this.a=a},
cv:function cv(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
fH:function fH(a){this.a=a}},Z={
ky:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.it(c)),35044)
a.bindBuffer(b,null)
return new Z.cE(b,u)},
P:function(a){return new Z.cD(a)},
cE:function cE(a,b){this.a=a
this.b=b},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
hn:function hn(a){this.a=a},
bS:function bS(a,b){this.a=a
this.b=null
this.c=b},
c2:function c2(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a){this.a=a}},D={
Y:function(){var u=new D.bf()
u.d=0
return u},
dO:function dO(){},
bf:function bf(){var _=this
_.d=_.c=_.b=_.a=null},
e9:function e9(a){this.a=a},
ea:function ea(a){this.a=a},
K:function K(){this.b=null},
c3:function c3(){this.b=null},
c4:function c4(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null}},X={bT:function bT(a,b){this.a=a
this.b=b},c7:function c7(a,b){this.a=a
this.b=b},ez:function ez(){this.d=this.b=this.a=null},eG:function eG(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},eT:function eT(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},fL:function fL(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},cC:function cC(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ka:function(a){var u=new X.ek(),t=V.kV(1)
u.a=new V.aO(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.j9
if(t==null){t=V.kr(0,0,1,1)
$.j9=t}u.r=t
return u},
id:function id(){},
ek:function ek(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cj:function cj(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
fD:function fD(){}},V={
kV:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
iG:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.c1(a-b,u)
return(a<0?a+u:a)+b},
r:function(a,b,c){if(a==null)return C.b.a3("null",c)
return C.b.a3(C.c.bU(Math.abs(a-0)<$.y().a?0:a,b),c+b+1)},
hZ:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.o])
for(u=0,t=0;t<4;++t){s=V.r(a[t],b,c)
u=Math.max(u,s.length)
o.push(s)}for(r=o.length,q=r-1;q>=0;--q,r=p){if(q>=r)return H.e(o,q)
r=C.b.a3(o[q],u)
p=o.length
if(q>=p)return H.e(o,q)
o[q]=r}return o},
eM:function(){var u=$.j0
return u==null?$.j0=V.ab(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ab:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cl:function(){var u=$.j3
return u==null?$.j3=new V.a1(0,0):u},
kr:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cn(a,b,c,d)},
hb:function(){var u=$.jm
return u==null?$.jm=new V.C(0,0,0):u},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e8:function e8(a){this.a=a},
bk:function bk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ad:function ad(a,b,c){this.a=a
this.b=b
this.c=c},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ag:function ag(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
lh:function(a){P.kx(C.E,new V.i7(a))},
ku:function(a){var u=new V.fo()
u.ce(a,!0)
return u},
bU:function bU(){},
i7:function i7(a){this.a=a},
dX:function dX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
em:function em(a){var _=this
_.a=a
_.d=_.c=_.b=null},
en:function en(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f7:function f7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fo:function fo(){this.b=this.a=null},
fq:function fq(a){this.a=a},
fp:function fp(a){this.a=a},
fr:function fr(a){this.a=a}},U={
iS:function(a){var u=new U.bV()
u.a=a
return u},
bV:function bV(){this.b=this.a=null},
bg:function bg(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a0:function a0(){},
co:function co(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={bZ:function bZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
ir:function(a,b,c,d,e){var u=new A.fT(a,c,e)
u.f=d
P.kg(d,0,P.B)
return u},
bP:function bP(a,b,c){this.a=a
this.b=b
this.c=c},
dG:function dG(a){this.a=a},
e_:function e_(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cp:function cp(){},
cA:function cA(){},
h_:function h_(a){this.a=a},
fS:function fS(a,b,c){this.a=a
this.c=b
this.d=c},
fV:function fV(a,b,c){this.a=a
this.c=b
this.d=c},
fX:function fX(a,b,c){this.a=a
this.c=b
this.d=c},
fZ:function fZ(a,b,c){this.a=a
this.c=b
this.d=c},
fT:function fT(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
bu:function bu(a,b,c){this.a=a
this.c=b
this.d=c},
fU:function fU(a,b,c){this.a=a
this.c=b
this.d=c},
fW:function fW(a,b,c){this.a=a
this.c=b
this.d=c},
fY:function fY(a,b,c){this.a=a
this.c=b
this.d=c},
h0:function h0(a,b,c){this.a=a
this.c=b
this.d=c},
h1:function h1(a,b,c){this.a=a
this.c=b
this.d=c},
bv:function bv(a,b,c){this.a=a
this.c=b
this.d=c},
h2:function h2(a,b,c){this.a=a
this.c=b
this.d=c},
h3:function h3(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lm:function(a,b){return F.kX(15,30,b,a,new F.i9())},
kX:function(a,b,c,d,e){var u,t=F.lk(a,b,new F.hX(e,d,b,c))
if(t==null)return
u=t.e
if(u!=null)++u.d
t.d.aS()
t.a.aS()
u=t.e
if(u!=null)u.am(0)
t.dY(new F.hh(),new F.f1())
return t},
lk:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=new F.fk()
t=new F.hc(u)
t.b=!1
s=[F.bw]
t.c=H.b([],s)
u.a=t
t=new F.fn()
t.b=H.b([],[F.ck])
u.b=t
t=new F.fm(u)
t.b=H.b([],[F.c8])
u.c=t
t=new F.fl(u)
t.b=H.b([],[F.aQ])
u.d=t
u.e=null
r=H.b([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.bo(new V.aO(s,0,0,1),new V.a1(p,1))
c.$3(o,p,0)
r.push(o.bv(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.bo(new V.aO(j,i,h,1),new V.a1(p,m))
c.$3(o,p,n)
r.push(o.bv(null))}}u.d.dA(a+1,b+1,r)
return u},
eb:function(a,b,c){var u=new F.aQ(),t=a.a
if(t==null)H.T(P.H("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.T(P.H("May not create a face with vertices attached to different shapes."))
u.dq(a)
u.dr(b)
u.ds(c)
u.a.a.d.b.push(u)
u.a.a.U()
return u},
jn:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bw(),r=new F.hk()
r.b=H.b([],[F.ck])
s.b=r
r=new F.hg()
u=[F.c8]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hd()
u=[F.aQ]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.jQ()
s.e=0
r=$.aj()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b6().a)!==0?e:t
s.x=(u&$.b5().a)!==0?b:t
s.y=(u&$.b7().a)!==0?f:t
s.z=(u&$.b8().a)!==0?g:t
s.Q=(u&$.jR().a)!==0?c:t
s.ch=(u&$.b9().a)!==0?i:0
s.cx=(u&$.b4().a)!==0?a:t
return s},
i9:function i9(){},
hX:function hX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aQ:function aQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ec:function ec(){},
fs:function fs(){},
c8:function c8(){},
eB:function eB(){},
fR:function fR(){},
ck:function ck(){},
fk:function fk(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fl:function fl(a){this.a=a
this.b=null},
fm:function fm(a){this.a=a
this.b=null},
fn:function fn(){this.b=null},
bw:function bw(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hl:function hl(a){this.a=a},
hc:function hc(a){this.a=a
this.c=this.b=null},
hd:function hd(){this.d=this.c=this.b=null},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(a,b){this.a=a
this.b=b},
hg:function hg(){this.c=this.b=null},
hi:function hi(){},
hh:function hh(){},
hj:function hj(){},
f1:function f1(){},
hk:function hk(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.il.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gB:function(a){return H.bp(a)},
h:function(a){return"Instance of '"+H.d(H.bq(a))+"'"}}
J.eu.prototype={
h:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$iaG:1}
J.ew.prototype={
n:function(a,b){return null==b},
h:function(a){return"null"},
gB:function(a){return 0}}
J.c6.prototype={
gB:function(a){return 0},
h:function(a){return String(a)}}
J.f6.prototype={}
J.b_.prototype={}
J.as.prototype={
h:function(a){var u=a[$.jF()]
if(u==null)return this.c8(a)
return"JavaScript function for "+H.d(J.U(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aq.prototype={
bO:function(a,b){if(!!a.fixed$length)H.T(P.a5("removeAt"))
if(b<0||b>=a.length)throw H.f(P.cm(b,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.T(P.a5("remove"))
for(u=0;u<a.length;++u)if(J.D(a[u],b)){a.splice(u,1)
return!0}return!1},
D:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.al(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.d(a[u])
if(u>=s)return H.e(r,u)
r[u]=t}return r.join(b)},
dV:function(a){return this.j(a,"")},
dQ:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.f(P.al(a))}throw H.f(H.es())},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
c4:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.a2(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.a2(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.b3(a,0)])
return H.b(a.slice(b,c),[H.b3(a,0)])},
gdP:function(a){if(a.length>0)return a[0]
throw H.f(H.es())},
gau:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.es())},
bq:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.f(P.al(a))}return!1},
J:function(a,b){var u
for(u=0;u<a.length;++u)if(J.D(a[u],b))return!0
return!1},
h:function(a){return P.ii(a,"[","]")},
gF:function(a){return new J.N(a,a.length)},
gB:function(a){return H.bp(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.T(P.a5("set length"))
if(b<0)throw H.f(P.a2(b,0,null,"newLength",null))
a.length=b},
$ij:1}
J.ik.prototype={}
J.N.prototype={
gv:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.q(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bi.prototype={
bA:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.a5(""+a+".floor()"))},
V:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.a5(""+a+".round()"))},
bU:function(a,b){var u,t
if(b>20)throw H.f(P.a2(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
c1:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ca:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bk(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.bk(a,b)},
bk:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.a5("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
aq:function(a,b){var u
if(a>0)u=this.dw(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
dw:function(a,b){return b>31?0:a>>>b},
$iA:1,
$iS:1}
J.c5.prototype={$iB:1}
J.ev.prototype={}
J.ar.prototype={
aT:function(a,b){if(b<0)throw H.f(H.dA(a,b))
if(b>=a.length)H.T(H.dA(a,b))
return a.charCodeAt(b)},
a8:function(a,b){if(b>=a.length)throw H.f(H.dA(a,b))
return a.charCodeAt(b)},
M:function(a,b){if(typeof b!=="string")throw H.f(P.iM(b,null,null))
return a+b},
aA:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
an:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.cm(b,null))
if(b>c)throw H.f(P.cm(b,null))
if(c>a.length)throw H.f(P.cm(c,null))
return a.substring(b,c)},
aB:function(a,b){return this.an(a,b,null)},
el:function(a){return a.toLowerCase()},
H:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a3:function(a,b){var u=b-a.length
if(u<=0)return a
return this.H(" ",u)+a},
h:function(a){return a},
gB:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$io:1}
H.l.prototype={
gk:function(a){return this.a.length},
l:function(a,b){return C.b.aT(this.a,b)},
$an:function(){return[P.B]},
$aj:function(){return[P.B]}}
H.e5.prototype={}
H.cb.prototype={
gF:function(a){return new H.bj(this,this.gk(this))},
ax:function(a,b){return this.c7(0,b)}}
H.bj.prototype={
gv:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=J.ix(s),q=r.gk(s)
if(t.b!==q)throw H.f(P.al(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.q(s,u);++t.c
return!0}}
H.eJ.prototype={
gF:function(a){return new H.eK(J.aI(this.a),this.b)},
gk:function(a){return J.aJ(this.a)},
q:function(a,b){return this.b.$1(J.ib(this.a,b))},
$aj:function(a,b){return[b]}}
H.eK.prototype={
p:function(){var u=this,t=u.b
if(t.p()){u.a=u.c.$1(t.gv(t))
return!0}u.a=null
return!1},
gv:function(a){return this.a}}
H.eL.prototype={
gk:function(a){return J.aJ(this.a)},
q:function(a,b){return this.b.$1(J.ib(this.a,b))},
$acb:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.bx.prototype={
gF:function(a){return new H.ho(J.aI(this.a),this.b)}}
H.ho.prototype={
p:function(){var u,t
for(u=this.a,t=this.b;u.p();)if(t.$1(u.gv(u)))return!0
return!1},
gv:function(a){var u=this.a
return u.gv(u)}}
H.c_.prototype={}
H.h6.prototype={}
H.cB.prototype={}
H.fP.prototype={
R:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.f2.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ey.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.h5.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ia.prototype={
$1:function(a){if(!!J.G(a).$iaP)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:6}
H.dd.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bc.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gen:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fE.prototype={}
H.fw.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.dC(u)+"'"}}
H.ba.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ba))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gB:function(a){var u,t=this.c
if(t==null)u=H.bp(this.a)
else u=typeof t!=="object"?J.bO(t):H.bp(t)
return(u^H.bp(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.bq(u))+"'")}}
H.dN.prototype={
h:function(a){return this.a}}
H.fh.prototype={
h:function(a){return"RuntimeError: "+H.d(this.a)}}
H.Z.prototype={
gk:function(a){return this.a},
gL:function(a){return new H.c9(this,[H.b3(this,0)])},
bu:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.bf(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.bf(t,b)}else return s.dS(b)},
dS:function(a){var u=this.d
if(u==null)return!1
return this.aU(this.aH(u,J.bO(a)&0x3ffffff),a)>=0},
l:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.ap(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.ap(r,b)
s=t==null?null:t.b
return s}else return q.dT(b)},
dT:function(a){var u,t,s=this.d
if(s==null)return
u=this.aH(s,J.bO(a)&0x3ffffff)
t=this.aU(u,a)
if(t<0)return
return u[t].b},
S:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.bb(u==null?o.b=o.aK():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bb(t==null?o.c=o.aK():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.aK()
r=J.bO(b)&0x3ffffff
q=o.aH(s,r)
if(q==null)o.aO(s,r,[o.aL(b,c)])
else{p=o.aU(q,b)
if(p>=0)q[p].b=c
else q.push(o.aL(b,c))}}},
D:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.al(u))
t=t.c}},
bb:function(a,b,c){var u=this.ap(a,b)
if(u==null)this.aO(a,b,this.aL(b,c))
else u.b=c},
cB:function(){this.r=this.r+1&67108863},
aL:function(a,b){var u,t=this,s=new H.eC(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.cB()
return s},
aU:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1},
h:function(a){return P.j_(this)},
ap:function(a,b){return a[b]},
aH:function(a,b){return a[b]},
aO:function(a,b,c){a[b]=c},
cw:function(a,b){delete a[b]},
bf:function(a,b){return this.ap(a,b)!=null},
aK:function(){var u="<non-identifier-key>",t=Object.create(null)
this.aO(t,u,t)
this.cw(t,u)
return t}}
H.eC.prototype={}
H.c9.prototype={
gk:function(a){return this.a.a},
gF:function(a){var u=this.a,t=new H.eD(u,u.r)
t.c=u.e
return t}}
H.eD.prototype={
gv:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.al(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.i1.prototype={
$1:function(a){return this.a(a)},
$S:6}
H.i2.prototype={
$2:function(a,b){return this.a(a,b)}}
H.i3.prototype={
$1:function(a){return this.a(a)}}
H.ex.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bo.prototype={}
H.cd.prototype={
gk:function(a){return a.length},
$ip:1,
$ap:function(){}}
H.bn.prototype={
l:function(a,b){H.aE(b,a,a.length)
return a[b]},
$an:function(){return[P.A]},
$ij:1,
$aj:function(){return[P.A]}}
H.ce.prototype={
$an:function(){return[P.B]},
$ij:1,
$aj:function(){return[P.B]}}
H.eU.prototype={
l:function(a,b){H.aE(b,a,a.length)
return a[b]}}
H.eV.prototype={
l:function(a,b){H.aE(b,a,a.length)
return a[b]}}
H.eW.prototype={
l:function(a,b){H.aE(b,a,a.length)
return a[b]}}
H.eX.prototype={
l:function(a,b){H.aE(b,a,a.length)
return a[b]}}
H.eY.prototype={
l:function(a,b){H.aE(b,a,a.length)
return a[b]}}
H.cf.prototype={
gk:function(a){return a.length},
l:function(a,b){H.aE(b,a,a.length)
return a[b]}}
H.eZ.prototype={
gk:function(a){return a.length},
l:function(a,b){H.aE(b,a,a.length)
return a[b]}}
H.bA.prototype={}
H.bB.prototype={}
H.bC.prototype={}
H.bD.prototype={}
P.hq.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:13}
P.hp.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.hr.prototype={
$0:function(){this.a.$0()}}
P.hs.prototype={
$0:function(){this.a.$0()}}
P.dj.prototype={
cl:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b2(new P.hR(this,b),0),a)
else throw H.f(P.a5("`setTimeout()` not found."))},
cm:function(a,b){if(self.setTimeout!=null)self.setInterval(H.b2(new P.hQ(this,a,Date.now(),b),0),a)
else throw H.f(P.a5("Periodic timer."))},
$icw:1}
P.hR.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.hQ.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.ca(u,q)}s.c=r
t.d.$1(s)}}
P.cF.prototype={}
P.cs.prototype={}
P.fz.prototype={}
P.cw.prototype={}
P.hU.prototype={}
P.hV.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.ci():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u}}
P.hE.prototype={
eg:function(a){var u,t,s,r=null
try{if(C.e===$.R){a.$0()
return}P.kM(r,r,this,a)}catch(s){u=H.ai(s)
t=H.iB(s)
P.jt(r,r,this,u,t)}},
eh:function(a,b){var u,t,s,r=null
try{if(C.e===$.R){a.$1(b)
return}P.kN(r,r,this,a,b)}catch(s){u=H.ai(s)
t=H.iB(s)
P.jt(r,r,this,u,t)}},
ei:function(a,b){return this.eh(a,b,null)},
dE:function(a){return new P.hF(this,a)},
br:function(a,b){return new P.hG(this,a,b)}}
P.hF.prototype={
$0:function(){return this.a.eg(this.b)}}
P.hG.prototype={
$1:function(a){return this.a.ei(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hB.prototype={
gF:function(a){var u=new P.cV(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
J:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.cs(b)
return t}},
cs:function(a){var u=this.d
if(u==null)return!1
return this.aG(this.bi(u,a),a)>=0},
m:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bc(u==null?s.b=P.is():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bc(t==null?s.c=P.is():t,b)}else return s.co(0,b)},
co:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.is()
u=s.be(b)
t=r[u]
if(t==null)r[u]=[s.aD(b)]
else{if(s.aG(t,b)>=0)return!1
t.push(s.aD(b))}return!0},
G:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.dh(this.c,b)
else return this.dg(0,b)},
dg:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bi(r,b)
t=s.aG(u,b)
if(t<0)return!1
s.bl(u.splice(t,1)[0])
return!0},
bc:function(a,b){if(a[b]!=null)return!1
a[b]=this.aD(b)
return!0},
dh:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.bl(u)
delete a[b]
return!0},
bd:function(){this.r=1073741823&this.r+1},
aD:function(a){var u,t=this,s=new P.hC(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bd()
return s},
bl:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bd()},
be:function(a){return J.bO(a)&1073741823},
bi:function(a,b){return a[this.be(b)]},
aG:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1}}
P.hC.prototype={}
P.cV.prototype={
gv:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.al(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.eE.prototype={$ij:1}
P.n.prototype={
gF:function(a){return new H.bj(a,this.gk(a))},
q:function(a,b){return this.l(a,b)},
ek:function(a,b){var u,t,s=this,r=H.b([],[H.l3(s,a,"n",0)])
C.a.sk(r,s.gk(a))
for(u=0;u<s.gk(a);++u){t=s.l(a,u)
if(u>=r.length)return H.e(r,u)
r[u]=t}return r},
ej:function(a){return this.ek(a,!0)},
h:function(a){return P.ii(a,"[","]")}}
P.eH.prototype={}
P.eI.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:7}
P.aa.prototype={
D:function(a,b){var u,t
for(u=J.aI(this.gL(a));u.p();){t=u.gv(u)
b.$2(t,this.l(a,t))}},
gk:function(a){return J.aJ(this.gL(a))},
h:function(a){return P.j_(a)}}
P.hI.prototype={
X:function(a,b){var u
for(u=J.aI(b);u.p();)this.m(0,u.gv(u))},
h:function(a){return P.ii(this,"{","}")},
q:function(a,b){var u,t,s
P.j7(b,"index")
for(u=P.kF(this,this.r),t=0;u.p();){s=u.d
if(b===t)return s;++t}throw H.f(P.v(b,this,"index",null,t))},
$ij:1}
P.cW.prototype={}
P.dP.prototype={}
P.dR.prototype={}
P.e7.prototype={}
P.eq.prototype={
h:function(a){return this.a}}
P.ep.prototype={
ct:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.e(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.aX("")
if(r>b)q.a+=C.b.an(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.jZ(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.h9.prototype={}
P.ha.prototype={
dG:function(a){var u,t,s=P.j8(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.hS(u)
if(t.cA(a,0,s)!==s)t.bm(C.b.aT(a,s-1),0)
return new Uint8Array(u.subarray(0,H.kI(0,t.b,u.length)))}}
P.hS.prototype={
bm:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.e(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.e(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|a&63
return!1}},
cA:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.aT(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.a8(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bm(r,C.b.a8(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.e(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.e(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=128|r&63}}return s}}
P.aG.prototype={}
P.am.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.am&&this.a===b.a&&!0},
gB:function(a){var u=this.a
return(u^C.d.aq(u,30))&1073741823},
h:function(a){var u=this,t=P.k6(H.ko(u)),s=P.bW(H.km(u)),r=P.bW(H.ki(u)),q=P.bW(H.kj(u)),p=P.bW(H.kl(u)),o=P.bW(H.kn(u)),n=P.k7(H.kk(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.A.prototype={}
P.an.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.an&&this.a===b.a},
gB:function(a){return C.d.gB(this.a)},
h:function(a){var u,t,s,r=new P.e4(),q=this.a
if(q<0)return"-"+new P.an(0-q).h(0)
u=r.$1(C.d.ab(q,6e7)%60)
t=r.$1(C.d.ab(q,1e6)%60)
s=new P.e3().$1(q%1e6)
return""+C.d.ab(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.e3.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.e4.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.aP.prototype={}
P.ci.prototype={
h:function(a){return"Throw of null."}}
P.V.prototype={
gaF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaE:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaF()+o+u
if(!q.a)return t
s=q.gaE()
r=P.ih(q.b)
return t+s+": "+r}}
P.aW.prototype={
gaF:function(){return"RangeError"},
gaE:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.er.prototype={
gaF:function(){return"RangeError"},
gaE:function(){var u,t=this.b
if(typeof t!=="number")return t.b0()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gk:function(a){return this.f}}
P.h7.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.h4.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bs.prototype={
h:function(a){return"Bad state: "+this.a}}
P.dQ.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ih(u)+"."}}
P.f5.prototype={
h:function(a){return"Out of Memory"},
$iaP:1}
P.cq.prototype={
h:function(a){return"Stack Overflow"},
$iaP:1}
P.dW.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.cN.prototype={
h:function(a){return"Exception: "+this.a}}
P.ej.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.an(s,0,75)+"...":s
return t+"\n"+r}}
P.el.prototype={}
P.B.prototype={}
P.j.prototype={
ax:function(a,b){return new H.bx(this,b,[H.iA(this,"j",0)])},
gk:function(a){var u,t=this.gF(this)
for(u=0;t.p();)++u
return u},
ga5:function(a){var u,t=this.gF(this)
if(!t.p())throw H.f(H.es())
u=t.gv(t)
if(t.p())throw H.f(H.kc())
return u},
q:function(a,b){var u,t,s
P.j7(b,"index")
for(u=this.gF(this),t=0;u.p();){s=u.gv(u)
if(b===t)return s;++t}throw H.f(P.v(b,this,"index",null,t))},
h:function(a){return P.kb(this,"(",")")}}
P.et.prototype={}
P.aT.prototype={$ij:1}
P.cc.prototype={}
P.av.prototype={
gB:function(a){return P.I.prototype.gB.call(this,this)},
h:function(a){return"null"}}
P.S.prototype={}
P.I.prototype={constructor:P.I,$iI:1,
n:function(a,b){return this===b},
gB:function(a){return H.bp(this)},
h:function(a){return"Instance of '"+H.d(H.bq(this))+"'"},
toString:function(){return this.h(this)}}
P.o.prototype={}
P.aX.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.k.prototype={}
W.dD.prototype={
gk:function(a){return a.length}}
W.dE.prototype={
h:function(a){return String(a)}}
W.dF.prototype={
h:function(a){return String(a)}}
W.bQ.prototype={}
W.aL.prototype={$iaL:1}
W.aM.prototype={
c0:function(a,b,c){var u=a.getContext(b,P.kW(c))
return u},
$iaM:1}
W.ak.prototype={
gk:function(a){return a.length}}
W.dS.prototype={
gk:function(a){return a.length}}
W.t.prototype={$it:1}
W.bd.prototype={
gk:function(a){return a.length}}
W.dT.prototype={}
W.O.prototype={}
W.X.prototype={}
W.dU.prototype={
gk:function(a){return a.length}}
W.dV.prototype={
gk:function(a){return a.length}}
W.dY.prototype={
gk:function(a){return a.length}}
W.Q.prototype={$iQ:1}
W.e0.prototype={
h:function(a){return String(a)}}
W.bX.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[[P.a3,P.S]]},
$an:function(){return[[P.a3,P.S]]},
$ij:1,
$aj:function(){return[[P.a3,P.S]]}}
W.bY.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaf(a))+" x "+H.d(this.gad(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.G(b)
if(!u.$ia3)return!1
return a.left===u.gbB(b)&&a.top===u.gbW(b)&&this.gaf(a)===u.gaf(b)&&this.gad(a)===u.gad(b)},
gB:function(a){return W.jp(C.c.gB(a.left),C.c.gB(a.top),C.c.gB(this.gaf(a)),C.c.gB(this.gad(a)))},
gad:function(a){return a.height},
gbB:function(a){return a.left},
gbW:function(a){return a.top},
gaf:function(a){return a.width},
$ia3:1,
$aa3:function(){return[P.S]}}
W.e1.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[P.o]},
$an:function(){return[P.o]},
$ij:1,
$aj:function(){return[P.o]}}
W.e2.prototype={
gk:function(a){return a.length}}
W.hu.prototype={
gk:function(a){return this.b.length},
l:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
m:function(a,b){this.a.appendChild(b)
return b},
gF:function(a){var u=this.ej(this)
return new J.N(u,u.length)},
$an:function(){return[W.E]},
$aj:function(){return[W.E]}}
W.E.prototype={
gdD:function(a){return new W.hw(a)},
gbs:function(a){return new W.hu(a,a.children)},
h:function(a){return a.localName},
P:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.iV
if(u==null){u=H.b([],[W.ac])
t=new W.ch(u)
u.push(W.jo(null))
u.push(W.jq())
$.iV=t
d=t}else d=u
u=$.iU
if(u==null){u=new W.dp(d)
$.iU=u
c=u}else{u.a=d
c=u}}if($.a7==null){u=document
t=u.implementation.createHTMLDocument("")
$.a7=t
$.ig=t.createRange()
s=$.a7.createElement("base")
s.href=u.baseURI
$.a7.head.appendChild(s)}u=$.a7
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.a7
if(!!this.$iaL)r=u.body
else{r=u.createElement(a.tagName)
$.a7.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.J(C.J,a.tagName)){$.ig.selectNodeContents(r)
q=$.ig.createContextualFragment(b)}else{r.innerHTML=b
q=$.a7.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.a7.body
if(r==null?u!=null:r!==u)J.iK(r)
c.b1(q)
document.adoptNode(q)
return q},
dH:function(a,b,c){return this.P(a,b,c,null)},
c3:function(a,b){a.textContent=null
a.appendChild(this.P(a,b,null,null))},
$iE:1,
gbR:function(a){return a.tagName}}
W.e6.prototype={
$1:function(a){return!!J.G(a).$iE}}
W.h.prototype={$ih:1}
W.c.prototype={
dz:function(a,b,c,d){if(c!=null)this.cp(a,b,c,!1)},
cp:function(a,b,c,d){return a.addEventListener(b,H.b2(c,1),!1)}}
W.ao.prototype={$iao:1}
W.ed.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ao]},
$an:function(){return[W.ao]},
$ij:1,
$aj:function(){return[W.ao]}}
W.ee.prototype={
gk:function(a){return a.length}}
W.ei.prototype={
gk:function(a){return a.length}}
W.ap.prototype={$iap:1}
W.eo.prototype={
gk:function(a){return a.length}}
W.bh.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.w]},
$an:function(){return[W.w]},
$ij:1,
$aj:function(){return[W.w]}}
W.aR.prototype={$iaR:1}
W.eF.prototype={
h:function(a){return String(a)}}
W.eN.prototype={
gk:function(a){return a.length}}
W.eO.prototype={
l:function(a,b){return P.ah(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ah(u.value[1]))}},
gL:function(a){var u=H.b([],[P.o])
this.D(a,new W.eP(u))
return u},
gk:function(a){return a.size}}
W.eP.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eQ.prototype={
l:function(a,b){return P.ah(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ah(u.value[1]))}},
gL:function(a){var u=H.b([],[P.o])
this.D(a,new W.eR(u))
return u},
gk:function(a){return a.size}}
W.eR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.au.prototype={$iau:1}
W.eS.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.au]},
$an:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]}}
W.a_.prototype={$ia_:1}
W.J.prototype={
ga5:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.ja("No elements"))
if(t>1)throw H.f(P.ja("More than one element"))
return u.firstChild},
X:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
gF:function(a){var u=this.a.childNodes
return new W.c0(u,u.length)},
gk:function(a){return this.a.childNodes.length},
l:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$an:function(){return[W.w]},
$aj:function(){return[W.w]}}
W.w.prototype={
ec:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
h:function(a){var u=a.nodeValue
return u==null?this.c6(a):u},
$iw:1}
W.cg.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.w]},
$an:function(){return[W.w]},
$ij:1,
$aj:function(){return[W.w]}}
W.aw.prototype={$iaw:1,
gk:function(a){return a.length}}
W.f8.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aw]},
$an:function(){return[W.aw]},
$ij:1,
$aj:function(){return[W.aw]}}
W.ff.prototype={
l:function(a,b){return P.ah(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ah(u.value[1]))}},
gL:function(a){var u=H.b([],[P.o])
this.D(a,new W.fg(u))
return u},
gk:function(a){return a.size}}
W.fg.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fi.prototype={
gk:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.ft.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ax]},
$an:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]}}
W.ay.prototype={$iay:1}
W.fu.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ay]},
$an:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]}}
W.az.prototype={$iaz:1,
gk:function(a){return a.length}}
W.fx.prototype={
l:function(a,b){return a.getItem(b)},
D:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gL:function(a){var u=H.b([],[P.o])
this.D(a,new W.fy(u))
return u},
gk:function(a){return a.length}}
W.fy.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ae.prototype={$iae:1}
W.ct.prototype={
P:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
u=W.k8("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.J(t).X(0,new W.J(u))
return t}}
W.fB.prototype={
P:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.q.P(u.createElement("table"),b,c,d)
u.toString
u=new W.J(u)
s=u.ga5(u)
s.toString
u=new W.J(s)
r=u.ga5(u)
t.toString
r.toString
new W.J(t).X(0,new W.J(r))
return t}}
W.fC.prototype={
P:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.q.P(u.createElement("table"),b,c,d)
u.toString
u=new W.J(u)
s=u.ga5(u)
t.toString
s.toString
new W.J(t).X(0,new W.J(s))
return t}}
W.bt.prototype={$ibt:1}
W.aA.prototype={$iaA:1}
W.af.prototype={$iaf:1}
W.fF.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.af]},
$an:function(){return[W.af]},
$ij:1,
$aj:function(){return[W.af]}}
W.fG.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aA]},
$an:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]}}
W.fI.prototype={
gk:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.aY.prototype={$iaY:1}
W.fM.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aB]},
$an:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]}}
W.fN.prototype={
gk:function(a){return a.length}}
W.aC.prototype={}
W.h8.prototype={
h:function(a){return String(a)}}
W.hm.prototype={
gk:function(a){return a.length}}
W.aD.prototype={
gdK:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.a5("deltaY is not supported"))},
gdJ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.a5("deltaX is not supported"))},
$iaD:1}
W.by.prototype={
dl:function(a,b){return a.requestAnimationFrame(H.b2(b,1))},
cz:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hv.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.t]},
$an:function(){return[W.t]},
$ij:1,
$aj:function(){return[W.t]}}
W.cI.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.G(b)
if(!u.$ia3)return!1
return a.left===u.gbB(b)&&a.top===u.gbW(b)&&a.width===u.gaf(b)&&a.height===u.gad(b)},
gB:function(a){return W.jp(C.c.gB(a.left),C.c.gB(a.top),C.c.gB(a.width),C.c.gB(a.height))},
gad:function(a){return a.height},
gaf:function(a){return a.width}}
W.hz.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ap]},
$an:function(){return[W.ap]},
$ij:1,
$aj:function(){return[W.ap]}}
W.d0.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.w]},
$an:function(){return[W.w]},
$ij:1,
$aj:function(){return[W.w]}}
W.hL.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.az]},
$an:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]}}
W.hM.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a[b]},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ae]},
$an:function(){return[W.ae]},
$ij:1,
$aj:function(){return[W.ae]}}
W.ht.prototype={
D:function(a,b){var u,t,s,r,q
for(u=this.gL(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gL:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.o])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q}}
W.hw.prototype={
l:function(a,b){return this.a.getAttribute(b)},
gk:function(a){return this.gL(this).length}}
W.hx.prototype={}
W.hy.prototype={
$1:function(a){return this.a.$1(a)}}
W.bz.prototype={
cg:function(a){var u
if($.cQ.a===0){for(u=0;u<262;++u)$.cQ.S(0,C.I[u],W.l5())
for(u=0;u<12;++u)$.cQ.S(0,C.j[u],W.l6())}},
ac:function(a){return $.jT().J(0,W.be(a))},
Y:function(a,b,c){var u=$.cQ.l(0,H.d(W.be(a))+"::"+b)
if(u==null)u=$.cQ.l(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iac:1}
W.u.prototype={
gF:function(a){return new W.c0(a,this.gk(a))}}
W.ch.prototype={
ac:function(a){return C.a.bq(this.a,new W.f0(a))},
Y:function(a,b,c){return C.a.bq(this.a,new W.f_(a,b,c))},
$iac:1}
W.f0.prototype={
$1:function(a){return a.ac(this.a)}}
W.f_.prototype={
$1:function(a){return a.Y(this.a,this.b,this.c)}}
W.d8.prototype={
ck:function(a,b,c,d){var u,t,s
this.a.X(0,c)
u=b.ax(0,new W.hJ())
t=b.ax(0,new W.hK())
this.b.X(0,u)
s=this.c
s.X(0,C.K)
s.X(0,t)},
ac:function(a){return this.a.J(0,W.be(a))},
Y:function(a,b,c){var u=this,t=W.be(a),s=u.c
if(s.J(0,H.d(t)+"::"+b))return u.d.dB(c)
else if(s.J(0,"*::"+b))return u.d.dB(c)
else{s=u.b
if(s.J(0,H.d(t)+"::"+b))return!0
else if(s.J(0,"*::"+b))return!0
else if(s.J(0,H.d(t)+"::*"))return!0
else if(s.J(0,"*::*"))return!0}return!1},
$iac:1}
W.hJ.prototype={
$1:function(a){return!C.a.J(C.j,a)}}
W.hK.prototype={
$1:function(a){return C.a.J(C.j,a)}}
W.hO.prototype={
Y:function(a,b,c){if(this.c9(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.J(0,b)
return!1}}
W.hP.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.hN.prototype={
ac:function(a){var u=J.G(a)
if(!!u.$ibr)return!1
u=!!u.$ii
if(u&&W.be(a)==="foreignObject")return!1
if(u)return!0
return!1},
Y:function(a,b,c){if(b==="is"||C.b.aA(b,"on"))return!1
return this.ac(a)},
$iac:1}
W.c0.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.jV(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gv:function(a){return this.d}}
W.ac.prototype={}
W.hH.prototype={}
W.dp.prototype={
b1:function(a){new W.hT(this).$2(a,null)},
ah:function(a,b){if(b==null)J.iK(a)
else b.removeChild(a)},
dn:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.jY(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ai(r)}t="element unprintable"
try{t=J.U(a)}catch(r){H.ai(r)}try{s=W.be(a)
this.dm(a,b,p,t,s,o,n)}catch(r){if(H.ai(r) instanceof P.V)throw r
else{this.ah(a,b)
window
q="Removing corrupted element "+H.d(t)
if(typeof console!="undefined")window.console.warn(q)}}},
dm:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.ah(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.ac(a)){p.ah(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.Y(a,"is",g)){p.ah(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gL(f)
t=H.b(u.slice(0),[H.b3(u,0)])
for(s=f.gL(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
if(!p.a.Y(a,J.k_(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.d(e)+" "+r+'="'+H.d(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.G(a).$ibt)p.b1(a.content)}}
W.hT.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.dn(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.ah(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ai(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.cH.prototype={}
W.cJ.prototype={}
W.cK.prototype={}
W.cL.prototype={}
W.cM.prototype={}
W.cO.prototype={}
W.cP.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.bE.prototype={}
W.bF.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.de.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.bG.prototype={}
W.bH.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
P.hW.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.ef.prototype={
gaI:function(){var u=this.b,t=H.iA(u,"n",0)
return new H.eJ(new H.bx(u,new P.eg(),[t]),new P.eh(),[t,W.E])},
m:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aJ(this.gaI().a)},
l:function(a,b){var u=this.gaI()
return u.b.$1(J.ib(u.a,b))},
gF:function(a){var u=P.iZ(this.gaI(),!1,W.E)
return new J.N(u,u.length)},
$an:function(){return[W.E]},
$aj:function(){return[W.E]}}
P.eg.prototype={
$1:function(a){return!!J.G(a).$iE}}
P.eh.prototype={
$1:function(a){return H.dB(a,"$iE")}}
P.hD.prototype={}
P.a3.prototype={}
P.aS.prototype={$iaS:1}
P.eA.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a.getItem(b)},
q:function(a,b){return this.l(a,b)},
$an:function(){return[P.aS]},
$ij:1,
$aj:function(){return[P.aS]}}
P.aU.prototype={$iaU:1}
P.f3.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a.getItem(b)},
q:function(a,b){return this.l(a,b)},
$an:function(){return[P.aU]},
$ij:1,
$aj:function(){return[P.aU]}}
P.f9.prototype={
gk:function(a){return a.length}}
P.br.prototype={$ibr:1}
P.fA.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a.getItem(b)},
q:function(a,b){return this.l(a,b)},
$an:function(){return[P.o]},
$ij:1,
$aj:function(){return[P.o]}}
P.i.prototype={
gbs:function(a){return new P.ef(a,new W.J(a))},
P:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.ac])
p.push(W.jo(null))
p.push(W.jq())
p.push(new W.hN())
c=new W.dp(new W.ch(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.l).dH(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.J(s)
q=p.ga5(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ii:1}
P.aZ.prototype={$iaZ:1}
P.fO.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return a.getItem(b)},
q:function(a,b){return this.l(a,b)},
$an:function(){return[P.aZ]},
$ij:1,
$aj:function(){return[P.aZ]}}
P.cT.prototype={}
P.cU.prototype={}
P.d3.prototype={}
P.d4.prototype={}
P.df.prototype={}
P.dg.prototype={}
P.dm.prototype={}
P.dn.prototype={}
P.dH.prototype={
gk:function(a){return a.length}}
P.dI.prototype={
l:function(a,b){return P.ah(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ah(u.value[1]))}},
gL:function(a){var u=H.b([],[P.o])
this.D(a,new P.dJ(u))
return u},
gk:function(a){return a.size}}
P.dJ.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dK.prototype={
gk:function(a){return a.length}}
P.aK.prototype={}
P.f4.prototype={
gk:function(a){return a.length}}
P.cG.prototype={}
P.fv.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.v(b,a,null,null,null))
return P.ah(a.item(b))},
q:function(a,b){return this.l(a,b)},
$an:function(){return[[P.cc,,,]]},
$ij:1,
$aj:function(){return[[P.cc,,,]]}}
P.db.prototype={}
P.dc.prototype={}
T.a6.prototype={
a1:function(a,b){return!0},
h:function(a){return"all"}}
T.c1.prototype={
a1:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)if(u[s].a1(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.at.prototype={}
T.L.prototype={
a1:function(a,b){return!this.c5(0,b)},
h:function(a){return"!["+this.b4(0)+"]"}}
T.fa.prototype={
a1:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.io(this.a),t=H.io(this.b)
return u+".."+t}}
T.fj.prototype={
cc:function(a){var u,t
if(a.a.length<=0)throw H.f(P.H("May not create a Set with zero characters."))
u=new H.Z([P.B,P.aG])
for(t=new H.bj(a,a.gk(a));t.p();)u.S(0,t.d,!0)
this.a=u},
a1:function(a,b){return this.a.bu(0,b)},
h:function(a){var u=this.a
return P.ip(new H.c9(u,[H.b3(u,0)]))}}
R.cr.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.cz(this.a.i(0,b))
r.a=H.b([],[T.at])
r.c=!1
this.c.push(r)
return r},
dO:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.a1(0,a))return r}return},
h:function(a){return this.b}}
R.cx.prototype={
h:function(a){var u=H.iF(this.b,"\n","\\n"),t=H.iF(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.cy.prototype={
a4:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.q)(c),++t){s=c[t]
this.c.S(0,s,b)}},
h:function(a){return this.b}}
R.fJ.prototype={
i:function(a,b){var u=this.a.l(0,b)
if(u==null){u=new R.cr(this,b)
u.c=H.b([],[R.cz])
this.a.S(0,b,u)}return u},
A:function(a){var u,t=this.b.l(0,a)
if(t==null){t=new R.cy(a)
u=P.o
t.c=new H.Z([u,u])
this.b.S(0,a,t)}return t},
bV:function(a){var u,t,s,r,q,p,o,n,m=H.b([],[R.cx]),l=this.c,k=[P.B],j=H.b([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.b.a8(a,s)
q=l.dO(r)
if(q==null){if(t==null){j.push(r)
p=P.ip(j)
throw H.f(P.H("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.b([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.ip(j)
o=l.d
n=o.c.l(0,p)
t=new R.cx(n==null?o.b:n,p,s)}++s}}}}
R.cz.prototype={
h:function(a){return this.b.b+": "+this.b4(0)}}
O.aN.prototype={
b5:function(a){this.a=H.b([],[a])
this.c=this.b=null},
az:function(a,b){this.b=null
this.c=a},
d6:function(a){return!0},
cf:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gF:function(a){var u=this.a
return new J.N(u,u.length)},
q:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
m:function(a,b){var u,t,s=this,r=[H.iA(s,"aN",0)]
if(s.d6(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cf(t,H.b([b],r))}},
$ij:1}
O.bl.prototype={
gk:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.Y():u},
a6:function(){var u=this.b
if(u!=null)u.O(null)},
gaj:function(a){var u=this.a
if(u.length>0)return C.a.gau(u)
else return V.eM()},
bM:function(a){var u=this.a
if(a==null)u.push(V.eM())
else u.push(a)
this.a6()},
aY:function(){var u=this.a
if(u.length>0){u.pop()
this.a6()}}}
E.dL.prototype={}
E.a8.prototype={
bX:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aw(0,b,s):null
if(!J.D(q,s.x)){u=s.x
s.x=q
t=new D.z("matrix",u,q)
t.b=!0
s.a2(t)}for(r=s.y.a,r=new J.N(r,r.length);r.p();)r.d.bX(0,b)},
ae:function(a){var u,t,s,r,q,p,o=this,n=a.dx,m=o.x
n.toString
if(m==null)n.a.push(n.gaj(n))
else n.a.push(m.H(0,n.gaj(n)))
n.a6()
a.bN(o.f)
n=a.dy
u=(n&&C.a).gau(n)
if(u!=null&&o.d!=null){n=u.a
if(n==null){n=u.d
u.f
m=n?"High":"Grey"
m+="ViewDepth"
t=a.fr.l(0,m)
if(t==null){m=a.a
s=n?"High":"Grey"
s+="ViewDepth"
t=new A.e_(m,s)
t.cd(m,s)
r="uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"
q=(n?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n   vec3 clr = vec3(f, f, f);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n")+"  gl_FragColor = vec4(clr, 1.0);\n}\n"
t.c=r
t.d=q.charCodeAt(0)==0?q:q
t.e=t.bh(r,35633)
t.f=t.bh(t.d,35632)
r=m.createProgram()
t.r=r
m.attachShader(r,t.e)
m.attachShader(t.r,t.f)
m.linkProgram(t.r)
if(!m.getProgramParameter(t.r,35714)){p=m.getProgramInfoLog(t.r)
m.deleteProgram(t.r)
H.T(P.H("Failed to link shader: "+H.d(p)))}t.dt()
t.dv()
t.z=t.x.l(0,"posAttr")
t.Q=H.dB(t.y.l(0,"width"),"$ibu")
t.ch=H.dB(t.y.l(0,"stop"),"$ibu")
t.cx=H.dB(t.y.l(0,"viewObjMat"),"$ibv")
t.cy=H.dB(t.y.l(0,"projMat"),"$ibv")
if(s.length===0)H.T(P.H("May not cache a shader with no name."))
if(a.fr.bu(0,s))H.T(P.H('Shader cache already contains a shader by the name "'+s+'".'))
a.fr.S(0,s,t)}u.a=t
n=t}m=o.e
if((!(m instanceof Z.bS)?o.e=null:m)==null){n=o.d.dF(new Z.hn(a.a),$.aj())
m=n.dN($.aj())
s=u.a
m.e=s.z.c
o.e=n
n=s}m=a.a
m.useProgram(n.r)
n.x.dM()
s=u.b
r=u.c
q=n.Q
q.a.uniform1f(q.d,s-r)
r=u.c
s=n.ch
s.a.uniform1f(s.d,r)
r=a.cy
r=r.gaj(r)
s=n.cy
s.toString
s.b2(r.bT(0,!0))
s=a.cx
if(s==null){s=a.db
s=s.gaj(s)
r=a.dx
r=a.cx=s.H(0,r.gaj(r))
s=r}n=n.cx
n.toString
n.b2(s.bT(0,!0))
u.e
n=o.e
n.aQ(a)
n.ae(a)
n.em(a)
n=u.a
n.toString
m.useProgram(null)
n.x.dL()}for(n=o.y.a,n=new J.N(n,n.length);n.p();)n.d.ae(a)
a.bL()
a.dx.aY()},
a2:function(a){var u=this.z
if(u!=null)u.O(a)},
U:function(){return this.a2(null)},
bI:function(a){this.e=null
this.a2(a)},
e4:function(){return this.bI(null)},
bG:function(a){this.a2(a)},
e3:function(){return this.bG(null)},
bE:function(a){this.a2(a)},
e0:function(){return this.bE(null)},
e_:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbD(),s=[{func:1,ret:-1,args:[D.K]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bf()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.U()},
e2:function(a,b){var u,t
for(u=b.gF(b),t=this.gbD();u.p();)u.gv(u).gt().G(0,t)
this.U()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fb.prototype={
cb:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.am(Date.now(),!1)
s.y=0
s.cx=null
u=new O.bl()
t=[V.bk]
u.a=H.b([],t)
u.gt().m(0,new E.fc(s))
s.cy=u
u=new O.bl()
u.a=H.b([],t)
u.gt().m(0,new E.fd(s))
s.db=u
u=new O.bl()
u.a=H.b([],t)
u.gt().m(0,new E.fe(s))
s.dx=u
u=H.b([],[O.cu])
s.dy=u
u.push(null)
s.fr=new H.Z([P.o,A.cp])},
bN:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gau(u):a)},
bL:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fc.prototype={
$1:function(a){}}
E.fd.prototype={
$1:function(a){this.a.cx=null}}
E.fe.prototype={
$1:function(a){this.a.cx=null}}
E.cv.prototype={
b8:function(a){this.bP()},
b7:function(){return this.b8(null)},
gdR:function(){var u,t=this,s=Date.now(),r=C.d.ab(P.iT(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.am(s,!1)
return u/r},
bj:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.H()
if(typeof r!=="number")return H.aH(r)
u=C.c.bA(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.H()
t=C.c.bA(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jd(C.h,s.gef())}},
bP:function(){if(!this.ch){this.ch=!0
var u=window
C.t.cz(u)
C.t.dl(u,W.ju(new E.fH(this),P.S))}},
ee:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.bj()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.am(r,!1)
s.y=P.iT(r-s.r.a).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.a6()
r=s.db
C.a.sk(r.a,0)
r.a6()
r=s.dx
C.a.sk(r.a,0)
r.a6()
r=s.dy;(r&&C.a).sk(r,0)
s.dy.push(null)
o.ae(p.e)}s=p.z
if(s!=null)s.O(null)}catch(q){u=H.ai(q)
t=H.iB(q)
P.iE("Error: "+H.d(u))
P.iE("Stack: "+H.d(t))
throw H.f(u)}}}
E.fH.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.ee()}}}
Z.cE.prototype={}
Z.bR.prototype={
aQ:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ai(s)
t=P.H('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.d(u))
throw H.f(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.d(u.e)+"]"}}
Z.hn.prototype={}
Z.bS.prototype={
dN:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aQ:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aQ(a)},
em:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ae:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.o],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.U(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.j(p,", ")+"\nAttrs:   "+C.a.j(r,", ")}}
Z.c2.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.bq(this.c))+"'")+"]"}}
Z.cD.prototype={
gb3:function(a){var u=this.a,t=(u&$.aj().a)!==0?3:0
if((u&$.b6().a)!==0)t+=3
if((u&$.b5().a)!==0)t+=3
if((u&$.b7().a)!==0)t+=2
if((u&$.b8().a)!==0)t+=3
if((u&$.bM().a)!==0)t+=3
if((u&$.bN().a)!==0)t+=4
if((u&$.b9().a)!==0)++t
return(u&$.b4().a)!==0?t+4:t},
dC:function(a){var u,t=$.aj(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b4()
if((s&t.a)!==0)if(u===a)return t
return $.jS()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cD))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.o]),t=this.a
if((t&$.aj().a)!==0)u.push("Pos")
if((t&$.b6().a)!==0)u.push("Norm")
if((t&$.b5().a)!==0)u.push("Binm")
if((t&$.b7().a)!==0)u.push("Txt2D")
if((t&$.b8().a)!==0)u.push("TxtCube")
if((t&$.bM().a)!==0)u.push("Clr3")
if((t&$.bN().a)!==0)u.push("Clr4")
if((t&$.b9().a)!==0)u.push("Weight")
if((t&$.b4().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.j(u,"|")}}
D.dO.prototype={}
D.bf.prototype={
m:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.K]}]):u).push(b)},
G:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.J(s,b)
if(s===!0){s=t.a
u=(s&&C.a).G(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.J(s,b)
if(s===!0){s=t.b
u=(s&&C.a).G(s,b)||u}return u},
O:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.K()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.D(P.iZ(u,!0,{func:1,ret:-1,args:[D.K]}),new D.e9(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.K]}])
C.a.D(u,new D.ea(q))}return!0},
am:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.O(u)}}}}
D.e9.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.ea.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.K.prototype={}
D.c3.prototype={}
D.c4.prototype={}
D.z.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.bT.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bT))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.c7.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c7))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.ez.prototype={
e9:function(a){this.d.m(0,a.a)
return!1},
e5:function(a){this.d.G(0,a.a)
return!1}}
X.eG.prototype={
aX:function(a,b){this.r=a.a
return!1},
al:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.c2()
if(typeof u!=="number")return u.bZ()
this.r=(u&~t)>>>0
return!1},
ak:function(a,b){return!1},
ea:function(a){return!1},
cW:function(a,b,c){return}}
X.bm.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bm))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.eT.prototype={
aX:function(a,b){this.f=a.a
return!1},
al:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.c2()
if(typeof u!=="number")return u.bZ()
this.f=(u&~t)>>>0
return!1},
ak:function(a,b){return!1},
eb:function(a,b){return!1}}
X.fL.prototype={
e8:function(a){return!1},
e6:function(a){return!1},
e7:function(a){return!1}}
X.cC.prototype={
bg:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.c7(u,new X.bm(t,a.altKey,a.shiftKey))},
aa:function(a){a.shiftKey},
aP:function(a){a.shiftKey},
a0:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.T()
u=t.top
if(typeof r!=="number")return r.T()
return new V.a1(s-q,r-u)},
ag:function(a){return new V.ag(a.movementX,a.movementY)},
aN:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a1])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
q=C.c.V(r.pageX)
C.c.V(r.pageY)
p=o.left
C.c.V(r.pageX)
n.push(new V.a1(q-p,C.c.V(r.pageY)-o.top))}return n},
a_:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.bT(u,new X.bm(t,a.altKey,a.shiftKey))},
aJ:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.T()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.T()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
cR:function(a){this.f=!0},
cF:function(a){this.f=!1},
cL:function(a){if(this.f&&this.aJ(a))a.preventDefault()},
cV:function(a){var u
if(!this.f)return
u=this.bg(a)
this.b.e9(u)},
cT:function(a){var u
if(!this.f)return
u=this.bg(a)
this.b.e5(u)},
cY:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aa(a)
if(r.x){u=r.a_(a)
t=r.ag(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.a_(a)
s=r.a0(a)
if(r.c.aX(u,s))a.preventDefault()},
d1:function(a){var u,t,s,r=this
r.aa(a)
u=r.a_(a)
if(r.x){t=r.ag(a)
if(r.d.al(u,t))a.preventDefault()
return}if(r.r)return
s=r.a0(a)
if(r.c.al(u,s))a.preventDefault()},
cP:function(a){var u,t,s,r=this
if(!r.aJ(a)){r.aa(a)
u=r.a_(a)
if(r.x){t=r.ag(a)
if(r.d.al(u,t))a.preventDefault()
return}if(r.r)return
s=r.a0(a)
if(r.c.al(u,s))a.preventDefault()}},
d_:function(a){var u,t,s,r=this
r.aa(a)
u=r.a_(a)
if(r.x){t=r.ag(a)
if(r.d.ak(u,t))a.preventDefault()
return}if(r.r)return
s=r.a0(a)
if(r.c.ak(u,s))a.preventDefault()},
cN:function(a){var u,t,s,r=this
if(!r.aJ(a)){r.aa(a)
u=r.a_(a)
if(r.x){t=r.ag(a)
if(r.d.ak(u,t))a.preventDefault()
return}if(r.r)return
s=r.a0(a)
if(r.c.ak(u,s))a.preventDefault()}},
d3:function(a){var u,t,s=this
s.aa(a)
u=new V.ag((a&&C.r).gdJ(a),C.r.gdK(a)).I(0,180)
if(s.x){if(s.d.ea(u))a.preventDefault()
return}if(s.r)return
t=s.a0(a)
if(s.c.eb(u,t))a.preventDefault()},
d5:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a_(s.y)
t=s.a0(s.y)
s.d.cW(u,t,r)}},
df:function(a){var u,t=this
t.a.focus()
t.f=!0
t.aP(a)
u=t.aN(a)
if(t.e.e8(u))a.preventDefault()},
da:function(a){var u
this.aP(a)
u=this.aN(a)
if(this.e.e6(u))a.preventDefault()},
dd:function(a){var u
this.aP(a)
u=this.aN(a)
if(this.e.e7(u))a.preventDefault()}}
V.aO.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aO))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.r(u.a,3,0)+", "+V.r(u.b,3,0)+", "+V.r(u.c,3,0)+", "+V.r(u.d,3,0)+"]"}}
V.e8.prototype={}
V.bk.prototype={
bT:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.A])
return t},
H:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ab(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bk))return!1
u=b.a
t=$.y().a
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
h:function(a){return this.E()},
w:function(a){var u,t,s,r,q,p=this,o=[P.A],n=V.hZ(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.hZ(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.hZ(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.hZ(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.e(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.e(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.e(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.e(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.e(n,1)
q=q+n[1]+", "
if(1>=t)return H.e(m,1)
q=q+m[1]+", "
if(1>=s)return H.e(l,1)
q=q+l[1]+", "
if(1>=r)return H.e(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.e(n,2)
u=u+n[2]+", "
if(2>=t)return H.e(m,2)
u=u+m[2]+", "
if(2>=s)return H.e(l,2)
u=u+l[2]+", "
if(2>=r)return H.e(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.e(n,3)
q=q+n[3]+", "
if(3>=t)return H.e(m,3)
q=q+m[3]+", "
if(3>=s)return H.e(l,3)
q=q+l[3]+", "
if(3>=r)return H.e(k,3)
return u+(q+k[3]+"]")},
E:function(){return this.w("")}}
V.a1.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+"]"}}
V.ad.prototype={
T:function(a,b){return new V.ad(this.a-b.a,this.b-b.b,this.c-b.c)},
H:function(a,b){return new V.ad(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+", "+V.r(this.c,3,0)+"]"}}
V.cn.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cn))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.r(u.a,3,0)+", "+V.r(u.b,3,0)+", "+V.r(u.c,3,0)+", "+V.r(u.d,3,0)+"]"}}
V.ag.prototype={
aV:function(a){var u,t=this.a
if(typeof t!=="number")return t.H()
u=this.b
if(typeof u!=="number")return u.H()
return Math.sqrt(t*t+u*u)},
I:function(a,b){var u,t
if(Math.abs(b-0)<$.y().a){u=$.jh
return u==null?$.jh=new V.ag(0,0):u}u=this.a
if(typeof u!=="number")return u.I()
t=this.b
if(typeof t!=="number")return t.I()
return new V.ag(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.T()
if(typeof t!=="number")return H.aH(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.T()
if(typeof t!=="number")return H.aH(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+"]"}}
V.C.prototype={
aV:function(a){return Math.sqrt(this.K(this))},
K:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ai:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.C(u*t-s*r,s*q-p*t,p*r-u*q)},
M:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
ay:function(a){return new V.C(-this.a,-this.b,-this.c)},
H:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
I:function(a,b){if(Math.abs(b-0)<$.y().a)return V.hb()
return new V.C(this.a/b,this.b/b,this.c/b)},
dU:function(){var u=$.y().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+", "+V.r(this.c,3,0)+"]"}}
U.bV.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.Y():u},
aw:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bV))return!1
return J.D(this.a,b.a)},
h:function(a){return"Constant: "+this.a.w("          ")}}
U.bg.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.Y():u},
N:function(a){var u=this.e
if(u!=null)u.O(a)},
ci:function(){return this.N(null)},
cD:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gb9(),s=[{func:1,ret:-1,args:[D.K]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.c3()
u.b=!0
this.N(u)},
d8:function(a,b){var u,t
for(u=b.gF(b),t=this.gb9();u.p();)u.gv(u).gt().G(0,t)
u=new D.c4()
u.b=!0
this.N(u)},
aw:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.b0()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.N(r,r.length),u=null;r.p();){q=r.d
if(q!=null){t=q.aw(0,b,c)
if(t!=null)u=u==null?t:t.H(0,u)}}s.f=u==null?V.eM():u
r=s.e
if(r!=null)r.am(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bg))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.D(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$aj:function(){return[U.a0]},
$aaN:function(){return[U.a0]},
$ia0:1}
U.a0.prototype={}
U.co.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.Y():u},
N:function(a){var u=this.y
if(u!=null)u.O(a)},
sbY:function(a){var u
a=V.iG(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.y().a)){this.a=a
u=new D.z("yaw",u,a)
u.b=!0
this.N(u)}},
sbK:function(a,b){var u
b=V.iG(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.y().a)){this.b=b
u=new D.z("pitch",u,b)
u.b=!0
this.N(u)}},
sbQ:function(a){var u
a=V.iG(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.y().a)){this.c=a
u=new D.z("roll",u,a)
u.b=!0
this.N(u)}},
sby:function(a){var u=this.d
if(!(Math.abs(u-a)<$.y().a)){this.d=a
u=new D.z("deltaYaw",u,a)
u.b=!0
this.N(u)}},
sbw:function(a){var u=this.e
if(!(Math.abs(u-a)<$.y().a)){this.e=a
u=new D.z("deltaPitch",u,a)
u.b=!0
this.N(u)}},
sbx:function(a){var u=this.f
if(!(Math.abs(u-a)<$.y().a)){this.f=a
u=new D.z("deltaRoll",u,a)
u.b=!0
this.N(u)}},
aw:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sbY(s.a+s.d*b.y)
s.sbK(0,s.b+s.e*b.y)
s.sbQ(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
r=V.ab(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)
q=s.b
u=Math.cos(q)
t=Math.sin(q)
r=r.H(0,V.ab(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1))
q=s.a
u=Math.cos(q)
t=Math.sin(q)
s.x=r.H(0,V.ab(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1))
r=s.y
if(r!=null)r.am(0)}return s.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.co))return!1
u=r.a
t=b.a
s=$.y().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotater: ["+V.r(u.a,3,0)+", "+V.r(u.b,3,0)+", "+V.r(u.c,3,0)+"], ["+V.r(u.d,3,0)+", "+V.r(u.e,3,0)+", "+V.r(u.f,3,0)+"]"}}
M.bZ.prototype={
Z:function(a){var u=this.y
if(u!=null)u.O(a)},
cj:function(){return this.Z(null)},
cH:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gW(),s=[{func:1,ret:-1,args:[D.K]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bf()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.c3()
u.b=!0
this.Z(u)},
cJ:function(a,b){var u,t
for(u=b.gF(b),t=this.gW();u.p();)u.gv(u).gt().G(0,t)
u=new D.c4()
u.b=!0
this.Z(u)},
sbS:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().G(0,t.gW())
u=t.d
t.d=a
if(a!=null)a.gt().m(0,t.gW())
s=new D.z("technique",u,t.d)
s.b=!0
t.Z(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.Y():u},
ae:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.bN(a1.d)
u=a1.c
u.toString
t=a2.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.aH(s)
o=C.c.V(p*s)
p=q.b
if(typeof r!=="number")return H.aH(r)
n=C.c.V(p*r)
p=C.c.V(q.c*s)
a2.c=p
q=C.c.V(q.d*r)
a2.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=a1.b
t=a2.c
q=a2.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.ab(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.bM(i)
t=$.j2
if(t==null){t=$.j4
if(t==null)t=$.j4=new V.ad(0,0,0)
q=$.jk
if(q==null)q=$.jk=new V.C(0,1,0)
p=$.ji
if(p==null)p=$.ji=new V.C(0,0,-1)
h=p.I(0,Math.sqrt(p.K(p)))
q=q.ai(h)
g=q.I(0,Math.sqrt(q.K(q)))
f=h.ai(g)
e=new V.C(t.a,t.b,t.c)
d=g.ay(0).K(e)
c=f.ay(0).K(e)
b=h.ay(0).K(e)
t=V.ab(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.j2=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.H(0,a)}a2.db.bM(a)
for(u=a1.e.a,u=new J.N(u,u.length);u.p();)u.d.bX(0,a2)
for(u=a1.e.a,u=new J.N(u,u.length);u.p();)u.d.ae(a2)
a1.b.toString
a2.cy.aY()
a2.db.aY()
a1.c.toString
a2.bL()}}
A.bP.prototype={}
A.dG.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
dM:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dL:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.e_.prototype={}
A.cp.prototype={
cd:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bh:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.H("Error compiling shader '"+H.d(s)+"': "+H.d(u)))}return s},
dt:function(){var u,t,s,r=this,q=H.b([],[A.bP]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.aH(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.bP(p,t.name,s))}r.x=new A.dG(q)},
dv:function(){var u,t,s,r=this,q=H.b([],[A.cA]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.aH(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.dI(t.type,t.size,t.name,s))}r.y=new A.h_(q)},
a9:function(a,b,c){var u=this.a
if(a===1)return new A.fS(u,b,c)
else return A.ir(u,this.r,b,a,c)},
cu:function(a,b,c){var u=this.a
if(a===1)return new A.h2(u,b,c)
else return A.ir(u,this.r,b,a,c)},
cv:function(a,b,c){var u=this.a
if(a===1)return new A.h3(u,b,c)
else return A.ir(u,this.r,b,a,c)},
ar:function(a,b){return new P.cN(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
dI:function(a,b,c,d){var u=this
switch(a){case 5120:return u.a9(b,c,d)
case 5121:return u.a9(b,c,d)
case 5122:return u.a9(b,c,d)
case 5123:return u.a9(b,c,d)
case 5124:return u.a9(b,c,d)
case 5125:return u.a9(b,c,d)
case 5126:return new A.bu(u.a,c,d)
case 35664:return new A.fU(u.a,c,d)
case 35665:return new A.fW(u.a,c,d)
case 35666:return new A.fY(u.a,c,d)
case 35667:return new A.fV(u.a,c,d)
case 35668:return new A.fX(u.a,c,d)
case 35669:return new A.fZ(u.a,c,d)
case 35674:return new A.h0(u.a,c,d)
case 35675:return new A.h1(u.a,c,d)
case 35676:return new A.bv(u.a,c,d)
case 35678:return u.cu(b,c,d)
case 35680:return u.cv(b,c,d)
case 35670:throw H.f(u.ar("BOOL",c))
case 35671:throw H.f(u.ar("BOOL_VEC2",c))
case 35672:throw H.f(u.ar("BOOL_VEC3",c))
case 35673:throw H.f(u.ar("BOOL_VEC4",c))
default:throw H.f(P.H("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.cA.prototype={}
A.h_.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
h:function(a){return this.E()},
E:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.fS.prototype={
h:function(a){return"Uniform1i: "+H.d(this.c)}}
A.fV.prototype={
h:function(a){return"Uniform2i: "+H.d(this.c)}}
A.fX.prototype={
h:function(a){return"Uniform3i: "+H.d(this.c)}}
A.fZ.prototype={
h:function(a){return"Uniform4i: "+H.d(this.c)}}
A.fT.prototype={
h:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.bu.prototype={
h:function(a){return"Uniform1f: "+H.d(this.c)}}
A.fU.prototype={
h:function(a){return"Uniform2f: "+H.d(this.c)}}
A.fW.prototype={
h:function(a){return"Uniform3f: "+H.d(this.c)}}
A.fY.prototype={
h:function(a){return"Uniform4f: "+H.d(this.c)}}
A.h0.prototype={
h:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.h1.prototype={
h:function(a){return"UniformMat3: "+H.d(this.c)}}
A.bv.prototype={
b2:function(a){var u=new Float32Array(H.it(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.d(this.c)}}
A.h2.prototype={
h:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.h3.prototype={
h:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.i9.prototype={
$1:function(a){return new V.ad(Math.cos(a),Math.sin(a),0)}}
F.hX.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.iJ(n.$1(o),m)
m=J.iJ(n.$1(o+3.141592653589793/p.c),m).T(0,l)
m=new V.C(m.a,m.b,m.c)
u=m.I(0,Math.sqrt(m.K(m)))
n=$.jj
if(n==null){n=new V.C(1,0,0)
$.jj=n
t=n}else t=n
if(!J.D(u,t)){n=$.jl
if(n==null){n=new V.C(0,0,1)
$.jl=n
t=n}else t=n}n=u.ai(t)
s=n.I(0,Math.sqrt(n.K(n)))
n=s.ai(u)
t=n.I(0,Math.sqrt(n.K(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.H(0,n*m)
m=s.H(0,q*m)
m=new V.ad(l.a+(n.a-m.a),l.b+(n.b-m.b),l.c+(n.c-m.c))
if(!J.D(a.f,m)){a.f=m
n=a.a
if(n!=null)n.U()}}}
F.aQ.prototype={
at:function(){var u=this
if(!u.gbz()){C.a.G(u.a.a.d.b,u)
u.a.a.U()}u.di()
u.dj()
u.dk()},
dq:function(a){this.a=a
a.d.b.push(this)},
dr:function(a){this.b=a
a.d.c.push(this)},
ds:function(a){this.c=a
a.d.d.push(this)},
di:function(){var u=this.a
if(u!=null){C.a.G(u.d.b,this)
this.a=null}},
dj:function(){var u=this.b
if(u!=null){C.a.G(u.d.c,this)
this.b=null}},
dk:function(){var u=this.c
if(u!=null){C.a.G(u.d.d,this)
this.c=null}},
gbz:function(){return this.a==null||this.b==null||this.c==null},
cq:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.hb()
if(q!=null)s=s.M(0,q)
if(u!=null)s=s.M(0,u)
if(t!=null)s=s.M(0,t)
if(s.dU())return
return s.I(0,Math.sqrt(s.K(s)))},
cr:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.T(0,q)
r=new V.C(r.a,r.b,r.c)
s=r.I(0,Math.sqrt(r.K(r)))
r=t.T(0,q)
r=new V.C(r.a,r.b,r.c)
r=s.ai(r.I(0,Math.sqrt(r.K(r))))
return r.I(0,Math.sqrt(r.K(r)))},
aR:function(){var u,t=this
if(t.d!=null)return!0
u=t.cq()
if(u==null){u=t.cr()
if(u==null)return!1}t.d=u
t.a.a.U()
return!0},
gbt:function(a){var u=this
if(J.D(u.a,u.b))return!0
if(J.D(u.b,u.c))return!0
if(J.D(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.E()},
w:function(a){var u,t,s=this
if(s.gbz())return a+"disposed"
u=a+C.b.a3(J.U(s.a.e),0)+", "+C.b.a3(J.U(s.b.e),0)+", "+C.b.a3(J.U(s.c.e),0)+" {"
t=s.d
u=(t!=null?u+(t.h(0)+", "):u+"-, ")+"-}"
return u},
E:function(){return this.w("")}}
F.ec.prototype={}
F.fs.prototype={
aW:function(a,b,c){var u,t=b.a
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
if(t==u.e){t=b.c
t.a.a.C()
t=t.e
u=c.c
u.a.a.C()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.c
u.a.a.C()
if(t==u.e){t=b.c
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.C()
t=t.e
u=c.c
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
if(t==u.e){t=b.c
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.c8.prototype={}
F.eB.prototype={}
F.fR.prototype={}
F.ck.prototype={}
F.fk.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.Y():u},
dY:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.b3(o,0)])
for(o=[F.bw];u.length!==0;){t=C.a.gdP(u)
C.a.bO(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.aW(0,t,q)){s.push(q)
C.a.bO(u,r)}}if(s.length>1)b.dX(s)}}p.a.C()
p.c.aZ()
p.d.aZ()
p.b.ed()
p.c.b_(new F.fR())
p.d.b_(new F.fs())
o=p.e
if(o!=null)o.am(0)},
dF:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aj()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b6().a)!==0)++s
if((t&$.b5().a)!==0)++s
if((t&$.b7().a)!==0)++s
if((t&$.b8().a)!==0)++s
if((t&$.bM().a)!==0)++s
if((t&$.bN().a)!==0)++s
if((t&$.b9().a)!==0)++s
if((t&$.b4().a)!==0)++s
r=a4.gb3(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.A])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.bR])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.dC(m)
k=l.gb3(l)
if(m>=t)return H.e(o,m)
o[m]=new Z.bR(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.e(i,j)
h=i[j].dW(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.e(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.it(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bS(new Z.cE(a1,d),o)
c.b=H.b([],[Z.c2])
a0.b.b
a0.c.b
if(a0.d.b.length!==0){b=H.b([],[P.B])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.C()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.e(t,m)
t=t[m].b
t.a.a.C()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.e(t,m)
t=t[m].c
t.a.a.C()
b.push(t.e)}a=Z.ky(u,34963,b)
c.b.push(new Z.c2(4,b.length,a))}return c},
h:function(a){var u=this,t=H.b([],[P.o])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.w("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.w("   "))}return C.a.j(t,"\n")},
U:function(){var u=this.e
if(u!=null)u.O(null)}}
F.fl.prototype={
dA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aQ])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.e(c,s)
m=c[s];++s
if(s>=n)return H.e(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.e(c,k)
j=c[k]
if(t<0||t>=n)return H.e(c,t)
i=c[t]
n=u.a
if(p){n.m(0,m)
u.a.m(0,l)
u.a.m(0,j)
h.push(F.eb(m,l,j))
u.a.m(0,m)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.eb(m,j,i))}else{n.m(0,l)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.eb(l,j,i))
u.a.m(0,l)
u.a.m(0,i)
u.a.m(0,m)
h.push(F.eb(l,i,m))}p=!p}r=!r}return h},
gk:function(a){return this.b.length},
b_:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.l(0,q)
for(o=q-1;o>=0;--o){n=r.d.l(0,o)
if(a.aW(0,p,n)){p.at()
break}}}}},
aZ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gbt(s)
if(t)s.at()}},
aS:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].aR())s=!1
return s},
h:function(a){return this.E()},
w:function(a){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].w(a))
return C.a.j(r,"\n")},
E:function(){return this.w("")}}
F.fm.prototype={
gk:function(a){return 0},
b_:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.l(0,q)}},
aZ:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.e(t,u)
s=t[u]
t=s.gbt(s)
if(t)s.at()}},
h:function(a){return this.E()},
w:function(a){var u,t,s=H.b([],[P.o])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.e(t,u)
s.push(t[u].w(a+(""+u+". ")))}return C.a.j(s,"\n")},
E:function(){return this.w("")}}
F.fn.prototype={
gk:function(a){return 0},
ed:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.e(t,u)
t=t[u].geq()
t=t.gep(t)
if(t.gk(t).eo(0,1)){t=this.b
return H.e(t,u)
t[u].at()}}},
h:function(a){return this.E()},
w:function(a){var u,t,s=H.b([],[P.o])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.e(u,t)
s.push(u[t].w(a))}return C.a.j(s,"\n")},
E:function(){return this.w("")}}
F.bw.prototype={
bv:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.jn(u.cx,r,o,t,s,q,p,a,n)},
dW:function(a){var u,t,s=this
if(a.n(0,$.aj())){u=s.f
t=[P.A]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.b6())){u=s.r
t=[P.A]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.b5())){u=H.b([0,0,1],[P.A])
return u}else if(a.n(0,$.b7())){u=s.y
t=[P.A]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.b8())){u=H.b([0,0,0],[P.A])
return u}else if(a.n(0,$.bM())){u=s.Q
t=[P.A]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.bN())){u=s.Q
t=[P.A]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.b9()))return H.b([s.ch],[P.A])
else if(a.n(0,$.b4())){u=H.b([-1,-1,-1,-1],[P.A])
return u}else return H.b([],[P.A])},
aR:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.hb()
t.d.D(0,new F.hl(s))
s=s.a
t.r=s.I(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.U()
s=t.a.e
if(s!=null)s.am(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.E()},
w:function(a){var u,t,s=this,r="-",q=H.b([],[P.o])
q.push(C.b.a3(J.U(s.e),0))
u=s.f
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(r)
u=s.y
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(r)
u=s.Q
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(V.r(s.ch,3,0))
q.push(r)
t=C.a.j(q,", ")
return a+"{"+t+"}"},
E:function(){return this.w("")}}
F.hl.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.M(0,t)}}}
F.hc.prototype={
C:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
m:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.H("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.U()
return!0},
bo:function(a,b){var u=null,t=F.jn(u,u,a,u,u,b,u,u,0)
this.m(0,t)
return t},
gk:function(a){return this.c.length},
aS:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].aR()
return!0},
h:function(a){return this.E()},
w:function(a){var u,t,s,r
this.C()
u=H.b([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)u.push(t[r].w(a))
return C.a.j(u,"\n")},
E:function(){return this.w("")}}
F.hd.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
l:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.e(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.e(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.e(t,b)
return t[b]},
D:function(a,b){var u=this
C.a.D(u.b,b)
C.a.D(u.c,new F.he(u,b))
C.a.D(u.d,new F.hf(u,b))},
h:function(a){return this.E()},
E:function(){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].w(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].w(""))
return C.a.j(r,"\n")}}
F.he.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.hf.prototype={
$1:function(a){var u=this.a
if(!J.D(a.a,u)&&!J.D(a.b,u))this.b.$1(a)}}
F.hg.prototype={
gk:function(a){return 0},
l:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.e(u,t)
return u[t]}else{u=this.b
return H.e(u,b)
return u[b]}},
h:function(a){return this.E()},
E:function(){var u,t,s=H.b([],[P.o])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.e(u,t)
s.push(u[t].w(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.e(u,t)
s.push(u[t].w(""))}return C.a.j(s,"\n")}}
F.hi.prototype={}
F.hh.prototype={
aW:function(a,b,c){return J.D(b.f,c.f)}}
F.hj.prototype={}
F.f1.prototype={
dX:function(a){var u,t,s,r,q,p,o,n,m=V.hb()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.C(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.I(0,Math.sqrt(m.K(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.I(0,Math.sqrt(p*p+o*o+n*n))}if(!J.D(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.O(null)}}}return}}
F.hk.prototype={
gk:function(a){return 0},
h:function(a){return this.E()},
E:function(){var u,t,s=H.b([],[P.o])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.e(u,t)
s.push(u[t].w(""))}return C.a.j(s,"\n")}}
O.dZ.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.Y():u},
aM:function(a){var u=this.r
if(u!=null)u.O(a)}}
O.cu.prototype={}
X.id.prototype={}
X.ek.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.Y():u}}
X.cj.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.Y():u},
a7:function(a){var u=this.f
if(u!=null)u.O(a)},
cn:function(){return this.a7(null)},
sbC:function(a){var u,t,s=this
if(!J.D(s.b,a)){u=s.b
if(u!=null)u.gt().G(0,s.gba())
t=s.b
s.b=a
if(a!=null)a.gt().m(0,s.gba())
u=new D.z("mover",t,s.b)
u.b=!0
s.a7(u)}}}
X.fD.prototype={}
V.bU.prototype={
ao:function(a){this.b=new P.ep(C.F)
this.c=null
this.d=H.b([],[[P.aT,W.Q]])},
u:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.Q]))
u=a.split("\n")
for(l=u.length,t=[W.Q],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.ct(q,0,q.length)
n=o==null?q:o
C.D.c3(p,H.iF(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gau(m.d).push(p)}},
bJ:function(a,b){var u,t,s,r,q=this
q.d=H.b([],[[P.aT,W.Q]])
u=C.a.j(b,"\n")
t=q.c
for(t=(t==null?q.c=q.as():t).bV(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)q.av(t[r])}}
V.i7.prototype={
$1:function(a){var u=C.c.bU(this.a.gdR(),2)
if(u!=="0.00")P.iE(u+" fps")}}
V.dX.prototype={
av:function(a){var u=this
switch(a.a){case"Class":u.u(a.b,"#551")
break
case"Comment":u.u(a.b,"#777")
break
case"Id":u.u(a.b,"#111")
break
case"Num":u.u(a.b,"#191")
break
case"Reserved":u.u(a.b,"#119")
break
case"String":u.u(a.b,"#171")
break
case"Symbol":u.u(a.b,"#616")
break
case"Type":u.u(a.b,"#B11")
break
case"Whitespace":u.u(a.b,"#111")
break}},
as:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.fK()
a1.c=a1.i(0,r)
u=a1.i(0,r).j(0,q)
t=T.m(new H.l("_"))
u.a.push(t)
t=T.x("a","z")
u.a.push(t)
t=T.x("A","Z")
u.a.push(t)
t=a1.i(0,q).j(0,q)
u=T.m(new H.l("_"))
t.a.push(u)
u=T.x("0","9")
t.a.push(u)
u=T.x("a","z")
t.a.push(u)
u=T.x("A","Z")
t.a.push(u)
u=a1.i(0,r).j(0,p)
t=T.x("0","9")
u.a.push(t)
t=a1.i(0,p).j(0,p)
u=T.x("0","9")
t.a.push(u)
u=a1.i(0,p).j(0,o)
t=T.m(new H.l("."))
u.a.push(t)
t=a1.i(0,o).j(0,n)
u=T.x("0","9")
t.a.push(u)
u=a1.i(0,n).j(0,n)
t=T.x("0","9")
u.a.push(t)
t=a1.i(0,r).j(0,m)
u=T.m(new H.l(l))
t.a.push(u)
u=a1.i(0,m).j(0,m)
t=T.m(new H.l(l))
u.a.push(t)
t=a1.i(0,r).j(0,k)
u=T.m(new H.l('"'))
t.a.push(u)
u=a1.i(0,k).j(0,j)
t=T.m(new H.l('"'))
u.a.push(t)
t=a1.i(0,k).j(0,i)
u=T.m(new H.l("\\"))
t.a.push(u)
u=a1.i(0,i).j(0,k)
t=T.m(new H.l('"'))
u.a.push(t)
a1.i(0,k).j(0,k).a.push(new T.a6())
t=a1.i(0,r).j(0,h)
u=T.m(new H.l("'"))
t.a.push(u)
u=a1.i(0,h).j(0,g)
t=T.m(new H.l("'"))
u.a.push(t)
t=a1.i(0,h).j(0,f)
u=T.m(new H.l("\\"))
t.a.push(u)
u=a1.i(0,f).j(0,h)
t=T.m(new H.l("'"))
u.a.push(t)
a1.i(0,h).j(0,h).a.push(new T.a6())
t=a1.i(0,r).j(0,e)
u=T.m(new H.l("/"))
t.a.push(u)
u=a1.i(0,e).j(0,d)
t=T.m(new H.l("/"))
u.a.push(t)
t=a1.i(0,d).j(0,c)
u=T.m(new H.l("\n"))
t.a.push(u)
u=a1.i(0,d).j(0,d)
t=new T.L()
s=[T.at]
t.a=H.b([],s)
u.a.push(t)
u=T.m(new H.l("\n"))
t.a.push(u)
u=a1.i(0,e).j(0,b)
t=T.m(new H.l("*"))
u.a.push(t)
t=a1.i(0,b).j(0,a)
u=T.m(new H.l("*"))
t.a.push(u)
u=a1.i(0,a).j(0,b)
t=new T.L()
t.a=H.b([],s)
u.a.push(t)
u=T.m(new H.l("*"))
t.a.push(u)
u=a1.i(0,a).j(0,c)
t=T.m(new H.l("/"))
u.a.push(t)
t=a1.i(0,r).j(0,a0)
u=T.m(new H.l(" \n\t"))
t.a.push(u)
u=a1.i(0,a0).j(0,a0)
t=T.m(new H.l(" \n\t"))
u.a.push(t)
t=a1.i(0,p)
t.d=t.a.A("Num")
t=a1.i(0,n)
t.d=t.a.A("Num")
t=a1.i(0,m)
t.d=t.a.A("Symbol")
t=a1.i(0,j)
t.d=t.a.A("String")
t=a1.i(0,g)
t.d=t.a.A("String")
t=a1.i(0,c)
t.d=t.a.A(d)
t=a1.i(0,a0)
t.d=t.a.A(a0)
t=a1.i(0,q)
t=t.d=t.a.A(q)
u=[P.o]
t.a4(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.a4(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.a4(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.em.prototype={
av:function(a){var u=this
switch(a.a){case"Builtin":u.u(a.b,"#411")
break
case"Comment":u.u(a.b,"#777")
break
case"Id":u.u(a.b,"#111")
break
case"Num":u.u(a.b,"#191")
break
case"Preprocess":u.u(a.b,"#737")
break
case"Reserved":u.u(a.b,"#119")
break
case"Symbol":u.u(a.b,"#611")
break
case"Type":u.u(a.b,"#171")
break
case"Whitespace":u.u(a.b,"#111")
break}},
as:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.fK()
e.c=e.i(0,r)
u=e.i(0,r).j(0,q)
t=T.m(new H.l("_"))
u.a.push(t)
t=T.x("a","z")
u.a.push(t)
t=T.x("A","Z")
u.a.push(t)
t=e.i(0,q).j(0,q)
u=T.m(new H.l("_"))
t.a.push(u)
u=T.x("0","9")
t.a.push(u)
u=T.x("a","z")
t.a.push(u)
u=T.x("A","Z")
t.a.push(u)
u=e.i(0,r).j(0,p)
t=T.x("0","9")
u.a.push(t)
t=e.i(0,p).j(0,p)
u=T.x("0","9")
t.a.push(u)
u=e.i(0,p).j(0,o)
t=T.m(new H.l("."))
u.a.push(t)
t=e.i(0,o).j(0,n)
u=T.x("0","9")
t.a.push(u)
u=e.i(0,n).j(0,n)
t=T.x("0","9")
u.a.push(t)
t=e.i(0,r).j(0,m)
u=T.m(new H.l(l))
t.a.push(u)
u=e.i(0,m).j(0,m)
t=T.m(new H.l(l))
u.a.push(t)
t=e.i(0,r).j(0,k)
u=T.m(new H.l("/"))
t.a.push(u)
u=e.i(0,k).j(0,j)
t=T.m(new H.l("/"))
u.a.push(t)
e.i(0,k).j(0,m).a.push(new T.a6())
t=e.i(0,j).j(0,i)
u=T.m(new H.l("\n"))
t.a.push(u)
u=e.i(0,j).j(0,j)
t=new T.L()
s=[T.at]
t.a=H.b([],s)
u.a.push(t)
u=T.m(new H.l("\n"))
t.a.push(u)
u=e.i(0,r).j(0,h)
t=T.m(new H.l("#"))
u.a.push(t)
t=e.i(0,h).j(0,h)
u=new T.L()
u.a=H.b([],s)
t.a.push(u)
t=T.m(new H.l("\n"))
u.a.push(t)
t=e.i(0,h).j(0,g)
u=T.m(new H.l("\n"))
t.a.push(u)
u=e.i(0,r).j(0,f)
t=T.m(new H.l(" \n\t"))
u.a.push(t)
t=e.i(0,f).j(0,f)
u=T.m(new H.l(" \n\t"))
t.a.push(u)
u=e.i(0,p)
u.d=u.a.A("Num")
u=e.i(0,n)
u.d=u.a.A("Num")
u=e.i(0,m)
u.d=u.a.A("Symbol")
u=e.i(0,i)
u.d=u.a.A(j)
u=e.i(0,g)
u.d=u.a.A(h)
u=e.i(0,f)
u.d=u.a.A(f)
u=e.i(0,q)
u=u.d=u.a.A(q)
t=[P.o]
u.a4(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.a4(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.a4(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.en.prototype={
av:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.u(a.b,"#911")
u.u("=",t)
break
case"Id":u.u(a.b,t)
break
case"Other":u.u(a.b,t)
break
case"Reserved":u.u(a.b,"#119")
break
case"String":u.u(a.b,"#171")
break
case"Symbol":u.u(a.b,"#616")
break}},
as:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.fK()
l.c=l.i(0,s)
u=l.i(0,s).j(0,r)
t=T.m(new H.l("_"))
u.a.push(t)
t=T.x("a","z")
u.a.push(t)
t=T.x("A","Z")
u.a.push(t)
t=l.i(0,r).j(0,r)
u=T.m(new H.l("_"))
t.a.push(u)
u=T.x("0","9")
t.a.push(u)
u=T.x("a","z")
t.a.push(u)
u=T.x("A","Z")
t.a.push(u)
u=l.i(0,r).j(0,q)
t=T.m(new H.l("="))
u.a.push(t)
u.c=!0
u=l.i(0,s).j(0,p)
t=T.m(new H.l("</\\-!>="))
u.a.push(t)
t=l.i(0,p).j(0,p)
u=T.m(new H.l("</\\-!>="))
t.a.push(u)
u=l.i(0,s).j(0,o)
t=T.m(new H.l('"'))
u.a.push(t)
t=l.i(0,o).j(0,n)
u=T.m(new H.l('"'))
t.a.push(u)
u=l.i(0,o).j(0,"EscStr")
t=T.m(new H.l("\\"))
u.a.push(t)
t=l.i(0,"EscStr").j(0,o)
u=T.m(new H.l('"'))
t.a.push(u)
l.i(0,o).j(0,o).a.push(new T.a6())
l.i(0,s).j(0,m).a.push(new T.a6())
u=l.i(0,m).j(0,m)
t=new T.L()
t.a=H.b([],[T.at])
u.a.push(t)
u=T.m(new H.l('</\\-!>=_"'))
t.a.push(u)
u=T.x("a","z")
t.a.push(u)
u=T.x("A","Z")
t.a.push(u)
u=l.i(0,p)
u.d=u.a.A("Symbol")
u=l.i(0,n)
u.d=u.a.A("String")
u=l.i(0,r)
t=u.a.A(r)
u.d=t
t.a4(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.o]))
t=l.i(0,q)
t.d=t.a.A(q)
t=l.i(0,m)
t.d=t.a.A(m)
return l}}
V.f7.prototype={
bJ:function(a,b){this.d=H.b([],[[P.aT,W.Q]])
this.u(C.a.j(b,"\n"),"#111")},
av:function(a){},
as:function(){return}}
V.fo.prototype={
ce:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.F(q,"scroll",new V.fq(o),!1)},
bp:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.du()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.bV(C.a.dV(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
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
if(H.li(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.jr(C.o,n,C.f,!1)
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
c_:function(a){var u,t,s,r=new V.dX("dart")
r.ao("dart")
u=new V.em("glsl")
u.ao("glsl")
t=new V.en("html")
t.ao("html")
s=C.a.dQ(H.b([r,u,t],[V.bU]),new V.fr(a))
if(s!=null)return s
r=new V.f7("plain")
r.ao("plain")
return r},
bn:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.B])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.iy(s).aA(s,"+")){b0[t]=C.b.aB(s,1)
a6.push(1)
u=!0}else if(C.b.aA(s,"-")){b0[t]=C.b.aB(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.c_(a8)
r.bJ(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.jr(C.o,a7,C.f,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.iL()
j.href="#"+n
j.textContent=a7
k.appendChild(j)
l.appendChild(k)
m.appendChild(l)
o.appendChild(m)
if(u)for(i=a9,h=i,t=0;g=r.d,t<g.length;++t){s=g[t]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className="codeLineNums codeLineLight"
d=q.createElement("td")
d.className=a4
if(t>=a6.length)return H.e(a6,t)
c=a6[t]
if(c===0){++h;++i
e.textContent=""+h
d.textContent=""+i}else if(c>0){f.className="codeTableRow codeLineLightGreen"
e.className="codeLineNums codeLineGreen codeLineCenter"
d.className="codeLineNums codeLineGreen";++i
e.textContent="+"
d.textContent=""+i}else if(c<0){f.className="codeTableRow codeLineLightRed"
e.className="codeLineNums codeLineRed"
d.className="codeLineNums codeLineRed codeLineCenter";++h
e.textContent=""+h
d.textContent="-"}b=q.createElement("td")
b.className=a5
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.q)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.q)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gF(s);a2.p();)d.appendChild(a2.gv(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
du:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.fK()
u.c=u.i(0,q)
t=u.i(0,q).j(0,p)
s=T.m(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.i(0,p).j(0,p)
s=new T.L()
r=[T.at]
s.a=H.b([],r)
t.a.push(s)
t=T.m(new H.l("*"))
s.a.push(t)
t=u.i(0,p).j(0,"BoldEnd")
s=T.m(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.i(0,q).j(0,o)
s=T.m(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.i(0,o).j(0,o)
s=new T.L()
s.a=H.b([],r)
t.a.push(s)
t=T.m(new H.l("_"))
s.a.push(t)
t=u.i(0,o).j(0,n)
s=T.m(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.i(0,q).j(0,m)
s=T.m(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.i(0,m).j(0,m)
s=new T.L()
s.a=H.b([],r)
t.a.push(s)
t=T.m(new H.l("`"))
s.a.push(t)
t=u.i(0,m).j(0,"CodeEnd")
s=T.m(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.i(0,q).j(0,l)
s=T.m(new H.l("["))
t.a.push(s)
t.c=!0
t=u.i(0,l).j(0,k)
s=T.m(new H.l("|"))
t.a.push(s)
s=u.i(0,l).j(0,j)
t=T.m(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.i(0,l).j(0,l)
t=new T.L()
t.a=H.b([],r)
s.a.push(t)
s=T.m(new H.l("|]"))
t.a.push(s)
s=u.i(0,k).j(0,j)
t=T.m(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.i(0,k).j(0,k)
t=new T.L()
t.a=H.b([],r)
s.a.push(t)
s=T.m(new H.l("|]"))
t.a.push(s)
u.i(0,q).j(0,i).a.push(new T.a6())
s=u.i(0,i).j(0,i)
t=new T.L()
t.a=H.b([],r)
s.a.push(t)
s=T.m(new H.l("*_`["))
t.a.push(s)
s=u.i(0,"BoldEnd")
s.d=s.a.A(p)
s=u.i(0,n)
s.d=s.a.A(o)
s=u.i(0,"CodeEnd")
s.d=s.a.A(m)
s=u.i(0,j)
s.d=s.a.A("Link")
s=u.i(0,i)
s.d=s.a.A(i)
this.b=u}}
V.fq.prototype={
$1:function(a){P.jd(C.h,new V.fp(this.a))}}
V.fp.prototype={
$0:function(){var u=C.c.V(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s}}
V.fr.prototype={
$1:function(a){return a.a===this.a}}
R.i5.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.o]
u.bn("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.bn("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.c6=u.h
u=J.c6.prototype
u.c8=u.h
u=P.j.prototype
u.c7=u.ax
u=W.E.prototype
u.aC=u.P
u=W.d8.prototype
u.c9=u.Y
u=T.c1.prototype
u.c5=u.a1
u.b4=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"kS","kA",5)
u(P,"kT","kB",5)
u(P,"kU","kC",5)
t(P,"jw","kQ",8)
s(W,"l5",4,null,["$4"],["kD"],12,0)
s(W,"l6",4,null,["$4"],["kE"],12,0)
var m
r(m=E.a8.prototype,"gbH",0,0,null,["$1","$0"],["bI","e4"],0,0)
r(m,"gbF",0,0,null,["$1","$0"],["bG","e3"],0,0)
r(m,"gbD",0,0,null,["$1","$0"],["bE","e0"],0,0)
q(m,"gdZ","e_",2)
q(m,"ge1","e2",2)
r(m=E.cv.prototype,"gb6",0,0,null,["$1","$0"],["b8","b7"],0,0)
p(m,"gef","bP",8)
o(m=X.cC.prototype,"gcQ","cR",3)
o(m,"gcE","cF",3)
o(m,"gcK","cL",1)
o(m,"gcU","cV",9)
o(m,"gcS","cT",9)
o(m,"gcX","cY",1)
o(m,"gd0","d1",1)
o(m,"gcO","cP",1)
o(m,"gcZ","d_",1)
o(m,"gcM","cN",1)
o(m,"gd2","d3",14)
o(m,"gd4","d5",3)
o(m,"gde","df",4)
o(m,"gd9","da",4)
o(m,"gdc","dd",4)
n(V.ag.prototype,"gk","aV",10)
n(V.C.prototype,"gk","aV",10)
r(m=U.bg.prototype,"gb9",0,0,null,["$1","$0"],["N","ci"],0,0)
q(m,"gcC","cD",11)
q(m,"gd7","d8",11)
r(m=M.bZ.prototype,"gW",0,0,null,["$1","$0"],["Z","cj"],0,0)
q(m,"gcG","cH",2)
q(m,"gcI","cJ",2)
r(X.cj.prototype,"gba",0,0,null,["$1","$0"],["a7","cn"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.I,null)
s(P.I,[H.il,J.a,J.N,P.cW,P.j,H.bj,P.et,H.c_,H.h6,H.fP,P.aP,H.bc,H.dd,P.aa,H.eC,H.eD,H.ex,P.dj,P.cF,P.cs,P.fz,P.cw,P.hU,P.hI,P.hC,P.cV,P.n,P.dP,P.eq,P.hS,P.aG,P.am,P.S,P.an,P.f5,P.cq,P.cN,P.ej,P.el,P.aT,P.cc,P.av,P.o,P.aX,W.dT,W.bz,W.u,W.ch,W.d8,W.hN,W.c0,W.ac,W.hH,W.dp,P.hD,T.a6,T.c1,T.at,T.fa,T.fj,R.cr,R.cx,R.cy,R.fJ,O.aN,O.bl,E.dL,E.a8,E.fb,E.cv,Z.cE,Z.hn,Z.bS,Z.c2,Z.cD,D.dO,D.bf,D.K,X.bT,X.c7,X.ez,X.eG,X.bm,X.eT,X.fL,X.cC,V.aO,V.e8,V.bk,V.a1,V.ad,V.cn,V.ag,V.C,M.bZ,A.bP,A.dG,A.cA,A.h_,F.aQ,F.ec,F.c8,F.eB,F.ck,F.fk,F.fl,F.fm,F.fn,F.bw,F.hc,F.hd,F.hg,F.hi,F.hj,F.hk,O.cu,X.id,X.fD,X.cj,V.bU,V.fo])
s(J.a,[J.eu,J.ew,J.c6,J.aq,J.bi,J.ar,H.bo,W.c,W.dD,W.bQ,W.X,W.t,W.cH,W.O,W.dY,W.e0,W.cJ,W.bY,W.cL,W.e2,W.h,W.cO,W.ap,W.eo,W.cR,W.eF,W.eN,W.cX,W.cY,W.au,W.cZ,W.d1,W.aw,W.d5,W.d7,W.ay,W.d9,W.az,W.de,W.ae,W.dh,W.fI,W.aB,W.dk,W.fN,W.h8,W.dq,W.ds,W.du,W.dw,W.dy,P.aS,P.cT,P.aU,P.d3,P.f9,P.df,P.aZ,P.dm,P.dH,P.cG,P.db])
s(J.c6,[J.f6,J.b_,J.as])
t(J.ik,J.aq)
s(J.bi,[J.c5,J.ev])
t(P.eE,P.cW)
s(P.eE,[H.cB,W.hu,W.J,P.ef])
t(H.l,H.cB)
s(P.j,[H.e5,H.eJ,H.bx])
s(H.e5,[H.cb,H.c9])
s(P.et,[H.eK,H.ho])
t(H.eL,H.cb)
s(P.aP,[H.f2,H.ey,H.h5,H.dN,H.fh,P.ci,P.V,P.h7,P.h4,P.bs,P.dQ,P.dW])
s(H.bc,[H.ia,H.fE,H.i1,H.i2,H.i3,P.hq,P.hp,P.hr,P.hs,P.hR,P.hQ,P.hV,P.hF,P.hG,P.eI,P.e3,P.e4,W.e6,W.eP,W.eR,W.fg,W.fy,W.hy,W.f0,W.f_,W.hJ,W.hK,W.hP,W.hT,P.hW,P.eg,P.eh,P.dJ,E.fc,E.fd,E.fe,E.fH,D.e9,D.ea,F.i9,F.hX,F.hl,F.he,F.hf,V.i7,V.fq,V.fp,V.fr,R.i5])
s(H.fE,[H.fw,H.ba])
t(P.eH,P.aa)
s(P.eH,[H.Z,W.ht])
t(H.cd,H.bo)
s(H.cd,[H.bA,H.bC])
t(H.bB,H.bA)
t(H.bn,H.bB)
t(H.bD,H.bC)
t(H.ce,H.bD)
s(H.ce,[H.eU,H.eV,H.eW,H.eX,H.eY,H.cf,H.eZ])
t(P.hE,P.hU)
t(P.hB,P.hI)
t(P.dR,P.fz)
t(P.e7,P.dP)
s(P.dR,[P.ep,P.ha])
t(P.h9,P.e7)
s(P.S,[P.A,P.B])
s(P.V,[P.aW,P.er])
s(W.c,[W.w,W.ee,W.ax,W.bE,W.aA,W.af,W.bG,W.hm,W.by,P.dK,P.aK])
s(W.w,[W.E,W.ak])
s(W.E,[W.k,P.i])
s(W.k,[W.dE,W.dF,W.aL,W.aM,W.Q,W.ei,W.fi,W.ct,W.fB,W.fC,W.bt])
t(W.dS,W.X)
t(W.bd,W.cH)
s(W.O,[W.dU,W.dV])
t(W.cK,W.cJ)
t(W.bX,W.cK)
t(W.cM,W.cL)
t(W.e1,W.cM)
t(W.ao,W.bQ)
t(W.cP,W.cO)
t(W.ed,W.cP)
t(W.cS,W.cR)
t(W.bh,W.cS)
t(W.aC,W.h)
s(W.aC,[W.aR,W.a_,W.aY])
t(W.eO,W.cX)
t(W.eQ,W.cY)
t(W.d_,W.cZ)
t(W.eS,W.d_)
t(W.d2,W.d1)
t(W.cg,W.d2)
t(W.d6,W.d5)
t(W.f8,W.d6)
t(W.ff,W.d7)
t(W.bF,W.bE)
t(W.ft,W.bF)
t(W.da,W.d9)
t(W.fu,W.da)
t(W.fx,W.de)
t(W.di,W.dh)
t(W.fF,W.di)
t(W.bH,W.bG)
t(W.fG,W.bH)
t(W.dl,W.dk)
t(W.fM,W.dl)
t(W.aD,W.a_)
t(W.dr,W.dq)
t(W.hv,W.dr)
t(W.cI,W.bY)
t(W.dt,W.ds)
t(W.hz,W.dt)
t(W.dv,W.du)
t(W.d0,W.dv)
t(W.dx,W.dw)
t(W.hL,W.dx)
t(W.dz,W.dy)
t(W.hM,W.dz)
t(W.hw,W.ht)
t(W.hx,P.cs)
t(W.hO,W.d8)
t(P.a3,P.hD)
t(P.cU,P.cT)
t(P.eA,P.cU)
t(P.d4,P.d3)
t(P.f3,P.d4)
t(P.br,P.i)
t(P.dg,P.df)
t(P.fA,P.dg)
t(P.dn,P.dm)
t(P.fO,P.dn)
t(P.dI,P.cG)
t(P.f4,P.aK)
t(P.dc,P.db)
t(P.fv,P.dc)
s(T.c1,[T.L,R.cz])
s(E.dL,[Z.bR,A.cp])
s(D.K,[D.c3,D.c4,D.z])
t(U.a0,D.dO)
s(U.a0,[U.bV,U.co])
t(U.bg,O.aN)
t(A.e_,A.cp)
s(A.cA,[A.fS,A.fV,A.fX,A.fZ,A.fT,A.bu,A.fU,A.fW,A.fY,A.h0,A.h1,A.bv,A.h2,A.h3])
t(F.fs,F.ec)
t(F.fR,F.eB)
t(F.hh,F.hi)
t(F.f1,F.hj)
t(O.dZ,O.cu)
t(X.ek,X.fD)
s(V.bU,[V.dX,V.em,V.en,V.f7])
u(H.cB,H.h6)
u(H.bA,P.n)
u(H.bB,H.c_)
u(H.bC,P.n)
u(H.bD,H.c_)
u(P.cW,P.n)
u(W.cH,W.dT)
u(W.cJ,P.n)
u(W.cK,W.u)
u(W.cL,P.n)
u(W.cM,W.u)
u(W.cO,P.n)
u(W.cP,W.u)
u(W.cR,P.n)
u(W.cS,W.u)
u(W.cX,P.aa)
u(W.cY,P.aa)
u(W.cZ,P.n)
u(W.d_,W.u)
u(W.d1,P.n)
u(W.d2,W.u)
u(W.d5,P.n)
u(W.d6,W.u)
u(W.d7,P.aa)
u(W.bE,P.n)
u(W.bF,W.u)
u(W.d9,P.n)
u(W.da,W.u)
u(W.de,P.aa)
u(W.dh,P.n)
u(W.di,W.u)
u(W.bG,P.n)
u(W.bH,W.u)
u(W.dk,P.n)
u(W.dl,W.u)
u(W.dq,P.n)
u(W.dr,W.u)
u(W.ds,P.n)
u(W.dt,W.u)
u(W.du,P.n)
u(W.dv,W.u)
u(W.dw,P.n)
u(W.dx,W.u)
u(W.dy,P.n)
u(W.dz,W.u)
u(P.cT,P.n)
u(P.cU,W.u)
u(P.d3,P.n)
u(P.d4,W.u)
u(P.df,P.n)
u(P.dg,W.u)
u(P.dm,P.n)
u(P.dn,W.u)
u(P.cG,P.aa)
u(P.db,P.n)
u(P.dc,W.u)})()
var v={mangledGlobalNames:{B:"int",A:"double",S:"num",o:"String",aG:"bool",av:"Null",aT:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.K]},{func:1,ret:-1,args:[W.a_]},{func:1,ret:-1,args:[P.B,[P.j,E.a8]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.av,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aR]},{func:1,ret:P.A},{func:1,ret:-1,args:[P.B,[P.j,U.a0]]},{func:1,ret:P.aG,args:[W.E,P.o,P.o,W.bz]},{func:1,ret:P.av,args:[,]},{func:1,ret:-1,args:[W.aD]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.l=W.aL.prototype
C.C=W.aM.prototype
C.D=W.Q.prototype
C.G=J.a.prototype
C.a=J.aq.prototype
C.d=J.c5.prototype
C.c=J.bi.prototype
C.b=J.ar.prototype
C.H=J.as.prototype
C.p=J.f6.prototype
C.q=W.ct.prototype
C.k=J.b_.prototype
C.r=W.aD.prototype
C.t=W.by.prototype
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.u=function() {
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
C.z=function(getTagFallback) {
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
C.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.w=function(hooks) {
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
C.y=function(hooks) {
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
C.x=function(hooks) {
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
C.n=function(hooks) { return hooks; }

C.A=new P.f5()
C.f=new P.h9()
C.B=new P.ha()
C.e=new P.hE()
C.h=new P.an(0)
C.E=new P.an(5e6)
C.F=new P.eq("element",!1,!1,!1)
C.I=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.J=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.o])
C.K=H.b(u([]),[P.o])
C.o=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.i=H.b(u(["bind","if","ref","repeat","syntax"]),[P.o])
C.j=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])})();(function staticFields(){$.W=0
$.bb=null
$.iN=null
$.jy=null
$.jv=null
$.jB=null
$.hY=null
$.i4=null
$.iC=null
$.b0=null
$.bI=null
$.bJ=null
$.iu=!1
$.R=C.e
$.M=[]
$.a7=null
$.ig=null
$.iV=null
$.iU=null
$.cQ=P.iX(P.o,P.el)
$.j0=null
$.j3=null
$.j4=null
$.j9=null
$.jh=null
$.jm=null
$.jj=null
$.jk=null
$.jl=null
$.ji=null
$.j2=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lq","jF",function(){return H.jx("_$dart_dartClosure")})
u($,"lr","iH",function(){return H.jx("_$dart_js")})
u($,"ls","jG",function(){return H.a4(H.fQ({
toString:function(){return"$receiver$"}}))})
u($,"lt","jH",function(){return H.a4(H.fQ({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"lu","jI",function(){return H.a4(H.fQ(null))})
u($,"lv","jJ",function(){return H.a4(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ly","jM",function(){return H.a4(H.fQ(void 0))})
u($,"lz","jN",function(){return H.a4(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lx","jL",function(){return H.a4(H.jf(null))})
u($,"lw","jK",function(){return H.a4(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"lB","jP",function(){return H.a4(H.jf(void 0))})
u($,"lA","jO",function(){return H.a4(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"lO","iI",function(){return P.kz()})
u($,"lQ","jU",function(){return P.kq("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"lP","jT",function(){return P.iY(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.o)})
u($,"lI","jS",function(){return Z.P(0)})
u($,"lC","jQ",function(){return Z.P(511)})
u($,"lK","aj",function(){return Z.P(1)})
u($,"lJ","b6",function(){return Z.P(2)})
u($,"lE","b5",function(){return Z.P(4)})
u($,"lL","b7",function(){return Z.P(8)})
u($,"lM","b8",function(){return Z.P(16)})
u($,"lF","bM",function(){return Z.P(32)})
u($,"lG","bN",function(){return Z.P(64)})
u($,"lH","jR",function(){return Z.P(96)})
u($,"lN","b9",function(){return Z.P(128)})
u($,"lD","b4",function(){return Z.P(256)})
u($,"lp","jE",function(){return new V.e8(1e-9)})
u($,"lo","y",function(){return $.jE()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bo,ArrayBufferView:H.bo,Float32Array:H.bn,Float64Array:H.bn,Int16Array:H.eU,Int32Array:H.eV,Int8Array:H.eW,Uint16Array:H.eX,Uint32Array:H.eY,Uint8ClampedArray:H.cf,CanvasPixelArray:H.cf,Uint8Array:H.eZ,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.dD,HTMLAnchorElement:W.dE,HTMLAreaElement:W.dF,Blob:W.bQ,HTMLBodyElement:W.aL,HTMLCanvasElement:W.aM,CDATASection:W.ak,CharacterData:W.ak,Comment:W.ak,ProcessingInstruction:W.ak,Text:W.ak,CSSPerspective:W.dS,CSSCharsetRule:W.t,CSSConditionRule:W.t,CSSFontFaceRule:W.t,CSSGroupingRule:W.t,CSSImportRule:W.t,CSSKeyframeRule:W.t,MozCSSKeyframeRule:W.t,WebKitCSSKeyframeRule:W.t,CSSKeyframesRule:W.t,MozCSSKeyframesRule:W.t,WebKitCSSKeyframesRule:W.t,CSSMediaRule:W.t,CSSNamespaceRule:W.t,CSSPageRule:W.t,CSSRule:W.t,CSSStyleRule:W.t,CSSSupportsRule:W.t,CSSViewportRule:W.t,CSSStyleDeclaration:W.bd,MSStyleCSSProperties:W.bd,CSS2Properties:W.bd,CSSImageValue:W.O,CSSKeywordValue:W.O,CSSNumericValue:W.O,CSSPositionValue:W.O,CSSResourceValue:W.O,CSSUnitValue:W.O,CSSURLImageValue:W.O,CSSStyleValue:W.O,CSSMatrixComponent:W.X,CSSRotation:W.X,CSSScale:W.X,CSSSkew:W.X,CSSTranslation:W.X,CSSTransformComponent:W.X,CSSTransformValue:W.dU,CSSUnparsedValue:W.dV,DataTransferItemList:W.dY,HTMLDivElement:W.Q,DOMException:W.e0,ClientRectList:W.bX,DOMRectList:W.bX,DOMRectReadOnly:W.bY,DOMStringList:W.e1,DOMTokenList:W.e2,Element:W.E,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.c,Accelerometer:W.c,AccessibleNode:W.c,AmbientLightSensor:W.c,Animation:W.c,ApplicationCache:W.c,DOMApplicationCache:W.c,OfflineResourceList:W.c,BackgroundFetchRegistration:W.c,BatteryManager:W.c,BroadcastChannel:W.c,CanvasCaptureMediaStreamTrack:W.c,DedicatedWorkerGlobalScope:W.c,EventSource:W.c,FileReader:W.c,FontFaceSet:W.c,Gyroscope:W.c,XMLHttpRequest:W.c,XMLHttpRequestEventTarget:W.c,XMLHttpRequestUpload:W.c,LinearAccelerationSensor:W.c,Magnetometer:W.c,MediaDevices:W.c,MediaKeySession:W.c,MediaQueryList:W.c,MediaRecorder:W.c,MediaSource:W.c,MediaStream:W.c,MediaStreamTrack:W.c,MessagePort:W.c,MIDIAccess:W.c,MIDIInput:W.c,MIDIOutput:W.c,MIDIPort:W.c,NetworkInformation:W.c,Notification:W.c,OffscreenCanvas:W.c,OrientationSensor:W.c,PaymentRequest:W.c,Performance:W.c,PermissionStatus:W.c,PresentationAvailability:W.c,PresentationConnection:W.c,PresentationConnectionList:W.c,PresentationRequest:W.c,RelativeOrientationSensor:W.c,RemotePlayback:W.c,RTCDataChannel:W.c,DataChannel:W.c,RTCDTMFSender:W.c,RTCPeerConnection:W.c,webkitRTCPeerConnection:W.c,mozRTCPeerConnection:W.c,ScreenOrientation:W.c,Sensor:W.c,ServiceWorker:W.c,ServiceWorkerContainer:W.c,ServiceWorkerGlobalScope:W.c,ServiceWorkerRegistration:W.c,SharedWorker:W.c,SharedWorkerGlobalScope:W.c,SpeechRecognition:W.c,SpeechSynthesis:W.c,SpeechSynthesisUtterance:W.c,VR:W.c,VRDevice:W.c,VRDisplay:W.c,VRSession:W.c,VisualViewport:W.c,WebSocket:W.c,Worker:W.c,WorkerGlobalScope:W.c,WorkerPerformance:W.c,BluetoothDevice:W.c,BluetoothRemoteGATTCharacteristic:W.c,Clipboard:W.c,MojoInterfaceInterceptor:W.c,USB:W.c,IDBDatabase:W.c,IDBOpenDBRequest:W.c,IDBVersionChangeRequest:W.c,IDBRequest:W.c,IDBTransaction:W.c,AnalyserNode:W.c,RealtimeAnalyserNode:W.c,AudioBufferSourceNode:W.c,AudioDestinationNode:W.c,AudioNode:W.c,AudioScheduledSourceNode:W.c,AudioWorkletNode:W.c,BiquadFilterNode:W.c,ChannelMergerNode:W.c,AudioChannelMerger:W.c,ChannelSplitterNode:W.c,AudioChannelSplitter:W.c,ConstantSourceNode:W.c,ConvolverNode:W.c,DelayNode:W.c,DynamicsCompressorNode:W.c,GainNode:W.c,AudioGainNode:W.c,IIRFilterNode:W.c,MediaElementAudioSourceNode:W.c,MediaStreamAudioDestinationNode:W.c,MediaStreamAudioSourceNode:W.c,OscillatorNode:W.c,Oscillator:W.c,PannerNode:W.c,AudioPannerNode:W.c,webkitAudioPannerNode:W.c,ScriptProcessorNode:W.c,JavaScriptAudioNode:W.c,StereoPannerNode:W.c,WaveShaperNode:W.c,EventTarget:W.c,File:W.ao,FileList:W.ed,FileWriter:W.ee,HTMLFormElement:W.ei,Gamepad:W.ap,History:W.eo,HTMLCollection:W.bh,HTMLFormControlsCollection:W.bh,HTMLOptionsCollection:W.bh,KeyboardEvent:W.aR,Location:W.eF,MediaList:W.eN,MIDIInputMap:W.eO,MIDIOutputMap:W.eQ,MimeType:W.au,MimeTypeArray:W.eS,PointerEvent:W.a_,MouseEvent:W.a_,DragEvent:W.a_,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,Attr:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cg,RadioNodeList:W.cg,Plugin:W.aw,PluginArray:W.f8,RTCStatsReport:W.ff,HTMLSelectElement:W.fi,SourceBuffer:W.ax,SourceBufferList:W.ft,SpeechGrammar:W.ay,SpeechGrammarList:W.fu,SpeechRecognitionResult:W.az,Storage:W.fx,CSSStyleSheet:W.ae,StyleSheet:W.ae,HTMLTableElement:W.ct,HTMLTableRowElement:W.fB,HTMLTableSectionElement:W.fC,HTMLTemplateElement:W.bt,TextTrack:W.aA,TextTrackCue:W.af,VTTCue:W.af,TextTrackCueList:W.fF,TextTrackList:W.fG,TimeRanges:W.fI,Touch:W.aB,TouchEvent:W.aY,TouchList:W.fM,TrackDefaultList:W.fN,CompositionEvent:W.aC,FocusEvent:W.aC,TextEvent:W.aC,UIEvent:W.aC,URL:W.h8,VideoTrackList:W.hm,WheelEvent:W.aD,Window:W.by,DOMWindow:W.by,CSSRuleList:W.hv,ClientRect:W.cI,DOMRect:W.cI,GamepadList:W.hz,NamedNodeMap:W.d0,MozNamedAttrMap:W.d0,SpeechRecognitionResultList:W.hL,StyleSheetList:W.hM,SVGLength:P.aS,SVGLengthList:P.eA,SVGNumber:P.aU,SVGNumberList:P.f3,SVGPointList:P.f9,SVGScriptElement:P.br,SVGStringList:P.fA,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.aZ,SVGTransformList:P.fO,AudioBuffer:P.dH,AudioParamMap:P.dI,AudioTrackList:P.dK,AudioContext:P.aK,webkitAudioContext:P.aK,BaseAudioContext:P.aK,OfflineAudioContext:P.f4,SQLResultSetRowList:P.fv})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.bA.$nativeSuperclassTag="ArrayBufferView"
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.bn.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
W.bE.$nativeSuperclassTag="EventTarget"
W.bF.$nativeSuperclassTag="EventTarget"
W.bG.$nativeSuperclassTag="EventTarget"
W.bH.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(R.jz,[])
else R.jz([])})})()
//# sourceMappingURL=test.dart.js.map
