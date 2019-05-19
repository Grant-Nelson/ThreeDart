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
a[c]=function(){a[c]=function(){H.n2(b)}
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
fF:function(){return new P.cr("No element")},
lS:function(){return new P.cr("Too many elements")},
q:function q(a){this.a=a},
fk:function fk(){},
bJ:function bJ(){},
cf:function cf(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fS:function fS(a,b,c){this.a=a
this.b=b
this.$ti=c},
fT:function fT(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fU:function fU(a,b,c){this.a=a
this.b=b
this.$ti=c},
cG:function cG(a,b,c){this.a=a
this.b=b
this.$ti=c},
iE:function iE(a,b,c){this.a=a
this.b=b
this.$ti=c},
bG:function bG(){},
dX:function dX(){},
dW:function dW(){},
c_:function(a){var u,t=H.E(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
mJ:function(a){return v.types[H.a7(a)]},
mQ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iF},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ai(a)
if(typeof u!=="string")throw H.f(H.bU(a))
return u},
cn:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bM:function(a){return H.lY(a)+H.jZ(H.bx(a),0,null)},
lY:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$icE){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c_(t.length>1&&C.i.as(t,0)===36?C.i.aR(t,1):t)},
kB:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
m5:function(a){var u,t,s,r=H.c([],[P.C])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bU(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.h.aX(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.bU(s))}return H.kB(r)},
kC:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bU(s))
if(s<0)throw H.f(H.bU(s))
if(s>65535)return H.m5(a)}return H.kB(a)},
jP:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.aX(u,10))>>>0,56320|u&1023)}throw H.f(P.aP(a,0,1114111,null,null))},
bL:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m4:function(a){var u=H.bL(a).getFullYear()+0
return u},
m2:function(a){var u=H.bL(a).getMonth()+1
return u},
lZ:function(a){var u=H.bL(a).getDate()+0
return u},
m_:function(a){var u=H.bL(a).getHours()+0
return u},
m1:function(a){var u=H.bL(a).getMinutes()+0
return u},
m3:function(a){var u=H.bL(a).getSeconds()+0
return u},
m0:function(a){var u=H.bL(a).getMilliseconds()+0
return u},
by:function(a){throw H.f(H.bU(a))},
h:function(a,b){if(a==null)J.bA(a)
throw H.f(H.cW(a,b))},
cW:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ax(!0,b,s,null)
u=H.a7(J.bA(a))
if(!(b<0)){if(typeof u!=="number")return H.by(u)
t=b>=u}else t=!0
if(t)return P.V(b,a,s,null,u)
return P.dE(b,s)},
mF:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bN(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bN(a,c,!0,b,"end",u)
return new P.ax(!0,b,"end",null)},
bU:function(a){return new P.ax(!0,a,null,null)},
mB:function(a){if(typeof a!=="number")throw H.f(H.bU(a))
return a},
f:function(a){var u
if(a==null)a=new P.dy()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lh})
u.name=""}else u.toString=H.lh
return u},
lh:function(){return J.ai(this.dartException)},
t:function(a){throw H.f(a)},
A:function(a){throw H.f(P.bj(a))},
aW:function(a){var u,t,s,r,q,p
a=H.lg(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i6(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kN:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kw:function(a,b){return new H.hg(a,b==null?null:b.method)},
jN:function(a,b){var u=b==null,t=u?null:b.method
return new H.fI(a,t,u?null:b.receiver)},
ap:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jC(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.h.aX(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jN(H.k(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kw(H.k(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lk()
q=$.ll()
p=$.lm()
o=$.ln()
n=$.lq()
m=$.lr()
l=$.lp()
$.lo()
k=$.lt()
j=$.ls()
i=r.a2(u)
if(i!=null)return f.$1(H.jN(H.E(u),i))
else{i=q.a2(u)
if(i!=null){i.method="call"
return f.$1(H.jN(H.E(u),i))}else{i=p.a2(u)
if(i==null){i=o.a2(u)
if(i==null){i=n.a2(u)
if(i==null){i=m.a2(u)
if(i==null){i=l.a2(u)
if(i==null){i=o.a2(u)
if(i==null){i=k.a2(u)
if(i==null){i=j.a2(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kw(H.E(u),i))}}return f.$1(new H.ik(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dK()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ax(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dK()
return a},
bY:function(a){var u
if(a==null)return new H.ey(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ey(a)},
mI:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.P(0,a[u],a[t])}return b},
mP:function(a,b,c,d,e,f){H.n(a,"$ibo")
switch(H.a7(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.r("Unsupported number of arguments for wrapped closure"))},
bW:function(a,b){var u
H.a7(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mP)
a.$identity=u
return u},
lK:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hJ().constructor.prototype):Object.create(new H.c2(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aD
if(typeof t!=="number")return t.K()
$.aD=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kk(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.mJ,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kj:H.jF
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kk(a,n,f)
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
kk:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lJ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lH(t,!r,u,b)
if(t===0){r=$.aD
if(typeof r!=="number")return r.K()
$.aD=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c3
return new Function(r+H.k(q==null?$.c3=H.f4("self"):q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aD
if(typeof r!=="number")return r.K()
$.aD=r+1
o+=r
r="return function("+o+"){return this."
q=$.c3
return new Function(r+H.k(q==null?$.c3=H.f4("self"):q)+"."+H.k(u)+"("+o+");}")()},
lI:function(a,b,c,d){var u=H.jF,t=H.kj
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
lJ:function(a,b){var u,t,s,r,q,p,o,n=$.c3
if(n==null)n=$.c3=H.f4("self")
u=$.ki
if(u==null)u=$.ki=H.f4("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lI(s,!q,t,b)
if(s===1){n="return function(){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+");"
u=$.aD
if(typeof u!=="number")return u.K()
$.aD=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+", "+o+");"
u=$.aD
if(typeof u!=="number")return u.K()
$.aD=u+1
return new Function(n+u+"}")()},
k2:function(a,b,c,d,e,f,g){return H.lK(a,b,H.a7(c),d,!!e,!!f,g)},
jF:function(a){return a.a},
kj:function(a){return a.c},
f4:function(a){var u,t,s,r=new H.c2("self","target","receiver","name"),q=J.jK(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
J:function(a){if(a==null)H.mx("boolean expression must not be null")
return a},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aC(a,"String"))},
nI:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aC(a,"double"))},
mV:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aC(a,"num"))},
k_:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aC(a,"bool"))},
a7:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aC(a,"int"))},
le:function(a,b){throw H.f(H.aC(a,H.c_(H.E(b).substring(2))))},
mX:function(a,b){throw H.f(H.lG(a,H.c_(H.E(b).substring(2))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.le(a,b)},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.mX(a,b)},
k8:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.f(H.aC(a,"List<dynamic>"))},
mR:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.le(a,b)},
l8:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a7(u)]
else return a.$S()}return},
eV:function(a,b){var u
if(typeof a=="function")return!0
u=H.l8(J.U(a))
if(u==null)return!1
return H.l_(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.jW)return a
$.jW=!0
try{if(H.eV(a,b))return a
u=H.jA(b)
t=H.aC(a,u)
throw H.f(t)}finally{$.jW=!1}},
k3:function(a,b){if(a!=null&&!H.k1(a,b))H.t(H.aC(a,H.jA(b)))
return a},
aC:function(a,b){return new H.i8("TypeError: "+P.dd(a)+": type '"+H.l3(a)+"' is not a subtype of type '"+b+"'")},
lG:function(a,b){return new H.f5("CastError: "+P.dd(a)+": type '"+H.l3(a)+"' is not a subtype of type '"+b+"'")},
l3:function(a){var u,t=J.U(a)
if(!!t.$ic5){u=H.l8(t)
if(u!=null)return H.jA(u)
return"Closure"}return H.bM(a)},
mx:function(a){throw H.f(new H.iF(a))},
n2:function(a){throw H.f(new P.fc(H.E(a)))},
m9:function(a){return new H.hv(a)},
l9:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bx:function(a){if(a==null)return
return a.$ti},
nJ:function(a,b,c){return H.bZ(a["$a"+H.k(c)],H.bx(b))},
cX:function(a,b,c,d){var u
H.E(c)
H.a7(d)
u=H.bZ(a["$a"+H.k(c)],H.bx(b))
return u==null?null:u[d]},
ah:function(a,b,c){var u
H.E(b)
H.a7(c)
u=H.bZ(a["$a"+H.k(b)],H.bx(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.a7(b)
u=H.bx(a)
return u==null?null:u[b]},
jA:function(a){return H.bw(a,null)},
bw:function(a,b){var u,t
H.m(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c_(a[0].name)+H.jZ(a,1,b)
if(typeof a=="function")return H.c_(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a7(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.k(b[t])}if('func' in a)return H.mq(a,b)
if('futureOr' in a)return"FutureOr<"+H.bw("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mq:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.e]
H.m(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.h(a0,n)
p=C.i.K(p,a0[n])
m=u[q]
if(m!=null&&m!==P.O)p+=" extends "+H.bw(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bw(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bw(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bw(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.mH(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.E(b[h])
j=j+i+H.bw(e[d],a0)+(" "+H.k(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jZ:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.b6("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bw(p,c)}return"<"+u.i(0)+">"},
bZ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
k0:function(a,b,c,d){var u,t
H.E(b)
H.k8(c)
H.E(d)
if(a==null)return!1
u=H.bx(a)
t=J.U(a)
if(t[b]==null)return!1
return H.l6(H.bZ(t[d],u),null,c,null)},
m:function(a,b,c,d){H.E(b)
H.k8(c)
H.E(d)
if(a==null)return a
if(H.k0(a,b,c,d))return a
throw H.f(H.aC(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c_(b.substring(2))+H.jZ(c,0,null),v.mangledGlobalNames)))},
l6:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aw(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aw(a[t],b,c[t],d))return!1
return!0},
nG:function(a,b,c){return a.apply(b,H.bZ(J.U(b)["$a"+H.k(c)],H.bx(b)))},
lb:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="L"||a===-1||a===-2||H.lb(u)}return!1},
k1:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="L"||b===-1||b===-2||H.lb(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.k1(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eV(a,b)}u=J.U(a).constructor
t=H.bx(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aw(u,null,b,null)},
G:function(a,b){if(a!=null&&!H.k1(a,b))throw H.f(H.aC(a,H.jA(b)))
return a},
aw:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aw(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.l_(a,b,c,d)
if('func' in a)return c.name==="bo"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aw("type" in a?a.type:l,b,s,d)
else if(H.aw(a,b,s,d))return!0
else{if(!('$i'+"cb" in t.prototype))return!1
r=t.prototype["$a"+"cb"]
q=H.bZ(r,u?a.slice(1):l)
return H.aw(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.l6(H.bZ(m,u),b,p,d)},
l_:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aw(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aw(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aw(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aw(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mU(h,b,g,d)},
mU:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aw(c[s],d,a[s],b))return!1}return!0},
nH:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
mS:function(a){var u,t,s,r,q=H.E($.la.$1(a)),p=$.jr[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jx[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.E($.l5.$2(a,q))
if(q!=null){p=$.jr[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jx[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jz(u)
$.jr[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jx[q]=u
return u}if(s==="-"){r=H.jz(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ld(a,u)
if(s==="*")throw H.f(P.kO(q))
if(v.leafTags[q]===true){r=H.jz(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ld(a,u)},
ld:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.k9(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jz:function(a){return J.k9(a,!1,null,!!a.$iF)},
mT:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jz(u)
else return J.k9(u,c,null,null)},
mN:function(){if(!0===$.k7)return
$.k7=!0
H.mO()},
mO:function(){var u,t,s,r,q,p,o,n
$.jr=Object.create(null)
$.jx=Object.create(null)
H.mM()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lf.$1(q)
if(p!=null){o=H.mT(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mM:function(){var u,t,s,r,q,p,o=C.B()
o=H.bT(C.C,H.bT(C.D,H.bT(C.u,H.bT(C.u,H.bT(C.E,H.bT(C.F,H.bT(C.G(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.la=new H.ju(r)
$.l5=new H.jv(q)
$.lf=new H.jw(p)},
bT:function(a,b){return a(b)||b},
lU:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.fx("Illegal RegExp pattern ("+String(r)+")",a))},
n_:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mG:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lg:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kc:function(a,b,c){var u=H.n0(a,b,c)
return u},
n0:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lg(b),'g'),H.mG(c))},
i6:function i6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hg:function hg(a,b){this.a=a
this.b=b},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(a){this.a=a},
jC:function jC(a){this.a=a},
ey:function ey(a){this.a=a
this.b=null},
c5:function c5(){},
hT:function hT(){},
hJ:function hJ(){},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i8:function i8(a){this.a=a},
f5:function f5(a){this.a=a},
hv:function hv(a){this.a=a},
iF:function iF(a){this.a=a},
aK:function aK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dn:function dn(a,b){this.a=a
this.$ti=b},
fN:function fN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cT:function(a){return a},
bv:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cW(b,a))},
mp:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.mF(a,b,c))
return b},
ck:function ck(){},
du:function du(){},
cj:function cj(){},
dv:function dv(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
dw:function dw(){},
hc:function hc(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
mH:function(a){return J.kp(a?Object.keys(a):[],null)},
mW:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k9:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jt:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.k7==null){H.mN()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.kO("Return interceptor for "+H.k(u(a,q))))}s=a.constructor
r=s==null?null:s[$.ke()]
if(r!=null)return r
r=H.mS(a)
if(r!=null)return r
if(typeof a=="function")return C.O
u=Object.getPrototypeOf(a)
if(u==null)return C.x
if(u===Object.prototype)return C.x
if(typeof s=="function"){Object.defineProperty(s,$.ke(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
lT:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jE(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aP(a,0,4294967295,"length",null))
return J.kp(new Array(a),b)},
kp:function(a,b){return J.jK(H.c(a,[b]))},
jK:function(a){H.k8(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dh.prototype
return J.dg.prototype}if(typeof a=="string")return J.bI.prototype
if(a==null)return J.di.prototype
if(typeof a=="boolean")return J.fG.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.O)return a
return J.jt(a)},
k4:function(a){if(typeof a=="string")return J.bI.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.O)return a
return J.jt(a)},
js:function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.O)return a
return J.jt(a)},
k5:function(a){if(typeof a=="string")return J.bI.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.cE.prototype
return a},
k6:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.O)return a
return J.jt(a)},
Z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).t(a,b)},
lz:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mQ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.k4(a).j(a,b)},
lA:function(a,b,c,d){return J.k6(a).hA(a,b,c,d)},
jD:function(a,b){return J.js(a).A(a,b)},
lB:function(a,b){return J.js(a).J(a,b)},
lC:function(a){return J.k6(a).ghF(a)},
d_:function(a){return J.U(a).gI(a)},
bz:function(a){return J.js(a).gN(a)},
bA:function(a){return J.k4(a).gm(a)},
kg:function(a){return J.js(a).ik(a)},
lD:function(a,b,c){return J.k5(a).aS(a,b,c)},
lE:function(a){return J.k5(a).iA(a)},
ai:function(a){return J.U(a).i(a)},
a:function a(){},
fG:function fG(){},
di:function di(){},
dk:function dk(){},
hk:function hk(){},
cE:function cE(){},
br:function br(){},
aJ:function aJ(a){this.$ti=a},
jL:function jL(a){this.$ti=a},
aq:function aq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dj:function dj(){},
dh:function dh(){},
dg:function dg(){},
bI:function bI(){}},P={
mf:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.my()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bW(new P.iH(s),1)).observe(u,{childList:true})
return new P.iG(s,u,t)}else if(self.setImmediate!=null)return P.mz()
return P.mA()},
mg:function(a){self.scheduleImmediate(H.bW(new P.iI(H.l(a,{func:1,ret:-1})),0))},
mh:function(a){self.setImmediate(H.bW(new P.iJ(H.l(a,{func:1,ret:-1})),0))},
mi:function(a){P.jR(C.m,H.l(a,{func:1,ret:-1}))},
jR:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.h.X(a.a,1000)
return P.mn(u<0?0:u,b)},
kM:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.aU]})
u=C.h.X(a.a,1000)
return P.mo(u<0?0:u,b)},
mn:function(a,b){var u=new P.eE()
u.el(a,b)
return u},
mo:function(a,b){var u=new P.eE()
u.em(a,b)
return u},
mj:function(a,b){var u,t,s
b.a=1
try{a.dI(new P.iS(b),new P.iT(b),null)}catch(s){u=H.ap(s)
t=H.bY(s)
P.mY(new P.iU(b,u,t))}},
kV:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.n(a.c,"$iav")
if(u>=4){t=b.bB()
b.a=a.a
b.c=a.c
P.cJ(b,t)}else{t=H.n(b.c,"$iaZ")
b.a=2
b.c=a
a.cK(t)}},
cJ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.n(g.c,"$ia8")
g=g.b
r=s.a
q=s.b
g.toString
P.jn(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cJ(h.a,b)}g=h.a
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
if(m){H.n(o,"$ia8")
g=g.b
r=o.a
q=o.b
g.toString
P.jn(i,i,g,r,q)
return}l=$.X
if(l!=n)$.X=n
else l=i
g=b.c
if(g===8)new P.iY(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.iX(u,b,o).$0()}else if((g&2)!==0)new P.iW(h,u,b).$0()
if(l!=null)$.X=l
g=u.b
if(!!J.U(g).$icb){if(g.a>=4){k=H.n(q.c,"$iaZ")
q.c=null
b=q.aW(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kV(g,q)
return}}j=b.b
k=H.n(j.c,"$iaZ")
j.c=null
b=j.aW(k)
g=u.a
r=u.b
if(!g){H.G(r,H.x(j,0))
j.a=4
j.c=r}else{H.n(r,"$ia8")
j.a=8
j.c=r}h.a=j
g=j}},
mt:function(a,b){if(H.eV(a,{func:1,args:[P.O,P.af]}))return H.l(a,{func:1,ret:null,args:[P.O,P.af]})
if(H.eV(a,{func:1,args:[P.O]}))return H.l(a,{func:1,ret:null,args:[P.O]})
throw H.f(P.jE(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ms:function(){var u,t
for(;u=$.bS,u!=null;){$.cV=null
t=u.b
$.bS=t
if(t==null)$.cU=null
u.a.$0()}},
mw:function(){$.jX=!0
try{P.ms()}finally{$.cV=null
$.jX=!1
if($.bS!=null)$.kf().$1(P.l7())}},
l2:function(a){var u=new P.e_(H.l(a,{func:1,ret:-1}))
if($.bS==null){$.bS=$.cU=u
if(!$.jX)$.kf().$1(P.l7())}else $.cU=$.cU.b=u},
mv:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.bS
if(u==null){P.l2(a)
$.cV=$.cU
return}t=new P.e_(a)
s=$.cV
if(s==null){t.b=u
$.bS=$.cV=t}else{t.b=s.b
$.cV=s.b=t
if(t.b==null)$.cU=t}},
mY:function(a){var u,t=null,s={func:1,ret:-1}
H.l(a,s)
u=$.X
if(C.k===u){P.jp(t,t,C.k,a)
return}u.toString
P.jp(t,t,u,H.l(u.bL(a),s))},
kL:function(a,b){var u,t={func:1,ret:-1}
H.l(b,t)
u=$.X
if(u===C.k){u.toString
return P.jR(a,b)}return P.jR(a,H.l(u.bL(b),t))},
md:function(a,b){var u,t,s={func:1,ret:-1,args:[P.aU]}
H.l(b,s)
u=$.X
if(u===C.k){u.toString
return P.kM(a,b)}t=u.cV(b,P.aU)
$.X.toString
return P.kM(a,H.l(t,s))},
jn:function(a,b,c,d,e){var u={}
u.a=d
P.mv(new P.jo(u,e))},
l0:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.X
if(t===c)return d.$0()
$.X=c
u=t
try{t=d.$0()
return t}finally{$.X=u}},
l1:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.G(e,g)
t=$.X
if(t===c)return d.$1(e)
$.X=c
u=t
try{t=d.$1(e)
return t}finally{$.X=u}},
mu:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.G(e,h)
H.G(f,i)
t=$.X
if(t===c)return d.$2(e,f)
$.X=c
u=t
try{t=d.$2(e,f)
return t}finally{$.X=u}},
jp:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.bL(d):c.hG(d,-1)
P.l2(d)},
iH:function iH(a){this.a=a},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
eE:function eE(){this.c=0},
jh:function jh(a,b){this.a=a
this.b=b},
jg:function jg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aZ:function aZ(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
av:function av(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iR:function iR(a,b){this.a=a
this.b=b},
iV:function iV(a,b){this.a=a
this.b=b},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iZ:function iZ(a){this.a=a},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
e_:function e_(a){this.a=a
this.b=null},
hM:function hM(){},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
cs:function cs(){},
hN:function hN(){},
aU:function aU(){},
a8:function a8(a,b){this.a=a
this.b=b},
jk:function jk(){},
jo:function jo(a,b){this.a=a
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
kq:function(a,b){return new H.aK([a,b])},
lV:function(a){return H.mI(a,new H.aK([null,null]))},
dp:function(a){return new P.j1([a])},
jV:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mm:function(a,b,c){var u=new P.ef(a,b,[c])
u.c=a.e
return u},
lR:function(a,b,c){var u,t
if(P.jY(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.e])
C.a.h($.ag,a)
try{P.mr(a,u)}finally{if(0>=$.ag.length)return H.h($.ag,-1)
$.ag.pop()}t=P.kJ(b,H.mR(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
jJ:function(a,b,c){var u,t
if(P.jY(a))return b+"..."+c
u=new P.b6(b)
C.a.h($.ag,a)
try{t=u
t.a=P.kJ(t.a,a,", ")}finally{if(0>=$.ag.length)return H.h($.ag,-1)
$.ag.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jY:function(a){var u,t
for(u=$.ag.length,t=0;t<u;++t)if(a===$.ag[t])return!0
return!1},
mr:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.e],"$ab")
u=a.gN(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.u())return
r=H.k(u.gC(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.u()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gC(u);++s
if(!u.u()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gC(u);++s
for(;u.u();o=n,n=m){m=u.gC(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.k(o)
q=H.k(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kr:function(a,b){var u,t,s=P.dp(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t)s.h(0,H.G(a[t],b))
return s},
kt:function(a){var u,t={}
if(P.jY(a))return"{...}"
u=new P.b6("")
try{C.a.h($.ag,a)
u.a+="{"
t.a=!0
J.lB(a,new P.fR(t,u))
u.a+="}"}finally{if(0>=$.ag.length)return H.h($.ag,-1)
$.ag.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j1:function j1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bR:function bR(a){this.a=a
this.c=this.b=null},
ef:function ef(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fO:function fO(){},
w:function w(){},
fQ:function fQ(){},
fR:function fR(a,b){this.a=a
this.b=b},
a4:function a4(){},
j8:function j8(){},
eg:function eg(){},
c6:function c6(){},
c7:function c7(){},
fm:function fm(){},
fD:function fD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fC:function fC(a){this.a=a},
io:function io(){},
ip:function ip(){},
ji:function ji(a){this.b=0
this.c=a},
lP:function(a){if(a instanceof H.c5)return a.i(0)
return"Instance of '"+H.bM(a)+"'"},
lW:function(a,b,c){var u,t
H.G(b,c)
u=J.lT(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.P(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
ks:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bz(a);u.u();)C.a.h(s,H.G(u.gC(u),c))
if(b)return s
return H.m(J.jK(s),"$ib",t,"$ab")},
jQ:function(a){var u,t,s=P.C
H.m(a,"$ii",[s],"$ai")
if(a.constructor===Array){H.m(a,"$iaJ",[s],"$aaJ")
u=a.length
t=P.kE(0,null,u)
return H.kC(t<u?C.a.dX(a,0,t):a)}return P.mb(a,0,null)},
mb:function(a,b,c){var u,t,s
H.m(a,"$ii",[P.C],"$ai")
u=J.bz(a)
for(t=0;t<b;++t)if(!u.u())throw H.f(P.aP(b,0,t,null,null))
s=[]
for(;u.u();)s.push(u.gC(u))
return H.kC(s)},
m6:function(a){return new H.fH(a,H.lU(a,!1,!0,!1))},
kJ:function(a,b,c){var u=J.bz(b)
if(!u.u())return a
if(c.length===0){do a+=H.k(u.gC(u))
while(u.u())}else{a+=H.k(u.gC(u))
for(;u.u();)a=a+c+H.k(u.gC(u))}return a},
kZ:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.C],"$ab")
if(c===C.l){u=$.ly().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.hK(H.G(b,H.ah(c,"c6",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jP(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lL:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lM:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d9:function(a){if(a>=10)return""+a
return"0"+a},
km:function(a,b){return new P.bm(1e6*b+1000*a)},
dd:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ai(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lP(a)},
lF:function(a){return new P.ax(!1,null,null,a)},
jE:function(a,b,c){return new P.ax(!0,a,b,c)},
dE:function(a,b){return new P.bN(null,null,!0,a,b,"Value not in range")},
aP:function(a,b,c,d,e){return new P.bN(b,c,!0,a,d,"Invalid value")},
kE:function(a,b,c){if(0>a||a>c)throw H.f(P.aP(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aP(b,a,c,"end",null))
return b}return c},
kD:function(a,b){if(typeof a!=="number")return a.dS()
if(a<0)throw H.f(P.aP(a,0,null,b,null))},
V:function(a,b,c,d,e){var u=H.a7(e==null?J.bA(b):e)
return new P.fE(u,!0,a,c,"Index out of range")},
an:function(a){return new P.il(a)},
kO:function(a){return new P.ij(a)},
kI:function(a){return new P.cr(a)},
bj:function(a){return new P.f7(a)},
r:function(a){return new P.e7(a)},
kb:function(a){H.mW(a)},
P:function P(){},
bk:function bk(a,b){this.a=a
this.b=b},
z:function z(){},
bm:function bm(a){this.a=a},
fi:function fi(){},
fj:function fj(){},
bn:function bn(){},
eY:function eY(){},
dy:function dy(){},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b,c,d,e,f){var _=this
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
il:function il(a){this.a=a},
ij:function ij(a){this.a=a},
cr:function cr(a){this.a=a},
f7:function f7(a){this.a=a},
hj:function hj(){},
dK:function dK(){},
fc:function fc(a){this.a=a},
e7:function e7(a){this.a=a},
fx:function fx(a,b){this.a=a
this.b=b},
bo:function bo(){},
C:function C(){},
i:function i(){},
aI:function aI(){},
b:function b(){},
M:function M(){},
L:function L(){},
a6:function a6(){},
O:function O(){},
af:function af(){},
e:function e(){},
b6:function b6(a){this.a=a},
mE:function(a){var u,t=J.U(a)
if(!!t.$ibp){u=t.gcY(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eJ(a.data,a.height,a.width)},
mD:function(a){if(a instanceof P.eJ)return{data:a.a,height:a.b,width:a.c}
return a},
b9:function(a){var u,t,s,r,q
if(a==null)return
u=P.kq(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=H.E(t[r])
u.P(0,q,a[q])}return u},
mC:function(a){var u={}
a.J(0,new P.jq(u))
return u},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a){this.a=a},
ft:function ft(a,b){this.a=a
this.b=b},
fu:function fu(){},
fv:function fv(){},
j2:function j2(){},
at:function at(){},
b1:function b1(){},
fK:function fK(){},
b5:function b5(){},
hh:function hh(){},
hn:function hn(){},
co:function co(){},
hQ:function hQ(){},
p:function p(){},
b7:function b7(){},
i5:function i5(){},
ed:function ed(){},
ee:function ee(){},
eo:function eo(){},
ep:function ep(){},
eA:function eA(){},
eB:function eB(){},
eH:function eH(){},
eI:function eI(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(a){this.a=a},
f2:function f2(){},
bB:function bB(){},
hi:function hi(){},
e0:function e0(){},
d3:function d3(){},
dD:function dD(){},
bO:function bO(){},
dH:function dH(){},
dN:function dN(){},
dV:function dV(){},
hI:function hI(){},
ew:function ew(){},
ex:function ex(){}},W={
kh:function(){var u=document.createElement("a")
return u},
jG:function(){var u=document.createElement("canvas")
return u},
lN:function(a,b,c){var u=document.body,t=(u&&C.r).a1(u,a,b,c)
t.toString
u=W.B
u=new H.cG(new W.ac(t),H.l(new W.fl(),{func:1,ret:P.P,args:[u]}),[u])
return H.n(u.gap(u),"$iQ")},
lO:function(a){H.n(a,"$id")
return"wheel"},
ca:function(a){var u,t,s,r="element tag unavailable"
try{u=J.k6(a)
t=u.gdG(a)
if(typeof t==="string")r=u.gdG(a)}catch(s){H.ap(s)}return r},
j0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kX:function(a,b,c,d){var u=W.j0(W.j0(W.j0(W.j0(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a3:function(a,b,c,d,e){var u=W.l4(new W.iQ(c),W.o)
if(u!=null&&!0)J.lA(a,b,u,!1)
return new W.iP(a,b,u,!1,[e])},
kW:function(a){var u=W.kh(),t=window.location
u=new W.bu(new W.j7(u,t))
u.e8(a)
return u},
mk:function(a,b,c,d){H.n(a,"$iQ")
H.E(b)
H.E(c)
H.n(d,"$ibu")
return!0},
ml:function(a,b,c,d){var u,t,s
H.n(a,"$iQ")
H.E(b)
H.E(c)
u=H.n(d,"$ibu").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kY:function(){var u=P.e,t=P.kr(C.o,u),s=H.x(C.o,0),r=H.l(new W.jf(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.je(t,P.dp(u),P.dp(u),P.dp(u),null)
t.ek(null,new H.fU(C.o,r,[s,u]),q,null)
return t},
l4:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.X
if(u===C.k)return a
return u.cV(a,b)},
u:function u(){},
eW:function eW(){},
d0:function d0(){},
eX:function eX(){},
c1:function c1(){},
d2:function d2(){},
bg:function bg(){},
bC:function bC(){},
c4:function c4(){},
bh:function bh(){},
c8:function c8(){},
f8:function f8(){},
R:function R(){},
c9:function c9(){},
f9:function f9(){},
aE:function aE(){},
aF:function aF(){},
fa:function fa(){},
fb:function fb(){},
fe:function fe(){},
ar:function ar(){},
ff:function ff(){},
da:function da(){},
db:function db(){},
fg:function fg(){},
fh:function fh(){},
iL:function iL(a,b){this.a=a
this.b=b},
Q:function Q(){},
fl:function fl(){},
o:function o(){},
d:function d(){},
aG:function aG(){},
fr:function fr(){},
fs:function fs(){},
fw:function fw(){},
aH:function aH(){},
fB:function fB(){},
bH:function bH(){},
bp:function bp(){},
cc:function cc(){},
aL:function aL(){},
dq:function dq(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(a){this.a=a},
h3:function h3(){},
h4:function h4(a){this.a=a},
aN:function aN(){},
h5:function h5(){},
a5:function a5(){},
ac:function ac(a){this.a=a},
B:function B(){},
cl:function cl(){},
aO:function aO(){},
hm:function hm(){},
ht:function ht(){},
hu:function hu(a){this.a=a},
hw:function hw(){},
aQ:function aQ(){},
hG:function hG(){},
aR:function aR(){},
hH:function hH(){},
aS:function aS(){},
hK:function hK(){},
hL:function hL(a){this.a=a},
az:function az(){},
bP:function bP(){},
dL:function dL(){},
hR:function hR(){},
hS:function hS(){},
ct:function ct(){},
aT:function aT(){},
aA:function aA(){},
hU:function hU(){},
hV:function hV(){},
i_:function i_(){},
aV:function aV(){},
aB:function aB(){},
i3:function i3(){},
i4:function i4(){},
bt:function bt(){},
im:function im(){},
iC:function iC(){},
aY:function aY(){},
cH:function cH(){},
cI:function cI(){},
iM:function iM(){},
e2:function e2(){},
j_:function j_(){},
el:function el(){},
jb:function jb(){},
jc:function jc(){},
iK:function iK(){},
iN:function iN(a){this.a=a},
iO:function iO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jU:function jU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iP:function iP(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iQ:function iQ(a){this.a=a},
bu:function bu(a){this.a=a},
y:function y(){},
dx:function dx(a){this.a=a},
he:function he(a){this.a=a},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(){},
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
df:function df(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ak:function ak(){},
j7:function j7(a,b){this.a=a
this.b=b},
eK:function eK(a){this.a=a},
jj:function jj(a){this.a=a},
e1:function e1(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
em:function em(){},
en:function en(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
cO:function cO(){},
cP:function cP(){},
eu:function eu(){},
ev:function ev(){},
ez:function ez(){},
eC:function eC(){},
eD:function eD(){},
cQ:function cQ(){},
cR:function cR(){},
eF:function eF(){},
eG:function eG(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){}},O={
jH:function(a){var u=new O.a_([a])
u.ci(a)
return u},
a_:function a_(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
ch:function ch(){this.b=this.a=null},
ds:function ds(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fW:function fW(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cg:function cg(){},
fX:function fX(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aM:function aM(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fZ:function fZ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h_:function h_(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bQ:function bQ(){}},E={
m8:function(a,b){var u=new E.hp(a)
u.e4(a,b)
return u},
mc:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ibC)return E.kK(a,!0,!0,!0,!1)
u=W.jG()
t=u.style
t.width="100%"
t.height="100%"
s.gcW(a).h(0,u)
return E.kK(u,!0,!0,!0,!1)},
kK:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dS(),j=H.n(C.v.ca(a,"webgl2",P.lV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibO")
if(j==null)H.t(P.r("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.m8(j,a)
u=new T.hX(j)
u.b=H.a7(j.getParameter(3379))
H.a7(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dY(a)
t=new X.fJ()
t.sfG(P.dp(P.C))
u.b=t
t=new X.h6(u)
t.f=0
t.r=V.dB()
t.x=V.dB()
t.ch=t.Q=1
u.c=t
t=new X.fP(u)
t.r=0
t.x=V.dB()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i2(u)
t.f=V.dB()
t.r=V.dB()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seG(H.c([],[[P.cs,P.O]]))
t=u.z
s=document
r=W.a5
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a3(s,"contextmenu",H.l(u.gf3(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a3(a,"focus",H.l(u.gf9(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a3(a,"blur",H.l(u.geY(),o),!1,p))
t=u.z
n=W.aL
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a3(s,"keyup",H.l(u.gfd(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a3(s,"keydown",H.l(u.gfb(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a3(a,"mousedown",H.l(u.gfh(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a3(a,"mouseup",H.l(u.gfl(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a3(a,l,H.l(u.gfj(),q),!1,r))
n=u.z
m=W.aY;(n&&C.a).h(n,W.a3(a,H.E(W.lO(a)),H.l(u.gfn(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a3(s,l,H.l(u.gf5(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a3(s,"mouseup",H.l(u.gf7(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a3(s,"pointerlockchange",H.l(u.gfp(),o),!1,p))
p=u.z
o=W.aB
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a3(a,"touchstart",H.l(u.gfD(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a3(a,"touchend",H.l(u.gfz(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a3(a,"touchmove",H.l(u.gfB(),s),!1,o))
k.Q=!0
k.ch=!1
k.cx=new P.bk(Date.now(),!1)
k.cy=0
k.cM()
return k},
f3:function f3(){},
ad:function ad(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hq:function hq(a){this.a=a},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
dS:function dS(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hZ:function hZ(a){this.a=a}},Z={
jT:function(a,b,c){var u
H.m(c,"$ib",[P.C],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cT(c)),35044)
a.bindBuffer(b,null)
return new Z.dZ(b,u)},
au:function(a){return new Z.aX(a)},
dZ:function dZ(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iD:function iD(a){this.a=a},
d5:function d5(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
aX:function aX(a){this.a=a}},D={
as:function(){var u=new D.bF()
u.saa(null)
u.sav(null)
u.c=null
u.d=0
return u},
f6:function f6(){},
bF:function bF(){var _=this
_.d=_.c=_.b=_.a=null},
fo:function fo(a){this.a=a},
fp:function fp(a){this.a=a},
D:function D(){this.b=null},
cd:function cd(a){this.b=null
this.$ti=a},
ce:function ce(a){this.b=null
this.$ti=a},
T:function T(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bl:function bl(){var _=this
_.d=_.c=_.b=_.a=null},
a0:function a0(){},
dm:function dm(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dA:function dA(){},
dJ:function dJ(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){}},X={d6:function d6(a,b){this.a=a
this.b=b},dl:function dl(a,b){this.a=a
this.b=b},fJ:function fJ(){this.d=this.b=this.a=null},fP:function fP(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ci:function ci(a,b,c){this.a=a
this.b=b
this.c=c},h6:function h6(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},i2:function i2(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dY:function dY(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lQ:function(a){var u=new X.fy(),t=V.bV(1)
u.a=new V.bD(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kF
if(t==null){t=V.m7(0,0,1,1)
$.kF=t}u.r=t
return u},
d7:function d7(){},
fy:function fy(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dz:function dz(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dM:function dM(){}},V={
bV:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
kd:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.dT(a-b,u)
return(a<0?a+u:a)+b},
K:function(a,b,c){if(a==null)return C.i.a3("null",c)
return C.i.a3(C.j.dJ(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
bX:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.z],"$ab")
u=H.c([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.K(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.P(u,p,C.i.a3(u[p],s))}return u},
ka:function(a){return C.j.ix(Math.pow(2,C.N.bY(Math.log(H.mB(a))/Math.log(2))))},
jO:function(){var u=$.kv
return u==null?$.kv=V.b3(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b3:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ku:function(a,b,c){var u=c.H(0,Math.sqrt(c.M(c))),t=b.aH(u),s=t.H(0,Math.sqrt(t.M(t))),r=u.aH(s),q=new V.S(a.a,a.b,a.c),p=s.aD(0).M(q),o=r.aD(0).M(q),n=u.aD(0).M(q)
return V.b3(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
dB:function(){var u=$.kz
return u==null?$.kz=new V.al(0,0):u},
kA:function(){var u=$.cm
return u==null?$.cm=new V.ay(0,0,0):u},
m7:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dF(a,b,c,d)},
cF:function(){var u=$.kS
return u==null?$.kS=new V.S(0,0,0):u},
kT:function(){var u=$.kR
return u==null?$.kR=new V.S(0,1,0):u},
me:function(){var u=$.iq
return u==null?$.iq=new V.S(0,0,1):u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fn:function fn(a){this.a=a},
dt:function dt(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a9:function a9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
al:function al(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dF:function dF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b8:function b8(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
W:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.i.as(a,0)
t=C.i.as(b,0)
s=new V.ho()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.hx()
u.e5(a)
return u},
i1:function(){var u=new V.i0(),t=P.e
u.sh4(new H.aK([t,V.cq]))
u.sh7(new H.aK([t,V.cv]))
u.c=null
return u},
b_:function b_(){},
aj:function aj(){},
dr:function dr(){},
ae:function ae(){this.a=null},
ho:function ho(){this.b=this.a=null},
hx:function hx(){this.a=null},
cq:function cq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(a){this.b=a
this.c=null},
i0:function i0(){this.c=this.b=this.a=null},
cw:function cw(a){this.b=a
this.a=this.c=null},
mZ:function(a){P.md(C.K,new V.jB(a))},
ma:function(a){var u=new V.hB()
u.e7(a,!0)
return u},
bi:function bi(){},
jB:function jB(a){this.a=a},
fd:function fd(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fz:function fz(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fA:function fA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hl:function hl(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hB:function hB(){this.b=this.a=null},
hD:function hD(a){this.a=a},
hC:function hC(a){this.a=a},
hE:function hE(a){this.a=a}},U={
kl:function(a){var u=new U.d8()
u.a=a
return u},
d8:function d8(){this.b=this.a=null},
bK:function bK(){},
dG:function dG(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dc:function dc(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lX:function(a,b){var u=a.a6,t=new A.fV(b,u)
t.e6(b,u)
t.e3(a,b)
return t},
jS:function(a,b,c,d,e){var u=new A.ia(a,c,e)
u.f=d
u.shc(P.lW(d,0,P.C))
return u},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a){this.a=a},
fV:function fV(a,b){var _=this
_.b0=_.cZ=_.b_=_.a6=_.ae=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.df=_.bS=_.de=_.bd=_.dd=_.dc=_.bc=_.bb=_.da=_.d9=_.ba=_.b9=_.b8=_.d8=_.d7=_.b7=_.d6=_.d5=_.b6=_.d4=_.d3=_.b5=_.b4=_.d2=_.d1=_.b3=_.b2=_.d0=_.d_=_.b1=null
_.bX=_.dj=_.bW=_.di=_.bV=_.dh=_.bU=_.dg=_.bT=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fY:function fY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ae=b3
_.a6=b4
_.b_=b5},
cx:function cx(a,b){this.b=a
this.c=b},
cB:function cB(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cz:function cz(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cC:function cC(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cA:function cA(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cD:function cD(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cp:function cp(){},
bE:function bE(a,b){this.a=a
this.b=b},
dU:function dU(){},
ih:function ih(a){this.a=a},
I:function I(a,b,c){this.a=a
this.c=b
this.d=c},
ic:function ic(a,b,c){this.a=a
this.c=b
this.d=c},
id:function id(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){this.a=a
this.c=b
this.d=c},
ia:function ia(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
Y:function Y(a,b,c){this.a=a
this.c=b
this.d=c},
ib:function ib(a,b,c){this.a=a
this.c=b
this.d=c},
H:function H(a,b,c){this.a=a
this.c=b
this.d=c},
ie:function ie(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
cy:function cy(a,b,c){this.a=a
this.c=b
this.d=c},
am:function am(a,b,c){this.a=a
this.c=b
this.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jm:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cS:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.S(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.S(u+a3,t+a1,s+a2)
q=new V.S(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.S(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jm(i)
l=F.jm(j.b)
k=F.n1(d,a0,new F.jl(j,F.jm(j.c),F.jm(j.d),l,m,c),b)
if(k!=null)a.c3(k)},
n1:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.ao,P.z,P.z]})
if(a<1)return
if(b<1)return
u=F.kH()
t=H.c([],[F.ao])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.cS(new V.bD(p,0,0,1),new V.al(r,1))
c.$3(o,r,0)
C.a.h(t,o.bQ(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.cS(new V.bD(j,i,h,1),new V.al(r,m))
c.$3(o,r,n)
C.a.h(t,o.bQ(d))}}u.d.hB(a+1,b+1,t)
return u},
de:function(a,b,c){var u=new F.a2(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.fW(a)
u.fX(b)
u.fY(c)
C.a.h(u.a.a.d.b,u)
u.a.a.W()
return u},
kH:function(){var u=new F.dI(),t=new F.ir(u)
t.b=!1
t.shd(H.c([],[F.ao]))
u.a=t
t=new F.hA(u)
t.sbz(H.c([],[F.bs]))
u.b=t
t=new F.hz(u)
t.seN(H.c([],[F.b2]))
u.c=t
t=new F.hy(u)
t.seH(H.c([],[F.a2]))
u.d=t
u.e=null
return u},
kU:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ao(),r=new F.iz()
r.sbz(H.c([],[F.bs]))
s.b=r
r=new F.iv()
u=[F.b2]
r.seO(H.c([],u))
r.seP(H.c([],u))
s.c=r
r=new F.is()
u=[F.a2]
r.seI(H.c([],u))
r.seJ(H.c([],u))
r.seK(H.c([],u))
s.d=r
h=$.lu()
s.e=0
r=$.bd()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bc().a)!==0?e:t
s.x=(u&$.bb().a)!==0?b:t
s.y=(u&$.be().a)!==0?f:t
s.z=(u&$.bf().a)!==0?g:t
s.Q=(u&$.lv().a)!==0?c:t
s.ch=(u&$.c0().a)!==0?i:0
s.cx=(u&$.ba().a)!==0?a:t
return s},
jl:function jl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a2:function a2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fq:function fq(){},
hF:function hF(){},
b2:function b2(){this.b=this.a=null},
fL:function fL(){},
i9:function i9(){},
bs:function bs(){this.a=null},
dI:function dI(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hy:function hy(a){this.a=a
this.b=null},
hz:function hz(a){this.a=a
this.b=null},
hA:function hA(a){this.a=a
this.b=null},
ao:function ao(){var _=this
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
hf:function hf(){},
iz:function iz(){this.b=null},
lc:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="testCanvas",e=null,d=V.ma("Test 005"),c=W.jG()
c.className="pageLargeCanvas"
c.id=f
d.a.appendChild(c)
u=[P.e]
d.cT(H.c(["A test of the Material Lighting shader with 2D textures and directional ","lighting. This test has texturing for emission, ambient, diffuse, and ","specular. The same texture is used for ambient and diffuse. ","The emission texture makes the lights on the panel glow. ","The specular texture makes specific parts shiny and other parts not."],u))
d.cT(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(f)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.mc(t,!0,!0,!0,!1)
r=new E.ad()
r.a=""
r.b=!0
u=E.ad
r.sey(0,O.jH(u))
r.y.bj(r.gi3(),r.gi6())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.scd(0,e)
r.saL(e)
q=F.kH()
F.cS(q,e,e,1,1,1,0,0,1)
F.cS(q,e,e,1,1,0,1,0,3)
F.cS(q,e,e,1,1,0,0,1,2)
F.cS(q,e,e,1,1,-1,0,0,0)
F.cS(q,e,e,1,1,0,-1,0,0)
F.cS(q,e,e,1,1,0,0,-1,3)
q.ay()
q.i2(new F.iw(),new F.hf())
r.scd(0,q)
p=new U.dG()
p.r=p.f=p.e=p.d=p.c=p.b=p.a=0
p.sdO(0)
p.sdw(0,0)
p.sdE(0)
o=p.d
if(!(Math.abs(o-0.1)<$.N().a)){p.d=0.1
o=new D.T("deltaYaw",o,0.1,[P.z])
o.b=!0
p.au(o)}o=p.e
if(!(Math.abs(o-0.21)<$.N().a)){p.e=0.21
o=new D.T("deltaPitch",o,0.21,[P.z])
o.b=!0
p.au(o)}o=p.f
if(!(Math.abs(o-0.32)<$.N().a)){p.f=0.32
o=new D.T("deltaRoll",o,0.32,[P.z])
o.b=!0
p.au(o)}r.saL(p)
n=s.f.c1("../resources/CtrlPnlColor.png")
m=new O.ds()
m.sev(O.jH(V.a9))
m.e.bj(m.geU(),m.geW())
p=new O.aM(m,"emission")
p.c=C.c
p.f=new V.a1(0,0,0)
m.f=p
p=new O.aM(m,"ambient")
p.c=C.c
p.f=new V.a1(0,0,0)
m.r=p
p=new O.aM(m,"diffuse")
p.c=C.c
p.f=new V.a1(0,0,0)
m.x=p
p=new O.aM(m,"invDiffuse")
p.c=C.c
p.f=new V.a1(0,0,0)
m.y=p
p=new O.h_(m,"specular")
p.c=C.c
p.f=new V.a1(0,0,0)
p.ch=100
m.z=p
p=new O.fX(m,"bump")
p.c=C.c
m.Q=p
m.ch=null
p=new O.aM(m,"reflect")
p.c=C.c
p.f=new V.a1(0,0,0)
m.cx=p
p=new O.fZ(m,"refract")
p.c=C.c
p.f=new V.a1(0,0,0)
p.ch=1
m.cy=p
p=new O.fW(m,"alpha")
p.c=C.c
p.f=1
m.db=p
p=new D.dm()
p.ci(D.a0)
p.seE(H.c([],[D.bl]))
p.sfF(H.c([],[D.dA]))
p.sh3(H.c([],[D.dJ]))
p.sh9(H.c([],[D.dP]))
p.sha(H.c([],[D.dQ]))
p.shb(H.c([],[D.dR]))
p.ch=p.Q=null
p.cc(p.geS(),p.gft(),p.gfv())
m.dx=p
o=p.Q
p=o==null?p.Q=D.as():o
p.h(0,m.gfM())
p=m.dx
o=p.ch
p=o==null?p.ch=D.as():o
p.h(0,m.gaU())
m.dy=null
p=m.dx
l=V.kT()
o=U.kl(V.ku(V.kA(),l,new V.S(1,-1,-3)))
k=new V.a1(1,1,1)
j=new D.bl()
j.c=new V.a1(1,1,1)
j.a=V.me()
i=j.b
j.b=o
o.gw().h(0,j.gea())
o=new D.T("mover",i,j.b,[U.bK])
o.b=!0
j.ag(o)
if(!j.c.t(0,k)){i=j.c
j.c=k
o=new D.T("color",i,k,[V.a1])
o.b=!0
j.ag(o)}p.h(0,j)
m.f.sbg(s.f.c1("../resources/CtrlPnlEmission.png"))
m.r.sal(0,new V.a1(V.bV(0.2),V.bV(0.2),V.bV(0.2)))
m.x.sal(0,new V.a1(V.bV(0.8),V.bV(0.8),V.bV(0.8)))
m.r.sbg(n)
m.x.sbg(n)
m.z.sbg(s.f.c1("../resources/CtrlPnlSpecular.png"))
p=m.z
if(p.c===C.c){p.c=C.f
p.bm()
p.bE(100)
o=p.a
o.a=null
o.S(e)}p.bE(10)
p=new M.dc()
p.sec(0,O.jH(u))
p.d.bj(p.gf_(),p.gf1())
p.x=p.r=p.f=p.e=null
h=X.lQ(e)
g=new X.dz()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.saL(e)
u=g.c
if(!(Math.abs(u-1.0471975511965976)<$.N().a)){g.c=1.0471975511965976
u=new D.T("fov",u,1.0471975511965976,[P.z])
u.b=!0
g.ar(u)}u=g.d
if(!(Math.abs(u-0.1)<$.N().a)){g.d=0.1
u=new D.T("near",u,0.1,[P.z])
u.b=!0
g.ar(u)}u=g.e
if(!(Math.abs(u-2000)<$.N().a)){g.e=2000
u=new D.T("far",u,2000,[P.z])
u.b=!0
g.ar(u)}u=p.a
if(u!==g){if(u!=null)u.gw().D(0,p.ga9())
i=p.a
p.a=g
g.gw().h(0,p.ga9())
u=new D.T("camera",i,p.a,[X.d7])
u.b=!0
p.ah(u)}u=p.b
if(u!==h){if(u!=null)u.gw().D(0,p.ga9())
i=p.b
p.b=h
h.gw().h(0,p.ga9())
u=new D.T("target",i,p.b,[X.dM])
u.b=!0
p.ah(u)}p.sdH(e)
p.sdH(m)
p.d.h(0,r)
p.a.saL(U.kl(V.b3(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=s.d
if(u!==p){if(u!=null)u.gw().D(0,s.gcj())
s.d=p
p.gw().h(0,s.gcj())
s.ck()}u=s.z
if(u==null)u=s.z=D.as()
p={func:1,ret:-1,args:[D.D]}
o=H.l(new F.jy(d,m),p)
if(u.b==null)u.sav(H.c([],[p]))
u=u.b;(u&&C.a).h(u,o)
V.mZ(s)},
jy:function jy(a,b){this.a=a
this.b=b}},T={cu:function cu(){},dO:function dO(){},hW:function hW(){var _=this
_.y=_.d=_.c=_.b=_.a=null},hX:function hX(a){var _=this
_.a=a
_.e=_.d=_.b=null},hY:function hY(a,b,c,d,e,f,g){var _=this
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
H.jM.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gI:function(a){return H.cn(a)},
i:function(a){return"Instance of '"+H.bM(a)+"'"}}
J.fG.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iP:1}
J.di.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dk.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hk.prototype={}
J.cE.prototype={}
J.br.prototype={
i:function(a){var u=a[$.lj()]
if(u==null)return this.e_(a)
return"JavaScript function for "+H.k(J.ai(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibo:1}
J.aJ.prototype={
h:function(a,b){H.G(b,H.x(a,0))
if(!!a.fixed$length)H.t(P.an("add"))
a.push(b)},
dC:function(a,b){if(!!a.fixed$length)H.t(P.an("removeAt"))
if(b<0||b>=a.length)throw H.f(P.dE(b,null))
return a.splice(b,1)[0]},
D:function(a,b){var u
if(!!a.fixed$length)H.t(P.an("remove"))
for(u=0;u<a.length;++u)if(J.Z(a[u],b)){a.splice(u,1)
return!0}return!1},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bj(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.P(t,u,H.k(a[u]))
return t.join(b)},
i_:function(a){return this.l(a,"")},
hV:function(a,b){var u,t,s
H.l(b,{func:1,ret:P.P,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.J(b.$1(s)))return s
if(a.length!==u)throw H.f(P.bj(a))}throw H.f(H.fF())},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
dX:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aP(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aP(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
ghU:function(a){if(a.length>0)return a[0]
throw H.f(H.fF())},
gbe:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.fF())},
cU:function(a,b){var u,t
H.l(b,{func:1,ret:P.P,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.J(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.bj(a))}return!1},
L:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Z(a[u],b))return!0
return!1},
i:function(a){return P.jJ(a,"[","]")},
gN:function(a){return new J.aq(a,a.length,[H.x(a,0)])},
gI:function(a){return H.cn(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.t(P.an("set length"))
if(b<0)throw H.f(P.aP(b,0,null,"newLength",null))
a.length=b},
P:function(a,b,c){H.G(c,H.x(a,0))
if(!!a.immutable$list)H.t(P.an("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cW(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.jL.prototype={}
J.aq.prototype={
gC:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.A(s))
u=t.c
if(u>=r){t.scB(null)
return!1}t.scB(s[u]);++t.c
return!0},
scB:function(a){this.d=H.G(a,H.x(this,0))},
$iaI:1}
J.dj.prototype={
ix:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.an(""+a+".toInt()"))},
bY:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.an(""+a+".floor()"))},
a7:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.an(""+a+".round()"))},
dJ:function(a,b){var u,t
if(b>20)throw H.f(P.aP(b,0,20,"fractionDigits",null))
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
dT:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e2:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cO(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.cO(a,b)},
cO:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.an("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
aX:function(a,b){var u
if(a>0)u=this.h2(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h2:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia6:1}
J.dh.prototype={$iC:1}
J.dg.prototype={}
J.bI.prototype={
bP:function(a,b){if(b<0)throw H.f(H.cW(a,b))
if(b>=a.length)H.t(H.cW(a,b))
return a.charCodeAt(b)},
as:function(a,b){if(b>=a.length)throw H.f(H.cW(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(typeof b!=="string")throw H.f(P.jE(b,null,null))
return a+b},
bk:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aS:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.dE(b,null))
if(b>c)throw H.f(P.dE(b,null))
if(c>a.length)throw H.f(P.dE(c,null))
return a.substring(b,c)},
aR:function(a,b){return this.aS(a,b,null)},
iA:function(a){return a.toLowerCase()},
V:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a3:function(a,b){var u=b-a.length
if(u<=0)return a
return this.V(" ",u)+a},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikx:1,
$ie:1}
H.q.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.i.bP(this.a,b)},
$adX:function(){return[P.C]},
$aw:function(){return[P.C]},
$ai:function(){return[P.C]},
$ab:function(){return[P.C]}}
H.fk.prototype={}
H.bJ.prototype={
gN:function(a){var u=this
return new H.cf(u,u.gm(u),[H.ah(u,"bJ",0)])},
bi:function(a,b){return this.dZ(0,H.l(b,{func:1,ret:P.P,args:[H.ah(this,"bJ",0)]}))}}
H.cf.prototype={
gC:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.k4(s),q=r.gm(s)
if(t.b!==q)throw H.f(P.bj(s))
u=t.c
if(u>=q){t.saE(null)
return!1}t.saE(r.A(s,u));++t.c
return!0},
saE:function(a){this.d=H.G(a,H.x(this,0))},
$iaI:1}
H.fS.prototype={
gN:function(a){return new H.fT(J.bz(this.a),this.b,this.$ti)},
gm:function(a){return J.bA(this.a)},
A:function(a,b){return this.b.$1(J.jD(this.a,b))},
$ai:function(a,b){return[b]}}
H.fT.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.saE(u.c.$1(t.gC(t)))
return!0}u.saE(null)
return!1},
gC:function(a){return this.a},
saE:function(a){this.a=H.G(a,H.x(this,1))},
$aaI:function(a,b){return[b]}}
H.fU.prototype={
gm:function(a){return J.bA(this.a)},
A:function(a,b){return this.b.$1(J.jD(this.a,b))},
$abJ:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cG.prototype={
gN:function(a){return new H.iE(J.bz(this.a),this.b,this.$ti)}}
H.iE.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(H.J(t.$1(u.gC(u))))return!0
return!1},
gC:function(a){var u=this.a
return u.gC(u)}}
H.bG.prototype={}
H.dX.prototype={}
H.dW.prototype={}
H.i6.prototype={
a2:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hg.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fI.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.k(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.k(t.a)+")"
return s+r+"' on '"+u+"' ("+H.k(t.a)+")"}}
H.ik.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jC.prototype={
$1:function(a){if(!!J.U(a).$ibn)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:14}
H.ey.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaf:1}
H.c5.prototype={
i:function(a){return"Closure '"+H.bM(this).trim()+"'"},
$ibo:1,
giD:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hT.prototype={}
H.hJ.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c_(u)+"'"}}
H.c2.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c2))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cn(this.a)
else u=typeof t!=="object"?J.d_(t):H.cn(t)
return(u^H.cn(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bM(u)+"'")}}
H.i8.prototype={
i:function(a){return this.a}}
H.f5.prototype={
i:function(a){return this.a}}
H.hv.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.iF.prototype={
i:function(a){return"Assertion failed: "+P.dd(this.a)}}
H.aK.prototype={
gm:function(a){return this.a},
gZ:function(a){return new H.dn(this,[H.x(this,0)])},
cX:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cw(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cw(t,b)}else return s.hY(b)},
hY:function(a){var u=this.d
if(u==null)return!1
return this.bZ(this.bs(u,J.d_(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aV(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aV(r,b)
s=t==null?null:t.b
return s}else return q.hZ(b)},
hZ:function(a){var u,t,s=this.d
if(s==null)return
u=this.bs(s,J.d_(a)&0x3ffffff)
t=this.bZ(u,a)
if(t<0)return
return u[t].b},
P:function(a,b,c){var u,t,s,r,q,p,o=this
H.G(b,H.x(o,0))
H.G(c,H.x(o,1))
if(typeof b==="string"){u=o.b
o.co(u==null?o.b=o.bx():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.co(t==null?o.c=o.bx():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bx()
r=J.d_(b)&0x3ffffff
q=o.bs(s,r)
if(q==null)o.bF(s,r,[o.by(b,c)])
else{p=o.bZ(q,b)
if(p>=0)q[p].b=c
else q.push(o.by(b,c))}}},
J:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.x(s,0),H.x(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.bj(s))
u=u.c}},
co:function(a,b,c){var u,t=this
H.G(b,H.x(t,0))
H.G(c,H.x(t,1))
u=t.aV(a,b)
if(u==null)t.bF(a,b,t.by(b,c))
else u.b=c},
eo:function(){this.r=this.r+1&67108863},
by:function(a,b){var u,t=this,s=new H.fM(H.G(a,H.x(t,0)),H.G(b,H.x(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eo()
return s},
bZ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Z(a[t].a,b))return t
return-1},
i:function(a){return P.kt(this)},
aV:function(a,b){return a[b]},
bs:function(a,b){return a[b]},
bF:function(a,b,c){a[b]=c},
eD:function(a,b){delete a[b]},
cw:function(a,b){return this.aV(a,b)!=null},
bx:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bF(t,u,t)
this.eD(t,u)
return t}}
H.fM.prototype={}
H.dn.prototype={
gm:function(a){return this.a.a},
gN:function(a){var u=this.a,t=new H.fN(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fN.prototype={
gC:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bj(t))
else{t=u.c
if(t==null){u.scn(null)
return!1}else{u.scn(t.a)
u.c=u.c.c
return!0}}},
scn:function(a){this.d=H.G(a,H.x(this,0))},
$iaI:1}
H.ju.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.jv.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.jw.prototype={
$1:function(a){return this.a(H.E(a))},
$S:31}
H.fH.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikx:1}
H.ck.prototype={$inn:1}
H.du.prototype={
gm:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.cj.prototype={
j:function(a,b){H.bv(b,a,a.length)
return a[b]},
$abG:function(){return[P.z]},
$aw:function(){return[P.z]},
$ii:1,
$ai:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dv.prototype={
$abG:function(){return[P.C]},
$aw:function(){return[P.C]},
$ii:1,
$ai:function(){return[P.C]},
$ib:1,
$ab:function(){return[P.C]}}
H.h7.prototype={
j:function(a,b){H.bv(b,a,a.length)
return a[b]}}
H.h8.prototype={
j:function(a,b){H.bv(b,a,a.length)
return a[b]}}
H.h9.prototype={
j:function(a,b){H.bv(b,a,a.length)
return a[b]}}
H.ha.prototype={
j:function(a,b){H.bv(b,a,a.length)
return a[b]}}
H.hb.prototype={
j:function(a,b){H.bv(b,a,a.length)
return a[b]}}
H.dw.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bv(b,a,a.length)
return a[b]},
$ino:1}
H.hc.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bv(b,a,a.length)
return a[b]}}
H.cK.prototype={}
H.cL.prototype={}
H.cM.prototype={}
H.cN.prototype={}
P.iH.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.iG.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:26}
P.iI.prototype={
$0:function(){this.a.$0()},
$S:1}
P.iJ.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eE.prototype={
el:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bW(new P.jh(this,b),0),a)
else throw H.f(P.an("`setTimeout()` not found."))},
em:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bW(new P.jg(this,a,Date.now(),b),0),a)
else throw H.f(P.an("Periodic timer."))},
$iaU:1}
P.jh.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.jg.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.h.e2(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.aZ.prototype={
i1:function(a){if(this.c!==6)return!0
return this.b.b.c8(H.l(this.d,{func:1,ret:P.P,args:[P.O]}),a.a,P.P,P.O)},
hX:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.x(this,1)},r=this.b.b
if(H.eV(u,{func:1,args:[P.O,P.af]}))return H.k3(r.ir(u,a.a,a.b,null,t,P.af),s)
else return H.k3(r.c8(H.l(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.av.prototype={
dI:function(a,b,c){var u,t,s,r=H.x(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.X
if(u!==C.k){u.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mt(b,u)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.av($.X,[c])
s=b==null?1:3
this.cp(new P.aZ(t,s,a,b,[r,c]))
return t},
iw:function(a,b){return this.dI(a,null,b)},
cp:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.n(t.c,"$iaZ")
t.c=a}else{if(s===2){u=H.n(t.c,"$iav")
s=u.a
if(s<4){u.cp(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jp(null,null,s,H.l(new P.iR(t,a),{func:1,ret:-1}))}},
cK:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.n(p.c,"$iaZ")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.n(p.c,"$iav")
u=q.a
if(u<4){q.cK(a)
return}p.a=u
p.c=q.c}o.a=p.aW(a)
u=p.b
u.toString
P.jp(null,null,u,H.l(new P.iV(o,p),{func:1,ret:-1}))}},
bB:function(){var u=H.n(this.c,"$iaZ")
this.c=null
return this.aW(u)},
aW:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cs:function(a){var u,t,s=this,r=H.x(s,0)
H.k3(a,{futureOr:1,type:r})
u=s.$ti
if(H.k0(a,"$icb",u,"$acb"))if(H.k0(a,"$iav",u,null))P.kV(a,s)
else P.mj(a,s)
else{t=s.bB()
H.G(a,r)
s.a=4
s.c=a
P.cJ(s,t)}},
ct:function(a,b){var u,t=this
H.n(b,"$iaf")
u=t.bB()
t.a=8
t.c=new P.a8(a,b)
P.cJ(t,u)},
$icb:1}
P.iR.prototype={
$0:function(){P.cJ(this.a,this.b)},
$S:1}
P.iV.prototype={
$0:function(){P.cJ(this.b,this.a.a)},
$S:1}
P.iS.prototype={
$1:function(a){var u=this.a
u.a=0
u.cs(a)},
$S:17}
P.iT.prototype={
$2:function(a,b){H.n(b,"$iaf")
this.a.ct(a,b)},
$1:function(a){return this.$2(a,null)},
$S:40}
P.iU.prototype={
$0:function(){this.a.ct(this.b,this.c)},
$S:1}
P.iY.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dF(H.l(s.d,{func:1}),null)}catch(r){u=H.ap(r)
t=H.bY(r)
if(o.d){s=H.n(o.a.a.c,"$ia8").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.n(o.a.a.c,"$ia8")
else q.b=new P.a8(u,t)
q.a=!0
return}if(!!J.U(n).$icb){if(n instanceof P.av&&n.a>=4){if(n.a===8){s=o.b
s.b=H.n(n.c,"$ia8")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iw(new P.iZ(p),null)
s.a=!1}},
$S:2}
P.iZ.prototype={
$1:function(a){return this.a},
$S:25}
P.iX.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.x(s,0)
q=H.G(n.c,r)
p=H.x(s,1)
n.a.b=s.b.b.c8(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ap(o)
t=H.bY(o)
s=n.a
s.b=new P.a8(u,t)
s.a=!0}},
$S:2}
P.iW.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.n(m.a.a.c,"$ia8")
r=m.c
if(H.J(r.i1(u))&&r.e!=null){q=m.b
q.b=r.hX(u)
q.a=!1}}catch(p){t=H.ap(p)
s=H.bY(p)
r=H.n(m.a.a.c,"$ia8")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a8(t,s)
n.a=!0}},
$S:2}
P.e_.prototype={}
P.hM.prototype={
gm:function(a){var u,t,s=this,r={},q=new P.av($.X,[P.C])
r.a=0
u=H.x(s,0)
t=H.l(new P.hO(r,s),{func:1,ret:-1,args:[u]})
H.l(new P.hP(r,q),{func:1,ret:-1})
W.a3(s.a,s.b,t,!1,u)
return q}}
P.hO.prototype={
$1:function(a){H.G(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.x(this.b,0)]}}}
P.hP.prototype={
$0:function(){this.b.cs(this.a.a)},
$S:1}
P.cs.prototype={}
P.hN.prototype={}
P.aU.prototype={}
P.a8.prototype={
i:function(a){return H.k(this.a)},
$ibn:1}
P.jk.prototype={$inC:1}
P.jo.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dy():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:1}
P.j3.prototype={
is:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.k===$.X){a.$0()
return}P.l0(r,r,this,a,-1)}catch(s){u=H.ap(s)
t=H.bY(s)
P.jn(r,r,this,u,H.n(t,"$iaf"))}},
it:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.G(b,c)
try{if(C.k===$.X){a.$1(b)
return}P.l1(r,r,this,a,b,-1,c)}catch(s){u=H.ap(s)
t=H.bY(s)
P.jn(r,r,this,u,H.n(t,"$iaf"))}},
hG:function(a,b){return new P.j5(this,H.l(a,{func:1,ret:b}),b)},
bL:function(a){return new P.j4(this,H.l(a,{func:1,ret:-1}))},
cV:function(a,b){return new P.j6(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dF:function(a,b){H.l(a,{func:1,ret:b})
if($.X===C.k)return a.$0()
return P.l0(null,null,this,a,b)},
c8:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.G(b,d)
if($.X===C.k)return a.$1(b)
return P.l1(null,null,this,a,b,c,d)},
ir:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.G(b,e)
H.G(c,f)
if($.X===C.k)return a.$2(b,c)
return P.mu(null,null,this,a,b,c,d,e,f)}}
P.j5.prototype={
$0:function(){return this.a.dF(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.j4.prototype={
$0:function(){return this.a.is(this.b)},
$S:2}
P.j6.prototype={
$1:function(a){var u=this.c
return this.a.it(this.b,H.G(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j1.prototype={
gN:function(a){var u=this,t=new P.ef(u,u.r,u.$ti)
t.c=u.e
return t},
gm:function(a){return this.a},
L:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.n(u[b],"$ibR")!=null}else{t=this.ez(b)
return t}},
ez:function(a){var u=this.d
if(u==null)return!1
return this.br(this.cC(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.G(b,H.x(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cq(u==null?s.b=P.jV():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cq(t==null?s.c=P.jV():t,b)}else return s.ep(0,b)},
ep:function(a,b){var u,t,s,r=this
H.G(b,H.x(r,0))
u=r.d
if(u==null)u=r.d=P.jV()
t=r.cu(b)
s=u[t]
if(s==null)u[t]=[r.bo(b)]
else{if(r.br(s,b)>=0)return!1
s.push(r.bo(b))}return!0},
D:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fI(this.c,b)
else return this.fH(0,b)},
fH:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cC(r,b)
t=s.br(u,b)
if(t<0)return!1
s.cP(u.splice(t,1)[0])
return!0},
cq:function(a,b){H.G(b,H.x(this,0))
if(H.n(a[b],"$ibR")!=null)return!1
a[b]=this.bo(b)
return!0},
fI:function(a,b){var u
if(a==null)return!1
u=H.n(a[b],"$ibR")
if(u==null)return!1
this.cP(u)
delete a[b]
return!0},
cE:function(){this.r=1073741823&this.r+1},
bo:function(a){var u,t=this,s=new P.bR(H.G(a,H.x(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cE()
return s},
cP:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cE()},
cu:function(a){return J.d_(a)&1073741823},
cC:function(a,b){return a[this.cu(b)]},
br:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Z(a[t].a,b))return t
return-1}}
P.bR.prototype={}
P.ef.prototype={
gC:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bj(t))
else{t=u.c
if(t==null){u.scr(null)
return!1}else{u.scr(H.G(t.a,H.x(u,0)))
u.c=u.c.b
return!0}}},
scr:function(a){this.d=H.G(a,H.x(this,0))},
$iaI:1}
P.fO.prototype={$ii:1,$ib:1}
P.w.prototype={
gN:function(a){return new H.cf(a,this.gm(a),[H.cX(this,a,"w",0)])},
A:function(a,b){return this.j(a,b)},
iz:function(a,b){var u,t=this,s=H.c([],[H.cX(t,a,"w",0)])
C.a.sm(s,t.gm(a))
for(u=0;u<t.gm(a);++u)C.a.P(s,u,t.j(a,u))
return s},
iy:function(a){return this.iz(a,!0)},
i:function(a){return P.jJ(a,"[","]")}}
P.fQ.prototype={}
P.fR.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.k(a)
t.a=u+": "
t.a+=H.k(b)},
$S:11}
P.a4.prototype={
J:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.cX(s,a,"a4",0),H.cX(s,a,"a4",1)]})
for(u=J.bz(s.gZ(a));u.u();){t=u.gC(u)
b.$2(t,s.j(a,t))}},
gm:function(a){return J.bA(this.gZ(a))},
i:function(a){return P.kt(a)},
$iM:1}
P.j8.prototype={
ac:function(a,b){var u
for(u=J.bz(H.m(b,"$ii",this.$ti,"$ai"));u.u();)this.h(0,u.gC(u))},
i:function(a){return P.jJ(this,"{","}")},
A:function(a,b){var u,t,s,r=this
P.kD(b,"index")
for(u=P.mm(r,r.r,H.x(r,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.f(P.V(b,r,"index",null,t))},
$ii:1,
$ikG:1}
P.eg.prototype={}
P.c6.prototype={}
P.c7.prototype={}
P.fm.prototype={
$ac6:function(){return[P.e,[P.b,P.C]]}}
P.fD.prototype={
i:function(a){return this.a}}
P.fC.prototype={
eA:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.h(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.b6("")
if(r>b)q.a+=C.i.aS(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lD(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$ac7:function(){return[P.e,P.e]}}
P.io.prototype={}
P.ip.prototype={
hK:function(a){var u,t,s=P.kE(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ji(u)
if(t.eL(a,0,s)!==s)t.cQ(C.i.bP(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mp(0,t.b,u.length)))},
$ac7:function(){return[P.e,[P.b,P.C]]}}
P.ji.prototype={
cQ:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eL:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.i.bP(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.i.as(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cQ(r,C.i.as(a,p)))s=p}else if(r<=2047){q=n.b
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
P.P.prototype={}
P.bk.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bk&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.h.aX(u,30))&1073741823},
i:function(a){var u=this,t=P.lL(H.m4(u)),s=P.d9(H.m2(u)),r=P.d9(H.lZ(u)),q=P.d9(H.m_(u)),p=P.d9(H.m1(u)),o=P.d9(H.m3(u)),n=P.lM(H.m0(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.bm.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bm&&this.a===b.a},
gI:function(a){return C.h.gI(this.a)},
i:function(a){var u,t,s,r=new P.fj(),q=this.a
if(q<0)return"-"+new P.bm(0-q).i(0)
u=r.$1(C.h.X(q,6e7)%60)
t=r.$1(C.h.X(q,1e6)%60)
s=new P.fi().$1(q%1e6)
return""+C.h.X(q,36e8)+":"+H.k(u)+":"+H.k(t)+"."+H.k(s)}}
P.fi.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.fj.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.bn.prototype={}
P.eY.prototype={
i:function(a){return"Assertion failed"}}
P.dy.prototype={
i:function(a){return"Throw of null."}}
P.ax.prototype={
gbq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbp:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbq()+o+u
if(!q.a)return t
s=q.gbp()
r=P.dd(q.b)
return t+s+": "+r}}
P.bN.prototype={
gbq:function(){return"RangeError"},
gbp:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.k(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.k(s)
else if(t>s)u=": Not in range "+H.k(s)+".."+H.k(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.k(s)}return u}}
P.fE.prototype={
gbq:function(){return"RangeError"},
gbp:function(){var u,t=H.a7(this.b)
if(typeof t!=="number")return t.dS()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.k(u)},
gm:function(a){return this.f}}
P.il.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ij.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cr.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f7.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dd(u)+"."}}
P.hj.prototype={
i:function(a){return"Out of Memory"},
$ibn:1}
P.dK.prototype={
i:function(a){return"Stack Overflow"},
$ibn:1}
P.fc.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e7.prototype={
i:function(a){return"Exception: "+this.a}}
P.fx.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.i.aS(s,0,75)+"...":s
return t+"\n"+r}}
P.bo.prototype={}
P.C.prototype={}
P.i.prototype={
bi:function(a,b){var u=H.ah(this,"i",0)
return new H.cG(this,H.l(b,{func:1,ret:P.P,args:[u]}),[u])},
gm:function(a){var u,t=this.gN(this)
for(u=0;t.u();)++u
return u},
gap:function(a){var u,t=this.gN(this)
if(!t.u())throw H.f(H.fF())
u=t.gC(t)
if(t.u())throw H.f(H.lS())
return u},
A:function(a,b){var u,t,s
P.kD(b,"index")
for(u=this.gN(this),t=0;u.u();){s=u.gC(u)
if(b===t)return s;++t}throw H.f(P.V(b,this,"index",null,t))},
i:function(a){return P.lR(this,"(",")")}}
P.aI.prototype={}
P.b.prototype={$ii:1}
P.M.prototype={}
P.L.prototype={
gI:function(a){return P.O.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
t:function(a,b){return this===b},
gI:function(a){return H.cn(this)},
i:function(a){return"Instance of '"+H.bM(this)+"'"},
toString:function(){return this.i(this)}}
P.af.prototype={}
P.e.prototype={$ikx:1}
P.b6.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.u.prototype={}
W.eW.prototype={
gm:function(a){return a.length}}
W.d0.prototype={
i:function(a){return String(a)},
$id0:1}
W.eX.prototype={
i:function(a){return String(a)}}
W.c1.prototype={$ic1:1}
W.d2.prototype={}
W.bg.prototype={$ibg:1}
W.bC.prototype={
ca:function(a,b,c){if(c!=null)return a.getContext(b,P.mC(c))
return a.getContext(b)},
dR:function(a,b){return this.ca(a,b,null)},
$ibC:1}
W.c4.prototype={$ic4:1}
W.bh.prototype={
gm:function(a){return a.length}}
W.c8.prototype={$ic8:1}
W.f8.prototype={
gm:function(a){return a.length}}
W.R.prototype={$iR:1}
W.c9.prototype={
gm:function(a){return a.length}}
W.f9.prototype={}
W.aE.prototype={}
W.aF.prototype={}
W.fa.prototype={
gm:function(a){return a.length}}
W.fb.prototype={
gm:function(a){return a.length}}
W.fe.prototype={
gm:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.ff.prototype={
i:function(a){return String(a)}}
W.da.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.at,P.a6]]},
$aw:function(){return[[P.at,P.a6]]},
$ii:1,
$ai:function(){return[[P.at,P.a6]]},
$ib:1,
$ab:function(){return[[P.at,P.a6]]},
$ay:function(){return[[P.at,P.a6]]}}
W.db.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaC(a))+" x "+H.k(this.gaA(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iat)return!1
return a.left===u.gdm(b)&&a.top===u.gdL(b)&&this.gaC(a)===u.gaC(b)&&this.gaA(a)===u.gaA(b)},
gI:function(a){return W.kX(C.j.gI(a.left),C.j.gI(a.top),C.j.gI(this.gaC(a)),C.j.gI(this.gaA(a)))},
gaA:function(a){return a.height},
gdm:function(a){return a.left},
gdL:function(a){return a.top},
gaC:function(a){return a.width},
$iat:1,
$aat:function(){return[P.a6]}}
W.fg.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.e]},
$aw:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$ay:function(){return[P.e]}}
W.fh.prototype={
gm:function(a){return a.length}}
W.iL.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.n(u[b],"$iQ")},
h:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var u=this.iy(this)
return new J.aq(u,u.length,[H.x(u,0)])},
$aw:function(){return[W.Q]},
$ai:function(){return[W.Q]},
$ab:function(){return[W.Q]}}
W.Q.prototype={
ghF:function(a){return new W.iN(a)},
gcW:function(a){return new W.iL(a,a.children)},
i:function(a){return a.localName},
a1:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.ko
if(u==null){u=H.c([],[W.ak])
t=new W.dx(u)
C.a.h(u,W.kW(null))
C.a.h(u,W.kY())
$.ko=t
d=t}else d=u
u=$.kn
if(u==null){u=new W.eK(d)
$.kn=u
c=u}else{u.a=d
c=u}}if($.b0==null){u=document
t=u.implementation.createHTMLDocument("")
$.b0=t
$.jI=t.createRange()
t=$.b0.createElement("base")
H.n(t,"$ic1")
t.href=u.baseURI
$.b0.head.appendChild(t)}u=$.b0
if(u.body==null){t=u.createElement("body")
u.body=H.n(t,"$ibg")}u=$.b0
if(!!this.$ibg)s=u.body
else{s=u.createElement(a.tagName)
$.b0.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.L(C.Q,a.tagName)){$.jI.selectNodeContents(s)
r=$.jI.createContextualFragment(b)}else{s.innerHTML=b
r=$.b0.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.b0.body
if(s==null?u!=null:s!==u)J.kg(s)
c.cb(r)
document.adoptNode(r)
return r},
hM:function(a,b,c){return this.a1(a,b,c,null)},
dV:function(a,b){a.textContent=null
a.appendChild(this.a1(a,b,null,null))},
$iQ:1,
gdG:function(a){return a.tagName}}
W.fl.prototype={
$1:function(a){return!!J.U(H.n(a,"$iB")).$iQ},
$S:13}
W.o.prototype={$io:1}
W.d.prototype={
hA:function(a,b,c,d){H.l(c,{func:1,args:[W.o]})
if(c!=null)this.eq(a,b,c,!1)},
eq:function(a,b,c,d){return a.addEventListener(b,H.bW(H.l(c,{func:1,args:[W.o]}),1),!1)},
$id:1}
W.aG.prototype={$iaG:1}
W.fr.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aG]},
$aw:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$ay:function(){return[W.aG]}}
W.fs.prototype={
gm:function(a){return a.length}}
W.fw.prototype={
gm:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.fB.prototype={
gm:function(a){return a.length}}
W.bH.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.B]},
$aw:function(){return[W.B]},
$ii:1,
$ai:function(){return[W.B]},
$ib:1,
$ab:function(){return[W.B]},
$ibH:1,
$ay:function(){return[W.B]}}
W.bp.prototype={$ibp:1,
gcY:function(a){return a.data}}
W.cc.prototype={$icc:1}
W.aL.prototype={$iaL:1}
W.dq.prototype={
i:function(a){return String(a)},
$idq:1}
W.h0.prototype={
gm:function(a){return a.length}}
W.h1.prototype={
j:function(a,b){return P.b9(a.get(H.E(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b9(t.value[1]))}},
gZ:function(a){var u=H.c([],[P.e])
this.J(a,new W.h2(u))
return u},
gm:function(a){return a.size},
$aa4:function(){return[P.e,null]},
$iM:1,
$aM:function(){return[P.e,null]}}
W.h2.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.h3.prototype={
j:function(a,b){return P.b9(a.get(H.E(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b9(t.value[1]))}},
gZ:function(a){var u=H.c([],[P.e])
this.J(a,new W.h4(u))
return u},
gm:function(a){return a.size},
$aa4:function(){return[P.e,null]},
$iM:1,
$aM:function(){return[P.e,null]}}
W.h4.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.aN.prototype={$iaN:1}
W.h5.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aN]},
$aw:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$ay:function(){return[W.aN]}}
W.a5.prototype={$ia5:1}
W.ac.prototype={
gap:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.kI("No elements"))
if(t>1)throw H.f(P.kI("More than one element"))
return u.firstChild},
ac:function(a,b){var u,t,s,r
H.m(b,"$ii",[W.B],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gN:function(a){var u=this.a.childNodes
return new W.df(u,u.length,[H.cX(C.S,u,"y",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$aw:function(){return[W.B]},
$ai:function(){return[W.B]},
$ab:function(){return[W.B]}}
W.B.prototype={
ik:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.dY(a):u},
hD:function(a,b){return a.appendChild(b)},
$iB:1}
W.cl.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.B]},
$aw:function(){return[W.B]},
$ii:1,
$ai:function(){return[W.B]},
$ib:1,
$ab:function(){return[W.B]},
$ay:function(){return[W.B]}}
W.aO.prototype={$iaO:1,
gm:function(a){return a.length}}
W.hm.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aO]},
$aw:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$ay:function(){return[W.aO]}}
W.ht.prototype={
j:function(a,b){return P.b9(a.get(H.E(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b9(t.value[1]))}},
gZ:function(a){var u=H.c([],[P.e])
this.J(a,new W.hu(u))
return u},
gm:function(a){return a.size},
$aa4:function(){return[P.e,null]},
$iM:1,
$aM:function(){return[P.e,null]}}
W.hu.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.hw.prototype={
gm:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.hG.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aQ]},
$aw:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$ay:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1}
W.hH.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aR]},
$aw:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$ay:function(){return[W.aR]}}
W.aS.prototype={$iaS:1,
gm:function(a){return a.length}}
W.hK.prototype={
j:function(a,b){return a.getItem(H.E(b))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gZ:function(a){var u=H.c([],[P.e])
this.J(a,new W.hL(u))
return u},
gm:function(a){return a.length},
$aa4:function(){return[P.e,P.e]},
$iM:1,
$aM:function(){return[P.e,P.e]}}
W.hL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:27}
W.az.prototype={$iaz:1}
W.bP.prototype={}
W.dL.prototype={
a1:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
u=W.lN("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ac(t).ac(0,new W.ac(u))
return t}}
W.hR.prototype={
a1:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.y.a1(u.createElement("table"),b,c,d)
u.toString
u=new W.ac(u)
s=u.gap(u)
s.toString
u=new W.ac(s)
r=u.gap(u)
t.toString
r.toString
new W.ac(t).ac(0,new W.ac(r))
return t}}
W.hS.prototype={
a1:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.y.a1(u.createElement("table"),b,c,d)
u.toString
u=new W.ac(u)
s=u.gap(u)
t.toString
s.toString
new W.ac(t).ac(0,new W.ac(s))
return t}}
W.ct.prototype={$ict:1}
W.aT.prototype={$iaT:1}
W.aA.prototype={$iaA:1}
W.hU.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aA]},
$aw:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$ay:function(){return[W.aA]}}
W.hV.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aT]},
$aw:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$ay:function(){return[W.aT]}}
W.i_.prototype={
gm:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.aB.prototype={$iaB:1}
W.i3.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aV]},
$aw:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$ay:function(){return[W.aV]}}
W.i4.prototype={
gm:function(a){return a.length}}
W.bt.prototype={}
W.im.prototype={
i:function(a){return String(a)}}
W.iC.prototype={
gm:function(a){return a.length}}
W.aY.prototype={
ghP:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.an("deltaY is not supported"))},
ghO:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.an("deltaX is not supported"))},
$iaY:1}
W.cH.prototype={
fL:function(a,b){return a.requestAnimationFrame(H.bW(H.l(b,{func:1,ret:-1,args:[P.a6]}),1))},
eF:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cI.prototype={$icI:1}
W.iM.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.R]},
$aw:function(){return[W.R]},
$ii:1,
$ai:function(){return[W.R]},
$ib:1,
$ab:function(){return[W.R]},
$ay:function(){return[W.R]}}
W.e2.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iat)return!1
return a.left===u.gdm(b)&&a.top===u.gdL(b)&&a.width===u.gaC(b)&&a.height===u.gaA(b)},
gI:function(a){return W.kX(C.j.gI(a.left),C.j.gI(a.top),C.j.gI(a.width),C.j.gI(a.height))},
gaA:function(a){return a.height},
gaC:function(a){return a.width}}
W.j_.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aH]},
$aw:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$ay:function(){return[W.aH]}}
W.el.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.B]},
$aw:function(){return[W.B]},
$ii:1,
$ai:function(){return[W.B]},
$ib:1,
$ab:function(){return[W.B]},
$ay:function(){return[W.B]}}
W.jb.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aS]},
$aw:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$ay:function(){return[W.aS]}}
W.jc.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.az]},
$aw:function(){return[W.az]},
$ii:1,
$ai:function(){return[W.az]},
$ib:1,
$ab:function(){return[W.az]},
$ay:function(){return[W.az]}}
W.iK.prototype={
J:function(a,b){var u,t,s,r,q
H.l(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gZ(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gZ:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.e])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.h(r,t)
s=H.n(r[t],"$icI")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa4:function(){return[P.e,P.e]},
$aM:function(){return[P.e,P.e]}}
W.iN.prototype={
j:function(a,b){return this.a.getAttribute(H.E(b))},
gm:function(a){return this.gZ(this).length}}
W.iO.prototype={}
W.jU.prototype={}
W.iP.prototype={}
W.iQ.prototype={
$1:function(a){return this.a.$1(H.n(a,"$io"))},
$S:37}
W.bu.prototype={
e8:function(a){var u
if($.ea.a===0){for(u=0;u<262;++u)$.ea.P(0,C.P[u],W.mK())
for(u=0;u<12;++u)$.ea.P(0,C.p[u],W.mL())}},
ax:function(a){return $.lx().L(0,W.ca(a))},
ad:function(a,b,c){var u=$.ea.j(0,H.k(W.ca(a))+"::"+b)
if(u==null)u=$.ea.j(0,"*::"+b)
if(u==null)return!1
return H.k_(u.$4(a,b,c,this))},
$iak:1}
W.y.prototype={
gN:function(a){return new W.df(a,this.gm(a),[H.cX(this,a,"y",0)])}}
W.dx.prototype={
ax:function(a){return C.a.cU(this.a,new W.he(a))},
ad:function(a,b,c){return C.a.cU(this.a,new W.hd(a,b,c))},
$iak:1}
W.he.prototype={
$1:function(a){return H.n(a,"$iak").ax(this.a)},
$S:15}
W.hd.prototype={
$1:function(a){return H.n(a,"$iak").ad(this.a,this.b,this.c)},
$S:15}
W.et.prototype={
ek:function(a,b,c,d){var u,t,s
this.a.ac(0,c)
u=b.bi(0,new W.j9())
t=b.bi(0,new W.ja())
this.b.ac(0,u)
s=this.c
s.ac(0,C.R)
s.ac(0,t)},
ax:function(a){return this.a.L(0,W.ca(a))},
ad:function(a,b,c){var u=this,t=W.ca(a),s=u.c
if(s.L(0,H.k(t)+"::"+b))return u.d.hC(c)
else if(s.L(0,"*::"+b))return u.d.hC(c)
else{s=u.b
if(s.L(0,H.k(t)+"::"+b))return!0
else if(s.L(0,"*::"+b))return!0
else if(s.L(0,H.k(t)+"::*"))return!0
else if(s.L(0,"*::*"))return!0}return!1},
$iak:1}
W.j9.prototype={
$1:function(a){return!C.a.L(C.p,H.E(a))},
$S:16}
W.ja.prototype={
$1:function(a){return C.a.L(C.p,H.E(a))},
$S:16}
W.je.prototype={
ad:function(a,b,c){if(this.e1(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.L(0,b)
return!1}}
W.jf.prototype={
$1:function(a){return"TEMPLATE::"+H.k(H.E(a))},
$S:28}
W.jd.prototype={
ax:function(a){var u=J.U(a)
if(!!u.$ico)return!1
u=!!u.$ip
if(u&&W.ca(a)==="foreignObject")return!1
if(u)return!0
return!1},
ad:function(a,b,c){if(b==="is"||C.i.bk(b,"on"))return!1
return this.ax(a)},
$iak:1}
W.df.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scD(J.lz(u.a,t))
u.c=t
return!0}u.scD(null)
u.c=s
return!1},
gC:function(a){return this.d},
scD:function(a){this.d=H.G(a,H.x(this,0))},
$iaI:1}
W.ak.prototype={}
W.j7.prototype={$inp:1}
W.eK.prototype={
cb:function(a){new W.jj(this).$2(a,null)},
aG:function(a,b){if(b==null)J.kg(a)
else b.removeChild(a)},
fQ:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lC(a)
n=o.a.getAttribute("is")
H.n(a,"$iQ")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.J(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ap(r)}t="element unprintable"
try{t=J.ai(a)}catch(r){H.ap(r)}try{s=W.ca(a)
this.fP(H.n(a,"$iQ"),b,p,t,s,H.n(o,"$iM"),H.E(n))}catch(r){if(H.ap(r) instanceof P.ax)throw r
else{this.aG(a,b)
window
q="Removing corrupted element "+H.k(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fP:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aG(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ax(a)){o.aG(a,b)
window
u="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ad(a,"is",g)){o.aG(a,b)
window
u="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gZ(f)
t=H.c(u.slice(0),[H.x(u,0)])
for(s=f.gZ(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.h(t,s)
r=t[s]
q=o.a
p=J.lE(r)
H.E(r)
if(!q.ad(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.k(e)+" "+r+'="'+H.k(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.U(a).$ict)o.cb(a.content)},
$in9:1}
W.jj.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fQ(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aG(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ap(s)
r=H.n(u,"$iB")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.n(t,"$iB")}},
$S:29}
W.e1.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.cO.prototype={}
W.cP.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ez.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
P.eJ.prototype={$ibp:1,
gcY:function(a){return this.a}}
P.jq.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.ft.prototype={
gbt:function(){var u=this.b,t=H.ah(u,"w",0),s=W.Q
return new H.fS(new H.cG(u,H.l(new P.fu(),{func:1,ret:P.P,args:[t]}),[t]),H.l(new P.fv(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.bA(this.gbt().a)},
j:function(a,b){var u=this.gbt()
return u.b.$1(J.jD(u.a,b))},
gN:function(a){var u=P.ks(this.gbt(),!1,W.Q)
return new J.aq(u,u.length,[H.x(u,0)])},
$aw:function(){return[W.Q]},
$ai:function(){return[W.Q]},
$ab:function(){return[W.Q]}}
P.fu.prototype={
$1:function(a){return!!J.U(H.n(a,"$iB")).$iQ},
$S:13}
P.fv.prototype={
$1:function(a){return H.j(H.n(a,"$iB"),"$iQ")},
$S:30}
P.j2.prototype={}
P.at.prototype={}
P.b1.prototype={$ib1:1}
P.fK.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b1]},
$ii:1,
$ai:function(){return[P.b1]},
$ib:1,
$ab:function(){return[P.b1]},
$ay:function(){return[P.b1]}}
P.b5.prototype={$ib5:1}
P.hh.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b5]},
$ii:1,
$ai:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$ay:function(){return[P.b5]}}
P.hn.prototype={
gm:function(a){return a.length}}
P.co.prototype={$ico:1}
P.hQ.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$aw:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$ay:function(){return[P.e]}}
P.p.prototype={
gcW:function(a){return new P.ft(a,new W.ac(a))},
a1:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.ak])
C.a.h(p,W.kW(null))
C.a.h(p,W.kY())
C.a.h(p,new W.jd())
c=new W.eK(new W.dx(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hM(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ac(s)
q=p.gap(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.b7.prototype={$ib7:1}
P.i5.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b7]},
$ii:1,
$ai:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$ay:function(){return[P.b7]}}
P.ed.prototype={}
P.ee.prototype={}
P.eo.prototype={}
P.ep.prototype={}
P.eA.prototype={}
P.eB.prototype={}
P.eH.prototype={}
P.eI.prototype={}
P.f_.prototype={
gm:function(a){return a.length}}
P.f0.prototype={
j:function(a,b){return P.b9(a.get(H.E(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b9(t.value[1]))}},
gZ:function(a){var u=H.c([],[P.e])
this.J(a,new P.f1(u))
return u},
gm:function(a){return a.size},
$aa4:function(){return[P.e,null]},
$iM:1,
$aM:function(){return[P.e,null]}}
P.f1.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
P.f2.prototype={
gm:function(a){return a.length}}
P.bB.prototype={}
P.hi.prototype={
gm:function(a){return a.length}}
P.e0.prototype={}
P.d3.prototype={$id3:1}
P.dD.prototype={$idD:1}
P.bO.prototype={
iu:function(a,b,c,d,e,f,g){var u,t=J.U(g)
if(!!t.$ibp)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mD(g))
return}if(!!t.$icc)t=!0
else t=!1
if(t){this.h6(a,b,c,d,e,f,g)
return}throw H.f(P.lF("Incorrect number or type of arguments"))},
h6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
G:function(a,b,c){return a.uniform1f(b,c)},
U:function(a,b,c){return a.uniform1i(b,c)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dM:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dN:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibO:1}
P.dH.prototype={$idH:1}
P.dN.prototype={$idN:1}
P.dV.prototype={$idV:1}
P.hI.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.V(b,a,null,null,null))
return P.b9(a.item(b))},
A:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.M,,,]]},
$ii:1,
$ai:function(){return[[P.M,,,]]},
$ib:1,
$ab:function(){return[[P.M,,,]]},
$ay:function(){return[[P.M,,,]]}}
P.ew.prototype={}
P.ex.prototype={}
O.a_.prototype={
ci:function(a){var u=this
u.seQ(H.c([],[a]))
u.scI(null)
u.scF(null)
u.scJ(null)},
cc:function(a,b,c){var u=this,t=H.ah(u,"a_",0)
H.l(b,{func:1,ret:P.P,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.C,[P.i,t]]}
H.l(a,t)
H.l(c,t)
u.scI(b)
u.scF(a)
u.scJ(c)},
bj:function(a,b){return this.cc(a,null,b)},
fs:function(a){var u
H.m(a,"$ii",[H.ah(this,"a_",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eR:function(a,b){var u
H.m(b,"$ii",[H.ah(this,"a_",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gN:function(a){var u=this.a
return new J.aq(u,u.length,[H.x(u,0)])},
A:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ah(s,"a_",0)
H.G(b,r)
r=[r]
if(H.J(s.fs(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.eR(t,H.c([b],r))}},
seQ:function(a){this.a=H.m(a,"$ib",[H.ah(this,"a_",0)],"$ab")},
scI:function(a){this.b=H.l(a,{func:1,ret:P.P,args:[[P.i,H.ah(this,"a_",0)]]})},
scF:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.C,[P.i,H.ah(this,"a_",0)]]})},
scJ:function(a){H.l(a,{func:1,ret:-1,args:[P.C,[P.i,H.ah(this,"a_",0)]]})},
$ii:1}
O.ch.prototype={
gm:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.as():u},
aq:function(){var u=this.b
if(u!=null)u.R(null)},
gT:function(a){var u=this.a
if(u.length>0)return C.a.gbe(u)
else return V.jO()},
dA:function(a){var u=this.a
if(a==null)C.a.h(u,V.jO())
else C.a.h(u,a)
this.aq()},
c5:function(){var u=this.a
if(u.length>0){u.pop()
this.aq()}},
sbv:function(a){this.a=H.m(a,"$ib",[V.a9],"$ab")}}
E.f3.prototype={}
E.ad.prototype={
scd:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().D(0,s.gdt())
u=s.c
if(u!=null)u.gw().h(0,s.gdt())
t=new D.T("shape",r,s.c,[F.dI])
t.b=!0
s.an(t)}},
saL:function(a){var u,t,s=this
if(!J.Z(s.r,a)){u=s.r
if(u!=null)u.gw().D(0,s.gdr())
if(a!=null)a.gw().h(0,s.gdr())
s.r=a
t=new D.T("mover",u,a,[U.bK])
t.b=!0
s.an(t)}},
bh:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.sdO(m.a+m.d*b.y)
m.sdw(0,m.b+m.e*b.y)
m.sdE(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.b3(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.V(0,V.b3(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.V(0,V.b3(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.af(0)}q=m.x}else q=null
if(!J.Z(q,n.x)){p=n.x
n.x=q
o=new D.T("matrix",p,q,[V.a9])
o.b=!0
n.an(o)}for(m=n.y.a,m=new J.aq(m,m.length,[H.x(m,0)]);m.u();)m.d.bh(0,b)},
aB:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gT(s))
else C.a.h(s.a,r.V(0,s.gT(s)))
s.aq()
a.dB(t.f)
s=a.dy
u=(s&&C.a).gbe(s)
if(u!=null&&t.d!=null)u.io(a,t)
for(s=t.y.a,s=new J.aq(s,s.length,[H.x(s,0)]);s.u();)s.d.aB(a)
a.dz()
a.dx.c5()},
an:function(a){var u=this.z
if(u!=null)u.R(a)},
W:function(){return this.an(null)},
du:function(a){H.n(a,"$iD")
this.e=null
this.an(a)},
i9:function(){return this.du(null)},
ds:function(a){this.an(H.n(a,"$iD"))},
i8:function(){return this.ds(null)},
dq:function(a){this.an(H.n(a,"$iD"))},
i5:function(){return this.dq(null)},
i4:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ii",[E.ad],"$ai")
for(u=b.length,t=this.gdn(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bF()
o.saa(null)
o.sav(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.saa(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.W()},
i7:function(a,b){var u,t
H.m(b,"$ii",[E.ad],"$ai")
for(u=b.gN(b),t=this.gdn();u.u();)u.gC(u).gw().D(0,t)
this.W()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sey:function(a,b){this.y=H.m(b,"$ia_",[E.ad],"$aa_")},
$ib4:1}
E.hp.prototype={
e4:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.bk(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.ch()
t=[V.a9]
u.sbv(H.c([],t))
u.b=null
u.gw().h(0,new E.hq(s))
s.cy=u
u=new O.ch()
u.sbv(H.c([],t))
u.b=null
u.gw().h(0,new E.hr(s))
s.db=u
u=new O.ch()
u.sbv(H.c([],t))
u.b=null
u.gw().h(0,new E.hs(s))
s.dx=u
s.sh5(H.c([],[O.bQ]))
u=s.dy;(u&&C.a).h(u,null)
s.sh1(new H.aK([P.e,A.cp]))},
gij:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gT(s)
u=t.db
u=t.z=s.V(0,u.gT(u))
s=u}return s},
dB:function(a){var u=this.dy,t=a==null?(u&&C.a).gbe(u):a;(u&&C.a).h(u,t)},
dz:function(){var u=this.dy
if(u.length>1)u.pop()},
sh5:function(a){this.dy=H.m(a,"$ib",[O.bQ],"$ab")},
sh1:function(a){this.fr=H.m(a,"$iM",[P.e,A.cp],"$aM")}}
E.hq.prototype={
$1:function(a){var u
H.n(a,"$iD")
u=this.a
u.ch=u.z=null},
$S:5}
E.hr.prototype={
$1:function(a){var u
H.n(a,"$iD")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:5}
E.hs.prototype={
$1:function(a){var u
H.n(a,"$iD")
u=this.a
u.cx=u.ch=null},
$S:5}
E.dS.prototype={
cl:function(a){H.n(a,"$iD")
this.dD()},
ck:function(){return this.cl(null)},
ghW:function(){var u,t=this,s=Date.now(),r=C.h.X(P.km(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.bk(s,!1)
return u/r},
cM:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.V()
if(typeof r!=="number")return H.by(r)
u=C.j.bY(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.V()
t=C.j.bY(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kL(C.m,s.gip())}},
dD:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.hZ(this),{func:1,ret:-1,args:[P.a6]})
C.A.eF(u)
C.A.fL(u,W.l4(t,P.a6))}},
im:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.cM()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.bk(r,!1)
s.y=P.km(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aq()
r=s.db
C.a.sm(r.a,0)
r.aq()
r=s.dx
C.a.sm(r.a,0)
r.aq()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.aB(p.e)}s=p.z
if(s!=null)s.R(null)}catch(q){u=H.ap(q)
t=H.bY(q)
P.kb("Error: "+H.k(u))
P.kb("Stack: "+H.k(t))
throw H.f(u)}}}
E.hZ.prototype={
$1:function(a){var u
H.mV(a)
u=this.a
if(u.ch){u.ch=!1
u.im()}},
$S:33}
Z.dZ.prototype={$in3:1}
Z.d4.prototype={
bK:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ap(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.k(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.k(u.e)+"]"}}
Z.iD.prototype={$in4:1}
Z.d5.prototype={
az:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bK:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bK(a)},
iB:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aB:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.e],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ai(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
seM:function(a){this.b=H.m(a,"$ib",[Z.bq],"$ab")},
$inc:1}
Z.bq.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bM(this.c)+"'")+"]"}}
Z.aX.prototype={
gce:function(a){var u=this.a,t=(u&$.bd().a)!==0?3:0
if((u&$.bc().a)!==0)t+=3
if((u&$.bb().a)!==0)t+=3
if((u&$.be().a)!==0)t+=2
if((u&$.bf().a)!==0)t+=3
if((u&$.cY().a)!==0)t+=3
if((u&$.cZ().a)!==0)t+=4
if((u&$.c0().a)!==0)++t
return(u&$.ba().a)!==0?t+4:t},
hE:function(a){var u,t=$.bd(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bc()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ba()
if((s&t.a)!==0)if(u===a)return t
return $.lw()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aX))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.e]),t=this.a
if((t&$.bd().a)!==0)C.a.h(u,"Pos")
if((t&$.bc().a)!==0)C.a.h(u,"Norm")
if((t&$.bb().a)!==0)C.a.h(u,"Binm")
if((t&$.be().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bf().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cY().a)!==0)C.a.h(u,"Clr3")
if((t&$.cZ().a)!==0)C.a.h(u,"Clr4")
if((t&$.c0().a)!==0)C.a.h(u,"Weight")
if((t&$.ba().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.f6.prototype={}
D.bF.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.D]}
H.l(b,u)
if(this.a==null)this.saa(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
D:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[D.D]})
u=s.a
u=u==null?null:C.a.L(u,b)
if(u===!0){u=s.a
t=(u&&C.a).D(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.L(u,b)
if(u===!0){u=s.b
t=(u&&C.a).D(u,b)||t}return t},
R:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.D()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.J(P.ks(u,!0,{func:1,ret:-1,args:[D.D]}),new D.fo(q))
u=r.b
if(u!=null){r.sav(H.c([],[{func:1,ret:-1,args:[D.D]}]))
C.a.J(u,new D.fp(q))}return!0},
hR:function(){return this.R(null)},
af:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.R(u)}}},
saa:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")},
sav:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")}}
D.fo.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.fp.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.D.prototype={}
D.cd.prototype={}
D.ce.prototype={}
D.T.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.d6.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d6))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.dl.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dl))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.fJ.prototype={
ig:function(a){this.d.h(0,a.a)
return!1},
ia:function(a){this.d.D(0,a.a)
return!1},
sfG:function(a){this.d=H.m(a,"$ikG",[P.C],"$akG")}}
X.fP.prototype={
c4:function(a,b){this.r=a.a
return!1},
aN:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dU()
if(typeof u!=="number")return u.dP()
this.r=(u&~t)>>>0
return!1},
aM:function(a,b){return!1},
ih:function(a){return!1},
fg:function(a,b,c){return}}
X.ci.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ci))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.J(this.b)?"Alt+":""
return u+(H.J(this.c)?"Shift+":"")}}
X.h6.prototype={
c4:function(a,b){this.f=a.a
return!1},
aN:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.dU()
if(typeof u!=="number")return u.dP()
this.f=(u&~t)>>>0
return!1},
aM:function(a,b){return!1},
ii:function(a,b){return!1}}
X.i2.prototype={
ie:function(a){H.m(a,"$ib",[V.al],"$ab")
return!1},
ib:function(a){H.m(a,"$ib",[V.al],"$ab")
return!1},
ic:function(a){H.m(a,"$ib",[V.al],"$ab")
return!1}}
X.dY.prototype={
cz:function(a){var u=a.keyCode,t=H.J(a.ctrlKey)||H.J(a.metaKey)
return new X.dl(u,new X.ci(t,a.altKey,a.shiftKey))},
aw:function(a){if(!H.J(a.ctrlKey))H.J(a.metaKey)
a.shiftKey},
bG:function(a){if(!H.J(a.ctrlKey))H.J(a.metaKey)
a.shiftKey},
ak:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.a_()
u=t.top
if(typeof r!=="number")return r.a_()
return new V.al(s-q,r-u)},
aF:function(a){return new V.b8(a.movementX,a.movementY)},
bA:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.al])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
q=C.j.a7(r.pageX)
C.j.a7(r.pageY)
p=o.left
C.j.a7(r.pageX)
C.a.h(n,new V.al(q-p,C.j.a7(r.pageY)-o.top))}return n},
ai:function(a){var u=a.buttons,t=H.J(a.ctrlKey)||H.J(a.metaKey)
return new X.d6(u,new X.ci(t,a.altKey,a.shiftKey))},
bw:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.a_()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.a_()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fa:function(a){this.f=!0},
eZ:function(a){this.f=!1},
f4:function(a){H.n(a,"$ia5")
if(H.J(this.f)&&this.bw(a))a.preventDefault()},
fe:function(a){var u
H.n(a,"$iaL")
if(!H.J(this.f))return
u=this.cz(a)
this.b.ig(u)},
fc:function(a){var u
H.n(a,"$iaL")
if(!H.J(this.f))return
u=this.cz(a)
this.b.ia(u)},
fi:function(a){var u,t,s,r,q=this
H.n(a,"$ia5")
u=q.a
u.focus()
q.f=!0
q.aw(a)
if(H.J(q.x)){t=q.ai(a)
s=q.aF(a)
if(q.d.c4(t,s))a.preventDefault()
return}if(H.J(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ai(a)
r=q.ak(a)
if(q.c.c4(t,r))a.preventDefault()},
fm:function(a){var u,t,s,r=this
H.n(a,"$ia5")
r.aw(a)
u=r.ai(a)
if(H.J(r.x)){t=r.aF(a)
if(r.d.aN(u,t))a.preventDefault()
return}if(H.J(r.r))return
s=r.ak(a)
if(r.c.aN(u,s))a.preventDefault()},
f8:function(a){var u,t,s,r=this
H.n(a,"$ia5")
if(!r.bw(a)){r.aw(a)
u=r.ai(a)
if(H.J(r.x)){t=r.aF(a)
if(r.d.aN(u,t))a.preventDefault()
return}if(H.J(r.r))return
s=r.ak(a)
if(r.c.aN(u,s))a.preventDefault()}},
fk:function(a){var u,t,s,r=this
H.n(a,"$ia5")
r.aw(a)
u=r.ai(a)
if(H.J(r.x)){t=r.aF(a)
if(r.d.aM(u,t))a.preventDefault()
return}if(H.J(r.r))return
s=r.ak(a)
if(r.c.aM(u,s))a.preventDefault()},
f6:function(a){var u,t,s,r=this
H.n(a,"$ia5")
if(!r.bw(a)){r.aw(a)
u=r.ai(a)
if(H.J(r.x)){t=r.aF(a)
if(r.d.aM(u,t))a.preventDefault()
return}if(H.J(r.r))return
s=r.ak(a)
if(r.c.aM(u,s))a.preventDefault()}},
fo:function(a){var u,t,s=this
H.n(a,"$iaY")
s.aw(a)
u=new V.b8((a&&C.z).ghO(a),C.z.ghP(a)).H(0,180)
if(H.J(s.x)){if(s.d.ih(u))a.preventDefault()
return}if(H.J(s.r))return
t=s.ak(a)
if(s.c.ii(u,t))a.preventDefault()},
fq:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ai(s.y)
t=s.ak(s.y)
s.d.fg(u,t,r)}},
fE:function(a){var u,t=this
H.n(a,"$iaB")
t.a.focus()
t.f=!0
t.bG(a)
u=t.bA(a)
if(t.e.ie(u))a.preventDefault()},
fA:function(a){var u
H.n(a,"$iaB")
this.bG(a)
u=this.bA(a)
if(this.e.ib(u))a.preventDefault()},
fC:function(a){var u
H.n(a,"$iaB")
this.bG(a)
u=this.bA(a)
if(this.e.ic(u))a.preventDefault()},
seG:function(a){this.z=H.m(a,"$ib",[[P.cs,P.O]],"$ab")}}
D.bl.prototype={
ag:function(a){var u
H.n(a,"$iD")
u=this.d
if(u!=null)u.R(a)},
eb:function(){return this.ag(null)},
$ia0:1,
$ib4:1}
D.a0.prototype={$ib4:1}
D.dm.prototype={
ag:function(a){var u=this.Q
if(u!=null)u.R(a)},
cH:function(a){var u
H.n(a,"$iD")
u=this.ch
if(u!=null)u.R(a)},
ff:function(){return this.cH(null)},
fu:function(a){var u,t,s
H.m(a,"$ii",[D.a0],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.e9(s))return!1}return!0},
eT:function(a,b){var u,t,s,r,q,p,o,n=D.a0
H.m(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gcG(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=H.n(b[q],"$ia0")
if(p instanceof D.bl)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bF()
o.saa(null)
o.sav(null)
o.c=null
o.d=0
p.d=o}H.l(t,s)
if(o.a==null)o.saa(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.cd([n])
n.b=!0
this.ag(n)},
fw:function(a,b){var u,t,s,r=D.a0
H.m(b,"$ii",[r],"$ai")
for(u=b.gN(b),t=this.gcG();u.u();){s=u.gC(u)
C.a.D(this.e,s)
s.gw().D(0,t)}r=new D.ce([r])
r.b=!0
this.ag(r)},
e9:function(a){var u=C.a.L(this.e,a)
return u},
seE:function(a){this.e=H.m(a,"$ib",[D.bl],"$ab")},
sfF:function(a){this.f=H.m(a,"$ib",[D.dA],"$ab")},
sh3:function(a){this.r=H.m(a,"$ib",[D.dJ],"$ab")},
sh9:function(a){this.x=H.m(a,"$ib",[D.dP],"$ab")},
sha:function(a){this.y=H.m(a,"$ib",[D.dQ],"$ab")},
shb:function(a){this.z=H.m(a,"$ib",[D.dR],"$ab")},
$ai:function(){return[D.a0]},
$aa_:function(){return[D.a0]}}
D.dA.prototype={$ia0:1,$ib4:1}
D.dJ.prototype={$ia0:1,$ib4:1}
D.dP.prototype={$ia0:1,$ib4:1}
D.dQ.prototype={$ia0:1,$ib4:1}
D.dR.prototype={$ia0:1,$ib4:1}
V.a1.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.bD.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bD))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.fn.prototype={}
V.dt.prototype={
a4:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.z])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dt))return!1
u=b.a
t=$.N().a
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
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.bX(H.c([q.a,q.d,q.r],p),3,0),n=V.bX(H.c([q.b,q.e,q.x],p),3,0),m=V.bX(H.c([q.c,q.f,q.y],p),3,0)
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
V.a9.prototype={
a4:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
dk:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.N().a)return V.jO()
u=1/b1
t=-n
s=-a0
return V.b3((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
V:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b3(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
c9:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.S(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aQ:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ay(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.N().a
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
i:function(a){return this.E()},
v:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.bX(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bX(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bX(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bX(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
E:function(){return this.v("")}}
V.al.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.ay.prototype={
a_:function(a,b){return new V.ay(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.dC.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dC))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.dF.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dF))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.b8.prototype={
c_:function(a){var u,t=this.a
if(typeof t!=="number")return t.V()
u=this.b
if(typeof u!=="number")return u.V()
return Math.sqrt(t*t+u*u)},
H:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.kP
return u==null?$.kP=new V.b8(0,0):u}u=this.a
if(typeof u!=="number")return u.H()
t=this.b
if(typeof t!=="number")return t.H()
return new V.b8(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b8))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.a_()
if(typeof t!=="number")return H.by(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.a_()
if(typeof t!=="number")return H.by(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.S.prototype={
c_:function(a){return Math.sqrt(this.M(this))},
M:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c0:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.S(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aH:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.S(u*t-s*r,s*q-p*t,p*r-u*q)},
K:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
aD:function(a){return new V.S(-this.a,-this.b,-this.c)},
H:function(a,b){if(Math.abs(b-0)<$.N().a)return V.cF()
return new V.S(this.a/b,this.b/b,this.c/b)},
dl:function(){var u=$.N().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
U.d8.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.as():u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d8))return!1
return J.Z(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.bK.prototype={}
U.dG.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.as():u},
au:function(a){var u=this.y
if(u!=null)u.R(a)},
sdO:function(a){var u
a=V.kd(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.N().a)){this.a=a
u=new D.T("yaw",u,a,[P.z])
u.b=!0
this.au(u)}},
sdw:function(a,b){var u
b=V.kd(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.N().a)){this.b=b
u=new D.T("pitch",u,b,[P.z])
u.b=!0
this.au(u)}},
sdE:function(a){var u
a=V.kd(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.N().a)){this.c=a
u=new D.T("roll",u,a,[P.z])
u.b=!0
this.au(u)}},
t:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dG))return!1
u=r.a
t=b.a
s=$.N().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+"], ["+V.K(u.d,3,0)+", "+V.K(u.e,3,0)+", "+V.K(u.f,3,0)+"]"}}
M.dc.prototype={
ah:function(a){var u
H.n(a,"$iD")
u=this.x
if(u!=null)u.R(a)},
ed:function(){return this.ah(null)},
f0:function(a,b){var u,t,s,r,q,p,o,n=E.ad
H.m(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga9(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bF()
o.saa(null)
o.sav(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.saa(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cd([n])
n.b=!0
this.ah(n)},
f2:function(a,b){var u,t,s=E.ad
H.m(b,"$ii",[s],"$ai")
for(u=b.gN(b),t=this.ga9();u.u();)u.gC(u).gw().D(0,t)
s=new D.ce([s])
s.b=!0
this.ah(s)},
sdH:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gw().D(0,t.ga9())
u=t.c
t.c=a
if(a!=null)a.gw().h(0,t.ga9())
s=new D.T("technique",u,t.c,[O.bQ])
s.b=!0
t.ah(s)}},
gw:function(){var u=this.x
return u==null?this.x=D.as():u},
aB:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dB(f.c)
u=f.b
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
if(typeof s!=="number")return H.by(s)
o=C.j.a7(p*s)
p=q.b
if(typeof r!=="number")return H.by(r)
n=C.j.a7(p*r)
p=C.j.a7(q.c*s)
a.c=p
q=C.j.a7(q.d*r)
a.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=f.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b3(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dA(i)
t=$.ky
if(t==null){t=V.kA()
q=V.kT()
p=$.kQ
t=V.ku(t,q,p==null?$.kQ=new V.S(0,0,-1):p)
$.ky=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.V(0,h)}a.db.dA(h)
u=f.c
if(u!=null)u.bh(0,a)
for(u=f.d.a,u=new J.aq(u,u.length,[H.x(u,0)]);u.u();)u.d.bh(0,a)
for(u=f.d.a,u=new J.aq(u,u.length,[H.x(u,0)]);u.u();)u.d.aB(a)
f.a.toString
a.cy.c5()
a.db.c5()
f.b.toString
a.dz()},
sec:function(a,b){this.d=H.m(b,"$ia_",[E.ad],"$aa_")},
$ina:1}
A.d1.prototype={}
A.eZ.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hS:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hQ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.fV.prototype={
e3:function(d2,d3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="Required uniform value, ",a9=", was not defined or used in shader.",b0="emissionTxt",b1="nullEmissionTxt",b2="ambientTxt",b3="nullAmbientTxt",b4="diffuseTxt",b5="nullDiffuseTxt",b6="invDiffuseTxt",b7="nullInvDiffuseTxt",b8="specularTxt",b9="nullSpecularTxt",c0="nullBumpTxt",c1="reflectTxt",c2="nullReflectTxt",c3="refractTxt",c4="nullRefractTxt",c5="alphaTxt",c6="nullAlphaTxt",c7="uniform mat4 objMat;\n",c8="   if(nullAlphaTxt > 0) return alpha;\n",c9="   if (a <= 0.000001) discard;\n",d0="precision mediump float;\n\n",d1="precision mediump float;\n\nvarying vec3 normalVec;\n"
a7.z=d2
u=new P.b6("")
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
d2.hf(u)
d2.hm(u)
d2.hg(u)
d2.hu(u)
d2.hv(u)
d2.ho(u)
d2.hz(u)
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
u=new P.b6("")
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
s.hj(u)
s.he(u)
s.hh(u)
s.hk(u)
s.hs(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.hq(u)
s.hr(u)}s.hn(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=s.y
if(l!==C.c){m=u.a=m+"uniform float alpha;\n"
if(l!==C.f){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.d){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.e){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.c:m=u.a=m+"   return 1.0;\n"
break
case C.f:m=u.a=m+"   return alpha;\n"
break
case C.d:m+=c8
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c9
u.a=m
m=u.a=m+"   return a;\n"
break
case C.e:m+=c8
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
k=H.c([],[P.e])
if(s.b!==C.c)C.a.h(k,"ambient()")
if(s.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.hi(u)
s.hp(u)
s.ht(u)
s.hw(u)
s.hx(u)
s.hy(u)
s.hl(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
q=q?u.a=m+"   vec3 norm = normal();\n":m
if(p)u.a=q+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.c([],[P.e])
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
i="vec4("+C.a.l(j," + ")+", alpha);"
s=u.a
s=u.a=(o?u.a=s+("   gl_FragColor = colorMat*"+i+"\n"):u.a=s+("   gl_FragColor = "+i+"\n"))+"}\n"
a7.c=n
a7.d=s.charCodeAt(0)==0?s:s
a7.e=a7.cA(n,35633)
a7.f=a7.cA(a7.d,35632)
s=a7.a
q=s.createProgram()
a7.r=q
s.attachShader(q,a7.e)
s.attachShader(a7.r,a7.f)
s.linkProgram(a7.r)
if(!H.J(H.k_(s.getProgramParameter(a7.r,35714)))){h=s.getProgramInfoLog(a7.r)
s.deleteProgram(a7.r)
H.t(P.r("Failed to link shader: "+H.k(h)))}a7.fZ()
a7.h0()
a7.Q=a7.x.j(0,"posAttr")
a7.cx=a7.x.j(0,"normAttr")
a7.ch=a7.x.j(0,"binmAttr")
a7.cy=a7.x.j(0,"txt2DAttr")
a7.db=a7.x.j(0,"txtCubeAttr")
a7.dx=a7.x.j(0,"bendAttr")
if(d2.fr)a7.id=H.j(a7.y.n(0,"invViewMat"),"$iam")
if(t)a7.dy=H.j(a7.y.n(0,"objMat"),"$iam")
if(r)a7.fr=H.j(a7.y.n(0,"viewObjMat"),"$iam")
a7.fy=H.j(a7.y.n(0,"projViewObjMat"),"$iam")
if(d2.x2)a7.k1=H.j(a7.y.n(0,"txt2DMat"),"$icy")
if(d2.y1)a7.k2=H.j(a7.y.n(0,"txtCubeMat"),"$iam")
if(d2.y2)a7.k3=H.j(a7.y.n(0,"colorMat"),"$iam")
a7.seu(H.c([],[A.am]))
t=d2.ae
if(t>0){a7.k4=H.n(a7.y.n(0,"bendMatCount"),"$iI")
for(g=0;g<t;++g){s=a7.r1
r=a7.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.r(a8+q+a9));(s&&C.a).h(s,H.j(f,"$iam"))}}t=d2.a
if(t!==C.c){a7.r2=H.j(a7.y.n(0,"emissionClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.d:a7.rx=H.j(a7.y.n(0,b0),"$iaa")
a7.x1=H.j(a7.y.n(0,b1),"$iI")
break
case C.e:a7.ry=H.j(a7.y.n(0,b0),"$iab")
a7.x1=H.j(a7.y.n(0,b1),"$iI")
break}}t=d2.b
if(t!==C.c){a7.x2=H.j(a7.y.n(0,"ambientClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.d:a7.y1=H.j(a7.y.n(0,b2),"$iaa")
a7.ae=H.j(a7.y.n(0,b3),"$iI")
break
case C.e:a7.y2=H.j(a7.y.n(0,b2),"$iab")
a7.ae=H.j(a7.y.n(0,b3),"$iI")
break}}t=d2.c
if(t!==C.c){a7.a6=H.j(a7.y.n(0,"diffuseClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.d:a7.b_=H.j(a7.y.n(0,b4),"$iaa")
a7.b0=H.j(a7.y.n(0,b5),"$iI")
break
case C.e:a7.cZ=H.j(a7.y.n(0,b4),"$iab")
a7.b0=H.j(a7.y.n(0,b5),"$iI")
break}}t=d2.d
if(t!==C.c){a7.b1=H.j(a7.y.n(0,"invDiffuseClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.d:a7.d_=H.j(a7.y.n(0,b6),"$iaa")
a7.b2=H.j(a7.y.n(0,b7),"$iI")
break
case C.e:a7.d0=H.j(a7.y.n(0,b6),"$iab")
a7.b2=H.j(a7.y.n(0,b7),"$iI")
break}}t=d2.e
if(t!==C.c){a7.b5=H.j(a7.y.n(0,"shininess"),"$iY")
a7.b3=H.j(a7.y.n(0,"specularClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.d:a7.d1=H.j(a7.y.n(0,b8),"$iaa")
a7.b4=H.j(a7.y.n(0,b9),"$iI")
break
case C.e:a7.d2=H.j(a7.y.n(0,b8),"$iab")
a7.b4=H.j(a7.y.n(0,b9),"$iI")
break}}switch(d2.f){case C.c:break
case C.f:break
case C.d:a7.d3=H.j(a7.y.n(0,"bumpTxt"),"$iaa")
a7.b6=H.j(a7.y.n(0,c0),"$iI")
break
case C.e:a7.d4=H.j(a7.y.n(0,"bumpTxt"),"$iab")
a7.b6=H.j(a7.y.n(0,c0),"$iI")
break}if(d2.dy){a7.d5=H.j(a7.y.n(0,"envSampler"),"$iab")
a7.d6=H.j(a7.y.n(0,"nullEnvTxt"),"$iI")
t=d2.r
if(t!==C.c){a7.b7=H.j(a7.y.n(0,"reflectClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.d:a7.d7=H.j(a7.y.n(0,c1),"$iaa")
a7.b8=H.j(a7.y.n(0,c2),"$iI")
break
case C.e:a7.d8=H.j(a7.y.n(0,c1),"$iab")
a7.b8=H.j(a7.y.n(0,c2),"$iI")
break}}t=d2.x
if(t!==C.c){a7.b9=H.j(a7.y.n(0,"refraction"),"$iY")
a7.ba=H.j(a7.y.n(0,"refractClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.d:a7.d9=H.j(a7.y.n(0,c3),"$iaa")
a7.bb=H.j(a7.y.n(0,c4),"$iI")
break
case C.e:a7.da=H.j(a7.y.n(0,c3),"$iab")
a7.bb=H.j(a7.y.n(0,c4),"$iI")
break}}}t=d2.y
if(t!==C.c){a7.bc=H.j(a7.y.n(0,"alpha"),"$iY")
switch(t){case C.c:break
case C.f:break
case C.d:a7.dc=H.j(a7.y.n(0,c5),"$iaa")
a7.bd=H.j(a7.y.n(0,c6),"$iI")
break
case C.e:a7.dd=H.j(a7.y.n(0,c5),"$iab")
a7.bd=H.j(a7.y.n(0,c6),"$iI")
break}}a7.see(H.c([],[A.cx]))
a7.sef(H.c([],[A.cz]))
a7.seg(H.c([],[A.cA]))
a7.seh(H.c([],[A.cB]))
a7.sei(H.c([],[A.cC]))
a7.sej(H.c([],[A.cD]))
if(d2.k2){t=d2.z
if(t>0){a7.de=H.n(a7.y.n(0,"dirLightCount"),"$iI")
for(g=0;g<t;++g){s=a7.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.j(f,"$iH")
s=a7.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.j(e,"$iH")
s=a7.bS;(s&&C.a).h(s,new A.cx(f,e))}}t=d2.Q
if(t>0){a7.df=H.n(a7.y.n(0,"pntLightCount"),"$iI")
for(g=0;g<t;++g){s=a7.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.j(f,"$iH")
s=a7.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.j(e,"$iH")
s=a7.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r(a8+r+a9))
H.j(d,"$iH")
s=a7.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.t(P.r(a8+r+a9))
H.j(c,"$iY")
s=a7.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.t(P.r(a8+r+a9))
H.j(b,"$iY")
s=a7.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.t(P.r(a8+r+a9))
H.j(a,"$iY")
s=a7.bT;(s&&C.a).h(s,new A.cz(f,e,d,c,b,a))}}t=d2.ch
if(t>0){a7.dg=H.n(a7.y.n(0,"spotLightCount"),"$iI")
for(g=0;g<t;++g){s=a7.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.j(f,"$iH")
s=a7.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.j(e,"$iH")
s=a7.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.t(P.r(a8+r+a9))
H.j(d,"$iH")
s=a7.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r(a8+r+a9))
H.j(c,"$iH")
s=a7.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.t(P.r(a8+r+a9))
H.j(b,"$iY")
s=a7.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.t(P.r(a8+r+a9))
H.j(a,"$iY")
s=a7.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a8+r+a9))
H.j(a0,"$iY")
s=a7.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.t(P.r(a8+r+a9))
H.j(a1,"$iY")
s=a7.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.t(P.r(a8+r+a9))
H.j(a2,"$iY")
s=a7.bU;(s&&C.a).h(s,new A.cA(f,e,d,c,b,a,a0,a1,a2))}}t=d2.cx
if(t>0){a7.dh=H.n(a7.y.n(0,"txtDirLightCount"),"$iI")
for(g=0;g<t;++g){s=a7.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.j(f,"$iH")
s=a7.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.j(e,"$iH")
s=a7.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.t(P.r(a8+r+a9))
H.j(d,"$iH")
s=a7.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.t(P.r(a8+r+a9))
H.j(c,"$iH")
s=a7.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.t(P.r(a8+r+a9))
H.j(b,"$iH")
s=a7.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.r(a8+r+a9))
H.j(a,"$iI")
s=a7.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.t(P.r(a8+r+a9))
H.j(a0,"$iaa")
s=a7.bV;(s&&C.a).h(s,new A.cB(f,e,d,c,b,a0,a))}}t=d2.cy
if(t>0){a7.di=H.n(a7.y.n(0,"txtPntLightCount"),"$iI")
for(g=0;g<t;++g){s=a7.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.j(f,"$iH")
s=a7.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.j(e,"$iH")
s=a7.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.t(P.r(a8+r+a9))
H.j(d,"$icy")
s=a7.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r(a8+r+a9))
H.j(c,"$iH")
s=a7.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r(a8+r+a9))
H.j(b,"$iI")
s=a7.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.r(a8+r+a9))
H.j(a,"$iY")
s=a7.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a8+r+a9))
H.j(a0,"$iY")
s=a7.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.r(a8+r+a9))
H.j(a1,"$iY")
s=a7.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.t(P.r(a8+r+a9))
H.j(a2,"$iab")
s=a7.bW;(s&&C.a).h(s,new A.cC(f,e,d,c,a2,b,a,a0,a1))}}t=d2.db
if(t>0){a7.dj=H.n(a7.y.n(0,"txtSpotLightCount"),"$iI")
for(g=0;g<t;++g){s=a7.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.j(f,"$iH")
s=a7.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.j(e,"$iH")
s=a7.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.t(P.r(a8+r+a9))
H.j(d,"$iH")
s=a7.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.t(P.r(a8+r+a9))
H.j(c,"$iH")
s=a7.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.t(P.r(a8+r+a9))
H.j(b,"$iH")
s=a7.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.r(a8+r+a9))
H.j(a,"$iI")
s=a7.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a8+r+a9))
H.j(a0,"$iH")
s=a7.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.r(a8+r+a9))
H.j(a1,"$iY")
s=a7.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.t(P.r(a8+r+a9))
H.j(a2,"$iY")
s=a7.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.t(P.r(a8+r+a9))
H.j(a3,"$iY")
s=a7.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.t(P.r(a8+r+a9))
H.j(a4,"$iY")
s=a7.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.t(P.r(a8+r+a9))
H.j(a5,"$iY")
s=a7.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.t(P.r(a8+r+a9))
H.j(a6,"$iaa")
s=a7.bX;(s&&C.a).h(s,new A.cD(f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
a5:function(a,b,c){if(c==null||!c.d)C.b.U(b.a,b.d,1)
else{a.dW(c)
C.b.U(b.a,b.d,0)}},
a0:function(a,b,c){C.b.U(b.a,b.d,1)},
seu:function(a){this.r1=H.m(a,"$ib",[A.am],"$ab")},
see:function(a){this.bS=H.m(a,"$ib",[A.cx],"$ab")},
sef:function(a){this.bT=H.m(a,"$ib",[A.cz],"$ab")},
seg:function(a){this.bU=H.m(a,"$ib",[A.cA],"$ab")},
seh:function(a){this.bV=H.m(a,"$ib",[A.cB],"$ab")},
sei:function(a){this.bW=H.m(a,"$ib",[A.cC],"$ab")},
sej:function(a){this.bX=H.m(a,"$ib",[A.cD],"$ab")}}
A.fY.prototype={
hf:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.ae+"];\n"
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
hm:function(a){var u
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
hg:function(a){var u
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
hu:function(a){var u,t
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
hv:function(a){var u,t
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
ho:function(a){var u
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
hz:function(a){var u
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
aj:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.h(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.i.aR(c,1))+"Txt;\n")
if(b===C.d)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hj:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aj(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   return emissionClr;\n"
break
case C.d:s=u+t
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
he:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aj(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   return ambientClr;\n"
break
case C.d:s=u+t
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
hh:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aj(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   diffuseColor = diffuseClr;\n"
break
case C.d:s=u+t
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
hk:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aj(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
break
case C.d:s=u+t
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
hs:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aj(a,s,"specular")
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
case C.f:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.d:s=u+t
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
hn:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.c:break
case C.f:break
case C.d:u+="uniform sampler2D bumpTxt;\n"
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
case C.f:u=a.a=u+r
break
case C.d:u+=q
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
hq:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aj(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   vec3 scalar = reflectClr;\n"
break
case C.d:s=u+t
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
hr:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aj(a,s,"refract")
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
case C.f:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.d:s=u+t
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
hi:function(a){var u,t=this.z
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
hp:function(a){var u,t=this.Q
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
ht:function(a){var u,t=this.ch
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
hw:function(a){var u,t,s=this.cx
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
hx:function(a){var u,t,s=this.cy
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
hy:function(a){var u,t,s=this.db
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
hl:function(a){var u
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
i:function(a){return this.a6}}
A.cx.prototype={}
A.cB.prototype={}
A.cz.prototype={}
A.cC.prototype={}
A.cA.prototype={}
A.cD.prototype={}
A.cp.prototype={
e6:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cA:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.J(H.k_(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.r("Error compiling shader '"+H.k(s)+"': "+H.k(u)))}return s},
fZ:function(){var u,t,s,r=this,q=H.c([],[A.d1]),p=r.a,o=H.a7(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.by(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d1(p,t.name,s))}r.x=new A.eZ(q)},
h0:function(){var u,t,s,r=this,q=H.c([],[A.dU]),p=r.a,o=H.a7(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.by(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hN(t.type,t.size,t.name,s))}r.y=new A.ih(q)},
at:function(a,b,c){var u=this.a
if(a===1)return new A.I(u,b,c)
else return A.jS(u,this.r,b,a,c)},
eB:function(a,b,c){var u=this.a
if(a===1)return new A.aa(u,b,c)
else return A.jS(u,this.r,b,a,c)},
eC:function(a,b,c){var u=this.a
if(a===1)return new A.ab(u,b,c)
else return A.jS(u,this.r,b,a,c)},
aY:function(a,b){return new P.e7(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hN:function(a,b,c,d){var u=this
switch(a){case 5120:return u.at(b,c,d)
case 5121:return u.at(b,c,d)
case 5122:return u.at(b,c,d)
case 5123:return u.at(b,c,d)
case 5124:return u.at(b,c,d)
case 5125:return u.at(b,c,d)
case 5126:return new A.Y(u.a,c,d)
case 35664:return new A.ib(u.a,c,d)
case 35665:return new A.H(u.a,c,d)
case 35666:return new A.ie(u.a,c,d)
case 35667:return new A.ic(u.a,c,d)
case 35668:return new A.id(u.a,c,d)
case 35669:return new A.ig(u.a,c,d)
case 35674:return new A.ii(u.a,c,d)
case 35675:return new A.cy(u.a,c,d)
case 35676:return new A.am(u.a,c,d)
case 35678:return u.eB(b,c,d)
case 35680:return u.eC(b,c,d)
case 35670:throw H.f(u.aY("BOOL",c))
case 35671:throw H.f(u.aY("BOOL_VEC2",c))
case 35672:throw H.f(u.aY("BOOL_VEC3",c))
case 35673:throw H.f(u.aY("BOOL_VEC4",c))
default:throw H.f(P.r("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.bE.prototype={
i:function(a){return this.b}}
A.dU.prototype={}
A.ih.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.f(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.E()},
E:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.I.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.ic.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.id.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.ia.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
shc:function(a){H.m(a,"$ib",[P.C],"$ab")}}
A.Y.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.ib.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.H.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.ie.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.cy.prototype={
a8:function(a){var u=new Float32Array(H.cT(H.m(a,"$ib",[P.z],"$ab")))
C.b.dM(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.am.prototype={
a8:function(a){var u=new Float32Array(H.cT(H.m(a,"$ib",[P.z],"$ab")))
C.b.dN(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.aa.prototype={
dW:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.ab.prototype={
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.jl.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c0(s.b,b).c0(s.d.c0(s.c,b),c)
s=new V.ay(r.a,r.b,r.c)
if(!J.Z(a.f,s)){a.f=s
s=a.a
if(s!=null)s.W()}a.siv(r.H(0,Math.sqrt(r.M(r))))
s=1-b
u=1-c
u=new V.dC(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.Z(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.W()}},
$S:36}
F.a2.prototype={
aI:function(){var u=this
if(!u.gaJ()){C.a.D(u.a.a.d.b,u)
u.a.a.W()}u.bC()
u.bD()
u.fJ()},
fW:function(a){this.a=a
C.a.h(a.d.b,this)},
fX:function(a){this.b=a
C.a.h(a.d.c,this)},
fY:function(a){this.c=a
C.a.h(a.d.d,this)},
bC:function(){var u=this.a
if(u!=null){C.a.D(u.d.b,this)
this.a=null}},
bD:function(){var u=this.b
if(u!=null){C.a.D(u.d.c,this)
this.b=null}},
fJ:function(){var u=this.c
if(u!=null){C.a.D(u.d.d,this)
this.c=null}},
gaJ:function(){return this.a==null||this.b==null||this.c==null},
es:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cF()
if(q!=null)s=s.K(0,q)
if(u!=null)s=s.K(0,u)
if(t!=null)s=s.K(0,t)
if(s.dl())return
return s.H(0,Math.sqrt(s.M(s)))},
ex:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.a_(0,q)
r=new V.S(r.a,r.b,r.c)
s=r.H(0,Math.sqrt(r.M(r)))
r=t.a_(0,q)
r=new V.S(r.a,r.b,r.c)
r=s.aH(r.H(0,Math.sqrt(r.M(r))))
return r.H(0,Math.sqrt(r.M(r)))},
bO:function(){var u,t=this
if(t.d!=null)return!0
u=t.es()
if(u==null){u=t.ex()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
er:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cF()
if(q!=null)s=s.K(0,q)
if(u!=null)s=s.K(0,u)
if(t!=null)s=s.K(0,t)
if(s.dl())return
return s.H(0,Math.sqrt(s.M(s)))},
ew:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.N().a){l=d.a_(0,g)
l=new V.S(l.a,l.b,l.c)
q=l.H(0,Math.sqrt(l.M(l)))
if(s.a-t.a<0)q=q.aD(0)}else{p=(l-u.b)/r
l=d.a_(0,g)
l=new V.ay(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).a_(0,j)
l=new V.S(l.a,l.b,l.c)
q=l.H(0,Math.sqrt(l.M(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.aD(0)}l=n.d
if(l!=null){o=l.H(0,Math.sqrt(l.M(l)))
l=o.aH(q)
l=l.H(0,Math.sqrt(l.M(l))).aH(o)
q=l.H(0,Math.sqrt(l.M(l)))}return q},
bM:function(){var u,t=this
if(t.e!=null)return!0
u=t.er()
if(u==null){u=t.ew()
if(u==null)return!1}t.e=u
t.a.a.W()
return!0},
ghJ:function(a){var u=this
if(J.Z(u.a,u.b))return!0
if(J.Z(u.b,u.c))return!0
if(J.Z(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
v:function(a){var u,t,s=this
if(s.gaJ())return a+"disposed"
u=a+C.i.a3(J.ai(s.a.e),0)+", "+C.i.a3(J.ai(s.b.e),0)+", "+C.i.a3(J.ai(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
E:function(){return this.v("")}}
F.fq.prototype={}
F.hF.prototype={
aK:function(a,b,c){var u,t=b.a
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
if(t==u.e){t=b.c
t.a.a.q()
t=t.e
u=c.c
u.a.a.q()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.c
u.a.a.q()
if(t==u.e){t=b.c
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.q()
t=t.e
u=c.c
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
if(t==u.e){t=b.c
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.b2.prototype={
aI:function(){var u=this
if(!u.gaJ()){C.a.D(u.a.a.c.b,u)
u.a.a.W()}u.bC()
u.bD()},
bC:function(){var u=this.a
if(u!=null){C.a.D(u.c.b,this)
this.a=null}},
bD:function(){var u=this.b
if(u!=null){C.a.D(u.c.c,this)
this.b=null}},
gaJ:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
v:function(a){if(this.gaJ())return a+"disposed"
return a+C.i.a3(J.ai(this.a.e),0)+", "+C.i.a3(J.ai(this.b.e),0)},
E:function(){return this.v("")}}
F.fL.prototype={}
F.i9.prototype={
aK:function(a,b,c){var u,t=b.a
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
return t==u.e}else{t=b.a
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
return t==u.e}else return!1}}}
F.bs.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
v:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.i.a3(J.ai(u.e),0)},
E:function(){return this.v("")}}
F.dI.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.as():u},
c3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.q()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.A)(g),++s){r=g[s]
h.a.h(0,r.hL())}h.a.q()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.A)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.K()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bs()
if(n.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.R(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.A)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.K()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.K()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
p=new F.b2()
o=l.a
if(o==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
p.a=l
C.a.h(l.c.b,p)
p.b=k
C.a.h(k.c.c,p)
C.a.h(p.a.a.c.b,p)
p=p.a.a.e
if(p!=null)p.R(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.A)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.K()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.K()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.K()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.de(l,k,i)}g=h.e
if(g!=null)g.af(0)},
ay:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ay()||!1
if(!t.a.ay())u=!1
s=t.e
if(s!=null)s.af(0)
return u},
i2:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.x(o,0)])
for(o=[F.ao];u.length!==0;){t=C.a.ghU(u)
C.a.dC(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.h(u,r)
q=u[r]
if(q!=null&&a.aK(0,t,q)){C.a.h(s,q)
C.a.dC(u,r)}}if(s.length>1)b.c3(s)}}p.a.q()
p.c.c6()
p.d.c6()
p.b.il()
p.c.c7(new F.i9())
p.d.c7(new F.hF())
o=p.e
if(o!=null)o.af(0)},
hH:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bd()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bc().a)!==0)++s
if((t&$.bb().a)!==0)++s
if((t&$.be().a)!==0)++s
if((t&$.bf().a)!==0)++s
if((t&$.cY().a)!==0)++s
if((t&$.cZ().a)!==0)++s
if((t&$.c0().a)!==0)++s
if((t&$.ba().a)!==0)++s
r=a3.gce(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.z
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d4])
for(n=0,m=0;m<s;++m){l=a3.hE(m)
k=l.gce(l)
C.a.P(o,m,new Z.d4(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].i0(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.P(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cT(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d5(new Z.dZ(a0,f),o,a3)
e.seM(H.c([],[Z.bq]))
if(a.b.b.length!==0){t=P.C
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.q()
C.a.h(d,c.e)}b=Z.jT(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bq(0,d.length,b))}if(a.c.b.length!==0){t=P.C
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.q()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.q()
C.a.h(d,c.e)}b=Z.jT(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bq(1,d.length,b))}if(a.d.b.length!==0){t=P.C
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.q()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.q()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].c
c.a.a.q()
C.a.h(d,c.e)}b=Z.jT(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bq(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.e])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.v(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.v(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.v(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.v(t))}return C.a.l(s,"\n")},
W:function(){var u=this.e
if(u!=null)u.R(null)},
$inb:1}
F.hy.prototype={
hB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ao],"$ab")
u=H.c([],[F.a2])
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
C.a.h(u,F.de(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.de(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.de(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.de(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
c7:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aK(0,p,n)){p.aI()
break}}}}},
c6:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.ghJ(s)
if(t)s.aI()}},
ay:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].bO())s=!1
return s},
bN:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].bM())s=!1
return s},
i:function(a){return this.E()},
v:function(a){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].v(a))
return C.a.l(r,"\n")},
E:function(){return this.v("")},
seH:function(a){this.b=H.m(a,"$ib",[F.a2],"$ab")}}
F.hz.prototype={
gm:function(a){return this.b.length},
c7:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aK(0,p,n)){p.aI()
break}}}}},
c6:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.Z(s.a,s.b)
if(t)s.aI()}},
i:function(a){return this.E()},
v:function(a){var u,t,s=H.c([],[P.e]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].v(a+(""+u+". ")))}return C.a.l(s,"\n")},
E:function(){return this.v("")},
seN:function(a){this.b=H.m(a,"$ib",[F.b2],"$ab")}}
F.hA.prototype={
gm:function(a){return this.b.length},
il:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.D(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.R(null)}s=t.a
if(s!=null){C.a.D(s.b.b,t)
t.a=null}}}},
i:function(a){return this.E()},
v:function(a){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].v(a))
return C.a.l(r,"\n")},
E:function(){return this.v("")},
sbz:function(a){this.b=H.m(a,"$ib",[F.bs],"$ab")}}
F.ao.prototype={
bQ:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kU(u.cx,r,o,t,s,q,p,a,n)},
hL:function(){return this.bQ(null)},
siv:function(a){var u
if(!J.Z(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
i0:function(a){var u,t,s=this
if(a.t(0,$.bd())){u=s.f
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bc())){u=s.r
t=[P.z]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bb())){u=s.x
t=[P.z]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.be())){u=s.y
t=[P.z]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bf())){u=s.z
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cY())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cZ())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.c0()))return H.c([s.ch],[P.z])
else if(a.t(0,$.ba())){u=s.cx
t=[P.z]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.z])},
bO:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cF()
t.d.J(0,new F.iB(s))
s=s.a
t.r=s.H(0,Math.sqrt(s.M(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.af(0)}return!0},
bM:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cF()
t.d.J(0,new F.iA(s))
s=s.a
t.x=s.H(0,Math.sqrt(s.M(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.af(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
v:function(a){var u,t,s=this,r="-",q=H.c([],[P.e])
C.a.h(q,C.i.a3(J.ai(s.e),0))
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
C.a.h(q,V.K(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
E:function(){return this.v("")}}
F.iB.prototype={
$1:function(a){var u,t
H.n(a,"$ia2")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.K(0,u)}},
$S:7}
F.iA.prototype={
$1:function(a){var u,t
H.n(a,"$ia2")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.K(0,u)}},
$S:7}
F.ir.prototype={
q:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.W()
return!0},
cS:function(a,b){var u=null,t=F.kU(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gm:function(a){return this.c.length},
ay:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].bO()
return!0},
bN:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].bM()
return!0},
hI:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.H(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Z(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.R(null)}}}}return!0},
i:function(a){return this.E()},
v:function(a){var u,t,s,r
this.q()
u=H.c([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].v(a))
return C.a.l(u,"\n")},
E:function(){return this.v("")},
shd:function(a){this.c=H.m(a,"$ib",[F.ao],"$ab")}}
F.is.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
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
J:function(a,b){var u=this
H.l(b,{func:1,ret:-1,args:[F.a2]})
C.a.J(u.b,b)
C.a.J(u.c,new F.it(u,b))
C.a.J(u.d,new F.iu(u,b))},
i:function(a){return this.E()},
E:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].v(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].v(""))
return C.a.l(r,"\n")},
seI:function(a){this.b=H.m(a,"$ib",[F.a2],"$ab")},
seJ:function(a){this.c=H.m(a,"$ib",[F.a2],"$ab")},
seK:function(a){this.d=H.m(a,"$ib",[F.a2],"$ab")}}
F.it.prototype={
$1:function(a){H.n(a,"$ia2")
if(!J.Z(a.a,this.a))this.b.$1(a)},
$S:7}
F.iu.prototype={
$1:function(a){var u
H.n(a,"$ia2")
u=this.a
if(!J.Z(a.a,u)&&!J.Z(a.b,u))this.b.$1(a)},
$S:7}
F.iv.prototype={
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.h(t,u)
return t[u]}else{if(b<0)return H.h(t,b)
return t[b]}},
i:function(a){return this.E()},
E:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].v(""))
return C.a.l(r,"\n")},
seO:function(a){this.b=H.m(a,"$ib",[F.b2],"$ab")},
seP:function(a){this.c=H.m(a,"$ib",[F.b2],"$ab")}}
F.ix.prototype={}
F.iw.prototype={
aK:function(a,b,c){return J.Z(b.f,c.f)}}
F.iy.prototype={}
F.hf.prototype={
c3:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.ao],"$ab")
u=V.cF()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.S(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.H(0,Math.sqrt(u.M(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.H(0,Math.sqrt(o*o+n*n+m*m))}if(!J.Z(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.R(null)}}}return}}
F.iz.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.E()},
E:function(){var u,t,s,r=H.c([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].v(""))
return C.a.l(r,"\n")},
sbz:function(a){this.b=H.m(a,"$ib",[F.bs],"$ab")}}
O.ds.prototype={
gw:function(){var u=this.dy
return u==null?this.dy=D.as():u},
S:function(a){var u
H.n(a,"$iD")
u=this.dy
if(u!=null)u.R(a)},
bn:function(){return this.S(null)},
cL:function(a){H.n(a,"$iD")
this.a=null
this.S(a)},
fN:function(){return this.cL(null)},
eV:function(a,b){var u=V.a9
H.m(b,"$ii",[u],"$ai")
u=new D.cd([u])
u.b=!0
this.S(u)},
eX:function(a,b){var u=V.a9
H.m(b,"$ii",[u],"$ai")
u=new D.ce([u])
u.b=!0
this.S(u)},
cv:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.h.X(a1.e.length+3,4)*4,a3=C.h.X(a1.f.length+3,4)*4,a4=C.h.X(a1.r.length+3,4)*4,a5=C.h.X(a1.x.length+3,4)*4,a6=C.h.X(a1.y.length+3,4)*4,a7=C.h.X(a1.z.length+3,4)*4,a8=C.h.X(a0.e.a.length+3,4)*4
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
f=a1===C.d||u===C.d||t===C.d||s===C.d||r===C.d||q===C.d||p===C.d||o===C.d||n===C.d
e=a1===C.e||u===C.e||t===C.e||s===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.bd()
if(h){j=$.bc()
a=new Z.aX(a.a|j.a)}if(g){j=$.bb()
a=new Z.aX(a.a|j.a)}if(f){j=$.be()
a=new Z.aX(a.a|j.a)}if(e){j=$.bf()
a=new Z.aX(a.a|j.a)}if(c){j=$.ba()
a=new Z.aX(a.a|j.a)}return new A.fY(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
O:function(a,b){H.m(a,"$ib",[T.cu],"$ab")
if(b!=null)if(!C.a.L(a,b)){b.a=a.length
C.a.h(a,b)}},
bh:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.aq(u,u.length,[H.x(u,0)]);u.u();){t=u.d
t.toString
s=$.iq
if(s==null)s=$.iq=new V.S(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.c9(s)}}},
io:function(a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4==null){a4=a3.cv()
u=a5.fr.j(0,a4.a6)
if(u==null){u=A.lX(a4,a5.a)
t=u.b
if(t.length===0)H.t(P.r("May not cache a shader with no name."))
if(a5.fr.cX(0,t))H.t(P.r('Shader cache already contains a shader by the name "'+t+'".'))
a5.fr.P(0,t,u)}a4=a3.a=u
a6.e=null}s=a4.z
r=s.b_
a4=a6.e
if(!(a4 instanceof Z.d5))a4=a6.e=null
if(a4==null||!a4.d.t(0,r)){a4=s.r1
if(a4)a6.d.ay()
q=s.r2
if(q){p=a6.d
o=p.e
if(o!=null)++o.d
p.d.bN()
p.a.bN()
p=p.e
if(p!=null)p.af(0)}p=s.ry
if(p){o=a6.d
n=o.e
if(n!=null)++n.d
o.a.hI()
o=o.e
if(o!=null)o.af(0)}m=a6.d.hH(new Z.iD(a5.a),r)
m.az($.bd()).e=a3.a.Q.c
if(a4)m.az($.bc()).e=a3.a.cx.c
if(q)m.az($.bb()).e=a3.a.ch.c
if(s.rx)m.az($.be()).e=a3.a.cy.c
if(p)m.az($.bf()).e=a3.a.db.c
if(s.x1)m.az($.ba()).e=a3.a.dx.c
a6.e=m}a4=T.cu
l=H.c([],[a4])
q=a3.a
p=a5.a
p.useProgram(q.r)
q.x.hS()
if(s.fx){q=a3.a
o=a5.dx
o=o.gT(o)
q=q.dy
q.toString
q.a8(o.a4(0,!0))}if(s.fy){q=a3.a
o=a5.cx
if(o==null){o=a5.db
o=o.gT(o)
n=a5.dx
n=a5.cx=o.V(0,n.gT(n))
o=n}q=q.fr
q.toString
q.a8(o.a4(0,!0))}q=a3.a
o=a5.ch
if(o==null){o=a5.gij()
n=a5.dx
n=a5.ch=o.V(0,n.gT(n))
o=n}q=q.fy
q.toString
q.a8(o.a4(0,!0))
if(s.x2){q=a3.a
o=a3.b
q=q.k1
q.toString
q.a8(C.n.a4(o,!0))}if(s.y1){q=a3.a
o=a3.c
q=q.k2
q.toString
q.a8(C.n.a4(o,!0))}if(s.y2){q=a3.a
o=a3.d
q=q.k3
q.toString
q.a8(C.n.a4(o,!0))}if(s.ae>0){k=a3.e.a.length
q=a3.a.k4
C.b.U(q.a,q.d,k)
for(q=[P.z],j=0;j<k;++j){o=a3.a
n=a3.e.a
if(j>=n.length)return H.h(n,j)
n=n[j]
o.toString
H.n(n,"$ia9")
o=o.r1
if(j>=o.length)return H.h(o,j)
o=o[j]
i=new Float32Array(H.cT(H.m(n.a4(0,!0),"$ib",q,"$ab")))
C.b.dN(o.a,o.d,!1,i)}}switch(s.a){case C.c:break
case C.f:q=a3.a
o=a3.f.f
q=q.r2
q.toString
n=o.a
h=o.b
o=o.c
C.b.p(q.a,q.d,n,h,o)
break
case C.d:a3.O(l,a3.f.d)
q=a3.a
o=a3.f.d
q.a5(q.rx,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break
case C.e:a3.O(l,a3.f.e)
q=a3.a
o=a3.f.e
q.a0(q.ry,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.f:q=a3.a
o=a3.r.f
q=q.x2
q.toString
n=o.a
h=o.b
o=o.c
C.b.p(q.a,q.d,n,h,o)
break
case C.d:a3.O(l,a3.r.d)
q=a3.a
o=a3.r.d
q.a5(q.y1,q.ae,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break
case C.e:a3.O(l,a3.r.e)
q=a3.a
o=a3.r.e
q.a0(q.y2,q.ae,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break}switch(s.c){case C.c:break
case C.f:q=a3.a
o=a3.x.f
q=q.a6
q.toString
n=o.a
h=o.b
o=o.c
C.b.p(q.a,q.d,n,h,o)
break
case C.d:a3.O(l,a3.x.d)
q=a3.a
o=a3.x.d
q.a5(q.b_,q.b0,o)
o=a3.a
q=a3.x.f
o=o.a6
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break
case C.e:a3.O(l,a3.x.e)
q=a3.a
o=a3.x.e
q.a0(q.cZ,q.b0,o)
o=a3.a
q=a3.x.f
o=o.a6
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break}switch(s.d){case C.c:break
case C.f:q=a3.a
o=a3.y.f
q=q.b1
q.toString
n=o.a
h=o.b
o=o.c
C.b.p(q.a,q.d,n,h,o)
break
case C.d:a3.O(l,a3.y.d)
q=a3.a
o=a3.y.d
q.a5(q.d_,q.b2,o)
o=a3.a
q=a3.y.f
o=o.b1
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break
case C.e:a3.O(l,a3.y.e)
q=a3.a
o=a3.y.e
q.a0(q.d0,q.b2,o)
o=a3.a
q=a3.y.f
o=o.b1
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break}switch(s.e){case C.c:break
case C.f:q=a3.a
o=a3.z.f
q=q.b3
q.toString
n=o.a
h=o.b
o=o.c
C.b.p(q.a,q.d,n,h,o)
o=a3.a
h=a3.z.ch
o=o.b5
C.b.G(o.a,o.d,h)
break
case C.d:a3.O(l,a3.z.d)
q=a3.a
o=a3.z.d
q.a5(q.d1,q.b4,o)
o=a3.a
q=a3.z.f
o=o.b3
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.b5
C.b.G(q.a,q.d,h)
break
case C.e:a3.O(l,a3.z.e)
q=a3.a
o=a3.z.e
q.a0(q.d2,q.b4,o)
o=a3.a
q=a3.z.f
o=o.b3
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.b5
C.b.G(q.a,q.d,h)
break}if(s.z>0){k=a3.dx.e.length
q=a3.a.de
C.b.U(q.a,q.d,k)
q=a5.db
g=q.gT(q)
for(q=a3.dx.e,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.A)(q),++e){d=q[e]
n=a3.a.bS
if(f>=n.length)return H.h(n,f)
c=n[f]
n=g.c9(d.a)
h=n.a
b=n.b
a=n.c
a=n.H(0,Math.sqrt(h*h+b*b+a*a))
b=c.b
h=a.a
n=a.b
a=a.c
C.b.p(b.a,b.d,h,n,a)
a=d.c
n=c.c
C.b.p(n.a,n.d,a.a,a.b,a.c);++f}}if(s.Q>0){k=a3.dx.f.length
q=a3.a.df
C.b.U(q.a,q.d,k)
q=a5.db
g=q.gT(q)
for(q=a3.dx.f,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.A)(q),++e){d=q[e]
n=a3.a.bT
if(f>=n.length)return H.h(n,f)
c=n[f]
n=d.gaO(d)
h=c.b
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=g.aQ(d.gaO(d))
h=c.c
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gal(d)
h=c.d
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gbH()
h=c.e
C.b.G(h.a,h.d,n)
n=d.gbI()
h=c.f
C.b.G(h.a,h.d,n)
n=d.gbJ()
h=c.r
C.b.G(h.a,h.d,n);++f}}if(s.ch>0){k=a3.dx.r.length
q=a3.a.dg
C.b.U(q.a,q.d,k)
q=a5.db
g=q.gT(q)
for(q=a3.dx.r,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.A)(q),++e){d=q[e]
n=a3.a.bU
if(f>=n.length)return H.h(n,f)
c=n[f]
n=d.gaO(d)
h=c.b
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gbR(d).iH()
h=c.c
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=g.aQ(d.gaO(d))
h=c.d
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gal(d)
h=c.e
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.giF()
h=c.f
C.b.G(h.a,h.d,n)
n=d.giE()
h=c.r
C.b.G(h.a,h.d,n)
n=d.gbH()
h=c.x
C.b.G(h.a,h.d,n)
n=d.gbI()
h=c.y
C.b.G(h.a,h.d,n)
n=d.gbJ()
h=c.z
C.b.G(h.a,h.d,n);++f}}if(s.cx>0){k=a3.dx.x.length
q=a3.a.dh
C.b.U(q.a,q.d,k)
q=a5.db
g=q.gT(q)
for(q=a3.dx.x,o=q.length,n=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.A)(q),++e){d=q[e]
h=a3.a.bV
if(f>=h.length)return H.h(h,f)
c=h[f]
h=d.gaP()
H.m(l,"$ib",n,"$ab")
if(!C.a.L(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gbR(d)
b=c.d
C.b.p(b.a,b.d,h.a,h.b,h.c)
h=d.giC()
b=c.b
C.b.p(b.a,b.d,h.a,h.b,h.c)
h=d.giq(d)
b=c.c
C.b.p(b.a,b.d,h.a,h.b,h.c)
h=g.c9(d.gbR(d))
b=h.a
a=h.b
a0=h.c
a0=h.H(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
h=a0.b
a0=a0.c
C.b.p(a.a,a.d,b,h,a0)
a0=d.gal(d)
h=c.f
C.b.p(h.a,h.d,a0.a,a0.b,a0.c)
a0=d.gaP()
h=a0.gc2(a0)
if(!h){h=c.x
C.b.U(h.a,h.d,1)}else{h=c.r
b=a0.d
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,a0.a)
h=c.x
C.b.U(h.a,h.d,0)}++f}}if(s.cy>0){k=a3.dx.y.length
q=a3.a.di
C.b.U(q.a,q.d,k)
q=a5.db
g=q.gT(q)
for(q=a3.dx.y,o=q.length,n=[P.z],h=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.A)(q),++e){d=q[e]
b=a3.a.bW
if(f>=b.length)return H.h(b,f)
c=b[f]
b=d.gaP()
H.m(l,"$ib",h,"$ab")
if(!C.a.L(l,b)){b.a=l.length
C.a.h(l,b)}a1=g.V(0,d.gT(d))
b=d.gT(d)
a=$.cm
b=b.aQ(a==null?$.cm=new V.ay(0,0,0):a)
a=c.b
C.b.p(a.a,a.d,b.a,b.b,b.c)
b=$.cm
b=a1.aQ(b==null?$.cm=new V.ay(0,0,0):b)
a=c.c
C.b.p(a.a,a.d,b.a,b.b,b.c)
b=a1.dk(0)
a=c.d
i=new Float32Array(H.cT(H.m(new V.dt(b.a,b.b,b.c,b.e,b.f,b.r,b.y,b.z,b.Q).a4(0,!0),"$ib",n,"$ab")))
C.b.dM(a.a,a.d,!1,i)
a=d.gal(d)
b=c.e
C.b.p(b.a,b.d,a.a,a.b,a.c)
a=d.gaP()
b=a.gc2(a)
if(!b){b=c.r
C.b.U(b.a,b.d,1)}else{b=c.f
a0=a.gc2(a)
a2=b.a
b=b.d
if(!a0)a2.uniform1i(b,0)
else a2.uniform1i(b,a.giG(a))
b=c.r
C.b.U(b.a,b.d,0)}b=d.gbH()
a=c.x
C.b.G(a.a,a.d,b)
b=d.gbI()
a=c.y
C.b.G(a.a,a.d,b)
b=d.gbJ()
a=c.z
C.b.G(a.a,a.d,b);++f}}if(s.db>0){k=a3.dx.z.length
q=a3.a.dj
C.b.U(q.a,q.d,k)
q=a5.db
g=q.gT(q)
for(q=a3.dx.z,o=q.length,a4=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.A)(q),++e){d=q[e]
n=a3.a.bX
if(f>=n.length)return H.h(n,f)
c=n[f]
n=d.gaP()
H.m(l,"$ib",a4,"$ab")
if(!C.a.L(l,n)){n.a=l.length
C.a.h(l,n)}n=d.gaO(d)
h=c.b
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gbR(d)
h=c.c
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.giC()
h=c.d
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.giq(d)
h=c.e
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=g.aQ(d.gaO(d))
h=c.f
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gaP()
h=n.gc2(n)
if(!h){n=c.x
C.b.U(n.a,n.d,1)}else{h=c.r
b=n.d
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,n.a)
n=c.x
C.b.U(n.a,n.d,0)}n=d.gal(d)
h=c.y
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.giI()
h=c.z
C.b.G(h.a,h.d,n)
n=d.giJ()
h=c.Q
C.b.G(h.a,h.d,n)
n=d.gbH()
h=c.ch
C.b.G(h.a,h.d,n)
n=d.gbI()
h=c.cx
C.b.G(h.a,h.d,n)
n=d.gbJ()
h=c.cy
C.b.G(h.a,h.d,n);++f}}}switch(s.f){case C.c:break
case C.f:break
case C.d:a3.O(l,a3.Q.d)
a4=a3.a
q=a3.Q.d
a4.a5(a4.d3,a4.b6,q)
break
case C.e:a3.O(l,a3.Q.e)
a4=a3.a
q=a3.Q.e
a4.a0(a4.d4,a4.b6,q)
break}if(s.fr){a4=a3.a
q=a5.Q
if(q==null){q=a5.db
q=a5.Q=q.gT(q).dk(0)}a4=a4.id
a4.toString
a4.a8(q.a4(0,!0))}if(s.dy){a3.O(l,a3.ch)
a4=a3.a
q=a3.ch
a4.a0(a4.d5,a4.d6,q)
switch(s.r){case C.c:break
case C.f:a4=a3.a
q=a3.cx.f
a4=a4.b7
a4.toString
o=q.a
n=q.b
q=q.c
C.b.p(a4.a,a4.d,o,n,q)
break
case C.d:a3.O(l,a3.cx.d)
a4=a3.a
q=a3.cx.d
a4.a5(a4.d7,a4.b8,q)
q=a3.a
a4=a3.cx.f
q=q.b7
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.p(q.a,q.d,o,n,a4)
break
case C.e:a3.O(l,a3.cx.e)
a4=a3.a
q=a3.cx.e
a4.a0(a4.d8,a4.b8,q)
q=a3.a
a4=a3.cx.f
q=q.b7
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.p(q.a,q.d,o,n,a4)
break}switch(s.x){case C.c:break
case C.f:a4=a3.a
q=a3.cy.f
a4=a4.ba
a4.toString
o=q.a
n=q.b
q=q.c
C.b.p(a4.a,a4.d,o,n,q)
q=a3.a
n=a3.cy.ch
q=q.b9
C.b.G(q.a,q.d,n)
break
case C.d:a3.O(l,a3.cy.d)
a4=a3.a
q=a3.cy.d
a4.a5(a4.d9,a4.bb,q)
q=a3.a
a4=a3.cy.f
q=q.ba
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.p(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.b9
C.b.G(a4.a,a4.d,n)
break
case C.e:a3.O(l,a3.cy.e)
a4=a3.a
q=a3.cy.e
a4.a0(a4.da,a4.bb,q)
q=a3.a
a4=a3.cy.f
q=q.ba
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.p(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.b9
C.b.G(a4.a,a4.d,n)
break}}a4=s.y
q=a4!==C.c
if(q){switch(a4){case C.c:break
case C.f:a4=a3.a
o=a3.db.f
a4=a4.bc
C.b.G(a4.a,a4.d,o)
break
case C.d:a3.O(l,a3.db.d)
a4=a3.a
o=a3.db.d
a4.a5(a4.dc,a4.bd,o)
o=a3.a
a4=a3.db.f
o=o.bc
C.b.G(o.a,o.d,a4)
break
case C.e:a3.O(l,a3.db.e)
a4=a3.a
o=a3.db.e
a4.a0(a4.dd,a4.bd,o)
o=a3.a
a4=a3.db.f
o=o.bc
C.b.G(o.a,o.d,a4)
break}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){a4=l[j]
if(!a4.c&&a4.d){a4.c=!0
p.activeTexture(33984+a4.a)
p.bindTexture(3553,a4.b)}}a4=a6.e
a4.bK(a5)
a4.aB(a5)
a4.iB(a5)
if(q)p.disable(3042)
for(j=0;j<l.length;++j){a4=l[j]
if(a4.c){a4.c=!1
p.activeTexture(33984+a4.a)
p.bindTexture(3553,null)}}a4=a3.a
a4.toString
p.useProgram(null)
a4.x.hQ()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cv().a6},
sev:function(a){this.e=H.m(a,"$ia_",[V.a9],"$aa_")}}
O.fW.prototype={
fS:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.N().a)){u.f=a
t=new D.T(u.b,t,a,[P.z])
t.b=!0
u.a.S(t)}},
ab:function(){this.cg()
this.fS(1)}}
O.cg.prototype={
S:function(a){this.a.S(H.n(a,"$iD"))},
bn:function(){return this.S(null)},
ab:function(){},
fU:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gw().D(0,t.gaU())
u=t.d
t.d=a
if(a!=null)a.gw().h(0,t.gaU())
s=new D.T(t.b+".texture2D",u,t.d,[T.dO])
s.b=!0
t.a.S(s)}},
fV:function(a){},
sbg:function(a){var u=this,t=u.c
if(t!==C.d){if(t===C.c)u.ab()
u.c=C.d
u.fV(null)
t=u.a
t.a=null
t.S(null)}u.fU(a)}}
O.fX.prototype={}
O.aM.prototype={
cN:function(a){var u,t,s=this
if(!J.Z(s.f,a)){u=s.f
s.f=a
t=new D.T(s.b+".color",u,a,[V.a1])
t.b=!0
s.a.S(t)}},
ab:function(){this.cg()
this.cN(new V.a1(1,1,1))},
sal:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.f
t.ab()
u=t.a
u.a=null
u.S(null)}t.cN(b)}}
O.fZ.prototype={
fT:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.N().a)){u.ch=a
t=new D.T(u.b+".refraction",t,a,[P.z])
t.b=!0
u.a.S(t)}},
ab:function(){this.bm()
this.fT(1)}}
O.h_.prototype={
bE:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.N().a)){u.ch=a
t=new D.T(u.b+".shininess",t,a,[P.z])
t.b=!0
u.a.S(t)}},
ab:function(){this.bm()
this.bE(100)}}
O.bQ.prototype={}
T.cu.prototype={}
T.dO.prototype={}
T.hW.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.as():u}}
T.hX.prototype={
c1:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.hW()
t.a=0
t.b=q
t.d=t.c=!1
r=W.o
W.a3(u,"load",H.l(new T.hY(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
fO:function(a,b,c){var u,t,s,r
b=V.ka(b)
u=V.ka(a.width)
t=V.ka(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jG()
s.width=u
s.height=t
r=H.n(C.v.dR(s,"2d"),"$ic4")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mE(r.getImageData(0,0,s.width,s.height))}}}
T.hY.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.fO(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.b.iu(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.hR()}++s.e},
$S:24}
V.b_.prototype={
am:function(a,b){return!0},
i:function(a){return"all"},
$iaj:1}
V.aj.prototype={}
V.dr.prototype={
am:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].am(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sY:function(a){this.a=H.m(a,"$ib",[V.aj],"$ab")},
$iaj:1}
V.ae.prototype={
am:function(a,b){return!this.e0(0,b)},
i:function(a){return"!["+this.cf(0)+"]"}}
V.ho.prototype={
am:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.jP(this.a),t=H.jP(this.b)
return u+".."+t},
$iaj:1}
V.hx.prototype={
e5:function(a){var u,t
if(a.a.length<=0)throw H.f(P.r("May not create a SetMatcher with zero characters."))
u=new H.aK([P.C,P.P])
for(t=new H.cf(a,a.gm(a),[H.ah(a,"w",0)]);t.u();)u.P(0,t.d,!0)
this.sfR(u)},
am:function(a,b){return this.a.cX(0,b)},
i:function(a){var u=this.a
return P.jQ(new H.dn(u,[H.x(u,0)]))},
sfR:function(a){this.a=H.m(a,"$iM",[P.C,P.P],"$aM")},
$iaj:1}
V.cq.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cw(this.a.k(0,b))
r.sY(H.c([],[V.aj]))
r.c=!1
C.a.h(this.c,r)
return r},
hT:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.am(0,a))return r}return},
i:function(a){return this.b},
sh8:function(a){this.c=H.m(a,"$ib",[V.cw],"$ab")}}
V.dT.prototype={
i:function(a){var u=H.kc(this.b,"\n","\\n"),t=H.kc(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cv.prototype={
ao:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.A)(c),++t){s=c[t]
this.c.P(0,s,b)}},
i:function(a){return this.b},
sfK:function(a){var u=P.e
this.c=H.m(a,"$iM",[u,u],"$aM")}}
V.i0.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cq(this,b)
u.sh8(H.c([],[V.cw]))
u.d=null
this.a.P(0,b,u)}return u},
F:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cv(a)
u=P.e
t.sfK(new H.aK([u,u]))
this.b.P(0,a,t)}return t},
dK:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dT]),l=this.c,k=[P.C],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.i.as(a,s)
q=l.hT(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jQ(j)
throw H.f(P.r("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jQ(j)
o=l.d
n=o.c.j(0,p)
t=new V.dT(n==null?o.b:n,p,s)}++s}}},
sh4:function(a){this.a=H.m(a,"$iM",[P.e,V.cq],"$aM")},
sh7:function(a){this.b=H.m(a,"$iM",[P.e,V.cv],"$aM")}}
V.cw.prototype={
i:function(a){return this.b.b+": "+this.cf(0)}}
X.d7.prototype={$ib4:1}
X.fy.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.as():u}}
X.dz.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.as():u},
ar:function(a){var u
H.n(a,"$iD")
u=this.f
if(u!=null)u.R(a)},
en:function(){return this.ar(null)},
saL:function(a){var u,t,s=this
if(!J.Z(s.b,a)){u=s.b
if(u!=null)u.gw().D(0,s.gcm())
t=s.b
s.b=a
if(a!=null)a.gw().h(0,s.gcm())
u=new D.T("mover",t,s.b,[U.bK])
u.b=!0
s.ar(u)}},
$ib4:1,
$id7:1}
X.dM.prototype={}
V.bi.prototype={
aT:function(a){this.b=new P.fC(C.L)
this.c=null
this.sbu(H.c([],[[P.b,W.ar]]))},
B:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.ar]))
u=a.split("\n")
for(l=u.length,t=[W.ar],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.E(q)
o=m.b.eA(q,0,q.length)
n=o==null?q:o
C.J.dV(p,H.kc(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gbe(m.d),p)}},
dv:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.e],"$ab")
q.sbu(H.c([],[[P.b,W.ar]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.aZ():t).dK(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)q.bf(t[r])},
sbu:function(a){this.d=H.m(a,"$ib",[[P.b,W.ar]],"$ab")}}
V.jB.prototype={
$1:function(a){H.n(a,"$iaU")
P.kb(C.j.dJ(this.a.ghW(),2)+" fps")},
$S:38}
V.fd.prototype={
bf:function(a){var u=this
switch(a.a){case"Class":u.B(a.b,"#551")
break
case"Comment":u.B(a.b,"#777")
break
case"Id":u.B(a.b,"#111")
break
case"Num":u.B(a.b,"#191")
break
case"Reserved":u.B(a.b,"#119")
break
case"String":u.B(a.b,"#171")
break
case"Symbol":u.B(a.b,"#616")
break
case"Type":u.B(a.b,"#B11")
break
case"Whitespace":u.B(a.b,"#111")
break}},
aZ:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.i1()
a1.c=a1.k(0,r)
u=a1.k(0,r).l(0,q)
t=V.v(new H.q("_"))
C.a.h(u.a,t)
t=V.W("a","z")
C.a.h(u.a,t)
t=V.W("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).l(0,q)
u=V.v(new H.q("_"))
C.a.h(t.a,u)
u=V.W("0","9")
C.a.h(t.a,u)
u=V.W("a","z")
C.a.h(t.a,u)
u=V.W("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).l(0,p)
t=V.W("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).l(0,p)
u=V.W("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).l(0,o)
t=V.v(new H.q("."))
C.a.h(u.a,t)
t=a1.k(0,o).l(0,n)
u=V.W("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).l(0,n)
t=V.W("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).l(0,m)
u=V.v(new H.q(l))
C.a.h(t.a,u)
u=a1.k(0,m).l(0,m)
t=V.v(new H.q(l))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,k)
u=V.v(new H.q('"'))
C.a.h(t.a,u)
u=a1.k(0,k).l(0,j)
t=V.v(new H.q('"'))
C.a.h(u.a,t)
t=a1.k(0,k).l(0,i)
u=V.v(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).l(0,k)
t=V.v(new H.q('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).l(0,k).a,new V.b_())
t=a1.k(0,r).l(0,h)
u=V.v(new H.q("'"))
C.a.h(t.a,u)
u=a1.k(0,h).l(0,g)
t=V.v(new H.q("'"))
C.a.h(u.a,t)
t=a1.k(0,h).l(0,f)
u=V.v(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).l(0,h)
t=V.v(new H.q("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).l(0,h).a,new V.b_())
t=a1.k(0,r).l(0,e)
u=V.v(new H.q("/"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,d)
t=V.v(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,d).l(0,c)
u=V.v(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).l(0,d)
t=new V.ae()
s=[V.aj]
t.sY(H.c([],s))
C.a.h(u.a,t)
u=V.v(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,b)
t=V.v(new H.q("*"))
C.a.h(u.a,t)
t=a1.k(0,b).l(0,a)
u=V.v(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,b)
t=new V.ae()
t.sY(H.c([],s))
C.a.h(u.a,t)
u=V.v(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,c)
t=V.v(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,a0)
u=V.v(new H.q(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).l(0,a0)
t=V.v(new H.q(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.F("Num")
t=a1.k(0,n)
t.d=t.a.F("Num")
t=a1.k(0,m)
t.d=t.a.F("Symbol")
t=a1.k(0,j)
t.d=t.a.F("String")
t=a1.k(0,g)
t.d=t.a.F("String")
t=a1.k(0,c)
t.d=t.a.F(d)
t=a1.k(0,a0)
t.d=t.a.F(a0)
t=a1.k(0,q)
t=t.d=t.a.F(q)
u=[P.e]
t.ao(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.ao(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.ao(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fz.prototype={
bf:function(a){var u=this
switch(a.a){case"Builtin":u.B(a.b,"#411")
break
case"Comment":u.B(a.b,"#777")
break
case"Id":u.B(a.b,"#111")
break
case"Num":u.B(a.b,"#191")
break
case"Preprocess":u.B(a.b,"#737")
break
case"Reserved":u.B(a.b,"#119")
break
case"Symbol":u.B(a.b,"#611")
break
case"Type":u.B(a.b,"#171")
break
case"Whitespace":u.B(a.b,"#111")
break}},
aZ:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.i1()
e.c=e.k(0,r)
u=e.k(0,r).l(0,q)
t=V.v(new H.q("_"))
C.a.h(u.a,t)
t=V.W("a","z")
C.a.h(u.a,t)
t=V.W("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).l(0,q)
u=V.v(new H.q("_"))
C.a.h(t.a,u)
u=V.W("0","9")
C.a.h(t.a,u)
u=V.W("a","z")
C.a.h(t.a,u)
u=V.W("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).l(0,p)
t=V.W("0","9")
C.a.h(u.a,t)
t=e.k(0,p).l(0,p)
u=V.W("0","9")
C.a.h(t.a,u)
u=e.k(0,p).l(0,o)
t=V.v(new H.q("."))
C.a.h(u.a,t)
t=e.k(0,o).l(0,n)
u=V.W("0","9")
C.a.h(t.a,u)
u=e.k(0,n).l(0,n)
t=V.W("0","9")
C.a.h(u.a,t)
t=e.k(0,r).l(0,m)
u=V.v(new H.q(l))
C.a.h(t.a,u)
u=e.k(0,m).l(0,m)
t=V.v(new H.q(l))
C.a.h(u.a,t)
t=e.k(0,r).l(0,k)
u=V.v(new H.q("/"))
C.a.h(t.a,u)
u=e.k(0,k).l(0,j)
t=V.v(new H.q("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).l(0,m).a,new V.b_())
t=e.k(0,j).l(0,i)
u=V.v(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,j).l(0,j)
t=new V.ae()
s=[V.aj]
t.sY(H.c([],s))
C.a.h(u.a,t)
u=V.v(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,h)
t=V.v(new H.q("#"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,h)
u=new V.ae()
u.sY(H.c([],s))
C.a.h(t.a,u)
t=V.v(new H.q("\n"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,g)
u=V.v(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,f)
t=V.v(new H.q(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).l(0,f)
u=V.v(new H.q(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.F("Num")
u=e.k(0,n)
u.d=u.a.F("Num")
u=e.k(0,m)
u.d=u.a.F("Symbol")
u=e.k(0,i)
u.d=u.a.F(j)
u=e.k(0,g)
u.d=u.a.F(h)
u=e.k(0,f)
u.d=u.a.F(f)
u=e.k(0,q)
u=u.d=u.a.F(q)
t=[P.e]
u.ao(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.ao(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.ao(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fA.prototype={
bf:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.B(a.b,"#911")
u.B("=",t)
break
case"Id":u.B(a.b,t)
break
case"Other":u.B(a.b,t)
break
case"Reserved":u.B(a.b,"#119")
break
case"String":u.B(a.b,"#171")
break
case"Symbol":u.B(a.b,"#616")
break}},
aZ:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.i1()
l.c=l.k(0,s)
u=l.k(0,s).l(0,r)
t=V.v(new H.q("_"))
C.a.h(u.a,t)
t=V.W("a","z")
C.a.h(u.a,t)
t=V.W("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).l(0,r)
u=V.v(new H.q("_"))
C.a.h(t.a,u)
u=V.W("0","9")
C.a.h(t.a,u)
u=V.W("a","z")
C.a.h(t.a,u)
u=V.W("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).l(0,q)
t=V.v(new H.q("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).l(0,p)
t=V.v(new H.q("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).l(0,p)
u=V.v(new H.q("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).l(0,o)
t=V.v(new H.q('"'))
C.a.h(u.a,t)
t=l.k(0,o).l(0,n)
u=V.v(new H.q('"'))
C.a.h(t.a,u)
u=l.k(0,o).l(0,"EscStr")
t=V.v(new H.q("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").l(0,o)
u=V.v(new H.q('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).l(0,o).a,new V.b_())
C.a.h(l.k(0,s).l(0,m).a,new V.b_())
u=l.k(0,m).l(0,m)
t=new V.ae()
t.sY(H.c([],[V.aj]))
C.a.h(u.a,t)
u=V.v(new H.q('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.W("a","z")
C.a.h(t.a,u)
u=V.W("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.F("Symbol")
u=l.k(0,n)
u.d=u.a.F("String")
u=l.k(0,r)
t=u.a.F(r)
u.d=t
t.ao(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
t=l.k(0,q)
t.d=t.a.F(q)
t=l.k(0,m)
t.d=t.a.F(m)
return l}}
V.hl.prototype={
dv:function(a,b){H.m(b,"$ib",[P.e],"$ab")
this.sbu(H.c([],[[P.b,W.ar]]))
this.B(C.a.l(b,"\n"),"#111")},
bf:function(a){},
aZ:function(){return}}
V.hB.prototype={
e7:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a3(q,"scroll",H.l(new V.hD(o),{func:1,ret:-1,args:[r]}),!1,r)},
cT:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.e],"$ab")
this.h_()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dK(C.a.i_(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
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
if(H.n_(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.E(m[1])
l.textContent=H.E(m[0])
t.appendChild(l)}else{k=P.kZ(C.w,n,C.l,!1)
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
dQ:function(a){var u,t,s,r=new V.fd("dart")
r.aT("dart")
u=new V.fz("glsl")
u.aT("glsl")
t=new V.fA("html")
t.aT("html")
s=C.a.hV(H.c([r,u,t],[V.bi]),new V.hE(a))
if(s!=null)return s
r=new V.hl("plain")
r.aT("plain")
return r},
cR:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.e],"$ab")
u=H.c([],[P.C])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.k5(r).bk(r,"+")){C.a.P(b0,s,C.i.aR(r,1))
C.a.h(u,1)
t=!0}else if(C.i.bk(r,"-")){C.a.P(b0,s,C.i.aR(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dQ(a8)
q.dv(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.kZ(C.w,a7,C.l,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kh()
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
if(s>=u.length)return H.h(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.A)(r),++a0)C.T.hD(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.A)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gN(r);a3.u();)c.appendChild(a3.gC(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
h_:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.i1()
u.c=u.k(0,q)
t=u.k(0,q).l(0,p)
s=V.v(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).l(0,p)
s=new V.ae()
r=[V.aj]
s.sY(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,p).l(0,"BoldEnd")
s=V.v(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,o)
s=V.v(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).l(0,o)
s=new V.ae()
s.sY(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,o).l(0,n)
s=V.v(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,m)
s=V.v(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).l(0,m)
s=new V.ae()
s.sY(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,m).l(0,"CodeEnd")
s=V.v(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,l)
s=V.v(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).l(0,k)
s=V.v(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,l).l(0,j)
t=V.v(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).l(0,l)
t=new V.ae()
t.sY(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,k).l(0,j)
t=V.v(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).l(0,k)
t=new V.ae()
t.sY(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).l(0,i).a,new V.b_())
s=u.k(0,i).l(0,i)
t=new V.ae()
t.sY(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.F(p)
s=u.k(0,n)
s.d=s.a.F(o)
s=u.k(0,"CodeEnd")
s.d=s.a.F(m)
s=u.k(0,j)
s.d=s.a.F("Link")
s=u.k(0,i)
s.d=s.a.F(i)
this.b=u}}
V.hD.prototype={
$1:function(a){P.kL(C.m,new V.hC(this.a))},
$S:24}
V.hC.prototype={
$0:function(){var u=C.j.a7(document.documentElement.scrollTop),t=this.a.style,s=H.k(-0.01*u)+"px"
t.top=s},
$S:1}
V.hE.prototype={
$1:function(a){return H.n(a,"$ibi").a===this.a},
$S:39}
F.jy.prototype={
$1:function(a){var u,t,s,r
H.n(a,"$iD")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.cR("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cR("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.dY=u.i
u=J.dk.prototype
u.e_=u.i
u=P.i.prototype
u.dZ=u.bi
u=W.Q.prototype
u.bl=u.a1
u=W.et.prototype
u.e1=u.ad
u=O.cg.prototype
u.cg=u.ab
u=O.aM.prototype
u.bm=u.ab
u=V.dr.prototype
u.e0=u.am
u.cf=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"my","mg",10)
u(P,"mz","mh",10)
u(P,"mA","mi",10)
t(P,"l7","mw",2)
s(W,"mK",4,null,["$4"],["mk"],19,0)
s(W,"mL",4,null,["$4"],["ml"],19,0)
var m
r(m=E.ad.prototype,"gdt",0,0,null,["$1","$0"],["du","i9"],0,0)
r(m,"gdr",0,0,null,["$1","$0"],["ds","i8"],0,0)
r(m,"gdn",0,0,null,["$1","$0"],["dq","i5"],0,0)
q(m,"gi3","i4",6)
q(m,"gi6","i7",6)
r(m=E.dS.prototype,"gcj",0,0,null,["$1","$0"],["cl","ck"],0,0)
p(m,"gip","dD",2)
o(m=X.dY.prototype,"gf9","fa",8)
o(m,"geY","eZ",8)
o(m,"gf3","f4",3)
o(m,"gfd","fe",20)
o(m,"gfb","fc",20)
o(m,"gfh","fi",3)
o(m,"gfl","fm",3)
o(m,"gf7","f8",3)
o(m,"gfj","fk",3)
o(m,"gf5","f6",3)
o(m,"gfn","fo",34)
o(m,"gfp","fq",8)
o(m,"gfD","fE",9)
o(m,"gfz","fA",9)
o(m,"gfB","fC",9)
r(D.bl.prototype,"gea",0,0,null,["$1","$0"],["ag","eb"],0,0)
r(m=D.dm.prototype,"gcG",0,0,null,["$1","$0"],["cH","ff"],0,0)
o(m,"gft","fu",35)
q(m,"geS","eT",21)
q(m,"gfv","fw",21)
n(V.b8.prototype,"gm","c_",22)
n(V.S.prototype,"gm","c_",22)
r(m=M.dc.prototype,"ga9",0,0,null,["$1","$0"],["ah","ed"],0,0)
q(m,"gf_","f0",6)
q(m,"gf1","f2",6)
r(m=O.ds.prototype,"gaU",0,0,null,["$1","$0"],["S","bn"],0,0)
r(m,"gfM",0,0,null,["$1","$0"],["cL","fN"],0,0)
q(m,"geU","eV",23)
q(m,"geW","eX",23)
r(O.cg.prototype,"gaU",0,0,null,["$1","$0"],["S","bn"],0,0)
r(X.dz.prototype,"gcm",0,0,null,["$1","$0"],["ar","en"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.jM,J.a,J.aq,P.eg,P.i,H.cf,P.aI,H.bG,H.dX,H.i6,P.bn,H.c5,H.ey,P.a4,H.fM,H.fN,H.fH,P.eE,P.aZ,P.av,P.e_,P.hM,P.cs,P.hN,P.aU,P.a8,P.jk,P.j8,P.bR,P.ef,P.w,P.c6,P.fD,P.ji,P.P,P.bk,P.a6,P.bm,P.hj,P.dK,P.e7,P.fx,P.bo,P.b,P.M,P.L,P.af,P.e,P.b6,W.f9,W.bu,W.y,W.dx,W.et,W.jd,W.df,W.ak,W.j7,W.eK,P.eJ,P.j2,O.a_,O.ch,E.f3,E.ad,E.hp,E.dS,Z.dZ,Z.iD,Z.d5,Z.bq,Z.aX,D.f6,D.bF,D.D,X.d6,X.dl,X.fJ,X.fP,X.ci,X.h6,X.i2,X.dY,D.bl,D.a0,D.dA,D.dJ,D.dP,D.dQ,D.dR,V.a1,V.bD,V.fn,V.dt,V.a9,V.al,V.ay,V.dC,V.dF,V.b8,V.S,M.dc,A.d1,A.eZ,A.fY,A.cx,A.cB,A.cz,A.cC,A.cA,A.cD,A.bE,A.dU,A.ih,F.a2,F.fq,F.b2,F.fL,F.bs,F.dI,F.hy,F.hz,F.hA,F.ao,F.ir,F.is,F.iv,F.ix,F.iy,F.iz,O.bQ,O.cg,T.hX,V.b_,V.aj,V.dr,V.ho,V.hx,V.cq,V.dT,V.cv,V.i0,X.d7,X.dM,X.dz,V.bi,V.hB])
s(J.a,[J.fG,J.di,J.dk,J.aJ,J.dj,J.bI,H.ck,W.d,W.eW,W.d2,W.c4,W.aE,W.aF,W.R,W.e1,W.fe,W.ff,W.e3,W.db,W.e5,W.fh,W.o,W.e8,W.aH,W.fB,W.eb,W.bp,W.dq,W.h0,W.eh,W.ei,W.aN,W.ej,W.em,W.aO,W.eq,W.es,W.aR,W.eu,W.aS,W.ez,W.az,W.eC,W.i_,W.aV,W.eF,W.i4,W.im,W.eL,W.eN,W.eP,W.eR,W.eT,P.b1,P.ed,P.b5,P.eo,P.hn,P.eA,P.b7,P.eH,P.f_,P.e0,P.d3,P.dD,P.bO,P.dH,P.dN,P.dV,P.ew])
s(J.dk,[J.hk,J.cE,J.br])
t(J.jL,J.aJ)
s(J.dj,[J.dh,J.dg])
t(P.fO,P.eg)
s(P.fO,[H.dW,W.iL,W.ac,P.ft])
t(H.q,H.dW)
s(P.i,[H.fk,H.fS,H.cG])
s(H.fk,[H.bJ,H.dn])
s(P.aI,[H.fT,H.iE])
t(H.fU,H.bJ)
s(P.bn,[H.hg,H.fI,H.ik,H.i8,H.f5,H.hv,P.eY,P.dy,P.ax,P.il,P.ij,P.cr,P.f7,P.fc])
s(H.c5,[H.jC,H.hT,H.ju,H.jv,H.jw,P.iH,P.iG,P.iI,P.iJ,P.jh,P.jg,P.iR,P.iV,P.iS,P.iT,P.iU,P.iY,P.iZ,P.iX,P.iW,P.hO,P.hP,P.jo,P.j5,P.j4,P.j6,P.fR,P.fi,P.fj,W.fl,W.h2,W.h4,W.hu,W.hL,W.iQ,W.he,W.hd,W.j9,W.ja,W.jf,W.jj,P.jq,P.fu,P.fv,P.f1,E.hq,E.hr,E.hs,E.hZ,D.fo,D.fp,F.jl,F.iB,F.iA,F.it,F.iu,T.hY,V.jB,V.hD,V.hC,V.hE,F.jy])
s(H.hT,[H.hJ,H.c2])
t(H.iF,P.eY)
t(P.fQ,P.a4)
s(P.fQ,[H.aK,W.iK])
t(H.du,H.ck)
s(H.du,[H.cK,H.cM])
t(H.cL,H.cK)
t(H.cj,H.cL)
t(H.cN,H.cM)
t(H.dv,H.cN)
s(H.dv,[H.h7,H.h8,H.h9,H.ha,H.hb,H.dw,H.hc])
t(P.j3,P.jk)
t(P.j1,P.j8)
t(P.c7,P.hN)
t(P.fm,P.c6)
s(P.c7,[P.fC,P.ip])
t(P.io,P.fm)
s(P.a6,[P.z,P.C])
s(P.ax,[P.bN,P.fE])
s(W.d,[W.B,W.fs,W.aQ,W.cO,W.aT,W.aA,W.cQ,W.iC,W.cH,P.f2,P.bB])
s(W.B,[W.Q,W.bh,W.cI])
s(W.Q,[W.u,P.p])
s(W.u,[W.d0,W.eX,W.c1,W.bg,W.bC,W.ar,W.fw,W.cc,W.hw,W.bP,W.dL,W.hR,W.hS,W.ct])
s(W.aE,[W.c8,W.fa,W.fb])
t(W.f8,W.aF)
t(W.c9,W.e1)
t(W.e4,W.e3)
t(W.da,W.e4)
t(W.e6,W.e5)
t(W.fg,W.e6)
t(W.aG,W.d2)
t(W.e9,W.e8)
t(W.fr,W.e9)
t(W.ec,W.eb)
t(W.bH,W.ec)
t(W.bt,W.o)
s(W.bt,[W.aL,W.a5,W.aB])
t(W.h1,W.eh)
t(W.h3,W.ei)
t(W.ek,W.ej)
t(W.h5,W.ek)
t(W.en,W.em)
t(W.cl,W.en)
t(W.er,W.eq)
t(W.hm,W.er)
t(W.ht,W.es)
t(W.cP,W.cO)
t(W.hG,W.cP)
t(W.ev,W.eu)
t(W.hH,W.ev)
t(W.hK,W.ez)
t(W.eD,W.eC)
t(W.hU,W.eD)
t(W.cR,W.cQ)
t(W.hV,W.cR)
t(W.eG,W.eF)
t(W.i3,W.eG)
t(W.aY,W.a5)
t(W.eM,W.eL)
t(W.iM,W.eM)
t(W.e2,W.db)
t(W.eO,W.eN)
t(W.j_,W.eO)
t(W.eQ,W.eP)
t(W.el,W.eQ)
t(W.eS,W.eR)
t(W.jb,W.eS)
t(W.eU,W.eT)
t(W.jc,W.eU)
t(W.iN,W.iK)
t(W.iO,P.hM)
t(W.jU,W.iO)
t(W.iP,P.cs)
t(W.je,W.et)
t(P.at,P.j2)
t(P.ee,P.ed)
t(P.fK,P.ee)
t(P.ep,P.eo)
t(P.hh,P.ep)
t(P.co,P.p)
t(P.eB,P.eA)
t(P.hQ,P.eB)
t(P.eI,P.eH)
t(P.i5,P.eI)
t(P.f0,P.e0)
t(P.hi,P.bB)
t(P.ex,P.ew)
t(P.hI,P.ex)
s(E.f3,[Z.d4,A.cp,T.cu])
s(D.D,[D.cd,D.ce,D.T])
t(D.dm,O.a_)
t(U.bK,D.f6)
s(U.bK,[U.d8,U.dG])
t(A.fV,A.cp)
s(A.dU,[A.I,A.ic,A.id,A.ig,A.ia,A.Y,A.ib,A.H,A.ie,A.ii,A.cy,A.am,A.aa,A.ab])
t(F.hF,F.fq)
t(F.i9,F.fL)
t(F.iw,F.ix)
t(F.hf,F.iy)
t(O.ds,O.bQ)
s(O.cg,[O.fW,O.fX,O.aM])
s(O.aM,[O.fZ,O.h_])
t(T.dO,T.cu)
t(T.hW,T.dO)
s(V.dr,[V.ae,V.cw])
t(X.fy,X.dM)
s(V.bi,[V.fd,V.fz,V.fA,V.hl])
u(H.dW,H.dX)
u(H.cK,P.w)
u(H.cL,H.bG)
u(H.cM,P.w)
u(H.cN,H.bG)
u(P.eg,P.w)
u(W.e1,W.f9)
u(W.e3,P.w)
u(W.e4,W.y)
u(W.e5,P.w)
u(W.e6,W.y)
u(W.e8,P.w)
u(W.e9,W.y)
u(W.eb,P.w)
u(W.ec,W.y)
u(W.eh,P.a4)
u(W.ei,P.a4)
u(W.ej,P.w)
u(W.ek,W.y)
u(W.em,P.w)
u(W.en,W.y)
u(W.eq,P.w)
u(W.er,W.y)
u(W.es,P.a4)
u(W.cO,P.w)
u(W.cP,W.y)
u(W.eu,P.w)
u(W.ev,W.y)
u(W.ez,P.a4)
u(W.eC,P.w)
u(W.eD,W.y)
u(W.cQ,P.w)
u(W.cR,W.y)
u(W.eF,P.w)
u(W.eG,W.y)
u(W.eL,P.w)
u(W.eM,W.y)
u(W.eN,P.w)
u(W.eO,W.y)
u(W.eP,P.w)
u(W.eQ,W.y)
u(W.eR,P.w)
u(W.eS,W.y)
u(W.eT,P.w)
u(W.eU,W.y)
u(P.ed,P.w)
u(P.ee,W.y)
u(P.eo,P.w)
u(P.ep,W.y)
u(P.eA,P.w)
u(P.eB,W.y)
u(P.eH,P.w)
u(P.eI,W.y)
u(P.e0,P.a4)
u(P.ew,P.w)
u(P.ex,W.y)})();(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bg.prototype
C.v=W.bC.prototype
C.J=W.ar.prototype
C.M=J.a.prototype
C.a=J.aJ.prototype
C.N=J.dg.prototype
C.h=J.dh.prototype
C.n=J.di.prototype
C.j=J.dj.prototype
C.i=J.bI.prototype
C.O=J.br.prototype
C.S=W.cl.prototype
C.x=J.hk.prototype
C.b=P.bO.prototype
C.T=W.bP.prototype
C.y=W.dL.prototype
C.q=J.cE.prototype
C.z=W.aY.prototype
C.A=W.cH.prototype
C.t=function getTagFallback(o) {
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
C.u=function(hooks) { return hooks; }

C.H=new P.hj()
C.l=new P.io()
C.I=new P.ip()
C.k=new P.j3()
C.c=new A.bE(0,"ColorSourceType.None")
C.f=new A.bE(1,"ColorSourceType.Solid")
C.d=new A.bE(2,"ColorSourceType.Texture2D")
C.e=new A.bE(3,"ColorSourceType.TextureCube")
C.m=new P.bm(0)
C.K=new P.bm(5e6)
C.L=new P.fD("element",!0,!1,!1,!1)
C.P=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.Q=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.R=H.c(u([]),[P.e])
C.w=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.o=H.c(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.p=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])})()
var v={mangledGlobalNames:{C:"int",z:"double",a6:"num",e:"String",P:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.D]},{func:1,ret:P.L},{func:1,ret:-1},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.L,args:[D.D]},{func:1,ret:-1,args:[P.C,[P.i,E.ad]]},{func:1,ret:P.L,args:[F.a2]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aB]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.e,args:[P.C]},{func:1,ret:P.P,args:[W.B]},{func:1,args:[,]},{func:1,ret:P.P,args:[W.ak]},{func:1,ret:P.P,args:[P.e]},{func:1,ret:P.L,args:[,]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:P.P,args:[W.Q,P.e,P.e,W.bu]},{func:1,ret:-1,args:[W.aL]},{func:1,ret:-1,args:[P.C,[P.i,D.a0]]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.C,[P.i,V.a9]]},{func:1,ret:P.L,args:[W.o]},{func:1,ret:[P.av,,],args:[,]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.B,W.B]},{func:1,ret:W.Q,args:[W.B]},{func:1,args:[P.e]},{func:1,args:[,P.e]},{func:1,ret:P.L,args:[P.a6]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:P.P,args:[[P.i,D.a0]]},{func:1,ret:P.L,args:[F.ao,P.z,P.z]},{func:1,args:[W.o]},{func:1,ret:P.L,args:[P.aU]},{func:1,ret:P.P,args:[V.bi]},{func:1,ret:P.L,args:[,],opt:[P.af]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aD=0
$.c3=null
$.ki=null
$.jW=!1
$.la=null
$.l5=null
$.lf=null
$.jr=null
$.jx=null
$.k7=null
$.bS=null
$.cU=null
$.cV=null
$.jX=!1
$.X=C.k
$.ag=[]
$.b0=null
$.jI=null
$.ko=null
$.kn=null
$.ea=P.kq(P.e,P.bo)
$.kv=null
$.kz=null
$.cm=null
$.kF=null
$.kP=null
$.kS=null
$.kR=null
$.iq=null
$.kQ=null
$.ky=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n7","lj",function(){return H.l9("_$dart_dartClosure")})
u($,"n8","ke",function(){return H.l9("_$dart_js")})
u($,"nd","lk",function(){return H.aW(H.i7({
toString:function(){return"$receiver$"}}))})
u($,"ne","ll",function(){return H.aW(H.i7({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nf","lm",function(){return H.aW(H.i7(null))})
u($,"ng","ln",function(){return H.aW(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nj","lq",function(){return H.aW(H.i7(void 0))})
u($,"nk","lr",function(){return H.aW(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ni","lp",function(){return H.aW(H.kN(null))})
u($,"nh","lo",function(){return H.aW(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nm","lt",function(){return H.aW(H.kN(void 0))})
u($,"nl","ls",function(){return H.aW(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nD","kf",function(){return P.mf()})
u($,"nF","ly",function(){return P.m6("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nE","lx",function(){return P.kr(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"nw","lw",function(){return Z.au(0)})
u($,"nq","lu",function(){return Z.au(511)})
u($,"ny","bd",function(){return Z.au(1)})
u($,"nx","bc",function(){return Z.au(2)})
u($,"ns","bb",function(){return Z.au(4)})
u($,"nz","be",function(){return Z.au(8)})
u($,"nA","bf",function(){return Z.au(16)})
u($,"nt","cY",function(){return Z.au(32)})
u($,"nu","cZ",function(){return Z.au(64)})
u($,"nv","lv",function(){return Z.au(96)})
u($,"nB","c0",function(){return Z.au(128)})
u($,"nr","ba",function(){return Z.au(256)})
u($,"n6","li",function(){return new V.fn(1e-9)})
u($,"n5","N",function(){return $.li()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.ck,ArrayBufferView:H.ck,Float32Array:H.cj,Float64Array:H.cj,Int16Array:H.h7,Int32Array:H.h8,Int8Array:H.h9,Uint16Array:H.ha,Uint32Array:H.hb,Uint8ClampedArray:H.dw,CanvasPixelArray:H.dw,Uint8Array:H.hc,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.eW,HTMLAnchorElement:W.d0,HTMLAreaElement:W.eX,HTMLBaseElement:W.c1,Blob:W.d2,HTMLBodyElement:W.bg,HTMLCanvasElement:W.bC,CanvasRenderingContext2D:W.c4,CDATASection:W.bh,CharacterData:W.bh,Comment:W.bh,ProcessingInstruction:W.bh,Text:W.bh,CSSNumericValue:W.c8,CSSUnitValue:W.c8,CSSPerspective:W.f8,CSSCharsetRule:W.R,CSSConditionRule:W.R,CSSFontFaceRule:W.R,CSSGroupingRule:W.R,CSSImportRule:W.R,CSSKeyframeRule:W.R,MozCSSKeyframeRule:W.R,WebKitCSSKeyframeRule:W.R,CSSKeyframesRule:W.R,MozCSSKeyframesRule:W.R,WebKitCSSKeyframesRule:W.R,CSSMediaRule:W.R,CSSNamespaceRule:W.R,CSSPageRule:W.R,CSSRule:W.R,CSSStyleRule:W.R,CSSSupportsRule:W.R,CSSViewportRule:W.R,CSSStyleDeclaration:W.c9,MSStyleCSSProperties:W.c9,CSS2Properties:W.c9,CSSImageValue:W.aE,CSSKeywordValue:W.aE,CSSPositionValue:W.aE,CSSResourceValue:W.aE,CSSURLImageValue:W.aE,CSSStyleValue:W.aE,CSSMatrixComponent:W.aF,CSSRotation:W.aF,CSSScale:W.aF,CSSSkew:W.aF,CSSTranslation:W.aF,CSSTransformComponent:W.aF,CSSTransformValue:W.fa,CSSUnparsedValue:W.fb,DataTransferItemList:W.fe,HTMLDivElement:W.ar,DOMException:W.ff,ClientRectList:W.da,DOMRectList:W.da,DOMRectReadOnly:W.db,DOMStringList:W.fg,DOMTokenList:W.fh,Element:W.Q,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aG,FileList:W.fr,FileWriter:W.fs,HTMLFormElement:W.fw,Gamepad:W.aH,History:W.fB,HTMLCollection:W.bH,HTMLFormControlsCollection:W.bH,HTMLOptionsCollection:W.bH,ImageData:W.bp,HTMLImageElement:W.cc,KeyboardEvent:W.aL,Location:W.dq,MediaList:W.h0,MIDIInputMap:W.h1,MIDIOutputMap:W.h3,MimeType:W.aN,MimeTypeArray:W.h5,PointerEvent:W.a5,MouseEvent:W.a5,DragEvent:W.a5,Document:W.B,DocumentFragment:W.B,HTMLDocument:W.B,ShadowRoot:W.B,XMLDocument:W.B,DocumentType:W.B,Node:W.B,NodeList:W.cl,RadioNodeList:W.cl,Plugin:W.aO,PluginArray:W.hm,RTCStatsReport:W.ht,HTMLSelectElement:W.hw,SourceBuffer:W.aQ,SourceBufferList:W.hG,SpeechGrammar:W.aR,SpeechGrammarList:W.hH,SpeechRecognitionResult:W.aS,Storage:W.hK,CSSStyleSheet:W.az,StyleSheet:W.az,HTMLTableCellElement:W.bP,HTMLTableDataCellElement:W.bP,HTMLTableHeaderCellElement:W.bP,HTMLTableElement:W.dL,HTMLTableRowElement:W.hR,HTMLTableSectionElement:W.hS,HTMLTemplateElement:W.ct,TextTrack:W.aT,TextTrackCue:W.aA,VTTCue:W.aA,TextTrackCueList:W.hU,TextTrackList:W.hV,TimeRanges:W.i_,Touch:W.aV,TouchEvent:W.aB,TouchList:W.i3,TrackDefaultList:W.i4,CompositionEvent:W.bt,FocusEvent:W.bt,TextEvent:W.bt,UIEvent:W.bt,URL:W.im,VideoTrackList:W.iC,WheelEvent:W.aY,Window:W.cH,DOMWindow:W.cH,Attr:W.cI,CSSRuleList:W.iM,ClientRect:W.e2,DOMRect:W.e2,GamepadList:W.j_,NamedNodeMap:W.el,MozNamedAttrMap:W.el,SpeechRecognitionResultList:W.jb,StyleSheetList:W.jc,SVGLength:P.b1,SVGLengthList:P.fK,SVGNumber:P.b5,SVGNumberList:P.hh,SVGPointList:P.hn,SVGScriptElement:P.co,SVGStringList:P.hQ,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.b7,SVGTransformList:P.i5,AudioBuffer:P.f_,AudioParamMap:P.f0,AudioTrackList:P.f2,AudioContext:P.bB,webkitAudioContext:P.bB,BaseAudioContext:P.bB,OfflineAudioContext:P.hi,WebGLBuffer:P.d3,WebGLProgram:P.dD,WebGL2RenderingContext:P.bO,WebGLShader:P.dH,WebGLTexture:P.dN,WebGLUniformLocation:P.dV,SQLResultSetRowList:P.hI})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.du.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.dv.$nativeSuperclassTag="ArrayBufferView"
W.cO.$nativeSuperclassTag="EventTarget"
W.cP.$nativeSuperclassTag="EventTarget"
W.cQ.$nativeSuperclassTag="EventTarget"
W.cR.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.lc,[])
else F.lc([])})})()
//# sourceMappingURL=test.dart.js.map
