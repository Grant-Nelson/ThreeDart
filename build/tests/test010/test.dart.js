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
a[c]=function(){a[c]=function(){H.na(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kc"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kc"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kc(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jX:function jX(a){this.a=a},
jV:function(){return new P.cw("No element")},
m0:function(){return new P.cw("Too many elements")},
q:function q(a){this.a=a},
fy:function fy(){},
bP:function bP(){},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
h4:function h4(a,b,c){this.a=a
this.b=b
this.$ti=c},
h5:function h5(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
h6:function h6(a,b,c){this.a=a
this.b=b
this.$ti=c},
cK:function cK(a,b,c){this.a=a
this.b=b
this.$ti=c},
iN:function iN(a,b,c){this.a=a
this.b=b
this.$ti=c},
bK:function bK(){},
e6:function e6(){},
e5:function e5(){},
c3:function(a){var u,t
u=H.H(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
mS:function(a){return v.types[H.ac(a)]},
mZ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Z(a).$iF},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ao(a)
if(typeof u!=="string")throw H.h(H.bZ(a))
return u},
mg:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fT(u)
t=u[0]
s=u[1]
return new H.hD(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cs:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bR:function(a){return H.m7(a)+H.k9(H.bB(a),0,null)},
m7:function(a){var u,t,s,r,q,p,o,n,m
u=J.Z(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.N||!!u.$icJ){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c3(r.length>1&&C.i.aF(r,0)===36?C.i.b6(r,1):r)},
kL:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mf:function(a){var u,t,s,r
u=H.c([],[P.C])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.B)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.h(H.bZ(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.bc(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.h(H.bZ(r))}return H.kL(u)},
kM:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bZ(s))
if(s<0)throw H.h(H.bZ(s))
if(s>65535)return H.mf(a)}return H.kL(a)},
jZ:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bc(u,10))>>>0,56320|u&1023)}throw H.h(P.aw(a,0,1114111,null,null))},
bQ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
me:function(a){var u=H.bQ(a).getFullYear()+0
return u},
mc:function(a){var u=H.bQ(a).getMonth()+1
return u},
m8:function(a){var u=H.bQ(a).getDate()+0
return u},
m9:function(a){var u=H.bQ(a).getHours()+0
return u},
mb:function(a){var u=H.bQ(a).getMinutes()+0
return u},
md:function(a){var u=H.bQ(a).getSeconds()+0
return u},
ma:function(a){var u=H.bQ(a).getMilliseconds()+0
return u},
G:function(a){throw H.h(H.bZ(a))},
k:function(a,b){if(a==null)J.bD(a)
throw H.h(H.d0(a,b))},
d0:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aB(!0,b,"index",null)
u=H.ac(J.bD(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,"index",null,u)
return P.hB(b,"index",null)},
mP:function(a,b,c){if(a>c)return new P.bS(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bS(a,c,!0,b,"end","Invalid value")
return new P.aB(!0,b,"end",null)},
bZ:function(a){return new P.aB(!0,a,null,null)},
mL:function(a){if(typeof a!=="number")throw H.h(H.bZ(a))
return a},
h:function(a){var u
if(a==null)a=new P.dI()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lp})
u.name=""}else u.toString=H.lp
return u},
lp:function(){return J.ao(this.dartException)},
t:function(a){throw H.h(a)},
B:function(a){throw H.h(P.bn(a))},
b0:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ij(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ik:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kX:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kG:function(a,b){return new H.hs(a,b==null?null:b.method)},
jY:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fW(a,t,u?null:b.receiver)},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jL(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.bc(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jY(H.l(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kG(H.l(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.ls()
p=$.lt()
o=$.lu()
n=$.lv()
m=$.ly()
l=$.lz()
k=$.lx()
$.lw()
j=$.lB()
i=$.lA()
h=q.a9(t)
if(h!=null)return u.$1(H.jY(H.H(t),h))
else{h=p.a9(t)
if(h!=null){h.method="call"
return u.$1(H.jY(H.H(t),h))}else{h=o.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=m.a9(t)
if(h==null){h=l.a9(t)
if(h==null){h=k.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=j.a9(t)
if(h==null){h=i.a9(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kG(H.H(t),h))}}return u.$1(new H.iw(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dS()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aB(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dS()
return a},
c1:function(a){var u
if(a==null)return new H.eL(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eL(a)},
mR:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.W(0,a[t],a[s])}return b},
mY:function(a,b,c,d,e,f){H.j(a,"$ibr")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.r("Unsupported number of arguments for wrapped closure"))},
c_:function(a,b){var u
H.ac(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mY)
a.$identity=u
return u},
lT:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Z(d).$ib){u.$reflectionInfo=d
s=H.mg(u).r}else s=d
r=e?Object.create(new H.hX().constructor.prototype):Object.create(new H.c7(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aI
if(typeof p!=="number")return p.E()
$.aI=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kv(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.mS,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kt:H.jP
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.h("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kv(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lQ:function(a,b,c,d){var u=H.jP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kv:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lS(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lQ(t,!r,u,b)
if(t===0){r=$.aI
if(typeof r!=="number")return r.E()
$.aI=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c8
if(q==null){q=H.fh("self")
$.c8=q}return new Function(r+H.l(q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aI
if(typeof r!=="number")return r.E()
$.aI=r+1
o+=r
r="return function("+o+"){return this."
q=$.c8
if(q==null){q=H.fh("self")
$.c8=q}return new Function(r+H.l(q)+"."+H.l(u)+"("+o+");}")()},
lR:function(a,b,c,d){var u,t
u=H.jP
t=H.kt
switch(b?-1:a){case 0:throw H.h(H.mj("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lS:function(a,b){var u,t,s,r,q,p,o,n
u=$.c8
if(u==null){u=H.fh("self")
$.c8=u}t=$.ks
if(t==null){t=H.fh("receiver")
$.ks=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lR(r,!p,s,b)
if(r===1){u="return function(){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+");"
t=$.aI
if(typeof t!=="number")return t.E()
$.aI=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+", "+n+");"
t=$.aI
if(typeof t!=="number")return t.E()
$.aI=t+1
return new Function(u+t+"}")()},
kc:function(a,b,c,d,e,f,g){return H.lT(a,b,H.ac(c),d,!!e,!!f,g)},
jP:function(a){return a.a},
kt:function(a){return a.c},
fh:function(a){var u,t,s,r,q
u=new H.c7("self","target","receiver","name")
t=J.fT(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aG(a,"String"))},
nT:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aG(a,"double"))},
n3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aG(a,"num"))},
ka:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aG(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aG(a,"int"))},
ln:function(a,b){throw H.h(H.aG(a,H.c3(H.H(b).substring(2))))},
n5:function(a,b){throw H.h(H.lP(a,H.c3(H.H(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Z(a)[b])return a
H.ln(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Z(a)[b]
else u=!0
if(u)return a
H.n5(a,b)},
kh:function(a){if(a==null)return a
if(!!J.Z(a).$ib)return a
throw H.h(H.aG(a,"List<dynamic>"))},
n_:function(a,b){var u
if(a==null)return a
u=J.Z(a)
if(!!u.$ib)return a
if(u[b])return a
H.ln(a,b)},
lh:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
f7:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.lh(J.Z(a))
if(u==null)return!1
return H.l8(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.k6)return a
$.k6=!0
try{if(H.f7(a,b))return a
u=H.jJ(b)
t=H.aG(a,u)
throw H.h(t)}finally{$.k6=!1}},
kd:function(a,b){if(a!=null&&!H.kb(a,b))H.t(H.aG(a,H.jJ(b)))
return a},
aG:function(a,b){return new H.il("TypeError: "+P.fC(a)+": type '"+H.lc(a)+"' is not a subtype of type '"+b+"'")},
lP:function(a,b){return new H.fi("CastError: "+P.fC(a)+": type '"+H.lc(a)+"' is not a subtype of type '"+b+"'")},
lc:function(a){var u,t
u=J.Z(a)
if(!!u.$ic9){t=H.lh(u)
if(t!=null)return H.jJ(t)
return"Closure"}return H.bR(a)},
na:function(a){throw H.h(new P.fq(H.H(a)))},
mj:function(a){return new H.hK(a)},
li:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bB:function(a){if(a==null)return
return a.$ti},
nU:function(a,b,c){return H.c2(a["$a"+H.l(c)],H.bB(b))},
d1:function(a,b,c,d){var u
H.H(c)
H.ac(d)
u=H.c2(a["$a"+H.l(c)],H.bB(b))
return u==null?null:u[d]},
an:function(a,b,c){var u
H.H(b)
H.ac(c)
u=H.c2(a["$a"+H.l(b)],H.bB(a))
return u==null?null:u[c]},
y:function(a,b){var u
H.ac(b)
u=H.bB(a)
return u==null?null:u[b]},
jJ:function(a){return H.bA(a,null)},
bA:function(a,b){var u,t
H.n(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c3(a[0].name)+H.k9(a,1,b)
if(typeof a=="function")return H.c3(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.k(b,t)
return H.l(b[t])}if('func' in a)return H.mB(a,b)
if('futureOr' in a)return"FutureOr<"+H.bA("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mB:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.f]
H.n(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.k(b,m)
o=C.i.E(o,b[m])
l=t[p]
if(l!=null&&l!==P.Q)o+=" extends "+H.bA(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bA(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bA(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bA(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.mQ(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.H(u[g])
i=i+h+H.bA(d[c],b)+(" "+H.l(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
k9:function(a,b,c){var u,t,s,r,q,p
H.n(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.bb("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bA(p,c)}return"<"+u.i(0)+">"},
c2:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
d_:function(a,b,c,d){var u,t
H.H(b)
H.kh(c)
H.H(d)
if(a==null)return!1
u=H.bB(a)
t=J.Z(a)
if(t[b]==null)return!1
return H.lf(H.c2(t[d],u),null,c,null)},
n:function(a,b,c,d){H.H(b)
H.kh(c)
H.H(d)
if(a==null)return a
if(H.d_(a,b,c,d))return a
throw H.h(H.aG(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c3(b.substring(2))+H.k9(c,0,null),v.mangledGlobalNames)))},
lf:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aA(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aA(a[t],b,c[t],d))return!1
return!0},
nR:function(a,b,c){return a.apply(b,H.c2(J.Z(b)["$a"+H.l(c)],H.bB(b)))},
lk:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="Q"||a.name==="J"||a===-1||a===-2||H.lk(u)}return!1},
kb:function(a,b){var u,t
if(a==null)return b==null||b.name==="Q"||b.name==="J"||b===-1||b===-2||H.lk(b)
if(b==null||b===-1||b.name==="Q"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kb(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f7(a,b)}u=J.Z(a).constructor
t=H.bB(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aA(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.kb(a,b))throw H.h(H.aG(a,H.jJ(b)))
return a},
aA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="Q"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="Q"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
if('func' in c)return H.l8(a,b,c,d)
if('func' in a)return c.name==="br"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aA("type" in a?a.type:null,b,s,d)
else if(H.aA(a,b,s,d))return!0
else{if(!('$i'+"cg" in t.prototype))return!1
r=t.prototype["$a"+"cg"]
q=H.c2(r,u?a.slice(1):null)
return H.aA(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lf(H.c2(m,u),b,p,d)},
l8:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aA(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aA(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aA(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aA(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.n2(h,b,g,d)},
n2:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aA(c[r],d,a[r],b))return!1}return!0},
nS:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
n0:function(a){var u,t,s,r,q,p
u=H.H($.lj.$1(a))
t=$.jA[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jG[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.H($.le.$2(a,u))
if(u!=null){t=$.jA[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jG[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jI(s)
$.jA[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jG[u]=s
return s}if(q==="-"){p=H.jI(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.lm(a,s)
if(q==="*")throw H.h(P.kY(u))
if(v.leafTags[u]===true){p=H.jI(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.lm(a,s)},
lm:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ki(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jI:function(a){return J.ki(a,!1,null,!!a.$iF)},
n1:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jI(u)
else return J.ki(u,c,null,null)},
mW:function(){if(!0===$.kg)return
$.kg=!0
H.mX()},
mX:function(){var u,t,s,r,q,p,o,n
$.jA=Object.create(null)
$.jG=Object.create(null)
H.mV()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lo.$1(q)
if(p!=null){o=H.n1(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mV:function(){var u,t,s,r,q,p,o
u=C.S()
u=H.bY(C.P,H.bY(C.U,H.bY(C.A,H.bY(C.A,H.bY(C.T,H.bY(C.Q,H.bY(C.R(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lj=new H.jD(q)
$.le=new H.jE(p)
$.lo=new H.jF(o)},
bY:function(a,b){return a(b)||b},
m2:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fL("Illegal RegExp pattern ("+String(r)+")",a,null))},
n8:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kl:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hD:function hD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
ij:function ij(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hs:function hs(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function iw(a){this.a=a},
jL:function jL(a){this.a=a},
eL:function eL(a){this.a=a
this.b=null},
c9:function c9(){},
i5:function i5(){},
hX:function hX(){},
c7:function c7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
il:function il(a){this.a=a},
fi:function fi(a){this.a=a},
hK:function hK(a){this.a=a},
aP:function aP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dw:function dw(a,b){this.a=a
this.$ti=b},
h_:function h_(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
fV:function fV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cX:function(a){return a},
bz:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.d0(b,a))},
mA:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.mP(a,b,c))
return b},
cp:function cp(){},
dE:function dE(){},
co:function co(){},
dF:function dF(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
dG:function dG(){},
hp:function hp(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
mQ:function(a){return J.kA(a?Object.keys(a):[],null)},
n4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ki:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jC:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.kg==null){H.mW()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.h(P.kY("Return interceptor for "+H.l(t(a,u))))}r=a.constructor
q=r==null?null:r[$.km()]
if(q!=null)return q
q=H.n0(a)
if(q!=null)return q
if(typeof a=="function")return C.V
t=Object.getPrototypeOf(a)
if(t==null)return C.D
if(t===Object.prototype)return C.D
if(typeof r=="function"){Object.defineProperty(r,$.km(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
m1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.jO(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.aw(a,0,4294967295,"length",null))
return J.kA(new Array(a),b)},
kA:function(a,b){return J.fT(H.c(a,[b]))},
fT:function(a){H.kh(a)
a.fixed$length=Array
return a},
Z:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dq.prototype
return J.dp.prototype}if(typeof a=="string")return J.bO.prototype
if(a==null)return J.dr.prototype
if(typeof a=="boolean")return J.fU.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.Q)return a
return J.jC(a)},
ke:function(a){if(typeof a=="string")return J.bO.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.Q)return a
return J.jC(a)},
jB:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.Q)return a
return J.jC(a)},
kf:function(a){if(typeof a=="string")return J.bO.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.cJ.prototype
return a},
am:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.Q)return a
return J.jC(a)},
a0:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Z(a).t(a,b)},
lH:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mZ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ke(a).j(a,b)},
f8:function(a,b){return J.am(a).hF(a,b)},
lI:function(a,b,c,d){return J.am(a).iD(a,b,c,d)},
kp:function(a,b){return J.am(a).A(a,b)},
jM:function(a,b){return J.jB(a).C(a,b)},
lJ:function(a,b){return J.jB(a).P(a,b)},
lK:function(a){return J.am(a).giI(a)},
bC:function(a){return J.Z(a).gH(a)},
c5:function(a){return J.jB(a).gS(a)},
bD:function(a){return J.ke(a).gm(a)},
lL:function(a){return J.am(a).gjN(a)},
jN:function(a,b){return J.am(a).aR(a,b)},
kq:function(a){return J.jB(a).jF(a)},
lM:function(a,b,c){return J.kf(a).b7(a,b,c)},
lN:function(a){return J.kf(a).jV(a)},
ao:function(a){return J.Z(a).i(a)},
a:function a(){},
fU:function fU(){},
dr:function dr(){},
dt:function dt(){},
hw:function hw(){},
cJ:function cJ(){},
bu:function bu(){},
aO:function aO(a){this.$ti=a},
jW:function jW(a){this.$ti=a},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ds:function ds(){},
dq:function dq(){},
dp:function dp(){},
bO:function bO(){}},P={
mp:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.mI()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c_(new P.iP(u),1)).observe(t,{childList:true})
return new P.iO(u,t,s)}else if(self.setImmediate!=null)return P.mJ()
return P.mK()},
mq:function(a){self.scheduleImmediate(H.c_(new P.iQ(H.m(a,{func:1,ret:-1})),0))},
mr:function(a){self.setImmediate(H.c_(new P.iR(H.m(a,{func:1,ret:-1})),0))},
ms:function(a){P.k0(C.q,H.m(a,{func:1,ret:-1}))},
k0:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.h.a0(a.a,1000)
return P.my(u<0?0:u,b)},
kW:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[P.aZ]})
u=C.h.a0(a.a,1000)
return P.mz(u<0?0:u,b)},
my:function(a,b){var u=new P.eR(!0)
u.f4(a,b)
return u},
mz:function(a,b){var u=new P.eR(!1)
u.f5(a,b)
return u},
mt:function(a,b){var u,t,s
b.a=1
try{a.ed(new P.j_(b),new P.j0(b),null)}catch(s){u=H.au(s)
t=H.c1(s)
P.n6(new P.j1(b,u,t))}},
l3:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iaz")
if(u>=4){t=b.c3()
b.a=a.a
b.c=a.c
P.cN(b,t)}else{t=H.j(b.c,"$ib3")
b.a=2
b.c=a
a.dc(t)}},
cN:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.j(t.c,"$iad")
t=t.b
p=q.a
o=q.b
t.toString
P.jw(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cN(u.a,b)}t=u.a
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
if(k){H.j(m,"$iad")
t=t.b
p=m.a
o=m.b
t.toString
P.jw(null,null,t,p,o)
return}j=$.Y
if(j!=l)$.Y=l
else j=null
t=b.c
if(t===8)new P.j5(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.j4(s,b,m).$0()}else if((t&2)!==0)new P.j3(u,s,b).$0()
if(j!=null)$.Y=j
t=s.b
if(!!J.Z(t).$icg){if(t.a>=4){i=H.j(o.c,"$ib3")
o.c=null
b=o.bb(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.l3(t,o)
return}}h=b.b
i=H.j(h.c,"$ib3")
h.c=null
b=h.bb(i)
t=s.a
p=s.b
if(!t){H.E(p,H.y(h,0))
h.a=4
h.c=p}else{H.j(p,"$iad")
h.a=8
h.c=p}u.a=h
t=h}},
mE:function(a,b){if(H.f7(a,{func:1,args:[P.Q,P.al]}))return H.m(a,{func:1,ret:null,args:[P.Q,P.al]})
if(H.f7(a,{func:1,args:[P.Q]}))return H.m(a,{func:1,ret:null,args:[P.Q]})
throw H.h(P.jO(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mD:function(){var u,t
for(;u=$.bX,u!=null;){$.cZ=null
t=u.b
$.bX=t
if(t==null)$.cY=null
u.a.$0()}},
mH:function(){$.k7=!0
try{P.mD()}finally{$.cZ=null
$.k7=!1
if($.bX!=null)$.kn().$1(P.lg())}},
lb:function(a){var u=new P.ed(H.m(a,{func:1,ret:-1}))
if($.bX==null){$.cY=u
$.bX=u
if(!$.k7)$.kn().$1(P.lg())}else{$.cY.b=u
$.cY=u}},
mG:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.bX
if(u==null){P.lb(a)
$.cZ=$.cY
return}t=new P.ed(a)
s=$.cZ
if(s==null){t.b=u
$.cZ=t
$.bX=t}else{t.b=s.b
s.b=t
$.cZ=t
if(t.b==null)$.cY=t}},
n6:function(a){var u,t
u={func:1,ret:-1}
H.m(a,u)
t=$.Y
if(C.l===t){P.jy(null,null,C.l,a)
return}t.toString
P.jy(null,null,t,H.m(t.cb(a),u))},
kV:function(a,b){var u,t
u={func:1,ret:-1}
H.m(b,u)
t=$.Y
if(t===C.l){t.toString
return P.k0(a,b)}return P.k0(a,H.m(t.cb(b),u))},
mn:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aZ]}
H.m(b,u)
t=$.Y
if(t===C.l){t.toString
return P.kW(a,b)}s=t.dq(b,P.aZ)
$.Y.toString
return P.kW(a,H.m(s,u))},
jw:function(a,b,c,d,e){var u={}
u.a=d
P.mG(new P.jx(u,e))},
l9:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
la:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.E(e,g)
t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
mF:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
jy:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cb(d):c.iJ(d,-1)
P.lb(d)},
iP:function iP(a){this.a=a},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
eR:function eR(a){this.a=a
this.b=null
this.c=0},
jq:function jq(a,b){this.a=a
this.b=b},
jp:function jp(a,b,c,d){var _=this
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
az:function az(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iZ:function iZ(a,b){this.a=a
this.b=b},
j2:function j2(a,b){this.a=a
this.b=b},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j6:function j6(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a){this.a=a
this.b=null},
i_:function i_(){},
i1:function i1(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
cx:function cx(){},
i0:function i0(){},
aZ:function aZ(){},
ad:function ad(a,b){this.a=a
this.b=b},
jt:function jt(){},
jx:function jx(a,b){this.a=a
this.b=b},
jc:function jc(){},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a,b){this.a=a
this.b=b},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
kB:function(a,b){return new H.aP([a,b])},
m3:function(a){return H.mR(a,new H.aP([null,null]))},
dx:function(a,b,c,d){return new P.ja([d])},
k5:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mx:function(a,b,c){var u=new P.es(a,b,[c])
u.c=a.e
return u},
m_:function(a,b,c){var u,t
if(P.k8(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.f])
t=$.d4()
C.a.h(t,a)
try{P.mC(a,u)}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}t=P.kT(b,H.n_(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jU:function(a,b,c){var u,t,s
if(P.k8(a))return b+"..."+c
u=new P.bb(b)
t=$.d4()
C.a.h(t,a)
try{s=u
s.a=P.kT(s.a,a,", ")}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
k8:function(a){var u,t
for(u=0;t=$.d4(),u<t.length;++u)if(a===t[u])return!0
return!1},
mC:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.n(b,"$ib",[P.f],"$ab")
u=a.gS(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.l(u.gF(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.k(b,-1)
q=b.pop()
if(0>=b.length)return H.k(b,-1)
p=b.pop()}else{o=u.gF(u);++s
if(!u.w()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.k(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gF(u);++s
for(;u.w();o=n,n=m){m=u.gF(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kC:function(a,b){var u,t,s
u=P.dx(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.B)(a),++s)u.h(0,H.E(a[s],b))
return u},
kD:function(a){var u,t
u={}
if(P.k8(a))return"{...}"
t=new P.bb("")
try{C.a.h($.d4(),a)
t.a+="{"
u.a=!0
J.lJ(a,new P.h3(u,t))
t.a+="}"}finally{u=$.d4()
if(0>=u.length)return H.k(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
ja:function ja(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bW:function bW(a){this.a=a
this.c=this.b=null},
es:function es(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h0:function h0(){},
v:function v(){},
h2:function h2(){},
h3:function h3(a,b){this.a=a
this.b=b},
a7:function a7(){},
jh:function jh(){},
et:function et(){},
ca:function ca(){},
cb:function cb(){},
fA:function fA(){},
fR:function fR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fQ:function fQ(a){this.a=a},
iz:function iz(a){this.a=a},
iA:function iA(){},
jr:function jr(a){this.b=this.a=0
this.c=a},
lY:function(a){if(a instanceof H.c9)return a.i(0)
return"Instance of '"+H.bR(a)+"'"},
m4:function(a,b,c,d){var u,t
H.E(b,d)
u=J.m1(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.W(u,t,b)
return H.n(u,"$ib",[d],"$ab")},
m5:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=a.gS(a);s.w();)C.a.h(t,H.E(s.gF(s),c))
if(b)return t
return H.n(J.fT(t),"$ib",u,"$ab")},
k_:function(a,b,c){var u,t
u=P.C
H.n(a,"$ie",[u],"$ae")
if(a.constructor===Array){H.n(a,"$iaO",[u],"$aaO")
t=a.length
c=P.kN(b,c,t,null,null,null)
return H.kM(b>0||c<t?C.a.eD(a,b,c):a)}return P.ml(a,b,c)},
ml:function(a,b,c){var u,t,s
H.n(a,"$ie",[P.C],"$ae")
u=J.c5(a)
for(t=0;t<b;++t)if(!u.w())throw H.h(P.aw(b,0,t,null,null))
s=[]
for(;u.w();)s.push(u.gF(u))
return H.kM(s)},
mh:function(a,b,c){return new H.fV(a,H.m2(a,!1,!0,!1))},
kT:function(a,b,c){var u=J.c5(b)
if(!u.w())return a
if(c.length===0){do a+=H.l(u.gF(u))
while(u.w())}else{a+=H.l(u.gF(u))
for(;u.w();)a=a+c+H.l(u.gF(u))}return a},
l7:function(a,b,c,d){var u,t,s,r,q,p
H.n(a,"$ib",[P.C],"$ab")
if(c===C.x){u=$.lG().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.iS(H.E(b,H.an(c,"ca",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.k(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jZ(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lU:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lV:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
de:function(a){if(a>=10)return""+a
return"0"+a},
kx:function(a,b,c,d,e,f){return new P.bp(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fC:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ao(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lY(a)},
lO:function(a){return new P.aB(!1,null,null,a)},
jO:function(a,b,c){return new P.aB(!0,a,b,c)},
hB:function(a,b,c){return new P.bS(null,null,!0,a,b,"Value not in range")},
aw:function(a,b,c,d,e){return new P.bS(b,c,!0,a,d,"Invalid value")},
kN:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.aw(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.aw(b,a,c,"end",f))
return b}return c},
W:function(a,b,c,d,e){var u=H.ac(e==null?J.bD(b):e)
return new P.fS(b,u,!0,a,c,"Index out of range")},
ax:function(a){return new P.ix(a)},
kY:function(a){return new P.iv(a)},
kS:function(a){return new P.cw(a)},
bn:function(a){return new P.fl(a)},
r:function(a){return new P.el(a)},
kk:function(a){H.n4(a)},
M:function M(){},
ai:function ai(a,b){this.a=a
this.b=b},
A:function A(){},
bp:function bp(a){this.a=a},
fw:function fw(){},
fx:function fx(){},
bq:function bq(){},
dI:function dI(){},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bS:function bS(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fS:function fS(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ix:function ix(a){this.a=a},
iv:function iv(a){this.a=a},
cw:function cw(a){this.a=a},
fl:function fl(a){this.a=a},
hv:function hv(){},
dS:function dS(){},
fq:function fq(a){this.a=a},
el:function el(a){this.a=a},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(){},
C:function C(){},
e:function e(){},
aN:function aN(){},
b:function b(){},
N:function N(){},
J:function J(){},
a2:function a2(){},
Q:function Q(){},
al:function al(){},
f:function f(){},
bb:function bb(a){this.a=a},
mO:function(a){var u,t
u=J.Z(a)
if(!!u.$ibs){t=u.gdw(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.eW(a.data,a.height,a.width)},
mN:function(a){if(a instanceof P.eW)return{data:a.a,height:a.b,width:a.c}
return a},
bd:function(a){var u,t,s,r,q
if(a==null)return
u=P.kB(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=H.H(t[r])
u.W(0,q,a[q])}return u},
mM:function(a,b){var u={}
a.P(0,new P.jz(u))
return u},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a){this.a=a},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(){},
fJ:function fJ(){},
j9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mw:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jb:function jb(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b6:function b6(){},
fY:function fY(){},
ba:function ba(){},
ht:function ht(){},
hA:function hA(){},
ct:function ct(){},
i3:function i3(){},
p:function p(){},
bc:function bc(){},
ii:function ii(){},
eq:function eq(){},
er:function er(){},
eB:function eB(){},
eC:function eC(){},
eN:function eN(){},
eO:function eO(){},
eU:function eU(){},
eV:function eV(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(a){this.a=a},
ff:function ff(){},
bE:function bE(){},
hu:function hu(){},
ee:function ee(){},
d8:function d8(){},
dl:function dl(){},
dM:function dM(){},
bT:function bT(){},
dP:function dP(){},
dW:function dW(){},
e4:function e4(){},
hW:function hW(){},
eJ:function eJ(){},
eK:function eK(){}},W={
kr:function(a){var u=document.createElement("a")
return u},
jQ:function(a,b){var u=document.createElement("canvas")
return u},
lW:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).a8(u,a,b,c)
t.toString
u=W.D
u=new H.cK(new W.ah(t),H.m(new W.fz(),{func:1,ret:P.M,args:[u]}),[u])
return H.j(u.gaC(u),"$iS")},
lX:function(a){H.j(a,"$id")
return"wheel"},
cf:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lL(a)
if(typeof t==="string")u=a.tagName}catch(s){H.au(s)}return u},
j8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l5:function(a,b,c,d){var u,t
u=W.j8(W.j8(W.j8(W.j8(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a6:function(a,b,c,d,e){var u=W.ld(new W.iY(c),W.o)
if(u!=null&&!0)J.lI(a,b,u,!1)
return new W.iX(a,b,u,!1,[e])},
l4:function(a){var u,t
u=W.kr(null)
t=window.location
u=new W.by(new W.jg(u,t))
u.eS(a)
return u},
mu:function(a,b,c,d){H.j(a,"$iS")
H.H(b)
H.H(c)
H.j(d,"$iby")
return!0},
mv:function(a,b,c,d){var u,t,s
H.j(a,"$iS")
H.H(b)
H.H(c)
u=H.j(d,"$iby").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
l6:function(){var u,t,s,r,q
u=P.f
t=P.kC(C.t,u)
s=H.y(C.t,0)
r=H.m(new W.jo(),{func:1,ret:u,args:[s]})
q=H.c(["TEMPLATE"],[u])
t=new W.jn(t,P.dx(null,null,null,u),P.dx(null,null,null,u),P.dx(null,null,null,u),null)
t.f3(null,new H.h6(C.t,r,[s,u]),q,null)
return t},
ld:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.Y
if(u===C.l)return a
return u.dq(a,b)},
w:function w(){},
f9:function f9(){},
d5:function d5(){},
fa:function fa(){},
c6:function c6(){},
d7:function d7(){},
bk:function bk(){},
bF:function bF(){},
bG:function bG(){},
bl:function bl(){},
cc:function cc(){},
fm:function fm(){},
R:function R(){},
cd:function cd(){},
fn:function fn(){},
aJ:function aJ(){},
aK:function aK(){},
fo:function fo(){},
fp:function fp(){},
fs:function fs(){},
av:function av(){},
ce:function ce(){},
ft:function ft(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
fu:function fu(){},
fv:function fv(){},
iT:function iT(a,b){this.a=a
this.b=b},
S:function S(){},
fz:function fz(){},
o:function o(){},
d:function d(){},
aL:function aL(){},
fF:function fF(){},
fG:function fG(){},
fK:function fK(){},
aM:function aM(){},
dm:function dm(){},
fP:function fP(){},
bL:function bL(){},
dn:function dn(){},
bs:function bs(){},
ci:function ci(){},
aQ:function aQ(){},
dy:function dy(){},
cm:function cm(){},
hd:function hd(){},
he:function he(){},
hf:function hf(a){this.a=a},
hg:function hg(){},
hh:function hh(a){this.a=a},
aT:function aT(){},
hi:function hi(){},
a8:function a8(){},
ah:function ah(a){this.a=a},
D:function D(){},
cq:function cq(){},
aU:function aU(){},
hy:function hy(){},
dN:function dN(){},
hI:function hI(){},
hJ:function hJ(a){this.a=a},
hL:function hL(){},
aV:function aV(){},
hU:function hU(){},
aW:function aW(){},
hV:function hV(){},
aX:function aX(){},
hY:function hY(){},
hZ:function hZ(a){this.a=a},
aD:function aD(){},
bU:function bU(){},
dT:function dT(){},
dU:function dU(){},
i4:function i4(){},
cy:function cy(){},
aY:function aY(){},
aE:function aE(){},
i6:function i6(){},
i7:function i7(){},
ib:function ib(){},
b_:function b_(){},
aF:function aF(){},
ig:function ig(){},
ih:function ih(){},
bx:function bx(){},
iy:function iy(){},
iK:function iK(){},
iL:function iL(){},
b2:function b2(){},
cL:function cL(){},
cM:function cM(){},
iU:function iU(){},
eg:function eg(){},
j7:function j7(){},
ey:function ey(){},
jk:function jk(){},
jl:function jl(){},
iS:function iS(){},
iV:function iV(a){this.a=a},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k4:function k4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iX:function iX(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iY:function iY(a){this.a=a},
by:function by(a){this.a=a},
z:function z(){},
dH:function dH(a){this.a=a},
hr:function hr(a){this.a=a},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(){},
ji:function ji(){},
jj:function jj(){},
jn:function jn(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jo:function jo(){},
jm:function jm(){},
dk:function dk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
as:function as(){},
jg:function jg(a,b){this.a=a
this.b=b},
eX:function eX(a){this.a=a},
js:function js(a){this.a=a},
ef:function ef(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ez:function ez(){},
eA:function eA(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
cS:function cS(){},
cT:function cT(){},
eH:function eH(){},
eI:function eI(){},
eM:function eM(){},
eP:function eP(){},
eQ:function eQ(){},
cU:function cU(){},
cV:function cV(){},
eS:function eS(){},
eT:function eT(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){}},O={
jR:function(a){var u=new O.a1([a])
u.bH(a)
return u},
a1:function a1(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cl:function cl(){this.b=this.a=null},
dB:function dB(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h8:function h8(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ck:function ck(){},
h9:function h9(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aR:function aR(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hb:function hb(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hc:function hc(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bV:function bV(){}},E={
mi:function(a,b){var u=new E.hE(a,b)
u.eM(a,b)
return u},
mm:function(a,b,c,d,e){var u,t,s,r
u=J.Z(a)
if(!!u.$ibF)return E.kU(a,!0,!0,!0,!1)
t=W.jQ(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdt(a).h(0,t)
r=E.kU(t,!0,!0,!0,!1)
r.a=a
return r},
kU:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.e0()
t=H.j(C.p.cF(a,"webgl2",P.m3(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibT")
if(t==null)H.t(P.r("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.mi(t,a)
s=new T.i8(t)
s.b=H.ac((t&&C.b).cG(t,3379))
s.c=H.ac(C.b.cG(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.e7(a)
r=new X.fX()
r.c=new X.ar(!1,!1,!1)
r.shC(P.dx(null,null,null,P.C))
s.b=r
r=new X.hj(s)
r.f=0
r.r=V.bw()
r.x=V.bw()
r.Q=1
r.ch=1
s.c=r
r=new X.h1(s)
r.r=0
r.x=V.bw()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.ie(s)
r.e=0
r.f=V.bw()
r.r=V.bw()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sfn(H.c([],[[P.cx,P.Q]]))
r=s.z
q=document
p=W.a8
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a6(q,"contextmenu",H.m(s.gh0(),o),!1,p))
r=s.z
n=W.o
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a6(a,"focus",H.m(s.gh6(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a6(a,"blur",H.m(s.gfV(),m),!1,n))
r=s.z
l=W.aQ
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a6(q,"keyup",H.m(s.gha(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a6(q,"keydown",H.m(s.gh8(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a6(a,"mousedown",H.m(s.ghe(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a6(a,"mouseup",H.m(s.ghi(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a6(a,"mousemove",H.m(s.ghg(),o),!1,p))
l=s.z
k=W.b2;(l&&C.a).h(l,W.a6(a,H.H(W.lX(a)),H.m(s.ghk(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a6(q,"mousemove",H.m(s.gh2(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a6(q,"mouseup",H.m(s.gh4(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a6(q,"pointerlockchange",H.m(s.ghm(),m),!1,n))
n=s.z
m=W.aF
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a6(a,"touchstart",H.m(s.ghz(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a6(a,"touchend",H.m(s.ghv(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a6(a,"touchmove",H.m(s.ghx(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.ai(Date.now(),!1)
u.cy=0
u.de()
return u},
fg:function fg(){},
aj:function aj(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hE:function hE(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
e0:function e0(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ia:function ia(a){this.a=a}},Z={
k3:function(a,b,c){var u
H.n(c,"$ib",[P.C],"$ab")
u=a.createBuffer()
C.b.am(a,b,u)
C.b.ds(a,b,new Int16Array(H.cX(c)),35044)
C.b.am(a,b,null)
return new Z.ec(b,u)},
ay:function(a){return new Z.b1(a)},
ec:function ec(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iM:function iM(a){this.a=a},
da:function da(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a){this.a=a}},D={
P:function(){var u=new D.bJ()
u.sac(null)
u.saV(null)
u.c=null
u.d=0
return u},
fj:function fj(){},
bJ:function bJ(){var _=this
_.d=_.c=_.b=_.a=null},
fD:function fD(a){this.a=a},
fE:function fE(a){this.a=a},
x:function x(a){this.a=a
this.b=null},
bM:function bM(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bN:function bN(a,b,c,d){var _=this
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
bo:function bo(){var _=this
_.d=_.c=_.b=_.a=null},
a3:function a3(){},
dv:function dv(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dK:function dK(){},
dR:function dR(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){}},X={db:function db(a,b){this.a=a
this.b=b},du:function du(a,b){this.a=a
this.b=b},fX:function fX(){var _=this
_.d=_.c=_.b=_.a=null},dz:function dz(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},h1:function h1(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},b8:function b8(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hj:function hj(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cn:function cn(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hz:function hz(){},e2:function e2(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},ie:function ie(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e7:function e7(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lZ:function(a,b,c,d,e,f,g){var u,t
u=new X.fM()
t=new V.bH(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kP
if(t==null){t=V.kO(0,0,1,1)
$.kP=t}u.r=t
return u},
dc:function dc(){},
fM:function fM(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dJ:function dJ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dV:function dV(){}},V={
nb:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.ev(a-b,u)
return(a<0?a+u:a)+b},
U:function(a,b,c){if(a==null)return C.i.aa("null",c)
return C.i.aa(C.j.ee(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
c0:function(a,b,c){var u,t,s,r,q,p
H.n(a,"$ib",[P.A],"$ab")
u=H.c([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.B)(a),++r){q=V.U(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.k(u,p)
C.a.W(u,p,C.i.aa(u[p],s))}return u},
kj:function(a,b){return C.j.jS(Math.pow(b,C.O.cr(Math.log(H.mL(a))/Math.log(b))))},
dD:function(){var u=$.kF
if(u==null){u=V.aS(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kF=u}return u},
aS:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kE:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.B(0,Math.sqrt(c.G(c)))
t=b.aZ(u)
s=t.B(0,Math.sqrt(t.G(t)))
r=u.aZ(s)
q=new V.V(a.a,a.b,a.c)
p=s.R(0).G(q)
o=r.R(0).G(q)
n=u.R(0).G(q)
return V.aS(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bw:function(){var u=$.kJ
if(u==null){u=new V.ab(0,0)
$.kJ=u}return u},
kK:function(){var u=$.cr
if(u==null){u=new V.aC(0,0,0)
$.cr=u}return u},
kO:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dO(a,b,c,d)},
eb:function(){var u=$.l1
if(u==null){u=new V.V(0,0,0)
$.l1=u}return u},
l2:function(){var u=$.l0
if(u==null){u=new V.V(0,1,0)
$.l0=u}return u},
mo:function(){var u=$.iB
if(u==null){u=new V.V(0,0,1)
$.iB=u}return u},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fB:function fB(a){this.a=a},
dC:function dC(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ae:function ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dO:function dO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b){this.a=a
this.b=b},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
X:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.h(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.i.aF(a,0)
t=C.i.aF(b,0)
s=new V.hC()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.hM()
u.eN(a)
return u},
id:function(){var u,t
u=new V.ic()
t=P.f
u.shY(new H.aP([t,V.cv]))
u.si1(new H.aP([t,V.cA]))
u.c=null
return u},
b4:function b4(){},
aq:function aq(){},
dA:function dA(){},
ak:function ak(){this.a=null},
hC:function hC(){this.b=this.a=null},
hM:function hM(){this.a=null},
cv:function cv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e1:function e1(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a,b){this.a=a
this.b=b
this.c=null},
ic:function ic(){this.c=this.b=this.a=null},
cB:function cB(a){this.b=a
this.a=this.c=null},
n7:function(a){P.mn(C.K,new V.jK(a))},
mk:function(a,b){var u=new V.hQ()
u.eP(a,!0)
return u},
bm:function bm(){},
jK:function jK(a){this.a=a},
fr:function fr(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fN:function fN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fO:function fO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hx:function hx(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hQ:function hQ(){this.b=this.a=null},
hS:function hS(a){this.a=a},
hR:function hR(a){this.a=a},
hT:function hT(a){this.a=a}},U={
jS:function(){var u=new U.fk()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
kw:function(a){var u=new U.dd()
u.a=a
return u},
fk:function fk(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dd:function dd(){this.b=this.a=null},
ch:function ch(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
e8:function e8(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e9:function e9(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ea:function ea(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={di:function di(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
m6:function(a,b){var u,t
u=a.ae
t=new A.h7(b,u)
t.eO(b,u)
t.eL(a,b)
return t},
k1:function(a,b,c,d,e){var u=new A.im(a,b,c,e)
u.f=d
u.sic(P.m4(d,0,!1,P.C))
return u},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
fb:function fb(a){this.a=a},
h7:function h7(a,b){var _=this
_.bg=_.dC=_.bf=_.ae=_.ao=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dS=_.cl=_.dR=_.bt=_.dQ=_.dP=_.bs=_.br=_.dO=_.dN=_.bq=_.bp=_.bo=_.dM=_.dL=_.bn=_.dK=_.dJ=_.bm=_.dI=_.dH=_.bl=_.bk=_.dG=_.dF=_.bj=_.bi=_.dE=_.dD=_.bh=null
_.cq=_.dW=_.cp=_.dV=_.co=_.dU=_.cn=_.dT=_.cm=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ha:function ha(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ao=b3
_.ae=b4
_.bf=b5},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cE:function cE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cH:function cH(a,b,c,d,e,f,g,h,i,j){var _=this
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
cI:function cI(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cu:function cu(){},
bI:function bI(a,b){this.a=a
this.b=b},
e3:function e3(){},
it:function it(a){this.a=a},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iq:function iq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
io:function io(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ir:function ir(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iu:function iu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cD:function cD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
jv:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cW:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.V(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.V(o+a3,n+a1,m+a2)
u.b=l
k=new V.V(o-a3,n-a1,m-a2)
u.c=k
j=new V.V(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.jv(t)
f=F.jv(u.b)
e=F.n9(d,a0,new F.ju(u,F.jv(u.c),F.jv(u.d),f,g,c),b)
if(e!=null)a.jn(e)},
n9:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,{func:1,ret:-1,args:[F.aH,P.A,P.A]})
if(a<1)return
if(b<1)return
u=F.kR()
t=H.c([],[F.aH])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.k2(null,null,new V.bH(p,0,0,1),null,null,new V.ab(r,1),null,null,0)
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
o=F.k2(null,null,new V.bH(j,i,h,1),null,null,new V.ab(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cg(d))}}u.d.iE(a+1,b+1,t)
return u},
dj:function(a,b,c){var u,t
u=new F.a5()
t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a4()
return u},
kR:function(){var u,t
u=new F.dQ()
t=new F.iC(u)
t.b=!1
t.sie(H.c([],[F.aH]))
u.a=t
t=new F.hP(u)
t.sc1(H.c([],[F.bv]))
u.b=t
t=new F.hO(u)
t.sfC(H.c([],[F.b7]))
u.c=t
t=new F.hN(u)
t.sfo(H.c([],[F.a5]))
u.d=t
u.e=null
return u},
k2:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aH()
t=new F.iH(u)
t.sc1(H.c([],[F.bv]))
u.b=t
t=new F.iG(u)
s=[F.b7]
t.sfD(H.c([],s))
t.sfE(H.c([],s))
u.c=t
t=new F.iD(u)
s=[F.a5]
t.sfp(H.c([],s))
t.sfq(H.c([],s))
t.sfs(H.c([],s))
u.d=t
h=$.lC()
u.e=0
t=$.bh()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bg().a)!==0?e:null
u.x=(s&$.bf().a)!==0?b:null
u.y=(s&$.bi().a)!==0?f:null
u.z=(s&$.bj().a)!==0?g:null
u.Q=(s&$.lD().a)!==0?c:null
u.ch=(s&$.c4().a)!==0?i:0
u.cx=(s&$.be().a)!==0?a:null
return u},
ju:function ju(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a5:function a5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b7:function b7(){this.b=this.a=null},
bv:function bv(){this.a=null},
dQ:function dQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hN:function hN(a){this.a=a
this.b=null},
hO:function hO(a){this.a=a
this.b=null},
hP:function hP(a){this.a=a
this.b=null},
aH:function aH(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iJ:function iJ(a){this.a=a},
iI:function iI(a){this.a=a},
iC:function iC(a){this.a=a
this.c=this.b=null},
iD:function iD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a){this.a=a
this.c=this.b=null},
iH:function iH(a){this.a=a
this.b=null}},T={cz:function cz(){},dX:function dX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},i8:function i8(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},i9:function i9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
ll:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
u=V.mk("Test 010",!0)
t=W.jQ(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.A(u.a,t)
s=[P.f]
u.dl(H.c(["A test of the Material Lighting shader with solid color and ","a directional light= with a cube texture bump map."],s))
u.dl(H.c(["\xab[Back to Tests|../]"],s))
r=C.z.ep(document,"testCanvas")
if(r==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
q=E.mm(r,!0,!0,!0,!1)
p=new E.aj()
p.a=""
p.b=!0
s=E.aj
p.sff(0,O.jR(s))
p.y.b5(p.gjo(),p.gjr())
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
p.scJ(0,null)
p.sb_(null)
o=F.kR()
F.cW(o,null,null,1,1,1,0,0,1)
F.cW(o,null,null,1,1,0,1,0,3)
F.cW(o,null,null,1,1,0,0,1,2)
F.cW(o,null,null,1,1,-1,0,0,0)
F.cW(o,null,null,1,1,0,-1,0,0)
F.cW(o,null,null,1,1,0,0,-1,3)
o.aM()
p.scJ(0,o)
n=new U.ch()
m=U.a9
n.bH(m)
n.b5(n.gfN(),n.ghr())
n.e=null
n.f=V.dD()
n.r=0
l=q.r
k=new U.e9()
j=U.jS()
j.scE(0,!0)
j.scv(6.283185307179586)
j.scz(0)
j.sa5(0,0)
j.scw(100)
j.sT(0)
j.sci(0.5)
k.b=j
i=k.gaI()
j.gq().h(0,i)
j=U.jS()
j.scE(0,!0)
j.scv(6.283185307179586)
j.scz(0)
j.sa5(0,0)
j.scw(100)
j.sT(0)
j.sci(0.5)
k.c=j
j.gq().h(0,i)
k.d=null
k.e=!1
k.f=!1
k.r=!1
k.x=2.5
k.y=2.5
k.z=2
k.Q=4
k.cx=!1
k.ch=!1
k.cy=0
k.db=0
k.dx=null
k.dy=0
k.fr=null
k.fx=null
h=new X.ar(!1,!1,!1)
g=k.d
k.d=h
j=[X.ar]
i=new D.L("modifiers",g,h,k,j)
i.b=!0
k.N(i)
i=k.f
if(i!==!1){k.f=!1
i=new D.L("invertX",i,!1,k,[P.M])
i.b=!0
k.N(i)}i=k.r
if(i!==!0){k.r=!0
i=new D.L("invertY",i,!0,k,[P.M])
i.b=!0
k.N(i)}k.aY(l)
n.h(0,k)
l=q.r
k=new U.e8()
i=U.jS()
i.scE(0,!0)
i.scv(6.283185307179586)
i.scz(0)
i.sa5(0,0)
i.scw(100)
i.sT(0)
i.sci(0.2)
k.b=i
i.gq().h(0,k.gaI())
k.c=null
k.d=!1
k.e=2.5
k.f=2
k.r=4
k.y=!1
k.x=!1
k.z=0
k.Q=null
k.ch=0
k.cx=null
k.cy=null
h=new X.ar(!0,!1,!1)
g=k.c
k.c=h
i=new D.L("modifiers",g,h,k,j)
i.b=!0
k.N(i)
k.aY(l)
n.h(0,k)
l=q.r
k=new U.ea()
k.c=0.01
k.d=0
k.e=0
h=new X.ar(!1,!1,!1)
k.b=h
j=new D.L("modifiers",null,h,k,j)
j.b=!0
k.N(j)
k.aY(l)
n.h(0,k)
p.sb_(n)
f=new O.dB()
f.sfc(O.jR(V.ae))
f.e.b5(f.gfR(),f.gfT())
n=new O.aR(f,"emission")
n.c=C.c
n.f=new V.a4(0,0,0)
f.f=n
n=new O.aR(f,"ambient")
n.c=C.c
n.f=new V.a4(0,0,0)
f.r=n
n=new O.aR(f,"diffuse")
n.c=C.c
n.f=new V.a4(0,0,0)
f.x=n
n=new O.aR(f,"invDiffuse")
n.c=C.c
n.f=new V.a4(0,0,0)
f.y=n
n=new O.hc(f,"specular")
n.c=C.c
n.f=new V.a4(0,0,0)
n.ch=100
f.z=n
n=new O.h9(f,"bump")
n.c=C.c
f.Q=n
f.ch=null
n=new O.aR(f,"reflect")
n.c=C.c
n.f=new V.a4(0,0,0)
f.cx=n
n=new O.hb(f,"refract")
n.c=C.c
n.f=new V.a4(0,0,0)
n.ch=1
f.cy=n
n=new O.h8(f,"alpha")
n.c=C.c
n.f=1
f.db=n
n=new D.dv()
n.bH(D.a3)
n.sfl(H.c([],[D.bo]))
n.shB(H.c([],[D.dK]))
n.shX(H.c([],[D.dR]))
n.si9(H.c([],[D.dY]))
n.sia(H.c([],[D.dZ]))
n.sib(H.c([],[D.e_]))
n.Q=null
n.ch=null
n.cI(n.gfP(),n.ghp(),n.ght())
f.dx=n
l=n.Q
if(l==null){l=D.P()
n.Q=l
n=l}else n=l
n.h(0,f.ghJ())
n=f.dx
l=n.ch
if(l==null){l=D.P()
n.ch=l
n=l}else n=l
n.h(0,f.gb9())
f.dy=null
n=f.dx
e=V.l2()
l=U.kw(V.kE(V.kK(),e,new V.V(1,1,-3)))
d=new V.a4(1,1,1)
k=new D.bo()
k.c=new V.a4(1,1,1)
k.a=V.mo()
g=k.b
k.b=l
l.gq().h(0,k.geU())
m=new D.L("mover",g,k.b,k,[m])
m.b=!0
k.ar(m)
if(!k.c.t(0,d)){g=k.c
k.c=d
m=new D.L("color",g,d,k,[V.a4])
m.b=!0
k.ar(m)}n.h(0,k)
n=f.r
n.san(0,new V.a4(0,0,1))
n=f.x
n.san(0,new V.a4(0,1,0))
n=f.z
n.san(0,new V.a4(1,0,0))
n=f.z
if(n.c===C.c){n.c=C.f
n.bG()
n.c4(100)
m=n.a
m.a=null
m.Z(null)}n.c4(10)
n=f.Q
m=q.f
l=m.a
c=l.createTexture()
C.b.aL(l,34067,c)
C.b.bz(l,34067,10242,10497)
C.b.bz(l,34067,10243,10497)
C.b.bz(l,34067,10241,9729)
C.b.bz(l,34067,10240,9729)
C.b.aL(l,34067,null)
b=new T.dX()
b.a=0
b.b=c
b.c=!1
b.d=0
m.aH(b,c,"../resources/diceBumpMap/posx.png",34069,!1,!1)
m.aH(b,c,"../resources/diceBumpMap/negx.png",34070,!1,!1)
m.aH(b,c,"../resources/diceBumpMap/posy.png",34071,!1,!1)
m.aH(b,c,"../resources/diceBumpMap/negy.png",34072,!1,!1)
m.aH(b,c,"../resources/diceBumpMap/posz.png",34073,!1,!1)
m.aH(b,c,"../resources/diceBumpMap/negz.png",34074,!1,!1)
m=n.c
if(m!==C.d){if(m===C.c)n.av()
n.c=C.d
n.hQ(null)
m=n.a
m.a=null
m.Z(null)}n.hR(b)
n=new M.di()
n.seW(0,O.jR(s))
n.d.b5(n.gfX(),n.gfZ())
n.e=null
n.f=null
n.r=null
n.x=null
a=X.lZ(!0,!0,!1,null,2000,null,0)
a0=new X.dJ()
a0.c=1.0471975511965976
a0.d=0.1
a0.e=2000
a0.sb_(null)
s=a0.c
if(!(Math.abs(s-1.0471975511965976)<$.O().a)){a0.c=1.0471975511965976
s=new D.L("fov",s,1.0471975511965976,a0,[P.A])
s.b=!0
a0.aE(s)}s=a0.d
if(!(Math.abs(s-0.1)<$.O().a)){a0.d=0.1
s=new D.L("near",s,0.1,a0,[P.A])
s.b=!0
a0.aE(s)}s=a0.e
if(!(Math.abs(s-2000)<$.O().a)){a0.e=2000
s=new D.L("far",s,2000,a0,[P.A])
s.b=!0
a0.aE(s)}s=n.a
if(s!==a0){if(s!=null)s.gq().X(0,n.gai())
g=n.a
n.a=a0
a0.gq().h(0,n.gai())
s=new D.L("camera",g,n.a,n,[X.dc])
s.b=!0
n.as(s)}s=n.b
if(s!==a){if(s!=null)s.gq().X(0,n.gai())
g=n.b
n.b=a
a.gq().h(0,n.gai())
s=new D.L("target",g,n.b,n,[X.dV])
s.b=!0
n.as(s)}n.sec(null)
n.sec(f)
n.d.h(0,p)
n.a.sb_(U.kw(V.aS(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
s=q.d
if(s!==n){if(s!=null)s.gq().X(0,q.gcM())
q.d=n
n.gq().h(0,q.gcM())
q.cN()}s=q.z
if(s==null){s=D.P()
q.z=s}n={func:1,ret:-1,args:[D.x]}
m=H.m(new B.jH(u,f),n)
if(s.b==null)s.saV(H.c([],[n]))
s=s.b;(s&&C.a).h(s,m)
V.n7(q)},
jH:function jH(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jX.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gH:function(a){return H.cs(a)},
i:function(a){return"Instance of '"+H.bR(a)+"'"}}
J.fU.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iM:1}
J.dr.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0},
$iJ:1}
J.dt.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.hw.prototype={}
J.cJ.prototype={}
J.bu.prototype={
i:function(a){var u=a[$.lr()]
if(u==null)return this.eG(a)
return"JavaScript function for "+H.l(J.ao(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibr:1}
J.aO.prototype={
h:function(a,b){H.E(b,H.y(a,0))
if(!!a.fixed$length)H.t(P.ax("add"))
a.push(b)},
X:function(a,b){var u
if(!!a.fixed$length)H.t(P.ax("remove"))
for(u=0;u<a.length;++u)if(J.a0(a[u],b)){a.splice(u,1)
return!0}return!1},
P:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.bn(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.W(u,t,H.l(a[t]))
return u.join(b)},
jj:function(a){return this.l(a,"")},
jc:function(a,b,c){var u,t,s
H.m(b,{func:1,ret:P.M,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.h(P.bn(a))}throw H.h(H.jV())},
jb:function(a,b){return this.jc(a,b,null)},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
eD:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.aw(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.aw(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gbu:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.jV())},
dm:function(a,b){var u,t
H.m(b,{func:1,ret:P.M,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.h(P.bn(a))}return!1},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a0(a[u],b))return!0
return!1},
i:function(a){return P.jU(a,"[","]")},
gS:function(a){return new J.ap(a,a.length,0,[H.y(a,0)])},
gH:function(a){return H.cs(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.t(P.ax("set length"))
if(b<0)throw H.h(P.aw(b,0,null,"newLength",null))
a.length=b},
W:function(a,b,c){H.E(c,H.y(a,0))
if(!!a.immutable$list)H.t(P.ax("indexed set"))
if(b>=a.length||b<0)throw H.h(H.d0(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.jW.prototype={}
J.ap.prototype={
gF:function(a){return this.d},
w:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.h(H.B(u))
s=this.c
if(s>=t){this.sd2(null)
return!1}this.sd2(u[s]);++this.c
return!0},
sd2:function(a){this.d=H.E(a,H.y(this,0))},
$iaN:1}
J.ds.prototype={
jS:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.ax(""+a+".toInt()"))},
cr:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ax(""+a+".floor()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ax(""+a+".round()"))},
ee:function(a,b){var u,t
if(b>20)throw H.h(P.aw(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
ev:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eK:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dg(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.dg(a,b)},
dg:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ax("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
bc:function(a,b){var u
if(a>0)u=this.hW(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hW:function(a,b){return b>31?0:a>>>b},
$iA:1,
$ia2:1}
J.dq.prototype={$iC:1}
J.dp.prototype={}
J.bO.prototype={
cf:function(a,b){if(b<0)throw H.h(H.d0(a,b))
if(b>=a.length)H.t(H.d0(a,b))
return a.charCodeAt(b)},
aF:function(a,b){if(b>=a.length)throw H.h(H.d0(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(typeof b!=="string")throw H.h(P.jO(b,null,null))
return a+b},
eC:function(a,b,c){var u
if(c>a.length)throw H.h(P.aw(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
bE:function(a,b){return this.eC(a,b,0)},
b7:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.hB(b,null,null))
if(b>c)throw H.h(P.hB(b,null,null))
if(c>a.length)throw H.h(P.hB(c,null,null))
return a.substring(b,c)},
b6:function(a,b){return this.b7(a,b,null)},
jV:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jv:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.u(c,u)+a},
aa:function(a,b){return this.jv(a,b," ")},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikH:1,
$if:1}
H.q.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.i.cf(this.a,b)},
$ae6:function(){return[P.C]},
$av:function(){return[P.C]},
$ae:function(){return[P.C]},
$ab:function(){return[P.C]}}
H.fy.prototype={}
H.bP.prototype={
gS:function(a){return new H.cj(this,this.gm(this),0,[H.an(this,"bP",0)])},
bC:function(a,b){return this.eF(0,H.m(b,{func:1,ret:P.M,args:[H.an(this,"bP",0)]}))}}
H.cj.prototype={
gF:function(a){return this.d},
w:function(){var u,t,s,r
u=this.a
t=J.ke(u)
s=t.gm(u)
if(this.b!==s)throw H.h(P.bn(u))
r=this.c
if(r>=s){this.saT(null)
return!1}this.saT(t.C(u,r));++this.c
return!0},
saT:function(a){this.d=H.E(a,H.y(this,0))},
$iaN:1}
H.h4.prototype={
gS:function(a){return new H.h5(J.c5(this.a),this.b,this.$ti)},
gm:function(a){return J.bD(this.a)},
C:function(a,b){return this.b.$1(J.jM(this.a,b))},
$ae:function(a,b){return[b]}}
H.h5.prototype={
w:function(){var u=this.b
if(u.w()){this.saT(this.c.$1(u.gF(u)))
return!0}this.saT(null)
return!1},
gF:function(a){return this.a},
saT:function(a){this.a=H.E(a,H.y(this,1))},
$aaN:function(a,b){return[b]}}
H.h6.prototype={
gm:function(a){return J.bD(this.a)},
C:function(a,b){return this.b.$1(J.jM(this.a,b))},
$abP:function(a,b){return[b]},
$ae:function(a,b){return[b]}}
H.cK.prototype={
gS:function(a){return new H.iN(J.c5(this.a),this.b,this.$ti)}}
H.iN.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gF(u)))return!0
return!1},
gF:function(a){var u=this.a
return u.gF(u)}}
H.bK.prototype={}
H.e6.prototype={}
H.e5.prototype={}
H.hD.prototype={}
H.ij.prototype={
a9:function(a){var u,t,s
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
H.hs.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fW.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.l(this.a)+")"}}
H.iw.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jL.prototype={
$1:function(a){if(!!J.Z(a).$ibq)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.eL.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ial:1}
H.c9.prototype={
i:function(a){return"Closure '"+H.bR(this).trim()+"'"},
$ibr:1,
gjZ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i5.prototype={}
H.hX.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c3(u)+"'"}}
H.c7.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c7))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gH:function(a){var u,t
u=this.c
if(u==null)t=H.cs(this.a)
else t=typeof u!=="object"?J.bC(u):H.cs(u)
return(t^H.cs(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bR(u)+"'")}}
H.il.prototype={
i:function(a){return this.a}}
H.fi.prototype={
i:function(a){return this.a}}
H.hK.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.aP.prototype={
gm:function(a){return this.a},
ga3:function(a){return new H.dw(this,[H.y(this,0)])},
dv:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.d_(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.d_(t,b)}else return this.jh(b)},
jh:function(a){var u=this.d
if(u==null)return!1
return this.cs(this.bP(u,J.bC(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.ba(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.ba(r,b)
s=t==null?null:t.b
return s}else return this.ji(b)},
ji:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bP(u,J.bC(a)&0x3ffffff)
s=this.cs(t,a)
if(s<0)return
return t[s].b},
W:function(a,b,c){var u,t,s,r,q,p
H.E(b,H.y(this,0))
H.E(c,H.y(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c_()
this.b=u}this.cR(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c_()
this.c=t}this.cR(t,b,c)}else{s=this.d
if(s==null){s=this.c_()
this.d=s}r=J.bC(b)&0x3ffffff
q=this.bP(s,r)
if(q==null)this.c5(s,r,[this.c0(b,c)])
else{p=this.cs(q,b)
if(p>=0)q[p].b=c
else q.push(this.c0(b,c))}}},
P:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.h(P.bn(this))
u=u.c}},
cR:function(a,b,c){var u
H.E(b,H.y(this,0))
H.E(c,H.y(this,1))
u=this.ba(a,b)
if(u==null)this.c5(a,b,this.c0(b,c))
else u.b=c},
fK:function(){this.r=this.r+1&67108863},
c0:function(a,b){var u,t
u=new H.fZ(H.E(a,H.y(this,0)),H.E(b,H.y(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.fK()
return u},
cs:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a0(a[t].a,b))return t
return-1},
i:function(a){return P.kD(this)},
ba:function(a,b){return a[b]},
bP:function(a,b){return a[b]},
c5:function(a,b,c){a[b]=c},
fk:function(a,b){delete a[b]},
d_:function(a,b){return this.ba(a,b)!=null},
c_:function(){var u=Object.create(null)
this.c5(u,"<non-identifier-key>",u)
this.fk(u,"<non-identifier-key>")
return u}}
H.fZ.prototype={}
H.dw.prototype={
gm:function(a){return this.a.a},
gS:function(a){var u,t
u=this.a
t=new H.h_(u,u.r,this.$ti)
t.c=u.e
return t}}
H.h_.prototype={
gF:function(a){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.bn(u))
else{u=this.c
if(u==null){this.scQ(null)
return!1}else{this.scQ(u.a)
this.c=this.c.c
return!0}}},
scQ:function(a){this.d=H.E(a,H.y(this,0))},
$iaN:1}
H.jD.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.jE.prototype={
$2:function(a,b){return this.a(a,b)},
$S:37}
H.jF.prototype={
$1:function(a){return this.a(H.H(a))},
$S:36}
H.fV.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikH:1}
H.cp.prototype={$inw:1}
H.dE.prototype={
gm:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.co.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]},
$abK:function(){return[P.A]},
$av:function(){return[P.A]},
$ie:1,
$ae:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.dF.prototype={
$abK:function(){return[P.C]},
$av:function(){return[P.C]},
$ie:1,
$ae:function(){return[P.C]},
$ib:1,
$ab:function(){return[P.C]}}
H.hk.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.hl.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.hn.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.ho.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.dG.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bz(b,a,a.length)
return a[b]},
$inx:1}
H.hp.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
H.cR.prototype={}
P.iP.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:12}
P.iO.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:38}
P.iQ.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iR.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eR.prototype={
f4:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c_(new P.jq(this,b),0),a)
else throw H.h(P.ax("`setTimeout()` not found."))},
f5:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c_(new P.jp(this,a,Date.now(),b),0),a)
else throw H.h(P.ax("Periodic timer."))},
$iaZ:1}
P.jq.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.jp.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.eK(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.b3.prototype={
jm:function(a){if(this.c!==6)return!0
return this.b.b.cC(H.m(this.d,{func:1,ret:P.M,args:[P.Q]}),a.a,P.M,P.Q)},
jf:function(a){var u,t,s,r
u=this.e
t=P.Q
s={futureOr:1,type:H.y(this,1)}
r=this.b.b
if(H.f7(u,{func:1,args:[P.Q,P.al]}))return H.kd(r.jK(u,a.a,a.b,null,t,P.al),s)
else return H.kd(r.cC(H.m(u,{func:1,args:[P.Q]}),a.a,null,t),s)}}
P.az.prototype={
ed:function(a,b,c){var u,t,s,r
u=H.y(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Y
if(t!==C.l){t.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.mE(b,t)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.az(0,$.Y,[c])
r=b==null?1:3
this.cS(new P.b3(s,r,a,b,[u,c]))
return s},
jR:function(a,b){return this.ed(a,null,b)},
cS:function(a){var u,t
u=this.a
if(u<=1){a.a=H.j(this.c,"$ib3")
this.c=a}else{if(u===2){t=H.j(this.c,"$iaz")
u=t.a
if(u<4){t.cS(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jy(null,null,u,H.m(new P.iZ(this,a),{func:1,ret:-1}))}},
dc:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.j(this.c,"$ib3")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.j(this.c,"$iaz")
t=p.a
if(t<4){p.dc(a)
return}this.a=t
this.c=p.c}u.a=this.bb(a)
t=this.b
t.toString
P.jy(null,null,t,H.m(new P.j2(u,this),{func:1,ret:-1}))}},
c3:function(){var u=H.j(this.c,"$ib3")
this.c=null
return this.bb(u)},
bb:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cW:function(a){var u,t,s
u=H.y(this,0)
H.kd(a,{futureOr:1,type:u})
t=this.$ti
if(H.d_(a,"$icg",t,"$acg"))if(H.d_(a,"$iaz",t,null))P.l3(a,this)
else P.mt(a,this)
else{s=this.c3()
H.E(a,u)
this.a=4
this.c=a
P.cN(this,s)}},
cX:function(a,b){var u
H.j(b,"$ial")
u=this.c3()
this.a=8
this.c=new P.ad(a,b)
P.cN(this,u)},
$icg:1}
P.iZ.prototype={
$0:function(){P.cN(this.a,this.b)},
$S:2}
P.j2.prototype={
$0:function(){P.cN(this.b,this.a.a)},
$S:2}
P.j_.prototype={
$1:function(a){var u=this.a
u.a=0
u.cW(a)},
$S:12}
P.j0.prototype={
$2:function(a,b){H.j(b,"$ial")
this.a.cX(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.j1.prototype={
$0:function(){this.a.cX(this.b,this.c)},
$S:2}
P.j5.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eb(H.m(r.d,{func:1}),null)}catch(q){t=H.au(q)
s=H.c1(q)
if(this.d){r=H.j(this.a.a.c,"$iad").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.j(this.a.a.c,"$iad")
else p.b=new P.ad(t,s)
p.a=!0
return}if(!!J.Z(u).$icg){if(u instanceof P.az&&u.a>=4){if(u.a===8){r=this.b
r.b=H.j(u.c,"$iad")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jR(new P.j6(o),null)
r.a=!1}},
$S:3}
P.j6.prototype={
$1:function(a){return this.a},
$S:31}
P.j4.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.y(s,0)
q=H.E(this.c,r)
p=H.y(s,1)
this.a.b=s.b.b.cC(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.au(o)
t=H.c1(o)
s=this.a
s.b=new P.ad(u,t)
s.a=!0}},
$S:3}
P.j3.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.j(this.a.a.c,"$iad")
r=this.c
if(r.jm(u)&&r.e!=null){q=this.b
q.b=r.jf(u)
q.a=!1}}catch(p){t=H.au(p)
s=H.c1(p)
r=H.j(this.a.a.c,"$iad")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ad(t,s)
n.a=!0}},
$S:3}
P.ed.prototype={}
P.i_.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.az(0,$.Y,[P.C])
u.a=0
s=H.y(this,0)
r=H.m(new P.i1(u,this),{func:1,ret:-1,args:[s]})
H.m(new P.i2(u,t),{func:1,ret:-1})
W.a6(this.a,this.b,r,!1,s)
return t}}
P.i1.prototype={
$1:function(a){H.E(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.y(this.b,0)]}}}
P.i2.prototype={
$0:function(){this.b.cW(this.a.a)},
$S:2}
P.cx.prototype={}
P.i0.prototype={}
P.aZ.prototype={}
P.ad.prototype={
i:function(a){return H.l(this.a)},
$ibq:1}
P.jt.prototype={$inL:1}
P.jx.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dI()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.h(u)
s=H.h(u)
s.stack=t.i(0)
throw s},
$S:2}
P.jc.prototype={
jL:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
try{if(C.l===$.Y){a.$0()
return}P.l9(null,null,this,a,-1)}catch(s){u=H.au(s)
t=H.c1(s)
P.jw(null,null,this,u,H.j(t,"$ial"))}},
jM:function(a,b,c){var u,t,s
H.m(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.l===$.Y){a.$1(b)
return}P.la(null,null,this,a,b,-1,c)}catch(s){u=H.au(s)
t=H.c1(s)
P.jw(null,null,this,u,H.j(t,"$ial"))}},
iJ:function(a,b){return new P.je(this,H.m(a,{func:1,ret:b}),b)},
cb:function(a){return new P.jd(this,H.m(a,{func:1,ret:-1}))},
dq:function(a,b){return new P.jf(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
eb:function(a,b){H.m(a,{func:1,ret:b})
if($.Y===C.l)return a.$0()
return P.l9(null,null,this,a,b)},
cC:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.Y===C.l)return a.$1(b)
return P.la(null,null,this,a,b,c,d)},
jK:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.Y===C.l)return a.$2(b,c)
return P.mF(null,null,this,a,b,c,d,e,f)}}
P.je.prototype={
$0:function(){return this.a.eb(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jd.prototype={
$0:function(){return this.a.jL(this.b)},
$S:3}
P.jf.prototype={
$1:function(a){var u=this.c
return this.a.jM(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ja.prototype={
gS:function(a){var u=new P.es(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.j(u[b],"$ibW")!=null}else{t=this.fg(b)
return t}},
fg:function(a){var u=this.d
if(u==null)return!1
return this.bN(this.d3(u,a),a)>=0},
h:function(a,b){var u,t
H.E(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.k5()
this.b=u}return this.cT(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.k5()
this.c=t}return this.cT(t,b)}else return this.f7(0,b)},
f7:function(a,b){var u,t,s
H.E(b,H.y(this,0))
u=this.d
if(u==null){u=P.k5()
this.d=u}t=this.cY(b)
s=u[t]
if(s==null)u[t]=[this.bK(b)]
else{if(this.bN(s,b)>=0)return!1
s.push(this.bK(b))}return!0},
X:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hG(this.c,b)
else return this.hD(0,b)},
hD:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.d3(u,b)
s=this.bN(t,b)
if(s<0)return!1
this.dh(t.splice(s,1)[0])
return!0},
cT:function(a,b){H.E(b,H.y(this,0))
if(H.j(a[b],"$ibW")!=null)return!1
a[b]=this.bK(b)
return!0},
hG:function(a,b){var u
if(a==null)return!1
u=H.j(a[b],"$ibW")
if(u==null)return!1
this.dh(u)
delete a[b]
return!0},
cV:function(){this.r=1073741823&this.r+1},
bK:function(a){var u,t
u=new P.bW(H.E(a,H.y(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.cV()
return u},
dh:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.cV()},
cY:function(a){return J.bC(a)&1073741823},
d3:function(a,b){return a[this.cY(b)]},
bN:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a0(a[t].a,b))return t
return-1}}
P.bW.prototype={}
P.es.prototype={
gF:function(a){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.bn(u))
else{u=this.c
if(u==null){this.scU(null)
return!1}else{this.scU(H.E(u.a,H.y(this,0)))
this.c=this.c.b
return!0}}},
scU:function(a){this.d=H.E(a,H.y(this,0))},
$iaN:1}
P.h0.prototype={$ie:1,$ib:1}
P.v.prototype={
gS:function(a){return new H.cj(a,this.gm(a),0,[H.d1(this,a,"v",0)])},
C:function(a,b){return this.j(a,b)},
jU:function(a,b){var u,t
u=H.c([],[H.d1(this,a,"v",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.W(u,t,this.j(a,t))
return u},
jT:function(a){return this.jU(a,!0)},
i:function(a){return P.jU(a,"[","]")}}
P.h2.prototype={}
P.h3.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.l(a)
u.a=t+": "
u.a+=H.l(b)},
$S:13}
P.a7.prototype={
P:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.d1(this,a,"a7",0),H.d1(this,a,"a7",1)]})
for(u=J.c5(this.ga3(a));u.w();){t=u.gF(u)
b.$2(t,this.j(a,t))}},
gm:function(a){return J.bD(this.ga3(a))},
i:function(a){return P.kD(a)},
$iN:1}
P.jh.prototype={
ak:function(a,b){var u
for(u=J.c5(H.n(b,"$ie",this.$ti,"$ae"));u.w();)this.h(0,u.gF(u))},
i:function(a){return P.jU(this,"{","}")},
C:function(a,b){var u,t,s
if(b<0)H.t(P.aw(b,0,null,"index",null))
for(u=P.mx(this,this.r,H.y(this,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.h(P.W(b,this,"index",null,t))},
$ie:1,
$ikQ:1}
P.et.prototype={}
P.ca.prototype={}
P.cb.prototype={}
P.fA.prototype={
$aca:function(){return[P.f,[P.b,P.C]]}}
P.fR.prototype={
i:function(a){return this.a}}
P.fQ.prototype={
fh:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.k(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.bb("")
if(r>b)q.a+=C.i.b7(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lM(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$acb:function(){return[P.f,P.f]}}
P.iz.prototype={}
P.iA.prototype={
iT:function(a,b,c){var u,t,s
c=P.kN(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jr(t)
if(s.ft(a,b,c)!==c)s.di(C.i.cf(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mA(0,s.b,t.length)))},
iS:function(a){return this.iT(a,0,null)},
$acb:function(){return[P.f,[P.b,P.C]]}}
P.jr.prototype={
di:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.k(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.k(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.k(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.k(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.k(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.k(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.k(u,t)
u[t]=128|a&63
return!1}},
ft:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.i.cf(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.i.aF(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.di(r,C.i.aF(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.k(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.k(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.k(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.k(u,q)
u[q]=128|r&63}}return s}}
P.M.prototype={}
P.ai.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ai&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.h.bc(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lU(H.me(this))
t=P.de(H.mc(this))
s=P.de(H.m8(this))
r=P.de(H.m9(this))
q=P.de(H.mb(this))
p=P.de(H.md(this))
o=P.lV(H.ma(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.A.prototype={}
P.bp.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bp&&this.a===b.a},
gH:function(a){return C.h.gH(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fx()
t=this.a
if(t<0)return"-"+new P.bp(0-t).i(0)
s=u.$1(C.h.a0(t,6e7)%60)
r=u.$1(C.h.a0(t,1e6)%60)
q=new P.fw().$1(t%1e6)
return""+C.h.a0(t,36e8)+":"+H.l(s)+":"+H.l(r)+"."+H.l(q)}}
P.fw.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.fx.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.bq.prototype={}
P.dI.prototype={
i:function(a){return"Throw of null."}}
P.aB.prototype={
gbM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbL:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbM()+t+s
if(!this.a)return r
q=this.gbL()
p=P.fC(this.b)
return r+q+": "+p}}
P.bS.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.l(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.l(u)
else if(s>u)t=": Not in range "+H.l(u)+".."+H.l(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.l(u)}return t}}
P.fS.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var u,t
u=H.ac(this.b)
if(typeof u!=="number")return u.aS()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.l(t)},
gm:function(a){return this.f}}
P.ix.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iv.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cw.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fl.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fC(u)+"."}}
P.hv.prototype={
i:function(a){return"Out of Memory"},
$ibq:1}
P.dS.prototype={
i:function(a){return"Stack Overflow"},
$ibq:1}
P.fq.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.el.prototype={
i:function(a){return"Exception: "+this.a}}
P.fL.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.i.b7(s,0,75)+"...":s
return t+"\n"+r}}
P.br.prototype={}
P.C.prototype={}
P.e.prototype={
bC:function(a,b){var u=H.an(this,"e",0)
return new H.cK(this,H.m(b,{func:1,ret:P.M,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gS(this)
for(t=0;u.w();)++t
return t},
gaC:function(a){var u,t
u=this.gS(this)
if(!u.w())throw H.h(H.jV())
t=u.gF(u)
if(u.w())throw H.h(H.m0())
return t},
C:function(a,b){var u,t,s
if(b<0)H.t(P.aw(b,0,null,"index",null))
for(u=this.gS(this),t=0;u.w();){s=u.gF(u)
if(b===t)return s;++t}throw H.h(P.W(b,this,"index",null,t))},
i:function(a){return P.m_(this,"(",")")}}
P.aN.prototype={}
P.b.prototype={$ie:1}
P.N.prototype={}
P.J.prototype={
gH:function(a){return P.Q.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a2.prototype={}
P.Q.prototype={constructor:P.Q,$iQ:1,
t:function(a,b){return this===b},
gH:function(a){return H.cs(this)},
i:function(a){return"Instance of '"+H.bR(this)+"'"},
toString:function(){return this.i(this)}}
P.al.prototype={}
P.f.prototype={$ikH:1}
P.bb.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.w.prototype={}
W.f9.prototype={
gm:function(a){return a.length}}
W.d5.prototype={
i:function(a){return String(a)},
$id5:1}
W.fa.prototype={
i:function(a){return String(a)}}
W.c6.prototype={$ic6:1}
W.d7.prototype={}
W.bk.prototype={$ibk:1}
W.bF.prototype={
cF:function(a,b,c){if(c!=null)return this.fu(a,b,P.mM(c,null))
return this.fv(a,b)},
eo:function(a,b){return this.cF(a,b,null)},
fu:function(a,b,c){return a.getContext(b,c)},
fv:function(a,b){return a.getContext(b)},
$ibF:1,
$iku:1}
W.bG.prototype={
fw:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
j7:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibG:1}
W.bl.prototype={
gm:function(a){return a.length}}
W.cc.prototype={$icc:1}
W.fm.prototype={
gm:function(a){return a.length}}
W.R.prototype={$iR:1}
W.cd.prototype={
gm:function(a){return a.length}}
W.fn.prototype={}
W.aJ.prototype={}
W.aK.prototype={}
W.fo.prototype={
gm:function(a){return a.length}}
W.fp.prototype={
gm:function(a){return a.length}}
W.fs.prototype={
gm:function(a){return a.length}}
W.av.prototype={$iav:1}
W.ce.prototype={
iF:function(a,b){return a.adoptNode(b)},
ep:function(a,b){return a.getElementById(b)}}
W.ft.prototype={
i:function(a){return String(a)}}
W.df.prototype={
iX:function(a,b){return a.createHTMLDocument(b)}}
W.dg.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.aa,P.a2]]},
$av:function(){return[[P.aa,P.a2]]},
$ie:1,
$ae:function(){return[[P.aa,P.a2]]},
$ib:1,
$ab:function(){return[[P.aa,P.a2]]},
$az:function(){return[[P.aa,P.a2]]}}
W.dh.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaB(a))+" x "+H.l(this.gax(a))},
t:function(a,b){var u
if(b==null)return!1
if(!H.d_(b,"$iaa",[P.a2],"$aaa"))return!1
u=J.am(b)
return a.left===u.gbv(b)&&a.top===u.gbA(b)&&this.gaB(a)===u.gaB(b)&&this.gax(a)===u.gax(b)},
gH:function(a){return W.l5(C.j.gH(a.left),C.j.gH(a.top),C.j.gH(this.gaB(a)),C.j.gH(this.gax(a)))},
gdr:function(a){return a.bottom},
gax:function(a){return a.height},
gbv:function(a){return a.left},
gby:function(a){return a.right},
gbA:function(a){return a.top},
gaB:function(a){return a.width},
$iaa:1,
$aaa:function(){return[P.a2]}}
W.fu.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.f]},
$av:function(){return[P.f]},
$ie:1,
$ae:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$az:function(){return[P.f]}}
W.fv.prototype={
gm:function(a){return a.length}}
W.iT.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.k(u,b)
return H.j(u[b],"$iS")},
h:function(a,b){J.kp(this.a,b)
return b},
gS:function(a){var u=this.jT(this)
return new J.ap(u,u.length,0,[H.y(u,0)])},
$av:function(){return[W.S]},
$ae:function(){return[W.S]},
$ab:function(){return[W.S]}}
W.S.prototype={
giI:function(a){return new W.iV(a)},
gdt:function(a){return new W.iT(a,a.children)},
gdu:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aS()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aS()
if(r<0)r=-r*0
return new P.aa(u,t,s,r,[P.a2])},
i:function(a){return a.localName},
a8:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kz
if(u==null){u=H.c([],[W.as])
t=new W.dH(u)
C.a.h(u,W.l4(null))
C.a.h(u,W.l6())
$.kz=t
d=t}else d=u
u=$.ky
if(u==null){u=new W.eX(d)
$.ky=u
c=u}else{u.a=d
c=u}}if($.b5==null){u=document
t=u.implementation
t=(t&&C.J).iX(t,"")
$.b5=t
$.jT=t.createRange()
t=$.b5
t.toString
t=t.createElement("base")
H.j(t,"$ic6")
t.href=u.baseURI
u=$.b5.head;(u&&C.L).A(u,t)}u=$.b5
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.j(t,"$ibk")}u=$.b5
if(!!this.$ibk)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b5.body;(u&&C.n).A(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.U(C.X,a.tagName)){u=$.jT;(u&&C.E).ex(u,s)
u=$.jT
r=(u&&C.E).iV(u,b)}else{s.innerHTML=b
r=$.b5.createDocumentFragment()
for(u=J.am(r);t=s.firstChild,t!=null;)u.A(r,t)}u=$.b5.body
if(s==null?u!=null:s!==u)J.kq(s)
c.cH(r)
C.z.iF(document,r)
return r},
iW:function(a,b,c){return this.a8(a,b,c,null)},
ez:function(a,b,c,d){a.textContent=null
this.A(a,this.a8(a,b,c,d))},
ey:function(a,b){return this.ez(a,b,null,null)},
aR:function(a,b){return a.getAttribute(b)},
hE:function(a,b){return a.removeAttribute(b)},
$iS:1,
gjN:function(a){return a.tagName}}
W.fz.prototype={
$1:function(a){return!!J.Z(H.j(a,"$iD")).$iS},
$S:15}
W.o.prototype={$io:1}
W.d.prototype={
iD:function(a,b,c,d){H.m(c,{func:1,args:[W.o]})
if(c!=null)this.f8(a,b,c,!1)},
f8:function(a,b,c,d){return a.addEventListener(b,H.c_(H.m(c,{func:1,args:[W.o]}),1),!1)},
$id:1}
W.aL.prototype={$iaL:1}
W.fF.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aL]},
$av:function(){return[W.aL]},
$ie:1,
$ae:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$az:function(){return[W.aL]}}
W.fG.prototype={
gm:function(a){return a.length}}
W.fK.prototype={
gm:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.dm.prototype={}
W.fP.prototype={
gm:function(a){return a.length}}
W.bL.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.D]},
$av:function(){return[W.D]},
$ie:1,
$ae:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$ibL:1,
$az:function(){return[W.D]}}
W.dn.prototype={}
W.bs.prototype={$ibs:1,
gdw:function(a){return a.data}}
W.ci.prototype={$ici:1,$iku:1}
W.aQ.prototype={$iaQ:1}
W.dy.prototype={
i:function(a){return String(a)},
$idy:1}
W.cm.prototype={}
W.hd.prototype={
gm:function(a){return a.length}}
W.he.prototype={
j:function(a,b){return P.bd(a.get(H.H(b)))},
P:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bd(t.value[1]))}},
ga3:function(a){var u=H.c([],[P.f])
this.P(a,new W.hf(u))
return u},
gm:function(a){return a.size},
$aa7:function(){return[P.f,null]},
$iN:1,
$aN:function(){return[P.f,null]}}
W.hf.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hg.prototype={
j:function(a,b){return P.bd(a.get(H.H(b)))},
P:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bd(t.value[1]))}},
ga3:function(a){var u=H.c([],[P.f])
this.P(a,new W.hh(u))
return u},
gm:function(a){return a.size},
$aa7:function(){return[P.f,null]},
$iN:1,
$aN:function(){return[P.f,null]}}
W.hh.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aT.prototype={$iaT:1}
W.hi.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aT]},
$av:function(){return[W.aT]},
$ie:1,
$ae:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$az:function(){return[W.aT]}}
W.a8.prototype={$ia8:1}
W.ah.prototype={
gaC:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.h(P.kS("No elements"))
if(t>1)throw H.h(P.kS("More than one element"))
return u.firstChild},
ak:function(a,b){var u,t,s,r,q
H.n(b,"$ie",[W.D],"$ae")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.am(t),q=0;q<s;++q)r.A(t,u.firstChild)
return},
gS:function(a){var u=this.a.childNodes
return new W.dk(u,u.length,-1,[H.d1(C.Z,u,"z",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
$av:function(){return[W.D]},
$ae:function(){return[W.D]},
$ab:function(){return[W.D]}}
W.D.prototype={
jF:function(a){var u=a.parentNode
if(u!=null)J.f8(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.eE(a):u},
A:function(a,b){return a.appendChild(b)},
hF:function(a,b){return a.removeChild(b)},
$iD:1}
W.cq.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.D]},
$av:function(){return[W.D]},
$ie:1,
$ae:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$az:function(){return[W.D]}}
W.aU.prototype={$iaU:1,
gm:function(a){return a.length}}
W.hy.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aU]},
$av:function(){return[W.aU]},
$ie:1,
$ae:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$az:function(){return[W.aU]}}
W.dN.prototype={
iV:function(a,b){return a.createContextualFragment(b)},
ex:function(a,b){return a.selectNodeContents(b)}}
W.hI.prototype={
j:function(a,b){return P.bd(a.get(H.H(b)))},
P:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bd(t.value[1]))}},
ga3:function(a){var u=H.c([],[P.f])
this.P(a,new W.hJ(u))
return u},
gm:function(a){return a.size},
$aa7:function(){return[P.f,null]},
$iN:1,
$aN:function(){return[P.f,null]}}
W.hJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hL.prototype={
gm:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.hU.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aV]},
$av:function(){return[W.aV]},
$ie:1,
$ae:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$az:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.hV.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aW]},
$av:function(){return[W.aW]},
$ie:1,
$ae:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$az:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gm:function(a){return a.length}}
W.hY.prototype={
j:function(a,b){return this.d4(a,H.H(b))},
P:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=this.fB(a,u)
if(t==null)return
b.$2(t,this.d4(a,t))}},
ga3:function(a){var u=H.c([],[P.f])
this.P(a,new W.hZ(u))
return u},
gm:function(a){return a.length},
d4:function(a,b){return a.getItem(b)},
fB:function(a,b){return a.key(b)},
$aa7:function(){return[P.f,P.f]},
$iN:1,
$aN:function(){return[P.f,P.f]}}
W.hZ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:33}
W.aD.prototype={$iaD:1}
W.bU.prototype={}
W.dT.prototype={
a8:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=W.lW("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ah(t).ak(0,new W.ah(u))
return t}}
W.dU.prototype={
a8:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.a8(u.createElement("table"),b,c,d)
u.toString
u=new W.ah(u)
s=u.gaC(u)
s.toString
u=new W.ah(s)
r=u.gaC(u)
t.toString
r.toString
new W.ah(t).ak(0,new W.ah(r))
return t}}
W.i4.prototype={
a8:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.a8(u.createElement("table"),b,c,d)
u.toString
u=new W.ah(u)
s=u.gaC(u)
t.toString
s.toString
new W.ah(t).ak(0,new W.ah(s))
return t}}
W.cy.prototype={$icy:1}
W.aY.prototype={$iaY:1}
W.aE.prototype={$iaE:1}
W.i6.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aE]},
$av:function(){return[W.aE]},
$ie:1,
$ae:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$az:function(){return[W.aE]}}
W.i7.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aY]},
$av:function(){return[W.aY]},
$ie:1,
$ae:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$az:function(){return[W.aY]}}
W.ib.prototype={
gm:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.aF.prototype={$iaF:1}
W.ig.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b_]},
$av:function(){return[W.b_]},
$ie:1,
$ae:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$az:function(){return[W.b_]}}
W.ih.prototype={
gm:function(a){return a.length}}
W.bx.prototype={}
W.iy.prototype={
i:function(a){return String(a)}}
W.iK.prototype={$iku:1}
W.iL.prototype={
gm:function(a){return a.length}}
W.b2.prototype={
gj2:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ax("deltaY is not supported"))},
gj1:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ax("deltaX is not supported"))},
$ib2:1}
W.cL.prototype={
hI:function(a,b){return a.requestAnimationFrame(H.c_(H.m(b,{func:1,ret:-1,args:[P.a2]}),1))},
fm:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cM.prototype={$icM:1}
W.iU.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.R]},
$av:function(){return[W.R]},
$ie:1,
$ae:function(){return[W.R]},
$ib:1,
$ab:function(){return[W.R]},
$az:function(){return[W.R]}}
W.eg.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.d_(b,"$iaa",[P.a2],"$aaa"))return!1
u=J.am(b)
return a.left===u.gbv(b)&&a.top===u.gbA(b)&&a.width===u.gaB(b)&&a.height===u.gax(b)},
gH:function(a){return W.l5(C.j.gH(a.left),C.j.gH(a.top),C.j.gH(a.width),C.j.gH(a.height))},
gax:function(a){return a.height},
gaB:function(a){return a.width}}
W.j7.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aM]},
$av:function(){return[W.aM]},
$ie:1,
$ae:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$az:function(){return[W.aM]}}
W.ey.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.D]},
$av:function(){return[W.D]},
$ie:1,
$ae:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$az:function(){return[W.D]}}
W.jk.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aX]},
$av:function(){return[W.aX]},
$ie:1,
$ae:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$az:function(){return[W.aX]}}
W.jl.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aD]},
$av:function(){return[W.aD]},
$ie:1,
$ae:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$az:function(){return[W.aD]}}
W.iS.prototype={
P:function(a,b){var u,t,s,r,q,p
H.m(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga3(this),t=u.length,s=this.a,r=J.am(s),q=0;q<u.length;u.length===t||(0,H.B)(u),++q){p=u[q]
b.$2(p,r.aR(s,p))}},
ga3:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.c([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.k(u,r)
q=H.j(u[r],"$icM")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aa7:function(){return[P.f,P.f]},
$aN:function(){return[P.f,P.f]}}
W.iV.prototype={
j:function(a,b){return J.jN(this.a,H.H(b))},
gm:function(a){return this.ga3(this).length}}
W.iW.prototype={}
W.k4.prototype={}
W.iX.prototype={}
W.iY.prototype={
$1:function(a){return this.a.$1(H.j(a,"$io"))},
$S:27}
W.by.prototype={
eS:function(a){var u,t
u=$.ko()
if(u.a===0){for(t=0;t<262;++t)u.W(0,C.W[t],W.mT())
for(t=0;t<12;++t)u.W(0,C.u[t],W.mU())}},
aK:function(a){return $.lF().U(0,W.cf(a))},
al:function(a,b,c){var u,t,s
u=W.cf(a)
t=$.ko()
s=t.j(0,H.l(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.ka(s.$4(a,b,c,this))},
$ias:1}
W.z.prototype={
gS:function(a){return new W.dk(a,this.gm(a),-1,[H.d1(this,a,"z",0)])}}
W.dH.prototype={
aK:function(a){return C.a.dm(this.a,new W.hr(a))},
al:function(a,b,c){return C.a.dm(this.a,new W.hq(a,b,c))},
$ias:1}
W.hr.prototype={
$1:function(a){return H.j(a,"$ias").aK(this.a)},
$S:17}
W.hq.prototype={
$1:function(a){return H.j(a,"$ias").al(this.a,this.b,this.c)},
$S:17}
W.eG.prototype={
f3:function(a,b,c,d){var u,t,s
this.a.ak(0,c)
u=b.bC(0,new W.ji())
t=b.bC(0,new W.jj())
this.b.ak(0,u)
s=this.c
s.ak(0,C.Y)
s.ak(0,t)},
aK:function(a){return this.a.U(0,W.cf(a))},
al:function(a,b,c){var u,t
u=W.cf(a)
t=this.c
if(t.U(0,H.l(u)+"::"+b))return this.d.iG(c)
else if(t.U(0,"*::"+b))return this.d.iG(c)
else{t=this.b
if(t.U(0,H.l(u)+"::"+b))return!0
else if(t.U(0,"*::"+b))return!0
else if(t.U(0,H.l(u)+"::*"))return!0
else if(t.U(0,"*::*"))return!0}return!1},
$ias:1}
W.ji.prototype={
$1:function(a){return!C.a.U(C.u,H.H(a))},
$S:18}
W.jj.prototype={
$1:function(a){return C.a.U(C.u,H.H(a))},
$S:18}
W.jn.prototype={
al:function(a,b,c){if(this.eJ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jN(a,"template")==="")return this.e.U(0,b)
return!1}}
W.jo.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.H(a))},
$S:41}
W.jm.prototype={
aK:function(a){var u=J.Z(a)
if(!!u.$ict)return!1
u=!!u.$ip
if(u&&W.cf(a)==="foreignObject")return!1
if(u)return!0
return!1},
al:function(a,b,c){if(b==="is"||C.i.bE(b,"on"))return!1
return this.aK(a)},
$ias:1}
W.dk.prototype={
w:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sd5(J.lH(this.a,u))
this.c=u
return!0}this.sd5(null)
this.c=t
return!1},
gF:function(a){return this.d},
sd5:function(a){this.d=H.E(a,H.y(this,0))},
$iaN:1}
W.as.prototype={}
W.jg.prototype={$iny:1}
W.eX.prototype={
cH:function(a){new W.js(this).$2(a,null)},
aX:function(a,b){if(b==null)J.kq(a)
else J.f8(b,a)},
hN:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lK(a)
s=J.jN(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.au(o)}q="element unprintable"
try{q=J.ao(a)}catch(o){H.au(o)}try{p=W.cf(a)
this.hM(H.j(a,"$iS"),b,u,q,p,H.j(t,"$iN"),H.H(s))}catch(o){if(H.au(o) instanceof P.aB)throw o
else{this.aX(a,b)
window
n="Removing corrupted element "+H.l(q)
if(typeof console!="undefined")window.console.warn(n)}}},
hM:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.aX(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aK(a)){this.aX(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.al(a,"is",g)){this.aX(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.c(u.slice(0),[H.y(u,0)])
for(s=f.ga3(f).length-1,u=f.a,r=J.am(u);s>=0;--s){if(s>=t.length)return H.k(t,s)
q=t[s]
if(!this.a.al(a,J.lN(q),r.aR(u,q))){window
p="Removing disallowed attribute <"+H.l(e)+" "+q+'="'+H.l(r.aR(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aR(u,q)
r.hE(u,q)}}if(!!J.Z(a).$icy)this.cH(a.content)},
$ini:1}
W.js.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.hN(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.aX(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.au(r)
q=H.j(u,"$iD")
if(s){p=q.parentNode
if(p!=null)J.f8(p,q)}else J.f8(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.j(t,"$iD")}},
$S:28}
W.ef.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eM.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
P.eW.prototype={$ibs:1,
gdw:function(a){return this.a}}
P.jz.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.fH.prototype={
gbQ:function(){var u,t,s
u=this.b
t=H.an(u,"v",0)
s=W.S
return new H.h4(new H.cK(u,H.m(new P.fI(),{func:1,ret:P.M,args:[t]}),[t]),H.m(new P.fJ(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.kp(this.b.a,b)},
gm:function(a){return J.bD(this.gbQ().a)},
j:function(a,b){var u=this.gbQ()
return u.b.$1(J.jM(u.a,b))},
gS:function(a){var u=P.m5(this.gbQ(),!1,W.S)
return new J.ap(u,u.length,0,[H.y(u,0)])},
$av:function(){return[W.S]},
$ae:function(){return[W.S]},
$ab:function(){return[W.S]}}
P.fI.prototype={
$1:function(a){return!!J.Z(H.j(a,"$iD")).$iS},
$S:15}
P.fJ.prototype={
$1:function(a){return H.i(H.j(a,"$iD"),"$iS")},
$S:29}
P.jb.prototype={
gby:function(a){var u=this.a
if(typeof u!=="number")return u.E()
return H.E(u+this.c,H.y(this,0))},
gdr:function(a){var u=this.b
if(typeof u!=="number")return u.E()
return H.E(u+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.d_(b,"$iaa",[P.a2],"$aaa")){u=this.a
t=J.am(b)
if(u==t.gbv(b)){s=this.b
if(s==t.gbA(b)){if(typeof u!=="number")return u.E()
r=H.y(this,0)
if(H.E(u+this.c,r)===t.gby(b)){if(typeof s!=="number")return s.E()
u=H.E(s+this.d,r)===t.gdr(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t,s,r,q
u=this.a
t=J.bC(u)
s=this.b
r=J.bC(s)
if(typeof u!=="number")return u.E()
q=H.y(this,0)
u=C.h.gH(H.E(u+this.c,q))
if(typeof s!=="number")return s.E()
q=C.h.gH(H.E(s+this.d,q))
return P.mw(P.j9(P.j9(P.j9(P.j9(0,t),r),u),q))}}
P.aa.prototype={
gbv:function(a){return this.a},
gbA:function(a){return this.b},
gaB:function(a){return this.c},
gax:function(a){return this.d}}
P.b6.prototype={$ib6:1}
P.fY.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return this.aq(a,b)},
C:function(a,b){return this.j(a,b)},
aq:function(a,b){return a.getItem(b)},
$av:function(){return[P.b6]},
$ie:1,
$ae:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$az:function(){return[P.b6]}}
P.ba.prototype={$iba:1}
P.ht.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return this.aq(a,b)},
C:function(a,b){return this.j(a,b)},
aq:function(a,b){return a.getItem(b)},
$av:function(){return[P.ba]},
$ie:1,
$ae:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$az:function(){return[P.ba]}}
P.hA.prototype={
gm:function(a){return a.length}}
P.ct.prototype={$ict:1}
P.i3.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return this.aq(a,b)},
C:function(a,b){return this.j(a,b)},
aq:function(a,b){return a.getItem(b)},
$av:function(){return[P.f]},
$ie:1,
$ae:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$az:function(){return[P.f]}}
P.p.prototype={
gdt:function(a){return new P.fH(a,new W.ah(a))},
a8:function(a,b,c,d){var u,t,s,r,q,p
u=H.c([],[W.as])
C.a.h(u,W.l4(null))
C.a.h(u,W.l6())
C.a.h(u,new W.jm())
c=new W.eX(new W.dH(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).iW(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ah(r)
p=u.gaC(u)
for(u=J.am(q);s=p.firstChild,s!=null;)u.A(q,s)
return q},
$ip:1}
P.bc.prototype={$ibc:1}
P.ii.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return this.aq(a,b)},
C:function(a,b){return this.j(a,b)},
aq:function(a,b){return a.getItem(b)},
$av:function(){return[P.bc]},
$ie:1,
$ae:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$az:function(){return[P.bc]}}
P.eq.prototype={}
P.er.prototype={}
P.eB.prototype={}
P.eC.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.fc.prototype={
gm:function(a){return a.length}}
P.fd.prototype={
j:function(a,b){return P.bd(a.get(H.H(b)))},
P:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bd(t.value[1]))}},
ga3:function(a){var u=H.c([],[P.f])
this.P(a,new P.fe(u))
return u},
gm:function(a){return a.size},
$aa7:function(){return[P.f,null]},
$iN:1,
$aN:function(){return[P.f,null]}}
P.fe.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.ff.prototype={
gm:function(a){return a.length}}
P.bE.prototype={}
P.hu.prototype={
gm:function(a){return a.length}}
P.ee.prototype={}
P.d8.prototype={$id8:1}
P.dl.prototype={$idl:1}
P.dM.prototype={$idM:1}
P.bT.prototype={
dj:function(a,b){return a.activeTexture(b)},
dn:function(a,b,c){return a.attachShader(b,c)},
am:function(a,b,c){return a.bindBuffer(b,c)},
iK:function(a,b,c){return a.bindFramebuffer(b,c)},
aL:function(a,b,c){return a.bindTexture(b,c)},
iL:function(a,b,c){return a.blendFunc(b,c)},
ds:function(a,b,c,d){return a.bufferData(b,c,d)},
iO:function(a,b){return a.clear(b)},
iP:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
iQ:function(a,b){return a.clearDepth(b)},
iR:function(a,b){return a.compileShader(b)},
iY:function(a,b){return a.createShader(b)},
j_:function(a,b){return a.deleteProgram(b)},
j0:function(a,b){return a.deleteShader(b)},
j3:function(a,b){return a.depthFunc(b)},
j4:function(a,b){return a.disable(b)},
dz:function(a,b){return a.disableVertexAttribArray(b)},
j6:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ck:function(a,b){return a.enable(b)},
dB:function(a,b){return a.enableVertexAttribArray(b)},
ek:function(a,b,c){return a.getActiveAttrib(b,c)},
el:function(a,b,c){return a.getActiveUniform(b,c)},
em:function(a,b,c){return a.getAttribLocation(b,c)},
cG:function(a,b){return a.getParameter(b)},
eq:function(a,b){return a.getProgramInfoLog(b)},
bD:function(a,b,c){return a.getProgramParameter(b,c)},
er:function(a,b){return a.getShaderInfoLog(b)},
es:function(a,b,c){return a.getShaderParameter(b,c)},
eu:function(a,b,c){return a.getUniformLocation(b,c)},
jk:function(a,b){return a.linkProgram(b)},
jD:function(a,b,c){return a.pixelStorei(b,c)},
eB:function(a,b,c){return a.shaderSource(b,c)},
jP:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.Z(g)
if(!!u.$ibs)t=!0
else t=!1
if(t){this.i_(a,b,c,d,e,f,P.mN(g))
return}if(!!u.$ici)u=!0
else u=!1
if(u){this.i0(a,b,c,d,e,f,g)
return}throw H.h(P.lO("Incorrect number or type of arguments"))},
jO:function(a,b,c,d,e,f,g){return this.jP(a,b,c,d,e,f,g,null,null,null)},
i_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
i0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bz:function(a,b,c,d){return a.texParameteri(b,c,d)},
M:function(a,b,c){return a.uniform1f(b,c)},
O:function(a,b,c){return a.uniform1i(b,c)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eg:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eh:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ei:function(a,b){return a.useProgram(b)},
jX:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jY:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibT:1}
P.dP.prototype={$idP:1}
P.dW.prototype={$idW:1}
P.e4.prototype={$ie4:1}
P.hW.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.W(b,a,null,null,null))
return P.bd(this.fA(a,b))},
C:function(a,b){return this.j(a,b)},
fA:function(a,b){return a.item(b)},
$av:function(){return[[P.N,,,]]},
$ie:1,
$ae:function(){return[[P.N,,,]]},
$ib:1,
$ab:function(){return[[P.N,,,]]},
$az:function(){return[[P.N,,,]]}}
P.eJ.prototype={}
P.eK.prototype={}
O.a1.prototype={
bH:function(a){this.sfF(H.c([],[a]))
this.sd9(null)
this.sd6(null)
this.sda(null)},
cI:function(a,b,c){var u=H.an(this,"a1",0)
H.m(b,{func:1,ret:P.M,args:[[P.e,u]]})
u={func:1,ret:-1,args:[P.C,[P.e,u]]}
H.m(a,u)
H.m(c,u)
this.sd9(b)
this.sd6(a)
this.sda(c)},
b5:function(a,b){return this.cI(a,null,b)},
ho:function(a){var u
H.n(a,"$ie",[H.an(this,"a1",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eQ:function(a,b){var u
H.n(b,"$ie",[H.an(this,"a1",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.ap(u,u.length,0,[H.y(u,0)])},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.an(this,"a1",0)
H.E(b,u)
u=[u]
if(this.ho(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.eQ(s,H.c([b],u))}},
sfF:function(a){this.a=H.n(a,"$ib",[H.an(this,"a1",0)],"$ab")},
sd9:function(a){this.b=H.m(a,{func:1,ret:P.M,args:[[P.e,H.an(this,"a1",0)]]})},
sd6:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.C,[P.e,H.an(this,"a1",0)]]})},
sda:function(a){this.d=H.m(a,{func:1,ret:-1,args:[P.C,[P.e,H.an(this,"a1",0)]]})},
$ie:1}
O.cl.prototype={
gm:function(a){return this.a.length},
gq:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
eR:function(a){var u=this.b
if(u!=null)u.D(a)},
aD:function(){return this.eR(null)},
gY:function(a){var u=this.a
if(u.length>0)return C.a.gbu(u)
else return V.dD()},
e8:function(a){var u=this.a
if(a==null)C.a.h(u,V.dD())
else C.a.h(u,a)
this.aD()},
cB:function(){var u=this.a
if(u.length>0){u.pop()
this.aD()}},
sbS:function(a){this.a=H.n(a,"$ib",[V.ae],"$ab")}}
E.fg.prototype={}
E.aj.prototype={
scJ:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gq().X(0,this.ge4())
t=this.c
if(t!=null)t.gq().h(0,this.ge4())
s=new D.L("shape",u,this.c,this,[F.dQ])
s.b=!0
this.af(s)}},
sb_:function(a){var u,t
if(!J.a0(this.r,a)){u=this.r
if(u!=null)u.gq().X(0,this.ge2())
if(a!=null)a.gq().h(0,this.ge2())
this.r=a
t=new D.L("mover",u,a,this,[U.a9])
t.b=!0
this.af(t)}},
ap:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.aQ(0,b,this):null
if(!J.a0(t,this.x)){s=this.x
this.x=t
r=new D.L("matrix",s,t,this,[V.ae])
r.b=!0
this.af(r)}for(u=this.y.a,u=new J.ap(u,u.length,0,[H.y(u,0)]);u.w();)u.d.ap(0,b)},
aP:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gY(u))
else C.a.h(u.a,t.u(0,u.gY(u)))
u.aD()
a.e9(this.f)
u=a.dy
s=(u&&C.a).gbu(u)
if(s!=null&&this.d!=null)s.jH(a,this)
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.y(u,0)]);u.w();)u.d.aP(a)
a.e7()
a.dx.cB()},
gq:function(){var u=this.z
if(u==null){u=D.P()
this.z=u}return u},
af:function(a){var u=this.z
if(u!=null)u.D(a)},
a4:function(){return this.af(null)},
e5:function(a){H.j(a,"$ix")
this.e=null
this.af(a)},
ju:function(){return this.e5(null)},
e3:function(a){this.af(H.j(a,"$ix"))},
jt:function(){return this.e3(null)},
e1:function(a){this.af(H.j(a,"$ix"))},
jq:function(){return this.e1(null)},
jp:function(a,b){var u,t,s,r,q,p,o
H.n(b,"$ie",[E.aj],"$ae")
for(u=b.length,t=this.ge0(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bJ()
o.sac(null)
o.saV(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
js:function(a,b){var u,t
H.n(b,"$ie",[E.aj],"$ae")
for(u=b.gS(b),t=this.ge0();u.w();)u.gF(u).gq().X(0,t)
this.a4()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sff:function(a,b){this.y=H.n(b,"$ia1",[E.aj],"$aa1")},
$ib9:1}
E.hE.prototype={
eM:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ai(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cl()
t=[V.ae]
u.sbS(H.c([],t))
u.b=null
u.gq().h(0,new E.hF(this))
this.cy=u
u=new O.cl()
u.sbS(H.c([],t))
u.b=null
u.gq().h(0,new E.hG(this))
this.db=u
u=new O.cl()
u.sbS(H.c([],t))
u.b=null
u.gq().h(0,new E.hH(this))
this.dx=u
this.shZ(H.c([],[O.bV]))
u=this.dy;(u&&C.a).h(u,null)
this.shV(new H.aP([P.f,A.cu]))},
gjE:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.gY(u)
t=this.db
t=u.u(0,t.gY(t))
this.z=t
u=t}return u},
e9:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbu(u):a;(u&&C.a).h(u,t)},
e7:function(){var u=this.dy
if(u.length>1)u.pop()},
shZ:function(a){this.dy=H.n(a,"$ib",[O.bV],"$ab")},
shV:function(a){this.fr=H.n(a,"$iN",[P.f,A.cu],"$aN")}}
E.hF.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.z=null
u.ch=null},
$S:7}
E.hG.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:7}
E.hH.prototype={
$1:function(a){var u
H.j(a,"$ix")
u=this.a
u.ch=null
u.cx=null},
$S:7}
E.e0.prototype={
cO:function(a){H.j(a,"$ix")
this.ea()},
cN:function(){return this.cO(null)},
gje:function(){var u,t,s
u=Date.now()
t=C.h.a0(P.kx(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ai(u,!1)
return s/t},
de:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.u()
if(typeof u!=="number")return H.G(u)
s=C.j.cr(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.u()
r=C.j.cr(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kV(C.q,this.gjI())}},
ea:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.ia(this),{func:1,ret:-1,args:[P.a2]})
C.G.fm(u)
C.G.hI(u,W.ld(t,P.a2))}},
jG:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.de()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ai(r,!1)
s.y=P.kx(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aD()
r=s.db
C.a.sm(r.a,0)
r.aD()
r=s.dx
C.a.sm(r.a,0)
r.aD()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aP(this.e)}s=this.z
if(s!=null)s.D(null)}catch(q){u=H.au(q)
t=H.c1(q)
P.kk("Error: "+H.l(u))
P.kk("Stack: "+H.l(t))
throw H.h(u)}}}
E.ia.prototype={
$1:function(a){var u
H.n3(a)
u=this.a
if(u.ch){u.ch=!1
u.jG()}},
$S:34}
Z.ec.prototype={$inc:1}
Z.d9.prototype={
ca:function(a){var u,t,s
try{t=a.a
C.b.dB(t,this.e)
C.b.jX(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.au(s)
t=P.r('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.l(u))
throw H.h(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}}
Z.iM.prototype={$ind:1}
Z.da.prototype={
aO:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ca:function(a){var u,t
u=this.a
C.b.am(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].ca(a)},
jW:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dz(s,u[t].e)
C.b.am(s,this.a.a,null)},
aP:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.k(r,s)
q=r[s]
r=q.c
p=r.a
C.b.am(t,p,r.b)
C.b.j6(t,q.a,q.b,5123,0)
C.b.am(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ao(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
sfz:function(a){this.b=H.n(a,"$ib",[Z.bt],"$ab")},
$inl:1}
Z.bt.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bR(this.c)+"'")+"]"}}
Z.b1.prototype={
gcK:function(a){var u,t
u=this.a
t=(u&$.bh().a)!==0?3:0
if((u&$.bg().a)!==0)t+=3
if((u&$.bf().a)!==0)t+=3
if((u&$.bi().a)!==0)t+=2
if((u&$.bj().a)!==0)t+=3
if((u&$.d2().a)!==0)t+=3
if((u&$.d3().a)!==0)t+=4
if((u&$.c4().a)!==0)++t
return(u&$.be().a)!==0?t+4:t},
iH:function(a){var u,t,s
u=$.bh()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bg()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bf()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bi()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bj()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d2()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d3()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c4()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.be()
if((t&u.a)!==0)if(s===a)return u
return $.lE()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b1))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.f])
t=this.a
if((t&$.bh().a)!==0)C.a.h(u,"Pos")
if((t&$.bg().a)!==0)C.a.h(u,"Norm")
if((t&$.bf().a)!==0)C.a.h(u,"Binm")
if((t&$.bi().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bj().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d2().a)!==0)C.a.h(u,"Clr3")
if((t&$.d3().a)!==0)C.a.h(u,"Clr4")
if((t&$.c4().a)!==0)C.a.h(u,"Weight")
if((t&$.be().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.fj.prototype={}
D.bJ.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.m(b,u)
if(this.a==null)this.sac(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
X:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[D.x]})
u=this.a
u=u==null?null:C.a.U(u,b)
if(u===!0){u=this.a
t=(u&&C.a).X(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.U(u,b)
if(u===!0){u=this.b
t=(u&&C.a).X(u,b)||t}return t},
D:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.x(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.P(t,new D.fD(u))
t=this.b
if(t!=null)C.a.P(t,new D.fE(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
j8:function(){return this.D(null)},
jJ:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.D(t)}}},
aA:function(a){return this.jJ(a,!0,!1)},
sac:function(a){this.a=H.n(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
saV:function(a){this.b=H.n(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.fD.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.fE.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.x.prototype={}
D.bM.prototype={}
D.bN.prototype={}
D.L.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.db.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.db))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.du.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.fX.prototype={
jA:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jw:function(a){this.c=a.b
this.d.X(0,a.a)
return!1},
shC:function(a){this.d=H.n(a,"$ikQ",[P.C],"$akQ")}}
X.dz.prototype={}
X.h1.prototype={
aU:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ai(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.u()
q=b.b
p=this.ch
if(typeof q!=="number")return q.u()
o=new V.ab(t.a+s*r,t.b+q*p)
p=this.a.gaN()
n=new X.b8(a,V.bw(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cA:function(a,b){this.r=a.a
return!1},
b1:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.ew()
if(typeof u!=="number")return u.ej()
this.r=(u&~t)>>>0
return!1},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.aU(a,b))
return!0},
jB:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaN()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.u()
o=a.b
n=this.cy
if(typeof o!=="number")return o.u()
r=new X.cn(new V.T(q*p,o*n),t,s,new P.ai(r,!1),this)
r.b=!0
u.D(r)
return!0},
hd:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ai(Date.now(),!1)
t=this.f
s=new X.dz(c,a,this.a.gaN(),b,u,this)
s.b=!0
t.D(s)
this.y=u
this.x=V.bw()}}
X.ar.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ar))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b8.prototype={}
X.hj.prototype={
bO:function(a,b,c){var u,t,s
u=new P.ai(Date.now(),!1)
t=this.a.gaN()
s=new X.b8(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cA:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.bO(a,b,!0))
return!0},
b1:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.ew()
if(typeof u!=="number")return u.ej()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.D(this.bO(a,b,!0))
return!0},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.bO(a,b,!1))
return!0},
jC:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaN()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.u()
p=a.b
o=this.ch
if(typeof p!=="number")return p.u()
s=new X.cn(new V.T(r*q,p*o),t,b,new P.ai(s,!1),this)
s.b=!0
u.D(s)
return!0},
gdA:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
gbB:function(){var u=this.c
if(u==null){u=D.P()
this.c=u}return u},
ge_:function(){var u=this.d
if(u==null){u=D.P()
this.d=u}return u}}
X.cn.prototype={}
X.hz.prototype={}
X.e2.prototype={}
X.ie.prototype={
aU:function(a,b){var u,t,s,r
H.n(a,"$ib",[V.ab],"$ab")
u=new P.ai(Date.now(),!1)
t=a.length>0?a[0]:V.bw()
s=this.a.gaN()
r=new X.e2(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jz:function(a){var u
H.n(a,"$ib",[V.ab],"$ab")
u=this.b
if(u==null)return!1
u.D(this.aU(a,!0))
return!0},
jx:function(a){var u
H.n(a,"$ib",[V.ab],"$ab")
u=this.c
if(u==null)return!1
u.D(this.aU(a,!0))
return!0},
jy:function(a){var u
H.n(a,"$ib",[V.ab],"$ab")
u=this.d
if(u==null)return!1
u.D(this.aU(a,!1))
return!0}}
X.e7.prototype={
gaN:function(){var u=this.a
return V.kO(0,0,C.p.gdu(u).c,C.p.gdu(u).d)},
d0:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.du(u,new X.ar(t,a.altKey,a.shiftKey))},
aJ:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ar(t,a.altKey,a.shiftKey)},
c6:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ar(t,a.altKey,a.shiftKey)},
aw:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.I()
q=u.top
if(typeof s!=="number")return s.I()
return new V.ab(t-r,s-q)},
aW:function(a){return new V.T(a.movementX,a.movementY)},
c2:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.ab])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
o=C.j.ag(p.pageX)
C.j.ag(p.pageY)
n=u.left
C.j.ag(p.pageX)
C.a.h(t,new V.ab(o-n,C.j.ag(p.pageY)-u.top))}return t},
at:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.db(u,new X.ar(t,a.altKey,a.shiftKey))},
bT:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.I()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.I()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
h7:function(a){this.f=!0},
fW:function(a){this.f=!1},
h1:function(a){H.j(a,"$ia8")
if(this.f&&this.bT(a))a.preventDefault()},
hb:function(a){var u
H.j(a,"$iaQ")
if(!this.f)return
u=this.d0(a)
this.b.jA(u)},
h9:function(a){var u
H.j(a,"$iaQ")
if(!this.f)return
u=this.d0(a)
this.b.jw(u)},
hf:function(a){var u,t,s,r
H.j(a,"$ia8")
u=this.a
u.focus()
this.f=!0
this.aJ(a)
if(this.x){t=this.at(a)
s=this.aW(a)
if(this.d.cA(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.at(a)
r=this.aw(a)
if(this.c.cA(t,r))a.preventDefault()},
hj:function(a){var u,t,s
H.j(a,"$ia8")
this.aJ(a)
u=this.at(a)
if(this.x){t=this.aW(a)
if(this.d.b1(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b1(u,s))a.preventDefault()},
h5:function(a){var u,t,s
H.j(a,"$ia8")
if(!this.bT(a)){this.aJ(a)
u=this.at(a)
if(this.x){t=this.aW(a)
if(this.d.b1(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b1(u,s))a.preventDefault()}},
hh:function(a){var u,t,s
H.j(a,"$ia8")
this.aJ(a)
u=this.at(a)
if(this.x){t=this.aW(a)
if(this.d.b0(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b0(u,s))a.preventDefault()},
h3:function(a){var u,t,s
H.j(a,"$ia8")
if(!this.bT(a)){this.aJ(a)
u=this.at(a)
if(this.x){t=this.aW(a)
if(this.d.b0(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b0(u,s))a.preventDefault()}},
hl:function(a){var u,t
H.j(a,"$ib2")
this.aJ(a)
u=new V.T((a&&C.F).gj1(a),C.F.gj2(a)).B(0,180)
if(this.x){if(this.d.jB(u))a.preventDefault()
return}if(this.r)return
t=this.aw(a)
if(this.c.jC(u,t))a.preventDefault()},
hn:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.at(this.y)
s=this.aw(this.y)
this.d.hd(t,s,u)}},
hA:function(a){var u
H.j(a,"$iaF")
this.a.focus()
this.f=!0
this.c6(a)
u=this.c2(a)
if(this.e.jz(u))a.preventDefault()},
hw:function(a){var u
H.j(a,"$iaF")
this.c6(a)
u=this.c2(a)
if(this.e.jx(u))a.preventDefault()},
hy:function(a){var u
H.j(a,"$iaF")
this.c6(a)
u=this.c2(a)
if(this.e.jy(u))a.preventDefault()},
sfn:function(a){this.z=H.n(a,"$ib",[[P.cx,P.Q]],"$ab")}}
D.bo.prototype={
gq:function(){var u=this.d
if(u==null){u=D.P()
this.d=u}return u},
ar:function(a){var u
H.j(a,"$ix")
u=this.d
if(u!=null)u.D(a)},
eV:function(){return this.ar(null)},
$ia3:1,
$ib9:1}
D.a3.prototype={$ib9:1}
D.dv.prototype={
gq:function(){var u=this.Q
if(u==null){u=D.P()
this.Q=u}return u},
ar:function(a){var u=this.Q
if(u!=null)u.D(a)},
d8:function(a){var u
H.j(a,"$ix")
u=this.ch
if(u!=null)u.D(a)},
hc:function(){return this.d8(null)},
hq:function(a){var u,t,s
H.n(a,"$ie",[D.a3],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.B)(a),++t){s=a[t]
if(s==null||this.eT(s))return!1}return!0},
fQ:function(a,b){var u,t,s,r,q,p,o,n
u=D.a3
H.n(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gd7(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=H.j(b[p],"$ia3")
if(o instanceof D.bo)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bJ()
n.sac(null)
n.saV(null)
n.c=null
n.d=0
o.d=n}H.m(s,r)
if(n.a==null)n.sac(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bM(a,b,this,[u])
u.b=!0
this.ar(u)},
hu:function(a,b){var u,t,s,r
u=D.a3
H.n(b,"$ie",[u],"$ae")
for(t=b.gS(b),s=this.gd7();t.w();){r=t.gF(t)
C.a.X(this.e,r)
r.gq().X(0,s)}u=new D.bN(a,b,this,[u])
u.b=!0
this.ar(u)},
eT:function(a){var u=C.a.U(this.e,a)
return u},
sfl:function(a){this.e=H.n(a,"$ib",[D.bo],"$ab")},
shB:function(a){this.f=H.n(a,"$ib",[D.dK],"$ab")},
shX:function(a){this.r=H.n(a,"$ib",[D.dR],"$ab")},
si9:function(a){this.x=H.n(a,"$ib",[D.dY],"$ab")},
sia:function(a){this.y=H.n(a,"$ib",[D.dZ],"$ab")},
sib:function(a){this.z=H.n(a,"$ib",[D.e_],"$ab")},
$ae:function(){return[D.a3]},
$aa1:function(){return[D.a3]}}
D.dK.prototype={$ia3:1,$ib9:1}
D.dR.prototype={$ia3:1,$ib9:1}
D.dY.prototype={$ia3:1,$ib9:1}
D.dZ.prototype={$ia3:1,$ib9:1}
D.e_.prototype={$ia3:1,$ib9:1}
V.a4.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.bH.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bH))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}}
V.fB.prototype={}
V.dC.prototype={
ab:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.A])
return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dC))return!1
u=b.a
t=$.O().a
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
u=[P.A]
t=V.c0(H.c([this.a,this.d,this.r],u),3,0)
s=V.c0(H.c([this.b,this.e,this.x],u),3,0)
r=V.c0(H.c([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.k(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.k(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.k(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.k(t,1)
n=" "+t[1]+", "
if(1>=p)return H.k(s,1)
n=n+s[1]+", "
if(1>=o)return H.k(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.k(t,2)
u=" "+t[2]+", "
if(2>=p)return H.k(s,2)
u=u+s[2]+", "
if(2>=o)return H.k(r,2)
return n+(u+r[2]+"]")}}
V.ae.prototype={
ab:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.A])
return u},
dY:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.O().a)return V.dD()
a8=1/a7
a9=-r
b0=-d
return V.aS((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
u:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aS(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cD:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.V(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
b4:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.aC(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.O().a
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
i:function(a){return this.K()},
dX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.A]
t=V.c0(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c0(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c0(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c0(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.k(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.k(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.k(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.k(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.k(t,1)
l=l+t[1]+", "
if(1>=o)return H.k(s,1)
l=l+s[1]+", "
if(1>=n)return H.k(r,1)
l=l+r[1]+", "
if(1>=m)return H.k(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.k(t,2)
p=p+t[2]+", "
if(2>=o)return H.k(s,2)
p=p+s[2]+", "
if(2>=n)return H.k(r,2)
p=p+r[2]+", "
if(2>=m)return H.k(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.k(t,3)
l=l+t[3]+", "
if(3>=o)return H.k(s,3)
l=l+s[3]+", "
if(3>=n)return H.k(r,3)
l=l+r[3]+", "
if(3>=m)return H.k(q,3)
return p+(l+q[3]+"]")},
K:function(){return this.dX("",3,0)},
v:function(a){return this.dX(a,3,0)}}
V.ab.prototype={
I:function(a,b){return new V.ab(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.aC.prototype={
I:function(a,b){return new V.aC(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aC))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.dL.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dL))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}}
V.dO.prototype={
ga6:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dO))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}}
V.T.prototype={
ct:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.G(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.G(r)
return u*t+s*r},
u:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.T(u*b,t*b)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.kZ
if(u==null){u=new V.T(0,0)
$.kZ=u}return u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.T(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.G(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.G(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.V.prototype={
ct:function(a){return Math.sqrt(this.G(this))},
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cu:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.V(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aZ:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.V(u*t-s*r,s*q-p*t,p*r-u*q)},
E:function(a,b){return new V.V(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.V(-this.a,-this.b,-this.c)},
B:function(a,b){if(Math.abs(b-0)<$.O().a)return V.eb()
return new V.V(this.a/b,this.b/b,this.c/b)},
dZ:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
U.fk.prototype={
bJ:function(a){var u=V.nb(a,this.c,this.b)
return u},
gq:function(){var u=this.y
if(u==null){u=D.P()
this.y=u}return u},
N:function(a){var u=this.y
if(u!=null)u.D(a)},
scE:function(a,b){},
scv:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.O().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bJ(t)}u=new D.L("maximumLocation",u,this.b,this,[P.A])
u.b=!0
this.N(u)}},
scz:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.O().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bJ(t)}u=new D.L("minimumLocation",u,this.c,this,[P.A])
u.b=!0
this.N(u)}},
sa5:function(a,b){var u
b=this.bJ(b)
u=this.d
if(!(Math.abs(u-b)<$.O().a)){this.d=b
u=new D.L("location",u,b,this,[P.A])
u.b=!0
this.N(u)}},
scw:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.O().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.L("maximumVelocity",u,a,this,[P.A])
u.b=!0
this.N(u)}},
sT:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.O().a)){this.f=a
u=new D.L("velocity",u,a,this,[P.A])
u.b=!0
this.N(u)}},
sci:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.O().a)){this.x=a
u=new D.L("dampening",u,a,this,[P.A])
u.b=!0
this.N(u)}},
ap:function(a,b){var u,t,s,r,q
u=this.f
t=$.O().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa5(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.O().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sT(s)}}}
U.dd.prototype={
gq:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
aQ:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dd))return!1
return J.a0(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.ch.prototype={
gq:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
N:function(a){var u
H.j(a,"$ix")
u=this.e
if(u!=null)u.D(a)},
a2:function(){return this.N(null)},
fO:function(a,b){var u,t,s,r,q,p,o,n
u=U.a9
H.n(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gaI(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.m(s,r)
if(n.a==null)n.sac(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bM(a,b,this,[u])
u.b=!0
this.N(u)},
hs:function(a,b){var u,t,s
u=U.a9
H.n(b,"$ie",[u],"$ae")
for(t=b.gS(b),s=this.gaI();t.w();)t.gF(t).gq().X(0,s)
u=new D.bN(a,b,this,[u])
u.b=!0
this.N(u)},
aQ:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.aS()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ap(u,u.length,0,[H.y(u,0)]),s=null;u.w();){t=u.d
if(t!=null){r=t.aQ(0,b,c)
if(r!=null)s=s==null?r:r.u(0,s)}}this.f=s==null?V.dD():s
u=this.e
if(u!=null)u.aA(0)}return this.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ch))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.k(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.k(r,t)
if(!J.a0(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.a9]},
$aa1:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.e8.prototype={
gq:function(){var u=this.cy
if(u==null){u=D.P()
this.cy=u}return u},
N:function(a){var u
H.j(a,"$ix")
u=this.cy
if(u!=null)u.D(a)},
a2:function(){return this.N(null)},
aY:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdA().h(0,this.gbU())
this.a.c.ge_().h(0,this.gbW())
this.a.c.gbB().h(0,this.gbY())
return!0},
bV:function(a){H.j(a,"$ix")
if(!J.a0(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bX:function(a){var u,t,s,r,q,p,o
a=H.i(H.j(a,"$ix"),"$ib8")
if(!this.y)return
if(this.x){u=a.d.I(0,a.y)
u=new V.T(u.a,u.b)
u=u.G(u)
t=this.r
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.I(0,a.y)
u=new V.T(t.a,t.b).u(0,2).B(0,u.ga6())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.u()
s=this.e
if(typeof s!=="number")return H.G(s)
t.sT(u*10*s)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=new V.T(s.a,s.b).u(0,2).B(0,u.ga6())
s=this.b
q=r.a
if(typeof q!=="number")return q.R()
p=this.e
if(typeof p!=="number")return H.G(p)
o=this.z
if(typeof o!=="number")return H.G(o)
s.sa5(0,-q*p+o)
this.b.sT(0)
t=t.I(0,a.z)
this.Q=new V.T(t.a,t.b).u(0,2).B(0,u.ga6())}this.a2()},
bZ:function(a){var u,t,s
H.j(a,"$ix")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.G(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.u()
s=this.e
if(typeof s!=="number")return H.G(s)
u.sT(t*10*s)
this.a2()}},
aQ:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.aS()
if(u<t){this.ch=t
s=b.y
this.b.ap(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aS(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia9:1}
U.e9.prototype={
gq:function(){var u=this.fx
if(u==null){u=D.P()
this.fx=u}return u},
N:function(a){var u
H.j(a,"$ix")
u=this.fx
if(u!=null)u.D(a)},
a2:function(){return this.N(null)},
aY:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdA().h(0,this.gbU())
this.a.c.ge_().h(0,this.gbW())
this.a.c.gbB().h(0,this.gbY())
u=this.a.d
t=u.f
if(t==null){t=D.P()
u.f=t
u=t}else u=t
u.h(0,this.gfG())
u=this.a.d
t=u.d
if(t==null){t=D.P()
u.d=t
u=t}else u=t
u.h(0,this.gfI())
u=this.a.e
t=u.b
if(t==null){t=D.P()
u.b=t
u=t}else u=t
u.h(0,this.gi6())
u=this.a.e
t=u.d
if(t==null){t=D.P()
u.d=t
u=t}else u=t
u.h(0,this.gi4())
u=this.a.e
t=u.c
if(t==null){t=D.P()
u.c=t
u=t}else u=t
u.h(0,this.gi2())
return!0},
aj:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.R()
u=-u}if(this.r){if(typeof t!=="number")return t.R()
t=-t}return new V.T(u,t)},
bV:function(a){a=H.i(H.j(a,"$ix"),"$ib8")
if(!J.a0(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bX:function(a){var u,t,s,r,q,p,o
a=H.i(H.j(a,"$ix"),"$ib8")
if(!this.cx)return
if(this.ch){u=a.d.I(0,a.y)
u=new V.T(u.a,u.b)
u=u.G(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.I(0,a.y)
u=this.aj(new V.T(t.a,t.b).u(0,2).B(0,u.ga6()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.R()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.R()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=this.aj(new V.T(s.a,s.b).u(0,2).B(0,u.ga6()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa5(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa5(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.I(0,a.z)
this.dx=this.aj(new V.T(t.a,t.b).u(0,2).B(0,u.ga6()))}this.a2()},
bZ:function(a){var u,t,s
H.j(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.G(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.R()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.R()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sT(-t*10*u)
this.a2()}},
fH:function(a){if(H.i(H.j(a,"$ix"),"$idz").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fJ:function(a){var u,t,s,r,q,p,o
a=H.i(H.j(a,"$ix"),"$ib8")
if(!J.a0(this.d,a.x.b))return
u=a.c
t=a.d
s=t.I(0,a.y)
r=this.aj(new V.T(s.a,s.b).u(0,2).B(0,u.ga6()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa5(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa5(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.I(0,a.z)
this.dx=this.aj(new V.T(t.a,t.b).u(0,2).B(0,u.ga6()))
this.a2()},
i7:function(a){H.j(a,"$ix")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
i5:function(a){var u,t,s,r,q,p,o
a=H.i(H.j(a,"$ix"),"$ie2")
if(!this.cx)return
if(this.ch){u=a.d.I(0,a.y)
u=new V.T(u.a,u.b)
u=u.G(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.I(0,a.y)
u=this.aj(new V.T(t.a,t.b).u(0,2).B(0,u.ga6()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.R()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.R()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=this.aj(new V.T(s.a,s.b).u(0,2).B(0,u.ga6()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa5(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa5(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.I(0,a.z)
this.dx=this.aj(new V.T(t.a,t.b).u(0,2).B(0,u.ga6()))}this.a2()},
i3:function(a){var u,t,s
H.j(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.G(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.R()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.R()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sT(-t*10*u)
this.a2()}},
aQ:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.aS()
if(u<t){this.dy=t
s=b.y
this.c.ap(0,s)
this.b.ap(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aS(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.u(0,V.aS(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia9:1}
U.ea.prototype={
gq:function(){var u=this.r
if(u==null){u=D.P()
this.r=u}return u},
N:function(a){var u=this.r
if(u!=null)u.D(a)},
aY:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.P()
u.e=t
u=t}else u=t
t=this.gfL()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.P()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fM:function(a){var u,t,s,r
H.j(a,"$ix")
if(!J.a0(this.b,this.a.b.c))return
H.i(a,"$icn")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){this.d=r
u=new D.L("zoom",u,r,this,[P.A])
u.b=!0
this.N(u)}},
aQ:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aS(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia9:1}
M.di.prototype={
as:function(a){var u
H.j(a,"$ix")
u=this.x
if(u!=null)u.D(a)},
eX:function(){return this.as(null)},
fY:function(a,b){var u,t,s,r,q,p,o,n
u=E.aj
H.n(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gai(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bJ()
n.sac(null)
n.saV(null)
n.c=null
n.d=0
o.z=n}H.m(s,r)
if(n.a==null)n.sac(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bM(a,b,this,[u])
u.b=!0
this.as(u)},
h_:function(a,b){var u,t,s
u=E.aj
H.n(b,"$ie",[u],"$ae")
for(t=b.gS(b),s=this.gai();t.w();)t.gF(t).gq().X(0,s)
u=new D.bN(a,b,this,[u])
u.b=!0
this.as(u)},
sec:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().X(0,this.gai())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.gai())
u=new D.L("technique",t,this.c,this,[O.bV])
u.b=!0
this.as(u)}},
gq:function(){var u=this.x
if(u==null){u=D.P()
this.x=u}return u},
aP:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.e9(this.c)
u=this.b
u.toString
t=a.a
C.b.iK(t,36160,null)
C.b.ck(t,2884)
C.b.ck(t,2929)
C.b.j3(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.G(s)
o=C.j.ag(p*s)
p=q.b
if(typeof r!=="number")return H.G(r)
n=C.j.ag(p*r)
p=C.j.ag(q.c*s)
a.c=p
q=C.j.ag(q.d*r)
a.d=q
C.b.jY(t,o,n,p,q)
C.b.iQ(t,u.c)
u=u.a
C.b.iP(t,u.a,u.b,u.c,u.d)
C.b.iO(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aS(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.e8(i)
t=$.kI
if(t==null){t=V.kK()
q=V.l2()
p=$.l_
if(p==null){p=new V.V(0,0,-1)
$.l_=p}p=V.kE(t,q,p)
$.kI=p
h=p}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.u(0,h)}a.db.e8(h)
u=this.c
if(u!=null)u.ap(0,a)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.y(u,0)]);u.w();)u.d.ap(0,a)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.y(u,0)]);u.w();)u.d.aP(a)
this.a.toString
a.cy.cB()
a.db.cB()
this.b.toString
a.e7()},
seW:function(a,b){this.d=H.n(b,"$ia1",[E.aj],"$aa1")},
$inj:1}
A.d6.prototype={}
A.fb.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
j9:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
C.b.dB(r.a,r.c)}},
j5:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
C.b.dz(r.a,r.c)}}}
A.h7.prototype={
eL:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.bb("")
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
a7.ih(u)
a7.ip(u)
a7.ii(u)
a7.ix(u)
a7.iy(u)
a7.ir(u)
a7.iC(u)
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
u=new P.bb("")
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
s.il(u)
s.ig(u)
s.ij(u)
s.im(u)
s.iv(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.it(u)
s.iu(u)}s.iq(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.f){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.d){m+="uniform samplerCube alphaTxt;\n"
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
case C.e:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.d:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.c([],[P.f])
if(s.b!==C.c)C.a.h(k,"ambient()")
if(s.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.ik(u)
s.is(u)
s.iw(u)
s.iz(u)
s.iA(u)
s.iB(u)
s.io(u)}m=u.a+="// === Main ===\n"
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
j=H.c([],[P.f])
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
i="vec4("+C.a.l(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.d1(n,35633)
this.f=this.d1(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.dn(s,q,this.e)
C.b.dn(s,this.r,this.f)
C.b.jk(s,this.r)
if(!H.ka(C.b.bD(s,this.r,35714))){h=C.b.eq(s,this.r)
C.b.j_(s,this.r)
H.t(P.r("Failed to link shader: "+H.l(h)))}this.hS()
this.hU()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.i(this.y.n(0,"invViewMat"),"$iat")
if(t)this.dy=H.i(this.y.n(0,"objMat"),"$iat")
if(r)this.fr=H.i(this.y.n(0,"viewObjMat"),"$iat")
this.fy=H.i(this.y.n(0,"projViewObjMat"),"$iat")
if(a7.x2)this.k1=H.i(this.y.n(0,"txt2DMat"),"$icD")
if(a7.y1)this.k2=H.i(this.y.n(0,"txtCubeMat"),"$iat")
if(a7.y2)this.k3=H.i(this.y.n(0,"colorMat"),"$iat")
this.sfb(H.c([],[A.at]))
t=a7.ao
if(t>0){this.k4=H.j(this.y.n(0,"bendMatCount"),"$iK")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.r("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.i(f,"$iat"))}}t=a7.a
if(t!==C.c){this.r2=H.i(this.y.n(0,"emissionClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.e:this.rx=H.i(this.y.n(0,"emissionTxt"),"$iaf")
this.x1=H.i(this.y.n(0,"nullEmissionTxt"),"$iK")
break
case C.d:this.ry=H.i(this.y.n(0,"emissionTxt"),"$iag")
this.x1=H.i(this.y.n(0,"nullEmissionTxt"),"$iK")
break}}t=a7.b
if(t!==C.c){this.x2=H.i(this.y.n(0,"ambientClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.e:this.y1=H.i(this.y.n(0,"ambientTxt"),"$iaf")
this.ao=H.i(this.y.n(0,"nullAmbientTxt"),"$iK")
break
case C.d:this.y2=H.i(this.y.n(0,"ambientTxt"),"$iag")
this.ao=H.i(this.y.n(0,"nullAmbientTxt"),"$iK")
break}}t=a7.c
if(t!==C.c){this.ae=H.i(this.y.n(0,"diffuseClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.e:this.bf=H.i(this.y.n(0,"diffuseTxt"),"$iaf")
this.bg=H.i(this.y.n(0,"nullDiffuseTxt"),"$iK")
break
case C.d:this.dC=H.i(this.y.n(0,"diffuseTxt"),"$iag")
this.bg=H.i(this.y.n(0,"nullDiffuseTxt"),"$iK")
break}}t=a7.d
if(t!==C.c){this.bh=H.i(this.y.n(0,"invDiffuseClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.e:this.dD=H.i(this.y.n(0,"invDiffuseTxt"),"$iaf")
this.bi=H.i(this.y.n(0,"nullInvDiffuseTxt"),"$iK")
break
case C.d:this.dE=H.i(this.y.n(0,"invDiffuseTxt"),"$iag")
this.bi=H.i(this.y.n(0,"nullInvDiffuseTxt"),"$iK")
break}}t=a7.e
if(t!==C.c){this.bl=H.i(this.y.n(0,"shininess"),"$ia_")
this.bj=H.i(this.y.n(0,"specularClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.e:this.dF=H.i(this.y.n(0,"specularTxt"),"$iaf")
this.bk=H.i(this.y.n(0,"nullSpecularTxt"),"$iK")
break
case C.d:this.dG=H.i(this.y.n(0,"specularTxt"),"$iag")
this.bk=H.i(this.y.n(0,"nullSpecularTxt"),"$iK")
break}}switch(a7.f){case C.c:break
case C.f:break
case C.e:this.dH=H.i(this.y.n(0,"bumpTxt"),"$iaf")
this.bm=H.i(this.y.n(0,"nullBumpTxt"),"$iK")
break
case C.d:this.dI=H.i(this.y.n(0,"bumpTxt"),"$iag")
this.bm=H.i(this.y.n(0,"nullBumpTxt"),"$iK")
break}if(a7.dy){this.dJ=H.i(this.y.n(0,"envSampler"),"$iag")
this.dK=H.i(this.y.n(0,"nullEnvTxt"),"$iK")
t=a7.r
if(t!==C.c){this.bn=H.i(this.y.n(0,"reflectClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.e:this.dL=H.i(this.y.n(0,"reflectTxt"),"$iaf")
this.bo=H.i(this.y.n(0,"nullReflectTxt"),"$iK")
break
case C.d:this.dM=H.i(this.y.n(0,"reflectTxt"),"$iag")
this.bo=H.i(this.y.n(0,"nullReflectTxt"),"$iK")
break}}t=a7.x
if(t!==C.c){this.bp=H.i(this.y.n(0,"refraction"),"$ia_")
this.bq=H.i(this.y.n(0,"refractClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.e:this.dN=H.i(this.y.n(0,"refractTxt"),"$iaf")
this.br=H.i(this.y.n(0,"nullRefractTxt"),"$iK")
break
case C.d:this.dO=H.i(this.y.n(0,"refractTxt"),"$iag")
this.br=H.i(this.y.n(0,"nullRefractTxt"),"$iK")
break}}}t=a7.y
if(t!==C.c){this.bs=H.i(this.y.n(0,"alpha"),"$ia_")
switch(t){case C.c:break
case C.f:break
case C.e:this.dP=H.i(this.y.n(0,"alphaTxt"),"$iaf")
this.bt=H.i(this.y.n(0,"nullAlphaTxt"),"$iK")
break
case C.d:this.dQ=H.i(this.y.n(0,"alphaTxt"),"$iag")
this.bt=H.i(this.y.n(0,"nullAlphaTxt"),"$iK")
break}}this.seY(H.c([],[A.cC]))
this.seZ(H.c([],[A.cE]))
this.sf_(H.c([],[A.cF]))
this.sf0(H.c([],[A.cG]))
this.sf1(H.c([],[A.cH]))
this.sf2(H.c([],[A.cI]))
if(a7.k2){t=a7.z
if(t>0){this.dR=H.j(this.y.n(0,"dirLightCount"),"$iK")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.cl;(s&&C.a).h(s,new A.cC(g,f,e))}}t=a7.Q
if(t>0){this.dS=H.j(this.y.n(0,"pntLightCount"),"$iK")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$ia_")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$ia_")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$ia_")
s=this.cm;(s&&C.a).h(s,new A.cE(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.dT=H.j(this.y.n(0,"spotLightCount"),"$iK")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$ia_")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$ia_")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$ia_")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$ia_")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$ia_")
s=this.cn;(s&&C.a).h(s,new A.cF(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.dU=H.j(this.y.n(0,"txtDirLightCount"),"$iK")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iI")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iK")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iaf")
s=this.co;(s&&C.a).h(s,new A.cG(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.dV=H.j(this.y.n(0,"txtPntLightCount"),"$iK")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$icD")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iK")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$ia_")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$ia_")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$ia_")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iag")
s=this.cp;(s&&C.a).h(s,new A.cH(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.dW=H.j(this.y.n(0,"txtSpotLightCount"),"$iK")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iI")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iK")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iI")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$ia_")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$ia_")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a3,"$ia_")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a4,"$ia_")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a5,"$ia_")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a6,"$iaf")
s=this.cq;(s&&C.a).h(s,new A.cI(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ad:function(a,b,c){C.b.O(b.a,b.d,1)},
a7:function(a,b,c){if(c==null||c.d<6)C.b.O(b.a,b.d,1)
else{a.eA(c)
C.b.O(b.a,b.d,0)}},
sfb:function(a){this.r1=H.n(a,"$ib",[A.at],"$ab")},
seY:function(a){this.cl=H.n(a,"$ib",[A.cC],"$ab")},
seZ:function(a){this.cm=H.n(a,"$ib",[A.cE],"$ab")},
sf_:function(a){this.cn=H.n(a,"$ib",[A.cF],"$ab")},
sf0:function(a){this.co=H.n(a,"$ib",[A.cG],"$ab")},
sf1:function(a){this.cp=H.n(a,"$ib",[A.cH],"$ab")},
sf2:function(a){this.cq=H.n(a,"$ib",[A.cI],"$ab")}}
A.ha.prototype={
ih:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ao+"];\n"
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
ip:function(a){var u
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
ii:function(a){var u
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
ix:function(a){var u,t
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
iy:function(a){var u,t
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
ir:function(a){var u
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
iC:function(a){var u
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
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.k(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.i.b6(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
il:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.au(a,u,"emission")
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
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
ig:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.au(a,u,"ambient")
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
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
ij:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.au(a,u,"diffuse")
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
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
im:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.au(a,u,"invDiffuse")
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
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
iv:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.au(a,u,"specular")
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
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
iq:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.f:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.d:u+="uniform samplerCube bumpTxt;\n"
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
case C.d:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
it:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.au(a,u,"reflect")
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
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
iu:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.au(a,u,"refract")
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
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
ik:function(a){var u,t
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
is:function(a){var u,t
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
iw:function(a){var u,t
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
iz:function(a){var u,t,s
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
iA:function(a){var u,t,s
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
iB:function(a){var u,t,s
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
io:function(a){var u
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
A.cC.prototype={}
A.cG.prototype={}
A.cE.prototype={}
A.cH.prototype={}
A.cF.prototype={}
A.cI.prototype={}
A.cu.prototype={
eO:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
d1:function(a,b){var u,t,s
u=this.a
t=C.b.iY(u,b)
C.b.eB(u,t,a)
C.b.iR(u,t)
if(!H.ka(C.b.es(u,t,35713))){s=C.b.er(u,t)
C.b.j0(u,t)
throw H.h(P.r("Error compiling shader '"+H.l(t)+"': "+H.l(s)))}return t},
hS:function(){var u,t,s,r,q,p
u=H.c([],[A.d6])
t=this.a
s=H.ac(C.b.bD(t,this.r,35721))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.ek(t,this.r,r)
p=C.b.em(t,this.r,q.name)
C.a.h(u,new A.d6(t,q.name,p))}this.x=new A.fb(u)},
hU:function(){var u,t,s,r,q,p
u=H.c([],[A.e3])
t=this.a
s=H.ac(C.b.bD(t,this.r,35718))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.el(t,this.r,r)
p=C.b.eu(t,this.r,q.name)
C.a.h(u,this.iZ(q.type,q.size,q.name,p))}this.y=new A.it(u)},
aG:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.K(u,t,b,c)
else return A.k1(u,t,b,a,c)},
fi:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.af(u,t,b,c)
else return A.k1(u,t,b,a,c)},
fj:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ag(u,t,b,c)
else return A.k1(u,t,b,a,c)},
bd:function(a,b){return new P.el(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
iZ:function(a,b,c,d){switch(a){case 5120:return this.aG(b,c,d)
case 5121:return this.aG(b,c,d)
case 5122:return this.aG(b,c,d)
case 5123:return this.aG(b,c,d)
case 5124:return this.aG(b,c,d)
case 5125:return this.aG(b,c,d)
case 5126:return new A.a_(this.a,this.r,c,d)
case 35664:return new A.io(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.ir(this.a,this.r,c,d)
case 35667:return new A.ip(this.a,this.r,c,d)
case 35668:return new A.iq(this.a,this.r,c,d)
case 35669:return new A.is(this.a,this.r,c,d)
case 35674:return new A.iu(this.a,this.r,c,d)
case 35675:return new A.cD(this.a,this.r,c,d)
case 35676:return new A.at(this.a,this.r,c,d)
case 35678:return this.fi(b,c,d)
case 35680:return this.fj(b,c,d)
case 35670:throw H.h(this.bd("BOOL",c))
case 35671:throw H.h(this.bd("BOOL_VEC2",c))
case 35672:throw H.h(this.bd("BOOL_VEC3",c))
case 35673:throw H.h(this.bd("BOOL_VEC4",c))
default:throw H.h(P.r("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bI.prototype={
i:function(a){return this.b}}
A.e3.prototype={}
A.it.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
jd:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r)s+=u[r].i(0)+a
return s},
K:function(){return this.jd("\n")}}
A.K.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.is.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.im.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
sic:function(a){this.e=H.n(a,"$ib",[P.C],"$ab")}}
A.a_.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.io.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cD.prototype={
ah:function(a){var u=new Float32Array(H.cX(H.n(a,"$ib",[P.A],"$ab")))
C.b.eg(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.at.prototype={
ah:function(a){var u=new Float32Array(H.cX(H.n(a,"$ib",[P.A],"$ab")))
C.b.eh(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.af.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.ag.prototype={
eA:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(u<6)C.b.O(t,s,0)
else C.b.O(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.ju.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cu(u.b,b).cu(u.d.cu(u.c,b),c)
u=new V.aC(t.a,t.b,t.c)
if(!J.a0(a.f,u)){a.f=u
u=a.a
if(u!=null)u.a4()}a.sjQ(t.B(0,Math.sqrt(t.G(t))))
u=1-b
s=1-c
s=new V.dL(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.a0(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.a4()}},
$S:35}
F.a5.prototype={
fa:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.eb()
if(t!=null)q=q.E(0,t)
if(s!=null)q=q.E(0,s)
if(r!=null)q=q.E(0,r)
if(q.dZ())return
return q.B(0,Math.sqrt(q.G(q)))},
fe:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.I(0,t)
u=new V.V(u.a,u.b,u.c)
q=u.B(0,Math.sqrt(u.G(u)))
u=r.I(0,t)
u=new V.V(u.a,u.b,u.c)
u=q.aZ(u.B(0,Math.sqrt(u.G(u))))
return u.B(0,Math.sqrt(u.G(u)))},
ce:function(){if(this.d!=null)return!0
var u=this.fa()
if(u==null){u=this.fe()
if(u==null)return!1}this.d=u
this.a.a.a4()
return!0},
f9:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.eb()
if(t!=null)q=q.E(0,t)
if(s!=null)q=q.E(0,s)
if(r!=null)q=q.E(0,r)
if(q.dZ())return
return q.B(0,Math.sqrt(q.G(q)))},
fd:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.O().a){u=m.I(0,p)
u=new V.V(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.G(u)))
if(j.a-k.a<0)h=h.R(0)}else{g=(u-l.b)/i
u=m.I(0,p)
u=new V.aC(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).I(0,s)
u=new V.V(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.G(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.R(0)}u=this.d
if(u!=null){f=u.B(0,Math.sqrt(u.G(u)))
u=f.aZ(h)
u=u.B(0,Math.sqrt(u.G(u))).aZ(f)
h=u.B(0,Math.sqrt(u.G(u)))}return h},
cc:function(){if(this.e!=null)return!0
var u=this.f9()
if(u==null){u=this.fd()
if(u==null)return!1}this.e=u
this.a.a.a4()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
v:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.i.aa(J.ao(u.e),0)+", "+C.i.aa(J.ao(this.b.e),0)+", "+C.i.aa(J.ao(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
K:function(){return this.v("")}}
F.b7.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
v:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.i.aa(J.ao(u.e),0)+", "+C.i.aa(J.ao(this.b.e),0)},
K:function(){return this.v("")}}
F.bv.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
v:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.i.aa(J.ao(u.e),0)},
K:function(){return this.v("")}}
F.dQ.prototype={
gq:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
jn:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.a_()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.B)(u),++r){q=u[r]
this.a.h(0,q.iU())}this.a.a_()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.B)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.a_()
n=n.e
if(typeof n!=="number")return n.E()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bv()
if(m.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.D(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.B)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.a_()
n=n.e
if(typeof n!=="number")return n.E()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.E()
o+=t
n=n.c
if(o>=n.length)return H.k(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
o=new F.b7()
n=k.a
if(n==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(n!=j.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
o.a=k
C.a.h(k.c.b,o)
o.b=j
C.a.h(j.c.c,o)
C.a.h(o.a.a.c.b,o)
o=o.a.a.e
if(o!=null)o.D(null)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.B)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.a_()
n=n.e
if(typeof n!=="number")return n.E()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.E()
o+=t
n=n.c
if(o>=n.length)return H.k(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.a_()
n=n.e
if(typeof n!=="number")return n.E()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.dj(k,j,h)}u=this.e
if(u!=null)u.aA(0)},
aM:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aM()||!1
if(!this.a.aM())t=!1
u=this.e
if(u!=null)u.aA(0)
return t},
iM:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bh()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bg().a)!==0)++r
if((s&$.bf().a)!==0)++r
if((s&$.bi().a)!==0)++r
if((s&$.bj().a)!==0)++r
if((s&$.d2().a)!==0)++r
if((s&$.d3().a)!==0)++r
if((s&$.c4().a)!==0)++r
if((s&$.be().a)!==0)++r
q=a1.gcK(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.A
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.d9])
for(m=0,l=0;l<r;++l){k=a1.iH(l)
j=k.gcK(k)
C.a.W(n,l,new Z.d9(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.k(t,i)
h=t[i].jl(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.W(o,g,h[f]);++g}}m+=j}H.n(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.am(t,34962,e)
C.b.ds(t,34962,new Float32Array(H.cX(o)),35044)
C.b.am(t,34962,null)
d=new Z.da(new Z.ec(34962,e),n,a1)
d.sfz(H.c([],[Z.bt]))
if(this.b.b.length!==0){s=P.C
c=H.c([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.a_()
C.a.h(c,b.e)}a=Z.k3(t,34963,H.n(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bt(0,c.length,a))}if(this.c.b.length!==0){s=P.C
c=H.c([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.a_()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.a_()
C.a.h(c,b.e)}a=Z.k3(t,34963,H.n(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bt(1,c.length,a))}if(this.d.b.length!==0){s=P.C
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.a_()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.a_()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].c
b.a.a.a_()
C.a.h(c,b.e)}a=Z.k3(t,34963,H.n(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bt(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.v("   "))}return C.a.l(u,"\n")},
af:function(a){var u=this.e
if(u!=null)u.D(a)},
a4:function(){return this.af(null)},
$ink:1}
F.hN.prototype={
iE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,"$ib",[F.aH],"$ab")
u=H.c([],[F.a5])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.k(c,r)
l=c[r];++r
if(r>=m)return H.k(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.k(c,j)
i=c[j]
if(s<0||s>=m)return H.k(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.dj(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dj(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dj(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dj(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
aM:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].ce())s=!1
return s},
cd:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].cc())s=!1
return s},
i:function(a){return this.K()},
v:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].v(a))
return C.a.l(u,"\n")},
K:function(){return this.v("")},
sfo:function(a){this.b=H.n(a,"$ib",[F.a5],"$ab")}}
F.hO.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
v:function(a){var u,t,s,r
u=H.c([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.k(r,s)
C.a.h(u,r[s].v(a+(""+s+". ")))}return C.a.l(u,"\n")},
K:function(){return this.v("")},
sfC:function(a){this.b=H.n(a,"$ib",[F.b7],"$ab")}}
F.hP.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
v:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].v(a))
return C.a.l(u,"\n")},
K:function(){return this.v("")},
sc1:function(a){this.b=H.n(a,"$ib",[F.bv],"$ab")}}
F.aH.prototype={
cg:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.k2(this.cx,s,p,u,t,r,q,a,o)},
iU:function(){return this.cg(null)},
sjQ:function(a){var u
if(!J.a0(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a4()}},
jl:function(a){var u,t
if(a.t(0,$.bh())){u=this.f
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bg())){u=this.r
t=[P.A]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bf())){u=this.x
t=[P.A]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bi())){u=this.y
t=[P.A]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bj())){u=this.z
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.d2())){u=this.Q
t=[P.A]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.d3())){u=this.Q
t=[P.A]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.c4()))return H.c([this.ch],[P.A])
else if(a.t(0,$.be())){u=this.cx
t=[P.A]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.A])},
ce:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.eb()
this.d.P(0,new F.iJ(u))
u=u.a
this.r=u.B(0,Math.sqrt(u.G(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.aA(0)}return!0},
cc:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.eb()
this.d.P(0,new F.iI(u))
u=u.a
this.x=u.B(0,Math.sqrt(u.G(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.aA(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
v:function(a){var u,t,s
u=H.c([],[P.f])
C.a.h(u,C.i.aa(J.ao(this.e),0))
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
C.a.h(u,V.U(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
K:function(){return this.v("")}}
F.iJ.prototype={
$1:function(a){var u,t
H.j(a,"$ia5")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.E(0,u)}},
$S:8}
F.iI.prototype={
$1:function(a){var u,t
H.j(a,"$ia5")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.E(0,u)}},
$S:8}
F.iC.prototype={
a_:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.h(P.r("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a4()
return!0},
gm:function(a){return this.c.length},
aM:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].ce()
return!0},
cd:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].cc()
return!0},
iN:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a0(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
i:function(a){return this.K()},
v:function(a){var u,t,s,r
this.a_()
u=H.c([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].v(a))
return C.a.l(u,"\n")},
K:function(){return this.v("")},
sie:function(a){this.c=H.n(a,"$ib",[F.aH],"$ab")}}
F.iD.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
P:function(a,b){H.m(b,{func:1,ret:-1,args:[F.a5]})
C.a.P(this.b,b)
C.a.P(this.c,new F.iE(this,b))
C.a.P(this.d,new F.iF(this,b))},
i:function(a){return this.K()},
v:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].v(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].v(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].v(a))
return C.a.l(u,"\n")},
K:function(){return this.v("")},
sfp:function(a){this.b=H.n(a,"$ib",[F.a5],"$ab")},
sfq:function(a){this.c=H.n(a,"$ib",[F.a5],"$ab")},
sfs:function(a){this.d=H.n(a,"$ib",[F.a5],"$ab")}}
F.iE.prototype={
$1:function(a){H.j(a,"$ia5")
if(!J.a0(a.a,this.a))this.b.$1(a)},
$S:8}
F.iF.prototype={
$1:function(a){var u
H.j(a,"$ia5")
u=this.a
if(!J.a0(a.a,u)&&!J.a0(a.b,u))this.b.$1(a)},
$S:8}
F.iG.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
v:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].v(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].v(a))
return C.a.l(u,"\n")},
K:function(){return this.v("")},
sfD:function(a){this.b=H.n(a,"$ib",[F.b7],"$ab")},
sfE:function(a){this.c=H.n(a,"$ib",[F.b7],"$ab")}}
F.iH.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
v:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].v(a))
return C.a.l(u,"\n")},
K:function(){return this.v("")},
sc1:function(a){this.b=H.n(a,"$ib",[F.bv],"$ab")}}
O.dB.prototype={
gq:function(){var u=this.dy
if(u==null){u=D.P()
this.dy=u}return u},
Z:function(a){var u
H.j(a,"$ix")
u=this.dy
if(u!=null)u.D(a)},
bI:function(){return this.Z(null)},
dd:function(a){H.j(a,"$ix")
this.a=null
this.Z(a)},
hK:function(){return this.dd(null)},
fS:function(a,b){var u=V.ae
u=new D.bM(a,H.n(b,"$ie",[u],"$ae"),this,[u])
u.b=!0
this.Z(u)},
fU:function(a,b){var u=V.ae
u=new D.bN(a,H.n(b,"$ie",[u],"$ae"),this,[u])
u.b=!0
this.Z(u)},
cZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.a0(u.e.length+3,4)*4
s=C.h.a0(u.f.length+3,4)*4
r=C.h.a0(u.r.length+3,4)*4
q=C.h.a0(u.x.length+3,4)*4
p=C.h.a0(u.y.length+3,4)*4
o=C.h.a0(u.z.length+3,4)*4
n=C.h.a0(this.e.a.length+3,4)*4
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
a2=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a3=u===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d||h===C.d||g===C.d||f===C.d
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.bh()
if(a0){b=$.bg()
a7=new Z.b1(a7.a|b.a)}if(a1){b=$.bf()
a7=new Z.b1(a7.a|b.a)}if(a2){b=$.bi()
a7=new Z.b1(a7.a|b.a)}if(a3){b=$.bj()
a7=new Z.b1(a7.a|b.a)}if(a5){b=$.be()
a7=new Z.b1(a7.a|b.a)}return new A.ha(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
V:function(a,b){H.n(a,"$ib",[T.cz],"$ab")
if(b!=null)if(!C.a.U(a,b)){b.a=a.length
C.a.h(a,b)}},
ap:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ap(u,u.length,0,[H.y(u,0)]);u.w();){t=u.d
t.toString
s=$.iB
if(s==null){s=new V.V(0,0,1)
$.iB=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cD(s)}}},
jH:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.cZ()
t=a4.fr.j(0,u.ae)
if(t==null){t=A.m6(u,a4.a)
s=t.b
if(s.length===0)H.t(P.r("May not cache a shader with no name."))
if(a4.fr.dv(0,s))H.t(P.r('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.W(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bf
u=a5.e
if(!(u instanceof Z.da)){a5.e=null
u=null}if(u==null||!u.d.t(0,q)){u=r.r1
if(u)a5.d.aM()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cd()
o.a.cd()
o=o.e
if(o!=null)o.aA(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.iN()
n=n.e
if(n!=null)n.aA(0)}l=a5.d.iM(new Z.iM(a4.a),q)
l.aO($.bh()).e=this.a.Q.c
if(u)l.aO($.bg()).e=this.a.cx.c
if(p)l.aO($.bf()).e=this.a.ch.c
if(r.rx)l.aO($.bi()).e=this.a.cy.c
if(o)l.aO($.bj()).e=this.a.db.c
if(r.x1)l.aO($.be()).e=this.a.dx.c
a5.e=l}u=T.cz
k=H.c([],[u])
p=this.a
o=a4.a
C.b.ei(o,p.r)
p.x.j9()
if(r.fx){p=this.a
n=a4.dx
n=n.gY(n)
p=p.dy
p.toString
p.ah(n.ab(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.gY(n)
m=a4.dx
m=n.u(0,m.gY(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.ah(n.ab(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gjE()
m=a4.dx
m=n.u(0,m.gY(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.ah(n.ab(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.ah(C.r.ab(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.ah(C.r.ab(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.ah(C.r.ab(n,!0))}if(r.ao>0){j=this.e.a.length
p=this.a.k4
C.b.O(p.a,p.d,j)
for(p=[P.A],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.k(m,i)
m=m[i]
n.toString
H.j(m,"$iae")
n=n.r1
if(i>=n.length)return H.k(n,i)
n=n[i]
h=new Float32Array(H.cX(H.n(m.ab(0,!0),"$ib",p,"$ab")))
C.b.eh(n.a,n.d,!1,h)}}switch(r.a){case C.c:break
case C.f:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.e:this.V(k,this.f.d)
p=this.a
n=this.f.d
p.ad(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.d:this.V(k,this.f.e)
p=this.a
n=this.f.e
p.a7(p.ry,p.x1,n)
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
case C.e:this.V(k,this.r.d)
p=this.a
n=this.r.d
p.ad(p.y1,p.ao,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.d:this.V(k,this.r.e)
p=this.a
n=this.r.e
p.a7(p.y2,p.ao,n)
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
p=p.ae
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.e:this.V(k,this.x.d)
p=this.a
n=this.x.d
p.ad(p.bf,p.bg,n)
n=this.a
p=this.x.f
n=n.ae
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.d:this.V(k,this.x.e)
p=this.a
n=this.x.e
p.a7(p.dC,p.bg,n)
n=this.a
p=this.x.f
n=n.ae
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.d){case C.c:break
case C.f:p=this.a
n=this.y.f
p=p.bh
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.e:this.V(k,this.y.d)
p=this.a
n=this.y.d
p.ad(p.dD,p.bi,n)
n=this.a
p=this.y.f
n=n.bh
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.d:this.V(k,this.y.e)
p=this.a
n=this.y.e
p.a7(p.dE,p.bi,n)
n=this.a
p=this.y.f
n=n.bh
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.e){case C.c:break
case C.f:p=this.a
n=this.z.f
p=p.bj
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bl
C.b.M(n.a,n.d,g)
break
case C.e:this.V(k,this.z.d)
p=this.a
n=this.z.d
p.ad(p.dF,p.bk,n)
n=this.a
p=this.z.f
n=n.bj
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bl
C.b.M(p.a,p.d,g)
break
case C.d:this.V(k,this.z.e)
p=this.a
n=this.z.e
p.a7(p.dG,p.bk,n)
n=this.a
p=this.z.f
n=n.bj
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bl
C.b.M(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.dR
C.b.O(p.a,p.d,j)
p=a4.db
f=p.gY(p)
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.B)(p),++d){c=p[d]
m=this.a.cl
if(e>=m.length)return H.k(m,e)
b=m[e]
m=f.cD(c.a)
g=m.a
a=m.b
a0=m.c
a0=m.B(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.p(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.p(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.dS
C.b.O(p.a,p.d,j)
p=a4.db
f=p.gY(p)
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.B)(p),++d){c=p[d]
m=this.a.cm
if(e>=m.length)return H.k(m,e)
b=m[e]
m=c.gb2(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.b4(c.gb2(c))
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gan(c)
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gc7()
g=b.e
C.b.M(g.a,g.d,m)
m=c.gc8()
g=b.f
C.b.M(g.a,g.d,m)
m=c.gc9()
g=b.r
C.b.M(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.dT
C.b.O(p.a,p.d,j)
p=a4.db
f=p.gY(p)
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.B)(p),++d){c=p[d]
m=this.a.cn
if(e>=m.length)return H.k(m,e)
b=m[e]
m=c.gb2(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gcj(c).k5()
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.b4(c.gb2(c))
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gan(c)
g=b.e
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gk0()
g=b.f
C.b.M(g.a,g.d,m)
m=c.gk_()
g=b.r
C.b.M(g.a,g.d,m)
m=c.gc7()
g=b.x
C.b.M(g.a,g.d,m)
m=c.gc8()
g=b.y
C.b.M(g.a,g.d,m)
m=c.gc9()
g=b.z
C.b.M(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.dU
C.b.O(p.a,p.d,j)
p=a4.db
f=p.gY(p)
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.B)(p),++d){c=p[d]
g=this.a.co
if(e>=g.length)return H.k(g,e)
b=g[e]
g=c.gb3()
H.n(k,"$ib",m,"$ab")
if(!C.a.U(k,g)){g.a=k.length
C.a.h(k,g)}g=c.gcj(c)
a=b.d
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=c.gbB()
a=b.b
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=c.gby(c)
a=b.c
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=f.cD(c.gcj(c))
a=g.a
a0=g.b
a1=g.c
a1=g.B(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.p(a0.a,a0.d,a,g,a1)
a1=c.gan(c)
g=b.f
C.b.p(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gb3()
g=a1.gbw(a1)
if(!g){g=b.x
C.b.O(g.a,g.d,1)}else{g=b.r
a=a1.gbw(a1)
a0=g.a
g=g.d
if(!a)C.b.O(a0,g,0)
else C.b.O(a0,g,a1.gjg(a1))
g=b.x
C.b.O(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.dV
C.b.O(p.a,p.d,j)
p=a4.db
f=p.gY(p)
for(p=this.dx.y,n=p.length,m=[P.A],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.B)(p),++d){c=p[d]
a=this.a.cp
if(e>=a.length)return H.k(a,e)
b=a[e]
a=c.gb3()
H.n(k,"$ib",g,"$ab")
if(!C.a.U(k,a)){a.a=k.length
C.a.h(k,a)}a2=f.u(0,c.gY(c))
a=c.gY(c)
a0=$.cr
if(a0==null){a0=new V.aC(0,0,0)
$.cr=a0}a0=a.b4(a0)
a=b.b
C.b.p(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cr
if(a==null){a=new V.aC(0,0,0)
$.cr=a}a=a2.b4(a)
a0=b.c
C.b.p(a0.a,a0.d,a.a,a.b,a.c)
a=a2.dY(0)
a0=b.d
h=new Float32Array(H.cX(H.n(new V.dC(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ab(0,!0),"$ib",m,"$ab")))
C.b.eg(a0.a,a0.d,!1,h)
a0=c.gan(c)
a=b.e
C.b.p(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gb3()
a=a0.gbw(a0)
if(!a){a=b.r
C.b.O(a.a,a.d,1)}else{a=b.f
a1=a0.d
a3=a.a
a=a.d
if(a1<6)C.b.O(a3,a,0)
else C.b.O(a3,a,a0.a)
a=b.r
C.b.O(a.a,a.d,0)}a=c.gc7()
a0=b.x
C.b.M(a0.a,a0.d,a)
a=c.gc8()
a0=b.y
C.b.M(a0.a,a0.d,a)
a=c.gc9()
a0=b.z
C.b.M(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.dW
C.b.O(p.a,p.d,j)
p=a4.db
f=p.gY(p)
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.B)(p),++d){c=p[d]
m=this.a.cq
if(e>=m.length)return H.k(m,e)
b=m[e]
m=c.gb3()
H.n(k,"$ib",u,"$ab")
if(!C.a.U(k,m)){m.a=k.length
C.a.h(k,m)}m=c.gb2(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gcj(c)
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gbB()
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gby(c)
g=b.e
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.b4(c.gb2(c))
g=b.f
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gb3()
g=m.gbw(m)
if(!g){m=b.x
C.b.O(m.a,m.d,1)}else{g=b.r
a=m.gbw(m)
a0=g.a
g=g.d
if(!a)C.b.O(a0,g,0)
else C.b.O(a0,g,m.gjg(m))
m=b.x
C.b.O(m.a,m.d,0)}m=c.gan(c)
g=b.y
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gk6()
g=b.z
C.b.M(g.a,g.d,m)
m=c.gk7()
g=b.Q
C.b.M(g.a,g.d,m)
m=c.gc7()
g=b.ch
C.b.M(g.a,g.d,m)
m=c.gc8()
g=b.cx
C.b.M(g.a,g.d,m)
m=c.gc9()
g=b.cy
C.b.M(g.a,g.d,m);++e}}}switch(r.f){case C.c:break
case C.f:break
case C.e:this.V(k,this.Q.d)
u=this.a
p=this.Q.d
u.ad(u.dH,u.bm,p)
break
case C.d:this.V(k,this.Q.e)
u=this.a
p=this.Q.e
u.a7(u.dI,u.bm,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.gY(p).dY(0)
a4.Q=p}u=u.id
u.toString
u.ah(p.ab(0,!0))}if(r.dy){this.V(k,this.ch)
u=this.a
p=this.ch
u.a7(u.dJ,u.dK,p)
switch(r.r){case C.c:break
case C.f:u=this.a
p=this.cx.f
u=u.bn
u.toString
n=p.a
m=p.b
p=p.c
C.b.p(u.a,u.d,n,m,p)
break
case C.e:this.V(k,this.cx.d)
u=this.a
p=this.cx.d
u.ad(u.dL,u.bo,p)
p=this.a
u=this.cx.f
p=p.bn
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
break
case C.d:this.V(k,this.cx.e)
u=this.a
p=this.cx.e
u.a7(u.dM,u.bo,p)
p=this.a
u=this.cx.f
p=p.bn
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
break}switch(r.x){case C.c:break
case C.f:u=this.a
p=this.cy.f
u=u.bq
u.toString
n=p.a
m=p.b
p=p.c
C.b.p(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bp
C.b.M(p.a,p.d,m)
break
case C.e:this.V(k,this.cy.d)
u=this.a
p=this.cy.d
u.ad(u.dN,u.br,p)
p=this.a
u=this.cy.f
p=p.bq
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bp
C.b.M(u.a,u.d,m)
break
case C.d:this.V(k,this.cy.e)
u=this.a
p=this.cy.e
u.a7(u.dO,u.br,p)
p=this.a
u=this.cy.f
p=p.bq
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bp
C.b.M(u.a,u.d,m)
break}}u=r.y
p=u!==C.c
if(p){switch(u){case C.c:break
case C.f:u=this.a
n=this.db.f
u=u.bs
C.b.M(u.a,u.d,n)
break
case C.e:this.V(k,this.db.d)
u=this.a
n=this.db.d
u.ad(u.dP,u.bt,n)
n=this.a
u=this.db.f
n=n.bs
C.b.M(n.a,n.d,u)
break
case C.d:this.V(k,this.db.e)
u=this.a
n=this.db.e
u.a7(u.dQ,u.bt,n)
n=this.a
u=this.db.f
n=n.bs
C.b.M(n.a,n.d,u)
break}C.b.ck(o,3042)
C.b.iL(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(!u.c&&u.d>=6){u.c=!0
C.b.dj(o,33984+u.a)
C.b.aL(o,34067,u.b)}}u=a5.e
u.ca(a4)
u.aP(a4)
u.jW(a4)
if(p)C.b.j4(o,3042)
for(i=0;i<k.length;++i){u=k[i]
if(u.c){u.c=!1
C.b.dj(o,33984+u.a)
C.b.aL(o,34067,null)}}u=this.a
u.toString
C.b.ei(o,null)
u.x.j5()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cZ().ae},
sfc:function(a){this.e=H.n(a,"$ia1",[V.ae],"$aa1")}}
O.h8.prototype={}
O.ck.prototype={
Z:function(a){this.a.Z(H.j(a,"$ix"))},
bI:function(){return this.Z(null)},
av:function(){},
hQ:function(a){},
hR:function(a){var u,t
u=this.e
if(u!=a){if(u!=null)u.gq().X(0,this.gb9())
t=this.e
this.e=a
if(a!=null)a.gq().h(0,this.gb9())
u=new D.L(this.b+".textureCube",t,this.e,this,[T.dX])
u.b=!0
this.a.Z(u)}}}
O.h9.prototype={}
O.aR.prototype={
df:function(a){var u,t
if(!J.a0(this.f,a)){u=this.f
this.f=a
t=new D.L(this.b+".color",u,a,this,[V.a4])
t.b=!0
this.a.Z(t)}},
av:function(){this.eI()
this.df(new V.a4(1,1,1))},
san:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.av()
u=this.a
u.a=null
u.Z(null)}this.df(b)}}
O.hb.prototype={
hP:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.O().a)){this.ch=a
u=new D.L(this.b+".refraction",u,a,this,[P.A])
u.b=!0
this.a.Z(u)}},
av:function(){this.bG()
this.hP(1)}}
O.hc.prototype={
c4:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.O().a)){this.ch=a
u=new D.L(this.b+".shininess",u,a,this,[P.A])
u.b=!0
this.a.Z(u)}},
av:function(){this.bG()
this.c4(100)}}
O.bV.prototype={}
T.cz.prototype={}
T.dX.prototype={
gq:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u}}
T.i8.prototype={
aH:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.o
W.a6(u,"load",H.m(new T.i9(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
hL:function(a,b,c){var u,t,s,r
b=V.kj(b,2)
u=V.kj(a.width,2)
t=V.kj(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jQ(null,null)
s.width=u
s.height=t
r=H.j(C.p.eo(s,"2d"),"$ibG")
r.imageSmoothingEnabled=!1;(r&&C.y).j7(r,a,0,0,s.width,s.height)
return P.mO(C.y.fw(r,0,0,s.width,s.height))}}}
T.i9.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.hL(this.b,u.c,this.c)
s=u.a
C.b.aL(s,34067,this.d)
C.b.jD(s,37440,this.e?1:0)
C.b.jO(s,this.f,0,6408,6408,5121,t)
C.b.aL(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.j8()}++u.e},
$S:26}
V.b4.prototype={
ay:function(a,b){return!0},
i:function(a){return"all"},
$iaq:1}
V.aq.prototype={}
V.dA.prototype={
ay:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)if(u[s].ay(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa1:function(a){this.a=H.n(a,"$ib",[V.aq],"$ab")},
$iaq:1}
V.ak.prototype={
ay:function(a,b){return!this.eH(0,b)},
i:function(a){return"!["+this.cL(0)+"]"}}
V.hC.prototype={
ay:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.jZ(this.a)
t=H.jZ(this.b)
return u+".."+t},
$iaq:1}
V.hM.prototype={
eN:function(a){var u,t
if(a.a.length<=0)throw H.h(P.r("May not create a SetMatcher with zero characters."))
u=new H.aP([P.C,P.M])
for(t=new H.cj(a,a.gm(a),0,[H.an(a,"v",0)]);t.w();)u.W(0,t.d,!0)
this.shO(u)},
ay:function(a,b){return this.a.dv(0,b)},
i:function(a){var u=this.a
return P.k_(new H.dw(u,[H.y(u,0)]),0,null)},
shO:function(a){this.a=H.n(a,"$iN",[P.C,P.M],"$aN")},
$iaq:1}
V.cv.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cB(this.a.k(0,b))
r.sa1(H.c([],[V.aq]))
r.c=!1
C.a.h(this.c,r)
return r},
ja:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.ay(0,a))return r}return},
i:function(a){return this.b},
si8:function(a){this.c=H.n(a,"$ib",[V.cB],"$ab")}}
V.e1.prototype={
i:function(a){var u,t
u=H.kl(this.b,"\n","\\n")
t=H.kl(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cA.prototype={
az:function(a,b,c){var u,t,s
H.n(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.B)(c),++t){s=c[t]
this.c.W(0,s,b)}},
i:function(a){return this.b},
shH:function(a){var u=P.f
this.c=H.n(a,"$iN",[u,u],"$aN")}}
V.ic.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cv(this,b)
u.si8(H.c([],[V.cB]))
u.d=null
this.a.W(0,b,u)}return u},
L:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cA(this,a)
t=P.f
u.shH(new H.aP([t,t]))
this.b.W(0,a,u)}return u},
ef:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.e1])
t=this.c
s=[P.C]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.i.aF(a,o)
m=t.ja(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.k_(r,0,null)
throw H.h(P.r("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.k_(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.e1(j==null?k.b:j,l,o)}++o}}},
shY:function(a){this.a=H.n(a,"$iN",[P.f,V.cv],"$aN")},
si1:function(a){this.b=H.n(a,"$iN",[P.f,V.cA],"$aN")}}
V.cB.prototype={
i:function(a){return this.b.b+": "+this.cL(0)}}
X.dc.prototype={$ib9:1}
X.fM.prototype={
gq:function(){var u=this.x
if(u==null){u=D.P()
this.x=u}return u}}
X.dJ.prototype={
gq:function(){var u=this.f
if(u==null){u=D.P()
this.f=u}return u},
aE:function(a){var u
H.j(a,"$ix")
u=this.f
if(u!=null)u.D(a)},
f6:function(){return this.aE(null)},
sb_:function(a){var u,t
if(!J.a0(this.b,a)){u=this.b
if(u!=null)u.gq().X(0,this.gcP())
t=this.b
this.b=a
if(a!=null)a.gq().h(0,this.gcP())
u=new D.L("mover",t,this.b,this,[U.a9])
u.b=!0
this.aE(u)}},
$ib9:1,
$idc:1}
X.dV.prototype={}
V.bm.prototype={
b8:function(a){this.b=new P.fQ(C.M)
this.c=null
this.sbR(H.c([],[[P.b,W.av]]))},
J:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.c([],[W.av]))
t=a.split("\n")
for(u=t.length,s=[W.av],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.c([],s))
o=document.createElement("div")
o.className="codePart"
H.H(p)
n=this.b.fh(p,0,p.length)
m=n==null?p:n
C.k.ey(o,H.kl(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbu(this.d),o)}},
e6:function(a,b){var u,t,s,r
H.n(b,"$ib",[P.f],"$ab")
this.sbR(H.c([],[[P.b,W.av]]))
u=C.a.l(b,"\n")
t=this.c
if(t==null){t=this.be()
this.c=t}for(t=t.ef(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)this.bx(t[r])},
sbR:function(a){this.d=H.n(a,"$ib",[[P.b,W.av]],"$ab")}}
V.jK.prototype={
$1:function(a){H.j(a,"$iaZ")
P.kk(C.j.ee(this.a.gje(),2)+" fps")},
$S:39}
V.fr.prototype={
bx:function(a){switch(a.a){case"Class":this.J(a.b,"#551")
break
case"Comment":this.J(a.b,"#777")
break
case"Id":this.J(a.b,"#111")
break
case"Num":this.J(a.b,"#191")
break
case"Reserved":this.J(a.b,"#119")
break
case"String":this.J(a.b,"#171")
break
case"Symbol":this.J(a.b,"#616")
break
case"Type":this.J(a.b,"#B11")
break
case"Whitespace":this.J(a.b,"#111")
break}},
be:function(){var u,t,s,r
u=V.id()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.u(new H.q("_"))
C.a.h(t.a,s)
s=V.X("a","z")
C.a.h(t.a,s)
s=V.X("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=V.X("0","9")
C.a.h(s.a,t)
t=V.X("a","z")
C.a.h(s.a,t)
t=V.X("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Int")
s=V.X("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").l(0,"Int")
t=V.X("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").l(0,"FloatDot")
s=V.u(new H.q("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").l(0,"Float")
t=V.X("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").l(0,"Float")
s=V.X("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Sym")
t=V.u(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").l(0,"Sym")
s=V.u(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"OpenDoubleStr")
t=V.u(new H.q('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.u(new H.q('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.u(new H.q("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.u(new H.q('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.b4())
s=u.k(0,"Start").l(0,"OpenSingleStr")
t=V.u(new H.q("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.u(new H.q("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.u(new H.q("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.u(new H.q("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.b4())
s=u.k(0,"Start").l(0,"Slash")
t=V.u(new H.q("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"Comment")
s=V.u(new H.q("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").l(0,"EndComment")
t=V.u(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").l(0,"Comment")
s=new V.ak()
r=[V.aq]
s.sa1(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"MLComment")
s=V.u(new H.q("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").l(0,"MLCStar")
t=V.u(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").l(0,"MLComment")
s=new V.ak()
s.sa1(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").l(0,"EndComment")
s=V.u(new H.q("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Whitespace")
t=V.u(new H.q(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").l(0,"Whitespace")
s=V.u(new H.q(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Int")
s.d=s.a.L("Num")
s=u.k(0,"Float")
s.d=s.a.L("Num")
s=u.k(0,"Sym")
s.d=s.a.L("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.L("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.L("String")
s=u.k(0,"EndComment")
s.d=s.a.L("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.L("Whitespace")
s=u.k(0,"Id")
t=s.a.L("Id")
s.d=t
s=[P.f]
t.az(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.az(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.az(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.fN.prototype={
bx:function(a){switch(a.a){case"Builtin":this.J(a.b,"#411")
break
case"Comment":this.J(a.b,"#777")
break
case"Id":this.J(a.b,"#111")
break
case"Num":this.J(a.b,"#191")
break
case"Preprocess":this.J(a.b,"#737")
break
case"Reserved":this.J(a.b,"#119")
break
case"Symbol":this.J(a.b,"#611")
break
case"Type":this.J(a.b,"#171")
break
case"Whitespace":this.J(a.b,"#111")
break}},
be:function(){var u,t,s,r
u=V.id()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.u(new H.q("_"))
C.a.h(t.a,s)
s=V.X("a","z")
C.a.h(t.a,s)
s=V.X("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=V.X("0","9")
C.a.h(s.a,t)
t=V.X("a","z")
C.a.h(s.a,t)
t=V.X("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Int")
s=V.X("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").l(0,"Int")
t=V.X("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").l(0,"FloatDot")
s=V.u(new H.q("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").l(0,"Float")
t=V.X("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").l(0,"Float")
s=V.X("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Sym")
t=V.u(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").l(0,"Sym")
s=V.u(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Slash")
t=V.u(new H.q("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"Comment")
s=V.u(new H.q("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").l(0,"Sym").a,new V.b4())
s=u.k(0,"Comment").l(0,"EndComment")
t=V.u(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").l(0,"Comment")
s=new V.ak()
r=[V.aq]
s.sa1(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Preprocess")
s=V.u(new H.q("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").l(0,"Preprocess")
t=new V.ak()
t.sa1(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").l(0,"EndPreprocess")
t=V.u(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Whitespace")
s=V.u(new H.q(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").l(0,"Whitespace")
t=V.u(new H.q(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Int")
t.d=t.a.L("Num")
t=u.k(0,"Float")
t.d=t.a.L("Num")
t=u.k(0,"Sym")
t.d=t.a.L("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.L("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.L("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.L("Whitespace")
t=u.k(0,"Id")
s=t.a.L("Id")
t.d=s
t=[P.f]
s.az(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.az(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.az(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return u}}
V.fO.prototype={
bx:function(a){switch(a.a){case"Attr":this.J(a.b,"#911")
this.J("=","#111")
break
case"Id":this.J(a.b,"#111")
break
case"Other":this.J(a.b,"#111")
break
case"Reserved":this.J(a.b,"#119")
break
case"String":this.J(a.b,"#171")
break
case"Symbol":this.J(a.b,"#616")
break}},
be:function(){var u,t,s
u=V.id()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.u(new H.q("_"))
C.a.h(t.a,s)
s=V.X("a","z")
C.a.h(t.a,s)
s=V.X("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=V.X("0","9")
C.a.h(s.a,t)
t=V.X("a","z")
C.a.h(s.a,t)
t=V.X("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").l(0,"Attr")
s=V.u(new H.q("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Sym")
s=V.u(new H.q("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").l(0,"Sym")
t=V.u(new H.q("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"OpenStr")
s=V.u(new H.q('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").l(0,"CloseStr")
t=V.u(new H.q('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").l(0,"EscStr")
s=V.u(new H.q("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").l(0,"OpenStr")
t=V.u(new H.q('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").l(0,"OpenStr").a,new V.b4())
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.b4())
t=u.k(0,"Other").l(0,"Other")
s=new V.ak()
s.sa1(H.c([],[V.aq]))
C.a.h(t.a,s)
t=V.u(new H.q('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.X("a","z")
C.a.h(s.a,t)
t=V.X("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.L("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.L("String")
t=u.k(0,"Id")
s=t.a.L("Id")
t.d=s
s.az(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.k(0,"Attr")
s.d=s.a.L("Attr")
s=u.k(0,"Other")
s.d=s.a.L("Other")
return u}}
V.hx.prototype={
e6:function(a,b){H.n(b,"$ib",[P.f],"$ab")
this.sbR(H.c([],[[P.b,W.av]]))
this.J(C.a.l(b,"\n"),"#111")},
bx:function(a){},
be:function(){return}}
V.hQ.prototype={
eP:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.n).A(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.n.A(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.A(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.A(q,p)}o=u.createElement("div")
this.a=o
C.k.A(q,o)
this.b=null
o=W.o
W.a6(u,"scroll",H.m(new V.hS(s),{func:1,ret:-1,args:[o]}),!1,o)},
dl:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.n(a,"$ib",[P.f],"$ab")
this.hT()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ef(C.a.jj(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.A(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.A(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.A(t,o)
break
case"Link":n=p.b
if(H.n8(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.k(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
C.k.A(t,l)}else{k=P.l7(C.C,n,C.x,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.k.A(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.A(t,o)
break}}C.k.A(this.a,t)},
en:function(a){var u,t,s,r
u=new V.fr("dart")
u.b8("dart")
t=new V.fN("glsl")
t.b8("glsl")
s=new V.fO("html")
s.b8("html")
r=C.a.jb(H.c([u,t,s],[V.bm]),new V.hT(a))
if(r!=null)return r
u=new V.hx("plain")
u.b8("plain")
return u},
dk:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.n(a7,"$ib",[P.f],"$ab")
u=H.c([],[P.C])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.kf(r).bE(r,"+")){C.a.W(a7,s,C.i.b6(r,1))
C.a.h(u,1)
t=!0}else if(C.i.bE(r,"-")){C.a.W(a7,s,C.i.b6(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.en(a5)
q.e6(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.A(o,n)
C.k.A(this.a,o)
m=P.l7(C.C,a4,C.x,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kr(null)
i.href="#"+m
i.textContent=a4
C.k.A(j,i)
C.v.A(k,j)
C.m.A(l,k)
C.o.A(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.k(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.B)(r),++a0)C.v.A(a,r[a0])
C.m.A(e,d)
C.m.A(e,c)
C.m.A(e,a)
C.o.A(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.B)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gS(r);a3.w();)C.v.A(c,a3.gF(a3))
C.m.A(e,d)
C.m.A(e,c)
C.o.A(n,e)}},
hT:function(){var u,t,s,r
if(this.b!=null)return
u=V.id()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Bold")
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").l(0,"Bold")
s=new V.ak()
r=[V.aq]
s.sa1(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").l(0,"BoldEnd")
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Italic")
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").l(0,"Italic")
s=new V.ak()
s.sa1(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").l(0,"ItalicEnd")
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Code")
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").l(0,"Code")
s=new V.ak()
s.sa1(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").l(0,"CodeEnd")
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"LinkHead")
s=V.u(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").l(0,"LinkTail")
s=V.u(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").l(0,"LinkEnd")
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").l(0,"LinkHead")
t=new V.ak()
t.sa1(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").l(0,"LinkEnd")
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").l(0,"LinkTail")
t=new V.ak()
t.sa1(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.b4())
s=u.k(0,"Other").l(0,"Other")
t=new V.ak()
t.sa1(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.L("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.L("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.L("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.L("Link")
s=u.k(0,"Other")
s.d=s.a.L("Other")
this.b=u}}
V.hS.prototype={
$1:function(a){P.kV(C.q,new V.hR(this.a))},
$S:26}
V.hR.prototype={
$0:function(){var u,t,s
u=C.j.ag(document.documentElement.scrollTop)
t=this.a.style
s=H.l(-0.01*u)+"px"
t.top=s},
$S:2}
V.hT.prototype={
$1:function(a){return H.j(a,"$ibm").a===this.a},
$S:40}
B.jH.prototype={
$1:function(a){var u,t,s,r
H.j(a,"$ix")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dk("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.dk("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a.prototype
u.eE=u.i
u=J.dt.prototype
u.eG=u.i
u=P.e.prototype
u.eF=u.bC
u=W.S.prototype
u.bF=u.a8
u=W.eG.prototype
u.eJ=u.al
u=O.ck.prototype
u.eI=u.av
u=O.aR.prototype
u.bG=u.av
u=V.dA.prototype
u.eH=u.ay
u.cL=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mI","mq",9)
u(P,"mJ","mr",9)
u(P,"mK","ms",9)
t(P,"lg","mH",3)
s(W,"mT",4,null,["$4"],["mu"],21,0)
s(W,"mU",4,null,["$4"],["mv"],21,0)
var m
r(m=E.aj.prototype,"ge4",0,0,null,["$1","$0"],["e5","ju"],0,0)
r(m,"ge2",0,0,null,["$1","$0"],["e3","jt"],0,0)
r(m,"ge0",0,0,null,["$1","$0"],["e1","jq"],0,0)
q(m,"gjo","jp",5)
q(m,"gjr","js",5)
r(m=E.e0.prototype,"gcM",0,0,null,["$1","$0"],["cO","cN"],0,0)
p(m,"gjI","ea",3)
o(m=X.e7.prototype,"gh6","h7",10)
o(m,"gfV","fW",10)
o(m,"gh0","h1",4)
o(m,"gha","hb",20)
o(m,"gh8","h9",20)
o(m,"ghe","hf",4)
o(m,"ghi","hj",4)
o(m,"gh4","h5",4)
o(m,"ghg","hh",4)
o(m,"gh2","h3",4)
o(m,"ghk","hl",42)
o(m,"ghm","hn",10)
o(m,"ghz","hA",11)
o(m,"ghv","hw",11)
o(m,"ghx","hy",11)
r(D.bo.prototype,"geU",0,0,null,["$1","$0"],["ar","eV"],0,0)
r(m=D.dv.prototype,"gd7",0,0,null,["$1","$0"],["d8","hc"],0,0)
o(m,"ghp","hq",30)
q(m,"gfP","fQ",22)
q(m,"ght","hu",22)
n(V.T.prototype,"gm","ct",23)
n(V.V.prototype,"gm","ct",23)
r(m=U.ch.prototype,"gaI",0,0,null,["$1","$0"],["N","a2"],0,0)
q(m,"gfN","fO",24)
q(m,"ghr","hs",24)
r(m=U.e8.prototype,"gaI",0,0,null,["$1","$0"],["N","a2"],0,0)
o(m,"gbU","bV",1)
o(m,"gbW","bX",1)
o(m,"gbY","bZ",1)
r(m=U.e9.prototype,"gaI",0,0,null,["$1","$0"],["N","a2"],0,0)
o(m,"gbU","bV",1)
o(m,"gbW","bX",1)
o(m,"gbY","bZ",1)
o(m,"gfG","fH",1)
o(m,"gfI","fJ",1)
o(m,"gi6","i7",1)
o(m,"gi4","i5",1)
o(m,"gi2","i3",1)
o(U.ea.prototype,"gfL","fM",1)
r(m=M.di.prototype,"gai",0,0,null,["$1","$0"],["as","eX"],0,0)
q(m,"gfX","fY",5)
q(m,"gfZ","h_",5)
r(m=O.dB.prototype,"gb9",0,0,null,["$1","$0"],["Z","bI"],0,0)
r(m,"ghJ",0,0,null,["$1","$0"],["dd","hK"],0,0)
q(m,"gfR","fS",25)
q(m,"gfT","fU",25)
r(O.ck.prototype,"gb9",0,0,null,["$1","$0"],["Z","bI"],0,0)
r(X.dJ.prototype,"gcP",0,0,null,["$1","$0"],["aE","f6"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Q,null)
s(P.Q,[H.jX,J.a,J.ap,P.et,P.e,H.cj,P.aN,H.bK,H.e6,H.hD,H.ij,P.bq,H.c9,H.eL,P.a7,H.fZ,H.h_,H.fV,P.eR,P.b3,P.az,P.ed,P.i_,P.cx,P.i0,P.aZ,P.ad,P.jt,P.jh,P.bW,P.es,P.v,P.ca,P.fR,P.jr,P.M,P.ai,P.a2,P.bp,P.hv,P.dS,P.el,P.fL,P.br,P.b,P.N,P.J,P.al,P.f,P.bb,W.fn,W.by,W.z,W.dH,W.eG,W.jm,W.dk,W.as,W.jg,W.eX,P.eW,P.jb,O.a1,O.cl,E.fg,E.aj,E.hE,E.e0,Z.ec,Z.iM,Z.da,Z.bt,Z.b1,D.fj,D.bJ,D.x,X.db,X.du,X.fX,X.h1,X.ar,X.hj,X.ie,X.e7,D.bo,D.a3,D.dK,D.dR,D.dY,D.dZ,D.e_,V.a4,V.bH,V.fB,V.dC,V.ae,V.ab,V.aC,V.dL,V.dO,V.T,V.V,U.e8,U.e9,U.ea,M.di,A.d6,A.fb,A.ha,A.cC,A.cG,A.cE,A.cH,A.cF,A.cI,A.bI,A.e3,A.it,F.a5,F.b7,F.bv,F.dQ,F.hN,F.hO,F.hP,F.aH,F.iC,F.iD,F.iG,F.iH,O.bV,O.ck,T.i8,V.b4,V.aq,V.dA,V.hC,V.hM,V.cv,V.e1,V.cA,V.ic,X.dc,X.dV,X.dJ,V.bm,V.hQ])
s(J.a,[J.fU,J.dr,J.dt,J.aO,J.ds,J.bO,H.cp,W.d,W.f9,W.d7,W.bG,W.aJ,W.aK,W.R,W.ef,W.fs,W.ft,W.df,W.eh,W.dh,W.ej,W.fv,W.o,W.em,W.aM,W.fP,W.eo,W.bs,W.dy,W.hd,W.eu,W.ev,W.aT,W.ew,W.ez,W.aU,W.eD,W.dN,W.eF,W.aW,W.eH,W.aX,W.eM,W.aD,W.eP,W.ib,W.b_,W.eS,W.ih,W.iy,W.eY,W.f_,W.f1,W.f3,W.f5,P.b6,P.eq,P.ba,P.eB,P.hA,P.eN,P.bc,P.eU,P.fc,P.ee,P.d8,P.dl,P.dM,P.bT,P.dP,P.dW,P.e4,P.eJ])
s(J.dt,[J.hw,J.cJ,J.bu])
t(J.jW,J.aO)
s(J.ds,[J.dq,J.dp])
t(P.h0,P.et)
s(P.h0,[H.e5,W.iT,W.ah,P.fH])
t(H.q,H.e5)
s(P.e,[H.fy,H.h4,H.cK])
s(H.fy,[H.bP,H.dw])
s(P.aN,[H.h5,H.iN])
t(H.h6,H.bP)
s(P.bq,[H.hs,H.fW,H.iw,H.il,H.fi,H.hK,P.dI,P.aB,P.ix,P.iv,P.cw,P.fl,P.fq])
s(H.c9,[H.jL,H.i5,H.jD,H.jE,H.jF,P.iP,P.iO,P.iQ,P.iR,P.jq,P.jp,P.iZ,P.j2,P.j_,P.j0,P.j1,P.j5,P.j6,P.j4,P.j3,P.i1,P.i2,P.jx,P.je,P.jd,P.jf,P.h3,P.fw,P.fx,W.fz,W.hf,W.hh,W.hJ,W.hZ,W.iY,W.hr,W.hq,W.ji,W.jj,W.jo,W.js,P.jz,P.fI,P.fJ,P.fe,E.hF,E.hG,E.hH,E.ia,D.fD,D.fE,F.ju,F.iJ,F.iI,F.iE,F.iF,T.i9,V.jK,V.hS,V.hR,V.hT,B.jH])
s(H.i5,[H.hX,H.c7])
t(P.h2,P.a7)
s(P.h2,[H.aP,W.iS])
t(H.dE,H.cp)
s(H.dE,[H.cO,H.cQ])
t(H.cP,H.cO)
t(H.co,H.cP)
t(H.cR,H.cQ)
t(H.dF,H.cR)
s(H.dF,[H.hk,H.hl,H.hm,H.hn,H.ho,H.dG,H.hp])
t(P.jc,P.jt)
t(P.ja,P.jh)
t(P.cb,P.i0)
t(P.fA,P.ca)
s(P.cb,[P.fQ,P.iA])
t(P.iz,P.fA)
s(P.a2,[P.A,P.C])
s(P.aB,[P.bS,P.fS])
s(W.d,[W.D,W.fG,W.aV,W.cS,W.aY,W.aE,W.cU,W.iL,W.cL,P.ff,P.bE])
s(W.D,[W.S,W.bl,W.ce,W.cM])
s(W.S,[W.w,P.p])
s(W.w,[W.d5,W.fa,W.c6,W.bk,W.bF,W.av,W.fK,W.dm,W.ci,W.cm,W.hL,W.bU,W.dT,W.dU,W.i4,W.cy])
s(W.aJ,[W.cc,W.fo,W.fp])
t(W.fm,W.aK)
t(W.cd,W.ef)
t(W.ei,W.eh)
t(W.dg,W.ei)
t(W.ek,W.ej)
t(W.fu,W.ek)
t(W.aL,W.d7)
t(W.en,W.em)
t(W.fF,W.en)
t(W.ep,W.eo)
t(W.bL,W.ep)
t(W.dn,W.ce)
t(W.bx,W.o)
s(W.bx,[W.aQ,W.a8,W.aF])
t(W.he,W.eu)
t(W.hg,W.ev)
t(W.ex,W.ew)
t(W.hi,W.ex)
t(W.eA,W.ez)
t(W.cq,W.eA)
t(W.eE,W.eD)
t(W.hy,W.eE)
t(W.hI,W.eF)
t(W.cT,W.cS)
t(W.hU,W.cT)
t(W.eI,W.eH)
t(W.hV,W.eI)
t(W.hY,W.eM)
t(W.eQ,W.eP)
t(W.i6,W.eQ)
t(W.cV,W.cU)
t(W.i7,W.cV)
t(W.eT,W.eS)
t(W.ig,W.eT)
t(W.iK,W.cm)
t(W.b2,W.a8)
t(W.eZ,W.eY)
t(W.iU,W.eZ)
t(W.eg,W.dh)
t(W.f0,W.f_)
t(W.j7,W.f0)
t(W.f2,W.f1)
t(W.ey,W.f2)
t(W.f4,W.f3)
t(W.jk,W.f4)
t(W.f6,W.f5)
t(W.jl,W.f6)
t(W.iV,W.iS)
t(W.iW,P.i_)
t(W.k4,W.iW)
t(W.iX,P.cx)
t(W.jn,W.eG)
t(P.aa,P.jb)
t(P.er,P.eq)
t(P.fY,P.er)
t(P.eC,P.eB)
t(P.ht,P.eC)
t(P.ct,P.p)
t(P.eO,P.eN)
t(P.i3,P.eO)
t(P.eV,P.eU)
t(P.ii,P.eV)
t(P.fd,P.ee)
t(P.hu,P.bE)
t(P.eK,P.eJ)
t(P.hW,P.eK)
s(E.fg,[Z.d9,A.cu,T.cz])
s(D.x,[D.bM,D.bN,D.L,X.hz])
s(X.hz,[X.dz,X.b8,X.cn,X.e2])
s(O.a1,[D.dv,U.ch])
s(D.fj,[U.fk,U.a9])
t(U.dd,U.a9)
t(A.h7,A.cu)
s(A.e3,[A.K,A.ip,A.iq,A.is,A.im,A.a_,A.io,A.I,A.ir,A.iu,A.cD,A.at,A.af,A.ag])
t(O.dB,O.bV)
s(O.ck,[O.h8,O.h9,O.aR])
s(O.aR,[O.hb,O.hc])
t(T.dX,T.cz)
s(V.dA,[V.ak,V.cB])
t(X.fM,X.dV)
s(V.bm,[V.fr,V.fN,V.fO,V.hx])
u(H.e5,H.e6)
u(H.cO,P.v)
u(H.cP,H.bK)
u(H.cQ,P.v)
u(H.cR,H.bK)
u(P.et,P.v)
u(W.ef,W.fn)
u(W.eh,P.v)
u(W.ei,W.z)
u(W.ej,P.v)
u(W.ek,W.z)
u(W.em,P.v)
u(W.en,W.z)
u(W.eo,P.v)
u(W.ep,W.z)
u(W.eu,P.a7)
u(W.ev,P.a7)
u(W.ew,P.v)
u(W.ex,W.z)
u(W.ez,P.v)
u(W.eA,W.z)
u(W.eD,P.v)
u(W.eE,W.z)
u(W.eF,P.a7)
u(W.cS,P.v)
u(W.cT,W.z)
u(W.eH,P.v)
u(W.eI,W.z)
u(W.eM,P.a7)
u(W.eP,P.v)
u(W.eQ,W.z)
u(W.cU,P.v)
u(W.cV,W.z)
u(W.eS,P.v)
u(W.eT,W.z)
u(W.eY,P.v)
u(W.eZ,W.z)
u(W.f_,P.v)
u(W.f0,W.z)
u(W.f1,P.v)
u(W.f2,W.z)
u(W.f3,P.v)
u(W.f4,W.z)
u(W.f5,P.v)
u(W.f6,W.z)
u(P.eq,P.v)
u(P.er,W.z)
u(P.eB,P.v)
u(P.eC,W.z)
u(P.eN,P.v)
u(P.eO,W.z)
u(P.eU,P.v)
u(P.eV,W.z)
u(P.ee,P.a7)
u(P.eJ,P.v)
u(P.eK,W.z)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bk.prototype
C.p=W.bF.prototype
C.y=W.bG.prototype
C.k=W.av.prototype
C.J=W.df.prototype
C.L=W.dm.prototype
C.z=W.dn.prototype
C.N=J.a.prototype
C.a=J.aO.prototype
C.O=J.dp.prototype
C.h=J.dq.prototype
C.r=J.dr.prototype
C.j=J.ds.prototype
C.i=J.bO.prototype
C.V=J.bu.prototype
C.Z=W.cq.prototype
C.D=J.hw.prototype
C.E=W.dN.prototype
C.b=P.bT.prototype
C.v=W.bU.prototype
C.o=W.dT.prototype
C.m=W.dU.prototype
C.w=J.cJ.prototype
C.F=W.b2.prototype
C.G=W.cL.prototype
C.H=new P.hv()
C.I=new P.iA()
C.l=new P.jc()
C.c=new A.bI(0,"ColorSourceType.None")
C.f=new A.bI(1,"ColorSourceType.Solid")
C.e=new A.bI(2,"ColorSourceType.Texture2D")
C.d=new A.bI(3,"ColorSourceType.TextureCube")
C.q=new P.bp(0)
C.K=new P.bp(5e6)
C.M=new P.fR("element",!0,!1,!1,!1)
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
C.W=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.X=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.Y=H.c(u([]),[P.f])
C.C=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.t=H.c(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.u=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.x=new P.iz(!1)})();(function staticFields(){$.aI=0
$.c8=null
$.ks=null
$.k6=!1
$.lj=null
$.le=null
$.lo=null
$.jA=null
$.jG=null
$.kg=null
$.bX=null
$.cY=null
$.cZ=null
$.k7=!1
$.Y=C.l
$.b5=null
$.jT=null
$.kz=null
$.ky=null
$.kF=null
$.kJ=null
$.cr=null
$.kP=null
$.kZ=null
$.l1=null
$.l0=null
$.iB=null
$.l_=null
$.kI=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ng","lr",function(){return H.li("_$dart_dartClosure")})
u($,"nh","km",function(){return H.li("_$dart_js")})
u($,"nm","ls",function(){return H.b0(H.ik({
toString:function(){return"$receiver$"}}))})
u($,"nn","lt",function(){return H.b0(H.ik({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"no","lu",function(){return H.b0(H.ik(null))})
u($,"np","lv",function(){return H.b0(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ns","ly",function(){return H.b0(H.ik(void 0))})
u($,"nt","lz",function(){return H.b0(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nr","lx",function(){return H.b0(H.kX(null))})
u($,"nq","lw",function(){return H.b0(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nv","lB",function(){return H.b0(H.kX(void 0))})
u($,"nu","lA",function(){return H.b0(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nM","kn",function(){return P.mp()})
u($,"nQ","d4",function(){return[]})
u($,"nP","lG",function(){return P.mh("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"nN","lF",function(){return P.kC(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"nO","ko",function(){return P.kB(P.f,P.br)})
u($,"nF","lE",function(){return Z.ay(0)})
u($,"nz","lC",function(){return Z.ay(511)})
u($,"nH","bh",function(){return Z.ay(1)})
u($,"nG","bg",function(){return Z.ay(2)})
u($,"nB","bf",function(){return Z.ay(4)})
u($,"nI","bi",function(){return Z.ay(8)})
u($,"nJ","bj",function(){return Z.ay(16)})
u($,"nC","d2",function(){return Z.ay(32)})
u($,"nD","d3",function(){return Z.ay(64)})
u($,"nE","lD",function(){return Z.ay(96)})
u($,"nK","c4",function(){return Z.ay(128)})
u($,"nA","be",function(){return Z.ay(256)})
u($,"nf","lq",function(){return new V.fB(1e-9)})
u($,"ne","O",function(){return $.lq()})})()
var v={mangledGlobalNames:{C:"int",A:"double",a2:"num",f:"String",M:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.a8]},{func:1,ret:-1,args:[P.C,[P.e,E.aj]]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.J,args:[D.x]},{func:1,ret:P.J,args:[F.a5]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:P.J,args:[,]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.f,args:[P.C]},{func:1,ret:P.M,args:[W.D]},{func:1,args:[,]},{func:1,ret:P.M,args:[W.as]},{func:1,ret:P.M,args:[P.f]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[W.aQ]},{func:1,ret:P.M,args:[W.S,P.f,P.f,W.by]},{func:1,ret:-1,args:[P.C,[P.e,D.a3]]},{func:1,ret:P.A},{func:1,ret:-1,args:[P.C,[P.e,U.a9]]},{func:1,ret:-1,args:[P.C,[P.e,V.ae]]},{func:1,ret:P.J,args:[W.o]},{func:1,args:[W.o]},{func:1,ret:-1,args:[W.D,W.D]},{func:1,ret:W.S,args:[W.D]},{func:1,ret:P.M,args:[[P.e,D.a3]]},{func:1,ret:[P.az,,],args:[,]},{func:1,ret:P.J,args:[,],opt:[P.al]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.J,args:[P.a2]},{func:1,ret:P.J,args:[F.aH,P.A,P.A]},{func:1,args:[P.f]},{func:1,args:[,P.f]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[P.aZ]},{func:1,ret:P.M,args:[V.bm]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[W.b2]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cp,ArrayBufferView:H.cp,Float32Array:H.co,Float64Array:H.co,Int16Array:H.hk,Int32Array:H.hl,Int8Array:H.hm,Uint16Array:H.hn,Uint32Array:H.ho,Uint8ClampedArray:H.dG,CanvasPixelArray:H.dG,Uint8Array:H.hp,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLInputElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.f9,HTMLAnchorElement:W.d5,HTMLAreaElement:W.fa,HTMLBaseElement:W.c6,Blob:W.d7,HTMLBodyElement:W.bk,HTMLCanvasElement:W.bF,CanvasRenderingContext2D:W.bG,CDATASection:W.bl,CharacterData:W.bl,Comment:W.bl,ProcessingInstruction:W.bl,Text:W.bl,CSSNumericValue:W.cc,CSSUnitValue:W.cc,CSSPerspective:W.fm,CSSCharsetRule:W.R,CSSConditionRule:W.R,CSSFontFaceRule:W.R,CSSGroupingRule:W.R,CSSImportRule:W.R,CSSKeyframeRule:W.R,MozCSSKeyframeRule:W.R,WebKitCSSKeyframeRule:W.R,CSSKeyframesRule:W.R,MozCSSKeyframesRule:W.R,WebKitCSSKeyframesRule:W.R,CSSMediaRule:W.R,CSSNamespaceRule:W.R,CSSPageRule:W.R,CSSRule:W.R,CSSStyleRule:W.R,CSSSupportsRule:W.R,CSSViewportRule:W.R,CSSStyleDeclaration:W.cd,MSStyleCSSProperties:W.cd,CSS2Properties:W.cd,CSSImageValue:W.aJ,CSSKeywordValue:W.aJ,CSSPositionValue:W.aJ,CSSResourceValue:W.aJ,CSSURLImageValue:W.aJ,CSSStyleValue:W.aJ,CSSMatrixComponent:W.aK,CSSRotation:W.aK,CSSScale:W.aK,CSSSkew:W.aK,CSSTranslation:W.aK,CSSTransformComponent:W.aK,CSSTransformValue:W.fo,CSSUnparsedValue:W.fp,DataTransferItemList:W.fs,HTMLDivElement:W.av,XMLDocument:W.ce,Document:W.ce,DOMException:W.ft,DOMImplementation:W.df,ClientRectList:W.dg,DOMRectList:W.dg,DOMRectReadOnly:W.dh,DOMStringList:W.fu,DOMTokenList:W.fv,Element:W.S,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aL,FileList:W.fF,FileWriter:W.fG,HTMLFormElement:W.fK,Gamepad:W.aM,HTMLHeadElement:W.dm,History:W.fP,HTMLCollection:W.bL,HTMLFormControlsCollection:W.bL,HTMLOptionsCollection:W.bL,HTMLDocument:W.dn,ImageData:W.bs,HTMLImageElement:W.ci,KeyboardEvent:W.aQ,Location:W.dy,HTMLAudioElement:W.cm,HTMLMediaElement:W.cm,MediaList:W.hd,MIDIInputMap:W.he,MIDIOutputMap:W.hg,MimeType:W.aT,MimeTypeArray:W.hi,PointerEvent:W.a8,MouseEvent:W.a8,DragEvent:W.a8,DocumentFragment:W.D,ShadowRoot:W.D,DocumentType:W.D,Node:W.D,NodeList:W.cq,RadioNodeList:W.cq,Plugin:W.aU,PluginArray:W.hy,Range:W.dN,RTCStatsReport:W.hI,HTMLSelectElement:W.hL,SourceBuffer:W.aV,SourceBufferList:W.hU,SpeechGrammar:W.aW,SpeechGrammarList:W.hV,SpeechRecognitionResult:W.aX,Storage:W.hY,CSSStyleSheet:W.aD,StyleSheet:W.aD,HTMLTableCellElement:W.bU,HTMLTableDataCellElement:W.bU,HTMLTableHeaderCellElement:W.bU,HTMLTableElement:W.dT,HTMLTableRowElement:W.dU,HTMLTableSectionElement:W.i4,HTMLTemplateElement:W.cy,TextTrack:W.aY,TextTrackCue:W.aE,VTTCue:W.aE,TextTrackCueList:W.i6,TextTrackList:W.i7,TimeRanges:W.ib,Touch:W.b_,TouchEvent:W.aF,TouchList:W.ig,TrackDefaultList:W.ih,CompositionEvent:W.bx,FocusEvent:W.bx,TextEvent:W.bx,UIEvent:W.bx,URL:W.iy,HTMLVideoElement:W.iK,VideoTrackList:W.iL,WheelEvent:W.b2,Window:W.cL,DOMWindow:W.cL,Attr:W.cM,CSSRuleList:W.iU,ClientRect:W.eg,DOMRect:W.eg,GamepadList:W.j7,NamedNodeMap:W.ey,MozNamedAttrMap:W.ey,SpeechRecognitionResultList:W.jk,StyleSheetList:W.jl,SVGLength:P.b6,SVGLengthList:P.fY,SVGNumber:P.ba,SVGNumberList:P.ht,SVGPointList:P.hA,SVGScriptElement:P.ct,SVGStringList:P.i3,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bc,SVGTransformList:P.ii,AudioBuffer:P.fc,AudioParamMap:P.fd,AudioTrackList:P.ff,AudioContext:P.bE,webkitAudioContext:P.bE,BaseAudioContext:P.bE,OfflineAudioContext:P.hu,WebGLBuffer:P.d8,WebGLFramebuffer:P.dl,WebGLProgram:P.dM,WebGL2RenderingContext:P.bT,WebGLShader:P.dP,WebGLTexture:P.dW,WebGLUniformLocation:P.e4,SQLResultSetRowList:P.hW})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dE.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.dF.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(B.ll,[])
else B.ll([])})})()
//# sourceMappingURL=test.dart.js.map
