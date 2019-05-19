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
a[c]=function(){a[c]=function(){H.nc(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kc"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kc"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kc(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jW:function jW(){},
jT:function(){return new P.cC("No element")},
m0:function(){return new P.cC("Too many elements")},
q:function q(a){this.a=a},
fy:function fy(){},
bU:function bU(){},
cq:function cq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h3:function h3(a,b,c){this.a=a
this.b=b
this.$ti=c},
h4:function h4(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
h5:function h5(a,b,c){this.a=a
this.b=b
this.$ti=c},
cR:function cR(a,b,c){this.a=a
this.b=b
this.$ti=c},
iK:function iK(a,b,c){this.a=a
this.b=b
this.$ti=c},
bR:function bR(){},
e4:function e4(){},
e3:function e3(){},
c9:function(a){var u,t=H.H(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
mT:function(a){return v.types[H.ad(a)]},
n_:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iI},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.i(H.c4(a))
return u},
cy:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bX:function(a){return H.m7(a)+H.k8(H.bI(a),0,null)},
m7:function(a){var u,t,s,r,q,p,o,n=J.X(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$icQ){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c9(t.length>1&&C.i.aJ(t,0)===36?C.i.b9(t,1):t)},
kM:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mf:function(a){var u,t,s,r=H.c([],[P.D])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.B)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.c4(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.h.bf(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.i(H.c4(s))}return H.kM(r)},
kN:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.c4(s))
if(s<0)throw H.i(H.c4(s))
if(s>65535)return H.mf(a)}return H.kM(a)},
jY:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bf(u,10))>>>0,56320|u&1023)}throw H.i(P.aZ(a,0,1114111,null,null))},
bW:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
me:function(a){var u=H.bW(a).getFullYear()+0
return u},
mc:function(a){var u=H.bW(a).getMonth()+1
return u},
m8:function(a){var u=H.bW(a).getDate()+0
return u},
m9:function(a){var u=H.bW(a).getHours()+0
return u},
mb:function(a){var u=H.bW(a).getMinutes()+0
return u},
md:function(a){var u=H.bW(a).getSeconds()+0
return u},
ma:function(a){var u=H.bW(a).getMilliseconds()+0
return u},
F:function(a){throw H.i(H.c4(a))},
l:function(a,b){if(a==null)J.bL(a)
throw H.i(H.d6(a,b))},
d6:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,s,null)
u=H.ad(J.bL(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.hz(b,s)},
mP:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bY(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bY(a,c,!0,b,"end",u)
return new P.aE(!0,b,"end",null)},
c4:function(a){return new P.aE(!0,a,null,null)},
mL:function(a){if(typeof a!=="number")throw H.i(H.c4(a))
return a},
i:function(a){var u
if(a==null)a=new P.dJ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lr})
u.name=""}else u.toString=H.lr
return u},
lr:function(){return J.ar(this.dartException)},
v:function(a){throw H.i(a)},
B:function(a){throw H.i(P.bs(a))},
b5:function(a){var u,t,s,r,q,p
a=H.lq(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ih(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ii:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kY:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kG:function(a,b){return new H.hq(a,b==null?null:b.method)},
jX:function(a,b){var u=b==null,t=u?null:b.method
return new H.fV(a,t,u?null:b.receiver)},
ay:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jJ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.h.bf(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jX(H.k(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kG(H.k(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lu()
q=$.lv()
p=$.lw()
o=$.lx()
n=$.lA()
m=$.lB()
l=$.lz()
$.ly()
k=$.lD()
j=$.lC()
i=r.af(u)
if(i!=null)return f.$1(H.jX(H.H(u),i))
else{i=q.af(u)
if(i!=null){i.method="call"
return f.$1(H.jX(H.H(u),i))}else{i=p.af(u)
if(i==null){i=o.af(u)
if(i==null){i=n.af(u)
if(i==null){i=m.af(u)
if(i==null){i=l.af(u)
if(i==null){i=o.af(u)
if(i==null){i=k.af(u)
if(i==null){i=j.af(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kG(H.H(u),i))}}return f.$1(new H.iu(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dT()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aE(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dT()
return a},
c7:function(a){var u
if(a==null)return new H.eL(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eL(a)},
mS:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.W(0,a[u],a[t])}return b},
mZ:function(a,b,c,d,e,f){H.j(a,"$ibw")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.r("Unsupported number of arguments for wrapped closure"))},
c5:function(a,b){var u
H.ad(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mZ)
a.$identity=u
return u},
lU:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hU().constructor.prototype):Object.create(new H.cc(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aL
if(typeof t!=="number")return t.F()
$.aL=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kt(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.mT,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.ks:H.jM
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.i("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kt(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
lR:function(a,b,c,d){var u=H.jM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kt:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lT(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lR(t,!r,u,b)
if(t===0){r=$.aL
if(typeof r!=="number")return r.F()
$.aL=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cd
return new Function(r+H.k(q==null?$.cd=H.fh("self"):q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aL
if(typeof r!=="number")return r.F()
$.aL=r+1
o+=r
r="return function("+o+"){return this."
q=$.cd
return new Function(r+H.k(q==null?$.cd=H.fh("self"):q)+"."+H.k(u)+"("+o+");}")()},
lS:function(a,b,c,d){var u=H.jM,t=H.ks
switch(b?-1:a){case 0:throw H.i(H.mi("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lT:function(a,b){var u,t,s,r,q,p,o,n=$.cd
if(n==null)n=$.cd=H.fh("self")
u=$.kr
if(u==null)u=$.kr=H.fh("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lS(s,!q,t,b)
if(s===1){n="return function(){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+");"
u=$.aL
if(typeof u!=="number")return u.F()
$.aL=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+", "+o+");"
u=$.aL
if(typeof u!=="number")return u.F()
$.aL=u+1
return new Function(n+u+"}")()},
kc:function(a,b,c,d,e,f,g){return H.lU(a,b,H.ad(c),d,!!e,!!f,g)},
jM:function(a){return a.a},
ks:function(a){return a.c},
fh:function(a){var u,t,s,r=new H.cc("self","target","receiver","name"),q=J.jU(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
z:function(a){if(a==null)H.mH("boolean expression must not be null")
return a},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aJ(a,"String"))},
nS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aJ(a,"double"))},
n4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aJ(a,"num"))},
k9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aJ(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aJ(a,"int"))},
lo:function(a,b){throw H.i(H.aJ(a,H.c9(H.H(b).substring(2))))},
n6:function(a,b){throw H.i(H.lQ(a,H.c9(H.H(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.lo(a,b)},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.n6(a,b)},
ki:function(a){if(a==null)return a
if(!!J.X(a).$ib)return a
throw H.i(H.aJ(a,"List<dynamic>"))},
n0:function(a,b){var u
if(a==null)return a
u=J.X(a)
if(!!u.$ib)return a
if(u[b])return a
H.lo(a,b)},
li:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
f7:function(a,b){var u
if(typeof a=="function")return!0
u=H.li(J.X(a))
if(u==null)return!1
return H.l9(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.k5)return a
$.k5=!0
try{if(H.f7(a,b))return a
u=H.jH(b)
t=H.aJ(a,u)
throw H.i(t)}finally{$.k5=!1}},
kd:function(a,b){if(a!=null&&!H.kb(a,b))H.v(H.aJ(a,H.jH(b)))
return a},
aJ:function(a,b){return new H.ij("TypeError: "+P.dn(a)+": type '"+H.ld(a)+"' is not a subtype of type '"+b+"'")},
lQ:function(a,b){return new H.fi("CastError: "+P.dn(a)+": type '"+H.ld(a)+"' is not a subtype of type '"+b+"'")},
ld:function(a){var u,t=J.X(a)
if(!!t.$icg){u=H.li(t)
if(u!=null)return H.jH(u)
return"Closure"}return H.bX(a)},
mH:function(a){throw H.i(new H.iL(a))},
nc:function(a){throw H.i(new P.fq(H.H(a)))},
mi:function(a){return new H.hH(a)},
lj:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bI:function(a){if(a==null)return
return a.$ti},
nT:function(a,b,c){return H.c8(a["$a"+H.k(c)],H.bI(b))},
d7:function(a,b,c,d){var u
H.H(c)
H.ad(d)
u=H.c8(a["$a"+H.k(c)],H.bI(b))
return u==null?null:u[d]},
aj:function(a,b,c){var u
H.H(b)
H.ad(c)
u=H.c8(a["$a"+H.k(b)],H.bI(a))
return u==null?null:u[c]},
y:function(a,b){var u
H.ad(b)
u=H.bI(a)
return u==null?null:u[b]},
jH:function(a){return H.bH(a,null)},
bH:function(a,b){var u,t
H.m(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c9(a[0].name)+H.k8(a,1,b)
if(typeof a=="function")return H.c9(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.l(b,t)
return H.k(b[t])}if('func' in a)return H.mA(a,b)
if('futureOr' in a)return"FutureOr<"+H.bH("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mA:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
H.m(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.l(a0,n)
p=C.i.F(p,a0[n])
m=u[q]
if(m!=null&&m!==P.S)p+=" extends "+H.bH(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bH(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bH(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bH(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.mR(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.H(b[h])
j=j+i+H.bH(e[d],a0)+(" "+H.k(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
k8:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.bh("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bH(p,c)}return"<"+u.i(0)+">"},
c8:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ka:function(a,b,c,d){var u,t
H.H(b)
H.ki(c)
H.H(d)
if(a==null)return!1
u=H.bI(a)
t=J.X(a)
if(t[b]==null)return!1
return H.lg(H.c8(t[d],u),null,c,null)},
m:function(a,b,c,d){H.H(b)
H.ki(c)
H.H(d)
if(a==null)return a
if(H.ka(a,b,c,d))return a
throw H.i(H.aJ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c9(b.substring(2))+H.k8(c,0,null),v.mangledGlobalNames)))},
lg:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aD(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aD(a[t],b,c[t],d))return!1
return!0},
nQ:function(a,b,c){return a.apply(b,H.c8(J.X(b)["$a"+H.k(c)],H.bI(b)))},
ll:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="S"||a.name==="N"||a===-1||a===-2||H.ll(u)}return!1},
kb:function(a,b){var u,t
if(a==null)return b==null||b.name==="S"||b.name==="N"||b===-1||b===-2||H.ll(b)
if(b==null||b===-1||b.name==="S"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kb(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f7(a,b)}u=J.X(a).constructor
t=H.bI(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aD(u,null,b,null)},
G:function(a,b){if(a!=null&&!H.kb(a,b))throw H.i(H.aJ(a,H.jH(b)))
return a},
aD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="S"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="S"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aD(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.l9(a,b,c,d)
if('func' in a)return c.name==="bw"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aD("type" in a?a.type:l,b,s,d)
else if(H.aD(a,b,s,d))return!0
else{if(!('$i'+"cn" in t.prototype))return!1
r=t.prototype["$a"+"cn"]
q=H.c8(r,u?a.slice(1):l)
return H.aD(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lg(H.c8(m,u),b,p,d)},
l9:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aD(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aD(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aD(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aD(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.n3(h,b,g,d)},
n3:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aD(c[s],d,a[s],b))return!1}return!0},
nR:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
n1:function(a){var u,t,s,r,q=H.H($.lk.$1(a)),p=$.jy[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jE[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.H($.lf.$2(a,q))
if(q!=null){p=$.jy[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jE[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jG(u)
$.jy[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jE[q]=u
return u}if(s==="-"){r=H.jG(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ln(a,u)
if(s==="*")throw H.i(P.kZ(q))
if(v.leafTags[q]===true){r=H.jG(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ln(a,u)},
ln:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kj(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jG:function(a){return J.kj(a,!1,null,!!a.$iI)},
n2:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jG(u)
else return J.kj(u,c,null,null)},
mX:function(){if(!0===$.kh)return
$.kh=!0
H.mY()},
mY:function(){var u,t,s,r,q,p,o,n
$.jy=Object.create(null)
$.jE=Object.create(null)
H.mW()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lp.$1(q)
if(p!=null){o=H.n2(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mW:function(){var u,t,s,r,q,p,o=C.B()
o=H.c3(C.C,H.c3(C.D,H.c3(C.v,H.c3(C.v,H.c3(C.E,H.c3(C.F,H.c3(C.G(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lk=new H.jB(r)
$.lf=new H.jC(q)
$.lp=new H.jD(p)},
c3:function(a,b){return a(b)||b},
m2:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.fK("Illegal RegExp pattern ("+String(r)+")",a))},
n9:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mQ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lq:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
km:function(a,b,c){var u=H.na(a,b,c)
return u},
na:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lq(b),'g'),H.mQ(c))},
ih:function ih(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hq:function hq(a,b){this.a=a
this.b=b},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(a){this.a=a},
jJ:function jJ(a){this.a=a},
eL:function eL(a){this.a=a
this.b=null},
cg:function cg(){},
i3:function i3(){},
hU:function hU(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(a){this.a=a},
fi:function fi(a){this.a=a},
hH:function hH(a){this.a=a},
iL:function iL(a){this.a=a},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fY:function fY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dx:function dx(a,b){this.a=a
this.$ti=b},
fZ:function fZ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
jD:function jD(a){this.a=a},
fU:function fU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d3:function(a){return a},
bG:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.d6(b,a))},
mz:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.mP(a,b,c))
return b},
cv:function cv(){},
dF:function dF(){},
cu:function cu(){},
dG:function dG(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
dH:function dH(){},
hn:function hn(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
mR:function(a){return J.kz(a?Object.keys(a):[],null)},
n5:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kj:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jA:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kh==null){H.mX()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.i(P.kZ("Return interceptor for "+H.k(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kn()]
if(r!=null)return r
r=H.n1(a)
if(r!=null)return r
if(typeof a=="function")return C.O
u=Object.getPrototypeOf(a)
if(u==null)return C.x
if(u===Object.prototype)return C.x
if(typeof s=="function"){Object.defineProperty(s,$.kn(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
m1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.jL(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.aZ(a,0,4294967295,"length",null))
return J.kz(new Array(a),b)},
kz:function(a,b){return J.jU(H.c(a,[b]))},
jU:function(a){H.ki(a)
a.fixed$length=Array
return a},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dr.prototype
return J.dq.prototype}if(typeof a=="string")return J.bT.prototype
if(a==null)return J.ds.prototype
if(typeof a=="boolean")return J.fT.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.S)return a
return J.jA(a)},
ke:function(a){if(typeof a=="string")return J.bT.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.S)return a
return J.jA(a)},
jz:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.S)return a
return J.jA(a)},
kf:function(a){if(typeof a=="string")return J.bT.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.cQ.prototype
return a},
kg:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.S)return a
return J.jA(a)},
a6:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).t(a,b)},
lJ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n_(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ke(a).j(a,b)},
lK:function(a,b,c,d){return J.kg(a).ig(a,b,c,d)},
jK:function(a,b){return J.jz(a).D(a,b)},
lL:function(a,b){return J.jz(a).N(a,b)},
lM:function(a){return J.kg(a).gim(a)},
bJ:function(a){return J.X(a).gG(a)},
bK:function(a){return J.jz(a).gR(a)},
bL:function(a){return J.ke(a).gm(a)},
kp:function(a){return J.jz(a).iX(a)},
lN:function(a,b,c){return J.kf(a).ba(a,b,c)},
lO:function(a){return J.kf(a).j7(a)},
ar:function(a){return J.X(a).i(a)},
a:function a(){},
fT:function fT(){},
ds:function ds(){},
du:function du(){},
hu:function hu(){},
cQ:function cQ(){},
bB:function bB(){},
aR:function aR(a){this.$ti=a},
jV:function jV(a){this.$ti=a},
ak:function ak(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dt:function dt(){},
dr:function dr(){},
dq:function dq(){},
bT:function bT(){}},P={
mo:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mI()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c5(new P.iN(s),1)).observe(u,{childList:true})
return new P.iM(s,u,t)}else if(self.setImmediate!=null)return P.mJ()
return P.mK()},
mp:function(a){self.scheduleImmediate(H.c5(new P.iO(H.n(a,{func:1,ret:-1})),0))},
mq:function(a){self.setImmediate(H.c5(new P.iP(H.n(a,{func:1,ret:-1})),0))},
mr:function(a){P.k0(C.n,H.n(a,{func:1,ret:-1}))},
k0:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.h.a2(a.a,1000)
return P.mx(u<0?0:u,b)},
kX:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b3]})
u=C.h.a2(a.a,1000)
return P.my(u<0?0:u,b)},
mx:function(a,b){var u=new P.eR()
u.eM(a,b)
return u},
my:function(a,b){var u=new P.eR()
u.eN(a,b)
return u},
ms:function(a,b){var u,t,s
b.a=1
try{a.ed(new P.iY(b),new P.iZ(b),null)}catch(s){u=H.ay(s)
t=H.c7(s)
P.n7(new P.j_(b,u,t))}},
l4:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iaC")
if(u>=4){t=b.c6()
b.a=a.a
b.c=a.c
P.cU(b,t)}else{t=H.j(b.c,"$ib8")
b.a=2
b.c=a
a.dh(t)}},
cU:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.j(g.c,"$iae")
g=g.b
r=s.a
q=s.b
g.toString
P.ju(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cU(h.a,b)}g=h.a
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
if(m){H.j(o,"$iae")
g=g.b
r=o.a
q=o.b
g.toString
P.ju(i,i,g,r,q)
return}l=$.a0
if(l!=n)$.a0=n
else l=i
g=b.c
if(g===8)new P.j3(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.j2(u,b,o).$0()}else if((g&2)!==0)new P.j1(h,u,b).$0()
if(l!=null)$.a0=l
g=u.b
if(!!J.X(g).$icn){if(g.a>=4){k=H.j(q.c,"$ib8")
q.c=null
b=q.be(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.l4(g,q)
return}}j=b.b
k=H.j(j.c,"$ib8")
j.c=null
b=j.be(k)
g=u.a
r=u.b
if(!g){H.G(r,H.y(j,0))
j.a=4
j.c=r}else{H.j(r,"$iae")
j.a=8
j.c=r}h.a=j
g=j}},
mD:function(a,b){if(H.f7(a,{func:1,args:[P.S,P.ao]}))return H.n(a,{func:1,ret:null,args:[P.S,P.ao]})
if(H.f7(a,{func:1,args:[P.S]}))return H.n(a,{func:1,ret:null,args:[P.S]})
throw H.i(P.jL(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mC:function(){var u,t
for(;u=$.c2,u!=null;){$.d5=null
t=u.b
$.c2=t
if(t==null)$.d4=null
u.a.$0()}},
mG:function(){$.k6=!0
try{P.mC()}finally{$.d5=null
$.k6=!1
if($.c2!=null)$.ko().$1(P.lh())}},
lc:function(a){var u=new P.ec(H.n(a,{func:1,ret:-1}))
if($.c2==null){$.c2=$.d4=u
if(!$.k6)$.ko().$1(P.lh())}else $.d4=$.d4.b=u},
mF:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c2
if(u==null){P.lc(a)
$.d5=$.d4
return}t=new P.ec(a)
s=$.d5
if(s==null){t.b=u
$.c2=$.d5=t}else{t.b=s.b
$.d5=s.b=t
if(t.b==null)$.d4=t}},
n7:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a0
if(C.k===u){P.jw(t,t,C.k,a)
return}u.toString
P.jw(t,t,u,H.n(u.cd(a),s))},
kW:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a0
if(u===C.k){u.toString
return P.k0(a,b)}return P.k0(a,H.n(u.cd(b),t))},
mm:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b3]}
H.n(b,s)
u=$.a0
if(u===C.k){u.toString
return P.kX(a,b)}t=u.du(b,P.b3)
$.a0.toString
return P.kX(a,H.n(t,s))},
ju:function(a,b,c,d,e){var u={}
u.a=d
P.mF(new P.jv(u,e))},
la:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a0
if(t===c)return d.$0()
$.a0=c
u=t
try{t=d.$0()
return t}finally{$.a0=u}},
lb:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.G(e,g)
t=$.a0
if(t===c)return d.$1(e)
$.a0=c
u=t
try{t=d.$1(e)
return t}finally{$.a0=u}},
mE:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.G(e,h)
H.G(f,i)
t=$.a0
if(t===c)return d.$2(e,f)
$.a0=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a0=u}},
jw:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cd(d):c.io(d,-1)
P.lc(d)},
iN:function iN(a){this.a=a},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
eR:function eR(){this.c=0},
jo:function jo(a,b){this.a=a
this.b=b},
jn:function jn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b8:function b8(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aC:function aC(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iX:function iX(a,b){this.a=a
this.b=b},
j0:function j0(a,b){this.a=a
this.b=b},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j4:function j4(a){this.a=a},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a){this.a=a
this.b=null},
hX:function hX(){},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
cD:function cD(){},
hY:function hY(){},
b3:function b3(){},
ae:function ae(a,b){this.a=a
this.b=b},
jr:function jr(){},
jv:function jv(a,b){this.a=a
this.b=b},
ja:function ja(){},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a,b){this.a=a
this.b=b},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
kA:function(a,b){return new H.aS([a,b])},
m4:function(a){return H.mS(a,new H.aS([null,null]))},
dy:function(a){return new P.j8([a])},
k4:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mw:function(a,b,c){var u=new P.es(a,b,[c])
u.c=a.e
return u},
m_:function(a,b,c){var u,t
if(P.k7(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.f])
C.a.h($.aq,a)
try{P.mB(a,u)}finally{if(0>=$.aq.length)return H.l($.aq,-1)
$.aq.pop()}t=P.kU(b,H.n0(u,"$id"),", ")+c
return t.charCodeAt(0)==0?t:t},
jS:function(a,b,c){var u,t
if(P.k7(a))return b+"..."+c
u=new P.bh(b)
C.a.h($.aq,a)
try{t=u
t.a=P.kU(t.a,a,", ")}finally{if(0>=$.aq.length)return H.l($.aq,-1)
$.aq.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
k7:function(a){var u,t
for(u=$.aq.length,t=0;t<u;++t)if(a===$.aq[t])return!0
return!1},
mB:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.f],"$ab")
u=a.gR(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.u())return
r=H.k(u.gE(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.u()){if(s<=5)return
if(0>=b.length)return H.l(b,-1)
q=b.pop()
if(0>=b.length)return H.l(b,-1)
p=b.pop()}else{o=u.gE(u);++s
if(!u.u()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.l(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gE(u);++s
for(;u.u();o=n,n=m){m=u.gE(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.k(o)
q=H.k(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kB:function(a,b){var u,t,s=P.dy(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.B)(a),++t)s.h(0,H.G(a[t],b))
return s},
kD:function(a){var u,t={}
if(P.k7(a))return"{...}"
u=new P.bh("")
try{C.a.h($.aq,a)
u.a+="{"
t.a=!0
J.lL(a,new P.h2(t,u))
u.a+="}"}finally{if(0>=$.aq.length)return H.l($.aq,-1)
$.aq.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j8:function j8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c1:function c1(a){this.a=a
this.c=this.b=null},
es:function es(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h_:function h_(){},
w:function w(){},
h1:function h1(){},
h2:function h2(a,b){this.a=a
this.b=b},
a9:function a9(){},
jf:function jf(){},
et:function et(){},
ch:function ch(){},
ci:function ci(){},
fA:function fA(){},
fQ:function fQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fP:function fP(a){this.a=a},
ix:function ix(){},
iy:function iy(){},
jp:function jp(a){this.b=0
this.c=a},
lZ:function(a){if(a instanceof H.cg)return a.i(0)
return"Instance of '"+H.bX(a)+"'"},
m5:function(a,b,c){var u,t
H.G(b,c)
u=J.m1(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.W(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
kC:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bK(a);u.u();)C.a.h(s,H.G(u.gE(u),c))
if(b)return s
return H.m(J.jU(s),"$ib",t,"$ab")},
k_:function(a){var u,t,s=P.D
H.m(a,"$id",[s],"$ad")
if(a.constructor===Array){H.m(a,"$iaR",[s],"$aaR")
u=a.length
t=P.kP(0,null,u)
return H.kN(t<u?C.a.eo(a,0,t):a)}return P.mk(a,0,null)},
mk:function(a,b,c){var u,t,s
H.m(a,"$id",[P.D],"$ad")
u=J.bK(a)
for(t=0;t<b;++t)if(!u.u())throw H.i(P.aZ(b,0,t,null,null))
s=[]
for(;u.u();)s.push(u.gE(u))
return H.kN(s)},
mg:function(a){return new H.fU(a,H.m2(a,!1,!0,!1))},
kU:function(a,b,c){var u=J.bK(b)
if(!u.u())return a
if(c.length===0){do a+=H.k(u.gE(u))
while(u.u())}else{a+=H.k(u.gE(u))
for(;u.u();)a=a+c+H.k(u.gE(u))}return a},
l8:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.D],"$ab")
if(c===C.m){u=$.lI().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.iq(H.G(b,H.aj(c,"ch",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.l(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jY(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lV:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lW:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dj:function(a){if(a>=10)return""+a
return"0"+a},
kv:function(a,b){return new P.bu(1e6*b+1000*a)},
dn:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lZ(a)},
lP:function(a){return new P.aE(!1,null,null,a)},
jL:function(a,b,c){return new P.aE(!0,a,b,c)},
hz:function(a,b){return new P.bY(null,null,!0,a,b,"Value not in range")},
aZ:function(a,b,c,d,e){return new P.bY(b,c,!0,a,d,"Invalid value")},
kP:function(a,b,c){if(0>a||a>c)throw H.i(P.aZ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.i(P.aZ(b,a,c,"end",null))
return b}return c},
kO:function(a,b){if(typeof a!=="number")return a.aF()
if(a<0)throw H.i(P.aZ(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.ad(e==null?J.bL(b):e)
return new P.fS(u,!0,a,c,"Index out of range")},
aw:function(a){return new P.iv(a)},
kZ:function(a){return new P.it(a)},
kT:function(a){return new P.cC(a)},
bs:function(a){return new P.fl(a)},
r:function(a){return new P.ek(a)},
kl:function(a){H.n5(a)},
O:function O(){},
az:function az(a,b){this.a=a
this.b=b},
A:function A(){},
bu:function bu(a){this.a=a},
fw:function fw(){},
fx:function fx(){},
bv:function bv(){},
fa:function fa(){},
dJ:function dJ(){},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bY:function bY(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fS:function fS(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iv:function iv(a){this.a=a},
it:function it(a){this.a=a},
cC:function cC(a){this.a=a},
fl:function fl(a){this.a=a},
ht:function ht(){},
dT:function dT(){},
fq:function fq(a){this.a=a},
ek:function ek(a){this.a=a},
fK:function fK(a,b){this.a=a
this.b=b},
bw:function bw(){},
D:function D(){},
d:function d(){},
aQ:function aQ(){},
b:function b(){},
Q:function Q(){},
N:function N(){},
a8:function a8(){},
S:function S(){},
ao:function ao(){},
f:function f(){},
bh:function bh(a){this.a=a},
mO:function(a){var u,t=J.X(a)
if(!!t.$ibx){u=t.gdD(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eW(a.data,a.height,a.width)},
mN:function(a){if(a instanceof P.eW)return{data:a.a,height:a.b,width:a.c}
return a},
bj:function(a){var u,t,s,r,q
if(a==null)return
u=P.kA(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=H.H(t[r])
u.W(0,q,a[q])}return u},
mM:function(a){var u={}
a.N(0,new P.jx(u))
return u},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
jx:function jx(a){this.a=a},
fG:function fG(a,b){this.a=a
this.b=b},
fH:function fH(){},
fI:function fI(){},
j7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mv:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j9:function j9(){},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bb:function bb(){},
fX:function fX(){},
be:function be(){},
hr:function hr(){},
hy:function hy(){},
cz:function cz(){},
i0:function i0(){},
p:function p(){},
bi:function bi(){},
ig:function ig(){},
eq:function eq(){},
er:function er(){},
eB:function eB(){},
eC:function eC(){},
eN:function eN(){},
eO:function eO(){},
eU:function eU(){},
eV:function eV(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(a){this.a=a},
ff:function ff(){},
bM:function bM(){},
hs:function hs(){},
ed:function ed(){},
dd:function dd(){},
dM:function dM(){},
bZ:function bZ(){},
dO:function dO(){},
dV:function dV(){},
e2:function e2(){},
hT:function hT(){},
eJ:function eJ(){},
eK:function eK(){}},W={
kq:function(){var u=document.createElement("a")
return u},
jN:function(){var u=document.createElement("canvas")
return u},
lX:function(a,b,c){var u=document.body,t=(u&&C.t).ae(u,a,b,c)
t.toString
u=W.E
u=new H.cR(new W.ai(t),H.n(new W.fz(),{func:1,ret:P.O,args:[u]}),[u])
return H.j(u.gaG(u),"$iT")},
lY:function(a){H.j(a,"$ie")
return"wheel"},
cl:function(a){var u,t,s,r="element tag unavailable"
try{u=J.kg(a)
t=u.gec(a)
if(typeof t==="string")r=u.gec(a)}catch(s){H.ay(s)}return r},
j6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l6:function(a,b,c,d){var u=W.j6(W.j6(W.j6(W.j6(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.le(new W.iW(c),W.o)
if(u!=null&&!0)J.lK(a,b,u,!1)
return new W.iV(a,b,u,!1,[e])},
l5:function(a){var u=W.kq(),t=window.location
u=new W.bF(new W.je(u,t))
u.eB(a)
return u},
mt:function(a,b,c,d){H.j(a,"$iT")
H.H(b)
H.H(c)
H.j(d,"$ibF")
return!0},
mu:function(a,b,c,d){var u,t,s
H.j(a,"$iT")
H.H(b)
H.H(c)
u=H.j(d,"$ibF").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
l7:function(){var u=P.f,t=P.kB(C.p,u),s=H.y(C.p,0),r=H.n(new W.jm(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.jl(t,P.dy(u),P.dy(u),P.dy(u),null)
t.eL(null,new H.h5(C.p,r,[s,u]),q,null)
return t},
le:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a0
if(u===C.k)return a
return u.du(a,b)},
t:function t(){},
f8:function f8(){},
da:function da(){},
f9:function f9(){},
cb:function cb(){},
dc:function dc(){},
bp:function bp(){},
bO:function bO(){},
cf:function cf(){},
bq:function bq(){},
cj:function cj(){},
fm:function fm(){},
U:function U(){},
ck:function ck(){},
fn:function fn(){},
aM:function aM(){},
aN:function aN(){},
fo:function fo(){},
fp:function fp(){},
fs:function fs(){},
aA:function aA(){},
ft:function ft(){},
dk:function dk(){},
dl:function dl(){},
fu:function fu(){},
fv:function fv(){},
iR:function iR(a,b){this.a=a
this.b=b},
T:function T(){},
fz:function fz(){},
o:function o(){},
e:function e(){},
aO:function aO(){},
fE:function fE(){},
fF:function fF(){},
fJ:function fJ(){},
aP:function aP(){},
fO:function fO(){},
bS:function bS(){},
bx:function bx(){},
cp:function cp(){},
aT:function aT(){},
dz:function dz(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(a){this.a=a},
he:function he(){},
hf:function hf(a){this.a=a},
aW:function aW(){},
hg:function hg(){},
aa:function aa(){},
ai:function ai(a){this.a=a},
E:function E(){},
cw:function cw(){},
aY:function aY(){},
hw:function hw(){},
hF:function hF(){},
hG:function hG(a){this.a=a},
hI:function hI(){},
b_:function b_(){},
hR:function hR(){},
b0:function b0(){},
hS:function hS(){},
b1:function b1(){},
hV:function hV(){},
hW:function hW(a){this.a=a},
aG:function aG(){},
c_:function c_(){},
dU:function dU(){},
i1:function i1(){},
i2:function i2(){},
cF:function cF(){},
b2:function b2(){},
aH:function aH(){},
i4:function i4(){},
i5:function i5(){},
i9:function i9(){},
b4:function b4(){},
aI:function aI(){},
id:function id(){},
ie:function ie(){},
bE:function bE(){},
iw:function iw(){},
iJ:function iJ(){},
b7:function b7(){},
cS:function cS(){},
cT:function cT(){},
iS:function iS(){},
ef:function ef(){},
j5:function j5(){},
ey:function ey(){},
ji:function ji(){},
jj:function jj(){},
iQ:function iQ(){},
iT:function iT(a){this.a=a},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k3:function k3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iV:function iV(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iW:function iW(a){this.a=a},
bF:function bF(a){this.a=a},
C:function C(){},
dI:function dI(a){this.a=a},
hp:function hp(a){this.a=a},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(){},
jg:function jg(){},
jh:function jh(){},
jl:function jl(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jm:function jm(){},
jk:function jk(){},
dp:function dp(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
au:function au(){},
je:function je(a,b){this.a=a
this.b=b},
eX:function eX(a){this.a=a},
jq:function jq(a){this.a=a},
ee:function ee(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
el:function el(){},
em:function em(){},
eo:function eo(){},
ep:function ep(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ez:function ez(){},
eA:function eA(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
cZ:function cZ(){},
d_:function d_(){},
eH:function eH(){},
eI:function eI(){},
eM:function eM(){},
eP:function eP(){},
eQ:function eQ(){},
d0:function d0(){},
d1:function d1(){},
eS:function eS(){},
eT:function eT(){},
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
jO:function(a){var u=new O.a1([a])
u.bc(a)
return u},
a1:function a1(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cs:function cs(){this.b=this.a=null},
dC:function dC(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cr:function cr(){},
h7:function h7(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aU:function aU(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h9:function h9(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ha:function ha(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dQ:function dQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bD:function bD(){}},E={
ky:function(){var u=new E.af()
u.a=""
u.b=!0
u.seA(0,O.jO(E.af))
u.y.aT(u.giJ(),u.giM())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbI(0,null)
return u},
mh:function(a,b){var u=new E.hB(a)
u.ex(a,b)
return u},
ml:function(a,b,c,d,e){var u,t,s=J.X(a)
if(!!s.$ibO)return E.kV(a,!0,!0,!0,!1)
u=W.jN()
t=u.style
t.width="100%"
t.height="100%"
s.gdz(a).h(0,u)
return E.kV(u,!0,!0,!0,!1)},
kV:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dZ(),j=H.j(C.l.cJ(a,"webgl2",P.m4(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibZ")
if(j==null)H.v(P.r("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mh(j,a)
u=new T.i6(j)
H.ad(j.getParameter(3379))
u.c=H.ad(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e5(a)
t=new X.fW()
t.c=new X.at(!1,!1,!1)
t.shi(P.dy(P.D))
u.b=t
t=new X.hh(u)
t.f=0
t.r=V.bf()
t.x=V.bf()
t.ch=t.Q=1
u.c=t
t=new X.h0(u)
t.r=0
t.x=V.bf()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ic(u)
t.f=V.bf()
t.r=V.bf()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sf5(H.c([],[[P.cD,P.S]]))
t=u.z
s=document
r=W.aa
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a7(s,"contextmenu",H.n(u.gfE(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a7(a,"focus",H.n(u.gfK(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a7(a,"blur",H.n(u.gfw(),o),!1,p))
t=u.z
n=W.aT
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a7(s,"keyup",H.n(u.gfO(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a7(s,"keydown",H.n(u.gfM(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a7(a,"mousedown",H.n(u.gfS(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,"mouseup",H.n(u.gfW(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,l,H.n(u.gfU(),q),!1,r))
n=u.z
m=W.b7;(n&&C.a).h(n,W.a7(a,H.H(W.lY(a)),H.n(u.gfY(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a7(s,l,H.n(u.gfG(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a7(s,"mouseup",H.n(u.gfI(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a7(s,"pointerlockchange",H.n(u.gh_(),o),!1,p))
p=u.z
o=W.aI
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a7(a,"touchstart",H.n(u.ghf(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchend",H.n(u.ghb(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchmove",H.n(u.ghd(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.az(Date.now(),!1)
k.cy=0
k.dj()
return k},
fg:function fg(){},
af:function af(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
dZ:function dZ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i8:function i8(a){this.a=a}},Z={
k2:function(a,b,c){var u
H.m(c,"$ib",[P.D],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.d3(c)),35044)
a.bindBuffer(b,null)
return new Z.ea(b,u)},
aB:function(a){return new Z.b6(a)},
ea:function ea(a,b){this.a=a
this.b=b},
de:function de(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eb:function eb(a){this.a=a},
ce:function ce(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(a){this.a=a}},D={
L:function(){var u=new D.bQ()
u.sac(null)
u.saN(null)
u.c=null
u.d=0
return u},
fj:function fj(){},
bQ:function bQ(){var _=this
_.d=_.c=_.b=_.a=null},
fC:function fC(a){this.a=a},
fD:function fD(a){this.a=a},
x:function x(){this.b=null},
bz:function bz(a){this.b=null
this.$ti=a},
bA:function bA(a){this.b=null
this.$ti=a},
J:function J(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bt:function bt(){var _=this
_.d=_.c=_.b=_.a=null},
a3:function a3(){},
dw:function dw(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dL:function dL(){},
dS:function dS(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){}},X={df:function df(a,b){this.a=a
this.b=b},dv:function dv(a,b){this.a=a
this.b=b},fW:function fW(){var _=this
_.d=_.c=_.b=_.a=null},dA:function dA(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h0:function h0(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},at:function at(a,b,c){this.a=a
this.b=b
this.c=c},bd:function bd(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hh:function hh(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ct:function ct(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hx:function hx(){},e0:function e0(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ic:function ic(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e5:function e5(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jR:function(a){var u=new X.fL(),t=new V.aF(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kR
if(t==null){t=V.kQ(0,0,1,1)
$.kR=t}u.r=t
return u},
kI:function(a){var u,t,s=new X.dK()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().h(0,s.geO())
t=new D.J("mover",u,s.b,[U.ab])
t.b=!0
s.an(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.P().a)){s.c=1.0471975511965976
t=new D.J("fov",t,1.0471975511965976,[P.A])
t.b=!0
s.an(t)}t=s.d
if(!(Math.abs(t-0.1)<$.P().a)){s.d=0.1
t=new D.J("near",t,0.1,[P.A])
t.b=!0
s.an(t)}t=s.e
if(!(Math.abs(t-2000)<$.P().a)){s.e=2000
t=new D.J("far",t,2000,[P.A])
t.b=!0
s.an(t)}return s},
bN:function bN(){},
fL:function fL(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fR:function fR(){this.b=this.a=null},
dK:function dK(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cE:function cE(){},
lm:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6="modifiers",a7=V.mj("Test 016"),a8=W.jN()
a8.className="pageLargeCanvas"
a8.id=a4
a7.a.appendChild(a8)
u=[P.f]
a7.dr(H.c(["A test of the Material Lighting shader with cube texturing, ","bump mapping, and a color directional light."],u))
a7.dr(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a4)
if(t==null)H.v(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.ml(t,!0,!0,!0,!1)
r=X.jR(a5)
r.sdA(0,!1)
q=E.ky()
p=F.jZ()
F.d2(p,a5,a5,1,1,1,0,0,1)
F.d2(p,a5,a5,1,1,0,1,0,3)
F.d2(p,a5,a5,1,1,0,0,1,2)
F.d2(p,a5,a5,1,1,-1,0,0,0)
F.d2(p,a5,a5,1,1,0,-1,0,0)
F.d2(p,a5,a5,1,1,0,0,-1,3)
p.aw()
q.sbI(0,p)
o=s.f.e2("../resources/maskonaive",".jpg")
n=s.f.cz("../resources/diceColor")
m=new O.dC()
m.seV(O.jO(V.al))
m.e.aT(m.gfs(),m.gfu())
u=new O.aU(m,"emission")
u.c=C.c
u.f=new V.a2(0,0,0)
m.f=u
u=new O.aU(m,"ambient")
u.c=C.c
u.f=new V.a2(0,0,0)
m.r=u
u=new O.aU(m,"diffuse")
u.c=C.c
u.f=new V.a2(0,0,0)
m.x=u
u=new O.aU(m,"invDiffuse")
u.c=C.c
u.f=new V.a2(0,0,0)
m.y=u
u=new O.ha(m,"specular")
u.c=C.c
u.f=new V.a2(0,0,0)
u.ch=100
m.z=u
u=new O.h7(m,"bump")
u.c=C.c
m.Q=u
m.ch=null
u=new O.aU(m,"reflect")
u.c=C.c
u.f=new V.a2(0,0,0)
m.cx=u
u=new O.h9(m,"refract")
u.c=C.c
u.f=new V.a2(0,0,0)
u.ch=1
m.cy=u
u=new O.h6(m,"alpha")
u.c=C.c
u.f=1
m.db=u
u=new D.dw()
u.bc(D.a3)
u.sf3(H.c([],[D.bt]))
u.shh(H.c([],[D.dL]))
u.shC(H.c([],[D.dS]))
u.shO(H.c([],[D.dW]))
u.shP(H.c([],[D.dX]))
u.shQ(H.c([],[D.dY]))
u.ch=u.Q=null
u.cL(u.gfp(),u.gh1(),u.gh5())
m.dx=u
l=u.Q
u=l==null?u.Q=D.L():l
u.h(0,m.ghn())
u=m.dx
l=u.ch
u=l==null?u.ch=D.L():l
l=m.gaM()
u.h(0,l)
m.dy=null
u=m.dx
k=V.l3()
j=U.ku(V.kE(V.kL(),k,new V.R(1,-1,-3)))
i=new V.a2(1,1,1)
h=new D.bt()
h.c=new V.a2(1,1,1)
h.a=V.mn()
g=h.b
h.b=j
j.gp().h(0,h.geD())
j=new D.J("mover",g,h.b,[U.ab])
j.b=!0
h.as(j)
if(!h.c.t(0,i)){g=h.c
h.c=i
j=new D.J("color",g,i,[V.a2])
j.b=!0
h.as(j)}u.h(0,h)
u=m.r
u.saj(0,new V.a2(0.2,0.2,0.2))
u=m.x
u.saj(0,new V.a2(0.7,0.7,0.7))
u=m.z
u.saj(0,new V.a2(0.7,0.7,0.7))
m.r.saR(n)
m.x.saR(n)
m.z.saR(s.f.cz("../resources/diceSpecular"))
u=m.z
if(u.c===C.c){u.c=C.f
u.bL()
u.c7(100)
j=u.a
j.a=null
j.P(a5)}u.c7(10)
m.Q.saR(s.f.cz("../resources/diceBumpMap"))
u=m.ch
if(u!==o){if(u!=null)u.gp().S(0,l)
g=m.ch
m.ch=o
o.gp().h(0,l)
u=new D.J("environment",g,m.ch,[T.c0])
u.b=!0
m.P(u)}u=m.cx
u.saj(0,new V.a2(0.3,0.3,0.3))
f=new U.co()
f.bc(U.ab)
f.aT(f.gfn(),f.gh3())
f.e=null
f.f=V.bV()
f.r=0
u=s.r
l=new U.e7()
j=U.jP()
j.scI(0,!0)
j.scA(6.283185307179586)
j.scC(0)
j.sa8(0,0)
j.scB(100)
j.sT(0)
j.sck(0.5)
l.b=j
h=l.gaI()
j.gp().h(0,h)
j=U.jP()
j.scI(0,!0)
j.scA(6.283185307179586)
j.scC(0)
j.sa8(0,0)
j.scB(100)
j.sT(0)
j.sck(0.5)
l.c=j
j.gp().h(0,h)
l.d=null
l.r=l.f=l.e=!1
l.y=l.x=2.5
l.Q=4
l.ch=l.cx=!1
l.db=l.cy=0
l.dx=null
l.dy=0
l.fx=l.fr=null
e=new X.at(!1,!1,!1)
g=l.d
l.d=e
j=[X.at]
h=new D.J(a6,g,e,j)
h.b=!0
l.M(h)
h=l.f
if(h!==!1){l.f=!1
h=new D.J("invertX",h,!1,[P.O])
h.b=!0
l.M(h)}h=l.r
if(h!==!1){l.r=!1
h=new D.J("invertY",h,!1,[P.O])
h.b=!0
l.M(h)}l.b_(u)
f.h(0,l)
u=s.r
l=new U.e6()
h=U.jP()
h.scI(0,!0)
h.scA(6.283185307179586)
h.scC(0)
h.sa8(0,0)
h.scB(100)
h.sT(0)
h.sck(0.2)
l.b=h
h.gp().h(0,l.gaI())
l.c=null
l.d=!1
l.e=2.5
l.r=4
l.x=l.y=!1
l.z=0
l.Q=null
l.ch=0
l.cy=l.cx=null
e=new X.at(!0,!1,!1)
g=l.c
l.c=e
h=new D.J(a6,g,e,j)
h.b=!0
l.M(h)
l.b_(u)
f.h(0,l)
u=s.r
l=new U.e8()
l.c=0.01
l.e=l.d=0
e=new X.at(!1,!1,!1)
l.b=e
j=new D.J(a6,a5,e,j)
j.b=!0
l.M(j)
l.b_(u)
f.h(0,l)
f.h(0,U.ku(V.aV(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
d=X.kI(f)
c=new M.di()
c.sb0(a5)
c.sb5(0,a5)
c.sb6(a5)
u=E.ky()
p=F.jZ()
l=p.a
j=new V.R(-1,-1,1)
j=j.v(0,Math.sqrt(j.C(j)))
b=l.bh(new V.bg(1,2,4,6),new V.aF(1,0,0,1),new V.ag(-1,-1,0),new V.a5(0,1),j,a5)
l=p.a
j=new V.R(1,-1,1)
j=j.v(0,Math.sqrt(j.C(j)))
a=l.bh(new V.bg(0,3,4,6),new V.aF(0,0,1,1),new V.ag(1,-1,0),new V.a5(1,1),j,a5)
l=p.a
j=new V.R(1,1,1)
j=j.v(0,Math.sqrt(j.C(j)))
a0=l.bh(new V.bg(0,2,5,6),new V.aF(0,1,0,1),new V.ag(1,1,0),new V.a5(1,0),j,a5)
l=p.a
j=V.bf()
h=new V.R(-1,1,1)
h=h.v(0,Math.sqrt(h.C(h)))
a1=l.bh(new V.bg(0,2,4,7),new V.aF(1,1,0,1),new V.ag(-1,1,0),j,h,a5)
p.d.ih(H.c([b,a,a0,a1],[F.ax]))
p.aw()
u.sbI(0,p)
c.d=u
c.e=null
u=new O.dQ()
u.b=1.0471975511965976
u.d=new V.a2(1,1,1)
g=u.c
u.c=o
o.gp().h(0,u.gaM())
l=new D.J("boxTexture",g,u.c,[T.c0])
l.b=!0
u.P(l)
c.sb6(u)
c.sb5(0,r)
c.sb0(d)
a2=new M.dm()
a2.seY(0,O.jO(E.af))
a2.d.aT(a2.gfA(),a2.gfC())
a2.x=a2.r=a2.f=a2.e=null
a3=X.jR(a5)
a2.sb0(a5)
a2.sb5(0,a3)
a2.sb6(a5)
a2.sb0(d)
a2.sb6(m)
a2.sb5(0,r)
a2.d.h(0,q)
a2.b.sdA(0,!1)
u=M.av
l=H.c([c,a2],[u])
j=new M.dg()
j.bc(u)
j.e=!1
j.f=null
j.aT(j.gh7(),j.gh9())
j.a6(0,l)
u=s.d
if(u!==j){if(u!=null)u.gp().S(0,s.gcS())
s.d=j
j.gp().h(0,s.gcS())
s.cT()}u=s.z
if(u==null)u=s.z=D.L()
l={func:1,ret:-1,args:[D.x]}
j=H.n(new X.jF(a7,m),l)
if(u.b==null)u.saN(H.c([],[l]))
u=u.b;(u&&C.a).h(u,j)
V.n8(s)},
jF:function jF(a,b){this.a=a
this.b=b}},V={
nd:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.el(a-b,u)
return(a<0?a+u:a)+b},
W:function(a,b,c){if(a==null)return C.i.ag("null",c)
return C.i.ag(C.j.ee(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
c6:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.A],"$ab")
u=H.c([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.B)(a),++r){q=V.W(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.l(u,p)
C.a.W(u,p,C.i.ag(u[p],s))}return u},
kk:function(a){return C.j.j4(Math.pow(2,C.N.cs(Math.log(H.mL(a))/Math.log(2))))},
bV:function(){var u=$.kF
return u==null?$.kF=V.aV(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aV:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kE:function(a,b,c){var u=c.v(0,Math.sqrt(c.C(c))),t=b.b1(u),s=t.v(0,Math.sqrt(t.C(t))),r=u.b1(s),q=new V.R(a.a,a.b,a.c),p=s.O(0).C(q),o=r.O(0).C(q),n=u.O(0).C(q)
return V.aV(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bf:function(){var u=$.kK
return u==null?$.kK=new V.a5(0,0):u},
kL:function(){var u=$.cx
return u==null?$.cx=new V.ag(0,0,0):u},
kQ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dN(a,b,c,d)},
e9:function(){var u=$.l2
return u==null?$.l2=new V.R(0,0,0):u},
l3:function(){var u=$.l1
return u==null?$.l1=new V.R(0,1,0):u},
mn:function(){var u=$.iz
return u==null?$.iz=new V.R(0,0,1):u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fB:function fB(a){this.a=a},
dE:function dE(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
al:function al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dN:function dN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
Z:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.i(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.i.aJ(a,0)
t=C.i.aJ(b,0)
s=new V.hA()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.hJ()
u.ey(a)
return u},
ib:function(){var u=new V.ia(),t=P.f
u.shD(new H.aS([t,V.cB]))
u.shG(new H.aS([t,V.cH]))
u.c=null
return u},
b9:function b9(){},
as:function as(){},
dB:function dB(){},
am:function am(){this.a=null},
hA:function hA(){this.b=this.a=null},
hJ:function hJ(){this.a=null},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a){this.b=a
this.c=null},
ia:function ia(){this.c=this.b=this.a=null},
cI:function cI(a){this.b=a
this.a=this.c=null},
n8:function(a){P.mm(C.K,new V.jI(a))},
mj:function(a){var u=new V.hN()
u.ez(a,!0)
return u},
br:function br(){},
jI:function jI(a){this.a=a},
fr:function fr(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fM:function fM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fN:function fN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hv:function hv(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hN:function hN(){this.b=this.a=null},
hP:function hP(a){this.a=a},
hO:function hO(a){this.a=a},
hQ:function hQ(a){this.a=a}},U={
jP:function(){var u=new U.fk()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ku:function(a){var u=new U.dh()
u.a=a
return u},
fk:function fk(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dh:function dh(){this.b=this.a=null},
co:function co(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ab:function ab(){},
e6:function e6(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dg:function dg(){var _=this
_.c=_.b=_.a=_.f=_.e=null},di:function di(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},dm:function dm(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},av:function av(){}},A={
m6:function(a,b){var u=a.ak,t=new A.dD(b,u)
t.cQ(b,u)
t.ew(a,b)
return t},
k1:function(a,b,c,d,e){var u=new A.ik(a,c,e)
u.f=d
u.shR(P.m5(d,0,P.D))
return u},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
fb:function fb(a){this.a=a},
dD:function dD(a,b){var _=this
_.bk=_.dG=_.bj=_.ak=_.ar=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dW=_.cm=_.dV=_.bx=_.dU=_.dT=_.bw=_.bv=_.dS=_.dR=_.bu=_.bt=_.bs=_.dQ=_.dP=_.br=_.dO=_.dN=_.bq=_.dM=_.dL=_.bp=_.bo=_.dK=_.dJ=_.bn=_.bm=_.dI=_.dH=_.bl=null
_.cr=_.e_=_.cq=_.dZ=_.cp=_.dY=_.co=_.dX=_.cn=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h8:function h8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bj=b5},
cJ:function cJ(a,b){this.b=a
this.c=b},
cN:function cN(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cL:function cL(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cO:function cO(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cM:function cM(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cP:function cP(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cA:function cA(){},
bP:function bP(a,b){this.a=a
this.b=b},
dR:function dR(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e1:function e1(){},
ir:function ir(a){this.a=a},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
io:function io(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){this.a=a
this.c=b
this.d=c},
K:function K(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){this.a=a
this.c=b
this.d=c},
cK:function cK(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jt:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
d2:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.R(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.R(u+a3,t+a1,s+a2)
q=new V.R(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.R(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jt(i)
l=F.jt(j.b)
k=F.nb(d,a0,new F.js(j,F.jt(j.c),F.jt(j.d),l,m,c),b)
if(k!=null)a.iI(k)},
nb:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ax,P.A,P.A]})
if(a<1)return
if(b<1)return
u=F.jZ()
t=H.c([],[F.ax])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iA(g,g,new V.aF(p,0,0,1),g,g,new V.a5(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cj(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iA(g,g,new V.aF(j,i,h,1),g,g,new V.a5(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cj(d))}}u.d.ii(a+1,b+1,t)
return u},
cm:function(a,b,c){var u=new F.a4(),t=a.a
if(t==null)H.v(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.v(P.r("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
m3:function(a,b){var u=new F.bc(),t=a.a
if(t==null)H.v(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.v(P.r("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
jZ:function(){var u=new F.dP(),t=new F.iB(u)
t.b=!1
t.shS(H.c([],[F.ax]))
u.a=t
t=new F.hM(u)
t.sc4(H.c([],[F.bC]))
u.b=t
t=new F.hL(u)
t.sfc(H.c([],[F.bc]))
u.c=t
t=new F.hK(u)
t.sf6(H.c([],[F.a4]))
u.d=t
u.e=null
return u},
iA:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ax(),r=new F.iG()
r.sc4(H.c([],[F.bC]))
s.b=r
r=new F.iF()
u=[F.bc]
r.sfd(H.c([],u))
r.sfe(H.c([],u))
s.c=r
r=new F.iC()
u=[F.a4]
r.sf7(H.c([],u))
r.sf8(H.c([],u))
r.sf9(H.c([],u))
s.d=r
h=$.lE()
s.e=0
r=$.aK()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bm().a)!==0?e:t
s.x=(u&$.bl().a)!==0?b:t
s.y=(u&$.bn().a)!==0?f:t
s.z=(u&$.bo().a)!==0?g:t
s.Q=(u&$.lF().a)!==0?c:t
s.ch=(u&$.ca().a)!==0?i:0
s.cx=(u&$.bk().a)!==0?a:t
return s},
js:function js(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a4:function a4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bc:function bc(){this.b=this.a=null},
bC:function bC(){this.a=null},
dP:function dP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hK:function hK(a){this.a=a
this.b=null},
hL:function hL(a){this.a=a
this.b=null},
hM:function hM(a){this.a=a
this.b=null},
ax:function ax(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iI:function iI(a){this.a=a},
iH:function iH(a){this.a=a},
iB:function iB(a){this.a=a
this.c=this.b=null},
iC:function iC(){this.d=this.c=this.b=null},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(){this.c=this.b=null},
iG:function iG(){this.b=null}},T={cG:function cG(){},c0:function c0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},i6:function i6(a){var _=this
_.a=a
_.e=_.d=_.c=null},i7:function i7(a,b,c,d,e,f,g){var _=this
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
H.jW.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gG:function(a){return H.cy(a)},
i:function(a){return"Instance of '"+H.bX(a)+"'"}}
J.fT.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iO:1}
J.ds.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.du.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hu.prototype={}
J.cQ.prototype={}
J.bB.prototype={
i:function(a){var u=a[$.lt()]
if(u==null)return this.er(a)
return"JavaScript function for "+H.k(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibw:1}
J.aR.prototype={
h:function(a,b){H.G(b,H.y(a,0))
if(!!a.fixed$length)H.v(P.aw("add"))
a.push(b)},
S:function(a,b){var u
if(!!a.fixed$length)H.v(P.aw("remove"))
for(u=0;u<a.length;++u)if(J.a6(a[u],b)){a.splice(u,1)
return!0}return!1},
a6:function(a,b){var u,t
H.m(b,"$id",[H.y(a,0)],"$ad")
if(!!a.fixed$length)H.v(P.aw("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.B)(b),++t)a.push(b[t])},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.bs(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.W(t,u,H.k(a[u]))
return t.join(b)},
iF:function(a){return this.l(a,"")},
iz:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.O,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.z(b.$1(s)))return s
if(a.length!==u)throw H.i(P.bs(a))}throw H.i(H.jT())},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
eo:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.aZ(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.aZ(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gby:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.jT())},
dt:function(a,b){var u,t
H.n(b,{func:1,ret:P.O,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.z(b.$1(a[t])))return!0
if(a.length!==u)throw H.i(P.bs(a))}return!1},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a6(a[u],b))return!0
return!1},
i:function(a){return P.jS(a,"[","]")},
gR:function(a){return new J.ak(a,a.length,[H.y(a,0)])},
gG:function(a){return H.cy(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.v(P.aw("set length"))
if(b<0)throw H.i(P.aZ(b,0,null,"newLength",null))
a.length=b},
W:function(a,b,c){H.G(c,H.y(a,0))
if(!!a.immutable$list)H.v(P.aw("indexed set"))
if(b>=a.length||b<0)throw H.i(H.d6(a,b))
a[b]=c},
$id:1,
$ib:1}
J.jV.prototype={}
J.ak.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.i(H.B(s))
u=t.c
if(u>=r){t.sd7(null)
return!1}t.sd7(s[u]);++t.c
return!0},
sd7:function(a){this.d=H.G(a,H.y(this,0))},
$iaQ:1}
J.dt.prototype={
j4:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.aw(""+a+".toInt()"))},
cs:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.aw(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.aw(""+a+".round()"))},
ee:function(a,b){var u,t
if(b>20)throw H.i(P.aZ(b,0,20,"fractionDigits",null))
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
el:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ev:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dl(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dl(a,b)},
dl:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.aw("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
bf:function(a,b){var u
if(a>0)u=this.hB(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hB:function(a,b){return b>31?0:a>>>b},
$iA:1,
$ia8:1}
J.dr.prototype={$iD:1}
J.dq.prototype={}
J.bT.prototype={
ci:function(a,b){if(b<0)throw H.i(H.d6(a,b))
if(b>=a.length)H.v(H.d6(a,b))
return a.charCodeAt(b)},
aJ:function(a,b){if(b>=a.length)throw H.i(H.d6(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(typeof b!=="string")throw H.i(P.jL(b,null,null))
return a+b},
bJ:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
ba:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.hz(b,null))
if(b>c)throw H.i(P.hz(b,null))
if(c>a.length)throw H.i(P.hz(c,null))
return a.substring(b,c)},
b9:function(a,b){return this.ba(a,b,null)},
j7:function(a){return a.toLowerCase()},
w:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ag:function(a,b){var u=b-a.length
if(u<=0)return a
return this.w(" ",u)+a},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikH:1,
$if:1}
H.q.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.i.ci(this.a,b)},
$ae4:function(){return[P.D]},
$aw:function(){return[P.D]},
$ad:function(){return[P.D]},
$ab:function(){return[P.D]}}
H.fy.prototype={}
H.bU.prototype={
gR:function(a){var u=this
return new H.cq(u,u.gm(u),[H.aj(u,"bU",0)])},
bH:function(a,b){return this.eq(0,H.n(b,{func:1,ret:P.O,args:[H.aj(this,"bU",0)]}))}}
H.cq.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.ke(s),q=r.gm(s)
if(t.b!==q)throw H.i(P.bs(s))
u=t.c
if(u>=q){t.saV(null)
return!1}t.saV(r.D(s,u));++t.c
return!0},
saV:function(a){this.d=H.G(a,H.y(this,0))},
$iaQ:1}
H.h3.prototype={
gR:function(a){return new H.h4(J.bK(this.a),this.b,this.$ti)},
gm:function(a){return J.bL(this.a)},
D:function(a,b){return this.b.$1(J.jK(this.a,b))},
$ad:function(a,b){return[b]}}
H.h4.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.saV(u.c.$1(t.gE(t)))
return!0}u.saV(null)
return!1},
gE:function(a){return this.a},
saV:function(a){this.a=H.G(a,H.y(this,1))},
$aaQ:function(a,b){return[b]}}
H.h5.prototype={
gm:function(a){return J.bL(this.a)},
D:function(a,b){return this.b.$1(J.jK(this.a,b))},
$abU:function(a,b){return[b]},
$ad:function(a,b){return[b]}}
H.cR.prototype={
gR:function(a){return new H.iK(J.bK(this.a),this.b,this.$ti)}}
H.iK.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(H.z(t.$1(u.gE(u))))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.bR.prototype={}
H.e4.prototype={}
H.e3.prototype={}
H.ih.prototype={
af:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hq.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fV.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.k(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.k(t.a)+")"
return s+r+"' on '"+u+"' ("+H.k(t.a)+")"}}
H.iu.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jJ.prototype={
$1:function(a){if(!!J.X(a).$ibv)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.eL.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iao:1}
H.cg.prototype={
i:function(a){return"Closure '"+H.bX(this).trim()+"'"},
$ibw:1,
gj8:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i3.prototype={}
H.hU.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c9(u)+"'"}}
H.cc.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cc))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cy(this.a)
else u=typeof t!=="object"?J.bJ(t):H.cy(t)
return(u^H.cy(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bX(u)+"'")}}
H.ij.prototype={
i:function(a){return this.a}}
H.fi.prototype={
i:function(a){return this.a}}
H.hH.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.iL.prototype={
i:function(a){return"Assertion failed: "+P.dn(this.a)}}
H.aS.prototype={
gm:function(a){return this.a},
ga7:function(a){return new H.dx(this,[H.y(this,0)])},
dC:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d4(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d4(t,b)}else return s.iD(b)},
iD:function(a){var u=this.d
if(u==null)return!1
return this.ct(this.bS(u,J.bJ(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bd(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bd(r,b)
s=t==null?null:t.b
return s}else return q.iE(b)},
iE:function(a){var u,t,s=this.d
if(s==null)return
u=this.bS(s,J.bJ(a)&0x3ffffff)
t=this.ct(u,a)
if(t<0)return
return u[t].b},
W:function(a,b,c){var u,t,s,r,q,p,o=this
H.G(b,H.y(o,0))
H.G(c,H.y(o,1))
if(typeof b==="string"){u=o.b
o.cW(u==null?o.b=o.c2():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cW(t==null?o.c=o.c2():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.c2()
r=J.bJ(b)&0x3ffffff
q=o.bS(s,r)
if(q==null)o.c8(s,r,[o.c3(b,c)])
else{p=o.ct(q,b)
if(p>=0)q[p].b=c
else q.push(o.c3(b,c))}}},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.y(s,0),H.y(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.i(P.bs(s))
u=u.c}},
cW:function(a,b,c){var u,t=this
H.G(b,H.y(t,0))
H.G(c,H.y(t,1))
u=t.bd(a,b)
if(u==null)t.c8(a,b,t.c3(b,c))
else u.b=c},
fk:function(){this.r=this.r+1&67108863},
c3:function(a,b){var u,t=this,s=new H.fY(H.G(a,H.y(t,0)),H.G(b,H.y(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fk()
return s},
ct:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a6(a[t].a,b))return t
return-1},
i:function(a){return P.kD(this)},
bd:function(a,b){return a[b]},
bS:function(a,b){return a[b]},
c8:function(a,b,c){a[b]=c},
f2:function(a,b){delete a[b]},
d4:function(a,b){return this.bd(a,b)!=null},
c2:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c8(t,u,t)
this.f2(t,u)
return t}}
H.fY.prototype={}
H.dx.prototype={
gm:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.fZ(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fZ.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bs(t))
else{t=u.c
if(t==null){u.scV(null)
return!1}else{u.scV(t.a)
u.c=u.c.c
return!0}}},
scV:function(a){this.d=H.G(a,H.y(this,0))},
$iaQ:1}
H.jB.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.jC.prototype={
$2:function(a,b){return this.a(a,b)},
$S:37}
H.jD.prototype={
$1:function(a){return this.a(H.H(a))},
$S:35}
H.fU.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikH:1}
H.cv.prototype={$inx:1}
H.dF.prototype={
gm:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cu.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]},
$abR:function(){return[P.A]},
$aw:function(){return[P.A]},
$id:1,
$ad:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.dG.prototype={
$abR:function(){return[P.D]},
$aw:function(){return[P.D]},
$id:1,
$ad:function(){return[P.D]},
$ib:1,
$ab:function(){return[P.D]}}
H.hi.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.hj.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.hk.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.hl.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.dH.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bG(b,a,a.length)
return a[b]},
$iny:1}
H.hn.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.cV.prototype={}
H.cW.prototype={}
H.cX.prototype={}
H.cY.prototype={}
P.iN.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:12}
P.iM.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:38}
P.iO.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iP.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eR.prototype={
eM:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c5(new P.jo(this,b),0),a)
else throw H.i(P.aw("`setTimeout()` not found."))},
eN:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c5(new P.jn(this,a,Date.now(),b),0),a)
else throw H.i(P.aw("Periodic timer."))},
$ib3:1}
P.jo.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jn.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.h.ev(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b8.prototype={
iH:function(a){if(this.c!==6)return!0
return this.b.b.cG(H.n(this.d,{func:1,ret:P.O,args:[P.S]}),a.a,P.O,P.S)},
iB:function(a){var u=this.e,t=P.S,s={futureOr:1,type:H.y(this,1)},r=this.b.b
if(H.f7(u,{func:1,args:[P.S,P.ao]}))return H.kd(r.j_(u,a.a,a.b,null,t,P.ao),s)
else return H.kd(r.cG(H.n(u,{func:1,args:[P.S]}),a.a,null,t),s)}}
P.aC.prototype={
ed:function(a,b,c){var u,t,s,r=H.y(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a0
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mD(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aC($.a0,[c])
s=b==null?1:3
this.cX(new P.b8(t,s,a,b,[r,c]))
return t},
j3:function(a,b){return this.ed(a,null,b)},
cX:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.j(t.c,"$ib8")
t.c=a}else{if(s===2){u=H.j(t.c,"$iaC")
s=u.a
if(s<4){u.cX(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jw(null,null,s,H.n(new P.iX(t,a),{func:1,ret:-1}))}},
dh:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.j(p.c,"$ib8")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.j(p.c,"$iaC")
u=q.a
if(u<4){q.dh(a)
return}p.a=u
p.c=q.c}o.a=p.be(a)
u=p.b
u.toString
P.jw(null,null,u,H.n(new P.j0(o,p),{func:1,ret:-1}))}},
c6:function(){var u=H.j(this.c,"$ib8")
this.c=null
return this.be(u)},
be:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d0:function(a){var u,t,s=this,r=H.y(s,0)
H.kd(a,{futureOr:1,type:r})
u=s.$ti
if(H.ka(a,"$icn",u,"$acn"))if(H.ka(a,"$iaC",u,null))P.l4(a,s)
else P.ms(a,s)
else{t=s.c6()
H.G(a,r)
s.a=4
s.c=a
P.cU(s,t)}},
d1:function(a,b){var u,t=this
H.j(b,"$iao")
u=t.c6()
t.a=8
t.c=new P.ae(a,b)
P.cU(t,u)},
$icn:1}
P.iX.prototype={
$0:function(){P.cU(this.a,this.b)},
$S:2}
P.j0.prototype={
$0:function(){P.cU(this.b,this.a.a)},
$S:2}
P.iY.prototype={
$1:function(a){var u=this.a
u.a=0
u.d0(a)},
$S:12}
P.iZ.prototype={
$2:function(a,b){H.j(b,"$iao")
this.a.d1(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.j_.prototype={
$0:function(){this.a.d1(this.b,this.c)},
$S:2}
P.j3.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eb(H.n(s.d,{func:1}),null)}catch(r){u=H.ay(r)
t=H.c7(r)
if(o.d){s=H.j(o.a.a.c,"$iae").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.j(o.a.a.c,"$iae")
else q.b=new P.ae(u,t)
q.a=!0
return}if(!!J.X(n).$icn){if(n instanceof P.aC&&n.a>=4){if(n.a===8){s=o.b
s.b=H.j(n.c,"$iae")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.j3(new P.j4(p),null)
s.a=!1}},
$S:3}
P.j4.prototype={
$1:function(a){return this.a},
$S:31}
P.j2.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.y(s,0)
q=H.G(n.c,r)
p=H.y(s,1)
n.a.b=s.b.b.cG(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ay(o)
t=H.c7(o)
s=n.a
s.b=new P.ae(u,t)
s.a=!0}},
$S:3}
P.j1.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.j(m.a.a.c,"$iae")
r=m.c
if(H.z(r.iH(u))&&r.e!=null){q=m.b
q.b=r.iB(u)
q.a=!1}}catch(p){t=H.ay(p)
s=H.c7(p)
r=H.j(m.a.a.c,"$iae")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ae(t,s)
n.a=!0}},
$S:3}
P.ec.prototype={}
P.hX.prototype={
gm:function(a){var u,t,s=this,r={},q=new P.aC($.a0,[P.D])
r.a=0
u=H.y(s,0)
t=H.n(new P.hZ(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.i_(r,q),{func:1,ret:-1})
W.a7(s.a,s.b,t,!1,u)
return q}}
P.hZ.prototype={
$1:function(a){H.G(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.y(this.b,0)]}}}
P.i_.prototype={
$0:function(){this.b.d0(this.a.a)},
$S:2}
P.cD.prototype={}
P.hY.prototype={}
P.b3.prototype={}
P.ae.prototype={
i:function(a){return H.k(this.a)},
$ibv:1}
P.jr.prototype={$inM:1}
P.jv.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dJ():s
s=this.b
if(s==null)throw H.i(t)
u=H.i(t)
u.stack=s.i(0)
throw u},
$S:2}
P.ja.prototype={
j0:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a0){a.$0()
return}P.la(r,r,this,a,-1)}catch(s){u=H.ay(s)
t=H.c7(s)
P.ju(r,r,this,u,H.j(t,"$iao"))}},
j1:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.G(b,c)
try{if(C.k===$.a0){a.$1(b)
return}P.lb(r,r,this,a,b,-1,c)}catch(s){u=H.ay(s)
t=H.c7(s)
P.ju(r,r,this,u,H.j(t,"$iao"))}},
io:function(a,b){return new P.jc(this,H.n(a,{func:1,ret:b}),b)},
cd:function(a){return new P.jb(this,H.n(a,{func:1,ret:-1}))},
du:function(a,b){return new P.jd(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eb:function(a,b){H.n(a,{func:1,ret:b})
if($.a0===C.k)return a.$0()
return P.la(null,null,this,a,b)},
cG:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.G(b,d)
if($.a0===C.k)return a.$1(b)
return P.lb(null,null,this,a,b,c,d)},
j_:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.G(b,e)
H.G(c,f)
if($.a0===C.k)return a.$2(b,c)
return P.mE(null,null,this,a,b,c,d,e,f)}}
P.jc.prototype={
$0:function(){return this.a.eb(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jb.prototype={
$0:function(){return this.a.j0(this.b)},
$S:3}
P.jd.prototype={
$1:function(a){var u=this.c
return this.a.j1(this.b,H.G(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j8.prototype={
gR:function(a){var u=this,t=new P.es(u,u.r,u.$ti)
t.c=u.e
return t},
gm:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.j(u[b],"$ic1")!=null}else{t=this.eZ(b)
return t}},
eZ:function(a){var u=this.d
if(u==null)return!1
return this.bQ(this.d8(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.G(b,H.y(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cY(u==null?s.b=P.k4():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cY(t==null?s.c=P.k4():t,b)}else return s.eQ(0,b)},
eQ:function(a,b){var u,t,s,r=this
H.G(b,H.y(r,0))
u=r.d
if(u==null)u=r.d=P.k4()
t=r.d2(b)
s=u[t]
if(s==null)u[t]=[r.bN(b)]
else{if(r.bQ(s,b)>=0)return!1
s.push(r.bN(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hk(this.c,b)
else return this.hj(0,b)},
hj:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d8(r,b)
t=s.bQ(u,b)
if(t<0)return!1
s.dm(u.splice(t,1)[0])
return!0},
cY:function(a,b){H.G(b,H.y(this,0))
if(H.j(a[b],"$ic1")!=null)return!1
a[b]=this.bN(b)
return!0},
hk:function(a,b){var u
if(a==null)return!1
u=H.j(a[b],"$ic1")
if(u==null)return!1
this.dm(u)
delete a[b]
return!0},
d_:function(){this.r=1073741823&this.r+1},
bN:function(a){var u,t=this,s=new P.c1(H.G(a,H.y(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d_()
return s},
dm:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d_()},
d2:function(a){return J.bJ(a)&1073741823},
d8:function(a,b){return a[this.d2(b)]},
bQ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a6(a[t].a,b))return t
return-1}}
P.c1.prototype={}
P.es.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bs(t))
else{t=u.c
if(t==null){u.scZ(null)
return!1}else{u.scZ(H.G(t.a,H.y(u,0)))
u.c=u.c.b
return!0}}},
scZ:function(a){this.d=H.G(a,H.y(this,0))},
$iaQ:1}
P.h_.prototype={$id:1,$ib:1}
P.w.prototype={
gR:function(a){return new H.cq(a,this.gm(a),[H.d7(this,a,"w",0)])},
D:function(a,b){return this.j(a,b)},
j6:function(a,b){var u,t=this,s=H.c([],[H.d7(t,a,"w",0)])
C.a.sm(s,t.gm(a))
for(u=0;u<t.gm(a);++u)C.a.W(s,u,t.j(a,u))
return s},
j5:function(a){return this.j6(a,!0)},
i:function(a){return P.jS(a,"[","]")}}
P.h1.prototype={}
P.h2.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.k(a)
t.a=u+": "
t.a+=H.k(b)},
$S:13}
P.a9.prototype={
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.d7(s,a,"a9",0),H.d7(s,a,"a9",1)]})
for(u=J.bK(s.ga7(a));u.u();){t=u.gE(u)
b.$2(t,s.j(a,t))}},
gm:function(a){return J.bL(this.ga7(a))},
i:function(a){return P.kD(a)},
$iQ:1}
P.jf.prototype={
a6:function(a,b){var u
for(u=J.bK(H.m(b,"$id",this.$ti,"$ad"));u.u();)this.h(0,u.gE(u))},
i:function(a){return P.jS(this,"{","}")},
D:function(a,b){var u,t,s,r=this
P.kO(b,"index")
for(u=P.mw(r,r.r,H.y(r,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.i(P.Y(b,r,"index",null,t))},
$id:1,
$ikS:1}
P.et.prototype={}
P.ch.prototype={}
P.ci.prototype={}
P.fA.prototype={
$ach:function(){return[P.f,[P.b,P.D]]}}
P.fQ.prototype={
i:function(a){return this.a}}
P.fP.prototype={
f_:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.l(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.bh("")
if(r>b)q.a+=C.i.ba(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lN(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$aci:function(){return[P.f,P.f]}}
P.ix.prototype={}
P.iy.prototype={
iq:function(a){var u,t,s=P.kP(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jp(u)
if(t.fa(a,0,s)!==s)t.dn(C.i.ci(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mz(0,t.b,u.length)))},
$aci:function(){return[P.f,[P.b,P.D]]}}
P.jp.prototype={
dn:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.l(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.l(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.l(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.l(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.l(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.l(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.l(s,r)
s[r]=128|a&63
return!1}},
fa:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.i.ci(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.i.aJ(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dn(r,C.i.aJ(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.l(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.l(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.l(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.l(u,q)
u[q]=128|r&63}}return s}}
P.O.prototype={}
P.az.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.h.bf(u,30))&1073741823},
i:function(a){var u=this,t=P.lV(H.me(u)),s=P.dj(H.mc(u)),r=P.dj(H.m8(u)),q=P.dj(H.m9(u)),p=P.dj(H.mb(u)),o=P.dj(H.md(u)),n=P.lW(H.ma(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.A.prototype={}
P.bu.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bu&&this.a===b.a},
gG:function(a){return C.h.gG(this.a)},
i:function(a){var u,t,s,r=new P.fx(),q=this.a
if(q<0)return"-"+new P.bu(0-q).i(0)
u=r.$1(C.h.a2(q,6e7)%60)
t=r.$1(C.h.a2(q,1e6)%60)
s=new P.fw().$1(q%1e6)
return""+C.h.a2(q,36e8)+":"+H.k(u)+":"+H.k(t)+"."+H.k(s)}}
P.fw.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.fx.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.bv.prototype={}
P.fa.prototype={
i:function(a){return"Assertion failed"}}
P.dJ.prototype={
i:function(a){return"Throw of null."}}
P.aE.prototype={
gbP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbO:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbP()+o+u
if(!q.a)return t
s=q.gbO()
r=P.dn(q.b)
return t+s+": "+r}}
P.bY.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.k(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.k(s)
else if(t>s)u=": Not in range "+H.k(s)+".."+H.k(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.k(s)}return u}}
P.fS.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var u,t=H.ad(this.b)
if(typeof t!=="number")return t.aF()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.k(u)},
gm:function(a){return this.f}}
P.iv.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.it.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cC.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fl.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dn(u)+"."}}
P.ht.prototype={
i:function(a){return"Out of Memory"},
$ibv:1}
P.dT.prototype={
i:function(a){return"Stack Overflow"},
$ibv:1}
P.fq.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ek.prototype={
i:function(a){return"Exception: "+this.a}}
P.fK.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.i.ba(s,0,75)+"...":s
return t+"\n"+r}}
P.bw.prototype={}
P.D.prototype={}
P.d.prototype={
bH:function(a,b){var u=H.aj(this,"d",0)
return new H.cR(this,H.n(b,{func:1,ret:P.O,args:[u]}),[u])},
gm:function(a){var u,t=this.gR(this)
for(u=0;t.u();)++u
return u},
gaG:function(a){var u,t=this.gR(this)
if(!t.u())throw H.i(H.jT())
u=t.gE(t)
if(t.u())throw H.i(H.m0())
return u},
D:function(a,b){var u,t,s
P.kO(b,"index")
for(u=this.gR(this),t=0;u.u();){s=u.gE(u)
if(b===t)return s;++t}throw H.i(P.Y(b,this,"index",null,t))},
i:function(a){return P.m_(this,"(",")")}}
P.aQ.prototype={}
P.b.prototype={$id:1}
P.Q.prototype={}
P.N.prototype={
gG:function(a){return P.S.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a8.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
t:function(a,b){return this===b},
gG:function(a){return H.cy(this)},
i:function(a){return"Instance of '"+H.bX(this)+"'"},
toString:function(){return this.i(this)}}
P.ao.prototype={}
P.f.prototype={$ikH:1}
P.bh.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.f8.prototype={
gm:function(a){return a.length}}
W.da.prototype={
i:function(a){return String(a)},
$ida:1}
W.f9.prototype={
i:function(a){return String(a)}}
W.cb.prototype={$icb:1}
W.dc.prototype={}
W.bp.prototype={$ibp:1}
W.bO.prototype={
cJ:function(a,b,c){if(c!=null)return a.getContext(b,P.mM(c))
return a.getContext(b)},
ek:function(a,b){return this.cJ(a,b,null)},
$ibO:1}
W.cf.prototype={$icf:1}
W.bq.prototype={
gm:function(a){return a.length}}
W.cj.prototype={$icj:1}
W.fm.prototype={
gm:function(a){return a.length}}
W.U.prototype={$iU:1}
W.ck.prototype={
gm:function(a){return a.length}}
W.fn.prototype={}
W.aM.prototype={}
W.aN.prototype={}
W.fo.prototype={
gm:function(a){return a.length}}
W.fp.prototype={
gm:function(a){return a.length}}
W.fs.prototype={
gm:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.ft.prototype={
i:function(a){return String(a)}}
W.dk.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.an,P.a8]]},
$aw:function(){return[[P.an,P.a8]]},
$id:1,
$ad:function(){return[[P.an,P.a8]]},
$ib:1,
$ab:function(){return[[P.an,P.a8]]},
$aC:function(){return[[P.an,P.a8]]}}
W.dl.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaE(a))+" x "+H.k(this.gay(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$ian)return!1
return a.left===u.gbz(b)&&a.top===u.gbF(b)&&this.gaE(a)===u.gaE(b)&&this.gay(a)===u.gay(b)},
gG:function(a){return W.l6(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(this.gaE(a)),C.j.gG(this.gay(a)))},
gdv:function(a){return a.bottom},
gay:function(a){return a.height},
gbz:function(a){return a.left},
gbE:function(a){return a.right},
gbF:function(a){return a.top},
gaE:function(a){return a.width},
$ian:1,
$aan:function(){return[P.a8]}}
W.fu.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.f]},
$aw:function(){return[P.f]},
$id:1,
$ad:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aC:function(){return[P.f]}}
W.fv.prototype={
gm:function(a){return a.length}}
W.iR.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.l(u,b)
return H.j(u[b],"$iT")},
h:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.j5(this)
return new J.ak(u,u.length,[H.y(u,0)])},
$aw:function(){return[W.T]},
$ad:function(){return[W.T]},
$ab:function(){return[W.T]}}
W.T.prototype={
gim:function(a){return new W.iT(a)},
gdz:function(a){return new W.iR(a,a.children)},
gdB:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aF()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aF()
if(r<0)r=-r*0
return new P.an(u,t,s,r,[P.a8])},
i:function(a){return a.localName},
ae:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kx
if(u==null){u=H.c([],[W.au])
t=new W.dI(u)
C.a.h(u,W.l5(null))
C.a.h(u,W.l7())
$.kx=t
d=t}else d=u
u=$.kw
if(u==null){u=new W.eX(d)
$.kw=u
c=u}else{u.a=d
c=u}}if($.ba==null){u=document
t=u.implementation.createHTMLDocument("")
$.ba=t
$.jQ=t.createRange()
t=$.ba.createElement("base")
H.j(t,"$icb")
t.href=u.baseURI
$.ba.head.appendChild(t)}u=$.ba
if(u.body==null){t=u.createElement("body")
u.body=H.j(t,"$ibp")}u=$.ba
if(!!this.$ibp)s=u.body
else{s=u.createElement(a.tagName)
$.ba.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.U(C.Q,a.tagName)){$.jQ.selectNodeContents(s)
r=$.jQ.createContextualFragment(b)}else{s.innerHTML=b
r=$.ba.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.ba.body
if(s==null?u!=null:s!==u)J.kp(s)
c.cK(r)
document.adoptNode(r)
return r},
is:function(a,b,c){return this.ae(a,b,c,null)},
en:function(a,b){a.textContent=null
a.appendChild(this.ae(a,b,null,null))},
$iT:1,
gec:function(a){return a.tagName}}
W.fz.prototype={
$1:function(a){return!!J.X(H.j(a,"$iE")).$iT},
$S:15}
W.o.prototype={$io:1}
W.e.prototype={
ig:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.eR(a,b,c,!1)},
eR:function(a,b,c,d){return a.addEventListener(b,H.c5(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ie:1}
W.aO.prototype={$iaO:1}
W.fE.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aO]},
$aw:function(){return[W.aO]},
$id:1,
$ad:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aC:function(){return[W.aO]}}
W.fF.prototype={
gm:function(a){return a.length}}
W.fJ.prototype={
gm:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.fO.prototype={
gm:function(a){return a.length}}
W.bS.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$aw:function(){return[W.E]},
$id:1,
$ad:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibS:1,
$aC:function(){return[W.E]}}
W.bx.prototype={$ibx:1,
gdD:function(a){return a.data}}
W.cp.prototype={$icp:1}
W.aT.prototype={$iaT:1}
W.dz.prototype={
i:function(a){return String(a)},
$idz:1}
W.hb.prototype={
gm:function(a){return a.length}}
W.hc.prototype={
j:function(a,b){return P.bj(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.f])
this.N(a,new W.hd(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iQ:1,
$aQ:function(){return[P.f,null]}}
W.hd.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.he.prototype={
j:function(a,b){return P.bj(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.f])
this.N(a,new W.hf(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iQ:1,
$aQ:function(){return[P.f,null]}}
W.hf.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aW.prototype={$iaW:1}
W.hg.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aW]},
$aw:function(){return[W.aW]},
$id:1,
$ad:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aC:function(){return[W.aW]}}
W.aa.prototype={$iaa:1}
W.ai.prototype={
gaG:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.i(P.kT("No elements"))
if(t>1)throw H.i(P.kT("More than one element"))
return u.firstChild},
a6:function(a,b){var u,t,s,r
H.m(b,"$id",[W.E],"$ad")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gR:function(a){var u=this.a.childNodes
return new W.dp(u,u.length,[H.d7(C.S,u,"C",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
$aw:function(){return[W.E]},
$ad:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
iX:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.ep(a):u},
ik:function(a,b){return a.appendChild(b)},
$iE:1}
W.cw.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$aw:function(){return[W.E]},
$id:1,
$ad:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aC:function(){return[W.E]}}
W.aY.prototype={$iaY:1,
gm:function(a){return a.length}}
W.hw.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$id:1,
$ad:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aC:function(){return[W.aY]}}
W.hF.prototype={
j:function(a,b){return P.bj(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.f])
this.N(a,new W.hG(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iQ:1,
$aQ:function(){return[P.f,null]}}
W.hG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hI.prototype={
gm:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.hR.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b_]},
$aw:function(){return[W.b_]},
$id:1,
$ad:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aC:function(){return[W.b_]}}
W.b0.prototype={$ib0:1}
W.hS.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b0]},
$aw:function(){return[W.b0]},
$id:1,
$ad:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aC:function(){return[W.b0]}}
W.b1.prototype={$ib1:1,
gm:function(a){return a.length}}
W.hV.prototype={
j:function(a,b){return a.getItem(H.H(b))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga7:function(a){var u=H.c([],[P.f])
this.N(a,new W.hW(u))
return u},
gm:function(a){return a.length},
$aa9:function(){return[P.f,P.f]},
$iQ:1,
$aQ:function(){return[P.f,P.f]}}
W.hW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:33}
W.aG.prototype={$iaG:1}
W.c_.prototype={}
W.dU.prototype={
ae:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
u=W.lX("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ai(t).a6(0,new W.ai(u))
return t}}
W.i1.prototype={
ae:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.y.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ai(u)
s=u.gaG(u)
s.toString
u=new W.ai(s)
r=u.gaG(u)
t.toString
r.toString
new W.ai(t).a6(0,new W.ai(r))
return t}}
W.i2.prototype={
ae:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.y.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ai(u)
s=u.gaG(u)
t.toString
s.toString
new W.ai(t).a6(0,new W.ai(s))
return t}}
W.cF.prototype={$icF:1}
W.b2.prototype={$ib2:1}
W.aH.prototype={$iaH:1}
W.i4.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aH]},
$aw:function(){return[W.aH]},
$id:1,
$ad:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aC:function(){return[W.aH]}}
W.i5.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b2]},
$aw:function(){return[W.b2]},
$id:1,
$ad:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aC:function(){return[W.b2]}}
W.i9.prototype={
gm:function(a){return a.length}}
W.b4.prototype={$ib4:1}
W.aI.prototype={$iaI:1}
W.id.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b4]},
$aw:function(){return[W.b4]},
$id:1,
$ad:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aC:function(){return[W.b4]}}
W.ie.prototype={
gm:function(a){return a.length}}
W.bE.prototype={}
W.iw.prototype={
i:function(a){return String(a)}}
W.iJ.prototype={
gm:function(a){return a.length}}
W.b7.prototype={
giv:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.aw("deltaY is not supported"))},
giu:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.aw("deltaX is not supported"))},
$ib7:1}
W.cS.prototype={
hm:function(a,b){return a.requestAnimationFrame(H.c5(H.n(b,{func:1,ret:-1,args:[P.a8]}),1))},
f4:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cT.prototype={$icT:1}
W.iS.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.U]},
$aw:function(){return[W.U]},
$id:1,
$ad:function(){return[W.U]},
$ib:1,
$ab:function(){return[W.U]},
$aC:function(){return[W.U]}}
W.ef.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$ian)return!1
return a.left===u.gbz(b)&&a.top===u.gbF(b)&&a.width===u.gaE(b)&&a.height===u.gay(b)},
gG:function(a){return W.l6(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
gay:function(a){return a.height},
gaE:function(a){return a.width}}
W.j5.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aP]},
$aw:function(){return[W.aP]},
$id:1,
$ad:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aC:function(){return[W.aP]}}
W.ey.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$aw:function(){return[W.E]},
$id:1,
$ad:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aC:function(){return[W.E]}}
W.ji.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b1]},
$aw:function(){return[W.b1]},
$id:1,
$ad:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aC:function(){return[W.b1]}}
W.jj.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aG]},
$aw:function(){return[W.aG]},
$id:1,
$ad:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aC:function(){return[W.aG]}}
W.iQ.prototype={
N:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga7(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.B)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga7:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.l(r,t)
s=H.j(r[t],"$icT")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa9:function(){return[P.f,P.f]},
$aQ:function(){return[P.f,P.f]}}
W.iT.prototype={
j:function(a,b){return this.a.getAttribute(H.H(b))},
gm:function(a){return this.ga7(this).length}}
W.iU.prototype={}
W.k3.prototype={}
W.iV.prototype={}
W.iW.prototype={
$1:function(a){return this.a.$1(H.j(a,"$io"))},
$S:28}
W.bF.prototype={
eB:function(a){var u
if($.en.a===0){for(u=0;u<262;++u)$.en.W(0,C.P[u],W.mU())
for(u=0;u<12;++u)$.en.W(0,C.q[u],W.mV())}},
aP:function(a){return $.lH().U(0,W.cl(a))},
aq:function(a,b,c){var u=$.en.j(0,H.k(W.cl(a))+"::"+b)
if(u==null)u=$.en.j(0,"*::"+b)
if(u==null)return!1
return H.k9(u.$4(a,b,c,this))},
$iau:1}
W.C.prototype={
gR:function(a){return new W.dp(a,this.gm(a),[H.d7(this,a,"C",0)])}}
W.dI.prototype={
aP:function(a){return C.a.dt(this.a,new W.hp(a))},
aq:function(a,b,c){return C.a.dt(this.a,new W.ho(a,b,c))},
$iau:1}
W.hp.prototype={
$1:function(a){return H.j(a,"$iau").aP(this.a)},
$S:17}
W.ho.prototype={
$1:function(a){return H.j(a,"$iau").aq(this.a,this.b,this.c)},
$S:17}
W.eG.prototype={
eL:function(a,b,c,d){var u,t,s
this.a.a6(0,c)
u=b.bH(0,new W.jg())
t=b.bH(0,new W.jh())
this.b.a6(0,u)
s=this.c
s.a6(0,C.R)
s.a6(0,t)},
aP:function(a){return this.a.U(0,W.cl(a))},
aq:function(a,b,c){var u=this,t=W.cl(a),s=u.c
if(s.U(0,H.k(t)+"::"+b))return u.d.ij(c)
else if(s.U(0,"*::"+b))return u.d.ij(c)
else{s=u.b
if(s.U(0,H.k(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.k(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iau:1}
W.jg.prototype={
$1:function(a){return!C.a.U(C.q,H.H(a))},
$S:18}
W.jh.prototype={
$1:function(a){return C.a.U(C.q,H.H(a))},
$S:18}
W.jl.prototype={
aq:function(a,b,c){if(this.eu(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.jm.prototype={
$1:function(a){return"TEMPLATE::"+H.k(H.H(a))},
$S:39}
W.jk.prototype={
aP:function(a){var u=J.X(a)
if(!!u.$icz)return!1
u=!!u.$ip
if(u&&W.cl(a)==="foreignObject")return!1
if(u)return!0
return!1},
aq:function(a,b,c){if(b==="is"||C.i.bJ(b,"on"))return!1
return this.aP(a)},
$iau:1}
W.dp.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd9(J.lJ(u.a,t))
u.c=t
return!0}u.sd9(null)
u.c=s
return!1},
gE:function(a){return this.d},
sd9:function(a){this.d=H.G(a,H.y(this,0))},
$iaQ:1}
W.au.prototype={}
W.je.prototype={$inz:1}
W.eX.prototype={
cK:function(a){new W.jq(this).$2(a,null)},
aZ:function(a,b){if(b==null)J.kp(a)
else b.removeChild(a)},
hr:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lM(a)
n=o.a.getAttribute("is")
H.j(a,"$iT")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.z(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ay(r)}t="element unprintable"
try{t=J.ar(a)}catch(r){H.ay(r)}try{s=W.cl(a)
this.hq(H.j(a,"$iT"),b,p,t,s,H.j(o,"$iQ"),H.H(n))}catch(r){if(H.ay(r) instanceof P.aE)throw r
else{this.aZ(a,b)
window
q="Removing corrupted element "+H.k(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hq:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aZ(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aP(a)){o.aZ(a,b)
window
u="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aq(a,"is",g)){o.aZ(a,b)
window
u="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga7(f)
t=H.c(u.slice(0),[H.y(u,0)])
for(s=f.ga7(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.l(t,s)
r=t[s]
q=o.a
p=J.lO(r)
H.H(r)
if(!q.aq(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.k(e)+" "+r+'="'+H.k(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.X(a).$icF)o.cK(a.content)},
$ink:1}
W.jq.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hr(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aZ(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ay(s)
r=H.j(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.j(t,"$iE")}},
$S:42}
W.ee.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eM.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.eS.prototype={}
W.eT.prototype={}
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
P.eW.prototype={$ibx:1,
gdD:function(a){return this.a}}
P.jx.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.fG.prototype={
gbT:function(){var u=this.b,t=H.aj(u,"w",0),s=W.T
return new H.h3(new H.cR(u,H.n(new P.fH(),{func:1,ret:P.O,args:[t]}),[t]),H.n(new P.fI(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.bL(this.gbT().a)},
j:function(a,b){var u=this.gbT()
return u.b.$1(J.jK(u.a,b))},
gR:function(a){var u=P.kC(this.gbT(),!1,W.T)
return new J.ak(u,u.length,[H.y(u,0)])},
$aw:function(){return[W.T]},
$ad:function(){return[W.T]},
$ab:function(){return[W.T]}}
P.fH.prototype={
$1:function(a){return!!J.X(H.j(a,"$iE")).$iT},
$S:15}
P.fI.prototype={
$1:function(a){return H.h(H.j(a,"$iE"),"$iT")},
$S:29}
P.j9.prototype={
gbE:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.F(t)
return H.G(u+t,H.y(this,0))},
gdv:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.F(t)
return H.G(u+t,H.y(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.k(u.a)+", "+H.k(u.b)+") "+H.k(u.c)+" x "+H.k(u.d)},
t:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.X(b)
if(!!u.$ian){t=p.a
if(t==u.gbz(b)){s=p.b
if(s==u.gbF(b)){r=p.c
if(typeof t!=="number")return t.F()
if(typeof r!=="number")return H.F(r)
q=H.y(p,0)
if(H.G(t+r,q)===u.gbE(b)){t=p.d
if(typeof s!=="number")return s.F()
if(typeof t!=="number")return H.F(t)
u=H.G(s+t,q)===u.gdv(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.bJ(s),q=t.b,p=J.bJ(q),o=t.c
if(typeof s!=="number")return s.F()
if(typeof o!=="number")return H.F(o)
u=H.y(t,0)
o=C.h.gG(H.G(s+o,u))
s=t.d
if(typeof q!=="number")return q.F()
if(typeof s!=="number")return H.F(s)
u=C.h.gG(H.G(q+s,u))
return P.mv(P.j7(P.j7(P.j7(P.j7(0,r),p),o),u))}}
P.an.prototype={
gbz:function(a){return this.a},
gbF:function(a){return this.b},
gaE:function(a){return this.c},
gay:function(a){return this.d}}
P.bb.prototype={$ibb:1}
P.fX.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bb]},
$id:1,
$ad:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aC:function(){return[P.bb]}}
P.be.prototype={$ibe:1}
P.hr.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.be]},
$id:1,
$ad:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aC:function(){return[P.be]}}
P.hy.prototype={
gm:function(a){return a.length}}
P.cz.prototype={$icz:1}
P.i0.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.f]},
$id:1,
$ad:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aC:function(){return[P.f]}}
P.p.prototype={
gdz:function(a){return new P.fG(a,new W.ai(a))},
ae:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.au])
C.a.h(p,W.l5(null))
C.a.h(p,W.l7())
C.a.h(p,new W.jk())
c=new W.eX(new W.dI(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).is(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ai(s)
q=p.gaG(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bi.prototype={$ibi:1}
P.ig.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bi]},
$id:1,
$ad:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$aC:function(){return[P.bi]}}
P.eq.prototype={}
P.er.prototype={}
P.eB.prototype={}
P.eC.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.fc.prototype={
gm:function(a){return a.length}}
P.fd.prototype={
j:function(a,b){return P.bj(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.f])
this.N(a,new P.fe(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iQ:1,
$aQ:function(){return[P.f,null]}}
P.fe.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.ff.prototype={
gm:function(a){return a.length}}
P.bM.prototype={}
P.hs.prototype={
gm:function(a){return a.length}}
P.ed.prototype={}
P.dd.prototype={$idd:1}
P.dM.prototype={$idM:1}
P.bZ.prototype={
j2:function(a,b,c,d,e,f,g){var u,t=J.X(g)
if(!!t.$ibx)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mN(g))
return}if(!!t.$icp)t=!0
else t=!1
if(t){this.hF(a,b,c,d,e,f,g)
return}throw H.i(P.lP("Incorrect number or type of arguments"))},
hF:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
H:function(a,b,c){return a.uniform1f(b,c)},
a0:function(a,b,c){return a.uniform1i(b,c)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eg:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eh:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibZ:1}
P.dO.prototype={$idO:1}
P.dV.prototype={$idV:1}
P.e2.prototype={$ie2:1}
P.hT.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return P.bj(a.item(b))},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.Q,,,]]},
$id:1,
$ad:function(){return[[P.Q,,,]]},
$ib:1,
$ab:function(){return[[P.Q,,,]]},
$aC:function(){return[[P.Q,,,]]}}
P.eJ.prototype={}
P.eK.prototype={}
O.a1.prototype={
bc:function(a){var u=this
u.sff(H.c([],[a]))
u.sdf(null)
u.sda(null)
u.sdg(null)},
cL:function(a,b,c){var u=this,t=H.aj(u,"a1",0)
H.n(b,{func:1,ret:P.O,args:[[P.d,t]]})
t={func:1,ret:-1,args:[P.D,[P.d,t]]}
H.n(a,t)
H.n(c,t)
u.sdf(b)
u.sda(a)
u.sdg(c)},
aT:function(a,b){return this.cL(a,null,b)},
de:function(a){var u
H.m(a,"$id",[H.aj(this,"a1",0)],"$ad")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cR:function(a,b){var u
H.m(b,"$id",[H.aj(this,"a1",0)],"$ad")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.ak(u,u.length,[H.y(u,0)])},
D:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aj(s,"a1",0)
H.G(b,r)
r=[r]
if(H.z(s.de(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cR(t,H.c([b],r))}},
a6:function(a,b){var u,t,s=this
H.m(b,"$id",[H.aj(s,"a1",0)],"$ad")
if(H.z(s.de(b))){u=s.a
t=u.length
C.a.a6(u,b)
s.cR(t,b)}},
sff:function(a){this.a=H.m(a,"$ib",[H.aj(this,"a1",0)],"$ab")},
sdf:function(a){this.b=H.n(a,{func:1,ret:P.O,args:[[P.d,H.aj(this,"a1",0)]]})},
sda:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.D,[P.d,H.aj(this,"a1",0)]]})},
sdg:function(a){H.n(a,{func:1,ret:-1,args:[P.D,[P.d,H.aj(this,"a1",0)]]})},
$id:1}
O.cs.prototype={
gm:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.L():u},
aH:function(){var u=this.b
if(u!=null)u.A(null)},
ga_:function(a){var u=this.a
if(u.length>0)return C.a.gby(u)
else return V.bV()},
bD:function(a){var u=this.a
if(a==null)C.a.h(u,V.bV())
else C.a.h(u,a)
this.aH()},
aA:function(){var u=this.a
if(u.length>0){u.pop()
this.aH()}},
sbV:function(a){this.a=H.m(a,"$ib",[V.al],"$ab")}}
E.fg.prototype={}
E.af.prototype={
sbI:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().S(0,s.ge6())
u=s.c
if(u!=null)u.gp().h(0,s.ge6())
t=new D.J("shape",r,s.c,[F.dP])
t.b=!0
s.bB(t)}},
am:function(a,b){var u
for(u=this.y.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();)u.d.am(0,b)},
aa:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga_(s))
s.aH()
a.cF(t.f)
s=a.dy
u=(s&&C.a).gby(s)
if(u!=null&&t.d!=null)u.e9(a,t)
for(s=t.y.a,s=new J.ak(s,s.length,[H.y(s,0)]);s.u();)s.d.aa(a)
a.cE()
a.dx.aA()},
gp:function(){var u=this.z
return u==null?this.z=D.L():u},
bB:function(a){var u=this.z
if(u!=null)u.A(a)},
a3:function(){return this.bB(null)},
e7:function(a){H.j(a,"$ix")
this.e=null
this.bB(a)},
iO:function(){return this.e7(null)},
e5:function(a){this.bB(H.j(a,"$ix"))},
iL:function(){return this.e5(null)},
iK:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$id",[E.af],"$ad")
for(u=b.length,t=this.ge4(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bQ()
o.sac(null)
o.saN(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
iN:function(a,b){var u,t
H.m(b,"$id",[E.af],"$ad")
for(u=b.gR(b),t=this.ge4();u.u();)u.gE(u).gp().S(0,t)
this.a3()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seA:function(a,b){this.y=H.m(b,"$ia1",[E.af],"$aa1")},
$iaX:1}
E.hB.prototype={
ex:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.az(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cs()
t=[V.al]
u.sbV(H.c([],t))
u.b=null
u.gp().h(0,new E.hC(s))
s.cy=u
u=new O.cs()
u.sbV(H.c([],t))
u.b=null
u.gp().h(0,new E.hD(s))
s.db=u
u=new O.cs()
u.sbV(H.c([],t))
u.b=null
u.gp().h(0,new E.hE(s))
s.dx=u
s.shE(H.c([],[O.bD]))
u=s.dy;(u&&C.a).h(u,null)
s.shA(new H.aS([P.f,A.cA]))},
giW:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga_(s)
u=t.db
u=t.z=s.w(0,u.ga_(u))
s=u}return s},
cF:function(a){var u=this.dy,t=a==null?(u&&C.a).gby(u):a;(u&&C.a).h(u,t)},
cE:function(){var u=this.dy
if(u.length>1)u.pop()},
ds:function(a){var u=a.b
if(u.length===0)throw H.i(P.r("May not cache a shader with no name."))
if(this.fr.dC(0,u))throw H.i(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.W(0,u,a)},
shE:function(a){this.dy=H.m(a,"$ib",[O.bD],"$ab")},
shA:function(a){this.fr=H.m(a,"$iQ",[P.f,A.cA],"$aQ")}}
E.hC.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.ch=u.z=null},
$S:7}
E.hD.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:7}
E.hE.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.cx=u.ch=null},
$S:7}
E.dZ.prototype={
cU:function(a){H.j(a,"$ix")
this.ea()},
cT:function(){return this.cU(null)},
giA:function(){var u,t=this,s=Date.now(),r=C.h.a2(P.kv(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.az(s,!1)
return u/r},
dj:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.w()
if(typeof r!=="number")return H.F(r)
u=C.j.cs(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.w()
t=C.j.cs(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kW(C.n,s.giZ())}},
ea:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.i8(this),{func:1,ret:-1,args:[P.a8]})
C.A.f4(u)
C.A.hm(u,W.le(t,P.a8))}},
iY:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dj()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
s.y=P.kv(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aH()
r=s.db
C.a.sm(r.a,0)
r.aH()
r=s.dx
C.a.sm(r.a,0)
r.aH()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.aa(p.e)}s=p.z
if(s!=null)s.A(null)}catch(q){u=H.ay(q)
t=H.c7(q)
P.kl("Error: "+H.k(u))
P.kl("Stack: "+H.k(t))
throw H.i(u)}}}
E.i8.prototype={
$1:function(a){var u
H.n4(a)
u=this.a
if(u.ch){u.ch=!1
u.iY()}},
$S:34}
Z.ea.prototype={$ine:1}
Z.de.prototype={
Z:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ay(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.k(u))
throw H.i(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.k(u.e)+"]"}}
Z.eb.prototype={$inf:1}
Z.ce.prototype={
ax:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
Z:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].Z(a)},
aD:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aa:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.l(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ar(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
sfb:function(a){this.b=H.m(a,"$ib",[Z.by],"$ab")},
$inm:1}
Z.by.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bX(this.c)+"'")+"]"}}
Z.b6.prototype={
gcN:function(a){var u=this.a,t=(u&$.aK().a)!==0?3:0
if((u&$.bm().a)!==0)t+=3
if((u&$.bl().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=2
if((u&$.bo().a)!==0)t+=3
if((u&$.d8().a)!==0)t+=3
if((u&$.d9().a)!==0)t+=4
if((u&$.ca().a)!==0)++t
return(u&$.bk().a)!==0?t+4:t},
il:function(a){var u,t=$.aK(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ca()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0)if(u===a)return t
return $.lG()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b6))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.f]),t=this.a
if((t&$.aK().a)!==0)C.a.h(u,"Pos")
if((t&$.bm().a)!==0)C.a.h(u,"Norm")
if((t&$.bl().a)!==0)C.a.h(u,"Binm")
if((t&$.bn().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bo().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d8().a)!==0)C.a.h(u,"Clr3")
if((t&$.d9().a)!==0)C.a.h(u,"Clr4")
if((t&$.ca().a)!==0)C.a.h(u,"Weight")
if((t&$.bk().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.fj.prototype={}
D.bQ.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.n(b,u)
if(this.a==null)this.sac(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
S:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.x]})
u=s.a
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.a
t=(u&&C.a).S(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.b
t=(u&&C.a).S(u,b)||t}return t},
A:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.x()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.N(P.kC(u,!0,{func:1,ret:-1,args:[D.x]}),new D.fC(q))
u=r.b
if(u!=null){r.saN(H.c([],[{func:1,ret:-1,args:[D.x]}]))
C.a.N(u,new D.fD(q))}return!0},
iw:function(){return this.A(null)},
aC:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.A(u)}}},
sac:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
saN:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.fC.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.fD.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.x.prototype={}
D.bz.prototype={}
D.bA.prototype={}
D.J.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.df.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.df))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.dv.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dv))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.fW.prototype={
iT:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iP:function(a){this.c=a.b
this.d.S(0,a.a)
return!1},
shi:function(a){this.d=H.m(a,"$ikS",[P.D],"$akS")}}
X.dA.prototype={}
X.h0.prototype={
aW:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.w()
u=b.b
t=q.ch
if(typeof u!=="number")return u.w()
s=new V.a5(o.a+n*m,o.b+u*t)
t=q.a.gaQ()
r=new X.bd(a,V.bf(),q.x,t,s)
r.b=!0
q.z=new P.az(p,!1)
q.x=s
return r},
cD:function(a,b){this.r=a.a
return!1},
b3:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.em()
if(typeof u!=="number")return u.ei()
this.r=(u&~t)>>>0
return!1},
b2:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.aW(a,b))
return!0},
iU:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaQ()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.w()
q=a.b
p=o.cy
if(typeof q!=="number")return q.w()
t=new X.ct(new V.V(s*r,q*p),u,t)
t.b=!0
n.A(t)
return!0},
fR:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dA(c,r.a.gaQ(),b)
s.b=!0
t.A(s)
r.y=new P.az(u,!1)
r.x=V.bf()}}
X.at.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.at))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.z(this.b)?"Alt+":""
return u+(H.z(this.c)?"Shift+":"")}}
X.bd.prototype={}
X.hh.prototype={
bR:function(a,b,c){var u=this,t=new P.az(Date.now(),!1),s=u.a.gaQ(),r=new X.bd(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cD:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.A(this.bR(a,b,!0))
return!0},
b3:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.em()
if(typeof t!=="number")return t.ei()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.A(u.bR(a,b,!0))
return!0},
b2:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.bR(a,b,!1))
return!0},
iV:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaQ()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.w()
r=a.b
q=p.ch
if(typeof r!=="number")return r.w()
u=new X.ct(new V.V(t*s,r*q),u,b)
u.b=!0
o.A(u)
return!0},
gdF:function(){var u=this.b
return u==null?this.b=D.L():u},
gbG:function(){var u=this.c
return u==null?this.c=D.L():u},
ge3:function(){var u=this.d
return u==null?this.d=D.L():u}}
X.ct.prototype={}
X.hx.prototype={}
X.e0.prototype={}
X.ic.prototype={
aW:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.a5],"$ab")
u=new P.az(Date.now(),!1)
t=a.length>0?a[0]:V.bf()
s=q.a.gaQ()
r=new X.e0(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iS:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.b
if(u==null)return!1
u.A(this.aW(a,!0))
return!0},
iQ:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.c
if(u==null)return!1
u.A(this.aW(a,!0))
return!0},
iR:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.d
if(u==null)return!1
u.A(this.aW(a,!1))
return!0}}
X.e5.prototype={
gaQ:function(){var u=this.a,t=C.l.gdB(u).c
t.toString
u=C.l.gdB(u).d
u.toString
return V.kQ(0,0,t,u)},
d5:function(a){var u=a.keyCode,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.dv(u,new X.at(t,a.altKey,a.shiftKey))},
aO:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.at(t,a.altKey,a.shiftKey)},
c9:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.at(t,a.altKey,a.shiftKey)},
av:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.I()
u=t.top
if(typeof r!=="number")return r.I()
return new V.a5(s-q,r-u)},
aY:function(a){return new V.V(a.movementX,a.movementY)},
c5:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a5])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
q=C.j.al(r.pageX)
C.j.al(r.pageY)
p=o.left
C.j.al(r.pageX)
C.a.h(n,new V.a5(q-p,C.j.al(r.pageY)-o.top))}return n},
at:function(a){var u=a.buttons,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.df(u,new X.at(t,a.altKey,a.shiftKey))},
bW:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.I()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.I()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fL:function(a){this.f=!0},
fz:function(a){this.f=!1},
fF:function(a){H.j(a,"$iaa")
if(H.z(this.f)&&this.bW(a))a.preventDefault()},
fP:function(a){var u
H.j(a,"$iaT")
if(!H.z(this.f))return
u=this.d5(a)
this.b.iT(u)},
fN:function(a){var u
H.j(a,"$iaT")
if(!H.z(this.f))return
u=this.d5(a)
this.b.iP(u)},
fT:function(a){var u,t,s,r,q=this
H.j(a,"$iaa")
u=q.a
u.focus()
q.f=!0
q.aO(a)
if(H.z(q.x)){t=q.at(a)
s=q.aY(a)
if(q.d.cD(t,s))a.preventDefault()
return}if(H.z(q.r)){q.y=a
u.requestPointerLock()
return}t=q.at(a)
r=q.av(a)
if(q.c.cD(t,r))a.preventDefault()},
fX:function(a){var u,t,s,r=this
H.j(a,"$iaa")
r.aO(a)
u=r.at(a)
if(H.z(r.x)){t=r.aY(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.av(a)
if(r.c.b3(u,s))a.preventDefault()},
fJ:function(a){var u,t,s,r=this
H.j(a,"$iaa")
if(!r.bW(a)){r.aO(a)
u=r.at(a)
if(H.z(r.x)){t=r.aY(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.av(a)
if(r.c.b3(u,s))a.preventDefault()}},
fV:function(a){var u,t,s,r=this
H.j(a,"$iaa")
r.aO(a)
u=r.at(a)
if(H.z(r.x)){t=r.aY(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.av(a)
if(r.c.b2(u,s))a.preventDefault()},
fH:function(a){var u,t,s,r=this
H.j(a,"$iaa")
if(!r.bW(a)){r.aO(a)
u=r.at(a)
if(H.z(r.x)){t=r.aY(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.av(a)
if(r.c.b2(u,s))a.preventDefault()}},
fZ:function(a){var u,t,s=this
H.j(a,"$ib7")
s.aO(a)
u=new V.V((a&&C.z).giu(a),C.z.giv(a)).v(0,180)
if(H.z(s.x)){if(s.d.iU(u))a.preventDefault()
return}if(H.z(s.r))return
t=s.av(a)
if(s.c.iV(u,t))a.preventDefault()},
h0:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.at(s.y)
t=s.av(s.y)
s.d.fR(u,t,r)}},
hg:function(a){var u,t=this
H.j(a,"$iaI")
t.a.focus()
t.f=!0
t.c9(a)
u=t.c5(a)
if(t.e.iS(u))a.preventDefault()},
hc:function(a){var u
H.j(a,"$iaI")
this.c9(a)
u=this.c5(a)
if(this.e.iQ(u))a.preventDefault()},
he:function(a){var u
H.j(a,"$iaI")
this.c9(a)
u=this.c5(a)
if(this.e.iR(u))a.preventDefault()},
sf5:function(a){this.z=H.m(a,"$ib",[[P.cD,P.S]],"$ab")}}
D.bt.prototype={
gp:function(){var u=this.d
return u==null?this.d=D.L():u},
as:function(a){var u
H.j(a,"$ix")
u=this.d
if(u!=null)u.A(a)},
eE:function(){return this.as(null)},
$ia3:1,
$iaX:1}
D.a3.prototype={$iaX:1}
D.dw.prototype={
gp:function(){var u=this.Q
return u==null?this.Q=D.L():u},
as:function(a){var u=this.Q
if(u!=null)u.A(a)},
dd:function(a){var u
H.j(a,"$ix")
u=this.ch
if(u!=null)u.A(a)},
fQ:function(){return this.dd(null)},
h2:function(a){var u,t,s
H.m(a,"$id",[D.a3],"$ad")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.B)(a),++t){s=a[t]
if(s==null||this.eC(s))return!1}return!0},
fq:function(a,b){var u,t,s,r,q,p,o,n=D.a3
H.m(b,"$id",[n],"$ad")
for(u=b.length,t=this.gdc(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=H.j(b[q],"$ia3")
if(p instanceof D.bt)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bQ()
o.sac(null)
o.saN(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bz([n])
n.b=!0
this.as(n)},
h6:function(a,b){var u,t,s,r=D.a3
H.m(b,"$id",[r],"$ad")
for(u=b.gR(b),t=this.gdc();u.u();){s=u.gE(u)
C.a.S(this.e,s)
s.gp().S(0,t)}r=new D.bA([r])
r.b=!0
this.as(r)},
eC:function(a){var u=C.a.U(this.e,a)
return u},
sf3:function(a){this.e=H.m(a,"$ib",[D.bt],"$ab")},
shh:function(a){this.f=H.m(a,"$ib",[D.dL],"$ab")},
shC:function(a){this.r=H.m(a,"$ib",[D.dS],"$ab")},
shO:function(a){this.x=H.m(a,"$ib",[D.dW],"$ab")},
shP:function(a){this.y=H.m(a,"$ib",[D.dX],"$ab")},
shQ:function(a){this.z=H.m(a,"$ib",[D.dY],"$ab")},
$ad:function(){return[D.a3]},
$aa1:function(){return[D.a3]}}
D.dL.prototype={$ia3:1,$iaX:1}
D.dS.prototype={$ia3:1,$iaX:1}
D.dW.prototype={$ia3:1,$iaX:1}
D.dX.prototype={$ia3:1,$iaX:1}
D.dY.prototype={$ia3:1,$iaX:1}
V.a2.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.aF.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aF))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.fB.prototype={}
V.dE.prototype={
ab:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.A])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dE))return!1
u=b.a
t=$.P().a
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
i:function(a){var u,t,s,r,q=this,p=[P.A],o=V.c6(H.c([q.a,q.d,q.r],p),3,0),n=V.c6(H.c([q.b,q.e,q.x],p),3,0),m=V.c6(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.l(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.l(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.l(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.l(o,1)
r=" "+o[1]+", "
if(1>=t)return H.l(n,1)
r=r+n[1]+", "
if(1>=s)return H.l(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.l(o,2)
p=" "+o[2]+", "
if(2>=t)return H.l(n,2)
p=p+n[2]+", "
if(2>=s)return H.l(m,2)
return r+(p+m[2]+"]")}}
V.al.prototype={
ab:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.A])
return t},
cu:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.P().a)return V.bV()
u=1/b1
t=-n
s=-a0
return V.aV((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
w:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aV(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cH:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.R(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b8:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ag(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.P().a
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
i:function(a){return this.K()},
B:function(a){var u,t,s,r,q,p=this,o=[P.A],n=V.c6(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.c6(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.c6(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.c6(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.l(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.l(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.l(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.l(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.l(n,1)
q=q+n[1]+", "
if(1>=t)return H.l(m,1)
q=q+m[1]+", "
if(1>=s)return H.l(l,1)
q=q+l[1]+", "
if(1>=r)return H.l(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.l(n,2)
u=u+n[2]+", "
if(2>=t)return H.l(m,2)
u=u+m[2]+", "
if(2>=s)return H.l(l,2)
u=u+l[2]+", "
if(2>=r)return H.l(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.l(n,3)
q=q+n[3]+", "
if(3>=t)return H.l(m,3)
q=q+m[3]+", "
if(3>=s)return H.l(l,3)
q=q+l[3]+", "
if(3>=r)return H.l(k,3)
return u+(q+k[3]+"]")},
K:function(){return this.B("")}}
V.a5.prototype={
I:function(a,b){return new V.a5(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.ag.prototype={
I:function(a,b){return new V.ag(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.bg.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bg))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.dN.prototype={
ga9:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dN))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.V.prototype={
cv:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
w:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.w()
u=this.b
if(typeof u!=="number")return u.w()
return new V.V(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.l_
return u==null?$.l_=new V.V(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.V(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.R.prototype={
cv:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cw:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.R(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b1:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.R(u*t-s*r,s*q-p*t,p*r-u*q)},
F:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.R(-this.a,-this.b,-this.c)},
v:function(a,b){if(Math.abs(b-0)<$.P().a)return V.e9()
return new V.R(this.a/b,this.b/b,this.c/b)},
e1:function(){var u=$.P().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
U.fk.prototype={
bM:function(a){var u=V.nd(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.L():u},
M:function(a){var u=this.y
if(u!=null)u.A(a)},
scI:function(a,b){},
scA:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.P().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bM(u)}s=new D.J("maximumLocation",s,t.b,[P.A])
s.b=!0
t.M(s)}},
scC:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.P().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bM(u)}s=new D.J("minimumLocation",s,t.c,[P.A])
s.b=!0
t.M(s)}},
sa8:function(a,b){var u,t=this
b=t.bM(b)
u=t.d
if(!(Math.abs(u-b)<$.P().a)){t.d=b
u=new D.J("location",u,b,[P.A])
u.b=!0
t.M(u)}},
scB:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.P().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.J("maximumVelocity",r,a,[P.A])
r.b=!0
s.M(r)}},
sT:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.P().a)){u.f=a
t=new D.J("velocity",t,a,[P.A])
t.b=!0
u.M(t)}},
sck:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.P().a)){this.x=a
u=new D.J("dampening",u,a,[P.A])
u.b=!0
this.M(u)}},
am:function(a,b){var u,t,s,r=this,q=r.f,p=$.P().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa8(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.P().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sT(u)}}}
U.dh.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.L():u},
aS:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dh))return!1
return J.a6(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.co.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.L():u},
M:function(a){var u
H.j(a,"$ix")
u=this.e
if(u!=null)u.A(a)},
a4:function(){return this.M(null)},
fo:function(a,b){var u,t,s,r,q,p,o,n=U.ab
H.m(b,"$id",[n],"$ad")
for(u=b.length,t=this.gaI(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.M(n)},
h4:function(a,b){var u,t,s=U.ab
H.m(b,"$id",[s],"$ad")
for(u=b.gR(b),t=this.gaI();u.u();)u.gE(u).gp().S(0,t)
s=new D.bA([s])
s.b=!0
this.M(s)},
aS:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aF()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ak(r,r.length,[H.y(r,0)]),u=null;r.u();){q=r.d
if(q!=null){t=q.aS(0,b,c)
if(t!=null)u=u==null?t:t.w(0,u)}}s.f=u==null?V.bV():u
r=s.e
if(r!=null)r.aC(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.co))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.l(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.l(r,t)
if(!J.a6(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ad:function(){return[U.ab]},
$aa1:function(){return[U.ab]},
$iab:1}
U.ab.prototype={}
U.e6.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.L():u},
M:function(a){var u
H.j(a,"$ix")
u=this.cy
if(u!=null)u.A(a)},
a4:function(){return this.M(null)},
b_:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdF().h(0,u.gbX())
u.a.c.ge3().h(0,u.gbZ())
u.a.c.gbG().h(0,u.gc0())
return!0},
bY:function(a){var u=this
H.j(a,"$ix")
if(!J.a6(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
c_:function(a){var u,t,s,r,q,p,o,n=this
a=H.h(H.j(a,"$ix"),"$ibd")
if(!H.z(n.y))return
if(H.z(n.x)){u=a.d.I(0,a.y)
u=new V.V(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.z(n.d)){u=a.c
t=a.d.I(0,a.y)
u=new V.V(t.a,t.b).w(0,2).v(0,u.ga9())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.w()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sT(u*10*s)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=new V.V(s.a,s.b).w(0,2).v(0,u.ga9())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sa8(0,-q*p+o)
n.b.sT(0)
t=t.I(0,a.z)
n.Q=new V.V(t.a,t.b).w(0,2).v(0,u.ga9())}n.a4()},
c1:function(a){var u,t,s,r=this
H.j(a,"$ix")
if(!H.z(r.y))return
r.y=!1
if(H.z(r.x))return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.w()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sT(t*10*s)
r.a4()}},
aS:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.aF()
if(q<p){r.ch=p
u=b.y
r.b.am(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aV(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iab:1}
U.e7.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.L():u},
M:function(a){var u
H.j(a,"$ix")
u=this.fx
if(u!=null)u.A(a)},
a4:function(){return this.M(null)},
b_:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdF().h(0,s.gbX())
s.a.c.ge3().h(0,s.gbZ())
s.a.c.gbG().h(0,s.gc0())
u=s.a.d
t=u.f
u=t==null?u.f=D.L():t
u.h(0,s.gfg())
u=s.a.d
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.gfi())
u=s.a.e
t=u.b
u=t==null?u.b=D.L():t
u.h(0,s.ghL())
u=s.a.e
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.ghJ())
u=s.a.e
t=u.c
u=t==null?u.c=D.L():t
u.h(0,s.ghH())
return!0},
ao:function(a){var u=a.a,t=a.b
if(H.z(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.z(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.V(u,t)},
bY:function(a){var u=this
a=H.h(H.j(a,"$ix"),"$ibd")
if(!J.a6(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
c_:function(a){var u,t,s,r,q,p,o,n=this
a=H.h(H.j(a,"$ix"),"$ibd")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.I(0,a.y)
u=new V.V(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.I(0,a.y)
u=n.ao(new V.V(t.a,t.b).w(0,2).v(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=n.ao(new V.V(s.a,s.b).w(0,2).v(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa8(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.I(0,a.z)
n.dx=n.ao(new V.V(t.a,t.b).w(0,2).v(0,u.ga9()))}n.a4()},
c1:function(a){var u,t,s,r=this
H.j(a,"$ix")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sT(-t*10*u)
r.a4()}},
fh:function(a){var u=this
if(H.h(H.j(a,"$ix"),"$idA").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fj:function(a){var u,t,s,r,q,p,o,n=this
a=H.h(H.j(a,"$ix"),"$ibd")
if(!J.a6(n.d,a.x.b))return
u=a.c
t=a.d
s=t.I(0,a.y)
r=n.ao(new V.V(s.a,s.b).w(0,2).v(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa8(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.I(0,a.z)
n.dx=n.ao(new V.V(t.a,t.b).w(0,2).v(0,u.ga9()))
n.a4()},
hM:function(a){var u=this
H.j(a,"$ix")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hK:function(a){var u,t,s,r,q,p,o,n=this
a=H.h(H.j(a,"$ix"),"$ie0")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.I(0,a.y)
u=new V.V(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.I(0,a.y)
u=n.ao(new V.V(t.a,t.b).w(0,2).v(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=n.ao(new V.V(s.a,s.b).w(0,2).v(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa8(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.I(0,a.z)
n.dx=n.ao(new V.V(t.a,t.b).w(0,2).v(0,u.ga9()))}n.a4()},
hI:function(a){var u,t,s,r=this
H.j(a,"$ix")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sT(-t*10*u)
r.a4()}},
aS:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.aF()
if(q<p){r.dy=p
u=b.y
r.c.am(0,u)
r.b.am(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aV(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.w(0,V.aV(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iab:1}
U.e8.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.L():u},
M:function(a){var u=this.r
if(u!=null)u.A(a)},
b_:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.L():t
t=r.gfl()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.L():s).h(0,t)
return!0},
fm:function(a){var u,t,s,r,q=this
H.j(a,"$ix")
if(!J.a6(q.b,q.a.b.c))return
H.h(a,"$ict")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.w()
r=u+t*s
if(u!==r){q.d=r
u=new D.J("zoom",u,r,[P.A])
u.b=!0
q.M(u)}},
aS:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aV(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iab:1}
M.dg.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.L():u},
Y:function(a){var u
H.j(a,"$ix")
u=this.f
if(u!=null)u.A(a)},
aU:function(){return this.Y(null)},
h8:function(a,b){var u,t,s,r,q,p,o,n=M.av
H.m(b,"$id",[n],"$ad")
for(u=b.length,t=this.gX(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.Y(n)},
ha:function(a,b){var u,t,s=M.av
H.m(b,"$id",[s],"$ad")
for(u=b.gR(b),t=this.gX();u.u();)u.gE(u).gp().S(0,t)
s=new D.bA([s])
s.b=!0
this.Y(s)},
aa:function(a){var u,t,s=this
if(s.e)return
s.e=!0
for(u=s.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();){t=u.d
if(t!=null)t.aa(a)}s.e=!1},
$ad:function(){return[M.av]},
$aa1:function(){return[M.av]},
$iav:1}
M.di.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.L():u},
Y:function(a){var u
H.j(a,"$ix")
u=this.f
if(u!=null)u.A(a)},
aU:function(){return this.Y(null)},
sb0:function(a){var u,t,s=this
if(a==null)a=new X.fR()
u=s.a
if(u!==a){if(u!=null)u.gp().S(0,s.gX())
t=s.a
s.a=a
a.gp().h(0,s.gX())
u=new D.J("camera",t,s.a,[X.bN])
u.b=!0
s.Y(u)}},
sb5:function(a,b){var u,t,s=this
if(b==null)b=X.jR(null)
u=s.b
if(u!==b){if(u!=null)u.gp().S(0,s.gX())
t=s.b
s.b=b
b.gp().h(0,s.gX())
u=new D.J("target",t,s.b,[X.cE])
u.b=!0
s.Y(u)}},
sb6:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gp().S(0,t.gX())
u=t.c
t.c=a
if(a!=null)a.gp().h(0,t.gX())
s=new D.J("technique",u,t.c,[O.bD])
s.b=!0
t.Y(s)}},
aa:function(a){var u=this
a.cF(u.c)
u.b.Z(a)
u.a.Z(a)
u.d.am(0,a)
u.d.aa(a)
u.a.aD(a)
u.b.toString
a.cE()},
$iav:1}
M.dm.prototype={
Y:function(a){var u
H.j(a,"$ix")
u=this.x
if(u!=null)u.A(a)},
aU:function(){return this.Y(null)},
fB:function(a,b){var u,t,s,r,q,p,o,n=E.af
H.m(b,"$id",[n],"$ad")
for(u=b.length,t=this.gX(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bQ()
o.sac(null)
o.saN(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.Y(n)},
fD:function(a,b){var u,t,s=E.af
H.m(b,"$id",[s],"$ad")
for(u=b.gR(b),t=this.gX();u.u();)u.gE(u).gp().S(0,t)
s=new D.bA([s])
s.b=!0
this.Y(s)},
sb0:function(a){var u,t,s=this
if(a==null)a=X.kI(null)
u=s.a
if(u!==a){if(u!=null)u.gp().S(0,s.gX())
t=s.a
s.a=a
a.gp().h(0,s.gX())
u=new D.J("camera",t,s.a,[X.bN])
u.b=!0
s.Y(u)}},
sb5:function(a,b){var u,t=this,s=t.b
if(s!==b){if(s!=null)s.gp().S(0,t.gX())
u=t.b
t.b=b
b.gp().h(0,t.gX())
s=new D.J("target",u,t.b,[X.cE])
s.b=!0
t.Y(s)}},
sb6:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gp().S(0,t.gX())
u=t.c
t.c=a
if(a!=null)a.gp().h(0,t.gX())
s=new D.J("technique",u,t.c,[O.bD])
s.b=!0
t.Y(s)}},
gp:function(){var u=this.x
return u==null?this.x=D.L():u},
aa:function(a){var u,t=this
a.cF(t.c)
t.b.Z(a)
t.a.Z(a)
u=t.c
if(u!=null)u.am(0,a)
for(u=t.d.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();)u.d.am(0,a)
for(u=t.d.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();)u.d.aa(a)
t.a.toString
a.cy.aA()
a.db.aA()
t.b.toString
a.cE()},
seY:function(a,b){this.d=H.m(b,"$ia1",[E.af],"$aa1")},
$iav:1}
M.av.prototype={}
A.db.prototype={}
A.fb.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ix:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dE:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dD.prototype={
ew:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.bh("")
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
d1.hU(u)
d1.i0(u)
d1.hV(u)
d1.i8(u)
d1.i9(u)
d1.i2(u)
d1.ie(u)
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
u=new P.bh("")
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
q.hY(u)
q.hT(u)
q.hW(u)
q.hZ(u)
q.i6(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.i4(u)
q.i5(u)}q.i1(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.c){m=u.a=m+"uniform float alpha;\n"
if(l!==C.f){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.d){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.c:m=u.a=m+"   return 1.0;\n"
break
case C.f:m=u.a=m+"   return alpha;\n"
break
case C.e:m+=c7
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
k=H.c([],[P.f])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.hX(u)
q.i3(u)
q.i7(u)
q.ia(u)
q.ib(u)
q.ic(u)
q.i_(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
p=p?u.a=m+"   vec3 norm = normal();\n":m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.c([],[P.f])
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
q=u.a=(n?u.a=q+("   gl_FragColor = colorMat*"+i+"\n"):u.a=q+("   gl_FragColor = "+i+"\n"))+"}\n"
a6.e0(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.h(a6.y.n(0,"invViewMat"),"$iap")
if(t)a6.dy=H.h(a6.y.n(0,"objMat"),"$iap")
if(r)a6.fr=H.h(a6.y.n(0,"viewObjMat"),"$iap")
a6.fy=H.h(a6.y.n(0,"projViewObjMat"),"$iap")
if(d1.x2)a6.k1=H.h(a6.y.n(0,"txt2DMat"),"$icK")
if(d1.y1)a6.k2=H.h(a6.y.n(0,"txtCubeMat"),"$iap")
if(d1.y2)a6.k3=H.h(a6.y.n(0,"colorMat"),"$iap")
a6.seU(H.c([],[A.ap]))
t=d1.ar
if(t>0){a6.k4=H.j(a6.y.n(0,"bendMatCount"),"$iM")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.v(P.r(a7+q+a8));(s&&C.a).h(s,H.h(g,"$iap"))}}t=d1.a
if(t!==C.c){a6.r2=H.h(a6.y.n(0,"emissionClr"),"$iK")
switch(t){case C.c:break
case C.f:break
case C.e:a6.rx=H.h(a6.y.n(0,a9),"$iah")
a6.x1=H.h(a6.y.n(0,b0),"$iM")
break
case C.d:a6.ry=H.h(a6.y.n(0,a9),"$iac")
a6.x1=H.h(a6.y.n(0,b0),"$iM")
break}}t=d1.b
if(t!==C.c){a6.x2=H.h(a6.y.n(0,"ambientClr"),"$iK")
switch(t){case C.c:break
case C.f:break
case C.e:a6.y1=H.h(a6.y.n(0,b1),"$iah")
a6.ar=H.h(a6.y.n(0,b2),"$iM")
break
case C.d:a6.y2=H.h(a6.y.n(0,b1),"$iac")
a6.ar=H.h(a6.y.n(0,b2),"$iM")
break}}t=d1.c
if(t!==C.c){a6.ak=H.h(a6.y.n(0,"diffuseClr"),"$iK")
switch(t){case C.c:break
case C.f:break
case C.e:a6.bj=H.h(a6.y.n(0,b3),"$iah")
a6.bk=H.h(a6.y.n(0,b4),"$iM")
break
case C.d:a6.dG=H.h(a6.y.n(0,b3),"$iac")
a6.bk=H.h(a6.y.n(0,b4),"$iM")
break}}t=d1.d
if(t!==C.c){a6.bl=H.h(a6.y.n(0,"invDiffuseClr"),"$iK")
switch(t){case C.c:break
case C.f:break
case C.e:a6.dH=H.h(a6.y.n(0,b5),"$iah")
a6.bm=H.h(a6.y.n(0,b6),"$iM")
break
case C.d:a6.dI=H.h(a6.y.n(0,b5),"$iac")
a6.bm=H.h(a6.y.n(0,b6),"$iM")
break}}t=d1.e
if(t!==C.c){a6.bp=H.h(a6.y.n(0,"shininess"),"$ia_")
a6.bn=H.h(a6.y.n(0,"specularClr"),"$iK")
switch(t){case C.c:break
case C.f:break
case C.e:a6.dJ=H.h(a6.y.n(0,b7),"$iah")
a6.bo=H.h(a6.y.n(0,b8),"$iM")
break
case C.d:a6.dK=H.h(a6.y.n(0,b7),"$iac")
a6.bo=H.h(a6.y.n(0,b8),"$iM")
break}}switch(d1.f){case C.c:break
case C.f:break
case C.e:a6.dL=H.h(a6.y.n(0,"bumpTxt"),"$iah")
a6.bq=H.h(a6.y.n(0,b9),"$iM")
break
case C.d:a6.dM=H.h(a6.y.n(0,"bumpTxt"),"$iac")
a6.bq=H.h(a6.y.n(0,b9),"$iM")
break}if(d1.dy){a6.dN=H.h(a6.y.n(0,"envSampler"),"$iac")
a6.dO=H.h(a6.y.n(0,"nullEnvTxt"),"$iM")
t=d1.r
if(t!==C.c){a6.br=H.h(a6.y.n(0,"reflectClr"),"$iK")
switch(t){case C.c:break
case C.f:break
case C.e:a6.dP=H.h(a6.y.n(0,c0),"$iah")
a6.bs=H.h(a6.y.n(0,c1),"$iM")
break
case C.d:a6.dQ=H.h(a6.y.n(0,c0),"$iac")
a6.bs=H.h(a6.y.n(0,c1),"$iM")
break}}t=d1.x
if(t!==C.c){a6.bt=H.h(a6.y.n(0,"refraction"),"$ia_")
a6.bu=H.h(a6.y.n(0,"refractClr"),"$iK")
switch(t){case C.c:break
case C.f:break
case C.e:a6.dR=H.h(a6.y.n(0,c2),"$iah")
a6.bv=H.h(a6.y.n(0,c3),"$iM")
break
case C.d:a6.dS=H.h(a6.y.n(0,c2),"$iac")
a6.bv=H.h(a6.y.n(0,c3),"$iM")
break}}}t=d1.y
if(t!==C.c){a6.bw=H.h(a6.y.n(0,"alpha"),"$ia_")
switch(t){case C.c:break
case C.f:break
case C.e:a6.dT=H.h(a6.y.n(0,c4),"$iah")
a6.bx=H.h(a6.y.n(0,c5),"$iM")
break
case C.d:a6.dU=H.h(a6.y.n(0,c4),"$iac")
a6.bx=H.h(a6.y.n(0,c5),"$iM")
break}}a6.seF(H.c([],[A.cJ]))
a6.seG(H.c([],[A.cL]))
a6.seH(H.c([],[A.cM]))
a6.seI(H.c([],[A.cN]))
a6.seJ(H.c([],[A.cO]))
a6.seK(H.c([],[A.cP]))
if(d1.k2){t=d1.z
if(t>0){a6.dV=H.j(a6.y.n(0,"dirLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.v(P.r(a7+r+a8))
H.h(g,"$iK")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.v(P.r(a7+r+a8))
H.h(f,"$iK")
s=a6.cm;(s&&C.a).h(s,new A.cJ(g,f))}}t=d1.Q
if(t>0){a6.dW=H.j(a6.y.n(0,"pntLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.v(P.r(a7+r+a8))
H.h(g,"$iK")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.v(P.r(a7+r+a8))
H.h(f,"$iK")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.v(P.r(a7+r+a8))
H.h(e,"$iK")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.v(P.r(a7+r+a8))
H.h(d,"$ia_")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.v(P.r(a7+r+a8))
H.h(c,"$ia_")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.v(P.r(a7+r+a8))
H.h(b,"$ia_")
s=a6.cn;(s&&C.a).h(s,new A.cL(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.dX=H.j(a6.y.n(0,"spotLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.v(P.r(a7+r+a8))
H.h(g,"$iK")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.v(P.r(a7+r+a8))
H.h(f,"$iK")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.v(P.r(a7+r+a8))
H.h(e,"$iK")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.v(P.r(a7+r+a8))
H.h(d,"$iK")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.v(P.r(a7+r+a8))
H.h(c,"$ia_")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.v(P.r(a7+r+a8))
H.h(b,"$ia_")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.v(P.r(a7+r+a8))
H.h(a,"$ia_")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.v(P.r(a7+r+a8))
H.h(a0,"$ia_")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.v(P.r(a7+r+a8))
H.h(a1,"$ia_")
s=a6.co;(s&&C.a).h(s,new A.cM(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.dY=H.j(a6.y.n(0,"txtDirLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.v(P.r(a7+r+a8))
H.h(g,"$iK")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.v(P.r(a7+r+a8))
H.h(f,"$iK")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.v(P.r(a7+r+a8))
H.h(e,"$iK")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.v(P.r(a7+r+a8))
H.h(d,"$iK")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.v(P.r(a7+r+a8))
H.h(c,"$iK")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.v(P.r(a7+r+a8))
H.h(b,"$iM")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.v(P.r(a7+r+a8))
H.h(a,"$iah")
s=a6.cp;(s&&C.a).h(s,new A.cN(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.dZ=H.j(a6.y.n(0,"txtPntLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.v(P.r(a7+r+a8))
H.h(g,"$iK")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.v(P.r(a7+r+a8))
H.h(f,"$iK")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.v(P.r(a7+r+a8))
H.h(e,"$icK")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.v(P.r(a7+r+a8))
H.h(d,"$iK")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.v(P.r(a7+r+a8))
H.h(c,"$iM")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.v(P.r(a7+r+a8))
H.h(b,"$ia_")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.v(P.r(a7+r+a8))
H.h(a,"$ia_")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.v(P.r(a7+r+a8))
H.h(a0,"$ia_")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.v(P.r(a7+r+a8))
H.h(a1,"$iac")
s=a6.cq;(s&&C.a).h(s,new A.cO(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.e_=H.j(a6.y.n(0,"txtSpotLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.v(P.r(a7+r+a8))
H.h(g,"$iK")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.v(P.r(a7+r+a8))
H.h(f,"$iK")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.v(P.r(a7+r+a8))
H.h(e,"$iK")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.v(P.r(a7+r+a8))
H.h(d,"$iK")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.v(P.r(a7+r+a8))
H.h(c,"$iK")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.v(P.r(a7+r+a8))
H.h(b,"$iM")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.v(P.r(a7+r+a8))
H.h(a,"$iK")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.v(P.r(a7+r+a8))
H.h(a0,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.v(P.r(a7+r+a8))
H.h(a1,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.v(P.r(a7+r+a8))
H.h(a2,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.v(P.r(a7+r+a8))
H.h(a3,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.v(P.r(a7+r+a8))
H.h(a4,"$ia_")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.v(P.r(a7+r+a8))
H.h(a5,"$iah")
s=a6.cr;(s&&C.a).h(s,new A.cP(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ai:function(a,b,c){C.b.a0(b.a,b.d,1)},
ad:function(a,b,c){if(c==null||c.d<6)C.b.a0(b.a,b.d,1)
else{a.cM(c)
C.b.a0(b.a,b.d,0)}},
seU:function(a){this.r1=H.m(a,"$ib",[A.ap],"$ab")},
seF:function(a){this.cm=H.m(a,"$ib",[A.cJ],"$ab")},
seG:function(a){this.cn=H.m(a,"$ib",[A.cL],"$ab")},
seH:function(a){this.co=H.m(a,"$ib",[A.cM],"$ab")},
seI:function(a){this.cp=H.m(a,"$ib",[A.cN],"$ab")},
seJ:function(a){this.cq=H.m(a,"$ib",[A.cO],"$ab")},
seK:function(a){this.cr=H.m(a,"$ib",[A.cP],"$ab")}}
A.h8.prototype={
hU:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.ar+"];\n"
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
i0:function(a){var u
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
hV:function(a){var u
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
i8:function(a){var u,t
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
i9:function(a){var u,t
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
i2:function(a){var u
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
ie:function(a){var u
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
au:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.l(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.i.b9(c,1))+"Txt;\n")
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hY:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.au(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   return emissionClr;\n"
break
case C.e:s=u+t
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
hT:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.au(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.f:s=a.a=u+"   return ambientClr;\n"
break
case C.e:s=u+t
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
hW:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.au(a,s,"diffuse")
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
case C.e:s=u+t
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
hZ:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.au(a,s,"invDiffuse")
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
case C.e:s=u+t
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
i6:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.au(a,s,"specular")
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
case C.e:s=u+t
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
i1:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.c:break
case C.f:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
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
case C.f:u=a.a=u+r
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
i4:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.au(a,s,"reflect")
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
case C.e:s=u+t
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
i5:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.au(a,s,"refract")
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
case C.e:s=u+t
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
hX:function(a){var u,t=this.z
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
i3:function(a){var u,t=this.Q
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
i7:function(a){var u,t=this.ch
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
ia:function(a){var u,t,s=this.cx
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
ib:function(a){var u,t,s=this.cy
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
ic:function(a){var u,t,s=this.db
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
i_:function(a){var u
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
A.cJ.prototype={}
A.cN.prototype={}
A.cL.prototype={}
A.cO.prototype={}
A.cM.prototype={}
A.cP.prototype={}
A.cA.prototype={
cQ:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
e0:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d6(b,35633)
r.f=r.d6(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.z(H.k9(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.v(P.r("Failed to link shader: "+H.k(s)))}r.hx()
r.hz()},
Z:function(a){a.a.useProgram(this.r)
this.x.ix()},
d6:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.z(H.k9(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.i(P.r("Error compiling shader '"+H.k(s)+"': "+H.k(u)))}return s},
hx:function(){var u,t,s,r=this,q=H.c([],[A.db]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.db(p,t.name,s))}r.x=new A.fb(q)},
hz:function(){var u,t,s,r=this,q=H.c([],[A.e1]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.it(t.type,t.size,t.name,s))}r.y=new A.ir(q)},
aK:function(a,b,c){var u=this.a
if(a===1)return new A.M(u,b,c)
else return A.k1(u,this.r,b,a,c)},
f0:function(a,b,c){var u=this.a
if(a===1)return new A.ah(u,b,c)
else return A.k1(u,this.r,b,a,c)},
f1:function(a,b,c){var u=this.a
if(a===1)return new A.ac(u,b,c)
else return A.k1(u,this.r,b,a,c)},
bg:function(a,b){return new P.ek(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
it:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aK(b,c,d)
case 5121:return u.aK(b,c,d)
case 5122:return u.aK(b,c,d)
case 5123:return u.aK(b,c,d)
case 5124:return u.aK(b,c,d)
case 5125:return u.aK(b,c,d)
case 5126:return new A.a_(u.a,c,d)
case 35664:return new A.il(u.a,c,d)
case 35665:return new A.K(u.a,c,d)
case 35666:return new A.ip(u.a,c,d)
case 35667:return new A.im(u.a,c,d)
case 35668:return new A.io(u.a,c,d)
case 35669:return new A.iq(u.a,c,d)
case 35674:return new A.is(u.a,c,d)
case 35675:return new A.cK(u.a,c,d)
case 35676:return new A.ap(u.a,c,d)
case 35678:return u.f0(b,c,d)
case 35680:return u.f1(b,c,d)
case 35670:throw H.i(u.bg("BOOL",c))
case 35671:throw H.i(u.bg("BOOL_VEC2",c))
case 35672:throw H.i(u.bg("BOOL_VEC3",c))
case 35673:throw H.i(u.bg("BOOL_VEC4",c))
default:throw H.i(P.r("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.bP.prototype={
i:function(a){return this.b}}
A.dR.prototype={}
A.e1.prototype={}
A.ir.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.M.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.im.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.io.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
shR:function(a){H.m(a,"$ib",[P.D],"$ab")}}
A.a_.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.il.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.K.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.is.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.cK.prototype={
ah:function(a){var u=new Float32Array(H.d3(H.m(a,"$ib",[P.A],"$ab")))
C.b.eg(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.ap.prototype={
ah:function(a){var u=new Float32Array(H.d3(H.m(a,"$ib",[P.A],"$ab")))
C.b.eh(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.ah.prototype={
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.ac.prototype={
cM:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.js.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cw(s.b,b).cw(s.d.cw(s.c,b),c)
s=new V.ag(r.a,r.b,r.c)
if(!J.a6(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a3()}a.saR(r.v(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
u=new V.bg(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.a6(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a3()}},
$S:36}
F.a4.prototype={
eT:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.e9()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.e1())return
return s.v(0,Math.sqrt(s.C(s)))},
eX:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.I(0,q)
r=new V.R(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.C(r)))
r=t.I(0,q)
r=new V.R(r.a,r.b,r.c)
r=s.b1(r.v(0,Math.sqrt(r.C(r))))
return r.v(0,Math.sqrt(r.C(r)))},
cg:function(){var u,t=this
if(t.d!=null)return!0
u=t.eT()
if(u==null){u=t.eX()
if(u==null)return!1}t.d=u
t.a.a.a3()
return!0},
eS:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.e9()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.e1())return
return s.v(0,Math.sqrt(s.C(s)))},
eW:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.P().a){l=d.I(0,g)
l=new V.R(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.I(0,g)
l=new V.ag(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).I(0,j)
l=new V.R(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.C(l)))
l=o.b1(q)
l=l.v(0,Math.sqrt(l.C(l))).b1(o)
q=l.v(0,Math.sqrt(l.C(l)))}return q},
ce:function(){var u,t=this
if(t.e!=null)return!0
u=t.eS()
if(u==null){u=t.eW()
if(u==null)return!1}t.e=u
t.a.a.a3()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.i.ag(J.ar(s.e),0)+", "+C.i.ag(J.ar(t.b.e),0)+", "+C.i.ag(J.ar(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
K:function(){return this.B("")}}
F.bc.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.i.ag(J.ar(u.e),0)+", "+C.i.ag(J.ar(this.b.e),0)},
K:function(){return this.B("")}}
F.bC.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.i.ag(J.ar(u.e),0)},
K:function(){return this.B("")}}
F.dP.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.L():u},
iI:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a1()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){r=g[s]
h.a.h(0,r.ir())}h.a.a1()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bC()
if(n.a==null)H.v(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.A(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a1()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.l(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.m3(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.B)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a1()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.l(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cm(l,k,i)}g=h.e
if(g!=null)g.aC(0)},
aw:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aw()||!1
if(!t.a.aw())u=!1
s=t.e
if(s!=null)s.aC(0)
return u},
dw:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aK()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bm().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.bo().a)!==0)++s
if((t&$.d8().a)!==0)++s
if((t&$.d9().a)!==0)++s
if((t&$.ca().a)!==0)++s
if((t&$.bk().a)!==0)++s
r=a3.gcN(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.A
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.de])
for(n=0,m=0;m<s;++m){l=a3.il(m)
k=l.gcN(l)
C.a.W(o,m,new Z.de(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.l(u,j)
i=u[j].iG(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.W(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.d3(p)),35044)
u.bindBuffer(a0,null)
e=new Z.ce(new Z.ea(a0,f),o,a3)
e.sfb(H.c([],[Z.by]))
if(a.b.b.length!==0){t=P.D
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.a1()
C.a.h(d,c.e)}b=Z.k2(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(0,d.length,b))}if(a.c.b.length!==0){t=P.D
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.a1()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.l(c,m)
c=c[m].b
c.a.a.a1()
C.a.h(d,c.e)}b=Z.k2(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(1,d.length,b))}if(a.d.b.length!==0){t=P.D
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.a1()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.l(c,m)
c=c[m].b
c.a.a.a1()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.l(c,m)
c=c[m].c
c.a.a.a1()
C.a.h(d,c.e)}b=Z.k2(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.B(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.B(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.B(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.B(t))}return C.a.l(s,"\n")},
a3:function(){var u=this.e
if(u!=null)u.A(null)},
$inl:1}
F.hK.prototype={
ih:function(a){var u,t,s,r,q,p
H.m(a,"$ib",[F.ax],"$ab")
u=H.c([],[F.a4])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cm(t,q,p))}return u},
ii:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ax],"$ab")
u=H.c([],[F.a4])
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
C.a.h(u,F.cm(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cm(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cm(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cm(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
aw:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].cg())s=!1
return s},
cf:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].ce())s=!1
return s},
i:function(a){return this.K()},
B:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(a))
return C.a.l(r,"\n")},
K:function(){return this.B("")},
sf6:function(a){this.b=H.m(a,"$ib",[F.a4],"$ab")}}
F.hL.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
B:function(a){var u,t,s=H.c([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.l(t,u)
C.a.h(s,t[u].B(a+(""+u+". ")))}return C.a.l(s,"\n")},
K:function(){return this.B("")},
sfc:function(a){this.b=H.m(a,"$ib",[F.bc],"$ab")}}
F.hM.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
B:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(a))
return C.a.l(r,"\n")},
K:function(){return this.B("")},
sc4:function(a){this.b=H.m(a,"$ib",[F.bC],"$ab")}}
F.ax.prototype={
cj:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iA(u.cx,r,o,t,s,q,p,a,n)},
ir:function(){return this.cj(null)},
saR:function(a){var u
if(!J.a6(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
iG:function(a){var u,t,s=this
if(a.t(0,$.aK())){u=s.f
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bm())){u=s.r
t=[P.A]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bl())){u=s.x
t=[P.A]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bn())){u=s.y
t=[P.A]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bo())){u=s.z
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.d8())){u=s.Q
t=[P.A]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.d9())){u=s.Q
t=[P.A]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.ca()))return H.c([s.ch],[P.A])
else if(a.t(0,$.bk())){u=s.cx
t=[P.A]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.A])},
cg:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e9()
t.d.N(0,new F.iI(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a3()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
ce:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e9()
t.d.N(0,new F.iH(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a3()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var u,t,s=this,r="-",q=H.c([],[P.f])
C.a.h(q,C.i.ag(J.ar(s.e),0))
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
C.a.h(q,V.W(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
K:function(){return this.B("")}}
F.iI.prototype={
$1:function(a){var u,t
H.j(a,"$ia4")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:8}
F.iH.prototype={
$1:function(a){var u,t
H.j(a,"$ia4")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:8}
F.iB.prototype={
a1:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.i(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a3()
return!0},
bh:function(a,b,c,d,e,f){var u=F.iA(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gm:function(a){return this.c.length},
aw:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].cg()
return!0},
cf:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].ce()
return!0},
ip:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a6(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}}}return!0},
i:function(a){return this.K()},
B:function(a){var u,t,s,r
this.a1()
u=H.c([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].B(a))
return C.a.l(u,"\n")},
K:function(){return this.B("")},
shS:function(a){this.c=H.m(a,"$ib",[F.ax],"$ab")}}
F.iC.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
N:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a4]})
C.a.N(u.b,b)
C.a.N(u.c,new F.iD(u,b))
C.a.N(u.d,new F.iE(u,b))},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(""))
return C.a.l(r,"\n")},
sf7:function(a){this.b=H.m(a,"$ib",[F.a4],"$ab")},
sf8:function(a){this.c=H.m(a,"$ib",[F.a4],"$ab")},
sf9:function(a){this.d=H.m(a,"$ib",[F.a4],"$ab")}}
F.iD.prototype={
$1:function(a){H.j(a,"$ia4")
if(!J.a6(a.a,this.a))this.b.$1(a)},
$S:8}
F.iE.prototype={
$1:function(a){var u
H.j(a,"$ia4")
u=this.a
if(!J.a6(a.a,u)&&!J.a6(a.b,u))this.b.$1(a)},
$S:8}
F.iF.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(""))
return C.a.l(r,"\n")},
sfd:function(a){this.b=H.m(a,"$ib",[F.bc],"$ab")},
sfe:function(a){this.c=H.m(a,"$ib",[F.bc],"$ab")}}
F.iG.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)C.a.h(r,u[s].B(""))
return C.a.l(r,"\n")},
sc4:function(a){this.b=H.m(a,"$ib",[F.bC],"$ab")}}
O.dC.prototype={
gp:function(){var u=this.dy
return u==null?this.dy=D.L():u},
P:function(a){var u
H.j(a,"$ix")
u=this.dy
if(u!=null)u.A(a)},
aX:function(){return this.P(null)},
di:function(a){H.j(a,"$ix")
this.a=null
this.P(a)},
ho:function(){return this.di(null)},
ft:function(a,b){var u=V.al
H.m(b,"$id",[u],"$ad")
u=new D.bz([u])
u.b=!0
this.P(u)},
fv:function(a,b){var u=V.al
H.m(b,"$id",[u],"$ad")
u=new D.bA([u])
u.b=!0
this.P(u)},
d3:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.h.a2(a1.e.length+3,4)*4,a3=C.h.a2(a1.f.length+3,4)*4,a4=C.h.a2(a1.r.length+3,4)*4,a5=C.h.a2(a1.x.length+3,4)*4,a6=C.h.a2(a1.y.length+3,4)*4,a7=C.h.a2(a1.z.length+3,4)*4,a8=C.h.a2(a0.e.a.length+3,4)*4
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
e=a1===C.d||u===C.d||t===C.d||s===C.d||r===C.d||q===C.d||p===C.d||o===C.d||n===C.d
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.aK()
if(h){j=$.bm()
a=new Z.b6(a.a|j.a)}if(g){j=$.bl()
a=new Z.b6(a.a|j.a)}if(f){j=$.bn()
a=new Z.b6(a.a|j.a)}if(e){j=$.bo()
a=new Z.b6(a.a|j.a)}if(c){j=$.bk()
a=new Z.b6(a.a|j.a)}return new A.h8(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
V:function(a,b){H.m(a,"$ib",[T.cG],"$ab")
if(b!=null)if(!C.a.U(a,b)){b.a=a.length
C.a.h(a,b)}},
am:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.u();){t=u.d
t.toString
s=$.iz
if(s==null)s=$.iz=new V.R(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cH(s)}}},
e9:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.d3()
u=H.j(a3.fr.j(0,a2.ak),"$idD")
if(u==null){u=A.m6(a2,a3.a)
a3.ds(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bj
a2=a4.e
if(!(a2 instanceof Z.ce))a2=a4.e=null
if(a2==null||!a2.d.t(0,s)){a2=t.r1
if(a2)a4.d.aw()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.cf()
q.a.cf()
q=q.e
if(q!=null)q.aC(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.ip()
p=p.e
if(p!=null)p.aC(0)}n=a4.d.dw(new Z.eb(a3.a),s)
n.ax($.aK()).e=a1.a.Q.c
if(a2)n.ax($.bm()).e=a1.a.cx.c
if(r)n.ax($.bl()).e=a1.a.ch.c
if(t.rx)n.ax($.bn()).e=a1.a.cy.c
if(q)n.ax($.bo()).e=a1.a.db.c
if(t.x1)n.ax($.bk()).e=a1.a.dx.c
a4.e=n}a2=T.cG
m=H.c([],[a2])
a1.a.Z(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.ga_(q)
r=r.dy
r.toString
r.ah(q.ab(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.ga_(q)
p=a3.dx
p=a3.cx=q.w(0,p.ga_(p))
q=p}r=r.fr
r.toString
r.ah(q.ab(0,!0))}r=a1.a
q=a3.ch
if(q==null){q=a3.giW()
p=a3.dx
p=a3.ch=q.w(0,p.ga_(p))
q=p}r=r.fy
r.toString
r.ah(q.ab(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.ah(C.o.ab(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.ah(C.o.ab(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.ah(C.o.ab(q,!0))}if(t.ar>0){l=a1.e.a.length
r=a1.a.k4
C.b.a0(r.a,r.d,l)
for(r=[P.A],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.l(p,k)
p=p[k]
q.toString
H.j(p,"$ial")
q=q.r1
if(k>=q.length)return H.l(q,k)
q=q[k]
j=new Float32Array(H.d3(H.m(p.ab(0,!0),"$ib",r,"$ab")))
C.b.eh(q.a,q.d,!1,j)}}switch(t.a){case C.c:break
case C.f:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.b.q(r.a,r.d,p,o,q)
break
case C.e:a1.V(m,a1.f.d)
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
C.b.q(q.a,q.d,p,o,r)
break
case C.d:a1.V(m,a1.f.e)
r=a1.a
q=a1.f.e
r.ad(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.c:break
case C.f:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.b.q(r.a,r.d,p,o,q)
break
case C.e:a1.V(m,a1.r.d)
r=a1.a
q=a1.r.d
r.ai(r.y1,r.ar,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break
case C.d:a1.V(m,a1.r.e)
r=a1.a
q=a1.r.e
r.ad(r.y2,r.ar,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break}switch(t.c){case C.c:break
case C.f:r=a1.a
q=a1.x.f
r=r.ak
r.toString
p=q.a
o=q.b
q=q.c
C.b.q(r.a,r.d,p,o,q)
break
case C.e:a1.V(m,a1.x.d)
r=a1.a
q=a1.x.d
r.ai(r.bj,r.bk,q)
q=a1.a
r=a1.x.f
q=q.ak
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break
case C.d:a1.V(m,a1.x.e)
r=a1.a
q=a1.x.e
r.ad(r.dG,r.bk,q)
q=a1.a
r=a1.x.f
q=q.ak
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break}switch(t.d){case C.c:break
case C.f:r=a1.a
q=a1.y.f
r=r.bl
r.toString
p=q.a
o=q.b
q=q.c
C.b.q(r.a,r.d,p,o,q)
break
case C.e:a1.V(m,a1.y.d)
r=a1.a
q=a1.y.d
r.ai(r.dH,r.bm,q)
q=a1.a
r=a1.y.f
q=q.bl
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break
case C.d:a1.V(m,a1.y.e)
r=a1.a
q=a1.y.e
r.ad(r.dI,r.bm,q)
q=a1.a
r=a1.y.f
q=q.bl
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break}switch(t.e){case C.c:break
case C.f:r=a1.a
q=a1.z.f
r=r.bn
r.toString
p=q.a
o=q.b
q=q.c
C.b.q(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bp
C.b.H(q.a,q.d,o)
break
case C.e:a1.V(m,a1.z.d)
r=a1.a
q=a1.z.d
r.ai(r.dJ,r.bo,q)
q=a1.a
r=a1.z.f
q=q.bn
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bp
C.b.H(r.a,r.d,o)
break
case C.d:a1.V(m,a1.z.e)
r=a1.a
q=a1.z.e
r.ad(r.dK,r.bo,q)
q=a1.a
r=a1.z.f
q=q.bn
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bp
C.b.H(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.dV
C.b.a0(r.a,r.d,l)
r=a3.db
i=r.ga_(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
p=a1.a.cm
if(h>=p.length)return H.l(p,h)
e=p[h]
p=i.cH(f.a)
o=p.a
d=p.b
c=p.c
c=p.v(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.b.q(d.a,d.d,o,p,c)
c=f.c
p=e.c
C.b.q(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.dW
C.b.a0(r.a,r.d,l)
r=a3.db
i=r.ga_(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
p=a1.a.cn
if(h>=p.length)return H.l(p,h)
e=p[h]
p=f.gb4(f)
o=e.b
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=i.b8(f.gb4(f))
o=e.c
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gaj(f)
o=e.d
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gca()
o=e.e
C.b.H(o.a,o.d,p)
p=f.gcb()
o=e.f
C.b.H(o.a,o.d,p)
p=f.gcc()
o=e.r
C.b.H(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.dX
C.b.a0(r.a,r.d,l)
r=a3.db
i=r.ga_(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
p=a1.a.co
if(h>=p.length)return H.l(p,h)
e=p[h]
p=f.gb4(f)
o=e.b
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gcl(f).jb()
o=e.c
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=i.b8(f.gb4(f))
o=e.d
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gaj(f)
o=e.e
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gja()
o=e.f
C.b.H(o.a,o.d,p)
p=f.gj9()
o=e.r
C.b.H(o.a,o.d,p)
p=f.gca()
o=e.x
C.b.H(o.a,o.d,p)
p=f.gcb()
o=e.y
C.b.H(o.a,o.d,p)
p=f.gcc()
o=e.z
C.b.H(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.dY
C.b.a0(r.a,r.d,l)
r=a3.db
i=r.ga_(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
o=a1.a.cp
if(h>=o.length)return H.l(o,h)
e=o[h]
o=f.gb7()
H.m(m,"$ib",p,"$ab")
if(!C.a.U(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gcl(f)
d=e.d
C.b.q(d.a,d.d,o.a,o.b,o.c)
o=f.gbG()
d=e.b
C.b.q(d.a,d.d,o.a,o.b,o.c)
o=f.gbE(f)
d=e.c
C.b.q(d.a,d.d,o.a,o.b,o.c)
o=i.cH(f.gcl(f))
d=o.a
c=o.b
b=o.c
b=o.v(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.b.q(c.a,c.d,d,o,b)
b=f.gaj(f)
o=e.f
C.b.q(o.a,o.d,b.a,b.b,b.c)
b=f.gb7()
o=b.gbA(b)
if(!o){o=e.x
C.b.a0(o.a,o.d,1)}else{o=e.r
d=b.gbA(b)
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.giC(b))
o=e.x
C.b.a0(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.dZ
C.b.a0(r.a,r.d,l)
r=a3.db
i=r.ga_(r)
for(r=a1.dx.y,q=r.length,p=[P.A],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
d=a1.a.cq
if(h>=d.length)return H.l(d,h)
e=d[h]
d=f.gb7()
H.m(m,"$ib",o,"$ab")
if(!C.a.U(m,d)){d.a=m.length
C.a.h(m,d)}a=i.w(0,f.ga_(f))
d=f.ga_(f)
c=$.cx
d=d.b8(c==null?$.cx=new V.ag(0,0,0):c)
c=e.b
C.b.q(c.a,c.d,d.a,d.b,d.c)
d=$.cx
d=a.b8(d==null?$.cx=new V.ag(0,0,0):d)
c=e.c
C.b.q(c.a,c.d,d.a,d.b,d.c)
d=a.cu(0)
c=e.d
j=new Float32Array(H.d3(H.m(new V.dE(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).ab(0,!0),"$ib",p,"$ab")))
C.b.eg(c.a,c.d,!1,j)
c=f.gaj(f)
d=e.e
C.b.q(d.a,d.d,c.a,c.b,c.c)
c=f.gb7()
d=c.gbA(c)
if(!d){d=e.r
C.b.a0(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.b.a0(d.a,d.d,0)}d=f.gca()
c=e.x
C.b.H(c.a,c.d,d)
d=f.gcb()
c=e.y
C.b.H(c.a,c.d,d)
d=f.gcc()
c=e.z
C.b.H(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.e_
C.b.a0(r.a,r.d,l)
r=a3.db
i=r.ga_(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.B)(r),++g){f=r[g]
p=a1.a.cr
if(h>=p.length)return H.l(p,h)
e=p[h]
p=f.gb7()
H.m(m,"$ib",a2,"$ab")
if(!C.a.U(m,p)){p.a=m.length
C.a.h(m,p)}p=f.gb4(f)
o=e.b
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gcl(f)
o=e.c
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gbG()
o=e.d
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gbE(f)
o=e.e
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=i.b8(f.gb4(f))
o=e.f
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gb7()
o=p.gbA(p)
if(!o){p=e.x
C.b.a0(p.a,p.d,1)}else{o=e.r
d=p.gbA(p)
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.giC(p))
p=e.x
C.b.a0(p.a,p.d,0)}p=f.gaj(f)
o=e.y
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gjc()
o=e.z
C.b.H(o.a,o.d,p)
p=f.gjd()
o=e.Q
C.b.H(o.a,o.d,p)
p=f.gca()
o=e.ch
C.b.H(o.a,o.d,p)
p=f.gcb()
o=e.cx
C.b.H(o.a,o.d,p)
p=f.gcc()
o=e.cy
C.b.H(o.a,o.d,p);++h}}}switch(t.f){case C.c:break
case C.f:break
case C.e:a1.V(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.ai(a2.dL,a2.bq,r)
break
case C.d:a1.V(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.ad(a2.dM,a2.bq,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.ga_(r).cu(0)}a2=a2.id
a2.toString
a2.ah(r.ab(0,!0))}if(t.dy){a1.V(m,a1.ch)
a2=a1.a
r=a1.ch
a2.ad(a2.dN,a2.dO,r)
switch(t.r){case C.c:break
case C.f:a2=a1.a
r=a1.cx.f
a2=a2.br
a2.toString
q=r.a
p=r.b
r=r.c
C.b.q(a2.a,a2.d,q,p,r)
break
case C.e:a1.V(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.ai(a2.dP,a2.bs,r)
r=a1.a
a2=a1.cx.f
r=r.br
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.q(r.a,r.d,q,p,a2)
break
case C.d:a1.V(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.ad(a2.dQ,a2.bs,r)
r=a1.a
a2=a1.cx.f
r=r.br
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.q(r.a,r.d,q,p,a2)
break}switch(t.x){case C.c:break
case C.f:a2=a1.a
r=a1.cy.f
a2=a2.bu
a2.toString
q=r.a
p=r.b
r=r.c
C.b.q(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bt
C.b.H(r.a,r.d,p)
break
case C.e:a1.V(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.ai(a2.dR,a2.bv,r)
r=a1.a
a2=a1.cy.f
r=r.bu
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.q(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bt
C.b.H(a2.a,a2.d,p)
break
case C.d:a1.V(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.ad(a2.dS,a2.bv,r)
r=a1.a
a2=a1.cy.f
r=r.bu
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.q(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bt
C.b.H(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.c
if(r){switch(a2){case C.c:break
case C.f:a2=a1.a
q=a1.db.f
a2=a2.bw
C.b.H(a2.a,a2.d,q)
break
case C.e:a1.V(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.ai(a2.dT,a2.bx,q)
q=a1.a
a2=a1.db.f
q=q.bw
C.b.H(q.a,q.d,a2)
break
case C.d:a1.V(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.ad(a2.dU,a2.bx,q)
q=a1.a
a2=a1.db.f
q=q.bw
C.b.H(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].Z(a3)
a2=a4.e
a2.Z(a3)
a2.aa(a3)
a2.aD(a3)
if(r)a3.a.disable(3042)
for(a2=a3.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
a2.activeTexture(33984+r.a)
a2.bindTexture(34067,null)}}r=a1.a
r.toString
a2.useProgram(null)
r.x.dE()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d3().ak},
seV:function(a){this.e=H.m(a,"$ia1",[V.al],"$aa1")}}
O.h6.prototype={
ht:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.P().a)){u.f=a
t=new D.J(u.b,t,a,[P.A])
t.b=!0
u.a.P(t)}},
ap:function(){this.cP()
this.ht(1)}}
O.cr.prototype={
P:function(a){this.a.P(H.j(a,"$ix"))},
aX:function(){return this.P(null)},
ap:function(){},
hv:function(a){},
hw:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gp().S(0,t.gaM())
u=t.e
t.e=a
if(a!=null)a.gp().h(0,t.gaM())
s=new D.J(t.b+".textureCube",u,t.e,[T.c0])
s.b=!0
t.a.P(s)}},
saR:function(a){var u=this,t=u.c
if(t!==C.d){if(t===C.c)u.ap()
u.c=C.d
u.hv(null)
t=u.a
t.a=null
t.P(null)}u.hw(a)}}
O.h7.prototype={}
O.aU.prototype={
dk:function(a){var u,t,s=this
if(!J.a6(s.f,a)){u=s.f
s.f=a
t=new D.J(s.b+".color",u,a,[V.a2])
t.b=!0
s.a.P(t)}},
ap:function(){this.cP()
this.dk(new V.a2(1,1,1))},
saj:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.f
t.ap()
u=t.a
u.a=null
u.P(null)}t.dk(b)}}
O.h9.prototype={
hu:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.P().a)){u.ch=a
t=new D.J(u.b+".refraction",t,a,[P.A])
t.b=!0
u.a.P(t)}},
ap:function(){this.bL()
this.hu(1)}}
O.ha.prototype={
c7:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.P().a)){u.ch=a
t=new D.J(u.b+".shininess",t,a,[P.A])
t.b=!0
u.a.P(t)}},
ap:function(){this.bL()
this.c7(100)}}
O.dQ.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.L():u},
P:function(a){var u
H.j(a,"$ix")
u=this.e
if(u!=null)u.A(a)},
aX:function(){return this.P(null)},
e9:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.j(a.fr.j(0,n),"$idR")
if(u==null){t=a.a
u=new A.dR(t,n)
u.cQ(t,n)
u.e0(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.h(u.y.j(0,"fov"),"$ia_")
u.ch=H.h(u.y.j(0,"ratio"),"$ia_")
u.cx=H.h(u.y.j(0,"boxClr"),"$iK")
u.cy=H.h(u.y.j(0,"boxTxt"),"$iac")
u.db=H.h(u.y.j(0,"viewMat"),"$iap")
a.ds(u)}o.a=u}if(b.e==null){t=b.d.dw(new Z.eb(a.a),$.aK())
t.ax($.aK()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.Z(a)}t=a.d
s=a.c
r=o.a
r.Z(a)
q=o.b
p=r.Q
C.b.H(p.a,p.d,q)
q=r.ch
C.b.H(q.a,q.d,t/s)
s=o.c
r.cy.cM(s)
s=o.d
t=r.cx
C.b.q(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga_(s).cu(0)
r=r.db
r.toString
r.ah(s.ab(0,!0))
t=b.e
if(t instanceof Z.ce){t.Z(a)
t.aa(a)
t.aD(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dE()
t=o.c
if(t!=null)t.aD(a)}}
O.bD.prototype={}
T.cG.prototype={}
T.c0.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.L():u},
Z:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aD:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.i6.prototype={
e2:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.c0()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aL(u,k,r,34069,!1,!1)
t.aL(u,k,o,34070,!1,!1)
t.aL(u,k,q,34071,!1,!1)
t.aL(u,k,n,34072,!1,!1)
t.aL(u,k,p,34073,!1,!1)
t.aL(u,k,m,34074,!1,!1)
return u},
cz:function(a){return this.e2(a,".png")},
aL:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.o
W.a7(t,"load",H.n(new T.i7(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hp:function(a,b,c){var u,t,s,r
b=V.kk(b)
u=V.kk(a.width)
t=V.kk(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jN()
s.width=u
s.height=t
r=H.j(C.l.ek(s,"2d"),"$icf")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mO(r.getImageData(0,0,s.width,s.height))}}}
T.i7.prototype={
$1:function(a){var u=this,t=u.a,s=t.hp(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.j2(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.iw()}++t.e},
$S:27}
V.b9.prototype={
az:function(a,b){return!0},
i:function(a){return"all"},
$ias:1}
V.as.prototype={}
V.dB.prototype={
az:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)if(u[s].az(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa5:function(a){this.a=H.m(a,"$ib",[V.as],"$ab")},
$ias:1}
V.am.prototype={
az:function(a,b){return!this.es(0,b)},
i:function(a){return"!["+this.cO(0)+"]"}}
V.hA.prototype={
az:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.jY(this.a),t=H.jY(this.b)
return u+".."+t},
$ias:1}
V.hJ.prototype={
ey:function(a){var u,t
if(a.a.length<=0)throw H.i(P.r("May not create a SetMatcher with zero characters."))
u=new H.aS([P.D,P.O])
for(t=new H.cq(a,a.gm(a),[H.aj(a,"w",0)]);t.u();)u.W(0,t.d,!0)
this.shs(u)},
az:function(a,b){return this.a.dC(0,b)},
i:function(a){var u=this.a
return P.k_(new H.dx(u,[H.y(u,0)]))},
shs:function(a){this.a=H.m(a,"$iQ",[P.D,P.O],"$aQ")},
$ias:1}
V.cB.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cI(this.a.k(0,b))
r.sa5(H.c([],[V.as]))
r.c=!1
C.a.h(this.c,r)
return r},
iy:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.az(0,a))return r}return},
i:function(a){return this.b},
shN:function(a){this.c=H.m(a,"$ib",[V.cI],"$ab")}}
V.e_.prototype={
i:function(a){var u=H.km(this.b,"\n","\\n"),t=H.km(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cH.prototype={
aB:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.B)(c),++t){s=c[t]
this.c.W(0,s,b)}},
i:function(a){return this.b},
shl:function(a){var u=P.f
this.c=H.m(a,"$iQ",[u,u],"$aQ")}}
V.ia.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cB(this,b)
u.shN(H.c([],[V.cI]))
u.d=null
this.a.W(0,b,u)}return u},
L:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cH(a)
u=P.f
t.shl(new H.aS([u,u]))
this.b.W(0,a,t)}return t},
ef:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.e_]),l=this.c,k=[P.D],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.i.aJ(a,s)
q=l.iy(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.k_(j)
throw H.i(P.r("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.k_(j)
o=l.d
n=o.c.j(0,p)
t=new V.e_(n==null?o.b:n,p,s)}++s}}},
shD:function(a){this.a=H.m(a,"$iQ",[P.f,V.cB],"$aQ")},
shG:function(a){this.b=H.m(a,"$iQ",[P.f,V.cH],"$aQ")}}
V.cI.prototype={
i:function(a){return this.b.b+": "+this.cO(0)}}
X.bN.prototype={$iaX:1}
X.fL.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.L():u},
an:function(a){var u=this.x
if(u!=null)u.A(a)},
sdA:function(a,b){var u
if(this.b){this.b=!1
u=new D.J("clearColor",!0,!1,[P.O])
u.b=!0
this.an(u)}},
Z:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.F(u)
q=C.j.al(r*u)
r=s.b
if(typeof t!=="number")return H.F(t)
p=C.j.al(r*t)
r=C.j.al(s.c*u)
a.c=r
s=C.j.al(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fR.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.L():u},
Z:function(a){var u
a.cy.bD(V.bV())
u=V.bV()
a.db.bD(u)},
aD:function(a){a.cy.aA()
a.db.aA()},
$iaX:1,
$ibN:1}
X.dK.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.L():u},
an:function(a){var u
H.j(a,"$ix")
u=this.f
if(u!=null)u.A(a)},
eP:function(){return this.an(null)},
Z:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aV(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bD(k)
r=$.kJ
if(r==null){r=V.kL()
q=V.l3()
p=$.l0
r=V.kE(r,q,p==null?$.l0=new V.R(0,0,-1):p)
$.kJ=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aS(0,a,s)
if(t!=null)u=t.w(0,u)}a.db.bD(u)},
aD:function(a){a.cy.aA()
a.db.aA()},
$iaX:1,
$ibN:1}
X.cE.prototype={}
V.br.prototype={
bb:function(a){this.b=new P.fP(C.L)
this.c=null
this.sbU(H.c([],[[P.b,W.aA]]))},
J:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aA]))
u=a.split("\n")
for(l=u.length,t=[W.aA],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.H(q)
o=m.b.f_(q,0,q.length)
n=o==null?q:o
C.J.en(p,H.km(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gby(m.d),p)}},
e8:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.f],"$ab")
q.sbU(H.c([],[[P.b,W.aA]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bi():t).ef(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)q.bC(t[r])},
sbU:function(a){this.d=H.m(a,"$ib",[[P.b,W.aA]],"$ab")}}
V.jI.prototype={
$1:function(a){H.j(a,"$ib3")
P.kl(C.j.ee(this.a.giA(),2)+" fps")},
$S:40}
V.fr.prototype={
bC:function(a){var u=this
switch(a.a){case"Class":u.J(a.b,"#551")
break
case"Comment":u.J(a.b,"#777")
break
case"Id":u.J(a.b,"#111")
break
case"Num":u.J(a.b,"#191")
break
case"Reserved":u.J(a.b,"#119")
break
case"String":u.J(a.b,"#171")
break
case"Symbol":u.J(a.b,"#616")
break
case"Type":u.J(a.b,"#B11")
break
case"Whitespace":u.J(a.b,"#111")
break}},
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.ib()
a1.c=a1.k(0,r)
u=a1.k(0,r).l(0,q)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).l(0,q)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).l(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).l(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).l(0,o)
t=V.u(new H.q("."))
C.a.h(u.a,t)
t=a1.k(0,o).l(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).l(0,n)
t=V.Z("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).l(0,m)
u=V.u(new H.q(l))
C.a.h(t.a,u)
u=a1.k(0,m).l(0,m)
t=V.u(new H.q(l))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,k)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
u=a1.k(0,k).l(0,j)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
t=a1.k(0,k).l(0,i)
u=V.u(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).l(0,k)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).l(0,k).a,new V.b9())
t=a1.k(0,r).l(0,h)
u=V.u(new H.q("'"))
C.a.h(t.a,u)
u=a1.k(0,h).l(0,g)
t=V.u(new H.q("'"))
C.a.h(u.a,t)
t=a1.k(0,h).l(0,f)
u=V.u(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).l(0,h)
t=V.u(new H.q("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).l(0,h).a,new V.b9())
t=a1.k(0,r).l(0,e)
u=V.u(new H.q("/"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,d)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,d).l(0,c)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).l(0,d)
t=new V.am()
s=[V.as]
t.sa5(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,b)
t=V.u(new H.q("*"))
C.a.h(u.a,t)
t=a1.k(0,b).l(0,a)
u=V.u(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,b)
t=new V.am()
t.sa5(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,c)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,a0)
u=V.u(new H.q(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).l(0,a0)
t=V.u(new H.q(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.L("Num")
t=a1.k(0,n)
t.d=t.a.L("Num")
t=a1.k(0,m)
t.d=t.a.L("Symbol")
t=a1.k(0,j)
t.d=t.a.L("String")
t=a1.k(0,g)
t.d=t.a.L("String")
t=a1.k(0,c)
t.d=t.a.L(d)
t=a1.k(0,a0)
t.d=t.a.L(a0)
t=a1.k(0,q)
t=t.d=t.a.L(q)
u=[P.f]
t.aB(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aB(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aB(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fM.prototype={
bC:function(a){var u=this
switch(a.a){case"Builtin":u.J(a.b,"#411")
break
case"Comment":u.J(a.b,"#777")
break
case"Id":u.J(a.b,"#111")
break
case"Num":u.J(a.b,"#191")
break
case"Preprocess":u.J(a.b,"#737")
break
case"Reserved":u.J(a.b,"#119")
break
case"Symbol":u.J(a.b,"#611")
break
case"Type":u.J(a.b,"#171")
break
case"Whitespace":u.J(a.b,"#111")
break}},
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.ib()
e.c=e.k(0,r)
u=e.k(0,r).l(0,q)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).l(0,q)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).l(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=e.k(0,p).l(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.k(0,p).l(0,o)
t=V.u(new H.q("."))
C.a.h(u.a,t)
t=e.k(0,o).l(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.k(0,n).l(0,n)
t=V.Z("0","9")
C.a.h(u.a,t)
t=e.k(0,r).l(0,m)
u=V.u(new H.q(l))
C.a.h(t.a,u)
u=e.k(0,m).l(0,m)
t=V.u(new H.q(l))
C.a.h(u.a,t)
t=e.k(0,r).l(0,k)
u=V.u(new H.q("/"))
C.a.h(t.a,u)
u=e.k(0,k).l(0,j)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).l(0,m).a,new V.b9())
t=e.k(0,j).l(0,i)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,j).l(0,j)
t=new V.am()
s=[V.as]
t.sa5(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,h)
t=V.u(new H.q("#"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,h)
u=new V.am()
u.sa5(H.c([],s))
C.a.h(t.a,u)
t=V.u(new H.q("\n"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,g)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,f)
t=V.u(new H.q(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).l(0,f)
u=V.u(new H.q(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.L("Num")
u=e.k(0,n)
u.d=u.a.L("Num")
u=e.k(0,m)
u.d=u.a.L("Symbol")
u=e.k(0,i)
u.d=u.a.L(j)
u=e.k(0,g)
u.d=u.a.L(h)
u=e.k(0,f)
u.d=u.a.L(f)
u=e.k(0,q)
u=u.d=u.a.L(q)
t=[P.f]
u.aB(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aB(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aB(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fN.prototype={
bC:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.J(a.b,"#911")
u.J("=",t)
break
case"Id":u.J(a.b,t)
break
case"Other":u.J(a.b,t)
break
case"Reserved":u.J(a.b,"#119")
break
case"String":u.J(a.b,"#171")
break
case"Symbol":u.J(a.b,"#616")
break}},
bi:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.ib()
l.c=l.k(0,s)
u=l.k(0,s).l(0,r)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).l(0,r)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).l(0,q)
t=V.u(new H.q("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).l(0,p)
t=V.u(new H.q("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).l(0,p)
u=V.u(new H.q("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).l(0,o)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
t=l.k(0,o).l(0,n)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
u=l.k(0,o).l(0,"EscStr")
t=V.u(new H.q("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").l(0,o)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).l(0,o).a,new V.b9())
C.a.h(l.k(0,s).l(0,m).a,new V.b9())
u=l.k(0,m).l(0,m)
t=new V.am()
t.sa5(H.c([],[V.as]))
C.a.h(u.a,t)
u=V.u(new H.q('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.L("Symbol")
u=l.k(0,n)
u.d=u.a.L("String")
u=l.k(0,r)
t=u.a.L(r)
u.d=t
t.aB(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.k(0,q)
t.d=t.a.L(q)
t=l.k(0,m)
t.d=t.a.L(m)
return l}}
V.hv.prototype={
e8:function(a,b){H.m(b,"$ib",[P.f],"$ab")
this.sbU(H.c([],[[P.b,W.aA]]))
this.J(C.a.l(b,"\n"),"#111")},
bC:function(a){},
bi:function(){return}}
V.hN.prototype={
ez:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a7(q,"scroll",H.n(new V.hP(o),{func:1,ret:-1,args:[r]}),!1,r)},
dr:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.f],"$ab")
this.hy()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ef(C.a.iF(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
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
if(H.n9(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.l(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
t.appendChild(l)}else{k=P.l8(C.w,n,C.m,!1)
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
ej:function(a){var u,t,s,r=new V.fr("dart")
r.bb("dart")
u=new V.fM("glsl")
u.bb("glsl")
t=new V.fN("html")
t.bb("html")
s=C.a.iz(H.c([r,u,t],[V.br]),new V.hQ(a))
if(s!=null)return s
r=new V.hv("plain")
r.bb("plain")
return r},
dq:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.f],"$ab")
u=H.c([],[P.D])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.kf(r).bJ(r,"+")){C.a.W(b0,s,C.i.b9(r,1))
C.a.h(u,1)
t=!0}else if(C.i.bJ(r,"-")){C.a.W(b0,s,C.i.b9(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.ej(a8)
q.e8(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.l8(C.w,a7,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kq()
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
a.className=a6
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.B)(r),++a0)C.T.ik(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.B)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gR(r);a3.u();)c.appendChild(a3.gE(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hy:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.ib()
u.c=u.k(0,q)
t=u.k(0,q).l(0,p)
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).l(0,p)
s=new V.am()
r=[V.as]
s.sa5(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,p).l(0,"BoldEnd")
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,o)
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).l(0,o)
s=new V.am()
s.sa5(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,o).l(0,n)
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,m)
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).l(0,m)
s=new V.am()
s.sa5(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,m).l(0,"CodeEnd")
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,l)
s=V.u(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).l(0,k)
s=V.u(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,l).l(0,j)
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).l(0,l)
t=new V.am()
t.sa5(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,k).l(0,j)
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).l(0,k)
t=new V.am()
t.sa5(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).l(0,i).a,new V.b9())
s=u.k(0,i).l(0,i)
t=new V.am()
t.sa5(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.L(p)
s=u.k(0,n)
s.d=s.a.L(o)
s=u.k(0,"CodeEnd")
s.d=s.a.L(m)
s=u.k(0,j)
s.d=s.a.L("Link")
s=u.k(0,i)
s.d=s.a.L(i)
this.b=u}}
V.hP.prototype={
$1:function(a){P.kW(C.n,new V.hO(this.a))},
$S:27}
V.hO.prototype={
$0:function(){var u=C.j.al(document.documentElement.scrollTop),t=this.a.style,s=H.k(-0.01*u)+"px"
t.top=s},
$S:2}
V.hQ.prototype={
$1:function(a){return H.j(a,"$ibr").a===this.a},
$S:41}
X.jF.prototype={
$1:function(a){var u,t,s,r
H.j(a,"$ix")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dq("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.dq("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a.prototype
u.ep=u.i
u=J.du.prototype
u.er=u.i
u=P.d.prototype
u.eq=u.bH
u=W.T.prototype
u.bK=u.ae
u=W.eG.prototype
u.eu=u.aq
u=O.cr.prototype
u.cP=u.ap
u=O.aU.prototype
u.bL=u.ap
u=V.dB.prototype
u.es=u.az
u.cO=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mI","mp",9)
u(P,"mJ","mq",9)
u(P,"mK","mr",9)
t(P,"lh","mG",3)
s(W,"mU",4,null,["$4"],["mt"],21,0)
s(W,"mV",4,null,["$4"],["mu"],21,0)
var m
r(m=E.af.prototype,"ge6",0,0,null,["$1","$0"],["e7","iO"],0,0)
r(m,"ge4",0,0,null,["$1","$0"],["e5","iL"],0,0)
q(m,"giJ","iK",5)
q(m,"giM","iN",5)
r(m=E.dZ.prototype,"gcS",0,0,null,["$1","$0"],["cU","cT"],0,0)
p(m,"giZ","ea",3)
o(m=X.e5.prototype,"gfK","fL",10)
o(m,"gfw","fz",10)
o(m,"gfE","fF",4)
o(m,"gfO","fP",20)
o(m,"gfM","fN",20)
o(m,"gfS","fT",4)
o(m,"gfW","fX",4)
o(m,"gfI","fJ",4)
o(m,"gfU","fV",4)
o(m,"gfG","fH",4)
o(m,"gfY","fZ",43)
o(m,"gh_","h0",10)
o(m,"ghf","hg",11)
o(m,"ghb","hc",11)
o(m,"ghd","he",11)
r(D.bt.prototype,"geD",0,0,null,["$1","$0"],["as","eE"],0,0)
r(m=D.dw.prototype,"gdc",0,0,null,["$1","$0"],["dd","fQ"],0,0)
o(m,"gh1","h2",30)
q(m,"gfp","fq",22)
q(m,"gh5","h6",22)
n(V.V.prototype,"gm","cv",23)
n(V.R.prototype,"gm","cv",23)
r(m=U.co.prototype,"gaI",0,0,null,["$1","$0"],["M","a4"],0,0)
q(m,"gfn","fo",24)
q(m,"gh3","h4",24)
r(m=U.e6.prototype,"gaI",0,0,null,["$1","$0"],["M","a4"],0,0)
o(m,"gbX","bY",1)
o(m,"gbZ","c_",1)
o(m,"gc0","c1",1)
r(m=U.e7.prototype,"gaI",0,0,null,["$1","$0"],["M","a4"],0,0)
o(m,"gbX","bY",1)
o(m,"gbZ","c_",1)
o(m,"gc0","c1",1)
o(m,"gfg","fh",1)
o(m,"gfi","fj",1)
o(m,"ghL","hM",1)
o(m,"ghJ","hK",1)
o(m,"ghH","hI",1)
o(U.e8.prototype,"gfl","fm",1)
r(m=M.dg.prototype,"gX",0,0,null,["$1","$0"],["Y","aU"],0,0)
q(m,"gh7","h8",25)
q(m,"gh9","ha",25)
r(M.di.prototype,"gX",0,0,null,["$1","$0"],["Y","aU"],0,0)
r(m=M.dm.prototype,"gX",0,0,null,["$1","$0"],["Y","aU"],0,0)
q(m,"gfA","fB",5)
q(m,"gfC","fD",5)
r(m=O.dC.prototype,"gaM",0,0,null,["$1","$0"],["P","aX"],0,0)
r(m,"ghn",0,0,null,["$1","$0"],["di","ho"],0,0)
q(m,"gfs","ft",26)
q(m,"gfu","fv",26)
r(O.cr.prototype,"gaM",0,0,null,["$1","$0"],["P","aX"],0,0)
r(O.dQ.prototype,"gaM",0,0,null,["$1","$0"],["P","aX"],0,0)
r(X.dK.prototype,"geO",0,0,null,["$1","$0"],["an","eP"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.jW,J.a,J.ak,P.et,P.d,H.cq,P.aQ,H.bR,H.e4,H.ih,P.bv,H.cg,H.eL,P.a9,H.fY,H.fZ,H.fU,P.eR,P.b8,P.aC,P.ec,P.hX,P.cD,P.hY,P.b3,P.ae,P.jr,P.jf,P.c1,P.es,P.w,P.ch,P.fQ,P.jp,P.O,P.az,P.a8,P.bu,P.ht,P.dT,P.ek,P.fK,P.bw,P.b,P.Q,P.N,P.ao,P.f,P.bh,W.fn,W.bF,W.C,W.dI,W.eG,W.jk,W.dp,W.au,W.je,W.eX,P.eW,P.j9,O.a1,O.cs,E.fg,E.af,E.hB,E.dZ,Z.ea,Z.eb,Z.ce,Z.by,Z.b6,D.fj,D.bQ,D.x,X.df,X.dv,X.fW,X.h0,X.at,X.hh,X.ic,X.e5,D.bt,D.a3,D.dL,D.dS,D.dW,D.dX,D.dY,V.a2,V.aF,V.fB,V.dE,V.al,V.a5,V.ag,V.bg,V.dN,V.V,V.R,U.e6,U.e7,U.e8,M.di,M.dm,M.av,A.db,A.fb,A.h8,A.cJ,A.cN,A.cL,A.cO,A.cM,A.cP,A.bP,A.e1,A.ir,F.a4,F.bc,F.bC,F.dP,F.hK,F.hL,F.hM,F.ax,F.iB,F.iC,F.iF,F.iG,O.bD,O.cr,T.i6,V.b9,V.as,V.dB,V.hA,V.hJ,V.cB,V.e_,V.cH,V.ia,X.bN,X.cE,X.fR,X.dK,V.br,V.hN])
s(J.a,[J.fT,J.ds,J.du,J.aR,J.dt,J.bT,H.cv,W.e,W.f8,W.dc,W.cf,W.aM,W.aN,W.U,W.ee,W.fs,W.ft,W.eg,W.dl,W.ei,W.fv,W.o,W.el,W.aP,W.fO,W.eo,W.bx,W.dz,W.hb,W.eu,W.ev,W.aW,W.ew,W.ez,W.aY,W.eD,W.eF,W.b0,W.eH,W.b1,W.eM,W.aG,W.eP,W.i9,W.b4,W.eS,W.ie,W.iw,W.eY,W.f_,W.f1,W.f3,W.f5,P.bb,P.eq,P.be,P.eB,P.hy,P.eN,P.bi,P.eU,P.fc,P.ed,P.dd,P.dM,P.bZ,P.dO,P.dV,P.e2,P.eJ])
s(J.du,[J.hu,J.cQ,J.bB])
t(J.jV,J.aR)
s(J.dt,[J.dr,J.dq])
t(P.h_,P.et)
s(P.h_,[H.e3,W.iR,W.ai,P.fG])
t(H.q,H.e3)
s(P.d,[H.fy,H.h3,H.cR])
s(H.fy,[H.bU,H.dx])
s(P.aQ,[H.h4,H.iK])
t(H.h5,H.bU)
s(P.bv,[H.hq,H.fV,H.iu,H.ij,H.fi,H.hH,P.fa,P.dJ,P.aE,P.iv,P.it,P.cC,P.fl,P.fq])
s(H.cg,[H.jJ,H.i3,H.jB,H.jC,H.jD,P.iN,P.iM,P.iO,P.iP,P.jo,P.jn,P.iX,P.j0,P.iY,P.iZ,P.j_,P.j3,P.j4,P.j2,P.j1,P.hZ,P.i_,P.jv,P.jc,P.jb,P.jd,P.h2,P.fw,P.fx,W.fz,W.hd,W.hf,W.hG,W.hW,W.iW,W.hp,W.ho,W.jg,W.jh,W.jm,W.jq,P.jx,P.fH,P.fI,P.fe,E.hC,E.hD,E.hE,E.i8,D.fC,D.fD,F.js,F.iI,F.iH,F.iD,F.iE,T.i7,V.jI,V.hP,V.hO,V.hQ,X.jF])
s(H.i3,[H.hU,H.cc])
t(H.iL,P.fa)
t(P.h1,P.a9)
s(P.h1,[H.aS,W.iQ])
t(H.dF,H.cv)
s(H.dF,[H.cV,H.cX])
t(H.cW,H.cV)
t(H.cu,H.cW)
t(H.cY,H.cX)
t(H.dG,H.cY)
s(H.dG,[H.hi,H.hj,H.hk,H.hl,H.hm,H.dH,H.hn])
t(P.ja,P.jr)
t(P.j8,P.jf)
t(P.ci,P.hY)
t(P.fA,P.ch)
s(P.ci,[P.fP,P.iy])
t(P.ix,P.fA)
s(P.a8,[P.A,P.D])
s(P.aE,[P.bY,P.fS])
s(W.e,[W.E,W.fF,W.b_,W.cZ,W.b2,W.aH,W.d0,W.iJ,W.cS,P.ff,P.bM])
s(W.E,[W.T,W.bq,W.cT])
s(W.T,[W.t,P.p])
s(W.t,[W.da,W.f9,W.cb,W.bp,W.bO,W.aA,W.fJ,W.cp,W.hI,W.c_,W.dU,W.i1,W.i2,W.cF])
s(W.aM,[W.cj,W.fo,W.fp])
t(W.fm,W.aN)
t(W.ck,W.ee)
t(W.eh,W.eg)
t(W.dk,W.eh)
t(W.ej,W.ei)
t(W.fu,W.ej)
t(W.aO,W.dc)
t(W.em,W.el)
t(W.fE,W.em)
t(W.ep,W.eo)
t(W.bS,W.ep)
t(W.bE,W.o)
s(W.bE,[W.aT,W.aa,W.aI])
t(W.hc,W.eu)
t(W.he,W.ev)
t(W.ex,W.ew)
t(W.hg,W.ex)
t(W.eA,W.ez)
t(W.cw,W.eA)
t(W.eE,W.eD)
t(W.hw,W.eE)
t(W.hF,W.eF)
t(W.d_,W.cZ)
t(W.hR,W.d_)
t(W.eI,W.eH)
t(W.hS,W.eI)
t(W.hV,W.eM)
t(W.eQ,W.eP)
t(W.i4,W.eQ)
t(W.d1,W.d0)
t(W.i5,W.d1)
t(W.eT,W.eS)
t(W.id,W.eT)
t(W.b7,W.aa)
t(W.eZ,W.eY)
t(W.iS,W.eZ)
t(W.ef,W.dl)
t(W.f0,W.f_)
t(W.j5,W.f0)
t(W.f2,W.f1)
t(W.ey,W.f2)
t(W.f4,W.f3)
t(W.ji,W.f4)
t(W.f6,W.f5)
t(W.jj,W.f6)
t(W.iT,W.iQ)
t(W.iU,P.hX)
t(W.k3,W.iU)
t(W.iV,P.cD)
t(W.jl,W.eG)
t(P.an,P.j9)
t(P.er,P.eq)
t(P.fX,P.er)
t(P.eC,P.eB)
t(P.hr,P.eC)
t(P.cz,P.p)
t(P.eO,P.eN)
t(P.i0,P.eO)
t(P.eV,P.eU)
t(P.ig,P.eV)
t(P.fd,P.ed)
t(P.hs,P.bM)
t(P.eK,P.eJ)
t(P.hT,P.eK)
s(E.fg,[Z.de,A.cA,T.cG])
s(D.x,[D.bz,D.bA,D.J,X.hx])
s(X.hx,[X.dA,X.bd,X.ct,X.e0])
s(O.a1,[D.dw,U.co,M.dg])
s(D.fj,[U.fk,U.ab])
t(U.dh,U.ab)
s(A.cA,[A.dD,A.dR])
s(A.e1,[A.M,A.im,A.io,A.iq,A.ik,A.a_,A.il,A.K,A.ip,A.is,A.cK,A.ap,A.ah,A.ac])
s(O.bD,[O.dC,O.dQ])
s(O.cr,[O.h6,O.h7,O.aU])
s(O.aU,[O.h9,O.ha])
t(T.c0,T.cG)
s(V.dB,[V.am,V.cI])
t(X.fL,X.cE)
s(V.br,[V.fr,V.fM,V.fN,V.hv])
u(H.e3,H.e4)
u(H.cV,P.w)
u(H.cW,H.bR)
u(H.cX,P.w)
u(H.cY,H.bR)
u(P.et,P.w)
u(W.ee,W.fn)
u(W.eg,P.w)
u(W.eh,W.C)
u(W.ei,P.w)
u(W.ej,W.C)
u(W.el,P.w)
u(W.em,W.C)
u(W.eo,P.w)
u(W.ep,W.C)
u(W.eu,P.a9)
u(W.ev,P.a9)
u(W.ew,P.w)
u(W.ex,W.C)
u(W.ez,P.w)
u(W.eA,W.C)
u(W.eD,P.w)
u(W.eE,W.C)
u(W.eF,P.a9)
u(W.cZ,P.w)
u(W.d_,W.C)
u(W.eH,P.w)
u(W.eI,W.C)
u(W.eM,P.a9)
u(W.eP,P.w)
u(W.eQ,W.C)
u(W.d0,P.w)
u(W.d1,W.C)
u(W.eS,P.w)
u(W.eT,W.C)
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
u(P.eq,P.w)
u(P.er,W.C)
u(P.eB,P.w)
u(P.eC,W.C)
u(P.eN,P.w)
u(P.eO,W.C)
u(P.eU,P.w)
u(P.eV,W.C)
u(P.ed,P.a9)
u(P.eJ,P.w)
u(P.eK,W.C)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bp.prototype
C.l=W.bO.prototype
C.J=W.aA.prototype
C.M=J.a.prototype
C.a=J.aR.prototype
C.N=J.dq.prototype
C.h=J.dr.prototype
C.o=J.ds.prototype
C.j=J.dt.prototype
C.i=J.bT.prototype
C.O=J.bB.prototype
C.S=W.cw.prototype
C.x=J.hu.prototype
C.b=P.bZ.prototype
C.T=W.c_.prototype
C.y=W.dU.prototype
C.r=J.cQ.prototype
C.z=W.b7.prototype
C.A=W.cS.prototype
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

C.H=new P.ht()
C.m=new P.ix()
C.I=new P.iy()
C.k=new P.ja()
C.c=new A.bP(0,"ColorSourceType.None")
C.f=new A.bP(1,"ColorSourceType.Solid")
C.e=new A.bP(2,"ColorSourceType.Texture2D")
C.d=new A.bP(3,"ColorSourceType.TextureCube")
C.n=new P.bu(0)
C.K=new P.bu(5e6)
C.L=new P.fQ("element",!0,!1,!1,!1)
C.P=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.Q=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.R=H.c(u([]),[P.f])
C.w=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.D])
C.p=H.c(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.q=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])})()
var v={mangledGlobalNames:{D:"int",A:"double",a8:"num",f:"String",O:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.N},{func:1,ret:-1},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[P.D,[P.d,E.af]]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.N,args:[D.x]},{func:1,ret:P.N,args:[F.a4]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aI]},{func:1,ret:P.N,args:[,]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.f,args:[P.D]},{func:1,ret:P.O,args:[W.E]},{func:1,args:[,]},{func:1,ret:P.O,args:[W.au]},{func:1,ret:P.O,args:[P.f]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[W.aT]},{func:1,ret:P.O,args:[W.T,P.f,P.f,W.bF]},{func:1,ret:-1,args:[P.D,[P.d,D.a3]]},{func:1,ret:P.A},{func:1,ret:-1,args:[P.D,[P.d,U.ab]]},{func:1,ret:-1,args:[P.D,[P.d,M.av]]},{func:1,ret:-1,args:[P.D,[P.d,V.al]]},{func:1,ret:P.N,args:[W.o]},{func:1,args:[W.o]},{func:1,ret:W.T,args:[W.E]},{func:1,ret:P.O,args:[[P.d,D.a3]]},{func:1,ret:[P.aC,,],args:[,]},{func:1,ret:P.N,args:[,],opt:[P.ao]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.N,args:[P.a8]},{func:1,args:[P.f]},{func:1,ret:P.N,args:[F.ax,P.A,P.A]},{func:1,args:[,P.f]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:P.N,args:[P.b3]},{func:1,ret:P.O,args:[V.br]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:-1,args:[W.b7]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aL=0
$.cd=null
$.kr=null
$.k5=!1
$.lk=null
$.lf=null
$.lp=null
$.jy=null
$.jE=null
$.kh=null
$.c2=null
$.d4=null
$.d5=null
$.k6=!1
$.a0=C.k
$.aq=[]
$.ba=null
$.jQ=null
$.kx=null
$.kw=null
$.en=P.kA(P.f,P.bw)
$.kF=null
$.kK=null
$.cx=null
$.kR=null
$.l_=null
$.l2=null
$.l1=null
$.iz=null
$.l0=null
$.kJ=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ni","lt",function(){return H.lj("_$dart_dartClosure")})
u($,"nj","kn",function(){return H.lj("_$dart_js")})
u($,"nn","lu",function(){return H.b5(H.ii({
toString:function(){return"$receiver$"}}))})
u($,"no","lv",function(){return H.b5(H.ii({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"np","lw",function(){return H.b5(H.ii(null))})
u($,"nq","lx",function(){return H.b5(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nt","lA",function(){return H.b5(H.ii(void 0))})
u($,"nu","lB",function(){return H.b5(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ns","lz",function(){return H.b5(H.kY(null))})
u($,"nr","ly",function(){return H.b5(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nw","lD",function(){return H.b5(H.kY(void 0))})
u($,"nv","lC",function(){return H.b5(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nN","ko",function(){return P.mo()})
u($,"nP","lI",function(){return P.mg("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nO","lH",function(){return P.kB(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"nG","lG",function(){return Z.aB(0)})
u($,"nA","lE",function(){return Z.aB(511)})
u($,"nI","aK",function(){return Z.aB(1)})
u($,"nH","bm",function(){return Z.aB(2)})
u($,"nC","bl",function(){return Z.aB(4)})
u($,"nJ","bn",function(){return Z.aB(8)})
u($,"nK","bo",function(){return Z.aB(16)})
u($,"nD","d8",function(){return Z.aB(32)})
u($,"nE","d9",function(){return Z.aB(64)})
u($,"nF","lF",function(){return Z.aB(96)})
u($,"nL","ca",function(){return Z.aB(128)})
u($,"nB","bk",function(){return Z.aB(256)})
u($,"nh","ls",function(){return new V.fB(1e-9)})
u($,"ng","P",function(){return $.ls()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cv,ArrayBufferView:H.cv,Float32Array:H.cu,Float64Array:H.cu,Int16Array:H.hi,Int32Array:H.hj,Int8Array:H.hk,Uint16Array:H.hl,Uint32Array:H.hm,Uint8ClampedArray:H.dH,CanvasPixelArray:H.dH,Uint8Array:H.hn,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.f8,HTMLAnchorElement:W.da,HTMLAreaElement:W.f9,HTMLBaseElement:W.cb,Blob:W.dc,HTMLBodyElement:W.bp,HTMLCanvasElement:W.bO,CanvasRenderingContext2D:W.cf,CDATASection:W.bq,CharacterData:W.bq,Comment:W.bq,ProcessingInstruction:W.bq,Text:W.bq,CSSNumericValue:W.cj,CSSUnitValue:W.cj,CSSPerspective:W.fm,CSSCharsetRule:W.U,CSSConditionRule:W.U,CSSFontFaceRule:W.U,CSSGroupingRule:W.U,CSSImportRule:W.U,CSSKeyframeRule:W.U,MozCSSKeyframeRule:W.U,WebKitCSSKeyframeRule:W.U,CSSKeyframesRule:W.U,MozCSSKeyframesRule:W.U,WebKitCSSKeyframesRule:W.U,CSSMediaRule:W.U,CSSNamespaceRule:W.U,CSSPageRule:W.U,CSSRule:W.U,CSSStyleRule:W.U,CSSSupportsRule:W.U,CSSViewportRule:W.U,CSSStyleDeclaration:W.ck,MSStyleCSSProperties:W.ck,CSS2Properties:W.ck,CSSImageValue:W.aM,CSSKeywordValue:W.aM,CSSPositionValue:W.aM,CSSResourceValue:W.aM,CSSURLImageValue:W.aM,CSSStyleValue:W.aM,CSSMatrixComponent:W.aN,CSSRotation:W.aN,CSSScale:W.aN,CSSSkew:W.aN,CSSTranslation:W.aN,CSSTransformComponent:W.aN,CSSTransformValue:W.fo,CSSUnparsedValue:W.fp,DataTransferItemList:W.fs,HTMLDivElement:W.aA,DOMException:W.ft,ClientRectList:W.dk,DOMRectList:W.dk,DOMRectReadOnly:W.dl,DOMStringList:W.fu,DOMTokenList:W.fv,Element:W.T,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aO,FileList:W.fE,FileWriter:W.fF,HTMLFormElement:W.fJ,Gamepad:W.aP,History:W.fO,HTMLCollection:W.bS,HTMLFormControlsCollection:W.bS,HTMLOptionsCollection:W.bS,ImageData:W.bx,HTMLImageElement:W.cp,KeyboardEvent:W.aT,Location:W.dz,MediaList:W.hb,MIDIInputMap:W.hc,MIDIOutputMap:W.he,MimeType:W.aW,MimeTypeArray:W.hg,PointerEvent:W.aa,MouseEvent:W.aa,DragEvent:W.aa,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cw,RadioNodeList:W.cw,Plugin:W.aY,PluginArray:W.hw,RTCStatsReport:W.hF,HTMLSelectElement:W.hI,SourceBuffer:W.b_,SourceBufferList:W.hR,SpeechGrammar:W.b0,SpeechGrammarList:W.hS,SpeechRecognitionResult:W.b1,Storage:W.hV,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.c_,HTMLTableDataCellElement:W.c_,HTMLTableHeaderCellElement:W.c_,HTMLTableElement:W.dU,HTMLTableRowElement:W.i1,HTMLTableSectionElement:W.i2,HTMLTemplateElement:W.cF,TextTrack:W.b2,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.i4,TextTrackList:W.i5,TimeRanges:W.i9,Touch:W.b4,TouchEvent:W.aI,TouchList:W.id,TrackDefaultList:W.ie,CompositionEvent:W.bE,FocusEvent:W.bE,TextEvent:W.bE,UIEvent:W.bE,URL:W.iw,VideoTrackList:W.iJ,WheelEvent:W.b7,Window:W.cS,DOMWindow:W.cS,Attr:W.cT,CSSRuleList:W.iS,ClientRect:W.ef,DOMRect:W.ef,GamepadList:W.j5,NamedNodeMap:W.ey,MozNamedAttrMap:W.ey,SpeechRecognitionResultList:W.ji,StyleSheetList:W.jj,SVGLength:P.bb,SVGLengthList:P.fX,SVGNumber:P.be,SVGNumberList:P.hr,SVGPointList:P.hy,SVGScriptElement:P.cz,SVGStringList:P.i0,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bi,SVGTransformList:P.ig,AudioBuffer:P.fc,AudioParamMap:P.fd,AudioTrackList:P.ff,AudioContext:P.bM,webkitAudioContext:P.bM,BaseAudioContext:P.bM,OfflineAudioContext:P.hs,WebGLBuffer:P.dd,WebGLProgram:P.dM,WebGL2RenderingContext:P.bZ,WebGLShader:P.dO,WebGLTexture:P.dV,WebGLUniformLocation:P.e2,SQLResultSetRowList:P.hT})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dF.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.dG.$nativeSuperclassTag="ArrayBufferView"
W.cZ.$nativeSuperclassTag="EventTarget"
W.d_.$nativeSuperclassTag="EventTarget"
W.d0.$nativeSuperclassTag="EventTarget"
W.d1.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.lm,[])
else X.lm([])})})()
//# sourceMappingURL=test.dart.js.map
