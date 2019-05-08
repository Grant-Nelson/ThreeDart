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
a[c]=function(){a[c]=function(){H.lp(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ir"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ir"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ir(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={i8:function i8(a){this.a=a},
ey:function(){return new P.c4("No element")},
ke:function(){return new P.c4("Too many elements")},
o:function o(a){this.a=a},
ef:function ef(){},
bo:function bo(){},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eL:function eL(a,b,c){this.a=a
this.b=b
this.$ti=c},
eM:function eM(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
eN:function eN(a,b,c){this.a=a
this.b=b
this.$ti=c},
cj:function cj(a,b,c){this.a=a
this.b=b
this.$ti=c},
h5:function h5(a,b,c){this.a=a
this.b=b
this.$ti=c},
bk:function bk(){},
dD:function dD(){},
dC:function dC(){},
bF:function(a){var u,t
u=H.F(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
l6:function(a){return v.types[H.a_(a)]},
ld:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.O(a).$ias},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a9(a)
if(typeof u!=="string")throw H.f(H.bA(a))
return u},
kv:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.ez(u)
t=u[0]
s=u[1]
return new H.f6(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
c0:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bs:function(a){return H.km(a)+H.io(H.bb(a),0,null)},
km:function(a){var u,t,s,r,q,p,o,n,m
u=J.O(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.N||!!u.$ich){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bF(r.length>1&&C.i.au(r,0)===36?C.i.aT(r,1):r)},
j0:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ku:function(a){var u,t,s,r
u=H.b([],[P.x])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.w)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.f(H.bA(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.aZ(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.f(H.bA(r))}return H.j0(u)},
j1:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bA(s))
if(s<0)throw H.f(H.bA(s))
if(s>65535)return H.ku(a)}return H.j0(a)},
ib:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.aZ(u,10))>>>0,56320|u&1023)}throw H.f(P.an(a,0,1114111,null,null))},
br:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kt:function(a){var u=H.br(a).getFullYear()+0
return u},
kr:function(a){var u=H.br(a).getMonth()+1
return u},
kn:function(a){var u=H.br(a).getDate()+0
return u},
ko:function(a){var u=H.br(a).getHours()+0
return u},
kq:function(a){var u=H.br(a).getMinutes()+0
return u},
ks:function(a){var u=H.br(a).getSeconds()+0
return u},
kp:function(a){var u=H.br(a).getMilliseconds()+0
return u},
bc:function(a){throw H.f(H.bA(a))},
e:function(a,b){if(a==null)J.bd(a)
throw H.f(H.cw(a,b))},
cw:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ar(!0,b,"index",null)
u=H.a_(J.bd(a))
if(!(b<0)){if(typeof u!=="number")return H.bc(u)
t=b>=u}else t=!0
if(t)return P.bm(b,a,"index",null,u)
return P.dh(b,"index",null)},
l3:function(a,b,c){if(a>c)return new P.bt(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bt(a,c,!0,b,"end","Invalid value")
return new P.ar(!0,b,"end",null)},
bA:function(a){return new P.ar(!0,a,null,null)},
l_:function(a){if(typeof a!=="number")throw H.f(H.bA(a))
return a},
f:function(a){var u
if(a==null)a=new P.da()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jE})
u.name=""}else u.toString=H.jE
return u},
jE:function(){return J.a9(this.dartException)},
q:function(a){throw H.f(a)},
w:function(a){throw H.f(P.aZ(a))},
aE:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fB(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fC:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jb:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
iW:function(a,b){return new H.f1(a,b==null?null:b.method)},
i9:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eC(a,t,u?null:b.receiver)},
ai:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.hZ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.aZ(s,16)&8191)===10)switch(r){case 438:return u.$1(H.i9(H.d(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.iW(H.d(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.jH()
p=$.jI()
o=$.jJ()
n=$.jK()
m=$.jN()
l=$.jO()
k=$.jM()
$.jL()
j=$.jQ()
i=$.jP()
h=q.a2(t)
if(h!=null)return u.$1(H.i9(H.F(t),h))
else{h=p.a2(t)
if(h!=null){h.method="call"
return u.$1(H.i9(H.F(t),h))}else{h=o.a2(t)
if(h==null){h=n.a2(t)
if(h==null){h=m.a2(t)
if(h==null){h=l.a2(t)
if(h==null){h=k.a2(t)
if(h==null){h=n.a2(t)
if(h==null){h=j.a2(t)
if(h==null){h=i.a2(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.iW(H.F(t),h))}}return u.$1(new H.fO(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dp()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.ar(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dp()
return a},
bD:function(a){var u
if(a==null)return new H.dS(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dS(a)},
l5:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.R(0,a[t],a[s])}return b},
lc:function(a,b,c,d,e,f){H.k(a,"$ib3")
switch(H.a_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.p("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var u
H.a_(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lc)
a.$identity=u
return u},
k6:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.O(d).$ia){u.$reflectionInfo=d
s=H.kv(u).r}else s=d
r=e?Object.create(new H.fm().constructor.prototype):Object.create(new H.bJ(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aw
if(typeof p!=="number")return p.K()
$.aw=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.iL(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.l6,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.iJ:H.i2
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.f("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.iL(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
k3:function(a,b,c,d){var u=H.i2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iL:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.k5(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.k3(t,!r,u,b)
if(t===0){r=$.aw
if(typeof r!=="number")return r.K()
$.aw=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bK
if(q==null){q=H.e5("self")
$.bK=q}return new Function(r+H.d(q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aw
if(typeof r!=="number")return r.K()
$.aw=r+1
o+=r
r="return function("+o+"){return this."
q=$.bK
if(q==null){q=H.e5("self")
$.bK=q}return new Function(r+H.d(q)+"."+H.d(u)+"("+o+");}")()},
k4:function(a,b,c,d){var u,t
u=H.i2
t=H.iJ
switch(b?-1:a){case 0:throw H.f(H.kz("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
k5:function(a,b){var u,t,s,r,q,p,o,n
u=$.bK
if(u==null){u=H.e5("self")
$.bK=u}t=$.iI
if(t==null){t=H.e5("receiver")
$.iI=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.k4(r,!p,s,b)
if(r===1){u="return function(){return this."+H.d(u)+"."+H.d(s)+"(this."+H.d(t)+");"
t=$.aw
if(typeof t!=="number")return t.K()
$.aw=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.d(u)+"."+H.d(s)+"(this."+H.d(t)+", "+n+");"
t=$.aw
if(typeof t!=="number")return t.K()
$.aw=t+1
return new Function(u+t+"}")()},
ir:function(a,b,c,d,e,f,g){return H.k6(a,b,H.a_(c),d,!!e,!!f,g)},
i2:function(a){return a.a},
iJ:function(a){return a.c},
e5:function(a){var u,t,s,r,q
u=new H.bJ("self","target","receiver","name")
t=J.ez(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
F:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.av(a,"String"))},
m6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.av(a,"double"))},
li:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.av(a,"num"))},
ip:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.av(a,"bool"))},
a_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.av(a,"int"))},
jC:function(a,b){throw H.f(H.av(a,H.bF(H.F(b).substring(2))))},
lk:function(a,b){throw H.f(H.k2(a,H.bF(H.F(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.jC(a,b)},
c:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else u=!0
if(u)return a
H.lk(a,b)},
hU:function(a){if(a==null)return a
if(!!J.O(a).$ia)return a
throw H.f(H.av(a,"List<dynamic>"))},
le:function(a,b){var u
if(a==null)return a
u=J.O(a)
if(!!u.$ia)return a
if(u[b])return a
H.jC(a,b)},
jw:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a_(u)]
else return a.$S()}return},
e0:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.jw(J.O(a))
if(u==null)return!1
return H.jn(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.ik)return a
$.ik=!0
try{if(H.e0(a,b))return a
u=H.hX(b)
t=H.av(a,u)
throw H.f(t)}finally{$.ik=!1}},
is:function(a,b){if(a!=null&&!H.iq(a,b))H.q(H.av(a,H.hX(b)))
return a},
av:function(a,b){return new H.fD("TypeError: "+P.ej(a)+": type '"+H.jr(a)+"' is not a subtype of type '"+b+"'")},
k2:function(a,b){return new H.e6("CastError: "+P.ej(a)+": type '"+H.jr(a)+"' is not a subtype of type '"+b+"'")},
jr:function(a){var u,t
u=J.O(a)
if(!!u.$ibL){t=H.jw(u)
if(t!=null)return H.hX(t)
return"Closure"}return H.bs(a)},
lp:function(a){throw H.f(new P.ea(H.F(a)))},
kz:function(a){return new H.fb(a)},
jx:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bb:function(a){if(a==null)return
return a.$ti},
m7:function(a,b,c){return H.bE(a["$a"+H.d(c)],H.bb(b))},
hP:function(a,b,c,d){var u
H.F(c)
H.a_(d)
u=H.bE(a["$a"+H.d(c)],H.bb(b))
return u==null?null:u[d]},
Z:function(a,b,c){var u
H.F(b)
H.a_(c)
u=H.bE(a["$a"+H.d(b)],H.bb(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.a_(b)
u=H.bb(a)
return u==null?null:u[b]},
hX:function(a){return H.ba(a,null)},
ba:function(a,b){var u,t
H.h(b,"$ia",[P.l],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bF(a[0].name)+H.io(a,1,b)
if(typeof a=="function")return H.bF(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a_(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.d(b[t])}if('func' in a)return H.kQ(a,b)
if('futureOr' in a)return"FutureOr<"+H.ba("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kQ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.l]
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
o=C.i.K(o,b[m])
l=t[p]
if(l!=null&&l!==P.H)o+=" extends "+H.ba(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.ba(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.ba(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.ba(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.l4(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.F(u[g])
i=i+h+H.ba(d[c],b)+(" "+H.d(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
io:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.l],"$aa")
if(a==null)return""
u=new P.aO("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.ba(p,c)}return"<"+u.i(0)+">"},
bE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
e_:function(a,b,c,d){var u,t
H.F(b)
H.hU(c)
H.F(d)
if(a==null)return!1
u=H.bb(a)
t=J.O(a)
if(t[b]==null)return!1
return H.ju(H.bE(t[d],u),null,c,null)},
h:function(a,b,c,d){H.F(b)
H.hU(c)
H.F(d)
if(a==null)return a
if(H.e_(a,b,c,d))return a
throw H.f(H.av(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bF(b.substring(2))+H.io(c,0,null),v.mangledGlobalNames)))},
ju:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aq(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aq(a[t],b,c[t],d))return!1
return!0},
m4:function(a,b,c){return a.apply(b,H.bE(J.O(b)["$a"+H.d(c)],H.bb(b)))},
jz:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="H"||a.name==="C"||a===-1||a===-2||H.jz(u)}return!1},
iq:function(a,b){var u,t
if(a==null)return b==null||b.name==="H"||b.name==="C"||b===-1||b===-2||H.jz(b)
if(b==null||b===-1||b.name==="H"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.iq(a,"type" in b?b.type:null))return!0
if('func' in b)return H.e0(a,b)}u=J.O(a).constructor
t=H.bb(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aq(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.iq(a,b))throw H.f(H.av(a,H.hX(b)))
return a},
aq:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="H"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="H"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="C")return!0
if('func' in c)return H.jn(a,b,c,d)
if('func' in a)return c.name==="b3"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aq("type" in a?a.type:null,b,s,d)
else if(H.aq(a,b,s,d))return!0
else{if(!('$i'+"bR" in t.prototype))return!1
r=t.prototype["$a"+"bR"]
q=H.bE(r,u?a.slice(1):null)
return H.aq(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.ju(H.bE(m,u),b,p,d)},
jn:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aq(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aq(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aq(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aq(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.lh(h,b,g,d)},
lh:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aq(c[r],d,a[r],b))return!1}return!0},
m5:function(a,b,c){Object.defineProperty(a,H.F(b),{value:c,enumerable:false,writable:true,configurable:true})},
lf:function(a){var u,t,s,r,q,p
u=H.F($.jy.$1(a))
t=$.hN[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hT[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.F($.jt.$2(a,u))
if(u!=null){t=$.hN[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hT[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.hW(s)
$.hN[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.hT[u]=s
return s}if(q==="-"){p=H.hW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.jB(a,s)
if(q==="*")throw H.f(P.jc(u))
if(v.leafTags[u]===true){p=H.hW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.jB(a,s)},
jB:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ix(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hW:function(a){return J.ix(a,!1,null,!!a.$ias)},
lg:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hW(u)
else return J.ix(u,c,null,null)},
la:function(){if(!0===$.iw)return
$.iw=!0
H.lb()},
lb:function(){var u,t,s,r,q,p,o,n
$.hN=Object.create(null)
$.hT=Object.create(null)
H.l9()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jD.$1(q)
if(p!=null){o=H.lg(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
l9:function(){var u,t,s,r,q,p,o
u=C.S()
u=H.bz(C.P,H.bz(C.U,H.bz(C.A,H.bz(C.A,H.bz(C.T,H.bz(C.Q,H.bz(C.R(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.jy=new H.hQ(q)
$.jt=new H.hR(p)
$.jD=new H.hS(o)},
bz:function(a,b){return a(b)||b},
kg:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.er("Illegal RegExp pattern ("+String(r)+")",a,null))},
ln:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
iA:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
f6:function f6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fB:function fB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f1:function f1(a,b){this.a=a
this.b=b},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
fO:function fO(a){this.a=a},
hZ:function hZ(a){this.a=a},
dS:function dS(a){this.a=a
this.b=null},
bL:function bL(){},
fs:function fs(){},
fm:function fm(){},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fD:function fD(a){this.a=a},
e6:function e6(a){this.a=a},
fb:function fb(a){this.a=a},
az:function az(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eF:function eF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cZ:function cZ(a,b){this.a=a
this.$ti=b},
eG:function eG(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
eB:function eB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ct:function(a){return a},
cs:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cw(b,a))},
kP:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.l3(a,b,c))
return b},
d7:function d7(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
d8:function d8(){},
eY:function eY(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
l4:function(a){return J.iQ(a?Object.keys(a):[],null)},
lj:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ix:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hO:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.iw==null){H.la()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.f(P.jc("Return interceptor for "+H.d(t(a,u))))}r=a.constructor
q=r==null?null:r[$.iC()]
if(q!=null)return q
q=H.lf(a)
if(q!=null)return q
if(typeof a=="function")return C.V
t=Object.getPrototypeOf(a)
if(t==null)return C.D
if(t===Object.prototype)return C.D
if(typeof r=="function"){Object.defineProperty(r,$.iC(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
kf:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.i1(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.an(a,0,4294967295,"length",null))
return J.iQ(new Array(a),b)},
iQ:function(a,b){return J.ez(H.b(a,[b]))},
ez:function(a){H.hU(a)
a.fixed$length=Array
return a},
O:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cT.prototype
return J.cS.prototype}if(typeof a=="string")return J.bn.prototype
if(a==null)return J.cU.prototype
if(typeof a=="boolean")return J.eA.prototype
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.H)return a
return J.hO(a)},
it:function(a){if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.H)return a
return J.hO(a)},
iu:function(a){if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.H)return a
return J.hO(a)},
iv:function(a){if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.H))return J.ch.prototype
return a},
ah:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.H)return a
return J.hO(a)},
R:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).t(a,b)},
jW:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ld(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.it(a).l(a,b)},
jX:function(a,b,c,d){return J.ah(a).eQ(a,b,c,d)},
e1:function(a,b){return J.ah(a).ha(a,b)},
iF:function(a,b){return J.ah(a).v(a,b)},
i_:function(a,b){return J.iu(a).Z(a,b)},
jY:function(a){return J.ah(a).gi8(a)},
cA:function(a){return J.O(a).gI(a)},
bH:function(a){return J.iu(a).gL(a)},
bd:function(a){return J.it(a).gn(a)},
jZ:function(a){return J.ah(a).gjl(a)},
i0:function(a,b){return J.ah(a).aD(a,b)},
iG:function(a){return J.iu(a).ja(a)},
k_:function(a,b,c){return J.iv(a).aU(a,b,c)},
k0:function(a){return J.iv(a).jt(a)},
a9:function(a){return J.O(a).i(a)},
X:function X(){},
eA:function eA(){},
cU:function cU(){},
cW:function cW(){},
f3:function f3(){},
ch:function ch(){},
b6:function b6(){},
ay:function ay(a){this.$ti=a},
i7:function i7(a){this.$ti=a},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cV:function cV(){},
cT:function cT(){},
cS:function cS(){},
bn:function bn(){}},P={
kF:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.kX()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bB(new P.h7(u),1)).observe(t,{childList:true})
return new P.h6(u,t,s)}else if(self.setImmediate!=null)return P.kY()
return P.kZ()},
kG:function(a){self.scheduleImmediate(H.bB(new P.h8(H.j(a,{func:1,ret:-1})),0))},
kH:function(a){self.setImmediate(H.bB(new P.h9(H.j(a,{func:1,ret:-1})),0))},
kI:function(a){P.id(C.q,H.j(a,{func:1,ret:-1}))},
id:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.h.W(a.a,1000)
return P.kN(u<0?0:u,b)},
ja:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.aC]})
u=C.h.W(a.a,1000)
return P.kO(u<0?0:u,b)},
kN:function(a,b){var u=new P.dT(!0)
u.eL(a,b)
return u},
kO:function(a,b){var u=new P.dT(!1)
u.eM(a,b)
return u},
kJ:function(a,b){var u,t,s
b.a=1
try{a.dT(new P.hh(b),new P.hi(b),null)}catch(s){u=H.ai(s)
t=H.bD(s)
P.ll(new P.hj(b,u,t))}},
ji:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iap")
if(u>=4){t=b.bG()
b.a=a.a
b.c=a.c
P.cm(b,t)}else{t=H.k(b.c,"$iaH")
b.a=2
b.c=a
a.cS(t)}},
cm:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.k(t.c,"$ia0")
t=t.b
p=q.a
o=q.b
t.toString
P.hJ(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cm(u.a,b)}t=u.a
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
if(k){H.k(m,"$ia0")
t=t.b
p=m.a
o=m.b
t.toString
P.hJ(null,null,t,p,o)
return}j=$.N
if(j!=l)$.N=l
else j=null
t=b.c
if(t===8)new P.hn(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hm(s,b,m).$0()}else if((t&2)!==0)new P.hl(u,s,b).$0()
if(j!=null)$.N=j
t=s.b
if(!!J.O(t).$ibR){if(t.a>=4){i=H.k(o.c,"$iaH")
o.c=null
b=o.aY(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.ji(t,o)
return}}h=b.b
i=H.k(h.c,"$iaH")
h.c=null
b=h.aY(i)
t=s.a
p=s.b
if(!t){H.A(p,H.u(h,0))
h.a=4
h.c=p}else{H.k(p,"$ia0")
h.a=8
h.c=p}u.a=h
t=h}},
kT:function(a,b){if(H.e0(a,{func:1,args:[P.H,P.a7]}))return H.j(a,{func:1,ret:null,args:[P.H,P.a7]})
if(H.e0(a,{func:1,args:[P.H]}))return H.j(a,{func:1,ret:null,args:[P.H]})
throw H.f(P.i1(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kS:function(){var u,t
for(;u=$.by,u!=null;){$.cv=null
t=u.b
$.by=t
if(t==null)$.cu=null
u.a.$0()}},
kW:function(){$.il=!0
try{P.kS()}finally{$.cv=null
$.il=!1
if($.by!=null)$.iD().$1(P.jv())}},
jq:function(a){var u=new P.dG(H.j(a,{func:1,ret:-1}))
if($.by==null){$.cu=u
$.by=u
if(!$.il)$.iD().$1(P.jv())}else{$.cu.b=u
$.cu=u}},
kV:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.by
if(u==null){P.jq(a)
$.cv=$.cu
return}t=new P.dG(a)
s=$.cv
if(s==null){t.b=u
$.cv=t
$.by=t}else{t.b=s.b
s.b=t
$.cv=t
if(t.b==null)$.cu=t}},
ll:function(a){var u,t
u={func:1,ret:-1}
H.j(a,u)
t=$.N
if(C.l===t){P.hL(null,null,C.l,a)
return}t.toString
P.hL(null,null,t,H.j(t.bQ(a),u))},
j9:function(a,b){var u,t
u={func:1,ret:-1}
H.j(b,u)
t=$.N
if(t===C.l){t.toString
return P.id(a,b)}return P.id(a,H.j(t.bQ(b),u))},
kD:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aC]}
H.j(b,u)
t=$.N
if(t===C.l){t.toString
return P.ja(a,b)}s=t.d3(b,P.aC)
$.N.toString
return P.ja(a,H.j(s,u))},
hJ:function(a,b,c,d,e){var u={}
u.a=d
P.kV(new P.hK(u,e))},
jo:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.N
if(t===c)return d.$0()
$.N=c
u=t
try{t=d.$0()
return t}finally{$.N=u}},
jp:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.N
if(t===c)return d.$1(e)
$.N=c
u=t
try{t=d.$1(e)
return t}finally{$.N=u}},
kU:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.N
if(t===c)return d.$2(e,f)
$.N=c
u=t
try{t=d.$2(e,f)
return t}finally{$.N=u}},
hL:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.bQ(d):c.i9(d,-1)
P.jq(d)},
h7:function h7(a){this.a=a},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
dT:function dT(a){this.a=a
this.b=null
this.c=0},
hD:function hD(a,b){this.a=a
this.b=b},
hC:function hC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aH:function aH(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
hg:function hg(a,b){this.a=a
this.b=b},
hk:function hk(a,b){this.a=a
this.b=b},
hh:function hh(a){this.a=a},
hi:function hi(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ho:function ho(a){this.a=a},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
dG:function dG(a){this.a=a
this.b=null},
fn:function fn(){},
fp:function fp(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
c5:function c5(){},
fo:function fo(){},
aC:function aC(){},
a0:function a0(a,b){this.a=a
this.b=b},
hG:function hG(){},
hK:function hK(a,b){this.a=a
this.b=b},
hr:function hr(){},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function(a,b,c){H.hU(a)
return H.h(H.l5(a,new H.az([b,c])),"$iiR",[b,c],"$aiR")},
kh:function(a,b){return new H.az([a,b])},
d_:function(a,b,c,d){return new P.hq([d])},
ij:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kM:function(a,b,c){var u=new P.dM(a,b,[c])
u.c=a.e
return u},
kd:function(a,b,c){var u,t
if(P.im(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.l])
t=$.cz()
C.a.h(t,a)
try{P.kR(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.j7(b,H.le(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
i6:function(a,b,c){var u,t,s
if(P.im(a))return b+"..."+c
u=new P.aO(b)
t=$.cz()
C.a.h(t,a)
try{s=u
s.a=P.j7(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
im:function(a){var u,t
for(u=0;t=$.cz(),u<t.length;++u)if(a===t[u])return!0
return!1},
kR:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.l],"$aa")
u=a.gL(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.d(u.gD())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gD();++s
if(!u.w()){if(s<=4){C.a.h(b,H.d(o))
return}q=H.d(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gD();++s
for(;u.w();o=n,n=m){m=u.gD();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.d(o)
q=H.d(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
iS:function(a,b){var u,t,s
u=P.d_(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.w)(a),++s)u.h(0,H.A(a[s],b))
return u},
iT:function(a){var u,t
u={}
if(P.im(a))return"{...}"
t=new P.aO("")
try{C.a.h($.cz(),a)
t.a+="{"
u.a=!0
a.X(0,new P.eK(u,t))
t.a+="}"}finally{u=$.cz()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hq:function hq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bx:function bx(a){this.a=a
this.c=this.b=null},
dM:function dM(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eH:function eH(){},
P:function P(){},
eJ:function eJ(){},
eK:function eK(a,b){this.a=a
this.b=b},
bp:function bp(){},
hw:function hw(){},
dN:function dN(){},
bM:function bM(){},
bN:function bN(){},
eh:function eh(){},
ew:function ew(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ev:function ev(a){this.a=a},
fQ:function fQ(a){this.a=a},
fR:function fR(){},
hE:function hE(a){this.b=this.a=0
this.c=a},
kb:function(a){if(a instanceof H.bL)return a.i(0)
return"Instance of '"+H.bs(a)+"'"},
kj:function(a,b,c,d){var u,t
H.A(b,d)
u=J.kf(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.R(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
kk:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gL(a);s.w();)C.a.h(t,H.A(s.gD(),c))
if(b)return t
return H.h(J.ez(t),"$ia",u,"$aa")},
ic:function(a,b,c){var u,t
u=P.x
H.h(a,"$in",[u],"$an")
if(a.constructor===Array){H.h(a,"$iay",[u],"$aay")
t=a.length
c=P.j2(b,c,t,null,null,null)
return H.j1(b>0||c<t?C.a.ek(a,b,c):a)}return P.kB(a,b,c)},
kB:function(a,b,c){var u,t,s
H.h(a,"$in",[P.x],"$an")
u=J.bH(a)
for(t=0;t<b;++t)if(!u.w())throw H.f(P.an(b,0,t,null,null))
s=[]
for(;u.w();)s.push(u.gD())
return H.j1(s)},
kw:function(a,b,c){return new H.eB(a,H.kg(a,!1,!0,!1))},
j7:function(a,b,c){var u=J.bH(b)
if(!u.w())return a
if(c.length===0){do a+=H.d(u.gD())
while(u.w())}else{a+=H.d(u.gD())
for(;u.w();)a=a+c+H.d(u.gD())}return a},
jm:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.x],"$aa")
if(c===C.x){u=$.jV().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.il(H.A(b,H.Z(c,"bM",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ib(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
k7:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
k8:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cJ:function(a){if(a>=10)return""+a
return"0"+a},
iN:function(a,b,c,d,e,f){return new P.b1(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ej:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kb(a)},
k1:function(a){return new P.ar(!1,null,null,a)},
i1:function(a,b,c){return new P.ar(!0,a,b,c)},
dh:function(a,b,c){return new P.bt(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.bt(b,c,!0,a,d,"Invalid value")},
j2:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.an(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.an(b,a,c,"end",f))
return b}return c},
bm:function(a,b,c,d,e){var u=H.a_(e==null?J.bd(b):e)
return new P.ex(b,u,!0,a,c,"Index out of range")},
af:function(a){return new P.fP(a)},
jc:function(a){return new P.fN(a)},
j6:function(a){return new P.c4(a)},
aZ:function(a){return new P.e8(a)},
p:function(a){return new P.dJ(a)},
iz:function(a){H.lj(a)},
I:function I(){},
b_:function b_(a,b){this.a=a
this.b=b},
v:function v(){},
b1:function b1(a){this.a=a},
ed:function ed(){},
ee:function ee(){},
b2:function b2(){},
da:function da(){},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bt:function bt(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ex:function ex(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fP:function fP(a){this.a=a},
fN:function fN(a){this.a=a},
c4:function c4(a){this.a=a},
e8:function e8(a){this.a=a},
f2:function f2(){},
dp:function dp(){},
ea:function ea(a){this.a=a},
dJ:function dJ(a){this.a=a},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(){},
x:function x(){},
n:function n(){},
ax:function ax(){},
a:function a(){},
C:function C(){},
a8:function a8(){},
H:function H(){},
a7:function a7(){},
l:function l(){},
aO:function aO(a){this.a=a},
l2:function(a){var u,t
u=J.O(a)
if(!!u.$ib4){t=u.gd7(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.dW(a.data,a.height,a.width)},
l1:function(a){if(a instanceof P.dW)return{data:a.a,height:a.b,width:a.c}
return a},
l0:function(a,b){var u={}
a.X(0,new P.hM(u))
return u},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
hM:function hM(a){this.a=a},
en:function en(a,b){this.a=a
this.b=b},
eo:function eo(){},
ep:function ep(){},
c1:function c1(){},
m:function m(){},
cD:function cD(){},
cP:function cP(){},
df:function df(){},
bu:function bu(){},
dl:function dl(){},
dt:function dt(){},
dB:function dB(){}},W={
iH:function(a){var u=document.createElement("a")
return u},
i3:function(a,b){var u=document.createElement("canvas")
return u},
k9:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).a1(u,a,b,c)
t.toString
u=W.y
u=new H.cj(new W.a4(t),H.j(new W.eg(),{func:1,ret:P.I,args:[u]}),[u])
return H.k(u.gar(u),"$iJ")},
ka:function(a){H.k(a,"$ibj")
return"wheel"},
bQ:function(a){var u,t,s
u="element tag unavailable"
try{t=J.jZ(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ai(s)}return u},
hp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jk:function(a,b,c,d){var u,t
u=W.hp(W.hp(W.hp(W.hp(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
W:function(a,b,c,d,e){var u,t
u=W.js(new W.hf(c),W.i)
t=u!=null
if(t&&!0){H.j(u,{func:1,args:[W.i]})
if(t)J.jX(a,b,u,!1)}return new W.he(a,b,u,!1,[e])},
jj:function(a){var u,t
u=W.iH(null)
t=window.location
u=new W.b9(new W.hv(u,t))
u.ey(a)
return u},
kK:function(a,b,c,d){H.k(a,"$iJ")
H.F(b)
H.F(c)
H.k(d,"$ib9")
return!0},
kL:function(a,b,c,d){var u,t,s
H.k(a,"$iJ")
H.F(b)
H.F(c)
u=H.k(d,"$ib9").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
jl:function(){var u,t,s,r,q
u=P.l
t=P.iS(C.t,u)
s=H.u(C.t,0)
r=H.j(new W.hB(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.hA(t,P.d_(null,null,null,u),P.d_(null,null,null,u),P.d_(null,null,null,u),null)
t.eK(null,new H.eN(C.t,r,[s,u]),q,null)
return t},
js:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.N
if(u===C.l)return a
return u.d3(a,b)},
t:function t(){},
cB:function cB(){},
e2:function e2(){},
bI:function bI(){},
aW:function aW(){},
be:function be(){},
bf:function bf(){},
aX:function aX(){},
bO:function bO(){},
e9:function e9(){},
ak:function ak(){},
bP:function bP(){},
ec:function ec(){},
cK:function cK(){},
cL:function cL(){},
hb:function hb(a,b){this.a=a
this.b=b},
J:function J(){},
eg:function eg(){},
i:function i(){},
bj:function bj(){},
eq:function eq(){},
cQ:function cQ(){},
bl:function bl(){},
cR:function cR(){},
b4:function b4(){},
bS:function bS(){},
aA:function aA(){},
d0:function d0(){},
bY:function bY(){},
Y:function Y(){},
a4:function a4(a){this.a=a},
y:function y(){},
bZ:function bZ(){},
dg:function dg(){},
fc:function fc(){},
bv:function bv(){},
dq:function dq(){},
dr:function dr(){},
fr:function fr(){},
c6:function c6(){},
aD:function aD(){},
au:function au(){},
fA:function fA(){},
b8:function b8(){},
h3:function h3(){},
aG:function aG(){},
ck:function ck(){},
cl:function cl(){},
dI:function dI(){},
dO:function dO(){},
ha:function ha(){},
hc:function hc(a){this.a=a},
hd:function hd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ii:function ii(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
he:function he(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hf:function hf(a){this.a=a},
b9:function b9(a){this.a=a},
aa:function aa(){},
d9:function d9(a){this.a=a},
f_:function f_(a){this.a=a},
eZ:function eZ(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(){},
hx:function hx(){},
hy:function hy(){},
hA:function hA(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hB:function hB(){},
hz:function hz(){},
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ac:function ac(){},
hv:function hv(a,b){this.a=a
this.b=b},
dX:function dX(a){this.a=a},
hF:function hF(a){this.a=a},
dH:function dH(){},
dK:function dK(){},
dL:function dL(){},
dP:function dP(){},
dQ:function dQ(){},
dU:function dU(){},
dV:function dV(){},
dY:function dY(){},
dZ:function dZ(){}},O={
i4:function(a){var u=new O.S([a])
u.cq(a)
return u},
S:function S(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bX:function bX(){this.b=this.a=null},
d2:function d2(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eP:function eP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bW:function bW(){},
eQ:function eQ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aB:function aB(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eS:function eS(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eT:function eT(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bw:function bw(){}},E={
ky:function(a,b){var u=new E.f7(a,b)
u.es(a,b)
return u},
kC:function(a,b,c,d,e){var u,t,s,r
u=J.O(a)
if(!!u.$ibe)return E.j8(a,!0,!0,!0,!1)
t=W.i3(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gd5(a).h(0,t)
r=E.j8(t,!0,!0,!0,!1)
r.a=a
return r},
j8:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dy()
t=P.ki(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.l,null)
s=C.p.bm(a,"webgl",t)
s=H.k(s==null?C.p.bm(a,"experimental-webgl",t):s,"$ibu")
if(s==null)H.q(P.p("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.ky(s,a)
r=new T.fu(s)
r.b=H.a_((s&&C.b).cj(s,3379))
r.c=H.a_(C.b.cj(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dE(a)
q=new X.eD()
q.c=new X.aM(!1,!1,!1)
q.sh7(P.d_(null,null,null,P.x))
r.b=q
q=new X.eU(r)
q.f=0
q.r=V.dd()
q.x=V.dd()
q.Q=1
q.ch=1
r.c=q
q=new X.eI(r)
q.r=0
q.x=V.dd()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.fz(r)
q.e=0
q.f=V.dd()
q.r=V.dd()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sf4(H.b([],[[P.c5,P.H]]))
q=r.z
p=document
o=W.Y
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.W(p,"contextmenu",H.j(r.gfw(),n),!1,o))
q=r.z
m=W.i
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.W(a,"focus",H.j(r.gfE(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.W(a,"blur",H.j(r.gfp(),l),!1,m))
q=r.z
k=W.aA
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.W(p,"keyup",H.j(r.gfI(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.W(p,"keydown",H.j(r.gfG(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.W(a,"mousedown",H.j(r.gfM(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.W(a,"mouseup",H.j(r.gfQ(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.W(a,"mousemove",H.j(r.gfO(),n),!1,o))
k=r.z
j=W.aG;(k&&C.a).h(k,W.W(a,H.F(W.ka(a)),H.j(r.gfS(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.W(p,"mousemove",H.j(r.gfA(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.W(p,"mouseup",H.j(r.gfC(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.W(p,"pointerlockchange",H.j(r.gfU(),l),!1,m))
m=r.z
l=W.au
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.W(a,"touchstart",H.j(r.gh4(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.W(a,"touchend",H.j(r.gh0(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.W(a,"touchmove",H.j(r.gh2(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.b_(Date.now(),!1)
u.cy=0
u.cU()
return u},
e4:function e4(){},
a5:function a5(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f7:function f7(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
f8:function f8(a){this.a=a},
f9:function f9(a){this.a=a},
fa:function fa(a){this.a=a},
dy:function dy(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fw:function fw(a){this.a=a}},Z={
ih:function(a,b,c){var u
H.h(c,"$ia",[P.x],"$aa")
u=a.createBuffer()
C.b.af(a,b,u)
C.b.d4(a,b,new Int16Array(H.ct(c)),35044)
C.b.af(a,b,null)
return new Z.dF(b,u)},
ao:function(a){return new Z.aF(a)},
dF:function dF(a,b){this.a=a
this.b=b},
cE:function cE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h4:function h4(a){this.a=a},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a){this.a=a}},D={
al:function(){var u=new D.bi()
u.sab(null)
u.saG(null)
u.c=null
u.d=0
return u},
e7:function e7(){},
bi:function bi(){var _=this
_.d=_.c=_.b=_.a=null},
ek:function ek(a){this.a=a},
el:function el(a){this.a=a},
z:function z(a){this.a=a
this.b=null},
bT:function bT(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bU:function bU(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
L:function L(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
b0:function b0(){var _=this
_.d=_.c=_.b=_.a=null},
T:function T(){},
cY:function cY(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dc:function dc(){},
dn:function dn(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){}},X={cG:function cG(a,b){this.a=a
this.b=b},cX:function cX(a,b){this.a=a
this.b=b},eD:function eD(){var _=this
_.d=_.c=_.b=_.a=null},eI:function eI(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},eU:function eU(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},fz:function fz(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dE:function dE(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kc:function(a,b,c,d,e,f,g){var u,t
u=new X.es()
t=new V.bg(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.j3
if(t==null){t=V.kx(0,0,1,1)
$.j3=t}u.r=t
return u},
cH:function cH(){},
es:function es(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
db:function db(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ds:function ds(){}},V={
iB:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.ec(a-b,u)
return(a<0?a+u:a)+b},
E:function(a,b,c){if(a==null)return C.i.a3("null",c)
return C.i.a3(C.j.dU(Math.abs(a-0)<$.G().a?0:a,b),c+b+1)},
bC:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.v],"$aa")
u=H.b([],[P.l])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.w)(a),++r){q=V.E(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.R(u,p,C.i.a3(u[p],s))}return u},
iy:function(a,b){return C.j.jq(Math.pow(b,C.O.c3(Math.log(H.l_(a))/Math.log(b))))},
ia:function(){var u=$.iV
if(u==null){u=V.aL(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.iV=u}return u},
aL:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
iU:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.H(0,Math.sqrt(c.N(c)))
t=b.aJ(u)
s=t.H(0,Math.sqrt(t.N(t)))
r=u.aJ(s)
q=new V.K(a.a,a.b,a.c)
p=s.aE(0).N(q)
o=r.aE(0).N(q)
n=u.aE(0).N(q)
return V.aL(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
dd:function(){var u=$.iZ
if(u==null){u=new V.ad(0,0)
$.iZ=u}return u},
j_:function(){var u=$.c_
if(u==null){u=new V.at(0,0,0)
$.c_=u}return u},
kx:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dj(a,b,c,d)},
ci:function(){var u=$.jg
if(u==null){u=new V.K(0,0,0)
$.jg=u}return u},
jh:function(){var u=$.jf
if(u==null){u=new V.K(0,1,0)
$.jf=u}return u},
kE:function(){var u=$.fS
if(u==null){u=new V.K(0,0,1)
$.fS=u}return u},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ei:function ei(a){this.a=a},
d3:function d3(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a1:function a1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ad:function ad(a,b){this.a=a
this.b=b},
at:function at(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dj:function dj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aP:function aP(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
M:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.p("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.i.au(a,0)
t=C.i.au(b,0)
s=new V.f5()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
r:function(a){var u=new V.fd()
u.eu(a)
return u},
fy:function(){var u,t
u=new V.fx()
t=P.l
u.shy(new H.az([t,V.c3]))
u.shC(new H.az([t,V.c8]))
u.c=null
return u},
aI:function aI(){},
ab:function ab(){},
d1:function d1(){},
a6:function a6(){this.a=null},
f5:function f5(){this.b=this.a=null},
fd:function fd(){this.a=null},
c3:function c3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(a,b){this.a=a
this.b=b
this.c=null},
fx:function fx(){this.c=this.b=this.a=null},
c9:function c9(a){this.b=a
this.a=this.c=null},
lm:function(a){P.kD(C.K,new V.hY(a))},
kA:function(a,b){var u=new V.fh()
u.ew(a,!0)
return u},
aY:function aY(){},
hY:function hY(a){this.a=a},
eb:function eb(a){var _=this
_.a=a
_.d=_.c=_.b=null},
et:function et(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eu:function eu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f4:function f4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fh:function fh(){this.b=this.a=null},
fj:function fj(a){this.a=a},
fi:function fi(a){this.a=a},
fk:function fk(a){this.a=a}},U={
iM:function(a){var u=new U.cI()
u.a=a
return u},
cI:function cI(){this.b=this.a=null},
bq:function bq(){},
dk:function dk(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cM:function cM(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
kl:function(a,b){var u,t
u=a.a6
t=new A.eO(b,u)
t.ev(b,u)
t.er(a,b)
return t},
ie:function(a,b,c,d,e){var u=new A.fF(a,b,c,e)
u.f=d
u.shH(P.kj(d,0,!1,P.x))
return u},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
e3:function e3(a){this.a=a},
eO:function eO(a,b){var _=this
_.b2=_.da=_.b1=_.a6=_.ag=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dt=_.bY=_.ds=_.bf=_.dr=_.dq=_.be=_.bd=_.dn=_.dm=_.bc=_.bb=_.ba=_.dl=_.dk=_.b9=_.dj=_.di=_.b8=_.dh=_.dg=_.b7=_.b6=_.df=_.de=_.b5=_.b4=_.dd=_.dc=_.b3=null
_.c2=_.dz=_.c1=_.dw=_.c0=_.dv=_.c_=_.du=_.bZ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eR:function eR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ag=b3
_.a6=b4
_.b1=b5},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cc:function cc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cf:function cf(a,b,c,d,e,f,g,h,i,j){var _=this
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
cd:function cd(a,b,c,d,e,f,g,h,i,j){var _=this
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
cg:function cg(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c2:function c2(){},
bh:function bh(a,b){this.a=a
this.b=b},
dA:function dA(){},
fL:function fL(a){this.a=a},
D:function D(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fI:function fI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fF:function fF(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
B:function B(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fJ:function fJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fM:function fM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
hI:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cr:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.K(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.K(o+a3,n+a1,m+a2)
u.b=l
k=new V.K(o-a3,n-a1,m-a2)
u.c=k
j=new V.K(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.hI(t)
f=F.hI(u.b)
e=F.lo(d,a0,new F.hH(u,F.hI(u.c),F.hI(u.d),f,g,c),b)
if(e!=null)a.ca(e)},
lo:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,{func:1,ret:-1,args:[F.ag,P.v,P.v]})
if(a<1)return
if(b<1)return
u=F.j5()
t=H.b([],[F.ag])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ig(null,null,new V.bg(p,0,0,1),null,null,new V.ad(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bV(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ig(null,null,new V.bg(j,i,h,1),null,null,new V.ad(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bV(d))}}u.d.i4(a+1,b+1,t)
return u},
cN:function(a,b,c){var u,t
u=new F.V()
t=a.a
if(t==null)H.q(P.p("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.p("May not create a face with vertices attached to different shapes."))
u.hp(a)
u.hq(b)
u.hr(c)
C.a.h(u.a.a.d.b,u)
u.a.a.V()
return u},
j5:function(){var u,t
u=new F.dm()
t=new F.fT(u)
t.b=!1
t.shI(H.b([],[F.ag]))
u.a=t
t=new F.fg(u)
t.sbE(H.b([],[F.b7]))
u.b=t
t=new F.ff(u)
t.sfe(H.b([],[F.aK]))
u.c=t
t=new F.fe(u)
t.sf5(H.b([],[F.V]))
u.d=t
u.e=null
return u},
ig:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ag()
t=new F.h0(u)
t.sbE(H.b([],[F.b7]))
u.b=t
t=new F.fX(u)
s=[F.aK]
t.sff(H.b([],s))
t.sfg(H.b([],s))
u.c=t
t=new F.fU(u)
s=[F.V]
t.sf6(H.b([],s))
t.sf7(H.b([],s))
t.sf8(H.b([],s))
u.d=t
h=$.jR()
u.e=0
t=$.aT()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aS().a)!==0?e:null
u.x=(s&$.aR().a)!==0?b:null
u.y=(s&$.aU().a)!==0?f:null
u.z=(s&$.aV().a)!==0?g:null
u.Q=(s&$.jS().a)!==0?c:null
u.ch=(s&$.bG().a)!==0?i:0
u.cx=(s&$.aQ().a)!==0?a:null
return u},
hH:function hH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
V:function V(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
em:function em(){},
fl:function fl(){},
aK:function aK(){this.b=this.a=null},
eE:function eE(){},
fE:function fE(){},
b7:function b7(){this.a=null},
dm:function dm(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fe:function fe(a){this.a=a
this.b=null},
ff:function ff(a){this.a=a
this.b=null},
fg:function fg(a){this.a=a
this.b=null},
ag:function ag(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h2:function h2(a){this.a=a},
h1:function h1(a){this.a=a},
fT:function fT(a){this.a=a
this.c=this.b=null},
fU:function fU(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fV:function fV(a,b){this.a=a
this.b=b},
fW:function fW(a,b){this.a=a
this.b=b},
fX:function fX(a){this.a=a
this.c=this.b=null},
fZ:function fZ(){},
fY:function fY(){},
h_:function h_(){},
f0:function f0(){},
h0:function h0(a){this.a=a
this.b=null},
jA:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=V.kA("Test 005",!0)
t=W.i3(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.v(u.a,t)
s=[P.l]
u.d0(H.b(["A test of the Material Lighting shader with 2D textures and directional ","lighting. This test has texturing for emission, ambient, diffuse, and ","specular. The same texture is used for ambient and diffuse. ","The emission texture makes the lights on the panel glow. ","The specular texture makes specific parts shiny and other parts not."],s))
u.d0(H.b(["\xab[Back to Tests|../]"],s))
r=C.z.e7(document,"testCanvas")
if(r==null)H.q(P.p("Failed to find an element with the identifier, testCanvas."))
q=E.kC(r,!0,!0,!0,!1)
p=new E.a5()
p.a=""
p.b=!0
s=E.a5
p.seX(0,O.i4(s))
p.y.bo(p.giU(),p.giX())
p.z=null
p.Q=null
p.ch=null
p.cx=null
p.cy=null
p.db=null
p.dx=null
p.dy=null
p.fr=null
p.fx=null
p.scm(0,null)
p.saN(null)
o=F.j5()
F.cr(o,null,null,1,1,1,0,0,1)
F.cr(o,null,null,1,1,0,1,0,3)
F.cr(o,null,null,1,1,0,0,1,2)
F.cr(o,null,null,1,1,-1,0,0,0)
F.cr(o,null,null,1,1,0,-1,0,0)
F.cr(o,null,null,1,1,0,0,-1,3)
o.aA()
o.iT(new F.fY(),new F.f0())
p.scm(0,o)
n=new U.dk()
n.a=0
n.b=0
n.c=0
n.d=0
n.e=0
n.f=0
n.r=0
n.se_(0)
n.sdL(0)
n.sdQ(0)
m=n.d
if(!(Math.abs(m-0.1)<$.G().a)){n.d=0.1
m=new D.L("deltaYaw",m,0.1,n,[P.v])
m.b=!0
n.aw(m)}m=n.e
if(!(Math.abs(m-0.21)<$.G().a)){n.e=0.21
m=new D.L("deltaPitch",m,0.21,n,[P.v])
m.b=!0
n.aw(m)}m=n.f
if(!(Math.abs(m-0.32)<$.G().a)){n.f=0.32
m=new D.L("deltaRoll",m,0.32,n,[P.v])
m.b=!0
n.aw(m)}p.saN(n)
l=q.f.c8("../resources/CtrlPnlColor.png")
k=new O.d2()
k.seU(O.i4(V.a1))
k.e.bo(k.gfl(),k.gfn())
n=new O.aB(k,"emission")
n.c=C.c
n.f=new V.U(0,0,0)
k.f=n
n=new O.aB(k,"ambient")
n.c=C.c
n.f=new V.U(0,0,0)
k.r=n
n=new O.aB(k,"diffuse")
n.c=C.c
n.f=new V.U(0,0,0)
k.x=n
n=new O.aB(k,"invDiffuse")
n.c=C.c
n.f=new V.U(0,0,0)
k.y=n
n=new O.eT(k,"specular")
n.c=C.c
n.f=new V.U(0,0,0)
n.ch=100
k.z=n
n=new O.eQ(k,"bump")
n.c=C.c
k.Q=n
k.ch=null
n=new O.aB(k,"reflect")
n.c=C.c
n.f=new V.U(0,0,0)
k.cx=n
n=new O.eS(k,"refract")
n.c=C.c
n.f=new V.U(0,0,0)
n.ch=1
k.cy=n
n=new O.eP(k,"alpha")
n.c=C.c
n.f=1
k.db=n
n=new D.cY()
n.cq(D.T)
n.sf2(H.b([],[D.b0]))
n.sh6(H.b([],[D.dc]))
n.shx(H.b([],[D.dn]))
n.shE(H.b([],[D.dv]))
n.shF(H.b([],[D.dw]))
n.shG(H.b([],[D.dx]))
n.Q=null
n.ch=null
n.cl(n.gfj(),n.gfX(),n.gfZ())
k.dx=n
m=n.Q
if(m==null){m=D.al()
n.Q=m
n=m}else n=m
n.h(0,k.ghf())
n=k.dx
m=n.ch
if(m==null){m=D.al()
n.ch=m
n=m}else n=m
n.h(0,k.gaW())
k.dy=null
n=k.dx
j=V.jh()
m=U.iM(V.iU(V.j_(),j,new V.K(1,-1,-3)))
i=new V.U(1,1,1)
h=new D.b0()
h.c=new V.U(1,1,1)
h.a=V.kE()
g=h.b
h.b=m
m.gA().h(0,h.geA())
m=new D.L("mover",g,h.b,h,[U.bq])
m.b=!0
h.ai(m)
if(!h.c.t(0,i)){g=h.c
h.c=i
m=new D.L("color",g,i,h,[V.U])
m.b=!0
h.ai(m)}n.h(0,h)
k.f.sbj(q.f.c8("../resources/CtrlPnlEmission.png"))
n=k.r
n.san(0,new V.U(0.2,0.2,0.2))
n=k.x
n.san(0,new V.U(0.8,0.8,0.8))
k.r.sbj(l)
k.x.sbj(l)
k.z.sbj(q.f.c8("../resources/CtrlPnlSpecular.png"))
n=k.z
if(n.c===C.c){n.c=C.f
n.br()
n.bJ(100)
m=n.a
m.a=null
m.S(null)}n.bJ(10)
n=new M.cM()
n.seC(0,O.i4(s))
n.d.bo(n.gfs(),n.gfu())
n.e=null
n.f=null
n.r=null
n.x=null
f=X.kc(!0,!0,!1,null,2000,null,0)
e=new X.db()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saN(null)
s=e.c
if(!(Math.abs(s-1.0471975511965976)<$.G().a)){e.c=1.0471975511965976
s=new D.L("fov",s,1.0471975511965976,e,[P.v])
s.b=!0
e.at(s)}s=e.d
if(!(Math.abs(s-0.1)<$.G().a)){e.d=0.1
s=new D.L("near",s,0.1,e,[P.v])
s.b=!0
e.at(s)}s=e.e
if(!(Math.abs(s-2000)<$.G().a)){e.e=2000
s=new D.L("far",s,2000,e,[P.v])
s.b=!0
e.at(s)}s=n.a
if(s!==e){if(s!=null)s.gA().B(0,n.gaa())
g=n.a
n.a=e
e.gA().h(0,n.gaa())
s=new D.L("camera",g,n.a,n,[X.cH])
s.b=!0
n.aj(s)}s=n.b
if(s!==f){if(s!=null)s.gA().B(0,n.gaa())
g=n.b
n.b=f
f.gA().h(0,n.gaa())
s=new D.L("target",g,n.b,n,[X.ds])
s.b=!0
n.aj(s)}n.sdS(null)
n.sdS(k)
n.d.h(0,p)
n.a.saN(U.iM(V.aL(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
s=q.d
if(s!==n){if(s!=null)s.gA().B(0,q.gcr())
q.d=n
n.gA().h(0,q.gcr())
q.cs()}s=q.z
if(s==null){s=D.al()
q.z=s}n={func:1,ret:-1,args:[D.z]}
m=H.j(new F.hV(u,k),n)
if(s.b==null)s.saG(H.b([],[n]))
s=s.b;(s&&C.a).h(s,m)
V.lm(q)},
hV:function hV(a,b){this.a=a
this.b=b}},T={c7:function c7(){},du:function du(){},ft:function ft(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},fu:function fu(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},fv:function fv(a,b,c,d,e,f,g){var _=this
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
H.i8.prototype={}
J.X.prototype={
t:function(a,b){return a===b},
gI:function(a){return H.c0(a)},
i:function(a){return"Instance of '"+H.bs(a)+"'"}}
J.eA.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iI:1}
J.cU.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0},
$iC:1}
J.cW.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.f3.prototype={}
J.ch.prototype={}
J.b6.prototype={
i:function(a){var u=a[$.jG()]
if(u==null)return this.en(a)
return"JavaScript function for "+H.d(J.a9(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ib3:1}
J.ay.prototype={
h:function(a,b){H.A(b,H.u(a,0))
if(!!a.fixed$length)H.q(P.af("add"))
a.push(b)},
jb:function(a,b){var u
if(!!a.fixed$length)H.q(P.af("removeAt"))
u=a.length
if(b>=u)throw H.f(P.dh(b,null,null))
return a.splice(b,1)[0]},
B:function(a,b){var u
if(!!a.fixed$length)H.q(P.af("remove"))
for(u=0;u<a.length;++u)if(J.R(a[u],b)){a.splice(u,1)
return!0}return!1},
X:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.aZ(a))}},
k:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.R(u,t,H.d(a[t]))
return u.join(b)},
iO:function(a){return this.k(a,"")},
iI:function(a,b,c){var u,t,s
H.j(b,{func:1,ret:P.I,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.f(P.aZ(a))}throw H.f(H.ey())},
iH:function(a,b){return this.iI(a,b,null)},
Z:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
ek:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.an(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.an(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.u(a,0)])
return H.b(a.slice(b,c),[H.u(a,0)])},
giG:function(a){if(a.length>0)return a[0]
throw H.f(H.ey())},
gbg:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.ey())},
d1:function(a,b){var u,t
H.j(b,{func:1,ret:P.I,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.f(P.aZ(a))}return!1},
M:function(a,b){var u
for(u=0;u<a.length;++u)if(J.R(a[u],b))return!0
return!1},
i:function(a){return P.i6(a,"[","]")},
gL:function(a){return new J.aj(a,a.length,0,[H.u(a,0)])},
gI:function(a){return H.c0(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.q(P.af("set length"))
if(b<0)throw H.f(P.an(b,0,null,"newLength",null))
a.length=b},
R:function(a,b,c){H.A(c,H.u(a,0))
if(!!a.immutable$list)H.q(P.af("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cw(a,b))
a[b]=c},
$in:1,
$ia:1}
J.i7.prototype={}
J.aj.prototype={
gD:function(){return this.d},
w:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.f(H.w(u))
s=this.c
if(s>=t){this.scJ(null)
return!1}this.scJ(u[s]);++this.c
return!0},
scJ:function(a){this.d=H.A(a,H.u(this,0))},
$iax:1}
J.cV.prototype={
jq:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.af(""+a+".toInt()"))},
c3:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.af(""+a+".floor()"))},
a8:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.af(""+a+".round()"))},
dU:function(a,b){var u,t
if(b>20)throw H.f(P.an(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
ec:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eq:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cW(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.cW(a,b)},
cW:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.af("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
aZ:function(a,b){var u
if(a>0)u=this.hw(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hw:function(a,b){return b>31?0:a>>>b},
$iv:1,
$ia8:1}
J.cT.prototype={$ix:1}
J.cS.prototype={}
J.bn.prototype={
bU:function(a,b){if(b<0)throw H.f(H.cw(a,b))
if(b>=a.length)H.q(H.cw(a,b))
return a.charCodeAt(b)},
au:function(a,b){if(b>=a.length)throw H.f(H.cw(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(typeof b!=="string")throw H.f(P.i1(b,null,null))
return a+b},
ej:function(a,b,c){var u
if(c>a.length)throw H.f(P.an(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
bp:function(a,b){return this.ej(a,b,0)},
aU:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.dh(b,null,null))
if(b>c)throw H.f(P.dh(b,null,null))
if(c>a.length)throw H.f(P.dh(c,null,null))
return a.substring(b,c)},
aT:function(a,b){return this.aU(a,b,null)},
jt:function(a){return a.toLowerCase()},
U:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
j0:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.U(c,u)+a},
a3:function(a,b){return this.j0(a,b," ")},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$iiX:1,
$il:1}
H.o.prototype={
gn:function(a){return this.a.length},
l:function(a,b){return C.i.bU(this.a,b)},
$adD:function(){return[P.x]},
$aP:function(){return[P.x]},
$an:function(){return[P.x]},
$aa:function(){return[P.x]}}
H.ef.prototype={}
H.bo.prototype={
gL:function(a){return new H.bV(this,this.gn(this),0,[H.Z(this,"bo",0)])},
bl:function(a,b){return this.em(0,H.j(b,{func:1,ret:P.I,args:[H.Z(this,"bo",0)]}))}}
H.bV.prototype={
gD:function(){return this.d},
w:function(){var u,t,s,r
u=this.a
t=J.it(u)
s=t.gn(u)
if(this.b!==s)throw H.f(P.aZ(u))
r=this.c
if(r>=s){this.saF(null)
return!1}this.saF(t.Z(u,r));++this.c
return!0},
saF:function(a){this.d=H.A(a,H.u(this,0))},
$iax:1}
H.eL.prototype={
gL:function(a){return new H.eM(J.bH(this.a),this.b,this.$ti)},
gn:function(a){return J.bd(this.a)},
Z:function(a,b){return this.b.$1(J.i_(this.a,b))},
$an:function(a,b){return[b]}}
H.eM.prototype={
w:function(){var u=this.b
if(u.w()){this.saF(this.c.$1(u.gD()))
return!0}this.saF(null)
return!1},
gD:function(){return this.a},
saF:function(a){this.a=H.A(a,H.u(this,1))},
$aax:function(a,b){return[b]}}
H.eN.prototype={
gn:function(a){return J.bd(this.a)},
Z:function(a,b){return this.b.$1(J.i_(this.a,b))},
$abo:function(a,b){return[b]},
$an:function(a,b){return[b]}}
H.cj.prototype={
gL:function(a){return new H.h5(J.bH(this.a),this.b,this.$ti)}}
H.h5.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gD()))return!0
return!1},
gD:function(){return this.a.gD()}}
H.bk.prototype={}
H.dD.prototype={}
H.dC.prototype={}
H.f6.prototype={}
H.fB.prototype={
a2:function(a){var u,t,s
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
H.f1.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eC.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.d(this.a)+")"}}
H.fO.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hZ.prototype={
$1:function(a){if(!!J.O(a).$ib2)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.dS.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ia7:1}
H.bL.prototype={
i:function(a){return"Closure '"+H.bs(this).trim()+"'"},
$ib3:1,
gjy:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fs.prototype={}
H.fm.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bF(u)+"'"}}
H.bJ.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bJ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gI:function(a){var u,t
u=this.c
if(u==null)t=H.c0(this.a)
else t=typeof u!=="object"?J.cA(u):H.c0(u)
return(t^H.c0(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.bs(u)+"'")}}
H.fD.prototype={
i:function(a){return this.a}}
H.e6.prototype={
i:function(a){return this.a}}
H.fb.prototype={
i:function(a){return"RuntimeError: "+H.d(this.a)}}
H.az.prototype={
gn:function(a){return this.a},
gao:function(){return new H.cZ(this,[H.u(this,0)])},
d6:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.cG(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.cG(t,a)}else return this.iM(a)},
iM:function(a){var u=this.d
if(u==null)return!1
return this.c5(this.bx(u,J.cA(a)&0x3ffffff),a)>=0},
l:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.aX(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.aX(r,b)
s=t==null?null:t.b
return s}else return this.iN(b)},
iN:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bx(u,J.cA(a)&0x3ffffff)
s=this.c5(t,a)
if(s<0)return
return t[s].b},
R:function(a,b,c){var u,t,s,r,q,p
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bC()
this.b=u}this.cv(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bC()
this.c=t}this.cv(t,b,c)}else{s=this.d
if(s==null){s=this.bC()
this.d=s}r=J.cA(b)&0x3ffffff
q=this.bx(s,r)
if(q==null)this.bK(s,r,[this.bt(b,c)])
else{p=this.c5(q,b)
if(p>=0)q[p].b=c
else q.push(this.bt(b,c))}}},
X:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.aZ(this))
u=u.c}},
cv:function(a,b,c){var u
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
u=this.aX(a,b)
if(u==null)this.bK(a,b,this.bt(b,c))
else u.b=c},
eO:function(){this.r=this.r+1&67108863},
bt:function(a,b){var u,t
u=new H.eF(H.A(a,H.u(this,0)),H.A(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.eO()
return u},
c5:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.R(a[t].a,b))return t
return-1},
i:function(a){return P.iT(this)},
aX:function(a,b){return a[b]},
bx:function(a,b){return a[b]},
bK:function(a,b,c){a[b]=c},
f1:function(a,b){delete a[b]},
cG:function(a,b){return this.aX(a,b)!=null},
bC:function(){var u=Object.create(null)
this.bK(u,"<non-identifier-key>",u)
this.f1(u,"<non-identifier-key>")
return u},
$iiR:1}
H.eF.prototype={}
H.cZ.prototype={
gn:function(a){return this.a.a},
gL:function(a){var u,t
u=this.a
t=new H.eG(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eG.prototype={
gD:function(){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.aZ(u))
else{u=this.c
if(u==null){this.scw(null)
return!1}else{this.scw(u.a)
this.c=this.c.c
return!0}}},
scw:function(a){this.d=H.A(a,H.u(this,0))},
$iax:1}
H.hQ.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.hR.prototype={
$2:function(a,b){return this.a(a,b)},
$S:37}
H.hS.prototype={
$1:function(a){return this.a(H.F(a))},
$S:34}
H.eB.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$iiX:1}
H.d7.prototype={$ilK:1}
H.d4.prototype={
gn:function(a){return a.length},
$ias:1,
$aas:function(){}}
H.d5.prototype={
l:function(a,b){H.cs(b,a,a.length)
return a[b]},
$abk:function(){return[P.v]},
$aP:function(){return[P.v]},
$in:1,
$an:function(){return[P.v]},
$ia:1,
$aa:function(){return[P.v]}}
H.d6.prototype={
$abk:function(){return[P.x]},
$aP:function(){return[P.x]},
$in:1,
$an:function(){return[P.x]},
$ia:1,
$aa:function(){return[P.x]}}
H.eV.prototype={
l:function(a,b){H.cs(b,a,a.length)
return a[b]}}
H.eW.prototype={
l:function(a,b){H.cs(b,a,a.length)
return a[b]}}
H.eX.prototype={
l:function(a,b){H.cs(b,a,a.length)
return a[b]}}
H.d8.prototype={
gn:function(a){return a.length},
l:function(a,b){H.cs(b,a,a.length)
return a[b]},
$ilL:1}
H.eY.prototype={
gn:function(a){return a.length},
l:function(a,b){H.cs(b,a,a.length)
return a[b]}}
H.cn.prototype={}
H.co.prototype={}
H.cp.prototype={}
H.cq.prototype={}
P.h7.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:20}
P.h6.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:33}
P.h8.prototype={
$0:function(){this.a.$0()},
$S:1}
P.h9.prototype={
$0:function(){this.a.$0()},
$S:1}
P.dT.prototype={
eL:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bB(new P.hD(this,b),0),a)
else throw H.f(P.af("`setTimeout()` not found."))},
eM:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bB(new P.hC(this,a,Date.now(),b),0),a)
else throw H.f(P.af("Periodic timer."))},
$iaC:1}
P.hD.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:2}
P.hC.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.eq(r,s)}u.c=t
this.d.$1(u)},
$S:1}
P.aH.prototype={
iS:function(a){if(this.c!==6)return!0
return this.b.b.cf(H.j(this.d,{func:1,ret:P.I,args:[P.H]}),a.a,P.I,P.H)},
iL:function(a){var u,t,s,r
u=this.e
t=P.H
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.e0(u,{func:1,args:[P.H,P.a7]}))return H.is(r.ji(u,a.a,a.b,null,t,P.a7),s)
else return H.is(r.cf(H.j(u,{func:1,args:[P.H]}),a.a,null,t),s)}}
P.ap.prototype={
dT:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.N
if(t!==C.l){t.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.kT(b,t)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.ap(0,$.N,[c])
r=b==null?1:3
this.cA(new P.aH(s,r,a,b,[u,c]))
return s},
jp:function(a,b){return this.dT(a,null,b)},
cA:function(a){var u,t
u=this.a
if(u<=1){a.a=H.k(this.c,"$iaH")
this.c=a}else{if(u===2){t=H.k(this.c,"$iap")
u=t.a
if(u<4){t.cA(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.hL(null,null,u,H.j(new P.hg(this,a),{func:1,ret:-1}))}},
cS:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.k(this.c,"$iaH")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.k(this.c,"$iap")
t=p.a
if(t<4){p.cS(a)
return}this.a=t
this.c=p.c}u.a=this.aY(a)
t=this.b
t.toString
P.hL(null,null,t,H.j(new P.hk(u,this),{func:1,ret:-1}))}},
bG:function(){var u=H.k(this.c,"$iaH")
this.c=null
return this.aY(u)},
aY:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cC:function(a){var u,t,s
u=H.u(this,0)
H.is(a,{futureOr:1,type:u})
t=this.$ti
if(H.e_(a,"$ibR",t,"$abR"))if(H.e_(a,"$iap",t,null))P.ji(a,this)
else P.kJ(a,this)
else{s=this.bG()
H.A(a,u)
this.a=4
this.c=a
P.cm(this,s)}},
cD:function(a,b){var u
H.k(b,"$ia7")
u=this.bG()
this.a=8
this.c=new P.a0(a,b)
P.cm(this,u)},
$ibR:1}
P.hg.prototype={
$0:function(){P.cm(this.a,this.b)},
$S:1}
P.hk.prototype={
$0:function(){P.cm(this.b,this.a.a)},
$S:1}
P.hh.prototype={
$1:function(a){var u=this.a
u.a=0
u.cC(a)},
$S:20}
P.hi.prototype={
$2:function(a,b){H.k(b,"$ia7")
this.a.cD(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.hj.prototype={
$0:function(){this.a.cD(this.b,this.c)},
$S:1}
P.hn.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.dR(H.j(r.d,{func:1}),null)}catch(q){t=H.ai(q)
s=H.bD(q)
if(this.d){r=H.k(this.a.a.c,"$ia0").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.k(this.a.a.c,"$ia0")
else p.b=new P.a0(t,s)
p.a=!0
return}if(!!J.O(u).$ibR){if(u instanceof P.ap&&u.a>=4){if(u.a===8){r=this.b
r.b=H.k(u.c,"$ia0")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jp(new P.ho(o),null)
r.a=!1}},
$S:2}
P.ho.prototype={
$1:function(a){return this.a},
$S:30}
P.hm.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.A(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.cf(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ai(o)
t=H.bD(o)
s=this.a
s.b=new P.a0(u,t)
s.a=!0}},
$S:2}
P.hl.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.k(this.a.a.c,"$ia0")
r=this.c
if(r.iS(u)&&r.e!=null){q=this.b
q.b=r.iL(u)
q.a=!1}}catch(p){t=H.ai(p)
s=H.bD(p)
r=H.k(this.a.a.c,"$ia0")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a0(t,s)
n.a=!0}},
$S:2}
P.dG.prototype={}
P.fn.prototype={
gn:function(a){var u,t,s,r
u={}
t=new P.ap(0,$.N,[P.x])
u.a=0
s=H.u(this,0)
r=H.j(new P.fp(u,this),{func:1,ret:-1,args:[s]})
H.j(new P.fq(u,t),{func:1,ret:-1})
W.W(this.a,this.b,r,!1,s)
return t}}
P.fp.prototype={
$1:function(a){H.A(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.C,args:[H.u(this.b,0)]}}}
P.fq.prototype={
$0:function(){this.b.cC(this.a.a)},
$S:1}
P.c5.prototype={}
P.fo.prototype={}
P.aC.prototype={}
P.a0.prototype={
i:function(a){return H.d(this.a)},
$ib2:1}
P.hG.prototype={$ilZ:1}
P.hK.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.da()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.f(u)
s=H.f(u)
s.stack=t.i(0)
throw s},
$S:1}
P.hr.prototype={
jj:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
try{if(C.l===$.N){a.$0()
return}P.jo(null,null,this,a,-1)}catch(s){u=H.ai(s)
t=H.bD(s)
P.hJ(null,null,this,u,H.k(t,"$ia7"))}},
jk:function(a,b,c){var u,t,s
H.j(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.l===$.N){a.$1(b)
return}P.jp(null,null,this,a,b,-1,c)}catch(s){u=H.ai(s)
t=H.bD(s)
P.hJ(null,null,this,u,H.k(t,"$ia7"))}},
i9:function(a,b){return new P.ht(this,H.j(a,{func:1,ret:b}),b)},
bQ:function(a){return new P.hs(this,H.j(a,{func:1,ret:-1}))},
d3:function(a,b){return new P.hu(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
dR:function(a,b){H.j(a,{func:1,ret:b})
if($.N===C.l)return a.$0()
return P.jo(null,null,this,a,b)},
cf:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.N===C.l)return a.$1(b)
return P.jp(null,null,this,a,b,c,d)},
ji:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.N===C.l)return a.$2(b,c)
return P.kU(null,null,this,a,b,c,d,e,f)}}
P.ht.prototype={
$0:function(){return this.a.dR(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hs.prototype={
$0:function(){return this.a.jj(this.b)},
$S:2}
P.hu.prototype={
$1:function(a){var u=this.c
return this.a.jk(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hq.prototype={
gL:function(a){var u=new P.dM(this,this.r,this.$ti)
u.c=this.e
return u},
gn:function(a){return this.a},
M:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ibx")!=null}else{t=this.eY(b)
return t}},
eY:function(a){var u=this.d
if(u==null)return!1
return this.bw(this.cK(u,a),a)>=0},
h:function(a,b){var u,t
H.A(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.ij()
this.b=u}return this.cz(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.ij()
this.c=t}return this.cz(t,b)}else return this.eP(b)},
eP:function(a){var u,t,s
H.A(a,H.u(this,0))
u=this.d
if(u==null){u=P.ij()
this.d=u}t=this.cE(a)
s=u[t]
if(s==null)u[t]=[this.bD(a)]
else{if(this.bw(s,a)>=0)return!1
s.push(this.bD(a))}return!0},
B:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hb(this.c,b)
else return this.h8(b)},
h8:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.cK(u,a)
s=this.bw(t,a)
if(s<0)return!1
this.cX(t.splice(s,1)[0])
return!0},
cz:function(a,b){H.A(b,H.u(this,0))
if(H.k(a[b],"$ibx")!=null)return!1
a[b]=this.bD(b)
return!0},
hb:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ibx")
if(u==null)return!1
this.cX(u)
delete a[b]
return!0},
cM:function(){this.r=1073741823&this.r+1},
bD:function(a){var u,t
u=new P.bx(H.A(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.cM()
return u},
cX:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.cM()},
cE:function(a){return J.cA(a)&1073741823},
cK:function(a,b){return a[this.cE(b)]},
bw:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.R(a[t].a,b))return t
return-1}}
P.bx.prototype={}
P.dM.prototype={
gD:function(){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.aZ(u))
else{u=this.c
if(u==null){this.scB(null)
return!1}else{this.scB(H.A(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
scB:function(a){this.d=H.A(a,H.u(this,0))},
$iax:1}
P.eH.prototype={$in:1,$ia:1}
P.P.prototype={
gL:function(a){return new H.bV(a,this.gn(a),0,[H.hP(this,a,"P",0)])},
Z:function(a,b){return this.l(a,b)},
js:function(a,b){var u,t
u=H.b([],[H.hP(this,a,"P",0)])
C.a.sn(u,this.gn(a))
for(t=0;t<this.gn(a);++t)C.a.R(u,t,this.l(a,t))
return u},
jr:function(a){return this.js(a,!0)},
i:function(a){return P.i6(a,"[","]")}}
P.eJ.prototype={}
P.eK.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.d(a)
u.a=t+": "
u.a+=H.d(b)},
$S:13}
P.bp.prototype={
X:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.Z(this,"bp",0),H.Z(this,"bp",1)]})
for(u=J.bH(this.gao());u.w();){t=u.gD()
b.$2(t,this.l(0,t))}},
gn:function(a){return J.bd(this.gao())},
i:function(a){return P.iT(this)},
$iam:1}
P.hw.prototype={
ad:function(a,b){var u
for(u=J.bH(H.h(b,"$in",this.$ti,"$an"));u.w();)this.h(0,u.gD())},
i:function(a){return P.i6(this,"{","}")},
Z:function(a,b){var u,t,s
if(b<0)H.q(P.an(b,0,null,"index",null))
for(u=P.kM(this,this.r,H.u(this,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.f(P.bm(b,this,"index",null,t))},
$in:1,
$ij4:1}
P.dN.prototype={}
P.bM.prototype={}
P.bN.prototype={}
P.eh.prototype={
$abM:function(){return[P.l,[P.a,P.x]]}}
P.ew.prototype={
i:function(a){return this.a}}
P.ev.prototype={
eZ:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.aO("")
if(r>b)q.a+=C.i.aU(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.k_(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abN:function(){return[P.l,P.l]}}
P.fQ.prototype={}
P.fR.prototype={
im:function(a,b,c){var u,t,s
c=P.j2(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.hE(t)
if(s.f9(a,b,c)!==c)s.cY(C.i.bU(a,c-1),0)
return new Uint8Array(t.subarray(0,H.kP(0,s.b,t.length)))},
il:function(a){return this.im(a,0,null)},
$abN:function(){return[P.l,[P.a,P.x]]}}
P.hE.prototype={
cY:function(a,b){var u,t,s,r,q
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
f9:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.i.bU(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.i.au(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.cY(r,C.i.au(a,p)))s=p}else if(r<=2047){q=this.b
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
P.I.prototype={}
P.b_.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b_&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.h.aZ(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.k7(H.kt(this))
t=P.cJ(H.kr(this))
s=P.cJ(H.kn(this))
r=P.cJ(H.ko(this))
q=P.cJ(H.kq(this))
p=P.cJ(H.ks(this))
o=P.k8(H.kp(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.v.prototype={}
P.b1.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gI:function(a){return C.h.gI(this.a)},
i:function(a){var u,t,s,r,q
u=new P.ee()
t=this.a
if(t<0)return"-"+new P.b1(0-t).i(0)
s=u.$1(C.h.W(t,6e7)%60)
r=u.$1(C.h.W(t,1e6)%60)
q=new P.ed().$1(t%1e6)
return""+C.h.W(t,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
P.ed.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.ee.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.b2.prototype={}
P.da.prototype={
i:function(a){return"Throw of null."}}
P.ar.prototype={
gbv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbu:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbv()+t+s
if(!this.a)return r
q=this.gbu()
p=P.ej(this.b)
return r+q+": "+p}}
P.bt.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.d(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.d(u)
else if(s>u)t=": Not in range "+H.d(u)+".."+H.d(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.d(u)}return t}}
P.ex.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t
u=H.a_(this.b)
if(typeof u!=="number")return u.jz()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gn:function(a){return this.f}}
P.fP.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fN.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c4.prototype={
i:function(a){return"Bad state: "+this.a}}
P.e8.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ej(u)+"."}}
P.f2.prototype={
i:function(a){return"Out of Memory"},
$ib2:1}
P.dp.prototype={
i:function(a){return"Stack Overflow"},
$ib2:1}
P.ea.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dJ.prototype={
i:function(a){return"Exception: "+this.a}}
P.er.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.i.aU(s,0,75)+"...":s
return t+"\n"+r}}
P.b3.prototype={}
P.x.prototype={}
P.n.prototype={
bl:function(a,b){var u=H.Z(this,"n",0)
return new H.cj(this,H.j(b,{func:1,ret:P.I,args:[u]}),[u])},
gn:function(a){var u,t
u=this.gL(this)
for(t=0;u.w();)++t
return t},
gar:function(a){var u,t
u=this.gL(this)
if(!u.w())throw H.f(H.ey())
t=u.gD()
if(u.w())throw H.f(H.ke())
return t},
Z:function(a,b){var u,t,s
if(b<0)H.q(P.an(b,0,null,"index",null))
for(u=this.gL(this),t=0;u.w();){s=u.gD()
if(b===t)return s;++t}throw H.f(P.bm(b,this,"index",null,t))},
i:function(a){return P.kd(this,"(",")")}}
P.ax.prototype={}
P.a.prototype={$in:1}
P.C.prototype={
gI:function(a){return P.H.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a8.prototype={}
P.H.prototype={constructor:P.H,$iH:1,
t:function(a,b){return this===b},
gI:function(a){return H.c0(this)},
i:function(a){return"Instance of '"+H.bs(this)+"'"},
toString:function(){return this.i(this)}}
P.a7.prototype={}
P.l.prototype={$iiX:1}
P.aO.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.cB.prototype={
i:function(a){return String(a)},
$icB:1}
W.e2.prototype={
i:function(a){return String(a)}}
W.bI.prototype={$ibI:1}
W.aW.prototype={$iaW:1}
W.be.prototype={
bm:function(a,b,c){if(c!=null)return this.fa(a,b,P.l0(c,null))
return this.fb(a,b)},
e6:function(a,b){return this.bm(a,b,null)},
fa:function(a,b,c){return a.getContext(b,c)},
fb:function(a,b){return a.getContext(b)},
$ibe:1,
$iiK:1}
W.bf.prototype={
fc:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
iC:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibf:1}
W.aX.prototype={
gn:function(a){return a.length}}
W.bO.prototype={
gn:function(a){return a.length}}
W.e9.prototype={}
W.ak.prototype={$iak:1}
W.bP.prototype={
i5:function(a,b){return a.adoptNode(b)},
e7:function(a,b){return a.getElementById(b)}}
W.ec.prototype={
i:function(a){return String(a)}}
W.cK.prototype={
ir:function(a,b){return a.createHTMLDocument(b)}}
W.cL.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.e_(b,"$idi",[P.a8],"$adi"))return!1
u=J.ah(b)
return a.left===u.gdD(b)&&a.top===u.gdW(b)&&a.width===u.gci(b)&&a.height===u.gc4(b)},
gI:function(a){return W.jk(C.j.gI(a.left),C.j.gI(a.top),C.j.gI(a.width),C.j.gI(a.height))},
gc4:function(a){return a.height},
gdD:function(a){return a.left},
gdW:function(a){return a.top},
gci:function(a){return a.width},
$idi:1,
$adi:function(){return[P.a8]}}
W.hb.prototype={
gn:function(a){return this.b.length},
l:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.k(u[b],"$iJ")},
h:function(a,b){J.iF(this.a,b)
return b},
gL:function(a){var u=this.jr(this)
return new J.aj(u,u.length,0,[H.u(u,0)])},
$aP:function(){return[W.J]},
$an:function(){return[W.J]},
$aa:function(){return[W.J]}}
W.J.prototype={
gi8:function(a){return new W.hc(a)},
gd5:function(a){return new W.hb(a,a.children)},
i:function(a){return a.localName},
a1:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.iP
if(u==null){u=H.b([],[W.ac])
t=new W.d9(u)
C.a.h(u,W.jj(null))
C.a.h(u,W.jl())
$.iP=t
d=t}else d=u
u=$.iO
if(u==null){u=new W.dX(d)
$.iO=u
c=u}else{u.a=d
c=u}}if($.aJ==null){u=document
t=u.implementation
t=(t&&C.J).ir(t,"")
$.aJ=t
$.i5=t.createRange()
t=$.aJ
t.toString
t=t.createElement("base")
H.k(t,"$ibI")
t.href=u.baseURI
u=$.aJ.head;(u&&C.L).v(u,t)}u=$.aJ
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.k(t,"$iaW")}u=$.aJ
if(!!this.$iaW)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aJ.body;(u&&C.n).v(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.M(C.X,a.tagName)){u=$.i5;(u&&C.E).ee(u,s)
u=$.i5
r=(u&&C.E).ip(u,b)}else{s.innerHTML=b
r=$.aJ.createDocumentFragment()
for(u=J.ah(r);t=s.firstChild,t!=null;)u.v(r,t)}u=$.aJ.body
if(s==null?u!=null:s!==u)J.iG(s)
c.ck(r)
C.z.i5(document,r)
return r},
iq:function(a,b,c){return this.a1(a,b,c,null)},
eg:function(a,b,c,d){a.textContent=null
this.v(a,this.a1(a,b,c,d))},
ef:function(a,b){return this.eg(a,b,null,null)},
aD:function(a,b){return a.getAttribute(b)},
h9:function(a,b){return a.removeAttribute(b)},
$iJ:1,
gjl:function(a){return a.tagName}}
W.eg.prototype={
$1:function(a){return!!J.O(H.k(a,"$iy")).$iJ},
$S:15}
W.i.prototype={$ii:1}
W.bj.prototype={
eQ:function(a,b,c,d){return a.addEventListener(b,H.bB(H.j(c,{func:1,args:[W.i]}),1),!1)},
$ibj:1}
W.eq.prototype={
gn:function(a){return a.length}}
W.cQ.prototype={}
W.bl.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.bm(b,a,null,null,null))
return a[b]},
Z:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ias:1,
$aas:function(){return[W.y]},
$aP:function(){return[W.y]},
$in:1,
$an:function(){return[W.y]},
$ia:1,
$aa:function(){return[W.y]},
$ibl:1,
$aaa:function(){return[W.y]}}
W.cR.prototype={}
W.b4.prototype={$ib4:1,
gd7:function(a){return a.data}}
W.bS.prototype={$ibS:1,$iiK:1}
W.aA.prototype={$iaA:1}
W.d0.prototype={
i:function(a){return String(a)},
$id0:1}
W.bY.prototype={}
W.Y.prototype={$iY:1}
W.a4.prototype={
gar:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.f(P.j6("No elements"))
if(t>1)throw H.f(P.j6("More than one element"))
return u.firstChild},
ad:function(a,b){var u,t,s,r,q
H.h(b,"$in",[W.y],"$an")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ah(t),q=0;q<s;++q)r.v(t,u.firstChild)
return},
gL:function(a){var u=this.a.childNodes
return new W.cO(u,u.length,-1,[H.hP(C.Z,u,"aa",0)])},
gn:function(a){return this.a.childNodes.length},
l:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aP:function(){return[W.y]},
$an:function(){return[W.y]},
$aa:function(){return[W.y]}}
W.y.prototype={
ja:function(a){var u=a.parentNode
if(u!=null)J.e1(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.el(a):u},
v:function(a,b){return a.appendChild(b)},
ha:function(a,b){return a.removeChild(b)},
$iy:1}
W.bZ.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.bm(b,a,null,null,null))
return a[b]},
Z:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ias:1,
$aas:function(){return[W.y]},
$aP:function(){return[W.y]},
$in:1,
$an:function(){return[W.y]},
$ia:1,
$aa:function(){return[W.y]},
$aaa:function(){return[W.y]}}
W.dg.prototype={
ip:function(a,b){return a.createContextualFragment(b)},
ee:function(a,b){return a.selectNodeContents(b)}}
W.fc.prototype={
gn:function(a){return a.length}}
W.bv.prototype={}
W.dq.prototype={
a1:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bq(a,b,c,d)
u=W.k9("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a4(t).ad(0,new W.a4(u))
return t}}
W.dr.prototype={
a1:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bq(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.a1(u.createElement("table"),b,c,d)
u.toString
u=new W.a4(u)
s=u.gar(u)
s.toString
u=new W.a4(s)
r=u.gar(u)
t.toString
r.toString
new W.a4(t).ad(0,new W.a4(r))
return t}}
W.fr.prototype={
a1:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bq(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.a1(u.createElement("table"),b,c,d)
u.toString
u=new W.a4(u)
s=u.gar(u)
t.toString
s.toString
new W.a4(t).ad(0,new W.a4(s))
return t}}
W.c6.prototype={$ic6:1}
W.aD.prototype={$iaD:1}
W.au.prototype={$iau:1}
W.fA.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.bm(b,a,null,null,null))
return a[b]},
Z:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ias:1,
$aas:function(){return[W.aD]},
$aP:function(){return[W.aD]},
$in:1,
$an:function(){return[W.aD]},
$ia:1,
$aa:function(){return[W.aD]},
$aaa:function(){return[W.aD]}}
W.b8.prototype={}
W.h3.prototype={$iiK:1}
W.aG.prototype={
gix:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.af("deltaY is not supported"))},
giw:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.af("deltaX is not supported"))},
$iaG:1}
W.ck.prototype={
he:function(a,b){return a.requestAnimationFrame(H.bB(H.j(b,{func:1,ret:-1,args:[P.a8]}),1))},
f3:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cl.prototype={$icl:1}
W.dI.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.e_(b,"$idi",[P.a8],"$adi"))return!1
u=J.ah(b)
return a.left===u.gdD(b)&&a.top===u.gdW(b)&&a.width===u.gci(b)&&a.height===u.gc4(b)},
gI:function(a){return W.jk(C.j.gI(a.left),C.j.gI(a.top),C.j.gI(a.width),C.j.gI(a.height))},
gc4:function(a){return a.height},
gci:function(a){return a.width}}
W.dO.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.bm(b,a,null,null,null))
return a[b]},
Z:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ias:1,
$aas:function(){return[W.y]},
$aP:function(){return[W.y]},
$in:1,
$an:function(){return[W.y]},
$ia:1,
$aa:function(){return[W.y]},
$aaa:function(){return[W.y]}}
W.ha.prototype={
X:function(a,b){var u,t,s,r,q,p
H.j(b,{func:1,ret:-1,args:[P.l,P.l]})
for(u=this.gao(),t=u.length,s=this.a,r=J.ah(s),q=0;q<u.length;u.length===t||(0,H.w)(u),++q){p=u[q]
b.$2(p,r.aD(s,p))}},
gao:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.l])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
q=H.k(u[r],"$icl")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abp:function(){return[P.l,P.l]},
$aam:function(){return[P.l,P.l]}}
W.hc.prototype={
l:function(a,b){return J.i0(this.a,H.F(b))},
gn:function(a){return this.gao().length}}
W.hd.prototype={}
W.ii.prototype={}
W.he.prototype={}
W.hf.prototype={
$1:function(a){return this.a.$1(H.k(a,"$ii"))},
$S:29}
W.b9.prototype={
ey:function(a){var u,t
u=$.iE()
if(u.a===0){for(t=0;t<262;++t)u.R(0,C.W[t],W.l7())
for(t=0;t<12;++t)u.R(0,C.u[t],W.l8())}},
ay:function(a){return $.jU().M(0,W.bQ(a))},
ae:function(a,b,c){var u,t,s
u=W.bQ(a)
t=$.iE()
s=t.l(0,H.d(u)+"::"+b)
if(s==null)s=t.l(0,"*::"+b)
if(s==null)return!1
return H.ip(s.$4(a,b,c,this))},
$iac:1}
W.aa.prototype={
gL:function(a){return new W.cO(a,this.gn(a),-1,[H.hP(this,a,"aa",0)])}}
W.d9.prototype={
ay:function(a){return C.a.d1(this.a,new W.f_(a))},
ae:function(a,b,c){return C.a.d1(this.a,new W.eZ(a,b,c))},
$iac:1}
W.f_.prototype={
$1:function(a){return H.k(a,"$iac").ay(this.a)},
$S:23}
W.eZ.prototype={
$1:function(a){return H.k(a,"$iac").ae(this.a,this.b,this.c)},
$S:23}
W.dR.prototype={
eK:function(a,b,c,d){var u,t,s
this.a.ad(0,c)
u=b.bl(0,new W.hx())
t=b.bl(0,new W.hy())
this.b.ad(0,u)
s=this.c
s.ad(0,C.Y)
s.ad(0,t)},
ay:function(a){return this.a.M(0,W.bQ(a))},
ae:function(a,b,c){var u,t
u=W.bQ(a)
t=this.c
if(t.M(0,H.d(u)+"::"+b))return this.d.i6(c)
else if(t.M(0,"*::"+b))return this.d.i6(c)
else{t=this.b
if(t.M(0,H.d(u)+"::"+b))return!0
else if(t.M(0,"*::"+b))return!0
else if(t.M(0,H.d(u)+"::*"))return!0
else if(t.M(0,"*::*"))return!0}return!1},
$iac:1}
W.hx.prototype={
$1:function(a){return!C.a.M(C.u,H.F(a))},
$S:18}
W.hy.prototype={
$1:function(a){return C.a.M(C.u,H.F(a))},
$S:18}
W.hA.prototype={
ae:function(a,b,c){if(this.ep(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.i0(a,"template")==="")return this.e.M(0,b)
return!1}}
W.hB.prototype={
$1:function(a){return"TEMPLATE::"+H.d(H.F(a))},
$S:27}
W.hz.prototype={
ay:function(a){var u=J.O(a)
if(!!u.$ic1)return!1
u=!!u.$im
if(u&&W.bQ(a)==="foreignObject")return!1
if(u)return!0
return!1},
ae:function(a,b,c){if(b==="is"||C.i.bp(b,"on"))return!1
return this.ay(a)},
$iac:1}
W.cO.prototype={
w:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.scL(J.jW(this.a,u))
this.c=u
return!0}this.scL(null)
this.c=t
return!1},
gD:function(){return this.d},
scL:function(a){this.d=H.A(a,H.u(this,0))},
$iax:1}
W.ac.prototype={}
W.hv.prototype={$ilM:1}
W.dX.prototype={
ck:function(a){new W.hF(this).$2(a,null)},
aI:function(a,b){if(b==null)J.iG(a)
else J.e1(b,a)},
hj:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.jY(a)
s=J.i0(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ai(o)}q="element unprintable"
try{q=J.a9(a)}catch(o){H.ai(o)}try{p=W.bQ(a)
this.hi(H.k(a,"$iJ"),b,u,q,p,H.k(t,"$iam"),H.F(s))}catch(o){if(H.ai(o) instanceof P.ar)throw o
else{this.aI(a,b)
window
n="Removing corrupted element "+H.d(q)
if(typeof console!="undefined")window.console.warn(n)}}},
hi:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.aI(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.ay(a)){this.aI(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.ae(a,"is",g)){this.aI(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gao()
t=H.b(u.slice(0),[H.u(u,0)])
for(s=f.gao().length-1,u=f.a,r=J.ah(u);s>=0;--s){if(s>=t.length)return H.e(t,s)
q=t[s]
if(!this.a.ae(a,J.k0(q),r.aD(u,q))){window
p="Removing disallowed attribute <"+H.d(e)+" "+q+'="'+H.d(r.aD(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aD(u,q)
r.h9(u,q)}}if(!!J.O(a).$ic6)this.ck(a.content)},
$ilw:1}
W.hF.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.hj(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.aI(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ai(r)
q=H.k(u,"$iy")
if(s){p=q.parentNode
if(p!=null)J.e1(p,q)}else J.e1(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iy")}},
$S:25}
W.dH.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
P.dW.prototype={$ib4:1,
gd7:function(a){return this.a}}
P.hM.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.en.prototype={
gby:function(){var u,t,s
u=this.b
t=H.Z(u,"P",0)
s=W.J
return new H.eL(new H.cj(u,H.j(new P.eo(),{func:1,ret:P.I,args:[t]}),[t]),H.j(new P.ep(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.iF(this.b.a,b)},
gn:function(a){return J.bd(this.gby().a)},
l:function(a,b){var u=this.gby()
return u.b.$1(J.i_(u.a,b))},
gL:function(a){var u=P.kk(this.gby(),!1,W.J)
return new J.aj(u,u.length,0,[H.u(u,0)])},
$aP:function(){return[W.J]},
$an:function(){return[W.J]},
$aa:function(){return[W.J]}}
P.eo.prototype={
$1:function(a){return!!J.O(H.k(a,"$iy")).$iJ},
$S:15}
P.ep.prototype={
$1:function(a){return H.c(H.k(a,"$iy"),"$iJ")},
$S:24}
P.c1.prototype={$ic1:1}
P.m.prototype={
gd5:function(a){return new P.en(a,new W.a4(a))},
a1:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.ac])
C.a.h(u,W.jj(null))
C.a.h(u,W.jl())
C.a.h(u,new W.hz())
c=new W.dX(new W.d9(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).iq(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.a4(r)
p=u.gar(u)
for(u=J.ah(q);s=p.firstChild,s!=null;)u.v(q,s)
return q},
$im:1}
P.cD.prototype={$icD:1}
P.cP.prototype={$icP:1}
P.df.prototype={$idf:1}
P.bu.prototype={
cZ:function(a,b){return a.activeTexture(b)},
d2:function(a,b,c){return a.attachShader(b,c)},
af:function(a,b,c){return a.bindBuffer(b,c)},
ia:function(a,b,c){return a.bindFramebuffer(b,c)},
az:function(a,b,c){return a.bindTexture(b,c)},
ib:function(a,b,c){return a.blendFunc(b,c)},
d4:function(a,b,c,d){return a.bufferData(b,c,d)},
ig:function(a,b){return a.clear(b)},
ih:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ii:function(a,b){return a.clearDepth(b)},
ik:function(a,b){return a.compileShader(b)},
is:function(a,b){return a.createShader(b)},
iu:function(a,b){return a.deleteProgram(b)},
iv:function(a,b){return a.deleteShader(b)},
iy:function(a,b){return a.depthFunc(b)},
iz:function(a,b){return a.disable(b)},
d8:function(a,b){return a.disableVertexAttribArray(b)},
iB:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bX:function(a,b){return a.enable(b)},
d9:function(a,b){return a.enableVertexAttribArray(b)},
e1:function(a,b){return a.generateMipmap(b)},
e2:function(a,b,c){return a.getActiveAttrib(b,c)},
e3:function(a,b,c){return a.getActiveUniform(b,c)},
e4:function(a,b,c){return a.getAttribLocation(b,c)},
cj:function(a,b){return a.getParameter(b)},
e8:function(a,b){return a.getProgramInfoLog(b)},
bn:function(a,b,c){return a.getProgramParameter(b,c)},
e9:function(a,b){return a.getShaderInfoLog(b)},
ea:function(a,b,c){return a.getShaderParameter(b,c)},
eb:function(a,b,c){return a.getUniformLocation(b,c)},
iP:function(a,b){return a.linkProgram(b)},
j8:function(a,b,c){return a.pixelStorei(b,c)},
ei:function(a,b,c){return a.shaderSource(b,c)},
jn:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.O(g)
if(!!u.$ib4)t=!0
else t=!1
if(t){this.hA(a,b,c,d,e,f,P.l1(g))
return}if(!!u.$ibS)u=!0
else u=!1
if(u){this.hB(a,b,c,d,e,f,g)
return}throw H.f(P.k1("Incorrect number or type of arguments"))},
jm:function(a,b,c,d,e,f,g){return this.jn(a,b,c,d,e,f,g,null,null,null)},
hA:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hB:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bi:function(a,b,c,d){return a.texParameteri(b,c,d)},
G:function(a,b,c){return a.uniform1f(b,c)},
J:function(a,b,c){return a.uniform1i(b,c)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dX:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dY:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dZ:function(a,b){return a.useProgram(b)},
jw:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jx:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibu:1}
P.dl.prototype={$idl:1}
P.dt.prototype={$idt:1}
P.dB.prototype={$idB:1}
O.S.prototype={
cq:function(a){this.sfh(H.b([],[a]))
this.scQ(null)
this.scN(null)
this.scR(null)},
cl:function(a,b,c){var u=H.Z(this,"S",0)
H.j(b,{func:1,ret:P.I,args:[[P.n,u]]})
u={func:1,ret:-1,args:[P.x,[P.n,u]]}
H.j(a,u)
H.j(c,u)
this.scQ(b)
this.scN(a)
this.scR(c)},
bo:function(a,b){return this.cl(a,null,b)},
fW:function(a){var u
H.h(a,"$in",[H.Z(this,"S",0)],"$an")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fi:function(a,b){var u
H.h(b,"$in",[H.Z(this,"S",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gL:function(a){var u=this.a
return new J.aj(u,u.length,0,[H.u(u,0)])},
Z:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.Z(this,"S",0)
H.A(b,u)
u=[u]
if(this.fW(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fi(s,H.b([b],u))}},
sfh:function(a){this.a=H.h(a,"$ia",[H.Z(this,"S",0)],"$aa")},
scQ:function(a){this.b=H.j(a,{func:1,ret:P.I,args:[[P.n,H.Z(this,"S",0)]]})},
scN:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.x,[P.n,H.Z(this,"S",0)]]})},
scR:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.x,[P.n,H.Z(this,"S",0)]]})},
$in:1}
O.bX.prototype={
gn:function(a){return this.a.length},
gA:function(){var u=this.b
if(u==null){u=D.al()
this.b=u}return u},
ex:function(a){var u=this.b
if(u!=null)u.P(a)},
as:function(){return this.ex(null)},
gT:function(){var u=this.a
if(u.length>0)return C.a.gbg(u)
else return V.ia()},
dN:function(a){var u=this.a
if(a==null)C.a.h(u,V.ia())
else C.a.h(u,a)
this.as()},
cc:function(){var u=this.a
if(u.length>0){u.pop()
this.as()}},
sbA:function(a){this.a=H.h(a,"$ia",[V.a1],"$aa")}}
E.e4.prototype={}
E.a5.prototype={
scm:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gA().B(0,this.gdI())
t=this.c
if(t!=null)t.gA().h(0,this.gdI())
s=new D.L("shape",u,this.c,this,[F.dm])
s.b=!0
this.a7(s)}},
saN:function(a){var u,t
if(!J.R(this.r,a)){u=this.r
if(u!=null)u.gA().B(0,this.gdG())
if(a!=null)a.gA().h(0,this.gdG())
this.r=a
t=new D.L("mover",u,a,this,[U.bq])
t.b=!0
this.a7(t)}},
bk:function(a){var u,t,s,r,q,p,o,n
u=this.r
if(u!=null){t=u.r
s=a.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.se_(u.a+u.d*a.y)
u.sdL(u.b+u.e*a.y)
u.sdQ(u.c+u.f*a.y)
t=u.c
r=Math.cos(t)
q=Math.sin(t)
t=V.aL(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)
s=u.b
r=Math.cos(s)
q=Math.sin(s)
t=t.U(0,V.aL(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))
s=u.a
r=Math.cos(s)
q=Math.sin(s)
u.x=t.U(0,V.aL(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1))
t=u.y
if(t!=null)t.ah()}p=u.x}else p=null
if(!J.R(p,this.x)){o=this.x
this.x=p
n=new D.L("matrix",o,p,this,[V.a1])
n.b=!0
this.a7(n)}for(u=this.y.a,u=new J.aj(u,u.length,0,[H.u(u,0)]);u.w();)u.d.bk(a)},
aC:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gT())
else C.a.h(u.a,t.U(0,u.gT()))
u.as()
a.dO(this.f)
u=a.dy
s=(u&&C.a).gbg(u)
if(s!=null&&this.d!=null)s.je(a,this)
for(u=this.y.a,u=new J.aj(u,u.length,0,[H.u(u,0)]);u.w();)u.d.aC(a)
a.dM()
a.dx.cc()},
a7:function(a){var u=this.z
if(u!=null)u.P(a)},
V:function(){return this.a7(null)},
dJ:function(a){H.k(a,"$iz")
this.e=null
this.a7(a)},
j_:function(){return this.dJ(null)},
dH:function(a){this.a7(H.k(a,"$iz"))},
iZ:function(){return this.dH(null)},
dF:function(a){this.a7(H.k(a,"$iz"))},
iW:function(){return this.dF(null)},
iV:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$in",[E.a5],"$an")
for(u=b.length,t=this.gdE(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bi()
o.sab(null)
o.saG(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sab(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.V()},
iY:function(a,b){var u,t
H.h(b,"$in",[E.a5],"$an")
for(u=b.gL(b),t=this.gdE();u.w();)u.gD().gA().B(0,t)
this.V()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
seX:function(a,b){this.y=H.h(b,"$iS",[E.a5],"$aS")},
$iaN:1}
E.f7.prototype={
es:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.b_(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bX()
t=[V.a1]
u.sbA(H.b([],t))
u.b=null
u.gA().h(0,new E.f8(this))
this.cy=u
u=new O.bX()
u.sbA(H.b([],t))
u.b=null
u.gA().h(0,new E.f9(this))
this.db=u
u=new O.bX()
u.sbA(H.b([],t))
u.b=null
u.gA().h(0,new E.fa(this))
this.dx=u
this.shz(H.b([],[O.bw]))
u=this.dy;(u&&C.a).h(u,null)
this.shv(new H.az([P.l,A.c2]))},
gj9:function(){var u=this.z
if(u==null){u=this.cy.gT().U(0,this.db.gT())
this.z=u}return u},
dO:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbg(u):a;(u&&C.a).h(u,t)},
dM:function(){var u=this.dy
if(u.length>1)u.pop()},
shz:function(a){this.dy=H.h(a,"$ia",[O.bw],"$aa")},
shv:function(a){this.fr=H.h(a,"$iam",[P.l,A.c2],"$aam")}}
E.f8.prototype={
$1:function(a){var u
H.k(a,"$iz")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.f9.prototype={
$1:function(a){var u
H.k(a,"$iz")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.fa.prototype={
$1:function(a){var u
H.k(a,"$iz")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.dy.prototype={
ct:function(a){H.k(a,"$iz")
this.dP()},
cs:function(){return this.ct(null)},
giK:function(){var u,t,s
u=Date.now()
t=C.h.W(P.iN(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.b_(u,!1)
return s/t},
cU:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.U()
if(typeof u!=="number")return H.bc(u)
s=C.j.c3(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.U()
r=C.j.c3(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.j9(C.q,this.gjf())}},
dP:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.fw(this),{func:1,ret:-1,args:[P.a8]})
C.G.f3(u)
C.G.he(u,W.js(t,P.a8))}},
jd:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.cU()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.b_(r,!1)
s.y=P.iN(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.as()
r=s.db
C.a.sn(r.a,0)
r.as()
r=s.dx
C.a.sn(r.a,0)
r.as()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aC(this.e)}s=this.z
if(s!=null)s.P(null)}catch(q){u=H.ai(q)
t=H.bD(q)
P.iz("Error: "+H.d(u))
P.iz("Stack: "+H.d(t))
throw H.f(u)}}}
E.fw.prototype={
$1:function(a){var u
H.li(a)
u=this.a
if(u.ch){u.ch=!1
u.jd()}},
$S:38}
Z.dF.prototype={$ilq:1}
Z.cE.prototype={
bP:function(a){var u,t,s
try{t=a.a
C.b.d9(t,this.e)
C.b.jw(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ai(s)
t=P.p('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.d(u))
throw H.f(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.d(this.e)+"]"}}
Z.h4.prototype={$ilr:1}
Z.cF.prototype={
aB:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bP:function(a){var u,t
u=this.a
C.b.af(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bP(a)},
ju:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.d8(s,u[t].e)
C.b.af(s,this.a.a,null)},
aC:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.af(t,p,r.b)
C.b.iB(t,q.a,q.b,5123,0)
C.b.af(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.l]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.w)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.a9(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(t,", ")+"\nAttrs:   "+C.a.k(p,", ")},
sfd:function(a){this.b=H.h(a,"$ia",[Z.b5],"$aa")},
$ilz:1}
Z.b5.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bs(this.c)+"'")+"]"}}
Z.aF.prototype={
gcn:function(a){var u,t
u=this.a
t=(u&$.aT().a)!==0?3:0
if((u&$.aS().a)!==0)t+=3
if((u&$.aR().a)!==0)t+=3
if((u&$.aU().a)!==0)t+=2
if((u&$.aV().a)!==0)t+=3
if((u&$.cx().a)!==0)t+=3
if((u&$.cy().a)!==0)t+=4
if((u&$.bG().a)!==0)++t
return(u&$.aQ().a)!==0?t+4:t},
i7:function(a){var u,t,s
u=$.aT()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aS()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aR()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aU()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aV()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cy()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bG()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aQ()
if((t&u.a)!==0)if(s===a)return u
return $.jT()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aF))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.l])
t=this.a
if((t&$.aT().a)!==0)C.a.h(u,"Pos")
if((t&$.aS().a)!==0)C.a.h(u,"Norm")
if((t&$.aR().a)!==0)C.a.h(u,"Binm")
if((t&$.aU().a)!==0)C.a.h(u,"Txt2D")
if((t&$.aV().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cx().a)!==0)C.a.h(u,"Clr3")
if((t&$.cy().a)!==0)C.a.h(u,"Clr4")
if((t&$.bG().a)!==0)C.a.h(u,"Weight")
if((t&$.aQ().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.e7.prototype={}
D.bi.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.j(b,u)
if(this.a==null)this.sab(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
B:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[D.z]})
u=this.a
u=u==null?null:C.a.M(u,b)
if(u===!0){u=this.a
t=(u&&C.a).B(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.M(u,b)
if(u===!0){u=this.b
t=(u&&C.a).B(u,b)||t}return t},
P:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.z(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.X(t,new D.ek(u))
t=this.b
if(t!=null)C.a.X(t,new D.el(u))
u=this.b
if(u!=null)C.a.sn(u,0)
return!0},
iD:function(){return this.P(null)},
jg:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.P(t)}}},
ah:function(){return this.jg(!0,!1)},
sab:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.z]}],"$aa")},
saG:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.z]}],"$aa")}}
D.ek.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:22}
D.el.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:22}
D.z.prototype={}
D.bT.prototype={}
D.bU.prototype={}
D.L.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cG.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cG))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.cX.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cX))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.eD.prototype={
j5:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j1:function(a){this.c=a.b
this.d.B(0,a.a)
return!1},
sh7:function(a){this.d=H.h(a,"$ij4",[P.x],"$aj4")}}
X.eI.prototype={
cb:function(a,b){this.r=a.a
return!1},
aP:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.ed()
if(typeof u!=="number")return u.e0()
this.r=(u&~t)>>>0
return!1},
aO:function(a,b){return!1},
j6:function(a){return!1},
fL:function(a,b,c){return}}
X.aM.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aM))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.eU.prototype={
cb:function(a,b){this.f=a.a
return!1},
aP:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.ed()
if(typeof u!=="number")return u.e0()
this.f=(u&~t)>>>0
return!1},
aO:function(a,b){return!1},
j7:function(a,b){return!1}}
X.fz.prototype={
j4:function(a){H.h(a,"$ia",[V.ad],"$aa")
return!1},
j2:function(a){H.h(a,"$ia",[V.ad],"$aa")
return!1},
j3:function(a){H.h(a,"$ia",[V.ad],"$aa")
return!1}}
X.dE.prototype={
cH:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cX(u,new X.aM(t,a.altKey,a.shiftKey))},
ax:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aM(t,a.altKey,a.shiftKey)},
bL:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aM(t,a.altKey,a.shiftKey)},
am:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.a_()
q=u.top
if(typeof s!=="number")return s.a_()
return new V.ad(t-r,s-q)},
aH:function(a){return new V.aP(a.movementX,a.movementY)},
bF:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.ad])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.w)(s),++q){p=s[q]
o=C.j.a8(p.pageX)
C.j.a8(p.pageY)
n=u.left
C.j.a8(p.pageX)
C.a.h(t,new V.ad(o-n,C.j.a8(p.pageY)-u.top))}return t},
ak:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cG(u,new X.aM(t,a.altKey,a.shiftKey))},
bB:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.a_()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.a_()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
fF:function(a){this.f=!0},
fq:function(a){this.f=!1},
fz:function(a){H.k(a,"$iY")
if(this.f&&this.bB(a))a.preventDefault()},
fJ:function(a){var u
H.k(a,"$iaA")
if(!this.f)return
u=this.cH(a)
this.b.j5(u)},
fH:function(a){var u
H.k(a,"$iaA")
if(!this.f)return
u=this.cH(a)
this.b.j1(u)},
fN:function(a){var u,t,s,r
H.k(a,"$iY")
u=this.a
u.focus()
this.f=!0
this.ax(a)
if(this.x){t=this.ak(a)
s=this.aH(a)
if(this.d.cb(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ak(a)
r=this.am(a)
if(this.c.cb(t,r))a.preventDefault()},
fR:function(a){var u,t,s
H.k(a,"$iY")
this.ax(a)
u=this.ak(a)
if(this.x){t=this.aH(a)
if(this.d.aP(u,t))a.preventDefault()
return}if(this.r)return
s=this.am(a)
if(this.c.aP(u,s))a.preventDefault()},
fD:function(a){var u,t,s
H.k(a,"$iY")
if(!this.bB(a)){this.ax(a)
u=this.ak(a)
if(this.x){t=this.aH(a)
if(this.d.aP(u,t))a.preventDefault()
return}if(this.r)return
s=this.am(a)
if(this.c.aP(u,s))a.preventDefault()}},
fP:function(a){var u,t,s
H.k(a,"$iY")
this.ax(a)
u=this.ak(a)
if(this.x){t=this.aH(a)
if(this.d.aO(u,t))a.preventDefault()
return}if(this.r)return
s=this.am(a)
if(this.c.aO(u,s))a.preventDefault()},
fB:function(a){var u,t,s
H.k(a,"$iY")
if(!this.bB(a)){this.ax(a)
u=this.ak(a)
if(this.x){t=this.aH(a)
if(this.d.aO(u,t))a.preventDefault()
return}if(this.r)return
s=this.am(a)
if(this.c.aO(u,s))a.preventDefault()}},
fT:function(a){var u,t
H.k(a,"$iaG")
this.ax(a)
u=new V.aP((a&&C.F).giw(a),C.F.gix(a)).H(0,180)
if(this.x){if(this.d.j6(u))a.preventDefault()
return}if(this.r)return
t=this.am(a)
if(this.c.j7(u,t))a.preventDefault()},
fV:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ak(this.y)
s=this.am(this.y)
this.d.fL(t,s,u)}},
h5:function(a){var u
H.k(a,"$iau")
this.a.focus()
this.f=!0
this.bL(a)
u=this.bF(a)
if(this.e.j4(u))a.preventDefault()},
h1:function(a){var u
H.k(a,"$iau")
this.bL(a)
u=this.bF(a)
if(this.e.j2(u))a.preventDefault()},
h3:function(a){var u
H.k(a,"$iau")
this.bL(a)
u=this.bF(a)
if(this.e.j3(u))a.preventDefault()},
sf4:function(a){this.z=H.h(a,"$ia",[[P.c5,P.H]],"$aa")}}
D.b0.prototype={
ai:function(a){var u
H.k(a,"$iz")
u=this.d
if(u!=null)u.P(a)},
eB:function(){return this.ai(null)},
$iT:1,
$iaN:1}
D.T.prototype={$iaN:1}
D.cY.prototype={
ai:function(a){var u=this.Q
if(u!=null)u.P(a)},
cP:function(a){var u
H.k(a,"$iz")
u=this.ch
if(u!=null)u.P(a)},
fK:function(){return this.cP(null)},
fY:function(a){var u,t,s
H.h(a,"$in",[D.T],"$an")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(s==null||this.ez(s))return!1}return!0},
fk:function(a,b){var u,t,s,r,q,p,o,n
u=D.T
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gcO(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.w)(b),++p){o=H.k(b[p],"$iT")
if(o instanceof D.b0)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bi()
n.sab(null)
n.saG(null)
n.c=null
n.d=0
o.d=n}H.j(s,r)
if(n.a==null)n.sab(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bT(a,b,this,[u])
u.b=!0
this.ai(u)},
h_:function(a,b){var u,t,s,r
u=D.T
H.h(b,"$in",[u],"$an")
for(t=b.gL(b),s=this.gcO();t.w();){r=t.gD()
C.a.B(this.e,r)
r.gA().B(0,s)}u=new D.bU(a,b,this,[u])
u.b=!0
this.ai(u)},
ez:function(a){var u=C.a.M(this.e,a)
return u},
sf2:function(a){this.e=H.h(a,"$ia",[D.b0],"$aa")},
sh6:function(a){this.f=H.h(a,"$ia",[D.dc],"$aa")},
shx:function(a){this.r=H.h(a,"$ia",[D.dn],"$aa")},
shE:function(a){this.x=H.h(a,"$ia",[D.dv],"$aa")},
shF:function(a){this.y=H.h(a,"$ia",[D.dw],"$aa")},
shG:function(a){this.z=H.h(a,"$ia",[D.dx],"$aa")},
$an:function(){return[D.T]},
$aS:function(){return[D.T]}}
D.dc.prototype={$iT:1,$iaN:1}
D.dn.prototype={$iT:1,$iaN:1}
D.dv.prototype={$iT:1,$iaN:1}
D.dw.prototype={$iT:1,$iaN:1}
D.dx.prototype={$iT:1,$iaN:1}
V.U.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.bg.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bg))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+", "+V.E(this.d,3,0)+"]"}}
V.ei.prototype={}
V.d3.prototype={
a4:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d3))return!1
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
u=[P.v]
t=V.bC(H.b([this.a,this.d,this.r],u),3,0)
s=V.bC(H.b([this.b,this.e,this.x],u),3,0)
r=V.bC(H.b([this.c,this.f,this.y],u),3,0)
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
V.a1.prototype={
a4:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return u},
dB:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.G().a)return V.ia()
a8=1/a7
a9=-r
b0=-d
return V.aL((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
U:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aL(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cg:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.K(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
aS:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.at(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
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
i:function(a){return this.E()},
dA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.v]
t=V.bC(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bC(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bC(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bC(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
E:function(){return this.dA("",3,0)},
u:function(a){return this.dA(a,3,0)}}
V.ad.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.at.prototype={
a_:function(a,b){return new V.at(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.at))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.de.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.de))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+", "+V.E(this.d,3,0)+"]"}}
V.dj.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dj))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+", "+V.E(this.d,3,0)+"]"}}
V.aP.prototype={
c6:function(a){var u,t
u=this.a
if(typeof u!=="number")return u.U()
t=this.b
if(typeof t!=="number")return t.U()
return Math.sqrt(u*u+t*t)},
H:function(a,b){var u,t
if(Math.abs(b-0)<$.G().a){u=$.jd
if(u==null){u=new V.aP(0,0)
$.jd=u}return u}u=this.a
if(typeof u!=="number")return u.H()
t=this.b
if(typeof t!=="number")return t.H()
return new V.aP(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aP))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.a_()
if(typeof t!=="number")return H.bc(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.a_()
if(typeof t!=="number")return H.bc(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.K.prototype={
c6:function(a){return Math.sqrt(this.N(this))},
N:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c7:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aJ:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
K:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
aE:function(a){return new V.K(-this.a,-this.b,-this.c)},
H:function(a,b){if(Math.abs(b-0)<$.G().a)return V.ci()
return new V.K(this.a/b,this.b/b,this.c/b)},
dC:function(){var u=$.G().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
U.cI.prototype={
gA:function(){var u=this.b
if(u==null){u=D.al()
this.b=u}return u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cI))return!1
return J.R(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}}
U.bq.prototype={}
U.dk.prototype={
gA:function(){var u=this.y
if(u==null){u=D.al()
this.y=u}return u},
aw:function(a){var u=this.y
if(u!=null)u.P(a)},
se_:function(a){var u
a=V.iB(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.G().a)){this.a=a
u=new D.L("yaw",u,a,this,[P.v])
u.b=!0
this.aw(u)}},
sdL:function(a){var u
a=V.iB(a,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-a)<$.G().a)){this.b=a
u=new D.L("pitch",u,a,this,[P.v])
u.b=!0
this.aw(u)}},
sdQ:function(a){var u
a=V.iB(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.G().a)){this.c=a
u=new D.L("roll",u,a,this,[P.v])
u.b=!0
this.aw(u)}},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dk))return!1
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
i:function(a){return"Rotater: ["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"], ["+V.E(this.d,3,0)+", "+V.E(this.e,3,0)+", "+V.E(this.f,3,0)+"]"}}
M.cM.prototype={
aj:function(a){var u
H.k(a,"$iz")
u=this.x
if(u!=null)u.P(a)},
eD:function(){return this.aj(null)},
ft:function(a,b){var u,t,s,r,q,p,o,n
u=E.a5
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gaa(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.w)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bi()
n.sab(null)
n.saG(null)
n.c=null
n.d=0
o.z=n}H.j(s,r)
if(n.a==null)n.sab(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bT(a,b,this,[u])
u.b=!0
this.aj(u)},
fv:function(a,b){var u,t,s
u=E.a5
H.h(b,"$in",[u],"$an")
for(t=b.gL(b),s=this.gaa();t.w();)t.gD().gA().B(0,s)
u=new D.bU(a,b,this,[u])
u.b=!0
this.aj(u)},
sdS:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gA().B(0,this.gaa())
t=this.c
this.c=a
if(a!=null)a.gA().h(0,this.gaa())
u=new D.L("technique",t,this.c,this,[O.bw])
u.b=!0
this.aj(u)}},
gA:function(){var u=this.x
if(u==null){u=D.al()
this.x=u}return u},
aC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.dO(this.c)
u=this.b
u.toString
t=a.a
C.b.ia(t,36160,null)
C.b.bX(t,2884)
C.b.bX(t,2929)
C.b.iy(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.bc(s)
o=C.j.a8(p*s)
p=q.b
if(typeof r!=="number")return H.bc(r)
n=C.j.a8(p*r)
p=C.j.a8(q.c*s)
a.c=p
q=C.j.a8(q.d*r)
a.d=q
C.b.jx(t,o,n,p,q)
C.b.ii(t,u.c)
u=u.a
C.b.ih(t,u.a,u.b,u.c,u.d)
C.b.ig(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aL(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dN(i)
t=$.iY
if(t==null){t=V.j_()
q=V.jh()
p=$.je
if(p==null){p=new V.K(0,0,-1)
$.je=p}p=V.iU(t,q,p)
$.iY=p
h=p}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.U(0,h)}a.db.dN(h)
u=this.c
if(u!=null)u.bk(a)
for(u=this.d.a,u=new J.aj(u,u.length,0,[H.u(u,0)]);u.w();)u.d.bk(a)
for(u=this.d.a,u=new J.aj(u,u.length,0,[H.u(u,0)]);u.w();)u.d.aC(a)
this.a.toString
a.cy.cc()
a.db.cc()
this.b.toString
a.dM()},
seC:function(a,b){this.d=H.h(b,"$iS",[E.a5],"$aS")},
$ilx:1}
A.cC.prototype={}
A.e3.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iE:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
C.b.d9(r.a,r.c)}},
iA:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
C.b.d8(r.a,r.c)}}}
A.eO.prototype={
er:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.aO("")
t=a7.fx
if(t){u.a="uniform mat4 objMat;\n"
s="uniform mat4 objMat;\n"}else s=""
r=a7.fy
if(r){s+="uniform mat4 viewObjMat;\n"
u.a=s}s+="uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s+="attribute vec3 posAttr;\n"
u.a=s
q=a7.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=a7.r2
if(p){s+="attribute vec3 binmAttr;\n"
u.a=s}u.a=s+"\n"
a7.hK(u)
a7.hR(u)
a7.hL(u)
a7.hZ(u)
a7.i_(u)
a7.hT(u)
a7.i3(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=a7.x1
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
u.a=s}if(a7.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(a7.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(a7.k3){s+="   objPos = getObjPos();\n"
u.a=s}if(a7.k4){s+="   viewPos = getViewPos();\n"
u.a=s}s+="   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
n=s.charCodeAt(0)==0?s:s
s=this.z
u=new P.aO("")
u.a="precision mediump float;\n"
u.a="precision mediump float;\n\n"
q=s.r1
if(q){u.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
p="precision mediump float;\n\nvarying vec3 normalVec;\n"}else p="precision mediump float;\n\n"
if(s.r2){p+="varying vec3 binormalVec;\n"
u.a=p}if(s.rx){p+="varying vec2 txt2D;\n"
u.a=p}if(s.ry){p+="varying vec3 txtCube;\n"
u.a=p}if(s.k3){p+="varying vec3 objPos;\n"
u.a=p}if(s.k4){p+="varying vec3 viewPos;\n"
u.a=p}p+="\n"
u.a=p
o=s.y2
if(o){p+="uniform mat4 colorMat;\n"
u.a=p}if(s.fr){p+="uniform mat4 invViewMat;\n"
u.a=p}u.a=p+"\n"
s.hO(u)
s.hJ(u)
s.hM(u)
s.hP(u)
s.hX(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.hV(u)
s.hW(u)}s.hS(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.f){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.d){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.e){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.c:m+="   return 1.0;\n"
u.a=m
break
case C.f:m+="   return alpha;\n"
u.a=m
break
case C.d:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.e:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.b([],[P.l])
if(s.b!==C.c)C.a.h(k,"ambient()")
if(s.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.k(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.hN(u)
s.hU(u)
s.hY(u)
s.i0(u)
s.i1(u)
s.i2(u)
s.hQ(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m+="   float alpha = alphaValue();\n"
u.a=m
if(q){q=m+"   vec3 norm = normal();\n"
u.a=q}else q=m
if(p)u.a=q+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.b([],[P.l])
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
i="vec4("+C.a.k(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.cI(n,35633)
this.f=this.cI(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.d2(s,q,this.e)
C.b.d2(s,this.r,this.f)
C.b.iP(s,this.r)
if(!H.ip(C.b.bn(s,this.r,35714))){h=C.b.e8(s,this.r)
C.b.iu(s,this.r)
H.q(P.p("Failed to link shader: "+H.d(h)))}this.hs()
this.hu()
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a7.fr)this.id=H.c(this.y.m(0,"invViewMat"),"$iae")
if(t)this.dy=H.c(this.y.m(0,"objMat"),"$iae")
if(r)this.fr=H.c(this.y.m(0,"viewObjMat"),"$iae")
this.fy=H.c(this.y.m(0,"projViewObjMat"),"$iae")
if(a7.x2)this.k1=H.c(this.y.m(0,"txt2DMat"),"$icb")
if(a7.y1)this.k2=H.c(this.y.m(0,"txtCubeMat"),"$iae")
if(a7.y2)this.k3=H.c(this.y.m(0,"colorMat"),"$iae")
this.seT(H.b([],[A.ae]))
t=a7.ag
if(t>0){this.k4=H.k(this.y.m(0,"bendMatCount"),"$iD")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.l(0,q)
if(f==null)H.q(P.p("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.c(f,"$iae"))}}t=a7.a
if(t!==C.c){this.r2=H.c(this.y.m(0,"emissionClr"),"$iB")
switch(t){case C.c:break
case C.f:break
case C.d:this.rx=H.c(this.y.m(0,"emissionTxt"),"$ia2")
this.x1=H.c(this.y.m(0,"nullEmissionTxt"),"$iD")
break
case C.e:this.ry=H.c(this.y.m(0,"emissionTxt"),"$ia3")
this.x1=H.c(this.y.m(0,"nullEmissionTxt"),"$iD")
break}}t=a7.b
if(t!==C.c){this.x2=H.c(this.y.m(0,"ambientClr"),"$iB")
switch(t){case C.c:break
case C.f:break
case C.d:this.y1=H.c(this.y.m(0,"ambientTxt"),"$ia2")
this.ag=H.c(this.y.m(0,"nullAmbientTxt"),"$iD")
break
case C.e:this.y2=H.c(this.y.m(0,"ambientTxt"),"$ia3")
this.ag=H.c(this.y.m(0,"nullAmbientTxt"),"$iD")
break}}t=a7.c
if(t!==C.c){this.a6=H.c(this.y.m(0,"diffuseClr"),"$iB")
switch(t){case C.c:break
case C.f:break
case C.d:this.b1=H.c(this.y.m(0,"diffuseTxt"),"$ia2")
this.b2=H.c(this.y.m(0,"nullDiffuseTxt"),"$iD")
break
case C.e:this.da=H.c(this.y.m(0,"diffuseTxt"),"$ia3")
this.b2=H.c(this.y.m(0,"nullDiffuseTxt"),"$iD")
break}}t=a7.d
if(t!==C.c){this.b3=H.c(this.y.m(0,"invDiffuseClr"),"$iB")
switch(t){case C.c:break
case C.f:break
case C.d:this.dc=H.c(this.y.m(0,"invDiffuseTxt"),"$ia2")
this.b4=H.c(this.y.m(0,"nullInvDiffuseTxt"),"$iD")
break
case C.e:this.dd=H.c(this.y.m(0,"invDiffuseTxt"),"$ia3")
this.b4=H.c(this.y.m(0,"nullInvDiffuseTxt"),"$iD")
break}}t=a7.e
if(t!==C.c){this.b7=H.c(this.y.m(0,"shininess"),"$iQ")
this.b5=H.c(this.y.m(0,"specularClr"),"$iB")
switch(t){case C.c:break
case C.f:break
case C.d:this.de=H.c(this.y.m(0,"specularTxt"),"$ia2")
this.b6=H.c(this.y.m(0,"nullSpecularTxt"),"$iD")
break
case C.e:this.df=H.c(this.y.m(0,"specularTxt"),"$ia3")
this.b6=H.c(this.y.m(0,"nullSpecularTxt"),"$iD")
break}}switch(a7.f){case C.c:break
case C.f:break
case C.d:this.dg=H.c(this.y.m(0,"bumpTxt"),"$ia2")
this.b8=H.c(this.y.m(0,"nullBumpTxt"),"$iD")
break
case C.e:this.dh=H.c(this.y.m(0,"bumpTxt"),"$ia3")
this.b8=H.c(this.y.m(0,"nullBumpTxt"),"$iD")
break}if(a7.dy){this.di=H.c(this.y.m(0,"envSampler"),"$ia3")
this.dj=H.c(this.y.m(0,"nullEnvTxt"),"$iD")
t=a7.r
if(t!==C.c){this.b9=H.c(this.y.m(0,"reflectClr"),"$iB")
switch(t){case C.c:break
case C.f:break
case C.d:this.dk=H.c(this.y.m(0,"reflectTxt"),"$ia2")
this.ba=H.c(this.y.m(0,"nullReflectTxt"),"$iD")
break
case C.e:this.dl=H.c(this.y.m(0,"reflectTxt"),"$ia3")
this.ba=H.c(this.y.m(0,"nullReflectTxt"),"$iD")
break}}t=a7.x
if(t!==C.c){this.bb=H.c(this.y.m(0,"refraction"),"$iQ")
this.bc=H.c(this.y.m(0,"refractClr"),"$iB")
switch(t){case C.c:break
case C.f:break
case C.d:this.dm=H.c(this.y.m(0,"refractTxt"),"$ia2")
this.bd=H.c(this.y.m(0,"nullRefractTxt"),"$iD")
break
case C.e:this.dn=H.c(this.y.m(0,"refractTxt"),"$ia3")
this.bd=H.c(this.y.m(0,"nullRefractTxt"),"$iD")
break}}}t=a7.y
if(t!==C.c){this.be=H.c(this.y.m(0,"alpha"),"$iQ")
switch(t){case C.c:break
case C.f:break
case C.d:this.dq=H.c(this.y.m(0,"alphaTxt"),"$ia2")
this.bf=H.c(this.y.m(0,"nullAlphaTxt"),"$iD")
break
case C.e:this.dr=H.c(this.y.m(0,"alphaTxt"),"$ia3")
this.bf=H.c(this.y.m(0,"nullAlphaTxt"),"$iD")
break}}this.seE(H.b([],[A.ca]))
this.seF(H.b([],[A.cc]))
this.seG(H.b([],[A.cd]))
this.seH(H.b([],[A.ce]))
this.seI(H.b([],[A.cf]))
this.seJ(H.b([],[A.cg]))
if(a7.k2){t=a7.z
if(t>0){this.ds=H.k(this.y.m(0,"dirLightCount"),"$iD")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iB")
s=this.y
r="dirLights["+g+"].color"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iB")
s=this.bY;(s&&C.a).h(s,new A.ca(g,f,e))}}t=a7.Q
if(t>0){this.dt=H.k(this.y.m(0,"pntLightCount"),"$iD")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iB")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iB")
s=this.y
r="pntLights["+g+"].color"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iB")
s=this.y
r="pntLights["+g+"].att0"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iQ")
s=this.y
r="pntLights["+g+"].att1"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iQ")
s=this.y
r="pntLights["+g+"].att2"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iQ")
s=this.bZ;(s&&C.a).h(s,new A.cc(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.du=H.k(this.y.m(0,"spotLightCount"),"$iD")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iB")
s=this.y
r="spotLights["+g+"].objDir"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iB")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iB")
s=this.y
r="spotLights["+g+"].color"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iB")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iQ")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iQ")
s=this.y
r="spotLights["+g+"].att0"
a0=s.l(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iQ")
s=this.y
r="spotLights["+g+"].att1"
a1=s.l(0,r)
if(a1==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iQ")
s=this.y
r="spotLights["+g+"].att2"
a2=s.l(0,r)
if(a2==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iQ")
s=this.c_;(s&&C.a).h(s,new A.cd(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.dv=H.k(this.y.m(0,"txtDirLightCount"),"$iD")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iB")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iB")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iB")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iB")
s=this.y
r="txtDirLights["+g+"].color"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iB")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iD")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.l(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$ia2")
s=this.c0;(s&&C.a).h(s,new A.ce(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.dw=H.k(this.y.m(0,"txtPntLightCount"),"$iD")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iB")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iB")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$icb")
s=this.y
r="txtPntLights["+g+"].color"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iB")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iD")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iQ")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.l(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iQ")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.l(0,r)
if(a1==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iQ")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.l(0,r)
if(a2==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$ia3")
s=this.c1;(s&&C.a).h(s,new A.cf(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.dz=H.k(this.y.m(0,"txtSpotLightCount"),"$iD")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iB")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iB")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iB")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iB")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iB")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iD")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.l(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iB")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.l(0,r)
if(a1==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iQ")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.l(0,r)
if(a2==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iQ")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.l(0,r)
if(a3==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a3,"$iQ")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.l(0,r)
if(a4==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a4,"$iQ")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.l(0,r)
if(a5==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a5,"$iQ")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.l(0,r)
if(a6==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a6,"$ia2")
s=this.c2;(s&&C.a).h(s,new A.cg(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
a5:function(a,b,c){if(c==null||!c.d)C.b.J(b.a,b.d,1)
else{a.eh(c)
C.b.J(b.a,b.d,0)}},
a0:function(a,b,c){C.b.J(b.a,b.d,1)},
seT:function(a){this.r1=H.h(a,"$ia",[A.ae],"$aa")},
seE:function(a){this.bY=H.h(a,"$ia",[A.ca],"$aa")},
seF:function(a){this.bZ=H.h(a,"$ia",[A.cc],"$aa")},
seG:function(a){this.c_=H.h(a,"$ia",[A.cd],"$aa")},
seH:function(a){this.c0=H.h(a,"$ia",[A.ce],"$aa")},
seI:function(a){this.c1=H.h(a,"$ia",[A.cf],"$aa")},
seJ:function(a){this.c2=H.h(a,"$ia",[A.cg],"$aa")}}
A.eR.prototype={
hK:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ag+"];\n"
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
hR:function(a){var u
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
hL:function(a){var u
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
hZ:function(a){var u,t
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
i_:function(a){var u,t
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
hT:function(a){var u
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
i3:function(a){var u
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
al:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.i.aT(c,1))+"Txt;\n"
a.a=u
if(b===C.d)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hO:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.al(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   return emissionClr;\n"
a.a=u
break
case C.d:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
hJ:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.al(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   return ambientClr;\n"
a.a=u
break
case C.d:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
hM:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.al(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.d:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hP:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.al(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.d:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
hX:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.al(a,u,"specular")
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
case C.f:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.d:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
hS:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.f:break
case C.d:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.e:u+="uniform samplerCube bumpTxt;\n"
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
case C.f:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.d:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.e:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
hV:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.al(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.d:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hW:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.al(a,u,"refract")
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
case C.f:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.d:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hN:function(a){var u,t
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
hU:function(a){var u,t
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
hY:function(a){var u,t
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
i0:function(a){var u,t,s
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
i1:function(a){var u,t,s
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
i2:function(a){var u,t,s
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
hQ:function(a){var u
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
i:function(a){return this.a6}}
A.ca.prototype={}
A.ce.prototype={}
A.cc.prototype={}
A.cf.prototype={}
A.cd.prototype={}
A.cg.prototype={}
A.c2.prototype={
ev:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cI:function(a,b){var u,t,s
u=this.a
t=C.b.is(u,b)
C.b.ei(u,t,a)
C.b.ik(u,t)
if(!H.ip(C.b.ea(u,t,35713))){s=C.b.e9(u,t)
C.b.iv(u,t)
throw H.f(P.p("Error compiling shader '"+H.d(t)+"': "+H.d(s)))}return t},
hs:function(){var u,t,s,r,q,p
u=H.b([],[A.cC])
t=this.a
s=H.a_(C.b.bn(t,this.r,35721))
if(typeof s!=="number")return H.bc(s)
r=0
for(;r<s;++r){q=C.b.e2(t,this.r,r)
p=C.b.e4(t,this.r,q.name)
C.a.h(u,new A.cC(t,q.name,p))}this.x=new A.e3(u)},
hu:function(){var u,t,s,r,q,p
u=H.b([],[A.dA])
t=this.a
s=H.a_(C.b.bn(t,this.r,35718))
if(typeof s!=="number")return H.bc(s)
r=0
for(;r<s;++r){q=C.b.e3(t,this.r,r)
p=C.b.eb(t,this.r,q.name)
C.a.h(u,this.it(q.type,q.size,q.name,p))}this.y=new A.fL(u)},
av:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.D(u,t,b,c)
else return A.ie(u,t,b,a,c)},
f_:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a2(u,t,b,c)
else return A.ie(u,t,b,a,c)},
f0:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a3(u,t,b,c)
else return A.ie(u,t,b,a,c)},
b_:function(a,b){return new P.dJ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
it:function(a,b,c,d){switch(a){case 5120:return this.av(b,c,d)
case 5121:return this.av(b,c,d)
case 5122:return this.av(b,c,d)
case 5123:return this.av(b,c,d)
case 5124:return this.av(b,c,d)
case 5125:return this.av(b,c,d)
case 5126:return new A.Q(this.a,this.r,c,d)
case 35664:return new A.fG(this.a,this.r,c,d)
case 35665:return new A.B(this.a,this.r,c,d)
case 35666:return new A.fJ(this.a,this.r,c,d)
case 35667:return new A.fH(this.a,this.r,c,d)
case 35668:return new A.fI(this.a,this.r,c,d)
case 35669:return new A.fK(this.a,this.r,c,d)
case 35674:return new A.fM(this.a,this.r,c,d)
case 35675:return new A.cb(this.a,this.r,c,d)
case 35676:return new A.ae(this.a,this.r,c,d)
case 35678:return this.f_(b,c,d)
case 35680:return this.f0(b,c,d)
case 35670:throw H.f(this.b_("BOOL",c))
case 35671:throw H.f(this.b_("BOOL_VEC2",c))
case 35672:throw H.f(this.b_("BOOL_VEC3",c))
case 35673:throw H.f(this.b_("BOOL_VEC4",c))
default:throw H.f(P.p("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.bh.prototype={
i:function(a){return this.b}}
A.dA.prototype={}
A.fL.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
m:function(a,b){var u=this.l(0,b)
if(u==null)throw H.f(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.E()},
iJ:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r)s+=u[r].i(0)+a
return s},
E:function(){return this.iJ("\n")}}
A.D.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.fH.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.fI.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.fK.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.fF.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)},
shH:function(a){this.e=H.h(a,"$ia",[P.x],"$aa")}}
A.Q.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.fG.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.B.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.fJ.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.fM.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.cb.prototype={
a9:function(a){var u=new Float32Array(H.ct(H.h(a,"$ia",[P.v],"$aa")))
C.b.dX(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.ae.prototype={
a9:function(a){var u=new Float32Array(H.ct(H.h(a,"$ia",[P.v],"$aa")))
C.b.dY(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.a2.prototype={
eh:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.J(t,s,0)
else C.b.J(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.a3.prototype={
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.hH.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.c7(u.b,b).c7(u.d.c7(u.c,b),c)
u=new V.at(t.a,t.b,t.c)
if(!J.R(a.f,u)){a.f=u
u=a.a
if(u!=null)u.V()}a.sjo(t.H(0,Math.sqrt(t.N(t))))
u=1-b
s=1-c
s=new V.de(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.R(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.V()}},
$S:31}
F.V.prototype={
aK:function(){if(!this.gaL()){C.a.B(this.a.a.d.b,this)
this.a.a.V()}this.bH()
this.bI()
this.hc()},
hp:function(a){this.a=a
C.a.h(a.d.b,this)},
hq:function(a){this.b=a
C.a.h(a.d.c,this)},
hr:function(a){this.c=a
C.a.h(a.d.d,this)},
bH:function(){var u=this.a
if(u!=null){C.a.B(u.d.b,this)
this.a=null}},
bI:function(){var u=this.b
if(u!=null){C.a.B(u.d.c,this)
this.b=null}},
hc:function(){var u=this.c
if(u!=null){C.a.B(u.d.d,this)
this.c=null}},
gaL:function(){return this.a==null||this.b==null||this.c==null},
eS:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.ci()
if(t!=null)q=q.K(0,t)
if(s!=null)q=q.K(0,s)
if(r!=null)q=q.K(0,r)
if(q.dC())return
return q.H(0,Math.sqrt(q.N(q)))},
eW:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.a_(0,t)
u=new V.K(u.a,u.b,u.c)
q=u.H(0,Math.sqrt(u.N(u)))
u=r.a_(0,t)
u=new V.K(u.a,u.b,u.c)
u=q.aJ(u.H(0,Math.sqrt(u.N(u))))
return u.H(0,Math.sqrt(u.N(u)))},
bT:function(){if(this.d!=null)return!0
var u=this.eS()
if(u==null){u=this.eW()
if(u==null)return!1}this.d=u
this.a.a.V()
return!0},
eR:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.ci()
if(t!=null)q=q.K(0,t)
if(s!=null)q=q.K(0,s)
if(r!=null)q=q.K(0,r)
if(q.dC())return
return q.H(0,Math.sqrt(q.N(q)))},
eV:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.G().a){u=m.a_(0,p)
u=new V.K(u.a,u.b,u.c)
h=u.H(0,Math.sqrt(u.N(u)))
if(j.a-k.a<0)h=h.aE(0)}else{g=(u-l.b)/i
u=m.a_(0,p)
u=new V.at(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).a_(0,s)
u=new V.K(u.a,u.b,u.c)
h=u.H(0,Math.sqrt(u.N(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.aE(0)}u=this.d
if(u!=null){f=u.H(0,Math.sqrt(u.N(u)))
u=f.aJ(h)
u=u.H(0,Math.sqrt(u.N(u))).aJ(f)
h=u.H(0,Math.sqrt(u.N(u)))}return h},
bR:function(){if(this.e!=null)return!0
var u=this.eR()
if(u==null){u=this.eV()
if(u==null)return!1}this.e=u
this.a.a.V()
return!0},
gij:function(a){if(J.R(this.a,this.b))return!0
if(J.R(this.b,this.c))return!0
if(J.R(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
u:function(a){var u,t
if(this.gaL())return a+"disposed"
u=a+C.i.a3(J.a9(this.a.e),0)+", "+C.i.a3(J.a9(this.b.e),0)+", "+C.i.a3(J.a9(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
E:function(){return this.u("")}}
F.em.prototype={}
F.fl.prototype={
aM:function(a,b,c){var u,t
u=b.a
u.a.a.q()
u=u.e
t=c.a
t.a.a.q()
if(u==t.e){u=b.b
u.a.a.q()
u=u.e
t=c.b
t.a.a.q()
if(u==t.e){u=b.c
u.a.a.q()
u=u.e
t=c.c
t.a.a.q()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.q()
u=u.e
t=c.b
t.a.a.q()
if(u==t.e){u=b.b
u.a.a.q()
u=u.e
t=c.c
t.a.a.q()
if(u==t.e){u=b.c
u.a.a.q()
u=u.e
t=c.a
t.a.a.q()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.q()
u=u.e
t=c.c
t.a.a.q()
if(u==t.e){u=b.b
u.a.a.q()
u=u.e
t=c.a
t.a.a.q()
if(u==t.e){u=b.c
u.a.a.q()
u=u.e
t=c.b
t.a.a.q()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.aK.prototype={
aK:function(){if(!this.gaL()){C.a.B(this.a.a.c.b,this)
this.a.a.V()}this.bH()
this.bI()},
bH:function(){var u=this.a
if(u!=null){C.a.B(u.c.b,this)
this.a=null}},
bI:function(){var u=this.b
if(u!=null){C.a.B(u.c.c,this)
this.b=null}},
gaL:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
u:function(a){if(this.gaL())return a+"disposed"
return a+C.i.a3(J.a9(this.a.e),0)+", "+C.i.a3(J.a9(this.b.e),0)},
E:function(){return this.u("")}}
F.eE.prototype={}
F.fE.prototype={
aM:function(a,b,c){var u,t
u=b.a
u.a.a.q()
u=u.e
t=c.a
t.a.a.q()
if(u==t.e){u=b.b
u.a.a.q()
u=u.e
t=c.b
t.a.a.q()
return u==t.e}else{u=b.a
u.a.a.q()
u=u.e
t=c.b
t.a.a.q()
if(u==t.e){u=b.b
u.a.a.q()
u=u.e
t=c.a
t.a.a.q()
return u==t.e}else return!1}}}
F.b7.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
u:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.i.a3(J.a9(u.e),0)},
E:function(){return this.u("")}}
F.dm.prototype={
gA:function(){var u=this.e
if(u==null){u=D.al()
this.e=u}return u},
ca:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.q()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.w)(u),++r){q=u[r]
this.a.h(0,q.io())}this.a.q()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.w)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.K()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.b7()
if(m.a==null)H.q(P.p("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.P(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.w)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.K()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.K()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
o=new F.aK()
n=k.a
if(n==null)H.q(P.p("May not create a line with a start vertex which is not attached to a shape."))
if(n!=j.a)H.q(P.p("May not create a line with vertices attached to different shapes."))
o.a=k
C.a.h(k.c.b,o)
o.b=j
C.a.h(j.c.c,o)
C.a.h(o.a.a.c.b,o)
o=o.a.a.e
if(o!=null)o.P(null)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.w)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.K()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.K()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.K()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cN(k,j,h)}u=this.e
if(u!=null)u.ah()},
aA:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aA()||!1
if(!this.a.aA())t=!1
u=this.e
if(u!=null)u.ah()
return t},
iT:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.u(u,0)])
for(u=[F.ag];t.length!==0;){s=C.a.giG(t)
C.a.jb(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.w)(t),++p){o=t[p]
if(o!=null&&a.aM(0,s,o)){C.a.h(r,o)
C.a.B(t,o)}}if(r.length>1)b.ca(r)}}this.a.q()
this.c.cd()
this.d.cd()
this.b.jc()
this.c.ce(new F.fE())
this.d.ce(new F.fl())
u=this.e
if(u!=null)u.ah()},
ic:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aT()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aS().a)!==0)++r
if((s&$.aR().a)!==0)++r
if((s&$.aU().a)!==0)++r
if((s&$.aV().a)!==0)++r
if((s&$.cx().a)!==0)++r
if((s&$.cy().a)!==0)++r
if((s&$.bG().a)!==0)++r
if((s&$.aQ().a)!==0)++r
q=a1.gcn(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.v
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cE])
for(m=0,l=0;l<r;++l){k=a1.i7(l)
j=k.gcn(k)
C.a.R(n,l,new Z.cE(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].iQ(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.R(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.af(t,34962,e)
C.b.d4(t,34962,new Float32Array(H.ct(o)),35044)
C.b.af(t,34962,null)
d=new Z.cF(new Z.dF(34962,e),n,a1)
d.sfd(H.b([],[Z.b5]))
if(this.b.b.length!==0){s=P.x
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.q()
C.a.h(c,b.e)}a=Z.ih(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b5(0,c.length,a))}if(this.c.b.length!==0){s=P.x
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.q()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.q()
C.a.h(c,b.e)}a=Z.ih(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b5(1,c.length,a))}if(this.d.b.length!==0){s=P.x
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.q()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.q()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.q()
C.a.h(c,b.e)}a=Z.ih(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b5(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.l])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.u("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.u("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.u("   "))}return C.a.k(u,"\n")},
a7:function(a){var u=this.e
if(u!=null)u.P(a)},
V:function(){return this.a7(null)},
$ily:1}
F.fe.prototype={
i4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.ag],"$aa")
u=H.b([],[F.V])
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
C.a.h(u,F.cN(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cN(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cN(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cN(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
ce:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.l(0,q)
for(o=q-1;o>=0;--o){n=r.d.l(0,o)
if(a.aM(0,p,n)){p.aK()
break}}}}},
cd:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gij(s)
if(t)s.aK()}},
aA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].bT())s=!1
return s},
bS:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].bR())s=!1
return s},
i:function(a){return this.E()},
u:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
return C.a.k(u,"\n")},
E:function(){return this.u("")},
sf5:function(a){this.b=H.h(a,"$ia",[F.V],"$aa")}}
F.ff.prototype={
gn:function(a){return this.b.length},
ce:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.l(0,q)
for(o=q-1;o>=0;--o){n=r.c.l(0,o)
if(a.aM(0,p,n)){p.aK()
break}}}}},
cd:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.R(s.a,s.b)
if(t)s.aK()}},
i:function(a){return this.E()},
u:function(a){var u,t,s,r
u=H.b([],[P.l])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].u(a+(""+s+". ")))}return C.a.k(u,"\n")},
E:function(){return this.u("")},
sfe:function(a){this.b=H.h(a,"$ia",[F.aK],"$aa")}}
F.fg.prototype={
gn:function(a){return this.b.length},
jc:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.B(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.P(null)}s=t.a
if(s!=null){C.a.B(s.b.b,t)
t.a=null}}}},
i:function(a){return this.E()},
u:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
return C.a.k(u,"\n")},
E:function(){return this.u("")},
sbE:function(a){this.b=H.h(a,"$ia",[F.b7],"$aa")}}
F.ag.prototype={
bV:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.ig(this.cx,s,p,u,t,r,q,a,o)},
io:function(){return this.bV(null)},
sjo:function(a){var u
if(!J.R(this.z,a)){this.z=a
u=this.a
if(u!=null)u.V()}},
iQ:function(a){var u,t
if(a.t(0,$.aT())){u=this.f
t=[P.v]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aS())){u=this.r
t=[P.v]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aR())){u=this.x
t=[P.v]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aU())){u=this.y
t=[P.v]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.aV())){u=this.z
t=[P.v]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cx())){u=this.Q
t=[P.v]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cy())){u=this.Q
t=[P.v]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bG()))return H.b([this.ch],[P.v])
else if(a.t(0,$.aQ())){u=this.cx
t=[P.v]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.v])},
bT:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ci()
this.d.X(0,new F.h2(u))
u=u.a
this.r=u.H(0,Math.sqrt(u.N(u)))
u=this.a
if(u!=null){u.V()
u=this.a.e
if(u!=null)u.ah()}return!0},
bR:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ci()
this.d.X(0,new F.h1(u))
u=u.a
this.x=u.H(0,Math.sqrt(u.N(u)))
u=this.a
if(u!=null){u.V()
u=this.a.e
if(u!=null)u.ah()}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
u:function(a){var u,t,s
u=H.b([],[P.l])
C.a.h(u,C.i.a3(J.a9(this.e),0))
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
C.a.h(u,V.E(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.k(u,", ")
return a+"{"+s+"}"},
E:function(){return this.u("")}}
F.h2.prototype={
$1:function(a){var u,t
H.k(a,"$iV")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.K(0,u)}},
$S:5}
F.h1.prototype={
$1:function(a){var u,t
H.k(a,"$iV")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.K(0,u)}},
$S:5}
F.fT.prototype={
q:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.f(P.p("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.V()
return!0},
gn:function(a){return this.c.length},
aA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].bT()
return!0},
bS:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].bR()
return!0},
ie:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.H(0,Math.sqrt(p*p+o*o+n*n))
if(!J.R(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.P(null)}}}}return!0},
i:function(a){return this.E()},
u:function(a){var u,t,s,r
this.q()
u=H.b([],[P.l])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
return C.a.k(u,"\n")},
E:function(){return this.u("")},
shI:function(a){this.c=H.h(a,"$ia",[F.ag],"$aa")}}
F.fU.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
l:function(a,b){var u,t,s
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
X:function(a,b){H.j(b,{func:1,ret:-1,args:[F.V]})
C.a.X(this.b,b)
C.a.X(this.c,new F.fV(this,b))
C.a.X(this.d,new F.fW(this,b))},
i:function(a){return this.E()},
u:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
return C.a.k(u,"\n")},
E:function(){return this.u("")},
sf6:function(a){this.b=H.h(a,"$ia",[F.V],"$aa")},
sf7:function(a){this.c=H.h(a,"$ia",[F.V],"$aa")},
sf8:function(a){this.d=H.h(a,"$ia",[F.V],"$aa")}}
F.fV.prototype={
$1:function(a){H.k(a,"$iV")
if(!J.R(a.a,this.a))this.b.$1(a)},
$S:5}
F.fW.prototype={
$1:function(a){var u
H.k(a,"$iV")
u=this.a
if(!J.R(a.a,u)&&!J.R(a.b,u))this.b.$1(a)},
$S:5}
F.fX.prototype={
gn:function(a){return this.b.length+this.c.length},
l:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.e(u,s)
return u[s]}else{if(b<0)return H.e(u,b)
return u[b]}},
i:function(a){return this.E()},
u:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
return C.a.k(u,"\n")},
E:function(){return this.u("")},
sff:function(a){this.b=H.h(a,"$ia",[F.aK],"$aa")},
sfg:function(a){this.c=H.h(a,"$ia",[F.aK],"$aa")}}
F.fZ.prototype={}
F.fY.prototype={
aM:function(a,b,c){return J.R(b.f,c.f)}}
F.h_.prototype={}
F.f0.prototype={
ca:function(a){var u,t,s,r,q,p,o,n,m
H.h(a,"$ia",[F.ag],"$aa")
u=V.ci()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.H(0,Math.sqrt(u.N(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.w)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.H(0,Math.sqrt(o*o+n*n+m*m))}if(!J.R(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.P(null)}}}return}}
F.h0.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.E()},
u:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].u(a))
return C.a.k(u,"\n")},
E:function(){return this.u("")},
sbE:function(a){this.b=H.h(a,"$ia",[F.b7],"$aa")}}
O.d2.prototype={
gA:function(){var u=this.dy
if(u==null){u=D.al()
this.dy=u}return u},
S:function(a){var u
H.k(a,"$iz")
u=this.dy
if(u!=null)u.P(a)},
bs:function(){return this.S(null)},
cT:function(a){H.k(a,"$iz")
this.a=null
this.S(a)},
hg:function(){return this.cT(null)},
fm:function(a,b){var u=V.a1
u=new D.bT(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.S(u)},
fo:function(a,b){var u=V.a1
u=new D.bU(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.S(u)},
cF:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.W(u.e.length+3,4)*4
s=C.h.W(u.f.length+3,4)*4
r=C.h.W(u.r.length+3,4)*4
q=C.h.W(u.x.length+3,4)*4
p=C.h.W(u.y.length+3,4)*4
o=C.h.W(u.z.length+3,4)*4
n=C.h.W(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.h.i(u.a)+C.h.i(m.a)+C.h.i(l.a)+C.h.i(k.a)+C.h.i(j.a)+C.h.i(i.a)+C.h.i(h.a)+C.h.i(g.a)+C.h.i(f.a)
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
a2=u===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d||h===C.d||g===C.d||f===C.d
a3=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.aT()
if(a0){b=$.aS()
a7=new Z.aF(a7.a|b.a)}if(a1){b=$.aR()
a7=new Z.aF(a7.a|b.a)}if(a2){b=$.aU()
a7=new Z.aF(a7.a|b.a)}if(a3){b=$.aV()
a7=new Z.aF(a7.a|b.a)}if(a5){b=$.aQ()
a7=new Z.aF(a7.a|b.a)}return new A.eR(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
O:function(a,b){H.h(a,"$ia",[T.c7],"$aa")
if(b!=null)if(!C.a.M(a,b)){b.a=a.length
C.a.h(a,b)}},
bk:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.aj(u,u.length,0,[H.u(u,0)]);u.w();){t=u.d
t.toString
s=$.fS
if(s==null){s=new V.K(0,0,1)
$.fS=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cg(s)}}},
je:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.cF()
t=a4.fr.l(0,u.a6)
if(t==null){t=A.kl(u,a4.a)
s=t.b
if(s.length===0)H.q(P.p("May not cache a shader with no name."))
if(a4.fr.d6(s))H.q(P.p('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.R(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.b1
u=a5.e
if(!(u instanceof Z.cF)){a5.e=null
u=null}if(u==null||!u.d.t(0,q)){u=r.r1
if(u)a5.d.aA()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.bS()
o.a.bS()
o=o.e
if(o!=null)o.ah()}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.ie()
n=n.e
if(n!=null)n.ah()}l=a5.d.ic(new Z.h4(a4.a),q)
l.aB($.aT()).e=this.a.Q.c
if(u)l.aB($.aS()).e=this.a.cx.c
if(p)l.aB($.aR()).e=this.a.ch.c
if(r.rx)l.aB($.aU()).e=this.a.cy.c
if(o)l.aB($.aV()).e=this.a.db.c
if(r.x1)l.aB($.aQ()).e=this.a.dx.c
a5.e=l}u=T.c7
k=H.b([],[u])
p=this.a
o=a4.a
C.b.dZ(o,p.r)
p.x.iE()
if(r.fx){p=this.a
n=a4.dx.gT()
p=p.dy
p.toString
p.a9(n.a4(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db.gT().U(0,a4.dx.gT())
a4.cx=n}p=p.fr
p.toString
p.a9(n.a4(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gj9().U(0,a4.dx.gT())
a4.ch=n}p=p.fy
p.toString
p.a9(n.a4(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.a9(C.r.a4(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.a9(C.r.a4(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.a9(C.r.a4(n,!0))}if(r.ag>0){j=this.e.a.length
p=this.a.k4
C.b.J(p.a,p.d,j)
for(p=[P.v],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.e(m,i)
m=m[i]
n.toString
H.k(m,"$ia1")
n=n.r1
if(i>=n.length)return H.e(n,i)
n=n[i]
h=new Float32Array(H.ct(H.h(m.a4(0,!0),"$ia",p,"$aa")))
C.b.dY(n.a,n.d,!1,h)}}switch(r.a){case C.c:break
case C.f:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.d:this.O(k,this.f.d)
p=this.a
n=this.f.d
p.a5(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.e:this.O(k,this.f.e)
p=this.a
n=this.f.e
p.a0(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.c:break
case C.f:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.d:this.O(k,this.r.d)
p=this.a
n=this.r.d
p.a5(p.y1,p.ag,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.e:this.O(k,this.r.e)
p=this.a
n=this.r.e
p.a0(p.y2,p.ag,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.c){case C.c:break
case C.f:p=this.a
n=this.x.f
p=p.a6
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.d:this.O(k,this.x.d)
p=this.a
n=this.x.d
p.a5(p.b1,p.b2,n)
n=this.a
p=this.x.f
n=n.a6
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.e:this.O(k,this.x.e)
p=this.a
n=this.x.e
p.a0(p.da,p.b2,n)
n=this.a
p=this.x.f
n=n.a6
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.d){case C.c:break
case C.f:p=this.a
n=this.y.f
p=p.b3
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.d:this.O(k,this.y.d)
p=this.a
n=this.y.d
p.a5(p.dc,p.b4,n)
n=this.a
p=this.y.f
n=n.b3
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.e:this.O(k,this.y.e)
p=this.a
n=this.y.e
p.a0(p.dd,p.b4,n)
n=this.a
p=this.y.f
n=n.b3
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.e){case C.c:break
case C.f:p=this.a
n=this.z.f
p=p.b5
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.b7
C.b.G(n.a,n.d,g)
break
case C.d:this.O(k,this.z.d)
p=this.a
n=this.z.d
p.a5(p.de,p.b6,n)
n=this.a
p=this.z.f
n=n.b5
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.b7
C.b.G(p.a,p.d,g)
break
case C.e:this.O(k,this.z.e)
p=this.a
n=this.z.e
p.a0(p.df,p.b6,n)
n=this.a
p=this.z.f
n=n.b5
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.b7
C.b.G(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.ds
C.b.J(p.a,p.d,j)
f=a4.db.gT()
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.w)(p),++d){c=p[d]
m=this.a.bY
if(e>=m.length)return H.e(m,e)
b=m[e]
m=f.cg(c.a)
g=m.a
a=m.b
a0=m.c
a0=m.H(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.p(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.p(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.dt
C.b.J(p.a,p.d,j)
f=a4.db.gT()
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.w)(p),++d){c=p[d]
m=this.a.bZ
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gaQ(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.aS(c.gaQ(c))
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gan(c)
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gbM()
g=b.e
C.b.G(g.a,g.d,m)
m=c.gbN()
g=b.f
C.b.G(g.a,g.d,m)
m=c.gbO()
g=b.r
C.b.G(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.du
C.b.J(p.a,p.d,j)
f=a4.db.gT()
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.w)(p),++d){c=p[d]
m=this.a.c_
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gaQ(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gbW(c).jD()
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.aS(c.gaQ(c))
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gan(c)
g=b.e
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gjB()
g=b.f
C.b.G(g.a,g.d,m)
m=c.gjA()
g=b.r
C.b.G(g.a,g.d,m)
m=c.gbM()
g=b.x
C.b.G(g.a,g.d,m)
m=c.gbN()
g=b.y
C.b.G(g.a,g.d,m)
m=c.gbO()
g=b.z
C.b.G(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.dv
C.b.J(p.a,p.d,j)
f=a4.db.gT()
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.w)(p),++d){c=p[d]
g=this.a.c0
if(e>=g.length)return H.e(g,e)
b=g[e]
g=c.gaR()
H.h(k,"$ia",m,"$aa")
if(!C.a.M(k,g)){g.a=k.length
C.a.h(k,g)}g=c.gbW(c)
a=b.d
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=c.gjv()
a=b.b
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=c.gjh(c)
a=b.c
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=f.cg(c.gbW(c))
a=g.a
a0=g.b
a1=g.c
a1=g.H(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.p(a0.a,a0.d,a,g,a1)
a1=c.gan(c)
g=b.f
C.b.p(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gaR()
g=a1.gc9(a1)
if(!g){g=b.x
C.b.J(g.a,g.d,1)}else{g=b.r
a=a1.d
a0=g.a
g=g.d
if(!a)C.b.J(a0,g,0)
else C.b.J(a0,g,a1.a)
g=b.x
C.b.J(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.dw
C.b.J(p.a,p.d,j)
f=a4.db.gT()
for(p=this.dx.y,n=p.length,m=[P.v],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.w)(p),++d){c=p[d]
a=this.a.c1
if(e>=a.length)return H.e(a,e)
b=a[e]
a=c.gaR()
H.h(k,"$ia",g,"$aa")
if(!C.a.M(k,a)){a.a=k.length
C.a.h(k,a)}a2=f.U(0,c.gT())
a=c.gT()
a0=$.c_
if(a0==null){a0=new V.at(0,0,0)
$.c_=a0}a0=a.aS(a0)
a=b.b
C.b.p(a.a,a.d,a0.a,a0.b,a0.c)
a=$.c_
if(a==null){a=new V.at(0,0,0)
$.c_=a}a=a2.aS(a)
a0=b.c
C.b.p(a0.a,a0.d,a.a,a.b,a.c)
a=a2.dB()
a0=b.d
h=new Float32Array(H.ct(H.h(new V.d3(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).a4(0,!0),"$ia",m,"$aa")))
C.b.dX(a0.a,a0.d,!1,h)
a0=c.gan(c)
a=b.e
C.b.p(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gaR()
a=a0.gc9(a0)
if(!a){a=b.r
C.b.J(a.a,a.d,1)}else{a=b.f
a1=a0.gc9(a0)
a3=a.a
a=a.d
if(!a1)C.b.J(a3,a,0)
else C.b.J(a3,a,a0.gjC(a0))
a=b.r
C.b.J(a.a,a.d,0)}a=c.gbM()
a0=b.x
C.b.G(a0.a,a0.d,a)
a=c.gbN()
a0=b.y
C.b.G(a0.a,a0.d,a)
a=c.gbO()
a0=b.z
C.b.G(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.dz
C.b.J(p.a,p.d,j)
f=a4.db.gT()
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.w)(p),++d){c=p[d]
m=this.a.c2
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gaR()
H.h(k,"$ia",u,"$aa")
if(!C.a.M(k,m)){m.a=k.length
C.a.h(k,m)}m=c.gaQ(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gbW(c)
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gjv()
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gjh(c)
g=b.e
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.aS(c.gaQ(c))
g=b.f
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gaR()
g=m.gc9(m)
if(!g){m=b.x
C.b.J(m.a,m.d,1)}else{g=b.r
a=m.d
a0=g.a
g=g.d
if(!a)C.b.J(a0,g,0)
else C.b.J(a0,g,m.a)
m=b.x
C.b.J(m.a,m.d,0)}m=c.gan(c)
g=b.y
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gjE()
g=b.z
C.b.G(g.a,g.d,m)
m=c.gjF()
g=b.Q
C.b.G(g.a,g.d,m)
m=c.gbM()
g=b.ch
C.b.G(g.a,g.d,m)
m=c.gbN()
g=b.cx
C.b.G(g.a,g.d,m)
m=c.gbO()
g=b.cy
C.b.G(g.a,g.d,m);++e}}}switch(r.f){case C.c:break
case C.f:break
case C.d:this.O(k,this.Q.d)
u=this.a
p=this.Q.d
u.a5(u.dg,u.b8,p)
break
case C.e:this.O(k,this.Q.e)
u=this.a
p=this.Q.e
u.a0(u.dh,u.b8,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.gT().dB()
a4.Q=p}u=u.id
u.toString
u.a9(p.a4(0,!0))}if(r.dy){this.O(k,this.ch)
u=this.a
p=this.ch
u.a0(u.di,u.dj,p)
switch(r.r){case C.c:break
case C.f:u=this.a
p=this.cx.f
u=u.b9
u.toString
n=p.a
m=p.b
p=p.c
C.b.p(u.a,u.d,n,m,p)
break
case C.d:this.O(k,this.cx.d)
u=this.a
p=this.cx.d
u.a5(u.dk,u.ba,p)
p=this.a
u=this.cx.f
p=p.b9
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
break
case C.e:this.O(k,this.cx.e)
u=this.a
p=this.cx.e
u.a0(u.dl,u.ba,p)
p=this.a
u=this.cx.f
p=p.b9
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
break}switch(r.x){case C.c:break
case C.f:u=this.a
p=this.cy.f
u=u.bc
u.toString
n=p.a
m=p.b
p=p.c
C.b.p(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bb
C.b.G(p.a,p.d,m)
break
case C.d:this.O(k,this.cy.d)
u=this.a
p=this.cy.d
u.a5(u.dm,u.bd,p)
p=this.a
u=this.cy.f
p=p.bc
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bb
C.b.G(u.a,u.d,m)
break
case C.e:this.O(k,this.cy.e)
u=this.a
p=this.cy.e
u.a0(u.dn,u.bd,p)
p=this.a
u=this.cy.f
p=p.bc
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bb
C.b.G(u.a,u.d,m)
break}}u=r.y
p=u!==C.c
if(p){switch(u){case C.c:break
case C.f:u=this.a
n=this.db.f
u=u.be
C.b.G(u.a,u.d,n)
break
case C.d:this.O(k,this.db.d)
u=this.a
n=this.db.d
u.a5(u.dq,u.bf,n)
n=this.a
u=this.db.f
n=n.be
C.b.G(n.a,n.d,u)
break
case C.e:this.O(k,this.db.e)
u=this.a
n=this.db.e
u.a0(u.dr,u.bf,n)
n=this.a
u=this.db.f
n=n.be
C.b.G(n.a,n.d,u)
break}C.b.bX(o,3042)
C.b.ib(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(!u.c&&u.d){u.c=!0
C.b.cZ(o,33984+u.a)
C.b.az(o,3553,u.b)}}u=a5.e
u.bP(a4)
u.aC(a4)
u.ju(a4)
if(p)C.b.iz(o,3042)
for(i=0;i<k.length;++i){u=k[i]
if(u.c){u.c=!1
C.b.cZ(o,33984+u.a)
C.b.az(o,3553,null)}}u=this.a
u.toString
C.b.dZ(o,null)
u.x.iA()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cF().a6},
seU:function(a){this.e=H.h(a,"$iS",[V.a1],"$aS")}}
O.eP.prototype={
hl:function(a){var u=this.f
if(!(Math.abs(u-a)<$.G().a)){this.f=a
u=new D.L(this.b,u,a,this,[P.v])
u.b=!0
this.a.S(u)}},
ac:function(){this.cp()
this.hl(1)}}
O.bW.prototype={
S:function(a){this.a.S(H.k(a,"$iz"))},
bs:function(){return this.S(null)},
ac:function(){},
hn:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gA().B(0,this.gaW())
t=this.d
this.d=a
if(a!=null)a.gA().h(0,this.gaW())
u=new D.L(this.b+".texture2D",t,this.d,this,[T.du])
u.b=!0
this.a.S(u)}},
ho:function(a){},
sbj:function(a){var u=this.c
if(u!==C.d){if(u===C.c)this.ac()
this.c=C.d
this.ho(null)
u=this.a
u.a=null
u.S(null)}this.hn(a)}}
O.eQ.prototype={}
O.aB.prototype={
cV:function(a){var u,t
if(!J.R(this.f,a)){u=this.f
this.f=a
t=new D.L(this.b+".color",u,a,this,[V.U])
t.b=!0
this.a.S(t)}},
ac:function(){this.cp()
this.cV(new V.U(1,1,1))},
san:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.ac()
u=this.a
u.a=null
u.S(null)}this.cV(b)}}
O.eS.prototype={
hm:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.G().a)){this.ch=a
u=new D.L(this.b+".refraction",u,a,this,[P.v])
u.b=!0
this.a.S(u)}},
ac:function(){this.br()
this.hm(1)}}
O.eT.prototype={
bJ:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.G().a)){this.ch=a
u=new D.L(this.b+".shininess",u,a,this,[P.v])
u.b=!0
this.a.S(u)}},
ac:function(){this.br()
this.bJ(100)}}
O.bw.prototype={}
T.c7.prototype={}
T.du.prototype={}
T.ft.prototype={
gA:function(){var u=this.y
if(u==null){u=D.al()
this.y=u}return u}}
T.fu.prototype={
iR:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.az(u,3553,t)
C.b.bi(u,3553,10242,33071)
C.b.bi(u,3553,10243,33071)
C.b.bi(u,3553,10241,9729)
C.b.bi(u,3553,10240,9729)
C.b.az(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.ft()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.i
W.W(s,"load",H.j(new T.fv(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
c8:function(a){return this.iR(a,!1,!1,!1,!1)},
hh:function(a,b,c){var u,t,s,r
b=V.iy(b,2)
u=V.iy(a.width,2)
t=V.iy(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.i3(null,null)
s.width=u
s.height=t
r=H.k(C.p.e6(s,"2d"),"$ibf")
r.imageSmoothingEnabled=!1;(r&&C.y).iC(r,a,0,0,s.width,s.height)
return P.l2(C.y.fc(r,0,0,s.width,s.height))}}}
T.fv.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.hh(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.az(t,3553,this.e)
C.b.j8(t,37440,this.f?1:0)
C.b.jm(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.e1(t,3553)
C.b.az(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.iD()}++s.e},
$S:10}
V.aI.prototype={
ap:function(a){return!0},
i:function(a){return"all"},
$iab:1}
V.ab.prototype={}
V.d1.prototype={
ap:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)if(u[s].ap(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sY:function(a){this.a=H.h(a,"$ia",[V.ab],"$aa")},
$iab:1}
V.a6.prototype={
ap:function(a){return!this.eo(a)},
i:function(a){return"!["+this.co(0)+"]"}}
V.f5.prototype={
ap:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.ib(this.a)
t=H.ib(this.b)
return u+".."+t},
$iab:1}
V.fd.prototype={
eu:function(a){var u,t
if(a.a.length<=0)throw H.f(P.p("May not create a SetMatcher with zero characters."))
u=new H.az([P.x,P.I])
for(t=new H.bV(a,a.gn(a),0,[H.Z(a,"P",0)]);t.w();)u.R(0,t.d,!0)
this.shk(u)},
ap:function(a){return this.a.d6(a)},
i:function(a){var u=this.a
return P.ic(new H.cZ(u,[H.u(u,0)]),0,null)},
shk:function(a){this.a=H.h(a,"$iam",[P.x,P.I],"$aam")},
$iab:1}
V.c3.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.c9(this.a.j(0,b))
r.sY(H.b([],[V.ab]))
r.c=!1
C.a.h(this.c,r)
return r},
iF:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.ap(a))return r}return},
i:function(a){return this.b},
shD:function(a){this.c=H.h(a,"$ia",[V.c9],"$aa")}}
V.dz.prototype={
i:function(a){var u,t
u=H.iA(this.b,"\n","\\n")
t=H.iA(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.c8.prototype={
aq:function(a,b,c){var u,t,s
H.h(c,"$ia",[P.l],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.w)(c),++t){s=c[t]
this.c.R(0,s,b)}},
i:function(a){return this.b},
shd:function(a){var u=P.l
this.c=H.h(a,"$iam",[u,u],"$aam")}}
V.fx.prototype={
j:function(a,b){var u=this.a.l(0,b)
if(u==null){u=new V.c3(this,b)
u.shD(H.b([],[V.c9]))
u.d=null
this.a.R(0,b,u)}return u},
F:function(a){var u,t
u=this.b.l(0,a)
if(u==null){u=new V.c8(this,a)
t=P.l
u.shd(new H.az([t,t]))
this.b.R(0,a,u)}return u},
dV:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dz])
t=this.c
s=[P.x]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.i.au(a,o)
m=t.iF(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.ic(r,0,null)
throw H.f(P.p("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.ic(r,0,null)
k=t.d
j=k.c.l(0,l)
p=new V.dz(j==null?k.b:j,l,o)}++o}}},
shy:function(a){this.a=H.h(a,"$iam",[P.l,V.c3],"$aam")},
shC:function(a){this.b=H.h(a,"$iam",[P.l,V.c8],"$aam")}}
V.c9.prototype={
i:function(a){return this.b.b+": "+this.co(0)}}
X.cH.prototype={$iaN:1}
X.es.prototype={
gA:function(){var u=this.x
if(u==null){u=D.al()
this.x=u}return u}}
X.db.prototype={
gA:function(){var u=this.f
if(u==null){u=D.al()
this.f=u}return u},
at:function(a){var u
H.k(a,"$iz")
u=this.f
if(u!=null)u.P(a)},
eN:function(){return this.at(null)},
saN:function(a){var u,t
if(!J.R(this.b,a)){u=this.b
if(u!=null)u.gA().B(0,this.gcu())
t=this.b
this.b=a
if(a!=null)a.gA().h(0,this.gcu())
u=new D.L("mover",t,this.b,this,[U.bq])
u.b=!0
this.at(u)}},
$iaN:1,
$icH:1}
X.ds.prototype={}
V.aY.prototype={
aV:function(a){this.b=new P.ev(C.M)
this.c=null
this.sbz(H.b([],[[P.a,W.ak]]))},
C:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.ak]))
t=a.split("\n")
for(u=t.length,s=[W.ak],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.F(p)
n=this.b.eZ(p,0,p.length)
m=n==null?p:n
C.k.ef(o,H.iA(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbg(this.d),o)}},
dK:function(a){var u,t,s,r
H.h(a,"$ia",[P.l],"$aa")
this.sbz(H.b([],[[P.a,W.ak]]))
u=C.a.k(a,"\n")
t=this.c
if(t==null){t=this.b0()
this.c=t}for(t=t.dV(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)this.bh(t[r])},
sbz:function(a){this.d=H.h(a,"$ia",[[P.a,W.ak]],"$aa")}}
V.hY.prototype={
$1:function(a){H.k(a,"$iaC")
P.iz(C.j.dU(this.a.giK(),2)+" fps")},
$S:35}
V.eb.prototype={
bh:function(a){switch(a.a){case"Class":this.C(a.b,"#551")
break
case"Comment":this.C(a.b,"#777")
break
case"Id":this.C(a.b,"#111")
break
case"Num":this.C(a.b,"#191")
break
case"Reserved":this.C(a.b,"#119")
break
case"String":this.C(a.b,"#171")
break
case"Symbol":this.C(a.b,"#616")
break
case"Type":this.C(a.b,"#B11")
break
case"Whitespace":this.C(a.b,"#111")
break}},
b0:function(){var u,t,s,r
u=V.fy()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
s=V.M("a","z")
C.a.h(t.a,s)
s=V.M("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=V.M("0","9")
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.r(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.r(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.r(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"OpenDoubleStr")
t=V.r(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
s=V.r(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
t=V.r(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
s=V.r(new H.o('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.aI())
s=u.j(0,"Start").k(0,"OpenSingleStr")
t=V.r(new H.o("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
s=V.r(new H.o("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").k(0,"EscSingleStr")
t=V.r(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").k(0,"OpenSingleStr")
s=V.r(new H.o("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.aI())
s=u.j(0,"Start").k(0,"Slash")
t=V.r(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.r(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").k(0,"EndComment")
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.a6()
r=[V.ab]
s.sY(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"MLComment")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").k(0,"MLCStar")
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"MLComment")
s=new V.a6()
s.sY(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"EndComment")
s=V.r(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Whitespace")
t=V.r(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").k(0,"Whitespace")
s=V.r(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.F("Num")
s=u.j(0,"Float")
s.d=s.a.F("Num")
s=u.j(0,"Sym")
s.d=s.a.F("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.F("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.F("String")
s=u.j(0,"EndComment")
s.d=s.a.F("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.F("Whitespace")
s=u.j(0,"Id")
t=s.a.F("Id")
s.d=t
s=[P.l]
t.aq(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aq(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aq(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.et.prototype={
bh:function(a){switch(a.a){case"Builtin":this.C(a.b,"#411")
break
case"Comment":this.C(a.b,"#777")
break
case"Id":this.C(a.b,"#111")
break
case"Num":this.C(a.b,"#191")
break
case"Preprocess":this.C(a.b,"#737")
break
case"Reserved":this.C(a.b,"#119")
break
case"Symbol":this.C(a.b,"#611")
break
case"Type":this.C(a.b,"#171")
break
case"Whitespace":this.C(a.b,"#111")
break}},
b0:function(){var u,t,s,r
u=V.fy()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
s=V.M("a","z")
C.a.h(t.a,s)
s=V.M("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=V.M("0","9")
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.r(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.r(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.r(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Slash")
t=V.r(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.r(new H.o("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").k(0,"Sym").a,new V.aI())
s=u.j(0,"Comment").k(0,"EndComment")
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.a6()
r=[V.ab]
s.sY(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Preprocess")
s=V.r(new H.o("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"Preprocess")
t=new V.a6()
t.sY(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"EndPreprocess")
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Whitespace")
s=V.r(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").k(0,"Whitespace")
t=V.r(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.F("Num")
t=u.j(0,"Float")
t.d=t.a.F("Num")
t=u.j(0,"Sym")
t.d=t.a.F("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.F("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.F("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.F("Whitespace")
t=u.j(0,"Id")
s=t.a.F("Id")
t.d=s
t=[P.l]
s.aq(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aq(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aq(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.eu.prototype={
bh:function(a){switch(a.a){case"Attr":this.C(a.b,"#911")
this.C("=","#111")
break
case"Id":this.C(a.b,"#111")
break
case"Other":this.C(a.b,"#111")
break
case"Reserved":this.C(a.b,"#119")
break
case"String":this.C(a.b,"#171")
break
case"Symbol":this.C(a.b,"#616")
break}},
b0:function(){var u,t,s
u=V.fy()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
s=V.M("a","z")
C.a.h(t.a,s)
s=V.M("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=V.M("0","9")
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").k(0,"Attr")
s=V.r(new H.o("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Sym")
s=V.r(new H.o("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").k(0,"Sym")
t=V.r(new H.o("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"OpenStr")
s=V.r(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").k(0,"CloseStr")
t=V.r(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").k(0,"EscStr")
s=V.r(new H.o("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").k(0,"OpenStr")
t=V.r(new H.o('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").k(0,"OpenStr").a,new V.aI())
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aI())
t=u.j(0,"Other").k(0,"Other")
s=new V.a6()
s.sY(H.b([],[V.ab]))
C.a.h(t.a,s)
t=V.r(new H.o('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.F("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.F("String")
t=u.j(0,"Id")
s=t.a.F("Id")
t.d=s
s.aq(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.l]))
s=u.j(0,"Attr")
s.d=s.a.F("Attr")
s=u.j(0,"Other")
s.d=s.a.F("Other")
return u}}
V.f4.prototype={
dK:function(a){H.h(a,"$ia",[P.l],"$aa")
this.sbz(H.b([],[[P.a,W.ak]]))
this.C(C.a.k(a,"\n"),"#111")},
bh:function(a){},
b0:function(){return}}
V.fh.prototype={
ew:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.n).v(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.n.v(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.v(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.v(q,p)}o=u.createElement("div")
this.a=o
C.k.v(q,o)
this.b=null
o=W.i
W.W(u,"scroll",H.j(new V.fj(s),{func:1,ret:-1,args:[o]}),!1,o)},
d0:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.l],"$aa")
this.ht()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dV(C.a.iO(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.w)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.v(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.v(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.v(t,o)
break
case"Link":n=p.b
if(H.ln(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.F(m[1])
l.textContent=H.F(m[0])
C.k.v(t,l)}else{k=P.jm(C.C,n,C.x,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.k.v(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.v(t,o)
break}}C.k.v(this.a,t)},
e5:function(a){var u,t,s,r
u=new V.eb("dart")
u.aV("dart")
t=new V.et("glsl")
t.aV("glsl")
s=new V.eu("html")
s.aV("html")
r=C.a.iH(H.b([u,t,s],[V.aY]),new V.fk(a))
if(r!=null)return r
u=new V.f4("plain")
u.aV("plain")
return u},
d_:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a7,"$ia",[P.l],"$aa")
u=H.b([],[P.x])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.iv(r).bp(r,"+")){C.a.R(a7,s,C.i.aT(r,1))
C.a.h(u,1)
t=!0}else if(C.i.bp(r,"-")){C.a.R(a7,s,C.i.aT(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.e5(a5)
q.dK(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.v(o,n)
C.k.v(this.a,o)
m=P.jm(C.C,a4,C.x,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.iH(null)
i.href="#"+m
i.textContent=a4
C.k.v(j,i)
C.v.v(k,j)
C.m.v(l,k)
C.o.v(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.w)(r),++a0)C.v.v(a,r[a0])
C.m.v(e,d)
C.m.v(e,c)
C.m.v(e,a)
C.o.v(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.w)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gL(r);a3.w();)C.v.v(c,a3.gD())
C.m.v(e,d)
C.m.v(e,c)
C.o.v(n,e)}},
ht:function(){var u,t,s,r
if(this.b!=null)return
u=V.fy()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Bold")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").k(0,"Bold")
s=new V.a6()
r=[V.ab]
s.sY(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").k(0,"BoldEnd")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Italic")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").k(0,"Italic")
s=new V.a6()
s.sY(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").k(0,"ItalicEnd")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Code")
s=V.r(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").k(0,"Code")
s=new V.a6()
s.sY(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").k(0,"CodeEnd")
s=V.r(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"LinkHead")
s=V.r(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").k(0,"LinkTail")
s=V.r(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").k(0,"LinkEnd")
t=V.r(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").k(0,"LinkHead")
t=new V.a6()
t.sY(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").k(0,"LinkEnd")
t=V.r(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").k(0,"LinkTail")
t=new V.a6()
t.sY(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aI())
s=u.j(0,"Other").k(0,"Other")
t=new V.a6()
t.sY(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.F("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.F("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.F("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.F("Link")
s=u.j(0,"Other")
s.d=s.a.F("Other")
this.b=u}}
V.fj.prototype={
$1:function(a){P.j9(C.q,new V.fi(this.a))},
$S:10}
V.fi.prototype={
$0:function(){var u,t,s
u=C.j.a8(document.documentElement.scrollTop)
t=this.a.style
s=H.d(-0.01*u)+"px"
t.top=s},
$S:1}
V.fk.prototype={
$1:function(a){return H.k(a,"$iaY").a===this.a},
$S:36}
F.hV.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.l]
u.d_("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.d_("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.X.prototype
u.el=u.i
u=J.cW.prototype
u.en=u.i
u=P.n.prototype
u.em=u.bl
u=W.J.prototype
u.bq=u.a1
u=W.dR.prototype
u.ep=u.ae
u=O.bW.prototype
u.cp=u.ac
u=O.aB.prototype
u.br=u.ac
u=V.d1.prototype
u.eo=u.ap
u.co=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"kX","kG",7)
u(P,"kY","kH",7)
u(P,"kZ","kI",7)
t(P,"jv","kW",2)
s(W,"l7",4,null,["$4"],["kK"],19,0)
s(W,"l8",4,null,["$4"],["kL"],19,0)
var m
r(m=E.a5.prototype,"gdI",0,0,null,["$1","$0"],["dJ","j_"],0,0)
r(m,"gdG",0,0,null,["$1","$0"],["dH","iZ"],0,0)
r(m,"gdE",0,0,null,["$1","$0"],["dF","iW"],0,0)
q(m,"giU","iV",4)
q(m,"giX","iY",4)
r(m=E.dy.prototype,"gcr",0,0,null,["$1","$0"],["ct","cs"],0,0)
p(m,"gjf","dP",2)
o(m=X.dE.prototype,"gfE","fF",9)
o(m,"gfp","fq",9)
o(m,"gfw","fz",3)
o(m,"gfI","fJ",11)
o(m,"gfG","fH",11)
o(m,"gfM","fN",3)
o(m,"gfQ","fR",3)
o(m,"gfC","fD",3)
o(m,"gfO","fP",3)
o(m,"gfA","fB",3)
o(m,"gfS","fT",26)
o(m,"gfU","fV",9)
o(m,"gh4","h5",8)
o(m,"gh0","h1",8)
o(m,"gh2","h3",8)
r(D.b0.prototype,"geA",0,0,null,["$1","$0"],["ai","eB"],0,0)
r(m=D.cY.prototype,"gcO",0,0,null,["$1","$0"],["cP","fK"],0,0)
o(m,"gfX","fY",28)
q(m,"gfj","fk",16)
q(m,"gfZ","h_",16)
n(V.aP.prototype,"gn","c6",12)
n(V.K.prototype,"gn","c6",12)
r(m=M.cM.prototype,"gaa",0,0,null,["$1","$0"],["aj","eD"],0,0)
q(m,"gfs","ft",4)
q(m,"gfu","fv",4)
r(m=O.d2.prototype,"gaW",0,0,null,["$1","$0"],["S","bs"],0,0)
r(m,"ghf",0,0,null,["$1","$0"],["cT","hg"],0,0)
q(m,"gfl","fm",21)
q(m,"gfn","fo",21)
r(O.bW.prototype,"gaW",0,0,null,["$1","$0"],["S","bs"],0,0)
r(X.db.prototype,"gcu",0,0,null,["$1","$0"],["at","eN"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.H,null)
s(P.H,[H.i8,J.X,J.aj,P.dN,P.n,H.bV,P.ax,H.bk,H.dD,H.f6,H.fB,P.b2,H.bL,H.dS,P.bp,H.eF,H.eG,H.eB,P.dT,P.aH,P.ap,P.dG,P.fn,P.c5,P.fo,P.aC,P.a0,P.hG,P.hw,P.bx,P.dM,P.P,P.bM,P.ew,P.hE,P.I,P.b_,P.a8,P.b1,P.f2,P.dp,P.dJ,P.er,P.b3,P.a,P.C,P.a7,P.l,P.aO,W.e9,W.b9,W.aa,W.d9,W.dR,W.hz,W.cO,W.ac,W.hv,W.dX,P.dW,O.S,O.bX,E.e4,E.a5,E.f7,E.dy,Z.dF,Z.h4,Z.cF,Z.b5,Z.aF,D.e7,D.bi,D.z,X.cG,X.cX,X.eD,X.eI,X.aM,X.eU,X.fz,X.dE,D.b0,D.T,D.dc,D.dn,D.dv,D.dw,D.dx,V.U,V.bg,V.ei,V.d3,V.a1,V.ad,V.at,V.de,V.dj,V.aP,V.K,M.cM,A.cC,A.e3,A.eR,A.ca,A.ce,A.cc,A.cf,A.cd,A.cg,A.bh,A.dA,A.fL,F.V,F.em,F.aK,F.eE,F.b7,F.dm,F.fe,F.ff,F.fg,F.ag,F.fT,F.fU,F.fX,F.fZ,F.h_,F.h0,O.bw,O.bW,T.fu,V.aI,V.ab,V.d1,V.f5,V.fd,V.c3,V.dz,V.c8,V.fx,X.cH,X.ds,X.db,V.aY,V.fh])
s(J.X,[J.eA,J.cU,J.cW,J.ay,J.cV,J.bn,H.d7,W.bj,W.bf,W.dH,W.ec,W.cK,W.cL,W.i,W.dK,W.b4,W.d0,W.dP,W.dg,W.aD,W.dU,W.dY,P.cD,P.cP,P.df,P.bu,P.dl,P.dt,P.dB])
s(J.cW,[J.f3,J.ch,J.b6])
t(J.i7,J.ay)
s(J.cV,[J.cT,J.cS])
t(P.eH,P.dN)
s(P.eH,[H.dC,W.hb,W.a4,P.en])
t(H.o,H.dC)
s(P.n,[H.ef,H.eL,H.cj])
s(H.ef,[H.bo,H.cZ])
s(P.ax,[H.eM,H.h5])
t(H.eN,H.bo)
s(P.b2,[H.f1,H.eC,H.fO,H.fD,H.e6,H.fb,P.da,P.ar,P.fP,P.fN,P.c4,P.e8,P.ea])
s(H.bL,[H.hZ,H.fs,H.hQ,H.hR,H.hS,P.h7,P.h6,P.h8,P.h9,P.hD,P.hC,P.hg,P.hk,P.hh,P.hi,P.hj,P.hn,P.ho,P.hm,P.hl,P.fp,P.fq,P.hK,P.ht,P.hs,P.hu,P.eK,P.ed,P.ee,W.eg,W.hf,W.f_,W.eZ,W.hx,W.hy,W.hB,W.hF,P.hM,P.eo,P.ep,E.f8,E.f9,E.fa,E.fw,D.ek,D.el,F.hH,F.h2,F.h1,F.fV,F.fW,T.fv,V.hY,V.fj,V.fi,V.fk,F.hV])
s(H.fs,[H.fm,H.bJ])
t(P.eJ,P.bp)
s(P.eJ,[H.az,W.ha])
t(H.d4,H.d7)
s(H.d4,[H.cn,H.cp])
t(H.co,H.cn)
t(H.d5,H.co)
t(H.cq,H.cp)
t(H.d6,H.cq)
s(H.d6,[H.eV,H.eW,H.eX,H.d8,H.eY])
t(P.hr,P.hG)
t(P.hq,P.hw)
t(P.bN,P.fo)
t(P.eh,P.bM)
s(P.bN,[P.ev,P.fR])
t(P.fQ,P.eh)
s(P.a8,[P.v,P.x])
s(P.ar,[P.bt,P.ex])
s(W.bj,[W.y,W.ck])
s(W.y,[W.J,W.aX,W.bP,W.cl])
s(W.J,[W.t,P.m])
s(W.t,[W.cB,W.e2,W.bI,W.aW,W.be,W.ak,W.eq,W.cQ,W.bS,W.bY,W.fc,W.bv,W.dq,W.dr,W.fr,W.c6])
t(W.bO,W.dH)
t(W.dL,W.dK)
t(W.bl,W.dL)
t(W.cR,W.bP)
t(W.b8,W.i)
s(W.b8,[W.aA,W.Y,W.au])
t(W.dQ,W.dP)
t(W.bZ,W.dQ)
t(W.dV,W.dU)
t(W.fA,W.dV)
t(W.h3,W.bY)
t(W.aG,W.Y)
t(W.dI,W.cL)
t(W.dZ,W.dY)
t(W.dO,W.dZ)
t(W.hc,W.ha)
t(W.hd,P.fn)
t(W.ii,W.hd)
t(W.he,P.c5)
t(W.hA,W.dR)
t(P.c1,P.m)
s(E.e4,[Z.cE,A.c2,T.c7])
s(D.z,[D.bT,D.bU,D.L])
t(D.cY,O.S)
t(U.bq,D.e7)
s(U.bq,[U.cI,U.dk])
t(A.eO,A.c2)
s(A.dA,[A.D,A.fH,A.fI,A.fK,A.fF,A.Q,A.fG,A.B,A.fJ,A.fM,A.cb,A.ae,A.a2,A.a3])
t(F.fl,F.em)
t(F.fE,F.eE)
t(F.fY,F.fZ)
t(F.f0,F.h_)
t(O.d2,O.bw)
s(O.bW,[O.eP,O.eQ,O.aB])
s(O.aB,[O.eS,O.eT])
t(T.du,T.c7)
t(T.ft,T.du)
s(V.d1,[V.a6,V.c9])
t(X.es,X.ds)
s(V.aY,[V.eb,V.et,V.eu,V.f4])
u(H.dC,H.dD)
u(H.cn,P.P)
u(H.co,H.bk)
u(H.cp,P.P)
u(H.cq,H.bk)
u(P.dN,P.P)
u(W.dH,W.e9)
u(W.dK,P.P)
u(W.dL,W.aa)
u(W.dP,P.P)
u(W.dQ,W.aa)
u(W.dU,P.P)
u(W.dV,W.aa)
u(W.dY,P.P)
u(W.dZ,W.aa)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.aW.prototype
C.p=W.be.prototype
C.y=W.bf.prototype
C.k=W.ak.prototype
C.J=W.cK.prototype
C.L=W.cQ.prototype
C.z=W.cR.prototype
C.N=J.X.prototype
C.a=J.ay.prototype
C.O=J.cS.prototype
C.h=J.cT.prototype
C.r=J.cU.prototype
C.j=J.cV.prototype
C.i=J.bn.prototype
C.V=J.b6.prototype
C.Z=W.bZ.prototype
C.D=J.f3.prototype
C.E=W.dg.prototype
C.b=P.bu.prototype
C.v=W.bv.prototype
C.o=W.dq.prototype
C.m=W.dr.prototype
C.w=J.ch.prototype
C.F=W.aG.prototype
C.G=W.ck.prototype
C.H=new P.f2()
C.I=new P.fR()
C.l=new P.hr()
C.c=new A.bh(0,"ColorSourceType.None")
C.f=new A.bh(1,"ColorSourceType.Solid")
C.d=new A.bh(2,"ColorSourceType.Texture2D")
C.e=new A.bh(3,"ColorSourceType.TextureCube")
C.q=new P.b1(0)
C.K=new P.b1(5e6)
C.M=new P.ew("element",!0,!1,!1,!1)
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
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
C.A=function(hooks) { return hooks; }

C.R=function(getTagFallback) {
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
C.S=function() {
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
C.T=function(hooks) {
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
C.U=function(hooks) {
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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.W=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.X=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.l])
C.Y=H.b(u([]),[P.l])
C.C=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.t=H.b(u(["bind","if","ref","repeat","syntax"]),[P.l])
C.u=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.x=new P.fQ(!1)})();(function staticFields(){$.aw=0
$.bK=null
$.iI=null
$.ik=!1
$.jy=null
$.jt=null
$.jD=null
$.hN=null
$.hT=null
$.iw=null
$.by=null
$.cu=null
$.cv=null
$.il=!1
$.N=C.l
$.aJ=null
$.i5=null
$.iP=null
$.iO=null
$.iV=null
$.iZ=null
$.c_=null
$.j3=null
$.jd=null
$.jg=null
$.jf=null
$.fS=null
$.je=null
$.iY=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lu","jG",function(){return H.jx("_$dart_dartClosure")})
u($,"lv","iC",function(){return H.jx("_$dart_js")})
u($,"lA","jH",function(){return H.aE(H.fC({
toString:function(){return"$receiver$"}}))})
u($,"lB","jI",function(){return H.aE(H.fC({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"lC","jJ",function(){return H.aE(H.fC(null))})
u($,"lD","jK",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lG","jN",function(){return H.aE(H.fC(void 0))})
u($,"lH","jO",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lF","jM",function(){return H.aE(H.jb(null))})
u($,"lE","jL",function(){return H.aE(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"lJ","jQ",function(){return H.aE(H.jb(void 0))})
u($,"lI","jP",function(){return H.aE(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"m_","iD",function(){return P.kF()})
u($,"m3","cz",function(){return[]})
u($,"m2","jV",function(){return P.kw("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"m0","jU",function(){return P.iS(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.l)})
u($,"m1","iE",function(){return P.kh(P.l,P.b3)})
u($,"lT","jT",function(){return Z.ao(0)})
u($,"lN","jR",function(){return Z.ao(511)})
u($,"lV","aT",function(){return Z.ao(1)})
u($,"lU","aS",function(){return Z.ao(2)})
u($,"lP","aR",function(){return Z.ao(4)})
u($,"lW","aU",function(){return Z.ao(8)})
u($,"lX","aV",function(){return Z.ao(16)})
u($,"lQ","cx",function(){return Z.ao(32)})
u($,"lR","cy",function(){return Z.ao(64)})
u($,"lS","jS",function(){return Z.ao(96)})
u($,"lY","bG",function(){return Z.ao(128)})
u($,"lO","aQ",function(){return Z.ao(256)})
u($,"lt","jF",function(){return new V.ei(1e-9)})
u($,"ls","G",function(){return $.jF()})})()
var v={mangledGlobalNames:{x:"int",v:"double",a8:"num",l:"String",I:"bool",C:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.z]},{func:1,ret:P.C},{func:1,ret:-1},{func:1,ret:-1,args:[W.Y]},{func:1,ret:-1,args:[P.x,[P.n,E.a5]]},{func:1,ret:P.C,args:[F.V]},{func:1,ret:P.C,args:[D.z]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.au]},{func:1,ret:-1,args:[W.i]},{func:1,ret:P.C,args:[W.i]},{func:1,ret:-1,args:[W.aA]},{func:1,ret:P.v},{func:1,ret:P.C,args:[,,]},{func:1,ret:P.l,args:[P.x]},{func:1,ret:P.I,args:[W.y]},{func:1,ret:-1,args:[P.x,[P.n,D.T]]},{func:1,args:[,]},{func:1,ret:P.I,args:[P.l]},{func:1,ret:P.I,args:[W.J,P.l,P.l,W.b9]},{func:1,ret:P.C,args:[,]},{func:1,ret:-1,args:[P.x,[P.n,V.a1]]},{func:1,ret:P.C,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.I,args:[W.ac]},{func:1,ret:W.J,args:[W.y]},{func:1,ret:-1,args:[W.y,W.y]},{func:1,ret:-1,args:[W.aG]},{func:1,ret:P.l,args:[P.l]},{func:1,ret:P.I,args:[[P.n,D.T]]},{func:1,args:[W.i]},{func:1,ret:[P.ap,,],args:[,]},{func:1,ret:P.C,args:[F.ag,P.v,P.v]},{func:1,ret:P.C,args:[,],opt:[P.a7]},{func:1,ret:P.C,args:[{func:1,ret:-1}]},{func:1,args:[P.l]},{func:1,ret:P.C,args:[P.aC]},{func:1,ret:P.I,args:[V.aY]},{func:1,args:[,P.l]},{func:1,ret:P.C,args:[P.a8]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.X,MediaError:J.X,Navigator:J.X,NavigatorConcurrentHardware:J.X,NavigatorUserMediaError:J.X,OverconstrainedError:J.X,PositionError:J.X,WebGLActiveInfo:J.X,WebGLRenderbuffer:J.X,WebGL2RenderingContext:J.X,SQLError:J.X,ArrayBufferView:H.d7,Float32Array:H.d5,Int16Array:H.eV,Int32Array:H.eW,Uint32Array:H.eX,Uint8ClampedArray:H.d8,CanvasPixelArray:H.d8,Uint8Array:H.eY,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,HTMLAnchorElement:W.cB,HTMLAreaElement:W.e2,HTMLBaseElement:W.bI,HTMLBodyElement:W.aW,HTMLCanvasElement:W.be,CanvasRenderingContext2D:W.bf,CDATASection:W.aX,CharacterData:W.aX,Comment:W.aX,ProcessingInstruction:W.aX,Text:W.aX,CSSStyleDeclaration:W.bO,MSStyleCSSProperties:W.bO,CSS2Properties:W.bO,HTMLDivElement:W.ak,XMLDocument:W.bP,Document:W.bP,DOMException:W.ec,DOMImplementation:W.cK,DOMRectReadOnly:W.cL,Element:W.J,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,EventTarget:W.bj,HTMLFormElement:W.eq,HTMLHeadElement:W.cQ,HTMLCollection:W.bl,HTMLFormControlsCollection:W.bl,HTMLOptionsCollection:W.bl,HTMLDocument:W.cR,ImageData:W.b4,HTMLImageElement:W.bS,KeyboardEvent:W.aA,Location:W.d0,HTMLAudioElement:W.bY,HTMLMediaElement:W.bY,PointerEvent:W.Y,MouseEvent:W.Y,DragEvent:W.Y,DocumentFragment:W.y,ShadowRoot:W.y,DocumentType:W.y,Node:W.y,NodeList:W.bZ,RadioNodeList:W.bZ,Range:W.dg,HTMLSelectElement:W.fc,HTMLTableCellElement:W.bv,HTMLTableDataCellElement:W.bv,HTMLTableHeaderCellElement:W.bv,HTMLTableElement:W.dq,HTMLTableRowElement:W.dr,HTMLTableSectionElement:W.fr,HTMLTemplateElement:W.c6,Touch:W.aD,TouchEvent:W.au,TouchList:W.fA,CompositionEvent:W.b8,FocusEvent:W.b8,TextEvent:W.b8,UIEvent:W.b8,HTMLVideoElement:W.h3,WheelEvent:W.aG,Window:W.ck,DOMWindow:W.ck,Attr:W.cl,ClientRect:W.dI,DOMRect:W.dI,NamedNodeMap:W.dO,MozNamedAttrMap:W.dO,SVGScriptElement:P.c1,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,WebGLBuffer:P.cD,WebGLFramebuffer:P.cP,WebGLProgram:P.df,WebGLRenderingContext:P.bu,WebGLShader:P.dl,WebGLTexture:P.dt,WebGLUniformLocation:P.dB})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.d4.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.jA,[])
else F.jA([])})})()
//# sourceMappingURL=test.dart.js.map
