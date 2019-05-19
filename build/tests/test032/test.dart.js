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
a[c]=function(){a[c]=function(){H.pT(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.m6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.m6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.m6(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lL:function lL(){},
kO:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
og:function(){return new P.cV("No element")},
oh:function(){return new P.cV("Too few elements")},
ad:function ad(a){this.a=a},
h5:function h5(){},
dT:function dT(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
i_:function i_(a,b,c){this.a=a
this.b=b
this.$ti=c},
i0:function i0(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
jD:function jD(a,b,c){this.a=a
this.b=b
this.$ti=c},
jE:function jE(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(){},
d9:function d9(){},
en:function en(){},
o8:function(){throw H.c(P.G("Cannot modify unmodifiable Map"))},
ct:function(a){var u,t=H.M(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
pE:function(a){return v.types[H.ao(a)]},
pJ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iK},
o:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aL(a)
if(typeof u!=="string")throw H.c(H.aH(a))
return u},
cS:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oE:function(a,b){var u,t,s,r,q,p
if(typeof a!=="string")H.t(H.aH(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.M(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ar(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.b.H(r,p)|32)>s)return}return parseInt(a,b)},
oD:function(a){var u,t
if(typeof a!=="string")H.t(H.aH(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.lz(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
ca:function(a){return H.ou(a)+H.m4(H.bT(a),0,null)},
ou:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.O||!!n.$icf){r=C.v(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ct(t.length>1&&C.b.H(t,0)===36?C.b.at(t,1):t)},
ov:function(){if(!!self.location)return self.location.href
return},
mF:function(a){var u,t,s,r,q
H.kT(a)
u=J.aB(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
oF:function(a){var u,t,s,r=H.f([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.H)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aH(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aV(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aH(s))}return H.mF(r)},
mG:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aH(s))
if(s<0)throw H.c(H.aH(s))
if(s>65535)return H.oF(a)}return H.mF(a)},
oG:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
e6:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aV(u,10))>>>0,56320|u&1023)}}throw H.c(P.ar(a,0,1114111,null,null))},
c9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oC:function(a){var u=H.c9(a).getFullYear()+0
return u},
oA:function(a){var u=H.c9(a).getMonth()+1
return u},
ow:function(a){var u=H.c9(a).getDate()+0
return u},
ox:function(a){var u=H.c9(a).getHours()+0
return u},
oz:function(a){var u=H.c9(a).getMinutes()+0
return u},
oB:function(a){var u=H.c9(a).getSeconds()+0
return u},
oy:function(a){var u=H.c9(a).getMilliseconds()+0
return u},
i:function(a){throw H.c(H.aH(a))},
e:function(a,b){if(a==null)J.aB(a)
throw H.c(H.bD(a,b))},
bD:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ba(!0,b,s,null)
u=H.ao(J.aB(a))
if(!(b<0)){if(typeof u!=="number")return H.i(u)
t=b>=u}else t=!0
if(t)return P.a1(b,a,s,null,u)
return P.iv(b,s)},
px:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cb(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cb(a,c,!0,b,"end",u)
return new P.ba(!0,b,"end",null)},
aH:function(a){return new P.ba(!0,a,null,null)},
cn:function(a){if(typeof a!=="number")throw H.c(H.aH(a))
return a},
c:function(a){var u
if(a==null)a=new P.cQ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nC})
u.name=""}else u.toString=H.nC
return u},
nC:function(){return J.aL(this.dartException)},
t:function(a){throw H.c(a)},
H:function(a){throw H.c(P.c2(a))},
bn:function(a){var u,t,s,r,q,p
a=H.nA(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.f([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j7(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mS:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mB:function(a,b){return new H.ij(a,b==null?null:b.method)},
lM:function(a,b){var u=b==null,t=u?null:b.method
return new H.hN(a,t,u?null:b.receiver)},
al:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.lv(a)
if(a==null)return
if(a instanceof H.cC)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aV(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lM(H.o(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mB(H.o(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.nF()
q=$.nG()
p=$.nH()
o=$.nI()
n=$.nL()
m=$.nM()
l=$.nK()
$.nJ()
k=$.nO()
j=$.nN()
i=r.aj(u)
if(i!=null)return f.$1(H.lM(H.M(u),i))
else{i=q.aj(u)
if(i!=null){i.method="call"
return f.$1(H.lM(H.M(u),i))}else{i=p.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=n.aj(u)
if(i==null){i=m.aj(u)
if(i==null){i=l.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=k.aj(u)
if(i==null){i=j.aj(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mB(H.M(u),i))}}return f.$1(new H.jj(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.eb()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ba(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.eb()
return a},
bU:function(a){var u
if(a instanceof H.cC)return a.b
if(a==null)return new H.f4(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f4(a)},
pC:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
pI:function(a,b,c,d,e,f){H.d(a,"$ilH")
switch(H.ao(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.r("Unsupported number of arguments for wrapped closure"))},
co:function(a,b){var u
H.ao(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pI)
a.$identity=u
return u},
o5:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iO().constructor.prototype):Object.create(new H.cv(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.bb
if(typeof t!=="number")return t.n()
$.bb=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.ml(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.pE,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.mk:H.lB
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ml(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
o2:function(a,b,c,d){var u=H.lB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ml:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.o4(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.o2(t,!r,u,b)
if(t===0){r=$.bb
if(typeof r!=="number")return r.n()
$.bb=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cw
return new Function(r+H.o(q==null?$.cw=H.fM("self"):q)+";return "+p+"."+H.o(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.bb
if(typeof r!=="number")return r.n()
$.bb=r+1
o+=r
r="return function("+o+"){return this."
q=$.cw
return new Function(r+H.o(q==null?$.cw=H.fM("self"):q)+"."+H.o(u)+"("+o+");}")()},
o3:function(a,b,c,d){var u=H.lB,t=H.mk
switch(b?-1:a){case 0:throw H.c(H.oJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
o4:function(a,b){var u,t,s,r,q,p,o,n=$.cw
if(n==null)n=$.cw=H.fM("self")
u=$.mj
if(u==null)u=$.mj=H.fM("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.o3(s,!q,t,b)
if(s===1){n="return function(){return this."+H.o(n)+"."+H.o(t)+"(this."+H.o(u)+");"
u=$.bb
if(typeof u!=="number")return u.n()
$.bb=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.o(n)+"."+H.o(t)+"(this."+H.o(u)+", "+o+");"
u=$.bb
if(typeof u!=="number")return u.n()
$.bb=u+1
return new Function(n+u+"}")()},
m6:function(a,b,c,d,e,f,g){return H.o5(a,b,H.ao(c),d,!!e,!!f,g)},
lB:function(a){return a.a},
mk:function(a){return a.c},
fM:function(a){var u,t,s,r=new H.cv("self","target","receiver","name"),q=J.lJ(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
C:function(a){if(a==null)H.pq("boolean expression must not be null")
return a},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b5(a,"String"))},
py:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b5(a,"double"))},
pN:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b5(a,"num"))},
np:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b5(a,"bool"))},
ao:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b5(a,"int"))},
ma:function(a,b){throw H.c(H.b5(a,H.ct(H.M(b).substring(2))))},
pP:function(a,b){throw H.c(H.o1(a,H.ct(H.M(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.ma(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.pP(a,b)},
qz:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.U(a)[b])return a
H.ma(a,b)},
kT:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.c(H.b5(a,"List<dynamic>"))},
nw:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.ma(a,b)},
nq:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ao(u)]
else return a.$S()}return},
ft:function(a,b){var u
if(typeof a=="function")return!0
u=H.nq(J.U(a))
if(u==null)return!1
return H.nc(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.m1)return a
$.m1=!0
try{if(H.ft(a,b))return a
u=H.lt(b)
t=H.b5(a,u)
throw H.c(t)}finally{$.m1=!1}},
cq:function(a,b){if(a!=null&&!H.m5(a,b))H.t(H.b5(a,H.lt(b)))
return a},
b5:function(a,b){return new H.j9("TypeError: "+P.dJ(a)+": type '"+H.nk(a)+"' is not a subtype of type '"+b+"'")},
o1:function(a,b){return new H.fN("CastError: "+P.dJ(a)+": type '"+H.nk(a)+"' is not a subtype of type '"+b+"'")},
nk:function(a){var u,t=J.U(a)
if(!!t.$icz){u=H.nq(t)
if(u!=null)return H.lt(u)
return"Closure"}return H.ca(a)},
pq:function(a){throw H.c(new H.jG(a))},
pT:function(a){throw H.c(new P.fZ(H.M(a)))},
oJ:function(a){return new H.iC(a)},
ns:function(a){return v.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
bT:function(a){if(a==null)return
return a.$ti},
qy:function(a,b,c){return H.cs(a["$a"+H.o(c)],H.bT(b))},
bS:function(a,b,c,d){var u
H.M(c)
H.ao(d)
u=H.cs(a["$a"+H.o(c)],H.bT(b))
return u==null?null:u[d]},
aU:function(a,b,c){var u
H.M(b)
H.ao(c)
u=H.cs(a["$a"+H.o(b)],H.bT(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.ao(b)
u=H.bT(a)
return u==null?null:u[b]},
lt:function(a){return H.bR(a,null)},
bR:function(a,b){var u,t
H.k(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ct(a[0].name)+H.m4(a,1,b)
if(typeof a=="function")return H.ct(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ao(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.o(b[t])}if('func' in a)return H.pj(a,b)
if('futureOr' in a)return"FutureOr<"+H.bR("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
pj:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
H.k(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.f([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.e(a0,n)
p=C.b.n(p,a0[n])
m=u[q]
if(m!=null&&m!==P.O)p+=" extends "+H.bR(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bR(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bR(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bR(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pB(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.M(b[h])
j=j+i+H.bR(e[d],a0)+(" "+H.o(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
m4:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.az("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bR(p,c)}return"<"+u.j(0)+">"},
cs:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dq:function(a,b,c,d){var u,t
H.M(b)
H.kT(c)
H.M(d)
if(a==null)return!1
u=H.bT(a)
t=J.U(a)
if(t[b]==null)return!1
return H.nn(H.cs(t[d],u),null,c,null)},
k:function(a,b,c,d){H.M(b)
H.kT(c)
H.M(d)
if(a==null)return a
if(H.dq(a,b,c,d))return a
throw H.c(H.b5(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ct(b.substring(2))+H.m4(c,0,null),v.mangledGlobalNames)))},
nn:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aT(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aT(a[t],b,c[t],d))return!1
return!0},
qw:function(a,b,c){return a.apply(b,H.cs(J.U(b)["$a"+H.o(c)],H.bT(b)))},
nv:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="z"||a===-1||a===-2||H.nv(u)}return!1},
m5:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="z"||b===-1||b===-2||H.nv(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.m5(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ft(a,b)}u=J.U(a).constructor
t=H.bT(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aT(u,null,b,null)},
y:function(a,b){if(a!=null&&!H.m5(a,b))throw H.c(H.b5(a,H.lt(b)))
return a},
aT:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aT(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="z")return!0
if('func' in c)return H.nc(a,b,c,d)
if('func' in a)return c.name==="lH"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aT("type" in a?a.type:l,b,s,d)
else if(H.aT(a,b,s,d))return!0
else{if(!('$i'+"ab" in t.prototype))return!1
r=t.prototype["$a"+"ab"]
q=H.cs(r,u?a.slice(1):l)
return H.aT(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.nn(H.cs(m,u),b,p,d)},
nc:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aT(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aT(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aT(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aT(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pM(h,b,g,d)},
pM:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aT(c[s],d,a[s],b))return!1}return!0},
qx:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
pK:function(a){var u,t,s,r,q=H.M($.nu.$1(a)),p=$.kM[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kS[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.M($.nm.$2(a,q))
if(q!=null){p=$.kM[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kS[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ls(u)
$.kM[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kS[q]=u
return u}if(s==="-"){r=H.ls(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ny(a,u)
if(s==="*")throw H.c(P.ji(q))
if(v.leafTags[q]===true){r=H.ls(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ny(a,u)},
ny:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.m8(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ls:function(a){return J.m8(a,!1,null,!!a.$iK)},
pL:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ls(u)
else return J.m8(u,c,null,null)},
pG:function(){if(!0===$.m7)return
$.m7=!0
H.pH()},
pH:function(){var u,t,s,r,q,p,o,n
$.kM=Object.create(null)
$.kS=Object.create(null)
H.pF()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.nz.$1(q)
if(p!=null){o=H.pL(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pF:function(){var u,t,s,r,q,p,o=C.E()
o=H.cm(C.F,H.cm(C.G,H.cm(C.w,H.cm(C.w,H.cm(C.H,H.cm(C.I,H.cm(C.J(C.v),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.nu=new H.kP(r)
$.nm=new H.kQ(q)
$.nz=new H.kR(p)},
cm:function(a,b){return a(b)||b},
ms:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pR:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pA:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nA:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
nB:function(a,b,c){var u=H.pS(a,b,c)
return u},
pS:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nA(b),'g'),H.pA(c))},
fT:function fT(){},
fU:function fU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j7:function j7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ij:function ij(a,b){this.a=a
this.b=b},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a){this.a=a},
cC:function cC(a,b){this.a=a
this.b=b},
lv:function lv(a){this.a=a},
f4:function f4(a){this.a=a
this.b=null},
cz:function cz(){},
iV:function iV(){},
iO:function iO(){},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a){this.a=a},
fN:function fN(a){this.a=a},
iC:function iC(a){this.a=a},
jG:function jG(a){this.a=a},
aI:function aI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hM:function hM(a){this.a=a},
hQ:function hQ(a,b){this.a=a
this.b=b
this.c=null},
hR:function hR(a,b){this.a=a
this.$ti=b},
hS:function hS(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
hL:function hL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eO:function eO(a){this.b=a},
jF:function jF(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cj:function(a){return a},
os:function(a){return new Int8Array(a)},
bq:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bD(b,a))},
ph:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.px(a,b,c))
return b},
cM:function cM(){},
bN:function bN(){},
e0:function e0(){},
cN:function cN(){},
e1:function e1(){},
id:function id(){},
ie:function ie(){},
ig:function ig(){},
ih:function ih(){},
ii:function ii(){},
e2:function e2(){},
cO:function cO(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
pB:function(a){return J.mq(a?Object.keys(a):[],null)},
pO:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
m8:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fv:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.m7==null){H.pG()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.ji("Return interceptor for "+H.o(u(a,q))))}s=a.constructor
r=s==null?null:s[$.mc()]
if(r!=null)return r
r=H.pK(a)
if(r!=null)return r
if(typeof a=="function")return C.Q
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.mc(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
oi:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.lA(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ar(a,0,4294967295,"length",null))
return J.mq(new Array(a),b)},
mq:function(a,b){return J.lJ(H.f(a,[b]))},
lJ:function(a){H.kT(a)
a.fixed$length=Array
return a},
mr:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
oj:function(a,b){var u,t
for(u=a.length;b<u;){t=C.b.H(a,b)
if(t!==32&&t!==13&&!J.mr(t))break;++b}return b},
ok:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.b.Y(a,u)
if(t!==32&&t!==13&&!J.mr(t))break}return b},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dO.prototype
return J.dN.prototype}if(typeof a=="string")return J.bM.prototype
if(a==null)return J.dP.prototype
if(typeof a=="boolean")return J.hK.prototype
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.O)return a
return J.fv(a)},
pD:function(a){if(typeof a=="number")return J.c8.prototype
if(typeof a=="string")return J.bM.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.O)return a
return J.fv(a)},
cr:function(a){if(typeof a=="string")return J.bM.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.O)return a
return J.fv(a)},
kN:function(a){if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.O)return a
return J.fv(a)},
nr:function(a){if(typeof a=="number")return J.c8.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.cf.prototype
return a},
dr:function(a){if(typeof a=="string")return J.bM.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.cf.prototype
return a},
fu:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.O)return a
return J.fv(a)},
fx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pD(a).n(a,b)},
Z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).A(a,b)},
me:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.nr(a).aO(a,b)},
mf:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nr(a).E(a,b)},
a_:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pJ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cr(a).i(a,b)},
lw:function(a,b,c){return J.kN(a).m(a,b,c)},
nW:function(a,b){return J.dr(a).H(a,b)},
nX:function(a,b,c){return J.fu(a).iG(a,b,c)},
nY:function(a,b,c,d){return J.fu(a).jI(a,b,c,d)},
nZ:function(a,b){return J.dr(a).Y(a,b)},
lx:function(a,b){return J.kN(a).K(a,b)},
o_:function(a,b,c,d){return J.fu(a).jZ(a,b,c,d)},
ly:function(a,b){return J.kN(a).u(a,b)},
fy:function(a){return J.fu(a).gcK(a)},
dt:function(a){return J.U(a).gJ(a)},
bX:function(a){return J.kN(a).ga5(a)},
aB:function(a){return J.cr(a).gk(a)},
mg:function(a,b){return J.dr(a).cU(a,b)},
o0:function(a,b){return J.fu(a).kE(a,b)},
mh:function(a,b,c){return J.dr(a).C(a,b,c)},
aL:function(a){return J.U(a).j(a)},
lz:function(a){return J.dr(a).f9(a)},
a:function a(){},
hK:function hK(){},
dP:function dP(){},
dQ:function dQ(){},
io:function io(){},
cf:function cf(){},
bt:function bt(){},
aW:function aW(a){this.$ti=a},
lK:function lK(a){this.$ti=a},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c8:function c8(){},
dO:function dO(){},
dN:function dN(){},
bM:function bM(){}},P={
oX:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pr()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.co(new P.jL(s),1)).observe(u,{childList:true})
return new P.jK(s,u,t)}else if(self.setImmediate!=null)return P.ps()
return P.pt()},
oY:function(a){self.scheduleImmediate(H.co(new P.jM(H.j(a,{func:1,ret:-1})),0))},
oZ:function(a){self.setImmediate(H.co(new P.jN(H.j(a,{func:1,ret:-1})),0))},
p_:function(a){P.lT(C.t,H.j(a,{func:1,ret:-1}))},
lT:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.e.a7(a.a,1000)
return P.p1(u<0?0:u,b)},
mR:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.bl]})
u=C.e.a7(a.a,1000)
return P.p2(u<0?0:u,b)},
p1:function(a,b){var u=new P.fc()
u.fH(a,b)
return u},
p2:function(a,b){var u=new P.fc()
u.fI(a,b)
return u},
ai:function(a){return new P.ew(new P.f9(new P.at($.T,[a]),[a]),[a])},
ah:function(a,b){H.j(a,{func:1,ret:-1,args:[P.p,,]})
H.d(b,"$iew")
a.$2(0,null)
b.b=!0
return b.a.a},
au:function(a,b){P.pg(a,H.j(b,{func:1,ret:-1,args:[P.p,,]}))},
ag:function(a,b){H.d(b,"$ilF").ax(0,a)},
af:function(a,b){H.d(b,"$ilF").aZ(H.al(a),H.bU(a))},
pg:function(a,b){var u,t,s,r,q=null
H.j(b,{func:1,ret:-1,args:[P.p,,]})
u=new P.kz(b)
t=new P.kA(b)
s=J.U(a)
if(!!s.$iat)a.cC(u,t,q)
else if(!!s.$iab)a.bX(u,t,q)
else{r=new P.at($.T,[null])
H.y(a,null)
r.a=4
r.c=a
r.cC(u,q,q)}},
aj:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.T.f3(new P.kK(u),P.z,P.p,null)},
n2:function(a,b){var u,t,s
b.a=1
try{a.bX(new P.jZ(b),new P.k_(b),null)}catch(s){u=H.al(s)
t=H.bU(s)
P.mb(new P.k0(b,u,t))}},
jY:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iat")
if(u>=4){t=b.bu()
b.a=a.a
b.c=a.c
P.ch(b,t)}else{t=H.d(b.c,"$ibp")
b.a=2
b.c=a
a.dS(t)}},
ch:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.d(g.c,"$iaC")
g=g.b
r=s.a
q=s.b
g.toString
P.kH(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.ch(h.a,b)}g=h.a
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
if(m){H.d(o,"$iaC")
g=g.b
r=o.a
q=o.b
g.toString
P.kH(i,i,g,r,q)
return}l=$.T
if(l!=n)$.T=n
else l=i
g=b.c
if(g===8)new P.k5(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.k4(u,b,o).$0()}else if((g&2)!==0)new P.k3(h,u,b).$0()
if(l!=null)$.T=l
g=u.b
if(!!J.U(g).$iab){if(g.a>=4){k=H.d(q.c,"$ibp")
q.c=null
b=q.bv(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.jY(g,q)
return}}j=b.b
k=H.d(j.c,"$ibp")
j.c=null
b=j.bv(k)
g=u.a
r=u.b
if(!g){H.y(r,H.u(j,0))
j.a=4
j.c=r}else{H.d(r,"$iaC")
j.a=8
j.c=r}h.a=j
g=j}},
pm:function(a,b){if(H.ft(a,{func:1,args:[P.O,P.ae]}))return b.f3(a,null,P.O,P.ae)
if(H.ft(a,{func:1,args:[P.O]}))return H.j(a,{func:1,ret:null,args:[P.O]})
throw H.c(P.lA(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pl:function(){var u,t
for(;u=$.ck,u!=null;){$.dn=null
t=u.b
$.ck=t
if(t==null)$.dm=null
u.a.$0()}},
pp:function(){$.m2=!0
try{P.pl()}finally{$.dn=null
$.m2=!1
if($.ck!=null)$.md().$1(P.no())}},
nh:function(a){var u=new P.ex(H.j(a,{func:1,ret:-1}))
if($.ck==null){$.ck=$.dm=u
if(!$.m2)$.md().$1(P.no())}else $.dm=$.dm.b=u},
po:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.ck
if(u==null){P.nh(a)
$.dn=$.dm
return}t=new P.ex(a)
s=$.dn
if(s==null){t.b=u
$.ck=$.dn=t}else{t.b=s.b
$.dn=s.b=t
if(t.b==null)$.dm=t}},
mb:function(a){var u,t=null,s={func:1,ret:-1}
H.j(a,s)
u=$.T
if(C.k===u){P.cl(t,t,C.k,a)
return}u.toString
P.cl(t,t,u,H.j(u.cH(a),s))},
q1:function(a,b){return new P.kk(H.k(a,"$icW",[b],"$acW"),[b])},
mQ:function(a,b){var u,t={func:1,ret:-1}
H.j(b,t)
u=$.T
if(u===C.k){u.toString
return P.lT(a,b)}return P.lT(a,H.j(u.cH(b),t))},
oO:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bl]}
H.j(b,s)
u=$.T
if(u===C.k){u.toString
return P.mR(a,b)}t=u.e8(b,P.bl)
$.T.toString
return P.mR(a,H.j(t,s))},
kH:function(a,b,c,d,e){var u={}
u.a=d
P.po(new P.kI(u,e))},
nd:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.T
if(t===c)return d.$0()
$.T=c
u=t
try{t=d.$0()
return t}finally{$.T=u}},
ne:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.y(e,g)
t=$.T
if(t===c)return d.$1(e)
$.T=c
u=t
try{t=d.$1(e)
return t}finally{$.T=u}},
pn:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
t=$.T
if(t===c)return d.$2(e,f)
$.T=c
u=t
try{t=d.$2(e,f)
return t}finally{$.T=u}},
cl:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cH(d):c.jN(d,-1)
P.nh(d)},
jL:function jL(a){this.a=a},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
fc:function fc(){this.c=0},
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ew:function ew(a,b){this.a=a
this.b=!1
this.$ti=b},
jI:function jI(a,b){this.a=a
this.b=b},
jH:function jH(a,b,c){this.a=a
this.b=b
this.c=c},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kK:function kK(a){this.a=a},
ab:function ab(){},
ez:function ez(){},
jJ:function jJ(a,b){this.a=a
this.$ti=b},
f9:function f9(a,b){this.a=a
this.$ti=b},
bp:function bp(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
at:function at(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jV:function jV(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.a=a
this.b=b},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a,b){this.a=a
this.b=b},
k1:function k1(a,b){this.a=a
this.b=b},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
k5:function k5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k6:function k6(a){this.a=a},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a){this.a=a
this.b=null},
cW:function cW(){},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
this.b=b},
cX:function cX(){},
iR:function iR(){},
kk:function kk(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
bl:function bl(){},
aC:function aC(a,b){this.a=a
this.b=b},
ky:function ky(){},
kI:function kI(a,b){this.a=a
this.b=b},
kd:function kd(){},
kf:function kf(a,b,c){this.a=a
this.b=b
this.c=c},
ke:function ke(a,b){this.a=a
this.b=b},
kg:function kg(a,b,c){this.a=a
this.b=b
this.c=c},
ol:function(a,b){return new H.aI([a,b])},
mu:function(a,b){return new H.aI([a,b])},
om:function(a){return H.pC(a,new H.aI([null,null]))},
on:function(a){return new P.ka([a])},
lZ:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
n4:function(a,b,c){var u=new P.kb(a,b,[c])
u.c=a.e
return u},
of:function(a,b,c){var u,t
if(P.m3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.f([],[P.h])
C.a.h($.aK,a)
try{P.pk(a,u)}finally{if(0>=$.aK.length)return H.e($.aK,-1)
$.aK.pop()}t=P.mO(b,H.nw(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
lI:function(a,b,c){var u,t
if(P.m3(a))return b+"..."+c
u=new P.az(b)
C.a.h($.aK,a)
try{t=u
t.a=P.mO(t.a,a,", ")}finally{if(0>=$.aK.length)return H.e($.aK,-1)
$.aK.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
m3:function(a){var u,t
for(u=$.aK.length,t=0;t<u;++t)if(a===$.aK[t])return!0
return!1},
pk:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.h],"$ab")
u=a.ga5(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.G())return
r=H.o(u.gV(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.G()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gV(u);++s
if(!u.G()){if(s<=4){C.a.h(b,H.o(o))
return}q=H.o(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gV(u);++s
for(;u.G();o=n,n=m){m=u.gV(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.o(o)
q=H.o(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
mv:function(a,b,c){var u=P.ol(b,c)
a.u(0,new P.hT(u,b,c))
return u},
lN:function(a){var u,t={}
if(P.m3(a))return"{...}"
u=new P.az("")
try{C.a.h($.aK,a)
u.a+="{"
t.a=!0
J.ly(a,new P.hY(t,u))
u.a+="}"}finally{if(0>=$.aK.length)return H.e($.aK,-1)
$.aK.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ka:function ka(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
db:function db(a){this.a=a
this.c=this.b=null},
kb:function kb(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
hU:function hU(){},
x:function x(){},
hX:function hX(){},
hY:function hY(a,b){this.a=a
this.b=b},
aw:function aw(){},
kq:function kq(){},
hZ:function hZ(){},
eo:function eo(a,b){this.a=a
this.$ti=b},
kh:function kh(){},
eN:function eN(){},
fi:function fi(){},
oS:function(a,b,c,d){H.k(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.oT(!1,b,c,d)
return},
oT:function(a,b,c,d){var u,t,s=$.nP()
if(s==null)return
u=0===c
if(u&&!0)return P.lW(s,b)
t=b.length
d=P.bz(c,d,t)
if(u&&d===t)return P.lW(s,b)
return P.lW(s,b.subarray(c,d))},
lW:function(a,b){if(P.oV(b))return
return P.oW(a,b)},
oW:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.al(t)}return},
oV:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oU:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.al(t)}return},
ng:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.p],"$ab")
for(u=J.cr(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.c1()
if((s&127)!==s)return t-b}return c-b},
mi:function(a,b,c,d,e,f){if(C.e.bl(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fJ:function fJ(){},
fK:function fK(){},
c0:function c0(){},
c3:function c3(){},
h6:function h6(){},
jr:function jr(){},
jt:function jt(){},
kx:function kx(a){this.b=0
this.c=a},
js:function js(a){this.a=a},
kw:function kw(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
bV:function(a,b,c){var u
H.j(b,{func:1,ret:P.p,args:[P.h]})
u=H.oE(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
pz:function(a){var u=H.oD(a)
if(u!=null)return u
throw H.c(P.a7("Invalid double",a,null))},
oc:function(a){if(a instanceof H.cz)return a.j(0)
return"Instance of '"+H.ca(a)+"'"},
oo:function(a,b,c){var u,t
H.y(b,c)
u=J.oi(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.m(u,t,b)
return H.k(u,"$ib",[c],"$ab")},
mw:function(a,b,c){var u,t=[c],s=H.f([],t)
for(u=J.bX(a);u.G();)C.a.h(s,H.y(u.gV(u),c))
if(b)return s
return H.k(J.lJ(s),"$ib",t,"$ab")},
cY:function(a,b,c){var u,t=P.p
H.k(a,"$in",[t],"$an")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaW",[t],"$aaW")
u=a.length
c=P.bz(b,c,u)
return H.mG(b>0||c<u?C.a.fk(a,b,c):a)}if(!!J.U(a).$icO)return H.oG(a,b,P.bz(b,c,a.length))
return P.oL(a,b,c)},
oL:function(a,b,c){var u,t,s,r,q=null
H.k(a,"$in",[P.p],"$an")
if(b<0)throw H.c(P.ar(b,0,J.aB(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ar(c,b,J.aB(a),q,q))
t=J.bX(a)
for(s=0;s<b;++s)if(!t.G())throw H.c(P.ar(b,0,s,q,q))
r=[]
if(u)for(;t.G();)r.push(t.gV(t))
else for(s=b;s<c;++s){if(!t.G())throw H.c(P.ar(c,b,s,q,q))
r.push(t.gV(t))}return H.mG(r)},
lR:function(a){return new H.hL(a,H.ms(a,!1,!0,!1))},
mO:function(a,b,c){var u=J.bX(b)
if(!u.G())return a
if(c.length===0){do a+=H.o(u.gV(u))
while(u.G())}else{a+=H.o(u.gV(u))
for(;u.G();)a=a+c+H.o(u.gV(u))}return a},
ep:function(){var u=H.ov()
if(u!=null)return P.oR(u)
throw H.c(P.G("'Uri.base' is not supported"))},
kv:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.k(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.nU().b
if(typeof b!=="string")H.t(H.aH(b))
u=u.test(b)}else u=!1
if(u)return b
H.y(b,H.aU(c,"c0",0))
t=c.gjX().cL(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.e6(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
o9:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
oa:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dD:function(a){if(a>=10)return""+a
return"0"+a},
mm:function(a,b){return new P.br(1e6*b+1000*a)},
dJ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aL(a)
if(typeof a==="string")return JSON.stringify(a)
return P.oc(a)},
du:function(a){return new P.ba(!1,null,null,a)},
lA:function(a,b,c){return new P.ba(!0,a,b,c)},
iv:function(a,b){return new P.cb(null,null,!0,a,b,"Value not in range")},
ar:function(a,b,c,d,e){return new P.cb(b,c,!0,a,d,"Invalid value")},
bz:function(a,b,c){if(0>a||a>c)throw H.c(P.ar(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ar(b,a,c,"end",null))
return b}return c},
lQ:function(a,b){if(typeof a!=="number")return a.E()
if(a<0)throw H.c(P.ar(a,0,null,b,null))},
a1:function(a,b,c,d,e){var u=H.ao(e==null?J.aB(b):e)
return new P.hl(u,!0,a,c,"Index out of range")},
G:function(a){return new P.jk(a)},
ji:function(a){return new P.jh(a)},
lS:function(a){return new P.cV(a)},
c2:function(a){return new P.fS(a)},
r:function(a){return new P.eG(a)},
a7:function(a,b,c){return new P.hg(a,b,c)},
op:function(a,b,c){var u,t
H.j(b,{func:1,ret:c,args:[P.p]})
u=H.f([],[c])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.m(u,t,b.$1(t))
return u},
fw:function(a){H.pO(a)},
oR:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.H(a,4)^58)*3|C.b.H(a,0)^100|C.b.H(a,1)^97|C.b.H(a,2)^116|C.b.H(a,3)^97)>>>0
if(u===0)return P.mT(e<e?C.b.C(a,0,e):a,5,f).gfd()
else if(u===32)return P.mT(C.b.C(a,5,e),0,f).gfd()}t=new Array(8)
t.fixed$length=Array
s=H.f(t,[P.p])
C.a.m(s,0,0)
C.a.m(s,1,-1)
C.a.m(s,2,-1)
C.a.m(s,7,-1)
C.a.m(s,3,0)
C.a.m(s,4,0)
C.a.m(s,5,e)
C.a.m(s,6,e)
if(P.nf(a,0,e,0,s)>=14)C.a.m(s,7,e)
r=s[1]
if(typeof r!=="number")return r.aO()
if(r>=0)if(P.nf(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.n()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.E()
if(typeof n!=="number")return H.i(n)
if(m<n)n=m
if(typeof o!=="number")return o.E()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.E()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.E()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.ag(a,"..",o)))j=n>o+2&&C.b.ag(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ag(a,"file",0)){if(q<=0){if(!C.b.ag(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.C(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.b1(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ag(a,"http",0)){if(t&&p+3===o&&C.b.ag(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b1(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ag(a,"https",0)){if(t&&p+4===o&&C.b.ag(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b1(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.C(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.ki(a,r,q,p,o,n,m,k)}return P.p3(a,0,e,r,q,p,o,n,m,k)},
mV:function(a){var u=P.h
return C.a.k6(H.f(a.split("&"),[u]),P.mu(u,u),new P.jp(C.l),[P.A,P.h,P.h])},
oQ:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jm(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.bV(C.b.C(a,s,t),n,n)
if(typeof p!=="number")return p.d8()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.bV(C.b.C(a,s,c),n,n)
if(typeof p!=="number")return p.d8()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jn(a)
t=new P.jo(u,a)
if(a.length<2)u.$1("address is too short")
s=H.f([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.Y(a,r)
if(n===58){if(r===b){++r
if(C.b.Y(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaL(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oQ(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aV(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
p3:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.pa(a,b,d)
else{if(d===b)P.dk(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.pb(a,u,e-1):""
s=P.p7(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.i(g)
q=r<g?P.p9(P.bV(C.b.C(a,r,g),new P.kr(a,f),n),j):n}else{q=n
s=q
t=""}p=P.p8(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.E()
o=h<i?P.m_(a,h+1,i,n):n
return new P.ci(j,t,s,q,p,o,i<c?P.p6(a,i+1,c):n)},
n5:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dk:function(a,b,c){throw H.c(P.a7(c,a,b))},
p9:function(a,b){if(a!=null&&a===P.n5(b))return
return a},
p7:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.p()
u=c-1
if(C.b.Y(a,u)!==93)P.dk(a,b,"Missing end `]` to match `[` in host")
P.mU(a,b+1,u)
return C.b.C(a,b,c).toLowerCase()}if(typeof c!=="number")return H.i(c)
t=b
for(;t<c;++t)if(C.b.Y(a,t)===58){P.mU(a,b,c)
return"["+a+"]"}return P.pd(a,b,c)},
pd:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.i(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Y(a,u)
if(q===37){p=P.nb(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.az("")
n=C.b.C(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.C(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.az("")
if(t<u){s.a+=C.b.C(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.dk(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.az("")
n=C.b.C(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.n6(q)
u+=l
t=u}}}}if(s==null)return C.b.C(a,b,c)
if(t<c){n=C.b.C(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
pa:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.n8(C.b.H(a,b)))P.dk(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dk(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.C(a,b,c)
return P.p4(t?a.toLowerCase():a)},
p4:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pb:function(a,b,c){return P.dl(a,b,c,C.S,!1)},
p8:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dl(a,b,c,C.z,!0):C.m.l_(d,new P.ks(),P.h).F(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.af(u,"/"))u="/"+u
return P.pc(u,e,f)},
pc:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.af(a,"/"))return P.pe(a,!u||c)
return P.pf(a)},
m_:function(a,b,c,d){var u,t={}
H.k(d,"$iA",[P.h,null],"$aA")
if(a!=null){if(d!=null)throw H.c(P.du("Both query and queryParameters specified"))
return P.dl(a,b,c,C.p,!0)}if(d==null)return
u=new P.az("")
t.a=""
d.u(0,new P.kt(new P.ku(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
p6:function(a,b,c){return P.dl(a,b,c,C.p,!0)},
nb:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.Y(a,b+1)
t=C.b.Y(a,p)
s=H.kO(u)
r=H.kO(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aV(q,4)
if(p>=8)return H.e(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
if(p)return H.e6(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.C(a,b,b+3).toUpperCase()
return},
n6:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.f(u,[P.p])
C.a.m(t,0,37)
C.a.m(t,1,C.b.H(o,a>>>4))
C.a.m(t,2,C.b.H(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.f(u,[P.p])
for(q=0;--r,r>=0;s=128){p=C.e.iS(a,6*r)&63|s
C.a.m(t,q,37)
C.a.m(t,q+1,C.b.H(o,p>>>4))
C.a.m(t,q+2,C.b.H(o,p&15))
q+=3}}return P.cY(t,0,null)},
dl:function(a,b,c,d,e){var u=P.na(a,b,c,H.k(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.C(a,b,c):u},
na:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.E()
if(typeof c!=="number")return H.i(c)
if(!(t<c))break
c$0:{q=C.b.Y(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.nb(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dk(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.Y(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.n6(q)}}if(r==null)r=new P.az("")
r.a+=C.b.C(a,s,t)
r.a+=H.o(o)
if(typeof n!=="number")return H.i(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.E()
if(s<c)r.a+=C.b.C(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
n9:function(a){if(C.b.af(a,"."))return!0
return C.b.cU(a,"/.")!==-1},
pf:function(a){var u,t,s,r,q,p,o
if(!P.n9(a))return a
u=H.f([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Z(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.F(u,"/")},
pe:function(a,b){var u,t,s,r,q,p
if(!P.n9(a))return!b?P.n7(a):a
u=H.f([],[P.h])
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
C.a.m(u,0,P.n7(u[0]))}return C.a.F(u,"/")},
n7:function(a){var u,t,s,r=a.length
if(r>=2&&P.n8(J.nW(a,0)))for(u=1;u<r;++u){t=C.b.H(a,u)
if(t===58)return C.b.C(a,0,u)+"%3A"+C.b.at(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.q,s)
s=(C.q[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
p5:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.du("Invalid URL encoding"))}}return u},
m0:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.H(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.C(a,b,c)
else r=new H.ad(C.b.C(a,b,c))}else{r=H.f([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.b.H(a,q)
if(t>127)throw H.c(P.du("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.du("Truncated URI"))
C.a.h(r,P.p5(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.k(r,"$ib",[P.p],"$ab")
return new P.js(!1).cL(r)},
n8:function(a){var u=a|32
return 97<=u&&u<=122},
mT:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.f([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.H(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a7(m,a,t))}}if(s<0&&t>b)throw H.c(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.H(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaL(l)
if(r!==44||t!==p+7||!C.b.ag(a,"base64",p+1))throw H.c(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.D.kg(0,a,o,u)
else{n=P.na(a,o,u,C.p,!0)
if(n!=null)a=C.b.b1(a,o,u,n)}return new P.jl(a,l,c)},
pi:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.op(22,new P.kC(),P.S),n=new P.kB(o),m=new P.kD(),l=new P.kE(),k=H.d(n.$2(0,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(14,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(15,225),"$iS")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(1,225),"$iS")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(2,235),"$iS")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(3,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(4,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(5,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(6,231),"$iS")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(7,231),"$iS")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.d(n.$2(8,8),"$iS"),"]",5)
k=H.d(n.$2(9,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(16,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(17,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(10,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(18,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(19,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(11,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.d(n.$2(12,236),"$iS")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.d(n.$2(13,237),"$iS")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.d(n.$2(20,245),"$iS"),"az",21)
k=H.d(n.$2(21,245),"$iS")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
nf:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.p],"$ab")
u=$.nV()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.H(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.m(e,q>>>5,t)}return d},
L:function L(){},
aM:function aM(a,b){this.a=a
this.b=b},
F:function F(){},
br:function br(a){this.a=a},
h3:function h3(){},
h4:function h4(){},
bJ:function bJ(){},
fD:function fD(){},
cQ:function cQ(){},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cb:function cb(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hl:function hl(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jk:function jk(a){this.a=a},
jh:function jh(a){this.a=a},
cV:function cV(a){this.a=a},
fS:function fS(a){this.a=a},
im:function im(){},
eb:function eb(){},
fZ:function fZ(a){this.a=a},
eG:function eG(a){this.a=a},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
p:function p(){},
n:function n(){},
aP:function aP(){},
b:function b(){},
A:function A(){},
z:function z(){},
ak:function ak(){},
O:function O(){},
dV:function dV(){},
ae:function ae(){},
h:function h(){},
az:function az(a){this.a=a},
jp:function jp(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a,b){this.a=a
this.b=b},
ci:function ci(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kr:function kr(a,b){this.a=a
this.b=b},
ks:function ks(){},
ku:function ku(a,b){this.a=a
this.b=b},
kt:function kt(a){this.a=a},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
kC:function kC(){},
kB:function kB(a){this.a=a},
kD:function kD(){},
kE:function kE(){},
ki:function ki(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jR:function jR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pw:function(a){var u,t=J.U(a)
if(!!t.$ibs){u=t.gef(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fh(a.data,a.height,a.width)},
pv:function(a){if(a instanceof P.fh)return{data:a.a,height:a.b,width:a.c}
return a},
bC:function(a){var u,t,s,r,q
if(a==null)return
u=P.mu(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r){q=H.M(t[r])
u.m(0,q,a[q])}return u},
pu:function(a){var u={}
a.u(0,new P.kL(u))
return u},
kl:function kl(){},
km:function km(a,b){this.a=a
this.b=b},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
kL:function kL(a){this.a=a},
f8:function f8(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(){},
he:function he(){},
k9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
p0:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kc:function kc(){},
ax:function ax(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bg:function bg(){},
hP:function hP(){},
bj:function bj(){},
ik:function ik(){},
ir:function ir(){},
iU:function iU(){},
v:function v(){},
bm:function bm(){},
j6:function j6(){},
eL:function eL(){},
eM:function eM(){},
eW:function eW(){},
eX:function eX(){},
f6:function f6(){},
f7:function f7(){},
ff:function ff(){},
fg:function fg(){},
S:function S(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(a){this.a=a},
fI:function fI(){},
bY:function bY(){},
il:function il(){},
ey:function ey(){},
dw:function dw(){},
e7:function e7(){},
cd:function cd(){},
e9:function e9(){},
ed:function ed(){},
em:function em(){},
iN:function iN(){},
f2:function f2(){},
f3:function f3(){}},W={
lC:function(){var u=document.createElement("canvas")
return u},
ob:function(a){H.d(a,"$il")
return"wheel"},
mo:function(a){return W.oe(a,null,null).f7(new W.hj(),P.h)},
oe:function(a,b,c){var u,t=W.be,s=new P.at($.T,[t]),r=new P.jJ(s,[t]),q=new XMLHttpRequest()
C.N.kp(q,"GET",a,!0)
t=W.bk
u={func:1,ret:-1,args:[t]}
W.a9(q,"load",H.j(new W.hk(q,r),u),!1,t)
W.a9(q,"error",H.j(r.ged(),u),!1,t)
q.send()
return s},
mp:function(a){var u,t=document.createElement("input"),s=H.d(t,"$icH")
try{s.type=a}catch(u){H.al(u)}return s},
k8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
n3:function(a,b,c,d){var u=W.k8(W.k8(W.k8(W.k8(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a9:function(a,b,c,d,e){var u=W.nl(new W.jU(c),W.q)
u=new W.jT(a,b,u,!1,[e])
u.j7()
return u},
nl:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.T
if(u===C.k)return a
return u.e8(a,b)},
w:function w(){},
fz:function fz(){},
fB:function fB(){},
fC:function fC(){},
bZ:function bZ(){},
c_:function c_(){},
cx:function cx(){},
bI:function bI(){},
cA:function cA(){},
fV:function fV(){},
W:function W(){},
cB:function cB(){},
fW:function fW(){},
bc:function bc(){},
bd:function bd(){},
fX:function fX(){},
fY:function fY(){},
h_:function h_(){},
dF:function dF(){},
h0:function h0(){},
dG:function dG(){},
dH:function dH(){},
h1:function h1(){},
h2:function h2(){},
jP:function jP(a,b){this.a=a
this.b=b},
a6:function a6(){},
q:function q(){},
l:function l(){},
aO:function aO(){},
cD:function cD(){},
hb:function hb(){},
hf:function hf(){},
aV:function aV(){},
hi:function hi(){},
c5:function c5(){},
be:function be(){},
hj:function hj(){},
hk:function hk(a,b){this.a=a
this.b=b},
cF:function cF(){},
bs:function bs(){},
cG:function cG(){},
cH:function cH(){},
cy:function cy(){},
bf:function bf(){},
hV:function hV(){},
i6:function i6(){},
cK:function cK(){},
i7:function i7(){},
i8:function i8(a){this.a=a},
i9:function i9(){},
ia:function ia(a){this.a=a},
aY:function aY(){},
ib:function ib(){},
ap:function ap(){},
jO:function jO(a){this.a=a},
I:function I(){},
cP:function cP(){},
aZ:function aZ(){},
ip:function ip(){},
bk:function bk(){},
iA:function iA(){},
iB:function iB(a){this.a=a},
iD:function iD(){},
b_:function b_(){},
iL:function iL(){},
b0:function b0(){},
iM:function iM(){},
b1:function b1(){},
iP:function iP(){},
iQ:function iQ(a){this.a=a},
aQ:function aQ(){},
bA:function bA(){},
b2:function b2(){},
aR:function aR(){},
iW:function iW(){},
iX:function iX(){},
j1:function j1(){},
b3:function b3(){},
b4:function b4(){},
j4:function j4(){},
j5:function j5(){},
bQ:function bQ(){},
jq:function jq(){},
jC:function jC(){},
bo:function bo(){},
da:function da(){},
jQ:function jQ(){},
eB:function eB(){},
k7:function k7(){},
eT:function eT(){},
kj:function kj(){},
kn:function kn(){},
jS:function jS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lY:function lY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jT:function jT(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jU:function jU(a){this.a=a},
D:function D(){},
dK:function dK(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eA:function eA(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eU:function eU(){},
eV:function eV(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
dg:function dg(){},
dh:function dh(){},
f0:function f0(){},
f1:function f1(){},
f5:function f5(){},
fa:function fa(){},
fb:function fb(){},
di:function di(){},
dj:function dj(){},
fd:function fd(){},
fe:function fe(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){}},O={
lD:function(a){var u=new O.aa([a])
u.c5(a)
return u},
aa:function aa(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cJ:function cJ(){this.b=this.a=null},
nt:function(a){var u=C.b.kd(a,"/")
if(u<=0)return a
return C.b.C(a,0,u)},
nj:function(a){var u,t,s=P.lR("([^\\s]+)")
$.ni=s
u=s.k5(a)
if(u==null)return H.f([],[P.h])
s=u.b
if(1>=s.length)return H.e(s,1)
t=s[1]
return H.f([t,C.b.f9(C.b.at(a,t.length))],[P.h])},
kJ:function(a){var u,t=H.f([],[P.h]),s=P.lR("([^\\s]+)")
$.ni=s
s=new H.jF(s,a,0)
for(;s.G();){u=s.d.b
if(1>=u.length)return H.e(u,1)
C.a.h(t,u[1])}return t},
bB:function(a){var u,t=O.kJ(a),s=H.f([],[P.F]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.e(t,u)
C.a.h(s,P.pz(t[u]))}return s},
e_:function(a,b,c){return O.or(a,b,!1)},
or:function(a,b,c){var u=0,t=P.ai([P.A,P.h,O.aX]),s,r=2,q,p=[],o,n,m,l,k,j,i,h
var $async$e_=P.aj(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
o=O.nt(a)
k=new O.kF(b)
k.sco(new H.aI([P.h,O.aX]))
k.c=null
n=k
u=7
return P.au(W.mo(a),$async$e_)
case 7:m=e
u=8
return P.au(n.ar(m,o,!1),$async$e_)
case 8:j=n.b
s=j
u=1
break
r=2
u=6
break
case 4:r=3
h=q
l=H.al(h)
P.fw(a+": "+H.o(l))
j=P.r(a+": "+H.o(l))
throw H.c(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ag(s,t)
case 2:return P.af(q,t)}})
return P.ah($async$e_,t)},
e3:function(a,b){var u=null,t=null,s=!1
return O.ot(a,b)},
ot:function(a,b){var u=0,t=P.ai(E.a4),s,r=2,q,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$e3=P.aj(function(a0,a1){if(a0===1){q=a1
u=r}while(true)switch(u){case 0:f=null
e=null
d=!1
r=4
o=O.nt(a)
k=f
j=new O.kG(b)
j.six(H.f([],[O.dp]))
j.siZ(H.f([],[V.am]))
j.shC(H.f([],[V.a5]))
j.sco(new H.aI([P.h,O.aX]))
j.f=e
j.r=""
i=O.mx()
h=i.r
h.sU(0,new V.a2(0.35,0.35,0.35))
h=i.x
h.sU(0,new V.a2(0.65,0.65,0.65))
j.x=i
j.z=j.y=null
j.Q=E.h7(null)
if(k!=null)j.e.e5(0,k)
j.by()
n=j
u=7
return P.au(W.mo(a),$async$e3)
case 7:m=a1
u=8
return P.au(n.ar(m,o,d),$async$e3)
case 8:k=e
if(k!=null){i=new O.is()
i.b=!0
k.L(i)}k=n.gjY()
s=k
u=1
break
r=2
u=6
break
case 4:r=3
c=q
l=H.al(c)
P.fw(a+": "+H.o(l))
k=P.r(a+": "+H.o(l))
throw H.c(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ag(s,t)
case 2:return P.af(q,t)}})
return P.ah($async$e3,t)},
kF:function kF(a){this.a=a
this.c=this.b=null},
dp:function dp(a){this.a=a
this.b=null},
kG:function kG(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
is:function is(){this.b=null},
mx:function(){var u,t,s=new O.aX()
s.sfV(O.lD(V.aD))
s.e.bn(s.ghJ(),s.ghL())
u=new O.bh(s,"emission")
u.c=C.d
u.f=new V.a2(0,0,0)
s.f=u
u=new O.bh(s,"ambient")
u.c=C.d
u.f=new V.a2(0,0,0)
s.r=u
u=new O.bh(s,"diffuse")
u.c=C.d
u.f=new V.a2(0,0,0)
s.x=u
u=new O.bh(s,"invDiffuse")
u.c=C.d
u.f=new V.a2(0,0,0)
s.y=u
u=new O.i5(s,"specular")
u.c=C.d
u.f=new V.a2(0,0,0)
u.ch=100
s.z=u
u=new O.i2(s,"bump")
u.c=C.d
s.Q=u
s.ch=null
u=new O.bh(s,"reflect")
u.c=C.d
u.f=new V.a2(0,0,0)
s.cx=u
u=new O.i4(s,"refract")
u.c=C.d
u.f=new V.a2(0,0,0)
u.ch=1
s.cy=u
u=new O.i1(s,"alpha")
u.c=C.d
u.f=1
s.db=u
u=new D.dS()
u.c5(D.ac)
u.sh8(H.f([],[D.dE]))
u.siw(H.f([],[D.e5]))
u.siT(H.f([],[D.ea]))
u.sjc(H.f([],[D.ef]))
u.sjd(H.f([],[D.eg]))
u.sje(H.f([],[D.eh]))
u.ch=u.Q=null
u.d9(u.ghH(),u.gij(),u.gio())
s.dx=u
t=u.Q
u=t==null?u.Q=D.X():t
u.h(0,s.giI())
u=s.dx
t=u.ch
u=t==null?u.ch=D.X():t
u.h(0,s.gbp())
s.dy=null
return s},
dL:function dL(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(a){this.a=a},
hH:function hH(a,b){this.a=a
this.b=b},
hG:function hG(a){this.a=a},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
hv:function hv(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
hy:function hy(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
hs:function hs(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
hr:function hr(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.b=b},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a,b){this.a=a
this.b=b},
hF:function hF(a){this.a=a},
hn:function hn(a){this.a=a},
hm:function hm(a){this.a=a},
aX:function aX(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i1:function i1(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cI:function cI(){},
i2:function i2(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bh:function bh(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
i4:function i4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
i5:function i5(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bP:function bP(){}},E={
h7:function(a){var u=new E.a4()
u.a=""
u.b=!0
u.sfv(0,O.lD(E.a4))
u.y.bn(u.gkh(),u.gkk())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sda(0,a)
u.sb3(null)
u.sbc(null)
return u},
oI:function(a,b){var u=new E.iw(a)
u.fq(a,b)
return u},
oN:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ic_)return E.mP(a,!0,!0,!0,!1)
u=W.lC()
t=u.style
t.width="100%"
t.height="100%"
s.gcK(a).h(0,u)
return E.mP(u,!0,!0,!0,!1)},
mP:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ei(),j=H.d(C.n.d7(a,"webgl2",P.om(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icd")
if(j==null)H.t(P.r("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oI(j,a)
u=new T.iZ(j)
u.b=H.ao(j.getParameter(3379))
H.ao(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.eq(a)
t=new X.hO()
t.c=new X.aN(!1,!1,!1)
t.siy(P.on(P.p))
u.b=t
t=new X.ic(u)
t.f=0
t.r=V.bO()
t.x=V.bO()
t.ch=t.Q=1
u.c=t
t=new X.hW(u)
t.r=0
t.x=V.bO()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.j3(u)
t.f=V.bO()
t.r=V.bO()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sha(H.f([],[[P.cX,P.O]]))
t=u.z
s=document
r=W.ap
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a9(s,"contextmenu",H.j(u.ghT(),q),!1,r))
t=u.z
p=W.q
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a9(a,"focus",H.j(u.ghZ(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a9(a,"blur",H.j(u.ghN(),o),!1,p))
t=u.z
n=W.bf
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a9(s,"keyup",H.j(u.gi2(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a9(s,"keydown",H.j(u.gi0(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a9(a,"mousedown",H.j(u.gi6(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,"mouseup",H.j(u.gia(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,l,H.j(u.gi8(),q),!1,r))
n=u.z
m=W.bo;(n&&C.a).h(n,W.a9(a,H.M(W.ob(a)),H.j(u.gic(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a9(s,l,H.j(u.ghV(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a9(s,"mouseup",H.j(u.ghX(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a9(s,"pointerlockchange",H.j(u.gig(),o),!1,p))
p=u.z
o=W.b4
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a9(a,"touchstart",H.j(u.giu(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchend",H.j(u.giq(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchmove",H.j(u.gis(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aM(Date.now(),!1)
k.cy=0
k.dV()
return k},
fL:function fL(){},
a4:function a4(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iw:function iw(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
ei:function ei(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j0:function j0(a){this.a=a}},Z={
lX:function(a,b,c){var u
H.k(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cj(c)),35044)
a.bindBuffer(b,null)
return new Z.eu(b,u)},
aS:function(a){return new Z.b6(a)},
eu:function eu(a,b){this.a=a
this.b=b},
dx:function dx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ev:function ev(a){this.a=a},
bH:function bH(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
dy:function dy(){this.a=null},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(a){this.a=a}},D={
X:function(){var u=new D.bK()
u.sam(null)
u.saT(null)
u.c=null
u.d=0
return u},
fO:function fO(){},
bK:function bK(){var _=this
_.d=_.c=_.b=_.a=null},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
B:function B(){this.b=null},
c6:function c6(a){this.b=null
this.$ti=a},
c7:function c7(a){this.b=null
this.$ti=a},
E:function E(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dE:function dE(){},
ac:function ac(){},
dS:function dS(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e5:function e5(){},
ea:function ea(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){}},X={dz:function dz(a,b){this.a=a
this.b=b},dR:function dR(a,b){this.a=a
this.b=b},hO:function hO(){var _=this
_.d=_.c=_.b=_.a=null},dU:function dU(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hW:function hW(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aN:function aN(a,b,c){this.a=a
this.b=b
this.c=c},bv:function bv(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},ic:function ic(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cL:function cL(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},iq:function iq(){},ek:function ek(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},j3:function j3(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eq:function eq(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
od:function(a){var u=new X.hh(),t=new V.a0(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.mJ
if(t==null){t=V.mI(0,0,1,1)
$.mJ=t}u.r=t
return u},
dA:function dA(){},
hh:function hh(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e4:function e4(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ec:function ec(){}},V={
lE:function(a){var u,t,s
H.k(a,"$ib",[P.F],"$ab")
u=a.length
if(0>=u)return H.e(a,0)
t=a[0]
if(1>=u)return H.e(a,1)
s=a[1]
if(2>=u)return H.e(a,2)
u=a[2]
if(typeof t!=="number")return t.E()
if(t<0)t=0
else if(t>1)t=1
if(typeof s!=="number")return s.E()
if(s<0)s=0
else if(s>1)s=1
if(typeof u!=="number")return u.E()
if(u<0)u=0
else if(u>1)u=1
return new V.a2(t,s,u)},
o6:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.j.bT(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:if(b<0)p=0
else p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.a2(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
if(b<0)o=0
else o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.a2(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
if(b<0)o=0
else o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.a2(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
if(b<0)n=0
else n=b>1?1:b
return new V.a2(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
if(b<0)n=0
else n=b>1?1:b
return new V.a2(p,o,n)
default:if(b<0)p=0
else p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.a2(p,o,n)}},
dB:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.a0(a,a,a,1)},
o7:function(a){return new V.a0(a.a,a.b,a.c,1)},
pU:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.bl(a-b,u)
return(a<0?a+u:a)+b},
V:function(a,b,c){if(a==null)return C.b.ak("null",c)
return C.b.ak(C.j.f8(Math.abs(a-0)<$.Q().a?0:a,b),c+b+1)},
cp:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.F],"$ab")
u=H.f([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.H)(a),++r){q=V.V(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.m(u,p,C.b.ak(u[p],s))}return u},
m9:function(a){return C.j.kL(Math.pow(2,C.P.bT(Math.log(H.cn(a))/Math.log(2))))},
dZ:function(){var u=$.mA
return u==null?$.mA=V.bi(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bi:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mz:function(a,b,c){return V.bi(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
my:function(a,b,c){return V.bi(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
bO:function(){var u=$.mE
return u==null?$.mE=new V.am(0,0):u},
lP:function(){var u=$.cR
return u==null?$.cR=new V.aE(0,0,0):u},
mI:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e8(a,b,c,d)},
mK:function(a,b,c,d,e,f){return new V.cc(a,b,c,d,e,f)},
mL:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
if(a==null)return b
if(b==null)return a
u=a.a
t=b.a
s=Math.min(H.cn(u),H.cn(t))
r=a.b
q=b.b
p=Math.min(H.cn(r),H.cn(q))
o=a.c
n=b.c
m=Math.min(H.cn(o),H.cn(n))
l=a.d
if(typeof u!=="number")return u.n()
k=b.d
if(typeof t!=="number")return t.n()
j=Math.max(u+l,t+k)
k=a.e
if(typeof r!=="number")return r.n()
t=b.e
if(typeof q!=="number")return q.n()
i=Math.max(r+k,q+t)
t=a.f
if(typeof o!=="number")return o.n()
q=b.f
if(typeof n!=="number")return n.n()
return new V.cc(s,p,m,j-s,i-p,Math.max(o+t,n+q)-m)},
a8:function(){var u=$.n_
return u==null?$.n_=new V.a5(0,0,0):u},
n1:function(){var u=$.mY
return u==null?$.mY=new V.a5(1,0,0):u},
n0:function(){var u=$.mX
return u==null?$.mX=new V.a5(0,0,-1):u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h8:function h8(a){this.a=a},
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
aD:function aD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
am:function am(a,b){this.a=a
this.b=b},
aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cc:function cc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Y:function Y(a,b){this.a=a
this.b=b},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function(a){var u=new V.iE()
u.fs(a)
return u},
fA:function fA(){},
bu:function bu(){},
dW:function dW(){},
bx:function bx(){this.a=null},
iE:function iE(){this.a=null},
cU:function cU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a){this.b=a
this.c=null},
j2:function j2(){this.c=this.b=this.a=null},
d0:function d0(a){this.b=a
this.a=this.c=null},
pQ:function(a){P.oO(C.M,new V.lu(a))},
mH:function(a){var u=new V.it(a),t=document.getElementById(a)
u.c=t
if(t==null)H.t("Failed to find "+a+" for RadioGroup")
return u},
oK:function(a){var u=new V.iI()
u.ft(a,!0)
return u},
fP:function fP(a){this.a=a
this.d=this.c=null},
fQ:function fQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lu:function lu(a){this.a=a},
it:function it(a){this.a=a
this.c=null},
iu:function iu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iI:function iI(){this.b=this.a=null},
iK:function iK(a){this.a=a},
iJ:function iJ(a){this.a=a}},U={
lG:function(){var u=new U.fR()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
fR:function fR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){this.b=this.a=null},
cE:function cE(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
aq:function aq(){},
er:function er(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
es:function es(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
et:function et(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dI:function dI(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
oq:function(a,b){var u=a.ao,t=new A.dX(b,u)
t.dg(b,u)
t.fp(a,b)
return t},
lU:function(a,b,c,d,e){var u=new A.ja(a,c,e)
u.f=d
u.sjf(P.oo(d,0,P.p))
return u},
dv:function dv(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a){this.a=a},
dM:function dM(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dX:function dX(a,b){var _=this
_.bF=_.ei=_.bE=_.ao=_.ay=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ez=_.cN=_.ey=_.bS=_.ex=_.ew=_.bR=_.bQ=_.ev=_.eu=_.bP=_.bO=_.bN=_.es=_.er=_.bM=_.eq=_.ep=_.bL=_.eo=_.en=_.bK=_.bJ=_.em=_.el=_.bI=_.bH=_.ek=_.ej=_.bG=null
_.cS=_.eD=_.cR=_.eC=_.cQ=_.eB=_.cP=_.eA=_.cO=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i3:function i3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ay=b3
_.ao=b4
_.bE=b5},
d2:function d2(a,b){this.b=a
this.c=b},
d6:function d6(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
d4:function d4(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d7:function d7(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
d5:function d5(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
d8:function d8(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cT:function cT(){},
c1:function c1(a,b){this.a=a
this.b=b},
el:function el(){},
jf:function jf(a){this.a=a},
R:function R(a,b,c){this.a=a
this.c=b
this.d=c},
jc:function jc(a,b,c){this.a=a
this.c=b
this.d=c},
jd:function jd(a,b,c){this.a=a
this.c=b
this.d=c},
je:function je(a,b,c){this.a=a
this.c=b
this.d=c},
ja:function ja(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a3:function a3(a,b,c){this.a=a
this.c=b
this.d=c},
jb:function jb(a,b,c){this.a=a
this.c=b
this.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
d1:function d1(a,b,c){this.a=a
this.c=b
this.d=c},
jg:function jg(a,b,c){this.a=a
this.c=b
this.d=c},
d3:function d3(a,b,c){this.a=a
this.c=b
this.d=c},
aA:function aA(a,b,c){this.a=a
this.c=b
this.d=c},
aF:function aF(a,b,c){this.a=a
this.c=b
this.d=c},
aG:function aG(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mn:function(a,b,c){var u=new F.N(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
mt:function(a,b){var u,t=new F.aJ()
if(a==null)H.t(P.r("May not create a line with a null start vertex."))
if(b==null)H.t(P.r("May not create a line with a null end vertex."))
u=a.a
if(u==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(u!=b.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
t.a=a
C.a.h(a.c.b,t)
t.b=b
C.a.h(b.c.c,t)
C.a.h(t.a.a.c.b,t)
t.a.a.a3()
return t},
lO:function(a){var u=new F.by()
if(a.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
u.a=a
C.a.h(a.b.b,u)
C.a.h(u.a.a.b.b,u)
u.a.a.a3()
return u},
as:function(){var u=new F.an(),t=new F.ju(u)
t.b=!1
t.sjg(H.f([],[F.J]))
u.a=t
t=new F.iH(u)
t.scr(H.f([],[F.by]))
u.b=t
t=new F.iG(u)
t.shr(H.f([],[F.aJ]))
u.c=t
t=new F.iF(u)
t.shk(H.f([],[F.N]))
u.d=t
u.e=null
return u},
cg:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.J(),r=new F.jz()
r.scr(H.f([],[F.by]))
s.b=r
r=new F.jy()
u=[F.aJ]
r.shs(H.f([],u))
r.sht(H.f([],u))
s.c=r
r=new F.jv()
u=[F.N]
r.shl(H.f([],u))
r.shm(H.f([],u))
r.shn(H.f([],u))
s.d=r
h=$.nQ()
s.e=0
r=$.b9()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b8().a)!==0?e:t
s.x=(u&$.b7().a)!==0?b:t
s.y=(u&$.bF().a)!==0?f:t
s.z=(u&$.bG().a)!==0?g:t
s.Q=(u&$.nR().a)!==0?c:t
s.ch=(u&$.cu().a)!==0?i:0
s.cx=(u&$.bE().a)!==0?a:t
return s},
N:function N(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aJ:function aJ(){this.b=this.a=null},
by:function by(){this.a=null},
an:function an(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ce:function ce(){},
iF:function iF(a){this.a=a
this.b=null},
iG:function iG(a){this.a=a
this.b=null},
iH:function iH(a){this.a=a
this.b=null},
J:function J(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jB:function jB(a){this.a=a},
jA:function jA(a){this.a=a},
ju:function ju(a){this.a=a
this.c=this.b=null},
jv:function jv(){this.d=this.c=this.b=null},
jw:function jw(a,b){this.a=a
this.b=b},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(){this.c=this.b=null},
jz:function jz(){this.b=null}},T={cZ:function cZ(){},ee:function ee(){},iY:function iY(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iZ:function iZ(a){var _=this
_.a=a
_.e=_.d=_.b=null},j_:function j_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},G={
nx:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="testCanvas",f=null,e="controls",d="modifiers",c={},b=V.oK("Test 032"),a=W.lC()
a.className="pageLargeCanvas"
a.id=g
b.a.appendChild(a)
u=[P.h]
b.e6(H.f(["The inspection test for shapes loaders. ","For generated shapes see test002. ","Note: Some shapes will take time to load."],u))
b.jH(H.f(["controls","shapes","scalars"],u))
b.e6(H.f(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(g)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.oN(t,!0,!0,!0,!1)
c.a=!0
r=E.h7(f)
b=new U.cE()
b.c5(U.aq)
b.bn(b.ghF(),b.gil())
b.e=null
b.f=V.dZ()
b.r=0
q=s.r
p=new U.es()
o=U.lG()
o.sd6(0,!0)
o.scZ(6.283185307179586)
o.sd0(0)
o.sa9(0,0)
o.sd_(100)
o.sX(0)
o.scM(0.5)
p.b=o
n=p.gaS()
o.gB().h(0,n)
o=U.lG()
o.sd6(0,!0)
o.scZ(6.283185307179586)
o.sd0(0)
o.sa9(0,0)
o.sd_(100)
o.sX(0)
o.scM(0.5)
p.c=o
o.gB().h(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.aN(!1,!1,!1)
l=p.d
p.d=m
o=[X.aN]
n=new D.E(d,l,m,o)
n.b=!0
p.T(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.E("invertX",n,!1,[P.L])
n.b=!0
p.T(n)}n=p.r
if(n!==!0){p.r=!0
n=new D.E("invertY",n,!0,[P.L])
n.b=!0
p.T(n)}p.b9(q)
b.h(0,p)
q=s.r
p=new U.er()
n=U.lG()
n.sd6(0,!0)
n.scZ(6.283185307179586)
n.sd0(0)
n.sa9(0,0)
n.sd_(100)
n.sX(0)
n.scM(0.2)
p.b=n
n.gB().h(0,p.gaS())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.aN(!0,!1,!1)
l=p.c
p.c=m
n=new D.E(d,l,m,o)
n.b=!0
p.T(n)
p.b9(q)
b.h(0,p)
q=s.r
p=new U.et()
p.c=0.01
p.e=p.d=0
m=new X.aN(!1,!1,!1)
p.b=m
o=new D.E(d,f,m,o)
o.b=!0
p.T(o)
p.b9(q)
b.h(0,p)
r.sbc(b)
k=new O.dL()
k.b=V.n0()
k.c=new V.a0(0.2,0.3,0.4,1)
k.d=new V.a0(0.1,0.2,0.3,1)
k.e=V.dB(0.7)
k.f=V.dB(0.3)
k.r=V.dB(0.5)
k.x=V.dB(0.5)
k.y=new V.a0(1,1,1,1)
k.z=V.dB(0.8)
k.r1=k.k4=k.k3=k.k2=k.k1=k.id=k.go=k.fy=k.fx=k.fr=k.dy=k.dx=k.db=k.cy=k.cx=k.ch=k.Q=!1
k.r2=1
k.sac(0.4)
b=new M.dI()
b.sh1(0,O.lD(E.a4))
b.d.bn(b.ghP(),b.ghR())
b.x=b.r=b.f=b.e=null
j=X.od(f)
i=new X.e4()
i.c=1.0471975511965976
i.d=0.1
i.e=2000
i.sbc(f)
q=i.c
if(!(Math.abs(q-1.0471975511965976)<$.Q().a)){i.c=1.0471975511965976
q=new D.E("fov",q,1.0471975511965976,[P.F])
q.b=!0
i.aQ(q)}q=i.d
if(!(Math.abs(q-0.1)<$.Q().a)){i.d=0.1
q=new D.E("near",q,0.1,[P.F])
q.b=!0
i.aQ(q)}q=i.e
if(!(Math.abs(q-2000)<$.Q().a)){i.e=2000
q=new D.E("far",q,2000,[P.F])
q.b=!0
i.aQ(q)}q=b.a
if(q!==i){if(q!=null)q.gB().a0(0,b.gau())
l=b.a
b.a=i
i.gB().h(0,b.gau())
q=new D.E("camera",l,b.a,[X.dA])
q.b=!0
b.aA(q)}q=b.b
if(q!==j){if(q!=null)q.gB().a0(0,b.gau())
l=b.b
b.b=j
j.gB().h(0,b.gau())
q=new D.E("target",l,b.b,[X.ec])
q.b=!0
b.aA(q)}b.sb3(f)
b.sb3(k)
b.d.h(0,r)
q=b.a
h=V.mz(0,0,5)
p=new U.dC()
p.a=h
q.sbc(p)
q=s.d
if(q!==b){if(q!=null)q.gB().a0(0,s.gdh())
s.d=b
b.gB().h(0,s.gdh())
s.di()}b=new V.fP(e)
u=u.getElementById(e)
b.c=u
if(u==null)H.t("Failed to find controls for CheckGroup")
b.sh0(H.f([],[W.cy]))
b.a8(0,"Material",new G.kU(c,r),!0)
b.t(0,"Filled",new G.kV(k))
b.a8(0,"Wire Frame",new G.kW(k),!0)
b.t(0,"Vertices",new G.l6(k))
b.t(0,"Normals",new G.lh(k))
b.t(0,"Binormals",new G.lj(k))
b.t(0,"Tangentals",new G.lk(k))
b.t(0,"Face Centers",new G.ll(k))
b.t(0,"Face Normals",new G.lm(k))
b.t(0,"Face Binormals",new G.ln(k))
b.t(0,"Face Tangentals",new G.lo(k))
b.t(0,"Colors",new G.kX(k))
b.t(0,"Textures2D",new G.kY(k))
b.t(0,"TexturesCube",new G.kZ(k))
b.t(0,"Weight",new G.l_(k))
b.a8(0,"Axis",new G.l0(k),!0)
b.t(0,"AABB",new G.l1(k))
c=new G.lr(c,s,r,new G.lp(),k)
b=V.mH("shapes")
b.a8(0,"Cube",new G.l2(c),!0)
b.t(0,"Low Poly Tree",new G.l3(c))
b.t(0,"Low Poly Wolf",new G.l4(c))
b.t(0,"Plant",new G.l5(c))
c=V.mH("scalars")
c.t(0,"0.01",new G.l7(k))
c.t(0,"0.02",new G.l8(k))
c.t(0,"0.04",new G.l9(k))
c.t(0,"0.06",new G.la(k))
c.t(0,"0.08",new G.lb(k))
c.t(0,"0.1",new G.lc(k))
c.t(0,"0.2",new G.ld(k))
c.a8(0,"0.4",new G.le(k),!0)
c.t(0,"0.6",new G.lf(k))
c.t(0,"0.8",new G.lg(k))
c.t(0,"1.0",new G.li(k))
V.pQ(s)},
kU:function kU(a,b){this.a=a
this.b=b},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
l6:function l6(a){this.a=a},
lh:function lh(a){this.a=a},
lj:function lj(a){this.a=a},
lk:function lk(a){this.a=a},
ll:function ll(a){this.a=a},
lm:function lm(a){this.a=a},
ln:function ln(a){this.a=a},
lo:function lo(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
lp:function lp(){},
lq:function lq(a,b){this.a=a
this.b=b},
lr:function lr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
l7:function l7(a){this.a=a},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
lc:function lc(a){this.a=a},
ld:function ld(a){this.a=a},
le:function le(a){this.a=a},
lf:function lf(a){this.a=a},
lg:function lg(a){this.a=a},
li:function li(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,G]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lL.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gJ:function(a){return H.cS(a)},
j:function(a){return"Instance of '"+H.ca(a)+"'"}}
J.hK.prototype={
j:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iL:1}
J.dP.prototype={
A:function(a,b){return null==b},
j:function(a){return"null"},
gJ:function(a){return 0},
$iz:1}
J.dQ.prototype={
gJ:function(a){return 0},
j:function(a){return String(a)}}
J.io.prototype={}
J.cf.prototype={}
J.bt.prototype={
j:function(a){var u=a[$.nE()]
if(u==null)return this.fm(a)
return"JavaScript function for "+H.o(J.aL(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ilH:1}
J.aW.prototype={
h:function(a,b){H.y(b,H.u(a,0))
if(!!a.fixed$length)H.t(P.G("add"))
a.push(b)},
a0:function(a,b){var u
if(!!a.fixed$length)H.t(P.G("remove"))
for(u=0;u<a.length;++u)if(J.Z(a[u],b)){a.splice(u,1)
return!0}return!1},
u:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.c2(a))}},
F:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.m(t,u,H.o(a[u]))
return t.join(b)},
kc:function(a){return this.F(a,"")},
k6:function(a,b,c,d){var u,t,s
H.y(b,d)
H.j(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.c2(a))}return t},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
fk:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ar(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ar(c,b,a.length,"end",null))
if(b===c)return H.f([],[H.u(a,0)])
return H.f(a.slice(b,c),[H.u(a,0)])},
gaL:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.og())},
bo:function(a,b,c,d){var u,t,s=H.u(a,0)
H.k(d,"$in",[s],"$an")
if(!!a.immutable$list)H.t(P.G("setRange"))
P.bz(b,c,a.length)
u=c-b
if(u===0)return
P.lQ(0,"skipCount")
H.k(d,"$ib",[s],"$ab")
s=J.cr(d)
if(u>s.gk(d))throw H.c(H.oh())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.i(d,t)
else for(t=0;t<u;++t)a[b+t]=s.i(d,t)},
aI:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Z(a[u],b))return!0
return!1},
j:function(a){return P.lI(a,"[","]")},
ga5:function(a){return new J.av(a,a.length,[H.u(a,0)])},
gJ:function(a){return H.cS(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.G("set length"))
if(b<0)throw H.c(P.ar(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bD(a,b))
if(b>=a.length||b<0)throw H.c(H.bD(a,b))
return a[b]},
m:function(a,b,c){H.y(c,H.u(a,0))
if(!!a.immutable$list)H.t(P.G("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bD(a,b))
a[b]=c},
n:function(a,b){var u,t=[H.u(a,0)]
H.k(b,"$ib",t,"$ab")
u=C.e.n(a.length,b.gk(b))
t=H.f([],t)
this.sk(t,u)
this.bo(t,0,a.length,a)
this.bo(t,a.length,u,b)
return t},
$in:1,
$ib:1}
J.lK.prototype={}
J.av.prototype={
gV:function(a){return this.d},
G:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.H(s))
u=t.c
if(u>=r){t.sdm(null)
return!1}t.sdm(s[u]);++t.c
return!0},
sdm:function(a){this.d=H.y(a,H.u(this,0))},
$iaP:1}
J.c8.prototype={
kL:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.G(""+a+".toInt()"))},
bT:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.G(""+a+".floor()"))},
as:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.G(""+a+".round()"))},
f8:function(a,b){var u,t
if(b>20)throw H.c(P.ar(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bj:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ar(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.G("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.l("0",r)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.c(H.aH(b))
return a+b},
bl:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fo:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e_(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.e_(a,b)},
e_:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.G("Result of truncating division is "+H.o(u)+": "+H.o(a)+" ~/ "+b))},
aV:function(a,b){var u
if(a>0)u=this.dZ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iS:function(a,b){if(b<0)throw H.c(H.aH(b))
return this.dZ(a,b)},
dZ:function(a,b){return b>31?0:a>>>b},
E:function(a,b){if(typeof b!=="number")throw H.c(H.aH(b))
return a<b},
aO:function(a,b){if(typeof b!=="number")throw H.c(H.aH(b))
return a>=b},
$iF:1,
$iak:1}
J.dO.prototype={$ip:1}
J.dN.prototype={}
J.bM.prototype={
Y:function(a,b){if(b<0)throw H.c(H.bD(a,b))
if(b>=a.length)H.t(H.bD(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.bD(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.lA(b,null,null))
return a+b},
b1:function(a,b,c,d){var u,t
c=P.bz(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ag:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ar(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
af:function(a,b){return this.ag(a,b,0)},
C:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.aH(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.E()
if(b<0)throw H.c(P.iv(b,null))
if(b>c)throw H.c(P.iv(b,null))
if(c>a.length)throw H.c(P.iv(c,null))
return a.substring(b,c)},
at:function(a,b){return this.C(a,b,null)},
f9:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.H(r,0)===133){u=J.oj(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.Y(r,t)===133?J.ok(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
l:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.K)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ak:function(a,b){var u=b-a.length
if(u<=0)return a
return this.l(" ",u)+a},
kq:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.l(c,u)},
eL:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ar(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
cU:function(a,b){return this.eL(a,b,0)},
kd:function(a,b){var u=a.length,t=b.length
if(u+t>u)u-=t
return a.lastIndexOf(b,u)},
j:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.c(H.bD(a,b))
return a[b]},
$imC:1,
$ih:1}
H.ad.prototype={
gk:function(a){return this.a.length},
i:function(a,b){return C.b.Y(this.a,b)},
$ad9:function(){return[P.p]},
$ax:function(){return[P.p]},
$an:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.h5.prototype={}
H.dT.prototype={
gV:function(a){return this.d},
G:function(){var u,t=this,s=t.a,r=J.cr(s),q=r.gk(s)
if(t.b!==q)throw H.c(P.c2(s))
u=t.c
if(u>=q){t.sb6(null)
return!1}t.sb6(r.K(s,u));++t.c
return!0},
sb6:function(a){this.d=H.y(a,H.u(this,0))},
$iaP:1}
H.i_.prototype={
ga5:function(a){return new H.i0(J.bX(this.a),this.b,this.$ti)},
gk:function(a){return J.aB(this.a)},
K:function(a,b){return this.b.$1(J.lx(this.a,b))},
$an:function(a,b){return[b]}}
H.i0.prototype={
G:function(){var u=this,t=u.b
if(t.G()){u.sb6(u.c.$1(t.gV(t)))
return!0}u.sb6(null)
return!1},
gV:function(a){return this.a},
sb6:function(a){this.a=H.y(a,H.u(this,1))},
$aaP:function(a,b){return[b]}}
H.jD.prototype={
ga5:function(a){return new H.jE(J.bX(this.a),this.b,this.$ti)}}
H.jE.prototype={
G:function(){var u,t
for(u=this.a,t=this.b;u.G();)if(H.C(t.$1(u.gV(u))))return!0
return!1},
gV:function(a){var u=this.a
return u.gV(u)}}
H.c4.prototype={}
H.d9.prototype={
m:function(a,b,c){H.y(c,H.aU(this,"d9",0))
throw H.c(P.G("Cannot modify an unmodifiable list"))}}
H.en.prototype={}
H.fT.prototype={
j:function(a){return P.lN(this)},
m:function(a,b,c){H.y(b,H.u(this,0))
H.y(c,H.u(this,1))
return H.o8()},
$iA:1}
H.fU.prototype={
gk:function(a){return this.a},
bC:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bC(0,b))return
return this.dG(b)},
dG:function(a){return this.b[H.M(a)]},
u:function(a,b){var u,t,s,r,q=this,p=H.u(q,1)
H.j(b,{func:1,ret:-1,args:[H.u(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.y(q.dG(r),p))}}}
H.j7.prototype={
aj:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.ij.prototype={
j:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.o(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hN.prototype={
j:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.o(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.o(t.a)+")"
return s+r+"' on '"+u+"' ("+H.o(t.a)+")"}}
H.jj.prototype={
j:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cC.prototype={}
H.lv.prototype={
$1:function(a){if(!!J.U(a).$ibJ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:20}
H.f4.prototype={
j:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iae:1}
H.cz.prototype={
j:function(a){return"Closure '"+H.ca(this).trim()+"'"},
$ilH:1,
gkR:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iV.prototype={}
H.iO.prototype={
j:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ct(u)+"'"}}
H.cv.prototype={
A:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cv))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cS(this.a)
else u=typeof t!=="object"?J.dt(t):H.cS(t)
return(u^H.cS(this.b))>>>0},
j:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.o(this.d)+"' of "+("Instance of '"+H.ca(u)+"'")}}
H.j9.prototype={
j:function(a){return this.a}}
H.fN.prototype={
j:function(a){return this.a}}
H.iC.prototype={
j:function(a){return"RuntimeError: "+H.o(this.a)}}
H.jG.prototype={
j:function(a){return"Assertion failed: "+P.dJ(this.a)}}
H.aI.prototype={
gk:function(a){return this.a},
gaz:function(a){return new H.hR(this,[H.u(this,0)])},
bC:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dB(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dB(t,b)}else return s.k9(b)},
k9:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cW(u.ce(t,u.cV(a)),a)>=0},
e5:function(a,b){J.ly(H.k(b,"$iA",this.$ti,"$aA"),new H.hM(this))},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bq(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bq(r,b)
s=t==null?null:t.b
return s}else return q.ka(b)},
ka:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.ce(r,s.cV(a))
t=s.cW(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
H.y(b,H.u(s,0))
H.y(c,H.u(s,1))
if(typeof b==="string"){u=s.b
s.dq(u==null?s.b=s.cp():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.dq(t==null?s.c=s.cp():t,b,c)}else s.kb(b,c)},
kb:function(a,b){var u,t,s,r,q=this
H.y(a,H.u(q,0))
H.y(b,H.u(q,1))
u=q.d
if(u==null)u=q.d=q.cp()
t=q.cV(a)
s=q.ce(u,t)
if(s==null)q.cA(u,t,[q.cq(a,b)])
else{r=q.cW(s,a)
if(r>=0)s[r].b=b
else s.push(q.cq(a,b))}},
u:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.u(s,0),H.u(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.c2(s))
u=u.c}},
dq:function(a,b,c){var u,t=this
H.y(b,H.u(t,0))
H.y(c,H.u(t,1))
u=t.bq(a,b)
if(u==null)t.cA(a,b,t.cq(b,c))
else u.b=c},
cq:function(a,b){var u=this,t=new H.hQ(H.y(a,H.u(u,0)),H.y(b,H.u(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cV:function(a){return J.dt(a)&0x3ffffff},
cW:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Z(a[t].a,b))return t
return-1},
j:function(a){return P.lN(this)},
bq:function(a,b){return a[b]},
ce:function(a,b){return a[b]},
cA:function(a,b,c){a[b]=c},
h7:function(a,b){delete a[b]},
dB:function(a,b){return this.bq(a,b)!=null},
cp:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cA(t,u,t)
this.h7(t,u)
return t}}
H.hM.prototype={
$2:function(a,b){var u=this.a
u.m(0,H.y(a,H.u(u,0)),H.y(b,H.u(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.z,args:[H.u(u,0),H.u(u,1)]}}}
H.hQ.prototype={}
H.hR.prototype={
gk:function(a){return this.a.a},
ga5:function(a){var u=this.a,t=new H.hS(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hS.prototype={
gV:function(a){return this.d},
G:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.c2(t))
else{t=u.c
if(t==null){u.sdE(null)
return!1}else{u.sdE(t.a)
u.c=u.c.c
return!0}}},
sdE:function(a){this.d=H.y(a,H.u(this,0))},
$iaP:1}
H.kP.prototype={
$1:function(a){return this.a(a)},
$S:20}
H.kQ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:45}
H.kR.prototype={
$1:function(a){return this.a(H.M(a))},
$S:39}
H.hL.prototype={
j:function(a){return"RegExp/"+this.a+"/"},
ghB:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.ms(u.a,t.multiline,!t.ignoreCase,!0)},
k5:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.eO(u)},
hb:function(a,b){var u,t=this.ghB()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.eO(u)},
$imC:1,
$ioH:1}
H.eO.prototype={
i:function(a,b){return C.a.i(this.b,b)},
$idV:1}
H.jF.prototype={
gV:function(a){return this.d},
G:function(){var u,t,s,r=this,q=r.b
if(q==null)return!1
u=r.c
if(u<=q.length){t=r.a.hb(q,u)
if(t!=null){r.d=t
q=t.b
u=q.index
s=u+q[0].length
r.c=u===s?s+1:s
return!0}}r.b=r.d=null
return!1},
$iaP:1,
$aaP:function(){return[P.dV]}}
H.cM.prototype={$icM:1}
H.bN.prototype={$ibN:1,$ioP:1}
H.e0.prototype={
gk:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cN.prototype={
i:function(a,b){H.bq(b,a,a.length)
return a[b]},
m:function(a,b,c){H.py(c)
H.bq(b,a,a.length)
a[b]=c},
$ac4:function(){return[P.F]},
$ax:function(){return[P.F]},
$in:1,
$an:function(){return[P.F]},
$ib:1,
$ab:function(){return[P.F]}}
H.e1.prototype={
m:function(a,b,c){H.ao(c)
H.bq(b,a,a.length)
a[b]=c},
$ac4:function(){return[P.p]},
$ax:function(){return[P.p]},
$in:1,
$an:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.id.prototype={
i:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.ie.prototype={
i:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.ig.prototype={
i:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.ih.prototype={
i:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.ii.prototype={
i:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.e2.prototype={
gk:function(a){return a.length},
i:function(a,b){H.bq(b,a,a.length)
return a[b]},
$iqd:1}
H.cO.prototype={
gk:function(a){return a.length},
i:function(a,b){H.bq(b,a,a.length)
return a[b]},
$icO:1,
$iS:1}
H.dc.prototype={}
H.dd.prototype={}
H.de.prototype={}
H.df.prototype={}
P.jL.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.jK.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:38}
P.jM.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jN.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fc.prototype={
fH:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.co(new P.kp(this,b),0),a)
else throw H.c(P.G("`setTimeout()` not found."))},
fI:function(a,b){if(self.setTimeout!=null)self.setInterval(H.co(new P.ko(this,a,Date.now(),b),0),a)
else throw H.c(P.G("Periodic timer."))},
$ibl:1}
P.kp.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:7}
P.ko.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.fo(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.ew.prototype={
ax:function(a,b){var u,t=this
H.cq(b,{futureOr:1,type:H.u(t,0)})
if(t.b)t.a.ax(0,b)
else if(H.dq(b,"$iab",t.$ti,"$aab")){u=t.a
b.bX(u.gjO(u),u.ged(),-1)}else P.mb(new P.jI(t,b))},
aZ:function(a,b){if(this.b)this.a.aZ(a,b)
else P.mb(new P.jH(this,a,b))},
$ilF:1}
P.jI.prototype={
$0:function(){this.a.a.ax(0,this.b)},
$S:0}
P.jH.prototype={
$0:function(){this.a.a.aZ(this.b,this.c)},
$S:0}
P.kz.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:47}
P.kA.prototype={
$2:function(a,b){this.a.$2(1,new H.cC(a,H.d(b,"$iae")))},
$S:60}
P.kK.prototype={
$2:function(a,b){this.a(H.ao(a),b)},
$S:32}
P.ab.prototype={}
P.ez.prototype={
aZ:function(a,b){H.d(b,"$iae")
if(a==null)a=new P.cQ()
if(this.a.a!==0)throw H.c(P.lS("Future already completed"))
$.T.toString
this.aB(a,b)},
ee:function(a){return this.aZ(a,null)},
$ilF:1}
P.jJ.prototype={
ax:function(a,b){var u
H.cq(b,{futureOr:1,type:H.u(this,0)})
u=this.a
if(u.a!==0)throw H.c(P.lS("Future already completed"))
u.fO(b)},
aB:function(a,b){this.a.fP(a,b)}}
P.f9.prototype={
ax:function(a,b){var u
H.cq(b,{futureOr:1,type:H.u(this,0)})
u=this.a
if(u.a!==0)throw H.c(P.lS("Future already completed"))
u.ca(b)},
jP:function(a){return this.ax(a,null)},
aB:function(a,b){this.a.aB(a,b)}}
P.bp.prototype={
kf:function(a){if(this.c!==6)return!0
return this.b.b.d5(H.j(this.d,{func:1,ret:P.L,args:[P.O]}),a.a,P.L,P.O)},
k8:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.u(this,1)},r=this.b.b
if(H.ft(u,{func:1,args:[P.O,P.ae]}))return H.cq(r.kH(u,a.a,a.b,null,t,P.ae),s)
else return H.cq(r.d5(H.j(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.at.prototype={
bX:function(a,b,c){var u,t=H.u(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
u=$.T
if(u!==C.k){u.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
if(b!=null)b=P.pm(b,u)}return this.cC(a,b,c)},
f7:function(a,b){return this.bX(a,null,b)},
cC:function(a,b,c){var u,t,s=H.u(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[s]})
u=new P.at($.T,[c])
t=b==null?1:3
this.dr(new P.bp(u,t,a,b,[s,c]))
return u},
dr:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.d(t.c,"$ibp")
t.c=a}else{if(s===2){u=H.d(t.c,"$iat")
s=u.a
if(s<4){u.dr(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.cl(null,null,s,H.j(new P.jV(t,a),{func:1,ret:-1}))}},
dS:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.d(p.c,"$ibp")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.d(p.c,"$iat")
u=q.a
if(u<4){q.dS(a)
return}p.a=u
p.c=q.c}o.a=p.bv(a)
u=p.b
u.toString
P.cl(null,null,u,H.j(new P.k2(o,p),{func:1,ret:-1}))}},
bu:function(){var u=H.d(this.c,"$ibp")
this.c=null
return this.bv(u)},
bv:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
ca:function(a){var u,t,s=this,r=H.u(s,0)
H.cq(a,{futureOr:1,type:r})
u=s.$ti
if(H.dq(a,"$iab",u,"$aab"))if(H.dq(a,"$iat",u,null))P.jY(a,s)
else P.n2(a,s)
else{t=s.bu()
H.y(a,r)
s.a=4
s.c=a
P.ch(s,t)}},
aB:function(a,b){var u,t=this
H.d(b,"$iae")
u=t.bu()
t.a=8
t.c=new P.aC(a,b)
P.ch(t,u)},
fO:function(a){var u,t=this
H.cq(a,{futureOr:1,type:H.u(t,0)})
if(H.dq(a,"$iab",t.$ti,"$aab")){t.h_(a)
return}t.a=1
u=t.b
u.toString
P.cl(null,null,u,H.j(new P.jX(t,a),{func:1,ret:-1}))},
h_:function(a){var u=this,t=u.$ti
H.k(a,"$iab",t,"$aab")
if(H.dq(a,"$iat",t,null)){if(a.a===8){u.a=1
t=u.b
t.toString
P.cl(null,null,t,H.j(new P.k1(u,a),{func:1,ret:-1}))}else P.jY(a,u)
return}P.n2(a,u)},
fP:function(a,b){var u
this.a=1
u=this.b
u.toString
P.cl(null,null,u,H.j(new P.jW(this,a,b),{func:1,ret:-1}))},
$iab:1}
P.jV.prototype={
$0:function(){P.ch(this.a,this.b)},
$S:0}
P.k2.prototype={
$0:function(){P.ch(this.b,this.a.a)},
$S:0}
P.jZ.prototype={
$1:function(a){var u=this.a
u.a=0
u.ca(a)},
$S:18}
P.k_.prototype={
$2:function(a,b){H.d(b,"$iae")
this.a.aB(a,b)},
$1:function(a){return this.$2(a,null)},
$S:36}
P.k0.prototype={
$0:function(){this.a.aB(this.b,this.c)},
$S:0}
P.jX.prototype={
$0:function(){var u=this.a,t=H.y(this.b,H.u(u,0)),s=u.bu()
u.a=4
u.c=t
P.ch(u,s)},
$S:0}
P.k1.prototype={
$0:function(){P.jY(this.b,this.a)},
$S:0}
P.jW.prototype={
$0:function(){this.a.aB(this.b,this.c)},
$S:0}
P.k5.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.f6(H.j(s.d,{func:1}),null)}catch(r){u=H.al(r)
t=H.bU(r)
if(o.d){s=H.d(o.a.a.c,"$iaC").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.d(o.a.a.c,"$iaC")
else q.b=new P.aC(u,t)
q.a=!0
return}if(!!J.U(n).$iab){if(n instanceof P.at&&n.a>=4){if(n.a===8){s=o.b
s.b=H.d(n.c,"$iaC")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.f7(new P.k6(p),null)
s.a=!1}},
$S:7}
P.k6.prototype={
$1:function(a){return this.a},
$S:37}
P.k4.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.u(s,0)
q=H.y(n.c,r)
p=H.u(s,1)
n.a.b=s.b.b.d5(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.al(o)
t=H.bU(o)
s=n.a
s.b=new P.aC(u,t)
s.a=!0}},
$S:7}
P.k3.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.d(m.a.a.c,"$iaC")
r=m.c
if(H.C(r.kf(u))&&r.e!=null){q=m.b
q.b=r.k8(u)
q.a=!1}}catch(p){t=H.al(p)
s=H.bU(p)
r=H.d(m.a.a.c,"$iaC")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aC(t,s)
n.a=!0}},
$S:7}
P.ex.prototype={}
P.cW.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.at($.T,[P.p])
r.a=0
u=H.u(s,0)
t=H.j(new P.iS(r,s),{func:1,ret:-1,args:[u]})
H.j(new P.iT(r,q),{func:1,ret:-1})
W.a9(s.a,s.b,t,!1,u)
return q}}
P.iS.prototype={
$1:function(a){H.y(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.u(this.b,0)]}}}
P.iT.prototype={
$0:function(){this.b.ca(this.a.a)},
$S:0}
P.cX.prototype={}
P.iR.prototype={}
P.kk.prototype={}
P.bl.prototype={}
P.aC.prototype={
j:function(a){return H.o(this.a)},
$ibJ:1}
P.ky.prototype={$iqr:1}
P.kI.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cQ():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.j(0)
throw u},
$S:0}
P.kd.prototype={
kI:function(a){var u,t,s,r=null
H.j(a,{func:1,ret:-1})
try{if(C.k===$.T){a.$0()
return}P.nd(r,r,this,a,-1)}catch(s){u=H.al(s)
t=H.bU(s)
P.kH(r,r,this,u,H.d(t,"$iae"))}},
kJ:function(a,b,c){var u,t,s,r=null
H.j(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.k===$.T){a.$1(b)
return}P.ne(r,r,this,a,b,-1,c)}catch(s){u=H.al(s)
t=H.bU(s)
P.kH(r,r,this,u,H.d(t,"$iae"))}},
jN:function(a,b){return new P.kf(this,H.j(a,{func:1,ret:b}),b)},
cH:function(a){return new P.ke(this,H.j(a,{func:1,ret:-1}))},
e8:function(a,b){return new P.kg(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
f6:function(a,b){H.j(a,{func:1,ret:b})
if($.T===C.k)return a.$0()
return P.nd(null,null,this,a,b)},
d5:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.T===C.k)return a.$1(b)
return P.ne(null,null,this,a,b,c,d)},
kH:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.T===C.k)return a.$2(b,c)
return P.pn(null,null,this,a,b,c,d,e,f)},
f3:function(a,b,c,d){return H.j(a,{func:1,ret:b,args:[c,d]})}}
P.kf.prototype={
$0:function(){return this.a.f6(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ke.prototype={
$0:function(){return this.a.kI(this.b)},
$S:7}
P.kg.prototype={
$1:function(a){var u=this.c
return this.a.kJ(this.b,H.y(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ka.prototype={
ga5:function(a){return P.n4(this,this.r,H.u(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.y(b,H.u(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dv(u==null?s.b=P.lZ():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dv(t==null?s.c=P.lZ():t,b)}else return s.fM(0,b)},
fM:function(a,b){var u,t,s,r=this
H.y(b,H.u(r,0))
u=r.d
if(u==null)u=r.d=P.lZ()
t=r.dz(b)
s=u[t]
if(s==null)u[t]=[r.c9(b)]
else{if(r.dH(s,b)>=0)return!1
s.push(r.c9(b))}return!0},
a0:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iE(this.c,b)
else return this.iD(0,b)},
iD:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.hp(r,b)
t=s.dH(u,b)
if(t<0)return!1
s.e0(u.splice(t,1)[0])
return!0},
dv:function(a,b){H.y(b,H.u(this,0))
if(H.d(a[b],"$idb")!=null)return!1
a[b]=this.c9(b)
return!0},
iE:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$idb")
if(u==null)return!1
this.e0(u)
delete a[b]
return!0},
dM:function(){this.r=1073741823&this.r+1},
c9:function(a){var u,t=this,s=new P.db(H.y(a,H.u(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dM()
return s},
e0:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dM()},
dz:function(a){return J.dt(a)&1073741823},
hp:function(a,b){return a[this.dz(b)]},
dH:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Z(a[t].a,b))return t
return-1}}
P.db.prototype={}
P.kb.prototype={
gV:function(a){return this.d},
G:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.c2(t))
else{t=u.c
if(t==null){u.sdw(null)
return!1}else{u.sdw(H.y(t.a,H.u(u,0)))
u.c=u.c.b
return!0}}},
sdw:function(a){this.d=H.y(a,H.u(this,0))},
$iaP:1}
P.hT.prototype={
$2:function(a,b){this.a.m(0,H.y(a,this.b),H.y(b,this.c))},
$S:10}
P.hU.prototype={$in:1,$ib:1}
P.x.prototype={
ga5:function(a){return new H.dT(a,this.gk(a),[H.bS(this,a,"x",0)])},
K:function(a,b){return this.i(a,b)},
kN:function(a,b){var u,t=this,s=H.f([],[H.bS(t,a,"x",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.m(s,u,t.i(a,u))
return s},
kM:function(a){return this.kN(a,!0)},
n:function(a,b){var u,t=this,s=[H.bS(t,a,"x",0)]
H.k(b,"$ib",s,"$ab")
u=H.f([],s)
C.a.sk(u,C.e.n(t.gk(a),b.gk(b)))
C.a.bo(u,0,t.gk(a),a)
C.a.bo(u,t.gk(a),u.length,b)
return u},
jZ:function(a,b,c,d){var u
H.y(d,H.bS(this,a,"x",0))
P.bz(b,c,this.gk(a))
for(u=b;u<c;++u)this.m(a,u,d)},
j:function(a){return P.lI(a,"[","]")}}
P.hX.prototype={}
P.hY.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.o(a)
t.a=u+": "
t.a+=H.o(b)},
$S:10}
P.aw.prototype={
u:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.bS(s,a,"aw",0),H.bS(s,a,"aw",1)]})
for(u=J.bX(s.gaz(a));u.G();){t=u.gV(u)
b.$2(t,s.i(a,t))}},
gk:function(a){return J.aB(this.gaz(a))},
j:function(a){return P.lN(a)},
$iA:1}
P.kq.prototype={
m:function(a,b,c){H.y(b,H.u(this,0))
H.y(c,H.u(this,1))
throw H.c(P.G("Cannot modify unmodifiable map"))}}
P.hZ.prototype={
i:function(a,b){return J.a_(this.a,b)},
m:function(a,b,c){J.lw(this.a,H.y(b,H.u(this,0)),H.y(c,H.u(this,1)))},
u:function(a,b){J.ly(this.a,H.j(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gk:function(a){return J.aB(this.a)},
j:function(a){return J.aL(this.a)},
$iA:1}
P.eo.prototype={}
P.kh.prototype={
j:function(a){return P.lI(this,"{","}")},
K:function(a,b){var u,t,s,r=this
P.lQ(b,"index")
for(u=P.n4(r,r.r,H.u(r,0)),t=0;u.G();){s=u.d
if(b===t)return s;++t}throw H.c(P.a1(b,r,"index",null,t))},
$in:1,
$imN:1}
P.eN.prototype={}
P.fi.prototype={}
P.fJ.prototype={
kg:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bz(a0,a1,b.length)
u=$.nT()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.H(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kO(C.b.H(b,n))
j=H.kO(C.b.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.az("")
g=r.a+=C.b.C(b,s,t)
r.a=g+H.e6(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.C(b,s,a1)
f=g.length
if(q>=0)P.mi(b,p,a1,q,o,f)
else{e=C.e.bl(f-1,4)+1
if(e===1)throw H.c(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b1(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.mi(b,p,a1,q,o,d)
else{e=C.e.bl(d,4)
if(e===1)throw H.c(P.a7(c,b,a1))
if(e>1)b=C.b.b1(b,a1,a1,e===2?"==":"=")}return b},
$ac0:function(){return[[P.b,P.p],P.h]}}
P.fK.prototype={
$ac3:function(){return[[P.b,P.p],P.h]}}
P.c0.prototype={}
P.c3.prototype={}
P.h6.prototype={
$ac0:function(){return[P.h,[P.b,P.p]]}}
P.jr.prototype={
gjX:function(){return C.L}}
P.jt.prototype={
cL:function(a){var u,t,s=P.bz(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kx(u)
if(t.ho(a,0,s)!==s)t.e4(J.nZ(a,s-1),0)
return new Uint8Array(u.subarray(0,H.ph(0,t.b,u.length)))},
$ac3:function(){return[P.h,[P.b,P.p]]}}
P.kx.prototype={
e4:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
ho:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.H(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.e4(r,C.b.H(a,p)))s=p}else if(r<=2047){q=n.b
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
P.js.prototype={
cL:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[P.p],"$ab")
u=P.oS(!1,a,0,null)
if(u!=null)return u
t=P.bz(0,null,J.aB(a))
s=P.ng(a,0,t)
if(s>0){r=P.cY(a,0,s)
if(s===t)return r
q=new P.az(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.az("")
n=new P.kw(!1,q)
n.c=o
n.jQ(a,p,t)
if(n.e>0){H.t(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.e6(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$ac3:function(){return[[P.b,P.p],P.h]}}
P.kw.prototype={
jQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.k(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cr(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.i(a,p)
if(typeof o!=="number")return o.c1()
if((o&192)!==128){n=P.a7(h+C.e.bj(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.x,n)
if(u<=C.x[n]){n=P.a7("Overlong encoding of 0x"+C.e.bj(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.e.bj(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.e6(u)
i.c=!1}for(n=p<c;n;){m=P.ng(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cY(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.i(a,l)
if(typeof o!=="number")return o.E()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.e.bj(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.e.bj(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.L.prototype={}
P.aM.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.aM&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.e.aV(u,30))&1073741823},
j:function(a){var u=this,t=P.o9(H.oC(u)),s=P.dD(H.oA(u)),r=P.dD(H.ow(u)),q=P.dD(H.ox(u)),p=P.dD(H.oz(u)),o=P.dD(H.oB(u)),n=P.oa(H.oy(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.F.prototype={}
P.br.prototype={
n:function(a,b){return new P.br(C.e.n(this.a,b.gdF()))},
E:function(a,b){return C.e.E(this.a,b.gdF())},
aO:function(a,b){return C.e.aO(this.a,b.gdF())},
A:function(a,b){if(b==null)return!1
return b instanceof P.br&&this.a===b.a},
gJ:function(a){return C.e.gJ(this.a)},
j:function(a){var u,t,s,r=new P.h4(),q=this.a
if(q<0)return"-"+new P.br(0-q).j(0)
u=r.$1(C.e.a7(q,6e7)%60)
t=r.$1(C.e.a7(q,1e6)%60)
s=new P.h3().$1(q%1e6)
return""+C.e.a7(q,36e8)+":"+H.o(u)+":"+H.o(t)+"."+H.o(s)}}
P.h3.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.h4.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bJ.prototype={}
P.fD.prototype={
j:function(a){return"Assertion failed"}}
P.cQ.prototype={
j:function(a){return"Throw of null."}}
P.ba.prototype={
gcc:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcb:function(){return""},
j:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gcc()+o+u
if(!q.a)return t
s=q.gcb()
r=P.dJ(q.b)
return t+s+": "+r}}
P.cb.prototype={
gcc:function(){return"RangeError"},
gcb:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.o(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.o(s)
else if(t>s)u=": Not in range "+H.o(s)+".."+H.o(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.o(s)}return u}}
P.hl.prototype={
gcc:function(){return"RangeError"},
gcb:function(){var u,t=H.ao(this.b)
if(typeof t!=="number")return t.E()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.o(u)},
gk:function(a){return this.f}}
P.jk.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.jh.prototype={
j:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cV.prototype={
j:function(a){return"Bad state: "+this.a}}
P.fS.prototype={
j:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dJ(u)+"."}}
P.im.prototype={
j:function(a){return"Out of Memory"},
$ibJ:1}
P.eb.prototype={
j:function(a){return"Stack Overflow"},
$ibJ:1}
P.fZ.prototype={
j:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eG.prototype={
j:function(a){return"Exception: "+this.a}}
P.hg.prototype={
j:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=i!=null&&""!==i?"FormatException: "+H.o(i):"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.C(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.H(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.Y(f,q)
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
k=""}j=C.b.C(f,m,n)
return h+l+j+k+"\n"+C.b.l(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.o(g)+")"):h}}
P.p.prototype={}
P.n.prototype={
gk:function(a){var u,t=this.ga5(this)
for(u=0;t.G();)++u
return u},
K:function(a,b){var u,t,s
P.lQ(b,"index")
for(u=this.ga5(this),t=0;u.G();){s=u.gV(u)
if(b===t)return s;++t}throw H.c(P.a1(b,this,"index",null,t))},
j:function(a){return P.of(this,"(",")")}}
P.aP.prototype={}
P.b.prototype={$in:1}
P.A.prototype={}
P.z.prototype={
gJ:function(a){return P.O.prototype.gJ.call(this,this)},
j:function(a){return"null"}}
P.ak.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
A:function(a,b){return this===b},
gJ:function(a){return H.cS(this)},
j:function(a){return"Instance of '"+H.ca(this)+"'"},
toString:function(){return this.j(this)}}
P.dV.prototype={}
P.ae.prototype={}
P.h.prototype={$imC:1}
P.az.prototype={
gk:function(a){return this.a.length},
j:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iq2:1}
P.jp.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.k(a,"$iA",[r,r],"$aA")
H.M(b)
u=J.dr(b).cU(b,"=")
if(u===-1){if(b!=="")J.lw(a,P.m0(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.C(b,0,u)
s=C.b.at(b,u+1)
r=this.a
J.lw(a,P.m0(t,0,t.length,r,!0),P.m0(s,0,s.length,r,!0))}return a},
$S:40}
P.jm.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:41}
P.jn.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.jo.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.bV(C.b.C(this.b,a,b),null,16)
if(typeof u!=="number")return u.E()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:44}
P.ci.prototype={
gfe:function(){return this.b},
gcT:function(a){var u=this.c
if(u==null)return""
if(C.b.af(u,"["))return C.b.C(u,1,u.length-1)
return u},
gbV:function(a){var u=this.d
if(u==null)return P.n5(this.a)
return u},
gd3:function(a){var u=this.f
return u==null?"":u},
geG:function(){var u=this.r
return u==null?"":u},
d4:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.k(b,"$iA",[P.h,null],"$aA")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.af(p,"/"))p="/"+p
n=P.m_(null,0,0,b)
return new P.ci(u,s,q,r,p,n,m.r)},
gb0:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.siC(new P.eo(P.mV(u==null?"":u),[t,t]))}return s.Q},
geH:function(){return this.c!=null},
geK:function(){return this.f!=null},
geI:function(){return this.r!=null},
j:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.o(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.o(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.o(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.U(b).$ilV)if(s.a==b.gc2())if(s.c!=null===b.geH())if(s.b==b.gfe())if(s.gcT(s)==b.gcT(b))if(s.gbV(s)==b.gbV(b))if(s.e===b.geZ(b)){u=s.f
t=u==null
if(!t===b.geK()){if(t)u=""
if(u===b.gd3(b)){u=s.r
t=u==null
if(!t===b.geI()){if(t)u=""
u=u===b.geG()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.b.gJ(this.j(0)):u},
siC:function(a){var u=P.h
this.Q=H.k(a,"$iA",[u,u],"$aA")},
$ilV:1,
gc2:function(){return this.a},
geZ:function(a){return this.e}}
P.kr.prototype={
$1:function(a){throw H.c(P.a7("Invalid port",this.a,this.b+1))},
$S:28}
P.ks.prototype={
$1:function(a){return P.kv(C.U,a,C.l,!1)},
$S:46}
P.ku.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.o(P.kv(C.r,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.o(P.kv(C.r,b,C.l,!0))}},
$S:21}
P.kt.prototype={
$2:function(a,b){var u,t
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(u=J.bX(H.nw(b,"$in")),t=this.a;u.G();)t.$2(a,H.M(u.gV(u)))},
$S:48}
P.jl.prototype={
gfd:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.eL(u,"?",o)
s=u.length
if(t>=0){r=P.dl(u,t+1,s,C.p,!1)
s=t}else r=p
return q.c=new P.jR("data",p,p,p,P.dl(u,o,s,C.z,!1),r,p)},
j:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kC.prototype={
$1:function(a){return new Uint8Array(96)},
$S:50}
P.kB.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.o_(u,0,96,b)
return u},
$S:53}
P.kD.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.H(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kE.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.H(b,0),t=C.b.H(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.ki.prototype={
geH:function(){return this.c>0},
geJ:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.i(t)
t=u+1<t
u=t}else u=!1
return u},
geK:function(){var u=this.f
if(typeof u!=="number")return u.E()
return u<this.r},
geI:function(){return this.r<this.a.length},
gdJ:function(){return this.b===4&&C.b.af(this.a,"http")},
gdK:function(){return this.b===5&&C.b.af(this.a,"https")},
gc2:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdJ())q=t.x="http"
else if(t.gdK()){t.x="https"
q="https"}else if(q===4&&C.b.af(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.af(t.a,r)){t.x=r
q=r}else{q=C.b.C(t.a,0,q)
t.x=q}return q},
gfe:function(){var u=this.c,t=this.b+3
return u>t?C.b.C(this.a,t,u-1):""},
gcT:function(a){var u=this.c
return u>0?C.b.C(this.a,u,this.d):""},
gbV:function(a){var u,t=this
if(t.geJ()){u=t.d
if(typeof u!=="number")return u.n()
return P.bV(C.b.C(t.a,u+1,t.e),null,null)}if(t.gdJ())return 80
if(t.gdK())return 443
return 0},
geZ:function(a){return C.b.C(this.a,this.e,this.f)},
gd3:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.E()
return u<t?C.b.C(this.a,u+1,t):""},
geG:function(){var u=this.r,t=this.a
return u<t.length?C.b.at(t,u+1):""},
gb0:function(){var u=this,t=u.f
if(typeof t!=="number")return t.E()
if(t>=u.r)return C.V
t=P.h
return new P.eo(P.mV(u.gd3(u)),[t,t])},
d4:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.k(b,"$iA",[P.h,null],"$aA")
u=k.gc2()
t=u==="file"
s=k.c
r=s>0?C.b.C(k.a,k.b+3,s):""
q=k.geJ()?k.gbV(k):j
s=k.c
if(s>0)p=C.b.C(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.C(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.af(o,"/"))o="/"+o
m=P.m_(j,0,0,b)
n=k.r
l=n<s.length?C.b.at(s,n+1):j
return new P.ci(u,r,p,q,o,m,l)},
gJ:function(a){var u=this.y
return u==null?this.y=C.b.gJ(this.a):u},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ilV&&this.a===b.j(0)},
j:function(a){return this.a},
$ilV:1}
P.jR.prototype={}
W.w.prototype={}
W.fz.prototype={
gk:function(a){return a.length}}
W.fB.prototype={
j:function(a){return String(a)}}
W.fC.prototype={
j:function(a){return String(a)}}
W.bZ.prototype={$ibZ:1}
W.c_.prototype={
d7:function(a,b,c){if(c!=null)return a.getContext(b,P.pu(c))
return a.getContext(b)},
fh:function(a,b){return this.d7(a,b,null)},
$ic_:1}
W.cx.prototype={$icx:1}
W.bI.prototype={
gk:function(a){return a.length}}
W.cA.prototype={$icA:1}
W.fV.prototype={
gk:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cB.prototype={
gk:function(a){return a.length}}
W.fW.prototype={}
W.bc.prototype={}
W.bd.prototype={}
W.fX.prototype={
gk:function(a){return a.length}}
W.fY.prototype={
gk:function(a){return a.length}}
W.h_.prototype={
i:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dF.prototype={$idF:1}
W.h0.prototype={
j:function(a){return String(a)}}
W.dG.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.k(c,"$iax",[P.ak],"$aax")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.ax,P.ak]]},
$ax:function(){return[[P.ax,P.ak]]},
$in:1,
$an:function(){return[[P.ax,P.ak]]},
$ib:1,
$ab:function(){return[[P.ax,P.ak]]},
$aD:function(){return[[P.ax,P.ak]]}}
W.dH.prototype={
j:function(a){return"Rectangle ("+H.o(a.left)+", "+H.o(a.top)+") "+H.o(this.gaN(a))+" x "+H.o(this.gaK(a))},
A:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iax)return!1
return a.left===u.gbU(b)&&a.top===u.gbY(b)&&this.gaN(a)===u.gaN(b)&&this.gaK(a)===u.gaK(b)},
gJ:function(a){return W.n3(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(this.gaN(a)),C.j.gJ(this.gaK(a)))},
ge9:function(a){return a.bottom},
gaK:function(a){return a.height},
gbU:function(a){return a.left},
gbW:function(a){return a.right},
gbY:function(a){return a.top},
gaN:function(a){return a.width},
$iax:1,
$aax:function(){return[P.ak]}}
W.h1.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.M(c)
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.h]},
$ax:function(){return[P.h]},
$in:1,
$an:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aD:function(){return[P.h]}}
W.h2.prototype={
gk:function(a){return a.length}}
W.jP.prototype={
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.d(u[b],"$ia6")},
m:function(a,b,c){var u
H.d(c,"$ia6")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga5:function(a){var u=this.kM(this)
return new J.av(u,u.length,[H.u(u,0)])},
$ax:function(){return[W.a6]},
$an:function(){return[W.a6]},
$ab:function(){return[W.a6]}}
W.a6.prototype={
gcK:function(a){return new W.jP(a,a.children)},
gec:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.E()
if(s<0)s=-s*0
if(typeof r!=="number")return r.E()
if(r<0)r=-r*0
return new P.ax(u,t,s,r,[P.ak])},
j:function(a){return a.localName},
$ia6:1}
W.q.prototype={$iq:1}
W.l.prototype={
jI:function(a,b,c,d){H.j(c,{func:1,args:[W.q]})
if(c!=null)this.fN(a,b,c,!1)},
fN:function(a,b,c,d){return a.addEventListener(b,H.co(H.j(c,{func:1,args:[W.q]}),1),!1)},
$il:1}
W.aO.prototype={$iaO:1}
W.cD.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaO")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aO]},
$ax:function(){return[W.aO]},
$in:1,
$an:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$icD:1,
$aD:function(){return[W.aO]}}
W.hb.prototype={
gk:function(a){return a.length}}
W.hf.prototype={
gk:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.hi.prototype={
gk:function(a){return a.length}}
W.c5.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iI")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.I]},
$ax:function(){return[W.I]},
$in:1,
$an:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$ic5:1,
$aD:function(){return[W.I]}}
W.be.prototype={
kp:function(a,b,c,d){return a.open(b,c,!0)},
$ibe:1}
W.hj.prototype={
$1:function(a){return H.d(a,"$ibe").responseText},
$S:54}
W.hk.prototype={
$1:function(a){var u,t,s,r,q
H.d(a,"$ibk")
u=this.a
t=u.status
if(typeof t!=="number")return t.aO()
s=t>=200&&t<300
r=t>307&&t<400
t=s||t===0||t===304||r
q=this.b
if(t)q.ax(0,u)
else q.ee(a)},
$S:56}
W.cF.prototype={}
W.bs.prototype={$ibs:1,
gef:function(a){return a.data}}
W.cG.prototype={$icG:1}
W.cH.prototype={$icH:1,$icy:1}
W.cy.prototype={$ia6:1,$il:1,$iI:1}
W.bf.prototype={$ibf:1}
W.hV.prototype={
j:function(a){return String(a)}}
W.i6.prototype={
gk:function(a){return a.length}}
W.cK.prototype={$icK:1}
W.i7.prototype={
i:function(a,b){return P.bC(a.get(H.M(b)))},
u:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bC(t.value[1]))}},
gaz:function(a){var u=H.f([],[P.h])
this.u(a,new W.i8(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaw:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
W.i8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:11}
W.i9.prototype={
i:function(a,b){return P.bC(a.get(H.M(b)))},
u:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bC(t.value[1]))}},
gaz:function(a){var u=H.f([],[P.h])
this.u(a,new W.ia(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaw:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
W.ia.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:11}
W.aY.prototype={$iaY:1}
W.ib.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaY")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aY]},
$ax:function(){return[W.aY]},
$in:1,
$an:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aD:function(){return[W.aY]}}
W.ap.prototype={$iap:1}
W.jO.prototype={
m:function(a,b,c){var u,t
H.d(c,"$iI")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
ga5:function(a){var u=this.a.childNodes
return new W.dK(u,u.length,[H.bS(C.W,u,"D",0)])},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ax:function(){return[W.I]},
$an:function(){return[W.I]},
$ab:function(){return[W.I]}}
W.I.prototype={
kE:function(a,b){var u,t
try{u=a.parentNode
J.nX(u,b,a)}catch(t){H.al(t)}return a},
j:function(a){var u=a.nodeValue
return u==null?this.fl(a):u},
iG:function(a,b,c){return a.replaceChild(b,c)},
$iI:1}
W.cP.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iI")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.I]},
$ax:function(){return[W.I]},
$in:1,
$an:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$aD:function(){return[W.I]}}
W.aZ.prototype={$iaZ:1,
gk:function(a){return a.length}}
W.ip.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaZ")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aZ]},
$ax:function(){return[W.aZ]},
$in:1,
$an:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aD:function(){return[W.aZ]}}
W.bk.prototype={$ibk:1}
W.iA.prototype={
i:function(a,b){return P.bC(a.get(H.M(b)))},
u:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bC(t.value[1]))}},
gaz:function(a){var u=H.f([],[P.h])
this.u(a,new W.iB(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaw:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
W.iB.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:11}
W.iD.prototype={
gk:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.iL.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$ib_")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b_]},
$ax:function(){return[W.b_]},
$in:1,
$an:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aD:function(){return[W.b_]}}
W.b0.prototype={$ib0:1}
W.iM.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$ib0")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b0]},
$ax:function(){return[W.b0]},
$in:1,
$an:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aD:function(){return[W.b0]}}
W.b1.prototype={$ib1:1,
gk:function(a){return a.length}}
W.iP.prototype={
i:function(a,b){return a.getItem(H.M(b))},
m:function(a,b,c){a.setItem(b,c)},
u:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaz:function(a){var u=H.f([],[P.h])
this.u(a,new W.iQ(u))
return u},
gk:function(a){return a.length},
$aaw:function(){return[P.h,P.h]},
$iA:1,
$aA:function(){return[P.h,P.h]}}
W.iQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:21}
W.aQ.prototype={$iaQ:1}
W.bA.prototype={$ibA:1}
W.b2.prototype={$ib2:1}
W.aR.prototype={$iaR:1}
W.iW.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaR")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aR]},
$ax:function(){return[W.aR]},
$in:1,
$an:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aD:function(){return[W.aR]}}
W.iX.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$ib2")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b2]},
$ax:function(){return[W.b2]},
$in:1,
$an:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aD:function(){return[W.b2]}}
W.j1.prototype={
gk:function(a){return a.length}}
W.b3.prototype={$ib3:1}
W.b4.prototype={$ib4:1}
W.j4.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$ib3")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b3]},
$ax:function(){return[W.b3]},
$in:1,
$an:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aD:function(){return[W.b3]}}
W.j5.prototype={
gk:function(a){return a.length}}
W.bQ.prototype={}
W.jq.prototype={
j:function(a){return String(a)}}
W.jC.prototype={
gk:function(a){return a.length}}
W.bo.prototype={
gjU:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.G("deltaY is not supported"))},
gjT:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.G("deltaX is not supported"))},
$ibo:1}
W.da.prototype={
iH:function(a,b){return a.requestAnimationFrame(H.co(H.j(b,{func:1,ret:-1,args:[P.ak]}),1))},
h9:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jQ.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iW")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.W]},
$ax:function(){return[W.W]},
$in:1,
$an:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aD:function(){return[W.W]}}
W.eB.prototype={
j:function(a){return"Rectangle ("+H.o(a.left)+", "+H.o(a.top)+") "+H.o(a.width)+" x "+H.o(a.height)},
A:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iax)return!1
return a.left===u.gbU(b)&&a.top===u.gbY(b)&&a.width===u.gaN(b)&&a.height===u.gaK(b)},
gJ:function(a){return W.n3(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(a.width),C.j.gJ(a.height))},
gaK:function(a){return a.height},
gaN:function(a){return a.width}}
W.k7.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaV")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$in:1,
$an:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aD:function(){return[W.aV]}}
W.eT.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iI")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.I]},
$ax:function(){return[W.I]},
$in:1,
$an:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$aD:function(){return[W.I]}}
W.kj.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$ib1")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b1]},
$ax:function(){return[W.b1]},
$in:1,
$an:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aD:function(){return[W.b1]}}
W.kn.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaQ")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aQ]},
$ax:function(){return[W.aQ]},
$in:1,
$an:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aD:function(){return[W.aQ]}}
W.jS.prototype={}
W.lY.prototype={}
W.jT.prototype={
j7:function(){var u=this,t=u.d
if(t!=null&&u.a<=0)J.nY(u.b,u.c,t,!1)}}
W.jU.prototype={
$1:function(a){return this.a.$1(H.d(a,"$iq"))},
$S:29}
W.D.prototype={
ga5:function(a){return new W.dK(a,this.gk(a),[H.bS(this,a,"D",0)])}}
W.dK.prototype={
G:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdI(J.a_(u.a,t))
u.c=t
return!0}u.sdI(null)
u.c=s
return!1},
gV:function(a){return this.d},
sdI:function(a){this.d=H.y(a,H.u(this,0))},
$iaP:1}
W.eA.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f5.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
P.kl.prototype={
eE:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
c0:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.U(a)
if(!!u.$iaM)return new Date(a.a)
if(!!u.$ioH)throw H.c(P.ji("structured clone of RegExp"))
if(!!u.$iaO)return a
if(!!u.$ibZ)return a
if(!!u.$icD)return a
if(!!u.$ibs)return a
if(!!u.$icM||!!u.$ibN||!!u.$icK)return a
if(!!u.$iA){t=q.eE(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.m(s,t,r)
u.u(a,new P.km(p,q))
return p.a}if(!!u.$ib){t=q.eE(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.jR(a,t)}throw H.c(P.ji("structured clone of other type"))},
jR:function(a,b){var u,t=J.cr(a),s=t.gk(a),r=new Array(s)
C.a.m(this.b,b,r)
for(u=0;u<s;++u)C.a.m(r,u,this.c0(t.i(a,u)))
return r}}
P.km.prototype={
$2:function(a,b){this.a.a[a]=this.b.c0(b)},
$S:10}
P.fh.prototype={$ibs:1,
gef:function(a){return this.a}}
P.kL.prototype={
$2:function(a,b){this.a[a]=b},
$S:10}
P.f8.prototype={}
P.hc.prototype={
gbr:function(){var u=this.b,t=H.aU(u,"x",0),s=W.a6
return new H.i_(new H.jD(u,H.j(new P.hd(),{func:1,ret:P.L,args:[t]}),[t]),H.j(new P.he(),{func:1,ret:s,args:[t]}),[t,s])},
m:function(a,b,c){var u
H.d(c,"$ia6")
u=this.gbr()
J.o0(u.b.$1(J.lx(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aB(this.gbr().a)},
i:function(a,b){var u=this.gbr()
return u.b.$1(J.lx(u.a,b))},
ga5:function(a){var u=P.mw(this.gbr(),!1,W.a6)
return new J.av(u,u.length,[H.u(u,0)])},
$ax:function(){return[W.a6]},
$an:function(){return[W.a6]},
$ab:function(){return[W.a6]}}
P.hd.prototype={
$1:function(a){return!!J.U(H.d(a,"$iI")).$ia6},
$S:30}
P.he.prototype={
$1:function(a){return H.m(H.d(a,"$iI"),"$ia6")},
$S:31}
P.kc.prototype={
gbW:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
return H.y(u+t,H.u(this,0))},
ge9:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
return H.y(u+t,H.u(this,0))},
j:function(a){var u=this
return"Rectangle ("+H.o(u.a)+", "+H.o(u.b)+") "+H.o(u.c)+" x "+H.o(u.d)},
A:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$iax){t=p.a
if(t==u.gbU(b)){s=p.b
if(s==u.gbY(b)){r=p.c
if(typeof t!=="number")return t.n()
if(typeof r!=="number")return H.i(r)
q=H.u(p,0)
if(H.y(t+r,q)===u.gbW(b)){t=p.d
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.i(t)
u=H.y(s+t,q)===u.ge9(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.dt(s),q=t.b,p=J.dt(q),o=t.c
if(typeof s!=="number")return s.n()
if(typeof o!=="number")return H.i(o)
u=H.u(t,0)
o=C.e.gJ(H.y(s+o,u))
s=t.d
if(typeof q!=="number")return q.n()
if(typeof s!=="number")return H.i(s)
u=C.e.gJ(H.y(q+s,u))
return P.p0(P.k9(P.k9(P.k9(P.k9(0,r),p),o),u))}}
P.ax.prototype={
gbU:function(a){return this.a},
gbY:function(a){return this.b},
gaN:function(a){return this.c},
gaK:function(a){return this.d}}
P.bg.prototype={$ibg:1}
P.hP.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.d(c,"$ibg")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$ax:function(){return[P.bg]},
$in:1,
$an:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aD:function(){return[P.bg]}}
P.bj.prototype={$ibj:1}
P.ik.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.d(c,"$ibj")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$ax:function(){return[P.bj]},
$in:1,
$an:function(){return[P.bj]},
$ib:1,
$ab:function(){return[P.bj]},
$aD:function(){return[P.bj]}}
P.ir.prototype={
gk:function(a){return a.length}}
P.iU.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.M(c)
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$ax:function(){return[P.h]},
$in:1,
$an:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aD:function(){return[P.h]}}
P.v.prototype={
gcK:function(a){return new P.hc(a,new W.jO(a))}}
P.bm.prototype={$ibm:1}
P.j6.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.d(c,"$ibm")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$ax:function(){return[P.bm]},
$in:1,
$an:function(){return[P.bm]},
$ib:1,
$ab:function(){return[P.bm]},
$aD:function(){return[P.bm]}}
P.eL.prototype={}
P.eM.prototype={}
P.eW.prototype={}
P.eX.prototype={}
P.f6.prototype={}
P.f7.prototype={}
P.ff.prototype={}
P.fg.prototype={}
P.S.prototype={$in:1,
$an:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$ioP:1}
P.fF.prototype={
gk:function(a){return a.length}}
P.fG.prototype={
i:function(a,b){return P.bC(a.get(H.M(b)))},
u:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bC(t.value[1]))}},
gaz:function(a){var u=H.f([],[P.h])
this.u(a,new P.fH(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaw:function(){return[P.h,null]},
$iA:1,
$aA:function(){return[P.h,null]}}
P.fH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:11}
P.fI.prototype={
gk:function(a){return a.length}}
P.bY.prototype={}
P.il.prototype={
gk:function(a){return a.length}}
P.ey.prototype={}
P.dw.prototype={$idw:1}
P.e7.prototype={$ie7:1}
P.cd.prototype={
kK:function(a,b,c,d,e,f,g){var u,t=J.U(g)
if(!!t.$ibs)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pv(g))
return}if(!!t.$icG)t=!0
else t=!1
if(t){this.iY(a,b,c,d,e,f,g)
return}throw H.c(P.du("Incorrect number or type of arguments"))},
iY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
P:function(a,b,c){return a.uniform1f(b,c)},
a4:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
kP:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fb:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fc:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$icd:1}
P.e9.prototype={$ie9:1}
P.ed.prototype={$ied:1}
P.em.prototype={$iem:1}
P.iN.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return P.bC(a.item(b))},
m:function(a,b,c){H.d(c,"$iA")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$ax:function(){return[[P.A,,,]]},
$in:1,
$an:function(){return[[P.A,,,]]},
$ib:1,
$ab:function(){return[[P.A,,,]]},
$aD:function(){return[[P.A,,,]]}}
P.f2.prototype={}
P.f3.prototype={}
O.aa.prototype={
c5:function(a){var u=this
u.sdL(H.f([],[a]))
u.sdQ(null)
u.sdN(null)
u.sdR(null)},
d9:function(a,b,c){var u=this,t=H.aU(u,"aa",0)
H.j(b,{func:1,ret:P.L,args:[[P.n,t]]})
t={func:1,ret:-1,args:[P.p,[P.n,t]]}
H.j(a,t)
H.j(c,t)
u.sdQ(b)
u.sdN(a)
u.sdR(c)},
bn:function(a,b){return this.d9(a,null,b)},
ii:function(a){var u
H.k(a,"$in",[H.aU(this,"aa",0)],"$an")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fu:function(a,b){var u
H.k(b,"$in",[H.aU(this,"aa",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
ga5:function(a){var u=this.a
return new J.av(u,u.length,[H.u(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aU(s,"aa",0)
H.y(b,r)
r=[r]
if(H.C(s.ii(H.f([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.fu(t,H.f([b],r))}},
i:function(a,b){var u=this.a
if(b>=u.length)return H.e(u,b)
return u[b]},
sdL:function(a){this.a=H.k(a,"$ib",[H.aU(this,"aa",0)],"$ab")},
sdQ:function(a){this.b=H.j(a,{func:1,ret:P.L,args:[[P.n,H.aU(this,"aa",0)]]})},
sdN:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.p,[P.n,H.aU(this,"aa",0)]]})},
sdR:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.p,[P.n,H.aU(this,"aa",0)]]})},
$in:1}
O.cJ.prototype={
gk:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.X():u},
aP:function(){var u=this.b
if(u!=null)u.L(null)},
ga_:function(a){var u=this.a
if(u.length>0)return C.a.gaL(u)
else return V.dZ()},
f1:function(a){var u=this.a
if(a==null)C.a.h(u,V.dZ())
else C.a.h(u,a)
this.aP()},
d2:function(){var u=this.a
if(u.length>0){u.pop()
this.aP()}},
scf:function(a){this.a=H.k(a,"$ib",[V.aD],"$ab")}}
E.fL.prototype={}
E.a4.prototype={
du:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.av(u,u.length,[H.u(u,0)]);u.G();){t=u.d
if(t.f==null)t.du()}},
sda:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().a0(0,s.geU())
u=s.c
if(u!=null)u.gB().h(0,s.geU())
t=new D.E("shape",r,s.c,[F.an])
t.b=!0
s.ap(t)}},
sb3:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gB().a0(0,s.geW())
u=s.f
s.f=a
if(a!=null)a.gB().h(0,s.geW())
s.du()
t=new D.E("technique",u,s.f,[O.bP])
t.b=!0
s.ap(t)}},
sbc:function(a){var u,t,s=this
if(!J.Z(s.r,a)){u=s.r
if(u!=null)u.gB().a0(0,s.geS())
if(a!=null)a.gB().h(0,s.geS())
s.r=a
t=new D.E("mover",u,a,[U.aq])
t.b=!0
s.ap(t)}},
ba:function(){var u=this.d,t=u!=null?V.mL(null,u.ba()):null
for(u=this.y.a,u=new J.av(u,u.length,[H.u(u,0)]);u.G();)t=V.mL(t,u.d.ba())
return t},
kG:function(a){var u,t,s,r,q,p=this.ba(),o=V.lP(),n=p.a,m=p.d
if(typeof n!=="number")return n.n()
u=p.b
t=p.e
if(typeof u!=="number")return u.n()
s=p.c
r=p.f
if(typeof s!=="number")return s.n()
o=o.p(0,new V.aE(n+m/2,u+t/2,s+r/2))
if(t>m)m=t
if(r>m)m=r
if(m===0)return
q=a/m
this.bA(V.my(q,q,q).l(0,V.mz(o.a,o.b,o.c)))},
bA:function(a){var u=this.c
if(u!=null)u.bA(a)
for(u=this.y.a,u=new J.av(u,u.length,[H.u(u,0)]);u.G();)u.d.bA(a)},
al:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.b5(0,b,s):null
if(!J.Z(q,s.x)){u=s.x
s.x=q
t=new D.E("matrix",u,q,[V.aD])
t.b=!0
s.ap(t)}r=s.f
if(r!=null)r.al(0,b)
for(r=s.y.a,r=new J.av(r,r.length,[H.u(r,0)]);r.G();)r.d.al(0,b)},
aM:function(a){var u,t,s,r=this
if(!H.C(r.b))return
u=a.dx
t=r.x
u.toString
if(t==null)C.a.h(u.a,u.ga_(u))
else C.a.h(u.a,t.l(0,u.ga_(u)))
u.aP()
a.f2(r.f)
u=a.dy
s=(u&&C.a).gaL(u)
if(s!=null&&r.d!=null)s.f4(a,r)
for(u=r.y.a,u=new J.av(u,u.length,[H.u(u,0)]);u.G();)u.d.aM(a)
a.f_()
a.dx.d2()},
gB:function(){var u=this.z
return u==null?this.z=D.X():u},
ap:function(a){var u=this.z
if(u!=null)u.L(a)},
a3:function(){return this.ap(null)},
eV:function(a){H.d(a,"$iB")
this.e=null
this.ap(a)},
kn:function(){return this.eV(null)},
eX:function(a){this.ap(H.d(a,"$iB"))},
ko:function(){return this.eX(null)},
eT:function(a){this.ap(H.d(a,"$iB"))},
km:function(){return this.eT(null)},
eR:function(a){this.ap(H.d(a,"$iB"))},
kj:function(){return this.eR(null)},
ki:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$in",[E.a4],"$an")
for(u=b.length,t=this.geQ(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bK()
o.sam(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sam(H.f([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
kl:function(a,b){var u,t,s,r,q
H.k(b,"$in",[E.a4],"$an")
for(u=b.length,t=this.geQ(),s=0;s<b.length;b.length===u||(0,H.H)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.bK()
q.sam(null)
q.saT(null)
q.c=null
q.d=0
r.z=q}q.a0(0,t)}}this.a3()},
j:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfv:function(a,b){this.y=H.k(b,"$iaa",[E.a4],"$aaa")},
$ibw:1}
E.iw.prototype={
fq:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aM(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cJ()
t=[V.aD]
u.scf(H.f([],t))
u.b=null
u.gB().h(0,new E.ix(s))
s.cy=u
u=new O.cJ()
u.scf(H.f([],t))
u.b=null
u.gB().h(0,new E.iy(s))
s.db=u
u=new O.cJ()
u.scf(H.f([],t))
u.b=null
u.gB().h(0,new E.iz(s))
s.dx=u
s.siX(H.f([],[O.bP]))
u=s.dy;(u&&C.a).h(u,null)
s.siP(new H.aI([P.h,A.cT]))},
gkC:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga_(s)
u=t.db
u=t.z=s.l(0,u.ga_(u))
s=u}return s},
gf0:function(){var u,t=this,s=t.ch
if(s==null){s=t.gkC()
u=t.dx
u=t.ch=s.l(0,u.ga_(u))
s=u}return s},
gfg:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga_(s)
u=t.dx
u=t.cx=s.l(0,u.ga_(u))
s=u}return s},
f2:function(a){var u=this.dy,t=a==null?(u&&C.a).gaL(u):a;(u&&C.a).h(u,t)},
f_:function(){var u=this.dy
if(u.length>1)u.pop()},
e7:function(a){var u=a.b
if(u.length===0)throw H.c(P.r("May not cache a shader with no name."))
if(this.fr.bC(0,u))throw H.c(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)},
siX:function(a){this.dy=H.k(a,"$ib",[O.bP],"$ab")},
siP:function(a){this.fr=H.k(a,"$iA",[P.h,A.cT],"$aA")}}
E.ix.prototype={
$1:function(a){var u
H.d(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:14}
E.iy.prototype={
$1:function(a){var u
H.d(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:14}
E.iz.prototype={
$1:function(a){var u
H.d(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:14}
E.ei.prototype={
dj:function(a){H.d(a,"$iB")
this.f5()},
di:function(){return this.dj(null)},
gk7:function(){var u,t=this,s=Date.now(),r=C.e.a7(P.mm(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aM(s,!1)
return u/r},
dV:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.l()
if(typeof r!=="number")return H.i(r)
u=C.j.bT(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.l()
t=C.j.bT(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mQ(C.t,s.gkF())}},
f5:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.j0(this),{func:1,ret:-1,args:[P.ak]})
C.C.h9(u)
C.C.iH(u,W.nl(t,P.ak))}},
kD:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dV()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aM(r,!1)
s.y=P.mm(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aP()
r=s.db
C.a.sk(r.a,0)
r.aP()
r=s.dx
C.a.sk(r.a,0)
r.aP()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.aM(p.e)}}catch(q){u=H.al(q)
t=H.bU(q)
P.fw("Error: "+H.o(u))
P.fw("Stack: "+H.o(t))
throw H.c(u)}}}
E.j0.prototype={
$1:function(a){var u
H.pN(a)
u=this.a
if(u.ch){u.ch=!1
u.kD()}},
$S:35}
Z.eu.prototype={$ipV:1}
Z.dx.prototype={
aH:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.al(s)
t=P.r('Failed to bind buffer attribute "'+r.a.j(0)+'": '+H.o(u))
throw H.c(t)}},
j:function(a){var u=this
return"["+u.a.j(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.o(u.e)+"]"}}
Z.ev.prototype={$ipW:1}
Z.bH.prototype={
ai:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aH:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aH(a)},
fa:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aM:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
eY:function(a){this.aH(a)
this.aM(a)
this.fa(a)},
j:function(a){var u,t,s,r,q=[P.h],p=H.f([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(p,u[s].j(0))
r=H.f([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aL(q[s]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.F(p,", ")+"\nAttrs:   "+C.a.F(r,", ")},
shq:function(a){this.b=H.k(a,"$ib",[Z.bL],"$ab")},
$ioM:1}
Z.dy.prototype={
shy:function(a){this.a=H.k(a,"$iA",[P.h,Z.bH],"$aA")},
$ioM:1}
Z.bL.prototype={
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ca(this.c)+"'")+"]"}}
Z.b6.prototype={
gdc:function(a){var u=this.a,t=(u&$.b9().a)!==0?3:0
if((u&$.b8().a)!==0)t+=3
if((u&$.b7().a)!==0)t+=3
if((u&$.bF().a)!==0)t+=2
if((u&$.bG().a)!==0)t+=3
if((u&$.bW().a)!==0)t+=3
if((u&$.ds().a)!==0)t+=4
if((u&$.cu().a)!==0)++t
return(u&$.bE().a)!==0?t+4:t},
jM:function(a){var u,t=$.b9(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bF()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ds()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bE()
if((s&t.a)!==0)if(u===a)return t
return $.nS()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b6))return!1
return this.a===b.a},
j:function(a){var u=H.f([],[P.h]),t=this.a
if((t&$.b9().a)!==0)C.a.h(u,"Pos")
if((t&$.b8().a)!==0)C.a.h(u,"Norm")
if((t&$.b7().a)!==0)C.a.h(u,"Binm")
if((t&$.bF().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bG().a)!==0)C.a.h(u,"TxtCube")
if((t&$.bW().a)!==0)C.a.h(u,"Clr3")
if((t&$.ds().a)!==0)C.a.h(u,"Clr4")
if((t&$.cu().a)!==0)C.a.h(u,"Weight")
if((t&$.bE().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.F(u,"|")}}
D.fO.prototype={}
D.bK.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.j(b,u)
if(this.a==null)this.sam(H.f([],[u]))
u=this.a;(u&&C.a).h(u,b)},
a0:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.aI(u,b)
if(u===!0){u=s.a
t=(u&&C.a).a0(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.aI(u,b)
if(u===!0){u=s.b
t=(u&&C.a).a0(u,b)||t}return t},
L:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.B()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.u(P.mw(u,!0,{func:1,ret:-1,args:[D.B]}),new D.h9(q))
u=r.b
if(u!=null){r.saT(H.f([],[{func:1,ret:-1,args:[D.B]}]))
C.a.u(u,new D.ha(q))}return!0},
jV:function(){return this.L(null)},
b2:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.L(u)}}},
sam:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saT:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.h9.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:22}
D.ha.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:22}
D.B.prototype={}
D.c6.prototype={}
D.c7.prototype={}
D.E.prototype={
j:function(a){return"ValueChanged: "+this.c+", "+H.o(this.d)+" => "+H.o(this.e)}}
O.kF.prototype={
ar:function(a,b,c){var u=0,t=P.ai(null),s=this
var $async$ar=P.aj(function(d,e){if(d===1)return P.af(e,t)
while(true)switch(u){case 0:u=2
return P.au(s.aq(H.f(a.split("\n"),[P.h]),b,!1),$async$ar)
case 2:return P.ag(null,t)}})
return P.ah($async$ar,t)},
aq:function(a,b,c){H.k(a,"$ib",[P.h],"$ab")
return this.kA(a,b,!1)},
kA:function(a,b,c){var u=0,t=P.ai(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$aq=P.aj(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.mf(o,a.length)){u=4
break}s=6
u=9
return P.au(p.a6(C.a.i(a,o),b,!1),$async$aq)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.al(k)
l=P.r("Line "+H.o(J.fx(o,1))+": "+H.o(n))
throw H.c(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.fx(o,1)
u=2
break
case 4:return P.ag(null,t)
case 1:return P.af(r,t)}})
return P.ah($async$aq,t)},
a6:function(a,b,c){return this.ky(a,b,!1)},
ky:function(a,b,c){var u=0,t=P.ai(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$a6=P.aj(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
n=J.mg(a,"#")
if(J.me(n,0))a=J.mh(a,0,n)
a=J.lz(a)
if(J.aB(a)<=0){u=1
break}m=O.nj(a)
if(J.aB(m)<1){u=1
break}case 7:switch(J.a_(m,0)){case"newmtl":u=9
break
case"Ka":u=10
break
case"Kd":u=11
break
case"Ks":u=12
break
case"Ns":u=13
break
case"d":u=14
break
case"Tr":u=15
break
case"map_Ka":u=16
break
case"map_Kd":u=17
break
case"map_Ks":u=18
break
case"map_d":u=19
break
case"map_bump":u=20
break
case"bump":u=21
break
default:u=22
break}break
case 9:k=J.a_(m,1)
j=O.mx()
o.c=j
o.b.m(0,k,j)
u=1
break
case 10:i=O.bB(J.a_(m,1))
o.c.r.sU(0,V.lE(i))
u=1
break
case 11:i=O.bB(J.a_(m,1))
o.c.x.sU(0,V.lE(i))
u=1
break
case 12:i=O.bB(J.a_(m,1))
o.c.z.sU(0,V.lE(i))
u=1
break
case 13:i=O.bB(J.a_(m,1))
k=i.length
if(k!==1)H.t(P.r("Shininess may only have 1 number."))
j=o.c.z
if(0>=k){s=H.e(i,0)
u=1
break}h=i[0]
j.toString
if(h==null)h=100
if(h<=0)j.eb(0)
else if(j.c===C.d){j.c=C.i
j.c4()
j.bx(100)
k=j.a
k.a=null
k.D(null)}j.bx(h)
u=1
break
case 14:i=O.bB(J.a_(m,1))
k=i.length
if(k!==1)H.t(P.r("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.e(i,0)
u=1
break}j.sff(0,i[0])
u=1
break
case 15:i=O.bB(J.a_(m,1))
k=i.length
if(k!==1)H.t(P.r("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.e(i,0)
u=1
break}k=i[0]
if(typeof k!=="number"){s=H.i(k)
u=1
break}j.sff(0,1-k)
u=1
break
case 16:u=23
return P.au(o.ct(J.a_(m,1),b),$async$a6)
case 23:u=1
break
case 17:u=24
return P.au(o.cu(J.a_(m,1),b),$async$a6)
case 24:u=1
break
case 18:u=25
return P.au(o.cv(J.a_(m,1),b),$async$a6)
case 25:u=1
break
case 19:u=26
return P.au(o.cs(J.a_(m,1),b),$async$a6)
case 26:u=1
break
case 20:u=27
return P.au(o.bs(J.a_(m,1),b),$async$a6)
case 27:u=1
break
case 21:u=28
return P.au(o.bs(J.a_(m,1),b),$async$a6)
case 28:u=1
break
case 22:u=1
break
case 8:r=2
u=6
break
case 4:r=3
f=q
l=H.al(f)
k=P.r('Line: "'+H.o(a)+'": '+H.o(l))
throw H.c(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ag(s,t)
case 2:return P.af(q,t)}})
return P.ah($async$a6,t)},
ct:function(a,b){var u=0,t=P.ai(null),s=this,r
var $async$ct=P.aj(function(c,d){if(c===1)return P.af(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.r.sbi(s.a.bb(r))
return P.ag(null,t)}})
return P.ah($async$ct,t)},
cu:function(a,b){var u=0,t=P.ai(null),s=this,r
var $async$cu=P.aj(function(c,d){if(c===1)return P.af(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.x.sbi(s.a.bb(r))
return P.ag(null,t)}})
return P.ah($async$cu,t)},
cv:function(a,b){var u=0,t=P.ai(null),s=this,r
var $async$cv=P.aj(function(c,d){if(c===1)return P.af(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.z.sbi(s.a.bb(r))
return P.ag(null,t)}})
return P.ah($async$cv,t)},
cs:function(a,b){var u=0,t=P.ai(null),s=this,r
var $async$cs=P.aj(function(c,d){if(c===1)return P.af(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.db.sbi(s.a.bb(r))
return P.ag(null,t)}})
return P.ah($async$cs,t)},
bs:function(a,b){var u=0,t=P.ai(null),s=this,r
var $async$bs=P.aj(function(c,d){if(c===1)return P.af(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.Q.sbi(s.a.bb(r))
return P.ag(null,t)}})
return P.ah($async$bs,t)},
sco:function(a){this.b=H.k(a,"$iA",[P.h,O.aX],"$aA")}}
O.dp.prototype={
skQ:function(a){this.b=H.k(a,"$ib",[F.J],"$ab")}}
O.kG.prototype={
gjY:function(){var u=this.Q,t=u.y.a,s=t.length
if(s===1){if(0>=s)return H.e(t,0)
return t[0]}return u},
ar:function(a,b,c){var u=0,t=P.ai(null),s=this
var $async$ar=P.aj(function(d,e){if(d===1)return P.af(e,t)
while(true)switch(u){case 0:u=2
return P.au(s.aq(H.f(a.split("\n"),[P.h]),b,!1),$async$ar)
case 2:return P.ag(null,t)}})
return P.ah($async$ar,t)},
aq:function(a,b,c){H.k(a,"$ib",[P.h],"$ab")
return this.kB(a,b,!1)},
kB:function(a,b,c){var u=0,t=P.ai(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$aq=P.aj(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.mf(o,a.length)){u=4
break}s=6
u=9
return P.au(p.a6(C.a.i(a,o),b,!1),$async$aq)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.al(k)
l=P.r("Line "+H.o(J.fx(o,1))+": "+H.o(n))
throw H.c(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.fx(o,1)
u=2
break
case 4:return P.ag(null,t)
case 1:return P.af(r,t)}})
return P.ah($async$aq,t)},
a6:function(a,b,c){return this.kz(a,b,!1)},
kz:function(a,b,c){var u=0,t=P.ai(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$a6=P.aj(function(d,a0){if(d===1){q=a0
u=r}while(true)switch(u){case 0:r=4
n=J.mg(a,"#")
if(J.me(n,0))a=J.mh(a,0,n)
a=J.lz(a)
if(J.aB(a)<=0){u=1
break}m=O.nj(a)
if(J.aB(m)<1){u=1
break}case 7:switch(J.a_(m,0)){case"v":u=9
break
case"vt":u=10
break
case"vn":u=11
break
case"p":u=12
break
case"l":u=13
break
case"f":u=14
break
case"mtllib":u=15
break
case"usemtl":u=16
break
case"g":u=17
break
case"o":u=18
break
default:u=19
break}break
case 9:k=O.bB(J.a_(m,1))
j=k.length
if(j<3)H.t(P.r("Positions must have at least 3 numbers."))
if(j>4)H.t(P.r("Positions must have at most than 4 numbers."))
if(j===4){if(3>=j){s=H.e(k,3)
u=1
break}i=k[3]
h=$.Q()
h.toString
if(typeof i!=="number"){s=i.p()
u=1
break}if(!(Math.abs(i-1)<h.a))H.t(P.r("Currently, non-one w values in positions are not supported."))}i=o.b
if(0>=j){s=H.e(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.e(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.e(k,2)
u=1
break}g=[h,g,k[2]]
g=new O.dp(new V.aE(g[0],g[1],g[2]))
g.skQ(H.f([],[F.J]))
C.a.h(i,g)
u=1
break
case 10:k=O.bB(J.a_(m,1))
j=k.length
if(j<2)H.t(P.r("Textures must have at least 2 numbers."))
if(j>3)H.t(P.r("Textures must have at most than 3 numbers."))
if(j===3){if(2>=j){s=H.e(k,2)
u=1
break}i=k[2]
h=$.Q()
h.toString
if(typeof i!=="number"){s=i.p()
u=1
break}if(!(Math.abs(i-0)<h.a))H.t(P.r("Currently, non-zero z values in textures are not supported."))}i=o.c
if(0>=j){s=H.e(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.e(k,1)
u=1
break}h=[h,k[1]]
C.a.h(i,new V.am(h[0],h[1]))
u=1
break
case 11:k=O.bB(J.a_(m,1))
j=k.length
if(j!==3)H.t(P.r("Normals must have exactly 3 numbers."))
i=o.d
if(0>=j){s=H.e(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.e(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.e(k,2)
u=1
break}C.a.h(i,new V.a5(h,g,k[2]))
u=1
break
case 12:o.iB(J.a_(m,1))
u=1
break
case 13:o.iA(J.a_(m,1))
u=1
break
case 14:o.iz(J.a_(m,1))
u=1
break
case 15:u=20
return P.au(o.bt(J.a_(m,1),b,!1),$async$a6)
case 20:u=1
break
case 16:j=J.a_(m,1)
o.x=H.d(o.e.i(0,j),"$iaX")
o.by()
u=1
break
case 17:o.r=H.M(J.a_(m,1))
o.by()
u=1
break
case 18:o.r=H.M(J.a_(m,1))
o.by()
u=1
break
case 19:u=1
break
case 8:r=2
u=6
break
case 4:r=3
e=q
l=H.al(e)
j=P.r('Line: "'+H.o(a)+'": '+H.o(l))
throw H.c(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ag(s,t)
case 2:return P.af(q,t)}})
return P.ah($async$a6,t)},
by:function(){var u,t,s,r=this
if(r.z==null||r.y.a.c.length!==0){u=F.as()
r.y=u
u=E.h7(u)
r.z=u
r.Q.y.h(0,u)
for(u=r.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.sk(u[s].b,0)}r.z.sb3(r.x)
r.z.a=r.r},
c7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=", was out of range [-",f=a.split("/"),e=f.length
if(0>=e)return H.e(f,0)
u=P.bV(f[0],h,h)
t=i.b.length
if(typeof u!=="number")return u.E()
if(u<-t||u>t||u===0)throw H.c(P.r("The position index, "+u+g+t+".."+t+"] or 0."))
if(u<0)u=t+u+1;--u
if(e>1){s=f[1]
if(s!=null&&s.length>0){r=P.bV(s,h,h)
q=i.c
t=q.length
if(typeof r!=="number")return r.E()
if(r<-t||r>t||r===0)throw H.c(P.r("The texture index, "+r+g+t+".."+t+"] or 0."))
if(r<0)r=t+r+1
p=r-1
if(p<0||p>=t)return H.e(q,p)
o=q[p]}else o=h}else o=h
if(e>2){s=f[2]
if(s!=null&&s.length>0){n=P.bV(s,h,h)
e=i.d
t=e.length
if(typeof n!=="number")return n.E()
if(n<-t||n>t||n===0)throw H.c(P.r("The normal index, "+n+g+t+".."+t+"] or 0."))
if(n<0)n=t+n+1
q=n-1
if(q<0||q>=t)return H.e(e,q)
m=e[q]}else m=h}else m=h
e=i.b
if(u<0||u>=e.length)return H.e(e,u)
l=e[u]
for(e=l.b,q=e.length,k=0;k<e.length;e.length===q||(0,H.H)(e),++k){j=e[k]
if(J.Z(j.y,o)&&J.Z(j.r,m))return j}j=F.cg(h,h,h,h,h,h,h,h,0)
j.sa9(0,l.a)
if(!J.Z(j.y,o)){j.y=o
e=j.a
if(e!=null)e.a3()}j.sbd(m)
i.y.a.h(0,j)
C.a.h(l.b,j)
return j},
iB:function(a){var u,t=O.kJ(a),s=H.f([],[F.J]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.e(t,u)
C.a.h(s,this.c7(t[u]))}this.y.b.jL(s)},
iA:function(a){var u,t=O.kJ(a),s=H.f([],[F.J]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.e(t,u)
C.a.h(s,this.c7(t[u]))}this.y.c.jK(s)},
iz:function(a){var u,t=O.kJ(a),s=H.f([],[F.J]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.e(t,u)
C.a.h(s,this.c7(t[u]))}this.y.d.jJ(s)},
bt:function(a,b,c){var u=0,t=P.ai(null),s=this,r
var $async$bt=P.aj(function(d,e){if(d===1)return P.af(e,t)
while(true)switch(u){case 0:u=2
return P.au(O.e_(b+"/"+a,s.a,!1),$async$bt)
case 2:r=e
s.e.e5(0,r)
return P.ag(null,t)}})
return P.ah($async$bt,t)},
six:function(a){this.b=H.k(a,"$ib",[O.dp],"$ab")},
siZ:function(a){this.c=H.k(a,"$ib",[V.am],"$ab")},
shC:function(a){this.d=H.k(a,"$ib",[V.a5],"$ab")},
sco:function(a){this.e=H.k(a,"$iA",[P.h,O.aX],"$aA")}}
O.is.prototype={}
X.dz.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dz))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.o(this.a)}}
X.dR.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dR))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.o(this.a)}}
X.hO.prototype={
kv:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kr:function(a){this.c=a.b
this.d.a0(0,a.a)
return!1},
siy:function(a){this.d=H.k(a,"$imN",[P.p],"$amN")}}
X.dU.prototype={}
X.hW.prototype={
b7:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.l()
u=b.b
t=p.ch
if(typeof u!=="number")return u.l()
s=n.a
if(typeof s!=="number")return s.n()
n=n.b
if(typeof n!=="number")return n.n()
r=new V.am(s+m*l,n+u*t)
t=p.a.gaY()
q=new X.bv(a,V.bO(),p.x,t,r)
q.b=!0
p.z=new P.aM(o,!1)
p.x=r
return q},
d1:function(a,b){this.r=a.a
return!1},
bf:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.fi()
if(typeof u!=="number")return u.c1()
this.r=(u&~t)>>>0
return!1},
be:function(a,b){var u=this.d
if(u==null)return!1
u.L(this.b7(a,b))
return!0},
kw:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaY()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.l()
q=a.b
p=o.cy
if(typeof q!=="number")return q.l()
t=new X.cL(new V.Y(s*r,q*p),u,t)
t.b=!0
n.L(t)
return!0},
i5:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dU(c,r.a.gaY(),b)
s.b=!0
t.L(s)
r.y=new P.aM(u,!1)
r.x=V.bO()}}
X.aN.prototype={
A:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aN))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
j:function(a){var u=this.a?"Ctrl+":""
u+=H.C(this.b)?"Alt+":""
return u+(H.C(this.c)?"Shift+":"")}}
X.bv.prototype={}
X.ic.prototype={
cd:function(a,b,c){var u=this,t=new P.aM(Date.now(),!1),s=u.a.gaY(),r=new X.bv(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
d1:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.L(this.cd(a,b,!0))
return!0},
bf:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.fi()
if(typeof t!=="number")return t.c1()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.L(u.cd(a,b,!0))
return!0},
be:function(a,b){var u=this.d
if(u==null)return!1
u.L(this.cd(a,b,!1))
return!0},
kx:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaY()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.l()
r=a.b
q=p.ch
if(typeof r!=="number")return r.l()
u=new X.cL(new V.Y(t*s,r*q),u,b)
u.b=!0
o.L(u)
return!0},
geh:function(){var u=this.b
return u==null?this.b=D.X():u},
gc_:function(){var u=this.c
return u==null?this.c=D.X():u},
geP:function(){var u=this.d
return u==null?this.d=D.X():u}}
X.cL.prototype={}
X.iq.prototype={}
X.ek.prototype={}
X.j3.prototype={
b7:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.am],"$ab")
u=new P.aM(Date.now(),!1)
t=a.length>0?a[0]:V.bO()
s=q.a.gaY()
r=new X.ek(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ku:function(a){var u
H.k(a,"$ib",[V.am],"$ab")
u=this.b
if(u==null)return!1
u.L(this.b7(a,!0))
return!0},
ks:function(a){var u
H.k(a,"$ib",[V.am],"$ab")
u=this.c
if(u==null)return!1
u.L(this.b7(a,!0))
return!0},
kt:function(a){var u
H.k(a,"$ib",[V.am],"$ab")
u=this.d
if(u==null)return!1
u.L(this.b7(a,!1))
return!0}}
X.eq.prototype={
gaY:function(){var u=this.a,t=C.n.gec(u).c
t.toString
u=C.n.gec(u).d
u.toString
return V.mI(0,0,t,u)},
dC:function(a){var u=a.keyCode,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dR(u,new X.aN(t,a.altKey,a.shiftKey))},
aU:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.aN(t,a.altKey,a.shiftKey)},
cB:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.aN(t,a.altKey,a.shiftKey)},
aG:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.p()
u=t.top
if(typeof r!=="number")return r.p()
return new V.am(s-q,r-u)},
b8:function(a){return new V.Y(a.movementX,a.movementY)},
cw:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.f([],[V.am])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
q=C.j.as(r.pageX)
C.j.as(r.pageY)
p=o.left
C.j.as(r.pageX)
C.a.h(n,new V.am(q-p,C.j.as(r.pageY)-o.top))}return n},
aC:function(a){var u=a.buttons,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dz(u,new X.aN(t,a.altKey,a.shiftKey))},
cg:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.p()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.p()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
i_:function(a){this.f=!0},
hO:function(a){this.f=!1},
hU:function(a){H.d(a,"$iap")
if(H.C(this.f)&&this.cg(a))a.preventDefault()},
i3:function(a){var u
H.d(a,"$ibf")
if(!H.C(this.f))return
u=this.dC(a)
this.b.kv(u)},
i1:function(a){var u
H.d(a,"$ibf")
if(!H.C(this.f))return
u=this.dC(a)
this.b.kr(u)},
i7:function(a){var u,t,s,r,q=this
H.d(a,"$iap")
u=q.a
u.focus()
q.f=!0
q.aU(a)
if(H.C(q.x)){t=q.aC(a)
s=q.b8(a)
if(q.d.d1(t,s))a.preventDefault()
return}if(H.C(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aC(a)
r=q.aG(a)
if(q.c.d1(t,r))a.preventDefault()},
ib:function(a){var u,t,s,r=this
H.d(a,"$iap")
r.aU(a)
u=r.aC(a)
if(H.C(r.x)){t=r.b8(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aG(a)
if(r.c.bf(u,s))a.preventDefault()},
hY:function(a){var u,t,s,r=this
H.d(a,"$iap")
if(!r.cg(a)){r.aU(a)
u=r.aC(a)
if(H.C(r.x)){t=r.b8(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aG(a)
if(r.c.bf(u,s))a.preventDefault()}},
i9:function(a){var u,t,s,r=this
H.d(a,"$iap")
r.aU(a)
u=r.aC(a)
if(H.C(r.x)){t=r.b8(a)
if(r.d.be(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aG(a)
if(r.c.be(u,s))a.preventDefault()},
hW:function(a){var u,t,s,r=this
H.d(a,"$iap")
if(!r.cg(a)){r.aU(a)
u=r.aC(a)
if(H.C(r.x)){t=r.b8(a)
if(r.d.be(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aG(a)
if(r.c.be(u,s))a.preventDefault()}},
ie:function(a){var u,t,s=this
H.d(a,"$ibo")
s.aU(a)
u=new V.Y((a&&C.B).gjT(a),C.B.gjU(a)).v(0,180)
if(H.C(s.x)){if(s.d.kw(u))a.preventDefault()
return}if(H.C(s.r))return
t=s.aG(a)
if(s.c.kx(u,t))a.preventDefault()},
ih:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aC(s.y)
t=s.aG(s.y)
s.d.i5(u,t,r)}},
iv:function(a){var u,t=this
H.d(a,"$ib4")
t.a.focus()
t.f=!0
t.cB(a)
u=t.cw(a)
if(t.e.ku(u))a.preventDefault()},
ir:function(a){var u
H.d(a,"$ib4")
this.cB(a)
u=this.cw(a)
if(this.e.ks(u))a.preventDefault()},
it:function(a){var u
H.d(a,"$ib4")
this.cB(a)
u=this.cw(a)
if(this.e.kt(u))a.preventDefault()},
sha:function(a){this.z=H.k(a,"$ib",[[P.cX,P.O]],"$ab")}}
D.dE.prototype={$iac:1,$ibw:1}
D.ac.prototype={$ibw:1}
D.dS.prototype={
gB:function(){var u=this.Q
return u==null?this.Q=D.X():u},
dk:function(a){var u=this.Q
if(u!=null)u.L(a)},
dP:function(a){var u=this.ch
if(u!=null)u.L(a)},
i4:function(){return this.dP(null)},
ik:function(a){var u,t,s
H.k(a,"$in",[D.ac],"$an")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.H)(a),++t){s=a[t]
if(s==null||this.h4(s))return!1}return!0},
hI:function(a,b){var u,t,s,r,q=D.ac
H.k(b,"$in",[q],"$an")
for(u=b.length,t=this.gdO(),s=0;s<b.length;b.length===u||(0,H.H)(b),++s){r=H.d(b[s],"$iac")
r.gB().h(0,t)}q=new D.c6([q])
q.b=!0
this.dk(q)},
ip:function(a,b){var u,t,s,r,q=D.ac
H.k(b,"$in",[q],"$an")
for(u=b.length,t=this.gdO(),s=0;s<b.length;b.length===u||(0,H.H)(b),++s){r=H.d(b[s],"$iac")
r.gB().a0(0,t)}q=new D.c7([q])
q.b=!0
this.dk(q)},
h4:function(a){var u=C.a.aI(this.e,a)
return u},
sh8:function(a){this.e=H.k(a,"$ib",[D.dE],"$ab")},
siw:function(a){this.f=H.k(a,"$ib",[D.e5],"$ab")},
siT:function(a){this.r=H.k(a,"$ib",[D.ea],"$ab")},
sjc:function(a){this.x=H.k(a,"$ib",[D.ef],"$ab")},
sjd:function(a){this.y=H.k(a,"$ib",[D.eg],"$ab")},
sje:function(a){this.z=H.k(a,"$ib",[D.eh],"$ab")},
$an:function(){return[D.ac]},
$aaa:function(){return[D.ac]}}
D.e5.prototype={$iac:1,$ibw:1}
D.ea.prototype={$iac:1,$ibw:1}
D.ef.prototype={$iac:1,$ibw:1}
D.eg.prototype={$iac:1,$ibw:1}
D.eh.prototype={$iac:1,$ibw:1}
V.a2.prototype={
n:function(a,b){var u=this.a+b.a,t=this.b+b.b,s=this.c+b.c
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.a0.prototype={
n:function(a,b){var u=this,t=C.j.n(u.a,b.gl1()),s=C.j.n(u.b,b.gkS()),r=C.j.n(u.c,b.gkU()),q=C.j.n(u.d,b.gkT(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.a0(t,s,r,q)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
j:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.h8.prototype={}
V.dY.prototype={
aa:function(a,b){var u=this,t=H.f([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.F])
return t},
A:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dY))return!1
u=b.a
t=r.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){var u,t,s,r,q=this,p=[P.F],o=V.cp(H.f([q.a,q.d,q.r],p),3,0),n=V.cp(H.f([q.b,q.e,q.x],p),3,0),m=V.cp(H.f([q.c,q.f,q.y],p),3,0)
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
V.aD.prototype={
aa:function(a,b){var u=this,t=H.f([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.F])
return t},
eN:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.l()
if(typeof b1!=="number")return H.i(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.i(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.i(r)
q=a9.c
if(typeof q!=="number")return q.l()
p=b0*r-q*t
o=a9.x
if(typeof o!=="number")return H.i(o)
n=a9.d
if(typeof n!=="number")return n.l()
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a9.y
h=a9.cy
if(typeof i!=="number")return i.l()
g=a9.z
f=a9.cx
if(typeof g!=="number")return g.l()
e=i*h-g*f
d=a9.db
c=a9.Q
if(typeof c!=="number")return c.l()
b=i*d-c*f
a=a9.dx
a0=a9.ch
if(typeof a0!=="number")return a0.l()
a1=i*a-a0*f
a2=g*d-c*h
a3=g*a-a0*h
a4=c*a-a0*d
a5=s*a4-p*a3+m*a2+l*a1-k*b+j*e
if(Math.abs(a5-0)<$.Q().a)return V.dZ()
a6=1/a5
a7=-t
a8=-f
return V.bi((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
l:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.l()
if(typeof b1!=="number")return H.i(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.i(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.i(r)
q=a9.d
p=b3.cx
if(typeof q!=="number")return q.l()
o=b3.b
if(typeof o!=="number")return H.i(o)
n=b3.f
if(typeof n!=="number")return H.i(n)
m=b3.z
if(typeof m!=="number")return H.i(m)
l=b3.cy
k=b3.c
if(typeof k!=="number")return H.i(k)
j=b3.r
if(typeof j!=="number")return H.i(j)
i=b3.Q
if(typeof i!=="number")return H.i(i)
h=b3.db
g=b3.d
if(typeof g!=="number")return H.i(g)
f=b3.x
if(typeof f!=="number")return H.i(f)
e=b3.ch
if(typeof e!=="number")return H.i(e)
d=b3.dx
c=a9.e
if(typeof c!=="number")return c.l()
b=a9.f
if(typeof b!=="number")return b.l()
a=a9.r
if(typeof a!=="number")return a.l()
a0=a9.x
if(typeof a0!=="number")return a0.l()
a1=a9.y
if(typeof a1!=="number")return a1.l()
a2=a9.z
if(typeof a2!=="number")return a2.l()
a3=a9.Q
if(typeof a3!=="number")return a3.l()
a4=a9.ch
if(typeof a4!=="number")return a4.l()
a5=a9.cx
a6=a9.cy
a7=a9.db
a8=a9.dx
return V.bi(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
bZ:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.i(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.i(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.i(r)
q=k.e
if(typeof q!=="number")return q.l()
p=k.f
if(typeof p!=="number")return p.l()
o=k.r
if(typeof o!=="number")return o.l()
n=k.y
if(typeof n!=="number")return n.l()
m=k.z
if(typeof m!=="number")return m.l()
l=k.Q
if(typeof l!=="number")return l.l()
return new V.a5(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
b4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a,f=a.a
if(typeof g!=="number")return g.l()
if(typeof f!=="number")return H.i(f)
u=h.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.i(t)
s=h.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.i(r)
q=h.d
if(typeof q!=="number")return H.i(q)
p=h.e
if(typeof p!=="number")return p.l()
o=h.f
if(typeof o!=="number")return o.l()
n=h.r
if(typeof n!=="number")return n.l()
m=h.x
if(typeof m!=="number")return H.i(m)
l=h.y
if(typeof l!=="number")return l.l()
k=h.z
if(typeof k!=="number")return k.l()
j=h.Q
if(typeof j!=="number")return j.l()
i=h.ch
if(typeof i!=="number")return H.i(i)
return new V.aE(g*f+u*t+s*r+q,p*f+o*t+n*r+m,l*f+k*t+j*r+i)},
A:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aD))return!1
u=b.a
t=r.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=r.z
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=r.Q
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.ch
t=r.ch
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.cx-r.cx)<s))return!1
if(!(Math.abs(b.cy-r.cy)<s))return!1
if(!(Math.abs(b.db-r.db)<s))return!1
if(!(Math.abs(b.dx-r.dx)<s))return!1
return!0},
j:function(a){return this.R()},
I:function(a){var u,t,s,r,q,p=this,o=[P.F],n=V.cp(H.f([p.a,p.e,p.y,p.cx],o),3,0),m=V.cp(H.f([p.b,p.f,p.z,p.cy],o),3,0),l=V.cp(H.f([p.c,p.r,p.Q,p.db],o),3,0),k=V.cp(H.f([p.d,p.x,p.ch,p.dx],o),3,0)
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
V.am.prototype={
n:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.i(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
return new V.am(s+r,u+t)},
p:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.i(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
return new V.am(s-r,u-t)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=this.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.aE.prototype={
n:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.i(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.i(r)
return new V.aE(q+p,u+t,s+r)},
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.i(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.i(r)
return new V.aE(q-p,u-t,s-r)},
v:function(a,b){var u,t,s
if(Math.abs(b-0)<$.Q().a)return V.lP()
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
s=this.c
if(typeof s!=="number")return s.v()
return new V.aE(u/b,t/b,s/b)},
A:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aE))return!1
u=b.a
t=r.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.e8.prototype={
gae:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e8))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
j:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.cc.prototype={
A:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cc))return!1
u=b.a
t=r.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
if(!(Math.abs(b.e-r.e)<s))return!1
if(!(Math.abs(b.f-r.f)<s))return!1
return!0},
j:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+", "+V.V(u.e,3,0)+", "+V.V(u.f,3,0)+"]"}}
V.Y.prototype={
cX:function(a){return Math.sqrt(this.M(this))},
M:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.i(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.i(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a,s=b.gkX(b)
if(typeof t!=="number")return t.n()
s=C.j.n(t,s)
t=this.b
u=b.gkY(b)
if(typeof t!=="number")return t.n()
return new V.Y(s,C.j.n(t,u))},
l:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.l()
u=this.b
if(typeof u!=="number")return u.l()
return new V.Y(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.Q().a){u=$.mW
return u==null?$.mW=new V.Y(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.Y(u/b,t/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=this.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.a5.prototype={
cX:function(a){return Math.sqrt(this.M(this))},
M:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.i(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.i(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.i(r)
return q*p+u*t+s*r},
aJ:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.i(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.i(t)
s=a.a
if(typeof s!=="number")return H.i(s)
r=this.a
if(typeof r!=="number")return r.l()
return new V.a5(q*p-u*t,u*s-r*p,r*t-q*s)},
n:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.i(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.i(r)
return new V.a5(q+p,u+t,s+r)},
N:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.N()
u=this.b
if(typeof u!=="number")return u.N()
t=this.c
if(typeof t!=="number")return t.N()
return new V.a5(-s,-u,-t)},
v:function(a,b){var u,t,s
if(Math.abs(b-0)<$.Q().a)return V.a8()
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
s=this.c
if(typeof s!=="number")return s.v()
return new V.a5(u/b,t/b,s/b)},
eO:function(){var u=this.a,t=$.Q()
t.toString
if(typeof u!=="number")return H.i(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.i(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.i(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
A:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=r.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
U.fR.prototype={
c8:function(a){var u=V.pU(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.X():u},
T:function(a){var u=this.y
if(u!=null)u.L(a)},
sd6:function(a,b){},
scZ:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.Q().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.c8(u)}s=new D.E("maximumLocation",s,t.b,[P.F])
s.b=!0
t.T(s)}},
sd0:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.Q().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.c8(u)}s=new D.E("minimumLocation",s,t.c,[P.F])
s.b=!0
t.T(s)}},
sa9:function(a,b){var u,t=this
b=t.c8(b)
u=t.d
if(!(Math.abs(u-b)<$.Q().a)){t.d=b
u=new D.E("location",u,b,[P.F])
u.b=!0
t.T(u)}},
sd_:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.Q().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.E("maximumVelocity",r,a,[P.F])
r.b=!0
s.T(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.Q().a)){u.f=a
t=new D.E("velocity",t,a,[P.F])
t.b=!0
u.T(t)}},
scM:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.Q().a)){this.x=a
u=new D.E("dampening",u,a,[P.F])
u.b=!0
this.T(u)}},
al:function(a,b){var u,t,s,r=this,q=r.f,p=$.Q().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa9(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.Q().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.dC.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.X():u},
b5:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dC))return!1
return J.Z(this.a,b.a)},
j:function(a){return"Constant: "+this.a.I("          ")}}
U.cE.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.X():u},
T:function(a){var u
H.d(a,"$iB")
u=this.e
if(u!=null)u.L(a)},
ab:function(){return this.T(null)},
hG:function(a,b){var u,t,s,r,q,p,o,n=U.aq
H.k(b,"$in",[n],"$an")
for(u=b.length,t=this.gaS(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.gB()
o.toString
H.j(t,s)
if(o.a==null)o.sam(H.f([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c6([n])
n.b=!0
this.T(n)},
im:function(a,b){var u,t,s,r,q=U.aq
H.k(b,"$in",[q],"$an")
for(u=b.length,t=this.gaS(),s=0;s<b.length;b.length===u||(0,H.H)(b),++s){r=b[s]
if(r!=null)r.gB().a0(0,t)}q=new D.c7([q])
q.b=!0
this.T(q)},
b5:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.E()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.av(r,r.length,[H.u(r,0)]),u=null;r.G();){q=r.d
if(q!=null){t=q.b5(0,b,c)
if(t!=null)u=u==null?t:t.l(0,u)}}s.f=u==null?V.dZ():u
r=s.e
if(r!=null)r.b2(0)}return s.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cE))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.Z(s,r[t]))return!1}return!0},
j:function(a){return"Group"},
$an:function(){return[U.aq]},
$aaa:function(){return[U.aq]},
$iaq:1}
U.aq.prototype={}
U.er.prototype={
gB:function(){var u=this.cy
return u==null?this.cy=D.X():u},
T:function(a){var u
H.d(a,"$iB")
u=this.cy
if(u!=null)u.L(a)},
ab:function(){return this.T(null)},
b9:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.geh().h(0,u.gci())
u.a.c.geP().h(0,u.gck())
u.a.c.gc_().h(0,u.gcm())
return!0},
cj:function(a){var u=this
H.d(a,"$iB")
if(!J.Z(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
cl:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.d(a,"$iB"),"$ibv")
if(!H.C(n.y))return
if(H.C(n.x)){u=a.d.p(0,a.y)
u=new V.Y(u.a,u.b)
u=u.M(u)
t=n.r
if(typeof t!=="number")return H.i(t)
if(u<t)return
n.x=!1}if(H.C(n.d)){u=a.c
t=a.d.p(0,a.y)
u=new V.Y(t.a,t.b).l(0,2).v(0,u.gae())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.l()
s=n.e
if(typeof s!=="number")return H.i(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=new V.Y(s.a,s.b).l(0,2).v(0,u.gae())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.i(p)
o=n.z
if(typeof o!=="number")return H.i(o)
s.sa9(0,-q*p+o)
n.b.sX(0)
t=t.p(0,a.z)
n.Q=new V.Y(t.a,t.b).l(0,2).v(0,u.gae())}n.ab()},
cn:function(a){var u,t,s,r=this
H.d(a,"$iB")
if(!H.C(r.y))return
r.y=!1
if(H.C(r.x))return
u=r.Q
if(u.M(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.l()
s=r.e
if(typeof s!=="number")return H.i(s)
u.sX(t*10*s)
r.ab()}},
b5:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.E()
if(q<p){r.ch=p
u=b.y
r.b.al(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.bi(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iaq:1}
U.es.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.X():u},
T:function(a){var u
H.d(a,"$iB")
u=this.fx
if(u!=null)u.L(a)},
ab:function(){return this.T(null)},
b9:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.geh().h(0,s.gci())
s.a.c.geP().h(0,s.gck())
s.a.c.gc_().h(0,s.gcm())
u=s.a.d
t=u.f
u=t==null?u.f=D.X():t
u.h(0,s.ghu())
u=s.a.d
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.ghw())
u=s.a.e
t=u.b
u=t==null?u.b=D.X():t
u.h(0,s.gj4())
u=s.a.e
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.gj2())
u=s.a.e
t=u.c
u=t==null?u.c=D.X():t
u.h(0,s.gj0())
return!0},
av:function(a){var u=a.a,t=a.b
if(H.C(this.f)){if(typeof u!=="number")return u.N()
u=-u}if(H.C(this.r)){if(typeof t!=="number")return t.N()
t=-t}return new V.Y(u,t)},
cj:function(a){var u=this
a=H.m(H.d(a,"$iB"),"$ibv")
if(!J.Z(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
cl:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.d(a,"$iB"),"$ibv")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.p(0,a.y)
u=new V.Y(u.a,u.b)
u=u.M(u)
t=n.Q
if(typeof t!=="number")return H.i(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.av(new V.Y(t.a,t.b).l(0,2).v(0,u.gae()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.i(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.i(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.av(new V.Y(s.a,s.b).l(0,2).v(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.i(p)
o=n.cy
if(typeof o!=="number")return H.i(o)
s.sa9(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.i(q)
s=n.db
if(typeof s!=="number")return H.i(s)
o.sa9(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.p(0,a.z)
n.dx=n.av(new V.Y(t.a,t.b).l(0,2).v(0,u.gae()))}n.ab()},
cn:function(a){var u,t,s,r=this
H.d(a,"$iB")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.M(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.i(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.i(u)
s.sX(-t*10*u)
r.ab()}},
hv:function(a){var u=this
if(H.m(H.d(a,"$iB"),"$idU").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
hx:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.d(a,"$iB"),"$ibv")
if(!J.Z(n.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=n.av(new V.Y(s.a,s.b).l(0,2).v(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.i(p)
o=n.cy
if(typeof o!=="number")return H.i(o)
s.sa9(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.i(q)
s=n.db
if(typeof s!=="number")return H.i(s)
o.sa9(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.p(0,a.z)
n.dx=n.av(new V.Y(t.a,t.b).l(0,2).v(0,u.gae()))
n.ab()},
j5:function(a){var u=this
H.d(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
j3:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.d(a,"$iB"),"$iek")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.p(0,a.y)
u=new V.Y(u.a,u.b)
u=u.M(u)
t=n.Q
if(typeof t!=="number")return H.i(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.av(new V.Y(t.a,t.b).l(0,2).v(0,u.gae()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.i(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.i(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.av(new V.Y(s.a,s.b).l(0,2).v(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.i(p)
o=n.cy
if(typeof o!=="number")return H.i(o)
s.sa9(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.i(q)
s=n.db
if(typeof s!=="number")return H.i(s)
o.sa9(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.p(0,a.z)
n.dx=n.av(new V.Y(t.a,t.b).l(0,2).v(0,u.gae()))}n.ab()},
j1:function(a){var u,t,s,r=this
H.d(a,"$iB")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.M(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.i(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.i(u)
s.sX(-t*10*u)
r.ab()}},
b5:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.E()
if(q<p){r.dy=p
u=b.y
r.c.al(0,u)
r.b.al(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bi(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.l(0,V.bi(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaq:1}
U.et.prototype={
gB:function(){var u=this.r
return u==null?this.r=D.X():u},
T:function(a){var u=this.r
if(u!=null)u.L(a)},
b9:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.X():t
t=r.ghz()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.X():s).h(0,t)
return!0},
hA:function(a){var u,t,s,r,q=this
H.d(a,"$iB")
if(!J.Z(q.b,q.a.b.c))return
H.m(a,"$icL")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.l()
r=u+t*s
if(u!==r){q.d=r
u=new D.E("zoom",u,r,[P.F])
u.b=!0
q.T(u)}},
b5:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.my(u,u,u)}return t.f},
$iaq:1}
M.dI.prototype={
aA:function(a){var u
H.d(a,"$iB")
u=this.x
if(u!=null)u.L(a)},
fw:function(){return this.aA(null)},
hQ:function(a,b){var u,t,s,r,q,p,o,n=E.a4
H.k(b,"$in",[n],"$an")
for(u=b.length,t=this.gau(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bK()
o.sam(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sam(H.f([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c6([n])
n.b=!0
this.aA(n)},
hS:function(a,b){var u,t,s,r,q,p=E.a4
H.k(b,"$in",[p],"$an")
for(u=b.length,t=this.gau(),s=0;s<b.length;b.length===u||(0,H.H)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.bK()
q.sam(null)
q.saT(null)
q.c=null
q.d=0
r.z=q}q.a0(0,t)}}p=new D.c7([p])
p.b=!0
this.aA(p)},
sb3:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gB().a0(0,t.gau())
u=t.c
t.c=a
if(a!=null)a.gB().h(0,t.gau())
s=new D.E("technique",u,t.c,[O.bP])
s.b=!0
t.aA(s)}},
gB:function(){var u=this.x
return u==null?this.x=D.X():u},
aM:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.f2(a1.c)
u=a1.b
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
if(typeof s!=="number")return H.i(s)
o=C.j.as(p*s)
p=q.b
if(typeof r!=="number")return H.i(r)
n=C.j.as(p*r)
p=C.j.as(q.c*s)
a2.c=p
q=C.j.as(q.d*r)
a2.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=a1.a
t=a2.c
q=a2.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.bi(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.f1(i)
t=$.mD
if(t==null){t=V.lP()
q=$.mZ
if(q==null)q=$.mZ=new V.a5(0,1,0)
p=V.n0()
h=p.v(0,Math.sqrt(p.M(p)))
q=q.aJ(h)
g=q.v(0,Math.sqrt(q.M(q)))
f=h.aJ(g)
e=new V.a5(t.a,t.b,t.c)
d=g.N(0).M(e)
c=f.N(0).M(e)
b=h.N(0).M(e)
t=V.bi(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.mD=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.l(0,a)}a2.db.f1(a)
for(u=a1.d.a,u=new J.av(u,u.length,[H.u(u,0)]);u.G();)u.d.al(0,a2)
for(u=a1.d.a,u=new J.av(u,u.length,[H.u(u,0)]);u.G();)u.d.aM(a2)
a1.a.toString
a2.cy.d2()
a2.db.d2()
a1.b.toString
a2.f_()},
sh1:function(a,b){this.d=H.k(b,"$iaa",[E.a4],"$aaa")},
$iq0:1}
A.dv.prototype={}
A.fE.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jW:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
eg:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dM.prototype={}
A.dX.prototype={
fp:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.az("")
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
d1.jm(u)
d1.jt(u)
d1.jn(u)
d1.jB(u)
d1.jC(u)
d1.jv(u)
d1.jG(u)
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
u=new P.az("")
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
q.jq(u)
q.jl(u)
q.jo(u)
q.jr(u)
q.jz(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jx(u)
q.jy(u)}q.ju(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.d){m=u.a=m+"uniform float alpha;\n"
if(l!==C.i){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.d:m=u.a=m+"   return 1.0;\n"
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
k=H.f([],[P.h])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.F(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.jp(u)
q.jw(u)
q.jA(u)
q.jD(u)
q.jE(u)
q.jF(u)
q.js(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
p=p?u.a=m+"   vec3 norm = normal();\n":m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.f([],[P.h])
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
i="vec4("+C.a.F(j," + ")+", alpha);"
q=u.a
q=u.a=(n?u.a=q+("   gl_FragColor = colorMat*"+i+"\n"):u.a=q+("   gl_FragColor = "+i+"\n"))+"}\n"
a6.eM(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.i(0,"posAttr")
a6.cx=a6.x.i(0,"normAttr")
a6.ch=a6.x.i(0,"binmAttr")
a6.cy=a6.x.i(0,"txt2DAttr")
a6.db=a6.x.i(0,"txtCubeAttr")
a6.dx=a6.x.i(0,"bendAttr")
if(d1.fr)a6.id=H.m(a6.y.q(0,"invViewMat"),"$iaA")
if(t)a6.dy=H.m(a6.y.q(0,"objMat"),"$iaA")
if(r)a6.fr=H.m(a6.y.q(0,"viewObjMat"),"$iaA")
a6.fy=H.m(a6.y.q(0,"projViewObjMat"),"$iaA")
if(d1.x2)a6.k1=H.m(a6.y.q(0,"txt2DMat"),"$id3")
if(d1.y1)a6.k2=H.m(a6.y.q(0,"txtCubeMat"),"$iaA")
if(d1.y2)a6.k3=H.m(a6.y.q(0,"colorMat"),"$iaA")
a6.sfU(H.f([],[A.aA]))
t=d1.ay
if(t>0){a6.k4=H.d(a6.y.q(0,"bendMatCount"),"$iR")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.i(0,q)
if(g==null)H.t(P.r(a7+q+a8));(s&&C.a).h(s,H.m(g,"$iaA"))}}t=d1.a
if(t!==C.d){a6.r2=H.m(a6.y.q(0,"emissionClr"),"$iP")
switch(t){case C.d:break
case C.i:break
case C.f:a6.rx=H.m(a6.y.q(0,a9),"$iaF")
a6.x1=H.m(a6.y.q(0,b0),"$iR")
break
case C.h:a6.ry=H.m(a6.y.q(0,a9),"$iaG")
a6.x1=H.m(a6.y.q(0,b0),"$iR")
break}}t=d1.b
if(t!==C.d){a6.x2=H.m(a6.y.q(0,"ambientClr"),"$iP")
switch(t){case C.d:break
case C.i:break
case C.f:a6.y1=H.m(a6.y.q(0,b1),"$iaF")
a6.ay=H.m(a6.y.q(0,b2),"$iR")
break
case C.h:a6.y2=H.m(a6.y.q(0,b1),"$iaG")
a6.ay=H.m(a6.y.q(0,b2),"$iR")
break}}t=d1.c
if(t!==C.d){a6.ao=H.m(a6.y.q(0,"diffuseClr"),"$iP")
switch(t){case C.d:break
case C.i:break
case C.f:a6.bE=H.m(a6.y.q(0,b3),"$iaF")
a6.bF=H.m(a6.y.q(0,b4),"$iR")
break
case C.h:a6.ei=H.m(a6.y.q(0,b3),"$iaG")
a6.bF=H.m(a6.y.q(0,b4),"$iR")
break}}t=d1.d
if(t!==C.d){a6.bG=H.m(a6.y.q(0,"invDiffuseClr"),"$iP")
switch(t){case C.d:break
case C.i:break
case C.f:a6.ej=H.m(a6.y.q(0,b5),"$iaF")
a6.bH=H.m(a6.y.q(0,b6),"$iR")
break
case C.h:a6.ek=H.m(a6.y.q(0,b5),"$iaG")
a6.bH=H.m(a6.y.q(0,b6),"$iR")
break}}t=d1.e
if(t!==C.d){a6.bK=H.m(a6.y.q(0,"shininess"),"$ia3")
a6.bI=H.m(a6.y.q(0,"specularClr"),"$iP")
switch(t){case C.d:break
case C.i:break
case C.f:a6.el=H.m(a6.y.q(0,b7),"$iaF")
a6.bJ=H.m(a6.y.q(0,b8),"$iR")
break
case C.h:a6.em=H.m(a6.y.q(0,b7),"$iaG")
a6.bJ=H.m(a6.y.q(0,b8),"$iR")
break}}switch(d1.f){case C.d:break
case C.i:break
case C.f:a6.en=H.m(a6.y.q(0,"bumpTxt"),"$iaF")
a6.bL=H.m(a6.y.q(0,b9),"$iR")
break
case C.h:a6.eo=H.m(a6.y.q(0,"bumpTxt"),"$iaG")
a6.bL=H.m(a6.y.q(0,b9),"$iR")
break}if(d1.dy){a6.ep=H.m(a6.y.q(0,"envSampler"),"$iaG")
a6.eq=H.m(a6.y.q(0,"nullEnvTxt"),"$iR")
t=d1.r
if(t!==C.d){a6.bM=H.m(a6.y.q(0,"reflectClr"),"$iP")
switch(t){case C.d:break
case C.i:break
case C.f:a6.er=H.m(a6.y.q(0,c0),"$iaF")
a6.bN=H.m(a6.y.q(0,c1),"$iR")
break
case C.h:a6.es=H.m(a6.y.q(0,c0),"$iaG")
a6.bN=H.m(a6.y.q(0,c1),"$iR")
break}}t=d1.x
if(t!==C.d){a6.bO=H.m(a6.y.q(0,"refraction"),"$ia3")
a6.bP=H.m(a6.y.q(0,"refractClr"),"$iP")
switch(t){case C.d:break
case C.i:break
case C.f:a6.eu=H.m(a6.y.q(0,c2),"$iaF")
a6.bQ=H.m(a6.y.q(0,c3),"$iR")
break
case C.h:a6.ev=H.m(a6.y.q(0,c2),"$iaG")
a6.bQ=H.m(a6.y.q(0,c3),"$iR")
break}}}t=d1.y
if(t!==C.d){a6.bR=H.m(a6.y.q(0,"alpha"),"$ia3")
switch(t){case C.d:break
case C.i:break
case C.f:a6.ew=H.m(a6.y.q(0,c4),"$iaF")
a6.bS=H.m(a6.y.q(0,c5),"$iR")
break
case C.h:a6.ex=H.m(a6.y.q(0,c4),"$iaG")
a6.bS=H.m(a6.y.q(0,c5),"$iR")
break}}a6.sfz(H.f([],[A.d2]))
a6.sfA(H.f([],[A.d4]))
a6.sfB(H.f([],[A.d5]))
a6.sfC(H.f([],[A.d6]))
a6.sfD(H.f([],[A.d7]))
a6.sfE(H.f([],[A.d8]))
if(d1.k2){t=d1.z
if(t>0){a6.ey=H.d(a6.y.q(0,"dirLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.i(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.m(g,"$iP")
s=a6.y
r="dirLights["+h+"].color"
f=s.i(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.m(f,"$iP")
s=a6.cN;(s&&C.a).h(s,new A.d2(g,f))}}t=d1.Q
if(t>0){a6.ez=H.d(a6.y.q(0,"pntLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.i(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.m(g,"$iP")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.i(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.m(f,"$iP")
s=a6.y
r="pntLights["+h+"].color"
e=s.i(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.m(e,"$iP")
s=a6.y
r="pntLights["+h+"].att0"
d=s.i(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.m(d,"$ia3")
s=a6.y
r="pntLights["+h+"].att1"
c=s.i(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.m(c,"$ia3")
s=a6.y
r="pntLights["+h+"].att2"
b=s.i(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.m(b,"$ia3")
s=a6.cO;(s&&C.a).h(s,new A.d4(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.eA=H.d(a6.y.q(0,"spotLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.i(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.m(g,"$iP")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.i(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.m(f,"$iP")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.i(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.m(e,"$iP")
s=a6.y
r="spotLights["+h+"].color"
d=s.i(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.m(d,"$iP")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.i(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.m(c,"$ia3")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.i(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.m(b,"$ia3")
s=a6.y
r="spotLights["+h+"].att0"
a=s.i(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.m(a,"$ia3")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.i(0,r)
if(a0==null)H.t(P.r(a7+r+a8))
H.m(a0,"$ia3")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.i(0,r)
if(a1==null)H.t(P.r(a7+r+a8))
H.m(a1,"$ia3")
s=a6.cP;(s&&C.a).h(s,new A.d5(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.eB=H.d(a6.y.q(0,"txtDirLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.i(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.m(g,"$iP")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.i(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.m(f,"$iP")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.i(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.m(e,"$iP")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.i(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.m(d,"$iP")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.i(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.m(c,"$iP")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.i(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.m(b,"$iR")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.i(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.m(a,"$iaF")
s=a6.cQ;(s&&C.a).h(s,new A.d6(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.eC=H.d(a6.y.q(0,"txtPntLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.i(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.m(g,"$iP")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.i(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.m(f,"$iP")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.i(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.m(e,"$id3")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.i(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.m(d,"$iP")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.i(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.m(c,"$iR")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.i(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.m(b,"$ia3")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.i(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.m(a,"$ia3")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.i(0,r)
if(a0==null)H.t(P.r(a7+r+a8))
H.m(a0,"$ia3")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.i(0,r)
if(a1==null)H.t(P.r(a7+r+a8))
H.m(a1,"$iaG")
s=a6.cR;(s&&C.a).h(s,new A.d7(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.eD=H.d(a6.y.q(0,"txtSpotLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.i(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.m(g,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.i(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.m(f,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.i(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.m(e,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.i(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.m(d,"$iP")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.i(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.m(c,"$iP")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.i(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.m(b,"$iR")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.i(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.m(a,"$iP")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.i(0,r)
if(a0==null)H.t(P.r(a7+r+a8))
H.m(a0,"$ia3")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.i(0,r)
if(a1==null)H.t(P.r(a7+r+a8))
H.m(a1,"$ia3")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.i(0,r)
if(a2==null)H.t(P.r(a7+r+a8))
H.m(a2,"$ia3")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.i(0,r)
if(a3==null)H.t(P.r(a7+r+a8))
H.m(a3,"$ia3")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.i(0,r)
if(a4==null)H.t(P.r(a7+r+a8))
H.m(a4,"$ia3")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.i(0,r)
if(a5==null)H.t(P.r(a7+r+a8))
H.m(a5,"$iaF")
s=a6.cS;(s&&C.a).h(s,new A.d8(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
an:function(a,b,c){if(c==null||!c.d)C.c.a4(b.a,b.d,1)
else{a.fj(c)
C.c.a4(b.a,b.d,0)}},
ah:function(a,b,c){C.c.a4(b.a,b.d,1)},
sfU:function(a){this.r1=H.k(a,"$ib",[A.aA],"$ab")},
sfz:function(a){this.cN=H.k(a,"$ib",[A.d2],"$ab")},
sfA:function(a){this.cO=H.k(a,"$ib",[A.d4],"$ab")},
sfB:function(a){this.cP=H.k(a,"$ib",[A.d5],"$ab")},
sfC:function(a){this.cQ=H.k(a,"$ib",[A.d6],"$ab")},
sfD:function(a){this.cR=H.k(a,"$ib",[A.d7],"$ab")},
sfE:function(a){this.cS=H.k(a,"$ib",[A.d8],"$ab")}}
A.i3.prototype={
jm:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.ay+"];\n"
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
jt:function(a){var u
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
jn:function(a){var u
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
jB:function(a){var u,t
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
jC:function(a){var u,t
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
jv:function(a){var u
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
jG:function(a){var u
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
if(0>=c.length)return H.e(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.at(c,1))+"Txt;\n")
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jq:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
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
case C.f:s=u+t
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
jl:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
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
case C.f:s=u+t
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
jo:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
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
case C.f:s=u+t
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
jr:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
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
case C.f:s=u+t
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
jz:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
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
case C.f:s=u+t
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
ju:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.d:break
case C.i:break
case C.f:u+="uniform sampler2D bumpTxt;\n"
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
jx:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
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
case C.f:s=u+t
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
jy:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
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
case C.f:s=u+t
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
jp:function(a){var u,t=this.z
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
jw:function(a){var u,t=this.Q
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
jA:function(a){var u,t=this.ch
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
jD:function(a){var u,t,s=this.cx
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
jE:function(a){var u,t,s=this.cy
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
jF:function(a){var u,t,s=this.db
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
js:function(a){var u
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
j:function(a){return this.ao}}
A.d2.prototype={}
A.d6.prototype={}
A.d4.prototype={}
A.d7.prototype={}
A.d5.prototype={}
A.d8.prototype={}
A.cT.prototype={
dg:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
eM:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dD(b,35633)
r.f=r.dD(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.C(H.np(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.r("Failed to link shader: "+H.o(s)))}r.iM()
r.iO()},
aH:function(a){a.a.useProgram(this.r)
this.x.jW()},
dD:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.C(H.np(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.r("Error compiling shader '"+H.o(s)+"': "+H.o(u)))}return s},
iM:function(){var u,t,s,r=this,q=H.f([],[A.dv]),p=r.a,o=H.ao(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.i(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dv(p,t.name,s))}r.x=new A.fE(q)},
iO:function(){var u,t,s,r=this,q=H.f([],[A.el]),p=r.a,o=H.ao(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.i(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.jS(t.type,t.size,t.name,s))}r.y=new A.jf(q)},
aR:function(a,b,c){var u=this.a
if(a===1)return new A.R(u,b,c)
else return A.lU(u,this.r,b,a,c)},
h5:function(a,b,c){var u=this.a
if(a===1)return new A.aF(u,b,c)
else return A.lU(u,this.r,b,a,c)},
h6:function(a,b,c){var u=this.a
if(a===1)return new A.aG(u,b,c)
else return A.lU(u,this.r,b,a,c)},
bz:function(a,b){return new P.eG(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.o(b)+"."))},
jS:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aR(b,c,d)
case 5121:return u.aR(b,c,d)
case 5122:return u.aR(b,c,d)
case 5123:return u.aR(b,c,d)
case 5124:return u.aR(b,c,d)
case 5125:return u.aR(b,c,d)
case 5126:return new A.a3(u.a,c,d)
case 35664:return new A.jb(u.a,c,d)
case 35665:return new A.P(u.a,c,d)
case 35666:return new A.d1(u.a,c,d)
case 35667:return new A.jc(u.a,c,d)
case 35668:return new A.jd(u.a,c,d)
case 35669:return new A.je(u.a,c,d)
case 35674:return new A.jg(u.a,c,d)
case 35675:return new A.d3(u.a,c,d)
case 35676:return new A.aA(u.a,c,d)
case 35678:return u.h5(b,c,d)
case 35680:return u.h6(b,c,d)
case 35670:throw H.c(u.bz("BOOL",c))
case 35671:throw H.c(u.bz("BOOL_VEC2",c))
case 35672:throw H.c(u.bz("BOOL_VEC3",c))
case 35673:throw H.c(u.bz("BOOL_VEC4",c))
default:throw H.c(P.r("Unknown uniform variable type "+H.o(a)+" for "+H.o(c)+"."))}}}
A.c1.prototype={
j:function(a){return this.b}}
A.el.prototype={}
A.jf.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.i(0,b)
if(u==null)throw H.c(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
j:function(a){return this.R()},
R:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.H)(u),++r)s+=u[r].j(0)+"\n"
return s}}
A.R.prototype={
j:function(a){return"Uniform1i: "+H.o(this.c)}}
A.jc.prototype={
j:function(a){return"Uniform2i: "+H.o(this.c)}}
A.jd.prototype={
j:function(a){return"Uniform3i: "+H.o(this.c)}}
A.je.prototype={
j:function(a){return"Uniform4i: "+H.o(this.c)}}
A.ja.prototype={
j:function(a){return"Uniform1iv: "+H.o(this.c)},
sjf:function(a){H.k(a,"$ib",[P.p],"$ab")}}
A.a3.prototype={
j:function(a){return"Uniform1f: "+H.o(this.c)}}
A.jb.prototype={
j:function(a){return"Uniform2f: "+H.o(this.c)}}
A.P.prototype={
j:function(a){return"Uniform3f: "+H.o(this.c)}}
A.d1.prototype={
bm:function(a){return C.c.kP(this.a,this.d,a.a,a.b,a.c,a.d)},
j:function(a){return"Uniform4f: "+H.o(this.c)}}
A.jg.prototype={
j:function(a){return"Uniform1Mat2 "+H.o(this.c)}}
A.d3.prototype={
ad:function(a){var u=new Float32Array(H.cj(H.k(a,"$ib",[P.F],"$ab")))
C.c.fb(this.a,this.d,!1,u)},
j:function(a){return"UniformMat3: "+H.o(this.c)}}
A.aA.prototype={
ad:function(a){var u=new Float32Array(H.cj(H.k(a,"$ib",[P.F],"$ab")))
C.c.fc(this.a,this.d,!1,u)},
j:function(a){return"UniformMat4: "+H.o(this.c)}}
A.aF.prototype={
fj:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
j:function(a){return"UniformSampler2D: "+H.o(this.c)}}
A.aG.prototype={
j:function(a){return"UniformSamplerCube: "+H.o(this.c)}}
F.N.prototype={
fR:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.a8()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.eO())return
return s.v(0,Math.sqrt(s.M(s)))},
fZ:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.p(0,q)
r=new V.a5(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.M(r)))
r=t.p(0,q)
r=new V.a5(r.a,r.b,r.c)
r=s.aJ(r.v(0,Math.sqrt(r.M(r))))
return r.v(0,Math.sqrt(r.M(r)))},
cJ:function(){var u,t=this
if(t.d!=null)return!0
u=t.fR()
if(u==null){u=t.fZ()
if(u==null)return!1}t.d=u
t.a.a.a3()
return!0},
fQ:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.a8()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.eO())return
return s.v(0,Math.sqrt(s.M(s)))},
fY:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
k=s.b
if(typeof l!=="number")return l.p()
if(typeof k!=="number")return H.i(k)
r=l-k
if(Math.abs(r-0)<$.Q().a){l=d.p(0,g)
l=new V.a5(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.M(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.p()
if(typeof t!=="number")return H.i(t)
if(l-t<0)q=q.N(0)}else{k=u.b
if(typeof k!=="number")return H.i(k)
p=(l-k)/r
k=d.p(0,g)
l=k.a
if(typeof l!=="number")return l.l()
i=k.b
if(typeof i!=="number")return i.l()
k=k.c
if(typeof k!=="number")return k.l()
k=new V.aE(l*p,i*p,k*p).n(0,g).p(0,j)
k=new V.a5(k.a,k.b,k.c)
q=k.v(0,Math.sqrt(k.M(k)))
s=s.a
t=t.a
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.i(t)
u=u.a
if(typeof u!=="number")return H.i(u)
if((s-t)*p+t-u<0)q=q.N(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.M(l)))
l=o.aJ(q)
l=l.v(0,Math.sqrt(l.M(l))).aJ(o)
q=l.v(0,Math.sqrt(l.M(l)))}return q},
cI:function(){var u,t=this
if(t.e!=null)return!0
u=t.fQ()
if(u==null){u=t.fY()
if(u==null)return!1}t.e=u
t.a.a.a3()
return!0},
A:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.R()},
I:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.ak(J.aL(s.e),0)+", "+C.b.ak(J.aL(t.b.e),0)+", "+C.b.ak(J.aL(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.j(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.j(0)+"}"):u+"-}"},
R:function(){return this.I("")}}
F.aJ.prototype={
A:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.R()},
I:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.ak(J.aL(u.e),0)+", "+C.b.ak(J.aL(this.b.e),0)},
R:function(){return this.I("")}}
F.by.prototype={
A:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.R()},
I:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ak(J.aL(u.e),0)},
R:function(){return this.I("")}}
F.an.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.X():u},
aX:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aX()||!1
if(!t.a.aX())u=!1
s=t.e
if(s!=null)s.b2(0)
return u},
aW:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aW()||!1
if(!t.a.aW())u=!1
s=t.e
if(s!=null)s.b2(0)
return u},
bB:function(){var u=this.e
if(u!=null)++u.d
this.a.bB()
u=this.e
if(u!=null)u.b2(0)
return!0},
ba:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.c,h=i.length
if(h<=0){i=$.mM
return i==null?$.mM=V.mK(0,0,0,0,0,0):i}i=i[0].f
u=V.mK(i.a,i.b,i.c,0,0,0)
for(t=h-1,i=this.a;t>=1;--t){s=i.c
if(t>=s.length)return H.e(s,t)
s=s[t].f
r=s.a
q=s.b
s=s.c
p=u.d
o=u.a
if(typeof r!=="number")return r.E()
if(typeof o!=="number")return H.i(o)
if(r<o){p+=o-r
n=r}else{if(r>o+p)p=r-o
n=o}m=u.e
r=u.b
if(typeof q!=="number")return q.E()
if(typeof r!=="number")return H.i(r)
if(q<r){m+=r-q
l=q}else{if(q>r+m)m=q-r
l=r}k=u.f
r=u.c
if(typeof s!=="number")return s.E()
if(typeof r!=="number")return H.i(r)
if(s<r){k+=r-s
j=s}else{if(s>r+k)k=s-r
j=r}u=new V.cc(n,l,j,p,m,k)}return u},
bA:function(a){var u,t,s
for(u=this.a.c.length-1;u>=0;--u){t=this.a.c
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.f
if(t!=null){t=a.b4(t)
if(!J.Z(s.f,t)){s.f=t
t=s.a
if(t!=null){t=t.e
if(t!=null)t.L(null)}}}t=s.r
if(t!=null)s.sbd(a.bZ(t))
t=s.x
if(t!=null)s.sW(a.bZ(t))}},
ea:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b9()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.b8().a)!==0)++s
if((t&$.b7().a)!==0)++s
if((t&$.bF().a)!==0)++s
if((t&$.bG().a)!==0)++s
if((t&$.bW().a)!==0)++s
if((t&$.ds().a)!==0)++s
if((t&$.cu().a)!==0)++s
if((t&$.bE().a)!==0)++s
r=a3.gdc(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.F
p=H.f(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.f(u,[Z.dx])
for(n=0,m=0;m<s;++m){l=a3.jM(m)
k=l.gdc(l)
C.a.m(o,m,new Z.dx(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].ke(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.m(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cj(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bH(new Z.eu(a0,f),o,a3)
e.shq(H.f([],[Z.bL]))
if(a.b.b.length!==0){t=P.p
d=H.f([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.O()
C.a.h(d,c.e)}b=Z.lX(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bL(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.f([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.O()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.O()
C.a.h(d,c.e)}b=Z.lX(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bL(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.f([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.O()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.O()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.O()
C.a.h(d,c.e)}b=Z.lX(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bL(4,d.length,b))}return e},
j:function(a){var u=this,t="   ",s=H.f([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.I(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.I(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.I(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.I(t))}return C.a.F(s,"\n")},
a3:function(){var u=this.e
if(u!=null)u.L(null)},
$ice:1}
F.ce.prototype={}
F.iF.prototype={
a8:function(a,b,c,d){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
return F.mn(b,c,d)},
jJ:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.J],"$ab")
u=H.f([],[F.N])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.e(a,p)
p=a[p]
if(q>=o)return H.e(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.mn(s,p,o))}}return u},
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b>=u.length)return H.e(u,b)
return u[b]},
aX:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.H)(u),++r)if(!u[r].cJ())s=!1
return s},
aW:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.H)(u),++r)if(!u[r].cI())s=!1
return s},
j:function(a){return this.R()},
I:function(a){var u,t,s,r=H.f([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].I(a))
return C.a.F(r,"\n")},
R:function(){return this.I("")},
shk:function(a){this.b=H.k(a,"$ib",[F.N],"$ab")}}
F.iG.prototype={
t:function(a,b,c){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
return F.mt(b,c)},
jK:function(a){var u,t,s,r,q,p
H.k(a,"$ib",[F.J],"$ab")
u=H.f([],[F.aJ])
t=a.length
for(s=this.a,r=1;r<t;r+=2){q=r-1
p=a.length
if(q>=p)return H.e(a,q)
q=a[q]
if(r>=p)return H.e(a,r)
p=a[r]
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.mt(q,p))}return u},
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b>=u.length)return H.e(u,b)
return u[b]},
j:function(a){return this.R()},
I:function(a){var u,t,s=H.f([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].I(a+(""+u+". ")))}return C.a.F(s,"\n")},
R:function(){return this.I("")},
shr:function(a){this.b=H.k(a,"$ib",[F.aJ],"$ab")}}
F.iH.prototype={
jL:function(a){var u,t,s,r,q
H.k(a,"$ib",[F.J],"$ab")
u=H.f([],[F.by])
t=a.length
for(s=this.a,r=0;r<t;++r){if(r>=a.length)return H.e(a,r)
q=a[r]
s.a.h(0,q)
C.a.h(u,F.lO(q))}return u},
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b>=u.length)return H.e(u,b)
return u[b]},
j:function(a){return this.R()},
I:function(a){var u,t,s,r=H.f([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].I(a))
return C.a.F(r,"\n")},
R:function(){return this.I("")},
scr:function(a){this.b=H.k(a,"$ib",[F.by],"$ab")}}
F.J.prototype={
a1:function(){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.cg(u.cx,r,o,t,s,q,p,null,n)},
sa9:function(a,b){var u
if(!J.Z(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a3()}},
sbd:function(a){var u
a=a==null?null:a.v(0,Math.sqrt(a.M(a)))
if(!J.Z(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a3()}},
sW:function(a){var u
a=a==null?null:a.v(0,Math.sqrt(a.M(a)))
if(!J.Z(this.x,a)){this.x=a
u=this.a
if(u!=null)u.a3()}},
sU:function(a,b){var u
if(!J.Z(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.a3()}},
ke:function(a){var u,t,s=this
if(a.A(0,$.b9())){u=s.f
t=[P.F]
if(u==null)return H.f([0,0,0],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.A(0,$.b8())){u=s.r
t=[P.F]
if(u==null)return H.f([0,1,0],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.A(0,$.b7())){u=s.x
t=[P.F]
if(u==null)return H.f([0,0,1],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.A(0,$.bF())){u=s.y
t=[P.F]
if(u==null)return H.f([0,0],t)
else return H.f([u.a,u.b],t)}else if(a.A(0,$.bG())){u=s.z
t=[P.F]
if(u==null)return H.f([0,0,0],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.A(0,$.bW())){u=s.Q
t=[P.F]
if(u==null)return H.f([1,1,1],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.A(0,$.ds())){u=s.Q
t=[P.F]
if(u==null)return H.f([1,1,1,1],t)
else return H.f([u.a,u.b,u.c,u.d],t)}else if(a.A(0,$.cu()))return H.f([s.ch],[P.F])
else if(a.A(0,$.bE())){u=H.f([-1,-1,-1,-1],[P.F])
return u}else return H.f([],[P.F])},
cJ:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.a8()
t.d.u(0,new F.jB(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.M(s)))
s=t.a
if(s!=null){s.a3()
s=t.a.e
if(s!=null)s.b2(0)}return!0},
cI:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.a8()
t.d.u(0,new F.jA(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.M(s)))
s=t.a
if(s!=null){s.a3()
s=t.a.e
if(s!=null)s.b2(0)}return!0},
eF:function(a){var u,t,s,r=this.c.b.length
for(u=0;u<r;++u){t=this.c.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.b
t.a.a.O()
t=t.e
a.a.a.O()
if(t==a.e)return s}return},
k0:function(a){var u=this.eF(a)
if(u!=null)return u
return a.eF(this)},
A:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.R()},
I:function(a){var u,t,s=this,r="-",q=H.f([],[P.h])
C.a.h(q,C.b.ak(J.aL(s.e),0))
u=s.f
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
u=s.r
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
u=s.x
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
u=s.y
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
u=s.z
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
C.a.h(q,V.V(s.ch,3,0))
C.a.h(q,r)
t=C.a.F(q,", ")
return a+"{"+t+"}"},
R:function(){return this.I("")}}
F.jB.prototype={
$1:function(a){var u,t
H.d(a,"$iN")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:4}
F.jA.prototype={
$1:function(a){var u,t
H.d(a,"$iN")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:4}
F.ju.prototype={
O:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a3()
return!0},
cD:function(a,b,c){var u=null,t=F.cg(u,u,u,new V.aE(a,b,c),u,u,u,u,0)
this.h(0,t)
return t},
gk:function(a){return this.c.length},
i:function(a,b){return C.a.i(this.c,b)},
aX:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)u[s].cJ()
return!0},
aW:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)u[s].cI()
return!0},
bB:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.l()
o=q.b
if(typeof o!=="number")return o.l()
n=q.c
if(typeof n!=="number")return n.l()
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Z(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.L(null)}}}}return!0},
j:function(a){return this.R()},
I:function(a){var u,t,s,r
this.O()
u=H.f([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)C.a.h(u,t[r].I(a))
return C.a.F(u,"\n")},
R:function(){return this.I("")},
sjg:function(a){this.c=H.k(a,"$ib",[F.J],"$ab")}}
F.jv.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t=this,s=t.b.length
if(b.E(0,s))return C.a.i(t.b,b)
b=b.p(0,s)
u=t.c.length
if(b.E(0,u))return C.a.i(t.c,b)
b=b.p(0,u)
return C.a.i(t.d,b)},
u:function(a,b){var u=this
H.j(b,{func:1,ret:-1,args:[F.N]})
C.a.u(u.b,b)
C.a.u(u.c,new F.jw(u,b))
C.a.u(u.d,new F.jx(u,b))},
j:function(a){return this.R()},
R:function(){var u,t,s,r=H.f([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].I(""))
return C.a.F(r,"\n")},
shl:function(a){this.b=H.k(a,"$ib",[F.N],"$ab")},
shm:function(a){this.c=H.k(a,"$ib",[F.N],"$ab")},
shn:function(a){this.d=H.k(a,"$ib",[F.N],"$ab")}}
F.jw.prototype={
$1:function(a){H.d(a,"$iN")
if(!J.Z(a.a,this.a))this.b.$1(a)},
$S:4}
F.jx.prototype={
$1:function(a){var u
H.d(a,"$iN")
u=this.a
if(!J.Z(a.a,u)&&!J.Z(a.b,u))this.b.$1(a)},
$S:4}
F.jy.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a,b){var u=this.b.length
if(b.aO(0,u))return C.a.i(this.c,b.p(0,u))
else return C.a.i(this.b,b)},
j:function(a){return this.R()},
R:function(){var u,t,s,r=H.f([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].I(""))
return C.a.F(r,"\n")},
shs:function(a){this.b=H.k(a,"$ib",[F.aJ],"$ab")},
sht:function(a){this.c=H.k(a,"$ib",[F.aJ],"$ab")}}
F.jz.prototype={
gk:function(a){return this.b.length},
i:function(a,b){return C.a.i(this.b,b)},
j:function(a){return this.R()},
R:function(){var u,t,s,r=H.f([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].I(""))
return C.a.F(r,"\n")},
scr:function(a){this.b=H.k(a,"$ib",[F.by],"$ab")}}
O.dL.prototype={
gB:function(){var u=this.rx
return u==null?this.rx=D.X():u},
D:function(a){var u=this.rx
if(u!=null)u.L(a)},
sac:function(a){var u=this.r2
if(!(Math.abs(u-a)<$.Q().a)){this.r2=a
u=new D.E("vectorScale",u,a,[P.F])
u.b=!0
this.D(u)}},
al:function(a,b){},
f4:function(a,b){var u,t,s,r,q,p,o=this,n="Inspection",m=2929
if(o.a==null){u=H.d(a.fr.i(0,n),"$idM")
if(u==null){t=a.a
u=new A.dM(t,n)
u.dg(t,n)
u.eM(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
u.z=u.x.i(0,"posAttr")
u.Q=u.x.i(0,"normAttr")
u.ch=u.x.i(0,"clrAttr")
u.cx=u.x.i(0,"binmAttr")
u.cy=H.m(u.y.i(0,"lightVec"),"$iP")
u.db=H.m(u.y.i(0,"ambientClr"),"$id1")
u.dx=H.m(u.y.i(0,"diffuseClr"),"$id1")
u.dy=H.m(u.y.i(0,"weightScalar"),"$ia3")
u.fr=H.m(u.y.i(0,"viewMat"),"$iaA")
u.fx=H.m(u.y.i(0,"viewObjMatrix"),"$iaA")
u.fy=H.m(u.y.i(0,"projViewObjMatrix"),"$iaA")
a.e7(u)}o.a=u}if(b.e==null){b.d.aX()
b.d.aW()
b.d.bB()
t=new Z.dy()
t.shy(new H.aI([P.h,Z.bH]))
b.e=t}t=o.a
t.aH(a)
s=o.r2
r=t.dy
C.c.P(r.a,r.d,s)
s=o.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
C.c.w(r.a,r.d,q,p,s)
s=a.db
s=s.ga_(s)
p=t.fr
p.toString
p.ad(s.aa(0,!0))
s=a.gfg()
p=t.fx
p.toString
p.ad(s.aa(0,!0))
s=a.gf0()
t=t.fy
t.toString
t.ad(s.aa(0,!0))
t=b.e
if(t instanceof Z.dy){s=a.a
s.blendFunc(1,1)
if(b.c==null){s.disable(m)
s.enable(3042)
s.blendFunc(1,1)
if(o.k3)o.dT(a,t,b.d,"Axis",H.j(o.gds(),{func:1,ret:F.an,args:[F.ce]}),o.z,o.y)
if(o.k4)o.dT(a,t,b.d,"AABB",H.j(o.gdn(),{func:1,ret:F.an,args:[F.ce]}),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}else{s.enable(m)
s.enable(3042)
s.blendFunc(770,771)
if(o.Q)o.a2(a,t,b.c,"shapeFill",o.giQ(),o.d,o.c)
if(o.id)o.a2(a,t,b.c,"colorFill",o.gh2(),o.x,o.r)
if(o.k1)o.a2(a,t,b.c,"txt2DColor",o.gj8(),o.x,o.r)
if(o.k2)o.a2(a,t,b.c,"weight",o.gjh(),o.x,o.r)
s.disable(m)
s.blendFunc(1,1)
if(o.cx)o.a2(a,t,b.c,"vertices",o.gfF(),o.f,o.e)
if(o.fr)o.a2(a,t,b.c,"faceCenters",o.ghe(),o.f,o.e)
if(o.ch)o.a2(a,t,b.c,"wireFrame",o.gjj(),o.f,o.e)
if(o.cy)o.a2(a,t,b.c,"normals",o.ghD(),o.f,o.e)
if(o.db)o.a2(a,t,b.c,"binormals",o.gfW(),o.f,o.e)
if(o.dx)o.a2(a,t,b.c,"tangentals",o.giV(),o.f,o.e)
if(o.dy)o.a2(a,t,b.c,"textureCube",o.gja(),o.f,o.e)
if(o.fx)o.a2(a,t,b.c,"faceNormals",o.ghg(),o.f,o.e)
if(o.fy)o.a2(a,t,b.c,"faceBinormals",o.ghc(),o.x,o.r)
if(o.go)o.a2(a,t,b.c,"faceTangentals",o.ghi(),o.x,o.r)
if(o.k3)o.a2(a,t,b.c,"Axis",o.gds(),o.z,o.y)
if(o.k4)o.a2(a,t,b.c,"AABB",o.gdn(),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.eg()},
a2:function(a,b,c,d,e,f,g){var u,t
H.j(e,{func:1,ret:F.an,args:[F.an]})
u=b.a.i(0,d)
if(u==null){u=this.dt(a,e.$1(c))
b.a.m(0,d,u)}t=this.a
t.db.bm(f)
t.dx.bm(g)
u.eY(a)},
dT:function(a,b,c,d,e,f,g){var u,t
H.j(e,{func:1,ret:F.an,args:[F.ce]})
u=b.a.i(0,d)
if(u==null){u=this.dt(a,e.$1(c))
b.a.m(0,d,u)}t=this.a
t.db.bm(f)
t.dx.bm(g)
u.eY(a)},
dt:function(a,b){var u=this,t=$.b9(),s=$.b8(),r=b.ea(new Z.ev(a.a),new Z.b6(t.a|s.a|$.b7().a|$.bW().a))
r.ai($.b9()).e=u.a.z.c
r.ai($.b8()).e=u.a.Q.c
r.ai($.bW()).e=u.a.ch.c
r.ai($.b7()).e=u.a.cx.c
return r},
iR:function(a){var u,t=F.as(),s=a.a
s.toString
u=H.j(new O.hw(t,new V.a0(1,1,1,1)),{func:1,ret:-1,args:[F.J]})
C.a.u(s.c,u)
u=a.d
u.toString
s=H.j(new O.hx(t),{func:1,ret:-1,args:[F.N]})
C.a.u(u.b,s)
return t},
e3:function(a,b){var u,t,s,r={}
r.a=b
u=F.as()
r.a=new V.a0(0,0.7,1,1)
t=a.a
t.toString
r=H.j(new O.hH(r,u),{func:1,ret:-1,args:[F.J]})
C.a.u(t.c,r)
r=new O.hG(u)
t=a.c
t.toString
s=H.j(new O.hI(u,r),{func:1,ret:-1,args:[F.aJ]})
C.a.u(t.b,s)
s=a.d
s.toString
r=H.j(new O.hJ(u,r),{func:1,ret:-1,args:[F.N]})
C.a.u(s.b,r)
return u},
jk:function(a){return this.e3(a,null)},
fG:function(a){var u,t=F.as(),s=a.a
s.toString
u=H.j(new O.hC(new V.a0(1,1,1,1),t),{func:1,ret:-1,args:[F.J]})
C.a.u(s.c,u)
return t},
hE:function(a){var u,t=F.as(),s=a.a
s.toString
u=H.j(new O.hv(new V.a0(1,1,0.3,1),t),{func:1,ret:-1,args:[F.J]})
C.a.u(s.c,u)
return t},
fX:function(a){var u,t=F.as(),s=a.a
s.toString
u=H.j(new O.ho(new V.a0(1,0.3,0.3,1),t),{func:1,ret:-1,args:[F.J]})
C.a.u(s.c,u)
return t},
iW:function(a){var u,t=F.as(),s=a.a
s.toString
u=H.j(new O.hy(new V.a0(1,0.3,1,1),t),{func:1,ret:-1,args:[F.J]})
C.a.u(s.c,u)
return t},
jb:function(a){var u,t=F.as(),s=a.a
s.toString
u=H.j(new O.hB(new V.a0(1,0.3,0.3,1),t),{func:1,ret:-1,args:[F.J]})
C.a.u(s.c,u)
return t},
hf:function(a){var u,t=F.as(),s=a.d
s.toString
u=H.j(new O.hs(new V.a0(1,1,0.3,1),t),{func:1,ret:-1,args:[F.N]})
C.a.u(s.b,u)
return t},
hh:function(a){var u,t=F.as(),s=a.d
s.toString
u=H.j(new O.ht(new V.a0(1,1,0.3,1),t),{func:1,ret:-1,args:[F.N]})
C.a.u(s.b,u)
return t},
hd:function(a){var u,t=F.as(),s=a.d
s.toString
u=H.j(new O.hr(new V.a0(1,0.3,0.3,1),t),{func:1,ret:-1,args:[F.N]})
C.a.u(s.b,u)
return t},
hj:function(a){var u,t=F.as(),s=a.d
s.toString
u=H.j(new O.hu(new V.a0(1,0.3,1,1),t),{func:1,ret:-1,args:[F.N]})
C.a.u(s.b,u)
return t},
h3:function(a){var u,t=F.as(),s=a.a
s.toString
u=H.j(new O.hp(t),{func:1,ret:-1,args:[F.J]})
C.a.u(s.c,u)
u=a.d
u.toString
s=H.j(new O.hq(t),{func:1,ret:-1,args:[F.N]})
C.a.u(u.b,s)
return t},
j9:function(a){var u,t=F.as(),s=a.a
s.toString
u=H.j(new O.hz(t),{func:1,ret:-1,args:[F.J]})
C.a.u(s.c,u)
u=a.d
u.toString
s=H.j(new O.hA(t),{func:1,ret:-1,args:[F.N]})
C.a.u(u.b,s)
return t},
ji:function(a){var u,t,s={},r=F.as(),q=a.a,p=q.c
if(p.length<1)return r
s.a=s.b=p[0].ch
q.toString
q={func:1,ret:-1,args:[F.J]}
C.a.u(p,H.j(new O.hD(s),q))
p=s.a
u=s.b
if(typeof p!=="number")return p.p()
if(typeof u!=="number")return H.i(u)
t=p-u
s.c=t
if(t<=0)s.c=1
p=a.a
p.toString
q=H.j(new O.hE(s,r),q)
C.a.u(p.c,q)
q=a.d
q.toString
p=H.j(new O.hF(r),{func:1,ret:-1,args:[F.N]})
C.a.u(q.b,p)
return r},
fS:function(a){return this.fT(a)},
fT:function(a){var u=F.as(),t=new O.hn(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u},
fK:function(a){return this.fL(a)},
fL:function(a){var u,t,s,r,q,p,o,n,m,l=a.ba(),k=F.as(),j=new O.hm(k),i=l.a,h=l.b,g=l.c,f=j.$3(i,h,g),e=l.d
if(typeof i!=="number")return i.n()
e=i+e
u=j.$3(e,h,g)
t=l.e
if(typeof h!=="number")return h.n()
t=h+t
s=j.$3(e,t,g)
r=j.$3(i,t,g)
q=l.f
if(typeof g!=="number")return g.n()
q=g+q
p=j.$3(i,h,q)
o=j.$3(e,h,q)
n=j.$3(e,t,q)
m=j.$3(i,t,q)
k.c.t(0,f,u)
k.c.t(0,u,s)
k.c.t(0,s,r)
k.c.t(0,r,f)
k.c.t(0,p,o)
k.c.t(0,o,n)
k.c.t(0,n,m)
k.c.t(0,m,p)
k.c.t(0,f,p)
k.c.t(0,u,o)
k.c.t(0,s,n)
k.c.t(0,r,m)
return k}}
O.hw.prototype={
$1:function(a){var u,t
H.d(a,"$iJ")
u=this.a.a
t=a.a1()
t.sU(0,this.b)
t.sW(V.a8())
u.h(0,t)},
$S:6}
O.hx.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iN")
u=this.a
t=u.a
s=a.a
s.a.a.O()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.O()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.O()
s=s.e
p=C.a.i(t.c,s)
u.d.a8(0,r,q,p)},
$S:4}
O.hH.prototype={
$1:function(a){var u,t
H.d(a,"$iJ")
u=this.b.a
t=a.a1()
t.sU(0,this.a.a)
t.sW(V.a8())
u.h(0,t)},
$S:6}
O.hG.prototype={
$2:function(a,b){if(a.k0(b)==null)this.a.c.t(0,a,b)},
$S:51}
O.hI.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iaJ")
u=this.a
t=u.a
s=a.a
s.a.a.O()
s=s.e
r=C.a.i(t.c,s)
u=u.a
s=a.b
s.a.a.O()
s=s.e
this.b.$2(r,C.a.i(u.c,s))},
$S:52}
O.hJ.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iN")
u=this.a
t=u.a
s=a.a
s.a.a.O()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.O()
t=t.e
q=C.a.i(s.c,t)
u=u.a
t=a.c
t.a.a.O()
t=t.e
p=C.a.i(u.c,t)
t=this.b
t.$2(r,q)
t.$2(q,p)
t.$2(p,r)},
$S:4}
O.hC.prototype={
$1:function(a){var u,t=H.d(a,"$iJ").a1()
t.sU(0,this.a)
t.sW(V.a8())
u=this.b
u.a.h(0,t)
u.b.a.a.h(0,t)
F.lO(t)},
$S:6}
O.hv.prototype={
$1:function(a){var u,t,s=H.d(a,"$iJ").a1()
s.sU(0,this.a)
s.sW(V.a8())
u=s.a1()
u.sW(s.r)
t=this.b
t.a.h(0,s)
t.a.h(0,u)
t.c.t(0,s,u)},
$S:6}
O.ho.prototype={
$1:function(a){var u,t,s
H.d(a,"$iJ")
u=a.a1()
u.sU(0,this.a)
u.sW(V.a8())
t=u.a1()
t.sW(a.x)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.hy.prototype={
$1:function(a){var u,t,s
H.d(a,"$iJ")
u=a.a1()
u.sU(0,this.a)
u.sW(V.a8())
t=u.a1()
t.sW(a.x.aJ(a.r).N(0))
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.hB.prototype={
$1:function(a){var u,t,s
H.d(a,"$iJ")
u=a.a1()
u.sU(0,this.a)
u.sW(V.a8())
t=u.a1()
t.sW(a.z)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.hs.prototype={
$1:function(a){var u,t,s,r=null
H.d(a,"$iN")
u=a.a.f.n(0,a.b.f).n(0,a.c.f).v(0,3)
t=a.d
s=F.cg(r,V.a8(),this.a,u,t,r,r,r,0)
t=this.b
t.a.h(0,s)
t.b.a.a.h(0,s)
F.lO(s)},
$S:4}
O.ht.prototype={
$1:function(a){var u,t,s,r,q=null
H.d(a,"$iN")
u=a.a.f.n(0,a.b.f).n(0,a.c.f).v(0,3)
t=a.d
s=F.cg(q,V.a8(),this.a,u,t,q,q,q,0)
r=s.a1()
r.sW(a.d)
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.t(0,s,r)},
$S:4}
O.hr.prototype={
$1:function(a){var u,t,s,r,q=null
H.d(a,"$iN")
u=a.a.f.n(0,a.b.f).n(0,a.c.f).v(0,3)
t=a.d
s=F.cg(q,V.a8(),this.a,u,t,q,q,q,0)
r=s.a1()
r.sW(a.e)
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.t(0,s,r)},
$S:4}
O.hu.prototype={
$1:function(a){var u,t,s,r,q=null
H.d(a,"$iN")
u=a.a.f.n(0,a.b.f).n(0,a.c.f).v(0,3)
t=a.d
s=F.cg(q,V.a8(),this.a,u,t,q,q,q,0)
r=s.a1()
r.sW(a.e.aJ(a.d).N(0))
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.t(0,s,r)},
$S:4}
O.hp.prototype={
$1:function(a){var u,t
H.d(a,"$iJ")
u=this.a.a
t=a.a1()
t.sW(V.a8())
u.h(0,t)},
$S:6}
O.hq.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iN")
u=this.a
t=u.a
s=a.a
s.a.a.O()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.O()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.O()
s=s.e
p=C.a.i(t.c,s)
u.d.a8(0,r,q,p)},
$S:4}
O.hz.prototype={
$1:function(a){var u,t,s,r,q,p,o
H.d(a,"$iJ")
u=a.y
t=this.a.a
s=a.a1()
r=u.a
q=u.b
if(typeof r!=="number")return r.E()
if(r<0)r=0
else if(r>1)r=1
if(typeof q!=="number")return q.E()
p=q<0
if(p)o=0
else if(q>1)o=1
else o=q
if(p)q=0
else if(q>1)q=1
s.sU(0,new V.a0(r,o,q,1))
s.sW(V.a8())
t.h(0,s)},
$S:6}
O.hA.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iN")
u=this.a
t=u.a
s=a.a
s.a.a.O()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.O()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.O()
s=s.e
p=C.a.i(t.c,s)
u.d.a8(0,r,q,p)},
$S:4}
O.hD.prototype={
$1:function(a){var u,t,s
H.d(a,"$iJ")
u=this.a
t=u.b
s=a.ch
if(typeof t!=="number")return t.d8()
if(typeof s!=="number")return H.i(s)
if(t>s)u.b=s
t=u.a
if(typeof t!=="number")return t.E()
if(t<s)u.a=s},
$S:6}
O.hE.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iJ")
u=a.ch
t=this.a
s=t.b
if(typeof u!=="number")return u.p()
if(typeof s!=="number")return H.i(s)
r=V.o6((u-s)/t.c*5/6,1,1)
t=this.b.a
s=a.a1()
s.sW(V.a8())
s.sU(0,V.o7(r))
t.h(0,s)},
$S:6}
O.hF.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iN")
u=this.a
t=u.a
s=a.a
s.a.a.O()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.O()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.O()
s=s.e
p=C.a.i(t.c,s)
u.d.a8(0,r,q,p)},
$S:4}
O.hn.prototype={
$3:function(a,b,c){var u,t,s=a>1?1:a,r=b>1?1:b,q=c>1?1:c,p=new V.a0(s,r,q,1)
s=this.a
u=s.a.cD(0,0,0)
u.sW(V.a8())
u.sbd(V.n1())
u.sU(0,p)
t=s.a.cD(a,b,c)
t.sW(V.a8())
t.sbd(V.n1())
t.sU(0,p)
s.c.t(0,u,t)}}
O.hm.prototype={
$3:function(a,b,c){var u=this.a.a.cD(a,b,c)
u.sW(V.a8())
u.sbd(new V.a5(a,b,c))
return u}}
O.aX.prototype={
gB:function(){var u=this.dy
return u==null?this.dy=D.X():u},
D:function(a){var u
H.d(a,"$iB")
u=this.dy
if(u!=null)u.L(a)},
c6:function(){return this.D(null)},
dU:function(a){H.d(a,"$iB")
this.a=null
this.D(a)},
iJ:function(){return this.dU(null)},
hK:function(a,b){var u=V.aD
H.k(b,"$in",[u],"$an")
u=new D.c6([u])
u.b=!0
this.D(u)},
hM:function(a,b){var u=V.aD
H.k(b,"$in",[u],"$an")
u=new D.c7([u])
u.b=!0
this.D(u)},
dA:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.e.a7(a1.e.length+3,4)*4,a3=C.e.a7(a1.f.length+3,4)*4,a4=C.e.a7(a1.r.length+3,4)*4,a5=C.e.a7(a1.x.length+3,4)*4,a6=C.e.a7(a1.y.length+3,4)*4,a7=C.e.a7(a1.z.length+3,4)*4,a8=C.e.a7(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.e.j(a1.a)+C.e.j(u.a)+C.e.j(t.a)+C.e.j(s.a)+C.e.j(r.a)+C.e.j(q.a)+C.e.j(p.a)+C.e.j(o.a)+C.e.j(n.a)
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
e=a1===C.h||u===C.h||t===C.h||s===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.b9()
if(h){j=$.b8()
a=new Z.b6(a.a|j.a)}if(g){j=$.b7()
a=new Z.b6(a.a|j.a)}if(f){j=$.bF()
a=new Z.b6(a.a|j.a)}if(e){j=$.bG()
a=new Z.b6(a.a|j.a)}if(c){j=$.bE()
a=new Z.b6(a.a|j.a)}return new A.i3(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
Z:function(a,b){H.k(a,"$ib",[T.cZ],"$ab")
if(b!=null)if(!C.a.aI(a,b)){b.a=a.length
C.a.h(a,b)}},
al:function(a,b){var u
for(u=this.dx.a,u=new J.av(u,u.length,[H.u(u,0)]);u.G();)C.m.al(u.d,b)},
f4:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.dA()
u=H.d(a3.fr.i(0,a2.ao),"$idX")
if(u==null){u=A.oq(a2,a3.a)
a3.e7(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bE
a2=a4.e
if(!(a2 instanceof Z.bH))a2=a4.e=null
if(a2==null||!a2.d.A(0,s)){a2=t.r1
if(a2)a4.d.aX()
r=t.r2
if(r)a4.d.aW()
q=t.ry
if(q)a4.d.bB()
p=a4.d.ea(new Z.ev(a3.a),s)
p.ai($.b9()).e=a1.a.Q.c
if(a2)p.ai($.b8()).e=a1.a.cx.c
if(r)p.ai($.b7()).e=a1.a.ch.c
if(t.rx)p.ai($.bF()).e=a1.a.cy.c
if(q)p.ai($.bG()).e=a1.a.db.c
if(t.x1)p.ai($.bE()).e=a1.a.dx.c
a4.e=p}a2=T.cZ
o=H.f([],[a2])
a1.a.aH(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.ga_(q)
r=r.dy
r.toString
r.ad(q.aa(0,!0))}if(t.fy){r=a1.a
q=a3.gfg()
r=r.fr
r.toString
r.ad(q.aa(0,!0))}r=a1.a
q=a3.gf0()
r=r.fy
r.toString
r.ad(q.aa(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.ad(C.m.aa(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.ad(C.m.aa(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.ad(C.m.aa(q,!0))}if(t.ay>0){n=a1.e.a.length
r=a1.a.k4
C.c.a4(r.a,r.d,n)
for(r=[P.F],m=0;m<n;++m){q=a1.a
l=a1.e.a
if(m>=l.length)return H.e(l,m)
l=l[m]
q.toString
H.d(l,"$iaD")
q=q.r1
if(m>=q.length)return H.e(q,m)
q=q[m]
k=new Float32Array(H.cj(H.k(l.aa(0,!0),"$ib",r,"$ab")))
C.c.fc(q.a,q.d,!1,k)}}switch(t.a){case C.d:break
case C.i:r=a1.a
q=a1.f.f
r=r.r2
r.toString
l=q.a
j=q.b
q=q.c
C.c.w(r.a,r.d,l,j,q)
break
case C.f:a1.Z(o,a1.f.d)
r=a1.a
q=a1.f.d
r.an(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
l=r.a
j=r.b
r=r.c
C.c.w(q.a,q.d,l,j,r)
break
case C.h:a1.Z(o,a1.f.e)
r=a1.a
q=a1.f.e
r.ah(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
l=r.a
j=r.b
r=r.c
C.c.w(q.a,q.d,l,j,r)
break}if(t.k2){switch(t.b){case C.d:break
case C.i:r=a1.a
q=a1.r.f
r=r.x2
r.toString
l=q.a
j=q.b
q=q.c
C.c.w(r.a,r.d,l,j,q)
break
case C.f:a1.Z(o,a1.r.d)
r=a1.a
q=a1.r.d
r.an(r.y1,r.ay,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
l=r.a
j=r.b
r=r.c
C.c.w(q.a,q.d,l,j,r)
break
case C.h:a1.Z(o,a1.r.e)
r=a1.a
q=a1.r.e
r.ah(r.y2,r.ay,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
l=r.a
j=r.b
r=r.c
C.c.w(q.a,q.d,l,j,r)
break}switch(t.c){case C.d:break
case C.i:r=a1.a
q=a1.x.f
r=r.ao
r.toString
l=q.a
j=q.b
q=q.c
C.c.w(r.a,r.d,l,j,q)
break
case C.f:a1.Z(o,a1.x.d)
r=a1.a
q=a1.x.d
r.an(r.bE,r.bF,q)
q=a1.a
r=a1.x.f
q=q.ao
q.toString
l=r.a
j=r.b
r=r.c
C.c.w(q.a,q.d,l,j,r)
break
case C.h:a1.Z(o,a1.x.e)
r=a1.a
q=a1.x.e
r.ah(r.ei,r.bF,q)
q=a1.a
r=a1.x.f
q=q.ao
q.toString
l=r.a
j=r.b
r=r.c
C.c.w(q.a,q.d,l,j,r)
break}switch(t.d){case C.d:break
case C.i:r=a1.a
q=a1.y.f
r=r.bG
r.toString
l=q.a
j=q.b
q=q.c
C.c.w(r.a,r.d,l,j,q)
break
case C.f:a1.Z(o,a1.y.d)
r=a1.a
q=a1.y.d
r.an(r.ej,r.bH,q)
q=a1.a
r=a1.y.f
q=q.bG
q.toString
l=r.a
j=r.b
r=r.c
C.c.w(q.a,q.d,l,j,r)
break
case C.h:a1.Z(o,a1.y.e)
r=a1.a
q=a1.y.e
r.ah(r.ek,r.bH,q)
q=a1.a
r=a1.y.f
q=q.bG
q.toString
l=r.a
j=r.b
r=r.c
C.c.w(q.a,q.d,l,j,r)
break}switch(t.e){case C.d:break
case C.i:r=a1.a
q=a1.z.f
r=r.bI
r.toString
l=q.a
j=q.b
q=q.c
C.c.w(r.a,r.d,l,j,q)
q=a1.a
j=a1.z.ch
q=q.bK
C.c.P(q.a,q.d,j)
break
case C.f:a1.Z(o,a1.z.d)
r=a1.a
q=a1.z.d
r.an(r.el,r.bJ,q)
q=a1.a
r=a1.z.f
q=q.bI
q.toString
l=r.a
j=r.b
r=r.c
C.c.w(q.a,q.d,l,j,r)
r=a1.a
j=a1.z.ch
r=r.bK
C.c.P(r.a,r.d,j)
break
case C.h:a1.Z(o,a1.z.e)
r=a1.a
q=a1.z.e
r.ah(r.em,r.bJ,q)
q=a1.a
r=a1.z.f
q=q.bI
q.toString
l=r.a
j=r.b
r=r.c
C.c.w(q.a,q.d,l,j,r)
r=a1.a
j=a1.z.ch
r=r.bK
C.c.P(r.a,r.d,j)
break}if(t.z>0){n=a1.dx.e.length
r=a1.a.ey
C.c.a4(r.a,r.d,n)
r=a3.db
i=r.ga_(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
l=a1.a.cN
if(h>=l.length)return H.e(l,h)
e=l[h]
l=i.bZ(f.gbD(f))
j=l.a
if(typeof j!=="number")return j.l()
d=l.b
if(typeof d!=="number")return d.l()
c=l.c
if(typeof c!=="number")return c.l()
c=l.v(0,Math.sqrt(j*j+d*d+c*c))
d=e.b
j=c.a
l=c.b
c=c.c
C.c.w(d.a,d.d,j,l,c)
c=f.gU(f)
l=e.c
C.c.w(l.a,l.d,c.a,c.b,c.c);++h}}if(t.Q>0){n=a1.dx.f.length
r=a1.a.ez
C.c.a4(r.a,r.d,n)
r=a3.db
i=r.ga_(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
l=a1.a.cO
if(h>=l.length)return H.e(l,h)
e=l[h]
l=f.gbg(f)
j=e.b
C.c.w(j.a,j.d,l.a,l.b,l.c)
l=i.b4(f.gbg(f))
j=e.c
C.c.w(j.a,j.d,l.a,l.b,l.c)
l=f.gU(f)
j=e.d
C.c.w(j.a,j.d,l.a,l.b,l.c)
l=f.gcE()
j=e.e
C.c.P(j.a,j.d,l)
l=f.gcF()
j=e.f
C.c.P(j.a,j.d,l)
l=f.gcG()
j=e.r
C.c.P(j.a,j.d,l);++h}}if(t.ch>0){n=a1.dx.r.length
r=a1.a.eA
C.c.a4(r.a,r.d,n)
r=a3.db
i=r.ga_(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
l=a1.a.cP
if(h>=l.length)return H.e(l,h)
e=l[h]
l=f.gbg(f)
j=e.b
C.c.w(j.a,j.d,l.a,l.b,l.c)
l=f.gbD(f).l0()
j=e.c
C.c.w(j.a,j.d,l.a,l.b,l.c)
l=i.b4(f.gbg(f))
j=e.d
C.c.w(j.a,j.d,l.a,l.b,l.c)
l=f.gU(f)
j=e.e
C.c.w(j.a,j.d,l.a,l.b,l.c)
l=f.gkW()
j=e.f
C.c.P(j.a,j.d,l)
l=f.gkV()
j=e.r
C.c.P(j.a,j.d,l)
l=f.gcE()
j=e.x
C.c.P(j.a,j.d,l)
l=f.gcF()
j=e.y
C.c.P(j.a,j.d,l)
l=f.gcG()
j=e.z
C.c.P(j.a,j.d,l);++h}}if(t.cx>0){n=a1.dx.x.length
r=a1.a.eB
C.c.a4(r.a,r.d,n)
r=a3.db
i=r.ga_(r)
for(r=a1.dx.x,q=r.length,l=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
j=a1.a.cQ
if(h>=j.length)return H.e(j,h)
e=j[h]
j=f.gbh()
H.k(o,"$ib",l,"$ab")
if(!C.a.aI(o,j)){j.a=o.length
C.a.h(o,j)}j=f.gbD(f)
d=e.d
C.c.w(d.a,d.d,j.a,j.b,j.c)
j=f.gc_()
d=e.b
C.c.w(d.a,d.d,j.a,j.b,j.c)
j=f.gbW(f)
d=e.c
C.c.w(d.a,d.d,j.a,j.b,j.c)
j=i.bZ(f.gbD(f))
d=j.a
if(typeof d!=="number")return d.l()
c=j.b
if(typeof c!=="number")return c.l()
b=j.c
if(typeof b!=="number")return b.l()
b=j.v(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
j=b.b
b=b.c
C.c.w(c.a,c.d,d,j,b)
b=f.gU(f)
j=e.f
C.c.w(j.a,j.d,b.a,b.b,b.c)
b=f.gbh()
j=b.gcY(b)
if(!j){j=e.x
C.c.a4(j.a,j.d,1)}else{j=e.r
d=b.d
c=j.a
j=j.d
if(!d)c.uniform1i(j,0)
else c.uniform1i(j,b.a)
j=e.x
C.c.a4(j.a,j.d,0)}++h}}if(t.cy>0){n=a1.dx.y.length
r=a1.a.eC
C.c.a4(r.a,r.d,n)
r=a3.db
i=r.ga_(r)
for(r=a1.dx.y,q=r.length,l=[P.F],j=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
d=a1.a.cR
if(h>=d.length)return H.e(d,h)
e=d[h]
d=f.gbh()
H.k(o,"$ib",j,"$ab")
if(!C.a.aI(o,d)){d.a=o.length
C.a.h(o,d)}a=i.l(0,f.ga_(f))
d=f.ga_(f)
c=$.cR
d=d.b4(c==null?$.cR=new V.aE(0,0,0):c)
c=e.b
C.c.w(c.a,c.d,d.a,d.b,d.c)
d=$.cR
d=a.b4(d==null?$.cR=new V.aE(0,0,0):d)
c=e.c
C.c.w(c.a,c.d,d.a,d.b,d.c)
d=a.eN(0)
c=e.d
k=new Float32Array(H.cj(H.k(new V.dY(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).aa(0,!0),"$ib",l,"$ab")))
C.c.fb(c.a,c.d,!1,k)
c=f.gU(f)
d=e.e
C.c.w(d.a,d.d,c.a,c.b,c.c)
c=f.gbh()
d=c.gcY(c)
if(!d){d=e.r
C.c.a4(d.a,d.d,1)}else{d=e.f
b=c.gcY(c)
a0=d.a
d=d.d
if(!b)a0.uniform1i(d,0)
else a0.uniform1i(d,c.gkZ(c))
d=e.r
C.c.a4(d.a,d.d,0)}d=f.gcE()
c=e.x
C.c.P(c.a,c.d,d)
d=f.gcF()
c=e.y
C.c.P(c.a,c.d,d)
d=f.gcG()
c=e.z
C.c.P(c.a,c.d,d);++h}}if(t.db>0){n=a1.dx.z.length
r=a1.a.eD
C.c.a4(r.a,r.d,n)
r=a3.db
i=r.ga_(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
l=a1.a.cS
if(h>=l.length)return H.e(l,h)
e=l[h]
l=f.gbh()
H.k(o,"$ib",a2,"$ab")
if(!C.a.aI(o,l)){l.a=o.length
C.a.h(o,l)}l=f.gbg(f)
j=e.b
C.c.w(j.a,j.d,l.a,l.b,l.c)
l=f.gbD(f)
j=e.c
C.c.w(j.a,j.d,l.a,l.b,l.c)
l=f.gc_()
j=e.d
C.c.w(j.a,j.d,l.a,l.b,l.c)
l=f.gbW(f)
j=e.e
C.c.w(j.a,j.d,l.a,l.b,l.c)
l=i.b4(f.gbg(f))
j=e.f
C.c.w(j.a,j.d,l.a,l.b,l.c)
l=f.gbh()
j=l.gcY(l)
if(!j){l=e.x
C.c.a4(l.a,l.d,1)}else{j=e.r
d=l.d
c=j.a
j=j.d
if(!d)c.uniform1i(j,0)
else c.uniform1i(j,l.a)
l=e.x
C.c.a4(l.a,l.d,0)}l=f.gU(f)
j=e.y
C.c.w(j.a,j.d,l.a,l.b,l.c)
l=f.gl2()
j=e.z
C.c.P(j.a,j.d,l)
l=f.gl3()
j=e.Q
C.c.P(j.a,j.d,l)
l=f.gcE()
j=e.ch
C.c.P(j.a,j.d,l)
l=f.gcF()
j=e.cx
C.c.P(j.a,j.d,l)
l=f.gcG()
j=e.cy
C.c.P(j.a,j.d,l);++h}}}switch(t.f){case C.d:break
case C.i:break
case C.f:a1.Z(o,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.an(a2.en,a2.bL,r)
break
case C.h:a1.Z(o,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.ah(a2.eo,a2.bL,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.ga_(r).eN(0)}a2=a2.id
a2.toString
a2.ad(r.aa(0,!0))}if(t.dy){a1.Z(o,a1.ch)
a2=a1.a
r=a1.ch
a2.ah(a2.ep,a2.eq,r)
switch(t.r){case C.d:break
case C.i:a2=a1.a
r=a1.cx.f
a2=a2.bM
a2.toString
q=r.a
l=r.b
r=r.c
C.c.w(a2.a,a2.d,q,l,r)
break
case C.f:a1.Z(o,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.an(a2.er,a2.bN,r)
r=a1.a
a2=a1.cx.f
r=r.bM
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.c.w(r.a,r.d,q,l,a2)
break
case C.h:a1.Z(o,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.ah(a2.es,a2.bN,r)
r=a1.a
a2=a1.cx.f
r=r.bM
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.c.w(r.a,r.d,q,l,a2)
break}switch(t.x){case C.d:break
case C.i:a2=a1.a
r=a1.cy.f
a2=a2.bP
a2.toString
q=r.a
l=r.b
r=r.c
C.c.w(a2.a,a2.d,q,l,r)
r=a1.a
l=a1.cy.ch
r=r.bO
C.c.P(r.a,r.d,l)
break
case C.f:a1.Z(o,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.an(a2.eu,a2.bQ,r)
r=a1.a
a2=a1.cy.f
r=r.bP
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.c.w(r.a,r.d,q,l,a2)
a2=a1.a
l=a1.cy.ch
a2=a2.bO
C.c.P(a2.a,a2.d,l)
break
case C.h:a1.Z(o,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.ah(a2.ev,a2.bQ,r)
r=a1.a
a2=a1.cy.f
r=r.bP
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.c.w(r.a,r.d,q,l,a2)
a2=a1.a
l=a1.cy.ch
a2=a2.bO
C.c.P(a2.a,a2.d,l)
break}}a2=t.y
r=a2!==C.d
if(r){switch(a2){case C.d:break
case C.i:a2=a1.a
q=a1.db.f
a2=a2.bR
C.c.P(a2.a,a2.d,q)
break
case C.f:a1.Z(o,a1.db.d)
a2=a1.a
q=a1.db.d
a2.an(a2.ew,a2.bS,q)
q=a1.a
a2=a1.db.f
q=q.bR
C.c.P(q.a,q.d,a2)
break
case C.h:a1.Z(o,a1.db.e)
a2=a1.a
q=a1.db.e
a2.ah(a2.ex,a2.bS,q)
q=a1.a
a2=a1.db.f
q=q.bR
C.c.P(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(a2=a3.a,m=0;m<o.length;++m){q=o[m]
if(!q.c&&q.d){q.c=!0
a2.activeTexture(33984+q.a)
a2.bindTexture(3553,q.b)}}q=H.m(a4.e,"$ibH")
q.aH(a3)
q.aM(a3)
q.fa(a3)
if(r)a2.disable(3042)
for(m=0;m<o.length;++m){r=o[m]
if(r.c){r.c=!1
a2.activeTexture(33984+r.a)
a2.bindTexture(3553,null)}}r=a1.a
r.toString
a2.useProgram(null)
r.x.eg()},
j:function(a){var u=this.a
if(u!=null)return u.b
else return this.dA().ao},
sfV:function(a){this.e=H.k(a,"$iaa",[V.aD],"$aaa")}}
O.i1.prototype={
bw:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.Q().a)){u.f=a
t=new D.E(u.b,t,a,[P.F])
t.b=!0
u.a.D(t)}},
aF:function(){this.de()
this.bw(1)},
aw:function(){this.c3()
this.bw(1)},
sff:function(a,b){var u,t=this
if(b==null)b=1
if(b<=0)t.eb(0)
else if(t.c===C.d){t.c=C.i
t.c3()
t.bw(1)
u=t.a
u.a=null
u.D(null)}t.bw(b)}}
O.cI.prototype={
D:function(a){this.a.D(H.d(a,"$iB"))},
c6:function(){return this.D(null)},
aF:function(){},
aw:function(){},
dX:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gB().a0(0,t.gbp())
u=t.d
t.d=a
if(a!=null)a.gB().h(0,t.gbp())
s=new D.E(t.b+".texture2D",u,t.d,[T.ee])
s.b=!0
t.a.D(s)}},
dY:function(a){},
eb:function(a){var u,t=this,s=null
if(t.c!==C.d){t.c=C.d
u=t.a
u.a=null
u.D(s)}t.aF()
t.dX(s)
t.dY(s)
t.a.D(s)},
sbi:function(a){var u=this,t=u.c
if(t!==C.f){if(t===C.d)u.aw()
u.c=C.f
u.dY(null)
t=u.a
t.a=null
t.D(null)}u.dX(a)}}
O.i2.prototype={}
O.bh.prototype={
cz:function(a){var u,t,s=this
if(!J.Z(s.f,a)){u=s.f
s.f=a
t=new D.E(s.b+".color",u,a,[V.a2])
t.b=!0
s.a.D(t)}},
aF:function(){this.de()
this.cz(new V.a2(0,0,0))},
aw:function(){this.c3()
this.cz(new V.a2(1,1,1))},
sU:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.i
t.aw()
u=t.a
u.a=null
u.D(null)}t.cz(b)}}
O.i4.prototype={
dW:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.Q().a)){u.ch=a
t=new D.E(u.b+".refraction",t,a,[P.F])
t.b=!0
u.a.D(t)}},
aF:function(){this.df()
this.dW(1)},
aw:function(){this.c4()
this.dW(1)}}
O.i5.prototype={
bx:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.Q().a)){u.ch=a
t=new D.E(u.b+".shininess",t,a,[P.F])
t.b=!0
u.a.D(t)}},
aF:function(){this.df()
this.bx(100)},
aw:function(){this.c4()
this.bx(100)}}
O.bP.prototype={}
T.cZ.prototype={}
T.ee.prototype={}
T.iY.prototype={
gB:function(){var u=this.y
return u==null?this.y=D.X():u}}
T.iZ.prototype={
bb:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.iY()
t.a=0
t.b=q
t.d=t.c=!1
r=W.q
W.a9(u,"load",H.j(new T.j_(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
iK:function(a,b,c){var u,t,s,r
b=V.m9(b)
u=V.m9(a.width)
t=V.m9(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lC()
s.width=u
s.height=t
r=H.d(C.n.fh(s,"2d"),"$icx")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pw(r.getImageData(0,0,s.width,s.height))}}}
T.j_.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.iK(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.kK(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.jV()}++s.e},
$S:13}
V.fA.prototype={
b_:function(a,b){return!0},
j:function(a){return"all"},
$ibu:1}
V.bu.prototype={}
V.dW.prototype={
b_:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)if(u[s].b_(0,b))return!0
return!1},
j:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.H)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.j(0)}return s},
saE:function(a){this.a=H.k(a,"$ib",[V.bu],"$ab")},
$ibu:1}
V.bx.prototype={
b_:function(a,b){return!this.fn(0,b)},
j:function(a){return"!["+this.dd(0)+"]"}}
V.iE.prototype={
fs:function(a){var u,t
if(a.a.length<=0)throw H.c(P.r("May not create a SetMatcher with zero characters."))
u=new H.aI([P.p,P.L])
for(t=new H.dT(a,a.gk(a),[H.aU(a,"x",0)]);t.G();)u.m(0,t.d,!0)
this.siL(u)},
b_:function(a,b){return this.a.bC(0,b)},
j:function(a){var u=this.a
return P.cY(u.gaz(u),0,null)},
siL:function(a){this.a=H.k(a,"$iA",[P.p,P.L],"$aA")},
$ibu:1}
V.cU.prototype={
F:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d0(this.a.S(0,b))
r.saE(H.f([],[V.bu]))
r.c=!1
C.a.h(this.c,r)
return r},
k_:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
if(r.b_(0,a))return r}return},
j:function(a){return this.b},
sj6:function(a){this.c=H.k(a,"$ib",[V.d0],"$ab")}}
V.ej.prototype={
j:function(a){var u=H.nB(this.b,"\n","\\n"),t=H.nB(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d_.prototype={
j:function(a){return this.b},
siF:function(a){var u=P.h
this.c=H.k(a,"$iA",[u,u],"$aA")}}
V.j2.prototype={
S:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new V.cU(this,b)
u.sj6(H.f([],[V.d0]))
u.d=null
this.a.m(0,b,u)}return u},
bk:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new V.d_(a)
u=P.h
t.siF(new H.aI([u,u]))
this.b.m(0,a,t)}return t},
kO:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.f([],[V.ej]),k=this.c,j=[P.p],i=H.f([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.H(a,s)
q=k.k_(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cY(i,0,m)
throw H.c(P.r("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.f([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cY(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new V.ej(n==null?o.b:n,p,s)}++s}}},
siU:function(a){this.a=H.k(a,"$iA",[P.h,V.cU],"$aA")},
sj_:function(a){this.b=H.k(a,"$iA",[P.h,V.d_],"$aA")}}
V.d0.prototype={
j:function(a){return this.b.b+": "+this.dd(0)}}
X.dA.prototype={$ibw:1}
X.hh.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.X():u}}
X.e4.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.X():u},
aQ:function(a){var u
H.d(a,"$iB")
u=this.f
if(u!=null)u.L(a)},
fJ:function(){return this.aQ(null)},
sbc:function(a){var u,t,s=this
if(!J.Z(s.b,a)){u=s.b
if(u!=null)u.gB().a0(0,s.gdl())
t=s.b
s.b=a
if(a!=null)a.gB().h(0,s.gdl())
u=new D.E("mover",t,s.b,[U.aq])
u.b=!0
s.aQ(u)}},
$ibw:1,
$idA:1}
X.ec.prototype={}
V.fP.prototype={
a8:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
H.j(c,{func:1,ret:-1,args:[P.L]})
if(l.c==null)return
u=l.d.length
t=P.ep().gb0().i(0,l.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.e(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.fy(l.c).h(0,p)
n=W.mp("checkbox")
n.checked=s
o=W.q
W.a9(n,"change",H.j(new V.fQ(l,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.fy(l.c).h(0,q.createElement("br"))
C.a.h(l.d,n)
if(r)l.e2(u,s)},
t:function(a,b,c){return this.a8(a,b,c,!1)},
e2:function(a,b){var u,t,s,r,q,p=this.a,o=P.ep().gb0().i(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.b.kq(o,a-u+1,"0")
t=a>0?C.b.C(o,0,a):""
t+=H.C(b)?"1":"0"
u=a+1
if(u<o.length)t+=C.b.at(o,u)
s=P.ep()
u=P.h
r=P.mv(s.gb0(),u,u)
r.m(0,p,t)
q=s.d4(0,r)
p=window.history
u=q.j(0)
p.toString
p.replaceState(new P.f8([],[]).c0(""),"",u)},
sh0:function(a){this.d=H.k(a,"$ib",[W.cy],"$ab")}}
V.fQ.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.e2(u.d,t.checked)},
$S:13}
V.lu.prototype={
$1:function(a){H.d(a,"$ibl")
P.fw(C.j.f8(this.a.gk7(),2)+" fps")},
$S:55}
V.it.prototype={
a8:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.j(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.ep().gb0().i(0,H.o(u))
if(t==null)if(d){c.$0()
m.e1(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.fy(m.c).h(0,q)
o=W.mp("radio")
o.checked=s
o.name=u
u=W.q
W.a9(o,"change",H.j(new V.iu(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.fy(m.c).h(0,r.createElement("br"))},
t:function(a,b,c){return this.a8(a,b,c,!1)},
e1:function(a){var u,t,s=P.ep(),r=P.h,q=P.mv(s.gb0(),r,r)
q.m(0,this.a,a)
u=s.d4(0,q)
r=window.history
t=u.j(0)
r.toString
r.replaceState(new P.f8([],[]).c0(""),"",t)}}
V.iu.prototype={
$1:function(a){var u=this
if(H.C(u.b.checked)){u.c.$0()
u.a.e1(u.d)}},
$S:13}
V.iI.prototype={
ft:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.q
W.a9(q,"scroll",H.j(new V.iK(o),{func:1,ret:-1,args:[r]}),!1,r)},
e6:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.h],"$ab")
this.iN()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.kO(C.a.kc(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.H)(s),++q){p=s[q]
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
if(H.pR(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.M(m[1])
l.textContent=H.M(m[0])
t.appendChild(l)}else{k=P.kv(C.T,n,C.l,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.o(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
jH:function(a){var u,t,s,r,q,p,o,n="auto"
H.k(a,"$ib",[P.h],"$ab")
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
s=H.d(r.insertCell(-1),"$ibA").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<3;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.d(r.insertCell(-1),"$ibA")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
iN:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.j2()
t=P.h
u.siU(new H.aI([t,V.cU]))
u.sj_(new H.aI([t,V.d_]))
u.c=null
u.c=u.S(0,q)
t=u.S(0,q).F(0,p)
s=V.ay(new H.ad("*"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,p).F(0,p)
s=new V.bx()
r=[V.bu]
s.saE(H.f([],r))
C.a.h(t.a,s)
t=V.ay(new H.ad("*"))
C.a.h(s.a,t)
t=u.S(0,p).F(0,"BoldEnd")
s=V.ay(new H.ad("*"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,q).F(0,o)
s=V.ay(new H.ad("_"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,o).F(0,o)
s=new V.bx()
s.saE(H.f([],r))
C.a.h(t.a,s)
t=V.ay(new H.ad("_"))
C.a.h(s.a,t)
t=u.S(0,o).F(0,n)
s=V.ay(new H.ad("_"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,q).F(0,m)
s=V.ay(new H.ad("`"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,m).F(0,m)
s=new V.bx()
s.saE(H.f([],r))
C.a.h(t.a,s)
t=V.ay(new H.ad("`"))
C.a.h(s.a,t)
t=u.S(0,m).F(0,"CodeEnd")
s=V.ay(new H.ad("`"))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,q).F(0,l)
s=V.ay(new H.ad("["))
C.a.h(t.a,s)
t.c=!0
t=u.S(0,l).F(0,k)
s=V.ay(new H.ad("|"))
C.a.h(t.a,s)
s=u.S(0,l).F(0,j)
t=V.ay(new H.ad("]"))
C.a.h(s.a,t)
s.c=!0
s=u.S(0,l).F(0,l)
t=new V.bx()
t.saE(H.f([],r))
C.a.h(s.a,t)
s=V.ay(new H.ad("|]"))
C.a.h(t.a,s)
s=u.S(0,k).F(0,j)
t=V.ay(new H.ad("]"))
C.a.h(s.a,t)
s.c=!0
s=u.S(0,k).F(0,k)
t=new V.bx()
t.saE(H.f([],r))
C.a.h(s.a,t)
s=V.ay(new H.ad("|]"))
C.a.h(t.a,s)
C.a.h(u.S(0,q).F(0,i).a,new V.fA())
s=u.S(0,i).F(0,i)
t=new V.bx()
t.saE(H.f([],r))
C.a.h(s.a,t)
s=V.ay(new H.ad("*_`["))
C.a.h(t.a,s)
s=u.S(0,"BoldEnd")
s.d=s.a.bk(p)
s=u.S(0,n)
s.d=s.a.bk(o)
s=u.S(0,"CodeEnd")
s.d=s.a.bk(m)
s=u.S(0,j)
s.d=s.a.bk("Link")
s=u.S(0,i)
s.d=s.a.bk(i)
this.b=u}}
V.iK.prototype={
$1:function(a){P.mQ(C.t,new V.iJ(this.a))},
$S:13}
V.iJ.prototype={
$0:function(){var u=C.j.as(document.documentElement.scrollTop),t=this.a.style,s=H.o(-0.01*u)+"px"
t.top=s},
$S:0}
G.kU.prototype={
$1:function(a){var u
this.a.a=a
u=this.b.y.a
if(u.length>1)u[0].b=a},
$S:1}
G.kV.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.Q!==a){t.Q=a
u=new D.E("showFilled",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.kW.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.ch!==a){t.ch=a
u=new D.E("showWireFrame",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.l6.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.cx!==a){t.cx=a
u=new D.E("showVertices",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.lh.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.cy!==a){t.cy=a
u=new D.E("showNormals",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.lj.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.db!==a){t.db=a
u=new D.E("showBinormals",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.lk.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.dx!==a){t.dx=a
u=new D.E("showTangentals",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.ll.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fr!==a){t.fr=a
u=new D.E("showFaceCenters",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.lm.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fx!==a){t.fx=a
u=new D.E("showFaceNormals",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.ln.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fy!==a){t.fy=a
u=new D.E("showFaceBinormals",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.lo.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.go!==a){t.go=a
u=new D.E("showFaceTangentals",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.kX.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.id!==a){t.id=a
u=new D.E("showColorFill",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.kY.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k1!==a){t.k1=a
u=new D.E("showTxt2DColor",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.kZ.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.dy!==a){t.dy=a
u=new D.E("showTxtCube",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.l_.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k2!==a){t.k2=a
u=new D.E("showWeight",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.l0.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k3!==a){t.k3=a
u=new D.E("showAxis",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.l1.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k4!==a){t.k4=a
u=new D.E("showAABB",!a,a,[P.L])
u.b=!0
t.D(u)}},
$S:1}
G.lp.prototype={
$1:function(a){var u,t,s=E.h7(null)
s.sda(0,a.c)
u=a.y
t=H.j(new G.lq(s,this),{func:1,ret:-1,args:[H.u(u,0)]})
C.a.u(u.a,t)
return s},
$S:57}
G.lq.prototype={
$1:function(a){H.d(a,"$ia4")
this.a.y.h(0,this.b.$1(a))},
$S:58}
G.lr.prototype={
$1:function(a){var u=0,t=P.ai(null),s=this,r,q,p,o,n,m
var $async$$1=P.aj(function(b,c){if(b===1)return P.af(c,t)
while(true)switch(u){case 0:u=2
return P.au(O.e3(a,s.b.f),$async$$1)
case 2:m=c
m.kG(3.5)
r=s.c
q=r.y
p=q.a
if(p.length>0){o=H.u(q,0)
q.sdL(H.f([],[o]))
H.k(p,"$in",[o],"$an")
q=q.d
if(q!=null)q.$2(0,p)}r.y.h(0,m)
m.b=s.a.a
n=s.d.$1(m)
n.sb3(s.e)
r.y.h(0,n)
return P.ag(null,t)}})
return P.ah($async$$1,t)},
$S:59}
G.l2.prototype={
$0:function(){var u=0,t=P.ai(P.z),s=this
var $async$$0=P.aj(function(a,b){if(a===1)return P.af(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/Cube.obj")
return P.ag(null,t)}})
return P.ah($async$$0,t)},
$S:9}
G.l3.prototype={
$0:function(){var u=0,t=P.ai(P.z),s=this
var $async$$0=P.aj(function(a,b){if(a===1)return P.af(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/tree/tree.obj")
return P.ag(null,t)}})
return P.ah($async$$0,t)},
$S:9}
G.l4.prototype={
$0:function(){var u=0,t=P.ai(P.z),s=this
var $async$$0=P.aj(function(a,b){if(a===1)return P.af(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/Wolf.obj")
return P.ag(null,t)}})
return P.ah($async$$0,t)},
$S:9}
G.l5.prototype={
$0:function(){var u=0,t=P.ai(P.z),s=this
var $async$$0=P.aj(function(a,b){if(a===1)return P.af(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/plant/plant.obj")
return P.ag(null,t)}})
return P.ah($async$$0,t)},
$S:9}
G.l7.prototype={
$0:function(){this.a.sac(0.01)},
$S:0}
G.l8.prototype={
$0:function(){this.a.sac(0.02)},
$S:0}
G.l9.prototype={
$0:function(){this.a.sac(0.04)},
$S:0}
G.la.prototype={
$0:function(){this.a.sac(0.06)},
$S:0}
G.lb.prototype={
$0:function(){this.a.sac(0.08)},
$S:0}
G.lc.prototype={
$0:function(){this.a.sac(0.1)},
$S:0}
G.ld.prototype={
$0:function(){this.a.sac(0.2)},
$S:0}
G.le.prototype={
$0:function(){this.a.sac(0.4)},
$S:0}
G.lf.prototype={
$0:function(){this.a.sac(0.6)},
$S:0}
G.lg.prototype={
$0:function(){this.a.sac(0.8)},
$S:0}
G.li.prototype={
$0:function(){this.a.sac(1)},
$S:0};(function aliases(){var u=J.a.prototype
u.fl=u.j
u=J.dQ.prototype
u.fm=u.j
u=O.cI.prototype
u.de=u.aF
u.c3=u.aw
u=O.bh.prototype
u.df=u.aF
u.c4=u.aw
u=V.dW.prototype
u.fn=u.b_
u.dd=u.j})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"pr","oY",16)
u(P,"ps","oZ",16)
u(P,"pt","p_",16)
t(P,"no","pp",7)
s(P.ez.prototype,"ged",0,1,null,["$2","$1"],["aZ","ee"],33,0)
s(P.f9.prototype,"gjO",1,0,null,["$1","$0"],["ax","jP"],34,0)
var n
s(n=E.a4.prototype,"geU",0,0,null,["$1","$0"],["eV","kn"],3,0)
s(n,"geW",0,0,null,["$1","$0"],["eX","ko"],3,0)
s(n,"geS",0,0,null,["$1","$0"],["eT","km"],3,0)
s(n,"geQ",0,0,null,["$1","$0"],["eR","kj"],3,0)
r(n,"gkh","ki",12)
r(n,"gkk","kl",12)
s(n=E.ei.prototype,"gdh",0,0,null,["$1","$0"],["dj","di"],3,0)
q(n,"gkF","f5",7)
p(n=X.eq.prototype,"ghZ","i_",15)
p(n,"ghN","hO",15)
p(n,"ghT","hU",8)
p(n,"gi2","i3",23)
p(n,"gi0","i1",23)
p(n,"gi6","i7",8)
p(n,"gia","ib",8)
p(n,"ghX","hY",8)
p(n,"gi8","i9",8)
p(n,"ghV","hW",8)
p(n,"gic","ie",61)
p(n,"gig","ih",15)
p(n,"giu","iv",17)
p(n,"giq","ir",17)
p(n,"gis","it",17)
s(n=D.dS.prototype,"gdO",0,0,null,["$1","$0"],["dP","i4"],3,0)
p(n,"gij","ik",42)
r(n,"ghH","hI",24)
r(n,"gio","ip",24)
o(V.Y.prototype,"gk","cX",25)
o(V.a5.prototype,"gk","cX",25)
s(n=U.cE.prototype,"gaS",0,0,null,["$1","$0"],["T","ab"],3,0)
r(n,"ghF","hG",26)
r(n,"gil","im",26)
s(n=U.er.prototype,"gaS",0,0,null,["$1","$0"],["T","ab"],3,0)
p(n,"gci","cj",5)
p(n,"gck","cl",5)
p(n,"gcm","cn",5)
s(n=U.es.prototype,"gaS",0,0,null,["$1","$0"],["T","ab"],3,0)
p(n,"gci","cj",5)
p(n,"gck","cl",5)
p(n,"gcm","cn",5)
p(n,"ghu","hv",5)
p(n,"ghw","hx",5)
p(n,"gj4","j5",5)
p(n,"gj2","j3",5)
p(n,"gj0","j1",5)
p(U.et.prototype,"ghz","hA",5)
s(n=M.dI.prototype,"gau",0,0,null,["$1","$0"],["aA","fw"],3,0)
r(n,"ghP","hQ",12)
r(n,"ghR","hS",12)
p(n=O.dL.prototype,"giQ","iR",2)
s(n,"gjj",0,1,null,["$2$color","$1"],["e3","jk"],49,0)
p(n,"gfF","fG",2)
p(n,"ghD","hE",2)
p(n,"gfW","fX",2)
p(n,"giV","iW",2)
p(n,"gja","jb",2)
p(n,"ghe","hf",2)
p(n,"ghg","hh",2)
p(n,"ghc","hd",2)
p(n,"ghi","hj",2)
p(n,"gh2","h3",2)
p(n,"gj8","j9",2)
p(n,"gjh","ji",2)
p(n,"gds","fS",2)
p(n,"gdn","fK",2)
s(n=O.aX.prototype,"gbp",0,0,null,["$1","$0"],["D","c6"],3,0)
s(n,"giI",0,0,null,["$1","$0"],["dU","iJ"],3,0)
r(n,"ghJ","hK",27)
r(n,"ghL","hM",27)
s(O.cI.prototype,"gbp",0,0,null,["$1","$0"],["D","c6"],3,0)
s(X.e4.prototype,"gdl",0,0,null,["$1","$0"],["aQ","fJ"],3,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.lL,J.a,J.av,P.eN,P.n,H.dT,P.aP,H.c4,H.d9,H.fT,H.j7,P.bJ,H.cC,H.cz,H.f4,P.aw,H.hQ,H.hS,H.hL,H.eO,H.jF,P.fc,P.ew,P.ab,P.ez,P.bp,P.at,P.ex,P.cW,P.cX,P.iR,P.kk,P.bl,P.aC,P.ky,P.kh,P.db,P.kb,P.x,P.kq,P.hZ,P.c0,P.kx,P.kw,P.L,P.aM,P.ak,P.br,P.im,P.eb,P.eG,P.hg,P.b,P.A,P.z,P.dV,P.ae,P.h,P.az,P.ci,P.jl,P.ki,W.fW,W.cy,W.D,W.dK,P.kl,P.fh,P.kc,P.S,O.aa,O.cJ,E.fL,E.a4,E.iw,E.ei,Z.eu,Z.ev,Z.bH,Z.dy,Z.bL,Z.b6,D.fO,D.bK,D.B,O.kF,O.dp,O.kG,X.dz,X.dR,X.hO,X.hW,X.aN,X.ic,X.j3,X.eq,D.dE,D.ac,D.e5,D.ea,D.ef,D.eg,D.eh,V.a2,V.a0,V.h8,V.dY,V.aD,V.am,V.aE,V.e8,V.cc,V.Y,V.a5,U.er,U.es,U.et,M.dI,A.dv,A.fE,A.i3,A.d2,A.d6,A.d4,A.d7,A.d5,A.d8,A.c1,A.el,A.jf,F.N,F.aJ,F.by,F.an,F.iF,F.iG,F.iH,F.J,F.ju,F.jv,F.jy,F.jz,O.bP,O.cI,T.iZ,V.fA,V.bu,V.dW,V.iE,V.cU,V.ej,V.d_,V.j2,X.dA,X.ec,X.e4,V.fP,V.it,V.iI])
s(J.a,[J.hK,J.dP,J.dQ,J.aW,J.c8,J.bM,H.cM,H.bN,W.l,W.fz,W.bZ,W.cx,W.bc,W.bd,W.W,W.eA,W.h_,W.h0,W.eC,W.dH,W.eE,W.h2,W.q,W.eH,W.aV,W.hi,W.eJ,W.bs,W.hV,W.i6,W.eP,W.eQ,W.aY,W.eR,W.eU,W.aZ,W.eY,W.f_,W.b0,W.f0,W.b1,W.f5,W.aQ,W.fa,W.j1,W.b3,W.fd,W.j5,W.jq,W.fj,W.fl,W.fn,W.fp,W.fr,P.bg,P.eL,P.bj,P.eW,P.ir,P.f6,P.bm,P.ff,P.fF,P.ey,P.dw,P.e7,P.cd,P.e9,P.ed,P.em,P.f2])
s(J.dQ,[J.io,J.cf,J.bt])
t(J.lK,J.aW)
s(J.c8,[J.dO,J.dN])
t(P.hU,P.eN)
s(P.hU,[H.en,W.jP,W.jO,P.hc])
t(H.ad,H.en)
s(P.n,[H.h5,H.i_,H.jD])
s(P.aP,[H.i0,H.jE])
t(H.fU,H.fT)
s(P.bJ,[H.ij,H.hN,H.jj,H.j9,H.fN,H.iC,P.fD,P.cQ,P.ba,P.jk,P.jh,P.cV,P.fS,P.fZ])
s(H.cz,[H.lv,H.iV,H.hM,H.kP,H.kQ,H.kR,P.jL,P.jK,P.jM,P.jN,P.kp,P.ko,P.jI,P.jH,P.kz,P.kA,P.kK,P.jV,P.k2,P.jZ,P.k_,P.k0,P.jX,P.k1,P.jW,P.k5,P.k6,P.k4,P.k3,P.iS,P.iT,P.kI,P.kf,P.ke,P.kg,P.hT,P.hY,P.h3,P.h4,P.jp,P.jm,P.jn,P.jo,P.kr,P.ks,P.ku,P.kt,P.kC,P.kB,P.kD,P.kE,W.hj,W.hk,W.i8,W.ia,W.iB,W.iQ,W.jU,P.km,P.kL,P.hd,P.he,P.fH,E.ix,E.iy,E.iz,E.j0,D.h9,D.ha,F.jB,F.jA,F.jw,F.jx,O.hw,O.hx,O.hH,O.hG,O.hI,O.hJ,O.hC,O.hv,O.ho,O.hy,O.hB,O.hs,O.ht,O.hr,O.hu,O.hp,O.hq,O.hz,O.hA,O.hD,O.hE,O.hF,O.hn,O.hm,T.j_,V.fQ,V.lu,V.iu,V.iK,V.iJ,G.kU,G.kV,G.kW,G.l6,G.lh,G.lj,G.lk,G.ll,G.lm,G.ln,G.lo,G.kX,G.kY,G.kZ,G.l_,G.l0,G.l1,G.lp,G.lq,G.lr,G.l2,G.l3,G.l4,G.l5,G.l7,G.l8,G.l9,G.la,G.lb,G.lc,G.ld,G.le,G.lf,G.lg,G.li])
s(H.iV,[H.iO,H.cv])
t(H.jG,P.fD)
t(P.hX,P.aw)
t(H.aI,P.hX)
t(H.hR,H.h5)
t(H.e0,H.bN)
s(H.e0,[H.dc,H.de])
t(H.dd,H.dc)
t(H.cN,H.dd)
t(H.df,H.de)
t(H.e1,H.df)
s(H.e1,[H.id,H.ie,H.ig,H.ih,H.ii,H.e2,H.cO])
s(P.ez,[P.jJ,P.f9])
t(P.kd,P.ky)
t(P.ka,P.kh)
t(P.fi,P.hZ)
t(P.eo,P.fi)
s(P.c0,[P.fJ,P.h6])
t(P.c3,P.iR)
s(P.c3,[P.fK,P.jt,P.js])
t(P.jr,P.h6)
s(P.ak,[P.F,P.p])
s(P.ba,[P.cb,P.hl])
t(P.jR,P.ci)
s(W.l,[W.I,W.hb,W.cF,W.cK,W.b_,W.dg,W.b2,W.aR,W.di,W.jC,W.da,P.fI,P.bY])
s(W.I,[W.a6,W.bI])
s(W.a6,[W.w,P.v])
s(W.w,[W.fB,W.fC,W.c_,W.dF,W.hf,W.cG,W.cH,W.iD,W.bA])
s(W.bc,[W.cA,W.fX,W.fY])
t(W.fV,W.bd)
t(W.cB,W.eA)
t(W.eD,W.eC)
t(W.dG,W.eD)
t(W.eF,W.eE)
t(W.h1,W.eF)
t(W.aO,W.bZ)
t(W.eI,W.eH)
t(W.cD,W.eI)
t(W.eK,W.eJ)
t(W.c5,W.eK)
t(W.be,W.cF)
s(W.q,[W.bQ,W.bk])
s(W.bQ,[W.bf,W.ap,W.b4])
t(W.i7,W.eP)
t(W.i9,W.eQ)
t(W.eS,W.eR)
t(W.ib,W.eS)
t(W.eV,W.eU)
t(W.cP,W.eV)
t(W.eZ,W.eY)
t(W.ip,W.eZ)
t(W.iA,W.f_)
t(W.dh,W.dg)
t(W.iL,W.dh)
t(W.f1,W.f0)
t(W.iM,W.f1)
t(W.iP,W.f5)
t(W.fb,W.fa)
t(W.iW,W.fb)
t(W.dj,W.di)
t(W.iX,W.dj)
t(W.fe,W.fd)
t(W.j4,W.fe)
t(W.bo,W.ap)
t(W.fk,W.fj)
t(W.jQ,W.fk)
t(W.eB,W.dH)
t(W.fm,W.fl)
t(W.k7,W.fm)
t(W.fo,W.fn)
t(W.eT,W.fo)
t(W.fq,W.fp)
t(W.kj,W.fq)
t(W.fs,W.fr)
t(W.kn,W.fs)
t(W.jS,P.cW)
t(W.lY,W.jS)
t(W.jT,P.cX)
t(P.f8,P.kl)
t(P.ax,P.kc)
t(P.eM,P.eL)
t(P.hP,P.eM)
t(P.eX,P.eW)
t(P.ik,P.eX)
t(P.f7,P.f6)
t(P.iU,P.f7)
t(P.fg,P.ff)
t(P.j6,P.fg)
t(P.fG,P.ey)
t(P.il,P.bY)
t(P.f3,P.f2)
t(P.iN,P.f3)
s(E.fL,[Z.dx,A.cT,T.cZ])
s(D.B,[D.c6,D.c7,D.E,O.is,X.iq])
s(X.iq,[X.dU,X.bv,X.cL,X.ek])
s(O.aa,[D.dS,U.cE])
s(D.fO,[U.fR,U.aq,F.ce])
t(U.dC,U.aq)
s(A.cT,[A.dM,A.dX])
s(A.el,[A.R,A.jc,A.jd,A.je,A.ja,A.a3,A.jb,A.P,A.d1,A.jg,A.d3,A.aA,A.aF,A.aG])
s(O.bP,[O.dL,O.aX])
s(O.cI,[O.i1,O.i2,O.bh])
s(O.bh,[O.i4,O.i5])
t(T.ee,T.cZ)
t(T.iY,T.ee)
s(V.dW,[V.bx,V.d0])
t(X.hh,X.ec)
u(H.en,H.d9)
u(H.dc,P.x)
u(H.dd,H.c4)
u(H.de,P.x)
u(H.df,H.c4)
u(P.eN,P.x)
u(P.fi,P.kq)
u(W.eA,W.fW)
u(W.eC,P.x)
u(W.eD,W.D)
u(W.eE,P.x)
u(W.eF,W.D)
u(W.eH,P.x)
u(W.eI,W.D)
u(W.eJ,P.x)
u(W.eK,W.D)
u(W.eP,P.aw)
u(W.eQ,P.aw)
u(W.eR,P.x)
u(W.eS,W.D)
u(W.eU,P.x)
u(W.eV,W.D)
u(W.eY,P.x)
u(W.eZ,W.D)
u(W.f_,P.aw)
u(W.dg,P.x)
u(W.dh,W.D)
u(W.f0,P.x)
u(W.f1,W.D)
u(W.f5,P.aw)
u(W.fa,P.x)
u(W.fb,W.D)
u(W.di,P.x)
u(W.dj,W.D)
u(W.fd,P.x)
u(W.fe,W.D)
u(W.fj,P.x)
u(W.fk,W.D)
u(W.fl,P.x)
u(W.fm,W.D)
u(W.fn,P.x)
u(W.fo,W.D)
u(W.fp,P.x)
u(W.fq,W.D)
u(W.fr,P.x)
u(W.fs,W.D)
u(P.eL,P.x)
u(P.eM,W.D)
u(P.eW,P.x)
u(P.eX,W.D)
u(P.f6,P.x)
u(P.f7,W.D)
u(P.ff,P.x)
u(P.fg,W.D)
u(P.ey,P.aw)
u(P.f2,P.x)
u(P.f3,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.c_.prototype
C.N=W.be.prototype
C.O=J.a.prototype
C.a=J.aW.prototype
C.P=J.dN.prototype
C.e=J.dO.prototype
C.m=J.dP.prototype
C.j=J.c8.prototype
C.b=J.bM.prototype
C.Q=J.bt.prototype
C.W=W.cP.prototype
C.A=J.io.prototype
C.c=P.cd.prototype
C.u=J.cf.prototype
C.B=W.bo.prototype
C.C=W.da.prototype
C.X=new P.fK()
C.D=new P.fJ()
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

C.K=new P.im()
C.l=new P.jr()
C.L=new P.jt()
C.k=new P.kd()
C.d=new A.c1(0,"ColorSourceType.None")
C.i=new A.c1(1,"ColorSourceType.Solid")
C.f=new A.c1(2,"ColorSourceType.Texture2D")
C.h=new A.c1(3,"ColorSourceType.TextureCube")
C.t=new P.br(0)
C.M=new P.br(5e6)
C.x=H.f(u([127,2047,65535,1114111]),[P.p])
C.o=H.f(u([0,0,32776,33792,1,10240,0,0]),[P.p])
C.p=H.f(u([0,0,65490,45055,65535,34815,65534,18431]),[P.p])
C.q=H.f(u([0,0,26624,1023,65534,2047,65534,2047]),[P.p])
C.S=H.f(u([0,0,32722,12287,65534,34815,65534,18431]),[P.p])
C.T=H.f(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.r=H.f(u([0,0,24576,1023,65534,34815,65534,18431]),[P.p])
C.y=H.f(u([0,0,32754,11263,65534,34815,65534,18431]),[P.p])
C.U=H.f(u([0,0,32722,12287,65535,34815,65534,18431]),[P.p])
C.z=H.f(u([0,0,65490,12287,65535,34815,65534,18431]),[P.p])
C.R=H.f(u([]),[P.h])
C.V=new H.fU(0,{},C.R,[P.h,P.h])})()
var v={mangledGlobalNames:{p:"int",F:"double",ak:"num",h:"String",L:"bool",z:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.z},{func:1,ret:P.z,args:[P.L]},{func:1,ret:F.an,args:[F.an]},{func:1,ret:-1,opt:[D.B]},{func:1,ret:P.z,args:[F.N]},{func:1,ret:-1,args:[D.B]},{func:1,ret:P.z,args:[F.J]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ap]},{func:1,ret:[P.ab,P.z]},{func:1,ret:P.z,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.p,[P.n,E.a4]]},{func:1,ret:P.z,args:[W.q]},{func:1,ret:P.z,args:[D.B]},{func:1,ret:-1,args:[W.q]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.h,args:[P.p]},{func:1,args:[,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.z,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:-1,args:[P.p,[P.n,D.ac]]},{func:1,ret:P.F},{func:1,ret:-1,args:[P.p,[P.n,U.aq]]},{func:1,ret:-1,args:[P.p,[P.n,V.aD]]},{func:1,ret:P.z,args:[P.h]},{func:1,args:[W.q]},{func:1,ret:P.L,args:[W.I]},{func:1,ret:W.a6,args:[W.I]},{func:1,ret:P.z,args:[P.p,,]},{func:1,ret:-1,args:[P.O],opt:[P.ae]},{func:1,ret:-1,opt:[P.O]},{func:1,ret:P.z,args:[P.ak]},{func:1,ret:P.z,args:[,],opt:[P.ae]},{func:1,ret:[P.at,,],args:[,]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,args:[P.h]},{func:1,ret:[P.A,P.h,P.h],args:[[P.A,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.h,P.p]},{func:1,ret:P.L,args:[[P.n,D.ac]]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,args:[,P.h]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[,]},{func:1,ret:P.z,args:[P.h,,]},{func:1,ret:F.an,args:[F.an],named:{color:V.a0}},{func:1,ret:P.S,args:[P.p]},{func:1,ret:-1,args:[F.J,F.J]},{func:1,ret:P.z,args:[F.aJ]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.h,args:[W.be]},{func:1,ret:P.z,args:[P.bl]},{func:1,ret:P.z,args:[W.bk]},{func:1,ret:E.a4,args:[E.a4]},{func:1,ret:P.z,args:[E.a4]},{func:1,ret:[P.ab,,],args:[P.h]},{func:1,ret:P.z,args:[,P.ae]},{func:1,ret:-1,args:[W.bo]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.bb=0
$.cw=null
$.mj=null
$.m1=!1
$.nu=null
$.nm=null
$.nz=null
$.kM=null
$.kS=null
$.m7=null
$.ck=null
$.dm=null
$.dn=null
$.m2=!1
$.T=C.k
$.aK=[]
$.ni=null
$.mA=null
$.mE=null
$.cR=null
$.mJ=null
$.mM=null
$.mW=null
$.n_=null
$.mY=null
$.mZ=null
$.mX=null
$.mD=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pZ","nE",function(){return H.ns("_$dart_dartClosure")})
u($,"q_","mc",function(){return H.ns("_$dart_js")})
u($,"q3","nF",function(){return H.bn(H.j8({
toString:function(){return"$receiver$"}}))})
u($,"q4","nG",function(){return H.bn(H.j8({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q5","nH",function(){return H.bn(H.j8(null))})
u($,"q6","nI",function(){return H.bn(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q9","nL",function(){return H.bn(H.j8(void 0))})
u($,"qa","nM",function(){return H.bn(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q8","nK",function(){return H.bn(H.mS(null))})
u($,"q7","nJ",function(){return H.bn(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qc","nO",function(){return H.bn(H.mS(void 0))})
u($,"qb","nN",function(){return H.bn(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qs","md",function(){return P.oX()})
u($,"qe","nP",function(){return P.oU()})
u($,"qt","nT",function(){return H.os(H.cj(H.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"qu","nU",function(){return P.lR("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qv","nV",function(){return P.pi()})
u($,"ql","nS",function(){return Z.aS(0)})
u($,"qf","nQ",function(){return Z.aS(511)})
u($,"qn","b9",function(){return Z.aS(1)})
u($,"qm","b8",function(){return Z.aS(2)})
u($,"qh","b7",function(){return Z.aS(4)})
u($,"qo","bF",function(){return Z.aS(8)})
u($,"qp","bG",function(){return Z.aS(16)})
u($,"qi","bW",function(){return Z.aS(32)})
u($,"qj","ds",function(){return Z.aS(64)})
u($,"qk","nR",function(){return Z.aS(96)})
u($,"qq","cu",function(){return Z.aS(128)})
u($,"qg","bE",function(){return Z.aS(256)})
u($,"pY","nD",function(){return new V.h8(1e-9)})
u($,"pX","Q",function(){return $.nD()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cM,DataView:H.bN,ArrayBufferView:H.bN,Float32Array:H.cN,Float64Array:H.cN,Int16Array:H.id,Int32Array:H.ie,Int8Array:H.ig,Uint16Array:H.ih,Uint32Array:H.ii,Uint8ClampedArray:H.e2,CanvasPixelArray:H.e2,Uint8Array:H.cO,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLBaseElement:W.w,HTMLBodyElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTableElement:W.w,HTMLTableRowElement:W.w,HTMLTableSectionElement:W.w,HTMLTemplateElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fz,HTMLAnchorElement:W.fB,HTMLAreaElement:W.fC,Blob:W.bZ,HTMLCanvasElement:W.c_,CanvasRenderingContext2D:W.cx,CDATASection:W.bI,CharacterData:W.bI,Comment:W.bI,ProcessingInstruction:W.bI,Text:W.bI,CSSNumericValue:W.cA,CSSUnitValue:W.cA,CSSPerspective:W.fV,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cB,MSStyleCSSProperties:W.cB,CSS2Properties:W.cB,CSSImageValue:W.bc,CSSKeywordValue:W.bc,CSSPositionValue:W.bc,CSSResourceValue:W.bc,CSSURLImageValue:W.bc,CSSStyleValue:W.bc,CSSMatrixComponent:W.bd,CSSRotation:W.bd,CSSScale:W.bd,CSSSkew:W.bd,CSSTranslation:W.bd,CSSTransformComponent:W.bd,CSSTransformValue:W.fX,CSSUnparsedValue:W.fY,DataTransferItemList:W.h_,HTMLDivElement:W.dF,DOMException:W.h0,ClientRectList:W.dG,DOMRectList:W.dG,DOMRectReadOnly:W.dH,DOMStringList:W.h1,DOMTokenList:W.h2,Element:W.a6,AbortPaymentEvent:W.q,AnimationEvent:W.q,AnimationPlaybackEvent:W.q,ApplicationCacheErrorEvent:W.q,BackgroundFetchClickEvent:W.q,BackgroundFetchEvent:W.q,BackgroundFetchFailEvent:W.q,BackgroundFetchedEvent:W.q,BeforeInstallPromptEvent:W.q,BeforeUnloadEvent:W.q,BlobEvent:W.q,CanMakePaymentEvent:W.q,ClipboardEvent:W.q,CloseEvent:W.q,CustomEvent:W.q,DeviceMotionEvent:W.q,DeviceOrientationEvent:W.q,ErrorEvent:W.q,ExtendableEvent:W.q,ExtendableMessageEvent:W.q,FetchEvent:W.q,FontFaceSetLoadEvent:W.q,ForeignFetchEvent:W.q,GamepadEvent:W.q,HashChangeEvent:W.q,InstallEvent:W.q,MediaEncryptedEvent:W.q,MediaKeyMessageEvent:W.q,MediaQueryListEvent:W.q,MediaStreamEvent:W.q,MediaStreamTrackEvent:W.q,MessageEvent:W.q,MIDIConnectionEvent:W.q,MIDIMessageEvent:W.q,MutationEvent:W.q,NotificationEvent:W.q,PageTransitionEvent:W.q,PaymentRequestEvent:W.q,PaymentRequestUpdateEvent:W.q,PopStateEvent:W.q,PresentationConnectionAvailableEvent:W.q,PresentationConnectionCloseEvent:W.q,PromiseRejectionEvent:W.q,PushEvent:W.q,RTCDataChannelEvent:W.q,RTCDTMFToneChangeEvent:W.q,RTCPeerConnectionIceEvent:W.q,RTCTrackEvent:W.q,SecurityPolicyViolationEvent:W.q,SensorErrorEvent:W.q,SpeechRecognitionError:W.q,SpeechRecognitionEvent:W.q,SpeechSynthesisEvent:W.q,StorageEvent:W.q,SyncEvent:W.q,TrackEvent:W.q,TransitionEvent:W.q,WebKitTransitionEvent:W.q,VRDeviceEvent:W.q,VRDisplayEvent:W.q,VRSessionEvent:W.q,MojoInterfaceRequestEvent:W.q,USBConnectionEvent:W.q,IDBVersionChangeEvent:W.q,AudioProcessingEvent:W.q,OfflineAudioCompletionEvent:W.q,WebGLContextEvent:W.q,Event:W.q,InputEvent:W.q,AbsoluteOrientationSensor:W.l,Accelerometer:W.l,AccessibleNode:W.l,AmbientLightSensor:W.l,Animation:W.l,ApplicationCache:W.l,DOMApplicationCache:W.l,OfflineResourceList:W.l,BackgroundFetchRegistration:W.l,BatteryManager:W.l,BroadcastChannel:W.l,CanvasCaptureMediaStreamTrack:W.l,DedicatedWorkerGlobalScope:W.l,EventSource:W.l,FileReader:W.l,FontFaceSet:W.l,Gyroscope:W.l,LinearAccelerationSensor:W.l,Magnetometer:W.l,MediaDevices:W.l,MediaKeySession:W.l,MediaQueryList:W.l,MediaRecorder:W.l,MediaSource:W.l,MediaStream:W.l,MediaStreamTrack:W.l,MIDIAccess:W.l,MIDIInput:W.l,MIDIOutput:W.l,MIDIPort:W.l,NetworkInformation:W.l,Notification:W.l,OffscreenCanvas:W.l,OrientationSensor:W.l,PaymentRequest:W.l,Performance:W.l,PermissionStatus:W.l,PresentationAvailability:W.l,PresentationConnection:W.l,PresentationConnectionList:W.l,PresentationRequest:W.l,RelativeOrientationSensor:W.l,RemotePlayback:W.l,RTCDataChannel:W.l,DataChannel:W.l,RTCDTMFSender:W.l,RTCPeerConnection:W.l,webkitRTCPeerConnection:W.l,mozRTCPeerConnection:W.l,ScreenOrientation:W.l,Sensor:W.l,ServiceWorker:W.l,ServiceWorkerContainer:W.l,ServiceWorkerGlobalScope:W.l,ServiceWorkerRegistration:W.l,SharedWorker:W.l,SharedWorkerGlobalScope:W.l,SpeechRecognition:W.l,SpeechSynthesis:W.l,SpeechSynthesisUtterance:W.l,VR:W.l,VRDevice:W.l,VRDisplay:W.l,VRSession:W.l,VisualViewport:W.l,WebSocket:W.l,Worker:W.l,WorkerGlobalScope:W.l,WorkerPerformance:W.l,BluetoothDevice:W.l,BluetoothRemoteGATTCharacteristic:W.l,Clipboard:W.l,MojoInterfaceInterceptor:W.l,USB:W.l,IDBDatabase:W.l,IDBOpenDBRequest:W.l,IDBVersionChangeRequest:W.l,IDBRequest:W.l,IDBTransaction:W.l,AnalyserNode:W.l,RealtimeAnalyserNode:W.l,AudioBufferSourceNode:W.l,AudioDestinationNode:W.l,AudioNode:W.l,AudioScheduledSourceNode:W.l,AudioWorkletNode:W.l,BiquadFilterNode:W.l,ChannelMergerNode:W.l,AudioChannelMerger:W.l,ChannelSplitterNode:W.l,AudioChannelSplitter:W.l,ConstantSourceNode:W.l,ConvolverNode:W.l,DelayNode:W.l,DynamicsCompressorNode:W.l,GainNode:W.l,AudioGainNode:W.l,IIRFilterNode:W.l,MediaElementAudioSourceNode:W.l,MediaStreamAudioDestinationNode:W.l,MediaStreamAudioSourceNode:W.l,OscillatorNode:W.l,Oscillator:W.l,PannerNode:W.l,AudioPannerNode:W.l,webkitAudioPannerNode:W.l,ScriptProcessorNode:W.l,JavaScriptAudioNode:W.l,StereoPannerNode:W.l,WaveShaperNode:W.l,EventTarget:W.l,File:W.aO,FileList:W.cD,FileWriter:W.hb,HTMLFormElement:W.hf,Gamepad:W.aV,History:W.hi,HTMLCollection:W.c5,HTMLFormControlsCollection:W.c5,HTMLOptionsCollection:W.c5,XMLHttpRequest:W.be,XMLHttpRequestUpload:W.cF,XMLHttpRequestEventTarget:W.cF,ImageData:W.bs,HTMLImageElement:W.cG,HTMLInputElement:W.cH,KeyboardEvent:W.bf,Location:W.hV,MediaList:W.i6,MessagePort:W.cK,MIDIInputMap:W.i7,MIDIOutputMap:W.i9,MimeType:W.aY,MimeTypeArray:W.ib,PointerEvent:W.ap,MouseEvent:W.ap,DragEvent:W.ap,Document:W.I,DocumentFragment:W.I,HTMLDocument:W.I,ShadowRoot:W.I,XMLDocument:W.I,Attr:W.I,DocumentType:W.I,Node:W.I,NodeList:W.cP,RadioNodeList:W.cP,Plugin:W.aZ,PluginArray:W.ip,ProgressEvent:W.bk,ResourceProgressEvent:W.bk,RTCStatsReport:W.iA,HTMLSelectElement:W.iD,SourceBuffer:W.b_,SourceBufferList:W.iL,SpeechGrammar:W.b0,SpeechGrammarList:W.iM,SpeechRecognitionResult:W.b1,Storage:W.iP,CSSStyleSheet:W.aQ,StyleSheet:W.aQ,HTMLTableCellElement:W.bA,HTMLTableDataCellElement:W.bA,HTMLTableHeaderCellElement:W.bA,TextTrack:W.b2,TextTrackCue:W.aR,VTTCue:W.aR,TextTrackCueList:W.iW,TextTrackList:W.iX,TimeRanges:W.j1,Touch:W.b3,TouchEvent:W.b4,TouchList:W.j4,TrackDefaultList:W.j5,CompositionEvent:W.bQ,FocusEvent:W.bQ,TextEvent:W.bQ,UIEvent:W.bQ,URL:W.jq,VideoTrackList:W.jC,WheelEvent:W.bo,Window:W.da,DOMWindow:W.da,CSSRuleList:W.jQ,ClientRect:W.eB,DOMRect:W.eB,GamepadList:W.k7,NamedNodeMap:W.eT,MozNamedAttrMap:W.eT,SpeechRecognitionResultList:W.kj,StyleSheetList:W.kn,SVGLength:P.bg,SVGLengthList:P.hP,SVGNumber:P.bj,SVGNumberList:P.ik,SVGPointList:P.ir,SVGStringList:P.iU,SVGAElement:P.v,SVGAnimateElement:P.v,SVGAnimateMotionElement:P.v,SVGAnimateTransformElement:P.v,SVGAnimationElement:P.v,SVGCircleElement:P.v,SVGClipPathElement:P.v,SVGDefsElement:P.v,SVGDescElement:P.v,SVGDiscardElement:P.v,SVGEllipseElement:P.v,SVGFEBlendElement:P.v,SVGFEColorMatrixElement:P.v,SVGFEComponentTransferElement:P.v,SVGFECompositeElement:P.v,SVGFEConvolveMatrixElement:P.v,SVGFEDiffuseLightingElement:P.v,SVGFEDisplacementMapElement:P.v,SVGFEDistantLightElement:P.v,SVGFEFloodElement:P.v,SVGFEFuncAElement:P.v,SVGFEFuncBElement:P.v,SVGFEFuncGElement:P.v,SVGFEFuncRElement:P.v,SVGFEGaussianBlurElement:P.v,SVGFEImageElement:P.v,SVGFEMergeElement:P.v,SVGFEMergeNodeElement:P.v,SVGFEMorphologyElement:P.v,SVGFEOffsetElement:P.v,SVGFEPointLightElement:P.v,SVGFESpecularLightingElement:P.v,SVGFESpotLightElement:P.v,SVGFETileElement:P.v,SVGFETurbulenceElement:P.v,SVGFilterElement:P.v,SVGForeignObjectElement:P.v,SVGGElement:P.v,SVGGeometryElement:P.v,SVGGraphicsElement:P.v,SVGImageElement:P.v,SVGLineElement:P.v,SVGLinearGradientElement:P.v,SVGMarkerElement:P.v,SVGMaskElement:P.v,SVGMetadataElement:P.v,SVGPathElement:P.v,SVGPatternElement:P.v,SVGPolygonElement:P.v,SVGPolylineElement:P.v,SVGRadialGradientElement:P.v,SVGRectElement:P.v,SVGScriptElement:P.v,SVGSetElement:P.v,SVGStopElement:P.v,SVGStyleElement:P.v,SVGElement:P.v,SVGSVGElement:P.v,SVGSwitchElement:P.v,SVGSymbolElement:P.v,SVGTSpanElement:P.v,SVGTextContentElement:P.v,SVGTextElement:P.v,SVGTextPathElement:P.v,SVGTextPositioningElement:P.v,SVGTitleElement:P.v,SVGUseElement:P.v,SVGViewElement:P.v,SVGGradientElement:P.v,SVGComponentTransferFunctionElement:P.v,SVGFEDropShadowElement:P.v,SVGMPathElement:P.v,SVGTransform:P.bm,SVGTransformList:P.j6,AudioBuffer:P.fF,AudioParamMap:P.fG,AudioTrackList:P.fI,AudioContext:P.bY,webkitAudioContext:P.bY,BaseAudioContext:P.bY,OfflineAudioContext:P.il,WebGLBuffer:P.dw,WebGLProgram:P.e7,WebGL2RenderingContext:P.cd,WebGLShader:P.e9,WebGLTexture:P.ed,WebGLUniformLocation:P.em,SQLResultSetRowList:P.iN})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e0.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.e1.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(G.nx,[])
else G.nx([])})})()
//# sourceMappingURL=test.dart.js.map
