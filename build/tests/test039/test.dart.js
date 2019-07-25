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
a[c]=function(){a[c]=function(){H.m4(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jj"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jj"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jj(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={j3:function j3(){},
jA:function(){return new P.h8("No element")},
X:function X(a){this.a=a},
eV:function eV(){},
d4:function d4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fn:function fn(a,b,c){this.a=a
this.b=b
this.$ti=c},
fo:function fo(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
i0:function i0(a,b,c){this.a=a
this.b=b
this.$ti=c},
i1:function i1(a,b,c){this.a=a
this.b=b
this.$ti=c},
bu:function bu(){},
dA:function dA(){},
dz:function dz(){},
bK:function(a){var u,t=H.O(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
lN:function(a){return v.types[H.a6(a)]},
lS:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iA},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aj(a)
if(typeof u!=="string")throw H.f(H.bE(a))
return u},
c7:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
by:function(a){return H.l2(a)+H.jg(H.bm(a),0,null)},
l2:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$idy){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bK(t.length>1&&C.j.aN(t,0)===36?C.j.bV(t,1):t)},
jK:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lb:function(a){var u,t,s,r=H.d([],[P.y])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bE(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.h.aQ(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.bE(s))}return H.jK(r)},
jL:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bE(s))
if(s<0)throw H.f(H.bE(s))
if(s>65535)return H.lb(a)}return H.jK(a)},
la:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.aQ(u,10))>>>0,56320|u&1023)}throw H.f(P.aJ(a,0,1114111,null,null))},
bx:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
l9:function(a){var u=H.bx(a).getFullYear()+0
return u},
l7:function(a){var u=H.bx(a).getMonth()+1
return u},
l3:function(a){var u=H.bx(a).getDate()+0
return u},
l4:function(a){var u=H.bx(a).getHours()+0
return u},
l6:function(a){var u=H.bx(a).getMinutes()+0
return u},
l8:function(a){var u=H.bx(a).getSeconds()+0
return u},
l5:function(a){var u=H.bx(a).getMilliseconds()+0
return u},
bn:function(a){throw H.f(H.bE(a))},
e:function(a,b){if(a==null)J.bN(a)
throw H.f(H.cB(a,b))},
cB:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aw(!0,b,s,null)
u=H.a6(J.bN(a))
if(!(b<0)){if(typeof u!=="number")return H.bn(u)
t=b>=u}else t=!0
if(t)return P.Q(b,a,s,null,u)
return P.dh(b,s)},
lI:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bz(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bz(a,c,!0,b,"end",u)
return new P.aw(!0,b,"end",null)},
bE:function(a){return new P.aw(!0,a,null,null)},
lE:function(a){if(typeof a!=="number")throw H.f(H.bE(a))
return a},
f:function(a){var u
if(a==null)a=new P.db()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kq})
u.name=""}else u.toString=H.kq
return u},
kq:function(){return J.aj(this.dartException)},
t:function(a){throw H.f(a)},
z:function(a){throw H.f(P.bT(a))},
aP:function(a){var u,t,s,r,q,p
a=H.ko(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hv(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hw:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jW:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jF:function(a,b){return new H.fJ(a,b==null?null:b.method)},
j4:function(a,b){var u=b==null,t=u?null:b.method
return new H.fc(a,t,u?null:b.receiver)},
bo:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iU(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.h.aQ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.j4(H.k(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jF(H.k(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kt()
q=$.ku()
p=$.kv()
o=$.kw()
n=$.kz()
m=$.kA()
l=$.ky()
$.kx()
k=$.kC()
j=$.kB()
i=r.Y(u)
if(i!=null)return f.$1(H.j4(H.O(u),i))
else{i=q.Y(u)
if(i!=null){i.method="call"
return f.$1(H.j4(H.O(u),i))}else{i=p.Y(u)
if(i==null){i=o.Y(u)
if(i==null){i=n.Y(u)
if(i==null){i=m.Y(u)
if(i==null){i=l.Y(u)
if(i==null){i=o.Y(u)
if(i==null){i=k.Y(u)
if(i==null){i=j.Y(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jF(H.O(u),i))}}return f.$1(new H.hI(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dn()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aw(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dn()
return a},
bI:function(a){var u
if(a==null)return new H.e8(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e8(a)},
lL:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.T(0,a[u],a[t])}return b},
lR:function(a,b,c,d,e,f){H.p(a,"$ij_")
switch(H.a6(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.r("Unsupported number of arguments for wrapped closure"))},
bG:function(a,b){var u
H.a6(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lR)
a.$identity=u
return u},
kP:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.h9().constructor.prototype):Object.create(new H.bO(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ax
if(typeof t!=="number")return t.I()
$.ax=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.jy(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.lN,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.jx:H.iW
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jy(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
kM:function(a,b,c,d){var u=H.iW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jy:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kO(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kM(t,!r,u,b)
if(t===0){r=$.ax
if(typeof r!=="number")return r.I()
$.ax=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bP
return new Function(r+H.k(q==null?$.bP=H.eG("self"):q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ax
if(typeof r!=="number")return r.I()
$.ax=r+1
o+=r
r="return function("+o+"){return this."
q=$.bP
return new Function(r+H.k(q==null?$.bP=H.eG("self"):q)+"."+H.k(u)+"("+o+");}")()},
kN:function(a,b,c,d){var u=H.iW,t=H.jx
switch(b?-1:a){case 0:throw H.f(H.lf("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kO:function(a,b){var u,t,s,r,q,p,o,n=$.bP
if(n==null)n=$.bP=H.eG("self")
u=$.jw
if(u==null)u=$.jw=H.eG("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kN(s,!q,t,b)
if(s===1){n="return function(){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+");"
u=$.ax
if(typeof u!=="number")return u.I()
$.ax=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+", "+o+");"
u=$.ax
if(typeof u!=="number")return u.I()
$.ax=u+1
return new Function(n+u+"}")()},
jj:function(a,b,c,d,e,f,g){return H.kP(a,b,H.a6(c),d,!!e,!!f,g)},
iW:function(a){return a.a},
jx:function(a){return a.c},
eG:function(a){var u,t,s,r=new H.bO("self","target","receiver","name"),q=J.j1(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
I:function(a){if(a==null)H.lA("boolean expression must not be null")
return a},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.au(a,"String"))},
mH:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.au(a,"double"))},
lX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.au(a,"num"))},
kf:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.au(a,"bool"))},
a6:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.au(a,"int"))},
km:function(a,b){throw H.f(H.au(a,H.bK(H.O(b).substring(2))))},
lZ:function(a,b){throw H.f(H.kL(a,H.bK(H.O(b).substring(2))))},
p:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.km(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.lZ(a,b)},
jo:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.f(H.au(a,"List<dynamic>"))},
lT:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.km(a,b)},
kg:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a6(u)]
else return a.$S()}return},
eu:function(a,b){var u
if(typeof a=="function")return!0
u=H.kg(J.T(a))
if(u==null)return!1
return H.k6(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.jd)return a
$.jd=!0
try{if(H.eu(a,b))return a
u=H.iS(b)
t=H.au(a,u)
throw H.f(t)}finally{$.jd=!1}},
jk:function(a,b){if(a!=null&&!H.ji(a,b))H.t(H.au(a,H.iS(b)))
return a},
au:function(a,b){return new H.hx("TypeError: "+P.cU(a)+": type '"+H.ka(a)+"' is not a subtype of type '"+b+"'")},
kL:function(a,b){return new H.eH("CastError: "+P.cU(a)+": type '"+H.ka(a)+"' is not a subtype of type '"+b+"'")},
ka:function(a){var u,t=J.T(a)
if(!!t.$ibR){u=H.kg(t)
if(u!=null)return H.iS(u)
return"Closure"}return H.by(a)},
lA:function(a){throw H.f(new H.i2(a))},
m4:function(a){throw H.f(new P.eO(H.O(a)))},
lf:function(a){return new H.fW(a)},
kh:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bm:function(a){if(a==null)return
return a.$ti},
mI:function(a,b,c){return H.bJ(a["$a"+H.k(c)],H.bm(b))},
cC:function(a,b,c,d){var u
H.O(c)
H.a6(d)
u=H.bJ(a["$a"+H.k(c)],H.bm(b))
return u==null?null:u[d]},
av:function(a,b,c){var u
H.O(b)
H.a6(c)
u=H.bJ(a["$a"+H.k(b)],H.bm(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.a6(b)
u=H.bm(a)
return u==null?null:u[b]},
iS:function(a){return H.bl(a,null)},
bl:function(a,b){var u,t
H.m(b,"$ib",[P.n],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bK(a[0].name)+H.jg(a,1,b)
if(typeof a=="function")return H.bK(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a6(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.k(b[t])}if('func' in a)return H.lt(a,b)
if('futureOr' in a)return"FutureOr<"+H.bl("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lt:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.n]
H.m(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.e(a0,n)
p=C.j.I(p,a0[n])
m=u[q]
if(m!=null&&m!==P.L)p+=" extends "+H.bl(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bl(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bl(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bl(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.lK(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.O(b[h])
j=j+i+H.bl(e[d],a0)+(" "+H.k(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jg:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.n],"$ab")
if(a==null)return""
u=new P.bh("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bl(p,c)}return"<"+u.i(0)+">"},
bJ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jh:function(a,b,c,d){var u,t
H.O(b)
H.jo(c)
H.O(d)
if(a==null)return!1
u=H.bm(a)
t=J.T(a)
if(t[b]==null)return!1
return H.kd(H.bJ(t[d],u),null,c,null)},
m:function(a,b,c,d){H.O(b)
H.jo(c)
H.O(d)
if(a==null)return a
if(H.jh(a,b,c,d))return a
throw H.f(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bK(b.substring(2))+H.jg(c,0,null),v.mangledGlobalNames)))},
kd:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ao(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ao(a[t],b,c[t],d))return!1
return!0},
mF:function(a,b,c){return a.apply(b,H.bJ(J.T(b)["$a"+H.k(c)],H.bm(b)))},
kj:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="H"||a===-1||a===-2||H.kj(u)}return!1},
ji:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="H"||b===-1||b===-2||H.kj(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ji(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eu(a,b)}u=J.T(a).constructor
t=H.bm(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ao(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.ji(a,b))throw H.f(H.au(a,H.iS(b)))
return a},
ao:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ao(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="H")return!0
if('func' in c)return H.k6(a,b,c,d)
if('func' in a)return c.name==="j_"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ao("type" in a?a.type:l,b,s,d)
else if(H.ao(a,b,s,d))return!0
else{if(!('$i'+"bW" in t.prototype))return!1
r=t.prototype["$a"+"bW"]
q=H.bJ(r,u?a.slice(1):l)
return H.ao(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kd(H.bJ(m,u),b,p,d)},
k6:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ao(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ao(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ao(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ao(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.lW(h,b,g,d)},
lW:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ao(c[s],d,a[s],b))return!1}return!0},
mG:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
lU:function(a){var u,t,s,r,q=H.O($.ki.$1(a)),p=$.iK[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iP[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.O($.kc.$2(a,q))
if(q!=null){p=$.iK[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iP[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iR(u)
$.iK[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iP[q]=u
return u}if(s==="-"){r=H.iR(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kl(a,u)
if(s==="*")throw H.f(P.jX(q))
if(v.leafTags[q]===true){r=H.iR(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kl(a,u)},
kl:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jp(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iR:function(a){return J.jp(a,!1,null,!!a.$iA)},
lV:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iR(u)
else return J.jp(u,c,null,null)},
lP:function(){if(!0===$.jn)return
$.jn=!0
H.lQ()},
lQ:function(){var u,t,s,r,q,p,o,n
$.iK=Object.create(null)
$.iP=Object.create(null)
H.lO()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kn.$1(q)
if(p!=null){o=H.lV(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lO:function(){var u,t,s,r,q,p,o=C.w()
o=H.bD(C.x,H.bD(C.y,H.bD(C.p,H.bD(C.p,H.bD(C.z,H.bD(C.A,H.bD(C.B(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ki=new H.iM(r)
$.kc=new H.iN(q)
$.kn=new H.iO(p)},
bD:function(a,b){return a(b)||b},
kX:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.f6("Illegal RegExp pattern ("+String(r)+")",a))},
m1:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lJ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ko:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kp:function(a,b,c){var u=H.m2(a,b,c)
return u},
m2:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ko(b),'g'),H.lJ(c))},
hv:function hv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fJ:function fJ(a,b){this.a=a
this.b=b},
fc:function fc(a,b,c){this.a=a
this.b=b
this.c=c},
hI:function hI(a){this.a=a},
iU:function iU(a){this.a=a},
e8:function e8(a){this.a=a
this.b=null},
bR:function bR(){},
hh:function hh(){},
h9:function h9(){},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hx:function hx(a){this.a=a},
eH:function eH(a){this.a=a},
fW:function fW(a){this.a=a},
i2:function i2(a){this.a=a},
aE:function aE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fg:function fg(a,b){this.a=a
this.b=b
this.c=null},
d3:function d3(a,b){this.a=a
this.$ti=b},
fh:function fh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
iO:function iO(a){this.a=a},
fb:function fb(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cy:function(a){return a},
bk:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cB(b,a))},
ls:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.lI(a,b,c))
return b},
c4:function c4(){},
d8:function d8(){},
c3:function c3(){},
d9:function d9(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
da:function da(){},
fH:function fH(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
cs:function cs(){},
lK:function(a){return J.jB(a?Object.keys(a):[],null)},
lY:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iL:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jn==null){H.lP()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.jX("Return interceptor for "+H.k(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jt()]
if(r!=null)return r
r=H.lU(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.t
if(u===Object.prototype)return C.t
if(typeof s=="function"){Object.defineProperty(s,$.jt(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
kW:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.iV(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aJ(a,0,4294967295,"length",null))
return J.jB(new Array(a),b)},
jB:function(a,b){return J.j1(H.d(a,[b]))},
j1:function(a){H.jo(a)
a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cY.prototype
return J.cX.prototype}if(typeof a=="string")return J.c_.prototype
if(a==null)return J.cZ.prototype
if(typeof a=="boolean")return J.fa.prototype
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.L)return a
return J.iL(a)},
jl:function(a){if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.L)return a
return J.iL(a)},
jm:function(a){if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.L)return a
return J.iL(a)},
lM:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.L)return a
return J.iL(a)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).p(a,b)},
kH:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lS(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jl(a).j(a,b)},
kI:function(a,b,c,d){return J.lM(a).h7(a,b,c,d)},
jv:function(a,b){return J.jm(a).w(a,b)},
kJ:function(a,b){return J.jm(a).H(a,b)},
cF:function(a){return J.T(a).gF(a)},
bM:function(a){return J.jm(a).gM(a)},
bN:function(a){return J.jl(a).gk(a)},
aj:function(a){return J.T(a).i(a)},
a:function a(){},
fa:function fa(){},
cZ:function cZ(){},
d0:function d0(){},
fN:function fN(){},
dy:function dy(){},
bf:function bf(){},
aD:function aD(a){this.$ti=a},
j2:function j2(a){this.$ti=a},
ak:function ak(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d_:function d_(){},
cY:function cY(){},
cX:function cX(){},
c_:function c_(){}},P={
lk:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lB()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bG(new P.i4(s),1)).observe(u,{childList:true})
return new P.i3(s,u,t)}else if(self.setImmediate!=null)return P.lC()
return P.lD()},
ll:function(a){self.scheduleImmediate(H.bG(new P.i5(H.l(a,{func:1,ret:-1})),0))},
lm:function(a){self.setImmediate(H.bG(new P.i6(H.l(a,{func:1,ret:-1})),0))},
ln:function(a){P.j8(C.l,H.l(a,{func:1,ret:-1}))},
j8:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.h.U(a.a,1000)
return P.lp(u<0?0:u,b)},
jV:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.af]})
u=C.h.U(a.a,1000)
return P.lq(u<0?0:u,b)},
lp:function(a,b){var u=new P.ee()
u.dU(a,b)
return u},
lq:function(a,b){var u=new P.ee()
u.dV(a,b)
return u},
lo:function(a,b){var u,t,s
b.a=1
try{a.dk(new P.ie(b),new P.ig(b),null)}catch(s){u=H.bo(s)
t=H.bI(s)
P.m_(new P.ih(b,u,t))}},
k3:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.p(a.c,"$ian")
if(u>=4){t=b.bk()
b.a=a.a
b.c=a.c
P.cn(b,t)}else{t=H.p(b.c,"$iaS")
b.a=2
b.c=a
a.cq(t)}},
cn:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.p(g.c,"$ia7")
g=g.b
r=s.a
q=s.b
g.toString
P.iG(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cn(h.a,b)}g=h.a
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
if(m){H.p(o,"$ia7")
g=g.b
r=o.a
q=o.b
g.toString
P.iG(i,i,g,r,q)
return}l=$.R
if(l!=n)$.R=n
else l=i
g=b.c
if(g===8)new P.il(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.ik(u,b,o).$0()}else if((g&2)!==0)new P.ij(h,u,b).$0()
if(l!=null)$.R=l
g=u.b
if(!!J.T(g).$ibW){if(g.a>=4){k=H.p(q.c,"$iaS")
q.c=null
b=q.aP(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.k3(g,q)
return}}j=b.b
k=H.p(j.c,"$iaS")
j.c=null
b=j.aP(k)
g=u.a
r=u.b
if(!g){H.D(r,H.x(j,0))
j.a=4
j.c=r}else{H.p(r,"$ia7")
j.a=8
j.c=r}h.a=j
g=j}},
lw:function(a,b){if(H.eu(a,{func:1,args:[P.L,P.ac]}))return H.l(a,{func:1,ret:null,args:[P.L,P.ac]})
if(H.eu(a,{func:1,args:[P.L]}))return H.l(a,{func:1,ret:null,args:[P.L]})
throw H.f(P.iV(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lv:function(){var u,t
for(;u=$.bC,u!=null;){$.cA=null
t=u.b
$.bC=t
if(t==null)$.cz=null
u.a.$0()}},
lz:function(){$.je=!0
try{P.lv()}finally{$.cA=null
$.je=!1
if($.bC!=null)$.ju().$1(P.ke())}},
k9:function(a){var u=new P.dD(H.l(a,{func:1,ret:-1}))
if($.bC==null){$.bC=$.cz=u
if(!$.je)$.ju().$1(P.ke())}else $.cz=$.cz.b=u},
ly:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.bC
if(u==null){P.k9(a)
$.cA=$.cz
return}t=new P.dD(a)
s=$.cA
if(s==null){t.b=u
$.bC=$.cA=t}else{t.b=s.b
$.cA=s.b=t
if(t.b==null)$.cz=t}},
m_:function(a){var u,t=null,s={func:1,ret:-1}
H.l(a,s)
u=$.R
if(C.k===u){P.iI(t,t,C.k,a)
return}u.toString
P.iI(t,t,u,H.l(u.bs(a),s))},
jT:function(a,b){var u,t={func:1,ret:-1}
H.l(b,t)
u=$.R
if(u===C.k){u.toString
return P.j8(a,b)}return P.j8(a,H.l(u.bs(b),t))},
jU:function(a,b){var u,t,s={func:1,ret:-1,args:[P.af]}
H.l(b,s)
u=$.R
if(u===C.k){u.toString
return P.jV(a,b)}t=u.cB(b,P.af)
$.R.toString
return P.jV(a,H.l(t,s))},
iG:function(a,b,c,d,e){var u={}
u.a=d
P.ly(new P.iH(u,e))},
k7:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.R
if(t===c)return d.$0()
$.R=c
u=t
try{t=d.$0()
return t}finally{$.R=u}},
k8:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.R
if(t===c)return d.$1(e)
$.R=c
u=t
try{t=d.$1(e)
return t}finally{$.R=u}},
lx:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.R
if(t===c)return d.$2(e,f)
$.R=c
u=t
try{t=d.$2(e,f)
return t}finally{$.R=u}},
iI:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.bs(d):c.ha(d,-1)
P.k9(d)},
i4:function i4(a){this.a=a},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
ee:function ee(){this.c=0},
iB:function iB(a,b){this.a=a
this.b=b},
iA:function iA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aS:function aS(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
an:function an(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
id:function id(a,b){this.a=a
this.b=b},
ii:function ii(a,b){this.a=a
this.b=b},
ie:function ie(a){this.a=a},
ig:function ig(a){this.a=a},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(a){this.a=a},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a){this.a=a
this.b=null},
hc:function hc(){},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(a,b){this.a=a
this.b=b},
ca:function ca(){},
hd:function hd(){},
af:function af(){},
a7:function a7(a,b){this.a=a
this.b=b},
iD:function iD(){},
iH:function iH(a,b){this.a=a
this.b=b},
it:function it(){},
iv:function iv(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(a,b){this.a=a
this.b=b},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
kY:function(a,b){return new H.aE([a,b])},
kZ:function(a){return H.lL(a,new H.aE([null,null]))},
l_:function(a){return new P.iq([a])},
jc:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
k5:function(a,b,c){var u=new P.ir(a,b,[c])
u.c=a.e
return u},
kV:function(a,b,c){var u,t
if(P.jf(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.n])
C.a.h($.ad,a)
try{P.lu(a,u)}finally{if(0>=$.ad.length)return H.e($.ad,-1)
$.ad.pop()}t=P.jR(b,H.lT(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
j0:function(a,b,c){var u,t
if(P.jf(a))return b+"..."+c
u=new P.bh(b)
C.a.h($.ad,a)
try{t=u
t.a=P.jR(t.a,a,", ")}finally{if(0>=$.ad.length)return H.e($.ad,-1)
$.ad.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jf:function(a){var u,t
for(u=$.ad.length,t=0;t<u;++t)if(a===$.ad[t])return!0
return!1},
lu:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.n],"$ab")
u=a.gM(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.v())return
r=H.k(u.gG(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.v()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gG(u);++s
if(!u.v()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gG(u);++s
for(;u.v();o=n,n=m){m=u.gG(u);++s
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
jC:function(a){var u,t={}
if(P.jf(a))return"{...}"
u=new P.bh("")
try{C.a.h($.ad,a)
u.a+="{"
t.a=!0
J.kJ(a,new P.fm(t,u))
u.a+="}"}finally{if(0>=$.ad.length)return H.e($.ad,-1)
$.ad.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iq:function iq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
co:function co(a){this.a=a
this.c=this.b=null},
ir:function ir(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fi:function fi(){},
u:function u(){},
fl:function fl(){},
fm:function fm(a,b){this.a=a
this.b=b},
a3:function a3(){},
ix:function ix(){},
dS:function dS(){},
bS:function bS(){},
cO:function cO(){},
eW:function eW(){},
hL:function hL(){},
hM:function hM(){},
iC:function iC(a){this.b=0
this.c=a},
kT:function(a){if(a instanceof H.bR)return a.i(0)
return"Instance of '"+H.by(a)+"'"},
l0:function(a,b,c){var u,t
H.D(b,c)
u=J.kW(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.T(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
j5:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bM(a);u.v();)C.a.h(s,H.D(u.gG(u),c))
if(b)return s
return H.m(J.j1(s),"$ib",t,"$ab")},
j7:function(a){var u,t,s=P.y
H.m(a,"$ih",[s],"$ah")
if(a.constructor===Array){H.m(a,"$iaD",[s],"$aaD")
u=a.length
t=P.jN(0,null,u)
return H.jL(t<u?C.a.dA(a,0,t):a)}return P.lh(a,0,null)},
lh:function(a,b,c){var u,t,s
H.m(a,"$ih",[P.y],"$ah")
u=J.bM(a)
for(t=0;t<b;++t)if(!u.v())throw H.f(P.aJ(b,0,t,null,null))
s=[]
for(;u.v();)s.push(u.gG(u))
return H.jL(s)},
lc:function(a){return new H.fb(a,H.kX(a,!1,!0,!1))},
jR:function(a,b,c){var u=J.bM(b)
if(!u.v())return a
if(c.length===0){do a+=H.k(u.gG(u))
while(u.v())}else{a+=H.k(u.gG(u))
for(;u.v();)a=a+c+H.k(u.gG(u))}return a},
lr:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.y],"$ab")
if(c===C.q){u=$.kG().b
u=u.test(b)}else u=!1
if(u)return b
t=C.D.he(H.D(b,H.av(c,"bS",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.la(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kQ:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kR:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cP:function(a){if(a>=10)return""+a
return"0"+a},
iZ:function(a,b){return new P.bb(1e6*b+1000*a)},
cU:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kT(a)},
kK:function(a){return new P.aw(!1,null,null,a)},
iV:function(a,b,c){return new P.aw(!0,a,b,c)},
dh:function(a,b){return new P.bz(null,null,!0,a,b,"Value not in range")},
aJ:function(a,b,c,d,e){return new P.bz(b,c,!0,a,d,"Invalid value")},
jN:function(a,b,c){if(0>a||a>c)throw H.f(P.aJ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aJ(b,a,c,"end",null))
return b}return c},
jM:function(a,b){if(typeof a!=="number")return a.du()
if(a<0)throw H.f(P.aJ(a,0,null,b,null))},
Q:function(a,b,c,d,e){var u=H.a6(e==null?J.bN(b):e)
return new P.f9(u,!0,a,c,"Index out of range")},
ah:function(a){return new P.hJ(a)},
jX:function(a){return new P.hH(a)},
bT:function(a){return new P.eJ(a)},
r:function(a){return new P.dL(a)},
jr:function(a){H.lY(a)},
a5:function a5(){},
b9:function b9(a,b){this.a=a
this.b=b},
w:function w(){},
bb:function bb(a){this.a=a},
eT:function eT(){},
eU:function eU(){},
bc:function bc(){},
ez:function ez(){},
db:function db(){},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f9:function f9(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hJ:function hJ(a){this.a=a},
hH:function hH(a){this.a=a},
h8:function h8(a){this.a=a},
eJ:function eJ(a){this.a=a},
fM:function fM(){},
dn:function dn(){},
eO:function eO(a){this.a=a},
dL:function dL(a){this.a=a},
f6:function f6(a,b){this.a=a
this.b=b},
y:function y(){},
h:function h(){},
aC:function aC(){},
b:function b(){},
K:function K(){},
H:function H(){},
a2:function a2(){},
L:function L(){},
ac:function ac(){},
n:function n(){},
bh:function bh(a){this.a=a},
lH:function(a){var u,t=J.T(a)
if(!!t.$ibd){u=t.gcE(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ej(a.data,a.height,a.width)},
lG:function(a){if(a instanceof P.ej)return{data:a.a,height:a.b,width:a.c}
return a},
b1:function(a){var u,t,s,r,q
if(a==null)return
u=P.kY(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r){q=H.O(t[r])
u.T(0,q,a[q])}return u},
lF:function(a){var u={}
a.H(0,new P.iJ(u))
return u},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a){this.a=a},
f2:function f2(a,b){this.a=a
this.b=b},
f3:function f3(){},
f4:function f4(){},
is:function is(){},
al:function al(){},
aT:function aT(){},
fe:function fe(){},
aZ:function aZ(){},
fK:function fK(){},
fP:function fP(){},
hg:function hg(){},
o:function o(){},
b_:function b_(){},
hu:function hu(){},
dQ:function dQ(){},
dR:function dR(){},
e_:function e_(){},
e0:function e0(){},
ea:function ea(){},
eb:function eb(){},
eh:function eh(){},
ei:function ei(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(a){this.a=a},
eE:function eE(){},
bp:function bp(){},
fL:function fL(){},
dE:function dE(){},
cI:function cI(){},
dg:function dg(){},
bA:function bA(){},
dk:function dk(){},
dq:function dq(){},
dx:function dx(){},
h7:function h7(){},
e6:function e6(){},
e7:function e7(){}},W={
iX:function(){var u=document.createElement("canvas")
return u},
kS:function(a){H.p(a,"$ic")
return"wheel"},
ip:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k4:function(a,b,c,d){var u=W.ip(W.ip(W.ip(W.ip(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a0:function(a,b,c,d,e){var u=W.kb(new W.ic(c),W.j)
if(u!=null&&!0)J.kI(a,b,u,!1)
return new W.ib(a,b,u,!1,[e])},
kb:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.R
if(u===C.k)return a
return u.cB(a,b)},
q:function q(){},
ev:function ev(){},
ex:function ex(){},
ey:function ey(){},
cH:function cH(){},
bq:function bq(){},
bQ:function bQ(){},
b8:function b8(){},
bU:function bU(){},
eK:function eK(){},
M:function M(){},
bV:function bV(){},
eL:function eL(){},
ay:function ay(){},
az:function az(){},
eM:function eM(){},
eN:function eN(){},
eP:function eP(){},
cQ:function cQ(){},
eQ:function eQ(){},
cR:function cR(){},
cS:function cS(){},
eR:function eR(){},
eS:function eS(){},
i8:function i8(a,b){this.a=a
this.b=b},
Y:function Y(){},
j:function j(){},
c:function c(){},
aA:function aA(){},
f0:function f0(){},
f1:function f1(){},
f5:function f5(){},
aB:function aB(){},
f8:function f8(){},
bv:function bv(){},
bd:function bd(){},
bX:function bX(){},
aF:function aF(){},
fj:function fj(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(a){this.a=a},
fy:function fy(){},
fz:function fz(a){this.a=a},
aH:function aH(){},
fA:function fA(){},
a1:function a1(){},
i7:function i7(a){this.a=a},
B:function B(){},
c5:function c5(){},
aI:function aI(){},
fO:function fO(){},
fU:function fU(){},
fV:function fV(a){this.a=a},
fX:function fX(){},
aK:function aK(){},
h5:function h5(){},
aL:function aL(){},
h6:function h6(){},
aM:function aM(){},
ha:function ha(){},
hb:function hb(a){this.a=a},
ar:function ar(){},
aN:function aN(){},
as:function as(){},
hi:function hi(){},
hj:function hj(){},
hp:function hp(){},
aO:function aO(){},
at:function at(){},
hs:function hs(){},
ht:function ht(){},
bj:function bj(){},
hK:function hK(){},
hZ:function hZ(){},
aR:function aR(){},
cm:function cm(){},
i9:function i9(){},
dG:function dG(){},
io:function io(){},
dX:function dX(){},
iy:function iy(){},
iz:function iz(){},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jb:function jb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ib:function ib(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ic:function ic(a){this.a=a},
v:function v(){},
cW:function cW(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
dF:function dF(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dY:function dY(){},
dZ:function dZ(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
ct:function ct(){},
cu:function cu(){},
e4:function e4(){},
e5:function e5(){},
e9:function e9(){},
ec:function ec(){},
ed:function ed(){},
cv:function cv(){},
cw:function cw(){},
ef:function ef(){},
eg:function eg(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){}},O={
iY:function(a){var u=new O.V([a])
u.c_(a)
return u},
V:function V(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c1:function c1(){this.b=this.a=null},
d6:function d6(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fq:function fq(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c0:function c0(){},
fr:function fr(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aG:function aG(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ft:function ft(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fu:function fu(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bB:function bB(){}},E={
le:function(a,b){var u=new E.fQ(a)
u.dG(a,b)
return u},
li:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ibq)return E.jS(a,!0,!0,!0,!1)
u=W.iX()
t=u.style
t.width="100%"
t.height="100%"
s.gcC(a).h(0,u)
return E.jS(u,!0,!0,!0,!1)},
jS:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.du(),j=H.p(C.r.bR(a,"webgl2",P.kZ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibA")
if(j==null)H.t(P.r("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.le(j,a)
u=new T.hm(j)
u.b=H.a6(j.getParameter(3379))
H.a6(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dB(a)
t=new X.fd()
t.sfa(P.l_(P.y))
u.b=t
t=new X.fB(u)
t.f=0
t.r=V.de()
t.x=V.de()
t.ch=t.Q=1
u.c=t
t=new X.fk(u)
t.r=0
t.x=V.de()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hr(u)
t.f=V.de()
t.r=V.de()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seb(H.d([],[[P.ca,P.L]]))
t=u.z
s=document
r=W.a1
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a0(s,"contextmenu",H.l(u.geB(),q),!1,r))
t=u.z
p=W.j
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a0(a,"focus",H.l(u.geH(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a0(a,"blur",H.l(u.gev(),o),!1,p))
t=u.z
n=W.aF
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a0(s,"keyup",H.l(u.geL(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a0(s,"keydown",H.l(u.geJ(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a0(a,"mousedown",H.l(u.geP(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a0(a,"mouseup",H.l(u.geT(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a0(a,l,H.l(u.geR(),q),!1,r))
n=u.z
m=W.aR;(n&&C.a).h(n,W.a0(a,H.O(W.kS(a)),H.l(u.geV(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a0(s,l,H.l(u.geD(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a0(s,"mouseup",H.l(u.geF(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a0(s,"pointerlockchange",H.l(u.geX(),o),!1,p))
p=u.z
o=W.at
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a0(a,"touchstart",H.l(u.gf7(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a0(a,"touchend",H.l(u.gf3(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a0(a,"touchmove",H.l(u.gf5(),s),!1,o))
k.Q=!0
k.ch=!1
k.cx=new P.b9(Date.now(),!1)
k.cy=0
k.cs()
return k},
eF:function eF(){},
ab:function ab(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fQ:function fQ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fR:function fR(a){this.a=a},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
du:function du(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ho:function ho(a){this.a=a}},Z={
ja:function(a,b,c){var u
H.m(c,"$ib",[P.y],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cy(c)),35044)
a.bindBuffer(b,null)
return new Z.dC(b,u)},
am:function(a){return new Z.aQ(a)},
dC:function dC(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
i_:function i_(a){this.a=a},
cK:function cK(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a){this.a=a}},D={
ap:function(){var u=new D.bt()
u.sa5(null)
u.say(null)
u.c=null
u.d=0
return u},
eI:function eI(){},
bt:function bt(){var _=this
_.d=_.c=_.b=_.a=null},
eY:function eY(a){this.a=a},
eZ:function eZ(a){this.a=a},
C:function C(){this.b=null},
bY:function bY(a){this.b=null
this.$ti=a},
bZ:function bZ(a){this.b=null
this.$ti=a},
P:function P(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
ba:function ba(){var _=this
_.d=_.c=_.b=_.a=null},
W:function W(){},
d2:function d2(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dd:function dd(){},
dm:function dm(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){}},X={cL:function cL(a,b){this.a=a
this.b=b},d1:function d1(a,b){this.a=a
this.b=b},fd:function fd(){this.d=this.b=this.a=null},fk:function fk(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c2:function c2(a,b,c){this.a=a
this.b=b
this.c=c},fB:function fB(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hr:function hr(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dB:function dB(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kU:function(a){var u=new X.f7(),t=V.bF(1)
u.a=new V.br(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jO
if(t==null){t=V.ld(0,0,1,1)
$.jO=t}u.r=t
return u},
cM:function cM(){},
f7:function f7(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dc:function dc(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dp:function dp(){}},V={
bF:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
js:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.dv(a-b,u)
return(a<0?a+u:a)+b},
G:function(a,b,c){if(a==null)return C.j.Z("null",c)
return C.j.Z(C.i.dl(Math.abs(a-0)<$.J().a?0:a,b),c+b+1)},
bH:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.w],"$ab")
u=H.d([],[P.n])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.z)(a),++r){q=V.G(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.T(u,p,C.j.Z(u[p],s))}return u},
jq:function(a){return C.i.hV(Math.pow(2,C.G.bF(Math.log(H.lE(a))/Math.log(2))))},
j6:function(){var u=$.jE
return u==null?$.jE=V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jD:function(a,b,c){var u=c.D(0,Math.sqrt(c.J(c))),t=b.aA(u),s=t.D(0,Math.sqrt(t.J(t))),r=u.aA(s),q=new V.N(a.a,a.b,a.c),p=s.aw(0).J(q),o=r.aw(0).J(q),n=u.aw(0).J(q)
return V.aW(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
de:function(){var u=$.jI
return u==null?$.jI=new V.ae(0,0):u},
jJ:function(){var u=$.c6
return u==null?$.c6=new V.aq(0,0,0):u},
ld:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.di(a,b,c,d)},
cl:function(){var u=$.k0
return u==null?$.k0=new V.N(0,0,0):u},
k1:function(){var u=$.k_
return u==null?$.k_=new V.N(0,1,0):u},
lj:function(){var u=$.hN
return u==null?$.hN=new V.N(0,0,1):u},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eX:function eX(a){this.a=a},
d7:function d7(a,b,c,d,e,f,g,h,i){var _=this
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
ae:function ae(a,b){this.a=a
this.b=b},
aq:function aq(a,b,c){this.a=a
this.b=b
this.c=c},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
di:function di(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b0:function b0(a,b){this.a=a
this.b=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function(a){var u=new V.fY()
u.dH(a)
return u},
ew:function ew(){},
aV:function aV(){},
d5:function d5(){},
aY:function aY(){this.a=null},
fY:function fY(){this.a=null},
c9:function c9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dv:function dv(a,b,c){this.a=a
this.b=b
this.c=c},
cc:function cc(a){this.b=a
this.c=null},
hq:function hq(){this.c=this.b=this.a=null},
cd:function cd(a){this.b=a
this.a=this.c=null},
m0:function(a){P.jU(C.E,new V.iT(a))},
lg:function(a){var u=new V.h1()
u.dJ(a,!0)
return u},
iT:function iT(a){this.a=a},
h1:function h1(){this.b=this.a=null},
h3:function h3(a){this.a=a},
h2:function h2(a){this.a=a}},U={
jz:function(a){var u=new U.cN()
u.a=a
return u},
cN:function cN(){this.b=this.a=null},
bw:function bw(){},
dj:function dj(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cT:function cT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
l1:function(a,b){var u=a.a1,t=new A.fp(b,u)
t.dI(b,u)
t.dF(a,b)
return t},
j9:function(a,b,c,d,e){var u=new A.hz(a,c,e)
u.f=d
u.sfK(P.l0(d,0,P.y))
return u},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
eA:function eA(a){this.a=a},
fp:function fp(a,b){var _=this
_.aT=_.cG=_.aS=_.a1=_.a7=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.cW=_.bz=_.cV=_.b5=_.cU=_.cT=_.b4=_.b3=_.cS=_.cR=_.b2=_.b1=_.b0=_.cQ=_.cP=_.b_=_.cO=_.cN=_.aZ=_.cM=_.cL=_.aY=_.aX=_.cK=_.cJ=_.aW=_.aV=_.cI=_.cH=_.aU=null
_.bE=_.d_=_.bD=_.cZ=_.bC=_.cY=_.bB=_.cX=_.bA=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fs:function fs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.a7=b3
_.a1=b4
_.aS=b5},
ce:function ce(a,b){this.b=a
this.c=b},
ci:function ci(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cg:function cg(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cj:function cj(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
ch:function ch(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
ck:function ck(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
c8:function c8(){},
bs:function bs(a,b){this.a=a
this.b=b},
dw:function dw(){},
hF:function hF(a){this.a=a},
F:function F(a,b,c){this.a=a
this.c=b
this.d=c},
hB:function hB(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){this.a=a
this.c=b
this.d=c},
hz:function hz(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
S:function S(a,b,c){this.a=a
this.c=b
this.d=c},
hA:function hA(a,b,c){this.a=a
this.c=b
this.d=c},
E:function E(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
hG:function hG(a,b,c){this.a=a
this.c=b
this.d=c},
cf:function cf(a,b,c){this.a=a
this.c=b
this.d=c},
ag:function ag(a,b,c){this.a=a
this.c=b
this.d=c},
a9:function a9(a,b,c){this.a=a
this.c=b
this.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iF:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cx:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.N(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.N(u+a3,t+a1,s+a2)
q=new V.N(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.N(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iF(i)
l=F.iF(j.b)
k=F.m3(d,a0,new F.iE(j,F.iF(j.c),F.iF(j.d),l,m,c),b)
if(k!=null)a.bK(k)},
m3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.ai,P.w,P.w]})
if(a<1)return
if(b<1)return
u=F.jQ()
t=H.d([],[F.ai])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.cz(new V.br(p,0,0,1),new V.ae(r,1))
c.$3(o,r,0)
C.a.h(t,o.bx(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.cz(new V.br(j,i,h,1),new V.ae(r,m))
c.$3(o,r,n)
C.a.h(t,o.bx(d))}}u.d.h8(a+1,b+1,t)
return u},
cV:function(a,b,c){var u=new F.a_(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.fp(a)
u.fq(b)
u.fs(c)
C.a.h(u.a.a.d.b,u)
u.a.a.S()
return u},
jQ:function(){var u=new F.dl(),t=new F.hO(u)
t.b=!1
t.sfL(H.d([],[F.ai]))
u.a=t
t=new F.h0(u)
t.sbi(H.d([],[F.bg]))
u.b=t
t=new F.h_(u)
t.sej(H.d([],[F.aU]))
u.c=t
t=new F.fZ(u)
t.sec(H.d([],[F.a_]))
u.d=t
u.e=null
return u},
k2:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ai(),r=new F.hW()
r.sbi(H.d([],[F.bg]))
s.b=r
r=new F.hS()
u=[F.aU]
r.sek(H.d([],u))
r.sel(H.d([],u))
s.c=r
r=new F.hP()
u=[F.a_]
r.sed(H.d([],u))
r.see(H.d([],u))
r.sef(H.d([],u))
s.d=r
h=$.kD()
s.e=0
r=$.b5()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b4().a)!==0?e:t
s.x=(u&$.b3().a)!==0?b:t
s.y=(u&$.b6().a)!==0?f:t
s.z=(u&$.b7().a)!==0?g:t
s.Q=(u&$.kE().a)!==0?c:t
s.ch=(u&$.bL().a)!==0?i:0
s.cx=(u&$.b2().a)!==0?a:t
return s},
iE:function iE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a_:function a_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f_:function f_(){},
h4:function h4(){},
aU:function aU(){this.b=this.a=null},
ff:function ff(){},
hy:function hy(){},
bg:function bg(){this.a=null},
dl:function dl(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(a){this.a=a
this.b=null},
h_:function h_(a){this.a=a
this.b=null},
h0:function h0(a){this.a=a
this.b=null},
ai:function ai(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hY:function hY(a){this.a=a},
hX:function hX(a){this.a=a},
hO:function hO(a){this.a=a
this.c=this.b=null},
hP:function hP(){this.d=this.c=this.b=null},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(){this.c=this.b=null},
hU:function hU(){},
hT:function hT(){},
hV:function hV(){},
fI:function fI(){},
hW:function hW(){this.b=null}},T={cb:function cb(){},bi:function bi(){},hk:function hk(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},hl:function hl(){var _=this
_.y=_.d=_.c=_.b=_.a=null},hm:function hm(a){var _=this
_.a=a
_.e=_.d=_.b=null},hn:function hn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
kk:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="testCanvas",f=null,e=V.lg("Test 039"),d=W.iX()
d.className="pageLargeCanvas"
d.id=g
e.a.appendChild(d)
u=[P.n]
e.cA(H.d(["Test of an animated texture on a square."],u))
e.cA(H.d(["\xab[Back to Tests|../]"],u))
t=document.getElementById(g)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.li(t,!0,!0,!0,!1)
r=new E.ab()
r.a=""
r.b=!0
e=E.ab
r.se4(0,O.iY(e))
r.y.b7(r.ghv(),r.ghy())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbT(0,f)
r.saE(f)
q=F.jQ()
F.cx(q,f,f,1,1,1,0,0,1)
F.cx(q,f,f,1,1,0,1,0,3)
F.cx(q,f,f,1,1,0,0,1,2)
F.cx(q,f,f,1,1,-1,0,0,0)
F.cx(q,f,f,1,1,0,-1,0,0)
F.cx(q,f,f,1,1,0,0,-1,3)
q.ap()
q.hu(new F.hT(),new F.fI())
r.sbT(0,q)
u=new U.dj()
u.r=u.f=u.e=u.d=u.c=u.b=u.a=0
u.sdr(0)
u.sd9(0,0)
u.sdg(0)
p=u.d
if(!(Math.abs(p-0.1)<$.J().a)){u.d=0.1
p=new D.P("deltaYaw",p,0.1,[P.w])
p.b=!0
u.an(p)}p=u.e
if(!(Math.abs(p-0.21)<$.J().a)){u.e=0.21
p=new D.P("deltaPitch",p,0.21,[P.w])
p.b=!0
u.an(p)}p=u.f
if(!(Math.abs(p-0.32)<$.J().a)){u.f=0.32
p=new D.P("deltaRoll",p,0.32,[P.w])
p.b=!0
u.an(p)}r.saE(u)
u=T.bi
p=P.j5([s.f.as("../resources/diceColor/posx.png"),s.f.as("../resources/diceColor/posz.png"),s.f.as("../resources/diceColor/negx.png"),s.f.as("../resources/diceColor/negy.png"),s.f.as("../resources/diceColor/posy.png"),s.f.as("../resources/diceColor/negz.png")],!0,u)
o=new T.hk()
o.b=o.a=0
o.sfE(H.m(p,"$ib",[u],"$ab"))
o.f=null
P.jU(P.iZ(500,0),new N.iQ(o))
n=new O.d6()
n.se1(O.iY(V.a8))
n.e.b7(n.geq(),n.ges())
u=new O.aG(n,"emission")
u.c=C.c
u.f=new V.Z(0,0,0)
n.f=u
u=new O.aG(n,"ambient")
u.c=C.c
u.f=new V.Z(0,0,0)
n.r=u
u=new O.aG(n,"diffuse")
u.c=C.c
u.f=new V.Z(0,0,0)
n.x=u
u=new O.aG(n,"invDiffuse")
u.c=C.c
u.f=new V.Z(0,0,0)
n.y=u
u=new O.fu(n,"specular")
u.c=C.c
u.f=new V.Z(0,0,0)
u.ch=100
n.z=u
u=new O.fr(n,"bump")
u.c=C.c
n.Q=u
n.ch=null
u=new O.aG(n,"reflect")
u.c=C.c
u.f=new V.Z(0,0,0)
n.cx=u
u=new O.ft(n,"refract")
u.c=C.c
u.f=new V.Z(0,0,0)
u.ch=1
n.cy=u
u=new O.fq(n,"alpha")
u.c=C.c
u.f=1
n.db=u
u=new D.d2()
u.c_(D.W)
u.se9(H.d([],[D.ba]))
u.sf9(H.d([],[D.dd]))
u.sfA(H.d([],[D.dm]))
u.sfH(H.d([],[D.dr]))
u.sfI(H.d([],[D.ds]))
u.sfJ(H.d([],[D.dt]))
u.ch=u.Q=null
u.bS(u.geo(),u.gf_(),u.gf1())
n.dx=u
p=u.Q
u=p==null?u.Q=D.ap():p
u.h(0,n.gfg())
u=n.dx
p=u.ch
u=p==null?u.ch=D.ap():p
u.h(0,n.gaM())
n.dy=null
u=n.dx
m=V.k1()
p=U.jz(V.jD(V.jJ(),m,new V.N(1,-1,-3)))
l=new V.Z(1,1,1)
k=new D.ba()
k.c=new V.Z(1,1,1)
k.a=V.lj()
j=k.b
k.b=p
p.gu().h(0,k.gdK())
p=new D.P("mover",j,k.b,[U.bw])
p.b=!0
k.a9(p)
if(!k.c.p(0,l)){j=k.c
k.c=l
p=new D.P("color",j,l,[V.Z])
p.b=!0
k.a9(p)}u.h(0,k)
n.r.sag(0,new V.Z(V.bF(0.2),V.bF(0.2),V.bF(0.2)))
n.x.sag(0,new V.Z(V.bF(0.8),V.bF(0.8),V.bF(0.8)))
n.r.sdj(o)
n.x.sdj(o)
u=new M.cT()
u.a=!0
u.sdM(0,O.iY(e))
u.e.b7(u.gex(),u.gez())
u.y=u.x=u.r=u.f=null
i=X.kU(f)
h=new X.dc()
h.c=1.0471975511965976
h.d=0.1
h.e=2000
h.saE(f)
e=h.c
if(!(Math.abs(e-1.0471975511965976)<$.J().a)){h.c=1.0471975511965976
e=new D.P("fov",e,1.0471975511965976,[P.w])
e.b=!0
h.al(e)}e=h.d
if(!(Math.abs(e-0.1)<$.J().a)){h.d=0.1
e=new D.P("near",e,0.1,[P.w])
e.b=!0
h.al(e)}e=h.e
if(!(Math.abs(e-2000)<$.J().a)){h.e=2000
e=new D.P("far",e,2000,[P.w])
e.b=!0
h.al(e)}e=u.b
if(e!==h){if(e!=null)e.gu().A(0,u.ga4())
j=u.b
u.b=h
h.gu().h(0,u.ga4())
e=new D.P("camera",j,u.b,[X.cM])
e.b=!0
u.aa(e)}e=u.c
if(e!==i){if(e!=null)e.gu().A(0,u.ga4())
j=u.c
u.c=i
i.gu().h(0,u.ga4())
e=new D.P("target",j,u.c,[X.dp])
e.b=!0
u.aa(e)}u.sdi(f)
u.sdi(n)
u.e.h(0,r)
u.b.saE(U.jz(V.aW(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=s.d
if(e!==u){if(e!=null)e.gu().A(0,s.gc0())
s.d=u
u.gu().h(0,s.gc0())
s.c1()}V.m0(s)},
iQ:function iQ(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.j3.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gF:function(a){return H.c7(a)},
i:function(a){return"Instance of '"+H.by(a)+"'"}}
J.fa.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ia5:1}
J.cZ.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.d0.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.fN.prototype={}
J.dy.prototype={}
J.bf.prototype={
i:function(a){var u=a[$.ks()]
if(u==null)return this.dC(a)
return"JavaScript function for "+H.k(J.aj(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ij_:1}
J.aD.prototype={
h:function(a,b){H.D(b,H.x(a,0))
if(!!a.fixed$length)H.t(P.ah("add"))
a.push(b)},
de:function(a,b){if(!!a.fixed$length)H.t(P.ah("removeAt"))
if(b<0||b>=a.length)throw H.f(P.dh(b,null))
return a.splice(b,1)[0]},
A:function(a,b){var u
if(!!a.fixed$length)H.t(P.ah("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bT(a))}},
q:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.T(t,u,H.k(a[u]))
return t.join(b)},
hr:function(a){return this.q(a,"")},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
dA:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aJ(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aJ(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.x(a,0)])
return H.d(a.slice(b,c),[H.x(a,0)])},
ghm:function(a){if(a.length>0)return a[0]
throw H.f(H.jA())},
gbH:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.jA())},
ah:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.j0(a,"[","]")},
gM:function(a){return new J.ak(a,a.length,[H.x(a,0)])},
gF:function(a){return H.c7(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.ah("set length"))
if(b<0)throw H.f(P.aJ(b,0,null,"newLength",null))
a.length=b},
T:function(a,b,c){H.D(c,H.x(a,0))
if(!!a.immutable$list)H.t(P.ah("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cB(a,b))
a[b]=c},
$ih:1,
$ib:1}
J.j2.prototype={}
J.ak.prototype={
gG:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.z(s))
u=t.c
if(u>=r){t.scg(null)
return!1}t.scg(s[u]);++t.c
return!0},
scg:function(a){this.d=H.D(a,H.x(this,0))},
$iaC:1}
J.d_.prototype={
hV:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.ah(""+a+".toInt()"))},
bF:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.ah(""+a+".floor()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ah(""+a+".round()"))},
dl:function(a,b){var u,t
if(b>20)throw H.f(P.aJ(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
dv:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dE:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cu(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.cu(a,b)},
cu:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ah("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
aQ:function(a,b){var u
if(a>0)u=this.fz(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fz:function(a,b){return b>31?0:a>>>b},
$iw:1,
$ia2:1}
J.cY.prototype={$iy:1}
J.cX.prototype={}
J.c_.prototype={
bw:function(a,b){if(b<0)throw H.f(H.cB(a,b))
if(b>=a.length)H.t(H.cB(a,b))
return a.charCodeAt(b)},
aN:function(a,b){if(b>=a.length)throw H.f(H.cB(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(typeof b!=="string")throw H.f(P.iV(b,null,null))
return a+b},
bW:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.dh(b,null))
if(b>c)throw H.f(P.dh(b,null))
if(c>a.length)throw H.f(P.dh(c,null))
return a.substring(b,c)},
bV:function(a,b){return this.bW(a,b,null)},
R:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.C)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
Z:function(a,b){var u=b-a.length
if(u<=0)return a
return this.R(" ",u)+a},
i:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ijG:1,
$in:1}
H.X.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.bw(this.a,b)},
$adA:function(){return[P.y]},
$au:function(){return[P.y]},
$ah:function(){return[P.y]},
$ab:function(){return[P.y]}}
H.eV.prototype={}
H.d4.prototype={
gG:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.jl(s),q=r.gk(s)
if(t.b!==q)throw H.f(P.bT(s))
u=t.c
if(u>=q){t.sax(null)
return!1}t.sax(r.w(s,u));++t.c
return!0},
sax:function(a){this.d=H.D(a,H.x(this,0))},
$iaC:1}
H.fn.prototype={
gM:function(a){return new H.fo(J.bM(this.a),this.b,this.$ti)},
gk:function(a){return J.bN(this.a)},
w:function(a,b){return this.b.$1(J.jv(this.a,b))},
$ah:function(a,b){return[b]}}
H.fo.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.sax(u.c.$1(t.gG(t)))
return!0}u.sax(null)
return!1},
gG:function(a){return this.a},
sax:function(a){this.a=H.D(a,H.x(this,1))},
$aaC:function(a,b){return[b]}}
H.i0.prototype={
gM:function(a){return new H.i1(J.bM(this.a),this.b,this.$ti)}}
H.i1.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(H.I(t.$1(u.gG(u))))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.bu.prototype={}
H.dA.prototype={}
H.dz.prototype={}
H.hv.prototype={
Y:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fJ.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fc.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.k(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.k(t.a)+")"
return s+r+"' on '"+u+"' ("+H.k(t.a)+")"}}
H.hI.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iU.prototype={
$1:function(a){if(!!J.T(a).$ibc)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.e8.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iac:1}
H.bR.prototype={
i:function(a){return"Closure '"+H.by(this).trim()+"'"},
$ij_:1,
gi_:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hh.prototype={}
H.h9.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bK(u)+"'"}}
H.bO.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bO))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gF:function(a){var u,t=this.c
if(t==null)u=H.c7(this.a)
else u=typeof t!=="object"?J.cF(t):H.c7(t)
return(u^H.c7(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.by(u)+"'")}}
H.hx.prototype={
i:function(a){return this.a}}
H.eH.prototype={
i:function(a){return this.a}}
H.fW.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.i2.prototype={
i:function(a){return"Assertion failed: "+P.cU(this.a)}}
H.aE.prototype={
gk:function(a){return this.a},
gai:function(a){return new H.d3(this,[H.x(this,0)])},
cD:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cd(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cd(t,b)}else return s.hp(b)},
hp:function(a){var u=this.d
if(u==null)return!1
return this.bG(this.bc(u,J.cF(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aO(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aO(r,b)
s=t==null?null:t.b
return s}else return q.hq(b)},
hq:function(a){var u,t,s=this.d
if(s==null)return
u=this.bc(s,J.cF(a)&0x3ffffff)
t=this.bG(u,a)
if(t<0)return
return u[t].b},
T:function(a,b,c){var u,t,s,r,q,p,o=this
H.D(b,H.x(o,0))
H.D(c,H.x(o,1))
if(typeof b==="string"){u=o.b
o.c5(u==null?o.b=o.bg():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.c5(t==null?o.c=o.bg():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bg()
r=J.cF(b)&0x3ffffff
q=o.bc(s,r)
if(q==null)o.bn(s,r,[o.bh(b,c)])
else{p=o.bG(q,b)
if(p>=0)q[p].b=c
else q.push(o.bh(b,c))}}},
H:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.x(s,0),H.x(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.bT(s))
u=u.c}},
c5:function(a,b,c){var u,t=this
H.D(b,H.x(t,0))
H.D(c,H.x(t,1))
u=t.aO(a,b)
if(u==null)t.bn(a,b,t.bh(b,c))
else u.b=c},
bh:function(a,b){var u=this,t=new H.fg(H.D(a,H.x(u,0)),H.D(b,H.x(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bG:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.jC(this)},
aO:function(a,b){return a[b]},
bc:function(a,b){return a[b]},
bn:function(a,b,c){a[b]=c},
e8:function(a,b){delete a[b]},
cd:function(a,b){return this.aO(a,b)!=null},
bg:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bn(t,u,t)
this.e8(t,u)
return t}}
H.fg.prototype={}
H.d3.prototype={
gk:function(a){return this.a.a},
gM:function(a){var u=this.a,t=new H.fh(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fh.prototype={
gG:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bT(t))
else{t=u.c
if(t==null){u.sc4(null)
return!1}else{u.sc4(t.a)
u.c=u.c.c
return!0}}},
sc4:function(a){this.d=H.D(a,H.x(this,0))},
$iaC:1}
H.iM.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.iN.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.iO.prototype={
$1:function(a){return this.a(H.O(a))},
$S:31}
H.fb.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijG:1}
H.c4.prototype={$imo:1}
H.d8.prototype={
gk:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.c3.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$abu:function(){return[P.w]},
$au:function(){return[P.w]},
$ih:1,
$ah:function(){return[P.w]},
$ib:1,
$ab:function(){return[P.w]}}
H.d9.prototype={
$abu:function(){return[P.y]},
$au:function(){return[P.y]},
$ih:1,
$ah:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.fC.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.fD.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.fE.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.fF.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.fG.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.da.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$imp:1}
H.fH.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.cp.prototype={}
H.cq.prototype={}
H.cr.prototype={}
H.cs.prototype={}
P.i4.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.i3.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:30}
P.i5.prototype={
$0:function(){this.a.$0()},
$S:1}
P.i6.prototype={
$0:function(){this.a.$0()},
$S:1}
P.ee.prototype={
dU:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bG(new P.iB(this,b),0),a)
else throw H.f(P.ah("`setTimeout()` not found."))},
dV:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bG(new P.iA(this,a,Date.now(),b),0),a)
else throw H.f(P.ah("Periodic timer."))},
$iaf:1}
P.iB.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.iA.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.h.dE(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.aS.prototype={
ht:function(a){if(this.c!==6)return!0
return this.b.b.bP(H.l(this.d,{func:1,ret:P.a5,args:[P.L]}),a.a,P.a5,P.L)},
ho:function(a){var u=this.e,t=P.L,s={futureOr:1,type:H.x(this,1)},r=this.b.b
if(H.eu(u,{func:1,args:[P.L,P.ac]}))return H.jk(r.hP(u,a.a,a.b,null,t,P.ac),s)
else return H.jk(r.bP(H.l(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.an.prototype={
dk:function(a,b,c){var u,t,s,r=H.x(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.R
if(u!==C.k){u.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.lw(b,u)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.an($.R,[c])
s=b==null?1:3
this.c6(new P.aS(t,s,a,b,[r,c]))
return t},
hU:function(a,b){return this.dk(a,null,b)},
c6:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.p(t.c,"$iaS")
t.c=a}else{if(s===2){u=H.p(t.c,"$ian")
s=u.a
if(s<4){u.c6(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.iI(null,null,s,H.l(new P.id(t,a),{func:1,ret:-1}))}},
cq:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.p(p.c,"$iaS")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.p(p.c,"$ian")
u=q.a
if(u<4){q.cq(a)
return}p.a=u
p.c=q.c}o.a=p.aP(a)
u=p.b
u.toString
P.iI(null,null,u,H.l(new P.ii(o,p),{func:1,ret:-1}))}},
bk:function(){var u=H.p(this.c,"$iaS")
this.c=null
return this.aP(u)},
aP:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
c9:function(a){var u,t,s=this,r=H.x(s,0)
H.jk(a,{futureOr:1,type:r})
u=s.$ti
if(H.jh(a,"$ibW",u,"$abW"))if(H.jh(a,"$ian",u,null))P.k3(a,s)
else P.lo(a,s)
else{t=s.bk()
H.D(a,r)
s.a=4
s.c=a
P.cn(s,t)}},
ca:function(a,b){var u,t=this
H.p(b,"$iac")
u=t.bk()
t.a=8
t.c=new P.a7(a,b)
P.cn(t,u)},
$ibW:1}
P.id.prototype={
$0:function(){P.cn(this.a,this.b)},
$S:1}
P.ii.prototype={
$0:function(){P.cn(this.b,this.a.a)},
$S:1}
P.ie.prototype={
$1:function(a){var u=this.a
u.a=0
u.c9(a)},
$S:18}
P.ig.prototype={
$2:function(a,b){H.p(b,"$iac")
this.a.ca(a,b)},
$1:function(a){return this.$2(a,null)},
$S:28}
P.ih.prototype={
$0:function(){this.a.ca(this.b,this.c)},
$S:1}
P.il.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dh(H.l(s.d,{func:1}),null)}catch(r){u=H.bo(r)
t=H.bI(r)
if(o.d){s=H.p(o.a.a.c,"$ia7").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.p(o.a.a.c,"$ia7")
else q.b=new P.a7(u,t)
q.a=!0
return}if(!!J.T(n).$ibW){if(n instanceof P.an&&n.a>=4){if(n.a===8){s=o.b
s.b=H.p(n.c,"$ia7")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.hU(new P.im(p),null)
s.a=!1}},
$S:2}
P.im.prototype={
$1:function(a){return this.a},
$S:27}
P.ik.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.x(s,0)
q=H.D(n.c,r)
p=H.x(s,1)
n.a.b=s.b.b.bP(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bo(o)
t=H.bI(o)
s=n.a
s.b=new P.a7(u,t)
s.a=!0}},
$S:2}
P.ij.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.p(m.a.a.c,"$ia7")
r=m.c
if(H.I(r.ht(u))&&r.e!=null){q=m.b
q.b=r.ho(u)
q.a=!1}}catch(p){t=H.bo(p)
s=H.bI(p)
r=H.p(m.a.a.c,"$ia7")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a7(t,s)
n.a=!0}},
$S:2}
P.dD.prototype={}
P.hc.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.an($.R,[P.y])
r.a=0
u=H.x(s,0)
t=H.l(new P.he(r,s),{func:1,ret:-1,args:[u]})
H.l(new P.hf(r,q),{func:1,ret:-1})
W.a0(s.a,s.b,t,!1,u)
return q}}
P.he.prototype={
$1:function(a){H.D(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.x(this.b,0)]}}}
P.hf.prototype={
$0:function(){this.b.c9(this.a.a)},
$S:1}
P.ca.prototype={}
P.hd.prototype={}
P.af.prototype={}
P.a7.prototype={
i:function(a){return H.k(this.a)},
$ibc:1}
P.iD.prototype={$imC:1}
P.iH.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.db():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:1}
P.it.prototype={
hQ:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.k===$.R){a.$0()
return}P.k7(r,r,this,a,-1)}catch(s){u=H.bo(s)
t=H.bI(s)
P.iG(r,r,this,u,H.p(t,"$iac"))}},
hR:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.k===$.R){a.$1(b)
return}P.k8(r,r,this,a,b,-1,c)}catch(s){u=H.bo(s)
t=H.bI(s)
P.iG(r,r,this,u,H.p(t,"$iac"))}},
ha:function(a,b){return new P.iv(this,H.l(a,{func:1,ret:b}),b)},
bs:function(a){return new P.iu(this,H.l(a,{func:1,ret:-1}))},
cB:function(a,b){return new P.iw(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dh:function(a,b){H.l(a,{func:1,ret:b})
if($.R===C.k)return a.$0()
return P.k7(null,null,this,a,b)},
bP:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.R===C.k)return a.$1(b)
return P.k8(null,null,this,a,b,c,d)},
hP:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.R===C.k)return a.$2(b,c)
return P.lx(null,null,this,a,b,c,d,e,f)}}
P.iv.prototype={
$0:function(){return this.a.dh(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iu.prototype={
$0:function(){return this.a.hQ(this.b)},
$S:2}
P.iw.prototype={
$1:function(a){var u=this.c
return this.a.hR(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iq.prototype={
gM:function(a){return P.k5(this,this.r,H.x(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.D(b,H.x(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.c7(u==null?s.b=P.jc():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.c7(t==null?s.c=P.jc():t,b)}else return s.dX(0,b)},
dX:function(a,b){var u,t,s,r=this
H.D(b,H.x(r,0))
u=r.d
if(u==null)u=r.d=P.jc()
t=r.cb(b)
s=u[t]
if(s==null)u[t]=[r.b9(b)]
else{if(r.ci(s,b)>=0)return!1
s.push(r.b9(b))}return!0},
A:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fc(this.c,b)
else return this.fb(0,b)},
fb:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eh(r,b)
t=s.ci(u,b)
if(t<0)return!1
s.cv(u.splice(t,1)[0])
return!0},
c7:function(a,b){H.D(b,H.x(this,0))
if(H.p(a[b],"$ico")!=null)return!1
a[b]=this.b9(b)
return!0},
fc:function(a,b){var u
if(a==null)return!1
u=H.p(a[b],"$ico")
if(u==null)return!1
this.cv(u)
delete a[b]
return!0},
ck:function(){this.r=1073741823&this.r+1},
b9:function(a){var u,t=this,s=new P.co(H.D(a,H.x(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.ck()
return s},
cv:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.ck()},
cb:function(a){return J.cF(a)&1073741823},
eh:function(a,b){return a[this.cb(b)]},
ci:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.co.prototype={}
P.ir.prototype={
gG:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bT(t))
else{t=u.c
if(t==null){u.sc8(null)
return!1}else{u.sc8(H.D(t.a,H.x(u,0)))
u.c=u.c.b
return!0}}},
sc8:function(a){this.d=H.D(a,H.x(this,0))},
$iaC:1}
P.fi.prototype={$ih:1,$ib:1}
P.u.prototype={
gM:function(a){return new H.d4(a,this.gk(a),[H.cC(this,a,"u",0)])},
w:function(a,b){return this.j(a,b)},
hX:function(a,b){var u,t=this,s=H.d([],[H.cC(t,a,"u",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.T(s,u,t.j(a,u))
return s},
hW:function(a){return this.hX(a,!0)},
i:function(a){return P.j0(a,"[","]")}}
P.fl.prototype={}
P.fm.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.k(a)
t.a=u+": "
t.a+=H.k(b)},
$S:15}
P.a3.prototype={
H:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.cC(s,a,"a3",0),H.cC(s,a,"a3",1)]})
for(u=J.bM(s.gai(a));u.v();){t=u.gG(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.bN(this.gai(a))},
i:function(a){return P.jC(a)},
$iK:1}
P.ix.prototype={
i:function(a){return P.j0(this,"{","}")},
w:function(a,b){var u,t,s,r=this
P.jM(b,"index")
for(u=P.k5(r,r.r,H.x(r,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.f(P.Q(b,r,"index",null,t))},
$ih:1,
$ijP:1}
P.dS.prototype={}
P.bS.prototype={}
P.cO.prototype={}
P.eW.prototype={
$abS:function(){return[P.n,[P.b,P.y]]}}
P.hL.prototype={}
P.hM.prototype={
he:function(a){var u,t,s=P.jN(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iC(u)
if(t.eg(a,0,s)!==s)t.cw(C.j.bw(a,s-1),0)
return new Uint8Array(u.subarray(0,H.ls(0,t.b,u.length)))},
$acO:function(){return[P.n,[P.b,P.y]]}}
P.iC.prototype={
cw:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eg:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.j.bw(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.j.aN(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cw(r,C.j.aN(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a5.prototype={}
P.b9.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.b9&&this.a===b.a&&!0},
gF:function(a){var u=this.a
return(u^C.h.aQ(u,30))&1073741823},
i:function(a){var u=this,t=P.kQ(H.l9(u)),s=P.cP(H.l7(u)),r=P.cP(H.l3(u)),q=P.cP(H.l4(u)),p=P.cP(H.l6(u)),o=P.cP(H.l8(u)),n=P.kR(H.l5(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.w.prototype={}
P.bb.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bb&&this.a===b.a},
gF:function(a){return C.h.gF(this.a)},
i:function(a){var u,t,s,r=new P.eU(),q=this.a
if(q<0)return"-"+new P.bb(0-q).i(0)
u=r.$1(C.h.U(q,6e7)%60)
t=r.$1(C.h.U(q,1e6)%60)
s=new P.eT().$1(q%1e6)
return""+C.h.U(q,36e8)+":"+H.k(u)+":"+H.k(t)+"."+H.k(s)}}
P.eT.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.eU.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.bc.prototype={}
P.ez.prototype={
i:function(a){return"Assertion failed"}}
P.db.prototype={
i:function(a){return"Throw of null."}}
P.aw.prototype={
gbb:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gba:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbb()+o+u
if(!q.a)return t
s=q.gba()
r=P.cU(q.b)
return t+s+": "+r}}
P.bz.prototype={
gbb:function(){return"RangeError"},
gba:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.k(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.k(s)
else if(t>s)u=": Not in range "+H.k(s)+".."+H.k(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.k(s)}return u}}
P.f9.prototype={
gbb:function(){return"RangeError"},
gba:function(){var u,t=H.a6(this.b)
if(typeof t!=="number")return t.du()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.k(u)},
gk:function(a){return this.f}}
P.hJ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hH.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.h8.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eJ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cU(u)+"."}}
P.fM.prototype={
i:function(a){return"Out of Memory"},
$ibc:1}
P.dn.prototype={
i:function(a){return"Stack Overflow"},
$ibc:1}
P.eO.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dL.prototype={
i:function(a){return"Exception: "+this.a}}
P.f6.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.j.bW(s,0,75)+"...":s
return t+"\n"+r}}
P.y.prototype={}
P.h.prototype={
gk:function(a){var u,t=this.gM(this)
for(u=0;t.v();)++u
return u},
w:function(a,b){var u,t,s
P.jM(b,"index")
for(u=this.gM(this),t=0;u.v();){s=u.gG(u)
if(b===t)return s;++t}throw H.f(P.Q(b,this,"index",null,t))},
i:function(a){return P.kV(this,"(",")")}}
P.aC.prototype={}
P.b.prototype={$ih:1}
P.K.prototype={}
P.H.prototype={
gF:function(a){return P.L.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.a2.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
p:function(a,b){return this===b},
gF:function(a){return H.c7(this)},
i:function(a){return"Instance of '"+H.by(this)+"'"},
toString:function(){return this.i(this)}}
P.ac.prototype={}
P.n.prototype={$ijG:1}
P.bh.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.ev.prototype={
gk:function(a){return a.length}}
W.ex.prototype={
i:function(a){return String(a)}}
W.ey.prototype={
i:function(a){return String(a)}}
W.cH.prototype={}
W.bq.prototype={
bR:function(a,b,c){if(c!=null)return a.getContext(b,P.lF(c))
return a.getContext(b)},
dt:function(a,b){return this.bR(a,b,null)},
$ibq:1}
W.bQ.prototype={$ibQ:1}
W.b8.prototype={
gk:function(a){return a.length}}
W.bU.prototype={$ibU:1}
W.eK.prototype={
gk:function(a){return a.length}}
W.M.prototype={$iM:1}
W.bV.prototype={
gk:function(a){return a.length}}
W.eL.prototype={}
W.ay.prototype={}
W.az.prototype={}
W.eM.prototype={
gk:function(a){return a.length}}
W.eN.prototype={
gk:function(a){return a.length}}
W.eP.prototype={
gk:function(a){return a.length}}
W.cQ.prototype={$icQ:1}
W.eQ.prototype={
i:function(a){return String(a)}}
W.cR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[[P.al,P.a2]]},
$au:function(){return[[P.al,P.a2]]},
$ih:1,
$ah:function(){return[[P.al,P.a2]]},
$ib:1,
$ab:function(){return[[P.al,P.a2]]},
$av:function(){return[[P.al,P.a2]]}}
W.cS.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gav(a))+" x "+H.k(this.gar(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$ial)return!1
return a.left===u.gd2(b)&&a.top===u.gdm(b)&&this.gav(a)===u.gav(b)&&this.gar(a)===u.gar(b)},
gF:function(a){return W.k4(C.i.gF(a.left),C.i.gF(a.top),C.i.gF(this.gav(a)),C.i.gF(this.gar(a)))},
gar:function(a){return a.height},
gd2:function(a){return a.left},
gdm:function(a){return a.top},
gav:function(a){return a.width},
$ial:1,
$aal:function(){return[P.a2]}}
W.eR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[P.n]},
$au:function(){return[P.n]},
$ih:1,
$ah:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$av:function(){return[P.n]}}
W.eS.prototype={
gk:function(a){return a.length}}
W.i8.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.p(u[b],"$iY")},
h:function(a,b){this.a.appendChild(b)
return b},
gM:function(a){var u=this.hW(this)
return new J.ak(u,u.length,[H.x(u,0)])},
$au:function(){return[W.Y]},
$ah:function(){return[W.Y]},
$ab:function(){return[W.Y]}}
W.Y.prototype={
gcC:function(a){return new W.i8(a,a.children)},
i:function(a){return a.localName},
$iY:1}
W.j.prototype={$ij:1}
W.c.prototype={
h7:function(a,b,c,d){H.l(c,{func:1,args:[W.j]})
if(c!=null)this.dY(a,b,c,!1)},
dY:function(a,b,c,d){return a.addEventListener(b,H.bG(H.l(c,{func:1,args:[W.j]}),1),!1)},
$ic:1}
W.aA.prototype={$iaA:1}
W.f0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aA]},
$au:function(){return[W.aA]},
$ih:1,
$ah:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$av:function(){return[W.aA]}}
W.f1.prototype={
gk:function(a){return a.length}}
W.f5.prototype={
gk:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.f8.prototype={
gk:function(a){return a.length}}
W.bv.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.B]},
$au:function(){return[W.B]},
$ih:1,
$ah:function(){return[W.B]},
$ib:1,
$ab:function(){return[W.B]},
$ibv:1,
$av:function(){return[W.B]}}
W.bd.prototype={$ibd:1,
gcE:function(a){return a.data}}
W.bX.prototype={$ibX:1}
W.aF.prototype={$iaF:1}
W.fj.prototype={
i:function(a){return String(a)}}
W.fv.prototype={
gk:function(a){return a.length}}
W.fw.prototype={
j:function(a,b){return P.b1(a.get(H.O(b)))},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gai:function(a){var u=H.d([],[P.n])
this.H(a,new W.fx(u))
return u},
gk:function(a){return a.size},
$aa3:function(){return[P.n,null]},
$iK:1,
$aK:function(){return[P.n,null]}}
W.fx.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fy.prototype={
j:function(a,b){return P.b1(a.get(H.O(b)))},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gai:function(a){var u=H.d([],[P.n])
this.H(a,new W.fz(u))
return u},
gk:function(a){return a.size},
$aa3:function(){return[P.n,null]},
$iK:1,
$aK:function(){return[P.n,null]}}
W.fz.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.aH.prototype={$iaH:1}
W.fA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aH]},
$au:function(){return[W.aH]},
$ih:1,
$ah:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$av:function(){return[W.aH]}}
W.a1.prototype={$ia1:1}
W.i7.prototype={
gM:function(a){var u=this.a.childNodes
return new W.cW(u,u.length,[H.cC(C.J,u,"v",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$au:function(){return[W.B]},
$ah:function(){return[W.B]},
$ab:function(){return[W.B]}}
W.B.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.dB(a):u},
$iB:1}
W.c5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.B]},
$au:function(){return[W.B]},
$ih:1,
$ah:function(){return[W.B]},
$ib:1,
$ab:function(){return[W.B]},
$av:function(){return[W.B]}}
W.aI.prototype={$iaI:1,
gk:function(a){return a.length}}
W.fO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aI]},
$au:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$av:function(){return[W.aI]}}
W.fU.prototype={
j:function(a,b){return P.b1(a.get(H.O(b)))},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gai:function(a){var u=H.d([],[P.n])
this.H(a,new W.fV(u))
return u},
gk:function(a){return a.size},
$aa3:function(){return[P.n,null]},
$iK:1,
$aK:function(){return[P.n,null]}}
W.fV.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fX.prototype={
gk:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.h5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aK]},
$au:function(){return[W.aK]},
$ih:1,
$ah:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$av:function(){return[W.aK]}}
W.aL.prototype={$iaL:1}
W.h6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aL]},
$au:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$av:function(){return[W.aL]}}
W.aM.prototype={$iaM:1,
gk:function(a){return a.length}}
W.ha.prototype={
j:function(a,b){return a.getItem(H.O(b))},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.n,P.n]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gai:function(a){var u=H.d([],[P.n])
this.H(a,new W.hb(u))
return u},
gk:function(a){return a.length},
$aa3:function(){return[P.n,P.n]},
$iK:1,
$aK:function(){return[P.n,P.n]}}
W.hb.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:25}
W.ar.prototype={$iar:1}
W.aN.prototype={$iaN:1}
W.as.prototype={$ias:1}
W.hi.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.as]},
$au:function(){return[W.as]},
$ih:1,
$ah:function(){return[W.as]},
$ib:1,
$ab:function(){return[W.as]},
$av:function(){return[W.as]}}
W.hj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aN]},
$au:function(){return[W.aN]},
$ih:1,
$ah:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$av:function(){return[W.aN]}}
W.hp.prototype={
gk:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.at.prototype={$iat:1}
W.hs.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aO]},
$au:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$av:function(){return[W.aO]}}
W.ht.prototype={
gk:function(a){return a.length}}
W.bj.prototype={}
W.hK.prototype={
i:function(a){return String(a)}}
W.hZ.prototype={
gk:function(a){return a.length}}
W.aR.prototype={
ghi:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ah("deltaY is not supported"))},
ghh:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ah("deltaX is not supported"))},
$iaR:1}
W.cm.prototype={
ff:function(a,b){return a.requestAnimationFrame(H.bG(H.l(b,{func:1,ret:-1,args:[P.a2]}),1))},
ea:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.i9.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.M]},
$au:function(){return[W.M]},
$ih:1,
$ah:function(){return[W.M]},
$ib:1,
$ab:function(){return[W.M]},
$av:function(){return[W.M]}}
W.dG.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$ial)return!1
return a.left===u.gd2(b)&&a.top===u.gdm(b)&&a.width===u.gav(b)&&a.height===u.gar(b)},
gF:function(a){return W.k4(C.i.gF(a.left),C.i.gF(a.top),C.i.gF(a.width),C.i.gF(a.height))},
gar:function(a){return a.height},
gav:function(a){return a.width}}
W.io.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aB]},
$au:function(){return[W.aB]},
$ih:1,
$ah:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$av:function(){return[W.aB]}}
W.dX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.B]},
$au:function(){return[W.B]},
$ih:1,
$ah:function(){return[W.B]},
$ib:1,
$ab:function(){return[W.B]},
$av:function(){return[W.B]}}
W.iy.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aM]},
$au:function(){return[W.aM]},
$ih:1,
$ah:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$av:function(){return[W.aM]}}
W.iz.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ar]},
$au:function(){return[W.ar]},
$ih:1,
$ah:function(){return[W.ar]},
$ib:1,
$ab:function(){return[W.ar]},
$av:function(){return[W.ar]}}
W.ia.prototype={}
W.jb.prototype={}
W.ib.prototype={}
W.ic.prototype={
$1:function(a){return this.a.$1(H.p(a,"$ij"))},
$S:23}
W.v.prototype={
gM:function(a){return new W.cW(a,this.gk(a),[H.cC(this,a,"v",0)])}}
W.cW.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scj(J.kH(u.a,t))
u.c=t
return!0}u.scj(null)
u.c=s
return!1},
gG:function(a){return this.d},
scj:function(a){this.d=H.D(a,H.x(this,0))},
$iaC:1}
W.dF.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.ct.prototype={}
W.cu.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e9.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.cv.prototype={}
W.cw.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
P.ej.prototype={$ibd:1,
gcE:function(a){return this.a}}
P.iJ.prototype={
$2:function(a,b){this.a[a]=b},
$S:15}
P.f2.prototype={
gbd:function(){var u=this.b,t=H.av(u,"u",0),s=W.Y
return new H.fn(new H.i0(u,H.l(new P.f3(),{func:1,ret:P.a5,args:[t]}),[t]),H.l(new P.f4(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bN(this.gbd().a)},
j:function(a,b){var u=this.gbd()
return u.b.$1(J.jv(u.a,b))},
gM:function(a){var u=P.j5(this.gbd(),!1,W.Y)
return new J.ak(u,u.length,[H.x(u,0)])},
$au:function(){return[W.Y]},
$ah:function(){return[W.Y]},
$ab:function(){return[W.Y]}}
P.f3.prototype={
$1:function(a){return!!J.T(H.p(a,"$iB")).$iY},
$S:22}
P.f4.prototype={
$1:function(a){return H.i(H.p(a,"$iB"),"$iY")},
$S:21}
P.is.prototype={}
P.al.prototype={}
P.aT.prototype={$iaT:1}
P.fe.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$au:function(){return[P.aT]},
$ih:1,
$ah:function(){return[P.aT]},
$ib:1,
$ab:function(){return[P.aT]},
$av:function(){return[P.aT]}}
P.aZ.prototype={$iaZ:1}
P.fK.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$au:function(){return[P.aZ]},
$ih:1,
$ah:function(){return[P.aZ]},
$ib:1,
$ab:function(){return[P.aZ]},
$av:function(){return[P.aZ]}}
P.fP.prototype={
gk:function(a){return a.length}}
P.hg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$au:function(){return[P.n]},
$ih:1,
$ah:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$av:function(){return[P.n]}}
P.o.prototype={
gcC:function(a){return new P.f2(a,new W.i7(a))}}
P.b_.prototype={$ib_:1}
P.hu.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.j(a,b)},
$au:function(){return[P.b_]},
$ih:1,
$ah:function(){return[P.b_]},
$ib:1,
$ab:function(){return[P.b_]},
$av:function(){return[P.b_]}}
P.dQ.prototype={}
P.dR.prototype={}
P.e_.prototype={}
P.e0.prototype={}
P.ea.prototype={}
P.eb.prototype={}
P.eh.prototype={}
P.ei.prototype={}
P.eB.prototype={
gk:function(a){return a.length}}
P.eC.prototype={
j:function(a,b){return P.b1(a.get(H.O(b)))},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gai:function(a){var u=H.d([],[P.n])
this.H(a,new P.eD(u))
return u},
gk:function(a){return a.size},
$aa3:function(){return[P.n,null]},
$iK:1,
$aK:function(){return[P.n,null]}}
P.eD.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
P.eE.prototype={
gk:function(a){return a.length}}
P.bp.prototype={}
P.fL.prototype={
gk:function(a){return a.length}}
P.dE.prototype={}
P.cI.prototype={$icI:1}
P.dg.prototype={$idg:1}
P.bA.prototype={
hS:function(a,b,c,d,e,f,g){var u,t=J.T(g)
if(!!t.$ibd)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.lG(g))
return}if(!!t.$ibX)t=!0
else t=!1
if(t){this.fD(a,b,c,d,e,f,g)
return}throw H.f(P.kK("Incorrect number or type of arguments"))},
fD:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
C:function(a,b,c){return a.uniform1f(b,c)},
P:function(a,b,c){return a.uniform1i(b,c)},
m:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dn:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dq:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibA:1}
P.dk.prototype={$idk:1}
P.dq.prototype={$idq:1}
P.dx.prototype={$idx:1}
P.h7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Q(b,a,null,null,null))
return P.b1(a.item(b))},
w:function(a,b){return this.j(a,b)},
$au:function(){return[[P.K,,,]]},
$ih:1,
$ah:function(){return[[P.K,,,]]},
$ib:1,
$ab:function(){return[[P.K,,,]]},
$av:function(){return[[P.K,,,]]}}
P.e6.prototype={}
P.e7.prototype={}
O.V.prototype={
c_:function(a){var u=this
u.sem(H.d([],[a]))
u.sco(null)
u.scl(null)
u.scp(null)},
bS:function(a,b,c){var u=this,t=H.av(u,"V",0)
H.l(b,{func:1,ret:P.a5,args:[[P.h,t]]})
t={func:1,ret:-1,args:[P.y,[P.h,t]]}
H.l(a,t)
H.l(c,t)
u.sco(b)
u.scl(a)
u.scp(c)},
b7:function(a,b){return this.bS(a,null,b)},
eZ:function(a){var u
H.m(a,"$ih",[H.av(this,"V",0)],"$ah")
u=this.b
if(u!=null)return u.$1(a)
return!0},
en:function(a,b){var u
H.m(b,"$ih",[H.av(this,"V",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gM:function(a){var u=this.a
return new J.ak(u,u.length,[H.x(u,0)])},
w:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.av(s,"V",0)
H.D(b,r)
r=[r]
if(H.I(s.eZ(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.en(t,H.d([b],r))}},
sem:function(a){this.a=H.m(a,"$ib",[H.av(this,"V",0)],"$ab")},
sco:function(a){this.b=H.l(a,{func:1,ret:P.a5,args:[[P.h,H.av(this,"V",0)]]})},
scl:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.y,[P.h,H.av(this,"V",0)]]})},
scp:function(a){H.l(a,{func:1,ret:-1,args:[P.y,[P.h,H.av(this,"V",0)]]})},
$ih:1}
O.c1.prototype={
gk:function(a){return this.a.length},
gu:function(){var u=this.b
return u==null?this.b=D.ap():u},
ak:function(){var u=this.b
if(u!=null)u.L(null)},
gN:function(a){var u=this.a
if(u.length>0)return C.a.gbH(u)
else return V.j6()},
dc:function(a){var u=this.a
if(a==null)C.a.h(u,V.j6())
else C.a.h(u,a)
this.ak()},
bM:function(){var u=this.a
if(u.length>0){u.pop()
this.ak()}},
sbe:function(a){this.a=H.m(a,"$ib",[V.a8],"$ab")}}
E.eF.prototype={}
E.ab.prototype={
sbT:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gu().A(0,s.gd7())
u=s.c
if(u!=null)u.gu().h(0,s.gd7())
t=new D.P("shape",r,s.c,[F.dl])
t.b=!0
s.aj(t)}},
saE:function(a){var u,t,s=this
if(!J.U(s.r,a)){u=s.r
if(u!=null)u.gu().A(0,s.gd5())
if(a!=null)a.gu().h(0,s.gd5())
s.r=a
t=new D.P("mover",u,a,[U.bw])
t.b=!0
s.aj(t)}},
b6:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.sdr(m.a+m.d*b.y)
m.sd9(0,m.b+m.e*b.y)
m.sdg(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.aW(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.R(0,V.aW(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.R(0,V.aW(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.a8(0)}q=m.x}else q=null
if(!J.U(q,n.x)){p=n.x
n.x=q
o=new D.P("matrix",p,q,[V.a8])
o.b=!0
n.aj(o)}for(m=n.y.a,m=new J.ak(m,m.length,[H.x(m,0)]);m.v();)m.d.b6(0,b)},
au:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gN(s))
else C.a.h(s.a,r.R(0,s.gN(s)))
s.ak()
a.dd(t.f)
s=a.dy
u=(s&&C.a).gbH(s)
if(u!=null&&t.d!=null)u.hM(a,t)
for(s=t.y.a,s=new J.ak(s,s.length,[H.x(s,0)]);s.v();)s.d.au(a)
a.da()
a.dx.bM()},
aj:function(a){var u=this.z
if(u!=null)u.L(a)},
S:function(){return this.aj(null)},
d8:function(a){H.p(a,"$iC")
this.e=null
this.aj(a)},
hB:function(){return this.d8(null)},
d6:function(a){this.aj(H.p(a,"$iC"))},
hA:function(){return this.d6(null)},
d4:function(a){this.aj(H.p(a,"$iC"))},
hx:function(){return this.d4(null)},
hw:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ih",[E.ab],"$ah")
for(u=b.length,t=this.gd3(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bt()
o.sa5(null)
o.say(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa5(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.S()},
hz:function(a,b){var u,t
H.m(b,"$ih",[E.ab],"$ah")
for(u=b.gM(b),t=this.gd3();u.v();)u.gG(u).gu().A(0,t)
this.S()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
se4:function(a,b){this.y=H.m(b,"$iV",[E.ab],"$aV")},
$iaX:1}
E.fQ.prototype={
dG:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.b9(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c1()
t=[V.a8]
u.sbe(H.d([],t))
u.b=null
u.gu().h(0,new E.fR(s))
s.cy=u
u=new O.c1()
u.sbe(H.d([],t))
u.b=null
u.gu().h(0,new E.fS(s))
s.db=u
u=new O.c1()
u.sbe(H.d([],t))
u.b=null
u.gu().h(0,new E.fT(s))
s.dx=u
s.sfC(H.d([],[O.bB]))
u=s.dy;(u&&C.a).h(u,null)
s.sfw(new H.aE([P.n,A.c8]))},
ghJ:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gN(s)
u=t.db
u=t.z=s.R(0,u.gN(u))
s=u}return s},
dd:function(a){var u=this.dy,t=a==null?(u&&C.a).gbH(u):a;(u&&C.a).h(u,t)},
da:function(){var u=this.dy
if(u.length>1)u.pop()},
sfC:function(a){this.dy=H.m(a,"$ib",[O.bB],"$ab")},
sfw:function(a){this.fr=H.m(a,"$iK",[P.n,A.c8],"$aK")}}
E.fR.prototype={
$1:function(a){var u
H.p(a,"$iC")
u=this.a
u.ch=u.z=null},
$S:10}
E.fS.prototype={
$1:function(a){var u
H.p(a,"$iC")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.fT.prototype={
$1:function(a){var u
H.p(a,"$iC")
u=this.a
u.cx=u.ch=null},
$S:10}
E.du.prototype={
c2:function(a){H.p(a,"$iC")
this.df()},
c1:function(){return this.c2(null)},
ghn:function(){var u,t=this,s=Date.now(),r=C.h.U(P.iZ(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.b9(s,!1)
return u/r},
cs:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.R()
if(typeof r!=="number")return H.bn(r)
u=C.i.bF(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.R()
t=C.i.bF(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jT(C.l,s.ghN())}},
df:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.ho(this),{func:1,ret:-1,args:[P.a2]})
C.v.ea(u)
C.v.ff(u,W.kb(t,P.a2))}},
hL:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cs()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.b9(r,!1)
s.y=P.iZ(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.ak()
r=s.db
C.a.sk(r.a,0)
r.ak()
r=s.dx
C.a.sk(r.a,0)
r.ak()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.au(p.e)}}catch(q){u=H.bo(q)
t=H.bI(q)
P.jr("Error: "+H.k(u))
P.jr("Stack: "+H.k(t))
throw H.f(u)}}}
E.ho.prototype={
$1:function(a){var u
H.lX(a)
u=this.a
if(u.ch){u.ch=!1
u.hL()}},
$S:35}
Z.dC.prototype={$im5:1}
Z.cJ.prototype={
af:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bo(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.k(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.k(u.e)+"]"}}
Z.i_.prototype={$im6:1}
Z.cK.prototype={
aq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
af:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].af(a)},
aL:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
au:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.n],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aj(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")},
sei:function(a){this.b=H.m(a,"$ib",[Z.be],"$ab")},
$imd:1}
Z.be.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.by(this.c)+"'")+"]"}}
Z.aQ.prototype={
gbU:function(a){var u=this.a,t=(u&$.b5().a)!==0?3:0
if((u&$.b4().a)!==0)t+=3
if((u&$.b3().a)!==0)t+=3
if((u&$.b6().a)!==0)t+=2
if((u&$.b7().a)!==0)t+=3
if((u&$.cD().a)!==0)t+=3
if((u&$.cE().a)!==0)t+=4
if((u&$.bL().a)!==0)++t
return(u&$.b2().a)!==0?t+4:t},
h9:function(a){var u,t=$.b5(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b2()
if((s&t.a)!==0)if(u===a)return t
return $.kF()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aQ))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.n]),t=this.a
if((t&$.b5().a)!==0)C.a.h(u,"Pos")
if((t&$.b4().a)!==0)C.a.h(u,"Norm")
if((t&$.b3().a)!==0)C.a.h(u,"Binm")
if((t&$.b6().a)!==0)C.a.h(u,"Txt2D")
if((t&$.b7().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cD().a)!==0)C.a.h(u,"Clr3")
if((t&$.cE().a)!==0)C.a.h(u,"Clr4")
if((t&$.bL().a)!==0)C.a.h(u,"Weight")
if((t&$.b2().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.eI.prototype={}
D.bt.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.C]}
H.l(b,u)
if(this.a==null)this.sa5(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
A:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[D.C]})
u=s.a
u=u==null?null:C.a.ah(u,b)
if(u===!0){u=s.a
t=(u&&C.a).A(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ah(u,b)
if(u===!0){u=s.b
t=(u&&C.a).A(u,b)||t}return t},
L:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.C()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.H(P.j5(u,!0,{func:1,ret:-1,args:[D.C]}),new D.eY(q))
u=r.b
if(u!=null){r.say(H.d([],[{func:1,ret:-1,args:[D.C]}]))
C.a.H(u,new D.eZ(q))}return!0},
cF:function(){return this.L(null)},
a8:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.L(u)}}},
sa5:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")},
say:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")}}
D.eY.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.eZ.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.C.prototype={}
D.bY.prototype={}
D.bZ.prototype={}
D.P.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.cL.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cL))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.d1.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d1))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.fd.prototype={
hG:function(a){this.d.h(0,a.a)
return!1},
hC:function(a){this.d.A(0,a.a)
return!1},
sfa:function(a){this.d=H.m(a,"$ijP",[P.y],"$ajP")}}
X.fk.prototype={
bL:function(a,b){this.r=a.a
return!1},
aG:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dw()
if(typeof u!=="number")return u.ds()
this.r=(u&~t)>>>0
return!1},
aF:function(a,b){return!1},
hH:function(a){return!1},
eO:function(a,b,c){return}}
X.c2.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.c2))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.I(this.b)?"Alt+":""
return u+(H.I(this.c)?"Shift+":"")}}
X.fB.prototype={
bL:function(a,b){this.f=a.a
return!1},
aG:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.dw()
if(typeof u!=="number")return u.ds()
this.f=(u&~t)>>>0
return!1},
aF:function(a,b){return!1},
hI:function(a,b){return!1}}
X.hr.prototype={
hF:function(a){H.m(a,"$ib",[V.ae],"$ab")
return!1},
hD:function(a){H.m(a,"$ib",[V.ae],"$ab")
return!1},
hE:function(a){H.m(a,"$ib",[V.ae],"$ab")
return!1}}
X.dB.prototype={
ce:function(a){var u=a.keyCode,t=H.I(a.ctrlKey)||H.I(a.metaKey)
return new X.d1(u,new X.c2(t,a.altKey,a.shiftKey))},
ao:function(a){if(!H.I(a.ctrlKey))H.I(a.metaKey)
a.shiftKey},
bo:function(a){if(!H.I(a.ctrlKey))H.I(a.metaKey)
a.shiftKey},
ae:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.V()
u=t.top
if(typeof r!=="number")return r.V()
return new V.ae(s-q,r-u)},
az:function(a){return new V.b0(a.movementX,a.movementY)},
bj:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.ae])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
q=C.i.a2(r.pageX)
C.i.a2(r.pageY)
p=o.left
C.i.a2(r.pageX)
C.a.h(n,new V.ae(q-p,C.i.a2(r.pageY)-o.top))}return n},
ab:function(a){var u=a.buttons,t=H.I(a.ctrlKey)||H.I(a.metaKey)
return new X.cL(u,new X.c2(t,a.altKey,a.shiftKey))},
bf:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.V()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.V()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eI:function(a){this.f=!0},
ew:function(a){this.f=!1},
eC:function(a){H.p(a,"$ia1")
if(H.I(this.f)&&this.bf(a))a.preventDefault()},
eM:function(a){var u
H.p(a,"$iaF")
if(!H.I(this.f))return
u=this.ce(a)
this.b.hG(u)},
eK:function(a){var u
H.p(a,"$iaF")
if(!H.I(this.f))return
u=this.ce(a)
this.b.hC(u)},
eQ:function(a){var u,t,s,r,q=this
H.p(a,"$ia1")
u=q.a
u.focus()
q.f=!0
q.ao(a)
if(H.I(q.x)){t=q.ab(a)
s=q.az(a)
if(q.d.bL(t,s))a.preventDefault()
return}if(H.I(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ab(a)
r=q.ae(a)
if(q.c.bL(t,r))a.preventDefault()},
eU:function(a){var u,t,s,r=this
H.p(a,"$ia1")
r.ao(a)
u=r.ab(a)
if(H.I(r.x)){t=r.az(a)
if(r.d.aG(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ae(a)
if(r.c.aG(u,s))a.preventDefault()},
eG:function(a){var u,t,s,r=this
H.p(a,"$ia1")
if(!r.bf(a)){r.ao(a)
u=r.ab(a)
if(H.I(r.x)){t=r.az(a)
if(r.d.aG(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ae(a)
if(r.c.aG(u,s))a.preventDefault()}},
eS:function(a){var u,t,s,r=this
H.p(a,"$ia1")
r.ao(a)
u=r.ab(a)
if(H.I(r.x)){t=r.az(a)
if(r.d.aF(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ae(a)
if(r.c.aF(u,s))a.preventDefault()},
eE:function(a){var u,t,s,r=this
H.p(a,"$ia1")
if(!r.bf(a)){r.ao(a)
u=r.ab(a)
if(H.I(r.x)){t=r.az(a)
if(r.d.aF(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ae(a)
if(r.c.aF(u,s))a.preventDefault()}},
eW:function(a){var u,t,s=this
H.p(a,"$iaR")
s.ao(a)
u=new V.b0((a&&C.u).ghh(a),C.u.ghi(a)).D(0,180)
if(H.I(s.x)){if(s.d.hH(u))a.preventDefault()
return}if(H.I(s.r))return
t=s.ae(a)
if(s.c.hI(u,t))a.preventDefault()},
eY:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ab(s.y)
t=s.ae(s.y)
s.d.eO(u,t,r)}},
f8:function(a){var u,t=this
H.p(a,"$iat")
t.a.focus()
t.f=!0
t.bo(a)
u=t.bj(a)
if(t.e.hF(u))a.preventDefault()},
f4:function(a){var u
H.p(a,"$iat")
this.bo(a)
u=this.bj(a)
if(this.e.hD(u))a.preventDefault()},
f6:function(a){var u
H.p(a,"$iat")
this.bo(a)
u=this.bj(a)
if(this.e.hE(u))a.preventDefault()},
seb:function(a){this.z=H.m(a,"$ib",[[P.ca,P.L]],"$ab")}}
D.ba.prototype={
a9:function(a){var u
H.p(a,"$iC")
u=this.d
if(u!=null)u.L(a)},
dL:function(){return this.a9(null)},
$iW:1,
$iaX:1}
D.W.prototype={$iaX:1}
D.d2.prototype={
a9:function(a){var u=this.Q
if(u!=null)u.L(a)},
cn:function(a){var u
H.p(a,"$iC")
u=this.ch
if(u!=null)u.L(a)},
eN:function(){return this.cn(null)},
f0:function(a){var u,t,s
H.m(a,"$ih",[D.W],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.e5(s))return!1}return!0},
ep:function(a,b){var u,t,s,r,q,p,o,n=D.W
H.m(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gcm(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=H.p(b[q],"$iW")
if(p instanceof D.ba)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bt()
o.sa5(null)
o.say(null)
o.c=null
o.d=0
p.d=o}H.l(t,s)
if(o.a==null)o.sa5(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bY([n])
n.b=!0
this.a9(n)},
f2:function(a,b){var u,t,s,r=D.W
H.m(b,"$ih",[r],"$ah")
for(u=b.gM(b),t=this.gcm();u.v();){s=u.gG(u)
C.a.A(this.e,s)
s.gu().A(0,t)}r=new D.bZ([r])
r.b=!0
this.a9(r)},
e5:function(a){var u=C.a.ah(this.e,a)
return u},
se9:function(a){this.e=H.m(a,"$ib",[D.ba],"$ab")},
sf9:function(a){this.f=H.m(a,"$ib",[D.dd],"$ab")},
sfA:function(a){this.r=H.m(a,"$ib",[D.dm],"$ab")},
sfH:function(a){this.x=H.m(a,"$ib",[D.dr],"$ab")},
sfI:function(a){this.y=H.m(a,"$ib",[D.ds],"$ab")},
sfJ:function(a){this.z=H.m(a,"$ib",[D.dt],"$ab")},
$ah:function(){return[D.W]},
$aV:function(){return[D.W]}}
D.dd.prototype={$iW:1,$iaX:1}
D.dm.prototype={$iW:1,$iaX:1}
D.dr.prototype={$iW:1,$iaX:1}
D.ds.prototype={$iW:1,$iaX:1}
D.dt.prototype={$iW:1,$iaX:1}
V.Z.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.br.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.br))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.eX.prototype={}
V.d7.prototype={
a_:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.w])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d7))return!1
u=b.a
t=$.J().a
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
i:function(a){var u,t,s,r,q=this,p=[P.w],o=V.bH(H.d([q.a,q.d,q.r],p),3,0),n=V.bH(H.d([q.b,q.e,q.x],p),3,0),m=V.bH(H.d([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.e(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.e(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.e(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.e(o,1)
r=" "+o[1]+", "
if(1>=t)return H.e(n,1)
r=r+n[1]+", "
if(1>=s)return H.e(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.e(o,2)
p=" "+o[2]+", "
if(2>=t)return H.e(n,2)
p=p+n[2]+", "
if(2>=s)return H.e(m,2)
return r+(p+m[2]+"]")}}
V.a8.prototype={
a_:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.w])
return t},
d0:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.J().a)return V.j6()
u=1/b1
t=-n
s=-a0
return V.aW((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
R:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aW(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bQ:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.N(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aK:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.aq(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.J().a
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
i:function(a){return this.B()},
t:function(a){var u,t,s,r,q,p=this,o=[P.w],n=V.bH(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.bH(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.bH(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.bH(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
B:function(){return this.t("")}}
V.ae.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.aq.prototype={
V:function(a,b){return new V.aq(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aq))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.df.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.df))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.di.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.di))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.b0.prototype={
bI:function(a){var u,t=this.a
if(typeof t!=="number")return t.R()
u=this.b
if(typeof u!=="number")return u.R()
return Math.sqrt(t*t+u*u)},
D:function(a,b){var u,t
if(Math.abs(b-0)<$.J().a){u=$.jY
return u==null?$.jY=new V.b0(0,0):u}u=this.a
if(typeof u!=="number")return u.D()
t=this.b
if(typeof t!=="number")return t.D()
return new V.b0(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b0))return!1
u=b.a
t=this.a
s=$.J()
s.toString
if(typeof u!=="number")return u.V()
if(typeof t!=="number")return H.bn(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.V()
if(typeof t!=="number")return H.bn(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.N.prototype={
bI:function(a){return Math.sqrt(this.J(this))},
J:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bJ:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.N(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aA:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.N(u*t-s*r,s*q-p*t,p*r-u*q)},
I:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
aw:function(a){return new V.N(-this.a,-this.b,-this.c)},
D:function(a,b){if(Math.abs(b-0)<$.J().a)return V.cl()
return new V.N(this.a/b,this.b/b,this.c/b)},
d1:function(){var u=$.J().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
U.cN.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.ap():u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cN))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.t("          ")}}
U.bw.prototype={}
U.dj.prototype={
gu:function(){var u=this.y
return u==null?this.y=D.ap():u},
an:function(a){var u=this.y
if(u!=null)u.L(a)},
sdr:function(a){var u
a=V.js(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.J().a)){this.a=a
u=new D.P("yaw",u,a,[P.w])
u.b=!0
this.an(u)}},
sd9:function(a,b){var u
b=V.js(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.J().a)){this.b=b
u=new D.P("pitch",u,b,[P.w])
u.b=!0
this.an(u)}},
sdg:function(a){var u
a=V.js(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.J().a)){this.c=a
u=new D.P("roll",u,a,[P.w])
u.b=!0
this.an(u)}},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dj))return!1
u=r.a
t=b.a
s=$.J().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+"], ["+V.G(u.d,3,0)+", "+V.G(u.e,3,0)+", "+V.G(u.f,3,0)+"]"}}
M.cT.prototype={
aa:function(a){var u
H.p(a,"$iC")
u=this.y
if(u!=null)u.L(a)},
dN:function(){return this.aa(null)},
ey:function(a,b){var u,t,s,r,q,p,o,n=E.ab
H.m(b,"$ih",[n],"$ah")
for(u=b.length,t=this.ga4(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bt()
o.sa5(null)
o.say(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa5(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bY([n])
n.b=!0
this.aa(n)},
eA:function(a,b){var u,t,s=E.ab
H.m(b,"$ih",[s],"$ah")
for(u=b.gM(b),t=this.ga4();u.v();)u.gG(u).gu().A(0,t)
s=new D.bZ([s])
s.b=!0
this.aa(s)},
sdi:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().A(0,t.ga4())
u=t.d
t.d=a
if(a!=null)a.gu().h(0,t.ga4())
s=new D.P("technique",u,t.d,[O.bB])
s.b=!0
t.aa(s)}},
gu:function(){var u=this.y
return u==null?this.y=D.ap():u},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dd(f.d)
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
if(typeof s!=="number")return H.bn(s)
o=C.i.a2(p*s)
p=q.b
if(typeof r!=="number")return H.bn(r)
n=C.i.a2(p*r)
p=C.i.a2(q.c*s)
a.c=p
q=C.i.a2(q.d*r)
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
i=V.aW(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dc(i)
t=$.jH
if(t==null){t=V.jJ()
q=V.k1()
p=$.jZ
t=V.jD(t,q,p==null?$.jZ=new V.N(0,0,-1):p)
$.jH=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.R(0,h)}a.db.dc(h)
u=f.d
if(u!=null)u.b6(0,a)
for(u=f.e.a,u=new J.ak(u,u.length,[H.x(u,0)]);u.v();)u.d.b6(0,a)
for(u=f.e.a,u=new J.ak(u,u.length,[H.x(u,0)]);u.v();)u.d.au(a)
f.b.toString
a.cy.bM()
a.db.bM()
f.c.toString
a.da()},
sdM:function(a,b){this.e=H.m(b,"$iV",[E.ab],"$aV")},
$imb:1}
A.cG.prototype={}
A.eA.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hk:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hj:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.fp.prototype={
dF:function(d2,d3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="Required uniform value, ",a9=", was not defined or used in shader.",b0="emissionTxt",b1="nullEmissionTxt",b2="ambientTxt",b3="nullAmbientTxt",b4="diffuseTxt",b5="nullDiffuseTxt",b6="invDiffuseTxt",b7="nullInvDiffuseTxt",b8="specularTxt",b9="nullSpecularTxt",c0="nullBumpTxt",c1="reflectTxt",c2="nullReflectTxt",c3="refractTxt",c4="nullRefractTxt",c5="alphaTxt",c6="nullAlphaTxt",c7="uniform mat4 objMat;\n",c8="   if(nullAlphaTxt > 0) return alpha;\n",c9="   if (a <= 0.000001) discard;\n",d0="precision mediump float;\n\n",d1="precision mediump float;\n\nvarying vec3 normalVec;\n"
a7.z=d2
u=new P.bh("")
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
d2.fN(u)
d2.fU(u)
d2.fO(u)
d2.h1(u)
d2.h2(u)
d2.fW(u)
d2.h6(u)
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
u=new P.bh("")
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
s.fR(u)
s.fM(u)
s.fP(u)
s.fS(u)
s.h_(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.fY(u)
s.fZ(u)}s.fV(u)
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
k=H.d([],[P.n])
if(s.b!==C.c)C.a.h(k,"ambient()")
if(s.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.q(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.fQ(u)
s.fX(u)
s.h0(u)
s.h3(u)
s.h4(u)
s.h5(u)
s.fT(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
q=q?u.a=m+"   vec3 norm = normal();\n":m
if(p)u.a=q+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.n])
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
i="vec4("+C.a.q(j," + ")+", alpha);"
s=u.a
s=u.a=(o?u.a=s+("   gl_FragColor = colorMat*"+i+"\n"):u.a=s+("   gl_FragColor = "+i+"\n"))+"}\n"
a7.c=n
a7.d=s.charCodeAt(0)==0?s:s
a7.e=a7.cf(n,35633)
a7.f=a7.cf(a7.d,35632)
s=a7.a
q=s.createProgram()
a7.r=q
s.attachShader(q,a7.e)
s.attachShader(a7.r,a7.f)
s.linkProgram(a7.r)
if(!H.I(H.kf(s.getProgramParameter(a7.r,35714)))){h=s.getProgramInfoLog(a7.r)
s.deleteProgram(a7.r)
H.t(P.r("Failed to link shader: "+H.k(h)))}a7.ft()
a7.fv()
a7.Q=a7.x.j(0,"posAttr")
a7.cx=a7.x.j(0,"normAttr")
a7.ch=a7.x.j(0,"binmAttr")
a7.cy=a7.x.j(0,"txt2DAttr")
a7.db=a7.x.j(0,"txtCubeAttr")
a7.dx=a7.x.j(0,"bendAttr")
if(d2.fr)a7.id=H.i(a7.y.l(0,"invViewMat"),"$iag")
if(t)a7.dy=H.i(a7.y.l(0,"objMat"),"$iag")
if(r)a7.fr=H.i(a7.y.l(0,"viewObjMat"),"$iag")
a7.fy=H.i(a7.y.l(0,"projViewObjMat"),"$iag")
if(d2.x2)a7.k1=H.i(a7.y.l(0,"txt2DMat"),"$icf")
if(d2.y1)a7.k2=H.i(a7.y.l(0,"txtCubeMat"),"$iag")
if(d2.y2)a7.k3=H.i(a7.y.l(0,"colorMat"),"$iag")
a7.se0(H.d([],[A.ag]))
t=d2.a7
if(t>0){a7.k4=H.p(a7.y.l(0,"bendMatCount"),"$iF")
for(g=0;g<t;++g){s=a7.r1
r=a7.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.r(a8+q+a9));(s&&C.a).h(s,H.i(f,"$iag"))}}t=d2.a
if(t!==C.c){a7.r2=H.i(a7.y.l(0,"emissionClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.d:a7.rx=H.i(a7.y.l(0,b0),"$ia9")
a7.x1=H.i(a7.y.l(0,b1),"$iF")
break
case C.e:a7.ry=H.i(a7.y.l(0,b0),"$iaa")
a7.x1=H.i(a7.y.l(0,b1),"$iF")
break}}t=d2.b
if(t!==C.c){a7.x2=H.i(a7.y.l(0,"ambientClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.d:a7.y1=H.i(a7.y.l(0,b2),"$ia9")
a7.a7=H.i(a7.y.l(0,b3),"$iF")
break
case C.e:a7.y2=H.i(a7.y.l(0,b2),"$iaa")
a7.a7=H.i(a7.y.l(0,b3),"$iF")
break}}t=d2.c
if(t!==C.c){a7.a1=H.i(a7.y.l(0,"diffuseClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.d:a7.aS=H.i(a7.y.l(0,b4),"$ia9")
a7.aT=H.i(a7.y.l(0,b5),"$iF")
break
case C.e:a7.cG=H.i(a7.y.l(0,b4),"$iaa")
a7.aT=H.i(a7.y.l(0,b5),"$iF")
break}}t=d2.d
if(t!==C.c){a7.aU=H.i(a7.y.l(0,"invDiffuseClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.d:a7.cH=H.i(a7.y.l(0,b6),"$ia9")
a7.aV=H.i(a7.y.l(0,b7),"$iF")
break
case C.e:a7.cI=H.i(a7.y.l(0,b6),"$iaa")
a7.aV=H.i(a7.y.l(0,b7),"$iF")
break}}t=d2.e
if(t!==C.c){a7.aY=H.i(a7.y.l(0,"shininess"),"$iS")
a7.aW=H.i(a7.y.l(0,"specularClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.d:a7.cJ=H.i(a7.y.l(0,b8),"$ia9")
a7.aX=H.i(a7.y.l(0,b9),"$iF")
break
case C.e:a7.cK=H.i(a7.y.l(0,b8),"$iaa")
a7.aX=H.i(a7.y.l(0,b9),"$iF")
break}}switch(d2.f){case C.c:break
case C.f:break
case C.d:a7.cL=H.i(a7.y.l(0,"bumpTxt"),"$ia9")
a7.aZ=H.i(a7.y.l(0,c0),"$iF")
break
case C.e:a7.cM=H.i(a7.y.l(0,"bumpTxt"),"$iaa")
a7.aZ=H.i(a7.y.l(0,c0),"$iF")
break}if(d2.dy){a7.cN=H.i(a7.y.l(0,"envSampler"),"$iaa")
a7.cO=H.i(a7.y.l(0,"nullEnvTxt"),"$iF")
t=d2.r
if(t!==C.c){a7.b_=H.i(a7.y.l(0,"reflectClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.d:a7.cP=H.i(a7.y.l(0,c1),"$ia9")
a7.b0=H.i(a7.y.l(0,c2),"$iF")
break
case C.e:a7.cQ=H.i(a7.y.l(0,c1),"$iaa")
a7.b0=H.i(a7.y.l(0,c2),"$iF")
break}}t=d2.x
if(t!==C.c){a7.b1=H.i(a7.y.l(0,"refraction"),"$iS")
a7.b2=H.i(a7.y.l(0,"refractClr"),"$iE")
switch(t){case C.c:break
case C.f:break
case C.d:a7.cR=H.i(a7.y.l(0,c3),"$ia9")
a7.b3=H.i(a7.y.l(0,c4),"$iF")
break
case C.e:a7.cS=H.i(a7.y.l(0,c3),"$iaa")
a7.b3=H.i(a7.y.l(0,c4),"$iF")
break}}}t=d2.y
if(t!==C.c){a7.b4=H.i(a7.y.l(0,"alpha"),"$iS")
switch(t){case C.c:break
case C.f:break
case C.d:a7.cT=H.i(a7.y.l(0,c5),"$ia9")
a7.b5=H.i(a7.y.l(0,c6),"$iF")
break
case C.e:a7.cU=H.i(a7.y.l(0,c5),"$iaa")
a7.b5=H.i(a7.y.l(0,c6),"$iF")
break}}a7.sdO(H.d([],[A.ce]))
a7.sdP(H.d([],[A.cg]))
a7.sdQ(H.d([],[A.ch]))
a7.sdR(H.d([],[A.ci]))
a7.sdS(H.d([],[A.cj]))
a7.sdT(H.d([],[A.ck]))
if(d2.k2){t=d2.z
if(t>0){a7.cV=H.p(a7.y.l(0,"dirLightCount"),"$iF")
for(g=0;g<t;++g){s=a7.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.i(f,"$iE")
s=a7.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.i(e,"$iE")
s=a7.bz;(s&&C.a).h(s,new A.ce(f,e))}}t=d2.Q
if(t>0){a7.cW=H.p(a7.y.l(0,"pntLightCount"),"$iF")
for(g=0;g<t;++g){s=a7.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.i(f,"$iE")
s=a7.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.i(e,"$iE")
s=a7.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r(a8+r+a9))
H.i(d,"$iE")
s=a7.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.t(P.r(a8+r+a9))
H.i(c,"$iS")
s=a7.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.t(P.r(a8+r+a9))
H.i(b,"$iS")
s=a7.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.t(P.r(a8+r+a9))
H.i(a,"$iS")
s=a7.bA;(s&&C.a).h(s,new A.cg(f,e,d,c,b,a))}}t=d2.ch
if(t>0){a7.cX=H.p(a7.y.l(0,"spotLightCount"),"$iF")
for(g=0;g<t;++g){s=a7.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.i(f,"$iE")
s=a7.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.i(e,"$iE")
s=a7.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.t(P.r(a8+r+a9))
H.i(d,"$iE")
s=a7.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r(a8+r+a9))
H.i(c,"$iE")
s=a7.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.t(P.r(a8+r+a9))
H.i(b,"$iS")
s=a7.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.t(P.r(a8+r+a9))
H.i(a,"$iS")
s=a7.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a8+r+a9))
H.i(a0,"$iS")
s=a7.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.t(P.r(a8+r+a9))
H.i(a1,"$iS")
s=a7.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.t(P.r(a8+r+a9))
H.i(a2,"$iS")
s=a7.bB;(s&&C.a).h(s,new A.ch(f,e,d,c,b,a,a0,a1,a2))}}t=d2.cx
if(t>0){a7.cY=H.p(a7.y.l(0,"txtDirLightCount"),"$iF")
for(g=0;g<t;++g){s=a7.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.i(f,"$iE")
s=a7.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.i(e,"$iE")
s=a7.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.t(P.r(a8+r+a9))
H.i(d,"$iE")
s=a7.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.t(P.r(a8+r+a9))
H.i(c,"$iE")
s=a7.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.t(P.r(a8+r+a9))
H.i(b,"$iE")
s=a7.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.r(a8+r+a9))
H.i(a,"$iF")
s=a7.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.t(P.r(a8+r+a9))
H.i(a0,"$ia9")
s=a7.bC;(s&&C.a).h(s,new A.ci(f,e,d,c,b,a0,a))}}t=d2.cy
if(t>0){a7.cZ=H.p(a7.y.l(0,"txtPntLightCount"),"$iF")
for(g=0;g<t;++g){s=a7.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.i(f,"$iE")
s=a7.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.i(e,"$iE")
s=a7.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.t(P.r(a8+r+a9))
H.i(d,"$icf")
s=a7.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r(a8+r+a9))
H.i(c,"$iE")
s=a7.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r(a8+r+a9))
H.i(b,"$iF")
s=a7.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.r(a8+r+a9))
H.i(a,"$iS")
s=a7.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a8+r+a9))
H.i(a0,"$iS")
s=a7.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.r(a8+r+a9))
H.i(a1,"$iS")
s=a7.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.t(P.r(a8+r+a9))
H.i(a2,"$iaa")
s=a7.bD;(s&&C.a).h(s,new A.cj(f,e,d,c,a2,b,a,a0,a1))}}t=d2.db
if(t>0){a7.d_=H.p(a7.y.l(0,"txtSpotLightCount"),"$iF")
for(g=0;g<t;++g){s=a7.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.i(f,"$iE")
s=a7.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.i(e,"$iE")
s=a7.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.t(P.r(a8+r+a9))
H.i(d,"$iE")
s=a7.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.t(P.r(a8+r+a9))
H.i(c,"$iE")
s=a7.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.t(P.r(a8+r+a9))
H.i(b,"$iE")
s=a7.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.r(a8+r+a9))
H.i(a,"$iF")
s=a7.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a8+r+a9))
H.i(a0,"$iE")
s=a7.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.r(a8+r+a9))
H.i(a1,"$iS")
s=a7.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.t(P.r(a8+r+a9))
H.i(a2,"$iS")
s=a7.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.t(P.r(a8+r+a9))
H.i(a3,"$iS")
s=a7.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.t(P.r(a8+r+a9))
H.i(a4,"$iS")
s=a7.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.t(P.r(a8+r+a9))
H.i(a5,"$iS")
s=a7.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.t(P.r(a8+r+a9))
H.i(a6,"$ia9")
s=a7.bE;(s&&C.a).h(s,new A.ck(f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
a0:function(a,b,c){if(c==null||!c.gW(c))C.b.P(b.a,b.d,1)
else{a.dz(c)
C.b.P(b.a,b.d,0)}},
X:function(a,b,c){C.b.P(b.a,b.d,1)},
se0:function(a){this.r1=H.m(a,"$ib",[A.ag],"$ab")},
sdO:function(a){this.bz=H.m(a,"$ib",[A.ce],"$ab")},
sdP:function(a){this.bA=H.m(a,"$ib",[A.cg],"$ab")},
sdQ:function(a){this.bB=H.m(a,"$ib",[A.ch],"$ab")},
sdR:function(a){this.bC=H.m(a,"$ib",[A.ci],"$ab")},
sdS:function(a){this.bD=H.m(a,"$ib",[A.cj],"$ab")},
sdT:function(a){this.bE=H.m(a,"$ib",[A.ck],"$ab")}}
A.fs.prototype={
fN:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.a7+"];\n"
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
fU:function(a){var u
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
fO:function(a){var u
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
h1:function(a){var u,t
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
h2:function(a){var u,t
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
fW:function(a){var u
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
h6:function(a){var u
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
ac:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.e(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.j.bV(c,1))+"Txt;\n")
if(b===C.d)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
fR:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.ac(a,s,"emission")
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
fM:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.ac(a,s,"ambient")
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
fP:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.ac(a,s,"diffuse")
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
fS:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.ac(a,s,"invDiffuse")
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
h_:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.ac(a,s,"specular")
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
fV:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
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
fY:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.ac(a,s,"reflect")
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
fZ:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.ac(a,s,"refract")
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
fQ:function(a){var u,t=this.z
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
fX:function(a){var u,t=this.Q
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
h0:function(a){var u,t=this.ch
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
h3:function(a){var u,t,s=this.cx
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
h4:function(a){var u,t,s=this.cy
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
h5:function(a){var u,t,s=this.db
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
fT:function(a){var u
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
i:function(a){return this.a1}}
A.ce.prototype={}
A.ci.prototype={}
A.cg.prototype={}
A.cj.prototype={}
A.ch.prototype={}
A.ck.prototype={}
A.c8.prototype={
dI:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cf:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.I(H.kf(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.r("Error compiling shader '"+H.k(s)+"': "+H.k(u)))}return s},
ft:function(){var u,t,s,r=this,q=H.d([],[A.cG]),p=r.a,o=H.a6(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.bn(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cG(p,t.name,s))}r.x=new A.eA(q)},
fv:function(){var u,t,s,r=this,q=H.d([],[A.dw]),p=r.a,o=H.a6(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.bn(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hg(t.type,t.size,t.name,s))}r.y=new A.hF(q)},
am:function(a,b,c){var u=this.a
if(a===1)return new A.F(u,b,c)
else return A.j9(u,this.r,b,a,c)},
e6:function(a,b,c){var u=this.a
if(a===1)return new A.a9(u,b,c)
else return A.j9(u,this.r,b,a,c)},
e7:function(a,b,c){var u=this.a
if(a===1)return new A.aa(u,b,c)
else return A.j9(u,this.r,b,a,c)},
aR:function(a,b){return new P.dL(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hg:function(a,b,c,d){var u=this
switch(a){case 5120:return u.am(b,c,d)
case 5121:return u.am(b,c,d)
case 5122:return u.am(b,c,d)
case 5123:return u.am(b,c,d)
case 5124:return u.am(b,c,d)
case 5125:return u.am(b,c,d)
case 5126:return new A.S(u.a,c,d)
case 35664:return new A.hA(u.a,c,d)
case 35665:return new A.E(u.a,c,d)
case 35666:return new A.hD(u.a,c,d)
case 35667:return new A.hB(u.a,c,d)
case 35668:return new A.hC(u.a,c,d)
case 35669:return new A.hE(u.a,c,d)
case 35674:return new A.hG(u.a,c,d)
case 35675:return new A.cf(u.a,c,d)
case 35676:return new A.ag(u.a,c,d)
case 35678:return u.e6(b,c,d)
case 35680:return u.e7(b,c,d)
case 35670:throw H.f(u.aR("BOOL",c))
case 35671:throw H.f(u.aR("BOOL_VEC2",c))
case 35672:throw H.f(u.aR("BOOL_VEC3",c))
case 35673:throw H.f(u.aR("BOOL_VEC4",c))
default:throw H.f(P.r("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.bs.prototype={
i:function(a){return this.b}}
A.dw.prototype={}
A.hF.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
l:function(a,b){var u=this.j(0,b)
if(u==null)throw H.f(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.B()},
B:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.F.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.hB.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.hC.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.hE.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.hz.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
sfK:function(a){H.m(a,"$ib",[P.y],"$ab")}}
A.S.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.hA.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.E.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.hD.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.hG.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.cf.prototype={
a3:function(a){var u=new Float32Array(H.cy(H.m(a,"$ib",[P.w],"$ab")))
C.b.dn(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.ag.prototype={
a3:function(a){var u=new Float32Array(H.cy(H.m(a,"$ib",[P.w],"$ab")))
C.b.dq(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.a9.prototype={
dz:function(a){var u=a.gW(a),t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.aa.prototype={
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.iE.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bJ(s.b,b).bJ(s.d.bJ(s.c,b),c)
s=new V.aq(r.a,r.b,r.c)
if(!J.U(a.f,s)){a.f=s
s=a.a
if(s!=null)s.S()}a.shT(r.D(0,Math.sqrt(r.J(r))))
s=1-b
u=1-c
u=new V.df(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.U(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.S()}},
$S:29}
F.a_.prototype={
aB:function(){var u=this
if(!u.gaC()){C.a.A(u.a.a.d.b,u)
u.a.a.S()}u.bl()
u.bm()
u.fd()},
fp:function(a){this.a=a
C.a.h(a.d.b,this)},
fq:function(a){this.b=a
C.a.h(a.d.c,this)},
fs:function(a){this.c=a
C.a.h(a.d.d,this)},
bl:function(){var u=this.a
if(u!=null){C.a.A(u.d.b,this)
this.a=null}},
bm:function(){var u=this.b
if(u!=null){C.a.A(u.d.c,this)
this.b=null}},
fd:function(){var u=this.c
if(u!=null){C.a.A(u.d.d,this)
this.c=null}},
gaC:function(){return this.a==null||this.b==null||this.c==null},
e_:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cl()
if(q!=null)s=s.I(0,q)
if(u!=null)s=s.I(0,u)
if(t!=null)s=s.I(0,t)
if(s.d1())return
return s.D(0,Math.sqrt(s.J(s)))},
e3:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.V(0,q)
r=new V.N(r.a,r.b,r.c)
s=r.D(0,Math.sqrt(r.J(r)))
r=t.V(0,q)
r=new V.N(r.a,r.b,r.c)
r=s.aA(r.D(0,Math.sqrt(r.J(r))))
return r.D(0,Math.sqrt(r.J(r)))},
bv:function(){var u,t=this
if(t.d!=null)return!0
u=t.e_()
if(u==null){u=t.e3()
if(u==null)return!1}t.d=u
t.a.a.S()
return!0},
dZ:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cl()
if(q!=null)s=s.I(0,q)
if(u!=null)s=s.I(0,u)
if(t!=null)s=s.I(0,t)
if(s.d1())return
return s.D(0,Math.sqrt(s.J(s)))},
e2:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.J().a){l=d.V(0,g)
l=new V.N(l.a,l.b,l.c)
q=l.D(0,Math.sqrt(l.J(l)))
if(s.a-t.a<0)q=q.aw(0)}else{p=(l-u.b)/r
l=d.V(0,g)
l=new V.aq(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).V(0,j)
l=new V.N(l.a,l.b,l.c)
q=l.D(0,Math.sqrt(l.J(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.aw(0)}l=n.d
if(l!=null){o=l.D(0,Math.sqrt(l.J(l)))
l=o.aA(q)
l=l.D(0,Math.sqrt(l.J(l))).aA(o)
q=l.D(0,Math.sqrt(l.J(l)))}return q},
bt:function(){var u,t=this
if(t.e!=null)return!0
u=t.dZ()
if(u==null){u=t.e2()
if(u==null)return!1}t.e=u
t.a.a.S()
return!0},
ghd:function(a){var u=this
if(J.U(u.a,u.b))return!0
if(J.U(u.b,u.c))return!0
if(J.U(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
t:function(a){var u,t,s=this
if(s.gaC())return a+"disposed"
u=a+C.j.Z(J.aj(s.a.e),0)+", "+C.j.Z(J.aj(s.b.e),0)+", "+C.j.Z(J.aj(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
B:function(){return this.t("")}}
F.f_.prototype={}
F.h4.prototype={
aD:function(a,b,c){var u,t=b.a
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
if(t==u.e){t=b.c
t.a.a.n()
t=t.e
u=c.c
u.a.a.n()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.c
u.a.a.n()
if(t==u.e){t=b.c
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.n()
t=t.e
u=c.c
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
if(t==u.e){t=b.c
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.aU.prototype={
aB:function(){var u=this
if(!u.gaC()){C.a.A(u.a.a.c.b,u)
u.a.a.S()}u.bl()
u.bm()},
bl:function(){var u=this.a
if(u!=null){C.a.A(u.c.b,this)
this.a=null}},
bm:function(){var u=this.b
if(u!=null){C.a.A(u.c.c,this)
this.b=null}},
gaC:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
t:function(a){if(this.gaC())return a+"disposed"
return a+C.j.Z(J.aj(this.a.e),0)+", "+C.j.Z(J.aj(this.b.e),0)},
B:function(){return this.t("")}}
F.ff.prototype={}
F.hy.prototype={
aD:function(a,b,c){var u,t=b.a
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
return t==u.e}else{t=b.a
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
return t==u.e}else return!1}}}
F.bg.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
t:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.Z(J.aj(u.e),0)},
B:function(){return this.t("")}}
F.dl.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.ap():u},
bK:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.n()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.z)(g),++s){r=g[s]
h.a.h(0,r.hf())}h.a.n()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.z)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bg()
if(n.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.L(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.z)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.n()
p=p.e
if(typeof p!=="number")return p.I()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
p=new F.aU()
o=l.a
if(o==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
p.a=l
C.a.h(l.c.b,p)
p.b=k
C.a.h(k.c.c,p)
C.a.h(p.a.a.c.b,p)
p=p.a.a.e
if(p!=null)p.L(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.z)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.n()
p=p.e
if(typeof p!=="number")return p.I()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cV(l,k,i)}g=h.e
if(g!=null)g.a8(0)},
ap:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ap()||!1
if(!t.a.ap())u=!1
s=t.e
if(s!=null)s.a8(0)
return u},
hu:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.x(o,0)])
for(o=[F.ai];u.length!==0;){t=C.a.ghm(u)
C.a.de(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.aD(0,t,q)){C.a.h(s,q)
C.a.de(u,r)}}if(s.length>1)b.bK(s)}}p.a.n()
p.c.bN()
p.d.bN()
p.b.hK()
p.c.bO(new F.hy())
p.d.bO(new F.h4())
o=p.e
if(o!=null)o.a8(0)},
hb:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b5()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.b4().a)!==0)++s
if((t&$.b3().a)!==0)++s
if((t&$.b6().a)!==0)++s
if((t&$.b7().a)!==0)++s
if((t&$.cD().a)!==0)++s
if((t&$.cE().a)!==0)++s
if((t&$.bL().a)!==0)++s
if((t&$.b2().a)!==0)++s
r=a3.gbU(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.w
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.cJ])
for(n=0,m=0;m<s;++m){l=a3.h9(m)
k=l.gbU(l)
C.a.T(o,m,new Z.cJ(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].hs(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.T(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cy(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cK(new Z.dC(a0,f),o,a3)
e.sei(H.d([],[Z.be]))
if(a.b.b.length!==0){t=P.y
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.n()
C.a.h(d,c.e)}b=Z.ja(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.be(0,d.length,b))}if(a.c.b.length!==0){t=P.y
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.n()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.n()
C.a.h(d,c.e)}b=Z.ja(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.be(1,d.length,b))}if(a.d.b.length!==0){t=P.y
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.n()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.n()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.n()
C.a.h(d,c.e)}b=Z.ja(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.be(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.n])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.t(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.t(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.t(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.t(t))}return C.a.q(s,"\n")},
S:function(){var u=this.e
if(u!=null)u.L(null)},
$imc:1}
F.fZ.prototype={
h8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ai],"$ab")
u=H.d([],[F.a_])
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
C.a.h(u,F.cV(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cV(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cV(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cV(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
bO:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aD(0,p,n)){p.aB()
break}}}}},
bN:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.ghd(s)
if(t)s.aB()}},
ap:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].bv())s=!1
return s},
bu:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].bt())s=!1
return s},
i:function(a){return this.B()},
t:function(a){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].t(a))
return C.a.q(r,"\n")},
B:function(){return this.t("")},
sec:function(a){this.b=H.m(a,"$ib",[F.a_],"$ab")}}
F.h_.prototype={
gk:function(a){return this.b.length},
bO:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aD(0,p,n)){p.aB()
break}}}}},
bN:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.U(s.a,s.b)
if(t)s.aB()}},
i:function(a){return this.B()},
t:function(a){var u,t,s=H.d([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].t(a+(""+u+". ")))}return C.a.q(s,"\n")},
B:function(){return this.t("")},
sej:function(a){this.b=H.m(a,"$ib",[F.aU],"$ab")}}
F.h0.prototype={
gk:function(a){return this.b.length},
hK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.A(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.L(null)}s=t.a
if(s!=null){C.a.A(s.b.b,t)
t.a=null}}}},
i:function(a){return this.B()},
t:function(a){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].t(a))
return C.a.q(r,"\n")},
B:function(){return this.t("")},
sbi:function(a){this.b=H.m(a,"$ib",[F.bg],"$ab")}}
F.ai.prototype={
bx:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.k2(u.cx,r,o,t,s,q,p,a,n)},
hf:function(){return this.bx(null)},
shT:function(a){var u
if(!J.U(this.z,a)){this.z=a
u=this.a
if(u!=null)u.S()}},
hs:function(a){var u,t,s=this
if(a.p(0,$.b5())){u=s.f
t=[P.w]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.b4())){u=s.r
t=[P.w]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.b3())){u=s.x
t=[P.w]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.b6())){u=s.y
t=[P.w]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.p(0,$.b7())){u=s.z
t=[P.w]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.cD())){u=s.Q
t=[P.w]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.cE())){u=s.Q
t=[P.w]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bL()))return H.d([s.ch],[P.w])
else if(a.p(0,$.b2())){u=s.cx
t=[P.w]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.w])},
bv:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cl()
t.d.H(0,new F.hY(s))
s=s.a
t.r=s.D(0,Math.sqrt(s.J(s)))
s=t.a
if(s!=null){s.S()
s=t.a.e
if(s!=null)s.a8(0)}return!0},
bt:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cl()
t.d.H(0,new F.hX(s))
s=s.a
t.x=s.D(0,Math.sqrt(s.J(s)))
s=t.a
if(s!=null){s.S()
s=t.a.e
if(s!=null)s.a8(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
t:function(a){var u,t,s=this,r="-",q=H.d([],[P.n])
C.a.h(q,C.j.Z(J.aj(s.e),0))
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
C.a.h(q,V.G(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.q(q,", ")
return a+"{"+t+"}"},
B:function(){return this.t("")}}
F.hY.prototype={
$1:function(a){var u,t
H.p(a,"$ia_")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.I(0,u)}},
$S:5}
F.hX.prototype={
$1:function(a){var u,t
H.p(a,"$ia_")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.I(0,u)}},
$S:5}
F.hO.prototype={
n:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.S()
return!0},
cz:function(a,b){var u=null,t=F.k2(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gk:function(a){return this.c.length},
ap:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].bv()
return!0},
bu:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].bt()
return!0},
hc:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.D(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.L(null)}}}}return!0},
i:function(a){return this.B()},
t:function(a){var u,t,s,r
this.n()
u=H.d([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].t(a))
return C.a.q(u,"\n")},
B:function(){return this.t("")},
sfL:function(a){this.c=H.m(a,"$ib",[F.ai],"$ab")}}
F.hP.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.e(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.e(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.e(t,b)
return t[b]},
H:function(a,b){var u=this
H.l(b,{func:1,ret:-1,args:[F.a_]})
C.a.H(u.b,b)
C.a.H(u.c,new F.hQ(u,b))
C.a.H(u.d,new F.hR(u,b))},
i:function(a){return this.B()},
B:function(){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].t(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].t(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].t(""))
return C.a.q(r,"\n")},
sed:function(a){this.b=H.m(a,"$ib",[F.a_],"$ab")},
see:function(a){this.c=H.m(a,"$ib",[F.a_],"$ab")},
sef:function(a){this.d=H.m(a,"$ib",[F.a_],"$ab")}}
F.hQ.prototype={
$1:function(a){H.p(a,"$ia_")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:5}
F.hR.prototype={
$1:function(a){var u
H.p(a,"$ia_")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
$S:5}
F.hS.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.B()},
B:function(){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].t(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].t(""))
return C.a.q(r,"\n")},
sek:function(a){this.b=H.m(a,"$ib",[F.aU],"$ab")},
sel:function(a){this.c=H.m(a,"$ib",[F.aU],"$ab")}}
F.hU.prototype={}
F.hT.prototype={
aD:function(a,b,c){return J.U(b.f,c.f)}}
F.hV.prototype={}
F.fI.prototype={
bK:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.ai],"$ab")
u=V.cl()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.N(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.D(0,Math.sqrt(u.J(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.D(0,Math.sqrt(o*o+n*n+m*m))}if(!J.U(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.L(null)}}}return}}
F.hW.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.B()},
B:function(){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)C.a.h(r,u[s].t(""))
return C.a.q(r,"\n")},
sbi:function(a){this.b=H.m(a,"$ib",[F.bg],"$ab")}}
O.d6.prototype={
gu:function(){var u=this.dy
return u==null?this.dy=D.ap():u},
O:function(a){var u
H.p(a,"$iC")
u=this.dy
if(u!=null)u.L(a)},
b8:function(){return this.O(null)},
cr:function(a){H.p(a,"$iC")
this.a=null
this.O(a)},
fh:function(){return this.cr(null)},
er:function(a,b){var u=V.a8
H.m(b,"$ih",[u],"$ah")
u=new D.bY([u])
u.b=!0
this.O(u)},
eu:function(a,b){var u=V.a8
H.m(b,"$ih",[u],"$ah")
u=new D.bZ([u])
u.b=!0
this.O(u)},
cc:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.h.U(a1.e.length+3,4)*4,a3=C.h.U(a1.f.length+3,4)*4,a4=C.h.U(a1.r.length+3,4)*4,a5=C.h.U(a1.x.length+3,4)*4,a6=C.h.U(a1.y.length+3,4)*4,a7=C.h.U(a1.z.length+3,4)*4,a8=C.h.U(a0.e.a.length+3,4)*4
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
a=$.b5()
if(h){j=$.b4()
a=new Z.aQ(a.a|j.a)}if(g){j=$.b3()
a=new Z.aQ(a.a|j.a)}if(f){j=$.b6()
a=new Z.aQ(a.a|j.a)}if(e){j=$.b7()
a=new Z.aQ(a.a|j.a)}if(c){j=$.b2()
a=new Z.aQ(a.a|j.a)}return new A.fs(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
K:function(a,b){H.m(a,"$ib",[T.cb],"$ab")
if(b!=null)if(!C.a.ah(a,b)){b.a=a.length
C.a.h(a,b)}},
b6:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ak(u,u.length,[H.x(u,0)]);u.v();){t=u.d
t.toString
s=$.hN
if(s==null)s=$.hN=new V.N(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.bQ(s)}}},
hM:function(a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4==null){a4=a3.cc()
u=a5.fr.j(0,a4.a1)
if(u==null){u=A.l1(a4,a5.a)
t=u.b
if(t.length===0)H.t(P.r("May not cache a shader with no name."))
if(a5.fr.cD(0,t))H.t(P.r('Shader cache already contains a shader by the name "'+t+'".'))
a5.fr.T(0,t,u)}a4=a3.a=u
a6.e=null}s=a4.z
r=s.aS
a4=a6.e
if(!(a4 instanceof Z.cK))a4=a6.e=null
if(a4==null||!a4.d.p(0,r)){a4=s.r1
if(a4)a6.d.ap()
q=s.r2
if(q){p=a6.d
o=p.e
if(o!=null)++o.d
p.d.bu()
p.a.bu()
p=p.e
if(p!=null)p.a8(0)}p=s.ry
if(p){o=a6.d
n=o.e
if(n!=null)++n.d
o.a.hc()
o=o.e
if(o!=null)o.a8(0)}m=a6.d.hb(new Z.i_(a5.a),r)
m.aq($.b5()).e=a3.a.Q.c
if(a4)m.aq($.b4()).e=a3.a.cx.c
if(q)m.aq($.b3()).e=a3.a.ch.c
if(s.rx)m.aq($.b6()).e=a3.a.cy.c
if(p)m.aq($.b7()).e=a3.a.db.c
if(s.x1)m.aq($.b2()).e=a3.a.dx.c
a6.e=m}a4=T.cb
l=H.d([],[a4])
q=a3.a
p=a5.a
p.useProgram(q.r)
q.x.hk()
if(s.fx){q=a3.a
o=a5.dx
o=o.gN(o)
q=q.dy
q.toString
q.a3(o.a_(0,!0))}if(s.fy){q=a3.a
o=a5.cx
if(o==null){o=a5.db
o=o.gN(o)
n=a5.dx
n=a5.cx=o.R(0,n.gN(n))
o=n}q=q.fr
q.toString
q.a3(o.a_(0,!0))}q=a3.a
o=a5.ch
if(o==null){o=a5.ghJ()
n=a5.dx
n=a5.ch=o.R(0,n.gN(n))
o=n}q=q.fy
q.toString
q.a3(o.a_(0,!0))
if(s.x2){q=a3.a
o=a3.b
q=q.k1
q.toString
q.a3(C.m.a_(o,!0))}if(s.y1){q=a3.a
o=a3.c
q=q.k2
q.toString
q.a3(C.m.a_(o,!0))}if(s.y2){q=a3.a
o=a3.d
q=q.k3
q.toString
q.a3(C.m.a_(o,!0))}if(s.a7>0){k=a3.e.a.length
q=a3.a.k4
C.b.P(q.a,q.d,k)
for(q=[P.w],j=0;j<k;++j){o=a3.a
n=a3.e.a
if(j>=n.length)return H.e(n,j)
n=n[j]
o.toString
H.p(n,"$ia8")
o=o.r1
if(j>=o.length)return H.e(o,j)
o=o[j]
i=new Float32Array(H.cy(H.m(n.a_(0,!0),"$ib",q,"$ab")))
C.b.dq(o.a,o.d,!1,i)}}switch(s.a){case C.c:break
case C.f:q=a3.a
o=a3.f.f
q=q.r2
q.toString
n=o.a
h=o.b
o=o.c
C.b.m(q.a,q.d,n,h,o)
break
case C.d:a3.K(l,a3.f.d)
q=a3.a
o=a3.f.d
q.a0(q.rx,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.b.m(o.a,o.d,n,h,q)
break
case C.e:a3.K(l,a3.f.e)
q=a3.a
o=a3.f.e
q.X(q.ry,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.b.m(o.a,o.d,n,h,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.f:q=a3.a
o=a3.r.f
q=q.x2
q.toString
n=o.a
h=o.b
o=o.c
C.b.m(q.a,q.d,n,h,o)
break
case C.d:a3.K(l,a3.r.d)
q=a3.a
o=a3.r.d
q.a0(q.y1,q.a7,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.b.m(o.a,o.d,n,h,q)
break
case C.e:a3.K(l,a3.r.e)
q=a3.a
o=a3.r.e
q.X(q.y2,q.a7,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.b.m(o.a,o.d,n,h,q)
break}switch(s.c){case C.c:break
case C.f:q=a3.a
o=a3.x.f
q=q.a1
q.toString
n=o.a
h=o.b
o=o.c
C.b.m(q.a,q.d,n,h,o)
break
case C.d:a3.K(l,a3.x.d)
q=a3.a
o=a3.x.d
q.a0(q.aS,q.aT,o)
o=a3.a
q=a3.x.f
o=o.a1
o.toString
n=q.a
h=q.b
q=q.c
C.b.m(o.a,o.d,n,h,q)
break
case C.e:a3.K(l,a3.x.e)
q=a3.a
o=a3.x.e
q.X(q.cG,q.aT,o)
o=a3.a
q=a3.x.f
o=o.a1
o.toString
n=q.a
h=q.b
q=q.c
C.b.m(o.a,o.d,n,h,q)
break}switch(s.d){case C.c:break
case C.f:q=a3.a
o=a3.y.f
q=q.aU
q.toString
n=o.a
h=o.b
o=o.c
C.b.m(q.a,q.d,n,h,o)
break
case C.d:a3.K(l,a3.y.d)
q=a3.a
o=a3.y.d
q.a0(q.cH,q.aV,o)
o=a3.a
q=a3.y.f
o=o.aU
o.toString
n=q.a
h=q.b
q=q.c
C.b.m(o.a,o.d,n,h,q)
break
case C.e:a3.K(l,a3.y.e)
q=a3.a
o=a3.y.e
q.X(q.cI,q.aV,o)
o=a3.a
q=a3.y.f
o=o.aU
o.toString
n=q.a
h=q.b
q=q.c
C.b.m(o.a,o.d,n,h,q)
break}switch(s.e){case C.c:break
case C.f:q=a3.a
o=a3.z.f
q=q.aW
q.toString
n=o.a
h=o.b
o=o.c
C.b.m(q.a,q.d,n,h,o)
o=a3.a
h=a3.z.ch
o=o.aY
C.b.C(o.a,o.d,h)
break
case C.d:a3.K(l,a3.z.d)
q=a3.a
o=a3.z.d
q.a0(q.cJ,q.aX,o)
o=a3.a
q=a3.z.f
o=o.aW
o.toString
n=q.a
h=q.b
q=q.c
C.b.m(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.aY
C.b.C(q.a,q.d,h)
break
case C.e:a3.K(l,a3.z.e)
q=a3.a
o=a3.z.e
q.X(q.cK,q.aX,o)
o=a3.a
q=a3.z.f
o=o.aW
o.toString
n=q.a
h=q.b
q=q.c
C.b.m(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.aY
C.b.C(q.a,q.d,h)
break}if(s.z>0){k=a3.dx.e.length
q=a3.a.cV
C.b.P(q.a,q.d,k)
q=a5.db
g=q.gN(q)
for(q=a3.dx.e,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.z)(q),++e){d=q[e]
n=a3.a.bz
if(f>=n.length)return H.e(n,f)
c=n[f]
n=g.bQ(d.a)
h=n.a
b=n.b
a=n.c
a=n.D(0,Math.sqrt(h*h+b*b+a*a))
b=c.b
h=a.a
n=a.b
a=a.c
C.b.m(b.a,b.d,h,n,a)
a=d.c
n=c.c
C.b.m(n.a,n.d,a.a,a.b,a.c);++f}}if(s.Q>0){k=a3.dx.f.length
q=a3.a.cW
C.b.P(q.a,q.d,k)
q=a5.db
g=q.gN(q)
for(q=a3.dx.f,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.z)(q),++e){d=q[e]
n=a3.a.bA
if(f>=n.length)return H.e(n,f)
c=n[f]
n=d.gaH(d)
h=c.b
C.b.m(h.a,h.d,n.a,n.b,n.c)
n=g.aK(d.gaH(d))
h=c.c
C.b.m(h.a,h.d,n.a,n.b,n.c)
n=d.gag(d)
h=c.d
C.b.m(h.a,h.d,n.a,n.b,n.c)
n=d.gbp()
h=c.e
C.b.C(h.a,h.d,n)
n=d.gbq()
h=c.f
C.b.C(h.a,h.d,n)
n=d.gbr()
h=c.r
C.b.C(h.a,h.d,n);++f}}if(s.ch>0){k=a3.dx.r.length
q=a3.a.cX
C.b.P(q.a,q.d,k)
q=a5.db
g=q.gN(q)
for(q=a3.dx.r,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.z)(q),++e){d=q[e]
n=a3.a.bB
if(f>=n.length)return H.e(n,f)
c=n[f]
n=d.gaH(d)
h=c.b
C.b.m(h.a,h.d,n.a,n.b,n.c)
n=d.gby(d).i3()
h=c.c
C.b.m(h.a,h.d,n.a,n.b,n.c)
n=g.aK(d.gaH(d))
h=c.d
C.b.m(h.a,h.d,n.a,n.b,n.c)
n=d.gag(d)
h=c.e
C.b.m(h.a,h.d,n.a,n.b,n.c)
n=d.gi1()
h=c.f
C.b.C(h.a,h.d,n)
n=d.gi0()
h=c.r
C.b.C(h.a,h.d,n)
n=d.gbp()
h=c.x
C.b.C(h.a,h.d,n)
n=d.gbq()
h=c.y
C.b.C(h.a,h.d,n)
n=d.gbr()
h=c.z
C.b.C(h.a,h.d,n);++f}}if(s.cx>0){k=a3.dx.x.length
q=a3.a.cY
C.b.P(q.a,q.d,k)
q=a5.db
g=q.gN(q)
for(q=a3.dx.x,o=q.length,n=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.z)(q),++e){d=q[e]
h=a3.a.bC
if(f>=h.length)return H.e(h,f)
c=h[f]
h=d.gaI()
H.m(l,"$ib",n,"$ab")
if(!C.a.ah(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gby(d)
b=c.d
C.b.m(b.a,b.d,h.a,h.b,h.c)
h=d.ghZ()
b=c.b
C.b.m(b.a,b.d,h.a,h.b,h.c)
h=d.ghO(d)
b=c.c
C.b.m(b.a,b.d,h.a,h.b,h.c)
h=g.bQ(d.gby(d))
b=h.a
a=h.b
a0=h.c
a0=h.D(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
h=a0.b
a0=a0.c
C.b.m(a.a,a.d,b,h,a0)
a0=d.gag(d)
h=c.f
C.b.m(h.a,h.d,a0.a,a0.b,a0.c)
a0=d.gaI()
h=a0.gW(a0)
if(!h){h=c.x
C.b.P(h.a,h.d,1)}else{h=c.r
b=a0.gW(a0)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,a0.a)
h=c.x
C.b.P(h.a,h.d,0)}++f}}if(s.cy>0){k=a3.dx.y.length
q=a3.a.cZ
C.b.P(q.a,q.d,k)
q=a5.db
g=q.gN(q)
for(q=a3.dx.y,o=q.length,n=[P.w],h=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.z)(q),++e){d=q[e]
b=a3.a.bD
if(f>=b.length)return H.e(b,f)
c=b[f]
b=d.gaI()
H.m(l,"$ib",h,"$ab")
if(!C.a.ah(l,b)){b.a=l.length
C.a.h(l,b)}a1=g.R(0,d.gN(d))
b=d.gN(d)
a=$.c6
b=b.aK(a==null?$.c6=new V.aq(0,0,0):a)
a=c.b
C.b.m(a.a,a.d,b.a,b.b,b.c)
b=$.c6
b=a1.aK(b==null?$.c6=new V.aq(0,0,0):b)
a=c.c
C.b.m(a.a,a.d,b.a,b.b,b.c)
b=a1.d0(0)
a=c.d
i=new Float32Array(H.cy(H.m(new V.d7(b.a,b.b,b.c,b.e,b.f,b.r,b.y,b.z,b.Q).a_(0,!0),"$ib",n,"$ab")))
C.b.dn(a.a,a.d,!1,i)
a=d.gag(d)
b=c.e
C.b.m(b.a,b.d,a.a,a.b,a.c)
a=d.gaI()
b=a.gW(a)
if(!b){b=c.r
C.b.P(b.a,b.d,1)}else{b=c.f
a0=a.gW(a)
a2=b.a
b=b.d
if(!a0)a2.uniform1i(b,0)
else a2.uniform1i(b,a.gi2(a))
b=c.r
C.b.P(b.a,b.d,0)}b=d.gbp()
a=c.x
C.b.C(a.a,a.d,b)
b=d.gbq()
a=c.y
C.b.C(a.a,a.d,b)
b=d.gbr()
a=c.z
C.b.C(a.a,a.d,b);++f}}if(s.db>0){k=a3.dx.z.length
q=a3.a.d_
C.b.P(q.a,q.d,k)
q=a5.db
g=q.gN(q)
for(q=a3.dx.z,o=q.length,a4=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.z)(q),++e){d=q[e]
n=a3.a.bE
if(f>=n.length)return H.e(n,f)
c=n[f]
n=d.gaI()
H.m(l,"$ib",a4,"$ab")
if(!C.a.ah(l,n)){n.a=l.length
C.a.h(l,n)}n=d.gaH(d)
h=c.b
C.b.m(h.a,h.d,n.a,n.b,n.c)
n=d.gby(d)
h=c.c
C.b.m(h.a,h.d,n.a,n.b,n.c)
n=d.ghZ()
h=c.d
C.b.m(h.a,h.d,n.a,n.b,n.c)
n=d.ghO(d)
h=c.e
C.b.m(h.a,h.d,n.a,n.b,n.c)
n=g.aK(d.gaH(d))
h=c.f
C.b.m(h.a,h.d,n.a,n.b,n.c)
n=d.gaI()
h=n.gW(n)
if(!h){n=c.x
C.b.P(n.a,n.d,1)}else{h=c.r
b=n.gW(n)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,n.a)
n=c.x
C.b.P(n.a,n.d,0)}n=d.gag(d)
h=c.y
C.b.m(h.a,h.d,n.a,n.b,n.c)
n=d.gi4()
h=c.z
C.b.C(h.a,h.d,n)
n=d.gi5()
h=c.Q
C.b.C(h.a,h.d,n)
n=d.gbp()
h=c.ch
C.b.C(h.a,h.d,n)
n=d.gbq()
h=c.cx
C.b.C(h.a,h.d,n)
n=d.gbr()
h=c.cy
C.b.C(h.a,h.d,n);++f}}}switch(s.f){case C.c:break
case C.f:break
case C.d:a3.K(l,a3.Q.d)
a4=a3.a
q=a3.Q.d
a4.a0(a4.cL,a4.aZ,q)
break
case C.e:a3.K(l,a3.Q.e)
a4=a3.a
q=a3.Q.e
a4.X(a4.cM,a4.aZ,q)
break}if(s.fr){a4=a3.a
q=a5.Q
if(q==null){q=a5.db
q=a5.Q=q.gN(q).d0(0)}a4=a4.id
a4.toString
a4.a3(q.a_(0,!0))}if(s.dy){a3.K(l,a3.ch)
a4=a3.a
q=a3.ch
a4.X(a4.cN,a4.cO,q)
switch(s.r){case C.c:break
case C.f:a4=a3.a
q=a3.cx.f
a4=a4.b_
a4.toString
o=q.a
n=q.b
q=q.c
C.b.m(a4.a,a4.d,o,n,q)
break
case C.d:a3.K(l,a3.cx.d)
a4=a3.a
q=a3.cx.d
a4.a0(a4.cP,a4.b0,q)
q=a3.a
a4=a3.cx.f
q=q.b_
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.m(q.a,q.d,o,n,a4)
break
case C.e:a3.K(l,a3.cx.e)
a4=a3.a
q=a3.cx.e
a4.X(a4.cQ,a4.b0,q)
q=a3.a
a4=a3.cx.f
q=q.b_
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.m(q.a,q.d,o,n,a4)
break}switch(s.x){case C.c:break
case C.f:a4=a3.a
q=a3.cy.f
a4=a4.b2
a4.toString
o=q.a
n=q.b
q=q.c
C.b.m(a4.a,a4.d,o,n,q)
q=a3.a
n=a3.cy.ch
q=q.b1
C.b.C(q.a,q.d,n)
break
case C.d:a3.K(l,a3.cy.d)
a4=a3.a
q=a3.cy.d
a4.a0(a4.cR,a4.b3,q)
q=a3.a
a4=a3.cy.f
q=q.b2
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.m(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.b1
C.b.C(a4.a,a4.d,n)
break
case C.e:a3.K(l,a3.cy.e)
a4=a3.a
q=a3.cy.e
a4.X(a4.cS,a4.b3,q)
q=a3.a
a4=a3.cy.f
q=q.b2
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.m(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.b1
C.b.C(a4.a,a4.d,n)
break}}a4=s.y
q=a4!==C.c
if(q){switch(a4){case C.c:break
case C.f:a4=a3.a
o=a3.db.f
a4=a4.b4
C.b.C(a4.a,a4.d,o)
break
case C.d:a3.K(l,a3.db.d)
a4=a3.a
o=a3.db.d
a4.a0(a4.cT,a4.b5,o)
o=a3.a
a4=a3.db.f
o=o.b4
C.b.C(o.a,o.d,a4)
break
case C.e:a3.K(l,a3.db.e)
a4=a3.a
o=a3.db.e
a4.X(a4.cU,a4.b5,o)
o=a3.a
a4=a3.db.f
o=o.b4
C.b.C(o.a,o.d,a4)
break}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){a4=l[j]
if(a4.d==null){a4=a4.d=a4.c
if(a4!=null)a4.af(a5)}}a4=a6.e
a4.af(a5)
a4.au(a5)
a4.aL(a5)
if(q)p.disable(3042)
for(j=0;j<l.length;++j){a4=l[j]
q=a4.d
if(q!=null){q.aL(a5)
a4.d=null}}a4=a3.a
a4.toString
p.useProgram(null)
a4.x.hj()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cc().a1},
se1:function(a){this.e=H.m(a,"$iV",[V.a8],"$aV")}}
O.fq.prototype={
fk:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.J().a)){u.f=a
t=new D.P(u.b,t,a,[P.w])
t.b=!0
u.a.O(t)}},
a6:function(){this.bY()
this.fk(1)}}
O.c0.prototype={
O:function(a){this.a.O(H.p(a,"$iC"))},
b8:function(){return this.O(null)},
a6:function(){},
fn:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().A(0,t.gaM())
u=t.d
t.d=a
if(a!=null)a.gu().h(0,t.gaM())
s=new D.P(t.b+".texture2D",u,t.d,[T.bi])
s.b=!0
t.a.O(s)}},
fo:function(a){},
sdj:function(a){var u=this,t=u.c
if(t!==C.d){if(t===C.c)u.a6()
u.c=C.d
u.fo(null)
t=u.a
t.a=null
t.O(null)}u.fn(a)}}
O.fr.prototype={}
O.aG.prototype={
ct:function(a){var u,t,s=this
if(!J.U(s.f,a)){u=s.f
s.f=a
t=new D.P(s.b+".color",u,a,[V.Z])
t.b=!0
s.a.O(t)}},
a6:function(){this.bY()
this.ct(new V.Z(1,1,1))},
sag:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.f
t.a6()
u=t.a
u.a=null
u.O(null)}t.ct(b)}}
O.ft.prototype={
fl:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.J().a)){u.ch=a
t=new D.P(u.b+".refraction",t,a,[P.w])
t.b=!0
u.a.O(t)}},
a6:function(){this.bZ()
this.fl(1)}}
O.fu.prototype={
fm:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.J().a)){u.ch=a
t=new D.P(u.b+".shininess",t,a,[P.w])
t.b=!0
u.a.O(t)}},
a6:function(){this.bZ()
this.fm(100)}}
O.bB.prototype={}
T.cb.prototype={}
T.bi.prototype={}
T.hk.prototype={
gW:function(a){var u=this.d
u=u==null?null:u.gW(u)
if(u==null){u=this.c
u=u==null?null:u.gW(u)}return u===!0},
gu:function(){var u=this.f
return u==null?this.f=D.ap():u},
af:function(a){var u
if(this.d==null){u=this.d=this.c
if(u!=null)u.af(a)}},
aL:function(a){var u=this.d
if(u!=null){u.aL(a)
this.d=null}},
sfE:function(a){this.e=H.m(a,"$ib",[T.bi],"$ab")}}
T.hl.prototype={
gW:function(a){return this.d},
af:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
aL:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.hm.prototype={
as:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.hl()
t.a=0
t.b=q
t.d=t.c=!1
r=W.j
W.a0(u,"load",H.l(new T.hn(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
fi:function(a,b,c){var u,t,s,r
b=V.jq(b)
u=V.jq(a.width)
t=V.jq(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iX()
s.width=u
s.height=t
r=H.p(C.r.dt(s,"2d"),"$ibQ")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.lH(r.getImageData(0,0,s.width,s.height))}}}
T.hn.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.fi(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.b.hS(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.cF()}++s.e},
$S:11}
V.ew.prototype={
at:function(a,b){return!0},
i:function(a){return"all"},
$iaV:1}
V.aV.prototype={}
V.d5.prototype={
at:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].at(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sad:function(a){this.a=H.m(a,"$ib",[V.aV],"$ab")},
$iaV:1}
V.aY.prototype={
at:function(a,b){return!this.dD(0,b)},
i:function(a){return"!["+this.bX(0)+"]"}}
V.fY.prototype={
dH:function(a){var u,t
if(a.a.length<=0)throw H.f(P.r("May not create a SetMatcher with zero characters."))
u=new H.aE([P.y,P.a5])
for(t=new H.d4(a,a.gk(a),[H.av(a,"u",0)]);t.v();)u.T(0,t.d,!0)
this.sfj(u)},
at:function(a,b){return this.a.cD(0,b)},
i:function(a){var u=this.a
return P.j7(new H.d3(u,[H.x(u,0)]))},
sfj:function(a){this.a=H.m(a,"$iK",[P.y,P.a5],"$aK")},
$iaV:1}
V.c9.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cd(this.a.E(0,b))
r.sad(H.d([],[V.aV]))
r.c=!1
C.a.h(this.c,r)
return r},
hl:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.at(0,a))return r}return},
i:function(a){return this.b},
sfG:function(a){this.c=H.m(a,"$ib",[V.cd],"$ab")}}
V.dv.prototype={
i:function(a){var u=H.kp(this.b,"\n","\\n"),t=H.kp(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cc.prototype={
i:function(a){return this.b},
sfe:function(a){var u=P.n
this.c=H.m(a,"$iK",[u,u],"$aK")}}
V.hq.prototype={
E:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.c9(this,b)
u.sfG(H.d([],[V.cd]))
u.d=null
this.a.T(0,b,u)}return u},
aJ:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cc(a)
u=P.n
t.sfe(new H.aE([u,u]))
this.b.T(0,a,t)}return t},
hY:function(a){var u,t,s,r,q,p,o,n,m=H.d([],[V.dv]),l=this.c,k=[P.y],j=H.d([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.j.aN(a,s)
q=l.hl(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.j7(j)
throw H.f(P.r("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.d([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.j7(j)
o=l.d
n=o.c.j(0,p)
t=new V.dv(n==null?o.b:n,p,s)}++s}}},
sfB:function(a){this.a=H.m(a,"$iK",[P.n,V.c9],"$aK")},
sfF:function(a){this.b=H.m(a,"$iK",[P.n,V.cc],"$aK")}}
V.cd.prototype={
i:function(a){return this.b.b+": "+this.bX(0)}}
X.cM.prototype={$iaX:1}
X.f7.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.ap():u}}
X.dc.prototype={
gu:function(){var u=this.f
return u==null?this.f=D.ap():u},
al:function(a){var u
H.p(a,"$iC")
u=this.f
if(u!=null)u.L(a)},
dW:function(){return this.al(null)},
saE:function(a){var u,t,s=this
if(!J.U(s.b,a)){u=s.b
if(u!=null)u.gu().A(0,s.gc3())
t=s.b
s.b=a
if(a!=null)a.gu().h(0,s.gc3())
u=new D.P("mover",t,s.b,[U.bw])
u.b=!0
s.al(u)}},
$iaX:1,
$icM:1}
X.dp.prototype={}
V.iT.prototype={
$1:function(a){var u
H.p(a,"$iaf")
u=C.i.dl(this.a.ghn(),2)
if(u!=="0.00")P.jr(u+" fps")},
$S:33}
V.h1.prototype={
dJ:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.j
W.a0(q,"scroll",H.l(new V.h3(o),{func:1,ret:-1,args:[r]}),!1,r)},
cA:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.n],"$ab")
this.fu()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.hY(C.a.hr(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
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
if(H.m1(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.O(m[1])
l.textContent=H.O(m[0])
t.appendChild(l)}else{k=P.lr(C.I,n,C.q,!1)
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
fu:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.hq()
t=P.n
u.sfB(new H.aE([t,V.c9]))
u.sfF(new H.aE([t,V.cc]))
u.c=null
u.c=u.E(0,q)
t=u.E(0,q).q(0,p)
s=V.a4(new H.X("*"))
C.a.h(t.a,s)
t.c=!0
t=u.E(0,p).q(0,p)
s=new V.aY()
r=[V.aV]
s.sad(H.d([],r))
C.a.h(t.a,s)
t=V.a4(new H.X("*"))
C.a.h(s.a,t)
t=u.E(0,p).q(0,"BoldEnd")
s=V.a4(new H.X("*"))
C.a.h(t.a,s)
t.c=!0
t=u.E(0,q).q(0,o)
s=V.a4(new H.X("_"))
C.a.h(t.a,s)
t.c=!0
t=u.E(0,o).q(0,o)
s=new V.aY()
s.sad(H.d([],r))
C.a.h(t.a,s)
t=V.a4(new H.X("_"))
C.a.h(s.a,t)
t=u.E(0,o).q(0,n)
s=V.a4(new H.X("_"))
C.a.h(t.a,s)
t.c=!0
t=u.E(0,q).q(0,m)
s=V.a4(new H.X("`"))
C.a.h(t.a,s)
t.c=!0
t=u.E(0,m).q(0,m)
s=new V.aY()
s.sad(H.d([],r))
C.a.h(t.a,s)
t=V.a4(new H.X("`"))
C.a.h(s.a,t)
t=u.E(0,m).q(0,"CodeEnd")
s=V.a4(new H.X("`"))
C.a.h(t.a,s)
t.c=!0
t=u.E(0,q).q(0,l)
s=V.a4(new H.X("["))
C.a.h(t.a,s)
t.c=!0
t=u.E(0,l).q(0,k)
s=V.a4(new H.X("|"))
C.a.h(t.a,s)
s=u.E(0,l).q(0,j)
t=V.a4(new H.X("]"))
C.a.h(s.a,t)
s.c=!0
s=u.E(0,l).q(0,l)
t=new V.aY()
t.sad(H.d([],r))
C.a.h(s.a,t)
s=V.a4(new H.X("|]"))
C.a.h(t.a,s)
s=u.E(0,k).q(0,j)
t=V.a4(new H.X("]"))
C.a.h(s.a,t)
s.c=!0
s=u.E(0,k).q(0,k)
t=new V.aY()
t.sad(H.d([],r))
C.a.h(s.a,t)
s=V.a4(new H.X("|]"))
C.a.h(t.a,s)
C.a.h(u.E(0,q).q(0,i).a,new V.ew())
s=u.E(0,i).q(0,i)
t=new V.aY()
t.sad(H.d([],r))
C.a.h(s.a,t)
s=V.a4(new H.X("*_`["))
C.a.h(t.a,s)
s=u.E(0,"BoldEnd")
s.d=s.a.aJ(p)
s=u.E(0,n)
s.d=s.a.aJ(o)
s=u.E(0,"CodeEnd")
s.d=s.a.aJ(m)
s=u.E(0,j)
s.d=s.a.aJ("Link")
s=u.E(0,i)
s.d=s.a.aJ(i)
this.b=u}}
V.h3.prototype={
$1:function(a){P.jT(C.l,new V.h2(this.a))},
$S:11}
V.h2.prototype={
$0:function(){var u=C.i.a2(document.documentElement.scrollTop),t=this.a.style,s=H.k(-0.01*u)+"px"
t.top=s},
$S:1}
N.iQ.prototype={
$1:function(a){var u,t,s,r
H.p(a,"$iaf")
u=this.a
t=u.b
s=u.e
r=s.length
t=(t+1)%r
if(t<r){u.b=t
u.c=H.p(s[t],"$ibi")
u=u.f
if(u!=null)u.cF()}return},
$S:34};(function aliases(){var u=J.a.prototype
u.dB=u.i
u=J.d0.prototype
u.dC=u.i
u=O.c0.prototype
u.bY=u.a6
u=O.aG.prototype
u.bZ=u.a6
u=V.d5.prototype
u.dD=u.at
u.bX=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"lB","ll",8)
u(P,"lC","lm",8)
u(P,"lD","ln",8)
t(P,"ke","lz",2)
var n
s(n=E.ab.prototype,"gd7",0,0,null,["$1","$0"],["d8","hB"],0,0)
s(n,"gd5",0,0,null,["$1","$0"],["d6","hA"],0,0)
s(n,"gd3",0,0,null,["$1","$0"],["d4","hx"],0,0)
r(n,"ghv","hw",6)
r(n,"ghy","hz",6)
s(n=E.du.prototype,"gc0",0,0,null,["$1","$0"],["c2","c1"],0,0)
q(n,"ghN","df",2)
p(n=X.dB.prototype,"geH","eI",9)
p(n,"gev","ew",9)
p(n,"geB","eC",3)
p(n,"geL","eM",20)
p(n,"geJ","eK",20)
p(n,"geP","eQ",3)
p(n,"geT","eU",3)
p(n,"geF","eG",3)
p(n,"geR","eS",3)
p(n,"geD","eE",3)
p(n,"geV","eW",24)
p(n,"geX","eY",9)
p(n,"gf7","f8",7)
p(n,"gf3","f4",7)
p(n,"gf5","f6",7)
s(D.ba.prototype,"gdK",0,0,null,["$1","$0"],["a9","dL"],0,0)
s(n=D.d2.prototype,"gcm",0,0,null,["$1","$0"],["cn","eN"],0,0)
p(n,"gf_","f0",26)
r(n,"geo","ep",14)
r(n,"gf1","f2",14)
o(V.b0.prototype,"gk","bI",13)
o(V.N.prototype,"gk","bI",13)
s(n=M.cT.prototype,"ga4",0,0,null,["$1","$0"],["aa","dN"],0,0)
r(n,"gex","ey",6)
r(n,"gez","eA",6)
s(n=O.d6.prototype,"gaM",0,0,null,["$1","$0"],["O","b8"],0,0)
s(n,"gfg",0,0,null,["$1","$0"],["cr","fh"],0,0)
r(n,"geq","er",12)
r(n,"ges","eu",12)
s(O.c0.prototype,"gaM",0,0,null,["$1","$0"],["O","b8"],0,0)
s(X.dc.prototype,"gc3",0,0,null,["$1","$0"],["al","dW"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.j3,J.a,J.ak,P.dS,P.h,H.d4,P.aC,H.bu,H.dA,H.hv,P.bc,H.bR,H.e8,P.a3,H.fg,H.fh,H.fb,P.ee,P.aS,P.an,P.dD,P.hc,P.ca,P.hd,P.af,P.a7,P.iD,P.ix,P.co,P.ir,P.u,P.bS,P.iC,P.a5,P.b9,P.a2,P.bb,P.fM,P.dn,P.dL,P.f6,P.b,P.K,P.H,P.ac,P.n,P.bh,W.eL,W.v,W.cW,P.ej,P.is,O.V,O.c1,E.eF,E.ab,E.fQ,E.du,Z.dC,Z.i_,Z.cK,Z.be,Z.aQ,D.eI,D.bt,D.C,X.cL,X.d1,X.fd,X.fk,X.c2,X.fB,X.hr,X.dB,D.ba,D.W,D.dd,D.dm,D.dr,D.ds,D.dt,V.Z,V.br,V.eX,V.d7,V.a8,V.ae,V.aq,V.df,V.di,V.b0,V.N,M.cT,A.cG,A.eA,A.fs,A.ce,A.ci,A.cg,A.cj,A.ch,A.ck,A.bs,A.dw,A.hF,F.a_,F.f_,F.aU,F.ff,F.bg,F.dl,F.fZ,F.h_,F.h0,F.ai,F.hO,F.hP,F.hS,F.hU,F.hV,F.hW,O.bB,O.c0,T.hm,V.ew,V.aV,V.d5,V.fY,V.c9,V.dv,V.cc,V.hq,X.cM,X.dp,X.dc,V.h1])
s(J.a,[J.fa,J.cZ,J.d0,J.aD,J.d_,J.c_,H.c4,W.c,W.ev,W.cH,W.bQ,W.ay,W.az,W.M,W.dF,W.eP,W.eQ,W.dH,W.cS,W.dJ,W.eS,W.j,W.dM,W.aB,W.f8,W.dO,W.bd,W.fj,W.fv,W.dT,W.dU,W.aH,W.dV,W.dY,W.aI,W.e1,W.e3,W.aL,W.e4,W.aM,W.e9,W.ar,W.ec,W.hp,W.aO,W.ef,W.ht,W.hK,W.ek,W.em,W.eo,W.eq,W.es,P.aT,P.dQ,P.aZ,P.e_,P.fP,P.ea,P.b_,P.eh,P.eB,P.dE,P.cI,P.dg,P.bA,P.dk,P.dq,P.dx,P.e6])
s(J.d0,[J.fN,J.dy,J.bf])
t(J.j2,J.aD)
s(J.d_,[J.cY,J.cX])
t(P.fi,P.dS)
s(P.fi,[H.dz,W.i8,W.i7,P.f2])
t(H.X,H.dz)
s(P.h,[H.eV,H.fn,H.i0])
s(P.aC,[H.fo,H.i1])
s(P.bc,[H.fJ,H.fc,H.hI,H.hx,H.eH,H.fW,P.ez,P.db,P.aw,P.hJ,P.hH,P.h8,P.eJ,P.eO])
s(H.bR,[H.iU,H.hh,H.iM,H.iN,H.iO,P.i4,P.i3,P.i5,P.i6,P.iB,P.iA,P.id,P.ii,P.ie,P.ig,P.ih,P.il,P.im,P.ik,P.ij,P.he,P.hf,P.iH,P.iv,P.iu,P.iw,P.fm,P.eT,P.eU,W.fx,W.fz,W.fV,W.hb,W.ic,P.iJ,P.f3,P.f4,P.eD,E.fR,E.fS,E.fT,E.ho,D.eY,D.eZ,F.iE,F.hY,F.hX,F.hQ,F.hR,T.hn,V.iT,V.h3,V.h2,N.iQ])
s(H.hh,[H.h9,H.bO])
t(H.i2,P.ez)
t(P.fl,P.a3)
t(H.aE,P.fl)
t(H.d3,H.eV)
t(H.d8,H.c4)
s(H.d8,[H.cp,H.cr])
t(H.cq,H.cp)
t(H.c3,H.cq)
t(H.cs,H.cr)
t(H.d9,H.cs)
s(H.d9,[H.fC,H.fD,H.fE,H.fF,H.fG,H.da,H.fH])
t(P.it,P.iD)
t(P.iq,P.ix)
t(P.cO,P.hd)
t(P.eW,P.bS)
t(P.hL,P.eW)
t(P.hM,P.cO)
s(P.a2,[P.w,P.y])
s(P.aw,[P.bz,P.f9])
s(W.c,[W.B,W.f1,W.aK,W.ct,W.aN,W.as,W.cv,W.hZ,W.cm,P.eE,P.bp])
s(W.B,[W.Y,W.b8])
s(W.Y,[W.q,P.o])
s(W.q,[W.ex,W.ey,W.bq,W.cQ,W.f5,W.bX,W.fX])
s(W.ay,[W.bU,W.eM,W.eN])
t(W.eK,W.az)
t(W.bV,W.dF)
t(W.dI,W.dH)
t(W.cR,W.dI)
t(W.dK,W.dJ)
t(W.eR,W.dK)
t(W.aA,W.cH)
t(W.dN,W.dM)
t(W.f0,W.dN)
t(W.dP,W.dO)
t(W.bv,W.dP)
t(W.bj,W.j)
s(W.bj,[W.aF,W.a1,W.at])
t(W.fw,W.dT)
t(W.fy,W.dU)
t(W.dW,W.dV)
t(W.fA,W.dW)
t(W.dZ,W.dY)
t(W.c5,W.dZ)
t(W.e2,W.e1)
t(W.fO,W.e2)
t(W.fU,W.e3)
t(W.cu,W.ct)
t(W.h5,W.cu)
t(W.e5,W.e4)
t(W.h6,W.e5)
t(W.ha,W.e9)
t(W.ed,W.ec)
t(W.hi,W.ed)
t(W.cw,W.cv)
t(W.hj,W.cw)
t(W.eg,W.ef)
t(W.hs,W.eg)
t(W.aR,W.a1)
t(W.el,W.ek)
t(W.i9,W.el)
t(W.dG,W.cS)
t(W.en,W.em)
t(W.io,W.en)
t(W.ep,W.eo)
t(W.dX,W.ep)
t(W.er,W.eq)
t(W.iy,W.er)
t(W.et,W.es)
t(W.iz,W.et)
t(W.ia,P.hc)
t(W.jb,W.ia)
t(W.ib,P.ca)
t(P.al,P.is)
t(P.dR,P.dQ)
t(P.fe,P.dR)
t(P.e0,P.e_)
t(P.fK,P.e0)
t(P.eb,P.ea)
t(P.hg,P.eb)
t(P.ei,P.eh)
t(P.hu,P.ei)
t(P.eC,P.dE)
t(P.fL,P.bp)
t(P.e7,P.e6)
t(P.h7,P.e7)
s(E.eF,[Z.cJ,A.c8,T.cb])
s(D.C,[D.bY,D.bZ,D.P])
t(D.d2,O.V)
t(U.bw,D.eI)
s(U.bw,[U.cN,U.dj])
t(A.fp,A.c8)
s(A.dw,[A.F,A.hB,A.hC,A.hE,A.hz,A.S,A.hA,A.E,A.hD,A.hG,A.cf,A.ag,A.a9,A.aa])
t(F.h4,F.f_)
t(F.hy,F.ff)
t(F.hT,F.hU)
t(F.fI,F.hV)
t(O.d6,O.bB)
s(O.c0,[O.fq,O.fr,O.aG])
s(O.aG,[O.ft,O.fu])
t(T.bi,T.cb)
s(T.bi,[T.hk,T.hl])
s(V.d5,[V.aY,V.cd])
t(X.f7,X.dp)
u(H.dz,H.dA)
u(H.cp,P.u)
u(H.cq,H.bu)
u(H.cr,P.u)
u(H.cs,H.bu)
u(P.dS,P.u)
u(W.dF,W.eL)
u(W.dH,P.u)
u(W.dI,W.v)
u(W.dJ,P.u)
u(W.dK,W.v)
u(W.dM,P.u)
u(W.dN,W.v)
u(W.dO,P.u)
u(W.dP,W.v)
u(W.dT,P.a3)
u(W.dU,P.a3)
u(W.dV,P.u)
u(W.dW,W.v)
u(W.dY,P.u)
u(W.dZ,W.v)
u(W.e1,P.u)
u(W.e2,W.v)
u(W.e3,P.a3)
u(W.ct,P.u)
u(W.cu,W.v)
u(W.e4,P.u)
u(W.e5,W.v)
u(W.e9,P.a3)
u(W.ec,P.u)
u(W.ed,W.v)
u(W.cv,P.u)
u(W.cw,W.v)
u(W.ef,P.u)
u(W.eg,W.v)
u(W.ek,P.u)
u(W.el,W.v)
u(W.em,P.u)
u(W.en,W.v)
u(W.eo,P.u)
u(W.ep,W.v)
u(W.eq,P.u)
u(W.er,W.v)
u(W.es,P.u)
u(W.et,W.v)
u(P.dQ,P.u)
u(P.dR,W.v)
u(P.e_,P.u)
u(P.e0,W.v)
u(P.ea,P.u)
u(P.eb,W.v)
u(P.eh,P.u)
u(P.ei,W.v)
u(P.dE,P.a3)
u(P.e6,P.u)
u(P.e7,W.v)})();(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bq.prototype
C.F=J.a.prototype
C.a=J.aD.prototype
C.G=J.cX.prototype
C.h=J.cY.prototype
C.m=J.cZ.prototype
C.i=J.d_.prototype
C.j=J.c_.prototype
C.H=J.bf.prototype
C.J=W.c5.prototype
C.t=J.fN.prototype
C.b=P.bA.prototype
C.n=J.dy.prototype
C.u=W.aR.prototype
C.v=W.cm.prototype
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=function() {
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
C.B=function(getTagFallback) {
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
C.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.y=function(hooks) {
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
C.A=function(hooks) {
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
C.z=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.C=new P.fM()
C.q=new P.hL()
C.D=new P.hM()
C.k=new P.it()
C.c=new A.bs(0,"ColorSourceType.None")
C.f=new A.bs(1,"ColorSourceType.Solid")
C.d=new A.bs(2,"ColorSourceType.Texture2D")
C.e=new A.bs(3,"ColorSourceType.TextureCube")
C.l=new P.bb(0)
C.E=new P.bb(5e6)
C.I=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])})()
var v={mangledGlobalNames:{y:"int",w:"double",a2:"num",n:"String",a5:"bool",H:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.C]},{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[W.a1]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:P.H,args:[F.a_]},{func:1,ret:-1,args:[P.y,[P.h,E.ab]]},{func:1,ret:-1,args:[W.at]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.j]},{func:1,ret:P.H,args:[D.C]},{func:1,ret:P.H,args:[W.j]},{func:1,ret:-1,args:[P.y,[P.h,V.a8]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.y,[P.h,D.W]]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.n,args:[P.y]},{func:1,args:[,]},{func:1,ret:P.H,args:[,]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:W.Y,args:[W.B]},{func:1,ret:P.a5,args:[W.B]},{func:1,args:[W.j]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:P.a5,args:[[P.h,D.W]]},{func:1,ret:[P.an,,],args:[,]},{func:1,ret:P.H,args:[,],opt:[P.ac]},{func:1,ret:P.H,args:[F.ai,P.w,P.w]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,args:[P.n]},{func:1,args:[,P.n]},{func:1,ret:P.H,args:[P.af]},{func:1,ret:-1,args:[P.af]},{func:1,ret:P.H,args:[P.a2]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.ax=0
$.bP=null
$.jw=null
$.jd=!1
$.ki=null
$.kc=null
$.kn=null
$.iK=null
$.iP=null
$.jn=null
$.bC=null
$.cz=null
$.cA=null
$.je=!1
$.R=C.k
$.ad=[]
$.jE=null
$.jI=null
$.c6=null
$.jO=null
$.jY=null
$.k0=null
$.k_=null
$.hN=null
$.jZ=null
$.jH=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"m9","ks",function(){return H.kh("_$dart_dartClosure")})
u($,"ma","jt",function(){return H.kh("_$dart_js")})
u($,"me","kt",function(){return H.aP(H.hw({
toString:function(){return"$receiver$"}}))})
u($,"mf","ku",function(){return H.aP(H.hw({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mg","kv",function(){return H.aP(H.hw(null))})
u($,"mh","kw",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mk","kz",function(){return H.aP(H.hw(void 0))})
u($,"ml","kA",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mj","ky",function(){return H.aP(H.jW(null))})
u($,"mi","kx",function(){return H.aP(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mn","kC",function(){return H.aP(H.jW(void 0))})
u($,"mm","kB",function(){return H.aP(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mD","ju",function(){return P.lk()})
u($,"mE","kG",function(){return P.lc("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mw","kF",function(){return Z.am(0)})
u($,"mq","kD",function(){return Z.am(511)})
u($,"my","b5",function(){return Z.am(1)})
u($,"mx","b4",function(){return Z.am(2)})
u($,"ms","b3",function(){return Z.am(4)})
u($,"mz","b6",function(){return Z.am(8)})
u($,"mA","b7",function(){return Z.am(16)})
u($,"mt","cD",function(){return Z.am(32)})
u($,"mu","cE",function(){return Z.am(64)})
u($,"mv","kE",function(){return Z.am(96)})
u($,"mB","bL",function(){return Z.am(128)})
u($,"mr","b2",function(){return Z.am(256)})
u($,"m8","kr",function(){return new V.eX(1e-9)})
u($,"m7","J",function(){return $.kr()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c4,ArrayBufferView:H.c4,Float32Array:H.c3,Float64Array:H.c3,Int16Array:H.fC,Int32Array:H.fD,Int8Array:H.fE,Uint16Array:H.fF,Uint32Array:H.fG,Uint8ClampedArray:H.da,CanvasPixelArray:H.da,Uint8Array:H.fH,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLBodyElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.ev,HTMLAnchorElement:W.ex,HTMLAreaElement:W.ey,Blob:W.cH,HTMLCanvasElement:W.bq,CanvasRenderingContext2D:W.bQ,CDATASection:W.b8,CharacterData:W.b8,Comment:W.b8,ProcessingInstruction:W.b8,Text:W.b8,CSSNumericValue:W.bU,CSSUnitValue:W.bU,CSSPerspective:W.eK,CSSCharsetRule:W.M,CSSConditionRule:W.M,CSSFontFaceRule:W.M,CSSGroupingRule:W.M,CSSImportRule:W.M,CSSKeyframeRule:W.M,MozCSSKeyframeRule:W.M,WebKitCSSKeyframeRule:W.M,CSSKeyframesRule:W.M,MozCSSKeyframesRule:W.M,WebKitCSSKeyframesRule:W.M,CSSMediaRule:W.M,CSSNamespaceRule:W.M,CSSPageRule:W.M,CSSRule:W.M,CSSStyleRule:W.M,CSSSupportsRule:W.M,CSSViewportRule:W.M,CSSStyleDeclaration:W.bV,MSStyleCSSProperties:W.bV,CSS2Properties:W.bV,CSSImageValue:W.ay,CSSKeywordValue:W.ay,CSSPositionValue:W.ay,CSSResourceValue:W.ay,CSSURLImageValue:W.ay,CSSStyleValue:W.ay,CSSMatrixComponent:W.az,CSSRotation:W.az,CSSScale:W.az,CSSSkew:W.az,CSSTranslation:W.az,CSSTransformComponent:W.az,CSSTransformValue:W.eM,CSSUnparsedValue:W.eN,DataTransferItemList:W.eP,HTMLDivElement:W.cQ,DOMException:W.eQ,ClientRectList:W.cR,DOMRectList:W.cR,DOMRectReadOnly:W.cS,DOMStringList:W.eR,DOMTokenList:W.eS,Element:W.Y,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.c,Accelerometer:W.c,AccessibleNode:W.c,AmbientLightSensor:W.c,Animation:W.c,ApplicationCache:W.c,DOMApplicationCache:W.c,OfflineResourceList:W.c,BackgroundFetchRegistration:W.c,BatteryManager:W.c,BroadcastChannel:W.c,CanvasCaptureMediaStreamTrack:W.c,DedicatedWorkerGlobalScope:W.c,EventSource:W.c,FileReader:W.c,FontFaceSet:W.c,Gyroscope:W.c,XMLHttpRequest:W.c,XMLHttpRequestEventTarget:W.c,XMLHttpRequestUpload:W.c,LinearAccelerationSensor:W.c,Magnetometer:W.c,MediaDevices:W.c,MediaKeySession:W.c,MediaQueryList:W.c,MediaRecorder:W.c,MediaSource:W.c,MediaStream:W.c,MediaStreamTrack:W.c,MessagePort:W.c,MIDIAccess:W.c,MIDIInput:W.c,MIDIOutput:W.c,MIDIPort:W.c,NetworkInformation:W.c,Notification:W.c,OffscreenCanvas:W.c,OrientationSensor:W.c,PaymentRequest:W.c,Performance:W.c,PermissionStatus:W.c,PresentationAvailability:W.c,PresentationConnection:W.c,PresentationConnectionList:W.c,PresentationRequest:W.c,RelativeOrientationSensor:W.c,RemotePlayback:W.c,RTCDataChannel:W.c,DataChannel:W.c,RTCDTMFSender:W.c,RTCPeerConnection:W.c,webkitRTCPeerConnection:W.c,mozRTCPeerConnection:W.c,ScreenOrientation:W.c,Sensor:W.c,ServiceWorker:W.c,ServiceWorkerContainer:W.c,ServiceWorkerGlobalScope:W.c,ServiceWorkerRegistration:W.c,SharedWorker:W.c,SharedWorkerGlobalScope:W.c,SpeechRecognition:W.c,SpeechSynthesis:W.c,SpeechSynthesisUtterance:W.c,VR:W.c,VRDevice:W.c,VRDisplay:W.c,VRSession:W.c,VisualViewport:W.c,WebSocket:W.c,Worker:W.c,WorkerGlobalScope:W.c,WorkerPerformance:W.c,BluetoothDevice:W.c,BluetoothRemoteGATTCharacteristic:W.c,Clipboard:W.c,MojoInterfaceInterceptor:W.c,USB:W.c,IDBDatabase:W.c,IDBOpenDBRequest:W.c,IDBVersionChangeRequest:W.c,IDBRequest:W.c,IDBTransaction:W.c,AnalyserNode:W.c,RealtimeAnalyserNode:W.c,AudioBufferSourceNode:W.c,AudioDestinationNode:W.c,AudioNode:W.c,AudioScheduledSourceNode:W.c,AudioWorkletNode:W.c,BiquadFilterNode:W.c,ChannelMergerNode:W.c,AudioChannelMerger:W.c,ChannelSplitterNode:W.c,AudioChannelSplitter:W.c,ConstantSourceNode:W.c,ConvolverNode:W.c,DelayNode:W.c,DynamicsCompressorNode:W.c,GainNode:W.c,AudioGainNode:W.c,IIRFilterNode:W.c,MediaElementAudioSourceNode:W.c,MediaStreamAudioDestinationNode:W.c,MediaStreamAudioSourceNode:W.c,OscillatorNode:W.c,Oscillator:W.c,PannerNode:W.c,AudioPannerNode:W.c,webkitAudioPannerNode:W.c,ScriptProcessorNode:W.c,JavaScriptAudioNode:W.c,StereoPannerNode:W.c,WaveShaperNode:W.c,EventTarget:W.c,File:W.aA,FileList:W.f0,FileWriter:W.f1,HTMLFormElement:W.f5,Gamepad:W.aB,History:W.f8,HTMLCollection:W.bv,HTMLFormControlsCollection:W.bv,HTMLOptionsCollection:W.bv,ImageData:W.bd,HTMLImageElement:W.bX,KeyboardEvent:W.aF,Location:W.fj,MediaList:W.fv,MIDIInputMap:W.fw,MIDIOutputMap:W.fy,MimeType:W.aH,MimeTypeArray:W.fA,PointerEvent:W.a1,MouseEvent:W.a1,DragEvent:W.a1,Document:W.B,DocumentFragment:W.B,HTMLDocument:W.B,ShadowRoot:W.B,XMLDocument:W.B,Attr:W.B,DocumentType:W.B,Node:W.B,NodeList:W.c5,RadioNodeList:W.c5,Plugin:W.aI,PluginArray:W.fO,RTCStatsReport:W.fU,HTMLSelectElement:W.fX,SourceBuffer:W.aK,SourceBufferList:W.h5,SpeechGrammar:W.aL,SpeechGrammarList:W.h6,SpeechRecognitionResult:W.aM,Storage:W.ha,CSSStyleSheet:W.ar,StyleSheet:W.ar,TextTrack:W.aN,TextTrackCue:W.as,VTTCue:W.as,TextTrackCueList:W.hi,TextTrackList:W.hj,TimeRanges:W.hp,Touch:W.aO,TouchEvent:W.at,TouchList:W.hs,TrackDefaultList:W.ht,CompositionEvent:W.bj,FocusEvent:W.bj,TextEvent:W.bj,UIEvent:W.bj,URL:W.hK,VideoTrackList:W.hZ,WheelEvent:W.aR,Window:W.cm,DOMWindow:W.cm,CSSRuleList:W.i9,ClientRect:W.dG,DOMRect:W.dG,GamepadList:W.io,NamedNodeMap:W.dX,MozNamedAttrMap:W.dX,SpeechRecognitionResultList:W.iy,StyleSheetList:W.iz,SVGLength:P.aT,SVGLengthList:P.fe,SVGNumber:P.aZ,SVGNumberList:P.fK,SVGPointList:P.fP,SVGStringList:P.hg,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGScriptElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGTransform:P.b_,SVGTransformList:P.hu,AudioBuffer:P.eB,AudioParamMap:P.eC,AudioTrackList:P.eE,AudioContext:P.bp,webkitAudioContext:P.bp,BaseAudioContext:P.bp,OfflineAudioContext:P.fL,WebGLBuffer:P.cI,WebGLProgram:P.dg,WebGL2RenderingContext:P.bA,WebGLShader:P.dk,WebGLTexture:P.dq,WebGLUniformLocation:P.dx,SQLResultSetRowList:P.h7})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.cs.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
W.ct.$nativeSuperclassTag="EventTarget"
W.cu.$nativeSuperclassTag="EventTarget"
W.cv.$nativeSuperclassTag="EventTarget"
W.cw.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.kk,[])
else N.kk([])})})()
//# sourceMappingURL=test.dart.js.map
