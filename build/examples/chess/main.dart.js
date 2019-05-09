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
a[c]=function(){a[c]=function(){H.o_(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kQ(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kt:function kt(a){this.a=a},
mG:function(){return new P.cJ("No element")},
mH:function(){return new P.cJ("Too few elements")},
a7:function a7(a){this.a=a},
fO:function fO(){},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hr:function hr(a,b,c){this.a=a
this.b=b
this.$ti=c},
hs:function hs(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
jd:function jd(a,b,c){this.a=a
this.b=b
this.$ti=c},
je:function je(a,b,c){this.a=a
this.b=b
this.$ti=c},
c_:function c_(){},
e9:function e9(){},
e8:function e8(){},
cg:function(a){var u,t
u=H.P(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nJ:function(a){return v.types[H.a6(a)]},
nO:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Y(a).$iF},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aB(a)
if(typeof u!=="string")throw H.e(H.aA(a))
return u},
n5:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.h6(u)
t=u[0]
s=u[1]
return new H.i0(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cG:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
n2:function(a,b){var u,t
if(typeof a!=="string")H.r(H.aA(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.f(u,3)
t=H.P(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
n1:function(a){var u,t
if(typeof a!=="string")H.r(H.aA(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.kh(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
c3:function(a){return H.mU(a)+H.kO(H.bQ(a),0,null)},
mU:function(a){var u,t,s,r,q,p,o,n,m
u=J.Y(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.F||!!u.$ic6){p=C.v(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.cg(r.length>1&&C.j.aV(r,0)===36?C.j.c2(r,1):r)},
lv:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
n4:function(a){var u,t,s,r
u=H.c([],[P.z])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.e(H.aA(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.d.bz(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.e(H.aA(r))}return H.lv(u)},
lw:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aA(s))
if(s<0)throw H.e(H.aA(s))
if(s>65535)return H.n4(a)}return H.lv(a)},
n3:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bz(u,10))>>>0,56320|u&1023)}throw H.e(P.aJ(a,0,1114111,null,null))},
c2:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n0:function(a){var u=H.c2(a).getFullYear()+0
return u},
mZ:function(a){var u=H.c2(a).getMonth()+1
return u},
mV:function(a){var u=H.c2(a).getDate()+0
return u},
mW:function(a){var u=H.c2(a).getHours()+0
return u},
mY:function(a){var u=H.c2(a).getMinutes()+0
return u},
n_:function(a){var u=H.c2(a).getSeconds()+0
return u},
mX:function(a){var u=H.c2(a).getMilliseconds()+0
return u},
k:function(a){throw H.e(H.aA(a))},
f:function(a,b){if(a==null)J.aU(a)
throw H.e(H.bP(a,b))},
bP:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aV(!0,b,"index",null)
u=H.a6(J.aU(a))
if(!(b<0)){if(typeof u!=="number")return H.k(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,"index",null,u)
return P.i_(b,"index",null)},
nD:function(a,b,c){if(a>c)return new P.c4(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c4(a,c,!0,b,"end","Invalid value")
return new P.aV(!0,b,"end",null)},
aA:function(a){return new P.aV(!0,a,null,null)},
nz:function(a){if(typeof a!=="number")throw H.e(H.aA(a))
return a},
e:function(a){var u
if(a==null)a=new P.cD()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ma})
u.name=""}else u.toString=H.ma
return u},
ma:function(){return J.aB(this.dartException)},
r:function(a){throw H.e(a)},
D:function(a){throw H.e(P.co(a))},
be:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lE:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lp:function(a,b){return new H.hM(a,b==null?null:b.method)},
ku:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.ha(a,t,u?null:b.receiver)},
ao:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.kg(a)
if(a==null)return
if(a instanceof H.ct)return u.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.bz(s,16)&8191)===10)switch(r){case 438:return u.$1(H.ku(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.lp(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.md()
p=$.me()
o=$.mf()
n=$.mg()
m=$.mj()
l=$.mk()
k=$.mi()
$.mh()
j=$.mm()
i=$.ml()
h=q.ah(t)
if(h!=null)return u.$1(H.ku(H.P(t),h))
else{h=p.ah(t)
if(h!=null){h.method="call"
return u.$1(H.ku(H.P(t),h))}else{h=o.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=m.ah(t)
if(h==null){h=l.ah(t)
if(h==null){h=k.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=j.ah(t)
if(h==null){h=i.ah(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.lp(H.P(t),h))}}return u.$1(new H.iY(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dY()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aV(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dY()
return a},
bR:function(a){var u
if(a instanceof H.ct)return a.b
if(a==null)return new H.eO(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eO(a)},
nH:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.a1(0,a[t],a[s])}return b},
nN:function(a,b,c,d,e,f){H.l(a,"$ikq")
switch(H.a6(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.q("Unsupported number of arguments for wrapped closure"))},
cb:function(a,b){var u
H.a6(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nN)
a.$identity=u
return u},
mz:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Y(d).$ib){u.$reflectionInfo=d
s=H.n5(u).r}else s=d
r=e?Object.create(new H.ip().constructor.prototype):Object.create(new H.cj(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aW
if(typeof p!=="number")return p.p()
$.aW=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lb(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nJ,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.l9:H.kj
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.e("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.lb(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
mw:function(a,b,c,d){var u=H.kj
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lb:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.my(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mw(t,!r,u,b)
if(t===0){r=$.aW
if(typeof r!=="number")return r.p()
$.aW=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ck
if(q==null){q=H.fu("self")
$.ck=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aW
if(typeof r!=="number")return r.p()
$.aW=r+1
o+=r
r="return function("+o+"){return this."
q=$.ck
if(q==null){q=H.fu("self")
$.ck=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
mx:function(a,b,c,d){var u,t
u=H.kj
t=H.l9
switch(b?-1:a){case 0:throw H.e(H.n7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
my:function(a,b){var u,t,s,r,q,p,o,n
u=$.ck
if(u==null){u=H.fu("self")
$.ck=u}t=$.l8
if(t==null){t=H.fu("receiver")
$.l8=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.mx(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.aW
if(typeof t!=="number")return t.p()
$.aW=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.aW
if(typeof t!=="number")return t.p()
$.aW=t+1
return new Function(u+t+"}")()},
kQ:function(a,b,c,d,e,f,g){return H.mz(a,b,H.a6(c),d,!!e,!!f,g)},
kj:function(a){return a.a},
l9:function(a){return a.c},
fu:function(a){var u,t,s,r,q
u=new H.cj("self","target","receiver","name")
t=J.h6(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
P:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aS(a,"String"))},
oE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aS(a,"double"))},
nU:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aS(a,"num"))},
m_:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aS(a,"bool"))},
a6:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aS(a,"int"))},
kY:function(a,b){throw H.e(H.aS(a,H.cg(H.P(b).substring(2))))},
nW:function(a,b){throw H.e(H.mv(a,H.cg(H.P(b).substring(2))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Y(a)[b])return a
H.kY(a,b)},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Y(a)[b]
else u=!0
if(u)return a
H.nW(a,b)},
oG:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.Y(a)[b])return a
H.kY(a,b)},
kV:function(a){if(a==null)return a
if(!!J.Y(a).$ib)return a
throw H.e(H.aS(a,"List<dynamic>"))},
nP:function(a,b){var u
if(a==null)return a
u=J.Y(a)
if(!!u.$ib)return a
if(u[b])return a
H.kY(a,b)},
m0:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a6(u)]
else return a.$S()}return},
fa:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.m0(J.Y(a))
if(u==null)return!1
return H.lP(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.kL)return a
$.kL=!0
try{if(H.fa(a,b))return a
u=H.ke(b)
t=H.aS(a,u)
throw H.e(t)}finally{$.kL=!1}},
cd:function(a,b){if(a!=null&&!H.kP(a,b))H.r(H.aS(a,H.ke(b)))
return a},
aS:function(a,b){return new H.iO("TypeError: "+P.fR(a)+": type '"+H.lV(a)+"' is not a subtype of type '"+b+"'")},
mv:function(a,b){return new H.fv("CastError: "+P.fR(a)+": type '"+H.lV(a)+"' is not a subtype of type '"+b+"'")},
lV:function(a){var u,t
u=J.Y(a)
if(!!u.$icm){t=H.m0(u)
if(t!=null)return H.ke(t)
return"Closure"}return H.c3(a)},
o_:function(a){throw H.e(new P.fD(H.P(a)))},
n7:function(a){return new H.ib(a)},
m2:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bQ:function(a){if(a==null)return
return a.$ti},
oF:function(a,b,c){return H.cf(a["$a"+H.m(c)],H.bQ(b))},
ce:function(a,b,c,d){var u
H.P(c)
H.a6(d)
u=H.cf(a["$a"+H.m(c)],H.bQ(b))
return u==null?null:u[d]},
aw:function(a,b,c){var u
H.P(b)
H.a6(c)
u=H.cf(a["$a"+H.m(b)],H.bQ(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.a6(b)
u=H.bQ(a)
return u==null?null:u[b]},
ke:function(a){return H.bO(a,null)},
bO:function(a,b){var u,t
H.i(b,"$ib",[P.n],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cg(a[0].name)+H.kO(a,1,b)
if(typeof a=="function")return H.cg(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a6(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.m(b[t])}if('func' in a)return H.np(a,b)
if('futureOr' in a)return"FutureOr<"+H.bO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
np:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.n]
H.i(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.f(b,m)
o=C.j.p(o,b[m])
l=t[p]
if(l!=null&&l!==P.I)o+=" extends "+H.bO(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bO(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bO(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bO(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.nG(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.P(u[g])
i=i+h+H.bO(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
kO:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ib",[P.n],"$ab")
if(a==null)return""
u=new P.bK("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bO(p,c)}return"<"+u.i(0)+">"},
cf:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bt:function(a,b,c,d){var u,t
H.P(b)
H.kV(c)
H.P(d)
if(a==null)return!1
u=H.bQ(a)
t=J.Y(a)
if(t[b]==null)return!1
return H.lY(H.cf(t[d],u),null,c,null)},
i:function(a,b,c,d){H.P(b)
H.kV(c)
H.P(d)
if(a==null)return a
if(H.bt(a,b,c,d))return a
throw H.e(H.aS(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cg(b.substring(2))+H.kO(c,0,null),v.mangledGlobalNames)))},
lY:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aL(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aL(a[t],b,c[t],d))return!1
return!0},
oC:function(a,b,c){return a.apply(b,H.cf(J.Y(b)["$a"+H.m(c)],H.bQ(b)))},
m5:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="I"||a.name==="E"||a===-1||a===-2||H.m5(u)}return!1},
kP:function(a,b){var u,t
if(a==null)return b==null||b.name==="I"||b.name==="E"||b===-1||b===-2||H.m5(b)
if(b==null||b===-1||b.name==="I"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kP(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fa(a,b)}u=J.Y(a).constructor
t=H.bQ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aL(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.kP(a,b))throw H.e(H.aS(a,H.ke(b)))
return a},
aL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="I"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="I"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aL(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="E")return!0
if('func' in c)return H.lP(a,b,c,d)
if('func' in a)return c.name==="kq"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aL("type" in a?a.type:null,b,s,d)
else if(H.aL(a,b,s,d))return!0
else{if(!('$i'+"ax" in t.prototype))return!1
r=t.prototype["$a"+"ax"]
q=H.cf(r,u?a.slice(1):null)
return H.aL(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lY(H.cf(m,u),b,p,d)},
lP:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.nT(h,b,g,d)},
nT:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aL(c[r],d,a[r],b))return!1}return!0},
oD:function(a,b,c){Object.defineProperty(a,H.P(b),{value:c,enumerable:false,writable:true,configurable:true})},
nQ:function(a){var u,t,s,r,q,p
u=H.P($.m4.$1(a))
t=$.k7[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kc[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.P($.lX.$2(a,u))
if(u!=null){t=$.k7[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kc[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kd(s)
$.k7[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kc[u]=s
return s}if(q==="-"){p=H.kd(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.m7(a,s)
if(q==="*")throw H.e(P.lF(u))
if(v.leafTags[u]===true){p=H.kd(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.m7(a,s)},
m7:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kW(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kd:function(a){return J.kW(a,!1,null,!!a.$iF)},
nS:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kd(u)
else return J.kW(u,c,null,null)},
nL:function(){if(!0===$.kT)return
$.kT=!0
H.nM()},
nM:function(){var u,t,s,r,q,p,o,n
$.k7=Object.create(null)
$.kc=Object.create(null)
H.nK()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m8.$1(q)
if(p!=null){o=H.nS(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nK:function(){var u,t,s,r,q,p,o
u=C.K()
u=H.ca(C.H,H.ca(C.M,H.ca(C.u,H.ca(C.u,H.ca(C.L,H.ca(C.I,H.ca(C.J(C.v),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.m4=new H.k9(q)
$.lX=new H.ka(p)
$.m8=new H.kb(o)},
ca:function(a,b){return a(b)||b},
lj:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.e(P.ko("Illegal RegExp pattern ("+String(r)+")",a,null))},
nZ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
m9:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i0:function i0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
iM:function iM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hM:function hM(a,b){this.a=a
this.b=b},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a){this.a=a},
ct:function ct(a,b){this.a=a
this.b=b},
kg:function kg(a){this.a=a},
eO:function eO(a){this.a=a
this.b=null},
cm:function cm(){},
iw:function iw(){},
ip:function ip(){},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iO:function iO(a){this.a=a},
fv:function fv(a){this.a=a},
ib:function ib(a){this.a=a},
aG:function aG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h9:function h9(a){this.a=a},
hk:function hk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dD:function dD(a,b){this.a=a
this.$ti=b},
hl:function hl(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
h8:function h8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ex:function ex(a,b){this.a=a
this.b=b},
jf:function jf(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
d8:function(a){return a},
bN:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bP(b,a))},
no:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.nD(a,b,c))
return b},
cB:function cB(){},
dM:function dM(){},
cA:function cA(){},
dN:function dN(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
hK:function hK(){},
dO:function dO(){},
hL:function hL(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
nG:function(a){return J.lh(a?Object.keys(a):[],null)},
nV:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kW:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fc:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.kT==null){H.nL()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.e(P.lF("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.l_()]
if(q!=null)return q
q=H.nQ(a)
if(q!=null)return q
if(typeof a=="function")return C.N
t=Object.getPrototypeOf(a)
if(t==null)return C.x
if(t===Object.prototype)return C.x
if(typeof r=="function"){Object.defineProperty(r,$.l_(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
mI:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.ki(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.aJ(a,0,4294967295,"length",null))
return J.lh(new Array(a),b)},
lh:function(a,b){return J.h6(H.c(a,[b]))},
h6:function(a){H.kV(a)
a.fixed$length=Array
return a},
li:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
mJ:function(a,b){var u,t
for(u=a.length;b<u;){t=C.j.aV(a,b)
if(t!==32&&t!==13&&!J.li(t))break;++b}return b},
mK:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.j.bd(a,u)
if(t!==32&&t!==13&&!J.li(t))break}return b},
Y:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dy.prototype
return J.dx.prototype}if(typeof a=="string")return J.bH.prototype
if(a==null)return J.dz.prototype
if(typeof a=="boolean")return J.h7.prototype
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.I)return a
return J.fc(a)},
nI:function(a){if(typeof a=="number")return J.c1.prototype
if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.I)return a
return J.fc(a)},
k8:function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.I)return a
return J.fc(a)},
kR:function(a){if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.I)return a
return J.fc(a)},
m1:function(a){if(typeof a=="number")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.c6.prototype
return a},
kS:function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.c6.prototype
return a},
fb:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.I)return a
return J.fc(a)},
fe:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nI(a).p(a,b)},
a2:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Y(a).v(a,b)},
l1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.m1(a).b4(a,b)},
l2:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.m1(a).Y(a,b)},
U:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nO(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.k8(a).j(a,b)},
mr:function(a,b,c,d){return J.fb(a).jk(a,b,c,d)},
l3:function(a,b){return J.fb(a).a0(a,b)},
l4:function(a,b){return J.kR(a).F(a,b)},
l5:function(a,b){return J.kR(a).O(a,b)},
bS:function(a){return J.Y(a).gG(a)},
ci:function(a){return J.kR(a).gT(a)},
aU:function(a){return J.k8(a).gk(a)},
l6:function(a,b){return J.kS(a).jW(a,b)},
l7:function(a,b,c){return J.kS(a).bo(a,b,c)},
aB:function(a){return J.Y(a).i(a)},
kh:function(a){return J.kS(a).eM(a)},
a:function a(){},
h7:function h7(){},
dz:function dz(){},
dA:function dA(){},
hT:function hT(){},
c6:function c6(){},
bj:function bj(){},
aM:function aM(a){this.$ti=a},
ks:function ks(a){this.$ti=a},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
c1:function c1(){},
dy:function dy(){},
dx:function dx(){},
bH:function bH(){}},P={
ng:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.nw()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cb(new P.jk(u),1)).observe(t,{childList:true})
return new P.jj(u,t,s)}else if(self.setImmediate!=null)return P.nx()
return P.ny()},
nh:function(a){self.scheduleImmediate(H.cb(new P.jl(H.o(a,{func:1,ret:-1})),0))},
ni:function(a){self.setImmediate(H.cb(new P.jm(H.o(a,{func:1,ret:-1})),0))},
nj:function(a){P.kF(C.n,H.o(a,{func:1,ret:-1}))},
kF:function(a,b){var u
H.o(b,{func:1,ret:-1})
u=C.d.a4(a.a,1000)
return P.nl(u<0?0:u,b)},
lD:function(a,b){var u
H.o(b,{func:1,ret:-1,args:[P.bc]})
u=C.d.a4(a.a,1000)
return P.nm(u<0?0:u,b)},
nl:function(a,b){var u=new P.eV(!0)
u.fA(a,b)
return u},
nm:function(a,b){var u=new P.eV(!1)
u.fB(a,b)
return u},
au:function(a){return new P.ef(new P.eS(new P.ad(0,$.O,[a]),[a]),!1,[a])},
at:function(a,b){H.o(a,{func:1,ret:-1,args:[P.z,,]})
H.l(b,"$ief")
a.$2(0,null)
b.b=!0
return b.a.a},
aj:function(a,b){P.nn(a,H.o(b,{func:1,ret:-1,args:[P.z,,]}))},
as:function(a,b){H.l(b,"$ikn").az(0,a)},
ar:function(a,b){H.l(b,"$ikn").b1(H.ao(a),H.bR(a))},
nn:function(a,b){var u,t,s,r
H.o(b,{func:1,ret:-1,args:[P.z,,]})
u=new P.jY(b)
t=new P.jZ(b)
s=J.Y(a)
if(!!s.$iad)a.ct(u,t,null)
else if(!!s.$iax)a.bZ(u,t,null)
else{r=new P.ad(0,$.O,[null])
H.A(a,null)
r.a=4
r.c=a
r.ct(u,null,null)}},
av:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.O.eG(new P.k4(u),P.E,P.z,null)},
lK:function(a,b){var u,t,s
b.a=1
try{a.bZ(new P.jx(b),new P.jy(b),null)}catch(s){u=H.ao(s)
t=H.bR(s)
P.kZ(new P.jz(b,u,t))}},
jw:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.l(a.c,"$iad")
if(u>=4){t=b.bv()
b.a=a.a
b.c=a.c
P.c7(b,t)}else{t=H.l(b.c,"$ibh")
b.a=2
b.c=a
a.dD(t)}},
c7:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.l(t.c,"$ial")
t=t.b
p=q.a
o=q.b
t.toString
P.k1(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.c7(u.a,b)}t=u.a
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
if(k){H.l(m,"$ial")
t=t.b
p=m.a
o=m.b
t.toString
P.k1(null,null,t,p,o)
return}j=$.O
if(j!=l)$.O=l
else j=null
t=b.c
if(t===8)new P.jE(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jD(s,b,m).$0()}else if((t&2)!==0)new P.jC(u,s,b).$0()
if(j!=null)$.O=j
t=s.b
if(!!J.Y(t).$iax){if(t.a>=4){i=H.l(o.c,"$ibh")
o.c=null
b=o.bw(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.jw(t,o)
return}}h=b.b
i=H.l(h.c,"$ibh")
h.c=null
b=h.bw(i)
t=s.a
p=s.b
if(!t){H.A(p,H.u(h,0))
h.a=4
h.c=p}else{H.l(p,"$ial")
h.a=8
h.c=p}u.a=h
t=h}},
ns:function(a,b){if(H.fa(a,{func:1,args:[P.I,P.a4]}))return b.eG(a,null,P.I,P.a4)
if(H.fa(a,{func:1,args:[P.I]}))return H.o(a,{func:1,ret:null,args:[P.I]})
throw H.e(P.ki(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nr:function(){var u,t
for(;u=$.c8,u!=null;){$.da=null
t=u.b
$.c8=t
if(t==null)$.d9=null
u.a.$0()}},
nv:function(){$.kM=!0
try{P.nr()}finally{$.da=null
$.kM=!1
if($.c8!=null)$.l0().$1(P.lZ())}},
lS:function(a){var u=new P.eg(H.o(a,{func:1,ret:-1}))
if($.c8==null){$.d9=u
$.c8=u
if(!$.kM)$.l0().$1(P.lZ())}else{$.d9.b=u
$.d9=u}},
nu:function(a){var u,t,s
H.o(a,{func:1,ret:-1})
u=$.c8
if(u==null){P.lS(a)
$.da=$.d9
return}t=new P.eg(a)
s=$.da
if(s==null){t.b=u
$.da=t
$.c8=t}else{t.b=s.b
s.b=t
$.da=t
if(t.b==null)$.d9=t}},
kZ:function(a){var u,t
u={func:1,ret:-1}
H.o(a,u)
t=$.O
if(C.k===t){P.c9(null,null,C.k,a)
return}t.toString
P.c9(null,null,t,H.o(t.cA(a),u))},
o8:function(a,b){return new P.jS(H.i(a,"$icK",[b],"$acK"),[b])},
kE:function(a,b){var u,t
u={func:1,ret:-1}
H.o(b,u)
t=$.O
if(t===C.k){t.toString
return P.kF(a,b)}return P.kF(a,H.o(t.cA(b),u))},
ne:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.bc]}
H.o(b,u)
t=$.O
if(t===C.k){t.toString
return P.lD(a,b)}s=t.dR(b,P.bc)
$.O.toString
return P.lD(a,H.o(s,u))},
k1:function(a,b,c,d,e){var u={}
u.a=d
P.nu(new P.k2(u,e))},
lQ:function(a,b,c,d,e){var u,t
H.o(d,{func:1,ret:e})
t=$.O
if(t===c)return d.$0()
$.O=c
u=t
try{t=d.$0()
return t}finally{$.O=u}},
lR:function(a,b,c,d,e,f,g){var u,t
H.o(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.O
if(t===c)return d.$1(e)
$.O=c
u=t
try{t=d.$1(e)
return t}finally{$.O=u}},
nt:function(a,b,c,d,e,f,g,h,i){var u,t
H.o(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.O
if(t===c)return d.$2(e,f)
$.O=c
u=t
try{t=d.$2(e,f)
return t}finally{$.O=u}},
c9:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cA(d):c.jr(d,-1)
P.lS(d)},
jk:function jk(a){this.a=a},
jj:function jj(a,b,c){this.a=a
this.b=b
this.c=c},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
eV:function eV(a){this.a=a
this.b=null
this.c=0},
jV:function jV(a,b){this.a=a
this.b=b},
jU:function jU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ef:function ef(a,b,c){this.a=a
this.b=b
this.$ti=c},
jh:function jh(a,b){this.a=a
this.b=b},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k4:function k4(a){this.a=a},
ei:function ei(){},
ji:function ji(a,b){this.a=a
this.$ti=b},
eS:function eS(a,b){this.a=a
this.$ti=b},
bh:function bh(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ad:function ad(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jt:function jt(a,b){this.a=a
this.b=b},
jB:function jB(a,b){this.a=a
this.b=b},
jx:function jx(a){this.a=a},
jy:function jy(a){this.a=a},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a,b){this.a=a
this.b=b},
jA:function jA(a,b){this.a=a
this.b=b},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jE:function jE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jF:function jF(a){this.a=a},
jD:function jD(a,b,c){this.a=a
this.b=b
this.c=c},
jC:function jC(a,b,c){this.a=a
this.b=b
this.c=c},
eg:function eg(a){this.a=a
this.b=null},
cK:function cK(){},
it:function it(a,b){this.a=a
this.b=b},
iu:function iu(a,b){this.a=a
this.b=b},
cL:function cL(){},
is:function is(){},
jS:function jS(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
bc:function bc(){},
al:function al(a,b){this.a=a
this.b=b},
jX:function jX(){},
k2:function k2(a,b){this.a=a
this.b=b},
jM:function jM(){},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a,b){this.a=a
this.b=b},
jP:function jP(a,b,c){this.a=a
this.b=b
this.c=c},
mM:function(a,b){return new H.aG([a,b])},
mN:function(a){return H.nH(a,new H.aG([null,null]))},
mO:function(a,b,c,d){return new P.jJ([d])},
lN:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lM:function(a,b,c){var u=new P.jK(a,b,[c])
u.c=a.e
return u},
mF:function(a,b,c){var u,t
if(P.kN(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.n])
t=$.de()
C.a.h(t,a)
try{P.nq(a,u)}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}t=P.lB(b,H.nP(u,"$id"),", ")+c
return t.charCodeAt(0)==0?t:t},
kr:function(a,b,c){var u,t,s
if(P.kN(a))return b+"..."+c
u=new P.bK(b)
t=$.de()
C.a.h(t,a)
try{s=u
s.a=P.lB(s.a,a,", ")}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kN:function(a){var u,t
for(u=0;t=$.de(),u<t.length;++u)if(a===t[u])return!0
return!1},
nq:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.i(b,"$ib",[P.n],"$ab")
u=a.gT(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.m(u.gJ(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gJ(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gJ(u);++s
for(;u.A();o=n,n=m){m=u.gJ(u);++s
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
lm:function(a){var u,t
u={}
if(P.kN(a))return"{...}"
t=new P.bK("")
try{C.a.h($.de(),a)
t.a+="{"
u.a=!0
J.l5(a,new P.hq(u,t))
t.a+="}"}finally{u=$.de()
if(0>=u.length)return H.f(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jJ:function jJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d_:function d_(a){this.a=a
this.c=this.b=null},
jK:function jK(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hm:function hm(){},
w:function w(){},
hp:function hp(){},
hq:function hq(a,b){this.a=a
this.b=b},
ae:function ae(){},
jQ:function jQ(){},
ew:function ew(){},
cn:function cn(){},
dn:function dn(){},
fP:function fP(){},
j0:function j0(a){this.a=a},
j1:function j1(){},
jW:function jW(a){this.b=this.a=0
this.c=a},
kU:function(a,b,c){var u=H.n2(a,c)
if(u!=null)return u
throw H.e(P.ko(a,null,null))},
nF:function(a,b){var u=H.n1(a)
if(u!=null)return u
throw H.e(P.ko("Invalid double",a,null))},
mD:function(a){if(a instanceof H.cm)return a.i(0)
return"Instance of '"+H.c3(a)+"'"},
mP:function(a,b,c,d){var u,t
H.A(b,d)
u=J.mI(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a1(u,t,b)
return H.i(u,"$ib",[d],"$ab")},
ll:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=J.ci(a);s.A();)C.a.h(t,H.A(s.gJ(s),c))
if(b)return t
return H.i(J.h6(t),"$ib",u,"$ab")},
kD:function(a,b,c){var u,t
u=P.z
H.i(a,"$id",[u],"$ad")
if(a.constructor===Array){H.i(a,"$iaM",[u],"$aaM")
t=a.length
c=P.kz(b,c,t,null,null,null)
return H.lw(b>0||c<t?C.a.f6(a,b,c):a)}return P.nb(a,b,c)},
nb:function(a,b,c){var u,t,s
H.i(a,"$id",[P.z],"$ad")
u=J.ci(a)
for(t=0;t<b;++t)if(!u.A())throw H.e(P.aJ(b,0,t,null,null))
s=[]
for(;u.A();)s.push(u.gJ(u))
return H.lw(s)},
kA:function(a,b,c){return new H.h8(a,H.lj(a,!1,!0,!1))},
lB:function(a,b,c){var u=J.ci(b)
if(!u.A())return a
if(c.length===0){do a+=H.m(u.gJ(u))
while(u.A())}else{a+=H.m(u.gJ(u))
for(;u.A();)a=a+c+H.m(u.gJ(u))}return a},
lO:function(a,b,c,d){var u,t,s,r,q,p
H.i(a,"$ib",[P.z],"$ab")
if(c===C.q){u=$.mq().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.jD(H.A(b,H.aw(c,"cn",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.n3(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
mA:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dq:function(a){if(a>=10)return""+a
return"0"+a},
le:function(a,b,c,d,e,f){return new P.bi(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fR:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aB(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mD(a)},
mt:function(a){return new P.aV(!1,null,null,a)},
ki:function(a,b,c){return new P.aV(!0,a,b,c)},
i_:function(a,b,c){return new P.c4(null,null,!0,a,b,"Value not in range")},
aJ:function(a,b,c,d,e){return new P.c4(b,c,!0,a,d,"Invalid value")},
kz:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aJ(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.aJ(b,a,c,"end",f))
return b}return c},
W:function(a,b,c,d,e){var u=H.a6(e==null?J.aU(b):e)
return new P.h5(b,u,!0,a,c,"Index out of range")},
aq:function(a){return new P.iZ(a)},
lF:function(a){return new P.iX(a)},
kC:function(a){return new P.cJ(a)},
co:function(a){return new P.fy(a)},
q:function(a){return new P.ep(a)},
ko:function(a,b,c){return new P.h_(a,b,c)},
fd:function(a){H.nV(a)},
a5:function a5(){},
aD:function aD(a,b){this.a=a
this.b=b},
C:function C(){},
bi:function bi(a){this.a=a},
fI:function fI(){},
fJ:function fJ(){},
bC:function bC(){},
cD:function cD(){},
aV:function aV(a,b,c,d){var _=this
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
h5:function h5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iZ:function iZ(a){this.a=a},
iX:function iX(a){this.a=a},
cJ:function cJ(a){this.a=a},
fy:function fy(a){this.a=a},
hP:function hP(){},
dY:function dY(){},
fD:function fD(a){this.a=a},
ep:function ep(a){this.a=a},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
z:function z(){},
d:function d(){},
aF:function aF(){},
b:function b(){},
H:function H(){},
E:function E(){},
a1:function a1(){},
I:function I(){},
dG:function dG(){},
a4:function a4(){},
n:function n(){},
bK:function bK(a){this.a=a},
nC:function(a){var u,t
u=J.Y(a)
if(!!u.$ibD){t=u.ge1(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.f_(a.data,a.height,a.width)},
nB:function(a){if(a instanceof P.f_)return{data:a.a,height:a.b,width:a.c}
return a},
bu:function(a){var u,t,s,r,q
if(a==null)return
u=P.mM(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r){q=H.P(t[r])
u.a1(0,q,a[q])}return u},
nA:function(a,b){var u={}
a.O(0,new P.k5(u))
return u},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
k5:function k5(a){this.a=a},
fW:function fW(a,b){this.a=a
this.b=b},
fX:function fX(){},
fY:function fY(){},
jI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nk:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jL:function jL(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bk:function bk(){},
hj:function hj(){},
bo:function bo(){},
hN:function hN(){},
hW:function hW(){},
iv:function iv(){},
t:function t(){},
br:function br(){},
iL:function iL(){},
eu:function eu(){},
ev:function ev(){},
eF:function eF(){},
eG:function eG(){},
eQ:function eQ(){},
eR:function eR(){},
eY:function eY(){},
eZ:function eZ(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(a){this.a=a},
fn:function fn(){},
bT:function bT(){},
hO:function hO(){},
eh:function eh(){},
di:function di(){},
dv:function dv(){},
dR:function dR(){},
c5:function c5(){},
dT:function dT(){},
dZ:function dZ(){},
e7:function e7(){},
io:function io(){},
eM:function eM(){},
eN:function eN(){}},W={
ms:function(a){var u=document.createElement("a")
return u},
kk:function(a,b){var u=document.createElement("canvas")
return u},
mC:function(a){H.l(a,"$ih")
return"wheel"},
lf:function(a,b,c){return W.mE(a,null,null,b,null,null,null,c).aj(new W.h2(),P.n)},
mE:function(a,b,c,d,e,f,g,h){var u,t,s,r,q
u=W.b0
t=new P.ad(0,$.O,[u])
s=new P.ji(t,[u])
r=new XMLHttpRequest()
C.E.ki(r,"GET",a,!0)
u=W.b7
q={func:1,ret:-1,args:[u]}
W.a0(r,"load",H.o(new W.h3(r,s),q),!1,u)
W.a0(r,"error",H.o(s.gdY(),q),!1,u)
r.send()
return t},
lg:function(a,b,c){var u=document.createElement("img")
u.src=b
return u},
jH:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lL:function(a,b,c,d){var u,t
u=W.jH(W.jH(W.jH(W.jH(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a0:function(a,b,c,d,e){var u=W.lW(new W.js(c),W.p)
u=new W.jr(a,b,u,!1,[e])
u.iT()
return u},
lW:function(a,b){var u
H.o(a,{func:1,ret:-1,args:[b]})
u=$.O
if(u===C.k)return a
return u.dR(a,b)},
v:function v(){},
ff:function ff(){},
fh:function fh(){},
fi:function fi(){},
dg:function dg(){},
dh:function dh(){},
bV:function bV(){},
bW:function bW(){},
bA:function bA(){},
cp:function cp(){},
fz:function fz(){},
R:function R(){},
cq:function cq(){},
fA:function fA(){},
aX:function aX(){},
aY:function aY(){},
fB:function fB(){},
fC:function fC(){},
fE:function fE(){},
cr:function cr(){},
cs:function cs(){},
fF:function fF(){},
dr:function dr(){},
ds:function ds(){},
fG:function fG(){},
fH:function fH(){},
jo:function jo(a,b){this.a=a
this.b=b},
a8:function a8(){},
p:function p(){},
h:function h(){},
aZ:function aZ(){},
fU:function fU(){},
fV:function fV(){},
fZ:function fZ(){},
b_:function b_(){},
h1:function h1(){},
c0:function c0(){},
dw:function dw(){},
b0:function b0(){},
h2:function h2(){},
h3:function h3(a,b){this.a=a
this.b=b},
cv:function cv(){},
bD:function bD(){},
cw:function cw(){},
b1:function b1(){},
hn:function hn(){},
cz:function cz(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(a){this.a=a},
hC:function hC(){},
hD:function hD(a){this.a=a},
b4:function b4(){},
hE:function hE(){},
ab:function ab(){},
jn:function jn(a){this.a=a},
K:function K(){},
cC:function cC(){},
b6:function b6(){},
hU:function hU(){},
b7:function b7(){},
i9:function i9(){},
ia:function ia(a){this.a=a},
ic:function ic(){},
b8:function b8(){},
il:function il(){},
b9:function b9(){},
im:function im(){},
ba:function ba(){},
iq:function iq(){},
ir:function ir(a){this.a=a},
aP:function aP(){},
bb:function bb(){},
aQ:function aQ(){},
ix:function ix(){},
iy:function iy(){},
iG:function iG(){},
bd:function bd(){},
aR:function aR(){},
iJ:function iJ(){},
iK:function iK(){},
bM:function bM(){},
j_:function j_(){},
jb:function jb(){},
jc:function jc(){},
bg:function bg(){},
cZ:function cZ(){},
jp:function jp(){},
ek:function ek(){},
jG:function jG(){},
eC:function eC(){},
jR:function jR(){},
jT:function jT(){},
jq:function jq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kK:function kK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jr:function jr(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
js:function js(a){this.a=a},
B:function B(){},
du:function du(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ej:function ej(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eD:function eD(){},
eE:function eE(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
d4:function d4(){},
d5:function d5(){},
eK:function eK(){},
eL:function eL(){},
eP:function eP(){},
eT:function eT(){},
eU:function eU(){},
d6:function d6(){},
d7:function d7(){},
eW:function eW(){},
eX:function eX(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){}},O={
kl:function(a){var u=new O.V([a])
u.bp(a)
return u},
V:function V(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cy:function cy(){this.b=this.a=null},
m3:function(a){var u=C.j.k0(a,"/")
if(u<=0)return a
return C.j.bo(a,0,u)},
lU:function(a){var u,t,s
u=P.kA("([^\\s]+)",!0,!1)
$.lT=u
t=u.jS(a)
if(t==null)return H.c([],[P.n])
u=t.b
if(1>=u.length)return H.f(u,1)
s=u[1]
return H.c([s,C.j.eM(C.j.c2(a,s.length))],[P.n])},
k3:function(a){var u,t,s
u=H.c([],[P.n])
t=P.kA("([^\\s]+)",!0,!1)
$.lT=t
t=new H.jf(t,a,0)
for(;t.A();){s=t.d.b
if(1>=s.length)return H.f(s,1)
C.a.h(u,s[1])}return u},
bs:function(a){var u,t,s,r
u=O.k3(a)
t=H.c([],[P.C])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.f(u,r)
C.a.h(t,P.nF(u[r],null))}return t},
dL:function(a,b,c){return O.mS(a,b,!1)},
mS:function(a,b,c){var u=0,t=P.au([P.H,P.n,O.ay]),s,r=2,q,p=[],o,n,m,l,k,j,i,h
var $async$dL=P.av(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
o=O.m3(a)
k=new O.k_(b)
k.scg(new H.aG([P.n,O.ay]))
k.c=null
n=k
u=7
return P.aj(W.lf(a,null,null),$async$dL)
case 7:m=e
u=8
return P.aj(n.aq(m,o,!1),$async$dL)
case 8:j=n.b
s=j
u=1
break
r=2
u=6
break
case 4:r=3
h=q
l=H.ao(h)
P.fd(a+": "+H.m(l))
j=P.q(a+": "+H.m(l))
throw H.e(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.as(s,t)
case 2:return P.ar(q,t)}})
return P.at($async$dL,t)},
aI:function(a,b,c,d,e){return O.mT(a,b,c,d,!1)},
mT:function(a,b,c,d,e){var u=0,t=P.au(E.S),s,r=2,q,p=[],o,n,m,l,k,j,i,h,g
var $async$aI=P.av(function(f,a0){if(f===1){q=a0
u=r}while(true)switch(u){case 0:r=4
o=O.m3(a)
k=new O.k0(b)
k.sim(H.c([],[O.db]))
k.siJ(H.c([],[V.Z]))
k.shq(H.c([],[V.M]))
k.scg(new H.aG([P.n,O.ay]))
k.f=d
k.r=""
j=O.aH()
i=j.r
i.st(0,new V.x(0.35,0.35,0.35))
i=j.x
i.st(0,new V.x(0.65,0.65,0.65))
k.x=j
k.y=null
k.z=null
k.Q=E.aE(null,!0,null,"",null,null)
k.bA()
n=k
u=7
return P.aj(W.lf(a,null,null),$async$aI)
case 7:m=a0
u=8
return P.aj(n.aq(m,o,!1),$async$aI)
case 8:j=n.gjQ()
s=j
u=1
break
r=2
u=6
break
case 4:r=3
g=q
l=H.ao(g)
P.fd(a+": "+H.m(l))
j=P.q(a+": "+H.m(l))
throw H.e(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.as(s,t)
case 2:return P.ar(q,t)}})
return P.at($async$aI,t)},
k_:function k_(a){this.a=a
this.c=this.b=null},
db:function db(a){this.a=a
this.b=null},
k0:function k0(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
aH:function(){var u,t,s
u=new O.ay()
u.sfK(O.kl(V.af))
u.e.b5(u.ghv(),u.ghx())
t=new O.b3(u,"emission")
t.c=C.c
t.f=new V.x(0,0,0)
u.f=t
t=new O.b3(u,"ambient")
t.c=C.c
t.f=new V.x(0,0,0)
u.r=t
t=new O.b3(u,"diffuse")
t.c=C.c
t.f=new V.x(0,0,0)
u.x=t
t=new O.b3(u,"invDiffuse")
t.c=C.c
t.f=new V.x(0,0,0)
u.y=t
t=new O.hx(u,"specular")
t.c=C.c
t.f=new V.x(0,0,0)
t.ch=100
u.z=t
t=new O.hu(u,"bump")
t.c=C.c
u.Q=t
u.ch=null
t=new O.b3(u,"reflect")
t.c=C.c
t.f=new V.x(0,0,0)
u.cx=t
t=new O.hw(u,"refract")
t.c=C.c
t.f=new V.x(0,0,0)
t.ch=1
u.cy=t
t=new O.ht(u,"alpha")
t.c=C.c
t.f=1
u.db=t
t=new D.dC()
t.bp(D.a3)
t.sfs(H.c([],[D.bY]))
t.sft(H.c([],[D.dQ]))
t.sfu(H.c([],[D.dX]))
t.sfv(H.c([],[D.e0]))
t.sfw(H.c([],[D.e1]))
t.sfz(H.c([],[D.e2]))
t.Q=null
t.ch=null
t.d2(t.ght(),t.gi2(),t.gi6())
u.dx=t
s=t.Q
if(s==null){s=D.Q()
t.Q=s
t=s}else t=s
t.h(0,u.giw())
t=u.dx
s=t.ch
if(s==null){s=D.Q()
t.ch=s
t=s}else t=s
t.h(0,u.gat())
u.dy=null
return u},
ay:function ay(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ht:function ht(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cx:function cx(){},
hu:function hu(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b3:function b3(a,b){var _=this
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
dV:function dV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bL:function bL(){}},E={
aE:function(a,b,c,d,e,f){var u=new E.S()
u.ad(a,!0,c,d,e,f)
return u},
n6:function(a,b){var u=new E.i1(a,b)
u.fk(a,b)
return u},
nc:function(a,b,c,d,e){var u,t,s,r
u=J.Y(a)
if(!!u.$ibV)return E.lC(a,!0,!0,!0,!1)
t=W.kk(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdV(a).h(0,t)
r=E.lC(t,!0,!0,!0,!1)
r.a=a
return r},
lC:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.e3()
t=H.l(C.m.d0(a,"webgl2",P.mN(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic5")
if(t==null)H.r(P.q("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.n6(t,a)
s=new T.iA(t)
s.b=H.a6((t&&C.b).d1(t,3379))
s.c=H.a6(C.b.d1(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ea(a)
r=new X.hb()
r.c=new X.aN(!1,!1,!1)
r.sio(P.mO(null,null,null,P.z))
s.b=r
r=new X.hF(s)
r.f=0
r.r=V.bq()
r.x=V.bq()
r.Q=1
r.ch=1
s.c=r
r=new X.ho(s)
r.r=0
r.x=V.bq()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iI(s)
r.e=0
r.f=V.bq()
r.r=V.bq()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sfY(H.c([],[[P.cL,P.I]]))
r=s.z
q=document
p=W.ab
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a0(q,"contextmenu",H.o(s.ghF(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a0(a,"focus",H.o(s.ghL(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a0(a,"blur",H.o(s.ghz(),m),!1,n))
r=s.z
l=W.b1
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a0(q,"keyup",H.o(s.ghP(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a0(q,"keydown",H.o(s.ghN(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a0(a,"mousedown",H.o(s.ghT(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a0(a,"mouseup",H.o(s.ghX(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a0(a,"mousemove",H.o(s.ghV(),o),!1,p))
l=s.z
k=W.bg;(l&&C.a).h(l,W.a0(a,H.P(W.mC(a)),H.o(s.ghZ(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a0(q,"mousemove",H.o(s.ghH(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a0(q,"mouseup",H.o(s.ghJ(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a0(q,"pointerlockchange",H.o(s.gi0(),m),!1,n))
n=s.z
m=W.aR
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a0(a,"touchstart",H.o(s.gii(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a0(a,"touchend",H.o(s.gic(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a0(a,"touchmove",H.o(s.gig(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.aD(Date.now(),!1)
u.cy=0
u.dF()
return u},
fo:function fo(){},
S:function S(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i1:function i1(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
e3:function e3(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iD:function iD(a){this.a=a}},Z={
kJ:function(a,b,c){var u
H.i(c,"$ib",[P.z],"$ab")
u=a.createBuffer()
C.b.ay(a,b,u)
C.b.dT(a,b,new Int16Array(H.d8(c)),35044)
C.b.ay(a,b,null)
return new Z.ed(b,u)},
aK:function(a){return new Z.bf(a)},
ed:function ed(a,b){this.a=a
this.b=b},
dj:function dj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ee:function ee(a){this.a=a},
cl:function cl(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a){this.a=a}},D={
Q:function(){var u=new D.bZ()
u.sae(null)
u.sba(null)
u.c=null
u.d=0
return u},
fw:function fw(){},
bZ:function bZ(){var _=this
_.d=_.c=_.b=_.a=null},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
y:function y(a){this.a=a
this.b=null},
bF:function bF(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bG:function bG(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
G:function G(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
ld:function(a,b){var u=new D.bY()
u.c=new V.x(1,1,1)
u.a=V.nf()
u.st(0,a)
return u},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=null},
a3:function a3(){},
dC:function dC(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dQ:function dQ(){},
dX:function dX(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){}},X={dk:function dk(a,b){this.a=a
this.b=b},dB:function dB(a,b){this.a=a
this.b=b},hb:function hb(){var _=this
_.d=_.c=_.b=_.a=null},dF:function dF(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},ho:function ho(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aN:function aN(a,b,c){this.a=a
this.b=b
this.c=c},bJ:function bJ(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hF:function hF(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hV:function hV(){},e5:function e5(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iI:function iI(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ea:function ea(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kp:function(a,b,c,d,e,f,g){var u,t
u=new X.h0()
t=new V.aC(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.lz
if(t==null){t=V.ly(0,0,1,1)
$.lz=t}u.r=t
return u},
ls:function(a,b,c,d,e){var u,t,s
u=new X.dP()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gq().h(0,u.gfC())
s=new D.G("mover",t,u.b,u,[U.am])
s.b=!0
u.au(s)}s=u.c
if(!(Math.abs(s-b)<$.N().a)){u.c=b
s=new D.G("fov",s,b,u,[P.C])
s.b=!0
u.au(s)}s=u.d
if(!(Math.abs(s-d)<$.N().a)){u.d=d
s=new D.G("near",s,d,u,[P.C])
s.b=!0
u.au(s)}s=u.e
if(!(Math.abs(s-a)<$.N().a)){u.e=a
s=new D.G("far",s,a,u,[P.C])
s.b=!0
u.au(s)}return u},
bU:function bU(){},
h0:function h0(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(){this.b=this.a=null},
dP:function dP(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cM:function cM(){}},V={
km:function(a){var u,t,s
H.i(a,"$ib",[P.C],"$ab")
u=a.length
if(0>=u)return H.f(a,0)
t=a[0]
if(1>=u)return H.f(a,1)
s=a[1]
if(2>=u)return H.f(a,2)
u=a[2]
if(typeof t!=="number")return t.Y()
if(t<0)t=0
else if(t>1)t=1
if(typeof s!=="number")return s.Y()
if(s<0)s=0
else if(s>1)s=1
if(typeof u!=="number")return u.Y()
if(u<0)u=0
else if(u>1)u=1
return new V.x(t,s,u)},
o0:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.f1(a-b,u)
return(a<0?a+u:a)+b},
T:function(a,b,c){if(a==null)return C.j.ai("null",c)
return C.j.ai(C.i.eL(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
cc:function(a,b,c){var u,t,s,r,q,p
H.i(a,"$ib",[P.C],"$ab")
u=H.c([],[P.n])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=V.T(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.a1(u,p,C.j.ai(u[p],s))}return u},
kX:function(a,b){return C.i.kE(Math.pow(b,C.G.cN(Math.log(H.nz(a))/Math.log(b))))},
bI:function(){var u=$.lo
if(u==null){u=V.bm(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.lo=u}return u},
bm:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.af(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
dK:function(a,b,c){return V.bm(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kx:function(a,b,c,d){return V.bm(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
ln:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.bm(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
kw:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.bm(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
kv:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.w(0,Math.sqrt(c.D(c)))
t=b.be(u)
s=t.w(0,Math.sqrt(t.D(t)))
r=u.be(s)
q=new V.M(a.a,a.b,a.c)
p=s.M(0).D(q)
o=r.M(0).D(q)
n=u.M(0).D(q)
return V.bm(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bq:function(){var u=$.lu
if(u==null){u=new V.Z(0,0)
$.lu=u}return u},
ky:function(){var u=$.cF
if(u==null){u=new V.aa(0,0,0)
$.cF=u}return u},
ly:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dS(a,b,c,d)},
ec:function(){var u=$.lJ
if(u==null){u=new V.M(0,0,0)
$.lJ=u}return u},
kH:function(){var u=$.lI
if(u==null){u=new V.M(0,1,0)
$.lI=u}return u},
nf:function(){var u=$.j2
if(u==null){u=new V.M(0,0,1)
$.j2=u}return u},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fQ:function fQ(a){this.a=a},
dJ:function dJ(a,b,c,d,e,f,g,h,i){var _=this
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
Z:function Z(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dS:function dS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function(a){var u=new V.id()
u.fm(a)
return u},
fg:function fg(){},
bl:function bl(){},
dH:function dH(){},
bn:function bn(){this.a=null},
id:function id(){this.a=null},
cI:function cI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a,b){this.a=a
this.b=b
this.c=null},
iH:function iH(){this.c=this.b=this.a=null},
cR:function cR(a){this.b=a
this.a=this.c=null},
nX:function(a){P.ne(C.C,new V.kf(a))},
n8:function(a,b){var u=new V.ii()
u.fn(a,!0)
return u},
kf:function kf(a){this.a=a},
ii:function ii(){this.b=this.a=null},
ik:function ik(a){this.a=a},
ij:function ij(a){this.a=a}},U={
lc:function(){var u=new U.fx()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
bB:function(a){var u=new U.dm()
u.sR(0,a)
return u},
fx:function fx(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dm:function dm(){this.b=this.a=null},
cu:function cu(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
am:function am(){},
eb:function eb(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dl:function dl(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},dp:function dp(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},dt:function dt(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},az:function az(){}},A={
mQ:function(a,b){var u,t
u=a.am
t=new A.dI(b,u)
t.d8(b,u)
t.fg(a,b)
return t},
kG:function(a,b,c,d,e){var u=new A.iP(a,b,c,e)
u.f=d
u.siX(P.mP(d,0,!1,P.z))
return u},
df:function df(a,b,c){this.a=a
this.b=b
this.c=c},
fj:function fj(a){this.a=a},
dI:function dI(a,b){var _=this
_.bG=_.e6=_.bF=_.am=_.aA=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.em=_.cH=_.el=_.bT=_.ek=_.ej=_.bS=_.bR=_.ei=_.eh=_.bQ=_.bP=_.bO=_.eg=_.ef=_.bN=_.ee=_.ed=_.bM=_.ec=_.eb=_.bL=_.bK=_.ea=_.e9=_.bJ=_.bI=_.e8=_.e7=_.bH=null
_.cM=_.eq=_.cL=_.ep=_.cK=_.eo=_.cJ=_.en=_.cI=null
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
_.aA=b3
_.am=b4
_.bF=b5},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cU:function cU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cX:function cX(a,b,c,d,e,f,g,h,i,j){var _=this
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
cV:function cV(a,b,c,d,e,f,g,h,i,j){var _=this
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
cY:function cY(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cH:function cH(){},
bX:function bX(a,b){this.a=a
this.b=b},
dW:function dW(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e6:function e6(){},
iV:function iV(a){this.a=a},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iP:function iP(a,b,c,d){var _=this
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
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iT:function iT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
nE:function(a,b,c,d,e,f){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
e=new F.k6()
if(f<3)return
u=F.kB()
t=-6.283185307179586/f
s=H.c([],[F.ai])
r=u.a
q=new V.M(0,0,1)
q=q.w(0,Math.sqrt(q.D(q)))
C.a.h(s,r.jo(new V.aO(a,-1,-1,-1),new V.aC(1,1,1,1),new V.aa(0,0,d),new V.M(0,0,1),new V.Z(0.5,0.5),q))
for(p=0;p<=f;++p){o=t*p
n=Math.sin(o)
m=Math.cos(o)
l=e.$1(p/f)
r=u.a
if(typeof l!=="number")return H.k(l)
q=new V.M(n,m,1).w(0,Math.sqrt(n*n+m*m+1))
if(n<0)k=0
else k=n>1?1:n
j=m<0
if(j)i=0
else i=m>1?1:m
if(j)j=0
else j=m>1?1:m
r.toString
h=F.kI(new V.aO(a,-1,-1,-1),null,new V.aC(k,i,j,1),new V.aa(n*l,m*l,d),new V.M(0,0,1),new V.Z(n*0.5+0.5,m*0.5+0.5),q,null,0)
r.h(0,h)
C.a.h(s,h)}u.d.cu(s)
return u},
mL:function(a,b){var u,t
u=new F.b2()
t=a.a
if(t==null)H.r(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.r(P.q("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a6()
return u},
kB:function(){var u,t
u=new F.dU()
t=new F.j3(u)
t.b=!1
t.siY(H.c([],[F.ai]))
u.a=t
t=new F.ih(u)
t.sck(H.c([],[F.bp]))
u.b=t
t=new F.ig(u)
t.shb(H.c([],[F.b2]))
u.c=t
t=new F.ie(u)
t.sh_(H.c([],[F.a9]))
u.d=t
u.e=null
return u},
kI:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ai()
t=new F.j8(u)
t.sck(H.c([],[F.bp]))
u.b=t
t=new F.j7(u)
s=[F.b2]
t.shc(H.c([],s))
t.shd(H.c([],s))
u.c=t
t=new F.j4(u)
s=[F.a9]
t.sh0(H.c([],s))
t.sh1(H.c([],s))
t.sh2(H.c([],s))
u.d=t
h=$.mn()
u.e=0
t=$.aT()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bx().a)!==0?e:null
u.x=(s&$.bw().a)!==0?b:null
u.y=(s&$.by().a)!==0?f:null
u.z=(s&$.bz().a)!==0?g:null
u.Q=(s&$.mo().a)!==0?c:null
u.ch=(s&$.ch().a)!==0?i:0
u.cx=(s&$.bv().a)!==0?a:null
return u},
k6:function k6(){},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b2:function b2(){this.b=this.a=null},
bp:function bp(){this.a=null},
dU:function dU(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a){this.a=a
this.b=null},
ig:function ig(a){this.a=a
this.b=null},
ih:function ih(a){this.a=a
this.b=null},
ai:function ai(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ja:function ja(a){this.a=a},
j9:function j9(a){this.a=a},
j3:function j3(a){this.a=a
this.c=this.b=null},
j4:function j4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
j5:function j5(a,b){this.a=a
this.b=b},
j6:function j6(a,b){this.a=a
this.b=b},
j7:function j7(a){this.a=a
this.c=this.b=null},
j8:function j8(a){this.a=a
this.b=null}},T={cN:function cN(){},e_:function e_(){},iz:function iz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cO:function cO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iA:function iA(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},iC:function iC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},iB:function iB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},L={
fq:function(a,b,c,d,e,f,g){var u=new L.fp(d,e,f,g,b,c)
u.ad(null,!0,null,"",null,null)
u.aT(b,c,d,e,f,g)
u.fb(a,b,c,d,e,f,g)
return u},
mu:function(a){var u=new L.ft()
u.ad(null,!0,null,"",null,null)
u.fc(a)
return u},
fL:function(a,b,c,d,e,f){var u=new L.fK(b)
u.ad(null,!0,null,"",null,null)
u.fd(a,b,c,d,e,f)
return u},
lk:function(a,b,c,d,e,f,g){var u=new L.hc(d,e,f,g,b,c)
u.ad(null,!0,null,"",null,null)
u.aT(b,c,d,e,f,g)
u.fe(a,b,c,d,e,f,g)
return u},
hg:function(a,b,c,d,e,f,g){var u=new L.hf(d,e,f,g,b,c)
u.ad(null,!0,null,"",null,null)
u.aT(b,c,d,e,f,g)
u.ff(a,b,c,d,e,f,g)
return u},
m6:function(){var u,t,s
u=V.n8("3Dart Chess",!0)
t=[P.n]
u.b_(H.c(["This example is in development and may still have a few issues and glitches."],t))
s=W.kk(null,null)
s.className="pageLargeCanvas"
s.id="targetCanvas"
C.l.a0(u.a,s)
u.dN(1,"About")
u.b_(H.c(["Just started (WIP). Currently you can rotate the camera but game piece selection ","and movement have not been implemented yet. Click and drag with mouse to see the board from ","different angles."],t))
u.b_(H.c(["3Dart Chess is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create simple browser driven video games. ","This example has no server backing it so currently there is no networked two player mode. ","It would take very little to turn this into a simple online game."],t))
u.b_(H.c(["\xab[Back to Examples List|../../]"],t))
u.dN(1,"Help wanted")
u.b_(H.c(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want ","to learn more about it, check out the ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/chess]."],t))
u.b_(H.c(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],t))
P.kE(C.n,L.nR())},
nY:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
u=C.D.eW(document,"targetCanvas")
if(u==null)H.r(P.q("Failed to find an element with the identifier, targetCanvas."))
t=E.nc(u,!0,!0,!0,!1)
s=t.r
r=new U.eb()
q=U.lc()
q.sd_(0,!0)
q.scS(6.283185307179586)
q.scT(0)
q.sao(0,0)
q.sew(100)
q.sX(0)
q.se0(0.5)
r.b=q
p=r.gbs()
q.gq().h(0,p)
q=U.lc()
q.sd_(0,!0)
q.scS(6.283185307179586)
q.scT(0)
q.sao(0,0)
q.sew(100)
q.sX(0)
q.se0(0.5)
r.c=q
q.gq().h(0,p)
r.d=null
r.e=!1
r.f=!1
r.r=!1
r.x=2.5
r.y=2.5
r.z=2
r.Q=4
r.cx=!1
r.ch=!1
r.cy=0
r.db=0
r.dx=null
r.dy=0
r.fr=null
r.fx=null
o=new X.aN(!1,!1,!1)
n=r.d
r.d=o
q=new D.G("modifiers",n,o,r,[X.aN])
q.b=!0
r.U(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.G("invertX",q,!1,r,[P.a5])
q.b=!0
r.U(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.G("invertY",q,!1,r,[P.a5])
q.b=!0
r.U(q)}r.jq(s)
r.b.scT(-1.5707963267948966)
r.b.scS(0)
r.b.sd_(0,!1)
s=U.am
r=H.c([r,U.bB(V.kx(1.75,1.75,1.75,1)),U.bB(V.dK(0,0,15))],[s])
q=new U.cu()
q.bp(s)
q.b5(q.ghr(),q.gi4())
q.aZ(0,r)
q.e=null
q.f=V.bI()
q.r=0
m=X.ls(2000,1.0471975511965976,q,0.1,null)
l=X.kp(!0,!0,!1,null,2000,null,0)
if(l.b){l.b=!1
s=new D.G("clearColor",!0,!1,l,[P.a5])
s.b=!0
l.au(s)}k=L.mu(t)
s=k.id.a
j=new M.dp()
j.sbc(null)
j.sbj(0,null)
j.sa3(null)
r=E.aE(null,!0,null,"",null,null)
i=F.kB()
q=i.a
p=new V.M(-1,-1,1)
p=p.w(0,Math.sqrt(p.D(p)))
h=q.bD(new V.aO(1,2,4,6),new V.aC(1,0,0,1),new V.aa(-1,-1,0),new V.Z(0,1),p,null)
q=i.a
p=new V.M(1,-1,1)
p=p.w(0,Math.sqrt(p.D(p)))
g=q.bD(new V.aO(0,3,4,6),new V.aC(0,0,1,1),new V.aa(1,-1,0),new V.Z(1,1),p,null)
q=i.a
p=new V.M(1,1,1)
p=p.w(0,Math.sqrt(p.D(p)))
f=q.bD(new V.aO(0,2,5,6),new V.aC(0,1,0,1),new V.aa(1,1,0),new V.Z(1,0),p,null)
q=i.a
p=V.bq()
e=new V.M(-1,1,1)
e=e.w(0,Math.sqrt(e.D(e)))
d=q.bD(new V.aO(0,2,4,7),new V.aC(1,1,0,1),new V.aa(-1,1,0),p,e,null)
i.d.cu(H.c([h,g,f,d],[F.ai]))
i.b0()
r.sac(0,i)
j.d=r
j.e=null
r=new O.dV()
r.b=1.0471975511965976
r.d=new V.x(1,1,1)
if(null!=s){n=r.c
r.c=s
s.gq().h(0,r.gat())
s=new D.G("boxTexture",n,r.c,r,[T.cO])
s.b=!0
r.K(s)}j.sa3(r)
j.sbj(0,l)
j.sbc(m)
c=new M.dt()
c.sfO(0,O.kl(E.S))
c.d.b5(c.ghB(),c.ghD())
c.e=null
c.f=null
c.r=null
c.x=null
b=X.kp(!0,!0,!1,null,2000,null,0)
c.sbc(null)
c.sbj(0,b)
c.sbj(0,l)
c.sbc(m)
c.d.h(0,k)
s=M.az
r=H.c([j,c],[s])
q=new M.dl()
q.bp(s)
q.e=!1
q.f=null
q.b5(q.gi8(),q.gia())
q.aZ(0,r)
s=t.d
if(s!==q){if(s!=null)s.gq().P(0,t.gda())
t.d=q
q.gq().h(0,t.gda())
t.dc()}V.nX(t)},
mR:function(a){var u=new L.hy()
u.fh(a)
return u},
lr:function(a,b,c,d,e,f,g){var u=new L.hQ(d,e,f,g,b,c)
u.ad(null,!0,null,"",null,null)
u.aT(b,c,d,e,f,g)
u.fi(a,b,c,d,e,f,g)
return u},
lx:function(a,b,c,d,e,f,g){var u=new L.hX(d,e,f,g,b,c)
u.ad(null,!0,null,"",null,null)
u.aT(b,c,d,e,f,g)
u.fj(a,b,c,d,e,f,g)
return u},
i6:function(a,b,c,d,e,f,g){var u=new L.i5(d,e,f,g,b,c)
u.ad(null,!0,null,"",null,null)
u.aT(b,c,d,e,f,g)
u.fl(a,b,c,d,e,f,g)
return u},
nd:function(a,b,c,d,e){var u=new L.cP(d,e,b,c)
u.ad(null,!0,null,"",null,null)
u.fo(a,b,c,d,e)
return u},
fp:function fp(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=null},
fs:function fs(){},
ft:function ft(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.id=_.go=_.fy=null},
fK:function fK(a){var _=this
_.fy=a
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fN:function fN(){},
hc:function hc(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=null},
he:function he(){},
hf:function hf(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=null},
hi:function hi(){},
hy:function hy(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hQ:function hQ(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=null},
hS:function hS(){},
cE:function cE(){},
hX:function hX(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=null},
hZ:function hZ(){},
i5:function i5(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=null},
i8:function i8(){},
cP:function cP(a,b,c,d){var _=this
_.fy=a
_.go=b
_.id=null
_.k1=c
_.k2=d
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.k3=null},
iF:function iF(){}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,L]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kt.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gG:function(a){return H.cG(a)},
i:function(a){return"Instance of '"+H.c3(a)+"'"}}
J.h7.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ia5:1}
J.dz.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0},
$iE:1}
J.dA.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hT.prototype={}
J.c6.prototype={}
J.bj.prototype={
i:function(a){var u=a[$.mc()]
if(u==null)return this.f8(a)
return"JavaScript function for "+H.m(J.aB(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikq:1}
J.aM.prototype={
h:function(a,b){H.A(b,H.u(a,0))
if(!!a.fixed$length)H.r(P.aq("add"))
a.push(b)},
P:function(a,b){var u
if(!!a.fixed$length)H.r(P.aq("remove"))
for(u=0;u<a.length;++u)if(J.a2(a[u],b)){a.splice(u,1)
return!0}return!1},
aZ:function(a,b){var u,t
H.i(b,"$id",[H.u(a,0)],"$ad")
if(!!a.fixed$length)H.r(P.aq("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.D)(b),++t)a.push(b[t])},
O:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.co(a))}},
C:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.a1(u,t,H.m(a[t]))
return u.join(b)},
k_:function(a){return this.C(a,"")},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
f6:function(a,b,c){var u=a.length
if(b>u)throw H.e(P.aJ(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.aJ(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
gcQ:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.mG())},
f3:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.i(d,"$id",[u],"$ad")
if(!!a.immutable$list)H.r(P.aq("setRange"))
P.kz(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.i(d,"$ib",[u],"$ab")
u=J.k8(d)
if(e+t>u.gk(d))throw H.e(H.mH())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bn:function(a,b,c,d){return this.f3(a,b,c,d,0)},
aN:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a2(a[u],b))return!0
return!1},
i:function(a){return P.kr(a,"[","]")},
gT:function(a){return new J.ak(a,a.length,0,[H.u(a,0)])},
gG:function(a){return H.cG(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.aq("set length"))
if(b<0)throw H.e(P.aJ(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.bP(a,b))
return a[b]},
a1:function(a,b,c){H.A(c,H.u(a,0))
if(!!a.immutable$list)H.r(P.aq("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bP(a,b))
a[b]=c},
p:function(a,b){var u,t
u=[H.u(a,0)]
H.i(b,"$ib",u,"$ab")
t=C.d.p(a.length,b.gk(b))
u=H.c([],u)
this.sk(u,t)
this.bn(u,0,a.length,a)
this.bn(u,a.length,t,b)
return u},
$id:1,
$ib:1}
J.ks.prototype={}
J.ak.prototype={
gJ:function(a){return this.d},
A:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.e(H.D(u))
s=this.c
if(s>=t){this.sdq(null)
return!1}this.sdq(u[s]);++this.c
return!0},
sdq:function(a){this.d=H.A(a,H.u(this,0))},
$iaF:1}
J.c1.prototype={
cE:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.d.gbU(b)
if(this.gbU(a)===u)return 0
if(this.gbU(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbU:function(a){return a===0?1/a<0:a<0},
kE:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.aq(""+a+".toInt()"))},
cN:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.aq(""+a+".floor()"))},
ar:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.aq(""+a+".round()"))},
jw:function(a,b,c){if(C.d.cE(b,c)>0)throw H.e(H.aA(b))
if(this.cE(a,b)<0)return b
if(this.cE(a,c)>0)return c
return a},
eL:function(a,b){var u
if(b>20)throw H.e(P.aJ(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbU(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
p:function(a,b){if(typeof b!=="number")throw H.e(H.aA(b))
return a+b},
f1:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fa:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dK(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.dK(a,b)},
dK:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.aq("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
bz:function(a,b){var u
if(a>0)u=this.iD(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iD:function(a,b){return b>31?0:a>>>b},
Y:function(a,b){if(typeof b!=="number")throw H.e(H.aA(b))
return a<b},
b4:function(a,b){if(typeof b!=="number")throw H.e(H.aA(b))
return a>=b},
$iC:1,
$ia1:1}
J.dy.prototype={$iz:1}
J.dx.prototype={}
J.bH.prototype={
bd:function(a,b){if(b<0)throw H.e(H.bP(a,b))
if(b>=a.length)H.r(H.bP(a,b))
return a.charCodeAt(b)},
aV:function(a,b){if(b>=a.length)throw H.e(H.bP(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.e(P.ki(b,null,null))
return a+b},
bo:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.i_(b,null,null))
if(b>c)throw H.e(P.i_(b,null,null))
if(c>a.length)throw H.e(P.i_(c,null,null))
return a.substring(b,c)},
c2:function(a,b){return this.bo(a,b,null)},
eM:function(a){var u,t,s,r,q
u=a.trim()
t=u.length
if(t===0)return u
if(this.aV(u,0)===133){s=J.mJ(u,1)
if(s===t)return""}else s=0
r=t-1
q=this.bd(u,r)===133?J.mK(u,r):t
if(s===0&&q===t)return u
return u.substring(s,q)},
l:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kj:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.l(c,u)+a},
ai:function(a,b){return this.kj(a,b," ")},
jX:function(a,b,c){var u
if(c>a.length)throw H.e(P.aJ(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
jW:function(a,b){return this.jX(a,b,0)},
k5:function(a,b,c){var u
c=a.length
u=b.length
if(c+u>c)c-=u
return a.lastIndexOf(b,c)},
k0:function(a,b){return this.k5(a,b,null)},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
j:function(a,b){if(b>=a.length||!1)throw H.e(H.bP(a,b))
return a[b]},
$ilq:1,
$in:1}
H.a7.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.bd(this.a,b)},
$ae9:function(){return[P.z]},
$aw:function(){return[P.z]},
$ad:function(){return[P.z]},
$ab:function(){return[P.z]}}
H.fO.prototype={}
H.dE.prototype={
gJ:function(a){return this.d},
A:function(){var u,t,s,r
u=this.a
t=J.k8(u)
s=t.gk(u)
if(this.b!==s)throw H.e(P.co(u))
r=this.c
if(r>=s){this.sb8(null)
return!1}this.sb8(t.F(u,r));++this.c
return!0},
sb8:function(a){this.d=H.A(a,H.u(this,0))},
$iaF:1}
H.hr.prototype={
gT:function(a){return new H.hs(J.ci(this.a),this.b,this.$ti)},
gk:function(a){return J.aU(this.a)},
F:function(a,b){return this.b.$1(J.l4(this.a,b))},
$ad:function(a,b){return[b]}}
H.hs.prototype={
A:function(){var u=this.b
if(u.A()){this.sb8(this.c.$1(u.gJ(u)))
return!0}this.sb8(null)
return!1},
gJ:function(a){return this.a},
sb8:function(a){this.a=H.A(a,H.u(this,1))},
$aaF:function(a,b){return[b]}}
H.jd.prototype={
gT:function(a){return new H.je(J.ci(this.a),this.b,this.$ti)}}
H.je.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gJ(u)))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.c_.prototype={}
H.e9.prototype={}
H.e8.prototype={}
H.i0.prototype={}
H.iM.prototype={
ah:function(a){var u,t,s
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
H.hM.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ha.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.iY.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ct.prototype={}
H.kg.prototype={
$1:function(a){if(!!J.Y(a).$ibC)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.eO.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ia4:1}
H.cm.prototype={
i:function(a){return"Closure '"+H.c3(this).trim()+"'"},
$ikq:1,
gkM:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iw.prototype={}
H.ip.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cg(u)+"'"}}
H.cj.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cj))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gG:function(a){var u,t
u=this.c
if(u==null)t=H.cG(this.a)
else t=typeof u!=="object"?J.bS(u):H.cG(u)
return(t^H.cG(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c3(u)+"'")}}
H.iO.prototype={
i:function(a){return this.a}}
H.fv.prototype={
i:function(a){return this.a}}
H.ib.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aG.prototype={
gk:function(a){return this.a},
gaQ:function(a){return new H.dD(this,[H.u(this,0)])},
e_:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dl(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dl(t,b)}else return this.jY(b)},
jY:function(a){var u=this.d
if(u==null)return!1
return this.cO(this.cc(u,J.bS(a)&0x3ffffff),a)>=0},
aZ:function(a,b){J.l5(H.i(b,"$iH",this.$ti,"$aH"),new H.h9(this))},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.br(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.br(r,b)
s=t==null?null:t.b
return s}else return this.jZ(b)},
jZ:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.cc(u,J.bS(a)&0x3ffffff)
s=this.cO(t,a)
if(s<0)return
return t[s].b},
a1:function(a,b,c){var u,t,s,r,q,p
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.ci()
this.b=u}this.df(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.ci()
this.c=t}this.df(t,b,c)}else{s=this.d
if(s==null){s=this.ci()
this.d=s}r=J.bS(b)&0x3ffffff
q=this.cc(s,r)
if(q==null)this.cr(s,r,[this.cj(b,c)])
else{p=this.cO(q,b)
if(p>=0)q[p].b=c
else q.push(this.cj(b,c))}}},
O:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.e(P.co(this))
u=u.c}},
df:function(a,b,c){var u
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
u=this.br(a,b)
if(u==null)this.cr(a,b,this.cj(b,c))
else u.b=c},
cj:function(a,b){var u,t
u=new H.hk(H.A(a,H.u(this,0)),H.A(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cO:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a2(a[t].a,b))return t
return-1},
i:function(a){return P.lm(this)},
br:function(a,b){return a[b]},
cc:function(a,b){return a[b]},
cr:function(a,b,c){a[b]=c},
fU:function(a,b){delete a[b]},
dl:function(a,b){return this.br(a,b)!=null},
ci:function(){var u=Object.create(null)
this.cr(u,"<non-identifier-key>",u)
this.fU(u,"<non-identifier-key>")
return u}}
H.h9.prototype={
$2:function(a,b){var u=this.a
u.a1(0,H.A(a,H.u(u,0)),H.A(b,H.u(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.E,args:[H.u(u,0),H.u(u,1)]}}}
H.hk.prototype={}
H.dD.prototype={
gk:function(a){return this.a.a},
gT:function(a){var u,t
u=this.a
t=new H.hl(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hl.prototype={
gJ:function(a){return this.d},
A:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.co(u))
else{u=this.c
if(u==null){this.sde(null)
return!1}else{this.sde(u.a)
this.c=this.c.c
return!0}}},
sde:function(a){this.d=H.A(a,H.u(this,0))},
$iaF:1}
H.k9.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.ka.prototype={
$2:function(a,b){return this.a(a,b)},
$S:31}
H.kb.prototype={
$1:function(a){return this.a(H.P(a))},
$S:32}
H.h8.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
ghp:function(){var u=this.c
if(u!=null)return u
u=this.b
u=H.lj(this.a,u.multiline,!u.ignoreCase,!0)
this.c=u
return u},
jS:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.ex(this,u)},
fZ:function(a,b){var u,t
u=this.ghp()
u.lastIndex=b
t=u.exec(a)
if(t==null)return
return new H.ex(this,t)},
$ilq:1}
H.ex.prototype={
j:function(a,b){return C.a.j(this.b,b)},
$idG:1}
H.jf.prototype={
gJ:function(a){return this.d},
A:function(){var u,t,s,r
u=this.b
if(u==null)return!1
t=this.c
if(t<=u.length){s=this.a.fZ(u,t)
if(s!=null){this.d=s
u=s.b
t=u.index
r=t+u[0].length
this.c=t===r?r+1:r
return!0}}this.d=null
this.b=null
return!1},
$iaF:1,
$aaF:function(){return[P.dG]}}
H.cB.prototype={$iok:1}
H.dM.prototype={
gk:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.cA.prototype={
j:function(a,b){H.bN(b,a,a.length)
return a[b]},
$ac_:function(){return[P.C]},
$aw:function(){return[P.C]},
$id:1,
$ad:function(){return[P.C]},
$ib:1,
$ab:function(){return[P.C]}}
H.dN.prototype={
$ac_:function(){return[P.z]},
$aw:function(){return[P.z]},
$id:1,
$ad:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.hG.prototype={
j:function(a,b){H.bN(b,a,a.length)
return a[b]}}
H.hH.prototype={
j:function(a,b){H.bN(b,a,a.length)
return a[b]}}
H.hI.prototype={
j:function(a,b){H.bN(b,a,a.length)
return a[b]}}
H.hJ.prototype={
j:function(a,b){H.bN(b,a,a.length)
return a[b]}}
H.hK.prototype={
j:function(a,b){H.bN(b,a,a.length)
return a[b]}}
H.dO.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bN(b,a,a.length)
return a[b]},
$iol:1}
H.hL.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bN(b,a,a.length)
return a[b]}}
H.d0.prototype={}
H.d1.prototype={}
H.d2.prototype={}
H.d3.prototype={}
P.jk.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:17}
P.jj.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.jl.prototype={
$0:function(){this.a.$0()},
$S:1}
P.jm.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eV.prototype={
fA:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cb(new P.jV(this,b),0),a)
else throw H.e(P.aq("`setTimeout()` not found."))},
fB:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.cb(new P.jU(this,a,Date.now(),b),0),a)
else throw H.e(P.aq("Periodic timer."))},
$ibc:1}
P.jV.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.jU.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.d.fa(r,s)}u.c=t
this.d.$1(u)},
$S:1}
P.ef.prototype={
az:function(a,b){var u
H.cd(b,{futureOr:1,type:H.u(this,0)})
if(this.b)this.a.az(0,b)
else if(H.bt(b,"$iax",this.$ti,"$aax")){u=this.a
b.bZ(u.gjB(u),u.gdY(),-1)}else P.kZ(new P.jh(this,b))},
b1:function(a,b){if(this.b)this.a.b1(a,b)
else P.kZ(new P.jg(this,a,b))},
$ikn:1}
P.jh.prototype={
$0:function(){this.a.a.az(0,this.b)},
$S:1}
P.jg.prototype={
$0:function(){this.a.a.b1(this.b,this.c)},
$S:1}
P.jY.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:40}
P.jZ.prototype={
$2:function(a,b){this.a.$2(1,new H.ct(a,H.l(b,"$ia4")))},
$S:34}
P.k4.prototype={
$2:function(a,b){this.a(H.a6(a),b)},
$S:35}
P.ei.prototype={
b1:function(a,b){H.l(b,"$ia4")
if(a==null)a=new P.cD()
if(this.a.a!==0)throw H.e(P.kC("Future already completed"))
$.O.toString
this.aF(a,b)},
dZ:function(a){return this.b1(a,null)},
$ikn:1}
P.ji.prototype={
az:function(a,b){var u
H.cd(b,{futureOr:1,type:H.u(this,0)})
u=this.a
if(u.a!==0)throw H.e(P.kC("Future already completed"))
u.fF(b)},
aF:function(a,b){this.a.fG(a,b)}}
P.eS.prototype={
az:function(a,b){var u
H.cd(b,{futureOr:1,type:H.u(this,0)})
u=this.a
if(u.a!==0)throw H.e(P.kC("Future already completed"))
u.c8(b)},
jC:function(a){return this.az(a,null)},
aF:function(a,b){this.a.aF(a,b)}}
P.bh.prototype={
k9:function(a){if(this.c!==6)return!0
return this.b.b.cX(H.o(this.d,{func:1,ret:P.a5,args:[P.I]}),a.a,P.a5,P.I)},
jV:function(a){var u,t,s,r
u=this.e
t=P.I
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.fa(u,{func:1,args:[P.I,P.a4]}))return H.cd(r.kA(u,a.a,a.b,null,t,P.a4),s)
else return H.cd(r.cX(H.o(u,{func:1,args:[P.I]}),a.a,null,t),s)}}
P.ad.prototype={
bZ:function(a,b,c){var u,t
u=H.u(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.O
if(t!==C.k){t.toString
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.ns(b,t)}return this.ct(a,b,c)},
aj:function(a,b){return this.bZ(a,null,b)},
ct:function(a,b,c){var u,t,s
u=H.u(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=new P.ad(0,$.O,[c])
s=b==null?1:3
this.dg(new P.bh(t,s,a,b,[u,c]))
return t},
dg:function(a){var u,t
u=this.a
if(u<=1){a.a=H.l(this.c,"$ibh")
this.c=a}else{if(u===2){t=H.l(this.c,"$iad")
u=t.a
if(u<4){t.dg(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.c9(null,null,u,H.o(new P.jt(this,a),{func:1,ret:-1}))}},
dD:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.l(this.c,"$ibh")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.l(this.c,"$iad")
t=p.a
if(t<4){p.dD(a)
return}this.a=t
this.c=p.c}u.a=this.bw(a)
t=this.b
t.toString
P.c9(null,null,t,H.o(new P.jB(u,this),{func:1,ret:-1}))}},
bv:function(){var u=H.l(this.c,"$ibh")
this.c=null
return this.bw(u)},
bw:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
c8:function(a){var u,t,s
u=H.u(this,0)
H.cd(a,{futureOr:1,type:u})
t=this.$ti
if(H.bt(a,"$iax",t,"$aax"))if(H.bt(a,"$iad",t,null))P.jw(a,this)
else P.lK(a,this)
else{s=this.bv()
H.A(a,u)
this.a=4
this.c=a
P.c7(this,s)}},
aF:function(a,b){var u
H.l(b,"$ia4")
u=this.bv()
this.a=8
this.c=new P.al(a,b)
P.c7(this,u)},
fF:function(a){var u
H.cd(a,{futureOr:1,type:H.u(this,0)})
if(H.bt(a,"$iax",this.$ti,"$aax")){this.fN(a)
return}this.a=1
u=this.b
u.toString
P.c9(null,null,u,H.o(new P.jv(this,a),{func:1,ret:-1}))},
fN:function(a){var u=this.$ti
H.i(a,"$iax",u,"$aax")
if(H.bt(a,"$iad",u,null)){if(a.a===8){this.a=1
u=this.b
u.toString
P.c9(null,null,u,H.o(new P.jA(this,a),{func:1,ret:-1}))}else P.jw(a,this)
return}P.lK(a,this)},
fG:function(a,b){var u
this.a=1
u=this.b
u.toString
P.c9(null,null,u,H.o(new P.ju(this,a,b),{func:1,ret:-1}))},
$iax:1}
P.jt.prototype={
$0:function(){P.c7(this.a,this.b)},
$S:1}
P.jB.prototype={
$0:function(){P.c7(this.b,this.a.a)},
$S:1}
P.jx.prototype={
$1:function(a){var u=this.a
u.a=0
u.c8(a)},
$S:17}
P.jy.prototype={
$2:function(a,b){H.l(b,"$ia4")
this.a.aF(a,b)},
$1:function(a){return this.$2(a,null)},
$S:42}
P.jz.prototype={
$0:function(){this.a.aF(this.b,this.c)},
$S:1}
P.jv.prototype={
$0:function(){var u,t,s
u=this.a
t=H.A(this.b,H.u(u,0))
s=u.bv()
u.a=4
u.c=t
P.c7(u,s)},
$S:1}
P.jA.prototype={
$0:function(){P.jw(this.b,this.a)},
$S:1}
P.ju.prototype={
$0:function(){this.a.aF(this.b,this.c)},
$S:1}
P.jE.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eJ(H.o(r.d,{func:1}),null)}catch(q){t=H.ao(q)
s=H.bR(q)
if(this.d){r=H.l(this.a.a.c,"$ial").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.l(this.a.a.c,"$ial")
else p.b=new P.al(t,s)
p.a=!0
return}if(!!J.Y(u).$iax){if(u instanceof P.ad&&u.a>=4){if(u.a===8){r=this.b
r.b=H.l(u.c,"$ial")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.aj(new P.jF(o),null)
r.a=!1}},
$S:3}
P.jF.prototype={
$1:function(a){return this.a},
$S:43}
P.jD.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.A(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.cX(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ao(o)
t=H.bR(o)
s=this.a
s.b=new P.al(u,t)
s.a=!0}},
$S:3}
P.jC.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.l(this.a.a.c,"$ial")
r=this.c
if(r.k9(u)&&r.e!=null){q=this.b
q.b=r.jV(u)
q.a=!1}}catch(p){t=H.ao(p)
s=H.bR(p)
r=H.l(this.a.a.c,"$ial")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.al(t,s)
n.a=!0}},
$S:3}
P.eg.prototype={}
P.cK.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.ad(0,$.O,[P.z])
u.a=0
s=H.u(this,0)
r=H.o(new P.it(u,this),{func:1,ret:-1,args:[s]})
H.o(new P.iu(u,t),{func:1,ret:-1})
W.a0(this.a,this.b,r,!1,s)
return t}}
P.it.prototype={
$1:function(a){H.A(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.u(this.b,0)]}}}
P.iu.prototype={
$0:function(){this.b.c8(this.a.a)},
$S:1}
P.cL.prototype={}
P.is.prototype={}
P.jS.prototype={}
P.bc.prototype={}
P.al.prototype={
i:function(a){return H.m(this.a)},
$ibC:1}
P.jX.prototype={$ioy:1}
P.k2.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.cD()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.e(u)
s=H.e(u)
s.stack=t.i(0)
throw s},
$S:1}
P.jM.prototype={
kB:function(a){var u,t,s
H.o(a,{func:1,ret:-1})
try{if(C.k===$.O){a.$0()
return}P.lQ(null,null,this,a,-1)}catch(s){u=H.ao(s)
t=H.bR(s)
P.k1(null,null,this,u,H.l(t,"$ia4"))}},
kC:function(a,b,c){var u,t,s
H.o(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.k===$.O){a.$1(b)
return}P.lR(null,null,this,a,b,-1,c)}catch(s){u=H.ao(s)
t=H.bR(s)
P.k1(null,null,this,u,H.l(t,"$ia4"))}},
jr:function(a,b){return new P.jO(this,H.o(a,{func:1,ret:b}),b)},
cA:function(a){return new P.jN(this,H.o(a,{func:1,ret:-1}))},
dR:function(a,b){return new P.jP(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
j:function(a,b){return},
eJ:function(a,b){H.o(a,{func:1,ret:b})
if($.O===C.k)return a.$0()
return P.lQ(null,null,this,a,b)},
cX:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.O===C.k)return a.$1(b)
return P.lR(null,null,this,a,b,c,d)},
kA:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.O===C.k)return a.$2(b,c)
return P.nt(null,null,this,a,b,c,d,e,f)},
eG:function(a,b,c,d){return H.o(a,{func:1,ret:b,args:[c,d]})}}
P.jO.prototype={
$0:function(){return this.a.eJ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jN.prototype={
$0:function(){return this.a.kB(this.b)},
$S:3}
P.jP.prototype={
$1:function(a){var u=this.c
return this.a.kC(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jJ.prototype={
gT:function(a){return P.lM(this,this.r,H.u(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u
H.A(b,H.u(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.lN()
this.c=u}return this.fQ(u,b)}else return this.fP(0,b)},
fP:function(a,b){var u,t,s
H.A(b,H.u(this,0))
u=this.d
if(u==null){u=P.lN()
this.d=u}t=this.dj(b)
s=u[t]
if(s==null)u[t]=[this.c7(b)]
else{if(this.ds(s,b)>=0)return!1
s.push(this.c7(b))}return!0},
P:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.it(this.c,b)
else return this.is(0,b)},
is:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.h4(u,b)
s=this.ds(t,b)
if(s<0)return!1
this.dL(t.splice(s,1)[0])
return!0},
fQ:function(a,b){H.A(b,H.u(this,0))
if(H.l(a[b],"$id_")!=null)return!1
a[b]=this.c7(b)
return!0},
it:function(a,b){var u
if(a==null)return!1
u=H.l(a[b],"$id_")
if(u==null)return!1
this.dL(u)
delete a[b]
return!0},
dv:function(){this.r=1073741823&this.r+1},
c7:function(a){var u,t
u=new P.d_(H.A(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dv()
return u},
dL:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dv()},
dj:function(a){return J.bS(a)&1073741823},
h4:function(a,b){return a[this.dj(b)]},
ds:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.d_.prototype={}
P.jK.prototype={
gJ:function(a){return this.d},
A:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.co(u))
else{u=this.c
if(u==null){this.sdi(null)
return!1}else{this.sdi(H.A(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sdi:function(a){this.d=H.A(a,H.u(this,0))},
$iaF:1}
P.hm.prototype={$id:1,$ib:1}
P.w.prototype={
gT:function(a){return new H.dE(a,this.gk(a),0,[H.ce(this,a,"w",0)])},
F:function(a,b){return this.j(a,b)},
kG:function(a,b){var u,t
u=H.c([],[H.ce(this,a,"w",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.a1(u,t,this.j(a,t))
return u},
kF:function(a){return this.kG(a,!0)},
p:function(a,b){var u,t
u=[H.ce(this,a,"w",0)]
H.i(b,"$ib",u,"$ab")
t=H.c([],u)
C.a.sk(t,C.d.p(this.gk(a),b.gk(b)))
C.a.bn(t,0,this.gk(a),a)
C.a.bn(t,this.gk(a),t.length,b)
return t},
i:function(a){return P.kr(a,"[","]")}}
P.hp.prototype={}
P.hq.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.m(a)
u.a=t+": "
u.a+=H.m(b)},
$S:24}
P.ae.prototype={
O:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.ce(this,a,"ae",0),H.ce(this,a,"ae",1)]})
for(u=J.ci(this.gaQ(a));u.A();){t=u.gJ(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.aU(this.gaQ(a))},
i:function(a){return P.lm(a)},
$iH:1}
P.jQ.prototype={
i:function(a){return P.kr(this,"{","}")},
F:function(a,b){var u,t,s
if(b<0)H.r(P.aJ(b,0,null,"index",null))
for(u=P.lM(this,this.r,H.u(this,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.e(P.W(b,this,"index",null,t))},
$id:1,
$ilA:1}
P.ew.prototype={}
P.cn.prototype={}
P.dn.prototype={}
P.fP.prototype={
$acn:function(){return[P.n,[P.b,P.z]]}}
P.j0.prototype={}
P.j1.prototype={
jE:function(a,b,c){var u,t,s
c=P.kz(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jW(t)
if(s.h3(a,b,c)!==c)s.dM(C.j.bd(a,c-1),0)
return new Uint8Array(t.subarray(0,H.no(0,s.b,t.length)))},
jD:function(a){return this.jE(a,0,null)},
$adn:function(){return[P.n,[P.b,P.z]]}}
P.jW.prototype={
dM:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.f(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.f(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.f(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.f(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.f(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.f(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.f(u,t)
u[t]=128|a&63
return!1}},
h3:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.bd(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.aV(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dM(r,C.j.aV(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.f(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.f(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.f(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.f(u,q)
u[q]=128|r&63}}return s}}
P.a5.prototype={}
P.aD.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.aD&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.bz(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.mA(H.n0(this))
t=P.dq(H.mZ(this))
s=P.dq(H.mV(this))
r=P.dq(H.mW(this))
q=P.dq(H.mY(this))
p=P.dq(H.n_(this))
o=P.mB(H.mX(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.C.prototype={}
P.bi.prototype={
p:function(a,b){return new P.bi(C.d.p(this.a,b.gdr()))},
Y:function(a,b){return C.d.Y(this.a,b.gdr())},
b4:function(a,b){return C.d.b4(this.a,b.gdr())},
v:function(a,b){if(b==null)return!1
return b instanceof P.bi&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fJ()
t=this.a
if(t<0)return"-"+new P.bi(0-t).i(0)
s=u.$1(C.d.a4(t,6e7)%60)
r=u.$1(C.d.a4(t,1e6)%60)
q=new P.fI().$1(t%1e6)
return""+C.d.a4(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.fI.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.fJ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.bC.prototype={}
P.cD.prototype={
i:function(a){return"Throw of null."}}
P.aV.prototype={
gca:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc9:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gca()+t+s
if(!this.a)return r
q=this.gc9()
p=P.fR(this.b)
return r+q+": "+p}}
P.c4.prototype={
gca:function(){return"RangeError"},
gc9:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.h5.prototype={
gca:function(){return"RangeError"},
gc9:function(){var u,t
u=H.a6(this.b)
if(typeof u!=="number")return u.Y()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gk:function(a){return this.f}}
P.iZ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iX.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cJ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fy.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fR(u)+"."}}
P.hP.prototype={
i:function(a){return"Out of Memory"},
$ibC:1}
P.dY.prototype={
i:function(a){return"Stack Overflow"},
$ibC:1}
P.fD.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ep.prototype={
i:function(a){return"Exception: "+this.a}}
P.h_.prototype={
i:function(a){var u,t,s,r
u=this.a
t=u!=null&&""!==u?"FormatException: "+H.m(u):"FormatException"
s=this.b
if(typeof s==="string"){r=s.length>78?C.j.bo(s,0,75)+"...":s
return t+"\n"+r}else return t}}
P.z.prototype={}
P.d.prototype={
gk:function(a){var u,t
u=this.gT(this)
for(t=0;u.A();)++t
return t},
F:function(a,b){var u,t,s
if(b<0)H.r(P.aJ(b,0,null,"index",null))
for(u=this.gT(this),t=0;u.A();){s=u.gJ(u)
if(b===t)return s;++t}throw H.e(P.W(b,this,"index",null,t))},
i:function(a){return P.mF(this,"(",")")}}
P.aF.prototype={}
P.b.prototype={$id:1}
P.H.prototype={}
P.E.prototype={
gG:function(a){return P.I.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a1.prototype={}
P.I.prototype={constructor:P.I,$iI:1,
v:function(a,b){return this===b},
gG:function(a){return H.cG(this)},
i:function(a){return"Instance of '"+H.c3(this)+"'"},
toString:function(){return this.i(this)}}
P.dG.prototype={}
P.a4.prototype={}
P.n.prototype={$ilq:1}
P.bK.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.v.prototype={}
W.ff.prototype={
gk:function(a){return a.length}}
W.fh.prototype={
i:function(a){return String(a)}}
W.fi.prototype={
i:function(a){return String(a)}}
W.dg.prototype={}
W.dh.prototype={}
W.bV.prototype={
d0:function(a,b,c){if(c!=null)return this.h5(a,b,P.nA(c,null))
return this.h6(a,b)},
eV:function(a,b){return this.d0(a,b,null)},
h5:function(a,b,c){return a.getContext(b,c)},
h6:function(a,b){return a.getContext(b)},
$ibV:1,
$ila:1}
W.bW.prototype={
h7:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jO:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibW:1}
W.bA.prototype={
gk:function(a){return a.length}}
W.cp.prototype={$icp:1}
W.fz.prototype={
gk:function(a){return a.length}}
W.R.prototype={$iR:1}
W.cq.prototype={
gk:function(a){return a.length}}
W.fA.prototype={}
W.aX.prototype={}
W.aY.prototype={}
W.fB.prototype={
gk:function(a){return a.length}}
W.fC.prototype={
gk:function(a){return a.length}}
W.fE.prototype={
j:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.cr.prototype={$icr:1}
W.cs.prototype={
eW:function(a,b){return a.getElementById(b)}}
W.fF.prototype={
i:function(a){return String(a)}}
W.dr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.ac,P.a1]]},
$aw:function(){return[[P.ac,P.a1]]},
$id:1,
$ad:function(){return[[P.ac,P.a1]]},
$ib:1,
$ab:function(){return[[P.ac,P.a1]]},
$aB:function(){return[[P.ac,P.a1]]}}
W.ds.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaS(a))+" x "+H.m(this.gaP(a))},
v:function(a,b){var u
if(b==null)return!1
if(!H.bt(b,"$iac",[P.a1],"$aac"))return!1
u=J.fb(b)
return a.left===u.gbV(b)&&a.top===u.gc_(b)&&this.gaS(a)===u.gaS(b)&&this.gaP(a)===u.gaP(b)},
gG:function(a){return W.lL(C.i.gG(a.left),C.i.gG(a.top),C.i.gG(this.gaS(a)),C.i.gG(this.gaP(a)))},
gdS:function(a){return a.bottom},
gaP:function(a){return a.height},
gbV:function(a){return a.left},
gbY:function(a){return a.right},
gc_:function(a){return a.top},
gaS:function(a){return a.width},
$iac:1,
$aac:function(){return[P.a1]}}
W.fG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.n]},
$aw:function(){return[P.n]},
$id:1,
$ad:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$aB:function(){return[P.n]}}
W.fH.prototype={
gk:function(a){return a.length}}
W.jo.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.l(u[b],"$ia8")},
h:function(a,b){J.l3(this.a,b)
return b},
gT:function(a){var u=this.kF(this)
return new J.ak(u,u.length,0,[H.u(u,0)])},
$aw:function(){return[W.a8]},
$ad:function(){return[W.a8]},
$ab:function(){return[W.a8]}}
W.a8.prototype={
gdV:function(a){return new W.jo(a,a.children)},
gdX:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.Y()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Y()
if(r<0)r=-r*0
return new P.ac(u,t,s,r,[P.a1])},
i:function(a){return a.localName},
$ia8:1}
W.p.prototype={$ip:1}
W.h.prototype={
jk:function(a,b,c,d){H.o(c,{func:1,args:[W.p]})
if(c!=null)this.fE(a,b,c,!1)},
fE:function(a,b,c,d){return a.addEventListener(b,H.cb(H.o(c,{func:1,args:[W.p]}),1),!1)},
$ih:1}
W.aZ.prototype={$iaZ:1}
W.fU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aZ]},
$aw:function(){return[W.aZ]},
$id:1,
$ad:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aB:function(){return[W.aZ]}}
W.fV.prototype={
gk:function(a){return a.length}}
W.fZ.prototype={
gk:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.h1.prototype={
gk:function(a){return a.length}}
W.c0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.K]},
$aw:function(){return[W.K]},
$id:1,
$ad:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$ic0:1,
$aB:function(){return[W.K]}}
W.dw.prototype={}
W.b0.prototype={
kT:function(a,b,c,d,e,f){return a.open(b,c)},
ki:function(a,b,c,d){return a.open(b,c,d)},
$ib0:1}
W.h2.prototype={
$1:function(a){return H.l(a,"$ib0").responseText},
$S:25}
W.h3.prototype={
$1:function(a){var u,t,s,r,q
H.l(a,"$ib7")
u=this.a
t=u.status
if(typeof t!=="number")return t.b4()
s=t>=200&&t<300
r=t>307&&t<400
t=s||t===0||t===304||r
q=this.b
if(t)q.az(0,u)
else q.dZ(a)},
$S:26}
W.cv.prototype={}
W.bD.prototype={$ibD:1,
ge1:function(a){return a.data}}
W.cw.prototype={$icw:1,$ila:1}
W.b1.prototype={$ib1:1}
W.hn.prototype={
i:function(a){return String(a)}}
W.cz.prototype={}
W.hz.prototype={
gk:function(a){return a.length}}
W.hA.prototype={
j:function(a,b){return P.bu(a.get(H.P(b)))},
O:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
gaQ:function(a){var u=H.c([],[P.n])
this.O(a,new W.hB(u))
return u},
gk:function(a){return a.size},
$aae:function(){return[P.n,null]},
$iH:1,
$aH:function(){return[P.n,null]}}
W.hB.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hC.prototype={
j:function(a,b){return P.bu(a.get(H.P(b)))},
O:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
gaQ:function(a){var u=H.c([],[P.n])
this.O(a,new W.hD(u))
return u},
gk:function(a){return a.size},
$aae:function(){return[P.n,null]},
$iH:1,
$aH:function(){return[P.n,null]}}
W.hD.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.b4.prototype={$ib4:1}
W.hE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b4]},
$aw:function(){return[W.b4]},
$id:1,
$ad:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aB:function(){return[W.b4]}}
W.ab.prototype={$iab:1}
W.jn.prototype={
gT:function(a){var u=this.a.childNodes
return new W.du(u,u.length,-1,[H.ce(C.O,u,"B",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$aw:function(){return[W.K]},
$ad:function(){return[W.K]},
$ab:function(){return[W.K]}}
W.K.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.f7(a):u},
a0:function(a,b){return a.appendChild(b)},
$iK:1}
W.cC.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.K]},
$aw:function(){return[W.K]},
$id:1,
$ad:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$aB:function(){return[W.K]}}
W.b6.prototype={$ib6:1,
gk:function(a){return a.length}}
W.hU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b6]},
$aw:function(){return[W.b6]},
$id:1,
$ad:function(){return[W.b6]},
$ib:1,
$ab:function(){return[W.b6]},
$aB:function(){return[W.b6]}}
W.b7.prototype={$ib7:1}
W.i9.prototype={
j:function(a,b){return P.bu(a.get(H.P(b)))},
O:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
gaQ:function(a){var u=H.c([],[P.n])
this.O(a,new W.ia(u))
return u},
gk:function(a){return a.size},
$aae:function(){return[P.n,null]},
$iH:1,
$aH:function(){return[P.n,null]}}
W.ia.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.ic.prototype={
gk:function(a){return a.length}}
W.b8.prototype={$ib8:1}
W.il.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b8]},
$aw:function(){return[W.b8]},
$id:1,
$ad:function(){return[W.b8]},
$ib:1,
$ab:function(){return[W.b8]},
$aB:function(){return[W.b8]}}
W.b9.prototype={$ib9:1}
W.im.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b9]},
$aw:function(){return[W.b9]},
$id:1,
$ad:function(){return[W.b9]},
$ib:1,
$ab:function(){return[W.b9]},
$aB:function(){return[W.b9]}}
W.ba.prototype={$iba:1,
gk:function(a){return a.length}}
W.iq.prototype={
j:function(a,b){return this.dt(a,H.P(b))},
O:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,P.n]})
for(u=0;!0;++u){t=this.ha(a,u)
if(t==null)return
b.$2(t,this.dt(a,t))}},
gaQ:function(a){var u=H.c([],[P.n])
this.O(a,new W.ir(u))
return u},
gk:function(a){return a.length},
dt:function(a,b){return a.getItem(b)},
ha:function(a,b){return a.key(b)},
$aae:function(){return[P.n,P.n]},
$iH:1,
$aH:function(){return[P.n,P.n]}}
W.ir.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:28}
W.aP.prototype={$iaP:1}
W.bb.prototype={$ibb:1}
W.aQ.prototype={$iaQ:1}
W.ix.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aQ]},
$aw:function(){return[W.aQ]},
$id:1,
$ad:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aB:function(){return[W.aQ]}}
W.iy.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.bb]},
$aw:function(){return[W.bb]},
$id:1,
$ad:function(){return[W.bb]},
$ib:1,
$ab:function(){return[W.bb]},
$aB:function(){return[W.bb]}}
W.iG.prototype={
gk:function(a){return a.length}}
W.bd.prototype={$ibd:1}
W.aR.prototype={$iaR:1}
W.iJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.bd]},
$aw:function(){return[W.bd]},
$id:1,
$ad:function(){return[W.bd]},
$ib:1,
$ab:function(){return[W.bd]},
$aB:function(){return[W.bd]}}
W.iK.prototype={
gk:function(a){return a.length}}
W.bM.prototype={}
W.j_.prototype={
i:function(a){return String(a)}}
W.jb.prototype={$ila:1}
W.jc.prototype={
gk:function(a){return a.length}}
W.bg.prototype={
gjK:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.aq("deltaY is not supported"))},
gjJ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.aq("deltaX is not supported"))},
$ibg:1}
W.cZ.prototype={
iv:function(a,b){return a.requestAnimationFrame(H.cb(H.o(b,{func:1,ret:-1,args:[P.a1]}),1))},
fX:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jp.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.R]},
$aw:function(){return[W.R]},
$id:1,
$ad:function(){return[W.R]},
$ib:1,
$ab:function(){return[W.R]},
$aB:function(){return[W.R]}}
W.ek.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.bt(b,"$iac",[P.a1],"$aac"))return!1
u=J.fb(b)
return a.left===u.gbV(b)&&a.top===u.gc_(b)&&a.width===u.gaS(b)&&a.height===u.gaP(b)},
gG:function(a){return W.lL(C.i.gG(a.left),C.i.gG(a.top),C.i.gG(a.width),C.i.gG(a.height))},
gaP:function(a){return a.height},
gaS:function(a){return a.width}}
W.jG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b_]},
$aw:function(){return[W.b_]},
$id:1,
$ad:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aB:function(){return[W.b_]}}
W.eC.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.K]},
$aw:function(){return[W.K]},
$id:1,
$ad:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$aB:function(){return[W.K]}}
W.jR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.ba]},
$aw:function(){return[W.ba]},
$id:1,
$ad:function(){return[W.ba]},
$ib:1,
$ab:function(){return[W.ba]},
$aB:function(){return[W.ba]}}
W.jT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aP]},
$aw:function(){return[W.aP]},
$id:1,
$ad:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aB:function(){return[W.aP]}}
W.jq.prototype={}
W.kK.prototype={}
W.jr.prototype={
iT:function(){var u=this.d
if(u!=null&&this.a<=0)J.mr(this.b,this.c,u,!1)}}
W.js.prototype={
$1:function(a){return this.a.$1(H.l(a,"$ip"))},
$S:29}
W.B.prototype={
gT:function(a){return new W.du(a,this.gk(a),-1,[H.ce(this,a,"B",0)])}}
W.du.prototype={
A:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdu(J.U(this.a,u))
this.c=u
return!0}this.sdu(null)
this.c=t
return!1},
gJ:function(a){return this.d},
sdu:function(a){this.d=H.A(a,H.u(this,0))},
$iaF:1}
W.ej.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eP.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
P.f_.prototype={$ibD:1,
ge1:function(a){return this.a}}
P.k5.prototype={
$2:function(a,b){this.a[a]=b},
$S:24}
P.fW.prototype={
gcd:function(){var u,t,s
u=this.b
t=H.aw(u,"w",0)
s=W.a8
return new H.hr(new H.jd(u,H.o(new P.fX(),{func:1,ret:P.a5,args:[t]}),[t]),H.o(new P.fY(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.l3(this.b.a,b)},
gk:function(a){return J.aU(this.gcd().a)},
j:function(a,b){var u=this.gcd()
return u.b.$1(J.l4(u.a,b))},
gT:function(a){var u=P.ll(this.gcd(),!1,W.a8)
return new J.ak(u,u.length,0,[H.u(u,0)])},
$aw:function(){return[W.a8]},
$ad:function(){return[W.a8]},
$ab:function(){return[W.a8]}}
P.fX.prototype={
$1:function(a){return!!J.Y(H.l(a,"$iK")).$ia8},
$S:30}
P.fY.prototype={
$1:function(a){return H.j(H.l(a,"$iK"),"$ia8")},
$S:45}
P.jL.prototype={
gbY:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.A(u+this.c,H.u(this,0))},
gdS:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.A(u+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.bt(b,"$iac",[P.a1],"$aac")){u=this.a
t=J.fb(b)
if(u==t.gbV(b)){s=this.b
if(s==t.gc_(b)){if(typeof u!=="number")return u.p()
r=H.u(this,0)
if(H.A(u+this.c,r)===t.gbY(b)){if(typeof s!=="number")return s.p()
u=H.A(s+this.d,r)===t.gdS(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t,s,r,q
u=this.a
t=J.bS(u)
s=this.b
r=J.bS(s)
if(typeof u!=="number")return u.p()
q=H.u(this,0)
u=C.d.gG(H.A(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.d.gG(H.A(s+this.d,q))
return P.nk(P.jI(P.jI(P.jI(P.jI(0,t),r),u),q))}}
P.ac.prototype={
gbV:function(a){return this.a},
gc_:function(a){return this.b},
gaS:function(a){return this.c},
gaP:function(a){return this.d}}
P.bk.prototype={$ibk:1}
P.hj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return this.aE(a,b)},
F:function(a,b){return this.j(a,b)},
aE:function(a,b){return a.getItem(b)},
$aw:function(){return[P.bk]},
$id:1,
$ad:function(){return[P.bk]},
$ib:1,
$ab:function(){return[P.bk]},
$aB:function(){return[P.bk]}}
P.bo.prototype={$ibo:1}
P.hN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return this.aE(a,b)},
F:function(a,b){return this.j(a,b)},
aE:function(a,b){return a.getItem(b)},
$aw:function(){return[P.bo]},
$id:1,
$ad:function(){return[P.bo]},
$ib:1,
$ab:function(){return[P.bo]},
$aB:function(){return[P.bo]}}
P.hW.prototype={
gk:function(a){return a.length}}
P.iv.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return this.aE(a,b)},
F:function(a,b){return this.j(a,b)},
aE:function(a,b){return a.getItem(b)},
$aw:function(){return[P.n]},
$id:1,
$ad:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$aB:function(){return[P.n]}}
P.t.prototype={
gdV:function(a){return new P.fW(a,new W.jn(a))}}
P.br.prototype={$ibr:1}
P.iL.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return this.aE(a,b)},
F:function(a,b){return this.j(a,b)},
aE:function(a,b){return a.getItem(b)},
$aw:function(){return[P.br]},
$id:1,
$ad:function(){return[P.br]},
$ib:1,
$ab:function(){return[P.br]},
$aB:function(){return[P.br]}}
P.eu.prototype={}
P.ev.prototype={}
P.eF.prototype={}
P.eG.prototype={}
P.eQ.prototype={}
P.eR.prototype={}
P.eY.prototype={}
P.eZ.prototype={}
P.fk.prototype={
gk:function(a){return a.length}}
P.fl.prototype={
j:function(a,b){return P.bu(a.get(H.P(b)))},
O:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
gaQ:function(a){var u=H.c([],[P.n])
this.O(a,new P.fm(u))
return u},
gk:function(a){return a.size},
$aae:function(){return[P.n,null]},
$iH:1,
$aH:function(){return[P.n,null]}}
P.fm.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fn.prototype={
gk:function(a){return a.length}}
P.bT.prototype={}
P.hO.prototype={
gk:function(a){return a.length}}
P.eh.prototype={}
P.di.prototype={$idi:1}
P.dv.prototype={$idv:1}
P.dR.prototype={$idR:1}
P.c5.prototype={
bC:function(a,b){return a.activeTexture(b)},
dQ:function(a,b,c){return a.attachShader(b,c)},
ay:function(a,b,c){return a.bindBuffer(b,c)},
js:function(a,b,c){return a.bindFramebuffer(b,c)},
a5:function(a,b,c){return a.bindTexture(b,c)},
jt:function(a,b,c){return a.blendFunc(b,c)},
dT:function(a,b,c,d){return a.bufferData(b,c,d)},
jx:function(a,b){return a.clear(b)},
jy:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jz:function(a,b){return a.clearDepth(b)},
jA:function(a,b){return a.compileShader(b)},
jF:function(a,b){return a.createShader(b)},
jH:function(a,b){return a.deleteProgram(b)},
jI:function(a,b){return a.deleteShader(b)},
jL:function(a,b){return a.depthFunc(b)},
jM:function(a,b){return a.disable(b)},
e3:function(a,b){return a.disableVertexAttribArray(b)},
jN:function(a,b,c,d,e){return a.drawElements(b,c,H.a6(d),H.a6(e))},
cG:function(a,b){return a.enable(b)},
e5:function(a,b){return a.enableVertexAttribArray(b)},
eR:function(a,b){return a.generateMipmap(b)},
eS:function(a,b,c){return a.getActiveAttrib(b,c)},
eT:function(a,b,c){return a.getActiveUniform(b,c)},
eU:function(a,b,c){return a.getAttribLocation(b,c)},
d1:function(a,b){return a.getParameter(b)},
eX:function(a,b){return a.getProgramInfoLog(b)},
c1:function(a,b,c){return a.getProgramParameter(b,c)},
eY:function(a,b){return a.getShaderInfoLog(b)},
eZ:function(a,b,c){return a.getShaderParameter(b,c)},
f_:function(a,b,c){return a.getUniformLocation(b,c)},
k6:function(a,b){return a.linkProgram(b)},
eF:function(a,b,c){return a.pixelStorei(b,c)},
f5:function(a,b,c){return a.shaderSource(b,c)},
kD:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.Y(g)
if(!!u.$ibD)t=!0
else t=!1
if(t){this.iH(a,b,c,d,e,f,P.nB(g))
return}if(!!u.$icw)u=!0
else u=!1
if(u){this.iI(a,b,c,d,e,f,g)
return}throw H.e(P.mt("Incorrect number or type of arguments"))},
eK:function(a,b,c,d,e,f,g){return this.kD(a,b,c,d,e,f,g,null,null,null)},
iH:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iI:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aC:function(a,b,c,d){return a.texParameteri(b,c,d)},
H:function(a,b,c){return a.uniform1f(b,c)},
I:function(a,b,c){return a.uniform1i(b,c)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eN:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eO:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cZ:function(a,b){return a.useProgram(b)},
kJ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kL:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic5:1}
P.dT.prototype={$idT:1}
P.dZ.prototype={$idZ:1}
P.e7.prototype={$ie7:1}
P.io.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.W(b,a,null,null,null))
return P.bu(this.h9(a,b))},
F:function(a,b){return this.j(a,b)},
h9:function(a,b){return a.item(b)},
$aw:function(){return[[P.H,,,]]},
$id:1,
$ad:function(){return[[P.H,,,]]},
$ib:1,
$ab:function(){return[[P.H,,,]]},
$aB:function(){return[[P.H,,,]]}}
P.eM.prototype={}
P.eN.prototype={}
O.V.prototype={
bp:function(a){this.she(H.c([],[a]))
this.sdB(null)
this.sdw(null)
this.sdC(null)},
d2:function(a,b,c){var u=H.aw(this,"V",0)
H.o(b,{func:1,ret:P.a5,args:[[P.d,u]]})
u={func:1,ret:-1,args:[P.z,[P.d,u]]}
H.o(a,u)
H.o(c,u)
this.sdB(b)
this.sdw(a)
this.sdC(c)},
b5:function(a,b){return this.d2(a,null,b)},
aK:function(a){var u
H.i(a,"$id",[H.aw(this,"V",0)],"$ad")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d9:function(a,b){var u
H.i(b,"$id",[H.aw(this,"V",0)],"$ad")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.ak(u,u.length,0,[H.u(u,0)])},
F:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.aw(this,"V",0)
H.A(b,u)
u=[u]
if(this.aK(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.d9(s,H.c([b],u))}},
aZ:function(a,b){var u,t
H.i(b,"$id",[H.aw(this,"V",0)],"$ad")
if(this.aK(b)){u=this.a
t=u.length
C.a.aZ(u,b)
this.d9(t,b)}},
j:function(a,b){var u=this.a
if(b>=u.length)return H.f(u,b)
return u[b]},
she:function(a){this.a=H.i(a,"$ib",[H.aw(this,"V",0)],"$ab")},
sdB:function(a){this.b=H.o(a,{func:1,ret:P.a5,args:[[P.d,H.aw(this,"V",0)]]})},
sdw:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.z,[P.d,H.aw(this,"V",0)]]})},
sdC:function(a){this.d=H.o(a,{func:1,ret:-1,args:[P.z,[P.d,H.aw(this,"V",0)]]})},
$id:1}
O.cy.prototype={
gk:function(a){return this.a.length},
gq:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
fp:function(a){var u=this.b
if(u!=null)u.E(a)},
aU:function(){return this.fp(null)},
gR:function(a){var u=this.a
if(u.length>0)return C.a.gcQ(u)
else return V.bI()},
bX:function(a){var u=this.a
if(a==null)C.a.h(u,V.bI())
else C.a.h(u,a)
this.aU()},
aR:function(){var u=this.a
if(u.length>0){u.pop()
this.aU()}},
sce:function(a){this.a=H.i(a,"$ib",[V.af],"$ab")}}
E.fo.prototype={}
E.S.prototype={
ad:function(a,b,c,d,e,f){this.a=d
this.b=!0
this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.sfq(0,O.kl(E.S))
this.y.b5(this.gka(),this.gkd())
this.z=null
this.Q=null
this.ch=null
this.cx=null
this.cy=null
this.db=null
this.dx=null
this.dy=null
this.fr=null
this.fx=null
this.sac(0,e)
this.sa3(f)
this.sbW(c)},
dh:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ak(u,u.length,0,[H.u(u,0)]);u.A();){t=u.d
if(t.f==null)t.dh()}},
sac:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gq().P(0,this.geB())
t=this.c
if(t!=null)t.gq().h(0,this.geB())
s=new D.G("shape",u,this.c,this,[F.dU])
s.b=!0
this.a9(s)}},
sa3:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gq().P(0,this.geD())
t=this.f
this.f=a
if(a!=null)a.gq().h(0,this.geD())
this.dh()
s=new D.G("technique",t,this.f,this,[O.bL])
s.b=!0
this.a9(s)}},
sbW:function(a){var u,t
if(!J.a2(this.r,a)){u=this.r
if(u!=null)u.gq().P(0,this.gez())
if(a!=null)a.gq().h(0,this.gez())
this.r=a
t=new D.G("mover",u,a,this,[U.am])
t.b=!0
this.a9(t)}},
aD:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.a:null
if(!J.a2(t,this.x)){s=this.x
this.x=t
r=new D.G("matrix",s,t,this,[V.af])
r.b=!0
this.a9(r)}u=this.f
if(u!=null)u.aD(0,b)
for(u=this.y.a,u=new J.ak(u,u.length,0,[H.u(u,0)]);u.A();)u.d.aD(0,b)},
aa:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gR(u))
else C.a.h(u.a,t.l(0,u.gR(u)))
u.aU()
a.cW(this.f)
u=a.dy
s=(u&&C.a).gcQ(u)
if(s!=null&&this.d!=null)s.eH(a,this)
for(u=this.y.a,u=new J.ak(u,u.length,0,[H.u(u,0)]);u.A();)u.d.aa(a)
a.cV()
a.dx.aR()},
gq:function(){var u=this.z
if(u==null){u=D.Q()
this.z=u}return u},
a9:function(a){var u=this.z
if(u!=null)u.E(a)},
a6:function(){return this.a9(null)},
eC:function(a){H.l(a,"$iy")
this.e=null
this.a9(a)},
kg:function(){return this.eC(null)},
eE:function(a){this.a9(H.l(a,"$iy"))},
kh:function(){return this.eE(null)},
eA:function(a){this.a9(H.l(a,"$iy"))},
kf:function(){return this.eA(null)},
ey:function(a){this.a9(H.l(a,"$iy"))},
kc:function(){return this.ey(null)},
kb:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$id",[E.S],"$ad")
for(u=b.length,t=this.gex(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bZ()
o.sae(null)
o.sba(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sae(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a6()},
ke:function(a,b){var u,t
H.i(b,"$id",[E.S],"$ad")
for(u=b.gT(b),t=this.gex();u.A();)u.gJ(u).gq().P(0,t)
this.a6()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfq:function(a,b){this.y=H.i(b,"$iV",[E.S],"$aV")},
$ib5:1}
E.i1.prototype={
fk:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aD(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cy()
t=[V.af]
u.sce(H.c([],t))
u.b=null
u.gq().h(0,new E.i2(this))
this.cy=u
u=new O.cy()
u.sce(H.c([],t))
u.b=null
u.gq().h(0,new E.i3(this))
this.db=u
u=new O.cy()
u.sce(H.c([],t))
u.b=null
u.gq().h(0,new E.i4(this))
this.dx=u
this.siG(H.c([],[O.bL]))
u=this.dy;(u&&C.a).h(u,null)
this.siC(new H.aG([P.n,A.cH]))},
gkv:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.gR(u)
t=this.db
t=u.l(0,t.gR(t))
this.z=t
u=t}return u},
cW:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gcQ(u):a;(u&&C.a).h(u,t)},
cV:function(){var u=this.dy
if(u.length>1)u.pop()},
dP:function(a){var u=a.b
if(u.length===0)throw H.e(P.q("May not cache a shader with no name."))
if(this.fr.e_(0,u))throw H.e(P.q('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a1(0,u,a)},
siG:function(a){this.dy=H.i(a,"$ib",[O.bL],"$ab")},
siC:function(a){this.fr=H.i(a,"$iH",[P.n,A.cH],"$aH")}}
E.i2.prototype={
$1:function(a){var u
H.l(a,"$iy")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.i3.prototype={
$1:function(a){var u
H.l(a,"$iy")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.i4.prototype={
$1:function(a){var u
H.l(a,"$iy")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.e3.prototype={
dd:function(a){H.l(a,"$iy")
this.eI()},
dc:function(){return this.dd(null)},
gjU:function(){var u,t,s
u=Date.now()
t=C.d.a4(P.le(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aD(u,!1)
return s/t},
dF:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.l()
if(typeof u!=="number")return H.k(u)
s=C.i.cN(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.l()
r=C.i.cN(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kE(C.n,this.gky())}},
eI:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.iD(this),{func:1,ret:-1,args:[P.a1]})
C.z.fX(u)
C.z.iv(u,W.lW(t,P.a1))}},
kx:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dF()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aD(r,!1)
s.y=P.le(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aU()
r=s.db
C.a.sk(r.a,0)
r.aU()
r=s.dx
C.a.sk(r.a,0)
r.aU()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aa(this.e)}}catch(q){u=H.ao(q)
t=H.bR(q)
P.fd("Error: "+H.m(u))
P.fd("Stack: "+H.m(t))
throw H.e(u)}}}
E.iD.prototype={
$1:function(a){var u
H.nU(a)
u=this.a
if(u.ch){u.ch=!1
u.kx()}},
$S:33}
Z.ed.prototype={$io1:1}
Z.dj.prototype={
V:function(a){var u,t,s
try{t=a.a
C.b.e5(t,this.e)
C.b.kJ(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ao(s)
t=P.q('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.e(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.ee.prototype={$io2:1}
Z.cl.prototype={
aO:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
V:function(a){var u,t
u=this.a
C.b.ay(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].V(a)},
as:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.e3(s,u[t].e)
C.b.ay(s,this.a.a,null)},
aa:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ay(t,p,r.b)
C.b.jN(t,q.a,q.b,5123,0)
C.b.ay(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.n]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aB(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(t,", ")+"\nAttrs:   "+C.a.C(p,", ")},
sh8:function(a){this.b=H.i(a,"$ib",[Z.bE],"$ab")},
$io9:1}
Z.bE.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c3(this.c)+"'")+"]"}}
Z.bf.prototype={
gd4:function(a){var u,t
u=this.a
t=(u&$.aT().a)!==0?3:0
if((u&$.bx().a)!==0)t+=3
if((u&$.bw().a)!==0)t+=3
if((u&$.by().a)!==0)t+=2
if((u&$.bz().a)!==0)t+=3
if((u&$.dc().a)!==0)t+=3
if((u&$.dd().a)!==0)t+=4
if((u&$.ch().a)!==0)++t
return(u&$.bv().a)!==0?t+4:t},
jp:function(a){var u,t,s
u=$.aT()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bw()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.by()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bz()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dc()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dd()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ch()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bv()
if((t&u.a)!==0)if(s===a)return u
return $.mp()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bf))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.n])
t=this.a
if((t&$.aT().a)!==0)C.a.h(u,"Pos")
if((t&$.bx().a)!==0)C.a.h(u,"Norm")
if((t&$.bw().a)!==0)C.a.h(u,"Binm")
if((t&$.by().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bz().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dc().a)!==0)C.a.h(u,"Clr3")
if((t&$.dd().a)!==0)C.a.h(u,"Clr4")
if((t&$.ch().a)!==0)C.a.h(u,"Weight")
if((t&$.bv().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.C(u,"|")}}
D.fw.prototype={}
D.bZ.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.o(b,u)
if(this.a==null)this.sae(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
P:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[D.y]})
u=this.a
u=u==null?null:C.a.aN(u,b)
if(u===!0){u=this.a
t=(u&&C.a).P(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.aN(u,b)
if(u===!0){u=this.b
t=(u&&C.a).P(u,b)||t}return t},
E:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.y(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.O(P.ll(t,!0,{func:1,ret:-1,args:[D.y]}),new D.fS(u))
t=this.b
if(t!=null){this.sba(H.c([],[{func:1,ret:-1,args:[D.y]}]))
C.a.O(t,new D.fT(u))}return!0},
e4:function(){return this.E(null)},
kz:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.E(t)}}},
b3:function(a){return this.kz(a,!0,!1)},
sae:function(a){this.a=H.i(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")},
sba:function(a){this.b=H.i(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")}}
D.fS.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.fT.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.y.prototype={}
D.bF.prototype={}
D.bG.prototype={}
D.G.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
O.k_.prototype={
aq:function(a,b,c){var u=0,t=P.au(null),s=this
var $async$aq=P.av(function(d,e){if(d===1)return P.ar(e,t)
while(true)switch(u){case 0:u=2
return P.aj(s.ap(H.c(a.split("\n"),[P.n]),b,!1),$async$aq)
case 2:return P.as(null,t)}})
return P.at($async$aq,t)},
ap:function(a,b,c){H.i(a,"$ib",[P.n],"$ab")
return this.kt(a,b,!1)},
kt:function(a,b,c){var u=0,t=P.au(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$ap=P.av(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.l2(o,a.length)){u=4
break}s=6
u=9
return P.aj(p.a2(C.a.j(a,o),b,!1),$async$ap)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.ao(k)
l=P.q("Line "+H.m(J.fe(o,1))+": "+H.m(n))
throw H.e(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.fe(o,1)
u=2
break
case 4:return P.as(null,t)
case 1:return P.ar(r,t)}})
return P.at($async$ap,t)},
a2:function(a,b,c){return this.kr(a,b,!1)},
kr:function(a,b,c){var u=0,t=P.au(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g
var $async$a2=P.av(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
n=J.l6(a,"#")
if(J.l1(n,0))a=J.l7(a,0,n)
a=J.kh(a)
if(J.aU(a)<=0){u=1
break}m=O.lU(a)
if(J.aU(m)<1){u=1
break}case 7:switch(J.U(m,0)){case"newmtl":u=9
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
case 9:k=J.U(m,1)
j=O.aH()
o.c=j
o.b.a1(0,k,j)
u=1
break
case 10:i=O.bs(J.U(m,1))
o.c.r.st(0,V.km(i))
u=1
break
case 11:i=O.bs(J.U(m,1))
o.c.x.st(0,V.km(i))
u=1
break
case 12:i=O.bs(J.U(m,1))
o.c.z.st(0,V.km(i))
u=1
break
case 13:i=O.bs(J.U(m,1))
k=i.length
if(k!==1)H.r(P.q("Shininess may only have 1 number."))
j=o.c.z
if(0>=k){s=H.f(i,0)
u=1
break}j.sa8(i[0])
u=1
break
case 14:i=O.bs(J.U(m,1))
k=i.length
if(k!==1)H.r(P.q("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.f(i,0)
u=1
break}j.seP(0,i[0])
u=1
break
case 15:i=O.bs(J.U(m,1))
k=i.length
if(k!==1)H.r(P.q("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.f(i,0)
u=1
break}k=i[0]
if(typeof k!=="number"){s=H.k(k)
u=1
break}j.seP(0,1-k)
u=1
break
case 16:u=23
return P.aj(o.cm(J.U(m,1),b),$async$a2)
case 23:u=1
break
case 17:u=24
return P.aj(o.cn(J.U(m,1),b),$async$a2)
case 24:u=1
break
case 18:u=25
return P.aj(o.co(J.U(m,1),b),$async$a2)
case 25:u=1
break
case 19:u=26
return P.aj(o.cl(J.U(m,1),b),$async$a2)
case 26:u=1
break
case 20:u=27
return P.aj(o.bt(J.U(m,1),b),$async$a2)
case 27:u=1
break
case 21:u=28
return P.aj(o.bt(J.U(m,1),b),$async$a2)
case 28:u=1
break
case 22:u=1
break
case 8:r=2
u=6
break
case 4:r=3
g=q
l=H.ao(g)
k=P.q('Line: "'+H.m(a)+'": '+H.m(l))
throw H.e(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.as(s,t)
case 2:return P.ar(q,t)}})
return P.at($async$a2,t)},
cm:function(a,b){var u=0,t=P.au(null),s=this,r
var $async$cm=P.av(function(c,d){if(c===1)return P.ar(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.r.sa7(s.a.an(r))
return P.as(null,t)}})
return P.at($async$cm,t)},
cn:function(a,b){var u=0,t=P.au(null),s=this,r
var $async$cn=P.av(function(c,d){if(c===1)return P.ar(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.x.sa7(s.a.an(r))
return P.as(null,t)}})
return P.at($async$cn,t)},
co:function(a,b){var u=0,t=P.au(null),s=this,r
var $async$co=P.av(function(c,d){if(c===1)return P.ar(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.z.sa7(s.a.an(r))
return P.as(null,t)}})
return P.at($async$co,t)},
cl:function(a,b){var u=0,t=P.au(null),s=this,r
var $async$cl=P.av(function(c,d){if(c===1)return P.ar(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.db.sa7(s.a.an(r))
return P.as(null,t)}})
return P.at($async$cl,t)},
bt:function(a,b){var u=0,t=P.au(null),s=this,r
var $async$bt=P.av(function(c,d){if(c===1)return P.ar(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.Q.sa7(s.a.an(r))
return P.as(null,t)}})
return P.at($async$bt,t)},
scg:function(a){this.b=H.i(a,"$iH",[P.n,O.ay],"$aH")}}
O.db.prototype={
skK:function(a){this.b=H.i(a,"$ib",[F.ai],"$ab")}}
O.k0.prototype={
gjQ:function(){var u,t,s
u=this.Q
t=u.y.a
s=t.length
if(s===1){if(0>=s)return H.f(t,0)
return t[0]}return u},
aq:function(a,b,c){var u=0,t=P.au(null),s=this
var $async$aq=P.av(function(d,e){if(d===1)return P.ar(e,t)
while(true)switch(u){case 0:u=2
return P.aj(s.ap(H.c(a.split("\n"),[P.n]),b,!1),$async$aq)
case 2:return P.as(null,t)}})
return P.at($async$aq,t)},
ap:function(a,b,c){H.i(a,"$ib",[P.n],"$ab")
return this.ku(a,b,!1)},
ku:function(a,b,c){var u=0,t=P.au(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$ap=P.av(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.l2(o,a.length)){u=4
break}s=6
u=9
return P.aj(p.a2(C.a.j(a,o),b,!1),$async$ap)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.ao(k)
l=P.q("Line "+H.m(J.fe(o,1))+": "+H.m(n))
throw H.e(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.fe(o,1)
u=2
break
case 4:return P.as(null,t)
case 1:return P.ar(r,t)}})
return P.at($async$ap,t)},
a2:function(a,b,c){return this.ks(a,b,!1)},
ks:function(a,b,c){var u=0,t=P.au(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$a2=P.av(function(d,a0){if(d===1){q=a0
u=r}while(true)switch(u){case 0:r=4
n=J.l6(a,"#")
if(J.l1(n,0))a=J.l7(a,0,n)
a=J.kh(a)
if(J.aU(a)<=0){u=1
break}m=O.lU(a)
if(J.aU(m)<1){u=1
break}case 7:switch(J.U(m,0)){case"v":u=9
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
case 9:k=O.bs(J.U(m,1))
j=k.length
if(j<3)H.r(P.q("Positions must have at least 3 numbers."))
if(j>4)H.r(P.q("Positions must have at most than 4 numbers."))
if(j===4){if(3>=j){s=H.f(k,3)
u=1
break}i=k[3]
h=$.N()
h.toString
if(typeof i!=="number"){s=i.n()
u=1
break}if(!(Math.abs(i-1)<h.a))H.r(P.q("Currently, non-one w values in positions are not supported."))}i=o.b
if(0>=j){s=H.f(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.f(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.f(k,2)
u=1
break}g=[h,g,k[2]]
g=new O.db(new V.aa(g[0],g[1],g[2]))
g.skK(H.c([],[F.ai]))
C.a.h(i,g)
u=1
break
case 10:k=O.bs(J.U(m,1))
j=k.length
if(j<2)H.r(P.q("Textures must have at least 2 numbers."))
if(j>3)H.r(P.q("Textures must have at most than 3 numbers."))
if(j===3){if(2>=j){s=H.f(k,2)
u=1
break}i=k[2]
h=$.N()
h.toString
if(typeof i!=="number"){s=i.n()
u=1
break}if(!(Math.abs(i-0)<h.a))H.r(P.q("Currently, non-zero z values in textures are not supported."))}i=o.c
if(0>=j){s=H.f(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.f(k,1)
u=1
break}h=[h,k[1]]
C.a.h(i,new V.Z(h[0],h[1]))
u=1
break
case 11:k=O.bs(J.U(m,1))
j=k.length
if(j!==3)H.r(P.q("Normals must have exactly 3 numbers."))
i=o.d
if(0>=j){s=H.f(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.f(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.f(k,2)
u=1
break}C.a.h(i,new V.M(h,g,k[2]))
u=1
break
case 12:o.ir(J.U(m,1))
u=1
break
case 13:o.iq(J.U(m,1))
u=1
break
case 14:o.ip(J.U(m,1))
u=1
break
case 15:u=20
return P.aj(o.bu(J.U(m,1),b,!1),$async$a2)
case 20:u=1
break
case 16:j=J.U(m,1)
o.x=H.l(o.e.j(0,j),"$iay")
o.bA()
u=1
break
case 17:o.r=H.P(J.U(m,1))
o.bA()
u=1
break
case 18:o.r=H.P(J.U(m,1))
o.bA()
u=1
break
case 19:u=1
break
case 8:r=2
u=6
break
case 4:r=3
e=q
l=H.ao(e)
j=P.q('Line: "'+H.m(a)+'": '+H.m(l))
throw H.e(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.as(s,t)
case 2:return P.ar(q,t)}})
return P.at($async$a2,t)},
bA:function(){var u,t,s
if(this.z==null||this.y.a.c.length!==0){u=F.kB()
this.y=u
u=E.aE(null,!0,null,"",u,null)
this.z=u
this.Q.y.h(0,u)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.sk(u[s].b,0)}this.z.sa3(this.x)
this.z.a=this.r},
c5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=a.split("/")
t=u.length
if(0>=t)return H.f(u,0)
s=P.kU(u[0],null,null)
r=this.b.length
if(typeof s!=="number")return s.Y()
if(s<-r||s>r||s===0)throw H.e(P.q("The position index, "+s+", was out of range [-"+r+".."+r+"] or 0."))
if(s<0)s=r+s+1;--s
if(t>1){q=u[1]
if(q!=null&&q.length>0){p=P.kU(q,null,null)
o=this.c
r=o.length
if(typeof p!=="number")return p.Y()
if(p<-r||p>r||p===0)throw H.e(P.q("The texture index, "+p+", was out of range [-"+r+".."+r+"] or 0."))
if(p<0)p=r+p+1
n=p-1
if(n<0||n>=r)return H.f(o,n)
m=o[n]}else m=null}else m=null
if(t>2){q=u[2]
if(q!=null&&q.length>0){l=P.kU(q,null,null)
t=this.d
r=t.length
if(typeof l!=="number")return l.Y()
if(l<-r||l>r||l===0)throw H.e(P.q("The normal index, "+l+", was out of range [-"+r+".."+r+"] or 0."))
if(l<0)l=r+l+1
o=l-1
if(o<0||o>=r)return H.f(t,o)
k=t[o]}else k=null}else k=null
t=this.b
if(s<0||s>=t.length)return H.f(t,s)
j=t[s]
for(t=j.b,o=t.length,i=0;i<t.length;t.length===o||(0,H.D)(t),++i){h=t[i]
if(J.a2(h.y,m)&&J.a2(h.r,k))return h}h=F.kI(null,null,null,null,null,null,null,null,0)
t=j.a
if(!J.a2(h.f,t)){h.f=t
t=h.a
if(t!=null)t.a6()}if(!J.a2(h.y,m)){h.y=m
t=h.a
if(t!=null)t.a6()}k=k==null?null:k.w(0,Math.sqrt(k.D(k)))
if(!J.a2(h.r,k)){h.r=k
t=h.a
if(t!=null)t.a6()}this.y.a.h(0,h)
C.a.h(j.b,h)
return h},
ir:function(a){var u,t,s,r
u=O.k3(a)
t=H.c([],[F.ai])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.f(u,r)
C.a.h(t,this.c5(u[r]))}this.y.b.jn(t)},
iq:function(a){var u,t,s,r
u=O.k3(a)
t=H.c([],[F.ai])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.f(u,r)
C.a.h(t,this.c5(u[r]))}this.y.c.jm(t)},
ip:function(a){var u,t,s,r
u=O.k3(a)
t=H.c([],[F.ai])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.f(u,r)
C.a.h(t,this.c5(u[r]))}this.y.d.cu(t)},
bu:function(a,b,c){var u=0,t=P.au(null),s=this,r
var $async$bu=P.av(function(d,e){if(d===1)return P.ar(e,t)
while(true)switch(u){case 0:u=2
return P.aj(O.dL(b+"/"+a,s.a,!1),$async$bu)
case 2:r=e
s.e.aZ(0,r)
return P.as(null,t)}})
return P.at($async$bu,t)},
sim:function(a){this.b=H.i(a,"$ib",[O.db],"$ab")},
siJ:function(a){this.c=H.i(a,"$ib",[V.Z],"$ab")},
shq:function(a){this.d=H.i(a,"$ib",[V.M],"$ab")},
scg:function(a){this.e=H.i(a,"$iH",[P.n,O.ay],"$aH")}}
X.dk.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dk))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dB.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dB))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.hb.prototype={
ko:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kk:function(a){this.c=a.b
this.d.P(0,a.a)
return!1},
sio:function(a){this.d=H.i(a,"$ilA",[P.z],"$alA")}}
X.dF.prototype={}
X.ho.prototype={
b9:function(a,b){var u,t,s,r,q,p,o,n,m
u=new P.aD(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.l()
q=b.b
p=this.ch
if(typeof q!=="number")return q.l()
o=t.a
if(typeof o!=="number")return o.p()
t=t.b
if(typeof t!=="number")return t.p()
n=new V.Z(o+s*r,t+q*p)
p=this.a.gbE()
m=new X.bJ(a,V.bq(),this.x,this.y,this.z,p,n,u,this)
m.b=!0
this.z=u
this.x=n
return m},
cU:function(a,b){this.r=a.a
return!1},
bh:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.f2()
if(typeof u!=="number")return u.eQ()
this.r=(u&~t)>>>0
return!1},
bg:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b9(a,b))
return!0},
kp:function(a){return!1},
hS:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aD(Date.now(),!1)
t=this.f
s=new X.dF(c,a,this.a.gbE(),b,u,this)
s.b=!0
t.E(s)
this.y=u
this.x=V.bq()}}
X.aN.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aN))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bJ.prototype={}
X.hF.prototype={
cb:function(a,b,c){var u,t,s
u=new P.aD(Date.now(),!1)
t=this.a.gbE()
s=new X.bJ(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cU:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.cb(a,b,!0))
return!0},
bh:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.f2()
if(typeof u!=="number")return u.eQ()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.E(this.cb(a,b,!0))
return!0},
bg:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.cb(a,b,!1))
return!0},
kq:function(a,b){return!1}}
X.hV.prototype={}
X.e5.prototype={}
X.iI.prototype={
b9:function(a,b){var u,t,s,r
H.i(a,"$ib",[V.Z],"$ab")
u=new P.aD(Date.now(),!1)
t=a.length>0?a[0]:V.bq()
s=this.a.gbE()
r=new X.e5(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kn:function(a){var u
H.i(a,"$ib",[V.Z],"$ab")
u=this.b
if(u==null)return!1
u.E(this.b9(a,!0))
return!0},
kl:function(a){var u
H.i(a,"$ib",[V.Z],"$ab")
u=this.c
if(u==null)return!1
u.E(this.b9(a,!0))
return!0},
km:function(a){var u
H.i(a,"$ib",[V.Z],"$ab")
u=this.d
if(u==null)return!1
u.E(this.b9(a,!1))
return!0}}
X.ea.prototype={
gbE:function(){var u=this.a
return V.ly(0,0,C.m.gdX(u).c,C.m.gdX(u).d)},
dm:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dB(u,new X.aN(t,a.altKey,a.shiftKey))},
aY:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aN(t,a.altKey,a.shiftKey)},
cs:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aN(t,a.altKey,a.shiftKey)},
aL:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.n()
q=u.top
if(typeof s!=="number")return s.n()
return new V.Z(t-r,s-q)},
bb:function(a){return new V.a_(a.movementX,a.movementY)},
cp:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.Z])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
o=C.i.ar(p.pageX)
C.i.ar(p.pageY)
n=u.left
C.i.ar(p.pageX)
C.a.h(t,new V.Z(o-n,C.i.ar(p.pageY)-u.top))}return t},
aG:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dk(u,new X.aN(t,a.altKey,a.shiftKey))},
cf:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.n()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.n()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
hM:function(a){this.f=!0},
hA:function(a){this.f=!1},
hG:function(a){H.l(a,"$iab")
if(this.f&&this.cf(a))a.preventDefault()},
hQ:function(a){var u
H.l(a,"$ib1")
if(!this.f)return
u=this.dm(a)
this.b.ko(u)},
hO:function(a){var u
H.l(a,"$ib1")
if(!this.f)return
u=this.dm(a)
this.b.kk(u)},
hU:function(a){var u,t,s,r
H.l(a,"$iab")
u=this.a
u.focus()
this.f=!0
this.aY(a)
if(this.x){t=this.aG(a)
s=this.bb(a)
if(this.d.cU(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aG(a)
r=this.aL(a)
if(this.c.cU(t,r))a.preventDefault()},
hY:function(a){var u,t,s
H.l(a,"$iab")
this.aY(a)
u=this.aG(a)
if(this.x){t=this.bb(a)
if(this.d.bh(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bh(u,s))a.preventDefault()},
hK:function(a){var u,t,s
H.l(a,"$iab")
if(!this.cf(a)){this.aY(a)
u=this.aG(a)
if(this.x){t=this.bb(a)
if(this.d.bh(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bh(u,s))a.preventDefault()}},
hW:function(a){var u,t,s
H.l(a,"$iab")
this.aY(a)
u=this.aG(a)
if(this.x){t=this.bb(a)
if(this.d.bg(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bg(u,s))a.preventDefault()},
hI:function(a){var u,t,s
H.l(a,"$iab")
if(!this.cf(a)){this.aY(a)
u=this.aG(a)
if(this.x){t=this.bb(a)
if(this.d.bg(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bg(u,s))a.preventDefault()}},
i_:function(a){var u,t
H.l(a,"$ibg")
this.aY(a)
u=new V.a_((a&&C.y).gjJ(a),C.y.gjK(a)).w(0,180)
if(this.x){if(this.d.kp(u))a.preventDefault()
return}if(this.r)return
t=this.aL(a)
if(this.c.kq(u,t))a.preventDefault()},
i1:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aG(this.y)
s=this.aL(this.y)
this.d.hS(t,s,u)}},
ij:function(a){var u
H.l(a,"$iaR")
this.a.focus()
this.f=!0
this.cs(a)
u=this.cp(a)
if(this.e.kn(u))a.preventDefault()},
ie:function(a){var u
H.l(a,"$iaR")
this.cs(a)
u=this.cp(a)
if(this.e.kl(u))a.preventDefault()},
ih:function(a){var u
H.l(a,"$iaR")
this.cs(a)
u=this.cp(a)
if(this.e.km(u))a.preventDefault()},
sfY:function(a){this.z=H.i(a,"$ib",[[P.cL,P.I]],"$ab")}}
D.bY.prototype={
gq:function(){var u=this.d
if(u==null){u=D.Q()
this.d=u}return u},
bq:function(a){var u
H.l(a,"$iy")
u=this.d
if(u!=null)u.E(a)},
st:function(a,b){var u,t
if(b==null)b=new V.x(1,1,1)
if(!this.c.v(0,b)){u=this.c
this.c=b
t=new D.G("color",u,b,this,[V.x])
t.b=!0
this.bq(t)}},
$ia3:1,
$ib5:1}
D.a3.prototype={$ib5:1}
D.dC.prototype={
gq:function(){var u=this.Q
if(u==null){u=D.Q()
this.Q=u}return u},
bq:function(a){var u=this.Q
if(u!=null)u.E(a)},
dA:function(a){var u
H.l(a,"$iy")
u=this.ch
if(u!=null)u.E(a)},
hR:function(){return this.dA(null)},
i3:function(a){var u,t,s
H.i(a,"$id",[D.a3],"$ad")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(s==null||this.fR(s))return!1}return!0},
hu:function(a,b){var u,t,s,r,q,p,o,n
u=D.a3
H.i(b,"$id",[u],"$ad")
for(t=b.length,s=this.gdz(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=H.l(b[p],"$ia3")
if(o instanceof D.bY)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bZ()
n.sae(null)
n.sba(null)
n.c=null
n.d=0
o.d=n}H.o(s,r)
if(n.a==null)n.sae(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bF(a,b,this,[u])
u.b=!0
this.bq(u)},
i7:function(a,b){var u,t,s,r
u=D.a3
H.i(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gdz();t.A();){r=t.gJ(t)
C.a.P(this.e,r)
r.gq().P(0,s)}u=new D.bG(a,b,this,[u])
u.b=!0
this.bq(u)},
fR:function(a){var u=C.a.aN(this.e,a)
return u},
sfs:function(a){this.e=H.i(a,"$ib",[D.bY],"$ab")},
sft:function(a){this.f=H.i(a,"$ib",[D.dQ],"$ab")},
sfu:function(a){this.r=H.i(a,"$ib",[D.dX],"$ab")},
sfv:function(a){this.x=H.i(a,"$ib",[D.e0],"$ab")},
sfw:function(a){this.y=H.i(a,"$ib",[D.e1],"$ab")},
sfz:function(a){this.z=H.i(a,"$ib",[D.e2],"$ab")},
$ad:function(){return[D.a3]},
$aV:function(){return[D.a3]}}
D.dQ.prototype={$ia3:1,$ib5:1}
D.dX.prototype={$ia3:1,$ib5:1}
D.e0.prototype={$ia3:1,$ib5:1}
D.e1.prototype={$ia3:1,$ib5:1}
D.e2.prototype={$ia3:1,$ib5:1}
V.x.prototype={
p:function(a,b){var u,t,s
u=C.i.p(this.a,b.gkw())
t=C.i.p(this.b,b.gf0())
s=C.i.p(this.c,b.gju())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.x(u,t,s)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.x))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.aC.prototype={
p:function(a,b){var u,t,s,r
u=C.i.p(this.a,b.gkw())
t=C.i.p(this.b,b.gf0())
s=C.i.p(this.c,b.gju())
r=C.i.p(this.d,b.gkN(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aC(u,t,s,r)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aC))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}}
V.fQ.prototype={}
V.dJ.prototype={
ab:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.C])
return u},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dJ))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=this.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=this.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=this.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=this.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.C]
t=V.cc(H.c([this.a,this.d,this.r],u),3,0)
s=V.cc(H.c([this.b,this.e,this.x],u),3,0)
r=V.cc(H.c([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.f(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.f(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.f(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.f(t,1)
n=" "+t[1]+", "
if(1>=p)return H.f(s,1)
n=n+s[1]+", "
if(1>=o)return H.f(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.f(t,2)
u=" "+t[2]+", "
if(2>=p)return H.f(s,2)
u=u+s[2]+", "
if(2>=o)return H.f(r,2)
return n+(u+r[2]+"]")}}
V.af.prototype={
ab:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.C])
return u},
cP:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=this.f
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.k(t)
s=this.b
r=this.e
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.k(r)
q=u*t-s*r
p=this.r
if(typeof p!=="number")return H.k(p)
o=this.c
if(typeof o!=="number")return o.l()
n=u*p-o*r
m=this.x
l=this.d
k=u*m-l*r
j=s*p-o*t
i=s*m-l*t
h=o*m-l*p
g=this.y
f=this.cy
if(typeof g!=="number")return g.l()
e=this.z
d=this.cx
if(typeof e!=="number")return e.l()
c=g*f-e*d
b=this.db
a=this.Q
if(typeof a!=="number")return a.l()
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.N().a)return V.bI()
a8=1/a7
a9=-r
b0=-d
return V.bm((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
l:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.k(t)
s=this.b
r=b2.e
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.k(r)
q=this.c
p=b2.y
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.k(p)
o=this.d
n=b2.cx
m=b2.b
if(typeof m!=="number")return H.k(m)
l=b2.f
if(typeof l!=="number")return H.k(l)
k=b2.z
if(typeof k!=="number")return H.k(k)
j=b2.cy
i=b2.c
if(typeof i!=="number")return H.k(i)
h=b2.r
if(typeof h!=="number")return H.k(h)
g=b2.Q
if(typeof g!=="number")return H.k(g)
f=b2.db
e=b2.d
d=b2.x
c=b2.ch
b=b2.dx
a=this.e
if(typeof a!=="number")return a.l()
a0=this.f
if(typeof a0!=="number")return a0.l()
a1=this.r
if(typeof a1!=="number")return a1.l()
a2=this.x
a3=this.y
if(typeof a3!=="number")return a3.l()
a4=this.z
if(typeof a4!=="number")return a4.l()
a5=this.Q
if(typeof a5!=="number")return a5.l()
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.bm(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cY:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
t=a.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.k(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.k(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.k(p)
o=this.e
if(typeof o!=="number")return o.l()
n=this.f
if(typeof n!=="number")return n.l()
m=this.r
if(typeof m!=="number")return m.l()
l=this.y
if(typeof l!=="number")return l.l()
k=this.z
if(typeof k!=="number")return k.l()
j=this.Q
if(typeof j!=="number")return j.l()
return new V.M(u*t+s*r+q*p,o*t+n*r+m*p,l*t+k*r+j*p)},
bm:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
t=a.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.k(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.k(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.k(p)
o=this.e
if(typeof o!=="number")return o.l()
n=this.f
if(typeof n!=="number")return n.l()
m=this.r
if(typeof m!=="number")return m.l()
l=this.y
if(typeof l!=="number")return l.l()
k=this.z
if(typeof k!=="number")return k.l()
j=this.Q
if(typeof j!=="number")return j.l()
return new V.aa(u*t+s*r+q*p+this.d,o*t+n*r+m*p+this.x,l*t+k*r+j*p+this.ch)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
u=b.e
t=this.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=this.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=this.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.x-this.x)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.L()},
er:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.C]
t=V.cc(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.cc(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.cc(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.cc(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.f(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.f(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.f(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.f(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.f(t,1)
l=l+t[1]+", "
if(1>=o)return H.f(s,1)
l=l+s[1]+", "
if(1>=n)return H.f(r,1)
l=l+r[1]+", "
if(1>=m)return H.f(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.f(t,2)
p=p+t[2]+", "
if(2>=o)return H.f(s,2)
p=p+s[2]+", "
if(2>=n)return H.f(r,2)
p=p+r[2]+", "
if(2>=m)return H.f(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.f(t,3)
l=l+t[3]+", "
if(3>=o)return H.f(s,3)
l=l+s[3]+", "
if(3>=n)return H.f(r,3)
l=l+r[3]+", "
if(3>=m)return H.f(q,3)
return p+(l+q[3]+"]")},
L:function(){return this.er("",3,0)},
B:function(a){return this.er(a,3,0)}}
V.Z.prototype={
p:function(a,b){var u,t,s,r
u=this.a
t=b.a
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.k(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.k(r)
return new V.Z(u+t,s+r)},
n:function(a,b){var u,t,s,r
u=this.a
t=b.a
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.k(r)
return new V.Z(u-t,s-r)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.aa.prototype={
p:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.k(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.k(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.k(p)
return new V.aa(u+t,s+r,q+p)},
n:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.k(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.k(p)
return new V.aa(u-t,s-r,q-p)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.aO.prototype={
p:function(a,b){return new V.aO(C.d.p(this.a,b.gkX(b)),C.d.p(this.b,b.gkY(b)),C.d.p(this.c,b.gkZ(b)),C.d.p(this.d,b.gkW(b)))},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aO))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}}
V.dS.prototype={
gaB:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dS))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}}
V.a_.prototype={
cR:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.k(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.k(r)
return u*t+s*r},
p:function(a,b){var u,t,s
u=this.a
t=b.gkQ(b)
if(typeof u!=="number")return u.p()
t=C.i.p(u,t)
u=this.b
s=b.gkR(b)
if(typeof u!=="number")return u.p()
return new V.a_(t,C.i.p(u,s))},
l:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.l()
t=this.b
if(typeof t!=="number")return t.l()
return new V.a_(u*b,t*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.lG
if(u==null){u=new V.a_(0,0)
$.lG=u}return u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.a_(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.M.prototype={
cR:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r,q,p
u=this.a
t=a.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.k(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.k(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.k(p)
return u*t+s*r+q*p},
be:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.k(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.k(r)
q=a.a
if(typeof q!=="number")return H.k(q)
p=this.a
if(typeof p!=="number")return p.l()
return new V.M(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.k(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.k(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.k(p)
return new V.M(u+t,s+r,q+p)},
M:function(a){var u,t,s
u=this.a
if(typeof u!=="number")return u.M()
t=this.b
if(typeof t!=="number")return t.M()
s=this.c
if(typeof s!=="number")return s.M()
return new V.M(-u,-t,-s)},
w:function(a,b){var u,t,s
if(Math.abs(b-0)<$.N().a)return V.ec()
u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
s=this.c
if(typeof s!=="number")return s.w()
return new V.M(u/b,t/b,s/b)},
eu:function(){var u,t
u=this.a
t=$.N()
t.toString
if(typeof u!=="number")return H.k(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.k(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.k(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
U.fx.prototype={
c6:function(a){var u,t,s
u=this.a
t=this.c
s=this.b
if(u)return V.o0(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gq:function(){var u=this.y
if(u==null){u=D.Q()
this.y=u}return u},
U:function(a){var u=this.y
if(u!=null)u.E(a)},
sd_:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.G("wrap",u,b,this,[P.a5])
u.b=!0
this.U(u)}},
scS:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.N().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.c6(t)}u=new D.G("maximumLocation",u,this.b,this,[P.C])
u.b=!0
this.U(u)}},
scT:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.N().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.c6(t)}u=new D.G("minimumLocation",u,this.c,this,[P.C])
u.b=!0
this.U(u)}},
sao:function(a,b){var u
b=this.c6(b)
u=this.d
if(!(Math.abs(u-b)<$.N().a)){this.d=b
u=new D.G("location",u,b,this,[P.C])
u.b=!0
this.U(u)}},
sew:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.N().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.G("maximumVelocity",u,a,this,[P.C])
u.b=!0
this.U(u)}},
sX:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.N().a)){this.f=a
u=new D.G("velocity",u,a,this,[P.C])
u.b=!0
this.U(u)}},
se0:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.N().a)){this.x=a
u=new D.G("dampening",u,a,this,[P.C])
u.b=!0
this.U(u)}},
aD:function(a,b){var u,t,s,r,q
u=this.f
t=$.N().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sao(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.N().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sX(s)}}}
U.dm.prototype={
gq:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
sR:function(a,b){var u,t,s
if(b==null)b=V.bI()
if(!J.a2(this.a,b)){u=this.a
this.a=b
t=new D.G("matrix",u,b,this,[V.af])
t.b=!0
s=this.b
if(s!=null)s.E(t)}},
c0:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dm))return!1
return J.a2(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.cu.prototype={
gq:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
U:function(a){var u
H.l(a,"$iy")
u=this.e
if(u!=null)u.E(a)},
aw:function(){return this.U(null)},
hs:function(a,b){var u,t,s,r,q,p,o,n
u=U.am
H.i(b,"$id",[u],"$ad")
for(t=b.length,s=this.gbs(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.o(s,r)
if(n.a==null)n.sae(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bF(a,b,this,[u])
u.b=!0
this.U(u)},
i5:function(a,b){var u,t,s
u=U.am
H.i(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gbs();t.A();)t.gJ(t).gq().P(0,s)
u=new D.bG(a,b,this,[u])
u.b=!0
this.U(u)},
c0:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.Y()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ak(u,u.length,0,[H.u(u,0)]),s=null;u.A();){t=u.d
if(t!=null){r=t.c0(0,b,c)
if(r!=null)s=s==null?r:r.l(0,s)}}this.f=s==null?V.bI():s
u=this.e
if(u!=null)u.b3(0)}return this.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cu))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.a2(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ad:function(){return[U.am]},
$aV:function(){return[U.am]},
$iam:1}
U.am.prototype={}
U.eb.prototype={
gq:function(){var u=this.fx
if(u==null){u=D.Q()
this.fx=u}return u},
U:function(a){var u
H.l(a,"$iy")
u=this.fx
if(u!=null)u.E(a)},
aw:function(){return this.U(null)},
jq:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.Q()
u.b=t
u=t}else u=t
u.h(0,this.ghj())
u=this.a.c
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.ghl())
u=this.a.c
t=u.c
if(t==null){t=D.Q()
u.c=t
u=t}else u=t
u.h(0,this.ghn())
u=this.a.d
t=u.f
if(t==null){t=D.Q()
u.f=t
u=t}else u=t
u.h(0,this.ghf())
u=this.a.d
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.ghh())
u=this.a.e
t=u.b
if(t==null){t=D.Q()
u.b=t
u=t}else u=t
u.h(0,this.giQ())
u=this.a.e
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.giO())
u=this.a.e
t=u.c
if(t==null){t=D.Q()
u.c=t
u=t}else u=t
u.h(0,this.giM())
return!0},
av:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.M()
u=-u}if(this.r){if(typeof t!=="number")return t.M()
t=-t}return new V.a_(u,t)},
hk:function(a){a=H.j(H.l(a,"$iy"),"$ibJ")
if(!J.a2(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hm:function(a){var u,t,s,r,q,p,o
a=H.j(H.l(a,"$iy"),"$ibJ")
if(!this.cx)return
if(this.ch){u=a.d.n(0,a.y)
u=new V.a_(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.k(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.n(0,a.y)
u=this.av(new V.a_(t.a,t.b).l(0,2).w(0,u.gaB()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.M()
s=this.y
if(typeof s!=="number")return H.k(s)
t.sX(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.M()
t=this.x
if(typeof t!=="number")return H.k(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=this.av(new V.a_(s.a,s.b).l(0,2).w(0,u.gaB()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.k(p)
o=this.cy
if(typeof o!=="number")return H.k(o)
s.sao(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.k(q)
s=this.db
if(typeof s!=="number")return H.k(s)
o.sao(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.n(0,a.z)
this.dx=this.av(new V.a_(t.a,t.b).l(0,2).w(0,u.gaB()))}this.aw()},
ho:function(a){var u,t,s
H.l(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.M()
s=this.y
if(typeof s!=="number")return H.k(s)
u.sX(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.M()
u=this.x
if(typeof u!=="number")return H.k(u)
s.sX(-t*10*u)
this.aw()}},
hg:function(a){if(H.j(H.l(a,"$iy"),"$idF").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hi:function(a){var u,t,s,r,q,p,o
a=H.j(H.l(a,"$iy"),"$ibJ")
if(!J.a2(this.d,a.x.b))return
u=a.c
t=a.d
s=t.n(0,a.y)
r=this.av(new V.a_(s.a,s.b).l(0,2).w(0,u.gaB()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.k(p)
o=this.cy
if(typeof o!=="number")return H.k(o)
s.sao(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.k(q)
s=this.db
if(typeof s!=="number")return H.k(s)
o.sao(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.n(0,a.z)
this.dx=this.av(new V.a_(t.a,t.b).l(0,2).w(0,u.gaB()))
this.aw()},
iR:function(a){H.l(a,"$iy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
iP:function(a){var u,t,s,r,q,p,o
a=H.j(H.l(a,"$iy"),"$ie5")
if(!this.cx)return
if(this.ch){u=a.d.n(0,a.y)
u=new V.a_(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.k(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.n(0,a.y)
u=this.av(new V.a_(t.a,t.b).l(0,2).w(0,u.gaB()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.M()
s=this.y
if(typeof s!=="number")return H.k(s)
t.sX(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.M()
t=this.x
if(typeof t!=="number")return H.k(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=this.av(new V.a_(s.a,s.b).l(0,2).w(0,u.gaB()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.k(p)
o=this.cy
if(typeof o!=="number")return H.k(o)
s.sao(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.k(q)
s=this.db
if(typeof s!=="number")return H.k(s)
o.sao(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.n(0,a.z)
this.dx=this.av(new V.a_(t.a,t.b).l(0,2).w(0,u.gaB()))}this.aw()},
iN:function(a){var u,t,s
H.l(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.M()
s=this.y
if(typeof s!=="number")return H.k(s)
u.sX(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.M()
u=this.x
if(typeof u!=="number")return H.k(u)
s.sX(-t*10*u)
this.aw()}},
c0:function(a,b,c){var u,t,s
u=this.dy
t=b.e
if(typeof u!=="number")return u.Y()
if(u<t){this.dy=t
s=b.y
this.c.aD(0,s)
this.b.aD(0,s)
this.fr=V.ln(this.b.d).l(0,V.kw(this.c.d))}return this.fr},
$iam:1}
M.dl.prototype={
gq:function(){var u=this.f
if(u==null){u=D.Q()
this.f=u}return u},
W:function(a){var u
H.l(a,"$iy")
u=this.f
if(u!=null)u.E(a)},
b6:function(){return this.W(null)},
i9:function(a,b){var u,t,s,r,q,p,o,n
u=M.az
H.i(b,"$id",[u],"$ad")
for(t=b.length,s=this.gZ(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.o(s,r)
if(n.a==null)n.sae(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bF(a,b,this,[u])
u.b=!0
this.W(u)},
ib:function(a,b){var u,t,s
u=M.az
H.i(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gZ();t.A();)t.gJ(t).gq().P(0,s)
u=new D.bG(a,b,this,[u])
u.b=!0
this.W(u)},
aa:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ak(u,u.length,0,[H.u(u,0)]);u.A();){t=u.d
if(t!=null)t.aa(a)}this.e=!1},
$ad:function(){return[M.az]},
$aV:function(){return[M.az]},
$iaz:1}
M.dp.prototype={
gq:function(){var u=this.f
if(u==null){u=D.Q()
this.f=u}return u},
W:function(a){var u
H.l(a,"$iy")
u=this.f
if(u!=null)u.E(a)},
b6:function(){return this.W(null)},
sbc:function(a){var u,t
if(a==null)a=new X.h4()
u=this.a
if(u!==a){if(u!=null)u.gq().P(0,this.gZ())
t=this.a
this.a=a
a.gq().h(0,this.gZ())
u=new D.G("camera",t,this.a,this,[X.bU])
u.b=!0
this.W(u)}},
sbj:function(a,b){var u,t
if(b==null)b=X.kp(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gq().P(0,this.gZ())
t=this.b
this.b=b
b.gq().h(0,this.gZ())
u=new D.G("target",t,this.b,this,[X.cM])
u.b=!0
this.W(u)}},
sa3:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().P(0,this.gZ())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.gZ())
u=new D.G("technique",t,this.c,this,[O.bL])
u.b=!0
this.W(u)}},
aa:function(a){a.cW(this.c)
this.b.V(a)
this.a.V(a)
this.d.aD(0,a)
this.d.aa(a)
this.a.as(a)
this.b.toString
a.cV()},
$iaz:1}
M.dt.prototype={
W:function(a){var u
H.l(a,"$iy")
u=this.x
if(u!=null)u.E(a)},
b6:function(){return this.W(null)},
hC:function(a,b){var u,t,s,r,q,p,o,n
u=E.S
H.i(b,"$id",[u],"$ad")
for(t=b.length,s=this.gZ(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bZ()
n.sae(null)
n.sba(null)
n.c=null
n.d=0
o.z=n}H.o(s,r)
if(n.a==null)n.sae(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bF(a,b,this,[u])
u.b=!0
this.W(u)},
hE:function(a,b){var u,t,s
u=E.S
H.i(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gZ();t.A();)t.gJ(t).gq().P(0,s)
u=new D.bG(a,b,this,[u])
u.b=!0
this.W(u)},
sbc:function(a){var u,t
if(a==null)a=X.ls(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gq().P(0,this.gZ())
t=this.a
this.a=a
a.gq().h(0,this.gZ())
u=new D.G("camera",t,this.a,this,[X.bU])
u.b=!0
this.W(u)}},
sbj:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gq().P(0,this.gZ())
t=this.b
this.b=b
b.gq().h(0,this.gZ())
u=new D.G("target",t,this.b,this,[X.cM])
u.b=!0
this.W(u)}},
gq:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u},
aa:function(a){var u
a.cW(this.c)
this.b.V(a)
this.a.V(a)
for(u=this.d.a,u=new J.ak(u,u.length,0,[H.u(u,0)]);u.A();)u.d.aD(0,a)
for(u=this.d.a,u=new J.ak(u,u.length,0,[H.u(u,0)]);u.A();)u.d.aa(a)
this.a.toString
a.cy.aR()
a.db.aR()
this.b.toString
a.cV()},
sfO:function(a,b){this.d=H.i(b,"$iV",[E.S],"$aV")},
$iaz:1}
M.az.prototype={}
A.df.prototype={}
A.fj.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jP:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
C.b.e5(r.a,r.c)}},
e2:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
C.b.e3(r.a,r.c)}}}
A.dI.prototype={
fg:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.bK("")
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
a6.j_(u)
a6.j6(u)
a6.j0(u)
a6.je(u)
a6.jf(u)
a6.j8(u)
a6.jj(u)
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
u=new P.bK("")
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
q.j3(u)
q.iZ(u)
q.j1(u)
q.j4(u)
q.jc(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.ja(u)
q.jb(u)}q.j7(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.h){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.f){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.c:m+="   return 1.0;\n"
u.a=m
break
case C.h:m+="   return alpha;\n"
u.a=m
break
case C.e:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.f:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.c([],[P.n])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.C(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.j2(u)
q.j9(u)
q.jd(u)
q.jg(u)
q.jh(u)
q.ji(u)
q.j5(u)}m=u.a+="// === Main ===\n"
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
j=H.c([],[P.n])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(q.c!==C.c)u.a+="   setDiffuseColor();\n"
if(q.d!==C.c)u.a+="   setInvDiffuseColor();\n"
if(q.e!==C.c)u.a+="   setSpecularColor();\n"
if(q.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(q.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(q.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(q.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(q.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(q.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(q.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(q.a!==C.c)C.a.h(j,"emission()")
if(q.r!==C.c)C.a.h(j,"reflect(refl)")
if(q.x!==C.c)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.C(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.es(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.j(this.y.m(0,"invViewMat"),"$iap")
if(t)this.dy=H.j(this.y.m(0,"objMat"),"$iap")
if(r)this.fr=H.j(this.y.m(0,"viewObjMat"),"$iap")
this.fy=H.j(this.y.m(0,"projViewObjMat"),"$iap")
if(a6.x2)this.k1=H.j(this.y.m(0,"txt2DMat"),"$icT")
if(a6.y1)this.k2=H.j(this.y.m(0,"txtCubeMat"),"$iap")
if(a6.y2)this.k3=H.j(this.y.m(0,"colorMat"),"$iap")
this.sfJ(H.c([],[A.ap]))
t=a6.aA
if(t>0){this.k4=H.l(this.y.m(0,"bendMatCount"),"$iL")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.r(P.q("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.j(g,"$iap"))}}t=a6.a
if(t!==C.c){this.r2=H.j(this.y.m(0,"emissionClr"),"$iJ")
switch(t){case C.c:break
case C.h:break
case C.e:this.rx=H.j(this.y.m(0,"emissionTxt"),"$ian")
this.x1=H.j(this.y.m(0,"nullEmissionTxt"),"$iL")
break
case C.f:this.ry=H.j(this.y.m(0,"emissionTxt"),"$iah")
this.x1=H.j(this.y.m(0,"nullEmissionTxt"),"$iL")
break}}t=a6.b
if(t!==C.c){this.x2=H.j(this.y.m(0,"ambientClr"),"$iJ")
switch(t){case C.c:break
case C.h:break
case C.e:this.y1=H.j(this.y.m(0,"ambientTxt"),"$ian")
this.aA=H.j(this.y.m(0,"nullAmbientTxt"),"$iL")
break
case C.f:this.y2=H.j(this.y.m(0,"ambientTxt"),"$iah")
this.aA=H.j(this.y.m(0,"nullAmbientTxt"),"$iL")
break}}t=a6.c
if(t!==C.c){this.am=H.j(this.y.m(0,"diffuseClr"),"$iJ")
switch(t){case C.c:break
case C.h:break
case C.e:this.bF=H.j(this.y.m(0,"diffuseTxt"),"$ian")
this.bG=H.j(this.y.m(0,"nullDiffuseTxt"),"$iL")
break
case C.f:this.e6=H.j(this.y.m(0,"diffuseTxt"),"$iah")
this.bG=H.j(this.y.m(0,"nullDiffuseTxt"),"$iL")
break}}t=a6.d
if(t!==C.c){this.bH=H.j(this.y.m(0,"invDiffuseClr"),"$iJ")
switch(t){case C.c:break
case C.h:break
case C.e:this.e7=H.j(this.y.m(0,"invDiffuseTxt"),"$ian")
this.bI=H.j(this.y.m(0,"nullInvDiffuseTxt"),"$iL")
break
case C.f:this.e8=H.j(this.y.m(0,"invDiffuseTxt"),"$iah")
this.bI=H.j(this.y.m(0,"nullInvDiffuseTxt"),"$iL")
break}}t=a6.e
if(t!==C.c){this.bL=H.j(this.y.m(0,"shininess"),"$iX")
this.bJ=H.j(this.y.m(0,"specularClr"),"$iJ")
switch(t){case C.c:break
case C.h:break
case C.e:this.e9=H.j(this.y.m(0,"specularTxt"),"$ian")
this.bK=H.j(this.y.m(0,"nullSpecularTxt"),"$iL")
break
case C.f:this.ea=H.j(this.y.m(0,"specularTxt"),"$iah")
this.bK=H.j(this.y.m(0,"nullSpecularTxt"),"$iL")
break}}switch(a6.f){case C.c:break
case C.h:break
case C.e:this.eb=H.j(this.y.m(0,"bumpTxt"),"$ian")
this.bM=H.j(this.y.m(0,"nullBumpTxt"),"$iL")
break
case C.f:this.ec=H.j(this.y.m(0,"bumpTxt"),"$iah")
this.bM=H.j(this.y.m(0,"nullBumpTxt"),"$iL")
break}if(a6.dy){this.ed=H.j(this.y.m(0,"envSampler"),"$iah")
this.ee=H.j(this.y.m(0,"nullEnvTxt"),"$iL")
t=a6.r
if(t!==C.c){this.bN=H.j(this.y.m(0,"reflectClr"),"$iJ")
switch(t){case C.c:break
case C.h:break
case C.e:this.ef=H.j(this.y.m(0,"reflectTxt"),"$ian")
this.bO=H.j(this.y.m(0,"nullReflectTxt"),"$iL")
break
case C.f:this.eg=H.j(this.y.m(0,"reflectTxt"),"$iah")
this.bO=H.j(this.y.m(0,"nullReflectTxt"),"$iL")
break}}t=a6.x
if(t!==C.c){this.bP=H.j(this.y.m(0,"refraction"),"$iX")
this.bQ=H.j(this.y.m(0,"refractClr"),"$iJ")
switch(t){case C.c:break
case C.h:break
case C.e:this.eh=H.j(this.y.m(0,"refractTxt"),"$ian")
this.bR=H.j(this.y.m(0,"nullRefractTxt"),"$iL")
break
case C.f:this.ei=H.j(this.y.m(0,"refractTxt"),"$iah")
this.bR=H.j(this.y.m(0,"nullRefractTxt"),"$iL")
break}}}t=a6.y
if(t!==C.c){this.bS=H.j(this.y.m(0,"alpha"),"$iX")
switch(t){case C.c:break
case C.h:break
case C.e:this.ej=H.j(this.y.m(0,"alphaTxt"),"$ian")
this.bT=H.j(this.y.m(0,"nullAlphaTxt"),"$iL")
break
case C.f:this.ek=H.j(this.y.m(0,"alphaTxt"),"$iah")
this.bT=H.j(this.y.m(0,"nullAlphaTxt"),"$iL")
break}}this.sfV(H.c([],[A.cS]))
this.sil(H.c([],[A.cU]))
this.siE(H.c([],[A.cV]))
this.siU(H.c([],[A.cW]))
this.siV(H.c([],[A.cX]))
this.siW(H.c([],[A.cY]))
if(a6.k2){t=a6.z
if(t>0){this.el=H.l(this.y.m(0,"dirLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iJ")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iJ")
s=this.cH;(s&&C.a).h(s,new A.cS(h,g,f))}}t=a6.Q
if(t>0){this.em=H.l(this.y.m(0,"pntLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iJ")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iJ")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iJ")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iX")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iX")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iX")
s=this.cI;(s&&C.a).h(s,new A.cU(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.en=H.l(this.y.m(0,"spotLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iJ")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iJ")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iJ")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iJ")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iX")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iX")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iX")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iX")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iX")
s=this.cJ;(s&&C.a).h(s,new A.cV(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eo=H.l(this.y.m(0,"txtDirLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iJ")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iJ")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iJ")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iJ")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iJ")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iL")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$ian")
s=this.cK;(s&&C.a).h(s,new A.cW(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.ep=H.l(this.y.m(0,"txtPntLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iJ")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iJ")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$icT")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iJ")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iL")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iX")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iX")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iX")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iah")
s=this.cL;(s&&C.a).h(s,new A.cX(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eq=H.l(this.y.m(0,"txtSpotLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iJ")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iJ")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iJ")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iJ")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iJ")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iL")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iJ")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iX")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iX")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iX")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a3,"$iX")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a4,"$iX")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a5,"$ian")
s=this.cM;(s&&C.a).h(s,new A.cY(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
al:function(a,b,c){if(c==null||!c.d)C.b.I(b.a,b.d,1)
else{a.f4(c)
C.b.I(b.a,b.d,0)}},
af:function(a,b,c){if(c==null||c.d<6)C.b.I(b.a,b.d,1)
else{a.d3(c)
C.b.I(b.a,b.d,0)}},
sfJ:function(a){this.r1=H.i(a,"$ib",[A.ap],"$ab")},
sfV:function(a){this.cH=H.i(a,"$ib",[A.cS],"$ab")},
sil:function(a){this.cI=H.i(a,"$ib",[A.cU],"$ab")},
siE:function(a){this.cJ=H.i(a,"$ib",[A.cV],"$ab")},
siU:function(a){this.cK=H.i(a,"$ib",[A.cW],"$ab")},
siV:function(a){this.cL=H.i(a,"$ib",[A.cX],"$ab")},
siW:function(a){this.cM=H.i(a,"$ib",[A.cY],"$ab")}}
A.hv.prototype={
j_:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aA+"];\n"
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
j6:function(a){var u
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
j0:function(a){var u
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
je:function(a){var u,t
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
jf:function(a){var u,t
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
j8:function(a){var u
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
jj:function(a){var u
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
aH:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.f(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.c2(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
j3:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aH(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   return emissionClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
iZ:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aH(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   return ambientClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
j1:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aH(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
j4:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aH(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
jc:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aH(a,u,"specular")
t=a.a+="uniform float shininess;\n"
t+="vec3 specularColor;\n"
a.a=t
t+="\n"
a.a=t
t+="void setSpecularColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
j7:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.h:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.f:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break}u+="vec3 normal()\n"
a.a=u
u+="{\n"
a.a=u
switch(t){case C.c:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.h:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.e:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.f:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
ja:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aH(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jb:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aH(a,u,"refract")
t=a.a+="uniform float refraction;\n"
t+="\n"
a.a=t
t+="vec3 refract(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.h:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
j2:function(a){var u,t
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
j9:function(a){var u,t
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
jd:function(a){var u,t
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
jg:function(a){var u,t,s
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
jh:function(a){var u,t,s
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
ji:function(a){var u,t,s
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
j5:function(a){var u
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
A.cS.prototype={}
A.cW.prototype={}
A.cU.prototype={}
A.cX.prototype={}
A.cV.prototype={}
A.cY.prototype={}
A.cH.prototype={
d8:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
es:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.dn(b,35633)
this.f=this.dn(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dQ(u,t,this.e)
C.b.dQ(u,this.r,this.f)
C.b.k6(u,this.r)
if(!H.m_(C.b.c1(u,this.r,35714))){s=C.b.eX(u,this.r)
C.b.jH(u,this.r)
H.r(P.q("Failed to link shader: "+H.m(s)))}this.iz()
this.iB()},
V:function(a){C.b.cZ(a.a,this.r)
this.x.jP()},
dn:function(a,b){var u,t,s
u=this.a
t=C.b.jF(u,b)
C.b.f5(u,t,a)
C.b.jA(u,t)
if(!H.m_(C.b.eZ(u,t,35713))){s=C.b.eY(u,t)
C.b.jI(u,t)
throw H.e(P.q("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
iz:function(){var u,t,s,r,q,p
u=H.c([],[A.df])
t=this.a
s=H.a6(C.b.c1(t,this.r,35721))
if(typeof s!=="number")return H.k(s)
r=0
for(;r<s;++r){q=C.b.eS(t,this.r,r)
p=C.b.eU(t,this.r,q.name)
C.a.h(u,new A.df(t,q.name,p))}this.x=new A.fj(u)},
iB:function(){var u,t,s,r,q,p
u=H.c([],[A.e6])
t=this.a
s=H.a6(C.b.c1(t,this.r,35718))
if(typeof s!=="number")return H.k(s)
r=0
for(;r<s;++r){q=C.b.eT(t,this.r,r)
p=C.b.f_(t,this.r,q.name)
C.a.h(u,this.jG(q.type,q.size,q.name,p))}this.y=new A.iV(u)},
aW:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.L(u,t,b,c)
else return A.kG(u,t,b,a,c)},
fS:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.an(u,t,b,c)
else return A.kG(u,t,b,a,c)},
fT:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ah(u,t,b,c)
else return A.kG(u,t,b,a,c)},
bB:function(a,b){return new P.ep(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
jG:function(a,b,c,d){switch(a){case 5120:return this.aW(b,c,d)
case 5121:return this.aW(b,c,d)
case 5122:return this.aW(b,c,d)
case 5123:return this.aW(b,c,d)
case 5124:return this.aW(b,c,d)
case 5125:return this.aW(b,c,d)
case 5126:return new A.X(this.a,this.r,c,d)
case 35664:return new A.iQ(this.a,this.r,c,d)
case 35665:return new A.J(this.a,this.r,c,d)
case 35666:return new A.iT(this.a,this.r,c,d)
case 35667:return new A.iR(this.a,this.r,c,d)
case 35668:return new A.iS(this.a,this.r,c,d)
case 35669:return new A.iU(this.a,this.r,c,d)
case 35674:return new A.iW(this.a,this.r,c,d)
case 35675:return new A.cT(this.a,this.r,c,d)
case 35676:return new A.ap(this.a,this.r,c,d)
case 35678:return this.fS(b,c,d)
case 35680:return this.fT(b,c,d)
case 35670:throw H.e(this.bB("BOOL",c))
case 35671:throw H.e(this.bB("BOOL_VEC2",c))
case 35672:throw H.e(this.bB("BOOL_VEC3",c))
case 35673:throw H.e(this.bB("BOOL_VEC4",c))
default:throw H.e(P.q("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bX.prototype={
i:function(a){return this.b}}
A.dW.prototype={}
A.e6.prototype={}
A.iV.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
m:function(a,b){var u=this.j(0,b)
if(u==null)throw H.e(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
jT:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r)s+=u[r].i(0)+a
return s},
L:function(){return this.jT("\n")}}
A.L.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.iR.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.iS.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.iU.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.iP.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
siX:function(a){this.e=H.i(a,"$ib",[P.z],"$ab")}}
A.X.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.iQ.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.J.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.iW.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cT.prototype={
ak:function(a){var u=new Float32Array(H.d8(H.i(a,"$ib",[P.C],"$ab")))
C.b.eN(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.ap.prototype={
ak:function(a){var u=new Float32Array(H.d8(H.i(a,"$ib",[P.C],"$ab")))
C.b.eO(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.an.prototype={
f4:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.I(t,s,0)
else C.b.I(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ah.prototype={
d3:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.I(t,s,0)
else C.b.I(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.k6.prototype={
$1:function(a){return 1},
$S:41}
F.a9.prototype={
fI:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.ec()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.eu())return
return q.w(0,Math.sqrt(q.D(q)))},
fM:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.n(0,t)
u=new V.M(u.a,u.b,u.c)
q=u.w(0,Math.sqrt(u.D(u)))
u=r.n(0,t)
u=new V.M(u.a,u.b,u.c)
u=q.be(u.w(0,Math.sqrt(u.D(u))))
return u.w(0,Math.sqrt(u.D(u)))},
cD:function(){if(this.d!=null)return!0
var u=this.fI()
if(u==null){u=this.fM()
if(u==null)return!1}this.d=u
this.a.a.a6()
return!0},
fH:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.ec()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.eu())return
return q.w(0,Math.sqrt(q.D(q)))},
fL:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
t=j.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.k(t)
i=u-t
if(Math.abs(i-0)<$.N().a){u=m.n(0,p)
u=new V.M(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.D(u)))
u=j.a
k=k.a
if(typeof u!=="number")return u.n()
if(typeof k!=="number")return H.k(k)
if(u-k<0)h=h.M(0)}else{t=l.b
if(typeof t!=="number")return H.k(t)
g=(u-t)/i
t=m.n(0,p)
u=t.a
if(typeof u!=="number")return u.l()
r=t.b
if(typeof r!=="number")return r.l()
t=t.c
if(typeof t!=="number")return t.l()
q=p.a
if(typeof q!=="number")return H.k(q)
o=p.b
if(typeof o!=="number")return H.k(o)
n=p.c
if(typeof n!=="number")return H.k(n)
n=new V.aa(u*g+q,r*g+o,t*g+n).n(0,s)
n=new V.M(n.a,n.b,n.c)
h=n.w(0,Math.sqrt(n.D(n)))
j=j.a
k=k.a
if(typeof j!=="number")return j.n()
if(typeof k!=="number")return H.k(k)
l=l.a
if(typeof l!=="number")return H.k(l)
if((j-k)*g+k-l<0)h=h.M(0)}u=this.d
if(u!=null){f=u.w(0,Math.sqrt(u.D(u)))
u=f.be(h)
u=u.w(0,Math.sqrt(u.D(u))).be(f)
h=u.w(0,Math.sqrt(u.D(u)))}return h},
cB:function(){if(this.e!=null)return!0
var u=this.fH()
if(u==null){u=this.fL()
if(u==null)return!1}this.e=u
this.a.a.a6()
return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.j.ai(J.aB(u.e),0)+", "+C.j.ai(J.aB(this.b.e),0)+", "+C.j.ai(J.aB(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
L:function(){return this.B("")}}
F.b2.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.j.ai(J.aB(u.e),0)+", "+C.j.ai(J.aB(this.b.e),0)},
L:function(){return this.B("")}}
F.bp.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.ai(J.aB(u.e),0)},
L:function(){return this.B("")}}
F.dU.prototype={
gq:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
b0:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.b0()||!1
if(!this.a.b0())t=!1
u=this.e
if(u!=null)u.b3(0)
return t},
dU:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aT()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bx().a)!==0)++r
if((s&$.bw().a)!==0)++r
if((s&$.by().a)!==0)++r
if((s&$.bz().a)!==0)++r
if((s&$.dc().a)!==0)++r
if((s&$.dd().a)!==0)++r
if((s&$.ch().a)!==0)++r
if((s&$.bv().a)!==0)++r
q=a1.gd4(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.C
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.dj])
for(m=0,l=0;l<r;++l){k=a1.jp(l)
j=k.gd4(k)
C.a.a1(n,l,new Z.dj(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.f(t,i)
h=t[i].k7(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.a1(o,g,h[f]);++g}}m+=j}H.i(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.ay(t,34962,e)
C.b.dT(t,34962,new Float32Array(H.d8(o)),35044)
C.b.ay(t,34962,null)
d=new Z.cl(new Z.ed(34962,e),n,a1)
d.sh8(H.c([],[Z.bE]))
if(this.b.b.length!==0){s=P.z
c=H.c([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.aM()
C.a.h(c,b.e)}a=Z.kJ(t,34963,H.i(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bE(0,c.length,a))}if(this.c.b.length!==0){s=P.z
c=H.c([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.aM()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.aM()
C.a.h(c,b.e)}a=Z.kJ(t,34963,H.i(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bE(1,c.length,a))}if(this.d.b.length!==0){s=P.z
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.aM()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.aM()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].c
b.a.a.aM()
C.a.h(c,b.e)}a=Z.kJ(t,34963,H.i(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bE(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.B("   "))}return C.a.C(u,"\n")},
a9:function(a){var u=this.e
if(u!=null)u.E(a)},
a6:function(){return this.a9(null)},
$io7:1}
F.ie.prototype={
cu:function(a){var u,t,s,r,q,p,o,n,m
H.i(a,"$ib",[F.ai],"$ab")
u=H.c([],[F.a9])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.f(a,p)
p=a[p]
if(q>=o)return H.f(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
n=new F.a9()
m=s.a
if(m==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(m!=p.a||m!=o.a)H.r(P.q("May not create a face with vertices attached to different shapes."))
n.a=s
C.a.h(s.d.b,n)
n.b=p
C.a.h(p.d.c,n)
n.c=o
C.a.h(o.d.d,n)
C.a.h(n.a.a.d.b,n)
p=n.a.a.e
if(p!=null)p.E(null)
C.a.h(u,n)}}return u},
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.f(u,b)
return u[b]},
b0:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cD())s=!1
return s},
cC:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cB())s=!1
return s},
i:function(a){return this.L()},
B:function(a){var u,t,s,r
u=H.c([],[P.n])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].B(a))
return C.a.C(u,"\n")},
L:function(){return this.B("")},
sh_:function(a){this.b=H.i(a,"$ib",[F.a9],"$ab")}}
F.ig.prototype={
jm:function(a){var u,t,s,r,q,p
H.i(a,"$ib",[F.ai],"$ab")
u=H.c([],[F.b2])
t=a.length
for(s=this.a,r=1;r<t;r+=2){q=r-1
p=a.length
if(q>=p)return H.f(a,q)
q=a[q]
if(r>=p)return H.f(a,r)
p=a[r]
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.mL(q,p))}return u},
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.f(u,b)
return u[b]},
i:function(a){return this.L()},
B:function(a){var u,t,s,r
u=H.c([],[P.n])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.f(r,s)
C.a.h(u,r[s].B(a+(""+s+". ")))}return C.a.C(u,"\n")},
L:function(){return this.B("")},
shb:function(a){this.b=H.i(a,"$ib",[F.b2],"$ab")}}
F.ih.prototype={
jn:function(a){var u,t,s,r,q,p
H.i(a,"$ib",[F.ai],"$ab")
u=H.c([],[F.bp])
t=a.length
for(s=this.a,r=0;r<t;++r){if(r>=a.length)return H.f(a,r)
q=a[r]
s.a.h(0,q)
p=new F.bp()
if(q.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
p.a=q
C.a.h(q.b.b,p)
C.a.h(p.a.a.b.b,p)
q=p.a.a.e
if(q!=null)q.E(null)
C.a.h(u,p)}return u},
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.f(u,b)
return u[b]},
i:function(a){return this.L()},
B:function(a){var u,t,s,r
u=H.c([],[P.n])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].B(a))
return C.a.C(u,"\n")},
L:function(){return this.B("")},
sck:function(a){this.b=H.i(a,"$ib",[F.bp],"$ab")}}
F.ai.prototype={
k7:function(a){var u,t
if(a.v(0,$.aT())){u=this.f
t=[P.C]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bx())){u=this.r
t=[P.C]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bw())){u=this.x
t=[P.C]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.by())){u=this.y
t=[P.C]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.v(0,$.bz())){u=this.z
t=[P.C]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.dc())){u=this.Q
t=[P.C]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.dd())){u=this.Q
t=[P.C]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.ch()))return H.c([this.ch],[P.C])
else if(a.v(0,$.bv())){u=this.cx
t=[P.C]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.C])},
cD:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ec()
this.d.O(0,new F.ja(u))
u=u.a
this.r=u.w(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.a6()
u=this.a.e
if(u!=null)u.b3(0)}return!0},
cB:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ec()
this.d.O(0,new F.j9(u))
u=u.a
this.x=u.w(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.a6()
u=this.a.e
if(u!=null)u.b3(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var u,t,s
u=H.c([],[P.n])
C.a.h(u,C.j.ai(J.aB(this.e),0))
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
C.a.h(u,V.T(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.C(u,", ")
return a+"{"+s+"}"},
L:function(){return this.B("")}}
F.ja.prototype={
$1:function(a){var u,t
H.l(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:8}
F.j9.prototype={
$1:function(a){var u,t
H.l(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:8}
F.j3.prototype={
aM:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.e(P.q("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a6()
return!0},
dO:function(a,b,c,d,e,f,g,h,i){var u=F.kI(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bD:function(a,b,c,d,e,f){return this.dO(a,null,b,c,null,d,e,f,0)},
jo:function(a,b,c,d,e,f){return this.dO(a,null,b,c,d,e,f,null,0)},
gk:function(a){return this.c.length},
j:function(a,b){var u=this.c
if(b>=u.length)return H.f(u,b)
return u[b]},
b0:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cD()
return!0},
cC:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cB()
return!0},
jv:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.l()
o=q.b
if(typeof o!=="number")return o.l()
n=q.c
if(typeof n!=="number")return n.l()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a2(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.L()},
B:function(a){var u,t,s,r
this.aM()
u=H.c([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].B(a))
return C.a.C(u,"\n")},
L:function(){return this.B("")},
siY:function(a){this.c=H.i(a,"$ib",[F.ai],"$ab")}}
F.j4.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t
u=this.b.length
if(b.Y(0,u))return C.a.j(this.b,b)
b=b.n(0,u)
t=this.c.length
if(b.Y(0,t))return C.a.j(this.c,b)
b=b.n(0,t)
return C.a.j(this.d,b)},
O:function(a,b){H.o(b,{func:1,ret:-1,args:[F.a9]})
C.a.O(this.b,b)
C.a.O(this.c,new F.j5(this,b))
C.a.O(this.d,new F.j6(this,b))},
i:function(a){return this.L()},
B:function(a){var u,t,s,r
u=H.c([],[P.n])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].B(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].B(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].B(a))
return C.a.C(u,"\n")},
L:function(){return this.B("")},
sh0:function(a){this.b=H.i(a,"$ib",[F.a9],"$ab")},
sh1:function(a){this.c=H.i(a,"$ib",[F.a9],"$ab")},
sh2:function(a){this.d=H.i(a,"$ib",[F.a9],"$ab")}}
F.j5.prototype={
$1:function(a){H.l(a,"$ia9")
if(!J.a2(a.a,this.a))this.b.$1(a)},
$S:8}
F.j6.prototype={
$1:function(a){var u
H.l(a,"$ia9")
u=this.a
if(!J.a2(a.a,u)&&!J.a2(a.b,u))this.b.$1(a)},
$S:8}
F.j7.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u=this.b.length
if(b.b4(0,u))return C.a.j(this.c,b.n(0,u))
else return C.a.j(this.b,b)},
i:function(a){return this.L()},
B:function(a){var u,t,s,r
u=H.c([],[P.n])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].B(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].B(a))
return C.a.C(u,"\n")},
L:function(){return this.B("")},
shc:function(a){this.b=H.i(a,"$ib",[F.b2],"$ab")},
shd:function(a){this.c=H.i(a,"$ib",[F.b2],"$ab")}}
F.j8.prototype={
gk:function(a){return this.b.length},
j:function(a,b){return C.a.j(this.b,b)},
i:function(a){return this.L()},
B:function(a){var u,t,s,r
u=H.c([],[P.n])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].B(a))
return C.a.C(u,"\n")},
L:function(){return this.B("")},
sck:function(a){this.b=H.i(a,"$ib",[F.bp],"$ab")}}
O.ay.prototype={
gq:function(){var u=this.dy
if(u==null){u=D.Q()
this.dy=u}return u},
K:function(a){var u
H.l(a,"$iy")
u=this.dy
if(u!=null)u.E(a)},
b7:function(){return this.K(null)},
dE:function(a){H.l(a,"$iy")
this.a=null
this.K(a)},
ix:function(){return this.dE(null)},
hw:function(a,b){var u=V.af
u=new D.bF(a,H.i(b,"$id",[u],"$ad"),this,[u])
u.b=!0
this.K(u)},
hy:function(a,b){var u=V.af
u=new D.bG(a,H.i(b,"$id",[u],"$ad"),this,[u])
u.b=!0
this.K(u)},
sag:function(a){var u,t
u=this.ch
if(u!=a){if(u!=null)u.gq().P(0,this.gat())
t=this.ch
this.ch=a
if(a!=null)a.gq().h(0,this.gat())
u=new D.G("environment",t,this.ch,this,[T.cO])
u.b=!0
this.K(u)}},
dk:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.d.a4(u.e.length+3,4)*4
s=C.d.a4(u.f.length+3,4)*4
r=C.d.a4(u.r.length+3,4)*4
q=C.d.a4(u.x.length+3,4)*4
p=C.d.a4(u.y.length+3,4)*4
o=C.d.a4(u.z.length+3,4)*4
n=C.d.a4(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.d.i(u.a)+C.d.i(m.a)+C.d.i(l.a)+C.d.i(k.a)+C.d.i(j.a)+C.d.i(i.a)+C.d.i(h.a)+C.d.i(g.a)+C.d.i(f.a)
e+"_"
e+"_0"
e+"_00"
e+"_000"
e=e+"_000_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
d=h!==C.c||g!==C.c
c=m!==C.c||l!==C.c||k!==C.c||j!==C.c
b=j===C.c
a=!b||d
a0=l!==C.c||k!==C.c||!b||i!==C.c||d
b=i===C.c
a1=!b
a2=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a3=u===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f||g===C.f||f===C.f
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.aT()
if(a0){b=$.bx()
a7=new Z.bf(a7.a|b.a)}if(a1){b=$.bw()
a7=new Z.bf(a7.a|b.a)}if(a2){b=$.by()
a7=new Z.bf(a7.a|b.a)}if(a3){b=$.bz()
a7=new Z.bf(a7.a|b.a)}if(a5){b=$.bv()
a7=new Z.bf(a7.a|b.a)}return new A.hv(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
S:function(a,b){H.i(a,"$ib",[T.cN],"$ab")
if(b!=null)if(!C.a.aN(a,b)){b.sbf(0,a.length)
C.a.h(a,b)}},
aD:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ak(u,u.length,0,[H.u(u,0)]);u.A();){t=u.d
t.toString
s=$.j2
if(s==null){s=new V.M(0,0,1)
$.j2=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cY(s)}}},
eH:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dk()
t=H.l(a2.fr.j(0,u.am),"$idI")
if(t==null){t=A.mQ(u,a2.a)
a2.dP(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bF
u=a3.e
if(!(u instanceof Z.cl)){a3.e=null
u=null}if(u==null||!u.d.v(0,r)){u=s.r1
if(u)a3.d.b0()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cC()
p.a.cC()
p=p.e
if(p!=null)p.b3(0)}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.jv()
o=o.e
if(o!=null)o.b3(0)}m=a3.d.dU(new Z.ee(a2.a),r)
m.aO($.aT()).e=this.a.Q.c
if(u)m.aO($.bx()).e=this.a.cx.c
if(q)m.aO($.bw()).e=this.a.ch.c
if(s.rx)m.aO($.by()).e=this.a.cy.c
if(p)m.aO($.bz()).e=this.a.db.c
if(s.x1)m.aO($.bv()).e=this.a.dx.c
a3.e=m}u=T.cN
l=H.c([],[u])
this.a.V(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.gR(p)
q=q.dy
q.toString
q.ak(p.ab(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db
p=p.gR(p)
o=a2.dx
o=p.l(0,o.gR(o))
a2.cx=o
p=o}q=q.fr
q.toString
q.ak(p.ab(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gkv()
o=a2.dx
o=p.l(0,o.gR(o))
a2.ch=o
p=o}q=q.fy
q.toString
q.ak(p.ab(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ak(C.o.ab(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ak(C.o.ab(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ak(C.o.ab(p,!0))}if(s.aA>0){k=this.e.a.length
q=this.a.k4
C.b.I(q.a,q.d,k)
for(q=[P.C],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.f(o,j)
o=o[j]
p.toString
H.l(o,"$iaf")
p=p.r1
if(j>=p.length)return H.f(p,j)
p=p[j]
i=new Float32Array(H.d8(H.i(o.ab(0,!0),"$ib",q,"$ab")))
C.b.eO(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.h:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
break
case C.e:this.S(l,this.f.d)
q=this.a
p=this.f.d
q.al(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break
case C.f:this.S(l,this.f.e)
q=this.a
p=this.f.e
q.af(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.h:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
break
case C.e:this.S(l,this.r.d)
q=this.a
p=this.r.d
q.al(q.y1,q.aA,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break
case C.f:this.S(l,this.r.e)
q=this.a
p=this.r.e
q.af(q.y2,q.aA,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break}switch(s.c){case C.c:break
case C.h:q=this.a
p=this.x.f
q=q.am
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
break
case C.e:this.S(l,this.x.d)
q=this.a
p=this.x.d
q.al(q.bF,q.bG,p)
p=this.a
q=this.x.f
p=p.am
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break
case C.f:this.S(l,this.x.e)
q=this.a
p=this.x.e
q.af(q.e6,q.bG,p)
p=this.a
q=this.x.f
p=p.am
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break}switch(s.d){case C.c:break
case C.h:q=this.a
p=this.y.f
q=q.bH
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
break
case C.e:this.S(l,this.y.d)
q=this.a
p=this.y.d
q.al(q.e7,q.bI,p)
p=this.a
q=this.y.f
p=p.bH
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break
case C.f:this.S(l,this.y.e)
q=this.a
p=this.y.e
q.af(q.e8,q.bI,p)
p=this.a
q=this.y.f
p=p.bH
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.h:q=this.a
p=this.z.f
q=q.bJ
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bL
C.b.H(p.a,p.d,n)
break
case C.e:this.S(l,this.z.d)
q=this.a
p=this.z.d
q.al(q.e9,q.bK,p)
p=this.a
q=this.z.f
p=p.bJ
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bL
C.b.H(q.a,q.d,n)
break
case C.f:this.S(l,this.z.e)
q=this.a
p=this.z.e
q.af(q.ea,q.bK,p)
p=this.a
q=this.z.f
p=p.bJ
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bL
C.b.H(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.el
C.b.I(q.a,q.d,k)
q=a2.db
h=q.gR(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.cH
if(g>=o.length)return H.f(o,g)
d=o[g]
o=h.cY(e.a)
n=o.a
if(typeof n!=="number")return n.l()
c=o.b
if(typeof c!=="number")return c.l()
b=o.c
if(typeof b!=="number")return b.l()
b=o.w(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.u(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.u(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.em
C.b.I(q.a,q.d,k)
q=a2.db
h=q.gR(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.cI
if(g>=o.length)return H.f(o,g)
d=o[g]
o=e.gbi(e)
n=d.b
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=h.bm(e.gbi(e))
n=d.c
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gt(e)
n=d.d
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gcv()
n=d.e
C.b.H(n.a,n.d,o)
o=e.gcw()
n=d.f
C.b.H(n.a,n.d,o)
o=e.gcz()
n=d.r
C.b.H(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.en
C.b.I(q.a,q.d,k)
q=a2.db
h=q.gR(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.cJ
if(g>=o.length)return H.f(o,g)
d=o[g]
o=e.gbi(e)
n=d.b
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gcF(e).kS()
n=d.c
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=h.bm(e.gbi(e))
n=d.d
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gt(e)
n=d.e
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gkP()
n=d.f
C.b.H(n.a,n.d,o)
o=e.gkO()
n=d.r
C.b.H(n.a,n.d,o)
o=e.gcv()
n=d.x
C.b.H(n.a,n.d,o)
o=e.gcw()
n=d.y
C.b.H(n.a,n.d,o)
o=e.gcz()
n=d.z
C.b.H(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.eo
C.b.I(q.a,q.d,k)
q=a2.db
h=q.gR(q)
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
n=this.a.cK
if(g>=n.length)return H.f(n,g)
d=n[g]
n=e.gbk()
H.i(l,"$ib",o,"$ab")
if(!C.a.aN(l,n)){n.sbf(0,l.length)
C.a.h(l,n)}n=e.gcF(e)
c=d.d
C.b.u(c.a,c.d,n.a,n.b,n.c)
n=e.gkI()
c=d.b
C.b.u(c.a,c.d,n.a,n.b,n.c)
n=e.gbY(e)
c=d.c
C.b.u(c.a,c.d,n.a,n.b,n.c)
n=h.cY(e.gcF(e))
c=n.a
if(typeof c!=="number")return c.l()
b=n.b
if(typeof b!=="number")return b.l()
a=n.c
if(typeof a!=="number")return a.l()
a=n.w(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.u(b.a,b.d,c,n,a)
a=e.gt(e)
n=d.f
C.b.u(n.a,n.d,a.a,a.b,a.c)
a=e.gbk()
n=a.gev(a)
if(!n){n=d.x
C.b.I(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.I(b,n,0)
else C.b.I(b,n,a.a)
n=d.x
C.b.I(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.ep
C.b.I(q.a,q.d,k)
q=a2.db
h=q.gR(q)
for(q=this.dx.y,p=q.length,o=[P.C],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
c=this.a.cL
if(g>=c.length)return H.f(c,g)
d=c[g]
c=e.gbk()
H.i(l,"$ib",n,"$ab")
if(!C.a.aN(l,c)){c.sbf(0,l.length)
C.a.h(l,c)}a0=h.l(0,e.gR(e))
c=e.gR(e)
b=$.cF
if(b==null){b=new V.aa(0,0,0)
$.cF=b}b=c.bm(b)
c=d.b
C.b.u(c.a,c.d,b.a,b.b,b.c)
c=$.cF
if(c==null){c=new V.aa(0,0,0)
$.cF=c}c=a0.bm(c)
b=d.c
C.b.u(b.a,b.d,c.a,c.b,c.c)
c=a0.cP(0)
b=d.d
i=new Float32Array(H.d8(H.i(new V.dJ(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).ab(0,!0),"$ib",o,"$ab")))
C.b.eN(b.a,b.d,!1,i)
b=e.gt(e)
c=d.e
C.b.u(c.a,c.d,b.a,b.b,b.c)
b=e.gbk()
c=b.gev(b)
if(!c){c=d.r
C.b.I(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.I(a1,c,0)
else C.b.I(a1,c,b.a)
c=d.r
C.b.I(c.a,c.d,0)}c=e.gcv()
b=d.x
C.b.H(b.a,b.d,c)
c=e.gcw()
b=d.y
C.b.H(b.a,b.d,c)
c=e.gcz()
b=d.z
C.b.H(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.eq
C.b.I(q.a,q.d,k)
q=a2.db
h=q.gR(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.cM
if(g>=o.length)return H.f(o,g)
d=o[g]
o=e.gbk()
H.i(l,"$ib",u,"$ab")
if(!C.a.aN(l,o)){o.sbf(0,l.length)
C.a.h(l,o)}o=e.gbi(e)
n=d.b
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gcF(e)
n=d.c
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gkI()
n=d.d
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gbY(e)
n=d.e
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=h.bm(e.gbi(e))
n=d.f
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gbk()
n=o.gev(o)
if(!n){o=d.x
C.b.I(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.I(b,n,0)
else C.b.I(b,n,o.a)
o=d.x
C.b.I(o.a,o.d,0)}o=e.gt(e)
n=d.y
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gkU()
n=d.z
C.b.H(n.a,n.d,o)
o=e.gkV()
n=d.Q
C.b.H(n.a,n.d,o)
o=e.gcv()
n=d.ch
C.b.H(n.a,n.d,o)
o=e.gcw()
n=d.cx
C.b.H(n.a,n.d,o)
o=e.gcz()
n=d.cy
C.b.H(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.h:break
case C.e:this.S(l,this.Q.d)
u=this.a
q=this.Q.d
u.al(u.eb,u.bM,q)
break
case C.f:this.S(l,this.Q.e)
u=this.a
q=this.Q.e
u.af(u.ec,u.bM,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.gR(q).cP(0)
a2.Q=q}u=u.id
u.toString
u.ak(q.ab(0,!0))}if(s.dy){this.S(l,this.ch)
u=this.a
q=this.ch
u.af(u.ed,u.ee,q)
switch(s.r){case C.c:break
case C.h:u=this.a
q=this.cx.f
u=u.bN
u.toString
p=q.a
o=q.b
q=q.c
C.b.u(u.a,u.d,p,o,q)
break
case C.e:this.S(l,this.cx.d)
u=this.a
q=this.cx.d
u.al(u.ef,u.bO,q)
q=this.a
u=this.cx.f
q=q.bN
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
break
case C.f:this.S(l,this.cx.e)
u=this.a
q=this.cx.e
u.af(u.eg,u.bO,q)
q=this.a
u=this.cx.f
q=q.bN
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.h:u=this.a
q=this.cy.f
u=u.bQ
u.toString
p=q.a
o=q.b
q=q.c
C.b.u(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bP
C.b.H(q.a,q.d,o)
break
case C.e:this.S(l,this.cy.d)
u=this.a
q=this.cy.d
u.al(u.eh,u.bR,q)
q=this.a
u=this.cy.f
q=q.bQ
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bP
C.b.H(u.a,u.d,o)
break
case C.f:this.S(l,this.cy.e)
u=this.a
q=this.cy.e
u.af(u.ei,u.bR,q)
q=this.a
u=this.cy.f
q=q.bQ
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bP
C.b.H(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.h:u=this.a
p=this.db.f
u=u.bS
C.b.H(u.a,u.d,p)
break
case C.e:this.S(l,this.db.d)
u=this.a
p=this.db.d
u.al(u.ej,u.bT,p)
p=this.a
u=this.db.f
p=p.bS
C.b.H(p.a,p.d,u)
break
case C.f:this.S(l,this.db.e)
u=this.a
p=this.db.e
u.af(u.ek,u.bT,p)
p=this.a
u=this.db.f
p=p.bS
C.b.H(p.a,p.d,u)
break}u=a2.a
C.b.cG(u,3042)
C.b.jt(u,770,771)}for(j=0;j<l.length;++j)l[j].V(a2)
u=a3.e
u.V(a2)
u.aa(a2)
u.as(a2)
if(q)C.b.jM(a2.a,3042)
for(j=0;j<l.length;++j)l[j].as(a2)
u=this.a
u.toString
C.b.cZ(a2.a,null)
u.x.e2()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dk().am},
sfK:function(a){this.e=H.i(a,"$iV",[V.af],"$aV")}}
O.ht.prototype={
bx:function(a){var u=this.f
if(!(Math.abs(u-a)<$.N().a)){this.f=a
u=new D.G(this.b,u,a,this,[P.C])
u.b=!0
this.a.K(u)}},
aJ:function(){this.d6()
this.bx(1)},
ax:function(){this.c3()
this.bx(1)},
seP:function(a,b){var u
if(b==null)b=1
if(b<=0)this.dW(0)
else if(this.c===C.c){this.c=C.h
this.c3()
this.bx(1)
u=this.a
u.a=null
u.K(null)}this.bx(b)}}
O.cx.prototype={
K:function(a){this.a.K(H.l(a,"$iy"))},
b7:function(){return this.K(null)},
aJ:function(){},
ax:function(){},
dI:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gq().P(0,this.gat())
t=this.d
this.d=a
if(a!=null)a.gq().h(0,this.gat())
u=new D.G(this.b+".texture2D",t,this.d,this,[T.e_])
u.b=!0
this.a.K(u)}},
dJ:function(a){},
dW:function(a){var u
if(this.c!==C.c){this.c=C.c
u=this.a
u.a=null
u.K(null)}this.aJ()
this.dI(null)
this.dJ(null)
this.a.K(null)},
sa7:function(a){var u=this.c
if(u!==C.e){if(u===C.c)this.ax()
this.c=C.e
this.dJ(null)
u=this.a
u.a=null
u.K(null)}this.dI(a)}}
O.hu.prototype={}
O.b3.prototype={
cq:function(a){var u,t
if(!J.a2(this.f,a)){u=this.f
this.f=a
t=new D.G(this.b+".color",u,a,this,[V.x])
t.b=!0
this.a.K(t)}},
aJ:function(){this.d6()
this.cq(new V.x(0,0,0))},
ax:function(){this.c3()
this.cq(new V.x(1,1,1))},
st:function(a,b){var u
if(this.c===C.c){this.c=C.h
this.ax()
u=this.a
u.a=null
u.K(null)}this.cq(b)}}
O.hw.prototype={
dH:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.N().a)){this.ch=a
u=new D.G(this.b+".refraction",u,a,this,[P.C])
u.b=!0
this.a.K(u)}},
aJ:function(){this.d7()
this.dH(1)},
ax:function(){this.c4()
this.dH(1)}}
O.hx.prototype={
by:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.N().a)){this.ch=a
u=new D.G(this.b+".shininess",u,a,this,[P.C])
u.b=!0
this.a.K(u)}},
aJ:function(){this.d7()
this.by(100)},
ax:function(){this.c4()
this.by(100)},
sa8:function(a){var u
if(a==null)a=100
if(a<=0)this.dW(0)
else if(this.c===C.c){this.c=C.h
this.c4()
this.by(100)
u=this.a
u.a=null
u.K(null)}this.by(a)}}
O.dV.prototype={
gq:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
K:function(a){var u
H.l(a,"$iy")
u=this.e
if(u!=null)u.E(a)},
b7:function(){return this.K(null)},
eH:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.l(a.fr.j(0,"Skybox"),"$idW")
if(u==null){t=a.a
u=new A.dW(t,"Skybox")
u.d8(t,"Skybox")
u.es(0,$.na,$.n9)
u.z=u.x.j(0,"posAttr")
u.Q=H.j(u.y.j(0,"fov"),"$iX")
u.ch=H.j(u.y.j(0,"ratio"),"$iX")
u.cx=H.j(u.y.j(0,"boxClr"),"$iJ")
u.cy=H.j(u.y.j(0,"boxTxt"),"$iah")
u.db=H.j(u.y.j(0,"viewMat"),"$iap")
a.dP(u)}this.a=u}if(b.e==null){t=b.d.dU(new Z.ee(a.a),$.aT())
t.aO($.aT()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.V(a)}t=a.d
s=a.c
r=this.a
r.V(a)
q=this.b
p=r.Q
C.b.H(p.a,p.d,q)
q=r.ch
C.b.H(q.a,q.d,t/s)
s=this.c
r.cy.d3(s)
s=this.d
t=r.cx
C.b.u(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gR(s).cP(0)
r=r.db
r.toString
r.ak(s.ab(0,!0))
t=b.e
if(t instanceof Z.cl){t.V(a)
t.aa(a)
t.as(a)}else b.e=null
t=this.a
t.toString
C.b.cZ(a.a,null)
t.x.e2()
t=this.c
if(t!=null)t.as(a)}}
O.bL.prototype={}
T.cN.prototype={}
T.e_.prototype={}
T.iz.prototype={
sbf:function(a,b){this.a=b
return b},
gq:function(){var u=this.y
if(u==null){u=D.Q()
this.y=u}return u},
V:function(a){var u
if(!this.c&&this.d){this.c=!0
u=a.a
C.b.bC(u,33984+this.a)
C.b.a5(u,3553,this.b)}},
as:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.bC(u,33984+this.a)
C.b.a5(u,3553,null)}}}
T.cO.prototype={
sbf:function(a,b){this.a=b
return b},
gq:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
V:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.bC(u,33984+this.a)
C.b.a5(u,34067,this.b)}},
as:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.bC(u,33984+this.a)
C.b.a5(u,34067,null)}}}
T.iA.prototype={
k8:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.a5(u,3553,t)
C.b.aC(u,3553,10242,33071)
C.b.aC(u,3553,10243,33071)
C.b.aC(u,3553,10241,9729)
C.b.aC(u,3553,10240,9729)
C.b.a5(u,3553,null);++this.d
s=W.lg(null,a,null)
r=new T.iz()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.p
W.a0(s,"load",H.o(new T.iC(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
an:function(a){return this.k8(a,!1,!1,!1,!1)},
aX:function(a,b,c,d,e,f){var u,t
u=W.lg(null,c,null);++this.d
t=W.p
W.a0(u,"load",H.o(new T.iB(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
dG:function(a,b,c){var u,t,s,r
b=V.kX(b,2)
u=V.kX(a.width,2)
t=V.kX(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kk(null,null)
s.width=u
s.height=t
r=H.l(C.m.eV(s,"2d"),"$ibW")
r.imageSmoothingEnabled=!1;(r&&C.t).jO(r,a,0,0,s.width,s.height)
return P.nC(C.t.h7(r,0,0,s.width,s.height))}}}
T.iC.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.dG(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.a5(t,3553,this.e)
C.b.eF(t,37440,this.f?1:0)
C.b.eK(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.eR(t,3553)
C.b.a5(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.e4()}++s.e},
$S:13}
T.iB.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.dG(this.b,u.c,this.c)
s=u.a
C.b.a5(s,34067,this.d)
C.b.eF(s,37440,this.e?1:0)
C.b.eK(s,this.f,0,6408,6408,5121,t)
C.b.a5(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.e4()}++u.e},
$S:13}
V.fg.prototype={
b2:function(a,b){return!0},
i:function(a){return"all"},
$ibl:1}
V.bl.prototype={}
V.dH.prototype={
b2:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)if(u[s].b2(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saI:function(a){this.a=H.i(a,"$ib",[V.bl],"$ab")},
$ibl:1}
V.bn.prototype={
b2:function(a,b){return!this.f9(0,b)},
i:function(a){return"!["+this.d5(0)+"]"}}
V.id.prototype={
fm:function(a){var u,t
if(a.a.length<=0)throw H.e(P.q("May not create a SetMatcher with zero characters."))
u=new H.aG([P.z,P.a5])
for(t=new H.dE(a,a.gk(a),0,[H.aw(a,"w",0)]);t.A();)u.a1(0,t.d,!0)
this.siy(u)},
b2:function(a,b){return this.a.e_(0,b)},
i:function(a){var u=this.a
return P.kD(new H.dD(u,[H.u(u,0)]),0,null)},
siy:function(a){this.a=H.i(a,"$iH",[P.z,P.a5],"$aH")},
$ibl:1}
V.cI.prototype={
C:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cR(this.a.N(0,b))
r.saI(H.c([],[V.bl]))
r.c=!1
C.a.h(this.c,r)
return r},
jR:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.b2(0,a))return r}return},
i:function(a){return this.b},
siS:function(a){this.c=H.i(a,"$ib",[V.cR],"$ab")}}
V.e4.prototype={
i:function(a){var u,t
u=H.m9(this.b,"\n","\\n")
t=H.m9(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cQ.prototype={
i:function(a){return this.b},
siu:function(a){var u=P.n
this.c=H.i(a,"$iH",[u,u],"$aH")}}
V.iH.prototype={
N:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cI(this,b)
u.siS(H.c([],[V.cR]))
u.d=null
this.a.a1(0,b,u)}return u},
bl:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cQ(this,a)
t=P.n
u.siu(new H.aG([t,t]))
this.b.a1(0,a,u)}return u},
kH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.e4])
t=this.c
s=[P.z]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.aV(a,o)
m=t.jR(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.kD(r,0,null)
throw H.e(P.q("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.kD(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.e4(j==null?k.b:j,l,o)}++o}}},
siF:function(a){this.a=H.i(a,"$iH",[P.n,V.cI],"$aH")},
siL:function(a){this.b=H.i(a,"$iH",[P.n,V.cQ],"$aH")}}
V.cR.prototype={
i:function(a){return this.b.b+": "+this.d5(0)}}
X.bU.prototype={$ib5:1}
X.h0.prototype={
gq:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u},
au:function(a){var u=this.x
if(u!=null)u.E(a)},
V:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.js(u,36160,null)
C.b.cG(u,2884)
C.b.cG(u,2929)
C.b.jL(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.k(t)
p=C.i.ar(q*t)
q=r.b
if(typeof s!=="number")return H.k(s)
o=C.i.ar(q*s)
q=C.i.ar(r.c*t)
a.c=q
r=C.i.ar(r.d*s)
a.d=r
C.b.kL(u,p,o,q,r)
C.b.jz(u,this.c)
if(this.b){r=this.a
C.b.jy(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.jx(u,n)}}
X.h4.prototype={
gq:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
V:function(a){var u
a.cy.bX(V.bI())
u=V.bI()
a.db.bX(u)},
as:function(a){a.cy.aR()
a.db.aR()},
$ib5:1,
$ibU:1}
X.dP.prototype={
gq:function(){var u=this.f
if(u==null){u=D.Q()
this.f=u}return u},
au:function(a){var u
H.l(a,"$iy")
u=this.f
if(u!=null)u.E(a)},
fD:function(){return this.au(null)},
V:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.bm(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bX(n)
u=$.lt
if(u==null){u=V.ky()
t=V.kH()
s=$.lH
if(s==null){s=new V.M(0,0,-1)
$.lH=s}s=V.kv(u,t,s)
$.lt=s
m=s}else m=u
u=this.b
if(u!=null){l=u.c0(0,a,this)
if(l!=null)m=l.l(0,m)}a.db.bX(m)},
as:function(a){a.cy.aR()
a.db.aR()},
$ib5:1,
$ibU:1}
X.cM.prototype={}
V.kf.prototype={
$1:function(a){H.l(a,"$ibc")
P.fd(C.i.eL(this.a.gjU(),2)+" fps")},
$S:44}
V.ii.prototype={
fn:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.r).a0(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.r.a0(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.a0(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.a0(q,p)}o=u.createElement("div")
this.a=o
C.l.a0(q,o)
this.b=null
o=W.p
W.a0(u,"scroll",H.o(new V.ik(s),{func:1,ret:-1,args:[o]}),!1,o)},
jl:function(a,b,c){var u,t,s,r
a=H.a6(C.d.jw(a,0,4))
if(c.length===0)c=P.lO(C.w,b,C.q,!1)
u=document.createElement("div")
u.className="textHeader"
u.id=c
t=u.style
s=""+(28-a*3)+"px"
t.fontSize=s
r=W.ms(null)
r.href="#"+c
r.textContent=b
C.l.a0(u,r)
C.l.a0(this.a,u)},
dN:function(a,b){return this.jl(a,b,"")},
b_:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$ib",[P.n],"$ab")
this.iA()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.kH(C.a.k_(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.a0(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.a0(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.a0(t,o)
break
case"Link":n=p.b
if(H.nZ(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.P(m[1])
l.textContent=H.P(m[0])
C.l.a0(t,l)}else{k=P.lO(C.w,n,C.q,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.l.a0(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.a0(t,o)
break}}C.l.a0(this.a,t)},
iA:function(){var u,t,s,r
if(this.b!=null)return
u=new V.iH()
t=P.n
u.siF(new H.aG([t,V.cI]))
u.siL(new H.aG([t,V.cQ]))
u.c=null
u.c=u.N(0,"Start")
t=u.N(0,"Start").C(0,"Bold")
s=V.ag(new H.a7("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Bold").C(0,"Bold")
s=new V.bn()
r=[V.bl]
s.saI(H.c([],r))
C.a.h(t.a,s)
t=V.ag(new H.a7("*"))
C.a.h(s.a,t)
t=u.N(0,"Bold").C(0,"BoldEnd")
s=V.ag(new H.a7("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Start").C(0,"Italic")
s=V.ag(new H.a7("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Italic").C(0,"Italic")
s=new V.bn()
s.saI(H.c([],r))
C.a.h(t.a,s)
t=V.ag(new H.a7("_"))
C.a.h(s.a,t)
t=u.N(0,"Italic").C(0,"ItalicEnd")
s=V.ag(new H.a7("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Start").C(0,"Code")
s=V.ag(new H.a7("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Code").C(0,"Code")
s=new V.bn()
s.saI(H.c([],r))
C.a.h(t.a,s)
t=V.ag(new H.a7("`"))
C.a.h(s.a,t)
t=u.N(0,"Code").C(0,"CodeEnd")
s=V.ag(new H.a7("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Start").C(0,"LinkHead")
s=V.ag(new H.a7("["))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"LinkHead").C(0,"LinkTail")
s=V.ag(new H.a7("|"))
C.a.h(t.a,s)
s=u.N(0,"LinkHead").C(0,"LinkEnd")
t=V.ag(new H.a7("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,"LinkHead").C(0,"LinkHead")
t=new V.bn()
t.saI(H.c([],r))
C.a.h(s.a,t)
s=V.ag(new H.a7("|]"))
C.a.h(t.a,s)
s=u.N(0,"LinkTail").C(0,"LinkEnd")
t=V.ag(new H.a7("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,"LinkTail").C(0,"LinkTail")
t=new V.bn()
t.saI(H.c([],r))
C.a.h(s.a,t)
s=V.ag(new H.a7("|]"))
C.a.h(t.a,s)
C.a.h(u.N(0,"Start").C(0,"Other").a,new V.fg())
s=u.N(0,"Other").C(0,"Other")
t=new V.bn()
t.saI(H.c([],r))
C.a.h(s.a,t)
s=V.ag(new H.a7("*_`["))
C.a.h(t.a,s)
s=u.N(0,"BoldEnd")
s.d=s.a.bl("Bold")
s=u.N(0,"ItalicEnd")
s.d=s.a.bl("Italic")
s=u.N(0,"CodeEnd")
s.d=s.a.bl("Code")
s=u.N(0,"LinkEnd")
s.d=s.a.bl("Link")
s=u.N(0,"Other")
s.d=s.a.bl("Other")
this.b=u}}
V.ik.prototype={
$1:function(a){P.kE(C.n,new V.ij(this.a))},
$S:13}
V.ij.prototype={
$0:function(){var u,t,s
u=C.i.ar(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:1}
L.fp.prototype={
fb:function(a,b,c,d,e,f,g){var u
if($.fr==null){$.fr=E.aE(null,!0,null,"bishop shape",null,null)
O.aI("./resources/bishop.obj",a.f,null,null,!1).aj(new L.fs(),null)}u=this.k4?"white":"black"
this.a=u+(" bishop "+this.go)
this.y.h(0,$.fr)}}
L.fs.prototype={
$1:function(a){H.l(a,"$iS")
$.fr.sac(0,a.c)},
$S:2}
L.ft.prototype={
fc:function(a){var u,t,s,r,q,p,o,n,m
this.sik(H.c([],[L.cE]))
this.siK(H.c([],[L.cP]))
this.id=L.mR(a)
this.a="board"
for(u=1;u<=8;++u)for(t=1;t<=8;++t){s=L.nd(a,this,(u+t)%2===0,u,t)
r=this.go;(r&&C.a).h(r,s)
r=this.y
q=H.u(r,0)
H.A(s,q)
p=[q]
if(r.aK(H.c([s],p))){o=r.a
n=o.length
C.a.h(o,s)
q=H.i(H.c([s],p),"$id",[q],"$ad")
r=r.c
if(r!=null)r.$2(n,q)}}for(u=1;u<=8;++u){r=L.lr(a,this,!0,2,u,0,0.7)
q=this.fy;(q&&C.a).h(q,r)
q=this.y
p=H.u(q,0)
H.A(r,p)
o=[p]
if(q.aK(H.c([r],o))){m=q.a
n=m.length
C.a.h(m,r)
p=H.i(H.c([r],o),"$id",[p],"$ad")
r=q.c
if(r!=null)r.$2(n,p)}r=L.lr(a,this,!1,7,u,0,0.7)
q=this.fy;(q&&C.a).h(q,r)
q=this.y
p=H.u(q,0)
H.A(r,p)
o=[p]
if(q.aK(H.c([r],o))){m=q.a
n=m.length
C.a.h(m,r)
p=H.i(H.c([r],o),"$id",[p],"$ad")
r=q.c
if(r!=null)r.$2(n,p)}}this.a_(0,L.i6(a,this,!0,1,1,0,0.7))
this.a_(0,L.i6(a,this,!0,1,8,0,0.7))
this.a_(0,L.i6(a,this,!1,8,1,0,0.7))
this.a_(0,L.i6(a,this,!1,8,8,0,0.7))
this.a_(0,L.hg(a,this,!0,1,2,0,0.7))
this.a_(0,L.hg(a,this,!0,1,7,3.141592653589793,0.7))
this.a_(0,L.hg(a,this,!1,8,2,0,0.7))
this.a_(0,L.hg(a,this,!1,8,7,3.141592653589793,0.7))
this.a_(0,L.fq(a,this,!0,1,3,-1.5707963267948966,0.8))
this.a_(0,L.fq(a,this,!0,1,6,1.5707963267948966,0.8))
this.a_(0,L.fq(a,this,!1,8,3,-1.5707963267948966,0.8))
this.a_(0,L.fq(a,this,!1,8,6,1.5707963267948966,0.8))
this.a_(0,L.lx(a,this,!0,1,4,0,1))
this.a_(0,L.lk(a,this,!0,1,5,1.5707963267948966,0.9))
this.a_(0,L.lx(a,this,!1,8,4,0,1))
this.a_(0,L.lk(a,this,!1,8,5,1.5707963267948966,0.9))
this.y.h(0,L.fL(a,this,0,0,0,0))
this.y.h(0,L.fL(a,this,8,0,1.5707963267948966,1))
this.y.h(0,L.fL(a,this,8,8,3.141592653589793,2))
this.y.h(0,L.fL(a,this,0,8,4.71238898038469,3))
r=this.y
q=F.nE(-1,!1,!1,0,null,30)
p=this.id.Q
r.h(0,E.aE(null,!0,U.bB(V.dK(0,-0.5,0).l(0,V.ln(-1.5707963267948966)).l(0,V.kx(12,12,12,1))),"",q,p))},
a_:function(a,b){var u=this.fy;(u&&C.a).h(u,b)
this.y.h(0,b)},
sik:function(a){this.fy=H.i(a,"$ib",[L.cE],"$ab")},
siK:function(a){this.go=H.i(a,"$ib",[L.cP],"$ab")}}
L.fK.prototype={
fd:function(a,b,c,d,e,f){var u
if($.fM==null){$.fM=E.aE(null,!0,null,"edge shape",null,null)
O.aI("./resources/edge.obj",a.f,null,null,!1).aj(new L.fN(),null)}this.sbW(U.bB(V.dK(c-4,0,d-4).l(0,V.kw(e))))
this.a="edge"
this.y.h(0,$.fM)
u=this.fy.id.z
if(f>=u.length)return H.f(u,f)
this.sa3(u[f])}}
L.fN.prototype={
$1:function(a){H.l(a,"$iS")
$.fM.sac(0,a.c)},
$S:2}
L.hc.prototype={
fe:function(a,b,c,d,e,f,g){var u
if($.hd==null){$.hd=E.aE(null,!0,null,"king shape",null,null)
O.aI("./resources/king.obj",a.f,null,null,!1).aj(new L.he(),null)}u=this.k4?"white":"black"
this.a=u+(" king "+this.go)
this.y.h(0,$.hd)}}
L.he.prototype={
$1:function(a){H.l(a,"$iS")
$.hd.sac(0,a.c)},
$S:2}
L.hf.prototype={
ff:function(a,b,c,d,e,f,g){var u
if($.hh==null){$.hh=E.aE(null,!0,null,"knight shape",null,null)
O.aI("./resources/knight.obj",a.f,null,null,!1).aj(new L.hi(),null)}u=this.k4?"white":"black"
this.a=u+(" knight "+this.go)
this.y.h(0,$.hh)}}
L.hi.prototype={
$1:function(a){H.l(a,"$iS")
$.hh.sac(0,a.c)},
$S:2}
L.hy.prototype={
fh:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=a.f
t=u.a
s=t.createTexture()
C.b.a5(t,34067,s)
C.b.aC(t,34067,10242,10497)
C.b.aC(t,34067,10243,10497)
C.b.aC(t,34067,10241,9729)
C.b.aC(t,34067,10240,9729)
C.b.a5(t,34067,null)
r=new T.cO()
r.a=0
r.b=s
r.c=!1
r.d=0
u.aX(r,s,"resources/posx.png",34069,!1,!1)
u.aX(r,s,"resources/negx.png",34070,!1,!1)
u.aX(r,s,"resources/posy.png",34071,!1,!1)
u.aX(r,s,"resources/negy.png",34072,!1,!1)
u.aX(r,s,"resources/posz.png",34073,!1,!1)
u.aX(r,s,"resources/negz.png",34074,!1,!1)
this.a=r
q=D.ld(null,null)
q.st(0,new V.x(1,0.9,0.8))
q.b=U.bB(V.kv(V.ky(),V.kH(),new V.M(0,-1,-0.25)))
p=D.ld(null,null)
p.st(0,new V.x(0,0.1,0.3))
p.b=U.bB(V.kv(V.ky(),V.kH(),new V.M(0,1,0.25)))
o=new V.x(0.15,0.15,0.15)
u=O.aH()
t=u.x
t.st(0,new V.x(0.6,0.6,0.6))
t=u.r
t.st(0,new V.x(0.4,0.4,0.4))
u.z.st(0,new V.x(1,1,1))
u.z.sa8(60)
u.sag(this.a)
u.cx.st(0,o)
u.dx.h(0,q)
u.dx.h(0,p)
this.b=u
u=O.aH()
t=u.x
t.st(0,new V.x(0.2,0.2,0.2))
t=u.r
t.st(0,new V.x(0.1,0.1,0.1))
u.z.st(0,new V.x(1,1,1))
u.z.sa8(60)
u.sag(this.a)
u.cx.st(0,o)
u.dx.h(0,q)
u.dx.h(0,p)
this.c=u
u=O.aH()
t=u.x
t.st(0,new V.x(0.6,0,0))
t=u.r
t.st(0,new V.x(0.8,0,0))
u.z.st(0,new V.x(1,1,1))
u.z.sa8(100)
u.sag(this.a)
u.cx.st(0,o)
u.dx.h(0,q)
u.dx.h(0,p)
this.d=u
u=O.aH()
t=u.x
t.st(0,new V.x(0.2,0,0))
t=u.r
t.st(0,new V.x(0.6,0,0))
u.z.st(0,new V.x(1,1,1))
u.z.sa8(100)
u.sag(this.a)
u.cx.st(0,o)
u.dx.h(0,q)
u.dx.h(0,p)
this.e=u
n=new V.x(0.075,0.075,0.075)
u=O.aH()
t=u.x
t.st(0,new V.x(0.6,0.6,0.6))
t=u.r
t.st(0,new V.x(0.4,0.4,0.4))
u.z.st(0,new V.x(1,1,1))
u.z.sa8(60)
u.sag(this.a)
u.cx.st(0,n)
u.dx.h(0,q)
u.dx.h(0,p)
this.f=u
u=O.aH()
t=u.x
t.st(0,new V.x(0.2,0.2,0.2))
t=u.r
t.st(0,new V.x(0.1,0.1,0.1))
u.z.st(0,new V.x(1,1,1))
u.z.sa8(60)
u.sag(this.a)
u.cx.st(0,n)
u.dx.h(0,q)
u.dx.h(0,p)
this.r=u
u=O.aH()
t=u.x
t.st(0,new V.x(0.6,0,0))
t=u.r
t.st(0,new V.x(0.8,0,0))
u.z.st(0,new V.x(1,1,1))
u.z.sa8(100)
u.sag(this.a)
u.cx.st(0,n)
u.dx.h(0,q)
u.dx.h(0,p)
this.x=u
u=O.aH()
t=u.x
t.st(0,new V.x(0.2,0,0))
t=u.r
t.st(0,new V.x(0.6,0,0))
u.z.st(0,new V.x(1,1,1))
u.z.sa8(100)
u.sag(this.a)
u.cx.st(0,n)
u.dx.h(0,q)
u.dx.h(0,p)
this.y=u
this.sfW(H.c([],[O.ay]))
for(m=0;m<4;++m){l=a.f.an("resources/edge"+m+".png")
u=this.z
t=O.aH()
k=t.x
k.st(0,new V.x(0.6,0.6,0.6))
t.x.sa7(l)
k=t.r
k.st(0,new V.x(0.4,0.4,0.4))
t.r.sa7(l)
t.z.st(0,new V.x(1,1,1))
t.z.sa8(80)
t.sag(this.a)
k=t.cx
k.st(0,new V.x(0.1,0.1,0.1))
k=t.dx
k.toString
j=H.aw(k,"V",0)
H.A(q,j)
i=[j]
if(k.aK(H.c([q],i))){h=k.a
g=h.length
C.a.h(h,q)
j=H.i(H.c([q],i),"$id",[j],"$ad")
k=k.c
if(k!=null)k.$2(g,j)}k=t.dx
k.toString
j=H.aw(k,"V",0)
H.A(p,j)
i=[j]
if(k.aK(H.c([p],i))){h=k.a
g=h.length
C.a.h(h,p)
j=H.i(H.c([p],i),"$id",[j],"$ad")
k=k.c
if(k!=null)k.$2(g,j)}(u&&C.a).h(u,t)}f=a.f.an("resources/tableColor.png")
e=a.f.an("resources/tableSpec.png")
u=O.aH()
t=u.x
t.st(0,new V.x(0.6,0.6,0.6))
u.x.sa7(f)
t=u.r
t.st(0,new V.x(0.4,0.4,0.4))
u.r.sa7(f)
u.z.st(0,new V.x(1,1,1))
u.z.sa8(80)
u.z.sa7(e)
u.sag(this.a)
u.cx.sa7(e)
u.Q.sa7(a.f.an("resources/tableNormal.png"))
u.dx.h(0,q)
u.dx.h(0,p)
this.Q=u},
sfW:function(a){this.z=H.i(a,"$ib",[O.ay],"$ab")}}
L.hQ.prototype={
fi:function(a,b,c,d,e,f,g){var u
if($.hR==null){$.hR=E.aE(null,!0,null,"pawn shape",null,null)
O.aI("./resources/pawn.obj",a.f,null,null,!1).aj(new L.hS(),null)}u=this.k4?"white":"black"
this.a=u+(" pawn "+this.go)
this.y.h(0,$.hR)}}
L.hS.prototype={
$1:function(a){H.l(a,"$iS")
$.hR.sac(0,a.c)},
$S:2}
L.cE.prototype={
aT:function(a,b,c,d,e,f){var u,t
u=U.bB(null)
this.k2=u
this.sbW(u)
this.r1=!1
this.r2=!1
this.rx=!1
u=this.k1
this.k2.sR(0,V.dK(this.fy-4.5,0,this.go-4.5).l(0,V.kw(this.id)).l(0,V.kx(u,u,u,1)))
if(this.k4){u=this.rx
t=this.k3.id
if(u)this.sa3(t.d)
else this.sa3(t.b)}else{u=this.rx
t=this.k3.id
if(u)this.sa3(t.e)
else this.sa3(t.c)}}}
L.hX.prototype={
fj:function(a,b,c,d,e,f,g){var u
if($.hY==null){$.hY=E.aE(null,!0,null,"queen shape",null,null)
O.aI("./resources/queen.obj",a.f,null,null,!1).aj(new L.hZ(),null)}u=this.k4?"white":"black"
this.a=u+(" queen "+this.go)
this.y.h(0,$.hY)}}
L.hZ.prototype={
$1:function(a){H.l(a,"$iS")
$.hY.sac(0,a.c)},
$S:2}
L.i5.prototype={
fl:function(a,b,c,d,e,f,g){var u
if($.i7==null){$.i7=E.aE(null,!0,null,"rook shape",null,null)
O.aI("./resources/rook.obj",a.f,null,null,!1).aj(new L.i8(),null)}u=this.k4?"white":"black"
this.a=u+(" rook "+this.go)
this.y.h(0,$.i7)}}
L.i8.prototype={
$1:function(a){H.l(a,"$iS")
$.i7.sac(0,a.c)},
$S:2}
L.cP.prototype={
fo:function(a,b,c,d,e){var u,t,s,r
if($.iE==null){$.iE=E.aE(null,!0,null,"tile shape",null,null)
O.aI("./resources/tile.obj",a.f,null,null,!1).aj(new L.iF(),null)}u=this.fy
t=this.go
this.sbW(U.bB(V.dK(u-4.5,0,t-4.5)))
this.k3=!1
s=this.k2
r=s?"white":"black"
this.a=r+(" tile "+u+" "+t)
this.y.h(0,$.iE)
if(s){u=this.k3
t=this.k1.id
if(u)this.sa3(t.x)
else this.sa3(t.f)}else{u=this.k3
t=this.k1.id
if(u)this.sa3(t.y)
else this.sa3(t.r)}}}
L.iF.prototype={
$1:function(a){H.l(a,"$iS")
$.iE.sac(0,a.c)},
$S:2};(function aliases(){var u=J.a.prototype
u.f7=u.i
u=J.dA.prototype
u.f8=u.i
u=O.cx.prototype
u.d6=u.aJ
u.c3=u.ax
u=O.b3.prototype
u.d7=u.aJ
u.c4=u.ax
u=V.dH.prototype
u.f9=u.b2
u.d5=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"nw","nh",11)
u(P,"nx","ni",11)
u(P,"ny","nj",11)
t(P,"lZ","nv",3)
s(P.ei.prototype,"gdY",0,1,null,["$2","$1"],["b1","dZ"],37,0)
s(P.eS.prototype,"gjB",1,0,null,["$1","$0"],["az","jC"],39,0)
var n
s(n=E.S.prototype,"geB",0,0,null,["$1","$0"],["eC","kg"],0,0)
s(n,"geD",0,0,null,["$1","$0"],["eE","kh"],0,0)
s(n,"gez",0,0,null,["$1","$0"],["eA","kf"],0,0)
s(n,"gex",0,0,null,["$1","$0"],["ey","kc"],0,0)
r(n,"gka","kb",7)
r(n,"gkd","ke",7)
s(n=E.e3.prototype,"gda",0,0,null,["$1","$0"],["dd","dc"],0,0)
q(n,"gky","eI",3)
p(n=X.ea.prototype,"ghL","hM",10)
p(n,"ghz","hA",10)
p(n,"ghF","hG",5)
p(n,"ghP","hQ",19)
p(n,"ghN","hO",19)
p(n,"ghT","hU",5)
p(n,"ghX","hY",5)
p(n,"ghJ","hK",5)
p(n,"ghV","hW",5)
p(n,"ghH","hI",5)
p(n,"ghZ","i_",36)
p(n,"gi0","i1",10)
p(n,"gii","ij",12)
p(n,"gic","ie",12)
p(n,"gig","ih",12)
s(n=D.dC.prototype,"gdz",0,0,null,["$1","$0"],["dA","hR"],0,0)
p(n,"gi2","i3",38)
r(n,"ght","hu",20)
r(n,"gi6","i7",20)
o(V.a_.prototype,"gk","cR",21)
o(V.M.prototype,"gk","cR",21)
s(n=U.cu.prototype,"gbs",0,0,null,["$1","$0"],["U","aw"],0,0)
r(n,"ghr","hs",22)
r(n,"gi4","i5",22)
s(n=U.eb.prototype,"gbs",0,0,null,["$1","$0"],["U","aw"],0,0)
p(n,"ghj","hk",4)
p(n,"ghl","hm",4)
p(n,"ghn","ho",4)
p(n,"ghf","hg",4)
p(n,"ghh","hi",4)
p(n,"giQ","iR",4)
p(n,"giO","iP",4)
p(n,"giM","iN",4)
s(n=M.dl.prototype,"gZ",0,0,null,["$1","$0"],["W","b6"],0,0)
r(n,"gi8","i9",14)
r(n,"gia","ib",14)
s(M.dp.prototype,"gZ",0,0,null,["$1","$0"],["W","b6"],0,0)
s(n=M.dt.prototype,"gZ",0,0,null,["$1","$0"],["W","b6"],0,0)
r(n,"ghB","hC",7)
r(n,"ghD","hE",7)
s(n=O.ay.prototype,"gat",0,0,null,["$1","$0"],["K","b7"],0,0)
s(n,"giw",0,0,null,["$1","$0"],["dE","ix"],0,0)
r(n,"ghv","hw",23)
r(n,"ghx","hy",23)
s(O.cx.prototype,"gat",0,0,null,["$1","$0"],["K","b7"],0,0)
s(O.dV.prototype,"gat",0,0,null,["$1","$0"],["K","b7"],0,0)
s(X.dP.prototype,"gfC",0,0,null,["$1","$0"],["au","fD"],0,0)
t(L,"nR","nY",3)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.I,null)
s(P.I,[H.kt,J.a,J.ak,P.ew,P.d,H.dE,P.aF,H.c_,H.e9,H.i0,H.iM,P.bC,H.ct,H.cm,H.eO,P.ae,H.hk,H.hl,H.h8,H.ex,H.jf,P.eV,P.ef,P.ei,P.bh,P.ad,P.eg,P.cK,P.cL,P.is,P.jS,P.bc,P.al,P.jX,P.jQ,P.d_,P.jK,P.w,P.cn,P.jW,P.a5,P.aD,P.a1,P.bi,P.hP,P.dY,P.ep,P.h_,P.b,P.H,P.E,P.dG,P.a4,P.n,P.bK,W.fA,W.B,W.du,P.f_,P.jL,O.V,O.cy,E.fo,E.S,E.i1,E.e3,Z.ed,Z.ee,Z.cl,Z.bE,Z.bf,D.fw,D.bZ,D.y,O.k_,O.db,O.k0,X.dk,X.dB,X.hb,X.ho,X.aN,X.hF,X.iI,X.ea,D.bY,D.a3,D.dQ,D.dX,D.e0,D.e1,D.e2,V.x,V.aC,V.fQ,V.dJ,V.af,V.Z,V.aa,V.aO,V.dS,V.a_,V.M,U.eb,M.dp,M.dt,M.az,A.df,A.fj,A.hv,A.cS,A.cW,A.cU,A.cX,A.cV,A.cY,A.bX,A.e6,A.iV,F.a9,F.b2,F.bp,F.dU,F.ie,F.ig,F.ih,F.ai,F.j3,F.j4,F.j7,F.j8,O.bL,O.cx,T.iA,V.fg,V.bl,V.dH,V.id,V.cI,V.e4,V.cQ,V.iH,X.bU,X.cM,X.h4,X.dP,V.ii,L.hy])
s(J.a,[J.h7,J.dz,J.dA,J.aM,J.c1,J.bH,H.cB,W.h,W.ff,W.dg,W.bW,W.aX,W.aY,W.R,W.ej,W.fE,W.fF,W.el,W.ds,W.en,W.fH,W.p,W.eq,W.b_,W.h1,W.es,W.bD,W.hn,W.hz,W.ey,W.ez,W.b4,W.eA,W.eD,W.b6,W.eH,W.eJ,W.b9,W.eK,W.ba,W.eP,W.aP,W.eT,W.iG,W.bd,W.eW,W.iK,W.j_,W.f0,W.f2,W.f4,W.f6,W.f8,P.bk,P.eu,P.bo,P.eF,P.hW,P.eQ,P.br,P.eY,P.fk,P.eh,P.di,P.dv,P.dR,P.c5,P.dT,P.dZ,P.e7,P.eM])
s(J.dA,[J.hT,J.c6,J.bj])
t(J.ks,J.aM)
s(J.c1,[J.dy,J.dx])
t(P.hm,P.ew)
s(P.hm,[H.e8,W.jo,W.jn,P.fW])
t(H.a7,H.e8)
s(P.d,[H.fO,H.hr,H.jd])
s(P.aF,[H.hs,H.je])
s(P.bC,[H.hM,H.ha,H.iY,H.iO,H.fv,H.ib,P.cD,P.aV,P.iZ,P.iX,P.cJ,P.fy,P.fD])
s(H.cm,[H.kg,H.iw,H.h9,H.k9,H.ka,H.kb,P.jk,P.jj,P.jl,P.jm,P.jV,P.jU,P.jh,P.jg,P.jY,P.jZ,P.k4,P.jt,P.jB,P.jx,P.jy,P.jz,P.jv,P.jA,P.ju,P.jE,P.jF,P.jD,P.jC,P.it,P.iu,P.k2,P.jO,P.jN,P.jP,P.hq,P.fI,P.fJ,W.h2,W.h3,W.hB,W.hD,W.ia,W.ir,W.js,P.k5,P.fX,P.fY,P.fm,E.i2,E.i3,E.i4,E.iD,D.fS,D.fT,F.k6,F.ja,F.j9,F.j5,F.j6,T.iC,T.iB,V.kf,V.ik,V.ij,L.fs,L.fN,L.he,L.hi,L.hS,L.hZ,L.i8,L.iF])
s(H.iw,[H.ip,H.cj])
t(P.hp,P.ae)
t(H.aG,P.hp)
t(H.dD,H.fO)
t(H.dM,H.cB)
s(H.dM,[H.d0,H.d2])
t(H.d1,H.d0)
t(H.cA,H.d1)
t(H.d3,H.d2)
t(H.dN,H.d3)
s(H.dN,[H.hG,H.hH,H.hI,H.hJ,H.hK,H.dO,H.hL])
s(P.ei,[P.ji,P.eS])
t(P.jM,P.jX)
t(P.jJ,P.jQ)
t(P.dn,P.is)
t(P.fP,P.cn)
t(P.j0,P.fP)
t(P.j1,P.dn)
s(P.a1,[P.C,P.z])
s(P.aV,[P.c4,P.h5])
s(W.h,[W.K,W.fV,W.cv,W.b8,W.d4,W.bb,W.aQ,W.d6,W.jc,W.cZ,P.fn,P.bT])
s(W.K,[W.a8,W.bA,W.cs])
s(W.a8,[W.v,P.t])
s(W.v,[W.fh,W.fi,W.dh,W.bV,W.cr,W.fZ,W.cw,W.cz,W.ic])
s(W.aX,[W.cp,W.fB,W.fC])
t(W.fz,W.aY)
t(W.cq,W.ej)
t(W.em,W.el)
t(W.dr,W.em)
t(W.eo,W.en)
t(W.fG,W.eo)
t(W.aZ,W.dg)
t(W.er,W.eq)
t(W.fU,W.er)
t(W.et,W.es)
t(W.c0,W.et)
t(W.dw,W.cs)
t(W.b0,W.cv)
s(W.p,[W.bM,W.b7])
s(W.bM,[W.b1,W.ab,W.aR])
t(W.hA,W.ey)
t(W.hC,W.ez)
t(W.eB,W.eA)
t(W.hE,W.eB)
t(W.eE,W.eD)
t(W.cC,W.eE)
t(W.eI,W.eH)
t(W.hU,W.eI)
t(W.i9,W.eJ)
t(W.d5,W.d4)
t(W.il,W.d5)
t(W.eL,W.eK)
t(W.im,W.eL)
t(W.iq,W.eP)
t(W.eU,W.eT)
t(W.ix,W.eU)
t(W.d7,W.d6)
t(W.iy,W.d7)
t(W.eX,W.eW)
t(W.iJ,W.eX)
t(W.jb,W.cz)
t(W.bg,W.ab)
t(W.f1,W.f0)
t(W.jp,W.f1)
t(W.ek,W.ds)
t(W.f3,W.f2)
t(W.jG,W.f3)
t(W.f5,W.f4)
t(W.eC,W.f5)
t(W.f7,W.f6)
t(W.jR,W.f7)
t(W.f9,W.f8)
t(W.jT,W.f9)
t(W.jq,P.cK)
t(W.kK,W.jq)
t(W.jr,P.cL)
t(P.ac,P.jL)
t(P.ev,P.eu)
t(P.hj,P.ev)
t(P.eG,P.eF)
t(P.hN,P.eG)
t(P.eR,P.eQ)
t(P.iv,P.eR)
t(P.eZ,P.eY)
t(P.iL,P.eZ)
t(P.fl,P.eh)
t(P.hO,P.bT)
t(P.eN,P.eM)
t(P.io,P.eN)
s(E.fo,[Z.dj,A.cH,T.cN])
s(D.y,[D.bF,D.bG,D.G,X.hV])
s(X.hV,[X.dF,X.bJ,X.e5])
s(O.V,[D.dC,U.cu,M.dl])
s(D.fw,[U.fx,U.am])
t(U.dm,U.am)
s(A.cH,[A.dI,A.dW])
s(A.e6,[A.L,A.iR,A.iS,A.iU,A.iP,A.X,A.iQ,A.J,A.iT,A.iW,A.cT,A.ap,A.an,A.ah])
s(O.bL,[O.ay,O.dV])
s(O.cx,[O.ht,O.hu,O.b3])
s(O.b3,[O.hw,O.hx])
s(T.cN,[T.e_,T.cO])
t(T.iz,T.e_)
s(V.dH,[V.bn,V.cR])
t(X.h0,X.cM)
s(E.S,[L.cE,L.ft,L.fK,L.cP])
s(L.cE,[L.fp,L.hc,L.hf,L.hQ,L.hX,L.i5])
u(H.e8,H.e9)
u(H.d0,P.w)
u(H.d1,H.c_)
u(H.d2,P.w)
u(H.d3,H.c_)
u(P.ew,P.w)
u(W.ej,W.fA)
u(W.el,P.w)
u(W.em,W.B)
u(W.en,P.w)
u(W.eo,W.B)
u(W.eq,P.w)
u(W.er,W.B)
u(W.es,P.w)
u(W.et,W.B)
u(W.ey,P.ae)
u(W.ez,P.ae)
u(W.eA,P.w)
u(W.eB,W.B)
u(W.eD,P.w)
u(W.eE,W.B)
u(W.eH,P.w)
u(W.eI,W.B)
u(W.eJ,P.ae)
u(W.d4,P.w)
u(W.d5,W.B)
u(W.eK,P.w)
u(W.eL,W.B)
u(W.eP,P.ae)
u(W.eT,P.w)
u(W.eU,W.B)
u(W.d6,P.w)
u(W.d7,W.B)
u(W.eW,P.w)
u(W.eX,W.B)
u(W.f0,P.w)
u(W.f1,W.B)
u(W.f2,P.w)
u(W.f3,W.B)
u(W.f4,P.w)
u(W.f5,W.B)
u(W.f6,P.w)
u(W.f7,W.B)
u(W.f8,P.w)
u(W.f9,W.B)
u(P.eu,P.w)
u(P.ev,W.B)
u(P.eF,P.w)
u(P.eG,W.B)
u(P.eQ,P.w)
u(P.eR,W.B)
u(P.eY,P.w)
u(P.eZ,W.B)
u(P.eh,P.ae)
u(P.eM,P.w)
u(P.eN,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.r=W.dh.prototype
C.m=W.bV.prototype
C.t=W.bW.prototype
C.l=W.cr.prototype
C.D=W.dw.prototype
C.E=W.b0.prototype
C.F=J.a.prototype
C.a=J.aM.prototype
C.G=J.dx.prototype
C.d=J.dy.prototype
C.o=J.dz.prototype
C.i=J.c1.prototype
C.j=J.bH.prototype
C.N=J.bj.prototype
C.O=W.cC.prototype
C.x=J.hT.prototype
C.b=P.c5.prototype
C.p=J.c6.prototype
C.y=W.bg.prototype
C.z=W.cZ.prototype
C.A=new P.hP()
C.B=new P.j1()
C.k=new P.jM()
C.c=new A.bX(0,"ColorSourceType.None")
C.h=new A.bX(1,"ColorSourceType.Solid")
C.e=new A.bX(2,"ColorSourceType.Texture2D")
C.f=new A.bX(3,"ColorSourceType.TextureCube")
C.n=new P.bi(0)
C.C=new P.bi(5e6)
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
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
C.u=function(hooks) { return hooks; }

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
C.L=function(hooks) {
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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.z])
C.q=new P.j0(!1)})();(function staticFields(){$.aW=0
$.ck=null
$.l8=null
$.kL=!1
$.m4=null
$.lX=null
$.m8=null
$.k7=null
$.kc=null
$.kT=null
$.c8=null
$.d9=null
$.da=null
$.kM=!1
$.O=C.k
$.lT=null
$.lo=null
$.lu=null
$.cF=null
$.lz=null
$.lG=null
$.lJ=null
$.lI=null
$.j2=null
$.lH=null
$.na="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.n9="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.lt=null
$.fr=null
$.fM=null
$.hd=null
$.hh=null
$.hR=null
$.hY=null
$.i7=null
$.iE=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"o5","mc",function(){return H.m2("_$dart_dartClosure")})
u($,"o6","l_",function(){return H.m2("_$dart_js")})
u($,"oa","md",function(){return H.be(H.iN({
toString:function(){return"$receiver$"}}))})
u($,"ob","me",function(){return H.be(H.iN({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oc","mf",function(){return H.be(H.iN(null))})
u($,"od","mg",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"og","mj",function(){return H.be(H.iN(void 0))})
u($,"oh","mk",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"of","mi",function(){return H.be(H.lE(null))})
u($,"oe","mh",function(){return H.be(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oj","mm",function(){return H.be(H.lE(void 0))})
u($,"oi","ml",function(){return H.be(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oz","l0",function(){return P.ng()})
u($,"oB","de",function(){return[]})
u($,"oA","mq",function(){return P.kA("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"os","mp",function(){return Z.aK(0)})
u($,"om","mn",function(){return Z.aK(511)})
u($,"ou","aT",function(){return Z.aK(1)})
u($,"ot","bx",function(){return Z.aK(2)})
u($,"oo","bw",function(){return Z.aK(4)})
u($,"ov","by",function(){return Z.aK(8)})
u($,"ow","bz",function(){return Z.aK(16)})
u($,"op","dc",function(){return Z.aK(32)})
u($,"oq","dd",function(){return Z.aK(64)})
u($,"or","mo",function(){return Z.aK(96)})
u($,"ox","ch",function(){return Z.aK(128)})
u($,"on","bv",function(){return Z.aK(256)})
u($,"o4","mb",function(){return new V.fQ(1e-9)})
u($,"o3","N",function(){return $.mb()})})()
var v={mangledGlobalNames:{z:"int",C:"double",a1:"num",n:"String",a5:"bool",E:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.y]},{func:1,ret:P.E},{func:1,ret:P.E,args:[E.S]},{func:1,ret:-1},{func:1,ret:-1,args:[D.y]},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[P.z,[P.d,E.S]]},{func:1,ret:P.E,args:[F.a9]},{func:1,ret:P.E,args:[D.y]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:P.E,args:[W.p]},{func:1,ret:-1,args:[P.z,[P.d,M.az]]},{func:1,args:[,]},{func:1,ret:P.n,args:[P.z]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:-1,args:[P.z,[P.d,D.a3]]},{func:1,ret:P.C},{func:1,ret:-1,args:[P.z,[P.d,U.am]]},{func:1,ret:-1,args:[P.z,[P.d,V.af]]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.n,args:[W.b0]},{func:1,ret:P.E,args:[W.b7]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,args:[W.p]},{func:1,ret:P.a5,args:[W.K]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.E,args:[P.a1]},{func:1,ret:P.E,args:[,P.a4]},{func:1,ret:P.E,args:[P.z,,]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:-1,args:[P.I],opt:[P.a4]},{func:1,ret:P.a5,args:[[P.d,D.a3]]},{func:1,ret:-1,opt:[P.I]},{func:1,ret:-1,args:[,]},{func:1,ret:P.C,args:[P.C]},{func:1,ret:P.E,args:[,],opt:[P.a4]},{func:1,ret:[P.ad,,],args:[,]},{func:1,ret:P.E,args:[P.bc]},{func:1,ret:W.a8,args:[W.K]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cB,ArrayBufferView:H.cB,Float32Array:H.cA,Float64Array:H.cA,Int16Array:H.hG,Int32Array:H.hH,Int8Array:H.hI,Uint16Array:H.hJ,Uint32Array:H.hK,Uint8ClampedArray:H.dO,CanvasPixelArray:H.dO,Uint8Array:H.hL,HTMLBRElement:W.v,HTMLBaseElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLInputElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableCellElement:W.v,HTMLTableDataCellElement:W.v,HTMLTableHeaderCellElement:W.v,HTMLTableColElement:W.v,HTMLTableElement:W.v,HTMLTableRowElement:W.v,HTMLTableSectionElement:W.v,HTMLTemplateElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.ff,HTMLAnchorElement:W.fh,HTMLAreaElement:W.fi,Blob:W.dg,HTMLBodyElement:W.dh,HTMLCanvasElement:W.bV,CanvasRenderingContext2D:W.bW,CDATASection:W.bA,CharacterData:W.bA,Comment:W.bA,ProcessingInstruction:W.bA,Text:W.bA,CSSNumericValue:W.cp,CSSUnitValue:W.cp,CSSPerspective:W.fz,CSSCharsetRule:W.R,CSSConditionRule:W.R,CSSFontFaceRule:W.R,CSSGroupingRule:W.R,CSSImportRule:W.R,CSSKeyframeRule:W.R,MozCSSKeyframeRule:W.R,WebKitCSSKeyframeRule:W.R,CSSKeyframesRule:W.R,MozCSSKeyframesRule:W.R,WebKitCSSKeyframesRule:W.R,CSSMediaRule:W.R,CSSNamespaceRule:W.R,CSSPageRule:W.R,CSSRule:W.R,CSSStyleRule:W.R,CSSSupportsRule:W.R,CSSViewportRule:W.R,CSSStyleDeclaration:W.cq,MSStyleCSSProperties:W.cq,CSS2Properties:W.cq,CSSImageValue:W.aX,CSSKeywordValue:W.aX,CSSPositionValue:W.aX,CSSResourceValue:W.aX,CSSURLImageValue:W.aX,CSSStyleValue:W.aX,CSSMatrixComponent:W.aY,CSSRotation:W.aY,CSSScale:W.aY,CSSSkew:W.aY,CSSTranslation:W.aY,CSSTransformComponent:W.aY,CSSTransformValue:W.fB,CSSUnparsedValue:W.fC,DataTransferItemList:W.fE,HTMLDivElement:W.cr,XMLDocument:W.cs,Document:W.cs,DOMException:W.fF,ClientRectList:W.dr,DOMRectList:W.dr,DOMRectReadOnly:W.ds,DOMStringList:W.fG,DOMTokenList:W.fH,Element:W.a8,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.h,Accelerometer:W.h,AccessibleNode:W.h,AmbientLightSensor:W.h,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BackgroundFetchRegistration:W.h,BatteryManager:W.h,BroadcastChannel:W.h,CanvasCaptureMediaStreamTrack:W.h,DedicatedWorkerGlobalScope:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,Gyroscope:W.h,LinearAccelerationSensor:W.h,Magnetometer:W.h,MediaDevices:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,MIDIInput:W.h,MIDIOutput:W.h,MIDIPort:W.h,NetworkInformation:W.h,Notification:W.h,OffscreenCanvas:W.h,OrientationSensor:W.h,PaymentRequest:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationConnection:W.h,PresentationConnectionList:W.h,PresentationRequest:W.h,RelativeOrientationSensor:W.h,RemotePlayback:W.h,RTCDataChannel:W.h,DataChannel:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,Sensor:W.h,ServiceWorker:W.h,ServiceWorkerContainer:W.h,ServiceWorkerGlobalScope:W.h,ServiceWorkerRegistration:W.h,SharedWorker:W.h,SharedWorkerGlobalScope:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,VR:W.h,VRDevice:W.h,VRDisplay:W.h,VRSession:W.h,VisualViewport:W.h,WebSocket:W.h,Worker:W.h,WorkerGlobalScope:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,Clipboard:W.h,MojoInterfaceInterceptor:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioScheduledSourceNode:W.h,AudioWorkletNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConstantSourceNode:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.aZ,FileList:W.fU,FileWriter:W.fV,HTMLFormElement:W.fZ,Gamepad:W.b_,History:W.h1,HTMLCollection:W.c0,HTMLFormControlsCollection:W.c0,HTMLOptionsCollection:W.c0,HTMLDocument:W.dw,XMLHttpRequest:W.b0,XMLHttpRequestUpload:W.cv,XMLHttpRequestEventTarget:W.cv,ImageData:W.bD,HTMLImageElement:W.cw,KeyboardEvent:W.b1,Location:W.hn,HTMLAudioElement:W.cz,HTMLMediaElement:W.cz,MediaList:W.hz,MIDIInputMap:W.hA,MIDIOutputMap:W.hC,MimeType:W.b4,MimeTypeArray:W.hE,PointerEvent:W.ab,MouseEvent:W.ab,DragEvent:W.ab,DocumentFragment:W.K,ShadowRoot:W.K,Attr:W.K,DocumentType:W.K,Node:W.K,NodeList:W.cC,RadioNodeList:W.cC,Plugin:W.b6,PluginArray:W.hU,ProgressEvent:W.b7,ResourceProgressEvent:W.b7,RTCStatsReport:W.i9,HTMLSelectElement:W.ic,SourceBuffer:W.b8,SourceBufferList:W.il,SpeechGrammar:W.b9,SpeechGrammarList:W.im,SpeechRecognitionResult:W.ba,Storage:W.iq,CSSStyleSheet:W.aP,StyleSheet:W.aP,TextTrack:W.bb,TextTrackCue:W.aQ,VTTCue:W.aQ,TextTrackCueList:W.ix,TextTrackList:W.iy,TimeRanges:W.iG,Touch:W.bd,TouchEvent:W.aR,TouchList:W.iJ,TrackDefaultList:W.iK,CompositionEvent:W.bM,FocusEvent:W.bM,TextEvent:W.bM,UIEvent:W.bM,URL:W.j_,HTMLVideoElement:W.jb,VideoTrackList:W.jc,WheelEvent:W.bg,Window:W.cZ,DOMWindow:W.cZ,CSSRuleList:W.jp,ClientRect:W.ek,DOMRect:W.ek,GamepadList:W.jG,NamedNodeMap:W.eC,MozNamedAttrMap:W.eC,SpeechRecognitionResultList:W.jR,StyleSheetList:W.jT,SVGLength:P.bk,SVGLengthList:P.hj,SVGNumber:P.bo,SVGNumberList:P.hN,SVGPointList:P.hW,SVGStringList:P.iv,SVGAElement:P.t,SVGAnimateElement:P.t,SVGAnimateMotionElement:P.t,SVGAnimateTransformElement:P.t,SVGAnimationElement:P.t,SVGCircleElement:P.t,SVGClipPathElement:P.t,SVGDefsElement:P.t,SVGDescElement:P.t,SVGDiscardElement:P.t,SVGEllipseElement:P.t,SVGFEBlendElement:P.t,SVGFEColorMatrixElement:P.t,SVGFEComponentTransferElement:P.t,SVGFECompositeElement:P.t,SVGFEConvolveMatrixElement:P.t,SVGFEDiffuseLightingElement:P.t,SVGFEDisplacementMapElement:P.t,SVGFEDistantLightElement:P.t,SVGFEFloodElement:P.t,SVGFEFuncAElement:P.t,SVGFEFuncBElement:P.t,SVGFEFuncGElement:P.t,SVGFEFuncRElement:P.t,SVGFEGaussianBlurElement:P.t,SVGFEImageElement:P.t,SVGFEMergeElement:P.t,SVGFEMergeNodeElement:P.t,SVGFEMorphologyElement:P.t,SVGFEOffsetElement:P.t,SVGFEPointLightElement:P.t,SVGFESpecularLightingElement:P.t,SVGFESpotLightElement:P.t,SVGFETileElement:P.t,SVGFETurbulenceElement:P.t,SVGFilterElement:P.t,SVGForeignObjectElement:P.t,SVGGElement:P.t,SVGGeometryElement:P.t,SVGGraphicsElement:P.t,SVGImageElement:P.t,SVGLineElement:P.t,SVGLinearGradientElement:P.t,SVGMarkerElement:P.t,SVGMaskElement:P.t,SVGMetadataElement:P.t,SVGPathElement:P.t,SVGPatternElement:P.t,SVGPolygonElement:P.t,SVGPolylineElement:P.t,SVGRadialGradientElement:P.t,SVGRectElement:P.t,SVGScriptElement:P.t,SVGSetElement:P.t,SVGStopElement:P.t,SVGStyleElement:P.t,SVGElement:P.t,SVGSVGElement:P.t,SVGSwitchElement:P.t,SVGSymbolElement:P.t,SVGTSpanElement:P.t,SVGTextContentElement:P.t,SVGTextElement:P.t,SVGTextPathElement:P.t,SVGTextPositioningElement:P.t,SVGTitleElement:P.t,SVGUseElement:P.t,SVGViewElement:P.t,SVGGradientElement:P.t,SVGComponentTransferFunctionElement:P.t,SVGFEDropShadowElement:P.t,SVGMPathElement:P.t,SVGTransform:P.br,SVGTransformList:P.iL,AudioBuffer:P.fk,AudioParamMap:P.fl,AudioTrackList:P.fn,AudioContext:P.bT,webkitAudioContext:P.bT,BaseAudioContext:P.bT,OfflineAudioContext:P.hO,WebGLBuffer:P.di,WebGLFramebuffer:P.dv,WebGLProgram:P.dR,WebGL2RenderingContext:P.c5,WebGLShader:P.dT,WebGLTexture:P.dZ,WebGLUniformLocation:P.e7,SQLResultSetRowList:P.io})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dM.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
H.dN.$nativeSuperclassTag="ArrayBufferView"
W.d4.$nativeSuperclassTag="EventTarget"
W.d5.$nativeSuperclassTag="EventTarget"
W.d6.$nativeSuperclassTag="EventTarget"
W.d7.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(L.m6,[])
else L.m6([])})})()
//# sourceMappingURL=main.dart.js.map
