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
a[c]=function(){a[c]=function(){H.mV(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jT(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jB:function jB(){},
fx:function(){return new P.bR("No element")},
lJ:function(){return new P.bR("Too many elements")},
lI:function(){return new P.bR("Too few elements")},
q:function q(a){this.a=a},
fb:function fb(){},
bK:function bK(){},
ch:function ch(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fL:function fL(a,b,c){this.a=a
this.b=b
this.$ti=c},
fM:function fM(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fN:function fN(a,b,c){this.a=a
this.b=b
this.$ti=c},
cE:function cE(a,b,c){this.a=a
this.b=b
this.$ti=c},
iu:function iu(a,b,c){this.a=a
this.b=b
this.$ti=c},
bI:function bI(){},
dO:function dO(){},
dN:function dN(){},
c2:function(a){var u,t=H.D(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
mB:function(a){return v.types[H.a9(a)]},
mI:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Y(a).$iF},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aE(a)
if(typeof u!=="string")throw H.e(H.bd(a))
return u},
co:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bO:function(a){return H.lP(a)+H.jP(H.bA(a),0,null)},
lP:function(a){var u,t,s,r,q,p,o,n=J.Y(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$ibw){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c2(t.length>1&&C.j.as(t,0)===36?C.j.aR(t,1):t)},
kr:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lX:function(a){var u,t,s,r=H.c([],[P.B])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.bd(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.i.aW(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.e(H.bd(s))}return H.kr(r)},
ks:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.bd(s))
if(s<0)throw H.e(H.bd(s))
if(s>65535)return H.lX(a)}return H.kr(a)},
jE:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.i.aW(u,10))>>>0,56320|u&1023)}throw H.e(P.aS(a,0,1114111,null,null))},
bN:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lW:function(a){var u=H.bN(a).getFullYear()+0
return u},
lU:function(a){var u=H.bN(a).getMonth()+1
return u},
lQ:function(a){var u=H.bN(a).getDate()+0
return u},
lR:function(a){var u=H.bN(a).getHours()+0
return u},
lT:function(a){var u=H.bN(a).getMinutes()+0
return u},
lV:function(a){var u=H.bN(a).getSeconds()+0
return u},
lS:function(a){var u=H.bN(a).getMilliseconds()+0
return u},
bB:function(a){throw H.e(H.bd(a))},
i:function(a,b){if(a==null)J.bD(a)
throw H.e(H.bY(a,b))},
bY:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,s,null)
u=H.a9(J.bD(a))
if(!(b<0)){if(typeof u!=="number")return H.bB(u)
t=b>=u}else t=!0
if(t)return P.T(b,a,s,null,u)
return P.dw(b,s)},
mu:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bP(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bP(a,c,!0,b,"end",u)
return new P.aF(!0,b,"end",null)},
bd:function(a){return new P.aF(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.dr()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.l6})
u.name=""}else u.toString=H.l6
return u},
l6:function(){return J.aE(this.dartException)},
v:function(a){throw H.e(a)},
C:function(a){throw H.e(P.bo(a))},
aZ:function(a){var u,t,s,r,q,p
a=H.l5(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hX(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hY:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kA:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
km:function(a,b){return new H.h9(a,b==null?null:b.method)},
jC:function(a,b){var u=b==null,t=u?null:b.method
return new H.fB(a,t,u?null:b.receiver)},
ap:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.js(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.i.aW(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jC(H.k(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.km(H.k(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.l9()
q=$.la()
p=$.lb()
o=$.lc()
n=$.lf()
m=$.lg()
l=$.le()
$.ld()
k=$.li()
j=$.lh()
i=r.a2(u)
if(i!=null)return f.$1(H.jC(H.D(u),i))
else{i=q.a2(u)
if(i!=null){i.method="call"
return f.$1(H.jC(H.D(u),i))}else{i=p.a2(u)
if(i==null){i=o.a2(u)
if(i==null){i=n.a2(u)
if(i==null){i=m.a2(u)
if(i==null){i=l.a2(u)
if(i==null){i=o.a2(u)
if(i==null){i=k.a2(u)
if(i==null){i=j.a2(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.km(H.D(u),i))}}return f.$1(new H.i9(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dC()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aF(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dC()
return a},
c0:function(a){var u
if(a==null)return new H.ep(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ep(a)},
mx:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.S(0,a[u],a[t])}return b},
mH:function(a,b,c,d,e,f){H.n(a,"$ibs")
switch(H.a9(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.t("Unsupported number of arguments for wrapped closure"))},
bX:function(a,b){var u
H.a9(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mH)
a.$identity=u
return u},
lA:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hC().constructor.prototype):Object.create(new H.c5(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aG
if(typeof t!=="number")return t.q()
$.aG=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.ka(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.mB,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.k8:H.jv
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.e("Error in reflectionInfo.")
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
lx:function(a,b,c,d){var u=H.jv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ka:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lz(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lx(t,!r,u,b)
if(t===0){r=$.aG
if(typeof r!=="number")return r.q()
$.aG=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c6
return new Function(r+H.k(q==null?$.c6=H.eW("self"):q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aG
if(typeof r!=="number")return r.q()
$.aG=r+1
o+=r
r="return function("+o+"){return this."
q=$.c6
return new Function(r+H.k(q==null?$.c6=H.eW("self"):q)+"."+H.k(u)+"("+o+");}")()},
ly:function(a,b,c,d){var u=H.jv,t=H.k8
switch(b?-1:a){case 0:throw H.e(H.m0("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lz:function(a,b){var u,t,s,r,q,p,o,n=$.c6
if(n==null)n=$.c6=H.eW("self")
u=$.k7
if(u==null)u=$.k7=H.eW("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ly(s,!q,t,b)
if(s===1){n="return function(){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+");"
u=$.aG
if(typeof u!=="number")return u.q()
$.aG=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+", "+o+");"
u=$.aG
if(typeof u!=="number")return u.q()
$.aG=u+1
return new Function(n+u+"}")()},
jT:function(a,b,c,d,e,f,g){return H.lA(a,b,H.a9(c),d,!!e,!!f,g)},
jv:function(a){return a.a},
k8:function(a){return a.c},
eW:function(a){var u,t,s,r=new H.c5("self","target","receiver","name"),q=J.jz(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
J:function(a){if(a==null)H.mo("boolean expression must not be null")
return a},
D:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aC(a,"String"))},
nz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aC(a,"double"))},
mN:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aC(a,"num"))},
jQ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aC(a,"bool"))},
a9:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aC(a,"int"))},
l3:function(a,b){throw H.e(H.aC(a,H.c2(H.D(b).substring(2))))},
mP:function(a,b){throw H.e(H.lw(a,H.c2(H.D(b).substring(2))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Y(a)[b])return a
H.l3(a,b)},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Y(a)[b]
else u=!0
if(u)return a
H.mP(a,b)},
jY:function(a){if(a==null)return a
if(!!J.Y(a).$ib)return a
throw H.e(H.aC(a,"List<dynamic>"))},
mJ:function(a,b){var u
if(a==null)return a
u=J.Y(a)
if(!!u.$ib)return a
if(u[b])return a
H.l3(a,b)},
kY:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a9(u)]
else return a.$S()}return},
eL:function(a,b){var u
if(typeof a=="function")return!0
u=H.kY(J.Y(a))
if(u==null)return!1
return H.kP(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.jM)return a
$.jM=!0
try{if(H.eL(a,b))return a
u=H.jp(b)
t=H.aC(a,u)
throw H.e(t)}finally{$.jM=!1}},
jU:function(a,b){if(a!=null&&!H.jS(a,b))H.v(H.aC(a,H.jp(b)))
return a},
aC:function(a,b){return new H.hZ("TypeError: "+P.d8(a)+": type '"+H.kT(a)+"' is not a subtype of type '"+b+"'")},
lw:function(a,b){return new H.eX("CastError: "+P.d8(a)+": type '"+H.kT(a)+"' is not a subtype of type '"+b+"'")},
kT:function(a){var u,t=J.Y(a)
if(!!t.$ic7){u=H.kY(t)
if(u!=null)return H.jp(u)
return"Closure"}return H.bO(a)},
mo:function(a){throw H.e(new H.iv(a))},
mV:function(a){throw H.e(new P.f3(H.D(a)))},
m0:function(a){return new H.ho(a)},
kZ:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bA:function(a){if(a==null)return
return a.$ti},
nA:function(a,b,c){return H.c1(a["$a"+H.k(c)],H.bA(b))},
c_:function(a,b,c,d){var u
H.D(c)
H.a9(d)
u=H.c1(a["$a"+H.k(c)],H.bA(b))
return u==null?null:u[d]},
ak:function(a,b,c){var u
H.D(b)
H.a9(c)
u=H.c1(a["$a"+H.k(b)],H.bA(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.a9(b)
u=H.bA(a)
return u==null?null:u[b]},
jp:function(a){return H.bz(a,null)},
bz:function(a,b){var u,t
H.m(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c2(a[0].name)+H.jP(a,1,b)
if(typeof a=="function")return H.c2(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a9(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.i(b,t)
return H.k(b[t])}if('func' in a)return H.mh(a,b)
if('futureOr' in a)return"FutureOr<"+H.bz("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mh:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
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
p=C.j.q(p,a0[n])
m=u[q]
if(m!=null&&m!==P.L)p+=" extends "+H.bz(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bz(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bz(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bz(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.mw(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.D(b[h])
j=j+i+H.bz(e[d],a0)+(" "+H.k(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jP:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.bb("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bz(p,c)}return"<"+u.i(0)+">"},
c1:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jR:function(a,b,c,d){var u,t
H.D(b)
H.jY(c)
H.D(d)
if(a==null)return!1
u=H.bA(a)
t=J.Y(a)
if(t[b]==null)return!1
return H.kW(H.c1(t[d],u),null,c,null)},
m:function(a,b,c,d){H.D(b)
H.jY(c)
H.D(d)
if(a==null)return a
if(H.jR(a,b,c,d))return a
throw H.e(H.aC(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c2(b.substring(2))+H.jP(c,0,null),v.mangledGlobalNames)))},
kW:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aw(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aw(a[t],b,c[t],d))return!1
return!0},
nx:function(a,b,c){return a.apply(b,H.c1(J.Y(b)["$a"+H.k(c)],H.bA(b)))},
l0:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="K"||a===-1||a===-2||H.l0(u)}return!1},
jS:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="K"||b===-1||b===-2||H.l0(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jS(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eL(a,b)}u=J.Y(a).constructor
t=H.bA(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aw(u,null,b,null)},
G:function(a,b){if(a!=null&&!H.jS(a,b))throw H.e(H.aC(a,H.jp(b)))
return a},
aw:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aw(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="K")return!0
if('func' in c)return H.kP(a,b,c,d)
if('func' in a)return c.name==="bs"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aw("type" in a?a.type:l,b,s,d)
else if(H.aw(a,b,s,d))return!0
else{if(!('$i'+"cd" in t.prototype))return!1
r=t.prototype["$a"+"cd"]
q=H.c1(r,u?a.slice(1):l)
return H.aw(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kW(H.c1(m,u),b,p,d)},
kP:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.mM(h,b,g,d)},
mM:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aw(c[s],d,a[s],b))return!1}return!0},
ny:function(a,b,c){Object.defineProperty(a,H.D(b),{value:c,enumerable:false,writable:true,configurable:true})},
mK:function(a){var u,t,s,r,q=H.D($.l_.$1(a)),p=$.jg[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jm[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.D($.kV.$2(a,q))
if(q!=null){p=$.jg[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jm[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jo(u)
$.jg[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jm[q]=u
return u}if(s==="-"){r=H.jo(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.l2(a,u)
if(s==="*")throw H.e(P.kB(q))
if(v.leafTags[q]===true){r=H.jo(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.l2(a,u)},
l2:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jZ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jo:function(a){return J.jZ(a,!1,null,!!a.$iF)},
mL:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jo(u)
else return J.jZ(u,c,null,null)},
mF:function(){if(!0===$.jX)return
$.jX=!0
H.mG()},
mG:function(){var u,t,s,r,q,p,o,n
$.jg=Object.create(null)
$.jm=Object.create(null)
H.mE()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l4.$1(q)
if(p!=null){o=H.mL(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mE:function(){var u,t,s,r,q,p,o=C.A()
o=H.bW(C.B,H.bW(C.C,H.bW(C.u,H.bW(C.u,H.bW(C.D,H.bW(C.E,H.bW(C.F(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.l_=new H.jj(r)
$.kV=new H.jk(q)
$.l4=new H.jl(p)},
bW:function(a,b){return a(b)||b},
lL:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.e(new P.fp("Illegal RegExp pattern ("+String(r)+")",a))},
mS:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mv:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
l5:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
k0:function(a,b,c){var u=H.mT(a,b,c)
return u},
mT:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.l5(b),'g'),H.mv(c))},
hX:function hX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h9:function h9(a,b){this.a=a
this.b=b},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a){this.a=a},
js:function js(a){this.a=a},
ep:function ep(a){this.a=a
this.b=null},
c7:function c7(){},
hM:function hM(){},
hC:function hC(){},
c5:function c5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hZ:function hZ(a){this.a=a},
eX:function eX(a){this.a=a},
ho:function ho(a){this.a=a},
iv:function iv(a){this.a=a},
aN:function aN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fF:function fF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
df:function df(a,b){this.a=a
this.$ti=b},
fG:function fG(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
fA:function fA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cQ:function(a){return a},
by:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bY(b,a))},
mg:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.mu(a,b,c))
return b},
cl:function cl(){},
dm:function dm(){},
ck:function ck(){},
dn:function dn(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
dp:function dp(){},
h5:function h5(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
mw:function(a){return J.kf(a?Object.keys(a):[],null)},
mO:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eM:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jX==null){H.mF()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.kB("Return interceptor for "+H.k(u(a,q))))}s=a.constructor
r=s==null?null:s[$.k2()]
if(r!=null)return r
r=H.mK(a)
if(r!=null)return r
if(typeof a=="function")return C.N
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.k2(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
lK:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.ju(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.aS(a,0,4294967295,"length",null))
return J.kf(new Array(a),b)},
kf:function(a,b){return J.jz(H.c(a,[b]))},
jz:function(a){H.jY(a)
a.fixed$length=Array
return a},
Y:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.fz.prototype}if(typeof a=="string")return J.b5.prototype
if(a==null)return J.db.prototype
if(typeof a=="boolean")return J.fy.prototype
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.L)return a
return J.eM(a)},
my:function(a){if(typeof a=="number")return J.bt.prototype
if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.L)return a
return J.eM(a)},
jh:function(a){if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.L)return a
return J.eM(a)},
ji:function(a){if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.L)return a
return J.eM(a)},
mz:function(a){if(typeof a=="number")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bw.prototype
return a},
mA:function(a){if(typeof a=="number")return J.bt.prototype
if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bw.prototype
return a},
jV:function(a){if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bw.prototype
return a},
jW:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.L)return a
return J.eM(a)},
lo:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.my(a).q(a,b)},
a0:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Y(a).t(a,b)},
k4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mA(a).L(a,b)},
lp:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mz(a).v(a,b)},
lq:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jh(a).j(a,b)},
lr:function(a,b,c,d){return J.jW(a).hw(a,b,c,d)},
jt:function(a,b){return J.ji(a).w(a,b)},
ls:function(a,b){return J.ji(a).J(a,b)},
lt:function(a){return J.jW(a).ghC(a)},
cV:function(a){return J.Y(a).gH(a)},
bC:function(a){return J.ji(a).gN(a)},
bD:function(a){return J.jh(a).gl(a)},
k5:function(a){return J.ji(a).ih(a)},
lu:function(a,b,c){return J.jV(a).aS(a,b,c)},
lv:function(a){return J.jV(a).iu(a)},
aE:function(a){return J.Y(a).i(a)},
a:function a(){},
fy:function fy(){},
db:function db(){},
dc:function dc(){},
hd:function hd(){},
bw:function bw(){},
b6:function b6(){},
ay:function ay(a){this.$ti=a},
jA:function jA(a){this.$ti=a},
aq:function aq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bt:function bt(){},
da:function da(){},
fz:function fz(){},
b5:function b5(){}},P={
m6:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mp()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bX(new P.ix(s),1)).observe(u,{childList:true})
return new P.iw(s,u,t)}else if(self.setImmediate!=null)return P.mq()
return P.mr()},
m7:function(a){self.scheduleImmediate(H.bX(new P.iy(H.l(a,{func:1,ret:-1})),0))},
m8:function(a){self.setImmediate(H.bX(new P.iz(H.l(a,{func:1,ret:-1})),0))},
m9:function(a){P.jI(C.m,H.l(a,{func:1,ret:-1}))},
jI:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.i.W(a.a,1000)
return P.me(u<0?0:u,b)},
kz:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.aX]})
u=C.i.W(a.a,1000)
return P.mf(u<0?0:u,b)},
me:function(a,b){var u=new P.ev()
u.ej(a,b)
return u},
mf:function(a,b){var u=new P.ev()
u.ek(a,b)
return u},
ma:function(a,b){var u,t,s
b.a=1
try{a.dD(new P.iI(b),new P.iJ(b),null)}catch(s){u=H.ap(s)
t=H.c0(s)
P.mQ(new P.iK(b,u,t))}},
kK:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.n(a.c,"$iav")
if(u>=4){t=b.bB()
b.a=a.a
b.c=a.c
P.cH(b,t)}else{t=H.n(b.c,"$ib1")
b.a=2
b.c=a
a.cC(t)}},
cH:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.n(g.c,"$iaa")
g=g.b
r=s.a
q=s.b
g.toString
P.jb(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cH(h.a,b)}g=h.a
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
if(m){H.n(o,"$iaa")
g=g.b
r=o.a
q=o.b
g.toString
P.jb(i,i,g,r,q)
return}l=$.V
if(l!=n)$.V=n
else l=i
g=b.c
if(g===8)new P.iO(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.iN(u,b,o).$0()}else if((g&2)!==0)new P.iM(h,u,b).$0()
if(l!=null)$.V=l
g=u.b
if(!!J.Y(g).$icd){if(g.a>=4){k=H.n(q.c,"$ib1")
q.c=null
b=q.aV(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kK(g,q)
return}}j=b.b
k=H.n(j.c,"$ib1")
j.c=null
b=j.aV(k)
g=u.a
r=u.b
if(!g){H.G(r,H.x(j,0))
j.a=4
j.c=r}else{H.n(r,"$iaa")
j.a=8
j.c=r}h.a=j
g=j}},
mk:function(a,b){if(H.eL(a,{func:1,args:[P.L,P.ai]}))return H.l(a,{func:1,ret:null,args:[P.L,P.ai]})
if(H.eL(a,{func:1,args:[P.L]}))return H.l(a,{func:1,ret:null,args:[P.L]})
throw H.e(P.ju(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mj:function(){var u,t
for(;u=$.bV,u!=null;){$.cS=null
t=u.b
$.bV=t
if(t==null)$.cR=null
u.a.$0()}},
mn:function(){$.jN=!0
try{P.mj()}finally{$.cS=null
$.jN=!1
if($.bV!=null)$.k3().$1(P.kX())}},
kS:function(a){var u=new P.dR(H.l(a,{func:1,ret:-1}))
if($.bV==null){$.bV=$.cR=u
if(!$.jN)$.k3().$1(P.kX())}else $.cR=$.cR.b=u},
mm:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.bV
if(u==null){P.kS(a)
$.cS=$.cR
return}t=new P.dR(a)
s=$.cS
if(s==null){t.b=u
$.bV=$.cS=t}else{t.b=s.b
$.cS=s.b=t
if(t.b==null)$.cR=t}},
mQ:function(a){var u,t=null,s={func:1,ret:-1}
H.l(a,s)
u=$.V
if(C.k===u){P.jd(t,t,C.k,a)
return}u.toString
P.jd(t,t,u,H.l(u.bI(a),s))},
ky:function(a,b){var u,t={func:1,ret:-1}
H.l(b,t)
u=$.V
if(u===C.k){u.toString
return P.jI(a,b)}return P.jI(a,H.l(u.bI(b),t))},
m4:function(a,b){var u,t,s={func:1,ret:-1,args:[P.aX]}
H.l(b,s)
u=$.V
if(u===C.k){u.toString
return P.kz(a,b)}t=u.cN(b,P.aX)
$.V.toString
return P.kz(a,H.l(t,s))},
jb:function(a,b,c,d,e){var u={}
u.a=d
P.mm(new P.jc(u,e))},
kQ:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.V
if(t===c)return d.$0()
$.V=c
u=t
try{t=d.$0()
return t}finally{$.V=u}},
kR:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.G(e,g)
t=$.V
if(t===c)return d.$1(e)
$.V=c
u=t
try{t=d.$1(e)
return t}finally{$.V=u}},
ml:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.G(e,h)
H.G(f,i)
t=$.V
if(t===c)return d.$2(e,f)
$.V=c
u=t
try{t=d.$2(e,f)
return t}finally{$.V=u}},
jd:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.bI(d):c.hD(d,-1)
P.kS(d)},
ix:function ix(a){this.a=a},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
ev:function ev(){this.c=0},
j7:function j7(a,b){this.a=a
this.b=b},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b1:function b1(a,b,c,d,e){var _=this
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
iH:function iH(a,b){this.a=a
this.b=b},
iL:function iL(a,b){this.a=a
this.b=b},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
iK:function iK(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iP:function iP(a){this.a=a},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a){this.a=a
this.b=null},
hF:function hF(){},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
cs:function cs(){},
hG:function hG(){},
aX:function aX(){},
aa:function aa(a,b){this.a=a
this.b=b},
ja:function ja(){},
jc:function jc(a,b){this.a=a
this.b=b},
iU:function iU(){},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a,b){this.a=a
this.b=b},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
kg:function(a,b){return new H.aN([a,b])},
lM:function(a){return H.mx(a,new H.aN([null,null]))},
dg:function(a){return new P.iS([a])},
jL:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
md:function(a,b,c){var u=new P.e6(a,b,[c])
u.c=a.e
return u},
lH:function(a,b,c){var u,t
if(P.jO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.f])
C.a.h($.aj,a)
try{P.mi(a,u)}finally{if(0>=$.aj.length)return H.i($.aj,-1)
$.aj.pop()}t=P.kw(b,H.mJ(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
jy:function(a,b,c){var u,t
if(P.jO(a))return b+"..."+c
u=new P.bb(b)
C.a.h($.aj,a)
try{t=u
t.a=P.kw(t.a,a,", ")}finally{if(0>=$.aj.length)return H.i($.aj,-1)
$.aj.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jO:function(a){var u,t
for(u=$.aj.length,t=0;t<u;++t)if(a===$.aj[t])return!0
return!1},
mi:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.f],"$ab")
u=a.gN(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.u())return
r=H.k(u.gD(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.u()){if(s<=5)return
if(0>=b.length)return H.i(b,-1)
q=b.pop()
if(0>=b.length)return H.i(b,-1)
p=b.pop()}else{o=u.gD(u);++s
if(!u.u()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.i(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gD(u);++s
for(;u.u();o=n,n=m){m=u.gD(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.k(o)
q=H.k(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kh:function(a,b){var u,t,s=P.dg(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t)s.h(0,H.G(a[t],b))
return s},
kj:function(a){var u,t={}
if(P.jO(a))return"{...}"
u=new P.bb("")
try{C.a.h($.aj,a)
u.a+="{"
t.a=!0
J.ls(a,new P.fK(t,u))
u.a+="}"}finally{if(0>=$.aj.length)return H.i($.aj,-1)
$.aj.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iS:function iS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bU:function bU(a){this.a=a
this.c=this.b=null},
e6:function e6(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fH:function fH(){},
w:function w(){},
fJ:function fJ(){},
fK:function fK(a,b){this.a=a
this.b=b},
a4:function a4(){},
iZ:function iZ(){},
e7:function e7(){},
c8:function c8(){},
c9:function c9(){},
fd:function fd(){},
fv:function fv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fu:function fu(a){this.a=a},
ic:function ic(){},
id:function id(){},
j8:function j8(a){this.b=0
this.c=a},
lF:function(a){if(a instanceof H.c7)return a.i(0)
return"Instance of '"+H.bO(a)+"'"},
lN:function(a,b,c){var u,t
H.G(b,c)
u=J.lK(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.S(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
ki:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bC(a);u.u();)C.a.h(s,H.G(u.gD(u),c))
if(b)return s
return H.m(J.jz(s),"$ib",t,"$ab")},
jH:function(a){var u,t,s=P.B
H.m(a,"$ih",[s],"$ah")
if(a.constructor===Array){H.m(a,"$iay",[s],"$aay")
u=a.length
t=P.jG(0,null,u)
return H.ks(t<u?C.a.dS(a,0,t):a)}return P.m2(a,0,null)},
m2:function(a,b,c){var u,t,s
H.m(a,"$ih",[P.B],"$ah")
u=J.bC(a)
for(t=0;t<b;++t)if(!u.u())throw H.e(P.aS(b,0,t,null,null))
s=[]
for(;u.u();)s.push(u.gD(u))
return H.ks(s)},
lY:function(a){return new H.fA(a,H.lL(a,!1,!0,!1))},
kw:function(a,b,c){var u=J.bC(b)
if(!u.u())return a
if(c.length===0){do a+=H.k(u.gD(u))
while(u.u())}else{a+=H.k(u.gD(u))
for(;u.u();)a=a+c+H.k(u.gD(u))}return a},
kO:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.B],"$ab")
if(c===C.l){u=$.ln().b
u=u.test(b)}else u=!1
if(u)return b
t=C.H.hG(H.G(b,H.ak(c,"c8",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.i(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jE(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lB:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lC:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d4:function(a){if(a>=10)return""+a
return"0"+a},
kc:function(a,b){return new P.aJ(1e6*b+1000*a)},
d8:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aE(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lF(a)},
ju:function(a,b,c){return new P.aF(!0,a,b,c)},
dw:function(a,b){return new P.bP(null,null,!0,a,b,"Value not in range")},
aS:function(a,b,c,d,e){return new P.bP(b,c,!0,a,d,"Invalid value")},
jG:function(a,b,c){if(0>a||a>c)throw H.e(P.aS(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.aS(b,a,c,"end",null))
return b}return c},
jF:function(a,b){if(typeof a!=="number")return a.dO()
if(a<0)throw H.e(P.aS(a,0,null,b,null))},
T:function(a,b,c,d,e){var u=H.a9(e==null?J.bD(b):e)
return new P.fw(u,!0,a,c,"Index out of range")},
ao:function(a){return new P.ia(a)},
kB:function(a){return new P.i8(a)},
kv:function(a){return new P.bR(a)},
bo:function(a){return new P.eZ(a)},
t:function(a){return new P.dZ(a)},
k_:function(a){H.mO(a)},
N:function N(){},
bp:function bp(a,b){this.a=a
this.b=b},
y:function y(){},
aJ:function aJ(a){this.a=a},
f9:function f9(){},
fa:function fa(){},
br:function br(){},
eP:function eP(){},
dr:function dr(){},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bP:function bP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fw:function fw(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ia:function ia(a){this.a=a},
i8:function i8(a){this.a=a},
bR:function bR(a){this.a=a},
eZ:function eZ(a){this.a=a},
hc:function hc(){},
dC:function dC(){},
f3:function f3(a){this.a=a},
dZ:function dZ(a){this.a=a},
fp:function fp(a,b){this.a=a
this.b=b},
bs:function bs(){},
B:function B(){},
h:function h(){},
aM:function aM(){},
b:function b(){},
M:function M(){},
K:function K(){},
a8:function a8(){},
L:function L(){},
ai:function ai(){},
f:function f(){},
bb:function bb(a){this.a=a},
be:function(a){var u,t,s,r,q
if(a==null)return
u=P.kg(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.D(t[r])
u.S(0,q,a[q])}return u},
ms:function(a){var u={}
a.J(0,new P.je(u))
return u},
je:function je(a){this.a=a},
fl:function fl(a,b){this.a=a
this.b=b},
fm:function fm(){},
fn:function fn(){},
iT:function iT(){},
as:function as(){},
b7:function b7(){},
fD:function fD(){},
ba:function ba(){},
ha:function ha(){},
hg:function hg(){},
cp:function cp(){},
hJ:function hJ(){},
p:function p(){},
bc:function bc(){},
hW:function hW(){},
e4:function e4(){},
e5:function e5(){},
ef:function ef(){},
eg:function eg(){},
er:function er(){},
es:function es(){},
ey:function ey(){},
ez:function ez(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(a){this.a=a},
eU:function eU(){},
bE:function bE(){},
hb:function hb(){},
dS:function dS(){},
cZ:function cZ(){},
dv:function dv(){},
bQ:function bQ(){},
dz:function dz(){},
dM:function dM(){},
hB:function hB(){},
en:function en(){},
eo:function eo(){}},W={
k6:function(){var u=document.createElement("a")
return u},
k9:function(){var u=document.createElement("canvas")
return u},
lD:function(a,b,c){var u=document.body,t=(u&&C.r).a1(u,a,b,c)
t.toString
u=W.A
u=new H.cE(new W.af(t),H.l(new W.fc(),{func:1,ret:P.N,args:[u]}),[u])
return H.n(u.gap(u),"$iP")},
lE:function(a){H.n(a,"$id")
return"wheel"},
cc:function(a){var u,t,s,r="element tag unavailable"
try{u=J.jW(a)
t=u.gdB(a)
if(typeof t==="string")r=u.gdB(a)}catch(s){H.ap(s)}return r},
iR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kM:function(a,b,c,d){var u=W.iR(W.iR(W.iR(W.iR(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.kU(new W.iG(c),W.o)
if(u!=null&&!0)J.lr(a,b,u,!1)
return new W.iF(a,b,u,!1,[e])},
kL:function(a){var u=W.k6(),t=window.location
u=new W.bx(new W.iY(u,t))
u.e4(a)
return u},
mb:function(a,b,c,d){H.n(a,"$iP")
H.D(b)
H.D(c)
H.n(d,"$ibx")
return!0},
mc:function(a,b,c,d){var u,t,s
H.n(a,"$iP")
H.D(b)
H.D(c)
u=H.n(d,"$ibx").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kN:function(){var u=P.f,t=P.kh(C.o,u),s=H.x(C.o,0),r=H.l(new W.j5(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.j4(t,P.dg(u),P.dg(u),P.dg(u),null)
t.eg(null,new H.fN(C.o,r,[s,u]),q,null)
return t},
kU:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.V
if(u===C.k)return a
return u.cN(a,b)},
r:function r(){},
eN:function eN(){},
cW:function cW(){},
eO:function eO(){},
c4:function c4(){},
cY:function cY(){},
bl:function bl(){},
bF:function bF(){},
bm:function bm(){},
ca:function ca(){},
f_:function f_(){},
R:function R(){},
cb:function cb(){},
f0:function f0(){},
aH:function aH(){},
aI:function aI(){},
f1:function f1(){},
f2:function f2(){},
f5:function f5(){},
ar:function ar(){},
f6:function f6(){},
d5:function d5(){},
d6:function d6(){},
f7:function f7(){},
f8:function f8(){},
iB:function iB(a,b){this.a=a
this.b=b},
P:function P(){},
fc:function fc(){},
o:function o(){},
d:function d(){},
aK:function aK(){},
fj:function fj(){},
fk:function fk(){},
fo:function fo(){},
aL:function aL(){},
ft:function ft(){},
bJ:function bJ(){},
aO:function aO(){},
dh:function dh(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(a){this.a=a},
fX:function fX(){},
fY:function fY(a){this.a=a},
aQ:function aQ(){},
fZ:function fZ(){},
a5:function a5(){},
af:function af(a){this.a=a},
A:function A(){},
cm:function cm(){},
aR:function aR(){},
hf:function hf(){},
hm:function hm(){},
hn:function hn(a){this.a=a},
hp:function hp(){},
aT:function aT(){},
hz:function hz(){},
aU:function aU(){},
hA:function hA(){},
aV:function aV(){},
hD:function hD(){},
hE:function hE(a){this.a=a},
az:function az(){},
bS:function bS(){},
dD:function dD(){},
hK:function hK(){},
hL:function hL(){},
ct:function ct(){},
aW:function aW(){},
aA:function aA(){},
hN:function hN(){},
hO:function hO(){},
hQ:function hQ(){},
aY:function aY(){},
aB:function aB(){},
hU:function hU(){},
hV:function hV(){},
bv:function bv(){},
ib:function ib(){},
is:function is(){},
b0:function b0(){},
cF:function cF(){},
cG:function cG(){},
iC:function iC(){},
dU:function dU(){},
iQ:function iQ(){},
ec:function ec(){},
j1:function j1(){},
j2:function j2(){},
iA:function iA(){},
iD:function iD(a){this.a=a},
iE:function iE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jK:function jK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iF:function iF(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iG:function iG(a){this.a=a},
bx:function bx(a){this.a=a},
z:function z(){},
dq:function dq(a){this.a=a},
h7:function h7(a){this.a=a},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(){},
j_:function j_(){},
j0:function j0(){},
j4:function j4(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
j5:function j5(){},
j3:function j3(){},
d9:function d9(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
am:function am(){},
iY:function iY(a,b){this.a=a
this.b=b},
eA:function eA(a){this.a=a},
j9:function j9(a){this.a=a},
dT:function dT(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
e_:function e_(){},
e0:function e0(){},
e2:function e2(){},
e3:function e3(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ed:function ed(){},
ee:function ee(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
cM:function cM(){},
cN:function cN(){},
el:function el(){},
em:function em(){},
eq:function eq(){},
et:function et(){},
eu:function eu(){},
cO:function cO(){},
cP:function cP(){},
ew:function ew(){},
ex:function ex(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){}},O={
jw:function(a){var u=new O.a1([a])
u.c9(a)
return u},
a1:function a1(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
ci:function ci(){this.b=this.a=null},
dj:function dj(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fP:function fP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dk:function dk(){},
fQ:function fQ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aP:function aP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fS:function fS(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fT:function fT(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bT:function bT(){}},E={
m_:function(a,b){var u=new E.hi(a)
u.e0(a,b)
return u},
m3:function(a,b,c,d,e){var u,t,s=J.Y(a)
if(!!s.$ibF)return E.kx(a,!0,!0,!0,!1)
u=W.k9()
t=u.style
t.width="100%"
t.height="100%"
s.gcO(a).h(0,u)
return E.kx(u,!0,!0,!0,!1)},
kx:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dJ(),j=H.n(C.I.dN(a,"webgl2",P.lM(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibQ")
if(j==null)H.v(P.t("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.m_(j,a)
H.a9(j.getParameter(3379))
H.a9(j.getParameter(34076))
u=new X.dP(a)
t=new X.fC()
t.sfF(P.dg(P.B))
u.b=t
t=new X.h_(u)
t.f=0
t.r=V.du()
t.x=V.du()
t.ch=t.Q=1
u.c=t
t=new X.fI(u)
t.r=0
t.x=V.du()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hT(u)
t.f=V.du()
t.r=V.du()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seF(H.c([],[[P.cs,P.L]]))
t=u.z
s=document
r=W.a5
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a7(s,"contextmenu",H.l(u.gf2(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a7(a,"focus",H.l(u.gf8(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a7(a,"blur",H.l(u.geX(),o),!1,p))
t=u.z
n=W.aO
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a7(s,"keyup",H.l(u.gfc(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a7(s,"keydown",H.l(u.gfa(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a7(a,"mousedown",H.l(u.gfg(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,"mouseup",H.l(u.gfk(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,l,H.l(u.gfi(),q),!1,r))
n=u.z
m=W.b0;(n&&C.a).h(n,W.a7(a,H.D(W.lE(a)),H.l(u.gfm(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a7(s,l,H.l(u.gf4(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a7(s,"mouseup",H.l(u.gf6(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a7(s,"pointerlockchange",H.l(u.gfo(),o),!1,p))
p=u.z
o=W.aB
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a7(a,"touchstart",H.l(u.gfC(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchend",H.l(u.gfw(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchmove",H.l(u.gfA(),s),!1,o))
k.Q=!0
k.ch=!1
k.cx=new P.bp(Date.now(),!1)
k.cy=0
k.cE()
return k},
eV:function eV(){},
ag:function ag(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hi:function hi(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hj:function hj(a){this.a=a},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
dJ:function dJ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
hP:function hP(a){this.a=a}},Z={
m5:function(a,b,c){var u
H.m(c,"$ib",[P.B],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cQ(c)),35044)
a.bindBuffer(b,null)
return new Z.dQ(b,u)},
au:function(a){return new Z.b_(a)},
dQ:function dQ(a,b){this.a=a
this.b=b},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
it:function it(a){this.a=a},
d0:function d0(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a){this.a=a}},D={
ax:function(){var u=new D.bH()
u.sa9(null)
u.saw(null)
u.c=null
u.d=0
return u},
eY:function eY(){},
bH:function bH(){var _=this
_.d=_.c=_.b=_.a=null},
ff:function ff(a){this.a=a},
fg:function fg(a){this.a=a},
E:function E(){this.b=null},
cf:function cf(a){this.b=null
this.$ti=a},
cg:function cg(a){this.b=null
this.$ti=a},
W:function W(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bq:function bq(){var _=this
_.d=_.c=_.b=_.a=null},
a2:function a2(){},
de:function de(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dt:function dt(){},
dB:function dB(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){}},X={d1:function d1(a,b){this.a=a
this.b=b},dd:function dd(a,b){this.a=a
this.b=b},fC:function fC(){this.d=this.b=this.a=null},fI:function fI(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cj:function cj(a,b,c){this.a=a
this.b=b
this.c=c},h_:function h_(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hT:function hT(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dP:function dP(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lG:function(a){var u=new X.fq(),t=V.X(1)
u.a=new V.b3(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kt
if(t==null){t=V.lZ(0,0,1,1)
$.kt=t}u.r=t
return u},
d2:function d2(){},
fq:function fq(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ds:function ds(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){},
l1:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="testCanvas",f=null,e=V.m1("Test 003"),d=W.k9()
d.className="pageLargeCanvas"
d.id=g
e.a.appendChild(d)
u=[P.f]
e.cL(H.c(["A test of the Material Light Shader with a solid color directional lighting."],u))
e.cL(H.c(["\xab[Back to Tests|../]"],u))
t=new E.ag()
t.a=""
t.b=!0
u=E.ag
t.sew(0,O.jw(u))
t.y.bk(t.gi0(),t.gi3())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sc6(0,f)
t.saK(f)
t.sc6(0,F.mW())
s=new U.dy()
s.r=s.f=s.e=s.d=s.c=s.b=s.a=0
s.sdK(0)
s.sdr(0,0)
s.sdz(0)
r=s.d
if(!(Math.abs(r-0.1)<$.Q().a)){s.d=0.1
r=new D.W("deltaYaw",r,0.1,[P.y])
r.b=!0
s.au(r)}r=s.e
if(!(Math.abs(r-0.21)<$.Q().a)){s.e=0.21
r=new D.W("deltaPitch",r,0.21,[P.y])
r.b=!0
s.au(r)}r=s.f
if(!(Math.abs(r-0.32)<$.Q().a)){s.f=0.32
r=new D.W("deltaRoll",r,0.32,[P.y])
r.b=!0
s.au(r)}t.saK(s)
q=new O.dj()
q.ses(O.jw(V.ab))
q.e.bk(q.geT(),q.geV())
s=new O.aP(q,"emission")
s.c=C.c
s.f=new V.a_(0,0,0)
q.f=s
s=new O.aP(q,"ambient")
s.c=C.c
s.f=new V.a_(0,0,0)
q.r=s
s=new O.aP(q,"diffuse")
s.c=C.c
s.f=new V.a_(0,0,0)
q.x=s
s=new O.aP(q,"invDiffuse")
s.c=C.c
s.f=new V.a_(0,0,0)
q.y=s
s=new O.fT(q,"specular")
s.c=C.c
s.f=new V.a_(0,0,0)
s.ch=100
q.z=s
s=new O.fQ(q,"bump")
s.c=C.c
q.Q=s
q.ch=null
s=new O.aP(q,"reflect")
s.c=C.c
s.f=new V.a_(0,0,0)
q.cx=s
s=new O.fS(q,"refract")
s.c=C.c
s.f=new V.a_(0,0,0)
s.ch=1
q.cy=s
s=new O.fP(q,"alpha")
s.c=C.c
s.f=1
q.db=s
s=new D.de()
s.c9(D.a2)
s.seC(H.c([],[D.bq]))
s.sfE(H.c([],[D.dt]))
s.sh0(H.c([],[D.dB]))
s.sh5(H.c([],[D.dG]))
s.sh6(H.c([],[D.dH]))
s.sh7(H.c([],[D.dI]))
s.ch=s.Q=null
s.c5(s.geR(),s.gfs(),s.gfu())
q.dx=s
r=s.Q
s=r==null?s.Q=D.ax():r
s.h(0,q.gfN())
s=q.dx
r=s.ch
s=r==null?s.ch=D.ax():r
s.h(0,q.geh())
q.dy=null
s=q.dx
p=V.kH()
r=U.kb(V.kk(V.kq(),p,new V.S(1,1,-3)))
o=new V.a_(1,1,1)
n=new D.bq()
n.c=new V.a_(1,1,1)
n.a=V.kI()
m=n.b
n.b=r
r.gA().h(0,n.ge6())
r=new D.W("mover",m,n.b,[U.bL])
r.b=!0
n.ae(r)
if(!n.c.t(0,o)){m=n.c
n.c=o
r=new D.W("color",m,o,[V.a_])
r.b=!0
n.ae(r)}s.h(0,n)
q.r.sac(0,new V.a_(V.X(0),V.X(0),V.X(1)))
q.x.sac(0,new V.a_(V.X(0),V.X(1),V.X(0)))
q.z.sac(0,new V.a_(V.X(1),V.X(0),V.X(0)))
s=q.z
if(s.c===C.c){s.c=C.h
s.bn()
s.bC(100)
r=s.a
r.a=null
r.a_(f)}s.bC(10)
l=new M.d7()
l.a=!0
l.se8(0,O.jw(u))
l.e.bk(l.geZ(),l.gf0())
l.y=l.x=l.r=l.f=null
k=X.lG(f)
j=new X.ds()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.saK(f)
u=j.c
if(!(Math.abs(u-1.0471975511965976)<$.Q().a)){j.c=1.0471975511965976
u=new D.W("fov",u,1.0471975511965976,[P.y])
u.b=!0
j.ar(u)}u=j.d
if(!(Math.abs(u-0.1)<$.Q().a)){j.d=0.1
u=new D.W("near",u,0.1,[P.y])
u.b=!0
j.ar(u)}u=j.e
if(!(Math.abs(u-2000)<$.Q().a)){j.e=2000
u=new D.W("far",u,2000,[P.y])
u.b=!0
j.ar(u)}u=l.b
if(u!==j){if(u!=null)u.gA().O(0,l.ga8())
m=l.b
l.b=j
j.gA().h(0,l.ga8())
u=new D.W("camera",m,l.b,[X.d2])
u.b=!0
l.af(u)}u=l.c
if(u!==k){if(u!=null)u.gA().O(0,l.ga8())
m=l.c
l.c=k
k.gA().h(0,l.ga8())
u=new D.W("target",m,l.c,[X.dE])
u.b=!0
l.af(u)}l.sdC(f)
l.sdC(q)
l.e.h(0,t)
l.b.saK(U.kb(V.b8(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
i=document.getElementById(g)
if(i==null)H.v(P.t("Failed to find an element with the identifier, testCanvas."))
h=E.m3(i,!0,!0,!0,!1)
u=h.d
if(u!==l){if(u!=null)u.gA().O(0,h.gca())
h.d=l
l.gA().h(0,h.gca())
h.cb()}u=h.z
if(u==null)u=h.z=D.ax()
s={func:1,ret:-1,args:[D.E]}
r=H.l(new X.jn(e,q),s)
if(u.b==null)u.saw(H.c([],[s]))
u=u.b;(u&&C.a).h(u,r)
V.mR(h)},
jn:function jn(a,b){this.a=a
this.b=b}},V={
X:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
k1:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dP(a-b,u)
return(a<0?a+u:a)+b},
O:function(a,b,c){if(a==null)return C.j.am("null",c)
return C.j.am(C.d.dE(Math.abs(a-0)<$.Q().a?0:a,b),c+b+1)},
bZ:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.y],"$ab")
u=H.c([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.O(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.i(u,p)
C.a.S(u,p,C.j.am(u[p],s))}return u},
jD:function(){var u=$.kl
return u==null?$.kl=V.b8(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ab(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kk:function(a,b,c){var u=c.B(0,Math.sqrt(c.K(c))),t=b.aj(u),s=t.B(0,Math.sqrt(t.K(t))),r=u.aj(s),q=new V.S(a.a,a.b,a.c),p=s.aE(0).K(q),o=r.aE(0).K(q),n=u.aE(0).K(q)
return V.b8(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
du:function(){var u=$.kp
return u==null?$.kp=new V.ac(0,0):u},
kq:function(){var u=$.cn
return u==null?$.cn=new V.a6(0,0,0):u},
lZ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dx(a,b,c,d)},
cD:function(){var u=$.kG
return u==null?$.kG=new V.S(0,0,0):u},
kH:function(){var u=$.kF
return u==null?$.kF=new V.S(0,1,0):u},
kI:function(){var u=$.ie
return u==null?$.ie=new V.S(0,0,1):u},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fe:function fe(a){this.a=a},
dl:function dl(a,b,c,d,e,f,g,h,i){var _=this
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
ac:function ac(a,b){this.a=a
this.b=b},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aD:function aD(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
U:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.e(P.t("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.j.as(a,0)
t=C.j.as(b,0)
s=new V.hh()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.hq()
u.e1(a)
return u},
hS:function(){var u=new V.hR(),t=P.f
u.sh1(new H.aN([t,V.cr]))
u.sh3(new H.aN([t,V.cu]))
u.c=null
return u},
b2:function b2(){},
al:function al(){},
di:function di(){},
ah:function ah(){this.a=null},
hh:function hh(){this.b=this.a=null},
hq:function hq(){this.a=null},
cr:function cr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a){this.b=a
this.c=null},
hR:function hR(){this.c=this.b=this.a=null},
cv:function cv(a){this.b=a
this.a=this.c=null},
mR:function(a){P.m4(C.K,new V.jq(a))},
m1:function(a){var u=new V.hu()
u.e3(a,!0)
return u},
bn:function bn(){},
jq:function jq(a){this.a=a},
f4:function f4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fr:function fr(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fs:function fs(a){var _=this
_.a=a
_.d=_.c=_.b=null},
he:function he(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hu:function hu(){this.b=this.a=null},
hw:function hw(a){this.a=a},
hv:function hv(a){this.a=a},
hx:function hx(a){this.a=a}},U={
kb:function(a){var u=new U.d3()
u.a=a
return u},
d3:function d3(){this.b=this.a=null},
bL:function bL(){},
dy:function dy(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d7:function d7(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lO:function(a,b){var u=a.a5,t=new A.fO(b,u)
t.e2(b,u)
t.e_(a,b)
return t},
jJ:function(a,b,c,d,e){var u=new A.i0(a,c,e)
u.f=d
u.sh8(P.lN(d,0,P.B))
return u},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(a){this.a=a},
fO:function fO(a,b){var _=this
_.b1=_.cT=_.b0=_.a5=_.ad=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.d8=_.bP=_.d7=_.be=_.d6=_.d5=_.bd=_.bc=_.d4=_.d3=_.bb=_.ba=_.b9=_.d2=_.d1=_.b8=_.d0=_.d_=_.b7=_.cZ=_.cY=_.b6=_.b5=_.cX=_.cW=_.b4=_.b3=_.cV=_.cU=_.b2=null
_.bU=_.dd=_.bT=_.dc=_.bS=_.da=_.bR=_.d9=_.bQ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fR:function fR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ad=b3
_.a5=b4
_.b0=b5},
cw:function cw(a,b){this.b=a
this.c=b},
cA:function cA(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cy:function cy(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cB:function cB(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cz:function cz(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cC:function cC(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cq:function cq(){},
bG:function bG(a,b){this.a=a
this.b=b},
dL:function dL(){},
i6:function i6(a){this.a=a},
I:function I(a,b,c){this.a=a
this.c=b
this.d=c},
i2:function i2(a,b,c){this.a=a
this.c=b
this.d=c},
i3:function i3(a,b,c){this.a=a
this.c=b
this.d=c},
i5:function i5(a,b,c){this.a=a
this.c=b
this.d=c},
i0:function i0(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
i1:function i1(a,b,c){this.a=a
this.c=b
this.d=c},
H:function H(a,b,c){this.a=a
this.c=b
this.d=c},
i4:function i4(a,b,c){this.a=a
this.c=b
this.d=c},
i7:function i7(a,b,c){this.a=a
this.c=b
this.d=c},
cx:function cx(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mW:function(){return F.mt(15,30,0.5,1,new F.jr())},
mt:function(a,b,c,d,e){var u=F.mU(a,b,new F.jf(H.l(e,{func:1,ret:V.a6,args:[P.y]}),d,b,c))
if(u==null)return
u.az()
u.i_(new F.il(),new F.h8())
return u},
mU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.at,P.y,P.y]})
if(a<1)return
if(b<1)return
u=new F.dA()
t=new F.ig(u)
t.b=!1
s=[F.at]
t.sh9(H.c([],s))
u.a=t
t=new F.ht()
t.sbz(H.c([],[F.bM]))
u.b=t
t=new F.hs(u)
t.seM(H.c([],[F.bu]))
u.c=t
t=new F.hr(u)
t.seG(H.c([],[F.a3]))
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.cK(new V.b3(s,0,0,1),new V.ac(p,1))
c.$3(o,p,0)
C.a.h(r,o.cR(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.cK(new V.b3(j,i,h,1),new V.ac(p,m))
c.$3(o,p,n)
C.a.h(r,o.cR(null))}}u.d.hx(a+1,b+1,r)
return u},
fh:function(a,b,c){var u=new F.a3(),t=a.a
if(t==null)H.v(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.v(P.t("May not create a face with vertices attached to different shapes."))
u.fT(a)
u.fU(b)
u.fV(c)
C.a.h(u.a.a.d.b,u)
u.a.a.Z()
return u},
kJ:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.at(),r=new F.ip()
r.sbz(H.c([],[F.bM]))
s.b=r
r=new F.ik()
u=[F.bu]
r.seN(H.c([],u))
r.seO(H.c([],u))
s.c=r
r=new F.ih()
u=[F.a3]
r.seH(H.c([],u))
r.seI(H.c([],u))
r.seJ(H.c([],u))
s.d=r
h=$.lj()
s.e=0
r=$.bi()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bh().a)!==0?e:t
s.x=(u&$.bg().a)!==0?b:t
s.y=(u&$.bj().a)!==0?f:t
s.z=(u&$.bk().a)!==0?g:t
s.Q=(u&$.lk().a)!==0?c:t
s.ch=(u&$.c3().a)!==0?i:0
s.cx=(u&$.bf().a)!==0?a:t
return s},
jr:function jr(){},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fi:function fi(){},
hy:function hy(){},
bu:function bu(){},
fE:function fE(){},
i_:function i_(){},
bM:function bM(){},
dA:function dA(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(a){this.a=a
this.b=null},
hs:function hs(a){this.a=a
this.b=null},
ht:function ht(){this.b=null},
at:function at(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ir:function ir(a){this.a=a},
iq:function iq(a){this.a=a},
ig:function ig(a){this.a=a
this.c=this.b=null},
ih:function ih(){this.d=this.c=this.b=null},
ii:function ii(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
ik:function ik(){this.c=this.b=null},
im:function im(){},
il:function il(){},
io:function io(){},
h8:function h8(){},
ip:function ip(){this.b=null}},T={dF:function dF(){}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jB.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gH:function(a){return H.co(a)},
i:function(a){return"Instance of '"+H.bO(a)+"'"}}
J.fy.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iN:1}
J.db.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dc.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.hd.prototype={}
J.bw.prototype={}
J.b6.prototype={
i:function(a){var u=a[$.l8()]
if(u==null)return this.dV(a)
return"JavaScript function for "+H.k(J.aE(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibs:1}
J.ay.prototype={
h:function(a,b){H.G(b,H.x(a,0))
if(!!a.fixed$length)H.v(P.ao("add"))
a.push(b)},
dv:function(a,b){if(!!a.fixed$length)H.v(P.ao("removeAt"))
if(b<0||b>=a.length)throw H.e(P.dw(b,null))
return a.splice(b,1)[0]},
O:function(a,b){var u
if(!!a.fixed$length)H.v(P.ao("remove"))
for(u=0;u<a.length;++u)if(J.a0(a[u],b)){a.splice(u,1)
return!0}return!1},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.bo(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.S(t,u,H.k(a[u]))
return t.join(b)},
hW:function(a){return this.m(a,"")},
hR:function(a,b){var u,t,s
H.l(b,{func:1,ret:P.N,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.J(b.$1(s)))return s
if(a.length!==u)throw H.e(P.bo(a))}throw H.e(H.fx())},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
dS:function(a,b,c){var u=a.length
if(b>u)throw H.e(P.aS(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.aS(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
ghQ:function(a){if(a.length>0)return a[0]
throw H.e(H.fx())},
gbf:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.fx())},
aQ:function(a,b,c,d){var u,t,s=H.x(a,0)
H.m(d,"$ih",[s],"$ah")
if(!!a.immutable$list)H.v(P.ao("setRange"))
P.jG(b,c,a.length)
u=c-b
if(u===0)return
P.jF(0,"skipCount")
H.m(d,"$ib",[s],"$ab")
s=J.jh(d)
if(u>s.gl(d))throw H.e(H.lI())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
cM:function(a,b){var u,t
H.l(b,{func:1,ret:P.N,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.J(b.$1(a[t])))return!0
if(a.length!==u)throw H.e(P.bo(a))}return!1},
R:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a0(a[u],b))return!0
return!1},
i:function(a){return P.jy(a,"[","]")},
gN:function(a){return new J.aq(a,a.length,[H.x(a,0)])},
gH:function(a){return H.co(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.v(P.ao("set length"))
if(b<0)throw H.e(P.aS(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.bY(a,b))
return a[b]},
S:function(a,b,c){H.G(c,H.x(a,0))
if(!!a.immutable$list)H.v(P.ao("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bY(a,b))
a[b]=c},
q:function(a,b){var u,t=[H.x(a,0)]
H.m(b,"$ib",t,"$ab")
u=C.i.q(a.length,b.gl(b))
t=H.c([],t)
this.sl(t,u)
this.aQ(t,0,a.length,a)
this.aQ(t,a.length,u,b)
return t},
$ih:1,
$ib:1}
J.jA.prototype={}
J.aq.prototype={
gD:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.C(s))
u=t.c
if(u>=r){t.scr(null)
return!1}t.scr(s[u]);++t.c
return!0},
scr:function(a){this.d=H.G(a,H.x(this,0))},
$iaM:1}
J.bt.prototype={
de:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.ao(""+a+".floor()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.ao(""+a+".round()"))},
dE:function(a,b){var u,t
if(b>20)throw H.e(P.aS(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
q:function(a,b){if(typeof b!=="number")throw H.e(H.bd(b))
return a+b},
v:function(a,b){if(typeof b!=="number")throw H.e(H.bd(b))
return a-b},
L:function(a,b){if(typeof b!=="number")throw H.e(H.bd(b))
return a*b},
dP:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dZ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cG(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.cG(a,b)},
cG:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.ao("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
aW:function(a,b){var u
if(a>0)u=this.h_(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h_:function(a,b){return b>31?0:a>>>b},
$iy:1,
$ia8:1}
J.da.prototype={$iB:1}
J.fz.prototype={}
J.b5.prototype={
bN:function(a,b){if(b<0)throw H.e(H.bY(a,b))
if(b>=a.length)H.v(H.bY(a,b))
return a.charCodeAt(b)},
as:function(a,b){if(b>=a.length)throw H.e(H.bY(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!=="string")throw H.e(P.ju(b,null,null))
return a+b},
bl:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aS:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.dw(b,null))
if(b>c)throw H.e(P.dw(b,null))
if(c>a.length)throw H.e(P.dw(c,null))
return a.substring(b,c)},
aR:function(a,b){return this.aS(a,b,null)},
iu:function(a){return a.toLowerCase()},
L:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
am:function(a,b){var u=b-a.length
if(u<=0)return a
return this.L(" ",u)+a},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ikn:1,
$if:1}
H.q.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.j.bN(this.a,b)},
$adO:function(){return[P.B]},
$aw:function(){return[P.B]},
$ah:function(){return[P.B]},
$ab:function(){return[P.B]}}
H.fb.prototype={}
H.bK.prototype={
gN:function(a){var u=this
return new H.ch(u,u.gl(u),[H.ak(u,"bK",0)])},
bi:function(a,b){return this.dU(0,H.l(b,{func:1,ret:P.N,args:[H.ak(this,"bK",0)]}))}}
H.ch.prototype={
gD:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.jh(s),q=r.gl(s)
if(t.b!==q)throw H.e(P.bo(s))
u=t.c
if(u>=q){t.saF(null)
return!1}t.saF(r.w(s,u));++t.c
return!0},
saF:function(a){this.d=H.G(a,H.x(this,0))},
$iaM:1}
H.fL.prototype={
gN:function(a){return new H.fM(J.bC(this.a),this.b,this.$ti)},
gl:function(a){return J.bD(this.a)},
w:function(a,b){return this.b.$1(J.jt(this.a,b))},
$ah:function(a,b){return[b]}}
H.fM.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.saF(u.c.$1(t.gD(t)))
return!0}u.saF(null)
return!1},
gD:function(a){return this.a},
saF:function(a){this.a=H.G(a,H.x(this,1))},
$aaM:function(a,b){return[b]}}
H.fN.prototype={
gl:function(a){return J.bD(this.a)},
w:function(a,b){return this.b.$1(J.jt(this.a,b))},
$abK:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.cE.prototype={
gN:function(a){return new H.iu(J.bC(this.a),this.b,this.$ti)}}
H.iu.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(H.J(t.$1(u.gD(u))))return!0
return!1},
gD:function(a){var u=this.a
return u.gD(u)}}
H.bI.prototype={}
H.dO.prototype={}
H.dN.prototype={}
H.hX.prototype={
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
H.h9.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fB.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.k(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.k(t.a)+")"
return s+r+"' on '"+u+"' ("+H.k(t.a)+")"}}
H.i9.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.js.prototype={
$1:function(a){if(!!J.Y(a).$ibr)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:12}
H.ep.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iai:1}
H.c7.prototype={
i:function(a){return"Closure '"+H.bO(this).trim()+"'"},
$ibs:1,
giw:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hM.prototype={}
H.hC.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c2(u)+"'"}}
H.c5.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c5))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.co(this.a)
else u=typeof t!=="object"?J.cV(t):H.co(t)
return(u^H.co(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bO(u)+"'")}}
H.hZ.prototype={
i:function(a){return this.a}}
H.eX.prototype={
i:function(a){return this.a}}
H.ho.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.iv.prototype={
i:function(a){return"Assertion failed: "+P.d8(this.a)}}
H.aN.prototype={
gl:function(a){return this.a},
gY:function(a){return new H.df(this,[H.x(this,0)])},
cQ:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.co(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.co(t,b)}else return s.hU(b)},
hU:function(a){var u=this.d
if(u==null)return!1
return this.bV(this.bs(u,J.cV(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aU(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aU(r,b)
s=t==null?null:t.b
return s}else return q.hV(b)},
hV:function(a){var u,t,s=this.d
if(s==null)return
u=this.bs(s,J.cV(a)&0x3ffffff)
t=this.bV(u,a)
if(t<0)return
return u[t].b},
S:function(a,b,c){var u,t,s,r,q,p,o=this
H.G(b,H.x(o,0))
H.G(c,H.x(o,1))
if(typeof b==="string"){u=o.b
o.cf(u==null?o.b=o.bx():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cf(t==null?o.c=o.bx():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bx()
r=J.cV(b)&0x3ffffff
q=o.bs(s,r)
if(q==null)o.bD(s,r,[o.by(b,c)])
else{p=o.bV(q,b)
if(p>=0)q[p].b=c
else q.push(o.by(b,c))}}},
J:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.x(s,0),H.x(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.e(P.bo(s))
u=u.c}},
cf:function(a,b,c){var u,t=this
H.G(b,H.x(t,0))
H.G(c,H.x(t,1))
u=t.aU(a,b)
if(u==null)t.bD(a,b,t.by(b,c))
else u.b=c},
em:function(){this.r=this.r+1&67108863},
by:function(a,b){var u,t=this,s=new H.fF(H.G(a,H.x(t,0)),H.G(b,H.x(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.em()
return s},
bV:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a0(a[t].a,b))return t
return-1},
i:function(a){return P.kj(this)},
aU:function(a,b){return a[b]},
bs:function(a,b){return a[b]},
bD:function(a,b,c){a[b]=c},
eB:function(a,b){delete a[b]},
co:function(a,b){return this.aU(a,b)!=null},
bx:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bD(t,u,t)
this.eB(t,u)
return t}}
H.fF.prototype={}
H.df.prototype={
gl:function(a){return this.a.a},
gN:function(a){var u=this.a,t=new H.fG(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fG.prototype={
gD:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bo(t))
else{t=u.c
if(t==null){u.sce(null)
return!1}else{u.sce(t.a)
u.c=u.c.c
return!0}}},
sce:function(a){this.d=H.G(a,H.x(this,0))},
$iaM:1}
H.jj.prototype={
$1:function(a){return this.a(a)},
$S:12}
H.jk.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.jl.prototype={
$1:function(a){return this.a(H.D(a))},
$S:31}
H.fA.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikn:1}
H.cl.prototype={}
H.dm.prototype={
gl:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.ck.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]},
$abI:function(){return[P.y]},
$aw:function(){return[P.y]},
$ih:1,
$ah:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.dn.prototype={
$abI:function(){return[P.B]},
$aw:function(){return[P.B]},
$ih:1,
$ah:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.h0.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.h1.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.h2.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.h3.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.h4.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.dp.prototype={
gl:function(a){return a.length},
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.h5.prototype={
gl:function(a){return a.length},
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.cI.prototype={}
H.cJ.prototype={}
H.cK.prototype={}
H.cL.prototype={}
P.ix.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.iw.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:24}
P.iy.prototype={
$0:function(){this.a.$0()},
$S:1}
P.iz.prototype={
$0:function(){this.a.$0()},
$S:1}
P.ev.prototype={
ej:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bX(new P.j7(this,b),0),a)
else throw H.e(P.ao("`setTimeout()` not found."))},
ek:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bX(new P.j6(this,a,Date.now(),b),0),a)
else throw H.e(P.ao("Periodic timer."))},
$iaX:1}
P.j7.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.j6.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.i.dZ(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.b1.prototype={
hY:function(a){if(this.c!==6)return!0
return this.b.b.c2(H.l(this.d,{func:1,ret:P.N,args:[P.L]}),a.a,P.N,P.L)},
hT:function(a){var u=this.e,t=P.L,s={futureOr:1,type:H.x(this,1)},r=this.b.b
if(H.eL(u,{func:1,args:[P.L,P.ai]}))return H.jU(r.io(u,a.a,a.b,null,t,P.ai),s)
else return H.jU(r.c2(H.l(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.av.prototype={
dD:function(a,b,c){var u,t,s,r=H.x(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.V
if(u!==C.k){u.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mk(b,u)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.av($.V,[c])
s=b==null?1:3
this.cg(new P.b1(t,s,a,b,[r,c]))
return t},
ir:function(a,b){return this.dD(a,null,b)},
cg:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.n(t.c,"$ib1")
t.c=a}else{if(s===2){u=H.n(t.c,"$iav")
s=u.a
if(s<4){u.cg(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jd(null,null,s,H.l(new P.iH(t,a),{func:1,ret:-1}))}},
cC:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.n(p.c,"$ib1")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.n(p.c,"$iav")
u=q.a
if(u<4){q.cC(a)
return}p.a=u
p.c=q.c}o.a=p.aV(a)
u=p.b
u.toString
P.jd(null,null,u,H.l(new P.iL(o,p),{func:1,ret:-1}))}},
bB:function(){var u=H.n(this.c,"$ib1")
this.c=null
return this.aV(u)},
aV:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
ck:function(a){var u,t,s=this,r=H.x(s,0)
H.jU(a,{futureOr:1,type:r})
u=s.$ti
if(H.jR(a,"$icd",u,"$acd"))if(H.jR(a,"$iav",u,null))P.kK(a,s)
else P.ma(a,s)
else{t=s.bB()
H.G(a,r)
s.a=4
s.c=a
P.cH(s,t)}},
cl:function(a,b){var u,t=this
H.n(b,"$iai")
u=t.bB()
t.a=8
t.c=new P.aa(a,b)
P.cH(t,u)},
$icd:1}
P.iH.prototype={
$0:function(){P.cH(this.a,this.b)},
$S:1}
P.iL.prototype={
$0:function(){P.cH(this.b,this.a.a)},
$S:1}
P.iI.prototype={
$1:function(a){var u=this.a
u.a=0
u.ck(a)},
$S:16}
P.iJ.prototype={
$2:function(a,b){H.n(b,"$iai")
this.a.cl(a,b)},
$1:function(a){return this.$2(a,null)},
$S:41}
P.iK.prototype={
$0:function(){this.a.cl(this.b,this.c)},
$S:1}
P.iO.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dA(H.l(s.d,{func:1}),null)}catch(r){u=H.ap(r)
t=H.c0(r)
if(o.d){s=H.n(o.a.a.c,"$iaa").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.n(o.a.a.c,"$iaa")
else q.b=new P.aa(u,t)
q.a=!0
return}if(!!J.Y(n).$icd){if(n instanceof P.av&&n.a>=4){if(n.a===8){s=o.b
s.b=H.n(n.c,"$iaa")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ir(new P.iP(p),null)
s.a=!1}},
$S:2}
P.iP.prototype={
$1:function(a){return this.a},
$S:33}
P.iN.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.x(s,0)
q=H.G(n.c,r)
p=H.x(s,1)
n.a.b=s.b.b.c2(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ap(o)
t=H.c0(o)
s=n.a
s.b=new P.aa(u,t)
s.a=!0}},
$S:2}
P.iM.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.n(m.a.a.c,"$iaa")
r=m.c
if(H.J(r.hY(u))&&r.e!=null){q=m.b
q.b=r.hT(u)
q.a=!1}}catch(p){t=H.ap(p)
s=H.c0(p)
r=H.n(m.a.a.c,"$iaa")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aa(t,s)
n.a=!0}},
$S:2}
P.dR.prototype={}
P.hF.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.av($.V,[P.B])
r.a=0
u=H.x(s,0)
t=H.l(new P.hH(r,s),{func:1,ret:-1,args:[u]})
H.l(new P.hI(r,q),{func:1,ret:-1})
W.a7(s.a,s.b,t,!1,u)
return q}}
P.hH.prototype={
$1:function(a){H.G(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.x(this.b,0)]}}}
P.hI.prototype={
$0:function(){this.b.ck(this.a.a)},
$S:1}
P.cs.prototype={}
P.hG.prototype={}
P.aX.prototype={}
P.aa.prototype={
i:function(a){return H.k(this.a)},
$ibr:1}
P.ja.prototype={$int:1}
P.jc.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dr():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.i(0)
throw u},
$S:1}
P.iU.prototype={
ip:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.k===$.V){a.$0()
return}P.kQ(r,r,this,a,-1)}catch(s){u=H.ap(s)
t=H.c0(s)
P.jb(r,r,this,u,H.n(t,"$iai"))}},
iq:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.G(b,c)
try{if(C.k===$.V){a.$1(b)
return}P.kR(r,r,this,a,b,-1,c)}catch(s){u=H.ap(s)
t=H.c0(s)
P.jb(r,r,this,u,H.n(t,"$iai"))}},
hD:function(a,b){return new P.iW(this,H.l(a,{func:1,ret:b}),b)},
bI:function(a){return new P.iV(this,H.l(a,{func:1,ret:-1}))},
cN:function(a,b){return new P.iX(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dA:function(a,b){H.l(a,{func:1,ret:b})
if($.V===C.k)return a.$0()
return P.kQ(null,null,this,a,b)},
c2:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.G(b,d)
if($.V===C.k)return a.$1(b)
return P.kR(null,null,this,a,b,c,d)},
io:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.G(b,e)
H.G(c,f)
if($.V===C.k)return a.$2(b,c)
return P.ml(null,null,this,a,b,c,d,e,f)}}
P.iW.prototype={
$0:function(){return this.a.dA(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iV.prototype={
$0:function(){return this.a.ip(this.b)},
$S:2}
P.iX.prototype={
$1:function(a){var u=this.c
return this.a.iq(this.b,H.G(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iS.prototype={
gN:function(a){var u=this,t=new P.e6(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
R:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.n(u[b],"$ibU")!=null}else{t=this.ex(b)
return t}},
ex:function(a){var u=this.d
if(u==null)return!1
return this.br(this.cs(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.G(b,H.x(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.ci(u==null?s.b=P.jL():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.ci(t==null?s.c=P.jL():t,b)}else return s.en(0,b)},
en:function(a,b){var u,t,s,r=this
H.G(b,H.x(r,0))
u=r.d
if(u==null)u=r.d=P.jL()
t=r.cm(b)
s=u[t]
if(s==null)u[t]=[r.bo(b)]
else{if(r.br(s,b)>=0)return!1
s.push(r.bo(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fH(this.c,b)
else return this.fG(0,b)},
fG:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cs(r,b)
t=s.br(u,b)
if(t<0)return!1
s.cH(u.splice(t,1)[0])
return!0},
ci:function(a,b){H.G(b,H.x(this,0))
if(H.n(a[b],"$ibU")!=null)return!1
a[b]=this.bo(b)
return!0},
fH:function(a,b){var u
if(a==null)return!1
u=H.n(a[b],"$ibU")
if(u==null)return!1
this.cH(u)
delete a[b]
return!0},
cu:function(){this.r=1073741823&this.r+1},
bo:function(a){var u,t=this,s=new P.bU(H.G(a,H.x(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cu()
return s},
cH:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cu()},
cm:function(a){return J.cV(a)&1073741823},
cs:function(a,b){return a[this.cm(b)]},
br:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a0(a[t].a,b))return t
return-1}}
P.bU.prototype={}
P.e6.prototype={
gD:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bo(t))
else{t=u.c
if(t==null){u.scj(null)
return!1}else{u.scj(H.G(t.a,H.x(u,0)))
u.c=u.c.b
return!0}}},
scj:function(a){this.d=H.G(a,H.x(this,0))},
$iaM:1}
P.fH.prototype={$ih:1,$ib:1}
P.w.prototype={
gN:function(a){return new H.ch(a,this.gl(a),[H.c_(this,a,"w",0)])},
w:function(a,b){return this.j(a,b)},
it:function(a,b){var u,t=this,s=H.c([],[H.c_(t,a,"w",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.S(s,u,t.j(a,u))
return s},
is:function(a){return this.it(a,!0)},
q:function(a,b){var u,t=this,s=[H.c_(t,a,"w",0)]
H.m(b,"$ib",s,"$ab")
u=H.c([],s)
C.a.sl(u,C.i.q(t.gl(a),b.gl(b)))
C.a.aQ(u,0,t.gl(a),a)
C.a.aQ(u,t.gl(a),u.length,b)
return u},
i:function(a){return P.jy(a,"[","]")}}
P.fJ.prototype={}
P.fK.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.k(a)
t.a=u+": "
t.a+=H.k(b)},
$S:18}
P.a4.prototype={
J:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.c_(s,a,"a4",0),H.c_(s,a,"a4",1)]})
for(u=J.bC(s.gY(a));u.u();){t=u.gD(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.bD(this.gY(a))},
i:function(a){return P.kj(a)},
$iM:1}
P.iZ.prototype={
aa:function(a,b){var u
for(u=J.bC(H.m(b,"$ih",this.$ti,"$ah"));u.u();)this.h(0,u.gD(u))},
i:function(a){return P.jy(this,"{","}")},
w:function(a,b){var u,t,s,r=this
P.jF(b,"index")
for(u=P.md(r,r.r,H.x(r,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.e(P.T(b,r,"index",null,t))},
$ih:1,
$iku:1}
P.e7.prototype={}
P.c8.prototype={}
P.c9.prototype={}
P.fd.prototype={
$ac8:function(){return[P.f,[P.b,P.B]]}}
P.fv.prototype={
i:function(a){return this.a}}
P.fu.prototype={
ey:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.bb("")
if(r>b)q.a+=C.j.aS(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lu(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$ac9:function(){return[P.f,P.f]}}
P.ic.prototype={}
P.id.prototype={
hG:function(a){var u,t,s=P.jG(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.j8(u)
if(t.eK(a,0,s)!==s)t.cI(C.j.bN(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mg(0,t.b,u.length)))},
$ac9:function(){return[P.f,[P.b,P.B]]}}
P.j8.prototype={
cI:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eK:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.j.bN(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.j.as(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cI(r,C.j.as(a,p)))s=p}else if(r<=2047){q=n.b
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
P.bp.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bp&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.i.aW(u,30))&1073741823},
i:function(a){var u=this,t=P.lB(H.lW(u)),s=P.d4(H.lU(u)),r=P.d4(H.lQ(u)),q=P.d4(H.lR(u)),p=P.d4(H.lT(u)),o=P.d4(H.lV(u)),n=P.lC(H.lS(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.y.prototype={}
P.aJ.prototype={
q:function(a,b){return new P.aJ(C.i.q(this.a,b.geD()))},
v:function(a,b){return new P.aJ(C.i.v(this.a,b.geD()))},
t:function(a,b){if(b==null)return!1
return b instanceof P.aJ&&this.a===b.a},
gH:function(a){return C.i.gH(this.a)},
i:function(a){var u,t,s,r=new P.fa(),q=this.a
if(q<0)return"-"+new P.aJ(0-q).i(0)
u=r.$1(C.i.W(q,6e7)%60)
t=r.$1(C.i.W(q,1e6)%60)
s=new P.f9().$1(q%1e6)
return""+C.i.W(q,36e8)+":"+H.k(u)+":"+H.k(t)+"."+H.k(s)}}
P.f9.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.fa.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.br.prototype={}
P.eP.prototype={
i:function(a){return"Assertion failed"}}
P.dr.prototype={
i:function(a){return"Throw of null."}}
P.aF.prototype={
gbq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbp:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbq()+o+u
if(!q.a)return t
s=q.gbp()
r=P.d8(q.b)
return t+s+": "+r}}
P.bP.prototype={
gbq:function(){return"RangeError"},
gbp:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.k(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.k(s)
else if(t>s)u=": Not in range "+H.k(s)+".."+H.k(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.k(s)}return u}}
P.fw.prototype={
gbq:function(){return"RangeError"},
gbp:function(){var u,t=H.a9(this.b)
if(typeof t!=="number")return t.dO()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.k(u)},
gl:function(a){return this.f}}
P.ia.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i8.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bR.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eZ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.d8(u)+"."}}
P.hc.prototype={
i:function(a){return"Out of Memory"},
$ibr:1}
P.dC.prototype={
i:function(a){return"Stack Overflow"},
$ibr:1}
P.f3.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dZ.prototype={
i:function(a){return"Exception: "+this.a}}
P.fp.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.j.aS(s,0,75)+"...":s
return t+"\n"+r}}
P.bs.prototype={}
P.B.prototype={}
P.h.prototype={
bi:function(a,b){var u=H.ak(this,"h",0)
return new H.cE(this,H.l(b,{func:1,ret:P.N,args:[u]}),[u])},
gl:function(a){var u,t=this.gN(this)
for(u=0;t.u();)++u
return u},
gap:function(a){var u,t=this.gN(this)
if(!t.u())throw H.e(H.fx())
u=t.gD(t)
if(t.u())throw H.e(H.lJ())
return u},
w:function(a,b){var u,t,s
P.jF(b,"index")
for(u=this.gN(this),t=0;u.u();){s=u.gD(u)
if(b===t)return s;++t}throw H.e(P.T(b,this,"index",null,t))},
i:function(a){return P.lH(this,"(",")")}}
P.aM.prototype={}
P.b.prototype={$ih:1}
P.M.prototype={}
P.K.prototype={
gH:function(a){return P.L.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a8.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
t:function(a,b){return this===b},
gH:function(a){return H.co(this)},
i:function(a){return"Instance of '"+H.bO(this)+"'"},
toString:function(){return this.i(this)}}
P.ai.prototype={}
P.f.prototype={$ikn:1}
P.bb.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.r.prototype={}
W.eN.prototype={
gl:function(a){return a.length}}
W.cW.prototype={
i:function(a){return String(a)},
$icW:1}
W.eO.prototype={
i:function(a){return String(a)}}
W.c4.prototype={$ic4:1}
W.cY.prototype={}
W.bl.prototype={$ibl:1}
W.bF.prototype={
dN:function(a,b,c){var u=a.getContext(b,P.ms(c))
return u},
$ibF:1}
W.bm.prototype={
gl:function(a){return a.length}}
W.ca.prototype={$ica:1}
W.f_.prototype={
gl:function(a){return a.length}}
W.R.prototype={$iR:1}
W.cb.prototype={
gl:function(a){return a.length}}
W.f0.prototype={}
W.aH.prototype={}
W.aI.prototype={}
W.f1.prototype={
gl:function(a){return a.length}}
W.f2.prototype={
gl:function(a){return a.length}}
W.f5.prototype={
gl:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.f6.prototype={
i:function(a){return String(a)}}
W.d5.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.as,P.a8]]},
$aw:function(){return[[P.as,P.a8]]},
$ih:1,
$ah:function(){return[[P.as,P.a8]]},
$ib:1,
$ab:function(){return[[P.as,P.a8]]},
$az:function(){return[[P.as,P.a8]]}}
W.d6.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaD(a))+" x "+H.k(this.gaB(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.Y(b)
if(!u.$ias)return!1
return a.left===u.gdh(b)&&a.top===u.gdG(b)&&this.gaD(a)===u.gaD(b)&&this.gaB(a)===u.gaB(b)},
gH:function(a){return W.kM(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gaD(a)),C.d.gH(this.gaB(a)))},
gaB:function(a){return a.height},
gdh:function(a){return a.left},
gdG:function(a){return a.top},
gaD:function(a){return a.width},
$ias:1,
$aas:function(){return[P.a8]}}
W.f7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.f]},
$aw:function(){return[P.f]},
$ih:1,
$ah:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$az:function(){return[P.f]}}
W.f8.prototype={
gl:function(a){return a.length}}
W.iB.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.i(u,b)
return H.n(u[b],"$iP")},
h:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var u=this.is(this)
return new J.aq(u,u.length,[H.x(u,0)])},
$aw:function(){return[W.P]},
$ah:function(){return[W.P]},
$ab:function(){return[W.P]}}
W.P.prototype={
ghC:function(a){return new W.iD(a)},
gcO:function(a){return new W.iB(a,a.children)},
i:function(a){return a.localName},
a1:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.ke
if(u==null){u=H.c([],[W.am])
t=new W.dq(u)
C.a.h(u,W.kL(null))
C.a.h(u,W.kN())
$.ke=t
d=t}else d=u
u=$.kd
if(u==null){u=new W.eA(d)
$.kd=u
c=u}else{u.a=d
c=u}}if($.b4==null){u=document
t=u.implementation.createHTMLDocument("")
$.b4=t
$.jx=t.createRange()
t=$.b4.createElement("base")
H.n(t,"$ic4")
t.href=u.baseURI
$.b4.head.appendChild(t)}u=$.b4
if(u.body==null){t=u.createElement("body")
u.body=H.n(t,"$ibl")}u=$.b4
if(!!this.$ibl)s=u.body
else{s=u.createElement(a.tagName)
$.b4.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.R(C.P,a.tagName)){$.jx.selectNodeContents(s)
r=$.jx.createContextualFragment(b)}else{s.innerHTML=b
r=$.b4.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.b4.body
if(s==null?u!=null:s!==u)J.k5(s)
c.c4(r)
document.adoptNode(r)
return r},
hH:function(a,b,c){return this.a1(a,b,c,null)},
dR:function(a,b){a.textContent=null
a.appendChild(this.a1(a,b,null,null))},
$iP:1,
gdB:function(a){return a.tagName}}
W.fc.prototype={
$1:function(a){return!!J.Y(H.n(a,"$iA")).$iP},
$S:23}
W.o.prototype={$io:1}
W.d.prototype={
hw:function(a,b,c,d){H.l(c,{func:1,args:[W.o]})
if(c!=null)this.eo(a,b,c,!1)},
eo:function(a,b,c,d){return a.addEventListener(b,H.bX(H.l(c,{func:1,args:[W.o]}),1),!1)},
$id:1}
W.aK.prototype={$iaK:1}
W.fj.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aK]},
$aw:function(){return[W.aK]},
$ih:1,
$ah:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$az:function(){return[W.aK]}}
W.fk.prototype={
gl:function(a){return a.length}}
W.fo.prototype={
gl:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.ft.prototype={
gl:function(a){return a.length}}
W.bJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.A]},
$aw:function(){return[W.A]},
$ih:1,
$ah:function(){return[W.A]},
$ib:1,
$ab:function(){return[W.A]},
$ibJ:1,
$az:function(){return[W.A]}}
W.aO.prototype={$iaO:1}
W.dh.prototype={
i:function(a){return String(a)},
$idh:1}
W.fU.prototype={
gl:function(a){return a.length}}
W.fV.prototype={
j:function(a,b){return P.be(a.get(H.D(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gY:function(a){var u=H.c([],[P.f])
this.J(a,new W.fW(u))
return u},
gl:function(a){return a.size},
$aa4:function(){return[P.f,null]},
$iM:1,
$aM:function(){return[P.f,null]}}
W.fW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fX.prototype={
j:function(a,b){return P.be(a.get(H.D(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gY:function(a){var u=H.c([],[P.f])
this.J(a,new W.fY(u))
return u},
gl:function(a){return a.size},
$aa4:function(){return[P.f,null]},
$iM:1,
$aM:function(){return[P.f,null]}}
W.fY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.aQ.prototype={$iaQ:1}
W.fZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aQ]},
$aw:function(){return[W.aQ]},
$ih:1,
$ah:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$az:function(){return[W.aQ]}}
W.a5.prototype={$ia5:1}
W.af.prototype={
gap:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.e(P.kv("No elements"))
if(t>1)throw H.e(P.kv("More than one element"))
return u.firstChild},
aa:function(a,b){var u,t,s,r
H.m(b,"$ih",[W.A],"$ah")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gN:function(a){var u=this.a.childNodes
return new W.d9(u,u.length,[H.c_(C.R,u,"z",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
$aw:function(){return[W.A]},
$ah:function(){return[W.A]},
$ab:function(){return[W.A]}}
W.A.prototype={
ih:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.dT(a):u},
hA:function(a,b){return a.appendChild(b)},
$iA:1}
W.cm.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.A]},
$aw:function(){return[W.A]},
$ih:1,
$ah:function(){return[W.A]},
$ib:1,
$ab:function(){return[W.A]},
$az:function(){return[W.A]}}
W.aR.prototype={$iaR:1,
gl:function(a){return a.length}}
W.hf.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aR]},
$aw:function(){return[W.aR]},
$ih:1,
$ah:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$az:function(){return[W.aR]}}
W.hm.prototype={
j:function(a,b){return P.be(a.get(H.D(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gY:function(a){var u=H.c([],[P.f])
this.J(a,new W.hn(u))
return u},
gl:function(a){return a.size},
$aa4:function(){return[P.f,null]},
$iM:1,
$aM:function(){return[P.f,null]}}
W.hn.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.hp.prototype={
gl:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.hz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aT]},
$aw:function(){return[W.aT]},
$ih:1,
$ah:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$az:function(){return[W.aT]}}
W.aU.prototype={$iaU:1}
W.hA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aU]},
$aw:function(){return[W.aU]},
$ih:1,
$ah:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$az:function(){return[W.aU]}}
W.aV.prototype={$iaV:1,
gl:function(a){return a.length}}
W.hD.prototype={
j:function(a,b){return a.getItem(H.D(b))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gY:function(a){var u=H.c([],[P.f])
this.J(a,new W.hE(u))
return u},
gl:function(a){return a.length},
$aa4:function(){return[P.f,P.f]},
$iM:1,
$aM:function(){return[P.f,P.f]}}
W.hE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:29}
W.az.prototype={$iaz:1}
W.bS.prototype={}
W.dD.prototype={
a1:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
u=W.lD("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.af(t).aa(0,new W.af(u))
return t}}
W.hK.prototype={
a1:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.x.a1(u.createElement("table"),b,c,d)
u.toString
u=new W.af(u)
s=u.gap(u)
s.toString
u=new W.af(s)
r=u.gap(u)
t.toString
r.toString
new W.af(t).aa(0,new W.af(r))
return t}}
W.hL.prototype={
a1:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.x.a1(u.createElement("table"),b,c,d)
u.toString
u=new W.af(u)
s=u.gap(u)
t.toString
s.toString
new W.af(t).aa(0,new W.af(s))
return t}}
W.ct.prototype={$ict:1}
W.aW.prototype={$iaW:1}
W.aA.prototype={$iaA:1}
W.hN.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aA]},
$aw:function(){return[W.aA]},
$ih:1,
$ah:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$az:function(){return[W.aA]}}
W.hO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aW]},
$aw:function(){return[W.aW]},
$ih:1,
$ah:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$az:function(){return[W.aW]}}
W.hQ.prototype={
gl:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.aB.prototype={$iaB:1}
W.hU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$ih:1,
$ah:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$az:function(){return[W.aY]}}
W.hV.prototype={
gl:function(a){return a.length}}
W.bv.prototype={}
W.ib.prototype={
i:function(a){return String(a)}}
W.is.prototype={
gl:function(a){return a.length}}
W.b0.prototype={
ghK:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.ao("deltaY is not supported"))},
ghJ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.ao("deltaX is not supported"))},
$ib0:1}
W.cF.prototype={
fM:function(a,b){return a.requestAnimationFrame(H.bX(H.l(b,{func:1,ret:-1,args:[P.a8]}),1))},
eE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cG.prototype={$icG:1}
W.iC.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.R]},
$aw:function(){return[W.R]},
$ih:1,
$ah:function(){return[W.R]},
$ib:1,
$ab:function(){return[W.R]},
$az:function(){return[W.R]}}
W.dU.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.Y(b)
if(!u.$ias)return!1
return a.left===u.gdh(b)&&a.top===u.gdG(b)&&a.width===u.gaD(b)&&a.height===u.gaB(b)},
gH:function(a){return W.kM(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gaB:function(a){return a.height},
gaD:function(a){return a.width}}
W.iQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aL]},
$aw:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$az:function(){return[W.aL]}}
W.ec.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.A]},
$aw:function(){return[W.A]},
$ih:1,
$ah:function(){return[W.A]},
$ib:1,
$ab:function(){return[W.A]},
$az:function(){return[W.A]}}
W.j1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aV]},
$aw:function(){return[W.aV]},
$ih:1,
$ah:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$az:function(){return[W.aV]}}
W.j2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.az]},
$aw:function(){return[W.az]},
$ih:1,
$ah:function(){return[W.az]},
$ib:1,
$ab:function(){return[W.az]},
$az:function(){return[W.az]}}
W.iA.prototype={
J:function(a,b){var u,t,s,r,q
H.l(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gY(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gY:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.i(r,t)
s=H.n(r[t],"$icG")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa4:function(){return[P.f,P.f]},
$aM:function(){return[P.f,P.f]}}
W.iD.prototype={
j:function(a,b){return this.a.getAttribute(H.D(b))},
gl:function(a){return this.gY(this).length}}
W.iE.prototype={}
W.jK.prototype={}
W.iF.prototype={}
W.iG.prototype={
$1:function(a){return this.a.$1(H.n(a,"$io"))},
$S:25}
W.bx.prototype={
e4:function(a){var u
if($.e1.a===0){for(u=0;u<262;++u)$.e1.S(0,C.O[u],W.mC())
for(u=0;u<12;++u)$.e1.S(0,C.p[u],W.mD())}},
ay:function(a){return $.lm().R(0,W.cc(a))},
ab:function(a,b,c){var u=$.e1.j(0,H.k(W.cc(a))+"::"+b)
if(u==null)u=$.e1.j(0,"*::"+b)
if(u==null)return!1
return H.jQ(u.$4(a,b,c,this))},
$iam:1}
W.z.prototype={
gN:function(a){return new W.d9(a,this.gl(a),[H.c_(this,a,"z",0)])}}
W.dq.prototype={
ay:function(a){return C.a.cM(this.a,new W.h7(a))},
ab:function(a,b,c){return C.a.cM(this.a,new W.h6(a,b,c))},
$iam:1}
W.h7.prototype={
$1:function(a){return H.n(a,"$iam").ay(this.a)},
$S:13}
W.h6.prototype={
$1:function(a){return H.n(a,"$iam").ab(this.a,this.b,this.c)},
$S:13}
W.ek.prototype={
eg:function(a,b,c,d){var u,t,s
this.a.aa(0,c)
u=b.bi(0,new W.j_())
t=b.bi(0,new W.j0())
this.b.aa(0,u)
s=this.c
s.aa(0,C.Q)
s.aa(0,t)},
ay:function(a){return this.a.R(0,W.cc(a))},
ab:function(a,b,c){var u=this,t=W.cc(a),s=u.c
if(s.R(0,H.k(t)+"::"+b))return u.d.hy(c)
else if(s.R(0,"*::"+b))return u.d.hy(c)
else{s=u.b
if(s.R(0,H.k(t)+"::"+b))return!0
else if(s.R(0,"*::"+b))return!0
else if(s.R(0,H.k(t)+"::*"))return!0
else if(s.R(0,"*::*"))return!0}return!1},
$iam:1}
W.j_.prototype={
$1:function(a){return!C.a.R(C.p,H.D(a))},
$S:14}
W.j0.prototype={
$1:function(a){return C.a.R(C.p,H.D(a))},
$S:14}
W.j4.prototype={
ab:function(a,b,c){if(this.dY(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.R(0,b)
return!1}}
W.j5.prototype={
$1:function(a){return"TEMPLATE::"+H.k(H.D(a))},
$S:26}
W.j3.prototype={
ay:function(a){var u=J.Y(a)
if(!!u.$icp)return!1
u=!!u.$ip
if(u&&W.cc(a)==="foreignObject")return!1
if(u)return!0
return!1},
ab:function(a,b,c){if(b==="is"||C.j.bl(b,"on"))return!1
return this.ay(a)},
$iam:1}
W.d9.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sct(J.lq(u.a,t))
u.c=t
return!0}u.sct(null)
u.c=s
return!1},
gD:function(a){return this.d},
sct:function(a){this.d=H.G(a,H.x(this,0))},
$iaM:1}
W.am.prototype={}
W.iY.prototype={$ing:1}
W.eA.prototype={
c4:function(a){new W.j9(this).$2(a,null)},
aH:function(a,b){if(b==null)J.k5(a)
else b.removeChild(a)},
fQ:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lt(a)
n=o.a.getAttribute("is")
H.n(a,"$iP")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.J(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ap(r)}t="element unprintable"
try{t=J.aE(a)}catch(r){H.ap(r)}try{s=W.cc(a)
this.fP(H.n(a,"$iP"),b,p,t,s,H.n(o,"$iM"),H.D(n))}catch(r){if(H.ap(r) instanceof P.aF)throw r
else{this.aH(a,b)
window
q="Removing corrupted element "+H.k(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fP:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aH(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ay(a)){o.aH(a,b)
window
u="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ab(a,"is",g)){o.aH(a,b)
window
u="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gY(f)
t=H.c(u.slice(0),[H.x(u,0)])
for(s=f.gY(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.i(t,s)
r=t[s]
q=o.a
p=J.lv(r)
H.D(r)
if(!q.ab(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.k(e)+" "+r+'="'+H.k(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Y(a).$ict)o.c4(a.content)},
$in2:1}
W.j9.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fQ(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aH(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ap(s)
r=H.n(u,"$iA")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.n(t,"$iA")}},
$S:27}
W.dT.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eq.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.cO.prototype={}
W.cP.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
P.je.prototype={
$2:function(a,b){this.a[a]=b},
$S:18}
P.fl.prototype={
gbt:function(){var u=this.b,t=H.ak(u,"w",0),s=W.P
return new H.fL(new H.cE(u,H.l(new P.fm(),{func:1,ret:P.N,args:[t]}),[t]),H.l(new P.fn(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bD(this.gbt().a)},
j:function(a,b){var u=this.gbt()
return u.b.$1(J.jt(u.a,b))},
gN:function(a){var u=P.ki(this.gbt(),!1,W.P)
return new J.aq(u,u.length,[H.x(u,0)])},
$aw:function(){return[W.P]},
$ah:function(){return[W.P]},
$ab:function(){return[W.P]}}
P.fm.prototype={
$1:function(a){return!!J.Y(H.n(a,"$iA")).$iP},
$S:23}
P.fn.prototype={
$1:function(a){return H.j(H.n(a,"$iA"),"$iP")},
$S:28}
P.iT.prototype={}
P.as.prototype={}
P.b7.prototype={$ib7:1}
P.fD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b7]},
$ih:1,
$ah:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$az:function(){return[P.b7]}}
P.ba.prototype={$iba:1}
P.ha.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$aw:function(){return[P.ba]},
$ih:1,
$ah:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$az:function(){return[P.ba]}}
P.hg.prototype={
gl:function(a){return a.length}}
P.cp.prototype={$icp:1}
P.hJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$aw:function(){return[P.f]},
$ih:1,
$ah:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$az:function(){return[P.f]}}
P.p.prototype={
gcO:function(a){return new P.fl(a,new W.af(a))},
a1:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.am])
C.a.h(p,W.kL(null))
C.a.h(p,W.kN())
C.a.h(p,new W.j3())
c=new W.eA(new W.dq(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hH(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.af(s)
q=p.gap(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bc.prototype={$ibc:1}
P.hW.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bc]},
$ih:1,
$ah:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$az:function(){return[P.bc]}}
P.e4.prototype={}
P.e5.prototype={}
P.ef.prototype={}
P.eg.prototype={}
P.er.prototype={}
P.es.prototype={}
P.ey.prototype={}
P.ez.prototype={}
P.eR.prototype={
gl:function(a){return a.length}}
P.eS.prototype={
j:function(a,b){return P.be(a.get(H.D(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gY:function(a){var u=H.c([],[P.f])
this.J(a,new P.eT(u))
return u},
gl:function(a){return a.size},
$aa4:function(){return[P.f,null]},
$iM:1,
$aM:function(){return[P.f,null]}}
P.eT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
P.eU.prototype={
gl:function(a){return a.length}}
P.bE.prototype={}
P.hb.prototype={
gl:function(a){return a.length}}
P.dS.prototype={}
P.cZ.prototype={$icZ:1}
P.dv.prototype={$idv:1}
P.bQ.prototype={
G:function(a,b,c){return a.uniform1f(b,c)},
U:function(a,b,c){return a.uniform1i(b,c)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dI:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dJ:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibQ:1}
P.dz.prototype={$idz:1}
P.dM.prototype={$idM:1}
P.hB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.T(b,a,null,null,null))
return P.be(a.item(b))},
w:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.M,,,]]},
$ih:1,
$ah:function(){return[[P.M,,,]]},
$ib:1,
$ab:function(){return[[P.M,,,]]},
$az:function(){return[[P.M,,,]]}}
P.en.prototype={}
P.eo.prototype={}
O.a1.prototype={
c9:function(a){var u=this
u.seP(H.c([],[a]))
u.scA(null)
u.scv(null)
u.scB(null)},
c5:function(a,b,c){var u=this,t=H.ak(u,"a1",0)
H.l(b,{func:1,ret:P.N,args:[[P.h,t]]})
t={func:1,ret:-1,args:[P.B,[P.h,t]]}
H.l(a,t)
H.l(c,t)
u.scA(b)
u.scv(a)
u.scB(c)},
bk:function(a,b){return this.c5(a,null,b)},
fq:function(a){var u
H.m(a,"$ih",[H.ak(this,"a1",0)],"$ah")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eQ:function(a,b){var u
H.m(b,"$ih",[H.ak(this,"a1",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gN:function(a){var u=this.a
return new J.aq(u,u.length,[H.x(u,0)])},
w:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ak(s,"a1",0)
H.G(b,r)
r=[r]
if(H.J(s.fq(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.eQ(t,H.c([b],r))}},
seP:function(a){this.a=H.m(a,"$ib",[H.ak(this,"a1",0)],"$ab")},
scA:function(a){this.b=H.l(a,{func:1,ret:P.N,args:[[P.h,H.ak(this,"a1",0)]]})},
scv:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.B,[P.h,H.ak(this,"a1",0)]]})},
scB:function(a){H.l(a,{func:1,ret:-1,args:[P.B,[P.h,H.ak(this,"a1",0)]]})},
$ih:1}
O.ci.prototype={
gl:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.ax():u},
aq:function(){var u=this.b
if(u!=null)u.V(null)},
gT:function(a){var u=this.a
if(u.length>0)return C.a.gbf(u)
else return V.jD()},
dt:function(a){var u=this.a
if(a==null)C.a.h(u,V.jD())
else C.a.h(u,a)
this.aq()},
bZ:function(){var u=this.a
if(u.length>0){u.pop()
this.aq()}},
sbv:function(a){this.a=H.m(a,"$ib",[V.ab],"$ab")}}
E.eV.prototype={}
E.ag.prototype={
sc6:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().O(0,s.gdm())
u=s.c
if(u!=null)u.gA().h(0,s.gdm())
t=new D.W("shape",r,s.c,[F.dA])
t.b=!0
s.al(t)}},
saK:function(a){var u,t,s=this
if(!J.a0(s.r,a)){u=s.r
if(u!=null)u.gA().O(0,s.gdk())
if(a!=null)a.gA().h(0,s.gdk())
s.r=a
t=new D.W("mover",u,a,[U.bL])
t.b=!0
s.al(t)}},
bh:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.sdK(m.a+m.d*b.y)
m.sdr(0,m.b+m.e*b.y)
m.sdz(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.b8(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.L(0,V.b8(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.L(0,V.b8(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.ao(0)}q=m.x}else q=null
if(!J.a0(q,n.x)){p=n.x
n.x=q
o=new D.W("matrix",p,q,[V.ab])
o.b=!0
n.al(o)}for(m=n.y.a,m=new J.aq(m,m.length,[H.x(m,0)]);m.u();)m.d.bh(0,b)},
aC:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gT(s))
else C.a.h(s.a,r.L(0,s.gT(s)))
s.aq()
a.du(t.f)
s=a.dy
u=(s&&C.a).gbf(s)
if(u!=null&&t.d!=null)u.ik(a,t)
for(s=t.y.a,s=new J.aq(s,s.length,[H.x(s,0)]);s.u();)s.d.aC(a)
a.ds()
a.dx.bZ()},
al:function(a){var u=this.z
if(u!=null)u.V(a)},
Z:function(){return this.al(null)},
dn:function(a){H.n(a,"$iE")
this.e=null
this.al(a)},
i6:function(){return this.dn(null)},
dl:function(a){this.al(H.n(a,"$iE"))},
i5:function(){return this.dl(null)},
dj:function(a){this.al(H.n(a,"$iE"))},
i2:function(){return this.dj(null)},
i1:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ih",[E.ag],"$ah")
for(u=b.length,t=this.gdi(),s={func:1,ret:-1,args:[D.E]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bH()
o.sa9(null)
o.saw(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Z()},
i4:function(a,b){var u,t
H.m(b,"$ih",[E.ag],"$ah")
for(u=b.gN(b),t=this.gdi();u.u();)u.gD(u).gA().O(0,t)
this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sew:function(a,b){this.y=H.m(b,"$ia1",[E.ag],"$aa1")},
$ib9:1}
E.hi.prototype={
e0:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.bp(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.ci()
t=[V.ab]
u.sbv(H.c([],t))
u.b=null
u.gA().h(0,new E.hj(s))
s.cy=u
u=new O.ci()
u.sbv(H.c([],t))
u.b=null
u.gA().h(0,new E.hk(s))
s.db=u
u=new O.ci()
u.sbv(H.c([],t))
u.b=null
u.gA().h(0,new E.hl(s))
s.dx=u
s.sh2(H.c([],[O.bT]))
u=s.dy;(u&&C.a).h(u,null)
s.sfZ(new H.aN([P.f,A.cq]))},
gig:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gT(s)
u=t.db
u=t.z=s.L(0,u.gT(u))
s=u}return s},
du:function(a){var u=this.dy,t=a==null?(u&&C.a).gbf(u):a;(u&&C.a).h(u,t)},
ds:function(){var u=this.dy
if(u.length>1)u.pop()},
sh2:function(a){this.dy=H.m(a,"$ib",[O.bT],"$ab")},
sfZ:function(a){this.fr=H.m(a,"$iM",[P.f,A.cq],"$aM")}}
E.hj.prototype={
$1:function(a){var u
H.n(a,"$iE")
u=this.a
u.ch=u.z=null},
$S:6}
E.hk.prototype={
$1:function(a){var u
H.n(a,"$iE")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:6}
E.hl.prototype={
$1:function(a){var u
H.n(a,"$iE")
u=this.a
u.cx=u.ch=null},
$S:6}
E.dJ.prototype={
cc:function(a){H.n(a,"$iE")
this.dw()},
cb:function(){return this.cc(null)},
ghS:function(){var u,t=this,s=Date.now(),r=C.i.W(P.kc(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.bp(s,!1)
return u/r},
cE:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.L()
if(typeof r!=="number")return H.bB(r)
u=C.d.de(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.L()
t=C.d.de(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ky(C.m,s.gil())}},
dw:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.hP(this),{func:1,ret:-1,args:[P.a8]})
C.z.eE(u)
C.z.fM(u,W.kU(t,P.a8))}},
ij:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cE()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.bp(r,!1)
s.y=P.kc(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aq()
r=s.db
C.a.sl(r.a,0)
r.aq()
r=s.dx
C.a.sl(r.a,0)
r.aq()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aC(p.e)}s=p.z
if(s!=null)s.V(null)}catch(q){u=H.ap(q)
t=H.c0(q)
P.k_("Error: "+H.k(u))
P.k_("Stack: "+H.k(t))
throw H.e(u)}}}
E.hP.prototype={
$1:function(a){var u
H.mN(a)
u=this.a
if(u.ch){u.ch=!1
u.ij()}},
$S:32}
Z.dQ.prototype={$imX:1}
Z.d_.prototype={
aY:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ap(s)
t=P.t('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.k(u))
throw H.e(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.k(u.e)+"]"}}
Z.it.prototype={$imY:1}
Z.d0.prototype={
aA:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aY:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aY(a)},
dH:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aC:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.i(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aE(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
seL:function(a){this.b=H.m(a,"$ib",[Z.ce],"$ab")},
$in5:1}
Z.ce.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bO(this.c)+"'")+"]"}}
Z.b_.prototype={
gc7:function(a){var u=this.a,t=(u&$.bi().a)!==0?3:0
if((u&$.bh().a)!==0)t+=3
if((u&$.bg().a)!==0)t+=3
if((u&$.bj().a)!==0)t+=2
if((u&$.bk().a)!==0)t+=3
if((u&$.cT().a)!==0)t+=3
if((u&$.cU().a)!==0)t+=4
if((u&$.c3().a)!==0)++t
return(u&$.bf().a)!==0?t+4:t},
hB:function(a){var u,t=$.bi(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bh()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cU()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bf()
if((s&t.a)!==0)if(u===a)return t
return $.ll()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b_))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.f]),t=this.a
if((t&$.bi().a)!==0)C.a.h(u,"Pos")
if((t&$.bh().a)!==0)C.a.h(u,"Norm")
if((t&$.bg().a)!==0)C.a.h(u,"Binm")
if((t&$.bj().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bk().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cT().a)!==0)C.a.h(u,"Clr3")
if((t&$.cU().a)!==0)C.a.h(u,"Clr4")
if((t&$.c3().a)!==0)C.a.h(u,"Weight")
if((t&$.bf().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.eY.prototype={}
D.bH.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.E]}
H.l(b,u)
if(this.a==null)this.sa9(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
O:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[D.E]})
u=s.a
u=u==null?null:C.a.R(u,b)
if(u===!0){u=s.a
t=(u&&C.a).O(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.R(u,b)
if(u===!0){u=s.b
t=(u&&C.a).O(u,b)||t}return t},
V:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.E()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.J(P.ki(u,!0,{func:1,ret:-1,args:[D.E]}),new D.ff(q))
u=r.b
if(u!=null){r.saw(H.c([],[{func:1,ret:-1,args:[D.E]}]))
C.a.J(u,new D.fg(q))}return!0},
ao:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.V(u)}}},
sa9:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.E]}],"$ab")},
saw:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.E]}],"$ab")}}
D.ff.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.E]})
u=this.a.a
u.b
a.$1(u)},
$S:15}
D.fg.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.E]})
u=this.a.a
u.b
a.$1(u)},
$S:15}
D.E.prototype={}
D.cf.prototype={}
D.cg.prototype={}
D.W.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.d1.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d1))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.dd.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dd))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.fC.prototype={
ib:function(a){this.d.h(0,a.a)
return!1},
i7:function(a){this.d.O(0,a.a)
return!1},
sfF:function(a){this.d=H.m(a,"$iku",[P.B],"$aku")}}
X.fI.prototype={
bY:function(a,b){this.r=a.a
return!1},
aM:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dQ()
if(typeof u!=="number")return u.dL()
this.r=(u&~t)>>>0
return!1},
aL:function(a,b){return!1},
ic:function(a){return!1},
ff:function(a,b,c){return}}
X.cj.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.cj))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.J(this.b)?"Alt+":""
return u+(H.J(this.c)?"Shift+":"")}}
X.h_.prototype={
bY:function(a,b){this.f=a.a
return!1},
aM:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.dQ()
if(typeof u!=="number")return u.dL()
this.f=(u&~t)>>>0
return!1},
aL:function(a,b){return!1},
ie:function(a,b){return!1}}
X.hT.prototype={
ia:function(a){H.m(a,"$ib",[V.ac],"$ab")
return!1},
i8:function(a){H.m(a,"$ib",[V.ac],"$ab")
return!1},
i9:function(a){H.m(a,"$ib",[V.ac],"$ab")
return!1}}
X.dP.prototype={
cp:function(a){var u=a.keyCode,t=H.J(a.ctrlKey)||H.J(a.metaKey)
return new X.dd(u,new X.cj(t,a.altKey,a.shiftKey))},
ax:function(a){if(!H.J(a.ctrlKey))H.J(a.metaKey)
a.shiftKey},
bE:function(a){if(!H.J(a.ctrlKey))H.J(a.metaKey)
a.shiftKey},
ai:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.v()
u=t.top
if(typeof r!=="number")return r.v()
return new V.ac(s-q,r-u)},
aG:function(a){return new V.aD(a.movementX,a.movementY)},
bA:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.ac])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
q=C.d.a6(r.pageX)
C.d.a6(r.pageY)
p=o.left
C.d.a6(r.pageX)
C.a.h(n,new V.ac(q-p,C.d.a6(r.pageY)-o.top))}return n},
ag:function(a){var u=a.buttons,t=H.J(a.ctrlKey)||H.J(a.metaKey)
return new X.d1(u,new X.cj(t,a.altKey,a.shiftKey))},
bw:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.v()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.v()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
f9:function(a){this.f=!0},
eY:function(a){this.f=!1},
f3:function(a){H.n(a,"$ia5")
if(H.J(this.f)&&this.bw(a))a.preventDefault()},
fd:function(a){var u
H.n(a,"$iaO")
if(!H.J(this.f))return
u=this.cp(a)
this.b.ib(u)},
fb:function(a){var u
H.n(a,"$iaO")
if(!H.J(this.f))return
u=this.cp(a)
this.b.i7(u)},
fh:function(a){var u,t,s,r,q=this
H.n(a,"$ia5")
u=q.a
u.focus()
q.f=!0
q.ax(a)
if(H.J(q.x)){t=q.ag(a)
s=q.aG(a)
if(q.d.bY(t,s))a.preventDefault()
return}if(H.J(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ag(a)
r=q.ai(a)
if(q.c.bY(t,r))a.preventDefault()},
fl:function(a){var u,t,s,r=this
H.n(a,"$ia5")
r.ax(a)
u=r.ag(a)
if(H.J(r.x)){t=r.aG(a)
if(r.d.aM(u,t))a.preventDefault()
return}if(H.J(r.r))return
s=r.ai(a)
if(r.c.aM(u,s))a.preventDefault()},
f7:function(a){var u,t,s,r=this
H.n(a,"$ia5")
if(!r.bw(a)){r.ax(a)
u=r.ag(a)
if(H.J(r.x)){t=r.aG(a)
if(r.d.aM(u,t))a.preventDefault()
return}if(H.J(r.r))return
s=r.ai(a)
if(r.c.aM(u,s))a.preventDefault()}},
fj:function(a){var u,t,s,r=this
H.n(a,"$ia5")
r.ax(a)
u=r.ag(a)
if(H.J(r.x)){t=r.aG(a)
if(r.d.aL(u,t))a.preventDefault()
return}if(H.J(r.r))return
s=r.ai(a)
if(r.c.aL(u,s))a.preventDefault()},
f5:function(a){var u,t,s,r=this
H.n(a,"$ia5")
if(!r.bw(a)){r.ax(a)
u=r.ag(a)
if(H.J(r.x)){t=r.aG(a)
if(r.d.aL(u,t))a.preventDefault()
return}if(H.J(r.r))return
s=r.ai(a)
if(r.c.aL(u,s))a.preventDefault()}},
fn:function(a){var u,t,s=this
H.n(a,"$ib0")
s.ax(a)
u=new V.aD((a&&C.y).ghJ(a),C.y.ghK(a)).B(0,180)
if(H.J(s.x)){if(s.d.ic(u))a.preventDefault()
return}if(H.J(s.r))return
t=s.ai(a)
if(s.c.ie(u,t))a.preventDefault()},
fp:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ag(s.y)
t=s.ai(s.y)
s.d.ff(u,t,r)}},
fD:function(a){var u,t=this
H.n(a,"$iaB")
t.a.focus()
t.f=!0
t.bE(a)
u=t.bA(a)
if(t.e.ia(u))a.preventDefault()},
fz:function(a){var u
H.n(a,"$iaB")
this.bE(a)
u=this.bA(a)
if(this.e.i8(u))a.preventDefault()},
fB:function(a){var u
H.n(a,"$iaB")
this.bE(a)
u=this.bA(a)
if(this.e.i9(u))a.preventDefault()},
seF:function(a){this.z=H.m(a,"$ib",[[P.cs,P.L]],"$ab")}}
D.bq.prototype={
ae:function(a){var u
H.n(a,"$iE")
u=this.d
if(u!=null)u.V(a)},
e7:function(){return this.ae(null)},
$ia2:1,
$ib9:1}
D.a2.prototype={$ib9:1}
D.de.prototype={
ae:function(a){var u=this.Q
if(u!=null)u.V(a)},
cz:function(a){var u
H.n(a,"$iE")
u=this.ch
if(u!=null)u.V(a)},
fe:function(){return this.cz(null)},
ft:function(a){var u,t,s
H.m(a,"$ih",[D.a2],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.e5(s))return!1}return!0},
eS:function(a,b){var u,t,s,r,q,p,o,n=D.a2
H.m(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gcw(),s={func:1,ret:-1,args:[D.E]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=H.n(b[q],"$ia2")
if(p instanceof D.bq)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bH()
o.sa9(null)
o.saw(null)
o.c=null
o.d=0
p.d=o}H.l(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.cf([n])
n.b=!0
this.ae(n)},
fv:function(a,b){var u,t,s,r=D.a2
H.m(b,"$ih",[r],"$ah")
for(u=b.gN(b),t=this.gcw();u.u();){s=u.gD(u)
C.a.O(this.e,s)
s.gA().O(0,t)}r=new D.cg([r])
r.b=!0
this.ae(r)},
e5:function(a){var u=C.a.R(this.e,a)
return u},
seC:function(a){this.e=H.m(a,"$ib",[D.bq],"$ab")},
sfE:function(a){this.f=H.m(a,"$ib",[D.dt],"$ab")},
sh0:function(a){this.r=H.m(a,"$ib",[D.dB],"$ab")},
sh5:function(a){this.x=H.m(a,"$ib",[D.dG],"$ab")},
sh6:function(a){this.y=H.m(a,"$ib",[D.dH],"$ab")},
sh7:function(a){this.z=H.m(a,"$ib",[D.dI],"$ab")},
$ah:function(){return[D.a2]},
$aa1:function(){return[D.a2]}}
D.dt.prototype={$ia2:1,$ib9:1}
D.dB.prototype={$ia2:1,$ib9:1}
D.dG.prototype={$ia2:1,$ib9:1}
D.dH.prototype={$ia2:1,$ib9:1}
D.dI.prototype={$ia2:1,$ib9:1}
V.a_.prototype={
q:function(a,b){var u=C.d.q(this.a,b.gc_()),t=C.d.q(this.b,b.gbj()),s=C.d.q(this.c,b.gbJ())
return new V.a_(V.X(u),V.X(t),V.X(s))},
v:function(a,b){var u=C.d.v(this.a,b.gc_()),t=C.d.v(this.b,b.gbj()),s=C.d.v(this.c,b.gbJ())
return new V.a_(V.X(u),V.X(t),V.X(s))},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.b3.prototype={
q:function(a,b){var u=this,t=C.d.q(u.a,b.gc_()),s=C.d.q(u.b,b.gbj()),r=C.d.q(u.c,b.gbJ()),q=C.d.q(u.d,b.ghz(b))
return new V.b3(V.X(t),V.X(s),V.X(r),V.X(q))},
v:function(a,b){var u=this,t=C.d.v(u.a,b.gc_()),s=C.d.v(u.b,b.gbj()),r=C.d.v(u.c,b.gbJ()),q=C.d.v(u.d,b.ghz(b))
return new V.b3(V.X(t),V.X(s),V.X(r),V.X(q))},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b3))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+", "+V.O(u.d,3,0)+"]"}}
V.fe.prototype={}
V.dl.prototype={
a3:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.y])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dl))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.y],o=V.bZ(H.c([q.a,q.d,q.r],p),3,0),n=V.bZ(H.c([q.b,q.e,q.x],p),3,0),m=V.bZ(H.c([q.c,q.f,q.y],p),3,0)
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
V.ab.prototype={
a3:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.y])
return t},
df:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.Q().a)return V.jD()
u=1/b1
t=-n
s=-a0
return V.b8((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
L:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b8(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
c3:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.S(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aP:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a6(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ab))return!1
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
i:function(a){return this.M()},
E:function(a){var u,t,s,r,q,p=this,o=[P.y],n=V.bZ(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bZ(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bZ(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bZ(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
M:function(){return this.E("")}}
V.ac.prototype={
q:function(a,b){return new V.ac(this.a+b.a,this.b+b.b)},
v:function(a,b){return new V.ac(C.d.v(this.a,b.giF(b)),C.d.v(this.b,b.giG(b)))},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.a6.prototype={
q:function(a,b){return new V.a6(this.a+b.a,this.b+b.b,this.c+b.c)},
v:function(a,b){return new V.a6(this.a-b.a,this.b-b.b,this.c-b.c)},
L:function(a,b){return new V.a6(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.dx.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dx))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+", "+V.O(u.d,3,0)+"]"}}
V.aD.prototype={
bW:function(a){var u,t=this.a
if(typeof t!=="number")return t.L()
u=this.b
if(typeof u!=="number")return u.L()
return Math.sqrt(t*t+u*u)},
q:function(a,b){var u,t=this.a,s=b.ghM(b)
if(typeof t!=="number")return t.q()
s=C.d.q(t,s)
t=this.b
u=b.ghN(b)
if(typeof t!=="number")return t.q()
return new V.aD(s,C.d.q(t,u))},
v:function(a,b){var u,t=this.a,s=b.ghM(b)
if(typeof t!=="number")return t.v()
s=C.d.v(t,s)
t=this.b
u=b.ghN(b)
if(typeof t!=="number")return t.v()
return new V.aD(s,C.d.v(t,u))},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.Q().a){u=$.kC
return u==null?$.kC=new V.aD(0,0):u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.aD(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aD))return!1
u=b.a
t=this.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.bB(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.bB(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.S.prototype={
bW:function(a){return Math.sqrt(this.K(this))},
K:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aj:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.S(u*t-s*r,s*q-p*t,p*r-u*q)},
q:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
v:function(a,b){return new V.S(this.a-b.a,this.b-b.b,this.c-b.c)},
aE:function(a){return new V.S(-this.a,-this.b,-this.c)},
L:function(a,b){return new V.S(this.a*b,this.b*b,this.c*b)},
B:function(a,b){if(Math.abs(b-0)<$.Q().a)return V.cD()
return new V.S(this.a/b,this.b/b,this.c/b)},
dg:function(){var u=$.Q().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
U.d3.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.ax():u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d3))return!1
return J.a0(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.bL.prototype={}
U.dy.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.ax():u},
au:function(a){var u=this.y
if(u!=null)u.V(a)},
sdK:function(a){var u
a=V.k1(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.Q().a)){this.a=a
u=new D.W("yaw",u,a,[P.y])
u.b=!0
this.au(u)}},
sdr:function(a,b){var u
b=V.k1(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.Q().a)){this.b=b
u=new D.W("pitch",u,b,[P.y])
u.b=!0
this.au(u)}},
sdz:function(a){var u
a=V.k1(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.Q().a)){this.c=a
u=new D.W("roll",u,a,[P.y])
u.b=!0
this.au(u)}},
t:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dy))return!1
u=r.a
t=b.a
s=$.Q().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+"], ["+V.O(u.d,3,0)+", "+V.O(u.e,3,0)+", "+V.O(u.f,3,0)+"]"}}
M.d7.prototype={
af:function(a){var u
H.n(a,"$iE")
u=this.y
if(u!=null)u.V(a)},
e9:function(){return this.af(null)},
f_:function(a,b){var u,t,s,r,q,p,o,n=E.ag
H.m(b,"$ih",[n],"$ah")
for(u=b.length,t=this.ga8(),s={func:1,ret:-1,args:[D.E]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bH()
o.sa9(null)
o.saw(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cf([n])
n.b=!0
this.af(n)},
f1:function(a,b){var u,t,s=E.ag
H.m(b,"$ih",[s],"$ah")
for(u=b.gN(b),t=this.ga8();u.u();)u.gD(u).gA().O(0,t)
s=new D.cg([s])
s.b=!0
this.af(s)},
sdC:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().O(0,t.ga8())
u=t.d
t.d=a
if(a!=null)a.gA().h(0,t.ga8())
s=new D.W("technique",u,t.d,[O.bT])
s.b=!0
t.af(s)}},
gA:function(){var u=this.y
return u==null?this.y=D.ax():u},
aC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.du(f.d)
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
if(typeof s!=="number")return H.bB(s)
o=C.d.a6(p*s)
p=q.b
if(typeof r!=="number")return H.bB(r)
n=C.d.a6(p*r)
p=C.d.a6(q.c*s)
a.c=p
q=C.d.a6(q.d*r)
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
i=V.b8(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dt(i)
t=$.ko
if(t==null){t=V.kq()
q=V.kH()
p=$.kD
t=V.kk(t,q,p==null?$.kD=new V.S(0,0,-1):p)
$.ko=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.L(0,h)}a.db.dt(h)
u=f.d
if(u!=null)u.bh(0,a)
for(u=f.e.a,u=new J.aq(u,u.length,[H.x(u,0)]);u.u();)u.d.bh(0,a)
for(u=f.e.a,u=new J.aq(u,u.length,[H.x(u,0)]);u.u();)u.d.aC(a)
f.b.toString
a.cy.bZ()
a.db.bZ()
f.c.toString
a.ds()},
se8:function(a,b){this.e=H.m(b,"$ia1",[E.ag],"$aa1")},
$in3:1}
A.cX.prototype={}
A.eQ.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hO:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hL:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.fO.prototype={
e_:function(d2,d3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="Required uniform value, ",a9=", was not defined or used in shader.",b0="emissionTxt",b1="nullEmissionTxt",b2="ambientTxt",b3="nullAmbientTxt",b4="diffuseTxt",b5="nullDiffuseTxt",b6="invDiffuseTxt",b7="nullInvDiffuseTxt",b8="specularTxt",b9="nullSpecularTxt",c0="nullBumpTxt",c1="reflectTxt",c2="nullReflectTxt",c3="refractTxt",c4="nullRefractTxt",c5="alphaTxt",c6="nullAlphaTxt",c7="uniform mat4 objMat;\n",c8="   if(nullAlphaTxt > 0) return alpha;\n",c9="   if (a <= 0.000001) discard;\n",d0="precision mediump float;\n\n",d1="precision mediump float;\n\nvarying vec3 normalVec;\n"
a7.z=d2
u=new P.bb("")
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
d2.hb(u)
d2.hi(u)
d2.hc(u)
d2.hq(u)
d2.hr(u)
d2.hk(u)
d2.hv(u)
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
u=new P.bb("")
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
s.hf(u)
s.ha(u)
s.hd(u)
s.hg(u)
s.ho(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.hm(u)
s.hn(u)}s.hj(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=s.y
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
k=H.c([],[P.f])
if(s.b!==C.c)C.a.h(k,"ambient()")
if(s.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.he(u)
s.hl(u)
s.hp(u)
s.hs(u)
s.ht(u)
s.hu(u)
s.hh(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
q=q?u.a=m+"   vec3 norm = normal();\n":m
if(p)u.a=q+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.c([],[P.f])
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
a7.e=a7.cq(n,35633)
a7.f=a7.cq(a7.d,35632)
s=a7.a
q=s.createProgram()
a7.r=q
s.attachShader(q,a7.e)
s.attachShader(a7.r,a7.f)
s.linkProgram(a7.r)
if(!H.J(H.jQ(s.getProgramParameter(a7.r,35714)))){h=s.getProgramInfoLog(a7.r)
s.deleteProgram(a7.r)
H.v(P.t("Failed to link shader: "+H.k(h)))}a7.fW()
a7.fY()
a7.Q=a7.x.j(0,"posAttr")
a7.cx=a7.x.j(0,"normAttr")
a7.ch=a7.x.j(0,"binmAttr")
a7.cy=a7.x.j(0,"txt2DAttr")
a7.db=a7.x.j(0,"txtCubeAttr")
a7.dx=a7.x.j(0,"bendAttr")
if(d2.fr)a7.id=H.j(a7.y.n(0,"invViewMat"),"$ian")
if(t)a7.dy=H.j(a7.y.n(0,"objMat"),"$ian")
if(r)a7.fr=H.j(a7.y.n(0,"viewObjMat"),"$ian")
a7.fy=H.j(a7.y.n(0,"projViewObjMat"),"$ian")
if(d2.x2)a7.k1=H.j(a7.y.n(0,"txt2DMat"),"$icx")
if(d2.y1)a7.k2=H.j(a7.y.n(0,"txtCubeMat"),"$ian")
if(d2.y2)a7.k3=H.j(a7.y.n(0,"colorMat"),"$ian")
a7.ser(H.c([],[A.an]))
t=d2.ad
if(t>0){a7.k4=H.n(a7.y.n(0,"bendMatCount"),"$iI")
for(g=0;g<t;++g){s=a7.r1
r=a7.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.v(P.t(a8+q+a9));(s&&C.a).h(s,H.j(f,"$ian"))}}t=d2.a
if(t!==C.c){a7.r2=H.j(a7.y.n(0,"emissionClr"),"$iH")
switch(t){case C.c:break
case C.h:break
case C.e:a7.rx=H.j(a7.y.n(0,b0),"$iad")
a7.x1=H.j(a7.y.n(0,b1),"$iI")
break
case C.f:a7.ry=H.j(a7.y.n(0,b0),"$iae")
a7.x1=H.j(a7.y.n(0,b1),"$iI")
break}}t=d2.b
if(t!==C.c){a7.x2=H.j(a7.y.n(0,"ambientClr"),"$iH")
switch(t){case C.c:break
case C.h:break
case C.e:a7.y1=H.j(a7.y.n(0,b2),"$iad")
a7.ad=H.j(a7.y.n(0,b3),"$iI")
break
case C.f:a7.y2=H.j(a7.y.n(0,b2),"$iae")
a7.ad=H.j(a7.y.n(0,b3),"$iI")
break}}t=d2.c
if(t!==C.c){a7.a5=H.j(a7.y.n(0,"diffuseClr"),"$iH")
switch(t){case C.c:break
case C.h:break
case C.e:a7.b0=H.j(a7.y.n(0,b4),"$iad")
a7.b1=H.j(a7.y.n(0,b5),"$iI")
break
case C.f:a7.cT=H.j(a7.y.n(0,b4),"$iae")
a7.b1=H.j(a7.y.n(0,b5),"$iI")
break}}t=d2.d
if(t!==C.c){a7.b2=H.j(a7.y.n(0,"invDiffuseClr"),"$iH")
switch(t){case C.c:break
case C.h:break
case C.e:a7.cU=H.j(a7.y.n(0,b6),"$iad")
a7.b3=H.j(a7.y.n(0,b7),"$iI")
break
case C.f:a7.cV=H.j(a7.y.n(0,b6),"$iae")
a7.b3=H.j(a7.y.n(0,b7),"$iI")
break}}t=d2.e
if(t!==C.c){a7.b6=H.j(a7.y.n(0,"shininess"),"$iZ")
a7.b4=H.j(a7.y.n(0,"specularClr"),"$iH")
switch(t){case C.c:break
case C.h:break
case C.e:a7.cW=H.j(a7.y.n(0,b8),"$iad")
a7.b5=H.j(a7.y.n(0,b9),"$iI")
break
case C.f:a7.cX=H.j(a7.y.n(0,b8),"$iae")
a7.b5=H.j(a7.y.n(0,b9),"$iI")
break}}switch(d2.f){case C.c:break
case C.h:break
case C.e:a7.cY=H.j(a7.y.n(0,"bumpTxt"),"$iad")
a7.b7=H.j(a7.y.n(0,c0),"$iI")
break
case C.f:a7.cZ=H.j(a7.y.n(0,"bumpTxt"),"$iae")
a7.b7=H.j(a7.y.n(0,c0),"$iI")
break}if(d2.dy){a7.d_=H.j(a7.y.n(0,"envSampler"),"$iae")
a7.d0=H.j(a7.y.n(0,"nullEnvTxt"),"$iI")
t=d2.r
if(t!==C.c){a7.b8=H.j(a7.y.n(0,"reflectClr"),"$iH")
switch(t){case C.c:break
case C.h:break
case C.e:a7.d1=H.j(a7.y.n(0,c1),"$iad")
a7.b9=H.j(a7.y.n(0,c2),"$iI")
break
case C.f:a7.d2=H.j(a7.y.n(0,c1),"$iae")
a7.b9=H.j(a7.y.n(0,c2),"$iI")
break}}t=d2.x
if(t!==C.c){a7.ba=H.j(a7.y.n(0,"refraction"),"$iZ")
a7.bb=H.j(a7.y.n(0,"refractClr"),"$iH")
switch(t){case C.c:break
case C.h:break
case C.e:a7.d3=H.j(a7.y.n(0,c3),"$iad")
a7.bc=H.j(a7.y.n(0,c4),"$iI")
break
case C.f:a7.d4=H.j(a7.y.n(0,c3),"$iae")
a7.bc=H.j(a7.y.n(0,c4),"$iI")
break}}}t=d2.y
if(t!==C.c){a7.bd=H.j(a7.y.n(0,"alpha"),"$iZ")
switch(t){case C.c:break
case C.h:break
case C.e:a7.d5=H.j(a7.y.n(0,c5),"$iad")
a7.be=H.j(a7.y.n(0,c6),"$iI")
break
case C.f:a7.d6=H.j(a7.y.n(0,c5),"$iae")
a7.be=H.j(a7.y.n(0,c6),"$iI")
break}}a7.sea(H.c([],[A.cw]))
a7.seb(H.c([],[A.cy]))
a7.sec(H.c([],[A.cz]))
a7.sed(H.c([],[A.cA]))
a7.see(H.c([],[A.cB]))
a7.sef(H.c([],[A.cC]))
if(d2.k2){t=d2.z
if(t>0){a7.d7=H.n(a7.y.n(0,"dirLightCount"),"$iI")
for(g=0;g<t;++g){s=a7.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.v(P.t(a8+r+a9))
H.j(f,"$iH")
s=a7.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.v(P.t(a8+r+a9))
H.j(e,"$iH")
s=a7.bP;(s&&C.a).h(s,new A.cw(f,e))}}t=d2.Q
if(t>0){a7.d8=H.n(a7.y.n(0,"pntLightCount"),"$iI")
for(g=0;g<t;++g){s=a7.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.v(P.t(a8+r+a9))
H.j(f,"$iH")
s=a7.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.v(P.t(a8+r+a9))
H.j(e,"$iH")
s=a7.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.v(P.t(a8+r+a9))
H.j(d,"$iH")
s=a7.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.v(P.t(a8+r+a9))
H.j(c,"$iZ")
s=a7.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.v(P.t(a8+r+a9))
H.j(b,"$iZ")
s=a7.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.v(P.t(a8+r+a9))
H.j(a,"$iZ")
s=a7.bQ;(s&&C.a).h(s,new A.cy(f,e,d,c,b,a))}}t=d2.ch
if(t>0){a7.d9=H.n(a7.y.n(0,"spotLightCount"),"$iI")
for(g=0;g<t;++g){s=a7.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.v(P.t(a8+r+a9))
H.j(f,"$iH")
s=a7.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.v(P.t(a8+r+a9))
H.j(e,"$iH")
s=a7.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.v(P.t(a8+r+a9))
H.j(d,"$iH")
s=a7.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.v(P.t(a8+r+a9))
H.j(c,"$iH")
s=a7.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.v(P.t(a8+r+a9))
H.j(b,"$iZ")
s=a7.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.v(P.t(a8+r+a9))
H.j(a,"$iZ")
s=a7.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.v(P.t(a8+r+a9))
H.j(a0,"$iZ")
s=a7.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.v(P.t(a8+r+a9))
H.j(a1,"$iZ")
s=a7.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.v(P.t(a8+r+a9))
H.j(a2,"$iZ")
s=a7.bR;(s&&C.a).h(s,new A.cz(f,e,d,c,b,a,a0,a1,a2))}}t=d2.cx
if(t>0){a7.da=H.n(a7.y.n(0,"txtDirLightCount"),"$iI")
for(g=0;g<t;++g){s=a7.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.v(P.t(a8+r+a9))
H.j(f,"$iH")
s=a7.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.v(P.t(a8+r+a9))
H.j(e,"$iH")
s=a7.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.v(P.t(a8+r+a9))
H.j(d,"$iH")
s=a7.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.v(P.t(a8+r+a9))
H.j(c,"$iH")
s=a7.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.v(P.t(a8+r+a9))
H.j(b,"$iH")
s=a7.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.v(P.t(a8+r+a9))
H.j(a,"$iI")
s=a7.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.v(P.t(a8+r+a9))
H.j(a0,"$iad")
s=a7.bS;(s&&C.a).h(s,new A.cA(f,e,d,c,b,a0,a))}}t=d2.cy
if(t>0){a7.dc=H.n(a7.y.n(0,"txtPntLightCount"),"$iI")
for(g=0;g<t;++g){s=a7.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.v(P.t(a8+r+a9))
H.j(f,"$iH")
s=a7.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.v(P.t(a8+r+a9))
H.j(e,"$iH")
s=a7.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.v(P.t(a8+r+a9))
H.j(d,"$icx")
s=a7.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.v(P.t(a8+r+a9))
H.j(c,"$iH")
s=a7.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.v(P.t(a8+r+a9))
H.j(b,"$iI")
s=a7.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.v(P.t(a8+r+a9))
H.j(a,"$iZ")
s=a7.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.v(P.t(a8+r+a9))
H.j(a0,"$iZ")
s=a7.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.v(P.t(a8+r+a9))
H.j(a1,"$iZ")
s=a7.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.v(P.t(a8+r+a9))
H.j(a2,"$iae")
s=a7.bT;(s&&C.a).h(s,new A.cB(f,e,d,c,a2,b,a,a0,a1))}}t=d2.db
if(t>0){a7.dd=H.n(a7.y.n(0,"txtSpotLightCount"),"$iI")
for(g=0;g<t;++g){s=a7.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.v(P.t(a8+r+a9))
H.j(f,"$iH")
s=a7.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.v(P.t(a8+r+a9))
H.j(e,"$iH")
s=a7.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.v(P.t(a8+r+a9))
H.j(d,"$iH")
s=a7.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.v(P.t(a8+r+a9))
H.j(c,"$iH")
s=a7.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.v(P.t(a8+r+a9))
H.j(b,"$iH")
s=a7.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.v(P.t(a8+r+a9))
H.j(a,"$iI")
s=a7.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.v(P.t(a8+r+a9))
H.j(a0,"$iH")
s=a7.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.v(P.t(a8+r+a9))
H.j(a1,"$iZ")
s=a7.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.v(P.t(a8+r+a9))
H.j(a2,"$iZ")
s=a7.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.v(P.t(a8+r+a9))
H.j(a3,"$iZ")
s=a7.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.v(P.t(a8+r+a9))
H.j(a4,"$iZ")
s=a7.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.v(P.t(a8+r+a9))
H.j(a5,"$iZ")
s=a7.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.v(P.t(a8+r+a9))
H.j(a6,"$iad")
s=a7.bU;(s&&C.a).h(s,new A.cC(f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
a4:function(a,b,c){C.b.U(b.a,b.d,1)},
a0:function(a,b,c){C.b.U(b.a,b.d,1)},
ser:function(a){this.r1=H.m(a,"$ib",[A.an],"$ab")},
sea:function(a){this.bP=H.m(a,"$ib",[A.cw],"$ab")},
seb:function(a){this.bQ=H.m(a,"$ib",[A.cy],"$ab")},
sec:function(a){this.bR=H.m(a,"$ib",[A.cz],"$ab")},
sed:function(a){this.bS=H.m(a,"$ib",[A.cA],"$ab")},
see:function(a){this.bT=H.m(a,"$ib",[A.cB],"$ab")},
sef:function(a){this.bU=H.m(a,"$ib",[A.cC],"$ab")}}
A.fR.prototype={
hb:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.ad+"];\n"
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
hi:function(a){var u
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
hc:function(a){var u
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
hq:function(a){var u,t
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
hr:function(a){var u,t
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
hk:function(a){var u
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
hv:function(a){var u
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
ah:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.i(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.j.aR(c,1))+"Txt;\n")
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hf:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.ah(a,s,"emission")
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
ha:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.ah(a,s,"ambient")
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
hd:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.ah(a,s,"diffuse")
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
hg:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.ah(a,s,"invDiffuse")
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
ho:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.ah(a,s,"specular")
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
hj:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
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
hm:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.ah(a,s,"reflect")
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
hn:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.ah(a,s,"refract")
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
he:function(a){var u,t=this.z
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
hl:function(a){var u,t=this.Q
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
hp:function(a){var u,t=this.ch
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
hs:function(a){var u,t,s=this.cx
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
ht:function(a){var u,t,s=this.cy
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
hu:function(a){var u,t,s=this.db
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
hh:function(a){var u
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
i:function(a){return this.a5}}
A.cw.prototype={}
A.cA.prototype={}
A.cy.prototype={}
A.cB.prototype={}
A.cz.prototype={}
A.cC.prototype={}
A.cq.prototype={
e2:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cq:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.J(H.jQ(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.e(P.t("Error compiling shader '"+H.k(s)+"': "+H.k(u)))}return s},
fW:function(){var u,t,s,r=this,q=H.c([],[A.cX]),p=r.a,o=H.a9(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.bB(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cX(p,t.name,s))}r.x=new A.eQ(q)},
fY:function(){var u,t,s,r=this,q=H.c([],[A.dL]),p=r.a,o=H.a9(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.bB(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hI(t.type,t.size,t.name,s))}r.y=new A.i6(q)},
at:function(a,b,c){var u=this.a
if(a===1)return new A.I(u,b,c)
else return A.jJ(u,this.r,b,a,c)},
ez:function(a,b,c){var u=this.a
if(a===1)return new A.ad(u,b,c)
else return A.jJ(u,this.r,b,a,c)},
eA:function(a,b,c){var u=this.a
if(a===1)return new A.ae(u,b,c)
else return A.jJ(u,this.r,b,a,c)},
aX:function(a,b){return new P.dZ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hI:function(a,b,c,d){var u=this
switch(a){case 5120:return u.at(b,c,d)
case 5121:return u.at(b,c,d)
case 5122:return u.at(b,c,d)
case 5123:return u.at(b,c,d)
case 5124:return u.at(b,c,d)
case 5125:return u.at(b,c,d)
case 5126:return new A.Z(u.a,c,d)
case 35664:return new A.i1(u.a,c,d)
case 35665:return new A.H(u.a,c,d)
case 35666:return new A.i4(u.a,c,d)
case 35667:return new A.i2(u.a,c,d)
case 35668:return new A.i3(u.a,c,d)
case 35669:return new A.i5(u.a,c,d)
case 35674:return new A.i7(u.a,c,d)
case 35675:return new A.cx(u.a,c,d)
case 35676:return new A.an(u.a,c,d)
case 35678:return u.ez(b,c,d)
case 35680:return u.eA(b,c,d)
case 35670:throw H.e(u.aX("BOOL",c))
case 35671:throw H.e(u.aX("BOOL_VEC2",c))
case 35672:throw H.e(u.aX("BOOL_VEC3",c))
case 35673:throw H.e(u.aX("BOOL_VEC4",c))
default:throw H.e(P.t("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.bG.prototype={
i:function(a){return this.b}}
A.dL.prototype={}
A.i6.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.e(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.I.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.i2.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.i3.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.i5.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.i0.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
sh8:function(a){H.m(a,"$ib",[P.B],"$ab")}}
A.Z.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.i1.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.H.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.i4.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.i7.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.cx.prototype={
a7:function(a){var u=new Float32Array(H.cQ(H.m(a,"$ib",[P.y],"$ab")))
C.b.dI(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.an.prototype={
a7:function(a){var u=new Float32Array(H.cQ(H.m(a,"$ib",[P.y],"$ab")))
C.b.dJ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.ad.prototype={
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.ae.prototype={
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.jr.prototype={
$1:function(a){return new V.a6(Math.cos(a),Math.sin(a),0)},
$S:36}
F.jf.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.k4(n.$1(o),m)
m=J.lp(J.k4(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.S(m.a,m.b,m.c)
u=m.B(0,Math.sqrt(m.K(m)))
n=$.kE
if(n==null){n=new V.S(1,0,0)
$.kE=n
t=n}else t=n
n=u.aj(!J.a0(u,t)?V.kI():t)
s=n.B(0,Math.sqrt(n.K(n)))
n=s.aj(u)
t=n.B(0,Math.sqrt(n.K(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.L(0,n*m)
m=s.L(0,q*m)
m=J.lo(l,new V.a6(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.a0(a.f,m)){a.f=H.n(m,"$ia6")
n=a.a
if(n!=null)n.Z()}},
$S:37}
F.a3.prototype={
b_:function(){var u=this
if(!u.gcS()){C.a.O(u.a.a.d.b,u)
u.a.a.Z()}u.fI()
u.fJ()
u.fK()},
fT:function(a){this.a=a
C.a.h(a.d.b,this)},
fU:function(a){this.b=a
C.a.h(a.d.c,this)},
fV:function(a){this.c=a
C.a.h(a.d.d,this)},
fI:function(){var u=this.a
if(u!=null){C.a.O(u.d.b,this)
this.a=null}},
fJ:function(){var u=this.b
if(u!=null){C.a.O(u.d.c,this)
this.b=null}},
fK:function(){var u=this.c
if(u!=null){C.a.O(u.d.d,this)
this.c=null}},
gcS:function(){return this.a==null||this.b==null||this.c==null},
eq:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cD()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.dg())return
return s.B(0,Math.sqrt(s.K(s)))},
ev:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.v(0,q)
r=new V.S(r.a,r.b,r.c)
s=r.B(0,Math.sqrt(r.K(r)))
r=t.v(0,q)
r=new V.S(r.a,r.b,r.c)
r=s.aj(r.B(0,Math.sqrt(r.K(r))))
return r.B(0,Math.sqrt(r.K(r)))},
bM:function(){var u,t=this
if(t.d!=null)return!0
u=t.eq()
if(u==null){u=t.ev()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
ep:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cD()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.dg())return
return s.B(0,Math.sqrt(s.K(s)))},
eu:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.Q().a){l=d.v(0,g)
l=new V.S(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.K(l)))
if(s.a-t.a<0)q=q.aE(0)}else{p=(l-u.b)/r
l=d.v(0,g).L(0,p).q(0,g).v(0,j)
l=new V.S(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.K(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.aE(0)}l=n.d
if(l!=null){o=l.B(0,Math.sqrt(l.K(l)))
l=o.aj(q)
l=l.B(0,Math.sqrt(l.K(l))).aj(o)
q=l.B(0,Math.sqrt(l.K(l)))}return q},
bK:function(){var u,t=this
if(t.e!=null)return!0
u=t.ep()
if(u==null){u=t.eu()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
gcP:function(a){var u=this
if(J.a0(u.a,u.b))return!0
if(J.a0(u.b,u.c))return!0
if(J.a0(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this
if(s.gcS())return a+"disposed"
u=a+C.j.am(J.aE(s.a.e),0)+", "+C.j.am(J.aE(s.b.e),0)+", "+C.j.am(J.aE(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
M:function(){return this.E("")}}
F.fi.prototype={}
F.hy.prototype={
bX:function(a,b,c){var u,t=b.a
t.a.a.I()
t=t.e
u=c.a
u.a.a.I()
if(t==u.e){t=b.b
t.a.a.I()
t=t.e
u=c.b
u.a.a.I()
if(t==u.e){t=b.c
t.a.a.I()
t=t.e
u=c.c
u.a.a.I()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.I()
t=t.e
u=c.b
u.a.a.I()
if(t==u.e){t=b.b
t.a.a.I()
t=t.e
u=c.c
u.a.a.I()
if(t==u.e){t=b.c
t.a.a.I()
t=t.e
u=c.a
u.a.a.I()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.I()
t=t.e
u=c.c
u.a.a.I()
if(t==u.e){t=b.b
t.a.a.I()
t=t.e
u=c.a
u.a.a.I()
if(t==u.e){t=b.c
t.a.a.I()
t=t.e
u=c.b
u.a.a.I()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bu.prototype={}
F.fE.prototype={}
F.i_.prototype={}
F.bM.prototype={}
F.dA.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.ax():u},
az:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.az()||!1
if(!t.a.az())u=!1
s=t.e
if(s!=null)s.ao(0)
return u},
i_:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.x(o,0)])
for(o=[F.at];u.length!==0;){t=C.a.ghQ(u)
C.a.dv(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.i(u,r)
q=u[r]
if(q!=null&&a.bX(0,t,q)){C.a.h(s,q)
C.a.dv(u,r)}}if(s.length>1)b.hZ(s)}}p.a.I()
p.c.c0()
p.d.c0()
p.b.ii()
p.c.c1(new F.i_())
p.d.c1(new F.hy())
o=p.e
if(o!=null)o.ao(0)},
hE:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bi()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bh().a)!==0)++s
if((t&$.bg().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.cT().a)!==0)++s
if((t&$.cU().a)!==0)++s
if((t&$.c3().a)!==0)++s
if((t&$.bf().a)!==0)++s
r=a3.gc7(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.y
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d_])
for(n=0,m=0;m<s;++m){l=a3.hB(m)
k=l.gc7(l)
C.a.S(o,m,new Z.d_(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.i(u,j)
i=u[j].hX(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.S(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cQ(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d0(new Z.dQ(a0,f),o,a3)
e.seL(H.c([],[Z.ce]))
a.b.b
a.c.b
if(a.d.b.length!==0){t=P.B
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.I()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.i(c,m)
c=c[m].b
c.a.a.I()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.i(c,m)
c=c[m].c
c.a.a.I()
C.a.h(d,c.e)}b=Z.m5(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.ce(4,d.length,b))}return e},
i:function(a){var u=this,t=H.c([],[P.f])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.E("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.E("   "))}return C.a.m(t,"\n")},
Z:function(){var u=this.e
if(u!=null)u.V(null)},
$in4:1}
F.hr.prototype={
hx:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.at],"$ab")
u=H.c([],[F.a3])
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
C.a.h(u,F.fh(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fh(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fh(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.fh(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
c1:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.i(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bX(0,p,n)){p.b_()
break}}}}},
c0:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.i(t,u)
s=t[u]
t=s.gcP(s)
if(t)s.b_()}},
az:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].bM())s=!1
return s},
bL:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].bK())s=!1
return s},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].E(a))
return C.a.m(r,"\n")},
M:function(){return this.E("")},
seG:function(a){this.b=H.m(a,"$ib",[F.a3],"$ab")}}
F.hs.prototype={
gl:function(a){return 0},
c1:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.i(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.j(0,q)}},
c0:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.i(t,u)
s=t[u]
t=s.gcP(s)
if(t)s.b_()}},
i:function(a){return this.M()},
E:function(a){var u,t,s=H.c([],[P.f])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.i(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.m(s,"\n")},
M:function(){return this.E("")},
seM:function(a){this.b=H.m(a,"$ib",[F.bu],"$ab")}}
F.ht.prototype={
gl:function(a){return 0},
ii:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.i(t,u)
t=t[u].giE()
t=t.giB(t)
if(t.gl(t).ix(0,1)){t=this.b
return H.i(t,u)
t[u].b_()}}},
i:function(a){return this.M()},
E:function(a){var u,t,s=H.c([],[P.f])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.i(u,t)
C.a.h(s,u[t].E(a))}return C.a.m(s,"\n")},
M:function(){return this.E("")},
sbz:function(a){this.b=H.m(a,"$ib",[F.bM],"$ab")}}
F.at.prototype={
cR:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kJ(u.cx,r,o,t,s,q,p,a,n)},
hX:function(a){var u,t,s=this
if(a.t(0,$.bi())){u=s.f
t=[P.y]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bh())){u=s.r
t=[P.y]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bg())){u=s.x
t=[P.y]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bj())){u=s.y
t=[P.y]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bk())){u=s.z
t=[P.y]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cT())){u=s.Q
t=[P.y]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cU())){u=s.Q
t=[P.y]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.c3()))return H.c([s.ch],[P.y])
else if(a.t(0,$.bf())){u=H.c([-1,-1,-1,-1],[P.y])
return u}else return H.c([],[P.y])},
bM:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cD()
t.d.J(0,new F.ir(s))
s=s.a
t.r=s.B(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ao(0)}return!0},
bK:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cD()
t.d.J(0,new F.iq(s))
s=s.a
t.x=s.B(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ao(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this,r="-",q=H.c([],[P.f])
C.a.h(q,C.j.am(J.aE(s.e),0))
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
C.a.h(q,V.O(s.ch,3,0))
C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
M:function(){return this.E("")}}
F.ir.prototype={
$1:function(a){var u,t
H.n(a,"$ia3")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:7}
F.iq.prototype={
$1:function(a){var u,t
H.n(a,"$ia3")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:7}
F.ig.prototype={
I:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.i(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.e(P.t("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Z()
return!0},
cK:function(a,b){var u=null,t=F.kJ(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gl:function(a){return this.c.length},
az:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].bM()
return!0},
bL:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].bK()
return!0},
hF:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a0(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.V(null)}}}}return!0},
i:function(a){return this.M()},
E:function(a){var u,t,s,r
this.I()
u=H.c([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].E(a))
return C.a.m(u,"\n")},
M:function(){return this.E("")},
sh9:function(a){this.c=H.m(a,"$ib",[F.at],"$ab")}}
F.ih.prototype={
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
J:function(a,b){var u=this
H.l(b,{func:1,ret:-1,args:[F.a3]})
C.a.J(u.b,b)
C.a.J(u.c,new F.ii(u,b))
C.a.J(u.d,new F.ij(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
seH:function(a){this.b=H.m(a,"$ib",[F.a3],"$ab")},
seI:function(a){this.c=H.m(a,"$ib",[F.a3],"$ab")},
seJ:function(a){this.d=H.m(a,"$ib",[F.a3],"$ab")}}
F.ii.prototype={
$1:function(a){H.n(a,"$ia3")
if(!J.a0(a.a,this.a))this.b.$1(a)},
$S:7}
F.ij.prototype={
$1:function(a){var u
H.n(a,"$ia3")
u=this.a
if(!J.a0(a.a,u)&&!J.a0(a.b,u))this.b.$1(a)},
$S:7}
F.ik.prototype={
gl:function(a){return 0},
j:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.i(u,t)
return u[t]}else{u=this.b
return H.i(u,b)
return u[b]}},
i:function(a){return this.M()},
M:function(){var u,t,s=H.c([],[P.f])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.i(u,t)
C.a.h(s,u[t].E(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.i(u,t)
C.a.h(s,u[t].E(""))}return C.a.m(s,"\n")},
seN:function(a){this.b=H.m(a,"$ib",[F.bu],"$ab")},
seO:function(a){this.c=H.m(a,"$ib",[F.bu],"$ab")}}
F.im.prototype={}
F.il.prototype={
bX:function(a,b,c){return J.a0(b.f,c.f)}}
F.io.prototype={}
F.h8.prototype={
hZ:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.at],"$ab")
u=V.cD()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.S(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.B(0,Math.sqrt(u.K(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.B(0,Math.sqrt(o*o+n*n+m*m))}if(!J.a0(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.V(null)}}}return}}
F.ip.prototype={
gl:function(a){return 0},
i:function(a){return this.M()},
M:function(){var u,t,s=H.c([],[P.f])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.i(u,t)
C.a.h(s,u[t].E(""))}return C.a.m(s,"\n")},
sbz:function(a){this.b=H.m(a,"$ib",[F.bM],"$ab")}}
O.dj.prototype={
gA:function(){var u=this.dy
return u==null?this.dy=D.ax():u},
a_:function(a){var u
H.n(a,"$iE")
u=this.dy
if(u!=null)u.V(a)},
ei:function(){return this.a_(null)},
cD:function(a){H.n(a,"$iE")
this.a=null
this.a_(a)},
fO:function(){return this.cD(null)},
eU:function(a,b){var u=V.ab
H.m(b,"$ih",[u],"$ah")
u=new D.cf([u])
u.b=!0
this.a_(u)},
eW:function(a,b){var u=V.ab
H.m(b,"$ih",[u],"$ah")
u=new D.cg([u])
u.b=!0
this.a_(u)},
cn:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.i.W(a1.e.length+3,4)*4,a3=C.i.W(a1.f.length+3,4)*4,a4=C.i.W(a1.r.length+3,4)*4,a5=C.i.W(a1.x.length+3,4)*4,a6=C.i.W(a1.y.length+3,4)*4,a7=C.i.W(a1.z.length+3,4)*4,a8=C.i.W(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.i.i(a1.a)+C.i.i(u.a)+C.i.i(t.a)+C.i.i(s.a)+C.i.i(r.a)+C.i.i(q.a)+C.i.i(p.a)+C.i.i(o.a)+C.i.i(n.a)
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
a=$.bi()
if(h){j=$.bh()
a=new Z.b_(a.a|j.a)}if(g){j=$.bg()
a=new Z.b_(a.a|j.a)}if(f){j=$.bj()
a=new Z.b_(a.a|j.a)}if(e){j=$.bk()
a=new Z.b_(a.a|j.a)}if(c){j=$.bf()
a=new Z.b_(a.a|j.a)}return new A.fR(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
P:function(a,b){H.m(a,"$ib",[T.dF],"$ab")},
bh:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.aq(u,u.length,[H.x(u,0)]);u.u();){t=u.d
t.toString
s=$.ie
if(s==null)s=$.ie=new V.S(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.c3(s)}}},
ik:function(a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4==null){a4=a3.cn()
u=a5.fr.j(0,a4.a5)
if(u==null){u=A.lO(a4,a5.a)
t=u.b
if(t.length===0)H.v(P.t("May not cache a shader with no name."))
if(a5.fr.cQ(0,t))H.v(P.t('Shader cache already contains a shader by the name "'+t+'".'))
a5.fr.S(0,t,u)}a4=a3.a=u
a6.e=null}s=a4.z
r=s.b0
a4=a6.e
if(!(a4 instanceof Z.d0))a4=a6.e=null
if(a4==null||!a4.d.t(0,r)){a4=s.r1
if(a4)a6.d.az()
q=s.r2
if(q){p=a6.d
o=p.e
if(o!=null)++o.d
p.d.bL()
p.a.bL()
p=p.e
if(p!=null)p.ao(0)}p=s.ry
if(p){o=a6.d
n=o.e
if(n!=null)++n.d
o.a.hF()
o=o.e
if(o!=null)o.ao(0)}m=a6.d.hE(new Z.it(a5.a),r)
m.aA($.bi()).e=a3.a.Q.c
if(a4)m.aA($.bh()).e=a3.a.cx.c
if(q)m.aA($.bg()).e=a3.a.ch.c
if(s.rx)m.aA($.bj()).e=a3.a.cy.c
if(p)m.aA($.bk()).e=a3.a.db.c
if(s.x1)m.aA($.bf()).e=a3.a.dx.c
a6.e=m}a4=T.dF
l=H.c([],[a4])
q=a3.a
p=a5.a
p.useProgram(q.r)
q.x.hO()
if(s.fx){q=a3.a
o=a5.dx
o=o.gT(o)
q=q.dy
q.toString
q.a7(o.a3(0,!0))}if(s.fy){q=a3.a
o=a5.cx
if(o==null){o=a5.db
o=o.gT(o)
n=a5.dx
n=a5.cx=o.L(0,n.gT(n))
o=n}q=q.fr
q.toString
q.a7(o.a3(0,!0))}q=a3.a
o=a5.ch
if(o==null){o=a5.gig()
n=a5.dx
n=a5.ch=o.L(0,n.gT(n))
o=n}q=q.fy
q.toString
q.a7(o.a3(0,!0))
if(s.x2){q=a3.a
o=a3.b
q=q.k1
q.toString
q.a7(C.n.a3(o,!0))}if(s.y1){q=a3.a
o=a3.c
q=q.k2
q.toString
q.a7(C.n.a3(o,!0))}if(s.y2){q=a3.a
o=a3.d
q=q.k3
q.toString
q.a7(C.n.a3(o,!0))}if(s.ad>0){k=a3.e.a.length
q=a3.a.k4
C.b.U(q.a,q.d,k)
for(q=[P.y],j=0;j<k;++j){o=a3.a
n=a3.e.a
if(j>=n.length)return H.i(n,j)
n=n[j]
o.toString
H.n(n,"$iab")
o=o.r1
if(j>=o.length)return H.i(o,j)
o=o[j]
i=new Float32Array(H.cQ(H.m(n.a3(0,!0),"$ib",q,"$ab")))
C.b.dJ(o.a,o.d,!1,i)}}switch(s.a){case C.c:break
case C.h:q=a3.a
o=a3.f.f
q=q.r2
q.toString
n=o.a
h=o.b
o=o.c
C.b.p(q.a,q.d,n,h,o)
break
case C.e:a3.P(l,a3.f.d)
q=a3.a
o=a3.f.d
q.a4(q.rx,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break
case C.f:a3.P(l,a3.f.e)
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
case C.h:q=a3.a
o=a3.r.f
q=q.x2
q.toString
n=o.a
h=o.b
o=o.c
C.b.p(q.a,q.d,n,h,o)
break
case C.e:a3.P(l,a3.r.d)
q=a3.a
o=a3.r.d
q.a4(q.y1,q.ad,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break
case C.f:a3.P(l,a3.r.e)
q=a3.a
o=a3.r.e
q.a0(q.y2,q.ad,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break}switch(s.c){case C.c:break
case C.h:q=a3.a
o=a3.x.f
q=q.a5
q.toString
n=o.a
h=o.b
o=o.c
C.b.p(q.a,q.d,n,h,o)
break
case C.e:a3.P(l,a3.x.d)
q=a3.a
o=a3.x.d
q.a4(q.b0,q.b1,o)
o=a3.a
q=a3.x.f
o=o.a5
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break
case C.f:a3.P(l,a3.x.e)
q=a3.a
o=a3.x.e
q.a0(q.cT,q.b1,o)
o=a3.a
q=a3.x.f
o=o.a5
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break}switch(s.d){case C.c:break
case C.h:q=a3.a
o=a3.y.f
q=q.b2
q.toString
n=o.a
h=o.b
o=o.c
C.b.p(q.a,q.d,n,h,o)
break
case C.e:a3.P(l,a3.y.d)
q=a3.a
o=a3.y.d
q.a4(q.cU,q.b3,o)
o=a3.a
q=a3.y.f
o=o.b2
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break
case C.f:a3.P(l,a3.y.e)
q=a3.a
o=a3.y.e
q.a0(q.cV,q.b3,o)
o=a3.a
q=a3.y.f
o=o.b2
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break}switch(s.e){case C.c:break
case C.h:q=a3.a
o=a3.z.f
q=q.b4
q.toString
n=o.a
h=o.b
o=o.c
C.b.p(q.a,q.d,n,h,o)
o=a3.a
h=a3.z.ch
o=o.b6
C.b.G(o.a,o.d,h)
break
case C.e:a3.P(l,a3.z.d)
q=a3.a
o=a3.z.d
q.a4(q.cW,q.b5,o)
o=a3.a
q=a3.z.f
o=o.b4
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.b6
C.b.G(q.a,q.d,h)
break
case C.f:a3.P(l,a3.z.e)
q=a3.a
o=a3.z.e
q.a0(q.cX,q.b5,o)
o=a3.a
q=a3.z.f
o=o.b4
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.b6
C.b.G(q.a,q.d,h)
break}if(s.z>0){k=a3.dx.e.length
q=a3.a.d7
C.b.U(q.a,q.d,k)
q=a5.db
g=q.gT(q)
for(q=a3.dx.e,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.C)(q),++e){d=q[e]
n=a3.a.bP
if(f>=n.length)return H.i(n,f)
c=n[f]
n=g.c3(d.a)
h=n.a
b=n.b
a=n.c
a=n.B(0,Math.sqrt(h*h+b*b+a*a))
b=c.b
h=a.a
n=a.b
a=a.c
C.b.p(b.a,b.d,h,n,a)
a=d.c
n=c.c
C.b.p(n.a,n.d,a.a,a.b,a.c);++f}}if(s.Q>0){k=a3.dx.f.length
q=a3.a.d8
C.b.U(q.a,q.d,k)
q=a5.db
g=q.gT(q)
for(q=a3.dx.f,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.C)(q),++e){d=q[e]
n=a3.a.bQ
if(f>=n.length)return H.i(n,f)
c=n[f]
n=d.gaN(d)
h=c.b
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=g.aP(d.gaN(d))
h=c.c
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gac(d)
h=c.d
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gbF()
h=c.e
C.b.G(h.a,h.d,n)
n=d.gbG()
h=c.f
C.b.G(h.a,h.d,n)
n=d.gbH()
h=c.r
C.b.G(h.a,h.d,n);++f}}if(s.ch>0){k=a3.dx.r.length
q=a3.a.d9
C.b.U(q.a,q.d,k)
q=a5.db
g=q.gT(q)
for(q=a3.dx.r,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.C)(q),++e){d=q[e]
n=a3.a.bR
if(f>=n.length)return H.i(n,f)
c=n[f]
n=d.gaN(d)
h=c.b
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gbO(d).iA()
h=c.c
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=g.aP(d.gaN(d))
h=c.d
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gac(d)
h=c.e
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.giz()
h=c.f
C.b.G(h.a,h.d,n)
n=d.giy()
h=c.r
C.b.G(h.a,h.d,n)
n=d.gbF()
h=c.x
C.b.G(h.a,h.d,n)
n=d.gbG()
h=c.y
C.b.G(h.a,h.d,n)
n=d.gbH()
h=c.z
C.b.G(h.a,h.d,n);++f}}if(s.cx>0){k=a3.dx.x.length
q=a3.a.da
C.b.U(q.a,q.d,k)
q=a5.db
g=q.gT(q)
for(q=a3.dx.x,o=q.length,n=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.C)(q),++e){d=q[e]
h=a3.a.bS
if(f>=h.length)return H.i(h,f)
c=h[f]
h=d.gaO()
H.m(l,"$ib",n,"$ab")
if(!C.a.R(l,h)){h.saI(0,l.length)
C.a.h(l,h)}h=d.gbO(d)
b=c.d
C.b.p(b.a,b.d,h.a,h.b,h.c)
h=d.giv()
b=c.b
C.b.p(b.a,b.d,h.a,h.b,h.c)
h=d.gim(d)
b=c.c
C.b.p(b.a,b.d,h.a,h.b,h.c)
h=g.c3(d.gbO(d))
b=h.a
a=h.b
a0=h.c
a0=h.B(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
h=a0.b
a0=a0.c
C.b.p(a.a,a.d,b,h,a0)
a0=d.gac(d)
h=c.f
C.b.p(h.a,h.d,a0.a,a0.b,a0.c)
a0=d.gaO()
h=a0.gaJ(a0)
if(!h){h=c.x
C.b.U(h.a,h.d,1)}else{h=c.r
b=a0.gaJ(a0)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,a0.gaI(a0))
h=c.x
C.b.U(h.a,h.d,0)}++f}}if(s.cy>0){k=a3.dx.y.length
q=a3.a.dc
C.b.U(q.a,q.d,k)
q=a5.db
g=q.gT(q)
for(q=a3.dx.y,o=q.length,n=[P.y],h=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.C)(q),++e){d=q[e]
b=a3.a.bT
if(f>=b.length)return H.i(b,f)
c=b[f]
b=d.gaO()
H.m(l,"$ib",h,"$ab")
if(!C.a.R(l,b)){b.saI(0,l.length)
C.a.h(l,b)}a1=g.L(0,d.gT(d))
b=d.gT(d)
a=$.cn
b=b.aP(a==null?$.cn=new V.a6(0,0,0):a)
a=c.b
C.b.p(a.a,a.d,b.a,b.b,b.c)
b=$.cn
b=a1.aP(b==null?$.cn=new V.a6(0,0,0):b)
a=c.c
C.b.p(a.a,a.d,b.a,b.b,b.c)
b=a1.df(0)
a=c.d
i=new Float32Array(H.cQ(H.m(new V.dl(b.a,b.b,b.c,b.e,b.f,b.r,b.y,b.z,b.Q).a3(0,!0),"$ib",n,"$ab")))
C.b.dI(a.a,a.d,!1,i)
a=d.gac(d)
b=c.e
C.b.p(b.a,b.d,a.a,a.b,a.c)
a=d.gaO()
b=a.gaJ(a)
if(!b){b=c.r
C.b.U(b.a,b.d,1)}else{b=c.f
a0=a.gaJ(a)
a2=b.a
b=b.d
if(!a0)a2.uniform1i(b,0)
else a2.uniform1i(b,a.gaI(a))
b=c.r
C.b.U(b.a,b.d,0)}b=d.gbF()
a=c.x
C.b.G(a.a,a.d,b)
b=d.gbG()
a=c.y
C.b.G(a.a,a.d,b)
b=d.gbH()
a=c.z
C.b.G(a.a,a.d,b);++f}}if(s.db>0){k=a3.dx.z.length
q=a3.a.dd
C.b.U(q.a,q.d,k)
q=a5.db
g=q.gT(q)
for(q=a3.dx.z,o=q.length,a4=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.C)(q),++e){d=q[e]
n=a3.a.bU
if(f>=n.length)return H.i(n,f)
c=n[f]
n=d.gaO()
H.m(l,"$ib",a4,"$ab")
if(!C.a.R(l,n)){n.saI(0,l.length)
C.a.h(l,n)}n=d.gaN(d)
h=c.b
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gbO(d)
h=c.c
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.giv()
h=c.d
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gim(d)
h=c.e
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=g.aP(d.gaN(d))
h=c.f
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gaO()
h=n.gaJ(n)
if(!h){n=c.x
C.b.U(n.a,n.d,1)}else{h=c.r
b=n.gaJ(n)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,n.gaI(n))
n=c.x
C.b.U(n.a,n.d,0)}n=d.gac(d)
h=c.y
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.giC()
h=c.z
C.b.G(h.a,h.d,n)
n=d.giD()
h=c.Q
C.b.G(h.a,h.d,n)
n=d.gbF()
h=c.ch
C.b.G(h.a,h.d,n)
n=d.gbG()
h=c.cx
C.b.G(h.a,h.d,n)
n=d.gbH()
h=c.cy
C.b.G(h.a,h.d,n);++f}}}switch(s.f){case C.c:break
case C.h:break
case C.e:a3.P(l,a3.Q.d)
a4=a3.a
q=a3.Q.d
a4.a4(a4.cY,a4.b7,q)
break
case C.f:a3.P(l,a3.Q.e)
a4=a3.a
q=a3.Q.e
a4.a0(a4.cZ,a4.b7,q)
break}if(s.fr){a4=a3.a
q=a5.Q
if(q==null){q=a5.db
q=a5.Q=q.gT(q).df(0)}a4=a4.id
a4.toString
a4.a7(q.a3(0,!0))}if(s.dy){a3.P(l,a3.ch)
a4=a3.a
q=a3.ch
a4.a0(a4.d_,a4.d0,q)
switch(s.r){case C.c:break
case C.h:a4=a3.a
q=a3.cx.f
a4=a4.b8
a4.toString
o=q.a
n=q.b
q=q.c
C.b.p(a4.a,a4.d,o,n,q)
break
case C.e:a3.P(l,a3.cx.d)
a4=a3.a
q=a3.cx.d
a4.a4(a4.d1,a4.b9,q)
q=a3.a
a4=a3.cx.f
q=q.b8
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.p(q.a,q.d,o,n,a4)
break
case C.f:a3.P(l,a3.cx.e)
a4=a3.a
q=a3.cx.e
a4.a0(a4.d2,a4.b9,q)
q=a3.a
a4=a3.cx.f
q=q.b8
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.p(q.a,q.d,o,n,a4)
break}switch(s.x){case C.c:break
case C.h:a4=a3.a
q=a3.cy.f
a4=a4.bb
a4.toString
o=q.a
n=q.b
q=q.c
C.b.p(a4.a,a4.d,o,n,q)
q=a3.a
n=a3.cy.ch
q=q.ba
C.b.G(q.a,q.d,n)
break
case C.e:a3.P(l,a3.cy.d)
a4=a3.a
q=a3.cy.d
a4.a4(a4.d3,a4.bc,q)
q=a3.a
a4=a3.cy.f
q=q.bb
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.p(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.ba
C.b.G(a4.a,a4.d,n)
break
case C.f:a3.P(l,a3.cy.e)
a4=a3.a
q=a3.cy.e
a4.a0(a4.d4,a4.bc,q)
q=a3.a
a4=a3.cy.f
q=q.bb
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.p(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.ba
C.b.G(a4.a,a4.d,n)
break}}a4=s.y
q=a4!==C.c
if(q){switch(a4){case C.c:break
case C.h:a4=a3.a
o=a3.db.f
a4=a4.bd
C.b.G(a4.a,a4.d,o)
break
case C.e:a3.P(l,a3.db.d)
a4=a3.a
o=a3.db.d
a4.a4(a4.d5,a4.be,o)
o=a3.a
a4=a3.db.f
o=o.bd
C.b.G(o.a,o.d,a4)
break
case C.f:a3.P(l,a3.db.e)
a4=a3.a
o=a3.db.e
a4.a0(a4.d6,a4.be,o)
o=a3.a
a4=a3.db.f
o=o.bd
C.b.G(o.a,o.d,a4)
break}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].aY(a5)
a4=a6.e
a4.aY(a5)
a4.aC(a5)
a4.dH(a5)
if(q)p.disable(3042)
for(j=0;j<l.length;++j)l[j].dH(a5)
a4=a3.a
a4.toString
p.useProgram(null)
a4.x.hL()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cn().a5},
ses:function(a){this.e=H.m(a,"$ia1",[V.ab],"$aa1")}}
O.fP.prototype={}
O.dk.prototype={
av:function(){}}
O.fQ.prototype={}
O.aP.prototype={
cF:function(a){var u,t,s=this
if(!J.a0(s.f,a)){u=s.f
s.f=a
t=new D.W(s.b+".color",u,a,[V.a_])
t.b=!0
s.a.a_(t)}},
av:function(){this.dX()
this.cF(new V.a_(1,1,1))},
sac:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.h
t.av()
u=t.a
u.a=null
u.a_(null)}t.cF(b)}}
O.fS.prototype={
fS:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.Q().a)){u.ch=a
t=new D.W(u.b+".refraction",t,a,[P.y])
t.b=!0
u.a.a_(t)}},
av:function(){this.bn()
this.fS(1)}}
O.fT.prototype={
bC:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.Q().a)){u.ch=a
t=new D.W(u.b+".shininess",t,a,[P.y])
t.b=!0
u.a.a_(t)}},
av:function(){this.bn()
this.bC(100)}}
O.bT.prototype={}
T.dF.prototype={}
V.b2.prototype={
ak:function(a,b){return!0},
i:function(a){return"all"},
$ial:1}
V.al.prototype={}
V.di.prototype={
ak:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].ak(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sX:function(a){this.a=H.m(a,"$ib",[V.al],"$ab")},
$ial:1}
V.ah.prototype={
ak:function(a,b){return!this.dW(0,b)},
i:function(a){return"!["+this.c8(0)+"]"}}
V.hh.prototype={
ak:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.jE(this.a),t=H.jE(this.b)
return u+".."+t},
$ial:1}
V.hq.prototype={
e1:function(a){var u,t
if(a.a.length<=0)throw H.e(P.t("May not create a SetMatcher with zero characters."))
u=new H.aN([P.B,P.N])
for(t=new H.ch(a,a.gl(a),[H.ak(a,"w",0)]);t.u();)u.S(0,t.d,!0)
this.sfR(u)},
ak:function(a,b){return this.a.cQ(0,b)},
i:function(a){var u=this.a
return P.jH(new H.df(u,[H.x(u,0)]))},
sfR:function(a){this.a=H.m(a,"$iM",[P.B,P.N],"$aM")},
$ial:1}
V.cr.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cv(this.a.k(0,b))
r.sX(H.c([],[V.al]))
r.c=!1
C.a.h(this.c,r)
return r},
hP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.ak(0,a))return r}return},
i:function(a){return this.b},
sh4:function(a){this.c=H.m(a,"$ib",[V.cv],"$ab")}}
V.dK.prototype={
i:function(a){var u=H.k0(this.b,"\n","\\n"),t=H.k0(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cu.prototype={
an:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.S(0,s,b)}},
i:function(a){return this.b},
sfL:function(a){var u=P.f
this.c=H.m(a,"$iM",[u,u],"$aM")}}
V.hR.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cr(this,b)
u.sh4(H.c([],[V.cv]))
u.d=null
this.a.S(0,b,u)}return u},
F:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cu(a)
u=P.f
t.sfL(new H.aN([u,u]))
this.b.S(0,a,t)}return t},
dF:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dK]),l=this.c,k=[P.B],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.j.as(a,s)
q=l.hP(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jH(j)
throw H.e(P.t("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jH(j)
o=l.d
n=o.c.j(0,p)
t=new V.dK(n==null?o.b:n,p,s)}++s}}},
sh1:function(a){this.a=H.m(a,"$iM",[P.f,V.cr],"$aM")},
sh3:function(a){this.b=H.m(a,"$iM",[P.f,V.cu],"$aM")}}
V.cv.prototype={
i:function(a){return this.b.b+": "+this.c8(0)}}
X.d2.prototype={$ib9:1}
X.fq.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.ax():u}}
X.ds.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.ax():u},
ar:function(a){var u
H.n(a,"$iE")
u=this.f
if(u!=null)u.V(a)},
el:function(){return this.ar(null)},
saK:function(a){var u,t,s=this
if(!J.a0(s.b,a)){u=s.b
if(u!=null)u.gA().O(0,s.gcd())
t=s.b
s.b=a
if(a!=null)a.gA().h(0,s.gcd())
u=new D.W("mover",t,s.b,[U.bL])
u.b=!0
s.ar(u)}},
$ib9:1,
$id2:1}
X.dE.prototype={}
V.bn.prototype={
aT:function(a){this.b=new P.fu(C.L)
this.c=null
this.sbu(H.c([],[[P.b,W.ar]]))},
C:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.ar]))
u=a.split("\n")
for(l=u.length,t=[W.ar],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.D(q)
o=m.b.ey(q,0,q.length)
n=o==null?q:o
C.J.dR(p,H.k0(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gbf(m.d),p)}},
dq:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.f],"$ab")
q.sbu(H.c([],[[P.b,W.ar]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.aZ():t).dF(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)q.bg(t[r])},
sbu:function(a){this.d=H.m(a,"$ib",[[P.b,W.ar]],"$ab")}}
V.jq.prototype={
$1:function(a){var u
H.n(a,"$iaX")
u=C.d.dE(this.a.ghS(),2)
if(u!=="0.00")P.k_(u+" fps")},
$S:38}
V.f4.prototype={
bg:function(a){var u=this
switch(a.a){case"Class":u.C(a.b,"#551")
break
case"Comment":u.C(a.b,"#777")
break
case"Id":u.C(a.b,"#111")
break
case"Num":u.C(a.b,"#191")
break
case"Reserved":u.C(a.b,"#119")
break
case"String":u.C(a.b,"#171")
break
case"Symbol":u.C(a.b,"#616")
break
case"Type":u.C(a.b,"#B11")
break
case"Whitespace":u.C(a.b,"#111")
break}},
aZ:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.hS()
a1.c=a1.k(0,r)
u=a1.k(0,r).m(0,q)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.U("a","z")
C.a.h(u.a,t)
t=V.U("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).m(0,q)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.U("0","9")
C.a.h(t.a,u)
u=V.U("a","z")
C.a.h(t.a,u)
u=V.U("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).m(0,p)
t=V.U("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).m(0,p)
u=V.U("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).m(0,o)
t=V.u(new H.q("."))
C.a.h(u.a,t)
t=a1.k(0,o).m(0,n)
u=V.U("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).m(0,n)
t=V.U("0","9")
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
C.a.h(a1.k(0,k).m(0,k).a,new V.b2())
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
C.a.h(a1.k(0,h).m(0,h).a,new V.b2())
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
t=new V.ah()
s=[V.al]
t.sX(H.c([],s))
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
t=new V.ah()
t.sX(H.c([],s))
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
u=[P.f]
t.an(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.an(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.an(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fr.prototype={
bg:function(a){var u=this
switch(a.a){case"Builtin":u.C(a.b,"#411")
break
case"Comment":u.C(a.b,"#777")
break
case"Id":u.C(a.b,"#111")
break
case"Num":u.C(a.b,"#191")
break
case"Preprocess":u.C(a.b,"#737")
break
case"Reserved":u.C(a.b,"#119")
break
case"Symbol":u.C(a.b,"#611")
break
case"Type":u.C(a.b,"#171")
break
case"Whitespace":u.C(a.b,"#111")
break}},
aZ:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.hS()
e.c=e.k(0,r)
u=e.k(0,r).m(0,q)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.U("a","z")
C.a.h(u.a,t)
t=V.U("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).m(0,q)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.U("0","9")
C.a.h(t.a,u)
u=V.U("a","z")
C.a.h(t.a,u)
u=V.U("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).m(0,p)
t=V.U("0","9")
C.a.h(u.a,t)
t=e.k(0,p).m(0,p)
u=V.U("0","9")
C.a.h(t.a,u)
u=e.k(0,p).m(0,o)
t=V.u(new H.q("."))
C.a.h(u.a,t)
t=e.k(0,o).m(0,n)
u=V.U("0","9")
C.a.h(t.a,u)
u=e.k(0,n).m(0,n)
t=V.U("0","9")
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
C.a.h(e.k(0,k).m(0,m).a,new V.b2())
t=e.k(0,j).m(0,i)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,j).m(0,j)
t=new V.ah()
s=[V.al]
t.sX(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,h)
t=V.u(new H.q("#"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,h)
u=new V.ah()
u.sX(H.c([],s))
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
t=[P.f]
u.an(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.an(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.an(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fs.prototype={
bg:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.C(a.b,"#911")
u.C("=",t)
break
case"Id":u.C(a.b,t)
break
case"Other":u.C(a.b,t)
break
case"Reserved":u.C(a.b,"#119")
break
case"String":u.C(a.b,"#171")
break
case"Symbol":u.C(a.b,"#616")
break}},
aZ:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.hS()
l.c=l.k(0,s)
u=l.k(0,s).m(0,r)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.U("a","z")
C.a.h(u.a,t)
t=V.U("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).m(0,r)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.U("0","9")
C.a.h(t.a,u)
u=V.U("a","z")
C.a.h(t.a,u)
u=V.U("A","Z")
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
C.a.h(l.k(0,o).m(0,o).a,new V.b2())
C.a.h(l.k(0,s).m(0,m).a,new V.b2())
u=l.k(0,m).m(0,m)
t=new V.ah()
t.sX(H.c([],[V.al]))
C.a.h(u.a,t)
u=V.u(new H.q('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.U("a","z")
C.a.h(t.a,u)
u=V.U("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.F("Symbol")
u=l.k(0,n)
u.d=u.a.F("String")
u=l.k(0,r)
t=u.a.F(r)
u.d=t
t.an(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.k(0,q)
t.d=t.a.F(q)
t=l.k(0,m)
t.d=t.a.F(m)
return l}}
V.he.prototype={
dq:function(a,b){H.m(b,"$ib",[P.f],"$ab")
this.sbu(H.c([],[[P.b,W.ar]]))
this.C(C.a.m(b,"\n"),"#111")},
bg:function(a){},
aZ:function(){return}}
V.hu.prototype={
e3:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a7(q,"scroll",H.l(new V.hw(o),{func:1,ret:-1,args:[r]}),!1,r)},
cL:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.f],"$ab")
this.fX()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dF(C.a.hW(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
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
if(H.mS(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.i(m,1)
l.href=H.D(m[1])
l.textContent=H.D(m[0])
t.appendChild(l)}else{k=P.kO(C.v,n,C.l,!1)
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
dM:function(a){var u,t,s,r=new V.f4("dart")
r.aT("dart")
u=new V.fr("glsl")
u.aT("glsl")
t=new V.fs("html")
t.aT("html")
s=C.a.hR(H.c([r,u,t],[V.bn]),new V.hx(a))
if(s!=null)return s
r=new V.he("plain")
r.aT("plain")
return r},
cJ:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.f],"$ab")
u=H.c([],[P.B])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.jV(r).bl(r,"+")){C.a.S(b0,s,C.j.aR(r,1))
C.a.h(u,1)
t=!0}else if(C.j.bl(r,"-")){C.a.S(b0,s,C.j.aR(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dM(a8)
q.dq(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.kO(C.v,a7,C.l,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.k6()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.C)(r),++a0)C.S.hA(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.C)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gN(r);a3.u();)c.appendChild(a3.gD(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
fX:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.hS()
u.c=u.k(0,q)
t=u.k(0,q).m(0,p)
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).m(0,p)
s=new V.ah()
r=[V.al]
s.sX(H.c([],r))
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
s=new V.ah()
s.sX(H.c([],r))
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
s=new V.ah()
s.sX(H.c([],r))
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
t=new V.ah()
t.sX(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,k).m(0,j)
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).m(0,k)
t=new V.ah()
t.sX(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).m(0,i).a,new V.b2())
s=u.k(0,i).m(0,i)
t=new V.ah()
t.sX(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("*_`["))
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
V.hw.prototype={
$1:function(a){P.ky(C.m,new V.hv(this.a))},
$S:39}
V.hv.prototype={
$0:function(){var u=C.d.a6(document.documentElement.scrollTop),t=this.a.style,s=H.k(-0.01*u)+"px"
t.top=s},
$S:1}
V.hx.prototype={
$1:function(a){return H.n(a,"$ibn").a===this.a},
$S:40}
X.jn.prototype={
$1:function(a){var u,t,s,r
H.n(a,"$iE")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.cJ("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cJ("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a.prototype
u.dT=u.i
u=J.dc.prototype
u.dV=u.i
u=P.h.prototype
u.dU=u.bi
u=W.P.prototype
u.bm=u.a1
u=W.ek.prototype
u.dY=u.ab
u=O.dk.prototype
u.dX=u.av
u=O.aP.prototype
u.bn=u.av
u=V.di.prototype
u.dW=u.ak
u.c8=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mp","m7",8)
u(P,"mq","m8",8)
u(P,"mr","m9",8)
t(P,"kX","mn",2)
s(W,"mC",4,null,["$4"],["mb"],17,0)
s(W,"mD",4,null,["$4"],["mc"],17,0)
var m
r(m=E.ag.prototype,"gdm",0,0,null,["$1","$0"],["dn","i6"],0,0)
r(m,"gdk",0,0,null,["$1","$0"],["dl","i5"],0,0)
r(m,"gdi",0,0,null,["$1","$0"],["dj","i2"],0,0)
q(m,"gi0","i1",5)
q(m,"gi3","i4",5)
r(m=E.dJ.prototype,"gca",0,0,null,["$1","$0"],["cc","cb"],0,0)
p(m,"gil","dw",2)
o(m=X.dP.prototype,"gf8","f9",9)
o(m,"geX","eY",9)
o(m,"gf2","f3",3)
o(m,"gfc","fd",11)
o(m,"gfa","fb",11)
o(m,"gfg","fh",3)
o(m,"gfk","fl",3)
o(m,"gf6","f7",3)
o(m,"gfi","fj",3)
o(m,"gf4","f5",3)
o(m,"gfm","fn",34)
o(m,"gfo","fp",9)
o(m,"gfC","fD",10)
o(m,"gfw","fz",10)
o(m,"gfA","fB",10)
r(D.bq.prototype,"ge6",0,0,null,["$1","$0"],["ae","e7"],0,0)
r(m=D.de.prototype,"gcw",0,0,null,["$1","$0"],["cz","fe"],0,0)
o(m,"gfs","ft",35)
q(m,"geR","eS",19)
q(m,"gfu","fv",19)
n(V.aD.prototype,"gl","bW",20)
n(V.S.prototype,"gl","bW",20)
r(m=M.d7.prototype,"ga8",0,0,null,["$1","$0"],["af","e9"],0,0)
q(m,"geZ","f_",5)
q(m,"gf0","f1",5)
r(m=O.dj.prototype,"geh",0,0,null,["$1","$0"],["a_","ei"],0,0)
r(m,"gfN",0,0,null,["$1","$0"],["cD","fO"],0,0)
q(m,"geT","eU",22)
q(m,"geV","eW",22)
r(X.ds.prototype,"gcd",0,0,null,["$1","$0"],["ar","el"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.jB,J.a,J.aq,P.e7,P.h,H.ch,P.aM,H.bI,H.dO,H.hX,P.br,H.c7,H.ep,P.a4,H.fF,H.fG,H.fA,P.ev,P.b1,P.av,P.dR,P.hF,P.cs,P.hG,P.aX,P.aa,P.ja,P.iZ,P.bU,P.e6,P.w,P.c8,P.fv,P.j8,P.N,P.bp,P.a8,P.aJ,P.hc,P.dC,P.dZ,P.fp,P.bs,P.b,P.M,P.K,P.ai,P.f,P.bb,W.f0,W.bx,W.z,W.dq,W.ek,W.j3,W.d9,W.am,W.iY,W.eA,P.iT,O.a1,O.ci,E.eV,E.ag,E.hi,E.dJ,Z.dQ,Z.it,Z.d0,Z.ce,Z.b_,D.eY,D.bH,D.E,X.d1,X.dd,X.fC,X.fI,X.cj,X.h_,X.hT,X.dP,D.bq,D.a2,D.dt,D.dB,D.dG,D.dH,D.dI,V.a_,V.b3,V.fe,V.dl,V.ab,V.ac,V.a6,V.dx,V.aD,V.S,M.d7,A.cX,A.eQ,A.fR,A.cw,A.cA,A.cy,A.cB,A.cz,A.cC,A.bG,A.dL,A.i6,F.a3,F.fi,F.bu,F.fE,F.bM,F.dA,F.hr,F.hs,F.ht,F.at,F.ig,F.ih,F.ik,F.im,F.io,F.ip,O.bT,O.dk,V.b2,V.al,V.di,V.hh,V.hq,V.cr,V.dK,V.cu,V.hR,X.d2,X.dE,X.ds,V.bn,V.hu])
s(J.a,[J.fy,J.db,J.dc,J.ay,J.bt,J.b5,H.cl,W.d,W.eN,W.cY,W.aH,W.aI,W.R,W.dT,W.f5,W.f6,W.dV,W.d6,W.dX,W.f8,W.o,W.e_,W.aL,W.ft,W.e2,W.dh,W.fU,W.e8,W.e9,W.aQ,W.ea,W.ed,W.aR,W.eh,W.ej,W.aU,W.el,W.aV,W.eq,W.az,W.et,W.hQ,W.aY,W.ew,W.hV,W.ib,W.eB,W.eD,W.eF,W.eH,W.eJ,P.b7,P.e4,P.ba,P.ef,P.hg,P.er,P.bc,P.ey,P.eR,P.dS,P.cZ,P.dv,P.bQ,P.dz,P.dM,P.en])
s(J.dc,[J.hd,J.bw,J.b6])
t(J.jA,J.ay)
s(J.bt,[J.da,J.fz])
t(P.fH,P.e7)
s(P.fH,[H.dN,W.iB,W.af,P.fl])
t(H.q,H.dN)
s(P.h,[H.fb,H.fL,H.cE])
s(H.fb,[H.bK,H.df])
s(P.aM,[H.fM,H.iu])
t(H.fN,H.bK)
s(P.br,[H.h9,H.fB,H.i9,H.hZ,H.eX,H.ho,P.eP,P.dr,P.aF,P.ia,P.i8,P.bR,P.eZ,P.f3])
s(H.c7,[H.js,H.hM,H.jj,H.jk,H.jl,P.ix,P.iw,P.iy,P.iz,P.j7,P.j6,P.iH,P.iL,P.iI,P.iJ,P.iK,P.iO,P.iP,P.iN,P.iM,P.hH,P.hI,P.jc,P.iW,P.iV,P.iX,P.fK,P.f9,P.fa,W.fc,W.fW,W.fY,W.hn,W.hE,W.iG,W.h7,W.h6,W.j_,W.j0,W.j5,W.j9,P.je,P.fm,P.fn,P.eT,E.hj,E.hk,E.hl,E.hP,D.ff,D.fg,F.jr,F.jf,F.ir,F.iq,F.ii,F.ij,V.jq,V.hw,V.hv,V.hx,X.jn])
s(H.hM,[H.hC,H.c5])
t(H.iv,P.eP)
t(P.fJ,P.a4)
s(P.fJ,[H.aN,W.iA])
t(H.dm,H.cl)
s(H.dm,[H.cI,H.cK])
t(H.cJ,H.cI)
t(H.ck,H.cJ)
t(H.cL,H.cK)
t(H.dn,H.cL)
s(H.dn,[H.h0,H.h1,H.h2,H.h3,H.h4,H.dp,H.h5])
t(P.iU,P.ja)
t(P.iS,P.iZ)
t(P.c9,P.hG)
t(P.fd,P.c8)
s(P.c9,[P.fu,P.id])
t(P.ic,P.fd)
s(P.a8,[P.y,P.B])
s(P.aF,[P.bP,P.fw])
s(W.d,[W.A,W.fk,W.aT,W.cM,W.aW,W.aA,W.cO,W.is,W.cF,P.eU,P.bE])
s(W.A,[W.P,W.bm,W.cG])
s(W.P,[W.r,P.p])
s(W.r,[W.cW,W.eO,W.c4,W.bl,W.bF,W.ar,W.fo,W.hp,W.bS,W.dD,W.hK,W.hL,W.ct])
s(W.aH,[W.ca,W.f1,W.f2])
t(W.f_,W.aI)
t(W.cb,W.dT)
t(W.dW,W.dV)
t(W.d5,W.dW)
t(W.dY,W.dX)
t(W.f7,W.dY)
t(W.aK,W.cY)
t(W.e0,W.e_)
t(W.fj,W.e0)
t(W.e3,W.e2)
t(W.bJ,W.e3)
t(W.bv,W.o)
s(W.bv,[W.aO,W.a5,W.aB])
t(W.fV,W.e8)
t(W.fX,W.e9)
t(W.eb,W.ea)
t(W.fZ,W.eb)
t(W.ee,W.ed)
t(W.cm,W.ee)
t(W.ei,W.eh)
t(W.hf,W.ei)
t(W.hm,W.ej)
t(W.cN,W.cM)
t(W.hz,W.cN)
t(W.em,W.el)
t(W.hA,W.em)
t(W.hD,W.eq)
t(W.eu,W.et)
t(W.hN,W.eu)
t(W.cP,W.cO)
t(W.hO,W.cP)
t(W.ex,W.ew)
t(W.hU,W.ex)
t(W.b0,W.a5)
t(W.eC,W.eB)
t(W.iC,W.eC)
t(W.dU,W.d6)
t(W.eE,W.eD)
t(W.iQ,W.eE)
t(W.eG,W.eF)
t(W.ec,W.eG)
t(W.eI,W.eH)
t(W.j1,W.eI)
t(W.eK,W.eJ)
t(W.j2,W.eK)
t(W.iD,W.iA)
t(W.iE,P.hF)
t(W.jK,W.iE)
t(W.iF,P.cs)
t(W.j4,W.ek)
t(P.as,P.iT)
t(P.e5,P.e4)
t(P.fD,P.e5)
t(P.eg,P.ef)
t(P.ha,P.eg)
t(P.cp,P.p)
t(P.es,P.er)
t(P.hJ,P.es)
t(P.ez,P.ey)
t(P.hW,P.ez)
t(P.eS,P.dS)
t(P.hb,P.bE)
t(P.eo,P.en)
t(P.hB,P.eo)
s(E.eV,[Z.d_,A.cq,T.dF])
s(D.E,[D.cf,D.cg,D.W])
t(D.de,O.a1)
t(U.bL,D.eY)
s(U.bL,[U.d3,U.dy])
t(A.fO,A.cq)
s(A.dL,[A.I,A.i2,A.i3,A.i5,A.i0,A.Z,A.i1,A.H,A.i4,A.i7,A.cx,A.an,A.ad,A.ae])
t(F.hy,F.fi)
t(F.i_,F.fE)
t(F.il,F.im)
t(F.h8,F.io)
t(O.dj,O.bT)
s(O.dk,[O.fP,O.fQ,O.aP])
s(O.aP,[O.fS,O.fT])
s(V.di,[V.ah,V.cv])
t(X.fq,X.dE)
s(V.bn,[V.f4,V.fr,V.fs,V.he])
u(H.dN,H.dO)
u(H.cI,P.w)
u(H.cJ,H.bI)
u(H.cK,P.w)
u(H.cL,H.bI)
u(P.e7,P.w)
u(W.dT,W.f0)
u(W.dV,P.w)
u(W.dW,W.z)
u(W.dX,P.w)
u(W.dY,W.z)
u(W.e_,P.w)
u(W.e0,W.z)
u(W.e2,P.w)
u(W.e3,W.z)
u(W.e8,P.a4)
u(W.e9,P.a4)
u(W.ea,P.w)
u(W.eb,W.z)
u(W.ed,P.w)
u(W.ee,W.z)
u(W.eh,P.w)
u(W.ei,W.z)
u(W.ej,P.a4)
u(W.cM,P.w)
u(W.cN,W.z)
u(W.el,P.w)
u(W.em,W.z)
u(W.eq,P.a4)
u(W.et,P.w)
u(W.eu,W.z)
u(W.cO,P.w)
u(W.cP,W.z)
u(W.ew,P.w)
u(W.ex,W.z)
u(W.eB,P.w)
u(W.eC,W.z)
u(W.eD,P.w)
u(W.eE,W.z)
u(W.eF,P.w)
u(W.eG,W.z)
u(W.eH,P.w)
u(W.eI,W.z)
u(W.eJ,P.w)
u(W.eK,W.z)
u(P.e4,P.w)
u(P.e5,W.z)
u(P.ef,P.w)
u(P.eg,W.z)
u(P.er,P.w)
u(P.es,W.z)
u(P.ey,P.w)
u(P.ez,W.z)
u(P.dS,P.a4)
u(P.en,P.w)
u(P.eo,W.z)})();(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bl.prototype
C.I=W.bF.prototype
C.J=W.ar.prototype
C.M=J.a.prototype
C.a=J.ay.prototype
C.i=J.da.prototype
C.n=J.db.prototype
C.d=J.bt.prototype
C.j=J.b5.prototype
C.N=J.b6.prototype
C.R=W.cm.prototype
C.w=J.hd.prototype
C.b=P.bQ.prototype
C.S=W.bS.prototype
C.x=W.dD.prototype
C.q=J.bw.prototype
C.y=W.b0.prototype
C.z=W.cF.prototype
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.A=function() {
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
C.F=function(getTagFallback) {
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
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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
C.E=function(hooks) {
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
C.D=function(hooks) {
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

C.G=new P.hc()
C.l=new P.ic()
C.H=new P.id()
C.k=new P.iU()
C.c=new A.bG(0,"ColorSourceType.None")
C.h=new A.bG(1,"ColorSourceType.Solid")
C.e=new A.bG(2,"ColorSourceType.Texture2D")
C.f=new A.bG(3,"ColorSourceType.TextureCube")
C.m=new P.aJ(0)
C.K=new P.aJ(5e6)
C.L=new P.fv("element",!0,!1,!1,!1)
C.O=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.P=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.Q=H.c(u([]),[P.f])
C.v=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.o=H.c(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.p=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])})()
var v={mangledGlobalNames:{B:"int",y:"double",a8:"num",f:"String",N:"bool",K:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.E]},{func:1,ret:P.K},{func:1,ret:-1},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.B,[P.h,E.ag]]},{func:1,ret:P.K,args:[D.E]},{func:1,ret:P.K,args:[F.a3]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aB]},{func:1,ret:-1,args:[W.aO]},{func:1,args:[,]},{func:1,ret:P.N,args:[W.am]},{func:1,ret:P.N,args:[P.f]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.E]}]},{func:1,ret:P.K,args:[,]},{func:1,ret:P.N,args:[W.P,P.f,P.f,W.bx]},{func:1,ret:P.K,args:[,,]},{func:1,ret:-1,args:[P.B,[P.h,D.a2]]},{func:1,ret:P.y},{func:1,ret:P.f,args:[P.B]},{func:1,ret:-1,args:[P.B,[P.h,V.ab]]},{func:1,ret:P.N,args:[W.A]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,args:[W.o]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,ret:W.P,args:[W.A]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,args:[,P.f]},{func:1,args:[P.f]},{func:1,ret:P.K,args:[P.a8]},{func:1,ret:[P.av,,],args:[,]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:P.N,args:[[P.h,D.a2]]},{func:1,ret:V.a6,args:[P.y]},{func:1,ret:P.K,args:[F.at,P.y,P.y]},{func:1,ret:P.K,args:[P.aX]},{func:1,ret:P.K,args:[W.o]},{func:1,ret:P.N,args:[V.bn]},{func:1,ret:P.K,args:[,],opt:[P.ai]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aG=0
$.c6=null
$.k7=null
$.jM=!1
$.l_=null
$.kV=null
$.l4=null
$.jg=null
$.jm=null
$.jX=null
$.bV=null
$.cR=null
$.cS=null
$.jN=!1
$.V=C.k
$.aj=[]
$.b4=null
$.jx=null
$.ke=null
$.kd=null
$.e1=P.kg(P.f,P.bs)
$.kl=null
$.kp=null
$.cn=null
$.kt=null
$.kC=null
$.kG=null
$.kE=null
$.kF=null
$.ie=null
$.kD=null
$.ko=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n0","l8",function(){return H.kZ("_$dart_dartClosure")})
u($,"n1","k2",function(){return H.kZ("_$dart_js")})
u($,"n6","l9",function(){return H.aZ(H.hY({
toString:function(){return"$receiver$"}}))})
u($,"n7","la",function(){return H.aZ(H.hY({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"n8","lb",function(){return H.aZ(H.hY(null))})
u($,"n9","lc",function(){return H.aZ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nc","lf",function(){return H.aZ(H.hY(void 0))})
u($,"nd","lg",function(){return H.aZ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nb","le",function(){return H.aZ(H.kA(null))})
u($,"na","ld",function(){return H.aZ(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nf","li",function(){return H.aZ(H.kA(void 0))})
u($,"ne","lh",function(){return H.aZ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nu","k3",function(){return P.m6()})
u($,"nw","ln",function(){return P.lY("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nv","lm",function(){return P.kh(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"nn","ll",function(){return Z.au(0)})
u($,"nh","lj",function(){return Z.au(511)})
u($,"np","bi",function(){return Z.au(1)})
u($,"no","bh",function(){return Z.au(2)})
u($,"nj","bg",function(){return Z.au(4)})
u($,"nq","bj",function(){return Z.au(8)})
u($,"nr","bk",function(){return Z.au(16)})
u($,"nk","cT",function(){return Z.au(32)})
u($,"nl","cU",function(){return Z.au(64)})
u($,"nm","lk",function(){return Z.au(96)})
u($,"ns","c3",function(){return Z.au(128)})
u($,"ni","bf",function(){return Z.au(256)})
u($,"n_","l7",function(){return new V.fe(1e-9)})
u($,"mZ","Q",function(){return $.l7()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cl,ArrayBufferView:H.cl,Float32Array:H.ck,Float64Array:H.ck,Int16Array:H.h0,Int32Array:H.h1,Int8Array:H.h2,Uint16Array:H.h3,Uint32Array:H.h4,Uint8ClampedArray:H.dp,CanvasPixelArray:H.dp,Uint8Array:H.h5,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLImageElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.eN,HTMLAnchorElement:W.cW,HTMLAreaElement:W.eO,HTMLBaseElement:W.c4,Blob:W.cY,HTMLBodyElement:W.bl,HTMLCanvasElement:W.bF,CDATASection:W.bm,CharacterData:W.bm,Comment:W.bm,ProcessingInstruction:W.bm,Text:W.bm,CSSNumericValue:W.ca,CSSUnitValue:W.ca,CSSPerspective:W.f_,CSSCharsetRule:W.R,CSSConditionRule:W.R,CSSFontFaceRule:W.R,CSSGroupingRule:W.R,CSSImportRule:W.R,CSSKeyframeRule:W.R,MozCSSKeyframeRule:W.R,WebKitCSSKeyframeRule:W.R,CSSKeyframesRule:W.R,MozCSSKeyframesRule:W.R,WebKitCSSKeyframesRule:W.R,CSSMediaRule:W.R,CSSNamespaceRule:W.R,CSSPageRule:W.R,CSSRule:W.R,CSSStyleRule:W.R,CSSSupportsRule:W.R,CSSViewportRule:W.R,CSSStyleDeclaration:W.cb,MSStyleCSSProperties:W.cb,CSS2Properties:W.cb,CSSImageValue:W.aH,CSSKeywordValue:W.aH,CSSPositionValue:W.aH,CSSResourceValue:W.aH,CSSURLImageValue:W.aH,CSSStyleValue:W.aH,CSSMatrixComponent:W.aI,CSSRotation:W.aI,CSSScale:W.aI,CSSSkew:W.aI,CSSTranslation:W.aI,CSSTransformComponent:W.aI,CSSTransformValue:W.f1,CSSUnparsedValue:W.f2,DataTransferItemList:W.f5,HTMLDivElement:W.ar,DOMException:W.f6,ClientRectList:W.d5,DOMRectList:W.d5,DOMRectReadOnly:W.d6,DOMStringList:W.f7,DOMTokenList:W.f8,Element:W.P,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aK,FileList:W.fj,FileWriter:W.fk,HTMLFormElement:W.fo,Gamepad:W.aL,History:W.ft,HTMLCollection:W.bJ,HTMLFormControlsCollection:W.bJ,HTMLOptionsCollection:W.bJ,KeyboardEvent:W.aO,Location:W.dh,MediaList:W.fU,MIDIInputMap:W.fV,MIDIOutputMap:W.fX,MimeType:W.aQ,MimeTypeArray:W.fZ,PointerEvent:W.a5,MouseEvent:W.a5,DragEvent:W.a5,Document:W.A,DocumentFragment:W.A,HTMLDocument:W.A,ShadowRoot:W.A,XMLDocument:W.A,DocumentType:W.A,Node:W.A,NodeList:W.cm,RadioNodeList:W.cm,Plugin:W.aR,PluginArray:W.hf,RTCStatsReport:W.hm,HTMLSelectElement:W.hp,SourceBuffer:W.aT,SourceBufferList:W.hz,SpeechGrammar:W.aU,SpeechGrammarList:W.hA,SpeechRecognitionResult:W.aV,Storage:W.hD,CSSStyleSheet:W.az,StyleSheet:W.az,HTMLTableCellElement:W.bS,HTMLTableDataCellElement:W.bS,HTMLTableHeaderCellElement:W.bS,HTMLTableElement:W.dD,HTMLTableRowElement:W.hK,HTMLTableSectionElement:W.hL,HTMLTemplateElement:W.ct,TextTrack:W.aW,TextTrackCue:W.aA,VTTCue:W.aA,TextTrackCueList:W.hN,TextTrackList:W.hO,TimeRanges:W.hQ,Touch:W.aY,TouchEvent:W.aB,TouchList:W.hU,TrackDefaultList:W.hV,CompositionEvent:W.bv,FocusEvent:W.bv,TextEvent:W.bv,UIEvent:W.bv,URL:W.ib,VideoTrackList:W.is,WheelEvent:W.b0,Window:W.cF,DOMWindow:W.cF,Attr:W.cG,CSSRuleList:W.iC,ClientRect:W.dU,DOMRect:W.dU,GamepadList:W.iQ,NamedNodeMap:W.ec,MozNamedAttrMap:W.ec,SpeechRecognitionResultList:W.j1,StyleSheetList:W.j2,SVGLength:P.b7,SVGLengthList:P.fD,SVGNumber:P.ba,SVGNumberList:P.ha,SVGPointList:P.hg,SVGScriptElement:P.cp,SVGStringList:P.hJ,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bc,SVGTransformList:P.hW,AudioBuffer:P.eR,AudioParamMap:P.eS,AudioTrackList:P.eU,AudioContext:P.bE,webkitAudioContext:P.bE,BaseAudioContext:P.bE,OfflineAudioContext:P.hb,WebGLBuffer:P.cZ,WebGLProgram:P.dv,WebGL2RenderingContext:P.bQ,WebGLShader:P.dz,WebGLUniformLocation:P.dM,SQLResultSetRowList:P.hB})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dm.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.dn.$nativeSuperclassTag="ArrayBufferView"
W.cM.$nativeSuperclassTag="EventTarget"
W.cN.$nativeSuperclassTag="EventTarget"
W.cO.$nativeSuperclassTag="EventTarget"
W.cP.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.l1,[])
else X.l1([])})})()
//# sourceMappingURL=test.dart.js.map
