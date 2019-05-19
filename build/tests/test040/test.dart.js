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
a[c]=function(){a[c]=function(){H.oG(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.l0(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kG:function kG(){},
k9:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
ln:function(){return new P.i8("No element")},
a4:function a4(a){this.a=a},
fQ:function fQ(){},
dM:function dM(a,b,c){var _=this
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
j6:function j6(a,b,c){this.a=a
this.b=b
this.$ti=c},
j7:function j7(a,b,c){this.a=a
this.b=b
this.$ti=c},
c0:function c0(){},
cX:function cX(){},
ef:function ef(){},
mX:function(){throw H.c(P.H("Cannot modify unmodifiable Map"))},
cj:function(a){var u,t=H.Q(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
oo:function(a){return v.types[H.ad(a)]},
ou:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iM},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ax(a)
if(typeof u!=="string")throw H.c(H.aI(a))
return u},
cF:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nn:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.Q(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ai(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.J(s,q)|32)>t)return}return parseInt(a,b)},
c5:function(a){return H.ne(a)+H.kY(H.bQ(a),0,null)},
ne:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$icW){r=C.x(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cj(t.length>1&&C.b.J(t,0)===36?C.b.aF(t,1):t)},
nf:function(){if(!!self.location)return self.location.href
return},
lC:function(a){var u,t,s,r,q
H.ke(a)
u=J.aL(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
no:function(a){var u,t,s,r=H.d([],[P.o])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.G)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aI(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aT(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aI(s))}return H.lC(r)},
lD:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aI(s))
if(s<0)throw H.c(H.aI(s))
if(s>65535)return H.no(a)}return H.lC(a)},
np:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dW:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aT(u,10))>>>0,56320|u&1023)}}throw H.c(P.ai(a,0,1114111,null,null))},
c4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nm:function(a){var u=H.c4(a).getFullYear()+0
return u},
nk:function(a){var u=H.c4(a).getMonth()+1
return u},
ng:function(a){var u=H.c4(a).getDate()+0
return u},
nh:function(a){var u=H.c4(a).getHours()+0
return u},
nj:function(a){var u=H.c4(a).getMinutes()+0
return u},
nl:function(a){var u=H.c4(a).getSeconds()+0
return u},
ni:function(a){var u=H.c4(a).getMilliseconds()+0
return u},
w:function(a){throw H.c(H.aI(a))},
e:function(a,b){if(a==null)J.aL(a)
throw H.c(H.ce(a,b))},
ce:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aZ(!0,b,s,null)
u=H.ad(J.aL(a))
if(!(b<0)){if(typeof u!=="number")return H.w(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,s,null,u)
return P.dY(b,s)},
oj:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c6(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c6(a,c,!0,b,"end",u)
return new P.aZ(!0,b,"end",null)},
aI:function(a){return new P.aZ(!0,a,null,null)},
of:function(a){if(typeof a!=="number")throw H.c(H.aI(a))
return a},
c:function(a){var u
if(a==null)a=new P.dU()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mu})
u.name=""}else u.toString=H.mu
return u},
mu:function(){return J.ax(this.dartException)},
t:function(a){throw H.c(a)},
G:function(a){throw H.c(P.bZ(a))},
bd:function(a){var u,t,s,r,q,p
a=H.mq(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.j])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ix(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lL:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lw:function(a,b){return new H.hH(a,b==null?null:b.method)},
kH:function(a,b){var u=b==null,t=u?null:b.method
return new H.h8(a,t,u?null:b.receiver)},
aJ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kr(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aT(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kH(H.m(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lw(H.m(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mx()
q=$.my()
p=$.mz()
o=$.mA()
n=$.mD()
m=$.mE()
l=$.mC()
$.mB()
k=$.mG()
j=$.mF()
i=r.an(u)
if(i!=null)return f.$1(H.kH(H.Q(u),i))
else{i=q.an(u)
if(i!=null){i.method="call"
return f.$1(H.kH(H.Q(u),i))}else{i=p.an(u)
if(i==null){i=o.an(u)
if(i==null){i=n.an(u)
if(i==null){i=m.an(u)
if(i==null){i=l.an(u)
if(i==null){i=o.an(u)
if(i==null){i=k.an(u)
if(i==null){i=j.an(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lw(H.Q(u),i))}}return f.$1(new H.iJ(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e3()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aZ(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e3()
return a},
ch:function(a){var u
if(a==null)return new H.eR(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eR(a)},
on:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
ot:function(a,b,c,d,e,f){H.f(a,"$ikC")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
cd:function(a,b){var u
H.ad(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ot)
a.$identity=u
return u},
mW:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.i9().constructor.prototype):Object.create(new H.ck(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b_
if(typeof t!=="number")return t.D()
$.b_=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lg(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.oo,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lf:H.kx
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lg(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
mT:function(a,b,c,d){var u=H.kx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lg:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mV(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mT(t,!r,u,b)
if(t===0){r=$.b_
if(typeof r!=="number")return r.D()
$.b_=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cl
return new Function(r+H.m(q==null?$.cl=H.fu("self"):q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b_
if(typeof r!=="number")return r.D()
$.b_=r+1
o+=r
r="return function("+o+"){return this."
q=$.cl
return new Function(r+H.m(q==null?$.cl=H.fu("self"):q)+"."+H.m(u)+"("+o+");}")()},
mU:function(a,b,c,d){var u=H.kx,t=H.lf
switch(b?-1:a){case 0:throw H.c(H.nt("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mV:function(a,b){var u,t,s,r,q,p,o,n=$.cl
if(n==null)n=$.cl=H.fu("self")
u=$.le
if(u==null)u=$.le=H.fu("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mU(s,!q,t,b)
if(s===1){n="return function(){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+");"
u=$.b_
if(typeof u!=="number")return u.D()
$.b_=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+", "+o+");"
u=$.b_
if(typeof u!=="number")return u.D()
$.b_=u+1
return new Function(n+u+"}")()},
l0:function(a,b,c,d,e,f,g){return H.mW(a,b,H.ad(c),d,!!e,!!f,g)},
kx:function(a){return a.a},
lf:function(a){return a.c},
fu:function(a){var u,t,s,r=new H.ck("self","target","receiver","name"),q=J.kE(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
C:function(a){if(a==null)H.ob("boolean expression must not be null")
return a},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aX(a,"String"))},
ok:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aX(a,"double"))},
oy:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aX(a,"num"))},
mg:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aX(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aX(a,"int"))},
mo:function(a,b){throw H.c(H.aX(a,H.cj(H.Q(b).substring(2))))},
oA:function(a,b){throw H.c(H.mS(a,H.cj(H.Q(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.mo(a,b)},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.oA(a,b)},
ke:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.c(H.aX(a,"List<dynamic>"))},
ml:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.mo(a,b)},
mh:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
fd:function(a,b){var u
if(typeof a=="function")return!0
u=H.mh(J.V(a))
if(u==null)return!1
return H.m5(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.kV)return a
$.kV=!0
try{if(H.fd(a,b))return a
u=H.kn(b)
t=H.aX(a,u)
throw H.c(t)}finally{$.kV=!1}},
l1:function(a,b){if(a!=null&&!H.l_(a,b))H.t(H.aX(a,H.kn(b)))
return a},
aX:function(a,b){return new H.iz("TypeError: "+P.dz(a)+": type '"+H.mb(a)+"' is not a subtype of type '"+b+"'")},
mS:function(a,b){return new H.fv("CastError: "+P.dz(a)+": type '"+H.mb(a)+"' is not a subtype of type '"+b+"'")},
mb:function(a){var u,t=J.V(a)
if(!!t.$ico){u=H.mh(t)
if(u!=null)return H.kn(u)
return"Closure"}return H.c5(a)},
ob:function(a){throw H.c(new H.j8(a))},
oG:function(a){throw H.c(new P.fI(H.Q(a)))},
nt:function(a){return new H.hW(a)},
mi:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bQ:function(a){if(a==null)return
return a.$ti},
pk:function(a,b,c){return H.ci(a["$a"+H.m(c)],H.bQ(b))},
cg:function(a,b,c,d){var u
H.Q(c)
H.ad(d)
u=H.ci(a["$a"+H.m(c)],H.bQ(b))
return u==null?null:u[d]},
az:function(a,b,c){var u
H.Q(b)
H.ad(c)
u=H.ci(a["$a"+H.m(b)],H.bQ(a))
return u==null?null:u[c]},
y:function(a,b){var u
H.ad(b)
u=H.bQ(a)
return u==null?null:u[b]},
kn:function(a){return H.bP(a,null)},
bP:function(a,b){var u,t
H.k(b,"$ib",[P.j],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cj(a[0].name)+H.kY(a,1,b)
if(typeof a=="function")return H.cj(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.m(b[t])}if('func' in a)return H.o4(a,b)
if('futureOr' in a)return"FutureOr<"+H.bP("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
o4:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.j]
H.k(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.e(a0,n)
p=C.b.D(p,a0[n])
m=u[q]
if(m!=null&&m!==P.T)p+=" extends "+H.bP(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bP(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bP(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bP(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.om(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.Q(b[h])
j=j+i+H.bP(e[d],a0)+(" "+H.m(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kY:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.j],"$ab")
if(a==null)return""
u=new P.aj("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bP(p,c)}return"<"+u.i(0)+">"},
ci:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kZ:function(a,b,c,d){var u,t
H.Q(b)
H.ke(c)
H.Q(d)
if(a==null)return!1
u=H.bQ(a)
t=J.V(a)
if(t[b]==null)return!1
return H.me(H.ci(t[d],u),null,c,null)},
k:function(a,b,c,d){H.Q(b)
H.ke(c)
H.Q(d)
if(a==null)return a
if(H.kZ(a,b,c,d))return a
throw H.c(H.aX(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cj(b.substring(2))+H.kY(c,0,null),v.mangledGlobalNames)))},
me:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aH(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aH(a[t],b,c[t],d))return!1
return!0},
pi:function(a,b,c){return a.apply(b,H.ci(J.V(b)["$a"+H.m(c)],H.bQ(b)))},
mk:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="T"||a.name==="K"||a===-1||a===-2||H.mk(u)}return!1},
l_:function(a,b){var u,t
if(a==null)return b==null||b.name==="T"||b.name==="K"||b===-1||b===-2||H.mk(b)
if(b==null||b===-1||b.name==="T"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.l_(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fd(a,b)}u=J.V(a).constructor
t=H.bQ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aH(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.l_(a,b))throw H.c(H.aX(a,H.kn(b)))
return a},
aH:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="T"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="T"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aH(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="K")return!0
if('func' in c)return H.m5(a,b,c,d)
if('func' in a)return c.name==="kC"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aH("type" in a?a.type:l,b,s,d)
else if(H.aH(a,b,s,d))return!0
else{if(!('$i'+"ct" in t.prototype))return!1
r=t.prototype["$a"+"ct"]
q=H.ci(r,u?a.slice(1):l)
return H.aH(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.me(H.ci(m,u),b,p,d)},
m5:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aH(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aH(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aH(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aH(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ox(h,b,g,d)},
ox:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aH(c[s],d,a[s],b))return!1}return!0},
pj:function(a,b,c){Object.defineProperty(a,H.Q(b),{value:c,enumerable:false,writable:true,configurable:true})},
ov:function(a){var u,t,s,r,q=H.Q($.mj.$1(a)),p=$.k4[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kd[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.Q($.md.$2(a,q))
if(q!=null){p=$.k4[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kd[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.km(u)
$.k4[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kd[q]=u
return u}if(s==="-"){r=H.km(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mn(a,u)
if(s==="*")throw H.c(P.iI(q))
if(v.leafTags[q]===true){r=H.km(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mn(a,u)},
mn:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l4(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
km:function(a){return J.l4(a,!1,null,!!a.$iM)},
ow:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.km(u)
else return J.l4(u,c,null,null)},
or:function(){if(!0===$.l3)return
$.l3=!0
H.os()},
os:function(){var u,t,s,r,q,p,o,n
$.k4=Object.create(null)
$.kd=Object.create(null)
H.oq()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mp.$1(q)
if(p!=null){o=H.ow(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oq:function(){var u,t,s,r,q,p,o=C.G()
o=H.cc(C.H,H.cc(C.I,H.cc(C.y,H.cc(C.y,H.cc(C.J,H.cc(C.K,H.cc(C.L(C.x),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mj=new H.ka(r)
$.md=new H.kb(q)
$.mp=new H.kc(p)},
cc:function(a,b){return a(b)||b},
n4:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a3("Illegal RegExp pattern ("+String(r)+")",a,null))},
oE:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ol:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mq:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ms:function(a,b,c){var u=H.oF(a,b,c)
return u},
oF:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mq(b),'g'),H.ol(c))},
fC:function fC(){},
fD:function fD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ix:function ix(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hH:function hH(a,b){this.a=a
this.b=b},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a){this.a=a},
kr:function kr(a){this.a=a},
eR:function eR(a){this.a=a
this.b=null},
co:function co(){},
ii:function ii(){},
i9:function i9(){},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iz:function iz(a){this.a=a},
fv:function fv(a){this.a=a},
hW:function hW(a){this.a=a},
j8:function j8(a){this.a=a},
aN:function aN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hc:function hc(a,b){this.a=a
this.b=b
this.c=null},
hd:function hd(a,b){this.a=a
this.$ti=b},
he:function he(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
h7:function h7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bO:function(a){return a},
nd:function(a){return new Int8Array(a)},
bg:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ce(b,a))},
o2:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oj(a,b,c))
return b},
cB:function cB(){},
bF:function bF(){},
dR:function dR(){},
cC:function cC(){},
dS:function dS(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
dT:function dT(){},
cD:function cD(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
om:function(a){return J.lo(a?Object.keys(a):[],null)},
oz:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l4:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k6:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l3==null){H.or()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iI("Return interceptor for "+H.m(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l6()]
if(r!=null)return r
r=H.ov(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.C
if(u===Object.prototype)return C.C
if(typeof s=="function"){Object.defineProperty(s,$.l6(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
n3:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kv(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ai(a,0,4294967295,"length",null))
return J.lo(new Array(a),b)},
lo:function(a,b){return J.kE(H.d(a,[b]))},
kE:function(a){H.ke(a)
a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dG.prototype
return J.dF.prototype}if(typeof a=="string")return J.c2.prototype
if(a==null)return J.dH.prototype
if(typeof a=="boolean")return J.h6.prototype
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.T)return a
return J.k6(a)},
de:function(a){if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.T)return a
return J.k6(a)},
k5:function(a){if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.T)return a
return J.k6(a)},
l2:function(a){if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.cW.prototype
return a},
fe:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.T)return a
return J.k6(a)},
O:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).q(a,b)},
la:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ou(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.de(a).j(a,b)},
kt:function(a,b,c){return J.k5(a).l(a,b,c)},
mM:function(a,b){return J.l2(a).J(a,b)},
mN:function(a,b,c){return J.fe(a).ia(a,b,c)},
mO:function(a,b,c,d){return J.fe(a).j9(a,b,c,d)},
mP:function(a,b){return J.l2(a).a0(a,b)},
ku:function(a,b){return J.k5(a).L(a,b)},
mQ:function(a,b,c,d){return J.fe(a).jp(a,b,c,d)},
lb:function(a,b){return J.k5(a).P(a,b)},
lc:function(a){return J.fe(a).gcp(a)},
di:function(a){return J.V(a).gK(a)},
bS:function(a){return J.k5(a).gW(a)},
aL:function(a){return J.de(a).gk(a)},
mR:function(a,b){return J.fe(a).jW(a,b)},
ax:function(a){return J.V(a).i(a)},
a:function a(){},
h6:function h6(){},
dH:function dH(){},
dJ:function dJ(){},
hL:function hL(){},
cW:function cW(){},
bC:function bC(){},
b3:function b3(a){this.$ti=a},
kF:function kF(a){this.$ti=a},
aq:function aq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dI:function dI(){},
dG:function dG(){},
dF:function dF(){},
c2:function c2(){}},P={
nI:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oc()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cd(new P.ja(s),1)).observe(u,{childList:true})
return new P.j9(s,u,t)}else if(self.setImmediate!=null)return P.od()
return P.oe()},
nJ:function(a){self.scheduleImmediate(H.cd(new P.jb(H.n(a,{func:1,ret:-1})),0))},
nK:function(a){self.setImmediate(H.cd(new P.jc(H.n(a,{func:1,ret:-1})),0))},
nL:function(a){P.kL(C.v,H.n(a,{func:1,ret:-1}))},
kL:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.a9(a.a,1000)
return P.nO(u<0?0:u,b)},
lK:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bb]})
u=C.e.a9(a.a,1000)
return P.nP(u<0?0:u,b)},
nO:function(a,b){var u=new P.eX()
u.fl(a,b)
return u},
nP:function(a,b){var u=new P.eX()
u.fm(a,b)
return u},
nM:function(a,b){var u,t,s
b.a=1
try{a.eQ(new P.jl(b),new P.jm(b),null)}catch(s){u=H.aJ(s)
t=H.ch(s)
P.oB(new P.jn(b,u,t))}},
lW:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaG")
if(u>=4){t=b.c8()
b.a=a.a
b.c=a.c
P.d_(b,t)}else{t=H.f(b.c,"$ibf")
b.a=2
b.c=a
a.dz(t)}},
d_:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iar")
g=g.b
r=s.a
q=s.b
g.toString
P.k0(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.d_(h.a,b)}g=h.a
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
if(m){H.f(o,"$iar")
g=g.b
r=o.a
q=o.b
g.toString
P.k0(i,i,g,r,q)
return}l=$.a_
if(l!=n)$.a_=n
else l=i
g=b.c
if(g===8)new P.jr(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jq(u,b,o).$0()}else if((g&2)!==0)new P.jp(h,u,b).$0()
if(l!=null)$.a_=l
g=u.b
if(!!J.V(g).$ict){if(g.a>=4){k=H.f(q.c,"$ibf")
q.c=null
b=q.bm(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.lW(g,q)
return}}j=b.b
k=H.f(j.c,"$ibf")
j.c=null
b=j.bm(k)
g=u.a
r=u.b
if(!g){H.B(r,H.y(j,0))
j.a=4
j.c=r}else{H.f(r,"$iar")
j.a=8
j.c=r}h.a=j
g=j}},
o7:function(a,b){if(H.fd(a,{func:1,args:[P.T,P.au]}))return H.n(a,{func:1,ret:null,args:[P.T,P.au]})
if(H.fd(a,{func:1,args:[P.T]}))return H.n(a,{func:1,ret:null,args:[P.T]})
throw H.c(P.kv(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
o6:function(){var u,t
for(;u=$.cb,u!=null;){$.dd=null
t=u.b
$.cb=t
if(t==null)$.dc=null
u.a.$0()}},
oa:function(){$.kW=!0
try{P.o6()}finally{$.dd=null
$.kW=!1
if($.cb!=null)$.l9().$1(P.mf())}},
ma:function(a){var u=new P.el(H.n(a,{func:1,ret:-1}))
if($.cb==null){$.cb=$.dc=u
if(!$.kW)$.l9().$1(P.mf())}else $.dc=$.dc.b=u},
o9:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cb
if(u==null){P.ma(a)
$.dd=$.dc
return}t=new P.el(a)
s=$.dd
if(s==null){t.b=u
$.cb=$.dd=t}else{t.b=s.b
$.dd=s.b=t
if(t.b==null)$.dc=t}},
oB:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a_
if(C.k===u){P.k2(t,t,C.k,a)
return}u.toString
P.k2(t,t,u,H.n(u.ci(a),s))},
lJ:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a_
if(u===C.k){u.toString
return P.kL(a,b)}return P.kL(a,H.n(u.ci(b),t))},
nz:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bb]}
H.n(b,s)
u=$.a_
if(u===C.k){u.toString
return P.lK(a,b)}t=u.dP(b,P.bb)
$.a_.toString
return P.lK(a,H.n(t,s))},
k0:function(a,b,c,d,e){var u={}
u.a=d
P.o9(new P.k1(u,e))},
m6:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a_
if(t===c)return d.$0()
$.a_=c
u=t
try{t=d.$0()
return t}finally{$.a_=u}},
m7:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a_
if(t===c)return d.$1(e)
$.a_=c
u=t
try{t=d.$1(e)
return t}finally{$.a_=u}},
o8:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a_
if(t===c)return d.$2(e,f)
$.a_=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a_=u}},
k2:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.ci(d):c.je(d,-1)
P.ma(d)},
ja:function ja(a){this.a=a},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
eX:function eX(){this.c=0},
jL:function jL(a,b){this.a=a
this.b=b},
jK:function jK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bf:function bf(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aG:function aG(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jk:function jk(a,b){this.a=a
this.b=b},
jo:function jo(a,b){this.a=a
this.b=b},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a,b,c){this.a=a
this.b=b
this.c=c},
jr:function jr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
js:function js(a){this.a=a},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a){this.a=a
this.b=null},
ic:function ic(){},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
cK:function cK(){},
id:function id(){},
bb:function bb(){},
ar:function ar(a,b){this.a=a
this.b=b},
jU:function jU(){},
k1:function k1(a,b){this.a=a
this.b=b},
jz:function jz(){},
jB:function jB(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(a,b){this.a=a
this.b=b},
jC:function jC(a,b,c){this.a=a
this.b=b
this.c=c},
n6:function(a,b){return new H.aN([a,b])},
lp:function(a,b){return new H.aN([a,b])},
n8:function(a){return H.on(a,new H.aN([null,null]))},
n9:function(a){return new P.jw([a])},
kS:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lY:function(a,b,c){var u=new P.jx(a,b,[c])
u.c=a.e
return u},
n2:function(a,b,c){var u,t
if(P.kX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.j])
C.a.h($.aw,a)
try{P.o5(a,u)}finally{if(0>=$.aw.length)return H.e($.aw,-1)
$.aw.pop()}t=P.lG(b,H.ml(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
kD:function(a,b,c){var u,t
if(P.kX(a))return b+"..."+c
u=new P.aj(b)
C.a.h($.aw,a)
try{t=u
t.a=P.lG(t.a,a,", ")}finally{if(0>=$.aw.length)return H.e($.aw,-1)
$.aw.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kX:function(a){var u,t
for(u=$.aw.length,t=0;t<u;++t)if(a===$.aw[t])return!0
return!1},
o5:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.j],"$ab")
u=a.gW(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.C())return
r=H.m(u.gM(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.C()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gM(u);++s
if(!u.C()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM(u);++s
for(;u.C();o=n,n=m){m=u.gM(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
n7:function(a,b,c){var u=P.n6(b,c)
a.P(0,new P.hf(u,b,c))
return u},
kI:function(a){var u,t={}
if(P.kX(a))return"{...}"
u=new P.aj("")
try{C.a.h($.aw,a)
u.a+="{"
t.a=!0
J.lb(a,new P.hk(t,u))
u.a+="}"}finally{if(0>=$.aw.length)return H.e($.aw,-1)
$.aw.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jw:function jw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d0:function d0(a){this.a=a
this.c=this.b=null},
jx:function jx(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hf:function hf(a,b,c){this.a=a
this.b=b
this.c=c},
hg:function hg(){},
z:function z(){},
hj:function hj(){},
hk:function hk(a,b){this.a=a
this.b=b},
al:function al(){},
jM:function jM(){},
hl:function hl(){},
eg:function eg(a,b){this.a=a
this.$ti=b},
jD:function jD(){},
eA:function eA(){},
f2:function f2(){},
nD:function(a,b,c,d){H.k(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.nE(!1,b,c,d)
return},
nE:function(a,b,c,d){var u,t,s=$.mH()
if(s==null)return
u=0===c
if(u&&!0)return P.kP(s,b)
t=b.length
d=P.bJ(c,d,t)
if(u&&d===t)return P.kP(s,b)
return P.kP(s,b.subarray(c,d))},
kP:function(a,b){if(P.nG(b))return
return P.nH(a,b)},
nH:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aJ(t)}return},
nG:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nF:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aJ(t)}return},
m9:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.o],"$ab")
for(u=J.de(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bT()
if((s&127)!==s)return t-b}return c-b},
ld:function(a,b,c,d,e,f){if(C.e.av(f,4)!==0)throw H.c(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
fr:function fr(){},
fs:function fs(){},
bX:function bX(){},
c_:function c_(){},
fR:function fR(){},
iR:function iR(){},
iT:function iT(){},
jT:function jT(a){this.b=0
this.c=a},
iS:function iS(a){this.a=a},
jS:function jS(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
ff:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.j]})
u=H.nn(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a3(a,null,null))},
n0:function(a){if(a instanceof H.co)return a.i(0)
return"Instance of '"+H.c5(a)+"'"},
na:function(a,b,c){var u,t
H.B(b,c)
u=J.n3(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.l(u,t,b)
return H.k(u,"$ib",[c],"$ab")},
lq:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bS(a);u.C();)C.a.h(s,H.B(u.gM(u),c))
if(b)return s
return H.k(J.kE(s),"$ib",t,"$ab")},
cL:function(a,b,c){var u,t=P.o
H.k(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$ib3",[t],"$ab3")
u=a.length
c=P.bJ(b,c,u)
return H.lD(b>0||c<u?C.a.cX(a,b,c):a)}if(!!J.V(a).$icD)return H.np(a,b,P.bJ(b,c,a.length))
return P.nv(a,b,c)},
nv:function(a,b,c){var u,t,s,r,q=null
H.k(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.ai(b,0,J.aL(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ai(c,b,J.aL(a),q,q))
t=J.bS(a)
for(s=0;s<b;++s)if(!t.C())throw H.c(P.ai(b,0,s,q,q))
r=[]
if(u)for(;t.C();)r.push(t.gM(t))
else for(s=b;s<c;++s){if(!t.C())throw H.c(P.ai(c,b,s,q,q))
r.push(t.gM(t))}return H.lD(r)},
nr:function(a){return new H.h7(a,H.n4(a,!1,!0,!1))},
lG:function(a,b,c){var u=J.bS(b)
if(!u.C())return a
if(c.length===0){do a+=H.m(u.gM(u))
while(u.C())}else{a+=H.m(u.gM(u))
for(;u.C();)a=a+c+H.m(u.gM(u))}return a},
kO:function(){var u=H.nf()
if(u!=null)return P.nC(u)
throw H.c(P.H("'Uri.base' is not supported"))},
jR:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.k(a,"$ib",[P.o],"$ab")
if(c===C.l){u=$.mK().b
if(typeof b!=="string")H.t(H.aI(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.az(c,"bX",0))
t=c.gjo().cq(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dW(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mY:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mZ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ds:function(a){if(a>=10)return""+a
return"0"+a},
lj:function(a,b){return new P.bw(1e6*b+1000*a)},
dz:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ax(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n0(a)},
dj:function(a){return new P.aZ(!1,null,null,a)},
kv:function(a,b,c){return new P.aZ(!0,a,b,c)},
dY:function(a,b){return new P.c6(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.c6(b,c,!0,a,d,"Invalid value")},
bJ:function(a,b,c){if(0>a||a>c)throw H.c(P.ai(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ai(b,a,c,"end",null))
return b}return c},
lE:function(a,b){if(typeof a!=="number")return a.a_()
if(a<0)throw H.c(P.ai(a,0,null,b,null))},
Z:function(a,b,c,d,e){var u=H.ad(e==null?J.aL(b):e)
return new P.h5(u,!0,a,c,"Index out of range")},
H:function(a){return new P.iK(a)},
iI:function(a){return new P.iH(a)},
bZ:function(a){return new P.fB(a)},
u:function(a){return new P.et(a)},
a3:function(a,b,c){return new P.h0(a,b,c)},
nb:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.o]})
u=H.d([],[c])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.l(u,t,b.$1(t))
return u},
l5:function(a){H.oz(a)},
nC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.J(a,4)^58)*3|C.b.J(a,0)^100|C.b.J(a,1)^97|C.b.J(a,2)^116|C.b.J(a,3)^97)>>>0
if(u===0)return P.lM(e<e?C.b.A(a,0,e):a,5,f).geV()
else if(u===32)return P.lM(C.b.A(a,5,e),0,f).geV()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.o])
C.a.l(s,0,0)
C.a.l(s,1,-1)
C.a.l(s,2,-1)
C.a.l(s,7,-1)
C.a.l(s,3,0)
C.a.l(s,4,0)
C.a.l(s,5,e)
C.a.l(s,6,e)
if(P.m8(a,0,e,0,s)>=14)C.a.l(s,7,e)
r=s[1]
if(typeof r!=="number")return r.ke()
if(r>=0)if(P.m8(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.D()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.a_()
if(typeof n!=="number")return H.w(n)
if(m<n)n=m
if(typeof o!=="number")return o.a_()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.a_()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.a_()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.ai(a,"..",o)))j=n>o+2&&C.b.ai(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ai(a,"file",0)){if(q<=0){if(!C.b.ai(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.A(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aW(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ai(a,"http",0)){if(t&&p+3===o&&C.b.ai(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aW(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ai(a,"https",0)){if(t&&p+4===o&&C.b.ai(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aW(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.A(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jE(a,r,q,p,o,n,m,k)}return P.nQ(a,0,e,r,q,p,o,n,m,k)},
lO:function(a){var u=P.j
return C.a.js(H.d(a.split("&"),[u]),P.lp(u,u),new P.iP(C.l),[P.F,P.j,P.j])},
nB:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iM(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a0(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.ff(C.b.A(a,s,t),n,n)
if(typeof p!=="number")return p.cS()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.ff(C.b.A(a,s,c),n,n)
if(typeof p!=="number")return p.cS()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
lN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.iN(a)
t=new P.iO(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a0(a,r)
if(n===58){if(r===b){++r
if(C.b.a0(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaL(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.nB(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aT(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
nQ:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nX(a,b,d)
else{if(d===b)P.d9(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nY(a,u,e-1):""
s=P.nU(a,e,f,!1)
if(typeof f!=="number")return f.D()
r=f+1
if(typeof g!=="number")return H.w(g)
q=r<g?P.nW(P.ff(C.b.A(a,r,g),new P.jN(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nV(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.a_()
o=h<i?P.kT(a,h+1,i,n):n
return new P.ca(j,t,s,q,p,o,i<c?P.nT(a,i+1,c):n)},
lZ:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
d9:function(a,b,c){throw H.c(P.a3(c,a,b))},
nW:function(a,b){if(a!=null&&a===P.lZ(b))return
return a},
nU:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a0(a,b)===91){if(typeof c!=="number")return c.F()
u=c-1
if(C.b.a0(a,u)!==93)P.d9(a,b,"Missing end `]` to match `[` in host")
P.lN(a,b+1,u)
return C.b.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.w(c)
t=b
for(;t<c;++t)if(C.b.a0(a,t)===58){P.lN(a,b,c)
return"["+a+"]"}return P.o_(a,b,c)},
o_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a0(a,u)
if(q===37){p=P.m4(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.aj("")
n=C.b.A(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.A(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.A,o)
o=(C.A[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.aj("")
if(t<u){s.a+=C.b.A(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.d9(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a0(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.aj("")
n=C.b.A(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.m_(q)
u+=l
t=u}}}}if(s==null)return C.b.A(a,b,c)
if(t<c){n=C.b.A(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nX:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.m1(C.b.J(a,b)))P.d9(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.J(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.d9(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.A(a,b,c)
return P.nR(t?a.toLowerCase():a)},
nR:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nY:function(a,b,c){return P.da(a,b,c,C.V,!1)},
nV:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.da(a,b,c,C.B,!0):C.n.ki(d,new P.jO(),P.j).E(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.ah(u,"/"))u="/"+u
return P.nZ(u,e,f)},
nZ:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.ah(a,"/"))return P.o0(a,!u||c)
return P.o1(a)},
kT:function(a,b,c,d){var u,t={}
H.k(d,"$iF",[P.j,null],"$aF")
if(a!=null){if(d!=null)throw H.c(P.dj("Both query and queryParameters specified"))
return P.da(a,b,c,C.p,!0)}if(d==null)return
u=new P.aj("")
t.a=""
d.P(0,new P.jP(new P.jQ(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nT:function(a,b,c){return P.da(a,b,c,C.p,!0)},
m4:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a0(a,b+1)
t=C.b.a0(a,p)
s=H.k9(u)
r=H.k9(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aT(q,4)
if(p>=8)return H.e(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dW(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.A(a,b,b+3).toUpperCase()
return},
m_:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.l(t,0,37)
C.a.l(t,1,C.b.J(o,a>>>4))
C.a.l(t,2,C.b.J(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.e.is(a,6*r)&63|s
C.a.l(t,q,37)
C.a.l(t,q+1,C.b.J(o,p>>>4))
C.a.l(t,q+2,C.b.J(o,p&15))
q+=3}}return P.cL(t,0,null)},
da:function(a,b,c,d,e){var u=P.m3(a,b,c,H.k(d,"$ib",[P.o],"$ab"),e)
return u==null?C.b.A(a,b,c):u},
m3:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.a_()
if(typeof c!=="number")return H.w(c)
if(!(t<c))break
c$0:{q=C.b.a0(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.m4(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.d9(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a0(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.m_(q)}}if(r==null)r=new P.aj("")
r.a+=C.b.A(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.w(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.a_()
if(s<c)r.a+=C.b.A(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
m2:function(a){if(C.b.ah(a,"."))return!0
return C.b.eq(a,"/.")!==-1},
o1:function(a){var u,t,s,r,q,p,o
if(!P.m2(a))return a
u=H.d([],[P.j])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.O(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.E(u,"/")},
o0:function(a,b){var u,t,s,r,q,p
if(!P.m2(a))return!b?P.m0(a):a
u=H.d([],[P.j])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaL(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaL(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.l(u,0,P.m0(u[0]))}return C.a.E(u,"/")},
m0:function(a){var u,t,s,r=a.length
if(r>=2&&P.m1(J.mM(a,0)))for(u=1;u<r;++u){t=C.b.J(a,u)
if(t===58)return C.b.A(a,0,u)+"%3A"+C.b.aF(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.q,s)
s=(C.q[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nS:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.J(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dj("Invalid URL encoding"))}}return u},
kU:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.J(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.A(a,b,c)
else r=new H.a4(C.b.A(a,b,c))}else{r=H.d([],[P.o])
for(s=a.length,q=b;q<c;++q){t=C.b.J(a,q)
if(t>127)throw H.c(P.dj("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dj("Truncated URI"))
C.a.h(r,P.nS(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.k(r,"$ib",[P.o],"$ab")
return new P.iS(!1).cq(r)},
m1:function(a){var u=a|32
return 97<=u&&u<=122},
lM:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.o])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.J(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a3(m,a,t))}}if(s<0&&t>b)throw H.c(P.a3(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.J(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaL(l)
if(r!==44||t!==p+7||!C.b.ai(a,"base64",p+1))throw H.c(P.a3("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.jC(0,a,o,u)
else{n=P.m3(a,o,u,C.p,!0)
if(n!=null)a=C.b.aW(a,o,u,n)}return new P.iL(a,l,c)},
o3:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nb(22,new P.jY(),P.R),n=new P.jX(o),m=new P.jZ(),l=new P.k_(),k=H.f(n.$2(0,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iR")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iR")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iR")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iR")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iR")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iR"),"]",5)
k=H.f(n.$2(9,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iR")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iR")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iR"),"az",21)
k=H.f(n.$2(21,245),"$iR")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
m8:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.o],"$ab")
u=$.mL()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.J(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.l(e,q>>>5,t)}return d},
a0:function a0(){},
ay:function ay(a,b){this.a=a
this.b=b},
q:function q(){},
bw:function bw(a){this.a=a},
fO:function fO(){},
fP:function fP(){},
bx:function bx(){},
fk:function fk(){},
dU:function dU(){},
aZ:function aZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h5:function h5(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iK:function iK(a){this.a=a},
iH:function iH(a){this.a=a},
i8:function i8(a){this.a=a},
fB:function fB(a){this.a=a},
hK:function hK(){},
e3:function e3(){},
fI:function fI(a){this.a=a},
et:function et(a){this.a=a},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
i:function i(){},
b2:function b2(){},
b:function b(){},
F:function F(){},
K:function K(){},
ac:function ac(){},
T:function T(){},
au:function au(){},
j:function j(){},
aj:function aj(a){this.a=a},
iP:function iP(a){this.a=a},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
iO:function iO(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jN:function jN(a,b){this.a=a
this.b=b},
jO:function jO(){},
jQ:function jQ(a,b){this.a=a
this.b=b},
jP:function jP(a){this.a=a},
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(){},
jX:function jX(a){this.a=a},
jZ:function jZ(){},
k_:function k_(){},
jE:function jE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jg:function jg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oi:function(a){var u,t=J.V(a)
if(!!t.$ibl){u=t.gdV(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.f1(a.data,a.height,a.width)},
oh:function(a){if(a instanceof P.f1)return{data:a.a,height:a.b,width:a.c}
return a},
bt:function(a){var u,t,s,r,q
if(a==null)return
u=P.lp(P.j,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r){q=H.Q(t[r])
u.l(0,q,a[q])}return u},
og:function(a){var u={}
a.P(0,new P.k3(u))
return u},
jG:function jG(){},
jI:function jI(a,b){this.a=a
this.b=b},
f1:function f1(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a){this.a=a},
jH:function jH(a,b){this.a=a
this.b=b},
fX:function fX(a,b){this.a=a
this.b=b},
fY:function fY(){},
fZ:function fZ(){},
jv:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jy:function jy(){},
am:function am(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
ha:function ha(){},
b9:function b9(){},
hI:function hI(){},
hO:function hO(){},
ih:function ih(){},
r:function r(){},
bc:function bc(){},
iw:function iw(){},
ey:function ey(){},
ez:function ez(){},
eI:function eI(){},
eJ:function eJ(){},
eT:function eT(){},
eU:function eU(){},
f_:function f_(){},
f0:function f0(){},
R:function R(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(a){this.a=a},
fp:function fp(){},
bT:function bT(){},
hJ:function hJ(){},
em:function em(){},
dl:function dl(){},
dB:function dB(){},
dX:function dX(){},
dZ:function dZ(){},
c7:function c7(){},
e0:function e0(){},
e4:function e4(){},
ee:function ee(){},
i7:function i7(){},
eP:function eP(){},
eQ:function eQ(){}},W={
ky:function(){var u=document.createElement("canvas")
return u},
n_:function(a){H.f(a,"$il")
return"wheel"},
n1:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icw")
try{s.type=a}catch(u){H.aJ(u)}return s},
ju:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lX:function(a,b,c,d){var u=W.ju(W.ju(W.ju(W.ju(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.mc(new W.jj(c),W.p)
if(u!=null&&!0)J.mO(a,b,u,!1)
return new W.ji(a,b,u,!1,[e])},
mc:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a_
if(u===C.k)return a
return u.dP(a,b)},
x:function x(){},
fg:function fg(){},
fi:function fi(){},
fj:function fj(){},
bU:function bU(){},
bW:function bW(){},
cm:function cm(){},
bu:function bu(){},
cp:function cp(){},
fE:function fE(){},
U:function U(){},
cq:function cq(){},
fF:function fF(){},
b0:function b0(){},
b1:function b1(){},
fG:function fG(){},
fH:function fH(){},
fJ:function fJ(){},
dv:function dv(){},
fL:function fL(){},
dw:function dw(){},
dx:function dx(){},
fM:function fM(){},
fN:function fN(){},
je:function je(a,b){this.a=a
this.b=b},
a2:function a2(){},
p:function p(){},
l:function l(){},
aA:function aA(){},
cs:function cs(){},
fW:function fW(){},
h_:function h_(){},
aM:function aM(){},
h3:function h3(){},
c1:function c1(){},
bl:function bl(){},
cv:function cv(){},
cw:function cw(){},
cn:function cn(){},
b4:function b4(){},
hh:function hh(){},
hu:function hu(){},
cz:function cz(){},
hv:function hv(){},
hw:function hw(a){this.a=a},
hx:function hx(){},
hy:function hy(a){this.a=a},
aO:function aO(){},
hz:function hz(){},
ag:function ag(){},
jd:function jd(a){this.a=a},
I:function I(){},
cE:function cE(){},
aP:function aP(){},
hM:function hM(){},
hU:function hU(){},
hV:function hV(a){this.a=a},
hX:function hX(){},
aQ:function aQ(){},
i5:function i5(){},
aR:function aR(){},
i6:function i6(){},
aS:function aS(){},
ia:function ia(){},
ib:function ib(a){this.a=a},
aC:function aC(){},
bq:function bq(){},
aT:function aT(){},
aD:function aD(){},
ij:function ij(){},
ik:function ik(){},
ir:function ir(){},
aV:function aV(){},
aW:function aW(){},
iu:function iu(){},
iv:function iv(){},
bM:function bM(){},
iQ:function iQ(){},
j5:function j5(){},
be:function be(){},
cZ:function cZ(){},
jf:function jf(){},
eo:function eo(){},
jt:function jt(){},
eF:function eF(){},
jF:function jF(){},
jJ:function jJ(){},
jh:function jh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kR:function kR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ji:function ji(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jj:function jj(a){this.a=a},
D:function D(){},
dA:function dA(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
en:function en(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eG:function eG(){},
eH:function eH(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
d5:function d5(){},
d6:function d6(){},
eN:function eN(){},
eO:function eO(){},
eS:function eS(){},
eV:function eV(){},
eW:function eW(){},
d7:function d7(){},
d8:function d8(){},
eY:function eY(){},
eZ:function eZ(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){}},O={
fz:function(a){var u=new O.Y([a])
u.bh(a)
return u},
Y:function Y(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cy:function cy(){this.b=this.a=null},
ll:function(a,b){var u,t,s,r=new O.dE()
r.r=0
r.scO(null)
r.scj(null)
if(a==null){u=$.lP
if(u==null){u=new V.X(1,0)
$.lP=u
t=u}else t=u}else t=a
if(!J.O(r.d,t)){s=r.d
r.d=t
u=new D.v("blurDirection",s,t,[V.X])
u.b=!0
r.t(u)}r.sdT(b)
r.sb2(null)
r.sck(0)
return r},
lr:function(){var u,t,s=new O.dQ()
s.sfu(O.fz(V.af))
s.e.aN(s.ghc(),s.ghe())
u=new O.b6(s,"emission")
u.c=C.d
u.f=new V.a1(0,0,0)
s.f=u
u=new O.b6(s,"ambient")
u.c=C.d
u.f=new V.a1(0,0,0)
s.r=u
u=new O.b6(s,"diffuse")
u.c=C.d
u.f=new V.a1(0,0,0)
s.x=u
u=new O.b6(s,"invDiffuse")
u.c=C.d
u.f=new V.a1(0,0,0)
s.y=u
u=new O.hs(s,"specular")
u.c=C.d
u.f=new V.a1(0,0,0)
u.ch=100
s.z=u
u=new O.hp(s,"bump")
u.c=C.d
s.Q=u
s.ch=null
u=new O.b6(s,"reflect")
u.c=C.d
u.f=new V.a1(0,0,0)
s.cx=u
u=new O.hr(s,"refract")
u.c=C.d
u.f=new V.a1(0,0,0)
u.ch=1
s.cy=u
u=new O.ho(s,"alpha")
u.c=C.d
u.f=1
s.db=u
u=new D.dL()
u.bh(D.a5)
u.sfb(H.d([],[D.du]))
u.sfe(H.d([],[D.bG]))
u.sff(H.d([],[D.e2]))
u.sfg(H.d([],[D.e7]))
u.sfh(H.d([],[D.e8]))
u.sfi(H.d([],[D.e9]))
u.ch=u.Q=null
u.cT(u.gha(),u.ghO(),u.ghS())
s.dx=u
t=u.Q
u=t==null?u.Q=D.L():t
u.h(0,s.gic())
u=s.dx
t=u.ch
u=t==null?u.ch=D.L():t
u.h(0,s.ga8())
s.dy=null
return s},
lH:function(a,b){var u,t,s,r=new O.aU(),q=r.a
r.a=b
b.gn().h(0,r.ga8())
u=new D.v("texture",q,r.a,[T.bL])
u.b=!0
r.t(u)
t=V.bD()
if(!J.O(r.b,t)){q=r.b
r.b=t
u=new D.v("colorMatrix",q,t,[V.af])
u.b=!0
r.t(u)}s=V.hP()
if(!J.O(r.c,s)){q=r.c
r.c=s
u=new D.v("source",q,s,[V.bK])
u.b=!0
r.t(u)}if(!J.O(r.d,a)){q=r.d
r.d=a
u=new D.v("destination",q,a,[V.bK])
u.b=!0
r.t(u)}if(r.e!==!1){r.e=!1
u=new D.v("flip",!0,!1,[P.a0])
u.b=!0
r.t(u)}r.f=null
return r},
fK:function fK(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dQ:function dQ(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ho:function ho(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cx:function cx(){},
hp:function hp(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b6:function b6(a,b){var _=this
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
br:function br(){},
e5:function e5(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aU:function aU(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
kA:function(a){var u=new E.ak()
u.a=""
u.b=!0
u.sfa(0,O.fz(E.ak))
u.y.aN(u.gjD(),u.gjG())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbV(0,a)
u.sap(null)
u.sb9(null)
return u},
ns:function(a,b){var u=new E.hQ(a)
u.f6(a,b)
return u},
ny:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibW)return E.lI(a,!0,!0,!0,!1)
u=W.ky()
t=u.style
t.width="100%"
t.height="100%"
s.gcp(a).h(0,u)
return E.lI(u,!0,!0,!0,!1)},
lI:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ea(),j=H.f(C.m.cR(a,"webgl2",P.n8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic7")
if(j==null)H.t(P.u("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.ns(j,a)
u=new T.im(j)
u.b=H.ad(j.getParameter(3379))
H.ad(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.eh(a)
t=new X.h9()
t.c=new X.aB(!1,!1,!1)
t.si4(P.n9(P.o))
u.b=t
t=new X.hA(u)
t.f=0
t.r=V.bp()
t.x=V.bp()
t.ch=t.Q=1
u.c=t
t=new X.hi(u)
t.r=0
t.x=V.bp()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.it(u)
t.f=V.bp()
t.r=V.bp()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfL(H.d([],[[P.cK,P.T]]))
t=u.z
s=document
r=W.ag
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.n(u.ghm(),q),!1,r))
t=u.z
p=W.p
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.n(u.ghw(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.n(u.ghg(),o),!1,p))
t=u.z
n=W.b4
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.n(u.ghA(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.n(u.ghy(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.n(u.ghE(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.n(u.ghI(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.n(u.ghG(),q),!1,r))
n=u.z
m=W.be;(n&&C.a).h(n,W.ab(a,H.Q(W.n_(a)),H.n(u.ghK(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.n(u.gho(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.n(u.ghq(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.n(u.ghM(),o),!1,p))
p=u.z
o=W.aW
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.n(u.gi1(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.n(u.ghY(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.n(u.gi_(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.dB()
return k},
ft:function ft(){},
ak:function ak(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hQ:function hQ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
ea:function ea(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iq:function iq(a){this.a=a}},Z={
kQ:function(a,b,c){var u
H.k(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bO(c)),35044)
a.bindBuffer(b,null)
return new Z.ek(b,u)},
aF:function(a){return new Z.aE(a)},
ek:function ek(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
c9:function c9(a){this.a=a},
bk:function bk(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a){this.a=a}},D={
L:function(){var u=new D.by()
u.sad(null)
u.saR(null)
u.c=null
u.d=0
return u},
fw:function fw(){},
by:function by(){var _=this
_.d=_.c=_.b=_.a=null},
fT:function fT(a){this.a=a},
fU:function fU(a){this.a=a},
A:function A(){this.b=null},
bA:function bA(a){this.b=null
this.$ti=a},
bB:function bB(a){this.b=null
this.$ti=a},
v:function v(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
du:function du(){},
a5:function a5(){},
dL:function dL(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
bG:function bG(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){}},X={dn:function dn(a,b){this.a=a
this.b=b},dK:function dK(a,b){this.a=a
this.b=b},h9:function h9(){var _=this
_.d=_.c=_.b=_.a=null},dN:function dN(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hi:function hi(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aB:function aB(a,b,c){this.a=a
this.b=b
this.c=c},bE:function bE(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hA:function hA(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cA:function cA(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hN:function hN(){},ec:function ec(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},it:function it(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eh:function eh(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kw:function(a,b,c,d){var u,t,s,r,q=new X.fq()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.kK(null)
q.cx=new V.ae(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.hP()
q.saq(0,512)
q.sam(0,512)
u=new V.ae(0,0,0,1)
if(!q.cx.q(0,u)){t=q.cx
q.cx=u
s=new D.v("color",t,u,[V.ae])
s.b=!0
q.a4(s)}if(q.cy!==d){q.cy=d
s=new D.v("clearColor",!d,d,[P.a0])
s.b=!0
q.a4(s)}s=q.db
if(!(Math.abs(s-2000)<$.E().a)){q.db=2000
s=new D.v("depth",s,2000,[P.q])
s.b=!0
q.a4(s)}if(!q.f){q.f=!0
s=new D.v("autoResize",!1,!0,[P.a0])
s.b=!0
q.a4(s)}s=q.r
if(!(Math.abs(s-b)<$.E().a)){q.r=b
s=new D.v("autoResizeScalarX",s,b,[P.q])
s.b=!0
q.a4(s)}s=q.x
if(!(Math.abs(s-c)<$.E().a)){q.x=c
s=new D.v("autoResizeScalarY",s,c,[P.q])
s.b=!0
q.a4(s)}r=V.hP()
if(!J.O(q.dy,r)){t=q.dy
q.dy=r
s=new D.v("region",t,r,[V.bK])
s.b=!0
q.a4(s)}return q},
kB:function(a,b){var u=new X.h1(),t=new V.ae(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.hP()
u.r=t
return u},
ly:function(){var u,t=new X.dV()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.sb9(null)
u=t.c
if(!(Math.abs(u-1.0471975511965976)<$.E().a)){t.c=1.0471975511965976
u=new D.v("fov",u,1.0471975511965976,[P.q])
u.b=!0
t.a4(u)}u=t.d
if(!(Math.abs(u-0.1)<$.E().a)){t.d=0.1
u=new D.v("near",u,0.1,[P.q])
u.b=!0
t.a4(u)}u=t.e
if(!(Math.abs(u-2000)<$.E().a)){t.e=2000
u=new D.v("far",u,2000,[P.q])
u.b=!0
t.a4(u)}return t},
fq:function fq(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bV:function bV(){},
h1:function h1(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(){this.b=this.a=null},
dV:function dV(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cM:function cM(){}},V={
ks:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.h.av(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.b.ao("null",c)
return C.b.ao(C.h.eR(Math.abs(a-0)<$.E().a?0:a,b),c+b+1)},
cf:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.q],"$ab")
u=H.d([],[P.j])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.G)(a),++r){q=V.N(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.l(u,p,C.b.ao(u[p],s))}return u},
df:function(a){return C.h.k6(Math.pow(2,C.S.b6(Math.log(H.of(a))/Math.log(2))))},
bD:function(){var u=$.ht
return u==null?$.ht=V.b7(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b7:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.af(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lv:function(a,b,c){return V.b7(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lt:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lu:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
bp:function(){var u=$.lA
return u==null?$.lA=new V.a9(0,0):u},
lB:function(){var u=$.bI
return u==null?$.bI=new V.a6(0,0,0):u},
hP:function(){var u=$.cH
return u==null?$.cH=V.cG(0,0,1,1):u},
cG:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bK(a,b,c,d)},
cY:function(){var u=$.lU
return u==null?$.lU=new V.S(0,0,0):u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fS:function fS(a){this.a=a},
c3:function c3(a,b,c,d,e,f,g,h,i){var _=this
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
a9:function a9(a,b){this.a=a
this.b=b},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
an:function(a){var u=new V.hY()
u.f7(a)
return u},
fh:function fh(){},
bn:function bn(){},
dO:function dO(){},
bo:function bo(){this.a=null},
hY:function hY(){this.a=null},
cJ:function cJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a){this.b=a
this.c=null},
is:function is(){this.c=this.b=this.a=null},
cO:function cO(a){this.b=a
this.a=this.c=null},
oC:function(a){P.nz(C.Q,new V.ko(a))},
nu:function(a){var u=new V.i1()
u.f8(a,!0)
return u},
fx:function fx(a){this.a=a
this.d=this.c=null},
fy:function fy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ko:function ko(a){this.a=a},
i1:function i1(){this.b=this.a=null},
i3:function i3(a){this.a=a},
i2:function i2(a){this.a=a}},U={
lh:function(){var u=new U.fA()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
li:function(a){var u=new U.dq()
u.a=a
return u},
lm:function(a){var u=new U.cu()
u.bh(U.ah)
u.aN(u.gfj(),u.ghQ())
u.b1(0,a)
u.e=null
u.f=V.bD()
u.r=0
return u},
fA:function fA(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dq:function dq(){this.b=this.a=null},
cu:function cu(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ah:function ah(){},
e_:function e_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ei:function ei(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ej:function ej(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
kz:function(a,b){var u,t=new M.dr(),s=new X.h4(),r=t.a
t.a=s
s.gn().h(0,t.gY())
u=new D.v("camera",r,t.a,[X.bV])
u.b=!0
t.V(u)
t.saM(0,a)
t.sap(b)
u=E.kA(null)
u.sbV(0,F.mr())
t.d=u
t.e=null
return t},
lk:function(a){var u,t=new M.dy()
t.sfA(0,O.fz(E.ak))
t.d.aN(t.ghi(),t.ghk())
t.x=t.r=t.f=t.e=null
u=X.kB(!0,null)
t.sco(null)
t.saM(0,u)
t.sap(null)
t.d.b1(0,a)
return t},
dp:function dp(){var _=this
_.c=_.b=_.a=_.f=_.e=null},
dr:function dr(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dy:function dy(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
at:function at(){}},A={
nc:function(a,b){var u=a.at,t=new A.dP(b,u)
t.bi(b,u)
t.f5(a,b)
return t},
nx:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.P
t=(s||b===C.t?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.O)t+="      clrAccum += color;\n"
else if(b===C.u)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.t
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
nw:function(a,b,c){var u="TextureLayout_"+a+"_"+C.e.i(b.a),t=new A.e6(c,u)
t.bi(c,u)
t.f9(a,b,c)
return t},
kM:function(a,b,c,d,e){var u=new A.iB(a,c,e)
u.f=d
u.siL(P.na(d,0,P.o))
return u},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
fl:function fl(a){this.a=a},
dt:function dt(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dD:function dD(a,b){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h2:function h2(a,b){this.a=a
this.b=b},
dP:function dP(a,b){var _=this
_.bv=_.e_=_.bu=_.at=_.aA=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ef=_.cs=_.ee=_.bI=_.ed=_.ec=_.bH=_.bG=_.eb=_.ea=_.bF=_.bE=_.bD=_.e9=_.e8=_.bC=_.e7=_.e6=_.bB=_.e5=_.e4=_.bA=_.bz=_.e3=_.e2=_.by=_.bx=_.e1=_.e0=_.bw=null
_.cz=_.ej=_.cw=_.ei=_.cv=_.eh=_.cu=_.eg=_.ct=null
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
_.aA=b3
_.at=b4
_.bu=b5},
cQ:function cQ(a,b){this.b=a
this.c=b},
cT:function cT(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cR:function cR(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cU:function cU(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cS:function cS(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cV:function cV(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cI:function cI(){},
bY:function bY(a,b){this.a=a
this.b=b},
bv:function bv(a,b){this.a=a
this.b=b},
e6:function e6(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ed:function ed(){},
iF:function iF(a){this.a=a},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
iC:function iC(a,b,c){this.a=a
this.c=b
this.d=c},
iD:function iD(a,b,c){this.a=a
this.c=b
this.d=c},
iE:function iE(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
W:function W(a,b,c){this.a=a
this.c=b
this.d=c},
av:function av(a,b,c){this.a=a
this.c=b
this.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
cP:function cP(a,b,c){this.a=a
this.c=b
this.d=c},
iG:function iG(a,b,c){this.a=a
this.c=b
this.d=c},
c8:function c8(a,b,c){this.a=a
this.c=b
this.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c},
a7:function a7(a,b,c){this.a=a
this.c=b
this.d=c},
as:function as(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mr:function(){var u,t,s,r,q,p=null,o=F.kJ(),n=o.a,m=new V.S(-1,-1,1)
m=m.w(0,Math.sqrt(m.H(m)))
u=n.bo(new V.ba(1,2,4,6),new V.ae(1,0,0,1),new V.a6(-1,-1,0),new V.a9(0,1),m,p)
n=o.a
m=new V.S(1,-1,1)
m=m.w(0,Math.sqrt(m.H(m)))
t=n.bo(new V.ba(0,3,4,6),new V.ae(0,0,1,1),new V.a6(1,-1,0),new V.a9(1,1),m,p)
n=o.a
m=new V.S(1,1,1)
m=m.w(0,Math.sqrt(m.H(m)))
s=n.bo(new V.ba(0,2,5,6),new V.ae(0,1,0,1),new V.a6(1,1,0),new V.a9(1,0),m,p)
n=o.a
m=V.bp()
r=new V.S(-1,1,1)
r=r.w(0,Math.sqrt(r.H(r)))
q=n.bo(new V.ba(0,2,4,7),new V.ae(1,1,0,1),new V.a6(-1,1,0),m,r,p)
o.d.ja(H.d([u,t,s,q],[F.ao]))
o.ar()
return o},
jW:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.cS()
return(u>0?t+4:t)*2},
db:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ao,P.q,P.q]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.S(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.S(p+a3,o+a1,n+a2)
l=new V.S(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.S(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.jW(u)
g=F.jW(e.b)
f=F.mt(d,a0,new F.jV(e,F.jW(e.c),F.jW(e.d),g,h,c),b)
if(f!=null)a.cF(f)},
oD:function(a){var u,t,s=null,r={}
r.a=u
r.a=null
r.a=new F.kp()
r=new F.kq(r,a)
t=F.kJ()
F.db(t,s,r,8,8,1,0,0,1)
F.db(t,s,r,8,8,0,1,0,3)
F.db(t,s,r,8,8,0,0,1,2)
F.db(t,s,r,8,8,-1,0,0,0)
F.db(t,s,r,8,8,0,-1,0,0)
F.db(t,s,r,8,8,0,0,-1,3)
t.ar()
t.jB(new F.j_(),new F.hG())
return t},
op:function(a,b){var u,t={}
t.a=u
t.a=null
t.a=new F.k7()
return F.mt(b,a,new F.k8(t),null)},
mt:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ao,P.q,P.q]})
if(a<1)return
if(b<1)return
u=F.kJ()
t=H.d([],[F.ao])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iU(g,g,new V.ae(p,0,0,1),g,g,new V.a9(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cr(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iU(g,g,new V.ae(j,i,h,1),g,g,new V.a9(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cr(d))}}u.d.jb(a+1,b+1,t)
return u},
cr:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.t(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.u("May not create a face with vertices attached to different shapes."))
u.ce(a)
u.cf(b)
u.im(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a6()
return u},
n5:function(a,b){var u=new F.bm(),t=a.a
if(t==null)H.t(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.u("May not create a line with vertices attached to different shapes."))
u.ce(a)
u.cf(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a6()
return u},
kJ:function(){var u=new F.e1(),t=new F.iV(u)
t.b=!1
t.siM(H.d([],[F.ao]))
u.a=t
t=new F.i0(u)
t.sc6(H.d([],[F.bH]))
u.b=t
t=new F.i_(u)
t.sfV(H.d([],[F.bm]))
u.c=t
t=new F.hZ(u)
t.sfM(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
iU:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ao(),r=new F.j2()
r.sc6(H.d([],[F.bH]))
s.b=r
r=new F.iZ()
u=[F.bm]
r.sfW(H.d([],u))
r.sfX(H.d([],u))
s.c=r
r=new F.iW()
u=[F.a8]
r.sfN(H.d([],u))
r.sfO(H.d([],u))
r.sfP(H.d([],u))
s.d=r
h=$.l7()
s.e=0
r=$.ap()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aY().a)!==0?e:t
s.x=(u&$.bi().a)!==0?b:t
s.y=(u&$.aK().a)!==0?f:t
s.z=(u&$.bj().a)!==0?g:t
s.Q=(u&$.l8().a)!==0?c:t
s.ch=(u&$.bR().a)!==0?i:0
s.cx=(u&$.bh().a)!==0?a:t
return s},
jV:function jV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kp:function kp(){},
kq:function kq(a,b){this.a=a
this.b=b},
k7:function k7(){},
k8:function k8(a){this.a=a},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fV:function fV(){},
i4:function i4(){},
bm:function bm(){this.b=this.a=null},
hb:function hb(){},
iA:function iA(){},
bH:function bH(){this.a=null},
e1:function e1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hZ:function hZ(a){this.a=a
this.b=null},
i_:function i_(a){this.a=a
this.b=null},
i0:function i0(a){this.a=a
this.b=null},
ao:function ao(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j4:function j4(a){this.a=a},
j3:function j3(a){this.a=a},
iV:function iV(a){this.a=a
this.c=this.b=null},
iW:function iW(){this.d=this.c=this.b=null},
iX:function iX(a,b){this.a=a
this.b=b},
iY:function iY(a,b){this.a=a
this.b=b},
iZ:function iZ(){this.c=this.b=null},
j0:function j0(){},
j_:function j_(){},
j1:function j1(){},
hG:function hG(){},
j2:function j2(){this.b=null}},T={
kK:function(a){var u=new T.il()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bs:function bs(){},
bL:function bL(){},
il:function il(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
im:function im(a){var _=this
_.a=a
_.e=_.d=_.b=null},
io:function io(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c}},K={
mm:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8="testCanvas",a9=null,b0="controls",b1="modifiers",b2={},b3=V.nu("Test 040"),b4=W.ky()
b4.className="pageLargeCanvas"
b4.id=a8
b3.a.appendChild(b4)
u=[P.j]
b3.dK(H.d(["A combination of bump mapping with height map and specular map."],u))
b3.j8(H.d(["controls"],u))
b3.dK(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a8)
if(t==null)H.t(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.ny(t,!0,!0,!0,!1)
r=s.f.bL("../resources/gravel/colorLarge.png")
q=s.f.bL("../resources/gravel/bumpLarge.png")
p=s.f.bL("../resources/gravel/specularSmall.png")
o=s.f.bL("../resources/gravel/heightSmall.png")
b3=U.li(V.lv(0,0,2))
n=new U.e_()
n.r=n.f=n.e=n.d=n.c=n.b=n.a=0
n.seZ(0)
n.seH(0,0)
n.seM(0)
m=n.d
if(!(Math.abs(m-0.6)<$.E().a)){n.d=0.6
m=new D.v("deltaYaw",m,0.6,[P.q])
m.b=!0
n.O(m)}m=n.e
if(!(Math.abs(m-0.1)<$.E().a)){n.e=0.1
m=new D.v("deltaPitch",m,0.1,[P.q])
m.b=!0
n.O(m)}m=n.f
if(!(Math.abs(m-0)<$.E().a)){n.f=0
m=new D.v("deltaRoll",m,0,[P.q])
m.b=!0
n.O(m)}m=U.ah
l=[m]
k=U.lm(H.d([b3,n],l))
j=E.kA(F.oD(0.03))
j.sb9(k)
n=O.lr()
b3=n.f
b3.saz(0,new V.a1(1,1,1))
j.sap(n)
i=new D.bG()
i.c=new V.a1(1,1,1)
i.d=1
i.f=i.e=0
i.a=V.lB()
h=i.b
i.b=k
k.gn().h(0,i.gfc())
b3=new D.v("mover",h,i.b,[m])
b3.b=!0
i.aj(b3)
b3=i.c=new V.a1(1,1,1)
if(!b3.q(0,b3)){h=i.c
i.c=b3
b3=new D.v("color",h,b3,[V.a1])
b3.b=!0
i.aj(b3)}b3=i.d
if(!(Math.abs(b3-0.5)<$.E().a)){i.d=0.5
b3=new D.v("attenuation0",b3,0.5,[P.q])
b3.b=!0
i.aj(b3)}b3=i.e
if(!(Math.abs(b3-0.1)<$.E().a)){i.e=0.1
b3=new D.v("attenuation1",b3,0.1,[P.q])
b3.b=!0
i.aj(b3)}b3=i.f
if(!(Math.abs(b3-0)<$.E().a)){i.f=0
b3=new D.v("attenuation2",b3,0,[P.q])
b3.b=!0
i.aj(b3)}g=F.mr()
f=E.kA(g)
b2.a=null
o.gn().h(0,new K.kf(b2,s,o))
e=X.ly()
b3=s.r
n=new U.ei()
m=U.lh()
m.seY(0,!0)
m.sev(6.283185307179586)
m.sex(0)
m.saa(0,0)
m.sew(100)
m.sa3(0)
m.sdU(0.5)
n.b=m
d=n.gbl()
m.gn().h(0,d)
m=U.lh()
m.seY(0,!0)
m.sev(6.283185307179586)
m.sex(0)
m.saa(0,0)
m.sew(100)
m.sa3(0)
m.sdU(0.5)
n.c=m
m.gn().h(0,d)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
c=new X.aB(!1,!1,!1)
h=n.d
n.d=c
m=[X.aB]
d=new D.v(b1,h,c,m)
d.b=!0
n.O(d)
d=n.f
if(d!==!1){n.f=!1
d=new D.v("invertX",d,!1,[P.a0])
d.b=!0
n.O(d)}d=n.r
if(d!==!1){n.r=!1
d=new D.v("invertY",d,!1,[P.a0])
d.b=!0
n.O(d)}n.cg(b3)
b3=s.r
d=new U.ej()
d.c=0.01
d.e=d.d=0
c=new X.aB(!1,!1,!1)
d.b=c
m=new D.v(b1,a9,c,m)
m.b=!0
d.O(m)
d.cg(b3)
e.sb9(U.lm(H.d([n,d,U.li(V.lv(0,0,5))],l)))
b=O.lr()
b.dx.h(0,i)
b3=b.r
b3.saz(0,new V.a1(0.3,0.3,0.3))
b.x.saz(0,new V.a1(1,1,1))
b3=b.z
if(b3.c===C.d){b3.c=C.j
b3.bW()
b3.cb(100)
n=b3.a
n.a=null
n.t(a9)}b3.cb(40)
a=X.kw(!0,1,1,!0)
b3=[E.ak]
a0=M.lk(H.d([f,j],b3))
a0.sap(b)
a0.sco(e)
a0.saM(0,a)
a1=X.kw(!0,0.5,0.5,!0)
a2=M.lk(H.d([f,j],b3))
a2.sco(e)
a2.saM(0,a1)
b3=new O.fK()
b3.d=1
b3.e=10
a3=new V.a1(1,1,1)
b3.b=a3
n=[V.a1]
m=new D.v("objectColor",a9,a3,n)
m.b=!0
b3.t(m)
a3=new V.a1(0,0,0)
if(!J.O(b3.c,a3)){h=b3.c
b3.c=a3
n=new D.v("fogColor",h,a3,n)
n.b=!0
b3.t(n)}n=b3.d
if(!(Math.abs(n-0.5)<$.E().a)){b3.d=0.5
n=new D.v("fogStart",n,0.5,[P.q])
n.b=!0
b3.t(n)}n=b3.e
if(!(Math.abs(n-5.5)<$.E().a)){b3.e=5.5
n=new D.v("fogStop",n,5.5,[P.q])
n.b=!0
b3.t(n)}a2.sap(b3)
b3=new V.bN(-1,0,0,1)
n=a.ch
m=a1.ch
a4=new M.dC()
a4.b=X.kw(!0,1,1,!1)
l=O.ll(a9,a9)
d=a4.gY()
l.gn().h(0,d)
a4.c=l
a4.d=M.kz(a4.b,l)
l=a4.b.ch
a5=$.lQ
l=O.ll(a5==null?$.lQ=new V.X(0,1):a5,l)
l.gn().h(0,d)
a4.e=l
a4.f=M.kz(a9,l)
a4.c.sck(0)
a4.e.sck(0)
a4.c.sdT(n)
a4.c.sb2(m)
a4.e.sb2(m)
a4.c.scO(a9)
a4.e.scO(a9)
a4.c.scj(b3)
a4.e.scj(b3)
a4.f.saM(0,a9)
a6=new O.e5()
a6.a=new V.ae(0,0,0,0)
a6.sfK(O.fz(O.aU))
a6.c.aN(a6.ghs(),a6.ghu())
a6.d=0
a6.e=null
a6.r=a6.f=C.u
a3=new V.ae(0,0,0,0)
if(!a6.a.q(0,a3)){h=a6.a
a6.a=a3
b3=new D.v("backColor",h,a3,[V.ae])
b3.b=!0
a6.t(b3)}a6.sdQ(C.u)
a6.sdQ(C.t)
b3=a6.c
n=a1.ch
b3.h(0,O.lH(V.cG(0,0.8,0.2,0.2),n))
n=a6.c
b3=a.ch
n.h(0,O.lH(V.cG(0,0.6,0.2,0.2),b3))
a7=M.kz(a9,a9)
a7.saM(0,X.kB(!1,a9))
a7.sap(a6)
b3=M.at
n=H.d([a0,a2,a4,a7],[b3])
m=new M.dp()
m.bh(b3)
m.e=!1
m.f=null
m.aN(m.ghU(),m.ghW())
m.b1(0,n)
b3=s.d
if(b3!==m){if(b3!=null)b3.gn().G(0,s.gd_())
s.d=m
m.gn().h(0,s.gd_())
s.d0()}b3=new V.fx(b0)
u=u.getElementById(b0)
b3.c=u
if(u==null)H.t("Failed to find controls for CheckGroup")
b3.sfz(H.d([],[W.cn]))
b3.dJ(0,"Color",new K.kg(b,r),!0)
b3.b0(0,"Specular",new K.kh(b,p))
b3.b0(0,"Bump",new K.ki(b,q))
b3.b0(0,"Height",new K.kj(b2,f,g))
b3.b0(0,"Blur",new K.kk(a4,a1))
b3.b0(0,"Passes",new K.kl(a7,a6))
V.oC(s)},
kf:function kf(a,b,c){this.a=a
this.b=b
this.c=c},
kg:function kg(a,b){this.a=a
this.b=b},
kh:function kh(a,b){this.a=a
this.b=b},
ki:function ki(a,b){this.a=a
this.b=b},
kj:function kj(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function kk(a,b){this.a=a
this.b=b},
kl:function kl(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kG.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gK:function(a){return H.cF(a)},
i:function(a){return"Instance of '"+H.c5(a)+"'"}}
J.h6.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$ia0:1}
J.dH.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0}}
J.dJ.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.hL.prototype={}
J.cW.prototype={}
J.bC.prototype={
i:function(a){var u=a[$.mw()]
if(u==null)return this.f2(a)
return"JavaScript function for "+H.m(J.ax(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikC:1}
J.b3.prototype={
h:function(a,b){H.B(b,H.y(a,0))
if(!!a.fixed$length)H.t(P.H("add"))
a.push(b)},
eJ:function(a,b){if(!!a.fixed$length)H.t(P.H("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dY(b,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.t(P.H("remove"))
for(u=0;u<a.length;++u)if(J.O(a[u],b)){a.splice(u,1)
return!0}return!1},
b1:function(a,b){var u,t
H.k(b,"$ii",[H.y(a,0)],"$ai")
if(!!a.fixed$length)H.t(P.H("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.G)(b),++t)a.push(b[t])},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bZ(a))}},
E:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.l(t,u,H.m(a[u]))
return t.join(b)},
jy:function(a){return this.E(a,"")},
js:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.y(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bZ(a))}return t},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
cX:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ai(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.ai(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.y(a,0)])
return H.d(a.slice(b,c),[H.y(a,0)])},
cW:function(a,b){return this.cX(a,b,null)},
gjr:function(a){if(a.length>0)return a[0]
throw H.c(H.ln())},
gaL:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.ln())},
as:function(a,b){var u
for(u=0;u<a.length;++u)if(J.O(a[u],b))return!0
return!1},
i:function(a){return P.kD(a,"[","]")},
gW:function(a){return new J.aq(a,a.length,[H.y(a,0)])},
gK:function(a){return H.cF(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.H("set length"))
if(b<0)throw H.c(P.ai(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.ce(a,b))
return a[b]},
l:function(a,b,c){H.B(c,H.y(a,0))
if(!!a.immutable$list)H.t(P.H("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ce(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.kF.prototype={}
J.aq.prototype={
gM:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.G(s))
u=t.c
if(u>=r){t.sdh(null)
return!1}t.sdh(s[u]);++t.c
return!0},
sdh:function(a){this.d=H.B(a,H.y(this,0))},
$ib2:1}
J.dI.prototype={
k6:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.H(""+a+".toInt()"))},
b6:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.H(""+a+".floor()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.H(""+a+".round()"))},
eR:function(a,b){var u,t
if(b>20)throw H.c(P.ai(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
be:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ai(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a0(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.H("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.m("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
m:function(a,b){if(typeof b!=="number")throw H.c(H.aI(b))
return a*b},
av:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aI(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f4:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dF(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.dF(a,b)},
dF:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.H("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aT:function(a,b){var u
if(a>0)u=this.dE(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
is:function(a,b){if(b<0)throw H.c(H.aI(b))
return this.dE(a,b)},
dE:function(a,b){return b>31?0:a>>>b},
$iq:1,
$iac:1}
J.dG.prototype={$io:1}
J.dF.prototype={}
J.c2.prototype={
a0:function(a,b){if(b<0)throw H.c(H.ce(a,b))
if(b>=a.length)H.t(H.ce(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(b>=a.length)throw H.c(H.ce(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.c(P.kv(b,null,null))
return a+b},
aW:function(a,b,c,d){var u,t
c=P.bJ(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ai:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ai(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ah:function(a,b){return this.ai(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.aI(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.a_()
if(b<0)throw H.c(P.dY(b,null))
if(b>c)throw H.c(P.dY(b,null))
if(c>a.length)throw H.c(P.dY(c,null))
return a.substring(b,c)},
aF:function(a,b){return this.A(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ao:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
jL:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.m(c,u)},
er:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ai(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eq:function(a,b){return this.er(a,b,0)},
i:function(a){return a},
gK:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ilx:1,
$ij:1}
H.a4.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.b.a0(this.a,b)},
$acX:function(){return[P.o]},
$az:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.fQ.prototype={}
H.dM.prototype={
gM:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=J.de(s),q=r.gk(s)
if(t.b!==q)throw H.c(P.bZ(s))
u=t.c
if(u>=q){t.saY(null)
return!1}t.saY(r.L(s,u));++t.c
return!0},
saY:function(a){this.d=H.B(a,H.y(this,0))},
$ib2:1}
H.hm.prototype={
gW:function(a){return new H.hn(J.bS(this.a),this.b,this.$ti)},
gk:function(a){return J.aL(this.a)},
L:function(a,b){return this.b.$1(J.ku(this.a,b))},
$ai:function(a,b){return[b]}}
H.hn.prototype={
C:function(){var u=this,t=u.b
if(t.C()){u.saY(u.c.$1(t.gM(t)))
return!0}u.saY(null)
return!1},
gM:function(a){return this.a},
saY:function(a){this.a=H.B(a,H.y(this,1))},
$ab2:function(a,b){return[b]}}
H.j6.prototype={
gW:function(a){return new H.j7(J.bS(this.a),this.b,this.$ti)}}
H.j7.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(H.C(t.$1(u.gM(u))))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.c0.prototype={}
H.cX.prototype={
l:function(a,b,c){H.B(c,H.az(this,"cX",0))
throw H.c(P.H("Cannot modify an unmodifiable list"))}}
H.ef.prototype={}
H.fC.prototype={
i:function(a){return P.kI(this)},
l:function(a,b,c){H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
return H.mX()},
$iF:1}
H.fD.prototype={
gk:function(a){return this.a},
br:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.br(0,b))return
return this.di(b)},
di:function(a){return this.b[H.Q(a)]},
P:function(a,b){var u,t,s,r,q=this,p=H.y(q,1)
H.n(b,{func:1,ret:-1,args:[H.y(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.B(q.di(r),p))}}}
H.ix.prototype={
an:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.h8.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.m(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.m(t.a)+")"
return s+r+"' on '"+u+"' ("+H.m(t.a)+")"}}
H.iJ.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kr.prototype={
$1:function(a){if(!!J.V(a).$ibx)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:27}
H.eR.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iau:1}
H.co.prototype={
i:function(a){return"Closure '"+H.c5(this).trim()+"'"},
$ikC:1,
gkd:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ii.prototype={}
H.i9.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cj(u)+"'"}}
H.ck.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ck))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gK:function(a){var u,t=this.c
if(t==null)u=H.cF(this.a)
else u=typeof t!=="object"?J.di(t):H.cF(t)
return(u^H.cF(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c5(u)+"'")}}
H.iz.prototype={
i:function(a){return this.a}}
H.fv.prototype={
i:function(a){return this.a}}
H.hW.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.j8.prototype={
i:function(a){return"Assertion failed: "+P.dz(this.a)}}
H.aN.prototype={
gk:function(a){return this.a},
gaB:function(a){return new H.hd(this,[H.y(this,0)])},
br:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.de(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.de(t,b)}else return s.jv(b)},
jv:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cC(u.c1(t,u.cB(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bj(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bj(r,b)
s=t==null?null:t.b
return s}else return q.jw(b)},
jw:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.c1(r,s.cB(a))
t=s.cC(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s=this
H.B(b,H.y(s,0))
H.B(c,H.y(s,1))
if(typeof b==="string"){u=s.b
s.d4(u==null?s.b=s.c4():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d4(t==null?s.c=s.c4():t,b,c)}else s.jx(b,c)},
jx:function(a,b){var u,t,s,r,q=this
H.B(a,H.y(q,0))
H.B(b,H.y(q,1))
u=q.d
if(u==null)u=q.d=q.c4()
t=q.cB(a)
s=q.c1(u,t)
if(s==null)q.cc(u,t,[q.c5(a,b)])
else{r=q.cC(s,a)
if(r>=0)s[r].b=b
else s.push(q.c5(a,b))}},
P:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.y(s,0),H.y(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bZ(s))
u=u.c}},
d4:function(a,b,c){var u,t=this
H.B(b,H.y(t,0))
H.B(c,H.y(t,1))
u=t.bj(a,b)
if(u==null)t.cc(a,b,t.c5(b,c))
else u.b=c},
c5:function(a,b){var u=this,t=new H.hc(H.B(a,H.y(u,0)),H.B(b,H.y(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cB:function(a){return J.di(a)&0x3ffffff},
cC:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1},
i:function(a){return P.kI(this)},
bj:function(a,b){return a[b]},
c1:function(a,b){return a[b]},
cc:function(a,b,c){a[b]=c},
fF:function(a,b){delete a[b]},
de:function(a,b){return this.bj(a,b)!=null},
c4:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cc(t,u,t)
this.fF(t,u)
return t}}
H.hc.prototype={}
H.hd.prototype={
gk:function(a){return this.a.a},
gW:function(a){var u=this.a,t=new H.he(u,u.r,this.$ti)
t.c=u.e
return t}}
H.he.prototype={
gM:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bZ(t))
else{t=u.c
if(t==null){u.sd3(null)
return!1}else{u.sd3(t.a)
u.c=u.c.c
return!0}}},
sd3:function(a){this.d=H.B(a,H.y(this,0))},
$ib2:1}
H.ka.prototype={
$1:function(a){return this.a(a)},
$S:27}
H.kb.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.kc.prototype={
$1:function(a){return this.a(H.Q(a))},
$S:36}
H.h7.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilx:1,
$inq:1}
H.cB.prototype={$icB:1}
H.bF.prototype={$ibF:1,$inA:1}
H.dR.prototype={
gk:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cC.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
l:function(a,b,c){H.ok(c)
H.bg(b,a,a.length)
a[b]=c},
$ac0:function(){return[P.q]},
$az:function(){return[P.q]},
$ii:1,
$ai:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.dS.prototype={
l:function(a,b,c){H.ad(c)
H.bg(b,a,a.length)
a[b]=c},
$ac0:function(){return[P.o]},
$az:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hB.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hC.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hD.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hE.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hF.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.dT.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
$ip_:1}
H.cD.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
$icD:1,
$iR:1}
H.d1.prototype={}
H.d2.prototype={}
H.d3.prototype={}
H.d4.prototype={}
P.ja.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.j9.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:39}
P.jb.prototype={
$0:function(){this.a.$0()},
$S:1}
P.jc.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eX.prototype={
fl:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cd(new P.jL(this,b),0),a)
else throw H.c(P.H("`setTimeout()` not found."))},
fm:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cd(new P.jK(this,a,Date.now(),b),0),a)
else throw H.c(P.H("Periodic timer."))},
$ibb:1}
P.jL.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jK.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.f4(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.bf.prototype={
jA:function(a){if(this.c!==6)return!0
return this.b.b.cN(H.n(this.d,{func:1,ret:P.a0,args:[P.T]}),a.a,P.a0,P.T)},
ju:function(a){var u=this.e,t=P.T,s={futureOr:1,type:H.y(this,1)},r=this.b.b
if(H.fd(u,{func:1,args:[P.T,P.au]}))return H.l1(r.jY(u,a.a,a.b,null,t,P.au),s)
else return H.l1(r.cN(H.n(u,{func:1,args:[P.T]}),a.a,null,t),s)}}
P.aG.prototype={
eQ:function(a,b,c){var u,t,s,r=H.y(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a_
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.o7(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aG($.a_,[c])
s=b==null?1:3
this.d5(new P.bf(t,s,a,b,[r,c]))
return t},
k5:function(a,b){return this.eQ(a,null,b)},
d5:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibf")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaG")
s=u.a
if(s<4){u.d5(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.k2(null,null,s,H.n(new P.jk(t,a),{func:1,ret:-1}))}},
dz:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibf")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaG")
u=q.a
if(u<4){q.dz(a)
return}p.a=u
p.c=q.c}o.a=p.bm(a)
u=p.b
u.toString
P.k2(null,null,u,H.n(new P.jo(o,p),{func:1,ret:-1}))}},
c8:function(){var u=H.f(this.c,"$ibf")
this.c=null
return this.bm(u)},
bm:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d9:function(a){var u,t,s=this,r=H.y(s,0)
H.l1(a,{futureOr:1,type:r})
u=s.$ti
if(H.kZ(a,"$ict",u,"$act"))if(H.kZ(a,"$iaG",u,null))P.lW(a,s)
else P.nM(a,s)
else{t=s.c8()
H.B(a,r)
s.a=4
s.c=a
P.d_(s,t)}},
da:function(a,b){var u,t=this
H.f(b,"$iau")
u=t.c8()
t.a=8
t.c=new P.ar(a,b)
P.d_(t,u)},
$ict:1}
P.jk.prototype={
$0:function(){P.d_(this.a,this.b)},
$S:1}
P.jo.prototype={
$0:function(){P.d_(this.b,this.a.a)},
$S:1}
P.jl.prototype={
$1:function(a){var u=this.a
u.a=0
u.d9(a)},
$S:18}
P.jm.prototype={
$2:function(a,b){H.f(b,"$iau")
this.a.da(a,b)},
$1:function(a){return this.$2(a,null)},
$S:37}
P.jn.prototype={
$0:function(){this.a.da(this.b,this.c)},
$S:1}
P.jr.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eN(H.n(s.d,{func:1}),null)}catch(r){u=H.aJ(r)
t=H.ch(r)
if(o.d){s=H.f(o.a.a.c,"$iar").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iar")
else q.b=new P.ar(u,t)
q.a=!0
return}if(!!J.V(n).$ict){if(n instanceof P.aG&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iar")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.k5(new P.js(p),null)
s.a=!1}},
$S:3}
P.js.prototype={
$1:function(a){return this.a},
$S:49}
P.jq.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.y(s,0)
q=H.B(n.c,r)
p=H.y(s,1)
n.a.b=s.b.b.cN(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aJ(o)
t=H.ch(o)
s=n.a
s.b=new P.ar(u,t)
s.a=!0}},
$S:3}
P.jp.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iar")
r=m.c
if(H.C(r.jA(u))&&r.e!=null){q=m.b
q.b=r.ju(u)
q.a=!1}}catch(p){t=H.aJ(p)
s=H.ch(p)
r=H.f(m.a.a.c,"$iar")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ar(t,s)
n.a=!0}},
$S:3}
P.el.prototype={}
P.ic.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aG($.a_,[P.o])
r.a=0
u=H.y(s,0)
t=H.n(new P.ie(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.ig(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.ie.prototype={
$1:function(a){H.B(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.y(this.b,0)]}}}
P.ig.prototype={
$0:function(){this.b.d9(this.a.a)},
$S:1}
P.cK.prototype={}
P.id.prototype={}
P.bb.prototype={}
P.ar.prototype={
i:function(a){return H.m(this.a)},
$ibx:1}
P.jU.prototype={$ipd:1}
P.k1.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dU():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:1}
P.jz.prototype={
jZ:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a_){a.$0()
return}P.m6(r,r,this,a,-1)}catch(s){u=H.aJ(s)
t=H.ch(s)
P.k0(r,r,this,u,H.f(t,"$iau"))}},
k_:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.k===$.a_){a.$1(b)
return}P.m7(r,r,this,a,b,-1,c)}catch(s){u=H.aJ(s)
t=H.ch(s)
P.k0(r,r,this,u,H.f(t,"$iau"))}},
je:function(a,b){return new P.jB(this,H.n(a,{func:1,ret:b}),b)},
ci:function(a){return new P.jA(this,H.n(a,{func:1,ret:-1}))},
dP:function(a,b){return new P.jC(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eN:function(a,b){H.n(a,{func:1,ret:b})
if($.a_===C.k)return a.$0()
return P.m6(null,null,this,a,b)},
cN:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a_===C.k)return a.$1(b)
return P.m7(null,null,this,a,b,c,d)},
jY:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a_===C.k)return a.$2(b,c)
return P.o8(null,null,this,a,b,c,d,e,f)}}
P.jB.prototype={
$0:function(){return this.a.eN(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jA.prototype={
$0:function(){return this.a.jZ(this.b)},
$S:3}
P.jC.prototype={
$1:function(a){var u=this.c
return this.a.k_(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jw.prototype={
gW:function(a){return P.lY(this,this.r,H.y(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.B(b,H.y(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d7(u==null?s.b=P.kS():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d7(t==null?s.c=P.kS():t,b)}else return s.fo(0,b)},
fo:function(a,b){var u,t,s,r=this
H.B(b,H.y(r,0))
u=r.d
if(u==null)u=r.d=P.kS()
t=r.dc(b)
s=u[t]
if(s==null)u[t]=[r.bY(b)]
else{if(r.dj(s,b)>=0)return!1
s.push(r.bY(b))}return!0},
G:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.i7(this.c,b)
else return this.i6(0,b)},
i6:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.fS(r,b)
t=s.dj(u,b)
if(t<0)return!1
s.dG(u.splice(t,1)[0])
return!0},
d7:function(a,b){H.B(b,H.y(this,0))
if(H.f(a[b],"$id0")!=null)return!1
a[b]=this.bY(b)
return!0},
i7:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$id0")
if(u==null)return!1
this.dG(u)
delete a[b]
return!0},
dn:function(){this.r=1073741823&this.r+1},
bY:function(a){var u,t=this,s=new P.d0(H.B(a,H.y(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dn()
return s},
dG:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dn()},
dc:function(a){return J.di(a)&1073741823},
fS:function(a,b){return a[this.dc(b)]},
dj:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1}}
P.d0.prototype={}
P.jx.prototype={
gM:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bZ(t))
else{t=u.c
if(t==null){u.sd8(null)
return!1}else{u.sd8(H.B(t.a,H.y(u,0)))
u.c=u.c.b
return!0}}},
sd8:function(a){this.d=H.B(a,H.y(this,0))},
$ib2:1}
P.hf.prototype={
$2:function(a,b){this.a.l(0,H.B(a,this.b),H.B(b,this.c))},
$S:6}
P.hg.prototype={$ii:1,$ib:1}
P.z.prototype={
gW:function(a){return new H.dM(a,this.gk(a),[H.cg(this,a,"z",0)])},
L:function(a,b){return this.j(a,b)},
k8:function(a,b){var u,t=this,s=H.d([],[H.cg(t,a,"z",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.l(s,u,t.j(a,u))
return s},
k7:function(a){return this.k8(a,!0)},
jp:function(a,b,c,d){var u
H.B(d,H.cg(this,a,"z",0))
P.bJ(b,c,this.gk(a))
for(u=b;u<c;++u)this.l(a,u,d)},
i:function(a){return P.kD(a,"[","]")}}
P.hj.prototype={}
P.hk.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.m(a)
t.a=u+": "
t.a+=H.m(b)},
$S:6}
P.al.prototype={
P:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.cg(s,a,"al",0),H.cg(s,a,"al",1)]})
for(u=J.bS(s.gaB(a));u.C();){t=u.gM(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.aL(this.gaB(a))},
i:function(a){return P.kI(a)},
$iF:1}
P.jM.prototype={
l:function(a,b,c){H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
throw H.c(P.H("Cannot modify unmodifiable map"))}}
P.hl.prototype={
j:function(a,b){return J.la(this.a,b)},
l:function(a,b,c){J.kt(this.a,H.B(b,H.y(this,0)),H.B(c,H.y(this,1)))},
P:function(a,b){J.lb(this.a,H.n(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gk:function(a){return J.aL(this.a)},
i:function(a){return J.ax(this.a)},
$iF:1}
P.eg.prototype={}
P.jD.prototype={
i:function(a){return P.kD(this,"{","}")},
L:function(a,b){var u,t,s,r=this
P.lE(b,"index")
for(u=P.lY(r,r.r,H.y(r,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.c(P.Z(b,r,"index",null,t))},
$ii:1,
$ilF:1}
P.eA.prototype={}
P.f2.prototype={}
P.fr.prototype={
jC:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bJ(a0,a1,b.length)
u=$.mJ()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.J(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.k9(C.b.J(b,n))
j=H.k9(C.b.J(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.aj("")
g=r.a+=C.b.A(b,s,t)
r.a=g+H.dW(m)
s=n
continue}}throw H.c(P.a3("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.A(b,s,a1)
f=g.length
if(q>=0)P.ld(b,p,a1,q,o,f)
else{e=C.e.av(f-1,4)+1
if(e===1)throw H.c(P.a3(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aW(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.ld(b,p,a1,q,o,d)
else{e=C.e.av(d,4)
if(e===1)throw H.c(P.a3(c,b,a1))
if(e>1)b=C.b.aW(b,a1,a1,e===2?"==":"=")}return b},
$abX:function(){return[[P.b,P.o],P.j]}}
P.fs.prototype={
$ac_:function(){return[[P.b,P.o],P.j]}}
P.bX.prototype={}
P.c_.prototype={}
P.fR.prototype={
$abX:function(){return[P.j,[P.b,P.o]]}}
P.iR.prototype={
gjo:function(){return C.N}}
P.iT.prototype={
cq:function(a){var u,t,s=P.bJ(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jT(u)
if(t.fQ(a,0,s)!==s)t.dI(J.mP(a,s-1),0)
return new Uint8Array(u.subarray(0,H.o2(0,t.b,u.length)))},
$ac_:function(){return[P.j,[P.b,P.o]]}}
P.jT.prototype={
dI:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fQ:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a0(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.J(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dI(r,C.b.J(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iS.prototype={
cq:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[P.o],"$ab")
u=P.nD(!1,a,0,null)
if(u!=null)return u
t=P.bJ(0,null,J.aL(a))
s=P.m9(a,0,t)
if(s>0){r=P.cL(a,0,s)
if(s===t)return r
q=new P.aj(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.aj("")
n=new P.jS(!1,q)
n.c=o
n.jh(a,p,t)
if(n.e>0){H.t(P.a3("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.dW(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$ac_:function(){return[[P.b,P.o],P.j]}}
P.jS.prototype={
jh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.k(a,"$ib",[P.o],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.de(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bT()
if((o&192)!==128){n=P.a3(h+C.e.be(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.z,n)
if(u<=C.z[n]){n=P.a3("Overlong encoding of 0x"+C.e.be(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a3("Character outside valid Unicode range: 0x"+C.e.be(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.dW(u)
i.c=!1}for(n=p<c;n;){m=P.m9(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cL(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.a_()
if(o<0){j=P.a3("Negative UTF-8 code unit: -0x"+C.e.be(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a3(h+C.e.be(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.a0.prototype={}
P.ay.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gK:function(a){var u=this.a
return(u^C.e.aT(u,30))&1073741823},
i:function(a){var u=this,t=P.mY(H.nm(u)),s=P.ds(H.nk(u)),r=P.ds(H.ng(u)),q=P.ds(H.nh(u)),p=P.ds(H.nj(u)),o=P.ds(H.nl(u)),n=P.mZ(H.ni(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.q.prototype={}
P.bw.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bw&&this.a===b.a},
gK:function(a){return C.e.gK(this.a)},
i:function(a){var u,t,s,r=new P.fP(),q=this.a
if(q<0)return"-"+new P.bw(0-q).i(0)
u=r.$1(C.e.a9(q,6e7)%60)
t=r.$1(C.e.a9(q,1e6)%60)
s=new P.fO().$1(q%1e6)
return""+C.e.a9(q,36e8)+":"+H.m(u)+":"+H.m(t)+"."+H.m(s)}}
P.fO.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:20}
P.fP.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:20}
P.bx.prototype={}
P.fk.prototype={
i:function(a){return"Assertion failed"}}
P.dU.prototype={
i:function(a){return"Throw of null."}}
P.aZ.prototype={
gc_:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbZ:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gc_()+o+u
if(!q.a)return t
s=q.gbZ()
r=P.dz(q.b)
return t+s+": "+r}}
P.c6.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.m(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.m(s)
else if(t>s)u=": Not in range "+H.m(s)+".."+H.m(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.m(s)}return u}}
P.h5.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t=H.ad(this.b)
if(typeof t!=="number")return t.a_()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.m(u)},
gk:function(a){return this.f}}
P.iK.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iH.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.i8.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fB.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dz(u)+"."}}
P.hK.prototype={
i:function(a){return"Out of Memory"},
$ibx:1}
P.e3.prototype={
i:function(a){return"Stack Overflow"},
$ibx:1}
P.fI.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.et.prototype={
i:function(a){return"Exception: "+this.a}}
P.h0.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.A(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.J(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.a0(f,q)
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
k=""}j=C.b.A(f,m,n)
return h+l+j+k+"\n"+C.b.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.m(g)+")"):h}}
P.o.prototype={}
P.i.prototype={
gk:function(a){var u,t=this.gW(this)
for(u=0;t.C();)++u
return u},
L:function(a,b){var u,t,s
P.lE(b,"index")
for(u=this.gW(this),t=0;u.C();){s=u.gM(u)
if(b===t)return s;++t}throw H.c(P.Z(b,this,"index",null,t))},
i:function(a){return P.n2(this,"(",")")}}
P.b2.prototype={}
P.b.prototype={$ii:1}
P.F.prototype={}
P.K.prototype={
gK:function(a){return P.T.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.T.prototype={constructor:P.T,$iT:1,
q:function(a,b){return this===b},
gK:function(a){return H.cF(this)},
i:function(a){return"Instance of '"+H.c5(this)+"'"},
toString:function(){return this.i(this)}}
P.au.prototype={}
P.j.prototype={$ilx:1}
P.aj.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ioO:1}
P.iP.prototype={
$2:function(a,b){var u,t,s,r=P.j
H.k(a,"$iF",[r,r],"$aF")
H.Q(b)
u=J.l2(b).eq(b,"=")
if(u===-1){if(b!=="")J.kt(a,P.kU(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.A(b,0,u)
s=C.b.aF(b,u+1)
r=this.a
J.kt(a,P.kU(t,0,t.length,r,!0),P.kU(s,0,s.length,r,!0))}return a},
$S:40}
P.iM.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv4 address, "+a,this.a,b))},
$S:42}
P.iN.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:44}
P.iO.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.ff(C.b.A(this.b,a,b),null,16)
if(typeof u!=="number")return u.a_()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:45}
P.ca.prototype={
geW:function(){return this.b},
gcA:function(a){var u=this.c
if(u==null)return""
if(C.b.ah(u,"["))return C.b.A(u,1,u.length-1)
return u},
gbM:function(a){var u=this.d
if(u==null)return P.lZ(this.a)
return u},
gcK:function(a){var u=this.f
return u==null?"":u},
gel:function(){var u=this.r
return u==null?"":u},
eK:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.k(b,"$iF",[P.j,null],"$aF")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.ah(p,"/"))p="/"+p
n=P.kT(null,0,0,b)
return new P.ca(u,s,q,r,p,n,m.r)},
gbO:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.j
s.si5(new P.eg(P.lO(u==null?"":u),[t,t]))}return s.Q},
gem:function(){return this.c!=null},
gep:function(){return this.f!=null},
gen:function(){return this.r!=null},
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
if(!!J.V(b).$ikN)if(s.a==b.gbU())if(s.c!=null===b.gem())if(s.b==b.geW())if(s.gcA(s)==b.gcA(b))if(s.gbM(s)==b.gbM(b))if(s.e===b.geG(b)){u=s.f
t=u==null
if(!t===b.gep()){if(t)u=""
if(u===b.gcK(b)){u=s.r
t=u==null
if(!t===b.gen()){if(t)u=""
u=u===b.gel()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gK:function(a){var u=this.z
return u==null?this.z=C.b.gK(this.i(0)):u},
si5:function(a){var u=P.j
this.Q=H.k(a,"$iF",[u,u],"$aF")},
$ikN:1,
gbU:function(){return this.a},
geG:function(a){return this.e}}
P.jN.prototype={
$1:function(a){throw H.c(P.a3("Invalid port",this.a,this.b+1))},
$S:47}
P.jO.prototype={
$1:function(a){return P.jR(C.X,a,C.l,!1)},
$S:46}
P.jQ.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.jR(C.r,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.jR(C.r,b,C.l,!0))}},
$S:28}
P.jP.prototype={
$2:function(a,b){var u,t
H.Q(a)
if(b==null||typeof b==="string")this.a.$2(a,H.Q(b))
else for(u=J.bS(H.ml(b,"$ii")),t=this.a;u.C();)t.$2(a,H.Q(u.gM(u)))},
$S:29}
P.iL.prototype={
geV:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.er(u,"?",o)
s=u.length
if(t>=0){r=P.da(u,t+1,s,C.p,!1)
s=t}else r=p
return q.c=new P.jg("data",p,p,p,P.da(u,o,s,C.B,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jY.prototype={
$1:function(a){return new Uint8Array(96)},
$S:30}
P.jX.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.mQ(u,0,96,b)
return u},
$S:31}
P.jZ.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.J(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.k_.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.J(b,0),t=C.b.J(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.jE.prototype={
gem:function(){return this.c>0},
geo:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.D()
t=this.e
if(typeof t!=="number")return H.w(t)
t=u+1<t
u=t}else u=!1
return u},
gep:function(){var u=this.f
if(typeof u!=="number")return u.a_()
return u<this.r},
gen:function(){return this.r<this.a.length},
gdl:function(){return this.b===4&&C.b.ah(this.a,"http")},
gdm:function(){return this.b===5&&C.b.ah(this.a,"https")},
gbU:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdl())q=t.x="http"
else if(t.gdm()){t.x="https"
q="https"}else if(q===4&&C.b.ah(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.ah(t.a,r)){t.x=r
q=r}else{q=C.b.A(t.a,0,q)
t.x=q}return q},
geW:function(){var u=this.c,t=this.b+3
return u>t?C.b.A(this.a,t,u-1):""},
gcA:function(a){var u=this.c
return u>0?C.b.A(this.a,u,this.d):""},
gbM:function(a){var u,t=this
if(t.geo()){u=t.d
if(typeof u!=="number")return u.D()
return P.ff(C.b.A(t.a,u+1,t.e),null,null)}if(t.gdl())return 80
if(t.gdm())return 443
return 0},
geG:function(a){return C.b.A(this.a,this.e,this.f)},
gcK:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.a_()
return u<t?C.b.A(this.a,u+1,t):""},
gel:function(){var u=this.r,t=this.a
return u<t.length?C.b.aF(t,u+1):""},
gbO:function(){var u=this,t=u.f
if(typeof t!=="number")return t.a_()
if(t>=u.r)return C.Y
t=P.j
return new P.eg(P.lO(u.gcK(u)),[t,t])},
eK:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.k(b,"$iF",[P.j,null],"$aF")
u=k.gbU()
t=u==="file"
s=k.c
r=s>0?C.b.A(k.a,k.b+3,s):""
q=k.geo()?k.gbM(k):j
s=k.c
if(s>0)p=C.b.A(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.A(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.ah(o,"/"))o="/"+o
m=P.kT(j,0,0,b)
n=k.r
l=n<s.length?C.b.aF(s,n+1):j
return new P.ca(u,r,p,q,o,m,l)},
gK:function(a){var u=this.y
return u==null?this.y=C.b.gK(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.V(b).$ikN&&this.a===b.i(0)},
i:function(a){return this.a},
$ikN:1}
P.jg.prototype={}
W.x.prototype={}
W.fg.prototype={
gk:function(a){return a.length}}
W.fi.prototype={
i:function(a){return String(a)}}
W.fj.prototype={
i:function(a){return String(a)}}
W.bU.prototype={$ibU:1}
W.bW.prototype={
cR:function(a,b,c){if(c!=null)return a.getContext(b,P.og(c))
return a.getContext(b)},
f_:function(a,b){return this.cR(a,b,null)},
$ibW:1}
W.cm.prototype={$icm:1}
W.bu.prototype={
gk:function(a){return a.length}}
W.cp.prototype={$icp:1}
W.fE.prototype={
gk:function(a){return a.length}}
W.U.prototype={$iU:1}
W.cq.prototype={
gk:function(a){return a.length}}
W.fF.prototype={}
W.b0.prototype={}
W.b1.prototype={}
W.fG.prototype={
gk:function(a){return a.length}}
W.fH.prototype={
gk:function(a){return a.length}}
W.fJ.prototype={
gk:function(a){return a.length}}
W.dv.prototype={$idv:1}
W.fL.prototype={
i:function(a){return String(a)}}
W.dw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.k(c,"$iam",[P.ac],"$aam")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.am,P.ac]]},
$az:function(){return[[P.am,P.ac]]},
$ii:1,
$ai:function(){return[[P.am,P.ac]]},
$ib:1,
$ab:function(){return[[P.am,P.ac]]},
$aD:function(){return[[P.am,P.ac]]}}
W.dx.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaq(a))+" x "+H.m(this.gam(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iam)return!1
return a.left===u.gbK(b)&&a.top===u.gbS(b)&&this.gaq(a)===u.gaq(b)&&this.gam(a)===u.gam(b)},
gK:function(a){return W.lX(C.h.gK(a.left),C.h.gK(a.top),C.h.gK(this.gaq(a)),C.h.gK(this.gam(a)))},
gdR:function(a){return a.bottom},
gam:function(a){return a.height},
gbK:function(a){return a.left},
gbQ:function(a){return a.right},
gbS:function(a){return a.top},
gaq:function(a){return a.width},
$iam:1,
$aam:function(){return[P.ac]}}
W.fM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.Q(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.j]},
$az:function(){return[P.j]},
$ii:1,
$ai:function(){return[P.j]},
$ib:1,
$ab:function(){return[P.j]},
$aD:function(){return[P.j]}}
W.fN.prototype={
gk:function(a){return a.length}}
W.je.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$ia2")},
l:function(a,b,c){var u
H.f(c,"$ia2")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gW:function(a){var u=this.k7(this)
return new J.aq(u,u.length,[H.y(u,0)])},
$az:function(){return[W.a2]},
$ai:function(){return[W.a2]},
$ab:function(){return[W.a2]}}
W.a2.prototype={
gcp:function(a){return new W.je(a,a.children)},
gdS:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a_()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a_()
if(r<0)r=-r*0
return new P.am(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
$ia2:1}
W.p.prototype={$ip:1}
W.l.prototype={
j9:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.fp(a,b,c,!1)},
fp:function(a,b,c,d){return a.addEventListener(b,H.cd(H.n(c,{func:1,args:[W.p]}),1),!1)},
$il:1}
W.aA.prototype={$iaA:1}
W.cs.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaA")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aA]},
$az:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$ics:1,
$aD:function(){return[W.aA]}}
W.fW.prototype={
gk:function(a){return a.length}}
W.h_.prototype={
gk:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.h3.prototype={
gk:function(a){return a.length}}
W.c1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iI")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.I]},
$az:function(){return[W.I]},
$ii:1,
$ai:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$ic1:1,
$aD:function(){return[W.I]}}
W.bl.prototype={$ibl:1,
gdV:function(a){return a.data}}
W.cv.prototype={$icv:1}
W.cw.prototype={$icw:1,$icn:1}
W.cn.prototype={$ia2:1,$il:1,$iI:1}
W.b4.prototype={$ib4:1}
W.hh.prototype={
i:function(a){return String(a)}}
W.hu.prototype={
gk:function(a){return a.length}}
W.cz.prototype={$icz:1}
W.hv.prototype={
j:function(a,b){return P.bt(a.get(H.Q(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
gaB:function(a){var u=H.d([],[P.j])
this.P(a,new W.hw(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.H("Not supported"))},
$aal:function(){return[P.j,null]},
$iF:1,
$aF:function(){return[P.j,null]}}
W.hw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hx.prototype={
j:function(a,b){return P.bt(a.get(H.Q(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
gaB:function(a){var u=H.d([],[P.j])
this.P(a,new W.hy(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.H("Not supported"))},
$aal:function(){return[P.j,null]},
$iF:1,
$aF:function(){return[P.j,null]}}
W.hy.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aO.prototype={$iaO:1}
W.hz.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaO")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aO]},
$az:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aD:function(){return[W.aO]}}
W.ag.prototype={$iag:1}
W.jd.prototype={
l:function(a,b,c){var u,t
H.f(c,"$iI")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gW:function(a){var u=this.a.childNodes
return new W.dA(u,u.length,[H.cg(C.Z,u,"D",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$az:function(){return[W.I]},
$ai:function(){return[W.I]},
$ab:function(){return[W.I]}}
W.I.prototype={
jW:function(a,b){var u,t
try{u=a.parentNode
J.mN(u,b,a)}catch(t){H.aJ(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.f1(a):u},
ia:function(a,b,c){return a.replaceChild(b,c)},
$iI:1}
W.cE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iI")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.I]},
$az:function(){return[W.I]},
$ii:1,
$ai:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$aD:function(){return[W.I]}}
W.aP.prototype={$iaP:1,
gk:function(a){return a.length}}
W.hM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaP")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aP]},
$az:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aD:function(){return[W.aP]}}
W.hU.prototype={
j:function(a,b){return P.bt(a.get(H.Q(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
gaB:function(a){var u=H.d([],[P.j])
this.P(a,new W.hV(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.H("Not supported"))},
$aal:function(){return[P.j,null]},
$iF:1,
$aF:function(){return[P.j,null]}}
W.hV.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hX.prototype={
gk:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.i5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aQ]},
$az:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aD:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1}
W.i6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aR]},
$az:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aD:function(){return[W.aR]}}
W.aS.prototype={$iaS:1,
gk:function(a){return a.length}}
W.ia.prototype={
j:function(a,b){return a.getItem(H.Q(b))},
l:function(a,b,c){a.setItem(b,c)},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.j,P.j]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaB:function(a){var u=H.d([],[P.j])
this.P(a,new W.ib(u))
return u},
gk:function(a){return a.length},
$aal:function(){return[P.j,P.j]},
$iF:1,
$aF:function(){return[P.j,P.j]}}
W.ib.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:28}
W.aC.prototype={$iaC:1}
W.bq.prototype={$ibq:1}
W.aT.prototype={$iaT:1}
W.aD.prototype={$iaD:1}
W.ij.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaD")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aD]},
$az:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aD:function(){return[W.aD]}}
W.ik.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$az:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aD:function(){return[W.aT]}}
W.ir.prototype={
gk:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.aW.prototype={$iaW:1}
W.iu.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$az:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aD:function(){return[W.aV]}}
W.iv.prototype={
gk:function(a){return a.length}}
W.bM.prototype={}
W.iQ.prototype={
i:function(a){return String(a)}}
W.j5.prototype={
gk:function(a){return a.length}}
W.be.prototype={
gjm:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.H("deltaY is not supported"))},
gjl:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.H("deltaX is not supported"))},
$ibe:1}
W.cZ.prototype={
ib:function(a,b){return a.requestAnimationFrame(H.cd(H.n(b,{func:1,ret:-1,args:[P.ac]}),1))},
fJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jf.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iU")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.U]},
$az:function(){return[W.U]},
$ii:1,
$ai:function(){return[W.U]},
$ib:1,
$ab:function(){return[W.U]},
$aD:function(){return[W.U]}}
W.eo.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iam)return!1
return a.left===u.gbK(b)&&a.top===u.gbS(b)&&a.width===u.gaq(b)&&a.height===u.gam(b)},
gK:function(a){return W.lX(C.h.gK(a.left),C.h.gK(a.top),C.h.gK(a.width),C.h.gK(a.height))},
gam:function(a){return a.height},
gaq:function(a){return a.width}}
W.jt.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aM]},
$az:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aD:function(){return[W.aM]}}
W.eF.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iI")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.I]},
$az:function(){return[W.I]},
$ii:1,
$ai:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$aD:function(){return[W.I]}}
W.jF.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaS")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aS]},
$az:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aD:function(){return[W.aS]}}
W.jJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaC")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aC]},
$az:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$aD:function(){return[W.aC]}}
W.jh.prototype={}
W.kR.prototype={}
W.ji.prototype={}
W.jj.prototype={
$1:function(a){return this.a.$1(H.f(a,"$ip"))},
$S:33}
W.D.prototype={
gW:function(a){return new W.dA(a,this.gk(a),[H.cg(this,a,"D",0)])}}
W.dA.prototype={
C:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdk(J.la(u.a,t))
u.c=t
return!0}u.sdk(null)
u.c=s
return!1},
gM:function(a){return this.d},
sdk:function(a){this.d=H.B(a,H.y(this,0))},
$ib2:1}
W.en.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eS.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
P.jG.prototype={
ek:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cQ:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.V(a)
if(!!u.$iay)return new Date(a.a)
if(!!u.$inq)throw H.c(P.iI("structured clone of RegExp"))
if(!!u.$iaA)return a
if(!!u.$ibU)return a
if(!!u.$ics)return a
if(!!u.$ibl)return a
if(!!u.$icB||!!u.$ibF||!!u.$icz)return a
if(!!u.$iF){t=q.ek(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.l(s,t,r)
u.P(a,new P.jI(p,q))
return p.a}if(!!u.$ib){t=q.ek(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.jj(a,t)}throw H.c(P.iI("structured clone of other type"))},
jj:function(a,b){var u,t=J.de(a),s=t.gk(a),r=new Array(s)
C.a.l(this.b,b,r)
for(u=0;u<s;++u)C.a.l(r,u,this.cQ(t.j(a,u)))
return r}}
P.jI.prototype={
$2:function(a,b){this.a.a[a]=this.b.cQ(b)},
$S:6}
P.f1.prototype={$ibl:1,
gdV:function(a){return this.a}}
P.k3.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.jH.prototype={}
P.fX.prototype={
gbk:function(){var u=this.b,t=H.az(u,"z",0),s=W.a2
return new H.hm(new H.j6(u,H.n(new P.fY(),{func:1,ret:P.a0,args:[t]}),[t]),H.n(new P.fZ(),{func:1,ret:s,args:[t]}),[t,s])},
l:function(a,b,c){var u
H.f(c,"$ia2")
u=this.gbk()
J.mR(u.b.$1(J.ku(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aL(this.gbk().a)},
j:function(a,b){var u=this.gbk()
return u.b.$1(J.ku(u.a,b))},
gW:function(a){var u=P.lq(this.gbk(),!1,W.a2)
return new J.aq(u,u.length,[H.y(u,0)])},
$az:function(){return[W.a2]},
$ai:function(){return[W.a2]},
$ab:function(){return[W.a2]}}
P.fY.prototype={
$1:function(a){return!!J.V(H.f(a,"$iI")).$ia2},
$S:34}
P.fZ.prototype={
$1:function(a){return H.h(H.f(a,"$iI"),"$ia2")},
$S:35}
P.jy.prototype={
gbQ:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.w(t)
return H.B(u+t,H.y(this,0))},
gdR:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.w(t)
return H.B(u+t,H.y(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.m(u.a)+", "+H.m(u.b)+") "+H.m(u.c)+" x "+H.m(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$iam){t=p.a
if(t==u.gbK(b)){s=p.b
if(s==u.gbS(b)){r=p.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.w(r)
q=H.y(p,0)
if(H.B(t+r,q)===u.gbQ(b)){t=p.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.w(t)
u=H.B(s+t,q)===u.gdR(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u,t=this,s=t.a,r=J.di(s),q=t.b,p=J.di(q),o=t.c
if(typeof s!=="number")return s.D()
if(typeof o!=="number")return H.w(o)
u=H.y(t,0)
o=C.e.gK(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.D()
if(typeof s!=="number")return H.w(s)
u=C.e.gK(H.B(q+s,u))
return P.nN(P.jv(P.jv(P.jv(P.jv(0,r),p),o),u))}}
P.am.prototype={
gbK:function(a){return this.a},
gbS:function(a){return this.b},
gaq:function(a){return this.c},
gam:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.ha.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.f(c,"$ib5")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.b5]},
$ii:1,
$ai:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aD:function(){return[P.b5]}}
P.b9.prototype={$ib9:1}
P.hI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.f(c,"$ib9")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.b9]},
$ii:1,
$ai:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aD:function(){return[P.b9]}}
P.hO.prototype={
gk:function(a){return a.length}}
P.ih.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.Q(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.j]},
$ii:1,
$ai:function(){return[P.j]},
$ib:1,
$ab:function(){return[P.j]},
$aD:function(){return[P.j]}}
P.r.prototype={
gcp:function(a){return new P.fX(a,new W.jd(a))}}
P.bc.prototype={$ibc:1}
P.iw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.f(c,"$ibc")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aD:function(){return[P.bc]}}
P.ey.prototype={}
P.ez.prototype={}
P.eI.prototype={}
P.eJ.prototype={}
P.eT.prototype={}
P.eU.prototype={}
P.f_.prototype={}
P.f0.prototype={}
P.R.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$inA:1}
P.fm.prototype={
gk:function(a){return a.length}}
P.fn.prototype={
j:function(a,b){return P.bt(a.get(H.Q(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
gaB:function(a){var u=H.d([],[P.j])
this.P(a,new P.fo(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.H("Not supported"))},
$aal:function(){return[P.j,null]},
$iF:1,
$aF:function(){return[P.j,null]}}
P.fo.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fp.prototype={
gk:function(a){return a.length}}
P.bT.prototype={}
P.hJ.prototype={
gk:function(a){return a.length}}
P.em.prototype={}
P.dl.prototype={$idl:1}
P.dB.prototype={$idB:1}
P.dX.prototype={$idX:1}
P.dZ.prototype={$idZ:1}
P.c7.prototype={
eO:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.V(g)
if(!!u.$ibl&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.oh(g))
return}if(!!u.$icv&&h==null&&t&&!0){this.iy(a,b,c,d,e,f,g)
return}throw H.c(P.dj("Incorrect number or type of arguments"))},
k0:function(a,b,c,d,e,f,g){return this.eO(a,b,c,d,e,f,g,null,null,null)},
iy:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
N:function(a,b,c){return a.uniform1f(b,c)},
X:function(a,b,c){return a.uniform1i(b,c)},
bg:function(a,b,c,d){return a.uniform2f(b,c,d)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eT:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eU:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cP:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic7:1}
P.e0.prototype={$ie0:1}
P.e4.prototype={$ie4:1}
P.ee.prototype={$iee:1}
P.i7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return P.bt(a.item(b))},
l:function(a,b,c){H.f(c,"$iF")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[[P.F,,,]]},
$ii:1,
$ai:function(){return[[P.F,,,]]},
$ib:1,
$ab:function(){return[[P.F,,,]]},
$aD:function(){return[[P.F,,,]]}}
P.eP.prototype={}
P.eQ.prototype={}
O.Y.prototype={
bh:function(a){var u=this
u.sfY(H.d([],[a]))
u.sdv(null)
u.sdr(null)
u.sdw(null)},
cT:function(a,b,c){var u=this,t=H.az(u,"Y",0)
H.n(b,{func:1,ret:P.a0,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.o,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdv(b)
u.sdr(a)
u.sdw(c)},
aN:function(a,b){return this.cT(a,null,b)},
du:function(a){var u
H.k(a,"$ii",[H.az(this,"Y",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dq:function(a,b){var u
H.k(b,"$ii",[H.az(this,"Y",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gW:function(a){var u=this.a
return new J.aq(u,u.length,[H.y(u,0)])},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.az(s,"Y",0)
H.B(b,r)
r=[r]
if(H.C(s.du(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dq(t,H.d([b],r))}},
b1:function(a,b){var u,t,s=this
H.k(b,"$ii",[H.az(s,"Y",0)],"$ai")
if(H.C(s.du(b))){u=s.a
t=u.length
C.a.b1(u,b)
s.dq(t,b)}},
sfY:function(a){this.a=H.k(a,"$ib",[H.az(this,"Y",0)],"$ab")},
sdv:function(a){this.b=H.n(a,{func:1,ret:P.a0,args:[[P.i,H.az(this,"Y",0)]]})},
sdr:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.az(this,"Y",0)]]})},
sdw:function(a){H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.az(this,"Y",0)]]})},
$ii:1}
O.cy.prototype={
gk:function(a){return this.a.length},
gn:function(){var u=this.b
return u==null?this.b=D.L():u},
aO:function(){var u=this.b
if(u!=null)u.B(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gaL(u)
else return V.bD()},
bN:function(a){var u=this.a
if(a==null)C.a.h(u,V.bD())
else C.a.h(u,a)
this.aO()},
bc:function(){var u=this.a
if(u.length>0){u.pop()
this.aO()}},
sc2:function(a){this.a=H.k(a,"$ib",[V.af],"$ab")}}
E.ft.prototype={}
E.ak.prototype={
d6:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.aq(u,u.length,[H.y(u,0)]);u.C();){t=u.d
if(t.f==null)t.d6()}},
sbV:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gn().G(0,s.geC())
u=s.c
if(u!=null)u.gn().h(0,s.geC())
t=new D.v("shape",r,s.c,[F.e1])
t.b=!0
s.au(t)}},
sap:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gn().G(0,s.geE())
u=s.f
s.f=a
if(a!=null)a.gn().h(0,s.geE())
s.d6()
t=new D.v("technique",u,s.f,[O.br])
t.b=!0
s.au(t)}},
sb9:function(a){var u,t,s=this
if(!J.O(s.r,a)){u=s.r
if(u!=null)u.gn().G(0,s.geA())
if(a!=null)a.gn().h(0,s.geA())
s.r=a
t=new D.v("mover",u,a,[U.ah])
t.b=!0
s.au(t)}},
ab:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aE(0,b,s):null
if(!J.O(q,s.x)){u=s.x
s.x=q
t=new D.v("matrix",u,q,[V.af])
t.b=!0
s.au(t)}r=s.f
if(r!=null)r.ab(0,b)
for(r=s.y.a,r=new J.aq(r,r.length,[H.y(r,0)]);r.C();)r.d.ab(0,b)},
a5:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga1(s))
else C.a.h(s.a,r.m(0,s.ga1(s)))
s.aO()
a.cJ(t.f)
s=a.dy
u=(s&&C.a).gaL(s)
if(u!=null&&t.d!=null)u.bP(a,t)
for(s=t.y.a,s=new J.aq(s,s.length,[H.y(s,0)]);s.C();)s.d.a5(a)
a.cH()
a.dx.bc()},
gn:function(){var u=this.z
return u==null?this.z=D.L():u},
au:function(a){var u=this.z
if(u!=null)u.B(a)},
a6:function(){return this.au(null)},
eD:function(a){H.f(a,"$iA")
this.e=null
this.au(a)},
jJ:function(){return this.eD(null)},
eF:function(a){this.au(H.f(a,"$iA"))},
jK:function(){return this.eF(null)},
eB:function(a){this.au(H.f(a,"$iA"))},
jI:function(){return this.eB(null)},
ez:function(a){this.au(H.f(a,"$iA"))},
jF:function(){return this.ez(null)},
jE:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.ak],"$ai")
for(u=b.length,t=this.gey(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.by()
o.sad(null)
o.saR(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sad(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a6()},
jH:function(a,b){var u,t
H.k(b,"$ii",[E.ak],"$ai")
for(u=b.gW(b),t=this.gey();u.C();)u.gM(u).gn().G(0,t)
this.a6()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfa:function(a,b){this.y=H.k(b,"$iY",[E.ak],"$aY")},
$ib8:1}
E.hQ.prototype={
f6:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cy()
t=[V.af]
u.sc2(H.d([],t))
u.b=null
u.gn().h(0,new E.hR(s))
s.cy=u
u=new O.cy()
u.sc2(H.d([],t))
u.b=null
u.gn().h(0,new E.hS(s))
s.db=u
u=new O.cy()
u.sc2(H.d([],t))
u.b=null
u.gn().h(0,new E.hT(s))
s.dx=u
s.six(H.d([],[O.br]))
u=s.dy;(u&&C.a).h(u,null)
s.sir(new H.aN([P.j,A.cI]))},
gjT:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.m(0,u.ga1(u))
s=u}return s},
geI:function(){var u,t=this,s=t.ch
if(s==null){s=t.gjT()
u=t.dx
u=t.ch=s.m(0,u.ga1(u))
s=u}return s},
geX:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga1(s)
u=t.dx
u=t.cx=s.m(0,u.ga1(u))
s=u}return s},
cJ:function(a){var u=this.dy,t=a==null?(u&&C.a).gaL(u):a;(u&&C.a).h(u,t)},
cH:function(){var u=this.dy
if(u.length>1)u.pop()},
bp:function(a){var u=a.b
if(u.length===0)throw H.c(P.u("May not cache a shader with no name."))
if(this.fr.br(0,u))throw H.c(P.u('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)},
six:function(a){this.dy=H.k(a,"$ib",[O.br],"$ab")},
sir:function(a){this.fr=H.k(a,"$iF",[P.j,A.cI],"$aF")}}
E.hR.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.ch=u.z=null},
$S:9}
E.hS.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.hT.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=null},
$S:9}
E.ea.prototype={
d1:function(a){H.f(a,"$iA")
this.eL()},
d0:function(){return this.d1(null)},
gjt:function(){var u,t=this,s=Date.now(),r=C.e.a9(P.lj(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
dB:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.w(r)
u=C.h.b6(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.h.b6(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lJ(C.v,s.gjX())}},
eL:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iq(this),{func:1,ret:-1,args:[P.ac]})
C.E.fJ(u)
C.E.ib(u,W.mc(t,P.ac))}},
jV:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dB()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lj(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aO()
r=s.db
C.a.sk(r.a,0)
r.aO()
r=s.dx
C.a.sk(r.a,0)
r.aO()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.a5(p.e)}}catch(q){u=H.aJ(q)
t=H.ch(q)
P.l5("Error: "+H.m(u))
P.l5("Stack: "+H.m(t))
throw H.c(u)}}}
E.iq.prototype={
$1:function(a){var u
H.oy(a)
u=this.a
if(u.ch){u.ch=!1
u.jV()}},
$S:38}
Z.ek.prototype={$ioH:1}
Z.dm.prototype={
Z:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aJ(s)
t=P.u('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.m(u.e)+"]"}}
Z.c9.prototype={$ioI:1}
Z.bk.prototype={
al:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
Z:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].Z(a)},
aD:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a5:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.j],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ax(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.E(p,", ")+"\nAttrs:   "+C.a.E(r,", ")},
sfT:function(a){this.b=H.k(a,"$ib",[Z.bz],"$ab")},
$ioP:1}
Z.bz.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c5(this.c)+"'")+"]"}}
Z.aE.prototype={
gcV:function(a){var u=this.a,t=(u&$.ap().a)!==0?3:0
if((u&$.aY().a)!==0)t+=3
if((u&$.bi().a)!==0)t+=3
if((u&$.aK().a)!==0)t+=2
if((u&$.bj().a)!==0)t+=3
if((u&$.dg().a)!==0)t+=3
if((u&$.dh().a)!==0)t+=4
if((u&$.bR().a)!==0)++t
return(u&$.bh().a)!==0?t+4:t},
jd:function(a){var u,t=$.ap(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dh()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bh()
if((s&t.a)!==0)if(u===a)return t
return $.mI()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aE))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.j]),t=this.a
if((t&$.ap().a)!==0)C.a.h(u,"Pos")
if((t&$.aY().a)!==0)C.a.h(u,"Norm")
if((t&$.bi().a)!==0)C.a.h(u,"Binm")
if((t&$.aK().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bj().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dg().a)!==0)C.a.h(u,"Clr3")
if((t&$.dh().a)!==0)C.a.h(u,"Clr4")
if((t&$.bR().a)!==0)C.a.h(u,"Weight")
if((t&$.bh().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.E(u,"|")}}
D.fw.prototype={}
D.by.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.sad(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
G:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.as(u,b)
if(u===!0){u=s.a
t=(u&&C.a).G(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.as(u,b)
if(u===!0){u=s.b
t=(u&&C.a).G(u,b)||t}return t},
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
return!0}if(!t)C.a.P(P.lq(u,!0,{func:1,ret:-1,args:[D.A]}),new D.fT(q))
u=r.b
if(u!=null){r.saR(H.d([],[{func:1,ret:-1,args:[D.A]}]))
C.a.P(u,new D.fU(q))}return!0},
dZ:function(){return this.B(null)},
af:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}},
sad:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
saR:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.fT.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.fU.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.A.prototype={}
D.bA.prototype={}
D.bB.prototype={}
D.v.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dn.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dn))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dK.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dK))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.h9.prototype={
jQ:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jM:function(a){this.c=a.b
this.d.G(0,a.a)
return!1},
si4:function(a){this.d=H.k(a,"$ilF",[P.o],"$alF")}}
X.dN.prototype={}
X.hi.prototype={
aZ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.a9(o.a+n*m,o.b+u*t)
t=q.a.gaU()
r=new X.bE(a,V.bp(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cG:function(a,b){this.r=a.a
return!1},
bb:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.f0()
if(typeof u!=="number")return u.bT()
this.r=(u&~t)>>>0
return!1},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aZ(a,b))
return!0},
jR:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaU()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.cA(new V.X(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
hD:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dN(c,r.a.gaU(),b)
s.b=!0
t.B(s)
r.y=new P.ay(u,!1)
r.x=V.bp()}}
X.aB.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aB))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.C(this.b)?"Alt+":""
return u+(H.C(this.c)?"Shift+":"")}}
X.bE.prototype={}
X.hA.prototype={
c0:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gaU(),r=new X.bE(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cG:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.c0(a,b,!0))
return!0},
bb:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.f0()
if(typeof t!=="number")return t.bT()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.c0(a,b,!0))
return!0},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.c0(a,b,!1))
return!0},
jS:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaU()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.cA(new V.X(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0}}
X.cA.prototype={}
X.hN.prototype={}
X.ec.prototype={}
X.it.prototype={
aZ:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.a9],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bp()
s=q.a.gaU()
r=new X.ec(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jP:function(a){var u
H.k(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.B(this.aZ(a,!0))
return!0},
jN:function(a){var u
H.k(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.B(this.aZ(a,!0))
return!0},
jO:function(a){var u
H.k(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.B(this.aZ(a,!1))
return!0}}
X.eh.prototype={
gaU:function(){var u=this.a,t=C.m.gdS(u).c
t.toString
u=C.m.gdS(u).d
u.toString
return V.cG(0,0,t,u)},
df:function(a){var u=a.keyCode,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dK(u,new X.aB(t,a.altKey,a.shiftKey))},
aS:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.aB(t,a.altKey,a.shiftKey)},
cd:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.aB(t,a.altKey,a.shiftKey)},
aK:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.F()
u=t.top
if(typeof r!=="number")return r.F()
return new V.a9(s-q,r-u)},
b_:function(a){return new V.X(a.movementX,a.movementY)},
c7:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a9])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
q=C.h.a2(r.pageX)
C.h.a2(r.pageY)
p=o.left
C.h.a2(r.pageX)
C.a.h(n,new V.a9(q-p,C.h.a2(r.pageY)-o.top))}return n},
aH:function(a){var u=a.buttons,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dn(u,new X.aB(t,a.altKey,a.shiftKey))},
c3:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.F()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.F()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hx:function(a){this.f=!0},
hh:function(a){this.f=!1},
hn:function(a){H.f(a,"$iag")
if(H.C(this.f)&&this.c3(a))a.preventDefault()},
hB:function(a){var u
H.f(a,"$ib4")
if(!H.C(this.f))return
u=this.df(a)
this.b.jQ(u)},
hz:function(a){var u
H.f(a,"$ib4")
if(!H.C(this.f))return
u=this.df(a)
this.b.jM(u)},
hF:function(a){var u,t,s,r,q=this
H.f(a,"$iag")
u=q.a
u.focus()
q.f=!0
q.aS(a)
if(H.C(q.x)){t=q.aH(a)
s=q.b_(a)
if(q.d.cG(t,s))a.preventDefault()
return}if(H.C(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aH(a)
r=q.aK(a)
if(q.c.cG(t,r))a.preventDefault()},
hJ:function(a){var u,t,s,r=this
H.f(a,"$iag")
r.aS(a)
u=r.aH(a)
if(H.C(r.x)){t=r.b_(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aK(a)
if(r.c.bb(u,s))a.preventDefault()},
hr:function(a){var u,t,s,r=this
H.f(a,"$iag")
if(!r.c3(a)){r.aS(a)
u=r.aH(a)
if(H.C(r.x)){t=r.b_(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aK(a)
if(r.c.bb(u,s))a.preventDefault()}},
hH:function(a){var u,t,s,r=this
H.f(a,"$iag")
r.aS(a)
u=r.aH(a)
if(H.C(r.x)){t=r.b_(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aK(a)
if(r.c.ba(u,s))a.preventDefault()},
hp:function(a){var u,t,s,r=this
H.f(a,"$iag")
if(!r.c3(a)){r.aS(a)
u=r.aH(a)
if(H.C(r.x)){t=r.b_(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aK(a)
if(r.c.ba(u,s))a.preventDefault()}},
hL:function(a){var u,t,s=this
H.f(a,"$ibe")
s.aS(a)
u=new V.X((a&&C.D).gjl(a),C.D.gjm(a)).w(0,180)
if(H.C(s.x)){if(s.d.jR(u))a.preventDefault()
return}if(H.C(s.r))return
t=s.aK(a)
if(s.c.jS(u,t))a.preventDefault()},
hN:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aH(s.y)
t=s.aK(s.y)
s.d.hD(u,t,r)}},
i2:function(a){var u,t=this
H.f(a,"$iaW")
t.a.focus()
t.f=!0
t.cd(a)
u=t.c7(a)
if(t.e.jP(u))a.preventDefault()},
hZ:function(a){var u
H.f(a,"$iaW")
this.cd(a)
u=this.c7(a)
if(this.e.jN(u))a.preventDefault()},
i0:function(a){var u
H.f(a,"$iaW")
this.cd(a)
u=this.c7(a)
if(this.e.jO(u))a.preventDefault()},
sfL:function(a){this.z=H.k(a,"$ib",[[P.cK,P.T]],"$ab")}}
D.du.prototype={$ia5:1,$ib8:1}
D.a5.prototype={$ib8:1}
D.dL.prototype={
gn:function(){var u=this.Q
return u==null?this.Q=D.L():u},
aj:function(a){var u=this.Q
if(u!=null)u.B(a)},
dt:function(a){var u
H.f(a,"$iA")
u=this.ch
if(u!=null)u.B(a)},
hC:function(){return this.dt(null)},
hP:function(a){var u,t,s
H.k(a,"$ii",[D.a5],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.G)(a),++t){s=a[t]
if(s==null||this.fC(s))return!1}return!0},
hb:function(a,b){var u,t,s,r,q,p,o,n=D.a5
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gds(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=H.f(b[q],"$ia5")
if(p instanceof D.bG)C.a.h(this.f,p)
o=p.r
if(o==null){o=new D.by()
o.sad(null)
o.saR(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sad(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bA([n])
n.b=!0
this.aj(n)},
hT:function(a,b){var u,t,s,r=D.a5
H.k(b,"$ii",[r],"$ai")
for(u=b.gW(b),t=this.gds();u.C();){s=u.gM(u)
C.a.G(this.e,s)
s.gn().G(0,t)}r=new D.bB([r])
r.b=!0
this.aj(r)},
fC:function(a){var u=C.a.as(this.f,a)
return u},
sfb:function(a){this.e=H.k(a,"$ib",[D.du],"$ab")},
sfe:function(a){this.f=H.k(a,"$ib",[D.bG],"$ab")},
sff:function(a){this.r=H.k(a,"$ib",[D.e2],"$ab")},
sfg:function(a){this.x=H.k(a,"$ib",[D.e7],"$ab")},
sfh:function(a){this.y=H.k(a,"$ib",[D.e8],"$ab")},
sfi:function(a){this.z=H.k(a,"$ib",[D.e9],"$ab")},
$ai:function(){return[D.a5]},
$aY:function(){return[D.a5]}}
D.bG.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.L():u},
aj:function(a){var u
H.f(a,"$iA")
u=this.r
if(u!=null)u.B(a)},
fd:function(){return this.aj(null)},
$ia5:1,
$ib8:1}
D.e2.prototype={$ia5:1,$ib8:1}
D.e7.prototype={$ia5:1,$ib8:1}
D.e8.prototype={$ia5:1,$ib8:1}
D.e9.prototype={$ia5:1,$ib8:1}
V.a1.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.ae.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.fS.prototype={}
V.c3.prototype={
a7:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.q])
return t},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.c3))return!1
u=b.a
t=$.E()
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
if(typeof u!=="number")return u.F()
if(typeof r!=="number")return H.w(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.q],o=V.cf(H.d([q.a,q.d,q.r],p),3,0),n=V.cf(H.d([q.b,q.e,q.x],p),3,0),m=V.cf(H.d([q.c,q.f,q.y],p),3,0)
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
V.af.prototype={
a7:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.q])
return t},
es:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
if(typeof b0!=="number")return b0.m()
u=e.z
t=e.cx
if(typeof u!=="number")return u.m()
s=b0*b1-u*t
r=e.db
q=e.Q
if(typeof q!=="number")return q.m()
p=b0*r-q*t
o=e.dx
n=e.ch
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a0*j-a3*k+a6*l+a7*m-a8*p+a9*s
if(Math.abs(i-0)<$.E().a)return V.bD()
h=1/i
g=-a
f=-t
return V.b7((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.w(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.w(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.w(m)
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
if(typeof c!=="number")return c.m()
b=a5.z
if(typeof b!=="number")return b.m()
a=a5.Q
if(typeof a!=="number")return a.m()
a0=a5.ch
a1=a5.cx
a2=a5.cy
a3=a5.db
a4=a5.dx
return V.b7(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
eS:function(a){var u,t,s=this,r=C.h.m(s.a,a.gdW(a)),q=C.h.m(s.b,a.gdX(a)),p=C.h.m(s.c,a.gdY()),o=C.h.m(s.e,a.gdW(a)),n=C.h.m(s.f,a.gdX(a)),m=C.h.m(s.r,a.gdY()),l=s.y,k=a.gdW(a)
if(typeof l!=="number")return l.m()
k=C.h.m(l,k)
l=s.z
u=a.gdX(a)
if(typeof l!=="number")return l.m()
u=C.h.m(l,u)
l=s.Q
t=a.gdY()
if(typeof l!=="number")return l.m()
return new V.S(r+q+p,o+n+m,k+u+C.h.m(l,t))},
aX:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.w(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.a6(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.E()
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
if(typeof u!=="number")return u.F()
if(typeof r!=="number")return H.w(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.R()},
I:function(a){var u,t,s,r,q,p=this,o=[P.q],n=V.cf(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cf(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cf(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cf(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
R:function(){return this.I("")}}
V.a9.prototype={
F:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.a6.prototype={
D:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.w(t)
return new V.a6(this.a+b.a,this.b+b.b,u+t)},
F:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.w(t)
return new V.a6(this.a-b.a,this.b-b.b,u-t)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.E()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.F()
if(typeof r!=="number")return H.w(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.ba.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ba))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.bK.prototype={
gaC:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bK))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.X.prototype={
b7:function(a){return Math.sqrt(this.H(this))},
H:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.w(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.w(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.X(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.E().a){u=$.lR
return u==null?$.lR=new V.X(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.X(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.E()
s.toString
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.w(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.S.prototype={
b7:function(a){return Math.sqrt(this.H(this))},
H:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.w(t)
return this.a*a.a+this.b*a.b+u*t},
cD:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.F()
if(typeof s!=="number")return H.w(s)
return new V.S(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
b3:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.w(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.S(q*p-u*t,u*s-r*p,r*t-q*s)},
D:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.D()
if(typeof r!=="number")return H.w(r)
return new V.S(this.a+u,this.b+t,s+r)},
T:function(a){var u=this.c
if(typeof u!=="number")return u.T()
return new V.S(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.S(this.a*b,this.b*b,u*b)},
w:function(a,b){var u
if(Math.abs(b-0)<$.E().a)return V.cY()
u=this.c
if(typeof u!=="number")return u.w()
return new V.S(this.a/b,this.b/b,u/b)},
eu:function(){var u,t=$.E(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.w(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.E()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.F()
if(typeof r!=="number")return H.w(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.bN.prototype={
b7:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bN))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
U.fA.prototype={
bX:function(a){var u=V.ks(a,this.c,this.b)
return u},
gn:function(){var u=this.y
return u==null?this.y=D.L():u},
O:function(a){var u=this.y
if(u!=null)u.B(a)},
seY:function(a,b){},
sev:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.E().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bX(u)}s=new D.v("maximumLocation",s,t.b,[P.q])
s.b=!0
t.O(s)}},
sex:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.E().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bX(u)}s=new D.v("minimumLocation",s,t.c,[P.q])
s.b=!0
t.O(s)}},
saa:function(a,b){var u,t=this
b=t.bX(b)
u=t.d
if(!(Math.abs(u-b)<$.E().a)){t.d=b
u=new D.v("location",u,b,[P.q])
u.b=!0
t.O(u)}},
sew:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.E().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.v("maximumVelocity",r,a,[P.q])
r.b=!0
s.O(r)}},
sa3:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.E().a)){u.f=a
t=new D.v("velocity",t,a,[P.q])
t.b=!0
u.O(t)}},
sdU:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.E().a)){this.x=a
u=new D.v("dampening",u,a,[P.q])
u.b=!0
this.O(u)}},
ab:function(a,b){var u,t,s,r=this,q=r.f,p=$.E().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.saa(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.E().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sa3(u)}}}
U.dq.prototype={
gn:function(){var u=this.b
return u==null?this.b=D.L():u},
aE:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dq))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.cu.prototype={
gn:function(){var u=this.e
return u==null?this.e=D.L():u},
O:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.B(a)},
ax:function(){return this.O(null)},
fk:function(a,b){var u,t,s,r,q,p,o,n=U.ah
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gbl(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.gn()
o.toString
H.n(t,s)
if(o.a==null)o.sad(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bA([n])
n.b=!0
this.O(n)},
hR:function(a,b){var u,t,s=U.ah
H.k(b,"$ii",[s],"$ai")
for(u=b.gW(b),t=this.gbl();u.C();)u.gM(u).gn().G(0,t)
s=new D.bB([s])
s.b=!0
this.O(s)},
aE:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a_()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.aq(r,r.length,[H.y(r,0)]),u=null;r.C();){q=r.d
if(q!=null){t=q.aE(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.bD():u
r=s.e
if(r!=null)r.af(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cu))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.O(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ah]},
$aY:function(){return[U.ah]},
$iah:1}
U.ah.prototype={}
U.e_.prototype={
gn:function(){var u=this.y
return u==null?this.y=D.L():u},
O:function(a){var u=this.y
if(u!=null)u.B(a)},
seZ:function(a){var u
a=V.ks(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.E().a)){this.a=a
u=new D.v("yaw",u,a,[P.q])
u.b=!0
this.O(u)}},
seH:function(a,b){var u
b=V.ks(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.E().a)){this.b=b
u=new D.v("pitch",u,b,[P.q])
u.b=!0
this.O(u)}},
seM:function(a){var u
a=V.ks(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.E().a)){this.c=a
u=new D.v("roll",u,a,[P.q])
u.b=!0
this.O(u)}},
aE:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.seZ(s.a+s.d*b.y)
s.seH(0,s.b+s.e*b.y)
s.seM(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.b7(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).m(0,V.lu(s.b)).m(0,V.lt(s.a))
r=s.y
if(r!=null)r.af(0)}return s.x},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.e_))return!1
u=r.a
t=b.a
s=$.E().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+"], ["+V.N(u.d,3,0)+", "+V.N(u.e,3,0)+", "+V.N(u.f,3,0)+"]"}}
U.ei.prototype={
gn:function(){var u=this.fx
return u==null?this.fx=D.L():u},
O:function(a){var u
H.f(a,"$iA")
u=this.fx
if(u!=null)u.B(a)},
ax:function(){return this.O(null)},
cg:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.L():t
u.h(0,s.gh2())
u=s.a.c
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.gh4())
u=s.a.c
t=u.c
u=t==null?u.c=D.L():t
u.h(0,s.gh6())
u=s.a.d
t=u.f
u=t==null?u.f=D.L():t
u.h(0,s.gfZ())
u=s.a.d
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.gh0())
u=s.a.e
t=u.b
u=t==null?u.b=D.L():t
u.h(0,s.giE())
u=s.a.e
t=u.d
u=t==null?u.d=D.L():t
u.h(0,s.giC())
u=s.a.e
t=u.c
u=t==null?u.c=D.L():t
u.h(0,s.giA())
return!0},
aw:function(a){var u=a.a,t=a.b
if(H.C(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.C(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.X(u,t)},
h3:function(a){var u=this
a=H.h(H.f(a,"$iA"),"$ibE")
if(!J.O(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h5:function(a){var u,t,s,r,q,p,o,n=this
a=H.h(H.f(a,"$iA"),"$ibE")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.F(0,a.y)
u=new V.X(u.a,u.b)
u=u.H(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.F(0,a.y)
u=n.aw(new V.X(t.a,t.b).m(0,2).w(0,u.gaC()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sa3(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sa3(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.aw(new V.X(s.a,s.b).m(0,2).w(0,u.gaC()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.saa(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.saa(0,-p*q+s)
n.b.sa3(0)
n.c.sa3(0)
t=t.F(0,a.z)
n.dx=n.aw(new V.X(t.a,t.b).m(0,2).w(0,u.gaC()))}n.ax()},
h7:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.H(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sa3(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sa3(-t*10*u)
r.ax()}},
h_:function(a){var u=this
if(H.h(H.f(a,"$iA"),"$idN").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
h1:function(a){var u,t,s,r,q,p,o,n=this
a=H.h(H.f(a,"$iA"),"$ibE")
if(!J.O(n.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=n.aw(new V.X(s.a,s.b).m(0,2).w(0,u.gaC()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.saa(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.saa(0,-p*q+s)
n.b.sa3(0)
n.c.sa3(0)
t=t.F(0,a.z)
n.dx=n.aw(new V.X(t.a,t.b).m(0,2).w(0,u.gaC()))
n.ax()},
iF:function(a){var u=this
H.f(a,"$iA")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
iD:function(a){var u,t,s,r,q,p,o,n=this
a=H.h(H.f(a,"$iA"),"$iec")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.F(0,a.y)
u=new V.X(u.a,u.b)
u=u.H(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.F(0,a.y)
u=n.aw(new V.X(t.a,t.b).m(0,2).w(0,u.gaC()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sa3(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sa3(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.aw(new V.X(s.a,s.b).m(0,2).w(0,u.gaC()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.saa(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.saa(0,-p*q+s)
n.b.sa3(0)
n.c.sa3(0)
t=t.F(0,a.z)
n.dx=n.aw(new V.X(t.a,t.b).m(0,2).w(0,u.gaC()))}n.ax()},
iB:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.H(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sa3(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sa3(-t*10*u)
r.ax()}},
aE:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.a_()
if(s<r){t.dy=r
u=b.y
t.c.ab(0,u)
t.b.ab(0,u)
t.fr=V.lt(t.b.d).m(0,V.lu(t.c.d))}return t.fr},
$iah:1}
U.ej.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.L():u},
O:function(a){var u=this.r
if(u!=null)u.B(a)},
cg:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.L():t
t=r.gh8()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.L():s).h(0,t)
return!0},
h9:function(a){var u,t,s,r,q=this
H.f(a,"$iA")
if(!J.O(q.b,q.a.b.c))return
H.h(a,"$icA")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.v("zoom",u,r,[P.q])
u.b=!0
q.O(u)}},
aE:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.b7(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iah:1}
M.dp.prototype={
gn:function(){var u=this.f
return u==null?this.f=D.L():u},
V:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.B(a)},
aG:function(){return this.V(null)},
hV:function(a,b){var u,t,s,r,q,p,o,n=M.at
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gY(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.gn()
o.toString
H.n(t,s)
if(o.a==null)o.sad(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bA([n])
n.b=!0
this.V(n)},
hX:function(a,b){var u,t,s=M.at
H.k(b,"$ii",[s],"$ai")
for(u=b.gW(b),t=this.gY();u.C();)u.gM(u).gn().G(0,t)
s=new D.bB([s])
s.b=!0
this.V(s)},
a5:function(a){var u,t,s=this
if(s.e)return
s.e=!0
for(u=s.a,u=new J.aq(u,u.length,[H.y(u,0)]);u.C();){t=u.d
if(t!=null)t.a5(a)}s.e=!1},
$ai:function(){return[M.at]},
$aY:function(){return[M.at]},
$iat:1}
M.dr.prototype={
gn:function(){var u=this.f
return u==null?this.f=D.L():u},
V:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.B(a)},
aG:function(){return this.V(null)},
saM:function(a,b){var u,t,s=this
if(b==null)b=X.kB(!0,null)
u=s.b
if(u!==b){if(u!=null)u.gn().G(0,s.gY())
t=s.b
s.b=b
b.gn().h(0,s.gY())
u=new D.v("target",t,s.b,[X.cM])
u.b=!0
s.V(u)}},
sap:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gn().G(0,t.gY())
u=t.c
t.c=a
if(a!=null)a.gn().h(0,t.gY())
s=new D.v("technique",u,t.c,[O.br])
s.b=!0
t.V(s)}},
a5:function(a){var u,t,s=this
a.cJ(s.c)
s.b.Z(a)
u=s.a
u.toString
a.cy.bN(V.bD())
t=V.bD()
u.a
a.db.bN(t)
u=s.c
if(u!=null)u.ab(0,a)
s.d.ab(0,a)
s.d.a5(a)
s.a.toString
a.cy.bc()
a.db.bc()
s.b.aD(a)
a.cH()},
$iat:1}
M.dy.prototype={
V:function(a){var u
H.f(a,"$iA")
u=this.x
if(u!=null)u.B(a)},
aG:function(){return this.V(null)},
hj:function(a,b){var u,t,s,r,q,p,o,n=E.ak
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gY(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.by()
o.sad(null)
o.saR(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sad(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bA([n])
n.b=!0
this.V(n)},
hl:function(a,b){var u,t,s=E.ak
H.k(b,"$ii",[s],"$ai")
for(u=b.gW(b),t=this.gY();u.C();)u.gM(u).gn().G(0,t)
s=new D.bB([s])
s.b=!0
this.V(s)},
sco:function(a){var u,t,s=this
if(a==null)a=X.ly()
u=s.a
if(u!==a){if(u!=null)u.gn().G(0,s.gY())
t=s.a
s.a=a
a.gn().h(0,s.gY())
u=new D.v("camera",t,s.a,[X.bV])
u.b=!0
s.V(u)}},
saM:function(a,b){var u,t=this,s=t.b
if(s!==b){if(s!=null)s.gn().G(0,t.gY())
u=t.b
t.b=b
b.gn().h(0,t.gY())
s=new D.v("target",u,t.b,[X.cM])
s.b=!0
t.V(s)}},
sap:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gn().G(0,t.gY())
u=t.c
t.c=a
if(a!=null)a.gn().h(0,t.gY())
s=new D.v("technique",u,t.c,[O.br])
s.b=!0
t.V(s)}},
gn:function(){var u=this.x
return u==null?this.x=D.L():u},
a5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
a.cJ(c.c)
c.b.Z(a)
u=c.a
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.b7(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bN(m)
t=$.lz
if(t==null){t=V.lB()
s=$.lT
if(s==null)s=$.lT=new V.S(0,1,0)
r=$.lS
if(r==null)r=$.lS=new V.S(0,0,-1)
l=r.w(0,Math.sqrt(r.H(r)))
s=s.b3(l)
k=s.w(0,Math.sqrt(s.H(s)))
j=l.b3(k)
i=new V.S(t.a,t.b,t.c)
h=k.T(0).H(i)
g=j.T(0).H(i)
f=l.T(0).H(i)
t=V.b7(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.lz=t
e=t}else e=t
t=u.b
if(t!=null){d=t.aE(0,a,u)
if(d!=null)e=d.m(0,e)}a.db.bN(e)
u=c.c
if(u!=null)u.ab(0,a)
for(u=c.d.a,u=new J.aq(u,u.length,[H.y(u,0)]);u.C();)u.d.ab(0,a)
for(u=c.d.a,u=new J.aq(u,u.length,[H.y(u,0)]);u.C();)u.d.a5(a)
c.a.toString
a.cy.bc()
a.db.bc()
c.b.aD(a)
a.cH()},
sfA:function(a,b){this.d=H.k(b,"$iY",[E.ak],"$aY")},
$iat:1}
M.dC.prototype={
gn:function(){var u=this.a
return u==null?this.a=D.L():u},
V:function(a){var u
H.f(a,"$iA")
u=this.a
if(u!=null)u.B(a)},
aG:function(){return this.V(null)},
a5:function(a){var u=this.d
if(u!=null)u.a5(a)
u=this.f
if(u!=null)u.a5(a)},
$iat:1}
M.at.prototype={}
A.dk.prototype={}
A.fl.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jn:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
bt:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dt.prototype={}
A.dD.prototype={
ae:function(a,b,c){if(c==null||!c.d)C.c.X(b.a,b.d,1)
else{a.cU(c)
C.c.X(b.a,b.d,0)}}}
A.h2.prototype={
aP:function(a,b,c,d){var u,t,s,r,q=[P.q]
H.k(c,"$ib",q,"$ab")
H.k(d,"$ib",q,"$ab")
u=c.length
if(0>=u)return H.e(c,0)
t=Math.abs(c[0]-0)<$.E().a
if(t){if(0>=d.length)return H.e(d,0)
s=d[0]
d=C.a.cW(d,1)
c=C.a.cW(c,1);--u}else s=0
q=a.a+="vec4 blur"+b+"()\n"
q+="{\n"
a.a=q
if(t)q=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.m(s)+";\n"
else q=a.a=q+"  vec4 color = vec4(0.0);\n"
q=a.a=q+"  vec2 offset;\n"
for(r=0;r<u;++r){if(r>=c.length)return H.e(c,r)
a.a+="  offset = blurScale * "+H.m(c[r])+";\n"
if(r>=d.length)return H.e(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.m(d[r])+";\n"
if(r>=d.length)return H.e(d,r)
q=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.m(d[r])+";\n"}q+="  return color; \n"
a.a=q
q+="}\n"
a.a=q
a.a=q+"\n"},
i:function(a){return this.b}}
A.dP.prototype={
f5:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.aj("")
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
d1.iO(u)
d1.iV(u)
d1.iP(u)
d1.j2(u)
d1.j3(u)
d1.iX(u)
d1.j7(u)
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
u=new P.aj("")
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
q.iS(u)
q.iN(u)
q.iQ(u)
q.iT(u)
q.j0(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iZ(u)
q.j_(u)}q.iW(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.d){m=u.a=m+"uniform float alpha;\n"
if(l!==C.j){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.i){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.d:m=u.a=m+"   return 1.0;\n"
break
case C.j:m=u.a=m+"   return alpha;\n"
break
case C.f:m+=c7
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
break
case C.i:m+=c7
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
k=H.d([],[P.j])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.E(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iR(u)
q.iY(u)
q.j1(u)
q.j4(u)
q.j5(u)
q.j6(u)
q.iU(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
p=p?u.a=m+"   vec3 norm = normal();\n":m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.j])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(q.c!==C.d)u.a+="   setDiffuseColor();\n"
if(q.d!==C.d)u.a+="   setInvDiffuseColor();\n"
if(q.e!==C.d)u.a+="   setSpecularColor();\n"
if(q.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(q.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(q.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(q.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(q.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(q.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(q.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(q.a!==C.d)C.a.h(j,"emission()")
if(q.r!==C.d)C.a.h(j,"reflect(refl)")
if(q.x!==C.d)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.E(j," + ")+", alpha);"
q=u.a
q=u.a=(n?u.a=q+("   gl_FragColor = colorMat*"+i+"\n"):u.a=q+("   gl_FragColor = "+i+"\n"))+"}\n"
a6.bJ(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.h(a6.y.p(0,"invViewMat"),"$iaa")
if(t)a6.dy=H.h(a6.y.p(0,"objMat"),"$iaa")
if(r)a6.fr=H.h(a6.y.p(0,"viewObjMat"),"$iaa")
a6.fy=H.h(a6.y.p(0,"projViewObjMat"),"$iaa")
if(d1.x2)a6.k1=H.h(a6.y.p(0,"txt2DMat"),"$ic8")
if(d1.y1)a6.k2=H.h(a6.y.p(0,"txtCubeMat"),"$iaa")
if(d1.y2)a6.k3=H.h(a6.y.p(0,"colorMat"),"$iaa")
a6.sft(H.d([],[A.aa]))
t=d1.aA
if(t>0){a6.k4=H.f(a6.y.p(0,"bendMatCount"),"$iJ")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.u(a7+q+a8));(s&&C.a).h(s,H.h(g,"$iaa"))}}t=d1.a
if(t!==C.d){a6.r2=H.h(a6.y.p(0,"emissionClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.f:a6.rx=H.h(a6.y.p(0,a9),"$ia7")
a6.x1=H.h(a6.y.p(0,b0),"$iJ")
break
case C.i:a6.ry=H.h(a6.y.p(0,a9),"$ias")
a6.x1=H.h(a6.y.p(0,b0),"$iJ")
break}}t=d1.b
if(t!==C.d){a6.x2=H.h(a6.y.p(0,"ambientClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.f:a6.y1=H.h(a6.y.p(0,b1),"$ia7")
a6.aA=H.h(a6.y.p(0,b2),"$iJ")
break
case C.i:a6.y2=H.h(a6.y.p(0,b1),"$ias")
a6.aA=H.h(a6.y.p(0,b2),"$iJ")
break}}t=d1.c
if(t!==C.d){a6.at=H.h(a6.y.p(0,"diffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.f:a6.bu=H.h(a6.y.p(0,b3),"$ia7")
a6.bv=H.h(a6.y.p(0,b4),"$iJ")
break
case C.i:a6.e_=H.h(a6.y.p(0,b3),"$ias")
a6.bv=H.h(a6.y.p(0,b4),"$iJ")
break}}t=d1.d
if(t!==C.d){a6.bw=H.h(a6.y.p(0,"invDiffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.f:a6.e0=H.h(a6.y.p(0,b5),"$ia7")
a6.bx=H.h(a6.y.p(0,b6),"$iJ")
break
case C.i:a6.e1=H.h(a6.y.p(0,b5),"$ias")
a6.bx=H.h(a6.y.p(0,b6),"$iJ")
break}}t=d1.e
if(t!==C.d){a6.bA=H.h(a6.y.p(0,"shininess"),"$iW")
a6.by=H.h(a6.y.p(0,"specularClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.f:a6.e2=H.h(a6.y.p(0,b7),"$ia7")
a6.bz=H.h(a6.y.p(0,b8),"$iJ")
break
case C.i:a6.e3=H.h(a6.y.p(0,b7),"$ias")
a6.bz=H.h(a6.y.p(0,b8),"$iJ")
break}}switch(d1.f){case C.d:break
case C.j:break
case C.f:a6.e4=H.h(a6.y.p(0,"bumpTxt"),"$ia7")
a6.bB=H.h(a6.y.p(0,b9),"$iJ")
break
case C.i:a6.e5=H.h(a6.y.p(0,"bumpTxt"),"$ias")
a6.bB=H.h(a6.y.p(0,b9),"$iJ")
break}if(d1.dy){a6.e6=H.h(a6.y.p(0,"envSampler"),"$ias")
a6.e7=H.h(a6.y.p(0,"nullEnvTxt"),"$iJ")
t=d1.r
if(t!==C.d){a6.bC=H.h(a6.y.p(0,"reflectClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.f:a6.e8=H.h(a6.y.p(0,c0),"$ia7")
a6.bD=H.h(a6.y.p(0,c1),"$iJ")
break
case C.i:a6.e9=H.h(a6.y.p(0,c0),"$ias")
a6.bD=H.h(a6.y.p(0,c1),"$iJ")
break}}t=d1.x
if(t!==C.d){a6.bE=H.h(a6.y.p(0,"refraction"),"$iW")
a6.bF=H.h(a6.y.p(0,"refractClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.f:a6.ea=H.h(a6.y.p(0,c2),"$ia7")
a6.bG=H.h(a6.y.p(0,c3),"$iJ")
break
case C.i:a6.eb=H.h(a6.y.p(0,c2),"$ias")
a6.bG=H.h(a6.y.p(0,c3),"$iJ")
break}}}t=d1.y
if(t!==C.d){a6.bH=H.h(a6.y.p(0,"alpha"),"$iW")
switch(t){case C.d:break
case C.j:break
case C.f:a6.ec=H.h(a6.y.p(0,c4),"$ia7")
a6.bI=H.h(a6.y.p(0,c5),"$iJ")
break
case C.i:a6.ed=H.h(a6.y.p(0,c4),"$ias")
a6.bI=H.h(a6.y.p(0,c5),"$iJ")
break}}a6.sfI(H.d([],[A.cQ]))
a6.si3(H.d([],[A.cR]))
a6.sit(H.d([],[A.cS]))
a6.siH(H.d([],[A.cT]))
a6.siI(H.d([],[A.cU]))
a6.siJ(H.d([],[A.cV]))
if(d1.k2){t=d1.z
if(t>0){a6.ee=H.f(a6.y.p(0,"dirLightCount"),"$iJ")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.u(a7+r+a8))
H.h(g,"$iP")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.u(a7+r+a8))
H.h(f,"$iP")
s=a6.cs;(s&&C.a).h(s,new A.cQ(g,f))}}t=d1.Q
if(t>0){a6.ef=H.f(a6.y.p(0,"pntLightCount"),"$iJ")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.u(a7+r+a8))
H.h(g,"$iP")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.u(a7+r+a8))
H.h(f,"$iP")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.u(a7+r+a8))
H.h(e,"$iP")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.u(a7+r+a8))
H.h(d,"$iW")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.u(a7+r+a8))
H.h(c,"$iW")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.u(a7+r+a8))
H.h(b,"$iW")
s=a6.ct;(s&&C.a).h(s,new A.cR(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.eg=H.f(a6.y.p(0,"spotLightCount"),"$iJ")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.u(a7+r+a8))
H.h(g,"$iP")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.u(a7+r+a8))
H.h(f,"$iP")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.u(a7+r+a8))
H.h(e,"$iP")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.u(a7+r+a8))
H.h(d,"$iP")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.u(a7+r+a8))
H.h(c,"$iW")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.u(a7+r+a8))
H.h(b,"$iW")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.u(a7+r+a8))
H.h(a,"$iW")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.u(a7+r+a8))
H.h(a0,"$iW")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.u(a7+r+a8))
H.h(a1,"$iW")
s=a6.cu;(s&&C.a).h(s,new A.cS(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.eh=H.f(a6.y.p(0,"txtDirLightCount"),"$iJ")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.u(a7+r+a8))
H.h(g,"$iP")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.u(a7+r+a8))
H.h(f,"$iP")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.u(a7+r+a8))
H.h(e,"$iP")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.u(a7+r+a8))
H.h(d,"$iP")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.u(a7+r+a8))
H.h(c,"$iP")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.u(a7+r+a8))
H.h(b,"$iJ")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.u(a7+r+a8))
H.h(a,"$ia7")
s=a6.cv;(s&&C.a).h(s,new A.cT(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.ei=H.f(a6.y.p(0,"txtPntLightCount"),"$iJ")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.u(a7+r+a8))
H.h(g,"$iP")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.u(a7+r+a8))
H.h(f,"$iP")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.u(a7+r+a8))
H.h(e,"$ic8")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.u(a7+r+a8))
H.h(d,"$iP")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.u(a7+r+a8))
H.h(c,"$iJ")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.u(a7+r+a8))
H.h(b,"$iW")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.u(a7+r+a8))
H.h(a,"$iW")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.u(a7+r+a8))
H.h(a0,"$iW")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.u(a7+r+a8))
H.h(a1,"$ias")
s=a6.cw;(s&&C.a).h(s,new A.cU(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.ej=H.f(a6.y.p(0,"txtSpotLightCount"),"$iJ")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.u(a7+r+a8))
H.h(g,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.u(a7+r+a8))
H.h(f,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.u(a7+r+a8))
H.h(e,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.u(a7+r+a8))
H.h(d,"$iP")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.u(a7+r+a8))
H.h(c,"$iP")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.u(a7+r+a8))
H.h(b,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.u(a7+r+a8))
H.h(a,"$iP")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.u(a7+r+a8))
H.h(a0,"$iW")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.u(a7+r+a8))
H.h(a1,"$iW")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.u(a7+r+a8))
H.h(a2,"$iW")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.u(a7+r+a8))
H.h(a3,"$iW")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.u(a7+r+a8))
H.h(a4,"$iW")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.u(a7+r+a8))
H.h(a5,"$ia7")
s=a6.cz;(s&&C.a).h(s,new A.cV(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ae:function(a,b,c){if(c==null||!c.d)C.c.X(b.a,b.d,1)
else{a.cU(c)
C.c.X(b.a,b.d,0)}},
ak:function(a,b,c){C.c.X(b.a,b.d,1)},
sft:function(a){this.r1=H.k(a,"$ib",[A.aa],"$ab")},
sfI:function(a){this.cs=H.k(a,"$ib",[A.cQ],"$ab")},
si3:function(a){this.ct=H.k(a,"$ib",[A.cR],"$ab")},
sit:function(a){this.cu=H.k(a,"$ib",[A.cS],"$ab")},
siH:function(a){this.cv=H.k(a,"$ib",[A.cT],"$ab")},
siI:function(a){this.cw=H.k(a,"$ib",[A.cU],"$ab")},
siJ:function(a){this.cz=H.k(a,"$ib",[A.cV],"$ab")}}
A.hq.prototype={
iO:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.aA+"];\n"
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
iV:function(a){var u
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
iP:function(a){var u
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
j2:function(a){var u,t
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
j3:function(a){var u,t
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
iX:function(a){var u
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
j7:function(a){var u
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
aI:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.e(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.aF(c,1))+"Txt;\n")
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iS:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aI(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   return emissionClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
iN:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aI(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   return ambientClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
iQ:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aI(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   diffuseColor = diffuseClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
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
iT:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aI(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
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
j0:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aI(a,s,"specular")
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
case C.j:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
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
iW:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.d:break
case C.j:break
case C.f:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break
case C.i:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break}u+="vec3 normal()\n"
a.a=u
u=a.a=u+"{\n"
switch(t){case C.d:u=a.a=u+r
break
case C.j:u=a.a=u+r
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
case C.i:u+=q
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
iZ:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aI(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   vec3 scalar = reflectClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
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
j_:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aI(a,s,"refract")
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
case C.j:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
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
iR:function(a){var u,t=this.z
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
iY:function(a){var u,t=this.Q
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
j1:function(a){var u,t=this.ch
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
j4:function(a){var u,t,s=this.cx
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
j5:function(a){var u,t,s=this.cy
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
j6:function(a){var u,t,s=this.db
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
iU:function(a){var u
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
i:function(a){return this.at}}
A.cQ.prototype={}
A.cT.prototype={}
A.cR.prototype={}
A.cU.prototype={}
A.cS.prototype={}
A.cV.prototype={}
A.cI.prototype={
bi:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bJ:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dg(b,35633)
r.f=r.dg(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.C(H.mg(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.u("Failed to link shader: "+H.m(s)))}r.io()
r.iq()},
Z:function(a){a.a.useProgram(this.r)
this.x.jn()},
dg:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.C(H.mg(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.u("Error compiling shader '"+H.m(s)+"': "+H.m(u)))}return s},
io:function(){var u,t,s,r=this,q=H.d([],[A.dk]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dk(p,t.name,s))}r.x=new A.fl(q)},
iq:function(){var u,t,s,r=this,q=H.d([],[A.ed]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.jk(t.type,t.size,t.name,s))}r.y=new A.iF(q)},
aQ:function(a,b,c){var u=this.a
if(a===1)return new A.J(u,b,c)
else return A.kM(u,this.r,b,a,c)},
fD:function(a,b,c){var u=this.a
if(a===1)return new A.a7(u,b,c)
else return A.kM(u,this.r,b,a,c)},
fE:function(a,b,c){var u=this.a
if(a===1)return new A.as(u,b,c)
else return A.kM(u,this.r,b,a,c)},
bn:function(a,b){return new P.et(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
jk:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aQ(b,c,d)
case 5121:return u.aQ(b,c,d)
case 5122:return u.aQ(b,c,d)
case 5123:return u.aQ(b,c,d)
case 5124:return u.aQ(b,c,d)
case 5125:return u.aQ(b,c,d)
case 5126:return new A.W(u.a,c,d)
case 35664:return new A.av(u.a,c,d)
case 35665:return new A.P(u.a,c,d)
case 35666:return new A.cP(u.a,c,d)
case 35667:return new A.iC(u.a,c,d)
case 35668:return new A.iD(u.a,c,d)
case 35669:return new A.iE(u.a,c,d)
case 35674:return new A.iG(u.a,c,d)
case 35675:return new A.c8(u.a,c,d)
case 35676:return new A.aa(u.a,c,d)
case 35678:return u.fD(b,c,d)
case 35680:return u.fE(b,c,d)
case 35670:throw H.c(u.bn("BOOL",c))
case 35671:throw H.c(u.bn("BOOL_VEC2",c))
case 35672:throw H.c(u.bn("BOOL_VEC3",c))
case 35673:throw H.c(u.bn("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bY.prototype={
i:function(a){return this.b}}
A.bv.prototype={
i:function(a){return this.b}}
A.e6.prototype={
f9:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.bJ(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.nx(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.h(p.y.p(0,"txtCount"),"$iJ")
p.ch=H.h(p.y.p(0,"backClr"),"$icP")
p.siK(H.d([],[A.a7]))
p.sfB(H.d([],[A.aa]))
u=[A.av]
p.siu(H.d([],u))
p.siv(H.d([],u))
p.sfG(H.d([],u))
p.sfH(H.d([],u))
p.sfR(H.d([],[A.J]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.t(P.u(o+r+n));(u&&C.a).h(u,H.h(q,"$ia7"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.t(P.u(o+r+n));(u&&C.a).h(u,H.h(q,"$iaa"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.t(P.u(o+r+n));(u&&C.a).h(u,H.h(q,"$iav"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.t(P.u(o+r+n));(u&&C.a).h(u,H.h(q,"$iav"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.t(P.u(o+r+n));(u&&C.a).h(u,H.h(q,"$iav"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.t(P.u(o+r+n));(u&&C.a).h(u,H.h(q,"$iav"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.t(P.u(o+r+n));(u&&C.a).h(u,H.h(q,"$iJ"))}},
siK:function(a){this.cx=H.k(a,"$ib",[A.a7],"$ab")},
sfB:function(a){this.cy=H.k(a,"$ib",[A.aa],"$ab")},
siu:function(a){this.db=H.k(a,"$ib",[A.av],"$ab")},
siv:function(a){this.dx=H.k(a,"$ib",[A.av],"$ab")},
sfG:function(a){this.dy=H.k(a,"$ib",[A.av],"$ab")},
sfH:function(a){this.fr=H.k(a,"$ib",[A.av],"$ab")},
sfR:function(a){this.fx=H.k(a,"$ib",[A.J],"$ab")}}
A.ed.prototype={}
A.iF.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
R:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.G)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.J.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.iC.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.iD.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.iE.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
siL:function(a){H.k(a,"$ib",[P.o],"$ab")}}
A.W.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.av.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.P.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.cP.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.iG.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.c8.prototype={
ac:function(a){var u=new Float32Array(H.bO(H.k(a,"$ib",[P.q],"$ab")))
C.c.eU(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.aa.prototype={
ac:function(a){var u=new Float32Array(H.bO(H.k(a,"$ib",[P.q],"$ab")))
C.c.cP(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.a7.prototype={
cU:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.as.prototype={
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.jV.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cD(s.b,b).cD(s.d.cD(s.c,b),c)
a.saa(0,new V.a6(r.a,r.b,r.c))
a.seP(r.w(0,Math.sqrt(r.H(r))))
s=1-b
u=1-c
a.sdO(new V.ba(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
t.f.$3(a,b,c)},
$S:11}
F.kp.prototype={
$2:function(a,b){return 0},
$S:24}
F.kq.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.w(s)
u=a.f
t=new V.S(u.a,u.b,u.c)
s=t.w(0,Math.sqrt(t.H(t))).m(0,this.b+s)
a.saa(0,new V.a6(s.a,s.b,s.c))},
$S:11}
F.k7.prototype={
$2:function(a,b){return 0},
$S:24}
F.k8.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.saa(0,new V.a6(s,r,this.a.a.$2(b,c)))
u=new V.S(s,r,1)
a.seP(u.w(0,Math.sqrt(u.H(u))))
u=1-b
t=1-c
a.sdO(new V.ba(b*c,2+u*c,4+b*t,6+u*t))},
$S:11}
F.a8.prototype={
b4:function(){var u=this
if(!u.gb5()){C.a.G(u.a.a.d.b,u)
u.a.a.a6()}u.c9()
u.ca()
u.i8()},
ce:function(a){this.a=a
C.a.h(a.d.b,this)},
cf:function(a){this.b=a
C.a.h(a.d.c,this)},
im:function(a){this.c=a
C.a.h(a.d.d,this)},
c9:function(){var u=this.a
if(u!=null){C.a.G(u.d.b,this)
this.a=null}},
ca:function(){var u=this.b
if(u!=null){C.a.G(u.d.c,this)
this.b=null}},
i8:function(){var u=this.c
if(u!=null){C.a.G(u.d.d,this)
this.c=null}},
gb5:function(){return this.a==null||this.b==null||this.c==null},
fs:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cY()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.eu())return
return s.w(0,Math.sqrt(s.H(s)))},
fw:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.F(0,q)
r=new V.S(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.H(r)))
r=t.F(0,q)
r=new V.S(r.a,r.b,r.c)
r=s.b3(r.w(0,Math.sqrt(r.H(r))))
return r.w(0,Math.sqrt(r.H(r)))},
cn:function(){var u,t=this
if(t.d!=null)return!0
u=t.fs()
if(u==null){u=t.fw()
if(u==null)return!1}t.d=u
t.a.a.a6()
return!0},
fq:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cY()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.eu())return
return s.w(0,Math.sqrt(s.H(s)))},
fv:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.E().a){l=d.F(0,g)
l=new V.S(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.H(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.F(0,g)
k=l.c
if(typeof k!=="number")return k.m()
k=new V.a6(l.a*p,l.b*p,k*p).D(0,g).F(0,j)
k=new V.S(k.a,k.b,k.c)
q=k.w(0,Math.sqrt(k.H(k)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.H(l)))
l=o.b3(q)
l=l.w(0,Math.sqrt(l.H(l))).b3(o)
q=l.w(0,Math.sqrt(l.H(l)))}return q},
cl:function(){var u,t=this
if(t.e!=null)return!0
u=t.fq()
if(u==null){u=t.fv()
if(u==null)return!1}t.e=u
t.a.a.a6()
return!0},
gjg:function(a){var u=this
if(J.O(u.a,u.b))return!0
if(J.O(u.b,u.c))return!0
if(J.O(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t,s=this
if(s.gb5())return a+"disposed"
u=a+C.b.ao(J.ax(s.a.e),0)+", "+C.b.ao(J.ax(s.b.e),0)+", "+C.b.ao(J.ax(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.I("")}}
F.fV.prototype={}
F.i4.prototype={
b8:function(a,b,c){var u,t=b.a
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bm.prototype={
b4:function(){var u=this
if(!u.gb5()){C.a.G(u.a.a.c.b,u)
u.a.a.a6()}u.c9()
u.ca()},
ce:function(a){this.a=a
C.a.h(a.c.b,this)},
cf:function(a){this.b=a
C.a.h(a.c.c,this)},
c9:function(){var u=this.a
if(u!=null){C.a.G(u.c.b,this)
this.a=null}},
ca:function(){var u=this.b
if(u!=null){C.a.G(u.c.c,this)
this.b=null}},
gb5:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){if(this.gb5())return a+"disposed"
return a+C.b.ao(J.ax(this.a.e),0)+", "+C.b.ao(J.ax(this.b.e),0)},
R:function(){return this.I("")}}
F.hb.prototype={}
F.iA.prototype={
b8:function(a,b,c){var u,t=b.a
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
return t==u.e}else{t=b.a
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
return t==u.e}else return!1}}}
F.bH.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ao(J.ax(u.e),0)},
R:function(){return this.I("")}}
F.e1.prototype={
gn:function(){var u=this.e
return u==null?this.e=D.L():u},
cF:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){r=g[s]
h.a.h(0,r.ji())}h.a.v()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bH()
if(n.a==null)H.t(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.B(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.n5(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cr(l,k,i)}g=h.e
if(g!=null)g.af(0)},
ar:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ar()||!1
if(!t.a.ar())u=!1
s=t.e
if(s!=null)s.af(0)
return u},
jc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.e
if(c!=null)++c.d
for(u=d.a.c.length-1,c=a.b,t=a.a,s=t.length,r=a.c,q=c-1;u>=0;--u){p=d.a.c
if(u>=p.length)return H.e(p,u)
o=p[u]
p=o.y
n=C.h.b6(p.a*q)
p=p.b
if(typeof r!=="number")return r.F()
m=C.h.b6(p*(r-1))
n=n>=0?C.e.av(n,c):c+C.e.av(n,c)
l=(n+(m>=0?C.e.av(m,r):r+C.e.av(m,r))*c)*4
if(l<0||l>=s)return H.e(t,l)
p=t[l]/255
k=l+1
if(k>=s)return H.e(t,k)
k=t[k]/255
j=l+2
if(j>=s)return H.e(t,j)
j=t[j]/255
i=l+3
if(i>=s)return H.e(t,i)
i=t[i]/255
if(p<0)p=0
else if(p>1)p=1
if(k<0)k=0
else if(k>1)k=1
if(j<0)j=0
else if(j>1)j=1
if(!(i<0))if(i>1)i=1
h=(p+k+j)*b/3
p=o.f
k=o.r
j=k.a
i=k.b
k=k.c
if(typeof k!=="number")return k.m()
g=p.a
f=p.b
e=p.c
if(typeof e!=="number")return e.D()
k=new V.a6(g+j*h,f+i*h,e+k*h)
if(!J.O(p,k)){o.f=k
p=o.a
if(p!=null){p=p.e
if(p!=null)p.B(null)}}}c=d.e
if(c!=null)c.af(0)},
kb:function(a){var u,t,s,r,q=this.e
if(q!=null)++q.d
for(q=this.a,u=q.c.length-1,t=a.a;u>=0;--u){s=q.c
if(u>=s.length)return H.e(s,u)
r=s[u]
if((t&$.ap().a)===0)r.f=null
if((t&$.aY().a)===0)r.r=null
if((t&$.bi().a)===0)r.x=null
if((t&$.aK().a)===0)r.y=null
if((t&$.bj().a)===0)r.z=null
if((t&$.l8().a)===0)r.Q=null
if((t&$.bR().a)===0)r.ch=0
if((t&$.bh().a)===0)r.cx=null}q=this.e
if(q!=null)q.af(0)},
ka:function(a){var u,t,s,r=this.e
if(r!=null)++r.d
for(r=this.d,u=r.b.length-1;u>=0;--u){t=r.b
if(u>=t.length)return H.e(t,u)
s=t[u]
s.d=null}r=this.e
if(r!=null)r.af(0)},
jB:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.y(o,0)])
for(o=[F.ao];u.length!==0;){t=C.a.gjr(u)
C.a.eJ(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.b8(0,t,q)){C.a.h(s,q)
C.a.eJ(u,r)}}if(s.length>1)b.cF(s)}}p.a.v()
p.c.cL()
p.d.cL()
p.b.jU()
p.c.cM(new F.iA())
p.d.cM(new F.i4())
o=p.e
if(o!=null)o.af(0)},
bq:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.ap()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.aY().a)!==0)++s
if((t&$.bi().a)!==0)++s
if((t&$.aK().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.dg().a)!==0)++s
if((t&$.dh().a)!==0)++s
if((t&$.bR().a)!==0)++s
if((t&$.bh().a)!==0)++s
r=a3.gcV(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.q
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dm])
for(n=0,m=0;m<s;++m){l=a3.jd(m)
k=l.gcV(l)
C.a.l(o,m,new Z.dm(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].jz(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.l(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.bO(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bk(new Z.ek(a0,f),o,a3)
e.sfT(H.d([],[Z.bz]))
if(a.b.b.length!==0){t=P.o
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)}b=Z.kQ(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(0,d.length,b))}if(a.c.b.length!==0){t=P.o
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.v()
C.a.h(d,c.e)}b=Z.kQ(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(1,d.length,b))}if(a.d.b.length!==0){t=P.o
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.v()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.v()
C.a.h(d,c.e)}b=Z.kQ(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.j])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.I(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.I(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.I(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.I(t))}return C.a.E(s,"\n")},
a6:function(){var u=this.e
if(u!=null)u.B(null)},
$ioN:1}
F.hZ.prototype={
ja:function(a){var u,t,s,r,q,p
H.k(a,"$ib",[F.ao],"$ab")
u=H.d([],[F.a8])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cr(t,q,p))}return u},
jb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ao],"$ab")
u=H.d([],[F.a8])
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
C.a.h(u,F.cr(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cr(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cr(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cr(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cM:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b8(0,p,n)){p.b4()
break}}}}},
cL:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gjg(s)
if(t)s.b4()}},
ar:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.G)(u),++r)if(!u[r].cn())s=!1
return s},
cm:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.G)(u),++r)if(!u[r].cl())s=!1
return s},
i:function(a){return this.R()},
I:function(a){var u,t,s,r=H.d([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].I(a))
return C.a.E(r,"\n")},
R:function(){return this.I("")},
sfM:function(a){this.b=H.k(a,"$ib",[F.a8],"$ab")}}
F.i_.prototype={
gk:function(a){return this.b.length},
cM:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b8(0,p,n)){p.b4()
break}}}}},
cL:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.O(s.a,s.b)
if(t)s.b4()}},
i:function(a){return this.R()},
I:function(a){var u,t,s=H.d([],[P.j]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].I(a+(""+u+". ")))}return C.a.E(s,"\n")},
R:function(){return this.I("")},
sfV:function(a){this.b=H.k(a,"$ib",[F.bm],"$ab")}}
F.i0.prototype={
gk:function(a){return this.b.length},
jU:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.G(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.B(null)}s=t.a
if(s!=null){C.a.G(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
I:function(a){var u,t,s,r=H.d([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].I(a))
return C.a.E(r,"\n")},
R:function(){return this.I("")},
sc6:function(a){this.b=H.k(a,"$ib",[F.bH],"$ab")}}
F.ao.prototype={
cr:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iU(u.cx,r,o,t,s,q,p,a,n)},
ji:function(){return this.cr(null)},
saa:function(a,b){var u
if(!J.O(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a6()}},
seP:function(a){var u
if(!J.O(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a6()}},
sdO:function(a){var u
if(!J.O(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a6()}},
jz:function(a){var u,t,s=this
if(a.q(0,$.ap())){u=s.f
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.aY())){u=s.r
t=[P.q]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bi())){u=s.x
t=[P.q]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.aK())){u=s.y
t=[P.q]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.q(0,$.bj())){u=s.z
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.dg())){u=s.Q
t=[P.q]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.dh())){u=s.Q
t=[P.q]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bR()))return H.d([s.ch],[P.q])
else if(a.q(0,$.bh())){u=s.cx
t=[P.q]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.q])},
cn:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cY()
t.d.P(0,new F.j4(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.H(s)))
s=t.a
if(s!=null){s.a6()
s=t.a.e
if(s!=null)s.af(0)}return!0},
cl:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cY()
t.d.P(0,new F.j3(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.H(s)))
s=t.a
if(s!=null){s.a6()
s=t.a.e
if(s!=null)s.af(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t,s=this,r="-",q=H.d([],[P.j])
C.a.h(q,C.b.ao(J.ax(s.e),0))
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
C.a.h(q,V.N(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.E(q,", ")
return a+"{"+t+"}"},
R:function(){return this.I("")}}
F.j4.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:10}
F.j3.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:10}
F.iV.prototype={
v:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.u("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a6()
return!0},
bo:function(a,b,c,d,e,f){var u=F.iU(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
ar:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)u[s].cn()
return!0},
cm:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)u[s].cl()
return!0},
jf:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.O(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.R()},
I:function(a){var u,t,s,r
this.v()
u=H.d([],[P.j])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].I(a))
return C.a.E(u,"\n")},
R:function(){return this.I("")},
siM:function(a){this.c=H.k(a,"$ib",[F.ao],"$ab")}}
F.iW.prototype={
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
P:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a8]})
C.a.P(u.b,b)
C.a.P(u.c,new F.iX(u,b))
C.a.P(u.d,new F.iY(u,b))},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.d([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].I(""))
return C.a.E(r,"\n")},
sfN:function(a){this.b=H.k(a,"$ib",[F.a8],"$ab")},
sfO:function(a){this.c=H.k(a,"$ib",[F.a8],"$ab")},
sfP:function(a){this.d=H.k(a,"$ib",[F.a8],"$ab")}}
F.iX.prototype={
$1:function(a){H.f(a,"$ia8")
if(!J.O(a.a,this.a))this.b.$1(a)},
$S:10}
F.iY.prototype={
$1:function(a){var u
H.f(a,"$ia8")
u=this.a
if(!J.O(a.a,u)&&!J.O(a.b,u))this.b.$1(a)},
$S:10}
F.iZ.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.d([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].I(""))
return C.a.E(r,"\n")},
sfW:function(a){this.b=H.k(a,"$ib",[F.bm],"$ab")},
sfX:function(a){this.c=H.k(a,"$ib",[F.bm],"$ab")}}
F.j0.prototype={}
F.j_.prototype={
b8:function(a,b,c){return J.O(b.f,c.f)}}
F.j1.prototype={}
F.hG.prototype={
cF:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[F.ao],"$ab")
u=V.cY()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.D()
if(typeof r!=="number")return H.w(r)
u=new V.S(q+p,o+n,m+r)}}u=u.w(0,Math.sqrt(u.H(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.G)(a),++s){l=a[s]
if(r)k=null
else{q=u.a
p=u.b
o=u.c
if(typeof o!=="number")return o.m()
k=u.w(0,Math.sqrt(q*q+p*p+o*o))}if(!J.O(l.r,k)){l.r=k
q=l.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}return}}
F.j2.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.d([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].I(""))
return C.a.E(r,"\n")},
sc6:function(a){this.b=H.k(a,"$ib",[F.bH],"$ab")}}
O.fK.prototype={
gn:function(){var u=this.f
return u==null?this.f=D.L():u},
t:function(a){var u=this.f
if(u!=null)u.B(a)},
ab:function(a,b){},
bP:function(a,b){var u,t,s,r,q,p=this,o="Depth",n=p.a
if(n==null){u=H.f(a.fr.j(0,o),"$idt")
if(u==null){n=a.a
u=new A.dt(n,o)
u.bi(n,o)
u.bJ(0,"uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n","precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.h(u.y.j(0,"objClr"),"$iP")
u.ch=H.h(u.y.j(0,"fogClr"),"$iP")
u.cx=H.h(u.y.j(0,"fogStart"),"$iW")
u.cy=H.h(u.y.j(0,"fogStop"),"$iW")
u.db=H.h(u.y.j(0,"viewObjMat"),"$iaa")
u.dx=H.h(u.y.j(0,"projMat"),"$iaa")
a.bp(u)}p.a=u
n=u}t=b.e
if((!(t instanceof Z.bk)?b.e=null:t)==null){n=b.d.bq(new Z.c9(a.a),$.ap())
t=n.al($.ap())
s=p.a
t.e=s.z.c
b.e=n
n=s}n.Z(a)
t=p.b
s=n.Q
s.toString
r=t.a
q=t.b
t=t.c
C.c.u(s.a,s.d,r,q,t)
t=p.c
q=n.ch
q.toString
r=t.a
s=t.b
t=t.c
C.c.u(q.a,q.d,r,s,t)
t=p.d
s=n.cx
C.c.N(s.a,s.d,t)
t=p.e
s=n.cy
C.c.N(s.a,s.d,t)
t=a.cy
t=t.ga1(t)
s=n.dx
s.toString
s.ac(t.a7(0,!0))
t=a.geX()
n=n.db
n.toString
n.ac(t.a7(0,!0))
t=b.e
t.Z(a)
t.a5(a)
t.aD(a)
t=p.a
t.toString
a.a.useProgram(null)
t.x.bt()}}
O.dE.prototype={
gn:function(){var u=this.x
return u==null?this.x=D.L():u},
t:function(a){var u
H.f(a,"$iA")
u=this.x
if(u!=null)u.B(a)},
ag:function(){return this.t(null)},
sck:function(a){var u=this.r
if(!(Math.abs(u-a)<$.E().a)){this.r=a
u=new D.v("blurValue",u,a,[P.q])
u.b=!0
this.t(u)}},
sdT:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gn().G(0,t.ga8())
u=t.e
t.e=a
if(a!=null)a.gn().h(0,t.ga8())
s=new D.v("colorTexture",u,t.e,[T.bL])
s.b=!0
t.t(s)}},
sb2:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gn().G(0,s.ga8())
u=s.f
s.f=a
if(a!=null)a.gn().h(0,s.ga8())
r=new D.v("blurTexture",u,s.f,[T.bL])
t=r.b=!0
s.t(r)
r=s.f==null
if(!(r&&u!=null))r=!r&&u==null
else r=t
if(r){s.a=null
s.t(null)}}},
scO:function(a){var u,t=this,s=$.ls
if(s==null){s=new V.c3(1,0,0,0,1,0,0,0,1)
$.ls=s
a=s}else a=s
if(!J.O(t.b,a)){u=t.b
t.b=a
s=new D.v("textureMatrix",u,a,[V.c3])
s.b=!0
t.t(s)}},
scj:function(a){var u,t,s=this
if(a==null){u=$.lV
if(u==null){u=new V.bN(1,0,0,0)
$.lV=u
a=u}else a=u}if(!J.O(s.c,a)){t=s.c
s.c=a
u=new D.v("blurAdjust",t,a,[V.bN])
u.b=!0
s.t(u)}},
ab:function(a,b){},
U:function(a,b){H.k(a,"$ib",[T.bs],"$ab")
if(b!=null)if(!C.a.as(a,b)){b.a=a.length
C.a.h(a,b)}},
bP:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
if(g==null){u=h.f!=null
g="GaussianBlur_"+(u?"1":"0")
t=g.charCodeAt(0)==0?g:g
s=H.f(a.fr.j(0,t),"$idD")
if(s==null){g=a.a
s=new A.dD(g,t)
s.bi(g,t)
r=s.z=new A.h2(u,t)
q=new P.aj("")
q.a="precision mediump float;\n"
q.a="precision mediump float;\n\n"
q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\n"
if(u){q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform sampler2D blurTxt;\n"
q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform sampler2D blurTxt;\nuniform int nullBlurTxt;\n"
g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform sampler2D blurTxt;\nuniform int nullBlurTxt;\nuniform vec4 blurAdj;\n"}else g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform float blurValue;\n"
g+="uniform vec2 blurScale;\n"
q.a=g
g+="\n"
q.a=g
g+="varying vec2 txt2D;\n"
q.a=g
q.a=g+"\n"
g=[P.q]
r.aP(q,3,H.d([0.75],g),H.d([0.5],g))
r.aP(q,6,H.d([0.42857,2.14286],g),H.d([0.41667,0.08333],g))
r.aP(q,9,H.d([0,1.8],g),H.d([0.5122,0.2439],g))
r.aP(q,12,H.d([0,1.38462,3.23077],g),H.d([0.22703,0.31622,0.07027],g))
r.aP(q,15,H.d([0.9375,2.8125],g),H.d([0.36184,0.13816],g))
r.aP(q,18,H.d([0.47368,2.36842,4.26316],g),H.d([0.29916,0.16318,0.03766],g))
g=q.a+="void main()\n"
g=q.a=g+"{\n"
g=(u?q.a=g+"   if((nullColorTxt > 0) || (nullBlurTxt > 0))\n":q.a=g+"   if(nullColorTxt > 0)\n")+"   {\n"
q.a=g
g+="      gl_FragColor = vec4(1.0);\n"
q.a=g
g+="      return;\n"
q.a=g
g+="   }\n"
q.a=g
g=q.a=g+"\n"
g=(u?q.a=g+"   float blurValue = dot(texture2D(blurTxt, txt2D), blurAdj);\n":g)+"   float blurOffset = abs(blurValue);\n"
q.a=g
g+="\n"
q.a=g
g+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
q.a=g
g+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
q.a=g
g+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
q.a=g
g+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
q.a=g
g+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
q.a=g
g+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
q.a=g
g+="   else                       gl_FragColor = blur18();\n"
q.a=g
g=q.a=g+"}\n"
s.bJ(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",g.charCodeAt(0)==0?g:g)
s.Q=s.x.j(0,"posAttr")
s.ch=s.x.j(0,"txtAttr")
s.cx=H.h(s.y.j(0,"projViewObjMat"),"$iaa")
s.cy=H.h(s.y.j(0,"txt2DMat"),"$ic8")
s.dy=H.h(s.y.j(0,"colorTxt"),"$ia7")
s.fr=H.h(s.y.j(0,"nullColorTxt"),"$iJ")
s.dx=H.h(s.y.j(0,"blurScale"),"$iav")
g=s.y
if(u){s.fx=H.h(g.j(0,"blurTxt"),"$ia7")
s.fy=H.h(s.y.j(0,"nullBlurTxt"),"$iJ")
s.db=H.h(s.y.j(0,"blurAdj"),"$icP")}else s.go=H.h(g.j(0,"blurValue"),"$iW")
a.bp(s)}g=h.a=s
b.e=null}r=g.z
g=b.e
if((!(g instanceof Z.bk)?b.e=null:g)==null){g=b.d
p=$.ap()
o=$.aK()
o=g.bq(new Z.c9(a.a),new Z.aE(p.a|o.a))
o.al($.ap()).e=h.a.Q.c
o.al($.aK()).e=h.a.ch.c
b.e=o}n=H.d([],[T.bs])
h.U(n,h.e)
g=r.a
if(g)h.U(n,h.f)
for(m=0;m<n.length;++m)n[m].Z(a)
p=h.a
p.Z(a)
o=h.e
p.ae(p.dy,p.fr,o)
o=h.b
l=p.cy
l.toString
l.ac(o.a7(0,!0))
o=h.d
l=o.a
k=a.c
if(typeof l!=="number")return l.w()
o=o.b
j=a.d
if(typeof o!=="number")return o.w()
i=p.dx
C.c.bg(i.a,i.d,l/k,o/j)
j=a.geI()
p=p.cx
p.toString
p.ac(j.a7(0,!0))
p=h.a
if(g){g=h.f
p.ae(p.fx,p.fy,g)
g=h.c
p=p.db
p.toString
o=g.a
l=g.b
k=g.c
g=g.d
C.c.eT(p.a,p.d,o,l,k,g)}else{g=h.r
p=p.go
C.c.N(p.a,p.d,g)}g=b.e
if(g instanceof Z.bk){g.Z(a)
g.a5(a)
g.aD(a)}else b.e=null
g=h.a
g.toString
p=a.a
p.useProgram(null)
g.x.bt()
for(m=0;m<n.length;++m){g=n[m]
if(g.c){g.c=!1
p.activeTexture(33984+g.a)
p.bindTexture(3553,null)}}}}
O.dQ.prototype={
gn:function(){var u=this.dy
return u==null?this.dy=D.L():u},
t:function(a){var u
H.f(a,"$iA")
u=this.dy
if(u!=null)u.B(a)},
ag:function(){return this.t(null)},
dA:function(a){H.f(a,"$iA")
this.a=null
this.t(a)},
ie:function(){return this.dA(null)},
hd:function(a,b){var u=V.af
H.k(b,"$ii",[u],"$ai")
u=new D.bA([u])
u.b=!0
this.t(u)},
hf:function(a,b){var u=V.af
H.k(b,"$ii",[u],"$ai")
u=new D.bB([u])
u.b=!0
this.t(u)},
dd:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.e.a9(a1.e.length+3,4)*4,a3=C.e.a9(a1.f.length+3,4)*4,a4=C.e.a9(a1.r.length+3,4)*4,a5=C.e.a9(a1.x.length+3,4)*4,a6=C.e.a9(a1.y.length+3,4)*4,a7=C.e.a9(a1.z.length+3,4)*4,a8=C.e.a9(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.e.i(a1.a)+C.e.i(u.a)+C.e.i(t.a)+C.e.i(s.a)+C.e.i(r.a)+C.e.i(q.a)+C.e.i(p.a)+C.e.i(o.a)+C.e.i(n.a)
m+"_"
m+"_0"
m+"_00"
m+"_000"
m=m+"_000_"+a8+"_"+a2+"_"+a3+"_"+a4+"_"+a5+"_"+a6+"_"+a7
l=p!==C.d||o!==C.d
k=u!==C.d||t!==C.d||s!==C.d||r!==C.d
j=r===C.d
i=!j||a3+a6>0||l
h=t!==C.d||s!==C.d||!j||q!==C.d||l
j=q===C.d
g=!j
f=a1===C.f||u===C.f||t===C.f||s===C.f||r===C.f||q===C.f||p===C.f||o===C.f||n===C.f
e=a1===C.i||u===C.i||t===C.i||s===C.i||r===C.i||q===C.i||p===C.i||o===C.i||n===C.i
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.ap()
if(h){j=$.aY()
a=new Z.aE(a.a|j.a)}if(g){j=$.bi()
a=new Z.aE(a.a|j.a)}if(f){j=$.aK()
a=new Z.aE(a.a|j.a)}if(e){j=$.bj()
a=new Z.aE(a.a|j.a)}if(c){j=$.bh()
a=new Z.aE(a.a|j.a)}return new A.hq(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
U:function(a,b){H.k(a,"$ib",[T.bs],"$ab")
if(b!=null)if(!C.a.as(a,b)){b.a=a.length
C.a.h(a,b)}},
ab:function(a,b){var u,t,s,r
for(u=this.dx.a,u=new J.aq(u,u.length,[H.y(u,0)]);u.C();){t=u.d
t.toString
s=$.bI
t.a=s==null?$.bI=new V.a6(0,0,0):s
s=t.b
if(s!=null){r=s.aE(0,b,t)
if(r!=null)t.a=r.aX(t.a)}}},
bP:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.dd()
u=H.f(a3.fr.j(0,a2.at),"$idP")
if(u==null){u=A.nc(a2,a3.a)
a3.bp(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bu
a2=a4.e
if(!(a2 instanceof Z.bk))a2=a4.e=null
if(a2==null||!a2.d.q(0,s)){a2=t.r1
if(a2)a4.d.ar()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.cm()
q.a.cm()
q=q.e
if(q!=null)q.af(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.jf()
p=p.e
if(p!=null)p.af(0)}n=a4.d.bq(new Z.c9(a3.a),s)
n.al($.ap()).e=a1.a.Q.c
if(a2)n.al($.aY()).e=a1.a.cx.c
if(r)n.al($.bi()).e=a1.a.ch.c
if(t.rx)n.al($.aK()).e=a1.a.cy.c
if(q)n.al($.bj()).e=a1.a.db.c
if(t.x1)n.al($.bh()).e=a1.a.dx.c
a4.e=n}a2=T.bs
m=H.d([],[a2])
a1.a.Z(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.ga1(q)
r=r.dy
r.toString
r.ac(q.a7(0,!0))}if(t.fy){r=a1.a
q=a3.geX()
r=r.fr
r.toString
r.ac(q.a7(0,!0))}r=a1.a
q=a3.geI()
r=r.fy
r.toString
r.ac(q.a7(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.ac(C.n.a7(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.ac(C.n.a7(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.ac(C.n.a7(q,!0))}if(t.aA>0){l=a1.e.a.length
r=a1.a.k4
C.c.X(r.a,r.d,l)
for(r=[P.q],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.e(p,k)
p=p[k]
q.toString
H.f(p,"$iaf")
q=q.r1
if(k>=q.length)return H.e(q,k)
q=q[k]
j=new Float32Array(H.bO(H.k(p.a7(0,!0),"$ib",r,"$ab")))
C.c.cP(q.a,q.d,!1,j)}}switch(t.a){case C.d:break
case C.j:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.c.u(r.a,r.d,p,o,q)
break
case C.f:a1.U(m,a1.f.d)
r=a1.a
q=a1.f.d
r.ae(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break
case C.i:a1.U(m,a1.f.e)
r=a1.a
q=a1.f.e
r.ak(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.d:break
case C.j:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.c.u(r.a,r.d,p,o,q)
break
case C.f:a1.U(m,a1.r.d)
r=a1.a
q=a1.r.d
r.ae(r.y1,r.aA,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break
case C.i:a1.U(m,a1.r.e)
r=a1.a
q=a1.r.e
r.ak(r.y2,r.aA,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break}switch(t.c){case C.d:break
case C.j:r=a1.a
q=a1.x.f
r=r.at
r.toString
p=q.a
o=q.b
q=q.c
C.c.u(r.a,r.d,p,o,q)
break
case C.f:a1.U(m,a1.x.d)
r=a1.a
q=a1.x.d
r.ae(r.bu,r.bv,q)
q=a1.a
r=a1.x.f
q=q.at
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break
case C.i:a1.U(m,a1.x.e)
r=a1.a
q=a1.x.e
r.ak(r.e_,r.bv,q)
q=a1.a
r=a1.x.f
q=q.at
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break}switch(t.d){case C.d:break
case C.j:r=a1.a
q=a1.y.f
r=r.bw
r.toString
p=q.a
o=q.b
q=q.c
C.c.u(r.a,r.d,p,o,q)
break
case C.f:a1.U(m,a1.y.d)
r=a1.a
q=a1.y.d
r.ae(r.e0,r.bx,q)
q=a1.a
r=a1.y.f
q=q.bw
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break
case C.i:a1.U(m,a1.y.e)
r=a1.a
q=a1.y.e
r.ak(r.e1,r.bx,q)
q=a1.a
r=a1.y.f
q=q.bw
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break}switch(t.e){case C.d:break
case C.j:r=a1.a
q=a1.z.f
r=r.by
r.toString
p=q.a
o=q.b
q=q.c
C.c.u(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bA
C.c.N(q.a,q.d,o)
break
case C.f:a1.U(m,a1.z.d)
r=a1.a
q=a1.z.d
r.ae(r.e2,r.bz,q)
q=a1.a
r=a1.z.f
q=q.by
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bA
C.c.N(r.a,r.d,o)
break
case C.i:a1.U(m,a1.z.e)
r=a1.a
q=a1.z.e
r.ak(r.e3,r.bz,q)
q=a1.a
r=a1.z.f
q=q.by
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bA
C.c.N(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.ee
C.c.X(r.a,r.d,l)
r=a3.db
i=r.ga1(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.G)(r),++g){f=r[g]
p=a1.a.cs
if(h>=p.length)return H.e(p,h)
e=p[h]
p=i.eS(f.gbs(f))
o=p.a
d=p.b
c=p.c
if(typeof c!=="number")return c.m()
c=p.w(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.c.u(d.a,d.d,o,p,c)
c=f.gaz(f)
p=e.c
C.c.u(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.ef
C.c.X(r.a,r.d,l)
r=a3.db
i=r.ga1(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.G)(r),++g){f=r[g]
p=a1.a.ct
if(h>=p.length)return H.e(p,h)
e=p[h]
p=f.a
o=e.b
d=p.a
c=p.b
p=p.c
C.c.u(o.a,o.d,d,c,p)
p=i.aX(f.a)
c=e.c
C.c.u(c.a,c.d,p.a,p.b,p.c)
p=f.c
c=e.d
C.c.u(c.a,c.d,p.a,p.b,p.c)
p=f.d
c=e.e
C.c.N(c.a,c.d,p)
p=f.e
c=e.f
C.c.N(c.a,c.d,p)
p=f.f
c=e.r
C.c.N(c.a,c.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.eg
C.c.X(r.a,r.d,l)
r=a3.db
i=r.ga1(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.G)(r),++g){f=r[g]
p=a1.a.cu
if(h>=p.length)return H.e(p,h)
e=p[h]
p=f.gcI(f)
o=e.b
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gbs(f).kj()
o=e.c
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=i.aX(f.gcI(f))
o=e.d
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gaz(f)
o=e.e
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gkg()
o=e.f
C.c.N(o.a,o.d,p)
p=f.gkf()
o=e.r
C.c.N(o.a,o.d,p)
p=f.gdL()
o=e.x
C.c.N(o.a,o.d,p)
p=f.gdM()
o=e.y
C.c.N(o.a,o.d,p)
p=f.gdN()
o=e.z
C.c.N(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.eh
C.c.X(r.a,r.d,l)
r=a3.db
i=r.ga1(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.G)(r),++g){f=r[g]
o=a1.a.cv
if(h>=o.length)return H.e(o,h)
e=o[h]
o=f.gbd()
H.k(m,"$ib",p,"$ab")
if(!C.a.as(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gbs(f)
d=e.d
C.c.u(d.a,d.d,o.a,o.b,o.c)
o=f.gkc()
d=e.b
C.c.u(d.a,d.d,o.a,o.b,o.c)
o=f.gbQ(f)
d=e.c
C.c.u(d.a,d.d,o.a,o.b,o.c)
o=i.eS(f.gbs(f))
d=o.a
c=o.b
b=o.c
if(typeof b!=="number")return b.m()
b=o.w(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.c.u(c.a,c.d,d,o,b)
b=f.gaz(f)
o=e.f
C.c.u(o.a,o.d,b.a,b.b,b.c)
b=f.gbd()
o=b.gcE(b)
if(!o){o=e.x
C.c.X(o.a,o.d,1)}else{o=e.r
d=b.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.a)
o=e.x
C.c.X(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.ei
C.c.X(r.a,r.d,l)
r=a3.db
i=r.ga1(r)
for(r=a1.dx.y,q=r.length,p=[P.q],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.G)(r),++g){f=r[g]
d=a1.a.cw
if(h>=d.length)return H.e(d,h)
e=d[h]
d=f.gbd()
H.k(m,"$ib",o,"$ab")
if(!C.a.as(m,d)){d.a=m.length
C.a.h(m,d)}a=i.m(0,f.ga1(f))
d=f.ga1(f)
c=$.bI
d=d.aX(c==null?$.bI=new V.a6(0,0,0):c)
c=e.b
C.c.u(c.a,c.d,d.a,d.b,d.c)
d=$.bI
d=a.aX(d==null?$.bI=new V.a6(0,0,0):d)
c=e.c
C.c.u(c.a,c.d,d.a,d.b,d.c)
d=a.es(0)
c=e.d
j=new Float32Array(H.bO(H.k(new V.c3(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).a7(0,!0),"$ib",p,"$ab")))
C.c.eU(c.a,c.d,!1,j)
c=f.gaz(f)
d=e.e
C.c.u(d.a,d.d,c.a,c.b,c.c)
c=f.gbd()
d=c.gcE(c)
if(!d){d=e.r
C.c.X(d.a,d.d,1)}else{d=e.f
b=c.gcE(c)
a0=d.a
d=d.d
if(!b)a0.uniform1i(d,0)
else a0.uniform1i(d,c.gkh(c))
d=e.r
C.c.X(d.a,d.d,0)}d=f.gdL()
c=e.x
C.c.N(c.a,c.d,d)
d=f.gdM()
c=e.y
C.c.N(c.a,c.d,d)
d=f.gdN()
c=e.z
C.c.N(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.ej
C.c.X(r.a,r.d,l)
r=a3.db
i=r.ga1(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.G)(r),++g){f=r[g]
p=a1.a.cz
if(h>=p.length)return H.e(p,h)
e=p[h]
p=f.gbd()
H.k(m,"$ib",a2,"$ab")
if(!C.a.as(m,p)){p.a=m.length
C.a.h(m,p)}p=f.gcI(f)
o=e.b
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gbs(f)
o=e.c
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gkc()
o=e.d
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gbQ(f)
o=e.e
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=i.aX(f.gcI(f))
o=e.f
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gbd()
o=p.gcE(p)
if(!o){p=e.x
C.c.X(p.a,p.d,1)}else{o=e.r
d=p.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.a)
p=e.x
C.c.X(p.a,p.d,0)}p=f.gaz(f)
o=e.y
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gkk()
o=e.z
C.c.N(o.a,o.d,p)
p=f.gkl()
o=e.Q
C.c.N(o.a,o.d,p)
p=f.gdL()
o=e.ch
C.c.N(o.a,o.d,p)
p=f.gdM()
o=e.cx
C.c.N(o.a,o.d,p)
p=f.gdN()
o=e.cy
C.c.N(o.a,o.d,p);++h}}}switch(t.f){case C.d:break
case C.j:break
case C.f:a1.U(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.ae(a2.e4,a2.bB,r)
break
case C.i:a1.U(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.ak(a2.e5,a2.bB,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.ga1(r).es(0)}a2=a2.id
a2.toString
a2.ac(r.a7(0,!0))}if(t.dy){a1.U(m,a1.ch)
a2=a1.a
r=a1.ch
a2.ak(a2.e6,a2.e7,r)
switch(t.r){case C.d:break
case C.j:a2=a1.a
r=a1.cx.f
a2=a2.bC
a2.toString
q=r.a
p=r.b
r=r.c
C.c.u(a2.a,a2.d,q,p,r)
break
case C.f:a1.U(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.ae(a2.e8,a2.bD,r)
r=a1.a
a2=a1.cx.f
r=r.bC
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.u(r.a,r.d,q,p,a2)
break
case C.i:a1.U(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.ak(a2.e9,a2.bD,r)
r=a1.a
a2=a1.cx.f
r=r.bC
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.u(r.a,r.d,q,p,a2)
break}switch(t.x){case C.d:break
case C.j:a2=a1.a
r=a1.cy.f
a2=a2.bF
a2.toString
q=r.a
p=r.b
r=r.c
C.c.u(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bE
C.c.N(r.a,r.d,p)
break
case C.f:a1.U(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.ae(a2.ea,a2.bG,r)
r=a1.a
a2=a1.cy.f
r=r.bF
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.u(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bE
C.c.N(a2.a,a2.d,p)
break
case C.i:a1.U(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.ak(a2.eb,a2.bG,r)
r=a1.a
a2=a1.cy.f
r=r.bF
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.u(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bE
C.c.N(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.d
if(r){switch(a2){case C.d:break
case C.j:a2=a1.a
q=a1.db.f
a2=a2.bH
C.c.N(a2.a,a2.d,q)
break
case C.f:a1.U(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.ae(a2.ec,a2.bI,q)
q=a1.a
a2=a1.db.f
q=q.bH
C.c.N(q.a,q.d,a2)
break
case C.i:a1.U(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.ak(a2.ed,a2.bI,q)
q=a1.a
a2=a1.db.f
q=q.bH
C.c.N(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].Z(a3)
a2=a4.e
a2.Z(a3)
a2.a5(a3)
a2.aD(a3)
if(r)a3.a.disable(3042)
for(a2=a3.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
a2.activeTexture(33984+r.a)
a2.bindTexture(3553,null)}}r=a1.a
r.toString
a2.useProgram(null)
r.x.bt()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dd().at},
sfu:function(a){this.e=H.k(a,"$iY",[V.af],"$aY")}}
O.ho.prototype={
ii:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.E().a)){u.f=a
t=new D.v(u.b,t,a,[P.q])
t.b=!0
u.a.t(t)}},
ay:function(){this.cZ()
this.ii(1)}}
O.cx.prototype={
t:function(a){this.a.t(H.f(a,"$iA"))},
ag:function(){return this.t(null)},
ay:function(){},
ik:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gn().G(0,t.ga8())
u=t.d
t.d=a
if(a!=null)a.gn().h(0,t.ga8())
s=new D.v(t.b+".texture2D",u,t.d,[T.bL])
s.b=!0
t.a.t(s)}},
il:function(a){},
sbR:function(a){var u,t=this
if(a==null){if(t.c===C.f){t.c=C.j
u=t.a
u.a=null
u.t(null)}}else{u=t.c
if(u!==C.f){if(u===C.d)t.ay()
t.c=C.f
t.il(null)
u=t.a
u.a=null
u.t(null)}}t.ik(a)}}
O.hp.prototype={}
O.b6.prototype={
dC:function(a){var u,t,s=this
if(!J.O(s.f,a)){u=s.f
s.f=a
t=new D.v(s.b+".color",u,a,[V.a1])
t.b=!0
s.a.t(t)}},
ay:function(){this.cZ()
this.dC(new V.a1(1,1,1))},
saz:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.j
t.ay()
u=t.a
u.a=null
u.t(null)}t.dC(b)}}
O.hr.prototype={
ij:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.E().a)){u.ch=a
t=new D.v(u.b+".refraction",t,a,[P.q])
t.b=!0
u.a.t(t)}},
ay:function(){this.bW()
this.ij(1)}}
O.hs.prototype={
cb:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.E().a)){u.ch=a
t=new D.v(u.b+".shininess",t,a,[P.q])
t.b=!0
u.a.t(t)}},
ay:function(){this.bW()
this.cb(100)}}
O.br.prototype={}
O.e5.prototype={
gn:function(){var u=this.e
return u==null?this.e=D.L():u},
t:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.B(a)},
ag:function(){return this.t(null)},
ht:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[O.aU],"$ai")
for(u=b.length,t=this.ga8(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.by()
o.sad(null)
o.saR(null)
o.c=null
o.d=0
p.f=o}H.n(t,s)
if(o.a==null)o.sad(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ag()},
hv:function(a,b){var u,t
H.k(b,"$ii",[O.aU],"$ai")
for(u=b.gW(b),t=this.ga8();u.C();)u.gM(u).gn().G(0,t)
this.ag()},
sdQ:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.v("blend",u,a,[A.bv])
u.b=!0
this.t(u)}},
ab:function(a,b){},
fU:function(a){a=C.e.a9(a+3,4)*4
if(a<=0)return 4
return a},
bP:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.fU(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.e.i(u.a)
s=H.f(a.fr.j(0,t),"$ie6")
if(s==null){s=A.nw(g,u,a.a)
a.bp(s)}h.b=s
u=s}if(b.e==null){u=b.d.bq(new Z.c9(a.a),$.ap())
t=u.al($.ap())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.Z(a)
u=T.bs
q=H.d([],[u])
for(t=[P.q],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.k(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.as(q,r)){r.a=q.length
C.a.h(q,r)}r=h.b
m=n.a
r=r.cx
if(p>=r.length)return H.e(r,p)
r=r[p]
l=m==null||!m.d
k=r.a
r=r.d
if(l)k.uniform1i(r,0)
else k.uniform1i(r,m.a)
r=h.b
m=n.b
r=r.cy
if(p>=r.length)return H.e(r,p)
r=r[p]
if(m==null){m=$.ht
if(m==null){m=new V.af(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.ht=m}}j=new Float32Array(H.bO(H.k(m.a7(0,!0),"$ib",t,"$ab")))
C.c.cP(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cH
if(m==null){m=V.cG(0,0,1,1)
$.cH=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.e(m,p)
m=m[p]
C.c.bg(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.e(r,p)
r=r[p]
C.c.bg(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cH
if(m==null){m=V.cG(0,0,1,1)
$.cH=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.e(m,p)
m=m[p]
C.c.bg(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.e(r,p)
r=r[p]
C.c.bg(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.e(r,p)
r=r[p]
m=H.C(m)?1:0
C.c.X(r.a,r.d,m);++p}}u=h.b.Q
C.c.X(u.a,u.d,p)
u=h.b
t=h.a
u=u.ch
C.c.eT(u.a,u.d,t.a,t.b,t.c,t.d)
for(o=0;o<q.length;++o)q[o].Z(a)
u=b.e
if(u instanceof Z.bk){u.Z(a)
u.a5(a)
u.aD(a)}else b.e=null
u=h.b
u.toString
t=a.a
t.useProgram(null)
u.x.bt()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}},
sfK:function(a){this.c=H.k(a,"$iY",[O.aU],"$aY")}}
O.aU.prototype={
gn:function(){var u=this.f
return u==null?this.f=D.L():u},
t:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.B(a)},
ag:function(){return this.t(null)}}
T.bs.prototype={}
T.bL.prototype={}
T.il.prototype={
dD:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.dZ()}},
gn:function(){var u=this.y
return u==null?this.y=D.L():u},
Z:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.im.prototype={
bL:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=T.kK(q)
r=W.p
W.ab(u,"load",H.n(new T.io(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
ig:function(a,b,c){var u,t,s,r
b=V.df(b)
u=V.df(a.width)
t=V.df(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ky()
s.width=u
s.height=t
r=H.f(C.m.f_(s,"2d"),"$icm")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oi(r.getImageData(0,0,s.width,s.height))}}}
T.io.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.ig(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.c.k0(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.dD();++u.e},
$S:16}
T.ip.prototype={}
V.fh.prototype={
aV:function(a,b){return!0},
i:function(a){return"all"},
$ibn:1}
V.bn.prototype={}
V.dO.prototype={
aV:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)if(u[s].aV(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.G)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saJ:function(a){this.a=H.k(a,"$ib",[V.bn],"$ab")},
$ibn:1}
V.bo.prototype={
aV:function(a,b){return!this.f3(0,b)},
i:function(a){return"!["+this.cY(0)+"]"}}
V.hY.prototype={
f7:function(a){var u,t
if(a.a.length<=0)throw H.c(P.u("May not create a SetMatcher with zero characters."))
u=new H.aN([P.o,P.a0])
for(t=new H.dM(a,a.gk(a),[H.az(a,"z",0)]);t.C();)u.l(0,t.d,!0)
this.sih(u)},
aV:function(a,b){return this.a.br(0,b)},
i:function(a){var u=this.a
return P.cL(u.gaB(u),0,null)},
sih:function(a){this.a=H.k(a,"$iF",[P.o,P.a0],"$aF")},
$ibn:1}
V.cJ.prototype={
E:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cO(this.a.S(0,b))
r.saJ(H.d([],[V.bn]))
r.c=!1
C.a.h(this.c,r)
return r},
jq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
if(r.aV(0,a))return r}return},
i:function(a){return this.b},
siG:function(a){this.c=H.k(a,"$ib",[V.cO],"$ab")}}
V.eb.prototype={
i:function(a){var u=H.ms(this.b,"\n","\\n"),t=H.ms(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cN.prototype={
i:function(a){return this.b},
si9:function(a){var u=P.j
this.c=H.k(a,"$iF",[u,u],"$aF")}}
V.is.prototype={
S:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cJ(this,b)
u.siG(H.d([],[V.cO]))
u.d=null
this.a.l(0,b,u)}return u},
bf:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cN(a)
u=P.j
t.si9(new H.aN([u,u]))
this.b.l(0,a,t)}return t},
k9:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.eb]),k=this.c,j=[P.o],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.J(a,s)
q=k.jq(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cL(i,0,m)
throw H.c(P.u("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cL(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.eb(n==null?o.b:n,p,s)}++s}}},
siw:function(a){this.a=H.k(a,"$iF",[P.j,V.cJ],"$aF")},
siz:function(a){this.b=H.k(a,"$iF",[P.j,V.cN],"$aF")}}
V.cO.prototype={
i:function(a){return this.b.b+": "+this.cY(0)}}
X.fq.prototype={
gn:function(){var u=this.fr
return u==null?this.fr=D.L():u},
a4:function(a){var u=this.fr
if(u!=null)u.B(a)},
saq:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.v("width",u,b,[P.o])
u.b=!0
t.a4(u)}},
sam:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.v("height",u,b,[P.o])
u.b=!0
t.a4(u)}},
Z:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.m()
h.saq(0,C.h.a2(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.m()
h.sam(0,C.h.a2(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.ad(u.getParameter(3379))
p=V.df(s)
o=V.df(r)
q=V.df(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.c.eO(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.kK(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.dD()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.dZ()
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
a.c=C.h.a2(s*h.a)
r=t.d
a.d=C.h.a2(r*h.b)
l=t.a
k=h.c
if(typeof k!=="number")return H.w(k)
j=C.h.a2(l*k)
t=t.b
l=h.d
if(typeof l!=="number")return H.w(l)
u.viewport(j,C.h.a2(t*l),C.h.a2(s*k),C.h.a2(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
aD:function(a){a.a.bindFramebuffer(36160,null)}}
X.bV.prototype={$ib8:1}
X.h1.prototype={
gn:function(){var u=this.x
return u==null?this.x=D.L():u},
Z:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.w(u)
q=C.h.a2(r*u)
r=s.b
if(typeof t!=="number")return H.w(t)
p=C.h.a2(r*t)
r=C.h.a2(s.c*u)
a.c=r
s=C.h.a2(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
aD:function(a){}}
X.h4.prototype={
gn:function(){var u=this.b
return u==null?this.b=D.L():u},
$ib8:1,
$ibV:1}
X.dV.prototype={
gn:function(){var u=this.f
return u==null?this.f=D.L():u},
a4:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.B(a)},
fn:function(){return this.a4(null)},
sb9:function(a){var u,t,s=this
if(!J.O(s.b,a)){u=s.b
if(u!=null)u.gn().G(0,s.gd2())
t=s.b
s.b=a
if(a!=null)a.gn().h(0,s.gd2())
u=new D.v("mover",t,s.b,[U.ah])
u.b=!0
s.a4(u)}},
$ib8:1,
$ibV:1}
X.cM.prototype={}
V.fx.prototype={
dJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
H.n(c,{func:1,ret:-1,args:[P.a0]})
if(l.c==null)return
u=l.d.length
t=P.kO().gbO().j(0,l.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.e(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.lc(l.c).h(0,p)
n=W.n1("checkbox")
n.checked=s
o=W.p
W.ab(n,"change",H.n(new V.fy(l,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.lc(l.c).h(0,q.createElement("br"))
C.a.h(l.d,n)
if(r)l.dH(u,s)},
b0:function(a,b,c){return this.dJ(a,b,c,!1)},
dH:function(a,b){var u,t,s,r,q,p=this.a,o=P.kO().gbO().j(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.b.jL(o,a-u+1,"0")
t=a>0?C.b.A(o,0,a):""
t+=H.C(b)?"1":"0"
u=a+1
if(u<o.length)t+=C.b.aF(o,u)
s=P.kO()
u=P.j
r=P.n7(s.gbO(),u,u)
r.l(0,p,t)
q=s.eK(0,r)
p=window.history
u=q.i(0)
p.toString
p.replaceState(new P.jH([],[]).cQ(""),"",u)},
sfz:function(a){this.d=H.k(a,"$ib",[W.cn],"$ab")}}
V.fy.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.dH(u.d,t.checked)},
$S:16}
V.ko.prototype={
$1:function(a){H.f(a,"$ibb")
P.l5(C.h.eR(this.a.gjt(),2)+" fps")},
$S:48}
V.i1.prototype={
f8:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ab(q,"scroll",H.n(new V.i3(o),{func:1,ret:-1,args:[r]}),!1,r)},
dK:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.j],"$ab")
this.ip()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.k9(C.a.jy(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q){p=s[q]
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
if(H.oE(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.Q(m[1])
l.textContent=H.Q(m[0])
t.appendChild(l)}else{k=P.jR(C.W,n,C.l,!1)
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
j8:function(a){var u,t,s,r,q,p,o,n="auto"
H.k(a,"$ib",[P.j],"$ab")
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
s=H.f(r.insertCell(-1),"$ibq").style
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
o=H.f(r.insertCell(-1),"$ibq")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
ip:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.is()
t=P.j
u.siw(new H.aN([t,V.cJ]))
u.siz(new H.aN([t,V.cN]))
u.c=null
u.c=u.S(0,q)
t=u.S(0,q).E(0,p)
s=V.an(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,p).E(0,p)
s=new V.bo()
r=[V.bn]
s.saJ(H.d([],r))
C.a.h(t.a,s)
t=V.an(new H.a4("*"))
C.a.h(s.a,t)
t=u.S(0,p).E(0,"BoldEnd")
s=V.an(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,q).E(0,o)
s=V.an(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,o).E(0,o)
s=new V.bo()
s.saJ(H.d([],r))
C.a.h(t.a,s)
t=V.an(new H.a4("_"))
C.a.h(s.a,t)
t=u.S(0,o).E(0,n)
s=V.an(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,q).E(0,m)
s=V.an(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,m).E(0,m)
s=new V.bo()
s.saJ(H.d([],r))
C.a.h(t.a,s)
t=V.an(new H.a4("`"))
C.a.h(s.a,t)
t=u.S(0,m).E(0,"CodeEnd")
s=V.an(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,q).E(0,l)
s=V.an(new H.a4("["))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,l).E(0,k)
s=V.an(new H.a4("|"))
C.a.h(t.a,s)
s=u.S(0,l).E(0,j)
t=V.an(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.S(0,l).E(0,l)
t=new V.bo()
t.saJ(H.d([],r))
C.a.h(s.a,t)
s=V.an(new H.a4("|]"))
C.a.h(t.a,s)
s=u.S(0,k).E(0,j)
t=V.an(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.S(0,k).E(0,k)
t=new V.bo()
t.saJ(H.d([],r))
C.a.h(s.a,t)
s=V.an(new H.a4("|]"))
C.a.h(t.a,s)
C.a.h(u.S(0,q).E(0,i).a,new V.fh())
s=u.S(0,i).E(0,i)
t=new V.bo()
t.saJ(H.d([],r))
C.a.h(s.a,t)
s=V.an(new H.a4("*_`["))
C.a.h(t.a,s)
s=u.S(0,"BoldEnd")
s.d=s.a.bf(p)
s=u.S(0,n)
s.d=s.a.bf(o)
s=u.S(0,"CodeEnd")
s.d=s.a.bf(m)
s=u.S(0,j)
s.d=s.a.bf("Link")
s=u.S(0,i)
s.d=s.a.bf(i)
this.b=u}}
V.i3.prototype={
$1:function(a){P.lJ(C.v,new V.i2(this.a))},
$S:16}
V.i2.prototype={
$0:function(){var u=C.h.a2(document.documentElement.scrollTop),t=this.a.style,s=H.m(-0.01*u)+"px"
t.top=s},
$S:1}
K.kf.prototype={
$1:function(a){var u,t,s,r,q,p
H.f(a,"$iA")
u=this.b.f
t=this.c
s=t.r
r=t.x
u=u.a
u.bindFramebuffer(36160,u.createFramebuffer())
u.framebufferTexture2D(36160,36064,3553,t.b,0)
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.w(r)
q=new Uint8Array(s*r*4)
u.readPixels(0,0,s,r,6408,5121,q)
u.bindFramebuffer(36160,null)
p=F.op(150,150)
u=this.a
u.a=p
p.ar()
u.a.jc(new T.ip(q,s,r),0.05)
r=u.a
s=$.aY()
s.toString
r.kb(new Z.aE($.l7().a&~s.a))
u.a.ka(!1)
u.a.ar()},
$S:9}
K.kg.prototype={
$1:function(a){var u=this.a,t=u.r
H.C(a)
t.sbR(a?this.b:null)
u=u.x
u.sbR(a?this.b:null)},
$S:4}
K.kh.prototype={
$1:function(a){var u=this.a.z
u.sbR(H.C(a)?this.b:null)},
$S:4}
K.ki.prototype={
$1:function(a){var u=this.a.Q
u.sbR(H.C(a)?this.b:null)},
$S:4}
K.kj.prototype={
$1:function(a){var u=H.C(a)?this.a.a:this.c
this.b.sbV(0,u)},
$S:4}
K.kk.prototype={
$1:function(a){var u=this.a,t=H.C(a)?this.b.ch:null
u.c.sb2(t)
u.e.sb2(t)},
$S:4}
K.kl.prototype={
$1:function(a){var u=H.C(a)?this.b:null
this.a.sap(u)},
$S:4};(function aliases(){var u=J.a.prototype
u.f1=u.i
u=J.dJ.prototype
u.f2=u.i
u=O.cx.prototype
u.cZ=u.ay
u=O.b6.prototype
u.bW=u.ay
u=V.dO.prototype
u.f3=u.aV
u.cY=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"oc","nJ",13)
u(P,"od","nK",13)
u(P,"oe","nL",13)
t(P,"mf","oa",3)
var n
s(n=E.ak.prototype,"geC",0,0,null,["$1","$0"],["eD","jJ"],0,0)
s(n,"geE",0,0,null,["$1","$0"],["eF","jK"],0,0)
s(n,"geA",0,0,null,["$1","$0"],["eB","jI"],0,0)
s(n,"gey",0,0,null,["$1","$0"],["ez","jF"],0,0)
r(n,"gjD","jE",8)
r(n,"gjG","jH",8)
s(n=E.ea.prototype,"gd_",0,0,null,["$1","$0"],["d1","d0"],0,0)
q(n,"gjX","eL",3)
p(n=X.eh.prototype,"ghw","hx",12)
p(n,"ghg","hh",12)
p(n,"ghm","hn",5)
p(n,"ghA","hB",17)
p(n,"ghy","hz",17)
p(n,"ghE","hF",5)
p(n,"ghI","hJ",5)
p(n,"ghq","hr",5)
p(n,"ghG","hH",5)
p(n,"gho","hp",5)
p(n,"ghK","hL",41)
p(n,"ghM","hN",12)
p(n,"gi1","i2",14)
p(n,"ghY","hZ",14)
p(n,"gi_","i0",14)
s(n=D.dL.prototype,"gds",0,0,null,["$1","$0"],["dt","hC"],0,0)
p(n,"ghO","hP",43)
r(n,"gha","hb",21)
r(n,"ghS","hT",21)
s(D.bG.prototype,"gfc",0,0,null,["$1","$0"],["aj","fd"],0,0)
o(V.X.prototype,"gk","b7",15)
o(V.S.prototype,"gk","b7",15)
o(V.bN.prototype,"gk","b7",15)
s(n=U.cu.prototype,"gbl",0,0,null,["$1","$0"],["O","ax"],0,0)
r(n,"gfj","fk",22)
r(n,"ghQ","hR",22)
s(n=U.ei.prototype,"gbl",0,0,null,["$1","$0"],["O","ax"],0,0)
p(n,"gh2","h3",2)
p(n,"gh4","h5",2)
p(n,"gh6","h7",2)
p(n,"gfZ","h_",2)
p(n,"gh0","h1",2)
p(n,"giE","iF",2)
p(n,"giC","iD",2)
p(n,"giA","iB",2)
p(U.ej.prototype,"gh8","h9",2)
s(n=M.dp.prototype,"gY",0,0,null,["$1","$0"],["V","aG"],0,0)
r(n,"ghU","hV",23)
r(n,"ghW","hX",23)
s(M.dr.prototype,"gY",0,0,null,["$1","$0"],["V","aG"],0,0)
s(n=M.dy.prototype,"gY",0,0,null,["$1","$0"],["V","aG"],0,0)
r(n,"ghi","hj",8)
r(n,"ghk","hl",8)
s(M.dC.prototype,"gY",0,0,null,["$1","$0"],["V","aG"],0,0)
s(O.dE.prototype,"ga8",0,0,null,["$1","$0"],["t","ag"],0,0)
s(n=O.dQ.prototype,"ga8",0,0,null,["$1","$0"],["t","ag"],0,0)
s(n,"gic",0,0,null,["$1","$0"],["dA","ie"],0,0)
r(n,"ghc","hd",25)
r(n,"ghe","hf",25)
s(O.cx.prototype,"ga8",0,0,null,["$1","$0"],["t","ag"],0,0)
s(n=O.e5.prototype,"ga8",0,0,null,["$1","$0"],["t","ag"],0,0)
r(n,"ghs","ht",26)
r(n,"ghu","hv",26)
s(O.aU.prototype,"ga8",0,0,null,["$1","$0"],["t","ag"],0,0)
s(X.dV.prototype,"gd2",0,0,null,["$1","$0"],["a4","fn"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.T,null)
s(P.T,[H.kG,J.a,J.aq,P.eA,P.i,H.dM,P.b2,H.c0,H.cX,H.fC,H.ix,P.bx,H.co,H.eR,P.al,H.hc,H.he,H.h7,P.eX,P.bf,P.aG,P.el,P.ic,P.cK,P.id,P.bb,P.ar,P.jU,P.jD,P.d0,P.jx,P.z,P.jM,P.hl,P.bX,P.jT,P.jS,P.a0,P.ay,P.ac,P.bw,P.hK,P.e3,P.et,P.h0,P.b,P.F,P.K,P.au,P.j,P.aj,P.ca,P.iL,P.jE,W.fF,W.cn,W.D,W.dA,P.jG,P.f1,P.jy,P.R,O.Y,O.cy,E.ft,E.ak,E.hQ,E.ea,Z.ek,Z.c9,Z.bk,Z.bz,Z.aE,D.fw,D.by,D.A,X.dn,X.dK,X.h9,X.hi,X.aB,X.hA,X.it,X.eh,D.du,D.a5,D.bG,D.e2,D.e7,D.e8,D.e9,V.a1,V.ae,V.fS,V.c3,V.af,V.a9,V.a6,V.ba,V.bK,V.X,V.S,V.bN,U.ei,U.ej,M.dr,M.dy,M.dC,M.at,A.dk,A.fl,A.h2,A.hq,A.cQ,A.cT,A.cR,A.cU,A.cS,A.cV,A.bY,A.bv,A.ed,A.iF,F.a8,F.fV,F.bm,F.hb,F.bH,F.e1,F.hZ,F.i_,F.i0,F.ao,F.iV,F.iW,F.iZ,F.j0,F.j1,F.j2,O.br,O.cx,O.aU,T.im,T.ip,V.fh,V.bn,V.dO,V.hY,V.cJ,V.eb,V.cN,V.is,X.cM,X.bV,X.h4,X.dV,V.fx,V.i1])
s(J.a,[J.h6,J.dH,J.dJ,J.b3,J.dI,J.c2,H.cB,H.bF,W.l,W.fg,W.bU,W.cm,W.b0,W.b1,W.U,W.en,W.fJ,W.fL,W.ep,W.dx,W.er,W.fN,W.p,W.eu,W.aM,W.h3,W.ew,W.bl,W.hh,W.hu,W.eB,W.eC,W.aO,W.eD,W.eG,W.aP,W.eK,W.eM,W.aR,W.eN,W.aS,W.eS,W.aC,W.eV,W.ir,W.aV,W.eY,W.iv,W.iQ,W.f3,W.f5,W.f7,W.f9,W.fb,P.b5,P.ey,P.b9,P.eI,P.hO,P.eT,P.bc,P.f_,P.fm,P.em,P.dl,P.dB,P.dX,P.dZ,P.c7,P.e0,P.e4,P.ee,P.eP])
s(J.dJ,[J.hL,J.cW,J.bC])
t(J.kF,J.b3)
s(J.dI,[J.dG,J.dF])
t(P.hg,P.eA)
s(P.hg,[H.ef,W.je,W.jd,P.fX])
t(H.a4,H.ef)
s(P.i,[H.fQ,H.hm,H.j6])
s(P.b2,[H.hn,H.j7])
t(H.fD,H.fC)
s(P.bx,[H.hH,H.h8,H.iJ,H.iz,H.fv,H.hW,P.fk,P.dU,P.aZ,P.iK,P.iH,P.i8,P.fB,P.fI])
s(H.co,[H.kr,H.ii,H.ka,H.kb,H.kc,P.ja,P.j9,P.jb,P.jc,P.jL,P.jK,P.jk,P.jo,P.jl,P.jm,P.jn,P.jr,P.js,P.jq,P.jp,P.ie,P.ig,P.k1,P.jB,P.jA,P.jC,P.hf,P.hk,P.fO,P.fP,P.iP,P.iM,P.iN,P.iO,P.jN,P.jO,P.jQ,P.jP,P.jY,P.jX,P.jZ,P.k_,W.hw,W.hy,W.hV,W.ib,W.jj,P.jI,P.k3,P.fY,P.fZ,P.fo,E.hR,E.hS,E.hT,E.iq,D.fT,D.fU,F.jV,F.kp,F.kq,F.k7,F.k8,F.j4,F.j3,F.iX,F.iY,T.io,V.fy,V.ko,V.i3,V.i2,K.kf,K.kg,K.kh,K.ki,K.kj,K.kk,K.kl])
s(H.ii,[H.i9,H.ck])
t(H.j8,P.fk)
t(P.hj,P.al)
t(H.aN,P.hj)
t(H.hd,H.fQ)
t(H.dR,H.bF)
s(H.dR,[H.d1,H.d3])
t(H.d2,H.d1)
t(H.cC,H.d2)
t(H.d4,H.d3)
t(H.dS,H.d4)
s(H.dS,[H.hB,H.hC,H.hD,H.hE,H.hF,H.dT,H.cD])
t(P.jz,P.jU)
t(P.jw,P.jD)
t(P.f2,P.hl)
t(P.eg,P.f2)
s(P.bX,[P.fr,P.fR])
t(P.c_,P.id)
s(P.c_,[P.fs,P.iT,P.iS])
t(P.iR,P.fR)
s(P.ac,[P.q,P.o])
s(P.aZ,[P.c6,P.h5])
t(P.jg,P.ca)
s(W.l,[W.I,W.fW,W.cz,W.aQ,W.d5,W.aT,W.aD,W.d7,W.j5,W.cZ,P.fp,P.bT])
s(W.I,[W.a2,W.bu])
s(W.a2,[W.x,P.r])
s(W.x,[W.fi,W.fj,W.bW,W.dv,W.h_,W.cv,W.cw,W.hX,W.bq])
s(W.b0,[W.cp,W.fG,W.fH])
t(W.fE,W.b1)
t(W.cq,W.en)
t(W.eq,W.ep)
t(W.dw,W.eq)
t(W.es,W.er)
t(W.fM,W.es)
t(W.aA,W.bU)
t(W.ev,W.eu)
t(W.cs,W.ev)
t(W.ex,W.ew)
t(W.c1,W.ex)
t(W.bM,W.p)
s(W.bM,[W.b4,W.ag,W.aW])
t(W.hv,W.eB)
t(W.hx,W.eC)
t(W.eE,W.eD)
t(W.hz,W.eE)
t(W.eH,W.eG)
t(W.cE,W.eH)
t(W.eL,W.eK)
t(W.hM,W.eL)
t(W.hU,W.eM)
t(W.d6,W.d5)
t(W.i5,W.d6)
t(W.eO,W.eN)
t(W.i6,W.eO)
t(W.ia,W.eS)
t(W.eW,W.eV)
t(W.ij,W.eW)
t(W.d8,W.d7)
t(W.ik,W.d8)
t(W.eZ,W.eY)
t(W.iu,W.eZ)
t(W.be,W.ag)
t(W.f4,W.f3)
t(W.jf,W.f4)
t(W.eo,W.dx)
t(W.f6,W.f5)
t(W.jt,W.f6)
t(W.f8,W.f7)
t(W.eF,W.f8)
t(W.fa,W.f9)
t(W.jF,W.fa)
t(W.fc,W.fb)
t(W.jJ,W.fc)
t(W.jh,P.ic)
t(W.kR,W.jh)
t(W.ji,P.cK)
t(P.jH,P.jG)
t(P.am,P.jy)
t(P.ez,P.ey)
t(P.ha,P.ez)
t(P.eJ,P.eI)
t(P.hI,P.eJ)
t(P.eU,P.eT)
t(P.ih,P.eU)
t(P.f0,P.f_)
t(P.iw,P.f0)
t(P.fn,P.em)
t(P.hJ,P.bT)
t(P.eQ,P.eP)
t(P.i7,P.eQ)
s(E.ft,[Z.dm,A.cI,T.bs])
s(D.A,[D.bA,D.bB,D.v,X.hN])
s(X.hN,[X.dN,X.bE,X.cA,X.ec])
s(O.Y,[D.dL,U.cu,M.dp])
s(D.fw,[U.fA,U.ah])
s(U.ah,[U.dq,U.e_])
s(A.cI,[A.dt,A.dD,A.dP,A.e6])
s(A.ed,[A.J,A.iC,A.iD,A.iE,A.iB,A.W,A.av,A.P,A.cP,A.iG,A.c8,A.aa,A.a7,A.as])
t(F.i4,F.fV)
t(F.iA,F.hb)
t(F.j_,F.j0)
t(F.hG,F.j1)
s(O.br,[O.fK,O.dE,O.dQ,O.e5])
s(O.cx,[O.ho,O.hp,O.b6])
s(O.b6,[O.hr,O.hs])
t(T.bL,T.bs)
t(T.il,T.bL)
s(V.dO,[V.bo,V.cO])
s(X.cM,[X.fq,X.h1])
u(H.ef,H.cX)
u(H.d1,P.z)
u(H.d2,H.c0)
u(H.d3,P.z)
u(H.d4,H.c0)
u(P.eA,P.z)
u(P.f2,P.jM)
u(W.en,W.fF)
u(W.ep,P.z)
u(W.eq,W.D)
u(W.er,P.z)
u(W.es,W.D)
u(W.eu,P.z)
u(W.ev,W.D)
u(W.ew,P.z)
u(W.ex,W.D)
u(W.eB,P.al)
u(W.eC,P.al)
u(W.eD,P.z)
u(W.eE,W.D)
u(W.eG,P.z)
u(W.eH,W.D)
u(W.eK,P.z)
u(W.eL,W.D)
u(W.eM,P.al)
u(W.d5,P.z)
u(W.d6,W.D)
u(W.eN,P.z)
u(W.eO,W.D)
u(W.eS,P.al)
u(W.eV,P.z)
u(W.eW,W.D)
u(W.d7,P.z)
u(W.d8,W.D)
u(W.eY,P.z)
u(W.eZ,W.D)
u(W.f3,P.z)
u(W.f4,W.D)
u(W.f5,P.z)
u(W.f6,W.D)
u(W.f7,P.z)
u(W.f8,W.D)
u(W.f9,P.z)
u(W.fa,W.D)
u(W.fb,P.z)
u(W.fc,W.D)
u(P.ey,P.z)
u(P.ez,W.D)
u(P.eI,P.z)
u(P.eJ,W.D)
u(P.eT,P.z)
u(P.eU,W.D)
u(P.f_,P.z)
u(P.f0,W.D)
u(P.em,P.al)
u(P.eP,P.z)
u(P.eQ,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.m=W.bW.prototype
C.R=J.a.prototype
C.a=J.b3.prototype
C.S=J.dF.prototype
C.e=J.dG.prototype
C.n=J.dH.prototype
C.h=J.dI.prototype
C.b=J.c2.prototype
C.T=J.bC.prototype
C.Z=W.cE.prototype
C.C=J.hL.prototype
C.c=P.c7.prototype
C.w=J.cW.prototype
C.D=W.be.prototype
C.E=W.cZ.prototype
C.a_=new P.fs()
C.F=new P.fr()
C.x=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=function() {
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
C.L=function(getTagFallback) {
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
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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
C.K=function(hooks) {
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
C.J=function(hooks) {
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
C.y=function(hooks) { return hooks; }

C.M=new P.hK()
C.l=new P.iR()
C.N=new P.iT()
C.k=new P.jz()
C.t=new A.bv(0,"ColorBlendType.Overwrite")
C.O=new A.bv(1,"ColorBlendType.Additive")
C.P=new A.bv(2,"ColorBlendType.Average")
C.u=new A.bv(3,"ColorBlendType.AlphaBlend")
C.d=new A.bY(0,"ColorSourceType.None")
C.j=new A.bY(1,"ColorSourceType.Solid")
C.f=new A.bY(2,"ColorSourceType.Texture2D")
C.i=new A.bY(3,"ColorSourceType.TextureCube")
C.v=new P.bw(0)
C.Q=new P.bw(5e6)
C.z=H.d(u([127,2047,65535,1114111]),[P.o])
C.o=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.p=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.q=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.V=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.W=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.r=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.A=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.X=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.B=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.U=H.d(u([]),[P.j])
C.Y=new H.fD(0,{},C.U,[P.j,P.j])})()
var v={mangledGlobalNames:{o:"int",q:"double",ac:"num",j:"String",a0:"bool",K:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.A]},{func:1,ret:P.K},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:P.K,args:[P.a0]},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.K,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[P.o,[P.i,E.ak]]},{func:1,ret:P.K,args:[D.A]},{func:1,ret:P.K,args:[F.a8]},{func:1,ret:P.K,args:[F.ao,P.q,P.q]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:P.q},{func:1,ret:P.K,args:[W.p]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.K,args:[,]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.j,args:[P.o]},{func:1,ret:-1,args:[P.o,[P.i,D.a5]]},{func:1,ret:-1,args:[P.o,[P.i,U.ah]]},{func:1,ret:-1,args:[P.o,[P.i,M.at]]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:-1,args:[P.o,[P.i,V.af]]},{func:1,ret:-1,args:[P.o,[P.i,O.aU]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:P.K,args:[P.j,,]},{func:1,ret:P.R,args:[P.o]},{func:1,ret:P.R,args:[,,]},{func:1,args:[,P.j]},{func:1,args:[W.p]},{func:1,ret:P.a0,args:[W.I]},{func:1,ret:W.a2,args:[W.I]},{func:1,args:[P.j]},{func:1,ret:P.K,args:[,],opt:[P.au]},{func:1,ret:P.K,args:[P.ac]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,ret:[P.F,P.j,P.j],args:[[P.F,P.j,P.j],P.j]},{func:1,ret:-1,args:[W.be]},{func:1,ret:-1,args:[P.j,P.o]},{func:1,ret:P.a0,args:[[P.i,D.a5]]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:P.K,args:[P.j]},{func:1,ret:P.K,args:[P.bb]},{func:1,ret:[P.aG,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b_=0
$.cl=null
$.le=null
$.kV=!1
$.mj=null
$.md=null
$.mp=null
$.k4=null
$.kd=null
$.l3=null
$.cb=null
$.dc=null
$.dd=null
$.kW=!1
$.a_=C.k
$.aw=[]
$.ls=null
$.ht=null
$.lA=null
$.bI=null
$.cH=null
$.lR=null
$.lP=null
$.lQ=null
$.lU=null
$.lT=null
$.lS=null
$.lV=null
$.lz=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oL","mw",function(){return H.mi("_$dart_dartClosure")})
u($,"oM","l6",function(){return H.mi("_$dart_js")})
u($,"oQ","mx",function(){return H.bd(H.iy({
toString:function(){return"$receiver$"}}))})
u($,"oR","my",function(){return H.bd(H.iy({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oS","mz",function(){return H.bd(H.iy(null))})
u($,"oT","mA",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oW","mD",function(){return H.bd(H.iy(void 0))})
u($,"oX","mE",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oV","mC",function(){return H.bd(H.lL(null))})
u($,"oU","mB",function(){return H.bd(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oZ","mG",function(){return H.bd(H.lL(void 0))})
u($,"oY","mF",function(){return H.bd(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pe","l9",function(){return P.nI()})
u($,"p0","mH",function(){return P.nF()})
u($,"pf","mJ",function(){return H.nd(H.bO(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"pg","mK",function(){return P.nr("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"ph","mL",function(){return P.o3()})
u($,"p7","mI",function(){return Z.aF(0)})
u($,"p1","l7",function(){return Z.aF(511)})
u($,"p9","ap",function(){return Z.aF(1)})
u($,"p8","aY",function(){return Z.aF(2)})
u($,"p3","bi",function(){return Z.aF(4)})
u($,"pa","aK",function(){return Z.aF(8)})
u($,"pb","bj",function(){return Z.aF(16)})
u($,"p4","dg",function(){return Z.aF(32)})
u($,"p5","dh",function(){return Z.aF(64)})
u($,"p6","l8",function(){return Z.aF(96)})
u($,"pc","bR",function(){return Z.aF(128)})
u($,"p2","bh",function(){return Z.aF(256)})
u($,"oK","mv",function(){return new V.fS(1e-9)})
u($,"oJ","E",function(){return $.mv()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cB,DataView:H.bF,ArrayBufferView:H.bF,Float32Array:H.cC,Float64Array:H.cC,Int16Array:H.hB,Int32Array:H.hC,Int8Array:H.hD,Uint16Array:H.hE,Uint32Array:H.hF,Uint8ClampedArray:H.dT,CanvasPixelArray:H.dT,Uint8Array:H.cD,HTMLAudioElement:W.x,HTMLBRElement:W.x,HTMLBaseElement:W.x,HTMLBodyElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLLIElement:W.x,HTMLLabelElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMediaElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTableElement:W.x,HTMLTableRowElement:W.x,HTMLTableSectionElement:W.x,HTMLTemplateElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLVideoElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,AccessibleNodeList:W.fg,HTMLAnchorElement:W.fi,HTMLAreaElement:W.fj,Blob:W.bU,HTMLCanvasElement:W.bW,CanvasRenderingContext2D:W.cm,CDATASection:W.bu,CharacterData:W.bu,Comment:W.bu,ProcessingInstruction:W.bu,Text:W.bu,CSSNumericValue:W.cp,CSSUnitValue:W.cp,CSSPerspective:W.fE,CSSCharsetRule:W.U,CSSConditionRule:W.U,CSSFontFaceRule:W.U,CSSGroupingRule:W.U,CSSImportRule:W.U,CSSKeyframeRule:W.U,MozCSSKeyframeRule:W.U,WebKitCSSKeyframeRule:W.U,CSSKeyframesRule:W.U,MozCSSKeyframesRule:W.U,WebKitCSSKeyframesRule:W.U,CSSMediaRule:W.U,CSSNamespaceRule:W.U,CSSPageRule:W.U,CSSRule:W.U,CSSStyleRule:W.U,CSSSupportsRule:W.U,CSSViewportRule:W.U,CSSStyleDeclaration:W.cq,MSStyleCSSProperties:W.cq,CSS2Properties:W.cq,CSSImageValue:W.b0,CSSKeywordValue:W.b0,CSSPositionValue:W.b0,CSSResourceValue:W.b0,CSSURLImageValue:W.b0,CSSStyleValue:W.b0,CSSMatrixComponent:W.b1,CSSRotation:W.b1,CSSScale:W.b1,CSSSkew:W.b1,CSSTranslation:W.b1,CSSTransformComponent:W.b1,CSSTransformValue:W.fG,CSSUnparsedValue:W.fH,DataTransferItemList:W.fJ,HTMLDivElement:W.dv,DOMException:W.fL,ClientRectList:W.dw,DOMRectList:W.dw,DOMRectReadOnly:W.dx,DOMStringList:W.fM,DOMTokenList:W.fN,Element:W.a2,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.l,Accelerometer:W.l,AccessibleNode:W.l,AmbientLightSensor:W.l,Animation:W.l,ApplicationCache:W.l,DOMApplicationCache:W.l,OfflineResourceList:W.l,BackgroundFetchRegistration:W.l,BatteryManager:W.l,BroadcastChannel:W.l,CanvasCaptureMediaStreamTrack:W.l,DedicatedWorkerGlobalScope:W.l,EventSource:W.l,FileReader:W.l,FontFaceSet:W.l,Gyroscope:W.l,XMLHttpRequest:W.l,XMLHttpRequestEventTarget:W.l,XMLHttpRequestUpload:W.l,LinearAccelerationSensor:W.l,Magnetometer:W.l,MediaDevices:W.l,MediaKeySession:W.l,MediaQueryList:W.l,MediaRecorder:W.l,MediaSource:W.l,MediaStream:W.l,MediaStreamTrack:W.l,MIDIAccess:W.l,MIDIInput:W.l,MIDIOutput:W.l,MIDIPort:W.l,NetworkInformation:W.l,Notification:W.l,OffscreenCanvas:W.l,OrientationSensor:W.l,PaymentRequest:W.l,Performance:W.l,PermissionStatus:W.l,PresentationAvailability:W.l,PresentationConnection:W.l,PresentationConnectionList:W.l,PresentationRequest:W.l,RelativeOrientationSensor:W.l,RemotePlayback:W.l,RTCDataChannel:W.l,DataChannel:W.l,RTCDTMFSender:W.l,RTCPeerConnection:W.l,webkitRTCPeerConnection:W.l,mozRTCPeerConnection:W.l,ScreenOrientation:W.l,Sensor:W.l,ServiceWorker:W.l,ServiceWorkerContainer:W.l,ServiceWorkerGlobalScope:W.l,ServiceWorkerRegistration:W.l,SharedWorker:W.l,SharedWorkerGlobalScope:W.l,SpeechRecognition:W.l,SpeechSynthesis:W.l,SpeechSynthesisUtterance:W.l,VR:W.l,VRDevice:W.l,VRDisplay:W.l,VRSession:W.l,VisualViewport:W.l,WebSocket:W.l,Worker:W.l,WorkerGlobalScope:W.l,WorkerPerformance:W.l,BluetoothDevice:W.l,BluetoothRemoteGATTCharacteristic:W.l,Clipboard:W.l,MojoInterfaceInterceptor:W.l,USB:W.l,IDBDatabase:W.l,IDBOpenDBRequest:W.l,IDBVersionChangeRequest:W.l,IDBRequest:W.l,IDBTransaction:W.l,AnalyserNode:W.l,RealtimeAnalyserNode:W.l,AudioBufferSourceNode:W.l,AudioDestinationNode:W.l,AudioNode:W.l,AudioScheduledSourceNode:W.l,AudioWorkletNode:W.l,BiquadFilterNode:W.l,ChannelMergerNode:W.l,AudioChannelMerger:W.l,ChannelSplitterNode:W.l,AudioChannelSplitter:W.l,ConstantSourceNode:W.l,ConvolverNode:W.l,DelayNode:W.l,DynamicsCompressorNode:W.l,GainNode:W.l,AudioGainNode:W.l,IIRFilterNode:W.l,MediaElementAudioSourceNode:W.l,MediaStreamAudioDestinationNode:W.l,MediaStreamAudioSourceNode:W.l,OscillatorNode:W.l,Oscillator:W.l,PannerNode:W.l,AudioPannerNode:W.l,webkitAudioPannerNode:W.l,ScriptProcessorNode:W.l,JavaScriptAudioNode:W.l,StereoPannerNode:W.l,WaveShaperNode:W.l,EventTarget:W.l,File:W.aA,FileList:W.cs,FileWriter:W.fW,HTMLFormElement:W.h_,Gamepad:W.aM,History:W.h3,HTMLCollection:W.c1,HTMLFormControlsCollection:W.c1,HTMLOptionsCollection:W.c1,ImageData:W.bl,HTMLImageElement:W.cv,HTMLInputElement:W.cw,KeyboardEvent:W.b4,Location:W.hh,MediaList:W.hu,MessagePort:W.cz,MIDIInputMap:W.hv,MIDIOutputMap:W.hx,MimeType:W.aO,MimeTypeArray:W.hz,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,Document:W.I,DocumentFragment:W.I,HTMLDocument:W.I,ShadowRoot:W.I,XMLDocument:W.I,Attr:W.I,DocumentType:W.I,Node:W.I,NodeList:W.cE,RadioNodeList:W.cE,Plugin:W.aP,PluginArray:W.hM,RTCStatsReport:W.hU,HTMLSelectElement:W.hX,SourceBuffer:W.aQ,SourceBufferList:W.i5,SpeechGrammar:W.aR,SpeechGrammarList:W.i6,SpeechRecognitionResult:W.aS,Storage:W.ia,CSSStyleSheet:W.aC,StyleSheet:W.aC,HTMLTableCellElement:W.bq,HTMLTableDataCellElement:W.bq,HTMLTableHeaderCellElement:W.bq,TextTrack:W.aT,TextTrackCue:W.aD,VTTCue:W.aD,TextTrackCueList:W.ij,TextTrackList:W.ik,TimeRanges:W.ir,Touch:W.aV,TouchEvent:W.aW,TouchList:W.iu,TrackDefaultList:W.iv,CompositionEvent:W.bM,FocusEvent:W.bM,TextEvent:W.bM,UIEvent:W.bM,URL:W.iQ,VideoTrackList:W.j5,WheelEvent:W.be,Window:W.cZ,DOMWindow:W.cZ,CSSRuleList:W.jf,ClientRect:W.eo,DOMRect:W.eo,GamepadList:W.jt,NamedNodeMap:W.eF,MozNamedAttrMap:W.eF,SpeechRecognitionResultList:W.jF,StyleSheetList:W.jJ,SVGLength:P.b5,SVGLengthList:P.ha,SVGNumber:P.b9,SVGNumberList:P.hI,SVGPointList:P.hO,SVGStringList:P.ih,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGScriptElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGTransform:P.bc,SVGTransformList:P.iw,AudioBuffer:P.fm,AudioParamMap:P.fn,AudioTrackList:P.fp,AudioContext:P.bT,webkitAudioContext:P.bT,BaseAudioContext:P.bT,OfflineAudioContext:P.hJ,WebGLBuffer:P.dl,WebGLFramebuffer:P.dB,WebGLProgram:P.dX,WebGLRenderbuffer:P.dZ,WebGL2RenderingContext:P.c7,WebGLShader:P.e0,WebGLTexture:P.e4,WebGLUniformLocation:P.ee,SQLResultSetRowList:P.i7})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dR.$nativeSuperclassTag="ArrayBufferView"
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
H.d4.$nativeSuperclassTag="ArrayBufferView"
H.dS.$nativeSuperclassTag="ArrayBufferView"
W.d5.$nativeSuperclassTag="EventTarget"
W.d6.$nativeSuperclassTag="EventTarget"
W.d7.$nativeSuperclassTag="EventTarget"
W.d8.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.mm,[])
else K.mm([])})})()
//# sourceMappingURL=test.dart.js.map
