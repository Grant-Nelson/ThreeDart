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
a[c]=function(){a[c]=function(){H.p5(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lp(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l3:function l3(){},
kw:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
l0:function(){return new P.cQ("No element")},
nr:function(){return new P.cQ("Too many elements")},
u:function u(a){this.a=a},
h0:function h0(){},
c3:function c3(){},
cC:function cC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hy:function hy(a,b,c){this.a=a
this.b=b
this.$ti=c},
hz:function hz(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hA:function hA(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a,b,c){this.a=a
this.b=b
this.$ti=c},
js:function js(a,b,c){this.a=a
this.b=b
this.$ti=c},
c_:function c_(){},
d6:function d6(){},
eo:function eo(){},
nj:function(){throw H.c(P.K("Cannot modify unmodifiable Map"))},
cl:function(a){var u,t=H.J(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
oN:function(a){return v.types[H.ah(a)]},
oU:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iM},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.c(H.bj(a))
return u},
cM:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nK:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.h(p,3)
u=H.J(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.D(s,q)|32)>t)return}return parseInt(a,b)},
c6:function(a){return H.nB(a)+H.ll(H.bS(a),0,null)},
nB:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$id5){r=C.y(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cl(t.length>1&&C.b.D(t,0)===36?C.b.av(t,1):t)},
nC:function(){if(!!self.location)return self.location.href
return},
lW:function(a){var u,t,s,r,q
H.kB(a)
u=J.aE(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
nL:function(a){var u,t,s,r=H.d([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.G)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.bj(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.aY(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.bj(s))}return H.lW(r)},
lX:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.bj(s))
if(s<0)throw H.c(H.bj(s))
if(s>65535)return H.nL(a)}return H.lW(a)},
nM:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c7:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aY(u,10))>>>0,56320|u&1023)}}throw H.c(P.af(a,0,1114111,null,null))},
c5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nJ:function(a){var u=H.c5(a).getFullYear()+0
return u},
nH:function(a){var u=H.c5(a).getMonth()+1
return u},
nD:function(a){var u=H.c5(a).getDate()+0
return u},
nE:function(a){var u=H.c5(a).getHours()+0
return u},
nG:function(a){var u=H.c5(a).getMinutes()+0
return u},
nI:function(a){var u=H.c5(a).getSeconds()+0
return u},
nF:function(a){var u=H.c5(a).getMilliseconds()+0
return u},
F:function(a){throw H.c(H.bj(a))},
h:function(a,b){if(a==null)J.aE(a)
throw H.c(H.cg(a,b))},
cg:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aM(!0,b,s,null)
u=H.ah(J.aE(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,s,null,u)
return P.i4(b,s)},
oI:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c8(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c8(a,c,!0,b,"end",u)
return new P.aM(!0,b,"end",null)},
bj:function(a){return new P.aM(!0,a,null,null)},
oE:function(a){if(typeof a!=="number")throw H.c(H.bj(a))
return a},
c:function(a){var u
if(a==null)a=new P.e2()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mL})
u.name=""}else u.toString=H.mL
return u},
mL:function(){return J.ar(this.dartException)},
t:function(a){throw H.c(a)},
G:function(a){throw H.c(P.b0(a))},
be:function(a){var u,t,s,r,q,p
a=H.mK(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iT(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iU:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
m6:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lQ:function(a,b){return new H.hU(a,b==null?null:b.method)},
l4:function(a,b){var u=b==null,t=u?null:b.method
return new H.hm(a,t,u?null:b.receiver)},
ai:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kQ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.aY(t,16)&8191)===10)switch(s){case 438:return f.$1(H.l4(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lQ(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mO()
q=$.mP()
p=$.mQ()
o=$.mR()
n=$.mU()
m=$.mV()
l=$.mT()
$.mS()
k=$.mX()
j=$.mW()
i=r.an(u)
if(i!=null)return f.$1(H.l4(H.J(u),i))
else{i=q.an(u)
if(i!=null){i.method="call"
return f.$1(H.l4(H.J(u),i))}else{i=p.an(u)
if(i==null){i=o.an(u)
if(i==null){i=n.an(u)
if(i==null){i=m.an(u)
if(i==null){i=l.an(u)
if(i==null){i=o.an(u)
if(i==null){i=k.an(u)
if(i==null){i=j.an(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lQ(H.J(u),i))}}return f.$1(new H.j5(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ec()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aM(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ec()
return a},
cj:function(a){var u
if(a==null)return new H.f4(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f4(a)},
oM:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
oT:function(a,b,c,d,e,f){H.e(a,"$ibF")
switch(H.ah(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.v("Unsupported number of arguments for wrapped closure"))},
cf:function(a,b){var u
H.ah(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oT)
a.$identity=u
return u},
ni:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.ir().constructor.prototype):Object.create(new H.cp(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b_
if(typeof t!=="number")return t.H()
$.b_=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lF(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.oN,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lE:H.kT
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lF(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nf:function(a,b,c,d){var u=H.kT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lF:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nh(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nf(t,!r,u,b)
if(t===0){r=$.b_
if(typeof r!=="number")return r.H()
$.b_=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cq
return new Function(r+H.l(q==null?$.cq=H.fI("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b_
if(typeof r!=="number")return r.H()
$.b_=r+1
o+=r
r="return function("+o+"){return this."
q=$.cq
return new Function(r+H.l(q==null?$.cq=H.fI("self"):q)+"."+H.l(u)+"("+o+");}")()},
ng:function(a,b,c,d){var u=H.kT,t=H.lE
switch(b?-1:a){case 0:throw H.c(H.nQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nh:function(a,b){var u,t,s,r,q,p,o,n=$.cq
if(n==null)n=$.cq=H.fI("self")
u=$.lD
if(u==null)u=$.lD=H.fI("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ng(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.b_
if(typeof u!=="number")return u.H()
$.b_=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.b_
if(typeof u!=="number")return u.H()
$.b_=u+1
return new Function(n+u+"}")()},
lp:function(a,b,c,d,e,f,g){return H.ni(a,b,H.ah(c),d,!!e,!!f,g)},
kT:function(a){return a.a},
lE:function(a){return a.c},
fI:function(a){var u,t,s,r=new H.cp("self","target","receiver","name"),q=J.l1(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
C:function(a){if(a==null)H.oA("boolean expression must not be null")
return a},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aY(a,"String"))},
oJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"double"))},
oY:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"num"))},
lm:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aY(a,"bool"))},
ah:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aY(a,"int"))},
mI:function(a,b){throw H.c(H.aY(a,H.cl(H.J(b).substring(2))))},
p_:function(a,b){throw H.c(H.ne(a,H.cl(H.J(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.mI(a,b)},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.p_(a,b)},
kB:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.c(H.aY(a,"List<dynamic>"))},
mF:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.mI(a,b)},
mB:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ah(u)]
else return a.$S()}return},
fu:function(a,b){var u
if(typeof a=="function")return!0
u=H.mB(J.T(a))
if(u==null)return!1
return H.mq(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.li)return a
$.li=!0
try{if(H.fu(a,b))return a
u=H.kO(b)
t=H.aY(a,u)
throw H.c(t)}finally{$.li=!1}},
lq:function(a,b){if(a!=null&&!H.lo(a,b))H.t(H.aY(a,H.kO(b)))
return a},
aY:function(a,b){return new H.iV("TypeError: "+P.dJ(a)+": type '"+H.mw(a)+"' is not a subtype of type '"+b+"'")},
ne:function(a,b){return new H.fJ("CastError: "+P.dJ(a)+": type '"+H.mw(a)+"' is not a subtype of type '"+b+"'")},
mw:function(a){var u,t=J.T(a)
if(!!t.$ict){u=H.mB(t)
if(u!=null)return H.kO(u)
return"Closure"}return H.c6(a)},
oA:function(a){throw H.c(new H.jt(a))},
p5:function(a){throw H.c(new P.fT(H.J(a)))},
nQ:function(a){return new H.ic(a)},
mC:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bS:function(a){if(a==null)return
return a.$ti},
pO:function(a,b,c){return H.ck(a["$a"+H.l(c)],H.bS(b))},
bR:function(a,b,c,d){var u
H.J(c)
H.ah(d)
u=H.ck(a["$a"+H.l(c)],H.bS(b))
return u==null?null:u[d]},
al:function(a,b,c){var u
H.J(b)
H.ah(c)
u=H.ck(a["$a"+H.l(b)],H.bS(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.ah(b)
u=H.bS(a)
return u==null?null:u[b]},
kO:function(a){return H.bQ(a,null)},
bQ:function(a,b){var u,t
H.m(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cl(a[0].name)+H.ll(a,1,b)
if(typeof a=="function")return H.cl(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ah(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.l(b[t])}if('func' in a)return H.ot(a,b)
if('futureOr' in a)return"FutureOr<"+H.bQ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ot:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
H.m(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.h(a0,n)
p=C.b.H(p,a0[n])
m=u[q]
if(m!=null&&m!==P.X)p+=" extends "+H.bQ(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bQ(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bQ(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bQ(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.oL(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.J(b[h])
j=j+i+H.bQ(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
ll:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ag("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bQ(p,c)}return"<"+u.i(0)+">"},
ck:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ln:function(a,b,c,d){var u,t
H.J(b)
H.kB(c)
H.J(d)
if(a==null)return!1
u=H.bS(a)
t=J.T(a)
if(t[b]==null)return!1
return H.mz(H.ck(t[d],u),null,c,null)},
m:function(a,b,c,d){H.J(b)
H.kB(c)
H.J(d)
if(a==null)return a
if(H.ln(a,b,c,d))return a
throw H.c(H.aY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cl(b.substring(2))+H.ll(c,0,null),v.mangledGlobalNames)))},
mz:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aL(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aL(a[t],b,c[t],d))return!1
return!0},
pM:function(a,b,c){return a.apply(b,H.ck(J.T(b)["$a"+H.l(c)],H.bS(b)))},
mE:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="X"||a.name==="L"||a===-1||a===-2||H.mE(u)}return!1},
lo:function(a,b){var u,t
if(a==null)return b==null||b.name==="X"||b.name==="L"||b===-1||b===-2||H.mE(b)
if(b==null||b===-1||b.name==="X"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lo(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fu(a,b)}u=J.T(a).constructor
t=H.bS(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aL(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.lo(a,b))throw H.c(H.aY(a,H.kO(b)))
return a},
aL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="X"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="X"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aL(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.mq(a,b,c,d)
if('func' in a)return c.name==="bF"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aL("type" in a?a.type:l,b,s,d)
else if(H.aL(a,b,s,d))return!0
else{if(!('$i'+"cz" in t.prototype))return!1
r=t.prototype["$a"+"cz"]
q=H.ck(r,u?a.slice(1):l)
return H.aL(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mz(H.ck(m,u),b,p,d)},
mq:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aL(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aL(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aL(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aL(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.oX(h,b,g,d)},
oX:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aL(c[s],d,a[s],b))return!1}return!0},
pN:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
oV:function(a){var u,t,s,r,q=H.J($.mD.$1(a)),p=$.ku[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kA[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.J($.my.$2(a,q))
if(q!=null){p=$.ku[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kA[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kN(u)
$.ku[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kA[q]=u
return u}if(s==="-"){r=H.kN(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mH(a,u)
if(s==="*")throw H.c(P.j4(q))
if(v.leafTags[q]===true){r=H.kN(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mH(a,u)},
mH:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ls(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kN:function(a){return J.ls(a,!1,null,!!a.$iM)},
oW:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kN(u)
else return J.ls(u,c,null,null)},
oR:function(){if(!0===$.lr)return
$.lr=!0
H.oS()},
oS:function(){var u,t,s,r,q,p,o,n
$.ku=Object.create(null)
$.kA=Object.create(null)
H.oQ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mJ.$1(q)
if(p!=null){o=H.oW(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oQ:function(){var u,t,s,r,q,p,o=C.K()
o=H.ce(C.L,H.ce(C.M,H.ce(C.z,H.ce(C.z,H.ce(C.N,H.ce(C.O,H.ce(C.P(C.y),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mD=new H.kx(r)
$.my=new H.ky(q)
$.mJ=new H.kz(p)},
ce:function(a,b){return a(b)||b},
nt:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a5("Illegal RegExp pattern ("+String(r)+")",a,null))},
p2:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oK:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mK:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lv:function(a,b,c){var u=H.p3(a,b,c)
return u},
p3:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mK(b),'g'),H.oK(c))},
fN:function fN(){},
fO:function fO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iT:function iT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hU:function hU(a,b){this.a=a
this.b=b},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a){this.a=a},
kQ:function kQ(a){this.a=a},
f4:function f4(a){this.a=a
this.b=null},
ct:function ct(){},
iB:function iB(){},
ir:function ir(){},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iV:function iV(a){this.a=a},
fJ:function fJ(a){this.a=a},
ic:function ic(a){this.a=a},
jt:function jt(a){this.a=a},
aP:function aP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hp:function hp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hq:function hq(a,b){this.a=a
this.$ti=b},
hr:function hr(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
hl:function hl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cc:function(a){return a},
nA:function(a){return new Int8Array(a)},
bi:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cg(b,a))},
or:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oI(a,b,c))
return b},
cH:function cH(){},
bK:function bK(){},
dZ:function dZ(){},
cI:function cI(){},
e_:function e_(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
e0:function e0(){},
cJ:function cJ(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
oL:function(a){return J.lL(a?Object.keys(a):[],null)},
oZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ls:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kv:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lr==null){H.oR()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.j4("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lw()]
if(r!=null)return r
r=H.oV(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.F
if(u===Object.prototype)return C.F
if(typeof s=="function"){Object.defineProperty(s,$.lw(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
ns:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kS(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.af(a,0,4294967295,"length",null))
return J.lL(new Array(a),b)},
lL:function(a,b){return J.l1(H.d(a,[b]))},
l1:function(a){H.kB(a)
a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dM.prototype
return J.dL.prototype}if(typeof a=="string")return J.c2.prototype
if(a==null)return J.dN.prototype
if(typeof a=="boolean")return J.hk.prototype
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.X)return a
return J.kv(a)},
dq:function(a){if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.X)return a
return J.kv(a)},
fv:function(a){if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.X)return a
return J.kv(a)},
dr:function(a){if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(!(a instanceof P.X))return J.d5.prototype
return a},
ci:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.X)return a
return J.kv(a)},
a9:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).v(a,b)},
ly:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oU(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dq(a).j(a,b)},
kR:function(a,b,c){return J.fv(a).n(a,b,c)},
n5:function(a,b){return J.dr(a).D(a,b)},
n6:function(a,b,c){return J.ci(a).i0(a,b,c)},
n7:function(a,b,c,d){return J.ci(a).iU(a,b,c,d)},
n8:function(a,b){return J.dr(a).a3(a,b)},
fw:function(a,b){return J.fv(a).L(a,b)},
n9:function(a,b,c,d){return J.ci(a).jc(a,b,c,d)},
lz:function(a,b){return J.fv(a).F(a,b)},
na:function(a){return J.ci(a).gj_(a)},
cn:function(a){return J.ci(a).gcA(a)},
dv:function(a){return J.T(a).gJ(a)},
bx:function(a){return J.fv(a).gV(a)},
aE:function(a){return J.dq(a).gl(a)},
lA:function(a){return J.fv(a).jG(a)},
nb:function(a,b){return J.ci(a).jI(a,b)},
nc:function(a,b,c){return J.dr(a).w(a,b,c)},
nd:function(a){return J.dr(a).jS(a)},
ar:function(a){return J.T(a).i(a)},
a:function a(){},
hk:function hk(){},
dN:function dN(){},
dP:function dP(){},
hY:function hY(){},
d5:function d5(){},
bJ:function bJ(){},
b4:function b4(a){this.$ti=a},
l2:function l2(a){this.$ti=a},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dO:function dO(){},
dM:function dM(){},
dL:function dL(){},
c2:function c2(){}},P={
o3:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oB()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cf(new P.jv(s),1)).observe(u,{childList:true})
return new P.ju(s,u,t)}else if(self.setImmediate!=null)return P.oC()
return P.oD()},
o4:function(a){self.scheduleImmediate(H.cf(new P.jw(H.n(a,{func:1,ret:-1})),0))},
o5:function(a){self.setImmediate(H.cf(new P.jx(H.n(a,{func:1,ret:-1})),0))},
o6:function(a){P.l9(C.t,H.n(a,{func:1,ret:-1}))},
l9:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a8(a.a,1000)
return P.oc(u<0?0:u,b)},
m5:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bc]})
u=C.f.a8(a.a,1000)
return P.od(u<0?0:u,b)},
oc:function(a,b){var u=new P.fb()
u.fp(a,b)
return u},
od:function(a,b){var u=new P.fb()
u.fq(a,b)
return u},
o7:function(a,b){var u,t,s
b.a=1
try{a.eP(new P.jH(b),new P.jI(b),null)}catch(s){u=H.ai(s)
t=H.cj(s)
P.p0(new P.jJ(b,u,t))}},
mf:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaK")
if(u>=4){t=b.cn()
b.a=a.a
b.c=a.c
P.da(b,t)}else{t=H.e(b.c,"$ibh")
b.a=2
b.c=a
a.dJ(t)}},
da:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$iam")
g=g.b
r=s.a
q=s.b
g.toString
P.kq(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.da(h.a,b)}g=h.a
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
if(m){H.e(o,"$iam")
g=g.b
r=o.a
q=o.b
g.toString
P.kq(i,i,g,r,q)
return}l=$.a3
if(l!=n)$.a3=n
else l=i
g=b.c
if(g===8)new P.jN(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jM(u,b,o).$0()}else if((g&2)!==0)new P.jL(h,u,b).$0()
if(l!=null)$.a3=l
g=u.b
if(!!J.T(g).$icz){if(g.a>=4){k=H.e(q.c,"$ibh")
q.c=null
b=q.bt(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mf(g,q)
return}}j=b.b
k=H.e(j.c,"$ibh")
j.c=null
b=j.bt(k)
g=u.a
r=u.b
if(!g){H.B(r,H.r(j,0))
j.a=4
j.c=r}else{H.e(r,"$iam")
j.a=8
j.c=r}h.a=j
g=j}},
ow:function(a,b){if(H.fu(a,{func:1,args:[P.X,P.av]}))return H.n(a,{func:1,ret:null,args:[P.X,P.av]})
if(H.fu(a,{func:1,args:[P.X]}))return H.n(a,{func:1,ret:null,args:[P.X]})
throw H.c(P.kS(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ov:function(){var u,t
for(;u=$.cd,u!=null;){$.dp=null
t=u.b
$.cd=t
if(t==null)$.dn=null
u.a.$0()}},
oz:function(){$.lj=!0
try{P.ov()}finally{$.dp=null
$.lj=!1
if($.cd!=null)$.lx().$1(P.mA())}},
mv:function(a){var u=new P.ex(H.n(a,{func:1,ret:-1}))
if($.cd==null){$.cd=$.dn=u
if(!$.lj)$.lx().$1(P.mA())}else $.dn=$.dn.b=u},
oy:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cd
if(u==null){P.mv(a)
$.dp=$.dn
return}t=new P.ex(a)
s=$.dp
if(s==null){t.b=u
$.cd=$.dp=t}else{t.b=s.b
$.dp=s.b=t
if(t.b==null)$.dn=t}},
p0:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a3
if(C.k===u){P.ks(t,t,C.k,a)
return}u.toString
P.ks(t,t,u,H.n(u.cu(a),s))},
m4:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a3
if(u===C.k){u.toString
return P.l9(a,b)}return P.l9(a,H.n(u.cu(b),t))},
nU:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bc]}
H.n(b,s)
u=$.a3
if(u===C.k){u.toString
return P.m5(a,b)}t=u.dY(b,P.bc)
$.a3.toString
return P.m5(a,H.n(t,s))},
kq:function(a,b,c,d,e){var u={}
u.a=d
P.oy(new P.kr(u,e))},
mr:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a3
if(t===c)return d.$0()
$.a3=c
u=t
try{t=d.$0()
return t}finally{$.a3=u}},
ms:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a3
if(t===c)return d.$1(e)
$.a3=c
u=t
try{t=d.$1(e)
return t}finally{$.a3=u}},
ox:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a3
if(t===c)return d.$2(e,f)
$.a3=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a3=u}},
ks:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cu(d):c.j0(d,-1)
P.mv(d)},
jv:function jv(a){this.a=a},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(a){this.a=a},
jx:function jx(a){this.a=a},
fb:function fb(){this.c=0},
ka:function ka(a,b){this.a=a
this.b=b},
k9:function k9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bh:function bh(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aK:function aK(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jG:function jG(a,b){this.a=a
this.b=b},
jK:function jK(a,b){this.a=a
this.b=b},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jO:function jO(a){this.a=a},
jM:function jM(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a){this.a=a
this.b=null},
iu:function iu(){},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(a,b){this.a=a
this.b=b},
cR:function cR(){},
iv:function iv(){},
bc:function bc(){},
am:function am(a,b){this.a=a
this.b=b},
kj:function kj(){},
kr:function kr(a,b){this.a=a
this.b=b},
jU:function jU(){},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a,b){this.a=a
this.b=b},
jX:function jX(a,b,c){this.a=a
this.b=b
this.c=c},
nv:function(a,b){return new H.aP([a,b])},
l5:function(a,b){return new H.aP([a,b])},
nw:function(a){return H.oM(a,new H.aP([null,null]))},
dS:function(a){return new P.jS([a])},
lf:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ob:function(a,b,c){var u=new P.eM(a,b,[c])
u.c=a.e
return u},
nq:function(a,b,c){var u,t
if(P.lk(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.ax,a)
try{P.ou(a,u)}finally{if(0>=$.ax.length)return H.h($.ax,-1)
$.ax.pop()}t=P.m2(b,H.mF(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
l_:function(a,b,c){var u,t
if(P.lk(a))return b+"..."+c
u=new P.ag(b)
C.a.h($.ax,a)
try{t=u
t.a=P.m2(t.a,a,", ")}finally{if(0>=$.ax.length)return H.h($.ax,-1)
$.ax.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lk:function(a){var u,t
for(u=$.ax.length,t=0;t<u;++t)if(a===$.ax[t])return!0
return!1},
ou:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.f],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.l(u.gK(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gK(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gK(u);++s
for(;u.A();o=n,n=m){m=u.gK(u);++s
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
lM:function(a,b,c){var u=P.nv(b,c)
a.F(0,new P.hs(u,b,c))
return u},
lN:function(a,b){var u,t,s=P.dS(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.G)(a),++t)s.h(0,H.B(a[t],b))
return s},
l7:function(a){var u,t={}
if(P.lk(a))return"{...}"
u=new P.ag("")
try{C.a.h($.ax,a)
u.a+="{"
t.a=!0
J.lz(a,new P.hw(t,u))
u.a+="}"}finally{if(0>=$.ax.length)return H.h($.ax,-1)
$.ax.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jS:function jS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ca:function ca(a){this.a=a
this.c=this.b=null},
eM:function eM(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(){},
y:function y(){},
hv:function hv(){},
hw:function hw(a,b){this.a=a
this.b=b},
ad:function ad(){},
kb:function kb(){},
hx:function hx(){},
ep:function ep(a,b){this.a=a
this.$ti=b},
jZ:function jZ(){},
eN:function eN(){},
fh:function fh(){},
nY:function(a,b,c,d){H.m(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.nZ(!1,b,c,d)
return},
nZ:function(a,b,c,d){var u,t,s=$.mY()
if(s==null)return
u=0===c
if(u&&!0)return P.lc(s,b)
t=b.length
d=P.bM(c,d,t)
if(u&&d===t)return P.lc(s,b)
return P.lc(s,b.subarray(c,d))},
lc:function(a,b){if(P.o0(b))return
return P.o1(a,b)},
o1:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ai(t)}return},
o0:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
o_:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ai(t)}return},
mu:function(a,b,c){var u,t,s
H.m(a,"$ib",[P.p],"$ab")
for(u=J.dq(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bZ()
if((s&127)!==s)return t-b}return c-b},
lC:function(a,b,c,d,e,f){if(C.f.bo(f,4)!==0)throw H.c(P.a5("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a5("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a5("Invalid base64 padding, more than two '=' characters",a,b))},
fF:function fF(){},
fG:function fG(){},
bX:function bX(){},
bB:function bB(){},
h2:function h2(){},
hh:function hh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hg:function hg(a){this.a=a},
je:function je(){},
jg:function jg(){},
kh:function kh(a){this.b=0
this.c=a},
jf:function jf(a){this.a=a},
kg:function kg(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
ds:function(a,b,c){var u
H.n(b,{func:1,ret:P.p,args:[P.f]})
u=H.nK(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a5(a,null,null))},
no:function(a){if(a instanceof H.ct)return a.i(0)
return"Instance of '"+H.c6(a)+"'"},
nx:function(a,b,c){var u,t
H.B(b,c)
u=J.ns(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
l6:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bx(a);u.A();)C.a.h(s,H.B(u.gK(u),c))
if(b)return s
return H.m(J.l1(s),"$ib",t,"$ab")},
cS:function(a,b,c){var u,t=P.p
H.m(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$ib4",[t],"$ab4")
u=a.length
c=P.bM(b,c,u)
return H.lX(b>0||c<u?C.a.f1(a,b,c):a)}if(!!J.T(a).$icJ)return H.nM(a,b,P.bM(b,c,a.length))
return P.nS(a,b,c)},
nS:function(a,b,c){var u,t,s,r,q=null
H.m(a,"$ii",[P.p],"$ai")
if(b<0)throw H.c(P.af(b,0,J.aE(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.af(c,b,J.aE(a),q,q))
t=J.bx(a)
for(s=0;s<b;++s)if(!t.A())throw H.c(P.af(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.A())throw H.c(P.af(c,b,s,q,q))
r.push(t.gK(t))}return H.lX(r)},
nO:function(a){return new H.hl(a,H.nt(a,!1,!0,!1))},
m2:function(a,b,c){var u=J.bx(b)
if(!u.A())return a
if(c.length===0){do a+=H.l(u.gK(u))
while(u.A())}else{a+=H.l(u.gK(u))
for(;u.A();)a=a+c+H.l(u.gK(u))}return a},
j9:function(){var u=H.nC()
if(u!=null)return P.nX(u)
throw H.c(P.K("'Uri.base' is not supported"))},
fi:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.n3().b
if(typeof b!=="string")H.t(H.bj(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.al(c,"bX",0))
t=c.gjb().cB(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c7(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nk:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nl:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dF:function(a){if(a>=10)return""+a
return"0"+a},
lH:function(a,b){return new P.bD(1e6*b+1000*a)},
dJ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.no(a)},
dx:function(a){return new P.aM(!1,null,null,a)},
kS:function(a,b,c){return new P.aM(!0,a,b,c)},
i4:function(a,b){return new P.c8(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.c8(b,c,!0,a,d,"Invalid value")},
bM:function(a,b,c){if(0>a||a>c)throw H.c(P.af(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.af(b,a,c,"end",null))
return b}return c},
lY:function(a,b){if(typeof a!=="number")return a.Z()
if(a<0)throw H.c(P.af(a,0,null,b,null))},
a0:function(a,b,c,d,e){var u=H.ah(e==null?J.aE(b):e)
return new P.hj(u,!0,a,c,"Index out of range")},
K:function(a){return new P.j6(a)},
j4:function(a){return new P.j3(a)},
m1:function(a){return new P.cQ(a)},
b0:function(a){return new P.fM(a)},
v:function(a){return new P.eF(a)},
a5:function(a,b,c){return new P.hb(a,b,c)},
ny:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.p]})
u=H.d([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lu:function(a){H.oZ(a)},
nX:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.D(a,4)^58)*3|C.b.D(a,0)^100|C.b.D(a,1)^97|C.b.D(a,2)^116|C.b.D(a,3)^97)>>>0
if(u===0)return P.m7(e<e?C.b.w(a,0,e):a,5,f).geU()
else if(u===32)return P.m7(C.b.w(a,5,e),0,f).geU()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.p])
C.a.n(s,0,0)
C.a.n(s,1,-1)
C.a.n(s,2,-1)
C.a.n(s,7,-1)
C.a.n(s,3,0)
C.a.n(s,4,0)
C.a.n(s,5,e)
C.a.n(s,6,e)
if(P.mt(a,0,e,0,s)>=14)C.a.n(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jU()
if(r>=0)if(P.mt(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.H()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.Z()
if(typeof n!=="number")return H.F(n)
if(m<n)n=m
if(typeof o!=="number")return o.Z()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.Z()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.Z()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.aj(a,"..",o)))j=n>o+2&&C.b.aj(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.aj(a,"file",0)){if(q<=0){if(!C.b.aj(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.w(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.b0(a,o,n,"/");++e
n=h}k="file"}else if(C.b.aj(a,"http",0)){if(t&&p+3===o&&C.b.aj(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b0(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.aj(a,"https",0)){if(t&&p+4===o&&C.b.aj(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b0(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.w(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k1(a,r,q,p,o,n,m,k)}return P.oe(a,0,e,r,q,p,o,n,m,k)},
m9:function(a){var u=P.f
return C.a.jf(H.d(a.split("&"),[u]),P.l5(u,u),new P.jc(C.l),[P.I,P.f,P.f])},
nW:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j8(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a3(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.ds(C.b.w(a,s,t),n,n)
if(typeof p!=="number")return p.eY()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.h(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.ds(C.b.w(a,s,c),n,n)
if(typeof p!=="number")return p.eY()
if(p>255)k.$2(l,s)
if(r>=u)return H.h(j,r)
j[r]=p
return j},
m8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.ja(a)
t=new P.jb(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a3(a,r)
if(n===58){if(r===b){++r
if(C.b.a3(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaA(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.nW(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.f.aY(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
oe:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.ol(a,b,d)
else{if(d===b)P.dk(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.om(a,u,e-1):""
s=P.oi(a,e,f,!1)
if(typeof f!=="number")return f.H()
r=f+1
if(typeof g!=="number")return H.F(g)
q=r<g?P.ok(P.ds(C.b.w(a,r,g),new P.kc(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oj(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.lg(a,h+1,i,n):n
return new P.cb(j,t,s,q,p,o,i<c?P.oh(a,i+1,c):n)},
mj:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dk:function(a,b,c){throw H.c(P.a5(c,a,b))},
ok:function(a,b){if(a!=null&&a===P.mj(b))return
return a},
oi:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a3(a,b)===91){if(typeof c!=="number")return c.M()
u=c-1
if(C.b.a3(a,u)!==93)P.dk(a,b,"Missing end `]` to match `[` in host")
P.m8(a,b+1,u)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.F(c)
t=b
for(;t<c;++t)if(C.b.a3(a,t)===58){P.m8(a,b,c)
return"["+a+"]"}return P.oo(a,b,c)},
oo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a3(a,u)
if(q===37){p=P.mp(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ag("")
n=C.b.w(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.w(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ag("")
if(t<u){s.a+=C.b.w(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.dk(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a3(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ag("")
n=C.b.w(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mk(q)
u+=l
t=u}}}}if(s==null)return C.b.w(a,b,c)
if(t<c){n=C.b.w(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
ol:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mm(C.b.D(a,b)))P.dk(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dk(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.w(a,b,c)
return P.of(t?a.toLowerCase():a)},
of:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
om:function(a,b,c){return P.dl(a,b,c,C.a_,!1)},
oj:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dl(a,b,c,C.E,!0):C.n.jX(d,new P.kd(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a7(u,"/"))u="/"+u
return P.on(u,e,f)},
on:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a7(a,"/"))return P.op(a,!u||c)
return P.oq(a)},
lg:function(a,b,c,d){var u,t={}
H.m(d,"$iI",[P.f,null],"$aI")
if(a!=null){if(d!=null)throw H.c(P.dx("Both query and queryParameters specified"))
return P.dl(a,b,c,C.p,!0)}if(d==null)return
u=new P.ag("")
t.a=""
d.F(0,new P.ke(new P.kf(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oh:function(a,b,c){return P.dl(a,b,c,C.p,!0)},
mp:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a3(a,b+1)
t=C.b.a3(a,p)
s=H.kw(u)
r=H.kw(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.f.aY(q,4)
if(p>=8)return H.h(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c7(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
mk:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.p])
C.a.n(t,0,37)
C.a.n(t,1,C.b.D(o,a>>>4))
C.a.n(t,2,C.b.D(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.p])
for(q=0;--r,r>=0;s=128){p=C.f.ic(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.D(o,p>>>4))
C.a.n(t,q+2,C.b.D(o,p&15))
q+=3}}return P.cS(t,0,null)},
dl:function(a,b,c,d,e){var u=P.mo(a,b,c,H.m(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.w(a,b,c):u},
mo:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.m(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Z()
if(typeof c!=="number")return H.F(c)
if(!(t<c))break
c$0:{q=C.b.a3(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mp(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dk(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a3(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mk(q)}}if(r==null)r=new P.ag("")
r.a+=C.b.w(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.F(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Z()
if(s<c)r.a+=C.b.w(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mn:function(a){if(C.b.a7(a,"."))return!0
return C.b.ey(a,"/.")!==-1},
oq:function(a){var u,t,s,r,q,p,o
if(!P.mn(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.a9(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
op:function(a,b){var u,t,s,r,q,p
if(!P.mn(a))return!b?P.ml(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaA(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaA(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.ml(u[0]))}return C.a.m(u,"/")},
ml:function(a){var u,t,s,r=a.length
if(r>=2&&P.mm(J.n5(a,0)))for(u=1;u<r;++u){t=C.b.D(a,u)
if(t===58)return C.b.w(a,0,u)+"%3A"+C.b.av(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.h(C.q,s)
s=(C.q[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
og:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dx("Invalid URL encoding"))}}return u},
lh:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.w(a,b,c)
else r=new H.u(C.b.w(a,b,c))}else{r=H.d([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.b.D(a,q)
if(t>127)throw H.c(P.dx("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dx("Truncated URI"))
C.a.h(r,P.og(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.p],"$ab")
return new P.jf(!1).cB(r)},
mm:function(a){var u=a|32
return 97<=u&&u<=122},
m7:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a5(m,a,t))}}if(s<0&&t>b)throw H.c(P.a5(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaA(l)
if(r!==44||t!==p+7||!C.b.aj(a,"base64",p+1))throw H.c(P.a5("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.J.jr(0,a,o,u)
else{n=P.mo(a,o,u,C.p,!0)
if(n!=null)a=C.b.b0(a,o,u,n)}return new P.j7(a,l,c)},
os:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.ny(22,new P.kn(),P.U),n=new P.km(o),m=new P.ko(),l=new P.kp(),k=H.e(n.$2(0,225),"$iU")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(14,225),"$iU")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(15,225),"$iU")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(1,225),"$iU")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(2,235),"$iU")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(3,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(4,229),"$iU")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(5,229),"$iU")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(6,231),"$iU")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(7,231),"$iU")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.e(n.$2(8,8),"$iU"),"]",5)
k=H.e(n.$2(9,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(16,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(17,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(10,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(18,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(19,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(11,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(12,236),"$iU")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.e(n.$2(13,237),"$iU")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.e(n.$2(20,245),"$iU"),"az",21)
k=H.e(n.$2(21,245),"$iU")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mt:function(a,b,c,d,e){var u,t,s,r,q
H.m(e,"$ib",[P.p],"$ab")
u=$.n4()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.b.D(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
S:function S(){},
ay:function ay(a,b){this.a=a
this.b=b},
E:function E(){},
bD:function bD(a){this.a=a},
fZ:function fZ(){},
h_:function h_(){},
bE:function bE(){},
fz:function fz(){},
e2:function e2(){},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c8:function c8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hj:function hj(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j6:function j6(a){this.a=a},
j3:function j3(a){this.a=a},
cQ:function cQ(a){this.a=a},
fM:function fM(a){this.a=a},
hX:function hX(){},
ec:function ec(){},
fT:function fT(a){this.a=a},
eF:function eF(a){this.a=a},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(){},
p:function p(){},
i:function i(){},
b3:function b3(){},
b:function b(){},
I:function I(){},
L:function L(){},
ac:function ac(){},
X:function X(){},
av:function av(){},
f:function f(){},
ag:function ag(a){this.a=a},
jc:function jc(a){this.a=a},
j8:function j8(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a,b){this.a=a
this.b=b},
cb:function cb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kc:function kc(a,b){this.a=a
this.b=b},
kd:function kd(){},
kf:function kf(a,b){this.a=a
this.b=b},
ke:function ke(a){this.a=a},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
kn:function kn(){},
km:function km(a){this.a=a},
ko:function ko(){},
kp:function kp(){},
k1:function k1(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jB:function jB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oH:function(a){var u,t=J.T(a)
if(!!t.$ibm){u=t.ge2(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fg(a.data,a.height,a.width)},
oG:function(a){if(a instanceof P.fg)return{data:a.a,height:a.b,width:a.c}
return a},
br:function(a){var u,t,s,r,q
if(a==null)return
u=P.l5(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r){q=H.J(t[r])
u.n(0,q,a[q])}return u},
oF:function(a){var u={}
a.F(0,new P.kt(u))
return u},
k3:function k3(){},
k4:function k4(a,b){this.a=a
this.b=b},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
kt:function kt(a){this.a=a},
f8:function f8(a,b){this.a=a
this.b=b},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(){},
h9:function h9(){},
jR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oa:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jT:function jT(){},
aj:function aj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b6:function b6(){},
ho:function ho(){},
ba:function ba(){},
hV:function hV(){},
i1:function i1(){},
cN:function cN(){},
iy:function iy(){},
q:function q(){},
bd:function bd(){},
iS:function iS(){},
eK:function eK(){},
eL:function eL(){},
eV:function eV(){},
eW:function eW(){},
f6:function f6(){},
f7:function f7(){},
fe:function fe(){},
ff:function ff(){},
U:function U(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(a){this.a=a},
fE:function fE(){},
bT:function bT(){},
hW:function hW(){},
ey:function ey(){},
dz:function dz(){},
e5:function e5(){},
c9:function c9(){},
e7:function e7(){},
ee:function ee(){},
en:function en(){},
iq:function iq(){},
f2:function f2(){},
f3:function f3(){}},W={
lB:function(){var u=document.createElement("a")
return u},
kU:function(){var u=document.createElement("canvas")
return u},
nm:function(a,b,c){var u=document.body,t=(u&&C.x).am(u,a,b,c)
t.toString
u=W.D
u=new H.d7(new W.aq(t),H.n(new W.h1(),{func:1,ret:P.S,args:[u]}),[u])
return H.e(u.gaQ(u),"$iO")},
nn:function(a){H.e(a,"$ij")
return"wheel"},
cw:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ci(a)
t=u.geN(a)
if(typeof t==="string")r=u.geN(a)}catch(s){H.ai(s)}return r},
kZ:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
np:function(a){var u,t=document.createElement("input"),s=H.e(t,"$icB")
try{s.type=a}catch(u){H.ai(u)}return s},
jQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mh:function(a,b,c,d){var u=W.jQ(W.jQ(W.jQ(W.jQ(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.mx(new W.jF(c),W.o)
if(u!=null&&!0)J.n7(a,b,u,!1)
return new W.jE(a,b,u,!1,[e])},
mg:function(a){var u=W.lB(),t=window.location
u=new W.bP(new W.jY(u,t))
u.fe(a)
return u},
o8:function(a,b,c,d){H.e(a,"$iO")
H.J(b)
H.J(c)
H.e(d,"$ibP")
return!0},
o9:function(a,b,c,d){var u,t,s
H.e(a,"$iO")
H.J(b)
H.J(c)
u=H.e(d,"$ibP").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mi:function(){var u=P.f,t=P.lN(C.u,u),s=H.r(C.u,0),r=H.n(new W.k8(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.k7(t,P.dS(u),P.dS(u),P.dS(u),null)
t.fo(null,new H.hA(C.u,r,[s,u]),q,null)
return t},
mx:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a3
if(u===C.k)return a
return u.dY(a,b)},
x:function x(){},
fx:function fx(){},
dw:function dw(){},
fy:function fy(){},
co:function co(){},
bU:function bU(){},
by:function by(){},
bW:function bW(){},
cs:function cs(){},
bz:function bz(){},
cu:function cu(){},
fP:function fP(){},
Y:function Y(){},
cv:function cv(){},
fQ:function fQ(){},
b1:function b1(){},
b2:function b2(){},
fR:function fR(){},
fS:function fS(){},
fV:function fV(){},
aF:function aF(){},
fW:function fW(){},
dG:function dG(){},
dH:function dH(){},
fX:function fX(){},
fY:function fY(){},
jz:function jz(a,b){this.a=a
this.b=b},
O:function O(){},
h1:function h1(){},
o:function o(){},
j:function j(){},
aG:function aG(){},
cy:function cy(){},
h6:function h6(){},
ha:function ha(){},
aO:function aO(){},
hf:function hf(){},
c0:function c0(){},
bm:function bm(){},
c1:function c1(){},
cB:function cB(){},
b5:function b5(){},
dT:function dT(){},
hG:function hG(){},
cF:function cF(){},
hH:function hH(){},
hI:function hI(a){this.a=a},
hJ:function hJ(){},
hK:function hK(a){this.a=a},
aQ:function aQ(){},
hL:function hL(){},
a6:function a6(){},
aq:function aq(a){this.a=a},
D:function D(){},
cK:function cK(){},
aR:function aR(){},
i_:function i_(){},
ia:function ia(){},
ib:function ib(a){this.a=a},
id:function id(){},
aS:function aS(){},
io:function io(){},
aT:function aT(){},
ip:function ip(){},
aU:function aU(){},
is:function is(){},
it:function it(a){this.a=a},
aH:function aH(){},
bb:function bb(){},
ed:function ed(){},
iz:function iz(){},
iA:function iA(){},
cU:function cU(){},
aV:function aV(){},
aI:function aI(){},
iC:function iC(){},
iD:function iD(){},
iM:function iM(){},
aW:function aW(){},
aX:function aX(){},
iQ:function iQ(){},
iR:function iR(){},
bO:function bO(){},
jd:function jd(){},
jr:function jr(){},
bg:function bg(){},
d8:function d8(){},
d9:function d9(){},
jA:function jA(){},
eA:function eA(){},
jP:function jP(){},
eS:function eS(){},
k2:function k2(){},
k5:function k5(){},
jy:function jy(){},
jC:function jC(a){this.a=a},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
le:function le(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jE:function jE(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jF:function jF(a){this.a=a},
bP:function bP(a){this.a=a},
H:function H(){},
e1:function e1(a){this.a=a},
hT:function hT(a){this.a=a},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(){},
k_:function k_(){},
k0:function k0(){},
k7:function k7(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k8:function k8(){},
k6:function k6(){},
dK:function dK(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aB:function aB(){},
jY:function jY(a,b){this.a=a
this.b=b},
fj:function fj(a){this.a=a},
ki:function ki(a){this.a=a},
ez:function ez(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eT:function eT(){},
eU:function eU(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
dg:function dg(){},
dh:function dh(){},
f0:function f0(){},
f1:function f1(){},
f5:function f5(){},
f9:function f9(){},
fa:function fa(){},
di:function di(){},
dj:function dj(){},
fc:function fc(){},
fd:function fd(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){}},O={
kV:function(a){var u=new O.a4([a])
u.br(a)
return u},
a4:function a4(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cE:function cE(){this.b=this.a=null},
dW:function dW(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cD:function cD(){},
hC:function hC(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b7:function b7(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hE:function hE(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hF:function hF(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
e9:function e9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bN:function bN(){}},E={
lK:function(){var u=new E.an()
u.a=""
u.b=!0
u.sfd(0,O.kV(E.an))
u.y.b2(u.gjs(),u.gjv())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sc0(0,null)
return u},
nP:function(a,b){var u=new E.i6(a)
u.fa(a,b)
return u},
nT:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ibW)return E.m3(a,!0,!0,!0,!1)
u=W.kU()
t=u.style
t.width="100%"
t.height="100%"
s.gcA(a).h(0,u)
return E.m3(u,!0,!0,!0,!1)},
m3:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ej(),j=H.e(C.m.d2(a,"webgl2",P.nw(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic9")
if(j==null)H.t(P.v("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.nP(j,a)
u=new T.iI(j)
u.b=H.ah(j.getParameter(3379))
u.c=H.ah(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.eq(a)
t=new X.hn()
t.c=new X.aA(!1,!1,!1)
t.shW(P.dS(P.p))
u.b=t
t=new X.hM(u)
t.f=0
t.r=V.bp()
t.x=V.bp()
t.ch=t.Q=1
u.c=t
t=new X.hu(u)
t.r=0
t.x=V.bp()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iP(u)
t.f=V.bp()
t.r=V.bp()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfM(H.d([],[[P.cR,P.X]]))
t=u.z
s=document
r=W.a6
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a7(s,"contextmenu",H.n(u.ghh(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a7(a,"focus",H.n(u.ghn(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a7(a,"blur",H.n(u.ghb(),o),!1,p))
t=u.z
n=W.b5
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a7(s,"keyup",H.n(u.ghr(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a7(s,"keydown",H.n(u.ghp(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a7(a,"mousedown",H.n(u.ghv(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,"mouseup",H.n(u.ghz(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,l,H.n(u.ghx(),q),!1,r))
n=u.z
m=W.bg;(n&&C.a).h(n,W.a7(a,H.J(W.nn(a)),H.n(u.ghB(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a7(s,l,H.n(u.ghj(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a7(s,"mouseup",H.n(u.ghl(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a7(s,"pointerlockchange",H.n(u.ghD(),o),!1,p))
p=u.z
o=W.aX
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a7(a,"touchstart",H.n(u.ghT(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchend",H.n(u.ghP(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchmove",H.n(u.ghR(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.dL()
return k},
fH:function fH(){},
an:function an(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i6:function i6(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i7:function i7(a){this.a=a},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
ej:function ej(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iL:function iL(a){this.a=a}},Z={
ld:function(a,b,c){var u
H.m(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cc(c)),35044)
a.bindBuffer(b,null)
return new Z.ev(b,u)},
aJ:function(a){return new Z.bf(a)},
ev:function ev(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ew:function ew(a){this.a=a},
cr:function cr(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a){this.a=a}},D={
Q:function(){var u=new D.bZ()
u.sak(null)
u.saW(null)
u.c=null
u.d=0
return u},
fK:function fK(){},
bZ:function bZ(){var _=this
_.d=_.c=_.b=_.a=null},
h4:function h4(a){this.a=a},
h5:function h5(a){this.a=a},
A:function A(){this.b=null},
bH:function bH(a){this.b=null
this.$ti=a},
bI:function bI(a){this.b=null
this.$ti=a},
N:function N(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bC:function bC(){var _=this
_.d=_.c=_.b=_.a=null},
a8:function a8(){},
dR:function dR(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e4:function e4(){},
eb:function eb(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){}},X={dB:function dB(a,b){this.a=a
this.b=b},dQ:function dQ(a,b){this.a=a
this.b=b},hn:function hn(){var _=this
_.d=_.c=_.b=_.a=null},dU:function dU(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hu:function hu(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},bo:function bo(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hM:function hM(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cG:function cG(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i0:function i0(){},el:function el(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iP:function iP(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eq:function eq(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kY:function(a){var u=new X.hc(),t=new V.aN(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.m_
if(t==null){t=V.lZ(0,0,1,1)
$.m_=t}u.r=t
return u},
lS:function(a){var u,t,s=new X.e3()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().h(0,s.gfs())
t=new D.N("mover",u,s.b,[U.ae])
t.b=!0
s.aw(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.V().a)){s.c=1.0471975511965976
t=new D.N("fov",t,1.0471975511965976,[P.E])
t.b=!0
s.aw(t)}t=s.d
if(!(Math.abs(t-0.1)<$.V().a)){s.d=0.1
t=new D.N("near",t,0.1,[P.E])
t.b=!0
s.aw(t)}t=s.e
if(!(Math.abs(t-2000)<$.V().a)){s.e=2000
t=new D.N("far",t,2000,[P.E])
t.b=!0
s.aw(t)}return s},
bV:function bV(){},
hc:function hc(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hi:function hi(){this.b=this.a=null},
e3:function e3(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cT:function cT(){}},V={
p6:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.bo(a-b,u)
return(a<0?a+u:a)+b},
a_:function(a,b,c){if(a==null)return C.b.ao("null",c)
return C.b.ao(C.j.eQ(Math.abs(a-0)<$.V().a?0:a,b),c+b+1)},
ch:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.E],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.G)(a),++r){q=V.a_(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.b.ao(u[p],s))}return u},
lt:function(a){return C.j.jP(Math.pow(2,C.W.cL(Math.log(H.oE(a))/Math.log(2))))},
c4:function(){var u=$.lP
return u==null?$.lP=V.b8(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lO:function(a,b,c){var u=c.C(0,Math.sqrt(c.I(c))),t=b.bd(u),s=t.C(0,Math.sqrt(t.I(t))),r=u.bd(s),q=new V.W(a.a,a.b,a.c),p=s.U(0).I(q),o=r.U(0).I(q),n=u.U(0).I(q)
return V.b8(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bp:function(){var u=$.lU
return u==null?$.lU=new V.ab(0,0):u},
lV:function(){var u=$.cL
return u==null?$.cL=new V.ao(0,0,0):u},
lZ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e6(a,b,c,d)},
eu:function(){var u=$.md
return u==null?$.md=new V.W(0,0,0):u},
me:function(){var u=$.mc
return u==null?$.mc=new V.W(0,1,0):u},
o2:function(){var u=$.jh
return u==null?$.jh=new V.W(0,0,1):u},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h3:function h3(a){this.a=a},
dY:function dY(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
at:function at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e6:function e6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b){this.a=a
this.b=b},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.v("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.D(a,0)
t=C.b.D(b,0)
s=new V.i5()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.ie()
u.fb(a)
return u},
iO:function(){var u=new V.iN(),t=P.f
u.sig(new H.aP([t,V.cP]))
u.sij(new H.aP([t,V.cX]))
u.c=null
return u},
bk:function bk(){},
az:function az(){},
dV:function dV(){},
au:function au(){this.a=null},
i5:function i5(){this.b=this.a=null},
ie:function ie(){this.a=null},
cP:function cP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a){this.b=a
this.c=null},
iN:function iN(){this.c=this.b=this.a=null},
cY:function cY(a){this.b=a
this.a=this.c=null},
p1:function(a){P.nU(C.T,new V.kP(a))},
nR:function(a){var u=new V.ij()
u.fc(a,!0)
return u},
bA:function bA(){},
kP:function kP(a){this.a=a},
fU:function fU(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hd:function hd(a){var _=this
_.a=a
_.d=_.c=_.b=null},
he:function he(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hZ:function hZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i2:function i2(a){this.a=a
this.c=null},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(){this.b=this.a=null},
il:function il(a){this.a=a},
ik:function ik(a){this.a=a},
im:function im(a){this.a=a},
iE:function iE(a,b){this.a=a
this.c=null
this.d=b},
iG:function iG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iF:function iF(){}},U={
kW:function(){var u=new U.fL()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lG:function(a){var u=new U.dD()
u.a=a
return u},
fL:function fL(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){this.b=this.a=null},
cA:function cA(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ae:function ae(){},
er:function er(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
es:function es(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
et:function et(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dC:function dC(){var _=this
_.c=_.b=_.a=_.f=_.e=null},dE:function dE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},dI:function dI(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aC:function aC(){}},A={
nz:function(a,b){var u=a.ar,t=new A.dX(b,u)
t.da(b,u)
t.f9(a,b)
return t},
la:function(a,b,c,d,e){var u=new A.iW(a,c,e)
u.f=d
u.siv(P.nx(d,0,P.p))
return u},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
fA:function fA(a){this.a=a},
dX:function dX(a,b){var _=this
_.bB=_.e6=_.bA=_.ar=_.az=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.em=_.cF=_.el=_.bO=_.ek=_.ej=_.bN=_.bM=_.ei=_.eh=_.bL=_.bK=_.bJ=_.eg=_.ef=_.bI=_.ee=_.ed=_.bH=_.ec=_.eb=_.bG=_.bF=_.ea=_.e9=_.bE=_.bD=_.e8=_.e7=_.bC=null
_.cK=_.eq=_.cJ=_.ep=_.cI=_.eo=_.cH=_.en=_.cG=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hD:function hD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.az=b3
_.ar=b4
_.bA=b5},
cZ:function cZ(a,b){this.b=a
this.c=b},
d2:function d2(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
d0:function d0(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d3:function d3(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
d1:function d1(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
d4:function d4(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cO:function cO(){},
bY:function bY(a,b){this.a=a
this.b=b},
ea:function ea(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
em:function em(){},
j1:function j1(a){this.a=a},
R:function R(a,b,c){this.a=a
this.c=b
this.d=c},
iY:function iY(a,b,c){this.a=a
this.c=b
this.d=c},
iZ:function iZ(a,b,c){this.a=a
this.c=b
this.d=c},
j0:function j0(a,b,c){this.a=a
this.c=b
this.d=c},
iW:function iW(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a2:function a2(a,b,c){this.a=a
this.c=b
this.d=c},
iX:function iX(a,b,c){this.a=a
this.c=b
this.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
j_:function j_(a,b,c){this.a=a
this.c=b
this.d=c},
j2:function j2(a,b,c){this.a=a
this.c=b
this.d=c},
d_:function d_(a,b,c){this.a=a
this.c=b
this.d=c},
aw:function aw(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
ak:function ak(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kl:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dm:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.W(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.W(u+a3,t+a1,s+a2)
q=new V.W(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.W(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.kl(i)
l=F.kl(j.b)
k=F.p4(d,a0,new F.kk(j,F.kl(j.c),F.kl(j.d),l,m,c),b)
if(k!=null)a.jq(k)},
p4:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.aD,P.E,P.E]})
if(a<1)return
if(b<1)return
u=F.l8()
t=H.d([],[F.aD])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ji(g,g,new V.aN(p,0,0,1),g,g,new V.ab(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cC(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ji(g,g,new V.aN(j,i,h,1),g,g,new V.ab(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cC(d))}}u.d.iW(a+1,b+1,t)
return u},
cx:function(a,b,c){var u=new F.aa(),t=a.a
if(t==null)H.t(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.v("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.aa()
return u},
nu:function(a,b){var u=new F.bn(),t=a.a
if(t==null)H.t(P.v("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.v("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.aa()
return u},
l8:function(){var u=new F.e8(),t=new F.jj(u)
t.b=!1
t.siw(H.d([],[F.aD]))
u.a=t
t=new F.ii(u)
t.scl(H.d([],[F.bL]))
u.b=t
t=new F.ih(u)
t.sfT(H.d([],[F.bn]))
u.c=t
t=new F.ig(u)
t.sfN(H.d([],[F.aa]))
u.d=t
u.e=null
return u},
ji:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aD(),r=new F.jo()
r.scl(H.d([],[F.bL]))
s.b=r
r=new F.jn()
u=[F.bn]
r.sfU(H.d([],u))
r.sfV(H.d([],u))
s.c=r
r=new F.jk()
u=[F.aa]
r.sfO(H.d([],u))
r.sfP(H.d([],u))
r.sfQ(H.d([],u))
s.d=r
h=$.mZ()
s.e=0
r=$.aZ()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bu().a)!==0?e:t
s.x=(u&$.bt().a)!==0?b:t
s.y=(u&$.bv().a)!==0?f:t
s.z=(u&$.bw().a)!==0?g:t
s.Q=(u&$.n_().a)!==0?c:t
s.ch=(u&$.cm().a)!==0?i:0
s.cx=(u&$.bs().a)!==0?a:t
return s},
kk:function kk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aa:function aa(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bn:function bn(){this.b=this.a=null},
bL:function bL(){this.a=null},
e8:function e8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ig:function ig(a){this.a=a
this.b=null},
ih:function ih(a){this.a=a
this.b=null},
ii:function ii(a){this.a=a
this.b=null},
aD:function aD(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jq:function jq(a){this.a=a},
jp:function jp(a){this.a=a},
jj:function jj(a){this.a=a
this.c=this.b=null},
jk:function jk(){this.d=this.c=this.b=null},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(a,b){this.a=a
this.b=b},
jn:function jn(){this.c=this.b=null},
jo:function jo(){this.b=null}},T={cV:function cV(){},ef:function ef(){},iH:function iH(){var _=this
_.y=_.d=_.c=_.b=_.a=null},cW:function cW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iI:function iI(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},iK:function iK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},iJ:function iJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
mG:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7="bumpMaps",a8="controls",a9=34067,b0="modifiers",b1=V.nR("Test 015"),b2=W.kU()
b2.className="pageLargeCanvas"
b2.id=a5
b1.a.appendChild(b2)
u=[P.f]
b1.dV(H.d(["Test of Material Lighting shader with bump mapping, reflections, refractions."],u))
b1.iT(H.d(["bumpMaps","controls"],u))
b1.dV(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a5)
if(t==null)H.t(P.v("Failed to find an element with the identifier, testCanvas."))
s=E.nT(t,!0,!0,!0,!1)
r=X.kY(a6)
r.se0(0,!1)
q=E.lK()
p=F.l8()
F.dm(p,a6,a6,1,1,1,0,0,1)
F.dm(p,a6,a6,1,1,0,1,0,3)
F.dm(p,a6,a6,1,1,0,0,1,2)
F.dm(p,a6,a6,1,1,-1,0,0,0)
F.dm(p,a6,a6,1,1,0,-1,0,0)
F.dm(p,a6,a6,1,1,0,0,-1,3)
p.aH()
q.sc0(0,p)
o=s.f
n=o.a
m=n.createTexture()
n.bindTexture(a9,m)
n.texParameteri(a9,10242,10497)
n.texParameteri(a9,10243,10497)
n.texParameteri(a9,10241,9729)
n.texParameteri(a9,10240,9729)
n.bindTexture(a9,a6)
l=new T.cW()
l.a=0
l.b=m
l.c=!1
l.d=0
o.aU(l,m,"../resources/maskonaive/posx.jpg",34069,!1,!1)
o.aU(l,m,"../resources/maskonaive/negx.jpg",34070,!1,!1)
o.aU(l,m,"../resources/maskonaive/posy.jpg",34071,!1,!1)
o.aU(l,m,"../resources/maskonaive/negy.jpg",34072,!1,!1)
o.aU(l,m,"../resources/maskonaive/posz.jpg",34073,!1,!1)
o.aU(l,m,"../resources/maskonaive/negz.jpg",34074,!1,!1)
k=new O.dW()
k.sfB(O.kV(V.at))
k.e.b2(k.gh7(),k.gh9())
o=new O.b7(k,"emission")
o.c=C.d
o.f=new V.z(0,0,0)
k.f=o
o=new O.b7(k,"ambient")
o.c=C.d
o.f=new V.z(0,0,0)
k.r=o
o=new O.b7(k,"diffuse")
o.c=C.d
o.f=new V.z(0,0,0)
k.x=o
o=new O.b7(k,"invDiffuse")
o.c=C.d
o.f=new V.z(0,0,0)
k.y=o
o=new O.hF(k,"specular")
o.c=C.d
o.f=new V.z(0,0,0)
o.ch=100
k.z=o
o=new O.hC(k,"bump")
o.c=C.d
k.Q=o
k.ch=null
o=new O.b7(k,"reflect")
o.c=C.d
o.f=new V.z(0,0,0)
k.cx=o
o=new O.hE(k,"refract")
o.c=C.d
o.f=new V.z(0,0,0)
o.ch=1
k.cy=o
o=new O.hB(k,"alpha")
o.c=C.d
o.f=1
k.db=o
o=new D.dR()
o.br(D.a8)
o.sfK(H.d([],[D.bC]))
o.shV(H.d([],[D.e4]))
o.sie(H.d([],[D.eb]))
o.sis(H.d([],[D.eg]))
o.sit(H.d([],[D.eh]))
o.siu(H.d([],[D.ei]))
o.ch=o.Q=null
o.d4(o.gh5(),o.ghF(),o.ghJ())
k.dx=o
n=o.Q
o=n==null?o.Q=D.Q():n
o.h(0,k.gi2())
o=k.dx
n=o.ch
o=n==null?o.ch=D.Q():n
n=k.gaV()
o.h(0,n)
k.dy=null
o=k.dx
j=V.me()
i=U.lG(V.lO(V.lV(),j,new V.W(-1,-1,-1)))
h=new D.bC()
h.c=new V.z(1,1,1)
h.a=V.o2()
g=h.b
h.b=i
i.gq().h(0,h.gfg())
i=new D.N("mover",g,h.b,[U.ae])
i.b=!0
h.aB(i)
f=new V.z(1,1,1)
if(!h.c.v(0,f)){g=h.c
h.c=f
i=new D.N("color",g,f,[V.z])
i.b=!0
h.aB(i)}o.h(0,h)
o=k.r
o.st(0,new V.z(0.1,0.1,0.1))
o=k.x
o.st(0,new V.z(0.1,0.1,0.1))
k.z.st(0,new V.z(0,0,0))
o=k.z
if(o.c===C.d){o.c=C.i
o.bp()
o.bv(100)
i=o.a
i.a=null
i.P(a6)}o.bv(10)
o=k.ch
if(o!==l){if(o!=null)o.gq().W(0,n)
g=k.ch
k.ch=l
l.gq().h(0,n)
o=new D.N("environment",g,k.ch,[T.cW])
o.b=!0
k.P(o)}k.cy.saI(0.6)
o=k.cy
o.st(0,new V.z(0.2,0.3,1))
o=k.cx
o.st(0,new V.z(0.6,0.6,0.6))
e=new U.cA()
e.br(U.ae)
e.b2(e.gh3(),e.ghH())
e.e=null
e.f=V.c4()
e.r=0
o=s.r
n=new U.es()
i=U.kW()
i.sd1(0,!0)
i.scS(6.283185307179586)
i.scU(0)
i.saf(0,0)
i.scT(100)
i.sX(0)
i.scD(0.5)
n.b=i
h=n.gaS()
i.gq().h(0,h)
i=U.kW()
i.sd1(0,!0)
i.scS(6.283185307179586)
i.scU(0)
i.saf(0,0)
i.scT(100)
i.sX(0)
i.scD(0.5)
n.c=i
i.gq().h(0,h)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
d=new X.aA(!1,!1,!1)
g=n.d
n.d=d
i=[X.aA]
h=new D.N(b0,g,d,i)
h.b=!0
n.T(h)
h=n.f
if(h!==!1){n.f=!1
h=new D.N("invertX",h,!1,[P.S])
h.b=!0
n.T(h)}h=n.r
if(h!==!1){n.r=!1
h=new D.N("invertY",h,!1,[P.S])
h.b=!0
n.T(h)}n.bb(o)
e.h(0,n)
o=s.r
n=new U.er()
h=U.kW()
h.sd1(0,!0)
h.scS(6.283185307179586)
h.scU(0)
h.saf(0,0)
h.scT(100)
h.sX(0)
h.scD(0.2)
n.b=h
h.gq().h(0,n.gaS())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
d=new X.aA(!0,!1,!1)
g=n.c
n.c=d
h=new D.N(b0,g,d,i)
h.b=!0
n.T(h)
n.bb(o)
e.h(0,n)
o=s.r
n=new U.et()
n.c=0.01
n.e=n.d=0
d=new X.aA(!1,!1,!1)
n.b=d
i=new D.N(b0,a6,d,i)
i.b=!0
n.T(i)
n.bb(o)
e.h(0,n)
e.h(0,U.lG(V.b8(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.lS(e)
b=new M.dE()
b.sbc(a6)
b.sbj(0,a6)
b.sbk(a6)
o=E.lK()
p=F.l8()
n=p.a
i=new V.W(-1,-1,1)
i=i.C(0,Math.sqrt(i.I(i)))
a=n.bx(new V.bq(1,2,4,6),new V.aN(1,0,0,1),new V.ao(-1,-1,0),new V.ab(0,1),i,a6)
n=p.a
i=new V.W(1,-1,1)
i=i.C(0,Math.sqrt(i.I(i)))
a0=n.bx(new V.bq(0,3,4,6),new V.aN(0,0,1,1),new V.ao(1,-1,0),new V.ab(1,1),i,a6)
n=p.a
i=new V.W(1,1,1)
i=i.C(0,Math.sqrt(i.I(i)))
a1=n.bx(new V.bq(0,2,5,6),new V.aN(0,1,0,1),new V.ao(1,1,0),new V.ab(1,0),i,a6)
n=p.a
i=V.bp()
h=new V.W(-1,1,1)
h=h.C(0,Math.sqrt(h.I(h)))
a2=n.bx(new V.bq(0,2,4,7),new V.aN(1,1,0,1),new V.ao(-1,1,0),i,h,a6)
p.d.iV(H.d([a,a0,a1,a2],[F.aD]))
p.aH()
o.sc0(0,p)
b.d=o
b.e=null
o=new O.e9()
o.b=1.0471975511965976
o.d=new V.z(1,1,1)
g=o.c
o.c=l
l.gq().h(0,o.gaV())
n=new D.N("boxTexture",g,o.c,[T.cW])
n.b=!0
o.P(n)
b.sbk(o)
b.sbj(0,r)
b.sbc(c)
a3=new M.dI()
a3.sfE(0,O.kV(E.an))
a3.d.b2(a3.ghd(),a3.ghf())
a3.x=a3.r=a3.f=a3.e=null
a4=X.kY(a6)
a3.sbc(a6)
a3.sbj(0,a4)
a3.sbk(a6)
a3.sbc(c)
a3.sbk(k)
a3.sbj(0,r)
a3.d.h(0,q)
a3.b.se0(0,!1)
o=M.aC
n=H.d([b,a3],[o])
i=new M.dC()
i.br(o)
i.e=!1
i.f=null
i.b2(i.ghL(),i.ghN())
i.ad(0,n)
o=s.d
if(o!==i){if(o!=null)o.gq().W(0,s.gdd())
s.d=i
i.gq().h(0,s.gdd())
s.de()}o=new V.i2(a8)
n=u.getElementById(a8)
o.c=n
if(n==null)H.t("Failed to find controls for RadioGroup")
o.dT(0,"Silver",new B.kC(k),!0)
o.ae(0,"Gold",new B.kD(k))
o.ae(0,"Glass",new B.kE(k))
o.ae(0,"Blue Glass",new B.kF(k))
o.ae(0,"Water Bubble",new B.kG(k))
o.ae(0,"No Reflection",new B.kH(k))
o.ae(0,"Pink Distort",new B.kI(k))
o.ae(0,"Cloak",new B.kJ(k))
o.ae(0,"White and Shiny",new B.kK(k))
o=new V.iE(a7,new B.kL(k,s))
u=u.getElementById(a7)
o.c=u
if(u==null)H.t("Failed to find bumpMaps for Texture2DGroup")
o.ae(0,"../resources/BumpMap1.png",!0)
o.h(0,"../resources/BumpMap2.png")
o.h(0,"../resources/BumpMap3.png")
o.h(0,"../resources/BumpMap4.png")
o.h(0,"../resources/BumpMap5.png")
o.h(0,"../resources/ScrewBumpMap.png")
o.h(0,"../resources/CtrlPnlBumpMap.png")
u=s.z
if(u==null)u=s.z=D.Q()
o={func:1,ret:-1,args:[D.A]}
n=H.n(new B.kM(b1,k),o)
if(u.b==null)u.saW(H.d([],[o]))
u=u.b;(u&&C.a).h(u,n)
V.p1(s)},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a,b){this.a=a
this.b=b},
kM:function kM(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l3.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gJ:function(a){return H.cM(a)},
i:function(a){return"Instance of '"+H.c6(a)+"'"}}
J.hk.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iS:1}
J.dN.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dP.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.hY.prototype={}
J.d5.prototype={}
J.bJ.prototype={
i:function(a){var u=a[$.mN()]
if(u==null)return this.f4(a)
return"JavaScript function for "+H.l(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibF:1}
J.b4.prototype={
h:function(a,b){H.B(b,H.r(a,0))
if(!!a.fixed$length)H.t(P.K("add"))
a.push(b)},
W:function(a,b){var u
if(!!a.fixed$length)H.t(P.K("remove"))
for(u=0;u<a.length;++u)if(J.a9(a[u],b)){a.splice(u,1)
return!0}return!1},
ad:function(a,b){var u,t
H.m(b,"$ii",[H.r(a,0)],"$ai")
if(!!a.fixed$length)H.t(P.K("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.G)(b),++t)a.push(b[t])},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.b0(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.l(a[u]))
return t.join(b)},
jm:function(a){return this.m(a,"")},
jf:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.b0(a))}return t},
je:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.S,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.C(b.$1(s)))return s
if(a.length!==u)throw H.c(P.b0(a))}throw H.c(H.l0())},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
f1:function(a,b,c){if(b<0||b>a.length)throw H.c(P.af(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.af(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.r(a,0)])
return H.d(a.slice(b,c),[H.r(a,0)])},
gaA:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.l0())},
dX:function(a,b){var u,t
H.n(b,{func:1,ret:P.S,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.C(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.b0(a))}return!1},
Y:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a9(a[u],b))return!0
return!1},
i:function(a){return P.l_(a,"[","]")},
gV:function(a){return new J.as(a,a.length,[H.r(a,0)])},
gJ:function(a){return H.cM(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.K("set length"))
if(b<0)throw H.c(P.af(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cg(a,b))
return a[b]},
n:function(a,b,c){H.B(c,H.r(a,0))
if(!!a.immutable$list)H.t(P.K("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cg(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.l2.prototype={}
J.as.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.G(s))
u=t.c
if(u>=r){t.sdv(null)
return!1}t.sdv(s[u]);++t.c
return!0},
sdv:function(a){this.d=H.B(a,H.r(this,0))},
$ib3:1}
J.dO.prototype={
jP:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.K(""+a+".toInt()"))},
cL:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.K(""+a+".floor()"))},
as:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.K(""+a+".round()"))},
eQ:function(a,b){var u,t
if(b>20)throw H.c(P.af(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bm:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a3(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.K("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.B("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bo:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f8:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dQ(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.dQ(a,b)},
dQ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.K("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aY:function(a,b){var u
if(a>0)u=this.dP(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ic:function(a,b){if(b<0)throw H.c(H.bj(b))
return this.dP(a,b)},
dP:function(a,b){return b>31?0:a>>>b},
$iE:1,
$iac:1}
J.dM.prototype={$ip:1}
J.dL.prototype={}
J.c2.prototype={
a3:function(a,b){if(b<0)throw H.c(H.cg(a,b))
if(b>=a.length)H.t(H.cg(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.cg(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(typeof b!=="string")throw H.c(P.kS(b,null,null))
return a+b},
b0:function(a,b,c,d){var u,t
c=P.bM(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aj:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a7:function(a,b){return this.aj(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.bj(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Z()
if(b<0)throw H.c(P.i4(b,null))
if(b>c)throw H.c(P.i4(b,null))
if(c>a.length)throw H.c(P.i4(c,null))
return a.substring(b,c)},
av:function(a,b){return this.w(a,b,null)},
jS:function(a){return a.toLowerCase()},
B:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ao:function(a,b){var u=b-a.length
if(u<=0)return a
return this.B(" ",u)+a},
ez:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ey:function(a,b){return this.ez(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilR:1,
$if:1}
H.u.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a3(this.a,b)},
$ad6:function(){return[P.p]},
$ay:function(){return[P.p]},
$ai:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.h0.prototype={}
H.c3.prototype={
gV:function(a){var u=this
return new H.cC(u,u.gl(u),[H.al(u,"c3",0)])},
bY:function(a,b){return this.f3(0,H.n(b,{func:1,ret:P.S,args:[H.al(this,"c3",0)]}))}}
H.cC.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.dq(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.b0(s))
u=t.c
if(u>=q){t.sb4(null)
return!1}t.sb4(r.L(s,u));++t.c
return!0},
sb4:function(a){this.d=H.B(a,H.r(this,0))},
$ib3:1}
H.hy.prototype={
gV:function(a){return new H.hz(J.bx(this.a),this.b,this.$ti)},
gl:function(a){return J.aE(this.a)},
L:function(a,b){return this.b.$1(J.fw(this.a,b))},
$ai:function(a,b){return[b]}}
H.hz.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.sb4(u.c.$1(t.gK(t)))
return!0}u.sb4(null)
return!1},
gK:function(a){return this.a},
sb4:function(a){this.a=H.B(a,H.r(this,1))},
$ab3:function(a,b){return[b]}}
H.hA.prototype={
gl:function(a){return J.aE(this.a)},
L:function(a,b){return this.b.$1(J.fw(this.a,b))},
$ac3:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d7.prototype={
gV:function(a){return new H.js(J.bx(this.a),this.b,this.$ti)}}
H.js.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.C(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.c_.prototype={}
H.d6.prototype={
n:function(a,b,c){H.B(c,H.al(this,"d6",0))
throw H.c(P.K("Cannot modify an unmodifiable list"))}}
H.eo.prototype={}
H.fN.prototype={
i:function(a){return P.l7(this)},
n:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
return H.nj()},
$iI:1}
H.fO.prototype={
gl:function(a){return this.a},
by:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.by(0,b))return
return this.dw(b)},
dw:function(a){return this.b[H.J(a)]},
F:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.B(q.dw(r),p))}}}
H.iT.prototype={
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
H.hU.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hm.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.j5.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kQ.prototype={
$1:function(a){if(!!J.T(a).$ibE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.f4.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iav:1}
H.ct.prototype={
i:function(a){return"Closure '"+H.c6(this).trim()+"'"},
$ibF:1,
gjT:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iB.prototype={}
H.ir.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cl(u)+"'"}}
H.cp.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cp))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cM(this.a)
else u=typeof t!=="object"?J.dv(t):H.cM(t)
return(u^H.cM(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c6(u)+"'")}}
H.iV.prototype={
i:function(a){return this.a}}
H.fJ.prototype={
i:function(a){return this.a}}
H.ic.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.jt.prototype={
i:function(a){return"Assertion failed: "+P.dJ(this.a)}}
H.aP.prototype={
gl:function(a){return this.a},
gjl:function(a){return this.a===0},
ga9:function(a){return new H.hq(this,[H.r(this,0)])},
by:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.ds(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.ds(t,b)}else return s.ji(b)},
ji:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cO(u.c8(t,u.cN(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bs(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bs(r,b)
s=t==null?null:t.b
return s}else return q.jj(b)},
jj:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.c8(r,s.cN(a))
t=s.cO(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s=this
H.B(b,H.r(s,0))
H.B(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.dh(u==null?s.b=s.cj():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.dh(t==null?s.c=s.cj():t,b,c)}else s.jk(b,c)},
jk:function(a,b){var u,t,s,r,q=this
H.B(a,H.r(q,0))
H.B(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.cj()
t=q.cN(a)
s=q.c8(u,t)
if(s==null)q.cp(u,t,[q.ck(a,b)])
else{r=q.cO(s,a)
if(r>=0)s[r].b=b
else s.push(q.ck(a,b))}},
F:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.b0(s))
u=u.c}},
dh:function(a,b,c){var u,t=this
H.B(b,H.r(t,0))
H.B(c,H.r(t,1))
u=t.bs(a,b)
if(u==null)t.cp(a,b,t.ck(b,c))
else u.b=c},
h0:function(){this.r=this.r+1&67108863},
ck:function(a,b){var u,t=this,s=new H.hp(H.B(a,H.r(t,0)),H.B(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.h0()
return s},
cN:function(a){return J.dv(a)&0x3ffffff},
cO:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a9(a[t].a,b))return t
return-1},
i:function(a){return P.l7(this)},
bs:function(a,b){return a[b]},
c8:function(a,b){return a[b]},
cp:function(a,b,c){a[b]=c},
fJ:function(a,b){delete a[b]},
ds:function(a,b){return this.bs(a,b)!=null},
cj:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cp(t,u,t)
this.fJ(t,u)
return t}}
H.hp.prototype={}
H.hq.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.hr(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hr.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b0(t))
else{t=u.c
if(t==null){u.sdg(null)
return!1}else{u.sdg(t.a)
u.c=u.c.c
return!0}}},
sdg:function(a){this.d=H.B(a,H.r(this,0))},
$ib3:1}
H.kx.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.ky.prototype={
$2:function(a,b){return this.a(a,b)},
$S:34}
H.kz.prototype={
$1:function(a){return this.a(H.J(a))},
$S:33}
H.hl.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilR:1,
$inN:1}
H.cH.prototype={$icH:1}
H.bK.prototype={$ibK:1,$inV:1}
H.dZ.prototype={
gl:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cI.prototype={
j:function(a,b){H.bi(b,a,a.length)
return a[b]},
n:function(a,b,c){H.oJ(c)
H.bi(b,a,a.length)
a[b]=c},
$ac_:function(){return[P.E]},
$ay:function(){return[P.E]},
$ii:1,
$ai:function(){return[P.E]},
$ib:1,
$ab:function(){return[P.E]}}
H.e_.prototype={
n:function(a,b,c){H.ah(c)
H.bi(b,a,a.length)
a[b]=c},
$ac_:function(){return[P.p]},
$ay:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hN.prototype={
j:function(a,b){H.bi(b,a,a.length)
return a[b]}}
H.hO.prototype={
j:function(a,b){H.bi(b,a,a.length)
return a[b]}}
H.hP.prototype={
j:function(a,b){H.bi(b,a,a.length)
return a[b]}}
H.hQ.prototype={
j:function(a,b){H.bi(b,a,a.length)
return a[b]}}
H.hR.prototype={
j:function(a,b){H.bi(b,a,a.length)
return a[b]}}
H.e0.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bi(b,a,a.length)
return a[b]},
$ipr:1}
H.cJ.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bi(b,a,a.length)
return a[b]},
$icJ:1,
$iU:1}
H.dc.prototype={}
H.dd.prototype={}
H.de.prototype={}
H.df.prototype={}
P.jv.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:28}
P.ju.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:37}
P.jw.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jx.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fb.prototype={
fp:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cf(new P.ka(this,b),0),a)
else throw H.c(P.K("`setTimeout()` not found."))},
fq:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cf(new P.k9(this,a,Date.now(),b),0),a)
else throw H.c(P.K("Periodic timer."))},
$ibc:1}
P.ka.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.k9.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.f8(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bh.prototype={
jp:function(a){if(this.c!==6)return!0
return this.b.b.d_(H.n(this.d,{func:1,ret:P.S,args:[P.X]}),a.a,P.S,P.X)},
jh:function(a){var u=this.e,t=P.X,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fu(u,{func:1,args:[P.X,P.av]}))return H.lq(r.jK(u,a.a,a.b,null,t,P.av),s)
else return H.lq(r.d_(H.n(u,{func:1,args:[P.X]}),a.a,null,t),s)}}
P.aK.prototype={
eP:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a3
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.ow(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aK($.a3,[c])
s=b==null?1:3
this.di(new P.bh(t,s,a,b,[r,c]))
return t},
jO:function(a,b){return this.eP(a,null,b)},
di:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$ibh")
t.c=a}else{if(s===2){u=H.e(t.c,"$iaK")
s=u.a
if(s<4){u.di(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.ks(null,null,s,H.n(new P.jG(t,a),{func:1,ret:-1}))}},
dJ:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$ibh")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iaK")
u=q.a
if(u<4){q.dJ(a)
return}p.a=u
p.c=q.c}o.a=p.bt(a)
u=p.b
u.toString
P.ks(null,null,u,H.n(new P.jK(o,p),{func:1,ret:-1}))}},
cn:function(){var u=H.e(this.c,"$ibh")
this.c=null
return this.bt(u)},
bt:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dm:function(a){var u,t,s=this,r=H.r(s,0)
H.lq(a,{futureOr:1,type:r})
u=s.$ti
if(H.ln(a,"$icz",u,"$acz"))if(H.ln(a,"$iaK",u,null))P.mf(a,s)
else P.o7(a,s)
else{t=s.cn()
H.B(a,r)
s.a=4
s.c=a
P.da(s,t)}},
dn:function(a,b){var u,t=this
H.e(b,"$iav")
u=t.cn()
t.a=8
t.c=new P.am(a,b)
P.da(t,u)},
$icz:1}
P.jG.prototype={
$0:function(){P.da(this.a,this.b)},
$S:0}
P.jK.prototype={
$0:function(){P.da(this.b,this.a.a)},
$S:0}
P.jH.prototype={
$1:function(a){var u=this.a
u.a=0
u.dm(a)},
$S:28}
P.jI.prototype={
$2:function(a,b){H.e(b,"$iav")
this.a.dn(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.jJ.prototype={
$0:function(){this.a.dn(this.b,this.c)},
$S:0}
P.jN.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eM(H.n(s.d,{func:1}),null)}catch(r){u=H.ai(r)
t=H.cj(r)
if(o.d){s=H.e(o.a.a.c,"$iam").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$iam")
else q.b=new P.am(u,t)
q.a=!0
return}if(!!J.T(n).$icz){if(n instanceof P.aK&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$iam")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jO(new P.jO(p),null)
s.a=!1}},
$S:3}
P.jO.prototype={
$1:function(a){return this.a},
$S:52}
P.jM.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.B(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.d_(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ai(o)
t=H.cj(o)
s=n.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jL.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$iam")
r=m.c
if(H.C(r.jp(u))&&r.e!=null){q=m.b
q.b=r.jh(u)
q.a=!1}}catch(p){t=H.ai(p)
s=H.cj(p)
r=H.e(m.a.a.c,"$iam")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.ex.prototype={}
P.iu.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aK($.a3,[P.p])
r.a=0
u=H.r(s,0)
t=H.n(new P.iw(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.ix(r,q),{func:1,ret:-1})
W.a7(s.a,s.b,t,!1,u)
return q}}
P.iw.prototype={
$1:function(a){H.B(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.r(this.b,0)]}}}
P.ix.prototype={
$0:function(){this.b.dm(this.a.a)},
$S:0}
P.cR.prototype={}
P.iv.prototype={}
P.bc.prototype={}
P.am.prototype={
i:function(a){return H.l(this.a)},
$ibE:1}
P.kj.prototype={$ipG:1}
P.kr.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e2():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jU.prototype={
jL:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a3){a.$0()
return}P.mr(r,r,this,a,-1)}catch(s){u=H.ai(s)
t=H.cj(s)
P.kq(r,r,this,u,H.e(t,"$iav"))}},
jM:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.k===$.a3){a.$1(b)
return}P.ms(r,r,this,a,b,-1,c)}catch(s){u=H.ai(s)
t=H.cj(s)
P.kq(r,r,this,u,H.e(t,"$iav"))}},
j0:function(a,b){return new P.jW(this,H.n(a,{func:1,ret:b}),b)},
cu:function(a){return new P.jV(this,H.n(a,{func:1,ret:-1}))},
dY:function(a,b){return new P.jX(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eM:function(a,b){H.n(a,{func:1,ret:b})
if($.a3===C.k)return a.$0()
return P.mr(null,null,this,a,b)},
d_:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a3===C.k)return a.$1(b)
return P.ms(null,null,this,a,b,c,d)},
jK:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a3===C.k)return a.$2(b,c)
return P.ox(null,null,this,a,b,c,d,e,f)}}
P.jW.prototype={
$0:function(){return this.a.eM(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jV.prototype={
$0:function(){return this.a.jL(this.b)},
$S:3}
P.jX.prototype={
$1:function(a){var u=this.c
return this.a.jM(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jS.prototype={
gV:function(a){var u=this,t=new P.eM(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
Y:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$ica")!=null}else{t=this.fF(b)
return t}},
fF:function(a){var u=this.d
if(u==null)return!1
return this.c6(this.dz(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dj(u==null?s.b=P.lf():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dj(t==null?s.c=P.lf():t,b)}else return s.fu(0,b)},
fu:function(a,b){var u,t,s,r=this
H.B(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.lf()
t=r.dq(b)
s=u[t]
if(s==null)u[t]=[r.c3(b)]
else{if(r.c6(s,b)>=0)return!1
s.push(r.c3(b))}return!0},
W:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hZ(this.c,b)
else return this.hY(0,b)},
hY:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dz(r,b)
t=s.c6(u,b)
if(t<0)return!1
s.dR(u.splice(t,1)[0])
return!0},
dj:function(a,b){H.B(b,H.r(this,0))
if(H.e(a[b],"$ica")!=null)return!1
a[b]=this.c3(b)
return!0},
hZ:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$ica")
if(u==null)return!1
this.dR(u)
delete a[b]
return!0},
dl:function(){this.r=1073741823&this.r+1},
c3:function(a){var u,t=this,s=new P.ca(H.B(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dl()
return s},
dR:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dl()},
dq:function(a){return J.dv(a)&1073741823},
dz:function(a,b){return a[this.dq(b)]},
c6:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a9(a[t].a,b))return t
return-1}}
P.ca.prototype={}
P.eM.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b0(t))
else{t=u.c
if(t==null){u.sdk(null)
return!1}else{u.sdk(H.B(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
sdk:function(a){this.d=H.B(a,H.r(this,0))},
$ib3:1}
P.hs.prototype={
$2:function(a,b){this.a.n(0,H.B(a,this.b),H.B(b,this.c))},
$S:5}
P.ht.prototype={$ii:1,$ib:1}
P.y.prototype={
gV:function(a){return new H.cC(a,this.gl(a),[H.bR(this,a,"y",0)])},
L:function(a,b){return this.j(a,b)},
F:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bR(s,a,"y",0)]})
u=s.gl(a)
for(t=0;t<u;++t){b.$1(s.j(a,t))
if(u!==s.gl(a))throw H.c(P.b0(a))}},
jR:function(a,b){var u,t=this,s=H.d([],[H.bR(t,a,"y",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.n(s,u,t.j(a,u))
return s},
jQ:function(a){return this.jR(a,!0)},
jc:function(a,b,c,d){var u
H.B(d,H.bR(this,a,"y",0))
P.bM(b,c,this.gl(a))
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.l_(a,"[","]")}}
P.hv.prototype={}
P.hw.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:5}
P.ad.prototype={
F:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bR(s,a,"ad",0),H.bR(s,a,"ad",1)]})
for(u=J.bx(s.ga9(a));u.A();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aE(this.ga9(a))},
i:function(a){return P.l7(a)},
$iI:1}
P.kb.prototype={
n:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
throw H.c(P.K("Cannot modify unmodifiable map"))}}
P.hx.prototype={
j:function(a,b){return J.ly(this.a,b)},
n:function(a,b,c){J.kR(this.a,H.B(b,H.r(this,0)),H.B(c,H.r(this,1)))},
F:function(a,b){J.lz(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gl:function(a){return J.aE(this.a)},
i:function(a){return J.ar(this.a)},
$iI:1}
P.ep.prototype={}
P.jZ.prototype={
ad:function(a,b){var u
for(u=J.bx(H.m(b,"$ii",this.$ti,"$ai"));u.A();)this.h(0,u.gK(u))},
i:function(a){return P.l_(this,"{","}")},
L:function(a,b){var u,t,s,r=this
P.lY(b,"index")
for(u=P.ob(r,r.r,H.r(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.c(P.a0(b,r,"index",null,t))},
$ii:1,
$im0:1}
P.eN.prototype={}
P.fh.prototype={}
P.fF.prototype={
jr:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bM(a0,a1,b.length)
u=$.n1()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kw(C.b.D(b,n))
j=H.kw(C.b.D(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.b.a3("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ag("")
g=r.a+=C.b.w(b,s,t)
r.a=g+H.c7(m)
s=n
continue}}throw H.c(P.a5("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.w(b,s,a1)
f=g.length
if(q>=0)P.lC(b,p,a1,q,o,f)
else{e=C.f.bo(f-1,4)+1
if(e===1)throw H.c(P.a5(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b0(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lC(b,p,a1,q,o,d)
else{e=C.f.bo(d,4)
if(e===1)throw H.c(P.a5(c,b,a1))
if(e>1)b=C.b.b0(b,a1,a1,e===2?"==":"=")}return b},
$abX:function(){return[[P.b,P.p],P.f]}}
P.fG.prototype={
$abB:function(){return[[P.b,P.p],P.f]}}
P.bX.prototype={}
P.bB.prototype={}
P.h2.prototype={
$abX:function(){return[P.f,[P.b,P.p]]}}
P.hh.prototype={
i:function(a){return this.a}}
P.hg.prototype={
fG:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ag("")
if(r>b)q.a+=C.b.w(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nc(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abB:function(){return[P.f,P.f]}}
P.je.prototype={
gjb:function(){return C.R}}
P.jg.prototype={
cB:function(a){var u,t,s=P.bM(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kh(u)
if(t.fR(a,0,s)!==s)t.dS(J.n8(a,s-1),0)
return new Uint8Array(u.subarray(0,H.or(0,t.b,u.length)))},
$abB:function(){return[P.f,[P.b,P.p]]}}
P.kh.prototype={
dS:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fR:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a3(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dS(r,C.b.D(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jf.prototype={
cB:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.p],"$ab")
u=P.nY(!1,a,0,null)
if(u!=null)return u
t=P.bM(0,null,J.aE(a))
s=P.mu(a,0,t)
if(s>0){r=P.cS(a,0,s)
if(s===t)return r
q=new P.ag(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ag("")
n=new P.kg(!1,q)
n.c=o
n.j3(a,p,t)
if(n.e>0){H.t(P.a5("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c7(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abB:function(){return[[P.b,P.p],P.f]}}
P.kg.prototype={
j3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dq(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bZ()
if((o&192)!==128){n=P.a5(h+C.f.bm(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.h(C.A,n)
if(u<=C.A[n]){n=P.a5("Overlong encoding of 0x"+C.f.bm(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a5("Character outside valid Unicode range: 0x"+C.f.bm(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c7(u)
i.c=!1}for(n=p<c;n;){m=P.mu(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cS(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.Z()
if(o<0){j=P.a5("Negative UTF-8 code unit: -0x"+C.f.bm(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a5(h+C.f.bm(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.S.prototype={}
P.ay.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.f.aY(u,30))&1073741823},
i:function(a){var u=this,t=P.nk(H.nJ(u)),s=P.dF(H.nH(u)),r=P.dF(H.nD(u)),q=P.dF(H.nE(u)),p=P.dF(H.nG(u)),o=P.dF(H.nI(u)),n=P.nl(H.nF(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.E.prototype={}
P.bD.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.bD&&this.a===b.a},
gJ:function(a){return C.f.gJ(this.a)},
i:function(a){var u,t,s,r=new P.h_(),q=this.a
if(q<0)return"-"+new P.bD(0-q).i(0)
u=r.$1(C.f.a8(q,6e7)%60)
t=r.$1(C.f.a8(q,1e6)%60)
s=new P.fZ().$1(q%1e6)
return""+C.f.a8(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.fZ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:27}
P.h_.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:27}
P.bE.prototype={}
P.fz.prototype={
i:function(a){return"Assertion failed"}}
P.e2.prototype={
i:function(a){return"Throw of null."}}
P.aM.prototype={
gc5:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc4:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gc5()+o+u
if(!q.a)return t
s=q.gc4()
r=P.dJ(q.b)
return t+s+": "+r}}
P.c8.prototype={
gc5:function(){return"RangeError"},
gc4:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.hj.prototype={
gc5:function(){return"RangeError"},
gc4:function(){var u,t=H.ah(this.b)
if(typeof t!=="number")return t.Z()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gl:function(a){return this.f}}
P.j6.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j3.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cQ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fM.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dJ(u)+"."}}
P.hX.prototype={
i:function(a){return"Out of Memory"},
$ibE:1}
P.ec.prototype={
i:function(a){return"Stack Overflow"},
$ibE:1}
P.fT.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eF.prototype={
i:function(a){return"Exception: "+this.a}}
P.hb.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.w(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.D(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.a3(f,q)
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
k=""}j=C.b.w(f,m,n)
return h+l+j+k+"\n"+C.b.B(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.l(g)+")"):h}}
P.bF.prototype={}
P.p.prototype={}
P.i.prototype={
bY:function(a,b){var u=H.al(this,"i",0)
return new H.d7(this,H.n(b,{func:1,ret:P.S,args:[u]}),[u])},
gl:function(a){var u,t=this.gV(this)
for(u=0;t.A();)++u
return u},
gaQ:function(a){var u,t=this.gV(this)
if(!t.A())throw H.c(H.l0())
u=t.gK(t)
if(t.A())throw H.c(H.nr())
return u},
L:function(a,b){var u,t,s
P.lY(b,"index")
for(u=this.gV(this),t=0;u.A();){s=u.gK(u)
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
i:function(a){return P.nq(this,"(",")")}}
P.b3.prototype={}
P.b.prototype={$ii:1}
P.I.prototype={}
P.L.prototype={
gJ:function(a){return P.X.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.X.prototype={constructor:P.X,$iX:1,
v:function(a,b){return this===b},
gJ:function(a){return H.cM(this)},
i:function(a){return"Instance of '"+H.c6(this)+"'"},
toString:function(){return this.i(this)}}
P.av.prototype={}
P.f.prototype={$ilR:1}
P.ag.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipf:1}
P.jc.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.m(a,"$iI",[r,r],"$aI")
H.J(b)
u=J.dr(b).ey(b,"=")
if(u===-1){if(b!=="")J.kR(a,P.lh(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.w(b,0,u)
s=C.b.av(b,u+1)
r=this.a
J.kR(a,P.lh(t,0,t.length,r,!0),P.lh(s,0,s.length,r,!0))}return a},
$S:42}
P.j8.prototype={
$2:function(a,b){throw H.c(P.a5("Illegal IPv4 address, "+a,this.a,b))},
$S:45}
P.ja.prototype={
$2:function(a,b){throw H.c(P.a5("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jb.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.ds(C.b.w(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:39}
P.cb.prototype={
geV:function(){return this.b},
gcM:function(a){var u=this.c
if(u==null)return""
if(C.b.a7(u,"["))return C.b.w(u,1,u.length-1)
return u},
gbR:function(a){var u=this.d
if(u==null)return P.mj(this.a)
return u},
gcY:function(a){var u=this.f
return u==null?"":u},
ges:function(){var u=this.r
return u==null?"":u},
cZ:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$iI",[P.f,null],"$aI")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a7(p,"/"))p="/"+p
n=P.lg(null,0,0,b)
return new P.cb(u,s,q,r,p,n,m.r)},
gbi:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.shX(new P.ep(P.m9(u==null?"":u),[t,t]))}return s.Q},
geu:function(){return this.c!=null},
gex:function(){return this.f!=null},
gev:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.l(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.l(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.l(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.T(b).$ilb)if(s.a==b.gc_())if(s.c!=null===b.geu())if(s.b==b.geV())if(s.gcM(s)==b.gcM(b))if(s.gbR(s)==b.gbR(b))if(s.e===b.geJ(b)){u=s.f
t=u==null
if(!t===b.gex()){if(t)u=""
if(u===b.gcY(b)){u=s.r
t=u==null
if(!t===b.gev()){if(t)u=""
u=u===b.ges()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.b.gJ(this.i(0)):u},
shX:function(a){var u=P.f
this.Q=H.m(a,"$iI",[u,u],"$aI")},
$ilb:1,
gc_:function(){return this.a},
geJ:function(a){return this.e}}
P.kc.prototype={
$1:function(a){throw H.c(P.a5("Invalid port",this.a,this.b+1))},
$S:22}
P.kd.prototype={
$1:function(a){return P.fi(C.a0,a,C.l,!1)},
$S:16}
P.kf.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.fi(C.r,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.fi(C.r,b,C.l,!0))}},
$S:14}
P.ke.prototype={
$2:function(a,b){var u,t
H.J(a)
if(b==null||typeof b==="string")this.a.$2(a,H.J(b))
else for(u=J.bx(H.mF(b,"$ii")),t=this.a;u.A();)t.$2(a,H.J(u.gK(u)))},
$S:43}
P.j7.prototype={
geU:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.h(o,0)
u=q.a
o=o[0]+1
t=C.b.ez(u,"?",o)
s=u.length
if(t>=0){r=P.dl(u,t+1,s,C.p,!1)
s=t}else r=p
return q.c=new P.jB("data",p,p,p,P.dl(u,o,s,C.E,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.h(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kn.prototype={
$1:function(a){return new Uint8Array(96)},
$S:41}
P.km.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.n9(u,0,96,b)
return u},
$S:40}
P.ko.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.D(b,s)^96
if(r>=t)return H.h(a,r)
a[r]=c}}}
P.kp.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.D(b,0),t=C.b.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.h(a,r)
a[r]=c}}}
P.k1.prototype={
geu:function(){return this.c>0},
gew:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.H()
t=this.e
if(typeof t!=="number")return H.F(t)
t=u+1<t
u=t}else u=!1
return u},
gex:function(){var u=this.f
if(typeof u!=="number")return u.Z()
return u<this.r},
gev:function(){return this.r<this.a.length},
gdB:function(){return this.b===4&&C.b.a7(this.a,"http")},
gdC:function(){return this.b===5&&C.b.a7(this.a,"https")},
gc_:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdB())q=t.x="http"
else if(t.gdC()){t.x="https"
q="https"}else if(q===4&&C.b.a7(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a7(t.a,r)){t.x=r
q=r}else{q=C.b.w(t.a,0,q)
t.x=q}return q},
geV:function(){var u=this.c,t=this.b+3
return u>t?C.b.w(this.a,t,u-1):""},
gcM:function(a){var u=this.c
return u>0?C.b.w(this.a,u,this.d):""},
gbR:function(a){var u,t=this
if(t.gew()){u=t.d
if(typeof u!=="number")return u.H()
return P.ds(C.b.w(t.a,u+1,t.e),null,null)}if(t.gdB())return 80
if(t.gdC())return 443
return 0},
geJ:function(a){return C.b.w(this.a,this.e,this.f)},
gcY:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.Z()
return u<t?C.b.w(this.a,u+1,t):""},
ges:function(){var u=this.r,t=this.a
return u<t.length?C.b.av(t,u+1):""},
gbi:function(){var u=this,t=u.f
if(typeof t!=="number")return t.Z()
if(t>=u.r)return C.a1
t=P.f
return new P.ep(P.m9(u.gcY(u)),[t,t])},
cZ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$iI",[P.f,null],"$aI")
u=k.gc_()
t=u==="file"
s=k.c
r=s>0?C.b.w(k.a,k.b+3,s):""
q=k.gew()?k.gbR(k):j
s=k.c
if(s>0)p=C.b.w(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.w(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a7(o,"/"))o="/"+o
m=P.lg(j,0,0,b)
n=k.r
l=n<s.length?C.b.av(s,n+1):j
return new P.cb(u,r,p,q,o,m,l)},
gJ:function(a){var u=this.y
return u==null?this.y=C.b.gJ(this.a):u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ilb&&this.a===b.i(0)},
i:function(a){return this.a},
$ilb:1}
P.jB.prototype={}
W.x.prototype={}
W.fx.prototype={
gl:function(a){return a.length}}
W.dw.prototype={
i:function(a){return String(a)},
$idw:1}
W.fy.prototype={
i:function(a){return String(a)}}
W.co.prototype={$ico:1}
W.bU.prototype={$ibU:1}
W.by.prototype={$iby:1}
W.bW.prototype={
d2:function(a,b,c){if(c!=null)return a.getContext(b,P.oF(c))
return a.getContext(b)},
eX:function(a,b){return this.d2(a,b,null)},
$ibW:1}
W.cs.prototype={$ics:1}
W.bz.prototype={
gl:function(a){return a.length}}
W.cu.prototype={$icu:1}
W.fP.prototype={
gl:function(a){return a.length}}
W.Y.prototype={$iY:1}
W.cv.prototype={
gl:function(a){return a.length}}
W.fQ.prototype={}
W.b1.prototype={}
W.b2.prototype={}
W.fR.prototype={
gl:function(a){return a.length}}
W.fS.prototype={
gl:function(a){return a.length}}
W.fV.prototype={
gl:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.fW.prototype={
i:function(a){return String(a)}}
W.dG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.m(c,"$iaj",[P.ac],"$aaj")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.aj,P.ac]]},
$ay:function(){return[[P.aj,P.ac]]},
$ii:1,
$ai:function(){return[[P.aj,P.ac]]},
$ib:1,
$ab:function(){return[[P.aj,P.ac]]},
$aH:function(){return[[P.aj,P.ac]]}}
W.dH.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaP(a))+" x "+H.l(this.gaK(a))},
v:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iaj)return!1
return a.left===u.gbP(b)&&a.top===u.gbV(b)&&this.gaP(a)===u.gaP(b)&&this.gaK(a)===u.gaK(b)},
gJ:function(a){return W.mh(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(this.gaP(a)),C.j.gJ(this.gaK(a)))},
gdZ:function(a){return a.bottom},
gaK:function(a){return a.height},
gbP:function(a){return a.left},
gbU:function(a){return a.right},
gbV:function(a){return a.top},
gaP:function(a){return a.width},
$iaj:1,
$aaj:function(){return[P.ac]}}
W.fX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.J(c)
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.f]},
$ay:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aH:function(){return[P.f]}}
W.fY.prototype={
gl:function(a){return a.length}}
W.jz.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.e(u[b],"$iO")},
n:function(a,b,c){var u
H.e(c,"$iO")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.jQ(this)
return new J.as(u,u.length,[H.r(u,0)])},
$ay:function(){return[W.O]},
$ai:function(){return[W.O]},
$ab:function(){return[W.O]}}
W.O.prototype={
gj_:function(a){return new W.jC(a)},
gcA:function(a){return new W.jz(a,a.children)},
ge1:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.aj(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
am:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lJ
if(u==null){u=H.d([],[W.aB])
t=new W.e1(u)
C.a.h(u,W.mg(null))
C.a.h(u,W.mi())
$.lJ=t
d=t}else d=u
u=$.lI
if(u==null){u=new W.fj(d)
$.lI=u
c=u}else{u.a=d
c=u}}if($.bl==null){u=document
t=u.implementation.createHTMLDocument("")
$.bl=t
$.kX=t.createRange()
t=$.bl.createElement("base")
H.e(t,"$ico")
t.href=u.baseURI
$.bl.head.appendChild(t)}u=$.bl
if(u.body==null){t=u.createElement("body")
u.body=H.e(t,"$iby")}u=$.bl
if(!!this.$iby)s=u.body
else{s=u.createElement(a.tagName)
$.bl.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Y(C.Z,a.tagName)){$.kX.selectNodeContents(s)
r=$.kX.createContextualFragment(b)}else{s.innerHTML=b
r=$.bl.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bl.body
if(s==null?u!=null:s!==u)J.lA(s)
c.d3(r)
document.adoptNode(r)
return r},
j6:function(a,b,c){return this.am(a,b,c,null)},
f_:function(a,b){a.textContent=null
a.appendChild(this.am(a,b,null,null))},
$iO:1,
geN:function(a){return a.tagName}}
W.h1.prototype={
$1:function(a){return!!J.T(H.e(a,"$iD")).$iO},
$S:18}
W.o.prototype={$io:1}
W.j.prototype={
iU:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fv(a,b,c,!1)},
fv:function(a,b,c,d){return a.addEventListener(b,H.cf(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ij:1}
W.aG.prototype={$iaG:1}
W.cy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaG")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aG]},
$ay:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$icy:1,
$aH:function(){return[W.aG]}}
W.h6.prototype={
gl:function(a){return a.length}}
W.ha.prototype={
gl:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.hf.prototype={
gl:function(a){return a.length}}
W.c0.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iD")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.D]},
$ay:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$ic0:1,
$aH:function(){return[W.D]}}
W.bm.prototype={$ibm:1,
ge2:function(a){return a.data}}
W.c1.prototype={$ic1:1}
W.cB.prototype={$icB:1}
W.b5.prototype={$ib5:1}
W.dT.prototype={
i:function(a){return String(a)},
$idT:1}
W.hG.prototype={
gl:function(a){return a.length}}
W.cF.prototype={$icF:1}
W.hH.prototype={
j:function(a,b){return P.br(a.get(H.J(b)))},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga9:function(a){var u=H.d([],[P.f])
this.F(a,new W.hI(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.K("Not supported"))},
$aad:function(){return[P.f,null]},
$iI:1,
$aI:function(){return[P.f,null]}}
W.hI.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hJ.prototype={
j:function(a,b){return P.br(a.get(H.J(b)))},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga9:function(a){var u=H.d([],[P.f])
this.F(a,new W.hK(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.K("Not supported"))},
$aad:function(){return[P.f,null]},
$iI:1,
$aI:function(){return[P.f,null]}}
W.hK.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aQ.prototype={$iaQ:1}
W.hL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaQ")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aQ]},
$ay:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aH:function(){return[W.aQ]}}
W.a6.prototype={$ia6:1}
W.aq.prototype={
gaQ:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.m1("No elements"))
if(t>1)throw H.c(P.m1("More than one element"))
return u.firstChild},
ad:function(a,b){var u,t,s,r
H.m(b,"$ii",[W.D],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
n:function(a,b,c){var u,t
H.e(c,"$iD")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dK(u,u.length,[H.bR(C.a2,u,"H",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$ay:function(){return[W.D]},
$ai:function(){return[W.D]},
$ab:function(){return[W.D]}}
W.D.prototype={
jG:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jI:function(a,b){var u,t
try{u=a.parentNode
J.n6(u,b,a)}catch(t){H.ai(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.f2(a):u},
iY:function(a,b){return a.appendChild(H.e(b,"$iD"))},
i0:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.cK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iD")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.D]},
$ay:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$aH:function(){return[W.D]}}
W.aR.prototype={$iaR:1,
gl:function(a){return a.length}}
W.i_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaR")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aR]},
$ay:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aH:function(){return[W.aR]}}
W.ia.prototype={
j:function(a,b){return P.br(a.get(H.J(b)))},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga9:function(a){var u=H.d([],[P.f])
this.F(a,new W.ib(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.K("Not supported"))},
$aad:function(){return[P.f,null]},
$iI:1,
$aI:function(){return[P.f,null]}}
W.ib.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.id.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.io.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaS")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aH:function(){return[W.aS]}}
W.aT.prototype={$iaT:1}
W.ip.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaT")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$ay:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aH:function(){return[W.aT]}}
W.aU.prototype={$iaU:1,
gl:function(a){return a.length}}
W.is.prototype={
j:function(a,b){return a.getItem(H.J(b))},
n:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga9:function(a){var u=H.d([],[P.f])
this.F(a,new W.it(u))
return u},
gl:function(a){return a.length},
$aad:function(){return[P.f,P.f]},
$iI:1,
$aI:function(){return[P.f,P.f]}}
W.it.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:14}
W.aH.prototype={$iaH:1}
W.bb.prototype={$ibb:1}
W.ed.prototype={
am:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
u=W.nm("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aq(t).ad(0,new W.aq(u))
return t}}
W.iz.prototype={
am:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.am(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaQ(u)
s.toString
u=new W.aq(s)
r=u.gaQ(u)
t.toString
r.toString
new W.aq(t).ad(0,new W.aq(r))
return t}}
W.iA.prototype={
am:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.am(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaQ(u)
t.toString
s.toString
new W.aq(t).ad(0,new W.aq(s))
return t}}
W.cU.prototype={$icU:1}
W.aV.prototype={$iaV:1}
W.aI.prototype={$iaI:1}
W.iC.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaI")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aI]},
$ay:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aH:function(){return[W.aI]}}
W.iD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaV")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.iM.prototype={
gl:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.iQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaW")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.iR.prototype={
gl:function(a){return a.length}}
W.bO.prototype={}
W.jd.prototype={
i:function(a){return String(a)}}
W.jr.prototype={
gl:function(a){return a.length}}
W.bg.prototype={
gj9:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.K("deltaY is not supported"))},
gj8:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.K("deltaX is not supported"))},
$ibg:1}
W.d8.prototype={
i1:function(a,b){return a.requestAnimationFrame(H.cf(H.n(b,{func:1,ret:-1,args:[P.ac]}),1))},
fL:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d9.prototype={$id9:1}
W.jA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iY")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.Y]},
$ay:function(){return[W.Y]},
$ii:1,
$ai:function(){return[W.Y]},
$ib:1,
$ab:function(){return[W.Y]},
$aH:function(){return[W.Y]}}
W.eA.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iaj)return!1
return a.left===u.gbP(b)&&a.top===u.gbV(b)&&a.width===u.gaP(b)&&a.height===u.gaK(b)},
gJ:function(a){return W.mh(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(a.width),C.j.gJ(a.height))},
gaK:function(a){return a.height},
gaP:function(a){return a.width}}
W.jP.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaO")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aO]},
$ay:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aH:function(){return[W.aO]}}
W.eS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iD")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.D]},
$ay:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$aH:function(){return[W.D]}}
W.k2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaU")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aH:function(){return[W.aU]}}
W.k5.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaH")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aH]},
$ay:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aH:function(){return[W.aH]}}
W.jy.prototype={
F:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga9(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.G)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga9:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.h(r,t)
s=H.e(r[t],"$id9")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aad:function(){return[P.f,P.f]},
$aI:function(){return[P.f,P.f]}}
W.jC.prototype={
j:function(a,b){return this.a.getAttribute(H.J(b))},
n:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga9(this).length}}
W.jD.prototype={}
W.le.prototype={}
W.jE.prototype={}
W.jF.prototype={
$1:function(a){return this.a.$1(H.e(a,"$io"))},
$S:35}
W.bP.prototype={
fe:function(a){var u
if($.db.gjl($.db)){for(u=0;u<262;++u)$.db.n(0,C.Y[u],W.oO())
for(u=0;u<12;++u)$.db.n(0,C.v[u],W.oP())}},
aZ:function(a){return $.n2().Y(0,W.cw(a))},
ay:function(a,b,c){var u=$.db.j(0,H.l(W.cw(a))+"::"+b)
if(u==null)u=$.db.j(0,"*::"+b)
if(u==null)return!1
return H.lm(u.$4(a,b,c,this))},
$iaB:1}
W.H.prototype={
gV:function(a){return new W.dK(a,this.gl(a),[H.bR(this,a,"H",0)])}}
W.e1.prototype={
aZ:function(a){return C.a.dX(this.a,new W.hT(a))},
ay:function(a,b,c){return C.a.dX(this.a,new W.hS(a,b,c))},
$iaB:1}
W.hT.prototype={
$1:function(a){return H.e(a,"$iaB").aZ(this.a)},
$S:19}
W.hS.prototype={
$1:function(a){return H.e(a,"$iaB").ay(this.a,this.b,this.c)},
$S:19}
W.f_.prototype={
fo:function(a,b,c,d){var u,t,s
this.a.ad(0,c)
u=b.bY(0,new W.k_())
t=b.bY(0,new W.k0())
this.b.ad(0,u)
s=this.c
s.ad(0,C.B)
s.ad(0,t)},
aZ:function(a){return this.a.Y(0,W.cw(a))},
ay:function(a,b,c){var u=this,t=W.cw(a),s=u.c
if(s.Y(0,H.l(t)+"::"+b))return u.d.iX(c)
else if(s.Y(0,"*::"+b))return u.d.iX(c)
else{s=u.b
if(s.Y(0,H.l(t)+"::"+b))return!0
else if(s.Y(0,"*::"+b))return!0
else if(s.Y(0,H.l(t)+"::*"))return!0
else if(s.Y(0,"*::*"))return!0}return!1},
$iaB:1}
W.k_.prototype={
$1:function(a){return!C.a.Y(C.v,H.J(a))},
$S:20}
W.k0.prototype={
$1:function(a){return C.a.Y(C.v,H.J(a))},
$S:20}
W.k7.prototype={
ay:function(a,b,c){if(this.f7(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.Y(0,b)
return!1}}
W.k8.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.J(a))},
$S:16}
W.k6.prototype={
aZ:function(a){var u=J.T(a)
if(!!u.$icN)return!1
u=!!u.$iq
if(u&&W.cw(a)==="foreignObject")return!1
if(u)return!0
return!1},
ay:function(a,b,c){if(b==="is"||C.b.a7(b,"on"))return!1
return this.aZ(a)},
$iaB:1}
W.dK.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdA(J.ly(u.a,t))
u.c=t
return!0}u.sdA(null)
u.c=s
return!1},
gK:function(a){return this.d},
sdA:function(a){this.d=H.B(a,H.r(this,0))},
$ib3:1}
W.aB.prototype={}
W.jY.prototype={$ips:1}
W.fj.prototype={
d3:function(a){new W.ki(this).$2(a,null)},
b9:function(a,b){if(b==null)J.lA(a)
else b.removeChild(a)},
i5:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.na(a)
n=o.a.getAttribute("is")
H.e(a,"$iO")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.C(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ai(r)}t="element unprintable"
try{t=J.ar(a)}catch(r){H.ai(r)}try{s=W.cw(a)
this.i4(H.e(a,"$iO"),b,p,t,s,H.e(o,"$iI"),H.J(n))}catch(r){if(H.ai(r) instanceof P.aM)throw r
else{this.b9(a,b)
window
q="Removing corrupted element "+H.l(t)
if(typeof console!="undefined")window.console.warn(q)}}},
i4:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b9(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aZ(a)){o.b9(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ay(a,"is",g)){o.b9(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga9(f)
t=H.d(u.slice(0),[H.r(u,0)])
for(s=f.ga9(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.h(t,s)
r=t[s]
q=o.a
p=J.nd(r)
H.J(r)
if(!q.ay(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.l(e)+" "+r+'="'+H.l(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.T(a).$icU)o.d3(a.content)},
$ipd:1}
W.ki.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.i5(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b9(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ai(s)
r=H.e(u,"$iD")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iD")}},
$S:53}
W.ez.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f5.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
P.k3.prototype={
er:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
bX:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iay)return new Date(a.a)
if(!!u.$inN)throw H.c(P.j4("structured clone of RegExp"))
if(!!u.$iaG)return a
if(!!u.$ibU)return a
if(!!u.$icy)return a
if(!!u.$ibm)return a
if(!!u.$icH||!!u.$ibK||!!u.$icF)return a
if(!!u.$iI){t=q.er(a)
s=q.b
if(t>=s.length)return H.h(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.n(s,t,r)
u.F(a,new P.k4(p,q))
return p.a}if(!!u.$ib){t=q.er(a)
p=q.b
if(t>=p.length)return H.h(p,t)
r=p[t]
if(r!=null)return r
return q.j5(a,t)}throw H.c(P.j4("structured clone of other type"))},
j5:function(a,b){var u,t=J.dq(a),s=t.gl(a),r=new Array(s)
C.a.n(this.b,b,r)
for(u=0;u<s;++u)C.a.n(r,u,this.bX(t.j(a,u)))
return r}}
P.k4.prototype={
$2:function(a,b){this.a.a[a]=this.b.bX(b)},
$S:5}
P.fg.prototype={$ibm:1,
ge2:function(a){return this.a}}
P.kt.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.f8.prototype={}
P.h7.prototype={
gb6:function(){var u=this.b,t=H.al(u,"y",0),s=W.O
return new H.hy(new H.d7(u,H.n(new P.h8(),{func:1,ret:P.S,args:[t]}),[t]),H.n(new P.h9(),{func:1,ret:s,args:[t]}),[t,s])},
F:function(a,b){H.n(b,{func:1,ret:-1,args:[W.O]})
C.a.F(P.l6(this.gb6(),!1,W.O),b)},
n:function(a,b,c){var u
H.e(c,"$iO")
u=this.gb6()
J.nb(u.b.$1(J.fw(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aE(this.gb6().a)},
j:function(a,b){var u=this.gb6()
return u.b.$1(J.fw(u.a,b))},
gV:function(a){var u=P.l6(this.gb6(),!1,W.O)
return new J.as(u,u.length,[H.r(u,0)])},
$ay:function(){return[W.O]},
$ai:function(){return[W.O]},
$ab:function(){return[W.O]}}
P.h8.prototype={
$1:function(a){return!!J.T(H.e(a,"$iD")).$iO},
$S:18}
P.h9.prototype={
$1:function(a){return H.k(H.e(a,"$iD"),"$iO")},
$S:46}
P.jT.prototype={
gbU:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.F(t)
return H.B(u+t,H.r(this,0))},
gdZ:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.F(t)
return H.B(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
v:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$iaj){t=p.a
if(t==u.gbP(b)){s=p.b
if(s==u.gbV(b)){r=p.c
if(typeof t!=="number")return t.H()
if(typeof r!=="number")return H.F(r)
q=H.r(p,0)
if(H.B(t+r,q)===u.gbU(b)){t=p.d
if(typeof s!=="number")return s.H()
if(typeof t!=="number")return H.F(t)
u=H.B(s+t,q)===u.gdZ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.dv(s),q=t.b,p=J.dv(q),o=t.c
if(typeof s!=="number")return s.H()
if(typeof o!=="number")return H.F(o)
u=H.r(t,0)
o=C.f.gJ(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.H()
if(typeof s!=="number")return H.F(s)
u=C.f.gJ(H.B(q+s,u))
return P.oa(P.jR(P.jR(P.jR(P.jR(0,r),p),o),u))}}
P.aj.prototype={
gbP:function(a){return this.a},
gbV:function(a){return this.b},
gaP:function(a){return this.c},
gaK:function(a){return this.d}}
P.b6.prototype={$ib6:1}
P.ho.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ib6")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$ay:function(){return[P.b6]},
$ii:1,
$ai:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aH:function(){return[P.b6]}}
P.ba.prototype={$iba:1}
P.hV.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$iba")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$ay:function(){return[P.ba]},
$ii:1,
$ai:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aH:function(){return[P.ba]}}
P.i1.prototype={
gl:function(a){return a.length}}
P.cN.prototype={$icN:1}
P.iy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.J(c)
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$ay:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aH:function(){return[P.f]}}
P.q.prototype={
gcA:function(a){return new P.h7(a,new W.aq(a))},
am:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aB])
C.a.h(p,W.mg(null))
C.a.h(p,W.mi())
C.a.h(p,new W.k6())
c=new W.fj(new W.e1(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.x).j6(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.aq(s)
q=p.gaQ(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bd.prototype={$ibd:1}
P.iS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ibd")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bd]},
$ii:1,
$ai:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aH:function(){return[P.bd]}}
P.eK.prototype={}
P.eL.prototype={}
P.eV.prototype={}
P.eW.prototype={}
P.f6.prototype={}
P.f7.prototype={}
P.fe.prototype={}
P.ff.prototype={}
P.U.prototype={$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$inV:1}
P.fB.prototype={
gl:function(a){return a.length}}
P.fC.prototype={
j:function(a,b){return P.br(a.get(H.J(b)))},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga9:function(a){var u=H.d([],[P.f])
this.F(a,new P.fD(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.K("Not supported"))},
$aad:function(){return[P.f,null]},
$iI:1,
$aI:function(){return[P.f,null]}}
P.fD.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fE.prototype={
gl:function(a){return a.length}}
P.bT.prototype={}
P.hW.prototype={
gl:function(a){return a.length}}
P.ey.prototype={}
P.dz.prototype={$idz:1}
P.e5.prototype={$ie5:1}
P.c9.prototype={
eO:function(a,b,c,d,e,f,g){var u,t=J.T(g)
if(!!t.$ibm)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oG(g))
return}if(!!t.$ic1)t=!0
else t=!1
if(t){this.ii(a,b,c,d,e,f,g)
return}throw H.c(P.dx("Incorrect number or type of arguments"))},
ii:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
N:function(a,b,c){return a.uniform1f(b,c)},
a5:function(a,b,c){return a.uniform1i(b,c)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eS:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eT:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic9:1}
P.e7.prototype={$ie7:1}
P.ee.prototype={$iee:1}
P.en.prototype={$ien:1}
P.iq.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return P.br(a.item(b))},
n:function(a,b,c){H.e(c,"$iI")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$ay:function(){return[[P.I,,,]]},
$ii:1,
$ai:function(){return[[P.I,,,]]},
$ib:1,
$ab:function(){return[[P.I,,,]]},
$aH:function(){return[[P.I,,,]]}}
P.f2.prototype={}
P.f3.prototype={}
O.a4.prototype={
br:function(a){var u=this
u.sfW(H.d([],[a]))
u.sdH(null)
u.sdD(null)
u.sdI(null)},
d4:function(a,b,c){var u=this,t=H.al(u,"a4",0)
H.n(b,{func:1,ret:P.S,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.p,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdH(b)
u.sdD(a)
u.sdI(c)},
b2:function(a,b){return this.d4(a,null,b)},
dG:function(a){var u
H.m(a,"$ii",[H.al(this,"a4",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dc:function(a,b){var u
H.m(b,"$ii",[H.al(this,"a4",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.as(u,u.length,[H.r(u,0)])},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.al(s,"a4",0)
H.B(b,r)
r=[r]
if(H.C(s.dG(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dc(t,H.d([b],r))}},
ad:function(a,b){var u,t,s=this
H.m(b,"$ii",[H.al(s,"a4",0)],"$ai")
if(H.C(s.dG(b))){u=s.a
t=u.length
C.a.ad(u,b)
s.dc(t,b)}},
sfW:function(a){this.a=H.m(a,"$ib",[H.al(this,"a4",0)],"$ab")},
sdH:function(a){this.b=H.n(a,{func:1,ret:P.S,args:[[P.i,H.al(this,"a4",0)]]})},
sdD:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.al(this,"a4",0)]]})},
sdI:function(a){H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.al(this,"a4",0)]]})},
$ii:1}
O.cE.prototype={
gl:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.Q():u},
aR:function(){var u=this.b
if(u!=null)u.E(null)},
ga4:function(a){var u=this.a
if(u.length>0)return C.a.gaA(u)
else return V.c4()},
bT:function(a){var u=this.a
if(a==null)C.a.h(u,V.c4())
else C.a.h(u,a)
this.aR()},
aM:function(){var u=this.a
if(u.length>0){u.pop()
this.aR()}},
sca:function(a){this.a=H.m(a,"$ib",[V.at],"$ab")}}
E.fH.prototype={}
E.an.prototype={
sc0:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().W(0,s.geG())
u=s.c
if(u!=null)u.gq().h(0,s.geG())
t=new D.N("shape",r,s.c,[F.e8])
t.b=!0
s.bQ(t)}},
au:function(a,b){var u
for(u=this.y.a,u=new J.as(u,u.length,[H.r(u,0)]);u.A();)u.d.au(0,b)},
ah:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga4(s))
s.aR()
a.cX(t.f)
s=a.dy
u=(s&&C.a).gaA(s)
if(u!=null&&t.d!=null)u.eK(a,t)
for(s=t.y.a,s=new J.as(s,s.length,[H.r(s,0)]);s.A();)s.d.ah(a)
a.cW()
a.dx.aM()},
gq:function(){var u=this.z
return u==null?this.z=D.Q():u},
bQ:function(a){var u=this.z
if(u!=null)u.E(a)},
aa:function(){return this.bQ(null)},
eH:function(a){H.e(a,"$iA")
this.e=null
this.bQ(a)},
jx:function(){return this.eH(null)},
eF:function(a){this.bQ(H.e(a,"$iA"))},
ju:function(){return this.eF(null)},
jt:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ii",[E.an],"$ai")
for(u=b.length,t=this.geE(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bZ()
o.sak(null)
o.saW(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.aa()},
jw:function(a,b){var u,t
H.m(b,"$ii",[E.an],"$ai")
for(u=b.gV(b),t=this.geE();u.A();)u.gK(u).gq().W(0,t)
this.aa()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfd:function(a,b){this.y=H.m(b,"$ia4",[E.an],"$aa4")},
$ib9:1}
E.i6.prototype={
fa:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cE()
t=[V.at]
u.sca(H.d([],t))
u.b=null
u.gq().h(0,new E.i7(s))
s.cy=u
u=new O.cE()
u.sca(H.d([],t))
u.b=null
u.gq().h(0,new E.i8(s))
s.db=u
u=new O.cE()
u.sca(H.d([],t))
u.b=null
u.gq().h(0,new E.i9(s))
s.dx=u
s.sih(H.d([],[O.bN]))
u=s.dy;(u&&C.a).h(u,null)
s.sib(new H.aP([P.f,A.cO]))},
gjF:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga4(s)
u=t.db
u=t.z=s.B(0,u.ga4(u))
s=u}return s},
cX:function(a){var u=this.dy,t=a==null?(u&&C.a).gaA(u):a;(u&&C.a).h(u,t)},
cW:function(){var u=this.dy
if(u.length>1)u.pop()},
dW:function(a){var u=a.b
if(u.length===0)throw H.c(P.v("May not cache a shader with no name."))
if(this.fr.by(0,u))throw H.c(P.v('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
sih:function(a){this.dy=H.m(a,"$ib",[O.bN],"$ab")},
sib:function(a){this.fr=H.m(a,"$iI",[P.f,A.cO],"$aI")}}
E.i7.prototype={
$1:function(a){var u
H.e(a,"$iA")
u=this.a
u.ch=u.z=null},
$S:8}
E.i8.prototype={
$1:function(a){var u
H.e(a,"$iA")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.i9.prototype={
$1:function(a){var u
H.e(a,"$iA")
u=this.a
u.cx=u.ch=null},
$S:8}
E.ej.prototype={
df:function(a){H.e(a,"$iA")
this.eL()},
de:function(){return this.df(null)},
gjg:function(){var u,t=this,s=Date.now(),r=C.f.a8(P.lH(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
dL:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.B()
if(typeof r!=="number")return H.F(r)
u=C.j.cL(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.B()
t=C.j.cL(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.m4(C.t,s.gjJ())}},
eL:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iL(this),{func:1,ret:-1,args:[P.ac]})
C.I.fL(u)
C.I.i1(u,W.mx(t,P.ac))}},
jH:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dL()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lH(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aR()
r=s.db
C.a.sl(r.a,0)
r.aR()
r=s.dx
C.a.sl(r.a,0)
r.aR()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.ah(p.e)}s=p.z
if(s!=null)s.E(null)}catch(q){u=H.ai(q)
t=H.cj(q)
P.lu("Error: "+H.l(u))
P.lu("Stack: "+H.l(t))
throw H.c(u)}}}
E.iL.prototype={
$1:function(a){var u
H.oY(a)
u=this.a
if(u.ch){u.ch=!1
u.jH()}},
$S:31}
Z.ev.prototype={$ip7:1}
Z.dA.prototype={
a2:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ai(s)
t=P.v('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.ew.prototype={$ip8:1}
Z.cr.prototype={
aJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a2:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a2(a)},
at:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ah:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ar(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfS:function(a){this.b=H.m(a,"$ib",[Z.bG],"$ab")},
$ipg:1}
Z.bG.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c6(this.c)+"'")+"]"}}
Z.bf.prototype={
gd6:function(a){var u=this.a,t=(u&$.aZ().a)!==0?3:0
if((u&$.bu().a)!==0)t+=3
if((u&$.bt().a)!==0)t+=3
if((u&$.bv().a)!==0)t+=2
if((u&$.bw().a)!==0)t+=3
if((u&$.dt().a)!==0)t+=3
if((u&$.du().a)!==0)t+=4
if((u&$.cm().a)!==0)++t
return(u&$.bs().a)!==0?t+4:t},
iZ:function(a){var u,t=$.aZ(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.du()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0)if(u===a)return t
return $.n0()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bf))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.aZ().a)!==0)C.a.h(u,"Pos")
if((t&$.bu().a)!==0)C.a.h(u,"Norm")
if((t&$.bt().a)!==0)C.a.h(u,"Binm")
if((t&$.bv().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bw().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dt().a)!==0)C.a.h(u,"Clr3")
if((t&$.du().a)!==0)C.a.h(u,"Clr4")
if((t&$.cm().a)!==0)C.a.h(u,"Weight")
if((t&$.bs().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fK.prototype={}
D.bZ.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.sak(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
W:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=s.a
t=(u&&C.a).W(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=s.b
t=(u&&C.a).W(u,b)||t}return t},
E:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.F(P.l6(u,!0,{func:1,ret:-1,args:[D.A]}),new D.h4(q))
u=r.b
if(u!=null){r.saW(H.d([],[{func:1,ret:-1,args:[D.A]}]))
C.a.F(u,new D.h5(q))}return!0},
e5:function(){return this.E(null)},
aO:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}},
sak:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
saW:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.h4.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:30}
D.h5.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:30}
D.A.prototype={}
D.bH.prototype={}
D.bI.prototype={}
D.N.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.dB.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dB))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dQ.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dQ))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.hn.prototype={
jC:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jy:function(a){this.c=a.b
this.d.W(0,a.a)
return!1},
shW:function(a){this.d=H.m(a,"$im0",[P.p],"$am0")}}
X.dU.prototype={}
X.hu.prototype={
b5:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.B()
u=b.b
t=q.ch
if(typeof u!=="number")return u.B()
s=new V.ab(o.a+n*m,o.b+u*t)
t=q.a.gb_()
r=new X.bo(a,V.bp(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cV:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eZ()
if(typeof u!=="number")return u.bZ()
this.r=(u&~t)>>>0
return!1},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b5(a,b))
return!0},
jD:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gb_()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.B()
q=a.b
p=o.cy
if(typeof q!=="number")return q.B()
t=new X.cG(new V.Z(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
hu:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dU(c,r.a.gb_(),b)
s.b=!0
t.E(s)
r.y=new P.ay(u,!1)
r.x=V.bp()}}
X.aA.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aA))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.C(this.b)?"Alt+":""
return u+(H.C(this.c)?"Shift+":"")}}
X.bo.prototype={}
X.hM.prototype={
c7:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gb_(),r=new X.bo(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cV:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.c7(a,b,!0))
return!0},
bg:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eZ()
if(typeof t!=="number")return t.bZ()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.c7(a,b,!0))
return!0},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.c7(a,b,!1))
return!0},
jE:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gb_()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.B()
r=a.b
q=p.ch
if(typeof r!=="number")return r.B()
u=new X.cG(new V.Z(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
ge4:function(){var u=this.b
return u==null?this.b=D.Q():u},
gbW:function(){var u=this.c
return u==null?this.c=D.Q():u},
geD:function(){var u=this.d
return u==null?this.d=D.Q():u}}
X.cG.prototype={}
X.i0.prototype={}
X.el.prototype={}
X.iP.prototype={
b5:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.ab],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bp()
s=q.a.gb_()
r=new X.el(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jB:function(a){var u
H.m(a,"$ib",[V.ab],"$ab")
u=this.b
if(u==null)return!1
u.E(this.b5(a,!0))
return!0},
jz:function(a){var u
H.m(a,"$ib",[V.ab],"$ab")
u=this.c
if(u==null)return!1
u.E(this.b5(a,!0))
return!0},
jA:function(a){var u
H.m(a,"$ib",[V.ab],"$ab")
u=this.d
if(u==null)return!1
u.E(this.b5(a,!1))
return!0}}
X.eq.prototype={
gb_:function(){var u=this.a,t=C.m.ge1(u).c
t.toString
u=C.m.ge1(u).d
u.toString
return V.lZ(0,0,t,u)},
dt:function(a){var u=a.keyCode,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dQ(u,new X.aA(t,a.altKey,a.shiftKey))},
aX:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
cq:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
aG:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.M()
u=t.top
if(typeof r!=="number")return r.M()
return new V.ab(s-q,r-u)},
b8:function(a){return new V.Z(a.movementX,a.movementY)},
cm:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.ab])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
q=C.j.as(r.pageX)
C.j.as(r.pageY)
p=o.left
C.j.as(r.pageX)
C.a.h(n,new V.ab(q-p,C.j.as(r.pageY)-o.top))}return n},
aC:function(a){var u=a.buttons,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dB(u,new X.aA(t,a.altKey,a.shiftKey))},
cb:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.M()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.M()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ho:function(a){this.f=!0},
hc:function(a){this.f=!1},
hi:function(a){H.e(a,"$ia6")
if(H.C(this.f)&&this.cb(a))a.preventDefault()},
hs:function(a){var u
H.e(a,"$ib5")
if(!H.C(this.f))return
u=this.dt(a)
this.b.jC(u)},
hq:function(a){var u
H.e(a,"$ib5")
if(!H.C(this.f))return
u=this.dt(a)
this.b.jy(u)},
hw:function(a){var u,t,s,r,q=this
H.e(a,"$ia6")
u=q.a
u.focus()
q.f=!0
q.aX(a)
if(H.C(q.x)){t=q.aC(a)
s=q.b8(a)
if(q.d.cV(t,s))a.preventDefault()
return}if(H.C(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aC(a)
r=q.aG(a)
if(q.c.cV(t,r))a.preventDefault()},
hA:function(a){var u,t,s,r=this
H.e(a,"$ia6")
r.aX(a)
u=r.aC(a)
if(H.C(r.x)){t=r.b8(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aG(a)
if(r.c.bg(u,s))a.preventDefault()},
hm:function(a){var u,t,s,r=this
H.e(a,"$ia6")
if(!r.cb(a)){r.aX(a)
u=r.aC(a)
if(H.C(r.x)){t=r.b8(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aG(a)
if(r.c.bg(u,s))a.preventDefault()}},
hy:function(a){var u,t,s,r=this
H.e(a,"$ia6")
r.aX(a)
u=r.aC(a)
if(H.C(r.x)){t=r.b8(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aG(a)
if(r.c.bf(u,s))a.preventDefault()},
hk:function(a){var u,t,s,r=this
H.e(a,"$ia6")
if(!r.cb(a)){r.aX(a)
u=r.aC(a)
if(H.C(r.x)){t=r.b8(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aG(a)
if(r.c.bf(u,s))a.preventDefault()}},
hC:function(a){var u,t,s=this
H.e(a,"$ibg")
s.aX(a)
u=new V.Z((a&&C.H).gj8(a),C.H.gj9(a)).C(0,180)
if(H.C(s.x)){if(s.d.jD(u))a.preventDefault()
return}if(H.C(s.r))return
t=s.aG(a)
if(s.c.jE(u,t))a.preventDefault()},
hE:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aC(s.y)
t=s.aG(s.y)
s.d.hu(u,t,r)}},
hU:function(a){var u,t=this
H.e(a,"$iaX")
t.a.focus()
t.f=!0
t.cq(a)
u=t.cm(a)
if(t.e.jB(u))a.preventDefault()},
hQ:function(a){var u
H.e(a,"$iaX")
this.cq(a)
u=this.cm(a)
if(this.e.jz(u))a.preventDefault()},
hS:function(a){var u
H.e(a,"$iaX")
this.cq(a)
u=this.cm(a)
if(this.e.jA(u))a.preventDefault()},
sfM:function(a){this.z=H.m(a,"$ib",[[P.cR,P.X]],"$ab")}}
D.bC.prototype={
gq:function(){var u=this.d
return u==null?this.d=D.Q():u},
aB:function(a){var u
H.e(a,"$iA")
u=this.d
if(u!=null)u.E(a)},
fh:function(){return this.aB(null)},
$ia8:1,
$ib9:1}
D.a8.prototype={$ib9:1}
D.dR.prototype={
gq:function(){var u=this.Q
return u==null?this.Q=D.Q():u},
aB:function(a){var u=this.Q
if(u!=null)u.E(a)},
dF:function(a){var u
H.e(a,"$iA")
u=this.ch
if(u!=null)u.E(a)},
ht:function(){return this.dF(null)},
hG:function(a){var u,t,s
H.m(a,"$ii",[D.a8],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.G)(a),++t){s=a[t]
if(s==null||this.ff(s))return!1}return!0},
h6:function(a,b){var u,t,s,r,q,p,o,n=D.a8
H.m(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdE(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=H.e(b[q],"$ia8")
if(p instanceof D.bC)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bZ()
o.sak(null)
o.saW(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bH([n])
n.b=!0
this.aB(n)},
hK:function(a,b){var u,t,s,r=D.a8
H.m(b,"$ii",[r],"$ai")
for(u=b.gV(b),t=this.gdE();u.A();){s=u.gK(u)
C.a.W(this.e,s)
s.gq().W(0,t)}r=new D.bI([r])
r.b=!0
this.aB(r)},
ff:function(a){var u=C.a.Y(this.e,a)
return u},
sfK:function(a){this.e=H.m(a,"$ib",[D.bC],"$ab")},
shV:function(a){this.f=H.m(a,"$ib",[D.e4],"$ab")},
sie:function(a){this.r=H.m(a,"$ib",[D.eb],"$ab")},
sis:function(a){this.x=H.m(a,"$ib",[D.eg],"$ab")},
sit:function(a){this.y=H.m(a,"$ib",[D.eh],"$ab")},
siu:function(a){this.z=H.m(a,"$ib",[D.ei],"$ab")},
$ai:function(){return[D.a8]},
$aa4:function(){return[D.a8]}}
D.e4.prototype={$ia8:1,$ib9:1}
D.eb.prototype={$ia8:1,$ib9:1}
D.eg.prototype={$ia8:1,$ib9:1}
D.eh.prototype={$ia8:1,$ib9:1}
D.ei.prototype={$ia8:1,$ib9:1}
V.z.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
V.aN.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aN))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a_(u.a,3,0)+", "+V.a_(u.b,3,0)+", "+V.a_(u.c,3,0)+", "+V.a_(u.d,3,0)+"]"}}
V.h3.prototype={}
V.dY.prototype={
ai:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.E])
return t},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dY))return!1
u=b.a
t=$.V().a
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
i:function(a){var u,t,s,r,q=this,p=[P.E],o=V.ch(H.d([q.a,q.d,q.r],p),3,0),n=V.ch(H.d([q.b,q.e,q.x],p),3,0),m=V.ch(H.d([q.c,q.f,q.y],p),3,0)
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
V.at.prototype={
ai:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.E])
return t},
cP:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.V().a)return V.c4()
u=1/b1
t=-n
s=-a0
return V.b8((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
B:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b8(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
d0:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.W(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bn:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ao(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.at))return!1
u=b.a
t=$.V().a
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
i:function(a){return this.R()},
G:function(a){var u,t,s,r,q,p=this,o=[P.E],n=V.ch(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.ch(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.ch(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.ch(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
R:function(){return this.G("")}}
V.ab.prototype={
M:function(a,b){return new V.ab(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+"]"}}
V.ao.prototype={
M:function(a,b){return new V.ao(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
V.bq.prototype={
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bq))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a_(u.a,3,0)+", "+V.a_(u.b,3,0)+", "+V.a_(u.c,3,0)+", "+V.a_(u.d,3,0)+"]"}}
V.e6.prototype={
gag:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e6))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a_(u.a,3,0)+", "+V.a_(u.b,3,0)+", "+V.a_(u.c,3,0)+", "+V.a_(u.d,3,0)+"]"}}
V.Z.prototype={
cQ:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.B()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
B:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.B()
u=this.b
if(typeof u!=="number")return u.B()
return new V.Z(t*b,u*b)},
C:function(a,b){var u,t
if(Math.abs(b-0)<$.V().a){u=$.ma
return u==null?$.ma=new V.Z(0,0):u}u=this.a
if(typeof u!=="number")return u.C()
t=this.b
if(typeof t!=="number")return t.C()
return new V.Z(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=this.a
s=$.V()
s.toString
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+"]"}}
V.W.prototype={
cQ:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cR:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.W(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
bd:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.W(u*t-s*r,s*q-p*t,p*r-u*q)},
H:function(a,b){return new V.W(this.a+b.a,this.b+b.b,this.c+b.c)},
U:function(a){return new V.W(-this.a,-this.b,-this.c)},
C:function(a,b){if(Math.abs(b-0)<$.V().a)return V.eu()
return new V.W(this.a/b,this.b/b,this.c/b)},
eB:function(){var u=$.V().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
U.fL.prototype={
c2:function(a){var u=V.p6(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.Q():u},
T:function(a){var u=this.y
if(u!=null)u.E(a)},
sd1:function(a,b){},
scS:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.V().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.c2(u)}s=new D.N("maximumLocation",s,t.b,[P.E])
s.b=!0
t.T(s)}},
scU:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.V().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.c2(u)}s=new D.N("minimumLocation",s,t.c,[P.E])
s.b=!0
t.T(s)}},
saf:function(a,b){var u,t=this
b=t.c2(b)
u=t.d
if(!(Math.abs(u-b)<$.V().a)){t.d=b
u=new D.N("location",u,b,[P.E])
u.b=!0
t.T(u)}},
scT:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.V().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.N("maximumVelocity",r,a,[P.E])
r.b=!0
s.T(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.V().a)){u.f=a
t=new D.N("velocity",t,a,[P.E])
t.b=!0
u.T(t)}},
scD:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.V().a)){this.x=a
u=new D.N("dampening",u,a,[P.E])
u.b=!0
this.T(u)}},
au:function(a,b){var u,t,s,r=this,q=r.f,p=$.V().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.saf(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.V().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.dD.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.Q():u},
b1:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dD))return!1
return J.a9(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cA.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.Q():u},
T:function(a){var u
H.e(a,"$iA")
u=this.e
if(u!=null)u.E(a)},
ab:function(){return this.T(null)},
h4:function(a,b){var u,t,s,r,q,p,o,n=U.ae
H.m(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaS(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bH([n])
n.b=!0
this.T(n)},
hI:function(a,b){var u,t,s=U.ae
H.m(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.gaS();u.A();)u.gK(u).gq().W(0,t)
s=new D.bI([s])
s.b=!0
this.T(s)},
b1:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.Z()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.as(r,r.length,[H.r(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.b1(0,b,c)
if(t!=null)u=u==null?t:t.B(0,u)}}s.f=u==null?V.c4():u
r=s.e
if(r!=null)r.aO(0)}return s.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cA))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.a9(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ae]},
$aa4:function(){return[U.ae]},
$iae:1}
U.ae.prototype={}
U.er.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.Q():u},
T:function(a){var u
H.e(a,"$iA")
u=this.cy
if(u!=null)u.E(a)},
ab:function(){return this.T(null)},
bb:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.ge4().h(0,u.gcc())
u.a.c.geD().h(0,u.gce())
u.a.c.gbW().h(0,u.gcg())
return!0},
cd:function(a){var u=this
H.e(a,"$iA")
if(!J.a9(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
cf:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.e(a,"$iA"),"$ibo")
if(!H.C(n.y))return
if(H.C(n.x)){u=a.d.M(0,a.y)
u=new V.Z(u.a,u.b)
u=u.I(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.C(n.d)){u=a.c
t=a.d.M(0,a.y)
u=new V.Z(t.a,t.b).B(0,2).C(0,u.gag())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.B()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=new V.Z(s.a,s.b).B(0,2).C(0,u.gag())
s=n.b
q=r.a
if(typeof q!=="number")return q.U()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.saf(0,-q*p+o)
n.b.sX(0)
t=t.M(0,a.z)
n.Q=new V.Z(t.a,t.b).B(0,2).C(0,u.gag())}n.ab()},
ci:function(a){var u,t,s,r=this
H.e(a,"$iA")
if(!H.C(r.y))return
r.y=!1
if(H.C(r.x))return
u=r.Q
if(u.I(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.B()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sX(t*10*s)
r.ab()}},
b1:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.Z()
if(q<p){r.ch=p
u=b.y
r.b.au(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.b8(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iae:1}
U.es.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.Q():u},
T:function(a){var u
H.e(a,"$iA")
u=this.fx
if(u!=null)u.E(a)},
ab:function(){return this.T(null)},
bb:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.ge4().h(0,s.gcc())
s.a.c.geD().h(0,s.gce())
s.a.c.gbW().h(0,s.gcg())
u=s.a.d
t=u.f
u=t==null?u.f=D.Q():t
u.h(0,s.gfX())
u=s.a.d
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.gfZ())
u=s.a.e
t=u.b
u=t==null?u.b=D.Q():t
u.h(0,s.gip())
u=s.a.e
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.gim())
u=s.a.e
t=u.c
u=t==null?u.c=D.Q():t
u.h(0,s.gik())
return!0},
ax:function(a){var u=a.a,t=a.b
if(H.C(this.f)){if(typeof u!=="number")return u.U()
u=-u}if(H.C(this.r)){if(typeof t!=="number")return t.U()
t=-t}return new V.Z(u,t)},
cd:function(a){var u=this
a=H.k(H.e(a,"$iA"),"$ibo")
if(!J.a9(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
cf:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.e(a,"$iA"),"$ibo")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.M(0,a.y)
u=new V.Z(u.a,u.b)
u=u.I(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.M(0,a.y)
u=n.ax(new V.Z(t.a,t.b).B(0,2).C(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.ax(new V.Z(s.a,s.b).B(0,2).C(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.saf(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.saf(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.M(0,a.z)
n.dx=n.ax(new V.Z(t.a,t.b).B(0,2).C(0,u.gag()))}n.ab()},
ci:function(a){var u,t,s,r=this
H.e(a,"$iA")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.I(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sX(-t*10*u)
r.ab()}},
fY:function(a){var u=this
if(H.k(H.e(a,"$iA"),"$idU").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
h_:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.e(a,"$iA"),"$ibo")
if(!J.a9(n.d,a.x.b))return
u=a.c
t=a.d
s=t.M(0,a.y)
r=n.ax(new V.Z(s.a,s.b).B(0,2).C(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.saf(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.saf(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.M(0,a.z)
n.dx=n.ax(new V.Z(t.a,t.b).B(0,2).C(0,u.gag()))
n.ab()},
iq:function(a){var u=this
H.e(a,"$iA")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
io:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.e(a,"$iA"),"$iel")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.M(0,a.y)
u=new V.Z(u.a,u.b)
u=u.I(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.M(0,a.y)
u=n.ax(new V.Z(t.a,t.b).B(0,2).C(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.ax(new V.Z(s.a,s.b).B(0,2).C(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.saf(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.saf(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.M(0,a.z)
n.dx=n.ax(new V.Z(t.a,t.b).B(0,2).C(0,u.gag()))}n.ab()},
il:function(a){var u,t,s,r=this
H.e(a,"$iA")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.I(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sX(-t*10*u)
r.ab()}},
b1:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.Z()
if(q<p){r.dy=p
u=b.y
r.c.au(0,u)
r.b.au(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.b8(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.B(0,V.b8(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iae:1}
U.et.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.Q():u},
T:function(a){var u=this.r
if(u!=null)u.E(a)},
bb:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.Q():t
t=r.gh1()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.Q():s).h(0,t)
return!0},
h2:function(a){var u,t,s,r,q=this
H.e(a,"$iA")
if(!J.a9(q.b,q.a.b.c))return
H.k(a,"$icG")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.B()
r=u+t*s
if(u!==r){q.d=r
u=new D.N("zoom",u,r,[P.E])
u.b=!0
q.T(u)}},
b1:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.b8(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iae:1}
M.dC.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.Q():u},
a1:function(a){var u
H.e(a,"$iA")
u=this.f
if(u!=null)u.E(a)},
b3:function(){return this.a1(null)},
hM:function(a,b){var u,t,s,r,q,p,o,n=M.aC
H.m(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga0(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bH([n])
n.b=!0
this.a1(n)},
hO:function(a,b){var u,t,s=M.aC
H.m(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.ga0();u.A();)u.gK(u).gq().W(0,t)
s=new D.bI([s])
s.b=!0
this.a1(s)},
ah:function(a){var u,t,s=this
if(s.e)return
s.e=!0
for(u=s.a,u=new J.as(u,u.length,[H.r(u,0)]);u.A();){t=u.d
if(t!=null)t.ah(a)}s.e=!1},
$ai:function(){return[M.aC]},
$aa4:function(){return[M.aC]},
$iaC:1}
M.dE.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.Q():u},
a1:function(a){var u
H.e(a,"$iA")
u=this.f
if(u!=null)u.E(a)},
b3:function(){return this.a1(null)},
sbc:function(a){var u,t,s=this
if(a==null)a=new X.hi()
u=s.a
if(u!==a){if(u!=null)u.gq().W(0,s.ga0())
t=s.a
s.a=a
a.gq().h(0,s.ga0())
u=new D.N("camera",t,s.a,[X.bV])
u.b=!0
s.a1(u)}},
sbj:function(a,b){var u,t,s=this
if(b==null)b=X.kY(null)
u=s.b
if(u!==b){if(u!=null)u.gq().W(0,s.ga0())
t=s.b
s.b=b
b.gq().h(0,s.ga0())
u=new D.N("target",t,s.b,[X.cT])
u.b=!0
s.a1(u)}},
sbk:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gq().W(0,t.ga0())
u=t.c
t.c=a
if(a!=null)a.gq().h(0,t.ga0())
s=new D.N("technique",u,t.c,[O.bN])
s.b=!0
t.a1(s)}},
ah:function(a){var u=this
a.cX(u.c)
u.b.a2(a)
u.a.a2(a)
u.d.au(0,a)
u.d.ah(a)
u.a.at(a)
u.b.toString
a.cW()},
$iaC:1}
M.dI.prototype={
a1:function(a){var u
H.e(a,"$iA")
u=this.x
if(u!=null)u.E(a)},
b3:function(){return this.a1(null)},
he:function(a,b){var u,t,s,r,q,p,o,n=E.an
H.m(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga0(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bZ()
o.sak(null)
o.saW(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bH([n])
n.b=!0
this.a1(n)},
hg:function(a,b){var u,t,s=E.an
H.m(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.ga0();u.A();)u.gK(u).gq().W(0,t)
s=new D.bI([s])
s.b=!0
this.a1(s)},
sbc:function(a){var u,t,s=this
if(a==null)a=X.lS(null)
u=s.a
if(u!==a){if(u!=null)u.gq().W(0,s.ga0())
t=s.a
s.a=a
a.gq().h(0,s.ga0())
u=new D.N("camera",t,s.a,[X.bV])
u.b=!0
s.a1(u)}},
sbj:function(a,b){var u,t=this,s=t.b
if(s!==b){if(s!=null)s.gq().W(0,t.ga0())
u=t.b
t.b=b
b.gq().h(0,t.ga0())
s=new D.N("target",u,t.b,[X.cT])
s.b=!0
t.a1(s)}},
sbk:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gq().W(0,t.ga0())
u=t.c
t.c=a
if(a!=null)a.gq().h(0,t.ga0())
s=new D.N("technique",u,t.c,[O.bN])
s.b=!0
t.a1(s)}},
gq:function(){var u=this.x
return u==null?this.x=D.Q():u},
ah:function(a){var u,t=this
a.cX(t.c)
t.b.a2(a)
t.a.a2(a)
u=t.c
if(u!=null)u.au(0,a)
for(u=t.d.a,u=new J.as(u,u.length,[H.r(u,0)]);u.A();)u.d.au(0,a)
for(u=t.d.a,u=new J.as(u,u.length,[H.r(u,0)]);u.A();)u.d.ah(a)
t.a.toString
a.cy.aM()
a.db.aM()
t.b.toString
a.cW()},
sfE:function(a,b){this.d=H.m(b,"$ia4",[E.an],"$aa4")},
$iaC:1}
M.aC.prototype={}
A.dy.prototype={}
A.fA.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ja:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
e3:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dX.prototype={
f9:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.ag("")
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
d1.iy(u)
d1.iF(u)
d1.iz(u)
d1.iN(u)
d1.iO(u)
d1.iH(u)
d1.iS(u)
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
u=new P.ag("")
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
q.iC(u)
q.ix(u)
q.iA(u)
q.iD(u)
q.iL(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iJ(u)
q.iK(u)}q.iG(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
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
case C.e:m+=c7
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
break
case C.h:m+=c7
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
k=H.d([],[P.f])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iB(u)
q.iI(u)
q.iM(u)
q.iP(u)
q.iQ(u)
q.iR(u)
q.iE(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
p=p?u.a=m+"   vec3 norm = normal();\n":m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.f])
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
i="vec4("+C.a.m(j," + ")+", alpha);"
q=u.a
q=u.a=(n?u.a=q+("   gl_FragColor = colorMat*"+i+"\n"):u.a=q+("   gl_FragColor = "+i+"\n"))+"}\n"
a6.eA(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.k(a6.y.p(0,"invViewMat"),"$iaw")
if(t)a6.dy=H.k(a6.y.p(0,"objMat"),"$iaw")
if(r)a6.fr=H.k(a6.y.p(0,"viewObjMat"),"$iaw")
a6.fy=H.k(a6.y.p(0,"projViewObjMat"),"$iaw")
if(d1.x2)a6.k1=H.k(a6.y.p(0,"txt2DMat"),"$id_")
if(d1.y1)a6.k2=H.k(a6.y.p(0,"txtCubeMat"),"$iaw")
if(d1.y2)a6.k3=H.k(a6.y.p(0,"colorMat"),"$iaw")
a6.sfA(H.d([],[A.aw]))
t=d1.az
if(t>0){a6.k4=H.e(a6.y.p(0,"bendMatCount"),"$iR")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.v(a7+q+a8));(s&&C.a).h(s,H.k(g,"$iaw"))}}t=d1.a
if(t!==C.d){a6.r2=H.k(a6.y.p(0,"emissionClr"),"$iP")
switch(t){case C.d:break
case C.i:break
case C.e:a6.rx=H.k(a6.y.p(0,a9),"$iap")
a6.x1=H.k(a6.y.p(0,b0),"$iR")
break
case C.h:a6.ry=H.k(a6.y.p(0,a9),"$iak")
a6.x1=H.k(a6.y.p(0,b0),"$iR")
break}}t=d1.b
if(t!==C.d){a6.x2=H.k(a6.y.p(0,"ambientClr"),"$iP")
switch(t){case C.d:break
case C.i:break
case C.e:a6.y1=H.k(a6.y.p(0,b1),"$iap")
a6.az=H.k(a6.y.p(0,b2),"$iR")
break
case C.h:a6.y2=H.k(a6.y.p(0,b1),"$iak")
a6.az=H.k(a6.y.p(0,b2),"$iR")
break}}t=d1.c
if(t!==C.d){a6.ar=H.k(a6.y.p(0,"diffuseClr"),"$iP")
switch(t){case C.d:break
case C.i:break
case C.e:a6.bA=H.k(a6.y.p(0,b3),"$iap")
a6.bB=H.k(a6.y.p(0,b4),"$iR")
break
case C.h:a6.e6=H.k(a6.y.p(0,b3),"$iak")
a6.bB=H.k(a6.y.p(0,b4),"$iR")
break}}t=d1.d
if(t!==C.d){a6.bC=H.k(a6.y.p(0,"invDiffuseClr"),"$iP")
switch(t){case C.d:break
case C.i:break
case C.e:a6.e7=H.k(a6.y.p(0,b5),"$iap")
a6.bD=H.k(a6.y.p(0,b6),"$iR")
break
case C.h:a6.e8=H.k(a6.y.p(0,b5),"$iak")
a6.bD=H.k(a6.y.p(0,b6),"$iR")
break}}t=d1.e
if(t!==C.d){a6.bG=H.k(a6.y.p(0,"shininess"),"$ia2")
a6.bE=H.k(a6.y.p(0,"specularClr"),"$iP")
switch(t){case C.d:break
case C.i:break
case C.e:a6.e9=H.k(a6.y.p(0,b7),"$iap")
a6.bF=H.k(a6.y.p(0,b8),"$iR")
break
case C.h:a6.ea=H.k(a6.y.p(0,b7),"$iak")
a6.bF=H.k(a6.y.p(0,b8),"$iR")
break}}switch(d1.f){case C.d:break
case C.i:break
case C.e:a6.eb=H.k(a6.y.p(0,"bumpTxt"),"$iap")
a6.bH=H.k(a6.y.p(0,b9),"$iR")
break
case C.h:a6.ec=H.k(a6.y.p(0,"bumpTxt"),"$iak")
a6.bH=H.k(a6.y.p(0,b9),"$iR")
break}if(d1.dy){a6.ed=H.k(a6.y.p(0,"envSampler"),"$iak")
a6.ee=H.k(a6.y.p(0,"nullEnvTxt"),"$iR")
t=d1.r
if(t!==C.d){a6.bI=H.k(a6.y.p(0,"reflectClr"),"$iP")
switch(t){case C.d:break
case C.i:break
case C.e:a6.ef=H.k(a6.y.p(0,c0),"$iap")
a6.bJ=H.k(a6.y.p(0,c1),"$iR")
break
case C.h:a6.eg=H.k(a6.y.p(0,c0),"$iak")
a6.bJ=H.k(a6.y.p(0,c1),"$iR")
break}}t=d1.x
if(t!==C.d){a6.bK=H.k(a6.y.p(0,"refraction"),"$ia2")
a6.bL=H.k(a6.y.p(0,"refractClr"),"$iP")
switch(t){case C.d:break
case C.i:break
case C.e:a6.eh=H.k(a6.y.p(0,c2),"$iap")
a6.bM=H.k(a6.y.p(0,c3),"$iR")
break
case C.h:a6.ei=H.k(a6.y.p(0,c2),"$iak")
a6.bM=H.k(a6.y.p(0,c3),"$iR")
break}}}t=d1.y
if(t!==C.d){a6.bN=H.k(a6.y.p(0,"alpha"),"$ia2")
switch(t){case C.d:break
case C.i:break
case C.e:a6.ej=H.k(a6.y.p(0,c4),"$iap")
a6.bO=H.k(a6.y.p(0,c5),"$iR")
break
case C.h:a6.ek=H.k(a6.y.p(0,c4),"$iak")
a6.bO=H.k(a6.y.p(0,c5),"$iR")
break}}a6.sfi(H.d([],[A.cZ]))
a6.sfj(H.d([],[A.d0]))
a6.sfk(H.d([],[A.d1]))
a6.sfl(H.d([],[A.d2]))
a6.sfm(H.d([],[A.d3]))
a6.sfn(H.d([],[A.d4]))
if(d1.k2){t=d1.z
if(t>0){a6.el=H.e(a6.y.p(0,"dirLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.v(a7+r+a8))
H.k(g,"$iP")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.v(a7+r+a8))
H.k(f,"$iP")
s=a6.cF;(s&&C.a).h(s,new A.cZ(g,f))}}t=d1.Q
if(t>0){a6.em=H.e(a6.y.p(0,"pntLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.v(a7+r+a8))
H.k(g,"$iP")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.v(a7+r+a8))
H.k(f,"$iP")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.v(a7+r+a8))
H.k(e,"$iP")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.v(a7+r+a8))
H.k(d,"$ia2")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.v(a7+r+a8))
H.k(c,"$ia2")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.v(a7+r+a8))
H.k(b,"$ia2")
s=a6.cG;(s&&C.a).h(s,new A.d0(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.en=H.e(a6.y.p(0,"spotLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.v(a7+r+a8))
H.k(g,"$iP")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.v(a7+r+a8))
H.k(f,"$iP")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.v(a7+r+a8))
H.k(e,"$iP")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.v(a7+r+a8))
H.k(d,"$iP")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.v(a7+r+a8))
H.k(c,"$ia2")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.v(a7+r+a8))
H.k(b,"$ia2")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.v(a7+r+a8))
H.k(a,"$ia2")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.v(a7+r+a8))
H.k(a0,"$ia2")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.v(a7+r+a8))
H.k(a1,"$ia2")
s=a6.cH;(s&&C.a).h(s,new A.d1(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.eo=H.e(a6.y.p(0,"txtDirLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.v(a7+r+a8))
H.k(g,"$iP")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.v(a7+r+a8))
H.k(f,"$iP")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.v(a7+r+a8))
H.k(e,"$iP")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.v(a7+r+a8))
H.k(d,"$iP")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.v(a7+r+a8))
H.k(c,"$iP")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.v(a7+r+a8))
H.k(b,"$iR")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.v(a7+r+a8))
H.k(a,"$iap")
s=a6.cI;(s&&C.a).h(s,new A.d2(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.ep=H.e(a6.y.p(0,"txtPntLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.v(a7+r+a8))
H.k(g,"$iP")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.v(a7+r+a8))
H.k(f,"$iP")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.v(a7+r+a8))
H.k(e,"$id_")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.v(a7+r+a8))
H.k(d,"$iP")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.v(a7+r+a8))
H.k(c,"$iR")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.v(a7+r+a8))
H.k(b,"$ia2")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.v(a7+r+a8))
H.k(a,"$ia2")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.v(a7+r+a8))
H.k(a0,"$ia2")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.v(a7+r+a8))
H.k(a1,"$iak")
s=a6.cJ;(s&&C.a).h(s,new A.d3(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.eq=H.e(a6.y.p(0,"txtSpotLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.v(a7+r+a8))
H.k(g,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.v(a7+r+a8))
H.k(f,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.v(a7+r+a8))
H.k(e,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.v(a7+r+a8))
H.k(d,"$iP")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.v(a7+r+a8))
H.k(c,"$iP")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.v(a7+r+a8))
H.k(b,"$iR")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.v(a7+r+a8))
H.k(a,"$iP")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.v(a7+r+a8))
H.k(a0,"$ia2")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.v(a7+r+a8))
H.k(a1,"$ia2")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.v(a7+r+a8))
H.k(a2,"$ia2")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.v(a7+r+a8))
H.k(a3,"$ia2")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.v(a7+r+a8))
H.k(a4,"$ia2")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.v(a7+r+a8))
H.k(a5,"$iap")
s=a6.cK;(s&&C.a).h(s,new A.d4(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
aq:function(a,b,c){if(c==null||!c.d)C.c.a5(b.a,b.d,1)
else{a.f0(c)
C.c.a5(b.a,b.d,0)}},
al:function(a,b,c){if(c==null||c.d<6)C.c.a5(b.a,b.d,1)
else{a.d5(c)
C.c.a5(b.a,b.d,0)}},
sfA:function(a){this.r1=H.m(a,"$ib",[A.aw],"$ab")},
sfi:function(a){this.cF=H.m(a,"$ib",[A.cZ],"$ab")},
sfj:function(a){this.cG=H.m(a,"$ib",[A.d0],"$ab")},
sfk:function(a){this.cH=H.m(a,"$ib",[A.d1],"$ab")},
sfl:function(a){this.cI=H.m(a,"$ib",[A.d2],"$ab")},
sfm:function(a){this.cJ=H.m(a,"$ib",[A.d3],"$ab")},
sfn:function(a){this.cK=H.m(a,"$ib",[A.d4],"$ab")}}
A.hD.prototype={
iy:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.az+"];\n"
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
iF:function(a){var u
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
iz:function(a){var u
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
iN:function(a){var u,t
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
iO:function(a){var u,t
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
iH:function(a){var u
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
iS:function(a){var u
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
aD:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.h(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.av(c,1))+"Txt;\n")
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iC:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aD(a,s,"emission")
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
ix:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aD(a,s,"ambient")
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
iA:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aD(a,s,"diffuse")
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
iD:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aD(a,s,"invDiffuse")
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
iL:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aD(a,s,"specular")
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
iG:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
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
iJ:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aD(a,s,"reflect")
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
iK:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aD(a,s,"refract")
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
iB:function(a){var u,t=this.z
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
iI:function(a){var u,t=this.Q
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
iM:function(a){var u,t=this.ch
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
iP:function(a){var u,t,s=this.cx
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
iQ:function(a){var u,t,s=this.cy
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
iR:function(a){var u,t,s=this.db
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
iE:function(a){var u
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
i:function(a){return this.ar}}
A.cZ.prototype={}
A.d2.prototype={}
A.d0.prototype={}
A.d3.prototype={}
A.d1.prototype={}
A.d4.prototype={}
A.cO.prototype={
da:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
eA:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.du(b,35633)
r.f=r.du(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.C(H.lm(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.v("Failed to link shader: "+H.l(s)))}r.i8()
r.ia()},
a2:function(a){a.a.useProgram(this.r)
this.x.ja()},
du:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.C(H.lm(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.v("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
i8:function(){var u,t,s,r=this,q=H.d([],[A.dy]),p=r.a,o=H.ah(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dy(p,t.name,s))}r.x=new A.fA(q)},
ia:function(){var u,t,s,r=this,q=H.d([],[A.em]),p=r.a,o=H.ah(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.j7(t.type,t.size,t.name,s))}r.y=new A.j1(q)},
aT:function(a,b,c){var u=this.a
if(a===1)return new A.R(u,b,c)
else return A.la(u,this.r,b,a,c)},
fH:function(a,b,c){var u=this.a
if(a===1)return new A.ap(u,b,c)
else return A.la(u,this.r,b,a,c)},
fI:function(a,b,c){var u=this.a
if(a===1)return new A.ak(u,b,c)
else return A.la(u,this.r,b,a,c)},
bw:function(a,b){return new P.eF(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
j7:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aT(b,c,d)
case 5121:return u.aT(b,c,d)
case 5122:return u.aT(b,c,d)
case 5123:return u.aT(b,c,d)
case 5124:return u.aT(b,c,d)
case 5125:return u.aT(b,c,d)
case 5126:return new A.a2(u.a,c,d)
case 35664:return new A.iX(u.a,c,d)
case 35665:return new A.P(u.a,c,d)
case 35666:return new A.j_(u.a,c,d)
case 35667:return new A.iY(u.a,c,d)
case 35668:return new A.iZ(u.a,c,d)
case 35669:return new A.j0(u.a,c,d)
case 35674:return new A.j2(u.a,c,d)
case 35675:return new A.d_(u.a,c,d)
case 35676:return new A.aw(u.a,c,d)
case 35678:return u.fH(b,c,d)
case 35680:return u.fI(b,c,d)
case 35670:throw H.c(u.bw("BOOL",c))
case 35671:throw H.c(u.bw("BOOL_VEC2",c))
case 35672:throw H.c(u.bw("BOOL_VEC3",c))
case 35673:throw H.c(u.bw("BOOL_VEC4",c))
default:throw H.c(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bY.prototype={
i:function(a){return this.b}}
A.ea.prototype={}
A.em.prototype={}
A.j1.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
R:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.G)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.R.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.iY.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.iZ.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iW.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
siv:function(a){H.m(a,"$ib",[P.p],"$ab")}}
A.a2.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.iX.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.P.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.j_.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.j2.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.d_.prototype={
ap:function(a){var u=new Float32Array(H.cc(H.m(a,"$ib",[P.E],"$ab")))
C.c.eS(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.aw.prototype={
ap:function(a){var u=new Float32Array(H.cc(H.m(a,"$ib",[P.E],"$ab")))
C.c.eT(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ap.prototype={
f0:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.ak.prototype={
d5:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.kk.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cR(s.b,b).cR(s.d.cR(s.c,b),c)
s=new V.ao(r.a,r.b,r.c)
if(!J.a9(a.f,s)){a.f=s
s=a.a
if(s!=null)s.aa()}a.sjN(r.C(0,Math.sqrt(r.I(r))))
s=1-b
u=1-c
u=new V.bq(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.a9(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.aa()}},
$S:44}
F.aa.prototype={
fz:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.eu()
if(q!=null)s=s.H(0,q)
if(u!=null)s=s.H(0,u)
if(t!=null)s=s.H(0,t)
if(s.eB())return
return s.C(0,Math.sqrt(s.I(s)))},
fD:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.M(0,q)
r=new V.W(r.a,r.b,r.c)
s=r.C(0,Math.sqrt(r.I(r)))
r=t.M(0,q)
r=new V.W(r.a,r.b,r.c)
r=s.bd(r.C(0,Math.sqrt(r.I(r))))
return r.C(0,Math.sqrt(r.I(r)))},
cz:function(){var u,t=this
if(t.d!=null)return!0
u=t.fz()
if(u==null){u=t.fD()
if(u==null)return!1}t.d=u
t.a.a.aa()
return!0},
fw:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.eu()
if(q!=null)s=s.H(0,q)
if(u!=null)s=s.H(0,u)
if(t!=null)s=s.H(0,t)
if(s.eB())return
return s.C(0,Math.sqrt(s.I(s)))},
fC:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.V().a){l=d.M(0,g)
l=new V.W(l.a,l.b,l.c)
q=l.C(0,Math.sqrt(l.I(l)))
if(s.a-t.a<0)q=q.U(0)}else{p=(l-u.b)/r
l=d.M(0,g)
l=new V.ao(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).M(0,j)
l=new V.W(l.a,l.b,l.c)
q=l.C(0,Math.sqrt(l.I(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.U(0)}l=n.d
if(l!=null){o=l.C(0,Math.sqrt(l.I(l)))
l=o.bd(q)
l=l.C(0,Math.sqrt(l.I(l))).bd(o)
q=l.C(0,Math.sqrt(l.I(l)))}return q},
cv:function(){var u,t=this
if(t.e!=null)return!0
u=t.fw()
if(u==null){u=t.fC()
if(u==null)return!1}t.e=u
t.a.a.aa()
return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.ao(J.ar(s.e),0)+", "+C.b.ao(J.ar(t.b.e),0)+", "+C.b.ao(J.ar(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
R:function(){return this.G("")}}
F.bn.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.ao(J.ar(u.e),0)+", "+C.b.ao(J.ar(this.b.e),0)},
R:function(){return this.G("")}}
F.bL.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ao(J.ar(u.e),0)},
R:function(){return this.G("")}}
F.e8.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.Q():u},
jq:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a6()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){r=g[s]
h.a.h(0,r.j4())}h.a.a6()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a6()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bL()
if(n.a==null)H.t(P.v("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a6()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a6()
p=p.e
if(typeof p!=="number")return p.H()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nu(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a6()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a6()
p=p.e
if(typeof p!=="number")return p.H()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a6()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cx(l,k,i)}g=h.e
if(g!=null)g.aO(0)},
aH:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aH()||!1
if(!t.a.aH())u=!1
s=t.e
if(s!=null)s.aO(0)
return u},
e_:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aZ()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bu().a)!==0)++s
if((t&$.bt().a)!==0)++s
if((t&$.bv().a)!==0)++s
if((t&$.bw().a)!==0)++s
if((t&$.dt().a)!==0)++s
if((t&$.du().a)!==0)++s
if((t&$.cm().a)!==0)++s
if((t&$.bs().a)!==0)++s
r=a3.gd6(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.E
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dA])
for(n=0,m=0;m<s;++m){l=a3.iZ(m)
k=l.gd6(l)
C.a.n(o,m,new Z.dA(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].jn(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cc(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cr(new Z.ev(a0,f),o,a3)
e.sfS(H.d([],[Z.bG]))
if(a.b.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.a6()
C.a.h(d,c.e)}b=Z.ld(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.a6()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.a6()
C.a.h(d,c.e)}b=Z.ld(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.a6()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.a6()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].c
c.a.a.a6()
C.a.h(d,c.e)}b=Z.ld(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.G(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.G(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.G(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.G(t))}return C.a.m(s,"\n")},
aa:function(){var u=this.e
if(u!=null)u.E(null)},
$ipe:1}
F.ig.prototype={
iV:function(a){var u,t,s,r,q,p
H.m(a,"$ib",[F.aD],"$ab")
u=H.d([],[F.aa])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cx(t,q,p))}return u},
iW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.aD],"$ab")
u=H.d([],[F.aa])
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
C.a.h(u,F.cx(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cx(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cx(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cx(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
aH:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.G)(u),++r)if(!u[r].cz())s=!1
return s},
cw:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.G)(u),++r)if(!u[r].cv())s=!1
return s},
i:function(a){return this.R()},
G:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
R:function(){return this.G("")},
sfN:function(a){this.b=H.m(a,"$ib",[F.aa],"$ab")}}
F.ih.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.R()},
G:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.m(s,"\n")},
R:function(){return this.G("")},
sfT:function(a){this.b=H.m(a,"$ib",[F.bn],"$ab")}}
F.ii.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.R()},
G:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
R:function(){return this.G("")},
scl:function(a){this.b=H.m(a,"$ib",[F.bL],"$ab")}}
F.aD.prototype={
cC:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ji(u.cx,r,o,t,s,q,p,a,n)},
j4:function(){return this.cC(null)},
sjN:function(a){var u
if(!J.a9(this.z,a)){this.z=a
u=this.a
if(u!=null)u.aa()}},
jn:function(a){var u,t,s=this
if(a.v(0,$.aZ())){u=s.f
t=[P.E]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bu())){u=s.r
t=[P.E]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bt())){u=s.x
t=[P.E]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bv())){u=s.y
t=[P.E]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.v(0,$.bw())){u=s.z
t=[P.E]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.dt())){u=s.Q
t=[P.E]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.du())){u=s.Q
t=[P.E]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.cm()))return H.d([s.ch],[P.E])
else if(a.v(0,$.bs())){u=s.cx
t=[P.E]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.E])},
cz:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.eu()
t.d.F(0,new F.jq(s))
s=s.a
t.r=s.C(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.aa()
s=t.a.e
if(s!=null)s.aO(0)}return!0},
cv:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.eu()
t.d.F(0,new F.jp(s))
s=s.a
t.x=s.C(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.aa()
s=t.a.e
if(s!=null)s.aO(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
C.a.h(q,C.b.ao(J.ar(s.e),0))
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
C.a.h(q,V.a_(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
R:function(){return this.G("")}}
F.jq.prototype={
$1:function(a){var u,t
H.e(a,"$iaa")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.H(0,u)}},
$S:9}
F.jp.prototype={
$1:function(a){var u,t
H.e(a,"$iaa")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.H(0,u)}},
$S:9}
F.jj.prototype={
a6:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.v("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.aa()
return!0},
bx:function(a,b,c,d,e,f){var u=F.ji(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
aH:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)u[s].cz()
return!0},
cw:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)u[s].cv()
return!0},
j1:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.C(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a9(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
this.a6()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
siw:function(a){this.c=H.m(a,"$ib",[F.aD],"$ab")}}
F.jk.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.aa]})
C.a.F(u.b,b)
C.a.F(u.c,new F.jl(u,b))
C.a.F(u.d,new F.jm(u,b))},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfO:function(a){this.b=H.m(a,"$ib",[F.aa],"$ab")},
sfP:function(a){this.c=H.m(a,"$ib",[F.aa],"$ab")},
sfQ:function(a){this.d=H.m(a,"$ib",[F.aa],"$ab")}}
F.jl.prototype={
$1:function(a){H.e(a,"$iaa")
if(!J.a9(a.a,this.a))this.b.$1(a)},
$S:9}
F.jm.prototype={
$1:function(a){var u
H.e(a,"$iaa")
u=this.a
if(!J.a9(a.a,u)&&!J.a9(a.b,u))this.b.$1(a)},
$S:9}
F.jn.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfU:function(a){this.b=H.m(a,"$ib",[F.bn],"$ab")},
sfV:function(a){this.c=H.m(a,"$ib",[F.bn],"$ab")}}
F.jo.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
scl:function(a){this.b=H.m(a,"$ib",[F.bL],"$ab")}}
O.dW.prototype={
gq:function(){var u=this.dy
return u==null?this.dy=D.Q():u},
P:function(a){var u
H.e(a,"$iA")
u=this.dy
if(u!=null)u.E(a)},
b7:function(){return this.P(null)},
dK:function(a){H.e(a,"$iA")
this.a=null
this.P(a)},
i3:function(){return this.dK(null)},
h8:function(a,b){var u=V.at
H.m(b,"$ii",[u],"$ai")
u=new D.bH([u])
u.b=!0
this.P(u)},
ha:function(a,b){var u=V.at
H.m(b,"$ii",[u],"$ai")
u=new D.bI([u])
u.b=!0
this.P(u)},
dr:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.f.a8(a1.e.length+3,4)*4,a3=C.f.a8(a1.f.length+3,4)*4,a4=C.f.a8(a1.r.length+3,4)*4,a5=C.f.a8(a1.x.length+3,4)*4,a6=C.f.a8(a1.y.length+3,4)*4,a7=C.f.a8(a1.z.length+3,4)*4,a8=C.f.a8(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.f.i(a1.a)+C.f.i(u.a)+C.f.i(t.a)+C.f.i(s.a)+C.f.i(r.a)+C.f.i(q.a)+C.f.i(p.a)+C.f.i(o.a)+C.f.i(n.a)
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
f=a1===C.e||u===C.e||t===C.e||s===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e
e=a1===C.h||u===C.h||t===C.h||s===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.aZ()
if(h){j=$.bu()
a=new Z.bf(a.a|j.a)}if(g){j=$.bt()
a=new Z.bf(a.a|j.a)}if(f){j=$.bv()
a=new Z.bf(a.a|j.a)}if(e){j=$.bw()
a=new Z.bf(a.a|j.a)}if(c){j=$.bs()
a=new Z.bf(a.a|j.a)}return new A.hD(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
a_:function(a,b){H.m(a,"$ib",[T.cV],"$ab")
if(b!=null)if(!C.a.Y(a,b)){b.sbe(0,a.length)
C.a.h(a,b)}},
au:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.as(u,u.length,[H.r(u,0)]);u.A();){t=u.d
t.toString
s=$.jh
if(s==null)s=$.jh=new V.W(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.d0(s)}}},
eK:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.dr()
u=H.e(a3.fr.j(0,a2.ar),"$idX")
if(u==null){u=A.nz(a2,a3.a)
a3.dW(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bA
a2=a4.e
if(!(a2 instanceof Z.cr))a2=a4.e=null
if(a2==null||!a2.d.v(0,s)){a2=t.r1
if(a2)a4.d.aH()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.cw()
q.a.cw()
q=q.e
if(q!=null)q.aO(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.j1()
p=p.e
if(p!=null)p.aO(0)}n=a4.d.e_(new Z.ew(a3.a),s)
n.aJ($.aZ()).e=a1.a.Q.c
if(a2)n.aJ($.bu()).e=a1.a.cx.c
if(r)n.aJ($.bt()).e=a1.a.ch.c
if(t.rx)n.aJ($.bv()).e=a1.a.cy.c
if(q)n.aJ($.bw()).e=a1.a.db.c
if(t.x1)n.aJ($.bs()).e=a1.a.dx.c
a4.e=n}a2=T.cV
m=H.d([],[a2])
a1.a.a2(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.ga4(q)
r=r.dy
r.toString
r.ap(q.ai(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.ga4(q)
p=a3.dx
p=a3.cx=q.B(0,p.ga4(p))
q=p}r=r.fr
r.toString
r.ap(q.ai(0,!0))}r=a1.a
q=a3.ch
if(q==null){q=a3.gjF()
p=a3.dx
p=a3.ch=q.B(0,p.ga4(p))
q=p}r=r.fy
r.toString
r.ap(q.ai(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.ap(C.n.ai(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.ap(C.n.ai(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.ap(C.n.ai(q,!0))}if(t.az>0){l=a1.e.a.length
r=a1.a.k4
C.c.a5(r.a,r.d,l)
for(r=[P.E],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.h(p,k)
p=p[k]
q.toString
H.e(p,"$iat")
q=q.r1
if(k>=q.length)return H.h(q,k)
q=q[k]
j=new Float32Array(H.cc(H.m(p.ai(0,!0),"$ib",r,"$ab")))
C.c.eT(q.a,q.d,!1,j)}}switch(t.a){case C.d:break
case C.i:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.c.u(r.a,r.d,p,o,q)
break
case C.e:a1.a_(m,a1.f.d)
r=a1.a
q=a1.f.d
r.aq(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break
case C.h:a1.a_(m,a1.f.e)
r=a1.a
q=a1.f.e
r.al(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.d:break
case C.i:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.c.u(r.a,r.d,p,o,q)
break
case C.e:a1.a_(m,a1.r.d)
r=a1.a
q=a1.r.d
r.aq(r.y1,r.az,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break
case C.h:a1.a_(m,a1.r.e)
r=a1.a
q=a1.r.e
r.al(r.y2,r.az,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break}switch(t.c){case C.d:break
case C.i:r=a1.a
q=a1.x.f
r=r.ar
r.toString
p=q.a
o=q.b
q=q.c
C.c.u(r.a,r.d,p,o,q)
break
case C.e:a1.a_(m,a1.x.d)
r=a1.a
q=a1.x.d
r.aq(r.bA,r.bB,q)
q=a1.a
r=a1.x.f
q=q.ar
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break
case C.h:a1.a_(m,a1.x.e)
r=a1.a
q=a1.x.e
r.al(r.e6,r.bB,q)
q=a1.a
r=a1.x.f
q=q.ar
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break}switch(t.d){case C.d:break
case C.i:r=a1.a
q=a1.y.f
r=r.bC
r.toString
p=q.a
o=q.b
q=q.c
C.c.u(r.a,r.d,p,o,q)
break
case C.e:a1.a_(m,a1.y.d)
r=a1.a
q=a1.y.d
r.aq(r.e7,r.bD,q)
q=a1.a
r=a1.y.f
q=q.bC
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break
case C.h:a1.a_(m,a1.y.e)
r=a1.a
q=a1.y.e
r.al(r.e8,r.bD,q)
q=a1.a
r=a1.y.f
q=q.bC
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
break}switch(t.e){case C.d:break
case C.i:r=a1.a
q=a1.z.f
r=r.bE
r.toString
p=q.a
o=q.b
q=q.c
C.c.u(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bG
C.c.N(q.a,q.d,o)
break
case C.e:a1.a_(m,a1.z.d)
r=a1.a
q=a1.z.d
r.aq(r.e9,r.bF,q)
q=a1.a
r=a1.z.f
q=q.bE
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bG
C.c.N(r.a,r.d,o)
break
case C.h:a1.a_(m,a1.z.e)
r=a1.a
q=a1.z.e
r.al(r.ea,r.bF,q)
q=a1.a
r=a1.z.f
q=q.bE
q.toString
p=r.a
o=r.b
r=r.c
C.c.u(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bG
C.c.N(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.el
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.G)(r),++g){f=r[g]
p=a1.a.cF
if(h>=p.length)return H.h(p,h)
e=p[h]
p=i.d0(f.a)
o=p.a
d=p.b
c=p.c
c=p.C(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.c.u(d.a,d.d,o,p,c)
c=f.c
p=e.c
C.c.u(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.em
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.G)(r),++g){f=r[g]
p=a1.a.cG
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbh(f)
o=e.b
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=i.bn(f.gbh(f))
o=e.c
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gt(f)
o=e.d
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gcr()
o=e.e
C.c.N(o.a,o.d,p)
p=f.gcs()
o=e.f
C.c.N(o.a,o.d,p)
p=f.gct()
o=e.r
C.c.N(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.en
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.G)(r),++g){f=r[g]
p=a1.a.cH
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbh(f)
o=e.b
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gcE(f).jY()
o=e.c
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=i.bn(f.gbh(f))
o=e.d
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gt(f)
o=e.e
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gjW()
o=e.f
C.c.N(o.a,o.d,p)
p=f.gjV()
o=e.r
C.c.N(o.a,o.d,p)
p=f.gcr()
o=e.x
C.c.N(o.a,o.d,p)
p=f.gcs()
o=e.y
C.c.N(o.a,o.d,p)
p=f.gct()
o=e.z
C.c.N(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.eo
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.G)(r),++g){f=r[g]
o=a1.a.cI
if(h>=o.length)return H.h(o,h)
e=o[h]
o=f.gbl()
H.m(m,"$ib",p,"$ab")
if(!C.a.Y(m,o)){o.sbe(0,m.length)
C.a.h(m,o)}o=f.gcE(f)
d=e.d
C.c.u(d.a,d.d,o.a,o.b,o.c)
o=f.gbW()
d=e.b
C.c.u(d.a,d.d,o.a,o.b,o.c)
o=f.gbU(f)
d=e.c
C.c.u(d.a,d.d,o.a,o.b,o.c)
o=i.d0(f.gcE(f))
d=o.a
c=o.b
b=o.c
b=o.C(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.c.u(c.a,c.d,d,o,b)
b=f.gt(f)
o=e.f
C.c.u(o.a,o.d,b.a,b.b,b.c)
b=f.gbl()
o=b.geC(b)
if(!o){o=e.x
C.c.a5(o.a,o.d,1)}else{o=e.r
d=b.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.a)
o=e.x
C.c.a5(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.ep
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.y,q=r.length,p=[P.E],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.G)(r),++g){f=r[g]
d=a1.a.cJ
if(h>=d.length)return H.h(d,h)
e=d[h]
d=f.gbl()
H.m(m,"$ib",o,"$ab")
if(!C.a.Y(m,d)){d.sbe(0,m.length)
C.a.h(m,d)}a=i.B(0,f.ga4(f))
d=f.ga4(f)
c=$.cL
d=d.bn(c==null?$.cL=new V.ao(0,0,0):c)
c=e.b
C.c.u(c.a,c.d,d.a,d.b,d.c)
d=$.cL
d=a.bn(d==null?$.cL=new V.ao(0,0,0):d)
c=e.c
C.c.u(c.a,c.d,d.a,d.b,d.c)
d=a.cP(0)
c=e.d
j=new Float32Array(H.cc(H.m(new V.dY(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).ai(0,!0),"$ib",p,"$ab")))
C.c.eS(c.a,c.d,!1,j)
c=f.gt(f)
d=e.e
C.c.u(d.a,d.d,c.a,c.b,c.c)
c=f.gbl()
d=c.geC(c)
if(!d){d=e.r
C.c.a5(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.c.a5(d.a,d.d,0)}d=f.gcr()
c=e.x
C.c.N(c.a,c.d,d)
d=f.gcs()
c=e.y
C.c.N(c.a,c.d,d)
d=f.gct()
c=e.z
C.c.N(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.eq
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.G)(r),++g){f=r[g]
p=a1.a.cK
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbl()
H.m(m,"$ib",a2,"$ab")
if(!C.a.Y(m,p)){p.sbe(0,m.length)
C.a.h(m,p)}p=f.gbh(f)
o=e.b
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gcE(f)
o=e.c
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gbW()
o=e.d
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gbU(f)
o=e.e
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=i.bn(f.gbh(f))
o=e.f
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gbl()
o=p.geC(p)
if(!o){p=e.x
C.c.a5(p.a,p.d,1)}else{o=e.r
d=p.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.a)
p=e.x
C.c.a5(p.a,p.d,0)}p=f.gt(f)
o=e.y
C.c.u(o.a,o.d,p.a,p.b,p.c)
p=f.gjZ()
o=e.z
C.c.N(o.a,o.d,p)
p=f.gk_()
o=e.Q
C.c.N(o.a,o.d,p)
p=f.gcr()
o=e.ch
C.c.N(o.a,o.d,p)
p=f.gcs()
o=e.cx
C.c.N(o.a,o.d,p)
p=f.gct()
o=e.cy
C.c.N(o.a,o.d,p);++h}}}switch(t.f){case C.d:break
case C.i:break
case C.e:a1.a_(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.aq(a2.eb,a2.bH,r)
break
case C.h:a1.a_(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.al(a2.ec,a2.bH,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.ga4(r).cP(0)}a2=a2.id
a2.toString
a2.ap(r.ai(0,!0))}if(t.dy){a1.a_(m,a1.ch)
a2=a1.a
r=a1.ch
a2.al(a2.ed,a2.ee,r)
switch(t.r){case C.d:break
case C.i:a2=a1.a
r=a1.cx.f
a2=a2.bI
a2.toString
q=r.a
p=r.b
r=r.c
C.c.u(a2.a,a2.d,q,p,r)
break
case C.e:a1.a_(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.aq(a2.ef,a2.bJ,r)
r=a1.a
a2=a1.cx.f
r=r.bI
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.u(r.a,r.d,q,p,a2)
break
case C.h:a1.a_(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.al(a2.eg,a2.bJ,r)
r=a1.a
a2=a1.cx.f
r=r.bI
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.u(r.a,r.d,q,p,a2)
break}switch(t.x){case C.d:break
case C.i:a2=a1.a
r=a1.cy.f
a2=a2.bL
a2.toString
q=r.a
p=r.b
r=r.c
C.c.u(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bK
C.c.N(r.a,r.d,p)
break
case C.e:a1.a_(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.aq(a2.eh,a2.bM,r)
r=a1.a
a2=a1.cy.f
r=r.bL
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.u(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bK
C.c.N(a2.a,a2.d,p)
break
case C.h:a1.a_(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.al(a2.ei,a2.bM,r)
r=a1.a
a2=a1.cy.f
r=r.bL
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.u(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bK
C.c.N(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.d
if(r){switch(a2){case C.d:break
case C.i:a2=a1.a
q=a1.db.f
a2=a2.bN
C.c.N(a2.a,a2.d,q)
break
case C.e:a1.a_(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.aq(a2.ej,a2.bO,q)
q=a1.a
a2=a1.db.f
q=q.bN
C.c.N(q.a,q.d,a2)
break
case C.h:a1.a_(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.al(a2.ek,a2.bO,q)
q=a1.a
a2=a1.db.f
q=q.bN
C.c.N(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a2(a3)
a2=a4.e
a2.a2(a3)
a2.ah(a3)
a2.at(a3)
if(r)a3.a.disable(3042)
for(k=0;k<m.length;++k)m[k].at(a3)
a2=a1.a
a2.toString
a3.a.useProgram(null)
a2.x.e3()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dr().ar},
sfB:function(a){this.e=H.m(a,"$ia4",[V.at],"$aa4")}}
O.hB.prototype={
i7:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.V().a)){u.f=a
t=new D.N(u.b,t,a,[P.E])
t.b=!0
u.a.P(t)}},
aE:function(){this.d8()
this.i7(1)}}
O.cD.prototype={
P:function(a){this.a.P(H.e(a,"$iA"))},
b7:function(){return this.P(null)},
aE:function(){},
aF:function(){},
dN:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().W(0,t.gaV())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gaV())
s=new D.N(t.b+".texture2D",u,t.d,[T.ef])
s.b=!0
t.a.P(s)}},
dO:function(a){},
j2:function(a){var u,t=this,s=null
if(t.c!==C.d){t.c=C.d
u=t.a
u.a=null
u.P(s)}t.aE()
t.dN(s)
t.dO(s)
t.a.P(s)}}
O.hC.prototype={}
O.b7.prototype={
co:function(a){var u,t,s=this
if(!J.a9(s.f,a)){u=s.f
s.f=a
t=new D.N(s.b+".color",u,a,[V.z])
t.b=!0
s.a.P(t)}},
aE:function(){this.d8()
this.co(new V.z(0,0,0))},
aF:function(){this.f6()
this.co(new V.z(1,1,1))},
st:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.i
t.aF()
u=t.a
u.a=null
u.P(null)}t.co(b)}}
O.hE.prototype={
bu:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.V().a)){u.ch=a
t=new D.N(u.b+".refraction",t,a,[P.E])
t.b=!0
u.a.P(t)}},
aE:function(){this.d9()
this.bu(1)},
aF:function(){this.bp()
this.bu(1)},
saI:function(a){var u,t=this
if(a<=0)t.j2(0)
else if(t.c===C.d){t.c=C.i
t.bp()
t.bu(1)
u=t.a
u.a=null
u.P(null)}t.bu(a)}}
O.hF.prototype={
bv:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.V().a)){u.ch=a
t=new D.N(u.b+".shininess",t,a,[P.E])
t.b=!0
u.a.P(t)}},
aE:function(){this.d9()
this.bv(100)},
aF:function(){this.bp()
this.bv(100)}}
O.e9.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.Q():u},
P:function(a){var u
H.e(a,"$iA")
u=this.e
if(u!=null)u.E(a)},
b7:function(){return this.P(null)},
eK:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.e(a.fr.j(0,n),"$iea")
if(u==null){t=a.a
u=new A.ea(t,n)
u.da(t,n)
u.eA(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.k(u.y.j(0,"fov"),"$ia2")
u.ch=H.k(u.y.j(0,"ratio"),"$ia2")
u.cx=H.k(u.y.j(0,"boxClr"),"$iP")
u.cy=H.k(u.y.j(0,"boxTxt"),"$iak")
u.db=H.k(u.y.j(0,"viewMat"),"$iaw")
a.dW(u)}o.a=u}if(b.e==null){t=b.d.e_(new Z.ew(a.a),$.aZ())
t.aJ($.aZ()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.a2(a)}t=a.d
s=a.c
r=o.a
r.a2(a)
q=o.b
p=r.Q
C.c.N(p.a,p.d,q)
q=r.ch
C.c.N(q.a,q.d,t/s)
s=o.c
r.cy.d5(s)
s=o.d
t=r.cx
C.c.u(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga4(s).cP(0)
r=r.db
r.toString
r.ap(s.ai(0,!0))
t=b.e
if(t instanceof Z.cr){t.a2(a)
t.ah(a)
t.at(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.e3()
t=o.c
if(t!=null)t.at(a)}}
O.bN.prototype={}
T.cV.prototype={}
T.ef.prototype={}
T.iH.prototype={
sbe:function(a,b){this.a=b},
gq:function(){var u=this.y
return u==null?this.y=D.Q():u},
a2:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
at:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.cW.prototype={
sbe:function(a,b){this.a=b},
gq:function(){var u=this.e
return u==null?this.e=D.Q():u},
a2:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
at:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.iI.prototype={
jo:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.kZ(a)
t=new T.iH()
t.a=0
t.b=q
t.d=t.c=!1
r=W.o
W.a7(u,"load",H.n(new T.iK(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
aU:function(a,b,c,d,e,f){var u,t=W.kZ(c);++this.d
u=W.o
W.a7(t,"load",H.n(new T.iJ(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
dM:function(a,b,c){var u,t,s,r
b=V.lt(b)
u=V.lt(a.width)
t=V.lt(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kU()
s.width=u
s.height=t
r=H.e(C.m.eX(s,"2d"),"$ics")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oH(r.getImageData(0,0,s.width,s.height))}}}
T.iK.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.dM(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.eO(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.e5()}++s.e},
$S:10}
T.iJ.prototype={
$1:function(a){var u=this,t=u.a,s=t.dM(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.eO(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.e5()}++t.e},
$S:10}
V.bk.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dV.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.G)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sac:function(a){this.a=H.m(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.au.prototype={
aL:function(a,b){return!this.f5(0,b)},
i:function(a){return"!["+this.d7(0)+"]"}}
V.i5.prototype={
aL:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c7(this.a),t=H.c7(this.b)
return u+".."+t},
$iaz:1}
V.ie.prototype={
fb:function(a){var u,t
if(a.a.length<=0)throw H.c(P.v("May not create a SetMatcher with zero characters."))
u=new H.aP([P.p,P.S])
for(t=new H.cC(a,a.gl(a),[H.al(a,"y",0)]);t.A();)u.n(0,t.d,!0)
this.si6(u)},
aL:function(a,b){return this.a.by(0,b)},
i:function(a){var u=this.a
return P.cS(u.ga9(u),0,null)},
si6:function(a){this.a=H.m(a,"$iI",[P.p,P.S],"$aI")},
$iaz:1}
V.cP.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cY(this.a.k(0,b))
r.sac(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
jd:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
sir:function(a){this.c=H.m(a,"$ib",[V.cY],"$ab")}}
V.ek.prototype={
i:function(a){var u=H.lv(this.b,"\n","\\n"),t=H.lv(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cX.prototype={
aN:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.G)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
si_:function(a){var u=P.f
this.c=H.m(a,"$iI",[u,u],"$aI")}}
V.iN.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cP(this,b)
u.sir(H.d([],[V.cY]))
u.d=null
this.a.n(0,b,u)}return u},
S:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cX(a)
u=P.f
t.si_(new H.aP([u,u]))
this.b.n(0,a,t)}return t},
eR:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ek]),k=this.c,j=[P.p],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.D(a,s)
q=k.jd(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cS(i,0,m)
throw H.c(P.v("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cS(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ek(n==null?o.b:n,p,s)}++s}}},
sig:function(a){this.a=H.m(a,"$iI",[P.f,V.cP],"$aI")},
sij:function(a){this.b=H.m(a,"$iI",[P.f,V.cX],"$aI")}}
V.cY.prototype={
i:function(a){return this.b.b+": "+this.d7(0)}}
X.bV.prototype={$ib9:1}
X.hc.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.Q():u},
aw:function(a){var u=this.x
if(u!=null)u.E(a)},
se0:function(a,b){var u
if(this.b){this.b=!1
u=new D.N("clearColor",!0,!1,[P.S])
u.b=!0
this.aw(u)}},
a2:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.F(u)
q=C.j.as(r*u)
r=s.b
if(typeof t!=="number")return H.F(t)
p=C.j.as(r*t)
r=C.j.as(s.c*u)
a.c=r
s=C.j.as(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.hi.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.Q():u},
a2:function(a){var u
a.cy.bT(V.c4())
u=V.c4()
a.db.bT(u)},
at:function(a){a.cy.aM()
a.db.aM()},
$ib9:1,
$ibV:1}
X.e3.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.Q():u},
aw:function(a){var u
H.e(a,"$iA")
u=this.f
if(u!=null)u.E(a)},
ft:function(){return this.aw(null)},
a2:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.b8(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bT(k)
r=$.lT
if(r==null){r=V.lV()
q=V.me()
p=$.mb
r=V.lO(r,q,p==null?$.mb=new V.W(0,0,-1):p)
$.lT=r
u=r}else u=r
r=s.b
if(r!=null){t=r.b1(0,a,s)
if(t!=null)u=t.B(0,u)}a.db.bT(u)},
at:function(a){a.cy.aM()
a.db.aM()},
$ib9:1,
$ibV:1}
X.cT.prototype={}
V.bA.prototype={
bq:function(a){this.b=new P.hg(C.U)
this.c=null
this.sc9(H.d([],[[P.b,W.aF]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aF]))
u=a.split("\n")
for(l=u.length,t=[W.aF],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.J(q)
o=m.b.fG(q,0,q.length)
n=o==null?q:o
C.S.f_(p,H.lv(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaA(m.d),p)}},
eI:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.f],"$ab")
q.sc9(H.d([],[[P.b,W.aF]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bz():t).eR(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)q.bS(t[r])},
sc9:function(a){this.d=H.m(a,"$ib",[[P.b,W.aF]],"$ab")}}
V.kP.prototype={
$1:function(a){H.e(a,"$ibc")
P.lu(C.j.eQ(this.a.gjg(),2)+" fps")},
$S:48}
V.fU.prototype={
bS:function(a){var u=this
switch(a.a){case"Class":u.O(a.b,"#551")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break
case"Type":u.O(a.b,"#B11")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bz:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iO()
a1.c=a1.k(0,r)
u=a1.k(0,r).m(0,q)
t=V.w(new H.u("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).m(0,q)
u=V.w(new H.u("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).m(0,p)
t=V.a1("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).m(0,p)
u=V.a1("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).m(0,o)
t=V.w(new H.u("."))
C.a.h(u.a,t)
t=a1.k(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).m(0,n)
t=V.a1("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).m(0,m)
u=V.w(new H.u(l))
C.a.h(t.a,u)
u=a1.k(0,m).m(0,m)
t=V.w(new H.u(l))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,k)
u=V.w(new H.u('"'))
C.a.h(t.a,u)
u=a1.k(0,k).m(0,j)
t=V.w(new H.u('"'))
C.a.h(u.a,t)
t=a1.k(0,k).m(0,i)
u=V.w(new H.u("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).m(0,k)
t=V.w(new H.u('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).m(0,k).a,new V.bk())
t=a1.k(0,r).m(0,h)
u=V.w(new H.u("'"))
C.a.h(t.a,u)
u=a1.k(0,h).m(0,g)
t=V.w(new H.u("'"))
C.a.h(u.a,t)
t=a1.k(0,h).m(0,f)
u=V.w(new H.u("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).m(0,h)
t=V.w(new H.u("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).m(0,h).a,new V.bk())
t=a1.k(0,r).m(0,e)
u=V.w(new H.u("/"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,d)
t=V.w(new H.u("/"))
C.a.h(u.a,t)
t=a1.k(0,d).m(0,c)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).m(0,d)
t=new V.au()
s=[V.az]
t.sac(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,b)
t=V.w(new H.u("*"))
C.a.h(u.a,t)
t=a1.k(0,b).m(0,a)
u=V.w(new H.u("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,b)
t=new V.au()
t.sac(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.u("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,c)
t=V.w(new H.u("/"))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,a0)
u=V.w(new H.u(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).m(0,a0)
t=V.w(new H.u(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.S("Num")
t=a1.k(0,n)
t.d=t.a.S("Num")
t=a1.k(0,m)
t.d=t.a.S("Symbol")
t=a1.k(0,j)
t.d=t.a.S("String")
t=a1.k(0,g)
t.d=t.a.S("String")
t=a1.k(0,c)
t.d=t.a.S(d)
t=a1.k(0,a0)
t.d=t.a.S(a0)
t=a1.k(0,q)
t=t.d=t.a.S(q)
u=[P.f]
t.aN(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aN(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aN(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hd.prototype={
bS:function(a){var u=this
switch(a.a){case"Builtin":u.O(a.b,"#411")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Preprocess":u.O(a.b,"#737")
break
case"Reserved":u.O(a.b,"#119")
break
case"Symbol":u.O(a.b,"#611")
break
case"Type":u.O(a.b,"#171")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bz:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iO()
e.c=e.k(0,r)
u=e.k(0,r).m(0,q)
t=V.w(new H.u("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).m(0,q)
u=V.w(new H.u("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).m(0,p)
t=V.a1("0","9")
C.a.h(u.a,t)
t=e.k(0,p).m(0,p)
u=V.a1("0","9")
C.a.h(t.a,u)
u=e.k(0,p).m(0,o)
t=V.w(new H.u("."))
C.a.h(u.a,t)
t=e.k(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=e.k(0,n).m(0,n)
t=V.a1("0","9")
C.a.h(u.a,t)
t=e.k(0,r).m(0,m)
u=V.w(new H.u(l))
C.a.h(t.a,u)
u=e.k(0,m).m(0,m)
t=V.w(new H.u(l))
C.a.h(u.a,t)
t=e.k(0,r).m(0,k)
u=V.w(new H.u("/"))
C.a.h(t.a,u)
u=e.k(0,k).m(0,j)
t=V.w(new H.u("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).m(0,m).a,new V.bk())
t=e.k(0,j).m(0,i)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=e.k(0,j).m(0,j)
t=new V.au()
s=[V.az]
t.sac(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,h)
t=V.w(new H.u("#"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,h)
u=new V.au()
u.sac(H.d([],s))
C.a.h(t.a,u)
t=V.w(new H.u("\n"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,g)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,f)
t=V.w(new H.u(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).m(0,f)
u=V.w(new H.u(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.S("Num")
u=e.k(0,n)
u.d=u.a.S("Num")
u=e.k(0,m)
u.d=u.a.S("Symbol")
u=e.k(0,i)
u.d=u.a.S(j)
u=e.k(0,g)
u.d=u.a.S(h)
u=e.k(0,f)
u.d=u.a.S(f)
u=e.k(0,q)
u=u.d=u.a.S(q)
t=[P.f]
u.aN(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aN(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aN(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.he.prototype={
bS:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.O(a.b,"#911")
u.O("=",t)
break
case"Id":u.O(a.b,t)
break
case"Other":u.O(a.b,t)
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break}},
bz:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iO()
l.c=l.k(0,s)
u=l.k(0,s).m(0,r)
t=V.w(new H.u("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).m(0,r)
u=V.w(new H.u("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).m(0,q)
t=V.w(new H.u("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).m(0,p)
t=V.w(new H.u("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).m(0,p)
u=V.w(new H.u("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).m(0,o)
t=V.w(new H.u('"'))
C.a.h(u.a,t)
t=l.k(0,o).m(0,n)
u=V.w(new H.u('"'))
C.a.h(t.a,u)
u=l.k(0,o).m(0,"EscStr")
t=V.w(new H.u("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").m(0,o)
u=V.w(new H.u('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).m(0,o).a,new V.bk())
C.a.h(l.k(0,s).m(0,m).a,new V.bk())
u=l.k(0,m).m(0,m)
t=new V.au()
t.sac(H.d([],[V.az]))
C.a.h(u.a,t)
u=V.w(new H.u('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.S("Symbol")
u=l.k(0,n)
u.d=u.a.S("String")
u=l.k(0,r)
t=u.a.S(r)
u.d=t
t.aN(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.k(0,q)
t.d=t.a.S(q)
t=l.k(0,m)
t.d=t.a.S(m)
return l}}
V.hZ.prototype={
eI:function(a,b){H.m(b,"$ib",[P.f],"$ab")
this.sc9(H.d([],[[P.b,W.aF]]))
this.O(C.a.m(b,"\n"),"#111")},
bS:function(a){},
bz:function(){return}}
V.i2.prototype={
dT:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.j9().gbi().j(0,H.l(u))
if(t==null)if(d){c.$0()
m.ba(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.cn(m.c).h(0,q)
o=W.np("radio")
o.checked=s
o.name=u
u=W.o
W.a7(o,"change",H.n(new V.i3(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.cn(m.c).h(0,r.createElement("br"))},
ae:function(a,b,c){return this.dT(a,b,c,!1)},
ba:function(a){var u,t,s=P.j9(),r=P.f,q=P.lM(s.gbi(),r,r)
q.n(0,this.a,a)
u=s.cZ(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.f8([],[]).bX(""),"",t)}}
V.i3.prototype={
$1:function(a){var u=this
if(H.C(u.b.checked)){u.c.$0()
u.a.ba(u.d)}},
$S:10}
V.ij.prototype={
fc:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a7(q,"scroll",H.n(new V.il(o),{func:1,ret:-1,args:[r]}),!1,r)},
dV:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.f],"$ab")
this.i9()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eR(C.a.jm(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q){p=s[q]
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
if(H.p2(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.J(m[1])
l.textContent=H.J(m[0])
t.appendChild(l)}else{k=P.fi(C.C,n,C.l,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.l(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
eW:function(a){var u,t,s,r=new V.fU("dart")
r.bq("dart")
u=new V.hd("glsl")
u.bq("glsl")
t=new V.he("html")
t.bq("html")
s=C.a.je(H.d([r,u,t],[V.bA]),new V.im(a))
if(s!=null)return s
r=new V.hZ("plain")
r.bq("plain")
return r},
dU:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dr(r).a7(r,"+")){C.a.n(b0,s,C.b.av(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a7(r,"-")){C.a.n(b0,s,C.b.av(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eW(a8)
q.eI(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fi(C.C,a7,C.l,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lB()
i.href="#"+H.l(m)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.G)(r),++a0)C.a3.iY(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.G)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gV(r);a3.A();)c.appendChild(a3.gK(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
iT:function(a){var u,t,s,r,q,p,o,n="auto"
H.m(a,"$ib",[P.f],"$ab")
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
s=H.e(r.insertCell(-1),"$ibb").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<2;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.e(r.insertCell(-1),"$ibb")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
i9:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iO()
u.c=u.k(0,q)
t=u.k(0,q).m(0,p)
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).m(0,p)
s=new V.au()
r=[V.az]
s.sac(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("*"))
C.a.h(s.a,t)
t=u.k(0,p).m(0,"BoldEnd")
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,o)
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).m(0,o)
s=new V.au()
s.sac(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("_"))
C.a.h(s.a,t)
t=u.k(0,o).m(0,n)
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,m)
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).m(0,m)
s=new V.au()
s.sac(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("`"))
C.a.h(s.a,t)
t=u.k(0,m).m(0,"CodeEnd")
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,l)
s=V.w(new H.u("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).m(0,k)
s=V.w(new H.u("|"))
C.a.h(t.a,s)
s=u.k(0,l).m(0,j)
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).m(0,l)
t=new V.au()
t.sac(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
s=u.k(0,k).m(0,j)
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).m(0,k)
t=new V.au()
t.sac(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).m(0,i).a,new V.bk())
s=u.k(0,i).m(0,i)
t=new V.au()
t.sac(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.S(p)
s=u.k(0,n)
s.d=s.a.S(o)
s=u.k(0,"CodeEnd")
s.d=s.a.S(m)
s=u.k(0,j)
s.d=s.a.S("Link")
s=u.k(0,i)
s.d=s.a.S(i)
this.b=u}}
V.il.prototype={
$1:function(a){P.m4(C.t,new V.ik(this.a))},
$S:10}
V.ik.prototype={
$0:function(){var u=C.j.as(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:0}
V.im.prototype={
$1:function(a){return H.e(a,"$ibA").a===this.a},
$S:49}
V.iE.prototype={
ae:function(a,b,c){var u,t,s,r,q=this,p=W.kZ(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.cn(q.c)
t=u.gl(u)
u=W.a6
W.a7(p,"click",H.n(new V.iG(q,p,b,t),{func:1,ret:-1,args:[u]}),!1,u)
J.cn(q.c).h(0,p)
J.cn(q.c).h(0,document.createElement("br"))
s=P.j9().gbi().j(0,H.l(q.a))
if(s==null){q.ba(t)
r=c}else r=P.ds(s,null,null)===t
if(r)p.click()},
h:function(a,b){return this.ae(a,b,!1)},
ba:function(a){var u,t,s=P.j9(),r=P.f,q=P.lM(s.gbi(),r,r)
q.n(0,this.a,""+a)
u=s.cZ(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.f8([],[]).bX(""),"",t)}}
V.iG.prototype={
$1:function(a){var u,t,s=this
H.e(a,"$ia6")
u=s.a
t=J.cn(u.c)
t.F(t,new V.iF())
t=s.b.style
t.border="solid 2px black"
u.d.$1(s.c)
u.ba(s.d)},
$S:50}
V.iF.prototype={
$1:function(a){var u
H.e(a,"$iO")
if(!!J.T(a).$ic1){u=a.style
u.border="solid 2px white"}},
$S:51}
B.kC.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.z(0.1,0.1,0.1))
t=u.x
t.st(0,new V.z(0.2,0.2,0.2))
u.cy.st(0,new V.z(0,0,0))
u.cx.st(0,new V.z(1,1,1))},
$S:0}
B.kD.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.z(0.11,0.11,0.1))
t=u.x
t.st(0,new V.z(0.21,0.21,0.2))
u.cy.st(0,new V.z(0,0,0))
u=u.cx
u.st(0,new V.z(1,0.9,0.5))},
$S:0}
B.kE.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.z(0.1,0.1,0.1))
t=u.x
t.st(0,new V.z(0.1,0.1,0.1))
u.cy.saI(0.4)
t=u.cy
t.st(0,new V.z(0.6,0.6,0.6))
u=u.cx
u.st(0,new V.z(0.4,0.4,0.4))},
$S:0}
B.kF.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.z(0.1,0.1,0.1))
t=u.x
t.st(0,new V.z(0.1,0.1,0.1))
u.cy.saI(0.4)
t=u.cy
t.st(0,new V.z(0.2,0.3,1))
u=u.cx
u.st(0,new V.z(0.3,0.3,0.3))},
$S:0}
B.kG.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.z(0.1,0.1,0.1))
t=u.x
t.st(0,new V.z(0.1,0.1,0.1))
u.cy.saI(0.6)
t=u.cy
t.st(0,new V.z(0.8,0.8,0.8))
u=u.cx
u.st(0,new V.z(0.2,0.2,0.2))},
$S:0}
B.kH.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.z(0.1,0.1,0.1))
t=u.x
t.st(0,new V.z(0.1,0.1,0.1))
u.cy.saI(0.6)
u.cy.st(0,new V.z(1,1,1))
u.cx.st(0,new V.z(0,0,0))},
$S:0}
B.kI.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.z(0.1,0.1,0.1))
t=u.x
t.st(0,new V.z(0.1,0.1,0.1))
u.cy.saI(0.9)
t=u.cy
t.st(0,new V.z(1,0.8,0.8))
u.cx.st(0,new V.z(0,0,0))},
$S:0}
B.kJ.prototype={
$0:function(){var u,t=this.a
t.r.st(0,new V.z(0,0,0))
u=t.x
u.st(0,new V.z(0.1,0.1,0.1))
t.cy.saI(0.99)
u=t.cy
u.st(0,new V.z(0.95,0.95,0.95))
t.cx.st(0,new V.z(0,0,0))},
$S:0}
B.kK.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.z(0.3,0.3,0.3))
t=u.x
t.st(0,new V.z(0.5,0.5,0.5))
u.cy.st(0,new V.z(0,0,0))
u=u.cx
u.st(0,new V.z(0.3,0.3,0.3))},
$S:0}
B.kL.prototype={
$1:function(a){var u=this.a.Q,t=this.b.f.jo(a),s=u.c
if(s!==C.e){if(s===C.d)u.aF()
u.c=C.e
u.dO(null)
s=u.a
s.a=null
s.P(null)}u.dN(t)},
$S:22}
B.kM.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iA")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dU("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dU("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.f2=u.i
u=J.dP.prototype
u.f4=u.i
u=P.i.prototype
u.f3=u.bY
u=W.O.prototype
u.c1=u.am
u=W.f_.prototype
u.f7=u.ay
u=O.cD.prototype
u.d8=u.aE
u.f6=u.aF
u=O.b7.prototype
u.d9=u.aE
u.bp=u.aF
u=V.dV.prototype
u.f5=u.aL
u.d7=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oB","o4",11)
u(P,"oC","o5",11)
u(P,"oD","o6",11)
t(P,"mA","oz",3)
s(W,"oO",4,null,["$4"],["o8"],23,0)
s(W,"oP",4,null,["$4"],["o9"],23,0)
var m
r(m=E.an.prototype,"geG",0,0,null,["$1","$0"],["eH","jx"],1,0)
r(m,"geE",0,0,null,["$1","$0"],["eF","ju"],1,0)
q(m,"gjs","jt",7)
q(m,"gjv","jw",7)
r(m=E.ej.prototype,"gdd",0,0,null,["$1","$0"],["df","de"],1,0)
p(m,"gjJ","eL",3)
o(m=X.eq.prototype,"ghn","ho",12)
o(m,"ghb","hc",12)
o(m,"ghh","hi",4)
o(m,"ghr","hs",21)
o(m,"ghp","hq",21)
o(m,"ghv","hw",4)
o(m,"ghz","hA",4)
o(m,"ghl","hm",4)
o(m,"ghx","hy",4)
o(m,"ghj","hk",4)
o(m,"ghB","hC",36)
o(m,"ghD","hE",12)
o(m,"ghT","hU",13)
o(m,"ghP","hQ",13)
o(m,"ghR","hS",13)
r(D.bC.prototype,"gfg",0,0,null,["$1","$0"],["aB","fh"],1,0)
r(m=D.dR.prototype,"gdE",0,0,null,["$1","$0"],["dF","ht"],1,0)
o(m,"ghF","hG",38)
q(m,"gh5","h6",29)
q(m,"ghJ","hK",29)
n(V.Z.prototype,"gl","cQ",25)
n(V.W.prototype,"gl","cQ",25)
r(m=U.cA.prototype,"gaS",0,0,null,["$1","$0"],["T","ab"],1,0)
q(m,"gh3","h4",24)
q(m,"ghH","hI",24)
r(m=U.er.prototype,"gaS",0,0,null,["$1","$0"],["T","ab"],1,0)
o(m,"gcc","cd",2)
o(m,"gce","cf",2)
o(m,"gcg","ci",2)
r(m=U.es.prototype,"gaS",0,0,null,["$1","$0"],["T","ab"],1,0)
o(m,"gcc","cd",2)
o(m,"gce","cf",2)
o(m,"gcg","ci",2)
o(m,"gfX","fY",2)
o(m,"gfZ","h_",2)
o(m,"gip","iq",2)
o(m,"gim","io",2)
o(m,"gik","il",2)
o(U.et.prototype,"gh1","h2",2)
r(m=M.dC.prototype,"ga0",0,0,null,["$1","$0"],["a1","b3"],1,0)
q(m,"ghL","hM",26)
q(m,"ghN","hO",26)
r(M.dE.prototype,"ga0",0,0,null,["$1","$0"],["a1","b3"],1,0)
r(m=M.dI.prototype,"ga0",0,0,null,["$1","$0"],["a1","b3"],1,0)
q(m,"ghd","he",7)
q(m,"ghf","hg",7)
r(m=O.dW.prototype,"gaV",0,0,null,["$1","$0"],["P","b7"],1,0)
r(m,"gi2",0,0,null,["$1","$0"],["dK","i3"],1,0)
q(m,"gh7","h8",15)
q(m,"gh9","ha",15)
r(O.cD.prototype,"gaV",0,0,null,["$1","$0"],["P","b7"],1,0)
r(O.e9.prototype,"gaV",0,0,null,["$1","$0"],["P","b7"],1,0)
r(X.e3.prototype,"gfs",0,0,null,["$1","$0"],["aw","ft"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.X,null)
s(P.X,[H.l3,J.a,J.as,P.eN,P.i,H.cC,P.b3,H.c_,H.d6,H.fN,H.iT,P.bE,H.ct,H.f4,P.ad,H.hp,H.hr,H.hl,P.fb,P.bh,P.aK,P.ex,P.iu,P.cR,P.iv,P.bc,P.am,P.kj,P.jZ,P.ca,P.eM,P.y,P.kb,P.hx,P.bX,P.hh,P.kh,P.kg,P.S,P.ay,P.ac,P.bD,P.hX,P.ec,P.eF,P.hb,P.bF,P.b,P.I,P.L,P.av,P.f,P.ag,P.cb,P.j7,P.k1,W.fQ,W.bP,W.H,W.e1,W.f_,W.k6,W.dK,W.aB,W.jY,W.fj,P.k3,P.fg,P.jT,P.U,O.a4,O.cE,E.fH,E.an,E.i6,E.ej,Z.ev,Z.ew,Z.cr,Z.bG,Z.bf,D.fK,D.bZ,D.A,X.dB,X.dQ,X.hn,X.hu,X.aA,X.hM,X.iP,X.eq,D.bC,D.a8,D.e4,D.eb,D.eg,D.eh,D.ei,V.z,V.aN,V.h3,V.dY,V.at,V.ab,V.ao,V.bq,V.e6,V.Z,V.W,U.er,U.es,U.et,M.dE,M.dI,M.aC,A.dy,A.fA,A.hD,A.cZ,A.d2,A.d0,A.d3,A.d1,A.d4,A.bY,A.em,A.j1,F.aa,F.bn,F.bL,F.e8,F.ig,F.ih,F.ii,F.aD,F.jj,F.jk,F.jn,F.jo,O.bN,O.cD,T.iI,V.bk,V.az,V.dV,V.i5,V.ie,V.cP,V.ek,V.cX,V.iN,X.bV,X.cT,X.hi,X.e3,V.bA,V.i2,V.ij,V.iE])
s(J.a,[J.hk,J.dN,J.dP,J.b4,J.dO,J.c2,H.cH,H.bK,W.j,W.fx,W.bU,W.cs,W.b1,W.b2,W.Y,W.ez,W.fV,W.fW,W.eB,W.dH,W.eD,W.fY,W.o,W.eG,W.aO,W.hf,W.eI,W.bm,W.dT,W.hG,W.eO,W.eP,W.aQ,W.eQ,W.eT,W.aR,W.eX,W.eZ,W.aT,W.f0,W.aU,W.f5,W.aH,W.f9,W.iM,W.aW,W.fc,W.iR,W.jd,W.fk,W.fm,W.fo,W.fq,W.fs,P.b6,P.eK,P.ba,P.eV,P.i1,P.f6,P.bd,P.fe,P.fB,P.ey,P.dz,P.e5,P.c9,P.e7,P.ee,P.en,P.f2])
s(J.dP,[J.hY,J.d5,J.bJ])
t(J.l2,J.b4)
s(J.dO,[J.dM,J.dL])
t(P.ht,P.eN)
s(P.ht,[H.eo,W.jz,W.aq,P.h7])
t(H.u,H.eo)
s(P.i,[H.h0,H.hy,H.d7])
s(H.h0,[H.c3,H.hq])
s(P.b3,[H.hz,H.js])
t(H.hA,H.c3)
t(H.fO,H.fN)
s(P.bE,[H.hU,H.hm,H.j5,H.iV,H.fJ,H.ic,P.fz,P.e2,P.aM,P.j6,P.j3,P.cQ,P.fM,P.fT])
s(H.ct,[H.kQ,H.iB,H.kx,H.ky,H.kz,P.jv,P.ju,P.jw,P.jx,P.ka,P.k9,P.jG,P.jK,P.jH,P.jI,P.jJ,P.jN,P.jO,P.jM,P.jL,P.iw,P.ix,P.kr,P.jW,P.jV,P.jX,P.hs,P.hw,P.fZ,P.h_,P.jc,P.j8,P.ja,P.jb,P.kc,P.kd,P.kf,P.ke,P.kn,P.km,P.ko,P.kp,W.h1,W.hI,W.hK,W.ib,W.it,W.jF,W.hT,W.hS,W.k_,W.k0,W.k8,W.ki,P.k4,P.kt,P.h8,P.h9,P.fD,E.i7,E.i8,E.i9,E.iL,D.h4,D.h5,F.kk,F.jq,F.jp,F.jl,F.jm,T.iK,T.iJ,V.kP,V.i3,V.il,V.ik,V.im,V.iG,V.iF,B.kC,B.kD,B.kE,B.kF,B.kG,B.kH,B.kI,B.kJ,B.kK,B.kL,B.kM])
s(H.iB,[H.ir,H.cp])
t(H.jt,P.fz)
t(P.hv,P.ad)
s(P.hv,[H.aP,W.jy])
t(H.dZ,H.bK)
s(H.dZ,[H.dc,H.de])
t(H.dd,H.dc)
t(H.cI,H.dd)
t(H.df,H.de)
t(H.e_,H.df)
s(H.e_,[H.hN,H.hO,H.hP,H.hQ,H.hR,H.e0,H.cJ])
t(P.jU,P.kj)
t(P.jS,P.jZ)
t(P.fh,P.hx)
t(P.ep,P.fh)
s(P.bX,[P.fF,P.h2])
t(P.bB,P.iv)
s(P.bB,[P.fG,P.hg,P.jg,P.jf])
t(P.je,P.h2)
s(P.ac,[P.E,P.p])
s(P.aM,[P.c8,P.hj])
t(P.jB,P.cb)
s(W.j,[W.D,W.h6,W.cF,W.aS,W.dg,W.aV,W.aI,W.di,W.jr,W.d8,P.fE,P.bT])
s(W.D,[W.O,W.bz,W.d9])
s(W.O,[W.x,P.q])
s(W.x,[W.dw,W.fy,W.co,W.by,W.bW,W.aF,W.ha,W.c1,W.cB,W.id,W.bb,W.ed,W.iz,W.iA,W.cU])
s(W.b1,[W.cu,W.fR,W.fS])
t(W.fP,W.b2)
t(W.cv,W.ez)
t(W.eC,W.eB)
t(W.dG,W.eC)
t(W.eE,W.eD)
t(W.fX,W.eE)
t(W.aG,W.bU)
t(W.eH,W.eG)
t(W.cy,W.eH)
t(W.eJ,W.eI)
t(W.c0,W.eJ)
t(W.bO,W.o)
s(W.bO,[W.b5,W.a6,W.aX])
t(W.hH,W.eO)
t(W.hJ,W.eP)
t(W.eR,W.eQ)
t(W.hL,W.eR)
t(W.eU,W.eT)
t(W.cK,W.eU)
t(W.eY,W.eX)
t(W.i_,W.eY)
t(W.ia,W.eZ)
t(W.dh,W.dg)
t(W.io,W.dh)
t(W.f1,W.f0)
t(W.ip,W.f1)
t(W.is,W.f5)
t(W.fa,W.f9)
t(W.iC,W.fa)
t(W.dj,W.di)
t(W.iD,W.dj)
t(W.fd,W.fc)
t(W.iQ,W.fd)
t(W.bg,W.a6)
t(W.fl,W.fk)
t(W.jA,W.fl)
t(W.eA,W.dH)
t(W.fn,W.fm)
t(W.jP,W.fn)
t(W.fp,W.fo)
t(W.eS,W.fp)
t(W.fr,W.fq)
t(W.k2,W.fr)
t(W.ft,W.fs)
t(W.k5,W.ft)
t(W.jC,W.jy)
t(W.jD,P.iu)
t(W.le,W.jD)
t(W.jE,P.cR)
t(W.k7,W.f_)
t(P.f8,P.k3)
t(P.aj,P.jT)
t(P.eL,P.eK)
t(P.ho,P.eL)
t(P.eW,P.eV)
t(P.hV,P.eW)
t(P.cN,P.q)
t(P.f7,P.f6)
t(P.iy,P.f7)
t(P.ff,P.fe)
t(P.iS,P.ff)
t(P.fC,P.ey)
t(P.hW,P.bT)
t(P.f3,P.f2)
t(P.iq,P.f3)
s(E.fH,[Z.dA,A.cO,T.cV])
s(D.A,[D.bH,D.bI,D.N,X.i0])
s(X.i0,[X.dU,X.bo,X.cG,X.el])
s(O.a4,[D.dR,U.cA,M.dC])
s(D.fK,[U.fL,U.ae])
t(U.dD,U.ae)
s(A.cO,[A.dX,A.ea])
s(A.em,[A.R,A.iY,A.iZ,A.j0,A.iW,A.a2,A.iX,A.P,A.j_,A.j2,A.d_,A.aw,A.ap,A.ak])
s(O.bN,[O.dW,O.e9])
s(O.cD,[O.hB,O.hC,O.b7])
s(O.b7,[O.hE,O.hF])
s(T.cV,[T.ef,T.cW])
t(T.iH,T.ef)
s(V.dV,[V.au,V.cY])
t(X.hc,X.cT)
s(V.bA,[V.fU,V.hd,V.he,V.hZ])
u(H.eo,H.d6)
u(H.dc,P.y)
u(H.dd,H.c_)
u(H.de,P.y)
u(H.df,H.c_)
u(P.eN,P.y)
u(P.fh,P.kb)
u(W.ez,W.fQ)
u(W.eB,P.y)
u(W.eC,W.H)
u(W.eD,P.y)
u(W.eE,W.H)
u(W.eG,P.y)
u(W.eH,W.H)
u(W.eI,P.y)
u(W.eJ,W.H)
u(W.eO,P.ad)
u(W.eP,P.ad)
u(W.eQ,P.y)
u(W.eR,W.H)
u(W.eT,P.y)
u(W.eU,W.H)
u(W.eX,P.y)
u(W.eY,W.H)
u(W.eZ,P.ad)
u(W.dg,P.y)
u(W.dh,W.H)
u(W.f0,P.y)
u(W.f1,W.H)
u(W.f5,P.ad)
u(W.f9,P.y)
u(W.fa,W.H)
u(W.di,P.y)
u(W.dj,W.H)
u(W.fc,P.y)
u(W.fd,W.H)
u(W.fk,P.y)
u(W.fl,W.H)
u(W.fm,P.y)
u(W.fn,W.H)
u(W.fo,P.y)
u(W.fp,W.H)
u(W.fq,P.y)
u(W.fr,W.H)
u(W.fs,P.y)
u(W.ft,W.H)
u(P.eK,P.y)
u(P.eL,W.H)
u(P.eV,P.y)
u(P.eW,W.H)
u(P.f6,P.y)
u(P.f7,W.H)
u(P.fe,P.y)
u(P.ff,W.H)
u(P.ey,P.ad)
u(P.f2,P.y)
u(P.f3,W.H)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.by.prototype
C.m=W.bW.prototype
C.S=W.aF.prototype
C.V=J.a.prototype
C.a=J.b4.prototype
C.W=J.dL.prototype
C.f=J.dM.prototype
C.n=J.dN.prototype
C.j=J.dO.prototype
C.b=J.c2.prototype
C.X=J.bJ.prototype
C.a2=W.cK.prototype
C.F=J.hY.prototype
C.c=P.c9.prototype
C.a3=W.bb.prototype
C.G=W.ed.prototype
C.w=J.d5.prototype
C.H=W.bg.prototype
C.I=W.d8.prototype
C.a4=new P.fG()
C.J=new P.fF()
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.K=function() {
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
C.P=function(getTagFallback) {
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
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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
C.O=function(hooks) {
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
C.N=function(hooks) {
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
C.z=function(hooks) { return hooks; }

C.Q=new P.hX()
C.l=new P.je()
C.R=new P.jg()
C.k=new P.jU()
C.d=new A.bY(0,"ColorSourceType.None")
C.i=new A.bY(1,"ColorSourceType.Solid")
C.e=new A.bY(2,"ColorSourceType.Texture2D")
C.h=new A.bY(3,"ColorSourceType.TextureCube")
C.t=new P.bD(0)
C.T=new P.bD(5e6)
C.U=new P.hh("element",!0,!1,!1,!1)
C.A=H.d(u([127,2047,65535,1114111]),[P.p])
C.o=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.p])
C.Y=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.p=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.p])
C.q=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.p])
C.Z=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.B=H.d(u([]),[P.f])
C.a_=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.p])
C.C=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.r=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.p])
C.D=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.p])
C.a0=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.p])
C.E=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.p])
C.u=H.d(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.v=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.a1=new H.fO(0,{},C.B,[P.f,P.f])})()
var v={mangledGlobalNames:{p:"int",E:"double",ac:"num",f:"String",S:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.L},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a6]},{func:1,ret:P.L,args:[,,]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.p,[P.i,E.an]]},{func:1,ret:P.L,args:[D.A]},{func:1,ret:P.L,args:[F.aa]},{func:1,ret:P.L,args:[W.o]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:-1,args:[P.p,[P.i,V.at]]},{func:1,ret:P.f,args:[P.f]},{func:1,args:[,]},{func:1,ret:P.S,args:[W.D]},{func:1,ret:P.S,args:[W.aB]},{func:1,ret:P.S,args:[P.f]},{func:1,ret:-1,args:[W.b5]},{func:1,ret:P.L,args:[P.f]},{func:1,ret:P.S,args:[W.O,P.f,P.f,W.bP]},{func:1,ret:-1,args:[P.p,[P.i,U.ae]]},{func:1,ret:P.E},{func:1,ret:-1,args:[P.p,[P.i,M.aC]]},{func:1,ret:P.f,args:[P.p]},{func:1,ret:P.L,args:[,]},{func:1,ret:-1,args:[P.p,[P.i,D.a8]]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.L,args:[P.ac]},{func:1,ret:P.L,args:[,],opt:[P.av]},{func:1,args:[P.f]},{func:1,args:[,P.f]},{func:1,args:[W.o]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:P.S,args:[[P.i,D.a8]]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.U,args:[,,]},{func:1,ret:P.U,args:[P.p]},{func:1,ret:[P.I,P.f,P.f],args:[[P.I,P.f,P.f],P.f]},{func:1,ret:P.L,args:[P.f,,]},{func:1,ret:P.L,args:[F.aD,P.E,P.E]},{func:1,ret:-1,args:[P.f,P.p]},{func:1,ret:W.O,args:[W.D]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:P.L,args:[P.bc]},{func:1,ret:P.S,args:[V.bA]},{func:1,ret:P.L,args:[W.a6]},{func:1,ret:P.L,args:[W.O]},{func:1,ret:[P.aK,,],args:[,]},{func:1,ret:-1,args:[W.D,W.D]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b_=0
$.cq=null
$.lD=null
$.li=!1
$.mD=null
$.my=null
$.mJ=null
$.ku=null
$.kA=null
$.lr=null
$.cd=null
$.dn=null
$.dp=null
$.lj=!1
$.a3=C.k
$.ax=[]
$.bl=null
$.kX=null
$.lJ=null
$.lI=null
$.db=P.l5(P.f,P.bF)
$.lP=null
$.lU=null
$.cL=null
$.m_=null
$.ma=null
$.md=null
$.mc=null
$.jh=null
$.mb=null
$.lT=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pb","mN",function(){return H.mC("_$dart_dartClosure")})
u($,"pc","lw",function(){return H.mC("_$dart_js")})
u($,"ph","mO",function(){return H.be(H.iU({
toString:function(){return"$receiver$"}}))})
u($,"pi","mP",function(){return H.be(H.iU({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pj","mQ",function(){return H.be(H.iU(null))})
u($,"pk","mR",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pn","mU",function(){return H.be(H.iU(void 0))})
u($,"po","mV",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pm","mT",function(){return H.be(H.m6(null))})
u($,"pl","mS",function(){return H.be(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pq","mX",function(){return H.be(H.m6(void 0))})
u($,"pp","mW",function(){return H.be(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pH","lx",function(){return P.o3()})
u($,"pt","mY",function(){return P.o_()})
u($,"pI","n1",function(){return H.nA(H.cc(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"pK","n3",function(){return P.nO("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pL","n4",function(){return P.os()})
u($,"pJ","n2",function(){return P.lN(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"pA","n0",function(){return Z.aJ(0)})
u($,"pu","mZ",function(){return Z.aJ(511)})
u($,"pC","aZ",function(){return Z.aJ(1)})
u($,"pB","bu",function(){return Z.aJ(2)})
u($,"pw","bt",function(){return Z.aJ(4)})
u($,"pD","bv",function(){return Z.aJ(8)})
u($,"pE","bw",function(){return Z.aJ(16)})
u($,"px","dt",function(){return Z.aJ(32)})
u($,"py","du",function(){return Z.aJ(64)})
u($,"pz","n_",function(){return Z.aJ(96)})
u($,"pF","cm",function(){return Z.aJ(128)})
u($,"pv","bs",function(){return Z.aJ(256)})
u($,"pa","mM",function(){return new V.h3(1e-9)})
u($,"p9","V",function(){return $.mM()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cH,DataView:H.bK,ArrayBufferView:H.bK,Float32Array:H.cI,Float64Array:H.cI,Int16Array:H.hN,Int32Array:H.hO,Int8Array:H.hP,Uint16Array:H.hQ,Uint32Array:H.hR,Uint8ClampedArray:H.e0,CanvasPixelArray:H.e0,Uint8Array:H.cJ,HTMLAudioElement:W.x,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLLIElement:W.x,HTMLLabelElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMediaElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLVideoElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,AccessibleNodeList:W.fx,HTMLAnchorElement:W.dw,HTMLAreaElement:W.fy,HTMLBaseElement:W.co,Blob:W.bU,HTMLBodyElement:W.by,HTMLCanvasElement:W.bW,CanvasRenderingContext2D:W.cs,CDATASection:W.bz,CharacterData:W.bz,Comment:W.bz,ProcessingInstruction:W.bz,Text:W.bz,CSSNumericValue:W.cu,CSSUnitValue:W.cu,CSSPerspective:W.fP,CSSCharsetRule:W.Y,CSSConditionRule:W.Y,CSSFontFaceRule:W.Y,CSSGroupingRule:W.Y,CSSImportRule:W.Y,CSSKeyframeRule:W.Y,MozCSSKeyframeRule:W.Y,WebKitCSSKeyframeRule:W.Y,CSSKeyframesRule:W.Y,MozCSSKeyframesRule:W.Y,WebKitCSSKeyframesRule:W.Y,CSSMediaRule:W.Y,CSSNamespaceRule:W.Y,CSSPageRule:W.Y,CSSRule:W.Y,CSSStyleRule:W.Y,CSSSupportsRule:W.Y,CSSViewportRule:W.Y,CSSStyleDeclaration:W.cv,MSStyleCSSProperties:W.cv,CSS2Properties:W.cv,CSSImageValue:W.b1,CSSKeywordValue:W.b1,CSSPositionValue:W.b1,CSSResourceValue:W.b1,CSSURLImageValue:W.b1,CSSStyleValue:W.b1,CSSMatrixComponent:W.b2,CSSRotation:W.b2,CSSScale:W.b2,CSSSkew:W.b2,CSSTranslation:W.b2,CSSTransformComponent:W.b2,CSSTransformValue:W.fR,CSSUnparsedValue:W.fS,DataTransferItemList:W.fV,HTMLDivElement:W.aF,DOMException:W.fW,ClientRectList:W.dG,DOMRectList:W.dG,DOMRectReadOnly:W.dH,DOMStringList:W.fX,DOMTokenList:W.fY,Element:W.O,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aG,FileList:W.cy,FileWriter:W.h6,HTMLFormElement:W.ha,Gamepad:W.aO,History:W.hf,HTMLCollection:W.c0,HTMLFormControlsCollection:W.c0,HTMLOptionsCollection:W.c0,ImageData:W.bm,HTMLImageElement:W.c1,HTMLInputElement:W.cB,KeyboardEvent:W.b5,Location:W.dT,MediaList:W.hG,MessagePort:W.cF,MIDIInputMap:W.hH,MIDIOutputMap:W.hJ,MimeType:W.aQ,MimeTypeArray:W.hL,PointerEvent:W.a6,MouseEvent:W.a6,DragEvent:W.a6,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,DocumentType:W.D,Node:W.D,NodeList:W.cK,RadioNodeList:W.cK,Plugin:W.aR,PluginArray:W.i_,RTCStatsReport:W.ia,HTMLSelectElement:W.id,SourceBuffer:W.aS,SourceBufferList:W.io,SpeechGrammar:W.aT,SpeechGrammarList:W.ip,SpeechRecognitionResult:W.aU,Storage:W.is,CSSStyleSheet:W.aH,StyleSheet:W.aH,HTMLTableCellElement:W.bb,HTMLTableDataCellElement:W.bb,HTMLTableHeaderCellElement:W.bb,HTMLTableElement:W.ed,HTMLTableRowElement:W.iz,HTMLTableSectionElement:W.iA,HTMLTemplateElement:W.cU,TextTrack:W.aV,TextTrackCue:W.aI,VTTCue:W.aI,TextTrackCueList:W.iC,TextTrackList:W.iD,TimeRanges:W.iM,Touch:W.aW,TouchEvent:W.aX,TouchList:W.iQ,TrackDefaultList:W.iR,CompositionEvent:W.bO,FocusEvent:W.bO,TextEvent:W.bO,UIEvent:W.bO,URL:W.jd,VideoTrackList:W.jr,WheelEvent:W.bg,Window:W.d8,DOMWindow:W.d8,Attr:W.d9,CSSRuleList:W.jA,ClientRect:W.eA,DOMRect:W.eA,GamepadList:W.jP,NamedNodeMap:W.eS,MozNamedAttrMap:W.eS,SpeechRecognitionResultList:W.k2,StyleSheetList:W.k5,SVGLength:P.b6,SVGLengthList:P.ho,SVGNumber:P.ba,SVGNumberList:P.hV,SVGPointList:P.i1,SVGScriptElement:P.cN,SVGStringList:P.iy,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bd,SVGTransformList:P.iS,AudioBuffer:P.fB,AudioParamMap:P.fC,AudioTrackList:P.fE,AudioContext:P.bT,webkitAudioContext:P.bT,BaseAudioContext:P.bT,OfflineAudioContext:P.hW,WebGLBuffer:P.dz,WebGLProgram:P.e5,WebGL2RenderingContext:P.c9,WebGLShader:P.e7,WebGLTexture:P.ee,WebGLUniformLocation:P.en,SQLResultSetRowList:P.iq})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dZ.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.e_.$nativeSuperclassTag="ArrayBufferView"
W.dg.$nativeSuperclassTag="EventTarget"
W.dh.$nativeSuperclassTag="EventTarget"
W.di.$nativeSuperclassTag="EventTarget"
W.dj.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.mG,[])
else B.mG([])})})()
//# sourceMappingURL=test.dart.js.map
