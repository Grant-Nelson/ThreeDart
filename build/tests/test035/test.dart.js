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
a[c]=function(){a[c]=function(){H.on(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kH(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={km:function km(){},
jN:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
kZ:function(){return new P.dG("No element")},
mL:function(){return new P.dG("Too few elements")},
a5:function a5(a){this.a=a},
fq:function fq(){},
dl:function dl(a,b,c){var _=this
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
iG:function iG(a,b,c){this.a=a
this.b=b
this.$ti=c},
iH:function iH(a,b,c){this.a=a
this.b=b
this.$ti=c},
bP:function bP(){},
cI:function cI(){},
dS:function dS(){},
mD:function(){throw H.c(P.F("Cannot modify unmodifiable Map"))},
c8:function(a){var u,t=H.M(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
o4:function(a){return v.types[H.af(a)]},
oa:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iI},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.c(H.aE(a))
return u},
ct:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
n5:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.M(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ad(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.G(s,q)|32)>t)return}return parseInt(a,b)},
bU:function(a){return H.mX(a)+H.kE(H.bF(a),0,null)},
mX:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.N||!!n.$ibC){r=C.v(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c8(t.length>1&&C.b.G(t,0)===36?C.b.aB(t,1):t)},
mY:function(){if(!!self.location)return self.location.href
return},
lb:function(a){var u,t,s,r,q
H.jT(a)
u=J.aG(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
n6:function(a){var u,t,s,r=H.d([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aE(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.aI(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aE(s))}return H.lb(r)},
lc:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aE(s))
if(s<0)throw H.c(H.aE(s))
if(s>65535)return H.n6(a)}return H.lb(a)},
n7:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dy:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aI(u,10))>>>0,56320|u&1023)}}throw H.c(P.ad(a,0,1114111,null,null))},
bT:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n4:function(a){var u=H.bT(a).getFullYear()+0
return u},
n2:function(a){var u=H.bT(a).getMonth()+1
return u},
mZ:function(a){var u=H.bT(a).getDate()+0
return u},
n_:function(a){var u=H.bT(a).getHours()+0
return u},
n1:function(a){var u=H.bT(a).getMinutes()+0
return u},
n3:function(a){var u=H.bT(a).getSeconds()+0
return u},
n0:function(a){var u=H.bT(a).getMilliseconds()+0
return u},
r:function(a){throw H.c(H.aE(a))},
e:function(a,b){if(a==null)J.aG(a)
throw H.c(H.c3(a,b))},
c3:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aV(!0,b,s,null)
u=H.af(J.aG(a))
if(!(b<0)){if(typeof u!=="number")return H.r(u)
t=b>=u}else t=!0
if(t)return P.X(b,a,s,null,u)
return P.dA(b,s)},
nX:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bV(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bV(a,c,!0,b,"end",u)
return new P.aV(!0,b,"end",null)},
aE:function(a){return new P.aV(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.dv()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m6})
u.name=""}else u.toString=H.m6
return u},
m6:function(){return J.as(this.dartException)},
u:function(a){throw H.c(a)},
E:function(a){throw H.c(P.bM(a))},
b8:function(a){var u,t,s,r,q,p
a=H.m4(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lk:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
l6:function(a,b){return new H.hh(a,b==null?null:b.method)},
kn:function(a,b){var u=b==null,t=u?null:b.method
return new H.fI(a,t,u?null:b.receiver)},
aF:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.k9(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.aI(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kn(H.m(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.l6(H.m(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m9()
q=$.ma()
p=$.mb()
o=$.mc()
n=$.mf()
m=$.mg()
l=$.me()
$.md()
k=$.mi()
j=$.mh()
i=r.a9(u)
if(i!=null)return f.$1(H.kn(H.M(u),i))
else{i=q.a9(u)
if(i!=null){i.method="call"
return f.$1(H.kn(H.M(u),i))}else{i=p.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=n.a9(u)
if(i==null){i=m.a9(u)
if(i==null){i=l.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=k.a9(u)
if(i==null){i=j.a9(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.l6(H.M(u),i))}}return f.$1(new H.ig(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dF()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aV(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dF()
return a},
c6:function(a){var u
if(a==null)return new H.ev(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ev(a)},
o0:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
o9:function(a,b,c,d,e,f){H.f(a,"$ikh")
switch(H.af(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.x("Unsupported number of arguments for wrapped closure"))},
c2:function(a,b){var u
H.af(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o9)
a.$identity=u
return u},
mC:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hK().constructor.prototype):Object.create(new H.ca(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aW
if(typeof t!=="number")return t.n()
$.aW=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kX(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.o4,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kV:H.ke
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kX(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
mz:function(a,b,c,d){var u=H.ke
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kX:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mB(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mz(t,!r,u,b)
if(t===0){r=$.aW
if(typeof r!=="number")return r.n()
$.aW=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cb
return new Function(r+H.m(q==null?$.cb=H.f8("self"):q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aW
if(typeof r!=="number")return r.n()
$.aW=r+1
o+=r
r="return function("+o+"){return this."
q=$.cb
return new Function(r+H.m(q==null?$.cb=H.f8("self"):q)+"."+H.m(u)+"("+o+");}")()},
mA:function(a,b,c,d){var u=H.ke,t=H.kV
switch(b?-1:a){case 0:throw H.c(H.nb("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mB:function(a,b){var u,t,s,r,q,p,o,n=$.cb
if(n==null)n=$.cb=H.f8("self")
u=$.kU
if(u==null)u=$.kU=H.f8("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mA(s,!q,t,b)
if(s===1){n="return function(){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+");"
u=$.aW
if(typeof u!=="number")return u.n()
$.aW=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+", "+o+");"
u=$.aW
if(typeof u!=="number")return u.n()
$.aW=u+1
return new Function(n+u+"}")()},
kH:function(a,b,c,d,e,f,g){return H.mC(a,b,H.af(c),d,!!e,!!f,g)},
ke:function(a){return a.a},
kV:function(a){return a.c},
f8:function(a){var u,t,s,r=new H.ca("self","target","receiver","name"),q=J.kk(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
C:function(a){if(a==null)H.nR("boolean expression must not be null")
return a},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aU(a,"String"))},
nY:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aU(a,"double"))},
of:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aU(a,"num"))},
lR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aU(a,"bool"))},
af:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aU(a,"int"))},
m2:function(a,b){throw H.c(H.aU(a,H.c8(H.M(b).substring(2))))},
oh:function(a,b){throw H.c(H.my(a,H.c8(H.M(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.m2(a,b)},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.oh(a,b)},
jT:function(a){if(a==null)return a
if(!!J.W(a).$ib)return a
throw H.c(H.aU(a,"List<dynamic>"))},
m_:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.m2(a,b)},
lW:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.af(u)]
else return a.$S()}return},
eR:function(a,b){var u
if(typeof a=="function")return!0
u=H.lW(J.W(a))
if(u==null)return!1
return H.lG(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.kB)return a
$.kB=!0
try{if(H.eR(a,b))return a
u=H.k3(b)
t=H.aU(a,u)
throw H.c(t)}finally{$.kB=!1}},
kI:function(a,b){if(a!=null&&!H.kG(a,b))H.u(H.aU(a,H.k3(b)))
return a},
aU:function(a,b){return new H.i3("TypeError: "+P.de(a)+": type '"+H.lM(a)+"' is not a subtype of type '"+b+"'")},
my:function(a,b){return new H.f9("CastError: "+P.de(a)+": type '"+H.lM(a)+"' is not a subtype of type '"+b+"'")},
lM:function(a){var u,t=J.W(a)
if(!!t.$icc){u=H.lW(t)
if(u!=null)return H.k3(u)
return"Closure"}return H.bU(a)},
nR:function(a){throw H.c(new H.iI(a))},
on:function(a){throw H.c(new P.fj(H.M(a)))},
nb:function(a){return new H.hx(a)},
lX:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bF:function(a){if(a==null)return
return a.$ti},
p2:function(a,b,c){return H.c7(a["$a"+H.m(c)],H.bF(b))},
bE:function(a,b,c,d){var u
H.M(c)
H.af(d)
u=H.c7(a["$a"+H.m(c)],H.bF(b))
return u==null?null:u[d]},
ax:function(a,b,c){var u
H.M(b)
H.af(c)
u=H.c7(a["$a"+H.m(b)],H.bF(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.af(b)
u=H.bF(a)
return u==null?null:u[b]},
k3:function(a){return H.bD(a,null)},
bD:function(a,b){var u,t
H.l(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c8(a[0].name)+H.kE(a,1,b)
if(typeof a=="function")return H.c8(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.af(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.m(b[t])}if('func' in a)return H.nK(a,b)
if('futureOr' in a)return"FutureOr<"+H.bD("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nK:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
H.l(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.e(a0,n)
p=C.b.n(p,a0[n])
m=u[q]
if(m!=null&&m!==P.Q)p+=" extends "+H.bD(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bD(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bD(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bD(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.o_(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.M(b[h])
j=j+i+H.bD(e[d],a0)+(" "+H.m(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kE:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.aj("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bD(p,c)}return"<"+u.i(0)+">"},
c7:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kF:function(a,b,c,d){var u,t
H.M(b)
H.jT(c)
H.M(d)
if(a==null)return!1
u=H.bF(a)
t=J.W(a)
if(t[b]==null)return!1
return H.lP(H.c7(t[d],u),null,c,null)},
l:function(a,b,c,d){H.M(b)
H.jT(c)
H.M(d)
if(a==null)return a
if(H.kF(a,b,c,d))return a
throw H.c(H.aU(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c8(b.substring(2))+H.kE(c,0,null),v.mangledGlobalNames)))},
lP:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aD(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aD(a[t],b,c[t],d))return!1
return!0},
p0:function(a,b,c){return a.apply(b,H.c7(J.W(b)["$a"+H.m(c)],H.bF(b)))},
lZ:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="Q"||a.name==="K"||a===-1||a===-2||H.lZ(u)}return!1},
kG:function(a,b){var u,t
if(a==null)return b==null||b.name==="Q"||b.name==="K"||b===-1||b===-2||H.lZ(b)
if(b==null||b===-1||b.name==="Q"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kG(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eR(a,b)}u=J.W(a).constructor
t=H.bF(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aD(u,null,b,null)},
z:function(a,b){if(a!=null&&!H.kG(a,b))throw H.c(H.aU(a,H.k3(b)))
return a},
aD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="Q"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="Q"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aD(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="K")return!0
if('func' in c)return H.lG(a,b,c,d)
if('func' in a)return c.name==="kh"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aD("type" in a?a.type:l,b,s,d)
else if(H.aD(a,b,s,d))return!0
else{if(!('$i'+"ch" in t.prototype))return!1
r=t.prototype["$a"+"ch"]
q=H.c7(r,u?a.slice(1):l)
return H.aD(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lP(H.c7(m,u),b,p,d)},
lG:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.oe(h,b,g,d)},
oe:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aD(c[s],d,a[s],b))return!1}return!0},
p1:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
oc:function(a){var u,t,s,r,q=H.M($.lY.$1(a)),p=$.jJ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jR[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.M($.lO.$2(a,q))
if(q!=null){p=$.jJ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jR[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.k2(u)
$.jJ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jR[q]=u
return u}if(s==="-"){r=H.k2(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m1(a,u)
if(s==="*")throw H.c(P.ie(q))
if(v.leafTags[q]===true){r=H.k2(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m1(a,u)},
m1:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kL(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
k2:function(a){return J.kL(a,!1,null,!!a.$iI)},
od:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.k2(u)
else return J.kL(u,c,null,null)},
o7:function(){if(!0===$.kK)return
$.kK=!0
H.o8()},
o8:function(){var u,t,s,r,q,p,o,n
$.jJ=Object.create(null)
$.jR=Object.create(null)
H.o6()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m3.$1(q)
if(p!=null){o=H.od(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
o6:function(){var u,t,s,r,q,p,o=C.E()
o=H.c1(C.F,H.c1(C.G,H.c1(C.w,H.c1(C.w,H.c1(C.H,H.c1(C.I,H.c1(C.J(C.v),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lY=new H.jO(r)
$.lO=new H.jP(q)
$.m3=new H.jQ(p)},
c1:function(a,b){return a(b)||b},
mN:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a3("Illegal RegExp pattern ("+String(r)+")",a,null))},
ol:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nZ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m4:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m5:function(a,b,c){var u=H.om(a,b,c)
return u},
om:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m4(b),'g'),H.nZ(c))},
fd:function fd(){},
fe:function fe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i1:function i1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hh:function hh(a,b){this.a=a
this.b=b},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(a){this.a=a},
k9:function k9(a){this.a=a},
ev:function ev(a){this.a=a
this.b=null},
cc:function cc(){},
hS:function hS(){},
hK:function hK(){},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i3:function i3(a){this.a=a},
f9:function f9(a){this.a=a},
hx:function hx(a){this.a=a},
iI:function iI(a){this.a=a},
aK:function aK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fM:function fM(a,b){this.a=a
this.b=b
this.c=null},
fN:function fN(a,b){this.a=a
this.$ti=b},
fO:function fO(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c_:function(a){return a},
mW:function(a){return new Int8Array(a)},
bc:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c3(b,a))},
nI:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nX(a,b,c))
return b},
co:function co(){},
by:function by(){},
ds:function ds(){},
cp:function cp(){},
dt:function dt(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
du:function du(){},
cq:function cq(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
o_:function(a){return J.l_(a?Object.keys(a):[],null)},
og:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kL:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eT:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kK==null){H.o7()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.ie("Return interceptor for "+H.m(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kN()]
if(r!=null)return r
r=H.oc(a)
if(r!=null)return r
if(typeof a=="function")return C.O
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.kN(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
mM:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kd(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ad(a,0,4294967295,"length",null))
return J.l_(new Array(a),b)},
l_:function(a,b){return J.kk(H.d(a,[b]))},
kk:function(a){H.jT(a)
a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dg.prototype
return J.fG.prototype}if(typeof a=="string")return J.be.prototype
if(a==null)return J.dh.prototype
if(typeof a=="boolean")return J.fF.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.Q)return a
return J.eT(a)},
o1:function(a){if(typeof a=="number")return J.bx.prototype
if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.Q)return a
return J.eT(a)},
c5:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.Q)return a
return J.eT(a)},
jK:function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.Q)return a
return J.eT(a)},
o2:function(a){if(typeof a=="number")return J.bx.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bC.prototype
return a},
o3:function(a){if(typeof a=="number")return J.bx.prototype
if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bC.prototype
return a},
kJ:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bC.prototype
return a},
eS:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.Q)return a
return J.eT(a)},
mq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.o1(a).n(a,b)},
S:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).t(a,b)},
kP:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.o3(a).m(a,b)},
mr:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.o2(a).p(a,b)},
kQ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oa(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c5(a).j(a,b)},
kb:function(a,b,c){return J.jK(a).l(a,b,c)},
ms:function(a,b){return J.kJ(a).G(a,b)},
mt:function(a,b,c){return J.eS(a).hw(a,b,c)},
mu:function(a,b,c,d){return J.eS(a).im(a,b,c,d)},
mv:function(a,b){return J.kJ(a).W(a,b)},
kc:function(a,b){return J.jK(a).K(a,b)},
mw:function(a,b,c,d){return J.eS(a).iI(a,b,c,d)},
kR:function(a,b){return J.jK(a).L(a,b)},
kS:function(a){return J.eS(a).gce(a)},
d1:function(a){return J.W(a).gI(a)},
bG:function(a){return J.jK(a).ga0(a)},
aG:function(a){return J.c5(a).gk(a)},
mx:function(a,b){return J.eS(a).jd(a,b)},
as:function(a){return J.W(a).i(a)},
a:function a(){},
fF:function fF(){},
dh:function dh(){},
di:function di(){},
hl:function hl(){},
bC:function bC(){},
bf:function bf(){},
aJ:function aJ(a){this.$ti=a},
kl:function kl(a){this.$ti=a},
at:function at(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bx:function bx(){},
dg:function dg(){},
fG:function fG(){},
be:function be(){}},P={
nn:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nS()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c2(new P.iK(s),1)).observe(u,{childList:true})
return new P.iJ(s,u,t)}else if(self.setImmediate!=null)return P.nT()
return P.nU()},
no:function(a){self.scheduleImmediate(H.c2(new P.iL(H.n(a,{func:1,ret:-1})),0))},
np:function(a){self.setImmediate(H.c2(new P.iM(H.n(a,{func:1,ret:-1})),0))},
nq:function(a){P.ks(C.t,H.n(a,{func:1,ret:-1}))},
ks:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a1(a.a,1000)
return P.nt(u<0?0:u,b)},
lj:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b6]})
u=C.f.a1(a.a,1000)
return P.nu(u<0?0:u,b)},
nt:function(a,b){var u=new P.eB()
u.eZ(a,b)
return u},
nu:function(a,b){var u=new P.eB()
u.f_(a,b)
return u},
nr:function(a,b){var u,t,s
b.a=1
try{a.er(new P.iV(b),new P.iW(b),null)}catch(s){u=H.aF(s)
t=H.c6(s)
P.oi(new P.iX(b,u,t))}},
lw:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaC")
if(u>=4){t=b.bX()
b.a=a.a
b.c=a.c
P.cL(b,t)}else{t=H.f(b.c,"$ibb")
b.a=2
b.c=a
a.dl(t)}},
cL:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iak")
g=g.b
r=s.a
q=s.b
g.toString
P.jA(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cL(h.a,b)}g=h.a
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
if(m){H.f(o,"$iak")
g=g.b
r=o.a
q=o.b
g.toString
P.jA(i,i,g,r,q)
return}l=$.Y
if(l!=n)$.Y=n
else l=i
g=b.c
if(g===8)new P.j0(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.j_(u,b,o).$0()}else if((g&2)!==0)new P.iZ(h,u,b).$0()
if(l!=null)$.Y=l
g=u.b
if(!!J.W(g).$ich){if(g.a>=4){k=H.f(q.c,"$ibb")
q.c=null
b=q.bc(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.lw(g,q)
return}}j=b.b
k=H.f(j.c,"$ibb")
j.c=null
b=j.bc(k)
g=u.a
r=u.b
if(!g){H.z(r,H.w(j,0))
j.a=4
j.c=r}else{H.f(r,"$iak")
j.a=8
j.c=r}h.a=j
g=j}},
nN:function(a,b){if(H.eR(a,{func:1,args:[P.Q,P.aq]}))return H.n(a,{func:1,ret:null,args:[P.Q,P.aq]})
if(H.eR(a,{func:1,args:[P.Q]}))return H.n(a,{func:1,ret:null,args:[P.Q]})
throw H.c(P.kd(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nM:function(){var u,t
for(;u=$.c0,u!=null;){$.cZ=null
t=u.b
$.c0=t
if(t==null)$.cY=null
u.a.$0()}},
nQ:function(){$.kC=!0
try{P.nM()}finally{$.cZ=null
$.kC=!1
if($.c0!=null)$.kO().$1(P.lQ())}},
lL:function(a){var u=new P.e_(H.n(a,{func:1,ret:-1}))
if($.c0==null){$.c0=$.cY=u
if(!$.kC)$.kO().$1(P.lQ())}else $.cY=$.cY.b=u},
nP:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c0
if(u==null){P.lL(a)
$.cZ=$.cY
return}t=new P.e_(a)
s=$.cZ
if(s==null){t.b=u
$.c0=$.cZ=t}else{t.b=s.b
$.cZ=s.b=t
if(t.b==null)$.cY=t}},
oi:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.Y
if(C.k===u){P.jC(t,t,C.k,a)
return}u.toString
P.jC(t,t,u,H.n(u.c9(a),s))},
li:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.Y
if(u===C.k){u.toString
return P.ks(a,b)}return P.ks(a,H.n(u.c9(b),t))},
nf:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b6]}
H.n(b,s)
u=$.Y
if(u===C.k){u.toString
return P.lj(a,b)}t=u.dA(b,P.b6)
$.Y.toString
return P.lj(a,H.n(t,s))},
jA:function(a,b,c,d,e){var u={}
u.a=d
P.nP(new P.jB(u,e))},
lH:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
lI:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.z(e,g)
t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
nO:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
jC:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.c9(d):c.it(d,-1)
P.lL(d)},
iK:function iK(a){this.a=a},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
eB:function eB(){this.c=0},
jk:function jk(a,b){this.a=a
this.b=b},
jj:function jj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bb:function bb(a,b,c,d,e){var _=this
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
iU:function iU(a,b){this.a=a
this.b=b},
iY:function iY(a,b){this.a=a
this.b=b},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j1:function j1(a){this.a=a},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.c=c},
e_:function e_(a){this.a=a
this.b=null},
hN:function hN(){},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
cx:function cx(){},
hO:function hO(){},
b6:function b6(){},
ak:function ak(a,b){this.a=a
this.b=b},
jt:function jt(){},
jB:function jB(a,b){this.a=a
this.b=b},
j8:function j8(){},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a,b){this.a=a
this.b=b},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
mP:function(a,b){return new H.aK([a,b])},
l0:function(a,b){return new H.aK([a,b])},
mR:function(a){return H.o0(a,new H.aK([null,null]))},
mS:function(a){return new P.j5([a])},
ky:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ly:function(a,b,c){var u=new P.j6(a,b,[c])
u.c=a.e
return u},
mK:function(a,b,c){var u,t
if(P.kD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.h])
C.a.h($.ar,a)
try{P.nL(a,u)}finally{if(0>=$.ar.length)return H.e($.ar,-1)
$.ar.pop()}t=P.lg(b,H.m_(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
kj:function(a,b,c){var u,t
if(P.kD(a))return b+"..."+c
u=new P.aj(b)
C.a.h($.ar,a)
try{t=u
t.a=P.lg(t.a,a,", ")}finally{if(0>=$.ar.length)return H.e($.ar,-1)
$.ar.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kD:function(a){var u,t
for(u=$.ar.length,t=0;t<u;++t)if(a===$.ar[t])return!0
return!1},
nL:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.h],"$ab")
u=a.ga0(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.J())return
r=H.m(u.gS(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.J()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gS(u);++s
if(!u.J()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gS(u);++s
for(;u.J();o=n,n=m){m=u.gS(u);++s
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
mQ:function(a,b,c){var u=P.mP(b,c)
a.L(0,new P.fP(u,b,c))
return u},
ko:function(a){var u,t={}
if(P.kD(a))return"{...}"
u=new P.aj("")
try{C.a.h($.ar,a)
u.a+="{"
t.a=!0
J.kR(a,new P.fU(t,u))
u.a+="}"}finally{if(0>=$.ar.length)return H.e($.ar,-1)
$.ar.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j5:function j5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cM:function cM(a){this.a=a
this.c=this.b=null},
j6:function j6(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fP:function fP(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function fQ(){},
y:function y(){},
fT:function fT(){},
fU:function fU(a,b){this.a=a
this.b=b},
ag:function ag(){},
jl:function jl(){},
fV:function fV(){},
dT:function dT(a,b){this.a=a
this.$ti=b},
jc:function jc(){},
ee:function ee(){},
eG:function eG(){},
ni:function(a,b,c,d){H.l(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.nj(!1,b,c,d)
return},
nj:function(a,b,c,d){var u,t,s=$.mj()
if(s==null)return
u=0===c
if(u&&!0)return P.kv(s,b)
t=b.length
d=P.bl(c,d,t)
if(u&&d===t)return P.kv(s,b)
return P.kv(s,b.subarray(c,d))},
kv:function(a,b){if(P.nl(b))return
return P.nm(a,b)},
nm:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aF(t)}return},
nl:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nk:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aF(t)}return},
lK:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.p],"$ab")
for(u=J.c5(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bA()
if((s&127)!==s)return t-b}return c-b},
kT:function(a,b,c,d,e,f){if(C.f.b7(f,4)!==0)throw H.c(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
f5:function f5(){},
f6:function f6(){},
bK:function bK(){},
bO:function bO(){},
fr:function fr(){},
ip:function ip(){},
ir:function ir(){},
js:function js(a){this.b=0
this.c=a},
iq:function iq(a){this.a=a},
jr:function jr(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eU:function(a,b,c){var u
H.n(b,{func:1,ret:P.p,args:[P.h]})
u=H.n5(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a3(a,null,null))},
mH:function(a){if(a instanceof H.cc)return a.i(0)
return"Instance of '"+H.bU(a)+"'"},
mT:function(a,b,c){var u,t
H.z(b,c)
u=J.mM(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.l(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
l1:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bG(a);u.J();)C.a.h(s,H.z(u.gS(u),c))
if(b)return s
return H.l(J.kk(s),"$ib",t,"$ab")},
cy:function(a,b,c){var u,t=P.p
H.l(a,"$ij",[t],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaJ",[t],"$aaJ")
u=a.length
c=P.bl(b,c,u)
return H.lc(b>0||c<u?C.a.eC(a,b,c):a)}if(!!J.W(a).$icq)return H.n7(a,b,P.bl(b,c,a.length))
return P.nd(a,b,c)},
nd:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ij",[P.p],"$aj")
if(b<0)throw H.c(P.ad(b,0,J.aG(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ad(c,b,J.aG(a),q,q))
t=J.bG(a)
for(s=0;s<b;++s)if(!t.J())throw H.c(P.ad(b,0,s,q,q))
r=[]
if(u)for(;t.J();)r.push(t.gS(t))
else for(s=b;s<c;++s){if(!t.J())throw H.c(P.ad(c,b,s,q,q))
r.push(t.gS(t))}return H.lc(r)},
n9:function(a){return new H.fH(a,H.mN(a,!1,!0,!1))},
lg:function(a,b,c){var u=J.bG(b)
if(!u.J())return a
if(c.length===0){do a+=H.m(u.gS(u))
while(u.J())}else{a+=H.m(u.gS(u))
for(;u.J();)a=a+c+H.m(u.gS(u))}return a},
lm:function(){var u=H.mY()
if(u!=null)return P.nh(u)
throw H.c(P.F("'Uri.base' is not supported"))},
jq:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.mo().b
if(typeof b!=="string")H.u(H.aE(b))
u=u.test(b)}else u=!1
if(u)return b
H.z(b,H.ax(c,"bK",0))
t=c.giH().cf(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dy(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mE:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mF:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d9:function(a){if(a>=10)return""+a
return"0"+a},
kY:function(a,b){return new P.aZ(1e6*b+1000*a)},
de:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mH(a)},
eZ:function(a){return new P.aV(!1,null,null,a)},
kd:function(a,b,c){return new P.aV(!0,a,b,c)},
dA:function(a,b){return new P.bV(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.bV(b,c,!0,a,d,"Invalid value")},
bl:function(a,b,c){if(0>a||a>c)throw H.c(P.ad(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ad(b,a,c,"end",null))
return b}return c},
kq:function(a,b){if(typeof a!=="number")return a.U()
if(a<0)throw H.c(P.ad(a,0,null,b,null))},
X:function(a,b,c,d,e){var u=H.af(e==null?J.aG(b):e)
return new P.fE(u,!0,a,c,"Index out of range")},
F:function(a){return new P.ih(a)},
ie:function(a){return new P.id(a)},
bM:function(a){return new P.fc(a)},
x:function(a){return new P.e7(a)},
a3:function(a,b,c){return new P.fB(a,b,c)},
mU:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.p]})
u=H.d([],[c])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.l(u,t,b.$1(t))
return u},
kM:function(a){H.og(a)},
nh:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.G(a,4)^58)*3|C.b.G(a,0)^100|C.b.G(a,1)^97|C.b.G(a,2)^116|C.b.G(a,3)^97)>>>0
if(u===0)return P.ll(e<e?C.b.A(a,0,e):a,5,f).gex()
else if(u===32)return P.ll(C.b.A(a,5,e),0,f).gex()}t=new Array(8)
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
if(P.lJ(a,0,e,0,s)>=14)C.a.l(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jr()
if(r>=0)if(P.lJ(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.n()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.U()
if(typeof n!=="number")return H.r(n)
if(m<n)n=m
if(typeof o!=="number")return o.U()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.U()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.U()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.a6(a,"..",o)))j=n>o+2&&C.b.a6(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a6(a,"file",0)){if(q<=0){if(!C.b.a6(a,"/",o)){i="file:///"
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
a=C.b.aP(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a6(a,"http",0)){if(t&&p+3===o&&C.b.a6(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aP(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a6(a,"https",0)){if(t&&p+4===o&&C.b.a6(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aP(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.A(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jd(a,r,q,p,o,n,m,k)}return P.nv(a,0,e,r,q,p,o,n,m,k)},
lo:function(a){var u=P.h
return C.a.iL(H.d(a.split("&"),[u]),P.l0(u,u),new P.im(C.l),[P.D,P.h,P.h])},
ng:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.ij(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eU(C.b.A(a,s,t),n,n)
if(typeof p!=="number")return p.cM()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eU(C.b.A(a,s,c),n,n)
if(typeof p!=="number")return p.cM()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
ln:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.ik(a)
t=new P.il(u,a)
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
l=C.a.gay(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.ng(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.f.aI(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
nv:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nC(a,b,d)
else{if(d===b)P.cV(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nD(a,u,e-1):""
s=P.nz(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.r(g)
q=r<g?P.nB(P.eU(C.b.A(a,r,g),new P.jm(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nA(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.U()
o=h<i?P.kz(a,h+1,i,n):n
return new P.bZ(j,t,s,q,p,o,i<c?P.ny(a,i+1,c):n)},
lz:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cV:function(a,b,c){throw H.c(P.a3(c,a,b))},
nB:function(a,b){if(a!=null&&a===P.lz(b))return
return a},
nz:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.W(a,b)===91){if(typeof c!=="number")return c.p()
u=c-1
if(C.b.W(a,u)!==93)P.cV(a,b,"Missing end `]` to match `[` in host")
P.ln(a,b+1,u)
return C.b.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.r(c)
t=b
for(;t<c;++t)if(C.b.W(a,t)===58){P.ln(a,b,c)
return"["+a+"]"}return P.nF(a,b,c)},
nF:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.r(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.W(a,u)
if(q===37){p=P.lF(a,u,!0)
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
if(o>=8)return H.e(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.aj("")
if(t<u){s.a+=C.b.A(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.n,o)
o=(C.n[o]&1<<(q&15))!==0}else o=!1
if(o)P.cV(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.aj("")
n=C.b.A(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lA(q)
u+=l
t=u}}}}if(s==null)return C.b.A(a,b,c)
if(t<c){n=C.b.A(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nC:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lC(C.b.G(a,b)))P.cV(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.p,r)
r=(C.p[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cV(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.A(a,b,c)
return P.nw(t?a.toLowerCase():a)},
nw:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nD:function(a,b,c){return P.cW(a,b,c,C.Q,!1)},
nA:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cW(a,b,c,C.z,!0):C.m.ju(d,new P.jn(),P.h).C(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a5(u,"/"))u="/"+u
return P.nE(u,e,f)},
nE:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a5(a,"/"))return P.nG(a,!u||c)
return P.nH(a)},
kz:function(a,b,c,d){var u,t={}
H.l(d,"$iD",[P.h,null],"$aD")
if(a!=null){if(d!=null)throw H.c(P.eZ("Both query and queryParameters specified"))
return P.cW(a,b,c,C.o,!0)}if(d==null)return
u=new P.aj("")
t.a=""
d.L(0,new P.jo(new P.jp(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
ny:function(a,b,c){return P.cW(a,b,c,C.o,!0)},
lF:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.W(a,b+1)
t=C.b.W(a,p)
s=H.jN(u)
r=H.jN(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.f.aI(q,4)
if(p>=8)return H.e(C.q,p)
p=(C.q[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dy(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.A(a,b,b+3).toUpperCase()
return},
lA:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.p])
C.a.l(t,0,37)
C.a.l(t,1,C.b.G(o,a>>>4))
C.a.l(t,2,C.b.G(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.p])
for(q=0;--r,r>=0;s=128){p=C.f.hH(a,6*r)&63|s
C.a.l(t,q,37)
C.a.l(t,q+1,C.b.G(o,p>>>4))
C.a.l(t,q+2,C.b.G(o,p&15))
q+=3}}return P.cy(t,0,null)},
cW:function(a,b,c,d,e){var u=P.lE(a,b,c,H.l(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.A(a,b,c):u},
lE:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.U()
if(typeof c!=="number")return H.r(c)
if(!(t<c))break
c$0:{q=C.b.W(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.lF(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cV(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.W(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.lA(q)}}if(r==null)r=new P.aj("")
r.a+=C.b.A(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.r(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.U()
if(s<c)r.a+=C.b.A(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
lD:function(a){if(C.b.a5(a,"."))return!0
return C.b.e5(a,"/.")!==-1},
nH:function(a){var u,t,s,r,q,p,o
if(!P.lD(a))return a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.S(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.C(u,"/")},
nG:function(a,b){var u,t,s,r,q,p
if(!P.lD(a))return!b?P.lB(a):a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gay(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gay(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.l(u,0,P.lB(u[0]))}return C.a.C(u,"/")},
lB:function(a){var u,t,s,r=a.length
if(r>=2&&P.lC(J.ms(a,0)))for(u=1;u<r;++u){t=C.b.G(a,u)
if(t===58)return C.b.A(a,0,u)+"%3A"+C.b.aB(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.p,s)
s=(C.p[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nx:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.eZ("Invalid URL encoding"))}}return u},
kA:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.G(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.A(a,b,c)
else r=new H.a5(C.b.A(a,b,c))}else{r=H.d([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.b.G(a,q)
if(t>127)throw H.c(P.eZ("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.eZ("Truncated URI"))
C.a.h(r,P.nx(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.p],"$ab")
return new P.iq(!1).cf(r)},
lC:function(a){var u=a|32
return 97<=u&&u<=122},
ll:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a3(m,a,t))}}if(s<0&&t>b)throw H.c(P.a3(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gay(l)
if(r!==44||t!==p+7||!C.b.a6(a,"base64",p+1))throw H.c(P.a3("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.D.iV(0,a,o,u)
else{n=P.lE(a,o,u,C.o,!0)
if(n!=null)a=C.b.aP(a,o,u,n)}return new P.ii(a,l,c)},
nJ:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mU(22,new P.jx(),P.R),n=new P.jw(o),m=new P.jy(),l=new P.jz(),k=H.f(n.$2(0,225),"$iR")
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
lJ:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.p],"$ab")
u=$.mp()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.G(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.l(e,q>>>5,t)}return d},
ab:function ab(){},
au:function au(a,b){this.a=a
this.b=b},
q:function q(){},
aZ:function aZ(a){this.a=a},
fo:function fo(){},
fp:function fp(){},
bv:function bv(){},
f_:function f_(){},
dv:function dv(){},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bV:function bV(a,b,c,d,e,f){var _=this
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
ih:function ih(a){this.a=a},
id:function id(a){this.a=a},
dG:function dG(a){this.a=a},
fc:function fc(a){this.a=a},
hk:function hk(){},
dF:function dF(){},
fj:function fj(a){this.a=a},
e7:function e7(a){this.a=a},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
p:function p(){},
j:function j(){},
b0:function b0(){},
b:function b(){},
D:function D(){},
K:function K(){},
a8:function a8(){},
Q:function Q(){},
aq:function aq(){},
h:function h(){},
aj:function aj(a){this.a=a},
im:function im(a){this.a=a},
ij:function ij(a){this.a=a},
ik:function ik(a){this.a=a},
il:function il(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jm:function jm(a,b){this.a=a
this.b=b},
jn:function jn(){},
jp:function jp(a,b){this.a=a
this.b=b},
jo:function jo(a){this.a=a},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
jx:function jx(){},
jw:function jw(a){this.a=a},
jy:function jy(){},
jz:function jz(){},
jd:function jd(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iQ:function iQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
bn:function(a){var u,t,s,r,q
if(a==null)return
u=P.l0(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r){q=H.M(t[r])
u.l(0,q,a[q])}return u},
nV:function(a){var u={}
a.L(0,new P.jD(u))
return u},
jf:function jf(){},
jh:function jh(a,b){this.a=a
this.b=b},
jD:function jD(a){this.a=a},
jg:function jg(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
fy:function fy(){},
fz:function fz(){},
j4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ns:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j7:function j7(){},
ah:function ah(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b2:function b2(){},
fK:function fK(){},
b5:function b5(){},
hi:function hi(){},
ho:function ho(){},
hR:function hR(){},
t:function t(){},
b7:function b7(){},
i0:function i0(){},
ec:function ec(){},
ed:function ed(){},
em:function em(){},
en:function en(){},
ex:function ex(){},
ey:function ey(){},
eE:function eE(){},
eF:function eF(){},
R:function R(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(a){this.a=a},
f4:function f4(){},
bH:function bH(){},
hj:function hj(){},
e0:function e0(){},
d3:function d3(){},
dz:function dz(){},
bW:function bW(){},
dD:function dD(){},
dR:function dR(){},
hJ:function hJ(){},
et:function et(){},
eu:function eu(){}},W={
kW:function(){var u=document.createElement("canvas")
return u},
mG:function(a){H.f(a,"$ii")
return"wheel"},
mJ:function(a){var u,t=document.createElement("input"),s=H.f(t,"$ick")
try{s.type=a}catch(u){H.aF(u)}return s},
j3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lx:function(a,b,c,d){var u=W.j3(W.j3(W.j3(W.j3(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.lN(new W.iT(c),W.o)
if(u!=null&&!0)J.mu(a,b,u,!1)
return new W.iS(a,b,u,!1,[e])},
lN:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.Y
if(u===C.k)return a
return u.dA(a,b)},
v:function v(){},
eV:function eV(){},
eX:function eX(){},
eY:function eY(){},
bI:function bI(){},
bJ:function bJ(){},
bu:function bu(){},
cd:function cd(){},
ff:function ff(){},
V:function V(){},
ce:function ce(){},
fg:function fg(){},
aX:function aX(){},
aY:function aY(){},
fh:function fh(){},
fi:function fi(){},
fk:function fk(){},
da:function da(){},
fl:function fl(){},
db:function db(){},
dc:function dc(){},
fm:function fm(){},
fn:function fn(){},
iO:function iO(a,b){this.a=a
this.b=b},
a2:function a2(){},
o:function o(){},
i:function i(){},
ay:function ay(){},
cg:function cg(){},
fw:function fw(){},
fA:function fA(){},
aI:function aI(){},
fD:function fD(){},
bQ:function bQ(){},
cj:function cj(){},
ck:function ck(){},
b1:function b1(){},
fR:function fR(){},
h4:function h4(){},
cm:function cm(){},
h5:function h5(){},
h6:function h6(a){this.a=a},
h7:function h7(){},
h8:function h8(a){this.a=a},
aL:function aL(){},
h9:function h9(){},
ac:function ac(){},
iN:function iN(a){this.a=a},
G:function G(){},
cr:function cr(){},
aM:function aM(){},
hm:function hm(){},
hv:function hv(){},
hw:function hw(a){this.a=a},
hy:function hy(){},
aO:function aO(){},
hH:function hH(){},
aP:function aP(){},
hI:function hI(){},
aQ:function aQ(){},
hL:function hL(){},
hM:function hM(a){this.a=a},
az:function az(){},
bm:function bm(){},
aR:function aR(){},
aA:function aA(){},
hT:function hT(){},
hU:function hU(){},
hW:function hW(){},
aS:function aS(){},
aT:function aT(){},
hZ:function hZ(){},
i_:function i_(){},
bB:function bB(){},
io:function io(){},
iE:function iE(){},
ba:function ba(){},
cK:function cK(){},
iP:function iP(){},
e2:function e2(){},
j2:function j2(){},
ej:function ej(){},
je:function je(){},
ji:function ji(){},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kx:function kx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iS:function iS(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iT:function iT(a){this.a=a},
B:function B(){},
df:function df(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e1:function e1(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ek:function ek(){},
el:function el(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
cR:function cR(){},
cS:function cS(){},
er:function er(){},
es:function es(){},
ew:function ew(){},
ez:function ez(){},
eA:function eA(){},
cT:function cT(){},
cU:function cU(){},
eC:function eC(){},
eD:function eD(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){}},O={
kf:function(a){var u=new O.a0([a])
u.bE(a)
return u},
a0:function a0(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cl:function cl(){this.b=this.a=null},
dp:function dp(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dq:function dq(){},
h_:function h_(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b3:function b3(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h1:function h1(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h2:function h2(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bY:function bY(){}},E={
na:function(a,b){var u=new E.hr(a)
u.eJ(a,b)
return u},
ne:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibJ)return E.lh(a,!0,!0,!0,!1)
u=W.kW()
t=u.style
t.width="100%"
t.height="100%"
s.gce(a).h(0,u)
return E.lh(u,!0,!0,!0,!1)},
lh:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dN(),j=H.f(C.r.eA(a,"webgl2",P.mR(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibW")
if(j==null)H.u(P.x("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.na(j,a)
H.af(j.getParameter(3379))
H.af(j.getParameter(34076))
u=new X.dU(a)
t=new X.fJ()
t.c=new X.av(!1,!1,!1)
t.shq(P.mS(P.p))
u.b=t
t=new X.ha(u)
t.f=0
t.r=V.bA()
t.x=V.bA()
t.ch=t.Q=1
u.c=t
t=new X.fS(u)
t.r=0
t.x=V.bA()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hY(u)
t.f=V.bA()
t.r=V.bA()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfh(H.d([],[[P.cx,P.Q]]))
t=u.z
s=document
r=W.ac
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.aa(s,"contextmenu",H.n(u.gfQ(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.aa(a,"focus",H.n(u.gfW(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.aa(a,"blur",H.n(u.gfI(),o),!1,p))
t=u.z
n=W.b1
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.aa(s,"keyup",H.n(u.gh_(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.aa(s,"keydown",H.n(u.gfY(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.aa(a,"mousedown",H.n(u.gh3(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,"mouseup",H.n(u.gh7(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,l,H.n(u.gh5(),q),!1,r))
n=u.z
m=W.ba;(n&&C.a).h(n,W.aa(a,H.M(W.mG(a)),H.n(u.gh9(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.aa(s,l,H.n(u.gfS(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.aa(s,"mouseup",H.n(u.gfU(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.aa(s,"pointerlockchange",H.n(u.ghb(),o),!1,p))
p=u.z
o=W.aT
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.aa(a,"touchstart",H.n(u.ghn(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchend",H.n(u.ghj(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchmove",H.n(u.ghl(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.au(Date.now(),!1)
k.cy=0
k.dn()
return k},
f7:function f7(){},
ao:function ao(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
dH:function dH(a){this.c=a
this.b=null},
dN:function dN(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
hV:function hV(a){this.a=a}},Z={
kw:function(a,b,c){var u
H.l(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c_(c)),35044)
a.bindBuffer(b,null)
return new Z.dZ(b,u)},
aB:function(a){return new Z.b9(a)},
dZ:function dZ(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iF:function iF(a){this.a=a},
d5:function d5(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a){this.a=a}},D={
T:function(){var u=new D.b_()
u.sa3(null)
u.sal(null)
u.c=null
u.d=0
return u},
fa:function fa(){},
b_:function b_(){var _=this
_.d=_.c=_.b=_.a=null},
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
A:function A(){this.b=null},
bR:function bR(a){this.b=null
this.$ti=a},
bS:function bS(a){this.b=null
this.$ti=a},
L:function L(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bd:function bd(){var _=this
_.d=_.c=_.b=_.a=null},
a4:function a4(){},
dk:function dk(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dx:function dx(){},
dE:function dE(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){}},X={d6:function d6(a,b){this.a=a
this.b=b},dj:function dj(a,b){this.a=a
this.b=b},fJ:function fJ(){var _=this
_.d=_.c=_.b=_.a=null},dm:function dm(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fS:function fS(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},av:function av(a,b,c){this.a=a
this.b=b
this.c=c},bi:function bi(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},ha:function ha(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cn:function cn(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hn:function hn(){},dP:function dP(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hY:function hY(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dU:function dU(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mI:function(a){var u=new X.fC(),t=new V.aH(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.le
if(t==null){t=V.ld(0,0,1,1)
$.le=t}u.r=t
return u},
d7:function d7(){},
fC:function fC(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dw:function dw(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dI:function dI(){}},V={
ka:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.b7(a-b,u)
return(a<0?a+u:a)+b},
P:function(a,b,c){if(a==null)return C.b.aa("null",c)
return C.b.aa(C.e.es(Math.abs(a-0)<$.J().a?0:a,b),c+b+1)},
c4:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.q],"$ab")
u=H.d([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=V.P(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.l(u,p,C.b.aa(u[p],s))}return u},
ap:function(){var u=$.l5
return u==null?$.l5=V.b4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b4:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
h3:function(a,b,c){return V.b4(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kp:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b4(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
l3:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b4(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
l4:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b4(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
l2:function(a,b,c){var u=c.u(0,Math.sqrt(c.D(c))),t=b.aw(u),s=t.u(0,Math.sqrt(t.D(t))),r=u.aw(s),q=new V.H(a.a,a.b,a.c),p=s.R(0).D(q),o=r.R(0).D(q),n=u.R(0).D(q)
return V.b4(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bA:function(){var u=$.l9
return u==null?$.l9=new V.a7(0,0):u},
la:function(){var u=$.cs
return u==null?$.cs=new V.Z(0,0,0):u},
ld:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dB(a,b,c,d)},
cJ:function(){var u=$.lt
return u==null?$.lt=new V.H(0,0,0):u},
lu:function(){var u=$.ls
return u==null?$.ls=new V.H(0,1,0):u},
lv:function(){var u=$.is
return u==null?$.is=new V.H(0,0,1):u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
aH:function aH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fs:function fs(a){this.a=a},
dr:function dr(a,b,c,d,e,f,g,h,i){var _=this
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
a7:function a7(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(a,b){this.a=a
this.b=b},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function(a){var u=new V.hz()
u.eK(a)
return u},
eW:function eW(){},
bh:function bh(){},
dn:function dn(){},
bk:function bk(){this.a=null},
hz:function hz(){this.a=null},
cw:function cw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a){this.b=a
this.c=null},
hX:function hX(){this.c=this.b=this.a=null},
cA:function cA(a){this.b=a
this.a=this.c=null},
oj:function(a){P.nf(C.M,new V.k4(a))},
nc:function(a){var u=new V.hD()
u.eM(a,!0)
return u},
k4:function k4(a){this.a=a},
hp:function hp(a){this.a=a
this.c=null},
hq:function hq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hD:function hD(){this.b=this.a=null},
hF:function hF(a){this.a=a},
hE:function hE(a){this.a=a}},U={
kg:function(){var u=new U.fb()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
bN:function(a){var u=new U.d8()
if(a==null)a=V.ap()
if(null!=a)u.a=a
return u},
ki:function(){var u=new U.ci()
u.bE(U.a9)
u.b8(u.geP(),u.ghf())
u.e=null
u.f=V.ap()
u.r=0
return u},
cu:function(a,b,c){var u,t=new U.dC()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.sez(0)
t.seh(0,0)
t.seo(0)
u=t.d
if(!(Math.abs(u-c)<$.J().a)){t.d=c
u=new D.L("deltaYaw",u,c,[P.q])
u.b=!0
t.F(u)}u=t.e
if(!(Math.abs(u-a)<$.J().a)){t.e=a
u=new D.L("deltaPitch",u,a,[P.q])
u.b=!0
t.F(u)}u=t.f
if(!(Math.abs(u-b)<$.J().a)){t.f=b
u=new D.L("deltaRoll",u,b,[P.q])
u.b=!0
t.F(u)}return t},
fb:function fb(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d8:function d8(){this.b=this.a=null},
ci:function ci(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dC:function dC(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dV:function dV(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dW:function dW(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dX:function dX(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dd:function dd(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mV:function(a,b){var u=a.ae,t=new A.fY(b,u)
t.eL(b,u)
t.eI(a,b)
return t},
kt:function(a,b,c,d,e){var u=new A.i5(a,c,e)
u.f=d
u.shW(P.mT(d,0,P.p))
return u},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(a){this.a=a},
fY:function fY(a,b){var _=this
_.bh=_.dE=_.bg=_.ae=_.an=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dU=_.ck=_.dT=_.bu=_.dS=_.dR=_.bt=_.bs=_.dQ=_.dP=_.br=_.bq=_.bp=_.dO=_.dN=_.bo=_.dM=_.dL=_.bn=_.dK=_.dJ=_.bm=_.bl=_.dI=_.dH=_.bk=_.bj=_.dG=_.dF=_.bi=null
_.cp=_.dY=_.co=_.dX=_.cn=_.dW=_.cm=_.dV=_.cl=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h0:function h0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ae=b4
_.bg=b5},
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
cv:function cv(){},
bL:function bL(a,b){this.a=a
this.b=b},
dQ:function dQ(){},
ib:function ib(a){this.a=a},
O:function O(a,b,c){this.a=a
this.c=b
this.d=c},
i7:function i7(a,b,c){this.a=a
this.c=b
this.d=c},
i8:function i8(a,b,c){this.a=a
this.c=b
this.d=c},
ia:function ia(a,b,c){this.a=a
this.c=b
this.d=c},
i5:function i5(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
i6:function i6(a,b,c){this.a=a
this.c=b
this.d=c},
N:function N(a,b,c){this.a=a
this.c=b
this.d=c},
i9:function i9(a,b,c){this.a=a
this.c=b
this.d=c},
ic:function ic(a,b,c){this.a=a
this.c=b
this.d=c},
cC:function cC(a,b,c){this.a=a
this.c=b
this.d=c},
aw:function aw(a,b,c){this.a=a
this.c=b
this.d=c},
am:function am(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lS:function(a,b,c){var u,t=null
H.n(b,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
u=F.kr()
F.cX(u,t,b,c,a,1,0,0,1)
F.cX(u,t,b,c,a,0,1,0,3)
F.cX(u,t,b,c,a,0,0,1,2)
F.cX(u,t,b,c,a,-1,0,0,0)
F.cX(u,t,b,c,a,0,-1,0,0)
F.cX(u,t,b,c,a,0,0,-1,3)
u.ad()
return u},
jv:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.cM()
return(u>0?t+4:t)*2},
cX:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.H(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.H(p+a3,o+a1,n+a2)
l=new V.H(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.H(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.jv(u)
g=F.jv(e.b)
f=F.k7(d,a0,new F.ju(e,F.jv(e.c),F.jv(e.d),g,h,c),b)
if(f!=null)a.aZ(f)},
lV:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.q,args:[P.q]})
if(e<3)return
u=F.kr()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.ae])
q=u.a
p=new V.H(0,0,t)
p=p.u(0,Math.sqrt(p.D(p)))
C.a.h(r,q.iq(new V.aN(a,-1,-1,-1),new V.aH(1,1,1,1),new V.Z(0,0,c),new V.H(0,0,t),new V.a7(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.r(k)
j=new V.H(m,l,t).u(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dY(new V.aN(a,-1,-1,-1),null,new V.aH(i,g,h,1),new V.Z(m*k,l*k,c),new V.H(0,0,t),new V.a7(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.io(r)
return u},
lT:function(a,b,c,d){return F.nW(!0,a,b,new F.jE(1,d),c)},
nW:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
u=F.k7(c,e,new F.jG(d),null)
if(u==null)return
u.ad()
u.c4()
if(b)u.aZ(F.lV(3,!1,1,new F.jH(d),e))
u.aZ(F.lV(1,!0,-1,new F.jI(d),e))
return u},
ok:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.k5()
t=F.lS(a,new F.k6(s,1),b)
t.c4()
return t},
oo:function(a,b){return F.lU(15,30,b,a,new F.k8())},
ob:function(a){return F.lU(12,120,a,1,new F.jS(3,2))},
lU:function(a,b,c,d,e){var u=F.k7(a,b,new F.jF(H.n(e,{func:1,ret:V.Z,args:[P.q]}),d,b,c),null)
if(u==null)return
u.ad()
u.c4()
return u},
o5:function(){var u,t={}
t.a=u
t.a=null
t.a=new F.jL()
return F.k7(4,4,new F.jM(t),null)},
k7:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
if(a<1)return
if(b<1)return
u=F.kr()
t=H.d([],[F.ae])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dY(g,g,new V.aH(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cg(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dY(g,g,new V.aH(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cg(d))}}u.d.ip(a+1,b+1,t)
return u},
cf:function(a,b,c){var u=new F.a6(),t=a.a
if(t==null)H.u(P.x("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.x("May not create a face with vertices attached to different shapes."))
u.c2(a)
u.c3(b)
u.hC(c)
C.a.h(u.a.a.d.b,u)
u.a.a.Z()
return u},
mO:function(a,b){var u=new F.bg(),t=a.a
if(t==null)H.u(P.x("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.u(P.x("May not create a line with vertices attached to different shapes."))
u.c2(a)
u.c3(b)
C.a.h(u.a.a.c.b,u)
u.a.a.Z()
return u},
kr:function(){var u=new F.bX(),t=new F.it(u)
t.b=!1
t.shX(H.d([],[F.ae]))
u.a=t
t=new F.hC(u)
t.sbV(H.d([],[F.bz]))
u.b=t
t=new F.hB(u)
t.sfp(H.d([],[F.bg]))
u.c=t
t=new F.hA(u)
t.sfi(H.d([],[F.a6]))
u.d=t
u.e=null
return u},
dY:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ae(),r=new F.iB()
r.sbV(H.d([],[F.bz]))
s.b=r
r=new F.ix()
u=[F.bg]
r.sfq(H.d([],u))
r.sfs(H.d([],u))
s.c=r
r=new F.iu()
u=[F.a6]
r.sfj(H.d([],u))
r.sfk(H.d([],u))
r.sfl(H.d([],u))
s.d=r
h=$.mk()
s.e=0
r=$.br()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bq().a)!==0?e:t
s.x=(u&$.bp().a)!==0?b:t
s.y=(u&$.bs().a)!==0?f:t
s.z=(u&$.bt().a)!==0?g:t
s.Q=(u&$.ml().a)!==0?c:t
s.ch=(u&$.c9().a)!==0?i:0
s.cx=(u&$.bo().a)!==0?a:t
return s},
ju:function ju(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jE:function jE(a,b){this.a=a
this.b=b},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
k5:function k5(){},
k6:function k6(a,b){this.a=a
this.b=b},
k8:function k8(){},
jS:function jS(a,b){this.a=a
this.b=b},
jF:function jF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jL:function jL(){},
jM:function jM(a){this.a=a},
a6:function a6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fv:function fv(){},
hG:function hG(){},
bg:function bg(){this.b=this.a=null},
fL:function fL(){},
i4:function i4(){},
bz:function bz(){this.a=null},
bX:function bX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(a){this.a=a
this.b=null},
hB:function hB(a){this.a=a
this.b=null},
hC:function hC(a){this.a=a
this.b=null},
ae:function ae(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iD:function iD(a){this.a=a},
iC:function iC(a){this.a=a},
it:function it(a){this.a=a
this.c=this.b=null},
iu:function iu(){this.d=this.c=this.b=null},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(){this.c=this.b=null},
iz:function iz(){},
iy:function iy(){},
iA:function iA(){},
hg:function hg(){},
iB:function iB(){this.b=null}},T={dJ:function dJ(){}},K={
m0:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="modifiers",a1=V.nc("Test 035"),a2=W.kW()
a2.className="pageLargeCanvas"
a2.id=b
a1.a.appendChild(a2)
u=[P.h]
a1.dz(H.d(["A test of the bending a shape with the Material Light Shader. ","Not all of the shapes have predefined bend values."],u))
a1.il(H.d(["shapes"],u))
a1.dz(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.u(P.x("Failed to find an element with the identifier, testCanvas."))
s=E.ne(t,!0,!0,!0,!1)
r=new E.ao()
r.a=""
r.b=!0
a1=E.ao
r.sf9(0,O.kf(a1))
r.y.b8(r.giW(),r.giZ())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.scO(0,a)
r.sb_(a)
r.sb_(U.bN(a))
q=new O.dp()
q.sf6(O.kf(V.al))
q.e.b8(q.gfE(),q.gfG())
p=new O.b3(q,"emission")
p.c=C.d
p.f=new V.a1(0,0,0)
q.f=p
p=new O.b3(q,"ambient")
p.c=C.d
p.f=new V.a1(0,0,0)
q.r=p
p=new O.b3(q,"diffuse")
p.c=C.d
p.f=new V.a1(0,0,0)
q.x=p
p=new O.b3(q,"invDiffuse")
p.c=C.d
p.f=new V.a1(0,0,0)
q.y=p
p=new O.h2(q,"specular")
p.c=C.d
p.f=new V.a1(0,0,0)
p.ch=100
q.z=p
p=new O.h_(q,"bump")
p.c=C.d
q.Q=p
q.ch=null
p=new O.b3(q,"reflect")
p.c=C.d
p.f=new V.a1(0,0,0)
q.cx=p
p=new O.h1(q,"refract")
p.c=C.d
p.f=new V.a1(0,0,0)
p.ch=1
q.cy=p
p=new O.fZ(q,"alpha")
p.c=C.d
p.f=1
q.db=p
p=new D.dk()
p.bE(D.a4)
p.sfe(H.d([],[D.bd]))
p.shp(H.d([],[D.dx]))
p.shI(H.d([],[D.dE]))
p.shT(H.d([],[D.dK]))
p.shU(H.d([],[D.dL]))
p.shV(H.d([],[D.dM]))
p.ch=p.Q=null
p.cN(p.gfC(),p.ghd(),p.ghh())
q.dx=p
o=p.Q
p=o==null?p.Q=D.T():o
p.h(0,q.ghy())
p=q.dx
o=p.ch
p=o==null?p.ch=D.T():o
p.h(0,q.gfK())
q.dy=null
p=q.dx
n=V.lu()
o=U.bN(V.l2(V.la(),n,new V.H(1,1,-3)))
m=new V.a1(1,1,1)
l=new D.bd()
l.c=new V.a1(1,1,1)
l.a=V.lv()
k=l.b
l.b=o
o.gB().h(0,l.geN())
o=new D.L("mover",k,l.b,[U.a9])
o.b=!0
l.aq(o)
if(!l.c.t(0,m)){k=l.c
l.c=m
o=new D.L("color",k,m,[V.a1])
o.b=!0
l.aq(o)}p.h(0,l)
p=q.r
p.sam(0,new V.a1(0,0,1))
p=q.x
p.sam(0,new V.a1(0,1,0))
p=q.z
p.sam(0,new V.a1(1,0,0))
p=q.z
if(p.c===C.d){p.c=C.j
p.bD()
p.c_(100)
o=p.a
o.a=null
o.a7(a)}p.c_(10)
q.e.h(0,V.ap())
q.e.h(0,V.ap())
q.e.h(0,V.ap())
q.e.h(0,V.ap())
q.e.h(0,V.ap())
q.e.h(0,V.ap())
q.e.h(0,V.ap())
q.e.h(0,V.ap())
j=U.ki()
p=s.r
o=new U.dW()
l=U.kg()
l.scL(0,!0)
l.scv(6.283185307179586)
l.scz(0)
l.sX(0,0)
l.scw(100)
l.sT(0)
l.sci(0.5)
o.b=l
i=o.gaD()
l.gB().h(0,i)
l=U.kg()
l.scL(0,!0)
l.scv(6.283185307179586)
l.scz(0)
l.sX(0,0)
l.scw(100)
l.sT(0)
l.sci(0.5)
o.c=l
l.gB().h(0,i)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
h=new X.av(!1,!1,!1)
k=o.d
o.d=h
l=[X.av]
i=new D.L(a0,k,h,l)
i.b=!0
o.F(i)
i=o.f
if(i!==!1){o.f=!1
i=new D.L("invertX",i,!1,[P.ab])
i.b=!0
o.F(i)}i=o.r
if(i!==!1){o.r=!1
i=new D.L("invertY",i,!1,[P.ab])
i.b=!0
o.F(i)}o.aT(p)
j.h(0,o)
p=s.r
o=new U.dV()
i=U.kg()
i.scL(0,!0)
i.scv(6.283185307179586)
i.scz(0)
i.sX(0,0)
i.scw(100)
i.sT(0)
i.sci(0.2)
o.b=i
i.gB().h(0,o.gaD())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
h=new X.av(!0,!1,!1)
k=o.c
o.c=h
i=new D.L(a0,k,h,l)
i.b=!0
o.F(i)
o.aT(p)
j.h(0,o)
p=s.r
o=new U.dX()
o.c=0.01
o.e=o.d=0
h=new X.av(!1,!1,!1)
o.b=h
l=new D.L(a0,a,h,l)
l.b=!0
o.F(l)
o.aT(p)
j.h(0,o)
j.h(0,U.bN(V.h3(0,0,5)))
g=U.ki()
g.h(0,U.bN(V.h3(0.5,0,0)))
g.h(0,U.cu(0,1.7,0))
g.h(0,U.cu(0.5,0,0))
g.h(0,U.bN(V.kp(0.35)))
g.h(0,U.cu(-0.5,0,0))
g.h(0,U.cu(0,-1.7,0))
g.h(0,U.bN(V.h3(-0.5,0,0)))
f=U.ki()
f.h(0,U.cu(0,-1.4,0))
f.h(0,U.bN(V.h3(0.5,0,0)))
f.h(0,U.cu(0,1.4,0))
e=new M.dd()
e.a=!0
e.seR(0,O.kf(a1))
e.e.b8(e.gfM(),e.gfO())
e.y=e.x=e.r=e.f=null
d=X.mI(a)
c=new X.dw()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.sb_(a)
a1=c.c
if(!(Math.abs(a1-1.0471975511965976)<$.J().a)){c.c=1.0471975511965976
a1=new D.L("fov",a1,1.0471975511965976,[P.q])
a1.b=!0
c.aE(a1)}a1=c.d
if(!(Math.abs(a1-0.1)<$.J().a)){c.d=0.1
a1=new D.L("near",a1,0.1,[P.q])
a1.b=!0
c.aE(a1)}a1=c.e
if(!(Math.abs(a1-2000)<$.J().a)){c.e=2000
a1=new D.L("far",a1,2000,[P.q])
a1.b=!0
c.aE(a1)}a1=e.b
if(a1!==c){if(a1!=null)a1.gB().M(0,e.gaj())
k=e.b
e.b=c
c.gB().h(0,e.gaj())
a1=new D.L("camera",k,e.b,[X.d7])
a1.b=!0
e.ar(a1)}a1=e.c
if(a1!==d){if(a1!=null)a1.gB().M(0,e.gaj())
k=e.c
e.c=d
d.gB().h(0,e.gaj())
a1=new D.L("target",k,e.c,[X.dI])
a1.b=!0
e.ar(a1)}e.seq(a)
e.seq(q)
e.e.h(0,r)
e.b.sb_(j)
a1=e.f
if(a1==null)a1=e.f=D.T()
a1.h(0,new K.jU(g,f,q))
a1=s.d
if(a1!==e){if(a1!=null)a1.gB().M(0,s.gcR())
s.d=e
e.gB().h(0,s.gcR())
s.cS()}a1=new K.k1(r)
p=new V.hp("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.u("Failed to find shapes for RadioGroup")
p.dw(0,"Cuboid",new K.jV(a1),!0)
p.aJ(0,"Cylinder",new K.jW(a1))
p.aJ(0,"Cone",new K.jX(a1))
p.aJ(0,"Sphere",new K.jY(a1))
p.aJ(0,"Toroid",new K.jZ(a1))
p.aJ(0,"Knot",new K.k_(a1))
p.aJ(0,"Grid",new K.k0(a1))
V.oj(s)},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a){this.a=a},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.km.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gI:function(a){return H.ct(a)},
i:function(a){return"Instance of '"+H.bU(a)+"'"}}
J.fF.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iab:1}
J.dh.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.di.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hl.prototype={}
J.bC.prototype={}
J.bf.prototype={
i:function(a){var u=a[$.m8()]
if(u==null)return this.eE(a)
return"JavaScript function for "+H.m(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikh:1}
J.aJ.prototype={
h:function(a,b){H.z(b,H.w(a,0))
if(!!a.fixed$length)H.u(P.F("add"))
a.push(b)},
el:function(a,b){if(!!a.fixed$length)H.u(P.F("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dA(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.u(P.F("remove"))
for(u=0;u<a.length;++u)if(J.S(a[u],b)){a.splice(u,1)
return!0}return!1},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bM(a))}},
C:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.l(t,u,H.m(a[u]))
return t.join(b)},
iR:function(a){return this.C(a,"")},
iL:function(a,b,c,d){var u,t,s
H.z(b,d)
H.n(c,{func:1,ret:d,args:[d,H.w(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bM(a))}return t},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eC:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ad(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ad(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.w(a,0)])
return H.d(a.slice(b,c),[H.w(a,0)])},
giK:function(a){if(a.length>0)return a[0]
throw H.c(H.kZ())},
gay:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kZ())},
b9:function(a,b,c,d){var u,t,s=H.w(a,0)
H.l(d,"$ij",[s],"$aj")
if(!!a.immutable$list)H.u(P.F("setRange"))
P.bl(b,c,a.length)
u=c-b
if(u===0)return
P.kq(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.c5(d)
if(u>s.gk(d))throw H.c(H.mL())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
aL:function(a,b){var u
for(u=0;u<a.length;++u)if(J.S(a[u],b))return!0
return!1},
i:function(a){return P.kj(a,"[","]")},
ga0:function(a){return new J.at(a,a.length,[H.w(a,0)])},
gI:function(a){return H.ct(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.u(P.F("set length"))
if(b<0)throw H.c(P.ad(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.c3(a,b))
return a[b]},
l:function(a,b,c){H.z(c,H.w(a,0))
if(!!a.immutable$list)H.u(P.F("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c3(a,b))
a[b]=c},
n:function(a,b){var u,t=[H.w(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.f.n(a.length,b.gk(b))
t=H.d([],t)
this.sk(t,u)
this.b9(t,0,a.length,a)
this.b9(t,a.length,u,b)
return t},
$ij:1,
$ib:1}
J.kl.prototype={}
J.at.prototype={
gS:function(a){return this.d},
J:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.E(s))
u=t.c
if(u>=r){t.sd6(null)
return!1}t.sd6(s[u]);++t.c
return!0},
sd6:function(a){this.d=H.z(a,H.w(this,0))},
$ib0:1}
J.bx.prototype={
e_:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.F(""+a+".floor()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.F(""+a+".round()"))},
es:function(a,b){var u,t
if(b>20)throw H.c(P.ad(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
b4:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ad(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.u(P.F("Unexpected toString result: "+u))
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
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.c(H.aE(b))
return a+b},
p:function(a,b){if(typeof b!=="number")throw H.c(H.aE(b))
return a-b},
m:function(a,b){if(typeof b!=="number")throw H.c(H.aE(b))
return a*b},
b7:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eH:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ds(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.ds(a,b)},
ds:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.F("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aI:function(a,b){var u
if(a>0)u=this.dr(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hH:function(a,b){if(b<0)throw H.c(H.aE(b))
return this.dr(a,b)},
dr:function(a,b){return b>31?0:a>>>b},
$iq:1,
$ia8:1}
J.dg.prototype={$ip:1}
J.fG.prototype={}
J.be.prototype={
W:function(a,b){if(b<0)throw H.c(H.c3(a,b))
if(b>=a.length)H.u(H.c3(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.c3(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.kd(b,null,null))
return a+b},
aP:function(a,b,c,d){var u,t
c=P.bl(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a6:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ad(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.a6(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.aE(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.U()
if(b<0)throw H.c(P.dA(b,null))
if(b>c)throw H.c(P.dA(b,null))
if(c>a.length)throw H.c(P.dA(c,null))
return a.substring(b,c)},
aB:function(a,b){return this.A(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.K)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aa:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
e6:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ad(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
e5:function(a,b){return this.e6(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$il7:1,
$ih:1}
H.a5.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.b.W(this.a,b)},
$acI:function(){return[P.p]},
$ay:function(){return[P.p]},
$aj:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fq.prototype={}
H.dl.prototype={
gS:function(a){return this.d},
J:function(){var u,t=this,s=t.a,r=J.c5(s),q=r.gk(s)
if(t.b!==q)throw H.c(P.bM(s))
u=t.c
if(u>=q){t.saQ(null)
return!1}t.saQ(r.K(s,u));++t.c
return!0},
saQ:function(a){this.d=H.z(a,H.w(this,0))},
$ib0:1}
H.fW.prototype={
ga0:function(a){return new H.fX(J.bG(this.a),this.b,this.$ti)},
gk:function(a){return J.aG(this.a)},
K:function(a,b){return this.b.$1(J.kc(this.a,b))},
$aj:function(a,b){return[b]}}
H.fX.prototype={
J:function(){var u=this,t=u.b
if(t.J()){u.saQ(u.c.$1(t.gS(t)))
return!0}u.saQ(null)
return!1},
gS:function(a){return this.a},
saQ:function(a){this.a=H.z(a,H.w(this,1))},
$ab0:function(a,b){return[b]}}
H.iG.prototype={
ga0:function(a){return new H.iH(J.bG(this.a),this.b,this.$ti)}}
H.iH.prototype={
J:function(){var u,t
for(u=this.a,t=this.b;u.J();)if(H.C(t.$1(u.gS(u))))return!0
return!1},
gS:function(a){var u=this.a
return u.gS(u)}}
H.bP.prototype={}
H.cI.prototype={
l:function(a,b,c){H.z(c,H.ax(this,"cI",0))
throw H.c(P.F("Cannot modify an unmodifiable list"))}}
H.dS.prototype={}
H.fd.prototype={
i:function(a){return P.ko(this)},
l:function(a,b,c){H.z(b,H.w(this,0))
H.z(c,H.w(this,1))
return H.mD()},
$iD:1}
H.fe.prototype={
gk:function(a){return this.a},
bf:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bf(0,b))return
return this.d7(b)},
d7:function(a){return this.b[H.M(a)]},
L:function(a,b){var u,t,s,r,q=this,p=H.w(q,1)
H.n(b,{func:1,ret:-1,args:[H.w(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.z(q.d7(r),p))}}}
H.i1.prototype={
a9:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hh.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fI.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.m(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.m(t.a)+")"
return s+r+"' on '"+u+"' ("+H.m(t.a)+")"}}
H.ig.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k9.prototype={
$1:function(a){if(!!J.W(a).$ibv)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.ev.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaq:1}
H.cc.prototype={
i:function(a){return"Closure '"+H.bU(this).trim()+"'"},
$ikh:1,
gjq:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hS.prototype={}
H.hK.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c8(u)+"'"}}
H.ca.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ca))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.ct(this.a)
else u=typeof t!=="object"?J.d1(t):H.ct(t)
return(u^H.ct(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.bU(u)+"'")}}
H.i3.prototype={
i:function(a){return this.a}}
H.f9.prototype={
i:function(a){return this.a}}
H.hx.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.iI.prototype={
i:function(a){return"Assertion failed: "+P.de(this.a)}}
H.aK.prototype={
gk:function(a){return this.a},
gao:function(a){return new H.fN(this,[H.w(this,0)])},
bf:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d3(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d3(t,b)}else return s.iO(b)},
iO:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cs(u.bK(t,u.cr(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.ba(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.ba(r,b)
s=t==null?null:t.b
return s}else return q.iP(b)},
iP:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bK(r,s.cr(a))
t=s.cs(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s=this
H.z(b,H.w(s,0))
H.z(c,H.w(s,1))
if(typeof b==="string"){u=s.b
s.cW(u==null?s.b=s.bT():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cW(t==null?s.c=s.bT():t,b,c)}else s.iQ(b,c)},
iQ:function(a,b){var u,t,s,r,q=this
H.z(a,H.w(q,0))
H.z(b,H.w(q,1))
u=q.d
if(u==null)u=q.d=q.bT()
t=q.cr(a)
s=q.bK(u,t)
if(s==null)q.c0(u,t,[q.bU(a,b)])
else{r=q.cs(s,a)
if(r>=0)s[r].b=b
else s.push(q.bU(a,b))}},
L:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.w(s,0),H.w(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bM(s))
u=u.c}},
cW:function(a,b,c){var u,t=this
H.z(b,H.w(t,0))
H.z(c,H.w(t,1))
u=t.ba(a,b)
if(u==null)t.c0(a,b,t.bU(b,c))
else u.b=c},
bU:function(a,b){var u=this,t=new H.fM(H.z(a,H.w(u,0)),H.z(b,H.w(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cr:function(a){return J.d1(a)&0x3ffffff},
cs:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1},
i:function(a){return P.ko(this)},
ba:function(a,b){return a[b]},
bK:function(a,b){return a[b]},
c0:function(a,b,c){a[b]=c},
fd:function(a,b){delete a[b]},
d3:function(a,b){return this.ba(a,b)!=null},
bT:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c0(t,u,t)
this.fd(t,u)
return t}}
H.fM.prototype={}
H.fN.prototype={
gk:function(a){return this.a.a},
ga0:function(a){var u=this.a,t=new H.fO(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fO.prototype={
gS:function(a){return this.d},
J:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bM(t))
else{t=u.c
if(t==null){u.scV(null)
return!1}else{u.scV(t.a)
u.c=u.c.c
return!0}}},
scV:function(a){this.d=H.z(a,H.w(this,0))},
$ib0:1}
H.jO.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.jP.prototype={
$2:function(a,b){return this.a(a,b)},
$S:31}
H.jQ.prototype={
$1:function(a){return this.a(H.M(a))},
$S:35}
H.fH.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$il7:1,
$in8:1}
H.co.prototype={$ico:1}
H.by.prototype={$iby:1}
H.ds.prototype={
gk:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cp.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]},
l:function(a,b,c){H.nY(c)
H.bc(b,a,a.length)
a[b]=c},
$abP:function(){return[P.q]},
$ay:function(){return[P.q]},
$ij:1,
$aj:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.dt.prototype={
l:function(a,b,c){H.af(c)
H.bc(b,a,a.length)
a[b]=c},
$abP:function(){return[P.p]},
$ay:function(){return[P.p]},
$ij:1,
$aj:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hb.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.hc.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.hd.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.he.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.hf.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.du.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.cq.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bc(b,a,a.length)
return a[b]},
$icq:1,
$iR:1}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
P.iK.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.iJ.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:38}
P.iL.prototype={
$0:function(){this.a.$0()},
$S:0}
P.iM.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eB.prototype={
eZ:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c2(new P.jk(this,b),0),a)
else throw H.c(P.F("`setTimeout()` not found."))},
f_:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c2(new P.jj(this,a,Date.now(),b),0),a)
else throw H.c(P.F("Periodic timer."))},
$ib6:1}
P.jk.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jj.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.eH(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bb.prototype={
iT:function(a){if(this.c!==6)return!0
return this.b.b.cH(H.n(this.d,{func:1,ret:P.ab,args:[P.Q]}),a.a,P.ab,P.Q)},
iN:function(a){var u=this.e,t=P.Q,s={futureOr:1,type:H.w(this,1)},r=this.b.b
if(H.eR(u,{func:1,args:[P.Q,P.aq]}))return H.kI(r.jf(u,a.a,a.b,null,t,P.aq),s)
else return H.kI(r.cH(H.n(u,{func:1,args:[P.Q]}),a.a,null,t),s)}}
P.aC.prototype={
er:function(a,b,c){var u,t,s,r=H.w(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Y
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.nN(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aC($.Y,[c])
s=b==null?1:3
this.cX(new P.bb(t,s,a,b,[r,c]))
return t},
ji:function(a,b){return this.er(a,null,b)},
cX:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibb")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaC")
s=u.a
if(s<4){u.cX(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jC(null,null,s,H.n(new P.iU(t,a),{func:1,ret:-1}))}},
dl:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibb")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaC")
u=q.a
if(u<4){q.dl(a)
return}p.a=u
p.c=q.c}o.a=p.bc(a)
u=p.b
u.toString
P.jC(null,null,u,H.n(new P.iY(o,p),{func:1,ret:-1}))}},
bX:function(){var u=H.f(this.c,"$ibb")
this.c=null
return this.bc(u)},
bc:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d_:function(a){var u,t,s=this,r=H.w(s,0)
H.kI(a,{futureOr:1,type:r})
u=s.$ti
if(H.kF(a,"$ich",u,"$ach"))if(H.kF(a,"$iaC",u,null))P.lw(a,s)
else P.nr(a,s)
else{t=s.bX()
H.z(a,r)
s.a=4
s.c=a
P.cL(s,t)}},
d0:function(a,b){var u,t=this
H.f(b,"$iaq")
u=t.bX()
t.a=8
t.c=new P.ak(a,b)
P.cL(t,u)},
$ich:1}
P.iU.prototype={
$0:function(){P.cL(this.a,this.b)},
$S:0}
P.iY.prototype={
$0:function(){P.cL(this.b,this.a.a)},
$S:0}
P.iV.prototype={
$1:function(a){var u=this.a
u.a=0
u.d_(a)},
$S:18}
P.iW.prototype={
$2:function(a,b){H.f(b,"$iaq")
this.a.d0(a,b)},
$1:function(a){return this.$2(a,null)},
$S:36}
P.iX.prototype={
$0:function(){this.a.d0(this.b,this.c)},
$S:0}
P.j0.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ep(H.n(s.d,{func:1}),null)}catch(r){u=H.aF(r)
t=H.c6(r)
if(o.d){s=H.f(o.a.a.c,"$iak").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iak")
else q.b=new P.ak(u,t)
q.a=!0
return}if(!!J.W(n).$ich){if(n instanceof P.aC&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iak")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ji(new P.j1(p),null)
s.a=!1}},
$S:3}
P.j1.prototype={
$1:function(a){return this.a},
$S:49}
P.j_.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.w(s,0)
q=H.z(n.c,r)
p=H.w(s,1)
n.a.b=s.b.b.cH(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aF(o)
t=H.c6(o)
s=n.a
s.b=new P.ak(u,t)
s.a=!0}},
$S:3}
P.iZ.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iak")
r=m.c
if(H.C(r.iT(u))&&r.e!=null){q=m.b
q.b=r.iN(u)
q.a=!1}}catch(p){t=H.aF(p)
s=H.c6(p)
r=H.f(m.a.a.c,"$iak")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ak(t,s)
n.a=!0}},
$S:3}
P.e_.prototype={}
P.hN.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aC($.Y,[P.p])
r.a=0
u=H.w(s,0)
t=H.n(new P.hP(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.hQ(r,q),{func:1,ret:-1})
W.aa(s.a,s.b,t,!1,u)
return q}}
P.hP.prototype={
$1:function(a){H.z(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.w(this.b,0)]}}}
P.hQ.prototype={
$0:function(){this.b.d_(this.a.a)},
$S:0}
P.cx.prototype={}
P.hO.prototype={}
P.b6.prototype={}
P.ak.prototype={
i:function(a){return H.m(this.a)},
$ibv:1}
P.jt.prototype={$ioW:1}
P.jB.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dv():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.j8.prototype={
jg:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.Y){a.$0()
return}P.lH(r,r,this,a,-1)}catch(s){u=H.aF(s)
t=H.c6(s)
P.jA(r,r,this,u,H.f(t,"$iaq"))}},
jh:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.k===$.Y){a.$1(b)
return}P.lI(r,r,this,a,b,-1,c)}catch(s){u=H.aF(s)
t=H.c6(s)
P.jA(r,r,this,u,H.f(t,"$iaq"))}},
it:function(a,b){return new P.ja(this,H.n(a,{func:1,ret:b}),b)},
c9:function(a){return new P.j9(this,H.n(a,{func:1,ret:-1}))},
dA:function(a,b){return new P.jb(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ep:function(a,b){H.n(a,{func:1,ret:b})
if($.Y===C.k)return a.$0()
return P.lH(null,null,this,a,b)},
cH:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.Y===C.k)return a.$1(b)
return P.lI(null,null,this,a,b,c,d)},
jf:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.Y===C.k)return a.$2(b,c)
return P.nO(null,null,this,a,b,c,d,e,f)}}
P.ja.prototype={
$0:function(){return this.a.ep(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.j9.prototype={
$0:function(){return this.a.jg(this.b)},
$S:3}
P.jb.prototype={
$1:function(a){var u=this.c
return this.a.jh(this.b,H.z(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j5.prototype={
ga0:function(a){return P.ly(this,this.r,H.w(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.z(b,H.w(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cY(u==null?s.b=P.ky():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cY(t==null?s.c=P.ky():t,b)}else return s.f1(0,b)},
f1:function(a,b){var u,t,s,r=this
H.z(b,H.w(r,0))
u=r.d
if(u==null)u=r.d=P.ky()
t=r.d1(b)
s=u[t]
if(s==null)u[t]=[r.bG(b)]
else{if(r.d8(s,b)>=0)return!1
s.push(r.bG(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ht(this.c,b)
else return this.hs(0,b)},
hs:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.fn(r,b)
t=s.d8(u,b)
if(t<0)return!1
s.dt(u.splice(t,1)[0])
return!0},
cY:function(a,b){H.z(b,H.w(this,0))
if(H.f(a[b],"$icM")!=null)return!1
a[b]=this.bG(b)
return!0},
ht:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icM")
if(u==null)return!1
this.dt(u)
delete a[b]
return!0},
dd:function(){this.r=1073741823&this.r+1},
bG:function(a){var u,t=this,s=new P.cM(H.z(a,H.w(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dd()
return s},
dt:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dd()},
d1:function(a){return J.d1(a)&1073741823},
fn:function(a,b){return a[this.d1(b)]},
d8:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1}}
P.cM.prototype={}
P.j6.prototype={
gS:function(a){return this.d},
J:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bM(t))
else{t=u.c
if(t==null){u.scZ(null)
return!1}else{u.scZ(H.z(t.a,H.w(u,0)))
u.c=u.c.b
return!0}}},
scZ:function(a){this.d=H.z(a,H.w(this,0))},
$ib0:1}
P.fP.prototype={
$2:function(a,b){this.a.l(0,H.z(a,this.b),H.z(b,this.c))},
$S:7}
P.fQ.prototype={$ij:1,$ib:1}
P.y.prototype={
ga0:function(a){return new H.dl(a,this.gk(a),[H.bE(this,a,"y",0)])},
K:function(a,b){return this.j(a,b)},
jk:function(a,b){var u,t=this,s=H.d([],[H.bE(t,a,"y",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.l(s,u,t.j(a,u))
return s},
jj:function(a){return this.jk(a,!0)},
n:function(a,b){var u,t=this,s=[H.bE(t,a,"y",0)]
H.l(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sk(u,C.f.n(t.gk(a),b.gk(b)))
C.a.b9(u,0,t.gk(a),a)
C.a.b9(u,t.gk(a),u.length,b)
return u},
iI:function(a,b,c,d){var u
H.z(d,H.bE(this,a,"y",0))
P.bl(b,c,this.gk(a))
for(u=b;u<c;++u)this.l(a,u,d)},
i:function(a){return P.kj(a,"[","]")}}
P.fT.prototype={}
P.fU.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.m(a)
t.a=u+": "
t.a+=H.m(b)},
$S:7}
P.ag.prototype={
L:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bE(s,a,"ag",0),H.bE(s,a,"ag",1)]})
for(u=J.bG(s.gao(a));u.J();){t=u.gS(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.aG(this.gao(a))},
i:function(a){return P.ko(a)},
$iD:1}
P.jl.prototype={
l:function(a,b,c){H.z(b,H.w(this,0))
H.z(c,H.w(this,1))
throw H.c(P.F("Cannot modify unmodifiable map"))}}
P.fV.prototype={
j:function(a,b){return J.kQ(this.a,b)},
l:function(a,b,c){J.kb(this.a,H.z(b,H.w(this,0)),H.z(c,H.w(this,1)))},
L:function(a,b){J.kR(this.a,H.n(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]}))},
gk:function(a){return J.aG(this.a)},
i:function(a){return J.as(this.a)},
$iD:1}
P.dT.prototype={}
P.jc.prototype={
i:function(a){return P.kj(this,"{","}")},
K:function(a,b){var u,t,s,r=this
P.kq(b,"index")
for(u=P.ly(r,r.r,H.w(r,0)),t=0;u.J();){s=u.d
if(b===t)return s;++t}throw H.c(P.X(b,r,"index",null,t))},
$ij:1,
$ilf:1}
P.ee.prototype={}
P.eG.prototype={}
P.f5.prototype={
iV:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bl(a0,a1,b.length)
u=$.mn()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.G(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jN(C.b.G(b,n))
j=H.jN(C.b.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.aj("")
g=r.a+=C.b.A(b,s,t)
r.a=g+H.dy(m)
s=n
continue}}throw H.c(P.a3("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.A(b,s,a1)
f=g.length
if(q>=0)P.kT(b,p,a1,q,o,f)
else{e=C.f.b7(f-1,4)+1
if(e===1)throw H.c(P.a3(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aP(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kT(b,p,a1,q,o,d)
else{e=C.f.b7(d,4)
if(e===1)throw H.c(P.a3(c,b,a1))
if(e>1)b=C.b.aP(b,a1,a1,e===2?"==":"=")}return b},
$abK:function(){return[[P.b,P.p],P.h]}}
P.f6.prototype={
$abO:function(){return[[P.b,P.p],P.h]}}
P.bK.prototype={}
P.bO.prototype={}
P.fr.prototype={
$abK:function(){return[P.h,[P.b,P.p]]}}
P.ip.prototype={
giH:function(){return C.L}}
P.ir.prototype={
cf:function(a){var u,t,s=P.bl(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.js(u)
if(t.fm(a,0,s)!==s)t.dv(J.mv(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nI(0,t.b,u.length)))},
$abO:function(){return[P.h,[P.b,P.p]]}}
P.js.prototype={
dv:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fm:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.W(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.G(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dv(r,C.b.G(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iq.prototype={
cf:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.p],"$ab")
u=P.ni(!1,a,0,null)
if(u!=null)return u
t=P.bl(0,null,J.aG(a))
s=P.lK(a,0,t)
if(s>0){r=P.cy(a,0,s)
if(s===t)return r
q=new P.aj(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.aj("")
n=new P.jr(!1,q)
n.c=o
n.ix(a,p,t)
if(n.e>0){H.u(P.a3("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.dy(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abO:function(){return[[P.b,P.p],P.h]}}
P.jr.prototype={
ix:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.c5(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bA()
if((o&192)!==128){n=P.a3(h+C.f.b4(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.x,n)
if(u<=C.x[n]){n=P.a3("Overlong encoding of 0x"+C.f.b4(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a3("Character outside valid Unicode range: 0x"+C.f.b4(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.dy(u)
i.c=!1}for(n=p<c;n;){m=P.lK(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cy(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.U()
if(o<0){j=P.a3("Negative UTF-8 code unit: -0x"+C.f.b4(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a3(h+C.f.b4(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.ab.prototype={}
P.au.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.au&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.f.aI(u,30))&1073741823},
i:function(a){var u=this,t=P.mE(H.n4(u)),s=P.d9(H.n2(u)),r=P.d9(H.mZ(u)),q=P.d9(H.n_(u)),p=P.d9(H.n1(u)),o=P.d9(H.n3(u)),n=P.mF(H.n0(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.q.prototype={}
P.aZ.prototype={
n:function(a,b){return new P.aZ(C.f.n(this.a,b.gff()))},
p:function(a,b){return new P.aZ(C.f.p(this.a,b.gff()))},
t:function(a,b){if(b==null)return!1
return b instanceof P.aZ&&this.a===b.a},
gI:function(a){return C.f.gI(this.a)},
i:function(a){var u,t,s,r=new P.fp(),q=this.a
if(q<0)return"-"+new P.aZ(0-q).i(0)
u=r.$1(C.f.a1(q,6e7)%60)
t=r.$1(C.f.a1(q,1e6)%60)
s=new P.fo().$1(q%1e6)
return""+C.f.a1(q,36e8)+":"+H.m(u)+":"+H.m(t)+"."+H.m(s)}}
P.fo.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:20}
P.fp.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:20}
P.bv.prototype={}
P.f_.prototype={
i:function(a){return"Assertion failed"}}
P.dv.prototype={
i:function(a){return"Throw of null."}}
P.aV.prototype={
gbI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbH:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbI()+o+u
if(!q.a)return t
s=q.gbH()
r=P.de(q.b)
return t+s+": "+r}}
P.bV.prototype={
gbI:function(){return"RangeError"},
gbH:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.m(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.m(s)
else if(t>s)u=": Not in range "+H.m(s)+".."+H.m(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.m(s)}return u}}
P.fE.prototype={
gbI:function(){return"RangeError"},
gbH:function(){var u,t=H.af(this.b)
if(typeof t!=="number")return t.U()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.m(u)},
gk:function(a){return this.f}}
P.ih.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.id.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dG.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fc.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.de(u)+"."}}
P.hk.prototype={
i:function(a){return"Out of Memory"},
$ibv:1}
P.dF.prototype={
i:function(a){return"Stack Overflow"},
$ibv:1}
P.fj.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e7.prototype={
i:function(a){return"Exception: "+this.a}}
P.fB.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.A(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.G(f,q)
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
k=""}j=C.b.A(f,m,n)
return h+l+j+k+"\n"+C.b.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.m(g)+")"):h}}
P.p.prototype={}
P.j.prototype={
gk:function(a){var u,t=this.ga0(this)
for(u=0;t.J();)++u
return u},
K:function(a,b){var u,t,s
P.kq(b,"index")
for(u=this.ga0(this),t=0;u.J();){s=u.gS(u)
if(b===t)return s;++t}throw H.c(P.X(b,this,"index",null,t))},
i:function(a){return P.mK(this,"(",")")}}
P.b0.prototype={}
P.b.prototype={$ij:1}
P.D.prototype={}
P.K.prototype={
gI:function(a){return P.Q.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a8.prototype={}
P.Q.prototype={constructor:P.Q,$iQ:1,
t:function(a,b){return this===b},
gI:function(a){return H.ct(this)},
i:function(a){return"Instance of '"+H.bU(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.h.prototype={$il7:1}
P.aj.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iox:1}
P.im.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.l(a,"$iD",[r,r],"$aD")
H.M(b)
u=J.kJ(b).e5(b,"=")
if(u===-1){if(b!=="")J.kb(a,P.kA(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.A(b,0,u)
s=C.b.aB(b,u+1)
r=this.a
J.kb(a,P.kA(t,0,t.length,r,!0),P.kA(s,0,s.length,r,!0))}return a},
$S:39}
P.ij.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv4 address, "+a,this.a,b))},
$S:41}
P.ik.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.il.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eU(C.b.A(this.b,a,b),null,16)
if(typeof u!=="number")return u.U()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:44}
P.bZ.prototype={
gey:function(){return this.b},
gcq:function(a){var u=this.c
if(u==null)return""
if(C.b.a5(u,"["))return C.b.A(u,1,u.length-1)
return u},
gbw:function(a){var u=this.d
if(u==null)return P.lz(this.a)
return u},
gcC:function(a){var u=this.f
return u==null?"":u},
ge0:function(){var u=this.r
return u==null?"":u},
em:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.l(b,"$iD",[P.h,null],"$aD")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a5(p,"/"))p="/"+p
n=P.kz(null,0,0,b)
return new P.bZ(u,s,q,r,p,n,m.r)},
gcD:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shr(new P.dT(P.lo(u==null?"":u),[t,t]))}return s.Q},
ge1:function(){return this.c!=null},
ge4:function(){return this.f!=null},
ge2:function(){return this.r!=null},
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
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.W(b).$iku)if(s.a==b.gbC())if(s.c!=null===b.ge1())if(s.b==b.gey())if(s.gcq(s)==b.gcq(b))if(s.gbw(s)==b.gbw(b))if(s.e===b.geg(b)){u=s.f
t=u==null
if(!t===b.ge4()){if(t)u=""
if(u===b.gcC(b)){u=s.r
t=u==null
if(!t===b.ge2()){if(t)u=""
u=u===b.ge0()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.b.gI(this.i(0)):u},
shr:function(a){var u=P.h
this.Q=H.l(a,"$iD",[u,u],"$aD")},
$iku:1,
gbC:function(){return this.a},
geg:function(a){return this.e}}
P.jm.prototype={
$1:function(a){throw H.c(P.a3("Invalid port",this.a,this.b+1))},
$S:46}
P.jn.prototype={
$1:function(a){return P.jq(C.S,a,C.l,!1)},
$S:45}
P.jp.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.jq(C.q,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.jq(C.q,b,C.l,!0))}},
$S:17}
P.jo.prototype={
$2:function(a,b){var u,t
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(u=J.bG(H.m_(b,"$ij")),t=this.a;u.J();)t.$2(a,H.M(u.gS(u)))},
$S:28}
P.ii.prototype={
gex:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.e6(u,"?",o)
s=u.length
if(t>=0){r=P.cW(u,t+1,s,C.o,!1)
s=t}else r=p
return q.c=new P.iQ("data",p,p,p,P.cW(u,o,s,C.z,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jx.prototype={
$1:function(a){return new Uint8Array(96)},
$S:29}
P.jw.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.mw(u,0,96,b)
return u},
$S:30}
P.jy.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.G(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.jz.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.G(b,0),t=C.b.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.jd.prototype={
ge1:function(){return this.c>0},
ge3:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.r(t)
t=u+1<t
u=t}else u=!1
return u},
ge4:function(){var u=this.f
if(typeof u!=="number")return u.U()
return u<this.r},
ge2:function(){return this.r<this.a.length},
gda:function(){return this.b===4&&C.b.a5(this.a,"http")},
gdc:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbC:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gda())q=t.x="http"
else if(t.gdc()){t.x="https"
q="https"}else if(q===4&&C.b.a5(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a5(t.a,r)){t.x=r
q=r}else{q=C.b.A(t.a,0,q)
t.x=q}return q},
gey:function(){var u=this.c,t=this.b+3
return u>t?C.b.A(this.a,t,u-1):""},
gcq:function(a){var u=this.c
return u>0?C.b.A(this.a,u,this.d):""},
gbw:function(a){var u,t=this
if(t.ge3()){u=t.d
if(typeof u!=="number")return u.n()
return P.eU(C.b.A(t.a,u+1,t.e),null,null)}if(t.gda())return 80
if(t.gdc())return 443
return 0},
geg:function(a){return C.b.A(this.a,this.e,this.f)},
gcC:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.U()
return u<t?C.b.A(this.a,u+1,t):""},
ge0:function(){var u=this.r,t=this.a
return u<t.length?C.b.aB(t,u+1):""},
gcD:function(){var u=this,t=u.f
if(typeof t!=="number")return t.U()
if(t>=u.r)return C.T
t=P.h
return new P.dT(P.lo(u.gcC(u)),[t,t])},
em:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iD",[P.h,null],"$aD")
u=k.gbC()
t=u==="file"
s=k.c
r=s>0?C.b.A(k.a,k.b+3,s):""
q=k.ge3()?k.gbw(k):j
s=k.c
if(s>0)p=C.b.A(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.A(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a5(o,"/"))o="/"+o
m=P.kz(j,0,0,b)
n=k.r
l=n<s.length?C.b.aB(s,n+1):j
return new P.bZ(u,r,p,q,o,m,l)},
gI:function(a){var u=this.y
return u==null?this.y=C.b.gI(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.W(b).$iku&&this.a===b.i(0)},
i:function(a){return this.a},
$iku:1}
P.iQ.prototype={}
W.v.prototype={}
W.eV.prototype={
gk:function(a){return a.length}}
W.eX.prototype={
i:function(a){return String(a)}}
W.eY.prototype={
i:function(a){return String(a)}}
W.bI.prototype={$ibI:1}
W.bJ.prototype={
eA:function(a,b,c){var u=a.getContext(b,P.nV(c))
return u},
$ibJ:1}
W.bu.prototype={
gk:function(a){return a.length}}
W.cd.prototype={$icd:1}
W.ff.prototype={
gk:function(a){return a.length}}
W.V.prototype={$iV:1}
W.ce.prototype={
gk:function(a){return a.length}}
W.fg.prototype={}
W.aX.prototype={}
W.aY.prototype={}
W.fh.prototype={
gk:function(a){return a.length}}
W.fi.prototype={
gk:function(a){return a.length}}
W.fk.prototype={
gk:function(a){return a.length}}
W.da.prototype={$ida:1}
W.fl.prototype={
i:function(a){return String(a)}}
W.db.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.l(c,"$iah",[P.a8],"$aah")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.ah,P.a8]]},
$ay:function(){return[[P.ah,P.a8]]},
$ij:1,
$aj:function(){return[[P.ah,P.a8]]},
$ib:1,
$ab:function(){return[[P.ah,P.a8]]},
$aB:function(){return[[P.ah,P.a8]]}}
W.dc.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaA(a))+" x "+H.m(this.gax(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iah)return!1
return a.left===u.gbv(b)&&a.top===u.gby(b)&&this.gaA(a)===u.gaA(b)&&this.gax(a)===u.gax(b)},
gI:function(a){return W.lx(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(this.gaA(a)),C.e.gI(this.gax(a)))},
gdB:function(a){return a.bottom},
gax:function(a){return a.height},
gbv:function(a){return a.left},
gbx:function(a){return a.right},
gby:function(a){return a.top},
gaA:function(a){return a.width},
$iah:1,
$aah:function(){return[P.a8]}}
W.fm.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.M(c)
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.h]},
$ay:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aB:function(){return[P.h]}}
W.fn.prototype={
gk:function(a){return a.length}}
W.iO.prototype={
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
ga0:function(a){var u=this.jj(this)
return new J.at(u,u.length,[H.w(u,0)])},
$ay:function(){return[W.a2]},
$aj:function(){return[W.a2]},
$ab:function(){return[W.a2]}}
W.a2.prototype={
gce:function(a){return new W.iO(a,a.children)},
gdC:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.U()
if(s<0)s=-s*0
if(typeof r!=="number")return r.U()
if(r<0)r=-r*0
return new P.ah(u,t,s,r,[P.a8])},
i:function(a){return a.localName},
$ia2:1}
W.o.prototype={$io:1}
W.i.prototype={
im:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.f2(a,b,c,!1)},
f2:function(a,b,c,d){return a.addEventListener(b,H.c2(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ii:1}
W.ay.prototype={$iay:1}
W.cg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iay")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.ay]},
$ay:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$icg:1,
$aB:function(){return[W.ay]}}
W.fw.prototype={
gk:function(a){return a.length}}
W.fA.prototype={
gk:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.fD.prototype={
gk:function(a){return a.length}}
W.bQ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iG")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.G]},
$ay:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ibQ:1,
$aB:function(){return[W.G]}}
W.cj.prototype={$icj:1}
W.ck.prototype={$ick:1}
W.b1.prototype={$ib1:1}
W.fR.prototype={
i:function(a){return String(a)}}
W.h4.prototype={
gk:function(a){return a.length}}
W.cm.prototype={$icm:1}
W.h5.prototype={
j:function(a,b){return P.bn(a.get(H.M(b)))},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gao:function(a){var u=H.d([],[P.h])
this.L(a,new W.h6(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.F("Not supported"))},
$aag:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
W.h6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.h7.prototype={
j:function(a,b){return P.bn(a.get(H.M(b)))},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gao:function(a){var u=H.d([],[P.h])
this.L(a,new W.h8(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.F("Not supported"))},
$aag:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
W.h8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aL.prototype={$iaL:1}
W.h9.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaL")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aL]},
$ay:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aB:function(){return[W.aL]}}
W.ac.prototype={$iac:1}
W.iN.prototype={
l:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
ga0:function(a){var u=this.a.childNodes
return new W.df(u,u.length,[H.bE(C.U,u,"B",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ay:function(){return[W.G]},
$aj:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
jd:function(a,b){var u,t
try{u=a.parentNode
J.mt(u,b,a)}catch(t){H.aF(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eD(a):u},
hw:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iG")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.G]},
$ay:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aB:function(){return[W.G]}}
W.aM.prototype={$iaM:1,
gk:function(a){return a.length}}
W.hm.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aM]},
$ay:function(){return[W.aM]},
$ij:1,
$aj:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aB:function(){return[W.aM]}}
W.hv.prototype={
j:function(a,b){return P.bn(a.get(H.M(b)))},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gao:function(a){var u=H.d([],[P.h])
this.L(a,new W.hw(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.F("Not supported"))},
$aag:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
W.hw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hy.prototype={
gk:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.hH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaO")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aO]},
$ay:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aB:function(){return[W.aO]}}
W.aP.prototype={$iaP:1}
W.hI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaP")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aP]},
$ay:function(){return[W.aP]},
$ij:1,
$aj:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aB:function(){return[W.aP]}}
W.aQ.prototype={$iaQ:1,
gk:function(a){return a.length}}
W.hL.prototype={
j:function(a,b){return a.getItem(H.M(b))},
l:function(a,b,c){a.setItem(b,c)},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gao:function(a){var u=H.d([],[P.h])
this.L(a,new W.hM(u))
return u},
gk:function(a){return a.length},
$aag:function(){return[P.h,P.h]},
$iD:1,
$aD:function(){return[P.h,P.h]}}
W.hM.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:17}
W.az.prototype={$iaz:1}
W.bm.prototype={$ibm:1}
W.aR.prototype={$iaR:1}
W.aA.prototype={$iaA:1}
W.hT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaA")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aA]},
$ay:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$aB:function(){return[W.aA]}}
W.hU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aR]},
$ay:function(){return[W.aR]},
$ij:1,
$aj:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aB:function(){return[W.aR]}}
W.hW.prototype={
gk:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.aT.prototype={$iaT:1}
W.hZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaS")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aB:function(){return[W.aS]}}
W.i_.prototype={
gk:function(a){return a.length}}
W.bB.prototype={}
W.io.prototype={
i:function(a){return String(a)}}
W.iE.prototype={
gk:function(a){return a.length}}
W.ba.prototype={
giC:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.F("deltaY is not supported"))},
giB:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.F("deltaX is not supported"))},
$iba:1}
W.cK.prototype={
hx:function(a,b){return a.requestAnimationFrame(H.c2(H.n(b,{func:1,ret:-1,args:[P.a8]}),1))},
fg:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iV")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.V]},
$ay:function(){return[W.V]},
$ij:1,
$aj:function(){return[W.V]},
$ib:1,
$ab:function(){return[W.V]},
$aB:function(){return[W.V]}}
W.e2.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iah)return!1
return a.left===u.gbv(b)&&a.top===u.gby(b)&&a.width===u.gaA(b)&&a.height===u.gax(b)},
gI:function(a){return W.lx(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gax:function(a){return a.height},
gaA:function(a){return a.width}}
W.j2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaI")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aI]},
$ay:function(){return[W.aI]},
$ij:1,
$aj:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aB:function(){return[W.aI]}}
W.ej.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iG")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.G]},
$ay:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aB:function(){return[W.G]}}
W.je.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aQ]},
$ay:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aB:function(){return[W.aQ]}}
W.ji.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaz")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.az]},
$ay:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]},
$ib:1,
$ab:function(){return[W.az]},
$aB:function(){return[W.az]}}
W.iR.prototype={}
W.kx.prototype={}
W.iS.prototype={}
W.iT.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:32}
W.B.prototype={
ga0:function(a){return new W.df(a,this.gk(a),[H.bE(this,a,"B",0)])}}
W.df.prototype={
J:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd9(J.kQ(u.a,t))
u.c=t
return!0}u.sd9(null)
u.c=s
return!1},
gS:function(a){return this.d},
sd9:function(a){this.d=H.z(a,H.w(this,0))},
$ib0:1}
W.e1.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.er.prototype={}
W.es.prototype={}
W.ew.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
P.jf.prototype={
dZ:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cK:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.W(a)
if(!!u.$iau)return new Date(a.a)
if(!!u.$in8)throw H.c(P.ie("structured clone of RegExp"))
if(!!u.$iay)return a
if(!!u.$ibI)return a
if(!!u.$icg)return a
if(!!u.$icj)return a
if(!!u.$ico||!!u.$iby||!!u.$icm)return a
if(!!u.$iD){t=q.dZ(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.l(s,t,r)
u.L(a,new P.jh(p,q))
return p.a}if(!!u.$ib){t=q.dZ(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.iz(a,t)}throw H.c(P.ie("structured clone of other type"))},
iz:function(a,b){var u,t=J.c5(a),s=t.gk(a),r=new Array(s)
C.a.l(this.b,b,r)
for(u=0;u<s;++u)C.a.l(r,u,this.cK(t.j(a,u)))
return r}}
P.jh.prototype={
$2:function(a,b){this.a.a[a]=this.b.cK(b)},
$S:7}
P.jD.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.jg.prototype={}
P.fx.prototype={
gbb:function(){var u=this.b,t=H.ax(u,"y",0),s=W.a2
return new H.fW(new H.iG(u,H.n(new P.fy(),{func:1,ret:P.ab,args:[t]}),[t]),H.n(new P.fz(),{func:1,ret:s,args:[t]}),[t,s])},
l:function(a,b,c){var u
H.f(c,"$ia2")
u=this.gbb()
J.mx(u.b.$1(J.kc(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aG(this.gbb().a)},
j:function(a,b){var u=this.gbb()
return u.b.$1(J.kc(u.a,b))},
ga0:function(a){var u=P.l1(this.gbb(),!1,W.a2)
return new J.at(u,u.length,[H.w(u,0)])},
$ay:function(){return[W.a2]},
$aj:function(){return[W.a2]},
$ab:function(){return[W.a2]}}
P.fy.prototype={
$1:function(a){return!!J.W(H.f(a,"$iG")).$ia2},
$S:33}
P.fz.prototype={
$1:function(a){return H.k(H.f(a,"$iG"),"$ia2")},
$S:34}
P.j7.prototype={
gbx:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.r(t)
return H.z(u+t,H.w(this,0))},
gdB:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.r(t)
return H.z(u+t,H.w(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.m(u.a)+", "+H.m(u.b)+") "+H.m(u.c)+" x "+H.m(u.d)},
t:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.W(b)
if(!!u.$iah){t=p.a
if(t==u.gbv(b)){s=p.b
if(s==u.gby(b)){r=p.c
if(typeof t!=="number")return t.n()
if(typeof r!=="number")return H.r(r)
q=H.w(p,0)
if(H.z(t+r,q)===u.gbx(b)){t=p.d
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.r(t)
u=H.z(s+t,q)===u.gdB(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.d1(s),q=t.b,p=J.d1(q),o=t.c
if(typeof s!=="number")return s.n()
if(typeof o!=="number")return H.r(o)
u=H.w(t,0)
o=C.f.gI(H.z(s+o,u))
s=t.d
if(typeof q!=="number")return q.n()
if(typeof s!=="number")return H.r(s)
u=C.f.gI(H.z(q+s,u))
return P.ns(P.j4(P.j4(P.j4(P.j4(0,r),p),o),u))}}
P.ah.prototype={
gbv:function(a){return this.a},
gby:function(a){return this.b},
gaA:function(a){return this.c},
gax:function(a){return this.d}}
P.b2.prototype={$ib2:1}
P.fK.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.f(c,"$ib2")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.b2]},
$ij:1,
$aj:function(){return[P.b2]},
$ib:1,
$ab:function(){return[P.b2]},
$aB:function(){return[P.b2]}}
P.b5.prototype={$ib5:1}
P.hi.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.f(c,"$ib5")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.b5]},
$ij:1,
$aj:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aB:function(){return[P.b5]}}
P.ho.prototype={
gk:function(a){return a.length}}
P.hR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.M(c)
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aB:function(){return[P.h]}}
P.t.prototype={
gce:function(a){return new P.fx(a,new W.iN(a))}}
P.b7.prototype={$ib7:1}
P.i0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.f(c,"$ib7")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.b7]},
$ij:1,
$aj:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aB:function(){return[P.b7]}}
P.ec.prototype={}
P.ed.prototype={}
P.em.prototype={}
P.en.prototype={}
P.ex.prototype={}
P.ey.prototype={}
P.eE.prototype={}
P.eF.prototype={}
P.R.prototype={$ij:1,
$aj:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
P.f1.prototype={
gk:function(a){return a.length}}
P.f2.prototype={
j:function(a,b){return P.bn(a.get(H.M(b)))},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gao:function(a){var u=H.d([],[P.h])
this.L(a,new P.f3(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.F("Not supported"))},
$aag:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
P.f3.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.f4.prototype={
gk:function(a){return a.length}}
P.bH.prototype={}
P.hj.prototype={
gk:function(a){return a.length}}
P.e0.prototype={}
P.d3.prototype={$id3:1}
P.dz.prototype={$idz:1}
P.bW.prototype={
O:function(a,b,c){return a.uniform1f(b,c)},
a_:function(a,b,c){return a.uniform1i(b,c)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ev:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ew:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibW:1}
P.dD.prototype={$idD:1}
P.dR.prototype={$idR:1}
P.hJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return P.bn(a.item(b))},
l:function(a,b,c){H.f(c,"$iD")
throw H.c(P.F("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[[P.D,,,]]},
$ij:1,
$aj:function(){return[[P.D,,,]]},
$ib:1,
$ab:function(){return[[P.D,,,]]},
$aB:function(){return[[P.D,,,]]}}
P.et.prototype={}
P.eu.prototype={}
O.a0.prototype={
bE:function(a){var u=this
u.sft(H.d([],[a]))
u.sdj(null)
u.sdf(null)
u.sdk(null)},
cN:function(a,b,c){var u=this,t=H.ax(u,"a0",0)
H.n(b,{func:1,ret:P.ab,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.p,[P.j,t]]}
H.n(a,t)
H.n(c,t)
u.sdj(b)
u.sdf(a)
u.sdk(c)},
b8:function(a,b){return this.cN(a,null,b)},
di:function(a){var u
H.l(a,"$ij",[H.ax(this,"a0",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
de:function(a,b){var u
H.l(b,"$ij",[H.ax(this,"a0",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
ga0:function(a){var u=this.a
return new J.at(u,u.length,[H.w(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ax(s,"a0",0)
H.z(b,r)
r=[r]
if(H.C(s.di(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.de(t,H.d([b],r))}},
l:function(a,b,c){var u,t,s,r=this,q=H.ax(r,"a0",0)
H.z(c,q)
u=r.a
if(b>=u.length)return H.e(u,b)
t=u[b]
if(!J.S(t,c)&&H.C(r.di(H.d([c],[q])))){C.a.l(r.a,b,c)
u=[q]
q=H.l(H.d([t],u),"$ij",[q],"$aj")
s=r.d
if(s!=null)s.$2(b,q)
r.de(b,H.d([c],u))}},
sft:function(a){this.a=H.l(a,"$ib",[H.ax(this,"a0",0)],"$ab")},
sdj:function(a){this.b=H.n(a,{func:1,ret:P.ab,args:[[P.j,H.ax(this,"a0",0)]]})},
sdf:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.p,[P.j,H.ax(this,"a0",0)]]})},
sdk:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.p,[P.j,H.ax(this,"a0",0)]]})},
$ij:1}
O.cl.prototype={
gk:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.T():u},
aC:function(){var u=this.b
if(u!=null)u.H(null)},
gY:function(a){var u=this.a
if(u.length>0)return C.a.gay(u)
else return V.ap()},
ej:function(a){var u=this.a
if(a==null)C.a.h(u,V.ap())
else C.a.h(u,a)
this.aC()},
cB:function(){var u=this.a
if(u.length>0){u.pop()
this.aC()}},
sbL:function(a){this.a=H.l(a,"$ib",[V.al],"$ab")}}
E.f7.prototype={}
E.ao.prototype={
scO:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().M(0,s.gee())
u=s.c
if(u!=null)u.gB().h(0,s.gee())
t=new D.L("shape",r,s.c,[F.bX])
t.b=!0
s.az(t)}},
sb_:function(a){var u,t,s=this
if(!J.S(s.r,a)){u=s.r
if(u!=null)u.gB().M(0,s.gec())
if(a!=null)a.gB().h(0,s.gec())
s.r=a
t=new D.L("mover",u,a,[U.a9])
t.b=!0
s.az(t)}},
ap:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.S(q,s.x)){u=s.x
s.x=q
t=new D.L("matrix",u,q,[V.al])
t.b=!0
s.az(t)}for(r=s.y.a,r=new J.at(r,r.length,[H.w(r,0)]);r.J();)r.d.ap(0,b)},
aO:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gY(s))
else C.a.h(s.a,r.m(0,s.gY(s)))
s.aC()
a.ek(t.f)
s=a.dy
u=(s&&C.a).gay(s)
if(u!=null&&t.d!=null)u.jc(a,t)
for(s=t.y.a,s=new J.at(s,s.length,[H.w(s,0)]);s.J();)s.d.aO(a)
a.ei()
a.dx.cB()},
gB:function(){var u=this.z
return u==null?this.z=D.T():u},
az:function(a){var u=this.z
if(u!=null)u.H(a)},
Z:function(){return this.az(null)},
ef:function(a){H.f(a,"$iA")
this.e=null
this.az(a)},
j1:function(){return this.ef(null)},
ed:function(a){this.az(H.f(a,"$iA"))},
j0:function(){return this.ed(null)},
eb:function(a){this.az(H.f(a,"$iA"))},
iY:function(){return this.eb(null)},
iX:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ij",[E.ao],"$aj")
for(u=b.length,t=this.gea(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.b_()
o.sa3(null)
o.sal(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sa3(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Z()},
j_:function(a,b){var u,t,s,r,q
H.l(b,"$ij",[E.ao],"$aj")
for(u=b.length,t=this.gea(),s=0;s<b.length;b.length===u||(0,H.E)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.b_()
q.sa3(null)
q.sal(null)
q.c=null
q.d=0
r.z=q}q.M(0,t)}}this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf9:function(a,b){this.y=H.l(b,"$ia0",[E.ao],"$aa0")},
$ibj:1}
E.hr.prototype={
eJ:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.au(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cl()
t=[V.al]
u.sbL(H.d([],t))
u.b=null
u.gB().h(0,new E.hs(s))
s.cy=u
u=new O.cl()
u.sbL(H.d([],t))
u.b=null
u.gB().h(0,new E.ht(s))
s.db=u
u=new O.cl()
u.sbL(H.d([],t))
u.b=null
u.gB().h(0,new E.hu(s))
s.dx=u
s.shK(H.d([],[O.bY]))
u=s.dy;(u&&C.a).h(u,null)
s.shG(new H.aK([P.h,A.cv]))},
gj9:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gY(s)
u=t.db
u=t.z=s.m(0,u.gY(u))
s=u}return s},
ek:function(a){var u=this.dy,t=a==null?(u&&C.a).gay(u):a;(u&&C.a).h(u,t)},
ei:function(){var u=this.dy
if(u.length>1)u.pop()},
shK:function(a){this.dy=H.l(a,"$ib",[O.bY],"$ab")},
shG:function(a){this.fr=H.l(a,"$iD",[P.h,A.cv],"$aD")}}
E.hs.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.ch=u.z=null},
$S:10}
E.ht.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.hu.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=null},
$S:10}
E.dH.prototype={}
E.dN.prototype={
cT:function(a){H.f(a,"$iA")
this.en()},
cS:function(){return this.cT(null)},
giM:function(){var u,t=this,s=Date.now(),r=C.f.a1(P.kY(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.au(s,!1)
return u/r},
dn:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.r(r)
u=C.e.e_(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.e.e_(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.li(C.t,s.gje())}},
en:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.hV(this),{func:1,ret:-1,args:[P.a8]})
C.C.fg(u)
C.C.hx(u,W.lN(t,P.a8))}},
jb:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dn()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.au(r,!1)
s.y=P.kY(r-s.r.a,0).a*0.000001
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
o.aO(p.e)}}catch(q){u=H.aF(q)
t=H.c6(q)
P.kM("Error: "+H.m(u))
P.kM("Stack: "+H.m(t))
throw H.c(u)}}}
E.hV.prototype={
$1:function(a){var u
H.of(a)
u=this.a
if(u.ch){u.ch=!1
u.jb()}},
$S:37}
Z.dZ.prototype={$iop:1}
Z.d4.prototype={
be:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aF(s)
t=P.x('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.m(u.e)+"]"}}
Z.iF.prototype={$ioq:1}
Z.d5.prototype={
aM:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
be:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].be(a)},
eu:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aO:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.as(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(p,", ")+"\nAttrs:   "+C.a.C(r,", ")},
sfo:function(a){this.b=H.l(a,"$ib",[Z.bw],"$ab")},
$ioy:1}
Z.bw.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bU(this.c)+"'")+"]"}}
Z.b9.prototype={
gcP:function(a){var u=this.a,t=(u&$.br().a)!==0?3:0
if((u&$.bq().a)!==0)t+=3
if((u&$.bp().a)!==0)t+=3
if((u&$.bs().a)!==0)t+=2
if((u&$.bt().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=3
if((u&$.d0().a)!==0)t+=4
if((u&$.c9().a)!==0)++t
return(u&$.bo().a)!==0?t+4:t},
is:function(a){var u,t=$.br(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0)if(u===a)return t
return $.mm()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b9))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.h]),t=this.a
if((t&$.br().a)!==0)C.a.h(u,"Pos")
if((t&$.bq().a)!==0)C.a.h(u,"Norm")
if((t&$.bp().a)!==0)C.a.h(u,"Binm")
if((t&$.bs().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bt().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d_().a)!==0)C.a.h(u,"Clr3")
if((t&$.d0().a)!==0)C.a.h(u,"Clr4")
if((t&$.c9().a)!==0)C.a.h(u,"Weight")
if((t&$.bo().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.C(u,"|")}}
D.fa.prototype={}
D.b_.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.sa3(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.aL(u,b)
if(u===!0){u=s.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.aL(u,b)
if(u===!0){u=s.b
t=(u&&C.a).M(u,b)||t}return t},
H:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.L(P.l1(u,!0,{func:1,ret:-1,args:[D.A]}),new D.ft(q))
u=r.b
if(u!=null){r.sal(H.d([],[{func:1,ret:-1,args:[D.A]}]))
C.a.L(u,new D.fu(q))}return!0},
af:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.H(u)}}},
sa3:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
sal:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.ft.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.fu.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.A.prototype={}
D.bR.prototype={}
D.bS.prototype={}
D.L.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.d6.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d6))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dj.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dj))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.fJ.prototype={
j6:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j2:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
shq:function(a){this.d=H.l(a,"$ilf",[P.p],"$alf")}}
X.dm.prototype={}
X.fS.prototype={
aR:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gaK()
r=new X.bi(a,V.bA(),q.x,t,s)
r.b=!0
q.z=new P.au(p,!1)
q.x=s
return r},
cA:function(a,b){this.r=a.a
return!1},
b1:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eB()
if(typeof u!=="number")return u.bA()
this.r=(u&~t)>>>0
return!1},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.aR(a,b))
return!0},
j7:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaK()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.cn(new V.U(s*r,q*p),u,t)
t.b=!0
n.H(t)
return!0},
h2:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dm(c,r.a.gaK(),b)
s.b=!0
t.H(s)
r.y=new P.au(u,!1)
r.x=V.bA()}}
X.av.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.av))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.C(this.b)?"Alt+":""
return u+(H.C(this.c)?"Shift+":"")}}
X.bi.prototype={}
X.ha.prototype={
bJ:function(a,b,c){var u=this,t=new P.au(Date.now(),!1),s=u.a.gaK(),r=new X.bi(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cA:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.H(this.bJ(a,b,!0))
return!0},
b1:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eB()
if(typeof t!=="number")return t.bA()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.H(u.bJ(a,b,!0))
return!0},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.bJ(a,b,!1))
return!0},
j8:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaK()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.cn(new V.U(t*s,r*q),u,b)
u.b=!0
o.H(u)
return!0},
gdD:function(){var u=this.b
return u==null?this.b=D.T():u},
gbz:function(){var u=this.c
return u==null?this.c=D.T():u},
ge9:function(){var u=this.d
return u==null?this.d=D.T():u}}
X.cn.prototype={}
X.hn.prototype={}
X.dP.prototype={}
X.hY.prototype={
aR:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.a7],"$ab")
u=new P.au(Date.now(),!1)
t=a.length>0?a[0]:V.bA()
s=q.a.gaK()
r=new X.dP(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j5:function(a){var u
H.l(a,"$ib",[V.a7],"$ab")
u=this.b
if(u==null)return!1
u.H(this.aR(a,!0))
return!0},
j3:function(a){var u
H.l(a,"$ib",[V.a7],"$ab")
u=this.c
if(u==null)return!1
u.H(this.aR(a,!0))
return!0},
j4:function(a){var u
H.l(a,"$ib",[V.a7],"$ab")
u=this.d
if(u==null)return!1
u.H(this.aR(a,!1))
return!0}}
X.dU.prototype={
gaK:function(){var u=this.a,t=C.r.gdC(u).c
t.toString
u=C.r.gdC(u).d
u.toString
return V.ld(0,0,t,u)},
d4:function(a){var u=a.keyCode,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dj(u,new X.av(t,a.altKey,a.shiftKey))},
aH:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.av(t,a.altKey,a.shiftKey)},
c1:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.av(t,a.altKey,a.shiftKey)},
av:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.p()
u=t.top
if(typeof r!=="number")return r.p()
return new V.a7(s-q,r-u)},
aS:function(a){return new V.U(a.movementX,a.movementY)},
bW:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
q=C.e.ag(r.pageX)
C.e.ag(r.pageY)
p=o.left
C.e.ag(r.pageX)
C.a.h(n,new V.a7(q-p,C.e.ag(r.pageY)-o.top))}return n},
as:function(a){var u=a.buttons,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.d6(u,new X.av(t,a.altKey,a.shiftKey))},
bM:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.p()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.p()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fX:function(a){this.f=!0},
fJ:function(a){this.f=!1},
fR:function(a){H.f(a,"$iac")
if(H.C(this.f)&&this.bM(a))a.preventDefault()},
h0:function(a){var u
H.f(a,"$ib1")
if(!H.C(this.f))return
u=this.d4(a)
this.b.j6(u)},
fZ:function(a){var u
H.f(a,"$ib1")
if(!H.C(this.f))return
u=this.d4(a)
this.b.j2(u)},
h4:function(a){var u,t,s,r,q=this
H.f(a,"$iac")
u=q.a
u.focus()
q.f=!0
q.aH(a)
if(H.C(q.x)){t=q.as(a)
s=q.aS(a)
if(q.d.cA(t,s))a.preventDefault()
return}if(H.C(q.r)){q.y=a
u.requestPointerLock()
return}t=q.as(a)
r=q.av(a)
if(q.c.cA(t,r))a.preventDefault()},
h8:function(a){var u,t,s,r=this
H.f(a,"$iac")
r.aH(a)
u=r.as(a)
if(H.C(r.x)){t=r.aS(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.av(a)
if(r.c.b1(u,s))a.preventDefault()},
fV:function(a){var u,t,s,r=this
H.f(a,"$iac")
if(!r.bM(a)){r.aH(a)
u=r.as(a)
if(H.C(r.x)){t=r.aS(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.av(a)
if(r.c.b1(u,s))a.preventDefault()}},
h6:function(a){var u,t,s,r=this
H.f(a,"$iac")
r.aH(a)
u=r.as(a)
if(H.C(r.x)){t=r.aS(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.av(a)
if(r.c.b0(u,s))a.preventDefault()},
fT:function(a){var u,t,s,r=this
H.f(a,"$iac")
if(!r.bM(a)){r.aH(a)
u=r.as(a)
if(H.C(r.x)){t=r.aS(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.av(a)
if(r.c.b0(u,s))a.preventDefault()}},
ha:function(a){var u,t,s=this
H.f(a,"$iba")
s.aH(a)
u=new V.U((a&&C.B).giB(a),C.B.giC(a)).u(0,180)
if(H.C(s.x)){if(s.d.j7(u))a.preventDefault()
return}if(H.C(s.r))return
t=s.av(a)
if(s.c.j8(u,t))a.preventDefault()},
hc:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.as(s.y)
t=s.av(s.y)
s.d.h2(u,t,r)}},
ho:function(a){var u,t=this
H.f(a,"$iaT")
t.a.focus()
t.f=!0
t.c1(a)
u=t.bW(a)
if(t.e.j5(u))a.preventDefault()},
hk:function(a){var u
H.f(a,"$iaT")
this.c1(a)
u=this.bW(a)
if(this.e.j3(u))a.preventDefault()},
hm:function(a){var u
H.f(a,"$iaT")
this.c1(a)
u=this.bW(a)
if(this.e.j4(u))a.preventDefault()},
sfh:function(a){this.z=H.l(a,"$ib",[[P.cx,P.Q]],"$ab")}}
D.bd.prototype={
gB:function(){var u=this.d
return u==null?this.d=D.T():u},
aq:function(a){var u
H.f(a,"$iA")
u=this.d
if(u!=null)u.H(a)},
eO:function(){return this.aq(null)},
$ia4:1,
$ibj:1}
D.a4.prototype={$ibj:1}
D.dk.prototype={
gB:function(){var u=this.Q
return u==null?this.Q=D.T():u},
aq:function(a){var u=this.Q
if(u!=null)u.H(a)},
dh:function(a){var u
H.f(a,"$iA")
u=this.ch
if(u!=null)u.H(a)},
h1:function(){return this.dh(null)},
he:function(a){var u,t,s
H.l(a,"$ij",[D.a4],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(s==null||this.fa(s))return!1}return!0},
fD:function(a,b){var u,t,s,r,q,p,o,n=D.a4
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gdg(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=H.f(b[q],"$ia4")
if(p instanceof D.bd)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.b_()
o.sa3(null)
o.sal(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.sa3(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bR([n])
n.b=!0
this.aq(n)},
hi:function(a,b){var u,t,s,r,q,p=D.a4
H.l(b,"$ij",[p],"$aj")
for(u=b.length,t=this.gdg(),s=0;s<b.length;b.length===u||(0,H.E)(b),++s){r=H.f(b[s],"$ia4")
if(r instanceof D.bd)C.a.M(this.e,r)
q=r.d
if(q==null){q=new D.b_()
q.sa3(null)
q.sal(null)
q.c=null
q.d=0
r.d=q}q.M(0,t)}p=new D.bS([p])
p.b=!0
this.aq(p)},
fa:function(a){var u=C.a.aL(this.e,a)
return u},
sfe:function(a){this.e=H.l(a,"$ib",[D.bd],"$ab")},
shp:function(a){this.f=H.l(a,"$ib",[D.dx],"$ab")},
shI:function(a){this.r=H.l(a,"$ib",[D.dE],"$ab")},
shT:function(a){this.x=H.l(a,"$ib",[D.dK],"$ab")},
shU:function(a){this.y=H.l(a,"$ib",[D.dL],"$ab")},
shV:function(a){this.z=H.l(a,"$ib",[D.dM],"$ab")},
$aj:function(){return[D.a4]},
$aa0:function(){return[D.a4]}}
D.dx.prototype={$ia4:1,$ibj:1}
D.dE.prototype={$ia4:1,$ibj:1}
D.dK.prototype={$ia4:1,$ibj:1}
D.dL.prototype={$ia4:1,$ibj:1}
D.dM.prototype={$ia4:1,$ibj:1}
V.a1.prototype={
n:function(a,b){var u=C.e.n(this.a,b.gcE()),t=C.e.n(this.b,b.gbB()),s=C.e.n(this.c,b.gca())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
p:function(a,b){var u=C.e.p(this.a,b.gcE()),t=C.e.p(this.b,b.gbB()),s=C.e.p(this.c,b.gca())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.aH.prototype={
n:function(a,b){var u=this,t=C.e.n(u.a,b.gcE()),s=C.e.n(u.b,b.gbB()),r=C.e.n(u.c,b.gca()),q=C.e.n(u.d,b.gir(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aH(t,s,r,q)},
p:function(a,b){var u=this,t=C.e.p(u.a,b.gcE()),s=C.e.p(u.b,b.gbB()),r=C.e.p(u.c,b.gca()),q=C.e.p(u.d,b.gir(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aH(t,s,r,q)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aH))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.fs.prototype={}
V.dr.prototype={
ab:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.q])
return t},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.dr))return!1
u=b.a
t=$.J()
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
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.q],o=V.c4(H.d([q.a,q.d,q.r],p),3,0),n=V.c4(H.d([q.b,q.e,q.x],p),3,0),m=V.c4(H.d([q.c,q.f,q.y],p),3,0)
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
V.al.prototype={
ab:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.q])
return t},
e7:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
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
if(Math.abs(i-0)<$.J().a)return V.ap()
h=1/i
g=-a
f=-t
return V.b4((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.r(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.r(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.r(m)
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
return V.b4(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
cJ:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.r(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.H(r.a*q+r.b*p+r.c*o,r.e*q+r.f*p+r.r*o,u*q+t*p+s*o)},
b6:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.r(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.Z(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.J()
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
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.N()},
E:function(a){var u,t,s,r,q,p=this,o=[P.q],n=V.c4(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.c4(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.c4(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.c4(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
N:function(){return this.E("")}}
V.a7.prototype={
n:function(a,b){return new V.a7(this.a+b.a,this.b+b.b)},
p:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.Z.prototype={
n:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.r(t)
return new V.Z(this.a+b.a,this.b+b.b,u+t)},
p:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.r(t)
return new V.Z(this.a-b.a,this.b-b.b,u-t)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.Z(this.a*b,this.b*b,u*b)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.J()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.aN.prototype={
n:function(a,b){var u=this
return new V.aN(C.e.n(u.a,b.gjn(b)),C.e.n(u.b,b.gjo(b)),C.e.n(u.c,b.gjp(b)),C.e.n(u.d,b.gjm(b)))},
p:function(a,b){var u=this
return new V.aN(C.e.p(u.a,b.gjn(b)),C.e.p(u.b,b.gjo(b)),C.e.p(u.c,b.gjp(b)),C.e.p(u.d,b.gjm(b)))},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aN))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.dB.prototype={
ga4:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dB))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.U.prototype={
ct:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.r(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.r(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a,s=b.giE(b)
if(typeof t!=="number")return t.n()
s=C.e.n(t,s)
t=this.b
u=b.giF(b)
if(typeof t!=="number")return t.n()
return new V.U(s,C.e.n(t,u))},
p:function(a,b){var u,t=this.a,s=b.giE(b)
if(typeof t!=="number")return t.p()
s=C.e.p(t,s)
t=this.b
u=b.giF(b)
if(typeof t!=="number")return t.p()
return new V.U(s,C.e.p(t,u))},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.U(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.J().a){u=$.lp
return u==null?$.lp=new V.U(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.U(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=this.a
s=$.J()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.r(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.H.prototype={
ct:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.r(t)
return this.a*a.a+this.b*a.b+u*t},
cu:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.p()
if(typeof s!=="number")return H.r(s)
return new V.H(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
aw:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.r(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.H(q*p-u*t,u*s-r*p,r*t-q*s)},
n:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.r(r)
return new V.H(this.a+u,this.b+t,s+r)},
p:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.r(t)
return new V.H(this.a-b.a,this.b-b.b,u-t)},
R:function(a){var u=this.c
if(typeof u!=="number")return u.R()
return new V.H(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.H(this.a*b,this.b*b,u*b)},
u:function(a,b){var u
if(Math.abs(b-0)<$.J().a)return V.cJ()
u=this.c
if(typeof u!=="number")return u.u()
return new V.H(this.a/b,this.b/b,u/b)},
e8:function(){var u,t=$.J(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.r(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=$.J()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
U.fb.prototype={
bF:function(a){var u=V.ka(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.T():u},
F:function(a){var u=this.y
if(u!=null)u.H(a)},
scL:function(a,b){},
scv:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.J().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bF(u)}s=new D.L("maximumLocation",s,t.b,[P.q])
s.b=!0
t.F(s)}},
scz:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.J().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bF(u)}s=new D.L("minimumLocation",s,t.c,[P.q])
s.b=!0
t.F(s)}},
sX:function(a,b){var u,t=this
b=t.bF(b)
u=t.d
if(!(Math.abs(u-b)<$.J().a)){t.d=b
u=new D.L("location",u,b,[P.q])
u.b=!0
t.F(u)}},
scw:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.J().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.L("maximumVelocity",r,a,[P.q])
r.b=!0
s.F(r)}},
sT:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.J().a)){u.f=a
t=new D.L("velocity",t,a,[P.q])
t.b=!0
u.F(t)}},
sci:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.J().a)){this.x=a
u=new D.L("dampening",u,a,[P.q])
u.b=!0
this.F(u)}},
ap:function(a,b){var u,t,s,r=this,q=r.f,p=$.J().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sX(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.J().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sT(u)}}}
U.d8.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.T():u},
ah:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d8))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.ci.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.T():u},
F:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.H(a)},
a2:function(){return this.F(null)},
eQ:function(a,b){var u,t,s,r,q,p,o,n=U.a9
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaD(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.gB()
o.toString
H.n(t,s)
if(o.a==null)o.sa3(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bR([n])
n.b=!0
this.F(n)},
hg:function(a,b){var u,t,s,r,q=U.a9
H.l(b,"$ij",[q],"$aj")
for(u=b.length,t=this.gaD(),s=0;s<b.length;b.length===u||(0,H.E)(b),++s){r=b[s]
if(r!=null)r.gB().M(0,t)}q=new D.bS([q])
q.b=!0
this.F(q)},
ah:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.U()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.at(r,r.length,[H.w(r,0)]),u=null;r.J();){q=r.d
if(q!=null){t=q.ah(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.ap():u
r=s.e
if(r!=null)r.af(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ci))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.S(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a9]},
$aa0:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dC.prototype={
gB:function(){var u=this.y
return u==null?this.y=D.T():u},
F:function(a){var u=this.y
if(u!=null)u.H(a)},
sez:function(a){var u
a=V.ka(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.J().a)){this.a=a
u=new D.L("yaw",u,a,[P.q])
u.b=!0
this.F(u)}},
seh:function(a,b){var u
b=V.ka(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.J().a)){this.b=b
u=new D.L("pitch",u,b,[P.q])
u.b=!0
this.F(u)}},
seo:function(a){var u
a=V.ka(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.J().a)){this.c=a
u=new D.L("roll",u,a,[P.q])
u.b=!0
this.F(u)}},
ah:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sez(u.a+u.d*b.y)
u.seh(0,u.b+u.e*b.y)
u.seo(u.c+u.f*b.y)
u.x=V.l4(u.c).m(0,V.l3(u.b)).m(0,V.kp(u.a))
t=u.y
if(t!=null)t.af(0)}return u.x},
t:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dC))return!1
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
return"Rotater: ["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+"], ["+V.P(u.d,3,0)+", "+V.P(u.e,3,0)+", "+V.P(u.f,3,0)+"]"}}
U.dV.prototype={
gB:function(){var u=this.cy
return u==null?this.cy=D.T():u},
F:function(a){var u
H.f(a,"$iA")
u=this.cy
if(u!=null)u.H(a)},
a2:function(){return this.F(null)},
aT:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdD().h(0,u.gbN())
u.a.c.ge9().h(0,u.gbP())
u.a.c.gbz().h(0,u.gbR())
return!0},
bO:function(a){var u=this
H.f(a,"$iA")
if(!J.S(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bQ:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.f(a,"$iA"),"$ibi")
if(!H.C(n.y))return
if(H.C(n.x)){u=a.d.p(0,a.y)
u=new V.U(u.a,u.b)
u=u.D(u)
t=n.r
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.x=!1}if(H.C(n.d)){u=a.c
t=a.d.p(0,a.y)
u=new V.U(t.a,t.b).m(0,2).u(0,u.ga4())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.m()
s=n.e
if(typeof s!=="number")return H.r(s)
t.sT(u*10*s)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=new V.U(s.a,s.b).m(0,2).u(0,u.ga4())
s=n.b
q=r.a
if(typeof q!=="number")return q.R()
p=n.e
if(typeof p!=="number")return H.r(p)
o=n.z
if(typeof o!=="number")return H.r(o)
s.sX(0,-q*p+o)
n.b.sT(0)
t=t.p(0,a.z)
n.Q=new V.U(t.a,t.b).m(0,2).u(0,u.ga4())}n.a2()},
bS:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.C(r.y))return
r.y=!1
if(H.C(r.x))return
u=r.Q
if(u.D(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.m()
s=r.e
if(typeof s!=="number")return H.r(s)
u.sT(t*10*s)
r.a2()}},
ah:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.U()
if(s<r){t.ch=r
u=b.y
t.b.ap(0,u)
t.cx=V.l4(t.b.d)}return t.cx},
$ia9:1}
U.dW.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.T():u},
F:function(a){var u
H.f(a,"$iA")
u=this.fx
if(u!=null)u.H(a)},
a2:function(){return this.F(null)},
aT:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdD().h(0,s.gbN())
s.a.c.ge9().h(0,s.gbP())
s.a.c.gbz().h(0,s.gbR())
u=s.a.d
t=u.f
u=t==null?u.f=D.T():t
u.h(0,s.gfu())
u=s.a.d
t=u.d
u=t==null?u.d=D.T():t
u.h(0,s.gfw())
u=s.a.e
t=u.b
u=t==null?u.b=D.T():t
u.h(0,s.ghQ())
u=s.a.e
t=u.d
u=t==null?u.d=D.T():t
u.h(0,s.ghO())
u=s.a.e
t=u.c
u=t==null?u.c=D.T():t
u.h(0,s.ghM())
return!0},
ak:function(a){var u=a.a,t=a.b
if(H.C(this.f)){if(typeof u!=="number")return u.R()
u=-u}if(H.C(this.r)){if(typeof t!=="number")return t.R()
t=-t}return new V.U(u,t)},
bO:function(a){var u=this
a=H.k(H.f(a,"$iA"),"$ibi")
if(!J.S(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bQ:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.f(a,"$iA"),"$ibi")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.p(0,a.y)
u=new V.U(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.ak(new V.U(t.a,t.b).m(0,2).u(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.ak(new V.U(s.a,s.b).m(0,2).u(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sX(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.p(0,a.z)
n.dx=n.ak(new V.U(t.a,t.b).m(0,2).u(0,u.ga4()))}n.a2()},
bS:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sT(-t*10*u)
r.a2()}},
fv:function(a){var u=this
if(H.k(H.f(a,"$iA"),"$idm").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fz:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.f(a,"$iA"),"$ibi")
if(!J.S(n.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=n.ak(new V.U(s.a,s.b).m(0,2).u(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sX(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.p(0,a.z)
n.dx=n.ak(new V.U(t.a,t.b).m(0,2).u(0,u.ga4()))
n.a2()},
hR:function(a){var u=this
H.f(a,"$iA")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hP:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.f(a,"$iA"),"$idP")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.p(0,a.y)
u=new V.U(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.ak(new V.U(t.a,t.b).m(0,2).u(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.ak(new V.U(s.a,s.b).m(0,2).u(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sX(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.p(0,a.z)
n.dx=n.ak(new V.U(t.a,t.b).m(0,2).u(0,u.ga4()))}n.a2()},
hN:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sT(-t*10*u)
r.a2()}},
ah:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.U()
if(s<r){t.dy=r
u=b.y
t.c.ap(0,u)
t.b.ap(0,u)
t.fr=V.kp(t.b.d).m(0,V.l3(t.c.d))}return t.fr},
$ia9:1}
U.dX.prototype={
gB:function(){var u=this.r
return u==null?this.r=D.T():u},
F:function(a){var u=this.r
if(u!=null)u.H(a)},
aT:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.T():t
t=r.gfA()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.T():s).h(0,t)
return!0},
fB:function(a){var u,t,s,r,q=this
H.f(a,"$iA")
if(!J.S(q.b,q.a.b.c))return
H.k(a,"$icn")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.L("zoom",u,r,[P.q])
u.b=!0
q.F(u)}},
ah:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.b4(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia9:1}
M.dd.prototype={
ar:function(a){var u
H.f(a,"$iA")
u=this.y
if(u!=null)u.H(a)},
eS:function(){return this.ar(null)},
fN:function(a,b){var u,t,s,r,q,p,o,n=E.ao
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaj(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.b_()
o.sa3(null)
o.sal(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sa3(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bR([n])
n.b=!0
this.ar(n)},
fP:function(a,b){var u,t,s,r,q,p=E.ao
H.l(b,"$ij",[p],"$aj")
for(u=b.length,t=this.gaj(),s=0;s<b.length;b.length===u||(0,H.E)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.b_()
q.sa3(null)
q.sal(null)
q.c=null
q.d=0
r.z=q}q.M(0,t)}}p=new D.bS([p])
p.b=!0
this.ar(p)},
seq:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gB().M(0,t.gaj())
u=t.d
t.d=a
if(a!=null)a.gB().h(0,t.gaj())
s=new D.L("technique",u,t.d,[O.bY])
s.b=!0
t.ar(s)}},
gB:function(){var u=this.y
return u==null?this.y=D.T():u},
aO:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=new E.dH(a)
e.b=!0
u=f.f
if(u!=null)u.H(e)
a.ek(f.d)
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
if(typeof s!=="number")return H.r(s)
o=C.e.ag(p*s)
p=q.b
if(typeof r!=="number")return H.r(r)
n=C.e.ag(p*r)
p=C.e.ag(q.c*s)
a.c=p
q=C.e.ag(q.d*r)
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
i=V.b4(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.ej(i)
t=$.l8
if(t==null){t=V.la()
q=V.lu()
p=$.lq
t=V.l2(t,q,p==null?$.lq=new V.H(0,0,-1):p)
$.l8=t
h=t}else h=t
t=u.b
if(t!=null){g=t.ah(0,a,u)
if(g!=null)h=g.m(0,h)}a.db.ej(h)
u=f.d
if(u!=null)u.ap(0,a)
for(u=f.e.a,u=new J.at(u,u.length,[H.w(u,0)]);u.J();)u.d.ap(0,a)
for(u=f.e.a,u=new J.at(u,u.length,[H.w(u,0)]);u.J();)u.d.aO(a)
f.b.toString
a.cy.cB()
a.db.cB()
f.c.toString
a.ei()},
seR:function(a,b){this.e=H.l(b,"$ia0",[E.ao],"$aa0")},
$iov:1}
A.d2.prototype={}
A.f0.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iG:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
iD:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.fY.prototype={
eI:function(d2,d3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="Required uniform value, ",a9=", was not defined or used in shader.",b0="emissionTxt",b1="nullEmissionTxt",b2="ambientTxt",b3="nullAmbientTxt",b4="diffuseTxt",b5="nullDiffuseTxt",b6="invDiffuseTxt",b7="nullInvDiffuseTxt",b8="specularTxt",b9="nullSpecularTxt",c0="nullBumpTxt",c1="reflectTxt",c2="nullReflectTxt",c3="refractTxt",c4="nullRefractTxt",c5="alphaTxt",c6="nullAlphaTxt",c7="uniform mat4 objMat;\n",c8="   if(nullAlphaTxt > 0) return alpha;\n",c9="   if (a <= 0.000001) discard;\n",d0="precision mediump float;\n\n",d1="precision mediump float;\n\nvarying vec3 normalVec;\n"
a7.z=d2
u=new P.aj("")
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
u=new P.aj("")
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
if(l!==C.j){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.h){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.i){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.d:m=u.a=m+"   return 1.0;\n"
break
case C.j:m=u.a=m+"   return alpha;\n"
break
case C.h:m+=c8
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c9
u.a=m
m=u.a=m+"   return a;\n"
break
case C.i:m+=c8
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
k=H.d([],[P.h])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.C(k," + ")+");\n"
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
j=H.d([],[P.h])
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
i="vec4("+C.a.C(j," + ")+", alpha);"
s=u.a
s=u.a=(o?u.a=s+("   gl_FragColor = colorMat*"+i+"\n"):u.a=s+("   gl_FragColor = "+i+"\n"))+"}\n"
a7.c=n
a7.d=s.charCodeAt(0)==0?s:s
a7.e=a7.d5(n,35633)
a7.f=a7.d5(a7.d,35632)
s=a7.a
q=s.createProgram()
a7.r=q
s.attachShader(q,a7.e)
s.attachShader(a7.r,a7.f)
s.linkProgram(a7.r)
if(!H.C(H.lR(s.getProgramParameter(a7.r,35714)))){h=s.getProgramInfoLog(a7.r)
s.deleteProgram(a7.r)
H.u(P.x("Failed to link shader: "+H.m(h)))}a7.hD()
a7.hF()
a7.Q=a7.x.j(0,"posAttr")
a7.cx=a7.x.j(0,"normAttr")
a7.ch=a7.x.j(0,"binmAttr")
a7.cy=a7.x.j(0,"txt2DAttr")
a7.db=a7.x.j(0,"txtCubeAttr")
a7.dx=a7.x.j(0,"bendAttr")
if(d2.fr)a7.id=H.k(a7.y.q(0,"invViewMat"),"$iaw")
if(t)a7.dy=H.k(a7.y.q(0,"objMat"),"$iaw")
if(r)a7.fr=H.k(a7.y.q(0,"viewObjMat"),"$iaw")
a7.fy=H.k(a7.y.q(0,"projViewObjMat"),"$iaw")
if(d2.x2)a7.k1=H.k(a7.y.q(0,"txt2DMat"),"$icC")
if(d2.y1)a7.k2=H.k(a7.y.q(0,"txtCubeMat"),"$iaw")
if(d2.y2)a7.k3=H.k(a7.y.q(0,"colorMat"),"$iaw")
a7.sf5(H.d([],[A.aw]))
t=d2.an
if(t>0){a7.k4=H.f(a7.y.q(0,"bendMatCount"),"$iO")
for(g=0;g<t;++g){s=a7.r1
r=a7.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.u(P.x(a8+q+a9));(s&&C.a).h(s,H.k(f,"$iaw"))}}t=d2.a
if(t!==C.d){a7.r2=H.k(a7.y.q(0,"emissionClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a7.rx=H.k(a7.y.q(0,b0),"$iam")
a7.x1=H.k(a7.y.q(0,b1),"$iO")
break
case C.i:a7.ry=H.k(a7.y.q(0,b0),"$ian")
a7.x1=H.k(a7.y.q(0,b1),"$iO")
break}}t=d2.b
if(t!==C.d){a7.x2=H.k(a7.y.q(0,"ambientClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a7.y1=H.k(a7.y.q(0,b2),"$iam")
a7.an=H.k(a7.y.q(0,b3),"$iO")
break
case C.i:a7.y2=H.k(a7.y.q(0,b2),"$ian")
a7.an=H.k(a7.y.q(0,b3),"$iO")
break}}t=d2.c
if(t!==C.d){a7.ae=H.k(a7.y.q(0,"diffuseClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a7.bg=H.k(a7.y.q(0,b4),"$iam")
a7.bh=H.k(a7.y.q(0,b5),"$iO")
break
case C.i:a7.dE=H.k(a7.y.q(0,b4),"$ian")
a7.bh=H.k(a7.y.q(0,b5),"$iO")
break}}t=d2.d
if(t!==C.d){a7.bi=H.k(a7.y.q(0,"invDiffuseClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dF=H.k(a7.y.q(0,b6),"$iam")
a7.bj=H.k(a7.y.q(0,b7),"$iO")
break
case C.i:a7.dG=H.k(a7.y.q(0,b6),"$ian")
a7.bj=H.k(a7.y.q(0,b7),"$iO")
break}}t=d2.e
if(t!==C.d){a7.bm=H.k(a7.y.q(0,"shininess"),"$ia_")
a7.bk=H.k(a7.y.q(0,"specularClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dH=H.k(a7.y.q(0,b8),"$iam")
a7.bl=H.k(a7.y.q(0,b9),"$iO")
break
case C.i:a7.dI=H.k(a7.y.q(0,b8),"$ian")
a7.bl=H.k(a7.y.q(0,b9),"$iO")
break}}switch(d2.f){case C.d:break
case C.j:break
case C.h:a7.dJ=H.k(a7.y.q(0,"bumpTxt"),"$iam")
a7.bn=H.k(a7.y.q(0,c0),"$iO")
break
case C.i:a7.dK=H.k(a7.y.q(0,"bumpTxt"),"$ian")
a7.bn=H.k(a7.y.q(0,c0),"$iO")
break}if(d2.dy){a7.dL=H.k(a7.y.q(0,"envSampler"),"$ian")
a7.dM=H.k(a7.y.q(0,"nullEnvTxt"),"$iO")
t=d2.r
if(t!==C.d){a7.bo=H.k(a7.y.q(0,"reflectClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dN=H.k(a7.y.q(0,c1),"$iam")
a7.bp=H.k(a7.y.q(0,c2),"$iO")
break
case C.i:a7.dO=H.k(a7.y.q(0,c1),"$ian")
a7.bp=H.k(a7.y.q(0,c2),"$iO")
break}}t=d2.x
if(t!==C.d){a7.bq=H.k(a7.y.q(0,"refraction"),"$ia_")
a7.br=H.k(a7.y.q(0,"refractClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dP=H.k(a7.y.q(0,c3),"$iam")
a7.bs=H.k(a7.y.q(0,c4),"$iO")
break
case C.i:a7.dQ=H.k(a7.y.q(0,c3),"$ian")
a7.bs=H.k(a7.y.q(0,c4),"$iO")
break}}}t=d2.y
if(t!==C.d){a7.bt=H.k(a7.y.q(0,"alpha"),"$ia_")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dR=H.k(a7.y.q(0,c5),"$iam")
a7.bu=H.k(a7.y.q(0,c6),"$iO")
break
case C.i:a7.dS=H.k(a7.y.q(0,c5),"$ian")
a7.bu=H.k(a7.y.q(0,c6),"$iO")
break}}a7.seT(H.d([],[A.cB]))
a7.seU(H.d([],[A.cD]))
a7.seV(H.d([],[A.cE]))
a7.seW(H.d([],[A.cF]))
a7.seX(H.d([],[A.cG]))
a7.seY(H.d([],[A.cH]))
if(d2.k2){t=d2.z
if(t>0){a7.dT=H.f(a7.y.q(0,"dirLightCount"),"$iO")
for(g=0;g<t;++g){s=a7.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.u(P.x(a8+r+a9))
H.k(f,"$iN")
s=a7.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.u(P.x(a8+r+a9))
H.k(e,"$iN")
s=a7.ck;(s&&C.a).h(s,new A.cB(f,e))}}t=d2.Q
if(t>0){a7.dU=H.f(a7.y.q(0,"pntLightCount"),"$iO")
for(g=0;g<t;++g){s=a7.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.u(P.x(a8+r+a9))
H.k(f,"$iN")
s=a7.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.u(P.x(a8+r+a9))
H.k(e,"$iN")
s=a7.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.u(P.x(a8+r+a9))
H.k(d,"$iN")
s=a7.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.u(P.x(a8+r+a9))
H.k(c,"$ia_")
s=a7.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.u(P.x(a8+r+a9))
H.k(b,"$ia_")
s=a7.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.u(P.x(a8+r+a9))
H.k(a,"$ia_")
s=a7.cl;(s&&C.a).h(s,new A.cD(f,e,d,c,b,a))}}t=d2.ch
if(t>0){a7.dV=H.f(a7.y.q(0,"spotLightCount"),"$iO")
for(g=0;g<t;++g){s=a7.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.u(P.x(a8+r+a9))
H.k(f,"$iN")
s=a7.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.u(P.x(a8+r+a9))
H.k(e,"$iN")
s=a7.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.u(P.x(a8+r+a9))
H.k(d,"$iN")
s=a7.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.u(P.x(a8+r+a9))
H.k(c,"$iN")
s=a7.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.u(P.x(a8+r+a9))
H.k(b,"$ia_")
s=a7.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.u(P.x(a8+r+a9))
H.k(a,"$ia_")
s=a7.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.u(P.x(a8+r+a9))
H.k(a0,"$ia_")
s=a7.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.u(P.x(a8+r+a9))
H.k(a1,"$ia_")
s=a7.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.u(P.x(a8+r+a9))
H.k(a2,"$ia_")
s=a7.cm;(s&&C.a).h(s,new A.cE(f,e,d,c,b,a,a0,a1,a2))}}t=d2.cx
if(t>0){a7.dW=H.f(a7.y.q(0,"txtDirLightCount"),"$iO")
for(g=0;g<t;++g){s=a7.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.u(P.x(a8+r+a9))
H.k(f,"$iN")
s=a7.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.u(P.x(a8+r+a9))
H.k(e,"$iN")
s=a7.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.u(P.x(a8+r+a9))
H.k(d,"$iN")
s=a7.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.u(P.x(a8+r+a9))
H.k(c,"$iN")
s=a7.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.u(P.x(a8+r+a9))
H.k(b,"$iN")
s=a7.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.u(P.x(a8+r+a9))
H.k(a,"$iO")
s=a7.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.u(P.x(a8+r+a9))
H.k(a0,"$iam")
s=a7.cn;(s&&C.a).h(s,new A.cF(f,e,d,c,b,a0,a))}}t=d2.cy
if(t>0){a7.dX=H.f(a7.y.q(0,"txtPntLightCount"),"$iO")
for(g=0;g<t;++g){s=a7.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.u(P.x(a8+r+a9))
H.k(f,"$iN")
s=a7.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.u(P.x(a8+r+a9))
H.k(e,"$iN")
s=a7.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.u(P.x(a8+r+a9))
H.k(d,"$icC")
s=a7.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.u(P.x(a8+r+a9))
H.k(c,"$iN")
s=a7.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.x(a8+r+a9))
H.k(b,"$iO")
s=a7.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.u(P.x(a8+r+a9))
H.k(a,"$ia_")
s=a7.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.u(P.x(a8+r+a9))
H.k(a0,"$ia_")
s=a7.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.u(P.x(a8+r+a9))
H.k(a1,"$ia_")
s=a7.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.u(P.x(a8+r+a9))
H.k(a2,"$ian")
s=a7.co;(s&&C.a).h(s,new A.cG(f,e,d,c,a2,b,a,a0,a1))}}t=d2.db
if(t>0){a7.dY=H.f(a7.y.q(0,"txtSpotLightCount"),"$iO")
for(g=0;g<t;++g){s=a7.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.u(P.x(a8+r+a9))
H.k(f,"$iN")
s=a7.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.u(P.x(a8+r+a9))
H.k(e,"$iN")
s=a7.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.u(P.x(a8+r+a9))
H.k(d,"$iN")
s=a7.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.u(P.x(a8+r+a9))
H.k(c,"$iN")
s=a7.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.u(P.x(a8+r+a9))
H.k(b,"$iN")
s=a7.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.u(P.x(a8+r+a9))
H.k(a,"$iO")
s=a7.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.u(P.x(a8+r+a9))
H.k(a0,"$iN")
s=a7.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.u(P.x(a8+r+a9))
H.k(a1,"$ia_")
s=a7.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.u(P.x(a8+r+a9))
H.k(a2,"$ia_")
s=a7.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.u(P.x(a8+r+a9))
H.k(a3,"$ia_")
s=a7.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.u(P.x(a8+r+a9))
H.k(a4,"$ia_")
s=a7.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.u(P.x(a8+r+a9))
H.k(a5,"$ia_")
s=a7.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.u(P.x(a8+r+a9))
H.k(a6,"$iam")
s=a7.cp;(s&&C.a).h(s,new A.cH(f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ac:function(a,b,c){C.c.a_(b.a,b.d,1)},
a8:function(a,b,c){C.c.a_(b.a,b.d,1)},
sf5:function(a){this.r1=H.l(a,"$ib",[A.aw],"$ab")},
seT:function(a){this.ck=H.l(a,"$ib",[A.cB],"$ab")},
seU:function(a){this.cl=H.l(a,"$ib",[A.cD],"$ab")},
seV:function(a){this.cm=H.l(a,"$ib",[A.cE],"$ab")},
seW:function(a){this.cn=H.l(a,"$ib",[A.cF],"$ab")},
seX:function(a){this.co=H.l(a,"$ib",[A.cG],"$ab")},
seY:function(a){this.cp=H.l(a,"$ib",[A.cH],"$ab")}}
A.h0.prototype={
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
at:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.e(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.aB(c,1))+"Txt;\n")
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
i2:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.at(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   return emissionClr;\n"
break
case C.h:s=u+t
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
hY:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.at(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   return ambientClr;\n"
break
case C.h:s=u+t
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
i0:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.at(a,s,"diffuse")
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
case C.h:s=u+t
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
i3:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.at(a,s,"invDiffuse")
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
case C.h:s=u+t
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
ib:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.at(a,s,"specular")
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
case C.h:s=u+t
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
i6:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.d:break
case C.j:break
case C.h:u+="uniform sampler2D bumpTxt;\n"
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
case C.h:u+=q
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
i9:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.at(a,s,"reflect")
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
case C.h:s=u+t
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
ia:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.at(a,s,"refract")
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
case C.h:s=u+t
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
i:function(a){return this.ae}}
A.cB.prototype={}
A.cF.prototype={}
A.cD.prototype={}
A.cG.prototype={}
A.cE.prototype={}
A.cH.prototype={}
A.cv.prototype={
eL:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
d5:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.C(H.lR(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.x("Error compiling shader '"+H.m(s)+"': "+H.m(u)))}return s},
hD:function(){var u,t,s,r=this,q=H.d([],[A.d2]),p=r.a,o=H.af(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d2(p,t.name,s))}r.x=new A.f0(q)},
hF:function(){var u,t,s,r=this,q=H.d([],[A.dQ]),p=r.a,o=H.af(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iA(t.type,t.size,t.name,s))}r.y=new A.ib(q)},
aF:function(a,b,c){var u=this.a
if(a===1)return new A.O(u,b,c)
else return A.kt(u,this.r,b,a,c)},
fb:function(a,b,c){var u=this.a
if(a===1)return new A.am(u,b,c)
else return A.kt(u,this.r,b,a,c)},
fc:function(a,b,c){var u=this.a
if(a===1)return new A.an(u,b,c)
else return A.kt(u,this.r,b,a,c)},
bd:function(a,b){return new P.e7(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
iA:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aF(b,c,d)
case 5121:return u.aF(b,c,d)
case 5122:return u.aF(b,c,d)
case 5123:return u.aF(b,c,d)
case 5124:return u.aF(b,c,d)
case 5125:return u.aF(b,c,d)
case 5126:return new A.a_(u.a,c,d)
case 35664:return new A.i6(u.a,c,d)
case 35665:return new A.N(u.a,c,d)
case 35666:return new A.i9(u.a,c,d)
case 35667:return new A.i7(u.a,c,d)
case 35668:return new A.i8(u.a,c,d)
case 35669:return new A.ia(u.a,c,d)
case 35674:return new A.ic(u.a,c,d)
case 35675:return new A.cC(u.a,c,d)
case 35676:return new A.aw(u.a,c,d)
case 35678:return u.fb(b,c,d)
case 35680:return u.fc(b,c,d)
case 35670:throw H.c(u.bd("BOOL",c))
case 35671:throw H.c(u.bd("BOOL_VEC2",c))
case 35672:throw H.c(u.bd("BOOL_VEC3",c))
case 35673:throw H.c(u.bd("BOOL_VEC4",c))
default:throw H.c(P.x("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bL.prototype={
i:function(a){return this.b}}
A.dQ.prototype={}
A.ib.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.O.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.i7.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.i8.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.ia.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.i5.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
shW:function(a){H.l(a,"$ib",[P.p],"$ab")}}
A.a_.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.i6.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.N.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.i9.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.ic.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cC.prototype={
ai:function(a){var u=new Float32Array(H.c_(H.l(a,"$ib",[P.q],"$ab")))
C.c.ev(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.aw.prototype={
ai:function(a){var u=new Float32Array(H.c_(H.l(a,"$ib",[P.q],"$ab")))
C.c.ew(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.am.prototype={
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.an.prototype={
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.ju.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cu(s.b,b).cu(s.d.cu(s.c,b),c)
a.sX(0,new V.Z(r.a,r.b,r.c))
a.scI(r.u(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sc8(new V.aN(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:5}
F.jE.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:11}
F.jG.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.r(p)
s=-s*p
u=r*p
a.sX(0,new V.Z(s,u,q))
u=new V.H(s,u,q)
a.scI(u.u(0,Math.sqrt(u.D(u))))
a.sc8(new V.aN(1-c,2+c,-1,-1))},
$S:5}
F.jH.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:24}
F.jI.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:24}
F.k5.prototype={
$2:function(a,b){return 0},
$S:11}
F.k6.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.r(s)
u=a.f
t=new V.H(u.a,u.b,u.c)
s=t.u(0,Math.sqrt(t.D(t))).m(0,this.b+s)
a.sX(0,new V.Z(s.a,s.b,s.c))},
$S:5}
F.k8.prototype={
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)},
$S:25}
F.jS.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.Z(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:25}
F.jF.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o=this,n=b*6.283185307179586,m=o.a,l=o.b,k=J.kP(m.$1(n),l)
l=J.mr(J.kP(m.$1(n+3.141592653589793/o.c),l),k)
l=new V.H(l.a,l.b,l.c)
u=l.u(0,Math.sqrt(l.D(l)))
m=$.lr
if(m==null){m=new V.H(1,0,0)
$.lr=m
t=m}else t=m
m=u.aw(!J.S(u,t)?V.lv():t)
s=m.u(0,Math.sqrt(m.D(m)))
m=s.aw(u)
t=m.u(0,Math.sqrt(m.D(m)))
r=c*6.283185307179586
m=Math.cos(r)
l=o.d
q=Math.sin(r)
m=t.m(0,m*l)
l=s.m(0,q*l)
q=m.c
p=l.c
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.r(p)
a.sX(0,J.mq(k,new V.Z(m.a-l.a,m.b-l.b,q-p)))},
$S:5}
F.jL.prototype={
$2:function(a,b){return 0},
$S:11}
F.jM.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sX(0,new V.Z(s,r,this.a.a.$2(b,c)))
u=new V.H(s,r,1)
a.scI(u.u(0,Math.sqrt(u.D(u))))
u=1-b
t=1-c
a.sc8(new V.aN(b*c,2+u*c,4+b*t,6+u*t))},
$S:5}
F.a6.prototype={
aU:function(){var u=this
if(!u.gaV()){C.a.M(u.a.a.d.b,u)
u.a.a.Z()}u.bY()
u.bZ()
u.hu()},
c2:function(a){this.a=a
C.a.h(a.d.b,this)},
c3:function(a){this.b=a
C.a.h(a.d.c,this)},
hC:function(a){this.c=a
C.a.h(a.d.d,this)},
bY:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
bZ:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
hu:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gaV:function(){return this.a==null||this.b==null||this.c==null},
f4:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cJ()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.e8())return
return s.u(0,Math.sqrt(s.D(s)))},
f8:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.p(0,q)
r=new V.H(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.D(r)))
r=t.p(0,q)
r=new V.H(r.a,r.b,r.c)
r=s.aw(r.u(0,Math.sqrt(r.D(r))))
return r.u(0,Math.sqrt(r.D(r)))},
cd:function(){var u,t=this
if(t.d!=null)return!0
u=t.f4()
if(u==null){u=t.f8()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
f3:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cJ()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.e8())return
return s.u(0,Math.sqrt(s.D(s)))},
f7:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.J().a){l=d.p(0,g)
l=new V.H(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.R(0)}else{p=(l-u.b)/r
l=d.p(0,g).m(0,p).n(0,g).p(0,j)
l=new V.H(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.R(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.D(l)))
l=o.aw(q)
l=l.u(0,Math.sqrt(l.D(l))).aw(o)
q=l.u(0,Math.sqrt(l.D(l)))}return q},
cb:function(){var u,t=this
if(t.e!=null)return!0
u=t.f3()
if(u==null){u=t.f7()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
giw:function(a){var u=this
if(J.S(u.a,u.b))return!0
if(J.S(u.b,u.c))return!0
if(J.S(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){var u,t,s=this
if(s.gaV())return a+"disposed"
u=a+C.b.aa(J.as(s.a.e),0)+", "+C.b.aa(J.as(s.b.e),0)+", "+C.b.aa(J.as(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.E("")}}
F.fv.prototype={}
F.hG.prototype={
aY:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bg.prototype={
aU:function(){var u=this
if(!u.gaV()){C.a.M(u.a.a.c.b,u)
u.a.a.Z()}u.bY()
u.bZ()},
c2:function(a){this.a=a
C.a.h(a.c.b,this)},
c3:function(a){this.b=a
C.a.h(a.c.c,this)},
bY:function(){var u=this.a
if(u!=null){C.a.M(u.c.b,this)
this.a=null}},
bZ:function(){var u=this.b
if(u!=null){C.a.M(u.c.c,this)
this.b=null}},
gaV:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){if(this.gaV())return a+"disposed"
return a+C.b.aa(J.as(this.a.e),0)+", "+C.b.aa(J.as(this.b.e),0)},
N:function(){return this.E("")}}
F.fL.prototype={}
F.i4.prototype={
aY:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
return t==u.e}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
return t==u.e}else return!1}}}
F.bz.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.aa(J.as(u.e),0)},
N:function(){return this.E("")}}
F.bX.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.T():u},
aZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.E)(g),++s){r=g[s]
h.a.h(0,r.iy())}h.a.w()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.E)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bz()
if(n.a==null)H.u(P.x("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.H(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.E)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.n()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.mO(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.E)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.n()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cf(l,k,i)}g=h.e
if(g!=null)g.af(0)},
ad:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ad()||!1
if(!t.a.ad())u=!1
s=t.e
if(s!=null)s.af(0)
return u},
iU:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.w(o,0)])
for(o=[F.ae];u.length!==0;){t=C.a.giK(u)
C.a.el(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.aY(0,t,q)){C.a.h(s,q)
C.a.el(u,r)}}if(s.length>1)b.aZ(s)}}p.a.w()
p.c.cF()
p.d.cF()
p.b.ja()
p.c.cG(new F.i4())
p.d.cG(new F.hG())
o=p.e
if(o!=null)o.af(0)},
c4:function(){this.iU(new F.iy(),new F.hg())},
iu:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.br()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bq().a)!==0)++s
if((t&$.bp().a)!==0)++s
if((t&$.bs().a)!==0)++s
if((t&$.bt().a)!==0)++s
if((t&$.d_().a)!==0)++s
if((t&$.d0().a)!==0)++s
if((t&$.c9().a)!==0)++s
if((t&$.bo().a)!==0)++s
r=a3.gcP(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.q
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.d4])
for(n=0,m=0;m<s;++m){l=a3.is(m)
k=l.gcP(l)
C.a.l(o,m,new Z.d4(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iS(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.l(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.c_(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d5(new Z.dZ(a0,f),o,a3)
e.sfo(H.d([],[Z.bw]))
if(a.b.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)}b=Z.kw(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bw(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)}b=Z.kw(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bw(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.w()
C.a.h(d,c.e)}b=Z.kw(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bw(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.E(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.E(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.E(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.E(t))}return C.a.C(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.H(null)},
$iow:1}
F.hA.prototype={
io:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[F.ae],"$ab")
u=H.d([],[F.a6])
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
C.a.h(u,F.cf(s,p,o))}}return u},
ip:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.ae],"$ab")
u=H.d([],[F.a6])
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
C.a.h(u,F.cf(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cf(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cf(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cf(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cG:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aY(0,p,n)){p.aU()
break}}}}},
cF:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.giw(s)
if(t)s.aU()}},
ad:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cd())s=!1
return s},
cc:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cb())s=!1
return s},
i:function(a){return this.N()},
E:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(a))
return C.a.C(r,"\n")},
N:function(){return this.E("")},
sfi:function(a){this.b=H.l(a,"$ib",[F.a6],"$ab")}}
F.hB.prototype={
gk:function(a){return this.b.length},
cG:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aY(0,p,n)){p.aU()
break}}}}},
cF:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.S(s.a,s.b)
if(t)s.aU()}},
i:function(a){return this.N()},
E:function(a){var u,t,s=H.d([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.C(s,"\n")},
N:function(){return this.E("")},
sfp:function(a){this.b=H.l(a,"$ib",[F.bg],"$ab")}}
F.hC.prototype={
gk:function(a){return this.b.length},
ja:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.H(null)}s=t.a
if(s!=null){C.a.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.N()},
E:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(a))
return C.a.C(r,"\n")},
N:function(){return this.E("")},
sbV:function(a){this.b=H.l(a,"$ib",[F.bz],"$ab")}}
F.ae.prototype={
cg:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dY(u.cx,r,o,t,s,q,p,a,n)},
iy:function(){return this.cg(null)},
sX:function(a,b){var u
if(!J.S(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
scI:function(a){var u
if(!J.S(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sc8:function(a){var u
if(!J.S(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
iS:function(a){var u,t,s=this
if(a.t(0,$.br())){u=s.f
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bq())){u=s.r
t=[P.q]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bp())){u=s.x
t=[P.q]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bs())){u=s.y
t=[P.q]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.t(0,$.bt())){u=s.z
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.d_())){u=s.Q
t=[P.q]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.d0())){u=s.Q
t=[P.q]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.c9()))return H.d([s.ch],[P.q])
else if(a.t(0,$.bo())){u=s.cx
t=[P.q]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.q])},
cd:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cJ()
t.d.L(0,new F.iD(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.af(0)}return!0},
cb:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cJ()
t.d.L(0,new F.iC(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.af(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){var u,t,s=this,r="-",q=H.d([],[P.h])
C.a.h(q,C.b.aa(J.as(s.e),0))
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
C.a.h(q,V.P(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.C(q,", ")
return a+"{"+t+"}"},
N:function(){return this.E("")}}
F.iD.prototype={
$1:function(a){var u,t
H.f(a,"$ia6")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.iC.prototype={
$1:function(a){var u,t
H.f(a,"$ia6")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.it.prototype={
w:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.x("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Z()
return!0},
iq:function(a,b,c,d,e,f){var u=F.dY(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
ad:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cd()
return!0},
cc:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cb()
return!0},
iv:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.S(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}}return!0},
i:function(a){return this.N()},
E:function(a){var u,t,s,r
this.w()
u=H.d([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
return C.a.C(u,"\n")},
N:function(){return this.E("")},
shX:function(a){this.c=H.l(a,"$ib",[F.ae],"$ab")}}
F.iu.prototype={
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
L:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a6]})
C.a.L(u.b,b)
C.a.L(u.c,new F.iv(u,b))
C.a.L(u.d,new F.iw(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(""))
return C.a.C(r,"\n")},
sfj:function(a){this.b=H.l(a,"$ib",[F.a6],"$ab")},
sfk:function(a){this.c=H.l(a,"$ib",[F.a6],"$ab")},
sfl:function(a){this.d=H.l(a,"$ib",[F.a6],"$ab")}}
F.iv.prototype={
$1:function(a){H.f(a,"$ia6")
if(!J.S(a.a,this.a))this.b.$1(a)},
$S:6}
F.iw.prototype={
$1:function(a){var u
H.f(a,"$ia6")
u=this.a
if(!J.S(a.a,u)&&!J.S(a.b,u))this.b.$1(a)},
$S:6}
F.ix.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(""))
return C.a.C(r,"\n")},
sfq:function(a){this.b=H.l(a,"$ib",[F.bg],"$ab")},
sfs:function(a){this.c=H.l(a,"$ib",[F.bg],"$ab")}}
F.iz.prototype={}
F.iy.prototype={
aY:function(a,b,c){return J.S(b.f,c.f)}}
F.iA.prototype={}
F.hg.prototype={
aZ:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[F.ae],"$ab")
u=V.cJ()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.n()
if(typeof r!=="number")return H.r(r)
u=new V.H(q+p,o+n,m+r)}}u=u.u(0,Math.sqrt(u.D(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.E)(a),++s){l=a[s]
if(r)k=null
else{q=u.a
p=u.b
o=u.c
if(typeof o!=="number")return o.m()
k=u.u(0,Math.sqrt(q*q+p*p+o*o))}if(!J.S(l.r,k)){l.r=k
q=l.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}return}}
F.iB.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(""))
return C.a.C(r,"\n")},
sbV:function(a){this.b=H.l(a,"$ib",[F.bz],"$ab")}}
O.dp.prototype={
gB:function(){var u=this.dy
return u==null?this.dy=D.T():u},
a7:function(a){var u
H.f(a,"$iA")
u=this.dy
if(u!=null)u.H(a)},
fL:function(){return this.a7(null)},
dm:function(a){H.f(a,"$iA")
this.a=null
this.a7(a)},
hz:function(){return this.dm(null)},
fF:function(a,b){var u=V.al
H.l(b,"$ij",[u],"$aj")
u=new D.bR([u])
u.b=!0
this.a7(u)},
fH:function(a,b){var u=V.al
H.l(b,"$ij",[u],"$aj")
u=new D.bS([u])
u.b=!0
this.a7(u)},
d2:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.f.a1(a1.e.length+3,4)*4,a3=C.f.a1(a1.f.length+3,4)*4,a4=C.f.a1(a1.r.length+3,4)*4,a5=C.f.a1(a1.x.length+3,4)*4,a6=C.f.a1(a1.y.length+3,4)*4,a7=C.f.a1(a1.z.length+3,4)*4,a8=C.f.a1(a0.e.a.length+3,4)*4
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
f=a1===C.h||u===C.h||t===C.h||s===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h
e=a1===C.i||u===C.i||t===C.i||s===C.i||r===C.i||q===C.i||p===C.i||o===C.i||n===C.i
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.br()
if(h){j=$.bq()
a=new Z.b9(a.a|j.a)}if(g){j=$.bp()
a=new Z.b9(a.a|j.a)}if(f){j=$.bs()
a=new Z.b9(a.a|j.a)}if(e){j=$.bt()
a=new Z.b9(a.a|j.a)}if(c){j=$.bo()
a=new Z.b9(a.a|j.a)}return new A.h0(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
V:function(a,b){H.l(a,"$ib",[T.dJ],"$ab")},
ap:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.at(u,u.length,[H.w(u,0)]);u.J();){t=u.d
t.toString
s=$.is
if(s==null)s=$.is=new V.H(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cJ(s)}}},
jc:function(a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4==null){a4=a3.d2()
u=a5.fr.j(0,a4.ae)
if(u==null){u=A.mV(a4,a5.a)
t=u.b
if(t.length===0)H.u(P.x("May not cache a shader with no name."))
if(a5.fr.bf(0,t))H.u(P.x('Shader cache already contains a shader by the name "'+t+'".'))
a5.fr.l(0,t,u)}a4=a3.a=u
a6.e=null}s=a4.z
r=s.bg
a4=a6.e
if(!(a4 instanceof Z.d5))a4=a6.e=null
if(a4==null||!a4.d.t(0,r)){a4=s.r1
if(a4)a6.d.ad()
q=s.r2
if(q){p=a6.d
o=p.e
if(o!=null)++o.d
p.d.cc()
p.a.cc()
p=p.e
if(p!=null)p.af(0)}p=s.ry
if(p){o=a6.d
n=o.e
if(n!=null)++n.d
o.a.iv()
o=o.e
if(o!=null)o.af(0)}m=a6.d.iu(new Z.iF(a5.a),r)
m.aM($.br()).e=a3.a.Q.c
if(a4)m.aM($.bq()).e=a3.a.cx.c
if(q)m.aM($.bp()).e=a3.a.ch.c
if(s.rx)m.aM($.bs()).e=a3.a.cy.c
if(p)m.aM($.bt()).e=a3.a.db.c
if(s.x1)m.aM($.bo()).e=a3.a.dx.c
a6.e=m}a4=T.dJ
l=H.d([],[a4])
q=a3.a
p=a5.a
p.useProgram(q.r)
q.x.iG()
if(s.fx){q=a3.a
o=a5.dx
o=o.gY(o)
q=q.dy
q.toString
q.ai(o.ab(0,!0))}if(s.fy){q=a3.a
o=a5.cx
if(o==null){o=a5.db
o=o.gY(o)
n=a5.dx
n=a5.cx=o.m(0,n.gY(n))
o=n}q=q.fr
q.toString
q.ai(o.ab(0,!0))}q=a3.a
o=a5.ch
if(o==null){o=a5.gj9()
n=a5.dx
n=a5.ch=o.m(0,n.gY(n))
o=n}q=q.fy
q.toString
q.ai(o.ab(0,!0))
if(s.x2){q=a3.a
o=a3.b
q=q.k1
q.toString
q.ai(C.m.ab(o,!0))}if(s.y1){q=a3.a
o=a3.c
q=q.k2
q.toString
q.ai(C.m.ab(o,!0))}if(s.y2){q=a3.a
o=a3.d
q=q.k3
q.toString
q.ai(C.m.ab(o,!0))}if(s.an>0){k=a3.e.a.length
q=a3.a.k4
C.c.a_(q.a,q.d,k)
for(q=[P.q],j=0;j<k;++j){o=a3.a
n=a3.e.a
if(j>=n.length)return H.e(n,j)
n=n[j]
o.toString
H.f(n,"$ial")
o=o.r1
if(j>=o.length)return H.e(o,j)
o=o[j]
i=new Float32Array(H.c_(H.l(n.ab(0,!0),"$ib",q,"$ab")))
C.c.ew(o.a,o.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=a3.a
o=a3.f.f
q=q.r2
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
break
case C.h:a3.V(l,a3.f.d)
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
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.V(l,a3.f.e)
q=a3.a
o=a3.f.e
q.a8(q.ry,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=a3.a
o=a3.r.f
q=q.x2
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
break
case C.h:a3.V(l,a3.r.d)
q=a3.a
o=a3.r.d
q.ac(q.y1,q.an,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.V(l,a3.r.e)
q=a3.a
o=a3.r.e
q.a8(q.y2,q.an,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break}switch(s.c){case C.d:break
case C.j:q=a3.a
o=a3.x.f
q=q.ae
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
break
case C.h:a3.V(l,a3.x.d)
q=a3.a
o=a3.x.d
q.ac(q.bg,q.bh,o)
o=a3.a
q=a3.x.f
o=o.ae
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.V(l,a3.x.e)
q=a3.a
o=a3.x.e
q.a8(q.dE,q.bh,o)
o=a3.a
q=a3.x.f
o=o.ae
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break}switch(s.d){case C.d:break
case C.j:q=a3.a
o=a3.y.f
q=q.bi
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
break
case C.h:a3.V(l,a3.y.d)
q=a3.a
o=a3.y.d
q.ac(q.dF,q.bj,o)
o=a3.a
q=a3.y.f
o=o.bi
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.V(l,a3.y.e)
q=a3.a
o=a3.y.e
q.a8(q.dG,q.bj,o)
o=a3.a
q=a3.y.f
o=o.bi
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break}switch(s.e){case C.d:break
case C.j:q=a3.a
o=a3.z.f
q=q.bk
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
o=a3.a
h=a3.z.ch
o=o.bm
C.c.O(o.a,o.d,h)
break
case C.h:a3.V(l,a3.z.d)
q=a3.a
o=a3.z.d
q.ac(q.dH,q.bl,o)
o=a3.a
q=a3.z.f
o=o.bk
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bm
C.c.O(q.a,q.d,h)
break
case C.i:a3.V(l,a3.z.e)
q=a3.a
o=a3.z.e
q.a8(q.dI,q.bl,o)
o=a3.a
q=a3.z.f
o=o.bk
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bm
C.c.O(q.a,q.d,h)
break}if(s.z>0){k=a3.dx.e.length
q=a3.a.dT
C.c.a_(q.a,q.d,k)
q=a5.db
g=q.gY(q)
for(q=a3.dx.e,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.E)(q),++e){d=q[e]
n=a3.a.ck
if(f>=n.length)return H.e(n,f)
c=n[f]
n=g.cJ(d.a)
h=n.a
b=n.b
a=n.c
if(typeof a!=="number")return a.m()
a=n.u(0,Math.sqrt(h*h+b*b+a*a))
b=c.b
h=a.a
n=a.b
a=a.c
C.c.v(b.a,b.d,h,n,a)
a=d.c
n=c.c
C.c.v(n.a,n.d,a.a,a.b,a.c);++f}}if(s.Q>0){k=a3.dx.f.length
q=a3.a.dU
C.c.a_(q.a,q.d,k)
q=a5.db
g=q.gY(q)
for(q=a3.dx.f,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.E)(q),++e){d=q[e]
n=a3.a.cl
if(f>=n.length)return H.e(n,f)
c=n[f]
n=d.gb2(d)
h=c.b
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=g.b6(d.gb2(d))
h=c.c
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gam(d)
h=c.d
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gc5()
h=c.e
C.c.O(h.a,h.d,n)
n=d.gc6()
h=c.f
C.c.O(h.a,h.d,n)
n=d.gc7()
h=c.r
C.c.O(h.a,h.d,n);++f}}if(s.ch>0){k=a3.dx.r.length
q=a3.a.dV
C.c.a_(q.a,q.d,k)
q=a5.db
g=q.gY(q)
for(q=a3.dx.r,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.E)(q),++e){d=q[e]
n=a3.a.cm
if(f>=n.length)return H.e(n,f)
c=n[f]
n=d.gb2(d)
h=c.b
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gcj(d).jv()
h=c.c
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=g.b6(d.gb2(d))
h=c.d
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gam(d)
h=c.e
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gjt()
h=c.f
C.c.O(h.a,h.d,n)
n=d.gjs()
h=c.r
C.c.O(h.a,h.d,n)
n=d.gc5()
h=c.x
C.c.O(h.a,h.d,n)
n=d.gc6()
h=c.y
C.c.O(h.a,h.d,n)
n=d.gc7()
h=c.z
C.c.O(h.a,h.d,n);++f}}if(s.cx>0){k=a3.dx.x.length
q=a3.a.dW
C.c.a_(q.a,q.d,k)
q=a5.db
g=q.gY(q)
for(q=a3.dx.x,o=q.length,n=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.E)(q),++e){d=q[e]
h=a3.a.cn
if(f>=h.length)return H.e(h,f)
c=h[f]
h=d.gb3()
H.l(l,"$ib",n,"$ab")
if(!C.a.aL(l,h)){h.saW(0,l.length)
C.a.h(l,h)}h=d.gcj(d)
b=c.d
C.c.v(b.a,b.d,h.a,h.b,h.c)
h=d.gbz()
b=c.b
C.c.v(b.a,b.d,h.a,h.b,h.c)
h=d.gbx(d)
b=c.c
C.c.v(b.a,b.d,h.a,h.b,h.c)
h=g.cJ(d.gcj(d))
b=h.a
a=h.b
a0=h.c
if(typeof a0!=="number")return a0.m()
a0=h.u(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
h=a0.b
a0=a0.c
C.c.v(a.a,a.d,b,h,a0)
a0=d.gam(d)
h=c.f
C.c.v(h.a,h.d,a0.a,a0.b,a0.c)
a0=d.gb3()
h=a0.gaX(a0)
if(!h){h=c.x
C.c.a_(h.a,h.d,1)}else{h=c.r
b=a0.gaX(a0)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,a0.gaW(a0))
h=c.x
C.c.a_(h.a,h.d,0)}++f}}if(s.cy>0){k=a3.dx.y.length
q=a3.a.dX
C.c.a_(q.a,q.d,k)
q=a5.db
g=q.gY(q)
for(q=a3.dx.y,o=q.length,n=[P.q],h=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.E)(q),++e){d=q[e]
b=a3.a.co
if(f>=b.length)return H.e(b,f)
c=b[f]
b=d.gb3()
H.l(l,"$ib",h,"$ab")
if(!C.a.aL(l,b)){b.saW(0,l.length)
C.a.h(l,b)}a1=g.m(0,d.gY(d))
b=d.gY(d)
a=$.cs
b=b.b6(a==null?$.cs=new V.Z(0,0,0):a)
a=c.b
C.c.v(a.a,a.d,b.a,b.b,b.c)
b=$.cs
b=a1.b6(b==null?$.cs=new V.Z(0,0,0):b)
a=c.c
C.c.v(a.a,a.d,b.a,b.b,b.c)
b=a1.e7(0)
a=c.d
i=new Float32Array(H.c_(H.l(new V.dr(b.a,b.b,b.c,b.e,b.f,b.r,b.y,b.z,b.Q).ab(0,!0),"$ib",n,"$ab")))
C.c.ev(a.a,a.d,!1,i)
a=d.gam(d)
b=c.e
C.c.v(b.a,b.d,a.a,a.b,a.c)
a=d.gb3()
b=a.gaX(a)
if(!b){b=c.r
C.c.a_(b.a,b.d,1)}else{b=c.f
a0=a.gaX(a)
a2=b.a
b=b.d
if(!a0)a2.uniform1i(b,0)
else a2.uniform1i(b,a.gaW(a))
b=c.r
C.c.a_(b.a,b.d,0)}b=d.gc5()
a=c.x
C.c.O(a.a,a.d,b)
b=d.gc6()
a=c.y
C.c.O(a.a,a.d,b)
b=d.gc7()
a=c.z
C.c.O(a.a,a.d,b);++f}}if(s.db>0){k=a3.dx.z.length
q=a3.a.dY
C.c.a_(q.a,q.d,k)
q=a5.db
g=q.gY(q)
for(q=a3.dx.z,o=q.length,a4=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.E)(q),++e){d=q[e]
n=a3.a.cp
if(f>=n.length)return H.e(n,f)
c=n[f]
n=d.gb3()
H.l(l,"$ib",a4,"$ab")
if(!C.a.aL(l,n)){n.saW(0,l.length)
C.a.h(l,n)}n=d.gb2(d)
h=c.b
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gcj(d)
h=c.c
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gbz()
h=c.d
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gbx(d)
h=c.e
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=g.b6(d.gb2(d))
h=c.f
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gb3()
h=n.gaX(n)
if(!h){n=c.x
C.c.a_(n.a,n.d,1)}else{h=c.r
b=n.gaX(n)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,n.gaW(n))
n=c.x
C.c.a_(n.a,n.d,0)}n=d.gam(d)
h=c.y
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gjw()
h=c.z
C.c.O(h.a,h.d,n)
n=d.gjx()
h=c.Q
C.c.O(h.a,h.d,n)
n=d.gc5()
h=c.ch
C.c.O(h.a,h.d,n)
n=d.gc6()
h=c.cx
C.c.O(h.a,h.d,n)
n=d.gc7()
h=c.cy
C.c.O(h.a,h.d,n);++f}}}switch(s.f){case C.d:break
case C.j:break
case C.h:a3.V(l,a3.Q.d)
a4=a3.a
q=a3.Q.d
a4.ac(a4.dJ,a4.bn,q)
break
case C.i:a3.V(l,a3.Q.e)
a4=a3.a
q=a3.Q.e
a4.a8(a4.dK,a4.bn,q)
break}if(s.fr){a4=a3.a
q=a5.Q
if(q==null){q=a5.db
q=a5.Q=q.gY(q).e7(0)}a4=a4.id
a4.toString
a4.ai(q.ab(0,!0))}if(s.dy){a3.V(l,a3.ch)
a4=a3.a
q=a3.ch
a4.a8(a4.dL,a4.dM,q)
switch(s.r){case C.d:break
case C.j:a4=a3.a
q=a3.cx.f
a4=a4.bo
a4.toString
o=q.a
n=q.b
q=q.c
C.c.v(a4.a,a4.d,o,n,q)
break
case C.h:a3.V(l,a3.cx.d)
a4=a3.a
q=a3.cx.d
a4.ac(a4.dN,a4.bp,q)
q=a3.a
a4=a3.cx.f
q=q.bo
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
break
case C.i:a3.V(l,a3.cx.e)
a4=a3.a
q=a3.cx.e
a4.a8(a4.dO,a4.bp,q)
q=a3.a
a4=a3.cx.f
q=q.bo
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
break}switch(s.x){case C.d:break
case C.j:a4=a3.a
q=a3.cy.f
a4=a4.br
a4.toString
o=q.a
n=q.b
q=q.c
C.c.v(a4.a,a4.d,o,n,q)
q=a3.a
n=a3.cy.ch
q=q.bq
C.c.O(q.a,q.d,n)
break
case C.h:a3.V(l,a3.cy.d)
a4=a3.a
q=a3.cy.d
a4.ac(a4.dP,a4.bs,q)
q=a3.a
a4=a3.cy.f
q=q.br
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bq
C.c.O(a4.a,a4.d,n)
break
case C.i:a3.V(l,a3.cy.e)
a4=a3.a
q=a3.cy.e
a4.a8(a4.dQ,a4.bs,q)
q=a3.a
a4=a3.cy.f
q=q.br
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bq
C.c.O(a4.a,a4.d,n)
break}}a4=s.y
q=a4!==C.d
if(q){switch(a4){case C.d:break
case C.j:a4=a3.a
o=a3.db.f
a4=a4.bt
C.c.O(a4.a,a4.d,o)
break
case C.h:a3.V(l,a3.db.d)
a4=a3.a
o=a3.db.d
a4.ac(a4.dR,a4.bu,o)
o=a3.a
a4=a3.db.f
o=o.bt
C.c.O(o.a,o.d,a4)
break
case C.i:a3.V(l,a3.db.e)
a4=a3.a
o=a3.db.e
a4.a8(a4.dS,a4.bu,o)
o=a3.a
a4=a3.db.f
o=o.bt
C.c.O(o.a,o.d,a4)
break}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].be(a5)
a4=a6.e
a4.be(a5)
a4.aO(a5)
a4.eu(a5)
if(q)p.disable(3042)
for(j=0;j<l.length;++j)l[j].eu(a5)
a4=a3.a
a4.toString
p.useProgram(null)
a4.x.iD()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d2().ae},
sf6:function(a){this.e=H.l(a,"$ia0",[V.al],"$aa0")}}
O.fZ.prototype={}
O.dq.prototype={
aG:function(){}}
O.h_.prototype={}
O.b3.prototype={
dq:function(a){var u,t,s=this
if(!J.S(s.f,a)){u=s.f
s.f=a
t=new D.L(s.b+".color",u,a,[V.a1])
t.b=!0
s.a.a7(t)}},
aG:function(){this.eG()
this.dq(new V.a1(1,1,1))},
sam:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.j
t.aG()
u=t.a
u.a=null
u.a7(null)}t.dq(b)}}
O.h1.prototype={
hB:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.J().a)){u.ch=a
t=new D.L(u.b+".refraction",t,a,[P.q])
t.b=!0
u.a.a7(t)}},
aG:function(){this.bD()
this.hB(1)}}
O.h2.prototype={
c_:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.J().a)){u.ch=a
t=new D.L(u.b+".shininess",t,a,[P.q])
t.b=!0
u.a.a7(t)}},
aG:function(){this.bD()
this.c_(100)}}
O.bY.prototype={}
T.dJ.prototype={}
V.eW.prototype={
aN:function(a,b){return!0},
i:function(a){return"all"},
$ibh:1}
V.bh.prototype={}
V.dn.prototype={
aN:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)if(u[s].aN(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sau:function(a){this.a=H.l(a,"$ib",[V.bh],"$ab")},
$ibh:1}
V.bk.prototype={
aN:function(a,b){return!this.eF(0,b)},
i:function(a){return"!["+this.cQ(0)+"]"}}
V.hz.prototype={
eK:function(a){var u,t
if(a.a.length<=0)throw H.c(P.x("May not create a SetMatcher with zero characters."))
u=new H.aK([P.p,P.ab])
for(t=new H.dl(a,a.gk(a),[H.ax(a,"y",0)]);t.J();)u.l(0,t.d,!0)
this.shA(u)},
aN:function(a,b){return this.a.bf(0,b)},
i:function(a){var u=this.a
return P.cy(u.gao(u),0,null)},
shA:function(a){this.a=H.l(a,"$iD",[P.p,P.ab],"$aD")},
$ibh:1}
V.cw.prototype={
C:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cA(this.a.P(0,b))
r.sau(H.d([],[V.bh]))
r.c=!1
C.a.h(this.c,r)
return r},
iJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.aN(0,a))return r}return},
i:function(a){return this.b},
shS:function(a){this.c=H.l(a,"$ib",[V.cA],"$ab")}}
V.dO.prototype={
i:function(a){var u=H.m5(this.b,"\n","\\n"),t=H.m5(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cz.prototype={
i:function(a){return this.b},
shv:function(a){var u=P.h
this.c=H.l(a,"$iD",[u,u],"$aD")}}
V.hX.prototype={
P:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cw(this,b)
u.shS(H.d([],[V.cA]))
u.d=null
this.a.l(0,b,u)}return u},
b5:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cz(a)
u=P.h
t.shv(new H.aK([u,u]))
this.b.l(0,a,t)}return t},
jl:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.dO]),k=this.c,j=[P.p],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.G(a,s)
q=k.iJ(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cy(i,0,m)
throw H.c(P.x("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cy(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.dO(n==null?o.b:n,p,s)}++s}}},
shJ:function(a){this.a=H.l(a,"$iD",[P.h,V.cw],"$aD")},
shL:function(a){this.b=H.l(a,"$iD",[P.h,V.cz],"$aD")}}
V.cA.prototype={
i:function(a){return this.b.b+": "+this.cQ(0)}}
X.d7.prototype={$ibj:1}
X.fC.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.T():u}}
X.dw.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.T():u},
aE:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.H(a)},
f0:function(){return this.aE(null)},
sb_:function(a){var u,t,s=this
if(!J.S(s.b,a)){u=s.b
if(u!=null)u.gB().M(0,s.gcU())
t=s.b
s.b=a
if(a!=null)a.gB().h(0,s.gcU())
u=new D.L("mover",t,s.b,[U.a9])
u.b=!0
s.aE(u)}},
$ibj:1,
$id7:1}
X.dI.prototype={}
V.k4.prototype={
$1:function(a){var u
H.f(a,"$ib6")
u=C.e.es(this.a.giM(),2)
if(u!=="0.00")P.kM(u+" fps")},
$S:47}
V.hp.prototype={
dw:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.lm().gcD().j(0,H.m(u))
if(t==null)if(d){c.$0()
m.du(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kS(m.c).h(0,q)
o=W.mJ("radio")
o.checked=s
o.name=u
u=W.o
W.aa(o,"change",H.n(new V.hq(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.kS(m.c).h(0,r.createElement("br"))},
aJ:function(a,b,c){return this.dw(a,b,c,!1)},
du:function(a){var u,t,s=P.lm(),r=P.h,q=P.mQ(s.gcD(),r,r)
q.l(0,this.a,a)
u=s.em(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jg([],[]).cK(""),"",t)}}
V.hq.prototype={
$1:function(a){var u=this
if(H.C(u.b.checked)){u.c.$0()
u.a.du(u.d)}},
$S:27}
V.hD.prototype={
eM:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.aa(q,"scroll",H.n(new V.hF(o),{func:1,ret:-1,args:[r]}),!1,r)},
dz:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.h],"$ab")
this.hE()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jl(C.a.iR(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
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
if(H.ol(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.M(m[1])
l.textContent=H.M(m[0])
t.appendChild(l)}else{k=P.jq(C.R,n,C.l,!1)
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
il:function(a){var u,t,s,r,q,p,o,n="auto"
H.l(a,"$ib",[P.h],"$ab")
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
s=H.f(r.insertCell(-1),"$ibm").style
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
o=H.f(r.insertCell(-1),"$ibm")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hE:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.hX()
t=P.h
u.shJ(new H.aK([t,V.cw]))
u.shL(new H.aK([t,V.cz]))
u.c=null
u.c=u.P(0,q)
t=u.P(0,q).C(0,p)
s=V.ai(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,p).C(0,p)
s=new V.bk()
r=[V.bh]
s.sau(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a5("*"))
C.a.h(s.a,t)
t=u.P(0,p).C(0,"BoldEnd")
s=V.ai(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).C(0,o)
s=V.ai(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,o).C(0,o)
s=new V.bk()
s.sau(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a5("_"))
C.a.h(s.a,t)
t=u.P(0,o).C(0,n)
s=V.ai(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).C(0,m)
s=V.ai(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,m).C(0,m)
s=new V.bk()
s.sau(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a5("`"))
C.a.h(s.a,t)
t=u.P(0,m).C(0,"CodeEnd")
s=V.ai(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).C(0,l)
s=V.ai(new H.a5("["))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,l).C(0,k)
s=V.ai(new H.a5("|"))
C.a.h(t.a,s)
s=u.P(0,l).C(0,j)
t=V.ai(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,l).C(0,l)
t=new V.bk()
t.sau(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a5("|]"))
C.a.h(t.a,s)
s=u.P(0,k).C(0,j)
t=V.ai(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,k).C(0,k)
t=new V.bk()
t.sau(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a5("|]"))
C.a.h(t.a,s)
C.a.h(u.P(0,q).C(0,i).a,new V.eW())
s=u.P(0,i).C(0,i)
t=new V.bk()
t.sau(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a5("*_`["))
C.a.h(t.a,s)
s=u.P(0,"BoldEnd")
s.d=s.a.b5(p)
s=u.P(0,n)
s.d=s.a.b5(o)
s=u.P(0,"CodeEnd")
s.d=s.a.b5(m)
s=u.P(0,j)
s.d=s.a.b5("Link")
s=u.P(0,i)
s.d=s.a.b5(i)
this.b=u}}
V.hF.prototype={
$1:function(a){P.li(C.t,new V.hE(this.a))},
$S:27}
V.hE.prototype={
$0:function(){var u=C.e.ag(document.documentElement.scrollTop),t=this.a.style,s=H.m(-0.01*u)+"px"
t.top=s},
$S:0}
K.jU.prototype={
$1:function(a){var u=H.k(H.f(a,"$iA"),"$idH").c,t=this.a.ah(0,u,null),s=this.b.ah(0,u,null),r=this.c
r.e.l(0,0,t)
r.e.l(0,1,s)
r.e.l(0,2,t)
r.e.l(0,3,s)
r.e.l(0,4,t)
r.e.l(0,5,s)
r.e.l(0,6,t)
r.e.l(0,7,s)},
$S:10}
K.k1.prototype={
$1:function(a){a.ad()
this.a.scO(0,a)},
$S:48}
K.jV.prototype={
$0:function(){this.a.$1(F.lS(30,null,30))},
$S:0}
K.jW.prototype={
$0:function(){this.a.$1(F.lT(!0,100,20,1))},
$S:0}
K.jX.prototype={
$0:function(){this.a.$1(F.lT(!1,30,12,0))},
$S:0}
K.jY.prototype={
$0:function(){this.a.$1(F.ok(20,20))},
$S:0}
K.jZ.prototype={
$0:function(){this.a.$1(F.oo(1.5,0.25))},
$S:0}
K.k_.prototype={
$0:function(){this.a.$1(F.ob(0.1))},
$S:0}
K.k0.prototype={
$0:function(){this.a.$1(F.o5())},
$S:0};(function aliases(){var u=J.a.prototype
u.eD=u.i
u=J.di.prototype
u.eE=u.i
u=O.dq.prototype
u.eG=u.aG
u=O.b3.prototype
u.bD=u.aG
u=V.dn.prototype
u.eF=u.aN
u.cQ=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"nS","no",13)
u(P,"nT","np",13)
u(P,"nU","nq",13)
t(P,"lQ","nQ",3)
var n
s(n=E.ao.prototype,"gee",0,0,null,["$1","$0"],["ef","j1"],1,0)
s(n,"gec",0,0,null,["$1","$0"],["ed","j0"],1,0)
s(n,"gea",0,0,null,["$1","$0"],["eb","iY"],1,0)
r(n,"giW","iX",9)
r(n,"giZ","j_",9)
s(n=E.dN.prototype,"gcR",0,0,null,["$1","$0"],["cT","cS"],1,0)
q(n,"gje","en",3)
p(n=X.dU.prototype,"gfW","fX",12)
p(n,"gfI","fJ",12)
p(n,"gfQ","fR",4)
p(n,"gh_","h0",15)
p(n,"gfY","fZ",15)
p(n,"gh3","h4",4)
p(n,"gh7","h8",4)
p(n,"gfU","fV",4)
p(n,"gh5","h6",4)
p(n,"gfS","fT",4)
p(n,"gh9","ha",40)
p(n,"ghb","hc",12)
p(n,"ghn","ho",14)
p(n,"ghj","hk",14)
p(n,"ghl","hm",14)
s(D.bd.prototype,"geN",0,0,null,["$1","$0"],["aq","eO"],1,0)
s(n=D.dk.prototype,"gdg",0,0,null,["$1","$0"],["dh","h1"],1,0)
p(n,"ghd","he",42)
r(n,"gfC","fD",21)
r(n,"ghh","hi",21)
o(V.U.prototype,"gk","ct",22)
o(V.H.prototype,"gk","ct",22)
s(n=U.ci.prototype,"gaD",0,0,null,["$1","$0"],["F","a2"],1,0)
r(n,"geP","eQ",23)
r(n,"ghf","hg",23)
s(n=U.dV.prototype,"gaD",0,0,null,["$1","$0"],["F","a2"],1,0)
p(n,"gbN","bO",2)
p(n,"gbP","bQ",2)
p(n,"gbR","bS",2)
s(n=U.dW.prototype,"gaD",0,0,null,["$1","$0"],["F","a2"],1,0)
p(n,"gbN","bO",2)
p(n,"gbP","bQ",2)
p(n,"gbR","bS",2)
p(n,"gfu","fv",2)
p(n,"gfw","fz",2)
p(n,"ghQ","hR",2)
p(n,"ghO","hP",2)
p(n,"ghM","hN",2)
p(U.dX.prototype,"gfA","fB",2)
s(n=M.dd.prototype,"gaj",0,0,null,["$1","$0"],["ar","eS"],1,0)
r(n,"gfM","fN",9)
r(n,"gfO","fP",9)
s(n=O.dp.prototype,"gfK",0,0,null,["$1","$0"],["a7","fL"],1,0)
s(n,"ghy",0,0,null,["$1","$0"],["dm","hz"],1,0)
r(n,"gfE","fF",26)
r(n,"gfG","fH",26)
s(X.dw.prototype,"gcU",0,0,null,["$1","$0"],["aE","f0"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Q,null)
s(P.Q,[H.km,J.a,J.at,P.ee,P.j,H.dl,P.b0,H.bP,H.cI,H.fd,H.i1,P.bv,H.cc,H.ev,P.ag,H.fM,H.fO,H.fH,P.eB,P.bb,P.aC,P.e_,P.hN,P.cx,P.hO,P.b6,P.ak,P.jt,P.jc,P.cM,P.j6,P.y,P.jl,P.fV,P.bK,P.js,P.jr,P.ab,P.au,P.a8,P.aZ,P.hk,P.dF,P.e7,P.fB,P.b,P.D,P.K,P.aq,P.h,P.aj,P.bZ,P.ii,P.jd,W.fg,W.B,W.df,P.jf,P.j7,P.R,O.a0,O.cl,E.f7,E.ao,E.hr,D.A,E.dN,Z.dZ,Z.iF,Z.d5,Z.bw,Z.b9,D.fa,D.b_,X.d6,X.dj,X.fJ,X.fS,X.av,X.ha,X.hY,X.dU,D.bd,D.a4,D.dx,D.dE,D.dK,D.dL,D.dM,V.a1,V.aH,V.fs,V.dr,V.al,V.a7,V.Z,V.aN,V.dB,V.U,V.H,U.dV,U.dW,U.dX,M.dd,A.d2,A.f0,A.h0,A.cB,A.cF,A.cD,A.cG,A.cE,A.cH,A.bL,A.dQ,A.ib,F.a6,F.fv,F.bg,F.fL,F.bz,F.bX,F.hA,F.hB,F.hC,F.ae,F.it,F.iu,F.ix,F.iz,F.iA,F.iB,O.bY,O.dq,V.eW,V.bh,V.dn,V.hz,V.cw,V.dO,V.cz,V.hX,X.d7,X.dI,X.dw,V.hp,V.hD])
s(J.a,[J.fF,J.dh,J.di,J.aJ,J.bx,J.be,H.co,H.by,W.i,W.eV,W.bI,W.aX,W.aY,W.V,W.e1,W.fk,W.fl,W.e3,W.dc,W.e5,W.fn,W.o,W.e8,W.aI,W.fD,W.ea,W.cj,W.fR,W.h4,W.ef,W.eg,W.aL,W.eh,W.ek,W.aM,W.eo,W.eq,W.aP,W.er,W.aQ,W.ew,W.az,W.ez,W.hW,W.aS,W.eC,W.i_,W.io,W.eH,W.eJ,W.eL,W.eN,W.eP,P.b2,P.ec,P.b5,P.em,P.ho,P.ex,P.b7,P.eE,P.f1,P.e0,P.d3,P.dz,P.bW,P.dD,P.dR,P.et])
s(J.di,[J.hl,J.bC,J.bf])
t(J.kl,J.aJ)
s(J.bx,[J.dg,J.fG])
t(P.fQ,P.ee)
s(P.fQ,[H.dS,W.iO,W.iN,P.fx])
t(H.a5,H.dS)
s(P.j,[H.fq,H.fW,H.iG])
s(P.b0,[H.fX,H.iH])
t(H.fe,H.fd)
s(P.bv,[H.hh,H.fI,H.ig,H.i3,H.f9,H.hx,P.f_,P.dv,P.aV,P.ih,P.id,P.dG,P.fc,P.fj])
s(H.cc,[H.k9,H.hS,H.jO,H.jP,H.jQ,P.iK,P.iJ,P.iL,P.iM,P.jk,P.jj,P.iU,P.iY,P.iV,P.iW,P.iX,P.j0,P.j1,P.j_,P.iZ,P.hP,P.hQ,P.jB,P.ja,P.j9,P.jb,P.fP,P.fU,P.fo,P.fp,P.im,P.ij,P.ik,P.il,P.jm,P.jn,P.jp,P.jo,P.jx,P.jw,P.jy,P.jz,W.h6,W.h8,W.hw,W.hM,W.iT,P.jh,P.jD,P.fy,P.fz,P.f3,E.hs,E.ht,E.hu,E.hV,D.ft,D.fu,F.ju,F.jE,F.jG,F.jH,F.jI,F.k5,F.k6,F.k8,F.jS,F.jF,F.jL,F.jM,F.iD,F.iC,F.iv,F.iw,V.k4,V.hq,V.hF,V.hE,K.jU,K.k1,K.jV,K.jW,K.jX,K.jY,K.jZ,K.k_,K.k0])
s(H.hS,[H.hK,H.ca])
t(H.iI,P.f_)
t(P.fT,P.ag)
t(H.aK,P.fT)
t(H.fN,H.fq)
t(H.ds,H.by)
s(H.ds,[H.cN,H.cP])
t(H.cO,H.cN)
t(H.cp,H.cO)
t(H.cQ,H.cP)
t(H.dt,H.cQ)
s(H.dt,[H.hb,H.hc,H.hd,H.he,H.hf,H.du,H.cq])
t(P.j8,P.jt)
t(P.j5,P.jc)
t(P.eG,P.fV)
t(P.dT,P.eG)
s(P.bK,[P.f5,P.fr])
t(P.bO,P.hO)
s(P.bO,[P.f6,P.ir,P.iq])
t(P.ip,P.fr)
s(P.a8,[P.q,P.p])
s(P.aV,[P.bV,P.fE])
t(P.iQ,P.bZ)
s(W.i,[W.G,W.fw,W.cm,W.aO,W.cR,W.aR,W.aA,W.cT,W.iE,W.cK,P.f4,P.bH])
s(W.G,[W.a2,W.bu])
s(W.a2,[W.v,P.t])
s(W.v,[W.eX,W.eY,W.bJ,W.da,W.fA,W.ck,W.hy,W.bm])
s(W.aX,[W.cd,W.fh,W.fi])
t(W.ff,W.aY)
t(W.ce,W.e1)
t(W.e4,W.e3)
t(W.db,W.e4)
t(W.e6,W.e5)
t(W.fm,W.e6)
t(W.ay,W.bI)
t(W.e9,W.e8)
t(W.cg,W.e9)
t(W.eb,W.ea)
t(W.bQ,W.eb)
t(W.bB,W.o)
s(W.bB,[W.b1,W.ac,W.aT])
t(W.h5,W.ef)
t(W.h7,W.eg)
t(W.ei,W.eh)
t(W.h9,W.ei)
t(W.el,W.ek)
t(W.cr,W.el)
t(W.ep,W.eo)
t(W.hm,W.ep)
t(W.hv,W.eq)
t(W.cS,W.cR)
t(W.hH,W.cS)
t(W.es,W.er)
t(W.hI,W.es)
t(W.hL,W.ew)
t(W.eA,W.ez)
t(W.hT,W.eA)
t(W.cU,W.cT)
t(W.hU,W.cU)
t(W.eD,W.eC)
t(W.hZ,W.eD)
t(W.ba,W.ac)
t(W.eI,W.eH)
t(W.iP,W.eI)
t(W.e2,W.dc)
t(W.eK,W.eJ)
t(W.j2,W.eK)
t(W.eM,W.eL)
t(W.ej,W.eM)
t(W.eO,W.eN)
t(W.je,W.eO)
t(W.eQ,W.eP)
t(W.ji,W.eQ)
t(W.iR,P.hN)
t(W.kx,W.iR)
t(W.iS,P.cx)
t(P.jg,P.jf)
t(P.ah,P.j7)
t(P.ed,P.ec)
t(P.fK,P.ed)
t(P.en,P.em)
t(P.hi,P.en)
t(P.ey,P.ex)
t(P.hR,P.ey)
t(P.eF,P.eE)
t(P.i0,P.eF)
t(P.f2,P.e0)
t(P.hj,P.bH)
t(P.eu,P.et)
t(P.hJ,P.eu)
s(D.A,[E.dH,D.bR,D.bS,D.L,X.hn])
s(E.f7,[Z.d4,A.cv,T.dJ])
s(X.hn,[X.dm,X.bi,X.cn,X.dP])
s(O.a0,[D.dk,U.ci])
s(D.fa,[U.fb,U.a9])
s(U.a9,[U.d8,U.dC])
t(A.fY,A.cv)
s(A.dQ,[A.O,A.i7,A.i8,A.ia,A.i5,A.a_,A.i6,A.N,A.i9,A.ic,A.cC,A.aw,A.am,A.an])
t(F.hG,F.fv)
t(F.i4,F.fL)
t(F.iy,F.iz)
t(F.hg,F.iA)
t(O.dp,O.bY)
s(O.dq,[O.fZ,O.h_,O.b3])
s(O.b3,[O.h1,O.h2])
s(V.dn,[V.bk,V.cA])
t(X.fC,X.dI)
u(H.dS,H.cI)
u(H.cN,P.y)
u(H.cO,H.bP)
u(H.cP,P.y)
u(H.cQ,H.bP)
u(P.ee,P.y)
u(P.eG,P.jl)
u(W.e1,W.fg)
u(W.e3,P.y)
u(W.e4,W.B)
u(W.e5,P.y)
u(W.e6,W.B)
u(W.e8,P.y)
u(W.e9,W.B)
u(W.ea,P.y)
u(W.eb,W.B)
u(W.ef,P.ag)
u(W.eg,P.ag)
u(W.eh,P.y)
u(W.ei,W.B)
u(W.ek,P.y)
u(W.el,W.B)
u(W.eo,P.y)
u(W.ep,W.B)
u(W.eq,P.ag)
u(W.cR,P.y)
u(W.cS,W.B)
u(W.er,P.y)
u(W.es,W.B)
u(W.ew,P.ag)
u(W.ez,P.y)
u(W.eA,W.B)
u(W.cT,P.y)
u(W.cU,W.B)
u(W.eC,P.y)
u(W.eD,W.B)
u(W.eH,P.y)
u(W.eI,W.B)
u(W.eJ,P.y)
u(W.eK,W.B)
u(W.eL,P.y)
u(W.eM,W.B)
u(W.eN,P.y)
u(W.eO,W.B)
u(W.eP,P.y)
u(W.eQ,W.B)
u(P.ec,P.y)
u(P.ed,W.B)
u(P.em,P.y)
u(P.en,W.B)
u(P.ex,P.y)
u(P.ey,W.B)
u(P.eE,P.y)
u(P.eF,W.B)
u(P.e0,P.ag)
u(P.et,P.y)
u(P.eu,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bJ.prototype
C.N=J.a.prototype
C.a=J.aJ.prototype
C.f=J.dg.prototype
C.m=J.dh.prototype
C.e=J.bx.prototype
C.b=J.be.prototype
C.O=J.bf.prototype
C.U=W.cr.prototype
C.A=J.hl.prototype
C.c=P.bW.prototype
C.u=J.bC.prototype
C.B=W.ba.prototype
C.C=W.cK.prototype
C.V=new P.f6()
C.D=new P.f5()
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

C.K=new P.hk()
C.l=new P.ip()
C.L=new P.ir()
C.k=new P.j8()
C.d=new A.bL(0,"ColorSourceType.None")
C.j=new A.bL(1,"ColorSourceType.Solid")
C.h=new A.bL(2,"ColorSourceType.Texture2D")
C.i=new A.bL(3,"ColorSourceType.TextureCube")
C.t=new P.aZ(0)
C.M=new P.aZ(5e6)
C.x=H.d(u([127,2047,65535,1114111]),[P.p])
C.n=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.p])
C.o=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.p])
C.p=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.p])
C.Q=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.p])
C.R=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.q=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.p])
C.y=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.p])
C.S=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.p])
C.z=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.p])
C.P=H.d(u([]),[P.h])
C.T=new H.fe(0,{},C.P,[P.h,P.h])})()
var v={mangledGlobalNames:{p:"int",q:"double",a8:"num",h:"String",ab:"bool",K:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.K},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:P.K,args:[F.ae,P.q,P.q]},{func:1,ret:P.K,args:[F.a6]},{func:1,ret:P.K,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.p,[P.j,E.ao]]},{func:1,ret:P.K,args:[D.A]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aT]},{func:1,ret:-1,args:[W.b1]},{func:1,args:[,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.K,args:[,]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.h,args:[P.p]},{func:1,ret:-1,args:[P.p,[P.j,D.a4]]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.p,[P.j,U.a9]]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:V.Z,args:[P.q]},{func:1,ret:-1,args:[P.p,[P.j,V.al]]},{func:1,ret:P.K,args:[W.o]},{func:1,ret:P.K,args:[P.h,,]},{func:1,ret:P.R,args:[P.p]},{func:1,ret:P.R,args:[,,]},{func:1,args:[,P.h]},{func:1,args:[W.o]},{func:1,ret:P.ab,args:[W.G]},{func:1,ret:W.a2,args:[W.G]},{func:1,args:[P.h]},{func:1,ret:P.K,args:[,],opt:[P.aq]},{func:1,ret:P.K,args:[P.a8]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,ret:[P.D,P.h,P.h],args:[[P.D,P.h,P.h],P.h]},{func:1,ret:-1,args:[W.ba]},{func:1,ret:-1,args:[P.h,P.p]},{func:1,ret:P.ab,args:[[P.j,D.a4]]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.K,args:[P.h]},{func:1,ret:P.K,args:[P.b6]},{func:1,ret:-1,args:[F.bX]},{func:1,ret:[P.aC,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aW=0
$.cb=null
$.kU=null
$.kB=!1
$.lY=null
$.lO=null
$.m3=null
$.jJ=null
$.jR=null
$.kK=null
$.c0=null
$.cY=null
$.cZ=null
$.kC=!1
$.Y=C.k
$.ar=[]
$.l5=null
$.l9=null
$.cs=null
$.le=null
$.lp=null
$.lt=null
$.lr=null
$.ls=null
$.is=null
$.lq=null
$.l8=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ot","m8",function(){return H.lX("_$dart_dartClosure")})
u($,"ou","kN",function(){return H.lX("_$dart_js")})
u($,"oz","m9",function(){return H.b8(H.i2({
toString:function(){return"$receiver$"}}))})
u($,"oA","ma",function(){return H.b8(H.i2({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oB","mb",function(){return H.b8(H.i2(null))})
u($,"oC","mc",function(){return H.b8(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oF","mf",function(){return H.b8(H.i2(void 0))})
u($,"oG","mg",function(){return H.b8(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oE","me",function(){return H.b8(H.lk(null))})
u($,"oD","md",function(){return H.b8(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oI","mi",function(){return H.b8(H.lk(void 0))})
u($,"oH","mh",function(){return H.b8(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oX","kO",function(){return P.nn()})
u($,"oJ","mj",function(){return P.nk()})
u($,"oY","mn",function(){return H.mW(H.c_(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"oZ","mo",function(){return P.n9("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"p_","mp",function(){return P.nJ()})
u($,"oQ","mm",function(){return Z.aB(0)})
u($,"oK","mk",function(){return Z.aB(511)})
u($,"oS","br",function(){return Z.aB(1)})
u($,"oR","bq",function(){return Z.aB(2)})
u($,"oM","bp",function(){return Z.aB(4)})
u($,"oT","bs",function(){return Z.aB(8)})
u($,"oU","bt",function(){return Z.aB(16)})
u($,"oN","d_",function(){return Z.aB(32)})
u($,"oO","d0",function(){return Z.aB(64)})
u($,"oP","ml",function(){return Z.aB(96)})
u($,"oV","c9",function(){return Z.aB(128)})
u($,"oL","bo",function(){return Z.aB(256)})
u($,"os","m7",function(){return new V.fs(1e-9)})
u($,"or","J",function(){return $.m7()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.co,DataView:H.by,ArrayBufferView:H.by,Float32Array:H.cp,Float64Array:H.cp,Int16Array:H.hb,Int32Array:H.hc,Int8Array:H.hd,Uint16Array:H.he,Uint32Array:H.hf,Uint8ClampedArray:H.du,CanvasPixelArray:H.du,Uint8Array:H.cq,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLBaseElement:W.v,HTMLBodyElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLImageElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTableElement:W.v,HTMLTableRowElement:W.v,HTMLTableSectionElement:W.v,HTMLTemplateElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.eV,HTMLAnchorElement:W.eX,HTMLAreaElement:W.eY,Blob:W.bI,HTMLCanvasElement:W.bJ,CDATASection:W.bu,CharacterData:W.bu,Comment:W.bu,ProcessingInstruction:W.bu,Text:W.bu,CSSNumericValue:W.cd,CSSUnitValue:W.cd,CSSPerspective:W.ff,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.ce,MSStyleCSSProperties:W.ce,CSS2Properties:W.ce,CSSImageValue:W.aX,CSSKeywordValue:W.aX,CSSPositionValue:W.aX,CSSResourceValue:W.aX,CSSURLImageValue:W.aX,CSSStyleValue:W.aX,CSSMatrixComponent:W.aY,CSSRotation:W.aY,CSSScale:W.aY,CSSSkew:W.aY,CSSTranslation:W.aY,CSSTransformComponent:W.aY,CSSTransformValue:W.fh,CSSUnparsedValue:W.fi,DataTransferItemList:W.fk,HTMLDivElement:W.da,DOMException:W.fl,ClientRectList:W.db,DOMRectList:W.db,DOMRectReadOnly:W.dc,DOMStringList:W.fm,DOMTokenList:W.fn,Element:W.a2,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.i,Accelerometer:W.i,AccessibleNode:W.i,AmbientLightSensor:W.i,Animation:W.i,ApplicationCache:W.i,DOMApplicationCache:W.i,OfflineResourceList:W.i,BackgroundFetchRegistration:W.i,BatteryManager:W.i,BroadcastChannel:W.i,CanvasCaptureMediaStreamTrack:W.i,DedicatedWorkerGlobalScope:W.i,EventSource:W.i,FileReader:W.i,FontFaceSet:W.i,Gyroscope:W.i,XMLHttpRequest:W.i,XMLHttpRequestEventTarget:W.i,XMLHttpRequestUpload:W.i,LinearAccelerationSensor:W.i,Magnetometer:W.i,MediaDevices:W.i,MediaKeySession:W.i,MediaQueryList:W.i,MediaRecorder:W.i,MediaSource:W.i,MediaStream:W.i,MediaStreamTrack:W.i,MIDIAccess:W.i,MIDIInput:W.i,MIDIOutput:W.i,MIDIPort:W.i,NetworkInformation:W.i,Notification:W.i,OffscreenCanvas:W.i,OrientationSensor:W.i,PaymentRequest:W.i,Performance:W.i,PermissionStatus:W.i,PresentationAvailability:W.i,PresentationConnection:W.i,PresentationConnectionList:W.i,PresentationRequest:W.i,RelativeOrientationSensor:W.i,RemotePlayback:W.i,RTCDataChannel:W.i,DataChannel:W.i,RTCDTMFSender:W.i,RTCPeerConnection:W.i,webkitRTCPeerConnection:W.i,mozRTCPeerConnection:W.i,ScreenOrientation:W.i,Sensor:W.i,ServiceWorker:W.i,ServiceWorkerContainer:W.i,ServiceWorkerGlobalScope:W.i,ServiceWorkerRegistration:W.i,SharedWorker:W.i,SharedWorkerGlobalScope:W.i,SpeechRecognition:W.i,SpeechSynthesis:W.i,SpeechSynthesisUtterance:W.i,VR:W.i,VRDevice:W.i,VRDisplay:W.i,VRSession:W.i,VisualViewport:W.i,WebSocket:W.i,Worker:W.i,WorkerGlobalScope:W.i,WorkerPerformance:W.i,BluetoothDevice:W.i,BluetoothRemoteGATTCharacteristic:W.i,Clipboard:W.i,MojoInterfaceInterceptor:W.i,USB:W.i,IDBDatabase:W.i,IDBOpenDBRequest:W.i,IDBVersionChangeRequest:W.i,IDBRequest:W.i,IDBTransaction:W.i,AnalyserNode:W.i,RealtimeAnalyserNode:W.i,AudioBufferSourceNode:W.i,AudioDestinationNode:W.i,AudioNode:W.i,AudioScheduledSourceNode:W.i,AudioWorkletNode:W.i,BiquadFilterNode:W.i,ChannelMergerNode:W.i,AudioChannelMerger:W.i,ChannelSplitterNode:W.i,AudioChannelSplitter:W.i,ConstantSourceNode:W.i,ConvolverNode:W.i,DelayNode:W.i,DynamicsCompressorNode:W.i,GainNode:W.i,AudioGainNode:W.i,IIRFilterNode:W.i,MediaElementAudioSourceNode:W.i,MediaStreamAudioDestinationNode:W.i,MediaStreamAudioSourceNode:W.i,OscillatorNode:W.i,Oscillator:W.i,PannerNode:W.i,AudioPannerNode:W.i,webkitAudioPannerNode:W.i,ScriptProcessorNode:W.i,JavaScriptAudioNode:W.i,StereoPannerNode:W.i,WaveShaperNode:W.i,EventTarget:W.i,File:W.ay,FileList:W.cg,FileWriter:W.fw,HTMLFormElement:W.fA,Gamepad:W.aI,History:W.fD,HTMLCollection:W.bQ,HTMLFormControlsCollection:W.bQ,HTMLOptionsCollection:W.bQ,ImageData:W.cj,HTMLInputElement:W.ck,KeyboardEvent:W.b1,Location:W.fR,MediaList:W.h4,MessagePort:W.cm,MIDIInputMap:W.h5,MIDIOutputMap:W.h7,MimeType:W.aL,MimeTypeArray:W.h9,PointerEvent:W.ac,MouseEvent:W.ac,DragEvent:W.ac,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cr,RadioNodeList:W.cr,Plugin:W.aM,PluginArray:W.hm,RTCStatsReport:W.hv,HTMLSelectElement:W.hy,SourceBuffer:W.aO,SourceBufferList:W.hH,SpeechGrammar:W.aP,SpeechGrammarList:W.hI,SpeechRecognitionResult:W.aQ,Storage:W.hL,CSSStyleSheet:W.az,StyleSheet:W.az,HTMLTableCellElement:W.bm,HTMLTableDataCellElement:W.bm,HTMLTableHeaderCellElement:W.bm,TextTrack:W.aR,TextTrackCue:W.aA,VTTCue:W.aA,TextTrackCueList:W.hT,TextTrackList:W.hU,TimeRanges:W.hW,Touch:W.aS,TouchEvent:W.aT,TouchList:W.hZ,TrackDefaultList:W.i_,CompositionEvent:W.bB,FocusEvent:W.bB,TextEvent:W.bB,UIEvent:W.bB,URL:W.io,VideoTrackList:W.iE,WheelEvent:W.ba,Window:W.cK,DOMWindow:W.cK,CSSRuleList:W.iP,ClientRect:W.e2,DOMRect:W.e2,GamepadList:W.j2,NamedNodeMap:W.ej,MozNamedAttrMap:W.ej,SpeechRecognitionResultList:W.je,StyleSheetList:W.ji,SVGLength:P.b2,SVGLengthList:P.fK,SVGNumber:P.b5,SVGNumberList:P.hi,SVGPointList:P.ho,SVGStringList:P.hR,SVGAElement:P.t,SVGAnimateElement:P.t,SVGAnimateMotionElement:P.t,SVGAnimateTransformElement:P.t,SVGAnimationElement:P.t,SVGCircleElement:P.t,SVGClipPathElement:P.t,SVGDefsElement:P.t,SVGDescElement:P.t,SVGDiscardElement:P.t,SVGEllipseElement:P.t,SVGFEBlendElement:P.t,SVGFEColorMatrixElement:P.t,SVGFEComponentTransferElement:P.t,SVGFECompositeElement:P.t,SVGFEConvolveMatrixElement:P.t,SVGFEDiffuseLightingElement:P.t,SVGFEDisplacementMapElement:P.t,SVGFEDistantLightElement:P.t,SVGFEFloodElement:P.t,SVGFEFuncAElement:P.t,SVGFEFuncBElement:P.t,SVGFEFuncGElement:P.t,SVGFEFuncRElement:P.t,SVGFEGaussianBlurElement:P.t,SVGFEImageElement:P.t,SVGFEMergeElement:P.t,SVGFEMergeNodeElement:P.t,SVGFEMorphologyElement:P.t,SVGFEOffsetElement:P.t,SVGFEPointLightElement:P.t,SVGFESpecularLightingElement:P.t,SVGFESpotLightElement:P.t,SVGFETileElement:P.t,SVGFETurbulenceElement:P.t,SVGFilterElement:P.t,SVGForeignObjectElement:P.t,SVGGElement:P.t,SVGGeometryElement:P.t,SVGGraphicsElement:P.t,SVGImageElement:P.t,SVGLineElement:P.t,SVGLinearGradientElement:P.t,SVGMarkerElement:P.t,SVGMaskElement:P.t,SVGMetadataElement:P.t,SVGPathElement:P.t,SVGPatternElement:P.t,SVGPolygonElement:P.t,SVGPolylineElement:P.t,SVGRadialGradientElement:P.t,SVGRectElement:P.t,SVGScriptElement:P.t,SVGSetElement:P.t,SVGStopElement:P.t,SVGStyleElement:P.t,SVGElement:P.t,SVGSVGElement:P.t,SVGSwitchElement:P.t,SVGSymbolElement:P.t,SVGTSpanElement:P.t,SVGTextContentElement:P.t,SVGTextElement:P.t,SVGTextPathElement:P.t,SVGTextPositioningElement:P.t,SVGTitleElement:P.t,SVGUseElement:P.t,SVGViewElement:P.t,SVGGradientElement:P.t,SVGComponentTransferFunctionElement:P.t,SVGFEDropShadowElement:P.t,SVGMPathElement:P.t,SVGTransform:P.b7,SVGTransformList:P.i0,AudioBuffer:P.f1,AudioParamMap:P.f2,AudioTrackList:P.f4,AudioContext:P.bH,webkitAudioContext:P.bH,BaseAudioContext:P.bH,OfflineAudioContext:P.hj,WebGLBuffer:P.d3,WebGLProgram:P.dz,WebGL2RenderingContext:P.bW,WebGLShader:P.dD,WebGLUniformLocation:P.dR,SQLResultSetRowList:P.hJ})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.ds.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.dt.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(K.m0,[])
else K.m0([])})})()
//# sourceMappingURL=test.dart.js.map
