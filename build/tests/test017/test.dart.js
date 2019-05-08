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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.k0(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jI:function jI(a){this.a=a},
j8:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
fk:function(){return new P.bW("No element")},
mh:function(){return new P.bW("Too many elements")},
mg:function(){return new P.bW("Too few elements")},
u:function u(a){this.a=a},
f0:function f0(){},
bN:function bN(){},
cn:function cn(a,b,c,d){var _=this
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
cP:function cP(a,b,c){this.a=a
this.b=b
this.$ti=c},
i1:function i1(a,b,c){this.a=a
this.b=b
this.$ti=c},
bK:function bK(){},
cM:function cM(){},
e9:function e9(){},
m8:function(){throw H.c(P.Z("Cannot modify unmodifiable Map"))},
c9:function(a){var u,t
u=H.E(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nK:function(a){return v.types[H.a8(a)]},
nR:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iaK},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aq(a)
if(typeof u!=="string")throw H.c(H.ap(a))
return u},
mF:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fl(u)
t=u[0]
s=u[1]
return new H.fY(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cv:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mC:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.E(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a9(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.K(r,p)|32)>s)return}return parseInt(a,b)},
bS:function(a){return H.mt(a)+H.jY(H.bA(a),0,null)},
mt:function(a){var u,t,s,r,q,p,o,n,m
u=J.T(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$ibx){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c9(r.length>1&&C.c.K(r,0)===36?C.c.aw(r,1):r)},
mu:function(){if(!!self.location)return self.location.href
return},
kC:function(a){var u,t,s,r,q
H.eG(a)
u=J.aH(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mD:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.ap(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.b_(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.ap(r))}return H.kC(u)},
kD:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ap(s))
if(s<0)throw H.c(H.ap(s))
if(s>65535)return H.mD(a)}return H.kC(a)},
mE:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bT:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.b_(u,10))>>>0,56320|u&1023)}}throw H.c(P.a9(a,0,1114111,null,null))},
bR:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mB:function(a){var u=H.bR(a).getFullYear()+0
return u},
mz:function(a){var u=H.bR(a).getMonth()+1
return u},
mv:function(a){var u=H.bR(a).getDate()+0
return u},
mw:function(a){var u=H.bR(a).getHours()+0
return u},
my:function(a){var u=H.bR(a).getMinutes()+0
return u},
mA:function(a){var u=H.bR(a).getSeconds()+0
return u},
mx:function(a){var u=H.bR(a).getMilliseconds()+0
return u},
B:function(a){throw H.c(H.ap(a))},
e:function(a,b){if(a==null)J.aH(a)
throw H.c(H.c4(a,b))},
c4:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
u=H.a8(J.aH(a))
if(!(b<0)){if(typeof u!=="number")return H.B(u)
t=b>=u}else t=!0
if(t)return P.bM(b,a,"index",null,u)
return P.dP(b,"index",null)},
nD:function(a,b,c){if(a>c)return new P.bU(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bU(a,c,!0,b,"end","Invalid value")
return new P.aI(!0,b,"end",null)},
ap:function(a){return new P.aI(!0,a,null,null)},
ny:function(a){if(typeof a!=="number")throw H.c(H.ap(a))
return a},
c:function(a){var u
if(a==null)a=new P.dK()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lw})
u.name=""}else u.toString=H.lw
return u},
lw:function(){return J.aq(this.dartException)},
p:function(a){throw H.c(a)},
A:function(a){throw H.c(P.b5(a))},
b0:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hs:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kM:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kx:function(a,b){return new H.fQ(a,b==null?null:b.method)},
jJ:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fo(a,t,u?null:b.receiver)},
af:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jw(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.b_(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jJ(H.j(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kx(H.j(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lz()
p=$.lA()
o=$.lB()
n=$.lC()
m=$.lF()
l=$.lG()
k=$.lE()
$.lD()
j=$.lI()
i=$.lH()
h=q.ao(t)
if(h!=null)return u.$1(H.jJ(H.E(t),h))
else{h=p.ao(t)
if(h!=null){h.method="call"
return u.$1(H.jJ(H.E(t),h))}else{h=o.ao(t)
if(h==null){h=n.ao(t)
if(h==null){h=m.ao(t)
if(h==null){h=l.ao(t)
if(h==null){h=k.ao(t)
if(h==null){h=n.ao(t)
if(h==null){h=j.ao(t)
if(h==null){h=i.ao(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kx(H.E(t),h))}}return u.$1(new H.hF(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dX()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aI(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dX()
return a},
c7:function(a){var u
if(a==null)return new H.et(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.et(a)},
nG:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.t(0,a[t],a[s])}return b},
nQ:function(a,b,c,d,e,f){H.d(a,"$ibp")
switch(H.a8(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.q("Unsupported number of arguments for wrapped closure"))},
c3:function(a,b){var u
H.a8(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nQ)
a.$identity=u
return u},
m7:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.T(d).$ia){u.$reflectionInfo=d
s=H.mF(u).r}else s=d
r=e?Object.create(new H.hd().constructor.prototype):Object.create(new H.cc(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aR
if(typeof p!=="number")return p.n()
$.aR=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kl(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nK,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kj:H.jA
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kl(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
m4:function(a,b,c,d){var u=H.jA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kl:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.m6(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.m4(t,!r,u,b)
if(t===0){r=$.aR
if(typeof r!=="number")return r.n()
$.aR=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cd
if(q==null){q=H.eO("self")
$.cd=q}return new Function(r+H.j(q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aR
if(typeof r!=="number")return r.n()
$.aR=r+1
o+=r
r="return function("+o+"){return this."
q=$.cd
if(q==null){q=H.eO("self")
$.cd=q}return new Function(r+H.j(q)+"."+H.j(u)+"("+o+");}")()},
m5:function(a,b,c,d){var u,t
u=H.jA
t=H.kj
switch(b?-1:a){case 0:throw H.c(H.mJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
m6:function(a,b){var u,t,s,r,q,p,o,n
u=$.cd
if(u==null){u=H.eO("self")
$.cd=u}t=$.ki
if(t==null){t=H.eO("receiver")
$.ki=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.m5(r,!p,s,b)
if(r===1){u="return function(){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+");"
t=$.aR
if(typeof t!=="number")return t.n()
$.aR=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+", "+n+");"
t=$.aR
if(typeof t!=="number")return t.n()
$.aR=t+1
return new Function(u+t+"}")()},
k0:function(a,b,c,d,e,f,g){return H.m7(a,b,H.a8(c),d,!!e,!!f,g)},
jA:function(a){return a.a},
kj:function(a){return a.c},
eO:function(a){var u,t,s,r,q
u=new H.cc("self","target","receiver","name")
t=J.fl(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aO(a,"String"))},
nE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aO(a,"double"))},
nX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aO(a,"num"))},
jZ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aO(a,"bool"))},
a8:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aO(a,"int"))},
lt:function(a,b){throw H.c(H.aO(a,H.c9(H.E(b).substring(2))))},
nZ:function(a,b){throw H.c(H.m3(a,H.c9(H.E(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.lt(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.nZ(a,b)},
eG:function(a){if(a==null)return a
if(!!J.T(a).$ia)return a
throw H.c(H.aO(a,"List<dynamic>"))},
lq:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ia)return a
if(u[b])return a
H.lt(a,b)},
lm:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a8(u)]
else return a.$S()}return},
eD:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.lm(J.T(a))
if(u==null)return!1
return H.l9(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.jV)return a
$.jV=!0
try{if(H.eD(a,b))return a
u=H.jq(b)
t=H.aO(a,u)
throw H.c(t)}finally{$.jV=!1}},
k2:function(a,b){if(a!=null&&!H.k_(a,b))H.p(H.aO(a,H.jq(b)))
return a},
aO:function(a,b){return new H.ht("TypeError: "+P.f4(a)+": type '"+H.le(a)+"' is not a subtype of type '"+b+"'")},
m3:function(a,b){return new H.eP("CastError: "+P.f4(a)+": type '"+H.le(a)+"' is not a subtype of type '"+b+"'")},
le:function(a){var u,t
u=J.T(a)
if(!!u.$icf){t=H.lm(u)
if(t!=null)return H.jq(t)
return"Closure"}return H.bS(a)},
o2:function(a){throw H.c(new P.eW(H.E(a)))},
mJ:function(a){return new H.h2(a)},
ln:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bA:function(a){if(a==null)return
return a.$ti},
oO:function(a,b,c){return H.c8(a["$a"+H.j(c)],H.bA(b))},
d3:function(a,b,c,d){var u
H.E(c)
H.a8(d)
u=H.c8(a["$a"+H.j(c)],H.bA(b))
return u==null?null:u[d]},
aa:function(a,b,c){var u
H.E(b)
H.a8(c)
u=H.c8(a["$a"+H.j(b)],H.bA(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.a8(b)
u=H.bA(a)
return u==null?null:u[b]},
jq:function(a){return H.bz(a,null)},
bz:function(a,b){var u,t
H.h(b,"$ia",[P.f],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c9(a[0].name)+H.jY(a,1,b)
if(typeof a=="function")return H.c9(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a8(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.nn(a,b)
if('futureOr' in a)return"FutureOr<"+H.bz("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nn:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
if(l!=null&&l!==P.M)o+=" extends "+H.bz(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bz(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bz(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bz(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.nF(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.E(u[g])
i=i+h+H.bz(d[c],b)+(" "+H.j(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jY:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.f],"$aa")
if(a==null)return""
u=new P.ag("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bz(p,c)}return"<"+u.i(0)+">"},
c8:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
d1:function(a,b,c,d){var u,t
H.E(b)
H.eG(c)
H.E(d)
if(a==null)return!1
u=H.bA(a)
t=J.T(a)
if(t[b]==null)return!1
return H.lh(H.c8(t[d],u),null,c,null)},
h:function(a,b,c,d){H.E(b)
H.eG(c)
H.E(d)
if(a==null)return a
if(H.d1(a,b,c,d))return a
throw H.c(H.aO(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c9(b.substring(2))+H.jY(c,0,null),v.mangledGlobalNames)))},
lh:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aG(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aG(a[t],b,c[t],d))return!1
return!0},
oM:function(a,b,c){return a.apply(b,H.c8(J.T(b)["$a"+H.j(c)],H.bA(b)))},
lp:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="M"||a.name==="D"||a===-1||a===-2||H.lp(u)}return!1},
k_:function(a,b){var u,t
if(a==null)return b==null||b.name==="M"||b.name==="D"||b===-1||b===-2||H.lp(b)
if(b==null||b===-1||b.name==="M"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.k_(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eD(a,b)}u=J.T(a).constructor
t=H.bA(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aG(u,null,b,null)},
z:function(a,b){if(a!=null&&!H.k_(a,b))throw H.c(H.aO(a,H.jq(b)))
return a},
aG:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="M"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="M"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aG(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="D")return!0
if('func' in c)return H.l9(a,b,c,d)
if('func' in a)return c.name==="bp"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aG("type" in a?a.type:null,b,s,d)
else if(H.aG(a,b,s,d))return!0
else{if(!('$i'+"cj" in t.prototype))return!1
r=t.prototype["$a"+"cj"]
q=H.c8(r,u?a.slice(1):null)
return H.aG(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lh(H.c8(m,u),b,p,d)},
l9:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aG(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aG(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aG(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aG(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nW(h,b,g,d)},
nW:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aG(c[r],d,a[r],b))return!1}return!0},
oN:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
nU:function(a){var u,t,s,r,q,p
u=H.E($.lo.$1(a))
t=$.j7[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jc[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.E($.lg.$2(a,u))
if(u!=null){t=$.j7[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jc[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jp(s)
$.j7[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jc[u]=s
return s}if(q==="-"){p=H.jp(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.ls(a,s)
if(q==="*")throw H.c(P.hE(u))
if(v.leafTags[u]===true){p=H.jp(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.ls(a,s)},
ls:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.k5(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jp:function(a){return J.k5(a,!1,null,!!a.$iaK)},
nV:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jp(u)
else return J.k5(u,c,null,null)},
nO:function(){if(!0===$.k4)return
$.k4=!0
H.nP()},
nP:function(){var u,t,s,r,q,p,o,n
$.j7=Object.create(null)
$.jc=Object.create(null)
H.nN()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lu.$1(q)
if(p!=null){o=H.nV(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nN:function(){var u,t,s,r,q,p,o
u=C.a3()
u=H.c2(C.a0,H.c2(C.a5,H.c2(C.E,H.c2(C.E,H.c2(C.a4,H.c2(C.a1,H.c2(C.a2(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lo=new H.j9(q)
$.lg=new H.ja(p)
$.lu=new H.jb(o)},
c2:function(a,b){return a(b)||b},
mj:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a2("Illegal RegExp pattern ("+String(r)+")",a,null))},
o1:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
k8:function(a,b,c){var u,t,s
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
hr:function hr(a,b,c,d,e,f){var _=this
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
hF:function hF(a){this.a=a},
jw:function jw(a){this.a=a},
et:function et(a){this.a=a
this.b=null},
cf:function cf(){},
hj:function hj(){},
hd:function hd(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ht:function ht(a){this.a=a},
eP:function eP(a){this.a=a},
h2:function h2(a){this.a=a},
aL:function aL(a){var _=this
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
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
fn:function fn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c0:function(a){return a},
ms:function(a){return new Int8Array(a)},
bd:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c4(b,a))},
nl:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nD(a,b,c))
return b},
bQ:function bQ(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
dI:function dI(){},
cs:function cs(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
nF:function(a){return J.kr(a?Object.keys(a):[],null)},
nY:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k5:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eE:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.k4==null){H.nO()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.hE("Return interceptor for "+H.j(t(a,u))))}r=a.constructor
q=r==null?null:r[$.k9()]
if(q!=null)return q
q=H.nU(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.M
if(t===Object.prototype)return C.M
if(typeof r=="function"){Object.defineProperty(r,$.k9(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
mi:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.jz(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a9(a,0,4294967295,"length",null))
return J.kr(new Array(a),b)},
kr:function(a,b){return J.fl(H.b(a,[b]))},
fl:function(a){H.eG(a)
a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ds.prototype
return J.dr.prototype}if(typeof a=="string")return J.b8.prototype
if(a==null)return J.dt.prototype
if(typeof a=="boolean")return J.fm.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.M)return a
return J.eE(a)},
nH:function(a){if(typeof a=="number")return J.bt.prototype
if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.M)return a
return J.eE(a)},
c6:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.M)return a
return J.eE(a)},
k3:function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.M)return a
return J.eE(a)},
nI:function(a){if(typeof a=="number")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bx.prototype
return a},
nJ:function(a){if(typeof a=="number")return J.bt.prototype
if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bx.prototype
return a},
d2:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bx.prototype
return a},
a7:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.M)return a
return J.eE(a)},
lR:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nH(a).n(a,b)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).B(a,b)},
kc:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nJ(a).w(a,b)},
lS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.nI(a).u(a,b)},
lT:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nR(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c6(a).j(a,b)},
lU:function(a,b,c,d){return J.a7(a).hh(a,b,c,d)},
lV:function(a,b){return J.d2(a).K(a,b)},
eH:function(a,b){return J.a7(a).iT(a,b)},
jx:function(a,b,c){return J.a7(a).iX(a,b,c)},
kd:function(a,b){return J.a7(a).H(a,b)},
lW:function(a,b){return J.d2(a).a5(a,b)},
eI:function(a,b){return J.k3(a).af(a,b)},
lX:function(a,b,c,d){return J.a7(a).kx(a,b,c,d)},
lY:function(a){return J.a7(a).gk5(a)},
ke:function(a){return J.a7(a).gcT(a)},
d7:function(a){return J.T(a).gL(a)},
bB:function(a){return J.k3(a).gU(a)},
aH:function(a){return J.c6(a).gm(a)},
lZ:function(a){return J.a7(a).gli(a)},
jy:function(a,b){return J.a7(a).b7(a,b)},
kf:function(a){return J.k3(a).l8(a)},
m_:function(a,b){return J.a7(a).lc(a,b)},
m0:function(a,b,c){return J.a7(a).fL(a,b,c)},
m1:function(a,b,c){return J.d2(a).A(a,b,c)},
m2:function(a){return J.d2(a).lo(a)},
aq:function(a){return J.T(a).i(a)},
ac:function ac(){},
fm:function fm(){},
dt:function dt(){},
du:function du(){},
fS:function fS(){},
bx:function bx(){},
b9:function b9(){},
aJ:function aJ(a){this.$ti=a},
jH:function jH(a){this.$ti=a},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bt:function bt(){},
ds:function ds(){},
dr:function dr(){},
b8:function b8(){}},P={
mY:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.nv()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c3(new P.i3(u),1)).observe(t,{childList:true})
return new P.i2(u,t,s)}else if(self.setImmediate!=null)return P.nw()
return P.nx()},
mZ:function(a){self.scheduleImmediate(H.c3(new P.i4(H.k(a,{func:1,ret:-1})),0))},
n_:function(a){self.setImmediate(H.c3(new P.i5(H.k(a,{func:1,ret:-1})),0))},
n0:function(a){P.jM(C.y,H.k(a,{func:1,ret:-1}))},
jM:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.f.a9(a.a,1000)
return P.n6(u<0?0:u,b)},
kL:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.b_]})
u=C.f.a9(a.a,1000)
return P.n7(u<0?0:u,b)},
n6:function(a,b){var u=new P.eu(!0)
u.hd(a,b)
return u},
n7:function(a,b){var u=new P.eu(!1)
u.he(a,b)
return u},
n1:function(a,b){var u,t,s
b.a=1
try{a.fo(new P.ie(b),new P.ig(b),null)}catch(s){u=H.af(s)
t=H.c7(s)
P.o_(new P.ih(b,u,t))}},
kZ:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iaF")
if(u>=4){t=b.cC()
b.a=a.a
b.c=a.c
P.cS(b,t)}else{t=H.d(b.c,"$ib3")
b.a=2
b.c=a
a.ea(t)}},
cS:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$iaj")
t=t.b
p=q.a
o=q.b
t.toString
P.iZ(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cS(u.a,b)}t=u.a
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
if(k){H.d(m,"$iaj")
t=t.b
p=m.a
o=m.b
t.toString
P.iZ(null,null,t,p,o)
return}j=$.Y
if(j!=l)$.Y=l
else j=null
t=b.c
if(t===8)new P.il(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.ik(s,b,m).$0()}else if((t&2)!==0)new P.ij(u,s,b).$0()
if(j!=null)$.Y=j
t=s.b
if(!!J.T(t).$icj){if(t.a>=4){i=H.d(o.c,"$ib3")
o.c=null
b=o.bA(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kZ(t,o)
return}}h=b.b
i=H.d(h.c,"$ib3")
h.c=null
b=h.bA(i)
t=s.a
p=s.b
if(!t){H.z(p,H.t(h,0))
h.a=4
h.c=p}else{H.d(p,"$iaj")
h.a=8
h.c=p}u.a=h
t=h}},
nq:function(a,b){if(H.eD(a,{func:1,args:[P.M,P.av]}))return H.k(a,{func:1,ret:null,args:[P.M,P.av]})
if(H.eD(a,{func:1,args:[P.M]}))return H.k(a,{func:1,ret:null,args:[P.M]})
throw H.c(P.jz(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
np:function(){var u,t
for(;u=$.c1,u!=null;){$.d0=null
t=u.b
$.c1=t
if(t==null)$.d_=null
u.a.$0()}},
nu:function(){$.jW=!0
try{P.np()}finally{$.d0=null
$.jW=!1
if($.c1!=null)$.ka().$1(P.li())}},
ld:function(a){var u=new P.eh(H.k(a,{func:1,ret:-1}))
if($.c1==null){$.d_=u
$.c1=u
if(!$.jW)$.ka().$1(P.li())}else{$.d_.b=u
$.d_=u}},
nt:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.c1
if(u==null){P.ld(a)
$.d0=$.d_
return}t=new P.eh(a)
s=$.d0
if(s==null){t.b=u
$.d0=t
$.c1=t}else{t.b=s.b
s.b=t
$.d0=t
if(t.b==null)$.d_=t}},
o_:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.Y
if(C.l===t){P.j0(null,null,C.l,a)
return}t.toString
P.j0(null,null,t,H.k(t.cO(a),u))},
kK:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.Y
if(t===C.l){t.toString
return P.jM(a,b)}return P.jM(a,H.k(t.cO(b),u))},
mP:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b_]}
H.k(b,u)
t=$.Y
if(t===C.l){t.toString
return P.kL(a,b)}s=t.er(b,P.b_)
$.Y.toString
return P.kL(a,H.k(s,u))},
iZ:function(a,b,c,d,e){var u={}
u.a=d
P.nt(new P.j_(u,e))},
la:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
lb:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.z(e,g)
t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
nr:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
j0:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cO(d):c.k6(d,-1)
P.ld(d)},
i3:function i3(a){this.a=a},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
eu:function eu(a){this.a=a
this.b=null
this.c=0},
iI:function iI(a,b){this.a=a
this.b=b},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b3:function b3(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aF:function aF(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
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
eh:function eh(a){this.a=a
this.b=null},
he:function he(){},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
cz:function cz(){},
hf:function hf(){},
b_:function b_(){},
aj:function aj(a,b){this.a=a
this.b=b},
iS:function iS(){},
j_:function j_(a,b){this.a=a
this.b=b},
is:function is(){},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a,b){this.a=a
this.b=b},
iv:function iv(a,b,c){this.a=a
this.b=b
this.c=c},
ml:function(a,b,c,d,e){return new H.aL([d,e])},
mm:function(a,b,c){H.eG(a)
return H.h(H.nG(a,new H.aL([b,c])),"$iks",[b,c],"$aks")},
kt:function(a,b){return new H.aL([a,b])},
dy:function(a,b,c,d){return new P.iq([d])},
jS:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
n5:function(a,b,c){var u=new P.en(a,b,[c])
u.c=a.e
return u},
mf:function(a,b,c){var u,t
if(P.jX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.f])
t=$.d6()
C.a.h(t,a)
try{P.no(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.kI(b,H.lq(u,"$il"),", ")+c
return t.charCodeAt(0)==0?t:t},
jG:function(a,b,c){var u,t,s
if(P.jX(a))return b+"..."+c
u=new P.ag(b)
t=$.d6()
C.a.h(t,a)
try{s=u
s.a=P.kI(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jX:function(a){var u,t
for(u=0;t=$.d6(),u<t.length;++u)if(a===t[u])return!0
return!1},
no:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.f],"$aa")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.F())return
r=H.j(u.gM())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.F()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gM();++s
if(!u.F()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM();++s
for(;u.F();o=n,n=m){m=u.gM();++s
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
mn:function(a,b,c){var u=P.ml(null,null,null,b,c)
a.a1(0,new P.fu(u,b,c))
return u},
ku:function(a,b){var u,t,s
u=P.dy(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s)u.h(0,H.z(a[s],b))
return u},
jK:function(a){var u,t
u={}
if(P.jX(a))return"{...}"
t=new P.ag("")
try{C.a.h($.d6(),a)
t.a+="{"
u.a=!0
a.a1(0,new P.fy(u,t))
t.a+="}"}finally{u=$.d6()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
iq:function iq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bZ:function bZ(a){this.a=a
this.c=this.b=null},
en:function en(a,b,c){var _=this
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
bO:function bO(){},
iJ:function iJ(){},
fz:function fz(){},
ea:function ea(a,b){this.a=a
this.$ti=b},
ix:function ix(){},
eo:function eo(){},
ey:function ey(){},
mT:function(a,b,c,d){H.h(b,"$ia",[P.m],"$aa")
if(b instanceof Uint8Array)return P.mU(!1,b,c,d)
return},
mU:function(a,b,c,d){var u,t,s
u=$.lJ()
if(u==null)return
t=0===c
if(t&&!0)return P.jP(u,b)
s=b.length
d=P.bc(c,d,s,null,null,null)
if(t&&d===s)return P.jP(u,b)
return P.jP(u,b.subarray(c,d))},
jP:function(a,b){if(P.mW(b))return
return P.mX(a,b)},
mX:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.af(t)}return},
mW:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
mV:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.af(t)}return},
ns:function(a,b,c){var u,t,s
H.h(a,"$ia",[P.m],"$aa")
for(u=J.c6(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.c8()
if((s&127)!==s)return t-b}return c-b},
kh:function(a,b,c,d,e,f){if(C.f.bu(f,4)!==0)throw H.c(P.a2("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a2("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a2("Invalid base64 padding, more than two '=' characters",a,b))},
eL:function eL(a){this.a=a},
eM:function eM(a){this.a=a},
bF:function bF(){},
bm:function bm(){},
f2:function f2(){},
fh:function fh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fg:function fg(a){this.a=a},
hM:function hM(a){this.a=a},
hO:function hO(){},
iQ:function iQ(a){this.b=this.a=0
this.c=a},
hN:function hN(a){this.a=a},
iO:function iO(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
iP:function iP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eF:function(a,b,c){var u
H.k(b,{func:1,ret:P.m,args:[P.f]})
u=H.mC(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a2(a,null,null))},
md:function(a){if(a instanceof H.cf)return a.i(0)
return"Instance of '"+H.bS(a)+"'"},
mo:function(a,b,c,d){var u,t
H.z(b,d)
u=J.mi(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.t(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
mp:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gU(a);s.F();)C.a.h(t,H.z(s.gM(),c))
if(b)return t
return H.h(J.fl(t),"$ia",u,"$aa")},
dY:function(a,b,c){var u,t
u=P.m
H.h(a,"$il",[u],"$al")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iaJ",[u],"$aaJ")
t=a.length
c=P.bc(b,c,t,null,null,null)
return H.kD(b>0||c<t?C.a.fQ(a,b,c):a)}if(!!J.T(a).$ics)return H.mE(a,b,P.bc(b,c,a.length,null,null,null))
return P.mN(a,b,c)},
mN:function(a,b,c){var u,t,s,r
H.h(a,"$il",[P.m],"$al")
if(b<0)throw H.c(P.a9(b,0,J.aH(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.a9(c,b,J.aH(a),null,null))
t=J.bB(a)
for(s=0;s<b;++s)if(!t.F())throw H.c(P.a9(b,0,s,null,null))
r=[]
if(u)for(;t.F();)r.push(t.gM())
else for(s=b;s<c;++s){if(!t.F())throw H.c(P.a9(c,b,s,null,null))
r.push(t.gM())}return H.kD(r)},
mH:function(a,b,c){return new H.fn(a,H.mj(a,!1,!0,!1))},
kI:function(a,b,c){var u=J.bB(b)
if(!u.F())return a
if(c.length===0){do a+=H.j(u.gM())
while(u.F())}else{a+=H.j(u.gM())
for(;u.F();)a=a+c+H.j(u.gM())}return a},
kO:function(){var u=H.mu()
if(u!=null)return P.mS(u,0,null)
throw H.c(P.Z("'Uri.base' is not supported"))},
ez:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.m],"$aa")
if(c===C.m){u=$.lP().b
if(typeof b!=="string")H.p(H.ap(b))
u=u.test(b)}else u=!1
if(u)return b
H.z(b,H.aa(c,"bF",0))
t=c.gkw().cU(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bT(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
m9:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ma:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dh:function(a){if(a>=10)return""+a
return"0"+a},
kn:function(a,b,c,d,e,f){return new P.aS(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
f4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aq(a)
if(typeof a==="string")return JSON.stringify(a)
return P.md(a)},
d9:function(a){return new P.aI(!1,null,null,a)},
jz:function(a,b,c){return new P.aI(!0,a,b,c)},
dP:function(a,b,c){return new P.bU(null,null,!0,a,b,"Value not in range")},
a9:function(a,b,c,d,e){return new P.bU(b,c,!0,a,d,"Invalid value")},
bc:function(a,b,c,d,e,f){if(typeof a!=="number")return H.B(a)
if(0>a||a>c)throw H.c(P.a9(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.a9(b,a,c,"end",f))
return b}return c},
bM:function(a,b,c,d,e){var u=H.a8(e==null?J.aH(b):e)
return new P.fj(b,u,!0,a,c,"Index out of range")},
Z:function(a){return new P.hG(a)},
hE:function(a){return new P.hD(a)},
kH:function(a){return new P.bW(a)},
b5:function(a){return new P.eS(a)},
q:function(a){return new P.ek(a)},
a2:function(a,b,c){return new P.fc(a,b,c)},
mq:function(a,b,c,d){var u,t
H.k(b,{func:1,ret:d,args:[P.m]})
u=H.b([],[d])
C.a.sm(u,a)
for(t=0;t<a;++t)C.a.t(u,t,b.$1(t))
return u},
k7:function(a){H.nY(a)},
mS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.K(a,b+4)^58)*3|C.c.K(a,b)^100|C.c.K(a,b+1)^97|C.c.K(a,b+2)^116|C.c.K(a,b+3)^97)>>>0
if(t===0)return P.kN(b>0||c<c?C.c.A(a,b,c):a,5,null).gfu()
else if(t===32)return P.kN(C.c.A(a,u,c),0,null).gfu()}s=new Array(8)
s.fixed$length=Array
r=H.b(s,[P.m])
C.a.t(r,0,0)
s=b-1
C.a.t(r,1,s)
C.a.t(r,2,s)
C.a.t(r,7,s)
C.a.t(r,3,b)
C.a.t(r,4,b)
C.a.t(r,5,c)
C.a.t(r,6,c)
if(P.lc(a,b,c,0,r)>=14)C.a.t(r,7,c)
q=r[1]
if(typeof q!=="number")return q.lw()
if(q>=b)if(P.lc(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.n()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.a_()
if(typeof m!=="number")return H.B(m)
if(l<m)m=l
if(typeof n!=="number")return n.a_()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.a_()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.a_()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.aj(a,"..",n)))i=m>n+2&&C.c.aj(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.aj(a,"file",b)){if(p<=b){if(!C.c.aj(a,"/",n)){h="file:///"
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
b=0}j="file"}else if(C.c.aj(a,"http",b)){if(s&&o+3===n&&C.c.aj(a,"80",o+1))if(b===0&&!0){a=C.c.b5(a,o,n,"")
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
else if(q===u&&C.c.aj(a,"https",b)){if(s&&o+4===n&&C.c.aj(a,"443",o+1))if(b===0&&!0){a=C.c.b5(a,o,n,"")
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
l-=b}return new P.iA(a,q,p,o,n,m,l,j)}return P.n8(a,b,c,q,p,o,n,m,l,j)},
kQ:function(a,b){var u=P.f
return C.a.kE(H.b(a.split("&"),[u]),P.kt(u,u),new P.hL(b),[P.J,P.f,P.f])},
mR:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.hI(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a5(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.eF(C.c.A(a,q,r),null,null)
if(typeof n!=="number")return n.fI()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.eF(C.c.A(a,q,c),null,null)
if(typeof n!=="number")return n.fI()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
kP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.hJ(a)
t=new P.hK(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a5(a,r)
if(n===58){if(r===b){++r
if(C.c.a5(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaF(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.mR(a,q,c)
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
n8:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.nf(a,b,d)
else{if(d===b)P.cX(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.ng(a,u,e-1):""
s=P.nc(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.B(g)
q=r<g?P.ne(P.eF(C.c.A(a,r,g),new P.iK(a,f),null),j):null}else{t=""
s=null
q=null}p=P.nd(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.a_()
o=h<i?P.jT(a,h+1,i,null):null
return new P.c_(j,t,s,q,p,o,i<c?P.nb(a,i+1,c):null)},
l2:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cX:function(a,b,c){throw H.c(P.a2(c,a,b))},
ne:function(a,b){if(a!=null&&a===P.l2(b))return
return a},
nc:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a5(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.c.a5(a,u)!==93)P.cX(a,b,"Missing end `]` to match `[` in host")
P.kP(a,b+1,u)
return C.c.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.B(c)
t=b
for(;t<c;++t)if(C.c.a5(a,t)===58){P.kP(a,b,c)
return"["+a+"]"}return P.ni(a,b,c)},
ni:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.B(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a5(a,u)
if(q===37){p=P.l8(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ag("")
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
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ag("")
if(t<u){s.a+=C.c.A(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.cX(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a5(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ag("")
n=C.c.A(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.l3(q)
u+=l
t=u}}}}if(s==null)return C.c.A(a,b,c)
if(t<c){n=C.c.A(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nf:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.l5(C.c.K(a,b)))P.cX(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.K(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cX(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.A(a,b,c)
return P.n9(t?a.toLowerCase():a)},
n9:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ng:function(a,b,c){return P.cY(a,b,c,C.a9,!1)},
nd:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cY(a,b,c,C.L,!0):C.r.lB(d,new P.iL(),P.f).l(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a8(r,"/"))r="/"+r
return P.nh(r,e,f)},
nh:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a8(a,"/"))return P.nj(a,!u||c)
return P.nk(a)},
jT:function(a,b,c,d){var u,t
u={}
H.h(d,"$iJ",[P.f,null],"$aJ")
if(a!=null){if(d!=null)throw H.c(P.d9("Both query and queryParameters specified"))
return P.cY(a,b,c,C.u,!0)}if(d==null)return
t=new P.ag("")
u.a=""
d.a1(0,new P.iM(new P.iN(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
nb:function(a,b,c){return P.cY(a,b,c,C.u,!0)},
l8:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a5(a,b+1)
s=C.c.a5(a,u)
r=H.j8(t)
q=H.j8(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.b_(p,4)
if(u>=8)return H.e(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.bT(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.A(a,b,b+3).toUpperCase()
return},
l3:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.m])
C.a.t(t,0,37)
C.a.t(t,1,C.c.K("0123456789ABCDEF",a>>>4))
C.a.t(t,2,C.c.K("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.f.jf(a,6*r)&63|s
C.a.t(t,q,37)
C.a.t(t,q+1,C.c.K("0123456789ABCDEF",p>>>4))
C.a.t(t,q+2,C.c.K("0123456789ABCDEF",p&15))
q+=3}}return P.dY(t,0,null)},
cY:function(a,b,c,d,e){var u=P.l7(a,b,c,H.h(d,"$ia",[P.m],"$aa"),e)
return u==null?C.c.A(a,b,c):u},
l7:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ia",[P.m],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.a_()
if(typeof c!=="number")return H.B(c)
if(!(t<c))break
c$0:{q=C.c.a5(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.l8(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cX(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a5(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.l3(q)}}if(r==null)r=new P.ag("")
r.a+=C.c.A(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.B(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.a_()
if(s<c)r.a+=C.c.A(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
l6:function(a){if(C.c.a8(a,"."))return!0
return C.c.f6(a,"/.")!==-1},
nk:function(a){var u,t,s,r,q,p,o
if(!P.l6(a))return a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.G(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.l(u,"/")},
nj:function(a,b){var u,t,s,r,q,p
if(!P.l6(a))return!b?P.l4(a):a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaF(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaF(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.t(u,0,P.l4(u[0]))}return C.a.l(u,"/")},
l4:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.l5(J.lV(a,0)))for(t=1;t<u;++t){s=C.c.K(a,t)
if(s===58)return C.c.A(a,0,t)+"%3A"+C.c.aw(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
na:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.K(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.d9("Invalid URL encoding"))}}return u},
jU:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.K(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.A(a,b,c)
else q=new H.u(C.c.A(a,b,c))}else{q=H.b([],[P.m])
for(r=a.length,t=b;t<c;++t){s=C.c.K(a,t)
if(s>127)throw H.c(P.d9("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.d9("Truncated URI"))
C.a.h(q,P.na(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.h(q,"$ia",[P.m],"$aa")
return new P.hN(!1).cU(q)},
l5:function(a){var u=a|32
return 97<=u&&u<=122},
kN:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.m])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.K(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a2("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a2("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.K(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaF(u)
if(q!==44||s!==o+7||!C.c.aj(a,"base64",o+1))throw H.c(P.a2("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.Q.kS(a,n,t)
else{m=P.l7(a,n,t,C.u,!0)
if(m!=null)a=C.c.b5(a,n,t,m)}return new P.hH(a,u,c)},
nm:function(){var u,t,s,r,q
u=P.mq(22,new P.iW(),!0,P.O)
t=new P.iV(u)
s=new P.iX()
r=new P.iY()
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
lc:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ia",[P.m],"$aa")
u=$.lQ()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.c.K(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.t(e,q>>>5,t)}return d},
N:function N(){},
ak:function ak(a,b){this.a=a
this.b=b},
r:function r(){},
aS:function aS(a){this.a=a},
eZ:function eZ(){},
f_:function f_(){},
bo:function bo(){},
dK:function dK(){},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bU:function bU(a,b,c,d,e,f){var _=this
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
hG:function hG(a){this.a=a},
hD:function hD(a){this.a=a},
bW:function bW(a){this.a=a},
eS:function eS(a){this.a=a},
fR:function fR(){},
dX:function dX(){},
eW:function eW(a){this.a=a},
ek:function ek(a){this.a=a},
fc:function fc(a,b,c){this.a=a
this.b=b
this.c=c},
bp:function bp(){},
m:function m(){},
l:function l(){},
aT:function aT(){},
a:function a(){},
J:function J(){},
D:function D(){},
ai:function ai(){},
M:function M(){},
av:function av(){},
f:function f(){},
ag:function ag(a){this.a=a},
hL:function hL(a){this.a=a},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
hK:function hK(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
iK:function iK(a,b){this.a=a
this.b=b},
iL:function iL(){},
iN:function iN(a,b){this.a=a
this.b=b},
iM:function iM(a){this.a=a},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(){},
iV:function iV(a){this.a=a},
iX:function iX(){},
iY:function iY(){},
iA:function iA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
i8:function i8(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
nB:function(a){var u,t
u=J.T(a)
if(!!u.$ib7){t=u.gey(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.ex(a.data,a.height,a.width)},
nA:function(a){if(a instanceof P.ex)return{data:a.a,height:a.b,width:a.c}
return a},
nz:function(a,b){var u={}
a.a1(0,new P.j1(u))
return u},
iB:function iB(){},
iD:function iD(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a){this.a=a},
iC:function iC(a,b){this.a=a
this.b=b},
f8:function f8(a,b){this.a=a
this.b=b},
f9:function f9(){},
fa:function fa(){},
ip:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
n4:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ir:function ir(){},
aD:function aD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cw:function cw(){},
o:function o(){},
O:function O(){},
db:function db(){},
dm:function dm(){},
dN:function dN(){},
bV:function bV(){},
dR:function dR(){},
e0:function e0(){},
e8:function e8(){}},W={
kg:function(a){var u=document.createElement("a")
return u},
jB:function(a,b){var u=document.createElement("canvas")
return u},
mb:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).an(u,a,b,c)
t.toString
u=W.C
u=new H.cP(new W.an(t),H.k(new W.f1(),{func:1,ret:P.N,args:[u]}),[u])
return H.d(u.gaS(u),"$iR")},
mc:function(a){H.d(a,"$ibI")
return"wheel"},
ci:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lZ(a)
if(typeof t==="string")u=a.tagName}catch(s){H.af(s)}return u},
me:function(a){var u,t,s
t=document.createElement("input")
u=H.d(t,"$icm")
try{u.type=a}catch(s){H.af(s)}return u},
io:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l0:function(a,b,c,d){var u,t
u=W.io(W.io(W.io(W.io(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a6:function(a,b,c,d,e){var u,t
u=W.lf(new W.ic(c),W.n)
t=u!=null
if(t&&!0){H.k(u,{func:1,args:[W.n]})
if(t)J.lU(a,b,u,!1)}return new W.ib(a,b,u,!1,[e])},
l_:function(a){var u,t
u=W.kg(null)
t=window.location
u=new W.by(new W.iw(u,t))
u.h2(a)
return u},
n2:function(a,b,c,d){H.d(a,"$iR")
H.E(b)
H.E(c)
H.d(d,"$iby")
return!0},
n3:function(a,b,c,d){var u,t,s
H.d(a,"$iR")
H.E(b)
H.E(c)
u=H.d(d,"$iby").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
l1:function(){var u,t,s,r,q
u=P.f
t=P.ku(C.A,u)
s=H.t(C.A,0)
r=H.k(new W.iG(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.iF(t,P.dy(null,null,null,u),P.dy(null,null,null,u),P.dy(null,null,null,u),null)
t.hc(null,new H.fC(C.A,r,[s,u]),q,null)
return t},
lf:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.Y
if(u===C.l)return a
return u.er(a,b)},
x:function x(){},
d8:function d8(){},
eJ:function eJ(){},
cb:function cb(){},
bj:function bj(){},
bD:function bD(){},
bE:function bE(){},
bk:function bk(){},
cg:function cg(){},
eV:function eV(){},
aC:function aC(){},
ch:function ch(){},
eY:function eY(){},
di:function di(){},
dj:function dj(){},
i7:function i7(a,b){this.a=a
this.b=b},
R:function R(){},
f1:function f1(){},
n:function n(){},
bI:function bI(){},
fb:function fb(){},
dn:function dn(){},
dp:function dp(){},
bL:function bL(){},
dq:function dq(){},
b7:function b7(){},
cl:function cl(){},
cm:function cm(){},
aU:function aU(){},
dw:function dw(){},
dz:function dz(){},
cq:function cq(){},
ad:function ad(){},
an:function an(a){this.a=a},
C:function C(){},
ct:function ct(){},
dO:function dO(){},
h3:function h3(){},
aZ:function aZ(){},
dZ:function dZ(){},
e_:function e_(){},
hi:function hi(){},
cB:function cB(){},
aM:function aM(){},
aN:function aN(){},
hq:function hq(){},
bw:function bw(){},
i0:function i0(){},
b2:function b2(){},
cQ:function cQ(){},
cR:function cR(){},
ej:function ej(){},
ep:function ep(){},
i6:function i6(){},
i9:function i9(a){this.a=a},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jR:function jR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ib:function ib(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ic:function ic(a){this.a=a},
by:function by(a){this.a=a},
ax:function ax(){},
dJ:function dJ(a){this.a=a},
fO:function fO(a){this.a=a},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
es:function es(){},
iy:function iy(){},
iz:function iz(){},
iF:function iF(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iG:function iG(){},
iE:function iE(){},
dl:function dl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aA:function aA(){},
iw:function iw(a,b){this.a=a
this.b=b},
eA:function eA(a){this.a=a},
iR:function iR(a){this.a=a},
ei:function ei(){},
el:function el(){},
em:function em(){},
eq:function eq(){},
er:function er(){},
ev:function ev(){},
ew:function ew(){},
eB:function eB(){},
eC:function eC(){}},O={
jC:function(a){var u=new O.a0([a])
u.bx(a)
return u},
a0:function a0(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cp:function cp(){this.b=this.a=null},
dC:function dC(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fD:function fD(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
co:function co(){},
fE:function fE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aV:function aV(a,b){var _=this
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
dU:function dU(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bv:function bv(){}},E={
kq:function(a,b,c,d,e,f){var u=new E.al()
u.a=d
u.b=!0
u.sh1(0,O.jC(E.al))
u.y.b8(u.gkT(),u.gkW())
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
u.saa(0,e)
return u},
mI:function(a,b){var u=new E.fZ(a,b)
u.fY(a,b)
return u},
mO:function(a,b,c,d,e){var u,t,s,r
u=J.T(a)
if(!!u.$ibD)return E.kJ(a,!0,!0,!0,!1)
t=W.jB(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcT(a).h(0,t)
r=E.kJ(t,!0,!0,!0,!1)
r.a=a
return r},
kJ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.e4()
t=P.mm(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
s=C.q.c9(a,"webgl",t)
s=H.d(s==null?C.q.c9(a,"experimental-webgl",t):s,"$ibV")
if(s==null)H.p(P.q("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.mI(s,a)
r=new T.hk(s)
r.b=H.a8((s&&C.b).dz(s,3379))
r.c=H.a8(C.b.dz(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.eb(a)
q=new X.fp()
q.c=new X.az(!1,!1,!1)
q.siP(P.dy(null,null,null,P.m))
r.b=q
q=new X.fI(r)
q.f=0
q.r=V.aY()
q.x=V.aY()
q.Q=1
q.ch=1
r.c=q
q=new X.fw(r)
q.r=0
q.x=V.aY()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.hp(r)
q.e=0
q.f=V.aY()
q.r=V.aY()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.shx(H.b([],[[P.cz,P.M]]))
q=r.z
p=document
o=W.ad
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a6(p,"contextmenu",H.k(r.gi7(),n),!1,o))
q=r.z
m=W.n
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a6(a,"focus",H.k(r.gie(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a6(a,"blur",H.k(r.gi_(),l),!1,m))
q=r.z
k=W.aU
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a6(p,"keyup",H.k(r.gij(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a6(p,"keydown",H.k(r.gih(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a6(a,"mousedown",H.k(r.gio(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a6(a,"mouseup",H.k(r.gis(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a6(a,"mousemove",H.k(r.giq(),n),!1,o))
k=r.z
j=W.b2;(k&&C.a).h(k,W.a6(a,H.E(W.mc(a)),H.k(r.giu(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a6(p,"mousemove",H.k(r.gi9(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a6(p,"mouseup",H.k(r.gib(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a6(p,"pointerlockchange",H.k(r.giw(),l),!1,m))
m=r.z
l=W.aN
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a6(a,"touchstart",H.k(r.giM(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a6(a,"touchend",H.k(r.giI(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a6(a,"touchmove",H.k(r.giK(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ak(Date.now(),!1)
u.cy=0
u.ec()
return u},
eN:function eN(){},
al:function al(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h_:function h_(a){this.a=a},
h0:function h0(a){this.a=a},
h1:function h1(a){this.a=a},
e4:function e4(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hm:function hm(a){this.a=a}},Z={
jQ:function(a,b,c){var u
H.h(c,"$ia",[P.m],"$aa")
u=a.createBuffer()
C.b.aC(a,b,u)
C.b.ev(a,b,new Int16Array(H.c0(c)),35044)
C.b.aC(a,b,null)
return new Z.ef(b,u)},
aE:function(a){return new Z.b1(a)},
ef:function ef(a,b){this.a=a
this.b=b},
dc:function dc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eg:function eg(a){this.a=a},
ce:function ce(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a){this.a=a}},D={
K:function(){var u=new D.bH()
u.sak(null)
u.sbd(null)
u.c=null
u.d=0
return u},
eQ:function eQ(){},
bH:function bH(){var _=this
_.d=_.c=_.b=_.a=null},
f5:function f5(a){this.a=a},
f6:function f6(a){this.a=a},
w:function w(a){this.a=a
this.b=null},
br:function br(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bs:function bs(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
F:function F(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bn:function bn(){var _=this
_.d=_.c=_.b=_.a=null},
a3:function a3(){},
dx:function dx(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dM:function dM(){},
dW:function dW(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){}},X={dd:function dd(a,b){this.a=a
this.b=b},dv:function dv(a,b){this.a=a
this.b=b},fp:function fp(){var _=this
_.d=_.c=_.b=_.a=null},dA:function dA(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fw:function fw(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},az:function az(a,b,c){this.a=a
this.b=b
this.c=c},bb:function bb(a,b,c,d,e,f,g,h,i){var _=this
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
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cr:function cr(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},fU:function fU(){},e6:function e6(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hp:function hp(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},eb:function eb(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jF:function(a,b,c,d,e,f,g){var u,t
u=new X.fd()
t=new V.ab(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kF
if(t==null){t=V.kE(0,0,1,1)
$.kF=t}u.r=t
return u},
kz:function(a,b,c,d,e){var u,t,s
u=new X.dL()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gv().h(0,u.gi1())
s=new D.F("mover",t,u.b,u,[U.ae])
s.b=!0
u.ay(s)}s=u.c
if(!(Math.abs(s-b)<$.I().a)){u.c=b
s=new D.F("fov",s,b,u,[P.r])
s.b=!0
u.ay(s)}s=u.d
if(!(Math.abs(s-d)<$.I().a)){u.d=d
s=new D.F("near",s,d,u,[P.r])
s.b=!0
u.ay(s)}s=u.e
if(!(Math.abs(s-a)<$.I().a)){u.e=a
s=new D.F("far",s,a,u,[P.r])
s.b=!0
u.ay(s)}return u},
bC:function bC(){},
fd:function fd(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fi:function fi(){this.b=this.a=null},
dL:function dL(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cA:function cA(){}},V={
o4:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bu(a-b,u)
return(a<0?a+u:a)+b},
P:function(a,b,c){if(a==null)return C.c.ap("null",c)
return C.c.ap(C.e.fp(Math.abs(a-0)<$.I().a?0:a,b),c+b+1)},
c5:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.r],"$aa")
u=H.b([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.P(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.t(u,p,C.c.ap(u[p],s))}return u},
k6:function(a,b){return C.e.lm(Math.pow(b,C.a_.d4(Math.log(H.ny(a))/Math.log(b))))},
bP:function(){var u=$.kw
if(u==null){u=V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kw=u}return u},
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kv:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.q(0,Math.sqrt(c.D(c)))
t=b.aM(u)
s=t.q(0,Math.sqrt(t.D(t)))
r=u.aM(s)
q=new V.y(a.a,a.b,a.c)
p=s.V(0).D(q)
o=r.V(0).D(q)
n=u.V(0).D(q)
return V.aW(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aY:function(){var u=$.kB
if(u==null){u=new V.V(0,0)
$.kB=u}return u},
jL:function(){var u=$.cu
if(u==null){u=new V.Q(0,0,0)
$.cu=u}return u},
kE:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dQ(a,b,c,d)},
cN:function(){var u=$.kV
if(u==null){u=new V.y(0,0,0)
$.kV=u}return u},
kW:function(){var u=$.kU
if(u==null){u=new V.y(0,1,0)
$.kU=u}return u},
kX:function(){var u=$.hP
if(u==null){u=new V.y(0,0,1)
$.hP=u}return u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f3:function f3(a){this.a=a},
dE:function dE(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
as:function as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
V:function V(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dQ:function dQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.q("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.K(a,0)
t=C.c.K(b,0)
s=new V.fX()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.h4()
u.fZ(a)
return u},
ho:function(){var u,t
u=new V.hn()
t=P.f
u.sjh(new H.aL([t,V.cy]))
u.sjl(new H.aL([t,V.cD]))
u.c=null
return u},
b4:function b4(){},
ay:function ay(){},
dB:function dB(){},
at:function at(){this.a=null},
fX:function fX(){this.b=this.a=null},
h4:function h4(){this.a=null},
cy:function cy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a,b){this.a=a
this.b=b
this.c=null},
hn:function hn(){this.c=this.b=this.a=null},
cE:function cE(a){this.b=a
this.a=this.c=null},
o0:function(a){P.mP(C.V,new V.jr(a))},
mK:function(a,b){var u=new V.h8()
u.h_(a,!0)
return u},
bl:function bl(){},
jr:function jr(a){this.a=a},
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
h8:function h8(){this.b=this.a=null},
ha:function ha(a){this.a=a},
h9:function h9(a){this.a=a},
hb:function hb(a){this.a=a}},U={
jD:function(){var u=new U.eR()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
km:function(a){var u=new U.df()
u.a=a
return u},
eR:function eR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){this.b=this.a=null},
ck:function ck(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ae:function ae(){},
ec:function ec(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ed:function ed(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ee:function ee(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={de:function de(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},dg:function dg(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},dk:function dk(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aB:function aB(){}},A={
mr:function(a,b){var u,t
u=a.as
t=new A.dD(b,u)
t.dG(b,u)
t.fX(a,b)
return t},
jN:function(a,b,c,d,e){var u=new A.hv(a,b,c,e)
u.f=d
u.sjw(P.mo(d,0,!1,P.m))
return u},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
eK:function eK(a){this.a=a},
dD:function dD(a,b){var _=this
_.bI=_.eF=_.bH=_.as=_.aD=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eV=_.cZ=_.eU=_.bV=_.eT=_.eS=_.bU=_.bT=_.eR=_.eQ=_.bS=_.bR=_.bQ=_.eP=_.eO=_.bP=_.eN=_.eM=_.bO=_.eL=_.eK=_.bN=_.bM=_.eJ=_.eI=_.bL=_.bK=_.eH=_.eG=_.bJ=null
_.d3=_.eZ=_.d2=_.eY=_.d1=_.eX=_.d0=_.eW=_.d_=null
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
_.aD=b3
_.as=b4
_.bH=b5},
cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cH:function cH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cK:function cK(a,b,c,d,e,f,g,h,i,j){var _=this
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
cI:function cI(a,b,c,d,e,f,g,h,i,j){var _=this
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
cL:function cL(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cx:function cx(){},
bG:function bG(a,b){this.a=a
this.b=b},
dV:function dV(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e7:function e7(){},
hB:function hB(a){this.a=a},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hy:function hy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hA:function hA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hv:function hv(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hw:function hw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hC:function hC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cG:function cG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
k1:function(a,b,c,d){var u
H.k(c,{func:1,ret:-1,args:[F.a4,P.r,P.r]})
u=F.dT()
F.cZ(u,b,c,d,a,1,0,0,1)
F.cZ(u,b,c,d,a,0,1,0,3)
F.cZ(u,b,c,d,a,0,0,1,2)
F.cZ(u,b,c,d,a,-1,0,0,0)
F.cZ(u,b,c,d,a,0,-1,0,0)
F.cZ(u,b,c,d,a,0,0,-1,3)
u.am()
return u},
iU:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cZ:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.k(c,{func:1,ret:-1,args:[F.a4,P.r,P.r]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.y(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.y(o+a3,n+a1,m+a2)
u.b=l
k=new V.y(o-a3,n-a1,m-a2)
u.c=k
j=new V.y(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.iU(t)
f=F.iU(u.b)
e=F.ju(d,a0,new F.iT(u,F.iU(u.c),F.iU(u.d),f,g,c),b)
if(e!=null)a.b3(e)},
ll:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.k(e,{func:1,ret:P.r,args:[P.r]})
if(a0<3)return
u=F.dT()
t=b?-1:1
s=-6.283185307179586/a0
r=H.b([],[F.a4])
q=u.a
p=new V.y(0,0,t)
p=p.q(0,Math.sqrt(p.D(p)))
C.a.h(r,q.jW(new V.au(a,-1,-1,-1),new V.ab(1,1,1,1),new V.Q(0,0,d),new V.y(0,0,t),new V.V(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.B(k)
j=new V.y(m,l,t).q(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.bY(new V.au(a,-1,-1,-1),null,new V.ab(i,g,h,1),new V.Q(m*k,l*k,d),new V.y(0,0,t),new V.V(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.ek(r)
return u},
lj:function(a,b,c,d,e,f){return F.nC(!0,c,d,new F.j2(a,f),e)},
nC:function(a,b,c,d,e){var u
H.k(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
u=F.ju(c,e,new F.j4(d),null)
if(u==null)return
u.am()
u.bE()
if(b)u.b3(F.ll(3,!1,!1,1,new F.j5(d),e))
u.b3(F.ll(1,!0,!1,-1,new F.j6(d),e))
return u},
nT:function(a,b){var u=F.ju(a,b,new F.je(),null)
u.d.c1()
u.am()
u.bE()
return u},
ao:function(a,b){var u,t,s,r,q,p,o,n,m,l,k
b=b.q(0,Math.sqrt(b.D(b)))
u=b.a
t=b.b
s=b.c
r=F.bY(null,null,null,new V.Q(u,t,s),b,null,null,null,0)
q=a.ky(r,new F.cO())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sae(0,new V.ab(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.sdq(new V.V(l,k<0?-k:k))
a.a.h(0,r)
return r},
a_:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.bC(0,b,d,c)
else{u=F.ao(a,b.r.n(0,c.r).w(0,0.5))
t=F.ao(a,c.r.n(0,d.r).w(0,0.5))
s=F.ao(a,d.r.n(0,b.r).w(0,0.5))
r=e-1
F.a_(a,b,u,s,r)
F.a_(a,u,c,t,r)
F.a_(a,t,s,u,r)
F.a_(a,s,t,d,r)}},
lv:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.js()
t=F.k1(a,null,new F.jt(u,c),d)
t.bE()
return t},
o3:function(a,b,c,d){return F.lk(c,a,d,b,new F.jv())},
nS:function(a,b,c,d,e,f){return F.lk(d,a,e,b,new F.jd(f,c))},
lk:function(a,b,c,d,e){var u=F.ju(a,b,new F.j3(H.k(e,{func:1,ret:V.Q,args:[P.r]}),d,b,c),null)
if(u==null)return
u.am()
u.bE()
return u},
ju:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.a4,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.dT()
t=H.b([],[F.a4])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.bY(null,null,new V.ab(p,0,0,1),null,null,new V.V(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cV(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.bY(null,null,new V.ab(j,i,h,1),null,null,new V.V(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cV(d))}}u.d.jV(a+1,b+1,t)
return u},
bJ:function(a,b,c){var u,t
u=new F.a5()
t=a.a
if(t==null)H.p(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.q("May not create a face with vertices attached to different shapes."))
u.cI(a)
u.cJ(b)
u.ja(c)
C.a.h(u.a.a.d.b,u)
u.a.a.X()
return u},
mk:function(a,b){var u,t
u=new F.ba()
t=a.a
if(t==null)H.p(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.q("May not create a line with vertices attached to different shapes."))
u.cI(a)
u.cJ(b)
C.a.h(u.a.a.c.b,u)
u.a.a.X()
return u},
dT:function(){var u,t
u=new F.dS()
t=new F.hQ(u)
t.b=!1
t.sjx(H.b([],[F.a4]))
u.a=t
t=new F.h7(u)
t.scA(H.b([],[F.bu]))
u.b=t
t=new F.h6(u)
t.shI(H.b([],[F.ba]))
u.c=t
t=new F.h5(u)
t.shy(H.b([],[F.a5]))
u.d=t
u.e=null
return u},
bY:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.a4()
t=new F.hY(u)
t.scA(H.b([],[F.bu]))
u.b=t
t=new F.hV(u)
s=[F.ba]
t.shJ(H.b([],s))
t.shK(H.b([],s))
u.c=t
t=new F.hR(u)
s=[F.a5]
t.shz(H.b([],s))
t.shA(H.b([],s))
t.shB(H.b([],s))
u.d=t
h=$.lK()
u.e=0
t=$.aQ()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bg().a)!==0?e:null
u.x=(s&$.bf().a)!==0?b:null
u.y=(s&$.bh().a)!==0?f:null
u.z=(s&$.bi().a)!==0?g:null
u.Q=(s&$.lL().a)!==0?c:null
u.ch=(s&$.ca().a)!==0?i:0
u.cx=(s&$.be().a)!==0?a:null
return u},
iT:function iT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j2:function j2(a,b){this.a=a
this.b=b},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
je:function je(){},
js:function js(){},
jt:function jt(a,b){this.a=a
this.b=b},
jv:function jv(){},
jd:function jd(a,b){this.a=a
this.b=b},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f7:function f7(){},
hc:function hc(){},
ba:function ba(){this.b=this.a=null},
fq:function fq(){},
hu:function hu(){},
bu:function bu(){this.a=null},
dS:function dS(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h5:function h5(a){this.a=a
this.b=null},
h6:function h6(a){this.a=a
this.b=null},
h7:function h7(a){this.a=a
this.b=null},
a4:function a4(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i_:function i_(a){this.a=a},
hZ:function hZ(a){this.a=a},
hQ:function hQ(a){this.a=a
this.c=this.b=null},
hR:function hR(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hS:function hS(a,b){this.a=a
this.b=b},
hT:function hT(a,b){this.a=a
this.b=b},
hV:function hV(a){this.a=a
this.c=this.b=null},
hW:function hW(){},
cO:function cO(){},
hX:function hX(){},
hU:function hU(){},
fP:function fP(){},
hY:function hY(a){this.a=a
this.b=null}},T={cC:function cC(){},bX:function bX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hk:function hk(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hl:function hl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lr:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=V.mK("Test 017",!0)
t=W.jB(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.H(u.a,t)
s=[P.f]
u.em(H.b(["A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted."],s))
u.jU(H.b(["shapes"],s))
u.em(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.dw(s,"testCanvas")
if(r==null)H.p(P.q("Failed to find an element with the identifier, testCanvas."))
q=E.mO(r,!0,!0,!0,!1)
p=E.kq(null,!0,null,"",null,null)
p.saa(0,F.lv(8,null,1,8))
o=X.jF(!0,!0,!1,null,2000,null,0)
if(o.b){o.b=!1
n=new D.F("clearColor",!0,!1,o,[P.N])
n.b=!0
o.ay(n)}m=q.f.kQ("../resources/maskonaive",".jpg")
l=q.f.fa("../resources/earthSpecular")
k=q.f.fa("../resources/earthColor")
j=new O.dC()
j.shl(O.jC(V.as))
j.e.b8(j.ghW(),j.ghY())
n=new O.aV(j,"emission")
n.c=C.d
n.f=new V.a1(0,0,0)
j.f=n
n=new O.aV(j,"ambient")
n.c=C.d
n.f=new V.a1(0,0,0)
j.r=n
n=new O.aV(j,"diffuse")
n.c=C.d
n.f=new V.a1(0,0,0)
j.x=n
n=new O.aV(j,"invDiffuse")
n.c=C.d
n.f=new V.a1(0,0,0)
j.y=n
n=new O.fH(j,"specular")
n.c=C.d
n.f=new V.a1(0,0,0)
n.ch=100
j.z=n
n=new O.fE(j,"bump")
n.c=C.d
j.Q=n
j.ch=null
n=new O.aV(j,"reflect")
n.c=C.d
n.f=new V.a1(0,0,0)
j.cx=n
n=new O.fG(j,"refract")
n.c=C.d
n.f=new V.a1(0,0,0)
n.ch=1
j.cy=n
n=new O.fD(j,"alpha")
n.c=C.d
n.f=1
j.db=n
n=new D.dx()
n.bx(D.a3)
n.shu(H.b([],[D.bn]))
n.siO(H.b([],[D.dM]))
n.sjg(H.b([],[D.dW]))
n.sjt(H.b([],[D.e1]))
n.sju(H.b([],[D.e2]))
n.sjv(H.b([],[D.e3]))
n.Q=null
n.ch=null
n.dB(n.ghU(),n.giy(),n.giC())
j.dx=n
i=n.Q
if(i==null){i=D.K()
n.Q=i
n=i}else n=i
n.h(0,j.gj0())
n=j.dx
i=n.ch
if(i==null){i=D.K()
n.ch=i
n=i}else n=i
i=j.gaV()
n.h(0,i)
j.dy=null
n=j.dx
h=V.kW()
g=U.km(V.kv(V.jL(),h,new V.y(-1,-1,-1)))
f=new V.a1(1,1,1)
e=new D.bn()
e.c=new V.a1(1,1,1)
e.a=V.kX()
d=e.b
e.b=g
g.gv().h(0,e.gh4())
g=new D.F("mover",d,e.b,e,[U.ae])
g.b=!0
e.aH(g)
if(!e.c.B(0,f)){d=e.c
e.c=f
g=new D.F("color",d,f,e,[V.a1])
g.b=!0
e.aH(g)}n.h(0,e)
n=j.r
n.sae(0,new V.a1(0.5,0.5,0.5))
n=j.x
n.sae(0,new V.a1(0.5,0.5,0.5))
j.r.sau(k)
j.x.sau(k)
j.z.sau(l)
n=j.ch
if(n!==m){if(n!=null)n.gv().G(0,i)
d=j.ch
j.ch=m
m.gv().h(0,i)
n=new D.F("environment",d,j.ch,j,[T.bX])
n.b=!0
j.W(n)}j.cx.sau(l)
n=j.cx
n.sae(0,new V.a1(0.5,0.5,0.5))
n=j.z
if(n.c===C.d){n.c=C.j
n.ce()
n.cF(100)
i=n.a
i.a=null
i.W(null)}n.cF(10)
c=new U.ck()
c.bx(U.ae)
c.b8(c.ghS(),c.giA())
c.e=null
c.f=V.bP()
c.r=0
n=q.r
i=new U.ed()
g=U.jD()
g.sdv(0,!0)
g.sda(6.283185307179586)
g.sdd(0)
g.sa2(0,0)
g.sdc(100)
g.sY(0)
g.scW(0.5)
i.b=g
e=i.gaU()
g.gv().h(0,e)
g=U.jD()
g.sdv(0,!0)
g.sda(6.283185307179586)
g.sdd(0)
g.sa2(0,0)
g.sdc(100)
g.sY(0)
g.scW(0.5)
i.c=g
g.gv().h(0,e)
i.d=null
i.e=!1
i.f=!1
i.r=!1
i.x=2.5
i.y=2.5
i.z=2
i.Q=4
i.cx=!1
i.ch=!1
i.cy=0
i.db=0
i.dx=null
i.dy=0
i.fr=null
i.fx=null
b=new X.az(!1,!1,!1)
d=i.d
i.d=b
g=[X.az]
e=new D.F("modifiers",d,b,i,g)
e.b=!0
i.S(e)
e=i.f
if(e!==!1){i.f=!1
e=new D.F("invertX",e,!1,i,[P.N])
e.b=!0
i.S(e)}e=i.r
if(e!==!1){i.r=!1
e=new D.F("invertY",e,!1,i,[P.N])
e.b=!0
i.S(e)}i.bg(n)
c.h(0,i)
n=q.r
i=new U.ec()
e=U.jD()
e.sdv(0,!0)
e.sda(6.283185307179586)
e.sdd(0)
e.sa2(0,0)
e.sdc(100)
e.sY(0)
e.scW(0.2)
i.b=e
e.gv().h(0,i.gaU())
i.c=null
i.d=!1
i.e=2.5
i.f=2
i.r=4
i.y=!1
i.x=!1
i.z=0
i.Q=null
i.ch=0
i.cx=null
i.cy=null
b=new X.az(!0,!1,!1)
d=i.c
i.c=b
e=new D.F("modifiers",d,b,i,g)
e.b=!0
i.S(e)
i.bg(n)
c.h(0,i)
n=q.r
i=new U.ee()
i.c=0.01
i.d=0
i.e=0
b=new X.az(!1,!1,!1)
i.b=b
g=new D.F("modifiers",null,b,i,g)
g.b=!0
i.S(g)
i.bg(n)
c.h(0,i)
c.h(0,U.km(V.aW(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a=X.kz(2000,1.0471975511965976,c,0.1,null)
a0=new M.dg()
a0.sbh(null)
a0.sbp(0,null)
a0.sbq(null)
n=E.kq(null,!0,null,"",null,null)
a1=F.dT()
i=a1.a
g=new V.y(-1,-1,1)
g=g.q(0,Math.sqrt(g.D(g)))
a2=i.bD(new V.au(1,2,4,6),new V.ab(1,0,0,1),new V.Q(-1,-1,0),new V.V(0,1),g,null)
i=a1.a
g=new V.y(1,-1,1)
g=g.q(0,Math.sqrt(g.D(g)))
a3=i.bD(new V.au(0,3,4,6),new V.ab(0,0,1,1),new V.Q(1,-1,0),new V.V(1,1),g,null)
i=a1.a
g=new V.y(1,1,1)
g=g.q(0,Math.sqrt(g.D(g)))
a4=i.bD(new V.au(0,2,5,6),new V.ab(0,1,0,1),new V.Q(1,1,0),new V.V(1,0),g,null)
i=a1.a
g=V.aY()
e=new V.y(-1,1,1)
e=e.q(0,Math.sqrt(e.D(e)))
a5=i.bD(new V.au(0,2,4,7),new V.ab(1,1,0,1),new V.Q(-1,1,0),g,e,null)
a1.d.ek(H.b([a2,a3,a4,a5],[F.a4]))
a1.am()
n.saa(0,a1)
a0.d=n
a0.e=null
n=new O.dU()
n.b=1.0471975511965976
n.d=new V.a1(1,1,1)
d=n.c
n.c=m
m.gv().h(0,n.gaV())
i=new D.F("boxTexture",d,n.c,n,[T.bX])
i.b=!0
n.W(i)
a0.sbq(n)
a0.sbp(0,o)
a0.sbh(a)
a6=new M.dk()
a6.sho(0,O.jC(E.al))
a6.d.b8(a6.gi3(),a6.gi5())
a6.e=null
a6.f=null
a6.r=null
a6.x=null
a7=X.jF(!0,!0,!1,null,2000,null,0)
a6.sbh(null)
a6.sbp(0,a7)
a6.sbq(null)
a6.sbh(a)
a6.sbq(j)
a6.sbp(0,o)
a6.d.h(0,p)
n=M.aB
i=H.b([a0,a6],[n])
g=new M.de()
g.bx(n)
g.e=!1
g.f=null
g.b8(g.giE(),g.giG())
g.ad(0,i)
n=q.d
if(n!==g){if(n!=null)n.gv().G(0,q.gdI())
q.d=g
g.gv().h(0,q.gdI())
q.dJ()}n=new V.fV("shapes",!0)
s=C.z.dw(s,"shapes")
n.c=s
if(s==null)H.p("Failed to find shapes for RadioGroup")
n.aA(0,"Cube",new T.jf(p))
n.aA(0,"Cuboid",new T.jg(p))
n.aA(0,"Cylinder",new T.jh(p))
n.aA(0,"Cone",new T.ji(p))
n.aA(0,"LatLonSphere",new T.jj(p))
n.aA(0,"IsoSphere",new T.jk(p))
n.bC(0,"Sphere",new T.jl(p),!0)
n.aA(0,"Toroid",new T.jm(p))
n.aA(0,"Knot",new T.jn(p))
s=q.z
if(s==null){s=D.K()
q.z=s}n={func:1,ret:-1,args:[D.w]}
i=H.k(new T.jo(u,j),n)
if(s.b==null)s.sbd(H.b([],[n]))
s=s.b;(s&&C.a).h(s,i)
V.o0(q)},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jI.prototype={}
J.ac.prototype={
B:function(a,b){return a===b},
gL:function(a){return H.cv(a)},
i:function(a){return"Instance of '"+H.bS(a)+"'"}}
J.fm.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iN:1}
J.dt.prototype={
B:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iD:1}
J.du.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.fS.prototype={}
J.bx.prototype={}
J.b9.prototype={
i:function(a){var u=a[$.ly()]
if(u==null)return this.fT(a)
return"JavaScript function for "+H.j(J.aq(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibp:1}
J.aJ.prototype={
h:function(a,b){H.z(b,H.t(a,0))
if(!!a.fixed$length)H.p(P.Z("add"))
a.push(b)},
l9:function(a,b){var u
if(!!a.fixed$length)H.p(P.Z("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dP(b,null,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.p(P.Z("remove"))
for(u=0;u<a.length;++u)if(J.G(a[u],b)){a.splice(u,1)
return!0}return!1},
ad:function(a,b){var u,t
H.h(b,"$il",[H.t(a,0)],"$al")
if(!!a.fixed$length)H.p(P.Z("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.A)(b),++t)a.push(b[t])},
a1:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.b5(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.t(u,t,H.j(a[t]))
return u.join(b)},
kN:function(a){return this.l(a,"")},
kE:function(a,b,c,d){var u,t,s
H.z(b,d)
H.k(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.b5(a))}return t},
kD:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.N,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.b5(a))}throw H.c(H.fk())},
kC:function(a,b){return this.kD(a,b,null)},
af:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
fQ:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a9(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.a9(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.t(a,0)])
return H.b(a.slice(b,c),[H.t(a,0)])},
gkB:function(a){if(a.length>0)return a[0]
throw H.c(H.fk())},
gaF:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fk())},
fO:function(a,b,c,d,e){var u,t,s
u=H.t(a,0)
H.h(d,"$il",[u],"$al")
if(!!a.immutable$list)H.p(P.Z("setRange"))
P.bc(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.h(d,"$ia",[u],"$aa")
u=J.c6(d)
if(e+t>u.gm(d))throw H.c(H.mg())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bv:function(a,b,c,d){return this.fO(a,b,c,d,0)},
eo:function(a,b){var u,t
H.k(b,{func:1,ret:P.N,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.b5(a))}return!1},
Z:function(a,b){var u
for(u=0;u<a.length;++u)if(J.G(a[u],b))return!0
return!1},
i:function(a){return P.jG(a,"[","]")},
gU:function(a){return new J.ar(a,a.length,0,[H.t(a,0)])},
gL:function(a){return H.cv(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.p(P.Z("set length"))
if(b<0)throw H.c(P.a9(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.c4(a,b))
return a[b]},
t:function(a,b,c){H.z(c,H.t(a,0))
if(!!a.immutable$list)H.p(P.Z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c4(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.t(a,0)]
H.h(b,"$ia",u,"$aa")
t=C.f.n(a.length,b.gm(b))
u=H.b([],u)
this.sm(u,t)
this.bv(u,0,a.length,a)
this.bv(u,a.length,t,b)
return u},
$il:1,
$ia:1}
J.jH.prototype={}
J.ar.prototype={
gM:function(){return this.d},
F:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.A(u))
s=this.c
if(s>=t){this.sdX(null)
return!1}this.sdX(u[s]);++this.c
return!0},
sdX:function(a){this.d=H.z(a,H.t(this,0))},
$iaT:1}
J.bt.prototype={
lm:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.Z(""+a+".toInt()"))},
d4:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.Z(""+a+".floor()"))},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.Z(""+a+".round()"))},
fp:function(a,b){var u,t
if(b>20)throw H.c(P.a9(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bs:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a9(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a5(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.p(P.Z("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.w("0",r)},
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
n:function(a,b){if(typeof b!=="number")throw H.c(H.ap(b))
return a+b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.ap(b))
return a-b},
w:function(a,b){if(typeof b!=="number")throw H.c(H.ap(b))
return a*b},
bu:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fW:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ef(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.ef(a,b)},
ef:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.Z("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
b_:function(a,b){var u
if(a>0)u=this.ee(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
jf:function(a,b){if(b<0)throw H.c(H.ap(b))
return this.ee(a,b)},
ee:function(a,b){return b>31?0:a>>>b},
$ir:1,
$iai:1}
J.ds.prototype={$im:1}
J.dr.prototype={}
J.b8.prototype={
a5:function(a,b){if(b<0)throw H.c(H.c4(a,b))
if(b>=a.length)H.p(H.c4(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(b>=a.length)throw H.c(H.c4(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.jz(b,null,null))
return a+b},
b5:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ap(b))
c=P.bc(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aj:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ap(c))
if(typeof c!=="number")return c.a_()
if(c<0||c>a.length)throw H.c(P.a9(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a8:function(a,b){return this.aj(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ap(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.a_()
if(b<0)throw H.c(P.dP(b,null,null))
if(b>c)throw H.c(P.dP(b,null,null))
if(c>a.length)throw H.c(P.dP(c,null,null))
return a.substring(b,c)},
aw:function(a,b){return this.A(a,b,null)},
lo:function(a){return a.toLowerCase()},
w:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kZ:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.w(c,u)+a},
ap:function(a,b){return this.kZ(a,b," ")},
f7:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a9(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
f6:function(a,b){return this.f7(a,b,0)},
i:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$iky:1,
$if:1}
H.u.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.c.a5(this.a,b)},
$acM:function(){return[P.m]},
$aU:function(){return[P.m]},
$al:function(){return[P.m]},
$aa:function(){return[P.m]}}
H.f0.prototype={}
H.bN.prototype={
gU:function(a){return new H.cn(this,this.gm(this),0,[H.aa(this,"bN",0)])},
c6:function(a,b){return this.fS(0,H.k(b,{func:1,ret:P.N,args:[H.aa(this,"bN",0)]}))}}
H.cn.prototype={
gM:function(){return this.d},
F:function(){var u,t,s,r
u=this.a
t=J.c6(u)
s=t.gm(u)
if(this.b!==s)throw H.c(P.b5(u))
r=this.c
if(r>=s){this.sbb(null)
return!1}this.sbb(t.af(u,r));++this.c
return!0},
sbb:function(a){this.d=H.z(a,H.t(this,0))},
$iaT:1}
H.fA.prototype={
gU:function(a){return new H.fB(J.bB(this.a),this.b,this.$ti)},
gm:function(a){return J.aH(this.a)},
af:function(a,b){return this.b.$1(J.eI(this.a,b))},
$al:function(a,b){return[b]}}
H.fB.prototype={
F:function(){var u=this.b
if(u.F()){this.sbb(this.c.$1(u.gM()))
return!0}this.sbb(null)
return!1},
gM:function(){return this.a},
sbb:function(a){this.a=H.z(a,H.t(this,1))},
$aaT:function(a,b){return[b]}}
H.fC.prototype={
gm:function(a){return J.aH(this.a)},
af:function(a,b){return this.b.$1(J.eI(this.a,b))},
$abN:function(a,b){return[b]},
$al:function(a,b){return[b]}}
H.cP.prototype={
gU:function(a){return new H.i1(J.bB(this.a),this.b,this.$ti)}}
H.i1.prototype={
F:function(){var u,t
for(u=this.a,t=this.b;u.F();)if(t.$1(u.gM()))return!0
return!1},
gM:function(){return this.a.gM()}}
H.bK.prototype={}
H.cM.prototype={
t:function(a,b,c){H.z(c,H.aa(this,"cM",0))
throw H.c(P.Z("Cannot modify an unmodifiable list"))}}
H.e9.prototype={}
H.eT.prototype={
i:function(a){return P.jK(this)},
t:function(a,b,c){H.z(b,H.t(this,0))
H.z(c,H.t(this,1))
return H.m8()},
$iJ:1}
H.eU.prototype={
gm:function(a){return this.a},
bF:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.bF(b))return
return this.dY(b)},
dY:function(a){return this.b[H.E(a)]},
a1:function(a,b){var u,t,s,r,q
u=H.t(this,1)
H.k(b,{func:1,ret:-1,args:[H.t(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.z(this.dY(q),u))}}}
H.fY.prototype={}
H.hr.prototype={
ao:function(a){var u,t,s
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
H.hF.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jw.prototype={
$1:function(a){if(!!J.T(a).$ibo)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:18}
H.et.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iav:1}
H.cf.prototype={
i:function(a){return"Closure '"+H.bS(this).trim()+"'"},
$ibp:1,
glv:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hj.prototype={}
H.hd.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c9(u)+"'"}}
H.cc.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cv(this.a)
else t=typeof u!=="object"?J.d7(u):H.cv(u)
return(t^H.cv(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bS(u)+"'")}}
H.ht.prototype={
i:function(a){return this.a}}
H.eP.prototype={
i:function(a){return this.a}}
H.h2.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.aL.prototype={
gm:function(a){return this.a},
gkM:function(a){return this.a===0},
gaE:function(){return new H.fs(this,[H.t(this,0)])},
bF:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dU(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dU(t,a)}else return this.kJ(a)},
kJ:function(a){var u=this.d
if(u==null)return!1
return this.d7(this.cm(u,this.d6(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.by(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.by(r,b)
s=t==null?null:t.b
return s}else return this.kK(b)},
kK:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.cm(u,this.d6(a))
s=this.d7(t,a)
if(s<0)return
return t[s].b},
t:function(a,b,c){var u,t
H.z(b,H.t(this,0))
H.z(c,H.t(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cw()
this.b=u}this.dL(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cw()
this.c=t}this.dL(t,b,c)}else this.kL(b,c)},
kL:function(a,b){var u,t,s,r
H.z(a,H.t(this,0))
H.z(b,H.t(this,1))
u=this.d
if(u==null){u=this.cw()
this.d=u}t=this.d6(a)
s=this.cm(u,t)
if(s==null)this.cG(u,t,[this.cf(a,b)])
else{r=this.d7(s,a)
if(r>=0)s[r].b=b
else s.push(this.cf(a,b))}},
a1:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.b5(this))
u=u.c}},
dL:function(a,b,c){var u
H.z(b,H.t(this,0))
H.z(c,H.t(this,1))
u=this.by(a,b)
if(u==null)this.cG(a,b,this.cf(b,c))
else u.b=c},
hf:function(){this.r=this.r+1&67108863},
cf:function(a,b){var u,t
u=new H.fr(H.z(a,H.t(this,0)),H.z(b,H.t(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hf()
return u},
d6:function(a){return J.d7(a)&0x3ffffff},
d7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1},
i:function(a){return P.jK(this)},
by:function(a,b){return a[b]},
cm:function(a,b){return a[b]},
cG:function(a,b,c){a[b]=c},
ht:function(a,b){delete a[b]},
dU:function(a,b){return this.by(a,b)!=null},
cw:function(){var u=Object.create(null)
this.cG(u,"<non-identifier-key>",u)
this.ht(u,"<non-identifier-key>")
return u},
$iks:1}
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
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.b5(u))
else{u=this.c
if(u==null){this.sdM(null)
return!1}else{this.sdM(u.a)
this.c=this.c.c
return!0}}},
sdM:function(a){this.d=H.z(a,H.t(this,0))},
$iaT:1}
H.j9.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.ja.prototype={
$2:function(a,b){return this.a(a,b)},
$S:36}
H.jb.prototype={
$1:function(a){return this.a(H.E(a))},
$S:35}
H.fn.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$iky:1,
$imG:1}
H.bQ.prototype={$ibQ:1,$imQ:1}
H.dF.prototype={
gm:function(a){return a.length},
$iaK:1,
$aaK:function(){}}
H.dG.prototype={
j:function(a,b){H.bd(b,a,a.length)
return a[b]},
t:function(a,b,c){H.nE(c)
H.bd(b,a,a.length)
a[b]=c},
$abK:function(){return[P.r]},
$aU:function(){return[P.r]},
$il:1,
$al:function(){return[P.r]},
$ia:1,
$aa:function(){return[P.r]}}
H.dH.prototype={
t:function(a,b,c){H.a8(c)
H.bd(b,a,a.length)
a[b]=c},
$abK:function(){return[P.m]},
$aU:function(){return[P.m]},
$il:1,
$al:function(){return[P.m]},
$ia:1,
$aa:function(){return[P.m]}}
H.fJ.prototype={
j:function(a,b){H.bd(b,a,a.length)
return a[b]}}
H.fK.prototype={
j:function(a,b){H.bd(b,a,a.length)
return a[b]}}
H.fL.prototype={
j:function(a,b){H.bd(b,a,a.length)
return a[b]}}
H.fM.prototype={
j:function(a,b){H.bd(b,a,a.length)
return a[b]}}
H.dI.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bd(b,a,a.length)
return a[b]},
$iop:1}
H.cs.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bd(b,a,a.length)
return a[b]},
$ics:1,
$iO:1}
H.cT.prototype={}
H.cU.prototype={}
H.cV.prototype={}
H.cW.prototype={}
P.i3.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:28}
P.i2.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:34}
P.i4.prototype={
$0:function(){this.a.$0()},
$S:0}
P.i5.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eu.prototype={
hd:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c3(new P.iI(this,b),0),a)
else throw H.c(P.Z("`setTimeout()` not found."))},
he:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c3(new P.iH(this,a,Date.now(),b),0),a)
else throw H.c(P.Z("Periodic timer."))},
$ib_:1}
P.iI.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.iH.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fW(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.b3.prototype={
kR:function(a){if(this.c!==6)return!0
return this.b.b.dn(H.k(this.d,{func:1,ret:P.N,args:[P.M]}),a.a,P.N,P.M)},
kH:function(a){var u,t,s,r
u=this.e
t=P.M
s={futureOr:1,type:H.t(this,1)}
r=this.b.b
if(H.eD(u,{func:1,args:[P.M,P.av]}))return H.k2(r.lf(u,a.a,a.b,null,t,P.av),s)
else return H.k2(r.dn(H.k(u,{func:1,args:[P.M]}),a.a,null,t),s)}}
P.aF.prototype={
fo:function(a,b,c){var u,t,s,r
u=H.t(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Y
if(t!==C.l){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.nq(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aF(0,$.Y,[c])
r=b==null?1:3
this.dO(new P.b3(s,r,a,b,[u,c]))
return s},
ll:function(a,b){return this.fo(a,null,b)},
dO:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$ib3")
this.c=a}else{if(u===2){t=H.d(this.c,"$iaF")
u=t.a
if(u<4){t.dO(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.j0(null,null,u,H.k(new P.id(this,a),{func:1,ret:-1}))}},
ea:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$ib3")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iaF")
t=p.a
if(t<4){p.ea(a)
return}this.a=t
this.c=p.c}u.a=this.bA(a)
t=this.b
t.toString
P.j0(null,null,t,H.k(new P.ii(u,this),{func:1,ret:-1}))}},
cC:function(){var u=H.d(this.c,"$ib3")
this.c=null
return this.bA(u)},
bA:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dQ:function(a){var u,t,s
u=H.t(this,0)
H.k2(a,{futureOr:1,type:u})
t=this.$ti
if(H.d1(a,"$icj",t,"$acj"))if(H.d1(a,"$iaF",t,null))P.kZ(a,this)
else P.n1(a,this)
else{s=this.cC()
H.z(a,u)
this.a=4
this.c=a
P.cS(this,s)}},
dR:function(a,b){var u
H.d(b,"$iav")
u=this.cC()
this.a=8
this.c=new P.aj(a,b)
P.cS(this,u)},
$icj:1}
P.id.prototype={
$0:function(){P.cS(this.a,this.b)},
$S:0}
P.ii.prototype={
$0:function(){P.cS(this.b,this.a.a)},
$S:0}
P.ie.prototype={
$1:function(a){var u=this.a
u.a=0
u.dQ(a)},
$S:28}
P.ig.prototype={
$2:function(a,b){H.d(b,"$iav")
this.a.dR(a,b)},
$1:function(a){return this.$2(a,null)},
$S:33}
P.ih.prototype={
$0:function(){this.a.dR(this.b,this.c)},
$S:0}
P.il.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.fn(H.k(r.d,{func:1}),null)}catch(q){t=H.af(q)
s=H.c7(q)
if(this.d){r=H.d(this.a.a.c,"$iaj").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$iaj")
else p.b=new P.aj(t,s)
p.a=!0
return}if(!!J.T(u).$icj){if(u instanceof P.aF&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$iaj")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.ll(new P.im(o),null)
r.a=!1}},
$S:3}
P.im.prototype={
$1:function(a){return this.a},
$S:53}
P.ik.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.t(s,0)
q=H.z(this.c,r)
p=H.t(s,1)
this.a.b=s.b.b.dn(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.af(o)
t=H.c7(o)
s=this.a
s.b=new P.aj(u,t)
s.a=!0}},
$S:3}
P.ij.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$iaj")
r=this.c
if(r.kR(u)&&r.e!=null){q=this.b
q.b=r.kH(u)
q.a=!1}}catch(p){t=H.af(p)
s=H.c7(p)
r=H.d(this.a.a.c,"$iaj")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aj(t,s)
n.a=!0}},
$S:3}
P.eh.prototype={}
P.he.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.aF(0,$.Y,[P.m])
u.a=0
s=H.t(this,0)
r=H.k(new P.hg(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.hh(u,t),{func:1,ret:-1})
W.a6(this.a,this.b,r,!1,s)
return t}}
P.hg.prototype={
$1:function(a){H.z(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.t(this.b,0)]}}}
P.hh.prototype={
$0:function(){this.b.dQ(this.a.a)},
$S:0}
P.cz.prototype={}
P.hf.prototype={}
P.b_.prototype={}
P.aj.prototype={
i:function(a){return H.j(this.a)},
$ibo:1}
P.iS.prototype={$ioE:1}
P.j_.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dK()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.is.prototype={
lg:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.l===$.Y){a.$0()
return}P.la(null,null,this,a,-1)}catch(s){u=H.af(s)
t=H.c7(s)
P.iZ(null,null,this,u,H.d(t,"$iav"))}},
lh:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.l===$.Y){a.$1(b)
return}P.lb(null,null,this,a,b,-1,c)}catch(s){u=H.af(s)
t=H.c7(s)
P.iZ(null,null,this,u,H.d(t,"$iav"))}},
k6:function(a,b){return new P.iu(this,H.k(a,{func:1,ret:b}),b)},
cO:function(a){return new P.it(this,H.k(a,{func:1,ret:-1}))},
er:function(a,b){return new P.iv(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
fn:function(a,b){H.k(a,{func:1,ret:b})
if($.Y===C.l)return a.$0()
return P.la(null,null,this,a,b)},
dn:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.Y===C.l)return a.$1(b)
return P.lb(null,null,this,a,b,c,d)},
lf:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.Y===C.l)return a.$2(b,c)
return P.nr(null,null,this,a,b,c,d,e,f)}}
P.iu.prototype={
$0:function(){return this.a.fn(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.it.prototype={
$0:function(){return this.a.lg(this.b)},
$S:3}
P.iv.prototype={
$1:function(a){var u=this.c
return this.a.lh(this.b,H.z(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iq.prototype={
gU:function(a){var u=new P.en(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
Z:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibZ")!=null}else{t=this.hp(b)
return t}},
hp:function(a){var u=this.d
if(u==null)return!1
return this.ck(this.dZ(u,a),a)>=0},
h:function(a,b){var u,t
H.z(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jS()
this.b=u}return this.dN(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jS()
this.c=t}return this.dN(t,b)}else return this.hg(b)},
hg:function(a){var u,t,s
H.z(a,H.t(this,0))
u=this.d
if(u==null){u=P.jS()
this.d=u}t=this.dS(a)
s=u[t]
if(s==null)u[t]=[this.cz(a)]
else{if(this.ck(s,a)>=0)return!1
s.push(this.cz(a))}return!0},
G:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iU(this.c,b)
else return this.iR(b)},
iR:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.dZ(u,a)
s=this.ck(t,a)
if(s<0)return!1
this.eg(t.splice(s,1)[0])
return!0},
dN:function(a,b){H.z(b,H.t(this,0))
if(H.d(a[b],"$ibZ")!=null)return!1
a[b]=this.cz(b)
return!0},
iU:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibZ")
if(u==null)return!1
this.eg(u)
delete a[b]
return!0},
e3:function(){this.r=1073741823&this.r+1},
cz:function(a){var u,t
u=new P.bZ(H.z(a,H.t(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.e3()
return u},
eg:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.e3()},
dS:function(a){return J.d7(a)&1073741823},
dZ:function(a,b){return a[this.dS(b)]},
ck:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1}}
P.bZ.prototype={}
P.en.prototype={
gM:function(){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.b5(u))
else{u=this.c
if(u==null){this.sdP(null)
return!1}else{this.sdP(H.z(u.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
sdP:function(a){this.d=H.z(a,H.t(this,0))},
$iaT:1}
P.fu.prototype={
$2:function(a,b){this.a.t(0,H.z(a,this.b),H.z(b,this.c))},
$S:6}
P.fv.prototype={$il:1,$ia:1}
P.U.prototype={
gU:function(a){return new H.cn(a,this.gm(a),0,[H.d3(this,a,"U",0)])},
af:function(a,b){return this.j(a,b)},
ln:function(a,b){var u,t
u=H.b([],[H.d3(this,a,"U",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.t(u,t,this.j(a,t))
return u},
dr:function(a){return this.ln(a,!0)},
n:function(a,b){var u,t
u=[H.d3(this,a,"U",0)]
H.h(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sm(t,C.f.n(this.gm(a),b.gm(b)))
C.a.bv(t,0,this.gm(a),a)
C.a.bv(t,this.gm(a),t.length,b)
return t},
kx:function(a,b,c,d){var u
H.z(d,H.d3(this,a,"U",0))
P.bc(b,c,this.gm(a),null,null,null)
for(u=b;u<c;++u)this.t(a,u,d)},
i:function(a){return P.jG(a,"[","]")}}
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
$S:6}
P.bO.prototype={
a1:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.aa(this,"bO",0),H.aa(this,"bO",1)]})
for(u=J.bB(this.gaE());u.F();){t=u.gM()
b.$2(t,this.j(0,t))}},
gm:function(a){return J.aH(this.gaE())},
i:function(a){return P.jK(this)},
$iJ:1}
P.iJ.prototype={
t:function(a,b,c){H.z(b,H.t(this,0))
H.z(c,H.t(this,1))
throw H.c(P.Z("Cannot modify unmodifiable map"))}}
P.fz.prototype={
j:function(a,b){return this.a.j(0,b)},
t:function(a,b,c){this.a.t(0,H.z(b,H.t(this,0)),H.z(c,H.t(this,1)))},
a1:function(a,b){this.a.a1(0,H.k(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gm:function(a){var u=this.a
return u.gm(u)},
i:function(a){return J.aq(this.a)},
$iJ:1}
P.ea.prototype={}
P.ix.prototype={
ad:function(a,b){var u
for(u=J.bB(H.h(b,"$il",this.$ti,"$al"));u.F();)this.h(0,u.gM())},
i:function(a){return P.jG(this,"{","}")},
af:function(a,b){var u,t,s
if(b<0)H.p(P.a9(b,0,null,"index",null))
for(u=P.n5(this,this.r,H.t(this,0)),t=0;u.F();){s=u.d
if(b===t)return s;++t}throw H.c(P.bM(b,this,"index",null,t))},
$il:1,
$ikG:1}
P.eo.prototype={}
P.ey.prototype={}
P.eL.prototype={
kS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.bc(b,c,a.length,null,null,null)
u=$.lN()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.K(a,t)
if(m===37){l=n+2
if(l<=c){k=H.j8(C.c.K(a,n))
j=H.j8(C.c.K(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.c.a5("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ag("")
g=r.a+=C.c.A(a,s,t)
r.a=g+H.bT(m)
s=n
continue}}throw H.c(P.a2("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.A(a,s,c)
f=g.length
if(q>=0)P.kh(a,p,c,q,o,f)
else{e=C.f.bu(f-1,4)+1
if(e===1)throw H.c(P.a2("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b5(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.kh(a,p,c,q,o,d)
else{e=C.f.bu(d,4)
if(e===1)throw H.c(P.a2("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.b5(a,c,c,e===2?"==":"=")}return a},
$abF:function(){return[[P.a,P.m],P.f]}}
P.eM.prototype={
$abm:function(){return[[P.a,P.m],P.f]}}
P.bF.prototype={}
P.bm.prototype={}
P.f2.prototype={
$abF:function(){return[P.f,[P.a,P.m]]}}
P.fh.prototype={
i:function(a){return this.a}}
P.fg.prototype={
hq:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.ag("")
if(r>b)q.a+=C.c.A(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.m1(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abm:function(){return[P.f,P.f]}}
P.hM.prototype={
gkw:function(){return C.T}}
P.hO.prototype={
bi:function(a,b,c){var u,t,s
c=P.bc(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iQ(t)
if(s.hC(a,b,c)!==c)s.ei(J.lW(a,c-1),0)
return new Uint8Array(t.subarray(0,H.nl(0,s.b,t.length)))},
cU:function(a){return this.bi(a,0,null)},
$abm:function(){return[P.f,[P.a,P.m]]}}
P.iQ.prototype={
ei:function(a,b){var u,t,s,r,q
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
hC:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a5(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.K(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.ei(r,C.c.K(a,p)))s=p}else if(r<=2047){q=this.b
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
P.hN.prototype={
bi:function(a,b,c){var u,t,s,r
H.h(a,"$ia",[P.m],"$aa")
u=P.mT(!1,a,b,c)
if(u!=null)return u
c=P.bc(b,c,J.aH(a),null,null,null)
t=new P.ag("")
s=new P.iO(!1,t)
s.bi(a,b,c)
if(s.e>0){H.p(P.a2("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.bT(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cU:function(a){return this.bi(a,0,null)},
$abm:function(){return[[P.a,P.m],P.f]}}
P.iO.prototype={
bi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.h(a,"$ia",[P.m],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.iP(this,b,c,a)
$label0$0:for(q=J.c6(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.c8()
if((n&192)!==128){m=P.a2("Bad UTF-8 encoding 0x"+C.f.bs(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.H,m)
if(u<=C.H[m]){m=P.a2("Overlong encoding of 0x"+C.f.bs(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a2("Character outside valid Unicode range: 0x"+C.f.bs(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.bT(u)
this.c=!1}for(m=o<c;m;){l=P.ns(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.a_()
if(n<0){i=P.a2("Negative UTF-8 code unit: -0x"+C.f.bs(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a2("Bad UTF-8 encoding 0x"+C.f.bs(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.iP.prototype={
$2:function(a,b){this.a.b.a+=P.dY(this.d,a,b)},
$S:47}
P.N.prototype={}
P.ak.prototype={
B:function(a,b){if(b==null)return!1
return b instanceof P.ak&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.f.b_(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.m9(H.mB(this))
t=P.dh(H.mz(this))
s=P.dh(H.mv(this))
r=P.dh(H.mw(this))
q=P.dh(H.my(this))
p=P.dh(H.mA(this))
o=P.ma(H.mx(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.r.prototype={}
P.aS.prototype={
n:function(a,b){return new P.aS(C.f.n(this.a,b.ghv()))},
u:function(a,b){return new P.aS(C.f.u(this.a,b.ghv()))},
B:function(a,b){if(b==null)return!1
return b instanceof P.aS&&this.a===b.a},
gL:function(a){return C.f.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.f_()
t=this.a
if(t<0)return"-"+new P.aS(0-t).i(0)
s=u.$1(C.f.a9(t,6e7)%60)
r=u.$1(C.f.a9(t,1e6)%60)
q=new P.eZ().$1(t%1e6)
return""+C.f.a9(t,36e8)+":"+H.j(s)+":"+H.j(r)+"."+H.j(q)}}
P.eZ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:23}
P.f_.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:23}
P.bo.prototype={}
P.dK.prototype={
i:function(a){return"Throw of null."}}
P.aI.prototype={
gcj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gci:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gcj()+t+s
if(!this.a)return r
q=this.gci()
p=P.f4(this.b)
return r+q+": "+p}}
P.bU.prototype={
gcj:function(){return"RangeError"},
gci:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.j(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.j(u)
else if(s>u)t=": Not in range "+H.j(u)+".."+H.j(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.j(u)}return t}}
P.fj.prototype={
gcj:function(){return"RangeError"},
gci:function(){var u,t
u=H.a8(this.b)
if(typeof u!=="number")return u.a_()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.j(t)},
gm:function(a){return this.f}}
P.hG.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hD.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bW.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eS.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.f4(u)+"."}}
P.fR.prototype={
i:function(a){return"Out of Memory"},
$ibo:1}
P.dX.prototype={
i:function(a){return"Stack Overflow"},
$ibo:1}
P.eW.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ek.prototype={
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
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.K(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.a5(r,m)
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
return t+h+f+g+"\n"+C.c.w(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.j(s)+")"):t}}
P.bp.prototype={}
P.m.prototype={}
P.l.prototype={
c6:function(a,b){var u=H.aa(this,"l",0)
return new H.cP(this,H.k(b,{func:1,ret:P.N,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gU(this)
for(t=0;u.F();)++t
return t},
gaS:function(a){var u,t
u=this.gU(this)
if(!u.F())throw H.c(H.fk())
t=u.gM()
if(u.F())throw H.c(H.mh())
return t},
af:function(a,b){var u,t,s
if(b<0)H.p(P.a9(b,0,null,"index",null))
for(u=this.gU(this),t=0;u.F();){s=u.gM()
if(b===t)return s;++t}throw H.c(P.bM(b,this,"index",null,t))},
i:function(a){return P.mf(this,"(",")")}}
P.aT.prototype={}
P.a.prototype={$il:1}
P.J.prototype={}
P.D.prototype={
gL:function(a){return P.M.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.ai.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
B:function(a,b){return this===b},
gL:function(a){return H.cv(this)},
i:function(a){return"Instance of '"+H.bS(this)+"'"},
toString:function(){return this.i(this)}}
P.av.prototype={}
P.f.prototype={$iky:1}
P.ag.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iod:1}
P.hL.prototype={
$2:function(a,b){var u,t,s,r
u=P.f
H.h(a,"$iJ",[u,u],"$aJ")
H.E(b)
t=J.d2(b).f6(b,"=")
if(t===-1){if(b!=="")a.t(0,P.jU(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.A(b,0,t)
r=C.c.aw(b,t+1)
u=this.a
a.t(0,P.jU(s,0,s.length,u,!0),P.jU(r,0,r.length,u,!0))}return a},
$S:44}
P.hI.prototype={
$2:function(a,b){throw H.c(P.a2("Illegal IPv4 address, "+a,this.a,b))},
$S:48}
P.hJ.prototype={
$2:function(a,b){throw H.c(P.a2("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:50}
P.hK.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eF(C.c.A(this.b,a,b),null,16)
if(typeof u!=="number")return u.a_()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:40}
P.c_.prototype={
gfv:function(){return this.b},
gd5:function(a){var u=this.c
if(u==null)return""
if(C.c.a8(u,"["))return C.c.A(u,1,u.length-1)
return u},
gbZ:function(a){var u=this.d
if(u==null)return P.l2(this.a)
return u},
gdi:function(){var u=this.f
return u==null?"":u},
gf1:function(){var u=this.r
return u==null?"":u},
dm:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
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
if(s&&!C.c.a8(d,"/"))d="/"+d
g=P.jT(g,0,0,h)
return new P.c_(i,j,c,f,d,g,this.r)},
fl:function(a,b){return this.dm(a,null,null,null,null,null,null,b,null,null)},
gdj:function(){var u,t
if(this.Q==null){u=this.f
t=P.f
this.siQ(new P.ea(P.kQ(u==null?"":u,C.m),[t,t]))}return this.Q},
gf2:function(){return this.c!=null},
gf5:function(){return this.f!=null},
gf3:function(){return this.r!=null},
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
if(!!J.T(b).$ijO)if(this.a==b.gcc())if(this.c!=null===b.gf2())if(this.b==b.gfv())if(this.gd5(this)==b.gd5(b))if(this.gbZ(this)==b.gbZ(b))if(this.e===b.gfj(b)){u=this.f
t=u==null
if(!t===b.gf5()){if(t)u=""
if(u===b.gdi()){u=this.r
t=u==null
if(!t===b.gf3()){if(t)u=""
u=u===b.gf1()}else u=!1}else u=!1}else u=!1}else u=!1
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
siQ:function(a){var u=P.f
this.Q=H.h(a,"$iJ",[u,u],"$aJ")},
$ijO:1,
gcc:function(){return this.a},
gfj:function(a){return this.e}}
P.iK.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.n()
throw H.c(P.a2("Invalid port",this.a,u+1))},
$S:37}
P.iL.prototype={
$1:function(a){return P.ez(C.aa,a,C.m,!1)},
$S:17}
P.iN.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.ez(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.ez(C.w,b,C.m,!0))}},
$S:39}
P.iM.prototype={
$2:function(a,b){var u,t
H.E(a)
if(b==null||typeof b==="string")this.a.$2(a,H.E(b))
else for(u=J.bB(H.lq(b,"$il")),t=this.a;u.F();)t.$2(a,H.E(u.gM()))},
$S:49}
P.hH.prototype={
gfu:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.c.f7(t,"?",u)
r=t.length
if(s>=0){q=P.cY(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.i8(this,"data",null,null,null,P.cY(t,u,r,C.L,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.iW.prototype={
$1:function(a){return new Uint8Array(96)},
$S:46}
P.iV.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.lX(u,0,96,b)
return u},
$S:43}
P.iX.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.K(b,t)^96
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.iY.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.K(b,0),t=C.c.K(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.iA.prototype={
gf2:function(){return this.c>0},
gf4:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.B(t)
t=u+1<t
u=t}else u=!1
return u},
gf5:function(){var u=this.f
if(typeof u!=="number")return u.a_()
return u<this.r},
gf3:function(){return this.r<this.a.length},
ge1:function(){return this.b===4&&C.c.a8(this.a,"http")},
ge2:function(){return this.b===5&&C.c.a8(this.a,"https")},
gcc:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.ge1()){this.x="http"
u="http"}else if(this.ge2()){this.x="https"
u="https"}else if(u===4&&C.c.a8(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a8(this.a,"package")){this.x="package"
u="package"}else{u=C.c.A(this.a,0,u)
this.x=u}return u},
gfv:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.A(this.a,t,u-1):""},
gd5:function(a){var u=this.c
return u>0?C.c.A(this.a,u,this.d):""},
gbZ:function(a){var u
if(this.gf4()){u=this.d
if(typeof u!=="number")return u.n()
return P.eF(C.c.A(this.a,u+1,this.e),null,null)}if(this.ge1())return 80
if(this.ge2())return 443
return 0},
gfj:function(a){return C.c.A(this.a,this.e,this.f)},
gdi:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.a_()
return u<t?C.c.A(this.a,u+1,t):""},
gf1:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.aw(t,u+1):""},
gdj:function(){var u=this.f
if(typeof u!=="number")return u.a_()
if(u>=this.r)return C.ab
u=P.f
return new P.ea(P.kQ(this.gdi(),C.m),[u,u])},
dm:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iJ",[P.f,null],"$aJ")
i=this.gcc()
u=i==="file"
t=this.c
j=t>0?C.c.A(this.a,this.b+3,t):""
f=this.gf4()?this.gbZ(this):null
t=this.c
if(t>0)c=C.c.A(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.A(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a8(d,"/"))d="/"+d
g=P.jT(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.aw(t,s+1)
return new P.c_(i,j,c,f,d,g,b)},
fl:function(a,b){return this.dm(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.c.gL(this.a)
this.y=u}return u},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ijO&&this.a===b.i(0)},
i:function(a){return this.a},
$ijO:1}
P.i8.prototype={}
W.x.prototype={}
W.d8.prototype={
i:function(a){return String(a)},
$id8:1}
W.eJ.prototype={
i:function(a){return String(a)}}
W.cb.prototype={$icb:1}
W.bj.prototype={$ibj:1}
W.bD.prototype={
c9:function(a,b,c){if(c!=null)return this.hD(a,b,P.nz(c,null))
return this.hE(a,b)},
fD:function(a,b){return this.c9(a,b,null)},
hD:function(a,b,c){return a.getContext(b,c)},
hE:function(a,b){return a.getContext(b)},
$ibD:1,
$ikk:1}
W.bE.prototype={
hF:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kt:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibE:1}
W.bk.prototype={
gm:function(a){return a.length}}
W.cg.prototype={
gm:function(a){return a.length}}
W.eV.prototype={}
W.aC.prototype={$iaC:1}
W.ch.prototype={
jY:function(a,b){return a.adoptNode(b)},
dw:function(a,b){return a.getElementById(b)}}
W.eY.prototype={
i:function(a){return String(a)}}
W.di.prototype={
kj:function(a,b){return a.createHTMLDocument(b)}}
W.dj.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
B:function(a,b){var u
if(b==null)return!1
if(!H.d1(b,"$iaD",[P.ai],"$aaD"))return!1
u=J.a7(b)
return a.left===u.gbX(b)&&a.top===u.gc4(b)&&a.width===u.gc7(b)&&a.height===u.gbW(b)},
gL:function(a){return W.l0(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
geu:function(a){return a.bottom},
gbW:function(a){return a.height},
gbX:function(a){return a.left},
gc2:function(a){return a.right},
gc4:function(a){return a.top},
gc7:function(a){return a.width},
$iaD:1,
$aaD:function(){return[P.ai]}}
W.i7.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.d(u[b],"$iR")},
t:function(a,b,c){var u
H.d(c,"$iR")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
J.jx(this.a,c,u[b])},
h:function(a,b){J.kd(this.a,b)
return b},
gU:function(a){var u=this.dr(this)
return new J.ar(u,u.length,0,[H.t(u,0)])},
$aU:function(){return[W.R]},
$al:function(){return[W.R]},
$aa:function(){return[W.R]}}
W.R.prototype={
gk5:function(a){return new W.i9(a)},
gcT:function(a){return new W.i7(a,a.children)},
gex:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.a_()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a_()
if(r<0)r=-r*0
return new P.aD(u,t,s,r,[P.ai])},
i:function(a){return a.localName},
an:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kp
if(u==null){u=H.b([],[W.aA])
t=new W.dJ(u)
C.a.h(u,W.l_(null))
C.a.h(u,W.l1())
$.kp=t
d=t}else d=u
u=$.ko
if(u==null){u=new W.eA(d)
$.ko=u
c=u}else{u.a=d
c=u}}if($.b6==null){u=document
t=u.implementation
t=(t&&C.U).kj(t,"")
$.b6=t
$.jE=t.createRange()
t=$.b6
t.toString
t=t.createElement("base")
H.d(t,"$icb")
t.href=u.baseURI
u=$.b6.head;(u&&C.W).H(u,t)}u=$.b6
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.d(t,"$ibj")}u=$.b6
if(!!this.$ibj)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b6.body;(u&&C.p).H(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Z(C.a8,a.tagName)){u=$.jE;(u&&C.N).fK(u,s)
u=$.jE
r=(u&&C.N).kh(u,b)}else{s.innerHTML=b
r=$.b6.createDocumentFragment()
for(u=J.a7(r);t=s.firstChild,t!=null;)u.H(r,t)}u=$.b6.body
if(s==null?u!=null:s!==u)J.kf(s)
c.dA(r)
C.z.jY(document,r)
return r},
ki:function(a,b,c){return this.an(a,b,c,null)},
fN:function(a,b,c,d){a.textContent=null
this.H(a,this.an(a,b,c,d))},
fM:function(a,b){return this.fN(a,b,null,null)},
b7:function(a,b){return a.getAttribute(b)},
iS:function(a,b){return a.removeAttribute(b)},
fL:function(a,b,c){return a.setAttribute(b,c)},
$iR:1,
gli:function(a){return a.tagName}}
W.f1.prototype={
$1:function(a){return!!J.T(H.d(a,"$iC")).$iR},
$S:19}
W.n.prototype={$in:1}
W.bI.prototype={
hh:function(a,b,c,d){return a.addEventListener(b,H.c3(H.k(c,{func:1,args:[W.n]}),1),!1)},
$ibI:1}
W.fb.prototype={
gm:function(a){return a.length}}
W.dn.prototype={}
W.dp.prototype={
iY:function(a,b,c,d){return a.replaceState(b,c,d)},
gm:function(a){return a.length}}
W.bL.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bM(b,a,null,null,null))
return a[b]},
t:function(a,b,c){H.d(c,"$iC")
throw H.c(P.Z("Cannot assign element of immutable List."))},
af:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaK:1,
$aaK:function(){return[W.C]},
$aU:function(){return[W.C]},
$il:1,
$al:function(){return[W.C]},
$ia:1,
$aa:function(){return[W.C]},
$ibL:1,
$aax:function(){return[W.C]}}
W.dq.prototype={}
W.b7.prototype={$ib7:1,
gey:function(a){return a.data}}
W.cl.prototype={$icl:1,$ikk:1}
W.cm.prototype={$icm:1}
W.aU.prototype={$iaU:1}
W.dw.prototype={}
W.dz.prototype={
i:function(a){return String(a)},
$idz:1}
W.cq.prototype={}
W.ad.prototype={$iad:1}
W.an.prototype={
gaS:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.kH("No elements"))
if(t>1)throw H.c(P.kH("More than one element"))
return u.firstChild},
ad:function(a,b){var u,t,s,r,q
H.h(b,"$il",[W.C],"$al")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a7(t),q=0;q<s;++q)r.H(t,u.firstChild)
return},
t:function(a,b,c){var u,t
H.d(c,"$iC")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.jx(u,c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.dl(u,u.length,-1,[H.d3(C.ac,u,"ax",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aU:function(){return[W.C]},
$al:function(){return[W.C]},
$aa:function(){return[W.C]}}
W.C.prototype={
l8:function(a){var u=a.parentNode
if(u!=null)J.eH(u,a)},
lc:function(a,b){var u,t
try{u=a.parentNode
J.jx(u,b,a)}catch(t){H.af(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fR(a):u},
H:function(a,b){return a.appendChild(H.d(b,"$iC"))},
iT:function(a,b){return a.removeChild(b)},
iX:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.ct.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bM(b,a,null,null,null))
return a[b]},
t:function(a,b,c){H.d(c,"$iC")
throw H.c(P.Z("Cannot assign element of immutable List."))},
af:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaK:1,
$aaK:function(){return[W.C]},
$aU:function(){return[W.C]},
$il:1,
$al:function(){return[W.C]},
$ia:1,
$aa:function(){return[W.C]},
$aax:function(){return[W.C]}}
W.dO.prototype={
kh:function(a,b){return a.createContextualFragment(b)},
fK:function(a,b){return a.selectNodeContents(b)}}
W.h3.prototype={
gm:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.dZ.prototype={
an:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.cd(a,b,c,d)
u=W.mb("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.an(t).ad(0,new W.an(u))
return t},
hH:function(a,b){return a.insertRow(b)}}
W.e_.prototype={
an:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.cd(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.an(u.createElement("table"),b,c,d)
u.toString
u=new W.an(u)
s=u.gaS(u)
s.toString
u=new W.an(s)
r=u.gaS(u)
t.toString
r.toString
new W.an(t).ad(0,new W.an(r))
return t},
e0:function(a,b){return a.insertCell(b)}}
W.hi.prototype={
an:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.cd(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.an(u.createElement("table"),b,c,d)
u.toString
u=new W.an(u)
s=u.gaS(u)
t.toString
s.toString
new W.an(t).ad(0,new W.an(s))
return t}}
W.cB.prototype={$icB:1}
W.aM.prototype={$iaM:1}
W.aN.prototype={$iaN:1}
W.hq.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bM(b,a,null,null,null))
return a[b]},
t:function(a,b,c){H.d(c,"$iaM")
throw H.c(P.Z("Cannot assign element of immutable List."))},
af:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaK:1,
$aaK:function(){return[W.aM]},
$aU:function(){return[W.aM]},
$il:1,
$al:function(){return[W.aM]},
$ia:1,
$aa:function(){return[W.aM]},
$aax:function(){return[W.aM]}}
W.bw.prototype={}
W.i0.prototype={$ikk:1}
W.b2.prototype={
gkp:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.Z("deltaY is not supported"))},
gko:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.Z("deltaX is not supported"))},
$ib2:1}
W.cQ.prototype={
j_:function(a,b){return a.requestAnimationFrame(H.c3(H.k(b,{func:1,ret:-1,args:[P.ai]}),1))},
hw:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cR.prototype={$icR:1}
W.ej.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
B:function(a,b){var u
if(b==null)return!1
if(!H.d1(b,"$iaD",[P.ai],"$aaD"))return!1
u=J.a7(b)
return a.left===u.gbX(b)&&a.top===u.gc4(b)&&a.width===u.gc7(b)&&a.height===u.gbW(b)},
gL:function(a){return W.l0(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gbW:function(a){return a.height},
gc7:function(a){return a.width}}
W.ep.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bM(b,a,null,null,null))
return a[b]},
t:function(a,b,c){H.d(c,"$iC")
throw H.c(P.Z("Cannot assign element of immutable List."))},
af:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaK:1,
$aaK:function(){return[W.C]},
$aU:function(){return[W.C]},
$il:1,
$al:function(){return[W.C]},
$ia:1,
$aa:function(){return[W.C]},
$aax:function(){return[W.C]}}
W.i6.prototype={
a1:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gaE(),t=u.length,s=this.a,r=J.a7(s),q=0;q<u.length;u.length===t||(0,H.A)(u),++q){p=u[q]
b.$2(p,r.b7(s,p))}},
gaE:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
q=H.d(u[r],"$icR")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abO:function(){return[P.f,P.f]},
$aJ:function(){return[P.f,P.f]}}
W.i9.prototype={
j:function(a,b){return J.jy(this.a,H.E(b))},
t:function(a,b,c){J.m0(this.a,b,c)},
gm:function(a){return this.gaE().length}}
W.ia.prototype={}
W.jR.prototype={}
W.ib.prototype={}
W.ic.prototype={
$1:function(a){return this.a.$1(H.d(a,"$in"))},
$S:42}
W.by.prototype={
h2:function(a){var u,t
u=$.kb()
if(u.gkM(u)){for(t=0;t<262;++t)u.t(0,C.a7[t],W.nL())
for(t=0;t<12;++t)u.t(0,C.B[t],W.nM())}},
b0:function(a){return $.lO().Z(0,W.ci(a))},
aB:function(a,b,c){var u,t,s
u=W.ci(a)
t=$.kb()
s=t.j(0,H.j(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.jZ(s.$4(a,b,c,this))},
$iaA:1}
W.ax.prototype={
gU:function(a){return new W.dl(a,this.gm(a),-1,[H.d3(this,a,"ax",0)])}}
W.dJ.prototype={
b0:function(a){return C.a.eo(this.a,new W.fO(a))},
aB:function(a,b,c){return C.a.eo(this.a,new W.fN(a,b,c))},
$iaA:1}
W.fO.prototype={
$1:function(a){return H.d(a,"$iaA").b0(this.a)},
$S:20}
W.fN.prototype={
$1:function(a){return H.d(a,"$iaA").aB(this.a,this.b,this.c)},
$S:20}
W.es.prototype={
hc:function(a,b,c,d){var u,t,s
this.a.ad(0,c)
u=b.c6(0,new W.iy())
t=b.c6(0,new W.iz())
this.b.ad(0,u)
s=this.c
s.ad(0,C.I)
s.ad(0,t)},
b0:function(a){return this.a.Z(0,W.ci(a))},
aB:function(a,b,c){var u,t
u=W.ci(a)
t=this.c
if(t.Z(0,H.j(u)+"::"+b))return this.d.jZ(c)
else if(t.Z(0,"*::"+b))return this.d.jZ(c)
else{t=this.b
if(t.Z(0,H.j(u)+"::"+b))return!0
else if(t.Z(0,"*::"+b))return!0
else if(t.Z(0,H.j(u)+"::*"))return!0
else if(t.Z(0,"*::*"))return!0}return!1},
$iaA:1}
W.iy.prototype={
$1:function(a){return!C.a.Z(C.B,H.E(a))},
$S:21}
W.iz.prototype={
$1:function(a){return C.a.Z(C.B,H.E(a))},
$S:21}
W.iF.prototype={
aB:function(a,b,c){if(this.fV(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jy(a,"template")==="")return this.e.Z(0,b)
return!1}}
W.iG.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.E(a))},
$S:17}
W.iE.prototype={
b0:function(a){var u=J.T(a)
if(!!u.$icw)return!1
u=!!u.$io
if(u&&W.ci(a)==="foreignObject")return!1
if(u)return!0
return!1},
aB:function(a,b,c){if(b==="is"||C.c.a8(b,"on"))return!1
return this.b0(a)},
$iaA:1}
W.dl.prototype={
F:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.se_(J.lT(this.a,u))
this.c=u
return!0}this.se_(null)
this.c=t
return!1},
gM:function(){return this.d},
se_:function(a){this.d=H.z(a,H.t(this,0))},
$iaT:1}
W.aA.prototype={}
W.iw.prototype={$ioq:1}
W.eA.prototype={
dA:function(a){new W.iR(this).$2(a,null)},
bf:function(a,b){if(b==null)J.kf(a)
else J.eH(b,a)},
j4:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lY(a)
s=J.jy(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.af(o)}q="element unprintable"
try{q=J.aq(a)}catch(o){H.af(o)}try{p=W.ci(a)
this.j3(H.d(a,"$iR"),b,u,q,p,H.d(t,"$iJ"),H.E(s))}catch(o){if(H.af(o) instanceof P.aI)throw o
else{this.bf(a,b)
window
n="Removing corrupted element "+H.j(q)
if(typeof console!="undefined")window.console.warn(n)}}},
j3:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.bf(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.b0(a)){this.bf(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.aB(a,"is",g)){this.bf(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaE()
t=H.b(u.slice(0),[H.t(u,0)])
for(s=f.gaE().length-1,u=f.a,r=J.a7(u);s>=0;--s){if(s>=t.length)return H.e(t,s)
q=t[s]
if(!this.a.aB(a,J.m2(q),r.b7(u,q))){window
p="Removing disallowed attribute <"+H.j(e)+" "+q+'="'+H.j(r.b7(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b7(u,q)
r.iS(u,q)}}if(!!J.T(a).$icB)this.dA(a.content)},
$iob:1}
W.iR.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.j4(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.bf(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.af(r)
q=H.d(u,"$iC")
if(s){p=q.parentNode
if(p!=null)J.eH(p,q)}else J.eH(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$iC")}},
$S:41}
W.ei.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.eB.prototype={}
W.eC.prototype={}
P.iB.prototype={
f_:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
du:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.T(a)
if(!!t.$iak)return new Date(a.a)
if(!!t.$imG)throw H.c(P.hE("structured clone of RegExp"))
if(!!t.$ib7)return a
if(!!t.$ibQ)return a
if(!!t.$iJ){s=this.f_(a)
t=this.b
if(s>=t.length)return H.e(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.t(t,s,r)
a.a1(0,new P.iD(u,this))
return u.a}if(!!t.$ia){s=this.f_(a)
u=this.b
if(s>=u.length)return H.e(u,s)
r=u[s]
if(r!=null)return r
return this.kg(a,s)}throw H.c(P.hE("structured clone of other type"))},
kg:function(a,b){var u,t,s,r
u=J.c6(a)
t=u.gm(a)
s=new Array(t)
C.a.t(this.b,b,s)
for(r=0;r<t;++r)C.a.t(s,r,this.du(u.j(a,r)))
return s}}
P.iD.prototype={
$2:function(a,b){this.a.a[a]=this.b.du(b)},
$S:6}
P.ex.prototype={$ib7:1,
gey:function(a){return this.a}}
P.j1.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.iC.prototype={}
P.f8.prototype={
gbz:function(){var u,t,s
u=this.b
t=H.aa(u,"U",0)
s=W.R
return new H.fA(new H.cP(u,H.k(new P.f9(),{func:1,ret:P.N,args:[t]}),[t]),H.k(new P.fa(),{func:1,ret:s,args:[t]}),[t,s])},
t:function(a,b,c){var u
H.d(c,"$iR")
u=this.gbz()
J.m_(u.b.$1(J.eI(u.a,b)),c)},
h:function(a,b){J.kd(this.b.a,b)},
gm:function(a){return J.aH(this.gbz().a)},
j:function(a,b){var u=this.gbz()
return u.b.$1(J.eI(u.a,b))},
gU:function(a){var u=P.mp(this.gbz(),!1,W.R)
return new J.ar(u,u.length,0,[H.t(u,0)])},
$aU:function(){return[W.R]},
$al:function(){return[W.R]},
$aa:function(){return[W.R]}}
P.f9.prototype={
$1:function(a){return!!J.T(H.d(a,"$iC")).$iR},
$S:19}
P.fa.prototype={
$1:function(a){return H.i(H.d(a,"$iC"),"$iR")},
$S:54}
P.ir.prototype={
gc2:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.z(u+this.c,H.t(this,0))},
geu:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.z(u+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.d1(b,"$iaD",[P.ai],"$aaD")){u=this.a
t=J.a7(b)
if(u==t.gbX(b)){s=this.b
if(s==t.gc4(b)){if(typeof u!=="number")return u.n()
r=H.t(this,0)
if(H.z(u+this.c,r)===t.gc2(b)){if(typeof s!=="number")return s.n()
u=H.z(s+this.d,r)===t.geu(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.d7(u)
s=this.b
r=J.d7(s)
if(typeof u!=="number")return u.n()
q=H.t(this,0)
u=C.f.gL(H.z(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.f.gL(H.z(s+this.d,q))
return P.n4(P.ip(P.ip(P.ip(P.ip(0,t),r),u),q))}}
P.aD.prototype={
gbX:function(a){return this.a},
gc4:function(a){return this.b},
gc7:function(a){return this.c},
gbW:function(a){return this.d}}
P.cw.prototype={$icw:1}
P.o.prototype={
gcT:function(a){return new P.f8(a,new W.an(a))},
an:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.aA])
C.a.h(u,W.l_(null))
C.a.h(u,W.l1())
C.a.h(u,new W.iE())
c=new W.eA(new W.dJ(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).ki(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.an(r)
p=u.gaS(u)
for(u=J.a7(q);s=p.firstChild,s!=null;)u.H(q,s)
return q},
$io:1}
P.O.prototype={$il:1,
$al:function(){return[P.m]},
$ia:1,
$aa:function(){return[P.m]},
$imQ:1}
P.db.prototype={$idb:1}
P.dm.prototype={$idm:1}
P.dN.prototype={$idN:1}
P.bV.prototype={
cK:function(a,b){return a.activeTexture(b)},
ep:function(a,b,c){return a.attachShader(b,c)},
aC:function(a,b,c){return a.bindBuffer(b,c)},
k7:function(a,b,c){return a.bindFramebuffer(b,c)},
aL:function(a,b,c){return a.bindTexture(b,c)},
k8:function(a,b,c){return a.blendFunc(b,c)},
ev:function(a,b,c,d){return a.bufferData(b,c,d)},
ka:function(a,b){return a.clear(b)},
kb:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
kc:function(a,b){return a.clearDepth(b)},
ke:function(a,b){return a.compileShader(b)},
kk:function(a,b){return a.createShader(b)},
km:function(a,b){return a.deleteProgram(b)},
kn:function(a,b){return a.deleteShader(b)},
kq:function(a,b){return a.depthFunc(b)},
kr:function(a,b){return a.disable(b)},
eA:function(a,b){return a.disableVertexAttribArray(b)},
ks:function(a,b,c,d,e){return a.drawElements(b,c,H.a8(d),H.a8(e))},
cY:function(a,b){return a.enable(b)},
eE:function(a,b){return a.enableVertexAttribArray(b)},
fz:function(a,b,c){return a.getActiveAttrib(b,c)},
fA:function(a,b,c){return a.getActiveUniform(b,c)},
fB:function(a,b,c){return a.getAttribLocation(b,c)},
dz:function(a,b){return a.getParameter(b)},
fE:function(a,b){return a.getProgramInfoLog(b)},
ca:function(a,b,c){return a.getProgramParameter(b,c)},
fF:function(a,b){return a.getShaderInfoLog(b)},
fG:function(a,b,c){return a.getShaderParameter(b,c)},
fH:function(a,b,c){return a.getUniformLocation(b,c)},
kO:function(a,b){return a.linkProgram(b)},
l6:function(a,b,c){return a.pixelStorei(b,c)},
fP:function(a,b,c){return a.shaderSource(b,c)},
lk:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.T(g)
if(!!u.$ib7)t=!0
else t=!1
if(t){this.jj(a,b,c,d,e,f,P.nA(g))
return}if(!!u.$icl)u=!0
else u=!1
if(u){this.jk(a,b,c,d,e,f,g)
return}throw H.c(P.d9("Incorrect number or type of arguments"))},
lj:function(a,b,c,d,e,f,g){return this.lk(a,b,c,d,e,f,g,null,null,null)},
jj:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
jk:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c3:function(a,b,c,d){return a.texParameteri(b,c,d)},
N:function(a,b,c){return a.uniform1f(b,c)},
T:function(a,b,c){return a.uniform1i(b,c)},
C:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fs:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ft:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dt:function(a,b){return a.useProgram(b)},
lp:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
lq:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibV:1}
P.dR.prototype={$idR:1}
P.e0.prototype={$ie0:1}
P.e8.prototype={$ie8:1}
O.a0.prototype={
bx:function(a){this.shL(H.b([],[a]))
this.se8(null)
this.se4(null)
this.se9(null)},
dB:function(a,b,c){var u=H.aa(this,"a0",0)
H.k(b,{func:1,ret:P.N,args:[[P.l,u]]})
u={func:1,ret:-1,args:[P.m,[P.l,u]]}
H.k(a,u)
H.k(c,u)
this.se8(b)
this.se4(a)
this.se9(c)},
b8:function(a,b){return this.dB(a,null,b)},
e7:function(a){var u
H.h(a,"$il",[H.aa(this,"a0",0)],"$al")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dH:function(a,b){var u
H.h(b,"$il",[H.aa(this,"a0",0)],"$al")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.ar(u,u.length,0,[H.t(u,0)])},
af:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.aa(this,"a0",0)
H.z(b,u)
u=[u]
if(this.e7(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dH(s,H.b([b],u))}},
ad:function(a,b){var u,t
H.h(b,"$il",[H.aa(this,"a0",0)],"$al")
if(this.e7(b)){u=this.a
t=u.length
C.a.ad(u,b)
this.dH(t,b)}},
shL:function(a){this.a=H.h(a,"$ia",[H.aa(this,"a0",0)],"$aa")},
se8:function(a){this.b=H.k(a,{func:1,ret:P.N,args:[[P.l,H.aa(this,"a0",0)]]})},
se4:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.m,[P.l,H.aa(this,"a0",0)]]})},
se9:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.m,[P.l,H.aa(this,"a0",0)]]})},
$il:1}
O.cp.prototype={
gm:function(a){return this.a.length},
gv:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
h0:function(a){var u=this.b
if(u!=null)u.I(a)},
aT:function(){return this.h0(null)},
ga7:function(){var u=this.a
if(u.length>0)return C.a.gaF(u)
else return V.bP()},
c0:function(a){var u=this.a
if(a==null)C.a.h(u,V.bP())
else C.a.h(u,a)
this.aT()},
aP:function(){var u=this.a
if(u.length>0){u.pop()
this.aT()}},
sco:function(a){this.a=H.h(a,"$ia",[V.as],"$aa")}}
E.eN.prototype={}
E.al.prototype={
saa:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gv().G(0,this.gfg())
t=this.c
if(t!=null)t.gv().h(0,this.gfg())
s=new D.F("shape",u,this.c,this,[F.dS])
s.b=!0
this.b4(s)}},
av:function(a){var u
for(u=this.y.a,u=new J.ar(u,u.length,0,[H.t(u,0)]);u.F();)u.d.av(a)},
ah:function(a){var u,t
u=a.dx
C.a.h(u.a,u.ga7())
u.aT()
a.dh(this.f)
u=a.dy
t=(u&&C.a).gaF(u)
if(t!=null&&this.d!=null)t.fk(a,this)
for(u=this.y.a,u=new J.ar(u,u.length,0,[H.t(u,0)]);u.F();)u.d.ah(a)
a.dg()
a.dx.aP()},
gv:function(){var u=this.z
if(u==null){u=D.K()
this.z=u}return u},
b4:function(a){var u=this.z
if(u!=null)u.I(a)},
X:function(){return this.b4(null)},
fh:function(a){H.d(a,"$iw")
this.e=null
this.b4(a)},
kY:function(){return this.fh(null)},
ff:function(a){this.b4(H.d(a,"$iw"))},
kV:function(){return this.ff(null)},
kU:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$il",[E.al],"$al")
for(u=b.length,t=this.gfe(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bH()
o.sak(null)
o.sbd(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sak(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.X()},
kX:function(a,b){var u,t
H.h(b,"$il",[E.al],"$al")
for(u=b.gU(b),t=this.gfe();u.F();)u.gM().gv().G(0,t)
this.X()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sh1:function(a,b){this.y=H.h(b,"$ia0",[E.al],"$aa0")},
$iaX:1}
E.fZ.prototype={
fY:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ak(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cp()
t=[V.as]
u.sco(H.b([],t))
u.b=null
u.gv().h(0,new E.h_(this))
this.cy=u
u=new O.cp()
u.sco(H.b([],t))
u.b=null
u.gv().h(0,new E.h0(this))
this.db=u
u=new O.cp()
u.sco(H.b([],t))
u.b=null
u.gv().h(0,new E.h1(this))
this.dx=u
this.sji(H.b([],[O.bv]))
u=this.dy;(u&&C.a).h(u,null)
this.sje(new H.aL([P.f,A.cx]))},
gl7:function(){var u=this.z
if(u==null){u=this.cy.ga7().w(0,this.db.ga7())
this.z=u}return u},
dh:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaF(u):a;(u&&C.a).h(u,t)},
dg:function(){var u=this.dy
if(u.length>1)u.pop()},
en:function(a){var u=a.b
if(u.length===0)throw H.c(P.q("May not cache a shader with no name."))
if(this.fr.bF(u))throw H.c(P.q('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.t(0,u,a)},
sji:function(a){this.dy=H.h(a,"$ia",[O.bv],"$aa")},
sje:function(a){this.fr=H.h(a,"$iJ",[P.f,A.cx],"$aJ")}}
E.h_.prototype={
$1:function(a){var u
H.d(a,"$iw")
u=this.a
u.z=null
u.ch=null},
$S:8}
E.h0.prototype={
$1:function(a){var u
H.d(a,"$iw")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:8}
E.h1.prototype={
$1:function(a){var u
H.d(a,"$iw")
u=this.a
u.ch=null
u.cx=null},
$S:8}
E.e4.prototype={
dK:function(a){H.d(a,"$iw")
this.fm()},
dJ:function(){return this.dK(null)},
gkG:function(){var u,t,s
u=Date.now()
t=C.f.a9(P.kn(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ak(u,!1)
return s/t},
ec:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.w()
if(typeof u!=="number")return H.B(u)
s=C.e.d4(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.w()
r=C.e.d4(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kK(C.y,this.gld())}},
fm:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.hm(this),{func:1,ret:-1,args:[P.ai]})
C.P.hw(u)
C.P.j_(u,W.lf(t,P.ai))}},
lb:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.ec()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ak(r,!1)
s.y=P.kn(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aT()
r=s.db
C.a.sm(r.a,0)
r.aT()
r=s.dx
C.a.sm(r.a,0)
r.aT()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ah(this.e)}s=this.z
if(s!=null)s.I(null)}catch(q){u=H.af(q)
t=H.c7(q)
P.k7("Error: "+H.j(u))
P.k7("Stack: "+H.j(t))
throw H.c(u)}}}
E.hm.prototype={
$1:function(a){var u
H.nX(a)
u=this.a
if(u.ch){u.ch=!1
u.lb()}},
$S:32}
Z.ef.prototype={$io5:1}
Z.dc.prototype={
a6:function(a){var u,t,s
try{t=a.a
C.b.eE(t,this.e)
C.b.lp(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.af(s)
t=P.q('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}}
Z.eg.prototype={$io6:1}
Z.ce.prototype={
aN:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a6:function(a){var u,t
u=this.a
C.b.aC(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a6(a)},
aR:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.eA(s,u[t].e)
C.b.aC(s,this.a.a,null)},
ah:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aC(t,p,r.b)
C.b.ks(t,q.a,q.b,5123,0)
C.b.aC(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aq(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
shG:function(a){this.b=H.h(a,"$ia",[Z.bq],"$aa")},
$ioe:1}
Z.bq.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bS(this.c)+"'")+"]"}}
Z.b1.prototype={
gdD:function(a){var u,t
u=this.a
t=(u&$.aQ().a)!==0?3:0
if((u&$.bg().a)!==0)t+=3
if((u&$.bf().a)!==0)t+=3
if((u&$.bh().a)!==0)t+=2
if((u&$.bi().a)!==0)t+=3
if((u&$.d4().a)!==0)t+=3
if((u&$.d5().a)!==0)t+=4
if((u&$.ca().a)!==0)++t
return(u&$.be().a)!==0?t+4:t},
k0:function(a){var u,t,s
u=$.aQ()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bg()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bf()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bh()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bi()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d4()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d5()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ca()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.be()
if((t&u.a)!==0)if(s===a)return u
return $.lM()},
B:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b1))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.f])
t=this.a
if((t&$.aQ().a)!==0)C.a.h(u,"Pos")
if((t&$.bg().a)!==0)C.a.h(u,"Norm")
if((t&$.bf().a)!==0)C.a.h(u,"Binm")
if((t&$.bh().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bi().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d4().a)!==0)C.a.h(u,"Clr3")
if((t&$.d5().a)!==0)C.a.h(u,"Clr4")
if((t&$.ca().a)!==0)C.a.h(u,"Weight")
if((t&$.be().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.eQ.prototype={}
D.bH.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.w]}
H.k(b,u)
if(this.a==null)this.sak(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
G:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.w]})
u=this.a
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=this.a
t=(u&&C.a).G(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=this.b
t=(u&&C.a).G(u,b)||t}return t},
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
return!0}if(!s)C.a.a1(t,new D.f5(u))
t=this.b
if(t!=null)C.a.a1(t,new D.f6(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
ku:function(){return this.I(null)},
le:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.I(t)}}},
aG:function(){return this.le(!0,!1)},
sak:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.w]}],"$aa")},
sbd:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.w]}],"$aa")}}
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
D.br.prototype={}
D.bs.prototype={}
D.F.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.dd.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dd))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dv.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dv))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fp.prototype={
l3:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
l_:function(a){this.c=a.b
this.d.G(0,a.a)
return!1},
siP:function(a){this.d=H.h(a,"$ikG",[P.m],"$akG")}}
X.dA.prototype={}
X.fw.prototype={
bc:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ak(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.w()
q=b.b
p=this.ch
if(typeof q!=="number")return q.w()
o=t.n(0,new V.V(s*r,q*p))
p=this.a.gb1()
n=new X.bb(a,V.aY(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
df:function(a,b){this.r=a.a
return!1},
bn:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fJ()
if(typeof u!=="number")return u.c8()
this.r=(u&~t)>>>0
return!1},
bm:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.bc(a,b))
return!0},
l4:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gb1()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.w()
o=a.b
n=this.cy
if(typeof o!=="number")return o.w()
r=new X.cr(new V.S(q*p,o*n),t,s,new P.ak(r,!1),this)
r.b=!0
u.I(r)
return!0},
im:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ak(Date.now(),!1)
t=this.f
s=new X.dA(c,a,this.a.gb1(),b,u,this)
s.b=!0
t.I(s)
this.y=u
this.x=V.aY()}}
X.az.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.az))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bb.prototype={}
X.fI.prototype={
cl:function(a,b,c){var u,t,s
u=new P.ak(Date.now(),!1)
t=this.a.gb1()
s=new X.bb(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
df:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.I(this.cl(a,b,!0))
return!0},
bn:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fJ()
if(typeof u!=="number")return u.c8()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.I(this.cl(a,b,!0))
return!0},
bm:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.cl(a,b,!1))
return!0},
l5:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gb1()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.w()
p=a.b
o=this.ch
if(typeof p!=="number")return p.w()
s=new X.cr(new V.S(r*q,p*o),t,b,new P.ak(s,!1),this)
s.b=!0
u.I(s)
return!0},
geB:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
gc5:function(){var u=this.c
if(u==null){u=D.K()
this.c=u}return u},
gfd:function(){var u=this.d
if(u==null){u=D.K()
this.d=u}return u}}
X.cr.prototype={}
X.fU.prototype={}
X.e6.prototype={}
X.hp.prototype={
bc:function(a,b){var u,t,s,r
H.h(a,"$ia",[V.V],"$aa")
u=new P.ak(Date.now(),!1)
t=a.length>0?a[0]:V.aY()
s=this.a.gb1()
r=new X.e6(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
l2:function(a){var u
H.h(a,"$ia",[V.V],"$aa")
u=this.b
if(u==null)return!1
u.I(this.bc(a,!0))
return!0},
l0:function(a){var u
H.h(a,"$ia",[V.V],"$aa")
u=this.c
if(u==null)return!1
u.I(this.bc(a,!0))
return!0},
l1:function(a){var u
H.h(a,"$ia",[V.V],"$aa")
u=this.d
if(u==null)return!1
u.I(this.bc(a,!1))
return!0}}
X.eb.prototype={
gb1:function(){var u=this.a
return V.kE(0,0,C.q.gex(u).c,C.q.gex(u).d)},
dV:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dv(u,new X.az(t,a.altKey,a.shiftKey))},
aZ:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.az(t,a.altKey,a.shiftKey)},
cH:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.az(t,a.altKey,a.shiftKey)},
aK:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=u.top
if(typeof s!=="number")return s.u()
return new V.V(t-r,s-q)},
be:function(a){return new V.S(a.movementX,a.movementY)},
cB:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.V])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
o=C.e.at(p.pageX)
C.e.at(p.pageY)
n=u.left
C.e.at(p.pageX)
C.a.h(t,new V.V(o-n,C.e.at(p.pageY)-u.top))}return t},
aI:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dd(u,new X.az(t,a.altKey,a.shiftKey))},
cp:function(a){var u,t,s,r,q,p
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
ig:function(a){this.f=!0},
i0:function(a){this.f=!1},
i8:function(a){H.d(a,"$iad")
if(this.f&&this.cp(a))a.preventDefault()},
ik:function(a){var u
H.d(a,"$iaU")
if(!this.f)return
u=this.dV(a)
this.b.l3(u)},
ii:function(a){var u
H.d(a,"$iaU")
if(!this.f)return
u=this.dV(a)
this.b.l_(u)},
ip:function(a){var u,t,s,r
H.d(a,"$iad")
u=this.a
u.focus()
this.f=!0
this.aZ(a)
if(this.x){t=this.aI(a)
s=this.be(a)
if(this.d.df(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aI(a)
r=this.aK(a)
if(this.c.df(t,r))a.preventDefault()},
it:function(a){var u,t,s
H.d(a,"$iad")
this.aZ(a)
u=this.aI(a)
if(this.x){t=this.be(a)
if(this.d.bn(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bn(u,s))a.preventDefault()},
ic:function(a){var u,t,s
H.d(a,"$iad")
if(!this.cp(a)){this.aZ(a)
u=this.aI(a)
if(this.x){t=this.be(a)
if(this.d.bn(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bn(u,s))a.preventDefault()}},
ir:function(a){var u,t,s
H.d(a,"$iad")
this.aZ(a)
u=this.aI(a)
if(this.x){t=this.be(a)
if(this.d.bm(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bm(u,s))a.preventDefault()},
ia:function(a){var u,t,s
H.d(a,"$iad")
if(!this.cp(a)){this.aZ(a)
u=this.aI(a)
if(this.x){t=this.be(a)
if(this.d.bm(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bm(u,s))a.preventDefault()}},
iv:function(a){var u,t
H.d(a,"$ib2")
this.aZ(a)
u=new V.S((a&&C.O).gko(a),C.O.gkp(a)).q(0,180)
if(this.x){if(this.d.l4(u))a.preventDefault()
return}if(this.r)return
t=this.aK(a)
if(this.c.l5(u,t))a.preventDefault()},
ix:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aI(this.y)
s=this.aK(this.y)
this.d.im(t,s,u)}},
iN:function(a){var u
H.d(a,"$iaN")
this.a.focus()
this.f=!0
this.cH(a)
u=this.cB(a)
if(this.e.l2(u))a.preventDefault()},
iJ:function(a){var u
H.d(a,"$iaN")
this.cH(a)
u=this.cB(a)
if(this.e.l0(u))a.preventDefault()},
iL:function(a){var u
H.d(a,"$iaN")
this.cH(a)
u=this.cB(a)
if(this.e.l1(u))a.preventDefault()},
shx:function(a){this.z=H.h(a,"$ia",[[P.cz,P.M]],"$aa")}}
D.bn.prototype={
gv:function(){var u=this.d
if(u==null){u=D.K()
this.d=u}return u},
aH:function(a){var u
H.d(a,"$iw")
u=this.d
if(u!=null)u.I(a)},
h5:function(){return this.aH(null)},
$ia3:1,
$iaX:1}
D.a3.prototype={$iaX:1}
D.dx.prototype={
gv:function(){var u=this.Q
if(u==null){u=D.K()
this.Q=u}return u},
aH:function(a){var u=this.Q
if(u!=null)u.I(a)},
e6:function(a){var u
H.d(a,"$iw")
u=this.ch
if(u!=null)u.I(a)},
il:function(){return this.e6(null)},
iz:function(a){var u,t,s
H.h(a,"$il",[D.a3],"$al")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.h3(s))return!1}return!0},
hV:function(a,b){var u,t,s,r,q,p,o,n
u=D.a3
H.h(b,"$il",[u],"$al")
for(t=b.length,s=this.ge5(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=H.d(b[p],"$ia3")
if(o instanceof D.bn)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bH()
n.sak(null)
n.sbd(null)
n.c=null
n.d=0
o.d=n}H.k(s,r)
if(n.a==null)n.sak(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.br(a,b,this,[u])
u.b=!0
this.aH(u)},
iD:function(a,b){var u,t,s,r
u=D.a3
H.h(b,"$il",[u],"$al")
for(t=b.gU(b),s=this.ge5();t.F();){r=t.gM()
C.a.G(this.e,r)
r.gv().G(0,s)}u=new D.bs(a,b,this,[u])
u.b=!0
this.aH(u)},
h3:function(a){var u=C.a.Z(this.e,a)
return u},
shu:function(a){this.e=H.h(a,"$ia",[D.bn],"$aa")},
siO:function(a){this.f=H.h(a,"$ia",[D.dM],"$aa")},
sjg:function(a){this.r=H.h(a,"$ia",[D.dW],"$aa")},
sjt:function(a){this.x=H.h(a,"$ia",[D.e1],"$aa")},
sju:function(a){this.y=H.h(a,"$ia",[D.e2],"$aa")},
sjv:function(a){this.z=H.h(a,"$ia",[D.e3],"$aa")},
$al:function(){return[D.a3]},
$aa0:function(){return[D.a3]}}
D.dM.prototype={$ia3:1,$iaX:1}
D.dW.prototype={$ia3:1,$iaX:1}
D.e1.prototype={$ia3:1,$iaX:1}
D.e2.prototype={$ia3:1,$iaX:1}
D.e3.prototype={$ia3:1,$iaX:1}
V.a1.prototype={
n:function(a,b){var u,t,s
u=C.e.n(this.a,b.gdk())
t=C.e.n(this.b,b.gcb())
s=C.e.n(this.c,b.gcP())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
u:function(a,b){var u,t,s
u=C.e.u(this.a,b.gdk())
t=C.e.u(this.b,b.gcb())
s=C.e.u(this.c,b.gcP())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.ab.prototype={
dr:function(a){return H.b([this.a,this.b,this.c,this.d],[P.r])},
n:function(a,b){var u,t,s,r
u=C.e.n(this.a,b.gdk())
t=C.e.n(this.b,b.gcb())
s=C.e.n(this.c,b.gcP())
r=C.e.n(this.d,b.gk_(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.ab(u,t,s,r)},
u:function(a,b){var u,t,s,r
u=C.e.u(this.a,b.gdk())
t=C.e.u(this.b,b.gcb())
s=C.e.u(this.c,b.gcP())
r=C.e.u(this.d,b.gk_(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.ab(u,t,s,r)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}}
V.f3.prototype={}
V.dE.prototype={
ai:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dE))return!1
u=b.a
t=$.I().a
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
u=[P.r]
t=V.c5(H.b([this.a,this.d,this.r],u),3,0)
s=V.c5(H.b([this.b,this.e,this.x],u),3,0)
r=V.c5(H.b([this.c,this.f,this.y],u),3,0)
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
V.as.prototype={
ai:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return u},
d8:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.I().a)return V.bP()
a8=1/a7
a9=-r
b0=-d
return V.aW((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
w:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aW(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
ds:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.y(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bt:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.Q(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=$.I().a
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
i:function(a){return this.P()},
f0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.r]
t=V.c5(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c5(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c5(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c5(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
P:function(){return this.f0("",3,0)},
J:function(a){return this.f0(a,3,0)}}
V.V.prototype={
n:function(a,b){return new V.V(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
q:function(a,b){if(Math.abs(b-0)<$.I().a)return V.aY()
return new V.V(this.a/b,this.b/b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.Q.prototype={
n:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.Q(this.a-b.a,this.b-b.b,this.c-b.c)},
w:function(a,b){return new V.Q(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if(Math.abs(b-0)<$.I().a)return V.jL()
return new V.Q(this.a/b,this.b/b,this.c/b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.au.prototype={
n:function(a,b){return new V.au(C.e.n(this.a,b.gls(b)),C.e.n(this.b,b.glt(b)),C.e.n(this.c,b.glu(b)),C.e.n(this.d,b.glr()))},
u:function(a,b){return new V.au(C.e.u(this.a,b.gls(b)),C.e.u(this.b,b.glt(b)),C.e.u(this.c,b.glu(b)),C.e.u(this.d,b.glr()))},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}}
V.dQ.prototype={
gag:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dQ))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}}
V.S.prototype={
bl:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.B(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.B(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.geC(b)
if(typeof u!=="number")return u.n()
t=C.e.n(u,t)
u=this.b
s=b.geD(b)
if(typeof u!=="number")return u.n()
return new V.S(t,C.e.n(u,s))},
u:function(a,b){var u,t,s
u=this.a
t=b.geC(b)
if(typeof u!=="number")return u.u()
t=C.e.u(u,t)
u=this.b
s=b.geD(b)
if(typeof u!=="number")return u.u()
return new V.S(t,C.e.u(u,s))},
w:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.S(u*b,t*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.I().a){u=$.kR
if(u==null){u=new V.S(0,0)
$.kR=u}return u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.S(u/b,t/b)},
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=this.a
s=$.I()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.B(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.B(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.y.prototype={
bl:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
d9:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.y(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aM:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.y(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.y(this.a-b.a,this.b-b.b,this.c-b.c)},
V:function(a){return new V.y(-this.a,-this.b,-this.c)},
w:function(a,b){return new V.y(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if(Math.abs(b-0)<$.I().a)return V.cN()
return new V.y(this.a/b,this.b/b,this.c/b)},
f9:function(){var u=$.I().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.aP.prototype={
bl:function(a){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=this.d
return Math.sqrt(u*u+t*t+s*s+r*r)},
n:function(a,b){return new V.aP(this.a+b.a,this.b+b.b,this.c+b.c,this.d+b.d)},
u:function(a,b){return new V.aP(C.e.u(this.a,b.geC(b)),C.e.u(this.b,b.geD(b)),C.e.u(this.c,b.glA()),C.e.u(this.d,b.glz()))},
q:function(a,b){var u
if(Math.abs(b-0)<$.I().a){u=$.kY
if(u==null){u=new V.aP(0,0,0,0)
$.kY=u}return u}return new V.aP(this.a/b,this.b/b,this.c/b,this.d/b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aP))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}}
U.eR.prototype={
cg:function(a){var u=V.o4(a,this.c,this.b)
return u},
gv:function(){var u=this.y
if(u==null){u=D.K()
this.y=u}return u},
S:function(a){var u=this.y
if(u!=null)u.I(a)},
sdv:function(a,b){},
sda:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.I().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.cg(t)}u=new D.F("maximumLocation",u,this.b,this,[P.r])
u.b=!0
this.S(u)}},
sdd:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.I().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.cg(t)}u=new D.F("minimumLocation",u,this.c,this,[P.r])
u.b=!0
this.S(u)}},
sa2:function(a,b){var u
b=this.cg(b)
u=this.d
if(!(Math.abs(u-b)<$.I().a)){this.d=b
u=new D.F("location",u,b,this,[P.r])
u.b=!0
this.S(u)}},
sdc:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.I().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.F("maximumVelocity",u,a,this,[P.r])
u.b=!0
this.S(u)}},
sY:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.I().a)){this.f=a
u=new D.F("velocity",u,a,this,[P.r])
u.b=!0
this.S(u)}},
scW:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.I().a)){this.x=a
u=new D.F("dampening",u,a,this,[P.r])
u.b=!0
this.S(u)}},
av:function(a){var u,t,s,r,q
u=this.f
t=$.I().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa2(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.I().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sY(s)}}}
U.df.prototype={
gv:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
b6:function(a,b){return this.a},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.df))return!1
return J.G(this.a,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.ck.prototype={
gv:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u},
S:function(a){var u
H.d(a,"$iw")
u=this.e
if(u!=null)u.I(a)},
ab:function(){return this.S(null)},
hT:function(a,b){var u,t,s,r,q,p,o,n
u=U.ae
H.h(b,"$il",[u],"$al")
for(t=b.length,s=this.gaU(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gv()
n.toString
H.k(s,r)
if(n.a==null)n.sak(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.br(a,b,this,[u])
u.b=!0
this.S(u)},
iB:function(a,b){var u,t,s
u=U.ae
H.h(b,"$il",[u],"$al")
for(t=b.gU(b),s=this.gaU();t.F();)t.gM().gv().G(0,s)
u=new D.bs(a,b,this,[u])
u.b=!0
this.S(u)},
b6:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.a_()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ar(u,u.length,0,[H.t(u,0)]),s=null;u.F();){t=u.d
if(t!=null){r=t.b6(a,b)
if(r!=null)s=s==null?r:r.w(0,s)}}this.f=s==null?V.bP():s
u=this.e
if(u!=null)u.aG()}return this.f},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ck))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.G(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$al:function(){return[U.ae]},
$aa0:function(){return[U.ae]},
$iae:1}
U.ae.prototype={}
U.ec.prototype={
gv:function(){var u=this.cy
if(u==null){u=D.K()
this.cy=u}return u},
S:function(a){var u
H.d(a,"$iw")
u=this.cy
if(u!=null)u.I(a)},
ab:function(){return this.S(null)},
bg:function(a){if(this.a!=null)return!1
this.a=a
a.c.geB().h(0,this.gcq())
this.a.c.gfd().h(0,this.gcs())
this.a.c.gc5().h(0,this.gcu())
return!0},
cr:function(a){H.d(a,"$iw")
if(!J.G(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
ct:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iw"),"$ibb")
if(!this.y)return
if(this.x){u=a.d.u(0,a.y)
u=new V.S(u.a,u.b)
u=u.D(u)
t=this.r
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.u(0,a.y)
u=new V.S(t.a,t.b).w(0,2).q(0,u.gag())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.w()
s=this.e
if(typeof s!=="number")return H.B(s)
t.sY(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.S(s.a,s.b).w(0,2).q(0,u.gag())
s=this.b
q=r.a
if(typeof q!=="number")return q.V()
p=this.e
if(typeof p!=="number")return H.B(p)
o=this.z
if(typeof o!=="number")return H.B(o)
s.sa2(0,-q*p+o)
this.b.sY(0)
t=t.u(0,a.z)
this.Q=new V.S(t.a,t.b).w(0,2).q(0,u.gag())}this.ab()},
cv:function(a){var u,t,s
H.d(a,"$iw")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.D(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.w()
s=this.e
if(typeof s!=="number")return H.B(s)
u.sY(t*10*s)
this.ab()}},
b6:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.a_()
if(u<t){this.ch=t
s=a.y
this.b.av(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aW(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iae:1}
U.ed.prototype={
gv:function(){var u=this.fx
if(u==null){u=D.K()
this.fx=u}return u},
S:function(a){var u
H.d(a,"$iw")
u=this.fx
if(u!=null)u.I(a)},
ab:function(){return this.S(null)},
bg:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.geB().h(0,this.gcq())
this.a.c.gfd().h(0,this.gcs())
this.a.c.gc5().h(0,this.gcu())
u=this.a.d
t=u.f
if(t==null){t=D.K()
u.f=t
u=t}else u=t
u.h(0,this.ghM())
u=this.a.d
t=u.d
if(t==null){t=D.K()
u.d=t
u=t}else u=t
u.h(0,this.ghO())
u=this.a.e
t=u.b
if(t==null){t=D.K()
u.b=t
u=t}else u=t
u.h(0,this.gjq())
u=this.a.e
t=u.d
if(t==null){t=D.K()
u.d=t
u=t}else u=t
u.h(0,this.gjo())
u=this.a.e
t=u.c
if(t==null){t=D.K()
u.c=t
u=t}else u=t
u.h(0,this.gjm())
return!0},
ax:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.V()
u=-u}if(this.r){if(typeof t!=="number")return t.V()
t=-t}return new V.S(u,t)},
cr:function(a){a=H.i(H.d(a,"$iw"),"$ibb")
if(!J.G(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ct:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iw"),"$ibb")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.S(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.ax(new V.S(t.a,t.b).w(0,2).q(0,u.gag()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.ax(new V.S(s.a,s.b).w(0,2).q(0,u.gag()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa2(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.u(0,a.z)
this.dx=this.ax(new V.S(t.a,t.b).w(0,2).q(0,u.gag()))}this.ab()},
cv:function(a){var u,t,s
H.d(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sY(-t*10*u)
this.ab()}},
hN:function(a){if(H.i(H.d(a,"$iw"),"$idA").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hP:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iw"),"$ibb")
if(!J.G(this.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=this.ax(new V.S(s.a,s.b).w(0,2).q(0,u.gag()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa2(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.u(0,a.z)
this.dx=this.ax(new V.S(t.a,t.b).w(0,2).q(0,u.gag()))
this.ab()},
jr:function(a){H.d(a,"$iw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
jp:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iw"),"$ie6")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.S(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.ax(new V.S(t.a,t.b).w(0,2).q(0,u.gag()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.ax(new V.S(s.a,s.b).w(0,2).q(0,u.gag()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa2(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.u(0,a.z)
this.dx=this.ax(new V.S(t.a,t.b).w(0,2).q(0,u.gag()))}this.ab()},
jn:function(a){var u,t,s
H.d(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sY(-t*10*u)
this.ab()}},
b6:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.a_()
if(u<t){this.dy=t
s=a.y
this.c.av(s)
this.b.av(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aW(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.w(0,V.aW(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iae:1}
U.ee.prototype={
gv:function(){var u=this.r
if(u==null){u=D.K()
this.r=u}return u},
S:function(a){var u=this.r
if(u!=null)u.I(a)},
bg:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.K()
u.e=t
u=t}else u=t
t=this.ghQ()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.K()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hR:function(a){var u,t,s,r
H.d(a,"$iw")
if(!J.G(this.b,this.a.b.c))return
H.i(a,"$icr")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.w()
r=u+t*s
if(u!==r){this.d=r
u=new D.F("zoom",u,r,this,[P.r])
u.b=!0
this.S(u)}},
b6:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aW(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iae:1}
M.de.prototype={
gv:function(){var u=this.f
if(u==null){u=D.K()
this.f=u}return u},
a4:function(a){var u
H.d(a,"$iw")
u=this.f
if(u!=null)u.I(a)},
b9:function(){return this.a4(null)},
iF:function(a,b){var u,t,s,r,q,p,o,n
u=M.aB
H.h(b,"$il",[u],"$al")
for(t=b.length,s=this.ga3(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gv()
n.toString
H.k(s,r)
if(n.a==null)n.sak(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.br(a,b,this,[u])
u.b=!0
this.a4(u)},
iH:function(a,b){var u,t,s
u=M.aB
H.h(b,"$il",[u],"$al")
for(t=b.gU(b),s=this.ga3();t.F();)t.gM().gv().G(0,s)
u=new D.bs(a,b,this,[u])
u.b=!0
this.a4(u)},
ah:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ar(u,u.length,0,[H.t(u,0)]);u.F();){t=u.d
if(t!=null)t.ah(a)}this.e=!1},
$al:function(){return[M.aB]},
$aa0:function(){return[M.aB]},
$iaB:1}
M.dg.prototype={
gv:function(){var u=this.f
if(u==null){u=D.K()
this.f=u}return u},
a4:function(a){var u
H.d(a,"$iw")
u=this.f
if(u!=null)u.I(a)},
b9:function(){return this.a4(null)},
sbh:function(a){var u,t
if(a==null)a=new X.fi()
u=this.a
if(u!==a){if(u!=null)u.gv().G(0,this.ga3())
t=this.a
this.a=a
a.gv().h(0,this.ga3())
u=new D.F("camera",t,this.a,this,[X.bC])
u.b=!0
this.a4(u)}},
sbp:function(a,b){var u,t
if(b==null)b=X.jF(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gv().G(0,this.ga3())
t=this.b
this.b=b
b.gv().h(0,this.ga3())
u=new D.F("target",t,this.b,this,[X.cA])
u.b=!0
this.a4(u)}},
sbq:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gv().G(0,this.ga3())
t=this.c
this.c=a
if(a!=null)a.gv().h(0,this.ga3())
u=new D.F("technique",t,this.c,this,[O.bv])
u.b=!0
this.a4(u)}},
ah:function(a){a.dh(this.c)
this.b.a6(a)
this.a.a6(a)
this.d.av(a)
this.d.ah(a)
this.a.aR(a)
this.b.toString
a.dg()},
$iaB:1}
M.dk.prototype={
a4:function(a){var u
H.d(a,"$iw")
u=this.x
if(u!=null)u.I(a)},
b9:function(){return this.a4(null)},
i4:function(a,b){var u,t,s,r,q,p,o,n
u=E.al
H.h(b,"$il",[u],"$al")
for(t=b.length,s=this.ga3(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bH()
n.sak(null)
n.sbd(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.sak(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.br(a,b,this,[u])
u.b=!0
this.a4(u)},
i6:function(a,b){var u,t,s
u=E.al
H.h(b,"$il",[u],"$al")
for(t=b.gU(b),s=this.ga3();t.F();)t.gM().gv().G(0,s)
u=new D.bs(a,b,this,[u])
u.b=!0
this.a4(u)},
sbh:function(a){var u,t
if(a==null)a=X.kz(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gv().G(0,this.ga3())
t=this.a
this.a=a
a.gv().h(0,this.ga3())
u=new D.F("camera",t,this.a,this,[X.bC])
u.b=!0
this.a4(u)}},
sbp:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gv().G(0,this.ga3())
t=this.b
this.b=b
b.gv().h(0,this.ga3())
u=new D.F("target",t,this.b,this,[X.cA])
u.b=!0
this.a4(u)}},
sbq:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gv().G(0,this.ga3())
t=this.c
this.c=a
if(a!=null)a.gv().h(0,this.ga3())
u=new D.F("technique",t,this.c,this,[O.bv])
u.b=!0
this.a4(u)}},
gv:function(){var u=this.x
if(u==null){u=D.K()
this.x=u}return u},
ah:function(a){var u
a.dh(this.c)
this.b.a6(a)
this.a.a6(a)
u=this.c
if(u!=null)u.av(a)
for(u=this.d.a,u=new J.ar(u,u.length,0,[H.t(u,0)]);u.F();)u.d.av(a)
for(u=this.d.a,u=new J.ar(u,u.length,0,[H.t(u,0)]);u.F();)u.d.ah(a)
this.a.toString
a.cy.aP()
a.db.aP()
this.b.toString
a.dg()},
sho:function(a,b){this.d=H.h(b,"$ia0",[E.al],"$aa0")},
$iaB:1}
M.aB.prototype={}
A.da.prototype={}
A.eK.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kv:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.eE(r.a,r.c)}},
ez:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.eA(r.a,r.c)}}}
A.dD.prototype={
fX:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.ag("")
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
a6.jz(u)
a6.jG(u)
a6.jA(u)
a6.jO(u)
a6.jP(u)
a6.jI(u)
a6.jT(u)
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
u=new P.ag("")
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
q.jD(u)
q.jy(u)
q.jB(u)
q.jE(u)
q.jM(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jK(u)
q.jL(u)}q.jH(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.j){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.i){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
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
case C.i:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.h:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
q.jC(u)
q.jJ(u)
q.jN(u)
q.jQ(u)
q.jR(u)
q.jS(u)
q.jF(u)}m=u.a+="// === Main ===\n"
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
this.f8(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.i(this.y.p(0,"invViewMat"),"$iaw")
if(t)this.dy=H.i(this.y.p(0,"objMat"),"$iaw")
if(r)this.fr=H.i(this.y.p(0,"viewObjMat"),"$iaw")
this.fy=H.i(this.y.p(0,"projViewObjMat"),"$iaw")
if(a6.x2)this.k1=H.i(this.y.p(0,"txt2DMat"),"$icG")
if(a6.y1)this.k2=H.i(this.y.p(0,"txtCubeMat"),"$iaw")
if(a6.y2)this.k3=H.i(this.y.p(0,"colorMat"),"$iaw")
this.shk(H.b([],[A.aw]))
t=a6.aD
if(t>0){this.k4=H.d(this.y.p(0,"bendMatCount"),"$iL")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.p(P.q("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.i(g,"$iaw"))}}t=a6.a
if(t!==C.d){this.r2=H.i(this.y.p(0,"emissionClr"),"$iH")
switch(t){case C.d:break
case C.j:break
case C.i:this.rx=H.i(this.y.p(0,"emissionTxt"),"$iam")
this.x1=H.i(this.y.p(0,"nullEmissionTxt"),"$iL")
break
case C.h:this.ry=H.i(this.y.p(0,"emissionTxt"),"$iah")
this.x1=H.i(this.y.p(0,"nullEmissionTxt"),"$iL")
break}}t=a6.b
if(t!==C.d){this.x2=H.i(this.y.p(0,"ambientClr"),"$iH")
switch(t){case C.d:break
case C.j:break
case C.i:this.y1=H.i(this.y.p(0,"ambientTxt"),"$iam")
this.aD=H.i(this.y.p(0,"nullAmbientTxt"),"$iL")
break
case C.h:this.y2=H.i(this.y.p(0,"ambientTxt"),"$iah")
this.aD=H.i(this.y.p(0,"nullAmbientTxt"),"$iL")
break}}t=a6.c
if(t!==C.d){this.as=H.i(this.y.p(0,"diffuseClr"),"$iH")
switch(t){case C.d:break
case C.j:break
case C.i:this.bH=H.i(this.y.p(0,"diffuseTxt"),"$iam")
this.bI=H.i(this.y.p(0,"nullDiffuseTxt"),"$iL")
break
case C.h:this.eF=H.i(this.y.p(0,"diffuseTxt"),"$iah")
this.bI=H.i(this.y.p(0,"nullDiffuseTxt"),"$iL")
break}}t=a6.d
if(t!==C.d){this.bJ=H.i(this.y.p(0,"invDiffuseClr"),"$iH")
switch(t){case C.d:break
case C.j:break
case C.i:this.eG=H.i(this.y.p(0,"invDiffuseTxt"),"$iam")
this.bK=H.i(this.y.p(0,"nullInvDiffuseTxt"),"$iL")
break
case C.h:this.eH=H.i(this.y.p(0,"invDiffuseTxt"),"$iah")
this.bK=H.i(this.y.p(0,"nullInvDiffuseTxt"),"$iL")
break}}t=a6.e
if(t!==C.d){this.bN=H.i(this.y.p(0,"shininess"),"$iX")
this.bL=H.i(this.y.p(0,"specularClr"),"$iH")
switch(t){case C.d:break
case C.j:break
case C.i:this.eI=H.i(this.y.p(0,"specularTxt"),"$iam")
this.bM=H.i(this.y.p(0,"nullSpecularTxt"),"$iL")
break
case C.h:this.eJ=H.i(this.y.p(0,"specularTxt"),"$iah")
this.bM=H.i(this.y.p(0,"nullSpecularTxt"),"$iL")
break}}switch(a6.f){case C.d:break
case C.j:break
case C.i:this.eK=H.i(this.y.p(0,"bumpTxt"),"$iam")
this.bO=H.i(this.y.p(0,"nullBumpTxt"),"$iL")
break
case C.h:this.eL=H.i(this.y.p(0,"bumpTxt"),"$iah")
this.bO=H.i(this.y.p(0,"nullBumpTxt"),"$iL")
break}if(a6.dy){this.eM=H.i(this.y.p(0,"envSampler"),"$iah")
this.eN=H.i(this.y.p(0,"nullEnvTxt"),"$iL")
t=a6.r
if(t!==C.d){this.bP=H.i(this.y.p(0,"reflectClr"),"$iH")
switch(t){case C.d:break
case C.j:break
case C.i:this.eO=H.i(this.y.p(0,"reflectTxt"),"$iam")
this.bQ=H.i(this.y.p(0,"nullReflectTxt"),"$iL")
break
case C.h:this.eP=H.i(this.y.p(0,"reflectTxt"),"$iah")
this.bQ=H.i(this.y.p(0,"nullReflectTxt"),"$iL")
break}}t=a6.x
if(t!==C.d){this.bR=H.i(this.y.p(0,"refraction"),"$iX")
this.bS=H.i(this.y.p(0,"refractClr"),"$iH")
switch(t){case C.d:break
case C.j:break
case C.i:this.eQ=H.i(this.y.p(0,"refractTxt"),"$iam")
this.bT=H.i(this.y.p(0,"nullRefractTxt"),"$iL")
break
case C.h:this.eR=H.i(this.y.p(0,"refractTxt"),"$iah")
this.bT=H.i(this.y.p(0,"nullRefractTxt"),"$iL")
break}}}t=a6.y
if(t!==C.d){this.bU=H.i(this.y.p(0,"alpha"),"$iX")
switch(t){case C.d:break
case C.j:break
case C.i:this.eS=H.i(this.y.p(0,"alphaTxt"),"$iam")
this.bV=H.i(this.y.p(0,"nullAlphaTxt"),"$iL")
break
case C.h:this.eT=H.i(this.y.p(0,"alphaTxt"),"$iah")
this.bV=H.i(this.y.p(0,"nullAlphaTxt"),"$iL")
break}}this.sh6(H.b([],[A.cF]))
this.sh7(H.b([],[A.cH]))
this.sh8(H.b([],[A.cI]))
this.sh9(H.b([],[A.cJ]))
this.sha(H.b([],[A.cK]))
this.shb(H.b([],[A.cL]))
if(a6.k2){t=a6.z
if(t>0){this.eU=H.d(this.y.p(0,"dirLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iH")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iH")
s=this.cZ;(s&&C.a).h(s,new A.cF(h,g,f))}}t=a6.Q
if(t>0){this.eV=H.d(this.y.p(0,"pntLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iH")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iH")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iH")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iX")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iX")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iX")
s=this.d_;(s&&C.a).h(s,new A.cH(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.eW=H.d(this.y.p(0,"spotLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iH")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iH")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iH")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iH")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iX")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iX")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iX")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iX")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iX")
s=this.d0;(s&&C.a).h(s,new A.cI(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eX=H.d(this.y.p(0,"txtDirLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iH")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iH")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iH")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iH")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iH")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iL")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iam")
s=this.d1;(s&&C.a).h(s,new A.cJ(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.eY=H.d(this.y.p(0,"txtPntLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iH")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iH")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$icG")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iH")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iL")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iX")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iX")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iX")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iah")
s=this.d2;(s&&C.a).h(s,new A.cK(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eZ=H.d(this.y.p(0,"txtSpotLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iH")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iH")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iH")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iH")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iH")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iL")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iH")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iX")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iX")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iX")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a3,"$iX")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a4,"$iX")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a5,"$iam")
s=this.d3;(s&&C.a).h(s,new A.cL(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ar:function(a,b,c){C.b.T(b.a,b.d,1)},
al:function(a,b,c){if(c==null||c.d<6)C.b.T(b.a,b.d,1)
else{a.dC(c)
C.b.T(b.a,b.d,0)}},
shk:function(a){this.r1=H.h(a,"$ia",[A.aw],"$aa")},
sh6:function(a){this.cZ=H.h(a,"$ia",[A.cF],"$aa")},
sh7:function(a){this.d_=H.h(a,"$ia",[A.cH],"$aa")},
sh8:function(a){this.d0=H.h(a,"$ia",[A.cI],"$aa")},
sh9:function(a){this.d1=H.h(a,"$ia",[A.cJ],"$aa")},
sha:function(a){this.d2=H.h(a,"$ia",[A.cK],"$aa")},
shb:function(a){this.d3=H.h(a,"$ia",[A.cL],"$aa")}}
A.fF.prototype={
jz:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aD+"];\n"
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
jG:function(a){var u
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
jA:function(a){var u
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
jO:function(a){var u,t
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
jP:function(a){var u,t
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
jI:function(a){var u
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
jT:function(a){var u
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
aJ:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.aw(c,1))+"Txt;\n"
a.a=u
if(b===C.i)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jD:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aJ(a,u,"emission")
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
case C.i:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
jy:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aJ(a,u,"ambient")
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
case C.i:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
jB:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aJ(a,u,"diffuse")
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
case C.i:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
jE:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aJ(a,u,"invDiffuse")
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
case C.i:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
jM:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aJ(a,u,"specular")
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
case C.i:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
jH:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.j:break
case C.i:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.h:u+="uniform samplerCube bumpTxt;\n"
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
case C.i:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.h:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
jK:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aJ(a,u,"reflect")
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
case C.i:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jL:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aJ(a,u,"refract")
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
case C.i:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jC:function(a){var u,t
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
jJ:function(a){var u,t
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
jN:function(a){var u,t
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
jQ:function(a){var u,t,s
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
jR:function(a){var u,t,s
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
jS:function(a){var u,t,s
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
jF:function(a){var u
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
i:function(a){return this.as}}
A.cF.prototype={}
A.cJ.prototype={}
A.cH.prototype={}
A.cK.prototype={}
A.cI.prototype={}
A.cL.prototype={}
A.cx.prototype={
dG:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
f8:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.dW(a,35633)
this.f=this.dW(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.ep(u,t,this.e)
C.b.ep(u,this.r,this.f)
C.b.kO(u,this.r)
if(!H.jZ(C.b.ca(u,this.r,35714))){s=C.b.fE(u,this.r)
C.b.km(u,this.r)
H.p(P.q("Failed to link shader: "+H.j(s)))}this.jb()
this.jd()},
a6:function(a){C.b.dt(a.a,this.r)
this.x.kv()},
dW:function(a,b){var u,t,s
u=this.a
t=C.b.kk(u,b)
C.b.fP(u,t,a)
C.b.ke(u,t)
if(!H.jZ(C.b.fG(u,t,35713))){s=C.b.fF(u,t)
C.b.kn(u,t)
throw H.c(P.q("Error compiling shader '"+H.j(t)+"': "+H.j(s)))}return t},
jb:function(){var u,t,s,r,q,p
u=H.b([],[A.da])
t=this.a
s=H.a8(C.b.ca(t,this.r,35721))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.fz(t,this.r,r)
p=C.b.fB(t,this.r,q.name)
C.a.h(u,new A.da(t,q.name,p))}this.x=new A.eK(u)},
jd:function(){var u,t,s,r,q,p
u=H.b([],[A.e7])
t=this.a
s=H.a8(C.b.ca(t,this.r,35718))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.fA(t,this.r,r)
p=C.b.fH(t,this.r,q.name)
C.a.h(u,this.kl(q.type,q.size,q.name,p))}this.y=new A.hB(u)},
aX:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.L(u,t,b,c)
else return A.jN(u,t,b,a,c)},
hr:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.am(u,t,b,c)
else return A.jN(u,t,b,a,c)},
hs:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ah(u,t,b,c)
else return A.jN(u,t,b,a,c)},
bB:function(a,b){return new P.ek(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
kl:function(a,b,c,d){switch(a){case 5120:return this.aX(b,c,d)
case 5121:return this.aX(b,c,d)
case 5122:return this.aX(b,c,d)
case 5123:return this.aX(b,c,d)
case 5124:return this.aX(b,c,d)
case 5125:return this.aX(b,c,d)
case 5126:return new A.X(this.a,this.r,c,d)
case 35664:return new A.hw(this.a,this.r,c,d)
case 35665:return new A.H(this.a,this.r,c,d)
case 35666:return new A.hz(this.a,this.r,c,d)
case 35667:return new A.hx(this.a,this.r,c,d)
case 35668:return new A.hy(this.a,this.r,c,d)
case 35669:return new A.hA(this.a,this.r,c,d)
case 35674:return new A.hC(this.a,this.r,c,d)
case 35675:return new A.cG(this.a,this.r,c,d)
case 35676:return new A.aw(this.a,this.r,c,d)
case 35678:return this.hr(b,c,d)
case 35680:return this.hs(b,c,d)
case 35670:throw H.c(this.bB("BOOL",c))
case 35671:throw H.c(this.bB("BOOL_VEC2",c))
case 35672:throw H.c(this.bB("BOOL_VEC3",c))
case 35673:throw H.c(this.bB("BOOL_VEC4",c))
default:throw H.c(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.bG.prototype={
i:function(a){return this.b}}
A.dV.prototype={}
A.e7.prototype={}
A.hB.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
kF:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+a
return s},
P:function(){return this.kF("\n")}}
A.L.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.hx.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.hy.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.hA.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.hv.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sjw:function(a){this.e=H.h(a,"$ia",[P.m],"$aa")}}
A.X.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.hw.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.H.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.hz.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.hC.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cG.prototype={
aq:function(a){var u=new Float32Array(H.c0(H.h(a,"$ia",[P.r],"$aa")))
C.b.fs(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.aw.prototype={
aq:function(a){var u=new Float32Array(H.c0(H.h(a,"$ia",[P.r],"$aa")))
C.b.ft(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.am.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.ah.prototype={
dC:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.T(t,s,0)
else C.b.T(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.iT.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.d9(u.b,b).d9(u.d.d9(u.c,b),c)
a.sa2(0,new V.Q(t.a,t.b,t.c))
a.sau(t.q(0,Math.sqrt(t.D(t))))
u=1-b
s=1-c
a.seq(new V.au(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:5}
F.j2.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:15}
F.j4.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.B(q)
t=-t*q
p=s*q
a.sa2(0,new V.Q(t,p,r))
p=new V.y(t,p,r)
a.sau(p.q(0,Math.sqrt(p.D(p))))
a.seq(new V.au(1-c,2+c,-1,-1))},
$S:5}
F.j5.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:24}
F.j6.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:24}
F.je.prototype={
$3:function(a,b,c){var u,t,s,r
u=c*3.141592653589793
t=Math.sin(u)
s=b*6.283185307179586
r=new V.y(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.q(0,Math.sqrt(r.D(r)))
a.sa2(0,new V.Q(s.a,s.b,s.c))},
$S:5}
F.js.prototype={
$2:function(a,b){return 0},
$S:15}
F.jt.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.B(u)
t=a.f
s=new V.y(t.a,t.b,t.c)
u=s.q(0,Math.sqrt(s.D(s))).w(0,this.b+u)
a.sa2(0,new V.Q(u.a,u.b,u.c))},
$S:5}
F.jv.prototype={
$1:function(a){return new V.Q(Math.cos(a),Math.sin(a),0)},
$S:16}
F.jd.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.Q(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:16}
F.j3.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.kc(t.$1(u),s)
s=J.lS(J.kc(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.y(s.a,s.b,s.c)
q=s.q(0,Math.sqrt(s.D(s)))
t=$.kT
if(t==null){t=new V.y(1,0,0)
$.kT=t
p=t}else p=t
t=q.aM(!J.G(q,p)?V.kX():p)
o=t.q(0,Math.sqrt(t.D(t)))
t=o.aM(q)
p=t.q(0,Math.sqrt(t.D(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.w(0,t*s)
s=o.w(0,m*s)
a.sa2(0,J.lR(r,new V.Q(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:5}
F.a5.prototype={
bj:function(){if(!this.gbk()){C.a.G(this.a.a.d.b,this)
this.a.a.X()}this.cD()
this.cE()
this.iV()},
cI:function(a){this.a=a
C.a.h(a.d.b,this)},
cJ:function(a){this.b=a
C.a.h(a.d.c,this)},
ja:function(a){this.c=a
C.a.h(a.d.d,this)},
cD:function(){var u=this.a
if(u!=null){C.a.G(u.d.b,this)
this.a=null}},
cE:function(){var u=this.b
if(u!=null){C.a.G(u.d.c,this)
this.b=null}},
iV:function(){var u=this.c
if(u!=null){C.a.G(u.d.d,this)
this.c=null}},
gbk:function(){return this.a==null||this.b==null||this.c==null},
hj:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cN()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.f9())return
return q.q(0,Math.sqrt(q.D(q)))},
hn:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.u(0,t)
u=new V.y(u.a,u.b,u.c)
q=u.q(0,Math.sqrt(u.D(u)))
u=r.u(0,t)
u=new V.y(u.a,u.b,u.c)
u=q.aM(u.q(0,Math.sqrt(u.D(u))))
return u.q(0,Math.sqrt(u.D(u)))},
cS:function(){if(this.d!=null)return!0
var u=this.hj()
if(u==null){u=this.hn()
if(u==null)return!1}this.d=u
this.a.a.X()
return!0},
hi:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cN()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.f9())return
return q.q(0,Math.sqrt(q.D(q)))},
hm:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.I().a){u=m.u(0,p)
u=new V.y(u.a,u.b,u.c)
h=u.q(0,Math.sqrt(u.D(u)))
if(j.a-k.a<0)h=h.V(0)}else{g=(u-l.b)/i
u=m.u(0,p).w(0,g).n(0,p).u(0,s)
u=new V.y(u.a,u.b,u.c)
h=u.q(0,Math.sqrt(u.D(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.V(0)}u=this.d
if(u!=null){f=u.q(0,Math.sqrt(u.D(u)))
u=f.aM(h)
u=u.q(0,Math.sqrt(u.D(u))).aM(f)
h=u.q(0,Math.sqrt(u.D(u)))}return h},
cQ:function(){if(this.e!=null)return!0
var u=this.hi()
if(u==null){u=this.hm()
if(u==null)return!1}this.e=u
this.a.a.X()
return!0},
aW:function(a,b){var u=b.a
if(u==null)throw H.c(P.q("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.q("May not replace a face's vertex with a vertex attached to a different shape."))},
gkd:function(a){if(J.G(this.a,this.b))return!0
if(J.G(this.b,this.c))return!0
if(J.G(this.c,this.a))return!0
return!1},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
J:function(a){var u,t
if(this.gbk())return a+"disposed"
u=a+C.c.ap(J.aq(this.a.e),0)+", "+C.c.ap(J.aq(this.b.e),0)+", "+C.c.ap(J.aq(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.J("")}}
F.f7.prototype={}
F.hc.prototype={
b2:function(a,b,c){var u,t
u=b.a
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
if(u==t.e){u=b.c
u.a.a.E()
u=u.e
t=c.c
t.a.a.E()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.c
t.a.a.E()
if(u==t.e){u=b.c
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.E()
u=u.e
t=c.c
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
if(u==t.e){u=b.c
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.ba.prototype={
bj:function(){if(!this.gbk()){C.a.G(this.a.a.c.b,this)
this.a.a.X()}this.cD()
this.cE()},
cI:function(a){this.a=a
C.a.h(a.c.b,this)},
cJ:function(a){this.b=a
C.a.h(a.c.c,this)},
cD:function(){var u=this.a
if(u!=null){C.a.G(u.c.b,this)
this.a=null}},
cE:function(){var u=this.b
if(u!=null){C.a.G(u.c.c,this)
this.b=null}},
gbk:function(){return this.a==null||this.b==null},
aW:function(a,b){var u=b.a
if(u==null)throw H.c(P.q("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.q("May not replace a line's vertex with a vertex attached to a different shape."))},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
J:function(a){if(this.gbk())return a+"disposed"
return a+C.c.ap(J.aq(this.a.e),0)+", "+C.c.ap(J.aq(this.b.e),0)},
P:function(){return this.J("")}}
F.fq.prototype={}
F.hu.prototype={
b2:function(a,b,c){var u,t
u=b.a
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
return u==t.e}else{u=b.a
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
return u==t.e}else return!1}}}
F.bu.prototype={
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
J:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ap(J.aq(u.e),0)},
P:function(){return this.J("")}}
F.dS.prototype={
gv:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u},
b3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.E()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){q=u[r]
this.a.h(0,q.kf())}this.a.E()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.E()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bu()
if(m.a==null)H.p(P.q("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.I(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.E()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.E()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.mk(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.E()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.E()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.E()
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
F.bJ(k,j,h)}u=this.e
if(u!=null)u.aG()},
am:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.am()||!1
if(!this.a.am())t=!1
u=this.e
if(u!=null)u.aG()
return t},
kz:function(a,b,c){var u,t,s,r
u=this.a.c.length
for(t=c;t<u;++t){s=this.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
if(b.b2(0,a,r))return r}return},
ky:function(a,b){return this.kz(a,b,0)},
iZ:function(a,b){var u,t,s,r,q,p
H.h(b,"$ia",[F.a4],"$aa")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.A)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.p(P.q("May not replace a face's vertex when the point has been disposed."))
if(J.G(q,s)){r.aW(s,a)
q=r.a
if(q!=null){C.a.G(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.G(r.b,s)){r.aW(s,a)
q=r.b
if(q!=null){C.a.G(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.G(r.c,s)){r.aW(s,a)
q=r.c
if(q!=null){C.a.G(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.I(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null)H.p(P.q("May not replace a line's vertex when the point has been disposed."))
if(J.G(q,s)){r.aW(s,a)
q=r.a
if(q!=null){C.a.G(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.G(r.b,s)){r.aW(s,a)
q=r.b
if(q!=null){C.a.G(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.I(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.p(P.q("May not replace a point's vertex when the point has been disposed."))
if(J.G(q,s)){if(a.a==null)H.p(P.q("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.G(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.I(null)}}this.a.G(0,s)}},
fc:function(a,b){var u,t,s,r,q,p,o,n
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.t(u,0)])
for(u=[F.a4];t.length!==0;){s=C.a.gkB(t)
C.a.l9(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.A)(t),++p){o=t[p]
if(o!=null&&a.b2(0,s,o)){C.a.h(r,o)
C.a.G(t,o)}}if(r.length>1){n=b.b3(r)
if(n!=null){this.iZ(n,r)
C.a.h(t,n)}}}}this.a.E()
this.c.c1()
this.d.c1()
this.b.la()
this.c.dl(new F.hu())
this.d.dl(new F.hc())
u=this.e
if(u!=null)u.aG()},
jX:function(a){this.fc(new F.cO(),new F.fP())},
bE:function(){return this.jX(null)},
ew:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aQ()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bg().a)!==0)++r
if((s&$.bf().a)!==0)++r
if((s&$.bh().a)!==0)++r
if((s&$.bi().a)!==0)++r
if((s&$.d4().a)!==0)++r
if((s&$.d5().a)!==0)++r
if((s&$.ca().a)!==0)++r
if((s&$.be().a)!==0)++r
q=a1.gdD(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.r
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.dc])
for(m=0,l=0;l<r;++l){k=a1.k0(l)
j=k.gdD(k)
C.a.t(n,l,new Z.dc(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].kP(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.t(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.aC(t,34962,e)
C.b.ev(t,34962,new Float32Array(H.c0(o)),35044)
C.b.aC(t,34962,null)
d=new Z.ce(new Z.ef(34962,e),n,a1)
d.shG(H.b([],[Z.bq]))
if(this.b.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)}a=Z.jQ(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bq(0,c.length,a))}if(this.c.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.E()
C.a.h(c,b.e)}a=Z.jQ(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bq(1,c.length,a))}if(this.d.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.E()
C.a.h(c,b.e)}a=Z.jQ(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bq(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.J("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.J("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.J("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.J("   "))}return C.a.l(u,"\n")},
b4:function(a){var u=this.e
if(u!=null)u.I(a)},
X:function(){return this.b4(null)},
$ioc:1}
F.h5.prototype={
bC:function(a,b,c,d){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
return F.bJ(b,c,d)},
ek:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[F.a4],"$aa")
u=H.b([],[F.a5])
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
C.a.h(u,F.bJ(s,p,o))}}return u},
jV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.a4],"$aa")
u=H.b([],[F.a5])
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
C.a.h(u,F.bJ(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bJ(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bJ(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.bJ(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
dl:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b2(0,p,n)){p.bj()
break}}}}},
c1:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gkd(s)
if(t)s.bj()}},
am:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cS())s=!1
return s},
cR:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cQ())s=!1
return s},
i:function(a){return this.P()},
J:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].J(a))
return C.a.l(u,"\n")},
P:function(){return this.J("")},
shy:function(a){this.b=H.h(a,"$ia",[F.a5],"$aa")}}
F.h6.prototype={
gm:function(a){return this.b.length},
dl:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b2(0,p,n)){p.bj()
break}}}}},
c1:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.G(s.a,s.b)
if(t)s.bj()}},
i:function(a){return this.P()},
J:function(a){var u,t,s,r
u=H.b([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].J(a+(""+s+". ")))}return C.a.l(u,"\n")},
P:function(){return this.J("")},
shI:function(a){this.b=H.h(a,"$ia",[F.ba],"$aa")}}
F.h7.prototype={
gm:function(a){return this.b.length},
la:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.G(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.I(null)}s=t.a
if(s!=null){C.a.G(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
J:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].J(a))
return C.a.l(u,"\n")},
P:function(){return this.J("")},
scA:function(a){this.b=H.h(a,"$ia",[F.bu],"$aa")}}
F.a4.prototype={
cV:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.bY(this.cx,s,p,u,t,r,q,a,o)},
kf:function(){return this.cV(null)},
sa2:function(a,b){var u
if(!J.G(this.f,b)){this.f=b
u=this.a
if(u!=null)u.X()}},
sde:function(a){var u
a=a==null?null:a.q(0,Math.sqrt(a.D(a)))
if(!J.G(this.r,a)){this.r=a
u=this.a
if(u!=null)u.X()}},
ses:function(a){var u
a=a==null?null:a.q(0,Math.sqrt(a.D(a)))
if(!J.G(this.x,a)){this.x=a
u=this.a
if(u!=null)u.X()}},
sdq:function(a){var u
if(!J.G(this.y,a)){this.y=a
u=this.a
if(u!=null)u.X()}},
sau:function(a){var u
if(!J.G(this.z,a)){this.z=a
u=this.a
if(u!=null)u.X()}},
sae:function(a,b){var u
if(!J.G(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.X()}},
sfw:function(a){var u
if(this.ch!==a){this.ch=a
u=this.a
if(u!=null)u.X()}},
seq:function(a){var u
if(!J.G(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.X()}},
kP:function(a){var u,t
if(a.B(0,$.aQ())){u=this.f
t=[P.r]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.B(0,$.bg())){u=this.r
t=[P.r]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.B(0,$.bf())){u=this.x
t=[P.r]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.B(0,$.bh())){u=this.y
t=[P.r]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.B(0,$.bi())){u=this.z
t=[P.r]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.B(0,$.d4())){u=this.Q
t=[P.r]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.B(0,$.d5())){u=this.Q
if(u==null)return H.b([1,1,1,1],[P.r])
else return u.dr(0)}else if(a.B(0,$.ca()))return H.b([this.ch],[P.r])
else if(a.B(0,$.be())){u=this.cx
t=[P.r]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.r])},
cS:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cN()
this.d.a1(0,new F.i_(u))
u=u.a
this.r=u.q(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.X()
u=this.a.e
if(u!=null)u.aG()}return!0},
cQ:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cN()
this.d.a1(0,new F.hZ(u))
u=u.a
this.x=u.q(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.X()
u=this.a.e
if(u!=null)u.aG()}return!0},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
J:function(a){var u,t,s
u=H.b([],[P.f])
C.a.h(u,C.c.ap(J.aq(this.e),0))
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
C.a.h(u,V.P(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
P:function(){return this.J("")}}
F.i_.prototype={
$1:function(a){var u,t
H.d(a,"$ia5")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:9}
F.hZ.prototype={
$1:function(a){var u,t
H.d(a,"$ia5")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:9}
F.hQ.prototype={
E:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.q("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.X()
return!0},
el:function(a,b,c,d,e,f,g,h,i){var u=F.bY(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bD:function(a,b,c,d,e,f){return this.el(a,null,b,c,null,d,e,f,0)},
jW:function(a,b,c,d,e,f){return this.el(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
G:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.q("May not remove a vertex without first making it empty."))
b.a=null
C.a.G(this.c,b)
u.X()
this.b=!0
return!0},
am:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cS()
return!0},
cR:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cQ()
return!0},
k9:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.G(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.I(null)}}}}return!0},
i:function(a){return this.P()},
J:function(a){var u,t,s,r
this.E()
u=H.b([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].J(a))
return C.a.l(u,"\n")},
P:function(){return this.J("")},
sjx:function(a){this.c=H.h(a,"$ia",[F.a4],"$aa")}}
F.hR.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
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
a1:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a5]})
C.a.a1(this.b,b)
C.a.a1(this.c,new F.hS(this,b))
C.a.a1(this.d,new F.hT(this,b))},
i:function(a){return this.P()},
J:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].J(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].J(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].J(a))
return C.a.l(u,"\n")},
P:function(){return this.J("")},
shz:function(a){this.b=H.h(a,"$ia",[F.a5],"$aa")},
shA:function(a){this.c=H.h(a,"$ia",[F.a5],"$aa")},
shB:function(a){this.d=H.h(a,"$ia",[F.a5],"$aa")}}
F.hS.prototype={
$1:function(a){H.d(a,"$ia5")
if(!J.G(a.a,this.a))this.b.$1(a)},
$S:9}
F.hT.prototype={
$1:function(a){var u
H.d(a,"$ia5")
u=this.a
if(!J.G(a.a,u)&&!J.G(a.b,u))this.b.$1(a)},
$S:9}
F.hV.prototype={
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.e(u,s)
return u[s]}else{if(b<0)return H.e(u,b)
return u[b]}},
i:function(a){return this.P()},
J:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].J(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].J(a))
return C.a.l(u,"\n")},
P:function(){return this.J("")},
shJ:function(a){this.b=H.h(a,"$ia",[F.ba],"$aa")},
shK:function(a){this.c=H.h(a,"$ia",[F.ba],"$aa")}}
F.hW.prototype={}
F.cO.prototype={
b2:function(a,b,c){return J.G(b.f,c.f)}}
F.hX.prototype={}
F.hU.prototype={
b3:function(a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a4,"$ia",[F.a4],"$aa")
for(u=a4.length,t=0,s=null,r=null,q=null,p=0,o=null,n=0,m=null,l=0,k=null,j=0,i=0,h=0;h<u;++h){g=a4[h]
f=g.f
if(f!=null){s=s==null?f:new V.Q(s.a+f.a,s.b+f.b,s.c+f.c);++t}e=g.r
if(e!=null)r=r==null?e:new V.y(r.a+e.a,r.b+e.b,r.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.y(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){m=m==null?c:new V.V(m.a+c.a,m.b+c.b);++n}b=g.z
if(b!=null){k=k==null?b:new V.y(k.a+b.a,k.b+b.b,k.c+b.c);++l}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(o==null){a=[a0,a1,a2,a]
o=new V.aP(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
o=new V.aP(o.a+a0,o.b+a1,o.c+a2,o.d+a)}++p}a=g.ch
if(typeof a!=="number")return H.B(a)
i+=a;++j}a3=F.bY(null,null,null,null,null,null,null,null,0)
if(t<=0||s==null)a3.sa2(0,null)
else a3.sa2(0,s.q(0,t))
if(r==null)a3.sde(null)
else a3.sde(r.q(0,Math.sqrt(r.D(r))))
if(q==null)a3.ses(null)
else a3.ses(q.q(0,Math.sqrt(q.D(q))))
if(n<=0||m==null)a3.sdq(null)
else a3.sdq(m.q(0,n))
if(l<=0||k==null)a3.sau(null)
else a3.sau(k.q(0,l))
if(p<=0||o==null)a3.sae(0,null)
else{u=o.q(0,p)
u=[u.a,u.b,u.c,u.d]
a=u[0]
a0=u[1]
a1=u[2]
u=u[3]
if(a<0)a=0
else if(a>1)a=1
if(a0<0)a0=0
else if(a0>1)a0=1
if(a1<0)a1=0
else if(a1>1)a1=1
if(u<0)u=0
else if(u>1)u=1
a3.sae(0,new V.ab(a,a0,a1,u))}if(j<=0)a3.sfw(0)
else a3.sfw(i/j)
return a3}}
F.fP.prototype={
b3:function(a){var u,t,s,r
H.h(a,"$ia",[F.a4],"$aa")
u=V.cN()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.y(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.q(0,Math.sqrt(u.D(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s)a[s].sde(u)
return}}
F.hY.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.P()},
J:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].J(a))
return C.a.l(u,"\n")},
P:function(){return this.J("")},
scA:function(a){this.b=H.h(a,"$ia",[F.bu],"$aa")}}
O.dC.prototype={
gv:function(){var u=this.dy
if(u==null){u=D.K()
this.dy=u}return u},
W:function(a){var u
H.d(a,"$iw")
u=this.dy
if(u!=null)u.I(a)},
ba:function(){return this.W(null)},
eb:function(a){H.d(a,"$iw")
this.a=null
this.W(a)},
j1:function(){return this.eb(null)},
hX:function(a,b){var u=V.as
u=new D.br(a,H.h(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.W(u)},
hZ:function(a,b){var u=V.as
u=new D.bs(a,H.h(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.W(u)},
dT:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.a9(u.e.length+3,4)*4
s=C.f.a9(u.f.length+3,4)*4
r=C.f.a9(u.r.length+3,4)*4
q=C.f.a9(u.x.length+3,4)*4
p=C.f.a9(u.y.length+3,4)*4
o=C.f.a9(u.z.length+3,4)*4
n=C.f.a9(this.e.a.length+3,4)*4
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
a2=u===C.i||m===C.i||l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i
a3=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.aQ()
if(a0){b=$.bg()
a7=new Z.b1(a7.a|b.a)}if(a1){b=$.bf()
a7=new Z.b1(a7.a|b.a)}if(a2){b=$.bh()
a7=new Z.b1(a7.a|b.a)}if(a3){b=$.bi()
a7=new Z.b1(a7.a|b.a)}if(a5){b=$.be()
a7=new Z.b1(a7.a|b.a)}return new A.fF(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a0:function(a,b){H.h(a,"$ia",[T.cC],"$aa")
if(b!=null)if(!C.a.Z(a,b)){b.a=a.length
C.a.h(a,b)}},
av:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ar(u,u.length,0,[H.t(u,0)]);u.F();){t=u.d
t.toString
s=$.hP
if(s==null){s=new V.y(0,0,1)
$.hP=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.ds(s)}}},
fk:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dT()
t=H.d(a2.fr.j(0,u.as),"$idD")
if(t==null){t=A.mr(u,a2.a)
a2.en(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bH
u=a3.e
if(!(u instanceof Z.ce)){a3.e=null
u=null}if(u==null||!u.d.B(0,r)){u=s.r1
if(u)a3.d.am()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cR()
p.a.cR()
p=p.e
if(p!=null)p.aG()}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.k9()
o=o.e
if(o!=null)o.aG()}m=a3.d.ew(new Z.eg(a2.a),r)
m.aN($.aQ()).e=this.a.Q.c
if(u)m.aN($.bg()).e=this.a.cx.c
if(q)m.aN($.bf()).e=this.a.ch.c
if(s.rx)m.aN($.bh()).e=this.a.cy.c
if(p)m.aN($.bi()).e=this.a.db.c
if(s.x1)m.aN($.be()).e=this.a.dx.c
a3.e=m}u=T.cC
l=H.b([],[u])
this.a.a6(a2)
if(s.fx){q=this.a
p=a2.dx.ga7()
q=q.dy
q.toString
q.aq(p.ai(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db.ga7().w(0,a2.dx.ga7())
a2.cx=p}q=q.fr
q.toString
q.aq(p.ai(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gl7().w(0,a2.dx.ga7())
a2.ch=p}q=q.fy
q.toString
q.aq(p.ai(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.aq(C.r.ai(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.aq(C.r.ai(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.aq(C.r.ai(p,!0))}if(s.aD>0){k=this.e.a.length
q=this.a.k4
C.b.T(q.a,q.d,k)
for(q=[P.r],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.e(o,j)
o=o[j]
p.toString
H.d(o,"$ias")
p=p.r1
if(j>=p.length)return H.e(p,j)
p=p[j]
i=new Float32Array(H.c0(H.h(o.ai(0,!0),"$ia",q,"$aa")))
C.b.ft(p.a,p.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.i:this.a0(l,this.f.d)
q=this.a
p=this.f.d
q.ar(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.h:this.a0(l,this.f.e)
q=this.a
p=this.f.e
q.al(q.ry,q.x1,p)
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
case C.i:this.a0(l,this.r.d)
q=this.a
p=this.r.d
q.ar(q.y1,q.aD,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.h:this.a0(l,this.r.e)
q=this.a
p=this.r.e
q.al(q.y2,q.aD,p)
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
q=q.as
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.i:this.a0(l,this.x.d)
q=this.a
p=this.x.d
q.ar(q.bH,q.bI,p)
p=this.a
q=this.x.f
p=p.as
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.h:this.a0(l,this.x.e)
q=this.a
p=this.x.e
q.al(q.eF,q.bI,p)
p=this.a
q=this.x.f
p=p.as
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}switch(s.d){case C.d:break
case C.j:q=this.a
p=this.y.f
q=q.bJ
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.i:this.a0(l,this.y.d)
q=this.a
p=this.y.d
q.ar(q.eG,q.bK,p)
p=this.a
q=this.y.f
p=p.bJ
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.h:this.a0(l,this.y.e)
q=this.a
p=this.y.e
q.al(q.eH,q.bK,p)
p=this.a
q=this.y.f
p=p.bJ
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}switch(s.e){case C.d:break
case C.j:q=this.a
p=this.z.f
q=q.bL
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bN
C.b.N(p.a,p.d,n)
break
case C.i:this.a0(l,this.z.d)
q=this.a
p=this.z.d
q.ar(q.eI,q.bM,p)
p=this.a
q=this.z.f
p=p.bL
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bN
C.b.N(q.a,q.d,n)
break
case C.h:this.a0(l,this.z.e)
q=this.a
p=this.z.e
q.al(q.eJ,q.bM,p)
p=this.a
q=this.z.f
p=p.bL
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bN
C.b.N(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.eU
C.b.T(q.a,q.d,k)
h=a2.db.ga7()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cZ
if(g>=o.length)return H.e(o,g)
d=o[g]
o=h.ds(e.a)
n=o.a
c=o.b
b=o.c
b=o.q(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.C(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.C(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.eV
C.b.T(q.a,q.d,k)
h=a2.db.ga7()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.d_
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbo(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bt(e.gbo(e))
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gae(e)
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcL()
n=d.e
C.b.N(n.a,n.d,o)
o=e.gcM()
n=d.f
C.b.N(n.a,n.d,o)
o=e.gcN()
n=d.r
C.b.N(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.eW
C.b.T(q.a,q.d,k)
h=a2.db.ga7()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.d0
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbo(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcX(e).lC()
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bt(e.gbo(e))
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gae(e)
n=d.e
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gly()
n=d.f
C.b.N(n.a,n.d,o)
o=e.glx()
n=d.r
C.b.N(n.a,n.d,o)
o=e.gcL()
n=d.x
C.b.N(n.a,n.d,o)
o=e.gcM()
n=d.y
C.b.N(n.a,n.d,o)
o=e.gcN()
n=d.z
C.b.N(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.eX
C.b.T(q.a,q.d,k)
h=a2.db.ga7()
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
n=this.a.d1
if(g>=n.length)return H.e(n,g)
d=n[g]
n=e.gbr()
H.h(l,"$ia",o,"$aa")
if(!C.a.Z(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gcX(e)
c=d.d
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=e.gc5()
c=d.b
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=e.gc2(e)
c=d.c
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=h.ds(e.gcX(e))
c=n.a
b=n.b
a=n.c
a=n.q(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.C(b.a,b.d,c,n,a)
a=e.gae(e)
n=d.f
C.b.C(n.a,n.d,a.a,a.b,a.c)
a=e.gbr()
n=a.gbY(a)
if(!n){n=d.x
C.b.T(n.a,n.d,1)}else{n=d.r
c=a.gbY(a)
b=n.a
n=n.d
if(!c)C.b.T(b,n,0)
else C.b.T(b,n,a.gkI(a))
n=d.x
C.b.T(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.eY
C.b.T(q.a,q.d,k)
h=a2.db.ga7()
for(q=this.dx.y,p=q.length,o=[P.r],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
c=this.a.d2
if(g>=c.length)return H.e(c,g)
d=c[g]
c=e.gbr()
H.h(l,"$ia",n,"$aa")
if(!C.a.Z(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.w(0,e.ga7())
c=e.ga7()
b=$.cu
if(b==null){b=new V.Q(0,0,0)
$.cu=b}b=c.bt(b)
c=d.b
C.b.C(c.a,c.d,b.a,b.b,b.c)
c=$.cu
if(c==null){c=new V.Q(0,0,0)
$.cu=c}c=a0.bt(c)
b=d.c
C.b.C(b.a,b.d,c.a,c.b,c.c)
c=a0.d8()
b=d.d
i=new Float32Array(H.c0(H.h(new V.dE(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).ai(0,!0),"$ia",o,"$aa")))
C.b.fs(b.a,b.d,!1,i)
b=e.gae(e)
c=d.e
C.b.C(c.a,c.d,b.a,b.b,b.c)
b=e.gbr()
c=b.gbY(b)
if(!c){c=d.r
C.b.T(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.T(a1,c,0)
else C.b.T(a1,c,b.a)
c=d.r
C.b.T(c.a,c.d,0)}c=e.gcL()
b=d.x
C.b.N(b.a,b.d,c)
c=e.gcM()
b=d.y
C.b.N(b.a,b.d,c)
c=e.gcN()
b=d.z
C.b.N(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.eZ
C.b.T(q.a,q.d,k)
h=a2.db.ga7()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.d3
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbr()
H.h(l,"$ia",u,"$aa")
if(!C.a.Z(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gbo(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcX(e)
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gc5()
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gc2(e)
n=d.e
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bt(e.gbo(e))
n=d.f
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gbr()
n=o.gbY(o)
if(!n){o=d.x
C.b.T(o.a,o.d,1)}else{n=d.r
c=o.gbY(o)
b=n.a
n=n.d
if(!c)C.b.T(b,n,0)
else C.b.T(b,n,o.gkI(o))
o=d.x
C.b.T(o.a,o.d,0)}o=e.gae(e)
n=d.y
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.glD()
n=d.z
C.b.N(n.a,n.d,o)
o=e.glE()
n=d.Q
C.b.N(n.a,n.d,o)
o=e.gcL()
n=d.ch
C.b.N(n.a,n.d,o)
o=e.gcM()
n=d.cx
C.b.N(n.a,n.d,o)
o=e.gcN()
n=d.cy
C.b.N(n.a,n.d,o);++g}}}switch(s.f){case C.d:break
case C.j:break
case C.i:this.a0(l,this.Q.d)
u=this.a
q=this.Q.d
u.ar(u.eK,u.bO,q)
break
case C.h:this.a0(l,this.Q.e)
u=this.a
q=this.Q.e
u.al(u.eL,u.bO,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.ga7().d8()
a2.Q=q}u=u.id
u.toString
u.aq(q.ai(0,!0))}if(s.dy){this.a0(l,this.ch)
u=this.a
q=this.ch
u.al(u.eM,u.eN,q)
switch(s.r){case C.d:break
case C.j:u=this.a
q=this.cx.f
u=u.bP
u.toString
p=q.a
o=q.b
q=q.c
C.b.C(u.a,u.d,p,o,q)
break
case C.i:this.a0(l,this.cx.d)
u=this.a
q=this.cx.d
u.ar(u.eO,u.bQ,q)
q=this.a
u=this.cx.f
q=q.bP
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
break
case C.h:this.a0(l,this.cx.e)
u=this.a
q=this.cx.e
u.al(u.eP,u.bQ,q)
q=this.a
u=this.cx.f
q=q.bP
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
break}switch(s.x){case C.d:break
case C.j:u=this.a
q=this.cy.f
u=u.bS
u.toString
p=q.a
o=q.b
q=q.c
C.b.C(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bR
C.b.N(q.a,q.d,o)
break
case C.i:this.a0(l,this.cy.d)
u=this.a
q=this.cy.d
u.ar(u.eQ,u.bT,q)
q=this.a
u=this.cy.f
q=q.bS
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bR
C.b.N(u.a,u.d,o)
break
case C.h:this.a0(l,this.cy.e)
u=this.a
q=this.cy.e
u.al(u.eR,u.bT,q)
q=this.a
u=this.cy.f
q=q.bS
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bR
C.b.N(u.a,u.d,o)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.j:u=this.a
p=this.db.f
u=u.bU
C.b.N(u.a,u.d,p)
break
case C.i:this.a0(l,this.db.d)
u=this.a
p=this.db.d
u.ar(u.eS,u.bV,p)
p=this.a
u=this.db.f
p=p.bU
C.b.N(p.a,p.d,u)
break
case C.h:this.a0(l,this.db.e)
u=this.a
p=this.db.e
u.al(u.eT,u.bV,p)
p=this.a
u=this.db.f
p=p.bU
C.b.N(p.a,p.d,u)
break}u=a2.a
C.b.cY(u,3042)
C.b.k8(u,770,771)}for(j=0;j<l.length;++j)l[j].a6(a2)
u=a3.e
u.a6(a2)
u.ah(a2)
u.aR(a2)
if(q)C.b.kr(a2.a,3042)
for(u=a2.a,j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.cK(u,33984+q.a)
C.b.aL(u,34067,null)}}q=this.a
q.toString
C.b.dt(u,null)
q.x.ez()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dT().as},
shl:function(a){this.e=H.h(a,"$ia0",[V.as],"$aa0")}}
O.fD.prototype={
j6:function(a){var u=this.f
if(!(Math.abs(u-a)<$.I().a)){this.f=a
u=new D.F(this.b,u,a,this,[P.r])
u.b=!0
this.a.W(u)}},
az:function(){this.dF()
this.j6(1)}}
O.co.prototype={
W:function(a){this.a.W(H.d(a,"$iw"))},
ba:function(){return this.W(null)},
az:function(){},
j8:function(a){},
j9:function(a){var u,t
u=this.e
if(u!=a){if(u!=null)u.gv().G(0,this.gaV())
t=this.e
this.e=a
if(a!=null)a.gv().h(0,this.gaV())
u=new D.F(this.b+".textureCube",t,this.e,this,[T.bX])
u.b=!0
this.a.W(u)}},
sau:function(a){var u=this.c
if(u!==C.h){if(u===C.d)this.az()
this.c=C.h
this.j8(null)
u=this.a
u.a=null
u.W(null)}this.j9(a)}}
O.fE.prototype={}
O.aV.prototype={
ed:function(a){var u,t
if(!J.G(this.f,a)){u=this.f
this.f=a
t=new D.F(this.b+".color",u,a,this,[V.a1])
t.b=!0
this.a.W(t)}},
az:function(){this.dF()
this.ed(new V.a1(1,1,1))},
sae:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.az()
u=this.a
u.a=null
u.W(null)}this.ed(b)}}
O.fG.prototype={
j7:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.I().a)){this.ch=a
u=new D.F(this.b+".refraction",u,a,this,[P.r])
u.b=!0
this.a.W(u)}},
az:function(){this.ce()
this.j7(1)}}
O.fH.prototype={
cF:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.I().a)){this.ch=a
u=new D.F(this.b+".shininess",u,a,this,[P.r])
u.b=!0
this.a.W(u)}},
az:function(){this.ce()
this.cF(100)}}
O.dU.prototype={
gv:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u},
W:function(a){var u
H.d(a,"$iw")
u=this.e
if(u!=null)u.I(a)},
ba:function(){return this.W(null)},
fk:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.d(a.fr.j(0,"Skybox"),"$idV")
if(u==null){t=a.a
u=new A.dV(t,"Skybox")
u.dG(t,"Skybox")
u.f8($.mM,$.mL)
u.z=u.x.j(0,"posAttr")
u.Q=H.i(u.y.j(0,"fov"),"$iX")
u.ch=H.i(u.y.j(0,"ratio"),"$iX")
u.cx=H.i(u.y.j(0,"boxClr"),"$iH")
u.cy=H.i(u.y.j(0,"boxTxt"),"$iah")
u.db=H.i(u.y.j(0,"viewMat"),"$iaw")
a.en(u)}this.a=u}if(b.e==null){t=b.d.ew(new Z.eg(a.a),$.aQ())
t.aN($.aQ()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.a6(a)}t=a.d
s=a.c
r=this.a
r.a6(a)
q=this.b
p=r.Q
C.b.N(p.a,p.d,q)
q=r.ch
C.b.N(q.a,q.d,t/s)
s=this.c
r.cy.dC(s)
s=this.d
t=r.cx
C.b.C(t.a,t.d,s.a,s.b,s.c)
s=a.db.ga7().d8()
r=r.db
r.toString
r.aq(s.ai(0,!0))
t=b.e
if(t instanceof Z.ce){t.a6(a)
t.ah(a)
t.aR(a)}else b.e=null
t=this.a
t.toString
C.b.dt(a.a,null)
t.x.ez()
t=this.c
if(t!=null)t.aR(a)}}
O.bv.prototype={}
T.cC.prototype={}
T.bX.prototype={
gv:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u},
a6:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.cK(u,33984+this.a)
C.b.aL(u,34067,this.b)}},
aR:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.cK(u,33984+this.a)
C.b.aL(u,34067,null)}}}
T.hk.prototype={
fb:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
u=a+"/"+d+"posx"+b
t=a+"/"+d+"posy"+b
s=a+"/"+d+"posz"+b
r=a+"/"+d+"negx"+b
q=a+"/"+d+"negy"+b
p=a+"/"+d+"negz"+b
o=this.a
n=o.createTexture()
C.b.aL(o,34067,n)
C.b.c3(o,34067,10242,10497)
C.b.c3(o,34067,10243,10497)
C.b.c3(o,34067,10241,9729)
C.b.c3(o,34067,10240,9729)
C.b.aL(o,34067,null)
m=new T.bX()
m.a=0
m.b=n
m.c=!1
m.d=0
this.aY(m,n,u,34069,!1,!1)
this.aY(m,n,r,34070,!1,!1)
this.aY(m,n,t,34071,!1,!1)
this.aY(m,n,q,34072,!1,!1)
this.aY(m,n,s,34073,!1,!1)
this.aY(m,n,p,34074,!1,!1)
return m},
kQ:function(a,b){return this.fb(a,b,!1,"")},
fa:function(a){return this.fb(a,".png",!1,"")},
aY:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.n
W.a6(u,"load",H.k(new T.hl(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
j2:function(a,b,c){var u,t,s,r
b=V.k6(b,2)
u=V.k6(a.width,2)
t=V.k6(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jB(null,null)
s.width=u
s.height=t
r=H.d(C.q.fD(s,"2d"),"$ibE")
r.imageSmoothingEnabled=!1;(r&&C.D).kt(r,a,0,0,s.width,s.height)
return P.nB(C.D.hF(r,0,0,s.width,s.height))}}}
T.hl.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.j2(this.b,u.c,this.c)
s=u.a
C.b.aL(s,34067,this.d)
C.b.l6(s,37440,this.e?1:0)
C.b.lj(s,this.f,0,6408,6408,5121,t)
C.b.aL(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.ku()}++u.e},
$S:14}
V.b4.prototype={
aO:function(a){return!0},
i:function(a){return"all"},
$iay:1}
V.ay.prototype={}
V.dB.prototype={
aO:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].aO(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sac:function(a){this.a=H.h(a,"$ia",[V.ay],"$aa")},
$iay:1}
V.at.prototype={
aO:function(a){return!this.fU(a)},
i:function(a){return"!["+this.dE(0)+"]"}}
V.fX.prototype={
aO:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.bT(this.a)
t=H.bT(this.b)
return u+".."+t},
$iay:1}
V.h4.prototype={
fZ:function(a){var u,t
if(a.a.length<=0)throw H.c(P.q("May not create a SetMatcher with zero characters."))
u=new H.aL([P.m,P.N])
for(t=new H.cn(a,a.gm(a),0,[H.aa(a,"U",0)]);t.F();)u.t(0,t.d,!0)
this.sj5(u)},
aO:function(a){return this.a.bF(a)},
i:function(a){return P.dY(this.a.gaE(),0,null)},
sj5:function(a){this.a=H.h(a,"$iJ",[P.m,P.N],"$aJ")},
$iay:1}
V.cy.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cE(this.a.k(0,b))
r.sac(H.b([],[V.ay]))
r.c=!1
C.a.h(this.c,r)
return r},
kA:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.aO(a))return r}return},
i:function(a){return this.b},
sjs:function(a){this.c=H.h(a,"$ia",[V.cE],"$aa")}}
V.e5.prototype={
i:function(a){var u,t
u=H.k8(this.b,"\n","\\n")
t=H.k8(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cD.prototype={
aQ:function(a,b,c){var u,t,s
H.h(c,"$ia",[P.f],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.A)(c),++t){s=c[t]
this.c.t(0,s,b)}},
i:function(a){return this.b},
siW:function(a){var u=P.f
this.c=H.h(a,"$iJ",[u,u],"$aJ")}}
V.hn.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cy(this,b)
u.sjs(H.b([],[V.cE]))
u.d=null
this.a.t(0,b,u)}return u},
R:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cD(this,a)
t=P.f
u.siW(new H.aL([t,t]))
this.b.t(0,a,u)}return u},
fq:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.e5])
t=this.c
s=[P.m]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.K(a,o)
m=t.kA(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dY(r,0,null)
throw H.c(P.q("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dY(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.e5(j==null?k.b:j,l,o)}++o}}},
sjh:function(a){this.a=H.h(a,"$iJ",[P.f,V.cy],"$aJ")},
sjl:function(a){this.b=H.h(a,"$iJ",[P.f,V.cD],"$aJ")}}
V.cE.prototype={
i:function(a){return this.b.b+": "+this.dE(0)}}
X.bC.prototype={$iaX:1}
X.fd.prototype={
gv:function(){var u=this.x
if(u==null){u=D.K()
this.x=u}return u},
ay:function(a){var u=this.x
if(u!=null)u.I(a)},
a6:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.k7(u,36160,null)
C.b.cY(u,2884)
C.b.cY(u,2929)
C.b.kq(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.B(t)
p=C.e.at(q*t)
q=r.b
if(typeof s!=="number")return H.B(s)
o=C.e.at(q*s)
q=C.e.at(r.c*t)
a.c=q
r=C.e.at(r.d*s)
a.d=r
C.b.lq(u,p,o,q,r)
C.b.kc(u,this.c)
if(this.b){r=this.a
C.b.kb(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.ka(u,n)}}
X.fi.prototype={
gv:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
a6:function(a){var u
a.cy.c0(V.bP())
u=V.bP()
a.db.c0(u)},
aR:function(a){a.cy.aP()
a.db.aP()},
$iaX:1,
$ibC:1}
X.dL.prototype={
gv:function(){var u=this.f
if(u==null){u=D.K()
this.f=u}return u},
ay:function(a){var u
H.d(a,"$iw")
u=this.f
if(u!=null)u.I(a)},
i2:function(){return this.ay(null)},
a6:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aW(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.c0(n)
u=$.kA
if(u==null){u=V.jL()
t=V.kW()
s=$.kS
if(s==null){s=new V.y(0,0,-1)
$.kS=s}s=V.kv(u,t,s)
$.kA=s
m=s}else m=u
u=this.b
if(u!=null){l=u.b6(a,this)
if(l!=null)m=l.w(0,m)}a.db.c0(m)},
aR:function(a){a.cy.aP()
a.db.aP()},
$iaX:1,
$ibC:1}
X.cA.prototype={}
V.bl.prototype={
bw:function(a){this.b=new P.fg(C.Y)
this.c=null
this.scn(H.b([],[[P.a,W.aC]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.aC]))
t=a.split("\n")
for(u=t.length,s=[W.aC],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.E(p)
n=this.b.hq(p,0,p.length)
m=n==null?p:n
C.k.fM(o,H.k8(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaF(this.d),o)}},
fi:function(a){var u,t,s,r
H.h(a,"$ia",[P.f],"$aa")
this.scn(H.b([],[[P.a,W.aC]]))
u=C.a.l(a,"\n")
t=this.c
if(t==null){t=this.bG()
this.c=t}for(t=t.fq(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)this.c_(t[r])},
scn:function(a){this.d=H.h(a,"$ia",[[P.a,W.aC]],"$aa")}}
V.jr.prototype={
$1:function(a){H.d(a,"$ib_")
P.k7(C.e.fp(this.a.gkG(),2)+" fps")},
$S:51}
V.eX.prototype={
c_:function(a){switch(a.a){case"Class":this.O(a.b,"#551")
break
case"Comment":this.O(a.b,"#777")
break
case"Id":this.O(a.b,"#111")
break
case"Num":this.O(a.b,"#191")
break
case"Reserved":this.O(a.b,"#119")
break
case"String":this.O(a.b,"#171")
break
case"Symbol":this.O(a.b,"#616")
break
case"Type":this.O(a.b,"#B11")
break
case"Whitespace":this.O(a.b,"#111")
break}},
bG:function(){var u,t,s,r
u=V.ho()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.v(new H.u("_"))
C.a.h(t.a,s)
s=V.W("a","z")
C.a.h(t.a,s)
s=V.W("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.v(new H.u("_"))
C.a.h(s.a,t)
t=V.W("0","9")
C.a.h(s.a,t)
t=V.W("a","z")
C.a.h(s.a,t)
t=V.W("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Int")
s=V.W("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").l(0,"Int")
t=V.W("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").l(0,"FloatDot")
s=V.v(new H.u("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").l(0,"Float")
t=V.W("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").l(0,"Float")
s=V.W("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Sym")
t=V.v(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").l(0,"Sym")
s=V.v(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"OpenDoubleStr")
t=V.v(new H.u('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.v(new H.u('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.v(new H.u("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.v(new H.u('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.b4())
s=u.k(0,"Start").l(0,"OpenSingleStr")
t=V.v(new H.u("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.v(new H.u("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.v(new H.u("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.v(new H.u("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.b4())
s=u.k(0,"Start").l(0,"Slash")
t=V.v(new H.u("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"Comment")
s=V.v(new H.u("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").l(0,"EndComment")
t=V.v(new H.u("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").l(0,"Comment")
s=new V.at()
r=[V.ay]
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.u("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"MLComment")
s=V.v(new H.u("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").l(0,"MLCStar")
t=V.v(new H.u("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").l(0,"MLComment")
s=new V.at()
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.u("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").l(0,"EndComment")
s=V.v(new H.u("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Whitespace")
t=V.v(new H.u(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").l(0,"Whitespace")
s=V.v(new H.u(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Int")
s.d=s.a.R("Num")
s=u.k(0,"Float")
s.d=s.a.R("Num")
s=u.k(0,"Sym")
s.d=s.a.R("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.R("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.R("String")
s=u.k(0,"EndComment")
s.d=s.a.R("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.R("Whitespace")
s=u.k(0,"Id")
t=s.a.R("Id")
s.d=t
s=[P.f]
t.aQ(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aQ(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aQ(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.fe.prototype={
c_:function(a){switch(a.a){case"Builtin":this.O(a.b,"#411")
break
case"Comment":this.O(a.b,"#777")
break
case"Id":this.O(a.b,"#111")
break
case"Num":this.O(a.b,"#191")
break
case"Preprocess":this.O(a.b,"#737")
break
case"Reserved":this.O(a.b,"#119")
break
case"Symbol":this.O(a.b,"#611")
break
case"Type":this.O(a.b,"#171")
break
case"Whitespace":this.O(a.b,"#111")
break}},
bG:function(){var u,t,s,r
u=V.ho()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.v(new H.u("_"))
C.a.h(t.a,s)
s=V.W("a","z")
C.a.h(t.a,s)
s=V.W("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.v(new H.u("_"))
C.a.h(s.a,t)
t=V.W("0","9")
C.a.h(s.a,t)
t=V.W("a","z")
C.a.h(s.a,t)
t=V.W("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Int")
s=V.W("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").l(0,"Int")
t=V.W("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").l(0,"FloatDot")
s=V.v(new H.u("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").l(0,"Float")
t=V.W("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").l(0,"Float")
s=V.W("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Sym")
t=V.v(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").l(0,"Sym")
s=V.v(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Slash")
t=V.v(new H.u("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"Comment")
s=V.v(new H.u("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").l(0,"Sym").a,new V.b4())
s=u.k(0,"Comment").l(0,"EndComment")
t=V.v(new H.u("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").l(0,"Comment")
s=new V.at()
r=[V.ay]
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.u("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Preprocess")
s=V.v(new H.u("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").l(0,"Preprocess")
t=new V.at()
t.sac(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.u("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").l(0,"EndPreprocess")
t=V.v(new H.u("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Whitespace")
s=V.v(new H.u(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").l(0,"Whitespace")
t=V.v(new H.u(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Int")
t.d=t.a.R("Num")
t=u.k(0,"Float")
t.d=t.a.R("Num")
t=u.k(0,"Sym")
t.d=t.a.R("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.R("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.R("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.R("Whitespace")
t=u.k(0,"Id")
s=t.a.R("Id")
t.d=s
t=[P.f]
s.aQ(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aQ(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aQ(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.ff.prototype={
c_:function(a){switch(a.a){case"Attr":this.O(a.b,"#911")
this.O("=","#111")
break
case"Id":this.O(a.b,"#111")
break
case"Other":this.O(a.b,"#111")
break
case"Reserved":this.O(a.b,"#119")
break
case"String":this.O(a.b,"#171")
break
case"Symbol":this.O(a.b,"#616")
break}},
bG:function(){var u,t,s
u=V.ho()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.v(new H.u("_"))
C.a.h(t.a,s)
s=V.W("a","z")
C.a.h(t.a,s)
s=V.W("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.v(new H.u("_"))
C.a.h(s.a,t)
t=V.W("0","9")
C.a.h(s.a,t)
t=V.W("a","z")
C.a.h(s.a,t)
t=V.W("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").l(0,"Attr")
s=V.v(new H.u("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Sym")
s=V.v(new H.u("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").l(0,"Sym")
t=V.v(new H.u("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"OpenStr")
s=V.v(new H.u('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").l(0,"CloseStr")
t=V.v(new H.u('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").l(0,"EscStr")
s=V.v(new H.u("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").l(0,"OpenStr")
t=V.v(new H.u('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").l(0,"OpenStr").a,new V.b4())
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.b4())
t=u.k(0,"Other").l(0,"Other")
s=new V.at()
s.sac(H.b([],[V.ay]))
C.a.h(t.a,s)
t=V.v(new H.u('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.W("a","z")
C.a.h(s.a,t)
t=V.W("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.R("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.R("String")
t=u.k(0,"Id")
s=t.a.R("Id")
t.d=s
s.aQ(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.k(0,"Attr")
s.d=s.a.R("Attr")
s=u.k(0,"Other")
s.d=s.a.R("Other")
return u}}
V.fT.prototype={
fi:function(a){H.h(a,"$ia",[P.f],"$aa")
this.scn(H.b([],[[P.a,W.aC]]))
this.O(C.a.l(a,"\n"),"#111")},
c_:function(a){},
bG:function(){return}}
V.fV.prototype={
bC:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.k(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.kO().gdj().j(0,H.j(u))
if(t==null)if(d){c.$0()
this.eh(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.ke(this.c).h(0,q)
o=W.me("radio")
o.checked=s
o.name=u
u=W.n
W.a6(o,"change",H.k(new V.fW(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.G.H(q,o)
n=r.createElement("span")
n.textContent=b
C.G.H(q,n)
J.ke(this.c).h(0,r.createElement("br"))},
aA:function(a,b,c){return this.bC(a,b,c,!1)},
eh:function(a){var u,t,s,r,q
u=P.kO()
t=P.f
s=P.mn(u.gdj(),t,t)
s.t(0,this.a,a)
r=u.fl(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.X).iY(t,new P.iC([],[]).du(""),"",q)}}
V.fW.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.eh(this.d)}},
$S:14}
V.h8.prototype={
h_:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).H(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.H(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.H(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.H(q,p)}o=u.createElement("div")
this.a=o
C.k.H(q,o)
this.b=null
o=W.n
W.a6(u,"scroll",H.k(new V.ha(s),{func:1,ret:-1,args:[o]}),!1,o)},
em:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.f],"$aa")
this.jc()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fq(C.a.kN(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.H(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.H(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.H(t,o)
break
case"Link":n=p.b
if(H.o1(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.E(m[1])
l.textContent=H.E(m[0])
C.k.H(t,l)}else{k=P.ez(C.J,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.j(k)
l.textContent=n
C.k.H(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.H(t,o)
break}}C.k.H(this.a,t)},
fC:function(a){var u,t,s,r
u=new V.eX("dart")
u.bw("dart")
t=new V.fe("glsl")
t.bw("glsl")
s=new V.ff("html")
s.bw("html")
r=C.a.kC(H.b([u,t,s],[V.bl]),new V.hb(a))
if(r!=null)return r
u=new V.fT("plain")
u.bw("plain")
return u},
ej:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a7,"$ia",[P.f],"$aa")
u=H.b([],[P.m])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.d2(r).a8(r,"+")){C.a.t(a7,s,C.c.aw(r,1))
C.a.h(u,1)
t=!0}else if(C.c.a8(r,"-")){C.a.t(a7,s,C.c.aw(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fC(a5)
q.fi(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.H(o,n)
C.k.H(this.a,o)
m=P.ez(C.J,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kg(null)
i.href="#"+H.j(m)
i.textContent=a4
C.k.H(j,i)
C.x.H(k,j)
C.n.H(l,k)
C.o.H(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.A)(r),++a0)C.x.H(a,r[a0])
C.n.H(e,d)
C.n.H(e,c)
C.n.H(e,a)
C.o.H(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.A)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gU(r);a3.F();)C.x.H(c,a3.gM())
C.n.H(e,d)
C.n.H(e,c)
C.o.H(n,e)}},
jU:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[P.f],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.H(this.a,t)
r=C.o.hH(t,-1)
s=H.d((r&&C.n).e0(r,-1),"$iaZ").style
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
o=H.d(C.n.e0(r,-1),"$iaZ")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).H(o,p)}},
jc:function(){var u,t,s,r
if(this.b!=null)return
u=V.ho()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Bold")
s=V.v(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").l(0,"Bold")
s=new V.at()
r=[V.ay]
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.u("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").l(0,"BoldEnd")
s=V.v(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Italic")
s=V.v(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").l(0,"Italic")
s=new V.at()
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.u("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").l(0,"ItalicEnd")
s=V.v(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Code")
s=V.v(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").l(0,"Code")
s=new V.at()
s.sac(H.b([],r))
C.a.h(t.a,s)
t=V.v(new H.u("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").l(0,"CodeEnd")
s=V.v(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"LinkHead")
s=V.v(new H.u("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").l(0,"LinkTail")
s=V.v(new H.u("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").l(0,"LinkEnd")
t=V.v(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").l(0,"LinkHead")
t=new V.at()
t.sac(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.u("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").l(0,"LinkEnd")
t=V.v(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").l(0,"LinkTail")
t=new V.at()
t.sac(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.u("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.b4())
s=u.k(0,"Other").l(0,"Other")
t=new V.at()
t.sac(H.b([],r))
C.a.h(s.a,t)
s=V.v(new H.u("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.R("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.R("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.R("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.R("Link")
s=u.k(0,"Other")
s.d=s.a.R("Other")
this.b=u}}
V.ha.prototype={
$1:function(a){P.kK(C.y,new V.h9(this.a))},
$S:14}
V.h9.prototype={
$0:function(){var u,t,s
u=C.e.at(document.documentElement.scrollTop)
t=this.a.style
s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.hb.prototype={
$1:function(a){return H.d(a,"$ibl").a===this.a},
$S:52}
T.jf.prototype={
$0:function(){this.a.saa(0,F.k1(1,null,null,1))},
$S:0}
T.jg.prototype={
$0:function(){this.a.saa(0,F.k1(8,null,null,8))},
$S:0}
T.jh.prototype={
$0:function(){this.a.saa(0,F.lj(1,!0,!0,1,40,1))},
$S:0}
T.ji.prototype={
$0:function(){this.a.saa(0,F.lj(1,!0,!1,1,40,0))},
$S:0}
T.jj.prototype={
$0:function(){this.a.saa(0,F.nT(10,20))},
$S:0}
T.jk.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=F.dT()
t=Math.sqrt(5)/2+0.5
s=F.ao(u,new V.y(-1,t,0))
r=F.ao(u,new V.y(1,t,0))
q=-t
p=F.ao(u,new V.y(-1,q,0))
o=F.ao(u,new V.y(1,q,0))
n=F.ao(u,new V.y(0,-1,q))
m=F.ao(u,new V.y(0,1,q))
l=F.ao(u,new V.y(0,-1,t))
k=F.ao(u,new V.y(0,1,t))
j=F.ao(u,new V.y(t,0,1))
i=F.ao(u,new V.y(t,0,-1))
h=F.ao(u,new V.y(q,0,1))
g=F.ao(u,new V.y(q,0,-1))
F.a_(u,s,g,m,2)
F.a_(u,s,m,r,2)
F.a_(u,s,r,k,2)
F.a_(u,s,k,h,2)
F.a_(u,s,h,g,2)
F.a_(u,r,m,i,2)
F.a_(u,m,g,n,2)
F.a_(u,g,h,p,2)
F.a_(u,h,k,l,2)
F.a_(u,k,r,j,2)
F.a_(u,o,i,n,2)
F.a_(u,o,n,p,2)
F.a_(u,o,p,l,2)
F.a_(u,o,l,j,2)
F.a_(u,o,j,i,2)
F.a_(u,n,i,m,2)
F.a_(u,p,n,g,2)
F.a_(u,l,p,h,2)
F.a_(u,j,l,k,2)
F.a_(u,i,j,r,2)
u.fc(new F.cO(),new F.hU())
this.a.saa(0,u)},
$S:0}
T.jl.prototype={
$0:function(){this.a.saa(0,F.lv(6,null,1,6))},
$S:0}
T.jm.prototype={
$0:function(){this.a.saa(0,F.o3(30,1,15,0.5))},
$S:0}
T.jn.prototype={
$0:function(){this.a.saa(0,F.nS(120,1,2,12,0.3,3))},
$S:0}
T.jo.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iw")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.ej("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.ej("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.ac.prototype
u.fR=u.i
u=J.du.prototype
u.fT=u.i
u=P.l.prototype
u.fS=u.c6
u=W.R.prototype
u.cd=u.an
u=W.es.prototype
u.fV=u.aB
u=O.co.prototype
u.dF=u.az
u=O.aV.prototype
u.ce=u.az
u=V.dB.prototype
u.fU=u.aO
u.dE=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"nv","mZ",10)
u(P,"nw","n_",10)
u(P,"nx","n0",10)
t(P,"li","nu",3)
s(W,"nL",4,null,["$4"],["n2"],29,0)
s(W,"nM",4,null,["$4"],["n3"],29,0)
var m
r(m=E.al.prototype,"gfg",0,0,null,["$1","$0"],["fh","kY"],1,0)
r(m,"gfe",0,0,null,["$1","$0"],["ff","kV"],1,0)
q(m,"gkT","kU",7)
q(m,"gkW","kX",7)
r(m=E.e4.prototype,"gdI",0,0,null,["$1","$0"],["dK","dJ"],1,0)
p(m,"gld","fm",3)
o(m=X.eb.prototype,"gie","ig",11)
o(m,"gi_","i0",11)
o(m,"gi7","i8",4)
o(m,"gij","ik",30)
o(m,"gih","ii",30)
o(m,"gio","ip",4)
o(m,"gis","it",4)
o(m,"gib","ic",4)
o(m,"giq","ir",4)
o(m,"gi9","ia",4)
o(m,"giu","iv",45)
o(m,"giw","ix",11)
o(m,"giM","iN",12)
o(m,"giI","iJ",12)
o(m,"giK","iL",12)
r(D.bn.prototype,"gh4",0,0,null,["$1","$0"],["aH","h5"],1,0)
r(m=D.dx.prototype,"ge5",0,0,null,["$1","$0"],["e6","il"],1,0)
o(m,"giy","iz",38)
q(m,"ghU","hV",27)
q(m,"giC","iD",27)
n(V.S.prototype,"gm","bl",13)
n(V.y.prototype,"gm","bl",13)
n(V.aP.prototype,"gm","bl",13)
r(m=U.ck.prototype,"gaU",0,0,null,["$1","$0"],["S","ab"],1,0)
q(m,"ghS","hT",26)
q(m,"giA","iB",26)
r(m=U.ec.prototype,"gaU",0,0,null,["$1","$0"],["S","ab"],1,0)
o(m,"gcq","cr",2)
o(m,"gcs","ct",2)
o(m,"gcu","cv",2)
r(m=U.ed.prototype,"gaU",0,0,null,["$1","$0"],["S","ab"],1,0)
o(m,"gcq","cr",2)
o(m,"gcs","ct",2)
o(m,"gcu","cv",2)
o(m,"ghM","hN",2)
o(m,"ghO","hP",2)
o(m,"gjq","jr",2)
o(m,"gjo","jp",2)
o(m,"gjm","jn",2)
o(U.ee.prototype,"ghQ","hR",2)
r(m=M.de.prototype,"ga3",0,0,null,["$1","$0"],["a4","b9"],1,0)
q(m,"giE","iF",25)
q(m,"giG","iH",25)
r(M.dg.prototype,"ga3",0,0,null,["$1","$0"],["a4","b9"],1,0)
r(m=M.dk.prototype,"ga3",0,0,null,["$1","$0"],["a4","b9"],1,0)
q(m,"gi3","i4",7)
q(m,"gi5","i6",7)
r(m=O.dC.prototype,"gaV",0,0,null,["$1","$0"],["W","ba"],1,0)
r(m,"gj0",0,0,null,["$1","$0"],["eb","j1"],1,0)
q(m,"ghW","hX",22)
q(m,"ghY","hZ",22)
r(O.co.prototype,"gaV",0,0,null,["$1","$0"],["W","ba"],1,0)
r(O.dU.prototype,"gaV",0,0,null,["$1","$0"],["W","ba"],1,0)
r(X.dL.prototype,"gi1",0,0,null,["$1","$0"],["ay","i2"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.M,null)
s(P.M,[H.jI,J.ac,J.ar,P.eo,P.l,H.cn,P.aT,H.bK,H.cM,H.eT,H.fY,H.hr,P.bo,H.cf,H.et,P.bO,H.fr,H.ft,H.fn,P.eu,P.b3,P.aF,P.eh,P.he,P.cz,P.hf,P.b_,P.aj,P.iS,P.ix,P.bZ,P.en,P.U,P.iJ,P.fz,P.bF,P.fh,P.iQ,P.iO,P.N,P.ak,P.ai,P.aS,P.fR,P.dX,P.ek,P.fc,P.bp,P.a,P.J,P.D,P.av,P.f,P.ag,P.c_,P.hH,P.iA,W.eV,W.by,W.ax,W.dJ,W.es,W.iE,W.dl,W.aA,W.iw,W.eA,P.iB,P.ex,P.ir,P.O,O.a0,O.cp,E.eN,E.al,E.fZ,E.e4,Z.ef,Z.eg,Z.ce,Z.bq,Z.b1,D.eQ,D.bH,D.w,X.dd,X.dv,X.fp,X.fw,X.az,X.fI,X.hp,X.eb,D.bn,D.a3,D.dM,D.dW,D.e1,D.e2,D.e3,V.a1,V.ab,V.f3,V.dE,V.as,V.V,V.Q,V.au,V.dQ,V.S,V.y,V.aP,U.ec,U.ed,U.ee,M.dg,M.dk,M.aB,A.da,A.eK,A.fF,A.cF,A.cJ,A.cH,A.cK,A.cI,A.cL,A.bG,A.e7,A.hB,F.a5,F.f7,F.ba,F.fq,F.bu,F.dS,F.h5,F.h6,F.h7,F.a4,F.hQ,F.hR,F.hV,F.hW,F.hX,F.hY,O.bv,O.co,T.hk,V.b4,V.ay,V.dB,V.fX,V.h4,V.cy,V.e5,V.cD,V.hn,X.bC,X.cA,X.fi,X.dL,V.bl,V.fV,V.h8])
s(J.ac,[J.fm,J.dt,J.du,J.aJ,J.bt,J.b8,H.bQ,W.bI,W.bE,W.ei,W.eY,W.di,W.dj,W.n,W.dp,W.el,W.b7,W.dz,W.eq,W.dO,W.aM,W.ev,W.eB,P.db,P.dm,P.dN,P.bV,P.dR,P.e0,P.e8])
s(J.du,[J.fS,J.bx,J.b9])
t(J.jH,J.aJ)
s(J.bt,[J.ds,J.dr])
t(P.fv,P.eo)
s(P.fv,[H.e9,W.i7,W.an,P.f8])
t(H.u,H.e9)
s(P.l,[H.f0,H.fA,H.cP])
s(H.f0,[H.bN,H.fs])
s(P.aT,[H.fB,H.i1])
t(H.fC,H.bN)
t(H.eU,H.eT)
s(P.bo,[H.fQ,H.fo,H.hF,H.ht,H.eP,H.h2,P.dK,P.aI,P.hG,P.hD,P.bW,P.eS,P.eW])
s(H.cf,[H.jw,H.hj,H.j9,H.ja,H.jb,P.i3,P.i2,P.i4,P.i5,P.iI,P.iH,P.id,P.ii,P.ie,P.ig,P.ih,P.il,P.im,P.ik,P.ij,P.hg,P.hh,P.j_,P.iu,P.it,P.iv,P.fu,P.fy,P.iP,P.eZ,P.f_,P.hL,P.hI,P.hJ,P.hK,P.iK,P.iL,P.iN,P.iM,P.iW,P.iV,P.iX,P.iY,W.f1,W.ic,W.fO,W.fN,W.iy,W.iz,W.iG,W.iR,P.iD,P.j1,P.f9,P.fa,E.h_,E.h0,E.h1,E.hm,D.f5,D.f6,F.iT,F.j2,F.j4,F.j5,F.j6,F.je,F.js,F.jt,F.jv,F.jd,F.j3,F.i_,F.hZ,F.hS,F.hT,T.hl,V.jr,V.fW,V.ha,V.h9,V.hb,T.jf,T.jg,T.jh,T.ji,T.jj,T.jk,T.jl,T.jm,T.jn,T.jo])
s(H.hj,[H.hd,H.cc])
t(P.fx,P.bO)
s(P.fx,[H.aL,W.i6])
t(H.dF,H.bQ)
s(H.dF,[H.cT,H.cV])
t(H.cU,H.cT)
t(H.dG,H.cU)
t(H.cW,H.cV)
t(H.dH,H.cW)
s(H.dH,[H.fJ,H.fK,H.fL,H.fM,H.dI,H.cs])
t(P.is,P.iS)
t(P.iq,P.ix)
t(P.ey,P.fz)
t(P.ea,P.ey)
s(P.bF,[P.eL,P.f2])
t(P.bm,P.hf)
s(P.bm,[P.eM,P.fg,P.hO,P.hN])
t(P.hM,P.f2)
s(P.ai,[P.r,P.m])
s(P.aI,[P.bU,P.fj])
t(P.i8,P.c_)
s(W.bI,[W.C,W.cQ])
s(W.C,[W.R,W.bk,W.ch,W.cR])
s(W.R,[W.x,P.o])
s(W.x,[W.d8,W.eJ,W.cb,W.bj,W.bD,W.aC,W.fb,W.dn,W.cl,W.cm,W.dw,W.cq,W.h3,W.aZ,W.dZ,W.e_,W.hi,W.cB])
t(W.cg,W.ei)
t(W.em,W.el)
t(W.bL,W.em)
t(W.dq,W.ch)
t(W.bw,W.n)
s(W.bw,[W.aU,W.ad,W.aN])
t(W.er,W.eq)
t(W.ct,W.er)
t(W.ew,W.ev)
t(W.hq,W.ew)
t(W.i0,W.cq)
t(W.b2,W.ad)
t(W.ej,W.dj)
t(W.eC,W.eB)
t(W.ep,W.eC)
t(W.i9,W.i6)
t(W.ia,P.he)
t(W.jR,W.ia)
t(W.ib,P.cz)
t(W.iF,W.es)
t(P.iC,P.iB)
t(P.aD,P.ir)
t(P.cw,P.o)
s(E.eN,[Z.dc,A.cx,T.cC])
s(D.w,[D.br,D.bs,D.F,X.fU])
s(X.fU,[X.dA,X.bb,X.cr,X.e6])
s(O.a0,[D.dx,U.ck,M.de])
s(D.eQ,[U.eR,U.ae])
t(U.df,U.ae)
s(A.cx,[A.dD,A.dV])
s(A.e7,[A.L,A.hx,A.hy,A.hA,A.hv,A.X,A.hw,A.H,A.hz,A.hC,A.cG,A.aw,A.am,A.ah])
t(F.hc,F.f7)
t(F.hu,F.fq)
t(F.cO,F.hW)
s(F.hX,[F.hU,F.fP])
s(O.bv,[O.dC,O.dU])
s(O.co,[O.fD,O.fE,O.aV])
s(O.aV,[O.fG,O.fH])
t(T.bX,T.cC)
s(V.dB,[V.at,V.cE])
t(X.fd,X.cA)
s(V.bl,[V.eX,V.fe,V.ff,V.fT])
u(H.e9,H.cM)
u(H.cT,P.U)
u(H.cU,H.bK)
u(H.cV,P.U)
u(H.cW,H.bK)
u(P.eo,P.U)
u(P.ey,P.iJ)
u(W.ei,W.eV)
u(W.el,P.U)
u(W.em,W.ax)
u(W.eq,P.U)
u(W.er,W.ax)
u(W.ev,P.U)
u(W.ew,W.ax)
u(W.eB,P.U)
u(W.eC,W.ax)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bj.prototype
C.q=W.bD.prototype
C.D=W.bE.prototype
C.k=W.aC.prototype
C.U=W.di.prototype
C.W=W.dn.prototype
C.X=W.dp.prototype
C.z=W.dq.prototype
C.Z=J.ac.prototype
C.a=J.aJ.prototype
C.a_=J.dr.prototype
C.f=J.ds.prototype
C.r=J.dt.prototype
C.e=J.bt.prototype
C.c=J.b8.prototype
C.a6=J.b9.prototype
C.G=W.dw.prototype
C.ac=W.ct.prototype
C.M=J.fS.prototype
C.N=W.dO.prototype
C.b=P.bV.prototype
C.x=W.aZ.prototype
C.o=W.dZ.prototype
C.n=W.e_.prototype
C.C=J.bx.prototype
C.O=W.b2.prototype
C.P=W.cQ.prototype
C.R=new P.eM(!1)
C.Q=new P.eL(C.R)
C.S=new P.fR()
C.T=new P.hO()
C.l=new P.is()
C.d=new A.bG(0,"ColorSourceType.None")
C.j=new A.bG(1,"ColorSourceType.Solid")
C.i=new A.bG(2,"ColorSourceType.Texture2D")
C.h=new A.bG(3,"ColorSourceType.TextureCube")
C.y=new P.aS(0)
C.V=new P.aS(5e6)
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
C.m=new P.hM(!1)})();(function staticFields(){$.aR=0
$.cd=null
$.ki=null
$.jV=!1
$.lo=null
$.lg=null
$.lu=null
$.j7=null
$.jc=null
$.k4=null
$.c1=null
$.d_=null
$.d0=null
$.jW=!1
$.Y=C.l
$.b6=null
$.jE=null
$.kp=null
$.ko=null
$.kw=null
$.kB=null
$.cu=null
$.kF=null
$.kR=null
$.kV=null
$.kT=null
$.kU=null
$.hP=null
$.kS=null
$.kY=null
$.mM="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.mL="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.kA=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"o9","ly",function(){return H.ln("_$dart_dartClosure")})
u($,"oa","k9",function(){return H.ln("_$dart_js")})
u($,"of","lz",function(){return H.b0(H.hs({
toString:function(){return"$receiver$"}}))})
u($,"og","lA",function(){return H.b0(H.hs({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oh","lB",function(){return H.b0(H.hs(null))})
u($,"oi","lC",function(){return H.b0(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ol","lF",function(){return H.b0(H.hs(void 0))})
u($,"om","lG",function(){return H.b0(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ok","lE",function(){return H.b0(H.kM(null))})
u($,"oj","lD",function(){return H.b0(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oo","lI",function(){return H.b0(H.kM(void 0))})
u($,"on","lH",function(){return H.b0(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oF","ka",function(){return P.mY()})
u($,"oL","d6",function(){return[]})
u($,"or","lJ",function(){return P.mV()})
u($,"oG","lN",function(){return H.ms(H.c0(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"oJ","lP",function(){return P.mH("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"oK","lQ",function(){return P.nm()})
u($,"oH","lO",function(){return P.ku(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"oI","kb",function(){return P.kt(P.f,P.bp)})
u($,"oy","lM",function(){return Z.aE(0)})
u($,"os","lK",function(){return Z.aE(511)})
u($,"oA","aQ",function(){return Z.aE(1)})
u($,"oz","bg",function(){return Z.aE(2)})
u($,"ou","bf",function(){return Z.aE(4)})
u($,"oB","bh",function(){return Z.aE(8)})
u($,"oC","bi",function(){return Z.aE(16)})
u($,"ov","d4",function(){return Z.aE(32)})
u($,"ow","d5",function(){return Z.aE(64)})
u($,"ox","lL",function(){return Z.aE(96)})
u($,"oD","ca",function(){return Z.aE(128)})
u($,"ot","be",function(){return Z.aE(256)})
u($,"o8","lx",function(){return new V.f3(1e-9)})
u($,"o7","I",function(){return $.lx()})})()
var v={mangledGlobalNames:{m:"int",r:"double",ai:"num",f:"String",N:"bool",D:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.D},{func:1,ret:-1,opt:[D.w]},{func:1,ret:-1,args:[D.w]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ad]},{func:1,ret:P.D,args:[F.a4,P.r,P.r]},{func:1,ret:P.D,args:[,,]},{func:1,ret:-1,args:[P.m,[P.l,E.al]]},{func:1,ret:P.D,args:[D.w]},{func:1,ret:P.D,args:[F.a5]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[W.aN]},{func:1,ret:P.r},{func:1,ret:P.D,args:[W.n]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:V.Q,args:[P.r]},{func:1,ret:P.f,args:[P.f]},{func:1,args:[,]},{func:1,ret:P.N,args:[W.C]},{func:1,ret:P.N,args:[W.aA]},{func:1,ret:P.N,args:[P.f]},{func:1,ret:-1,args:[P.m,[P.l,V.as]]},{func:1,ret:P.f,args:[P.m]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:-1,args:[P.m,[P.l,M.aB]]},{func:1,ret:-1,args:[P.m,[P.l,U.ae]]},{func:1,ret:-1,args:[P.m,[P.l,D.a3]]},{func:1,ret:P.D,args:[,]},{func:1,ret:P.N,args:[W.R,P.f,P.f,W.by]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.D,args:[P.ai]},{func:1,ret:P.D,args:[,],opt:[P.av]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,args:[P.f]},{func:1,args:[,P.f]},{func:1,ret:P.D,args:[P.f]},{func:1,ret:P.N,args:[[P.l,D.a3]]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,args:[W.n]},{func:1,ret:P.O,args:[,,]},{func:1,ret:[P.J,P.f,P.f],args:[[P.J,P.f,P.f],P.f]},{func:1,ret:-1,args:[W.b2]},{func:1,ret:P.O,args:[P.m]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:-1,args:[P.f,P.m]},{func:1,ret:P.D,args:[P.f,,]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:P.D,args:[P.b_]},{func:1,ret:P.N,args:[V.bl]},{func:1,ret:[P.aF,,],args:[,]},{func:1,ret:W.R,args:[W.C]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.ac,MediaError:J.ac,Navigator:J.ac,NavigatorConcurrentHardware:J.ac,NavigatorUserMediaError:J.ac,OverconstrainedError:J.ac,PositionError:J.ac,WebGLActiveInfo:J.ac,WebGLRenderbuffer:J.ac,WebGL2RenderingContext:J.ac,SQLError:J.ac,ArrayBufferView:H.bQ,Float32Array:H.dG,Int16Array:H.fJ,Int32Array:H.fK,Int8Array:H.fL,Uint32Array:H.fM,Uint8ClampedArray:H.dI,CanvasPixelArray:H.dI,Uint8Array:H.cs,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLLIElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,HTMLAnchorElement:W.d8,HTMLAreaElement:W.eJ,HTMLBaseElement:W.cb,HTMLBodyElement:W.bj,HTMLCanvasElement:W.bD,CanvasRenderingContext2D:W.bE,CDATASection:W.bk,CharacterData:W.bk,Comment:W.bk,ProcessingInstruction:W.bk,Text:W.bk,CSSStyleDeclaration:W.cg,MSStyleCSSProperties:W.cg,CSS2Properties:W.cg,HTMLDivElement:W.aC,XMLDocument:W.ch,Document:W.ch,DOMException:W.eY,DOMImplementation:W.di,DOMRectReadOnly:W.dj,Element:W.R,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,EventTarget:W.bI,HTMLFormElement:W.fb,HTMLHeadElement:W.dn,History:W.dp,HTMLCollection:W.bL,HTMLFormControlsCollection:W.bL,HTMLOptionsCollection:W.bL,HTMLDocument:W.dq,ImageData:W.b7,HTMLImageElement:W.cl,HTMLInputElement:W.cm,KeyboardEvent:W.aU,HTMLLabelElement:W.dw,Location:W.dz,HTMLAudioElement:W.cq,HTMLMediaElement:W.cq,PointerEvent:W.ad,MouseEvent:W.ad,DragEvent:W.ad,DocumentFragment:W.C,ShadowRoot:W.C,DocumentType:W.C,Node:W.C,NodeList:W.ct,RadioNodeList:W.ct,Range:W.dO,HTMLSelectElement:W.h3,HTMLTableCellElement:W.aZ,HTMLTableDataCellElement:W.aZ,HTMLTableHeaderCellElement:W.aZ,HTMLTableElement:W.dZ,HTMLTableRowElement:W.e_,HTMLTableSectionElement:W.hi,HTMLTemplateElement:W.cB,Touch:W.aM,TouchEvent:W.aN,TouchList:W.hq,CompositionEvent:W.bw,FocusEvent:W.bw,TextEvent:W.bw,UIEvent:W.bw,HTMLVideoElement:W.i0,WheelEvent:W.b2,Window:W.cQ,DOMWindow:W.cQ,Attr:W.cR,ClientRect:W.ej,DOMRect:W.ej,NamedNodeMap:W.ep,MozNamedAttrMap:W.ep,SVGScriptElement:P.cw,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,WebGLBuffer:P.db,WebGLFramebuffer:P.dm,WebGLProgram:P.dN,WebGLRenderingContext:P.bV,WebGLShader:P.dR,WebGLTexture:P.e0,WebGLUniformLocation:P.e8})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.dF.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.dG.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.dH.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.lr,[])
else T.lr([])})})()
//# sourceMappingURL=test.dart.js.map
