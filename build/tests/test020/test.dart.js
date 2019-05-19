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
a[c]=function(){a[c]=function(){H.pe(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.li"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.li"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.li(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kW:function kW(){},
kq:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
h8:function(){return new P.c6("No element")},
ny:function(){return new P.c6("Too many elements")},
nx:function(){return new P.c6("Too few elements")},
v:function v(a){this.a=a},
fP:function fP(){},
c0:function c0(){},
cz:function cz(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hp:function hp(a,b,c){this.a=a
this.b=b
this.$ti=c},
hq:function hq(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hr:function hr(a,b,c){this.a=a
this.b=b
this.$ti=c},
d_:function d_(a,b,c){this.a=a
this.b=b
this.$ti=c},
jh:function jh(a,b,c){this.a=a
this.b=b
this.$ti=c},
bX:function bX(){},
cY:function cY(){},
ec:function ec(){},
no:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
ck:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
oV:function(a){return v.types[H.aj(a)]},
p1:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Z(a).$iL},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.c(H.aL(a))
return u},
cI:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nT:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.h(p,3)
u=H.I(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.G(s,q)|32)>t)return}return parseInt(a,b)},
c2:function(a){return H.nK(a)+H.le(H.bQ(a),0,null)},
nK:function(a){var u,t,s,r,q,p,o,n=J.Z(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibM){r=C.y(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ck(t.length>1&&C.b.G(t,0)===36?C.b.ap(t,1):t)},
nL:function(){if(!!self.location)return self.location.href
return},
lU:function(a){var u,t,s,r,q
H.kw(a)
u=J.aD(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
nU:function(a){var u,t,s,r=H.d([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aL(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.aS(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aL(s))}return H.lU(r)},
lV:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aL(s))
if(s<0)throw H.c(H.aL(s))
if(s>65535)return H.nU(a)}return H.lU(a)},
nV:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c3:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aS(u,10))>>>0,56320|u&1023)}}throw H.c(P.ag(a,0,1114111,null,null))},
c1:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nS:function(a){var u=H.c1(a).getFullYear()+0
return u},
nQ:function(a){var u=H.c1(a).getMonth()+1
return u},
nM:function(a){var u=H.c1(a).getDate()+0
return u},
nN:function(a){var u=H.c1(a).getHours()+0
return u},
nP:function(a){var u=H.c1(a).getMinutes()+0
return u},
nR:function(a){var u=H.c1(a).getSeconds()+0
return u},
nO:function(a){var u=H.c1(a).getMilliseconds()+0
return u},
C:function(a){throw H.c(H.aL(a))},
h:function(a,b){if(a==null)J.aD(a)
throw H.c(H.ce(a,b))},
ce:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aM(!0,b,s,null)
u=H.aj(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,s,null,u)
return P.dV(b,s)},
oN:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c4(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c4(a,c,!0,b,"end",u)
return new P.aM(!0,b,"end",null)},
aL:function(a){return new P.aM(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.dR()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mN})
u.name=""}else u.toString=H.mN
return u},
mN:function(){return J.at(this.dartException)},
t:function(a){throw H.c(a)},
F:function(a){throw H.c(P.bj(a))},
bd:function(a){var u,t,s,r,q,p
a=H.mM(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iG:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
m3:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lQ:function(a,b){return new H.hN(a,b==null?null:b.method)},
kX:function(a,b){var u=b==null,t=u?null:b.method
return new H.hc(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kK(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.aS(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kX(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lQ(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mR()
q=$.mS()
p=$.mT()
o=$.mU()
n=$.mX()
m=$.mY()
l=$.mW()
$.mV()
k=$.n_()
j=$.mZ()
i=r.ae(u)
if(i!=null)return f.$1(H.kX(H.I(u),i))
else{i=q.ae(u)
if(i!=null){i.method="call"
return f.$1(H.kX(H.I(u),i))}else{i=p.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=n.ae(u)
if(i==null){i=m.ae(u)
if(i==null){i=l.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=k.ae(u)
if(i==null){i=j.ae(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lQ(H.I(u),i))}}return f.$1(new H.iT(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e0()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aM(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e0()
return a},
ci:function(a){var u
if(a==null)return new H.eS(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eS(a)},
oR:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
p0:function(a,b,c,d,e,f){H.f(a,"$ibF")
switch(H.aj(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
cd:function(a,b){var u
H.aj(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p0)
a.$identity=u
return u},
nn:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.ij().constructor.prototype):Object.create(new H.cn(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b_
if(typeof t!=="number")return t.q()
$.b_=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lC(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.oV,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lA:H.kO
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lC(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nk:function(a,b,c,d){var u=H.kO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lC:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nm(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nk(t,!r,u,b)
if(t===0){r=$.b_
if(typeof r!=="number")return r.q()
$.b_=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.co
return new Function(r+H.l(q==null?$.co=H.fw("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b_
if(typeof r!=="number")return r.q()
$.b_=r+1
o+=r
r="return function("+o+"){return this."
q=$.co
return new Function(r+H.l(q==null?$.co=H.fw("self"):q)+"."+H.l(u)+"("+o+");}")()},
nl:function(a,b,c,d){var u=H.kO,t=H.lA
switch(b?-1:a){case 0:throw H.c(H.nZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nm:function(a,b){var u,t,s,r,q,p,o,n=$.co
if(n==null)n=$.co=H.fw("self")
u=$.lz
if(u==null)u=$.lz=H.fw("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nl(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.b_
if(typeof u!=="number")return u.q()
$.b_=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.b_
if(typeof u!=="number")return u.q()
$.b_=u+1
return new Function(n+u+"}")()},
li:function(a,b,c,d,e,f,g){return H.nn(a,b,H.aj(c),d,!!e,!!f,g)},
kO:function(a){return a.a},
lA:function(a){return a.c},
fw:function(a){var u,t,s,r=new H.cn("self","target","receiver","name"),q=J.kU(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
D:function(a){if(a==null)H.oH("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aZ(a,"String"))},
oO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aZ(a,"double"))},
p6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aZ(a,"num"))},
lf:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aZ(a,"bool"))},
aj:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aZ(a,"int"))},
mK:function(a,b){throw H.c(H.aZ(a,H.ck(H.I(b).substring(2))))},
p8:function(a,b){throw H.c(H.nj(a,H.ck(H.I(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Z(a)[b])return a
H.mK(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Z(a)[b]
else u=!0
if(u)return a
H.p8(a,b)},
kw:function(a){if(a==null)return a
if(!!J.Z(a).$ib)return a
throw H.c(H.aZ(a,"List<dynamic>"))},
mH:function(a,b){var u
if(a==null)return a
u=J.Z(a)
if(!!u.$ib)return a
if(u[b])return a
H.mK(a,b)},
mD:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.aj(u)]
else return a.$S()}return},
ff:function(a,b){var u
if(typeof a=="function")return!0
u=H.mD(J.Z(a))
if(u==null)return!1
return H.mp(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lb)return a
$.lb=!0
try{if(H.ff(a,b))return a
u=H.kF(b)
t=H.aZ(a,u)
throw H.c(t)}finally{$.lb=!1}},
lk:function(a,b){if(a!=null&&!H.lh(a,b))H.t(H.aZ(a,H.kF(b)))
return a},
aZ:function(a,b){return new H.iH("TypeError: "+P.dy(a)+": type '"+H.mv(a)+"' is not a subtype of type '"+b+"'")},
nj:function(a,b){return new H.fx("CastError: "+P.dy(a)+": type '"+H.mv(a)+"' is not a subtype of type '"+b+"'")},
mv:function(a){var u,t=J.Z(a)
if(!!t.$icp){u=H.mD(t)
if(u!=null)return H.kF(u)
return"Closure"}return H.c2(a)},
oH:function(a){throw H.c(new H.ji(a))},
pe:function(a){throw H.c(new P.fH(H.I(a)))},
nZ:function(a){return new H.i4(a)},
mE:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bQ:function(a){if(a==null)return
return a.$ti},
pW:function(a,b,c){return H.cj(a["$a"+H.l(c)],H.bQ(b))},
bP:function(a,b,c,d){var u
H.I(c)
H.aj(d)
u=H.cj(a["$a"+H.l(c)],H.bQ(b))
return u==null?null:u[d]},
as:function(a,b,c){var u
H.I(b)
H.aj(c)
u=H.cj(a["$a"+H.l(b)],H.bQ(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.aj(b)
u=H.bQ(a)
return u==null?null:u[b]},
kF:function(a){return H.bO(a,null)},
bO:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ck(a[0].name)+H.le(a,1,b)
if(typeof a=="function")return H.ck(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.aj(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.l(b[t])}if('func' in a)return H.oA(a,b)
if('futureOr' in a)return"FutureOr<"+H.bO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oA:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.e]
H.k(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.h(a0,n)
p=C.b.q(p,a0[n])
m=u[q]
if(m!=null&&m!==P.S)p+=" extends "+H.bO(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bO(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bO(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bO(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.oQ(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bO(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
le:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.ah("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bO(p,c)}return"<"+u.i(0)+">"},
cj:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lg:function(a,b,c,d){var u,t
H.I(b)
H.kw(c)
H.I(d)
if(a==null)return!1
u=H.bQ(a)
t=J.Z(a)
if(t[b]==null)return!1
return H.my(H.cj(t[d],u),null,c,null)},
k:function(a,b,c,d){H.I(b)
H.kw(c)
H.I(d)
if(a==null)return a
if(H.lg(a,b,c,d))return a
throw H.c(H.aZ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ck(b.substring(2))+H.le(c,0,null),v.mangledGlobalNames)))},
my:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aK(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aK(a[t],b,c[t],d))return!1
return!0},
pU:function(a,b,c){return a.apply(b,H.cj(J.Z(b)["$a"+H.l(c)],H.bQ(b)))},
mG:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="S"||a.name==="N"||a===-1||a===-2||H.mG(u)}return!1},
lh:function(a,b){var u,t
if(a==null)return b==null||b.name==="S"||b.name==="N"||b===-1||b===-2||H.mG(b)
if(b==null||b===-1||b.name==="S"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lh(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ff(a,b)}u=J.Z(a).constructor
t=H.bQ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aK(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.lh(a,b))throw H.c(H.aZ(a,H.kF(b)))
return a},
aK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="S"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="S"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aK(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.mp(a,b,c,d)
if('func' in a)return c.name==="bF"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aK("type" in a?a.type:l,b,s,d)
else if(H.aK(a,b,s,d))return!0
else{if(!('$i'+"cv" in t.prototype))return!1
r=t.prototype["$a"+"cv"]
q=H.cj(r,u?a.slice(1):l)
return H.aK(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.my(H.cj(m,u),b,p,d)},
mp:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aK(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aK(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aK(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aK(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.p5(h,b,g,d)},
p5:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aK(c[s],d,a[s],b))return!1}return!0},
pV:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
p3:function(a){var u,t,s,r,q=H.I($.mF.$1(a)),p=$.kp[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ku[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.mx.$2(a,q))
if(q!=null){p=$.kp[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ku[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kE(u)
$.kp[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ku[q]=u
return u}if(s==="-"){r=H.kE(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mJ(a,u)
if(s==="*")throw H.c(P.iS(q))
if(v.leafTags[q]===true){r=H.kE(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mJ(a,u)},
mJ:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lm(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kE:function(a){return J.lm(a,!1,null,!!a.$iL)},
p4:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kE(u)
else return J.lm(u,c,null,null)},
oZ:function(){if(!0===$.ll)return
$.ll=!0
H.p_()},
p_:function(){var u,t,s,r,q,p,o,n
$.kp=Object.create(null)
$.ku=Object.create(null)
H.oY()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mL.$1(q)
if(p!=null){o=H.p4(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oY:function(){var u,t,s,r,q,p,o=C.K()
o=H.cc(C.L,H.cc(C.M,H.cc(C.z,H.cc(C.z,H.cc(C.N,H.cc(C.O,H.cc(C.P(C.y),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mF=new H.kr(r)
$.mx=new H.ks(q)
$.mL=new H.kt(p)},
cc:function(a,b){return a(b)||b},
nA:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pc:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oP:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mM:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lo:function(a,b,c){var u=H.pd(a,b,c)
return u},
pd:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mM(b),'g'),H.oP(c))},
fB:function fB(){},
fC:function fC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iF:function iF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hN:function hN(a,b){this.a=a
this.b=b},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a){this.a=a},
kK:function kK(a){this.a=a},
eS:function eS(a){this.a=a
this.b=null},
cp:function cp(){},
iu:function iu(){},
ij:function ij(){},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iH:function iH(a){this.a=a},
fx:function fx(a){this.a=a},
i4:function i4(a){this.a=a},
ji:function ji(a){this.a=a},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hg:function hg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hh:function hh(a,b){this.a=a
this.$ti=b},
hi:function hi(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kr:function kr(a){this.a=a},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
hb:function hb(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ca:function(a){return a},
nI:function(a){return new Int8Array(a)},
bh:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ce(b,a))},
oy:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oN(a,b,c))
return b},
cD:function cD(){},
bI:function bI(){},
dN:function dN(){},
cE:function cE(){},
dO:function dO(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
dP:function dP(){},
cF:function cF(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
oQ:function(a){return J.lI(a?Object.keys(a):[],null)},
p7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lm:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fh:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ll==null){H.oZ()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iS("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lq()]
if(r!=null)return r
r=H.p3(a)
if(r!=null)return r
if(typeof a=="function")return C.W
u=Object.getPrototypeOf(a)
if(u==null)return C.F
if(u===Object.prototype)return C.F
if(typeof s=="function"){Object.defineProperty(s,$.lq(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
nz:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kN(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ag(a,0,4294967295,"length",null))
return J.lI(new Array(a),b)},
lI:function(a,b){return J.kU(H.d(a,[b]))},
kU:function(a){H.kw(a)
a.fixed$length=Array
return a},
Z:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dA.prototype
return J.ha.prototype}if(typeof a=="string")return J.bl.prototype
if(a==null)return J.dB.prototype
if(typeof a=="boolean")return J.h9.prototype
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.S)return a
return J.fh(a)},
oS:function(a){if(typeof a=="number")return J.bH.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.S)return a
return J.fh(a)},
cg:function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.S)return a
return J.fh(a)},
fg:function(a){if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.S)return a
return J.fh(a)},
oT:function(a){if(typeof a=="number")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bM.prototype
return a},
oU:function(a){if(typeof a=="number")return J.bH.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bM.prototype
return a},
dh:function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bM.prototype
return a},
ch:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.S)return a
return J.fh(a)},
n8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.oS(a).q(a,b)},
V:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Z(a).v(a,b)},
ls:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.oU(a).u(a,b)},
n9:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.oT(a).t(a,b)},
lt:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.p1(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cg(a).j(a,b)},
kM:function(a,b,c){return J.fg(a).n(a,b,c)},
na:function(a,b){return J.dh(a).G(a,b)},
nb:function(a,b,c){return J.ch(a).i0(a,b,c)},
nc:function(a,b,c,d){return J.ch(a).iU(a,b,c,d)},
nd:function(a,b){return J.dh(a).a_(a,b)},
fj:function(a,b){return J.fg(a).L(a,b)},
ne:function(a,b,c,d){return J.ch(a).ji(a,b,c,d)},
lu:function(a,b){return J.fg(a).N(a,b)},
nf:function(a){return J.ch(a).gj1(a)},
lv:function(a){return J.ch(a).gcu(a)},
dk:function(a){return J.Z(a).gK(a)},
by:function(a){return J.fg(a).gV(a)},
aD:function(a){return J.cg(a).gl(a)},
lw:function(a){return J.fg(a).jN(a)},
ng:function(a,b){return J.ch(a).jR(a,b)},
nh:function(a,b,c){return J.dh(a).C(a,b,c)},
ni:function(a){return J.dh(a).jZ(a)},
at:function(a){return J.Z(a).i(a)},
a:function a(){},
h9:function h9(){},
dB:function dB(){},
dC:function dC(){},
hR:function hR(){},
bM:function bM(){},
bm:function bm(){},
aP:function aP(a){this.$ti=a},
kV:function kV(a){this.$ti=a},
ax:function ax(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bH:function bH(){},
dA:function dA(){},
ha:function ha(){},
bl:function bl(){}},P={
oa:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oI()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cd(new P.jk(s),1)).observe(u,{childList:true})
return new P.jj(s,u,t)}else if(self.setImmediate!=null)return P.oJ()
return P.oK()},
ob:function(a){self.scheduleImmediate(H.cd(new P.jl(H.n(a,{func:1,ret:-1})),0))},
oc:function(a){self.setImmediate(H.cd(new P.jm(H.n(a,{func:1,ret:-1})),0))},
od:function(a){P.l2(C.t,H.n(a,{func:1,ret:-1}))},
l2:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a5(a.a,1000)
return P.oj(u<0?0:u,b)},
m2:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bb]})
u=C.f.a5(a.a,1000)
return P.ok(u<0?0:u,b)},
oj:function(a,b){var u=new P.eY()
u.fp(a,b)
return u},
ok:function(a,b){var u=new P.eY()
u.fq(a,b)
return u},
oe:function(a,b){var u,t,s
b.a=1
try{a.eL(new P.jw(b),new P.jx(b),null)}catch(s){u=H.ak(s)
t=H.ci(s)
P.p9(new P.jy(b,u,t))}},
me:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaJ")
if(u>=4){t=b.cc()
b.a=a.a
b.c=a.c
P.d2(b,t)}else{t=H.f(b.c,"$ibg")
b.a=2
b.c=a
a.dB(t)}},
d2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iam")
g=g.b
r=s.a
q=s.b
g.toString
P.kg(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.d2(h.a,b)}g=h.a
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
if(m){H.f(o,"$iam")
g=g.b
r=o.a
q=o.b
g.toString
P.kg(i,i,g,r,q)
return}l=$.a2
if(l!=n)$.a2=n
else l=i
g=b.c
if(g===8)new P.jC(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jB(u,b,o).$0()}else if((g&2)!==0)new P.jA(h,u,b).$0()
if(l!=null)$.a2=l
g=u.b
if(!!J.Z(g).$icv){if(g.a>=4){k=H.f(q.c,"$ibg")
q.c=null
b=q.bm(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.me(g,q)
return}}j=b.b
k=H.f(j.c,"$ibg")
j.c=null
b=j.bm(k)
g=u.a
r=u.b
if(!g){H.A(r,H.u(j,0))
j.a=4
j.c=r}else{H.f(r,"$iam")
j.a=8
j.c=r}h.a=j
g=j}},
oD:function(a,b){if(H.ff(a,{func:1,args:[P.S,P.av]}))return H.n(a,{func:1,ret:null,args:[P.S,P.av]})
if(H.ff(a,{func:1,args:[P.S]}))return H.n(a,{func:1,ret:null,args:[P.S]})
throw H.c(P.kN(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oC:function(){var u,t
for(;u=$.cb,u!=null;){$.dg=null
t=u.b
$.cb=t
if(t==null)$.df=null
u.a.$0()}},
oG:function(){$.lc=!0
try{P.oC()}finally{$.dg=null
$.lc=!1
if($.cb!=null)$.lr().$1(P.mz())}},
mu:function(a){var u=new P.ek(H.n(a,{func:1,ret:-1}))
if($.cb==null){$.cb=$.df=u
if(!$.lc)$.lr().$1(P.mz())}else $.df=$.df.b=u},
oF:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cb
if(u==null){P.mu(a)
$.dg=$.df
return}t=new P.ek(a)
s=$.dg
if(s==null){t.b=u
$.cb=$.dg=t}else{t.b=s.b
$.dg=s.b=t
if(t.b==null)$.df=t}},
p9:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a2
if(C.k===u){P.ki(t,t,C.k,a)
return}u.toString
P.ki(t,t,u,H.n(u.cp(a),s))},
m1:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a2
if(u===C.k){u.toString
return P.l2(a,b)}return P.l2(a,H.n(u.cp(b),t))},
o2:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bb]}
H.n(b,s)
u=$.a2
if(u===C.k){u.toString
return P.m2(a,b)}t=u.dP(b,P.bb)
$.a2.toString
return P.m2(a,H.n(t,s))},
kg:function(a,b,c,d,e){var u={}
u.a=d
P.oF(new P.kh(u,e))},
mq:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a2
if(t===c)return d.$0()
$.a2=c
u=t
try{t=d.$0()
return t}finally{$.a2=u}},
mr:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.a2
if(t===c)return d.$1(e)
$.a2=c
u=t
try{t=d.$1(e)
return t}finally{$.a2=u}},
oE:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.a2
if(t===c)return d.$2(e,f)
$.a2=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a2=u}},
ki:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cp(d):c.j2(d,-1)
P.mu(d)},
jk:function jk(a){this.a=a},
jj:function jj(a,b,c){this.a=a
this.b=b
this.c=c},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
eY:function eY(){this.c=0},
k0:function k0(a,b){this.a=a
this.b=b},
k_:function k_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bg:function bg(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aJ:function aJ(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jv:function jv(a,b){this.a=a
this.b=b},
jz:function jz(a,b){this.a=a
this.b=b},
jw:function jw(a){this.a=a},
jx:function jx(a){this.a=a},
jy:function jy(a,b,c){this.a=a
this.b=b
this.c=c},
jC:function jC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jD:function jD(a){this.a=a},
jB:function jB(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a){this.a=a
this.b=null},
im:function im(){},
ip:function ip(a,b){this.a=a
this.b=b},
iq:function iq(a,b){this.a=a
this.b=b},
cM:function cM(){},
io:function io(){},
bb:function bb(){},
am:function am(a,b){this.a=a
this.b=b},
k9:function k9(){},
kh:function kh(a,b){this.a=a
this.b=b},
jJ:function jJ(){},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
jK:function jK(a,b){this.a=a
this.b=b},
jM:function jM(a,b,c){this.a=a
this.b=b
this.c=c},
nC:function(a,b){return new H.aQ([a,b])},
kY:function(a,b){return new H.aQ([a,b])},
nE:function(a){return H.oR(a,new H.aQ([null,null]))},
dF:function(a){return new P.jH([a])},
l8:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oi:function(a,b,c){var u=new P.ez(a,b,[c])
u.c=a.e
return u},
nw:function(a,b,c){var u,t
if(P.ld(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
C.a.h($.aw,a)
try{P.oB(a,u)}finally{if(0>=$.aw.length)return H.h($.aw,-1)
$.aw.pop()}t=P.m_(b,H.mH(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
kT:function(a,b,c){var u,t
if(P.ld(a))return b+"..."+c
u=new P.ah(b)
C.a.h($.aw,a)
try{t=u
t.a=P.m_(t.a,a,", ")}finally{if(0>=$.aw.length)return H.h($.aw,-1)
$.aw.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ld:function(a){var u,t
for(u=$.aw.length,t=0;t<u;++t)if(a===$.aw[t])return!0
return!1},
oB:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.e],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.E())return
r=H.l(u.gM(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.E()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gM(u);++s
if(!u.E()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM(u);++s
for(;u.E();o=n,n=m){m=u.gM(u);++s
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
nD:function(a,b,c){var u=P.nC(b,c)
a.N(0,new P.hj(u,b,c))
return u},
lJ:function(a,b){var u,t,s=P.dF(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t)s.h(0,H.A(a[t],b))
return s},
kZ:function(a){var u,t={}
if(P.ld(a))return"{...}"
u=new P.ah("")
try{C.a.h($.aw,a)
u.a+="{"
t.a=!0
J.lu(a,new P.hn(t,u))
u.a+="}"}finally{if(0>=$.aw.length)return H.h($.aw,-1)
$.aw.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jH:function jH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c8:function c8(a){this.a=a
this.c=this.b=null},
ez:function ez(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(){},
z:function z(){},
hm:function hm(){},
hn:function hn(a,b){this.a=a
this.b=b},
ae:function ae(){},
k1:function k1(){},
ho:function ho(){},
ed:function ed(a,b){this.a=a
this.$ti=b},
jO:function jO(){},
eA:function eA(){},
f2:function f2(){},
o5:function(a,b,c,d){H.k(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.o6(!1,b,c,d)
return},
o6:function(a,b,c,d){var u,t,s=$.n0()
if(s==null)return
u=0===c
if(u&&!0)return P.l5(s,b)
t=b.length
d=P.bq(c,d,t)
if(u&&d===t)return P.l5(s,b)
return P.l5(s,b.subarray(c,d))},
l5:function(a,b){if(P.o8(b))return
return P.o9(a,b)},
o9:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
o8:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
o7:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
mt:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.p],"$ab")
for(u=J.cg(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bN()
if((s&127)!==s)return t-b}return c-b},
ly:function(a,b,c,d,e,f){if(C.f.bg(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
ft:function ft(){},
fu:function fu(){},
bU:function bU(){},
bC:function bC(){},
fR:function fR(){},
h6:function h6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h5:function h5(a){this.a=a},
j0:function j0(){},
j2:function j2(){},
k7:function k7(a){this.b=0
this.c=a},
j1:function j1(a){this.a=a},
k6:function k6(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fi:function(a,b,c){var u
H.n(b,{func:1,ret:P.p,args:[P.e]})
u=H.nT(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nt:function(a){if(a instanceof H.cp)return a.i(0)
return"Instance of '"+H.c2(a)+"'"},
nF:function(a,b,c){var u,t
H.A(b,c)
u=J.nz(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[c],"$ab")},
lK:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.by(a);u.E();)C.a.h(s,H.A(u.gM(u),c))
if(b)return s
return H.k(J.kU(s),"$ib",t,"$ab")},
cN:function(a,b,c){var u,t=P.p
H.k(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaP",[t],"$aaP")
u=a.length
c=P.bq(b,c,u)
return H.lV(b>0||c<u?C.a.eZ(a,b,c):a)}if(!!J.Z(a).$icF)return H.nV(a,b,P.bq(b,c,a.length))
return P.o0(a,b,c)},
o0:function(a,b,c){var u,t,s,r,q=null
H.k(a,"$ii",[P.p],"$ai")
if(b<0)throw H.c(P.ag(b,0,J.aD(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ag(c,b,J.aD(a),q,q))
t=J.by(a)
for(s=0;s<b;++s)if(!t.E())throw H.c(P.ag(b,0,s,q,q))
r=[]
if(u)for(;t.E();)r.push(t.gM(t))
else for(s=b;s<c;++s){if(!t.E())throw H.c(P.ag(c,b,s,q,q))
r.push(t.gM(t))}return H.lV(r)},
nX:function(a){return new H.hb(a,H.nA(a,!1,!0,!1))},
m_:function(a,b,c){var u=J.by(b)
if(!u.E())return a
if(c.length===0){do a+=H.l(u.gM(u))
while(u.E())}else{a+=H.l(u.gM(u))
for(;u.E();)a=a+c+H.l(u.gM(u))}return a},
m5:function(){var u=H.nL()
if(u!=null)return P.o4(u)
throw H.c(P.J("'Uri.base' is not supported"))},
f3:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.k(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.n6().b
if(typeof b!=="string")H.t(H.aL(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.as(c,"bU",0))
t=c.gjh().cv(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c3(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
np:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nq:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
du:function(a){if(a>=10)return""+a
return"0"+a},
lE:function(a,b){return new P.b2(1e6*b+1000*a)},
dy:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nt(a)},
fm:function(a){return new P.aM(!1,null,null,a)},
kN:function(a,b,c){return new P.aM(!0,a,b,c)},
dV:function(a,b){return new P.c4(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.c4(b,c,!0,a,d,"Invalid value")},
bq:function(a,b,c){if(0>a||a>c)throw H.c(P.ag(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ag(b,a,c,"end",null))
return b}return c},
l_:function(a,b){if(typeof a!=="number")return a.X()
if(a<0)throw H.c(P.ag(a,0,null,b,null))},
a0:function(a,b,c,d,e){var u=H.aj(e==null?J.aD(b):e)
return new P.h7(u,!0,a,c,"Index out of range")},
J:function(a){return new P.iU(a)},
iS:function(a){return new P.iR(a)},
lZ:function(a){return new P.c6(a)},
bj:function(a){return new P.fA(a)},
w:function(a){return new P.es(a)},
a7:function(a,b,c){return new P.h0(a,b,c)},
nG:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.p]})
u=H.d([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
ln:function(a){H.p7(a)},
o4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.G(a,4)^58)*3|C.b.G(a,0)^100|C.b.G(a,1)^97|C.b.G(a,2)^116|C.b.G(a,3)^97)>>>0
if(u===0)return P.m4(e<e?C.b.C(a,0,e):a,5,f).geR()
else if(u===32)return P.m4(C.b.C(a,5,e),0,f).geR()}t=new Array(8)
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
if(P.ms(a,0,e,0,s)>=14)C.a.n(s,7,e)
r=s[1]
if(typeof r!=="number")return r.k8()
if(r>=0)if(P.ms(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.q()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.X()
if(typeof n!=="number")return H.C(n)
if(m<n)n=m
if(typeof o!=="number")return o.X()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.X()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.X()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.aa(a,"..",o)))j=n>o+2&&C.b.aa(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.aa(a,"file",0)){if(q<=0){if(!C.b.aa(a,"/",o)){i="file:///"
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
a=C.b.aX(a,o,n,"/");++e
n=h}k="file"}else if(C.b.aa(a,"http",0)){if(t&&p+3===o&&C.b.aa(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aX(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.aa(a,"https",0)){if(t&&p+4===o&&C.b.aa(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aX(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.C(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jR(a,r,q,p,o,n,m,k)}return P.ol(a,0,e,r,q,p,o,n,m,k)},
m7:function(a){var u=P.e
return C.a.jm(H.d(a.split("&"),[u]),P.kY(u,u),new P.iZ(C.l),[P.H,P.e,P.e])},
o3:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iW(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a_(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fi(C.b.C(a,s,t),n,n)
if(typeof p!=="number")return p.eW()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.h(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fi(C.b.C(a,s,c),n,n)
if(typeof p!=="number")return p.eW()
if(p>255)k.$2(l,s)
if(r>=u)return H.h(j,r)
j[r]=p
return j},
m6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.iX(a)
t=new P.iY(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a_(a,r)
if(n===58){if(r===b){++r
if(C.b.a_(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaw(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.o3(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.f.aS(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
ol:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.os(a,b,d)
else{if(d===b)P.dc(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.ot(a,u,e-1):""
s=P.op(a,e,f,!1)
if(typeof f!=="number")return f.q()
r=f+1
if(typeof g!=="number")return H.C(g)
q=r<g?P.or(P.fi(C.b.C(a,r,g),new P.k2(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oq(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.X()
o=h<i?P.l9(a,h+1,i,n):n
return new P.c9(j,t,s,q,p,o,i<c?P.oo(a,i+1,c):n)},
mi:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dc:function(a,b,c){throw H.c(P.a7(c,a,b))},
or:function(a,b){if(a!=null&&a===P.mi(b))return
return a},
op:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a_(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.a_(a,u)!==93)P.dc(a,b,"Missing end `]` to match `[` in host")
P.m6(a,b+1,u)
return C.b.C(a,b,c).toLowerCase()}if(typeof c!=="number")return H.C(c)
t=b
for(;t<c;++t)if(C.b.a_(a,t)===58){P.m6(a,b,c)
return"["+a+"]"}return P.ov(a,b,c)},
ov:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.C(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a_(a,u)
if(q===37){p=P.mo(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ah("")
n=C.b.C(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.C(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ah("")
if(t<u){s.a+=C.b.C(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.n,o)
o=(C.n[o]&1<<(q&15))!==0}else o=!1
if(o)P.dc(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a_(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ah("")
n=C.b.C(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mj(q)
u+=l
t=u}}}}if(s==null)return C.b.C(a,b,c)
if(t<c){n=C.b.C(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
os:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.ml(C.b.G(a,b)))P.dc(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.p,r)
r=(C.p[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dc(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.C(a,b,c)
return P.om(t?a.toLowerCase():a)},
om:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ot:function(a,b,c){return P.dd(a,b,c,C.Z,!1)},
oq:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dd(a,b,c,C.E,!0):C.m.kb(d,new P.k3(),P.e).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a4(u,"/"))u="/"+u
return P.ou(u,e,f)},
ou:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a4(a,"/"))return P.ow(a,!u||c)
return P.ox(a)},
l9:function(a,b,c,d){var u,t={}
H.k(d,"$iH",[P.e,null],"$aH")
if(a!=null){if(d!=null)throw H.c(P.fm("Both query and queryParameters specified"))
return P.dd(a,b,c,C.o,!0)}if(d==null)return
u=new P.ah("")
t.a=""
d.N(0,new P.k4(new P.k5(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oo:function(a,b,c){return P.dd(a,b,c,C.o,!0)},
mo:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a_(a,b+1)
t=C.b.a_(a,p)
s=H.kq(u)
r=H.kq(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.f.aS(q,4)
if(p>=8)return H.h(C.q,p)
p=(C.q[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c3(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.C(a,b,b+3).toUpperCase()
return},
mj:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.p])
C.a.n(t,0,37)
C.a.n(t,1,C.b.G(o,a>>>4))
C.a.n(t,2,C.b.G(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.p])
for(q=0;--r,r>=0;s=128){p=C.f.ie(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.G(o,p>>>4))
C.a.n(t,q+2,C.b.G(o,p&15))
q+=3}}return P.cN(t,0,null)},
dd:function(a,b,c,d,e){var u=P.mn(a,b,c,H.k(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.C(a,b,c):u},
mn:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.X()
if(typeof c!=="number")return H.C(c)
if(!(t<c))break
c$0:{q=C.b.a_(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mo(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dc(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a_(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mj(q)}}if(r==null)r=new P.ah("")
r.a+=C.b.C(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.C(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.X()
if(s<c)r.a+=C.b.C(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mm:function(a){if(C.b.a4(a,"."))return!0
return C.b.ek(a,"/.")!==-1},
ox:function(a){var u,t,s,r,q,p,o
if(!P.mm(a))return a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.V(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
ow:function(a,b){var u,t,s,r,q,p
if(!P.mm(a))return!b?P.mk(a):a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaw(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaw(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.mk(u[0]))}return C.a.m(u,"/")},
mk:function(a){var u,t,s,r=a.length
if(r>=2&&P.ml(J.na(a,0)))for(u=1;u<r;++u){t=C.b.G(a,u)
if(t===58)return C.b.C(a,0,u)+"%3A"+C.b.ap(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.h(C.p,s)
s=(C.p[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
on:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.fm("Invalid URL encoding"))}}return u},
la:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.G(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.C(a,b,c)
else r=new H.v(C.b.C(a,b,c))}else{r=H.d([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.b.G(a,q)
if(t>127)throw H.c(P.fm("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.fm("Truncated URI"))
C.a.h(r,P.on(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.k(r,"$ib",[P.p],"$ab")
return new P.j1(!1).cv(r)},
ml:function(a){var u=a|32
return 97<=u&&u<=122},
m4:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a7(m,a,t))}}if(s<0&&t>b)throw H.c(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaw(l)
if(r!==44||t!==p+7||!C.b.aa(a,"base64",p+1))throw H.c(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.J.jx(0,a,o,u)
else{n=P.mn(a,o,u,C.o,!0)
if(n!=null)a=C.b.aX(a,o,u,n)}return new P.iV(a,l,c)},
oz:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nG(22,new P.kd(),P.T),n=new P.kc(o),m=new P.ke(),l=new P.kf(),k=H.f(n.$2(0,225),"$iT")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iT")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iT")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iT")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iT")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iT")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iT")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iT")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iT")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iT"),"]",5)
k=H.f(n.$2(9,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iT")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iT")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iT"),"az",21)
k=H.f(n.$2(21,245),"$iT")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
ms:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.p],"$ab")
u=$.n7()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.b.G(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
U:function U(){},
ay:function ay(a,b){this.a=a
this.b=b},
r:function r(){},
b2:function b2(a){this.a=a},
fN:function fN(){},
fO:function fO(){},
bE:function bE(){},
fn:function fn(){},
dR:function dR(){},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c4:function c4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h7:function h7(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iU:function iU(a){this.a=a},
iR:function iR(a){this.a=a},
c6:function c6(a){this.a=a},
fA:function fA(a){this.a=a},
hQ:function hQ(){},
e0:function e0(){},
fH:function fH(a){this.a=a},
es:function es(a){this.a=a},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(){},
p:function p(){},
i:function i(){},
b3:function b3(){},
b:function b(){},
H:function H(){},
N:function N(){},
ab:function ab(){},
S:function S(){},
av:function av(){},
e:function e(){},
ah:function ah(a){this.a=a},
iZ:function iZ(a){this.a=a},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
iY:function iY(a,b){this.a=a
this.b=b},
c9:function c9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
k2:function k2(a,b){this.a=a
this.b=b},
k3:function k3(){},
k5:function k5(a,b){this.a=a
this.b=b},
k4:function k4(a){this.a=a},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
kd:function kd(){},
kc:function kc(a){this.a=a},
ke:function ke(){},
kf:function kf(){},
jR:function jR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jq:function jq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
br:function(a){var u,t,s,r,q
if(a==null)return
u=P.kY(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
oL:function(a){var u={}
a.N(0,new P.kj(u))
return u},
jT:function jT(){},
jV:function jV(a,b){this.a=a
this.b=b},
kj:function kj(a){this.a=a},
jU:function jU(a,b){this.a=a
this.b=b},
fX:function fX(a,b){this.a=a
this.b=b},
fY:function fY(){},
fZ:function fZ(){},
jG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oh:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jI:function jI(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
he:function he(){},
b8:function b8(){},
hO:function hO(){},
hV:function hV(){},
cJ:function cJ(){},
ir:function ir(){},
q:function q(){},
bc:function bc(){},
iE:function iE(){},
ex:function ex(){},
ey:function ey(){},
eI:function eI(){},
eJ:function eJ(){},
eU:function eU(){},
eV:function eV(){},
f0:function f0(){},
f1:function f1(){},
T:function T(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(a){this.a=a},
fs:function fs(){},
bR:function bR(){},
hP:function hP(){},
el:function el(){},
dn:function dn(){},
dU:function dU(){},
c5:function c5(){},
dY:function dY(){},
eb:function eb(){},
ii:function ii(){},
eQ:function eQ(){},
eR:function eR(){}},W={
lx:function(){var u=document.createElement("a")
return u},
lB:function(){var u=document.createElement("canvas")
return u},
nr:function(a,b,c){var u=document.body,t=(u&&C.x).ad(u,a,b,c)
t.toString
u=W.E
u=new H.d_(new W.ar(t),H.n(new W.fQ(),{func:1,ret:P.U,args:[u]}),[u])
return H.f(u.gaK(u),"$iW")},
ns:function(a){H.f(a,"$ij")
return"wheel"},
cs:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ch(a)
t=u.geI(a)
if(typeof t==="string")r=u.geI(a)}catch(s){H.ak(s)}return r},
nv:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icy")
try{s.type=a}catch(u){H.ak(u)}return s},
jF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mg:function(a,b,c,d){var u=W.jF(W.jF(W.jF(W.jF(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ad:function(a,b,c,d,e){var u=W.mw(new W.ju(c),W.o)
if(u!=null&&!0)J.nc(a,b,u,!1)
return new W.jt(a,b,u,!1,[e])},
mf:function(a){var u=W.lx(),t=window.location
u=new W.bN(new W.jN(u,t))
u.fd(a)
return u},
of:function(a,b,c,d){H.f(a,"$iW")
H.I(b)
H.I(c)
H.f(d,"$ibN")
return!0},
og:function(a,b,c,d){var u,t,s
H.f(a,"$iW")
H.I(b)
H.I(c)
u=H.f(d,"$ibN").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mh:function(){var u=P.e,t=P.lJ(C.u,u),s=H.u(C.u,0),r=H.n(new W.jZ(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.jY(t,P.dF(u),P.dF(u),P.dF(u),null)
t.fo(null,new H.hr(C.u,r,[s,u]),q,null)
return t},
mw:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a2
if(u===C.k)return a
return u.dP(a,b)},
x:function x(){},
fk:function fk(){},
dl:function dl(){},
fl:function fl(){},
cm:function cm(){},
bS:function bS(){},
bz:function bz(){},
bT:function bT(){},
bA:function bA(){},
cq:function cq(){},
fD:function fD(){},
a_:function a_(){},
cr:function cr(){},
fE:function fE(){},
b0:function b0(){},
b1:function b1(){},
fF:function fF(){},
fG:function fG(){},
fJ:function fJ(){},
aE:function aE(){},
fK:function fK(){},
dv:function dv(){},
dw:function dw(){},
fL:function fL(){},
fM:function fM(){},
jo:function jo(a,b){this.a=a
this.b=b},
W:function W(){},
fQ:function fQ(){},
o:function o(){},
j:function j(){},
aF:function aF(){},
cu:function cu(){},
fW:function fW(){},
h_:function h_(){},
aO:function aO(){},
h4:function h4(){},
bY:function bY(){},
cx:function cx(){},
cy:function cy(){},
b4:function b4(){},
dG:function dG(){},
hy:function hy(){},
cB:function cB(){},
hz:function hz(){},
hA:function hA(a){this.a=a},
hB:function hB(){},
hC:function hC(a){this.a=a},
aR:function aR(){},
hD:function hD(){},
af:function af(){},
ar:function ar(a){this.a=a},
E:function E(){},
cG:function cG(){},
aS:function aS(){},
hT:function hT(){},
i2:function i2(){},
i3:function i3(a){this.a=a},
i5:function i5(){},
aT:function aT(){},
ig:function ig(){},
aU:function aU(){},
ih:function ih(){},
aV:function aV(){},
ik:function ik(){},
il:function il(a){this.a=a},
aG:function aG(){},
ba:function ba(){},
e1:function e1(){},
is:function is(){},
it:function it(){},
cO:function cO(){},
aW:function aW(){},
aH:function aH(){},
iv:function iv(){},
iw:function iw(){},
iy:function iy(){},
aX:function aX(){},
aY:function aY(){},
iC:function iC(){},
iD:function iD(){},
bL:function bL(){},
j_:function j_(){},
jf:function jf(){},
bf:function bf(){},
d0:function d0(){},
d1:function d1(){},
jp:function jp(){},
en:function en(){},
jE:function jE(){},
eF:function eF(){},
jS:function jS(){},
jW:function jW(){},
jn:function jn(){},
jr:function jr(a){this.a=a},
js:function js(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
l7:function l7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jt:function jt(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ju:function ju(a){this.a=a},
bN:function bN(a){this.a=a},
G:function G(){},
dQ:function dQ(a){this.a=a},
hL:function hL(a){this.a=a},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(){},
jP:function jP(){},
jQ:function jQ(){},
jY:function jY(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jZ:function jZ(){},
jX:function jX(){},
dz:function dz(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aB:function aB(){},
jN:function jN(a,b){this.a=a
this.b=b},
f4:function f4(a){this.a=a},
k8:function k8(a){this.a=a},
em:function em(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eG:function eG(){},
eH:function eH(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
d8:function d8(){},
d9:function d9(){},
eO:function eO(){},
eP:function eP(){},
eT:function eT(){},
eW:function eW(){},
eX:function eX(){},
da:function da(){},
db:function db(){},
eZ:function eZ(){},
f_:function f_(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){}},O={
kP:function(a){var u=new O.a6([a])
u.bS(a)
return u},
a6:function a6(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cA:function cA(){this.b=this.a=null},
dJ:function dJ(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ht:function ht(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dK:function dK(){},
hu:function hu(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b6:function b6(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hw:function hw(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hx:function hx(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c7:function c7(){}},E={
lH:function(){var u=new E.an()
u.a=""
u.b=!0
u.sfc(0,O.kP(E.an))
u.y.bh(u.gjy(),u.gjB())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sai(0,null)
u.sb9(null)
return u},
nY:function(a,b){var u=new E.hZ(a)
u.f7(a,b)
return u},
o1:function(a,b,c,d,e){var u,t,s=J.Z(a)
if(!!s.$ibT)return E.m0(a,!0,!0,!0,!1)
u=W.lB()
t=u.style
t.width="100%"
t.height="100%"
s.gcu(a).h(0,u)
return E.m0(u,!0,!0,!0,!1)},
m0:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.e7(),j=H.f(C.r.eV(a,"webgl2",P.nE(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic5")
if(j==null)H.t(P.w("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.nY(j,a)
H.aj(j.getParameter(3379))
H.aj(j.getParameter(34076))
u=new X.ee(a)
t=new X.hd()
t.c=new X.aA(!1,!1,!1)
t.shV(P.dF(P.p))
u.b=t
t=new X.hE(u)
t.f=0
t.r=V.bK()
t.x=V.bK()
t.ch=t.Q=1
u.c=t
t=new X.hl(u)
t.r=0
t.x=V.bK()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iB(u)
t.f=V.bK()
t.r=V.bK()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfN(H.d([],[[P.cM,P.S]]))
t=u.z
s=document
r=W.af
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ad(s,"contextmenu",H.n(u.ghj(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ad(a,"focus",H.n(u.ghp(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ad(a,"blur",H.n(u.ghb(),o),!1,p))
t=u.z
n=W.b4
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ad(s,"keyup",H.n(u.ght(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ad(s,"keydown",H.n(u.ghr(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ad(a,"mousedown",H.n(u.ghx(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ad(a,"mouseup",H.n(u.ghB(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ad(a,l,H.n(u.ghz(),q),!1,r))
n=u.z
m=W.bf;(n&&C.a).h(n,W.ad(a,H.I(W.ns(a)),H.n(u.ghD(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ad(s,l,H.n(u.ghl(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ad(s,"mouseup",H.n(u.ghn(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ad(s,"pointerlockchange",H.n(u.ghF(),o),!1,p))
p=u.z
o=W.aY
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ad(a,"touchstart",H.n(u.ghS(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ad(a,"touchend",H.n(u.ghO(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ad(a,"touchmove",H.n(u.ghQ(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.dD()
return k},
fv:function fv(){},
an:function an(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hZ:function hZ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i_:function i_(a){this.a=a},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
e7:function e7(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
ix:function ix(a){this.a=a}},Z={
l6:function(a,b,c){var u
H.k(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ca(c)),35044)
a.bindBuffer(b,null)
return new Z.ej(b,u)},
aI:function(a){return new Z.be(a)},
ej:function ej(a,b){this.a=a
this.b=b},
dp:function dp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jg:function jg(a){this.a=a},
dq:function dq(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(a){this.a=a}},D={
X:function(){var u=new D.bW()
u.saj(null)
u.saQ(null)
u.c=null
u.d=0
return u},
fy:function fy(){},
bW:function bW(){var _=this
_.d=_.c=_.b=_.a=null},
fT:function fT(a){this.a=a},
fU:function fU(a){this.a=a},
B:function B(){this.b=null},
bZ:function bZ(a){this.b=null
this.$ti=a},
c_:function c_(a){this.b=null
this.$ti=a},
O:function O(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
kR:function(a,b){var u,t,s=new D.bD()
s.c=new V.a3(1,1,1)
s.a=V.md()
u=s.b
s.b=b
b.gD().h(0,s.gff())
t=new D.O("mover",u,s.b,[U.ac])
t.b=!0
s.az(t)
if(!s.c.v(0,a)){u=s.c
s.c=a
t=new D.O("color",u,a,[V.a3])
t.b=!0
s.az(t)}return s},
bD:function bD(){var _=this
_.d=_.c=_.b=_.a=null},
a8:function a8(){},
dE:function dE(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dT:function dT(){},
e_:function e_(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){}},X={dr:function dr(a,b){this.a=a
this.b=b},dD:function dD(a,b){this.a=a
this.b=b},hd:function hd(){var _=this
_.d=_.c=_.b=_.a=null},dH:function dH(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hl:function hl(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},bo:function bo(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hE:function hE(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cC:function cC(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hU:function hU(){},e9:function e9(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iB:function iB(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ee:function ee(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nu:function(a){var u=new X.h1(),t=new V.aN(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lX
if(t==null){t=V.lW(0,0,1,1)
$.lX=t}u.r=t
return u},
ds:function ds(){},
h1:function h1(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dS:function dS(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){}},V={
kL:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bg(a-b,u)
return(a<0?a+u:a)+b},
R:function(a,b,c){if(a==null)return C.b.af("null",c)
return C.b.af(C.e.eM(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
cf:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.r],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.F)(a),++r){q=V.R(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.b.af(u[p],s))}return u},
dM:function(){var u=$.lP
return u==null?$.lP=V.b7(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b7:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lO:function(a,b,c,d){return V.b7(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lL:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lM:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lN:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bK:function(){var u=$.lT
return u==null?$.lT=new V.aa(0,0):u},
nJ:function(){var u=$.cH
return u==null?$.cH=new V.a5(0,0,0):u},
lW:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dW(a,b,c,d)},
cZ:function(){var u=$.mc
return u==null?$.mc=new V.K(0,0,0):u},
md:function(){var u=$.j3
return u==null?$.j3=new V.K(0,0,1):u},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fS:function fS(a){this.a=a},
dL:function dL(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ao:function ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aa:function aa(a,b){this.a=a
this.b=b},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dW:function dW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.G(a,0)
t=C.b.G(b,0)
s=new V.hY()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
y:function(a){var u=new V.i6()
u.f8(a)
return u},
iA:function(){var u=new V.iz(),t=P.e
u.sih(new H.aQ([t,V.cL]))
u.sij(new H.aQ([t,V.cP]))
u.c=null
return u},
bi:function bi(){},
az:function az(){},
dI:function dI(){},
au:function au(){this.a=null},
hY:function hY(){this.b=this.a=null},
i6:function i6(){this.a=null},
cL:function cL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e8:function e8(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a){this.b=a
this.c=null},
iz:function iz(){this.c=this.b=this.a=null},
cQ:function cQ(a){this.b=a
this.a=this.c=null},
pa:function(a){P.o2(C.T,new V.kG(a))},
o_:function(a){var u=new V.ia()
u.fa(a,!0)
return u},
bB:function bB(){},
kG:function kG(a){this.a=a},
fI:function fI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h2:function h2(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h3:function h3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hS:function hS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hW:function hW(a){this.a=a
this.c=null},
hX:function hX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ia:function ia(){this.b=this.a=null},
ic:function ic(a){this.a=a},
ib:function ib(a){this.a=a},
id:function id(a){this.a=a}},U={
kQ:function(){var u=new U.fz()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lD:function(a){var u=new U.dt()
u.a=a
return u},
l0:function(a,b,c){var u,t=new U.dX()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.seT(0)
t.sez(0,0)
t.seG(0)
u=t.d
if(!(Math.abs(u-c)<$.M().a)){t.d=c
u=new D.O("deltaYaw",u,c,[P.r])
u.b=!0
t.J(u)}u=t.e
if(!(Math.abs(u-a)<$.M().a)){t.e=a
u=new D.O("deltaPitch",u,a,[P.r])
u.b=!0
t.J(u)}u=t.f
if(!(Math.abs(u-b)<$.M().a)){t.f=b
u=new D.O("deltaRoll",u,b,[P.r])
u.b=!0
t.J(u)}return t},
fz:function fz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dt:function dt(){this.b=this.a=null},
cw:function cw(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ac:function ac(){},
dX:function dX(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ef:function ef(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
eg:function eg(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eh:function eh(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
mI:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="testCanvas",b=null,a="modifiers",a0=V.o_("Test 020"),a1=W.lB()
a1.className="pageLargeCanvas"
a1.id=c
a0.a.appendChild(a1)
u=[P.e]
a0.dM(H.d(["Test of the Matrial Lighting shader with multiple moving directional lights."],u))
a0.iT(H.d(["shapes"],u))
a0.dM(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(c)
if(t==null)H.t(P.w("Failed to find an element with the identifier, testCanvas."))
s=E.o1(t,!0,!0,!0,!1)
r=U.l0(0,0,0.3)
q=D.kR(new V.a3(1,0,0),r)
r=U.l0(0.4,0,0)
p=D.kR(new V.a3(0,1,0),r)
r=U.l0(0.5,0,0.5)
o=D.kR(new V.a3(0,0,1),r)
n=new O.dJ()
n.sfB(O.kP(V.ao))
n.e.bh(n.gh7(),n.gh9())
r=new O.b6(n,"emission")
r.c=C.d
r.f=new V.a3(0,0,0)
n.f=r
r=new O.b6(n,"ambient")
r.c=C.d
r.f=new V.a3(0,0,0)
n.r=r
r=new O.b6(n,"diffuse")
r.c=C.d
r.f=new V.a3(0,0,0)
n.x=r
r=new O.b6(n,"invDiffuse")
r.c=C.d
r.f=new V.a3(0,0,0)
n.y=r
r=new O.hx(n,"specular")
r.c=C.d
r.f=new V.a3(0,0,0)
r.ch=100
n.z=r
r=new O.hu(n,"bump")
r.c=C.d
n.Q=r
n.ch=null
r=new O.b6(n,"reflect")
r.c=C.d
r.f=new V.a3(0,0,0)
n.cx=r
r=new O.hw(n,"refract")
r.c=C.d
r.f=new V.a3(0,0,0)
r.ch=1
n.cy=r
r=new O.ht(n,"alpha")
r.c=C.d
r.f=1
n.db=r
r=new D.dE()
r.bS(D.a8)
r.sfK(H.d([],[D.bD]))
r.shU(H.d([],[D.dT]))
r.sig(H.d([],[D.e_]))
r.sis(H.d([],[D.e4]))
r.sit(H.d([],[D.e5]))
r.siu(H.d([],[D.e6]))
r.ch=r.Q=null
r.d1(r.gh5(),r.ghI(),r.ghM())
n.dx=r
m=r.Q
r=m==null?r.Q=D.X():m
r.h(0,n.gi2())
r=n.dx
m=r.ch
r=m==null?r.ch=D.X():m
r.h(0,n.ghd())
n.dy=null
n.dx.h(0,q)
n.dx.h(0,p)
n.dx.h(0,o)
n.f.sal(0,new V.a3(0,0,0))
r=n.r
r.sal(0,new V.a3(0.1,0.1,0.1))
r=n.x
r.sal(0,new V.a3(0.7,0.7,0.7))
r=n.z
r.sal(0,new V.a3(0.3,0.3,0.3))
r=n.z
if(r.c===C.d){r.c=C.j
r.bR()
r.cf(100)
m=r.a
m.a=null
m.ab(b)}r.cf(100)
l=E.lH()
l.sai(0,F.mO())
k=E.lH()
k.sb9(U.lD(V.lO(3,3,3,1)))
r=F.lj(1,b,b,1)
r.cH()
k.sai(0,r)
j=new U.cw()
j.bS(U.ac)
j.bh(j.gh3(),j.ghK())
j.e=null
j.f=V.dM()
j.r=0
r=s.r
m=new U.eg()
i=U.kQ()
i.sd_(0,!0)
i.scN(6.283185307179586)
i.scP(0)
i.sa1(0,0)
i.scO(100)
i.sW(0)
i.scz(0.5)
m.b=i
h=m.gaM()
i.gD().h(0,h)
i=U.kQ()
i.sd_(0,!0)
i.scN(6.283185307179586)
i.scP(0)
i.sa1(0,0)
i.scO(100)
i.sW(0)
i.scz(0.5)
m.c=i
i.gD().h(0,h)
m.d=null
m.r=m.f=m.e=!1
m.y=m.x=2.5
m.Q=4
m.ch=m.cx=!1
m.db=m.cy=0
m.dx=null
m.dy=0
m.fx=m.fr=null
g=new X.aA(!1,!1,!1)
f=m.d
m.d=g
i=[X.aA]
h=new D.O(a,f,g,i)
h.b=!0
m.J(h)
h=m.f
if(h!==!1){m.f=!1
h=new D.O("invertX",h,!1,[P.U])
h.b=!0
m.J(h)}h=m.r
if(h!==!1){m.r=!1
h=new D.O("invertY",h,!1,[P.U])
h.b=!0
m.J(h)}m.b2(r)
j.h(0,m)
r=s.r
m=new U.ef()
h=U.kQ()
h.sd_(0,!0)
h.scN(6.283185307179586)
h.scP(0)
h.sa1(0,0)
h.scO(100)
h.sW(0)
h.scz(0.2)
m.b=h
h.gD().h(0,m.gaM())
m.c=null
m.d=!1
m.e=2.5
m.r=4
m.x=m.y=!1
m.z=0
m.Q=null
m.ch=0
m.cy=m.cx=null
g=new X.aA(!0,!1,!1)
f=m.c
m.c=g
h=new D.O(a,f,g,i)
h.b=!0
m.J(h)
m.b2(r)
j.h(0,m)
r=s.r
m=new U.eh()
m.c=0.01
m.e=m.d=0
g=new X.aA(!1,!1,!1)
m.b=g
i=new D.O(a,b,g,i)
i.b=!0
m.J(i)
m.b2(r)
j.h(0,m)
j.h(0,U.lD(V.b7(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
r=new M.dx()
r.sfE(0,O.kP(E.an))
r.d.bh(r.ghf(),r.ghh())
r.x=r.r=r.f=r.e=null
e=X.nu(b)
d=new X.dS()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.sb9(b)
m=d.c
if(!(Math.abs(m-1.0471975511965976)<$.M().a)){d.c=1.0471975511965976
m=new D.O("fov",m,1.0471975511965976,[P.r])
m.b=!0
d.aN(m)}m=d.d
if(!(Math.abs(m-0.1)<$.M().a)){d.d=0.1
m=new D.O("near",m,0.1,[P.r])
m.b=!0
d.aN(m)}m=d.e
if(!(Math.abs(m-2000)<$.M().a)){d.e=2000
m=new D.O("far",m,2000,[P.r])
m.b=!0
d.aN(m)}m=r.a
if(m!==d){if(m!=null)m.gD().P(0,r.gaq())
f=r.a
r.a=d
d.gD().h(0,r.gaq())
m=new D.O("camera",f,r.a,[X.ds])
m.b=!0
r.aA(m)}m=r.b
if(m!==e){if(m!=null)m.gD().P(0,r.gaq())
f=r.b
r.b=e
e.gD().h(0,r.gaq())
m=new D.O("target",f,r.b,[X.e2])
m.b=!0
r.aA(m)}r.seJ(b)
r.seJ(n)
r.d.h(0,l)
r.d.h(0,k)
r.a.sb9(j)
m=s.d
if(m!==r){if(m!=null)m.gD().P(0,s.gd4())
s.d=r
r.gD().h(0,s.gd4())
s.d5()}r=new V.hW("shapes")
u=u.getElementById("shapes")
r.c=u
if(u==null)H.t("Failed to find shapes for RadioGroup")
r.b1(0,"Cube",new U.kx(l))
r.b1(0,"Cylinder",new U.ky(l))
r.b1(0,"Cone",new U.kz(l))
r.b1(0,"Sphere",new U.kA(l))
r.dK(0,"Toroid",new U.kB(l),!0)
r.b1(0,"Knot",new U.kC(l))
u=s.z
if(u==null)u=s.z=D.X()
r={func:1,ret:-1,args:[D.B]}
m=H.n(new U.kD(a0,n),r)
if(u.b==null)u.saQ(H.d([],[r]))
u=u.b;(u&&C.a).h(u,m)
V.pa(s)},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
kD:function kD(a,b){this.a=a
this.b=b}},M={dx:function dx(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nH:function(a,b){var u=a.am,t=new A.hs(b,u)
t.f9(b,u)
t.f6(a,b)
return t},
l3:function(a,b,c,d,e){var u=new A.iJ(a,c,e)
u.f=d
u.siv(P.nF(d,0,P.p))
return u},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a){this.a=a},
hs:function hs(a,b){var _=this
_.bs=_.dT=_.br=_.am=_.av=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e8=_.cB=_.e7=_.bF=_.e6=_.e5=_.bE=_.bD=_.e4=_.e3=_.bC=_.bB=_.bA=_.e2=_.e1=_.bz=_.e0=_.e_=_.by=_.dZ=_.dY=_.bx=_.bw=_.dX=_.dW=_.bv=_.bu=_.dV=_.dU=_.bt=null
_.cG=_.ec=_.cF=_.eb=_.cE=_.ea=_.cD=_.e9=_.cC=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hv:function hv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.av=b3
_.am=b4
_.br=b5},
cR:function cR(a,b){this.b=a
this.c=b},
cV:function cV(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cT:function cT(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cW:function cW(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
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
cX:function cX(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cK:function cK(){},
bV:function bV(a,b){this.a=a
this.b=b},
ea:function ea(){},
iP:function iP(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
iM:function iM(a,b,c){this.a=a
this.c=b
this.d=c},
iO:function iO(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a4:function a4(a,b,c){this.a=a
this.c=b
this.d=c},
iK:function iK(a,b,c){this.a=a
this.c=b
this.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){this.a=a
this.c=b
this.d=c},
iQ:function iQ(a,b,c){this.a=a
this.c=b
this.d=c},
cS:function cS(a,b,c){this.a=a
this.c=b
this.d=c},
aC:function aC(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
aq:function aq(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lj:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ai,P.r,P.r]})
u=F.l1()
F.de(u,b,c,d,a,1,0,0,1)
F.de(u,b,c,d,a,0,1,0,3)
F.de(u,b,c,d,a,0,0,1,2)
F.de(u,b,c,d,a,-1,0,0,0)
F.de(u,b,c,d,a,0,-1,0,0)
F.de(u,b,c,d,a,0,0,-1,3)
u.au()
return u},
kb:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
de:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ai,P.r,P.r]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.K(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.K(p+a3,o+a1,n+a2)
l=new V.K(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.K(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.kb(u)
g=F.kb(e.b)
f=F.lp(d,a0,new F.ka(e,F.kb(e.c),F.kb(e.d),g,h,c),b)
if(f!=null)a.b8(f)},
mC:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.r,args:[P.r]})
if(e<3)return
u=F.l1()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.ai])
q=u.a
p=new V.K(0,0,t)
p=p.A(0,Math.sqrt(p.F(p)))
C.a.h(r,q.iX(new V.b9(a,-1,-1,-1),new V.aN(1,1,1,1),new V.a5(0,0,c),new V.K(0,0,t),new V.aa(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.C(k)
j=new V.K(m,l,t).A(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ei(new V.b9(a,-1,-1,-1),null,new V.aN(i,g,h,1),new V.a5(m*k,l*k,c),new V.K(0,0,t),new V.aa(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.iV(r)
return u},
mA:function(a,b,c){return F.oM(!0,a,1,new F.kk(1,c),b)},
oM:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
u=F.lp(c,e,new F.km(d),null)
if(u==null)return
u.au()
u.cl()
if(b)u.b8(F.mC(3,!1,1,new F.kn(d),e))
u.b8(F.mC(1,!0,-1,new F.ko(d),e))
return u},
pb:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kH()
t=F.lj(a,null,new F.kI(s,1),b)
t.cl()
return t},
mO:function(){return F.mB(15,30,0.5,1,new F.kJ())},
p2:function(){return F.mB(12,120,0.3,1,new F.kv(3,2))},
mB:function(a,b,c,d,e){var u=F.lp(a,b,new F.kl(H.n(e,{func:1,ret:V.a5,args:[P.r]}),d,b,c),null)
if(u==null)return
u.au()
u.cl()
return u},
lp:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ai,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.l1()
t=H.d([],[F.ai])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ei(g,g,new V.aN(p,0,0,1),g,g,new V.aa(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cw(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ei(g,g,new V.aN(j,i,h,1),g,g,new V.aa(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cw(d))}}u.d.iW(a+1,b+1,t)
return u},
ct:function(a,b,c){var u=new F.a9(),t=a.a
if(t==null)H.t(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.w("May not create a face with vertices attached to different shapes."))
u.cj(a)
u.ck(b)
u.i8(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
nB:function(a,b){var u=new F.bn(),t=a.a
if(t==null)H.t(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.w("May not create a line with vertices attached to different shapes."))
u.cj(a)
u.ck(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a2()
return u},
l1:function(){var u=new F.dZ(),t=new F.j4(u)
t.b=!1
t.siw(H.d([],[F.ai]))
u.a=t
t=new F.i9(u)
t.sca(H.d([],[F.bJ]))
u.b=t
t=new F.i8(u)
t.sfU(H.d([],[F.bn]))
u.c=t
t=new F.i7(u)
t.sfO(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
ei:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ai(),r=new F.jc()
r.sca(H.d([],[F.bJ]))
s.b=r
r=new F.j8()
u=[F.bn]
r.sfV(H.d([],u))
r.sfW(H.d([],u))
s.c=r
r=new F.j5()
u=[F.a9]
r.sfP(H.d([],u))
r.sfQ(H.d([],u))
r.sfR(H.d([],u))
s.d=r
h=$.n1()
s.e=0
r=$.bv()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bu().a)!==0?e:t
s.x=(u&$.bt().a)!==0?b:t
s.y=(u&$.bw().a)!==0?f:t
s.z=(u&$.bx().a)!==0?g:t
s.Q=(u&$.n2().a)!==0?c:t
s.ch=(u&$.cl().a)!==0?i:0
s.cx=(u&$.bs().a)!==0?a:t
return s},
ka:function ka(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kk:function kk(a,b){this.a=a
this.b=b},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kH:function kH(){},
kI:function kI(a,b){this.a=a
this.b=b},
kJ:function kJ(){},
kv:function kv(a,b){this.a=a
this.b=b},
kl:function kl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fV:function fV(){},
ie:function ie(){},
bn:function bn(){this.b=this.a=null},
hf:function hf(){},
iI:function iI(){},
bJ:function bJ(){this.a=null},
dZ:function dZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i7:function i7(a){this.a=a
this.b=null},
i8:function i8(a){this.a=a
this.b=null},
i9:function i9(a){this.a=a
this.b=null},
ai:function ai(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
je:function je(a){this.a=a},
jd:function jd(a){this.a=a},
j4:function j4(a){this.a=a
this.c=this.b=null},
j5:function j5(){this.d=this.c=this.b=null},
j6:function j6(a,b){this.a=a
this.b=b},
j7:function j7(a,b){this.a=a
this.b=b},
j8:function j8(){this.c=this.b=null},
ja:function ja(){},
j9:function j9(){},
jb:function jb(){},
hM:function hM(){},
jc:function jc(){this.b=null}},T={e3:function e3(){}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kW.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gK:function(a){return H.cI(a)},
i:function(a){return"Instance of '"+H.c2(a)+"'"}}
J.h9.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$iU:1}
J.dB.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0}}
J.dC.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.hR.prototype={}
J.bM.prototype={}
J.bm.prototype={
i:function(a){var u=a[$.mQ()]
if(u==null)return this.f1(a)
return"JavaScript function for "+H.l(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibF:1}
J.aP.prototype={
h:function(a,b){H.A(b,H.u(a,0))
if(!!a.fixed$length)H.t(P.J("add"))
a.push(b)},
eD:function(a,b){if(!!a.fixed$length)H.t(P.J("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dV(b,null))
return a.splice(b,1)[0]},
P:function(a,b){var u
if(!!a.fixed$length)H.t(P.J("remove"))
for(u=0;u<a.length;++u)if(J.V(a[u],b)){a.splice(u,1)
return!0}return!1},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bj(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.l(a[u]))
return t.join(b)},
jt:function(a){return this.m(a,"")},
jm:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bj(a))}return t},
jl:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.U,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.D(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bj(a))}throw H.c(H.h8())},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
eZ:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ag(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.u(a,0)])
return H.d(a.slice(b,c),[H.u(a,0)])},
gjk:function(a){if(a.length>0)return a[0]
throw H.c(H.h8())},
gaw:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.h8())},
bi:function(a,b,c,d){var u,t,s=H.u(a,0)
H.k(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.t(P.J("setRange"))
P.bq(b,c,a.length)
u=c-b
if(u===0)return
P.l_(0,"skipCount")
H.k(d,"$ib",[s],"$ab")
s=J.cg(d)
if(u>s.gl(d))throw H.c(H.nx())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dN:function(a,b){var u,t
H.n(b,{func:1,ret:P.U,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.D(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bj(a))}return!1},
Z:function(a,b){var u
for(u=0;u<a.length;++u)if(J.V(a[u],b))return!0
return!1},
i:function(a){return P.kT(a,"[","]")},
gV:function(a){return new J.ax(a,a.length,[H.u(a,0)])},
gK:function(a){return H.cI(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.J("set length"))
if(b<0)throw H.c(P.ag(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.ce(a,b))
return a[b]},
n:function(a,b,c){H.A(c,H.u(a,0))
if(!!a.immutable$list)H.t(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ce(a,b))
a[b]=c},
q:function(a,b){var u,t=[H.u(a,0)]
H.k(b,"$ib",t,"$ab")
u=C.f.q(a.length,b.gl(b))
t=H.d([],t)
this.sl(t,u)
this.bi(t,0,a.length,a)
this.bi(t,a.length,u,b)
return t},
$ii:1,
$ib:1}
J.kV.prototype={}
J.ax.prototype={
gM:function(a){return this.d},
E:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.F(s))
u=t.c
if(u>=r){t.sdl(null)
return!1}t.sdl(s[u]);++t.c
return!0},
sdl:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
J.bH.prototype={
ee:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
eM:function(a,b){var u,t
if(b>20)throw H.c(P.ag(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
be:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a_(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.u("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
q:function(a,b){if(typeof b!=="number")throw H.c(H.aL(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.aL(b))
return a-b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.aL(b))
return a*b},
bg:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f5:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dG(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dG(a,b)},
dG:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aS:function(a,b){var u
if(a>0)u=this.dF(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ie:function(a,b){if(b<0)throw H.c(H.aL(b))
return this.dF(a,b)},
dF:function(a,b){return b>31?0:a>>>b},
$ir:1,
$iab:1}
J.dA.prototype={$ip:1}
J.ha.prototype={}
J.bl.prototype={
a_:function(a,b){if(b<0)throw H.c(H.ce(a,b))
if(b>=a.length)H.t(H.ce(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.ce(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!=="string")throw H.c(P.kN(b,null,null))
return a+b},
aX:function(a,b,c,d){var u,t
c=P.bq(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aa:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a4:function(a,b){return this.aa(a,b,0)},
C:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.aL(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.X()
if(b<0)throw H.c(P.dV(b,null))
if(b>c)throw H.c(P.dV(b,null))
if(c>a.length)throw H.c(P.dV(c,null))
return a.substring(b,c)},
ap:function(a,b){return this.C(a,b,null)},
jZ:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
af:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
el:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ek:function(a,b){return this.el(a,b,0)},
i:function(a){return a},
gK:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilR:1,
$ie:1}
H.v.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a_(this.a,b)},
$acY:function(){return[P.p]},
$az:function(){return[P.p]},
$ai:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fP.prototype={}
H.c0.prototype={
gV:function(a){var u=this
return new H.cz(u,u.gl(u),[H.as(u,"c0",0)])},
bM:function(a,b){return this.f0(0,H.n(b,{func:1,ret:P.U,args:[H.as(this,"c0",0)]}))}}
H.cz.prototype={
gM:function(a){return this.d},
E:function(){var u,t=this,s=t.a,r=J.cg(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.bj(s))
u=t.c
if(u>=q){t.saY(null)
return!1}t.saY(r.L(s,u));++t.c
return!0},
saY:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
H.hp.prototype={
gV:function(a){return new H.hq(J.by(this.a),this.b,this.$ti)},
gl:function(a){return J.aD(this.a)},
L:function(a,b){return this.b.$1(J.fj(this.a,b))},
$ai:function(a,b){return[b]}}
H.hq.prototype={
E:function(){var u=this,t=u.b
if(t.E()){u.saY(u.c.$1(t.gM(t)))
return!0}u.saY(null)
return!1},
gM:function(a){return this.a},
saY:function(a){this.a=H.A(a,H.u(this,1))},
$ab3:function(a,b){return[b]}}
H.hr.prototype={
gl:function(a){return J.aD(this.a)},
L:function(a,b){return this.b.$1(J.fj(this.a,b))},
$ac0:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d_.prototype={
gV:function(a){return new H.jh(J.by(this.a),this.b,this.$ti)}}
H.jh.prototype={
E:function(){var u,t
for(u=this.a,t=this.b;u.E();)if(H.D(t.$1(u.gM(u))))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.bX.prototype={}
H.cY.prototype={
n:function(a,b,c){H.A(c,H.as(this,"cY",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.ec.prototype={}
H.fB.prototype={
i:function(a){return P.kZ(this)},
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
return H.no()},
$iH:1}
H.fC.prototype={
gl:function(a){return this.a},
bp:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bp(0,b))return
return this.dm(b)},
dm:function(a){return this.b[H.I(a)]},
N:function(a,b){var u,t,s,r,q=this,p=H.u(q,1)
H.n(b,{func:1,ret:-1,args:[H.u(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.A(q.dm(r),p))}}}
H.iF.prototype={
ae:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hN.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hc.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.iT.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kK.prototype={
$1:function(a){if(!!J.Z(a).$ibE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.eS.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iav:1}
H.cp.prototype={
i:function(a){return"Closure '"+H.c2(this).trim()+"'"},
$ibF:1,
gk7:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iu.prototype={}
H.ij.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ck(u)+"'"}}
H.cn.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cn))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gK:function(a){var u,t=this.c
if(t==null)u=H.cI(this.a)
else u=typeof t!=="object"?J.dk(t):H.cI(t)
return(u^H.cI(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c2(u)+"'")}}
H.iH.prototype={
i:function(a){return this.a}}
H.fx.prototype={
i:function(a){return this.a}}
H.i4.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.ji.prototype={
i:function(a){return"Assertion failed: "+P.dy(this.a)}}
H.aQ.prototype={
gl:function(a){return this.a},
gjs:function(a){return this.a===0},
ga6:function(a){return new H.hh(this,[H.u(this,0)])},
bp:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.di(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.di(t,b)}else return s.jp(b)},
jp:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cK(u.bZ(t,u.cJ(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bk(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bk(r,b)
s=t==null?null:t.b
return s}else return q.jq(b)},
jq:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bZ(r,s.cJ(a))
t=s.cK(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s=this
H.A(b,H.u(s,0))
H.A(c,H.u(s,1))
if(typeof b==="string"){u=s.b
s.d8(u==null?s.b=s.c8():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d8(t==null?s.c=s.c8():t,b,c)}else s.jr(b,c)},
jr:function(a,b){var u,t,s,r,q=this
H.A(a,H.u(q,0))
H.A(b,H.u(q,1))
u=q.d
if(u==null)u=q.d=q.c8()
t=q.cJ(a)
s=q.bZ(u,t)
if(s==null)q.cg(u,t,[q.bT(a,b)])
else{r=q.cK(s,a)
if(r>=0)s[r].b=b
else s.push(q.bT(a,b))}},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.u(s,0),H.u(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bj(s))
u=u.c}},
d8:function(a,b,c){var u,t=this
H.A(b,H.u(t,0))
H.A(c,H.u(t,1))
u=t.bk(a,b)
if(u==null)t.cg(a,b,t.bT(b,c))
else u.b=c},
ft:function(){this.r=this.r+1&67108863},
bT:function(a,b){var u,t=this,s=new H.hg(H.A(a,H.u(t,0)),H.A(b,H.u(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.ft()
return s},
cJ:function(a){return J.dk(a)&0x3ffffff},
cK:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.V(a[t].a,b))return t
return-1},
i:function(a){return P.kZ(this)},
bk:function(a,b){return a[b]},
bZ:function(a,b){return a[b]},
cg:function(a,b,c){a[b]=c},
fJ:function(a,b){delete a[b]},
di:function(a,b){return this.bk(a,b)!=null},
c8:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cg(t,u,t)
this.fJ(t,u)
return t}}
H.hg.prototype={}
H.hh.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.hi(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hi.prototype={
gM:function(a){return this.d},
E:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bj(t))
else{t=u.c
if(t==null){u.sd9(null)
return!1}else{u.sd9(t.a)
u.c=u.c.c
return!0}}},
sd9:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
H.kr.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.ks.prototype={
$2:function(a,b){return this.a(a,b)},
$S:52}
H.kt.prototype={
$1:function(a){return this.a(H.I(a))},
$S:50}
H.hb.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilR:1,
$inW:1}
H.cD.prototype={$icD:1}
H.bI.prototype={$ibI:1}
H.dN.prototype={
gl:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cE.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
n:function(a,b,c){H.oO(c)
H.bh(b,a,a.length)
a[b]=c},
$abX:function(){return[P.r]},
$az:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.dO.prototype={
n:function(a,b,c){H.aj(c)
H.bh(b,a,a.length)
a[b]=c},
$abX:function(){return[P.p]},
$az:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hF.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hG.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hH.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hI.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hJ.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.dP.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.cF.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$icF:1,
$iT:1}
H.d4.prototype={}
H.d5.prototype={}
H.d6.prototype={}
H.d7.prototype={}
P.jk.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:28}
P.jj.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:48}
P.jl.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jm.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eY.prototype={
fp:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cd(new P.k0(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
fq:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cd(new P.k_(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ibb:1}
P.k0.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.k_.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.f5(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bg.prototype={
jv:function(a){if(this.c!==6)return!0
return this.b.b.cX(H.n(this.d,{func:1,ret:P.U,args:[P.S]}),a.a,P.U,P.S)},
jo:function(a){var u=this.e,t=P.S,s={futureOr:1,type:H.u(this,1)},r=this.b.b
if(H.ff(u,{func:1,args:[P.S,P.av]}))return H.lk(r.jT(u,a.a,a.b,null,t,P.av),s)
else return H.lk(r.cX(H.n(u,{func:1,args:[P.S]}),a.a,null,t),s)}}
P.aJ.prototype={
eL:function(a,b,c){var u,t,s,r=H.u(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a2
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oD(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aJ($.a2,[c])
s=b==null?1:3
this.dc(new P.bg(t,s,a,b,[r,c]))
return t},
jW:function(a,b){return this.eL(a,null,b)},
dc:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibg")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaJ")
s=u.a
if(s<4){u.dc(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.ki(null,null,s,H.n(new P.jv(t,a),{func:1,ret:-1}))}},
dB:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibg")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaJ")
u=q.a
if(u<4){q.dB(a)
return}p.a=u
p.c=q.c}o.a=p.bm(a)
u=p.b
u.toString
P.ki(null,null,u,H.n(new P.jz(o,p),{func:1,ret:-1}))}},
cc:function(){var u=H.f(this.c,"$ibg")
this.c=null
return this.bm(u)},
bm:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
de:function(a){var u,t,s=this,r=H.u(s,0)
H.lk(a,{futureOr:1,type:r})
u=s.$ti
if(H.lg(a,"$icv",u,"$acv"))if(H.lg(a,"$iaJ",u,null))P.me(a,s)
else P.oe(a,s)
else{t=s.cc()
H.A(a,r)
s.a=4
s.c=a
P.d2(s,t)}},
df:function(a,b){var u,t=this
H.f(b,"$iav")
u=t.cc()
t.a=8
t.c=new P.am(a,b)
P.d2(t,u)},
$icv:1}
P.jv.prototype={
$0:function(){P.d2(this.a,this.b)},
$S:0}
P.jz.prototype={
$0:function(){P.d2(this.b,this.a.a)},
$S:0}
P.jw.prototype={
$1:function(a){var u=this.a
u.a=0
u.de(a)},
$S:28}
P.jx.prototype={
$2:function(a,b){H.f(b,"$iav")
this.a.df(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jy.prototype={
$0:function(){this.a.df(this.b,this.c)},
$S:0}
P.jC.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eH(H.n(s.d,{func:1}),null)}catch(r){u=H.ak(r)
t=H.ci(r)
if(o.d){s=H.f(o.a.a.c,"$iam").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iam")
else q.b=new P.am(u,t)
q.a=!0
return}if(!!J.Z(n).$icv){if(n instanceof P.aJ&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iam")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jW(new P.jD(p),null)
s.a=!1}},
$S:3}
P.jD.prototype={
$1:function(a){return this.a},
$S:46}
P.jB.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.u(s,0)
q=H.A(n.c,r)
p=H.u(s,1)
n.a.b=s.b.b.cX(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.ci(o)
s=n.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jA.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iam")
r=m.c
if(H.D(r.jv(u))&&r.e!=null){q=m.b
q.b=r.jo(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.ci(p)
r=H.f(m.a.a.c,"$iam")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.ek.prototype={}
P.im.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aJ($.a2,[P.p])
r.a=0
u=H.u(s,0)
t=H.n(new P.ip(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iq(r,q),{func:1,ret:-1})
W.ad(s.a,s.b,t,!1,u)
return q}}
P.ip.prototype={
$1:function(a){H.A(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.u(this.b,0)]}}}
P.iq.prototype={
$0:function(){this.b.de(this.a.a)},
$S:0}
P.cM.prototype={}
P.io.prototype={}
P.bb.prototype={}
P.am.prototype={
i:function(a){return H.l(this.a)},
$ibE:1}
P.k9.prototype={$ipO:1}
P.kh.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dR():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jJ.prototype={
jU:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a2){a.$0()
return}P.mq(r,r,this,a,-1)}catch(s){u=H.ak(s)
t=H.ci(s)
P.kg(r,r,this,u,H.f(t,"$iav"))}},
jV:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.k===$.a2){a.$1(b)
return}P.mr(r,r,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.ci(s)
P.kg(r,r,this,u,H.f(t,"$iav"))}},
j2:function(a,b){return new P.jL(this,H.n(a,{func:1,ret:b}),b)},
cp:function(a){return new P.jK(this,H.n(a,{func:1,ret:-1}))},
dP:function(a,b){return new P.jM(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eH:function(a,b){H.n(a,{func:1,ret:b})
if($.a2===C.k)return a.$0()
return P.mq(null,null,this,a,b)},
cX:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.a2===C.k)return a.$1(b)
return P.mr(null,null,this,a,b,c,d)},
jT:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.a2===C.k)return a.$2(b,c)
return P.oE(null,null,this,a,b,c,d,e,f)}}
P.jL.prototype={
$0:function(){return this.a.eH(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jK.prototype={
$0:function(){return this.a.jU(this.b)},
$S:3}
P.jM.prototype={
$1:function(a){var u=this.c
return this.a.jV(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jH.prototype={
gV:function(a){var u=this,t=new P.ez(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
Z:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$ic8")!=null}else{t=this.fF(b)
return t}},
fF:function(a){var u=this.d
if(u==null)return!1
return this.bX(this.dn(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.A(b,H.u(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.da(u==null?s.b=P.l8():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.da(t==null?s.c=P.l8():t,b)}else return s.fu(0,b)},
fu:function(a,b){var u,t,s,r=this
H.A(b,H.u(r,0))
u=r.d
if(u==null)u=r.d=P.l8()
t=r.dg(b)
s=u[t]
if(s==null)u[t]=[r.c9(b)]
else{if(r.bX(s,b)>=0)return!1
s.push(r.c9(b))}return!0},
P:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hY(this.c,b)
else return this.hX(0,b)},
hX:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dn(r,b)
t=s.bX(u,b)
if(t<0)return!1
s.dH(u.splice(t,1)[0])
return!0},
da:function(a,b){H.A(b,H.u(this,0))
if(H.f(a[b],"$ic8")!=null)return!1
a[b]=this.c9(b)
return!0},
hY:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$ic8")
if(u==null)return!1
this.dH(u)
delete a[b]
return!0},
dt:function(){this.r=1073741823&this.r+1},
c9:function(a){var u,t=this,s=new P.c8(H.A(a,H.u(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dt()
return s},
dH:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dt()},
dg:function(a){return J.dk(a)&1073741823},
dn:function(a,b){return a[this.dg(b)]},
bX:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.V(a[t].a,b))return t
return-1}}
P.c8.prototype={}
P.ez.prototype={
gM:function(a){return this.d},
E:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bj(t))
else{t=u.c
if(t==null){u.sdd(null)
return!1}else{u.sdd(H.A(t.a,H.u(u,0)))
u.c=u.c.b
return!0}}},
sdd:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
P.hj.prototype={
$2:function(a,b){this.a.n(0,H.A(a,this.b),H.A(b,this.c))},
$S:7}
P.hk.prototype={$ii:1,$ib:1}
P.z.prototype={
gV:function(a){return new H.cz(a,this.gl(a),[H.bP(this,a,"z",0)])},
L:function(a,b){return this.j(a,b)},
jY:function(a,b){var u,t=this,s=H.d([],[H.bP(t,a,"z",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.n(s,u,t.j(a,u))
return s},
jX:function(a){return this.jY(a,!0)},
q:function(a,b){var u,t=this,s=[H.bP(t,a,"z",0)]
H.k(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sl(u,C.f.q(t.gl(a),b.gl(b)))
C.a.bi(u,0,t.gl(a),a)
C.a.bi(u,t.gl(a),u.length,b)
return u},
ji:function(a,b,c,d){var u
H.A(d,H.bP(this,a,"z",0))
P.bq(b,c,this.gl(a))
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.kT(a,"[","]")}}
P.hm.prototype={}
P.hn.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:7}
P.ae.prototype={
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bP(s,a,"ae",0),H.bP(s,a,"ae",1)]})
for(u=J.by(s.ga6(a));u.E();){t=u.gM(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aD(this.ga6(a))},
i:function(a){return P.kZ(a)},
$iH:1}
P.k1.prototype={
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.ho.prototype={
j:function(a,b){return J.lt(this.a,b)},
n:function(a,b,c){J.kM(this.a,H.A(b,H.u(this,0)),H.A(c,H.u(this,1)))},
N:function(a,b){J.lu(this.a,H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gl:function(a){return J.aD(this.a)},
i:function(a){return J.at(this.a)},
$iH:1}
P.ed.prototype={}
P.jO.prototype={
as:function(a,b){var u
for(u=J.by(H.k(b,"$ii",this.$ti,"$ai"));u.E();)this.h(0,u.gM(u))},
i:function(a){return P.kT(this,"{","}")},
L:function(a,b){var u,t,s,r=this
P.l_(b,"index")
for(u=P.oi(r,r.r,H.u(r,0)),t=0;u.E();){s=u.d
if(b===t)return s;++t}throw H.c(P.a0(b,r,"index",null,t))},
$ii:1,
$ilY:1}
P.eA.prototype={}
P.f2.prototype={}
P.ft.prototype={
jx:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bq(a0,a1,b.length)
u=$.n4()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.G(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kq(C.b.G(b,n))
j=H.kq(C.b.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.b.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ah("")
g=r.a+=C.b.C(b,s,t)
r.a=g+H.c3(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.C(b,s,a1)
f=g.length
if(q>=0)P.ly(b,p,a1,q,o,f)
else{e=C.f.bg(f-1,4)+1
if(e===1)throw H.c(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aX(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.ly(b,p,a1,q,o,d)
else{e=C.f.bg(d,4)
if(e===1)throw H.c(P.a7(c,b,a1))
if(e>1)b=C.b.aX(b,a1,a1,e===2?"==":"=")}return b},
$abU:function(){return[[P.b,P.p],P.e]}}
P.fu.prototype={
$abC:function(){return[[P.b,P.p],P.e]}}
P.bU.prototype={}
P.bC.prototype={}
P.fR.prototype={
$abU:function(){return[P.e,[P.b,P.p]]}}
P.h6.prototype={
i:function(a){return this.a}}
P.h5.prototype={
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
default:p=o}if(p!=null){if(q==null)q=new P.ah("")
if(r>b)q.a+=C.b.C(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nh(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abC:function(){return[P.e,P.e]}}
P.j0.prototype={
gjh:function(){return C.R}}
P.j2.prototype={
cv:function(a){var u,t,s=P.bq(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.k7(u)
if(t.fS(a,0,s)!==s)t.dJ(J.nd(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oy(0,t.b,u.length)))},
$abC:function(){return[P.e,[P.b,P.p]]}}
P.k7.prototype={
dJ:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fS:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a_(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.G(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dJ(r,C.b.G(a,p)))s=p}else if(r<=2047){q=n.b
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
P.j1.prototype={
cv:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[P.p],"$ab")
u=P.o5(!1,a,0,null)
if(u!=null)return u
t=P.bq(0,null,J.aD(a))
s=P.mt(a,0,t)
if(s>0){r=P.cN(a,0,s)
if(s===t)return r
q=new P.ah(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ah("")
n=new P.k6(!1,q)
n.c=o
n.j6(a,p,t)
if(n.e>0){H.t(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c3(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abC:function(){return[[P.b,P.p],P.e]}}
P.k6.prototype={
j6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.k(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cg(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bN()
if((o&192)!==128){n=P.a7(h+C.f.be(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.h(C.A,n)
if(u<=C.A[n]){n=P.a7("Overlong encoding of 0x"+C.f.be(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.f.be(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c3(u)
i.c=!1}for(n=p<c;n;){m=P.mt(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cN(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.X()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.f.be(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.f.be(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.U.prototype={}
P.ay.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gK:function(a){var u=this.a
return(u^C.f.aS(u,30))&1073741823},
i:function(a){var u=this,t=P.np(H.nS(u)),s=P.du(H.nQ(u)),r=P.du(H.nM(u)),q=P.du(H.nN(u)),p=P.du(H.nP(u)),o=P.du(H.nR(u)),n=P.nq(H.nO(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.r.prototype={}
P.b2.prototype={
q:function(a,b){return new P.b2(C.f.q(this.a,b.gfL()))},
t:function(a,b){return new P.b2(C.f.t(this.a,b.gfL()))},
v:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a},
gK:function(a){return C.f.gK(this.a)},
i:function(a){var u,t,s,r=new P.fO(),q=this.a
if(q<0)return"-"+new P.b2(0-q).i(0)
u=r.$1(C.f.a5(q,6e7)%60)
t=r.$1(C.f.a5(q,1e6)%60)
s=new P.fN().$1(q%1e6)
return""+C.f.a5(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.fN.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:23}
P.fO.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:23}
P.bE.prototype={}
P.fn.prototype={
i:function(a){return"Assertion failed"}}
P.dR.prototype={
i:function(a){return"Throw of null."}}
P.aM.prototype={
gbW:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbV:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbW()+o+u
if(!q.a)return t
s=q.gbV()
r=P.dy(q.b)
return t+s+": "+r}}
P.c4.prototype={
gbW:function(){return"RangeError"},
gbV:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.h7.prototype={
gbW:function(){return"RangeError"},
gbV:function(){var u,t=H.aj(this.b)
if(typeof t!=="number")return t.X()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gl:function(a){return this.f}}
P.iU.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iR.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c6.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fA.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dy(u)+"."}}
P.hQ.prototype={
i:function(a){return"Out of Memory"},
$ibE:1}
P.e0.prototype={
i:function(a){return"Stack Overflow"},
$ibE:1}
P.fH.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.es.prototype={
i:function(a){return"Exception: "+this.a}}
P.h0.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.C(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.G(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.a_(f,q)
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
return h+l+j+k+"\n"+C.b.u(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.l(g)+")"):h}}
P.bF.prototype={}
P.p.prototype={}
P.i.prototype={
bM:function(a,b){var u=H.as(this,"i",0)
return new H.d_(this,H.n(b,{func:1,ret:P.U,args:[u]}),[u])},
gl:function(a){var u,t=this.gV(this)
for(u=0;t.E();)++u
return u},
gaK:function(a){var u,t=this.gV(this)
if(!t.E())throw H.c(H.h8())
u=t.gM(t)
if(t.E())throw H.c(H.ny())
return u},
L:function(a,b){var u,t,s
P.l_(b,"index")
for(u=this.gV(this),t=0;u.E();){s=u.gM(u)
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
i:function(a){return P.nw(this,"(",")")}}
P.b3.prototype={}
P.b.prototype={$ii:1}
P.H.prototype={}
P.N.prototype={
gK:function(a){return P.S.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.ab.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
v:function(a,b){return this===b},
gK:function(a){return H.cI(this)},
i:function(a){return"Instance of '"+H.c2(this)+"'"},
toString:function(){return this.i(this)}}
P.av.prototype={}
P.e.prototype={$ilR:1}
P.ah.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipo:1}
P.iZ.prototype={
$2:function(a,b){var u,t,s,r=P.e
H.k(a,"$iH",[r,r],"$aH")
H.I(b)
u=J.dh(b).ek(b,"=")
if(u===-1){if(b!=="")J.kM(a,P.la(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.C(b,0,u)
s=C.b.ap(b,u+1)
r=this.a
J.kM(a,P.la(t,0,t.length,r,!0),P.la(s,0,s.length,r,!0))}return a},
$S:45}
P.iW.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.iX.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.iY.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fi(C.b.C(this.b,a,b),null,16)
if(typeof u!=="number")return u.X()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.c9.prototype={
geS:function(){return this.b},
gcI:function(a){var u=this.c
if(u==null)return""
if(C.b.a4(u,"["))return C.b.C(u,1,u.length-1)
return u},
gbH:function(a){var u=this.d
if(u==null)return P.mi(this.a)
return u},
gcS:function(a){var u=this.f
return u==null?"":u},
gef:function(){var u=this.r
return u==null?"":u},
eE:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.k(b,"$iH",[P.e,null],"$aH")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a4(p,"/"))p="/"+p
n=P.l9(null,0,0,b)
return new P.c9(u,s,q,r,p,n,m.r)},
gcT:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.e
s.shW(new P.ed(P.m7(u==null?"":u),[t,t]))}return s.Q},
geg:function(){return this.c!=null},
gej:function(){return this.f!=null},
geh:function(){return this.r!=null},
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
if(!!J.Z(b).$il4)if(s.a==b.gbP())if(s.c!=null===b.geg())if(s.b==b.geS())if(s.gcI(s)==b.gcI(b))if(s.gbH(s)==b.gbH(b))if(s.e===b.gey(b)){u=s.f
t=u==null
if(!t===b.gej()){if(t)u=""
if(u===b.gcS(b)){u=s.r
t=u==null
if(!t===b.geh()){if(t)u=""
u=u===b.gef()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gK:function(a){var u=this.z
return u==null?this.z=C.b.gK(this.i(0)):u},
shW:function(a){var u=P.e
this.Q=H.k(a,"$iH",[u,u],"$aH")},
$il4:1,
gbP:function(){return this.a},
gey:function(a){return this.e}}
P.k2.prototype={
$1:function(a){throw H.c(P.a7("Invalid port",this.a,this.b+1))},
$S:40}
P.k3.prototype={
$1:function(a){return P.f3(C.a_,a,C.l,!1)},
$S:16}
P.k5.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.f3(C.q,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.f3(C.q,b,C.l,!0))}},
$S:14}
P.k4.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.by(H.mH(b,"$ii")),t=this.a;u.E();)t.$2(a,H.I(u.gM(u)))},
$S:39}
P.iV.prototype={
geR:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.h(o,0)
u=q.a
o=o[0]+1
t=C.b.el(u,"?",o)
s=u.length
if(t>=0){r=P.dd(u,t+1,s,C.o,!1)
s=t}else r=p
return q.c=new P.jq("data",p,p,p,P.dd(u,o,s,C.E,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.h(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kd.prototype={
$1:function(a){return new Uint8Array(96)},
$S:37}
P.kc.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.ne(u,0,96,b)
return u},
$S:35}
P.ke.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.G(b,s)^96
if(r>=t)return H.h(a,r)
a[r]=c}}}
P.kf.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.G(b,0),t=C.b.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.h(a,r)
a[r]=c}}}
P.jR.prototype={
geg:function(){return this.c>0},
gei:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.q()
t=this.e
if(typeof t!=="number")return H.C(t)
t=u+1<t
u=t}else u=!1
return u},
gej:function(){var u=this.f
if(typeof u!=="number")return u.X()
return u<this.r},
geh:function(){return this.r<this.a.length},
gdr:function(){return this.b===4&&C.b.a4(this.a,"http")},
gds:function(){return this.b===5&&C.b.a4(this.a,"https")},
gbP:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdr())q=t.x="http"
else if(t.gds()){t.x="https"
q="https"}else if(q===4&&C.b.a4(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a4(t.a,r)){t.x=r
q=r}else{q=C.b.C(t.a,0,q)
t.x=q}return q},
geS:function(){var u=this.c,t=this.b+3
return u>t?C.b.C(this.a,t,u-1):""},
gcI:function(a){var u=this.c
return u>0?C.b.C(this.a,u,this.d):""},
gbH:function(a){var u,t=this
if(t.gei()){u=t.d
if(typeof u!=="number")return u.q()
return P.fi(C.b.C(t.a,u+1,t.e),null,null)}if(t.gdr())return 80
if(t.gds())return 443
return 0},
gey:function(a){return C.b.C(this.a,this.e,this.f)},
gcS:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.X()
return u<t?C.b.C(this.a,u+1,t):""},
gef:function(){var u=this.r,t=this.a
return u<t.length?C.b.ap(t,u+1):""},
gcT:function(){var u=this,t=u.f
if(typeof t!=="number")return t.X()
if(t>=u.r)return C.a0
t=P.e
return new P.ed(P.m7(u.gcS(u)),[t,t])},
eE:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.k(b,"$iH",[P.e,null],"$aH")
u=k.gbP()
t=u==="file"
s=k.c
r=s>0?C.b.C(k.a,k.b+3,s):""
q=k.gei()?k.gbH(k):j
s=k.c
if(s>0)p=C.b.C(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.C(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a4(o,"/"))o="/"+o
m=P.l9(j,0,0,b)
n=k.r
l=n<s.length?C.b.ap(s,n+1):j
return new P.c9(u,r,p,q,o,m,l)},
gK:function(a){var u=this.y
return u==null?this.y=C.b.gK(this.a):u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Z(b).$il4&&this.a===b.i(0)},
i:function(a){return this.a},
$il4:1}
P.jq.prototype={}
W.x.prototype={}
W.fk.prototype={
gl:function(a){return a.length}}
W.dl.prototype={
i:function(a){return String(a)},
$idl:1}
W.fl.prototype={
i:function(a){return String(a)}}
W.cm.prototype={$icm:1}
W.bS.prototype={$ibS:1}
W.bz.prototype={$ibz:1}
W.bT.prototype={
eV:function(a,b,c){var u=a.getContext(b,P.oL(c))
return u},
$ibT:1}
W.bA.prototype={
gl:function(a){return a.length}}
W.cq.prototype={$icq:1}
W.fD.prototype={
gl:function(a){return a.length}}
W.a_.prototype={$ia_:1}
W.cr.prototype={
gl:function(a){return a.length}}
W.fE.prototype={}
W.b0.prototype={}
W.b1.prototype={}
W.fF.prototype={
gl:function(a){return a.length}}
W.fG.prototype={
gl:function(a){return a.length}}
W.fJ.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.fK.prototype={
i:function(a){return String(a)}}
W.dv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$ial",[P.ab],"$aal")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.al,P.ab]]},
$az:function(){return[[P.al,P.ab]]},
$ii:1,
$ai:function(){return[[P.al,P.ab]]},
$ib:1,
$ab:function(){return[[P.al,P.ab]]},
$aG:function(){return[[P.al,P.ab]]}}
W.dw.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaJ(a))+" x "+H.l(this.gaF(a))},
v:function(a,b){var u
if(b==null)return!1
u=J.Z(b)
if(!u.$ial)return!1
return a.left===u.gbG(b)&&a.top===u.gbK(b)&&this.gaJ(a)===u.gaJ(b)&&this.gaF(a)===u.gaF(b)},
gK:function(a){return W.mg(C.e.gK(a.left),C.e.gK(a.top),C.e.gK(this.gaJ(a)),C.e.gK(this.gaF(a)))},
gdQ:function(a){return a.bottom},
gaF:function(a){return a.height},
gbG:function(a){return a.left},
gbJ:function(a){return a.right},
gbK:function(a){return a.top},
gaJ:function(a){return a.width},
$ial:1,
$aal:function(){return[P.ab]}}
W.fL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.I(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.e]},
$az:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aG:function(){return[P.e]}}
W.fM.prototype={
gl:function(a){return a.length}}
W.jo.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.f(u[b],"$iW")},
n:function(a,b,c){var u
H.f(c,"$iW")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.jX(this)
return new J.ax(u,u.length,[H.u(u,0)])},
$az:function(){return[W.W]},
$ai:function(){return[W.W]},
$ab:function(){return[W.W]}}
W.W.prototype={
gj1:function(a){return new W.jr(a)},
gcu:function(a){return new W.jo(a,a.children)},
gdR:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.X()
if(s<0)s=-s*0
if(typeof r!=="number")return r.X()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.ab])},
i:function(a){return a.localName},
ad:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lG
if(u==null){u=H.d([],[W.aB])
t=new W.dQ(u)
C.a.h(u,W.mf(null))
C.a.h(u,W.mh())
$.lG=t
d=t}else d=u
u=$.lF
if(u==null){u=new W.f4(d)
$.lF=u
c=u}else{u.a=d
c=u}}if($.bk==null){u=document
t=u.implementation.createHTMLDocument("")
$.bk=t
$.kS=t.createRange()
t=$.bk.createElement("base")
H.f(t,"$icm")
t.href=u.baseURI
$.bk.head.appendChild(t)}u=$.bk
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibz")}u=$.bk
if(!!this.$ibz)s=u.body
else{s=u.createElement(a.tagName)
$.bk.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Z(C.Y,a.tagName)){$.kS.selectNodeContents(s)
r=$.kS.createContextualFragment(b)}else{s.innerHTML=b
r=$.bk.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bk.body
if(s==null?u!=null:s!==u)J.lw(s)
c.d0(r)
document.adoptNode(r)
return r},
j9:function(a,b,c){return this.ad(a,b,c,null)},
eY:function(a,b){a.textContent=null
a.appendChild(this.ad(a,b,null,null))},
$iW:1,
geI:function(a){return a.tagName}}
W.fQ.prototype={
$1:function(a){return!!J.Z(H.f(a,"$iE")).$iW},
$S:21}
W.o.prototype={$io:1}
W.j.prototype={
iU:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fv(a,b,c,!1)},
fv:function(a,b,c,d){return a.addEventListener(b,H.cd(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ij:1}
W.aF.prototype={$iaF:1}
W.cu.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaF")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aF]},
$az:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$icu:1,
$aG:function(){return[W.aF]}}
W.fW.prototype={
gl:function(a){return a.length}}
W.h_.prototype={
gl:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.h4.prototype={
gl:function(a){return a.length}}
W.bY.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iE")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.E]},
$az:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibY:1,
$aG:function(){return[W.E]}}
W.cx.prototype={$icx:1}
W.cy.prototype={$icy:1}
W.b4.prototype={$ib4:1}
W.dG.prototype={
i:function(a){return String(a)},
$idG:1}
W.hy.prototype={
gl:function(a){return a.length}}
W.cB.prototype={$icB:1}
W.hz.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga6:function(a){var u=H.d([],[P.e])
this.N(a,new W.hA(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
W.hA.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hB.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga6:function(a){var u=H.d([],[P.e])
this.N(a,new W.hC(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
W.hC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aR.prototype={$iaR:1}
W.hD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aR]},
$az:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aG:function(){return[W.aR]}}
W.af.prototype={$iaf:1}
W.ar.prototype={
gaK:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lZ("No elements"))
if(t>1)throw H.c(P.lZ("More than one element"))
return u.firstChild},
as:function(a,b){var u,t,s,r
H.k(b,"$ii",[W.E],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
n:function(a,b,c){var u,t
H.f(c,"$iE")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dz(u,u.length,[H.bP(C.a1,u,"G",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$az:function(){return[W.E]},
$ai:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
jN:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jR:function(a,b){var u,t
try{u=a.parentNode
J.nb(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.f_(a):u},
j_:function(a,b){return a.appendChild(H.f(b,"$iE"))},
i0:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.cG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iE")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.E]},
$az:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aG:function(){return[W.E]}}
W.aS.prototype={$iaS:1,
gl:function(a){return a.length}}
W.hT.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaS")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aS]},
$az:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aG:function(){return[W.aS]}}
W.i2.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga6:function(a){var u=H.d([],[P.e])
this.N(a,new W.i3(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
W.i3.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.i5.prototype={
gl:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.ig.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aT]},
$az:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aG:function(){return[W.aT]}}
W.aU.prototype={$iaU:1}
W.ih.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aU]},
$az:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aG:function(){return[W.aU]}}
W.aV.prototype={$iaV:1,
gl:function(a){return a.length}}
W.ik.prototype={
j:function(a,b){return a.getItem(H.I(b))},
n:function(a,b,c){a.setItem(b,c)},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga6:function(a){var u=H.d([],[P.e])
this.N(a,new W.il(u))
return u},
gl:function(a){return a.length},
$aae:function(){return[P.e,P.e]},
$iH:1,
$aH:function(){return[P.e,P.e]}}
W.il.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:14}
W.aG.prototype={$iaG:1}
W.ba.prototype={$iba:1}
W.e1.prototype={
ad:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bQ(a,b,c,d)
u=W.nr("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).as(0,new W.ar(u))
return t}}
W.is.prototype={
ad:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bQ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaK(u)
s.toString
u=new W.ar(s)
r=u.gaK(u)
t.toString
r.toString
new W.ar(t).as(0,new W.ar(r))
return t}}
W.it.prototype={
ad:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bQ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaK(u)
t.toString
s.toString
new W.ar(t).as(0,new W.ar(s))
return t}}
W.cO.prototype={$icO:1}
W.aW.prototype={$iaW:1}
W.aH.prototype={$iaH:1}
W.iv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaH")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aH]},
$az:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aG:function(){return[W.aH]}}
W.iw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$az:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aG:function(){return[W.aW]}}
W.iy.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.aY.prototype={$iaY:1}
W.iC.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaX")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aX]},
$az:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aG:function(){return[W.aX]}}
W.iD.prototype={
gl:function(a){return a.length}}
W.bL.prototype={}
W.j_.prototype={
i:function(a){return String(a)}}
W.jf.prototype={
gl:function(a){return a.length}}
W.bf.prototype={
gjc:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
gjb:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibf:1}
W.d0.prototype={
i1:function(a,b){return a.requestAnimationFrame(H.cd(H.n(b,{func:1,ret:-1,args:[P.ab]}),1))},
fM:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d1.prototype={$id1:1}
W.jp.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$ia_")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.a_]},
$az:function(){return[W.a_]},
$ii:1,
$ai:function(){return[W.a_]},
$ib:1,
$ab:function(){return[W.a_]},
$aG:function(){return[W.a_]}}
W.en.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.Z(b)
if(!u.$ial)return!1
return a.left===u.gbG(b)&&a.top===u.gbK(b)&&a.width===u.gaJ(b)&&a.height===u.gaF(b)},
gK:function(a){return W.mg(C.e.gK(a.left),C.e.gK(a.top),C.e.gK(a.width),C.e.gK(a.height))},
gaF:function(a){return a.height},
gaJ:function(a){return a.width}}
W.jE.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaO")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aO]},
$az:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aG:function(){return[W.aO]}}
W.eF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iE")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.E]},
$az:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aG:function(){return[W.E]}}
W.jS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$az:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aG:function(){return[W.aV]}}
W.jW.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaG")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aG]},
$az:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aG:function(){return[W.aG]}}
W.jn.prototype={
N:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.ga6(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga6:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.e])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.h(r,t)
s=H.f(r[t],"$id1")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aae:function(){return[P.e,P.e]},
$aH:function(){return[P.e,P.e]}}
W.jr.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
n:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga6(this).length}}
W.js.prototype={}
W.l7.prototype={}
W.jt.prototype={}
W.ju.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:34}
W.bN.prototype={
fd:function(a){var u
if($.d3.gjs($.d3)){for(u=0;u<262;++u)$.d3.n(0,C.X[u],W.oW())
for(u=0;u<12;++u)$.d3.n(0,C.v[u],W.oX())}},
aT:function(a){return $.n5().Z(0,W.cs(a))},
at:function(a,b,c){var u=$.d3.j(0,H.l(W.cs(a))+"::"+b)
if(u==null)u=$.d3.j(0,"*::"+b)
if(u==null)return!1
return H.lf(u.$4(a,b,c,this))},
$iaB:1}
W.G.prototype={
gV:function(a){return new W.dz(a,this.gl(a),[H.bP(this,a,"G",0)])}}
W.dQ.prototype={
aT:function(a){return C.a.dN(this.a,new W.hL(a))},
at:function(a,b,c){return C.a.dN(this.a,new W.hK(a,b,c))},
$iaB:1}
W.hL.prototype={
$1:function(a){return H.f(a,"$iaB").aT(this.a)},
$S:24}
W.hK.prototype={
$1:function(a){return H.f(a,"$iaB").at(this.a,this.b,this.c)},
$S:24}
W.eN.prototype={
fo:function(a,b,c,d){var u,t,s
this.a.as(0,c)
u=b.bM(0,new W.jP())
t=b.bM(0,new W.jQ())
this.b.as(0,u)
s=this.c
s.as(0,C.B)
s.as(0,t)},
aT:function(a){return this.a.Z(0,W.cs(a))},
at:function(a,b,c){var u=this,t=W.cs(a),s=u.c
if(s.Z(0,H.l(t)+"::"+b))return u.d.iY(c)
else if(s.Z(0,"*::"+b))return u.d.iY(c)
else{s=u.b
if(s.Z(0,H.l(t)+"::"+b))return!0
else if(s.Z(0,"*::"+b))return!0
else if(s.Z(0,H.l(t)+"::*"))return!0
else if(s.Z(0,"*::*"))return!0}return!1},
$iaB:1}
W.jP.prototype={
$1:function(a){return!C.a.Z(C.v,H.I(a))},
$S:25}
W.jQ.prototype={
$1:function(a){return C.a.Z(C.v,H.I(a))},
$S:25}
W.jY.prototype={
at:function(a,b,c){if(this.f4(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.Z(0,b)
return!1}}
W.jZ.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.I(a))},
$S:16}
W.jX.prototype={
aT:function(a){var u=J.Z(a)
if(!!u.$icJ)return!1
u=!!u.$iq
if(u&&W.cs(a)==="foreignObject")return!1
if(u)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.b.a4(b,"on"))return!1
return this.aT(a)},
$iaB:1}
W.dz.prototype={
E:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdq(J.lt(u.a,t))
u.c=t
return!0}u.sdq(null)
u.c=s
return!1},
gM:function(a){return this.d},
sdq:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
W.aB.prototype={}
W.jN.prototype={$ipA:1}
W.f4.prototype={
d0:function(a){new W.k8(this).$2(a,null)},
b0:function(a,b){if(b==null)J.lw(a)
else b.removeChild(a)},
i5:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nf(a)
n=o.a.getAttribute("is")
H.f(a,"$iW")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.D(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ak(r)}t="element unprintable"
try{t=J.at(a)}catch(r){H.ak(r)}try{s=W.cs(a)
this.i4(H.f(a,"$iW"),b,p,t,s,H.f(o,"$iH"),H.I(n))}catch(r){if(H.ak(r) instanceof P.aM)throw r
else{this.b0(a,b)
window
q="Removing corrupted element "+H.l(t)
if(typeof console!="undefined")window.console.warn(q)}}},
i4:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b0(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aT(a)){o.b0(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.at(a,"is",g)){o.b0(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga6(f)
t=H.d(u.slice(0),[H.u(u,0)])
for(s=f.ga6(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.h(t,s)
r=t[s]
q=o.a
p=J.ni(r)
H.I(r)
if(!q.at(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.l(e)+" "+r+'="'+H.l(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Z(a).$icO)o.d0(a.content)},
$ipl:1}
W.k8.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.i5(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b0(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ak(s)
r=H.f(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iE")}},
$S:44}
W.em.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eT.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.da.prototype={}
W.db.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
P.jT.prototype={
ed:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cZ:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.Z(a)
if(!!u.$iay)return new Date(a.a)
if(!!u.$inW)throw H.c(P.iS("structured clone of RegExp"))
if(!!u.$iaF)return a
if(!!u.$ibS)return a
if(!!u.$icu)return a
if(!!u.$icx)return a
if(!!u.$icD||!!u.$ibI||!!u.$icB)return a
if(!!u.$iH){t=q.ed(a)
s=q.b
if(t>=s.length)return H.h(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.n(s,t,r)
u.N(a,new P.jV(p,q))
return p.a}if(!!u.$ib){t=q.ed(a)
p=q.b
if(t>=p.length)return H.h(p,t)
r=p[t]
if(r!=null)return r
return q.j8(a,t)}throw H.c(P.iS("structured clone of other type"))},
j8:function(a,b){var u,t=J.cg(a),s=t.gl(a),r=new Array(s)
C.a.n(this.b,b,r)
for(u=0;u<s;++u)C.a.n(r,u,this.cZ(t.j(a,u)))
return r}}
P.jV.prototype={
$2:function(a,b){this.a.a[a]=this.b.cZ(b)},
$S:7}
P.kj.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.jU.prototype={}
P.fX.prototype={
gbl:function(){var u=this.b,t=H.as(u,"z",0),s=W.W
return new H.hp(new H.d_(u,H.n(new P.fY(),{func:1,ret:P.U,args:[t]}),[t]),H.n(new P.fZ(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.f(c,"$iW")
u=this.gbl()
J.ng(u.b.$1(J.fj(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aD(this.gbl().a)},
j:function(a,b){var u=this.gbl()
return u.b.$1(J.fj(u.a,b))},
gV:function(a){var u=P.lK(this.gbl(),!1,W.W)
return new J.ax(u,u.length,[H.u(u,0)])},
$az:function(){return[W.W]},
$ai:function(){return[W.W]},
$ab:function(){return[W.W]}}
P.fY.prototype={
$1:function(a){return!!J.Z(H.f(a,"$iE")).$iW},
$S:21}
P.fZ.prototype={
$1:function(a){return H.m(H.f(a,"$iE"),"$iW")},
$S:33}
P.jI.prototype={
gbJ:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.C(t)
return H.A(u+t,H.u(this,0))},
gdQ:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.C(t)
return H.A(u+t,H.u(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
v:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.Z(b)
if(!!u.$ial){t=p.a
if(t==u.gbG(b)){s=p.b
if(s==u.gbK(b)){r=p.c
if(typeof t!=="number")return t.q()
if(typeof r!=="number")return H.C(r)
q=H.u(p,0)
if(H.A(t+r,q)===u.gbJ(b)){t=p.d
if(typeof s!=="number")return s.q()
if(typeof t!=="number")return H.C(t)
u=H.A(s+t,q)===u.gdQ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u,t=this,s=t.a,r=J.dk(s),q=t.b,p=J.dk(q),o=t.c
if(typeof s!=="number")return s.q()
if(typeof o!=="number")return H.C(o)
u=H.u(t,0)
o=C.f.gK(H.A(s+o,u))
s=t.d
if(typeof q!=="number")return q.q()
if(typeof s!=="number")return H.C(s)
u=C.f.gK(H.A(q+s,u))
return P.oh(P.jG(P.jG(P.jG(P.jG(0,r),p),o),u))}}
P.al.prototype={
gbG:function(a){return this.a},
gbK:function(a){return this.b},
gaJ:function(a){return this.c},
gaF:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.he.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.f(c,"$ib5")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.b5]},
$ii:1,
$ai:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aG:function(){return[P.b5]}}
P.b8.prototype={$ib8:1}
P.hO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.f(c,"$ib8")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aG:function(){return[P.b8]}}
P.hV.prototype={
gl:function(a){return a.length}}
P.cJ.prototype={$icJ:1}
P.ir.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.I(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aG:function(){return[P.e]}}
P.q.prototype={
gcu:function(a){return new P.fX(a,new W.ar(a))},
ad:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aB])
C.a.h(p,W.mf(null))
C.a.h(p,W.mh())
C.a.h(p,new W.jX())
c=new W.f4(new W.dQ(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.x).j9(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ar(s)
q=p.gaK(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bc.prototype={$ibc:1}
P.iE.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.f(c,"$ibc")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aG:function(){return[P.bc]}}
P.ex.prototype={}
P.ey.prototype={}
P.eI.prototype={}
P.eJ.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.f0.prototype={}
P.f1.prototype={}
P.T.prototype={$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
P.fp.prototype={
gl:function(a){return a.length}}
P.fq.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga6:function(a){var u=H.d([],[P.e])
this.N(a,new P.fr(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
P.fr.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fs.prototype={
gl:function(a){return a.length}}
P.bR.prototype={}
P.hP.prototype={
gl:function(a){return a.length}}
P.el.prototype={}
P.dn.prototype={$idn:1}
P.dU.prototype={$idU:1}
P.c5.prototype={
T:function(a,b,c){return a.uniform1f(b,c)},
a3:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eP:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eQ:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic5:1}
P.dY.prototype={$idY:1}
P.eb.prototype={$ieb:1}
P.ii.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return P.br(a.item(b))},
n:function(a,b,c){H.f(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[[P.H,,,]]},
$ii:1,
$ai:function(){return[[P.H,,,]]},
$ib:1,
$ab:function(){return[[P.H,,,]]},
$aG:function(){return[[P.H,,,]]}}
P.eQ.prototype={}
P.eR.prototype={}
O.a6.prototype={
bS:function(a){var u=this
u.sfX(H.d([],[a]))
u.sdz(null)
u.sdu(null)
u.sdA(null)},
d1:function(a,b,c){var u=this,t=H.as(u,"a6",0)
H.n(b,{func:1,ret:P.U,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.p,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdz(b)
u.sdu(a)
u.sdA(c)},
bh:function(a,b){return this.d1(a,null,b)},
hH:function(a){var u
H.k(a,"$ii",[H.as(this,"a6",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fb:function(a,b){var u
H.k(b,"$ii",[H.as(this,"a6",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.ax(u,u.length,[H.u(u,0)])},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.as(s,"a6",0)
H.A(b,r)
r=[r]
if(H.D(s.hH(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.fb(t,H.d([b],r))}},
sfX:function(a){this.a=H.k(a,"$ib",[H.as(this,"a6",0)],"$ab")},
sdz:function(a){this.b=H.n(a,{func:1,ret:P.U,args:[[P.i,H.as(this,"a6",0)]]})},
sdu:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.as(this,"a6",0)]]})},
sdA:function(a){H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.as(this,"a6",0)]]})},
$ii:1}
O.cA.prototype={
gl:function(a){return this.a.length},
gD:function(){var u=this.b
return u==null?this.b=D.X():u},
aL:function(){var u=this.b
if(u!=null)u.H(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.a.gaw(u)
else return V.dM()},
eB:function(a){var u=this.a
if(a==null)C.a.h(u,V.dM())
else C.a.h(u,a)
this.aL()},
cR:function(){var u=this.a
if(u.length>0){u.pop()
this.aL()}},
sc0:function(a){this.a=H.k(a,"$ib",[V.ao],"$ab")}}
E.fv.prototype={}
E.an.prototype={
sai:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gD().P(0,s.gev())
u=s.c
if(u!=null)u.gD().h(0,s.gev())
t=new D.O("shape",r,s.c,[F.dZ])
t.b=!0
s.aH(t)}},
sb9:function(a){var u,t,s=this
if(!J.V(s.r,a)){u=s.r
if(u!=null)u.gD().P(0,s.ges())
if(a!=null)a.gD().h(0,s.ges())
s.r=a
t=new D.O("mover",u,a,[U.ac])
t.b=!0
s.aH(t)}},
ax:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.V(q,s.x)){u=s.x
s.x=q
t=new D.O("matrix",u,q,[V.ao])
t.b=!0
s.aH(t)}for(r=s.y.a,r=new J.ax(r,r.length,[H.u(r,0)]);r.E();)r.d.ax(0,b)},
aW:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga0(s))
else C.a.h(s.a,r.u(0,s.ga0(s)))
s.aL()
a.eC(t.f)
s=a.dy
u=(s&&C.a).gaw(s)
if(u!=null&&t.d!=null)u.jQ(a,t)
for(s=t.y.a,s=new J.ax(s,s.length,[H.u(s,0)]);s.E();)s.d.aW(a)
a.eA()
a.dx.cR()},
gD:function(){var u=this.z
return u==null?this.z=D.X():u},
aH:function(a){var u=this.z
if(u!=null)u.H(a)},
a2:function(){return this.aH(null)},
ew:function(a){H.f(a,"$iB")
this.e=null
this.aH(a)},
jE:function(){return this.ew(null)},
eu:function(a){this.aH(H.f(a,"$iB"))},
jD:function(){return this.eu(null)},
er:function(a){this.aH(H.f(a,"$iB"))},
jA:function(){return this.er(null)},
jz:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.an],"$ai")
for(u=b.length,t=this.geq(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bW()
o.saj(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
jC:function(a,b){var u,t
H.k(b,"$ii",[E.an],"$ai")
for(u=b.gV(b),t=this.geq();u.E();)u.gM(u).gD().P(0,t)
this.a2()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfc:function(a,b){this.y=H.k(b,"$ia6",[E.an],"$aa6")},
$ibp:1}
E.hZ.prototype={
f7:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cA()
t=[V.ao]
u.sc0(H.d([],t))
u.b=null
u.gD().h(0,new E.i_(s))
s.cy=u
u=new O.cA()
u.sc0(H.d([],t))
u.b=null
u.gD().h(0,new E.i0(s))
s.db=u
u=new O.cA()
u.sc0(H.d([],t))
u.b=null
u.gD().h(0,new E.i1(s))
s.dx=u
s.sii(H.d([],[O.c7]))
u=s.dy;(u&&C.a).h(u,null)
s.sic(new H.aQ([P.e,A.cK]))},
gjM:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.u(0,u.ga0(u))
s=u}return s},
eC:function(a){var u=this.dy,t=a==null?(u&&C.a).gaw(u):a;(u&&C.a).h(u,t)},
eA:function(){var u=this.dy
if(u.length>1)u.pop()},
sii:function(a){this.dy=H.k(a,"$ib",[O.c7],"$ab")},
sic:function(a){this.fr=H.k(a,"$iH",[P.e,A.cK],"$aH")}}
E.i_.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:5}
E.i0.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:5}
E.i1.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:5}
E.e7.prototype={
d6:function(a){H.f(a,"$iB")
this.eF()},
d5:function(){return this.d6(null)},
gjn:function(){var u,t=this,s=Date.now(),r=C.f.a5(P.lE(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
dD:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.C(r)
u=C.e.ee(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.e.ee(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.m1(C.t,s.gjS())}},
eF:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.ix(this),{func:1,ret:-1,args:[P.ab]})
C.I.fM(u)
C.I.i1(u,W.mw(t,P.ab))}},
jP:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dD()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lE(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aL()
r=s.db
C.a.sl(r.a,0)
r.aL()
r=s.dx
C.a.sl(r.a,0)
r.aL()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.aW(p.e)}s=p.z
if(s!=null)s.H(null)}catch(q){u=H.ak(q)
t=H.ci(q)
P.ln("Error: "+H.l(u))
P.ln("Stack: "+H.l(t))
throw H.c(u)}}}
E.ix.prototype={
$1:function(a){var u
H.p6(a)
u=this.a
if(u.ch){u.ch=!1
u.jP()}},
$S:53}
Z.ej.prototype={$ipf:1}
Z.dp.prototype={
bo:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ak(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.jg.prototype={$ipg:1}
Z.dq.prototype={
aV:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bo:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bo(a)},
eO:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aW:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.e],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.at(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfT:function(a){this.b=H.k(a,"$ib",[Z.bG],"$ab")},
$ipp:1}
Z.bG.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c2(this.c)+"'")+"]"}}
Z.be.prototype={
gd2:function(a){var u=this.a,t=(u&$.bv().a)!==0?3:0
if((u&$.bu().a)!==0)t+=3
if((u&$.bt().a)!==0)t+=3
if((u&$.bw().a)!==0)t+=2
if((u&$.bx().a)!==0)t+=3
if((u&$.di().a)!==0)t+=3
if((u&$.dj().a)!==0)t+=4
if((u&$.cl().a)!==0)++t
return(u&$.bs().a)!==0?t+4:t},
j0:function(a){var u,t=$.bv(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.di()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0)if(u===a)return t
return $.n3()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.be))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.e]),t=this.a
if((t&$.bv().a)!==0)C.a.h(u,"Pos")
if((t&$.bu().a)!==0)C.a.h(u,"Norm")
if((t&$.bt().a)!==0)C.a.h(u,"Binm")
if((t&$.bw().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bx().a)!==0)C.a.h(u,"TxtCube")
if((t&$.di().a)!==0)C.a.h(u,"Clr3")
if((t&$.dj().a)!==0)C.a.h(u,"Clr4")
if((t&$.cl().a)!==0)C.a.h(u,"Weight")
if((t&$.bs().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fy.prototype={}
D.bW.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.saj(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
P:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=s.a
t=(u&&C.a).P(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=s.b
t=(u&&C.a).P(u,b)||t}return t},
H:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.N(P.lK(u,!0,{func:1,ret:-1,args:[D.B]}),new D.fT(q))
u=r.b
if(u!=null){r.saQ(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.N(u,new D.fU(q))}return!0},
ag:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.H(u)}}},
saj:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saQ:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.fT.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.fU.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.B.prototype={}
D.bZ.prototype={}
D.c_.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.dr.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dr))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dD.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dD))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.hd.prototype={
jJ:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jF:function(a){this.c=a.b
this.d.P(0,a.a)
return!1},
shV:function(a){this.d=H.k(a,"$ilY",[P.p],"$alY")}}
X.dH.prototype={}
X.hl.prototype={
aZ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.aa(o.a+n*m,o.b+u*t)
t=q.a.gaU()
r=new X.bo(a,V.bK(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cQ:function(a,b){this.r=a.a
return!1},
bb:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eX()
if(typeof u!=="number")return u.bN()
this.r=(u&~t)>>>0
return!1},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.aZ(a,b))
return!0},
jK:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaU()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.cC(new V.Y(s*r,q*p),u,t)
t.b=!0
n.H(t)
return!0},
hw:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dH(c,r.a.gaU(),b)
s.b=!0
t.H(s)
r.y=new P.ay(u,!1)
r.x=V.bK()}}
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
u+=H.D(this.b)?"Alt+":""
return u+(H.D(this.c)?"Shift+":"")}}
X.bo.prototype={}
X.hE.prototype={
bY:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gaU(),r=new X.bo(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cQ:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.H(this.bY(a,b,!0))
return!0},
bb:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eX()
if(typeof t!=="number")return t.bN()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.H(u.bY(a,b,!0))
return!0},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.bY(a,b,!1))
return!0},
jL:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaU()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.cC(new V.Y(t*s,r*q),u,b)
u.b=!0
o.H(u)
return!0},
gdS:function(){var u=this.b
return u==null?this.b=D.X():u},
gbL:function(){var u=this.c
return u==null?this.c=D.X():u},
geo:function(){var u=this.d
return u==null?this.d=D.X():u}}
X.cC.prototype={}
X.hU.prototype={}
X.e9.prototype={}
X.iB.prototype={
aZ:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.aa],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bK()
s=q.a.gaU()
r=new X.e9(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jI:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.H(this.aZ(a,!0))
return!0},
jG:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.H(this.aZ(a,!0))
return!0},
jH:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.H(this.aZ(a,!1))
return!0}}
X.ee.prototype={
gaU:function(){var u=this.a,t=C.r.gdR(u).c
t.toString
u=C.r.gdR(u).d
u.toString
return V.lW(0,0,t,u)},
dj:function(a){var u=a.keyCode,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dD(u,new X.aA(t,a.altKey,a.shiftKey))},
aR:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
ci:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
aD:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.t()
u=t.top
if(typeof r!=="number")return r.t()
return new V.aa(s-q,r-u)},
b_:function(a){return new V.Y(a.movementX,a.movementY)},
cb:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.aa])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
q=C.e.an(r.pageX)
C.e.an(r.pageY)
p=o.left
C.e.an(r.pageX)
C.a.h(n,new V.aa(q-p,C.e.an(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dr(u,new X.aA(t,a.altKey,a.shiftKey))},
c1:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.t()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.t()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hq:function(a){this.f=!0},
hc:function(a){this.f=!1},
hk:function(a){H.f(a,"$iaf")
if(H.D(this.f)&&this.c1(a))a.preventDefault()},
hu:function(a){var u
H.f(a,"$ib4")
if(!H.D(this.f))return
u=this.dj(a)
this.b.jJ(u)},
hs:function(a){var u
H.f(a,"$ib4")
if(!H.D(this.f))return
u=this.dj(a)
this.b.jF(u)},
hy:function(a){var u,t,s,r,q=this
H.f(a,"$iaf")
u=q.a
u.focus()
q.f=!0
q.aR(a)
if(H.D(q.x)){t=q.aB(a)
s=q.b_(a)
if(q.d.cQ(t,s))a.preventDefault()
return}if(H.D(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aB(a)
r=q.aD(a)
if(q.c.cQ(t,r))a.preventDefault()},
hC:function(a){var u,t,s,r=this
H.f(a,"$iaf")
r.aR(a)
u=r.aB(a)
if(H.D(r.x)){t=r.b_(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aD(a)
if(r.c.bb(u,s))a.preventDefault()},
ho:function(a){var u,t,s,r=this
H.f(a,"$iaf")
if(!r.c1(a)){r.aR(a)
u=r.aB(a)
if(H.D(r.x)){t=r.b_(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aD(a)
if(r.c.bb(u,s))a.preventDefault()}},
hA:function(a){var u,t,s,r=this
H.f(a,"$iaf")
r.aR(a)
u=r.aB(a)
if(H.D(r.x)){t=r.b_(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aD(a)
if(r.c.ba(u,s))a.preventDefault()},
hm:function(a){var u,t,s,r=this
H.f(a,"$iaf")
if(!r.c1(a)){r.aR(a)
u=r.aB(a)
if(H.D(r.x)){t=r.b_(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aD(a)
if(r.c.ba(u,s))a.preventDefault()}},
hE:function(a){var u,t,s=this
H.f(a,"$ibf")
s.aR(a)
u=new V.Y((a&&C.H).gjb(a),C.H.gjc(a)).A(0,180)
if(H.D(s.x)){if(s.d.jK(u))a.preventDefault()
return}if(H.D(s.r))return
t=s.aD(a)
if(s.c.jL(u,t))a.preventDefault()},
hG:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aD(s.y)
s.d.hw(u,t,r)}},
hT:function(a){var u,t=this
H.f(a,"$iaY")
t.a.focus()
t.f=!0
t.ci(a)
u=t.cb(a)
if(t.e.jI(u))a.preventDefault()},
hP:function(a){var u
H.f(a,"$iaY")
this.ci(a)
u=this.cb(a)
if(this.e.jG(u))a.preventDefault()},
hR:function(a){var u
H.f(a,"$iaY")
this.ci(a)
u=this.cb(a)
if(this.e.jH(u))a.preventDefault()},
sfN:function(a){this.z=H.k(a,"$ib",[[P.cM,P.S]],"$ab")}}
D.bD.prototype={
gD:function(){var u=this.d
return u==null?this.d=D.X():u},
az:function(a){var u
H.f(a,"$iB")
u=this.d
if(u!=null)u.H(a)},
fg:function(){return this.az(null)},
$ia8:1,
$ibp:1}
D.a8.prototype={$ibp:1}
D.dE.prototype={
gD:function(){var u=this.Q
return u==null?this.Q=D.X():u},
az:function(a){var u=this.Q
if(u!=null)u.H(a)},
dw:function(a){var u
H.f(a,"$iB")
u=this.ch
if(u!=null)u.H(a)},
hv:function(){return this.dw(null)},
hJ:function(a){var u,t,s
H.k(a,"$ii",[D.a8],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t){s=a[t]
if(s==null||this.fe(s))return!1}return!0},
h6:function(a,b){var u,t,s,r,q,p,o,n=D.a8
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdv(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=H.f(b[q],"$ia8")
if(p instanceof D.bD)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bW()
o.saj(null)
o.saQ(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bZ([n])
n.b=!0
this.az(n)},
hN:function(a,b){var u,t,s,r=D.a8
H.k(b,"$ii",[r],"$ai")
for(u=b.gV(b),t=this.gdv();u.E();){s=u.gM(u)
C.a.P(this.e,s)
s.gD().P(0,t)}r=new D.c_([r])
r.b=!0
this.az(r)},
fe:function(a){var u=C.a.Z(this.e,a)
return u},
sfK:function(a){this.e=H.k(a,"$ib",[D.bD],"$ab")},
shU:function(a){this.f=H.k(a,"$ib",[D.dT],"$ab")},
sig:function(a){this.r=H.k(a,"$ib",[D.e_],"$ab")},
sis:function(a){this.x=H.k(a,"$ib",[D.e4],"$ab")},
sit:function(a){this.y=H.k(a,"$ib",[D.e5],"$ab")},
siu:function(a){this.z=H.k(a,"$ib",[D.e6],"$ab")},
$ai:function(){return[D.a8]},
$aa6:function(){return[D.a8]}}
D.dT.prototype={$ia8:1,$ibp:1}
D.e_.prototype={$ia8:1,$ibp:1}
D.e4.prototype={$ia8:1,$ibp:1}
D.e5.prototype={$ia8:1,$ibp:1}
D.e6.prototype={$ia8:1,$ibp:1}
V.a3.prototype={
q:function(a,b){var u=C.e.q(this.a,b.gcU()),t=C.e.q(this.b,b.gbO()),s=C.e.q(this.c,b.gcq())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a3(u,t,s)},
t:function(a,b){var u=C.e.t(this.a,b.gcU()),t=C.e.t(this.b,b.gbO()),s=C.e.t(this.c,b.gcq())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a3(u,t,s)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.aN.prototype={
q:function(a,b){var u=this,t=C.e.q(u.a,b.gcU()),s=C.e.q(u.b,b.gbO()),r=C.e.q(u.c,b.gcq()),q=C.e.q(u.d,b.giZ(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aN(t,s,r,q)},
t:function(a,b){var u=this,t=C.e.t(u.a,b.gcU()),s=C.e.t(u.b,b.gbO()),r=C.e.t(u.c,b.gcq()),q=C.e.t(u.d,b.giZ(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aN(t,s,r,q)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aN))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.fS.prototype={}
V.dL.prototype={
ah:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.r])
return t},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dL))return!1
u=b.a
t=$.M().a
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
i:function(a){var u,t,s,r,q=this,p=[P.r],o=V.cf(H.d([q.a,q.d,q.r],p),3,0),n=V.cf(H.d([q.b,q.e,q.x],p),3,0),m=V.cf(H.d([q.c,q.f,q.y],p),3,0)
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
V.ao.prototype={
ah:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.r])
return t},
em:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.M().a)return V.dM()
u=1/b1
t=-n
s=-a0
return V.b7((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b7(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cY:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.K(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bf:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a5(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.M().a
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
I:function(a){var u,t,s,r,q,p=this,o=[P.r],n=V.cf(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cf(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cf(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cf(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
R:function(){return this.I("")}}
V.aa.prototype={
q:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.a5.prototype={
q:function(a,b){return new V.a5(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a5(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.a5(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.b9.prototype={
q:function(a,b){var u=this
return new V.b9(C.e.q(u.a,b.gk0(b)),C.e.q(u.b,b.gk5(b)),C.e.q(u.c,b.gk6(b)),C.e.q(u.d,b.gk_(b)))},
t:function(a,b){var u=this
return new V.b9(C.e.t(u.a,b.gk0(b)),C.e.t(u.b,b.gk5(b)),C.e.t(u.c,b.gk6(b)),C.e.t(u.d,b.gk_(b)))},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b9))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.dW.prototype={
ga9:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dW))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.Y.prototype={
cL:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.C(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.C(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a,s=b.gje(b)
if(typeof t!=="number")return t.q()
s=C.e.q(t,s)
t=this.b
u=b.gjf(b)
if(typeof t!=="number")return t.q()
return new V.Y(s,C.e.q(t,u))},
t:function(a,b){var u,t=this.a,s=b.gje(b)
if(typeof t!=="number")return t.t()
s=C.e.t(t,s)
t=this.b
u=b.gjf(b)
if(typeof t!=="number")return t.t()
return new V.Y(s,C.e.t(t,u))},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.Y(t*b,u*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.m8
return u==null?$.m8=new V.Y(0,0):u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.Y(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=this.a
s=$.M()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.C(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.C(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.K.prototype={
cL:function(a){return Math.sqrt(this.F(this))},
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cM:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
q:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
U:function(a){return new V.K(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if(Math.abs(b-0)<$.M().a)return V.cZ()
return new V.K(this.a/b,this.b/b,this.c/b)},
en:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
U.fz.prototype={
bU:function(a){var u=V.kL(a,this.c,this.b)
return u},
gD:function(){var u=this.y
return u==null?this.y=D.X():u},
J:function(a){var u=this.y
if(u!=null)u.H(a)},
sd_:function(a,b){},
scN:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.M().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bU(u)}s=new D.O("maximumLocation",s,t.b,[P.r])
s.b=!0
t.J(s)}},
scP:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.M().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bU(u)}s=new D.O("minimumLocation",s,t.c,[P.r])
s.b=!0
t.J(s)}},
sa1:function(a,b){var u,t=this
b=t.bU(b)
u=t.d
if(!(Math.abs(u-b)<$.M().a)){t.d=b
u=new D.O("location",u,b,[P.r])
u.b=!0
t.J(u)}},
scO:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.M().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.O("maximumVelocity",r,a,[P.r])
r.b=!0
s.J(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.M().a)){u.f=a
t=new D.O("velocity",t,a,[P.r])
t.b=!0
u.J(t)}},
scz:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.M().a)){this.x=a
u=new D.O("dampening",u,a,[P.r])
u.b=!0
this.J(u)}},
ax:function(a,b){var u,t,s,r=this,q=r.f,p=$.M().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.M().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.dt.prototype={
gD:function(){var u=this.b
return u==null?this.b=D.X():u},
ay:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dt))return!1
return J.V(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.cw.prototype={
gD:function(){var u=this.e
return u==null?this.e=D.X():u},
J:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.H(a)},
a7:function(){return this.J(null)},
h4:function(a,b){var u,t,s,r,q,p,o,n=U.ac
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaM(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.gD()
o.toString
H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bZ([n])
n.b=!0
this.J(n)},
hL:function(a,b){var u,t,s=U.ac
H.k(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.gaM();u.E();)u.gM(u).gD().P(0,t)
s=new D.c_([s])
s.b=!0
this.J(s)},
ay:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.X()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ax(r,r.length,[H.u(r,0)]),u=null;r.E();){q=r.d
if(q!=null){t=q.ay(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.dM():u
r=s.e
if(r!=null)r.ag(0)}return s.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cw))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.V(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ac]},
$aa6:function(){return[U.ac]},
$iac:1}
U.ac.prototype={}
U.dX.prototype={
gD:function(){var u=this.y
return u==null?this.y=D.X():u},
J:function(a){var u=this.y
if(u!=null)u.H(a)},
seT:function(a){var u
a=V.kL(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.M().a)){this.a=a
u=new D.O("yaw",u,a,[P.r])
u.b=!0
this.J(u)}},
sez:function(a,b){var u
b=V.kL(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.M().a)){this.b=b
u=new D.O("pitch",u,b,[P.r])
u.b=!0
this.J(u)}},
seG:function(a){var u
a=V.kL(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.M().a)){this.c=a
u=new D.O("roll",u,a,[P.r])
u.b=!0
this.J(u)}},
ay:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.seT(u.a+u.d*b.y)
u.sez(0,u.b+u.e*b.y)
u.seG(u.c+u.f*b.y)
u.x=V.lN(u.c).u(0,V.lM(u.b)).u(0,V.lL(u.a))
t=u.y
if(t!=null)t.ag(0)}return u.x},
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dX))return!1
u=r.a
t=b.a
s=$.M().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+"], ["+V.R(u.d,3,0)+", "+V.R(u.e,3,0)+", "+V.R(u.f,3,0)+"]"}}
U.ef.prototype={
gD:function(){var u=this.cy
return u==null?this.cy=D.X():u},
J:function(a){var u
H.f(a,"$iB")
u=this.cy
if(u!=null)u.H(a)},
a7:function(){return this.J(null)},
b2:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdS().h(0,u.gc2())
u.a.c.geo().h(0,u.gc4())
u.a.c.gbL().h(0,u.gc6())
return!0},
c3:function(a){var u=this
H.f(a,"$iB")
if(!J.V(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
c5:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.f(a,"$iB"),"$ibo")
if(!H.D(n.y))return
if(H.D(n.x)){u=a.d.t(0,a.y)
u=new V.Y(u.a,u.b)
u=u.F(u)
t=n.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.x=!1}if(H.D(n.d)){u=a.c
t=a.d.t(0,a.y)
u=new V.Y(t.a,t.b).u(0,2).A(0,u.ga9())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.C(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.Y(s.a,s.b).u(0,2).A(0,u.ga9())
s=n.b
q=r.a
if(typeof q!=="number")return q.U()
p=n.e
if(typeof p!=="number")return H.C(p)
o=n.z
if(typeof o!=="number")return H.C(o)
s.sa1(0,-q*p+o)
n.b.sW(0)
t=t.t(0,a.z)
n.Q=new V.Y(t.a,t.b).u(0,2).A(0,u.ga9())}n.a7()},
c7:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.D(r.y))return
r.y=!1
if(H.D(r.x))return
u=r.Q
if(u.F(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.C(s)
u.sW(t*10*s)
r.a7()}},
ay:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.X()
if(s<r){t.ch=r
u=b.y
t.b.ax(0,u)
t.cx=V.lN(t.b.d)}return t.cx},
$iac:1}
U.eg.prototype={
gD:function(){var u=this.fx
return u==null?this.fx=D.X():u},
J:function(a){var u
H.f(a,"$iB")
u=this.fx
if(u!=null)u.H(a)},
a7:function(){return this.J(null)},
b2:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdS().h(0,s.gc2())
s.a.c.geo().h(0,s.gc4())
s.a.c.gbL().h(0,s.gc6())
u=s.a.d
t=u.f
u=t==null?u.f=D.X():t
u.h(0,s.gfY())
u=s.a.d
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.gh_())
u=s.a.e
t=u.b
u=t==null?u.b=D.X():t
u.h(0,s.gip())
u=s.a.e
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.gim())
u=s.a.e
t=u.c
u=t==null?u.c=D.X():t
u.h(0,s.gik())
return!0},
ar:function(a){var u=a.a,t=a.b
if(H.D(this.f)){if(typeof u!=="number")return u.U()
u=-u}if(H.D(this.r)){if(typeof t!=="number")return t.U()
t=-t}return new V.Y(u,t)},
c3:function(a){var u=this
a=H.m(H.f(a,"$iB"),"$ibo")
if(!J.V(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
c5:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.f(a,"$iB"),"$ibo")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.t(0,a.y)
u=new V.Y(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.ar(new V.Y(t.a,t.b).u(0,2).A(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.ar(new V.Y(s.a,s.b).u(0,2).A(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.t(0,a.z)
n.dx=n.ar(new V.Y(t.a,t.b).u(0,2).A(0,u.ga9()))}n.a7()},
c7:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sW(-t*10*u)
r.a7()}},
fZ:function(a){var u=this
if(H.m(H.f(a,"$iB"),"$idH").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
h0:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.f(a,"$iB"),"$ibo")
if(!J.V(n.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=n.ar(new V.Y(s.a,s.b).u(0,2).A(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.t(0,a.z)
n.dx=n.ar(new V.Y(t.a,t.b).u(0,2).A(0,u.ga9()))
n.a7()},
iq:function(a){var u=this
H.f(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
io:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.f(a,"$iB"),"$ie9")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.t(0,a.y)
u=new V.Y(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.ar(new V.Y(t.a,t.b).u(0,2).A(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.ar(new V.Y(s.a,s.b).u(0,2).A(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.t(0,a.z)
n.dx=n.ar(new V.Y(t.a,t.b).u(0,2).A(0,u.ga9()))}n.a7()},
il:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sW(-t*10*u)
r.a7()}},
ay:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.X()
if(s<r){t.dy=r
u=b.y
t.c.ax(0,u)
t.b.ax(0,u)
t.fr=V.lL(t.b.d).u(0,V.lM(t.c.d))}return t.fr},
$iac:1}
U.eh.prototype={
gD:function(){var u=this.r
return u==null?this.r=D.X():u},
J:function(a){var u=this.r
if(u!=null)u.H(a)},
b2:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.X():t
t=r.gh1()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.X():s).h(0,t)
return!0},
h2:function(a){var u,t,s,r,q=this
H.f(a,"$iB")
if(!J.V(q.b,q.a.b.c))return
H.m(a,"$icC")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.O("zoom",u,r,[P.r])
u.b=!0
q.J(u)}},
ay:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.lO(u,u,u,1)}return t.f},
$iac:1}
M.dx.prototype={
aA:function(a){var u
H.f(a,"$iB")
u=this.x
if(u!=null)u.H(a)},
fh:function(){return this.aA(null)},
hg:function(a,b){var u,t,s,r,q,p,o,n=E.an
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaq(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bW()
o.saj(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bZ([n])
n.b=!0
this.aA(n)},
hi:function(a,b){var u,t,s=E.an
H.k(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.gaq();u.E();)u.gM(u).gD().P(0,t)
s=new D.c_([s])
s.b=!0
this.aA(s)},
seJ:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gD().P(0,t.gaq())
u=t.c
t.c=a
if(a!=null)a.gD().h(0,t.gaq())
s=new D.O("technique",u,t.c,[O.c7])
s.b=!0
t.aA(s)}},
gD:function(){var u=this.x
return u==null?this.x=D.X():u},
aW:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.eC(a1.c)
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
if(typeof s!=="number")return H.C(s)
o=C.e.an(p*s)
p=q.b
if(typeof r!=="number")return H.C(r)
n=C.e.an(p*r)
p=C.e.an(q.c*s)
a2.c=p
q=C.e.an(q.d*r)
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
i=V.b7(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.eB(i)
t=$.lS
if(t==null){t=V.nJ()
q=$.mb
if(q==null)q=$.mb=new V.K(0,1,0)
p=$.m9
if(p==null)p=$.m9=new V.K(0,0,-1)
h=p.A(0,Math.sqrt(p.F(p)))
q=q.aE(h)
g=q.A(0,Math.sqrt(q.F(q)))
f=h.aE(g)
e=new V.K(t.a,t.b,t.c)
d=g.U(0).F(e)
c=f.U(0).F(e)
b=h.U(0).F(e)
t=V.b7(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.lS=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.ay(0,a2,u)
if(a0!=null)a=a0.u(0,a)}a2.db.eB(a)
u=a1.c
if(u!=null)u.ax(0,a2)
for(u=a1.d.a,u=new J.ax(u,u.length,[H.u(u,0)]);u.E();)u.d.ax(0,a2)
for(u=a1.d.a,u=new J.ax(u,u.length,[H.u(u,0)]);u.E();)u.d.aW(a2)
a1.a.toString
a2.cy.cR()
a2.db.cR()
a1.b.toString
a2.eA()},
sfE:function(a,b){this.d=H.k(b,"$ia6",[E.an],"$aa6")},
$ipm:1}
A.dm.prototype={}
A.fo.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jg:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
jd:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.hs.prototype={
f6:function(d2,d3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="Required uniform value, ",a9=", was not defined or used in shader.",b0="emissionTxt",b1="nullEmissionTxt",b2="ambientTxt",b3="nullAmbientTxt",b4="diffuseTxt",b5="nullDiffuseTxt",b6="invDiffuseTxt",b7="nullInvDiffuseTxt",b8="specularTxt",b9="nullSpecularTxt",c0="nullBumpTxt",c1="reflectTxt",c2="nullReflectTxt",c3="refractTxt",c4="nullRefractTxt",c5="alphaTxt",c6="nullAlphaTxt",c7="uniform mat4 objMat;\n",c8="   if(nullAlphaTxt > 0) return alpha;\n",c9="   if (a <= 0.000001) discard;\n",d0="precision mediump float;\n\n",d1="precision mediump float;\n\nvarying vec3 normalVec;\n"
a7.z=d2
u=new P.ah("")
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
d2.iy(u)
d2.iF(u)
d2.iz(u)
d2.iN(u)
d2.iO(u)
d2.iH(u)
d2.iS(u)
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
u=new P.ah("")
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
s.iC(u)
s.ix(u)
s.iA(u)
s.iD(u)
s.iL(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.iJ(u)
s.iK(u)}s.iG(u)
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
k=H.d([],[P.e])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.iB(u)
s.iI(u)
s.iM(u)
s.iP(u)
s.iQ(u)
s.iR(u)
s.iE(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
q=q?u.a=m+"   vec3 norm = normal();\n":m
if(p)u.a=q+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.e])
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
i="vec4("+C.a.m(j," + ")+", alpha);"
s=u.a
s=u.a=(o?u.a=s+("   gl_FragColor = colorMat*"+i+"\n"):u.a=s+("   gl_FragColor = "+i+"\n"))+"}\n"
a7.c=n
a7.d=s.charCodeAt(0)==0?s:s
a7.e=a7.dk(n,35633)
a7.f=a7.dk(a7.d,35632)
s=a7.a
q=s.createProgram()
a7.r=q
s.attachShader(q,a7.e)
s.attachShader(a7.r,a7.f)
s.linkProgram(a7.r)
if(!H.D(H.lf(s.getProgramParameter(a7.r,35714)))){h=s.getProgramInfoLog(a7.r)
s.deleteProgram(a7.r)
H.t(P.w("Failed to link shader: "+H.l(h)))}a7.i9()
a7.ib()
a7.Q=a7.x.j(0,"posAttr")
a7.cx=a7.x.j(0,"normAttr")
a7.ch=a7.x.j(0,"binmAttr")
a7.cy=a7.x.j(0,"txt2DAttr")
a7.db=a7.x.j(0,"txtCubeAttr")
a7.dx=a7.x.j(0,"bendAttr")
if(d2.fr)a7.id=H.m(a7.y.p(0,"invViewMat"),"$iaC")
if(t)a7.dy=H.m(a7.y.p(0,"objMat"),"$iaC")
if(r)a7.fr=H.m(a7.y.p(0,"viewObjMat"),"$iaC")
a7.fy=H.m(a7.y.p(0,"projViewObjMat"),"$iaC")
if(d2.x2)a7.k1=H.m(a7.y.p(0,"txt2DMat"),"$icS")
if(d2.y1)a7.k2=H.m(a7.y.p(0,"txtCubeMat"),"$iaC")
if(d2.y2)a7.k3=H.m(a7.y.p(0,"colorMat"),"$iaC")
a7.sfA(H.d([],[A.aC]))
t=d2.av
if(t>0){a7.k4=H.f(a7.y.p(0,"bendMatCount"),"$iQ")
for(g=0;g<t;++g){s=a7.r1
r=a7.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.w(a8+q+a9));(s&&C.a).h(s,H.m(f,"$iaC"))}}t=d2.a
if(t!==C.d){a7.r2=H.m(a7.y.p(0,"emissionClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:a7.rx=H.m(a7.y.p(0,b0),"$iap")
a7.x1=H.m(a7.y.p(0,b1),"$iQ")
break
case C.i:a7.ry=H.m(a7.y.p(0,b0),"$iaq")
a7.x1=H.m(a7.y.p(0,b1),"$iQ")
break}}t=d2.b
if(t!==C.d){a7.x2=H.m(a7.y.p(0,"ambientClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:a7.y1=H.m(a7.y.p(0,b2),"$iap")
a7.av=H.m(a7.y.p(0,b3),"$iQ")
break
case C.i:a7.y2=H.m(a7.y.p(0,b2),"$iaq")
a7.av=H.m(a7.y.p(0,b3),"$iQ")
break}}t=d2.c
if(t!==C.d){a7.am=H.m(a7.y.p(0,"diffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:a7.br=H.m(a7.y.p(0,b4),"$iap")
a7.bs=H.m(a7.y.p(0,b5),"$iQ")
break
case C.i:a7.dT=H.m(a7.y.p(0,b4),"$iaq")
a7.bs=H.m(a7.y.p(0,b5),"$iQ")
break}}t=d2.d
if(t!==C.d){a7.bt=H.m(a7.y.p(0,"invDiffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dU=H.m(a7.y.p(0,b6),"$iap")
a7.bu=H.m(a7.y.p(0,b7),"$iQ")
break
case C.i:a7.dV=H.m(a7.y.p(0,b6),"$iaq")
a7.bu=H.m(a7.y.p(0,b7),"$iQ")
break}}t=d2.e
if(t!==C.d){a7.bx=H.m(a7.y.p(0,"shininess"),"$ia4")
a7.bv=H.m(a7.y.p(0,"specularClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dW=H.m(a7.y.p(0,b8),"$iap")
a7.bw=H.m(a7.y.p(0,b9),"$iQ")
break
case C.i:a7.dX=H.m(a7.y.p(0,b8),"$iaq")
a7.bw=H.m(a7.y.p(0,b9),"$iQ")
break}}switch(d2.f){case C.d:break
case C.j:break
case C.h:a7.dY=H.m(a7.y.p(0,"bumpTxt"),"$iap")
a7.by=H.m(a7.y.p(0,c0),"$iQ")
break
case C.i:a7.dZ=H.m(a7.y.p(0,"bumpTxt"),"$iaq")
a7.by=H.m(a7.y.p(0,c0),"$iQ")
break}if(d2.dy){a7.e_=H.m(a7.y.p(0,"envSampler"),"$iaq")
a7.e0=H.m(a7.y.p(0,"nullEnvTxt"),"$iQ")
t=d2.r
if(t!==C.d){a7.bz=H.m(a7.y.p(0,"reflectClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:a7.e1=H.m(a7.y.p(0,c1),"$iap")
a7.bA=H.m(a7.y.p(0,c2),"$iQ")
break
case C.i:a7.e2=H.m(a7.y.p(0,c1),"$iaq")
a7.bA=H.m(a7.y.p(0,c2),"$iQ")
break}}t=d2.x
if(t!==C.d){a7.bB=H.m(a7.y.p(0,"refraction"),"$ia4")
a7.bC=H.m(a7.y.p(0,"refractClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:a7.e3=H.m(a7.y.p(0,c3),"$iap")
a7.bD=H.m(a7.y.p(0,c4),"$iQ")
break
case C.i:a7.e4=H.m(a7.y.p(0,c3),"$iaq")
a7.bD=H.m(a7.y.p(0,c4),"$iQ")
break}}}t=d2.y
if(t!==C.d){a7.bE=H.m(a7.y.p(0,"alpha"),"$ia4")
switch(t){case C.d:break
case C.j:break
case C.h:a7.e5=H.m(a7.y.p(0,c5),"$iap")
a7.bF=H.m(a7.y.p(0,c6),"$iQ")
break
case C.i:a7.e6=H.m(a7.y.p(0,c5),"$iaq")
a7.bF=H.m(a7.y.p(0,c6),"$iQ")
break}}a7.sfi(H.d([],[A.cR]))
a7.sfj(H.d([],[A.cT]))
a7.sfk(H.d([],[A.cU]))
a7.sfl(H.d([],[A.cV]))
a7.sfm(H.d([],[A.cW]))
a7.sfn(H.d([],[A.cX]))
if(d2.k2){t=d2.z
if(t>0){a7.e7=H.f(a7.y.p(0,"dirLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.t(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.t(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.cB;(s&&C.a).h(s,new A.cR(f,e))}}t=d2.Q
if(t>0){a7.e8=H.f(a7.y.p(0,"pntLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.t(P.w(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.t(P.w(a8+r+a9))
H.m(c,"$ia4")
s=a7.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.t(P.w(a8+r+a9))
H.m(b,"$ia4")
s=a7.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.t(P.w(a8+r+a9))
H.m(a,"$ia4")
s=a7.cC;(s&&C.a).h(s,new A.cT(f,e,d,c,b,a))}}t=d2.ch
if(t>0){a7.e9=H.f(a7.y.p(0,"spotLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.t(P.w(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.t(P.w(a8+r+a9))
H.m(b,"$ia4")
s=a7.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.t(P.w(a8+r+a9))
H.m(a,"$ia4")
s=a7.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.t(P.w(a8+r+a9))
H.m(a0,"$ia4")
s=a7.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.t(P.w(a8+r+a9))
H.m(a1,"$ia4")
s=a7.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.t(P.w(a8+r+a9))
H.m(a2,"$ia4")
s=a7.cD;(s&&C.a).h(s,new A.cU(f,e,d,c,b,a,a0,a1,a2))}}t=d2.cx
if(t>0){a7.ea=H.f(a7.y.p(0,"txtDirLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.t(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.t(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.t(P.w(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.t(P.w(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.t(P.w(a8+r+a9))
H.m(b,"$iP")
s=a7.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w(a8+r+a9))
H.m(a,"$iQ")
s=a7.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.t(P.w(a8+r+a9))
H.m(a0,"$iap")
s=a7.cE;(s&&C.a).h(s,new A.cV(f,e,d,c,b,a0,a))}}t=d2.cy
if(t>0){a7.eb=H.f(a7.y.p(0,"txtPntLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.t(P.w(a8+r+a9))
H.m(d,"$icS")
s=a7.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.w(a8+r+a9))
H.m(b,"$iQ")
s=a7.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.w(a8+r+a9))
H.m(a,"$ia4")
s=a7.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.w(a8+r+a9))
H.m(a0,"$ia4")
s=a7.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.w(a8+r+a9))
H.m(a1,"$ia4")
s=a7.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.t(P.w(a8+r+a9))
H.m(a2,"$iaq")
s=a7.cF;(s&&C.a).h(s,new A.cW(f,e,d,c,a2,b,a,a0,a1))}}t=d2.db
if(t>0){a7.ec=H.f(a7.y.p(0,"txtSpotLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.t(P.w(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.t(P.w(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.t(P.w(a8+r+a9))
H.m(b,"$iP")
s=a7.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w(a8+r+a9))
H.m(a,"$iQ")
s=a7.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.t(P.w(a8+r+a9))
H.m(a0,"$iP")
s=a7.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.w(a8+r+a9))
H.m(a1,"$ia4")
s=a7.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.t(P.w(a8+r+a9))
H.m(a2,"$ia4")
s=a7.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.t(P.w(a8+r+a9))
H.m(a3,"$ia4")
s=a7.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.t(P.w(a8+r+a9))
H.m(a4,"$ia4")
s=a7.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.t(P.w(a8+r+a9))
H.m(a5,"$ia4")
s=a7.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.t(P.w(a8+r+a9))
H.m(a6,"$iap")
s=a7.cG;(s&&C.a).h(s,new A.cX(f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ak:function(a,b,c){C.c.a3(b.a,b.d,1)},
ac:function(a,b,c){C.c.a3(b.a,b.d,1)},
sfA:function(a){this.r1=H.k(a,"$ib",[A.aC],"$ab")},
sfi:function(a){this.cB=H.k(a,"$ib",[A.cR],"$ab")},
sfj:function(a){this.cC=H.k(a,"$ib",[A.cT],"$ab")},
sfk:function(a){this.cD=H.k(a,"$ib",[A.cU],"$ab")},
sfl:function(a){this.cE=H.k(a,"$ib",[A.cV],"$ab")},
sfm:function(a){this.cF=H.k(a,"$ib",[A.cW],"$ab")},
sfn:function(a){this.cG=H.k(a,"$ib",[A.cX],"$ab")}}
A.hv.prototype={
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
u=a.a+="uniform BendingValue bendValues["+r.av+"];\n"
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
aC:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.h(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.ap(c,1))+"Txt;\n")
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iC:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aC(a,s,"emission")
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
ix:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aC(a,s,"ambient")
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
iA:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aC(a,s,"diffuse")
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
iD:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aC(a,s,"invDiffuse")
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
iL:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aC(a,s,"specular")
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
iG:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
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
iJ:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aC(a,s,"reflect")
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
iK:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aC(a,s,"refract")
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
i:function(a){return this.am}}
A.cR.prototype={}
A.cV.prototype={}
A.cT.prototype={}
A.cW.prototype={}
A.cU.prototype={}
A.cX.prototype={}
A.cK.prototype={
f9:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dk:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.D(H.lf(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.w("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
i9:function(){var u,t,s,r=this,q=H.d([],[A.dm]),p=r.a,o=H.aj(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dm(p,t.name,s))}r.x=new A.fo(q)},
ib:function(){var u,t,s,r=this,q=H.d([],[A.ea]),p=r.a,o=H.aj(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ja(t.type,t.size,t.name,s))}r.y=new A.iP(q)},
aO:function(a,b,c){var u=this.a
if(a===1)return new A.Q(u,b,c)
else return A.l3(u,this.r,b,a,c)},
fH:function(a,b,c){var u=this.a
if(a===1)return new A.ap(u,b,c)
else return A.l3(u,this.r,b,a,c)},
fI:function(a,b,c){var u=this.a
if(a===1)return new A.aq(u,b,c)
else return A.l3(u,this.r,b,a,c)},
bn:function(a,b){return new P.es(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
ja:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aO(b,c,d)
case 5121:return u.aO(b,c,d)
case 5122:return u.aO(b,c,d)
case 5123:return u.aO(b,c,d)
case 5124:return u.aO(b,c,d)
case 5125:return u.aO(b,c,d)
case 5126:return new A.a4(u.a,c,d)
case 35664:return new A.iK(u.a,c,d)
case 35665:return new A.P(u.a,c,d)
case 35666:return new A.iN(u.a,c,d)
case 35667:return new A.iL(u.a,c,d)
case 35668:return new A.iM(u.a,c,d)
case 35669:return new A.iO(u.a,c,d)
case 35674:return new A.iQ(u.a,c,d)
case 35675:return new A.cS(u.a,c,d)
case 35676:return new A.aC(u.a,c,d)
case 35678:return u.fH(b,c,d)
case 35680:return u.fI(b,c,d)
case 35670:throw H.c(u.bn("BOOL",c))
case 35671:throw H.c(u.bn("BOOL_VEC2",c))
case 35672:throw H.c(u.bn("BOOL_VEC3",c))
case 35673:throw H.c(u.bn("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bV.prototype={
i:function(a){return this.b}}
A.ea.prototype={}
A.iP.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
R:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.F)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.Q.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.iL.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.iM.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.iO.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iJ.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
siv:function(a){H.k(a,"$ib",[P.p],"$ab")}}
A.a4.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.iK.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.P.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.iN.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.iQ.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cS.prototype={
ao:function(a){var u=new Float32Array(H.ca(H.k(a,"$ib",[P.r],"$ab")))
C.c.eP(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.aC.prototype={
ao:function(a){var u=new Float32Array(H.ca(H.k(a,"$ib",[P.r],"$ab")))
C.c.eQ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ap.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.aq.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.ka.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cM(s.b,b).cM(s.d.cM(s.c,b),c)
a.sa1(0,new V.a5(r.a,r.b,r.c))
a.seK(r.A(0,Math.sqrt(r.F(r))))
s=1-b
u=1-c
a.sdO(new V.b9(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:8}
F.kk.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:32}
F.km.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.C(p)
s=-s*p
u=r*p
a.sa1(0,new V.a5(s,u,q))
u=new V.K(s,u,q)
a.seK(u.A(0,Math.sqrt(u.F(u))))
a.sdO(new V.b9(1-c,2+c,-1,-1))},
$S:8}
F.kn.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:27}
F.ko.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:27}
F.kH.prototype={
$2:function(a,b){return 0},
$S:32}
F.kI.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.C(s)
u=a.f
t=new V.K(u.a,u.b,u.c)
s=t.A(0,Math.sqrt(t.F(t))).u(0,this.b+s)
a.sa1(0,new V.a5(s.a,s.b,s.c))},
$S:8}
F.kJ.prototype={
$1:function(a){return new V.a5(Math.cos(a),Math.sin(a),0)},
$S:19}
F.kv.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a5(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:19}
F.kl.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.ls(n.$1(o),m)
m=J.n9(J.ls(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.K(m.a,m.b,m.c)
u=m.A(0,Math.sqrt(m.F(m)))
n=$.ma
if(n==null){n=new V.K(1,0,0)
$.ma=n
t=n}else t=n
n=u.aE(!J.V(u,t)?V.md():t)
s=n.A(0,Math.sqrt(n.F(n)))
n=s.aE(u)
t=n.A(0,Math.sqrt(n.F(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
a.sa1(0,J.n8(l,new V.a5(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:8}
F.a9.prototype={
b3:function(){var u=this
if(!u.gb4()){C.a.P(u.a.a.d.b,u)
u.a.a.a2()}u.cd()
u.ce()
u.hZ()},
cj:function(a){this.a=a
C.a.h(a.d.b,this)},
ck:function(a){this.b=a
C.a.h(a.d.c,this)},
i8:function(a){this.c=a
C.a.h(a.d.d,this)},
cd:function(){var u=this.a
if(u!=null){C.a.P(u.d.b,this)
this.a=null}},
ce:function(){var u=this.b
if(u!=null){C.a.P(u.d.c,this)
this.b=null}},
hZ:function(){var u=this.c
if(u!=null){C.a.P(u.d.d,this)
this.c=null}},
gb4:function(){return this.a==null||this.b==null||this.c==null},
fz:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cZ()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.en())return
return s.A(0,Math.sqrt(s.F(s)))},
fD:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.t(0,q)
r=new V.K(r.a,r.b,r.c)
s=r.A(0,Math.sqrt(r.F(r)))
r=t.t(0,q)
r=new V.K(r.a,r.b,r.c)
r=s.aE(r.A(0,Math.sqrt(r.F(r))))
return r.A(0,Math.sqrt(r.F(r)))},
ct:function(){var u,t=this
if(t.d!=null)return!0
u=t.fz()
if(u==null){u=t.fD()
if(u==null)return!1}t.d=u
t.a.a.a2()
return!0},
fw:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cZ()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.en())return
return s.A(0,Math.sqrt(s.F(s)))},
fC:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.M().a){l=d.t(0,g)
l=new V.K(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.F(l)))
if(s.a-t.a<0)q=q.U(0)}else{p=(l-u.b)/r
l=d.t(0,g).u(0,p).q(0,g).t(0,j)
l=new V.K(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.F(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.U(0)}l=n.d
if(l!=null){o=l.A(0,Math.sqrt(l.F(l)))
l=o.aE(q)
l=l.A(0,Math.sqrt(l.F(l))).aE(o)
q=l.A(0,Math.sqrt(l.F(l)))}return q},
cr:function(){var u,t=this
if(t.e!=null)return!0
u=t.fw()
if(u==null){u=t.fC()
if(u==null)return!1}t.e=u
t.a.a.a2()
return!0},
gj5:function(a){var u=this
if(J.V(u.a,u.b))return!0
if(J.V(u.b,u.c))return!0
if(J.V(u.c,u.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t,s=this
if(s.gb4())return a+"disposed"
u=a+C.b.af(J.at(s.a.e),0)+", "+C.b.af(J.at(s.b.e),0)+", "+C.b.af(J.at(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.I("")}}
F.fV.prototype={}
F.ie.prototype={
b7:function(a,b,c){var u,t=b.a
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
if(t==u.e){t=b.c
t.a.a.B()
t=t.e
u=c.c
u.a.a.B()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.c
u.a.a.B()
if(t==u.e){t=b.c
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.B()
t=t.e
u=c.c
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
if(t==u.e){t=b.c
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bn.prototype={
b3:function(){var u=this
if(!u.gb4()){C.a.P(u.a.a.c.b,u)
u.a.a.a2()}u.cd()
u.ce()},
cj:function(a){this.a=a
C.a.h(a.c.b,this)},
ck:function(a){this.b=a
C.a.h(a.c.c,this)},
cd:function(){var u=this.a
if(u!=null){C.a.P(u.c.b,this)
this.a=null}},
ce:function(){var u=this.b
if(u!=null){C.a.P(u.c.c,this)
this.b=null}},
gb4:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){if(this.gb4())return a+"disposed"
return a+C.b.af(J.at(this.a.e),0)+", "+C.b.af(J.at(this.b.e),0)},
R:function(){return this.I("")}}
F.hf.prototype={}
F.iI.prototype={
b7:function(a,b,c){var u,t=b.a
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
return t==u.e}else{t=b.a
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
return t==u.e}else return!1}}}
F.bJ.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.af(J.at(u.e),0)},
R:function(){return this.I("")}}
F.dZ.prototype={
gD:function(){var u=this.e
return u==null?this.e=D.X():u},
b8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.B()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){r=g[s]
h.a.h(0,r.j7())}h.a.B()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bJ()
if(n.a==null)H.t(P.w("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.H(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.B()
p=p.e
if(typeof p!=="number")return p.q()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nB(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.B()
p=p.e
if(typeof p!=="number")return p.q()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.ct(l,k,i)}g=h.e
if(g!=null)g.ag(0)},
au:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.au()||!1
if(!t.a.au())u=!1
s=t.e
if(s!=null)s.ag(0)
return u},
jw:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.u(o,0)])
for(o=[F.ai];u.length!==0;){t=C.a.gjk(u)
C.a.eD(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.h(u,r)
q=u[r]
if(q!=null&&a.b7(0,t,q)){C.a.h(s,q)
C.a.eD(u,r)}}if(s.length>1)b.b8(s)}}p.a.B()
p.c.cV()
p.d.cV()
p.b.jO()
p.c.cW(new F.iI())
p.d.cW(new F.ie())
o=p.e
if(o!=null)o.ag(0)},
cl:function(){this.jw(new F.j9(),new F.hM())},
cH:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cH()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.h(o,u)
t=o[u]
o=t.r
if(o!=null)t.sep(new V.K(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.K(s,r,o).A(0,Math.sqrt(s*s+r*r+o*o))
if(!J.V(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.H(null)}}}}o=p.e
if(o!=null)o.ag(0)},
j3:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bv()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bu().a)!==0)++s
if((t&$.bt().a)!==0)++s
if((t&$.bw().a)!==0)++s
if((t&$.bx().a)!==0)++s
if((t&$.di().a)!==0)++s
if((t&$.dj().a)!==0)++s
if((t&$.cl().a)!==0)++s
if((t&$.bs().a)!==0)++s
r=a3.gd2(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.r
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dp])
for(n=0,m=0;m<s;++m){l=a3.j0(m)
k=l.gd2(l)
C.a.n(o,m,new Z.dp(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].ju(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ca(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dq(new Z.ej(a0,f),o,a3)
e.sfT(H.d([],[Z.bG]))
if(a.b.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.B()
C.a.h(d,c.e)}b=Z.l6(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.B()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.B()
C.a.h(d,c.e)}b=Z.l6(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.B()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.B()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].c
c.a.a.B()
C.a.h(d,c.e)}b=Z.l6(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.e])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.I(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.I(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.I(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.I(t))}return C.a.m(s,"\n")},
a2:function(){var u=this.e
if(u!=null)u.H(null)},
$ipn:1}
F.i7.prototype={
iV:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ai],"$ab")
u=H.d([],[F.a9])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.h(a,p)
p=a[p]
if(q>=o)return H.h(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.ct(s,p,o))}}return u},
iW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ai],"$ab")
u=H.d([],[F.a9])
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
C.a.h(u,F.ct(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ct(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ct(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ct(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cW:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b7(0,p,n)){p.b3()
break}}}}},
cV:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gj5(s)
if(t)s.b3()}},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.F)(u),++r)if(!u[r].ct())s=!1
return s},
cs:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.F)(u),++r)if(!u[r].cr())s=!1
return s},
cH:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.K(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.K(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.H(null)}},
i:function(a){return this.R()},
I:function(a){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(a))
return C.a.m(r,"\n")},
R:function(){return this.I("")},
sfO:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")}}
F.i8.prototype={
gl:function(a){return this.b.length},
cW:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b7(0,p,n)){p.b3()
break}}}}},
cV:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.V(s.a,s.b)
if(t)s.b3()}},
i:function(a){return this.R()},
I:function(a){var u,t,s=H.d([],[P.e]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].I(a+(""+u+". ")))}return C.a.m(s,"\n")},
R:function(){return this.I("")},
sfU:function(a){this.b=H.k(a,"$ib",[F.bn],"$ab")}}
F.i9.prototype={
gl:function(a){return this.b.length},
jO:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.P(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.H(null)}s=t.a
if(s!=null){C.a.P(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
I:function(a){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(a))
return C.a.m(r,"\n")},
R:function(){return this.I("")},
sca:function(a){this.b=H.k(a,"$ib",[F.bJ],"$ab")}}
F.ai.prototype={
cw:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ei(u.cx,r,o,t,s,q,p,a,n)},
j7:function(){return this.cw(null)},
sa1:function(a,b){var u
if(!J.V(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a2()}},
sep:function(a){var u
a=a==null?null:a.A(0,Math.sqrt(a.F(a)))
if(!J.V(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a2()}},
seK:function(a){var u
if(!J.V(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
sdO:function(a){var u
if(!J.V(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a2()}},
ju:function(a){var u,t,s=this
if(a.v(0,$.bv())){u=s.f
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bu())){u=s.r
t=[P.r]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bt())){u=s.x
t=[P.r]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bw())){u=s.y
t=[P.r]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.v(0,$.bx())){u=s.z
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.di())){u=s.Q
t=[P.r]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.dj())){u=s.Q
t=[P.r]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.cl()))return H.d([s.ch],[P.r])
else if(a.v(0,$.bs())){u=s.cx
t=[P.r]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.r])},
ct:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cZ()
t.d.N(0,new F.je(s))
s=s.a
t.r=s.A(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
cr:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cZ()
t.d.N(0,new F.jd(s))
s=s.a
t.x=s.A(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t,s=this,r="-",q=H.d([],[P.e])
C.a.h(q,C.b.af(J.at(s.e),0))
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
C.a.h(q,V.R(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
R:function(){return this.I("")}}
F.je.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:6}
F.jd.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:6}
F.j4.prototype={
B:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a2()
return!0},
iX:function(a,b,c,d,e,f){var u=F.ei(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].ct()
return!0},
cs:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].cr()
return!0},
j4:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.V(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}}return!0},
i:function(a){return this.R()},
I:function(a){var u,t,s,r
this.B()
u=H.d([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)C.a.h(u,t[r].I(a))
return C.a.m(u,"\n")},
R:function(){return this.I("")},
siw:function(a){this.c=H.k(a,"$ib",[F.ai],"$ab")}}
F.j5.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
N:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.N(u.b,b)
C.a.N(u.c,new F.j6(u,b))
C.a.N(u.d,new F.j7(u,b))},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(""))
return C.a.m(r,"\n")},
sfP:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")},
sfQ:function(a){this.c=H.k(a,"$ib",[F.a9],"$ab")},
sfR:function(a){this.d=H.k(a,"$ib",[F.a9],"$ab")}}
F.j6.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.V(a.a,this.a))this.b.$1(a)},
$S:6}
F.j7.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.V(a.a,u)&&!J.V(a.b,u))this.b.$1(a)},
$S:6}
F.j8.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.h(t,u)
return t[u]}else{if(b<0)return H.h(t,b)
return t[b]}},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(""))
return C.a.m(r,"\n")},
sfV:function(a){this.b=H.k(a,"$ib",[F.bn],"$ab")},
sfW:function(a){this.c=H.k(a,"$ib",[F.bn],"$ab")}}
F.ja.prototype={}
F.j9.prototype={
b7:function(a,b,c){return J.V(b.f,c.f)}}
F.jb.prototype={}
F.hM.prototype={
b8:function(a){var u,t,s,r
H.k(a,"$ib",[F.ai],"$ab")
u=V.cZ()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.A(0,Math.sqrt(u.F(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.F)(a),++s)a[s].sep(u)
return}}
F.jc.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(""))
return C.a.m(r,"\n")},
sca:function(a){this.b=H.k(a,"$ib",[F.bJ],"$ab")}}
O.dJ.prototype={
gD:function(){var u=this.dy
return u==null?this.dy=D.X():u},
ab:function(a){var u
H.f(a,"$iB")
u=this.dy
if(u!=null)u.H(a)},
he:function(){return this.ab(null)},
dC:function(a){H.f(a,"$iB")
this.a=null
this.ab(a)},
i3:function(){return this.dC(null)},
h8:function(a,b){var u=V.ao
H.k(b,"$ii",[u],"$ai")
u=new D.bZ([u])
u.b=!0
this.ab(u)},
ha:function(a,b){var u=V.ao
H.k(b,"$ii",[u],"$ai")
u=new D.c_([u])
u.b=!0
this.ab(u)},
dh:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.f.a5(a1.e.length+3,4)*4,a3=C.f.a5(a1.f.length+3,4)*4,a4=C.f.a5(a1.r.length+3,4)*4,a5=C.f.a5(a1.x.length+3,4)*4,a6=C.f.a5(a1.y.length+3,4)*4,a7=C.f.a5(a1.z.length+3,4)*4,a8=C.f.a5(a0.e.a.length+3,4)*4
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
a=$.bv()
if(h){j=$.bu()
a=new Z.be(a.a|j.a)}if(g){j=$.bt()
a=new Z.be(a.a|j.a)}if(f){j=$.bw()
a=new Z.be(a.a|j.a)}if(e){j=$.bx()
a=new Z.be(a.a|j.a)}if(c){j=$.bs()
a=new Z.be(a.a|j.a)}return new A.hv(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
Y:function(a,b){H.k(a,"$ib",[T.e3],"$ab")},
ax:function(a,b){var u,t,s,r
for(u=this.dx.a,u=new J.ax(u,u.length,[H.u(u,0)]);u.E();){t=u.d
t.toString
s=$.j3
t.a=s==null?$.j3=new V.K(0,0,1):s
s=t.b
if(s!=null){r=s.ay(0,b,t)
if(r!=null)t.a=r.cY(t.a)}}},
jQ:function(a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4==null){a4=a3.dh()
u=a5.fr.j(0,a4.am)
if(u==null){u=A.nH(a4,a5.a)
t=u.b
if(t.length===0)H.t(P.w("May not cache a shader with no name."))
if(a5.fr.bp(0,t))H.t(P.w('Shader cache already contains a shader by the name "'+t+'".'))
a5.fr.n(0,t,u)}a4=a3.a=u
a6.e=null}s=a4.z
r=s.br
a4=a6.e
if(!(a4 instanceof Z.dq))a4=a6.e=null
if(a4==null||!a4.d.v(0,r)){a4=s.r1
if(a4)a6.d.au()
q=s.r2
if(q){p=a6.d
o=p.e
if(o!=null)++o.d
p.d.cs()
p.a.cs()
p=p.e
if(p!=null)p.ag(0)}p=s.ry
if(p){o=a6.d
n=o.e
if(n!=null)++n.d
o.a.j4()
o=o.e
if(o!=null)o.ag(0)}m=a6.d.j3(new Z.jg(a5.a),r)
m.aV($.bv()).e=a3.a.Q.c
if(a4)m.aV($.bu()).e=a3.a.cx.c
if(q)m.aV($.bt()).e=a3.a.ch.c
if(s.rx)m.aV($.bw()).e=a3.a.cy.c
if(p)m.aV($.bx()).e=a3.a.db.c
if(s.x1)m.aV($.bs()).e=a3.a.dx.c
a6.e=m}a4=T.e3
l=H.d([],[a4])
q=a3.a
p=a5.a
p.useProgram(q.r)
q.x.jg()
if(s.fx){q=a3.a
o=a5.dx
o=o.ga0(o)
q=q.dy
q.toString
q.ao(o.ah(0,!0))}if(s.fy){q=a3.a
o=a5.cx
if(o==null){o=a5.db
o=o.ga0(o)
n=a5.dx
n=a5.cx=o.u(0,n.ga0(n))
o=n}q=q.fr
q.toString
q.ao(o.ah(0,!0))}q=a3.a
o=a5.ch
if(o==null){o=a5.gjM()
n=a5.dx
n=a5.ch=o.u(0,n.ga0(n))
o=n}q=q.fy
q.toString
q.ao(o.ah(0,!0))
if(s.x2){q=a3.a
o=a3.b
q=q.k1
q.toString
q.ao(C.m.ah(o,!0))}if(s.y1){q=a3.a
o=a3.c
q=q.k2
q.toString
q.ao(C.m.ah(o,!0))}if(s.y2){q=a3.a
o=a3.d
q=q.k3
q.toString
q.ao(C.m.ah(o,!0))}if(s.av>0){k=a3.e.a.length
q=a3.a.k4
C.c.a3(q.a,q.d,k)
for(q=[P.r],j=0;j<k;++j){o=a3.a
n=a3.e.a
if(j>=n.length)return H.h(n,j)
n=n[j]
o.toString
H.f(n,"$iao")
o=o.r1
if(j>=o.length)return H.h(o,j)
o=o[j]
i=new Float32Array(H.ca(H.k(n.ah(0,!0),"$ib",q,"$ab")))
C.c.eQ(o.a,o.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=a3.a
o=a3.f.f
q=q.r2
q.toString
n=o.a
h=o.b
o=o.c
C.c.w(q.a,q.d,n,h,o)
break
case C.h:a3.Y(l,a3.f.d)
q=a3.a
o=a3.f.d
q.ak(q.rx,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.c.w(o.a,o.d,n,h,q)
break
case C.i:a3.Y(l,a3.f.e)
q=a3.a
o=a3.f.e
q.ac(q.ry,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.c.w(o.a,o.d,n,h,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=a3.a
o=a3.r.f
q=q.x2
q.toString
n=o.a
h=o.b
o=o.c
C.c.w(q.a,q.d,n,h,o)
break
case C.h:a3.Y(l,a3.r.d)
q=a3.a
o=a3.r.d
q.ak(q.y1,q.av,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.w(o.a,o.d,n,h,q)
break
case C.i:a3.Y(l,a3.r.e)
q=a3.a
o=a3.r.e
q.ac(q.y2,q.av,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.w(o.a,o.d,n,h,q)
break}switch(s.c){case C.d:break
case C.j:q=a3.a
o=a3.x.f
q=q.am
q.toString
n=o.a
h=o.b
o=o.c
C.c.w(q.a,q.d,n,h,o)
break
case C.h:a3.Y(l,a3.x.d)
q=a3.a
o=a3.x.d
q.ak(q.br,q.bs,o)
o=a3.a
q=a3.x.f
o=o.am
o.toString
n=q.a
h=q.b
q=q.c
C.c.w(o.a,o.d,n,h,q)
break
case C.i:a3.Y(l,a3.x.e)
q=a3.a
o=a3.x.e
q.ac(q.dT,q.bs,o)
o=a3.a
q=a3.x.f
o=o.am
o.toString
n=q.a
h=q.b
q=q.c
C.c.w(o.a,o.d,n,h,q)
break}switch(s.d){case C.d:break
case C.j:q=a3.a
o=a3.y.f
q=q.bt
q.toString
n=o.a
h=o.b
o=o.c
C.c.w(q.a,q.d,n,h,o)
break
case C.h:a3.Y(l,a3.y.d)
q=a3.a
o=a3.y.d
q.ak(q.dU,q.bu,o)
o=a3.a
q=a3.y.f
o=o.bt
o.toString
n=q.a
h=q.b
q=q.c
C.c.w(o.a,o.d,n,h,q)
break
case C.i:a3.Y(l,a3.y.e)
q=a3.a
o=a3.y.e
q.ac(q.dV,q.bu,o)
o=a3.a
q=a3.y.f
o=o.bt
o.toString
n=q.a
h=q.b
q=q.c
C.c.w(o.a,o.d,n,h,q)
break}switch(s.e){case C.d:break
case C.j:q=a3.a
o=a3.z.f
q=q.bv
q.toString
n=o.a
h=o.b
o=o.c
C.c.w(q.a,q.d,n,h,o)
o=a3.a
h=a3.z.ch
o=o.bx
C.c.T(o.a,o.d,h)
break
case C.h:a3.Y(l,a3.z.d)
q=a3.a
o=a3.z.d
q.ak(q.dW,q.bw,o)
o=a3.a
q=a3.z.f
o=o.bv
o.toString
n=q.a
h=q.b
q=q.c
C.c.w(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bx
C.c.T(q.a,q.d,h)
break
case C.i:a3.Y(l,a3.z.e)
q=a3.a
o=a3.z.e
q.ac(q.dX,q.bw,o)
o=a3.a
q=a3.z.f
o=o.bv
o.toString
n=q.a
h=q.b
q=q.c
C.c.w(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bx
C.c.T(q.a,q.d,h)
break}if(s.z>0){k=a3.dx.e.length
q=a3.a.e7
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga0(q)
for(q=a3.dx.e,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
n=a3.a.cB
if(f>=n.length)return H.h(n,f)
c=n[f]
n=g.cY(d.a)
h=n.a
b=n.b
a=n.c
a=n.A(0,Math.sqrt(h*h+b*b+a*a))
b=c.b
h=a.a
n=a.b
a=a.c
C.c.w(b.a,b.d,h,n,a)
a=d.c
n=c.c
C.c.w(n.a,n.d,a.a,a.b,a.c);++f}}if(s.Q>0){k=a3.dx.f.length
q=a3.a.e8
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga0(q)
for(q=a3.dx.f,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
n=a3.a.cC
if(f>=n.length)return H.h(n,f)
c=n[f]
n=d.gbc(d)
h=c.b
C.c.w(h.a,h.d,n.a,n.b,n.c)
n=g.bf(d.gbc(d))
h=c.c
C.c.w(h.a,h.d,n.a,n.b,n.c)
n=d.gal(d)
h=c.d
C.c.w(h.a,h.d,n.a,n.b,n.c)
n=d.gcm()
h=c.e
C.c.T(h.a,h.d,n)
n=d.gcn()
h=c.f
C.c.T(h.a,h.d,n)
n=d.gco()
h=c.r
C.c.T(h.a,h.d,n);++f}}if(s.ch>0){k=a3.dx.r.length
q=a3.a.e9
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga0(q)
for(q=a3.dx.r,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
n=a3.a.cD
if(f>=n.length)return H.h(n,f)
c=n[f]
n=d.gbc(d)
h=c.b
C.c.w(h.a,h.d,n.a,n.b,n.c)
n=d.gcA(d).kc()
h=c.c
C.c.w(h.a,h.d,n.a,n.b,n.c)
n=g.bf(d.gbc(d))
h=c.d
C.c.w(h.a,h.d,n.a,n.b,n.c)
n=d.gal(d)
h=c.e
C.c.w(h.a,h.d,n.a,n.b,n.c)
n=d.gka()
h=c.f
C.c.T(h.a,h.d,n)
n=d.gk9()
h=c.r
C.c.T(h.a,h.d,n)
n=d.gcm()
h=c.x
C.c.T(h.a,h.d,n)
n=d.gcn()
h=c.y
C.c.T(h.a,h.d,n)
n=d.gco()
h=c.z
C.c.T(h.a,h.d,n);++f}}if(s.cx>0){k=a3.dx.x.length
q=a3.a.ea
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga0(q)
for(q=a3.dx.x,o=q.length,n=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
h=a3.a.cE
if(f>=h.length)return H.h(h,f)
c=h[f]
h=d.gbd()
H.k(l,"$ib",n,"$ab")
if(!C.a.Z(l,h)){h.sb5(0,l.length)
C.a.h(l,h)}h=d.gcA(d)
b=c.d
C.c.w(b.a,b.d,h.a,h.b,h.c)
h=d.gbL()
b=c.b
C.c.w(b.a,b.d,h.a,h.b,h.c)
h=d.gbJ(d)
b=c.c
C.c.w(b.a,b.d,h.a,h.b,h.c)
h=g.cY(d.gcA(d))
b=h.a
a=h.b
a0=h.c
a0=h.A(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
h=a0.b
a0=a0.c
C.c.w(a.a,a.d,b,h,a0)
a0=d.gal(d)
h=c.f
C.c.w(h.a,h.d,a0.a,a0.b,a0.c)
a0=d.gbd()
h=a0.gb6(a0)
if(!h){h=c.x
C.c.a3(h.a,h.d,1)}else{h=c.r
b=a0.gb6(a0)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,a0.gb5(a0))
h=c.x
C.c.a3(h.a,h.d,0)}++f}}if(s.cy>0){k=a3.dx.y.length
q=a3.a.eb
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga0(q)
for(q=a3.dx.y,o=q.length,n=[P.r],h=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
b=a3.a.cF
if(f>=b.length)return H.h(b,f)
c=b[f]
b=d.gbd()
H.k(l,"$ib",h,"$ab")
if(!C.a.Z(l,b)){b.sb5(0,l.length)
C.a.h(l,b)}a1=g.u(0,d.ga0(d))
b=d.ga0(d)
a=$.cH
b=b.bf(a==null?$.cH=new V.a5(0,0,0):a)
a=c.b
C.c.w(a.a,a.d,b.a,b.b,b.c)
b=$.cH
b=a1.bf(b==null?$.cH=new V.a5(0,0,0):b)
a=c.c
C.c.w(a.a,a.d,b.a,b.b,b.c)
b=a1.em(0)
a=c.d
i=new Float32Array(H.ca(H.k(new V.dL(b.a,b.b,b.c,b.e,b.f,b.r,b.y,b.z,b.Q).ah(0,!0),"$ib",n,"$ab")))
C.c.eP(a.a,a.d,!1,i)
a=d.gal(d)
b=c.e
C.c.w(b.a,b.d,a.a,a.b,a.c)
a=d.gbd()
b=a.gb6(a)
if(!b){b=c.r
C.c.a3(b.a,b.d,1)}else{b=c.f
a0=a.gb6(a)
a2=b.a
b=b.d
if(!a0)a2.uniform1i(b,0)
else a2.uniform1i(b,a.gb5(a))
b=c.r
C.c.a3(b.a,b.d,0)}b=d.gcm()
a=c.x
C.c.T(a.a,a.d,b)
b=d.gcn()
a=c.y
C.c.T(a.a,a.d,b)
b=d.gco()
a=c.z
C.c.T(a.a,a.d,b);++f}}if(s.db>0){k=a3.dx.z.length
q=a3.a.ec
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga0(q)
for(q=a3.dx.z,o=q.length,a4=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
n=a3.a.cG
if(f>=n.length)return H.h(n,f)
c=n[f]
n=d.gbd()
H.k(l,"$ib",a4,"$ab")
if(!C.a.Z(l,n)){n.sb5(0,l.length)
C.a.h(l,n)}n=d.gbc(d)
h=c.b
C.c.w(h.a,h.d,n.a,n.b,n.c)
n=d.gcA(d)
h=c.c
C.c.w(h.a,h.d,n.a,n.b,n.c)
n=d.gbL()
h=c.d
C.c.w(h.a,h.d,n.a,n.b,n.c)
n=d.gbJ(d)
h=c.e
C.c.w(h.a,h.d,n.a,n.b,n.c)
n=g.bf(d.gbc(d))
h=c.f
C.c.w(h.a,h.d,n.a,n.b,n.c)
n=d.gbd()
h=n.gb6(n)
if(!h){n=c.x
C.c.a3(n.a,n.d,1)}else{h=c.r
b=n.gb6(n)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,n.gb5(n))
n=c.x
C.c.a3(n.a,n.d,0)}n=d.gal(d)
h=c.y
C.c.w(h.a,h.d,n.a,n.b,n.c)
n=d.gkd()
h=c.z
C.c.T(h.a,h.d,n)
n=d.gke()
h=c.Q
C.c.T(h.a,h.d,n)
n=d.gcm()
h=c.ch
C.c.T(h.a,h.d,n)
n=d.gcn()
h=c.cx
C.c.T(h.a,h.d,n)
n=d.gco()
h=c.cy
C.c.T(h.a,h.d,n);++f}}}switch(s.f){case C.d:break
case C.j:break
case C.h:a3.Y(l,a3.Q.d)
a4=a3.a
q=a3.Q.d
a4.ak(a4.dY,a4.by,q)
break
case C.i:a3.Y(l,a3.Q.e)
a4=a3.a
q=a3.Q.e
a4.ac(a4.dZ,a4.by,q)
break}if(s.fr){a4=a3.a
q=a5.Q
if(q==null){q=a5.db
q=a5.Q=q.ga0(q).em(0)}a4=a4.id
a4.toString
a4.ao(q.ah(0,!0))}if(s.dy){a3.Y(l,a3.ch)
a4=a3.a
q=a3.ch
a4.ac(a4.e_,a4.e0,q)
switch(s.r){case C.d:break
case C.j:a4=a3.a
q=a3.cx.f
a4=a4.bz
a4.toString
o=q.a
n=q.b
q=q.c
C.c.w(a4.a,a4.d,o,n,q)
break
case C.h:a3.Y(l,a3.cx.d)
a4=a3.a
q=a3.cx.d
a4.ak(a4.e1,a4.bA,q)
q=a3.a
a4=a3.cx.f
q=q.bz
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.w(q.a,q.d,o,n,a4)
break
case C.i:a3.Y(l,a3.cx.e)
a4=a3.a
q=a3.cx.e
a4.ac(a4.e2,a4.bA,q)
q=a3.a
a4=a3.cx.f
q=q.bz
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.w(q.a,q.d,o,n,a4)
break}switch(s.x){case C.d:break
case C.j:a4=a3.a
q=a3.cy.f
a4=a4.bC
a4.toString
o=q.a
n=q.b
q=q.c
C.c.w(a4.a,a4.d,o,n,q)
q=a3.a
n=a3.cy.ch
q=q.bB
C.c.T(q.a,q.d,n)
break
case C.h:a3.Y(l,a3.cy.d)
a4=a3.a
q=a3.cy.d
a4.ak(a4.e3,a4.bD,q)
q=a3.a
a4=a3.cy.f
q=q.bC
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.w(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bB
C.c.T(a4.a,a4.d,n)
break
case C.i:a3.Y(l,a3.cy.e)
a4=a3.a
q=a3.cy.e
a4.ac(a4.e4,a4.bD,q)
q=a3.a
a4=a3.cy.f
q=q.bC
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.w(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bB
C.c.T(a4.a,a4.d,n)
break}}a4=s.y
q=a4!==C.d
if(q){switch(a4){case C.d:break
case C.j:a4=a3.a
o=a3.db.f
a4=a4.bE
C.c.T(a4.a,a4.d,o)
break
case C.h:a3.Y(l,a3.db.d)
a4=a3.a
o=a3.db.d
a4.ak(a4.e5,a4.bF,o)
o=a3.a
a4=a3.db.f
o=o.bE
C.c.T(o.a,o.d,a4)
break
case C.i:a3.Y(l,a3.db.e)
a4=a3.a
o=a3.db.e
a4.ac(a4.e6,a4.bF,o)
o=a3.a
a4=a3.db.f
o=o.bE
C.c.T(o.a,o.d,a4)
break}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bo(a5)
a4=a6.e
a4.bo(a5)
a4.aW(a5)
a4.eO(a5)
if(q)p.disable(3042)
for(j=0;j<l.length;++j)l[j].eO(a5)
a4=a3.a
a4.toString
p.useProgram(null)
a4.x.jd()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dh().am},
sfB:function(a){this.e=H.k(a,"$ia6",[V.ao],"$aa6")}}
O.ht.prototype={}
O.dK.prototype={
aP:function(){}}
O.hu.prototype={}
O.b6.prototype={
dE:function(a){var u,t,s=this
if(!J.V(s.f,a)){u=s.f
s.f=a
t=new D.O(s.b+".color",u,a,[V.a3])
t.b=!0
s.a.ab(t)}},
aP:function(){this.f3()
this.dE(new V.a3(1,1,1))},
sal:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.j
t.aP()
u=t.a
u.a=null
u.ab(null)}t.dE(b)}}
O.hw.prototype={
i7:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.M().a)){u.ch=a
t=new D.O(u.b+".refraction",t,a,[P.r])
t.b=!0
u.a.ab(t)}},
aP:function(){this.bR()
this.i7(1)}}
O.hx.prototype={
cf:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.M().a)){u.ch=a
t=new D.O(u.b+".shininess",t,a,[P.r])
t.b=!0
u.a.ab(t)}},
aP:function(){this.bR()
this.cf(100)}}
O.c7.prototype={}
T.e3.prototype={}
V.bi.prototype={
aG:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dI.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)if(u[s].aG(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa8:function(a){this.a=H.k(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.au.prototype={
aG:function(a,b){return!this.f2(0,b)},
i:function(a){return"!["+this.d3(0)+"]"}}
V.hY.prototype={
aG:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c3(this.a),t=H.c3(this.b)
return u+".."+t},
$iaz:1}
V.i6.prototype={
f8:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aQ([P.p,P.U])
for(t=new H.cz(a,a.gl(a),[H.as(a,"z",0)]);t.E();)u.n(0,t.d,!0)
this.si6(u)},
aG:function(a,b){return this.a.bp(0,b)},
i:function(a){var u=this.a
return P.cN(u.ga6(u),0,null)},
si6:function(a){this.a=H.k(a,"$iH",[P.p,P.U],"$aH")},
$iaz:1}
V.cL.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cQ(this.a.k(0,b))
r.sa8(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
jj:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
i:function(a){return this.b},
sir:function(a){this.c=H.k(a,"$ib",[V.cQ],"$ab")}}
V.e8.prototype={
i:function(a){var u=H.lo(this.b,"\n","\\n"),t=H.lo(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cP.prototype={
aI:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.F)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
si_:function(a){var u=P.e
this.c=H.k(a,"$iH",[u,u],"$aH")}}
V.iz.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cL(this,b)
u.sir(H.d([],[V.cQ]))
u.d=null
this.a.n(0,b,u)}return u},
S:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cP(a)
u=P.e
t.si_(new H.aQ([u,u]))
this.b.n(0,a,t)}return t},
eN:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.e8]),k=this.c,j=[P.p],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.G(a,s)
q=k.jj(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cN(i,0,m)
throw H.c(P.w("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cN(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.e8(n==null?o.b:n,p,s)}++s}}},
sih:function(a){this.a=H.k(a,"$iH",[P.e,V.cL],"$aH")},
sij:function(a){this.b=H.k(a,"$iH",[P.e,V.cP],"$aH")}}
V.cQ.prototype={
i:function(a){return this.b.b+": "+this.d3(0)}}
X.ds.prototype={$ibp:1}
X.h1.prototype={
gD:function(){var u=this.x
return u==null?this.x=D.X():u}}
X.dS.prototype={
gD:function(){var u=this.f
return u==null?this.f=D.X():u},
aN:function(a){var u
H.f(a,"$iB")
u=this.f
if(u!=null)u.H(a)},
fs:function(){return this.aN(null)},
sb9:function(a){var u,t,s=this
if(!J.V(s.b,a)){u=s.b
if(u!=null)u.gD().P(0,s.gd7())
t=s.b
s.b=a
if(a!=null)a.gD().h(0,s.gd7())
u=new D.O("mover",t,s.b,[U.ac])
u.b=!0
s.aN(u)}},
$ibp:1,
$ids:1}
X.e2.prototype={}
V.bB.prototype={
bj:function(a){this.b=new P.h5(C.U)
this.c=null
this.sc_(H.d([],[[P.b,W.aE]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aE]))
u=a.split("\n")
for(l=u.length,t=[W.aE],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.I(q)
o=m.b.fG(q,0,q.length)
n=o==null?q:o
C.S.eY(p,H.lo(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaw(m.d),p)}},
ex:function(a,b){var u,t,s,r,q=this
H.k(b,"$ib",[P.e],"$ab")
q.sc_(H.d([],[[P.b,W.aE]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bq():t).eN(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)q.bI(t[r])},
sc_:function(a){this.d=H.k(a,"$ib",[[P.b,W.aE]],"$ab")}}
V.kG.prototype={
$1:function(a){H.f(a,"$ibb")
P.ln(C.e.eM(this.a.gjn(),2)+" fps")},
$S:49}
V.fI.prototype={
bI:function(a){var u=this
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
bq:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iA()
a1.c=a1.k(0,r)
u=a1.k(0,r).m(0,q)
t=V.y(new H.v("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).m(0,q)
u=V.y(new H.v("_"))
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
t=V.y(new H.v("."))
C.a.h(u.a,t)
t=a1.k(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).m(0,n)
t=V.a1("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).m(0,m)
u=V.y(new H.v(l))
C.a.h(t.a,u)
u=a1.k(0,m).m(0,m)
t=V.y(new H.v(l))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,k)
u=V.y(new H.v('"'))
C.a.h(t.a,u)
u=a1.k(0,k).m(0,j)
t=V.y(new H.v('"'))
C.a.h(u.a,t)
t=a1.k(0,k).m(0,i)
u=V.y(new H.v("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).m(0,k)
t=V.y(new H.v('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).m(0,k).a,new V.bi())
t=a1.k(0,r).m(0,h)
u=V.y(new H.v("'"))
C.a.h(t.a,u)
u=a1.k(0,h).m(0,g)
t=V.y(new H.v("'"))
C.a.h(u.a,t)
t=a1.k(0,h).m(0,f)
u=V.y(new H.v("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).m(0,h)
t=V.y(new H.v("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).m(0,h).a,new V.bi())
t=a1.k(0,r).m(0,e)
u=V.y(new H.v("/"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,d)
t=V.y(new H.v("/"))
C.a.h(u.a,t)
t=a1.k(0,d).m(0,c)
u=V.y(new H.v("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).m(0,d)
t=new V.au()
s=[V.az]
t.sa8(H.d([],s))
C.a.h(u.a,t)
u=V.y(new H.v("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,b)
t=V.y(new H.v("*"))
C.a.h(u.a,t)
t=a1.k(0,b).m(0,a)
u=V.y(new H.v("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,b)
t=new V.au()
t.sa8(H.d([],s))
C.a.h(u.a,t)
u=V.y(new H.v("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,c)
t=V.y(new H.v("/"))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,a0)
u=V.y(new H.v(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).m(0,a0)
t=V.y(new H.v(" \n\t"))
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
u=[P.e]
t.aI(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aI(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aI(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h2.prototype={
bI:function(a){var u=this
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
bq:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iA()
e.c=e.k(0,r)
u=e.k(0,r).m(0,q)
t=V.y(new H.v("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).m(0,q)
u=V.y(new H.v("_"))
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
t=V.y(new H.v("."))
C.a.h(u.a,t)
t=e.k(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=e.k(0,n).m(0,n)
t=V.a1("0","9")
C.a.h(u.a,t)
t=e.k(0,r).m(0,m)
u=V.y(new H.v(l))
C.a.h(t.a,u)
u=e.k(0,m).m(0,m)
t=V.y(new H.v(l))
C.a.h(u.a,t)
t=e.k(0,r).m(0,k)
u=V.y(new H.v("/"))
C.a.h(t.a,u)
u=e.k(0,k).m(0,j)
t=V.y(new H.v("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).m(0,m).a,new V.bi())
t=e.k(0,j).m(0,i)
u=V.y(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,j).m(0,j)
t=new V.au()
s=[V.az]
t.sa8(H.d([],s))
C.a.h(u.a,t)
u=V.y(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,h)
t=V.y(new H.v("#"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,h)
u=new V.au()
u.sa8(H.d([],s))
C.a.h(t.a,u)
t=V.y(new H.v("\n"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,g)
u=V.y(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,f)
t=V.y(new H.v(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).m(0,f)
u=V.y(new H.v(" \n\t"))
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
t=[P.e]
u.aI(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aI(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aI(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.h3.prototype={
bI:function(a){var u=this,t="#111"
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
bq:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iA()
l.c=l.k(0,s)
u=l.k(0,s).m(0,r)
t=V.y(new H.v("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).m(0,r)
u=V.y(new H.v("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).m(0,q)
t=V.y(new H.v("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).m(0,p)
t=V.y(new H.v("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).m(0,p)
u=V.y(new H.v("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).m(0,o)
t=V.y(new H.v('"'))
C.a.h(u.a,t)
t=l.k(0,o).m(0,n)
u=V.y(new H.v('"'))
C.a.h(t.a,u)
u=l.k(0,o).m(0,"EscStr")
t=V.y(new H.v("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").m(0,o)
u=V.y(new H.v('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).m(0,o).a,new V.bi())
C.a.h(l.k(0,s).m(0,m).a,new V.bi())
u=l.k(0,m).m(0,m)
t=new V.au()
t.sa8(H.d([],[V.az]))
C.a.h(u.a,t)
u=V.y(new H.v('</\\-!>=_"'))
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
t.aI(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
t=l.k(0,q)
t.d=t.a.S(q)
t=l.k(0,m)
t.d=t.a.S(m)
return l}}
V.hS.prototype={
ex:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.sc_(H.d([],[[P.b,W.aE]]))
this.O(C.a.m(b,"\n"),"#111")},
bI:function(a){},
bq:function(){return}}
V.hW.prototype={
dK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.m5().gcT().j(0,H.l(u))
if(t==null)if(d){c.$0()
m.dI(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lv(m.c).h(0,q)
o=W.nv("radio")
o.checked=s
o.name=u
u=W.o
W.ad(o,"change",H.n(new V.hX(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lv(m.c).h(0,r.createElement("br"))},
b1:function(a,b,c){return this.dK(a,b,c,!1)},
dI:function(a){var u,t,s=P.m5(),r=P.e,q=P.nD(s.gcT(),r,r)
q.n(0,this.a,a)
u=s.eE(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jU([],[]).cZ(""),"",t)}}
V.hX.prototype={
$1:function(a){var u=this
if(H.D(u.b.checked)){u.c.$0()
u.a.dI(u.d)}},
$S:22}
V.ia.prototype={
fa:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ad(q,"scroll",H.n(new V.ic(o),{func:1,ret:-1,args:[r]}),!1,r)},
dM:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.ia()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eN(C.a.jt(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q){p=s[q]
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
if(H.pc(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.f3(C.C,n,C.l,!1)
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
eU:function(a){var u,t,s,r=new V.fI("dart")
r.bj("dart")
u=new V.h2("glsl")
u.bj("glsl")
t=new V.h3("html")
t.bj("html")
s=C.a.jl(H.d([r,u,t],[V.bB]),new V.id(a))
if(s!=null)return s
r=new V.hS("plain")
r.bj("plain")
return r},
dL:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.k(b0,"$ib",[P.e],"$ab")
u=H.d([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dh(r).a4(r,"+")){C.a.n(b0,s,C.b.ap(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a4(r,"-")){C.a.n(b0,s,C.b.ap(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eU(a8)
q.ex(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.f3(C.C,a7,C.l,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lx()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.F)(r),++a0)C.a2.j_(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.F)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gV(r);a3.E();)c.appendChild(a3.gM(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
iT:function(a){var u,t,s,r,q,p,o,n="auto"
H.k(a,"$ib",[P.e],"$ab")
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
s=H.f(r.insertCell(-1),"$iba").style
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
o=H.f(r.insertCell(-1),"$iba")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
ia:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iA()
u.c=u.k(0,q)
t=u.k(0,q).m(0,p)
s=V.y(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).m(0,p)
s=new V.au()
r=[V.az]
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.v("*"))
C.a.h(s.a,t)
t=u.k(0,p).m(0,"BoldEnd")
s=V.y(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,o)
s=V.y(new H.v("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).m(0,o)
s=new V.au()
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.v("_"))
C.a.h(s.a,t)
t=u.k(0,o).m(0,n)
s=V.y(new H.v("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,m)
s=V.y(new H.v("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).m(0,m)
s=new V.au()
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.v("`"))
C.a.h(s.a,t)
t=u.k(0,m).m(0,"CodeEnd")
s=V.y(new H.v("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,l)
s=V.y(new H.v("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).m(0,k)
s=V.y(new H.v("|"))
C.a.h(t.a,s)
s=u.k(0,l).m(0,j)
t=V.y(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).m(0,l)
t=new V.au()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.v("|]"))
C.a.h(t.a,s)
s=u.k(0,k).m(0,j)
t=V.y(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).m(0,k)
t=new V.au()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.v("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).m(0,i).a,new V.bi())
s=u.k(0,i).m(0,i)
t=new V.au()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.v("*_`["))
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
V.ic.prototype={
$1:function(a){P.m1(C.t,new V.ib(this.a))},
$S:22}
V.ib.prototype={
$0:function(){var u=C.e.an(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:0}
V.id.prototype={
$1:function(a){return H.f(a,"$ibB").a===this.a},
$S:51}
U.kx.prototype={
$0:function(){this.a.sai(0,F.lj(1,null,null,1))},
$S:0}
U.ky.prototype={
$0:function(){this.a.sai(0,F.mA(!0,40,1))},
$S:0}
U.kz.prototype={
$0:function(){this.a.sai(0,F.mA(!1,40,0))},
$S:0}
U.kA.prototype={
$0:function(){this.a.sai(0,F.pb(6,6))},
$S:0}
U.kB.prototype={
$0:function(){this.a.sai(0,F.mO())},
$S:0}
U.kC.prototype={
$0:function(){this.a.sai(0,F.p2())},
$S:0}
U.kD.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.dL("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dL("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.f_=u.i
u=J.dC.prototype
u.f1=u.i
u=P.i.prototype
u.f0=u.bM
u=W.W.prototype
u.bQ=u.ad
u=W.eN.prototype
u.f4=u.at
u=O.dK.prototype
u.f3=u.aP
u=O.b6.prototype
u.bR=u.aP
u=V.dI.prototype
u.f2=u.aG
u.d3=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oI","ob",11)
u(P,"oJ","oc",11)
u(P,"oK","od",11)
t(P,"mz","oG",3)
s(W,"oW",4,null,["$4"],["of"],20,0)
s(W,"oX",4,null,["$4"],["og"],20,0)
var m
r(m=E.an.prototype,"gev",0,0,null,["$1","$0"],["ew","jE"],1,0)
r(m,"ges",0,0,null,["$1","$0"],["eu","jD"],1,0)
r(m,"geq",0,0,null,["$1","$0"],["er","jA"],1,0)
q(m,"gjy","jz",10)
q(m,"gjB","jC",10)
r(m=E.e7.prototype,"gd4",0,0,null,["$1","$0"],["d6","d5"],1,0)
p(m,"gjS","eF",3)
o(m=X.ee.prototype,"ghp","hq",13)
o(m,"ghb","hc",13)
o(m,"ghj","hk",4)
o(m,"ght","hu",26)
o(m,"ghr","hs",26)
o(m,"ghx","hy",4)
o(m,"ghB","hC",4)
o(m,"ghn","ho",4)
o(m,"ghz","hA",4)
o(m,"ghl","hm",4)
o(m,"ghD","hE",36)
o(m,"ghF","hG",13)
o(m,"ghS","hT",12)
o(m,"ghO","hP",12)
o(m,"ghQ","hR",12)
r(D.bD.prototype,"gff",0,0,null,["$1","$0"],["az","fg"],1,0)
r(m=D.dE.prototype,"gdv",0,0,null,["$1","$0"],["dw","hv"],1,0)
o(m,"ghI","hJ",38)
q(m,"gh5","h6",18)
q(m,"ghM","hN",18)
n(V.Y.prototype,"gl","cL",15)
n(V.K.prototype,"gl","cL",15)
r(m=U.cw.prototype,"gaM",0,0,null,["$1","$0"],["J","a7"],1,0)
q(m,"gh3","h4",30)
q(m,"ghK","hL",30)
r(m=U.ef.prototype,"gaM",0,0,null,["$1","$0"],["J","a7"],1,0)
o(m,"gc2","c3",2)
o(m,"gc4","c5",2)
o(m,"gc6","c7",2)
r(m=U.eg.prototype,"gaM",0,0,null,["$1","$0"],["J","a7"],1,0)
o(m,"gc2","c3",2)
o(m,"gc4","c5",2)
o(m,"gc6","c7",2)
o(m,"gfY","fZ",2)
o(m,"gh_","h0",2)
o(m,"gip","iq",2)
o(m,"gim","io",2)
o(m,"gik","il",2)
o(U.eh.prototype,"gh1","h2",2)
r(m=M.dx.prototype,"gaq",0,0,null,["$1","$0"],["aA","fh"],1,0)
q(m,"ghf","hg",10)
q(m,"ghh","hi",10)
r(m=O.dJ.prototype,"ghd",0,0,null,["$1","$0"],["ab","he"],1,0)
r(m,"gi2",0,0,null,["$1","$0"],["dC","i3"],1,0)
q(m,"gh7","h8",29)
q(m,"gh9","ha",29)
r(X.dS.prototype,"gd7",0,0,null,["$1","$0"],["aN","fs"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.kW,J.a,J.ax,P.eA,P.i,H.cz,P.b3,H.bX,H.cY,H.fB,H.iF,P.bE,H.cp,H.eS,P.ae,H.hg,H.hi,H.hb,P.eY,P.bg,P.aJ,P.ek,P.im,P.cM,P.io,P.bb,P.am,P.k9,P.jO,P.c8,P.ez,P.z,P.k1,P.ho,P.bU,P.h6,P.k7,P.k6,P.U,P.ay,P.ab,P.b2,P.hQ,P.e0,P.es,P.h0,P.bF,P.b,P.H,P.N,P.av,P.e,P.ah,P.c9,P.iV,P.jR,W.fE,W.bN,W.G,W.dQ,W.eN,W.jX,W.dz,W.aB,W.jN,W.f4,P.jT,P.jI,P.T,O.a6,O.cA,E.fv,E.an,E.hZ,E.e7,Z.ej,Z.jg,Z.dq,Z.bG,Z.be,D.fy,D.bW,D.B,X.dr,X.dD,X.hd,X.hl,X.aA,X.hE,X.iB,X.ee,D.bD,D.a8,D.dT,D.e_,D.e4,D.e5,D.e6,V.a3,V.aN,V.fS,V.dL,V.ao,V.aa,V.a5,V.b9,V.dW,V.Y,V.K,U.ef,U.eg,U.eh,M.dx,A.dm,A.fo,A.hv,A.cR,A.cV,A.cT,A.cW,A.cU,A.cX,A.bV,A.ea,A.iP,F.a9,F.fV,F.bn,F.hf,F.bJ,F.dZ,F.i7,F.i8,F.i9,F.ai,F.j4,F.j5,F.j8,F.ja,F.jb,F.jc,O.c7,O.dK,V.bi,V.az,V.dI,V.hY,V.i6,V.cL,V.e8,V.cP,V.iz,X.ds,X.e2,X.dS,V.bB,V.hW,V.ia])
s(J.a,[J.h9,J.dB,J.dC,J.aP,J.bH,J.bl,H.cD,H.bI,W.j,W.fk,W.bS,W.b0,W.b1,W.a_,W.em,W.fJ,W.fK,W.eo,W.dw,W.eq,W.fM,W.o,W.et,W.aO,W.h4,W.ev,W.cx,W.dG,W.hy,W.eB,W.eC,W.aR,W.eD,W.eG,W.aS,W.eK,W.eM,W.aU,W.eO,W.aV,W.eT,W.aG,W.eW,W.iy,W.aX,W.eZ,W.iD,W.j_,W.f5,W.f7,W.f9,W.fb,W.fd,P.b5,P.ex,P.b8,P.eI,P.hV,P.eU,P.bc,P.f0,P.fp,P.el,P.dn,P.dU,P.c5,P.dY,P.eb,P.eQ])
s(J.dC,[J.hR,J.bM,J.bm])
t(J.kV,J.aP)
s(J.bH,[J.dA,J.ha])
t(P.hk,P.eA)
s(P.hk,[H.ec,W.jo,W.ar,P.fX])
t(H.v,H.ec)
s(P.i,[H.fP,H.hp,H.d_])
s(H.fP,[H.c0,H.hh])
s(P.b3,[H.hq,H.jh])
t(H.hr,H.c0)
t(H.fC,H.fB)
s(P.bE,[H.hN,H.hc,H.iT,H.iH,H.fx,H.i4,P.fn,P.dR,P.aM,P.iU,P.iR,P.c6,P.fA,P.fH])
s(H.cp,[H.kK,H.iu,H.kr,H.ks,H.kt,P.jk,P.jj,P.jl,P.jm,P.k0,P.k_,P.jv,P.jz,P.jw,P.jx,P.jy,P.jC,P.jD,P.jB,P.jA,P.ip,P.iq,P.kh,P.jL,P.jK,P.jM,P.hj,P.hn,P.fN,P.fO,P.iZ,P.iW,P.iX,P.iY,P.k2,P.k3,P.k5,P.k4,P.kd,P.kc,P.ke,P.kf,W.fQ,W.hA,W.hC,W.i3,W.il,W.ju,W.hL,W.hK,W.jP,W.jQ,W.jZ,W.k8,P.jV,P.kj,P.fY,P.fZ,P.fr,E.i_,E.i0,E.i1,E.ix,D.fT,D.fU,F.ka,F.kk,F.km,F.kn,F.ko,F.kH,F.kI,F.kJ,F.kv,F.kl,F.je,F.jd,F.j6,F.j7,V.kG,V.hX,V.ic,V.ib,V.id,U.kx,U.ky,U.kz,U.kA,U.kB,U.kC,U.kD])
s(H.iu,[H.ij,H.cn])
t(H.ji,P.fn)
t(P.hm,P.ae)
s(P.hm,[H.aQ,W.jn])
t(H.dN,H.bI)
s(H.dN,[H.d4,H.d6])
t(H.d5,H.d4)
t(H.cE,H.d5)
t(H.d7,H.d6)
t(H.dO,H.d7)
s(H.dO,[H.hF,H.hG,H.hH,H.hI,H.hJ,H.dP,H.cF])
t(P.jJ,P.k9)
t(P.jH,P.jO)
t(P.f2,P.ho)
t(P.ed,P.f2)
s(P.bU,[P.ft,P.fR])
t(P.bC,P.io)
s(P.bC,[P.fu,P.h5,P.j2,P.j1])
t(P.j0,P.fR)
s(P.ab,[P.r,P.p])
s(P.aM,[P.c4,P.h7])
t(P.jq,P.c9)
s(W.j,[W.E,W.fW,W.cB,W.aT,W.d8,W.aW,W.aH,W.da,W.jf,W.d0,P.fs,P.bR])
s(W.E,[W.W,W.bA,W.d1])
s(W.W,[W.x,P.q])
s(W.x,[W.dl,W.fl,W.cm,W.bz,W.bT,W.aE,W.h_,W.cy,W.i5,W.ba,W.e1,W.is,W.it,W.cO])
s(W.b0,[W.cq,W.fF,W.fG])
t(W.fD,W.b1)
t(W.cr,W.em)
t(W.ep,W.eo)
t(W.dv,W.ep)
t(W.er,W.eq)
t(W.fL,W.er)
t(W.aF,W.bS)
t(W.eu,W.et)
t(W.cu,W.eu)
t(W.ew,W.ev)
t(W.bY,W.ew)
t(W.bL,W.o)
s(W.bL,[W.b4,W.af,W.aY])
t(W.hz,W.eB)
t(W.hB,W.eC)
t(W.eE,W.eD)
t(W.hD,W.eE)
t(W.eH,W.eG)
t(W.cG,W.eH)
t(W.eL,W.eK)
t(W.hT,W.eL)
t(W.i2,W.eM)
t(W.d9,W.d8)
t(W.ig,W.d9)
t(W.eP,W.eO)
t(W.ih,W.eP)
t(W.ik,W.eT)
t(W.eX,W.eW)
t(W.iv,W.eX)
t(W.db,W.da)
t(W.iw,W.db)
t(W.f_,W.eZ)
t(W.iC,W.f_)
t(W.bf,W.af)
t(W.f6,W.f5)
t(W.jp,W.f6)
t(W.en,W.dw)
t(W.f8,W.f7)
t(W.jE,W.f8)
t(W.fa,W.f9)
t(W.eF,W.fa)
t(W.fc,W.fb)
t(W.jS,W.fc)
t(W.fe,W.fd)
t(W.jW,W.fe)
t(W.jr,W.jn)
t(W.js,P.im)
t(W.l7,W.js)
t(W.jt,P.cM)
t(W.jY,W.eN)
t(P.jU,P.jT)
t(P.al,P.jI)
t(P.ey,P.ex)
t(P.he,P.ey)
t(P.eJ,P.eI)
t(P.hO,P.eJ)
t(P.cJ,P.q)
t(P.eV,P.eU)
t(P.ir,P.eV)
t(P.f1,P.f0)
t(P.iE,P.f1)
t(P.fq,P.el)
t(P.hP,P.bR)
t(P.eR,P.eQ)
t(P.ii,P.eR)
s(E.fv,[Z.dp,A.cK,T.e3])
s(D.B,[D.bZ,D.c_,D.O,X.hU])
s(X.hU,[X.dH,X.bo,X.cC,X.e9])
s(O.a6,[D.dE,U.cw])
s(D.fy,[U.fz,U.ac])
s(U.ac,[U.dt,U.dX])
t(A.hs,A.cK)
s(A.ea,[A.Q,A.iL,A.iM,A.iO,A.iJ,A.a4,A.iK,A.P,A.iN,A.iQ,A.cS,A.aC,A.ap,A.aq])
t(F.ie,F.fV)
t(F.iI,F.hf)
t(F.j9,F.ja)
t(F.hM,F.jb)
t(O.dJ,O.c7)
s(O.dK,[O.ht,O.hu,O.b6])
s(O.b6,[O.hw,O.hx])
s(V.dI,[V.au,V.cQ])
t(X.h1,X.e2)
s(V.bB,[V.fI,V.h2,V.h3,V.hS])
u(H.ec,H.cY)
u(H.d4,P.z)
u(H.d5,H.bX)
u(H.d6,P.z)
u(H.d7,H.bX)
u(P.eA,P.z)
u(P.f2,P.k1)
u(W.em,W.fE)
u(W.eo,P.z)
u(W.ep,W.G)
u(W.eq,P.z)
u(W.er,W.G)
u(W.et,P.z)
u(W.eu,W.G)
u(W.ev,P.z)
u(W.ew,W.G)
u(W.eB,P.ae)
u(W.eC,P.ae)
u(W.eD,P.z)
u(W.eE,W.G)
u(W.eG,P.z)
u(W.eH,W.G)
u(W.eK,P.z)
u(W.eL,W.G)
u(W.eM,P.ae)
u(W.d8,P.z)
u(W.d9,W.G)
u(W.eO,P.z)
u(W.eP,W.G)
u(W.eT,P.ae)
u(W.eW,P.z)
u(W.eX,W.G)
u(W.da,P.z)
u(W.db,W.G)
u(W.eZ,P.z)
u(W.f_,W.G)
u(W.f5,P.z)
u(W.f6,W.G)
u(W.f7,P.z)
u(W.f8,W.G)
u(W.f9,P.z)
u(W.fa,W.G)
u(W.fb,P.z)
u(W.fc,W.G)
u(W.fd,P.z)
u(W.fe,W.G)
u(P.ex,P.z)
u(P.ey,W.G)
u(P.eI,P.z)
u(P.eJ,W.G)
u(P.eU,P.z)
u(P.eV,W.G)
u(P.f0,P.z)
u(P.f1,W.G)
u(P.el,P.ae)
u(P.eQ,P.z)
u(P.eR,W.G)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.bz.prototype
C.r=W.bT.prototype
C.S=W.aE.prototype
C.V=J.a.prototype
C.a=J.aP.prototype
C.f=J.dA.prototype
C.m=J.dB.prototype
C.e=J.bH.prototype
C.b=J.bl.prototype
C.W=J.bm.prototype
C.a1=W.cG.prototype
C.F=J.hR.prototype
C.c=P.c5.prototype
C.a2=W.ba.prototype
C.G=W.e1.prototype
C.w=J.bM.prototype
C.H=W.bf.prototype
C.I=W.d0.prototype
C.a3=new P.fu()
C.J=new P.ft()
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

C.Q=new P.hQ()
C.l=new P.j0()
C.R=new P.j2()
C.k=new P.jJ()
C.d=new A.bV(0,"ColorSourceType.None")
C.j=new A.bV(1,"ColorSourceType.Solid")
C.h=new A.bV(2,"ColorSourceType.Texture2D")
C.i=new A.bV(3,"ColorSourceType.TextureCube")
C.t=new P.b2(0)
C.T=new P.b2(5e6)
C.U=new P.h6("element",!0,!1,!1,!1)
C.A=H.d(u([127,2047,65535,1114111]),[P.p])
C.n=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.p])
C.X=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.o=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.p])
C.p=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.p])
C.Y=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.B=H.d(u([]),[P.e])
C.Z=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.p])
C.C=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.q=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.p])
C.D=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.p])
C.a_=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.p])
C.E=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.p])
C.u=H.d(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.v=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.a0=new H.fC(0,{},C.B,[P.e,P.e])})()
var v={mangledGlobalNames:{p:"int",r:"double",ab:"num",e:"String",U:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.N},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.af]},{func:1,ret:P.N,args:[D.B]},{func:1,ret:P.N,args:[F.a9]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.N,args:[F.ai,P.r,P.r]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.p,[P.i,E.an]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.r},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,]},{func:1,ret:-1,args:[P.p,[P.i,D.a8]]},{func:1,ret:V.a5,args:[P.r]},{func:1,ret:P.U,args:[W.W,P.e,P.e,W.bN]},{func:1,ret:P.U,args:[W.E]},{func:1,ret:P.N,args:[W.o]},{func:1,ret:P.e,args:[P.p]},{func:1,ret:P.U,args:[W.aB]},{func:1,ret:P.U,args:[P.e]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:P.N,args:[,]},{func:1,ret:-1,args:[P.p,[P.i,V.ao]]},{func:1,ret:-1,args:[P.p,[P.i,U.ac]]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:W.W,args:[W.E]},{func:1,args:[W.o]},{func:1,ret:P.T,args:[,,]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:P.T,args:[P.p]},{func:1,ret:P.U,args:[[P.i,D.a8]]},{func:1,ret:P.N,args:[P.e,,]},{func:1,ret:P.N,args:[P.e]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.p]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:[P.H,P.e,P.e],args:[[P.H,P.e,P.e],P.e]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.N,args:[,],opt:[P.av]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[P.bb]},{func:1,args:[P.e]},{func:1,ret:P.U,args:[V.bB]},{func:1,args:[,P.e]},{func:1,ret:P.N,args:[P.ab]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b_=0
$.co=null
$.lz=null
$.lb=!1
$.mF=null
$.mx=null
$.mL=null
$.kp=null
$.ku=null
$.ll=null
$.cb=null
$.df=null
$.dg=null
$.lc=!1
$.a2=C.k
$.aw=[]
$.bk=null
$.kS=null
$.lG=null
$.lF=null
$.d3=P.kY(P.e,P.bF)
$.lP=null
$.lT=null
$.cH=null
$.lX=null
$.m8=null
$.mc=null
$.ma=null
$.mb=null
$.j3=null
$.m9=null
$.lS=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pj","mQ",function(){return H.mE("_$dart_dartClosure")})
u($,"pk","lq",function(){return H.mE("_$dart_js")})
u($,"pq","mR",function(){return H.bd(H.iG({
toString:function(){return"$receiver$"}}))})
u($,"pr","mS",function(){return H.bd(H.iG({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ps","mT",function(){return H.bd(H.iG(null))})
u($,"pt","mU",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pw","mX",function(){return H.bd(H.iG(void 0))})
u($,"px","mY",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pv","mW",function(){return H.bd(H.m3(null))})
u($,"pu","mV",function(){return H.bd(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pz","n_",function(){return H.bd(H.m3(void 0))})
u($,"py","mZ",function(){return H.bd(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pP","lr",function(){return P.oa()})
u($,"pB","n0",function(){return P.o7()})
u($,"pQ","n4",function(){return H.nI(H.ca(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"pS","n6",function(){return P.nX("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pT","n7",function(){return P.oz()})
u($,"pR","n5",function(){return P.lJ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"pI","n3",function(){return Z.aI(0)})
u($,"pC","n1",function(){return Z.aI(511)})
u($,"pK","bv",function(){return Z.aI(1)})
u($,"pJ","bu",function(){return Z.aI(2)})
u($,"pE","bt",function(){return Z.aI(4)})
u($,"pL","bw",function(){return Z.aI(8)})
u($,"pM","bx",function(){return Z.aI(16)})
u($,"pF","di",function(){return Z.aI(32)})
u($,"pG","dj",function(){return Z.aI(64)})
u($,"pH","n2",function(){return Z.aI(96)})
u($,"pN","cl",function(){return Z.aI(128)})
u($,"pD","bs",function(){return Z.aI(256)})
u($,"pi","mP",function(){return new V.fS(1e-9)})
u($,"ph","M",function(){return $.mP()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cD,DataView:H.bI,ArrayBufferView:H.bI,Float32Array:H.cE,Float64Array:H.cE,Int16Array:H.hF,Int32Array:H.hG,Int8Array:H.hH,Uint16Array:H.hI,Uint32Array:H.hJ,Uint8ClampedArray:H.dP,CanvasPixelArray:H.dP,Uint8Array:H.cF,HTMLAudioElement:W.x,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLImageElement:W.x,HTMLLIElement:W.x,HTMLLabelElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMediaElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLVideoElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,AccessibleNodeList:W.fk,HTMLAnchorElement:W.dl,HTMLAreaElement:W.fl,HTMLBaseElement:W.cm,Blob:W.bS,HTMLBodyElement:W.bz,HTMLCanvasElement:W.bT,CDATASection:W.bA,CharacterData:W.bA,Comment:W.bA,ProcessingInstruction:W.bA,Text:W.bA,CSSNumericValue:W.cq,CSSUnitValue:W.cq,CSSPerspective:W.fD,CSSCharsetRule:W.a_,CSSConditionRule:W.a_,CSSFontFaceRule:W.a_,CSSGroupingRule:W.a_,CSSImportRule:W.a_,CSSKeyframeRule:W.a_,MozCSSKeyframeRule:W.a_,WebKitCSSKeyframeRule:W.a_,CSSKeyframesRule:W.a_,MozCSSKeyframesRule:W.a_,WebKitCSSKeyframesRule:W.a_,CSSMediaRule:W.a_,CSSNamespaceRule:W.a_,CSSPageRule:W.a_,CSSRule:W.a_,CSSStyleRule:W.a_,CSSSupportsRule:W.a_,CSSViewportRule:W.a_,CSSStyleDeclaration:W.cr,MSStyleCSSProperties:W.cr,CSS2Properties:W.cr,CSSImageValue:W.b0,CSSKeywordValue:W.b0,CSSPositionValue:W.b0,CSSResourceValue:W.b0,CSSURLImageValue:W.b0,CSSStyleValue:W.b0,CSSMatrixComponent:W.b1,CSSRotation:W.b1,CSSScale:W.b1,CSSSkew:W.b1,CSSTranslation:W.b1,CSSTransformComponent:W.b1,CSSTransformValue:W.fF,CSSUnparsedValue:W.fG,DataTransferItemList:W.fJ,HTMLDivElement:W.aE,DOMException:W.fK,ClientRectList:W.dv,DOMRectList:W.dv,DOMRectReadOnly:W.dw,DOMStringList:W.fL,DOMTokenList:W.fM,Element:W.W,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aF,FileList:W.cu,FileWriter:W.fW,HTMLFormElement:W.h_,Gamepad:W.aO,History:W.h4,HTMLCollection:W.bY,HTMLFormControlsCollection:W.bY,HTMLOptionsCollection:W.bY,ImageData:W.cx,HTMLInputElement:W.cy,KeyboardEvent:W.b4,Location:W.dG,MediaList:W.hy,MessagePort:W.cB,MIDIInputMap:W.hz,MIDIOutputMap:W.hB,MimeType:W.aR,MimeTypeArray:W.hD,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cG,RadioNodeList:W.cG,Plugin:W.aS,PluginArray:W.hT,RTCStatsReport:W.i2,HTMLSelectElement:W.i5,SourceBuffer:W.aT,SourceBufferList:W.ig,SpeechGrammar:W.aU,SpeechGrammarList:W.ih,SpeechRecognitionResult:W.aV,Storage:W.ik,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.ba,HTMLTableDataCellElement:W.ba,HTMLTableHeaderCellElement:W.ba,HTMLTableElement:W.e1,HTMLTableRowElement:W.is,HTMLTableSectionElement:W.it,HTMLTemplateElement:W.cO,TextTrack:W.aW,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.iv,TextTrackList:W.iw,TimeRanges:W.iy,Touch:W.aX,TouchEvent:W.aY,TouchList:W.iC,TrackDefaultList:W.iD,CompositionEvent:W.bL,FocusEvent:W.bL,TextEvent:W.bL,UIEvent:W.bL,URL:W.j_,VideoTrackList:W.jf,WheelEvent:W.bf,Window:W.d0,DOMWindow:W.d0,Attr:W.d1,CSSRuleList:W.jp,ClientRect:W.en,DOMRect:W.en,GamepadList:W.jE,NamedNodeMap:W.eF,MozNamedAttrMap:W.eF,SpeechRecognitionResultList:W.jS,StyleSheetList:W.jW,SVGLength:P.b5,SVGLengthList:P.he,SVGNumber:P.b8,SVGNumberList:P.hO,SVGPointList:P.hV,SVGScriptElement:P.cJ,SVGStringList:P.ir,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bc,SVGTransformList:P.iE,AudioBuffer:P.fp,AudioParamMap:P.fq,AudioTrackList:P.fs,AudioContext:P.bR,webkitAudioContext:P.bR,BaseAudioContext:P.bR,OfflineAudioContext:P.hP,WebGLBuffer:P.dn,WebGLProgram:P.dU,WebGL2RenderingContext:P.c5,WebGLShader:P.dY,WebGLUniformLocation:P.eb,SQLResultSetRowList:P.ii})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dN.$nativeSuperclassTag="ArrayBufferView"
H.d4.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.dO.$nativeSuperclassTag="ArrayBufferView"
W.d8.$nativeSuperclassTag="EventTarget"
W.d9.$nativeSuperclassTag="EventTarget"
W.da.$nativeSuperclassTag="EventTarget"
W.db.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.mI,[])
else U.mI([])})})()
//# sourceMappingURL=test.dart.js.map
