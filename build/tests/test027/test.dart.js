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
a[c]=function(){a[c]=function(){H.oe(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.k6(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jO:function jO(a){this.a=a},
jb:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
fk:function(){return new P.bS("No element")},
mv:function(){return new P.bS("Too many elements")},
mu:function(){return new P.bS("Too few elements")},
t:function t(a){this.a=a},
f0:function f0(){},
bJ:function bJ(){},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fA:function fA(a,b,c){this.a=a
this.b=b
this.$ti=c},
fB:function fB(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fC:function fC(a,b,c){this.a=a
this.b=b
this.$ti=c},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
i3:function i3(a,b,c){this.a=a
this.b=b
this.$ti=c},
bG:function bG(){},
cH:function cH(){},
e7:function e7(){},
mm:function(){throw H.c(P.Y("Cannot modify unmodifiable Map"))},
c3:function(a){var u,t
u=H.F(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nX:function(a){return v.types[H.a3(a)]},
o3:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iaI},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ao(a)
if(typeof u!=="string")throw H.c(H.an(a))
return u},
mT:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fl(u)
t=u[0]
s=u[1]
return new H.fY(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cq:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mQ:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.F(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a7(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.J(r,p)|32)>s)return}return parseInt(a,b)},
bO:function(a){return H.mH(a)+H.k3(H.bx(a),0,null)},
mH:function(a){var u,t,s,r,q,p,o,n,m
u=J.R(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$ibu){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c3(r.length>1&&C.c.J(r,0)===36?C.c.ay(r,1):r)},
mI:function(){if(!!self.location)return self.location.href
return},
kN:function(a){var u,t,s,r,q
H.eF(a)
u=J.aF(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mR:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.an(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.b_(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.an(r))}return H.kN(u)},
kO:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.an(s))
if(s<0)throw H.c(H.an(s))
if(s>65535)return H.mR(a)}return H.kN(a)},
mS:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bP:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.b_(u,10))>>>0,56320|u&1023)}}throw H.c(P.a7(a,0,1114111,null,null))},
bN:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mP:function(a){var u=H.bN(a).getFullYear()+0
return u},
mN:function(a){var u=H.bN(a).getMonth()+1
return u},
mJ:function(a){var u=H.bN(a).getDate()+0
return u},
mK:function(a){var u=H.bN(a).getHours()+0
return u},
mM:function(a){var u=H.bN(a).getMinutes()+0
return u},
mO:function(a){var u=H.bN(a).getSeconds()+0
return u},
mL:function(a){var u=H.bN(a).getMilliseconds()+0
return u},
A:function(a){throw H.c(H.an(a))},
e:function(a,b){if(a==null)J.aF(a)
throw H.c(H.bZ(a,b))},
bZ:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
u=H.a3(J.aF(a))
if(!(b<0)){if(typeof u!=="number")return H.A(u)
t=b>=u}else t=!0
if(t)return P.bI(b,a,"index",null,u)
return P.dK(b,"index",null)},
nQ:function(a,b,c){if(a>c)return new P.bQ(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bQ(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
an:function(a){return new P.aG(!0,a,null,null)},
nM:function(a){if(typeof a!=="number")throw H.c(H.an(a))
return a},
c:function(a){var u
if(a==null)a=new P.dF()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lJ})
u.name=""}else u.toString=H.lJ
return u},
lJ:function(){return J.ao(this.dartException)},
q:function(a){throw H.c(a)},
z:function(a){throw H.c(P.b1(a))},
aX:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ht(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kZ:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kI:function(a,b){return new H.fQ(a,b==null?null:b.method)},
jP:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fo(a,t,u?null:b.receiver)},
ac:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jA(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.b_(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jP(H.j(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kI(H.j(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lN()
p=$.lO()
o=$.lP()
n=$.lQ()
m=$.lT()
l=$.lU()
k=$.lS()
$.lR()
j=$.lW()
i=$.lV()
h=q.ap(t)
if(h!=null)return u.$1(H.jP(H.F(t),h))
else{h=p.ap(t)
if(h!=null){h.method="call"
return u.$1(H.jP(H.F(t),h))}else{h=o.ap(t)
if(h==null){h=n.ap(t)
if(h==null){h=m.ap(t)
if(h==null){h=l.ap(t)
if(h==null){h=k.ap(t)
if(h==null){h=n.ap(t)
if(h==null){h=j.ap(t)
if(h==null){h=i.ap(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kI(H.F(t),h))}}return u.$1(new H.hH(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dT()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aG(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dT()
return a},
c1:function(a){var u
if(a==null)return new H.es(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.es(a)},
nT:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.q(0,a[t],a[s])}return b},
o2:function(a,b,c,d,e,f){H.d(a,"$ibm")
switch(H.a3(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
bY:function(a,b){var u
H.a3(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o2)
a.$identity=u
return u},
ml:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.R(d).$ia){u.$reflectionInfo=d
s=H.mT(u).r}else s=d
r=e?Object.create(new H.he().constructor.prototype):Object.create(new H.c6(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aO
if(typeof p!=="number")return p.n()
$.aO=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kq(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nX,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.ko:H.jF
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kq(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
mi:function(a,b,c,d){var u=H.jF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kq:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mk(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mi(t,!r,u,b)
if(t===0){r=$.aO
if(typeof r!=="number")return r.n()
$.aO=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c7
if(q==null){q=H.eO("self")
$.c7=q}return new Function(r+H.j(q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aO
if(typeof r!=="number")return r.n()
$.aO=r+1
o+=r
r="return function("+o+"){return this."
q=$.c7
if(q==null){q=H.eO("self")
$.c7=q}return new Function(r+H.j(q)+"."+H.j(u)+"("+o+");}")()},
mj:function(a,b,c,d){var u,t
u=H.jF
t=H.ko
switch(b?-1:a){case 0:throw H.c(H.mX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mk:function(a,b){var u,t,s,r,q,p,o,n
u=$.c7
if(u==null){u=H.eO("self")
$.c7=u}t=$.kn
if(t==null){t=H.eO("receiver")
$.kn=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.mj(r,!p,s,b)
if(r===1){u="return function(){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+");"
t=$.aO
if(typeof t!=="number")return t.n()
$.aO=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+", "+n+");"
t=$.aO
if(typeof t!=="number")return t.n()
$.aO=t+1
return new Function(u+t+"}")()},
k6:function(a,b,c,d,e,f,g){return H.ml(a,b,H.a3(c),d,!!e,!!f,g)},
jF:function(a){return a.a},
ko:function(a){return a.c},
eO:function(a){var u,t,s,r,q
u=new H.c6("self","target","receiver","name")
t=J.fl(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
F:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aM(a,"String"))},
nR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aM(a,"double"))},
o8:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aM(a,"num"))},
k4:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aM(a,"bool"))},
a3:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aM(a,"int"))},
lG:function(a,b){throw H.c(H.aM(a,H.c3(H.F(b).substring(2))))},
oa:function(a,b){throw H.c(H.mh(a,H.c3(H.F(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.R(a)[b])return a
H.lG(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.oa(a,b)},
eF:function(a){if(a==null)return a
if(!!J.R(a).$ia)return a
throw H.c(H.aM(a,"List<dynamic>"))},
lD:function(a,b){var u
if(a==null)return a
u=J.R(a)
if(!!u.$ia)return a
if(u[b])return a
H.lG(a,b)},
lz:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a3(u)]
else return a.$S()}return},
eC:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.lz(J.R(a))
if(u==null)return!1
return H.ll(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.k0)return a
$.k0=!0
try{if(H.eC(a,b))return a
u=H.jv(b)
t=H.aM(a,u)
throw H.c(t)}finally{$.k0=!1}},
k7:function(a,b){if(a!=null&&!H.k5(a,b))H.q(H.aM(a,H.jv(b)))
return a},
aM:function(a,b){return new H.hv("TypeError: "+P.f4(a)+": type '"+H.lq(a)+"' is not a subtype of type '"+b+"'")},
mh:function(a,b){return new H.eP("CastError: "+P.f4(a)+": type '"+H.lq(a)+"' is not a subtype of type '"+b+"'")},
lq:function(a){var u,t
u=J.R(a)
if(!!u.$ic9){t=H.lz(u)
if(t!=null)return H.jv(t)
return"Closure"}return H.bO(a)},
oe:function(a){throw H.c(new P.eW(H.F(a)))},
mX:function(a){return new H.h2(a)},
lA:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bx:function(a){if(a==null)return
return a.$ti},
oY:function(a,b,c){return H.c2(a["$a"+H.j(c)],H.bx(b))},
cY:function(a,b,c,d){var u
H.F(c)
H.a3(d)
u=H.c2(a["$a"+H.j(c)],H.bx(b))
return u==null?null:u[d]},
a9:function(a,b,c){var u
H.F(b)
H.a3(c)
u=H.c2(a["$a"+H.j(b)],H.bx(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a3(b)
u=H.bx(a)
return u==null?null:u[b]},
jv:function(a){return H.bw(a,null)},
bw:function(a,b){var u,t
H.h(b,"$ia",[P.f],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c3(a[0].name)+H.k3(a,1,b)
if(typeof a=="function")return H.c3(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a3(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.nB(a,b)
if('futureOr' in a)return"FutureOr<"+H.bw("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nB:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.f]
H.h(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.e(b,m)
o=C.c.n(o,b[m])
l=t[p]
if(l!=null&&l!==P.M)o+=" extends "+H.bw(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bw(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bw(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bw(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.nS(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.F(u[g])
i=i+h+H.bw(d[c],b)+(" "+H.j(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
k3:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.f],"$aa")
if(a==null)return""
u=new P.af("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bw(p,c)}return"<"+u.i(0)+">"},
c2:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cW:function(a,b,c,d){var u,t
H.F(b)
H.eF(c)
H.F(d)
if(a==null)return!1
u=H.bx(a)
t=J.R(a)
if(t[b]==null)return!1
return H.lt(H.c2(t[d],u),null,c,null)},
h:function(a,b,c,d){H.F(b)
H.eF(c)
H.F(d)
if(a==null)return a
if(H.cW(a,b,c,d))return a
throw H.c(H.aM(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c3(b.substring(2))+H.k3(c,0,null),v.mangledGlobalNames)))},
lt:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aE(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aE(a[t],b,c[t],d))return!1
return!0},
oW:function(a,b,c){return a.apply(b,H.c2(J.R(b)["$a"+H.j(c)],H.bx(b)))},
lC:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="M"||a.name==="E"||a===-1||a===-2||H.lC(u)}return!1},
k5:function(a,b){var u,t
if(a==null)return b==null||b.name==="M"||b.name==="E"||b===-1||b===-2||H.lC(b)
if(b==null||b===-1||b.name==="M"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.k5(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eC(a,b)}u=J.R(a).constructor
t=H.bx(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aE(u,null,b,null)},
y:function(a,b){if(a!=null&&!H.k5(a,b))throw H.c(H.aM(a,H.jv(b)))
return a},
aE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="M"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="M"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aE(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="E")return!0
if('func' in c)return H.ll(a,b,c,d)
if('func' in a)return c.name==="bm"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aE("type" in a?a.type:null,b,s,d)
else if(H.aE(a,b,s,d))return!0
else{if(!('$i'+"ce" in t.prototype))return!1
r=t.prototype["$a"+"ce"]
q=H.c2(r,u?a.slice(1):null)
return H.aE(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lt(H.c2(m,u),b,p,d)},
ll:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aE(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aE(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aE(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aE(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.o7(h,b,g,d)},
o7:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aE(c[r],d,a[r],b))return!1}return!0},
oX:function(a,b,c){Object.defineProperty(a,H.F(b),{value:c,enumerable:false,writable:true,configurable:true})},
o5:function(a){var u,t,s,r,q,p
u=H.F($.lB.$1(a))
t=$.ja[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jf[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.F($.ls.$2(a,u))
if(u!=null){t=$.ja[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jf[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.ju(s)
$.ja[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jf[u]=s
return s}if(q==="-"){p=H.ju(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.lF(a,s)
if(q==="*")throw H.c(P.hG(u))
if(v.leafTags[u]===true){p=H.ju(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.lF(a,s)},
lF:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ka(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ju:function(a){return J.ka(a,!1,null,!!a.$iaI)},
o6:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ju(u)
else return J.ka(u,c,null,null)},
o0:function(){if(!0===$.k9)return
$.k9=!0
H.o1()},
o1:function(){var u,t,s,r,q,p,o,n
$.ja=Object.create(null)
$.jf=Object.create(null)
H.o_()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lH.$1(q)
if(p!=null){o=H.o6(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
o_:function(){var u,t,s,r,q,p,o
u=C.a3()
u=H.bX(C.a0,H.bX(C.a5,H.bX(C.E,H.bX(C.E,H.bX(C.a4,H.bX(C.a1,H.bX(C.a2(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lB=new H.jc(q)
$.ls=new H.jd(p)
$.lH=new H.je(o)},
bX:function(a,b){return a(b)||b},
mx:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a1("Illegal RegExp pattern ("+String(r)+")",a,null))},
od:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kc:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eT:function eT(){},
eU:function eU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fY:function fY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
ht:function ht(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fQ:function fQ(a,b){this.a=a
this.b=b},
fo:function fo(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(a){this.a=a},
jA:function jA(a){this.a=a},
es:function es(a){this.a=a
this.b=null},
c9:function c9(){},
hk:function hk(){},
he:function he(){},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hv:function hv(a){this.a=a},
eP:function eP(a){this.a=a},
h2:function h2(a){this.a=a},
aJ:function aJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fr:function fr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fs:function fs(a,b){this.a=a
this.$ti=b},
ft:function ft(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
fn:function fn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bV:function(a){return a},
mG:function(a){return new Int8Array(a)},
ba:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bZ(b,a))},
nz:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nQ(a,b,c))
return b},
bM:function bM(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
dD:function dD(){},
cn:function cn(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
nS:function(a){return J.kx(a?Object.keys(a):[],null)},
o9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ka:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eD:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.k9==null){H.o0()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.hG("Return interceptor for "+H.j(t(a,u))))}r=a.constructor
q=r==null?null:r[$.ke()]
if(q!=null)return q
q=H.o5(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.M
if(t===Object.prototype)return C.M
if(typeof r=="function"){Object.defineProperty(r,$.ke(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
mw:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.jE(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a7(a,0,4294967295,"length",null))
return J.kx(new Array(a),b)},
kx:function(a,b){return J.fl(H.b(a,[b]))},
fl:function(a){H.eF(a)
a.fixed$length=Array
return a},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dm.prototype
return J.dl.prototype}if(typeof a=="string")return J.b4.prototype
if(a==null)return J.dn.prototype
if(typeof a=="boolean")return J.fm.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.M)return a
return J.eD(a)},
nU:function(a){if(typeof a=="number")return J.bq.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.M)return a
return J.eD(a)},
c0:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.M)return a
return J.eD(a)},
k8:function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.M)return a
return J.eD(a)},
nV:function(a){if(typeof a=="number")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bu.prototype
return a},
nW:function(a){if(typeof a=="number")return J.bq.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bu.prototype
return a},
cX:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bu.prototype
return a},
a6:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.M)return a
return J.eD(a)},
m4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nU(a).n(a,b)},
T:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).B(a,b)},
kh:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nW(a).v(a,b)},
m5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.nV(a).u(a,b)},
m6:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o3(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c0(a).k(a,b)},
m7:function(a,b,c,d){return J.a6(a).hn(a,b,c,d)},
m8:function(a,b){return J.cX(a).J(a,b)},
eG:function(a,b){return J.a6(a).iV(a,b)},
jC:function(a,b,c){return J.a6(a).iZ(a,b,c)},
ki:function(a,b){return J.a6(a).F(a,b)},
m9:function(a,b){return J.cX(a).a3(a,b)},
eH:function(a,b){return J.k8(a).ag(a,b)},
ma:function(a,b,c,d){return J.a6(a).ku(a,b,c,d)},
mb:function(a){return J.a6(a).gk6(a)},
kj:function(a){return J.a6(a).gcQ(a)},
d2:function(a){return J.R(a).gL(a)},
by:function(a){return J.k8(a).gU(a)},
aF:function(a){return J.c0(a).gm(a)},
mc:function(a){return J.a6(a).glf(a)},
jD:function(a,b){return J.a6(a).b8(a,b)},
kk:function(a){return J.k8(a).l4(a)},
md:function(a,b){return J.a6(a).l9(a,b)},
me:function(a,b,c){return J.a6(a).fK(a,b,c)},
mf:function(a,b,c){return J.cX(a).A(a,b,c)},
mg:function(a){return J.cX(a).ll(a)},
ao:function(a){return J.R(a).i(a)},
ae:function ae(){},
fm:function fm(){},
dn:function dn(){},
dp:function dp(){},
fS:function fS(){},
bu:function bu(){},
b5:function b5(){},
aH:function aH(a){this.$ti=a},
jN:function jN(a){this.$ti=a},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bq:function bq(){},
dm:function dm(){},
dl:function dl(){},
b4:function b4(){}},P={
nb:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.nJ()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bY(new P.i5(u),1)).observe(t,{childList:true})
return new P.i4(u,t,s)}else if(self.setImmediate!=null)return P.nK()
return P.nL()},
nc:function(a){self.scheduleImmediate(H.bY(new P.i6(H.k(a,{func:1,ret:-1})),0))},
nd:function(a){self.setImmediate(H.bY(new P.i7(H.k(a,{func:1,ret:-1})),0))},
ne:function(a){P.jS(C.y,H.k(a,{func:1,ret:-1}))},
jS:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.f.ab(a.a,1000)
return P.nk(u<0?0:u,b)},
kY:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aW]})
u=C.f.ab(a.a,1000)
return P.nl(u<0?0:u,b)},
nk:function(a,b){var u=new P.et(!0)
u.hh(a,b)
return u},
nl:function(a,b){var u=new P.et(!1)
u.hi(a,b)
return u},
nf:function(a,b){var u,t,s
b.a=1
try{a.fm(new P.ih(b),new P.ii(b),null)}catch(s){u=H.ac(s)
t=H.c1(s)
P.ob(new P.ij(b,u,t))}},
la:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iaD")
if(u>=4){t=b.cz()
b.a=a.a
b.c=a.c
P.cM(b,t)}else{t=H.d(b.c,"$ib_")
b.a=2
b.c=a
a.e3(t)}},
cM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$iai")
t=t.b
p=q.a
o=q.b
t.toString
P.j0(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cM(u.a,b)}t=u.a
m=t.c
s.a=r
s.b=m
p=!r
if(p){o=b.c
o=(o&1)!==0||o===8}else o=!0
if(o){o=b.b
l=o.b
if(r){k=t.b
k.toString
k=k==l
if(!k)l.toString
else k=!0
k=!k}else k=!1
if(k){H.d(m,"$iai")
t=t.b
p=m.a
o=m.b
t.toString
P.j0(null,null,t,p,o)
return}j=$.X
if(j!=l)$.X=l
else j=null
t=b.c
if(t===8)new P.io(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.im(s,b,m).$0()}else if((t&2)!==0)new P.il(u,s,b).$0()
if(j!=null)$.X=j
t=s.b
if(!!J.R(t).$ice){if(t.a>=4){i=H.d(o.c,"$ib_")
o.c=null
b=o.bC(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.la(t,o)
return}}h=b.b
i=H.d(h.c,"$ib_")
h.c=null
b=h.bC(i)
t=s.a
p=s.b
if(!t){H.y(p,H.r(h,0))
h.a=4
h.c=p}else{H.d(p,"$iai")
h.a=8
h.c=p}u.a=h
t=h}},
nE:function(a,b){if(H.eC(a,{func:1,args:[P.M,P.at]}))return H.k(a,{func:1,ret:null,args:[P.M,P.at]})
if(H.eC(a,{func:1,args:[P.M]}))return H.k(a,{func:1,ret:null,args:[P.M]})
throw H.c(P.jE(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nD:function(){var u,t
for(;u=$.bW,u!=null;){$.cV=null
t=u.b
$.bW=t
if(t==null)$.cU=null
u.a.$0()}},
nI:function(){$.k1=!0
try{P.nD()}finally{$.cV=null
$.k1=!1
if($.bW!=null)$.kf().$1(P.lu())}},
lp:function(a){var u=new P.eg(H.k(a,{func:1,ret:-1}))
if($.bW==null){$.cU=u
$.bW=u
if(!$.k1)$.kf().$1(P.lu())}else{$.cU.b=u
$.cU=u}},
nH:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bW
if(u==null){P.lp(a)
$.cV=$.cU
return}t=new P.eg(a)
s=$.cV
if(s==null){t.b=u
$.cV=t
$.bW=t}else{t.b=s.b
s.b=t
$.cV=t
if(t.b==null)$.cU=t}},
ob:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.X
if(C.l===t){P.j2(null,null,C.l,a)
return}t.toString
P.j2(null,null,t,H.k(t.cL(a),u))},
kX:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.X
if(t===C.l){t.toString
return P.jS(a,b)}return P.jS(a,H.k(t.cL(b),u))},
n2:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aW]}
H.k(b,u)
t=$.X
if(t===C.l){t.toString
return P.kY(a,b)}s=t.em(b,P.aW)
$.X.toString
return P.kY(a,H.k(s,u))},
j0:function(a,b,c,d,e){var u={}
u.a=d
P.nH(new P.j1(u,e))},
lm:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.X
if(t===c)return d.$0()
$.X=c
u=t
try{t=d.$0()
return t}finally{$.X=u}},
ln:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.y(e,g)
t=$.X
if(t===c)return d.$1(e)
$.X=c
u=t
try{t=d.$1(e)
return t}finally{$.X=u}},
nF:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
t=$.X
if(t===c)return d.$2(e,f)
$.X=c
u=t
try{t=d.$2(e,f)
return t}finally{$.X=u}},
j2:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cL(d):c.k7(d,-1)
P.lp(d)},
i5:function i5(a){this.a=a},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
et:function et(a){this.a=a
this.b=null
this.c=0},
iK:function iK(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b_:function b_(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aD:function aD(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
ig:function ig(a,b){this.a=a
this.b=b},
ik:function ik(a,b){this.a=a
this.b=b},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(a){this.a=a},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(a,b,c){this.a=a
this.b=b
this.c=c},
eg:function eg(a){this.a=a
this.b=null},
hf:function hf(){},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
cu:function cu(){},
hg:function hg(){},
aW:function aW(){},
ai:function ai(a,b){this.a=a
this.b=b},
iU:function iU(){},
j1:function j1(a,b){this.a=a
this.b=b},
iu:function iu(){},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(a,b){this.a=a
this.b=b},
ix:function ix(a,b,c){this.a=a
this.b=b
this.c=c},
mz:function(a,b,c,d,e){return new H.aJ([d,e])},
mA:function(a,b,c){H.eF(a)
return H.h(H.nT(a,new H.aJ([b,c])),"$iky",[b,c],"$aky")},
kz:function(a,b){return new H.aJ([a,b])},
dt:function(a,b,c,d){return new P.is([d])},
jY:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nj:function(a,b,c){var u=new P.em(a,b,[c])
u.c=a.e
return u},
mt:function(a,b,c){var u,t
if(P.k2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.f])
t=$.d1()
C.a.h(t,a)
try{P.nC(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.kU(b,H.lD(u,"$il"),", ")+c
return t.charCodeAt(0)==0?t:t},
jM:function(a,b,c){var u,t,s
if(P.k2(a))return b+"..."+c
u=new P.af(b)
t=$.d1()
C.a.h(t,a)
try{s=u
s.a=P.kU(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
k2:function(a){var u,t
for(u=0;t=$.d1(),u<t.length;++u)if(a===t[u])return!0
return!1},
nC:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.f],"$aa")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.E())return
r=H.j(u.gM())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.E()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gM();++s
if(!u.E()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM();++s
for(;u.E();o=n,n=m){m=u.gM();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.j(o)
q=H.j(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
mB:function(a,b,c){var u=P.mz(null,null,null,b,c)
a.a0(0,new P.fu(u,b,c))
return u},
kA:function(a,b){var u,t,s
u=P.dt(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s)u.h(0,H.y(a[s],b))
return u},
jQ:function(a){var u,t
u={}
if(P.k2(a))return"{...}"
t=new P.af("")
try{C.a.h($.d1(),a)
t.a+="{"
u.a=!0
a.a0(0,new P.fy(u,t))
t.a+="}"}finally{u=$.d1()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
is:function is(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bT:function bT(a){this.a=a
this.c=this.b=null},
em:function em(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(){},
U:function U(){},
fx:function fx(){},
fy:function fy(a,b){this.a=a
this.b=b},
bK:function bK(){},
iL:function iL(){},
fz:function fz(){},
e8:function e8(a,b){this.a=a
this.$ti=b},
iz:function iz(){},
en:function en(){},
ex:function ex(){},
n6:function(a,b,c,d){H.h(b,"$ia",[P.m],"$aa")
if(b instanceof Uint8Array)return P.n7(!1,b,c,d)
return},
n7:function(a,b,c,d){var u,t,s
u=$.lX()
if(u==null)return
t=0===c
if(t&&!0)return P.jV(u,b)
s=b.length
d=P.b9(c,d,s,null,null,null)
if(t&&d===s)return P.jV(u,b)
return P.jV(u,b.subarray(c,d))},
jV:function(a,b){if(P.n9(b))return
return P.na(a,b)},
na:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ac(t)}return},
n9:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
n8:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ac(t)}return},
nG:function(a,b,c){var u,t,s
H.h(a,"$ia",[P.m],"$aa")
for(u=J.c0(a),t=b;t<c;++t){s=u.k(a,t)
if(typeof s!=="number")return s.c4()
if((s&127)!==s)return t-b}return c-b},
km:function(a,b,c,d,e,f){if(C.f.bw(f,4)!==0)throw H.c(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a1("Invalid base64 padding, more than two '=' characters",a,b))},
eL:function eL(a){this.a=a},
eM:function eM(a){this.a=a},
bC:function bC(){},
bj:function bj(){},
f2:function f2(){},
fh:function fh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fg:function fg(a){this.a=a},
hO:function hO(a){this.a=a},
hQ:function hQ(){},
iS:function iS(a){this.b=this.a=0
this.c=a},
hP:function hP(a){this.a=a},
iQ:function iQ(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eE:function(a,b,c){var u
H.k(b,{func:1,ret:P.m,args:[P.f]})
u=H.mQ(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a1(a,null,null))},
mr:function(a){if(a instanceof H.c9)return a.i(0)
return"Instance of '"+H.bO(a)+"'"},
mC:function(a,b,c,d){var u,t
H.y(b,d)
u=J.mw(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.q(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
mD:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gU(a);s.E();)C.a.h(t,H.y(s.gM(),c))
if(b)return t
return H.h(J.fl(t),"$ia",u,"$aa")},
dU:function(a,b,c){var u,t
u=P.m
H.h(a,"$il",[u],"$al")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iaH",[u],"$aaH")
t=a.length
c=P.b9(b,c,t,null,null,null)
return H.kO(b>0||c<t?C.a.fR(a,b,c):a)}if(!!J.R(a).$icn)return H.mS(a,b,P.b9(b,c,a.length,null,null,null))
return P.n0(a,b,c)},
n0:function(a,b,c){var u,t,s,r
H.h(a,"$il",[P.m],"$al")
if(b<0)throw H.c(P.a7(b,0,J.aF(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.a7(c,b,J.aF(a),null,null))
t=J.by(a)
for(s=0;s<b;++s)if(!t.E())throw H.c(P.a7(b,0,s,null,null))
r=[]
if(u)for(;t.E();)r.push(t.gM())
else for(s=b;s<c;++s){if(!t.E())throw H.c(P.a7(c,b,s,null,null))
r.push(t.gM())}return H.kO(r)},
mV:function(a,b,c){return new H.fn(a,H.mx(a,!1,!0,!1))},
kU:function(a,b,c){var u=J.by(b)
if(!u.E())return a
if(c.length===0){do a+=H.j(u.gM())
while(u.E())}else{a+=H.j(u.gM())
for(;u.E();)a=a+c+H.j(u.gM())}return a},
l0:function(){var u=H.mI()
if(u!=null)return P.n5(u,0,null)
throw H.c(P.Y("'Uri.base' is not supported"))},
ey:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.m],"$aa")
if(c===C.m){u=$.m2().b
if(typeof b!=="string")H.q(H.an(b))
u=u.test(b)}else u=!1
if(u)return b
H.y(b,H.a9(c,"bC",0))
t=c.gkt().cR(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bP(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
mn:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mo:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dc:function(a){if(a>=10)return""+a
return"0"+a},
kr:function(a,b,c,d,e,f){return new P.aP(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
f4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ao(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mr(a)},
d4:function(a){return new P.aG(!1,null,null,a)},
jE:function(a,b,c){return new P.aG(!0,a,b,c)},
dK:function(a,b,c){return new P.bQ(null,null,!0,a,b,"Value not in range")},
a7:function(a,b,c,d,e){return new P.bQ(b,c,!0,a,d,"Invalid value")},
b9:function(a,b,c,d,e,f){if(typeof a!=="number")return H.A(a)
if(0>a||a>c)throw H.c(P.a7(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.a7(b,a,c,"end",f))
return b}return c},
bI:function(a,b,c,d,e){var u=H.a3(e==null?J.aF(b):e)
return new P.fj(b,u,!0,a,c,"Index out of range")},
Y:function(a){return new P.hI(a)},
hG:function(a){return new P.hF(a)},
kT:function(a){return new P.bS(a)},
b1:function(a){return new P.eS(a)},
u:function(a){return new P.ej(a)},
a1:function(a,b,c){return new P.fc(a,b,c)},
mE:function(a,b,c,d){var u,t
H.k(b,{func:1,ret:d,args:[P.m]})
u=H.b([],[d])
C.a.sm(u,a)
for(t=0;t<a;++t)C.a.q(u,t,b.$1(t))
return u},
kb:function(a){H.o9(a)},
n5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.J(a,b+4)^58)*3|C.c.J(a,b)^100|C.c.J(a,b+1)^97|C.c.J(a,b+2)^116|C.c.J(a,b+3)^97)>>>0
if(t===0)return P.l_(b>0||c<c?C.c.A(a,b,c):a,5,null).gfs()
else if(t===32)return P.l_(C.c.A(a,u,c),0,null).gfs()}s=new Array(8)
s.fixed$length=Array
r=H.b(s,[P.m])
C.a.q(r,0,0)
s=b-1
C.a.q(r,1,s)
C.a.q(r,2,s)
C.a.q(r,7,s)
C.a.q(r,3,b)
C.a.q(r,4,b)
C.a.q(r,5,c)
C.a.q(r,6,c)
if(P.lo(a,b,c,0,r)>=14)C.a.q(r,7,c)
q=r[1]
if(typeof q!=="number")return q.ls()
if(q>=b)if(P.lo(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.n()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.Z()
if(typeof m!=="number")return H.A(m)
if(l<m)m=l
if(typeof n!=="number")return n.Z()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.Z()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.Z()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.ak(a,"..",n)))i=m>n+2&&C.c.ak(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.ak(a,"file",b)){if(p<=b){if(!C.c.ak(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.A(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.b5(a,n,m,"/");++m;++l;++c}else{a=C.c.A(a,b,n)+"/"+C.c.A(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.ak(a,"http",b)){if(s&&o+3===n&&C.c.ak(a,"80",o+1))if(b===0&&!0){a=C.c.b5(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.A(a,b,o)+C.c.A(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.ak(a,"https",b)){if(s&&o+4===n&&C.c.ak(a,"443",o+1))if(b===0&&!0){a=C.c.b5(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.A(a,b,o)+C.c.A(a,n,c)
q-=b
p-=b
o-=b
u=4+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="https"}else j=null
k=!0}}}else j=null
if(k){if(b>0||c<a.length){a=C.c.A(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.iC(a,q,p,o,n,m,l,j)}return P.nm(a,b,c,q,p,o,n,m,l,j)},
l2:function(a,b){var u=P.f
return C.a.kz(H.b(a.split("&"),[u]),P.kz(u,u),new P.hN(b),[P.J,P.f,P.f])},
n4:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.hK(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a3(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.eE(C.c.A(a,q,r),null,null)
if(typeof n!=="number")return n.fH()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.eE(C.c.A(a,q,c),null,null)
if(typeof n!=="number")return n.fH()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
l1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.hL(a)
t=new P.hM(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a3(a,r)
if(n===58){if(r===b){++r
if(C.c.a3(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaG(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.n4(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.f.b_(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
nm:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.nt(a,b,d)
else{if(d===b)P.cR(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nu(a,u,e-1):""
s=P.nq(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.A(g)
q=r<g?P.ns(P.eE(C.c.A(a,r,g),new P.iM(a,f),null),j):null}else{t=""
s=null
q=null}p=P.nr(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.jZ(a,h+1,i,null):null
return new P.bU(j,t,s,q,p,o,i<c?P.np(a,i+1,c):null)},
le:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cR:function(a,b,c){throw H.c(P.a1(c,a,b))},
ns:function(a,b){if(a!=null&&a===P.le(b))return
return a},
nq:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a3(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.c.a3(a,u)!==93)P.cR(a,b,"Missing end `]` to match `[` in host")
P.l1(a,b+1,u)
return C.c.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.A(c)
t=b
for(;t<c;++t)if(C.c.a3(a,t)===58){P.l1(a,b,c)
return"["+a+"]"}return P.nw(a,b,c)},
nw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.A(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a3(a,u)
if(q===37){p=P.lk(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.af("")
n=C.c.A(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.A(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.K,o)
o=(C.K[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.af("")
if(t<u){s.a+=C.c.A(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.cR(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a3(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.af("")
n=C.c.A(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lf(q)
u+=l
t=u}}}}if(s==null)return C.c.A(a,b,c)
if(t<c){n=C.c.A(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nt:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lh(C.c.J(a,b)))P.cR(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.J(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cR(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.A(a,b,c)
return P.nn(t?a.toLowerCase():a)},
nn:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nu:function(a,b,c){return P.cS(a,b,c,C.a9,!1)},
nr:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cS(a,b,c,C.L,!0):C.r.lv(d,new P.iN(),P.f).l(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.aa(r,"/"))r="/"+r
return P.nv(r,e,f)},
nv:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.aa(a,"/"))return P.nx(a,!u||c)
return P.ny(a)},
jZ:function(a,b,c,d){var u,t
u={}
H.h(d,"$iJ",[P.f,null],"$aJ")
if(a!=null){if(d!=null)throw H.c(P.d4("Both query and queryParameters specified"))
return P.cS(a,b,c,C.u,!0)}if(d==null)return
t=new P.af("")
u.a=""
d.a0(0,new P.iO(new P.iP(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
np:function(a,b,c){return P.cS(a,b,c,C.u,!0)},
lk:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a3(a,b+1)
s=C.c.a3(a,u)
r=H.jb(t)
q=H.jb(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.b_(p,4)
if(u>=8)return H.e(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.bP(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.A(a,b,b+3).toUpperCase()
return},
lf:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.m])
C.a.q(t,0,37)
C.a.q(t,1,C.c.J("0123456789ABCDEF",a>>>4))
C.a.q(t,2,C.c.J("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.f.jf(a,6*r)&63|s
C.a.q(t,q,37)
C.a.q(t,q+1,C.c.J("0123456789ABCDEF",p>>>4))
C.a.q(t,q+2,C.c.J("0123456789ABCDEF",p&15))
q+=3}}return P.dU(t,0,null)},
cS:function(a,b,c,d,e){var u=P.lj(a,b,c,H.h(d,"$ia",[P.m],"$aa"),e)
return u==null?C.c.A(a,b,c):u},
lj:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ia",[P.m],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Z()
if(typeof c!=="number")return H.A(c)
if(!(t<c))break
c$0:{q=C.c.a3(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.lk(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cR(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a3(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.lf(q)}}if(r==null)r=new P.af("")
r.a+=C.c.A(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.A(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Z()
if(s<c)r.a+=C.c.A(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
li:function(a){if(C.c.aa(a,"."))return!0
return C.c.f2(a,"/.")!==-1},
ny:function(a){var u,t,s,r,q,p,o
if(!P.li(a))return a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.T(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.l(u,"/")},
nx:function(a,b){var u,t,s,r,q,p
if(!P.li(a))return!b?P.lg(a):a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaG(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaG(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.q(u,0,P.lg(u[0]))}return C.a.l(u,"/")},
lg:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.lh(J.m8(a,0)))for(t=1;t<u;++t){s=C.c.J(a,t)
if(s===58)return C.c.A(a,0,t)+"%3A"+C.c.ay(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
no:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.J(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.d4("Invalid URL encoding"))}}return u},
k_:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.J(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.A(a,b,c)
else q=new H.t(C.c.A(a,b,c))}else{q=H.b([],[P.m])
for(r=a.length,t=b;t<c;++t){s=C.c.J(a,t)
if(s>127)throw H.c(P.d4("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.d4("Truncated URI"))
C.a.h(q,P.no(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.h(q,"$ia",[P.m],"$aa")
return new P.hP(!1).cR(q)},
lh:function(a){var u=a|32
return 97<=u&&u<=122},
l_:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.m])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.J(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a1("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a1("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.J(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaG(u)
if(q!==44||s!==o+7||!C.c.ak(a,"base64",o+1))throw H.c(P.a1("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.Q.kO(a,n,t)
else{m=P.lj(a,n,t,C.u,!0)
if(m!=null)a=C.c.b5(a,n,t,m)}return new P.hJ(a,u,c)},
nA:function(){var u,t,s,r,q
u=P.mE(22,new P.iY(),!0,P.O)
t=new P.iX(u)
s=new P.iZ()
r=new P.j_()
q=H.d(t.$2(0,225),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(14,225),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(15,225),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(1,225),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(2,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(3,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(4,229),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(5,229),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(6,231),"$iO")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(7,231),"$iO")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.d(t.$2(8,8),"$iO"),"]",5)
q=H.d(t.$2(9,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(16,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(17,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(10,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(18,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(19,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(11,235),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(12,236),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.d(t.$2(13,237),"$iO")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.d(t.$2(20,245),"$iO"),"az",21)
q=H.d(t.$2(21,245),"$iO")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
lo:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ia",[P.m],"$aa")
u=$.m3()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.c.J(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.q(e,q>>>5,t)}return d},
N:function N(){},
aj:function aj(a,b){this.a=a
this.b=b},
o:function o(){},
aP:function aP(a){this.a=a},
eZ:function eZ(){},
f_:function f_(){},
bl:function bl(){},
dF:function dF(){},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bQ:function bQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fj:function fj(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hI:function hI(a){this.a=a},
hF:function hF(a){this.a=a},
bS:function bS(a){this.a=a},
eS:function eS(a){this.a=a},
fR:function fR(){},
dT:function dT(){},
eW:function eW(a){this.a=a},
ej:function ej(a){this.a=a},
fc:function fc(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(){},
m:function m(){},
l:function l(){},
aQ:function aQ(){},
a:function a(){},
J:function J(){},
E:function E(){},
ah:function ah(){},
M:function M(){},
at:function at(){},
f:function f(){},
af:function af(a){this.a=a},
hN:function hN(a){this.a=a},
hK:function hK(a){this.a=a},
hL:function hL(a){this.a=a},
hM:function hM(a,b){this.a=a
this.b=b},
bU:function bU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(){},
iP:function iP(a,b){this.a=a
this.b=b},
iO:function iO(a){this.a=a},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(){},
iX:function iX(a){this.a=a},
iZ:function iZ(){},
j_:function j_(){},
iC:function iC(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ia:function ia(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
nP:function(a){var u,t
u=J.R(a)
if(!!u.$ib3){t=u.gev(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.ew(a.data,a.height,a.width)},
nO:function(a){if(a instanceof P.ew)return{data:a.a,height:a.b,width:a.c}
return a},
nN:function(a,b){var u={}
a.a0(0,new P.j3(u))
return u},
iD:function iD(){},
iF:function iF(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a){this.a=a},
iE:function iE(a,b){this.a=a
this.b=b},
f8:function f8(a,b){this.a=a
this.b=b},
f9:function f9(){},
fa:function fa(){},
ir:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ni:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
it:function it(){},
aB:function aB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cr:function cr(){},
p:function p(){},
O:function O(){},
d6:function d6(){},
dh:function dh(){},
dI:function dI(){},
dM:function dM(){},
bR:function bR(){},
dO:function dO(){},
dX:function dX(){},
e6:function e6(){}},W={
kl:function(a){var u=document.createElement("a")
return u},
jG:function(a,b){var u=document.createElement("canvas")
return u},
mp:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ao(u,a,b,c)
t.toString
u=W.B
u=new H.cJ(new W.am(t),H.k(new W.f1(),{func:1,ret:P.N,args:[u]}),[u])
return H.d(u.gaT(u),"$iP")},
mq:function(a){H.d(a,"$ibF")
return"wheel"},
cc:function(a){var u,t,s
u="element tag unavailable"
try{t=J.mc(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ac(s)}return u},
ms:function(a){var u,t,s
t=document.createElement("input")
u=H.d(t,"$ich")
try{u.type=a}catch(s){H.ac(s)}return u},
iq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lc:function(a,b,c,d){var u,t
u=W.iq(W.iq(W.iq(W.iq(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a5:function(a,b,c,d,e){var u,t
u=W.lr(new W.ie(c),W.n)
t=u!=null
if(t&&!0){H.k(u,{func:1,args:[W.n]})
if(t)J.m7(a,b,u,!1)}return new W.id(a,b,u,!1,[e])},
lb:function(a){var u,t
u=W.kl(null)
t=window.location
u=new W.bv(new W.iy(u,t))
u.h4(a)
return u},
ng:function(a,b,c,d){H.d(a,"$iP")
H.F(b)
H.F(c)
H.d(d,"$ibv")
return!0},
nh:function(a,b,c,d){var u,t,s
H.d(a,"$iP")
H.F(b)
H.F(c)
u=H.d(d,"$ibv").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
ld:function(){var u,t,s,r,q
u=P.f
t=P.kA(C.A,u)
s=H.r(C.A,0)
r=H.k(new W.iI(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.iH(t,P.dt(null,null,null,u),P.dt(null,null,null,u),P.dt(null,null,null,u),null)
t.hg(null,new H.fC(C.A,r,[s,u]),q,null)
return t},
lr:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.X
if(u===C.l)return a
return u.em(a,b)},
x:function x(){},
d3:function d3(){},
eI:function eI(){},
c5:function c5(){},
bg:function bg(){},
bA:function bA(){},
bB:function bB(){},
bh:function bh(){},
ca:function ca(){},
eV:function eV(){},
aA:function aA(){},
cb:function cb(){},
eY:function eY(){},
dd:function dd(){},
de:function de(){},
i9:function i9(a,b){this.a=a
this.b=b},
P:function P(){},
f1:function f1(){},
n:function n(){},
bF:function bF(){},
fb:function fb(){},
di:function di(){},
dj:function dj(){},
bH:function bH(){},
dk:function dk(){},
b3:function b3(){},
cg:function cg(){},
ch:function ch(){},
aR:function aR(){},
dr:function dr(){},
du:function du(){},
cl:function cl(){},
aa:function aa(){},
am:function am(a){this.a=a},
B:function B(){},
co:function co(){},
dJ:function dJ(){},
h3:function h3(){},
aV:function aV(){},
dV:function dV(){},
dW:function dW(){},
hj:function hj(){},
cw:function cw(){},
aK:function aK(){},
aL:function aL(){},
hs:function hs(){},
bt:function bt(){},
i2:function i2(){},
aZ:function aZ(){},
cK:function cK(){},
cL:function cL(){},
ei:function ei(){},
eo:function eo(){},
i8:function i8(){},
ib:function ib(a){this.a=a},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jX:function jX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
id:function id(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ie:function ie(a){this.a=a},
bv:function bv(a){this.a=a},
av:function av(){},
dE:function dE(a){this.a=a},
fO:function fO(a){this.a=a},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(){},
iA:function iA(){},
iB:function iB(){},
iH:function iH(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iI:function iI(){},
iG:function iG(){},
dg:function dg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ay:function ay(){},
iy:function iy(a,b){this.a=a
this.b=b},
ez:function ez(a){this.a=a},
iT:function iT(a){this.a=a},
eh:function eh(){},
ek:function ek(){},
el:function el(){},
ep:function ep(){},
eq:function eq(){},
eu:function eu(){},
ev:function ev(){},
eA:function eA(){},
eB:function eB(){}},O={
jH:function(a){var u=new O.Z([a])
u.bz(a)
return u},
Z:function Z(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
ck:function ck(){this.b=this.a=null},
kB:function(){var u,t,s
u=new O.dy()
u.shr(O.jH(V.aq))
u.e.b9(u.gi_(),u.gi1())
t=new O.aS(u,"emission")
t.c=C.d
t.f=new V.a_(0,0,0)
u.f=t
t=new O.aS(u,"ambient")
t.c=C.d
t.f=new V.a_(0,0,0)
u.r=t
t=new O.aS(u,"diffuse")
t.c=C.d
t.f=new V.a_(0,0,0)
u.x=t
t=new O.aS(u,"invDiffuse")
t.c=C.d
t.f=new V.a_(0,0,0)
u.y=t
t=new O.fH(u,"specular")
t.c=C.d
t.f=new V.a_(0,0,0)
t.ch=100
u.z=t
t=new O.fE(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.aS(u,"reflect")
t.c=C.d
t.f=new V.a_(0,0,0)
u.cx=t
t=new O.fG(u,"refract")
t.c=C.d
t.f=new V.a_(0,0,0)
t.ch=1
u.cy=t
t=new O.fD(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.ds()
t.bz(D.a2)
t.sh6(H.b([],[D.bk]))
t.sh9(H.b([],[D.dH]))
t.sha(H.b([],[D.dS]))
t.shb(H.b([],[D.e_]))
t.shc(H.b([],[D.e0]))
t.shd(H.b([],[D.e1]))
t.Q=null
t.ch=null
t.du(t.ghY(),t.giA(),t.giE())
u.dx=t
s=t.Q
if(s==null){s=D.H()
t.Q=s
t=s}else t=s
t.h(0,u.gj1())
t=u.dx
s=t.ch
if(s==null){s=D.H()
t.ch=s
t=s}else t=s
t.h(0,u.gaV())
u.dy=null
return u},
dy:function dy(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fD:function fD(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cj:function cj(){},
fE:function fE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aS:function aS(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fG:function fG(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fH:function fH(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dQ:function dQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bs:function bs(){}},E={
jL:function(a,b,c,d,e,f){var u=new E.ak()
u.a=d
u.b=!0
u.sh3(0,O.jH(E.ak))
u.y.b9(u.gkP(),u.gkS())
u.z=null
u.Q=null
u.ch=null
u.cx=null
u.cy=null
u.db=null
u.dx=null
u.dy=null
u.fr=null
u.fx=null
u.sa9(0,e)
return u},
mW:function(a,b){var u=new E.fZ(a,b)
u.h_(a,b)
return u},
n1:function(a,b,c,d,e){var u,t,s,r
u=J.R(a)
if(!!u.$ibA)return E.kW(a,!0,!0,!0,!1)
t=W.jG(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcQ(a).h(0,t)
r=E.kW(t,!0,!0,!0,!1)
r.a=a
return r},
kW:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.e2()
t=P.mA(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
s=C.q.c5(a,"webgl",t)
s=H.d(s==null?C.q.c5(a,"experimental-webgl",t):s,"$ibR")
if(s==null)H.q(P.u("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.mW(s,a)
r=new T.hm(s)
r.b=H.a3((s&&C.b).c6(s,3379))
r.c=H.a3(C.b.c6(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.e9(a)
q=new X.fp()
q.c=new X.ax(!1,!1,!1)
q.siR(P.dt(null,null,null,P.m))
r.b=q
q=new X.fI(r)
q.f=0
q.r=V.b8()
q.x=V.b8()
q.Q=1
q.ch=1
r.c=q
q=new X.fw(r)
q.r=0
q.x=V.b8()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.hr(r)
q.e=0
q.f=V.b8()
q.r=V.b8()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.shD(H.b([],[[P.cu,P.M]]))
q=r.z
p=document
o=W.aa
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a5(p,"contextmenu",H.k(r.gi9(),n),!1,o))
q=r.z
m=W.n
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a5(a,"focus",H.k(r.gih(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a5(a,"blur",H.k(r.gi3(),l),!1,m))
q=r.z
k=W.aR
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a5(p,"keyup",H.k(r.gil(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a5(p,"keydown",H.k(r.gij(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a5(a,"mousedown",H.k(r.giq(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a5(a,"mouseup",H.k(r.giu(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a5(a,"mousemove",H.k(r.gis(),n),!1,o))
k=r.z
j=W.aZ;(k&&C.a).h(k,W.a5(a,H.F(W.mq(a)),H.k(r.giw(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a5(p,"mousemove",H.k(r.gib(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a5(p,"mouseup",H.k(r.gie(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a5(p,"pointerlockchange",H.k(r.giy(),l),!1,m))
m=r.z
l=W.aL
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a5(a,"touchstart",H.k(r.giO(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a5(a,"touchend",H.k(r.giK(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a5(a,"touchmove",H.k(r.giM(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.aj(Date.now(),!1)
u.cy=0
u.e5()
return u},
eN:function eN(){},
ak:function ak(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h_:function h_(a){this.a=a},
h0:function h0(a){this.a=a},
h1:function h1(a){this.a=a},
e2:function e2(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ho:function ho(a){this.a=a}},Z={
jW:function(a,b,c){var u
H.h(c,"$ia",[P.m],"$aa")
u=a.createBuffer()
C.b.aC(a,b,u)
C.b.eo(a,b,new Int16Array(H.bV(c)),35044)
C.b.aC(a,b,null)
return new Z.ee(b,u)},
aC:function(a){return new Z.aY(a)},
ee:function ee(a,b){this.a=a
this.b=b},
d7:function d7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ef:function ef(a){this.a=a},
c8:function c8(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a){this.a=a}},D={
H:function(){var u=new D.bE()
u.sam(null)
u.sbe(null)
u.c=null
u.d=0
return u},
eQ:function eQ(){},
bE:function bE(){var _=this
_.d=_.c=_.b=_.a=null},
f5:function f5(a){this.a=a},
f6:function f6(a){this.a=a},
w:function w(a){this.a=a
this.b=null},
bo:function bo(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bp:function bp(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
C:function C(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bk:function bk(){var _=this
_.d=_.c=_.b=_.a=null},
a2:function a2(){},
ds:function ds(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dH:function dH(){},
dS:function dS(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){}},X={d8:function d8(a,b){this.a=a
this.b=b},dq:function dq(a,b){this.a=a
this.b=b},fp:function fp(){var _=this
_.d=_.c=_.b=_.a=null},dv:function dv(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fw:function fw(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ax:function ax(a,b,c){this.a=a
this.b=b
this.c=c},b7:function b7(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fI:function fI(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cm:function cm(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},fU:function fU(){},e4:function e4(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hr:function hr(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e9:function e9(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kv:function(a,b,c,d,e,f,g){var u,t
u=new X.fd()
t=new V.ad(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=V.kR()
u.r=t
return u},
jR:function(a,b,c,d,e){var u,t,s
u=new X.dG()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gt().h(0,u.ghj())
s=new D.C("mover",t,u.b,u,[U.ab])
s.b=!0
u.al(s)}s=u.c
if(!(Math.abs(s-b)<$.G().a)){u.c=b
s=new D.C("fov",s,b,u,[P.o])
s.b=!0
u.al(s)}s=u.d
if(!(Math.abs(s-d)<$.G().a)){u.d=d
s=new D.C("near",s,d,u,[P.o])
s.b=!0
u.al(s)}s=u.e
if(!(Math.abs(s-a)<$.G().a)){u.e=a
s=new D.C("far",s,a,u,[P.o])
s.b=!0
u.al(s)}return u},
eK:function eK(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bz:function bz(){},
fd:function fd(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fi:function fi(){this.b=this.a=null},
dG:function dG(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cv:function cv(){}},V={
jB:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bw(a-b,u)
return(a<0?a+u:a)+b},
L:function(a,b,c){if(a==null)return C.c.aq("null",c)
return C.c.aq(C.e.fn(Math.abs(a-0)<$.G().a?0:a,b),c+b+1)},
c_:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.o],"$aa")
u=H.b([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.z)(a),++r){q=V.L(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.q(u,p,C.c.aq(u[p],s))}return u},
cZ:function(a,b){return C.e.li(Math.pow(b,C.a_.d1(Math.log(H.nM(a))/Math.log(b))))},
bL:function(){var u=$.kH
if(u==null){u=V.aT(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kH=u}return u},
aT:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kG:function(a,b,c){return V.aT(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kD:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aT(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
kE:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aT(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
kF:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aT(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
kC:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.w(0,Math.sqrt(c.G(c)))
t=b.aN(u)
s=t.w(0,Math.sqrt(t.G(t)))
r=u.aN(s)
q=new V.D(a.a,a.b,a.c)
p=s.V(0).G(q)
o=r.V(0).G(q)
n=u.V(0).G(q)
return V.aT(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b8:function(){var u=$.kL
if(u==null){u=new V.a0(0,0)
$.kL=u}return u},
kM:function(){var u=$.cp
if(u==null){u=new V.S(0,0,0)
$.cp=u}return u},
kR:function(){var u=$.kQ
if(u==null){u=V.kP(0,0,1,1)
$.kQ=u}return u},
kP:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dL(a,b,c,d)},
cI:function(){var u=$.l7
if(u==null){u=new V.D(0,0,0)
$.l7=u}return u},
l8:function(){var u=$.l6
if(u==null){u=new V.D(0,1,0)
$.l6=u}return u},
l9:function(){var u=$.hR
if(u==null){u=new V.D(0,0,1)
$.hR=u}return u},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f3:function f3(a){this.a=a},
dz:function dz(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aq:function aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a0:function a0(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Q:function Q(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
V:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.J(a,0)
t=C.c.J(b,0)
s=new V.fX()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.h4()
u.h0(a)
return u},
hq:function(){var u,t
u=new V.hp()
t=P.f
u.sjh(new H.aJ([t,V.ct]))
u.sjm(new H.aJ([t,V.cy]))
u.c=null
return u},
b0:function b0(){},
aw:function aw(){},
dw:function dw(){},
ar:function ar(){this.a=null},
fX:function fX(){this.b=this.a=null},
h4:function h4(){this.a=null},
ct:function ct(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e3:function e3(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a,b){this.a=a
this.b=b
this.c=null},
hp:function hp(){this.c=this.b=this.a=null},
cz:function cz(a){this.b=a
this.a=this.c=null},
oc:function(a){P.n2(C.V,new V.jw(a))},
mY:function(a,b){var u=new V.h9()
u.h1(a,!0)
return u},
bi:function bi(){},
jw:function jw(a){this.a=a},
eX:function eX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fe:function fe(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ff:function ff(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fT:function fT(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fV:function fV(a,b){this.a=a
this.b=b
this.c=null},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(){this.b=this.a=null},
hb:function hb(a){this.a=a},
ha:function ha(a){this.a=a},
hc:function hc(a){this.a=a},
lE:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=V.mY("Test 027",!0)
t=W.jG(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.F(u.a,t)
s=[P.f]
u.eg(H.b(["Test of a back buffer target for rendering to a texture. ","That back buffer texture is applied to a box."],s))
u.jV(H.b(["shapes"],s))
u.eg(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.ds(s,"testCanvas")
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.n1(r,!0,!0,!0,!1)
p=U.kw(null)
o=new U.dN()
o.a=0
o.b=0
o.c=0
o.d=0
o.e=0
o.f=0
o.r=0
o.sfv(0)
o.sfe(0)
o.sfi(0)
n=o.d
if(!(Math.abs(n-0.1)<$.G().a)){o.d=0.1
n=new D.C("deltaYaw",n,0.1,o,[P.o])
n.b=!0
o.K(n)}n=o.e
if(!(Math.abs(n-0.21)<$.G().a)){o.e=0.21
n=new D.C("deltaPitch",n,0.21,o,[P.o])
n.b=!0
o.K(n)}n=o.f
if(!(Math.abs(n-0.32)<$.G().a)){o.f=0.32
n=new D.C("deltaRoll",n,0.32,o,[P.o])
n.b=!0
o.K(n)}p.h(0,o)
p.h(0,U.jJ(V.kG(0,0,5)))
m=X.jR(2000,1.0471975511965976,p,0.1,null)
l=new X.eK()
l.a=512
l.b=512
l.c=512
l.d=512
l.e=!0
l.f=!1
l.r=1
l.x=1
l.ch=T.kV(0,null)
l.cx=new V.ad(0,0,0,1)
l.cy=!0
l.db=2000
l.dx=!0
l.dy=V.kR()
l.sb7(0,512)
l.sb3(0,512)
if(l.cy){l.cy=!1
o=new D.C("clearColor",!0,!1,l,[P.N])
o.b=!0
l.al(o)}o=q.f
n=o.a
k=n.createTexture()
C.b.af(n,34067,k)
C.b.aH(n,34067,10242,10497)
C.b.aH(n,34067,10243,10497)
C.b.aH(n,34067,10241,9729)
C.b.aH(n,34067,10240,9729)
C.b.af(n,34067,null)
j=new T.dZ()
j.a=0
j.b=k
j.c=!1
j.d=0
o.aX(j,k,"../resources/maskonaive/posx.jpg",34069,!1,!1)
o.aX(j,k,"../resources/maskonaive/negx.jpg",34070,!1,!1)
o.aX(j,k,"../resources/maskonaive/posy.jpg",34071,!1,!1)
o.aX(j,k,"../resources/maskonaive/negy.jpg",34072,!1,!1)
o.aX(j,k,"../resources/maskonaive/posz.jpg",34073,!1,!1)
o.aX(j,k,"../resources/maskonaive/negz.jpg",34074,!1,!1)
i=new M.db()
i.sb1(null)
i.sbs(0,null)
i.sb6(null)
o=E.jL(null,!0,null,"",null,null)
h=F.h5()
n=h.a
g=new V.D(-1,-1,1)
g=g.w(0,Math.sqrt(g.G(g)))
f=n.bF(new V.as(1,2,4,6),new V.ad(1,0,0,1),new V.S(-1,-1,0),new V.a0(0,1),g,null)
n=h.a
g=new V.D(1,-1,1)
g=g.w(0,Math.sqrt(g.G(g)))
e=n.bF(new V.as(0,3,4,6),new V.ad(0,0,1,1),new V.S(1,-1,0),new V.a0(1,1),g,null)
n=h.a
g=new V.D(1,1,1)
g=g.w(0,Math.sqrt(g.G(g)))
d=n.bF(new V.as(0,2,5,6),new V.ad(0,1,0,1),new V.S(1,1,0),new V.a0(1,0),g,null)
n=h.a
g=V.b8()
c=new V.D(-1,1,1)
c=c.w(0,Math.sqrt(c.G(c)))
b=n.bF(new V.as(0,2,4,7),new V.ad(1,1,0,1),new V.S(-1,1,0),g,c,null)
h.d.ee(H.b([f,e,d,b],[F.a8]))
h.at()
o.sa9(0,h)
i.d=o
i.e=null
o=new O.dQ()
o.b=1.0471975511965976
o.d=new V.a_(1,1,1)
a=o.c
o.c=j
j.gt().h(0,o.gaV())
n=new D.C("boxTexture",a,o.c,o,[T.dZ])
n.b=!0
o.X(n)
i.sb6(o)
i.sbs(0,l)
i.sb1(m)
a0=E.jL(null,!0,null,"",null,null)
a0.sa9(0,F.lK(30,1,15,0.5))
a1=O.kB()
o=a1.dx
a2=V.l8()
n=U.jJ(V.kC(V.kM(),a2,new V.D(0,-1,-1)))
a3=new V.a_(1,1,1)
g=new D.bk()
g.c=new V.a_(1,1,1)
g.a=V.l9()
a=g.b
g.b=n
n.gt().h(0,g.gh7())
n=new D.C("mover",a,g.b,g,[U.ab])
n.b=!0
g.aI(n)
if(!g.c.B(0,a3)){a=g.c
g.c=a3
n=new D.C("color",a,a3,g,[V.a_])
n.b=!0
g.aI(n)}o.h(0,g)
o=a1.r
o.saD(0,new V.a_(0,0,1))
o=a1.x
o.saD(0,new V.a_(0,1,0))
o=a1.z
o.saD(0,new V.a_(1,0,0))
o=a1.z
if(o.c===C.d){o.c=C.j
o.cb()
o.cC(100)
n=o.a
n.a=null
n.X(null)}o.cC(10)
a4=M.ku(null,null,null,null,null)
a4.sb1(m)
a4.sb6(a1)
a4.sbs(0,l)
a4.d.h(0,a0)
a5=U.kw(null)
o=q.r
n=new U.eb()
g=U.jI()
g.sdr(0,!0)
g.sd8(6.283185307179586)
g.sda(0)
g.sa4(0,0)
g.sd9(100)
g.sW(0)
g.scT(0.5)
n.b=g
c=n.gaY()
g.gt().h(0,c)
g=U.jI()
g.sdr(0,!0)
g.sd8(6.283185307179586)
g.sda(0)
g.sa4(0,0)
g.sd9(100)
g.sW(0)
g.scT(0.5)
n.c=g
g.gt().h(0,c)
n.d=null
n.e=!1
n.f=!1
n.r=!1
n.x=2.5
n.y=2.5
n.z=2
n.Q=4
n.cx=!1
n.ch=!1
n.cy=0
n.db=0
n.dx=null
n.dy=0
n.fr=null
n.fx=null
a6=new X.ax(!1,!1,!1)
a=n.d
n.d=a6
g=[X.ax]
c=new D.C("modifiers",a,a6,n,g)
c.b=!0
n.K(c)
c=n.f
if(c!==!1){n.f=!1
c=new D.C("invertX",c,!1,n,[P.N])
c.b=!0
n.K(c)}c=n.r
if(c!==!1){n.r=!1
c=new D.C("invertY",c,!1,n,[P.N])
c.b=!0
n.K(c)}n.bh(o)
a5.h(0,n)
o=q.r
n=new U.ea()
c=U.jI()
c.sdr(0,!0)
c.sd8(6.283185307179586)
c.sda(0)
c.sa4(0,0)
c.sd9(100)
c.sW(0)
c.scT(0.2)
n.b=c
c.gt().h(0,n.gaY())
n.c=null
n.d=!1
n.e=2.5
n.f=2
n.r=4
n.y=!1
n.x=!1
n.z=0
n.Q=null
n.ch=0
n.cx=null
n.cy=null
a6=new X.ax(!0,!1,!1)
a=n.c
n.c=a6
c=new D.C("modifiers",a,a6,n,g)
c.b=!0
n.K(c)
n.bh(o)
a5.h(0,n)
o=q.r
n=new U.ec()
n.c=0.01
n.d=0
n.e=0
a6=new X.ax(!1,!1,!1)
n.b=a6
g=new D.C("modifiers",null,a6,n,g)
g.b=!0
n.K(g)
n.bh(o)
a5.h(0,n)
a5.h(0,U.jJ(V.kG(0,0,5)))
a7=X.jR(2000,1.0471975511965976,a5,0.1,null)
a8=E.jL(null,!0,null,"",null,null)
a8.sa9(0,F.j4(1,null,null,1))
a9=O.kB()
o=a9.f
n=l.ch
g=o.c
if(g!==C.h){if(g===C.d)o.aL()
o.c=C.h
o.j9(null)
g=o.a
g.a=null
g.X(null)}o.j8(n)
b0=M.ku(null,null,null,null,null)
b0.sb1(a7)
b0.sb6(a9)
b0.d.h(0,a8)
o=M.az
n=H.b([i,a4,b0],[o])
g=new M.d9()
g.bz(o)
g.e=!1
g.f=null
g.b9(g.giG(),g.giI())
g.ae(0,n)
o=q.d
if(o!==g){if(o!=null)o.gt().N(0,q.gdA())
q.d=g
g.gt().h(0,q.gdA())
q.dB()}o=new V.fV("shapes",!0)
s=C.z.ds(s,"shapes")
o.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
o.ec(0,"Cube",new V.jk(a8),!0)
o.aA(0,"Cuboid",new V.jl(a8))
o.aA(0,"Cylinder",new V.jm(a8))
o.aA(0,"Cone",new V.jn(a8))
o.aA(0,"Cylindrical",new V.jo(a8))
o.aA(0,"Sphere",new V.jp(a8))
o.aA(0,"Spherical",new V.jq(a8))
o.aA(0,"Toroid",new V.jr(a8))
o.aA(0,"Knot",new V.js(a8))
s=q.z
if(s==null){s=D.H()
q.z=s}o={func:1,ret:-1,args:[D.w]}
n=H.k(new V.jt(u,a9),o)
if(s.b==null)s.sbe(H.b([],[o]))
s=s.b;(s&&C.a).h(s,n)
V.oc(q)},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
jj:function jj(){},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
ji:function ji(){},
jp:function jp(a){this.a=a},
jq:function jq(a){this.a=a},
jh:function jh(){},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a,b){this.a=a
this.b=b}},U={
jI:function(){var u=new U.eR()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
jJ:function(a){var u=new U.da()
u.a=a
return u},
kw:function(a){var u=new U.cf()
u.bz(U.ab)
u.b9(u.ghe(),u.giC())
u.e=null
u.f=V.bL()
u.r=0
return u},
eR:function eR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){this.b=this.a=null},
cf:function cf(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ab:function ab(){},
dN:function dN(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ea:function ea(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eb:function eb(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ec:function ec(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
ku:function(a,b,c,d,e){var u=new M.df()
u.shu(0,O.jH(E.ak))
u.d.b9(u.gi5(),u.gi7())
u.e=null
u.f=null
u.r=null
u.x=null
d=X.kv(!0,!0,!1,c,2000,null,0)
u.sb1(a)
u.sbs(0,d)
u.sb6(e)
return u},
d9:function d9(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},
db:function db(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
az:function az(){}},A={
mF:function(a,b){var u,t
u=a.au
t=new A.dx(b,u)
t.dz(b,u)
t.fZ(a,b)
return t},
jT:function(a,b,c,d,e){var u=new A.hx(a,b,c,e)
u.f=d
u.sjx(P.mC(d,0,!1,P.m))
return u},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
eJ:function eJ(a){this.a=a},
dx:function dx(a,b){var _=this
_.bJ=_.eB=_.bI=_.au=_.aE=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eR=_.cW=_.eQ=_.bW=_.eP=_.eO=_.bV=_.bU=_.eN=_.eM=_.bT=_.bS=_.bR=_.eL=_.eK=_.bQ=_.eJ=_.eI=_.bP=_.eH=_.eG=_.bO=_.bN=_.eF=_.eE=_.bM=_.bL=_.eD=_.eC=_.bK=null
_.d0=_.eV=_.d_=_.eU=_.cZ=_.eT=_.cY=_.eS=_.cX=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fF:function fF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aE=b3
_.au=b4
_.bI=b5},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
cE:function cE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cC:function cC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cF:function cF(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j},
cD:function cD(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j},
cG:function cG(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.cy=n},
cs:function cs(){},
bD:function bD(a,b){this.a=a
this.b=b},
dR:function dR(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e5:function e5(){},
hD:function hD(a){this.a=a},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hA:function hA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hC:function hC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hx:function hx(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hy:function hy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hE:function hE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
j4:function(a,b,c,d){var u
H.k(c,{func:1,ret:-1,args:[F.a8,P.o,P.o]})
u=F.h5()
F.cT(u,b,c,d,a,1,0,0,1)
F.cT(u,b,c,d,a,0,1,0,3)
F.cT(u,b,c,d,a,0,0,1,2)
F.cT(u,b,c,d,a,-1,0,0,0)
F.cT(u,b,c,d,a,0,-1,0,0)
F.cT(u,b,c,d,a,0,0,-1,3)
u.at()
return u},
iW:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cT:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.k(c,{func:1,ret:-1,args:[F.a8,P.o,P.o]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.D(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.D(o+a3,n+a1,m+a2)
u.b=l
k=new V.D(o-a3,n-a1,m-a2)
u.c=k
j=new V.D(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.iW(t)
f=F.iW(u.b)
e=F.kd(d,a0,new F.iV(u,F.iW(u.c),F.iW(u.d),f,g,c),b)
if(e!=null)a.bo(e)},
ly:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.k(e,{func:1,ret:P.o,args:[P.o]})
if(a0<3)return
u=F.h5()
t=b?-1:1
s=-6.283185307179586/a0
r=H.b([],[F.a8])
q=u.a
p=new V.D(0,0,t)
p=p.w(0,Math.sqrt(p.G(p)))
C.a.h(r,q.jX(new V.as(a,-1,-1,-1),new V.ad(1,1,1,1),new V.S(0,0,d),new V.D(0,0,t),new V.a0(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.A(k)
j=new V.D(m,l,t).w(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ed(new V.as(a,-1,-1,-1),null,new V.ad(i,g,h,1),new V.S(m*k,l*k,d),new V.D(0,0,t),new V.a0(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.ee(r)
return u},
lv:function(a,b,c,d,e,f){return F.lw(!0,c,d,new F.j5(a,f),e)},
lw:function(a,b,c,d,e){var u
H.k(d,{func:1,ret:P.o,args:[P.o,P.o]})
if(e<3)return
if(c<1)return
u=F.kd(c,e,new F.j7(d),null)
if(u==null)return
u.at()
u.cH()
if(b)u.bo(F.ly(3,!1,!1,1,new F.j8(d),e))
u.bo(F.ly(1,!0,!1,-1,new F.j9(d),e))
return u},
lI:function(a,b,c,d){var u,t
u={}
u.a=b
if(H.k(b,{func:1,ret:P.o,args:[P.o,P.o]})==null)u.a=new F.jx()
t=F.j4(a,null,new F.jy(u,c),d)
t.cH()
return t},
lK:function(a,b,c,d){return F.lx(c,a,d,b,new F.jz())},
o4:function(a,b,c,d,e,f){return F.lx(d,a,e,b,new F.jg(f,c))},
lx:function(a,b,c,d,e){var u=F.kd(a,b,new F.j6(H.k(e,{func:1,ret:V.S,args:[P.o]}),d,b,c),null)
if(u==null)return
u.at()
u.cH()
return u},
kd:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.a8,P.o,P.o]})
if(a<1)return
if(b<1)return
u=F.h5()
t=H.b([],[F.a8])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ed(null,null,new V.ad(p,0,0,1),null,null,new V.a0(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cS(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ed(null,null,new V.ad(j,i,h,1),null,null,new V.a0(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cS(d))}}u.d.jW(a+1,b+1,t)
return u},
cd:function(a,b,c){var u,t
u=new F.a4()
t=a.a
if(t==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
u.cF(a)
u.cG(b)
u.ja(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a7()
return u},
my:function(a,b){var u,t
u=new F.b6()
t=a.a
if(t==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
u.cF(a)
u.cG(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a7()
return u},
h5:function(){var u,t
u=new F.dP()
t=new F.hS(u)
t.b=!1
t.sjy(H.b([],[F.a8]))
u.a=t
t=new F.h8(u)
t.scv(H.b([],[F.br]))
u.b=t
t=new F.h7(u)
t.shO(H.b([],[F.b6]))
u.c=t
t=new F.h6(u)
t.shE(H.b([],[F.a4]))
u.d=t
u.e=null
return u},
ed:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.a8()
t=new F.i_(u)
t.scv(H.b([],[F.br]))
u.b=t
t=new F.hW(u)
s=[F.b6]
t.shP(H.b([],s))
t.shQ(H.b([],s))
u.c=t
t=new F.hT(u)
s=[F.a4]
t.shF(H.b([],s))
t.shG(H.b([],s))
t.shH(H.b([],s))
u.d=t
h=$.lY()
u.e=0
t=$.aN()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bd().a)!==0?e:null
u.x=(s&$.bc().a)!==0?b:null
u.y=(s&$.be().a)!==0?f:null
u.z=(s&$.bf().a)!==0?g:null
u.Q=(s&$.lZ().a)!==0?c:null
u.ch=(s&$.c4().a)!==0?i:0
u.cx=(s&$.bb().a)!==0?a:null
return u},
iV:function iV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j5:function j5(a,b){this.a=a
this.b=b},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
jx:function jx(){},
jy:function jy(a,b){this.a=a
this.b=b},
jz:function jz(){},
jg:function jg(a,b){this.a=a
this.b=b},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function a4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f7:function f7(){},
hd:function hd(){},
b6:function b6(){this.b=this.a=null},
fq:function fq(){},
hw:function hw(){},
br:function br(){this.a=null},
dP:function dP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(a){this.a=a
this.b=null},
h7:function h7(a){this.a=a
this.b=null},
h8:function h8(a){this.a=a
this.b=null},
a8:function a8(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i1:function i1(a){this.a=a},
i0:function i0(a){this.a=a},
hS:function hS(a){this.a=a
this.c=this.b=null},
hT:function hT(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
hW:function hW(a){this.a=a
this.c=this.b=null},
hY:function hY(){},
hX:function hX(){},
hZ:function hZ(){},
fP:function fP(){},
i_:function i_(a){this.a=a
this.b=null}},T={
kV:function(a,b){var u=new T.hl()
u.a=a
u.b=b
u.c=!1
u.d=!1
u.e=0
u.f=0
u.r=0
u.x=0
return u},
cx:function cx(){},
dY:function dY(){},
hl:function hl(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dZ:function dZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hm:function hm(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
hn:function hn(a,b,c,d,e,f,g){var _=this
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
H.jO.prototype={}
J.ae.prototype={
B:function(a,b){return a===b},
gL:function(a){return H.cq(a)},
i:function(a){return"Instance of '"+H.bO(a)+"'"}}
J.fm.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iN:1}
J.dn.prototype={
B:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iE:1}
J.dp.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.fS.prototype={}
J.bu.prototype={}
J.b5.prototype={
i:function(a){var u=a[$.lM()]
if(u==null)return this.fU(a)
return"JavaScript function for "+H.j(J.ao(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibm:1}
J.aH.prototype={
h:function(a,b){H.y(b,H.r(a,0))
if(!!a.fixed$length)H.q(P.Y("add"))
a.push(b)},
l5:function(a,b){var u
if(!!a.fixed$length)H.q(P.Y("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dK(b,null,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.q(P.Y("remove"))
for(u=0;u<a.length;++u)if(J.T(a[u],b)){a.splice(u,1)
return!0}return!1},
ae:function(a,b){var u,t
H.h(b,"$il",[H.r(a,0)],"$al")
if(!!a.fixed$length)H.q(P.Y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.z)(b),++t)a.push(b[t])},
a0:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.b1(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.q(u,t,H.j(a[t]))
return u.join(b)},
kJ:function(a){return this.l(a,"")},
kz:function(a,b,c,d){var u,t,s
H.y(b,d)
H.k(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.b1(a))}return t},
ky:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.N,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.b1(a))}throw H.c(H.fk())},
kx:function(a,b){return this.ky(a,b,null)},
ag:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
fR:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a7(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.a7(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
gkw:function(a){if(a.length>0)return a[0]
throw H.c(H.fk())},
gaG:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fk())},
fN:function(a,b,c,d,e){var u,t,s
u=H.r(a,0)
H.h(d,"$il",[u],"$al")
if(!!a.immutable$list)H.q(P.Y("setRange"))
P.b9(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.h(d,"$ia",[u],"$aa")
u=J.c0(d)
if(e+t>u.gm(d))throw H.c(H.mu())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.k(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.k(d,e+s)},
bx:function(a,b,c,d){return this.fN(a,b,c,d,0)},
ei:function(a,b){var u,t
H.k(b,{func:1,ret:P.N,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.b1(a))}return!1},
Y:function(a,b){var u
for(u=0;u<a.length;++u)if(J.T(a[u],b))return!0
return!1},
i:function(a){return P.jM(a,"[","]")},
gU:function(a){return new J.ap(a,a.length,0,[H.r(a,0)])},
gL:function(a){return H.cq(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.Y("set length"))
if(b<0)throw H.c(P.a7(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.c(H.bZ(a,b))
return a[b]},
q:function(a,b,c){H.y(c,H.r(a,0))
if(!!a.immutable$list)H.q(P.Y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bZ(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.r(a,0)]
H.h(b,"$ia",u,"$aa")
t=C.f.n(a.length,b.gm(b))
u=H.b([],u)
this.sm(u,t)
this.bx(u,0,a.length,a)
this.bx(u,a.length,t,b)
return u},
$il:1,
$ia:1}
J.jN.prototype={}
J.ap.prototype={
gM:function(){return this.d},
E:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.z(u))
s=this.c
if(s>=t){this.sdP(null)
return!1}this.sdP(u[s]);++this.c
return!0},
sdP:function(a){this.d=H.y(a,H.r(this,0))},
$iaQ:1}
J.bq.prototype={
li:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.Y(""+a+".toInt()"))},
d1:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.Y(""+a+".floor()"))},
a8:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.Y(""+a+".round()"))},
fn:function(a,b){var u,t
if(b>20)throw H.c(P.a7(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bu:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a7(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a3(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.q(P.Y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.v("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
n:function(a,b){if(typeof b!=="number")throw H.c(H.an(b))
return a+b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.an(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.c(H.an(b))
return a*b},
bw:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fY:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e8(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.e8(a,b)},
e8:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.Y("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
b_:function(a,b){var u
if(a>0)u=this.e7(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
jf:function(a,b){if(b<0)throw H.c(H.an(b))
return this.e7(a,b)},
e7:function(a,b){return b>31?0:a>>>b},
$io:1,
$iah:1}
J.dm.prototype={$im:1}
J.dl.prototype={}
J.b4.prototype={
a3:function(a,b){if(b<0)throw H.c(H.bZ(a,b))
if(b>=a.length)H.q(H.bZ(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(b>=a.length)throw H.c(H.bZ(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.jE(b,null,null))
return a+b},
b5:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.an(b))
c=P.b9(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ak:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.an(c))
if(typeof c!=="number")return c.Z()
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
aa:function(a,b){return this.ak(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.an(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Z()
if(b<0)throw H.c(P.dK(b,null,null))
if(b>c)throw H.c(P.dK(b,null,null))
if(c>a.length)throw H.c(P.dK(c,null,null))
return a.substring(b,c)},
ay:function(a,b){return this.A(a,b,null)},
ll:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kV:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.v(c,u)+a},
aq:function(a,b){return this.kV(a,b," ")},
f3:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
f2:function(a,b){return this.f3(a,b,0)},
i:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikJ:1,
$if:1}
H.t.prototype={
gm:function(a){return this.a.length},
k:function(a,b){return C.c.a3(this.a,b)},
$acH:function(){return[P.m]},
$aU:function(){return[P.m]},
$al:function(){return[P.m]},
$aa:function(){return[P.m]}}
H.f0.prototype={}
H.bJ.prototype={
gU:function(a){return new H.ci(this,this.gm(this),0,[H.a9(this,"bJ",0)])},
c3:function(a,b){return this.fT(0,H.k(b,{func:1,ret:P.N,args:[H.a9(this,"bJ",0)]}))}}
H.ci.prototype={
gM:function(){return this.d},
E:function(){var u,t,s,r
u=this.a
t=J.c0(u)
s=t.gm(u)
if(this.b!==s)throw H.c(P.b1(u))
r=this.c
if(r>=s){this.sbc(null)
return!1}this.sbc(t.ag(u,r));++this.c
return!0},
sbc:function(a){this.d=H.y(a,H.r(this,0))},
$iaQ:1}
H.fA.prototype={
gU:function(a){return new H.fB(J.by(this.a),this.b,this.$ti)},
gm:function(a){return J.aF(this.a)},
ag:function(a,b){return this.b.$1(J.eH(this.a,b))},
$al:function(a,b){return[b]}}
H.fB.prototype={
E:function(){var u=this.b
if(u.E()){this.sbc(this.c.$1(u.gM()))
return!0}this.sbc(null)
return!1},
gM:function(){return this.a},
sbc:function(a){this.a=H.y(a,H.r(this,1))},
$aaQ:function(a,b){return[b]}}
H.fC.prototype={
gm:function(a){return J.aF(this.a)},
ag:function(a,b){return this.b.$1(J.eH(this.a,b))},
$abJ:function(a,b){return[b]},
$al:function(a,b){return[b]}}
H.cJ.prototype={
gU:function(a){return new H.i3(J.by(this.a),this.b,this.$ti)}}
H.i3.prototype={
E:function(){var u,t
for(u=this.a,t=this.b;u.E();)if(t.$1(u.gM()))return!0
return!1},
gM:function(){return this.a.gM()}}
H.bG.prototype={}
H.cH.prototype={
q:function(a,b,c){H.y(c,H.a9(this,"cH",0))
throw H.c(P.Y("Cannot modify an unmodifiable list"))}}
H.e7.prototype={}
H.eT.prototype={
i:function(a){return P.jQ(this)},
q:function(a,b,c){H.y(b,H.r(this,0))
H.y(c,H.r(this,1))
return H.mm()},
$iJ:1}
H.eU.prototype={
gm:function(a){return this.a},
bG:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.bG(b))return
return this.dQ(b)},
dQ:function(a){return this.b[H.F(a)]},
a0:function(a,b){var u,t,s,r,q
u=H.r(this,1)
H.k(b,{func:1,ret:-1,args:[H.r(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.y(this.dQ(q),u))}}}
H.fY.prototype={}
H.ht.prototype={
ap:function(a){var u,t,s
u=new RegExp(this.a).exec(a)
if(u==null)return
t=Object.create(null)
s=this.b
if(s!==-1)t.arguments=u[s+1]
s=this.c
if(s!==-1)t.argumentsExpr=u[s+1]
s=this.d
if(s!==-1)t.expr=u[s+1]
s=this.e
if(s!==-1)t.method=u[s+1]
s=this.f
if(s!==-1)t.receiver=u[s+1]
return t}}
H.fQ.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fo.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.j(this.a)+")"}}
H.hH.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jA.prototype={
$1:function(a){if(!!J.R(a).$ibl)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:22}
H.es.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iat:1}
H.c9.prototype={
i:function(a){return"Closure '"+H.bO(this).trim()+"'"},
$ibm:1,
glr:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hk.prototype={}
H.he.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c3(u)+"'"}}
H.c6.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c6))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cq(this.a)
else t=typeof u!=="object"?J.d2(u):H.cq(u)
return(t^H.cq(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bO(u)+"'")}}
H.hv.prototype={
i:function(a){return this.a}}
H.eP.prototype={
i:function(a){return this.a}}
H.h2.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.aJ.prototype={
gm:function(a){return this.a},
gkI:function(a){return this.a===0},
gaF:function(){return new H.fs(this,[H.r(this,0)])},
bG:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dM(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dM(t,a)}else return this.kF(a)},
kF:function(a){var u=this.d
if(u==null)return!1
return this.d4(this.cj(u,this.d3(a)),a)>=0},
k:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bA(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bA(r,b)
s=t==null?null:t.b
return s}else return this.kG(b)},
kG:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.cj(u,this.d3(a))
s=this.d4(t,a)
if(s<0)return
return t[s].b},
q:function(a,b,c){var u,t
H.y(b,H.r(this,0))
H.y(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.ct()
this.b=u}this.dD(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.ct()
this.c=t}this.dD(t,b,c)}else this.kH(b,c)},
kH:function(a,b){var u,t,s,r
H.y(a,H.r(this,0))
H.y(b,H.r(this,1))
u=this.d
if(u==null){u=this.ct()
this.d=u}t=this.d3(a)
s=this.cj(u,t)
if(s==null)this.cD(u,t,[this.cc(a,b)])
else{r=this.d4(s,a)
if(r>=0)s[r].b=b
else s.push(this.cc(a,b))}},
a0:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.b1(this))
u=u.c}},
dD:function(a,b,c){var u
H.y(b,H.r(this,0))
H.y(c,H.r(this,1))
u=this.bA(a,b)
if(u==null)this.cD(a,b,this.cc(b,c))
else u.b=c},
hl:function(){this.r=this.r+1&67108863},
cc:function(a,b){var u,t
u=new H.fr(H.y(a,H.r(this,0)),H.y(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hl()
return u},
d3:function(a){return J.d2(a)&0x3ffffff},
d4:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1},
i:function(a){return P.jQ(this)},
bA:function(a,b){return a[b]},
cj:function(a,b){return a[b]},
cD:function(a,b,c){a[b]=c},
hz:function(a,b){delete a[b]},
dM:function(a,b){return this.bA(a,b)!=null},
ct:function(){var u=Object.create(null)
this.cD(u,"<non-identifier-key>",u)
this.hz(u,"<non-identifier-key>")
return u},
$iky:1}
H.fr.prototype={}
H.fs.prototype={
gm:function(a){return this.a.a},
gU:function(a){var u,t
u=this.a
t=new H.ft(u,u.r,this.$ti)
t.c=u.e
return t}}
H.ft.prototype={
gM:function(){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.b1(u))
else{u=this.c
if(u==null){this.sdE(null)
return!1}else{this.sdE(u.a)
this.c=this.c.c
return!0}}},
sdE:function(a){this.d=H.y(a,H.r(this,0))},
$iaQ:1}
H.jc.prototype={
$1:function(a){return this.a(a)},
$S:22}
H.jd.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.je.prototype={
$1:function(a){return this.a(H.F(a))},
$S:44}
H.fn.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikJ:1,
$imU:1}
H.bM.prototype={$ibM:1,$in3:1}
H.dA.prototype={
gm:function(a){return a.length},
$iaI:1,
$aaI:function(){}}
H.dB.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]},
q:function(a,b,c){H.nR(c)
H.ba(b,a,a.length)
a[b]=c},
$abG:function(){return[P.o]},
$aU:function(){return[P.o]},
$il:1,
$al:function(){return[P.o]},
$ia:1,
$aa:function(){return[P.o]}}
H.dC.prototype={
q:function(a,b,c){H.a3(c)
H.ba(b,a,a.length)
a[b]=c},
$abG:function(){return[P.m]},
$aU:function(){return[P.m]},
$il:1,
$al:function(){return[P.m]},
$ia:1,
$aa:function(){return[P.m]}}
H.fJ.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.fK.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.fL.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.fM.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.dD.prototype={
gm:function(a){return a.length},
k:function(a,b){H.ba(b,a,a.length)
return a[b]},
$ioz:1}
H.cn.prototype={
gm:function(a){return a.length},
k:function(a,b){H.ba(b,a,a.length)
return a[b]},
$icn:1,
$iO:1}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
P.i5.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:30}
P.i4.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:34}
P.i6.prototype={
$0:function(){this.a.$0()},
$S:0}
P.i7.prototype={
$0:function(){this.a.$0()},
$S:0}
P.et.prototype={
hh:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bY(new P.iK(this,b),0),a)
else throw H.c(P.Y("`setTimeout()` not found."))},
hi:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bY(new P.iJ(this,a,Date.now(),b),0),a)
else throw H.c(P.Y("Periodic timer."))},
$iaW:1}
P.iK.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.iJ.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fY(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.b_.prototype={
kM:function(a){if(this.c!==6)return!0
return this.b.b.dl(H.k(this.d,{func:1,ret:P.N,args:[P.M]}),a.a,P.N,P.M)},
kE:function(a){var u,t,s,r
u=this.e
t=P.M
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.eC(u,{func:1,args:[P.M,P.at]}))return H.k7(r.lc(u,a.a,a.b,null,t,P.at),s)
else return H.k7(r.dl(H.k(u,{func:1,args:[P.M]}),a.a,null,t),s)}}
P.aD.prototype={
fm:function(a,b,c){var u,t,s,r
u=H.r(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.X
if(t!==C.l){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.nE(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aD(0,$.X,[c])
r=b==null?1:3
this.dG(new P.b_(s,r,a,b,[u,c]))
return s},
lh:function(a,b){return this.fm(a,null,b)},
dG:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$ib_")
this.c=a}else{if(u===2){t=H.d(this.c,"$iaD")
u=t.a
if(u<4){t.dG(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.j2(null,null,u,H.k(new P.ig(this,a),{func:1,ret:-1}))}},
e3:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$ib_")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iaD")
t=p.a
if(t<4){p.e3(a)
return}this.a=t
this.c=p.c}u.a=this.bC(a)
t=this.b
t.toString
P.j2(null,null,t,H.k(new P.ik(u,this),{func:1,ret:-1}))}},
cz:function(){var u=H.d(this.c,"$ib_")
this.c=null
return this.bC(u)},
bC:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dI:function(a){var u,t,s
u=H.r(this,0)
H.k7(a,{futureOr:1,type:u})
t=this.$ti
if(H.cW(a,"$ice",t,"$ace"))if(H.cW(a,"$iaD",t,null))P.la(a,this)
else P.nf(a,this)
else{s=this.cz()
H.y(a,u)
this.a=4
this.c=a
P.cM(this,s)}},
dJ:function(a,b){var u
H.d(b,"$iat")
u=this.cz()
this.a=8
this.c=new P.ai(a,b)
P.cM(this,u)},
$ice:1}
P.ig.prototype={
$0:function(){P.cM(this.a,this.b)},
$S:0}
P.ik.prototype={
$0:function(){P.cM(this.b,this.a.a)},
$S:0}
P.ih.prototype={
$1:function(a){var u=this.a
u.a=0
u.dI(a)},
$S:30}
P.ii.prototype={
$2:function(a,b){H.d(b,"$iat")
this.a.dJ(a,b)},
$1:function(a){return this.$2(a,null)},
$S:53}
P.ij.prototype={
$0:function(){this.a.dJ(this.b,this.c)},
$S:0}
P.io.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.fj(H.k(r.d,{func:1}),null)}catch(q){t=H.ac(q)
s=H.c1(q)
if(this.d){r=H.d(this.a.a.c,"$iai").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$iai")
else p.b=new P.ai(t,s)
p.a=!0
return}if(!!J.R(u).$ice){if(u instanceof P.aD&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$iai")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.lh(new P.ip(o),null)
r.a=!1}},
$S:3}
P.ip.prototype={
$1:function(a){return this.a},
$S:50}
P.im.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.r(s,0)
q=H.y(this.c,r)
p=H.r(s,1)
this.a.b=s.b.b.dl(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ac(o)
t=H.c1(o)
s=this.a
s.b=new P.ai(u,t)
s.a=!0}},
$S:3}
P.il.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$iai")
r=this.c
if(r.kM(u)&&r.e!=null){q=this.b
q.b=r.kE(u)
q.a=!1}}catch(p){t=H.ac(p)
s=H.c1(p)
r=H.d(this.a.a.c,"$iai")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ai(t,s)
n.a=!0}},
$S:3}
P.eg.prototype={}
P.hf.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.aD(0,$.X,[P.m])
u.a=0
s=H.r(this,0)
r=H.k(new P.hh(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.hi(u,t),{func:1,ret:-1})
W.a5(this.a,this.b,r,!1,s)
return t}}
P.hh.prototype={
$1:function(a){H.y(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.r(this.b,0)]}}}
P.hi.prototype={
$0:function(){this.b.dI(this.a.a)},
$S:0}
P.cu.prototype={}
P.hg.prototype={}
P.aW.prototype={}
P.ai.prototype={
i:function(a){return H.j(this.a)},
$ibl:1}
P.iU.prototype={$ioO:1}
P.j1.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dF()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.iu.prototype={
ld:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.l===$.X){a.$0()
return}P.lm(null,null,this,a,-1)}catch(s){u=H.ac(s)
t=H.c1(s)
P.j0(null,null,this,u,H.d(t,"$iat"))}},
le:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.l===$.X){a.$1(b)
return}P.ln(null,null,this,a,b,-1,c)}catch(s){u=H.ac(s)
t=H.c1(s)
P.j0(null,null,this,u,H.d(t,"$iat"))}},
k7:function(a,b){return new P.iw(this,H.k(a,{func:1,ret:b}),b)},
cL:function(a){return new P.iv(this,H.k(a,{func:1,ret:-1}))},
em:function(a,b){return new P.ix(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
fj:function(a,b){H.k(a,{func:1,ret:b})
if($.X===C.l)return a.$0()
return P.lm(null,null,this,a,b)},
dl:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.X===C.l)return a.$1(b)
return P.ln(null,null,this,a,b,c,d)},
lc:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.X===C.l)return a.$2(b,c)
return P.nF(null,null,this,a,b,c,d,e,f)}}
P.iw.prototype={
$0:function(){return this.a.fj(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iv.prototype={
$0:function(){return this.a.ld(this.b)},
$S:3}
P.ix.prototype={
$1:function(a){var u=this.c
return this.a.le(this.b,H.y(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.is.prototype={
gU:function(a){var u=new P.em(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
Y:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibT")!=null}else{t=this.hv(b)
return t}},
hv:function(a){var u=this.d
if(u==null)return!1
return this.cg(this.dR(u,a),a)>=0},
h:function(a,b){var u,t
H.y(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jY()
this.b=u}return this.dF(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jY()
this.c=t}return this.dF(t,b)}else return this.hm(b)},
hm:function(a){var u,t,s
H.y(a,H.r(this,0))
u=this.d
if(u==null){u=P.jY()
this.d=u}t=this.dK(a)
s=u[t]
if(s==null)u[t]=[this.cu(a)]
else{if(this.cg(s,a)>=0)return!1
s.push(this.cu(a))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iW(this.c,b)
else return this.iT(b)},
iT:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.dR(u,a)
s=this.cg(t,a)
if(s<0)return!1
this.e9(t.splice(s,1)[0])
return!0},
dF:function(a,b){H.y(b,H.r(this,0))
if(H.d(a[b],"$ibT")!=null)return!1
a[b]=this.cu(b)
return!0},
iW:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibT")
if(u==null)return!1
this.e9(u)
delete a[b]
return!0},
dW:function(){this.r=1073741823&this.r+1},
cu:function(a){var u,t
u=new P.bT(H.y(a,H.r(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dW()
return u},
e9:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dW()},
dK:function(a){return J.d2(a)&1073741823},
dR:function(a,b){return a[this.dK(b)]},
cg:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1}}
P.bT.prototype={}
P.em.prototype={
gM:function(){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.b1(u))
else{u=this.c
if(u==null){this.sdH(null)
return!1}else{this.sdH(H.y(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
sdH:function(a){this.d=H.y(a,H.r(this,0))},
$iaQ:1}
P.fu.prototype={
$2:function(a,b){this.a.q(0,H.y(a,this.b),H.y(b,this.c))},
$S:7}
P.fv.prototype={$il:1,$ia:1}
P.U.prototype={
gU:function(a){return new H.ci(a,this.gm(a),0,[H.cY(this,a,"U",0)])},
ag:function(a,b){return this.k(a,b)},
lk:function(a,b){var u,t
u=H.b([],[H.cY(this,a,"U",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.q(u,t,this.k(a,t))
return u},
lj:function(a){return this.lk(a,!0)},
n:function(a,b){var u,t
u=[H.cY(this,a,"U",0)]
H.h(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sm(t,C.f.n(this.gm(a),b.gm(b)))
C.a.bx(t,0,this.gm(a),a)
C.a.bx(t,this.gm(a),t.length,b)
return t},
ku:function(a,b,c,d){var u
H.y(d,H.cY(this,a,"U",0))
P.b9(b,c,this.gm(a),null,null,null)
for(u=b;u<c;++u)this.q(a,u,d)},
i:function(a){return P.jM(a,"[","]")}}
P.fx.prototype={}
P.fy.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.j(a)
u.a=t+": "
u.a+=H.j(b)},
$S:7}
P.bK.prototype={
a0:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.a9(this,"bK",0),H.a9(this,"bK",1)]})
for(u=J.by(this.gaF());u.E();){t=u.gM()
b.$2(t,this.k(0,t))}},
gm:function(a){return J.aF(this.gaF())},
i:function(a){return P.jQ(this)},
$iJ:1}
P.iL.prototype={
q:function(a,b,c){H.y(b,H.r(this,0))
H.y(c,H.r(this,1))
throw H.c(P.Y("Cannot modify unmodifiable map"))}}
P.fz.prototype={
k:function(a,b){return this.a.k(0,b)},
q:function(a,b,c){this.a.q(0,H.y(b,H.r(this,0)),H.y(c,H.r(this,1)))},
a0:function(a,b){this.a.a0(0,H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gm:function(a){var u=this.a
return u.gm(u)},
i:function(a){return J.ao(this.a)},
$iJ:1}
P.e8.prototype={}
P.iz.prototype={
ae:function(a,b){var u
for(u=J.by(H.h(b,"$il",this.$ti,"$al"));u.E();)this.h(0,u.gM())},
i:function(a){return P.jM(this,"{","}")},
ag:function(a,b){var u,t,s
if(b<0)H.q(P.a7(b,0,null,"index",null))
for(u=P.nj(this,this.r,H.r(this,0)),t=0;u.E();){s=u.d
if(b===t)return s;++t}throw H.c(P.bI(b,this,"index",null,t))},
$il:1,
$ikS:1}
P.en.prototype={}
P.ex.prototype={}
P.eL.prototype={
kO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.b9(b,c,a.length,null,null,null)
u=$.m0()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.J(a,t)
if(m===37){l=n+2
if(l<=c){k=H.jb(C.c.J(a,n))
j=H.jb(C.c.J(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.c.a3("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.af("")
g=r.a+=C.c.A(a,s,t)
r.a=g+H.bP(m)
s=n
continue}}throw H.c(P.a1("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.A(a,s,c)
f=g.length
if(q>=0)P.km(a,p,c,q,o,f)
else{e=C.f.bw(f-1,4)+1
if(e===1)throw H.c(P.a1("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b5(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.km(a,p,c,q,o,d)
else{e=C.f.bw(d,4)
if(e===1)throw H.c(P.a1("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.b5(a,c,c,e===2?"==":"=")}return a},
$abC:function(){return[[P.a,P.m],P.f]}}
P.eM.prototype={
$abj:function(){return[[P.a,P.m],P.f]}}
P.bC.prototype={}
P.bj.prototype={}
P.f2.prototype={
$abC:function(){return[P.f,[P.a,P.m]]}}
P.fh.prototype={
i:function(a){return this.a}}
P.fg.prototype={
hw:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.e(a,r)
switch(a[r]){case"&":p="&amp;"
break
case'"':p=u?"&quot;":null
break
case"'":p=s?"&#39;":null
break
case"<":p="&lt;"
break
case">":p="&gt;"
break
case"/":p=t?"&#47;":null
break
default:p=null}if(p!=null){if(q==null)q=new P.af("")
if(r>b)q.a+=C.c.A(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mf(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abj:function(){return[P.f,P.f]}}
P.hO.prototype={
gkt:function(){return C.T}}
P.hQ.prototype={
bj:function(a,b,c){var u,t,s
c=P.b9(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iS(t)
if(s.hI(a,b,c)!==c)s.eb(J.m9(a,c-1),0)
return new Uint8Array(t.subarray(0,H.nz(0,s.b,t.length)))},
cR:function(a){return this.bj(a,0,null)},
$abj:function(){return[P.f,[P.a,P.m]]}}
P.iS.prototype={
eb:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.e(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.e(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.e(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.e(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.e(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.e(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.e(u,t)
u[t]=128|a&63
return!1}},
hI:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a3(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.J(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.eb(r,C.c.J(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.e(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.e(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.e(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.e(u,q)
u[q]=128|r&63}}return s}}
P.hP.prototype={
bj:function(a,b,c){var u,t,s,r
H.h(a,"$ia",[P.m],"$aa")
u=P.n6(!1,a,b,c)
if(u!=null)return u
c=P.b9(b,c,J.aF(a),null,null,null)
t=new P.af("")
s=new P.iQ(!1,t)
s.bj(a,b,c)
if(s.e>0){H.q(P.a1("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.bP(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cR:function(a){return this.bj(a,0,null)},
$abj:function(){return[[P.a,P.m],P.f]}}
P.iQ.prototype={
bj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.h(a,"$ia",[P.m],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.iR(this,b,c,a)
$label0$0:for(q=J.c0(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.k(a,o)
if(typeof n!=="number")return n.c4()
if((n&192)!==128){m=P.a1("Bad UTF-8 encoding 0x"+C.f.bu(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.H,m)
if(u<=C.H[m]){m=P.a1("Overlong encoding of 0x"+C.f.bu(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a1("Character outside valid Unicode range: 0x"+C.f.bu(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.bP(u)
this.c=!1}for(m=o<c;m;){l=P.nG(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.k(a,k)
if(typeof n!=="number")return n.Z()
if(n<0){i=P.a1("Negative UTF-8 code unit: -0x"+C.f.bu(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a1("Bad UTF-8 encoding 0x"+C.f.bu(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.iR.prototype={
$2:function(a,b){this.a.b.a+=P.dU(this.d,a,b)},
$S:49}
P.N.prototype={}
P.aj.prototype={
B:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.f.b_(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.mn(H.mP(this))
t=P.dc(H.mN(this))
s=P.dc(H.mJ(this))
r=P.dc(H.mK(this))
q=P.dc(H.mM(this))
p=P.dc(H.mO(this))
o=P.mo(H.mL(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.o.prototype={}
P.aP.prototype={
n:function(a,b){return new P.aP(C.f.n(this.a,b.ghB()))},
u:function(a,b){return new P.aP(C.f.u(this.a,b.ghB()))},
B:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a},
gL:function(a){return C.f.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.f_()
t=this.a
if(t<0)return"-"+new P.aP(0-t).i(0)
s=u.$1(C.f.ab(t,6e7)%60)
r=u.$1(C.f.ab(t,1e6)%60)
q=new P.eZ().$1(t%1e6)
return""+C.f.ab(t,36e8)+":"+H.j(s)+":"+H.j(r)+"."+H.j(q)}}
P.eZ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.f_.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.bl.prototype={}
P.dF.prototype={
i:function(a){return"Throw of null."}}
P.aG.prototype={
gcf:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gce:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gcf()+t+s
if(!this.a)return r
q=this.gce()
p=P.f4(this.b)
return r+q+": "+p}}
P.bQ.prototype={
gcf:function(){return"RangeError"},
gce:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.j(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.j(u)
else if(s>u)t=": Not in range "+H.j(u)+".."+H.j(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.j(u)}return t}}
P.fj.prototype={
gcf:function(){return"RangeError"},
gce:function(){var u,t
u=H.a3(this.b)
if(typeof u!=="number")return u.Z()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.j(t)},
gm:function(a){return this.f}}
P.hI.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hF.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bS.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eS.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.f4(u)+"."}}
P.fR.prototype={
i:function(a){return"Out of Memory"},
$ibl:1}
P.dT.prototype={
i:function(a){return"Stack Overflow"},
$ibl:1}
P.eW.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ej.prototype={
i:function(a){return"Exception: "+this.a}}
P.fc.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.A(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.J(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.a3(r,m)
if(l===10||l===13){k=m
break}}if(k-o>78)if(s-o<75){j=o+75
i=o
h=""
g="..."}else{if(k-s<75){i=k-75
j=k
g=""}else{i=s-36
j=s+36
g="..."}h="..."}else{j=k
i=o
h=""
g=""}f=C.c.A(r,i,j)
return t+h+f+g+"\n"+C.c.v(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.j(s)+")"):t}}
P.bm.prototype={}
P.m.prototype={}
P.l.prototype={
c3:function(a,b){var u=H.a9(this,"l",0)
return new H.cJ(this,H.k(b,{func:1,ret:P.N,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gU(this)
for(t=0;u.E();)++t
return t},
gaT:function(a){var u,t
u=this.gU(this)
if(!u.E())throw H.c(H.fk())
t=u.gM()
if(u.E())throw H.c(H.mv())
return t},
ag:function(a,b){var u,t,s
if(b<0)H.q(P.a7(b,0,null,"index",null))
for(u=this.gU(this),t=0;u.E();){s=u.gM()
if(b===t)return s;++t}throw H.c(P.bI(b,this,"index",null,t))},
i:function(a){return P.mt(this,"(",")")}}
P.aQ.prototype={}
P.a.prototype={$il:1}
P.J.prototype={}
P.E.prototype={
gL:function(a){return P.M.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.ah.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
B:function(a,b){return this===b},
gL:function(a){return H.cq(this)},
i:function(a){return"Instance of '"+H.bO(this)+"'"},
toString:function(){return this.i(this)}}
P.at.prototype={}
P.f.prototype={$ikJ:1}
P.af.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ion:1}
P.hN.prototype={
$2:function(a,b){var u,t,s,r
u=P.f
H.h(a,"$iJ",[u,u],"$aJ")
H.F(b)
t=J.cX(b).f2(b,"=")
if(t===-1){if(b!=="")a.q(0,P.k_(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.A(b,0,t)
r=C.c.ay(b,t+1)
u=this.a
a.q(0,P.k_(s,0,s.length,u,!0),P.k_(r,0,r.length,u,!0))}return a},
$S:48}
P.hK.prototype={
$2:function(a,b){throw H.c(P.a1("Illegal IPv4 address, "+a,this.a,b))},
$S:47}
P.hL.prototype={
$2:function(a,b){throw H.c(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:46}
P.hM.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eE(C.c.A(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:43}
P.bU.prototype={
gft:function(){return this.b},
gd2:function(a){var u=this.c
if(u==null)return""
if(C.c.aa(u,"["))return C.c.A(u,1,u.length-1)
return u},
gbY:function(a){var u=this.d
if(u==null)return P.le(this.a)
return u},
gdf:function(){var u=this.f
return u==null?"":u},
geY:function(){var u=this.r
return u==null?"":u},
dk:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iJ",[P.f,null],"$aJ")
i=this.a
u=i==="file"
j=this.b
f=this.d
t=this.c
if(t!=null)c=t
else if(j.length!==0||f!=null||u)c=""
d=this.e
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.aa(d,"/"))d="/"+d
g=P.jZ(g,0,0,h)
return new P.bU(i,j,c,f,d,g,this.r)},
fg:function(a,b){return this.dk(a,null,null,null,null,null,null,b,null,null)},
gdg:function(){var u,t
if(this.Q==null){u=this.f
t=P.f
this.siS(new P.e8(P.l2(u==null?"":u,C.m),[t,t]))}return this.Q},
geZ:function(){return this.c!=null},
gf1:function(){return this.f!=null},
gf_:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.j(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.j(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.j(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.R(b).$ijU)if(this.a==b.gc9())if(this.c!=null===b.geZ())if(this.b==b.gft())if(this.gd2(this)==b.gd2(b))if(this.gbY(this)==b.gbY(b))if(this.e===b.gfd(b)){u=this.f
t=u==null
if(!t===b.gf1()){if(t)u=""
if(u===b.gdf()){u=this.r
t=u==null
if(!t===b.gf_()){if(t)u=""
u=u===b.geY()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gL:function(a){var u=this.z
if(u==null){u=C.c.gL(this.i(0))
this.z=u}return u},
siS:function(a){var u=P.f
this.Q=H.h(a,"$iJ",[u,u],"$aJ")},
$ijU:1,
gc9:function(){return this.a},
gfd:function(a){return this.e}}
P.iM.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.n()
throw H.c(P.a1("Invalid port",this.a,u+1))},
$S:41}
P.iN.prototype={
$1:function(a){return P.ey(C.aa,a,C.m,!1)},
$S:21}
P.iP.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.ey(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.ey(C.w,b,C.m,!0))}},
$S:33}
P.iO.prototype={
$2:function(a,b){var u,t
H.F(a)
if(b==null||typeof b==="string")this.a.$2(a,H.F(b))
else for(u=J.by(H.lD(b,"$il")),t=this.a;u.E();)t.$2(a,H.F(u.gM()))},
$S:40}
P.hJ.prototype={
gfs:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.c.f3(t,"?",u)
r=t.length
if(s>=0){q=P.cS(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.ia(this,"data",null,null,null,P.cS(t,u,r,C.L,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.iY.prototype={
$1:function(a){return new Uint8Array(96)},
$S:39}
P.iX.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.ma(u,0,96,b)
return u},
$S:37}
P.iZ.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.J(b,t)^96
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.j_.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.J(b,0),t=C.c.J(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.iC.prototype={
geZ:function(){return this.c>0},
gf0:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.A(t)
t=u+1<t
u=t}else u=!1
return u},
gf1:function(){var u=this.f
if(typeof u!=="number")return u.Z()
return u<this.r},
gf_:function(){return this.r<this.a.length},
gdU:function(){return this.b===4&&C.c.aa(this.a,"http")},
gdV:function(){return this.b===5&&C.c.aa(this.a,"https")},
gc9:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdU()){this.x="http"
u="http"}else if(this.gdV()){this.x="https"
u="https"}else if(u===4&&C.c.aa(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.aa(this.a,"package")){this.x="package"
u="package"}else{u=C.c.A(this.a,0,u)
this.x=u}return u},
gft:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.A(this.a,t,u-1):""},
gd2:function(a){var u=this.c
return u>0?C.c.A(this.a,u,this.d):""},
gbY:function(a){var u
if(this.gf0()){u=this.d
if(typeof u!=="number")return u.n()
return P.eE(C.c.A(this.a,u+1,this.e),null,null)}if(this.gdU())return 80
if(this.gdV())return 443
return 0},
gfd:function(a){return C.c.A(this.a,this.e,this.f)},
gdf:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.Z()
return u<t?C.c.A(this.a,u+1,t):""},
geY:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.ay(t,u+1):""},
gdg:function(){var u=this.f
if(typeof u!=="number")return u.Z()
if(u>=this.r)return C.ab
u=P.f
return new P.e8(P.l2(this.gdf(),C.m),[u,u])},
dk:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iJ",[P.f,null],"$aJ")
i=this.gc9()
u=i==="file"
t=this.c
j=t>0?C.c.A(this.a,this.b+3,t):""
f=this.gf0()?this.gbY(this):null
t=this.c
if(t>0)c=C.c.A(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.A(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.aa(d,"/"))d="/"+d
g=P.jZ(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.ay(t,s+1)
return new P.bU(i,j,c,f,d,g,b)},
fg:function(a,b){return this.dk(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.c.gL(this.a)
this.y=u}return u},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$ijU&&this.a===b.i(0)},
i:function(a){return this.a},
$ijU:1}
P.ia.prototype={}
W.x.prototype={}
W.d3.prototype={
i:function(a){return String(a)},
$id3:1}
W.eI.prototype={
i:function(a){return String(a)}}
W.c5.prototype={$ic5:1}
W.bg.prototype={$ibg:1}
W.bA.prototype={
c5:function(a,b,c){if(c!=null)return this.hJ(a,b,P.nN(c,null))
return this.hK(a,b)},
fC:function(a,b){return this.c5(a,b,null)},
hJ:function(a,b,c){return a.getContext(b,c)},
hK:function(a,b){return a.getContext(b)},
$ibA:1,
$ikp:1}
W.bB.prototype={
hL:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kp:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibB:1}
W.bh.prototype={
gm:function(a){return a.length}}
W.ca.prototype={
gm:function(a){return a.length}}
W.eV.prototype={}
W.aA.prototype={$iaA:1}
W.cb.prototype={
jZ:function(a,b){return a.adoptNode(b)},
ds:function(a,b){return a.getElementById(b)}}
W.eY.prototype={
i:function(a){return String(a)}}
W.dd.prototype={
kg:function(a,b){return a.createHTMLDocument(b)}}
W.de.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
B:function(a,b){var u
if(b==null)return!1
if(!H.cW(b,"$iaB",[P.ah],"$aaB"))return!1
u=J.a6(b)
return a.left===u.gbX(b)&&a.top===u.gc1(b)&&a.width===u.gb7(b)&&a.height===u.gb3(b)},
gL:function(a){return W.lc(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gen:function(a){return a.bottom},
gb3:function(a){return a.height},
gbX:function(a){return a.left},
gc0:function(a){return a.right},
gc1:function(a){return a.top},
gb7:function(a){return a.width},
$iaB:1,
$aaB:function(){return[P.ah]}}
W.i9.prototype={
gm:function(a){return this.b.length},
k:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.d(u[b],"$iP")},
q:function(a,b,c){var u
H.d(c,"$iP")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
J.jC(this.a,c,u[b])},
h:function(a,b){J.ki(this.a,b)
return b},
gU:function(a){var u=this.lj(this)
return new J.ap(u,u.length,0,[H.r(u,0)])},
$aU:function(){return[W.P]},
$al:function(){return[W.P]},
$aa:function(){return[W.P]}}
W.P.prototype={
gk6:function(a){return new W.ib(a)},
gcQ:function(a){return new W.i9(a,a.children)},
geu:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.aB(u,t,s,r,[P.ah])},
i:function(a){return a.localName},
ao:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kt
if(u==null){u=H.b([],[W.ay])
t=new W.dE(u)
C.a.h(u,W.lb(null))
C.a.h(u,W.ld())
$.kt=t
d=t}else d=u
u=$.ks
if(u==null){u=new W.ez(d)
$.ks=u
c=u}else{u.a=d
c=u}}if($.b2==null){u=document
t=u.implementation
t=(t&&C.U).kg(t,"")
$.b2=t
$.jK=t.createRange()
t=$.b2
t.toString
t=t.createElement("base")
H.d(t,"$ic5")
t.href=u.baseURI
u=$.b2.head;(u&&C.W).F(u,t)}u=$.b2
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.d(t,"$ibg")}u=$.b2
if(!!this.$ibg)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b2.body;(u&&C.p).F(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Y(C.a8,a.tagName)){u=$.jK;(u&&C.N).fJ(u,s)
u=$.jK
r=(u&&C.N).ke(u,b)}else{s.innerHTML=b
r=$.b2.createDocumentFragment()
for(u=J.a6(r);t=s.firstChild,t!=null;)u.F(r,t)}u=$.b2.body
if(s==null?u!=null:s!==u)J.kk(s)
c.dt(r)
C.z.jZ(document,r)
return r},
kf:function(a,b,c){return this.ao(a,b,c,null)},
fM:function(a,b,c,d){a.textContent=null
this.F(a,this.ao(a,b,c,d))},
fL:function(a,b){return this.fM(a,b,null,null)},
b8:function(a,b){return a.getAttribute(b)},
iU:function(a,b){return a.removeAttribute(b)},
fK:function(a,b,c){return a.setAttribute(b,c)},
$iP:1,
glf:function(a){return a.tagName}}
W.f1.prototype={
$1:function(a){return!!J.R(H.d(a,"$iB")).$iP},
$S:25}
W.n.prototype={$in:1}
W.bF.prototype={
hn:function(a,b,c,d){return a.addEventListener(b,H.bY(H.k(c,{func:1,args:[W.n]}),1),!1)},
$ibF:1}
W.fb.prototype={
gm:function(a){return a.length}}
W.di.prototype={}
W.dj.prototype={
j_:function(a,b,c,d){return a.replaceState(b,c,d)},
gm:function(a){return a.length}}
W.bH.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bI(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iB")
throw H.c(P.Y("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.B]},
$aU:function(){return[W.B]},
$il:1,
$al:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$ibH:1,
$aav:function(){return[W.B]}}
W.dk.prototype={}
W.b3.prototype={$ib3:1,
gev:function(a){return a.data}}
W.cg.prototype={$icg:1,$ikp:1}
W.ch.prototype={$ich:1}
W.aR.prototype={$iaR:1}
W.dr.prototype={}
W.du.prototype={
i:function(a){return String(a)},
$idu:1}
W.cl.prototype={}
W.aa.prototype={$iaa:1}
W.am.prototype={
gaT:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.kT("No elements"))
if(t>1)throw H.c(P.kT("More than one element"))
return u.firstChild},
ae:function(a,b){var u,t,s,r,q
H.h(b,"$il",[W.B],"$al")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a6(t),q=0;q<s;++q)r.F(t,u.firstChild)
return},
q:function(a,b,c){var u,t
H.d(c,"$iB")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.jC(u,c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.dg(u,u.length,-1,[H.cY(C.ac,u,"av",0)])},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aU:function(){return[W.B]},
$al:function(){return[W.B]},
$aa:function(){return[W.B]}}
W.B.prototype={
l4:function(a){var u=a.parentNode
if(u!=null)J.eG(u,a)},
l9:function(a,b){var u,t
try{u=a.parentNode
J.jC(u,b,a)}catch(t){H.ac(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fS(a):u},
F:function(a,b){return a.appendChild(H.d(b,"$iB"))},
iV:function(a,b){return a.removeChild(b)},
iZ:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.co.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bI(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iB")
throw H.c(P.Y("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.B]},
$aU:function(){return[W.B]},
$il:1,
$al:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$aav:function(){return[W.B]}}
W.dJ.prototype={
ke:function(a,b){return a.createContextualFragment(b)},
fJ:function(a,b){return a.selectNodeContents(b)}}
W.h3.prototype={
gm:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.dV.prototype={
ao:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
u=W.mp("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.am(t).ae(0,new W.am(u))
return t},
hN:function(a,b){return a.insertRow(b)}}
W.dW.prototype={
ao:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.am(u)
s=u.gaT(u)
s.toString
u=new W.am(s)
r=u.gaT(u)
t.toString
r.toString
new W.am(t).ae(0,new W.am(r))
return t},
dT:function(a,b){return a.insertCell(b)}}
W.hj.prototype={
ao:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.am(u)
s=u.gaT(u)
t.toString
s.toString
new W.am(t).ae(0,new W.am(s))
return t}}
W.cw.prototype={$icw:1}
W.aK.prototype={$iaK:1}
W.aL.prototype={$iaL:1}
W.hs.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bI(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iaK")
throw H.c(P.Y("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.aK]},
$aU:function(){return[W.aK]},
$il:1,
$al:function(){return[W.aK]},
$ia:1,
$aa:function(){return[W.aK]},
$aav:function(){return[W.aK]}}
W.bt.prototype={}
W.i2.prototype={$ikp:1}
W.aZ.prototype={
gkm:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.Y("deltaY is not supported"))},
gkl:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.Y("deltaX is not supported"))},
$iaZ:1}
W.cK.prototype={
j0:function(a,b){return a.requestAnimationFrame(H.bY(H.k(b,{func:1,ret:-1,args:[P.ah]}),1))},
hC:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cL.prototype={$icL:1}
W.ei.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
B:function(a,b){var u
if(b==null)return!1
if(!H.cW(b,"$iaB",[P.ah],"$aaB"))return!1
u=J.a6(b)
return a.left===u.gbX(b)&&a.top===u.gc1(b)&&a.width===u.gb7(b)&&a.height===u.gb3(b)},
gL:function(a){return W.lc(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gb3:function(a){return a.height},
gb7:function(a){return a.width}}
W.eo.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bI(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iB")
throw H.c(P.Y("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.B]},
$aU:function(){return[W.B]},
$il:1,
$al:function(){return[W.B]},
$ia:1,
$aa:function(){return[W.B]},
$aav:function(){return[W.B]}}
W.i8.prototype={
a0:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gaF(),t=u.length,s=this.a,r=J.a6(s),q=0;q<u.length;u.length===t||(0,H.z)(u),++q){p=u[q]
b.$2(p,r.b8(s,p))}},
gaF:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
q=H.d(u[r],"$icL")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abK:function(){return[P.f,P.f]},
$aJ:function(){return[P.f,P.f]}}
W.ib.prototype={
k:function(a,b){return J.jD(this.a,H.F(b))},
q:function(a,b,c){J.me(this.a,b,c)},
gm:function(a){return this.gaF().length}}
W.ic.prototype={}
W.jX.prototype={}
W.id.prototype={}
W.ie.prototype={
$1:function(a){return this.a.$1(H.d(a,"$in"))},
$S:36}
W.bv.prototype={
h4:function(a){var u,t
u=$.kg()
if(u.gkI(u)){for(t=0;t<262;++t)u.q(0,C.a7[t],W.nY())
for(t=0;t<12;++t)u.q(0,C.B[t],W.nZ())}},
b0:function(a){return $.m1().Y(0,W.cc(a))},
aB:function(a,b,c){var u,t,s
u=W.cc(a)
t=$.kg()
s=t.k(0,H.j(u)+"::"+b)
if(s==null)s=t.k(0,"*::"+b)
if(s==null)return!1
return H.k4(s.$4(a,b,c,this))},
$iay:1}
W.av.prototype={
gU:function(a){return new W.dg(a,this.gm(a),-1,[H.cY(this,a,"av",0)])}}
W.dE.prototype={
b0:function(a){return C.a.ei(this.a,new W.fO(a))},
aB:function(a,b,c){return C.a.ei(this.a,new W.fN(a,b,c))},
$iay:1}
W.fO.prototype={
$1:function(a){return H.d(a,"$iay").b0(this.a)},
$S:27}
W.fN.prototype={
$1:function(a){return H.d(a,"$iay").aB(this.a,this.b,this.c)},
$S:27}
W.er.prototype={
hg:function(a,b,c,d){var u,t,s
this.a.ae(0,c)
u=b.c3(0,new W.iA())
t=b.c3(0,new W.iB())
this.b.ae(0,u)
s=this.c
s.ae(0,C.I)
s.ae(0,t)},
b0:function(a){return this.a.Y(0,W.cc(a))},
aB:function(a,b,c){var u,t
u=W.cc(a)
t=this.c
if(t.Y(0,H.j(u)+"::"+b))return this.d.k_(c)
else if(t.Y(0,"*::"+b))return this.d.k_(c)
else{t=this.b
if(t.Y(0,H.j(u)+"::"+b))return!0
else if(t.Y(0,"*::"+b))return!0
else if(t.Y(0,H.j(u)+"::*"))return!0
else if(t.Y(0,"*::*"))return!0}return!1},
$iay:1}
W.iA.prototype={
$1:function(a){return!C.a.Y(C.B,H.F(a))},
$S:28}
W.iB.prototype={
$1:function(a){return C.a.Y(C.B,H.F(a))},
$S:28}
W.iH.prototype={
aB:function(a,b,c){if(this.fX(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jD(a,"template")==="")return this.e.Y(0,b)
return!1}}
W.iI.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.F(a))},
$S:21}
W.iG.prototype={
b0:function(a){var u=J.R(a)
if(!!u.$icr)return!1
u=!!u.$ip
if(u&&W.cc(a)==="foreignObject")return!1
if(u)return!0
return!1},
aB:function(a,b,c){if(b==="is"||C.c.aa(b,"on"))return!1
return this.b0(a)},
$iay:1}
W.dg.prototype={
E:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdS(J.m6(this.a,u))
this.c=u
return!0}this.sdS(null)
this.c=t
return!1},
gM:function(){return this.d},
sdS:function(a){this.d=H.y(a,H.r(this,0))},
$iaQ:1}
W.ay.prototype={}
W.iy.prototype={$ioA:1}
W.ez.prototype={
dt:function(a){new W.iT(this).$2(a,null)},
bg:function(a,b){if(b==null)J.kk(a)
else J.eG(b,a)},
j5:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.mb(a)
s=J.jD(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ac(o)}q="element unprintable"
try{q=J.ao(a)}catch(o){H.ac(o)}try{p=W.cc(a)
this.j4(H.d(a,"$iP"),b,u,q,p,H.d(t,"$iJ"),H.F(s))}catch(o){if(H.ac(o) instanceof P.aG)throw o
else{this.bg(a,b)
window
n="Removing corrupted element "+H.j(q)
if(typeof console!="undefined")window.console.warn(n)}}},
j4:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.bg(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.b0(a)){this.bg(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.aB(a,"is",g)){this.bg(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaF()
t=H.b(u.slice(0),[H.r(u,0)])
for(s=f.gaF().length-1,u=f.a,r=J.a6(u);s>=0;--s){if(s>=t.length)return H.e(t,s)
q=t[s]
if(!this.a.aB(a,J.mg(q),r.b8(u,q))){window
p="Removing disallowed attribute <"+H.j(e)+" "+q+'="'+H.j(r.b8(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b8(u,q)
r.iU(u,q)}}if(!!J.R(a).$icw)this.dt(a.content)},
$iol:1}
W.iT.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.j5(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.bg(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ac(r)
q=H.d(u,"$iB")
if(s){p=q.parentNode
if(p!=null)J.eG(p,q)}else J.eG(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$iB")}},
$S:35}
W.eh.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.eA.prototype={}
W.eB.prototype={}
P.iD.prototype={
eW:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
dq:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.R(a)
if(!!t.$iaj)return new Date(a.a)
if(!!t.$imU)throw H.c(P.hG("structured clone of RegExp"))
if(!!t.$ib3)return a
if(!!t.$ibM)return a
if(!!t.$iJ){s=this.eW(a)
t=this.b
if(s>=t.length)return H.e(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.q(t,s,r)
a.a0(0,new P.iF(u,this))
return u.a}if(!!t.$ia){s=this.eW(a)
u=this.b
if(s>=u.length)return H.e(u,s)
r=u[s]
if(r!=null)return r
return this.kd(a,s)}throw H.c(P.hG("structured clone of other type"))},
kd:function(a,b){var u,t,s,r
u=J.c0(a)
t=u.gm(a)
s=new Array(t)
C.a.q(this.b,b,s)
for(r=0;r<t;++r)C.a.q(s,r,this.dq(u.k(a,r)))
return s}}
P.iF.prototype={
$2:function(a,b){this.a.a[a]=this.b.dq(b)},
$S:7}
P.ew.prototype={$ib3:1,
gev:function(a){return this.a}}
P.j3.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.iE.prototype={}
P.f8.prototype={
gbB:function(){var u,t,s
u=this.b
t=H.a9(u,"U",0)
s=W.P
return new H.fA(new H.cJ(u,H.k(new P.f9(),{func:1,ret:P.N,args:[t]}),[t]),H.k(new P.fa(),{func:1,ret:s,args:[t]}),[t,s])},
q:function(a,b,c){var u
H.d(c,"$iP")
u=this.gbB()
J.md(u.b.$1(J.eH(u.a,b)),c)},
h:function(a,b){J.ki(this.b.a,b)},
gm:function(a){return J.aF(this.gbB().a)},
k:function(a,b){var u=this.gbB()
return u.b.$1(J.eH(u.a,b))},
gU:function(a){var u=P.mD(this.gbB(),!1,W.P)
return new J.ap(u,u.length,0,[H.r(u,0)])},
$aU:function(){return[W.P]},
$al:function(){return[W.P]},
$aa:function(){return[W.P]}}
P.f9.prototype={
$1:function(a){return!!J.R(H.d(a,"$iB")).$iP},
$S:25}
P.fa.prototype={
$1:function(a){return H.i(H.d(a,"$iB"),"$iP")},
$S:54}
P.it.prototype={
gc0:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.y(u+this.c,H.r(this,0))},
gen:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.y(u+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cW(b,"$iaB",[P.ah],"$aaB")){u=this.a
t=J.a6(b)
if(u==t.gbX(b)){s=this.b
if(s==t.gc1(b)){if(typeof u!=="number")return u.n()
r=H.r(this,0)
if(H.y(u+this.c,r)===t.gc0(b)){if(typeof s!=="number")return s.n()
u=H.y(s+this.d,r)===t.gen(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.d2(u)
s=this.b
r=J.d2(s)
if(typeof u!=="number")return u.n()
q=H.r(this,0)
u=C.f.gL(H.y(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.f.gL(H.y(s+this.d,q))
return P.ni(P.ir(P.ir(P.ir(P.ir(0,t),r),u),q))}}
P.aB.prototype={
gbX:function(a){return this.a},
gc1:function(a){return this.b},
gb7:function(a){return this.c},
gb3:function(a){return this.d}}
P.cr.prototype={$icr:1}
P.p.prototype={
gcQ:function(a){return new P.f8(a,new W.am(a))},
ao:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.ay])
C.a.h(u,W.lb(null))
C.a.h(u,W.ld())
C.a.h(u,new W.iG())
c=new W.ez(new W.dE(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).kf(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.am(r)
p=u.gaT(u)
for(u=J.a6(q);s=p.firstChild,s!=null;)u.F(q,s)
return q},
$ip:1}
P.O.prototype={$il:1,
$al:function(){return[P.m]},
$ia:1,
$aa:function(){return[P.m]},
$in3:1}
P.d6.prototype={$id6:1}
P.dh.prototype={$idh:1}
P.dI.prototype={$idI:1}
P.dM.prototype={$idM:1}
P.bR.prototype={
bE:function(a,b){return a.activeTexture(b)},
ej:function(a,b,c){return a.attachShader(b,c)},
aC:function(a,b,c){return a.bindBuffer(b,c)},
bi:function(a,b,c){return a.bindFramebuffer(b,c)},
el:function(a,b,c){return a.bindRenderbuffer(b,c)},
af:function(a,b,c){return a.bindTexture(b,c)},
k8:function(a,b,c){return a.blendFunc(b,c)},
eo:function(a,b,c,d){return a.bufferData(b,c,d)},
eq:function(a,b){return a.clear(b)},
er:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
es:function(a,b){return a.clearDepth(b)},
kb:function(a,b){return a.compileShader(b)},
kh:function(a,b){return a.createShader(b)},
kj:function(a,b){return a.deleteProgram(b)},
kk:function(a,b){return a.deleteShader(b)},
ew:function(a,b){return a.depthFunc(b)},
kn:function(a,b){return a.disable(b)},
ey:function(a,b){return a.disableVertexAttribArray(b)},
ko:function(a,b,c,d,e){return a.drawElements(b,c,H.a3(d),H.a3(e))},
bm:function(a,b){return a.enable(b)},
eA:function(a,b){return a.enableVertexAttribArray(b)},
kC:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
kD:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
fw:function(a,b,c){return a.getActiveAttrib(b,c)},
fz:function(a,b,c){return a.getActiveUniform(b,c)},
fA:function(a,b,c){return a.getAttribLocation(b,c)},
c6:function(a,b){return a.getParameter(b)},
fD:function(a,b){return a.getProgramInfoLog(b)},
c7:function(a,b,c){return a.getProgramParameter(b,c)},
fE:function(a,b){return a.getShaderInfoLog(b)},
fF:function(a,b,c){return a.getShaderParameter(b,c)},
fG:function(a,b,c){return a.getUniformLocation(b,c)},
kK:function(a,b){return a.linkProgram(b)},
l2:function(a,b,c){return a.pixelStorei(b,c)},
l8:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
fQ:function(a,b,c){return a.shaderSource(b,c)},
fk:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=i==null
if(!u&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.jj(a,b,c,d,e,f,g,h,i,j)
return}t=J.R(g)
if(!!t.$ib3&&h==null&&u&&!0){this.jk(a,b,c,d,e,f,P.nO(g))
return}if(!!t.$icg&&h==null&&u&&!0){this.jl(a,b,c,d,e,f,g)
return}throw H.c(P.d4("Incorrect number or type of arguments"))},
lg:function(a,b,c,d,e,f,g){return this.fk(a,b,c,d,e,f,g,null,null,null)},
jj:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
jk:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
jl:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aH:function(a,b,c,d){return a.texParameteri(b,c,d)},
O:function(a,b,c){return a.uniform1f(b,c)},
R:function(a,b,c){return a.uniform1i(b,c)},
C:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fp:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fq:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dn:function(a,b){return a.useProgram(b)},
lm:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fu:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibR:1}
P.dO.prototype={$idO:1}
P.dX.prototype={$idX:1}
P.e6.prototype={$ie6:1}
O.Z.prototype={
bz:function(a){this.shR(H.b([],[a]))
this.se1(null)
this.sdY(null)
this.se2(null)},
du:function(a,b,c){var u=H.a9(this,"Z",0)
H.k(b,{func:1,ret:P.N,args:[[P.l,u]]})
u={func:1,ret:-1,args:[P.m,[P.l,u]]}
H.k(a,u)
H.k(c,u)
this.se1(b)
this.sdY(a)
this.se2(c)},
b9:function(a,b){return this.du(a,null,b)},
e0:function(a){var u
H.h(a,"$il",[H.a9(this,"Z",0)],"$al")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dX:function(a,b){var u
H.h(b,"$il",[H.a9(this,"Z",0)],"$al")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.ap(u,u.length,0,[H.r(u,0)])},
ag:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.a9(this,"Z",0)
H.y(b,u)
u=[u]
if(this.e0(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dX(s,H.b([b],u))}},
ae:function(a,b){var u,t
H.h(b,"$il",[H.a9(this,"Z",0)],"$al")
if(this.e0(b)){u=this.a
t=u.length
C.a.ae(u,b)
this.dX(t,b)}},
shR:function(a){this.a=H.h(a,"$ia",[H.a9(this,"Z",0)],"$aa")},
se1:function(a){this.b=H.k(a,{func:1,ret:P.N,args:[[P.l,H.a9(this,"Z",0)]]})},
sdY:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.m,[P.l,H.a9(this,"Z",0)]]})},
se2:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.m,[P.l,H.a9(this,"Z",0)]]})},
$il:1}
O.ck.prototype={
gm:function(a){return this.a.length},
gt:function(){var u=this.b
if(u==null){u=D.H()
this.b=u}return u},
h2:function(a){var u=this.b
if(u!=null)u.I(a)},
aU:function(){return this.h2(null)},
ga5:function(){var u=this.a
if(u.length>0)return C.a.gaG(u)
else return V.bL()},
c_:function(a){var u=this.a
if(a==null)C.a.h(u,V.bL())
else C.a.h(u,a)
this.aU()},
aQ:function(){var u=this.a
if(u.length>0){u.pop()
this.aU()}},
scl:function(a){this.a=H.h(a,"$ia",[V.aq],"$aa")}}
E.eN.prototype={}
E.ak.prototype={
sa9:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gt().N(0,this.gfa())
t=this.c
if(t!=null)t.gt().h(0,this.gfa())
s=new D.C("shape",u,this.c,this,[F.dP])
s.b=!0
this.b4(s)}},
ax:function(a){var u
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.E();)u.d.ax(a)},
ai:function(a){var u,t
u=a.dx
C.a.h(u.a,u.ga5())
u.aU()
a.de(this.f)
u=a.dy
t=(u&&C.a).gaG(u)
if(t!=null&&this.d!=null)t.ff(a,this)
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.E();)u.d.ai(a)
a.dd()
a.dx.aQ()},
gt:function(){var u=this.z
if(u==null){u=D.H()
this.z=u}return u},
b4:function(a){var u=this.z
if(u!=null)u.I(a)},
a7:function(){return this.b4(null)},
fb:function(a){H.d(a,"$iw")
this.e=null
this.b4(a)},
kU:function(){return this.fb(null)},
f9:function(a){this.b4(H.d(a,"$iw"))},
kR:function(){return this.f9(null)},
kQ:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$il",[E.ak],"$al")
for(u=b.length,t=this.gf8(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bE()
o.sam(null)
o.sbe(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sam(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a7()},
kT:function(a,b){var u,t
H.h(b,"$il",[E.ak],"$al")
for(u=b.gU(b),t=this.gf8();u.E();)u.gM().gt().N(0,t)
this.a7()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sh3:function(a,b){this.y=H.h(b,"$iZ",[E.ak],"$aZ")},
$iaU:1}
E.fZ.prototype={
h_:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aj(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.ck()
t=[V.aq]
u.scl(H.b([],t))
u.b=null
u.gt().h(0,new E.h_(this))
this.cy=u
u=new O.ck()
u.scl(H.b([],t))
u.b=null
u.gt().h(0,new E.h0(this))
this.db=u
u=new O.ck()
u.scl(H.b([],t))
u.b=null
u.gt().h(0,new E.h1(this))
this.dx=u
this.sji(H.b([],[O.bs]))
u=this.dy;(u&&C.a).h(u,null)
this.sje(new H.aJ([P.f,A.cs]))},
gl3:function(){var u=this.z
if(u==null){u=this.cy.ga5().v(0,this.db.ga5())
this.z=u}return u},
de:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaG(u):a;(u&&C.a).h(u,t)},
dd:function(){var u=this.dy
if(u.length>1)u.pop()},
eh:function(a){var u=a.b
if(u.length===0)throw H.c(P.u("May not cache a shader with no name."))
if(this.fr.bG(u))throw H.c(P.u('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.q(0,u,a)},
sji:function(a){this.dy=H.h(a,"$ia",[O.bs],"$aa")},
sje:function(a){this.fr=H.h(a,"$iJ",[P.f,A.cs],"$aJ")}}
E.h_.prototype={
$1:function(a){var u
H.d(a,"$iw")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.h0.prototype={
$1:function(a){var u
H.d(a,"$iw")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.h1.prototype={
$1:function(a){var u
H.d(a,"$iw")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.e2.prototype={
dC:function(a){H.d(a,"$iw")
this.fh()},
dB:function(){return this.dC(null)},
gkB:function(){var u,t,s
u=Date.now()
t=C.f.ab(P.kr(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aj(u,!1)
return s/t},
e5:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.v()
if(typeof u!=="number")return H.A(u)
s=C.e.d1(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.v()
r=C.e.d1(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kX(C.y,this.gla())}},
fh:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.ho(this),{func:1,ret:-1,args:[P.ah]})
C.P.hC(u)
C.P.j0(u,W.lr(t,P.ah))}},
l7:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.e5()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aj(r,!1)
s.y=P.kr(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aU()
r=s.db
C.a.sm(r.a,0)
r.aU()
r=s.dx
C.a.sm(r.a,0)
r.aU()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ai(this.e)}s=this.z
if(s!=null)s.I(null)}catch(q){u=H.ac(q)
t=H.c1(q)
P.kb("Error: "+H.j(u))
P.kb("Stack: "+H.j(t))
throw H.c(u)}}}
E.ho.prototype={
$1:function(a){var u
H.o8(a)
u=this.a
if(u.ch){u.ch=!1
u.l7()}},
$S:32}
Z.ee.prototype={$iof:1}
Z.d7.prototype={
a6:function(a){var u,t,s
try{t=a.a
C.b.eA(t,this.e)
C.b.lm(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ac(s)
t=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}}
Z.ef.prototype={$iog:1}
Z.c8.prototype={
aO:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a6:function(a){var u,t
u=this.a
C.b.aC(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a6(a)},
aw:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.ey(s,u[t].e)
C.b.aC(s,this.a.a,null)},
ai:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aC(t,p,r.b)
C.b.ko(t,q.a,q.b,5123,0)
C.b.aC(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ao(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
shM:function(a){this.b=H.h(a,"$ia",[Z.bn],"$aa")},
$ioo:1}
Z.bn.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bO(this.c)+"'")+"]"}}
Z.aY.prototype={
gdv:function(a){var u,t
u=this.a
t=(u&$.aN().a)!==0?3:0
if((u&$.bd().a)!==0)t+=3
if((u&$.bc().a)!==0)t+=3
if((u&$.be().a)!==0)t+=2
if((u&$.bf().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=3
if((u&$.d0().a)!==0)t+=4
if((u&$.c4().a)!==0)++t
return(u&$.bb().a)!==0?t+4:t},
k5:function(a){var u,t,s
u=$.aN()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bd()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bc()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.be()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bf()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d_()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d0()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c4()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bb()
if((t&u.a)!==0)if(s===a)return u
return $.m_()},
B:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aY))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.f])
t=this.a
if((t&$.aN().a)!==0)C.a.h(u,"Pos")
if((t&$.bd().a)!==0)C.a.h(u,"Norm")
if((t&$.bc().a)!==0)C.a.h(u,"Binm")
if((t&$.be().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bf().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d_().a)!==0)C.a.h(u,"Clr3")
if((t&$.d0().a)!==0)C.a.h(u,"Clr4")
if((t&$.c4().a)!==0)C.a.h(u,"Weight")
if((t&$.bb().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.eQ.prototype={}
D.bE.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.w]}
H.k(b,u)
if(this.a==null)this.sam(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.w]})
u=this.a
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=this.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=this.b
t=(u&&C.a).N(u,b)||t}return t},
I:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.w(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.a0(t,new D.f5(u))
t=this.b
if(t!=null)C.a.a0(t,new D.f6(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
cV:function(){return this.I(null)},
lb:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.I(t)}}},
av:function(){return this.lb(!0,!1)},
sam:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.w]}],"$aa")},
sbe:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.w]}],"$aa")}}
D.f5.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.f6.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.w.prototype={}
D.bo.prototype={}
D.bp.prototype={}
D.C.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.d8.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dq.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dq))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fp.prototype={
l_:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kW:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
siR:function(a){this.d=H.h(a,"$ikS",[P.m],"$akS")}}
X.dv.prototype={}
X.fw.prototype={
bd:function(a,b){var u,t,s,r,q,p,o,n
u=new P.aj(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.v()
q=b.b
p=this.ch
if(typeof q!=="number")return q.v()
o=new V.a0(t.a+s*r,t.b+q*p)
p=this.a.gb2()
n=new X.b7(a,V.b8(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
dc:function(a,b){this.r=a.a
return!1},
bq:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fI()
if(typeof u!=="number")return u.c4()
this.r=(u&~t)>>>0
return!1},
bp:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.bd(a,b))
return!0},
l0:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gb2()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.v()
o=a.b
n=this.cy
if(typeof o!=="number")return o.v()
r=new X.cm(new V.Q(q*p,o*n),t,s,new P.aj(r,!1),this)
r.b=!0
u.I(r)
return!0},
ip:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aj(Date.now(),!1)
t=this.f
s=new X.dv(c,a,this.a.gb2(),b,u,this)
s.b=!0
t.I(s)
this.y=u
this.x=V.b8()}}
X.ax.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ax))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b7.prototype={}
X.fI.prototype={
ci:function(a,b,c){var u,t,s
u=new P.aj(Date.now(),!1)
t=this.a.gb2()
s=new X.b7(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
dc:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.I(this.ci(a,b,!0))
return!0},
bq:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fI()
if(typeof u!=="number")return u.c4()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.I(this.ci(a,b,!0))
return!0},
bp:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.ci(a,b,!1))
return!0},
l1:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gb2()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.v()
p=a.b
o=this.ch
if(typeof p!=="number")return p.v()
s=new X.cm(new V.Q(r*q,p*o),t,b,new P.aj(s,!1),this)
s.b=!0
u.I(s)
return!0},
gez:function(){var u=this.b
if(u==null){u=D.H()
this.b=u}return u},
gc2:function(){var u=this.c
if(u==null){u=D.H()
this.c=u}return u},
gf7:function(){var u=this.d
if(u==null){u=D.H()
this.d=u}return u}}
X.cm.prototype={}
X.fU.prototype={}
X.e4.prototype={}
X.hr.prototype={
bd:function(a,b){var u,t,s,r
H.h(a,"$ia",[V.a0],"$aa")
u=new P.aj(Date.now(),!1)
t=a.length>0?a[0]:V.b8()
s=this.a.gb2()
r=new X.e4(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kZ:function(a){var u
H.h(a,"$ia",[V.a0],"$aa")
u=this.b
if(u==null)return!1
u.I(this.bd(a,!0))
return!0},
kX:function(a){var u
H.h(a,"$ia",[V.a0],"$aa")
u=this.c
if(u==null)return!1
u.I(this.bd(a,!0))
return!0},
kY:function(a){var u
H.h(a,"$ia",[V.a0],"$aa")
u=this.d
if(u==null)return!1
u.I(this.bd(a,!1))
return!0}}
X.e9.prototype={
gb2:function(){var u=this.a
return V.kP(0,0,C.q.geu(u).c,C.q.geu(u).d)},
dN:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dq(u,new X.ax(t,a.altKey,a.shiftKey))},
aZ:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ax(t,a.altKey,a.shiftKey)},
cE:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ax(t,a.altKey,a.shiftKey)},
aM:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=u.top
if(typeof s!=="number")return s.u()
return new V.a0(t-r,s-q)},
bf:function(a){return new V.Q(a.movementX,a.movementY)},
cw:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a0])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
o=C.e.a8(p.pageX)
C.e.a8(p.pageY)
n=u.left
C.e.a8(p.pageX)
C.a.h(t,new V.a0(o-n,C.e.a8(p.pageY)-u.top))}return t},
aJ:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d8(u,new X.ax(t,a.altKey,a.shiftKey))},
cm:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.u()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
ii:function(a){this.f=!0},
i4:function(a){this.f=!1},
ia:function(a){H.d(a,"$iaa")
if(this.f&&this.cm(a))a.preventDefault()},
im:function(a){var u
H.d(a,"$iaR")
if(!this.f)return
u=this.dN(a)
this.b.l_(u)},
ik:function(a){var u
H.d(a,"$iaR")
if(!this.f)return
u=this.dN(a)
this.b.kW(u)},
ir:function(a){var u,t,s,r
H.d(a,"$iaa")
u=this.a
u.focus()
this.f=!0
this.aZ(a)
if(this.x){t=this.aJ(a)
s=this.bf(a)
if(this.d.dc(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aJ(a)
r=this.aM(a)
if(this.c.dc(t,r))a.preventDefault()},
iv:function(a){var u,t,s
H.d(a,"$iaa")
this.aZ(a)
u=this.aJ(a)
if(this.x){t=this.bf(a)
if(this.d.bq(u,t))a.preventDefault()
return}if(this.r)return
s=this.aM(a)
if(this.c.bq(u,s))a.preventDefault()},
ig:function(a){var u,t,s
H.d(a,"$iaa")
if(!this.cm(a)){this.aZ(a)
u=this.aJ(a)
if(this.x){t=this.bf(a)
if(this.d.bq(u,t))a.preventDefault()
return}if(this.r)return
s=this.aM(a)
if(this.c.bq(u,s))a.preventDefault()}},
it:function(a){var u,t,s
H.d(a,"$iaa")
this.aZ(a)
u=this.aJ(a)
if(this.x){t=this.bf(a)
if(this.d.bp(u,t))a.preventDefault()
return}if(this.r)return
s=this.aM(a)
if(this.c.bp(u,s))a.preventDefault()},
ic:function(a){var u,t,s
H.d(a,"$iaa")
if(!this.cm(a)){this.aZ(a)
u=this.aJ(a)
if(this.x){t=this.bf(a)
if(this.d.bp(u,t))a.preventDefault()
return}if(this.r)return
s=this.aM(a)
if(this.c.bp(u,s))a.preventDefault()}},
ix:function(a){var u,t
H.d(a,"$iaZ")
this.aZ(a)
u=new V.Q((a&&C.O).gkl(a),C.O.gkm(a)).w(0,180)
if(this.x){if(this.d.l0(u))a.preventDefault()
return}if(this.r)return
t=this.aM(a)
if(this.c.l1(u,t))a.preventDefault()},
iz:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aJ(this.y)
s=this.aM(this.y)
this.d.ip(t,s,u)}},
iP:function(a){var u
H.d(a,"$iaL")
this.a.focus()
this.f=!0
this.cE(a)
u=this.cw(a)
if(this.e.kZ(u))a.preventDefault()},
iL:function(a){var u
H.d(a,"$iaL")
this.cE(a)
u=this.cw(a)
if(this.e.kX(u))a.preventDefault()},
iN:function(a){var u
H.d(a,"$iaL")
this.cE(a)
u=this.cw(a)
if(this.e.kY(u))a.preventDefault()},
shD:function(a){this.z=H.h(a,"$ia",[[P.cu,P.M]],"$aa")}}
D.bk.prototype={
gt:function(){var u=this.d
if(u==null){u=D.H()
this.d=u}return u},
aI:function(a){var u
H.d(a,"$iw")
u=this.d
if(u!=null)u.I(a)},
h8:function(){return this.aI(null)},
$ia2:1,
$iaU:1}
D.a2.prototype={$iaU:1}
D.ds.prototype={
gt:function(){var u=this.Q
if(u==null){u=D.H()
this.Q=u}return u},
aI:function(a){var u=this.Q
if(u!=null)u.I(a)},
e_:function(a){var u
H.d(a,"$iw")
u=this.ch
if(u!=null)u.I(a)},
io:function(){return this.e_(null)},
iB:function(a){var u,t,s
H.h(a,"$il",[D.a2],"$al")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.h5(s))return!1}return!0},
hZ:function(a,b){var u,t,s,r,q,p,o,n
u=D.a2
H.h(b,"$il",[u],"$al")
for(t=b.length,s=this.gdZ(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=H.d(b[p],"$ia2")
if(o instanceof D.bk)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bE()
n.sam(null)
n.sbe(null)
n.c=null
n.d=0
o.d=n}H.k(s,r)
if(n.a==null)n.sam(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bo(a,b,this,[u])
u.b=!0
this.aI(u)},
iF:function(a,b){var u,t,s,r
u=D.a2
H.h(b,"$il",[u],"$al")
for(t=b.gU(b),s=this.gdZ();t.E();){r=t.gM()
C.a.N(this.e,r)
r.gt().N(0,s)}u=new D.bp(a,b,this,[u])
u.b=!0
this.aI(u)},
h5:function(a){var u=C.a.Y(this.e,a)
return u},
sh6:function(a){this.e=H.h(a,"$ia",[D.bk],"$aa")},
sh9:function(a){this.f=H.h(a,"$ia",[D.dH],"$aa")},
sha:function(a){this.r=H.h(a,"$ia",[D.dS],"$aa")},
shb:function(a){this.x=H.h(a,"$ia",[D.e_],"$aa")},
shc:function(a){this.y=H.h(a,"$ia",[D.e0],"$aa")},
shd:function(a){this.z=H.h(a,"$ia",[D.e1],"$aa")},
$al:function(){return[D.a2]},
$aZ:function(){return[D.a2]}}
D.dH.prototype={$ia2:1,$iaU:1}
D.dS.prototype={$ia2:1,$iaU:1}
D.e_.prototype={$ia2:1,$iaU:1}
D.e0.prototype={$ia2:1,$iaU:1}
D.e1.prototype={$ia2:1,$iaU:1}
V.a_.prototype={
n:function(a,b){var u,t,s
u=C.e.n(this.a,b.gdh())
t=C.e.n(this.b,b.gc8())
s=C.e.n(this.c,b.gcM())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a_(u,t,s)},
u:function(a,b){var u,t,s
u=C.e.u(this.a,b.gdh())
t=C.e.u(this.b,b.gc8())
s=C.e.u(this.c,b.gcM())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a_(u,t,s)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.ad.prototype={
n:function(a,b){var u,t,s,r
u=C.e.n(this.a,b.gdh())
t=C.e.n(this.b,b.gc8())
s=C.e.n(this.c,b.gcM())
r=C.e.n(this.d,b.gk0(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.ad(u,t,s,r)},
u:function(a,b){var u,t,s,r
u=C.e.u(this.a,b.gdh())
t=C.e.u(this.b,b.gc8())
s=C.e.u(this.c,b.gcM())
r=C.e.u(this.d,b.gk0(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.ad(u,t,s,r)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}}
V.f3.prototype={}
V.dz.prototype={
aj:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.o])
return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dz))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
if(!(Math.abs(b.e-this.e)<t))return!1
if(!(Math.abs(b.f-this.f)<t))return!1
if(!(Math.abs(b.r-this.r)<t))return!1
if(!(Math.abs(b.x-this.x)<t))return!1
if(!(Math.abs(b.y-this.y)<t))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.o]
t=V.c_(H.b([this.a,this.d,this.r],u),3,0)
s=V.c_(H.b([this.b,this.e,this.x],u),3,0)
r=V.c_(H.b([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.e(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.e(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.e(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.e(t,1)
n=" "+t[1]+", "
if(1>=p)return H.e(s,1)
n=n+s[1]+", "
if(1>=o)return H.e(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.e(t,2)
u=" "+t[2]+", "
if(2>=p)return H.e(s,2)
u=u+s[2]+", "
if(2>=o)return H.e(r,2)
return n+(u+r[2]+"]")}}
V.aq.prototype={
aj:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.o])
return u},
d5:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=this.f
s=this.b
r=this.e
q=u*t-s*r
p=this.r
o=this.c
n=u*p-o*r
m=this.x
l=this.d
k=u*m-l*r
j=s*p-o*t
i=s*m-l*t
h=o*m-l*p
g=this.y
f=this.cy
e=this.z
d=this.cx
c=g*f-e*d
b=this.db
a=this.Q
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.G().a)return V.bL()
a8=1/a7
a9=-r
b0=-d
return V.aT((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
v:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
f=b2.db
e=b2.d
d=b2.x
c=b2.ch
b=b2.dx
a=this.e
a0=this.f
a1=this.r
a2=this.x
a3=this.y
a4=this.z
a5=this.Q
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.aT(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
dm:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.D(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bv:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.S(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
if(!(Math.abs(b.e-this.e)<t))return!1
if(!(Math.abs(b.f-this.f)<t))return!1
if(!(Math.abs(b.r-this.r)<t))return!1
if(!(Math.abs(b.x-this.x)<t))return!1
if(!(Math.abs(b.y-this.y)<t))return!1
if(!(Math.abs(b.z-this.z)<t))return!1
if(!(Math.abs(b.Q-this.Q)<t))return!1
if(!(Math.abs(b.ch-this.ch)<t))return!1
if(!(Math.abs(b.cx-this.cx)<t))return!1
if(!(Math.abs(b.cy-this.cy)<t))return!1
if(!(Math.abs(b.db-this.db)<t))return!1
if(!(Math.abs(b.dx-this.dx)<t))return!1
return!0},
i:function(a){return this.S()},
eX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.o]
t=V.c_(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c_(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c_(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c_(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.e(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.e(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.e(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.e(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.e(t,1)
l=l+t[1]+", "
if(1>=o)return H.e(s,1)
l=l+s[1]+", "
if(1>=n)return H.e(r,1)
l=l+r[1]+", "
if(1>=m)return H.e(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.e(t,2)
p=p+t[2]+", "
if(2>=o)return H.e(s,2)
p=p+s[2]+", "
if(2>=n)return H.e(r,2)
p=p+r[2]+", "
if(2>=m)return H.e(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.e(t,3)
l=l+t[3]+", "
if(3>=o)return H.e(s,3)
l=l+s[3]+", "
if(3>=n)return H.e(r,3)
l=l+r[3]+", "
if(3>=m)return H.e(q,3)
return p+(l+q[3]+"]")},
S:function(){return this.eX("",3,0)},
H:function(a){return this.eX(a,3,0)}}
V.a0.prototype={
n:function(a,b){return new V.a0(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.a0(this.a-b.a,this.b-b.b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.S.prototype={
n:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.S(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.S(this.a*b,this.b*b,this.c*b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.as.prototype={
n:function(a,b){return new V.as(C.e.n(this.a,b.glo(b)),C.e.n(this.b,b.glp(b)),C.e.n(this.c,b.glq(b)),C.e.n(this.d,b.gln()))},
u:function(a,b){return new V.as(C.e.u(this.a,b.glo(b)),C.e.u(this.b,b.glp(b)),C.e.u(this.c,b.glq(b)),C.e.u(this.d,b.gln()))},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}}
V.dL.prototype={
gah:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dL))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}}
V.Q.prototype={
d6:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.A(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.A(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.gkq(b)
if(typeof u!=="number")return u.n()
t=C.e.n(u,t)
u=this.b
s=b.gkr(b)
if(typeof u!=="number")return u.n()
return new V.Q(t,C.e.n(u,s))},
u:function(a,b){var u,t,s
u=this.a
t=b.gkq(b)
if(typeof u!=="number")return u.u()
t=C.e.u(u,t)
u=this.b
s=b.gkr(b)
if(typeof u!=="number")return u.u()
return new V.Q(t,C.e.u(u,s))},
v:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.Q(u*b,t*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.G().a){u=$.l3
if(u==null){u=new V.Q(0,0)
$.l3=u}return u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.Q(u/b,t/b)},
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.A(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.A(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.D.prototype={
d6:function(a){return Math.sqrt(this.G(this))},
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
d7:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.D(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aN:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.D(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.D(this.a-b.a,this.b-b.b,this.c-b.c)},
V:function(a){return new V.D(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.G().a)return V.cI()
return new V.D(this.a/b,this.b/b,this.c/b)},
f5:function(){var u=$.G().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
U.eR.prototype={
cd:function(a){var u=V.jB(a,this.c,this.b)
return u},
gt:function(){var u=this.y
if(u==null){u=D.H()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.I(a)},
sdr:function(a,b){},
sd8:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.G().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.cd(t)}u=new D.C("maximumLocation",u,this.b,this,[P.o])
u.b=!0
this.K(u)}},
sda:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.G().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.cd(t)}u=new D.C("minimumLocation",u,this.c,this,[P.o])
u.b=!0
this.K(u)}},
sa4:function(a,b){var u
b=this.cd(b)
u=this.d
if(!(Math.abs(u-b)<$.G().a)){this.d=b
u=new D.C("location",u,b,this,[P.o])
u.b=!0
this.K(u)}},
sd9:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.G().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.C("maximumVelocity",u,a,this,[P.o])
u.b=!0
this.K(u)}},
sW:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.G().a)){this.f=a
u=new D.C("velocity",u,a,this,[P.o])
u.b=!0
this.K(u)}},
scT:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.G().a)){this.x=a
u=new D.C("dampening",u,a,this,[P.o])
u.b=!0
this.K(u)}},
ax:function(a){var u,t,s,r,q
u=this.f
t=$.G().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa4(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.G().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sW(s)}}}
U.da.prototype={
gt:function(){var u=this.b
if(u==null){u=D.H()
this.b=u}return u},
aS:function(a,b){return this.a},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.da))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.cf.prototype={
gt:function(){var u=this.e
if(u==null){u=D.H()
this.e=u}return u},
K:function(a){var u
H.d(a,"$iw")
u=this.e
if(u!=null)u.I(a)},
ad:function(){return this.K(null)},
hf:function(a,b){var u,t,s,r,q,p,o,n
u=U.ab
H.h(b,"$il",[u],"$al")
for(t=b.length,s=this.gaY(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.gt()
n.toString
H.k(s,r)
if(n.a==null)n.sam(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bo(a,b,this,[u])
u.b=!0
this.K(u)},
iD:function(a,b){var u,t,s
u=U.ab
H.h(b,"$il",[u],"$al")
for(t=b.gU(b),s=this.gaY();t.E();)t.gM().gt().N(0,s)
u=new D.bp(a,b,this,[u])
u.b=!0
this.K(u)},
aS:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.Z()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ap(u,u.length,0,[H.r(u,0)]),s=null;u.E();){t=u.d
if(t!=null){r=t.aS(a,b)
if(r!=null)s=s==null?r:r.v(0,s)}}this.f=s==null?V.bL():s
u=this.e
if(u!=null)u.av()}return this.f},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cf))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.T(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$al:function(){return[U.ab]},
$aZ:function(){return[U.ab]},
$iab:1}
U.ab.prototype={}
U.dN.prototype={
gt:function(){var u=this.y
if(u==null){u=D.H()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.I(a)},
sfv:function(a){var u
a=V.jB(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.G().a)){this.a=a
u=new D.C("yaw",u,a,this,[P.o])
u.b=!0
this.K(u)}},
sfe:function(a){var u
a=V.jB(a,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-a)<$.G().a)){this.b=a
u=new D.C("pitch",u,a,this,[P.o])
u.b=!0
this.K(u)}},
sfi:function(a){var u
a=V.jB(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.G().a)){this.c=a
u=new D.C("roll",u,a,this,[P.o])
u.b=!0
this.K(u)}},
aS:function(a,b){var u,t
u=this.r
t=a.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.sfv(this.a+this.d*a.y)
this.sfe(this.b+this.e*a.y)
this.sfi(this.c+this.f*a.y)
this.x=V.kF(this.c).v(0,V.kE(this.b)).v(0,V.kD(this.a))
u=this.y
if(u!=null)u.av()}return this.x},
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dN))return!1
u=this.a
t=b.a
s=$.G().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"], ["+V.L(this.d,3,0)+", "+V.L(this.e,3,0)+", "+V.L(this.f,3,0)+"]"}}
U.ea.prototype={
gt:function(){var u=this.cy
if(u==null){u=D.H()
this.cy=u}return u},
K:function(a){var u
H.d(a,"$iw")
u=this.cy
if(u!=null)u.I(a)},
ad:function(){return this.K(null)},
bh:function(a){if(this.a!=null)return!1
this.a=a
a.c.gez().h(0,this.gcn())
this.a.c.gf7().h(0,this.gcp())
this.a.c.gc2().h(0,this.gcr())
return!0},
co:function(a){H.d(a,"$iw")
if(!J.T(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
cq:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iw"),"$ib7")
if(!this.y)return
if(this.x){u=a.d.u(0,a.y)
u=new V.Q(u.a,u.b)
u=u.G(u)
t=this.r
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.u(0,a.y)
u=new V.Q(t.a,t.b).v(0,2).w(0,u.gah())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.v()
s=this.e
if(typeof s!=="number")return H.A(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.Q(s.a,s.b).v(0,2).w(0,u.gah())
s=this.b
q=r.a
if(typeof q!=="number")return q.V()
p=this.e
if(typeof p!=="number")return H.A(p)
o=this.z
if(typeof o!=="number")return H.A(o)
s.sa4(0,-q*p+o)
this.b.sW(0)
t=t.u(0,a.z)
this.Q=new V.Q(t.a,t.b).v(0,2).w(0,u.gah())}this.ad()},
cs:function(a){var u,t,s
H.d(a,"$iw")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.G(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.v()
s=this.e
if(typeof s!=="number")return H.A(s)
u.sW(t*10*s)
this.ad()}},
aS:function(a,b){var u,t,s
u=this.ch
t=a.e
if(typeof u!=="number")return u.Z()
if(u<t){this.ch=t
s=a.y
this.b.ax(s)
this.cx=V.kF(this.b.d)}return this.cx},
$iab:1}
U.eb.prototype={
gt:function(){var u=this.fx
if(u==null){u=D.H()
this.fx=u}return u},
K:function(a){var u
H.d(a,"$iw")
u=this.fx
if(u!=null)u.I(a)},
ad:function(){return this.K(null)},
bh:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gez().h(0,this.gcn())
this.a.c.gf7().h(0,this.gcp())
this.a.c.gc2().h(0,this.gcr())
u=this.a.d
t=u.f
if(t==null){t=D.H()
u.f=t
u=t}else u=t
u.h(0,this.ghS())
u=this.a.d
t=u.d
if(t==null){t=D.H()
u.d=t
u=t}else u=t
u.h(0,this.ghU())
u=this.a.e
t=u.b
if(t==null){t=D.H()
u.b=t
u=t}else u=t
u.h(0,this.gjr())
u=this.a.e
t=u.d
if(t==null){t=D.H()
u.d=t
u=t}else u=t
u.h(0,this.gjp())
u=this.a.e
t=u.c
if(t==null){t=D.H()
u.c=t
u=t}else u=t
u.h(0,this.gjn())
return!0},
az:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.V()
u=-u}if(this.r){if(typeof t!=="number")return t.V()
t=-t}return new V.Q(u,t)},
co:function(a){a=H.i(H.d(a,"$iw"),"$ib7")
if(!J.T(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
cq:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iw"),"$ib7")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.Q(u.a,u.b)
u=u.G(u)
t=this.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.az(new V.Q(t.a,t.b).v(0,2).w(0,u.gah()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.A(s)
t.sW(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.A(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.az(new V.Q(s.a,s.b).v(0,2).w(0,u.gah()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.A(p)
o=this.cy
if(typeof o!=="number")return H.A(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.A(q)
s=this.db
if(typeof s!=="number")return H.A(s)
o.sa4(0,-p*q+s)
this.b.sW(0)
this.c.sW(0)
t=t.u(0,a.z)
this.dx=this.az(new V.Q(t.a,t.b).v(0,2).w(0,u.gah()))}this.ad()},
cs:function(a){var u,t,s
H.d(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.G(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.A(s)
u.sW(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.A(u)
s.sW(-t*10*u)
this.ad()}},
hT:function(a){if(H.i(H.d(a,"$iw"),"$idv").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hV:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iw"),"$ib7")
if(!J.T(this.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=this.az(new V.Q(s.a,s.b).v(0,2).w(0,u.gah()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.A(p)
o=this.cy
if(typeof o!=="number")return H.A(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.A(q)
s=this.db
if(typeof s!=="number")return H.A(s)
o.sa4(0,-p*q+s)
this.b.sW(0)
this.c.sW(0)
t=t.u(0,a.z)
this.dx=this.az(new V.Q(t.a,t.b).v(0,2).w(0,u.gah()))
this.ad()},
js:function(a){H.d(a,"$iw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
jq:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iw"),"$ie4")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.Q(u.a,u.b)
u=u.G(u)
t=this.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.az(new V.Q(t.a,t.b).v(0,2).w(0,u.gah()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.A(s)
t.sW(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.A(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.az(new V.Q(s.a,s.b).v(0,2).w(0,u.gah()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.A(p)
o=this.cy
if(typeof o!=="number")return H.A(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.A(q)
s=this.db
if(typeof s!=="number")return H.A(s)
o.sa4(0,-p*q+s)
this.b.sW(0)
this.c.sW(0)
t=t.u(0,a.z)
this.dx=this.az(new V.Q(t.a,t.b).v(0,2).w(0,u.gah()))}this.ad()},
jo:function(a){var u,t,s
H.d(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.G(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.A(s)
u.sW(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.A(u)
s.sW(-t*10*u)
this.ad()}},
aS:function(a,b){var u,t,s
u=this.dy
t=a.e
if(typeof u!=="number")return u.Z()
if(u<t){this.dy=t
s=a.y
this.c.ax(s)
this.b.ax(s)
this.fr=V.kD(this.b.d).v(0,V.kE(this.c.d))}return this.fr},
$iab:1}
U.ec.prototype={
gt:function(){var u=this.r
if(u==null){u=D.H()
this.r=u}return u},
K:function(a){var u=this.r
if(u!=null)u.I(a)},
bh:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.H()
u.e=t
u=t}else u=t
t=this.ghW()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.H()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hX:function(a){var u,t,s,r
H.d(a,"$iw")
if(!J.T(this.b,this.a.b.c))return
H.i(a,"$icm")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){this.d=r
u=new D.C("zoom",u,r,this,[P.o])
u.b=!0
this.K(u)}},
aS:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aT(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iab:1}
M.d9.prototype={
gt:function(){var u=this.f
if(u==null){u=D.H()
this.f=u}return u},
a2:function(a){var u
H.d(a,"$iw")
u=this.f
if(u!=null)u.I(a)},
ba:function(){return this.a2(null)},
iH:function(a,b){var u,t,s,r,q,p,o,n
u=M.az
H.h(b,"$il",[u],"$al")
for(t=b.length,s=this.ga1(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.gt()
n.toString
H.k(s,r)
if(n.a==null)n.sam(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bo(a,b,this,[u])
u.b=!0
this.a2(u)},
iJ:function(a,b){var u,t,s
u=M.az
H.h(b,"$il",[u],"$al")
for(t=b.gU(b),s=this.ga1();t.E();)t.gM().gt().N(0,s)
u=new D.bp(a,b,this,[u])
u.b=!0
this.a2(u)},
ai:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.E();){t=u.d
if(t!=null)t.ai(a)}this.e=!1},
$al:function(){return[M.az]},
$aZ:function(){return[M.az]},
$iaz:1}
M.db.prototype={
gt:function(){var u=this.f
if(u==null){u=D.H()
this.f=u}return u},
a2:function(a){var u
H.d(a,"$iw")
u=this.f
if(u!=null)u.I(a)},
ba:function(){return this.a2(null)},
sb1:function(a){var u,t
if(a==null)a=new X.fi()
u=this.a
if(u!==a){if(u!=null)u.gt().N(0,this.ga1())
t=this.a
this.a=a
a.gt().h(0,this.ga1())
u=new D.C("camera",t,this.a,this,[X.bz])
u.b=!0
this.a2(u)}},
sbs:function(a,b){var u,t
if(b==null)b=X.kv(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gt().N(0,this.ga1())
t=this.b
this.b=b
b.gt().h(0,this.ga1())
u=new D.C("target",t,this.b,this,[X.cv])
u.b=!0
this.a2(u)}},
sb6:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gt().N(0,this.ga1())
t=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga1())
u=new D.C("technique",t,this.c,this,[O.bs])
u.b=!0
this.a2(u)}},
ai:function(a){a.de(this.c)
this.b.a6(a)
this.a.a6(a)
this.d.ax(a)
this.d.ai(a)
this.a.aw(a)
this.b.aw(a)
a.dd()},
$iaz:1}
M.df.prototype={
a2:function(a){var u
H.d(a,"$iw")
u=this.x
if(u!=null)u.I(a)},
ba:function(){return this.a2(null)},
i6:function(a,b){var u,t,s,r,q,p,o,n
u=E.ak
H.h(b,"$il",[u],"$al")
for(t=b.length,s=this.ga1(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bE()
n.sam(null)
n.sbe(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.sam(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bo(a,b,this,[u])
u.b=!0
this.a2(u)},
i8:function(a,b){var u,t,s
u=E.ak
H.h(b,"$il",[u],"$al")
for(t=b.gU(b),s=this.ga1();t.E();)t.gM().gt().N(0,s)
u=new D.bp(a,b,this,[u])
u.b=!0
this.a2(u)},
sb1:function(a){var u,t
if(a==null)a=X.jR(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gt().N(0,this.ga1())
t=this.a
this.a=a
a.gt().h(0,this.ga1())
u=new D.C("camera",t,this.a,this,[X.bz])
u.b=!0
this.a2(u)}},
sbs:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gt().N(0,this.ga1())
t=this.b
this.b=b
b.gt().h(0,this.ga1())
u=new D.C("target",t,this.b,this,[X.cv])
u.b=!0
this.a2(u)}},
sb6:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gt().N(0,this.ga1())
t=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga1())
u=new D.C("technique",t,this.c,this,[O.bs])
u.b=!0
this.a2(u)}},
gt:function(){var u=this.x
if(u==null){u=D.H()
this.x=u}return u},
ai:function(a){var u
a.de(this.c)
this.b.a6(a)
this.a.a6(a)
u=this.c
if(u!=null)u.ax(a)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.E();)u.d.ax(a)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.E();)u.d.ai(a)
this.a.toString
a.cy.aQ()
a.db.aQ()
this.b.aw(a)
a.dd()},
shu:function(a,b){this.d=H.h(b,"$iZ",[E.ak],"$aZ")},
$iaz:1}
M.az.prototype={}
A.d5.prototype={}
A.eJ.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ks:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.eA(r.a,r.c)}},
ex:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.ey(r.a,r.c)}}}
A.dx.prototype={
fZ:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.af("")
t=a6.fx
if(t){u.a="uniform mat4 objMat;\n"
s="uniform mat4 objMat;\n"}else s=""
r=a6.fy
if(r){s+="uniform mat4 viewObjMat;\n"
u.a=s}s+="uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s+="attribute vec3 posAttr;\n"
u.a=s
q=a6.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=a6.r2
if(p){s+="attribute vec3 binmAttr;\n"
u.a=s}u.a=s+"\n"
a6.jA(u)
a6.jH(u)
a6.jB(u)
a6.jP(u)
a6.jQ(u)
a6.jJ(u)
a6.jU(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=a6.x1
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
s+="void main()\n"
u.a=s
s+="{\n"
u.a=s
if(o){s+="   setupBendData();\n"
u.a=s}if(q){s+="   normalVec = getNorm();\n"
u.a=s}if(p){s+="   binormalVec = getBinm();\n"
u.a=s}if(a6.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(a6.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(a6.k3){s+="   objPos = getObjPos();\n"
u.a=s}if(a6.k4){s+="   viewPos = getViewPos();\n"
u.a=s}s+="   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
q=this.z
u=new P.af("")
u.a="precision mediump float;\n"
u.a="precision mediump float;\n\n"
p=q.r1
if(p){u.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
o="precision mediump float;\n\nvarying vec3 normalVec;\n"}else o="precision mediump float;\n\n"
if(q.r2){o+="varying vec3 binormalVec;\n"
u.a=o}if(q.rx){o+="varying vec2 txt2D;\n"
u.a=o}if(q.ry){o+="varying vec3 txtCube;\n"
u.a=o}if(q.k3){o+="varying vec3 objPos;\n"
u.a=o}if(q.k4){o+="varying vec3 viewPos;\n"
u.a=o}o+="\n"
u.a=o
n=q.y2
if(n){o+="uniform mat4 colorMat;\n"
u.a=o}if(q.fr){o+="uniform mat4 invViewMat;\n"
u.a=o}u.a=o+"\n"
q.jE(u)
q.jz(u)
q.jC(u)
q.jF(u)
q.jN(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jL(u)
q.jM(u)}q.jI(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.j){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.h){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.i){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.d:m+="   return 1.0;\n"
u.a=m
break
case C.j:m+="   return alpha;\n"
u.a=m
break
case C.h:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.i:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
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
k=H.b([],[P.f])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.jD(u)
q.jK(u)
q.jO(u)
q.jR(u)
q.jS(u)
q.jT(u)
q.jG(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m+="   float alpha = alphaValue();\n"
u.a=m
if(p){p=m+"   vec3 norm = normal();\n"
u.a=p}else p=m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.b([],[P.f])
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
i="vec4("+C.a.l(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.f4(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a6.fr)this.id=H.i(this.y.p(0,"invViewMat"),"$iau")
if(t)this.dy=H.i(this.y.p(0,"objMat"),"$iau")
if(r)this.fr=H.i(this.y.p(0,"viewObjMat"),"$iau")
this.fy=H.i(this.y.p(0,"projViewObjMat"),"$iau")
if(a6.x2)this.k1=H.i(this.y.p(0,"txt2DMat"),"$icB")
if(a6.y1)this.k2=H.i(this.y.p(0,"txtCubeMat"),"$iau")
if(a6.y2)this.k3=H.i(this.y.p(0,"colorMat"),"$iau")
this.shq(H.b([],[A.au]))
t=a6.aE
if(t>0){this.k4=H.d(this.y.p(0,"bendMatCount"),"$iK")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.k(0,q)
if(g==null)H.q(P.u("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.i(g,"$iau"))}}t=a6.a
if(t!==C.d){this.r2=H.i(this.y.p(0,"emissionClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.i(this.y.p(0,"emissionTxt"),"$ial")
this.x1=H.i(this.y.p(0,"nullEmissionTxt"),"$iK")
break
case C.i:this.ry=H.i(this.y.p(0,"emissionTxt"),"$iag")
this.x1=H.i(this.y.p(0,"nullEmissionTxt"),"$iK")
break}}t=a6.b
if(t!==C.d){this.x2=H.i(this.y.p(0,"ambientClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.i(this.y.p(0,"ambientTxt"),"$ial")
this.aE=H.i(this.y.p(0,"nullAmbientTxt"),"$iK")
break
case C.i:this.y2=H.i(this.y.p(0,"ambientTxt"),"$iag")
this.aE=H.i(this.y.p(0,"nullAmbientTxt"),"$iK")
break}}t=a6.c
if(t!==C.d){this.au=H.i(this.y.p(0,"diffuseClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.bI=H.i(this.y.p(0,"diffuseTxt"),"$ial")
this.bJ=H.i(this.y.p(0,"nullDiffuseTxt"),"$iK")
break
case C.i:this.eB=H.i(this.y.p(0,"diffuseTxt"),"$iag")
this.bJ=H.i(this.y.p(0,"nullDiffuseTxt"),"$iK")
break}}t=a6.d
if(t!==C.d){this.bK=H.i(this.y.p(0,"invDiffuseClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.eC=H.i(this.y.p(0,"invDiffuseTxt"),"$ial")
this.bL=H.i(this.y.p(0,"nullInvDiffuseTxt"),"$iK")
break
case C.i:this.eD=H.i(this.y.p(0,"invDiffuseTxt"),"$iag")
this.bL=H.i(this.y.p(0,"nullInvDiffuseTxt"),"$iK")
break}}t=a6.e
if(t!==C.d){this.bO=H.i(this.y.p(0,"shininess"),"$iW")
this.bM=H.i(this.y.p(0,"specularClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.eE=H.i(this.y.p(0,"specularTxt"),"$ial")
this.bN=H.i(this.y.p(0,"nullSpecularTxt"),"$iK")
break
case C.i:this.eF=H.i(this.y.p(0,"specularTxt"),"$iag")
this.bN=H.i(this.y.p(0,"nullSpecularTxt"),"$iK")
break}}switch(a6.f){case C.d:break
case C.j:break
case C.h:this.eG=H.i(this.y.p(0,"bumpTxt"),"$ial")
this.bP=H.i(this.y.p(0,"nullBumpTxt"),"$iK")
break
case C.i:this.eH=H.i(this.y.p(0,"bumpTxt"),"$iag")
this.bP=H.i(this.y.p(0,"nullBumpTxt"),"$iK")
break}if(a6.dy){this.eI=H.i(this.y.p(0,"envSampler"),"$iag")
this.eJ=H.i(this.y.p(0,"nullEnvTxt"),"$iK")
t=a6.r
if(t!==C.d){this.bQ=H.i(this.y.p(0,"reflectClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.eK=H.i(this.y.p(0,"reflectTxt"),"$ial")
this.bR=H.i(this.y.p(0,"nullReflectTxt"),"$iK")
break
case C.i:this.eL=H.i(this.y.p(0,"reflectTxt"),"$iag")
this.bR=H.i(this.y.p(0,"nullReflectTxt"),"$iK")
break}}t=a6.x
if(t!==C.d){this.bS=H.i(this.y.p(0,"refraction"),"$iW")
this.bT=H.i(this.y.p(0,"refractClr"),"$iI")
switch(t){case C.d:break
case C.j:break
case C.h:this.eM=H.i(this.y.p(0,"refractTxt"),"$ial")
this.bU=H.i(this.y.p(0,"nullRefractTxt"),"$iK")
break
case C.i:this.eN=H.i(this.y.p(0,"refractTxt"),"$iag")
this.bU=H.i(this.y.p(0,"nullRefractTxt"),"$iK")
break}}}t=a6.y
if(t!==C.d){this.bV=H.i(this.y.p(0,"alpha"),"$iW")
switch(t){case C.d:break
case C.j:break
case C.h:this.eO=H.i(this.y.p(0,"alphaTxt"),"$ial")
this.bW=H.i(this.y.p(0,"nullAlphaTxt"),"$iK")
break
case C.i:this.eP=H.i(this.y.p(0,"alphaTxt"),"$iag")
this.bW=H.i(this.y.p(0,"nullAlphaTxt"),"$iK")
break}}this.shA(H.b([],[A.cA]))
this.siQ(H.b([],[A.cC]))
this.sjg(H.b([],[A.cD]))
this.sju(H.b([],[A.cE]))
this.sjv(H.b([],[A.cF]))
this.sjw(H.b([],[A.cG]))
if(a6.k2){t=a6.z
if(t>0){this.eQ=H.d(this.y.p(0,"dirLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.k(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iI")
s=this.y
r="dirLights["+h+"].color"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.cW;(s&&C.a).h(s,new A.cA(h,g,f))}}t=a6.Q
if(t>0){this.eR=H.d(this.y.p(0,"pntLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.k(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iI")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="pntLights["+h+"].color"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="pntLights["+h+"].att0"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iW")
s=this.y
r="pntLights["+h+"].att1"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iW")
s=this.y
r="pntLights["+h+"].att2"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iW")
s=this.cX;(s&&C.a).h(s,new A.cC(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.eS=H.d(this.y.p(0,"spotLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.k(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iI")
s=this.y
r="spotLights["+h+"].objDir"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="spotLights["+h+"].color"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iW")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iW")
s=this.y
r="spotLights["+h+"].att0"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iW")
s=this.y
r="spotLights["+h+"].att1"
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iW")
s=this.y
r="spotLights["+h+"].att2"
a1=s.k(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iW")
s=this.cY;(s&&C.a).h(s,new A.cD(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eT=H.d(this.y.p(0,"txtDirLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.k(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iI")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtDirLights["+h+"].color"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iK")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$ial")
s=this.cZ;(s&&C.a).h(s,new A.cE(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.eU=H.d(this.y.p(0,"txtPntLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.k(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iI")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$icB")
s=this.y
r="txtPntLights["+h+"].color"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iK")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iW")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iW")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iW")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.k(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iag")
s=this.d_;(s&&C.a).h(s,new A.cF(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eV=H.d(this.y.p(0,"txtSpotLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.k(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iI")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.k(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.k(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.k(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.k(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.k(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iK")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.k(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iI")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.k(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iW")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.k(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iW")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.k(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iW")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.k(0,r)
if(a3==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a3,"$iW")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.k(0,r)
if(a4==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a4,"$iW")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.k(0,r)
if(a5==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a5,"$ial")
s=this.d0;(s&&C.a).h(s,new A.cG(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
as:function(a,b,c){if(c==null||!c.d)C.b.R(b.a,b.d,1)
else{a.fO(c)
C.b.R(b.a,b.d,0)}},
an:function(a,b,c){C.b.R(b.a,b.d,1)},
shq:function(a){this.r1=H.h(a,"$ia",[A.au],"$aa")},
shA:function(a){this.cW=H.h(a,"$ia",[A.cA],"$aa")},
siQ:function(a){this.cX=H.h(a,"$ia",[A.cC],"$aa")},
sjg:function(a){this.cY=H.h(a,"$ia",[A.cD],"$aa")},
sju:function(a){this.cZ=H.h(a,"$ia",[A.cE],"$aa")},
sjv:function(a){this.d_=H.h(a,"$ia",[A.cF],"$aa")},
sjw:function(a){this.d0=H.h(a,"$ia",[A.cG],"$aa")}}
A.fF.prototype={
jA:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aE+"];\n"
u+="attribute vec4 bendAttr;\n"
a.a=u
u+="\n"
a.a=u
u+="float weightSum;\n"
a.a=u
u+="vec3 bendPos;\n"
a.a=u
t=this.r1
if(t){u+="vec3 bendNorm;\n"
a.a=u}s=this.r2
if(s){u+="vec3 bendBinm;\n"
a.a=u}u+="\n"
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
u+="         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
a.a=u
if(t){u+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
a.a=u}if(s){u+="         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n"
a.a=u}u+="      }\n"
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
u+="   bendPos = vec3(0.0, 0.0, 0.0);\n"
a.a=u
if(t){u+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}if(s){u+="   bendBinm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}u+="   weightSum = 0.0;\n"
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
u+="      bendPos += posAttr*weight;\n"
a.a=u
if(t){u+="      bendNorm += normAttr*weight;\n"
a.a=u}if(s){u+="      bendBinm += binmAttr*weight;\n"
a.a=u}u+="   }\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      bendPos = bendPos/weightSum;\n"
a.a=u
u+="   }\n"
a.a=u
if(t){u+="   bendNorm = normalize(bendNorm);\n"
a.a=u}if(s){u+="   bendBinm = normalize(bendBinm);\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
jH:function(a){var u
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
jB:function(a){var u
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
jP:function(a){var u,t
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
t+="{\n"
a.a=t
if(u){u=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
a.a=u}else{u=t+"   return vec3(txt2DAttr, 1.0).xy;\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
jQ:function(a){var u,t
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
t+="{\n"
a.a=t
if(u){u=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n"
a.a=u}else{u=t+"   return vec4(txtCubeAttr, 1.0).xyz;\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
jJ:function(a){var u
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
jU:function(a){var u
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
aK:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.ay(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jE:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aK(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   return emissionClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
jz:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aK(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   return ambientClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
jC:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aK(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*textureCube(diffuseTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float scalar = dot(norm, -litVec);\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return diffuseColor*scalar;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jF:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aK(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*textureCube(invDiffuseTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return invDiffuseColor*scalar;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jN:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aK(a,u,"specular")
t=a.a+="uniform float shininess;\n"
t+="vec3 specularColor;\n"
a.a=t
t+="\n"
a.a=t
t+="void setSpecularColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*textureCube(specularTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 specular(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
a.a=u
u+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return specularColor*pow(scalar, shininess);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jI:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.j:break
case C.h:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.i:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break}u+="vec3 normal()\n"
a.a=u
u+="{\n"
a.a=u
switch(t){case C.d:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.j:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.h:u+="   if(nullBumpTxt > 0) return normalVec;\n"
a.a=u
u+="   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n"
a.a=u
u+="   vec3 n = normalize(normalVec);\n"
a.a=u
u+="   vec3 b = normalize(binormalVec);\n"
a.a=u
u+="   vec3 c = normalize(cross(b, n));\n"
a.a=u
u+="   b = cross(n, c);\n"
a.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
a.a=u
u+="                   -c.x, -c.y, -c.z,\n"
a.a=u
u+="                    n.x,  n.y,  n.z);\n"
a.a=u
u+="   return mat * normalize(2.0*color - 1.0);\n"
a.a=u
break
case C.i:u+="   if(nullBumpTxt > 0) return normalVec;\n"
a.a=u
u+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
a.a=u
u+="   vec3 n = normalize(normalVec);\n"
a.a=u
u+="   vec3 b = normalize(binormalVec);\n"
a.a=u
u+="   vec3 c = cross(b, n);\n"
a.a=u
u+="   b = cross(n, c);\n"
a.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
a.a=u
u+="                   -c.x, -c.y, -c.z,\n"
a.a=u
u+="                    n.x,  n.y,  n.z);\n"
a.a=u
u+="   return mat * normalize(2.0*color - 1.0);\n"
a.a=u
break}u+="}\n"
a.a=u
a.a=u+"\n"},
jL:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aK(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
a.a=u
u+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jM:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aK(a,u,"refract")
t=a.a+="uniform float refraction;\n"
t+="\n"
a.a=t
t+="vec3 refract(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
a.a=u
u+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
a.a=u
u+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jD:function(a){var u,t
u=this.z
if(u<=0)return
t=a.a+="// === Directional Light ===\n"
t+="\n"
a.a=t
t+="struct DirLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 viewDir;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int dirLightCount;\n"
t=a.a+="uniform DirLight dirLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 allDirLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= dirLightCount) break;\n"
a.a=u
u+="      DirLight lit = dirLights[i];\n"
a.a=u
u+="      lightAccum += lightValue(norm, lit.color, lit.viewDir);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jK:function(a){var u,t
u=this.Q
if(u<=0)return
t=a.a+="// === Point Light ===\n"
t+="\n"
a.a=t
t+="struct PointLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 point;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int pntLightCount;\n"
t=a.a+="uniform PointLight pntLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 pointLightValue(vec3 norm, PointLight lit)\n"
a.a=t
t+="{\n"
a.a=t
t+="   float dist = length(objPos - lit.point);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   return lightValue(norm, lit.color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allPointLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= pntLightCount) break;\n"
a.a=u
u+="      lightAccum += pointLightValue(norm, pntLights[i]);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jO:function(a){var u,t
u=this.ch
if(u<=0)return
t=a.a+="// === Spot Light ===\n"
t+="\n"
a.a=t
t+="struct SpotLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objPnt;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float cutoff;\n"
a.a=t
t+="   float coneAngle;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int spotLightCount;\n"
t=a.a+="uniform SpotLight spotLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 spotLightValue(vec3 norm, SpotLight lit)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=t
t+="   float dist = length(dir);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   float angle = acos(dot(normalize(dir), lit.objDir));\n"
a.a=t
t+="   float scale = (lit.cutoff-angle)/(lit.cutoff-lit.coneAngle);\n"
a.a=t
t+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   if(scale > 1.0) scale = 1.0;\n"
a.a=t
t+="   return lightValue(norm, lit.color*attenuation*scale, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allSpotLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= spotLightCount) break;\n"
a.a=u
u+="      lightAccum += spotLightValue(norm, spotLights[i]);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jR:function(a){var u,t,s
u=this.cx
if(u<=0)return
t=a.a+="// === Texture Directional Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedDirLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objUp;\n"
a.a=t
t+="   vec3 objRight;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 viewDir;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtDirLightCount;\n"
t=a.a+="uniform TexturedDirLight txtDirLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform sampler2D txtDirLightsTxt2D"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtDirLightValue(vec3 norm, TexturedDirLight lit, sampler2D txt2D)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
a.a=t
t+="      float tu = dot(offset, lit.objUp);\n"
a.a=t
t+="      float tv = dot(offset, lit.objRight);\n"
a.a=t
t+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, color, lit.viewDir);\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtDirLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtDirLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtDirLightValue(norm, txtDirLights["+s+"], txtDirLightsTxt2D"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jS:function(a){var u,t,s
u=this.cy
if(u<=0)return
t=a.a+="// === Texture Point Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedPointLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 point;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   mat3 invViewRotMat;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtPntLightCount;\n"
t=a.a+="uniform TexturedPointLight txtPntLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform samplerCube txtPntLightsTxtCube"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtPointLightValue(vec3 norm, TexturedPointLight lit, samplerCube txtCube)\n"
a.a=t
t+="{\n"
a.a=t
t+="   float dist = length(objPos - lit.point);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      vec3 invNormDir = lit.invViewRotMat*normDir;\n"
a.a=t
t+="      color = lit.color*textureCube(txtCube, invNormDir).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, attenuation*color, normDir);\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtPointLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtPntLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtPointLightValue(norm, txtPntLights["+s+"], txtPntLightsTxtCube"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jT:function(a){var u,t,s
u=this.db
if(u<=0)return
t=a.a+="// === Texture Spot Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedSpotLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objPnt;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 objUp;\n"
a.a=t
t+="   vec3 objRight;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float tuScalar;\n"
a.a=t
t+="   float tvScalar;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtSpotLightCount;\n"
t=a.a+="uniform TexturedSpotLight txtSpotLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform sampler2D txtSpotLightsTxt2D"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtSpotLightValue(vec3 norm, TexturedSpotLight lit, sampler2D txt2D)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=t
t+="   float dist = length(dir);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   vec3 normDir = normalize(dir);\n"
a.a=t
t+="   float zScale = dot(normDir, lit.objDir);\n"
a.a=t
t+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   normDir = normDir/zScale;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      float tu = dot(normDir, lit.objUp)*lit.tuScalar+0.5;\n"
a.a=t
t+="      if((tu > 1.0) || (tu < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="      float tv = dot(normDir, lit.objRight)*lit.tvScalar+0.5;\n"
a.a=t
t+="      if((tv > 1.0) || (tv < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtSpotLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtSpotLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtSpotLightValue(norm, txtSpotLights["+s+"], txtSpotLightsTxt2D"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jG:function(a){var u
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
i:function(a){return this.au}}
A.cA.prototype={}
A.cE.prototype={}
A.cC.prototype={}
A.cF.prototype={}
A.cD.prototype={}
A.cG.prototype={}
A.cs.prototype={
dz:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
f4:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.dO(a,35633)
this.f=this.dO(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.ej(u,t,this.e)
C.b.ej(u,this.r,this.f)
C.b.kK(u,this.r)
if(!H.k4(C.b.c7(u,this.r,35714))){s=C.b.fD(u,this.r)
C.b.kj(u,this.r)
H.q(P.u("Failed to link shader: "+H.j(s)))}this.jb()
this.jd()},
a6:function(a){C.b.dn(a.a,this.r)
this.x.ks()},
dO:function(a,b){var u,t,s
u=this.a
t=C.b.kh(u,b)
C.b.fQ(u,t,a)
C.b.kb(u,t)
if(!H.k4(C.b.fF(u,t,35713))){s=C.b.fE(u,t)
C.b.kk(u,t)
throw H.c(P.u("Error compiling shader '"+H.j(t)+"': "+H.j(s)))}return t},
jb:function(){var u,t,s,r,q,p
u=H.b([],[A.d5])
t=this.a
s=H.a3(C.b.c7(t,this.r,35721))
if(typeof s!=="number")return H.A(s)
r=0
for(;r<s;++r){q=C.b.fw(t,this.r,r)
p=C.b.fA(t,this.r,q.name)
C.a.h(u,new A.d5(t,q.name,p))}this.x=new A.eJ(u)},
jd:function(){var u,t,s,r,q,p
u=H.b([],[A.e5])
t=this.a
s=H.a3(C.b.c7(t,this.r,35718))
if(typeof s!=="number")return H.A(s)
r=0
for(;r<s;++r){q=C.b.fz(t,this.r,r)
p=C.b.fG(t,this.r,q.name)
C.a.h(u,this.ki(q.type,q.size,q.name,p))}this.y=new A.hD(u)},
aW:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.K(u,t,b,c)
else return A.jT(u,t,b,a,c)},
hx:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.al(u,t,b,c)
else return A.jT(u,t,b,a,c)},
hy:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ag(u,t,b,c)
else return A.jT(u,t,b,a,c)},
bD:function(a,b){return new P.ej(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
ki:function(a,b,c,d){switch(a){case 5120:return this.aW(b,c,d)
case 5121:return this.aW(b,c,d)
case 5122:return this.aW(b,c,d)
case 5123:return this.aW(b,c,d)
case 5124:return this.aW(b,c,d)
case 5125:return this.aW(b,c,d)
case 5126:return new A.W(this.a,this.r,c,d)
case 35664:return new A.hy(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.hB(this.a,this.r,c,d)
case 35667:return new A.hz(this.a,this.r,c,d)
case 35668:return new A.hA(this.a,this.r,c,d)
case 35669:return new A.hC(this.a,this.r,c,d)
case 35674:return new A.hE(this.a,this.r,c,d)
case 35675:return new A.cB(this.a,this.r,c,d)
case 35676:return new A.au(this.a,this.r,c,d)
case 35678:return this.hx(b,c,d)
case 35680:return this.hy(b,c,d)
case 35670:throw H.c(this.bD("BOOL",c))
case 35671:throw H.c(this.bD("BOOL_VEC2",c))
case 35672:throw H.c(this.bD("BOOL_VEC3",c))
case 35673:throw H.c(this.bD("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.bD.prototype={
i:function(a){return this.b}}
A.dR.prototype={}
A.e5.prototype={}
A.hD.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.k(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.S()},
kA:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].i(0)+a
return s},
S:function(){return this.kA("\n")}}
A.K.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.hz.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.hA.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.hC.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.hx.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sjx:function(a){this.e=H.h(a,"$ia",[P.m],"$aa")}}
A.W.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.hy.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.hB.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.hE.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cB.prototype={
ar:function(a){var u=new Float32Array(H.bV(H.h(a,"$ia",[P.o],"$aa")))
C.b.fp(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.au.prototype={
ar:function(a){var u=new Float32Array(H.bV(H.h(a,"$ia",[P.o],"$aa")))
C.b.fq(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.al.prototype={
fO:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.R(t,s,0)
else C.b.R(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.ag.prototype={
fP:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.R(t,s,0)
else C.b.R(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.iV.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.d7(u.b,b).d7(u.d.d7(u.c,b),c)
a.sa4(0,new V.S(t.a,t.b,t.c))
a.sfl(t.w(0,Math.sqrt(t.G(t))))
u=1-b
s=1-c
a.sek(new V.as(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:5}
F.j5.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:6}
F.j7.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.A(q)
t=-t*q
p=s*q
a.sa4(0,new V.S(t,p,r))
p=new V.D(t,p,r)
a.sfl(p.w(0,Math.sqrt(p.G(p))))
a.sek(new V.as(1-c,2+c,-1,-1))},
$S:5}
F.j8.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:18}
F.j9.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:18}
F.jx.prototype={
$2:function(a,b){return 0},
$S:6}
F.jy.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.A(u)
t=a.f
s=new V.D(t.a,t.b,t.c)
u=s.w(0,Math.sqrt(s.G(s))).v(0,this.b+u)
a.sa4(0,new V.S(u.a,u.b,u.c))},
$S:5}
F.jz.prototype={
$1:function(a){return new V.S(Math.cos(a),Math.sin(a),0)},
$S:17}
F.jg.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.S(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:17}
F.j6.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.kh(t.$1(u),s)
s=J.m5(J.kh(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.D(s.a,s.b,s.c)
q=s.w(0,Math.sqrt(s.G(s)))
t=$.l5
if(t==null){t=new V.D(1,0,0)
$.l5=t
p=t}else p=t
t=q.aN(!J.T(q,p)?V.l9():p)
o=t.w(0,Math.sqrt(t.G(t)))
t=o.aN(q)
p=t.w(0,Math.sqrt(t.G(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.v(0,t*s)
s=o.v(0,m*s)
a.sa4(0,J.m4(r,new V.S(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:5}
F.a4.prototype={
bk:function(){if(!this.gbl()){C.a.N(this.a.a.d.b,this)
this.a.a.a7()}this.cA()
this.cB()
this.iX()},
cF:function(a){this.a=a
C.a.h(a.d.b,this)},
cG:function(a){this.b=a
C.a.h(a.d.c,this)},
ja:function(a){this.c=a
C.a.h(a.d.d,this)},
cA:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
cB:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
iX:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gbl:function(){return this.a==null||this.b==null||this.c==null},
hp:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cI()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.f5())return
return q.w(0,Math.sqrt(q.G(q)))},
ht:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.u(0,t)
u=new V.D(u.a,u.b,u.c)
q=u.w(0,Math.sqrt(u.G(u)))
u=r.u(0,t)
u=new V.D(u.a,u.b,u.c)
u=q.aN(u.w(0,Math.sqrt(u.G(u))))
return u.w(0,Math.sqrt(u.G(u)))},
cP:function(){if(this.d!=null)return!0
var u=this.hp()
if(u==null){u=this.ht()
if(u==null)return!1}this.d=u
this.a.a.a7()
return!0},
ho:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cI()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.f5())return
return q.w(0,Math.sqrt(q.G(q)))},
hs:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=u==null
s=t?null:u.f
r=this.b
q=r==null
p=q?null:r.f
o=this.c
n=o==null
m=n?null:o.f
if(s==null||p==null||m==null)return
l=t?null:u.y
k=q?null:r.y
j=n?null:o.y
if(l==null||k==null||j==null)return
u=k.b
i=u-j.b
if(Math.abs(i-0)<$.G().a){u=m.u(0,p)
u=new V.D(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.G(u)))
if(j.a-k.a<0)h=h.V(0)}else{g=(u-l.b)/i
u=m.u(0,p).v(0,g).n(0,p).u(0,s)
u=new V.D(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.G(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.V(0)}u=this.d
if(u!=null){f=u.w(0,Math.sqrt(u.G(u)))
u=f.aN(h)
u=u.w(0,Math.sqrt(u.G(u))).aN(f)
h=u.w(0,Math.sqrt(u.G(u)))}return h},
cN:function(){if(this.e!=null)return!0
var u=this.ho()
if(u==null){u=this.hs()
if(u==null)return!1}this.e=u
this.a.a.a7()
return!0},
gka:function(a){if(J.T(this.a,this.b))return!0
if(J.T(this.b,this.c))return!0
if(J.T(this.c,this.a))return!0
return!1},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
H:function(a){var u,t
if(this.gbl())return a+"disposed"
u=a+C.c.aq(J.ao(this.a.e),0)+", "+C.c.aq(J.ao(this.b.e),0)+", "+C.c.aq(J.ao(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
S:function(){return this.H("")}}
F.f7.prototype={}
F.hd.prototype={
bn:function(a,b,c){var u,t
u=b.a
u.a.a.D()
u=u.e
t=c.a
t.a.a.D()
if(u==t.e){u=b.b
u.a.a.D()
u=u.e
t=c.b
t.a.a.D()
if(u==t.e){u=b.c
u.a.a.D()
u=u.e
t=c.c
t.a.a.D()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.D()
u=u.e
t=c.b
t.a.a.D()
if(u==t.e){u=b.b
u.a.a.D()
u=u.e
t=c.c
t.a.a.D()
if(u==t.e){u=b.c
u.a.a.D()
u=u.e
t=c.a
t.a.a.D()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.D()
u=u.e
t=c.c
t.a.a.D()
if(u==t.e){u=b.b
u.a.a.D()
u=u.e
t=c.a
t.a.a.D()
if(u==t.e){u=b.c
u.a.a.D()
u=u.e
t=c.b
t.a.a.D()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.b6.prototype={
bk:function(){if(!this.gbl()){C.a.N(this.a.a.c.b,this)
this.a.a.a7()}this.cA()
this.cB()},
cF:function(a){this.a=a
C.a.h(a.c.b,this)},
cG:function(a){this.b=a
C.a.h(a.c.c,this)},
cA:function(){var u=this.a
if(u!=null){C.a.N(u.c.b,this)
this.a=null}},
cB:function(){var u=this.b
if(u!=null){C.a.N(u.c.c,this)
this.b=null}},
gbl:function(){return this.a==null||this.b==null},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
H:function(a){if(this.gbl())return a+"disposed"
return a+C.c.aq(J.ao(this.a.e),0)+", "+C.c.aq(J.ao(this.b.e),0)},
S:function(){return this.H("")}}
F.fq.prototype={}
F.hw.prototype={
bn:function(a,b,c){var u,t
u=b.a
u.a.a.D()
u=u.e
t=c.a
t.a.a.D()
if(u==t.e){u=b.b
u.a.a.D()
u=u.e
t=c.b
t.a.a.D()
return u==t.e}else{u=b.a
u.a.a.D()
u=u.e
t=c.b
t.a.a.D()
if(u==t.e){u=b.b
u.a.a.D()
u=u.e
t=c.a
t.a.a.D()
return u==t.e}else return!1}}}
F.br.prototype={
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.aq(J.ao(u.e),0)},
S:function(){return this.H("")}}
F.dP.prototype={
gt:function(){var u=this.e
if(u==null){u=D.H()
this.e=u}return u},
bo:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.D()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){q=u[r]
this.a.h(0,q.kc())}this.a.D()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.br()
if(m.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.I(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.D()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.my(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.D()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.D()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cd(k,j,h)}u=this.e
if(u!=null)u.av()},
at:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.at()||!1
if(!this.a.at())t=!1
u=this.e
if(u!=null)u.av()
return t},
kN:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.r(u,0)])
for(u=[F.a8];t.length!==0;){s=C.a.gkw(t)
C.a.l5(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.z)(t),++p){o=t[p]
if(o!=null&&a.bn(0,s,o)){C.a.h(r,o)
C.a.N(t,o)}}if(r.length>1)b.bo(r)}}this.a.D()
this.c.di()
this.d.di()
this.b.l6()
this.c.dj(new F.hw())
this.d.dj(new F.hd())
u=this.e
if(u!=null)u.av()},
jY:function(a){this.kN(new F.hX(),new F.fP())},
cH:function(){return this.jY(null)},
ep:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aN()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bd().a)!==0)++r
if((s&$.bc().a)!==0)++r
if((s&$.be().a)!==0)++r
if((s&$.bf().a)!==0)++r
if((s&$.d_().a)!==0)++r
if((s&$.d0().a)!==0)++r
if((s&$.c4().a)!==0)++r
if((s&$.bb().a)!==0)++r
q=a1.gdv(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.o
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.d7])
for(m=0,l=0;l<r;++l){k=a1.k5(l)
j=k.gdv(k)
C.a.q(n,l,new Z.d7(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].kL(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.q(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.aC(t,34962,e)
C.b.eo(t,34962,new Float32Array(H.bV(o)),35044)
C.b.aC(t,34962,null)
d=new Z.c8(new Z.ee(34962,e),n,a1)
d.shM(H.b([],[Z.bn]))
if(this.b.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)}a=Z.jW(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bn(0,c.length,a))}if(this.c.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.D()
C.a.h(c,b.e)}a=Z.jW(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bn(1,c.length,a))}if(this.d.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.D()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.D()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.D()
C.a.h(c,b.e)}a=Z.jW(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bn(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.H("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.H("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.H("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.H("   "))}return C.a.l(u,"\n")},
b4:function(a){var u=this.e
if(u!=null)u.I(a)},
a7:function(){return this.b4(null)},
$iom:1}
F.h6.prototype={
ee:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[F.a8],"$aa")
u=H.b([],[F.a4])
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
C.a.h(u,F.cd(s,p,o))}}return u},
jW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.a8],"$aa")
u=H.b([],[F.a4])
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
C.a.h(u,F.cd(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cd(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cd(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cd(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
dj:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.k(0,q)
for(o=q-1;o>=0;--o){n=r.d.k(0,o)
if(a.bn(0,p,n)){p.bk()
break}}}}},
di:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gka(s)
if(t)s.bk()}},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cP())s=!1
return s},
cO:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cN())s=!1
return s},
i:function(a){return this.S()},
H:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].H(a))
return C.a.l(u,"\n")},
S:function(){return this.H("")},
shE:function(a){this.b=H.h(a,"$ia",[F.a4],"$aa")}}
F.h7.prototype={
gm:function(a){return this.b.length},
dj:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.k(0,q)
for(o=q-1;o>=0;--o){n=r.c.k(0,o)
if(a.bn(0,p,n)){p.bk()
break}}}}},
di:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.T(s.a,s.b)
if(t)s.bk()}},
i:function(a){return this.S()},
H:function(a){var u,t,s,r
u=H.b([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].H(a+(""+s+". ")))}return C.a.l(u,"\n")},
S:function(){return this.H("")},
shO:function(a){this.b=H.h(a,"$ia",[F.b6],"$aa")}}
F.h8.prototype={
gm:function(a){return this.b.length},
l6:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.N(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.I(null)}s=t.a
if(s!=null){C.a.N(s.b.b,t)
t.a=null}}}},
i:function(a){return this.S()},
H:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].H(a))
return C.a.l(u,"\n")},
S:function(){return this.H("")},
scv:function(a){this.b=H.h(a,"$ia",[F.br],"$aa")}}
F.a8.prototype={
cS:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.ed(this.cx,s,p,u,t,r,q,a,o)},
kc:function(){return this.cS(null)},
sa4:function(a,b){var u
if(!J.T(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a7()}},
sfl:function(a){var u
if(!J.T(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a7()}},
sek:function(a){var u
if(!J.T(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a7()}},
kL:function(a){var u,t
if(a.B(0,$.aN())){u=this.f
t=[P.o]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.B(0,$.bd())){u=this.r
t=[P.o]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.B(0,$.bc())){u=this.x
t=[P.o]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.B(0,$.be())){u=this.y
t=[P.o]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.B(0,$.bf())){u=this.z
t=[P.o]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.B(0,$.d_())){u=this.Q
t=[P.o]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.B(0,$.d0())){u=this.Q
t=[P.o]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.B(0,$.c4()))return H.b([this.ch],[P.o])
else if(a.B(0,$.bb())){u=this.cx
t=[P.o]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.o])},
cP:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cI()
this.d.a0(0,new F.i1(u))
u=u.a
this.r=u.w(0,Math.sqrt(u.G(u)))
u=this.a
if(u!=null){u.a7()
u=this.a.e
if(u!=null)u.av()}return!0},
cN:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cI()
this.d.a0(0,new F.i0(u))
u=u.a
this.x=u.w(0,Math.sqrt(u.G(u)))
u=this.a
if(u!=null){u.a7()
u=this.a.e
if(u!=null)u.av()}return!0},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
H:function(a){var u,t,s
u=H.b([],[P.f])
C.a.h(u,C.c.aq(J.ao(this.e),0))
t=this.f
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.r
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.x
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.y
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.z
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.Q
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,V.L(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
S:function(){return this.H("")}}
F.i1.prototype={
$1:function(a){var u,t
H.d(a,"$ia4")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:10}
F.i0.prototype={
$1:function(a){var u,t
H.d(a,"$ia4")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:10}
F.hS.prototype={
D:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.u("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a7()
return!0},
ef:function(a,b,c,d,e,f,g,h,i){var u=F.ed(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bF:function(a,b,c,d,e,f){return this.ef(a,null,b,c,null,d,e,f,0)},
jX:function(a,b,c,d,e,f){return this.ef(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cP()
return!0},
cO:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cN()
return!0},
k9:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.T(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.I(null)}}}}return!0},
i:function(a){return this.S()},
H:function(a){var u,t,s,r
this.D()
u=H.b([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].H(a))
return C.a.l(u,"\n")},
S:function(){return this.H("")},
sjy:function(a){this.c=H.h(a,"$ia",[F.a8],"$aa")}}
F.hT.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.e(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.e(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
a0:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a4]})
C.a.a0(this.b,b)
C.a.a0(this.c,new F.hU(this,b))
C.a.a0(this.d,new F.hV(this,b))},
i:function(a){return this.S()},
H:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].H(a))
return C.a.l(u,"\n")},
S:function(){return this.H("")},
shF:function(a){this.b=H.h(a,"$ia",[F.a4],"$aa")},
shG:function(a){this.c=H.h(a,"$ia",[F.a4],"$aa")},
shH:function(a){this.d=H.h(a,"$ia",[F.a4],"$aa")}}
F.hU.prototype={
$1:function(a){H.d(a,"$ia4")
if(!J.T(a.a,this.a))this.b.$1(a)},
$S:10}
F.hV.prototype={
$1:function(a){var u
H.d(a,"$ia4")
u=this.a
if(!J.T(a.a,u)&&!J.T(a.b,u))this.b.$1(a)},
$S:10}
F.hW.prototype={
gm:function(a){return this.b.length+this.c.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.e(u,s)
return u[s]}else{if(b<0)return H.e(u,b)
return u[b]}},
i:function(a){return this.S()},
H:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].H(a))
return C.a.l(u,"\n")},
S:function(){return this.H("")},
shP:function(a){this.b=H.h(a,"$ia",[F.b6],"$aa")},
shQ:function(a){this.c=H.h(a,"$ia",[F.b6],"$aa")}}
F.hY.prototype={}
F.hX.prototype={
bn:function(a,b,c){return J.T(b.f,c.f)}}
F.hZ.prototype={}
F.fP.prototype={
bo:function(a){var u,t,s,r,q,p,o,n,m
H.h(a,"$ia",[F.a8],"$aa")
u=V.cI()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.D(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.G(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.w(0,Math.sqrt(o*o+n*n+m*m))}if(!J.T(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.I(null)}}}return}}
F.i_.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.S()},
H:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].H(a))
return C.a.l(u,"\n")},
S:function(){return this.H("")},
scv:function(a){this.b=H.h(a,"$ia",[F.br],"$aa")}}
O.dy.prototype={
gt:function(){var u=this.dy
if(u==null){u=D.H()
this.dy=u}return u},
X:function(a){var u
H.d(a,"$iw")
u=this.dy
if(u!=null)u.I(a)},
bb:function(){return this.X(null)},
e4:function(a){H.d(a,"$iw")
this.a=null
this.X(a)},
j2:function(){return this.e4(null)},
i0:function(a,b){var u=V.aq
u=new D.bo(a,H.h(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.X(u)},
i2:function(a,b){var u=V.aq
u=new D.bp(a,H.h(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.X(u)},
dL:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.ab(u.e.length+3,4)*4
s=C.f.ab(u.f.length+3,4)*4
r=C.f.ab(u.r.length+3,4)*4
q=C.f.ab(u.x.length+3,4)*4
p=C.f.ab(u.y.length+3,4)*4
o=C.f.ab(u.z.length+3,4)*4
n=C.f.ab(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.f.i(u.a)+C.f.i(m.a)+C.f.i(l.a)+C.f.i(k.a)+C.f.i(j.a)+C.f.i(i.a)+C.f.i(h.a)+C.f.i(g.a)+C.f.i(f.a)
e+"_"
e+"_0"
e+"_00"
e+"_000"
e=e+"_000_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
d=h!==C.d||g!==C.d
c=m!==C.d||l!==C.d||k!==C.d||j!==C.d
b=j===C.d
a=!b||d
a0=l!==C.d||k!==C.d||!b||i!==C.d||d
b=i===C.d
a1=!b
a2=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a3=u===C.i||m===C.i||l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.aN()
if(a0){b=$.bd()
a7=new Z.aY(a7.a|b.a)}if(a1){b=$.bc()
a7=new Z.aY(a7.a|b.a)}if(a2){b=$.be()
a7=new Z.aY(a7.a|b.a)}if(a3){b=$.bf()
a7=new Z.aY(a7.a|b.a)}if(a5){b=$.bb()
a7=new Z.aY(a7.a|b.a)}return new A.fF(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a_:function(a,b){H.h(a,"$ia",[T.cx],"$aa")
if(b!=null)if(!C.a.Y(a,b)){b.a=a.length
C.a.h(a,b)}},
ax:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.E();){t=u.d
t.toString
s=$.hR
if(s==null){s=new V.D(0,0,1)
$.hR=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.dm(s)}}},
ff:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dL()
t=H.d(a2.fr.k(0,u.au),"$idx")
if(t==null){t=A.mF(u,a2.a)
a2.eh(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bI
u=a3.e
if(!(u instanceof Z.c8)){a3.e=null
u=null}if(u==null||!u.d.B(0,r)){u=s.r1
if(u)a3.d.at()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cO()
p.a.cO()
p=p.e
if(p!=null)p.av()}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.k9()
o=o.e
if(o!=null)o.av()}m=a3.d.ep(new Z.ef(a2.a),r)
m.aO($.aN()).e=this.a.Q.c
if(u)m.aO($.bd()).e=this.a.cx.c
if(q)m.aO($.bc()).e=this.a.ch.c
if(s.rx)m.aO($.be()).e=this.a.cy.c
if(p)m.aO($.bf()).e=this.a.db.c
if(s.x1)m.aO($.bb()).e=this.a.dx.c
a3.e=m}u=T.cx
l=H.b([],[u])
this.a.a6(a2)
if(s.fx){q=this.a
p=a2.dx.ga5()
q=q.dy
q.toString
q.ar(p.aj(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db.ga5().v(0,a2.dx.ga5())
a2.cx=p}q=q.fr
q.toString
q.ar(p.aj(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gl3().v(0,a2.dx.ga5())
a2.ch=p}q=q.fy
q.toString
q.ar(p.aj(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ar(C.r.aj(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ar(C.r.aj(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ar(C.r.aj(p,!0))}if(s.aE>0){k=this.e.a.length
q=this.a.k4
C.b.R(q.a,q.d,k)
for(q=[P.o],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.e(o,j)
o=o[j]
p.toString
H.d(o,"$iaq")
p=p.r1
if(j>=p.length)return H.e(p,j)
p=p[j]
i=new Float32Array(H.bV(H.h(o.aj(0,!0),"$ia",q,"$aa")))
C.b.fq(p.a,p.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a_(l,this.f.d)
q=this.a
p=this.f.d
q.as(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a_(l,this.f.e)
q=this.a
p=this.f.e
q.an(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a_(l,this.r.d)
q=this.a
p=this.r.d
q.as(q.y1,q.aE,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a_(l,this.r.e)
q=this.a
p=this.r.e
q.an(q.y2,q.aE,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}switch(s.c){case C.d:break
case C.j:q=this.a
p=this.x.f
q=q.au
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a_(l,this.x.d)
q=this.a
p=this.x.d
q.as(q.bI,q.bJ,p)
p=this.a
q=this.x.f
p=p.au
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a_(l,this.x.e)
q=this.a
p=this.x.e
q.an(q.eB,q.bJ,p)
p=this.a
q=this.x.f
p=p.au
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}switch(s.d){case C.d:break
case C.j:q=this.a
p=this.y.f
q=q.bK
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a_(l,this.y.d)
q=this.a
p=this.y.d
q.as(q.eC,q.bL,p)
p=this.a
q=this.y.f
p=p.bK
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a_(l,this.y.e)
q=this.a
p=this.y.e
q.an(q.eD,q.bL,p)
p=this.a
q=this.y.f
p=p.bK
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}switch(s.e){case C.d:break
case C.j:q=this.a
p=this.z.f
q=q.bM
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bO
C.b.O(p.a,p.d,n)
break
case C.h:this.a_(l,this.z.d)
q=this.a
p=this.z.d
q.as(q.eE,q.bN,p)
p=this.a
q=this.z.f
p=p.bM
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bO
C.b.O(q.a,q.d,n)
break
case C.i:this.a_(l,this.z.e)
q=this.a
p=this.z.e
q.an(q.eF,q.bN,p)
p=this.a
q=this.z.f
p=p.bM
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bO
C.b.O(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.eQ
C.b.R(q.a,q.d,k)
h=a2.db.ga5()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.cW
if(g>=o.length)return H.e(o,g)
d=o[g]
o=h.dm(e.a)
n=o.a
c=o.b
b=o.c
b=o.w(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.C(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.C(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.eR
C.b.R(q.a,q.d,k)
h=a2.db.ga5()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.cX
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbr(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bv(e.gbr(e))
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gaD(e)
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcI()
n=d.e
C.b.O(n.a,n.d,o)
o=e.gcJ()
n=d.f
C.b.O(n.a,n.d,o)
o=e.gcK()
n=d.r
C.b.O(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.eS
C.b.R(q.a,q.d,k)
h=a2.db.ga5()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.cY
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbr(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcU(e).lw()
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bv(e.gbr(e))
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gaD(e)
n=d.e
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.glu()
n=d.f
C.b.O(n.a,n.d,o)
o=e.glt()
n=d.r
C.b.O(n.a,n.d,o)
o=e.gcI()
n=d.x
C.b.O(n.a,n.d,o)
o=e.gcJ()
n=d.y
C.b.O(n.a,n.d,o)
o=e.gcK()
n=d.z
C.b.O(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.eT
C.b.R(q.a,q.d,k)
h=a2.db.ga5()
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
n=this.a.cZ
if(g>=n.length)return H.e(n,g)
d=n[g]
n=e.gbt()
H.h(l,"$ia",o,"$aa")
if(!C.a.Y(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gcU(e)
c=d.d
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=e.gc2()
c=d.b
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=e.gc0(e)
c=d.c
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=h.dm(e.gcU(e))
c=n.a
b=n.b
a=n.c
a=n.w(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.C(b.a,b.d,c,n,a)
a=e.gaD(e)
n=d.f
C.b.C(n.a,n.d,a.a,a.b,a.c)
a=e.gbt()
n=a.gf6(a)
if(!n){n=d.x
C.b.R(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.R(b,n,0)
else C.b.R(b,n,a.a)
n=d.x
C.b.R(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.eU
C.b.R(q.a,q.d,k)
h=a2.db.ga5()
for(q=this.dx.y,p=q.length,o=[P.o],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
c=this.a.d_
if(g>=c.length)return H.e(c,g)
d=c[g]
c=e.gbt()
H.h(l,"$ia",n,"$aa")
if(!C.a.Y(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.v(0,e.ga5())
c=e.ga5()
b=$.cp
if(b==null){b=new V.S(0,0,0)
$.cp=b}b=c.bv(b)
c=d.b
C.b.C(c.a,c.d,b.a,b.b,b.c)
c=$.cp
if(c==null){c=new V.S(0,0,0)
$.cp=c}c=a0.bv(c)
b=d.c
C.b.C(b.a,b.d,c.a,c.b,c.c)
c=a0.d5()
b=d.d
i=new Float32Array(H.bV(H.h(new V.dz(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).aj(0,!0),"$ia",o,"$aa")))
C.b.fp(b.a,b.d,!1,i)
b=e.gaD(e)
c=d.e
C.b.C(c.a,c.d,b.a,b.b,b.c)
b=e.gbt()
c=b.gf6(b)
if(!c){c=d.r
C.b.R(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.R(a1,c,0)
else C.b.R(a1,c,b.a)
c=d.r
C.b.R(c.a,c.d,0)}c=e.gcI()
b=d.x
C.b.O(b.a,b.d,c)
c=e.gcJ()
b=d.y
C.b.O(b.a,b.d,c)
c=e.gcK()
b=d.z
C.b.O(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.eV
C.b.R(q.a,q.d,k)
h=a2.db.ga5()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.d0
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbt()
H.h(l,"$ia",u,"$aa")
if(!C.a.Y(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gbr(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcU(e)
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gc2()
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gc0(e)
n=d.e
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bv(e.gbr(e))
n=d.f
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gbt()
n=o.gf6(o)
if(!n){o=d.x
C.b.R(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.R(b,n,0)
else C.b.R(b,n,o.a)
o=d.x
C.b.R(o.a,o.d,0)}o=e.gaD(e)
n=d.y
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.glx()
n=d.z
C.b.O(n.a,n.d,o)
o=e.gly()
n=d.Q
C.b.O(n.a,n.d,o)
o=e.gcI()
n=d.ch
C.b.O(n.a,n.d,o)
o=e.gcJ()
n=d.cx
C.b.O(n.a,n.d,o)
o=e.gcK()
n=d.cy
C.b.O(n.a,n.d,o);++g}}}switch(s.f){case C.d:break
case C.j:break
case C.h:this.a_(l,this.Q.d)
u=this.a
q=this.Q.d
u.as(u.eG,u.bP,q)
break
case C.i:this.a_(l,this.Q.e)
u=this.a
q=this.Q.e
u.an(u.eH,u.bP,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.ga5().d5()
a2.Q=q}u=u.id
u.toString
u.ar(q.aj(0,!0))}if(s.dy){this.a_(l,this.ch)
u=this.a
q=this.ch
u.an(u.eI,u.eJ,q)
switch(s.r){case C.d:break
case C.j:u=this.a
q=this.cx.f
u=u.bQ
u.toString
p=q.a
o=q.b
q=q.c
C.b.C(u.a,u.d,p,o,q)
break
case C.h:this.a_(l,this.cx.d)
u=this.a
q=this.cx.d
u.as(u.eK,u.bR,q)
q=this.a
u=this.cx.f
q=q.bQ
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
break
case C.i:this.a_(l,this.cx.e)
u=this.a
q=this.cx.e
u.an(u.eL,u.bR,q)
q=this.a
u=this.cx.f
q=q.bQ
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
break}switch(s.x){case C.d:break
case C.j:u=this.a
q=this.cy.f
u=u.bT
u.toString
p=q.a
o=q.b
q=q.c
C.b.C(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bS
C.b.O(q.a,q.d,o)
break
case C.h:this.a_(l,this.cy.d)
u=this.a
q=this.cy.d
u.as(u.eM,u.bU,q)
q=this.a
u=this.cy.f
q=q.bT
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bS
C.b.O(u.a,u.d,o)
break
case C.i:this.a_(l,this.cy.e)
u=this.a
q=this.cy.e
u.an(u.eN,u.bU,q)
q=this.a
u=this.cy.f
q=q.bT
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bS
C.b.O(u.a,u.d,o)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.j:u=this.a
p=this.db.f
u=u.bV
C.b.O(u.a,u.d,p)
break
case C.h:this.a_(l,this.db.d)
u=this.a
p=this.db.d
u.as(u.eO,u.bW,p)
p=this.a
u=this.db.f
p=p.bV
C.b.O(p.a,p.d,u)
break
case C.i:this.a_(l,this.db.e)
u=this.a
p=this.db.e
u.an(u.eP,u.bW,p)
p=this.a
u=this.db.f
p=p.bV
C.b.O(p.a,p.d,u)
break}u=a2.a
C.b.bm(u,3042)
C.b.k8(u,770,771)}for(u=a2.a,j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
C.b.bE(u,33984+p.a)
C.b.af(u,3553,p.b)}}p=a3.e
p.a6(a2)
p.ai(a2)
p.aw(a2)
if(q)C.b.kn(u,3042)
for(j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.bE(u,33984+q.a)
C.b.af(u,3553,null)}}q=this.a
q.toString
C.b.dn(u,null)
q.x.ex()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dL().au},
shr:function(a){this.e=H.h(a,"$iZ",[V.aq],"$aZ")}}
O.fD.prototype={}
O.cj.prototype={
X:function(a){this.a.X(H.d(a,"$iw"))},
bb:function(){return this.X(null)},
aL:function(){},
j8:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gt().N(0,this.gaV())
t=this.d
this.d=a
if(a!=null)a.gt().h(0,this.gaV())
u=new D.C(this.b+".texture2D",t,this.d,this,[T.dY])
u.b=!0
this.a.X(u)}},
j9:function(a){}}
O.fE.prototype={}
O.aS.prototype={
e6:function(a){var u,t
if(!J.T(this.f,a)){u=this.f
this.f=a
t=new D.C(this.b+".color",u,a,this,[V.a_])
t.b=!0
this.a.X(t)}},
aL:function(){this.fW()
this.e6(new V.a_(1,1,1))},
saD:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aL()
u=this.a
u.a=null
u.X(null)}this.e6(b)}}
O.fG.prototype={
j7:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.G().a)){this.ch=a
u=new D.C(this.b+".refraction",u,a,this,[P.o])
u.b=!0
this.a.X(u)}},
aL:function(){this.cb()
this.j7(1)}}
O.fH.prototype={
cC:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.G().a)){this.ch=a
u=new D.C(this.b+".shininess",u,a,this,[P.o])
u.b=!0
this.a.X(u)}},
aL:function(){this.cb()
this.cC(100)}}
O.dQ.prototype={
gt:function(){var u=this.e
if(u==null){u=D.H()
this.e=u}return u},
X:function(a){var u
H.d(a,"$iw")
u=this.e
if(u!=null)u.I(a)},
bb:function(){return this.X(null)},
ff:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.d(a.fr.k(0,"Skybox"),"$idR")
if(u==null){t=a.a
u=new A.dR(t,"Skybox")
u.dz(t,"Skybox")
u.f4($.n_,$.mZ)
u.z=u.x.k(0,"posAttr")
u.Q=H.i(u.y.k(0,"fov"),"$iW")
u.ch=H.i(u.y.k(0,"ratio"),"$iW")
u.cx=H.i(u.y.k(0,"boxClr"),"$iI")
u.cy=H.i(u.y.k(0,"boxTxt"),"$iag")
u.db=H.i(u.y.k(0,"viewMat"),"$iau")
a.eh(u)}this.a=u}if(b.e==null){t=b.d.ep(new Z.ef(a.a),$.aN())
t.aO($.aN()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
C.b.bE(s,33985)
C.b.af(s,34067,t.b)}}t=a.d
s=a.c
r=this.a
r.a6(a)
q=this.b
p=r.Q
C.b.O(p.a,p.d,q)
q=r.ch
C.b.O(q.a,q.d,t/s)
s=this.c
r.cy.fP(s)
s=this.d
t=r.cx
C.b.C(t.a,t.d,s.a,s.b,s.c)
s=a.db.ga5().d5()
r=r.db
r.toString
r.ar(s.aj(0,!0))
t=b.e
if(t instanceof Z.c8){t.a6(a)
t.ai(a)
t.aw(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.dn(s,null)
t.x.ex()
t=this.c
if(t!=null)if(t.c){t.c=!1
C.b.bE(s,33984+t.a)
C.b.af(s,34067,null)}}}
O.bs.prototype={}
T.cx.prototype={}
T.dY.prototype={}
T.hl.prototype={
gt:function(){var u=this.y
if(u==null){u=D.H()
this.y=u}return u}}
T.dZ.prototype={
gt:function(){var u=this.e
if(u==null){u=D.H()
this.e=u}return u}}
T.hm.prototype={
aX:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.n
W.a5(u,"load",H.k(new T.hn(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
j3:function(a,b,c){var u,t,s,r
b=V.cZ(b,2)
u=V.cZ(a.width,2)
t=V.cZ(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jG(null,null)
s.width=u
s.height=t
r=H.d(C.q.fC(s,"2d"),"$ibB")
r.imageSmoothingEnabled=!1;(r&&C.D).kp(r,a,0,0,s.width,s.height)
return P.nP(C.D.hL(r,0,0,s.width,s.height))}}}
T.hn.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.j3(this.b,u.c,this.c)
s=u.a
C.b.af(s,34067,this.d)
C.b.l2(s,37440,this.e?1:0)
C.b.lg(s,this.f,0,6408,6408,5121,t)
C.b.af(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.cV()}++u.e},
$S:13}
V.b0.prototype={
aP:function(a){return!0},
i:function(a){return"all"},
$iaw:1}
V.aw.prototype={}
V.dw.prototype={
aP:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].aP(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sac:function(a){this.a=H.h(a,"$ia",[V.aw],"$aa")},
$iaw:1}
V.ar.prototype={
aP:function(a){return!this.fV(a)},
i:function(a){return"!["+this.dw(0)+"]"}}
V.fX.prototype={
aP:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.bP(this.a)
t=H.bP(this.b)
return u+".."+t},
$iaw:1}
V.h4.prototype={
h0:function(a){var u,t
if(a.a.length<=0)throw H.c(P.u("May not create a SetMatcher with zero characters."))
u=new H.aJ([P.m,P.N])
for(t=new H.ci(a,a.gm(a),0,[H.a9(a,"U",0)]);t.E();)u.q(0,t.d,!0)
this.sj6(u)},
aP:function(a){return this.a.bG(a)},
i:function(a){return P.dU(this.a.gaF(),0,null)},
sj6:function(a){this.a=H.h(a,"$iJ",[P.m,P.N],"$aJ")},
$iaw:1}
V.ct.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cz(this.a.j(0,b))
r.sac(H.b([],[V.aw]))
r.c=!1
C.a.h(this.c,r)
return r},
kv:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.aP(a))return r}return},
i:function(a){return this.b},
sjt:function(a){this.c=H.h(a,"$ia",[V.cz],"$aa")}}
V.e3.prototype={
i:function(a){var u,t
u=H.kc(this.b,"\n","\\n")
t=H.kc(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cy.prototype={
aR:function(a,b,c){var u,t,s
H.h(c,"$ia",[P.f],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.z)(c),++t){s=c[t]
this.c.q(0,s,b)}},
i:function(a){return this.b},
siY:function(a){var u=P.f
this.c=H.h(a,"$iJ",[u,u],"$aJ")}}
V.hp.prototype={
j:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new V.ct(this,b)
u.sjt(H.b([],[V.cz]))
u.d=null
this.a.q(0,b,u)}return u},
T:function(a){var u,t
u=this.b.k(0,a)
if(u==null){u=new V.cy(this,a)
t=P.f
u.siY(new H.aJ([t,t]))
this.b.q(0,a,u)}return u},
fo:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.e3])
t=this.c
s=[P.m]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.J(a,o)
m=t.kv(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dU(r,0,null)
throw H.c(P.u("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dU(r,0,null)
k=t.d
j=k.c.k(0,l)
p=new V.e3(j==null?k.b:j,l,o)}++o}}},
sjh:function(a){this.a=H.h(a,"$iJ",[P.f,V.ct],"$aJ")},
sjm:function(a){this.b=H.h(a,"$iJ",[P.f,V.cy],"$aJ")}}
V.cz.prototype={
i:function(a){return this.b.b+": "+this.dw(0)}}
X.eK.prototype={
gt:function(){var u=this.fr
if(u==null){u=D.H()
this.fr=u}return u},
al:function(a){var u=this.fr
if(u!=null)u.I(a)},
sb7:function(a,b){var u
if(b<1)b=1
u=this.a
if(u!==b){this.y=null
this.a=b
this.c=b
u=new D.C("width",u,b,this,[P.m])
u.b=!0
this.al(u)}},
sb3:function(a,b){var u
if(b<1)b=1
u=this.b
if(u!==b){this.y=null
this.b=b
this.d=b
u=new D.C("height",u,b,this,[P.m])
u.b=!0
this.al(u)}},
a6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i
if(this.y==null){u=a.a
t=this.ch
s=this.a
r=this.b
q=H.a3(C.b.c6(u,3379))
p=V.cZ(s,2)
o=V.cZ(r,2)
q=V.cZ(q,2)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
C.b.af(u,3553,n)
C.b.aH(u,3553,10242,33071)
C.b.aH(u,3553,10243,33071)
C.b.aH(u,3553,10241,9729)
C.b.aH(u,3553,10240,9729)
C.b.fk(u,3553,0,6408,p,o,0,6408,5121,null)
C.b.af(u,3553,null)
m=T.kV(0,n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.cV()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cV()
t=this.ch
s=t.b
this.z=s
this.c=t.r
this.d=t.x
C.b.af(u,3553,s)
t=u.createRenderbuffer()
this.Q=t
C.b.el(u,36161,t)
C.b.l8(u,36161,33189,this.c,this.d)
t=u.createFramebuffer()
this.y=t
C.b.bi(u,36160,t)
C.b.kD(u,36160,36064,3553,this.z,0)
C.b.kC(u,36160,36096,36161,this.Q)
C.b.af(u,3553,null)
C.b.el(u,36161,null)
C.b.bi(u,36160,null)}u=a.a
C.b.bi(u,36160,this.y)
C.b.bm(u,2884)
C.b.bm(u,2929)
C.b.ew(u,513)
t=this.dy
s=t.c
a.c=C.e.a8(s*this.a)
r=t.d
a.d=C.e.a8(r*this.b)
l=t.a
k=this.c
j=C.e.a8(l*k)
t=t.b
l=this.d
C.b.fu(u,j,C.e.a8(t*l),C.e.a8(s*k),C.e.a8(r*l))
C.b.es(u,this.db)
if(this.cy){t=this.cx
C.b.er(u,t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)C.b.eq(u,i)},
aw:function(a){C.b.bi(a.a,36160,null)}}
X.bz.prototype={$iaU:1}
X.fd.prototype={
gt:function(){var u=this.x
if(u==null){u=D.H()
this.x=u}return u},
a6:function(a){var u,t,s,r,q,p,o
u=a.a
C.b.bi(u,36160,null)
C.b.bm(u,2884)
C.b.bm(u,2929)
C.b.ew(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.A(t)
p=C.e.a8(q*t)
q=r.b
if(typeof s!=="number")return H.A(s)
o=C.e.a8(q*s)
q=C.e.a8(r.c*t)
a.c=q
r=C.e.a8(r.d*s)
a.d=r
C.b.fu(u,p,o,q,r)
C.b.es(u,this.c)
r=this.a
C.b.er(u,r.a,r.b,r.c,r.d)
C.b.eq(u,16640)},
aw:function(a){}}
X.fi.prototype={
gt:function(){var u=this.b
if(u==null){u=D.H()
this.b=u}return u},
a6:function(a){var u
a.cy.c_(V.bL())
u=V.bL()
a.db.c_(u)},
aw:function(a){a.cy.aQ()
a.db.aQ()},
$iaU:1,
$ibz:1}
X.dG.prototype={
gt:function(){var u=this.f
if(u==null){u=D.H()
this.f=u}return u},
al:function(a){var u
H.d(a,"$iw")
u=this.f
if(u!=null)u.I(a)},
hk:function(){return this.al(null)},
a6:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aT(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.c_(n)
u=$.kK
if(u==null){u=V.kM()
t=V.l8()
s=$.l4
if(s==null){s=new V.D(0,0,-1)
$.l4=s}s=V.kC(u,t,s)
$.kK=s
m=s}else m=u
u=this.b
if(u!=null){l=u.aS(a,this)
if(l!=null)m=l.v(0,m)}a.db.c_(m)},
aw:function(a){a.cy.aQ()
a.db.aQ()},
$iaU:1,
$ibz:1}
X.cv.prototype={}
V.bi.prototype={
by:function(a){this.b=new P.fg(C.Y)
this.c=null
this.sck(H.b([],[[P.a,W.aA]]))},
P:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.aA]))
t=a.split("\n")
for(u=t.length,s=[W.aA],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.F(p)
n=this.b.hw(p,0,p.length)
m=n==null?p:n
C.k.fL(o,H.kc(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaG(this.d),o)}},
fc:function(a){var u,t,s,r
H.h(a,"$ia",[P.f],"$aa")
this.sck(H.b([],[[P.a,W.aA]]))
u=C.a.l(a,"\n")
t=this.c
if(t==null){t=this.bH()
this.c=t}for(t=t.fo(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)this.bZ(t[r])},
sck:function(a){this.d=H.h(a,"$ia",[[P.a,W.aA]],"$aa")}}
V.jw.prototype={
$1:function(a){H.d(a,"$iaW")
P.kb(C.e.fn(this.a.gkB(),2)+" fps")},
$S:51}
V.eX.prototype={
bZ:function(a){switch(a.a){case"Class":this.P(a.b,"#551")
break
case"Comment":this.P(a.b,"#777")
break
case"Id":this.P(a.b,"#111")
break
case"Num":this.P(a.b,"#191")
break
case"Reserved":this.P(a.b,"#119")
break
case"String":this.P(a.b,"#171")
break
case"Symbol":this.P(a.b,"#616")
break
case"Type":this.P(a.b,"#B11")
break
case"Whitespace":this.P(a.b,"#111")
break}},
bH:function(){var u,t,s,r
u=V.hq()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.V("a","z")
C.a.h(t.a,s)
s=V.V("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.V("0","9")
C.a.h(s.a,t)
t=V.V("a","z")
C.a.h(s.a,t)
t=V.V("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.V("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.V("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.v(new H.t("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.V("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.V("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.v(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.v(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"OpenDoubleStr")
t=V.v(new H.t('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.v(new H.t('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.v(new H.t("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.v(new H.t('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.b0())
s=u.j(0,"Start").l(0,"OpenSingleStr")
t=V.v(new H.t("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.v(new H.t("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.v(new H.t("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.v(new H.t("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.b0())
s=u.j(0,"Start").l(0,"Slash")
t=V.v(new H.t("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.v(new H.t("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").l(0,"EndComment")
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ar()
r=[V.aw]
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"MLComment")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").l(0,"MLCStar")
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"MLComment")
s=new V.ar()
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"EndComment")
s=V.v(new H.t("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Whitespace")
t=V.v(new H.t(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").l(0,"Whitespace")
s=V.v(new H.t(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.T("Num")
s=u.j(0,"Float")
s.d=s.a.T("Num")
s=u.j(0,"Sym")
s.d=s.a.T("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.T("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.T("String")
s=u.j(0,"EndComment")
s.d=s.a.T("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.T("Whitespace")
s=u.j(0,"Id")
t=s.a.T("Id")
s.d=t
s=[P.f]
t.aR(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aR(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aR(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.fe.prototype={
bZ:function(a){switch(a.a){case"Builtin":this.P(a.b,"#411")
break
case"Comment":this.P(a.b,"#777")
break
case"Id":this.P(a.b,"#111")
break
case"Num":this.P(a.b,"#191")
break
case"Preprocess":this.P(a.b,"#737")
break
case"Reserved":this.P(a.b,"#119")
break
case"Symbol":this.P(a.b,"#611")
break
case"Type":this.P(a.b,"#171")
break
case"Whitespace":this.P(a.b,"#111")
break}},
bH:function(){var u,t,s,r
u=V.hq()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.V("a","z")
C.a.h(t.a,s)
s=V.V("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.V("0","9")
C.a.h(s.a,t)
t=V.V("a","z")
C.a.h(s.a,t)
t=V.V("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.V("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.V("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.v(new H.t("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.V("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.V("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.v(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.v(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Slash")
t=V.v(new H.t("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.v(new H.t("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").l(0,"Sym").a,new V.b0())
s=u.j(0,"Comment").l(0,"EndComment")
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ar()
r=[V.aw]
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Preprocess")
s=V.v(new H.t("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"Preprocess")
t=new V.ar()
t.sac(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"EndPreprocess")
t=V.v(new H.t("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Whitespace")
s=V.v(new H.t(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").l(0,"Whitespace")
t=V.v(new H.t(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.T("Num")
t=u.j(0,"Float")
t.d=t.a.T("Num")
t=u.j(0,"Sym")
t.d=t.a.T("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.T("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.T("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.T("Whitespace")
t=u.j(0,"Id")
s=t.a.T("Id")
t.d=s
t=[P.f]
s.aR(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aR(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aR(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.ff.prototype={
bZ:function(a){switch(a.a){case"Attr":this.P(a.b,"#911")
this.P("=","#111")
break
case"Id":this.P(a.b,"#111")
break
case"Other":this.P(a.b,"#111")
break
case"Reserved":this.P(a.b,"#119")
break
case"String":this.P(a.b,"#171")
break
case"Symbol":this.P(a.b,"#616")
break}},
bH:function(){var u,t,s
u=V.hq()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
s=V.V("a","z")
C.a.h(t.a,s)
s=V.V("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=V.V("0","9")
C.a.h(s.a,t)
t=V.V("a","z")
C.a.h(s.a,t)
t=V.V("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").l(0,"Attr")
s=V.v(new H.t("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Sym")
s=V.v(new H.t("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").l(0,"Sym")
t=V.v(new H.t("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"OpenStr")
s=V.v(new H.t('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").l(0,"CloseStr")
t=V.v(new H.t('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").l(0,"EscStr")
s=V.v(new H.t("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").l(0,"OpenStr")
t=V.v(new H.t('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").l(0,"OpenStr").a,new V.b0())
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.b0())
t=u.j(0,"Other").l(0,"Other")
s=new V.ar()
s.sac(H.b([],[V.aw]))
C.a.h(t.a,s)
t=V.v(new H.t('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.V("a","z")
C.a.h(s.a,t)
t=V.V("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.T("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.T("String")
t=u.j(0,"Id")
s=t.a.T("Id")
t.d=s
s.aR(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.j(0,"Attr")
s.d=s.a.T("Attr")
s=u.j(0,"Other")
s.d=s.a.T("Other")
return u}}
V.fT.prototype={
fc:function(a){H.h(a,"$ia",[P.f],"$aa")
this.sck(H.b([],[[P.a,W.aA]]))
this.P(C.a.l(a,"\n"),"#111")},
bZ:function(a){},
bH:function(){return}}
V.fV.prototype={
ec:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.k(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.l0().gdg().k(0,H.j(u))
if(t==null)if(d){c.$0()
this.ea(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kj(this.c).h(0,q)
o=W.ms("radio")
o.checked=s
o.name=u
u=W.n
W.a5(o,"change",H.k(new V.fW(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.G.F(q,o)
n=r.createElement("span")
n.textContent=b
C.G.F(q,n)
J.kj(this.c).h(0,r.createElement("br"))},
aA:function(a,b,c){return this.ec(a,b,c,!1)},
ea:function(a){var u,t,s,r,q
u=P.l0()
t=P.f
s=P.mB(u.gdg(),t,t)
s.q(0,this.a,a)
r=u.fg(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.X).j_(t,new P.iE([],[]).dq(""),"",q)}}
V.fW.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.ea(this.d)}},
$S:13}
V.h9.prototype={
h1:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).F(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.F(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.F(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.F(q,p)}o=u.createElement("div")
this.a=o
C.k.F(q,o)
this.b=null
o=W.n
W.a5(u,"scroll",H.k(new V.hb(s),{func:1,ret:-1,args:[o]}),!1,o)},
eg:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.f],"$aa")
this.jc()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fo(C.a.kJ(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.F(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.F(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.F(t,o)
break
case"Link":n=p.b
if(H.od(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.F(m[1])
l.textContent=H.F(m[0])
C.k.F(t,l)}else{k=P.ey(C.J,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.j(k)
l.textContent=n
C.k.F(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.F(t,o)
break}}C.k.F(this.a,t)},
fB:function(a){var u,t,s,r
u=new V.eX("dart")
u.by("dart")
t=new V.fe("glsl")
t.by("glsl")
s=new V.ff("html")
s.by("html")
r=C.a.kx(H.b([u,t,s],[V.bi]),new V.hc(a))
if(r!=null)return r
u=new V.fT("plain")
u.by("plain")
return u},
ed:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a7,"$ia",[P.f],"$aa")
u=H.b([],[P.m])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.cX(r).aa(r,"+")){C.a.q(a7,s,C.c.ay(r,1))
C.a.h(u,1)
t=!0}else if(C.c.aa(r,"-")){C.a.q(a7,s,C.c.ay(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fB(a5)
q.fc(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.F(o,n)
C.k.F(this.a,o)
m=P.ey(C.J,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kl(null)
i.href="#"+H.j(m)
i.textContent=a4
C.k.F(j,i)
C.x.F(k,j)
C.n.F(l,k)
C.o.F(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.e(u,s)
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
a.className="codeLineText"
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.z)(r),++a0)C.x.F(a,r[a0])
C.n.F(e,d)
C.n.F(e,c)
C.n.F(e,a)
C.o.F(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.z)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gU(r);a3.E();)C.x.F(c,a3.gM())
C.n.F(e,d)
C.n.F(e,c)
C.o.F(n,e)}},
jV:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[P.f],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.F(this.a,t)
r=C.o.hN(t,-1)
s=H.d((r&&C.n).dT(r,-1),"$iaV").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<1;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.d(C.n.dT(r,-1),"$iaV")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).F(o,p)}},
jc:function(){var u,t,s,r
if(this.b!=null)return
u=V.hq()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Bold")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").l(0,"Bold")
s=new V.ar()
r=[V.aw]
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").l(0,"BoldEnd")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Italic")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").l(0,"Italic")
s=new V.ar()
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").l(0,"ItalicEnd")
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Code")
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").l(0,"Code")
s=new V.ar()
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.t("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").l(0,"CodeEnd")
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"LinkHead")
s=V.v(new H.t("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").l(0,"LinkTail")
s=V.v(new H.t("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").l(0,"LinkEnd")
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").l(0,"LinkHead")
t=new V.ar()
t.sac(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").l(0,"LinkEnd")
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").l(0,"LinkTail")
t=new V.ar()
t.sac(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.b0())
s=u.j(0,"Other").l(0,"Other")
t=new V.ar()
t.sac(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.t("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.T("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.T("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.T("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.T("Link")
s=u.j(0,"Other")
s.d=s.a.T("Other")
this.b=u}}
V.hb.prototype={
$1:function(a){P.kX(C.y,new V.ha(this.a))},
$S:13}
V.ha.prototype={
$0:function(){var u,t,s
u=C.e.a8(document.documentElement.scrollTop)
t=this.a.style
s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.hc.prototype={
$1:function(a){return H.d(a,"$ibi").a===this.a},
$S:52}
V.jk.prototype={
$0:function(){this.a.sa9(0,F.j4(1,null,null,1))},
$S:0}
V.jl.prototype={
$0:function(){this.a.sa9(0,F.j4(15,null,new V.jj(),15))},
$S:0}
V.jj.prototype={
$3:function(a,b,c){var u,t,s,r
u=Math.cos(c*4*3.141592653589793+3.141592653589793)
t=Math.cos(b*4*3.141592653589793+3.141592653589793)
s=a.f
s=new V.D(s.a,s.b,s.c)
r=s.w(0,Math.sqrt(s.G(s)))
s=a.f
t=r.v(0,u*0.1+t*0.1)
a.sa4(0,s.n(0,new V.S(t.a,t.b,t.c)))},
$S:5}
V.jm.prototype={
$0:function(){this.a.sa9(0,F.lv(1,!0,!0,1,30,1))},
$S:0}
V.jn.prototype={
$0:function(){this.a.sa9(0,F.lv(1,!0,!1,1,30,0))},
$S:0}
V.jo.prototype={
$0:function(){this.a.sa9(0,F.lw(!0,!0,25,new V.ji(),50))},
$S:0}
V.ji.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8},
$S:6}
V.jp.prototype={
$0:function(){this.a.sa9(0,F.lI(6,null,1,6))},
$S:0}
V.jq.prototype={
$0:function(){this.a.sa9(0,F.lI(10,new V.jh(),1,10))},
$S:0}
V.jh.prototype={
$2:function(a,b){var u,t
u=a-0.5
t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3},
$S:6}
V.jr.prototype={
$0:function(){this.a.sa9(0,F.lK(30,1,15,0.5))},
$S:0}
V.js.prototype={
$0:function(){this.a.sa9(0,F.o4(120,1,2,12,0.3,3))},
$S:0}
V.jt.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iw")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.ed("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.ed("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.ae.prototype
u.fS=u.i
u=J.dp.prototype
u.fU=u.i
u=P.l.prototype
u.fT=u.c3
u=W.P.prototype
u.ca=u.ao
u=W.er.prototype
u.fX=u.aB
u=O.cj.prototype
u.fW=u.aL
u=O.aS.prototype
u.cb=u.aL
u=V.dw.prototype
u.fV=u.aP
u.dw=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"nJ","nc",14)
u(P,"nK","nd",14)
u(P,"nL","ne",14)
t(P,"lu","nI",3)
s(W,"nY",4,null,["$4"],["ng"],26,0)
s(W,"nZ",4,null,["$4"],["nh"],26,0)
var m
r(m=E.ak.prototype,"gfa",0,0,null,["$1","$0"],["fb","kU"],1,0)
r(m,"gf8",0,0,null,["$1","$0"],["f9","kR"],1,0)
q(m,"gkP","kQ",8)
q(m,"gkS","kT",8)
r(m=E.e2.prototype,"gdA",0,0,null,["$1","$0"],["dC","dB"],1,0)
p(m,"gla","fh",3)
o(m=X.e9.prototype,"gih","ii",12)
o(m,"gi3","i4",12)
o(m,"gi9","ia",4)
o(m,"gil","im",29)
o(m,"gij","ik",29)
o(m,"giq","ir",4)
o(m,"giu","iv",4)
o(m,"gie","ig",4)
o(m,"gis","it",4)
o(m,"gib","ic",4)
o(m,"giw","ix",45)
o(m,"giy","iz",12)
o(m,"giO","iP",11)
o(m,"giK","iL",11)
o(m,"giM","iN",11)
r(D.bk.prototype,"gh7",0,0,null,["$1","$0"],["aI","h8"],1,0)
r(m=D.ds.prototype,"gdZ",0,0,null,["$1","$0"],["e_","io"],1,0)
o(m,"giA","iB",38)
q(m,"ghY","hZ",24)
q(m,"giE","iF",24)
n(V.Q.prototype,"gm","d6",23)
n(V.D.prototype,"gm","d6",23)
r(m=U.cf.prototype,"gaY",0,0,null,["$1","$0"],["K","ad"],1,0)
q(m,"ghe","hf",20)
q(m,"giC","iD",20)
r(m=U.ea.prototype,"gaY",0,0,null,["$1","$0"],["K","ad"],1,0)
o(m,"gcn","co",2)
o(m,"gcp","cq",2)
o(m,"gcr","cs",2)
r(m=U.eb.prototype,"gaY",0,0,null,["$1","$0"],["K","ad"],1,0)
o(m,"gcn","co",2)
o(m,"gcp","cq",2)
o(m,"gcr","cs",2)
o(m,"ghS","hT",2)
o(m,"ghU","hV",2)
o(m,"gjr","js",2)
o(m,"gjp","jq",2)
o(m,"gjn","jo",2)
o(U.ec.prototype,"ghW","hX",2)
r(m=M.d9.prototype,"ga1",0,0,null,["$1","$0"],["a2","ba"],1,0)
q(m,"giG","iH",19)
q(m,"giI","iJ",19)
r(M.db.prototype,"ga1",0,0,null,["$1","$0"],["a2","ba"],1,0)
r(m=M.df.prototype,"ga1",0,0,null,["$1","$0"],["a2","ba"],1,0)
q(m,"gi5","i6",8)
q(m,"gi7","i8",8)
r(m=O.dy.prototype,"gaV",0,0,null,["$1","$0"],["X","bb"],1,0)
r(m,"gj1",0,0,null,["$1","$0"],["e4","j2"],1,0)
q(m,"gi_","i0",15)
q(m,"gi1","i2",15)
r(O.cj.prototype,"gaV",0,0,null,["$1","$0"],["X","bb"],1,0)
r(O.dQ.prototype,"gaV",0,0,null,["$1","$0"],["X","bb"],1,0)
r(X.dG.prototype,"ghj",0,0,null,["$1","$0"],["al","hk"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.M,null)
s(P.M,[H.jO,J.ae,J.ap,P.en,P.l,H.ci,P.aQ,H.bG,H.cH,H.eT,H.fY,H.ht,P.bl,H.c9,H.es,P.bK,H.fr,H.ft,H.fn,P.et,P.b_,P.aD,P.eg,P.hf,P.cu,P.hg,P.aW,P.ai,P.iU,P.iz,P.bT,P.em,P.U,P.iL,P.fz,P.bC,P.fh,P.iS,P.iQ,P.N,P.aj,P.ah,P.aP,P.fR,P.dT,P.ej,P.fc,P.bm,P.a,P.J,P.E,P.at,P.f,P.af,P.bU,P.hJ,P.iC,W.eV,W.bv,W.av,W.dE,W.er,W.iG,W.dg,W.ay,W.iy,W.ez,P.iD,P.ew,P.it,P.O,O.Z,O.ck,E.eN,E.ak,E.fZ,E.e2,Z.ee,Z.ef,Z.c8,Z.bn,Z.aY,D.eQ,D.bE,D.w,X.d8,X.dq,X.fp,X.fw,X.ax,X.fI,X.hr,X.e9,D.bk,D.a2,D.dH,D.dS,D.e_,D.e0,D.e1,V.a_,V.ad,V.f3,V.dz,V.aq,V.a0,V.S,V.as,V.dL,V.Q,V.D,U.ea,U.eb,U.ec,M.db,M.df,M.az,A.d5,A.eJ,A.fF,A.cA,A.cE,A.cC,A.cF,A.cD,A.cG,A.bD,A.e5,A.hD,F.a4,F.f7,F.b6,F.fq,F.br,F.dP,F.h6,F.h7,F.h8,F.a8,F.hS,F.hT,F.hW,F.hY,F.hZ,F.i_,O.bs,O.cj,T.hm,V.b0,V.aw,V.dw,V.fX,V.h4,V.ct,V.e3,V.cy,V.hp,X.cv,X.bz,X.fi,X.dG,V.bi,V.fV,V.h9])
s(J.ae,[J.fm,J.dn,J.dp,J.aH,J.bq,J.b4,H.bM,W.bF,W.bB,W.eh,W.eY,W.dd,W.de,W.n,W.dj,W.ek,W.b3,W.du,W.ep,W.dJ,W.aK,W.eu,W.eA,P.d6,P.dh,P.dI,P.dM,P.bR,P.dO,P.dX,P.e6])
s(J.dp,[J.fS,J.bu,J.b5])
t(J.jN,J.aH)
s(J.bq,[J.dm,J.dl])
t(P.fv,P.en)
s(P.fv,[H.e7,W.i9,W.am,P.f8])
t(H.t,H.e7)
s(P.l,[H.f0,H.fA,H.cJ])
s(H.f0,[H.bJ,H.fs])
s(P.aQ,[H.fB,H.i3])
t(H.fC,H.bJ)
t(H.eU,H.eT)
s(P.bl,[H.fQ,H.fo,H.hH,H.hv,H.eP,H.h2,P.dF,P.aG,P.hI,P.hF,P.bS,P.eS,P.eW])
s(H.c9,[H.jA,H.hk,H.jc,H.jd,H.je,P.i5,P.i4,P.i6,P.i7,P.iK,P.iJ,P.ig,P.ik,P.ih,P.ii,P.ij,P.io,P.ip,P.im,P.il,P.hh,P.hi,P.j1,P.iw,P.iv,P.ix,P.fu,P.fy,P.iR,P.eZ,P.f_,P.hN,P.hK,P.hL,P.hM,P.iM,P.iN,P.iP,P.iO,P.iY,P.iX,P.iZ,P.j_,W.f1,W.ie,W.fO,W.fN,W.iA,W.iB,W.iI,W.iT,P.iF,P.j3,P.f9,P.fa,E.h_,E.h0,E.h1,E.ho,D.f5,D.f6,F.iV,F.j5,F.j7,F.j8,F.j9,F.jx,F.jy,F.jz,F.jg,F.j6,F.i1,F.i0,F.hU,F.hV,T.hn,V.jw,V.fW,V.hb,V.ha,V.hc,V.jk,V.jl,V.jj,V.jm,V.jn,V.jo,V.ji,V.jp,V.jq,V.jh,V.jr,V.js,V.jt])
s(H.hk,[H.he,H.c6])
t(P.fx,P.bK)
s(P.fx,[H.aJ,W.i8])
t(H.dA,H.bM)
s(H.dA,[H.cN,H.cP])
t(H.cO,H.cN)
t(H.dB,H.cO)
t(H.cQ,H.cP)
t(H.dC,H.cQ)
s(H.dC,[H.fJ,H.fK,H.fL,H.fM,H.dD,H.cn])
t(P.iu,P.iU)
t(P.is,P.iz)
t(P.ex,P.fz)
t(P.e8,P.ex)
s(P.bC,[P.eL,P.f2])
t(P.bj,P.hg)
s(P.bj,[P.eM,P.fg,P.hQ,P.hP])
t(P.hO,P.f2)
s(P.ah,[P.o,P.m])
s(P.aG,[P.bQ,P.fj])
t(P.ia,P.bU)
s(W.bF,[W.B,W.cK])
s(W.B,[W.P,W.bh,W.cb,W.cL])
s(W.P,[W.x,P.p])
s(W.x,[W.d3,W.eI,W.c5,W.bg,W.bA,W.aA,W.fb,W.di,W.cg,W.ch,W.dr,W.cl,W.h3,W.aV,W.dV,W.dW,W.hj,W.cw])
t(W.ca,W.eh)
t(W.el,W.ek)
t(W.bH,W.el)
t(W.dk,W.cb)
t(W.bt,W.n)
s(W.bt,[W.aR,W.aa,W.aL])
t(W.eq,W.ep)
t(W.co,W.eq)
t(W.ev,W.eu)
t(W.hs,W.ev)
t(W.i2,W.cl)
t(W.aZ,W.aa)
t(W.ei,W.de)
t(W.eB,W.eA)
t(W.eo,W.eB)
t(W.ib,W.i8)
t(W.ic,P.hf)
t(W.jX,W.ic)
t(W.id,P.cu)
t(W.iH,W.er)
t(P.iE,P.iD)
t(P.aB,P.it)
t(P.cr,P.p)
s(E.eN,[Z.d7,A.cs,T.cx])
s(D.w,[D.bo,D.bp,D.C,X.fU])
s(X.fU,[X.dv,X.b7,X.cm,X.e4])
s(O.Z,[D.ds,U.cf,M.d9])
s(D.eQ,[U.eR,U.ab])
s(U.ab,[U.da,U.dN])
s(A.cs,[A.dx,A.dR])
s(A.e5,[A.K,A.hz,A.hA,A.hC,A.hx,A.W,A.hy,A.I,A.hB,A.hE,A.cB,A.au,A.al,A.ag])
t(F.hd,F.f7)
t(F.hw,F.fq)
t(F.hX,F.hY)
t(F.fP,F.hZ)
s(O.bs,[O.dy,O.dQ])
s(O.cj,[O.fD,O.fE,O.aS])
s(O.aS,[O.fG,O.fH])
s(T.cx,[T.dY,T.dZ])
t(T.hl,T.dY)
s(V.dw,[V.ar,V.cz])
s(X.cv,[X.eK,X.fd])
s(V.bi,[V.eX,V.fe,V.ff,V.fT])
u(H.e7,H.cH)
u(H.cN,P.U)
u(H.cO,H.bG)
u(H.cP,P.U)
u(H.cQ,H.bG)
u(P.en,P.U)
u(P.ex,P.iL)
u(W.eh,W.eV)
u(W.ek,P.U)
u(W.el,W.av)
u(W.ep,P.U)
u(W.eq,W.av)
u(W.eu,P.U)
u(W.ev,W.av)
u(W.eA,P.U)
u(W.eB,W.av)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bg.prototype
C.q=W.bA.prototype
C.D=W.bB.prototype
C.k=W.aA.prototype
C.U=W.dd.prototype
C.W=W.di.prototype
C.X=W.dj.prototype
C.z=W.dk.prototype
C.Z=J.ae.prototype
C.a=J.aH.prototype
C.a_=J.dl.prototype
C.f=J.dm.prototype
C.r=J.dn.prototype
C.e=J.bq.prototype
C.c=J.b4.prototype
C.a6=J.b5.prototype
C.G=W.dr.prototype
C.ac=W.co.prototype
C.M=J.fS.prototype
C.N=W.dJ.prototype
C.b=P.bR.prototype
C.x=W.aV.prototype
C.o=W.dV.prototype
C.n=W.dW.prototype
C.C=J.bu.prototype
C.O=W.aZ.prototype
C.P=W.cK.prototype
C.R=new P.eM(!1)
C.Q=new P.eL(C.R)
C.S=new P.fR()
C.T=new P.hQ()
C.l=new P.iu()
C.d=new A.bD(0,"ColorSourceType.None")
C.j=new A.bD(1,"ColorSourceType.Solid")
C.h=new A.bD(2,"ColorSourceType.Texture2D")
C.i=new A.bD(3,"ColorSourceType.TextureCube")
C.y=new P.aP(0)
C.V=new P.aP(5e6)
C.Y=new P.fh("element",!0,!1,!1,!1)
C.a0=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a1=function(hooks) {
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
C.E=function(hooks) { return hooks; }

C.a2=function(getTagFallback) {
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
C.a3=function() {
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
C.a4=function(hooks) {
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
C.a5=function(hooks) {
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
C.F=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=H.b(u([127,2047,65535,1114111]),[P.m])
C.t=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.m])
C.a7=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.u=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.v=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a8=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.I=H.b(u([]),[P.f])
C.a9=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.J=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.w=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.K=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.aa=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.L=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.A=H.b(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.B=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.ab=new H.eU(0,{},C.I,[P.f,P.f])
C.m=new P.hO(!1)})();(function staticFields(){$.aO=0
$.c7=null
$.kn=null
$.k0=!1
$.lB=null
$.ls=null
$.lH=null
$.ja=null
$.jf=null
$.k9=null
$.bW=null
$.cU=null
$.cV=null
$.k1=!1
$.X=C.l
$.b2=null
$.jK=null
$.kt=null
$.ks=null
$.kH=null
$.kL=null
$.cp=null
$.kQ=null
$.l3=null
$.l7=null
$.l5=null
$.l6=null
$.hR=null
$.l4=null
$.n_="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.mZ="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.kK=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oj","lM",function(){return H.lA("_$dart_dartClosure")})
u($,"ok","ke",function(){return H.lA("_$dart_js")})
u($,"op","lN",function(){return H.aX(H.hu({
toString:function(){return"$receiver$"}}))})
u($,"oq","lO",function(){return H.aX(H.hu({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"or","lP",function(){return H.aX(H.hu(null))})
u($,"os","lQ",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ov","lT",function(){return H.aX(H.hu(void 0))})
u($,"ow","lU",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ou","lS",function(){return H.aX(H.kZ(null))})
u($,"ot","lR",function(){return H.aX(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oy","lW",function(){return H.aX(H.kZ(void 0))})
u($,"ox","lV",function(){return H.aX(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oP","kf",function(){return P.nb()})
u($,"oV","d1",function(){return[]})
u($,"oB","lX",function(){return P.n8()})
u($,"oQ","m0",function(){return H.mG(H.bV(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"oT","m2",function(){return P.mV("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"oU","m3",function(){return P.nA()})
u($,"oR","m1",function(){return P.kA(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"oS","kg",function(){return P.kz(P.f,P.bm)})
u($,"oI","m_",function(){return Z.aC(0)})
u($,"oC","lY",function(){return Z.aC(511)})
u($,"oK","aN",function(){return Z.aC(1)})
u($,"oJ","bd",function(){return Z.aC(2)})
u($,"oE","bc",function(){return Z.aC(4)})
u($,"oL","be",function(){return Z.aC(8)})
u($,"oM","bf",function(){return Z.aC(16)})
u($,"oF","d_",function(){return Z.aC(32)})
u($,"oG","d0",function(){return Z.aC(64)})
u($,"oH","lZ",function(){return Z.aC(96)})
u($,"oN","c4",function(){return Z.aC(128)})
u($,"oD","bb",function(){return Z.aC(256)})
u($,"oi","lL",function(){return new V.f3(1e-9)})
u($,"oh","G",function(){return $.lL()})})()
var v={mangledGlobalNames:{m:"int",o:"double",ah:"num",f:"String",N:"bool",E:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.E},{func:1,ret:-1,opt:[D.w]},{func:1,ret:-1,args:[D.w]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aa]},{func:1,ret:P.E,args:[F.a8,P.o,P.o]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.E,args:[,,]},{func:1,ret:-1,args:[P.m,[P.l,E.ak]]},{func:1,ret:P.E,args:[D.w]},{func:1,ret:P.E,args:[F.a4]},{func:1,ret:-1,args:[W.aL]},{func:1,ret:-1,args:[W.n]},{func:1,ret:P.E,args:[W.n]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.m,[P.l,V.aq]]},{func:1,ret:P.f,args:[P.m]},{func:1,ret:V.S,args:[P.o]},{func:1,ret:P.o,args:[P.o]},{func:1,ret:-1,args:[P.m,[P.l,M.az]]},{func:1,ret:-1,args:[P.m,[P.l,U.ab]]},{func:1,ret:P.f,args:[P.f]},{func:1,args:[,]},{func:1,ret:P.o},{func:1,ret:-1,args:[P.m,[P.l,D.a2]]},{func:1,ret:P.N,args:[W.B]},{func:1,ret:P.N,args:[W.P,P.f,P.f,W.bv]},{func:1,ret:P.N,args:[W.ay]},{func:1,ret:P.N,args:[P.f]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.E,args:[P.ah]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.B,W.B]},{func:1,args:[W.n]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.N,args:[[P.l,D.a2]]},{func:1,ret:P.O,args:[P.m]},{func:1,ret:P.E,args:[P.f,,]},{func:1,ret:P.E,args:[P.f]},{func:1,args:[,P.f]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,args:[P.f]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.m]},{func:1,ret:[P.J,P.f,P.f],args:[[P.J,P.f,P.f],P.f]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:[P.aD,,],args:[,]},{func:1,ret:P.E,args:[P.aW]},{func:1,ret:P.N,args:[V.bi]},{func:1,ret:P.E,args:[,],opt:[P.at]},{func:1,ret:W.P,args:[W.B]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.ae,MediaError:J.ae,Navigator:J.ae,NavigatorConcurrentHardware:J.ae,NavigatorUserMediaError:J.ae,OverconstrainedError:J.ae,PositionError:J.ae,WebGLActiveInfo:J.ae,WebGL2RenderingContext:J.ae,SQLError:J.ae,ArrayBufferView:H.bM,Float32Array:H.dB,Int16Array:H.fJ,Int32Array:H.fK,Int8Array:H.fL,Uint32Array:H.fM,Uint8ClampedArray:H.dD,CanvasPixelArray:H.dD,Uint8Array:H.cn,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLLIElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,HTMLAnchorElement:W.d3,HTMLAreaElement:W.eI,HTMLBaseElement:W.c5,HTMLBodyElement:W.bg,HTMLCanvasElement:W.bA,CanvasRenderingContext2D:W.bB,CDATASection:W.bh,CharacterData:W.bh,Comment:W.bh,ProcessingInstruction:W.bh,Text:W.bh,CSSStyleDeclaration:W.ca,MSStyleCSSProperties:W.ca,CSS2Properties:W.ca,HTMLDivElement:W.aA,XMLDocument:W.cb,Document:W.cb,DOMException:W.eY,DOMImplementation:W.dd,DOMRectReadOnly:W.de,Element:W.P,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,EventTarget:W.bF,HTMLFormElement:W.fb,HTMLHeadElement:W.di,History:W.dj,HTMLCollection:W.bH,HTMLFormControlsCollection:W.bH,HTMLOptionsCollection:W.bH,HTMLDocument:W.dk,ImageData:W.b3,HTMLImageElement:W.cg,HTMLInputElement:W.ch,KeyboardEvent:W.aR,HTMLLabelElement:W.dr,Location:W.du,HTMLAudioElement:W.cl,HTMLMediaElement:W.cl,PointerEvent:W.aa,MouseEvent:W.aa,DragEvent:W.aa,DocumentFragment:W.B,ShadowRoot:W.B,DocumentType:W.B,Node:W.B,NodeList:W.co,RadioNodeList:W.co,Range:W.dJ,HTMLSelectElement:W.h3,HTMLTableCellElement:W.aV,HTMLTableDataCellElement:W.aV,HTMLTableHeaderCellElement:W.aV,HTMLTableElement:W.dV,HTMLTableRowElement:W.dW,HTMLTableSectionElement:W.hj,HTMLTemplateElement:W.cw,Touch:W.aK,TouchEvent:W.aL,TouchList:W.hs,CompositionEvent:W.bt,FocusEvent:W.bt,TextEvent:W.bt,UIEvent:W.bt,HTMLVideoElement:W.i2,WheelEvent:W.aZ,Window:W.cK,DOMWindow:W.cK,Attr:W.cL,ClientRect:W.ei,DOMRect:W.ei,NamedNodeMap:W.eo,MozNamedAttrMap:W.eo,SVGScriptElement:P.cr,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,WebGLBuffer:P.d6,WebGLFramebuffer:P.dh,WebGLProgram:P.dI,WebGLRenderbuffer:P.dM,WebGLRenderingContext:P.bR,WebGLShader:P.dO,WebGLTexture:P.dX,WebGLUniformLocation:P.e6})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.dA.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.dB.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.dC.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(V.lE,[])
else V.lE([])})})()
//# sourceMappingURL=test.dart.js.map
