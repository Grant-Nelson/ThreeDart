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
a[c]=function(){a[c]=function(){H.n3(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.k3(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jO:function jO(){},
jL:function(){return new P.cv("No element")},
lT:function(){return new P.cv("Too many elements")},
q:function q(a){this.a=a},
fr:function fr(){},
bQ:function bQ(){},
cj:function cj(a,b,c){var _=this
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
fY:function fY(a,b,c){this.a=a
this.b=b
this.$ti=c},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
iD:function iD(a,b,c){this.a=a
this.b=b
this.$ti=c},
bL:function bL(){},
dZ:function dZ(){},
dY:function dY(){},
c4:function(a){var u,t=H.H(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
mK:function(a){return v.types[H.ac(a)]},
mR:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iI},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ao(a)
if(typeof u!=="string")throw H.h(H.c_(a))
return u},
cr:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bS:function(a){return H.lZ(a)+H.k_(H.bC(a),0,null)},
lZ:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$icI){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c4(t.length>1&&C.i.aD(t,0)===36?C.i.b1(t,1):t)},
kB:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
m6:function(a){var u,t,s,r=H.c([],[P.D])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.c_(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.h.b7(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.c_(s))}return H.kB(r)},
kC:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.c_(s))
if(s<0)throw H.h(H.c_(s))
if(s>65535)return H.m6(a)}return H.kB(a)},
jQ:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.b7(u,10))>>>0,56320|u&1023)}throw H.h(P.aV(a,0,1114111,null,null))},
bR:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m5:function(a){var u=H.bR(a).getFullYear()+0
return u},
m3:function(a){var u=H.bR(a).getMonth()+1
return u},
m_:function(a){var u=H.bR(a).getDate()+0
return u},
m0:function(a){var u=H.bR(a).getHours()+0
return u},
m2:function(a){var u=H.bR(a).getMinutes()+0
return u},
m4:function(a){var u=H.bR(a).getSeconds()+0
return u},
m1:function(a){var u=H.bR(a).getMilliseconds()+0
return u},
F:function(a){throw H.h(H.c_(a))},
l:function(a,b){if(a==null)J.bF(a)
throw H.h(H.cZ(a,b))},
cZ:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aB(!0,b,s,null)
u=H.ac(J.bF(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.hs(b,s)},
mG:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bT(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bT(a,c,!0,b,"end",u)
return new P.aB(!0,b,"end",null)},
c_:function(a){return new P.aB(!0,a,null,null)},
mC:function(a){if(typeof a!=="number")throw H.h(H.c_(a))
return a},
h:function(a){var u
if(a==null)a=new P.dC()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.li})
u.name=""}else u.toString=H.li
return u},
li:function(){return J.ao(this.dartException)},
v:function(a){throw H.h(a)},
C:function(a){throw H.h(P.bo(a))},
b1:function(a){var u,t,s,r,q,p
a=H.lh(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ia:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kO:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kw:function(a,b){return new H.hj(a,b==null?null:b.method)},
jP:function(a,b){var u=b==null,t=u?null:b.method
return new H.fN(a,t,u?null:b.receiver)},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jC(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.h.b7(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jP(H.k(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kw(H.k(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ll()
q=$.lm()
p=$.ln()
o=$.lo()
n=$.lr()
m=$.ls()
l=$.lq()
$.lp()
k=$.lu()
j=$.lt()
i=r.a8(u)
if(i!=null)return f.$1(H.jP(H.H(u),i))
else{i=q.a8(u)
if(i!=null){i.method="call"
return f.$1(H.jP(H.H(u),i))}else{i=p.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=n.a8(u)
if(i==null){i=m.a8(u)
if(i==null){i=l.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=k.a8(u)
if(i==null){i=j.a8(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kw(H.H(u),i))}}return f.$1(new H.im(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dL()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aB(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dL()
return a},
c2:function(a){var u
if(a==null)return new H.eE(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eE(a)},
mJ:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.U(0,a[u],a[t])}return b},
mQ:function(a,b,c,d,e,f){H.j(a,"$ibs")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.r("Unsupported number of arguments for wrapped closure"))},
c0:function(a,b){var u
H.ac(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mQ)
a.$identity=u
return u},
lL:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hN().constructor.prototype):Object.create(new H.c7(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aI
if(typeof t!=="number")return t.D()
$.aI=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kk(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.mK,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kj:H.jF
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.h("Error in reflectionInfo.")
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
lI:function(a,b,c,d){var u=H.jF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kk:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lK(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lI(t,!r,u,b)
if(t===0){r=$.aI
if(typeof r!=="number")return r.D()
$.aI=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c8
return new Function(r+H.k(q==null?$.c8=H.fa("self"):q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aI
if(typeof r!=="number")return r.D()
$.aI=r+1
o+=r
r="return function("+o+"){return this."
q=$.c8
return new Function(r+H.k(q==null?$.c8=H.fa("self"):q)+"."+H.k(u)+"("+o+");}")()},
lJ:function(a,b,c,d){var u=H.jF,t=H.kj
switch(b?-1:a){case 0:throw H.h(H.m9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lK:function(a,b){var u,t,s,r,q,p,o,n=$.c8
if(n==null)n=$.c8=H.fa("self")
u=$.ki
if(u==null)u=$.ki=H.fa("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lJ(s,!q,t,b)
if(s===1){n="return function(){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+");"
u=$.aI
if(typeof u!=="number")return u.D()
$.aI=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+", "+o+");"
u=$.aI
if(typeof u!=="number")return u.D()
$.aI=u+1
return new Function(n+u+"}")()},
k3:function(a,b,c,d,e,f,g){return H.lL(a,b,H.ac(c),d,!!e,!!f,g)},
jF:function(a){return a.a},
kj:function(a){return a.c},
fa:function(a){var u,t,s,r=new H.c7("self","target","receiver","name"),q=J.jM(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
z:function(a){if(a==null)H.my("boolean expression must not be null")
return a},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aG(a,"String"))},
nK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aG(a,"double"))},
mW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aG(a,"num"))},
k0:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aG(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aG(a,"int"))},
lf:function(a,b){throw H.h(H.aG(a,H.c4(H.H(b).substring(2))))},
mY:function(a,b){throw H.h(H.lH(a,H.c4(H.H(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.lf(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.mY(a,b)},
k9:function(a){if(a==null)return a
if(!!J.W(a).$ib)return a
throw H.h(H.aG(a,"List<dynamic>"))},
mS:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.lf(a,b)},
l9:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
f0:function(a,b){var u
if(typeof a=="function")return!0
u=H.l9(J.W(a))
if(u==null)return!1
return H.l0(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.jX)return a
$.jX=!0
try{if(H.f0(a,b))return a
u=H.jA(b)
t=H.aG(a,u)
throw H.h(t)}finally{$.jX=!1}},
k4:function(a,b){if(a!=null&&!H.k2(a,b))H.v(H.aG(a,H.jA(b)))
return a},
aG:function(a,b){return new H.ib("TypeError: "+P.df(a)+": type '"+H.l4(a)+"' is not a subtype of type '"+b+"'")},
lH:function(a,b){return new H.fb("CastError: "+P.df(a)+": type '"+H.l4(a)+"' is not a subtype of type '"+b+"'")},
l4:function(a){var u,t=J.W(a)
if(!!t.$ica){u=H.l9(t)
if(u!=null)return H.jA(u)
return"Closure"}return H.bS(a)},
my:function(a){throw H.h(new H.iE(a))},
n3:function(a){throw H.h(new P.fj(H.H(a)))},
m9:function(a){return new H.hA(a)},
la:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bC:function(a){if(a==null)return
return a.$ti},
nL:function(a,b,c){return H.c3(a["$a"+H.k(c)],H.bC(b))},
d_:function(a,b,c,d){var u
H.H(c)
H.ac(d)
u=H.c3(a["$a"+H.k(c)],H.bC(b))
return u==null?null:u[d]},
an:function(a,b,c){var u
H.H(b)
H.ac(c)
u=H.c3(a["$a"+H.k(b)],H.bC(a))
return u==null?null:u[c]},
y:function(a,b){var u
H.ac(b)
u=H.bC(a)
return u==null?null:u[b]},
jA:function(a){return H.bB(a,null)},
bB:function(a,b){var u,t
H.n(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c4(a[0].name)+H.k_(a,1,b)
if(typeof a=="function")return H.c4(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.l(b,t)
return H.k(b[t])}if('func' in a)return H.mr(a,b)
if('futureOr' in a)return"FutureOr<"+H.bB("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mr:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
H.n(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.l(a0,n)
p=C.i.D(p,a0[n])
m=u[q]
if(m!=null&&m!==P.R)p+=" extends "+H.bB(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bB(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bB(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bB(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.mI(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.H(b[h])
j=j+i+H.bB(e[d],a0)+(" "+H.k(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
k_:function(a,b,c){var u,t,s,r,q,p
H.n(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.bc("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bB(p,c)}return"<"+u.i(0)+">"},
c3:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
k1:function(a,b,c,d){var u,t
H.H(b)
H.k9(c)
H.H(d)
if(a==null)return!1
u=H.bC(a)
t=J.W(a)
if(t[b]==null)return!1
return H.l7(H.c3(t[d],u),null,c,null)},
n:function(a,b,c,d){H.H(b)
H.k9(c)
H.H(d)
if(a==null)return a
if(H.k1(a,b,c,d))return a
throw H.h(H.aG(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c4(b.substring(2))+H.k_(c,0,null),v.mangledGlobalNames)))},
l7:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aA(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aA(a[t],b,c[t],d))return!1
return!0},
nI:function(a,b,c){return a.apply(b,H.c3(J.W(b)["$a"+H.k(c)],H.bC(b)))},
lc:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="L"||a===-1||a===-2||H.lc(u)}return!1},
k2:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="L"||b===-1||b===-2||H.lc(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.k2(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f0(a,b)}u=J.W(a).constructor
t=H.bC(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aA(u,null,b,null)},
G:function(a,b){if(a!=null&&!H.k2(a,b))throw H.h(H.aG(a,H.jA(b)))
return a},
aA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.l0(a,b,c,d)
if('func' in a)return c.name==="bs"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aA("type" in a?a.type:l,b,s,d)
else if(H.aA(a,b,s,d))return!0
else{if(!('$i'+"cg" in t.prototype))return!1
r=t.prototype["$a"+"cg"]
q=H.c3(r,u?a.slice(1):l)
return H.aA(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.l7(H.c3(m,u),b,p,d)},
l0:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.mV(h,b,g,d)},
mV:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aA(c[s],d,a[s],b))return!1}return!0},
nJ:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
mT:function(a){var u,t,s,r,q=H.H($.lb.$1(a)),p=$.jr[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jx[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.H($.l6.$2(a,q))
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
return r.i}if(s==="+")return H.le(a,u)
if(s==="*")throw H.h(P.kP(q))
if(v.leafTags[q]===true){r=H.jz(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.le(a,u)},
le:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ka(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jz:function(a){return J.ka(a,!1,null,!!a.$iI)},
mU:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jz(u)
else return J.ka(u,c,null,null)},
mO:function(){if(!0===$.k8)return
$.k8=!0
H.mP()},
mP:function(){var u,t,s,r,q,p,o,n
$.jr=Object.create(null)
$.jx=Object.create(null)
H.mN()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lg.$1(q)
if(p!=null){o=H.mU(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mN:function(){var u,t,s,r,q,p,o=C.B()
o=H.bZ(C.C,H.bZ(C.D,H.bZ(C.v,H.bZ(C.v,H.bZ(C.E,H.bZ(C.F,H.bZ(C.G(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lb=new H.ju(r)
$.l6=new H.jv(q)
$.lg=new H.jw(p)},
bZ:function(a,b){return a(b)||b},
lV:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fD("Illegal RegExp pattern ("+String(r)+")",a))},
n0:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mH:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lh:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kd:function(a,b,c){var u=H.n1(a,b,c)
return u},
n1:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lh(b),'g'),H.mH(c))},
i9:function i9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hj:function hj(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(a){this.a=a},
jC:function jC(a){this.a=a},
eE:function eE(a){this.a=a
this.b=null},
ca:function ca(){},
hX:function hX(){},
hN:function hN(){},
c7:function c7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ib:function ib(a){this.a=a},
fb:function fb(a){this.a=a},
hA:function hA(a){this.a=a},
iE:function iE(a){this.a=a},
aP:function aP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fQ:function fQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dq:function dq(a,b){this.a=a
this.$ti=b},
fR:function fR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cW:function(a){return a},
bA:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.cZ(b,a))},
mq:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.mG(a,b,c))
return b},
co:function co(){},
dy:function dy(){},
cn:function cn(){},
dz:function dz(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
dA:function dA(){},
hg:function hg(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
mI:function(a){return J.kp(a?Object.keys(a):[],null)},
mX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ka:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jt:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.k8==null){H.mO()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.kP("Return interceptor for "+H.k(u(a,q))))}s=a.constructor
r=s==null?null:s[$.ke()]
if(r!=null)return r
r=H.mT(a)
if(r!=null)return r
if(typeof a=="function")return C.O
u=Object.getPrototypeOf(a)
if(u==null)return C.x
if(u===Object.prototype)return C.x
if(typeof s=="function"){Object.defineProperty(s,$.ke(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
lU:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.jE(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.aV(a,0,4294967295,"length",null))
return J.kp(new Array(a),b)},
kp:function(a,b){return J.jM(H.c(a,[b]))},
jM:function(a){H.k9(a)
a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dj.prototype
return J.di.prototype}if(typeof a=="string")return J.bP.prototype
if(a==null)return J.dk.prototype
if(typeof a=="boolean")return J.fL.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.R)return a
return J.jt(a)},
k5:function(a){if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.R)return a
return J.jt(a)},
js:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.R)return a
return J.jt(a)},
k6:function(a){if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.cI.prototype
return a},
k7:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.R)return a
return J.jt(a)},
a1:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).t(a,b)},
lA:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mR(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.k5(a).j(a,b)},
lB:function(a,b,c,d){return J.k7(a).i0(a,b,c,d)},
jD:function(a,b){return J.js(a).B(a,b)},
lC:function(a,b){return J.js(a).N(a,b)},
lD:function(a){return J.k7(a).gi5(a)},
bD:function(a){return J.W(a).gG(a)},
bE:function(a){return J.js(a).gP(a)},
bF:function(a){return J.k5(a).gm(a)},
kg:function(a){return J.js(a).iL(a)},
lE:function(a,b,c){return J.k6(a).b2(a,b,c)},
lF:function(a){return J.k6(a).iY(a)},
ao:function(a){return J.W(a).i(a)},
a:function a(){},
fL:function fL(){},
dk:function dk(){},
dm:function dm(){},
hn:function hn(){},
cI:function cI(){},
bv:function bv(){},
aO:function aO(a){this.$ti=a},
jN:function jN(a){this.$ti=a},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dl:function dl(){},
dj:function dj(){},
di:function di(){},
bP:function bP(){}},P={
mf:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mz()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c0(new P.iG(s),1)).observe(u,{childList:true})
return new P.iF(s,u,t)}else if(self.setImmediate!=null)return P.mA()
return P.mB()},
mg:function(a){self.scheduleImmediate(H.c0(new P.iH(H.m(a,{func:1,ret:-1})),0))},
mh:function(a){self.setImmediate(H.c0(new P.iI(H.m(a,{func:1,ret:-1})),0))},
mi:function(a){P.jS(C.n,H.m(a,{func:1,ret:-1}))},
jS:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.h.a_(a.a,1000)
return P.mo(u<0?0:u,b)},
kN:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[P.b_]})
u=C.h.a_(a.a,1000)
return P.mp(u<0?0:u,b)},
mo:function(a,b){var u=new P.eK()
u.eD(a,b)
return u},
mp:function(a,b){var u=new P.eK()
u.eE(a,b)
return u},
mj:function(a,b){var u,t,s
b.a=1
try{a.e_(new P.iR(b),new P.iS(b),null)}catch(s){u=H.au(s)
t=H.c2(s)
P.mZ(new P.iT(b,u,t))}},
kW:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iaz")
if(u>=4){t=b.bX()
b.a=a.a
b.c=a.c
P.cM(b,t)}else{t=H.j(b.c,"$ib4")
b.a=2
b.c=a
a.d1(t)}},
cM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.j(g.c,"$iad")
g=g.b
r=s.a
q=s.b
g.toString
P.jn(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cM(h.a,b)}g=h.a
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
if(m){H.j(o,"$iad")
g=g.b
r=o.a
q=o.b
g.toString
P.jn(i,i,g,r,q)
return}l=$.a_
if(l!=n)$.a_=n
else l=i
g=b.c
if(g===8)new P.iX(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.iW(u,b,o).$0()}else if((g&2)!==0)new P.iV(h,u,b).$0()
if(l!=null)$.a_=l
g=u.b
if(!!J.W(g).$icg){if(g.a>=4){k=H.j(q.c,"$ib4")
q.c=null
b=q.b6(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kW(g,q)
return}}j=b.b
k=H.j(j.c,"$ib4")
j.c=null
b=j.b6(k)
g=u.a
r=u.b
if(!g){H.G(r,H.y(j,0))
j.a=4
j.c=r}else{H.j(r,"$iad")
j.a=8
j.c=r}h.a=j
g=j}},
mu:function(a,b){if(H.f0(a,{func:1,args:[P.R,P.al]}))return H.m(a,{func:1,ret:null,args:[P.R,P.al]})
if(H.f0(a,{func:1,args:[P.R]}))return H.m(a,{func:1,ret:null,args:[P.R]})
throw H.h(P.jE(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mt:function(){var u,t
for(;u=$.bY,u!=null;){$.cY=null
t=u.b
$.bY=t
if(t==null)$.cX=null
u.a.$0()}},
mx:function(){$.jY=!0
try{P.mt()}finally{$.cY=null
$.jY=!1
if($.bY!=null)$.kf().$1(P.l8())}},
l3:function(a){var u=new P.e5(H.m(a,{func:1,ret:-1}))
if($.bY==null){$.bY=$.cX=u
if(!$.jY)$.kf().$1(P.l8())}else $.cX=$.cX.b=u},
mw:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.bY
if(u==null){P.l3(a)
$.cY=$.cX
return}t=new P.e5(a)
s=$.cY
if(s==null){t.b=u
$.bY=$.cY=t}else{t.b=s.b
$.cY=s.b=t
if(t.b==null)$.cX=t}},
mZ:function(a){var u,t=null,s={func:1,ret:-1}
H.m(a,s)
u=$.a_
if(C.k===u){P.jp(t,t,C.k,a)
return}u.toString
P.jp(t,t,u,H.m(u.c4(a),s))},
kM:function(a,b){var u,t={func:1,ret:-1}
H.m(b,t)
u=$.a_
if(u===C.k){u.toString
return P.jS(a,b)}return P.jS(a,H.m(u.c4(b),t))},
md:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b_]}
H.m(b,s)
u=$.a_
if(u===C.k){u.toString
return P.kN(a,b)}t=u.dd(b,P.b_)
$.a_.toString
return P.kN(a,H.m(t,s))},
jn:function(a,b,c,d,e){var u={}
u.a=d
P.mw(new P.jo(u,e))},
l1:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.a_
if(t===c)return d.$0()
$.a_=c
u=t
try{t=d.$0()
return t}finally{$.a_=u}},
l2:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.G(e,g)
t=$.a_
if(t===c)return d.$1(e)
$.a_=c
u=t
try{t=d.$1(e)
return t}finally{$.a_=u}},
mv:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.G(e,h)
H.G(f,i)
t=$.a_
if(t===c)return d.$2(e,f)
$.a_=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a_=u}},
jp:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.c4(d):c.i6(d,-1)
P.l3(d)},
iG:function iG(a){this.a=a},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a){this.a=a},
iI:function iI(a){this.a=a},
eK:function eK(){this.c=0},
jh:function jh(a,b){this.a=a
this.b=b},
jg:function jg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b4:function b4(a,b,c,d,e){var _=this
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
e5:function e5(a){this.a=a
this.b=null},
hQ:function hQ(){},
hS:function hS(a,b){this.a=a
this.b=b},
hT:function hT(a,b){this.a=a
this.b=b},
cw:function cw(){},
hR:function hR(){},
b_:function b_(){},
ad:function ad(a,b){this.a=a
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
kq:function(a,b){return new H.aP([a,b])},
lW:function(a){return H.mJ(a,new H.aP([null,null]))},
dr:function(a){return new P.j1([a])},
jW:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mn:function(a,b,c){var u=new P.el(a,b,[c])
u.c=a.e
return u},
lS:function(a,b,c){var u,t
if(P.jZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.f])
C.a.h($.am,a)
try{P.ms(a,u)}finally{if(0>=$.am.length)return H.l($.am,-1)
$.am.pop()}t=P.kK(b,H.mS(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jK:function(a,b,c){var u,t
if(P.jZ(a))return b+"..."+c
u=new P.bc(b)
C.a.h($.am,a)
try{t=u
t.a=P.kK(t.a,a,", ")}finally{if(0>=$.am.length)return H.l($.am,-1)
$.am.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jZ:function(a){var u,t
for(u=$.am.length,t=0;t<u;++t)if(a===$.am[t])return!0
return!1},
ms:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.n(b,"$ib",[P.f],"$ab")
u=a.gP(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.v())return
r=H.k(u.gE(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.v()){if(s<=5)return
if(0>=b.length)return H.l(b,-1)
q=b.pop()
if(0>=b.length)return H.l(b,-1)
p=b.pop()}else{o=u.gE(u);++s
if(!u.v()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.l(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gE(u);++s
for(;u.v();o=n,n=m){m=u.gE(u);++s
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
kr:function(a,b){var u,t,s=P.dr(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t)s.h(0,H.G(a[t],b))
return s},
kt:function(a){var u,t={}
if(P.jZ(a))return"{...}"
u=new P.bc("")
try{C.a.h($.am,a)
u.a+="{"
t.a=!0
J.lC(a,new P.fV(t,u))
u.a+="}"}finally{if(0>=$.am.length)return H.l($.am,-1)
$.am.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j1:function j1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bX:function bX(a){this.a=a
this.c=this.b=null},
el:function el(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fS:function fS(){},
w:function w(){},
fU:function fU(){},
fV:function fV(a,b){this.a=a
this.b=b},
a8:function a8(){},
j8:function j8(){},
em:function em(){},
cb:function cb(){},
cc:function cc(){},
ft:function ft(){},
fJ:function fJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fI:function fI(a){this.a=a},
iq:function iq(){},
ir:function ir(){},
ji:function ji(a){this.b=0
this.c=a},
lQ:function(a){if(a instanceof H.ca)return a.i(0)
return"Instance of '"+H.bS(a)+"'"},
lX:function(a,b,c){var u,t
H.G(b,c)
u=J.lU(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.U(u,t,b)
return H.n(u,"$ib",[c],"$ab")},
ks:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bE(a);u.v();)C.a.h(s,H.G(u.gE(u),c))
if(b)return s
return H.n(J.jM(s),"$ib",t,"$ab")},
jR:function(a){var u,t,s=P.D
H.n(a,"$ie",[s],"$ae")
if(a.constructor===Array){H.n(a,"$iaO",[s],"$aaO")
u=a.length
t=P.kE(0,null,u)
return H.kC(t<u?C.a.eb(a,0,t):a)}return P.mb(a,0,null)},
mb:function(a,b,c){var u,t,s
H.n(a,"$ie",[P.D],"$ae")
u=J.bE(a)
for(t=0;t<b;++t)if(!u.v())throw H.h(P.aV(b,0,t,null,null))
s=[]
for(;u.v();)s.push(u.gE(u))
return H.kC(s)},
m7:function(a){return new H.fM(a,H.lV(a,!1,!0,!1))},
kK:function(a,b,c){var u=J.bE(b)
if(!u.v())return a
if(c.length===0){do a+=H.k(u.gE(u))
while(u.v())}else{a+=H.k(u.gE(u))
for(;u.v();)a=a+c+H.k(u.gE(u))}return a},
l_:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.n(a,"$ib",[P.D],"$ab")
if(c===C.m){u=$.lz().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.i9(H.G(b,H.an(c,"cb",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.l(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jQ(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lM:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lN:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
db:function(a){if(a>=10)return""+a
return"0"+a},
km:function(a,b){return new P.bq(1e6*b+1000*a)},
df:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ao(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lQ(a)},
lG:function(a){return new P.aB(!1,null,null,a)},
jE:function(a,b,c){return new P.aB(!0,a,b,c)},
hs:function(a,b){return new P.bT(null,null,!0,a,b,"Value not in range")},
aV:function(a,b,c,d,e){return new P.bT(b,c,!0,a,d,"Invalid value")},
kE:function(a,b,c){if(0>a||a>c)throw H.h(P.aV(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.aV(b,a,c,"end",null))
return b}return c},
kD:function(a,b){if(typeof a!=="number")return a.az()
if(a<0)throw H.h(P.aV(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.ac(e==null?J.bF(b):e)
return new P.fK(u,!0,a,c,"Index out of range")},
ax:function(a){return new P.io(a)},
kP:function(a){return new P.il(a)},
kJ:function(a){return new P.cv(a)},
bo:function(a){return new P.fe(a)},
r:function(a){return new P.ed(a)},
kc:function(a){H.mX(a)},
N:function N(){},
av:function av(a,b){this.a=a
this.b=b},
B:function B(){},
bq:function bq(a){this.a=a},
fp:function fp(){},
fq:function fq(){},
br:function br(){},
f3:function f3(){},
dC:function dC(){},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fK:function fK(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
io:function io(a){this.a=a},
il:function il(a){this.a=a},
cv:function cv(a){this.a=a},
fe:function fe(a){this.a=a},
hm:function hm(){},
dL:function dL(){},
fj:function fj(a){this.a=a},
ed:function ed(a){this.a=a},
fD:function fD(a,b){this.a=a
this.b=b},
bs:function bs(){},
D:function D(){},
e:function e(){},
aN:function aN(){},
b:function b(){},
O:function O(){},
L:function L(){},
a7:function a7(){},
R:function R(){},
al:function al(){},
f:function f(){},
bc:function bc(a){this.a=a},
mF:function(a){var u,t=J.W(a)
if(!!t.$ibt){u=t.gdi(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eP(a.data,a.height,a.width)},
mE:function(a){if(a instanceof P.eP)return{data:a.a,height:a.b,width:a.c}
return a},
be:function(a){var u,t,s,r,q
if(a==null)return
u=P.kq(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.H(t[r])
u.U(0,q,a[q])}return u},
mD:function(a){var u={}
a.N(0,new P.jq(u))
return u},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a){this.a=a},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(){},
fB:function fB(){},
j0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mm:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j2:function j2(){},
ak:function ak(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b7:function b7(){},
fP:function fP(){},
bb:function bb(){},
hk:function hk(){},
hr:function hr(){},
cs:function cs(){},
hU:function hU(){},
p:function p(){},
bd:function bd(){},
i8:function i8(){},
ej:function ej(){},
ek:function ek(){},
eu:function eu(){},
ev:function ev(){},
eG:function eG(){},
eH:function eH(){},
eN:function eN(){},
eO:function eO(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(a){this.a=a},
f8:function f8(){},
bG:function bG(){},
hl:function hl(){},
e6:function e6(){},
d5:function d5(){},
dG:function dG(){},
bU:function bU(){},
dI:function dI(){},
dO:function dO(){},
dX:function dX(){},
hM:function hM(){},
eC:function eC(){},
eD:function eD(){}},W={
kh:function(){var u=document.createElement("a")
return u},
jG:function(){var u=document.createElement("canvas")
return u},
lO:function(a,b,c){var u=document.body,t=(u&&C.t).a7(u,a,b,c)
t.toString
u=W.E
u=new H.cJ(new W.ah(t),H.m(new W.fs(),{func:1,ret:P.N,args:[u]}),[u])
return H.j(u.gaA(u),"$iS")},
lP:function(a){H.j(a,"$id")
return"wheel"},
cf:function(a){var u,t,s,r="element tag unavailable"
try{u=J.k7(a)
t=u.gdY(a)
if(typeof t==="string")r=u.gdY(a)}catch(s){H.au(s)}return r},
j_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kY:function(a,b,c,d){var u=W.j_(W.j_(W.j_(W.j_(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a6:function(a,b,c,d,e){var u=W.l5(new W.iP(c),W.o)
if(u!=null&&!0)J.lB(a,b,u,!1)
return new W.iO(a,b,u,!1,[e])},
kX:function(a){var u=W.kh(),t=window.location
u=new W.bz(new W.j7(u,t))
u.ep(a)
return u},
mk:function(a,b,c,d){H.j(a,"$iS")
H.H(b)
H.H(c)
H.j(d,"$ibz")
return!0},
ml:function(a,b,c,d){var u,t,s
H.j(a,"$iS")
H.H(b)
H.H(c)
u=H.j(d,"$ibz").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kZ:function(){var u=P.f,t=P.kr(C.p,u),s=H.y(C.p,0),r=H.m(new W.jf(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.je(t,P.dr(u),P.dr(u),P.dr(u),null)
t.eC(null,new H.fY(C.p,r,[s,u]),q,null)
return t},
l5:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.a_
if(u===C.k)return a
return u.dd(a,b)},
t:function t(){},
f1:function f1(){},
d2:function d2(){},
f2:function f2(){},
c6:function c6(){},
d4:function d4(){},
bl:function bl(){},
bH:function bH(){},
c9:function c9(){},
bm:function bm(){},
cd:function cd(){},
ff:function ff(){},
T:function T(){},
ce:function ce(){},
fg:function fg(){},
aJ:function aJ(){},
aK:function aK(){},
fh:function fh(){},
fi:function fi(){},
fl:function fl(){},
aw:function aw(){},
fm:function fm(){},
dc:function dc(){},
dd:function dd(){},
fn:function fn(){},
fo:function fo(){},
iK:function iK(a,b){this.a=a
this.b=b},
S:function S(){},
fs:function fs(){},
o:function o(){},
d:function d(){},
aL:function aL(){},
fx:function fx(){},
fy:function fy(){},
fC:function fC(){},
aM:function aM(){},
fH:function fH(){},
bM:function bM(){},
bt:function bt(){},
ci:function ci(){},
aQ:function aQ(){},
ds:function ds(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(a){this.a=a},
h7:function h7(){},
h8:function h8(a){this.a=a},
aT:function aT(){},
h9:function h9(){},
a9:function a9(){},
ah:function ah(a){this.a=a},
E:function E(){},
cp:function cp(){},
aU:function aU(){},
hp:function hp(){},
hy:function hy(){},
hz:function hz(a){this.a=a},
hB:function hB(){},
aW:function aW(){},
hK:function hK(){},
aX:function aX(){},
hL:function hL(){},
aY:function aY(){},
hO:function hO(){},
hP:function hP(a){this.a=a},
aD:function aD(){},
bV:function bV(){},
dM:function dM(){},
hV:function hV(){},
hW:function hW(){},
cx:function cx(){},
aZ:function aZ(){},
aE:function aE(){},
hY:function hY(){},
hZ:function hZ(){},
i2:function i2(){},
b0:function b0(){},
aF:function aF(){},
i6:function i6(){},
i7:function i7(){},
by:function by(){},
ip:function ip(){},
iB:function iB(){},
b3:function b3(){},
cK:function cK(){},
cL:function cL(){},
iL:function iL(){},
e8:function e8(){},
iZ:function iZ(){},
er:function er(){},
jb:function jb(){},
jc:function jc(){},
iJ:function iJ(){},
iM:function iM(a){this.a=a},
iN:function iN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jV:function jV(a,b,c,d){var _=this
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
bz:function bz(a){this.a=a},
A:function A(){},
dB:function dB(a){this.a=a},
hi:function hi(a){this.a=a},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
ez:function ez(){},
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
dh:function dh(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
as:function as(){},
j7:function j7(a,b){this.a=a
this.b=b},
eQ:function eQ(a){this.a=a},
jj:function jj(a){this.a=a},
e7:function e7(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ee:function ee(){},
ef:function ef(){},
eh:function eh(){},
ei:function ei(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
es:function es(){},
et:function et(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
cR:function cR(){},
cS:function cS(){},
eA:function eA(){},
eB:function eB(){},
eF:function eF(){},
eI:function eI(){},
eJ:function eJ(){},
cT:function cT(){},
cU:function cU(){},
eL:function eL(){},
eM:function eM(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){}},O={
jH:function(a){var u=new O.a2([a])
u.bA(a)
return u},
a2:function a2(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cl:function cl(){this.b=this.a=null},
dv:function dv(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h_:function h_(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ck:function ck(){},
h0:function h0(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aR:function aR(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h2:function h2(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h3:function h3(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bW:function bW(){}},E={
m8:function(a,b){var u=new E.hu(a)
u.ek(a,b)
return u},
mc:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibH)return E.kL(a,!0,!0,!0,!1)
u=W.jG()
t=u.style
t.width="100%"
t.height="100%"
s.gdf(a).h(0,u)
return E.kL(u,!0,!0,!0,!1)},
kL:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dT(),j=H.j(C.l.cv(a,"webgl2",P.lW(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibU")
if(j==null)H.v(P.r("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.m8(j,a)
u=new T.i_(j)
H.ac(j.getParameter(3379))
u.c=H.ac(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e_(a)
t=new X.fO()
t.c=new X.ar(!1,!1,!1)
t.sh5(P.dr(P.D))
u.b=t
t=new X.ha(u)
t.f=0
t.r=V.bx()
t.x=V.bx()
t.ch=t.Q=1
u.c=t
t=new X.fT(u)
t.r=0
t.x=V.bx()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i5(u)
t.f=V.bx()
t.r=V.bx()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seX(H.c([],[[P.cw,P.R]]))
t=u.z
s=document
r=W.a9
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a6(s,"contextmenu",H.m(u.gfs(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a6(a,"focus",H.m(u.gfA(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a6(a,"blur",H.m(u.gfl(),o),!1,p))
t=u.z
n=W.aQ
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a6(s,"keyup",H.m(u.gfE(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a6(s,"keydown",H.m(u.gfC(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a6(a,"mousedown",H.m(u.gfI(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,"mouseup",H.m(u.gfM(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,l,H.m(u.gfK(),q),!1,r))
n=u.z
m=W.b3;(n&&C.a).h(n,W.a6(a,H.H(W.lP(a)),H.m(u.gfO(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a6(s,l,H.m(u.gfu(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a6(s,"mouseup",H.m(u.gfw(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a6(s,"pointerlockchange",H.m(u.gfQ(),o),!1,p))
p=u.z
o=W.aF
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a6(a,"touchstart",H.m(u.gh2(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchend",H.m(u.gfZ(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchmove",H.m(u.gh0(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.av(Date.now(),!1)
k.cy=0
k.d3()
return k},
f9:function f9(){},
ai:function ai(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hu:function hu(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
hx:function hx(a){this.a=a},
dT:function dT(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i1:function i1(a){this.a=a}},Z={
jU:function(a,b,c){var u
H.n(c,"$ib",[P.D],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cW(c)),35044)
a.bindBuffer(b,null)
return new Z.e4(b,u)},
ay:function(a){return new Z.b2(a)},
e4:function e4(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iC:function iC(a){this.a=a},
d7:function d7(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a){this.a=a}},D={
Q:function(){var u=new D.bK()
u.sab(null)
u.saH(null)
u.c=null
u.d=0
return u},
fc:function fc(){},
bK:function bK(){var _=this
_.d=_.c=_.b=_.a=null},
fv:function fv(a){this.a=a},
fw:function fw(a){this.a=a},
x:function x(){this.b=null},
bN:function bN(a){this.b=null
this.$ti=a},
bO:function bO(a){this.b=null
this.$ti=a},
M:function M(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bp:function bp(){var _=this
_.d=_.c=_.b=_.a=null},
a3:function a3(){},
dp:function dp(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dE:function dE(){},
dK:function dK(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){}},X={d8:function d8(a,b){this.a=a
this.b=b},dn:function dn(a,b){this.a=a
this.b=b},fO:function fO(){var _=this
_.d=_.c=_.b=_.a=null},dt:function dt(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fT:function fT(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},b9:function b9(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},ha:function ha(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cm:function cm(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hq:function hq(){},dV:function dV(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i5:function i5(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e_:function e_(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lR:function(a){var u=new X.fE(),t=new V.bI(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kG
if(t==null){t=V.kF(0,0,1,1)
$.kG=t}u.r=t
return u},
d9:function d9(){},
fE:function fE(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dN:function dN(){}},V={
n4:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.e7(a-b,u)
return(a<0?a+u:a)+b},
V:function(a,b,c){if(a==null)return C.i.a9("null",c)
return C.i.a9(C.j.e0(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
c1:function(a,b,c){var u,t,s,r,q,p
H.n(a,"$ib",[P.B],"$ab")
u=H.c([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.V(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.l(u,p)
C.a.U(u,p,C.i.a9(u[p],s))}return u},
kb:function(a){return C.j.iV(Math.pow(2,C.N.cj(Math.log(H.mC(a))/Math.log(2))))},
dx:function(){var u=$.kv
return u==null?$.kv=V.aS(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aS:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ku:function(a,b,c){var u=c.w(0,Math.sqrt(c.F(c))),t=b.aU(u),s=t.w(0,Math.sqrt(t.F(t))),r=u.aU(s),q=new V.X(a.a,a.b,a.c),p=s.O(0).F(q),o=r.O(0).F(q),n=u.O(0).F(q)
return V.aS(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bx:function(){var u=$.kz
return u==null?$.kz=new V.ab(0,0):u},
kA:function(){var u=$.cq
return u==null?$.cq=new V.aC(0,0,0):u},
kF:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dH(a,b,c,d)},
e3:function(){var u=$.kT
return u==null?$.kT=new V.X(0,0,0):u},
kU:function(){var u=$.kS
return u==null?$.kS=new V.X(0,1,0):u},
me:function(){var u=$.is
return u==null?$.is=new V.X(0,0,1):u},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fu:function fu(a){this.a=a},
dw:function dw(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ae:function ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ab:function ab(a,b){this.a=a
this.b=b},
aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dH:function dH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
Z:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.h(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.i.aD(a,0)
t=C.i.aD(b,0)
s=new V.ht()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.hC()
u.el(a)
return u},
i4:function(){var u=new V.i3(),t=P.f
u.shp(new H.aP([t,V.cu]))
u.shs(new H.aP([t,V.cz]))
u.c=null
return u},
b5:function b5(){},
aq:function aq(){},
du:function du(){},
aj:function aj(){this.a=null},
ht:function ht(){this.b=this.a=null},
hC:function hC(){this.a=null},
cu:function cu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dU:function dU(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a){this.b=a
this.c=null},
i3:function i3(){this.c=this.b=this.a=null},
cA:function cA(a){this.b=a
this.a=this.c=null},
n_:function(a){P.md(C.K,new V.jB(a))},
ma:function(a){var u=new V.hG()
u.en(a,!0)
return u},
bn:function bn(){},
jB:function jB(a){this.a=a},
fk:function fk(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fF:function fF(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fG:function fG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ho:function ho(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hG:function hG(){this.b=this.a=null},
hI:function hI(a){this.a=a},
hH:function hH(a){this.a=a},
hJ:function hJ(a){this.a=a}},U={
jI:function(){var u=new U.fd()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kl:function(a){var u=new U.da()
u.a=a
return u},
fd:function fd(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){this.b=this.a=null},
ch:function ch(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
e0:function e0(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e1:function e1(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={de:function de(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lY:function(a,b){var u=a.ad,t=new A.fZ(b,u)
t.em(b,u)
t.ej(a,b)
return t},
jT:function(a,b,c,d,e){var u=new A.ic(a,c,e)
u.f=d
u.shD(P.lX(d,0,P.D))
return u},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(a){this.a=a},
fZ:function fZ(a,b){var _=this
_.bb=_.dk=_.ba=_.ad=_.al=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dE=_.cc=_.dD=_.bo=_.dC=_.dB=_.bn=_.bm=_.dA=_.dz=_.bl=_.bk=_.bj=_.dw=_.dv=_.bi=_.du=_.dt=_.bh=_.ds=_.dr=_.bg=_.bf=_.dq=_.dn=_.be=_.bd=_.dm=_.dl=_.bc=null
_.ci=_.dI=_.cg=_.dH=_.cf=_.dG=_.ce=_.dF=_.cd=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h1:function h1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.al=b3
_.ad=b4
_.ba=b5},
cB:function cB(a,b){this.b=a
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
ct:function ct(){},
bJ:function bJ(a,b){this.a=a
this.b=b},
dW:function dW(){},
ij:function ij(a){this.a=a},
K:function K(a,b,c){this.a=a
this.c=b
this.d=c},
ie:function ie(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
ic:function ic(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
id:function id(a,b,c){this.a=a
this.c=b
this.d=c},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
cC:function cC(a,b,c){this.a=a
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
jm:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cV:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.X(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.X(u+a3,t+a1,s+a2)
q=new V.X(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.X(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jm(i)
l=F.jm(j.b)
k=F.n2(d,a0,new F.jl(j,F.jm(j.c),F.jm(j.d),l,m,c),b)
if(k!=null)a.iv(k)},
n2:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,{func:1,ret:-1,args:[F.aH,P.B,P.B]})
if(a<1)return
if(b<1)return
u=F.kI()
t=H.c([],[F.aH])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.d9(new V.bI(p,0,0,1),new V.ab(r,1))
c.$3(o,r,0)
C.a.h(t,o.c9(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.d9(new V.bI(j,i,h,1),new V.ab(r,m))
c.$3(o,r,n)
C.a.h(t,o.c9(d))}}u.d.i1(a+1,b+1,t)
return u},
dg:function(a,b,c){var u=new F.a5(),t=a.a
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
kI:function(){var u=new F.dJ(),t=new F.it(u)
t.b=!1
t.shE(H.c([],[F.aH]))
u.a=t
t=new F.hF(u)
t.sbV(H.c([],[F.bw]))
u.b=t
t=new F.hE(u)
t.sf3(H.c([],[F.b8]))
u.c=t
t=new F.hD(u)
t.seY(H.c([],[F.a5]))
u.d=t
u.e=null
return u},
kV:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aH(),r=new F.iy()
r.sbV(H.c([],[F.bw]))
s.b=r
r=new F.ix()
u=[F.b8]
r.sf4(H.c([],u))
r.sf5(H.c([],u))
s.c=r
r=new F.iu()
u=[F.a5]
r.seZ(H.c([],u))
r.sf_(H.c([],u))
r.sf0(H.c([],u))
s.d=r
h=$.lv()
s.e=0
r=$.bi()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bh().a)!==0?e:t
s.x=(u&$.bg().a)!==0?b:t
s.y=(u&$.bj().a)!==0?f:t
s.z=(u&$.bk().a)!==0?g:t
s.Q=(u&$.lw().a)!==0?c:t
s.ch=(u&$.c5().a)!==0?i:0
s.cx=(u&$.bf().a)!==0?a:t
return s},
jl:function jl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a5:function a5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b8:function b8(){this.b=this.a=null},
bw:function bw(){this.a=null},
dJ:function dJ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hD:function hD(a){this.a=a
this.b=null},
hE:function hE(a){this.a=a
this.b=null},
hF:function hF(a){this.a=a
this.b=null},
aH:function aH(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iA:function iA(a){this.a=a},
iz:function iz(a){this.a=a},
it:function it(a){this.a=a
this.c=this.b=null},
iu:function iu(){this.d=this.c=this.b=null},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(){this.c=this.b=null},
iy:function iy(){this.b=null}},T={cy:function cy(){},dP:function dP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},i_:function i_(a){var _=this
_.a=a
_.e=_.d=_.c=null},i0:function i0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
ld:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="testCanvas",a0=null,a1="modifiers",a2=34067,a3=V.ma("Test 010"),a4=W.jG()
a4.className="pageLargeCanvas"
a4.id=a
a3.a.appendChild(a4)
u=[P.f]
a3.da(H.c(["A test of the Material Lighting shader with solid color and ","a directional light= with a cube texture bump map."],u))
a3.da(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a)
if(t==null)H.v(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.mc(t,!0,!0,!0,!1)
r=new E.ai()
r.a=""
r.b=!0
u=E.ai
r.seP(0,O.jH(u))
r.y.b0(r.giw(),r.giz())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.scA(0,a0)
r.saV(a0)
q=F.kI()
F.cV(q,a0,a0,1,1,1,0,0,1)
F.cV(q,a0,a0,1,1,0,1,0,3)
F.cV(q,a0,a0,1,1,0,0,1,2)
F.cV(q,a0,a0,1,1,-1,0,0,0)
F.cV(q,a0,a0,1,1,0,-1,0,0)
F.cV(q,a0,a0,1,1,0,0,-1,3)
q.aK()
r.scA(0,q)
p=new U.ch()
o=U.aa
p.bA(o)
p.b0(p.gfd(),p.gfV())
p.e=null
p.f=V.dx()
p.r=0
n=s.r
m=new U.e1()
l=U.jI()
l.scu(0,!0)
l.scn(6.283185307179586)
l.scp(0)
l.sa4(0,0)
l.sco(100)
l.sR(0)
l.sca(0.5)
m.b=l
k=m.gaG()
l.gq().h(0,k)
l=U.jI()
l.scu(0,!0)
l.scn(6.283185307179586)
l.scp(0)
l.sa4(0,0)
l.sco(100)
l.sR(0)
l.sca(0.5)
m.c=l
l.gq().h(0,k)
m.d=null
m.r=m.f=m.e=!1
m.y=m.x=2.5
m.Q=4
m.ch=m.cx=!1
m.db=m.cy=0
m.dx=null
m.dy=0
m.fx=m.fr=null
j=new X.ar(!1,!1,!1)
i=m.d
m.d=j
l=[X.ar]
k=new D.M(a1,i,j,l)
k.b=!0
m.M(k)
k=m.f
if(k!==!1){m.f=!1
k=new D.M("invertX",k,!1,[P.N])
k.b=!0
m.M(k)}k=m.r
if(k!==!0){m.r=!0
k=new D.M("invertY",k,!0,[P.N])
k.b=!0
m.M(k)}m.aT(n)
p.h(0,m)
n=s.r
m=new U.e0()
k=U.jI()
k.scu(0,!0)
k.scn(6.283185307179586)
k.scp(0)
k.sa4(0,0)
k.sco(100)
k.sR(0)
k.sca(0.2)
m.b=k
k.gq().h(0,m.gaG())
m.c=null
m.d=!1
m.e=2.5
m.r=4
m.x=m.y=!1
m.z=0
m.Q=null
m.ch=0
m.cy=m.cx=null
j=new X.ar(!0,!1,!1)
i=m.c
m.c=j
k=new D.M(a1,i,j,l)
k.b=!0
m.M(k)
m.aT(n)
p.h(0,m)
n=s.r
m=new U.e2()
m.c=0.01
m.e=m.d=0
j=new X.ar(!1,!1,!1)
m.b=j
l=new D.M(a1,a0,j,l)
l.b=!0
m.M(l)
m.aT(n)
p.h(0,m)
r.saV(p)
h=new O.dv()
h.seM(O.jH(V.ae))
h.e.b0(h.gfh(),h.gfj())
p=new O.aR(h,"emission")
p.c=C.c
p.f=new V.a4(0,0,0)
h.f=p
p=new O.aR(h,"ambient")
p.c=C.c
p.f=new V.a4(0,0,0)
h.r=p
p=new O.aR(h,"diffuse")
p.c=C.c
p.f=new V.a4(0,0,0)
h.x=p
p=new O.aR(h,"invDiffuse")
p.c=C.c
p.f=new V.a4(0,0,0)
h.y=p
p=new O.h3(h,"specular")
p.c=C.c
p.f=new V.a4(0,0,0)
p.ch=100
h.z=p
p=new O.h0(h,"bump")
p.c=C.c
h.Q=p
h.ch=null
p=new O.aR(h,"reflect")
p.c=C.c
p.f=new V.a4(0,0,0)
h.cx=p
p=new O.h2(h,"refract")
p.c=C.c
p.f=new V.a4(0,0,0)
p.ch=1
h.cy=p
p=new O.h_(h,"alpha")
p.c=C.c
p.f=1
h.db=p
p=new D.dp()
p.bA(D.a3)
p.seV(H.c([],[D.bp]))
p.sh4(H.c([],[D.dE]))
p.sho(H.c([],[D.dK]))
p.shA(H.c([],[D.dQ]))
p.shB(H.c([],[D.dR]))
p.shC(H.c([],[D.dS]))
p.ch=p.Q=null
p.cz(p.gff(),p.gfT(),p.gfX())
h.dx=p
n=p.Q
p=n==null?p.Q=D.Q():n
p.h(0,h.gha())
p=h.dx
n=p.ch
p=n==null?p.ch=D.Q():n
p.h(0,h.gb4())
h.dy=null
p=h.dx
g=V.kU()
n=U.kl(V.ku(V.kA(),g,new V.X(1,1,-3)))
f=new V.a4(1,1,1)
m=new D.bp()
m.c=new V.a4(1,1,1)
m.a=V.me()
i=m.b
m.b=n
n.gq().h(0,m.ger())
o=new D.M("mover",i,m.b,[o])
o.b=!0
m.an(o)
if(!m.c.t(0,f)){i=m.c
m.c=f
o=new D.M("color",i,f,[V.a4])
o.b=!0
m.an(o)}p.h(0,m)
p=h.r
p.sak(0,new V.a4(0,0,1))
p=h.x
p.sak(0,new V.a4(0,1,0))
p=h.z
p.sak(0,new V.a4(1,0,0))
p=h.z
if(p.c===C.c){p.c=C.f
p.bz()
p.bY(100)
o=p.a
o.a=null
o.X(a0)}p.bY(10)
p=h.Q
o=s.f
n=o.a
e=n.createTexture()
n.bindTexture(a2,e)
n.texParameteri(a2,10242,10497)
n.texParameteri(a2,10243,10497)
n.texParameteri(a2,10241,9729)
n.texParameteri(a2,10240,9729)
n.bindTexture(a2,a0)
d=new T.dP()
d.a=0
d.b=e
d.c=!1
d.d=0
o.aF(d,e,"../resources/diceBumpMap/posx.png",34069,!1,!1)
o.aF(d,e,"../resources/diceBumpMap/negx.png",34070,!1,!1)
o.aF(d,e,"../resources/diceBumpMap/posy.png",34071,!1,!1)
o.aF(d,e,"../resources/diceBumpMap/negy.png",34072,!1,!1)
o.aF(d,e,"../resources/diceBumpMap/posz.png",34073,!1,!1)
o.aF(d,e,"../resources/diceBumpMap/negz.png",34074,!1,!1)
o=p.c
if(o!==C.d){if(o===C.c)p.ar()
p.c=C.d
p.hh(a0)
o=p.a
o.a=null
o.X(a0)}p.hi(d)
p=new M.de()
p.seu(0,O.jH(u))
p.d.b0(p.gfn(),p.gfp())
p.x=p.r=p.f=p.e=null
c=X.lR(a0)
b=new X.dD()
b.c=1.0471975511965976
b.d=0.1
b.e=2000
b.saV(a0)
u=b.c
if(!(Math.abs(u-1.0471975511965976)<$.P().a)){b.c=1.0471975511965976
u=new D.M("fov",u,1.0471975511965976,[P.B])
u.b=!0
b.aC(u)}u=b.d
if(!(Math.abs(u-0.1)<$.P().a)){b.d=0.1
u=new D.M("near",u,0.1,[P.B])
u.b=!0
b.aC(u)}u=b.e
if(!(Math.abs(u-2000)<$.P().a)){b.e=2000
u=new D.M("far",u,2000,[P.B])
u.b=!0
b.aC(u)}u=p.a
if(u!==b){if(u!=null)u.gq().V(0,p.gag())
i=p.a
p.a=b
b.gq().h(0,p.gag())
u=new D.M("camera",i,p.a,[X.d9])
u.b=!0
p.ao(u)}u=p.b
if(u!==c){if(u!=null)u.gq().V(0,p.gag())
i=p.b
p.b=c
c.gq().h(0,p.gag())
u=new D.M("target",i,p.b,[X.dN])
u.b=!0
p.ao(u)}p.sdZ(a0)
p.sdZ(h)
p.d.h(0,r)
p.a.saV(U.kl(V.aS(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=s.d
if(u!==p){if(u!=null)u.gq().V(0,s.gcD())
s.d=p
p.gq().h(0,s.gcD())
s.cE()}u=s.z
if(u==null)u=s.z=D.Q()
p={func:1,ret:-1,args:[D.x]}
o=H.m(new B.jy(a3,h),p)
if(u.b==null)u.saH(H.c([],[p]))
u=u.b;(u&&C.a).h(u,o)
V.n_(s)},
jy:function jy(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jO.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gG:function(a){return H.cr(a)},
i:function(a){return"Instance of '"+H.bS(a)+"'"}}
J.fL.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iN:1}
J.dk.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dm.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hn.prototype={}
J.cI.prototype={}
J.bv.prototype={
i:function(a){var u=a[$.lk()]
if(u==null)return this.ee(a)
return"JavaScript function for "+H.k(J.ao(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibs:1}
J.aO.prototype={
h:function(a,b){H.G(b,H.y(a,0))
if(!!a.fixed$length)H.v(P.ax("add"))
a.push(b)},
V:function(a,b){var u
if(!!a.fixed$length)H.v(P.ax("remove"))
for(u=0;u<a.length;++u)if(J.a1(a[u],b)){a.splice(u,1)
return!0}return!1},
N:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.bo(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.U(t,u,H.k(a[u]))
return t.join(b)},
is:function(a){return this.l(a,"")},
il:function(a,b){var u,t,s
H.m(b,{func:1,ret:P.N,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.z(b.$1(s)))return s
if(a.length!==u)throw H.h(P.bo(a))}throw H.h(H.jL())},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
eb:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.aV(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.aV(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gbp:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.jL())},
dc:function(a,b){var u,t
H.m(b,{func:1,ret:P.N,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.z(b.$1(a[t])))return!0
if(a.length!==u)throw H.h(P.bo(a))}return!1},
S:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a1(a[u],b))return!0
return!1},
i:function(a){return P.jK(a,"[","]")},
gP:function(a){return new J.ap(a,a.length,[H.y(a,0)])},
gG:function(a){return H.cr(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.v(P.ax("set length"))
if(b<0)throw H.h(P.aV(b,0,null,"newLength",null))
a.length=b},
U:function(a,b,c){H.G(c,H.y(a,0))
if(!!a.immutable$list)H.v(P.ax("indexed set"))
if(b>=a.length||b<0)throw H.h(H.cZ(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.jN.prototype={}
J.ap.prototype={
gE:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.C(s))
u=t.c
if(u>=r){t.scT(null)
return!1}t.scT(s[u]);++t.c
return!0},
scT:function(a){this.d=H.G(a,H.y(this,0))},
$iaN:1}
J.dl.prototype={
iV:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.ax(""+a+".toInt()"))},
cj:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ax(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ax(""+a+".round()"))},
e0:function(a,b){var u,t
if(b>20)throw H.h(P.aV(b,0,20,"fractionDigits",null))
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
e7:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ei:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d5(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.d5(a,b)},
d5:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ax("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
b7:function(a,b){var u
if(a>0)u=this.hn(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hn:function(a,b){return b>31?0:a>>>b},
$iB:1,
$ia7:1}
J.dj.prototype={$iD:1}
J.di.prototype={}
J.bP.prototype={
c8:function(a,b){if(b<0)throw H.h(H.cZ(a,b))
if(b>=a.length)H.v(H.cZ(a,b))
return a.charCodeAt(b)},
aD:function(a,b){if(b>=a.length)throw H.h(H.cZ(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.h(P.jE(b,null,null))
return a+b},
bx:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b2:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.hs(b,null))
if(b>c)throw H.h(P.hs(b,null))
if(c>a.length)throw H.h(P.hs(c,null))
return a.substring(b,c)},
b1:function(a,b){return this.b2(a,b,null)},
iY:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a9:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikx:1,
$if:1}
H.q.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.i.c8(this.a,b)},
$adZ:function(){return[P.D]},
$aw:function(){return[P.D]},
$ae:function(){return[P.D]},
$ab:function(){return[P.D]}}
H.fr.prototype={}
H.bQ.prototype={
gP:function(a){var u=this
return new H.cj(u,u.gm(u),[H.an(u,"bQ",0)])},
bw:function(a,b){return this.ed(0,H.m(b,{func:1,ret:P.N,args:[H.an(this,"bQ",0)]}))}}
H.cj.prototype={
gE:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.k5(s),q=r.gm(s)
if(t.b!==q)throw H.h(P.bo(s))
u=t.c
if(u>=q){t.saP(null)
return!1}t.saP(r.B(s,u));++t.c
return!0},
saP:function(a){this.d=H.G(a,H.y(this,0))},
$iaN:1}
H.fW.prototype={
gP:function(a){return new H.fX(J.bE(this.a),this.b,this.$ti)},
gm:function(a){return J.bF(this.a)},
B:function(a,b){return this.b.$1(J.jD(this.a,b))},
$ae:function(a,b){return[b]}}
H.fX.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.saP(u.c.$1(t.gE(t)))
return!0}u.saP(null)
return!1},
gE:function(a){return this.a},
saP:function(a){this.a=H.G(a,H.y(this,1))},
$aaN:function(a,b){return[b]}}
H.fY.prototype={
gm:function(a){return J.bF(this.a)},
B:function(a,b){return this.b.$1(J.jD(this.a,b))},
$abQ:function(a,b){return[b]},
$ae:function(a,b){return[b]}}
H.cJ.prototype={
gP:function(a){return new H.iD(J.bE(this.a),this.b,this.$ti)}}
H.iD.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(H.z(t.$1(u.gE(u))))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.bL.prototype={}
H.dZ.prototype={}
H.dY.prototype={}
H.i9.prototype={
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
H.hj.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fN.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.k(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.k(t.a)+")"
return s+r+"' on '"+u+"' ("+H.k(t.a)+")"}}
H.im.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jC.prototype={
$1:function(a){if(!!J.W(a).$ibr)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.eE.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ial:1}
H.ca.prototype={
i:function(a){return"Closure '"+H.bS(this).trim()+"'"},
$ibs:1,
gj_:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hX.prototype={}
H.hN.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c4(u)+"'"}}
H.c7.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c7))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cr(this.a)
else u=typeof t!=="object"?J.bD(t):H.cr(t)
return(u^H.cr(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bS(u)+"'")}}
H.ib.prototype={
i:function(a){return this.a}}
H.fb.prototype={
i:function(a){return this.a}}
H.hA.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.iE.prototype={
i:function(a){return"Assertion failed: "+P.df(this.a)}}
H.aP.prototype={
gm:function(a){return this.a},
ga2:function(a){return new H.dq(this,[H.y(this,0)])},
dh:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cQ(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cQ(t,b)}else return s.iq(b)},
iq:function(a){var u=this.d
if(u==null)return!1
return this.ck(this.bI(u,J.bD(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b5(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b5(r,b)
s=t==null?null:t.b
return s}else return q.ir(b)},
ir:function(a){var u,t,s=this.d
if(s==null)return
u=this.bI(s,J.bD(a)&0x3ffffff)
t=this.ck(u,a)
if(t<0)return
return u[t].b},
U:function(a,b,c){var u,t,s,r,q,p,o=this
H.G(b,H.y(o,0))
H.G(c,H.y(o,1))
if(typeof b==="string"){u=o.b
o.cI(u==null?o.b=o.bT():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cI(t==null?o.c=o.bT():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bT()
r=J.bD(b)&0x3ffffff
q=o.bI(s,r)
if(q==null)o.bZ(s,r,[o.bU(b,c)])
else{p=o.ck(q,b)
if(p>=0)q[p].b=c
else q.push(o.bU(b,c))}}},
N:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.y(s,0),H.y(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.bo(s))
u=u.c}},
cI:function(a,b,c){var u,t=this
H.G(b,H.y(t,0))
H.G(c,H.y(t,1))
u=t.b5(a,b)
if(u==null)t.bZ(a,b,t.bU(b,c))
else u.b=c},
eG:function(){this.r=this.r+1&67108863},
bU:function(a,b){var u,t=this,s=new H.fQ(H.G(a,H.y(t,0)),H.G(b,H.y(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eG()
return s},
ck:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a1(a[t].a,b))return t
return-1},
i:function(a){return P.kt(this)},
b5:function(a,b){return a[b]},
bI:function(a,b){return a[b]},
bZ:function(a,b,c){a[b]=c},
eU:function(a,b){delete a[b]},
cQ:function(a,b){return this.b5(a,b)!=null},
bT:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bZ(t,u,t)
this.eU(t,u)
return t}}
H.fQ.prototype={}
H.dq.prototype={
gm:function(a){return this.a.a},
gP:function(a){var u=this.a,t=new H.fR(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fR.prototype={
gE:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.bo(t))
else{t=u.c
if(t==null){u.scH(null)
return!1}else{u.scH(t.a)
u.c=u.c.c
return!0}}},
scH:function(a){this.d=H.G(a,H.y(this,0))},
$iaN:1}
H.ju.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.jv.prototype={
$2:function(a,b){return this.a(a,b)},
$S:37}
H.jw.prototype={
$1:function(a){return this.a(H.H(a))},
$S:36}
H.fM.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikx:1}
H.co.prototype={$inp:1}
H.dy.prototype={
gm:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cn.prototype={
j:function(a,b){H.bA(b,a,a.length)
return a[b]},
$abL:function(){return[P.B]},
$aw:function(){return[P.B]},
$ie:1,
$ae:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.dz.prototype={
$abL:function(){return[P.D]},
$aw:function(){return[P.D]},
$ie:1,
$ae:function(){return[P.D]},
$ib:1,
$ab:function(){return[P.D]}}
H.hb.prototype={
j:function(a,b){H.bA(b,a,a.length)
return a[b]}}
H.hc.prototype={
j:function(a,b){H.bA(b,a,a.length)
return a[b]}}
H.hd.prototype={
j:function(a,b){H.bA(b,a,a.length)
return a[b]}}
H.he.prototype={
j:function(a,b){H.bA(b,a,a.length)
return a[b]}}
H.hf.prototype={
j:function(a,b){H.bA(b,a,a.length)
return a[b]}}
H.dA.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bA(b,a,a.length)
return a[b]},
$inq:1}
H.hg.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bA(b,a,a.length)
return a[b]}}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
P.iG.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:12}
P.iF.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:38}
P.iH.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iI.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eK.prototype={
eD:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c0(new P.jh(this,b),0),a)
else throw H.h(P.ax("`setTimeout()` not found."))},
eE:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c0(new P.jg(this,a,Date.now(),b),0),a)
else throw H.h(P.ax("Periodic timer."))},
$ib_:1}
P.jh.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jg.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.h.ei(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b4.prototype={
iu:function(a){if(this.c!==6)return!0
return this.b.b.cs(H.m(this.d,{func:1,ret:P.N,args:[P.R]}),a.a,P.N,P.R)},
io:function(a){var u=this.e,t=P.R,s={futureOr:1,type:H.y(this,1)},r=this.b.b
if(H.f0(u,{func:1,args:[P.R,P.al]}))return H.k4(r.iP(u,a.a,a.b,null,t,P.al),s)
else return H.k4(r.cs(H.m(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.az.prototype={
e_:function(a,b,c){var u,t,s,r=H.y(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a_
if(u!==C.k){u.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mu(b,u)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.az($.a_,[c])
s=b==null?1:3
this.cJ(new P.b4(t,s,a,b,[r,c]))
return t},
iU:function(a,b){return this.e_(a,null,b)},
cJ:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.j(t.c,"$ib4")
t.c=a}else{if(s===2){u=H.j(t.c,"$iaz")
s=u.a
if(s<4){u.cJ(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jp(null,null,s,H.m(new P.iQ(t,a),{func:1,ret:-1}))}},
d1:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.j(p.c,"$ib4")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.j(p.c,"$iaz")
u=q.a
if(u<4){q.d1(a)
return}p.a=u
p.c=q.c}o.a=p.b6(a)
u=p.b
u.toString
P.jp(null,null,u,H.m(new P.iU(o,p),{func:1,ret:-1}))}},
bX:function(){var u=H.j(this.c,"$ib4")
this.c=null
return this.b6(u)},
b6:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cM:function(a){var u,t,s=this,r=H.y(s,0)
H.k4(a,{futureOr:1,type:r})
u=s.$ti
if(H.k1(a,"$icg",u,"$acg"))if(H.k1(a,"$iaz",u,null))P.kW(a,s)
else P.mj(a,s)
else{t=s.bX()
H.G(a,r)
s.a=4
s.c=a
P.cM(s,t)}},
cN:function(a,b){var u,t=this
H.j(b,"$ial")
u=t.bX()
t.a=8
t.c=new P.ad(a,b)
P.cM(t,u)},
$icg:1}
P.iQ.prototype={
$0:function(){P.cM(this.a,this.b)},
$S:2}
P.iU.prototype={
$0:function(){P.cM(this.b,this.a.a)},
$S:2}
P.iR.prototype={
$1:function(a){var u=this.a
u.a=0
u.cM(a)},
$S:12}
P.iS.prototype={
$2:function(a,b){H.j(b,"$ial")
this.a.cN(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.iT.prototype={
$0:function(){this.a.cN(this.b,this.c)},
$S:2}
P.iX.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dX(H.m(s.d,{func:1}),null)}catch(r){u=H.au(r)
t=H.c2(r)
if(o.d){s=H.j(o.a.a.c,"$iad").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.j(o.a.a.c,"$iad")
else q.b=new P.ad(u,t)
q.a=!0
return}if(!!J.W(n).$icg){if(n instanceof P.az&&n.a>=4){if(n.a===8){s=o.b
s.b=H.j(n.c,"$iad")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iU(new P.iY(p),null)
s.a=!1}},
$S:3}
P.iY.prototype={
$1:function(a){return this.a},
$S:31}
P.iW.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.y(s,0)
q=H.G(n.c,r)
p=H.y(s,1)
n.a.b=s.b.b.cs(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.au(o)
t=H.c2(o)
s=n.a
s.b=new P.ad(u,t)
s.a=!0}},
$S:3}
P.iV.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.j(m.a.a.c,"$iad")
r=m.c
if(H.z(r.iu(u))&&r.e!=null){q=m.b
q.b=r.io(u)
q.a=!1}}catch(p){t=H.au(p)
s=H.c2(p)
r=H.j(m.a.a.c,"$iad")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ad(t,s)
n.a=!0}},
$S:3}
P.e5.prototype={}
P.hQ.prototype={
gm:function(a){var u,t,s=this,r={},q=new P.az($.a_,[P.D])
r.a=0
u=H.y(s,0)
t=H.m(new P.hS(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.hT(r,q),{func:1,ret:-1})
W.a6(s.a,s.b,t,!1,u)
return q}}
P.hS.prototype={
$1:function(a){H.G(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.y(this.b,0)]}}}
P.hT.prototype={
$0:function(){this.b.cM(this.a.a)},
$S:2}
P.cw.prototype={}
P.hR.prototype={}
P.b_.prototype={}
P.ad.prototype={
i:function(a){return H.k(this.a)},
$ibr:1}
P.jk.prototype={$inE:1}
P.jo.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dC():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:2}
P.j3.prototype={
iQ:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.k===$.a_){a.$0()
return}P.l1(r,r,this,a,-1)}catch(s){u=H.au(s)
t=H.c2(s)
P.jn(r,r,this,u,H.j(t,"$ial"))}},
iR:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.G(b,c)
try{if(C.k===$.a_){a.$1(b)
return}P.l2(r,r,this,a,b,-1,c)}catch(s){u=H.au(s)
t=H.c2(s)
P.jn(r,r,this,u,H.j(t,"$ial"))}},
i6:function(a,b){return new P.j5(this,H.m(a,{func:1,ret:b}),b)},
c4:function(a){return new P.j4(this,H.m(a,{func:1,ret:-1}))},
dd:function(a,b){return new P.j6(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
dX:function(a,b){H.m(a,{func:1,ret:b})
if($.a_===C.k)return a.$0()
return P.l1(null,null,this,a,b)},
cs:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.G(b,d)
if($.a_===C.k)return a.$1(b)
return P.l2(null,null,this,a,b,c,d)},
iP:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.G(b,e)
H.G(c,f)
if($.a_===C.k)return a.$2(b,c)
return P.mv(null,null,this,a,b,c,d,e,f)}}
P.j5.prototype={
$0:function(){return this.a.dX(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.j4.prototype={
$0:function(){return this.a.iQ(this.b)},
$S:3}
P.j6.prototype={
$1:function(a){var u=this.c
return this.a.iR(this.b,H.G(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j1.prototype={
gP:function(a){var u=this,t=new P.el(u,u.r,u.$ti)
t.c=u.e
return t},
gm:function(a){return this.a},
S:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.j(u[b],"$ibX")!=null}else{t=this.eQ(b)
return t}},
eQ:function(a){var u=this.d
if(u==null)return!1
return this.bG(this.cU(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.G(b,H.y(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cK(u==null?s.b=P.jW():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cK(t==null?s.c=P.jW():t,b)}else return s.eH(0,b)},
eH:function(a,b){var u,t,s,r=this
H.G(b,H.y(r,0))
u=r.d
if(u==null)u=r.d=P.jW()
t=r.cO(b)
s=u[t]
if(s==null)u[t]=[r.bD(b)]
else{if(r.bG(s,b)>=0)return!1
s.push(r.bD(b))}return!0},
V:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h7(this.c,b)
else return this.h6(0,b)},
h6:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cU(r,b)
t=s.bG(u,b)
if(t<0)return!1
s.d6(u.splice(t,1)[0])
return!0},
cK:function(a,b){H.G(b,H.y(this,0))
if(H.j(a[b],"$ibX")!=null)return!1
a[b]=this.bD(b)
return!0},
h7:function(a,b){var u
if(a==null)return!1
u=H.j(a[b],"$ibX")
if(u==null)return!1
this.d6(u)
delete a[b]
return!0},
cW:function(){this.r=1073741823&this.r+1},
bD:function(a){var u,t=this,s=new P.bX(H.G(a,H.y(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cW()
return s},
d6:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cW()},
cO:function(a){return J.bD(a)&1073741823},
cU:function(a,b){return a[this.cO(b)]},
bG:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a1(a[t].a,b))return t
return-1}}
P.bX.prototype={}
P.el.prototype={
gE:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.bo(t))
else{t=u.c
if(t==null){u.scL(null)
return!1}else{u.scL(H.G(t.a,H.y(u,0)))
u.c=u.c.b
return!0}}},
scL:function(a){this.d=H.G(a,H.y(this,0))},
$iaN:1}
P.fS.prototype={$ie:1,$ib:1}
P.w.prototype={
gP:function(a){return new H.cj(a,this.gm(a),[H.d_(this,a,"w",0)])},
B:function(a,b){return this.j(a,b)},
iX:function(a,b){var u,t=this,s=H.c([],[H.d_(t,a,"w",0)])
C.a.sm(s,t.gm(a))
for(u=0;u<t.gm(a);++u)C.a.U(s,u,t.j(a,u))
return s},
iW:function(a){return this.iX(a,!0)},
i:function(a){return P.jK(a,"[","]")}}
P.fU.prototype={}
P.fV.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.k(a)
t.a=u+": "
t.a+=H.k(b)},
$S:13}
P.a8.prototype={
N:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.d_(s,a,"a8",0),H.d_(s,a,"a8",1)]})
for(u=J.bE(s.ga2(a));u.v();){t=u.gE(u)
b.$2(t,s.j(a,t))}},
gm:function(a){return J.bF(this.ga2(a))},
i:function(a){return P.kt(a)},
$iO:1}
P.j8.prototype={
ai:function(a,b){var u
for(u=J.bE(H.n(b,"$ie",this.$ti,"$ae"));u.v();)this.h(0,u.gE(u))},
i:function(a){return P.jK(this,"{","}")},
B:function(a,b){var u,t,s,r=this
P.kD(b,"index")
for(u=P.mn(r,r.r,H.y(r,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.h(P.Y(b,r,"index",null,t))},
$ie:1,
$ikH:1}
P.em.prototype={}
P.cb.prototype={}
P.cc.prototype={}
P.ft.prototype={
$acb:function(){return[P.f,[P.b,P.D]]}}
P.fJ.prototype={
i:function(a){return this.a}}
P.fI.prototype={
eR:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.bc("")
if(r>b)q.a+=C.i.b2(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lE(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$acc:function(){return[P.f,P.f]}}
P.iq.prototype={}
P.ir.prototype={
i9:function(a){var u,t,s=P.kE(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ji(u)
if(t.f1(a,0,s)!==s)t.d7(C.i.c8(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mq(0,t.b,u.length)))},
$acc:function(){return[P.f,[P.b,P.D]]}}
P.ji.prototype={
d7:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
f1:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.i.c8(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.i.aD(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d7(r,C.i.aD(a,p)))s=p}else if(r<=2047){q=n.b
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
P.N.prototype={}
P.av.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.av&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.h.b7(u,30))&1073741823},
i:function(a){var u=this,t=P.lM(H.m5(u)),s=P.db(H.m3(u)),r=P.db(H.m_(u)),q=P.db(H.m0(u)),p=P.db(H.m2(u)),o=P.db(H.m4(u)),n=P.lN(H.m1(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.B.prototype={}
P.bq.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bq&&this.a===b.a},
gG:function(a){return C.h.gG(this.a)},
i:function(a){var u,t,s,r=new P.fq(),q=this.a
if(q<0)return"-"+new P.bq(0-q).i(0)
u=r.$1(C.h.a_(q,6e7)%60)
t=r.$1(C.h.a_(q,1e6)%60)
s=new P.fp().$1(q%1e6)
return""+C.h.a_(q,36e8)+":"+H.k(u)+":"+H.k(t)+"."+H.k(s)}}
P.fp.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.fq.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.br.prototype={}
P.f3.prototype={
i:function(a){return"Assertion failed"}}
P.dC.prototype={
i:function(a){return"Throw of null."}}
P.aB.prototype={
gbF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbE:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbF()+o+u
if(!q.a)return t
s=q.gbE()
r=P.df(q.b)
return t+s+": "+r}}
P.bT.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.k(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.k(s)
else if(t>s)u=": Not in range "+H.k(s)+".."+H.k(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.k(s)}return u}}
P.fK.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var u,t=H.ac(this.b)
if(typeof t!=="number")return t.az()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.k(u)},
gm:function(a){return this.f}}
P.io.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.il.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cv.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fe.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.df(u)+"."}}
P.hm.prototype={
i:function(a){return"Out of Memory"},
$ibr:1}
P.dL.prototype={
i:function(a){return"Stack Overflow"},
$ibr:1}
P.fj.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ed.prototype={
i:function(a){return"Exception: "+this.a}}
P.fD.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.i.b2(s,0,75)+"...":s
return t+"\n"+r}}
P.bs.prototype={}
P.D.prototype={}
P.e.prototype={
bw:function(a,b){var u=H.an(this,"e",0)
return new H.cJ(this,H.m(b,{func:1,ret:P.N,args:[u]}),[u])},
gm:function(a){var u,t=this.gP(this)
for(u=0;t.v();)++u
return u},
gaA:function(a){var u,t=this.gP(this)
if(!t.v())throw H.h(H.jL())
u=t.gE(t)
if(t.v())throw H.h(H.lT())
return u},
B:function(a,b){var u,t,s
P.kD(b,"index")
for(u=this.gP(this),t=0;u.v();){s=u.gE(u)
if(b===t)return s;++t}throw H.h(P.Y(b,this,"index",null,t))},
i:function(a){return P.lS(this,"(",")")}}
P.aN.prototype={}
P.b.prototype={$ie:1}
P.O.prototype={}
P.L.prototype={
gG:function(a){return P.R.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
t:function(a,b){return this===b},
gG:function(a){return H.cr(this)},
i:function(a){return"Instance of '"+H.bS(this)+"'"},
toString:function(){return this.i(this)}}
P.al.prototype={}
P.f.prototype={$ikx:1}
P.bc.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.f1.prototype={
gm:function(a){return a.length}}
W.d2.prototype={
i:function(a){return String(a)},
$id2:1}
W.f2.prototype={
i:function(a){return String(a)}}
W.c6.prototype={$ic6:1}
W.d4.prototype={}
W.bl.prototype={$ibl:1}
W.bH.prototype={
cv:function(a,b,c){if(c!=null)return a.getContext(b,P.mD(c))
return a.getContext(b)},
e6:function(a,b){return this.cv(a,b,null)},
$ibH:1}
W.c9.prototype={$ic9:1}
W.bm.prototype={
gm:function(a){return a.length}}
W.cd.prototype={$icd:1}
W.ff.prototype={
gm:function(a){return a.length}}
W.T.prototype={$iT:1}
W.ce.prototype={
gm:function(a){return a.length}}
W.fg.prototype={}
W.aJ.prototype={}
W.aK.prototype={}
W.fh.prototype={
gm:function(a){return a.length}}
W.fi.prototype={
gm:function(a){return a.length}}
W.fl.prototype={
gm:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.fm.prototype={
i:function(a){return String(a)}}
W.dc.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.ak,P.a7]]},
$aw:function(){return[[P.ak,P.a7]]},
$ie:1,
$ae:function(){return[[P.ak,P.a7]]},
$ib:1,
$ab:function(){return[[P.ak,P.a7]]},
$aA:function(){return[[P.ak,P.a7]]}}
W.dd.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gay(a))+" x "+H.k(this.gat(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iak)return!1
return a.left===u.gbq(b)&&a.top===u.gbu(b)&&this.gay(a)===u.gay(b)&&this.gat(a)===u.gat(b)},
gG:function(a){return W.kY(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(this.gay(a)),C.j.gG(this.gat(a)))},
gde:function(a){return a.bottom},
gat:function(a){return a.height},
gbq:function(a){return a.left},
gbt:function(a){return a.right},
gbu:function(a){return a.top},
gay:function(a){return a.width},
$iak:1,
$aak:function(){return[P.a7]}}
W.fn.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.f]},
$aw:function(){return[P.f]},
$ie:1,
$ae:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aA:function(){return[P.f]}}
W.fo.prototype={
gm:function(a){return a.length}}
W.iK.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.l(u,b)
return H.j(u[b],"$iS")},
h:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var u=this.iW(this)
return new J.ap(u,u.length,[H.y(u,0)])},
$aw:function(){return[W.S]},
$ae:function(){return[W.S]},
$ab:function(){return[W.S]}}
W.S.prototype={
gi5:function(a){return new W.iM(a)},
gdf:function(a){return new W.iK(a,a.children)},
gdg:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.az()
if(s<0)s=-s*0
if(typeof r!=="number")return r.az()
if(r<0)r=-r*0
return new P.ak(u,t,s,r,[P.a7])},
i:function(a){return a.localName},
a7:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.ko
if(u==null){u=H.c([],[W.as])
t=new W.dB(u)
C.a.h(u,W.kX(null))
C.a.h(u,W.kZ())
$.ko=t
d=t}else d=u
u=$.kn
if(u==null){u=new W.eQ(d)
$.kn=u
c=u}else{u.a=d
c=u}}if($.b6==null){u=document
t=u.implementation.createHTMLDocument("")
$.b6=t
$.jJ=t.createRange()
t=$.b6.createElement("base")
H.j(t,"$ic6")
t.href=u.baseURI
$.b6.head.appendChild(t)}u=$.b6
if(u.body==null){t=u.createElement("body")
u.body=H.j(t,"$ibl")}u=$.b6
if(!!this.$ibl)s=u.body
else{s=u.createElement(a.tagName)
$.b6.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.S(C.Q,a.tagName)){$.jJ.selectNodeContents(s)
r=$.jJ.createContextualFragment(b)}else{s.innerHTML=b
r=$.b6.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.b6.body
if(s==null?u!=null:s!==u)J.kg(s)
c.cw(r)
document.adoptNode(r)
return r},
ib:function(a,b,c){return this.a7(a,b,c,null)},
e9:function(a,b){a.textContent=null
a.appendChild(this.a7(a,b,null,null))},
$iS:1,
gdY:function(a){return a.tagName}}
W.fs.prototype={
$1:function(a){return!!J.W(H.j(a,"$iE")).$iS},
$S:15}
W.o.prototype={$io:1}
W.d.prototype={
i0:function(a,b,c,d){H.m(c,{func:1,args:[W.o]})
if(c!=null)this.eI(a,b,c,!1)},
eI:function(a,b,c,d){return a.addEventListener(b,H.c0(H.m(c,{func:1,args:[W.o]}),1),!1)},
$id:1}
W.aL.prototype={$iaL:1}
W.fx.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aL]},
$aw:function(){return[W.aL]},
$ie:1,
$ae:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aA:function(){return[W.aL]}}
W.fy.prototype={
gm:function(a){return a.length}}
W.fC.prototype={
gm:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.fH.prototype={
gm:function(a){return a.length}}
W.bM.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$aw:function(){return[W.E]},
$ie:1,
$ae:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibM:1,
$aA:function(){return[W.E]}}
W.bt.prototype={$ibt:1,
gdi:function(a){return a.data}}
W.ci.prototype={$ici:1}
W.aQ.prototype={$iaQ:1}
W.ds.prototype={
i:function(a){return String(a)},
$ids:1}
W.h4.prototype={
gm:function(a){return a.length}}
W.h5.prototype={
j:function(a,b){return P.be(a.get(H.H(b)))},
N:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.N(a,new W.h6(u))
return u},
gm:function(a){return a.size},
$aa8:function(){return[P.f,null]},
$iO:1,
$aO:function(){return[P.f,null]}}
W.h6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.h7.prototype={
j:function(a,b){return P.be(a.get(H.H(b)))},
N:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.N(a,new W.h8(u))
return u},
gm:function(a){return a.size},
$aa8:function(){return[P.f,null]},
$iO:1,
$aO:function(){return[P.f,null]}}
W.h8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aT.prototype={$iaT:1}
W.h9.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aT]},
$aw:function(){return[W.aT]},
$ie:1,
$ae:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aA:function(){return[W.aT]}}
W.a9.prototype={$ia9:1}
W.ah.prototype={
gaA:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.h(P.kJ("No elements"))
if(t>1)throw H.h(P.kJ("More than one element"))
return u.firstChild},
ai:function(a,b){var u,t,s,r
H.n(b,"$ie",[W.E],"$ae")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gP:function(a){var u=this.a.childNodes
return new W.dh(u,u.length,[H.d_(C.S,u,"A",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
$aw:function(){return[W.E]},
$ae:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
iL:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.ec(a):u},
i3:function(a,b){return a.appendChild(b)},
$iE:1}
W.cp.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$aw:function(){return[W.E]},
$ie:1,
$ae:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aA:function(){return[W.E]}}
W.aU.prototype={$iaU:1,
gm:function(a){return a.length}}
W.hp.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aU]},
$aw:function(){return[W.aU]},
$ie:1,
$ae:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aA:function(){return[W.aU]}}
W.hy.prototype={
j:function(a,b){return P.be(a.get(H.H(b)))},
N:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.N(a,new W.hz(u))
return u},
gm:function(a){return a.size},
$aa8:function(){return[P.f,null]},
$iO:1,
$aO:function(){return[P.f,null]}}
W.hz.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hB.prototype={
gm:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.hK.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aW]},
$aw:function(){return[W.aW]},
$ie:1,
$ae:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aA:function(){return[W.aW]}}
W.aX.prototype={$iaX:1}
W.hL.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aX]},
$aw:function(){return[W.aX]},
$ie:1,
$ae:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aA:function(){return[W.aX]}}
W.aY.prototype={$iaY:1,
gm:function(a){return a.length}}
W.hO.prototype={
j:function(a,b){return a.getItem(H.H(b))},
N:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga2:function(a){var u=H.c([],[P.f])
this.N(a,new W.hP(u))
return u},
gm:function(a){return a.length},
$aa8:function(){return[P.f,P.f]},
$iO:1,
$aO:function(){return[P.f,P.f]}}
W.hP.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:33}
W.aD.prototype={$iaD:1}
W.bV.prototype={}
W.dM.prototype={
a7:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=W.lO("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ah(t).ai(0,new W.ah(u))
return t}}
W.hV.prototype={
a7:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.y.a7(u.createElement("table"),b,c,d)
u.toString
u=new W.ah(u)
s=u.gaA(u)
s.toString
u=new W.ah(s)
r=u.gaA(u)
t.toString
r.toString
new W.ah(t).ai(0,new W.ah(r))
return t}}
W.hW.prototype={
a7:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.y.a7(u.createElement("table"),b,c,d)
u.toString
u=new W.ah(u)
s=u.gaA(u)
t.toString
s.toString
new W.ah(t).ai(0,new W.ah(s))
return t}}
W.cx.prototype={$icx:1}
W.aZ.prototype={$iaZ:1}
W.aE.prototype={$iaE:1}
W.hY.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aE]},
$aw:function(){return[W.aE]},
$ie:1,
$ae:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aA:function(){return[W.aE]}}
W.hZ.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aZ]},
$aw:function(){return[W.aZ]},
$ie:1,
$ae:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aA:function(){return[W.aZ]}}
W.i2.prototype={
gm:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.aF.prototype={$iaF:1}
W.i6.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b0]},
$aw:function(){return[W.b0]},
$ie:1,
$ae:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aA:function(){return[W.b0]}}
W.i7.prototype={
gm:function(a){return a.length}}
W.by.prototype={}
W.ip.prototype={
i:function(a){return String(a)}}
W.iB.prototype={
gm:function(a){return a.length}}
W.b3.prototype={
gig:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ax("deltaY is not supported"))},
gie:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ax("deltaX is not supported"))},
$ib3:1}
W.cK.prototype={
h9:function(a,b){return a.requestAnimationFrame(H.c0(H.m(b,{func:1,ret:-1,args:[P.a7]}),1))},
eW:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cL.prototype={$icL:1}
W.iL.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.T]},
$aw:function(){return[W.T]},
$ie:1,
$ae:function(){return[W.T]},
$ib:1,
$ab:function(){return[W.T]},
$aA:function(){return[W.T]}}
W.e8.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iak)return!1
return a.left===u.gbq(b)&&a.top===u.gbu(b)&&a.width===u.gay(b)&&a.height===u.gat(b)},
gG:function(a){return W.kY(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
gat:function(a){return a.height},
gay:function(a){return a.width}}
W.iZ.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aM]},
$aw:function(){return[W.aM]},
$ie:1,
$ae:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aA:function(){return[W.aM]}}
W.er.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$aw:function(){return[W.E]},
$ie:1,
$ae:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aA:function(){return[W.E]}}
W.jb.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$ie:1,
$ae:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aA:function(){return[W.aY]}}
W.jc.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aD]},
$aw:function(){return[W.aD]},
$ie:1,
$ae:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aA:function(){return[W.aD]}}
W.iJ.prototype={
N:function(a,b){var u,t,s,r,q
H.m(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga2(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga2:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.l(r,t)
s=H.j(r[t],"$icL")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa8:function(){return[P.f,P.f]},
$aO:function(){return[P.f,P.f]}}
W.iM.prototype={
j:function(a,b){return this.a.getAttribute(H.H(b))},
gm:function(a){return this.ga2(this).length}}
W.iN.prototype={}
W.jV.prototype={}
W.iO.prototype={}
W.iP.prototype={
$1:function(a){return this.a.$1(H.j(a,"$io"))},
$S:27}
W.bz.prototype={
ep:function(a){var u
if($.eg.a===0){for(u=0;u<262;++u)$.eg.U(0,C.P[u],W.mL())
for(u=0;u<12;++u)$.eg.U(0,C.q[u],W.mM())}},
aJ:function(a){return $.ly().S(0,W.cf(a))},
aj:function(a,b,c){var u=$.eg.j(0,H.k(W.cf(a))+"::"+b)
if(u==null)u=$.eg.j(0,"*::"+b)
if(u==null)return!1
return H.k0(u.$4(a,b,c,this))},
$ias:1}
W.A.prototype={
gP:function(a){return new W.dh(a,this.gm(a),[H.d_(this,a,"A",0)])}}
W.dB.prototype={
aJ:function(a){return C.a.dc(this.a,new W.hi(a))},
aj:function(a,b,c){return C.a.dc(this.a,new W.hh(a,b,c))},
$ias:1}
W.hi.prototype={
$1:function(a){return H.j(a,"$ias").aJ(this.a)},
$S:17}
W.hh.prototype={
$1:function(a){return H.j(a,"$ias").aj(this.a,this.b,this.c)},
$S:17}
W.ez.prototype={
eC:function(a,b,c,d){var u,t,s
this.a.ai(0,c)
u=b.bw(0,new W.j9())
t=b.bw(0,new W.ja())
this.b.ai(0,u)
s=this.c
s.ai(0,C.R)
s.ai(0,t)},
aJ:function(a){return this.a.S(0,W.cf(a))},
aj:function(a,b,c){var u=this,t=W.cf(a),s=u.c
if(s.S(0,H.k(t)+"::"+b))return u.d.i2(c)
else if(s.S(0,"*::"+b))return u.d.i2(c)
else{s=u.b
if(s.S(0,H.k(t)+"::"+b))return!0
else if(s.S(0,"*::"+b))return!0
else if(s.S(0,H.k(t)+"::*"))return!0
else if(s.S(0,"*::*"))return!0}return!1},
$ias:1}
W.j9.prototype={
$1:function(a){return!C.a.S(C.q,H.H(a))},
$S:18}
W.ja.prototype={
$1:function(a){return C.a.S(C.q,H.H(a))},
$S:18}
W.je.prototype={
aj:function(a,b,c){if(this.eh(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.S(0,b)
return!1}}
W.jf.prototype={
$1:function(a){return"TEMPLATE::"+H.k(H.H(a))},
$S:41}
W.jd.prototype={
aJ:function(a){var u=J.W(a)
if(!!u.$ics)return!1
u=!!u.$ip
if(u&&W.cf(a)==="foreignObject")return!1
if(u)return!0
return!1},
aj:function(a,b,c){if(b==="is"||C.i.bx(b,"on"))return!1
return this.aJ(a)},
$ias:1}
W.dh.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scV(J.lA(u.a,t))
u.c=t
return!0}u.scV(null)
u.c=s
return!1},
gE:function(a){return this.d},
scV:function(a){this.d=H.G(a,H.y(this,0))},
$iaN:1}
W.as.prototype={}
W.j7.prototype={$inr:1}
W.eQ.prototype={
cw:function(a){new W.jj(this).$2(a,null)},
aS:function(a,b){if(b==null)J.kg(a)
else b.removeChild(a)},
he:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lD(a)
n=o.a.getAttribute("is")
H.j(a,"$iS")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.z(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.au(r)}t="element unprintable"
try{t=J.ao(a)}catch(r){H.au(r)}try{s=W.cf(a)
this.hd(H.j(a,"$iS"),b,p,t,s,H.j(o,"$iO"),H.H(n))}catch(r){if(H.au(r) instanceof P.aB)throw r
else{this.aS(a,b)
window
q="Removing corrupted element "+H.k(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hd:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aS(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aJ(a)){o.aS(a,b)
window
u="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aj(a,"is",g)){o.aS(a,b)
window
u="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga2(f)
t=H.c(u.slice(0),[H.y(u,0)])
for(s=f.ga2(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.l(t,s)
r=t[s]
q=o.a
p=J.lF(r)
H.H(r)
if(!q.aj(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.k(e)+" "+r+'="'+H.k(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.W(a).$icx)o.cw(a.content)},
$inb:1}
W.jj.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.he(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aS(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.au(s)
r=H.j(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.j(t,"$iE")}},
$S:28}
W.e7.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eF.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
P.eP.prototype={$ibt:1,
gdi:function(a){return this.a}}
P.jq.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.fz.prototype={
gbJ:function(){var u=this.b,t=H.an(u,"w",0),s=W.S
return new H.fW(new H.cJ(u,H.m(new P.fA(),{func:1,ret:P.N,args:[t]}),[t]),H.m(new P.fB(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.bF(this.gbJ().a)},
j:function(a,b){var u=this.gbJ()
return u.b.$1(J.jD(u.a,b))},
gP:function(a){var u=P.ks(this.gbJ(),!1,W.S)
return new J.ap(u,u.length,[H.y(u,0)])},
$aw:function(){return[W.S]},
$ae:function(){return[W.S]},
$ab:function(){return[W.S]}}
P.fA.prototype={
$1:function(a){return!!J.W(H.j(a,"$iE")).$iS},
$S:15}
P.fB.prototype={
$1:function(a){return H.i(H.j(a,"$iE"),"$iS")},
$S:29}
P.j2.prototype={
gbt:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.F(t)
return H.G(u+t,H.y(this,0))},
gde:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.F(t)
return H.G(u+t,H.y(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.k(u.a)+", "+H.k(u.b)+") "+H.k(u.c)+" x "+H.k(u.d)},
t:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.W(b)
if(!!u.$iak){t=p.a
if(t==u.gbq(b)){s=p.b
if(s==u.gbu(b)){r=p.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.F(r)
q=H.y(p,0)
if(H.G(t+r,q)===u.gbt(b)){t=p.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.F(t)
u=H.G(s+t,q)===u.gde(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.bD(s),q=t.b,p=J.bD(q),o=t.c
if(typeof s!=="number")return s.D()
if(typeof o!=="number")return H.F(o)
u=H.y(t,0)
o=C.h.gG(H.G(s+o,u))
s=t.d
if(typeof q!=="number")return q.D()
if(typeof s!=="number")return H.F(s)
u=C.h.gG(H.G(q+s,u))
return P.mm(P.j0(P.j0(P.j0(P.j0(0,r),p),o),u))}}
P.ak.prototype={
gbq:function(a){return this.a},
gbu:function(a){return this.b},
gay:function(a){return this.c},
gat:function(a){return this.d}}
P.b7.prototype={$ib7:1}
P.fP.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b7]},
$ie:1,
$ae:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aA:function(){return[P.b7]}}
P.bb.prototype={$ibb:1}
P.hk.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bb]},
$ie:1,
$ae:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aA:function(){return[P.bb]}}
P.hr.prototype={
gm:function(a){return a.length}}
P.cs.prototype={$ics:1}
P.hU.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$aw:function(){return[P.f]},
$ie:1,
$ae:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aA:function(){return[P.f]}}
P.p.prototype={
gdf:function(a){return new P.fz(a,new W.ah(a))},
a7:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.as])
C.a.h(p,W.kX(null))
C.a.h(p,W.kZ())
C.a.h(p,new W.jd())
c=new W.eQ(new W.dB(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).ib(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ah(s)
q=p.gaA(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bd.prototype={$ibd:1}
P.i8.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bd]},
$ie:1,
$ae:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aA:function(){return[P.bd]}}
P.ej.prototype={}
P.ek.prototype={}
P.eu.prototype={}
P.ev.prototype={}
P.eG.prototype={}
P.eH.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.f5.prototype={
gm:function(a){return a.length}}
P.f6.prototype={
j:function(a,b){return P.be(a.get(H.H(b)))},
N:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.N(a,new P.f7(u))
return u},
gm:function(a){return a.size},
$aa8:function(){return[P.f,null]},
$iO:1,
$aO:function(){return[P.f,null]}}
P.f7.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f8.prototype={
gm:function(a){return a.length}}
P.bG.prototype={}
P.hl.prototype={
gm:function(a){return a.length}}
P.e6.prototype={}
P.d5.prototype={$id5:1}
P.dG.prototype={$idG:1}
P.bU.prototype={
iS:function(a,b,c,d,e,f,g){var u,t=J.W(g)
if(!!t.$ibt)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mE(g))
return}if(!!t.$ici)t=!0
else t=!1
if(t){this.hr(a,b,c,d,e,f,g)
return}throw H.h(P.lG("Incorrect number or type of arguments"))},
hr:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
L:function(a,b,c){return a.uniform1f(b,c)},
Y:function(a,b,c){return a.uniform1i(b,c)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
e2:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
e3:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibU:1}
P.dI.prototype={$idI:1}
P.dO.prototype={$idO:1}
P.dX.prototype={$idX:1}
P.hM.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.Y(b,a,null,null,null))
return P.be(a.item(b))},
B:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.O,,,]]},
$ie:1,
$ae:function(){return[[P.O,,,]]},
$ib:1,
$ab:function(){return[[P.O,,,]]},
$aA:function(){return[[P.O,,,]]}}
P.eC.prototype={}
P.eD.prototype={}
O.a2.prototype={
bA:function(a){var u=this
u.sf6(H.c([],[a]))
u.sd_(null)
u.scX(null)
u.sd0(null)},
cz:function(a,b,c){var u=this,t=H.an(u,"a2",0)
H.m(b,{func:1,ret:P.N,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.D,[P.e,t]]}
H.m(a,t)
H.m(c,t)
u.sd_(b)
u.scX(a)
u.sd0(c)},
b0:function(a,b){return this.cz(a,null,b)},
fS:function(a){var u
H.n(a,"$ie",[H.an(this,"a2",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eo:function(a,b){var u
H.n(b,"$ie",[H.an(this,"a2",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.ap(u,u.length,[H.y(u,0)])},
B:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.an(s,"a2",0)
H.G(b,r)
r=[r]
if(H.z(s.fS(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.eo(t,H.c([b],r))}},
sf6:function(a){this.a=H.n(a,"$ib",[H.an(this,"a2",0)],"$ab")},
sd_:function(a){this.b=H.m(a,{func:1,ret:P.N,args:[[P.e,H.an(this,"a2",0)]]})},
scX:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.D,[P.e,H.an(this,"a2",0)]]})},
sd0:function(a){H.m(a,{func:1,ret:-1,args:[P.D,[P.e,H.an(this,"a2",0)]]})},
$ie:1}
O.cl.prototype={
gm:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.Q():u},
aB:function(){var u=this.b
if(u!=null)u.C(null)},
gW:function(a){var u=this.a
if(u.length>0)return C.a.gbp(u)
else return V.dx()},
dU:function(a){var u=this.a
if(a==null)C.a.h(u,V.dx())
else C.a.h(u,a)
this.aB()},
cr:function(){var u=this.a
if(u.length>0){u.pop()
this.aB()}},
sbL:function(a){this.a=H.n(a,"$ib",[V.ae],"$ab")}}
E.f9.prototype={}
E.ai.prototype={
scA:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().V(0,s.gdQ())
u=s.c
if(u!=null)u.gq().h(0,s.gdQ())
t=new D.M("shape",r,s.c,[F.dJ])
t.b=!0
s.av(t)}},
saV:function(a){var u,t,s=this
if(!J.a1(s.r,a)){u=s.r
if(u!=null)u.gq().V(0,s.gdO())
if(a!=null)a.gq().h(0,s.gdO())
s.r=a
t=new D.M("mover",u,a,[U.aa])
t.b=!0
s.av(t)}},
am:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aO(0,b,s):null
if(!J.a1(q,s.x)){u=s.x
s.x=q
t=new D.M("matrix",u,q,[V.ae])
t.b=!0
s.av(t)}for(r=s.y.a,r=new J.ap(r,r.length,[H.y(r,0)]);r.v();)r.d.am(0,b)},
aN:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gW(s))
else C.a.h(s.a,r.u(0,s.gW(s)))
s.aB()
a.dV(t.f)
s=a.dy
u=(s&&C.a).gbp(s)
if(u!=null&&t.d!=null)u.iN(a,t)
for(s=t.y.a,s=new J.ap(s,s.length,[H.y(s,0)]);s.v();)s.d.aN(a)
a.dT()
a.dx.cr()},
gq:function(){var u=this.z
return u==null?this.z=D.Q():u},
av:function(a){var u=this.z
if(u!=null)u.C(a)},
a3:function(){return this.av(null)},
dR:function(a){H.j(a,"$ix")
this.e=null
this.av(a)},
iC:function(){return this.dR(null)},
dP:function(a){this.av(H.j(a,"$ix"))},
iB:function(){return this.dP(null)},
dN:function(a){this.av(H.j(a,"$ix"))},
iy:function(){return this.dN(null)},
ix:function(a,b){var u,t,s,r,q,p,o
H.n(b,"$ie",[E.ai],"$ae")
for(u=b.length,t=this.gdM(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bK()
o.sab(null)
o.saH(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
iA:function(a,b){var u,t
H.n(b,"$ie",[E.ai],"$ae")
for(u=b.gP(b),t=this.gdM();u.v();)u.gE(u).gq().V(0,t)
this.a3()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seP:function(a,b){this.y=H.n(b,"$ia2",[E.ai],"$aa2")},
$iba:1}
E.hu.prototype={
ek:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.av(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cl()
t=[V.ae]
u.sbL(H.c([],t))
u.b=null
u.gq().h(0,new E.hv(s))
s.cy=u
u=new O.cl()
u.sbL(H.c([],t))
u.b=null
u.gq().h(0,new E.hw(s))
s.db=u
u=new O.cl()
u.sbL(H.c([],t))
u.b=null
u.gq().h(0,new E.hx(s))
s.dx=u
s.shq(H.c([],[O.bW]))
u=s.dy;(u&&C.a).h(u,null)
s.shm(new H.aP([P.f,A.ct]))},
giK:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gW(s)
u=t.db
u=t.z=s.u(0,u.gW(u))
s=u}return s},
dV:function(a){var u=this.dy,t=a==null?(u&&C.a).gbp(u):a;(u&&C.a).h(u,t)},
dT:function(){var u=this.dy
if(u.length>1)u.pop()},
shq:function(a){this.dy=H.n(a,"$ib",[O.bW],"$ab")},
shm:function(a){this.fr=H.n(a,"$iO",[P.f,A.ct],"$aO")}}
E.hv.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.ch=u.z=null},
$S:7}
E.hw.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:7}
E.hx.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.cx=u.ch=null},
$S:7}
E.dT.prototype={
cF:function(a){H.j(a,"$ix")
this.dW()},
cE:function(){return this.cF(null)},
gim:function(){var u,t=this,s=Date.now(),r=C.h.a_(P.km(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.av(s,!1)
return u/r},
d3:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.F(r)
u=C.j.cj(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.j.cj(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kM(C.n,s.giO())}},
dW:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.i1(this),{func:1,ret:-1,args:[P.a7]})
C.A.eW(u)
C.A.h9(u,W.l5(t,P.a7))}},
iM:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.d3()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.av(r,!1)
s.y=P.km(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aB()
r=s.db
C.a.sm(r.a,0)
r.aB()
r=s.dx
C.a.sm(r.a,0)
r.aB()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.aN(p.e)}s=p.z
if(s!=null)s.C(null)}catch(q){u=H.au(q)
t=H.c2(q)
P.kc("Error: "+H.k(u))
P.kc("Stack: "+H.k(t))
throw H.h(u)}}}
E.i1.prototype={
$1:function(a){var u
H.mW(a)
u=this.a
if(u.ch){u.ch=!1
u.iM()}},
$S:34}
Z.e4.prototype={$in5:1}
Z.d6.prototype={
c3:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.au(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.k(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.k(u.e)+"]"}}
Z.iC.prototype={$in6:1}
Z.d7.prototype={
aM:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
c3:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].c3(a)},
iZ:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aN:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.l(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ao(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
sf2:function(a){this.b=H.n(a,"$ib",[Z.bu],"$ab")},
$ine:1}
Z.bu.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bS(this.c)+"'")+"]"}}
Z.b2.prototype={
gcB:function(a){var u=this.a,t=(u&$.bi().a)!==0?3:0
if((u&$.bh().a)!==0)t+=3
if((u&$.bg().a)!==0)t+=3
if((u&$.bj().a)!==0)t+=2
if((u&$.bk().a)!==0)t+=3
if((u&$.d0().a)!==0)t+=3
if((u&$.d1().a)!==0)t+=4
if((u&$.c5().a)!==0)++t
return(u&$.bf().a)!==0?t+4:t},
i4:function(a){var u,t=$.bi(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bh()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bf()
if((s&t.a)!==0)if(u===a)return t
return $.lx()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b2))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.f]),t=this.a
if((t&$.bi().a)!==0)C.a.h(u,"Pos")
if((t&$.bh().a)!==0)C.a.h(u,"Norm")
if((t&$.bg().a)!==0)C.a.h(u,"Binm")
if((t&$.bj().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bk().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d0().a)!==0)C.a.h(u,"Clr3")
if((t&$.d1().a)!==0)C.a.h(u,"Clr4")
if((t&$.c5().a)!==0)C.a.h(u,"Weight")
if((t&$.bf().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.fc.prototype={}
D.bK.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.m(b,u)
if(this.a==null)this.sab(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
V:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.x]})
u=s.a
u=u==null?null:C.a.S(u,b)
if(u===!0){u=s.a
t=(u&&C.a).V(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.S(u,b)
if(u===!0){u=s.b
t=(u&&C.a).V(u,b)||t}return t},
C:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.N(P.ks(u,!0,{func:1,ret:-1,args:[D.x]}),new D.fv(q))
u=r.b
if(u!=null){r.saH(H.c([],[{func:1,ret:-1,args:[D.x]}]))
C.a.N(u,new D.fw(q))}return!0},
ii:function(){return this.C(null)},
ax:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}},
sab:function(a){this.a=H.n(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
saH:function(a){this.b=H.n(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.fv.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.fw.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.x.prototype={}
D.bN.prototype={}
D.bO.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.d8.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.dn.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dn))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.fO.prototype={
iH:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iD:function(a){this.c=a.b
this.d.V(0,a.a)
return!1},
sh5:function(a){this.d=H.n(a,"$ikH",[P.D],"$akH")}}
X.dt.prototype={}
X.fT.prototype={
aQ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.ab(o.a+n*m,o.b+u*t)
t=q.a.gaL()
r=new X.b9(a,V.bx(),q.x,t,s)
r.b=!0
q.z=new P.av(p,!1)
q.x=s
return r},
cq:function(a,b){this.r=a.a
return!1},
aX:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e8()
if(typeof u!=="number")return u.e4()
this.r=(u&~t)>>>0
return!1},
aW:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.aQ(a,b))
return!0},
iI:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaL()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.cm(new V.U(s*r,q*p),u,t)
t.b=!0
n.C(t)
return!0},
fH:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dt(c,r.a.gaL(),b)
s.b=!0
t.C(s)
r.y=new P.av(u,!1)
r.x=V.bx()}}
X.ar.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ar))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.z(this.b)?"Alt+":""
return u+(H.z(this.c)?"Shift+":"")}}
X.b9.prototype={}
X.ha.prototype={
bH:function(a,b,c){var u=this,t=new P.av(Date.now(),!1),s=u.a.gaL(),r=new X.b9(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cq:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bH(a,b,!0))
return!0},
aX:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e8()
if(typeof t!=="number")return t.e4()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.bH(a,b,!0))
return!0},
aW:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bH(a,b,!1))
return!0},
iJ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaL()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.cm(new V.U(t*s,r*q),u,b)
u.b=!0
o.C(u)
return!0},
gdj:function(){var u=this.b
return u==null?this.b=D.Q():u},
gbv:function(){var u=this.c
return u==null?this.c=D.Q():u},
gdL:function(){var u=this.d
return u==null?this.d=D.Q():u}}
X.cm.prototype={}
X.hq.prototype={}
X.dV.prototype={}
X.i5.prototype={
aQ:function(a,b){var u,t,s,r,q=this
H.n(a,"$ib",[V.ab],"$ab")
u=new P.av(Date.now(),!1)
t=a.length>0?a[0]:V.bx()
s=q.a.gaL()
r=new X.dV(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iG:function(a){var u
H.n(a,"$ib",[V.ab],"$ab")
u=this.b
if(u==null)return!1
u.C(this.aQ(a,!0))
return!0},
iE:function(a){var u
H.n(a,"$ib",[V.ab],"$ab")
u=this.c
if(u==null)return!1
u.C(this.aQ(a,!0))
return!0},
iF:function(a){var u
H.n(a,"$ib",[V.ab],"$ab")
u=this.d
if(u==null)return!1
u.C(this.aQ(a,!1))
return!0}}
X.e_.prototype={
gaL:function(){var u=this.a,t=C.l.gdg(u).c
t.toString
u=C.l.gdg(u).d
u.toString
return V.kF(0,0,t,u)},
cR:function(a){var u=a.keyCode,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.dn(u,new X.ar(t,a.altKey,a.shiftKey))},
aI:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
c_:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
as:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.H()
u=t.top
if(typeof r!=="number")return r.H()
return new V.ab(s-q,r-u)},
aR:function(a){return new V.U(a.movementX,a.movementY)},
bW:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.ab])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
q=C.j.ae(r.pageX)
C.j.ae(r.pageY)
p=o.left
C.j.ae(r.pageX)
C.a.h(n,new V.ab(q-p,C.j.ae(r.pageY)-o.top))}return n},
ap:function(a){var u=a.buttons,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.d8(u,new X.ar(t,a.altKey,a.shiftKey))},
bM:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.H()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.H()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fB:function(a){this.f=!0},
fm:function(a){this.f=!1},
ft:function(a){H.j(a,"$ia9")
if(H.z(this.f)&&this.bM(a))a.preventDefault()},
fF:function(a){var u
H.j(a,"$iaQ")
if(!H.z(this.f))return
u=this.cR(a)
this.b.iH(u)},
fD:function(a){var u
H.j(a,"$iaQ")
if(!H.z(this.f))return
u=this.cR(a)
this.b.iD(u)},
fJ:function(a){var u,t,s,r,q=this
H.j(a,"$ia9")
u=q.a
u.focus()
q.f=!0
q.aI(a)
if(H.z(q.x)){t=q.ap(a)
s=q.aR(a)
if(q.d.cq(t,s))a.preventDefault()
return}if(H.z(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ap(a)
r=q.as(a)
if(q.c.cq(t,r))a.preventDefault()},
fN:function(a){var u,t,s,r=this
H.j(a,"$ia9")
r.aI(a)
u=r.ap(a)
if(H.z(r.x)){t=r.aR(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.as(a)
if(r.c.aX(u,s))a.preventDefault()},
fz:function(a){var u,t,s,r=this
H.j(a,"$ia9")
if(!r.bM(a)){r.aI(a)
u=r.ap(a)
if(H.z(r.x)){t=r.aR(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.as(a)
if(r.c.aX(u,s))a.preventDefault()}},
fL:function(a){var u,t,s,r=this
H.j(a,"$ia9")
r.aI(a)
u=r.ap(a)
if(H.z(r.x)){t=r.aR(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.as(a)
if(r.c.aW(u,s))a.preventDefault()},
fv:function(a){var u,t,s,r=this
H.j(a,"$ia9")
if(!r.bM(a)){r.aI(a)
u=r.ap(a)
if(H.z(r.x)){t=r.aR(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.as(a)
if(r.c.aW(u,s))a.preventDefault()}},
fP:function(a){var u,t,s=this
H.j(a,"$ib3")
s.aI(a)
u=new V.U((a&&C.z).gie(a),C.z.gig(a)).w(0,180)
if(H.z(s.x)){if(s.d.iI(u))a.preventDefault()
return}if(H.z(s.r))return
t=s.as(a)
if(s.c.iJ(u,t))a.preventDefault()},
fR:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ap(s.y)
t=s.as(s.y)
s.d.fH(u,t,r)}},
h3:function(a){var u,t=this
H.j(a,"$iaF")
t.a.focus()
t.f=!0
t.c_(a)
u=t.bW(a)
if(t.e.iG(u))a.preventDefault()},
h_:function(a){var u
H.j(a,"$iaF")
this.c_(a)
u=this.bW(a)
if(this.e.iE(u))a.preventDefault()},
h1:function(a){var u
H.j(a,"$iaF")
this.c_(a)
u=this.bW(a)
if(this.e.iF(u))a.preventDefault()},
seX:function(a){this.z=H.n(a,"$ib",[[P.cw,P.R]],"$ab")}}
D.bp.prototype={
gq:function(){var u=this.d
return u==null?this.d=D.Q():u},
an:function(a){var u
H.j(a,"$ix")
u=this.d
if(u!=null)u.C(a)},
es:function(){return this.an(null)},
$ia3:1,
$iba:1}
D.a3.prototype={$iba:1}
D.dp.prototype={
gq:function(){var u=this.Q
return u==null?this.Q=D.Q():u},
an:function(a){var u=this.Q
if(u!=null)u.C(a)},
cZ:function(a){var u
H.j(a,"$ix")
u=this.ch
if(u!=null)u.C(a)},
fG:function(){return this.cZ(null)},
fU:function(a){var u,t,s
H.n(a,"$ie",[D.a3],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.eq(s))return!1}return!0},
fg:function(a,b){var u,t,s,r,q,p,o,n=D.a3
H.n(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gcY(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=H.j(b[q],"$ia3")
if(p instanceof D.bp)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bK()
o.sab(null)
o.saH(null)
o.c=null
o.d=0
p.d=o}H.m(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bN([n])
n.b=!0
this.an(n)},
fY:function(a,b){var u,t,s,r=D.a3
H.n(b,"$ie",[r],"$ae")
for(u=b.gP(b),t=this.gcY();u.v();){s=u.gE(u)
C.a.V(this.e,s)
s.gq().V(0,t)}r=new D.bO([r])
r.b=!0
this.an(r)},
eq:function(a){var u=C.a.S(this.e,a)
return u},
seV:function(a){this.e=H.n(a,"$ib",[D.bp],"$ab")},
sh4:function(a){this.f=H.n(a,"$ib",[D.dE],"$ab")},
sho:function(a){this.r=H.n(a,"$ib",[D.dK],"$ab")},
shA:function(a){this.x=H.n(a,"$ib",[D.dQ],"$ab")},
shB:function(a){this.y=H.n(a,"$ib",[D.dR],"$ab")},
shC:function(a){this.z=H.n(a,"$ib",[D.dS],"$ab")},
$ae:function(){return[D.a3]},
$aa2:function(){return[D.a3]}}
D.dE.prototype={$ia3:1,$iba:1}
D.dK.prototype={$ia3:1,$iba:1}
D.dQ.prototype={$ia3:1,$iba:1}
D.dR.prototype={$ia3:1,$iba:1}
D.dS.prototype={$ia3:1,$iba:1}
V.a4.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.bI.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bI))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.fu.prototype={}
V.dw.prototype={
aa:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.B])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dw))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.B],o=V.c1(H.c([q.a,q.d,q.r],p),3,0),n=V.c1(H.c([q.b,q.e,q.x],p),3,0),m=V.c1(H.c([q.c,q.f,q.y],p),3,0)
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
V.ae.prototype={
aa:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.B])
return t},
dJ:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.P().a)return V.dx()
u=1/b1
t=-n
s=-a0
return V.aS((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aS(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
ct:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.X(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b_:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.aC(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ae))return!1
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
i:function(a){return this.J()},
A:function(a){var u,t,s,r,q,p=this,o=[P.B],n=V.c1(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.c1(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.c1(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.c1(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
J:function(){return this.A("")}}
V.ab.prototype={
H:function(a,b){return new V.ab(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.aC.prototype={
H:function(a,b){return new V.aC(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aC))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.dF.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dF))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.dH.prototype={
ga5:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dH))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.U.prototype={
cl:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.U(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.kQ
return u==null?$.kQ=new V.U(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.U(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.X.prototype={
cl:function(a){return Math.sqrt(this.F(this))},
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cm:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.X(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aU:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.X(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.X(-this.a,-this.b,-this.c)},
w:function(a,b){if(Math.abs(b-0)<$.P().a)return V.e3()
return new V.X(this.a/b,this.b/b,this.c/b)},
dK:function(){var u=$.P().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
U.fd.prototype={
bC:function(a){var u=V.n4(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.Q():u},
M:function(a){var u=this.y
if(u!=null)u.C(a)},
scu:function(a,b){},
scn:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.P().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bC(u)}s=new D.M("maximumLocation",s,t.b,[P.B])
s.b=!0
t.M(s)}},
scp:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.P().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bC(u)}s=new D.M("minimumLocation",s,t.c,[P.B])
s.b=!0
t.M(s)}},
sa4:function(a,b){var u,t=this
b=t.bC(b)
u=t.d
if(!(Math.abs(u-b)<$.P().a)){t.d=b
u=new D.M("location",u,b,[P.B])
u.b=!0
t.M(u)}},
sco:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.P().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.M("maximumVelocity",r,a,[P.B])
r.b=!0
s.M(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.P().a)){u.f=a
t=new D.M("velocity",t,a,[P.B])
t.b=!0
u.M(t)}},
sca:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.P().a)){this.x=a
u=new D.M("dampening",u,a,[P.B])
u.b=!0
this.M(u)}},
am:function(a,b){var u,t,s,r=this,q=r.f,p=$.P().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa4(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.P().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.da.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.Q():u},
aO:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.da))return!1
return J.a1(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.ch.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.Q():u},
M:function(a){var u
H.j(a,"$ix")
u=this.e
if(u!=null)u.C(a)},
a1:function(){return this.M(null)},
fe:function(a,b){var u,t,s,r,q,p,o,n=U.aa
H.n(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gaG(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.m(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bN([n])
n.b=!0
this.M(n)},
fW:function(a,b){var u,t,s=U.aa
H.n(b,"$ie",[s],"$ae")
for(u=b.gP(b),t=this.gaG();u.v();)u.gE(u).gq().V(0,t)
s=new D.bO([s])
s.b=!0
this.M(s)},
aO:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.az()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ap(r,r.length,[H.y(r,0)]),u=null;r.v();){q=r.d
if(q!=null){t=q.aO(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.dx():u
r=s.e
if(r!=null)r.ax(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ch))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.l(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.l(r,t)
if(!J.a1(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.aa]},
$aa2:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.e0.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.Q():u},
M:function(a){var u
H.j(a,"$ix")
u=this.cy
if(u!=null)u.C(a)},
a1:function(){return this.M(null)},
aT:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdj().h(0,u.gbN())
u.a.c.gdL().h(0,u.gbP())
u.a.c.gbv().h(0,u.gbR())
return!0},
bO:function(a){var u=this
H.j(a,"$ix")
if(!J.a1(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bQ:function(a){var u,t,s,r,q,p,o,n=this
a=H.i(H.j(a,"$ix"),"$ib9")
if(!H.z(n.y))return
if(H.z(n.x)){u=a.d.H(0,a.y)
u=new V.U(u.a,u.b)
u=u.F(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.z(n.d)){u=a.c
t=a.d.H(0,a.y)
u=new V.U(t.a,t.b).u(0,2).w(0,u.ga5())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=new V.U(s.a,s.b).u(0,2).w(0,u.ga5())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sa4(0,-q*p+o)
n.b.sR(0)
t=t.H(0,a.z)
n.Q=new V.U(t.a,t.b).u(0,2).w(0,u.ga5())}n.a1()},
bS:function(a){var u,t,s,r=this
H.j(a,"$ix")
if(!H.z(r.y))return
r.y=!1
if(H.z(r.x))return
u=r.Q
if(u.F(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sR(t*10*s)
r.a1()}},
aO:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.az()
if(q<p){r.ch=p
u=b.y
r.b.am(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aS(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iaa:1}
U.e1.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.Q():u},
M:function(a){var u
H.j(a,"$ix")
u=this.fx
if(u!=null)u.C(a)},
a1:function(){return this.M(null)},
aT:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdj().h(0,s.gbN())
s.a.c.gdL().h(0,s.gbP())
s.a.c.gbv().h(0,s.gbR())
u=s.a.d
t=u.f
u=t==null?u.f=D.Q():t
u.h(0,s.gf7())
u=s.a.d
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.gf9())
u=s.a.e
t=u.b
u=t==null?u.b=D.Q():t
u.h(0,s.ghx())
u=s.a.e
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.ghv())
u=s.a.e
t=u.c
u=t==null?u.c=D.Q():t
u.h(0,s.ght())
return!0},
ah:function(a){var u=a.a,t=a.b
if(H.z(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.z(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.U(u,t)},
bO:function(a){var u=this
a=H.i(H.j(a,"$ix"),"$ib9")
if(!J.a1(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bQ:function(a){var u,t,s,r,q,p,o,n=this
a=H.i(H.j(a,"$ix"),"$ib9")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.H(0,a.y)
u=new V.U(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.ah(new V.U(t.a,t.b).u(0,2).w(0,u.ga5()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ah(new V.U(s.a,s.b).u(0,2).w(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa4(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa4(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ah(new V.U(t.a,t.b).u(0,2).w(0,u.ga5()))}n.a1()},
bS:function(a){var u,t,s,r=this
H.j(a,"$ix")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sR(-t*10*u)
r.a1()}},
f8:function(a){var u=this
if(H.i(H.j(a,"$ix"),"$idt").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fa:function(a){var u,t,s,r,q,p,o,n=this
a=H.i(H.j(a,"$ix"),"$ib9")
if(!J.a1(n.d,a.x.b))return
u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ah(new V.U(s.a,s.b).u(0,2).w(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa4(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa4(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ah(new V.U(t.a,t.b).u(0,2).w(0,u.ga5()))
n.a1()},
hy:function(a){var u=this
H.j(a,"$ix")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hw:function(a){var u,t,s,r,q,p,o,n=this
a=H.i(H.j(a,"$ix"),"$idV")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.H(0,a.y)
u=new V.U(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.ah(new V.U(t.a,t.b).u(0,2).w(0,u.ga5()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ah(new V.U(s.a,s.b).u(0,2).w(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa4(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa4(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ah(new V.U(t.a,t.b).u(0,2).w(0,u.ga5()))}n.a1()},
hu:function(a){var u,t,s,r=this
H.j(a,"$ix")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sR(-t*10*u)
r.a1()}},
aO:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.az()
if(q<p){r.dy=p
u=b.y
r.c.am(0,u)
r.b.am(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aS(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.aS(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaa:1}
U.e2.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.Q():u},
M:function(a){var u=this.r
if(u!=null)u.C(a)},
aT:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.Q():t
t=r.gfb()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.Q():s).h(0,t)
return!0},
fc:function(a){var u,t,s,r,q=this
H.j(a,"$ix")
if(!J.a1(q.b,q.a.b.c))return
H.i(a,"$icm")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.M("zoom",u,r,[P.B])
u.b=!0
q.M(u)}},
aO:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aS(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iaa:1}
M.de.prototype={
ao:function(a){var u
H.j(a,"$ix")
u=this.x
if(u!=null)u.C(a)},
ev:function(){return this.ao(null)},
fo:function(a,b){var u,t,s,r,q,p,o,n=E.ai
H.n(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gag(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bK()
o.sab(null)
o.saH(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bN([n])
n.b=!0
this.ao(n)},
fq:function(a,b){var u,t,s=E.ai
H.n(b,"$ie",[s],"$ae")
for(u=b.gP(b),t=this.gag();u.v();)u.gE(u).gq().V(0,t)
s=new D.bO([s])
s.b=!0
this.ao(s)},
sdZ:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gq().V(0,t.gag())
u=t.c
t.c=a
if(a!=null)a.gq().h(0,t.gag())
s=new D.M("technique",u,t.c,[O.bW])
s.b=!0
t.ao(s)}},
gq:function(){var u=this.x
return u==null?this.x=D.Q():u},
aN:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dV(f.c)
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
if(typeof s!=="number")return H.F(s)
o=C.j.ae(p*s)
p=q.b
if(typeof r!=="number")return H.F(r)
n=C.j.ae(p*r)
p=C.j.ae(q.c*s)
a.c=p
q=C.j.ae(q.d*r)
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
i=V.aS(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dU(i)
t=$.ky
if(t==null){t=V.kA()
q=V.kU()
p=$.kR
t=V.ku(t,q,p==null?$.kR=new V.X(0,0,-1):p)
$.ky=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.u(0,h)}a.db.dU(h)
u=f.c
if(u!=null)u.am(0,a)
for(u=f.d.a,u=new J.ap(u,u.length,[H.y(u,0)]);u.v();)u.d.am(0,a)
for(u=f.d.a,u=new J.ap(u,u.length,[H.y(u,0)]);u.v();)u.d.aN(a)
f.a.toString
a.cy.cr()
a.db.cr()
f.b.toString
a.dT()},
seu:function(a,b){this.d=H.n(b,"$ia2",[E.ai],"$aa2")},
$inc:1}
A.d3.prototype={}
A.f4.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ij:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ih:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.fZ.prototype={
ej:function(d2,d3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="Required uniform value, ",a9=", was not defined or used in shader.",b0="emissionTxt",b1="nullEmissionTxt",b2="ambientTxt",b3="nullAmbientTxt",b4="diffuseTxt",b5="nullDiffuseTxt",b6="invDiffuseTxt",b7="nullInvDiffuseTxt",b8="specularTxt",b9="nullSpecularTxt",c0="nullBumpTxt",c1="reflectTxt",c2="nullReflectTxt",c3="refractTxt",c4="nullRefractTxt",c5="alphaTxt",c6="nullAlphaTxt",c7="uniform mat4 objMat;\n",c8="   if(nullAlphaTxt > 0) return alpha;\n",c9="   if (a <= 0.000001) discard;\n",d0="precision mediump float;\n\n",d1="precision mediump float;\n\nvarying vec3 normalVec;\n"
a7.z=d2
u=new P.bc("")
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
d2.hG(u)
d2.hN(u)
d2.hH(u)
d2.hV(u)
d2.hW(u)
d2.hP(u)
d2.i_(u)
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
u=new P.bc("")
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
s.hK(u)
s.hF(u)
s.hI(u)
s.hL(u)
s.hT(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.hR(u)
s.hS(u)}s.hO(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=s.y
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
case C.e:m+=c8
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c9
u.a=m
m=u.a=m+"   return a;\n"
break
case C.d:m+=c8
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
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.hJ(u)
s.hQ(u)
s.hU(u)
s.hX(u)
s.hY(u)
s.hZ(u)
s.hM(u)}m=u.a+="// === Main ===\n"
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
i="vec4("+C.a.l(j," + ")+", alpha);"
s=u.a
s=u.a=(o?u.a=s+("   gl_FragColor = colorMat*"+i+"\n"):u.a=s+("   gl_FragColor = "+i+"\n"))+"}\n"
a7.c=n
a7.d=s.charCodeAt(0)==0?s:s
a7.e=a7.cS(n,35633)
a7.f=a7.cS(a7.d,35632)
s=a7.a
q=s.createProgram()
a7.r=q
s.attachShader(q,a7.e)
s.attachShader(a7.r,a7.f)
s.linkProgram(a7.r)
if(!H.z(H.k0(s.getProgramParameter(a7.r,35714)))){h=s.getProgramInfoLog(a7.r)
s.deleteProgram(a7.r)
H.v(P.r("Failed to link shader: "+H.k(h)))}a7.hj()
a7.hl()
a7.Q=a7.x.j(0,"posAttr")
a7.cx=a7.x.j(0,"normAttr")
a7.ch=a7.x.j(0,"binmAttr")
a7.cy=a7.x.j(0,"txt2DAttr")
a7.db=a7.x.j(0,"txtCubeAttr")
a7.dx=a7.x.j(0,"bendAttr")
if(d2.fr)a7.id=H.i(a7.y.n(0,"invViewMat"),"$iat")
if(t)a7.dy=H.i(a7.y.n(0,"objMat"),"$iat")
if(r)a7.fr=H.i(a7.y.n(0,"viewObjMat"),"$iat")
a7.fy=H.i(a7.y.n(0,"projViewObjMat"),"$iat")
if(d2.x2)a7.k1=H.i(a7.y.n(0,"txt2DMat"),"$icC")
if(d2.y1)a7.k2=H.i(a7.y.n(0,"txtCubeMat"),"$iat")
if(d2.y2)a7.k3=H.i(a7.y.n(0,"colorMat"),"$iat")
a7.seL(H.c([],[A.at]))
t=d2.al
if(t>0){a7.k4=H.j(a7.y.n(0,"bendMatCount"),"$iK")
for(g=0;g<t;++g){s=a7.r1
r=a7.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.v(P.r(a8+q+a9));(s&&C.a).h(s,H.i(f,"$iat"))}}t=d2.a
if(t!==C.c){a7.r2=H.i(a7.y.n(0,"emissionClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:a7.rx=H.i(a7.y.n(0,b0),"$iaf")
a7.x1=H.i(a7.y.n(0,b1),"$iK")
break
case C.d:a7.ry=H.i(a7.y.n(0,b0),"$iag")
a7.x1=H.i(a7.y.n(0,b1),"$iK")
break}}t=d2.b
if(t!==C.c){a7.x2=H.i(a7.y.n(0,"ambientClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:a7.y1=H.i(a7.y.n(0,b2),"$iaf")
a7.al=H.i(a7.y.n(0,b3),"$iK")
break
case C.d:a7.y2=H.i(a7.y.n(0,b2),"$iag")
a7.al=H.i(a7.y.n(0,b3),"$iK")
break}}t=d2.c
if(t!==C.c){a7.ad=H.i(a7.y.n(0,"diffuseClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:a7.ba=H.i(a7.y.n(0,b4),"$iaf")
a7.bb=H.i(a7.y.n(0,b5),"$iK")
break
case C.d:a7.dk=H.i(a7.y.n(0,b4),"$iag")
a7.bb=H.i(a7.y.n(0,b5),"$iK")
break}}t=d2.d
if(t!==C.c){a7.bc=H.i(a7.y.n(0,"invDiffuseClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:a7.dl=H.i(a7.y.n(0,b6),"$iaf")
a7.bd=H.i(a7.y.n(0,b7),"$iK")
break
case C.d:a7.dm=H.i(a7.y.n(0,b6),"$iag")
a7.bd=H.i(a7.y.n(0,b7),"$iK")
break}}t=d2.e
if(t!==C.c){a7.bg=H.i(a7.y.n(0,"shininess"),"$ia0")
a7.be=H.i(a7.y.n(0,"specularClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:a7.dn=H.i(a7.y.n(0,b8),"$iaf")
a7.bf=H.i(a7.y.n(0,b9),"$iK")
break
case C.d:a7.dq=H.i(a7.y.n(0,b8),"$iag")
a7.bf=H.i(a7.y.n(0,b9),"$iK")
break}}switch(d2.f){case C.c:break
case C.f:break
case C.e:a7.dr=H.i(a7.y.n(0,"bumpTxt"),"$iaf")
a7.bh=H.i(a7.y.n(0,c0),"$iK")
break
case C.d:a7.ds=H.i(a7.y.n(0,"bumpTxt"),"$iag")
a7.bh=H.i(a7.y.n(0,c0),"$iK")
break}if(d2.dy){a7.dt=H.i(a7.y.n(0,"envSampler"),"$iag")
a7.du=H.i(a7.y.n(0,"nullEnvTxt"),"$iK")
t=d2.r
if(t!==C.c){a7.bi=H.i(a7.y.n(0,"reflectClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:a7.dv=H.i(a7.y.n(0,c1),"$iaf")
a7.bj=H.i(a7.y.n(0,c2),"$iK")
break
case C.d:a7.dw=H.i(a7.y.n(0,c1),"$iag")
a7.bj=H.i(a7.y.n(0,c2),"$iK")
break}}t=d2.x
if(t!==C.c){a7.bk=H.i(a7.y.n(0,"refraction"),"$ia0")
a7.bl=H.i(a7.y.n(0,"refractClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:a7.dz=H.i(a7.y.n(0,c3),"$iaf")
a7.bm=H.i(a7.y.n(0,c4),"$iK")
break
case C.d:a7.dA=H.i(a7.y.n(0,c3),"$iag")
a7.bm=H.i(a7.y.n(0,c4),"$iK")
break}}}t=d2.y
if(t!==C.c){a7.bn=H.i(a7.y.n(0,"alpha"),"$ia0")
switch(t){case C.c:break
case C.f:break
case C.e:a7.dB=H.i(a7.y.n(0,c5),"$iaf")
a7.bo=H.i(a7.y.n(0,c6),"$iK")
break
case C.d:a7.dC=H.i(a7.y.n(0,c5),"$iag")
a7.bo=H.i(a7.y.n(0,c6),"$iK")
break}}a7.sew(H.c([],[A.cB]))
a7.sex(H.c([],[A.cD]))
a7.sey(H.c([],[A.cE]))
a7.sez(H.c([],[A.cF]))
a7.seA(H.c([],[A.cG]))
a7.seB(H.c([],[A.cH]))
if(d2.k2){t=d2.z
if(t>0){a7.dD=H.j(a7.y.n(0,"dirLightCount"),"$iK")
for(g=0;g<t;++g){s=a7.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.v(P.r(a8+r+a9))
H.i(f,"$iJ")
s=a7.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.v(P.r(a8+r+a9))
H.i(e,"$iJ")
s=a7.cc;(s&&C.a).h(s,new A.cB(f,e))}}t=d2.Q
if(t>0){a7.dE=H.j(a7.y.n(0,"pntLightCount"),"$iK")
for(g=0;g<t;++g){s=a7.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.v(P.r(a8+r+a9))
H.i(f,"$iJ")
s=a7.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.v(P.r(a8+r+a9))
H.i(e,"$iJ")
s=a7.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.v(P.r(a8+r+a9))
H.i(d,"$iJ")
s=a7.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.v(P.r(a8+r+a9))
H.i(c,"$ia0")
s=a7.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.v(P.r(a8+r+a9))
H.i(b,"$ia0")
s=a7.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.v(P.r(a8+r+a9))
H.i(a,"$ia0")
s=a7.cd;(s&&C.a).h(s,new A.cD(f,e,d,c,b,a))}}t=d2.ch
if(t>0){a7.dF=H.j(a7.y.n(0,"spotLightCount"),"$iK")
for(g=0;g<t;++g){s=a7.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.v(P.r(a8+r+a9))
H.i(f,"$iJ")
s=a7.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.v(P.r(a8+r+a9))
H.i(e,"$iJ")
s=a7.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.v(P.r(a8+r+a9))
H.i(d,"$iJ")
s=a7.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.v(P.r(a8+r+a9))
H.i(c,"$iJ")
s=a7.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.v(P.r(a8+r+a9))
H.i(b,"$ia0")
s=a7.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.v(P.r(a8+r+a9))
H.i(a,"$ia0")
s=a7.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.v(P.r(a8+r+a9))
H.i(a0,"$ia0")
s=a7.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.v(P.r(a8+r+a9))
H.i(a1,"$ia0")
s=a7.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.v(P.r(a8+r+a9))
H.i(a2,"$ia0")
s=a7.ce;(s&&C.a).h(s,new A.cE(f,e,d,c,b,a,a0,a1,a2))}}t=d2.cx
if(t>0){a7.dG=H.j(a7.y.n(0,"txtDirLightCount"),"$iK")
for(g=0;g<t;++g){s=a7.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.v(P.r(a8+r+a9))
H.i(f,"$iJ")
s=a7.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.v(P.r(a8+r+a9))
H.i(e,"$iJ")
s=a7.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.v(P.r(a8+r+a9))
H.i(d,"$iJ")
s=a7.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.v(P.r(a8+r+a9))
H.i(c,"$iJ")
s=a7.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.v(P.r(a8+r+a9))
H.i(b,"$iJ")
s=a7.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.v(P.r(a8+r+a9))
H.i(a,"$iK")
s=a7.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.v(P.r(a8+r+a9))
H.i(a0,"$iaf")
s=a7.cf;(s&&C.a).h(s,new A.cF(f,e,d,c,b,a0,a))}}t=d2.cy
if(t>0){a7.dH=H.j(a7.y.n(0,"txtPntLightCount"),"$iK")
for(g=0;g<t;++g){s=a7.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.v(P.r(a8+r+a9))
H.i(f,"$iJ")
s=a7.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.v(P.r(a8+r+a9))
H.i(e,"$iJ")
s=a7.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.v(P.r(a8+r+a9))
H.i(d,"$icC")
s=a7.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.v(P.r(a8+r+a9))
H.i(c,"$iJ")
s=a7.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.v(P.r(a8+r+a9))
H.i(b,"$iK")
s=a7.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.v(P.r(a8+r+a9))
H.i(a,"$ia0")
s=a7.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.v(P.r(a8+r+a9))
H.i(a0,"$ia0")
s=a7.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.v(P.r(a8+r+a9))
H.i(a1,"$ia0")
s=a7.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.v(P.r(a8+r+a9))
H.i(a2,"$iag")
s=a7.cg;(s&&C.a).h(s,new A.cG(f,e,d,c,a2,b,a,a0,a1))}}t=d2.db
if(t>0){a7.dI=H.j(a7.y.n(0,"txtSpotLightCount"),"$iK")
for(g=0;g<t;++g){s=a7.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.v(P.r(a8+r+a9))
H.i(f,"$iJ")
s=a7.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.v(P.r(a8+r+a9))
H.i(e,"$iJ")
s=a7.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.v(P.r(a8+r+a9))
H.i(d,"$iJ")
s=a7.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.v(P.r(a8+r+a9))
H.i(c,"$iJ")
s=a7.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.v(P.r(a8+r+a9))
H.i(b,"$iJ")
s=a7.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.v(P.r(a8+r+a9))
H.i(a,"$iK")
s=a7.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.v(P.r(a8+r+a9))
H.i(a0,"$iJ")
s=a7.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.v(P.r(a8+r+a9))
H.i(a1,"$ia0")
s=a7.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.v(P.r(a8+r+a9))
H.i(a2,"$ia0")
s=a7.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.v(P.r(a8+r+a9))
H.i(a3,"$ia0")
s=a7.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.v(P.r(a8+r+a9))
H.i(a4,"$ia0")
s=a7.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.v(P.r(a8+r+a9))
H.i(a5,"$ia0")
s=a7.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.v(P.r(a8+r+a9))
H.i(a6,"$iaf")
s=a7.ci;(s&&C.a).h(s,new A.cH(f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ac:function(a,b,c){C.b.Y(b.a,b.d,1)},
a6:function(a,b,c){if(c==null||c.d<6)C.b.Y(b.a,b.d,1)
else{a.ea(c)
C.b.Y(b.a,b.d,0)}},
seL:function(a){this.r1=H.n(a,"$ib",[A.at],"$ab")},
sew:function(a){this.cc=H.n(a,"$ib",[A.cB],"$ab")},
sex:function(a){this.cd=H.n(a,"$ib",[A.cD],"$ab")},
sey:function(a){this.ce=H.n(a,"$ib",[A.cE],"$ab")},
sez:function(a){this.cf=H.n(a,"$ib",[A.cF],"$ab")},
seA:function(a){this.cg=H.n(a,"$ib",[A.cG],"$ab")},
seB:function(a){this.ci=H.n(a,"$ib",[A.cH],"$ab")}}
A.h1.prototype={
hG:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.al+"];\n"
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
hN:function(a){var u
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
hH:function(a){var u
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
hV:function(a){var u,t
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
hW:function(a){var u,t
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
hP:function(a){var u
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
i_:function(a){var u
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
aq:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.l(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.i.b1(c,1))+"Txt;\n")
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hK:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aq(a,s,"emission")
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
hF:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aq(a,s,"ambient")
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
hI:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aq(a,s,"diffuse")
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
hL:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aq(a,s,"invDiffuse")
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
hT:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aq(a,s,"specular")
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
hO:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
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
hR:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aq(a,s,"reflect")
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
hS:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aq(a,s,"refract")
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
hJ:function(a){var u,t=this.z
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
hQ:function(a){var u,t=this.Q
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
hU:function(a){var u,t=this.ch
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
hX:function(a){var u,t,s=this.cx
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
hY:function(a){var u,t,s=this.cy
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
hZ:function(a){var u,t,s=this.db
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
hM:function(a){var u
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
A.cB.prototype={}
A.cF.prototype={}
A.cD.prototype={}
A.cG.prototype={}
A.cE.prototype={}
A.cH.prototype={}
A.ct.prototype={
em:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cS:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.z(H.k0(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.r("Error compiling shader '"+H.k(s)+"': "+H.k(u)))}return s},
hj:function(){var u,t,s,r=this,q=H.c([],[A.d3]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d3(p,t.name,s))}r.x=new A.f4(q)},
hl:function(){var u,t,s,r=this,q=H.c([],[A.dW]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ic(t.type,t.size,t.name,s))}r.y=new A.ij(q)},
aE:function(a,b,c){var u=this.a
if(a===1)return new A.K(u,b,c)
else return A.jT(u,this.r,b,a,c)},
eS:function(a,b,c){var u=this.a
if(a===1)return new A.af(u,b,c)
else return A.jT(u,this.r,b,a,c)},
eT:function(a,b,c){var u=this.a
if(a===1)return new A.ag(u,b,c)
else return A.jT(u,this.r,b,a,c)},
b8:function(a,b){return new P.ed(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
ic:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aE(b,c,d)
case 5121:return u.aE(b,c,d)
case 5122:return u.aE(b,c,d)
case 5123:return u.aE(b,c,d)
case 5124:return u.aE(b,c,d)
case 5125:return u.aE(b,c,d)
case 5126:return new A.a0(u.a,c,d)
case 35664:return new A.id(u.a,c,d)
case 35665:return new A.J(u.a,c,d)
case 35666:return new A.ih(u.a,c,d)
case 35667:return new A.ie(u.a,c,d)
case 35668:return new A.ig(u.a,c,d)
case 35669:return new A.ii(u.a,c,d)
case 35674:return new A.ik(u.a,c,d)
case 35675:return new A.cC(u.a,c,d)
case 35676:return new A.at(u.a,c,d)
case 35678:return u.eS(b,c,d)
case 35680:return u.eT(b,c,d)
case 35670:throw H.h(u.b8("BOOL",c))
case 35671:throw H.h(u.b8("BOOL_VEC2",c))
case 35672:throw H.h(u.b8("BOOL_VEC3",c))
case 35673:throw H.h(u.b8("BOOL_VEC4",c))
default:throw H.h(P.r("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.bJ.prototype={
i:function(a){return this.b}}
A.dW.prototype={}
A.ij.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.J()},
J:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.K.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.ie.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.ic.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
shD:function(a){H.n(a,"$ib",[P.D],"$ab")}}
A.a0.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.id.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.J.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.cC.prototype={
af:function(a){var u=new Float32Array(H.cW(H.n(a,"$ib",[P.B],"$ab")))
C.b.e2(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.at.prototype={
af:function(a){var u=new Float32Array(H.cW(H.n(a,"$ib",[P.B],"$ab")))
C.b.e3(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.af.prototype={
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.ag.prototype={
ea:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.jl.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cm(s.b,b).cm(s.d.cm(s.c,b),c)
s=new V.aC(r.a,r.b,r.c)
if(!J.a1(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a3()}a.siT(r.w(0,Math.sqrt(r.F(r))))
s=1-b
u=1-c
u=new V.dF(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.a1(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a3()}},
$S:35}
F.a5.prototype={
eK:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.e3()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dK())return
return s.w(0,Math.sqrt(s.F(s)))},
eO:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.H(0,q)
r=new V.X(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.F(r)))
r=t.H(0,q)
r=new V.X(r.a,r.b,r.c)
r=s.aU(r.w(0,Math.sqrt(r.F(r))))
return r.w(0,Math.sqrt(r.F(r)))},
c7:function(){var u,t=this
if(t.d!=null)return!0
u=t.eK()
if(u==null){u=t.eO()
if(u==null)return!1}t.d=u
t.a.a.a3()
return!0},
eJ:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.e3()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dK())return
return s.w(0,Math.sqrt(s.F(s)))},
eN:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.P().a){l=d.H(0,g)
l=new V.X(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.F(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.H(0,g)
l=new V.aC(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).H(0,j)
l=new V.X(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.F(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.F(l)))
l=o.aU(q)
l=l.w(0,Math.sqrt(l.F(l))).aU(o)
q=l.w(0,Math.sqrt(l.F(l)))}return q},
c5:function(){var u,t=this
if(t.e!=null)return!0
u=t.eJ()
if(u==null){u=t.eN()
if(u==null)return!1}t.e=u
t.a.a.a3()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.i.a9(J.ao(s.e),0)+", "+C.i.a9(J.ao(t.b.e),0)+", "+C.i.a9(J.ao(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
J:function(){return this.A("")}}
F.b8.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.i.a9(J.ao(u.e),0)+", "+C.i.a9(J.ao(this.b.e),0)},
J:function(){return this.A("")}}
F.bw.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.i.a9(J.ao(u.e),0)},
J:function(){return this.A("")}}
F.dJ.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.Q():u},
iv:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.Z()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){r=g[s]
h.a.h(0,r.ia())}h.a.Z()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.Z()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bw()
if(n.a==null)H.v(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.C(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.Z()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.Z()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.l(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
p=new F.b8()
o=l.a
if(o==null)H.v(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.v(P.r("May not create a line with vertices attached to different shapes."))
p.a=l
C.a.h(l.c.b,p)
p.b=k
C.a.h(k.c.c,p)
C.a.h(p.a.a.c.b,p)
p=p.a.a.e
if(p!=null)p.C(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.Z()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.Z()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.l(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.Z()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.l(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.dg(l,k,i)}g=h.e
if(g!=null)g.ax(0)},
aK:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aK()||!1
if(!t.a.aK())u=!1
s=t.e
if(s!=null)s.ax(0)
return u},
i7:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bi()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bh().a)!==0)++s
if((t&$.bg().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.d0().a)!==0)++s
if((t&$.d1().a)!==0)++s
if((t&$.c5().a)!==0)++s
if((t&$.bf().a)!==0)++s
r=a3.gcB(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.B
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d6])
for(n=0,m=0;m<s;++m){l=a3.i4(m)
k=l.gcB(l)
C.a.U(o,m,new Z.d6(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.l(u,j)
i=u[j].it(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.U(p,h,i[g]);++h}}n+=k}H.n(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cW(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d7(new Z.e4(a0,f),o,a3)
e.sf2(H.c([],[Z.bu]))
if(a.b.b.length!==0){t=P.D
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.Z()
C.a.h(d,c.e)}b=Z.jU(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bu(0,d.length,b))}if(a.c.b.length!==0){t=P.D
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.Z()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.l(c,m)
c=c[m].b
c.a.a.Z()
C.a.h(d,c.e)}b=Z.jU(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bu(1,d.length,b))}if(a.d.b.length!==0){t=P.D
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.Z()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.l(c,m)
c=c[m].b
c.a.a.Z()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.l(c,m)
c=c[m].c
c.a.a.Z()
C.a.h(d,c.e)}b=Z.jU(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bu(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.A(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.A(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.A(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.A(t))}return C.a.l(s,"\n")},
a3:function(){var u=this.e
if(u!=null)u.C(null)},
$ind:1}
F.hD.prototype={
i1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,"$ib",[F.aH],"$ab")
u=H.c([],[F.a5])
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
C.a.h(u,F.dg(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dg(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dg(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dg(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
aK:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].c7())s=!1
return s},
c6:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].c5())s=!1
return s},
i:function(a){return this.J()},
A:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].A(a))
return C.a.l(r,"\n")},
J:function(){return this.A("")},
seY:function(a){this.b=H.n(a,"$ib",[F.a5],"$ab")}}
F.hE.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.J()},
A:function(a){var u,t,s=H.c([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.l(t,u)
C.a.h(s,t[u].A(a+(""+u+". ")))}return C.a.l(s,"\n")},
J:function(){return this.A("")},
sf3:function(a){this.b=H.n(a,"$ib",[F.b8],"$ab")}}
F.hF.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.J()},
A:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].A(a))
return C.a.l(r,"\n")},
J:function(){return this.A("")},
sbV:function(a){this.b=H.n(a,"$ib",[F.bw],"$ab")}}
F.aH.prototype={
c9:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kV(u.cx,r,o,t,s,q,p,a,n)},
ia:function(){return this.c9(null)},
siT:function(a){var u
if(!J.a1(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
it:function(a){var u,t,s=this
if(a.t(0,$.bi())){u=s.f
t=[P.B]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bh())){u=s.r
t=[P.B]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bg())){u=s.x
t=[P.B]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bj())){u=s.y
t=[P.B]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bk())){u=s.z
t=[P.B]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.d0())){u=s.Q
t=[P.B]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.d1())){u=s.Q
t=[P.B]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.c5()))return H.c([s.ch],[P.B])
else if(a.t(0,$.bf())){u=s.cx
t=[P.B]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.B])},
c7:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e3()
t.d.N(0,new F.iA(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a3()
s=t.a.e
if(s!=null)s.ax(0)}return!0},
c5:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e3()
t.d.N(0,new F.iz(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a3()
s=t.a.e
if(s!=null)s.ax(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var u,t,s=this,r="-",q=H.c([],[P.f])
C.a.h(q,C.i.a9(J.ao(s.e),0))
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
C.a.h(q,V.V(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
J:function(){return this.A("")}}
F.iA.prototype={
$1:function(a){var u,t
H.j(a,"$ia5")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:8}
F.iz.prototype={
$1:function(a){var u,t
H.j(a,"$ia5")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:8}
F.it.prototype={
Z:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a3()
return!0},
d9:function(a,b){var u=null,t=F.kV(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gm:function(a){return this.c.length},
aK:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].c7()
return!0},
c6:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].c5()
return!0},
i8:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a1(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.J()},
A:function(a){var u,t,s,r
this.Z()
u=H.c([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].A(a))
return C.a.l(u,"\n")},
J:function(){return this.A("")},
shE:function(a){this.c=H.n(a,"$ib",[F.aH],"$ab")}}
F.iu.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
N:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.a5]})
C.a.N(u.b,b)
C.a.N(u.c,new F.iv(u,b))
C.a.N(u.d,new F.iw(u,b))},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].A(""))
return C.a.l(r,"\n")},
seZ:function(a){this.b=H.n(a,"$ib",[F.a5],"$ab")},
sf_:function(a){this.c=H.n(a,"$ib",[F.a5],"$ab")},
sf0:function(a){this.d=H.n(a,"$ib",[F.a5],"$ab")}}
F.iv.prototype={
$1:function(a){H.j(a,"$ia5")
if(!J.a1(a.a,this.a))this.b.$1(a)},
$S:8}
F.iw.prototype={
$1:function(a){var u
H.j(a,"$ia5")
u=this.a
if(!J.a1(a.a,u)&&!J.a1(a.b,u))this.b.$1(a)},
$S:8}
F.ix.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].A(""))
return C.a.l(r,"\n")},
sf4:function(a){this.b=H.n(a,"$ib",[F.b8],"$ab")},
sf5:function(a){this.c=H.n(a,"$ib",[F.b8],"$ab")}}
F.iy.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].A(""))
return C.a.l(r,"\n")},
sbV:function(a){this.b=H.n(a,"$ib",[F.bw],"$ab")}}
O.dv.prototype={
gq:function(){var u=this.dy
return u==null?this.dy=D.Q():u},
X:function(a){var u
H.j(a,"$ix")
u=this.dy
if(u!=null)u.C(a)},
bB:function(){return this.X(null)},
d2:function(a){H.j(a,"$ix")
this.a=null
this.X(a)},
hb:function(){return this.d2(null)},
fi:function(a,b){var u=V.ae
H.n(b,"$ie",[u],"$ae")
u=new D.bN([u])
u.b=!0
this.X(u)},
fk:function(a,b){var u=V.ae
H.n(b,"$ie",[u],"$ae")
u=new D.bO([u])
u.b=!0
this.X(u)},
cP:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.h.a_(a1.e.length+3,4)*4,a3=C.h.a_(a1.f.length+3,4)*4,a4=C.h.a_(a1.r.length+3,4)*4,a5=C.h.a_(a1.x.length+3,4)*4,a6=C.h.a_(a1.y.length+3,4)*4,a7=C.h.a_(a1.z.length+3,4)*4,a8=C.h.a_(a0.e.a.length+3,4)*4
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
a=$.bi()
if(h){j=$.bh()
a=new Z.b2(a.a|j.a)}if(g){j=$.bg()
a=new Z.b2(a.a|j.a)}if(f){j=$.bj()
a=new Z.b2(a.a|j.a)}if(e){j=$.bk()
a=new Z.b2(a.a|j.a)}if(c){j=$.bf()
a=new Z.b2(a.a|j.a)}return new A.h1(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
T:function(a,b){H.n(a,"$ib",[T.cy],"$ab")
if(b!=null)if(!C.a.S(a,b)){b.a=a.length
C.a.h(a,b)}},
am:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ap(u,u.length,[H.y(u,0)]);u.v();){t=u.d
t.toString
s=$.is
if(s==null)s=$.is=new V.X(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.ct(s)}}},
iN:function(a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4==null){a4=a3.cP()
u=a5.fr.j(0,a4.ad)
if(u==null){u=A.lY(a4,a5.a)
t=u.b
if(t.length===0)H.v(P.r("May not cache a shader with no name."))
if(a5.fr.dh(0,t))H.v(P.r('Shader cache already contains a shader by the name "'+t+'".'))
a5.fr.U(0,t,u)}a4=a3.a=u
a6.e=null}s=a4.z
r=s.ba
a4=a6.e
if(!(a4 instanceof Z.d7))a4=a6.e=null
if(a4==null||!a4.d.t(0,r)){a4=s.r1
if(a4)a6.d.aK()
q=s.r2
if(q){p=a6.d
o=p.e
if(o!=null)++o.d
p.d.c6()
p.a.c6()
p=p.e
if(p!=null)p.ax(0)}p=s.ry
if(p){o=a6.d
n=o.e
if(n!=null)++n.d
o.a.i8()
o=o.e
if(o!=null)o.ax(0)}m=a6.d.i7(new Z.iC(a5.a),r)
m.aM($.bi()).e=a3.a.Q.c
if(a4)m.aM($.bh()).e=a3.a.cx.c
if(q)m.aM($.bg()).e=a3.a.ch.c
if(s.rx)m.aM($.bj()).e=a3.a.cy.c
if(p)m.aM($.bk()).e=a3.a.db.c
if(s.x1)m.aM($.bf()).e=a3.a.dx.c
a6.e=m}a4=T.cy
l=H.c([],[a4])
q=a3.a
p=a5.a
p.useProgram(q.r)
q.x.ij()
if(s.fx){q=a3.a
o=a5.dx
o=o.gW(o)
q=q.dy
q.toString
q.af(o.aa(0,!0))}if(s.fy){q=a3.a
o=a5.cx
if(o==null){o=a5.db
o=o.gW(o)
n=a5.dx
n=a5.cx=o.u(0,n.gW(n))
o=n}q=q.fr
q.toString
q.af(o.aa(0,!0))}q=a3.a
o=a5.ch
if(o==null){o=a5.giK()
n=a5.dx
n=a5.ch=o.u(0,n.gW(n))
o=n}q=q.fy
q.toString
q.af(o.aa(0,!0))
if(s.x2){q=a3.a
o=a3.b
q=q.k1
q.toString
q.af(C.o.aa(o,!0))}if(s.y1){q=a3.a
o=a3.c
q=q.k2
q.toString
q.af(C.o.aa(o,!0))}if(s.y2){q=a3.a
o=a3.d
q=q.k3
q.toString
q.af(C.o.aa(o,!0))}if(s.al>0){k=a3.e.a.length
q=a3.a.k4
C.b.Y(q.a,q.d,k)
for(q=[P.B],j=0;j<k;++j){o=a3.a
n=a3.e.a
if(j>=n.length)return H.l(n,j)
n=n[j]
o.toString
H.j(n,"$iae")
o=o.r1
if(j>=o.length)return H.l(o,j)
o=o[j]
i=new Float32Array(H.cW(H.n(n.aa(0,!0),"$ib",q,"$ab")))
C.b.e3(o.a,o.d,!1,i)}}switch(s.a){case C.c:break
case C.f:q=a3.a
o=a3.f.f
q=q.r2
q.toString
n=o.a
h=o.b
o=o.c
C.b.p(q.a,q.d,n,h,o)
break
case C.e:a3.T(l,a3.f.d)
q=a3.a
o=a3.f.d
q.ac(q.rx,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break
case C.d:a3.T(l,a3.f.e)
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
case C.e:a3.T(l,a3.r.d)
q=a3.a
o=a3.r.d
q.ac(q.y1,q.al,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break
case C.d:a3.T(l,a3.r.e)
q=a3.a
o=a3.r.e
q.a6(q.y2,q.al,o)
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
q=q.ad
q.toString
n=o.a
h=o.b
o=o.c
C.b.p(q.a,q.d,n,h,o)
break
case C.e:a3.T(l,a3.x.d)
q=a3.a
o=a3.x.d
q.ac(q.ba,q.bb,o)
o=a3.a
q=a3.x.f
o=o.ad
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break
case C.d:a3.T(l,a3.x.e)
q=a3.a
o=a3.x.e
q.a6(q.dk,q.bb,o)
o=a3.a
q=a3.x.f
o=o.ad
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break}switch(s.d){case C.c:break
case C.f:q=a3.a
o=a3.y.f
q=q.bc
q.toString
n=o.a
h=o.b
o=o.c
C.b.p(q.a,q.d,n,h,o)
break
case C.e:a3.T(l,a3.y.d)
q=a3.a
o=a3.y.d
q.ac(q.dl,q.bd,o)
o=a3.a
q=a3.y.f
o=o.bc
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break
case C.d:a3.T(l,a3.y.e)
q=a3.a
o=a3.y.e
q.a6(q.dm,q.bd,o)
o=a3.a
q=a3.y.f
o=o.bc
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
break}switch(s.e){case C.c:break
case C.f:q=a3.a
o=a3.z.f
q=q.be
q.toString
n=o.a
h=o.b
o=o.c
C.b.p(q.a,q.d,n,h,o)
o=a3.a
h=a3.z.ch
o=o.bg
C.b.L(o.a,o.d,h)
break
case C.e:a3.T(l,a3.z.d)
q=a3.a
o=a3.z.d
q.ac(q.dn,q.bf,o)
o=a3.a
q=a3.z.f
o=o.be
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bg
C.b.L(q.a,q.d,h)
break
case C.d:a3.T(l,a3.z.e)
q=a3.a
o=a3.z.e
q.a6(q.dq,q.bf,o)
o=a3.a
q=a3.z.f
o=o.be
o.toString
n=q.a
h=q.b
q=q.c
C.b.p(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bg
C.b.L(q.a,q.d,h)
break}if(s.z>0){k=a3.dx.e.length
q=a3.a.dD
C.b.Y(q.a,q.d,k)
q=a5.db
g=q.gW(q)
for(q=a3.dx.e,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.C)(q),++e){d=q[e]
n=a3.a.cc
if(f>=n.length)return H.l(n,f)
c=n[f]
n=g.ct(d.a)
h=n.a
b=n.b
a=n.c
a=n.w(0,Math.sqrt(h*h+b*b+a*a))
b=c.b
h=a.a
n=a.b
a=a.c
C.b.p(b.a,b.d,h,n,a)
a=d.c
n=c.c
C.b.p(n.a,n.d,a.a,a.b,a.c);++f}}if(s.Q>0){k=a3.dx.f.length
q=a3.a.dE
C.b.Y(q.a,q.d,k)
q=a5.db
g=q.gW(q)
for(q=a3.dx.f,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.C)(q),++e){d=q[e]
n=a3.a.cd
if(f>=n.length)return H.l(n,f)
c=n[f]
n=d.gaY(d)
h=c.b
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=g.b_(d.gaY(d))
h=c.c
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gak(d)
h=c.d
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gc0()
h=c.e
C.b.L(h.a,h.d,n)
n=d.gc1()
h=c.f
C.b.L(h.a,h.d,n)
n=d.gc2()
h=c.r
C.b.L(h.a,h.d,n);++f}}if(s.ch>0){k=a3.dx.r.length
q=a3.a.dF
C.b.Y(q.a,q.d,k)
q=a5.db
g=q.gW(q)
for(q=a3.dx.r,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.C)(q),++e){d=q[e]
n=a3.a.ce
if(f>=n.length)return H.l(n,f)
c=n[f]
n=d.gaY(d)
h=c.b
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gcb(d).j2()
h=c.c
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=g.b_(d.gaY(d))
h=c.d
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gak(d)
h=c.e
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gj1()
h=c.f
C.b.L(h.a,h.d,n)
n=d.gj0()
h=c.r
C.b.L(h.a,h.d,n)
n=d.gc0()
h=c.x
C.b.L(h.a,h.d,n)
n=d.gc1()
h=c.y
C.b.L(h.a,h.d,n)
n=d.gc2()
h=c.z
C.b.L(h.a,h.d,n);++f}}if(s.cx>0){k=a3.dx.x.length
q=a3.a.dG
C.b.Y(q.a,q.d,k)
q=a5.db
g=q.gW(q)
for(q=a3.dx.x,o=q.length,n=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.C)(q),++e){d=q[e]
h=a3.a.cf
if(f>=h.length)return H.l(h,f)
c=h[f]
h=d.gaZ()
H.n(l,"$ib",n,"$ab")
if(!C.a.S(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gcb(d)
b=c.d
C.b.p(b.a,b.d,h.a,h.b,h.c)
h=d.gbv()
b=c.b
C.b.p(b.a,b.d,h.a,h.b,h.c)
h=d.gbt(d)
b=c.c
C.b.p(b.a,b.d,h.a,h.b,h.c)
h=g.ct(d.gcb(d))
b=h.a
a=h.b
a0=h.c
a0=h.w(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
h=a0.b
a0=a0.c
C.b.p(a.a,a.d,b,h,a0)
a0=d.gak(d)
h=c.f
C.b.p(h.a,h.d,a0.a,a0.b,a0.c)
a0=d.gaZ()
h=a0.gbr(a0)
if(!h){h=c.x
C.b.Y(h.a,h.d,1)}else{h=c.r
b=a0.gbr(a0)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,a0.gip(a0))
h=c.x
C.b.Y(h.a,h.d,0)}++f}}if(s.cy>0){k=a3.dx.y.length
q=a3.a.dH
C.b.Y(q.a,q.d,k)
q=a5.db
g=q.gW(q)
for(q=a3.dx.y,o=q.length,n=[P.B],h=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.C)(q),++e){d=q[e]
b=a3.a.cg
if(f>=b.length)return H.l(b,f)
c=b[f]
b=d.gaZ()
H.n(l,"$ib",h,"$ab")
if(!C.a.S(l,b)){b.a=l.length
C.a.h(l,b)}a1=g.u(0,d.gW(d))
b=d.gW(d)
a=$.cq
b=b.b_(a==null?$.cq=new V.aC(0,0,0):a)
a=c.b
C.b.p(a.a,a.d,b.a,b.b,b.c)
b=$.cq
b=a1.b_(b==null?$.cq=new V.aC(0,0,0):b)
a=c.c
C.b.p(a.a,a.d,b.a,b.b,b.c)
b=a1.dJ(0)
a=c.d
i=new Float32Array(H.cW(H.n(new V.dw(b.a,b.b,b.c,b.e,b.f,b.r,b.y,b.z,b.Q).aa(0,!0),"$ib",n,"$ab")))
C.b.e2(a.a,a.d,!1,i)
a=d.gak(d)
b=c.e
C.b.p(b.a,b.d,a.a,a.b,a.c)
a=d.gaZ()
b=a.gbr(a)
if(!b){b=c.r
C.b.Y(b.a,b.d,1)}else{b=c.f
a0=a.d
a2=b.a
b=b.d
if(a0<6)a2.uniform1i(b,0)
else a2.uniform1i(b,a.a)
b=c.r
C.b.Y(b.a,b.d,0)}b=d.gc0()
a=c.x
C.b.L(a.a,a.d,b)
b=d.gc1()
a=c.y
C.b.L(a.a,a.d,b)
b=d.gc2()
a=c.z
C.b.L(a.a,a.d,b);++f}}if(s.db>0){k=a3.dx.z.length
q=a3.a.dI
C.b.Y(q.a,q.d,k)
q=a5.db
g=q.gW(q)
for(q=a3.dx.z,o=q.length,a4=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.C)(q),++e){d=q[e]
n=a3.a.ci
if(f>=n.length)return H.l(n,f)
c=n[f]
n=d.gaZ()
H.n(l,"$ib",a4,"$ab")
if(!C.a.S(l,n)){n.a=l.length
C.a.h(l,n)}n=d.gaY(d)
h=c.b
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gcb(d)
h=c.c
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gbv()
h=c.d
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gbt(d)
h=c.e
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=g.b_(d.gaY(d))
h=c.f
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gaZ()
h=n.gbr(n)
if(!h){n=c.x
C.b.Y(n.a,n.d,1)}else{h=c.r
b=n.gbr(n)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,n.gip(n))
n=c.x
C.b.Y(n.a,n.d,0)}n=d.gak(d)
h=c.y
C.b.p(h.a,h.d,n.a,n.b,n.c)
n=d.gj3()
h=c.z
C.b.L(h.a,h.d,n)
n=d.gj4()
h=c.Q
C.b.L(h.a,h.d,n)
n=d.gc0()
h=c.ch
C.b.L(h.a,h.d,n)
n=d.gc1()
h=c.cx
C.b.L(h.a,h.d,n)
n=d.gc2()
h=c.cy
C.b.L(h.a,h.d,n);++f}}}switch(s.f){case C.c:break
case C.f:break
case C.e:a3.T(l,a3.Q.d)
a4=a3.a
q=a3.Q.d
a4.ac(a4.dr,a4.bh,q)
break
case C.d:a3.T(l,a3.Q.e)
a4=a3.a
q=a3.Q.e
a4.a6(a4.ds,a4.bh,q)
break}if(s.fr){a4=a3.a
q=a5.Q
if(q==null){q=a5.db
q=a5.Q=q.gW(q).dJ(0)}a4=a4.id
a4.toString
a4.af(q.aa(0,!0))}if(s.dy){a3.T(l,a3.ch)
a4=a3.a
q=a3.ch
a4.a6(a4.dt,a4.du,q)
switch(s.r){case C.c:break
case C.f:a4=a3.a
q=a3.cx.f
a4=a4.bi
a4.toString
o=q.a
n=q.b
q=q.c
C.b.p(a4.a,a4.d,o,n,q)
break
case C.e:a3.T(l,a3.cx.d)
a4=a3.a
q=a3.cx.d
a4.ac(a4.dv,a4.bj,q)
q=a3.a
a4=a3.cx.f
q=q.bi
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.p(q.a,q.d,o,n,a4)
break
case C.d:a3.T(l,a3.cx.e)
a4=a3.a
q=a3.cx.e
a4.a6(a4.dw,a4.bj,q)
q=a3.a
a4=a3.cx.f
q=q.bi
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.p(q.a,q.d,o,n,a4)
break}switch(s.x){case C.c:break
case C.f:a4=a3.a
q=a3.cy.f
a4=a4.bl
a4.toString
o=q.a
n=q.b
q=q.c
C.b.p(a4.a,a4.d,o,n,q)
q=a3.a
n=a3.cy.ch
q=q.bk
C.b.L(q.a,q.d,n)
break
case C.e:a3.T(l,a3.cy.d)
a4=a3.a
q=a3.cy.d
a4.ac(a4.dz,a4.bm,q)
q=a3.a
a4=a3.cy.f
q=q.bl
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.p(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bk
C.b.L(a4.a,a4.d,n)
break
case C.d:a3.T(l,a3.cy.e)
a4=a3.a
q=a3.cy.e
a4.a6(a4.dA,a4.bm,q)
q=a3.a
a4=a3.cy.f
q=q.bl
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.p(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bk
C.b.L(a4.a,a4.d,n)
break}}a4=s.y
q=a4!==C.c
if(q){switch(a4){case C.c:break
case C.f:a4=a3.a
o=a3.db.f
a4=a4.bn
C.b.L(a4.a,a4.d,o)
break
case C.e:a3.T(l,a3.db.d)
a4=a3.a
o=a3.db.d
a4.ac(a4.dB,a4.bo,o)
o=a3.a
a4=a3.db.f
o=o.bn
C.b.L(o.a,o.d,a4)
break
case C.d:a3.T(l,a3.db.e)
a4=a3.a
o=a3.db.e
a4.a6(a4.dC,a4.bo,o)
o=a3.a
a4=a3.db.f
o=o.bn
C.b.L(o.a,o.d,a4)
break}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){a4=l[j]
if(!a4.c&&a4.d>=6){a4.c=!0
p.activeTexture(33984+a4.a)
p.bindTexture(34067,a4.b)}}a4=a6.e
a4.c3(a5)
a4.aN(a5)
a4.iZ(a5)
if(q)p.disable(3042)
for(j=0;j<l.length;++j){a4=l[j]
if(a4.c){a4.c=!1
p.activeTexture(33984+a4.a)
p.bindTexture(34067,null)}}a4=a3.a
a4.toString
p.useProgram(null)
a4.x.ih()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cP().ad},
seM:function(a){this.e=H.n(a,"$ia2",[V.ae],"$aa2")}}
O.h_.prototype={}
O.ck.prototype={
X:function(a){this.a.X(H.j(a,"$ix"))},
bB:function(){return this.X(null)},
ar:function(){},
hh:function(a){},
hi:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gq().V(0,t.gb4())
u=t.e
t.e=a
if(a!=null)a.gq().h(0,t.gb4())
s=new D.M(t.b+".textureCube",u,t.e,[T.dP])
s.b=!0
t.a.X(s)}}}
O.h0.prototype={}
O.aR.prototype={
d4:function(a){var u,t,s=this
if(!J.a1(s.f,a)){u=s.f
s.f=a
t=new D.M(s.b+".color",u,a,[V.a4])
t.b=!0
s.a.X(t)}},
ar:function(){this.eg()
this.d4(new V.a4(1,1,1))},
sak:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.f
t.ar()
u=t.a
u.a=null
u.X(null)}t.d4(b)}}
O.h2.prototype={
hg:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.P().a)){u.ch=a
t=new D.M(u.b+".refraction",t,a,[P.B])
t.b=!0
u.a.X(t)}},
ar:function(){this.bz()
this.hg(1)}}
O.h3.prototype={
bY:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.P().a)){u.ch=a
t=new D.M(u.b+".shininess",t,a,[P.B])
t.b=!0
u.a.X(t)}},
ar:function(){this.bz()
this.bY(100)}}
O.bW.prototype={}
T.cy.prototype={}
T.dP.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.Q():u}}
T.i_.prototype={
aF:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.o
W.a6(t,"load",H.m(new T.i0(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hc:function(a,b,c){var u,t,s,r
b=V.kb(b)
u=V.kb(a.width)
t=V.kb(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jG()
s.width=u
s.height=t
r=H.j(C.l.e6(s,"2d"),"$ic9")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mF(r.getImageData(0,0,s.width,s.height))}}}
T.i0.prototype={
$1:function(a){var u=this,t=u.a,s=t.hc(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.iS(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.ii()}++t.e},
$S:26}
V.b5.prototype={
au:function(a,b){return!0},
i:function(a){return"all"},
$iaq:1}
V.aq.prototype={}
V.du.prototype={
au:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].au(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa0:function(a){this.a=H.n(a,"$ib",[V.aq],"$ab")},
$iaq:1}
V.aj.prototype={
au:function(a,b){return!this.ef(0,b)},
i:function(a){return"!["+this.cC(0)+"]"}}
V.ht.prototype={
au:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.jQ(this.a),t=H.jQ(this.b)
return u+".."+t},
$iaq:1}
V.hC.prototype={
el:function(a){var u,t
if(a.a.length<=0)throw H.h(P.r("May not create a SetMatcher with zero characters."))
u=new H.aP([P.D,P.N])
for(t=new H.cj(a,a.gm(a),[H.an(a,"w",0)]);t.v();)u.U(0,t.d,!0)
this.shf(u)},
au:function(a,b){return this.a.dh(0,b)},
i:function(a){var u=this.a
return P.jR(new H.dq(u,[H.y(u,0)]))},
shf:function(a){this.a=H.n(a,"$iO",[P.D,P.N],"$aO")},
$iaq:1}
V.cu.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cA(this.a.k(0,b))
r.sa0(H.c([],[V.aq]))
r.c=!1
C.a.h(this.c,r)
return r},
ik:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.au(0,a))return r}return},
i:function(a){return this.b},
shz:function(a){this.c=H.n(a,"$ib",[V.cA],"$ab")}}
V.dU.prototype={
i:function(a){var u=H.kd(this.b,"\n","\\n"),t=H.kd(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cz.prototype={
aw:function(a,b,c){var u,t,s
H.n(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.U(0,s,b)}},
i:function(a){return this.b},
sh8:function(a){var u=P.f
this.c=H.n(a,"$iO",[u,u],"$aO")}}
V.i3.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cu(this,b)
u.shz(H.c([],[V.cA]))
u.d=null
this.a.U(0,b,u)}return u},
K:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cz(a)
u=P.f
t.sh8(new H.aP([u,u]))
this.b.U(0,a,t)}return t},
e1:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dU]),l=this.c,k=[P.D],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.i.aD(a,s)
q=l.ik(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jR(j)
throw H.h(P.r("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jR(j)
o=l.d
n=o.c.j(0,p)
t=new V.dU(n==null?o.b:n,p,s)}++s}}},
shp:function(a){this.a=H.n(a,"$iO",[P.f,V.cu],"$aO")},
shs:function(a){this.b=H.n(a,"$iO",[P.f,V.cz],"$aO")}}
V.cA.prototype={
i:function(a){return this.b.b+": "+this.cC(0)}}
X.d9.prototype={$iba:1}
X.fE.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.Q():u}}
X.dD.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.Q():u},
aC:function(a){var u
H.j(a,"$ix")
u=this.f
if(u!=null)u.C(a)},
eF:function(){return this.aC(null)},
saV:function(a){var u,t,s=this
if(!J.a1(s.b,a)){u=s.b
if(u!=null)u.gq().V(0,s.gcG())
t=s.b
s.b=a
if(a!=null)a.gq().h(0,s.gcG())
u=new D.M("mover",t,s.b,[U.aa])
u.b=!0
s.aC(u)}},
$iba:1,
$id9:1}
X.dN.prototype={}
V.bn.prototype={
b3:function(a){this.b=new P.fI(C.L)
this.c=null
this.sbK(H.c([],[[P.b,W.aw]]))},
I:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aw]))
u=a.split("\n")
for(l=u.length,t=[W.aw],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.H(q)
o=m.b.eR(q,0,q.length)
n=o==null?q:o
C.J.e9(p,H.kd(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gbp(m.d),p)}},
dS:function(a,b){var u,t,s,r,q=this
H.n(b,"$ib",[P.f],"$ab")
q.sbK(H.c([],[[P.b,W.aw]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.b9():t).e1(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)q.bs(t[r])},
sbK:function(a){this.d=H.n(a,"$ib",[[P.b,W.aw]],"$ab")}}
V.jB.prototype={
$1:function(a){H.j(a,"$ib_")
P.kc(C.j.e0(this.a.gim(),2)+" fps")},
$S:39}
V.fk.prototype={
bs:function(a){var u=this
switch(a.a){case"Class":u.I(a.b,"#551")
break
case"Comment":u.I(a.b,"#777")
break
case"Id":u.I(a.b,"#111")
break
case"Num":u.I(a.b,"#191")
break
case"Reserved":u.I(a.b,"#119")
break
case"String":u.I(a.b,"#171")
break
case"Symbol":u.I(a.b,"#616")
break
case"Type":u.I(a.b,"#B11")
break
case"Whitespace":u.I(a.b,"#111")
break}},
b9:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.i4()
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
C.a.h(a1.k(0,k).l(0,k).a,new V.b5())
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
C.a.h(a1.k(0,h).l(0,h).a,new V.b5())
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
t=new V.aj()
s=[V.aq]
t.sa0(H.c([],s))
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
t=new V.aj()
t.sa0(H.c([],s))
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
t.d=t.a.K("Num")
t=a1.k(0,n)
t.d=t.a.K("Num")
t=a1.k(0,m)
t.d=t.a.K("Symbol")
t=a1.k(0,j)
t.d=t.a.K("String")
t=a1.k(0,g)
t.d=t.a.K("String")
t=a1.k(0,c)
t.d=t.a.K(d)
t=a1.k(0,a0)
t.d=t.a.K(a0)
t=a1.k(0,q)
t=t.d=t.a.K(q)
u=[P.f]
t.aw(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aw(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aw(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fF.prototype={
bs:function(a){var u=this
switch(a.a){case"Builtin":u.I(a.b,"#411")
break
case"Comment":u.I(a.b,"#777")
break
case"Id":u.I(a.b,"#111")
break
case"Num":u.I(a.b,"#191")
break
case"Preprocess":u.I(a.b,"#737")
break
case"Reserved":u.I(a.b,"#119")
break
case"Symbol":u.I(a.b,"#611")
break
case"Type":u.I(a.b,"#171")
break
case"Whitespace":u.I(a.b,"#111")
break}},
b9:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.i4()
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
C.a.h(e.k(0,k).l(0,m).a,new V.b5())
t=e.k(0,j).l(0,i)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,j).l(0,j)
t=new V.aj()
s=[V.aq]
t.sa0(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,h)
t=V.u(new H.q("#"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,h)
u=new V.aj()
u.sa0(H.c([],s))
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
u.d=u.a.K("Num")
u=e.k(0,n)
u.d=u.a.K("Num")
u=e.k(0,m)
u.d=u.a.K("Symbol")
u=e.k(0,i)
u.d=u.a.K(j)
u=e.k(0,g)
u.d=u.a.K(h)
u=e.k(0,f)
u.d=u.a.K(f)
u=e.k(0,q)
u=u.d=u.a.K(q)
t=[P.f]
u.aw(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aw(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aw(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fG.prototype={
bs:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.I(a.b,"#911")
u.I("=",t)
break
case"Id":u.I(a.b,t)
break
case"Other":u.I(a.b,t)
break
case"Reserved":u.I(a.b,"#119")
break
case"String":u.I(a.b,"#171")
break
case"Symbol":u.I(a.b,"#616")
break}},
b9:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.i4()
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
C.a.h(l.k(0,o).l(0,o).a,new V.b5())
C.a.h(l.k(0,s).l(0,m).a,new V.b5())
u=l.k(0,m).l(0,m)
t=new V.aj()
t.sa0(H.c([],[V.aq]))
C.a.h(u.a,t)
u=V.u(new H.q('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.K("Symbol")
u=l.k(0,n)
u.d=u.a.K("String")
u=l.k(0,r)
t=u.a.K(r)
u.d=t
t.aw(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.k(0,q)
t.d=t.a.K(q)
t=l.k(0,m)
t.d=t.a.K(m)
return l}}
V.ho.prototype={
dS:function(a,b){H.n(b,"$ib",[P.f],"$ab")
this.sbK(H.c([],[[P.b,W.aw]]))
this.I(C.a.l(b,"\n"),"#111")},
bs:function(a){},
b9:function(){return}}
V.hG.prototype={
en:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a6(q,"scroll",H.m(new V.hI(o),{func:1,ret:-1,args:[r]}),!1,r)},
da:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.n(a,"$ib",[P.f],"$ab")
this.hk()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.e1(C.a.is(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
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
if(H.n0(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.l(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
t.appendChild(l)}else{k=P.l_(C.w,n,C.m,!1)
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
e5:function(a){var u,t,s,r=new V.fk("dart")
r.b3("dart")
u=new V.fF("glsl")
u.b3("glsl")
t=new V.fG("html")
t.b3("html")
s=C.a.il(H.c([r,u,t],[V.bn]),new V.hJ(a))
if(s!=null)return s
r=new V.ho("plain")
r.b3("plain")
return r},
d8:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.n(b0,"$ib",[P.f],"$ab")
u=H.c([],[P.D])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.k6(r).bx(r,"+")){C.a.U(b0,s,C.i.b1(r,1))
C.a.h(u,1)
t=!0}else if(C.i.bx(r,"-")){C.a.U(b0,s,C.i.b1(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.e5(a8)
q.dS(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.l_(C.w,a7,C.m,!1)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.C)(r),++a0)C.T.i3(a,r[a0])
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
for(a3=C.a.gP(r);a3.v();)c.appendChild(a3.gE(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hk:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.i4()
u.c=u.k(0,q)
t=u.k(0,q).l(0,p)
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).l(0,p)
s=new V.aj()
r=[V.aq]
s.sa0(H.c([],r))
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
s=new V.aj()
s.sa0(H.c([],r))
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
s=new V.aj()
s.sa0(H.c([],r))
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
t=new V.aj()
t.sa0(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,k).l(0,j)
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).l(0,k)
t=new V.aj()
t.sa0(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).l(0,i).a,new V.b5())
s=u.k(0,i).l(0,i)
t=new V.aj()
t.sa0(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.K(p)
s=u.k(0,n)
s.d=s.a.K(o)
s=u.k(0,"CodeEnd")
s.d=s.a.K(m)
s=u.k(0,j)
s.d=s.a.K("Link")
s=u.k(0,i)
s.d=s.a.K(i)
this.b=u}}
V.hI.prototype={
$1:function(a){P.kM(C.n,new V.hH(this.a))},
$S:26}
V.hH.prototype={
$0:function(){var u=C.j.ae(document.documentElement.scrollTop),t=this.a.style,s=H.k(-0.01*u)+"px"
t.top=s},
$S:2}
V.hJ.prototype={
$1:function(a){return H.j(a,"$ibn").a===this.a},
$S:40}
B.jy.prototype={
$1:function(a){var u,t,s,r
H.j(a,"$ix")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.d8("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.d8("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a.prototype
u.ec=u.i
u=J.dm.prototype
u.ee=u.i
u=P.e.prototype
u.ed=u.bw
u=W.S.prototype
u.by=u.a7
u=W.ez.prototype
u.eh=u.aj
u=O.ck.prototype
u.eg=u.ar
u=O.aR.prototype
u.bz=u.ar
u=V.du.prototype
u.ef=u.au
u.cC=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mz","mg",9)
u(P,"mA","mh",9)
u(P,"mB","mi",9)
t(P,"l8","mx",3)
s(W,"mL",4,null,["$4"],["mk"],21,0)
s(W,"mM",4,null,["$4"],["ml"],21,0)
var m
r(m=E.ai.prototype,"gdQ",0,0,null,["$1","$0"],["dR","iC"],0,0)
r(m,"gdO",0,0,null,["$1","$0"],["dP","iB"],0,0)
r(m,"gdM",0,0,null,["$1","$0"],["dN","iy"],0,0)
q(m,"giw","ix",5)
q(m,"giz","iA",5)
r(m=E.dT.prototype,"gcD",0,0,null,["$1","$0"],["cF","cE"],0,0)
p(m,"giO","dW",3)
o(m=X.e_.prototype,"gfA","fB",10)
o(m,"gfl","fm",10)
o(m,"gfs","ft",4)
o(m,"gfE","fF",20)
o(m,"gfC","fD",20)
o(m,"gfI","fJ",4)
o(m,"gfM","fN",4)
o(m,"gfw","fz",4)
o(m,"gfK","fL",4)
o(m,"gfu","fv",4)
o(m,"gfO","fP",42)
o(m,"gfQ","fR",10)
o(m,"gh2","h3",11)
o(m,"gfZ","h_",11)
o(m,"gh0","h1",11)
r(D.bp.prototype,"ger",0,0,null,["$1","$0"],["an","es"],0,0)
r(m=D.dp.prototype,"gcY",0,0,null,["$1","$0"],["cZ","fG"],0,0)
o(m,"gfT","fU",30)
q(m,"gff","fg",22)
q(m,"gfX","fY",22)
n(V.U.prototype,"gm","cl",23)
n(V.X.prototype,"gm","cl",23)
r(m=U.ch.prototype,"gaG",0,0,null,["$1","$0"],["M","a1"],0,0)
q(m,"gfd","fe",24)
q(m,"gfV","fW",24)
r(m=U.e0.prototype,"gaG",0,0,null,["$1","$0"],["M","a1"],0,0)
o(m,"gbN","bO",1)
o(m,"gbP","bQ",1)
o(m,"gbR","bS",1)
r(m=U.e1.prototype,"gaG",0,0,null,["$1","$0"],["M","a1"],0,0)
o(m,"gbN","bO",1)
o(m,"gbP","bQ",1)
o(m,"gbR","bS",1)
o(m,"gf7","f8",1)
o(m,"gf9","fa",1)
o(m,"ghx","hy",1)
o(m,"ghv","hw",1)
o(m,"ght","hu",1)
o(U.e2.prototype,"gfb","fc",1)
r(m=M.de.prototype,"gag",0,0,null,["$1","$0"],["ao","ev"],0,0)
q(m,"gfn","fo",5)
q(m,"gfp","fq",5)
r(m=O.dv.prototype,"gb4",0,0,null,["$1","$0"],["X","bB"],0,0)
r(m,"gha",0,0,null,["$1","$0"],["d2","hb"],0,0)
q(m,"gfh","fi",25)
q(m,"gfj","fk",25)
r(O.ck.prototype,"gb4",0,0,null,["$1","$0"],["X","bB"],0,0)
r(X.dD.prototype,"gcG",0,0,null,["$1","$0"],["aC","eF"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.jO,J.a,J.ap,P.em,P.e,H.cj,P.aN,H.bL,H.dZ,H.i9,P.br,H.ca,H.eE,P.a8,H.fQ,H.fR,H.fM,P.eK,P.b4,P.az,P.e5,P.hQ,P.cw,P.hR,P.b_,P.ad,P.jk,P.j8,P.bX,P.el,P.w,P.cb,P.fJ,P.ji,P.N,P.av,P.a7,P.bq,P.hm,P.dL,P.ed,P.fD,P.bs,P.b,P.O,P.L,P.al,P.f,P.bc,W.fg,W.bz,W.A,W.dB,W.ez,W.jd,W.dh,W.as,W.j7,W.eQ,P.eP,P.j2,O.a2,O.cl,E.f9,E.ai,E.hu,E.dT,Z.e4,Z.iC,Z.d7,Z.bu,Z.b2,D.fc,D.bK,D.x,X.d8,X.dn,X.fO,X.fT,X.ar,X.ha,X.i5,X.e_,D.bp,D.a3,D.dE,D.dK,D.dQ,D.dR,D.dS,V.a4,V.bI,V.fu,V.dw,V.ae,V.ab,V.aC,V.dF,V.dH,V.U,V.X,U.e0,U.e1,U.e2,M.de,A.d3,A.f4,A.h1,A.cB,A.cF,A.cD,A.cG,A.cE,A.cH,A.bJ,A.dW,A.ij,F.a5,F.b8,F.bw,F.dJ,F.hD,F.hE,F.hF,F.aH,F.it,F.iu,F.ix,F.iy,O.bW,O.ck,T.i_,V.b5,V.aq,V.du,V.ht,V.hC,V.cu,V.dU,V.cz,V.i3,X.d9,X.dN,X.dD,V.bn,V.hG])
s(J.a,[J.fL,J.dk,J.dm,J.aO,J.dl,J.bP,H.co,W.d,W.f1,W.d4,W.c9,W.aJ,W.aK,W.T,W.e7,W.fl,W.fm,W.e9,W.dd,W.eb,W.fo,W.o,W.ee,W.aM,W.fH,W.eh,W.bt,W.ds,W.h4,W.en,W.eo,W.aT,W.ep,W.es,W.aU,W.ew,W.ey,W.aX,W.eA,W.aY,W.eF,W.aD,W.eI,W.i2,W.b0,W.eL,W.i7,W.ip,W.eR,W.eT,W.eV,W.eX,W.eZ,P.b7,P.ej,P.bb,P.eu,P.hr,P.eG,P.bd,P.eN,P.f5,P.e6,P.d5,P.dG,P.bU,P.dI,P.dO,P.dX,P.eC])
s(J.dm,[J.hn,J.cI,J.bv])
t(J.jN,J.aO)
s(J.dl,[J.dj,J.di])
t(P.fS,P.em)
s(P.fS,[H.dY,W.iK,W.ah,P.fz])
t(H.q,H.dY)
s(P.e,[H.fr,H.fW,H.cJ])
s(H.fr,[H.bQ,H.dq])
s(P.aN,[H.fX,H.iD])
t(H.fY,H.bQ)
s(P.br,[H.hj,H.fN,H.im,H.ib,H.fb,H.hA,P.f3,P.dC,P.aB,P.io,P.il,P.cv,P.fe,P.fj])
s(H.ca,[H.jC,H.hX,H.ju,H.jv,H.jw,P.iG,P.iF,P.iH,P.iI,P.jh,P.jg,P.iQ,P.iU,P.iR,P.iS,P.iT,P.iX,P.iY,P.iW,P.iV,P.hS,P.hT,P.jo,P.j5,P.j4,P.j6,P.fV,P.fp,P.fq,W.fs,W.h6,W.h8,W.hz,W.hP,W.iP,W.hi,W.hh,W.j9,W.ja,W.jf,W.jj,P.jq,P.fA,P.fB,P.f7,E.hv,E.hw,E.hx,E.i1,D.fv,D.fw,F.jl,F.iA,F.iz,F.iv,F.iw,T.i0,V.jB,V.hI,V.hH,V.hJ,B.jy])
s(H.hX,[H.hN,H.c7])
t(H.iE,P.f3)
t(P.fU,P.a8)
s(P.fU,[H.aP,W.iJ])
t(H.dy,H.co)
s(H.dy,[H.cN,H.cP])
t(H.cO,H.cN)
t(H.cn,H.cO)
t(H.cQ,H.cP)
t(H.dz,H.cQ)
s(H.dz,[H.hb,H.hc,H.hd,H.he,H.hf,H.dA,H.hg])
t(P.j3,P.jk)
t(P.j1,P.j8)
t(P.cc,P.hR)
t(P.ft,P.cb)
s(P.cc,[P.fI,P.ir])
t(P.iq,P.ft)
s(P.a7,[P.B,P.D])
s(P.aB,[P.bT,P.fK])
s(W.d,[W.E,W.fy,W.aW,W.cR,W.aZ,W.aE,W.cT,W.iB,W.cK,P.f8,P.bG])
s(W.E,[W.S,W.bm,W.cL])
s(W.S,[W.t,P.p])
s(W.t,[W.d2,W.f2,W.c6,W.bl,W.bH,W.aw,W.fC,W.ci,W.hB,W.bV,W.dM,W.hV,W.hW,W.cx])
s(W.aJ,[W.cd,W.fh,W.fi])
t(W.ff,W.aK)
t(W.ce,W.e7)
t(W.ea,W.e9)
t(W.dc,W.ea)
t(W.ec,W.eb)
t(W.fn,W.ec)
t(W.aL,W.d4)
t(W.ef,W.ee)
t(W.fx,W.ef)
t(W.ei,W.eh)
t(W.bM,W.ei)
t(W.by,W.o)
s(W.by,[W.aQ,W.a9,W.aF])
t(W.h5,W.en)
t(W.h7,W.eo)
t(W.eq,W.ep)
t(W.h9,W.eq)
t(W.et,W.es)
t(W.cp,W.et)
t(W.ex,W.ew)
t(W.hp,W.ex)
t(W.hy,W.ey)
t(W.cS,W.cR)
t(W.hK,W.cS)
t(W.eB,W.eA)
t(W.hL,W.eB)
t(W.hO,W.eF)
t(W.eJ,W.eI)
t(W.hY,W.eJ)
t(W.cU,W.cT)
t(W.hZ,W.cU)
t(W.eM,W.eL)
t(W.i6,W.eM)
t(W.b3,W.a9)
t(W.eS,W.eR)
t(W.iL,W.eS)
t(W.e8,W.dd)
t(W.eU,W.eT)
t(W.iZ,W.eU)
t(W.eW,W.eV)
t(W.er,W.eW)
t(W.eY,W.eX)
t(W.jb,W.eY)
t(W.f_,W.eZ)
t(W.jc,W.f_)
t(W.iM,W.iJ)
t(W.iN,P.hQ)
t(W.jV,W.iN)
t(W.iO,P.cw)
t(W.je,W.ez)
t(P.ak,P.j2)
t(P.ek,P.ej)
t(P.fP,P.ek)
t(P.ev,P.eu)
t(P.hk,P.ev)
t(P.cs,P.p)
t(P.eH,P.eG)
t(P.hU,P.eH)
t(P.eO,P.eN)
t(P.i8,P.eO)
t(P.f6,P.e6)
t(P.hl,P.bG)
t(P.eD,P.eC)
t(P.hM,P.eD)
s(E.f9,[Z.d6,A.ct,T.cy])
s(D.x,[D.bN,D.bO,D.M,X.hq])
s(X.hq,[X.dt,X.b9,X.cm,X.dV])
s(O.a2,[D.dp,U.ch])
s(D.fc,[U.fd,U.aa])
t(U.da,U.aa)
t(A.fZ,A.ct)
s(A.dW,[A.K,A.ie,A.ig,A.ii,A.ic,A.a0,A.id,A.J,A.ih,A.ik,A.cC,A.at,A.af,A.ag])
t(O.dv,O.bW)
s(O.ck,[O.h_,O.h0,O.aR])
s(O.aR,[O.h2,O.h3])
t(T.dP,T.cy)
s(V.du,[V.aj,V.cA])
t(X.fE,X.dN)
s(V.bn,[V.fk,V.fF,V.fG,V.ho])
u(H.dY,H.dZ)
u(H.cN,P.w)
u(H.cO,H.bL)
u(H.cP,P.w)
u(H.cQ,H.bL)
u(P.em,P.w)
u(W.e7,W.fg)
u(W.e9,P.w)
u(W.ea,W.A)
u(W.eb,P.w)
u(W.ec,W.A)
u(W.ee,P.w)
u(W.ef,W.A)
u(W.eh,P.w)
u(W.ei,W.A)
u(W.en,P.a8)
u(W.eo,P.a8)
u(W.ep,P.w)
u(W.eq,W.A)
u(W.es,P.w)
u(W.et,W.A)
u(W.ew,P.w)
u(W.ex,W.A)
u(W.ey,P.a8)
u(W.cR,P.w)
u(W.cS,W.A)
u(W.eA,P.w)
u(W.eB,W.A)
u(W.eF,P.a8)
u(W.eI,P.w)
u(W.eJ,W.A)
u(W.cT,P.w)
u(W.cU,W.A)
u(W.eL,P.w)
u(W.eM,W.A)
u(W.eR,P.w)
u(W.eS,W.A)
u(W.eT,P.w)
u(W.eU,W.A)
u(W.eV,P.w)
u(W.eW,W.A)
u(W.eX,P.w)
u(W.eY,W.A)
u(W.eZ,P.w)
u(W.f_,W.A)
u(P.ej,P.w)
u(P.ek,W.A)
u(P.eu,P.w)
u(P.ev,W.A)
u(P.eG,P.w)
u(P.eH,W.A)
u(P.eN,P.w)
u(P.eO,W.A)
u(P.e6,P.a8)
u(P.eC,P.w)
u(P.eD,W.A)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bl.prototype
C.l=W.bH.prototype
C.J=W.aw.prototype
C.M=J.a.prototype
C.a=J.aO.prototype
C.N=J.di.prototype
C.h=J.dj.prototype
C.o=J.dk.prototype
C.j=J.dl.prototype
C.i=J.bP.prototype
C.O=J.bv.prototype
C.S=W.cp.prototype
C.x=J.hn.prototype
C.b=P.bU.prototype
C.T=W.bV.prototype
C.y=W.dM.prototype
C.r=J.cI.prototype
C.z=W.b3.prototype
C.A=W.cK.prototype
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

C.H=new P.hm()
C.m=new P.iq()
C.I=new P.ir()
C.k=new P.j3()
C.c=new A.bJ(0,"ColorSourceType.None")
C.f=new A.bJ(1,"ColorSourceType.Solid")
C.e=new A.bJ(2,"ColorSourceType.Texture2D")
C.d=new A.bJ(3,"ColorSourceType.TextureCube")
C.n=new P.bq(0)
C.K=new P.bq(5e6)
C.L=new P.fJ("element",!0,!1,!1,!1)
C.P=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.Q=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.R=H.c(u([]),[P.f])
C.w=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.D])
C.p=H.c(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.q=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])})()
var v={mangledGlobalNames:{D:"int",B:"double",a7:"num",f:"String",N:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.L},{func:1,ret:-1},{func:1,ret:-1,args:[W.a9]},{func:1,ret:-1,args:[P.D,[P.e,E.ai]]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.L,args:[D.x]},{func:1,ret:P.L,args:[F.a5]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:P.L,args:[,]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.f,args:[P.D]},{func:1,ret:P.N,args:[W.E]},{func:1,args:[,]},{func:1,ret:P.N,args:[W.as]},{func:1,ret:P.N,args:[P.f]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[W.aQ]},{func:1,ret:P.N,args:[W.S,P.f,P.f,W.bz]},{func:1,ret:-1,args:[P.D,[P.e,D.a3]]},{func:1,ret:P.B},{func:1,ret:-1,args:[P.D,[P.e,U.aa]]},{func:1,ret:-1,args:[P.D,[P.e,V.ae]]},{func:1,ret:P.L,args:[W.o]},{func:1,args:[W.o]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:W.S,args:[W.E]},{func:1,ret:P.N,args:[[P.e,D.a3]]},{func:1,ret:[P.az,,],args:[,]},{func:1,ret:P.L,args:[,],opt:[P.al]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.L,args:[P.a7]},{func:1,ret:P.L,args:[F.aH,P.B,P.B]},{func:1,args:[P.f]},{func:1,args:[,P.f]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:P.L,args:[P.b_]},{func:1,ret:P.N,args:[V.bn]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[W.b3]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aI=0
$.c8=null
$.ki=null
$.jX=!1
$.lb=null
$.l6=null
$.lg=null
$.jr=null
$.jx=null
$.k8=null
$.bY=null
$.cX=null
$.cY=null
$.jY=!1
$.a_=C.k
$.am=[]
$.b6=null
$.jJ=null
$.ko=null
$.kn=null
$.eg=P.kq(P.f,P.bs)
$.kv=null
$.kz=null
$.cq=null
$.kG=null
$.kQ=null
$.kT=null
$.kS=null
$.is=null
$.kR=null
$.ky=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n9","lk",function(){return H.la("_$dart_dartClosure")})
u($,"na","ke",function(){return H.la("_$dart_js")})
u($,"nf","ll",function(){return H.b1(H.ia({
toString:function(){return"$receiver$"}}))})
u($,"ng","lm",function(){return H.b1(H.ia({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nh","ln",function(){return H.b1(H.ia(null))})
u($,"ni","lo",function(){return H.b1(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nl","lr",function(){return H.b1(H.ia(void 0))})
u($,"nm","ls",function(){return H.b1(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nk","lq",function(){return H.b1(H.kO(null))})
u($,"nj","lp",function(){return H.b1(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"no","lu",function(){return H.b1(H.kO(void 0))})
u($,"nn","lt",function(){return H.b1(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nF","kf",function(){return P.mf()})
u($,"nH","lz",function(){return P.m7("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nG","ly",function(){return P.kr(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"ny","lx",function(){return Z.ay(0)})
u($,"ns","lv",function(){return Z.ay(511)})
u($,"nA","bi",function(){return Z.ay(1)})
u($,"nz","bh",function(){return Z.ay(2)})
u($,"nu","bg",function(){return Z.ay(4)})
u($,"nB","bj",function(){return Z.ay(8)})
u($,"nC","bk",function(){return Z.ay(16)})
u($,"nv","d0",function(){return Z.ay(32)})
u($,"nw","d1",function(){return Z.ay(64)})
u($,"nx","lw",function(){return Z.ay(96)})
u($,"nD","c5",function(){return Z.ay(128)})
u($,"nt","bf",function(){return Z.ay(256)})
u($,"n8","lj",function(){return new V.fu(1e-9)})
u($,"n7","P",function(){return $.lj()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.co,ArrayBufferView:H.co,Float32Array:H.cn,Float64Array:H.cn,Int16Array:H.hb,Int32Array:H.hc,Int8Array:H.hd,Uint16Array:H.he,Uint32Array:H.hf,Uint8ClampedArray:H.dA,CanvasPixelArray:H.dA,Uint8Array:H.hg,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.f1,HTMLAnchorElement:W.d2,HTMLAreaElement:W.f2,HTMLBaseElement:W.c6,Blob:W.d4,HTMLBodyElement:W.bl,HTMLCanvasElement:W.bH,CanvasRenderingContext2D:W.c9,CDATASection:W.bm,CharacterData:W.bm,Comment:W.bm,ProcessingInstruction:W.bm,Text:W.bm,CSSNumericValue:W.cd,CSSUnitValue:W.cd,CSSPerspective:W.ff,CSSCharsetRule:W.T,CSSConditionRule:W.T,CSSFontFaceRule:W.T,CSSGroupingRule:W.T,CSSImportRule:W.T,CSSKeyframeRule:W.T,MozCSSKeyframeRule:W.T,WebKitCSSKeyframeRule:W.T,CSSKeyframesRule:W.T,MozCSSKeyframesRule:W.T,WebKitCSSKeyframesRule:W.T,CSSMediaRule:W.T,CSSNamespaceRule:W.T,CSSPageRule:W.T,CSSRule:W.T,CSSStyleRule:W.T,CSSSupportsRule:W.T,CSSViewportRule:W.T,CSSStyleDeclaration:W.ce,MSStyleCSSProperties:W.ce,CSS2Properties:W.ce,CSSImageValue:W.aJ,CSSKeywordValue:W.aJ,CSSPositionValue:W.aJ,CSSResourceValue:W.aJ,CSSURLImageValue:W.aJ,CSSStyleValue:W.aJ,CSSMatrixComponent:W.aK,CSSRotation:W.aK,CSSScale:W.aK,CSSSkew:W.aK,CSSTranslation:W.aK,CSSTransformComponent:W.aK,CSSTransformValue:W.fh,CSSUnparsedValue:W.fi,DataTransferItemList:W.fl,HTMLDivElement:W.aw,DOMException:W.fm,ClientRectList:W.dc,DOMRectList:W.dc,DOMRectReadOnly:W.dd,DOMStringList:W.fn,DOMTokenList:W.fo,Element:W.S,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aL,FileList:W.fx,FileWriter:W.fy,HTMLFormElement:W.fC,Gamepad:W.aM,History:W.fH,HTMLCollection:W.bM,HTMLFormControlsCollection:W.bM,HTMLOptionsCollection:W.bM,ImageData:W.bt,HTMLImageElement:W.ci,KeyboardEvent:W.aQ,Location:W.ds,MediaList:W.h4,MIDIInputMap:W.h5,MIDIOutputMap:W.h7,MimeType:W.aT,MimeTypeArray:W.h9,PointerEvent:W.a9,MouseEvent:W.a9,DragEvent:W.a9,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cp,RadioNodeList:W.cp,Plugin:W.aU,PluginArray:W.hp,RTCStatsReport:W.hy,HTMLSelectElement:W.hB,SourceBuffer:W.aW,SourceBufferList:W.hK,SpeechGrammar:W.aX,SpeechGrammarList:W.hL,SpeechRecognitionResult:W.aY,Storage:W.hO,CSSStyleSheet:W.aD,StyleSheet:W.aD,HTMLTableCellElement:W.bV,HTMLTableDataCellElement:W.bV,HTMLTableHeaderCellElement:W.bV,HTMLTableElement:W.dM,HTMLTableRowElement:W.hV,HTMLTableSectionElement:W.hW,HTMLTemplateElement:W.cx,TextTrack:W.aZ,TextTrackCue:W.aE,VTTCue:W.aE,TextTrackCueList:W.hY,TextTrackList:W.hZ,TimeRanges:W.i2,Touch:W.b0,TouchEvent:W.aF,TouchList:W.i6,TrackDefaultList:W.i7,CompositionEvent:W.by,FocusEvent:W.by,TextEvent:W.by,UIEvent:W.by,URL:W.ip,VideoTrackList:W.iB,WheelEvent:W.b3,Window:W.cK,DOMWindow:W.cK,Attr:W.cL,CSSRuleList:W.iL,ClientRect:W.e8,DOMRect:W.e8,GamepadList:W.iZ,NamedNodeMap:W.er,MozNamedAttrMap:W.er,SpeechRecognitionResultList:W.jb,StyleSheetList:W.jc,SVGLength:P.b7,SVGLengthList:P.fP,SVGNumber:P.bb,SVGNumberList:P.hk,SVGPointList:P.hr,SVGScriptElement:P.cs,SVGStringList:P.hU,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bd,SVGTransformList:P.i8,AudioBuffer:P.f5,AudioParamMap:P.f6,AudioTrackList:P.f8,AudioContext:P.bG,webkitAudioContext:P.bG,BaseAudioContext:P.bG,OfflineAudioContext:P.hl,WebGLBuffer:P.d5,WebGLProgram:P.dG,WebGL2RenderingContext:P.bU,WebGLShader:P.dI,WebGLTexture:P.dO,WebGLUniformLocation:P.dX,SQLResultSetRowList:P.hM})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dy.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.dz.$nativeSuperclassTag="ArrayBufferView"
W.cR.$nativeSuperclassTag="EventTarget"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.ld,[])
else B.ld([])})})()
//# sourceMappingURL=test.dart.js.map
