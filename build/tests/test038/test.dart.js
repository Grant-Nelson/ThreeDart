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
a[c]=function(){a[c]=function(){H.o2(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kq(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={k5:function k5(){},
jI:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
mq:function(){return new P.hJ("No element")},
a4:function a4(a){this.a=a},
fv:function fv(){},
ds:function ds(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
h_:function h_(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iF:function iF(a,b,c){this.a=a
this.b=b
this.$ti=c},
iG:function iG(a,b,c){this.a=a
this.b=b
this.$ti=c},
bN:function bN(){},
cK:function cK(){},
dW:function dW(){},
mi:function(){throw H.c(P.E("Cannot modify unmodifiable Map"))},
c5:function(a){var u,t=H.L(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
nM:function(a){return v.types[H.ad(a)]},
nS:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iK},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.c(H.b8(a))
return u},
cu:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mL:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.f(p,3)
u=H.L(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ac(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.F(s,q)|32)>t)return}return parseInt(a,b)},
bS:function(a){return H.mC(a)+H.kn(H.bC(a),0,null)},
mC:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.N||!!n.$icJ){r=C.v(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c5(t.length>1&&C.b.F(t,0)===36?C.b.ar(t,1):t)},
mD:function(){if(!!self.location)return self.location.href
return},
kW:function(a){var u,t,s,r,q
H.jN(a)
u=J.aD(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mM:function(a){var u,t,s,r=H.d([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.b8(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.aJ(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.b8(s))}return H.kW(r)},
kX:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.b8(s))
if(s<0)throw H.c(H.b8(s))
if(s>65535)return H.mM(a)}return H.kW(a)},
mN:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dD:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aJ(u,10))>>>0,56320|u&1023)}}throw H.c(P.ac(a,0,1114111,null,null))},
bR:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mK:function(a){var u=H.bR(a).getFullYear()+0
return u},
mI:function(a){var u=H.bR(a).getMonth()+1
return u},
mE:function(a){var u=H.bR(a).getDate()+0
return u},
mF:function(a){var u=H.bR(a).getHours()+0
return u},
mH:function(a){var u=H.bR(a).getMinutes()+0
return u},
mJ:function(a){var u=H.bR(a).getSeconds()+0
return u},
mG:function(a){var u=H.bR(a).getMilliseconds()+0
return u},
u:function(a){throw H.c(H.b8(a))},
f:function(a,b){if(a==null)J.aD(a)
throw H.c(H.c0(a,b))},
c0:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aR(!0,b,s,null)
u=H.ad(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.V(b,a,s,null,u)
return P.hq(b,s)},
nH:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bT(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bT(a,c,!0,b,"end",u)
return new P.aR(!0,b,"end",null)},
b8:function(a){return new P.aR(!0,a,null,null)},
nC:function(a){if(typeof a!=="number")throw H.c(H.b8(a))
return a},
c:function(a){var u
if(a==null)a=new P.dA()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lO})
u.name=""}else u.toString=H.lO
return u},
lO:function(){return J.as(this.dartException)},
r:function(a){throw H.c(a)},
F:function(a){throw H.c(P.bK(a))},
b3:function(a){var u,t,s,r,q,p
a=H.lL(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
l6:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kR:function(a,b){return new H.hi(a,b==null?null:b.method)},
k6:function(a,b){var u=b==null,t=u?null:b.method
return new H.fM(a,t,u?null:b.receiver)},
aC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jT(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.aJ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.k6(H.m(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kR(H.m(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lR()
q=$.lS()
p=$.lT()
o=$.lU()
n=$.lX()
m=$.lY()
l=$.lW()
$.lV()
k=$.m_()
j=$.lZ()
i=r.aa(u)
if(i!=null)return f.$1(H.k6(H.L(u),i))
else{i=q.aa(u)
if(i!=null){i.method="call"
return f.$1(H.k6(H.L(u),i))}else{i=p.aa(u)
if(i==null){i=o.aa(u)
if(i==null){i=n.aa(u)
if(i==null){i=m.aa(u)
if(i==null){i=l.aa(u)
if(i==null){i=o.aa(u)
if(i==null){i=k.aa(u)
if(i==null){i=j.aa(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kR(H.L(u),i))}}return f.$1(new H.ii(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dK()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aR(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dK()
return a},
c3:function(a){var u
if(a==null)return new H.ey(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ey(a)},
nL:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
nR:function(a,b,c,d,e,f){H.e(a,"$ik1")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
c_:function(a,b){var u
H.ad(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nR)
a.$identity=u
return u},
mh:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hK().constructor.prototype):Object.create(new H.c7(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aS
if(typeof t!=="number")return t.C()
$.aS=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kF(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.nM,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kE:H.jY
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kF(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
me:function(a,b,c,d){var u=H.jY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kF:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mg(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.me(t,!r,u,b)
if(t===0){r=$.aS
if(typeof r!=="number")return r.C()
$.aS=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c8
return new Function(r+H.m(q==null?$.c8=H.fa("self"):q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aS
if(typeof r!=="number")return r.C()
$.aS=r+1
o+=r
r="return function("+o+"){return this."
q=$.c8
return new Function(r+H.m(q==null?$.c8=H.fa("self"):q)+"."+H.m(u)+"("+o+");}")()},
mf:function(a,b,c,d){var u=H.jY,t=H.kE
switch(b?-1:a){case 0:throw H.c(H.mR("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mg:function(a,b){var u,t,s,r,q,p,o,n=$.c8
if(n==null)n=$.c8=H.fa("self")
u=$.kD
if(u==null)u=$.kD=H.fa("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mf(s,!q,t,b)
if(s===1){n="return function(){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+");"
u=$.aS
if(typeof u!=="number")return u.C()
$.aS=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+", "+o+");"
u=$.aS
if(typeof u!=="number")return u.C()
$.aS=u+1
return new Function(n+u+"}")()},
kq:function(a,b,c,d,e,f,g){return H.mh(a,b,H.ad(c),d,!!e,!!f,g)},
jY:function(a){return a.a},
kE:function(a){return a.c},
fa:function(a){var u,t,s,r=new H.c7("self","target","receiver","name"),q=J.k3(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
D:function(a){if(a==null)H.ny("boolean expression must not be null")
return a},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aP(a,"String"))},
nI:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aP(a,"double"))},
nW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aP(a,"num"))},
lB:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aP(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aP(a,"int"))},
lJ:function(a,b){throw H.c(H.aP(a,H.c5(H.L(b).substring(2))))},
nY:function(a,b){throw H.c(H.md(a,H.c5(H.L(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.lJ(a,b)},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.nY(a,b)},
jN:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.c(H.aP(a,"List<dynamic>"))},
lG:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.lJ(a,b)},
lC:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
eV:function(a,b){var u
if(typeof a=="function")return!0
u=H.lC(J.U(a))
if(u==null)return!1
return H.lq(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.kk)return a
$.kk=!0
try{if(H.eV(a,b))return a
u=H.jR(b)
t=H.aP(a,u)
throw H.c(t)}finally{$.kk=!1}},
kr:function(a,b){if(a!=null&&!H.kp(a,b))H.r(H.aP(a,H.jR(b)))
return a},
aP:function(a,b){return new H.i6("TypeError: "+P.dh(a)+": type '"+H.lw(a)+"' is not a subtype of type '"+b+"'")},
md:function(a,b){return new H.fb("CastError: "+P.dh(a)+": type '"+H.lw(a)+"' is not a subtype of type '"+b+"'")},
lw:function(a){var u,t=J.U(a)
if(!!t.$icb){u=H.lC(t)
if(u!=null)return H.jR(u)
return"Closure"}return H.bS(a)},
ny:function(a){throw H.c(new H.iH(a))},
o2:function(a){throw H.c(new P.fo(H.L(a)))},
mR:function(a){return new H.hx(a)},
lD:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bC:function(a){if(a==null)return
return a.$ti},
oI:function(a,b,c){return H.c4(a["$a"+H.m(c)],H.bC(b))},
c2:function(a,b,c,d){var u
H.L(c)
H.ad(d)
u=H.c4(a["$a"+H.m(c)],H.bC(b))
return u==null?null:u[d]},
av:function(a,b,c){var u
H.L(b)
H.ad(c)
u=H.c4(a["$a"+H.m(b)],H.bC(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.ad(b)
u=H.bC(a)
return u==null?null:u[b]},
jR:function(a){return H.bB(a,null)},
bB:function(a,b){var u,t
H.l(b,"$ib",[P.i],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c5(a[0].name)+H.kn(a,1,b)
if(typeof a=="function")return H.c5(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.m(b[t])}if('func' in a)return H.nr(a,b)
if('futureOr' in a)return"FutureOr<"+H.bB("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nr:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.i]
H.l(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.f(a0,n)
p=C.b.C(p,a0[n])
m=u[q]
if(m!=null&&m!==P.S)p+=" extends "+H.bB(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bB(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bB(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bB(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.nK(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.L(b[h])
j=j+i+H.bB(e[d],a0)+(" "+H.m(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kn:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.i],"$ab")
if(a==null)return""
u=new P.ak("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bB(p,c)}return"<"+u.i(0)+">"},
c4:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ko:function(a,b,c,d){var u,t
H.L(b)
H.jN(c)
H.L(d)
if(a==null)return!1
u=H.bC(a)
t=J.U(a)
if(t[b]==null)return!1
return H.lz(H.c4(t[d],u),null,c,null)},
l:function(a,b,c,d){H.L(b)
H.jN(c)
H.L(d)
if(a==null)return a
if(H.ko(a,b,c,d))return a
throw H.c(H.aP(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c5(b.substring(2))+H.kn(c,0,null),v.mangledGlobalNames)))},
lz:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aB(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aB(a[t],b,c[t],d))return!1
return!0},
oG:function(a,b,c){return a.apply(b,H.c4(J.U(b)["$a"+H.m(c)],H.bC(b)))},
lF:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="S"||a.name==="J"||a===-1||a===-2||H.lF(u)}return!1},
kp:function(a,b){var u,t
if(a==null)return b==null||b.name==="S"||b.name==="J"||b===-1||b===-2||H.lF(b)
if(b==null||b===-1||b.name==="S"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kp(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eV(a,b)}u=J.U(a).constructor
t=H.bC(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aB(u,null,b,null)},
z:function(a,b){if(a!=null&&!H.kp(a,b))throw H.c(H.aP(a,H.jR(b)))
return a},
aB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="S"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="S"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aB(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
if('func' in c)return H.lq(a,b,c,d)
if('func' in a)return c.name==="k1"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aB("type" in a?a.type:l,b,s,d)
else if(H.aB(a,b,s,d))return!0
else{if(!('$i'+"cg" in t.prototype))return!1
r=t.prototype["$a"+"cg"]
q=H.c4(r,u?a.slice(1):l)
return H.aB(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lz(H.c4(m,u),b,p,d)},
lq:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.nV(h,b,g,d)},
nV:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aB(c[s],d,a[s],b))return!1}return!0},
oH:function(a,b,c){Object.defineProperty(a,H.L(b),{value:c,enumerable:false,writable:true,configurable:true})},
nT:function(a){var u,t,s,r,q=H.L($.lE.$1(a)),p=$.jD[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jM[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.L($.ly.$2(a,q))
if(q!=null){p=$.jD[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jM[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jQ(u)
$.jD[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jM[q]=u
return u}if(s==="-"){r=H.jQ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lI(a,u)
if(s==="*")throw H.c(P.ih(q))
if(v.leafTags[q]===true){r=H.jQ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lI(a,u)},
lI:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ku(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jQ:function(a){return J.ku(a,!1,null,!!a.$iK)},
nU:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jQ(u)
else return J.ku(u,c,null,null)},
nP:function(){if(!0===$.kt)return
$.kt=!0
H.nQ()},
nQ:function(){var u,t,s,r,q,p,o,n
$.jD=Object.create(null)
$.jM=Object.create(null)
H.nO()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lK.$1(q)
if(p!=null){o=H.nU(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nO:function(){var u,t,s,r,q,p,o=C.E()
o=H.bZ(C.F,H.bZ(C.G,H.bZ(C.w,H.bZ(C.w,H.bZ(C.H,H.bZ(C.I,H.bZ(C.J(C.v),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lE=new H.jJ(r)
$.ly=new H.jK(q)
$.lK=new H.jL(p)},
bZ:function(a,b){return a(b)||b},
ms:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a2("Illegal RegExp pattern ("+String(r)+")",a,null))},
o0:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nJ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lL:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lM:function(a,b,c){var u=H.o1(a,b,c)
return u},
o1:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lL(b),'g'),H.nJ(c))},
fi:function fi(){},
fj:function fj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i4:function i4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hi:function hi(a,b){this.a=a
this.b=b},
fM:function fM(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a){this.a=a},
jT:function jT(a){this.a=a},
ey:function ey(a){this.a=a
this.b=null},
cb:function cb(){},
hS:function hS(){},
hK:function hK(){},
c7:function c7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i6:function i6(a){this.a=a},
fb:function fb(a){this.a=a},
hx:function hx(a){this.a=a},
iH:function iH(a){this.a=a},
aF:function aF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fP:function fP(a,b){this.a=a
this.b=b
this.c=null},
fQ:function fQ(a,b){this.a=a
this.$ti=b},
fR:function fR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jJ:function jJ(a){this.a=a},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
fL:function fL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bX:function(a){return a},
mB:function(a){return new Int8Array(a)},
b7:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c0(b,a))},
np:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nH(a,b,c))
return b},
co:function co(){},
bw:function bw(){},
dx:function dx(){},
cp:function cp(){},
dy:function dy(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
dz:function dz(){},
cq:function cq(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
nK:function(a){return J.kI(a?Object.keys(a):[],null)},
nX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ku:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jF:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kt==null){H.nP()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.ih("Return interceptor for "+H.m(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kx()]
if(r!=null)return r
r=H.nT(a)
if(r!=null)return r
if(typeof a=="function")return C.P
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.kx(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
mr:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.jX(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ac(a,0,4294967295,"length",null))
return J.kI(new Array(a),b)},
kI:function(a,b){return J.k3(H.d(a,[b]))},
k3:function(a){H.jN(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dl.prototype
return J.dk.prototype}if(typeof a=="string")return J.bP.prototype
if(a==null)return J.dm.prototype
if(typeof a=="boolean")return J.fK.prototype
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.S)return a
return J.jF(a)},
d0:function(a){if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.S)return a
return J.jF(a)},
jE:function(a){if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.S)return a
return J.jF(a)},
ks:function(a){if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.cJ.prototype
return a},
eW:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.S)return a
return J.jF(a)},
Y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).q(a,b)},
kz:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nS(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.d0(a).j(a,b)},
jV:function(a,b,c){return J.jE(a).l(a,b,c)},
m7:function(a,b){return J.ks(a).F(a,b)},
m8:function(a,b,c){return J.eW(a).hs(a,b,c)},
m9:function(a,b,c,d){return J.eW(a).io(a,b,c,d)},
ma:function(a,b){return J.ks(a).W(a,b)},
jW:function(a,b){return J.jE(a).H(a,b)},
mb:function(a,b,c,d){return J.eW(a).iE(a,b,c,d)},
kA:function(a,b){return J.jE(a).J(a,b)},
kB:function(a){return J.eW(a).gca(a)},
d3:function(a){return J.U(a).gG(a)},
bD:function(a){return J.jE(a).gX(a)},
aD:function(a){return J.d0(a).gk(a)},
mc:function(a,b){return J.eW(a).ja(a,b)},
as:function(a){return J.U(a).i(a)},
a:function a(){},
fK:function fK(){},
dm:function dm(){},
dp:function dp(){},
hm:function hm(){},
cJ:function cJ(){},
bu:function bu(){},
aW:function aW(a){this.$ti=a},
k4:function k4(a){this.$ti=a},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dn:function dn(){},
dl:function dl(){},
dk:function dk(){},
bP:function bP(){}},P={
n4:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nz()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c_(new P.iJ(s),1)).observe(u,{childList:true})
return new P.iI(s,u,t)}else if(self.setImmediate!=null)return P.nA()
return P.nB()},
n5:function(a){self.scheduleImmediate(H.c_(new P.iK(H.n(a,{func:1,ret:-1})),0))},
n6:function(a){self.setImmediate(H.c_(new P.iL(H.n(a,{func:1,ret:-1})),0))},
n7:function(a){P.ka(C.r,H.n(a,{func:1,ret:-1}))},
ka:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a1(a.a,1000)
return P.na(u<0?0:u,b)},
l5:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b1]})
u=C.f.a1(a.a,1000)
return P.nb(u<0?0:u,b)},
na:function(a,b){var u=new P.eE()
u.eT(a,b)
return u},
nb:function(a,b){var u=new P.eE()
u.eU(a,b)
return u},
n8:function(a,b){var u,t,s
b.a=1
try{a.ei(new P.iU(b),new P.iV(b),null)}catch(s){u=H.aC(s)
t=H.c3(s)
P.nZ(new P.iW(b,u,t))}},
lg:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaA")
if(u>=4){t=b.bX()
b.a=a.a
b.c=a.c
P.cM(b,t)}else{t=H.e(b.c,"$ib6")
b.a=2
b.c=a
a.dc(t)}},
cM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$ial")
g=g.b
r=s.a
q=s.b
g.toString
P.jz(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
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
if(m){H.e(o,"$ial")
g=g.b
r=o.a
q=o.b
g.toString
P.jz(i,i,g,r,q)
return}l=$.W
if(l!=n)$.W=n
else l=i
g=b.c
if(g===8)new P.j_(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.iZ(u,b,o).$0()}else if((g&2)!==0)new P.iY(h,u,b).$0()
if(l!=null)$.W=l
g=u.b
if(!!J.U(g).$icg){if(g.a>=4){k=H.e(q.c,"$ib6")
q.c=null
b=q.ba(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.lg(g,q)
return}}j=b.b
k=H.e(j.c,"$ib6")
j.c=null
b=j.ba(k)
g=u.a
r=u.b
if(!g){H.z(r,H.v(j,0))
j.a=4
j.c=r}else{H.e(r,"$ial")
j.a=8
j.c=r}h.a=j
g=j}},
nu:function(a,b){if(H.eV(a,{func:1,args:[P.S,P.aq]}))return H.n(a,{func:1,ret:null,args:[P.S,P.aq]})
if(H.eV(a,{func:1,args:[P.S]}))return H.n(a,{func:1,ret:null,args:[P.S]})
throw H.c(P.jX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nt:function(){var u,t
for(;u=$.bY,u!=null;){$.d_=null
t=u.b
$.bY=t
if(t==null)$.cZ=null
u.a.$0()}},
nx:function(){$.kl=!0
try{P.nt()}finally{$.d_=null
$.kl=!1
if($.bY!=null)$.ky().$1(P.lA())}},
lv:function(a){var u=new P.e2(H.n(a,{func:1,ret:-1}))
if($.bY==null){$.bY=$.cZ=u
if(!$.kl)$.ky().$1(P.lA())}else $.cZ=$.cZ.b=u},
nw:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.bY
if(u==null){P.lv(a)
$.d_=$.cZ
return}t=new P.e2(a)
s=$.d_
if(s==null){t.b=u
$.bY=$.d_=t}else{t.b=s.b
$.d_=s.b=t
if(t.b==null)$.cZ=t}},
nZ:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.W
if(C.k===u){P.jB(t,t,C.k,a)
return}u.toString
P.jB(t,t,u,H.n(u.c6(a),s))},
l4:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.W
if(u===C.k){u.toString
return P.ka(a,b)}return P.ka(a,H.n(u.c6(b),t))},
mV:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b1]}
H.n(b,s)
u=$.W
if(u===C.k){u.toString
return P.l5(a,b)}t=u.dq(b,P.b1)
$.W.toString
return P.l5(a,H.n(t,s))},
jz:function(a,b,c,d,e){var u={}
u.a=d
P.nw(new P.jA(u,e))},
lr:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.W
if(t===c)return d.$0()
$.W=c
u=t
try{t=d.$0()
return t}finally{$.W=u}},
ls:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.z(e,g)
t=$.W
if(t===c)return d.$1(e)
$.W=c
u=t
try{t=d.$1(e)
return t}finally{$.W=u}},
nv:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
t=$.W
if(t===c)return d.$2(e,f)
$.W=c
u=t
try{t=d.$2(e,f)
return t}finally{$.W=u}},
jB:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.c6(d):c.ir(d,-1)
P.lv(d)},
iJ:function iJ(a){this.a=a},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
eE:function eE(){this.c=0},
jj:function jj(a,b){this.a=a
this.b=b},
ji:function ji(a,b,c,d){var _=this
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
aA:function aA(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iT:function iT(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j0:function j0(a){this.a=a},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(a){this.a=a
this.b=null},
hN:function hN(){},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
cx:function cx(){},
hO:function hO(){},
b1:function b1(){},
al:function al(a,b){this.a=a
this.b=b},
js:function js(){},
jA:function jA(a,b){this.a=a
this.b=b},
j7:function j7(){},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a,b){this.a=a
this.b=b},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
mt:function(a,b){return new H.aF([a,b])},
kJ:function(a,b){return new H.aF([a,b])},
mv:function(a){return H.nL(a,new H.aF([null,null]))},
mw:function(a){return new P.j4([a])},
kh:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
li:function(a,b,c){var u=new P.j5(a,b,[c])
u.c=a.e
return u},
mp:function(a,b,c){var u,t
if(P.km(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.i])
C.a.h($.ar,a)
try{P.ns(a,u)}finally{if(0>=$.ar.length)return H.f($.ar,-1)
$.ar.pop()}t=P.l2(b,H.lG(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
k2:function(a,b,c){var u,t
if(P.km(a))return b+"..."+c
u=new P.ak(b)
C.a.h($.ar,a)
try{t=u
t.a=P.l2(t.a,a,", ")}finally{if(0>=$.ar.length)return H.f($.ar,-1)
$.ar.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
km:function(a){var u,t
for(u=$.ar.length,t=0;t<u;++t)if(a===$.ar[t])return!0
return!1},
ns:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.i],"$ab")
u=a.gX(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.m(u.gK(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gK(u);++s
if(!u.w()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gK(u);++s
for(;u.w();o=n,n=m){m=u.gK(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
mu:function(a,b,c){var u=P.mt(b,c)
a.J(0,new P.fS(u,b,c))
return u},
k7:function(a){var u,t={}
if(P.km(a))return"{...}"
u=new P.ak("")
try{C.a.h($.ar,a)
u.a+="{"
t.a=!0
J.kA(a,new P.fX(t,u))
u.a+="}"}finally{if(0>=$.ar.length)return H.f($.ar,-1)
$.ar.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j4:function j4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cN:function cN(a){this.a=a
this.c=this.b=null},
j5:function j5(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
fT:function fT(){},
x:function x(){},
fW:function fW(){},
fX:function fX(a,b){this.a=a
this.b=b},
af:function af(){},
jk:function jk(){},
fY:function fY(){},
dX:function dX(a,b){this.a=a
this.$ti=b},
jb:function jb(){},
eh:function eh(){},
eK:function eK(){},
mZ:function(a,b,c,d){H.l(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.n_(!1,b,c,d)
return},
n_:function(a,b,c,d){var u,t,s=$.m0()
if(s==null)return
u=0===c
if(u&&!0)return P.ke(s,b)
t=b.length
d=P.bz(c,d,t)
if(u&&d===t)return P.ke(s,b)
return P.ke(s,b.subarray(c,d))},
ke:function(a,b){if(P.n1(b))return
return P.n2(a,b)},
n2:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aC(t)}return},
n1:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
n0:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aC(t)}return},
lu:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.p],"$ab")
for(u=J.d0(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bz()
if((s&127)!==s)return t-b}return c-b},
kC:function(a,b,c,d,e,f){if(C.f.b4(f,4)!==0)throw H.c(P.a2("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a2("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a2("Invalid base64 padding, more than two '=' characters",a,b))},
f7:function f7(){},
f8:function f8(){},
bH:function bH(){},
bL:function bL(){},
fw:function fw(){},
ir:function ir(){},
it:function it(){},
jr:function jr(a){this.b=0
this.c=a},
is:function is(a){this.a=a},
jq:function jq(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eX:function(a,b,c){var u
H.n(b,{func:1,ret:P.p,args:[P.i]})
u=H.mL(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a2(a,null,null))},
mm:function(a){if(a instanceof H.cb)return a.i(0)
return"Instance of '"+H.bS(a)+"'"},
mx:function(a,b,c){var u,t
H.z(b,c)
u=J.mr(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.l(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
kK:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bD(a);u.w();)C.a.h(s,H.z(u.gK(u),c))
if(b)return s
return H.l(J.k3(s),"$ib",t,"$ab")},
cy:function(a,b,c){var u,t=P.p
H.l(a,"$ih",[t],"$ah")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaW",[t],"$aaW")
u=a.length
c=P.bz(b,c,u)
return H.kX(b>0||c<u?C.a.es(a,b,c):a)}if(!!J.U(a).$icq)return H.mN(a,b,P.bz(b,c,a.length))
return P.mT(a,b,c)},
mT:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ih",[P.p],"$ah")
if(b<0)throw H.c(P.ac(b,0,J.aD(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ac(c,b,J.aD(a),q,q))
t=J.bD(a)
for(s=0;s<b;++s)if(!t.w())throw H.c(P.ac(b,0,s,q,q))
r=[]
if(u)for(;t.w();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.w())throw H.c(P.ac(c,b,s,q,q))
r.push(t.gK(t))}return H.kX(r)},
mP:function(a){return new H.fL(a,H.ms(a,!1,!0,!1))},
l2:function(a,b,c){var u=J.bD(b)
if(!u.w())return a
if(c.length===0){do a+=H.m(u.gK(u))
while(u.w())}else{a+=H.m(u.gK(u))
for(;u.w();)a=a+c+H.m(u.gK(u))}return a},
kd:function(){var u=H.mD()
if(u!=null)return P.mY(u)
throw H.c(P.E("'Uri.base' is not supported"))},
jp:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.m5().b
if(typeof b!=="string")H.r(H.b8(b))
u=u.test(b)}else u=!1
if(u)return b
H.z(b,H.av(c,"bH",0))
t=c.giD().cb(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dD(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mj:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mk:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dc:function(a){if(a>=10)return""+a
return"0"+a},
kG:function(a,b){return new P.bp(1e6*b+1000*a)},
dh:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mm(a)},
d4:function(a){return new P.aR(!1,null,null,a)},
jX:function(a,b,c){return new P.aR(!0,a,b,c)},
hq:function(a,b){return new P.bT(null,null,!0,a,b,"Value not in range")},
ac:function(a,b,c,d,e){return new P.bT(b,c,!0,a,d,"Invalid value")},
bz:function(a,b,c){if(0>a||a>c)throw H.c(P.ac(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ac(b,a,c,"end",null))
return b}return c},
kY:function(a,b){if(typeof a!=="number")return a.T()
if(a<0)throw H.c(P.ac(a,0,null,b,null))},
V:function(a,b,c,d,e){var u=H.ad(e==null?J.aD(b):e)
return new P.fJ(u,!0,a,c,"Index out of range")},
E:function(a){return new P.ij(a)},
ih:function(a){return new P.ig(a)},
bK:function(a){return new P.fg(a)},
w:function(a){return new P.ea(a)},
a2:function(a,b,c){return new P.fG(a,b,c)},
my:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.p]})
u=H.d([],[c])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.l(u,t,b.$1(t))
return u},
kw:function(a){H.nX(a)},
mY:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.F(a,4)^58)*3|C.b.F(a,0)^100|C.b.F(a,1)^97|C.b.F(a,2)^116|C.b.F(a,3)^97)>>>0
if(u===0)return P.l7(e<e?C.b.u(a,0,e):a,5,f).gem()
else if(u===32)return P.l7(C.b.u(a,5,e),0,f).gem()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.p])
C.a.l(s,0,0)
C.a.l(s,1,-1)
C.a.l(s,2,-1)
C.a.l(s,7,-1)
C.a.l(s,3,0)
C.a.l(s,4,0)
C.a.l(s,5,e)
C.a.l(s,6,e)
if(P.lt(a,0,e,0,s)>=14)C.a.l(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jo()
if(r>=0)if(P.lt(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.C()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.T()
if(typeof n!=="number")return H.u(n)
if(m<n)n=m
if(typeof o!=="number")return o.T()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.T()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.T()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.a4(a,"..",o)))j=n>o+2&&C.b.a4(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a4(a,"file",0)){if(q<=0){if(!C.b.a4(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.u(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aQ(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a4(a,"http",0)){if(t&&p+3===o&&C.b.a4(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aQ(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a4(a,"https",0)){if(t&&p+4===o&&C.b.a4(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aQ(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jc(a,r,q,p,o,n,m,k)}return P.nc(a,0,e,r,q,p,o,n,m,k)},
l9:function(a){var u=P.i
return C.a.iG(H.d(a.split("&"),[u]),P.kJ(u,u),new P.ip(C.l),[P.C,P.i,P.i])},
mX:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.il(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eX(C.b.u(a,s,t),n,n)
if(typeof p!=="number")return p.bA()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.f(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eX(C.b.u(a,s,c),n,n)
if(typeof p!=="number")return p.bA()
if(p>255)k.$2(l,s)
if(r>=u)return H.f(j,r)
j[r]=p
return j},
l8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.im(a)
t=new P.io(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.W(a,r)
if(n===58){if(r===b){++r
if(C.b.W(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaz(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.mX(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.f(j,g)
j[g]=0
d=g+1
if(d>=i)return H.f(j,d)
j[d]=0
g+=2}else{d=C.f.aJ(f,8)
if(g<0||g>=i)return H.f(j,g)
j[g]=d
d=g+1
if(d>=i)return H.f(j,d)
j[d]=f&255
g+=2}}return j},
nc:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nj(a,b,d)
else{if(d===b)P.cW(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nk(a,u,e-1):""
s=P.ng(a,e,f,!1)
if(typeof f!=="number")return f.C()
r=f+1
if(typeof g!=="number")return H.u(g)
q=r<g?P.ni(P.eX(C.b.u(a,r,g),new P.jl(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nh(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.T()
o=h<i?P.ki(a,h+1,i,n):n
return new P.bW(j,t,s,q,p,o,i<c?P.nf(a,i+1,c):n)},
lj:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cW:function(a,b,c){throw H.c(P.a2(c,a,b))},
ni:function(a,b){if(a!=null&&a===P.lj(b))return
return a},
ng:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.W(a,b)===91){if(typeof c!=="number")return c.A()
u=c-1
if(C.b.W(a,u)!==93)P.cW(a,b,"Missing end `]` to match `[` in host")
P.l8(a,b+1,u)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.u(c)
t=b
for(;t<c;++t)if(C.b.W(a,t)===58){P.l8(a,b,c)
return"["+a+"]"}return P.nm(a,b,c)},
nm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.W(a,u)
if(q===37){p=P.lp(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ak("")
n=C.b.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.f(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ak("")
if(t<u){s.a+=C.b.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.f(C.n,o)
o=(C.n[o]&1<<(q&15))!==0}else o=!1
if(o)P.cW(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ak("")
n=C.b.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lk(q)
u+=l
t=u}}}}if(s==null)return C.b.u(a,b,c)
if(t<c){n=C.b.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nj:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lm(C.b.F(a,b)))P.cW(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.f(C.p,r)
r=(C.p[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cW(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.u(a,b,c)
return P.nd(t?a.toLowerCase():a)},
nd:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nk:function(a,b,c){return P.cX(a,b,c,C.R,!1)},
nh:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cX(a,b,c,C.z,!0):C.t.js(d,new P.jm(),P.i).v(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a3(u,"/"))u="/"+u
return P.nl(u,e,f)},
nl:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a3(a,"/"))return P.nn(a,!u||c)
return P.no(a)},
ki:function(a,b,c,d){var u,t={}
H.l(d,"$iC",[P.i,null],"$aC")
if(a!=null){if(d!=null)throw H.c(P.d4("Both query and queryParameters specified"))
return P.cX(a,b,c,C.o,!0)}if(d==null)return
u=new P.ak("")
t.a=""
d.J(0,new P.jn(new P.jo(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nf:function(a,b,c){return P.cX(a,b,c,C.o,!0)},
lp:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.W(a,b+1)
t=C.b.W(a,p)
s=H.jI(u)
r=H.jI(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.f.aJ(q,4)
if(p>=8)return H.f(C.q,p)
p=(C.q[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dD(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
lk:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.p])
C.a.l(t,0,37)
C.a.l(t,1,C.b.F(o,a>>>4))
C.a.l(t,2,C.b.F(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.p])
for(q=0;--r,r>=0;s=128){p=C.f.hG(a,6*r)&63|s
C.a.l(t,q,37)
C.a.l(t,q+1,C.b.F(o,p>>>4))
C.a.l(t,q+2,C.b.F(o,p&15))
q+=3}}return P.cy(t,0,null)},
cX:function(a,b,c,d,e){var u=P.lo(a,b,c,H.l(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.u(a,b,c):u},
lo:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.T()
if(typeof c!=="number")return H.u(c)
if(!(t<c))break
c$0:{q=C.b.W(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.f(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.lp(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.f(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cW(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.W(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.lk(q)}}if(r==null)r=new P.ak("")
r.a+=C.b.u(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.u(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.T()
if(s<c)r.a+=C.b.u(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
ln:function(a){if(C.b.a3(a,"."))return!0
return C.b.dX(a,"/.")!==-1},
no:function(a){var u,t,s,r,q,p,o
if(!P.ln(a))return a
u=H.d([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Y(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.f(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.v(u,"/")},
nn:function(a,b){var u,t,s,r,q,p
if(!P.ln(a))return!b?P.ll(a):a
u=H.d([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaz(u)!==".."){if(0>=u.length)return H.f(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.f(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaz(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.f(u,0)
C.a.l(u,0,P.ll(u[0]))}return C.a.v(u,"/")},
ll:function(a){var u,t,s,r=a.length
if(r>=2&&P.lm(J.m7(a,0)))for(u=1;u<r;++u){t=C.b.F(a,u)
if(t===58)return C.b.u(a,0,u)+"%3A"+C.b.ar(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.f(C.p,s)
s=(C.p[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
ne:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.d4("Invalid URL encoding"))}}return u},
kj:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.u(a,b,c)
else r=new H.a4(C.b.u(a,b,c))}else{r=H.d([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.b.F(a,q)
if(t>127)throw H.c(P.d4("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.d4("Truncated URI"))
C.a.h(r,P.ne(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.p],"$ab")
return new P.is(!1).cb(r)},
lm:function(a){var u=a|32
return 97<=u&&u<=122},
l7:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a2(m,a,t))}}if(s<0&&t>b)throw H.c(P.a2(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaz(l)
if(r!==44||t!==p+7||!C.b.a4(a,"base64",p+1))throw H.c(P.a2("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.D.iR(0,a,o,u)
else{n=P.lo(a,o,u,C.o,!0)
if(n!=null)a=C.b.aQ(a,o,u,n)}return new P.ik(a,l,c)},
nq:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.my(22,new P.jw(),P.P),n=new P.jv(o),m=new P.jx(),l=new P.jy(),k=H.e(n.$2(0,225),"$iP")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(14,225),"$iP")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(15,225),"$iP")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(1,225),"$iP")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(2,235),"$iP")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(3,235),"$iP")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(4,229),"$iP")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(5,229),"$iP")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(6,231),"$iP")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(7,231),"$iP")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.e(n.$2(8,8),"$iP"),"]",5)
k=H.e(n.$2(9,235),"$iP")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(16,235),"$iP")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(17,235),"$iP")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(10,235),"$iP")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(18,235),"$iP")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(19,235),"$iP")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(11,235),"$iP")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(12,236),"$iP")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.e(n.$2(13,237),"$iP")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.e(n.$2(20,245),"$iP"),"az",21)
k=H.e(n.$2(21,245),"$iP")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
lt:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.p],"$ab")
u=$.m6()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.f(u,d)
s=u[d]
r=C.b.F(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.f(s,r)
q=s[r]
d=q&31
C.a.l(e,q>>>5,t)}return d},
X:function X(){},
at:function at(a,b){this.a=a
this.b=b},
y:function y(){},
bp:function bp(a){this.a=a},
ft:function ft(){},
fu:function fu(){},
bq:function bq(){},
f1:function f1(){},
dA:function dA(){},
aR:function aR(a,b,c,d){var _=this
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
fJ:function fJ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ij:function ij(a){this.a=a},
ig:function ig(a){this.a=a},
hJ:function hJ(a){this.a=a},
fg:function fg(a){this.a=a},
hl:function hl(){},
dK:function dK(){},
fo:function fo(a){this.a=a},
ea:function ea(a){this.a=a},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
p:function p(){},
h:function h(){},
aV:function aV(){},
b:function b(){},
C:function C(){},
J:function J(){},
a8:function a8(){},
S:function S(){},
aq:function aq(){},
i:function i(){},
ak:function ak(a){this.a=a},
ip:function ip(a){this.a=a},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
io:function io(a,b){this.a=a
this.b=b},
bW:function bW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(){},
jo:function jo(a,b){this.a=a
this.b=b},
jn:function jn(a){this.a=a},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(){},
jv:function jv(a){this.a=a},
jx:function jx(){},
jy:function jy(){},
jc:function jc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iP:function iP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
nF:function(a){var u,t=J.U(a)
if(!!t.$ib9){u=t.gdt(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eJ(a.data,a.height,a.width)},
nE:function(a){if(a instanceof P.eJ)return{data:a.a,height:a.b,width:a.c}
return a},
bg:function(a){var u,t,s,r,q
if(a==null)return
u=P.kJ(P.i,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r){q=H.L(t[r])
u.l(0,q,a[q])}return u},
nD:function(a){var u={}
a.J(0,new P.jC(u))
return u},
je:function je(){},
jg:function jg(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
jC:function jC(a){this.a=a},
jf:function jf(a,b){this.a=a
this.b=b},
fC:function fC(a,b){this.a=a
this.b=b},
fD:function fD(){},
fE:function fE(){},
j3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
n9:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j6:function j6(){},
ai:function ai(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aY:function aY(){},
fO:function fO(){},
b0:function b0(){},
hj:function hj(){},
hp:function hp(){},
hR:function hR(){},
q:function q(){},
b2:function b2(){},
i3:function i3(){},
ef:function ef(){},
eg:function eg(){},
ep:function ep(){},
eq:function eq(){},
eA:function eA(){},
eB:function eB(){},
eH:function eH(){},
eI:function eI(){},
P:function P(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(a){this.a=a},
f6:function f6(){},
bE:function bE(){},
hk:function hk(){},
e3:function e3(){},
d6:function d6(){},
dE:function dE(){},
bU:function bU(){},
dH:function dH(){},
dM:function dM(){},
dV:function dV(){},
hI:function hI(){},
ew:function ew(){},
ex:function ex(){}},W={
jZ:function(){var u=document.createElement("canvas")
return u},
ml:function(a){H.e(a,"$ij")
return"wheel"},
mo:function(a){var u,t=document.createElement("input"),s=H.e(t,"$icj")
try{s.type=a}catch(u){H.aC(u)}return s},
j2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lh:function(a,b,c,d){var u=W.j2(W.j2(W.j2(W.j2(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.lx(new W.iS(c),W.o)
if(u!=null&&!0)J.m9(a,b,u,!1)
return new W.iR(a,b,u,!1,[e])},
lx:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.W
if(u===C.k)return a
return u.dq(a,b)},
t:function t(){},
eY:function eY(){},
f_:function f_(){},
f0:function f0(){},
bF:function bF(){},
bG:function bG(){},
c9:function c9(){},
bn:function bn(){},
cd:function cd(){},
fk:function fk(){},
T:function T(){},
ce:function ce(){},
fl:function fl(){},
aT:function aT(){},
aU:function aU(){},
fm:function fm(){},
fn:function fn(){},
fp:function fp(){},
dd:function dd(){},
fq:function fq(){},
de:function de(){},
df:function df(){},
fr:function fr(){},
fs:function fs(){},
iN:function iN(a,b){this.a=a
this.b=b},
a1:function a1(){},
o:function o(){},
j:function j(){},
aw:function aw(){},
cf:function cf(){},
fB:function fB(){},
fF:function fF(){},
aE:function aE(){},
fI:function fI(){},
bO:function bO(){},
b9:function b9(){},
ci:function ci(){},
cj:function cj(){},
ca:function ca(){},
aX:function aX(){},
fU:function fU(){},
h6:function h6(){},
cn:function cn(){},
h7:function h7(){},
h8:function h8(a){this.a=a},
h9:function h9(){},
ha:function ha(a){this.a=a},
aH:function aH(){},
hb:function hb(){},
ab:function ab(){},
iM:function iM(a){this.a=a},
G:function G(){},
cr:function cr(){},
aI:function aI(){},
hn:function hn(){},
hv:function hv(){},
hw:function hw(a){this.a=a},
hy:function hy(){},
aJ:function aJ(){},
hG:function hG(){},
aK:function aK(){},
hH:function hH(){},
aL:function aL(){},
hL:function hL(){},
hM:function hM(a){this.a=a},
ax:function ax(){},
bf:function bf(){},
aM:function aM(){},
ay:function ay(){},
hT:function hT(){},
hU:function hU(){},
hZ:function hZ(){},
aN:function aN(){},
aO:function aO(){},
i1:function i1(){},
i2:function i2(){},
bA:function bA(){},
iq:function iq(){},
iD:function iD(){},
b5:function b5(){},
cL:function cL(){},
iO:function iO(){},
e5:function e5(){},
j1:function j1(){},
em:function em(){},
jd:function jd(){},
jh:function jh(){},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kg:function kg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iR:function iR(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iS:function iS(a){this.a=a},
B:function B(){},
dj:function dj(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
en:function en(){},
eo:function eo(){},
er:function er(){},
es:function es(){},
et:function et(){},
cS:function cS(){},
cT:function cT(){},
eu:function eu(){},
ev:function ev(){},
ez:function ez(){},
eC:function eC(){},
eD:function eD(){},
cU:function cU(){},
cV:function cV(){},
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
k_:function(a){var u=new O.Z([a])
u.b6(a)
return u},
Z:function Z(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cm:function cm(){this.b=this.a=null},
kL:function(){var u,t,s=new O.dv()
s.sf0(O.k_(V.aa))
s.e.b5(s.gfF(),s.gfH())
u=new O.aZ(s,"emission")
u.c=C.d
u.f=new V.a_(0,0,0)
s.f=u
u=new O.aZ(s,"ambient")
u.c=C.d
u.f=new V.a_(0,0,0)
s.r=u
u=new O.aZ(s,"diffuse")
u.c=C.d
u.f=new V.a_(0,0,0)
s.x=u
u=new O.aZ(s,"invDiffuse")
u.c=C.d
u.f=new V.a_(0,0,0)
s.y=u
u=new O.h5(s,"specular")
u.c=C.d
u.f=new V.a_(0,0,0)
u.ch=100
s.z=u
u=new O.h2(s,"bump")
u.c=C.d
s.Q=u
s.ch=null
u=new O.aZ(s,"reflect")
u.c=C.d
u.f=new V.a_(0,0,0)
s.cx=u
u=new O.h4(s,"refract")
u.c=C.d
u.f=new V.a_(0,0,0)
u.ch=1
s.cy=u
u=new O.h1(s,"alpha")
u.c=C.d
u.f=1
s.db=u
u=new D.dr()
u.b6(D.a5)
u.seK(H.d([],[D.bo]))
u.seN(H.d([],[D.dC]))
u.seO(H.d([],[D.dJ]))
u.seP(H.d([],[D.dO]))
u.seQ(H.d([],[D.dP]))
u.seR(H.d([],[D.dQ]))
u.ch=u.Q=null
u.bC(u.gfD(),u.gha(),u.ghe())
s.dx=u
t=u.Q
u=t==null?u.Q=D.R():t
u.h(0,s.ghu())
u=s.dx
t=u.ch
u=t==null?u.ch=D.R():t
u.h(0,s.gb9())
s.dy=null
return s},
dv:function dv(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h1:function h1(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cl:function cl(){},
h2:function h2(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aZ:function aZ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h4:function h4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h5:function h5(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bV:function bV(){}},E={
fx:function(){var u=new E.am()
u.a=""
u.b=!0
u.seD(0,O.k_(E.am))
u.y.b5(u.giS(),u.giV())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbD(0,null)
u.scA(null)
u.saO(null)
return u},
mQ:function(a,b){var u=new E.hr(a)
u.ez(a,b)
return u},
mU:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ibG)return E.l3(a,!0,!0,!0,!1)
u=W.jZ()
t=u.style
t.width="100%"
t.height="100%"
s.gca(a).h(0,u)
return E.l3(u,!0,!0,!0,!1)},
l3:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dR(),j=H.e(C.m.cD(a,"webgl2",P.mv(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibU")
if(j==null)H.r(P.w("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mQ(j,a)
u=new T.hW(j)
u.b=H.ad(j.getParameter(3379))
H.ad(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dY(a)
t=new X.fN()
t.shn(P.mw(P.p))
u.b=t
t=new X.hc(u)
t.f=0
t.r=V.by()
t.x=V.by()
t.ch=t.Q=1
u.c=t
t=new X.fV(u)
t.r=0
t.x=V.by()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i0(u)
t.f=V.by()
t.r=V.by()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfc(H.d([],[[P.cx,P.S]]))
t=u.z
s=document
r=W.ab
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a7(s,"contextmenu",H.n(u.gfP(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a7(a,"focus",H.n(u.gfV(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a7(a,"blur",H.n(u.gfJ(),o),!1,p))
t=u.z
n=W.aX
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a7(s,"keyup",H.n(u.gbS(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a7(s,"keydown",H.n(u.gbF(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a7(a,"mousedown",H.n(u.gh0(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,"mouseup",H.n(u.gh4(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,l,H.n(u.gh2(),q),!1,r))
n=u.z
m=W.b5;(n&&C.a).h(n,W.a7(a,H.L(W.ml(a)),H.n(u.gh6(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a7(s,l,H.n(u.gfR(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a7(s,"mouseup",H.n(u.gfT(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a7(s,"pointerlockchange",H.n(u.gh8(),o),!1,p))
p=u.z
o=W.aO
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a7(a,"touchstart",H.n(u.ghk(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchend",H.n(u.ghg(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchmove",H.n(u.ghi(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.at(Date.now(),!1)
k.cy=0
k.de()
return k},
f9:function f9(){},
am:function am(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
dR:function dR(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hY:function hY(a){this.a=a}},Z={
kf:function(a,b,c){var u
H.l(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bX(c)),35044)
a.bindBuffer(b,null)
return new Z.e1(b,u)},
az:function(a){return new Z.b4(a)},
e1:function e1(a,b){this.a=a
this.b=b},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iE:function iE(a){this.a=a},
d8:function d8(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
br:function br(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a){this.a=a}},D={
R:function(){var u=new D.bM()
u.sae(null)
u.saU(null)
u.c=null
u.d=0
return u},
fc:function fc(){},
bM:function bM(){var _=this
_.d=_.c=_.b=_.a=null},
fz:function fz(a){this.a=a},
fA:function fA(a){this.a=a},
A:function A(){this.b=null},
bs:function bs(a){this.b=null
this.$ti=a},
bt:function bt(a){this.b=null
this.$ti=a},
H:function H(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
k0:function(a,b){var u,t,s=new D.bo()
s.c=new V.a_(1,1,1)
s.a=V.n3()
u=s.b
s.b=b
b.gp().h(0,s.geL())
t=new D.H("mover",u,s.b,[U.a6])
t.b=!0
s.as(t)
if(!s.c.q(0,a)){u=s.c
s.c=a
t=new D.H("color",u,a,[V.a_])
t.b=!0
s.as(t)}return s},
bo:function bo(){var _=this
_.d=_.c=_.b=_.a=null},
a5:function a5(){},
dr:function dr(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dC:function dC(){},
dJ:function dJ(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){}},X={
ck:function(){var u=new X.dq()
u.b6(X.ae)
u.f=u.e=null
u.r=!1
u.y=u.x=null
u.bC(u.geE(),u.geG(),u.geI())
return u},
d9:function d9(a,b){this.a=a
this.b=b},
ae:function ae(a,b){this.a=a
this.b=b},
bQ:function bQ(a){this.c=a
this.b=null},
dq:function dq(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fN:function fN(){this.d=this.b=this.a=null},
dt:function dt(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},
fV:function fV(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
bc:function bc(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},
hc:function hc(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ho:function ho(){},
dT:function dT(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},
i0:function i0(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},
dY:function dY(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mn:function(a){var u=new X.fH(),t=new V.bI(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.l_
if(t==null){t=V.kZ(0,0,1,1)
$.l_=t}u.r=t
return u},
da:function da(){},
fH:function fH(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dB:function dB(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dL:function dL(){},
nG:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=null,i=O.kL(),h=i.dx,g=U.fh(V.k9(1,-3,-1,j))
h.h(0,D.k0(new V.a_(0.4,0.4,1),g))
h=i.dx
g=U.fh(V.k9(0,1,0,j))
h.h(0,D.k0(new V.a_(0,0.2,0.1),g))
h=i.r
h.sa8(0,new V.a_(0.2,0.2,0.2))
h=i.x
h.sa8(0,new V.a_(0.7,0.7,0.7))
i.z.sa8(0,new V.a_(1,1,1))
h=i.z
if(h.c===C.d){h.c=C.i
h.bE()
h.bY(100)
g=h.a
g.a=null
g.V(j)}h.bY(10)
u=E.fx()
u.scA(i)
t=F.l1()
F.cY(t,j,j,1,1,1,0,0,1)
F.cY(t,j,j,1,1,0,1,0,3)
F.cY(t,j,j,1,1,0,0,1,2)
F.cY(t,j,j,1,1,-1,0,0,0)
F.cY(t,j,j,1,1,0,-1,0,0)
F.cY(t,j,j,1,1,0,0,-1,3)
t.aK()
for(h=[U.a6],g=[P.y],s=-60;s<=60;s+=12)for(r=s/10,q=-60;q<=60;q+=12){p=E.fx()
p.sbD(0,t)
o=q/10
n=new U.dG()
n.r=n.f=n.e=n.d=n.c=n.b=n.a=0
n.seo(r)
n.se8(0,o)
n.see(0)
m=n.d
if(!(Math.abs(m-r)<$.I().a)){n.d=r
m=new D.H("deltaYaw",m,r,g)
m.b=!0
l=n.y
if(l!=null)l.B(m)}m=n.e
if(!(Math.abs(m-o)<$.I().a)){n.e=o
o=new D.H("deltaPitch",m,o,g)
o.b=!0
m=n.y
if(m!=null)m.B(o)}o=n.f
if(!(Math.abs(o-0.32)<$.I().a)){n.f=0.32
o=new D.H("deltaRoll",o,0.32,g)
o.b=!0
m=n.y
if(m!=null)m.B(o)}o=new U.cc()
o.sR(0,new V.aa(1,0,0,s,0,1,0,0,0,0,1,q,0,0,0,1))
p.saO(U.kH(H.d([n,o],h)))
o=u.y
n=H.v(o,0)
H.z(p,n)
m=[n]
if(H.D(o.bU(H.d([p],m)))){l=o.a
k=l.length
C.a.h(l,p)
n=H.l(H.d([p],m),"$ih",[n],"$ah")
o=o.c
if(o!=null)o.$2(k,n)}}return u},
lH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=1000,a=V.mS("Test 038"),a0=W.jZ()
a0.className="pageLargeCanvas"
a0.id=d
a.a.appendChild(a0)
u=[P.i]
a.dm(H.d(["A test of basic 3D movement around a room similar to a first person view. ","A and D (left and right arrow keys) strifes left and right. ","W and S (up and down arrow keys) moves forward and backward. ","Q and E moves up and down. Mouse looks around with left mouse button pressed."],u))
a.im(H.d(["options"],u))
a.dm(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.r(P.w("Failed to find an element with the identifier, testCanvas."))
s=E.mU(t,!0,!0,!0,!1)
r=E.fx()
a=r.y
q=s.f.iO("../resources/Grass.png",!0,!0)
p=U.fh(V.kP(0,-3,0).n(0,V.b_(b,0,0,0,0,1,0,0,0,0,b,0,0,0,0,1)).n(0,V.k8(-1.5707963267948966)))
o=O.kL()
n=new V.aG(b,0,0,0,b,0,0,0,1)
if(!J.Y(o.b,n)){m=o.b
l=m==null&&!0
if(l)o.a=null
o.b=n
m=new D.H("texture2DMatrix",m,n,[V.aG])
m.b=!0
o.V(m)}o.dx.h(0,D.k0(new V.a_(1,1,1),U.fh(V.k9(1,-3,-1,c))))
m=o.r
m.sa8(0,new V.a_(0.5,0.5,0.5))
m=o.x
m.sa8(0,new V.a_(0.5,0.5,0.5))
o.r.seg(q)
o.x.seg(q)
m=E.fx()
m.sbD(0,F.nN(20,20))
m.saO(p)
m.scA(o)
a.h(0,m)
r.y.h(0,X.nG(s))
m=s.r
k=new U.e_()
a=X.ck()
a.a7(39)
a.a7(68)
l=k.gfX()
a.gaM().h(0,l)
k.a=a
a=X.ck()
a.a7(37)
a.a7(65)
a.gaM().h(0,l)
k.b=a
a=X.ck()
a.a7(81)
a.gaM().h(0,l)
k.c=a
a=X.ck()
a.a7(69)
a.gaM().h(0,l)
k.d=a
a=X.ck()
a.a7(40)
a.a7(83)
a.gaM().h(0,l)
k.e=a
a=X.ck()
a.a7(38)
a.a7(87)
a.gaM().h(0,l)
k.f=a
a=U.db()
a.saX(30)
a.sax(0)
l=k.gaD()
a.gp().h(0,l)
k.r=a
a=U.db()
a.saX(30)
a.sax(0)
a.gp().h(0,l)
k.x=a
a=U.db()
a.saX(30)
a.sax(0)
a.gp().h(0,l)
k.y=a
k.Q=k.z=null
k.ch=60
k.cx=15
k.cy=0
k.dx=k.db=null
k.sf5(c)
k.a.am(m)
k.b.am(m)
k.c.am(m)
k.d.am(m)
k.e.am(m)
k.f.am(m)
a=s.r
j=new U.dZ()
m=U.db()
m.scC(0,!0)
m.scs(6.283185307179586)
m.sct(0)
m.sa0(0,0)
m.saX(100)
m.sS(0)
m.sax(0.5)
j.b=m
l=j.gaD()
m.gp().h(0,l)
m=U.db()
m.scC(0,!0)
m.scs(6.283185307179586)
m.sct(0)
m.sa0(0,0)
m.saX(100)
m.sS(0)
m.sax(0.5)
j.c=m
m.gp().h(0,l)
j.d=null
j.r=j.f=j.e=!1
j.y=j.x=2.5
j.Q=4
j.ch=j.cx=!1
j.db=j.cy=0
j.dx=null
j.dy=0
j.fx=j.fr=null
i=new X.bc(!1,!1,!1)
h=j.d
j.d=i
m=new D.H("modifiers",h,i,[X.bc])
m.b=!0
j.I(m)
m=j.f
if(m!==!1){j.f=!1
m=new D.H("invertX",m,!1,[P.X])
m.b=!0
j.I(m)}m=j.r
if(m!==!1){j.r=!1
m=new D.H("invertY",m,!1,[P.X])
m.b=!0
j.I(m)}j.am(a)
j.b.scs(1.5707963267948966)
j.b.sct(-1.5707963267948966)
j.b.sax(1)
j.c.sax(1)
j.b.scC(0,!1)
j.gp().h(0,new X.jO(k,j))
g=U.kH(H.d([k,j],[U.a6]))
a=new M.dg()
a.sf4(0,O.k_(E.am))
a.d.b5(a.gfL(),a.gfN())
a.x=a.r=a.f=a.e=null
f=X.mn(c)
e=new X.dB()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saO(c)
m=e.c
if(!(Math.abs(m-1.0471975511965976)<$.I().a)){e.c=1.0471975511965976
m=new D.H("fov",m,1.0471975511965976,[P.y])
m.b=!0
e.aG(m)}m=e.d
if(!(Math.abs(m-0.1)<$.I().a)){e.d=0.1
m=new D.H("near",m,0.1,[P.y])
m.b=!0
e.aG(m)}m=e.e
if(!(Math.abs(m-2000)<$.I().a)){e.e=2000
m=new D.H("far",m,2000,[P.y])
m.b=!0
e.aG(m)}m=a.a
if(m!==e){if(m!=null)m.gp().Y(0,a.gaE())
h=a.a
a.a=e
e.gp().h(0,a.gaE())
m=new D.H("camera",h,a.a,[X.da])
m.b=!0
a.aF(m)}m=a.b
if(m!==f){if(m!=null)m.gp().Y(0,a.gaE())
h=a.b
a.b=f
f.gp().h(0,a.gaE())
m=new D.H("target",h,a.b,[X.dL])
m.b=!0
a.aF(m)}a.d.h(0,r)
a.a.saO(g)
m=s.d
if(m!==a){if(m!=null)m.gp().Y(0,s.gcI())
s.d=a
a.gp().h(0,s.gcI())
s.cJ()}a=new V.fd("options")
u=u.getElementById("options")
a.c=u
if(u==null)H.r("Failed to find options for CheckGroup")
a.sf3(H.d([],[W.ca]))
a.il(0,"Mouse Locking",new X.jP(s),!1)
V.o_(s)},
jO:function jO(a,b){this.a=a
this.b=b},
jP:function jP(a){this.a=a}},V={
jU:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.b4(a-b,u)
return(a<0?a+u:a)+b},
O:function(a,b,c){if(a==null)return C.b.ab("null",c)
return C.b.ab(C.j.ej(Math.abs(a-0)<$.I().a?0:a,b),c+b+1)},
c1:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.y],"$ab")
u=H.d([],[P.i])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.F)(a),++r){q=V.O(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.l(u,p,C.b.ab(u[p],s))}return u},
kv:function(a){return C.j.jh(Math.pow(2,C.O.cl(Math.log(H.nC(a))/Math.log(2))))},
mA:function(){var u=$.kM
return u==null?$.kM=new V.aG(1,0,0,0,1,0,0,0,1):u},
dw:function(){var u=$.kQ
return u==null?$.kQ=V.b_(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b_:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kP:function(a,b,c){return V.b_(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
k8:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b_(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
kO:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b_(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
k9:function(a,b,c,d){d=V.le()
return V.kN(V.kV(),d,new V.Q(a,b,c))},
kN:function(a,b,c){var u=c.D(0,Math.sqrt(c.L(c))),t=b.aW(u),s=t.D(0,Math.sqrt(t.L(t))),r=u.aW(s),q=new V.Q(a.a,a.b,a.c),p=s.P(0).L(q),o=r.P(0).L(q),n=u.P(0).L(q)
return V.b_(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
by:function(){var u=$.kU
return u==null?$.kU=new V.ag(0,0):u},
kV:function(){var u=$.cs
return u==null?$.cs=new V.ah(0,0,0):u},
kZ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dF(a,b,c,d)},
e0:function(){var u=$.ld
return u==null?$.ld=new V.Q(0,0,0):u},
le:function(){var u=$.lc
return u==null?$.lc=new V.Q(0,1,0):u},
n3:function(){var u=$.iu
return u==null?$.iu=new V.Q(0,0,1):u},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fy:function fy(a){this.a=a},
aG:function aG(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aa:function aa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ag:function ag(a,b){this.a=a
this.b=b},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dF:function dF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
aj:function(a){var u=new V.hz()
u.eA(a)
return u},
eZ:function eZ(){},
bb:function bb(){},
du:function du(){},
be:function be(){this.a=null},
hz:function hz(){this.a=null},
cw:function cw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a){this.b=a
this.c=null},
i_:function i_(){this.c=this.b=this.a=null},
cB:function cB(a){this.b=a
this.a=this.c=null},
o_:function(a){P.mV(C.M,new V.jS(a))},
mS:function(a){var u=new V.hD()
u.eC(a,!0)
return u},
fd:function fd(a){this.a=a
this.d=this.c=null},
fe:function fe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jS:function jS(a){this.a=a},
hD:function hD(){this.b=this.a=null},
hF:function hF(a){this.a=a},
hE:function hE(a){this.a=a}},U={
db:function(){var u=new U.ff()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
fh:function(a){var u=new U.cc()
u.sR(0,a)
return u},
kH:function(a){var u=new U.ch()
u.b6(U.a6)
u.b5(u.gfB(),u.ghc())
u.c1(0,a)
u.e=null
u.f=V.dw()
u.r=0
return u},
ff:function ff(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cc:function cc(){this.b=this.a=null},
ch:function ch(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a6:function a6(){},
dG:function dG(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dZ:function dZ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e_:function e_(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dg:function dg(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mz:function(a,b){var u=a.ag,t=new A.h0(b,u)
t.eB(b,u)
t.ey(a,b)
return t},
kb:function(a,b,c,d,e){var u=new A.i7(a,c,e)
u.f=d
u.shW(P.mx(d,0,P.p))
return u},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
f2:function f2(a){this.a=a},
h0:function h0(a,b){var _=this
_.bf=_.du=_.be=_.ag=_.an=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dM=_.ce=_.dL=_.bs=_.dK=_.dJ=_.br=_.bq=_.dI=_.dH=_.bp=_.bo=_.bn=_.dG=_.dF=_.bm=_.dE=_.dD=_.bl=_.dC=_.dB=_.bk=_.bj=_.dA=_.dz=_.bi=_.bh=_.dw=_.dv=_.bg=null
_.ck=_.dQ=_.cj=_.dP=_.ci=_.dO=_.cg=_.dN=_.cf=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h3:function h3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.an=b3
_.ag=b4
_.be=b5},
cC:function cC(a,b){this.b=a
this.c=b},
cG:function cG(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cE:function cE(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cH:function cH(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
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
cI:function cI(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cv:function cv(){},
bJ:function bJ(a,b){this.a=a
this.b=b},
dU:function dU(){},
id:function id(a){this.a=a},
N:function N(a,b,c){this.a=a
this.c=b
this.d=c},
i9:function i9(a,b,c){this.a=a
this.c=b
this.d=c},
ia:function ia(a,b,c){this.a=a
this.c=b
this.d=c},
ic:function ic(a,b,c){this.a=a
this.c=b
this.d=c},
i7:function i7(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
i8:function i8(a,b,c){this.a=a
this.c=b
this.d=c},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
ib:function ib(a,b,c){this.a=a
this.c=b
this.d=c},
ie:function ie(a,b,c){this.a=a
this.c=b
this.d=c},
cD:function cD(a,b,c){this.a=a
this.c=b
this.d=c},
au:function au(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c},
ao:function ao(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ju:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.bA()
return(u>0?t+4:t)*2},
cY:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.Q(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.Q(u+a3,t+a1,s+a2)
q=new V.Q(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.Q(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.ju(i)
l=F.ju(j.b)
k=F.lN(d,a0,new F.jt(j,F.ju(j.c),F.ju(j.d),l,m,c),b)
if(k!=null)a.iQ(k)},
nN:function(a,b){var u,t={}
t.a=u
t.a=null
t.a=new F.jG()
return F.lN(b,a,new F.jH(t),null)},
lN:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.aQ,P.y,P.y]})
if(a<1)return
if(b<1)return
u=F.l1()
t=H.d([],[F.aQ])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.dl(new V.bI(p,0,0,1),new V.ag(r,1))
c.$3(o,r,0)
C.a.h(t,o.cc(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.dl(new V.bI(j,i,h,1),new V.ag(r,m))
c.$3(o,r,n)
C.a.h(t,o.cc(d))}}u.d.ip(a+1,b+1,t)
return u},
di:function(a,b,c){var u=new F.a9(),t=a.a
if(t==null)H.r(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.w("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
l1:function(){var u=new F.dI(),t=new F.iv(u)
t.b=!1
t.shX(H.d([],[F.aQ]))
u.a=t
t=new F.hC(u)
t.sbV(H.d([],[F.bx]))
u.b=t
t=new F.hB(u)
t.sfk(H.d([],[F.ba]))
u.c=t
t=new F.hA(u)
t.sfd(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
lf:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aQ(),r=new F.iA()
r.sbV(H.d([],[F.bx]))
s.b=r
r=new F.iz()
u=[F.ba]
r.sfl(H.d([],u))
r.sfm(H.d([],u))
s.c=r
r=new F.iw()
u=[F.a9]
r.sfe(H.d([],u))
r.sff(H.d([],u))
r.sfg(H.d([],u))
s.d=r
h=$.m1()
s.e=0
r=$.bk()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bj().a)!==0?e:t
s.x=(u&$.bi().a)!==0?b:t
s.y=(u&$.bl().a)!==0?f:t
s.z=(u&$.bm().a)!==0?g:t
s.Q=(u&$.m2().a)!==0?c:t
s.ch=(u&$.c6().a)!==0?i:0
s.cx=(u&$.bh().a)!==0?a:t
return s},
jt:function jt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jG:function jG(){},
jH:function jH(a){this.a=a},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ba:function ba(){this.b=this.a=null},
bx:function bx(){this.a=null},
dI:function dI(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(a){this.a=a
this.b=null},
hB:function hB(a){this.a=a
this.b=null},
hC:function hC(a){this.a=a
this.b=null},
aQ:function aQ(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iC:function iC(a){this.a=a},
iB:function iB(a){this.a=a},
iv:function iv(a){this.a=a
this.c=this.b=null},
iw:function iw(){this.d=this.c=this.b=null},
ix:function ix(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(){this.c=this.b=null},
iA:function iA(){this.b=null}},T={cz:function cz(){},dN:function dN(){},hV:function hV(){var _=this
_.y=_.d=_.c=_.b=_.a=null},hW:function hW(a){var _=this
_.a=a
_.e=_.d=_.b=null},hX:function hX(a,b,c,d,e,f,g){var _=this
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
H.k5.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gG:function(a){return H.cu(a)},
i:function(a){return"Instance of '"+H.bS(a)+"'"}}
J.fK.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iX:1}
J.dm.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dp.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hm.prototype={}
J.cJ.prototype={}
J.bu.prototype={
i:function(a){var u=a[$.lQ()]
if(u==null)return this.ev(a)
return"JavaScript function for "+H.m(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ik1:1}
J.aW.prototype={
h:function(a,b){H.z(b,H.v(a,0))
if(!!a.fixed$length)H.r(P.E("add"))
a.push(b)},
Y:function(a,b){var u
if(!!a.fixed$length)H.r(P.E("remove"))
for(u=0;u<a.length;++u)if(J.Y(a[u],b)){a.splice(u,1)
return!0}return!1},
c1:function(a,b){var u,t
H.l(b,"$ih",[H.v(a,0)],"$ah")
if(!!a.fixed$length)H.r(P.E("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.F)(b),++t)a.push(b[t])},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bK(a))}},
v:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.l(t,u,H.m(a[u]))
return t.join(b)},
iM:function(a){return this.v(a,"")},
iG:function(a,b,c,d){var u,t,s
H.z(b,d)
H.n(c,{func:1,ret:d,args:[d,H.v(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bK(a))}return t},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
es:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ac(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ac(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.v(a,0)])
return H.d(a.slice(b,c),[H.v(a,0)])},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.mq())},
a9:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Y(a[u],b))return!0
return!1},
i:function(a){return P.k2(a,"[","]")},
gX:function(a){return new J.ap(a,a.length,[H.v(a,0)])},
gG:function(a){return H.cu(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.E("set length"))
if(b<0)throw H.c(P.ac(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.c0(a,b))
return a[b]},
l:function(a,b,c){H.z(c,H.v(a,0))
if(!!a.immutable$list)H.r(P.E("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c0(a,b))
a[b]=c},
$ih:1,
$ib:1}
J.k4.prototype={}
J.ap.prototype={
gK:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.F(s))
u=t.c
if(u>=r){t.sd_(null)
return!1}t.sd_(s[u]);++t.c
return!0},
sd_:function(a){this.d=H.z(a,H.v(this,0))},
$iaV:1}
J.dn.prototype={
jh:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.E(""+a+".toInt()"))},
cl:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.E(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.E(""+a+".round()"))},
ej:function(a,b){var u,t
if(b>20)throw H.c(P.ac(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
b1:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ac(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.r(P.E("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.f(t,1)
u=t[1]
if(3>=s)return H.f(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.n("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b4:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ex:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dh(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.dh(a,b)},
dh:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.E("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aJ:function(a,b){var u
if(a>0)u=this.dg(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hG:function(a,b){if(b<0)throw H.c(H.b8(b))
return this.dg(a,b)},
dg:function(a,b){return b>31?0:a>>>b},
$iy:1,
$ia8:1}
J.dl.prototype={$ip:1}
J.dk.prototype={}
J.bP.prototype={
W:function(a,b){if(b<0)throw H.c(H.c0(a,b))
if(b>=a.length)H.r(H.c0(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.c0(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.c(P.jX(b,null,null))
return a+b},
aQ:function(a,b,c,d){var u,t
c=P.bz(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a4:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ac(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a3:function(a,b){return this.a4(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.b8(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.T()
if(b<0)throw H.c(P.hq(b,null))
if(b>c)throw H.c(P.hq(b,null))
if(c>a.length)throw H.c(P.hq(c,null))
return a.substring(b,c)},
ar:function(a,b){return this.u(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.K)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ab:function(a,b){var u=b-a.length
if(u<=0)return a
return this.n(" ",u)+a},
j_:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.n(c,u)},
dY:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ac(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dX:function(a,b){return this.dY(a,b,0)},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ikS:1,
$ii:1}
H.a4.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.b.W(this.a,b)},
$acK:function(){return[P.p]},
$ax:function(){return[P.p]},
$ah:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fv.prototype={}
H.ds.prototype={
gK:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.d0(s),q=r.gk(s)
if(t.b!==q)throw H.c(P.bK(s))
u=t.c
if(u>=q){t.saS(null)
return!1}t.saS(r.H(s,u));++t.c
return!0},
saS:function(a){this.d=H.z(a,H.v(this,0))},
$iaV:1}
H.fZ.prototype={
gX:function(a){return new H.h_(J.bD(this.a),this.b,this.$ti)},
gk:function(a){return J.aD(this.a)},
H:function(a,b){return this.b.$1(J.jW(this.a,b))},
$ah:function(a,b){return[b]}}
H.h_.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.saS(u.c.$1(t.gK(t)))
return!0}u.saS(null)
return!1},
gK:function(a){return this.a},
saS:function(a){this.a=H.z(a,H.v(this,1))},
$aaV:function(a,b){return[b]}}
H.iF.prototype={
gX:function(a){return new H.iG(J.bD(this.a),this.b,this.$ti)}}
H.iG.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(H.D(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.bN.prototype={}
H.cK.prototype={
l:function(a,b,c){H.z(c,H.av(this,"cK",0))
throw H.c(P.E("Cannot modify an unmodifiable list"))}}
H.dW.prototype={}
H.fi.prototype={
i:function(a){return P.k7(this)},
l:function(a,b,c){H.z(b,H.v(this,0))
H.z(c,H.v(this,1))
return H.mi()},
$iC:1}
H.fj.prototype={
gk:function(a){return this.a},
bd:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bd(0,b))return
return this.d0(b)},
d0:function(a){return this.b[H.L(a)]},
J:function(a,b){var u,t,s,r,q=this,p=H.v(q,1)
H.n(b,{func:1,ret:-1,args:[H.v(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.z(q.d0(r),p))}}}
H.i4.prototype={
aa:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fM.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.m(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.m(t.a)+")"
return s+r+"' on '"+u+"' ("+H.m(t.a)+")"}}
H.ii.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jT.prototype={
$1:function(a){if(!!J.U(a).$ibq)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.ey.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaq:1}
H.cb.prototype={
i:function(a){return"Closure '"+H.bS(this).trim()+"'"},
$ik1:1,
gjn:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hS.prototype={}
H.hK.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c5(u)+"'"}}
H.c7.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c7))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cu(this.a)
else u=typeof t!=="object"?J.d3(t):H.cu(t)
return(u^H.cu(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.bS(u)+"'")}}
H.i6.prototype={
i:function(a){return this.a}}
H.fb.prototype={
i:function(a){return this.a}}
H.hx.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.iH.prototype={
i:function(a){return"Assertion failed: "+P.dh(this.a)}}
H.aF.prototype={
gk:function(a){return this.a},
gao:function(a){return new H.fQ(this,[H.v(this,0)])},
bd:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cX(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cX(t,b)}else return s.iJ(b)},
iJ:function(a){var u=this,t=u.d
if(t==null)return!1
return u.co(u.bM(t,u.cn(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b7(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b7(r,b)
s=t==null?null:t.b
return s}else return q.iK(b)},
iK:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bM(r,s.cn(a))
t=s.co(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s=this
H.z(b,H.v(s,0))
H.z(c,H.v(s,1))
if(typeof b==="string"){u=s.b
s.cO(u==null?s.b=s.bP():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cO(t==null?s.c=s.bP():t,b,c)}else s.iL(b,c)},
iL:function(a,b){var u,t,s,r,q=this
H.z(a,H.v(q,0))
H.z(b,H.v(q,1))
u=q.d
if(u==null)u=q.d=q.bP()
t=q.cn(a)
s=q.bM(u,t)
if(s==null)q.bZ(u,t,[q.bQ(a,b)])
else{r=q.co(s,a)
if(r>=0)s[r].b=b
else s.push(q.bQ(a,b))}},
J:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.v(s,0),H.v(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bK(s))
u=u.c}},
cO:function(a,b,c){var u,t=this
H.z(b,H.v(t,0))
H.z(c,H.v(t,1))
u=t.b7(a,b)
if(u==null)t.bZ(a,b,t.bQ(b,c))
else u.b=c},
bQ:function(a,b){var u=this,t=new H.fP(H.z(a,H.v(u,0)),H.z(b,H.v(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cn:function(a){return J.d3(a)&0x3ffffff},
co:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1},
i:function(a){return P.k7(this)},
b7:function(a,b){return a[b]},
bM:function(a,b){return a[b]},
bZ:function(a,b,c){a[b]=c},
f9:function(a,b){delete a[b]},
cX:function(a,b){return this.b7(a,b)!=null},
bP:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bZ(t,u,t)
this.f9(t,u)
return t}}
H.fP.prototype={}
H.fQ.prototype={
gk:function(a){return this.a.a},
gX:function(a){var u=this.a,t=new H.fR(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fR.prototype={
gK:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bK(t))
else{t=u.c
if(t==null){u.scN(null)
return!1}else{u.scN(t.a)
u.c=u.c.c
return!0}}},
scN:function(a){this.d=H.z(a,H.v(this,0))},
$iaV:1}
H.jJ.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.jK.prototype={
$2:function(a,b){return this.a(a,b)},
$S:33}
H.jL.prototype={
$1:function(a){return this.a(H.L(a))},
$S:42}
H.fL.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikS:1,
$imO:1}
H.co.prototype={$ico:1}
H.bw.prototype={$ibw:1,$imW:1}
H.dx.prototype={
gk:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cp.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]},
l:function(a,b,c){H.nI(c)
H.b7(b,a,a.length)
a[b]=c},
$abN:function(){return[P.y]},
$ax:function(){return[P.y]},
$ih:1,
$ah:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.dy.prototype={
l:function(a,b,c){H.ad(c)
H.b7(b,a,a.length)
a[b]=c},
$abN:function(){return[P.p]},
$ax:function(){return[P.p]},
$ih:1,
$ah:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hd.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.he.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.hf.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.hg.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.hh.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.dz.prototype={
gk:function(a){return a.length},
j:function(a,b){H.b7(b,a,a.length)
return a[b]},
$ion:1}
H.cq.prototype={
gk:function(a){return a.length},
j:function(a,b){H.b7(b,a,a.length)
return a[b]},
$icq:1,
$iP:1}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
H.cR.prototype={}
P.iJ.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:19}
P.iI.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:32}
P.iK.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iL.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eE.prototype={
eT:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c_(new P.jj(this,b),0),a)
else throw H.c(P.E("`setTimeout()` not found."))},
eU:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c_(new P.ji(this,a,Date.now(),b),0),a)
else throw H.c(P.E("Periodic timer."))},
$ib1:1}
P.jj.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.ji.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.ex(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b6.prototype={
iP:function(a){if(this.c!==6)return!0
return this.b.b.cz(H.n(this.d,{func:1,ret:P.X,args:[P.S]}),a.a,P.X,P.S)},
iI:function(a){var u=this.e,t=P.S,s={futureOr:1,type:H.v(this,1)},r=this.b.b
if(H.eV(u,{func:1,args:[P.S,P.aq]}))return H.kr(r.jc(u,a.a,a.b,null,t,P.aq),s)
else return H.kr(r.cz(H.n(u,{func:1,args:[P.S]}),a.a,null,t),s)}}
P.aA.prototype={
ei:function(a,b,c){var u,t,s,r=H.v(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.W
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.nu(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aA($.W,[c])
s=b==null?1:3
this.cP(new P.b6(t,s,a,b,[r,c]))
return t},
jg:function(a,b){return this.ei(a,null,b)},
cP:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$ib6")
t.c=a}else{if(s===2){u=H.e(t.c,"$iaA")
s=u.a
if(s<4){u.cP(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jB(null,null,s,H.n(new P.iT(t,a),{func:1,ret:-1}))}},
dc:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$ib6")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iaA")
u=q.a
if(u<4){q.dc(a)
return}p.a=u
p.c=q.c}o.a=p.ba(a)
u=p.b
u.toString
P.jB(null,null,u,H.n(new P.iX(o,p),{func:1,ret:-1}))}},
bX:function(){var u=H.e(this.c,"$ib6")
this.c=null
return this.ba(u)},
ba:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cT:function(a){var u,t,s=this,r=H.v(s,0)
H.kr(a,{futureOr:1,type:r})
u=s.$ti
if(H.ko(a,"$icg",u,"$acg"))if(H.ko(a,"$iaA",u,null))P.lg(a,s)
else P.n8(a,s)
else{t=s.bX()
H.z(a,r)
s.a=4
s.c=a
P.cM(s,t)}},
cU:function(a,b){var u,t=this
H.e(b,"$iaq")
u=t.bX()
t.a=8
t.c=new P.al(a,b)
P.cM(t,u)},
$icg:1}
P.iT.prototype={
$0:function(){P.cM(this.a,this.b)},
$S:2}
P.iX.prototype={
$0:function(){P.cM(this.b,this.a.a)},
$S:2}
P.iU.prototype={
$1:function(a){var u=this.a
u.a=0
u.cT(a)},
$S:19}
P.iV.prototype={
$2:function(a,b){H.e(b,"$iaq")
this.a.cU(a,b)},
$1:function(a){return this.$2(a,null)},
$S:26}
P.iW.prototype={
$0:function(){this.a.cU(this.b,this.c)},
$S:2}
P.j_.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ef(H.n(s.d,{func:1}),null)}catch(r){u=H.aC(r)
t=H.c3(r)
if(o.d){s=H.e(o.a.a.c,"$ial").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$ial")
else q.b=new P.al(u,t)
q.a=!0
return}if(!!J.U(n).$icg){if(n instanceof P.aA&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$ial")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jg(new P.j0(p),null)
s.a=!1}},
$S:3}
P.j0.prototype={
$1:function(a){return this.a},
$S:49}
P.iZ.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.v(s,0)
q=H.z(n.c,r)
p=H.v(s,1)
n.a.b=s.b.b.cz(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aC(o)
t=H.c3(o)
s=n.a
s.b=new P.al(u,t)
s.a=!0}},
$S:3}
P.iY.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$ial")
r=m.c
if(H.D(r.iP(u))&&r.e!=null){q=m.b
q.b=r.iI(u)
q.a=!1}}catch(p){t=H.aC(p)
s=H.c3(p)
r=H.e(m.a.a.c,"$ial")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.al(t,s)
n.a=!0}},
$S:3}
P.e2.prototype={}
P.hN.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aA($.W,[P.p])
r.a=0
u=H.v(s,0)
t=H.n(new P.hP(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.hQ(r,q),{func:1,ret:-1})
W.a7(s.a,s.b,t,!1,u)
return q}}
P.hP.prototype={
$1:function(a){H.z(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.v(this.b,0)]}}}
P.hQ.prototype={
$0:function(){this.b.cT(this.a.a)},
$S:2}
P.cx.prototype={}
P.hO.prototype={}
P.b1.prototype={}
P.al.prototype={
i:function(a){return H.m(this.a)},
$ibq:1}
P.js.prototype={$ioB:1}
P.jA.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dA():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:2}
P.j7.prototype={
jd:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.W){a.$0()
return}P.lr(r,r,this,a,-1)}catch(s){u=H.aC(s)
t=H.c3(s)
P.jz(r,r,this,u,H.e(t,"$iaq"))}},
je:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.k===$.W){a.$1(b)
return}P.ls(r,r,this,a,b,-1,c)}catch(s){u=H.aC(s)
t=H.c3(s)
P.jz(r,r,this,u,H.e(t,"$iaq"))}},
ir:function(a,b){return new P.j9(this,H.n(a,{func:1,ret:b}),b)},
c6:function(a){return new P.j8(this,H.n(a,{func:1,ret:-1}))},
dq:function(a,b){return new P.ja(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ef:function(a,b){H.n(a,{func:1,ret:b})
if($.W===C.k)return a.$0()
return P.lr(null,null,this,a,b)},
cz:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.W===C.k)return a.$1(b)
return P.ls(null,null,this,a,b,c,d)},
jc:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.W===C.k)return a.$2(b,c)
return P.nv(null,null,this,a,b,c,d,e,f)}}
P.j9.prototype={
$0:function(){return this.a.ef(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.j8.prototype={
$0:function(){return this.a.jd(this.b)},
$S:3}
P.ja.prototype={
$1:function(a){var u=this.c
return this.a.je(this.b,H.z(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j4.prototype={
gX:function(a){return P.li(this,this.r,H.v(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.z(b,H.v(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cR(u==null?s.b=P.kh():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cR(t==null?s.c=P.kh():t,b)}else return s.eW(0,b)},
eW:function(a,b){var u,t,s,r=this
H.z(b,H.v(r,0))
u=r.d
if(u==null)u=r.d=P.kh()
t=r.cV(b)
s=u[t]
if(s==null)u[t]=[r.bI(b)]
else{if(r.d1(s,b)>=0)return!1
s.push(r.bI(b))}return!0},
Y:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hq(this.c,b)
else return this.hp(0,b)},
hp:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.fi(r,b)
t=s.d1(u,b)
if(t<0)return!1
s.di(u.splice(t,1)[0])
return!0},
cR:function(a,b){H.z(b,H.v(this,0))
if(H.e(a[b],"$icN")!=null)return!1
a[b]=this.bI(b)
return!0},
hq:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$icN")
if(u==null)return!1
this.di(u)
delete a[b]
return!0},
d5:function(){this.r=1073741823&this.r+1},
bI:function(a){var u,t=this,s=new P.cN(H.z(a,H.v(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d5()
return s},
di:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d5()},
cV:function(a){return J.d3(a)&1073741823},
fi:function(a,b){return a[this.cV(b)]},
d1:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1}}
P.cN.prototype={}
P.j5.prototype={
gK:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bK(t))
else{t=u.c
if(t==null){u.scS(null)
return!1}else{u.scS(H.z(t.a,H.v(u,0)))
u.c=u.c.b
return!0}}},
scS:function(a){this.d=H.z(a,H.v(this,0))},
$iaV:1}
P.fS.prototype={
$2:function(a,b){this.a.l(0,H.z(a,this.b),H.z(b,this.c))},
$S:5}
P.fT.prototype={$ih:1,$ib:1}
P.x.prototype={
gX:function(a){return new H.ds(a,this.gk(a),[H.c2(this,a,"x",0)])},
H:function(a,b){return this.j(a,b)},
jj:function(a,b){var u,t=this,s=H.d([],[H.c2(t,a,"x",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.l(s,u,t.j(a,u))
return s},
ji:function(a){return this.jj(a,!0)},
iE:function(a,b,c,d){var u
H.z(d,H.c2(this,a,"x",0))
P.bz(b,c,this.gk(a))
for(u=b;u<c;++u)this.l(a,u,d)},
i:function(a){return P.k2(a,"[","]")}}
P.fW.prototype={}
P.fX.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.m(a)
t.a=u+": "
t.a+=H.m(b)},
$S:5}
P.af.prototype={
J:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.c2(s,a,"af",0),H.c2(s,a,"af",1)]})
for(u=J.bD(s.gao(a));u.w();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.aD(this.gao(a))},
i:function(a){return P.k7(a)},
$iC:1}
P.jk.prototype={
l:function(a,b,c){H.z(b,H.v(this,0))
H.z(c,H.v(this,1))
throw H.c(P.E("Cannot modify unmodifiable map"))}}
P.fY.prototype={
j:function(a,b){return J.kz(this.a,b)},
l:function(a,b,c){J.jV(this.a,H.z(b,H.v(this,0)),H.z(c,H.v(this,1)))},
J:function(a,b){J.kA(this.a,H.n(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gk:function(a){return J.aD(this.a)},
i:function(a){return J.as(this.a)},
$iC:1}
P.dX.prototype={}
P.jb.prototype={
i:function(a){return P.k2(this,"{","}")},
H:function(a,b){var u,t,s,r=this
P.kY(b,"index")
for(u=P.li(r,r.r,H.v(r,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.c(P.V(b,r,"index",null,t))},
$ih:1,
$il0:1}
P.eh.prototype={}
P.eK.prototype={}
P.f7.prototype={
iR:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bz(a0,a1,b.length)
u=$.m4()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jI(C.b.F(b,n))
j=H.jI(C.b.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.f(u,i)
h=u[i]
if(h>=0){i=C.b.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ak("")
g=r.a+=C.b.u(b,s,t)
r.a=g+H.dD(m)
s=n
continue}}throw H.c(P.a2("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.u(b,s,a1)
f=g.length
if(q>=0)P.kC(b,p,a1,q,o,f)
else{e=C.f.b4(f-1,4)+1
if(e===1)throw H.c(P.a2(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aQ(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kC(b,p,a1,q,o,d)
else{e=C.f.b4(d,4)
if(e===1)throw H.c(P.a2(c,b,a1))
if(e>1)b=C.b.aQ(b,a1,a1,e===2?"==":"=")}return b},
$abH:function(){return[[P.b,P.p],P.i]}}
P.f8.prototype={
$abL:function(){return[[P.b,P.p],P.i]}}
P.bH.prototype={}
P.bL.prototype={}
P.fw.prototype={
$abH:function(){return[P.i,[P.b,P.p]]}}
P.ir.prototype={
giD:function(){return C.L}}
P.it.prototype={
cb:function(a){var u,t,s=P.bz(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jr(u)
if(t.fh(a,0,s)!==s)t.dk(J.ma(a,s-1),0)
return new Uint8Array(u.subarray(0,H.np(0,t.b,u.length)))},
$abL:function(){return[P.i,[P.b,P.p]]}}
P.jr.prototype={
dk:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fh:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.W(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dk(r,C.b.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.is.prototype={
cb:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.p],"$ab")
u=P.mZ(!1,a,0,null)
if(u!=null)return u
t=P.bz(0,null,J.aD(a))
s=P.lu(a,0,t)
if(s>0){r=P.cy(a,0,s)
if(s===t)return r
q=new P.ak(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ak("")
n=new P.jq(!1,q)
n.c=o
n.iu(a,p,t)
if(n.e>0){H.r(P.a2("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.dD(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abL:function(){return[[P.b,P.p],P.i]}}
P.jq.prototype={
iu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.d0(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bz()
if((o&192)!==128){n=P.a2(h+C.f.b1(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.f(C.x,n)
if(u<=C.x[n]){n=P.a2("Overlong encoding of 0x"+C.f.b1(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a2("Character outside valid Unicode range: 0x"+C.f.b1(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.dD(u)
i.c=!1}for(n=p<c;n;){m=P.lu(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cy(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.T()
if(o<0){j=P.a2("Negative UTF-8 code unit: -0x"+C.f.b1(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a2(h+C.f.b1(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.X.prototype={}
P.at.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.at&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.f.aJ(u,30))&1073741823},
i:function(a){var u=this,t=P.mj(H.mK(u)),s=P.dc(H.mI(u)),r=P.dc(H.mE(u)),q=P.dc(H.mF(u)),p=P.dc(H.mH(u)),o=P.dc(H.mJ(u)),n=P.mk(H.mG(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.y.prototype={}
P.bp.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bp&&this.a===b.a},
gG:function(a){return C.f.gG(this.a)},
i:function(a){var u,t,s,r=new P.fu(),q=this.a
if(q<0)return"-"+new P.bp(0-q).i(0)
u=r.$1(C.f.a1(q,6e7)%60)
t=r.$1(C.f.a1(q,1e6)%60)
s=new P.ft().$1(q%1e6)
return""+C.f.a1(q,36e8)+":"+H.m(u)+":"+H.m(t)+"."+H.m(s)}}
P.ft.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.fu.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bq.prototype={}
P.f1.prototype={
i:function(a){return"Assertion failed"}}
P.dA.prototype={
i:function(a){return"Throw of null."}}
P.aR.prototype={
gbK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbJ:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbK()+o+u
if(!q.a)return t
s=q.gbJ()
r=P.dh(q.b)
return t+s+": "+r}}
P.bT.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.m(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.m(s)
else if(t>s)u=": Not in range "+H.m(s)+".."+H.m(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.m(s)}return u}}
P.fJ.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var u,t=H.ad(this.b)
if(typeof t!=="number")return t.T()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.m(u)},
gk:function(a){return this.f}}
P.ij.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ig.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hJ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fg.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dh(u)+"."}}
P.hl.prototype={
i:function(a){return"Out of Memory"},
$ibq:1}
P.dK.prototype={
i:function(a){return"Stack Overflow"},
$ibq:1}
P.fo.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ea.prototype={
i:function(a){return"Exception: "+this.a}}
P.fG.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.F(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.W(f,q)
if(p===10||p===13){o=q
break}}if(o-s>78)if(g-s<75){n=s+75
m=s
l=""
k="..."}else{if(o-g<75){m=o-75
n=o
k=""}else{m=g-36
n=g+36
k="..."}l="..."}else{n=o
m=s
l=""
k=""}j=C.b.u(f,m,n)
return h+l+j+k+"\n"+C.b.n(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.m(g)+")"):h}}
P.p.prototype={}
P.h.prototype={
gk:function(a){var u,t=this.gX(this)
for(u=0;t.w();)++u
return u},
H:function(a,b){var u,t,s
P.kY(b,"index")
for(u=this.gX(this),t=0;u.w();){s=u.gK(u)
if(b===t)return s;++t}throw H.c(P.V(b,this,"index",null,t))},
i:function(a){return P.mp(this,"(",")")}}
P.aV.prototype={}
P.b.prototype={$ih:1}
P.C.prototype={}
P.J.prototype={
gG:function(a){return P.S.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a8.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
q:function(a,b){return this===b},
gG:function(a){return H.cu(this)},
i:function(a){return"Instance of '"+H.bS(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.i.prototype={$ikS:1}
P.ak.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iob:1}
P.ip.prototype={
$2:function(a,b){var u,t,s,r=P.i
H.l(a,"$iC",[r,r],"$aC")
H.L(b)
u=J.ks(b).dX(b,"=")
if(u===-1){if(b!=="")J.jV(a,P.kj(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.u(b,0,u)
s=C.b.ar(b,u+1)
r=this.a
J.jV(a,P.kj(t,0,t.length,r,!0),P.kj(s,0,s.length,r,!0))}return a},
$S:34}
P.il.prototype={
$2:function(a,b){throw H.c(P.a2("Illegal IPv4 address, "+a,this.a,b))},
$S:37}
P.im.prototype={
$2:function(a,b){throw H.c(P.a2("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:44}
P.io.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eX(C.b.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.T()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:46}
P.bW.prototype={
gen:function(){return this.b},
gcm:function(a){var u=this.c
if(u==null)return""
if(C.b.a3(u,"["))return C.b.u(u,1,u.length-1)
return u},
gbv:function(a){var u=this.d
if(u==null)return P.lj(this.a)
return u},
gcw:function(a){var u=this.f
return u==null?"":u},
gdS:function(){var u=this.r
return u==null?"":u},
ec:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.l(b,"$iC",[P.i,null],"$aC")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a3(p,"/"))p="/"+p
n=P.ki(null,0,0,b)
return new P.bW(u,s,q,r,p,n,m.r)},
gbw:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.i
s.sho(new P.dX(P.l9(u==null?"":u),[t,t]))}return s.Q},
gdT:function(){return this.c!=null},
gdW:function(){return this.f!=null},
gdU:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.m(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.m(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.m(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.U(b).$ikc)if(s.a==b.gbB())if(s.c!=null===b.gdT())if(s.b==b.gen())if(s.gcm(s)==b.gcm(b))if(s.gbv(s)==b.gbv(b))if(s.e===b.ge7(b)){u=s.f
t=u==null
if(!t===b.gdW()){if(t)u=""
if(u===b.gcw(b)){u=s.r
t=u==null
if(!t===b.gdU()){if(t)u=""
u=u===b.gdS()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.b.gG(this.i(0)):u},
sho:function(a){var u=P.i
this.Q=H.l(a,"$iC",[u,u],"$aC")},
$ikc:1,
gbB:function(){return this.a},
ge7:function(a){return this.e}}
P.jl.prototype={
$1:function(a){throw H.c(P.a2("Invalid port",this.a,this.b+1))},
$S:45}
P.jm.prototype={
$1:function(a){return P.jp(C.T,a,C.l,!1)},
$S:41}
P.jo.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.jp(C.q,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.jp(C.q,b,C.l,!0))}},
$S:17}
P.jn.prototype={
$2:function(a,b){var u,t
H.L(a)
if(b==null||typeof b==="string")this.a.$2(a,H.L(b))
else for(u=J.bD(H.lG(b,"$ih")),t=this.a;u.w();)t.$2(a,H.L(u.gK(u)))},
$S:29}
P.ik.prototype={
gem:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.f(o,0)
u=q.a
o=o[0]+1
t=C.b.dY(u,"?",o)
s=u.length
if(t>=0){r=P.cX(u,t+1,s,C.o,!1)
s=t}else r=p
return q.c=new P.iP("data",p,p,p,P.cX(u,o,s,C.z,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.f(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jw.prototype={
$1:function(a){return new Uint8Array(96)},
$S:27}
P.jv.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.f(u,a)
u=u[a]
J.mb(u,0,96,b)
return u},
$S:31}
P.jx.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.F(b,s)^96
if(r>=t)return H.f(a,r)
a[r]=c}}}
P.jy.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.F(b,0),t=C.b.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.f(a,r)
a[r]=c}}}
P.jc.prototype={
gdT:function(){return this.c>0},
gdV:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.C()
t=this.e
if(typeof t!=="number")return H.u(t)
t=u+1<t
u=t}else u=!1
return u},
gdW:function(){var u=this.f
if(typeof u!=="number")return u.T()
return u<this.r},
gdU:function(){return this.r<this.a.length},
gd3:function(){return this.b===4&&C.b.a3(this.a,"http")},
gd4:function(){return this.b===5&&C.b.a3(this.a,"https")},
gbB:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd3())q=t.x="http"
else if(t.gd4()){t.x="https"
q="https"}else if(q===4&&C.b.a3(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a3(t.a,r)){t.x=r
q=r}else{q=C.b.u(t.a,0,q)
t.x=q}return q},
gen:function(){var u=this.c,t=this.b+3
return u>t?C.b.u(this.a,t,u-1):""},
gcm:function(a){var u=this.c
return u>0?C.b.u(this.a,u,this.d):""},
gbv:function(a){var u,t=this
if(t.gdV()){u=t.d
if(typeof u!=="number")return u.C()
return P.eX(C.b.u(t.a,u+1,t.e),null,null)}if(t.gd3())return 80
if(t.gd4())return 443
return 0},
ge7:function(a){return C.b.u(this.a,this.e,this.f)},
gcw:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.T()
return u<t?C.b.u(this.a,u+1,t):""},
gdS:function(){var u=this.r,t=this.a
return u<t.length?C.b.ar(t,u+1):""},
gbw:function(){var u=this,t=u.f
if(typeof t!=="number")return t.T()
if(t>=u.r)return C.U
t=P.i
return new P.dX(P.l9(u.gcw(u)),[t,t])},
ec:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iC",[P.i,null],"$aC")
u=k.gbB()
t=u==="file"
s=k.c
r=s>0?C.b.u(k.a,k.b+3,s):""
q=k.gdV()?k.gbv(k):j
s=k.c
if(s>0)p=C.b.u(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.u(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a3(o,"/"))o="/"+o
m=P.ki(j,0,0,b)
n=k.r
l=n<s.length?C.b.ar(s,n+1):j
return new P.bW(u,r,p,q,o,m,l)},
gG:function(a){var u=this.y
return u==null?this.y=C.b.gG(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ikc&&this.a===b.i(0)},
i:function(a){return this.a},
$ikc:1}
P.iP.prototype={}
W.t.prototype={}
W.eY.prototype={
gk:function(a){return a.length}}
W.f_.prototype={
i:function(a){return String(a)}}
W.f0.prototype={
i:function(a){return String(a)}}
W.bF.prototype={$ibF:1}
W.bG.prototype={
cD:function(a,b,c){if(c!=null)return a.getContext(b,P.nD(c))
return a.getContext(b)},
ep:function(a,b){return this.cD(a,b,null)},
$ibG:1}
W.c9.prototype={$ic9:1}
W.bn.prototype={
gk:function(a){return a.length}}
W.cd.prototype={$icd:1}
W.fk.prototype={
gk:function(a){return a.length}}
W.T.prototype={$iT:1}
W.ce.prototype={
gk:function(a){return a.length}}
W.fl.prototype={}
W.aT.prototype={}
W.aU.prototype={}
W.fm.prototype={
gk:function(a){return a.length}}
W.fn.prototype={
gk:function(a){return a.length}}
W.fp.prototype={
gk:function(a){return a.length}}
W.dd.prototype={$idd:1}
W.fq.prototype={
i:function(a){return String(a)}}
W.de.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.l(c,"$iai",[P.a8],"$aai")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.ai,P.a8]]},
$ax:function(){return[[P.ai,P.a8]]},
$ih:1,
$ah:function(){return[[P.ai,P.a8]]},
$ib:1,
$ab:function(){return[[P.ai,P.a8]]},
$aB:function(){return[[P.ai,P.a8]]}}
W.df.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaB(a))+" x "+H.m(this.gay(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iai)return!1
return a.left===u.gbu(b)&&a.top===u.gby(b)&&this.gaB(a)===u.gaB(b)&&this.gay(a)===u.gay(b)},
gG:function(a){return W.lh(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(this.gaB(a)),C.j.gG(this.gay(a)))},
gdr:function(a){return a.bottom},
gay:function(a){return a.height},
gbu:function(a){return a.left},
gbx:function(a){return a.right},
gby:function(a){return a.top},
gaB:function(a){return a.width},
$iai:1,
$aai:function(){return[P.a8]}}
W.fr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.L(c)
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.i]},
$ax:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aB:function(){return[P.i]}}
W.fs.prototype={
gk:function(a){return a.length}}
W.iN.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.e(u[b],"$ia1")},
l:function(a,b,c){var u
H.e(c,"$ia1")
u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var u=this.ji(this)
return new J.ap(u,u.length,[H.v(u,0)])},
$ax:function(){return[W.a1]},
$ah:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
W.a1.prototype={
gca:function(a){return new W.iN(a,a.children)},
gds:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.T()
if(s<0)s=-s*0
if(typeof r!=="number")return r.T()
if(r<0)r=-r*0
return new P.ai(u,t,s,r,[P.a8])},
i:function(a){return a.localName},
$ia1:1}
W.o.prototype={$io:1}
W.j.prototype={
io:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.eX(a,b,c,!1)},
eX:function(a,b,c,d){return a.addEventListener(b,H.c_(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ij:1}
W.aw.prototype={$iaw:1}
W.cf.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaw")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aw]},
$ax:function(){return[W.aw]},
$ih:1,
$ah:function(){return[W.aw]},
$ib:1,
$ab:function(){return[W.aw]},
$icf:1,
$aB:function(){return[W.aw]}}
W.fB.prototype={
gk:function(a){return a.length}}
W.fF.prototype={
gk:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.fI.prototype={
gk:function(a){return a.length}}
W.bO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iG")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.G]},
$ax:function(){return[W.G]},
$ih:1,
$ah:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ibO:1,
$aB:function(){return[W.G]}}
W.b9.prototype={$ib9:1,
gdt:function(a){return a.data}}
W.ci.prototype={$ici:1}
W.cj.prototype={$icj:1,$ica:1}
W.ca.prototype={$ia1:1,$ij:1,$iG:1}
W.aX.prototype={$iaX:1}
W.fU.prototype={
i:function(a){return String(a)}}
W.h6.prototype={
gk:function(a){return a.length}}
W.cn.prototype={$icn:1}
W.h7.prototype={
j:function(a,b){return P.bg(a.get(H.L(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bg(t.value[1]))}},
gao:function(a){var u=H.d([],[P.i])
this.J(a,new W.h8(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aaf:function(){return[P.i,null]},
$iC:1,
$aC:function(){return[P.i,null]}}
W.h8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.h9.prototype={
j:function(a,b){return P.bg(a.get(H.L(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bg(t.value[1]))}},
gao:function(a){var u=H.d([],[P.i])
this.J(a,new W.ha(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aaf:function(){return[P.i,null]},
$iC:1,
$aC:function(){return[P.i,null]}}
W.ha.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aH.prototype={$iaH:1}
W.hb.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaH")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aH]},
$ax:function(){return[W.aH]},
$ih:1,
$ah:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aB:function(){return[W.aH]}}
W.ab.prototype={$iab:1}
W.iM.prototype={
l:function(a,b,c){var u,t
H.e(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gX:function(a){var u=this.a.childNodes
return new W.dj(u,u.length,[H.c2(C.V,u,"B",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ax:function(){return[W.G]},
$ah:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
ja:function(a,b){var u,t
try{u=a.parentNode
J.m8(u,b,a)}catch(t){H.aC(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eu(a):u},
hs:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iG")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.G]},
$ax:function(){return[W.G]},
$ih:1,
$ah:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aB:function(){return[W.G]}}
W.aI.prototype={$iaI:1,
gk:function(a){return a.length}}
W.hn.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaI")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aI]},
$ax:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aB:function(){return[W.aI]}}
W.hv.prototype={
j:function(a,b){return P.bg(a.get(H.L(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bg(t.value[1]))}},
gao:function(a){var u=H.d([],[P.i])
this.J(a,new W.hw(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aaf:function(){return[P.i,null]},
$iC:1,
$aC:function(){return[P.i,null]}}
W.hw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hy.prototype={
gk:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.hG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaJ")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aJ]},
$ax:function(){return[W.aJ]},
$ih:1,
$ah:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aB:function(){return[W.aJ]}}
W.aK.prototype={$iaK:1}
W.hH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaK")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aK]},
$ax:function(){return[W.aK]},
$ih:1,
$ah:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aB:function(){return[W.aK]}}
W.aL.prototype={$iaL:1,
gk:function(a){return a.length}}
W.hL.prototype={
j:function(a,b){return a.getItem(H.L(b))},
l:function(a,b,c){a.setItem(b,c)},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gao:function(a){var u=H.d([],[P.i])
this.J(a,new W.hM(u))
return u},
gk:function(a){return a.length},
$aaf:function(){return[P.i,P.i]},
$iC:1,
$aC:function(){return[P.i,P.i]}}
W.hM.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:17}
W.ax.prototype={$iax:1}
W.bf.prototype={$ibf:1}
W.aM.prototype={$iaM:1}
W.ay.prototype={$iay:1}
W.hT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iay")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.ay]},
$ax:function(){return[W.ay]},
$ih:1,
$ah:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$aB:function(){return[W.ay]}}
W.hU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaM")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aM]},
$ax:function(){return[W.aM]},
$ih:1,
$ah:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aB:function(){return[W.aM]}}
W.hZ.prototype={
gk:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.aO.prototype={$iaO:1}
W.i1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaN")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aN]},
$ax:function(){return[W.aN]},
$ih:1,
$ah:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aB:function(){return[W.aN]}}
W.i2.prototype={
gk:function(a){return a.length}}
W.bA.prototype={}
W.iq.prototype={
i:function(a){return String(a)}}
W.iD.prototype={
gk:function(a){return a.length}}
W.b5.prototype={
giz:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.E("deltaY is not supported"))},
giy:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.E("deltaX is not supported"))},
$ib5:1}
W.cL.prototype={
ht:function(a,b){return a.requestAnimationFrame(H.c_(H.n(b,{func:1,ret:-1,args:[P.a8]}),1))},
fb:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iT")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.T]},
$ax:function(){return[W.T]},
$ih:1,
$ah:function(){return[W.T]},
$ib:1,
$ab:function(){return[W.T]},
$aB:function(){return[W.T]}}
W.e5.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iai)return!1
return a.left===u.gbu(b)&&a.top===u.gby(b)&&a.width===u.gaB(b)&&a.height===u.gay(b)},
gG:function(a){return W.lh(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
gay:function(a){return a.height},
gaB:function(a){return a.width}}
W.j1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaE")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ih:1,
$ah:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aB:function(){return[W.aE]}}
W.em.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iG")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.G]},
$ax:function(){return[W.G]},
$ih:1,
$ah:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aB:function(){return[W.G]}}
W.jd.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaL")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aL]},
$ax:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aB:function(){return[W.aL]}}
W.jh.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iax")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.ax]},
$ax:function(){return[W.ax]},
$ih:1,
$ah:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$aB:function(){return[W.ax]}}
W.iQ.prototype={}
W.kg.prototype={}
W.iR.prototype={}
W.iS.prototype={
$1:function(a){return this.a.$1(H.e(a,"$io"))},
$S:35}
W.B.prototype={
gX:function(a){return new W.dj(a,this.gk(a),[H.c2(this,a,"B",0)])}}
W.dj.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd2(J.kz(u.a,t))
u.c=t
return!0}u.sd2(null)
u.c=s
return!1},
gK:function(a){return this.d},
sd2:function(a){this.d=H.z(a,H.v(this,0))},
$iaV:1}
W.e4.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ez.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.cU.prototype={}
W.cV.prototype={}
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
P.je.prototype={
dR:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cB:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.U(a)
if(!!u.$iat)return new Date(a.a)
if(!!u.$imO)throw H.c(P.ih("structured clone of RegExp"))
if(!!u.$iaw)return a
if(!!u.$ibF)return a
if(!!u.$icf)return a
if(!!u.$ib9)return a
if(!!u.$ico||!!u.$ibw||!!u.$icn)return a
if(!!u.$iC){t=q.dR(a)
s=q.b
if(t>=s.length)return H.f(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.l(s,t,r)
u.J(a,new P.jg(p,q))
return p.a}if(!!u.$ib){t=q.dR(a)
p=q.b
if(t>=p.length)return H.f(p,t)
r=p[t]
if(r!=null)return r
return q.iw(a,t)}throw H.c(P.ih("structured clone of other type"))},
iw:function(a,b){var u,t=J.d0(a),s=t.gk(a),r=new Array(s)
C.a.l(this.b,b,r)
for(u=0;u<s;++u)C.a.l(r,u,this.cB(t.j(a,u)))
return r}}
P.jg.prototype={
$2:function(a,b){this.a.a[a]=this.b.cB(b)},
$S:5}
P.eJ.prototype={$ib9:1,
gdt:function(a){return this.a}}
P.jC.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.jf.prototype={}
P.fC.prototype={
gb8:function(){var u=this.b,t=H.av(u,"x",0),s=W.a1
return new H.fZ(new H.iF(u,H.n(new P.fD(),{func:1,ret:P.X,args:[t]}),[t]),H.n(new P.fE(),{func:1,ret:s,args:[t]}),[t,s])},
l:function(a,b,c){var u
H.e(c,"$ia1")
u=this.gb8()
J.mc(u.b.$1(J.jW(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aD(this.gb8().a)},
j:function(a,b){var u=this.gb8()
return u.b.$1(J.jW(u.a,b))},
gX:function(a){var u=P.kK(this.gb8(),!1,W.a1)
return new J.ap(u,u.length,[H.v(u,0)])},
$ax:function(){return[W.a1]},
$ah:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
P.fD.prototype={
$1:function(a){return!!J.U(H.e(a,"$iG")).$ia1},
$S:39}
P.fE.prototype={
$1:function(a){return H.k(H.e(a,"$iG"),"$ia1")},
$S:40}
P.j6.prototype={
gbx:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.u(t)
return H.z(u+t,H.v(this,0))},
gdr:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.u(t)
return H.z(u+t,H.v(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.m(u.a)+", "+H.m(u.b)+") "+H.m(u.c)+" x "+H.m(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$iai){t=p.a
if(t==u.gbu(b)){s=p.b
if(s==u.gby(b)){r=p.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.u(r)
q=H.v(p,0)
if(H.z(t+r,q)===u.gbx(b)){t=p.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.u(t)
u=H.z(s+t,q)===u.gdr(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.d3(s),q=t.b,p=J.d3(q),o=t.c
if(typeof s!=="number")return s.C()
if(typeof o!=="number")return H.u(o)
u=H.v(t,0)
o=C.f.gG(H.z(s+o,u))
s=t.d
if(typeof q!=="number")return q.C()
if(typeof s!=="number")return H.u(s)
u=C.f.gG(H.z(q+s,u))
return P.n9(P.j3(P.j3(P.j3(P.j3(0,r),p),o),u))}}
P.ai.prototype={
gbu:function(a){return this.a},
gby:function(a){return this.b},
gaB:function(a){return this.c},
gay:function(a){return this.d}}
P.aY.prototype={$iaY:1}
P.fO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.e(c,"$iaY")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ax:function(){return[P.aY]},
$ih:1,
$ah:function(){return[P.aY]},
$ib:1,
$ab:function(){return[P.aY]},
$aB:function(){return[P.aY]}}
P.b0.prototype={$ib0:1}
P.hj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.e(c,"$ib0")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b0]},
$ih:1,
$ah:function(){return[P.b0]},
$ib:1,
$ab:function(){return[P.b0]},
$aB:function(){return[P.b0]}}
P.hp.prototype={
gk:function(a){return a.length}}
P.hR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.L(c)
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ax:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aB:function(){return[P.i]}}
P.q.prototype={
gca:function(a){return new P.fC(a,new W.iM(a))}}
P.b2.prototype={$ib2:1}
P.i3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.e(c,"$ib2")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b2]},
$ih:1,
$ah:function(){return[P.b2]},
$ib:1,
$ab:function(){return[P.b2]},
$aB:function(){return[P.b2]}}
P.ef.prototype={}
P.eg.prototype={}
P.ep.prototype={}
P.eq.prototype={}
P.eA.prototype={}
P.eB.prototype={}
P.eH.prototype={}
P.eI.prototype={}
P.P.prototype={$ih:1,
$ah:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$imW:1}
P.f3.prototype={
gk:function(a){return a.length}}
P.f4.prototype={
j:function(a,b){return P.bg(a.get(H.L(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bg(t.value[1]))}},
gao:function(a){var u=H.d([],[P.i])
this.J(a,new P.f5(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aaf:function(){return[P.i,null]},
$iC:1,
$aC:function(){return[P.i,null]}}
P.f5.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f6.prototype={
gk:function(a){return a.length}}
P.bE.prototype={}
P.hk.prototype={
gk:function(a){return a.length}}
P.e3.prototype={}
P.d6.prototype={$id6:1}
P.dE.prototype={$idE:1}
P.bU.prototype={
jf:function(a,b,c,d,e,f,g){var u,t=J.U(g)
if(!!t.$ib9)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.nE(g))
return}if(!!t.$ici)t=!0
else t=!1
if(t){this.hK(a,b,c,d,e,f,g)
return}throw H.c(P.d4("Incorrect number or type of arguments"))},
hK:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
N:function(a,b,c){return a.uniform1f(b,c)},
Z:function(a,b,c){return a.uniform1i(b,c)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ek:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
el:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibU:1}
P.dH.prototype={$idH:1}
P.dM.prototype={$idM:1}
P.dV.prototype={$idV:1}
P.hI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return P.bg(a.item(b))},
l:function(a,b,c){H.e(c,"$iC")
throw H.c(P.E("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ax:function(){return[[P.C,,,]]},
$ih:1,
$ah:function(){return[[P.C,,,]]},
$ib:1,
$ab:function(){return[[P.C,,,]]},
$aB:function(){return[[P.C,,,]]}}
P.ew.prototype={}
P.ex.prototype={}
O.Z.prototype={
b6:function(a){var u=this
u.sfn(H.d([],[a]))
u.sd9(null)
u.sd6(null)
u.sda(null)},
bC:function(a,b,c){var u=this,t=H.av(u,"Z",0)
H.n(b,{func:1,ret:P.X,args:[[P.h,t]]})
t={func:1,ret:-1,args:[P.p,[P.h,t]]}
H.n(a,t)
H.n(c,t)
u.sd9(b)
u.sd6(a)
u.sda(c)},
b5:function(a,b){return this.bC(a,null,b)},
bU:function(a){var u
H.l(a,"$ih",[H.av(this,"Z",0)],"$ah")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cH:function(a,b){var u
H.l(b,"$ih",[H.av(this,"Z",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.ap(u,u.length,[H.v(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.av(s,"Z",0)
H.z(b,r)
r=[r]
if(H.D(s.bU(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cH(t,H.d([b],r))}},
c1:function(a,b){var u,t,s=this
H.l(b,"$ih",[H.av(s,"Z",0)],"$ah")
if(H.D(s.bU(b))){u=s.a
t=u.length
C.a.c1(u,b)
s.cH(t,b)}},
sfn:function(a){this.a=H.l(a,"$ib",[H.av(this,"Z",0)],"$ab")},
sd9:function(a){this.b=H.n(a,{func:1,ret:P.X,args:[[P.h,H.av(this,"Z",0)]]})},
sd6:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.p,[P.h,H.av(this,"Z",0)]]})},
sda:function(a){H.n(a,{func:1,ret:-1,args:[P.p,[P.h,H.av(this,"Z",0)]]})},
$ih:1}
O.cm.prototype={
gk:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.R():u},
aC:function(){var u=this.b
if(u!=null)u.B(null)},
gR:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.dw()},
ea:function(a){var u=this.a
if(a==null)C.a.h(u,V.dw())
else C.a.h(u,a)
this.aC()},
cv:function(){var u=this.a
if(u.length>0){u.pop()
this.aC()}},
sbN:function(a){this.a=H.l(a,"$ib",[V.aa],"$ab")}}
E.f9.prototype={}
E.am.prototype={
cQ:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ap(u,u.length,[H.v(u,0)]);u.w();){t=u.d
if(t.f==null)t.cQ()}},
sbD:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().Y(0,s.ge3())
u=s.c
if(u!=null)u.gp().h(0,s.ge3())
t=new D.H("shape",r,s.c,[F.dI])
t.b=!0
s.ah(t)}},
scA:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gp().Y(0,s.ge5())
u=s.f
s.f=a
if(a!=null)a.gp().h(0,s.ge5())
s.cQ()
t=new D.H("technique",u,s.f,[O.bV])
t.b=!0
s.ah(t)}},
saO:function(a){var u,t,s=this
if(!J.Y(s.r,a)){u=s.r
if(u!=null)u.gp().Y(0,s.ge1())
if(a!=null)a.gp().h(0,s.ge1())
s.r=a
t=new D.H("mover",u,a,[U.a6])
t.b=!0
s.ah(t)}},
ad:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aA(0,b,s):null
if(!J.Y(q,s.x)){u=s.x
s.x=q
t=new D.H("matrix",u,q,[V.aa])
t.b=!0
s.ah(t)}r=s.f
if(r!=null)r.ad(0,b)
for(r=s.y.a,r=new J.ap(r,r.length,[H.v(r,0)]);r.w();)r.d.ad(0,b)},
aP:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gR(s))
else C.a.h(s.a,r.n(0,s.gR(s)))
s.aC()
a.eb(t.f)
s=a.dy
u=(s&&C.a).gaz(s)
if(u!=null&&t.d!=null)u.j9(a,t)
for(s=t.y.a,s=new J.ap(s,s.length,[H.v(s,0)]);s.w();)s.d.aP(a)
a.e9()
a.dx.cv()},
gp:function(){var u=this.z
return u==null?this.z=D.R():u},
ah:function(a){var u=this.z
if(u!=null)u.B(a)},
a2:function(){return this.ah(null)},
e4:function(a){H.e(a,"$iA")
this.e=null
this.ah(a)},
iY:function(){return this.e4(null)},
e6:function(a){this.ah(H.e(a,"$iA"))},
iZ:function(){return this.e6(null)},
e2:function(a){this.ah(H.e(a,"$iA"))},
iX:function(){return this.e2(null)},
e0:function(a){this.ah(H.e(a,"$iA"))},
iU:function(){return this.e0(null)},
iT:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ih",[E.am],"$ah")
for(u=b.length,t=this.ge_(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bM()
o.sae(null)
o.saU(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sae(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
iW:function(a,b){var u,t
H.l(b,"$ih",[E.am],"$ah")
for(u=b.gX(b),t=this.ge_();u.w();)u.gK(u).gp().Y(0,t)
this.a2()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seD:function(a,b){this.y=H.l(b,"$iZ",[E.am],"$aZ")},
$ibd:1}
E.hr.prototype={
ez:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.at(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cm()
t=[V.aa]
u.sbN(H.d([],t))
u.b=null
u.gp().h(0,new E.hs(s))
s.cy=u
u=new O.cm()
u.sbN(H.d([],t))
u.b=null
u.gp().h(0,new E.ht(s))
s.db=u
u=new O.cm()
u.sbN(H.d([],t))
u.b=null
u.gp().h(0,new E.hu(s))
s.dx=u
s.shJ(H.d([],[O.bV]))
u=s.dy;(u&&C.a).h(u,null)
s.shF(new H.aF([P.i,A.cv]))},
gj7:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gR(s)
u=t.db
u=t.z=s.n(0,u.gR(u))
s=u}return s},
eb:function(a){var u=this.dy,t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
e9:function(){var u=this.dy
if(u.length>1)u.pop()},
shJ:function(a){this.dy=H.l(a,"$ib",[O.bV],"$ab")},
shF:function(a){this.fr=H.l(a,"$iC",[P.i,A.cv],"$aC")}}
E.hs.prototype={
$1:function(a){var u
H.e(a,"$iA")
u=this.a
u.ch=u.z=null},
$S:8}
E.ht.prototype={
$1:function(a){var u
H.e(a,"$iA")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.hu.prototype={
$1:function(a){var u
H.e(a,"$iA")
u=this.a
u.cx=u.ch=null},
$S:8}
E.dR.prototype={
cK:function(a){H.e(a,"$iA")
this.ed()},
cJ:function(){return this.cK(null)},
giH:function(){var u,t=this,s=Date.now(),r=C.f.a1(P.kG(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.at(s,!1)
return u/r},
de:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.u(r)
u=C.j.cl(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.n()
t=C.j.cl(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.l4(C.r,s.gjb())}},
ed:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.hY(this),{func:1,ret:-1,args:[P.a8]})
C.C.fb(u)
C.C.ht(u,W.lx(t,P.a8))}},
j8:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.de()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.at(r,!1)
s.y=P.kG(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aC()
r=s.db
C.a.sk(r.a,0)
r.aC()
r=s.dx
C.a.sk(r.a,0)
r.aC()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.aP(p.e)}}catch(q){u=H.aC(q)
t=H.c3(q)
P.kw("Error: "+H.m(u))
P.kw("Stack: "+H.m(t))
throw H.c(u)}}}
E.hY.prototype={
$1:function(a){var u
H.nW(a)
u=this.a
if(u.ch){u.ch=!1
u.j8()}},
$S:28}
Z.e1.prototype={$io3:1}
Z.d7.prototype={
c5:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aC(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.m(u.e)+"]"}}
Z.iE.prototype={$io4:1}
Z.d8.prototype={
aL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
c5:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].c5(a)},
jl:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aP:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.i],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.as(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.v(p,", ")+"\nAttrs:   "+C.a.v(r,", ")},
sfj:function(a){this.b=H.l(a,"$ib",[Z.br],"$ab")},
$ioc:1}
Z.br.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bS(this.c)+"'")+"]"}}
Z.b4.prototype={
gcE:function(a){var u=this.a,t=(u&$.bk().a)!==0?3:0
if((u&$.bj().a)!==0)t+=3
if((u&$.bi().a)!==0)t+=3
if((u&$.bl().a)!==0)t+=2
if((u&$.bm().a)!==0)t+=3
if((u&$.d1().a)!==0)t+=3
if((u&$.d2().a)!==0)t+=4
if((u&$.c6().a)!==0)++t
return(u&$.bh().a)!==0?t+4:t},
iq:function(a){var u,t=$.bk(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bh()
if((s&t.a)!==0)if(u===a)return t
return $.m3()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b4))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.i]),t=this.a
if((t&$.bk().a)!==0)C.a.h(u,"Pos")
if((t&$.bj().a)!==0)C.a.h(u,"Norm")
if((t&$.bi().a)!==0)C.a.h(u,"Binm")
if((t&$.bl().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bm().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d1().a)!==0)C.a.h(u,"Clr3")
if((t&$.d2().a)!==0)C.a.h(u,"Clr4")
if((t&$.c6().a)!==0)C.a.h(u,"Weight")
if((t&$.bh().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.v(u,"|")}}
D.fc.prototype={}
D.bM.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.sae(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
Y:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.a9(u,b)
if(u===!0){u=s.a
t=(u&&C.a).Y(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.a9(u,b)
if(u===!0){u=s.b
t=(u&&C.a).Y(u,b)||t}return t},
B:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.A()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.J(P.kK(u,!0,{func:1,ret:-1,args:[D.A]}),new D.fz(q))
u=r.b
if(u!=null){r.saU(H.d([],[{func:1,ret:-1,args:[D.A]}]))
C.a.J(u,new D.fA(q))}return!0},
iB:function(){return this.B(null)},
aq:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}},
sae:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
saU:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.fz.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.fA.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.A.prototype={}
D.bs.prototype={}
D.bt.prototype={}
D.H.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.d9.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d9))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.ae.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ae))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.bQ.prototype={}
X.dq.prototype={
gaM:function(){var u=this.y
return u==null?this.y=D.R():u},
a7:function(a){this.h(0,new X.ae(a,new X.bc(!1,!1,!1)))},
cL:function(a){},
eH:function(a){var u,t,s
H.l(a,"$ih",[X.ae],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t){s=a[t]
if(C.a.a9(this.a,s))return!1}return!0},
eF:function(a,b){var u=X.ae
H.l(b,"$ih",[u],"$ah")
u=new D.bs([u])
u.b=!0
this.cL(u)},
eJ:function(a,b){var u=X.ae
H.l(b,"$ih",[u],"$ah")
u=new D.bt([u])
u.b=!0
this.cL(u)},
bG:function(a){var u,t=this
H.e(a,"$iA")
if(!t.r&&a instanceof X.bQ){u=a.c
if(C.a.a9(t.a,u)){t.r=!0
u=t.y
if(u!=null)u.B(a)}}},
bT:function(a){var u
H.e(a,"$iA")
if(this.r&&a instanceof X.bQ){u=a.c
if(C.a.a9(this.a,u))this.r=!1}},
am:function(a){var u,t,s=this
if(s.f!=null)return!1
s.f=a
u=a.b
t=u.b
if(t==null)t=u.b=D.R()
t.h(0,s.gbF())
t=u.a
u=t==null?u.a=D.R():t
u.h(0,s.gbS())
return!0},
$ah:function(){return[X.ae]},
$aZ:function(){return[X.ae]}}
X.fN.prototype={
j4:function(a){var u,t
this.d.h(0,a.a)
u=this.a
if(u==null)return!1
t=new X.bQ(a)
t.b=!0
return u.B(t)},
j0:function(a){var u,t
this.d.Y(0,a.a)
u=this.b
if(u==null)return!1
t=new X.bQ(a)
t.b=!0
return u.B(t)},
shn:function(a){this.d=H.l(a,"$il0",[P.p],"$al0")}}
X.dt.prototype={}
X.fV.prototype={
aT:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.n()
u=b.b
t=q.ch
if(typeof u!=="number")return u.n()
s=new V.ag(o.a+n*m,o.b+u*t)
t=q.a.gbc()
r=new X.bv(a,V.by(),q.x,t,s)
r.b=!0
q.z=new P.at(p,!1)
q.x=s
return r},
cu:function(a,b){this.r=a.a
return!1},
aZ:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eq()
if(typeof u!=="number")return u.bz()
this.r=(u&~t)>>>0
return!1},
aY:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aT(a,b))
return!0},
j5:function(a){return!1},
h_:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dt(c,r.a.gbc(),b)
s.b=!0
t.B(s)
r.y=new P.at(u,!1)
r.x=V.by()}}
X.bc.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bc))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.D(this.b)?"Alt+":""
return u+(H.D(this.c)?"Shift+":"")}}
X.bv.prototype={}
X.hc.prototype={
bL:function(a,b,c){var u=this,t=new P.at(Date.now(),!1),s=u.a.gbc(),r=new X.bv(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cu:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bL(a,b,!0))
return!0},
aZ:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eq()
if(typeof t!=="number")return t.bz()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bL(a,b,!0))
return!0},
aY:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bL(a,b,!1))
return!0},
j6:function(a,b){return!1}}
X.ho.prototype={}
X.dT.prototype={}
X.i0.prototype={
aT:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.ag],"$ab")
u=new P.at(Date.now(),!1)
t=a.length>0?a[0]:V.by()
s=q.a.gbc()
r=new X.dT(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j3:function(a){var u
H.l(a,"$ib",[V.ag],"$ab")
u=this.b
if(u==null)return!1
u.B(this.aT(a,!0))
return!0},
j1:function(a){var u
H.l(a,"$ib",[V.ag],"$ab")
u=this.c
if(u==null)return!1
u.B(this.aT(a,!0))
return!0},
j2:function(a){var u
H.l(a,"$ib",[V.ag],"$ab")
u=this.d
if(u==null)return!1
u.B(this.aT(a,!1))
return!0}}
X.dY.prototype={
gbc:function(){var u=this.a,t=C.m.gds(u).c
t.toString
u=C.m.gds(u).d
u.toString
return V.kZ(0,0,t,u)},
cY:function(a){var u=a.keyCode,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.ae(u,new X.bc(t,a.altKey,a.shiftKey))},
aI:function(a){if(!H.D(a.ctrlKey))H.D(a.metaKey)
a.shiftKey},
c_:function(a){if(!H.D(a.ctrlKey))H.D(a.metaKey)
a.shiftKey},
aw:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.A()
u=t.top
if(typeof r!=="number")return r.A()
return new V.ag(s-q,r-u)},
aV:function(a){return new V.a3(a.movementX,a.movementY)},
bW:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.ag])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
q=C.j.ai(r.pageX)
C.j.ai(r.pageY)
p=o.left
C.j.ai(r.pageX)
C.a.h(n,new V.ag(q-p,C.j.ai(r.pageY)-o.top))}return n},
at:function(a){var u=a.buttons,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.d9(u,new X.bc(t,a.altKey,a.shiftKey))},
bO:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.A()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.A()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fW:function(a){this.f=!0},
fK:function(a){this.f=!1},
fQ:function(a){H.e(a,"$iab")
if(H.D(this.f)&&this.bO(a))a.preventDefault()},
bT:function(a){var u
H.e(a,"$iaX")
if(!H.D(this.f))return
u=this.cY(a)
if(this.b.j4(u))a.preventDefault()},
bG:function(a){var u
H.e(a,"$iaX")
if(!H.D(this.f))return
u=this.cY(a)
if(this.b.j0(u))a.preventDefault()},
h1:function(a){var u,t,s,r,q=this
H.e(a,"$iab")
u=q.a
u.focus()
q.f=!0
q.aI(a)
if(H.D(q.x)){t=q.at(a)
s=q.aV(a)
if(q.d.cu(t,s))a.preventDefault()
return}if(H.D(q.r)){q.y=a
u.requestPointerLock()
return}t=q.at(a)
r=q.aw(a)
if(q.c.cu(t,r))a.preventDefault()},
h5:function(a){var u,t,s,r=this
H.e(a,"$iab")
r.aI(a)
u=r.at(a)
if(H.D(r.x)){t=r.aV(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aw(a)
if(r.c.aZ(u,s))a.preventDefault()},
fU:function(a){var u,t,s,r=this
H.e(a,"$iab")
if(!r.bO(a)){r.aI(a)
u=r.at(a)
if(H.D(r.x)){t=r.aV(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aw(a)
if(r.c.aZ(u,s))a.preventDefault()}},
h3:function(a){var u,t,s,r=this
H.e(a,"$iab")
r.aI(a)
u=r.at(a)
if(H.D(r.x)){t=r.aV(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aw(a)
if(r.c.aY(u,s))a.preventDefault()},
fS:function(a){var u,t,s,r=this
H.e(a,"$iab")
if(!r.bO(a)){r.aI(a)
u=r.at(a)
if(H.D(r.x)){t=r.aV(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aw(a)
if(r.c.aY(u,s))a.preventDefault()}},
h7:function(a){var u,t,s=this
H.e(a,"$ib5")
s.aI(a)
u=new V.a3((a&&C.B).giy(a),C.B.giz(a)).D(0,180)
if(H.D(s.x)){if(s.d.j5(u))a.preventDefault()
return}if(H.D(s.r))return
t=s.aw(a)
if(s.c.j6(u,t))a.preventDefault()},
h9:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.at(s.y)
t=s.aw(s.y)
s.d.h_(u,t,r)}},
hl:function(a){var u,t=this
H.e(a,"$iaO")
t.a.focus()
t.f=!0
t.c_(a)
u=t.bW(a)
if(t.e.j3(u))a.preventDefault()},
hh:function(a){var u
H.e(a,"$iaO")
this.c_(a)
u=this.bW(a)
if(this.e.j1(u))a.preventDefault()},
hj:function(a){var u
H.e(a,"$iaO")
this.c_(a)
u=this.bW(a)
if(this.e.j2(u))a.preventDefault()},
sfc:function(a){this.z=H.l(a,"$ib",[[P.cx,P.S]],"$ab")}}
D.bo.prototype={
gp:function(){var u=this.d
return u==null?this.d=D.R():u},
as:function(a){var u
H.e(a,"$iA")
u=this.d
if(u!=null)u.B(a)},
eM:function(){return this.as(null)},
$ia5:1,
$ibd:1}
D.a5.prototype={$ibd:1}
D.dr.prototype={
gp:function(){var u=this.Q
return u==null?this.Q=D.R():u},
as:function(a){var u=this.Q
if(u!=null)u.B(a)},
d8:function(a){var u
H.e(a,"$iA")
u=this.ch
if(u!=null)u.B(a)},
fZ:function(){return this.d8(null)},
hb:function(a){var u,t,s
H.l(a,"$ih",[D.a5],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t){s=a[t]
if(s==null||this.f6(s))return!1}return!0},
fE:function(a,b){var u,t,s,r,q,p,o,n=D.a5
H.l(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gd7(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=H.e(b[q],"$ia5")
if(p instanceof D.bo)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bM()
o.sae(null)
o.saU(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.sae(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bs([n])
n.b=!0
this.as(n)},
hf:function(a,b){var u,t,s,r=D.a5
H.l(b,"$ih",[r],"$ah")
for(u=b.gX(b),t=this.gd7();u.w();){s=u.gK(u)
C.a.Y(this.e,s)
s.gp().Y(0,t)}r=new D.bt([r])
r.b=!0
this.as(r)},
f6:function(a){var u=C.a.a9(this.e,a)
return u},
seK:function(a){this.e=H.l(a,"$ib",[D.bo],"$ab")},
seN:function(a){this.f=H.l(a,"$ib",[D.dC],"$ab")},
seO:function(a){this.r=H.l(a,"$ib",[D.dJ],"$ab")},
seP:function(a){this.x=H.l(a,"$ib",[D.dO],"$ab")},
seQ:function(a){this.y=H.l(a,"$ib",[D.dP],"$ab")},
seR:function(a){this.z=H.l(a,"$ib",[D.dQ],"$ab")},
$ah:function(){return[D.a5]},
$aZ:function(){return[D.a5]}}
D.dC.prototype={$ia5:1,$ibd:1}
D.dJ.prototype={$ia5:1,$ibd:1}
D.dO.prototype={$ia5:1,$ibd:1}
D.dP.prototype={$ia5:1,$ibd:1}
D.dQ.prototype={$ia5:1,$ibd:1}
V.a_.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.bI.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bI))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+", "+V.O(u.d,3,0)+"]"}}
V.fy.prototype={}
V.aG.prototype={
ac:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.y])
return t},
bt:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=i.e,f=i.y
if(typeof f!=="number")return H.u(f)
u=g*f
t=i.f
s=i.x
if(typeof s!=="number")return H.u(s)
r=i.d
q=i.b
p=q*f
o=i.c
n=s*o
m=i.r
l=q*t-g*o
if(typeof m!=="number")return m.n()
k=h*(u-t*s)-r*(p-n)+m*l
if(Math.abs(k-0)<$.I().a)return V.mA()
j=1/k
return new V.aG((u-s*t)*j,(n-p)*j,l*j,(m*t-r*f)*j,(h*f-m*o)*j,(r*o-h*t)*j,(r*s-m*g)*j,(m*q-h*s)*j,(h*g-r*q)*j)},
aR:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.u(o)
u=r.r
if(typeof u!=="number")return u.n()
t=r.x
if(typeof t!=="number")return t.n()
s=r.y
if(typeof s!=="number")return s.n()
return new V.Q(r.a*q+r.b*p+r.c*o,r.d*q+r.e*p+r.f*o,u*q+t*p+s*o)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aG))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
u=b.r
r=q.r
t.toString
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.y],o=V.c1(H.d([q.a,q.d,q.r],p),3,0),n=V.c1(H.d([q.b,q.e,q.x],p),3,0),m=V.c1(H.d([q.c,q.f,q.y],p),3,0)
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
V.aa.prototype={
ac:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.y])
return t},
bt:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
if(typeof b0!=="number")return b0.n()
u=e.z
t=e.cx
if(typeof u!=="number")return u.n()
s=b0*b1-u*t
r=e.db
q=e.Q
if(typeof q!=="number")return q.n()
p=b0*r-q*t
o=e.dx
n=e.ch
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a0*j-a3*k+a6*l+a7*m-a8*p+a9*s
if(Math.abs(i-0)<$.I().a)return V.dw()
h=1/i
g=-a
f=-t
return V.b_((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
n:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.u(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.u(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.u(m)
l=b3.db
k=b3.d
j=b3.x
i=b3.ch
h=b3.dx
g=a5.e
f=a5.f
e=a5.r
d=a5.x
c=a5.y
if(typeof c!=="number")return c.n()
b=a5.z
if(typeof b!=="number")return b.n()
a=a5.Q
if(typeof a!=="number")return a.n()
a0=a5.ch
a1=a5.cx
a2=a5.cy
a3=a5.db
a4=a5.dx
return V.b_(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
aR:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.u(o)
u=r.y
if(typeof u!=="number")return u.n()
t=r.z
if(typeof t!=="number")return t.n()
s=r.Q
if(typeof s!=="number")return s.n()
return new V.Q(r.a*q+r.b*p+r.c*o,r.e*q+r.f*p+r.r*o,u*q+t*p+s*o)},
b3:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.u(o)
u=r.y
if(typeof u!=="number")return u.n()
t=r.z
if(typeof t!=="number")return t.n()
s=r.Q
if(typeof s!=="number")return s.n()
return new V.ah(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
if(!(Math.abs(b.r-q.r)<s))return!1
if(!(Math.abs(b.x-q.x)<s))return!1
u=b.y
r=q.y
t.toString
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.M()},
E:function(a){var u,t,s,r,q,p=this,o=[P.y],n=V.c1(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.c1(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.c1(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.c1(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
V.ag.prototype={
A:function(a,b){return new V.ag(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.ah.prototype={
A:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.u(t)
return new V.ah(this.a-b.a,this.b-b.b,u-t)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.ct.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ct))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+", "+V.O(u.d,3,0)+"]"}}
V.dF.prototype={
gap:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dF))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+", "+V.O(u.d,3,0)+"]"}}
V.a3.prototype={
cp:function(a){return Math.sqrt(this.L(this))},
L:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.u(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.u(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.n()
u=this.b
if(typeof u!=="number")return u.n()
return new V.a3(t*b,u*b)},
D:function(a,b){var u,t
if(Math.abs(b-0)<$.I().a){u=$.la
return u==null?$.la=new V.a3(0,0):u}u=this.a
if(typeof u!=="number")return u.D()
t=this.b
if(typeof t!=="number")return t.D()
return new V.a3(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=this.a
s=$.I()
s.toString
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.Q.prototype={
cp:function(a){return Math.sqrt(this.L(this))},
L:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.u(t)
return this.a*a.a+this.b*a.b+u*t},
cq:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.A()
if(typeof s!=="number")return H.u(s)
return new V.Q(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
aW:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.u(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.n()
s=a.a
r=this.a
return new V.Q(q*p-u*t,u*s-r*p,r*t-q*s)},
C:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.u(t)
return new V.Q(this.a+b.a,this.b+b.b,u+t)},
P:function(a){var u=this.c
if(typeof u!=="number")return u.P()
return new V.Q(-this.a,-this.b,-u)},
D:function(a,b){var u
if(Math.abs(b-0)<$.I().a)return V.e0()
u=this.c
if(typeof u!=="number")return u.D()
return new V.Q(this.a/b,this.b/b,u/b)},
dZ:function(){var u,t=$.I(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.u(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.A()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
U.ff.prototype={
bH:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.jU(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gp:function(){var u=this.y
return u==null?this.y=D.R():u},
I:function(a){var u=this.y
if(u!=null)u.B(a)},
scC:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.H("wrap",u,b,[P.X])
u.b=!0
this.I(u)}},
scs:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.I().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bH(u)}s=new D.H("maximumLocation",s,t.b,[P.y])
s.b=!0
t.I(s)}},
sct:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.I().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bH(u)}s=new D.H("minimumLocation",s,t.c,[P.y])
s.b=!0
t.I(s)}},
sa0:function(a,b){var u,t=this
b=t.bH(b==null?0:b)
u=t.d
if(!(Math.abs(u-b)<$.I().a)){t.d=b
u=new D.H("location",u,b,[P.y])
u.b=!0
t.I(u)}},
saX:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.I().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.H("maximumVelocity",r,a,[P.y])
r.b=!0
s.I(r)}},
sS:function(a){var u=this,t=a==null?0:a,s=u.e
a=-s
if(!(t<a))a=t>s?s:t
t=u.f
if(!(Math.abs(t-a)<$.I().a)){u.f=a
t=new D.H("velocity",t,a,[P.y])
t.b=!0
u.I(t)}},
sax:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.I().a)){this.x=a
u=new D.H("dampening",u,a,[P.y])
u.b=!0
this.I(u)}},
ad:function(a,b){var u,t,s,r=this,q=r.f,p=$.I().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa0(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.I().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.cc.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.R():u},
sR:function(a,b){var u,t,s,r=this
if(!J.Y(r.a,b)){u=r.a
r.a=b
t=new D.H("matrix",u,b,[V.aa])
t.b=!0
s=r.b
if(s!=null)s.B(t)}},
aA:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cc))return!1
return J.Y(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.ch.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.R():u},
I:function(a){var u
H.e(a,"$iA")
u=this.e
if(u!=null)u.B(a)},
a5:function(){return this.I(null)},
fC:function(a,b){var u,t,s,r,q,p,o,n=U.a6
H.l(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gaD(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.sae(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bs([n])
n.b=!0
this.I(n)},
hd:function(a,b){var u,t,s=U.a6
H.l(b,"$ih",[s],"$ah")
for(u=b.gX(b),t=this.gaD();u.w();)u.gK(u).gp().Y(0,t)
s=new D.bt([s])
s.b=!0
this.I(s)},
aA:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.T()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ap(r,r.length,[H.v(r,0)]),u=null;r.w();){q=r.d
if(q!=null){t=q.aA(0,b,c)
if(t!=null)u=u==null?t:t.n(0,u)}}s.f=u==null?V.dw():u
r=s.e
if(r!=null)r.aq(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ch))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.Y(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.a6]},
$aZ:function(){return[U.a6]},
$ia6:1}
U.a6.prototype={}
U.dG.prototype={
gp:function(){var u=this.y
return u==null?this.y=D.R():u},
I:function(a){var u=this.y
if(u!=null)u.B(a)},
seo:function(a){var u
a=V.jU(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.I().a)){this.a=a
u=new D.H("yaw",u,a,[P.y])
u.b=!0
this.I(u)}},
se8:function(a,b){var u
b=V.jU(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.I().a)){this.b=b
u=new D.H("pitch",u,b,[P.y])
u.b=!0
this.I(u)}},
see:function(a){var u
a=V.jU(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.I().a)){this.c=a
u=new D.H("roll",u,a,[P.y])
u.b=!0
this.I(u)}},
aA:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.seo(s.a+s.d*b.y)
s.se8(0,s.b+s.e*b.y)
s.see(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.b_(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).n(0,V.kO(s.b)).n(0,V.k8(s.a))
r=s.y
if(r!=null)r.aq(0)}return s.x},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dG))return!1
u=r.a
t=b.a
s=$.I().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+"], ["+V.O(u.d,3,0)+", "+V.O(u.e,3,0)+", "+V.O(u.f,3,0)+"]"}}
U.dZ.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.R():u},
I:function(a){var u
H.e(a,"$iA")
u=this.fx
if(u!=null)u.B(a)},
a5:function(){return this.I(null)},
am:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.R():t
u.h(0,s.gft())
u=s.a.c
t=u.d
u=t==null?u.d=D.R():t
u.h(0,s.gfv())
u=s.a.c
t=u.c
u=t==null?u.c=D.R():t
u.h(0,s.gfz())
u=s.a.d
t=u.f
u=t==null?u.f=D.R():t
u.h(0,s.gfo())
u=s.a.d
t=u.d
u=t==null?u.d=D.R():t
u.h(0,s.gfq())
u=s.a.e
t=u.b
u=t==null?u.b=D.R():t
u.h(0,s.ghQ())
u=s.a.e
t=u.d
u=t==null?u.d=D.R():t
u.h(0,s.ghO())
u=s.a.e
t=u.c
u=t==null?u.c=D.R():t
u.h(0,s.ghM())
return!0},
ak:function(a){var u=a.a,t=a.b
if(H.D(this.f)){if(typeof u!=="number")return u.P()
u=-u}if(H.D(this.r)){if(typeof t!=="number")return t.P()
t=-t}return new V.a3(u,t)},
fu:function(a){var u=this
a=H.k(H.e(a,"$iA"),"$ibv")
if(!J.Y(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fw:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.e(a,"$iA"),"$ibv")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.A(0,a.y)
u=new V.a3(u.a,u.b)
u=u.L(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.A(0,a.y)
u=n.ak(new V.a3(t.a,t.b).n(0,2).D(0,u.gap()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.A(0,a.y)
r=n.ak(new V.a3(s.a,s.b).n(0,2).D(0,u.gap()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa0(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.A(0,a.z)
n.dx=n.ak(new V.a3(t.a,t.b).n(0,2).D(0,u.gap()))}n.a5()},
fA:function(a){var u,t,s,r=this
H.e(a,"$iA")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.L(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sS(-t*10*u)
r.a5()}},
fp:function(a){var u=this
if(H.k(H.e(a,"$iA"),"$idt").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fs:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.e(a,"$iA"),"$ibv")
if(!J.Y(n.d,a.x.b))return
u=a.c
t=a.d
s=t.A(0,a.y)
r=n.ak(new V.a3(s.a,s.b).n(0,2).D(0,u.gap()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa0(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.A(0,a.z)
n.dx=n.ak(new V.a3(t.a,t.b).n(0,2).D(0,u.gap()))
n.a5()},
hR:function(a){var u=this
H.e(a,"$iA")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hP:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.e(a,"$iA"),"$idT")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.A(0,a.y)
u=new V.a3(u.a,u.b)
u=u.L(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.A(0,a.y)
u=n.ak(new V.a3(t.a,t.b).n(0,2).D(0,u.gap()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.A(0,a.y)
r=n.ak(new V.a3(s.a,s.b).n(0,2).D(0,u.gap()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa0(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.A(0,a.z)
n.dx=n.ak(new V.a3(t.a,t.b).n(0,2).D(0,u.gap()))}n.a5()},
hN:function(a){var u,t,s,r=this
H.e(a,"$iA")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.L(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sS(-t*10*u)
r.a5()}},
aA:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.T()
if(s<r){t.dy=r
u=b.y
t.c.ad(0,u)
t.b.ad(0,u)
t.fr=V.k8(t.b.d).n(0,V.kO(t.c.d))}return t.fr},
$ia6:1}
U.e_.prototype={
gp:function(){var u=this.dx
return u==null?this.dx=D.R():u},
I:function(a){var u
H.e(a,"$iA")
u=this.dx
if(u!=null)u.B(a)},
a5:function(){return this.I(null)},
ga0:function(a){return new V.ah(this.r.d,this.x.d,this.y.d)},
fY:function(a){this.I(H.e(a,"$iA"))},
c0:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.C()
e+=d}else if(b.r){if(typeof e!=="number")return e.A()
e-=d}else{if(typeof e!=="number")return e.bA()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aA:function(a,b,c){var u,t,s,r,q=this,p=q.cy,o=b.e
if(typeof p!=="number")return p.T()
if(p<o){q.cy=o
q.ga0(q)
u=b.y
if(u>0.1)u=0.1
p=q.ch
if(typeof p!=="number")return p.n()
t=p*u
p=q.cx
if(typeof p!=="number")return p.n()
s=p*u
r=new V.Q(q.r.f,q.x.f,q.y.f)
p=q.Q
if(p!=null)r=p.aR(r)
r=new V.Q(q.c0(q.a,q.b,t,s,r.a),q.c0(q.c,q.d,t,s,r.b),q.c0(q.e,q.f,t,s,r.c))
p=q.z
if(p!=null)r=p.aR(r)
q.r.sS(r.a)
q.x.sS(r.b)
q.y.sS(r.c)
q.r.ad(0,u)
q.x.ad(0,u)
q.y.ad(0,u)
q.db=V.kP(q.r.d,-q.x.d,q.y.d)}return q.db},
sf5:function(a){this.dy=H.n(a,{func:1,ret:V.ah,args:[V.ah,V.ah]})},
$ia6:1}
M.dg.prototype={
aF:function(a){var u
H.e(a,"$iA")
u=this.x
if(u!=null)u.B(a)},
eS:function(){return this.aF(null)},
fM:function(a,b){var u,t,s,r,q,p,o,n=E.am
H.l(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gaE(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bM()
o.sae(null)
o.saU(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sae(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bs([n])
n.b=!0
this.aF(n)},
fO:function(a,b){var u,t,s=E.am
H.l(b,"$ih",[s],"$ah")
for(u=b.gX(b),t=this.gaE();u.w();)u.gK(u).gp().Y(0,t)
s=new D.bt([s])
s.b=!0
this.aF(s)},
gp:function(){var u=this.x
return u==null?this.x=D.R():u},
aP:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.eb(f.c)
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
if(typeof s!=="number")return H.u(s)
o=C.j.ai(p*s)
p=q.b
if(typeof r!=="number")return H.u(r)
n=C.j.ai(p*r)
p=C.j.ai(q.c*s)
a.c=p
q=C.j.ai(q.d*r)
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
i=V.b_(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.ea(i)
t=$.kT
if(t==null){t=V.kV()
q=V.le()
p=$.lb
t=V.kN(t,q,p==null?$.lb=new V.Q(0,0,-1):p)
$.kT=t
h=t}else h=t
t=u.b
if(t!=null){g=t.aA(0,a,u)
if(g!=null)h=g.n(0,h)}a.db.ea(h)
for(u=f.d.a,u=new J.ap(u,u.length,[H.v(u,0)]);u.w();)u.d.ad(0,a)
for(u=f.d.a,u=new J.ap(u,u.length,[H.v(u,0)]);u.w();)u.d.aP(a)
f.a.toString
a.cy.cv()
a.db.cv()
f.b.toString
a.e9()},
sf4:function(a,b){this.d=H.l(b,"$iZ",[E.am],"$aZ")},
$io9:1}
A.d5.prototype={}
A.f2.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iC:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
iA:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.h0.prototype={
ey:function(d2,d3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="Required uniform value, ",a9=", was not defined or used in shader.",b0="emissionTxt",b1="nullEmissionTxt",b2="ambientTxt",b3="nullAmbientTxt",b4="diffuseTxt",b5="nullDiffuseTxt",b6="invDiffuseTxt",b7="nullInvDiffuseTxt",b8="specularTxt",b9="nullSpecularTxt",c0="nullBumpTxt",c1="reflectTxt",c2="nullReflectTxt",c3="refractTxt",c4="nullRefractTxt",c5="alphaTxt",c6="nullAlphaTxt",c7="uniform mat4 objMat;\n",c8="   if(nullAlphaTxt > 0) return alpha;\n",c9="   if (a <= 0.000001) discard;\n",d0="precision mediump float;\n\n",d1="precision mediump float;\n\nvarying vec3 normalVec;\n"
a7.z=d2
u=new P.ak("")
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
d2.hZ(u)
d2.i5(u)
d2.i_(u)
d2.ie(u)
d2.ig(u)
d2.i7(u)
d2.ik(u)
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
u=new P.ak("")
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
s.i2(u)
s.hY(u)
s.i0(u)
s.i3(u)
s.ib(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.i9(u)
s.ia(u)}s.i6(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=s.y
if(l!==C.d){m=u.a=m+"uniform float alpha;\n"
if(l!==C.i){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.d:m=u.a=m+"   return 1.0;\n"
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
case C.h:m+=c8
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
k=H.d([],[P.i])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.v(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.i1(u)
s.i8(u)
s.ic(u)
s.ih(u)
s.ii(u)
s.ij(u)
s.i4(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
q=q?u.a=m+"   vec3 norm = normal();\n":m
if(p)u.a=q+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.i])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(s.c!==C.d)u.a+="   setDiffuseColor();\n"
if(s.d!==C.d)u.a+="   setInvDiffuseColor();\n"
if(s.e!==C.d)u.a+="   setSpecularColor();\n"
if(s.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(s.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(s.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(s.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(s.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(s.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(s.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(s.a!==C.d)C.a.h(j,"emission()")
if(s.r!==C.d)C.a.h(j,"reflect(refl)")
if(s.x!==C.d)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.v(j," + ")+", alpha);"
s=u.a
s=u.a=(o?u.a=s+("   gl_FragColor = colorMat*"+i+"\n"):u.a=s+("   gl_FragColor = "+i+"\n"))+"}\n"
a7.c=n
a7.d=s.charCodeAt(0)==0?s:s
a7.e=a7.cZ(n,35633)
a7.f=a7.cZ(a7.d,35632)
s=a7.a
q=s.createProgram()
a7.r=q
s.attachShader(q,a7.e)
s.attachShader(a7.r,a7.f)
s.linkProgram(a7.r)
if(!H.D(H.lB(s.getProgramParameter(a7.r,35714)))){h=s.getProgramInfoLog(a7.r)
s.deleteProgram(a7.r)
H.r(P.w("Failed to link shader: "+H.m(h)))}a7.hC()
a7.hE()
a7.Q=a7.x.j(0,"posAttr")
a7.cx=a7.x.j(0,"normAttr")
a7.ch=a7.x.j(0,"binmAttr")
a7.cy=a7.x.j(0,"txt2DAttr")
a7.db=a7.x.j(0,"txtCubeAttr")
a7.dx=a7.x.j(0,"bendAttr")
if(d2.fr)a7.id=H.k(a7.y.m(0,"invViewMat"),"$iau")
if(t)a7.dy=H.k(a7.y.m(0,"objMat"),"$iau")
if(r)a7.fr=H.k(a7.y.m(0,"viewObjMat"),"$iau")
a7.fy=H.k(a7.y.m(0,"projViewObjMat"),"$iau")
if(d2.x2)a7.k1=H.k(a7.y.m(0,"txt2DMat"),"$icD")
if(d2.y1)a7.k2=H.k(a7.y.m(0,"txtCubeMat"),"$iau")
if(d2.y2)a7.k3=H.k(a7.y.m(0,"colorMat"),"$iau")
a7.sf_(H.d([],[A.au]))
t=d2.an
if(t>0){a7.k4=H.e(a7.y.m(0,"bendMatCount"),"$iN")
for(g=0;g<t;++g){s=a7.r1
r=a7.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.r(P.w(a8+q+a9));(s&&C.a).h(s,H.k(f,"$iau"))}}t=d2.a
if(t!==C.d){a7.r2=H.k(a7.y.m(0,"emissionClr"),"$iM")
switch(t){case C.d:break
case C.i:break
case C.e:a7.rx=H.k(a7.y.m(0,b0),"$ian")
a7.x1=H.k(a7.y.m(0,b1),"$iN")
break
case C.h:a7.ry=H.k(a7.y.m(0,b0),"$iao")
a7.x1=H.k(a7.y.m(0,b1),"$iN")
break}}t=d2.b
if(t!==C.d){a7.x2=H.k(a7.y.m(0,"ambientClr"),"$iM")
switch(t){case C.d:break
case C.i:break
case C.e:a7.y1=H.k(a7.y.m(0,b2),"$ian")
a7.an=H.k(a7.y.m(0,b3),"$iN")
break
case C.h:a7.y2=H.k(a7.y.m(0,b2),"$iao")
a7.an=H.k(a7.y.m(0,b3),"$iN")
break}}t=d2.c
if(t!==C.d){a7.ag=H.k(a7.y.m(0,"diffuseClr"),"$iM")
switch(t){case C.d:break
case C.i:break
case C.e:a7.be=H.k(a7.y.m(0,b4),"$ian")
a7.bf=H.k(a7.y.m(0,b5),"$iN")
break
case C.h:a7.du=H.k(a7.y.m(0,b4),"$iao")
a7.bf=H.k(a7.y.m(0,b5),"$iN")
break}}t=d2.d
if(t!==C.d){a7.bg=H.k(a7.y.m(0,"invDiffuseClr"),"$iM")
switch(t){case C.d:break
case C.i:break
case C.e:a7.dv=H.k(a7.y.m(0,b6),"$ian")
a7.bh=H.k(a7.y.m(0,b7),"$iN")
break
case C.h:a7.dw=H.k(a7.y.m(0,b6),"$iao")
a7.bh=H.k(a7.y.m(0,b7),"$iN")
break}}t=d2.e
if(t!==C.d){a7.bk=H.k(a7.y.m(0,"shininess"),"$ia0")
a7.bi=H.k(a7.y.m(0,"specularClr"),"$iM")
switch(t){case C.d:break
case C.i:break
case C.e:a7.dz=H.k(a7.y.m(0,b8),"$ian")
a7.bj=H.k(a7.y.m(0,b9),"$iN")
break
case C.h:a7.dA=H.k(a7.y.m(0,b8),"$iao")
a7.bj=H.k(a7.y.m(0,b9),"$iN")
break}}switch(d2.f){case C.d:break
case C.i:break
case C.e:a7.dB=H.k(a7.y.m(0,"bumpTxt"),"$ian")
a7.bl=H.k(a7.y.m(0,c0),"$iN")
break
case C.h:a7.dC=H.k(a7.y.m(0,"bumpTxt"),"$iao")
a7.bl=H.k(a7.y.m(0,c0),"$iN")
break}if(d2.dy){a7.dD=H.k(a7.y.m(0,"envSampler"),"$iao")
a7.dE=H.k(a7.y.m(0,"nullEnvTxt"),"$iN")
t=d2.r
if(t!==C.d){a7.bm=H.k(a7.y.m(0,"reflectClr"),"$iM")
switch(t){case C.d:break
case C.i:break
case C.e:a7.dF=H.k(a7.y.m(0,c1),"$ian")
a7.bn=H.k(a7.y.m(0,c2),"$iN")
break
case C.h:a7.dG=H.k(a7.y.m(0,c1),"$iao")
a7.bn=H.k(a7.y.m(0,c2),"$iN")
break}}t=d2.x
if(t!==C.d){a7.bo=H.k(a7.y.m(0,"refraction"),"$ia0")
a7.bp=H.k(a7.y.m(0,"refractClr"),"$iM")
switch(t){case C.d:break
case C.i:break
case C.e:a7.dH=H.k(a7.y.m(0,c3),"$ian")
a7.bq=H.k(a7.y.m(0,c4),"$iN")
break
case C.h:a7.dI=H.k(a7.y.m(0,c3),"$iao")
a7.bq=H.k(a7.y.m(0,c4),"$iN")
break}}}t=d2.y
if(t!==C.d){a7.br=H.k(a7.y.m(0,"alpha"),"$ia0")
switch(t){case C.d:break
case C.i:break
case C.e:a7.dJ=H.k(a7.y.m(0,c5),"$ian")
a7.bs=H.k(a7.y.m(0,c6),"$iN")
break
case C.h:a7.dK=H.k(a7.y.m(0,c5),"$iao")
a7.bs=H.k(a7.y.m(0,c6),"$iN")
break}}a7.sfa(H.d([],[A.cC]))
a7.shm(H.d([],[A.cE]))
a7.shH(H.d([],[A.cF]))
a7.shT(H.d([],[A.cG]))
a7.shU(H.d([],[A.cH]))
a7.shV(H.d([],[A.cI]))
if(d2.k2){t=d2.z
if(t>0){a7.dL=H.e(a7.y.m(0,"dirLightCount"),"$iN")
for(g=0;g<t;++g){s=a7.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.r(P.w(a8+r+a9))
H.k(f,"$iM")
s=a7.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.r(P.w(a8+r+a9))
H.k(e,"$iM")
s=a7.ce;(s&&C.a).h(s,new A.cC(f,e))}}t=d2.Q
if(t>0){a7.dM=H.e(a7.y.m(0,"pntLightCount"),"$iN")
for(g=0;g<t;++g){s=a7.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.r(P.w(a8+r+a9))
H.k(f,"$iM")
s=a7.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.w(a8+r+a9))
H.k(e,"$iM")
s=a7.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.r(P.w(a8+r+a9))
H.k(d,"$iM")
s=a7.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.r(P.w(a8+r+a9))
H.k(c,"$ia0")
s=a7.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.r(P.w(a8+r+a9))
H.k(b,"$ia0")
s=a7.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.r(P.w(a8+r+a9))
H.k(a,"$ia0")
s=a7.cf;(s&&C.a).h(s,new A.cE(f,e,d,c,b,a))}}t=d2.ch
if(t>0){a7.dN=H.e(a7.y.m(0,"spotLightCount"),"$iN")
for(g=0;g<t;++g){s=a7.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.r(P.w(a8+r+a9))
H.k(f,"$iM")
s=a7.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.w(a8+r+a9))
H.k(e,"$iM")
s=a7.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.r(P.w(a8+r+a9))
H.k(d,"$iM")
s=a7.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.r(P.w(a8+r+a9))
H.k(c,"$iM")
s=a7.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.r(P.w(a8+r+a9))
H.k(b,"$ia0")
s=a7.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.r(P.w(a8+r+a9))
H.k(a,"$ia0")
s=a7.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.r(P.w(a8+r+a9))
H.k(a0,"$ia0")
s=a7.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.r(P.w(a8+r+a9))
H.k(a1,"$ia0")
s=a7.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.r(P.w(a8+r+a9))
H.k(a2,"$ia0")
s=a7.cg;(s&&C.a).h(s,new A.cF(f,e,d,c,b,a,a0,a1,a2))}}t=d2.cx
if(t>0){a7.dO=H.e(a7.y.m(0,"txtDirLightCount"),"$iN")
for(g=0;g<t;++g){s=a7.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.r(P.w(a8+r+a9))
H.k(f,"$iM")
s=a7.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.r(P.w(a8+r+a9))
H.k(e,"$iM")
s=a7.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.r(P.w(a8+r+a9))
H.k(d,"$iM")
s=a7.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.r(P.w(a8+r+a9))
H.k(c,"$iM")
s=a7.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.r(P.w(a8+r+a9))
H.k(b,"$iM")
s=a7.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.r(P.w(a8+r+a9))
H.k(a,"$iN")
s=a7.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.r(P.w(a8+r+a9))
H.k(a0,"$ian")
s=a7.ci;(s&&C.a).h(s,new A.cG(f,e,d,c,b,a0,a))}}t=d2.cy
if(t>0){a7.dP=H.e(a7.y.m(0,"txtPntLightCount"),"$iN")
for(g=0;g<t;++g){s=a7.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.r(P.w(a8+r+a9))
H.k(f,"$iM")
s=a7.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.w(a8+r+a9))
H.k(e,"$iM")
s=a7.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.r(P.w(a8+r+a9))
H.k(d,"$icD")
s=a7.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.r(P.w(a8+r+a9))
H.k(c,"$iM")
s=a7.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.w(a8+r+a9))
H.k(b,"$iN")
s=a7.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.r(P.w(a8+r+a9))
H.k(a,"$ia0")
s=a7.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.r(P.w(a8+r+a9))
H.k(a0,"$ia0")
s=a7.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.r(P.w(a8+r+a9))
H.k(a1,"$ia0")
s=a7.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.r(P.w(a8+r+a9))
H.k(a2,"$iao")
s=a7.cj;(s&&C.a).h(s,new A.cH(f,e,d,c,a2,b,a,a0,a1))}}t=d2.db
if(t>0){a7.dQ=H.e(a7.y.m(0,"txtSpotLightCount"),"$iN")
for(g=0;g<t;++g){s=a7.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.r(P.w(a8+r+a9))
H.k(f,"$iM")
s=a7.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.w(a8+r+a9))
H.k(e,"$iM")
s=a7.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.r(P.w(a8+r+a9))
H.k(d,"$iM")
s=a7.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.r(P.w(a8+r+a9))
H.k(c,"$iM")
s=a7.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.r(P.w(a8+r+a9))
H.k(b,"$iM")
s=a7.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.r(P.w(a8+r+a9))
H.k(a,"$iN")
s=a7.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.r(P.w(a8+r+a9))
H.k(a0,"$iM")
s=a7.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.r(P.w(a8+r+a9))
H.k(a1,"$ia0")
s=a7.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.r(P.w(a8+r+a9))
H.k(a2,"$ia0")
s=a7.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.r(P.w(a8+r+a9))
H.k(a3,"$ia0")
s=a7.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.r(P.w(a8+r+a9))
H.k(a4,"$ia0")
s=a7.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.r(P.w(a8+r+a9))
H.k(a5,"$ia0")
s=a7.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.r(P.w(a8+r+a9))
H.k(a6,"$ian")
s=a7.ck;(s&&C.a).h(s,new A.cI(f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
af:function(a,b,c){if(c==null||!c.d)C.c.Z(b.a,b.d,1)
else{a.er(c)
C.c.Z(b.a,b.d,0)}},
a6:function(a,b,c){C.c.Z(b.a,b.d,1)},
sf_:function(a){this.r1=H.l(a,"$ib",[A.au],"$ab")},
sfa:function(a){this.ce=H.l(a,"$ib",[A.cC],"$ab")},
shm:function(a){this.cf=H.l(a,"$ib",[A.cE],"$ab")},
shH:function(a){this.cg=H.l(a,"$ib",[A.cF],"$ab")},
shT:function(a){this.ci=H.l(a,"$ib",[A.cG],"$ab")},
shU:function(a){this.cj=H.l(a,"$ib",[A.cH],"$ab")},
shV:function(a){this.ck=H.l(a,"$ib",[A.cI],"$ab")}}
A.h3.prototype={
hZ:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.an+"];\n"
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
i5:function(a){var u
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
i_:function(a){var u
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
ie:function(a){var u,t
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
ig:function(a){var u,t
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
i7:function(a){var u
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
ik:function(a){var u
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
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.ar(c,1))+"Txt;\n")
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
i2:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.au(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.i:s=a.a=u+"   return emissionClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
hY:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.au(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.i:s=a.a=u+"   return ambientClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
i0:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.au(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.i:s=a.a=u+"   diffuseColor = diffuseClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
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
i3:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.au(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.i:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
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
ib:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
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
switch(s){case C.d:s=u
break
case C.i:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
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
i6:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.d:break
case C.i:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break
case C.h:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break}u+="vec3 normal()\n"
a.a=u
u=a.a=u+"{\n"
switch(t){case C.d:u=a.a=u+r
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
case C.h:u+=q
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
i9:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.au(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.d:s=u
break
case C.i:s=a.a=u+"   vec3 scalar = reflectClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
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
ia:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
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
switch(s){case C.d:s=u
break
case C.i:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
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
i1:function(a){var u,t=this.z
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
i8:function(a){var u,t=this.Q
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
ic:function(a){var u,t=this.ch
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
ih:function(a){var u,t,s=this.cx
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
ii:function(a){var u,t,s=this.cy
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
ij:function(a){var u,t,s=this.db
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
i4:function(a){var u
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
i:function(a){return this.ag}}
A.cC.prototype={}
A.cG.prototype={}
A.cE.prototype={}
A.cH.prototype={}
A.cF.prototype={}
A.cI.prototype={}
A.cv.prototype={
eB:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cZ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.D(H.lB(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.w("Error compiling shader '"+H.m(s)+"': "+H.m(u)))}return s},
hC:function(){var u,t,s,r=this,q=H.d([],[A.d5]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d5(p,t.name,s))}r.x=new A.f2(q)},
hE:function(){var u,t,s,r=this,q=H.d([],[A.dU]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ix(t.type,t.size,t.name,s))}r.y=new A.id(q)},
aH:function(a,b,c){var u=this.a
if(a===1)return new A.N(u,b,c)
else return A.kb(u,this.r,b,a,c)},
f7:function(a,b,c){var u=this.a
if(a===1)return new A.an(u,b,c)
else return A.kb(u,this.r,b,a,c)},
f8:function(a,b,c){var u=this.a
if(a===1)return new A.ao(u,b,c)
else return A.kb(u,this.r,b,a,c)},
bb:function(a,b){return new P.ea(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
ix:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aH(b,c,d)
case 5121:return u.aH(b,c,d)
case 5122:return u.aH(b,c,d)
case 5123:return u.aH(b,c,d)
case 5124:return u.aH(b,c,d)
case 5125:return u.aH(b,c,d)
case 5126:return new A.a0(u.a,c,d)
case 35664:return new A.i8(u.a,c,d)
case 35665:return new A.M(u.a,c,d)
case 35666:return new A.ib(u.a,c,d)
case 35667:return new A.i9(u.a,c,d)
case 35668:return new A.ia(u.a,c,d)
case 35669:return new A.ic(u.a,c,d)
case 35674:return new A.ie(u.a,c,d)
case 35675:return new A.cD(u.a,c,d)
case 35676:return new A.au(u.a,c,d)
case 35678:return u.f7(b,c,d)
case 35680:return u.f8(b,c,d)
case 35670:throw H.c(u.bb("BOOL",c))
case 35671:throw H.c(u.bb("BOOL_VEC2",c))
case 35672:throw H.c(u.bb("BOOL_VEC3",c))
case 35673:throw H.c(u.bb("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bJ.prototype={
i:function(a){return this.b}}
A.dU.prototype={}
A.id.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
m:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.F)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.N.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.i9.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.ia.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.ic.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.i7.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
shW:function(a){H.l(a,"$ib",[P.p],"$ab")}}
A.a0.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.i8.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.M.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.ib.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.ie.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cD.prototype={
aj:function(a){var u=new Float32Array(H.bX(H.l(a,"$ib",[P.y],"$ab")))
C.c.ek(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.au.prototype={
aj:function(a){var u=new Float32Array(H.bX(H.l(a,"$ib",[P.y],"$ab")))
C.c.el(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.an.prototype={
er:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ao.prototype={
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.jt.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cq(s.b,b).cq(s.d.cq(s.c,b),c)
a.sa0(0,new V.ah(r.a,r.b,r.c))
a.seh(r.D(0,Math.sqrt(r.L(r))))
s=1-b
u=1-c
a.sdn(new V.ct(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))},
$S:25}
F.jG.prototype={
$2:function(a,b){return 0},
$S:43}
F.jH.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sa0(0,new V.ah(s,r,this.a.a.$2(b,c)))
u=new V.Q(s,r,1)
a.seh(u.D(0,Math.sqrt(u.L(u))))
u=1-b
t=1-c
a.sdn(new V.ct(b*c,2+u*c,4+b*t,6+u*t))},
$S:25}
F.a9.prototype={
eZ:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.e0()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dZ())return
return s.D(0,Math.sqrt(s.L(s)))},
f2:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.A(0,q)
r=new V.Q(r.a,r.b,r.c)
s=r.D(0,Math.sqrt(r.L(r)))
r=t.A(0,q)
r=new V.Q(r.a,r.b,r.c)
r=s.aW(r.D(0,Math.sqrt(r.L(r))))
return r.D(0,Math.sqrt(r.L(r)))},
c9:function(){var u,t=this
if(t.d!=null)return!0
u=t.eZ()
if(u==null){u=t.f2()
if(u==null)return!1}t.d=u
t.a.a.a2()
return!0},
eY:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.e0()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dZ())return
return s.D(0,Math.sqrt(s.L(s)))},
f1:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.I().a){l=d.A(0,g)
l=new V.Q(l.a,l.b,l.c)
q=l.D(0,Math.sqrt(l.L(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.A(0,g)
k=l.c
if(typeof k!=="number")return k.n()
i=g.a
h=g.b
f=g.c
if(typeof f!=="number")return H.u(f)
f=new V.ah(l.a*p+i,l.b*p+h,k*p+f).A(0,j)
f=new V.Q(f.a,f.b,f.c)
q=f.D(0,Math.sqrt(f.L(f)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.D(0,Math.sqrt(l.L(l)))
l=o.aW(q)
l=l.D(0,Math.sqrt(l.L(l))).aW(o)
q=l.D(0,Math.sqrt(l.L(l)))}return q},
c7:function(){var u,t=this
if(t.e!=null)return!0
u=t.eY()
if(u==null){u=t.f1()
if(u==null)return!1}t.e=u
t.a.a.a2()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.ab(J.as(s.e),0)+", "+C.b.ab(J.as(t.b.e),0)+", "+C.b.ab(J.as(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
M:function(){return this.E("")}}
F.ba.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.ab(J.as(u.e),0)+", "+C.b.ab(J.as(this.b.e),0)},
M:function(){return this.E("")}}
F.bx.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ab(J.as(u.e),0)},
M:function(){return this.E("")}}
F.dI.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.R():u},
iQ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a_()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){r=g[s]
h.a.h(0,r.iv())}h.a.a_()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bx()
if(n.a==null)H.r(P.w("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.B(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a_()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
p=new F.ba()
o=l.a
if(o==null)H.r(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.r(P.w("May not create a line with vertices attached to different shapes."))
p.a=l
C.a.h(l.c.b,p)
p.b=k
C.a.h(k.c.c,p)
C.a.h(p.a.a.c.b,p)
p=p.a.a.e
if(p!=null)p.B(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a_()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.di(l,k,i)}g=h.e
if(g!=null)g.aq(0)},
aK:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aK()||!1
if(!t.a.aK())u=!1
s=t.e
if(s!=null)s.aq(0)
return u},
is:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bk()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bj().a)!==0)++s
if((t&$.bi().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.bm().a)!==0)++s
if((t&$.d1().a)!==0)++s
if((t&$.d2().a)!==0)++s
if((t&$.c6().a)!==0)++s
if((t&$.bh().a)!==0)++s
r=a3.gcE(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.y
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.d7])
for(n=0,m=0;m<s;++m){l=a3.iq(m)
k=l.gcE(l)
C.a.l(o,m,new Z.d7(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.f(u,j)
i=u[j].iN(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.l(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.bX(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d8(new Z.e1(a0,f),o,a3)
e.sfj(H.d([],[Z.br]))
if(a.b.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.a_()
C.a.h(d,c.e)}b=Z.kf(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.br(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.a_()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.f(c,m)
c=c[m].b
c.a.a.a_()
C.a.h(d,c.e)}b=Z.kf(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.br(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.a_()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.f(c,m)
c=c[m].b
c.a.a.a_()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.f(c,m)
c=c[m].c
c.a.a.a_()
C.a.h(d,c.e)}b=Z.kf(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.br(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.i])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.E(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.E(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.E(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.E(t))}return C.a.v(s,"\n")},
a2:function(){var u=this.e
if(u!=null)u.B(null)},
$ioa:1}
F.hA.prototype={
ip:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.aQ],"$ab")
u=H.d([],[F.a9])
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
C.a.h(u,F.di(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.di(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.di(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.di(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
aK:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.F)(u),++r)if(!u[r].c9())s=!1
return s},
c8:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.F)(u),++r)if(!u[r].c7())s=!1
return s},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.d([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(a))
return C.a.v(r,"\n")},
M:function(){return this.E("")},
sfd:function(a){this.b=H.l(a,"$ib",[F.a9],"$ab")}}
F.hB.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.M()},
E:function(a){var u,t,s=H.d([],[P.i]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.v(s,"\n")},
M:function(){return this.E("")},
sfk:function(a){this.b=H.l(a,"$ib",[F.ba],"$ab")}}
F.hC.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.d([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(a))
return C.a.v(r,"\n")},
M:function(){return this.E("")},
sbV:function(a){this.b=H.l(a,"$ib",[F.bx],"$ab")}}
F.aQ.prototype={
cc:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.lf(u.cx,r,o,t,s,q,p,a,n)},
iv:function(){return this.cc(null)},
sa0:function(a,b){var u
if(!J.Y(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a2()}},
seh:function(a){var u
if(!J.Y(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
sdn:function(a){var u
if(!J.Y(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a2()}},
iN:function(a){var u,t,s=this
if(a.q(0,$.bk())){u=s.f
t=[P.y]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bj())){u=s.r
t=[P.y]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bi())){u=s.x
t=[P.y]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bl())){u=s.y
t=[P.y]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.q(0,$.bm())){u=s.z
t=[P.y]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.d1())){u=s.Q
t=[P.y]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.d2())){u=s.Q
t=[P.y]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.c6()))return H.d([s.ch],[P.y])
else if(a.q(0,$.bh())){u=s.cx
t=[P.y]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.y])},
c9:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e0()
t.d.J(0,new F.iC(s))
s=s.a
t.r=s.D(0,Math.sqrt(s.L(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.aq(0)}return!0},
c7:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e0()
t.d.J(0,new F.iB(s))
s=s.a
t.x=s.D(0,Math.sqrt(s.L(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.aq(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this,r="-",q=H.d([],[P.i])
C.a.h(q,C.b.ab(J.as(s.e),0))
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
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.v(q,", ")
return a+"{"+t+"}"},
M:function(){return this.E("")}}
F.iC.prototype={
$1:function(a){var u,t
H.e(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:9}
F.iB.prototype={
$1:function(a){var u,t
H.e(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:9}
F.iv.prototype={
a_:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a2()
return!0},
dl:function(a,b){var u=null,t=F.lf(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gk:function(a){return this.c.length},
aK:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].c9()
return!0},
c8:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].c7()
return!0},
it:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.n()
n=q.D(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Y(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.M()},
E:function(a){var u,t,s,r
this.a_()
u=H.d([],[P.i])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)C.a.h(u,t[r].E(a))
return C.a.v(u,"\n")},
M:function(){return this.E("")},
shX:function(a){this.c=H.l(a,"$ib",[F.aQ],"$ab")}}
F.iw.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.J(u.b,b)
C.a.J(u.c,new F.ix(u,b))
C.a.J(u.d,new F.iy(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(""))
return C.a.v(r,"\n")},
sfe:function(a){this.b=H.l(a,"$ib",[F.a9],"$ab")},
sff:function(a){this.c=H.l(a,"$ib",[F.a9],"$ab")},
sfg:function(a){this.d=H.l(a,"$ib",[F.a9],"$ab")}}
F.ix.prototype={
$1:function(a){H.e(a,"$ia9")
if(!J.Y(a.a,this.a))this.b.$1(a)},
$S:9}
F.iy.prototype={
$1:function(a){var u
H.e(a,"$ia9")
u=this.a
if(!J.Y(a.a,u)&&!J.Y(a.b,u))this.b.$1(a)},
$S:9}
F.iz.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(""))
return C.a.v(r,"\n")},
sfl:function(a){this.b=H.l(a,"$ib",[F.ba],"$ab")},
sfm:function(a){this.c=H.l(a,"$ib",[F.ba],"$ab")}}
F.iA.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(""))
return C.a.v(r,"\n")},
sbV:function(a){this.b=H.l(a,"$ib",[F.bx],"$ab")}}
O.dv.prototype={
gp:function(){var u=this.dy
return u==null?this.dy=D.R():u},
V:function(a){var u
H.e(a,"$iA")
u=this.dy
if(u!=null)u.B(a)},
bR:function(){return this.V(null)},
dd:function(a){H.e(a,"$iA")
this.a=null
this.V(a)},
hv:function(){return this.dd(null)},
fG:function(a,b){var u=V.aa
H.l(b,"$ih",[u],"$ah")
u=new D.bs([u])
u.b=!0
this.V(u)},
fI:function(a,b){var u=V.aa
H.l(b,"$ih",[u],"$ah")
u=new D.bt([u])
u.b=!0
this.V(u)},
cW:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.dx,a4=C.f.a1(a3.e.length+3,4)*4,a5=C.f.a1(a3.f.length+3,4)*4,a6=C.f.a1(a3.r.length+3,4)*4,a7=C.f.a1(a3.x.length+3,4)*4,a8=C.f.a1(a3.y.length+3,4)*4,a9=C.f.a1(a3.z.length+3,4)*4,b0=C.f.a1(a2.e.a.length+3,4)*4
a3=a2.b!=null
u=a2.f.c
t=a2.r.c
s=a2.x.c
r=a2.y.c
q=a2.z.c
p=a2.Q.c
o=a2.cx.c
n=a2.cy.c
m=a2.db.c
l="MaterialLight_"+C.f.i(u.a)+C.f.i(t.a)+C.f.i(s.a)+C.f.i(r.a)+C.f.i(q.a)+C.f.i(p.a)+C.f.i(o.a)+C.f.i(n.a)+C.f.i(m.a)+"_"
l+=a3?"1":"0"
l+"0"
l+"00"
l=l+"00_"+b0+"_"+a4+"_"+a5+"_"+a6+"_"+a7+"_"+a8+"_"+a9
k=o!==C.d||n!==C.d
j=t!==C.d||s!==C.d||r!==C.d||q!==C.d
i=q===C.d
h=!i||a5+a8>0||k
g=s!==C.d||r!==C.d||!i||p!==C.d||k
i=p===C.d
f=!i
e=u===C.e||t===C.e||s===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e||m===C.e
d=u===C.h||t===C.h||s===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h||m===C.h
c=a5+a8+a7+a6+a9>0
b=b0>0
a=g||!i||h
a0=a3&&e
a1=$.bk()
if(g){a3=$.bj()
a1=new Z.b4(a1.a|a3.a)}if(f){a3=$.bi()
a1=new Z.b4(a1.a|a3.a)}if(e){a3=$.bl()
a1=new Z.b4(a1.a|a3.a)}if(d){a3=$.bm()
a1=new Z.b4(a1.a|a3.a)}if(b){a3=$.bh()
a1=new Z.b4(a1.a|a3.a)}return new A.h3(u,t,s,r,q,p,o,n,m,a4,a5,a6,a7,a8,a9,a4+a5+a6+a7+a8+a9,k,k,c,a,!0,!1,!1,j,c,h,g,f,e,d,b,a0,!1,!1,b0,l.charCodeAt(0)==0?l:l,a1)},
U:function(a,b){H.l(a,"$ib",[T.cz],"$ab")
if(b!=null)if(!C.a.a9(a,b)){b.a=a.length
C.a.h(a,b)}},
ad:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ap(u,u.length,[H.v(u,0)]);u.w();){t=u.d
t.toString
s=$.iu
if(s==null)s=$.iu=new V.Q(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.aR(s)}}},
j9:function(a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4==null){a4=a3.cW()
u=a5.fr.j(0,a4.ag)
if(u==null){u=A.mz(a4,a5.a)
t=u.b
if(t.length===0)H.r(P.w("May not cache a shader with no name."))
if(a5.fr.bd(0,t))H.r(P.w('Shader cache already contains a shader by the name "'+t+'".'))
a5.fr.l(0,t,u)}a4=a3.a=u
a6.e=null}s=a4.z
r=s.be
a4=a6.e
if(!(a4 instanceof Z.d8))a4=a6.e=null
if(a4==null||!a4.d.q(0,r)){a4=s.r1
if(a4)a6.d.aK()
q=s.r2
if(q){p=a6.d
o=p.e
if(o!=null)++o.d
p.d.c8()
p.a.c8()
p=p.e
if(p!=null)p.aq(0)}p=s.ry
if(p){o=a6.d
n=o.e
if(n!=null)++n.d
o.a.it()
o=o.e
if(o!=null)o.aq(0)}m=a6.d.is(new Z.iE(a5.a),r)
m.aL($.bk()).e=a3.a.Q.c
if(a4)m.aL($.bj()).e=a3.a.cx.c
if(q)m.aL($.bi()).e=a3.a.ch.c
if(s.rx)m.aL($.bl()).e=a3.a.cy.c
if(p)m.aL($.bm()).e=a3.a.db.c
if(s.x1)m.aL($.bh()).e=a3.a.dx.c
a6.e=m}a4=T.cz
l=H.d([],[a4])
q=a3.a
p=a5.a
p.useProgram(q.r)
q.x.iC()
if(s.fx){q=a3.a
o=a5.dx
o=o.gR(o)
q=q.dy
q.toString
q.aj(o.ac(0,!0))}if(s.fy){q=a3.a
o=a5.cx
if(o==null){o=a5.db
o=o.gR(o)
n=a5.dx
n=a5.cx=o.n(0,n.gR(n))
o=n}q=q.fr
q.toString
q.aj(o.ac(0,!0))}q=a3.a
o=a5.ch
if(o==null){o=a5.gj7()
n=a5.dx
n=a5.ch=o.n(0,n.gR(n))
o=n}q=q.fy
q.toString
q.aj(o.ac(0,!0))
if(s.x2){q=a3.a
o=a3.b
q=q.k1
q.toString
q.aj(o.ac(0,!0))}if(s.y1){q=a3.a
o=a3.c
q=q.k2
q.toString
q.aj(C.t.ac(o,!0))}if(s.y2){q=a3.a
o=a3.d
q=q.k3
q.toString
q.aj(C.t.ac(o,!0))}if(s.an>0){k=a3.e.a.length
q=a3.a.k4
C.c.Z(q.a,q.d,k)
for(q=[P.y],j=0;j<k;++j){o=a3.a
n=a3.e.a
if(j>=n.length)return H.f(n,j)
n=n[j]
o.toString
H.e(n,"$iaa")
o=o.r1
if(j>=o.length)return H.f(o,j)
o=o[j]
i=new Float32Array(H.bX(H.l(n.ac(0,!0),"$ib",q,"$ab")))
C.c.el(o.a,o.d,!1,i)}}switch(s.a){case C.d:break
case C.i:q=a3.a
o=a3.f.f
q=q.r2
q.toString
n=o.a
h=o.b
o=o.c
C.c.t(q.a,q.d,n,h,o)
break
case C.e:a3.U(l,a3.f.d)
q=a3.a
o=a3.f.d
q.af(q.rx,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.c.t(o.a,o.d,n,h,q)
break
case C.h:a3.U(l,a3.f.e)
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
C.c.t(o.a,o.d,n,h,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.i:q=a3.a
o=a3.r.f
q=q.x2
q.toString
n=o.a
h=o.b
o=o.c
C.c.t(q.a,q.d,n,h,o)
break
case C.e:a3.U(l,a3.r.d)
q=a3.a
o=a3.r.d
q.af(q.y1,q.an,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.t(o.a,o.d,n,h,q)
break
case C.h:a3.U(l,a3.r.e)
q=a3.a
o=a3.r.e
q.a6(q.y2,q.an,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.t(o.a,o.d,n,h,q)
break}switch(s.c){case C.d:break
case C.i:q=a3.a
o=a3.x.f
q=q.ag
q.toString
n=o.a
h=o.b
o=o.c
C.c.t(q.a,q.d,n,h,o)
break
case C.e:a3.U(l,a3.x.d)
q=a3.a
o=a3.x.d
q.af(q.be,q.bf,o)
o=a3.a
q=a3.x.f
o=o.ag
o.toString
n=q.a
h=q.b
q=q.c
C.c.t(o.a,o.d,n,h,q)
break
case C.h:a3.U(l,a3.x.e)
q=a3.a
o=a3.x.e
q.a6(q.du,q.bf,o)
o=a3.a
q=a3.x.f
o=o.ag
o.toString
n=q.a
h=q.b
q=q.c
C.c.t(o.a,o.d,n,h,q)
break}switch(s.d){case C.d:break
case C.i:q=a3.a
o=a3.y.f
q=q.bg
q.toString
n=o.a
h=o.b
o=o.c
C.c.t(q.a,q.d,n,h,o)
break
case C.e:a3.U(l,a3.y.d)
q=a3.a
o=a3.y.d
q.af(q.dv,q.bh,o)
o=a3.a
q=a3.y.f
o=o.bg
o.toString
n=q.a
h=q.b
q=q.c
C.c.t(o.a,o.d,n,h,q)
break
case C.h:a3.U(l,a3.y.e)
q=a3.a
o=a3.y.e
q.a6(q.dw,q.bh,o)
o=a3.a
q=a3.y.f
o=o.bg
o.toString
n=q.a
h=q.b
q=q.c
C.c.t(o.a,o.d,n,h,q)
break}switch(s.e){case C.d:break
case C.i:q=a3.a
o=a3.z.f
q=q.bi
q.toString
n=o.a
h=o.b
o=o.c
C.c.t(q.a,q.d,n,h,o)
o=a3.a
h=a3.z.ch
o=o.bk
C.c.N(o.a,o.d,h)
break
case C.e:a3.U(l,a3.z.d)
q=a3.a
o=a3.z.d
q.af(q.dz,q.bj,o)
o=a3.a
q=a3.z.f
o=o.bi
o.toString
n=q.a
h=q.b
q=q.c
C.c.t(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bk
C.c.N(q.a,q.d,h)
break
case C.h:a3.U(l,a3.z.e)
q=a3.a
o=a3.z.e
q.a6(q.dA,q.bj,o)
o=a3.a
q=a3.z.f
o=o.bi
o.toString
n=q.a
h=q.b
q=q.c
C.c.t(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bk
C.c.N(q.a,q.d,h)
break}if(s.z>0){k=a3.dx.e.length
q=a3.a.dL
C.c.Z(q.a,q.d,k)
q=a5.db
g=q.gR(q)
for(q=a3.dx.e,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
n=a3.a.ce
if(f>=n.length)return H.f(n,f)
c=n[f]
n=g.aR(d.a)
h=n.a
b=n.b
a=n.c
if(typeof a!=="number")return a.n()
a=n.D(0,Math.sqrt(h*h+b*b+a*a))
b=c.b
h=a.a
n=a.b
a=a.c
C.c.t(b.a,b.d,h,n,a)
a=d.c
n=c.c
C.c.t(n.a,n.d,a.a,a.b,a.c);++f}}if(s.Q>0){k=a3.dx.f.length
q=a3.a.dM
C.c.Z(q.a,q.d,k)
q=a5.db
g=q.gR(q)
for(q=a3.dx.f,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
n=a3.a.cf
if(f>=n.length)return H.f(n,f)
c=n[f]
n=d.gb_(d)
h=c.b
C.c.t(h.a,h.d,n.a,n.b,n.c)
n=g.b3(d.gb_(d))
h=c.c
C.c.t(h.a,h.d,n.a,n.b,n.c)
n=d.ga8(d)
h=c.d
C.c.t(h.a,h.d,n.a,n.b,n.c)
n=d.gc2()
h=c.e
C.c.N(h.a,h.d,n)
n=d.gc3()
h=c.f
C.c.N(h.a,h.d,n)
n=d.gc4()
h=c.r
C.c.N(h.a,h.d,n);++f}}if(s.ch>0){k=a3.dx.r.length
q=a3.a.dN
C.c.Z(q.a,q.d,k)
q=a5.db
g=q.gR(q)
for(q=a3.dx.r,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
n=a3.a.cg
if(f>=n.length)return H.f(n,f)
c=n[f]
n=d.gb_(d)
h=c.b
C.c.t(h.a,h.d,n.a,n.b,n.c)
n=d.gcd(d).jt()
h=c.c
C.c.t(h.a,h.d,n.a,n.b,n.c)
n=g.b3(d.gb_(d))
h=c.d
C.c.t(h.a,h.d,n.a,n.b,n.c)
n=d.ga8(d)
h=c.e
C.c.t(h.a,h.d,n.a,n.b,n.c)
n=d.gjq()
h=c.f
C.c.N(h.a,h.d,n)
n=d.gjp()
h=c.r
C.c.N(h.a,h.d,n)
n=d.gc2()
h=c.x
C.c.N(h.a,h.d,n)
n=d.gc3()
h=c.y
C.c.N(h.a,h.d,n)
n=d.gc4()
h=c.z
C.c.N(h.a,h.d,n);++f}}if(s.cx>0){k=a3.dx.x.length
q=a3.a.dO
C.c.Z(q.a,q.d,k)
q=a5.db
g=q.gR(q)
for(q=a3.dx.x,o=q.length,n=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
h=a3.a.ci
if(f>=h.length)return H.f(h,f)
c=h[f]
h=d.gb0()
H.l(l,"$ib",n,"$ab")
if(!C.a.a9(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gcd(d)
b=c.d
C.c.t(b.a,b.d,h.a,h.b,h.c)
h=d.gjm()
b=c.b
C.c.t(b.a,b.d,h.a,h.b,h.c)
h=d.gbx(d)
b=c.c
C.c.t(b.a,b.d,h.a,h.b,h.c)
h=g.aR(d.gcd(d))
b=h.a
a=h.b
a0=h.c
if(typeof a0!=="number")return a0.n()
a0=h.D(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
h=a0.b
a0=a0.c
C.c.t(a.a,a.d,b,h,a0)
a0=d.ga8(d)
h=c.f
C.c.t(h.a,h.d,a0.a,a0.b,a0.c)
a0=d.gb0()
h=a0.gcr(a0)
if(!h){h=c.x
C.c.Z(h.a,h.d,1)}else{h=c.r
b=a0.d
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,a0.a)
h=c.x
C.c.Z(h.a,h.d,0)}++f}}if(s.cy>0){k=a3.dx.y.length
q=a3.a.dP
C.c.Z(q.a,q.d,k)
q=a5.db
g=q.gR(q)
for(q=a3.dx.y,o=q.length,n=[P.y],h=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
b=a3.a.cj
if(f>=b.length)return H.f(b,f)
c=b[f]
b=d.gb0()
H.l(l,"$ib",h,"$ab")
if(!C.a.a9(l,b)){b.a=l.length
C.a.h(l,b)}a1=g.n(0,d.gR(d))
b=d.gR(d)
a=$.cs
b=b.b3(a==null?$.cs=new V.ah(0,0,0):a)
a=c.b
C.c.t(a.a,a.d,b.a,b.b,b.c)
b=$.cs
b=a1.b3(b==null?$.cs=new V.ah(0,0,0):b)
a=c.c
C.c.t(a.a,a.d,b.a,b.b,b.c)
b=a1.bt(0)
a=c.d
i=new Float32Array(H.bX(H.l(new V.aG(b.a,b.b,b.c,b.e,b.f,b.r,b.y,b.z,b.Q).ac(0,!0),"$ib",n,"$ab")))
C.c.ek(a.a,a.d,!1,i)
a=d.ga8(d)
b=c.e
C.c.t(b.a,b.d,a.a,a.b,a.c)
a=d.gb0()
b=a.gcr(a)
if(!b){b=c.r
C.c.Z(b.a,b.d,1)}else{b=c.f
a0=a.gcr(a)
a2=b.a
b=b.d
if(!a0)a2.uniform1i(b,0)
else a2.uniform1i(b,a.gjr(a))
b=c.r
C.c.Z(b.a,b.d,0)}b=d.gc2()
a=c.x
C.c.N(a.a,a.d,b)
b=d.gc3()
a=c.y
C.c.N(a.a,a.d,b)
b=d.gc4()
a=c.z
C.c.N(a.a,a.d,b);++f}}if(s.db>0){k=a3.dx.z.length
q=a3.a.dQ
C.c.Z(q.a,q.d,k)
q=a5.db
g=q.gR(q)
for(q=a3.dx.z,o=q.length,a4=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
n=a3.a.ck
if(f>=n.length)return H.f(n,f)
c=n[f]
n=d.gb0()
H.l(l,"$ib",a4,"$ab")
if(!C.a.a9(l,n)){n.a=l.length
C.a.h(l,n)}n=d.gb_(d)
h=c.b
C.c.t(h.a,h.d,n.a,n.b,n.c)
n=d.gcd(d)
h=c.c
C.c.t(h.a,h.d,n.a,n.b,n.c)
n=d.gjm()
h=c.d
C.c.t(h.a,h.d,n.a,n.b,n.c)
n=d.gbx(d)
h=c.e
C.c.t(h.a,h.d,n.a,n.b,n.c)
n=g.b3(d.gb_(d))
h=c.f
C.c.t(h.a,h.d,n.a,n.b,n.c)
n=d.gb0()
h=n.gcr(n)
if(!h){n=c.x
C.c.Z(n.a,n.d,1)}else{h=c.r
b=n.d
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,n.a)
n=c.x
C.c.Z(n.a,n.d,0)}n=d.ga8(d)
h=c.y
C.c.t(h.a,h.d,n.a,n.b,n.c)
n=d.gju()
h=c.z
C.c.N(h.a,h.d,n)
n=d.gjv()
h=c.Q
C.c.N(h.a,h.d,n)
n=d.gc2()
h=c.ch
C.c.N(h.a,h.d,n)
n=d.gc3()
h=c.cx
C.c.N(h.a,h.d,n)
n=d.gc4()
h=c.cy
C.c.N(h.a,h.d,n);++f}}}switch(s.f){case C.d:break
case C.i:break
case C.e:a3.U(l,a3.Q.d)
a4=a3.a
q=a3.Q.d
a4.af(a4.dB,a4.bl,q)
break
case C.h:a3.U(l,a3.Q.e)
a4=a3.a
q=a3.Q.e
a4.a6(a4.dC,a4.bl,q)
break}if(s.fr){a4=a3.a
q=a5.Q
if(q==null){q=a5.db
q=a5.Q=q.gR(q).bt(0)}a4=a4.id
a4.toString
a4.aj(q.ac(0,!0))}if(s.dy){a3.U(l,a3.ch)
a4=a3.a
q=a3.ch
a4.a6(a4.dD,a4.dE,q)
switch(s.r){case C.d:break
case C.i:a4=a3.a
q=a3.cx.f
a4=a4.bm
a4.toString
o=q.a
n=q.b
q=q.c
C.c.t(a4.a,a4.d,o,n,q)
break
case C.e:a3.U(l,a3.cx.d)
a4=a3.a
q=a3.cx.d
a4.af(a4.dF,a4.bn,q)
q=a3.a
a4=a3.cx.f
q=q.bm
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.t(q.a,q.d,o,n,a4)
break
case C.h:a3.U(l,a3.cx.e)
a4=a3.a
q=a3.cx.e
a4.a6(a4.dG,a4.bn,q)
q=a3.a
a4=a3.cx.f
q=q.bm
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.t(q.a,q.d,o,n,a4)
break}switch(s.x){case C.d:break
case C.i:a4=a3.a
q=a3.cy.f
a4=a4.bp
a4.toString
o=q.a
n=q.b
q=q.c
C.c.t(a4.a,a4.d,o,n,q)
q=a3.a
n=a3.cy.ch
q=q.bo
C.c.N(q.a,q.d,n)
break
case C.e:a3.U(l,a3.cy.d)
a4=a3.a
q=a3.cy.d
a4.af(a4.dH,a4.bq,q)
q=a3.a
a4=a3.cy.f
q=q.bp
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.t(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bo
C.c.N(a4.a,a4.d,n)
break
case C.h:a3.U(l,a3.cy.e)
a4=a3.a
q=a3.cy.e
a4.a6(a4.dI,a4.bq,q)
q=a3.a
a4=a3.cy.f
q=q.bp
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.t(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bo
C.c.N(a4.a,a4.d,n)
break}}a4=s.y
q=a4!==C.d
if(q){switch(a4){case C.d:break
case C.i:a4=a3.a
o=a3.db.f
a4=a4.br
C.c.N(a4.a,a4.d,o)
break
case C.e:a3.U(l,a3.db.d)
a4=a3.a
o=a3.db.d
a4.af(a4.dJ,a4.bs,o)
o=a3.a
a4=a3.db.f
o=o.br
C.c.N(o.a,o.d,a4)
break
case C.h:a3.U(l,a3.db.e)
a4=a3.a
o=a3.db.e
a4.a6(a4.dK,a4.bs,o)
o=a3.a
a4=a3.db.f
o=o.br
C.c.N(o.a,o.d,a4)
break}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){a4=l[j]
if(!a4.c&&a4.d){a4.c=!0
p.activeTexture(33984+a4.a)
p.bindTexture(3553,a4.b)}}a4=a6.e
a4.c5(a5)
a4.aP(a5)
a4.jl(a5)
if(q)p.disable(3042)
for(j=0;j<l.length;++j){a4=l[j]
if(a4.c){a4.c=!1
p.activeTexture(33984+a4.a)
p.bindTexture(3553,null)}}a4=a3.a
a4.toString
p.useProgram(null)
a4.x.iA()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cW().ag},
sf0:function(a){this.e=H.l(a,"$iZ",[V.aa],"$aZ")}}
O.h1.prototype={
hy:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.I().a)){u.f=a
t=new D.H(u.b,t,a,[P.y])
t.b=!0
u.a.V(t)}},
al:function(){this.cG()
this.hy(1)}}
O.cl.prototype={
V:function(a){this.a.V(H.e(a,"$iA"))},
bR:function(){return this.V(null)},
al:function(){},
hA:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().Y(0,t.gb9())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.gb9())
s=new D.H(t.b+".texture2D",u,t.d,[T.dN])
s.b=!0
t.a.V(s)}},
hB:function(a){},
seg:function(a){var u=this,t=u.c
if(t!==C.e){if(t===C.d)u.al()
u.c=C.e
u.hB(null)
t=u.a
t.a=null
t.V(null)}u.hA(a)}}
O.h2.prototype={}
O.aZ.prototype={
df:function(a){var u,t,s=this
if(!J.Y(s.f,a)){u=s.f
s.f=a
t=new D.H(s.b+".color",u,a,[V.a_])
t.b=!0
s.a.V(t)}},
al:function(){this.cG()
this.df(new V.a_(1,1,1))},
sa8:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.i
t.al()
u=t.a
u.a=null
u.V(null)}t.df(b)}}
O.h4.prototype={
hz:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.I().a)){u.ch=a
t=new D.H(u.b+".refraction",t,a,[P.y])
t.b=!0
u.a.V(t)}},
al:function(){this.bE()
this.hz(1)}}
O.h5.prototype={
bY:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.I().a)){u.ch=a
t=new D.H(u.b+".shininess",t,a,[P.y])
t.b=!0
u.a.V(t)}},
al:function(){this.bE()
this.bY(100)}}
O.bV.prototype={}
T.cz.prototype={}
T.dN.prototype={}
T.hV.prototype={
gp:function(){var u=this.y
return u==null?this.y=D.R():u}}
T.hW.prototype={
iO:function(a,b,c){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9987)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.hV()
t.a=0
t.b=q
t.d=t.c=!1
r=W.o
W.a7(u,"load",H.n(new T.hX(this,t,u,!1,q,!1,!0),{func:1,ret:-1,args:[r]}),!1,r)
return t},
hw:function(a,b,c){var u,t,s,r
b=V.kv(b)
u=V.kv(a.width)
t=V.kv(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jZ()
s.width=u
s.height=t
r=H.e(C.m.ep(s,"2d"),"$ic9")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.nF(r.getImageData(0,0,s.width,s.height))}}}
T.hX.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.hw(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.jf(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.iB()}++s.e},
$S:10}
V.eZ.prototype={
aN:function(a,b){return!0},
i:function(a){return"all"},
$ibb:1}
V.bb.prototype={}
V.du.prototype={
aN:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)if(u[s].aN(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sav:function(a){this.a=H.l(a,"$ib",[V.bb],"$ab")},
$ibb:1}
V.be.prototype={
aN:function(a,b){return!this.ew(0,b)},
i:function(a){return"!["+this.cF(0)+"]"}}
V.hz.prototype={
eA:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aF([P.p,P.X])
for(t=new H.ds(a,a.gk(a),[H.av(a,"x",0)]);t.w();)u.l(0,t.d,!0)
this.shx(u)},
aN:function(a,b){return this.a.bd(0,b)},
i:function(a){var u=this.a
return P.cy(u.gao(u),0,null)},
shx:function(a){this.a=H.l(a,"$iC",[P.p,P.X],"$aC")},
$ibb:1}
V.cw.prototype={
v:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cB(this.a.O(0,b))
r.sav(H.d([],[V.bb]))
r.c=!1
C.a.h(this.c,r)
return r},
iF:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.aN(0,a))return r}return},
i:function(a){return this.b},
shS:function(a){this.c=H.l(a,"$ib",[V.cB],"$ab")}}
V.dS.prototype={
i:function(a){var u=H.lM(this.b,"\n","\\n"),t=H.lM(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cA.prototype={
i:function(a){return this.b},
shr:function(a){var u=P.i
this.c=H.l(a,"$iC",[u,u],"$aC")}}
V.i_.prototype={
O:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cw(this,b)
u.shS(H.d([],[V.cB]))
u.d=null
this.a.l(0,b,u)}return u},
b2:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cA(a)
u=P.i
t.shr(new H.aF([u,u]))
this.b.l(0,a,t)}return t},
jk:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.dS]),k=this.c,j=[P.p],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.F(a,s)
q=k.iF(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cy(i,0,m)
throw H.c(P.w("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cy(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.dS(n==null?o.b:n,p,s)}++s}}},
shI:function(a){this.a=H.l(a,"$iC",[P.i,V.cw],"$aC")},
shL:function(a){this.b=H.l(a,"$iC",[P.i,V.cA],"$aC")}}
V.cB.prototype={
i:function(a){return this.b.b+": "+this.cF(0)}}
X.da.prototype={$ibd:1}
X.fH.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.R():u}}
X.dB.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.R():u},
aG:function(a){var u
H.e(a,"$iA")
u=this.f
if(u!=null)u.B(a)},
eV:function(){return this.aG(null)},
saO:function(a){var u,t,s=this
if(!J.Y(s.b,a)){u=s.b
if(u!=null)u.gp().Y(0,s.gcM())
t=s.b
s.b=a
if(a!=null)a.gp().h(0,s.gcM())
u=new D.H("mover",t,s.b,[U.a6])
u.b=!0
s.aG(u)}},
$ibd:1,
$ida:1}
X.dL.prototype={}
V.fd.prototype={
il:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
H.n(c,{func:1,ret:-1,args:[P.X]})
if(l.c==null)return
u=l.d.length
t=P.kd().gbw().j(0,l.a)
if(t==null||t.length<=u){s=!0
r=!1}else{if(u>=t.length)return H.f(t,u)
r=t[u]==="1"
s=!1}c.$1(r)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.kB(l.c).h(0,p)
n=W.mo("checkbox")
n.checked=r
o=W.o
W.a7(n,"change",H.n(new V.fe(l,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.kB(l.c).h(0,q.createElement("br"))
C.a.h(l.d,n)
if(s)l.dj(u,r)},
dj:function(a,b){var u,t,s,r,q,p=this.a,o=P.kd().gbw().j(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.b.j_(o,a-u+1,"0")
t=a>0?C.b.u(o,0,a):""
t+=H.D(b)?"1":"0"
u=a+1
if(u<o.length)t+=C.b.ar(o,u)
s=P.kd()
u=P.i
r=P.mu(s.gbw(),u,u)
r.l(0,p,t)
q=s.ec(0,r)
p=window.history
u=q.i(0)
p.toString
p.replaceState(new P.jf([],[]).cB(""),"",u)},
sf3:function(a){this.d=H.l(a,"$ib",[W.ca],"$ab")}}
V.fe.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.dj(u.d,t.checked)},
$S:10}
V.jS.prototype={
$1:function(a){H.e(a,"$ib1")
P.kw(C.j.ej(this.a.giH(),2)+" fps")},
$S:47}
V.hD.prototype={
eC:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a7(q,"scroll",H.n(new V.hF(o),{func:1,ret:-1,args:[r]}),!1,r)},
dm:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.i],"$ab")
this.hD()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jk(C.a.iM(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q){p=s[q]
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
if(H.o0(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.L(m[1])
l.textContent=H.L(m[0])
t.appendChild(l)}else{k=P.jp(C.S,n,C.l,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.m(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
im:function(a){var u,t,s,r,q,p,o,n="auto"
H.l(a,"$ib",[P.i],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft=n
s.marginRight=n
this.a.appendChild(t)
r=t.insertRow(-1)
s=H.e(r.insertCell(-1),"$ibf").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<1;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.e(r.insertCell(-1),"$ibf")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hD:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.i_()
t=P.i
u.shI(new H.aF([t,V.cw]))
u.shL(new H.aF([t,V.cA]))
u.c=null
u.c=u.O(0,q)
t=u.O(0,q).v(0,p)
s=V.aj(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,p).v(0,p)
s=new V.be()
r=[V.bb]
s.sav(H.d([],r))
C.a.h(t.a,s)
t=V.aj(new H.a4("*"))
C.a.h(s.a,t)
t=u.O(0,p).v(0,"BoldEnd")
s=V.aj(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,q).v(0,o)
s=V.aj(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,o).v(0,o)
s=new V.be()
s.sav(H.d([],r))
C.a.h(t.a,s)
t=V.aj(new H.a4("_"))
C.a.h(s.a,t)
t=u.O(0,o).v(0,n)
s=V.aj(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,q).v(0,m)
s=V.aj(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,m).v(0,m)
s=new V.be()
s.sav(H.d([],r))
C.a.h(t.a,s)
t=V.aj(new H.a4("`"))
C.a.h(s.a,t)
t=u.O(0,m).v(0,"CodeEnd")
s=V.aj(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,q).v(0,l)
s=V.aj(new H.a4("["))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,l).v(0,k)
s=V.aj(new H.a4("|"))
C.a.h(t.a,s)
s=u.O(0,l).v(0,j)
t=V.aj(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.O(0,l).v(0,l)
t=new V.be()
t.sav(H.d([],r))
C.a.h(s.a,t)
s=V.aj(new H.a4("|]"))
C.a.h(t.a,s)
s=u.O(0,k).v(0,j)
t=V.aj(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.O(0,k).v(0,k)
t=new V.be()
t.sav(H.d([],r))
C.a.h(s.a,t)
s=V.aj(new H.a4("|]"))
C.a.h(t.a,s)
C.a.h(u.O(0,q).v(0,i).a,new V.eZ())
s=u.O(0,i).v(0,i)
t=new V.be()
t.sav(H.d([],r))
C.a.h(s.a,t)
s=V.aj(new H.a4("*_`["))
C.a.h(t.a,s)
s=u.O(0,"BoldEnd")
s.d=s.a.b2(p)
s=u.O(0,n)
s.d=s.a.b2(o)
s=u.O(0,"CodeEnd")
s.d=s.a.b2(m)
s=u.O(0,j)
s.d=s.a.b2("Link")
s=u.O(0,i)
s.d=s.a.b2(i)
this.b=u}}
V.hF.prototype={
$1:function(a){P.l4(C.r,new V.hE(this.a))},
$S:10}
V.hE.prototype={
$0:function(){var u=C.j.ai(document.documentElement.scrollTop),t=this.a.style,s=H.m(-0.01*u)+"px"
t.top=s},
$S:2}
X.jO.prototype={
$1:function(a){var u,t,s,r,q
H.e(a,"$iA")
u=this.a
t=-this.b.c.d
s=Math.cos(t)
r=Math.sin(t)
t=new V.aG(s,0,-r,0,1,0,r,0,s)
if(!J.Y(u.z,t)){q=u.z
u.z=t
u.Q=t.bt(0)
t=new D.H("velocityRotation",q,u.z,[V.aG])
t.b=!0
u.I(t)}},
$S:8}
X.jP.prototype={
$1:function(a){this.a.r.r=a},
$S:36};(function aliases(){var u=J.a.prototype
u.eu=u.i
u=J.dp.prototype
u.ev=u.i
u=O.cl.prototype
u.cG=u.al
u=O.aZ.prototype
u.bE=u.al
u=V.du.prototype
u.ew=u.aN
u.cF=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"nz","n5",11)
u(P,"nA","n6",11)
u(P,"nB","n7",11)
t(P,"lA","nx",3)
var n
s(n=E.am.prototype,"ge3",0,0,null,["$1","$0"],["e4","iY"],0,0)
s(n,"ge5",0,0,null,["$1","$0"],["e6","iZ"],0,0)
s(n,"ge1",0,0,null,["$1","$0"],["e2","iX"],0,0)
s(n,"ge_",0,0,null,["$1","$0"],["e0","iU"],0,0)
r(n,"giS","iT",7)
r(n,"giV","iW",7)
s(n=E.dR.prototype,"gcI",0,0,null,["$1","$0"],["cK","cJ"],0,0)
q(n,"gjb","ed",3)
p(n=X.dq.prototype,"geG","eH",30)
r(n,"geE","eF",18)
r(n,"geI","eJ",18)
p(n,"gbF","bG",1)
p(n,"gbS","bT",1)
p(n=X.dY.prototype,"gfV","fW",12)
p(n,"gfJ","fK",12)
p(n,"gfP","fQ",4)
p(n,"gbS","bT",22)
p(n,"gbF","bG",22)
p(n,"gh0","h1",4)
p(n,"gh4","h5",4)
p(n,"gfT","fU",4)
p(n,"gh2","h3",4)
p(n,"gfR","fS",4)
p(n,"gh6","h7",48)
p(n,"gh8","h9",12)
p(n,"ghk","hl",13)
p(n,"ghg","hh",13)
p(n,"ghi","hj",13)
s(D.bo.prototype,"geL",0,0,null,["$1","$0"],["as","eM"],0,0)
s(n=D.dr.prototype,"gd7",0,0,null,["$1","$0"],["d8","fZ"],0,0)
p(n,"gha","hb",38)
r(n,"gfD","fE",23)
r(n,"ghe","hf",23)
o(V.a3.prototype,"gk","cp",24)
o(V.Q.prototype,"gk","cp",24)
s(n=U.ch.prototype,"gaD",0,0,null,["$1","$0"],["I","a5"],0,0)
r(n,"gfB","fC",14)
r(n,"ghc","hd",14)
s(n=U.dZ.prototype,"gaD",0,0,null,["$1","$0"],["I","a5"],0,0)
p(n,"gft","fu",1)
p(n,"gfv","fw",1)
p(n,"gfz","fA",1)
p(n,"gfo","fp",1)
p(n,"gfq","fs",1)
p(n,"ghQ","hR",1)
p(n,"ghO","hP",1)
p(n,"ghM","hN",1)
s(n=U.e_.prototype,"gaD",0,0,null,["$1","$0"],["I","a5"],0,0)
p(n,"gfX","fY",1)
s(n=M.dg.prototype,"gaE",0,0,null,["$1","$0"],["aF","eS"],0,0)
r(n,"gfL","fM",7)
r(n,"gfN","fO",7)
s(n=O.dv.prototype,"gb9",0,0,null,["$1","$0"],["V","bR"],0,0)
s(n,"ghu",0,0,null,["$1","$0"],["dd","hv"],0,0)
r(n,"gfF","fG",15)
r(n,"gfH","fI",15)
s(O.cl.prototype,"gb9",0,0,null,["$1","$0"],["V","bR"],0,0)
s(X.dB.prototype,"gcM",0,0,null,["$1","$0"],["aG","eV"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.k5,J.a,J.ap,P.eh,P.h,H.ds,P.aV,H.bN,H.cK,H.fi,H.i4,P.bq,H.cb,H.ey,P.af,H.fP,H.fR,H.fL,P.eE,P.b6,P.aA,P.e2,P.hN,P.cx,P.hO,P.b1,P.al,P.js,P.jb,P.cN,P.j5,P.x,P.jk,P.fY,P.bH,P.jr,P.jq,P.X,P.at,P.a8,P.bp,P.hl,P.dK,P.ea,P.fG,P.b,P.C,P.J,P.aq,P.i,P.ak,P.bW,P.ik,P.jc,W.fl,W.ca,W.B,W.dj,P.je,P.eJ,P.j6,P.P,O.Z,O.cm,E.f9,E.am,E.hr,E.dR,Z.e1,Z.iE,Z.d8,Z.br,Z.b4,D.fc,D.bM,D.A,X.d9,X.ae,X.fN,X.fV,X.bc,X.hc,X.i0,X.dY,D.bo,D.a5,D.dC,D.dJ,D.dO,D.dP,D.dQ,V.a_,V.bI,V.fy,V.aG,V.aa,V.ag,V.ah,V.ct,V.dF,V.a3,V.Q,U.dZ,U.e_,M.dg,A.d5,A.f2,A.h3,A.cC,A.cG,A.cE,A.cH,A.cF,A.cI,A.bJ,A.dU,A.id,F.a9,F.ba,F.bx,F.dI,F.hA,F.hB,F.hC,F.aQ,F.iv,F.iw,F.iz,F.iA,O.bV,O.cl,T.hW,V.eZ,V.bb,V.du,V.hz,V.cw,V.dS,V.cA,V.i_,X.da,X.dL,X.dB,V.fd,V.hD])
s(J.a,[J.fK,J.dm,J.dp,J.aW,J.dn,J.bP,H.co,H.bw,W.j,W.eY,W.bF,W.c9,W.aT,W.aU,W.T,W.e4,W.fp,W.fq,W.e6,W.df,W.e8,W.fs,W.o,W.eb,W.aE,W.fI,W.ed,W.b9,W.fU,W.h6,W.ei,W.ej,W.aH,W.ek,W.en,W.aI,W.er,W.et,W.aK,W.eu,W.aL,W.ez,W.ax,W.eC,W.hZ,W.aN,W.eF,W.i2,W.iq,W.eL,W.eN,W.eP,W.eR,W.eT,P.aY,P.ef,P.b0,P.ep,P.hp,P.eA,P.b2,P.eH,P.f3,P.e3,P.d6,P.dE,P.bU,P.dH,P.dM,P.dV,P.ew])
s(J.dp,[J.hm,J.cJ,J.bu])
t(J.k4,J.aW)
s(J.dn,[J.dl,J.dk])
t(P.fT,P.eh)
s(P.fT,[H.dW,W.iN,W.iM,P.fC])
t(H.a4,H.dW)
s(P.h,[H.fv,H.fZ,H.iF])
s(P.aV,[H.h_,H.iG])
t(H.fj,H.fi)
s(P.bq,[H.hi,H.fM,H.ii,H.i6,H.fb,H.hx,P.f1,P.dA,P.aR,P.ij,P.ig,P.hJ,P.fg,P.fo])
s(H.cb,[H.jT,H.hS,H.jJ,H.jK,H.jL,P.iJ,P.iI,P.iK,P.iL,P.jj,P.ji,P.iT,P.iX,P.iU,P.iV,P.iW,P.j_,P.j0,P.iZ,P.iY,P.hP,P.hQ,P.jA,P.j9,P.j8,P.ja,P.fS,P.fX,P.ft,P.fu,P.ip,P.il,P.im,P.io,P.jl,P.jm,P.jo,P.jn,P.jw,P.jv,P.jx,P.jy,W.h8,W.ha,W.hw,W.hM,W.iS,P.jg,P.jC,P.fD,P.fE,P.f5,E.hs,E.ht,E.hu,E.hY,D.fz,D.fA,F.jt,F.jG,F.jH,F.iC,F.iB,F.ix,F.iy,T.hX,V.fe,V.jS,V.hF,V.hE,X.jO,X.jP])
s(H.hS,[H.hK,H.c7])
t(H.iH,P.f1)
t(P.fW,P.af)
t(H.aF,P.fW)
t(H.fQ,H.fv)
t(H.dx,H.bw)
s(H.dx,[H.cO,H.cQ])
t(H.cP,H.cO)
t(H.cp,H.cP)
t(H.cR,H.cQ)
t(H.dy,H.cR)
s(H.dy,[H.hd,H.he,H.hf,H.hg,H.hh,H.dz,H.cq])
t(P.j7,P.js)
t(P.j4,P.jb)
t(P.eK,P.fY)
t(P.dX,P.eK)
s(P.bH,[P.f7,P.fw])
t(P.bL,P.hO)
s(P.bL,[P.f8,P.it,P.is])
t(P.ir,P.fw)
s(P.a8,[P.y,P.p])
s(P.aR,[P.bT,P.fJ])
t(P.iP,P.bW)
s(W.j,[W.G,W.fB,W.cn,W.aJ,W.cS,W.aM,W.ay,W.cU,W.iD,W.cL,P.f6,P.bE])
s(W.G,[W.a1,W.bn])
s(W.a1,[W.t,P.q])
s(W.t,[W.f_,W.f0,W.bG,W.dd,W.fF,W.ci,W.cj,W.hy,W.bf])
s(W.aT,[W.cd,W.fm,W.fn])
t(W.fk,W.aU)
t(W.ce,W.e4)
t(W.e7,W.e6)
t(W.de,W.e7)
t(W.e9,W.e8)
t(W.fr,W.e9)
t(W.aw,W.bF)
t(W.ec,W.eb)
t(W.cf,W.ec)
t(W.ee,W.ed)
t(W.bO,W.ee)
t(W.bA,W.o)
s(W.bA,[W.aX,W.ab,W.aO])
t(W.h7,W.ei)
t(W.h9,W.ej)
t(W.el,W.ek)
t(W.hb,W.el)
t(W.eo,W.en)
t(W.cr,W.eo)
t(W.es,W.er)
t(W.hn,W.es)
t(W.hv,W.et)
t(W.cT,W.cS)
t(W.hG,W.cT)
t(W.ev,W.eu)
t(W.hH,W.ev)
t(W.hL,W.ez)
t(W.eD,W.eC)
t(W.hT,W.eD)
t(W.cV,W.cU)
t(W.hU,W.cV)
t(W.eG,W.eF)
t(W.i1,W.eG)
t(W.b5,W.ab)
t(W.eM,W.eL)
t(W.iO,W.eM)
t(W.e5,W.df)
t(W.eO,W.eN)
t(W.j1,W.eO)
t(W.eQ,W.eP)
t(W.em,W.eQ)
t(W.eS,W.eR)
t(W.jd,W.eS)
t(W.eU,W.eT)
t(W.jh,W.eU)
t(W.iQ,P.hN)
t(W.kg,W.iQ)
t(W.iR,P.cx)
t(P.jf,P.je)
t(P.ai,P.j6)
t(P.eg,P.ef)
t(P.fO,P.eg)
t(P.eq,P.ep)
t(P.hj,P.eq)
t(P.eB,P.eA)
t(P.hR,P.eB)
t(P.eI,P.eH)
t(P.i3,P.eI)
t(P.f4,P.e3)
t(P.hk,P.bE)
t(P.ex,P.ew)
t(P.hI,P.ex)
s(E.f9,[Z.d7,A.cv,T.cz])
s(D.A,[D.bs,D.bt,D.H,X.bQ,X.ho])
s(O.Z,[X.dq,D.dr,U.ch])
s(X.ho,[X.dt,X.bv,X.dT])
s(D.fc,[U.ff,U.a6])
s(U.a6,[U.cc,U.dG])
t(A.h0,A.cv)
s(A.dU,[A.N,A.i9,A.ia,A.ic,A.i7,A.a0,A.i8,A.M,A.ib,A.ie,A.cD,A.au,A.an,A.ao])
t(O.dv,O.bV)
s(O.cl,[O.h1,O.h2,O.aZ])
s(O.aZ,[O.h4,O.h5])
t(T.dN,T.cz)
t(T.hV,T.dN)
s(V.du,[V.be,V.cB])
t(X.fH,X.dL)
u(H.dW,H.cK)
u(H.cO,P.x)
u(H.cP,H.bN)
u(H.cQ,P.x)
u(H.cR,H.bN)
u(P.eh,P.x)
u(P.eK,P.jk)
u(W.e4,W.fl)
u(W.e6,P.x)
u(W.e7,W.B)
u(W.e8,P.x)
u(W.e9,W.B)
u(W.eb,P.x)
u(W.ec,W.B)
u(W.ed,P.x)
u(W.ee,W.B)
u(W.ei,P.af)
u(W.ej,P.af)
u(W.ek,P.x)
u(W.el,W.B)
u(W.en,P.x)
u(W.eo,W.B)
u(W.er,P.x)
u(W.es,W.B)
u(W.et,P.af)
u(W.cS,P.x)
u(W.cT,W.B)
u(W.eu,P.x)
u(W.ev,W.B)
u(W.ez,P.af)
u(W.eC,P.x)
u(W.eD,W.B)
u(W.cU,P.x)
u(W.cV,W.B)
u(W.eF,P.x)
u(W.eG,W.B)
u(W.eL,P.x)
u(W.eM,W.B)
u(W.eN,P.x)
u(W.eO,W.B)
u(W.eP,P.x)
u(W.eQ,W.B)
u(W.eR,P.x)
u(W.eS,W.B)
u(W.eT,P.x)
u(W.eU,W.B)
u(P.ef,P.x)
u(P.eg,W.B)
u(P.ep,P.x)
u(P.eq,W.B)
u(P.eA,P.x)
u(P.eB,W.B)
u(P.eH,P.x)
u(P.eI,W.B)
u(P.e3,P.af)
u(P.ew,P.x)
u(P.ex,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.m=W.bG.prototype
C.N=J.a.prototype
C.a=J.aW.prototype
C.O=J.dk.prototype
C.f=J.dl.prototype
C.t=J.dm.prototype
C.j=J.dn.prototype
C.b=J.bP.prototype
C.P=J.bu.prototype
C.V=W.cr.prototype
C.A=J.hm.prototype
C.c=P.bU.prototype
C.u=J.cJ.prototype
C.B=W.b5.prototype
C.C=W.cL.prototype
C.W=new P.f8()
C.D=new P.f7()
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.E=function() {
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
C.J=function(getTagFallback) {
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
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.I=function(hooks) {
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
C.H=function(hooks) {
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
C.w=function(hooks) { return hooks; }

C.K=new P.hl()
C.l=new P.ir()
C.L=new P.it()
C.k=new P.j7()
C.d=new A.bJ(0,"ColorSourceType.None")
C.i=new A.bJ(1,"ColorSourceType.Solid")
C.e=new A.bJ(2,"ColorSourceType.Texture2D")
C.h=new A.bJ(3,"ColorSourceType.TextureCube")
C.r=new P.bp(0)
C.M=new P.bp(5e6)
C.x=H.d(u([127,2047,65535,1114111]),[P.p])
C.n=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.p])
C.o=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.p])
C.p=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.p])
C.R=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.p])
C.S=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.q=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.p])
C.y=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.p])
C.T=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.p])
C.z=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.p])
C.Q=H.d(u([]),[P.i])
C.U=new H.fj(0,{},C.Q,[P.i,P.i])})()
var v={mangledGlobalNames:{p:"int",y:"double",a8:"num",i:"String",X:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.ab]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.p,[P.h,E.am]]},{func:1,ret:P.J,args:[D.A]},{func:1,ret:P.J,args:[F.a9]},{func:1,ret:P.J,args:[W.o]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:-1,args:[P.p,[P.h,U.a6]]},{func:1,ret:-1,args:[P.p,[P.h,V.aa]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.p,[P.h,X.ae]]},{func:1,ret:P.J,args:[,]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.i,args:[P.p]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[P.p,[P.h,D.a5]]},{func:1,ret:P.y},{func:1,ret:P.J,args:[F.aQ,P.y,P.y]},{func:1,ret:P.J,args:[,],opt:[P.aq]},{func:1,ret:P.P,args:[P.p]},{func:1,ret:P.J,args:[P.a8]},{func:1,ret:P.J,args:[P.i,,]},{func:1,ret:P.X,args:[[P.h,X.ae]]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,args:[,P.i]},{func:1,ret:[P.C,P.i,P.i],args:[[P.C,P.i,P.i],P.i]},{func:1,args:[W.o]},{func:1,ret:P.J,args:[P.X]},{func:1,ret:-1,args:[P.i,P.p]},{func:1,ret:P.X,args:[[P.h,D.a5]]},{func:1,ret:P.X,args:[W.G]},{func:1,ret:W.a1,args:[W.G]},{func:1,ret:P.i,args:[P.i]},{func:1,args:[P.i]},{func:1,ret:P.y,args:[P.y,P.y]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.J,args:[P.i]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.J,args:[P.b1]},{func:1,ret:-1,args:[W.b5]},{func:1,ret:[P.aA,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aS=0
$.c8=null
$.kD=null
$.kk=!1
$.lE=null
$.ly=null
$.lK=null
$.jD=null
$.jM=null
$.kt=null
$.bY=null
$.cZ=null
$.d_=null
$.kl=!1
$.W=C.k
$.ar=[]
$.kM=null
$.kQ=null
$.kU=null
$.cs=null
$.l_=null
$.la=null
$.ld=null
$.lc=null
$.iu=null
$.lb=null
$.kT=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"o7","lQ",function(){return H.lD("_$dart_dartClosure")})
u($,"o8","kx",function(){return H.lD("_$dart_js")})
u($,"od","lR",function(){return H.b3(H.i5({
toString:function(){return"$receiver$"}}))})
u($,"oe","lS",function(){return H.b3(H.i5({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"of","lT",function(){return H.b3(H.i5(null))})
u($,"og","lU",function(){return H.b3(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oj","lX",function(){return H.b3(H.i5(void 0))})
u($,"ok","lY",function(){return H.b3(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oi","lW",function(){return H.b3(H.l6(null))})
u($,"oh","lV",function(){return H.b3(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"om","m_",function(){return H.b3(H.l6(void 0))})
u($,"ol","lZ",function(){return H.b3(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oC","ky",function(){return P.n4()})
u($,"oo","m0",function(){return P.n0()})
u($,"oD","m4",function(){return H.mB(H.bX(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"oE","m5",function(){return P.mP("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oF","m6",function(){return P.nq()})
u($,"ov","m3",function(){return Z.az(0)})
u($,"op","m1",function(){return Z.az(511)})
u($,"ox","bk",function(){return Z.az(1)})
u($,"ow","bj",function(){return Z.az(2)})
u($,"or","bi",function(){return Z.az(4)})
u($,"oy","bl",function(){return Z.az(8)})
u($,"oz","bm",function(){return Z.az(16)})
u($,"os","d1",function(){return Z.az(32)})
u($,"ot","d2",function(){return Z.az(64)})
u($,"ou","m2",function(){return Z.az(96)})
u($,"oA","c6",function(){return Z.az(128)})
u($,"oq","bh",function(){return Z.az(256)})
u($,"o6","lP",function(){return new V.fy(1e-9)})
u($,"o5","I",function(){return $.lP()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.co,DataView:H.bw,ArrayBufferView:H.bw,Float32Array:H.cp,Float64Array:H.cp,Int16Array:H.hd,Int32Array:H.he,Int8Array:H.hf,Uint16Array:H.hg,Uint32Array:H.hh,Uint8ClampedArray:H.dz,CanvasPixelArray:H.dz,Uint8Array:H.cq,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLBaseElement:W.t,HTMLBodyElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTableElement:W.t,HTMLTableRowElement:W.t,HTMLTableSectionElement:W.t,HTMLTemplateElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.eY,HTMLAnchorElement:W.f_,HTMLAreaElement:W.f0,Blob:W.bF,HTMLCanvasElement:W.bG,CanvasRenderingContext2D:W.c9,CDATASection:W.bn,CharacterData:W.bn,Comment:W.bn,ProcessingInstruction:W.bn,Text:W.bn,CSSNumericValue:W.cd,CSSUnitValue:W.cd,CSSPerspective:W.fk,CSSCharsetRule:W.T,CSSConditionRule:W.T,CSSFontFaceRule:W.T,CSSGroupingRule:W.T,CSSImportRule:W.T,CSSKeyframeRule:W.T,MozCSSKeyframeRule:W.T,WebKitCSSKeyframeRule:W.T,CSSKeyframesRule:W.T,MozCSSKeyframesRule:W.T,WebKitCSSKeyframesRule:W.T,CSSMediaRule:W.T,CSSNamespaceRule:W.T,CSSPageRule:W.T,CSSRule:W.T,CSSStyleRule:W.T,CSSSupportsRule:W.T,CSSViewportRule:W.T,CSSStyleDeclaration:W.ce,MSStyleCSSProperties:W.ce,CSS2Properties:W.ce,CSSImageValue:W.aT,CSSKeywordValue:W.aT,CSSPositionValue:W.aT,CSSResourceValue:W.aT,CSSURLImageValue:W.aT,CSSStyleValue:W.aT,CSSMatrixComponent:W.aU,CSSRotation:W.aU,CSSScale:W.aU,CSSSkew:W.aU,CSSTranslation:W.aU,CSSTransformComponent:W.aU,CSSTransformValue:W.fm,CSSUnparsedValue:W.fn,DataTransferItemList:W.fp,HTMLDivElement:W.dd,DOMException:W.fq,ClientRectList:W.de,DOMRectList:W.de,DOMRectReadOnly:W.df,DOMStringList:W.fr,DOMTokenList:W.fs,Element:W.a1,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aw,FileList:W.cf,FileWriter:W.fB,HTMLFormElement:W.fF,Gamepad:W.aE,History:W.fI,HTMLCollection:W.bO,HTMLFormControlsCollection:W.bO,HTMLOptionsCollection:W.bO,ImageData:W.b9,HTMLImageElement:W.ci,HTMLInputElement:W.cj,KeyboardEvent:W.aX,Location:W.fU,MediaList:W.h6,MessagePort:W.cn,MIDIInputMap:W.h7,MIDIOutputMap:W.h9,MimeType:W.aH,MimeTypeArray:W.hb,PointerEvent:W.ab,MouseEvent:W.ab,DragEvent:W.ab,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cr,RadioNodeList:W.cr,Plugin:W.aI,PluginArray:W.hn,RTCStatsReport:W.hv,HTMLSelectElement:W.hy,SourceBuffer:W.aJ,SourceBufferList:W.hG,SpeechGrammar:W.aK,SpeechGrammarList:W.hH,SpeechRecognitionResult:W.aL,Storage:W.hL,CSSStyleSheet:W.ax,StyleSheet:W.ax,HTMLTableCellElement:W.bf,HTMLTableDataCellElement:W.bf,HTMLTableHeaderCellElement:W.bf,TextTrack:W.aM,TextTrackCue:W.ay,VTTCue:W.ay,TextTrackCueList:W.hT,TextTrackList:W.hU,TimeRanges:W.hZ,Touch:W.aN,TouchEvent:W.aO,TouchList:W.i1,TrackDefaultList:W.i2,CompositionEvent:W.bA,FocusEvent:W.bA,TextEvent:W.bA,UIEvent:W.bA,URL:W.iq,VideoTrackList:W.iD,WheelEvent:W.b5,Window:W.cL,DOMWindow:W.cL,CSSRuleList:W.iO,ClientRect:W.e5,DOMRect:W.e5,GamepadList:W.j1,NamedNodeMap:W.em,MozNamedAttrMap:W.em,SpeechRecognitionResultList:W.jd,StyleSheetList:W.jh,SVGLength:P.aY,SVGLengthList:P.fO,SVGNumber:P.b0,SVGNumberList:P.hj,SVGPointList:P.hp,SVGStringList:P.hR,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGScriptElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGTransform:P.b2,SVGTransformList:P.i3,AudioBuffer:P.f3,AudioParamMap:P.f4,AudioTrackList:P.f6,AudioContext:P.bE,webkitAudioContext:P.bE,BaseAudioContext:P.bE,OfflineAudioContext:P.hk,WebGLBuffer:P.d6,WebGLProgram:P.dE,WebGL2RenderingContext:P.bU,WebGLShader:P.dH,WebGLTexture:P.dM,WebGLUniformLocation:P.dV,SQLResultSetRowList:P.hI})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dx.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.dy.$nativeSuperclassTag="ArrayBufferView"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.lH,[])
else X.lH([])})})()
//# sourceMappingURL=test.dart.js.map
