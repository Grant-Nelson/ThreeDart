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
a[c]=function(){a[c]=function(){H.mo(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jB(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jl:function jl(a){this.a=a},
lb:function(){return new P.hx("No element")},
a0:function a0(a){this.a=a},
ff:function ff(){},
di:function di(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fL:function fL(a,b,c){this.a=a
this.b=b
this.$ti=c},
fM:function fM(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
il:function il(a,b,c){this.a=a
this.b=b
this.$ti=c},
im:function im(a,b,c){this.a=a
this.b=b
this.$ti=c},
bE:function bE(){},
dO:function dO(){},
dN:function dN(){},
bT:function(a){var u,t
u=H.R(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
m7:function(a){return v.types[H.a8(a)]},
mc:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iE},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aq(a)
if(typeof u!=="string")throw H.h(H.bO(a))
return u},
lv:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fy(u)
t=u[0]
s=u[1]
return new H.hd(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
ck:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bH:function(a){return H.ll(a)+H.jz(H.bw(a),0,null)},
ll:function(a){var u,t,s,r,q,p,o,n,m
u=J.X(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.D||!!u.$idM){p=C.u(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bT(r.length>1&&C.j.b7(r,0)===36?C.j.cH(r,1):r)},
k4:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
lu:function(a){var u,t,s,r
u=H.c([],[P.A])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.h(H.bO(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.ba(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.h(H.bO(r))}return H.k4(u)},
k5:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bO(s))
if(s<0)throw H.h(H.bO(s))
if(s>65535)return H.lu(a)}return H.k4(a)},
lt:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.ba(u,10))>>>0,56320|u&1023)}throw H.h(P.av(a,0,1114111,null,null))},
bG:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ls:function(a){var u=H.bG(a).getFullYear()+0
return u},
lq:function(a){var u=H.bG(a).getMonth()+1
return u},
lm:function(a){var u=H.bG(a).getDate()+0
return u},
ln:function(a){var u=H.bG(a).getHours()+0
return u},
lp:function(a){var u=H.bG(a).getMinutes()+0
return u},
lr:function(a){var u=H.bG(a).getSeconds()+0
return u},
lo:function(a){var u=H.bG(a).getMilliseconds()+0
return u},
D:function(a){throw H.h(H.bO(a))},
i:function(a,b){if(a==null)J.bW(a)
throw H.h(H.cQ(a,b))},
cQ:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,"index",null)
u=H.a8(J.bW(a))
if(!(b<0)){if(typeof u!=="number")return H.D(u)
t=b>=u}else t=!0
if(t)return P.T(b,a,"index",null,u)
return P.hc(b,"index",null)},
m4:function(a,b,c){if(a>c)return new P.bI(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bI(a,c,!0,b,"end","Invalid value")
return new P.aC(!0,b,"end",null)},
bO:function(a){return new P.aC(!0,a,null,null)},
m0:function(a){if(typeof a!=="number")throw H.h(H.bO(a))
return a},
h:function(a){var u
if(a==null)a=new P.ds()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kH})
u.name=""}else u.toString=H.kH
return u},
kH:function(){return J.aq(this.dartException)},
t:function(a){throw H.h(a)},
z:function(a){throw H.h(P.c1(a))},
aY:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hS(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hT:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kd:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k_:function(a,b){return new H.h4(a,b==null?null:b.method)},
jm:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fB(a,t,u?null:b.receiver)},
bx:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jc(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.ba(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jm(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.k_(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.kK()
p=$.kL()
o=$.kM()
n=$.kN()
m=$.kQ()
l=$.kR()
k=$.kP()
$.kO()
j=$.kT()
i=$.kS()
h=q.a9(t)
if(h!=null)return u.$1(H.jm(H.R(t),h))
else{h=p.a9(t)
if(h!=null){h.method="call"
return u.$1(H.jm(H.R(t),h))}else{h=o.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=m.a9(t)
if(h==null){h=l.a9(t)
if(h==null){h=k.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=j.a9(t)
if(h==null){h=i.a9(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.k_(H.R(t),h))}}return u.$1(new H.i3(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dB()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aC(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dB()
return a},
bR:function(a){var u
if(a==null)return new H.er(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.er(a)},
m6:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.W(0,a[t],a[s])}return b},
mb:function(a,b,c,d,e,f){H.k(a,"$ijh")
switch(H.a8(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.r("Unsupported number of arguments for wrapped closure"))},
bP:function(a,b){var u
H.a8(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mb)
a.$identity=u
return u},
l5:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.X(d).$ib){u.$reflectionInfo=d
s=H.lv(u).r}else s=d
r=e?Object.create(new H.hy().constructor.prototype):Object.create(new H.bX(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aD
if(typeof p!=="number")return p.D()
$.aD=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jR(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.m7,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jP:H.je
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.h("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jR(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
l2:function(a,b,c,d){var u=H.je
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jR:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l4(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l2(t,!r,u,b)
if(t===0){r=$.aD
if(typeof r!=="number")return r.D()
$.aD=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bY
if(q==null){q=H.eZ("self")
$.bY=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aD
if(typeof r!=="number")return r.D()
$.aD=r+1
o+=r
r="return function("+o+"){return this."
q=$.bY
if(q==null){q=H.eZ("self")
$.bY=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
l3:function(a,b,c,d){var u,t
u=H.je
t=H.jP
switch(b?-1:a){case 0:throw H.h(H.lz("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l4:function(a,b){var u,t,s,r,q,p,o,n
u=$.bY
if(u==null){u=H.eZ("self")
$.bY=u}t=$.jO
if(t==null){t=H.eZ("receiver")
$.jO=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.l3(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.aD
if(typeof t!=="number")return t.D()
$.aD=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.aD
if(typeof t!=="number")return t.D()
$.aD=t+1
return new Function(u+t+"}")()},
jB:function(a,b,c,d,e,f,g){return H.l5(a,b,H.a8(c),d,!!e,!!f,g)},
je:function(a){return a.a},
jP:function(a){return a.c},
eZ:function(a){var u,t,s,r,q
u=new H.bX("self","target","receiver","name")
t=J.fy(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aA(a,"String"))},
n1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aA(a,"double"))},
mh:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aA(a,"num"))},
kx:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aA(a,"bool"))},
a8:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aA(a,"int"))},
kE:function(a,b){throw H.h(H.aA(a,H.bT(H.R(b).substring(2))))},
mj:function(a,b){throw H.h(H.l1(a,H.bT(H.R(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.kE(a,b)},
f:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.mj(a,b)},
jG:function(a){if(a==null)return a
if(!!J.X(a).$ib)return a
throw H.h(H.aA(a,"List<dynamic>"))},
md:function(a,b){var u
if(a==null)return a
u=J.X(a)
if(!!u.$ib)return a
if(u[b])return a
H.kE(a,b)},
ky:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a8(u)]
else return a.$S()}return},
eN:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.ky(J.X(a))
if(u==null)return!1
return H.ko(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.jw)return a
$.jw=!0
try{if(H.eN(a,b))return a
u=H.ja(b)
t=H.aA(a,u)
throw H.h(t)}finally{$.jw=!1}},
jC:function(a,b){if(a!=null&&!H.jA(a,b))H.t(H.aA(a,H.ja(b)))
return a},
aA:function(a,b){return new H.hU("TypeError: "+P.fj(a)+": type '"+H.ks(a)+"' is not a subtype of type '"+b+"'")},
l1:function(a,b){return new H.f_("CastError: "+P.fj(a)+": type '"+H.ks(a)+"' is not a subtype of type '"+b+"'")},
ks:function(a){var u,t
u=J.X(a)
if(!!u.$ic_){t=H.ky(u)
if(t!=null)return H.ja(t)
return"Closure"}return H.bH(a)},
mo:function(a){throw H.h(new P.f8(H.R(a)))},
lz:function(a){return new H.hl(a)},
kz:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bw:function(a){if(a==null)return
return a.$ti},
n2:function(a,b,c){return H.bS(a["$a"+H.m(c)],H.bw(b))},
cR:function(a,b,c,d){var u
H.R(c)
H.a8(d)
u=H.bS(a["$a"+H.m(c)],H.bw(b))
return u==null?null:u[d]},
ap:function(a,b,c){var u
H.R(b)
H.a8(c)
u=H.bS(a["$a"+H.m(b)],H.bw(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.a8(b)
u=H.bw(a)
return u==null?null:u[b]},
ja:function(a){return H.bv(a,null)},
bv:function(a,b){var u,t
H.j(b,"$ib",[P.o],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bT(a[0].name)+H.jz(a,1,b)
if(typeof a=="function")return H.bT(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a8(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.i(b,t)
return H.m(b[t])}if('func' in a)return H.lR(a,b)
if('futureOr' in a)return"FutureOr<"+H.bv("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lR:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.o]
H.j(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.i(b,m)
o=C.j.D(o,b[m])
l=t[p]
if(l!=null&&l!==P.N)o+=" extends "+H.bv(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bv(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bv(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bv(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.m5(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.R(u[g])
i=i+h+H.bv(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jz:function(a,b,c){var u,t,s,r,q,p
H.j(c,"$ib",[P.o],"$ab")
if(a==null)return""
u=new P.br("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bv(p,c)}return"<"+u.i(0)+">"},
bS:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cP:function(a,b,c,d){var u,t
H.R(b)
H.jG(c)
H.R(d)
if(a==null)return!1
u=H.bw(a)
t=J.X(a)
if(t[b]==null)return!1
return H.kv(H.bS(t[d],u),null,c,null)},
j:function(a,b,c,d){H.R(b)
H.jG(c)
H.R(d)
if(a==null)return a
if(H.cP(a,b,c,d))return a
throw H.h(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bT(b.substring(2))+H.jz(c,0,null),v.mangledGlobalNames)))},
kv:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.at(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.at(a[t],b,c[t],d))return!1
return!0},
n_:function(a,b,c){return a.apply(b,H.bS(J.X(b)["$a"+H.m(c)],H.bw(b)))},
kB:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="N"||a.name==="H"||a===-1||a===-2||H.kB(u)}return!1},
jA:function(a,b){var u,t
if(a==null)return b==null||b.name==="N"||b.name==="H"||b===-1||b===-2||H.kB(b)
if(b==null||b===-1||b.name==="N"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jA(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eN(a,b)}u=J.X(a).constructor
t=H.bw(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.at(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.jA(a,b))throw H.h(H.aA(a,H.ja(b)))
return a},
at:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="N"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="N"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.at(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="H")return!0
if('func' in c)return H.ko(a,b,c,d)
if('func' in a)return c.name==="jh"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.at("type" in a?a.type:null,b,s,d)
else if(H.at(a,b,s,d))return!0
else{if(!('$i'+"c8" in t.prototype))return!1
r=t.prototype["$a"+"c8"]
q=H.bS(r,u?a.slice(1):null)
return H.at(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.kv(H.bS(m,u),b,p,d)},
ko:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.at(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.at(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.at(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.at(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mg(h,b,g,d)},
mg:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.at(c[r],d,a[r],b))return!1}return!0},
n0:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
me:function(a){var u,t,s,r,q,p
u=H.R($.kA.$1(a))
t=$.j3[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j8[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.R($.ku.$2(a,u))
if(u!=null){t=$.j3[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j8[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.j9(s)
$.j3[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.j8[u]=s
return s}if(q==="-"){p=H.j9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.kD(a,s)
if(q==="*")throw H.h(P.ke(u))
if(v.leafTags[u]===true){p=H.j9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.kD(a,s)},
kD:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jH(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j9:function(a){return J.jH(a,!1,null,!!a.$iE)},
mf:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j9(u)
else return J.jH(u,c,null,null)},
m9:function(){if(!0===$.jF)return
$.jF=!0
H.ma()},
ma:function(){var u,t,s,r,q,p,o,n
$.j3=Object.create(null)
$.j8=Object.create(null)
H.m8()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kF.$1(q)
if(p!=null){o=H.mf(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
m8:function(){var u,t,s,r,q,p,o
u=C.I()
u=H.bN(C.F,H.bN(C.K,H.bN(C.t,H.bN(C.t,H.bN(C.J,H.bN(C.G,H.bN(C.H(C.u),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.kA=new H.j5(q)
$.ku=new H.j6(p)
$.kF=new H.j7(o)},
bN:function(a,b){return a(b)||b},
ld:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fs("Illegal RegExp pattern ("+String(r)+")",a,null))},
mm:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kG:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hd:function hd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hS:function hS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h4:function h4(a,b){this.a=a
this.b=b},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a){this.a=a},
jc:function jc(a){this.a=a},
er:function er(a){this.a=a
this.b=null},
c_:function c_(){},
hG:function hG(){},
hy:function hy(){},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hU:function hU(a){this.a=a},
f_:function f_(a){this.a=a},
hl:function hl(a){this.a=a},
aL:function aL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fE:function fE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dh:function dh(a,b){this.a=a
this.$ti=b},
fF:function fF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
fA:function fA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cM:function(a){return a},
bu:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.cQ(b,a))},
lQ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.m4(a,b,c))
return b},
ch:function ch(){},
dp:function dp(){},
cg:function cg(){},
dq:function dq(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
dr:function dr(){},
h3:function h3(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
m5:function(a){return J.jU(a?Object.keys(a):[],null)},
mi:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jH:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j4:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jF==null){H.m9()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.h(P.ke("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jK()]
if(q!=null)return q
q=H.me(a)
if(q!=null)return q
if(typeof a=="function")return C.L
t=Object.getPrototypeOf(a)
if(t==null)return C.v
if(t===Object.prototype)return C.v
if(typeof r=="function"){Object.defineProperty(r,$.jK(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
lc:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.jd(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.av(a,0,4294967295,"length",null))
return J.jU(new Array(a),b)},
jU:function(a,b){return J.fy(H.c(a,[b]))},
fy:function(a){H.jG(a)
a.fixed$length=Array
return a},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.db.prototype
return J.da.prototype}if(typeof a=="string")return J.cb.prototype
if(a==null)return J.dc.prototype
if(typeof a=="boolean")return J.fz.prototype
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.N)return a
return J.j4(a)},
jD:function(a){if(typeof a=="string")return J.cb.prototype
if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.N)return a
return J.j4(a)},
jE:function(a){if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.N)return a
return J.j4(a)},
eO:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.N)return a
return J.j4(a)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).p(a,b)},
kY:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mc(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jD(a).j(a,b)},
kZ:function(a,b,c,d){return J.eO(a).il(a,b,c,d)},
jM:function(a,b){return J.eO(a).Z(a,b)},
jN:function(a,b){return J.jE(a).C(a,b)},
l_:function(a,b){return J.jE(a).N(a,b)},
by:function(a){return J.X(a).gF(a)},
bV:function(a){return J.jE(a).ga_(a)},
bW:function(a){return J.jD(a).gk(a)},
aq:function(a){return J.X(a).i(a)},
a:function a(){},
fz:function fz(){},
dc:function dc(){},
de:function de(){},
h8:function h8(){},
dM:function dM(){},
bo:function bo(){},
aK:function aK(a){this.$ti=a},
jk:function jk(a){this.$ti=a},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dd:function dd(){},
db:function db(){},
da:function da(){},
cb:function cb(){}},P={
lH:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.lY()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bP(new P.ip(u),1)).observe(t,{childList:true})
return new P.io(u,t,s)}else if(self.setImmediate!=null)return P.lZ()
return P.m_()},
lI:function(a){self.scheduleImmediate(H.bP(new P.iq(H.n(a,{func:1,ret:-1})),0))},
lJ:function(a){self.setImmediate(H.bP(new P.ir(H.n(a,{func:1,ret:-1})),0))},
lK:function(a){P.js(C.n,H.n(a,{func:1,ret:-1}))},
js:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.h.a1(a.a,1000)
return P.lN(u<0?0:u,b)},
kc:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.aW]})
u=C.h.a1(a.a,1000)
return P.lO(u<0?0:u,b)},
lN:function(a,b){var u=new P.ex(!0)
u.eO(a,b)
return u},
lO:function(a,b){var u=new P.ex(!1)
u.eP(a,b)
return u},
lL:function(a,b){var u,t,s
b.a=1
try{a.eb(new P.iz(b),new P.iA(b),null)}catch(s){u=H.bx(s)
t=H.bR(s)
P.mk(new P.iB(b,u,t))}},
kk:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$ias")
if(u>=4){t=b.bW()
b.a=a.a
b.c=a.c
P.cB(b,t)}else{t=H.k(b.c,"$ib0")
b.a=2
b.c=a
a.d9(t)}},
cB:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.k(t.c,"$iaf")
t=t.b
p=q.a
o=q.b
t.toString
P.j_(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cB(u.a,b)}t=u.a
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
if(k){H.k(m,"$iaf")
t=t.b
p=m.a
o=m.b
t.toString
P.j_(null,null,t,p,o)
return}j=$.V
if(j!=l)$.V=l
else j=null
t=b.c
if(t===8)new P.iF(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.iE(s,b,m).$0()}else if((t&2)!==0)new P.iD(u,s,b).$0()
if(j!=null)$.V=j
t=s.b
if(!!J.X(t).$ic8){if(t.a>=4){i=H.k(o.c,"$ib0")
o.c=null
b=o.b9(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kk(t,o)
return}}h=b.b
i=H.k(h.c,"$ib0")
h.c=null
b=h.b9(i)
t=s.a
p=s.b
if(!t){H.B(p,H.w(h,0))
h.a=4
h.c=p}else{H.k(p,"$iaf")
h.a=8
h.c=p}u.a=h
t=h}},
lU:function(a,b){if(H.eN(a,{func:1,args:[P.N,P.ak]}))return H.n(a,{func:1,ret:null,args:[P.N,P.ak]})
if(H.eN(a,{func:1,args:[P.N]}))return H.n(a,{func:1,ret:null,args:[P.N]})
throw H.h(P.jd(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lT:function(){var u,t
for(;u=$.bM,u!=null;){$.cO=null
t=u.b
$.bM=t
if(t==null)$.cN=null
u.a.$0()}},
lX:function(){$.jx=!0
try{P.lT()}finally{$.cO=null
$.jx=!1
if($.bM!=null)$.jL().$1(P.kw())}},
kr:function(a){var u=new P.dW(H.n(a,{func:1,ret:-1}))
if($.bM==null){$.cN=u
$.bM=u
if(!$.jx)$.jL().$1(P.kw())}else{$.cN.b=u
$.cN=u}},
lW:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.bM
if(u==null){P.kr(a)
$.cO=$.cN
return}t=new P.dW(a)
s=$.cO
if(s==null){t.b=u
$.cO=t
$.bM=t}else{t.b=s.b
s.b=t
$.cO=t
if(t.b==null)$.cN=t}},
mk:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.V
if(C.k===t){P.j1(null,null,C.k,a)
return}t.toString
P.j1(null,null,t,H.n(t.c3(a),u))},
kb:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.V
if(t===C.k){t.toString
return P.js(a,b)}return P.js(a,H.n(t.c3(b),u))},
lF:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aW]}
H.n(b,u)
t=$.V
if(t===C.k){t.toString
return P.kc(a,b)}s=t.dk(b,P.aW)
$.V.toString
return P.kc(a,H.n(s,u))},
j_:function(a,b,c,d,e){var u={}
u.a=d
P.lW(new P.j0(u,e))},
kp:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.V
if(t===c)return d.$0()
$.V=c
u=t
try{t=d.$0()
return t}finally{$.V=u}},
kq:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.V
if(t===c)return d.$1(e)
$.V=c
u=t
try{t=d.$1(e)
return t}finally{$.V=u}},
lV:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.V
if(t===c)return d.$2(e,f)
$.V=c
u=t
try{t=d.$2(e,f)
return t}finally{$.V=u}},
j1:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.c3(d):c.ir(d,-1)
P.kr(d)},
ip:function ip(a){this.a=a},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a){this.a=a},
ir:function ir(a){this.a=a},
ex:function ex(a){this.a=a
this.b=null
this.c=0},
iV:function iV(a,b){this.a=a
this.b=b},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b0:function b0(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iy:function iy(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.b=b},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
iF:function iF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iG:function iG(a){this.a=a},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(a){this.a=a
this.b=null},
hB:function hB(){},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
co:function co(){},
hC:function hC(){},
aW:function aW(){},
af:function af(a,b){this.a=a
this.b=b},
iX:function iX(){},
j0:function j0(a,b){this.a=a
this.b=b},
iN:function iN(){},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
lf:function(a,b){return new H.aL([a,b])},
lg:function(a){return H.m6(a,new H.aL([null,null]))},
lh:function(a,b,c,d){return new P.iK([d])},
kn:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
km:function(a,b,c){var u=new P.iL(a,b,[c])
u.c=a.e
return u},
la:function(a,b,c){var u,t
if(P.jy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.o])
t=$.cU()
C.a.h(t,a)
try{P.lS(a,u)}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}t=P.k9(b,H.md(u,"$id"),", ")+c
return t.charCodeAt(0)==0?t:t},
jj:function(a,b,c){var u,t,s
if(P.jy(a))return b+"..."+c
u=new P.br(b)
t=$.cU()
C.a.h(t,a)
try{s=u
s.a=P.k9(s.a,a,", ")}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jy:function(a){var u,t
for(u=0;t=$.cU(),u<t.length;++u)if(a===t[u])return!0
return!1},
lS:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.j(b,"$ib",[P.o],"$ab")
u=a.ga_(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.m(u.gU(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.i(b,-1)
q=b.pop()
if(0>=b.length)return H.i(b,-1)
p=b.pop()}else{o=u.gU(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.i(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gU(u);++s
for(;u.B();o=n,n=m){m=u.gU(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
jW:function(a){var u,t
u={}
if(P.jy(a))return"{...}"
t=new P.br("")
try{C.a.h($.cU(),a)
t.a+="{"
u.a=!0
J.l_(a,new P.fK(u,t))
t.a+="}"}finally{u=$.cU()
if(0>=u.length)return H.i(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
iK:function iK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cC:function cC(a){this.a=a
this.c=this.b=null},
iL:function iL(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fG:function fG(){},
u:function u(){},
fJ:function fJ(){},
fK:function fK(a,b){this.a=a
this.b=b},
ab:function ab(){},
iR:function iR(){},
ea:function ea(){},
c0:function c0(){},
d1:function d1(){},
fg:function fg(){},
i6:function i6(a){this.a=a},
i7:function i7(){},
iW:function iW(a){this.b=this.a=0
this.c=a},
l9:function(a){if(a instanceof H.c_)return a.i(0)
return"Instance of '"+H.bH(a)+"'"},
li:function(a,b,c,d){var u,t
H.B(b,d)
u=J.lc(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.W(u,t,b)
return H.j(u,"$ib",[d],"$ab")},
jV:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=J.bV(a);s.B();)C.a.h(t,H.B(s.gU(s),c))
if(b)return t
return H.j(J.fy(t),"$ib",u,"$ab")},
jr:function(a,b,c){var u,t
u=P.A
H.j(a,"$id",[u],"$ad")
if(a.constructor===Array){H.j(a,"$iaK",[u],"$aaK")
t=a.length
c=P.k6(b,c,t,null,null,null)
return H.k5(b>0||c<t?C.a.es(a,b,c):a)}return P.lD(a,b,c)},
lD:function(a,b,c){var u,t,s
H.j(a,"$id",[P.A],"$ad")
u=J.bV(a)
for(t=0;t<b;++t)if(!u.B())throw H.h(P.av(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gU(u))
return H.k5(s)},
lw:function(a,b,c){return new H.fA(a,H.ld(a,!1,!0,!1))},
k9:function(a,b,c){var u=J.bV(b)
if(!u.B())return a
if(c.length===0){do a+=H.m(u.gU(u))
while(u.B())}else{a+=H.m(u.gU(u))
for(;u.B();)a=a+c+H.m(u.gU(u))}return a},
lP:function(a,b,c,d){var u,t,s,r,q,p
H.j(a,"$ib",[P.A],"$ab")
if(c===C.w){u=$.kX().b
u=u.test(b)}else u=!1
if(u)return b
t=C.A.iz(H.B(b,H.ap(c,"c0",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.i(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lt(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
l6:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l7:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d3:function(a){if(a>=10)return""+a
return"0"+a},
jT:function(a,b,c,d,e,f){return new P.bi(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fj:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aq(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l9(a)},
l0:function(a){return new P.aC(!1,null,null,a)},
jd:function(a,b,c){return new P.aC(!0,a,b,c)},
hc:function(a,b,c){return new P.bI(null,null,!0,a,b,"Value not in range")},
av:function(a,b,c,d,e){return new P.bI(b,c,!0,a,d,"Invalid value")},
k6:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.av(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.av(b,a,c,"end",f))
return b}return c},
T:function(a,b,c,d,e){var u=H.a8(e==null?J.bW(b):e)
return new P.fx(b,u,!0,a,c,"Index out of range")},
an:function(a){return new P.i4(a)},
ke:function(a){return new P.i2(a)},
c1:function(a){return new P.f3(a)},
r:function(a){return new P.e3(a)},
jJ:function(a){H.mi(a)},
a5:function a5(){},
aj:function aj(a,b){this.a=a
this.b=b},
x:function x(){},
bi:function bi(a){this.a=a},
fd:function fd(){},
fe:function fe(){},
bj:function bj(){},
ds:function ds(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fx:function fx(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
i4:function i4(a){this.a=a},
i2:function i2(a){this.a=a},
hx:function hx(a){this.a=a},
f3:function f3(a){this.a=a},
h7:function h7(){},
dB:function dB(){},
f8:function f8(a){this.a=a},
e3:function e3(a){this.a=a},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
A:function A(){},
d:function d(){},
aJ:function aJ(){},
b:function b(){},
M:function M(){},
H:function H(){},
a_:function a_(){},
N:function N(){},
ak:function ak(){},
o:function o(){},
br:function br(a){this.a=a},
m3:function(a){var u,t
u=J.X(a)
if(!!u.$ibk){t=u.gdt(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.eC(a.data,a.height,a.width)},
m2:function(a){if(a instanceof P.eC)return{data:a.a,height:a.b,width:a.c}
return a},
bb:function(a){var u,t,s,r,q
if(a==null)return
u=P.lf(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r){q=H.R(t[r])
u.W(0,q,a[q])}return u},
m1:function(a,b){var u={}
a.N(0,new P.j2(u))
return u},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a){this.a=a},
fo:function fo(a,b){this.a=a
this.b=b},
fp:function fp(){},
fq:function fq(){},
iJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lM:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iM:function iM(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b2:function b2(){},
fD:function fD(){},
b7:function b7(){},
h5:function h5(){},
hb:function hb(){},
hF:function hF(){},
p:function p(){},
ba:function ba(){},
hR:function hR(){},
e8:function e8(){},
e9:function e9(){},
ei:function ei(){},
ej:function ej(){},
et:function et(){},
eu:function eu(){},
eA:function eA(){},
eB:function eB(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(a){this.a=a},
eX:function eX(){},
bz:function bz(){},
h6:function h6(){},
dX:function dX(){},
cY:function cY(){},
d8:function d8(){},
dv:function dv(){},
bJ:function bJ(){},
dw:function dw(){},
dD:function dD(){},
dL:function dL(){},
hw:function hw(){},
ep:function ep(){},
eq:function eq(){}},W={
jf:function(a,b){var u=document.createElement("canvas")
return u},
l8:function(a){H.k(a,"$ie")
return"wheel"},
iI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kl:function(a,b,c,d){var u,t
u=W.iI(W.iI(W.iI(W.iI(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.kt(new W.ix(c),W.l)
if(u!=null&&!0)J.kZ(a,b,u,!1)
return new W.iw(a,b,u,!1,[e])},
kt:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.V
if(u===C.k)return a
return u.dk(a,b)},
q:function q(){},
eP:function eP(){},
eR:function eR(){},
eS:function eS(){},
cW:function cW(){},
cX:function cX(){},
bB:function bB(){},
bC:function bC(){},
bh:function bh(){},
c3:function c3(){},
f4:function f4(){},
O:function O(){},
c4:function c4(){},
f5:function f5(){},
aE:function aE(){},
aF:function aF(){},
f6:function f6(){},
f7:function f7(){},
f9:function f9(){},
c5:function c5(){},
c6:function c6(){},
fa:function fa(){},
d4:function d4(){},
d5:function d5(){},
fb:function fb(){},
fc:function fc(){},
it:function it(a,b){this.a=a
this.b=b},
a1:function a1(){},
l:function l(){},
e:function e(){},
aH:function aH(){},
fm:function fm(){},
fn:function fn(){},
fr:function fr(){},
aI:function aI(){},
fv:function fv(){},
bF:function bF(){},
d9:function d9(){},
bk:function bk(){},
ca:function ca(){},
aM:function aM(){},
fH:function fH(){},
ce:function ce(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(a){this.a=a},
fV:function fV(){},
fW:function fW(a){this.a=a},
aP:function aP(){},
fX:function fX(){},
a9:function a9(){},
is:function is(a){this.a=a},
G:function G(){},
ci:function ci(){},
aR:function aR(){},
h9:function h9(){},
hj:function hj(){},
hk:function hk(a){this.a=a},
hm:function hm(){},
aS:function aS(){},
hu:function hu(){},
aT:function aT(){},
hv:function hv(){},
aU:function aU(){},
hz:function hz(){},
hA:function hA(a){this.a=a},
ax:function ax(){},
aV:function aV(){},
ay:function ay(){},
hH:function hH(){},
hI:function hI(){},
hM:function hM(){},
aX:function aX(){},
az:function az(){},
hP:function hP(){},
hQ:function hQ(){},
bt:function bt(){},
i5:function i5(){},
ij:function ij(){},
ik:function ik(){},
b_:function b_(){},
cA:function cA(){},
iu:function iu(){},
dZ:function dZ(){},
iH:function iH(){},
ef:function ef(){},
iS:function iS(){},
iT:function iT(){},
iv:function iv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jv:function jv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iw:function iw(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ix:function ix(a){this.a=a},
y:function y(){},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dY:function dY(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
eg:function eg(){},
eh:function eh(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
cH:function cH(){},
cI:function cI(){},
en:function en(){},
eo:function eo(){},
es:function es(){},
ev:function ev(){},
ew:function ew(){},
cJ:function cJ(){},
cK:function cK(){},
ey:function ey(){},
ez:function ez(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){}},O={
f1:function(a){var u=new O.S([a])
u.bB(a)
return u},
S:function S(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cd:function cd(){this.b=this.a=null},
dl:function dl(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fN:function fN(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cc:function cc(){},
fO:function fO(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aN:function aN(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fQ:function fQ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fR:function fR(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dy:function dy(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bs:function bs(){}},E={
fh:function(a,b,c,d,e,f){var u=new E.ag()
u.a=d
u.b=!0
u.seD(0,O.f1(E.ag))
u.y.aO(u.gj0(),u.gj3())
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
u.scF(0,e)
u.se0(c)
return u},
ly:function(a,b){var u=new E.hf(a,b)
u.ez(a,b)
return u},
lE:function(a,b,c,d,e){var u,t,s,r
u=J.X(a)
if(!!u.$ibB)return E.ka(a,!0,!0,!0,!1)
t=W.jf(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdq(a).h(0,t)
r=E.ka(t,!0,!0,!0,!1)
r.a=a
return r},
ka:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dH()
t=H.k(C.m.cB(a,"webgl2",P.lg(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibJ")
if(t==null)H.t(P.r("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.ly(t,a)
s=new T.hJ(t)
s.b=H.a8((t&&C.b).cC(t,3379))
s.c=H.a8(C.b.cC(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.dP(a)
r=new X.fC()
r.c=new X.am(!1,!1,!1)
r.sho(P.lh(null,null,null,P.A))
s.b=r
r=new X.fY(s)
r.f=0
r.r=V.b8()
r.x=V.b8()
r.Q=1
r.ch=1
s.c=r
r=new X.fI(s)
r.r=0
r.x=V.b8()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.hO(s)
r.e=0
r.f=V.b8()
r.r=V.b8()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sf7(H.c([],[[P.co,P.N]]))
r=s.z
q=document
p=W.a9
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a7(q,"contextmenu",H.n(s.gfL(),o),!1,p))
r=s.z
n=W.l
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a7(a,"focus",H.n(s.gfR(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a7(a,"blur",H.n(s.gfF(),m),!1,n))
r=s.z
l=W.aM
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a7(q,"keyup",H.n(s.gfV(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a7(q,"keydown",H.n(s.gfT(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a7(a,"mousedown",H.n(s.gfZ(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a7(a,"mouseup",H.n(s.gh2(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a7(a,"mousemove",H.n(s.gh0(),o),!1,p))
l=s.z
k=W.b_;(l&&C.a).h(l,W.a7(a,H.R(W.l8(a)),H.n(s.gh4(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a7(q,"mousemove",H.n(s.gfN(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a7(q,"mouseup",H.n(s.gfP(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a7(q,"pointerlockchange",H.n(s.gh6(),m),!1,n))
n=s.z
m=W.az
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a7(a,"touchstart",H.n(s.ghk(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a7(a,"touchend",H.n(s.ghg(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a7(a,"touchmove",H.n(s.ghi(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.aj(Date.now(),!1)
u.cy=0
u.dc()
return u},
eY:function eY(){},
ag:function ag(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hf:function hf(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hg:function hg(a){this.a=a},
hh:function hh(a){this.a=a},
hi:function hi(a){this.a=a},
dH:function dH(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(a){this.a=a}},Z={
ju:function(a,b,c){var u
H.j(c,"$ib",[P.A],"$ab")
u=a.createBuffer()
C.b.al(a,b,u)
C.b.dm(a,b,new Int16Array(H.cM(c)),35044)
C.b.al(a,b,null)
return new Z.dU(b,u)},
ar:function(a){return new Z.aZ(a)},
dU:function dU(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dV:function dV(a){this.a=a},
bZ:function bZ(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function aZ(a){this.a=a}},D={
J:function(){var u=new D.aG()
u.sa0(null)
u.sak(null)
u.c=null
u.d=0
return u},
f0:function f0(){},
aG:function aG(){var _=this
_.d=_.c=_.b=_.a=null},
fk:function fk(a){this.a=a},
fl:function fl(a){this.a=a},
v:function v(a){this.a=a
this.b=null},
bm:function bm(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bn:function bn(a,b,c,d){var _=this
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
jS:function(a,b){var u,t,s
u=new D.b1()
u.c=new V.Y(1,1,1)
u.a=V.lG()
t=u.b
u.b=b
b.gm().h(0,u.geE())
s=new D.C("mover",t,u.b,u,[U.a3])
s.b=!0
u.ap(s)
if(!u.c.p(0,a)){t=u.c
u.c=a
s=new D.C("color",t,a,u,[V.Y])
s.b=!0
u.ap(s)}return u},
b1:function b1(){var _=this
_.d=_.c=_.b=_.a=null},
Z:function Z(){},
dg:function dg(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
du:function du(){},
dA:function dA(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){}},X={d_:function d_(a,b){this.a=a
this.b=b},df:function df(a,b){this.a=a
this.b=b},fC:function fC(){var _=this
_.d=_.c=_.b=_.a=null},dj:function dj(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fI:function fI(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},am:function am(a,b,c){this.a=a
this.b=b
this.c=c},b5:function b5(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fY:function fY(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cf:function cf(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},ha:function ha(){},dJ:function dJ(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hO:function hO(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dP:function dP(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fu:function(a,b,c,d,e,f,g){var u,t
u=new X.ft()
t=new V.au(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=V.lx()
u.r=t
return u},
jp:function(a,b,c,d,e){var u,t,s
u=new X.dt()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gm().h(0,u.geQ())
s=new D.C("mover",t,u.b,u,[U.a3])
s.b=!0
u.ac(s)}s=u.c
if(!(Math.abs(s-b)<$.K().a)){u.c=b
s=new D.C("fov",s,b,u,[P.x])
s.b=!0
u.ac(s)}s=u.d
if(!(Math.abs(s-d)<$.K().a)){u.d=d
s=new D.C("near",s,d,u,[P.x])
s.b=!0
u.ac(s)}s=u.e
if(!(Math.abs(s-a)<$.K().a)){u.e=a
s=new D.C("far",s,a,u,[P.x])
s.b=!0
u.ac(s)}return u},
bA:function bA(){},
ft:function ft(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fw:function fw(){this.b=this.a=null},
dt:function dt(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
bL:function bL(){}},V={
mp:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.ep(a-b,u)
return(a<0?a+u:a)+b},
Q:function(a,b,c){if(a==null)return C.j.aa("null",c)
return C.j.aa(C.i.ec(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
bQ:function(a,b,c){var u,t,s,r,q,p
H.j(a,"$ib",[P.x],"$ab")
u=H.c([],[P.o])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.z)(a),++r){q=V.Q(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.i(u,p)
C.a.W(u,p,C.j.aa(u[p],s))}return u},
jI:function(a,b){return C.i.jq(Math.pow(b,C.E.cj(Math.log(H.m0(a))/Math.log(b))))},
bp:function(){var u=$.jZ
if(u==null){u=V.aO(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.jZ=u}return u},
aO:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jo:function(a,b,c){return V.aO(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lk:function(a,b,c,d){return V.aO(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
jn:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aO(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
jY:function(a,b,c,d){d=V.kj()
return V.jX(V.k3(),d,new V.L(a,b,c))},
jX:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.t(0,Math.sqrt(c.A(c)))
t=b.aY(u)
s=t.t(0,Math.sqrt(t.A(t)))
r=u.aY(s)
q=new V.L(a.a,a.b,a.c)
p=s.L(0).A(q)
o=r.L(0).A(q)
n=u.L(0).A(q)
return V.aO(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b8:function(){var u=$.k2
if(u==null){u=new V.a4(0,0)
$.k2=u}return u},
k3:function(){var u=$.cj
if(u==null){u=new V.ah(0,0,0)
$.cj=u}return u},
lx:function(){var u=$.k7
if(u==null){u=V.he(0,0,1,1)
$.k7=u}return u},
he:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cl(a,b,c,d)},
dT:function(){var u=$.ki
if(u==null){u=new V.L(0,0,0)
$.ki=u}return u},
kj:function(){var u=$.kh
if(u==null){u=new V.L(0,1,0)
$.kh=u}return u},
lG:function(){var u=$.i8
if(u==null){u=new V.L(0,0,1)
$.i8=u}return u},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fi:function fi(a){this.a=a},
dn:function dn(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a6:function a6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a4:function a4(a,b){this.a=a
this.b=b},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cl:function cl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
P:function P(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
ac:function(a){var u=new V.hn()
u.eA(a)
return u},
eQ:function eQ(){},
b4:function b4(){},
dk:function dk(){},
b6:function b6(){this.a=null},
hn:function hn(){this.a=null},
cn:function cn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(a,b){this.a=a
this.b=b
this.c=null},
hN:function hN(){this.c=this.b=this.a=null},
cs:function cs(a){this.b=a
this.a=this.c=null},
ml:function(a){P.lF(C.B,new V.jb(a))},
lA:function(a,b){var u=new V.hr()
u.eB(a,!0)
return u},
jb:function jb(a){this.a=a},
hr:function hr(){this.b=this.a=null},
ht:function ht(a){this.a=a},
hs:function hs(a){this.a=a}},U={
jg:function(){var u=new U.f2()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
d0:function(a){var u=new U.c2()
u.sM(0,a)
return u},
ji:function(a){var u=new U.c9()
u.bB(U.a3)
u.aO(u.geG(),u.gha())
if(a!=null)u.aV(0,a)
u.e=null
u.f=V.bp()
u.r=0
return u},
f2:function f2(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c2:function c2(){this.b=this.a=null},
c9:function c9(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a3:function a3(){},
dQ:function dQ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dR:function dR(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dS:function dS(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d2:function d2(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},d6:function d6(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aw:function aw(){},bK:function bK(){},dC:function dC(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lj:function(a,b){var u,t
u=a.ae
t=new A.dm(b,u)
t.cL(b,u)
t.ey(a,b)
return t},
jt:function(a,b,c,d,e){var u=new A.hV(a,b,c,e)
u.f=d
u.shW(P.li(d,0,!1,P.A))
return u},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
eT:function eT(a){this.a=a},
dm:function dm(a,b){var _=this
_.be=_.dA=_.bd=_.ae=_.an=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dQ=_.cc=_.dP=_.br=_.dO=_.dN=_.bq=_.bp=_.dM=_.dL=_.bo=_.bn=_.bm=_.dK=_.dJ=_.bl=_.dI=_.dH=_.bk=_.dG=_.dF=_.bj=_.bi=_.dE=_.dD=_.bh=_.bg=_.dC=_.dB=_.bf=null
_.ci=_.dU=_.cg=_.dT=_.cf=_.dS=_.ce=_.dR=_.cd=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fP:function fP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bd=b5},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cv:function cv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cy:function cy(a,b,c,d,e,f,g,h,i,j){var _=this
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
cw:function cw(a,b,c,d,e,f,g,h,i,j){var _=this
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
cz:function cz(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cm:function cm(){},
bD:function bD(a,b){this.a=a
this.b=b},
dz:function dz(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dK:function dK(){},
i0:function i0(a){this.a=a},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hX:function hX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hY:function hY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i_:function i_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hV:function hV(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hW:function hW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
F:function F(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hZ:function hZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i1:function i1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
iZ:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cL:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.L(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.L(o+a3,n+a1,m+a2)
u.b=l
k=new V.L(o-a3,n-a1,m-a2)
u.c=k
j=new V.L(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.iZ(t)
f=F.iZ(u.b)
e=F.mn(d,a0,new F.iY(u,F.iZ(u.c),F.iZ(u.d),f,g,c),b)
if(e!=null)a.j_(e)},
mn:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ao,P.x,P.x]})
if(a<1)return
if(b<1)return
u=F.jq()
t=H.c([],[F.ao])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.i9(null,null,new V.au(p,0,0,1),null,null,new V.a4(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c8(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.i9(null,null,new V.au(j,i,h,1),null,null,new V.a4(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c8(d))}}u.d.io(a+1,b+1,t)
return u},
c7:function(a,b,c){var u,t
u=new F.a2()
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
u.a.a.a2()
return u},
le:function(a,b){var u,t
u=new F.b3()
t=a.a
if(t==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a2()
return u},
jq:function(){var u,t
u=new F.dx()
t=new F.ia(u)
t.b=!1
t.shX(H.c([],[F.ao]))
u.a=t
t=new F.hq(u)
t.sbU(H.c([],[F.bq]))
u.b=t
t=new F.hp(u)
t.sfk(H.c([],[F.b3]))
u.c=t
t=new F.ho(u)
t.sf8(H.c([],[F.a2]))
u.d=t
u.e=null
return u},
i9:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ao()
t=new F.ig(u)
t.sbU(H.c([],[F.bq]))
u.b=t
t=new F.ie(u)
s=[F.b3]
t.sfl(H.c([],s))
t.sfm(H.c([],s))
u.c=t
t=new F.ib(u)
s=[F.a2]
t.sf9(H.c([],s))
t.sfa(H.c([],s))
t.sfb(H.c([],s))
u.d=t
h=$.kU()
u.e=0
t=$.aB()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.be().a)!==0?e:null
u.x=(s&$.bd().a)!==0?b:null
u.y=(s&$.bf().a)!==0?f:null
u.z=(s&$.bg().a)!==0?g:null
u.Q=(s&$.kV().a)!==0?c:null
u.ch=(s&$.bU().a)!==0?i:0
u.cx=(s&$.bc().a)!==0?a:null
return u},
iY:function iY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a2:function a2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b3:function b3(){this.b=this.a=null},
bq:function bq(){this.a=null},
dx:function dx(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ho:function ho(a){this.a=a
this.b=null},
hp:function hp(a){this.a=a
this.b=null},
hq:function hq(a){this.a=a
this.b=null},
ao:function ao(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(a){this.a=a},
ih:function ih(a){this.a=a},
ia:function ia(a){this.a=a
this.c=this.b=null},
ib:function ib(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ic:function ic(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
ie:function ie(a){this.a=a
this.c=this.b=null},
ig:function ig(a){this.a=a
this.b=null}},T={cp:function cp(){},cq:function cq(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hJ:function hJ(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hK:function hK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},K={
kC:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
u=V.lA("Test 033",!0)
t=W.jf(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.l.Z(u.a,t)
s=[P.o]
u.dh(H.c(["Test of a sterioscopic scene."],s))
u.dh(H.c(["\xab[Back to Tests|../]"],s))
r=C.C.ek(document,"testCanvas")
if(r==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
q=E.lE(r,!0,!0,!0,!1)
p=F.jq()
F.cL(p,null,null,1,1,1,0,0,1)
F.cL(p,null,null,1,1,0,1,0,3)
F.cL(p,null,null,1,1,0,0,1,2)
F.cL(p,null,null,1,1,-1,0,0,0)
F.cL(p,null,null,1,1,0,-1,0,0)
F.cL(p,null,null,1,1,0,0,-1,3)
p.av()
o=E.fh(null,!0,null,"",p,null)
n=E.fh(null,!0,null,"",null,null)
for(m=-1.6;m<=1.7;m+=0.8)for(l=-1.6;l<=1.7;l+=0.8)for(k=-1.6;k<=1.7;k+=0.8){j=new V.a6(1,0,0,m,0,1,0,l,0,0,1,k,0,0,0,1).q(0,new V.a6(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
i=E.fh(null,!0,null,"",null,null)
u=new U.c2()
u.sM(0,j)
i.se0(u)
u=i.y
s=H.w(u,0)
H.B(o,s)
h=[s]
if(u.aT(H.c([o],h))){g=u.a
f=g.length
C.a.h(g,o)
s=H.j(H.c([o],h),"$id",[s],"$ad")
u=u.c
if(u!=null)u.$2(f,s)}u=n.y
s=H.w(u,0)
H.B(i,s)
h=[s]
if(u.aT(H.c([i],h))){g=u.a
f=g.length
C.a.h(g,i)
s=H.j(H.c([i],h),"$id",[s],"$ad")
u=u.c
if(u!=null)u.$2(f,s)}}e=q.f.dY("../resources/diceColor")
d=new O.dl()
d.seX(O.f1(V.a6))
d.e.aO(d.gfB(),d.gfD())
u=new O.aN(d,"emission")
u.c=C.c
u.f=new V.Y(0,0,0)
d.f=u
u=new O.aN(d,"ambient")
u.c=C.c
u.f=new V.Y(0,0,0)
d.r=u
u=new O.aN(d,"diffuse")
u.c=C.c
u.f=new V.Y(0,0,0)
d.x=u
u=new O.aN(d,"invDiffuse")
u.c=C.c
u.f=new V.Y(0,0,0)
d.y=u
u=new O.fR(d,"specular")
u.c=C.c
u.f=new V.Y(0,0,0)
u.ch=100
d.z=u
u=new O.fO(d,"bump")
u.c=C.c
d.Q=u
d.ch=null
u=new O.aN(d,"reflect")
u.c=C.c
u.f=new V.Y(0,0,0)
d.cx=u
u=new O.fQ(d,"refract")
u.c=C.c
u.f=new V.Y(0,0,0)
u.ch=1
d.cy=u
u=new O.fN(d,"alpha")
u.c=C.c
u.f=1
d.db=u
u=new D.dg()
u.bB(D.Z)
u.sf5(H.c([],[D.b1]))
u.shn(H.c([],[D.du]))
u.shG(H.c([],[D.dA]))
u.shT(H.c([],[D.dE]))
u.shU(H.c([],[D.dF]))
u.shV(H.c([],[D.dG]))
u.Q=null
u.ch=null
u.cD(u.gfv(),u.gh8(),u.ghc())
d.dx=u
s=u.Q
if(s==null){s=D.J()
u.Q=s
u=s}else u=s
u.h(0,d.ght())
u=d.dx
s=u.ch
if(s==null){s=D.J()
u.ch=s
u=s}else u=s
u.h(0,d.gaI())
d.dy=null
u=d.dx
s=U.d0(V.jY(-1,-1,-1,null))
u.h(0,D.jS(new V.Y(1,0.9,0.9),s))
u=d.dx
s=U.d0(V.jY(1,1,2,null))
u.h(0,D.jS(new V.Y(0.2,0.2,0.35),s))
u=d.r
u.sam(0,new V.Y(0.2,0.2,0.2))
d.r.sb4(e)
u=d.x
u.sam(0,new V.Y(0.8,0.8,0.8))
d.x.sb4(e)
u=d.z
u.sam(0,new V.Y(0.7,0.7,0.7))
u=d.z
if(u.c===C.c){u.c=C.f
u.bA()
u.bX(100)
s=u.a
s.a=null
s.P(null)}u.bX(10)
d.Q.sb4(q.f.dY("../resources/diceBumpMap"))
c=U.ji(null)
u=q.r
s=new U.dR()
h=U.jg()
h.scA(0,!0)
h.scp(6.283185307179586)
h.scr(0)
h.sa5(0,0)
h.scq(100)
h.sR(0)
h.sc9(0.5)
s.b=h
g=s.gaF()
h.gm().h(0,g)
h=U.jg()
h.scA(0,!0)
h.scp(6.283185307179586)
h.scr(0)
h.sa5(0,0)
h.scq(100)
h.sR(0)
h.sc9(0.5)
s.c=h
h.gm().h(0,g)
s.d=null
s.e=!1
s.f=!1
s.r=!1
s.x=2.5
s.y=2.5
s.z=2
s.Q=4
s.cx=!1
s.ch=!1
s.cy=0
s.db=0
s.dx=null
s.dy=0
s.fr=null
s.fx=null
b=new X.am(!1,!1,!1)
a=s.d
s.d=b
h=[X.am]
g=new D.C("modifiers",a,b,s,h)
g.b=!0
s.J(g)
g=s.f
if(g!==!1){s.f=!1
g=new D.C("invertX",g,!1,s,[P.a5])
g.b=!0
s.J(g)}g=s.r
if(g!==!1){s.r=!1
g=new D.C("invertY",g,!1,s,[P.a5])
g.b=!0
s.J(g)}s.aW(u)
c.h(0,s)
u=q.r
s=new U.dQ()
g=U.jg()
g.scA(0,!0)
g.scp(6.283185307179586)
g.scr(0)
g.sa5(0,0)
g.scq(100)
g.sR(0)
g.sc9(0.2)
s.b=g
g.gm().h(0,s.gaF())
s.c=null
s.d=!1
s.e=2.5
s.f=2
s.r=4
s.y=!1
s.x=!1
s.z=0
s.Q=null
s.ch=0
s.cx=null
s.cy=null
b=new X.am(!0,!1,!1)
a=s.c
s.c=b
g=new D.C("modifiers",a,b,s,h)
g.b=!0
s.J(g)
s.aW(u)
c.h(0,s)
u=q.r
s=new U.dS()
s.c=0.01
s.d=0
s.e=0
b=new X.am(!1,!1,!1)
s.b=b
h=new D.C("modifiers",null,b,s,h)
h.b=!0
s.J(h)
s.aW(u)
c.h(0,s)
c.h(0,U.d0(V.jo(0,0,6)))
a0=X.fu(!0,!0,!1,null,2000,null,0)
if(a0.b){a0.b=!1
u=new D.C("clearColor",!0,!1,a0,[P.a5])
u.b=!0
a0.ac(u)}u=q.f.iY("../resources/maskonaive",".jpg")
a1=new M.d2()
a1.saX(null)
a1.sb1(0,null)
a1.sb2(null)
s=E.fh(null,!0,null,"",null,null)
p=F.jq()
h=p.a
g=new V.L(-1,-1,1)
g=g.t(0,Math.sqrt(g.A(g)))
a2=h.bc(new V.b9(1,2,4,6),new V.au(1,0,0,1),new V.ah(-1,-1,0),new V.a4(0,1),g,null)
h=p.a
g=new V.L(1,-1,1)
g=g.t(0,Math.sqrt(g.A(g)))
a3=h.bc(new V.b9(0,3,4,6),new V.au(0,0,1,1),new V.ah(1,-1,0),new V.a4(1,1),g,null)
h=p.a
g=new V.L(1,1,1)
g=g.t(0,Math.sqrt(g.A(g)))
a4=h.bc(new V.b9(0,2,5,6),new V.au(0,1,0,1),new V.ah(1,1,0),new V.a4(1,0),g,null)
h=p.a
g=V.b8()
a5=new V.L(-1,1,1)
a5=a5.t(0,Math.sqrt(a5.A(a5)))
a6=h.bc(new V.b9(0,2,4,7),new V.au(1,1,0,1),new V.ah(-1,1,0),g,a5,null)
p.d.im(H.c([a2,a3,a4,a6],[F.ao]))
p.av()
s.scF(0,p)
a1.d=s
a1.e=null
s=new O.dy()
s.b=1.0471975511965976
s.d=new V.Y(1,1,1)
a=s.c
s.c=u
u.gm().h(0,s.gaI())
u=new D.C("boxTexture",a,s.c,s,[T.cq])
u.b=!0
s.P(u)
a1.sb2(s)
a7=new M.d6()
a7.sf_(0,O.f1(E.ag))
a7.d.aO(a7.gfH(),a7.gfJ())
a7.e=null
a7.f=null
a7.r=null
a7.x=null
a8=X.fu(!0,!0,!1,null,2000,null,0)
a7.saX(null)
a7.sb1(0,a8)
a7.sb2(null)
a7.sb2(d)
a7.d.h(0,n)
u=M.aw
s=H.c([a1,a7],[u])
h=new M.dC()
g=U.d0(null)
h.a=g
a5=U.d0(null)
h.b=a5
a9=U.a3
b0=[a9]
g=U.ji(H.c([null,g],b0))
h.c=g
b0=U.ji(H.c([null,a5],b0))
h.d=b0
h.e=X.jp(2000,1.0471975511965976,g,0.1,null)
h.f=X.jp(2000,1.0471975511965976,b0,0.1,null)
h.r=V.he(0,0,0.5,1)
h.x=V.he(0.5,0,0.5,1)
h.shm(O.f1(u))
h.z.aO(h.gfz(),h.ghe())
h.z.aV(0,s)
h.Q=0.1
h.ch=12
h.cx=null
h.cy=null
u=h.c.a
if(0>=u.length)return H.i(u,0)
if(!J.W(u[0],c)){u=h.c
g=u.a
if(0>=g.length)return H.i(g,0)
a=g[0]
u.W(0,0,c)
h.d.W(0,0,c)
a9=new D.C("cameraMover",a,c,h,[a9])
a9.b=!0
h.T(a9)}u=h.y
if(u!==a0){if(u!=null)u.gm().O(0,h.gS())
a=h.y
h.y=a0
a0.gm().h(0,h.gS())
u=new D.C("target",a,h.y,h,[X.bL])
u.b=!0
h.T(u)}h.z.aV(0,s)
h.Q=0.1
h.ch=12
b1=Math.atan2(0.1,12)
u=h.a
s=h.Q
if(typeof s!=="number")return s.L()
u.sM(0,V.jo(-s,0,0).q(0,V.jn(b1)))
h.b.sM(0,V.jo(h.Q,0,0).q(0,V.jn(-b1)))
u=q.d
if(u!==h){if(u!=null)u.gm().O(0,q.gcM())
q.d=h
h.gm().h(0,q.gcM())
q.cN()}V.ml(q)}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jl.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gF:function(a){return H.ck(a)},
i:function(a){return"Instance of '"+H.bH(a)+"'"}}
J.fz.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ia5:1}
J.dc.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0},
$iH:1}
J.de.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.h8.prototype={}
J.dM.prototype={}
J.bo.prototype={
i:function(a){var u=a[$.kJ()]
if(u==null)return this.ev(a)
return"JavaScript function for "+H.m(J.aq(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijh:1}
J.aK.prototype={
h:function(a,b){H.B(b,H.w(a,0))
if(!!a.fixed$length)H.t(P.an("add"))
a.push(b)},
O:function(a,b){var u
if(!!a.fixed$length)H.t(P.an("remove"))
for(u=0;u<a.length;++u)if(J.W(a[u],b)){a.splice(u,1)
return!0}return!1},
aV:function(a,b){var u,t
H.j(b,"$id",[H.w(a,0)],"$ad")
if(!!a.fixed$length)H.t(P.an("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.z)(b),++t)a.push(b[t])},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.c1(a))}},
w:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.W(u,t,H.m(a[t]))
return u.join(b)},
iV:function(a){return this.w(a,"")},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
es:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.av(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.av(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.w(a,0)])
return H.c(a.slice(b,c),[H.w(a,0)])},
gcm:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.lb())},
aw:function(a,b){var u
for(u=0;u<a.length;++u)if(J.W(a[u],b))return!0
return!1},
i:function(a){return P.jj(a,"[","]")},
ga_:function(a){return new J.ae(a,a.length,0,[H.w(a,0)])},
gF:function(a){return H.ck(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.an("set length"))
if(b<0)throw H.h(P.av(b,0,null,"newLength",null))
a.length=b},
W:function(a,b,c){H.B(c,H.w(a,0))
if(!!a.immutable$list)H.t(P.an("indexed set"))
if(b>=a.length||b<0)throw H.h(H.cQ(a,b))
a[b]=c},
$id:1,
$ib:1}
J.jk.prototype={}
J.ae.prototype={
gU:function(a){return this.d},
B:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.h(H.z(u))
s=this.c
if(s>=t){this.sd_(null)
return!1}this.sd_(u[s]);++this.c
return!0},
sd_:function(a){this.d=H.B(a,H.w(this,0))},
$iaJ:1}
J.dd.prototype={
jq:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.an(""+a+".toInt()"))},
cj:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.an(""+a+".floor()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.an(""+a+".round()"))},
ec:function(a,b){var u,t
if(b>20)throw H.h(P.av(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
ep:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ex:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.de(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.de(a,b)},
de:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.an("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
ba:function(a,b){var u
if(a>0)u=this.hF(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hF:function(a,b){return b>31?0:a>>>b},
$ix:1,
$ia_:1}
J.db.prototype={$iA:1}
J.da.prototype={}
J.cb.prototype={
c7:function(a,b){if(b<0)throw H.h(H.cQ(a,b))
if(b>=a.length)H.t(H.cQ(a,b))
return a.charCodeAt(b)},
b7:function(a,b){if(b>=a.length)throw H.h(H.cQ(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.h(P.jd(b,null,null))
return a+b},
cI:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.hc(b,null,null))
if(b>c)throw H.h(P.hc(b,null,null))
if(c>a.length)throw H.h(P.hc(c,null,null))
return a.substring(b,c)},
cH:function(a,b){return this.cI(a,b,null)},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.z)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
j7:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.q(c,u)+a},
aa:function(a,b){return this.j7(a,b," ")},
i:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ik0:1,
$io:1}
H.a0.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.c7(this.a,b)},
$adO:function(){return[P.A]},
$au:function(){return[P.A]},
$ad:function(){return[P.A]},
$ab:function(){return[P.A]}}
H.ff.prototype={}
H.di.prototype={
gU:function(a){return this.d},
B:function(){var u,t,s,r
u=this.a
t=J.jD(u)
s=t.gk(u)
if(this.b!==s)throw H.h(P.c1(u))
r=this.c
if(r>=s){this.saQ(null)
return!1}this.saQ(t.C(u,r));++this.c
return!0},
saQ:function(a){this.d=H.B(a,H.w(this,0))},
$iaJ:1}
H.fL.prototype={
ga_:function(a){return new H.fM(J.bV(this.a),this.b,this.$ti)},
gk:function(a){return J.bW(this.a)},
C:function(a,b){return this.b.$1(J.jN(this.a,b))},
$ad:function(a,b){return[b]}}
H.fM.prototype={
B:function(){var u=this.b
if(u.B()){this.saQ(this.c.$1(u.gU(u)))
return!0}this.saQ(null)
return!1},
gU:function(a){return this.a},
saQ:function(a){this.a=H.B(a,H.w(this,1))},
$aaJ:function(a,b){return[b]}}
H.il.prototype={
ga_:function(a){return new H.im(J.bV(this.a),this.b,this.$ti)}}
H.im.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gU(u)))return!0
return!1},
gU:function(a){var u=this.a
return u.gU(u)}}
H.bE.prototype={}
H.dO.prototype={}
H.dN.prototype={}
H.hd.prototype={}
H.hS.prototype={
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
H.h4.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fB.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.i3.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jc.prototype={
$1:function(a){if(!!J.X(a).$ibj)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.er.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iak:1}
H.c_.prototype={
i:function(a){return"Closure '"+H.bH(this).trim()+"'"},
$ijh:1,
gjw:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hG.prototype={}
H.hy.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bT(u)+"'"}}
H.bX.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bX))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gF:function(a){var u,t
u=this.c
if(u==null)t=H.ck(this.a)
else t=typeof u!=="object"?J.by(u):H.ck(u)
return(t^H.ck(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.bH(u)+"'")}}
H.hU.prototype={
i:function(a){return this.a}}
H.f_.prototype={
i:function(a){return this.a}}
H.hl.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aL.prototype={
gk:function(a){return this.a},
gaz:function(a){return new H.dh(this,[H.w(this,0)])},
ds:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.cX(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.cX(t,b)}else return this.iT(b)},
iT:function(a){var u=this.d
if(u==null)return!1
return this.ck(this.bH(u,J.by(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.b8(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.b8(r,b)
s=t==null?null:t.b
return s}else return this.iU(b)},
iU:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bH(u,J.by(a)&0x3ffffff)
s=this.ck(t,a)
if(s<0)return
return t[s].b},
W:function(a,b,c){var u,t,s,r,q,p
H.B(b,H.w(this,0))
H.B(c,H.w(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bR()
this.b=u}this.cQ(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bR()
this.c=t}this.cQ(t,b,c)}else{s=this.d
if(s==null){s=this.bR()
this.d=s}r=J.by(b)&0x3ffffff
q=this.bH(s,r)
if(q==null)this.bY(s,r,[this.bS(b,c)])
else{p=this.ck(q,b)
if(p>=0)q[p].b=c
else q.push(this.bS(b,c))}}},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.h(P.c1(this))
u=u.c}},
cQ:function(a,b,c){var u
H.B(b,H.w(this,0))
H.B(c,H.w(this,1))
u=this.b8(a,b)
if(u==null)this.bY(a,b,this.bS(b,c))
else u.b=c},
bS:function(a,b){var u,t
u=new H.fE(H.B(a,H.w(this,0)),H.B(b,H.w(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
ck:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1},
i:function(a){return P.jW(this)},
b8:function(a,b){return a[b]},
bH:function(a,b){return a[b]},
bY:function(a,b,c){a[b]=c},
f4:function(a,b){delete a[b]},
cX:function(a,b){return this.b8(a,b)!=null},
bR:function(){var u=Object.create(null)
this.bY(u,"<non-identifier-key>",u)
this.f4(u,"<non-identifier-key>")
return u}}
H.fE.prototype={}
H.dh.prototype={
gk:function(a){return this.a.a},
ga_:function(a){var u,t
u=this.a
t=new H.fF(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fF.prototype={
gU:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.c1(u))
else{u=this.c
if(u==null){this.scP(null)
return!1}else{this.scP(u.a)
this.c=this.c.c
return!0}}},
scP:function(a){this.d=H.B(a,H.w(this,0))},
$iaJ:1}
H.j5.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.j6.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.j7.prototype={
$1:function(a){return this.a(H.R(a))},
$S:30}
H.fA.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ik0:1}
H.ch.prototype={$imI:1}
H.dp.prototype={
gk:function(a){return a.length},
$iE:1,
$aE:function(){}}
H.cg.prototype={
j:function(a,b){H.bu(b,a,a.length)
return a[b]},
$abE:function(){return[P.x]},
$au:function(){return[P.x]},
$id:1,
$ad:function(){return[P.x]},
$ib:1,
$ab:function(){return[P.x]}}
H.dq.prototype={
$abE:function(){return[P.A]},
$au:function(){return[P.A]},
$id:1,
$ad:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.fZ.prototype={
j:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.h_.prototype={
j:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.h0.prototype={
j:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.h1.prototype={
j:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.h2.prototype={
j:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.dr.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bu(b,a,a.length)
return a[b]},
$imJ:1}
H.h3.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.cD.prototype={}
H.cE.prototype={}
H.cF.prototype={}
H.cG.prototype={}
P.ip.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:14}
P.io.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.iq.prototype={
$0:function(){this.a.$0()},
$S:2}
P.ir.prototype={
$0:function(){this.a.$0()},
$S:2}
P.ex.prototype={
eO:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bP(new P.iV(this,b),0),a)
else throw H.h(P.an("`setTimeout()` not found."))},
eP:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bP(new P.iU(this,a,Date.now(),b),0),a)
else throw H.h(P.an("Periodic timer."))},
$iaW:1}
P.iV.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.iU.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.ex(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.b0.prototype={
iZ:function(a){if(this.c!==6)return!0
return this.b.b.cv(H.n(this.d,{func:1,ret:P.a5,args:[P.N]}),a.a,P.a5,P.N)},
iR:function(a){var u,t,s,r
u=this.e
t=P.N
s={futureOr:1,type:H.w(this,1)}
r=this.b.b
if(H.eN(u,{func:1,args:[P.N,P.ak]}))return H.jC(r.jk(u,a.a,a.b,null,t,P.ak),s)
else return H.jC(r.cv(H.n(u,{func:1,args:[P.N]}),a.a,null,t),s)}}
P.as.prototype={
eb:function(a,b,c){var u,t,s,r
u=H.w(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.V
if(t!==C.k){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.lU(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.as(0,$.V,[c])
r=b==null?1:3
this.cR(new P.b0(s,r,a,b,[u,c]))
return s},
jp:function(a,b){return this.eb(a,null,b)},
cR:function(a){var u,t
u=this.a
if(u<=1){a.a=H.k(this.c,"$ib0")
this.c=a}else{if(u===2){t=H.k(this.c,"$ias")
u=t.a
if(u<4){t.cR(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.j1(null,null,u,H.n(new P.iy(this,a),{func:1,ret:-1}))}},
d9:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.k(this.c,"$ib0")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.k(this.c,"$ias")
t=p.a
if(t<4){p.d9(a)
return}this.a=t
this.c=p.c}u.a=this.b9(a)
t=this.b
t.toString
P.j1(null,null,t,H.n(new P.iC(u,this),{func:1,ret:-1}))}},
bW:function(){var u=H.k(this.c,"$ib0")
this.c=null
return this.b9(u)},
b9:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cT:function(a){var u,t,s
u=H.w(this,0)
H.jC(a,{futureOr:1,type:u})
t=this.$ti
if(H.cP(a,"$ic8",t,"$ac8"))if(H.cP(a,"$ias",t,null))P.kk(a,this)
else P.lL(a,this)
else{s=this.bW()
H.B(a,u)
this.a=4
this.c=a
P.cB(this,s)}},
cU:function(a,b){var u
H.k(b,"$iak")
u=this.bW()
this.a=8
this.c=new P.af(a,b)
P.cB(this,u)},
$ic8:1}
P.iy.prototype={
$0:function(){P.cB(this.a,this.b)},
$S:2}
P.iC.prototype={
$0:function(){P.cB(this.b,this.a.a)},
$S:2}
P.iz.prototype={
$1:function(a){var u=this.a
u.a=0
u.cT(a)},
$S:14}
P.iA.prototype={
$2:function(a,b){H.k(b,"$iak")
this.a.cU(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.iB.prototype={
$0:function(){this.a.cU(this.b,this.c)},
$S:2}
P.iF.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.ea(H.n(r.d,{func:1}),null)}catch(q){t=H.bx(q)
s=H.bR(q)
if(this.d){r=H.k(this.a.a.c,"$iaf").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.k(this.a.a.c,"$iaf")
else p.b=new P.af(t,s)
p.a=!0
return}if(!!J.X(u).$ic8){if(u instanceof P.as&&u.a>=4){if(u.a===8){r=this.b
r.b=H.k(u.c,"$iaf")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jp(new P.iG(o),null)
r.a=!1}},
$S:3}
P.iG.prototype={
$1:function(a){return this.a},
$S:35}
P.iE.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.w(s,0)
q=H.B(this.c,r)
p=H.w(s,1)
this.a.b=s.b.b.cv(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bx(o)
t=H.bR(o)
s=this.a
s.b=new P.af(u,t)
s.a=!0}},
$S:3}
P.iD.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.k(this.a.a.c,"$iaf")
r=this.c
if(r.iZ(u)&&r.e!=null){q=this.b
q.b=r.iR(u)
q.a=!1}}catch(p){t=H.bx(p)
s=H.bR(p)
r=H.k(this.a.a.c,"$iaf")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.af(t,s)
n.a=!0}},
$S:3}
P.dW.prototype={}
P.hB.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.as(0,$.V,[P.A])
u.a=0
s=H.w(this,0)
r=H.n(new P.hD(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.hE(u,t),{func:1,ret:-1})
W.a7(this.a,this.b,r,!1,s)
return t}}
P.hD.prototype={
$1:function(a){H.B(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.w(this.b,0)]}}}
P.hE.prototype={
$0:function(){this.b.cT(this.a.a)},
$S:2}
P.co.prototype={}
P.hC.prototype={}
P.aW.prototype={}
P.af.prototype={
i:function(a){return H.m(this.a)},
$ibj:1}
P.iX.prototype={$imW:1}
P.j0.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.ds()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.h(u)
s=H.h(u)
s.stack=t.i(0)
throw s},
$S:2}
P.iN.prototype={
jl:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.k===$.V){a.$0()
return}P.kp(null,null,this,a,-1)}catch(s){u=H.bx(s)
t=H.bR(s)
P.j_(null,null,this,u,H.k(t,"$iak"))}},
jm:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.k===$.V){a.$1(b)
return}P.kq(null,null,this,a,b,-1,c)}catch(s){u=H.bx(s)
t=H.bR(s)
P.j_(null,null,this,u,H.k(t,"$iak"))}},
ir:function(a,b){return new P.iP(this,H.n(a,{func:1,ret:b}),b)},
c3:function(a){return new P.iO(this,H.n(a,{func:1,ret:-1}))},
dk:function(a,b){return new P.iQ(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ea:function(a,b){H.n(a,{func:1,ret:b})
if($.V===C.k)return a.$0()
return P.kp(null,null,this,a,b)},
cv:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.V===C.k)return a.$1(b)
return P.kq(null,null,this,a,b,c,d)},
jk:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.V===C.k)return a.$2(b,c)
return P.lV(null,null,this,a,b,c,d,e,f)}}
P.iP.prototype={
$0:function(){return this.a.ea(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iO.prototype={
$0:function(){return this.a.jl(this.b)},
$S:3}
P.iQ.prototype={
$1:function(a){var u=this.c
return this.a.jm(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iK.prototype={
ga_:function(a){return P.km(this,this.r,H.w(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u
H.B(b,H.w(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.kn()
this.c=u}return this.f0(u,b)}else return this.eS(0,b)},
eS:function(a,b){var u,t,s
H.B(b,H.w(this,0))
u=this.d
if(u==null){u=P.kn()
this.d=u}t=this.cV(b)
s=u[t]
if(s==null)u[t]=[this.bD(b)]
else{if(this.d0(s,b)>=0)return!1
s.push(this.bD(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hq(this.c,b)
else return this.hp(0,b)},
hp:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.fd(u,b)
s=this.d0(t,b)
if(s<0)return!1
this.df(t.splice(s,1)[0])
return!0},
f0:function(a,b){H.B(b,H.w(this,0))
if(H.k(a[b],"$icC")!=null)return!1
a[b]=this.bD(b)
return!0},
hq:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$icC")
if(u==null)return!1
this.df(u)
delete a[b]
return!0},
d3:function(){this.r=1073741823&this.r+1},
bD:function(a){var u,t
u=new P.cC(H.B(a,H.w(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.d3()
return u},
df:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.d3()},
cV:function(a){return J.by(a)&1073741823},
fd:function(a,b){return a[this.cV(b)]},
d0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cC.prototype={}
P.iL.prototype={
gU:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.c1(u))
else{u=this.c
if(u==null){this.scS(null)
return!1}else{this.scS(H.B(u.a,H.w(this,0)))
this.c=this.c.b
return!0}}},
scS:function(a){this.d=H.B(a,H.w(this,0))},
$iaJ:1}
P.fG.prototype={$id:1,$ib:1}
P.u.prototype={
ga_:function(a){return new H.di(a,this.gk(a),0,[H.cR(this,a,"u",0)])},
C:function(a,b){return this.j(a,b)},
js:function(a,b){var u,t
u=H.c([],[H.cR(this,a,"u",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.W(u,t,this.j(a,t))
return u},
jr:function(a){return this.js(a,!0)},
i:function(a){return P.jj(a,"[","]")}}
P.fJ.prototype={}
P.fK.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.m(a)
u.a=t+": "
u.a+=H.m(b)},
$S:12}
P.ab.prototype={
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.cR(this,a,"ab",0),H.cR(this,a,"ab",1)]})
for(u=J.bV(this.gaz(a));u.B();){t=u.gU(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.bW(this.gaz(a))},
i:function(a){return P.jW(a)},
$iM:1}
P.iR.prototype={
i:function(a){return P.jj(this,"{","}")},
C:function(a,b){var u,t,s
if(b<0)H.t(P.av(b,0,null,"index",null))
for(u=P.km(this,this.r,H.w(this,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.h(P.T(b,this,"index",null,t))},
$id:1,
$ik8:1}
P.ea.prototype={}
P.c0.prototype={}
P.d1.prototype={}
P.fg.prototype={
$ac0:function(){return[P.o,[P.b,P.A]]}}
P.i6.prototype={}
P.i7.prototype={
iA:function(a,b,c){var u,t,s
c=P.k6(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iW(t)
if(s.fc(a,b,c)!==c)s.dg(C.j.c7(a,c-1),0)
return new Uint8Array(t.subarray(0,H.lQ(0,s.b,t.length)))},
iz:function(a){return this.iA(a,0,null)},
$ad1:function(){return[P.o,[P.b,P.A]]}}
P.iW.prototype={
dg:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.i(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.i(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.i(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.i(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.i(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.i(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.i(u,t)
u[t]=128|a&63
return!1}},
fc:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.c7(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.b7(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dg(r,C.j.b7(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.i(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.i(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.i(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.i(u,q)
u[q]=128|r&63}}return s}}
P.a5.prototype={}
P.aj.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a&&!0},
gF:function(a){var u=this.a
return(u^C.h.ba(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.l6(H.ls(this))
t=P.d3(H.lq(this))
s=P.d3(H.lm(this))
r=P.d3(H.ln(this))
q=P.d3(H.lp(this))
p=P.d3(H.lr(this))
o=P.l7(H.lo(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.x.prototype={}
P.bi.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bi&&this.a===b.a},
gF:function(a){return C.h.gF(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fe()
t=this.a
if(t<0)return"-"+new P.bi(0-t).i(0)
s=u.$1(C.h.a1(t,6e7)%60)
r=u.$1(C.h.a1(t,1e6)%60)
q=new P.fd().$1(t%1e6)
return""+C.h.a1(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.fd.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:13}
P.fe.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:13}
P.bj.prototype={}
P.ds.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gbF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbE:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbF()+t+s
if(!this.a)return r
q=this.gbE()
p=P.fj(this.b)
return r+q+": "+p}}
P.bI.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.fx.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var u,t
u=H.a8(this.b)
if(typeof u!=="number")return u.aN()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gk:function(a){return this.f}}
P.i4.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i2.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hx.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f3.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fj(u)+"."}}
P.h7.prototype={
i:function(a){return"Out of Memory"},
$ibj:1}
P.dB.prototype={
i:function(a){return"Stack Overflow"},
$ibj:1}
P.f8.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e3.prototype={
i:function(a){return"Exception: "+this.a}}
P.fs.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.cI(s,0,75)+"...":s
return t+"\n"+r}}
P.A.prototype={}
P.d.prototype={
gk:function(a){var u,t
u=this.ga_(this)
for(t=0;u.B();)++t
return t},
C:function(a,b){var u,t,s
if(b<0)H.t(P.av(b,0,null,"index",null))
for(u=this.ga_(this),t=0;u.B();){s=u.gU(u)
if(b===t)return s;++t}throw H.h(P.T(b,this,"index",null,t))},
i:function(a){return P.la(this,"(",")")}}
P.aJ.prototype={}
P.b.prototype={$id:1}
P.M.prototype={}
P.H.prototype={
gF:function(a){return P.N.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.a_.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
p:function(a,b){return this===b},
gF:function(a){return H.ck(this)},
i:function(a){return"Instance of '"+H.bH(this)+"'"},
toString:function(){return this.i(this)}}
P.ak.prototype={}
P.o.prototype={$ik0:1}
P.br.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.eP.prototype={
gk:function(a){return a.length}}
W.eR.prototype={
i:function(a){return String(a)}}
W.eS.prototype={
i:function(a){return String(a)}}
W.cW.prototype={}
W.cX.prototype={}
W.bB.prototype={
cB:function(a,b,c){if(c!=null)return this.fe(a,b,P.m1(c,null))
return this.ff(a,b)},
ej:function(a,b){return this.cB(a,b,null)},
fe:function(a,b,c){return a.getContext(b,c)},
ff:function(a,b){return a.getContext(b)},
$ibB:1,
$ijQ:1}
W.bC.prototype={
fg:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
iL:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibC:1}
W.bh.prototype={
gk:function(a){return a.length}}
W.c3.prototype={$ic3:1}
W.f4.prototype={
gk:function(a){return a.length}}
W.O.prototype={$iO:1}
W.c4.prototype={
gk:function(a){return a.length}}
W.f5.prototype={}
W.aE.prototype={}
W.aF.prototype={}
W.f6.prototype={
gk:function(a){return a.length}}
W.f7.prototype={
gk:function(a){return a.length}}
W.f9.prototype={
gk:function(a){return a.length}}
W.c5.prototype={$ic5:1}
W.c6.prototype={
ek:function(a,b){return a.getElementById(b)}}
W.fa.prototype={
i:function(a){return String(a)}}
W.d4.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[[P.aa,P.a_]]},
$au:function(){return[[P.aa,P.a_]]},
$id:1,
$ad:function(){return[[P.aa,P.a_]]},
$ib:1,
$ab:function(){return[[P.aa,P.a_]]},
$ay:function(){return[[P.aa,P.a_]]}}
W.d5.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaD(a))+" x "+H.m(this.gay(a))},
p:function(a,b){var u
if(b==null)return!1
if(!H.cP(b,"$iaa",[P.a_],"$aaa"))return!1
u=J.eO(b)
return a.left===u.gbs(b)&&a.top===u.gbx(b)&&this.gaD(a)===u.gaD(b)&&this.gay(a)===u.gay(b)},
gF:function(a){return W.kl(C.i.gF(a.left),C.i.gF(a.top),C.i.gF(this.gaD(a)),C.i.gF(this.gay(a)))},
gdl:function(a){return a.bottom},
gay:function(a){return a.height},
gbs:function(a){return a.left},
gbv:function(a){return a.right},
gbx:function(a){return a.top},
gaD:function(a){return a.width},
$iaa:1,
$aaa:function(){return[P.a_]}}
W.fb.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[P.o]},
$au:function(){return[P.o]},
$id:1,
$ad:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ay:function(){return[P.o]}}
W.fc.prototype={
gk:function(a){return a.length}}
W.it.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.i(u,b)
return H.k(u[b],"$ia1")},
h:function(a,b){J.jM(this.a,b)
return b},
ga_:function(a){var u=this.jr(this)
return new J.ae(u,u.length,0,[H.w(u,0)])},
$au:function(){return[W.a1]},
$ad:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
W.a1.prototype={
gdq:function(a){return new W.it(a,a.children)},
gdr:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aN()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aN()
if(r<0)r=-r*0
return new P.aa(u,t,s,r,[P.a_])},
i:function(a){return a.localName},
$ia1:1}
W.l.prototype={$il:1}
W.e.prototype={
il:function(a,b,c,d){H.n(c,{func:1,args:[W.l]})
if(c!=null)this.eT(a,b,c,!1)},
eT:function(a,b,c,d){return a.addEventListener(b,H.bP(H.n(c,{func:1,args:[W.l]}),1),!1)},
$ie:1}
W.aH.prototype={$iaH:1}
W.fm.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aH]},
$au:function(){return[W.aH]},
$id:1,
$ad:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$ay:function(){return[W.aH]}}
W.fn.prototype={
gk:function(a){return a.length}}
W.fr.prototype={
gk:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.fv.prototype={
gk:function(a){return a.length}}
W.bF.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.G]},
$au:function(){return[W.G]},
$id:1,
$ad:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ibF:1,
$ay:function(){return[W.G]}}
W.d9.prototype={}
W.bk.prototype={$ibk:1,
gdt:function(a){return a.data}}
W.ca.prototype={$ica:1,$ijQ:1}
W.aM.prototype={$iaM:1}
W.fH.prototype={
i:function(a){return String(a)}}
W.ce.prototype={}
W.fS.prototype={
gk:function(a){return a.length}}
W.fT.prototype={
j:function(a,b){return P.bb(a.get(H.R(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bb(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.N(a,new W.fU(u))
return u},
gk:function(a){return a.size},
$aab:function(){return[P.o,null]},
$iM:1,
$aM:function(){return[P.o,null]}}
W.fU.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.fV.prototype={
j:function(a,b){return P.bb(a.get(H.R(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bb(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.N(a,new W.fW(u))
return u},
gk:function(a){return a.size},
$aab:function(){return[P.o,null]},
$iM:1,
$aM:function(){return[P.o,null]}}
W.fW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aP.prototype={$iaP:1}
W.fX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aP]},
$au:function(){return[W.aP]},
$id:1,
$ad:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$ay:function(){return[W.aP]}}
W.a9.prototype={$ia9:1}
W.is.prototype={
ga_:function(a){var u=this.a.childNodes
return new W.d7(u,u.length,-1,[H.cR(C.N,u,"y",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
$au:function(){return[W.G]},
$ad:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.eu(a):u},
Z:function(a,b){return a.appendChild(b)},
$iG:1}
W.ci.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.G]},
$au:function(){return[W.G]},
$id:1,
$ad:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ay:function(){return[W.G]}}
W.aR.prototype={$iaR:1,
gk:function(a){return a.length}}
W.h9.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aR]},
$au:function(){return[W.aR]},
$id:1,
$ad:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$ay:function(){return[W.aR]}}
W.hj.prototype={
j:function(a,b){return P.bb(a.get(H.R(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bb(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.N(a,new W.hk(u))
return u},
gk:function(a){return a.size},
$aab:function(){return[P.o,null]},
$iM:1,
$aM:function(){return[P.o,null]}}
W.hk.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hm.prototype={
gk:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.hu.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aS]},
$au:function(){return[W.aS]},
$id:1,
$ad:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$ay:function(){return[W.aS]}}
W.aT.prototype={$iaT:1}
W.hv.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aT]},
$au:function(){return[W.aT]},
$id:1,
$ad:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$ay:function(){return[W.aT]}}
W.aU.prototype={$iaU:1,
gk:function(a){return a.length}}
W.hz.prototype={
j:function(a,b){return this.d1(a,H.R(b))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.o,P.o]})
for(u=0;!0;++u){t=this.fj(a,u)
if(t==null)return
b.$2(t,this.d1(a,t))}},
gaz:function(a){var u=H.c([],[P.o])
this.N(a,new W.hA(u))
return u},
gk:function(a){return a.length},
d1:function(a,b){return a.getItem(b)},
fj:function(a,b){return a.key(b)},
$aab:function(){return[P.o,P.o]},
$iM:1,
$aM:function(){return[P.o,P.o]}}
W.hA.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:37}
W.ax.prototype={$iax:1}
W.aV.prototype={$iaV:1}
W.ay.prototype={$iay:1}
W.hH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.ay]},
$au:function(){return[W.ay]},
$id:1,
$ad:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$ay:function(){return[W.ay]}}
W.hI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aV]},
$au:function(){return[W.aV]},
$id:1,
$ad:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$ay:function(){return[W.aV]}}
W.hM.prototype={
gk:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.az.prototype={$iaz:1}
W.hP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aX]},
$au:function(){return[W.aX]},
$id:1,
$ad:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$ay:function(){return[W.aX]}}
W.hQ.prototype={
gk:function(a){return a.length}}
W.bt.prototype={}
W.i5.prototype={
i:function(a){return String(a)}}
W.ij.prototype={$ijQ:1}
W.ik.prototype={
gk:function(a){return a.length}}
W.b_.prototype={
giH:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.an("deltaY is not supported"))},
giG:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.an("deltaX is not supported"))},
$ib_:1}
W.cA.prototype={
hs:function(a,b){return a.requestAnimationFrame(H.bP(H.n(b,{func:1,ret:-1,args:[P.a_]}),1))},
f6:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iu.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.O]},
$au:function(){return[W.O]},
$id:1,
$ad:function(){return[W.O]},
$ib:1,
$ab:function(){return[W.O]},
$ay:function(){return[W.O]}}
W.dZ.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
p:function(a,b){var u
if(b==null)return!1
if(!H.cP(b,"$iaa",[P.a_],"$aaa"))return!1
u=J.eO(b)
return a.left===u.gbs(b)&&a.top===u.gbx(b)&&a.width===u.gaD(b)&&a.height===u.gay(b)},
gF:function(a){return W.kl(C.i.gF(a.left),C.i.gF(a.top),C.i.gF(a.width),C.i.gF(a.height))},
gay:function(a){return a.height},
gaD:function(a){return a.width}}
W.iH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aI]},
$au:function(){return[W.aI]},
$id:1,
$ad:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$ay:function(){return[W.aI]}}
W.ef.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.G]},
$au:function(){return[W.G]},
$id:1,
$ad:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ay:function(){return[W.G]}}
W.iS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aU]},
$au:function(){return[W.aU]},
$id:1,
$ad:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$ay:function(){return[W.aU]}}
W.iT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.ax]},
$au:function(){return[W.ax]},
$id:1,
$ad:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$ay:function(){return[W.ax]}}
W.iv.prototype={}
W.jv.prototype={}
W.iw.prototype={}
W.ix.prototype={
$1:function(a){return this.a.$1(H.k(a,"$il"))},
$S:24}
W.y.prototype={
ga_:function(a){return new W.d7(a,this.gk(a),-1,[H.cR(this,a,"y",0)])}}
W.d7.prototype={
B:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sd2(J.kY(this.a,u))
this.c=u
return!0}this.sd2(null)
this.c=t
return!1},
gU:function(a){return this.d},
sd2:function(a){this.d=H.B(a,H.w(this,0))},
$iaJ:1}
W.dY.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.cH.prototype={}
W.cI.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.es.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.cJ.prototype={}
W.cK.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
P.eC.prototype={$ibk:1,
gdt:function(a){return this.a}}
P.j2.prototype={
$2:function(a,b){this.a[a]=b},
$S:12}
P.fo.prototype={
gbI:function(){var u,t,s
u=this.b
t=H.ap(u,"u",0)
s=W.a1
return new H.fL(new H.il(u,H.n(new P.fp(),{func:1,ret:P.a5,args:[t]}),[t]),H.n(new P.fq(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.jM(this.b.a,b)},
gk:function(a){return J.bW(this.gbI().a)},
j:function(a,b){var u=this.gbI()
return u.b.$1(J.jN(u.a,b))},
ga_:function(a){var u=P.jV(this.gbI(),!1,W.a1)
return new J.ae(u,u.length,0,[H.w(u,0)])},
$au:function(){return[W.a1]},
$ad:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
P.fp.prototype={
$1:function(a){return!!J.X(H.k(a,"$iG")).$ia1},
$S:25}
P.fq.prototype={
$1:function(a){return H.f(H.k(a,"$iG"),"$ia1")},
$S:26}
P.iM.prototype={
gbv:function(a){var u=this.a
if(typeof u!=="number")return u.D()
return H.B(u+this.c,H.w(this,0))},
gdl:function(a){var u=this.b
if(typeof u!=="number")return u.D()
return H.B(u+this.d,H.w(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cP(b,"$iaa",[P.a_],"$aaa")){u=this.a
t=J.eO(b)
if(u==t.gbs(b)){s=this.b
if(s==t.gbx(b)){if(typeof u!=="number")return u.D()
r=H.w(this,0)
if(H.B(u+this.c,r)===t.gbv(b)){if(typeof s!=="number")return s.D()
u=H.B(s+this.d,r)===t.gdl(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u,t,s,r,q
u=this.a
t=J.by(u)
s=this.b
r=J.by(s)
if(typeof u!=="number")return u.D()
q=H.w(this,0)
u=C.h.gF(H.B(u+this.c,q))
if(typeof s!=="number")return s.D()
q=C.h.gF(H.B(s+this.d,q))
return P.lM(P.iJ(P.iJ(P.iJ(P.iJ(0,t),r),u),q))}}
P.aa.prototype={
gbs:function(a){return this.a},
gbx:function(a){return this.b},
gaD:function(a){return this.c},
gay:function(a){return this.d}}
P.b2.prototype={$ib2:1}
P.fD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return this.ao(a,b)},
C:function(a,b){return this.j(a,b)},
ao:function(a,b){return a.getItem(b)},
$au:function(){return[P.b2]},
$id:1,
$ad:function(){return[P.b2]},
$ib:1,
$ab:function(){return[P.b2]},
$ay:function(){return[P.b2]}}
P.b7.prototype={$ib7:1}
P.h5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return this.ao(a,b)},
C:function(a,b){return this.j(a,b)},
ao:function(a,b){return a.getItem(b)},
$au:function(){return[P.b7]},
$id:1,
$ad:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$ay:function(){return[P.b7]}}
P.hb.prototype={
gk:function(a){return a.length}}
P.hF.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return this.ao(a,b)},
C:function(a,b){return this.j(a,b)},
ao:function(a,b){return a.getItem(b)},
$au:function(){return[P.o]},
$id:1,
$ad:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ay:function(){return[P.o]}}
P.p.prototype={
gdq:function(a){return new P.fo(a,new W.is(a))}}
P.ba.prototype={$iba:1}
P.hR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return this.ao(a,b)},
C:function(a,b){return this.j(a,b)},
ao:function(a,b){return a.getItem(b)},
$au:function(){return[P.ba]},
$id:1,
$ad:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$ay:function(){return[P.ba]}}
P.e8.prototype={}
P.e9.prototype={}
P.ei.prototype={}
P.ej.prototype={}
P.et.prototype={}
P.eu.prototype={}
P.eA.prototype={}
P.eB.prototype={}
P.eU.prototype={
gk:function(a){return a.length}}
P.eV.prototype={
j:function(a,b){return P.bb(a.get(H.R(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bb(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.N(a,new P.eW(u))
return u},
gk:function(a){return a.size},
$aab:function(){return[P.o,null]},
$iM:1,
$aM:function(){return[P.o,null]}}
P.eW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.eX.prototype={
gk:function(a){return a.length}}
P.bz.prototype={}
P.h6.prototype={
gk:function(a){return a.length}}
P.dX.prototype={}
P.cY.prototype={$icY:1}
P.d8.prototype={$id8:1}
P.dv.prototype={$idv:1}
P.bJ.prototype={
c_:function(a,b){return a.activeTexture(b)},
dj:function(a,b,c){return a.attachShader(b,c)},
al:function(a,b,c){return a.bindBuffer(b,c)},
is:function(a,b,c){return a.bindFramebuffer(b,c)},
au:function(a,b,c){return a.bindTexture(b,c)},
it:function(a,b,c){return a.blendFunc(b,c)},
dm:function(a,b,c,d){return a.bufferData(b,c,d)},
iv:function(a,b){return a.clear(b)},
iw:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ix:function(a,b){return a.clearDepth(b)},
iy:function(a,b){return a.compileShader(b)},
iC:function(a,b){return a.createShader(b)},
iE:function(a,b){return a.deleteProgram(b)},
iF:function(a,b){return a.deleteShader(b)},
iI:function(a,b){return a.depthFunc(b)},
iJ:function(a,b){return a.disable(b)},
dv:function(a,b){return a.disableVertexAttribArray(b)},
iK:function(a,b,c,d,e){return a.drawElements(b,c,H.a8(d),H.a8(e))},
cb:function(a,b){return a.enable(b)},
dz:function(a,b){return a.enableVertexAttribArray(b)},
eg:function(a,b,c){return a.getActiveAttrib(b,c)},
eh:function(a,b,c){return a.getActiveUniform(b,c)},
ei:function(a,b,c){return a.getAttribLocation(b,c)},
cC:function(a,b){return a.getParameter(b)},
el:function(a,b){return a.getProgramInfoLog(b)},
bz:function(a,b,c){return a.getProgramParameter(b,c)},
em:function(a,b){return a.getShaderInfoLog(b)},
en:function(a,b,c){return a.getShaderParameter(b,c)},
eo:function(a,b,c){return a.getUniformLocation(b,c)},
iW:function(a,b){return a.linkProgram(b)},
jf:function(a,b,c){return a.pixelStorei(b,c)},
er:function(a,b,c){return a.shaderSource(b,c)},
jo:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.X(g)
if(!!u.$ibk)t=!0
else t=!1
if(t){this.hJ(a,b,c,d,e,f,P.m2(g))
return}if(!!u.$ica)u=!0
else u=!1
if(u){this.hK(a,b,c,d,e,f,g)
return}throw H.h(P.l0("Incorrect number or type of arguments"))},
jn:function(a,b,c,d,e,f,g){return this.jo(a,b,c,d,e,f,g,null,null,null)},
hJ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hK:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bw:function(a,b,c,d){return a.texParameteri(b,c,d)},
G:function(a,b,c){return a.uniform1f(b,c)},
K:function(a,b,c){return a.uniform1i(b,c)},
n:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ed:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ee:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cz:function(a,b){return a.useProgram(b)},
ju:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jv:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibJ:1}
P.dw.prototype={$idw:1}
P.dD.prototype={$idD:1}
P.dL.prototype={$idL:1}
P.hw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return P.bb(this.fi(a,b))},
C:function(a,b){return this.j(a,b)},
fi:function(a,b){return a.item(b)},
$au:function(){return[[P.M,,,]]},
$id:1,
$ad:function(){return[[P.M,,,]]},
$ib:1,
$ab:function(){return[[P.M,,,]]},
$ay:function(){return[[P.M,,,]]}}
P.ep.prototype={}
P.eq.prototype={}
O.S.prototype={
bB:function(a){this.sfn(H.c([],[a]))
this.sd7(null)
this.sd4(null)
this.sd8(null)},
cD:function(a,b,c){var u=H.ap(this,"S",0)
H.n(b,{func:1,ret:P.a5,args:[[P.d,u]]})
u={func:1,ret:-1,args:[P.A,[P.d,u]]}
H.n(a,u)
H.n(c,u)
this.sd7(b)
this.sd4(a)
this.sd8(c)},
aO:function(a,b){return this.cD(a,null,b)},
aT:function(a){var u
H.j(a,"$id",[H.ap(this,"S",0)],"$ad")
u=this.b
if(u!=null)return u.$1(a)
return!0},
bT:function(a,b){var u
H.j(b,"$id",[H.ap(this,"S",0)],"$ad")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
ga_:function(a){var u=this.a
return new J.ae(u,u.length,0,[H.w(u,0)])},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ap(this,"S",0)
H.B(b,u)
u=[u]
if(this.aT(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.bT(s,H.c([b],u))}},
aV:function(a,b){var u,t
H.j(b,"$id",[H.ap(this,"S",0)],"$ad")
if(this.aT(b)){u=this.a
t=u.length
C.a.aV(u,b)
this.bT(t,b)}},
W:function(a,b,c){var u,t,s,r
u=H.ap(this,"S",0)
H.B(c,u)
t=this.a
if(b>=t.length)return H.i(t,b)
s=t[b]
if(!J.W(s,c)&&this.aT(H.c([c],[u]))){C.a.W(this.a,b,c)
t=[u]
u=H.j(H.c([s],t),"$id",[u],"$ad")
r=this.d
if(r!=null)r.$2(b,u)
this.bT(b,H.c([c],t))}},
sfn:function(a){this.a=H.j(a,"$ib",[H.ap(this,"S",0)],"$ab")},
sd7:function(a){this.b=H.n(a,{func:1,ret:P.a5,args:[[P.d,H.ap(this,"S",0)]]})},
sd4:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.A,[P.d,H.ap(this,"S",0)]]})},
sd8:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.A,[P.d,H.ap(this,"S",0)]]})},
$id:1}
O.cd.prototype={
gk:function(a){return this.a.length},
gm:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
eC:function(a){var u=this.b
if(u!=null)u.v(a)},
aE:function(){return this.eC(null)},
gM:function(a){var u=this.a
if(u.length>0)return C.a.gcm(u)
else return V.bp()},
bu:function(a){var u=this.a
if(a==null)C.a.h(u,V.bp())
else C.a.h(u,a)
this.aE()},
aA:function(){var u=this.a
if(u.length>0){u.pop()
this.aE()}},
sbJ:function(a){this.a=H.j(a,"$ib",[V.a6],"$ab")}}
E.eY.prototype={}
E.ag.prototype={
scF:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gm().O(0,this.ge5())
t=this.c
if(t!=null)t.gm().h(0,this.ge5())
s=new D.C("shape",u,this.c,this,[F.dx])
s.b=!0
this.af(s)}},
se0:function(a){var u,t
if(!J.W(this.r,a)){u=this.r
if(u!=null)u.gm().O(0,this.ge3())
if(a!=null)a.gm().h(0,this.ge3())
this.r=a
t=new D.C("mover",u,a,this,[U.a3])
t.b=!0
this.af(t)}},
ah:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.a:null
if(!J.W(t,this.x)){s=this.x
this.x=t
r=new D.C("matrix",s,t,this,[V.a6])
r.b=!0
this.af(r)}for(u=this.y.a,u=new J.ae(u,u.length,0,[H.w(u,0)]);u.B();)u.d.ah(0,b)},
a4:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gM(u))
else C.a.h(u.a,t.q(0,u.gM(u)))
u.aE()
a.cu(this.f)
u=a.dy
s=(u&&C.a).gcm(u)
if(s!=null&&this.d!=null)s.e8(a,this)
for(u=this.y.a,u=new J.ae(u,u.length,0,[H.w(u,0)]);u.B();)u.d.a4(a)
a.ct()
a.dx.aA()},
gm:function(){var u=this.z
if(u==null){u=D.J()
this.z=u}return u},
af:function(a){var u=this.z
if(u!=null)u.v(a)},
a2:function(){return this.af(null)},
e6:function(a){H.k(a,"$iv")
this.e=null
this.af(a)},
j6:function(){return this.e6(null)},
e4:function(a){this.af(H.k(a,"$iv"))},
j5:function(){return this.e4(null)},
e2:function(a){this.af(H.k(a,"$iv"))},
j2:function(){return this.e2(null)},
j1:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$id",[E.ag],"$ad")
for(u=b.length,t=this.ge1(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aG()
o.sa0(null)
o.sak(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sa0(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
j4:function(a,b){var u,t,s,r,q
H.j(b,"$id",[E.ag],"$ad")
for(u=b.length,t=this.ge1(),s=0;s<b.length;b.length===u||(0,H.z)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.aG()
q.sa0(null)
q.sak(null)
q.c=null
q.d=0
r.z=q}q.O(0,t)}}this.a2()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
seD:function(a,b){this.y=H.j(b,"$iS",[E.ag],"$aS")},
$iaQ:1}
E.hf.prototype={
ez:function(a,b){var u,t
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
u=new O.cd()
t=[V.a6]
u.sbJ(H.c([],t))
u.b=null
u.gm().h(0,new E.hg(this))
this.cy=u
u=new O.cd()
u.sbJ(H.c([],t))
u.b=null
u.gm().h(0,new E.hh(this))
this.db=u
u=new O.cd()
u.sbJ(H.c([],t))
u.b=null
u.gm().h(0,new E.hi(this))
this.dx=u
this.shI(H.c([],[O.bs]))
u=this.dy;(u&&C.a).h(u,null)
this.shE(new H.aL([P.o,A.cm]))},
gjg:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.gM(u)
t=this.db
t=u.q(0,t.gM(t))
this.z=t
u=t}return u},
cu:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gcm(u):a;(u&&C.a).h(u,t)},
ct:function(){var u=this.dy
if(u.length>1)u.pop()},
di:function(a){var u=a.b
if(u.length===0)throw H.h(P.r("May not cache a shader with no name."))
if(this.fr.ds(0,u))throw H.h(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.W(0,u,a)},
shI:function(a){this.dy=H.j(a,"$ib",[O.bs],"$ab")},
shE:function(a){this.fr=H.j(a,"$iM",[P.o,A.cm],"$aM")}}
E.hg.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.z=null
u.ch=null},
$S:8}
E.hh.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:8}
E.hi.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.ch=null
u.cx=null},
$S:8}
E.dH.prototype={
cO:function(a){H.k(a,"$iv")
this.e9()},
cN:function(){return this.cO(null)},
giQ:function(){var u,t,s
u=Date.now()
t=C.h.a1(P.jT(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aj(u,!1)
return s/t},
dc:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.q()
if(typeof u!=="number")return H.D(u)
s=C.i.cj(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.q()
r=C.i.cj(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kb(C.n,this.gji())}},
e9:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.hL(this),{func:1,ret:-1,args:[P.a_]})
C.y.f6(u)
C.y.hs(u,W.kt(t,P.a_))}},
jh:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dc()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aj(r,!1)
s.y=P.jT(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aE()
r=s.db
C.a.sk(r.a,0)
r.aE()
r=s.dx
C.a.sk(r.a,0)
r.aE()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.a4(this.e)}}catch(q){u=H.bx(q)
t=H.bR(q)
P.jJ("Error: "+H.m(u))
P.jJ("Stack: "+H.m(t))
throw H.h(u)}}}
E.hL.prototype={
$1:function(a){var u
H.mh(a)
u=this.a
if(u.ch){u.ch=!1
u.jh()}},
$S:29}
Z.dU.prototype={$imq:1}
Z.cZ.prototype={
X:function(a){var u,t,s
try{t=a.a
C.b.dz(t,this.e)
C.b.ju(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.bx(s)
t=P.r('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.h(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.dV.prototype={$imr:1}
Z.bZ.prototype={
ax:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
X:function(a){var u,t
u=this.a
C.b.al(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].X(a)},
aC:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dv(s,u[t].e)
C.b.al(s,this.a.a,null)},
a4:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.i(r,s)
q=r[s]
r=q.c
p=r.a
C.b.al(t,p,r.b)
C.b.iK(t,q.a,q.b,5123,0)
C.b.al(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.o]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aq(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(t,", ")+"\nAttrs:   "+C.a.w(p,", ")},
sfh:function(a){this.b=H.j(a,"$ib",[Z.bl],"$ab")},
$imx:1}
Z.bl.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bH(this.c)+"'")+"]"}}
Z.aZ.prototype={
gcG:function(a){var u,t
u=this.a
t=(u&$.aB().a)!==0?3:0
if((u&$.be().a)!==0)t+=3
if((u&$.bd().a)!==0)t+=3
if((u&$.bf().a)!==0)t+=2
if((u&$.bg().a)!==0)t+=3
if((u&$.cS().a)!==0)t+=3
if((u&$.cT().a)!==0)t+=4
if((u&$.bU().a)!==0)++t
return(u&$.bc().a)!==0?t+4:t},
iq:function(a){var u,t,s
u=$.aB()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.be()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bd()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bf()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bg()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cS()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cT()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bU()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bc()
if((t&u.a)!==0)if(s===a)return u
return $.kW()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aZ))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.o])
t=this.a
if((t&$.aB().a)!==0)C.a.h(u,"Pos")
if((t&$.be().a)!==0)C.a.h(u,"Norm")
if((t&$.bd().a)!==0)C.a.h(u,"Binm")
if((t&$.bf().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bg().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cS().a)!==0)C.a.h(u,"Clr3")
if((t&$.cT().a)!==0)C.a.h(u,"Clr4")
if((t&$.bU().a)!==0)C.a.h(u,"Weight")
if((t&$.bc().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.w(u,"|")}}
D.f0.prototype={}
D.aG.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.n(b,u)
if(this.a==null)this.sa0(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.v]})
u=this.a
u=u==null?null:C.a.aw(u,b)
if(u===!0){u=this.a
t=(u&&C.a).O(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.aw(u,b)
if(u===!0){u=this.b
t=(u&&C.a).O(u,b)||t}return t},
v:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.v(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.N(P.jV(t,!0,{func:1,ret:-1,args:[D.v]}),new D.fk(u))
t=this.b
if(t!=null){this.sak(H.c([],[{func:1,ret:-1,args:[D.v]}]))
C.a.N(t,new D.fl(u))}return!0},
iM:function(){return this.v(null)},
jj:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.v(t)}}},
aB:function(a){return this.jj(a,!0,!1)},
sa0:function(a){this.a=H.j(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
sak:function(a){this.b=H.j(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.fk.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.fl.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.v.prototype={}
D.bm.prototype={}
D.bn.prototype={}
D.C.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.d_.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d_))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.df.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.df))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.fC.prototype={
jc:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j8:function(a){this.c=a.b
this.d.O(0,a.a)
return!1},
sho:function(a){this.d=H.j(a,"$ik8",[P.A],"$ak8")}}
X.dj.prototype={}
X.fI.prototype={
aR:function(a,b){var u,t,s,r,q,p,o,n
u=new P.aj(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.q()
q=b.b
p=this.ch
if(typeof q!=="number")return q.q()
o=new V.a4(t.a+s*r,t.b+q*p)
p=this.a.gaK()
n=new X.b5(a,V.b8(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cs:function(a,b){this.r=a.a
return!1},
b_:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eq()
if(typeof u!=="number")return u.ef()
this.r=(u&~t)>>>0
return!1},
aZ:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.aR(a,b))
return!0},
jd:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaK()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.q()
o=a.b
n=this.cy
if(typeof o!=="number")return o.q()
r=new X.cf(new V.P(q*p,o*n),t,s,new P.aj(r,!1),this)
r.b=!0
u.v(r)
return!0},
fY:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aj(Date.now(),!1)
t=this.f
s=new X.dj(c,a,this.a.gaK(),b,u,this)
s.b=!0
t.v(s)
this.y=u
this.x=V.b8()}}
X.am.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.am))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b5.prototype={}
X.fY.prototype={
bG:function(a,b,c){var u,t,s
u=new P.aj(Date.now(),!1)
t=this.a.gaK()
s=new X.b5(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cs:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.v(this.bG(a,b,!0))
return!0},
b_:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eq()
if(typeof u!=="number")return u.ef()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.v(this.bG(a,b,!0))
return!0},
aZ:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.bG(a,b,!1))
return!0},
je:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaK()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.q()
p=a.b
o=this.ch
if(typeof p!=="number")return p.q()
s=new X.cf(new V.P(r*q,p*o),t,b,new P.aj(s,!1),this)
s.b=!0
u.v(s)
return!0},
gdw:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
gby:function(){var u=this.c
if(u==null){u=D.J()
this.c=u}return u},
ge_:function(){var u=this.d
if(u==null){u=D.J()
this.d=u}return u}}
X.cf.prototype={}
X.ha.prototype={}
X.dJ.prototype={}
X.hO.prototype={
aR:function(a,b){var u,t,s,r
H.j(a,"$ib",[V.a4],"$ab")
u=new P.aj(Date.now(),!1)
t=a.length>0?a[0]:V.b8()
s=this.a.gaK()
r=new X.dJ(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jb:function(a){var u
H.j(a,"$ib",[V.a4],"$ab")
u=this.b
if(u==null)return!1
u.v(this.aR(a,!0))
return!0},
j9:function(a){var u
H.j(a,"$ib",[V.a4],"$ab")
u=this.c
if(u==null)return!1
u.v(this.aR(a,!0))
return!0},
ja:function(a){var u
H.j(a,"$ib",[V.a4],"$ab")
u=this.d
if(u==null)return!1
u.v(this.aR(a,!1))
return!0}}
X.dP.prototype={
gaK:function(){var u=this.a
return V.he(0,0,C.m.gdr(u).c,C.m.gdr(u).d)},
cY:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.df(u,new X.am(t,a.altKey,a.shiftKey))},
aJ:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
bZ:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
at:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.E()
q=u.top
if(typeof s!=="number")return s.E()
return new V.a4(t-r,s-q)},
aU:function(a){return new V.P(a.movementX,a.movementY)},
bV:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.a4])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
o=C.i.ag(p.pageX)
C.i.ag(p.pageY)
n=u.left
C.i.ag(p.pageX)
C.a.h(t,new V.a4(o-n,C.i.ag(p.pageY)-u.top))}return t},
aq:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d_(u,new X.am(t,a.altKey,a.shiftKey))},
bK:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.E()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.E()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
fS:function(a){this.f=!0},
fG:function(a){this.f=!1},
fM:function(a){H.k(a,"$ia9")
if(this.f&&this.bK(a))a.preventDefault()},
fW:function(a){var u
H.k(a,"$iaM")
if(!this.f)return
u=this.cY(a)
this.b.jc(u)},
fU:function(a){var u
H.k(a,"$iaM")
if(!this.f)return
u=this.cY(a)
this.b.j8(u)},
h_:function(a){var u,t,s,r
H.k(a,"$ia9")
u=this.a
u.focus()
this.f=!0
this.aJ(a)
if(this.x){t=this.aq(a)
s=this.aU(a)
if(this.d.cs(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aq(a)
r=this.at(a)
if(this.c.cs(t,r))a.preventDefault()},
h3:function(a){var u,t,s
H.k(a,"$ia9")
this.aJ(a)
u=this.aq(a)
if(this.x){t=this.aU(a)
if(this.d.b_(u,t))a.preventDefault()
return}if(this.r)return
s=this.at(a)
if(this.c.b_(u,s))a.preventDefault()},
fQ:function(a){var u,t,s
H.k(a,"$ia9")
if(!this.bK(a)){this.aJ(a)
u=this.aq(a)
if(this.x){t=this.aU(a)
if(this.d.b_(u,t))a.preventDefault()
return}if(this.r)return
s=this.at(a)
if(this.c.b_(u,s))a.preventDefault()}},
h1:function(a){var u,t,s
H.k(a,"$ia9")
this.aJ(a)
u=this.aq(a)
if(this.x){t=this.aU(a)
if(this.d.aZ(u,t))a.preventDefault()
return}if(this.r)return
s=this.at(a)
if(this.c.aZ(u,s))a.preventDefault()},
fO:function(a){var u,t,s
H.k(a,"$ia9")
if(!this.bK(a)){this.aJ(a)
u=this.aq(a)
if(this.x){t=this.aU(a)
if(this.d.aZ(u,t))a.preventDefault()
return}if(this.r)return
s=this.at(a)
if(this.c.aZ(u,s))a.preventDefault()}},
h5:function(a){var u,t
H.k(a,"$ib_")
this.aJ(a)
u=new V.P((a&&C.x).giG(a),C.x.giH(a)).t(0,180)
if(this.x){if(this.d.jd(u))a.preventDefault()
return}if(this.r)return
t=this.at(a)
if(this.c.je(u,t))a.preventDefault()},
h7:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aq(this.y)
s=this.at(this.y)
this.d.fY(t,s,u)}},
hl:function(a){var u
H.k(a,"$iaz")
this.a.focus()
this.f=!0
this.bZ(a)
u=this.bV(a)
if(this.e.jb(u))a.preventDefault()},
hh:function(a){var u
H.k(a,"$iaz")
this.bZ(a)
u=this.bV(a)
if(this.e.j9(u))a.preventDefault()},
hj:function(a){var u
H.k(a,"$iaz")
this.bZ(a)
u=this.bV(a)
if(this.e.ja(u))a.preventDefault()},
sf7:function(a){this.z=H.j(a,"$ib",[[P.co,P.N]],"$ab")}}
D.b1.prototype={
gm:function(){var u=this.d
if(u==null){u=D.J()
this.d=u}return u},
ap:function(a){var u
H.k(a,"$iv")
u=this.d
if(u!=null)u.v(a)},
eF:function(){return this.ap(null)},
$iZ:1,
$iaQ:1}
D.Z.prototype={$iaQ:1}
D.dg.prototype={
gm:function(){var u=this.Q
if(u==null){u=D.J()
this.Q=u}return u},
ap:function(a){var u=this.Q
if(u!=null)u.v(a)},
d6:function(a){var u
H.k(a,"$iv")
u=this.ch
if(u!=null)u.v(a)},
fX:function(){return this.d6(null)},
h9:function(a){var u,t,s
H.j(a,"$id",[D.Z],"$ad")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.f1(s))return!1}return!0},
fw:function(a,b){var u,t,s,r,q,p,o,n
u=D.Z
H.j(b,"$id",[u],"$ad")
for(t=b.length,s=this.gd5(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=H.k(b[p],"$iZ")
if(o instanceof D.b1)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.aG()
n.sa0(null)
n.sak(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sa0(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bm(a,b,this,[u])
u.b=!0
this.ap(u)},
hd:function(a,b){var u,t,s,r,q,p
u=D.Z
H.j(b,"$id",[u],"$ad")
for(t=b.length,s=this.gd5(),r=0;r<b.length;b.length===t||(0,H.z)(b),++r){q=H.k(b[r],"$iZ")
if(q instanceof D.b1)C.a.O(this.e,q)
p=q.d
if(p==null){p=new D.aG()
p.sa0(null)
p.sak(null)
p.c=null
p.d=0
q.d=p}p.O(0,s)}u=new D.bn(a,b,this,[u])
u.b=!0
this.ap(u)},
f1:function(a){var u=C.a.aw(this.e,a)
return u},
sf5:function(a){this.e=H.j(a,"$ib",[D.b1],"$ab")},
shn:function(a){this.f=H.j(a,"$ib",[D.du],"$ab")},
shG:function(a){this.r=H.j(a,"$ib",[D.dA],"$ab")},
shT:function(a){this.x=H.j(a,"$ib",[D.dE],"$ab")},
shU:function(a){this.y=H.j(a,"$ib",[D.dF],"$ab")},
shV:function(a){this.z=H.j(a,"$ib",[D.dG],"$ab")},
$ad:function(){return[D.Z]},
$aS:function(){return[D.Z]}}
D.du.prototype={$iZ:1,$iaQ:1}
D.dA.prototype={$iZ:1,$iaQ:1}
D.dE.prototype={$iZ:1,$iaQ:1}
D.dF.prototype={$iZ:1,$iaQ:1}
D.dG.prototype={$iZ:1,$iaQ:1}
V.Y.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.au.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.fi.prototype={}
V.dn.prototype={
a7:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.x])
return u},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dn))return!1
u=b.a
t=$.K().a
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
u=[P.x]
t=V.bQ(H.c([this.a,this.d,this.r],u),3,0)
s=V.bQ(H.c([this.b,this.e,this.x],u),3,0)
r=V.bQ(H.c([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.i(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.i(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.i(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.i(t,1)
n=" "+t[1]+", "
if(1>=p)return H.i(s,1)
n=n+s[1]+", "
if(1>=o)return H.i(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.i(t,2)
u=" "+t[2]+", "
if(2>=p)return H.i(s,2)
u=u+s[2]+", "
if(2>=o)return H.i(r,2)
return n+(u+r[2]+"]")}}
V.a6.prototype={
a7:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.x])
return u},
cl:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(typeof l!=="number")return l.q()
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
if(Math.abs(a7-0)<$.K().a)return V.bp()
a8=1/a7
a9=-r
b0=-d
return V.aO((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
q:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
o=this.d
n=b2.cx
if(typeof o!=="number")return o.q()
m=b2.b
l=b2.f
k=b2.z
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
f=b2.db
e=b2.d
if(typeof e!=="number")return H.D(e)
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
return V.aO(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cw:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.L(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
b6:function(a){var u,t,s,r
u=a.a
t=a.b
s=a.c
r=this.d
if(typeof r!=="number")return H.D(r)
return new V.ah(this.a*u+this.b*t+this.c*s+r,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.K()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
if(!(Math.abs(b.c-this.c)<s))return!1
u=b.d
r=this.d
t.toString
if(typeof u!=="number")return u.E()
if(typeof r!=="number")return H.D(r)
if(!(Math.abs(u-r)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
if(!(Math.abs(b.r-this.r)<s))return!1
if(!(Math.abs(b.x-this.x)<s))return!1
if(!(Math.abs(b.y-this.y)<s))return!1
if(!(Math.abs(b.z-this.z)<s))return!1
if(!(Math.abs(b.Q-this.Q)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.H()},
dV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.x]
t=V.bQ(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bQ(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bQ(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bQ(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.i(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.i(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.i(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.i(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.i(t,1)
l=l+t[1]+", "
if(1>=o)return H.i(s,1)
l=l+s[1]+", "
if(1>=n)return H.i(r,1)
l=l+r[1]+", "
if(1>=m)return H.i(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.i(t,2)
p=p+t[2]+", "
if(2>=o)return H.i(s,2)
p=p+s[2]+", "
if(2>=n)return H.i(r,2)
p=p+r[2]+", "
if(2>=m)return H.i(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.i(t,3)
l=l+t[3]+", "
if(3>=o)return H.i(s,3)
l=l+s[3]+", "
if(3>=n)return H.i(r,3)
l=l+r[3]+", "
if(3>=m)return H.i(q,3)
return p+(l+q[3]+"]")},
u:function(a){return this.dV(a,3,0)},
H:function(){return this.dV("",3,0)}}
V.a4.prototype={
E:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.ah.prototype={
E:function(a,b){return new V.ah(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.b9.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b9))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.cl.prototype={
ga6:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cl))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.P.prototype={
cn:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.D(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.D(r)
return u*t+s*r},
q:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.P(u*b,t*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.kf
if(u==null){u=new V.P(0,0)
$.kf=u}return u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.P(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=this.a
s=$.K()
s.toString
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.D(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.D(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.L.prototype={
cn:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
co:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.L(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aY:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.L(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.K().a)return V.dT()
return new V.L(this.a/b,this.b/b,this.c/b)},
dX:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
U.f2.prototype={
bC:function(a){var u=V.mp(a,this.c,this.b)
return u},
gm:function(){var u=this.y
if(u==null){u=D.J()
this.y=u}return u},
J:function(a){var u=this.y
if(u!=null)u.v(a)},
scA:function(a,b){},
scp:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.K().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bC(t)}u=new D.C("maximumLocation",u,this.b,this,[P.x])
u.b=!0
this.J(u)}},
scr:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.K().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bC(t)}u=new D.C("minimumLocation",u,this.c,this,[P.x])
u.b=!0
this.J(u)}},
sa5:function(a,b){var u
b=this.bC(b)
u=this.d
if(!(Math.abs(u-b)<$.K().a)){this.d=b
u=new D.C("location",u,b,this,[P.x])
u.b=!0
this.J(u)}},
scq:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.K().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.C("maximumVelocity",u,a,this,[P.x])
u.b=!0
this.J(u)}},
sR:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.K().a)){this.f=a
u=new D.C("velocity",u,a,this,[P.x])
u.b=!0
this.J(u)}},
sc9:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.C("dampening",u,a,this,[P.x])
u.b=!0
this.J(u)}},
ah:function(a,b){var u,t,s,r,q
u=this.f
t=$.K().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa5(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.K().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sR(s)}}}
U.c2.prototype={
gm:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
sM:function(a,b){var u,t,s
if(b==null)b=V.bp()
if(!J.W(this.a,b)){u=this.a
this.a=b
t=new D.C("matrix",u,b,this,[V.a6])
t.b=!0
s=this.b
if(s!=null)s.v(t)}},
aM:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c2))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}}
U.c9.prototype={
gm:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
J:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.v(a)},
a3:function(){return this.J(null)},
eH:function(a,b){var u,t,s,r,q,p,o,n
u=U.a3
H.j(b,"$id",[u],"$ad")
for(t=b.length,s=this.gaF(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.gm()
n.toString
H.n(s,r)
if(n.a==null)n.sa0(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bm(a,b,this,[u])
u.b=!0
this.J(u)},
hb:function(a,b){var u,t,s,r,q
u=U.a3
H.j(b,"$id",[u],"$ad")
for(t=b.length,s=this.gaF(),r=0;r<b.length;b.length===t||(0,H.z)(b),++r){q=b[r]
if(q!=null)q.gm().O(0,s)}u=new D.bn(a,b,this,[u])
u.b=!0
this.J(u)},
aM:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.aN()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ae(u,u.length,0,[H.w(u,0)]),s=null;u.B();){t=u.d
if(t!=null){r=t.aM(0,b,c)
if(r!=null)s=s==null?r:r.q(0,s)}}this.f=s==null?V.bp():s
u=this.e
if(u!=null)u.aB(0)}return this.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c9))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.i(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.i(r,t)
if(!J.W(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ad:function(){return[U.a3]},
$aS:function(){return[U.a3]},
$ia3:1}
U.a3.prototype={}
U.dQ.prototype={
gm:function(){var u=this.cy
if(u==null){u=D.J()
this.cy=u}return u},
J:function(a){var u
H.k(a,"$iv")
u=this.cy
if(u!=null)u.v(a)},
a3:function(){return this.J(null)},
aW:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdw().h(0,this.gbL())
this.a.c.ge_().h(0,this.gbN())
this.a.c.gby().h(0,this.gbP())
return!0},
bM:function(a){H.k(a,"$iv")
if(!J.W(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bO:function(a){var u,t,s,r,q,p,o
a=H.f(H.k(a,"$iv"),"$ib5")
if(!this.y)return
if(this.x){u=a.d.E(0,a.y)
u=new V.P(u.a,u.b)
u=u.A(u)
t=this.r
if(typeof t!=="number")return H.D(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.E(0,a.y)
u=new V.P(t.a,t.b).q(0,2).t(0,u.ga6())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.q()
s=this.e
if(typeof s!=="number")return H.D(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=new V.P(s.a,s.b).q(0,2).t(0,u.ga6())
s=this.b
q=r.a
if(typeof q!=="number")return q.L()
p=this.e
if(typeof p!=="number")return H.D(p)
o=this.z
if(typeof o!=="number")return H.D(o)
s.sa5(0,-q*p+o)
this.b.sR(0)
t=t.E(0,a.z)
this.Q=new V.P(t.a,t.b).q(0,2).t(0,u.ga6())}this.a3()},
bQ:function(a){var u,t,s
H.k(a,"$iv")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.A(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.q()
s=this.e
if(typeof s!=="number")return H.D(s)
u.sR(t*10*s)
this.a3()}},
aM:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.aN()
if(u<t){this.ch=t
s=b.y
this.b.ah(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aO(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia3:1}
U.dR.prototype={
gm:function(){var u=this.fx
if(u==null){u=D.J()
this.fx=u}return u},
J:function(a){var u
H.k(a,"$iv")
u=this.fx
if(u!=null)u.v(a)},
a3:function(){return this.J(null)},
aW:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdw().h(0,this.gbL())
this.a.c.ge_().h(0,this.gbN())
this.a.c.gby().h(0,this.gbP())
u=this.a.d
t=u.f
if(t==null){t=D.J()
u.f=t
u=t}else u=t
u.h(0,this.gfo())
u=this.a.d
t=u.d
if(t==null){t=D.J()
u.d=t
u=t}else u=t
u.h(0,this.gfq())
u=this.a.e
t=u.b
if(t==null){t=D.J()
u.b=t
u=t}else u=t
u.h(0,this.ghQ())
u=this.a.e
t=u.d
if(t==null){t=D.J()
u.d=t
u=t}else u=t
u.h(0,this.ghO())
u=this.a.e
t=u.c
if(t==null){t=D.J()
u.c=t
u=t}else u=t
u.h(0,this.ghM())
return!0},
ai:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.L()
u=-u}if(this.r){if(typeof t!=="number")return t.L()
t=-t}return new V.P(u,t)},
bM:function(a){a=H.f(H.k(a,"$iv"),"$ib5")
if(!J.W(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bO:function(a){var u,t,s,r,q,p,o
a=H.f(H.k(a,"$iv"),"$ib5")
if(!this.cx)return
if(this.ch){u=a.d.E(0,a.y)
u=new V.P(u.a,u.b)
u=u.A(u)
t=this.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.E(0,a.y)
u=this.ai(new V.P(t.a,t.b).q(0,2).t(0,u.ga6()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.L()
s=this.y
if(typeof s!=="number")return H.D(s)
t.sR(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.L()
t=this.x
if(typeof t!=="number")return H.D(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=this.ai(new V.P(s.a,s.b).q(0,2).t(0,u.ga6()))
s=this.c
q=r.a
if(typeof q!=="number")return q.L()
p=this.y
if(typeof p!=="number")return H.D(p)
o=this.cy
if(typeof o!=="number")return H.D(o)
s.sa5(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.L()
q=this.x
if(typeof q!=="number")return H.D(q)
s=this.db
if(typeof s!=="number")return H.D(s)
o.sa5(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.E(0,a.z)
this.dx=this.ai(new V.P(t.a,t.b).q(0,2).t(0,u.ga6()))}this.a3()},
bQ:function(a){var u,t,s
H.k(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.A(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.L()
s=this.y
if(typeof s!=="number")return H.D(s)
u.sR(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.L()
u=this.x
if(typeof u!=="number")return H.D(u)
s.sR(-t*10*u)
this.a3()}},
fp:function(a){if(H.f(H.k(a,"$iv"),"$idj").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fs:function(a){var u,t,s,r,q,p,o
a=H.f(H.k(a,"$iv"),"$ib5")
if(!J.W(this.d,a.x.b))return
u=a.c
t=a.d
s=t.E(0,a.y)
r=this.ai(new V.P(s.a,s.b).q(0,2).t(0,u.ga6()))
s=this.c
q=r.a
if(typeof q!=="number")return q.L()
p=this.y
if(typeof p!=="number")return H.D(p)
o=this.cy
if(typeof o!=="number")return H.D(o)
s.sa5(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.L()
q=this.x
if(typeof q!=="number")return H.D(q)
s=this.db
if(typeof s!=="number")return H.D(s)
o.sa5(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.E(0,a.z)
this.dx=this.ai(new V.P(t.a,t.b).q(0,2).t(0,u.ga6()))
this.a3()},
hR:function(a){H.k(a,"$iv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hP:function(a){var u,t,s,r,q,p,o
a=H.f(H.k(a,"$iv"),"$idJ")
if(!this.cx)return
if(this.ch){u=a.d.E(0,a.y)
u=new V.P(u.a,u.b)
u=u.A(u)
t=this.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.E(0,a.y)
u=this.ai(new V.P(t.a,t.b).q(0,2).t(0,u.ga6()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.L()
s=this.y
if(typeof s!=="number")return H.D(s)
t.sR(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.L()
t=this.x
if(typeof t!=="number")return H.D(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=this.ai(new V.P(s.a,s.b).q(0,2).t(0,u.ga6()))
s=this.c
q=r.a
if(typeof q!=="number")return q.L()
p=this.y
if(typeof p!=="number")return H.D(p)
o=this.cy
if(typeof o!=="number")return H.D(o)
s.sa5(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.L()
q=this.x
if(typeof q!=="number")return H.D(q)
s=this.db
if(typeof s!=="number")return H.D(s)
o.sa5(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.E(0,a.z)
this.dx=this.ai(new V.P(t.a,t.b).q(0,2).t(0,u.ga6()))}this.a3()},
hN:function(a){var u,t,s
H.k(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.A(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.L()
s=this.y
if(typeof s!=="number")return H.D(s)
u.sR(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.L()
u=this.x
if(typeof u!=="number")return H.D(u)
s.sR(-t*10*u)
this.a3()}},
aM:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.aN()
if(u<t){this.dy=t
s=b.y
this.c.ah(0,s)
this.b.ah(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.fr=V.aO(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1).q(0,V.jn(this.c.d))}return this.fr},
$ia3:1}
U.dS.prototype={
gm:function(){var u=this.r
if(u==null){u=D.J()
this.r=u}return u},
J:function(a){var u=this.r
if(u!=null)u.v(a)},
aW:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.J()
u.e=t
u=t}else u=t
t=this.gft()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.J()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fu:function(a){var u,t,s,r
H.k(a,"$iv")
if(!J.W(this.b,this.a.b.c))return
H.f(a,"$icf")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){this.d=r
u=new D.C("zoom",u,r,this,[P.x])
u.b=!0
this.J(u)}},
aM:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.lk(s,s,s,1)}return this.f},
$ia3:1}
M.d2.prototype={
gm:function(){var u=this.f
if(u==null){u=D.J()
this.f=u}return u},
T:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.v(a)},
aP:function(){return this.T(null)},
saX:function(a){var u,t
if(a==null)a=new X.fw()
u=this.a
if(u!==a){if(u!=null)u.gm().O(0,this.gS())
t=this.a
this.a=a
a.gm().h(0,this.gS())
u=new D.C("camera",t,this.a,this,[X.bA])
u.b=!0
this.T(u)}},
sb1:function(a,b){var u,t
if(b==null)b=X.fu(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gm().O(0,this.gS())
t=this.b
this.b=b
b.gm().h(0,this.gS())
u=new D.C("target",t,this.b,this,[X.bL])
u.b=!0
this.T(u)}},
sb2:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gm().O(0,this.gS())
t=this.c
this.c=a
if(a!=null)a.gm().h(0,this.gS())
u=new D.C("technique",t,this.c,this,[O.bs])
u.b=!0
this.T(u)}},
a4:function(a){a.cu(this.c)
this.b.X(a)
this.a.X(a)
this.d.ah(0,a)
this.d.a4(a)
this.a.aC(a)
this.b.toString
a.ct()},
$iaw:1,
$ibK:1}
M.d6.prototype={
T:function(a){var u
H.k(a,"$iv")
u=this.x
if(u!=null)u.v(a)},
aP:function(){return this.T(null)},
fI:function(a,b){var u,t,s,r,q,p,o,n
u=E.ag
H.j(b,"$id",[u],"$ad")
for(t=b.length,s=this.gS(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.aG()
n.sa0(null)
n.sak(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sa0(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bm(a,b,this,[u])
u.b=!0
this.T(u)},
fK:function(a,b){var u,t,s,r,q,p
u=E.ag
H.j(b,"$id",[u],"$ad")
for(t=b.length,s=this.gS(),r=0;r<b.length;b.length===t||(0,H.z)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aG()
p.sa0(null)
p.sak(null)
p.c=null
p.d=0
q.z=p}p.O(0,s)}}u=new D.bn(a,b,this,[u])
u.b=!0
this.T(u)},
saX:function(a){var u,t
if(a==null)a=X.jp(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gm().O(0,this.gS())
t=this.a
this.a=a
a.gm().h(0,this.gS())
u=new D.C("camera",t,this.a,this,[X.bA])
u.b=!0
this.T(u)}},
sb1:function(a,b){var u,t
if(b==null)b=X.fu(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gm().O(0,this.gS())
t=this.b
this.b=b
b.gm().h(0,this.gS())
u=new D.C("target",t,this.b,this,[X.bL])
u.b=!0
this.T(u)}},
sb2:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gm().O(0,this.gS())
t=this.c
this.c=a
if(a!=null)a.gm().h(0,this.gS())
u=new D.C("technique",t,this.c,this,[O.bs])
u.b=!0
this.T(u)}},
gm:function(){var u=this.x
if(u==null){u=D.J()
this.x=u}return u},
a4:function(a){var u
a.cu(this.c)
this.b.X(a)
this.a.X(a)
u=this.c
if(u!=null)u.ah(0,a)
for(u=this.d.a,u=new J.ae(u,u.length,0,[H.w(u,0)]);u.B();)u.d.ah(0,a)
for(u=this.d.a,u=new J.ae(u,u.length,0,[H.w(u,0)]);u.B();)u.d.a4(a)
this.a.toString
a.cy.aA()
a.db.aA()
this.b.toString
a.ct()},
sf_:function(a,b){this.d=H.j(b,"$iS",[E.ag],"$aS")},
$iaw:1,
$ibK:1}
M.aw.prototype={}
M.bK.prototype={}
M.dC.prototype={
gm:function(){var u=this.cy
if(u==null){u=D.J()
this.cy=u}return u},
T:function(a){var u
H.k(a,"$iv")
u=this.cy
if(u!=null)u.v(a)},
aP:function(){return this.T(null)},
fA:function(a,b){var u,t,s,r,q,p,o,n
u=M.aw
H.j(b,"$id",[u],"$ad")
for(t=b.length,s=this.gS(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.gm()
n.toString
H.n(s,r)
if(n.a==null)n.sa0(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bm(a,b,this,[u])
u.b=!0
this.T(u)},
hf:function(a,b){var u,t,s,r,q
u=M.aw
H.j(b,"$id",[u],"$ad")
for(t=b.length,s=this.gS(),r=0;r<b.length;b.length===t||(0,H.z)(b),++r){q=b[r]
if(q!=null)q.gm().O(0,s)}u=new D.bn(a,b,this,[u])
u.b=!0
this.T(u)},
a4:function(a){var u,t
this.y.se7(0,this.r)
for(u=this.z.a,u=new J.ae(u,u.length,0,[H.w(u,0)]);u.B();){t=u.d
t.sb1(0,this.y)
t.saX(this.e)
t.a4(a)}this.y.se7(0,this.x)
for(u=this.z.a,u=new J.ae(u,u.length,0,[H.w(u,0)]);u.B();){t=u.d
t.sb1(0,this.y)
t.saX(this.f)
t.a4(a)}},
shm:function(a){this.z=H.j(a,"$iS",[M.aw],"$aS")},
$ibK:1}
A.cV.prototype={}
A.eT.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iN:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.dz(r.a,r.c)}},
du:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.dv(r.a,r.c)}}}
A.dm.prototype={
ey:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.br("")
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
a6.hZ(u)
a6.i5(u)
a6.i_(u)
a6.ie(u)
a6.ig(u)
a6.i7(u)
a6.ik(u)
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
u=new P.br("")
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
q.i2(u)
q.hY(u)
q.i0(u)
q.i3(u)
q.ib(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.i9(u)
q.ia(u)}q.i6(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
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
k=H.c([],[P.o])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.w(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.i1(u)
q.i8(u)
q.ic(u)
q.ih(u)
q.ii(u)
q.ij(u)
q.i4(u)}m=u.a+="// === Main ===\n"
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
j=H.c([],[P.o])
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
i="vec4("+C.a.w(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.dW(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.f(this.y.l(0,"invViewMat"),"$ial")
if(t)this.dy=H.f(this.y.l(0,"objMat"),"$ial")
if(r)this.fr=H.f(this.y.l(0,"viewObjMat"),"$ial")
this.fy=H.f(this.y.l(0,"projViewObjMat"),"$ial")
if(a6.x2)this.k1=H.f(this.y.l(0,"txt2DMat"),"$icu")
if(a6.y1)this.k2=H.f(this.y.l(0,"txtCubeMat"),"$ial")
if(a6.y2)this.k3=H.f(this.y.l(0,"colorMat"),"$ial")
this.seW(H.c([],[A.al]))
t=a6.an
if(t>0){this.k4=H.k(this.y.l(0,"bendMatCount"),"$iI")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.r("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.f(g,"$ial"))}}t=a6.a
if(t!==C.c){this.r2=H.f(this.y.l(0,"emissionClr"),"$iF")
switch(t){case C.c:break
case C.f:break
case C.e:this.rx=H.f(this.y.l(0,"emissionTxt"),"$iai")
this.x1=H.f(this.y.l(0,"nullEmissionTxt"),"$iI")
break
case C.d:this.ry=H.f(this.y.l(0,"emissionTxt"),"$iad")
this.x1=H.f(this.y.l(0,"nullEmissionTxt"),"$iI")
break}}t=a6.b
if(t!==C.c){this.x2=H.f(this.y.l(0,"ambientClr"),"$iF")
switch(t){case C.c:break
case C.f:break
case C.e:this.y1=H.f(this.y.l(0,"ambientTxt"),"$iai")
this.an=H.f(this.y.l(0,"nullAmbientTxt"),"$iI")
break
case C.d:this.y2=H.f(this.y.l(0,"ambientTxt"),"$iad")
this.an=H.f(this.y.l(0,"nullAmbientTxt"),"$iI")
break}}t=a6.c
if(t!==C.c){this.ae=H.f(this.y.l(0,"diffuseClr"),"$iF")
switch(t){case C.c:break
case C.f:break
case C.e:this.bd=H.f(this.y.l(0,"diffuseTxt"),"$iai")
this.be=H.f(this.y.l(0,"nullDiffuseTxt"),"$iI")
break
case C.d:this.dA=H.f(this.y.l(0,"diffuseTxt"),"$iad")
this.be=H.f(this.y.l(0,"nullDiffuseTxt"),"$iI")
break}}t=a6.d
if(t!==C.c){this.bf=H.f(this.y.l(0,"invDiffuseClr"),"$iF")
switch(t){case C.c:break
case C.f:break
case C.e:this.dB=H.f(this.y.l(0,"invDiffuseTxt"),"$iai")
this.bg=H.f(this.y.l(0,"nullInvDiffuseTxt"),"$iI")
break
case C.d:this.dC=H.f(this.y.l(0,"invDiffuseTxt"),"$iad")
this.bg=H.f(this.y.l(0,"nullInvDiffuseTxt"),"$iI")
break}}t=a6.e
if(t!==C.c){this.bj=H.f(this.y.l(0,"shininess"),"$iU")
this.bh=H.f(this.y.l(0,"specularClr"),"$iF")
switch(t){case C.c:break
case C.f:break
case C.e:this.dD=H.f(this.y.l(0,"specularTxt"),"$iai")
this.bi=H.f(this.y.l(0,"nullSpecularTxt"),"$iI")
break
case C.d:this.dE=H.f(this.y.l(0,"specularTxt"),"$iad")
this.bi=H.f(this.y.l(0,"nullSpecularTxt"),"$iI")
break}}switch(a6.f){case C.c:break
case C.f:break
case C.e:this.dF=H.f(this.y.l(0,"bumpTxt"),"$iai")
this.bk=H.f(this.y.l(0,"nullBumpTxt"),"$iI")
break
case C.d:this.dG=H.f(this.y.l(0,"bumpTxt"),"$iad")
this.bk=H.f(this.y.l(0,"nullBumpTxt"),"$iI")
break}if(a6.dy){this.dH=H.f(this.y.l(0,"envSampler"),"$iad")
this.dI=H.f(this.y.l(0,"nullEnvTxt"),"$iI")
t=a6.r
if(t!==C.c){this.bl=H.f(this.y.l(0,"reflectClr"),"$iF")
switch(t){case C.c:break
case C.f:break
case C.e:this.dJ=H.f(this.y.l(0,"reflectTxt"),"$iai")
this.bm=H.f(this.y.l(0,"nullReflectTxt"),"$iI")
break
case C.d:this.dK=H.f(this.y.l(0,"reflectTxt"),"$iad")
this.bm=H.f(this.y.l(0,"nullReflectTxt"),"$iI")
break}}t=a6.x
if(t!==C.c){this.bn=H.f(this.y.l(0,"refraction"),"$iU")
this.bo=H.f(this.y.l(0,"refractClr"),"$iF")
switch(t){case C.c:break
case C.f:break
case C.e:this.dL=H.f(this.y.l(0,"refractTxt"),"$iai")
this.bp=H.f(this.y.l(0,"nullRefractTxt"),"$iI")
break
case C.d:this.dM=H.f(this.y.l(0,"refractTxt"),"$iad")
this.bp=H.f(this.y.l(0,"nullRefractTxt"),"$iI")
break}}}t=a6.y
if(t!==C.c){this.bq=H.f(this.y.l(0,"alpha"),"$iU")
switch(t){case C.c:break
case C.f:break
case C.e:this.dN=H.f(this.y.l(0,"alphaTxt"),"$iai")
this.br=H.f(this.y.l(0,"nullAlphaTxt"),"$iI")
break
case C.d:this.dO=H.f(this.y.l(0,"alphaTxt"),"$iad")
this.br=H.f(this.y.l(0,"nullAlphaTxt"),"$iI")
break}}this.seI(H.c([],[A.ct]))
this.seJ(H.c([],[A.cv]))
this.seK(H.c([],[A.cw]))
this.seL(H.c([],[A.cx]))
this.seM(H.c([],[A.cy]))
this.seN(H.c([],[A.cz]))
if(a6.k2){t=a6.z
if(t>0){this.dP=H.k(this.y.l(0,"dirLightCount"),"$iI")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iF")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iF")
s=this.cc;(s&&C.a).h(s,new A.ct(h,g,f))}}t=a6.Q
if(t>0){this.dQ=H.k(this.y.l(0,"pntLightCount"),"$iI")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iF")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iF")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iF")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iU")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iU")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iU")
s=this.cd;(s&&C.a).h(s,new A.cv(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.dR=H.k(this.y.l(0,"spotLightCount"),"$iI")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iF")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iF")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iF")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iF")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iU")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iU")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iU")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iU")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iU")
s=this.ce;(s&&C.a).h(s,new A.cw(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.dS=H.k(this.y.l(0,"txtDirLightCount"),"$iI")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iF")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iF")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iF")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iF")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iF")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iI")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iai")
s=this.cf;(s&&C.a).h(s,new A.cx(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.dT=H.k(this.y.l(0,"txtPntLightCount"),"$iI")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iF")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iF")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$icu")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iF")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iI")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iU")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iU")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iU")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iad")
s=this.cg;(s&&C.a).h(s,new A.cy(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.dU=H.k(this.y.l(0,"txtSpotLightCount"),"$iI")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iF")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iF")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iF")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iF")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iF")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iI")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iF")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iU")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iU")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a2,"$iU")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a3,"$iU")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a4,"$iU")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a5,"$iai")
s=this.ci;(s&&C.a).h(s,new A.cz(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ad:function(a,b,c){C.b.K(b.a,b.d,1)},
a8:function(a,b,c){if(c==null||c.d<6)C.b.K(b.a,b.d,1)
else{a.cE(c)
C.b.K(b.a,b.d,0)}},
seW:function(a){this.r1=H.j(a,"$ib",[A.al],"$ab")},
seI:function(a){this.cc=H.j(a,"$ib",[A.ct],"$ab")},
seJ:function(a){this.cd=H.j(a,"$ib",[A.cv],"$ab")},
seK:function(a){this.ce=H.j(a,"$ib",[A.cw],"$ab")},
seL:function(a){this.cf=H.j(a,"$ib",[A.cx],"$ab")},
seM:function(a){this.cg=H.j(a,"$ib",[A.cy],"$ab")},
seN:function(a){this.ci=H.j(a,"$ib",[A.cz],"$ab")}}
A.fP.prototype={
hZ:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.an+"];\n"
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
t+="{\n"
a.a=t
if(u){u=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
a.a=u}else{u=t+"   return vec3(txt2DAttr, 1.0).xy;\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
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
t+="{\n"
a.a=t
if(u){u=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n"
a.a=u}else{u=t+"   return vec4(txtCubeAttr, 1.0).xyz;\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
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
ar:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.i(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.cH(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
i2:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.ar(a,u,"emission")
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
hY:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.ar(a,u,"ambient")
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
i0:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.ar(a,u,"diffuse")
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
i3:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.ar(a,u,"invDiffuse")
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
ib:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.ar(a,u,"specular")
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
i6:function(a){var u,t
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
i9:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.ar(a,u,"reflect")
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
ia:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.ar(a,u,"refract")
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
i1:function(a){var u,t
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
i8:function(a){var u,t
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
ic:function(a){var u,t
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
ih:function(a){var u,t,s
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
ii:function(a){var u,t,s
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
ij:function(a){var u,t,s
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
A.ct.prototype={}
A.cx.prototype={}
A.cv.prototype={}
A.cy.prototype={}
A.cw.prototype={}
A.cz.prototype={}
A.cm.prototype={
cL:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dW:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.cZ(b,35633)
this.f=this.cZ(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dj(u,t,this.e)
C.b.dj(u,this.r,this.f)
C.b.iW(u,this.r)
if(!H.kx(C.b.bz(u,this.r,35714))){s=C.b.el(u,this.r)
C.b.iE(u,this.r)
H.t(P.r("Failed to link shader: "+H.m(s)))}this.hB()
this.hD()},
X:function(a){C.b.cz(a.a,this.r)
this.x.iN()},
cZ:function(a,b){var u,t,s
u=this.a
t=C.b.iC(u,b)
C.b.er(u,t,a)
C.b.iy(u,t)
if(!H.kx(C.b.en(u,t,35713))){s=C.b.em(u,t)
C.b.iF(u,t)
throw H.h(P.r("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
hB:function(){var u,t,s,r,q,p
u=H.c([],[A.cV])
t=this.a
s=H.a8(C.b.bz(t,this.r,35721))
if(typeof s!=="number")return H.D(s)
r=0
for(;r<s;++r){q=C.b.eg(t,this.r,r)
p=C.b.ei(t,this.r,q.name)
C.a.h(u,new A.cV(t,q.name,p))}this.x=new A.eT(u)},
hD:function(){var u,t,s,r,q,p
u=H.c([],[A.dK])
t=this.a
s=H.a8(C.b.bz(t,this.r,35718))
if(typeof s!=="number")return H.D(s)
r=0
for(;r<s;++r){q=C.b.eh(t,this.r,r)
p=C.b.eo(t,this.r,q.name)
C.a.h(u,this.iD(q.type,q.size,q.name,p))}this.y=new A.i0(u)},
aG:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.I(u,t,b,c)
else return A.jt(u,t,b,a,c)},
f2:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ai(u,t,b,c)
else return A.jt(u,t,b,a,c)},
f3:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ad(u,t,b,c)
else return A.jt(u,t,b,a,c)},
bb:function(a,b){return new P.e3(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
iD:function(a,b,c,d){switch(a){case 5120:return this.aG(b,c,d)
case 5121:return this.aG(b,c,d)
case 5122:return this.aG(b,c,d)
case 5123:return this.aG(b,c,d)
case 5124:return this.aG(b,c,d)
case 5125:return this.aG(b,c,d)
case 5126:return new A.U(this.a,this.r,c,d)
case 35664:return new A.hW(this.a,this.r,c,d)
case 35665:return new A.F(this.a,this.r,c,d)
case 35666:return new A.hZ(this.a,this.r,c,d)
case 35667:return new A.hX(this.a,this.r,c,d)
case 35668:return new A.hY(this.a,this.r,c,d)
case 35669:return new A.i_(this.a,this.r,c,d)
case 35674:return new A.i1(this.a,this.r,c,d)
case 35675:return new A.cu(this.a,this.r,c,d)
case 35676:return new A.al(this.a,this.r,c,d)
case 35678:return this.f2(b,c,d)
case 35680:return this.f3(b,c,d)
case 35670:throw H.h(this.bb("BOOL",c))
case 35671:throw H.h(this.bb("BOOL_VEC2",c))
case 35672:throw H.h(this.bb("BOOL_VEC3",c))
case 35673:throw H.h(this.bb("BOOL_VEC4",c))
default:throw H.h(P.r("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bD.prototype={
i:function(a){return this.b}}
A.dz.prototype={}
A.dK.prototype={}
A.i0.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
l:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.H()},
iP:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].i(0)+a
return s},
H:function(){return this.iP("\n")}}
A.I.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.hX.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.hY.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.i_.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.hV.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
shW:function(a){this.e=H.j(a,"$ib",[P.A],"$ab")}}
A.U.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.F.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.hZ.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.i1.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cu.prototype={
ab:function(a){var u=new Float32Array(H.cM(H.j(a,"$ib",[P.x],"$ab")))
C.b.ed(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.al.prototype={
ab:function(a){var u=new Float32Array(H.cM(H.j(a,"$ib",[P.x],"$ab")))
C.b.ee(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.ai.prototype={
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ad.prototype={
cE:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.K(t,s,0)
else C.b.K(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.iY.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.co(u.b,b).co(u.d.co(u.c,b),c)
u=new V.ah(t.a,t.b,t.c)
if(!J.W(a.f,u)){a.f=u
u=a.a
if(u!=null)u.a2()}a.sb4(t.t(0,Math.sqrt(t.A(t))))
u=1-b
s=1-c
s=new V.b9(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.W(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.a2()}},
$S:34}
F.a2.prototype={
eV:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.dT()
if(t!=null)q=q.D(0,t)
if(s!=null)q=q.D(0,s)
if(r!=null)q=q.D(0,r)
if(q.dX())return
return q.t(0,Math.sqrt(q.A(q)))},
eZ:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.E(0,t)
u=new V.L(u.a,u.b,u.c)
q=u.t(0,Math.sqrt(u.A(u)))
u=r.E(0,t)
u=new V.L(u.a,u.b,u.c)
u=q.aY(u.t(0,Math.sqrt(u.A(u))))
return u.t(0,Math.sqrt(u.A(u)))},
c6:function(){if(this.d!=null)return!0
var u=this.eV()
if(u==null){u=this.eZ()
if(u==null)return!1}this.d=u
this.a.a.a2()
return!0},
eU:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.dT()
if(t!=null)q=q.D(0,t)
if(s!=null)q=q.D(0,s)
if(r!=null)q=q.D(0,r)
if(q.dX())return
return q.t(0,Math.sqrt(q.A(q)))},
eY:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.K().a){u=m.E(0,p)
u=new V.L(u.a,u.b,u.c)
h=u.t(0,Math.sqrt(u.A(u)))
if(j.a-k.a<0)h=h.L(0)}else{g=(u-l.b)/i
u=m.E(0,p)
u=new V.ah(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).E(0,s)
u=new V.L(u.a,u.b,u.c)
h=u.t(0,Math.sqrt(u.A(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.L(0)}u=this.d
if(u!=null){f=u.t(0,Math.sqrt(u.A(u)))
u=f.aY(h)
u=u.t(0,Math.sqrt(u.A(u))).aY(f)
h=u.t(0,Math.sqrt(u.A(u)))}return h},
c4:function(){if(this.e!=null)return!0
var u=this.eU()
if(u==null){u=this.eY()
if(u==null)return!1}this.e=u
this.a.a.a2()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.j.aa(J.aq(u.e),0)+", "+C.j.aa(J.aq(this.b.e),0)+", "+C.j.aa(J.aq(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
H:function(){return this.u("")}}
F.b3.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.j.aa(J.aq(u.e),0)+", "+C.j.aa(J.aq(this.b.e),0)},
H:function(){return this.u("")}}
F.bq.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.aa(J.aq(u.e),0)},
H:function(){return this.u("")}}
F.dx.prototype={
gm:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
j_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.Y()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){q=u[r]
this.a.h(0,q.iB())}this.a.Y()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.Y()
n=n.e
if(typeof n!=="number")return n.D()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bq()
if(m.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.v(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.Y()
n=n.e
if(typeof n!=="number")return n.D()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.D()
o+=t
n=n.c
if(o>=n.length)return H.i(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.le(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.Y()
n=n.e
if(typeof n!=="number")return n.D()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.D()
o+=t
n=n.c
if(o>=n.length)return H.i(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.Y()
n=n.e
if(typeof n!=="number")return n.D()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.c7(k,j,h)}u=this.e
if(u!=null)u.aB(0)},
av:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.av()||!1
if(!this.a.av())t=!1
u=this.e
if(u!=null)u.aB(0)
return t},
dn:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aB()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.be().a)!==0)++r
if((s&$.bd().a)!==0)++r
if((s&$.bf().a)!==0)++r
if((s&$.bg().a)!==0)++r
if((s&$.cS().a)!==0)++r
if((s&$.cT().a)!==0)++r
if((s&$.bU().a)!==0)++r
if((s&$.bc().a)!==0)++r
q=a1.gcG(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.x
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.cZ])
for(m=0,l=0;l<r;++l){k=a1.iq(l)
j=k.gcG(k)
C.a.W(n,l,new Z.cZ(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.i(t,i)
h=t[i].iX(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.W(o,g,h[f]);++g}}m+=j}H.j(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.al(t,34962,e)
C.b.dm(t,34962,new Float32Array(H.cM(o)),35044)
C.b.al(t,34962,null)
d=new Z.bZ(new Z.dU(34962,e),n,a1)
d.sfh(H.c([],[Z.bl]))
if(this.b.b.length!==0){s=P.A
c=H.c([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.Y()
C.a.h(c,b.e)}a=Z.ju(t,34963,H.j(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bl(0,c.length,a))}if(this.c.b.length!==0){s=P.A
c=H.c([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.Y()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.i(b,l)
b=b[l].b
b.a.a.Y()
C.a.h(c,b.e)}a=Z.ju(t,34963,H.j(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bl(1,c.length,a))}if(this.d.b.length!==0){s=P.A
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.Y()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].b
b.a.a.Y()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].c
b.a.a.Y()
C.a.h(c,b.e)}a=Z.ju(t,34963,H.j(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bl(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.o])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.u("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.u("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.u("   "))}return C.a.w(u,"\n")},
af:function(a){var u=this.e
if(u!=null)u.v(a)},
a2:function(){return this.af(null)},
$imw:1}
F.ho.prototype={
im:function(a){var u,t,s,r,q,p
H.j(a,"$ib",[F.ao],"$ab")
u=H.c([],[F.a2])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.c7(t,q,p))}return u},
io:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,"$ib",[F.ao],"$ab")
u=H.c([],[F.a2])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.i(c,r)
l=c[r];++r
if(r>=m)return H.i(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.i(c,j)
i=c[j]
if(s<0||s>=m)return H.i(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.c7(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c7(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c7(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.c7(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
av:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].c6())s=!1
return s},
c5:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].c4())s=!1
return s},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
H:function(){return this.u("")},
sf8:function(a){this.b=H.j(a,"$ib",[F.a2],"$ab")}}
F.hp.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
u=H.c([],[P.o])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.i(r,s)
C.a.h(u,r[s].u(a+(""+s+". ")))}return C.a.w(u,"\n")},
H:function(){return this.u("")},
sfk:function(a){this.b=H.j(a,"$ib",[F.b3],"$ab")}}
F.hq.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
H:function(){return this.u("")},
sbU:function(a){this.b=H.j(a,"$ib",[F.bq],"$ab")}}
F.ao.prototype={
c8:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.i9(this.cx,s,p,u,t,r,q,a,o)},
iB:function(){return this.c8(null)},
sb4:function(a){var u
if(!J.W(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
iX:function(a){var u,t
if(a.p(0,$.aB())){u=this.f
t=[P.x]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.be())){u=this.r
t=[P.x]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bd())){u=this.x
t=[P.x]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bf())){u=this.y
t=[P.x]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.bg())){u=this.z
t=[P.x]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cS())){u=this.Q
t=[P.x]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cT())){u=this.Q
t=[P.x]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bU()))return H.c([this.ch],[P.x])
else if(a.p(0,$.bc())){u=this.cx
t=[P.x]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.x])},
c6:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dT()
this.d.N(0,new F.ii(u))
u=u.a
this.r=u.t(0,Math.sqrt(u.A(u)))
u=this.a
if(u!=null){u.a2()
u=this.a.e
if(u!=null)u.aB(0)}return!0},
c4:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dT()
this.d.N(0,new F.ih(u))
u=u.a
this.x=u.t(0,Math.sqrt(u.A(u)))
u=this.a
if(u!=null){u.a2()
u=this.a.e
if(u!=null)u.aB(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
u:function(a){var u,t,s
u=H.c([],[P.o])
C.a.h(u,C.j.aa(J.aq(this.e),0))
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
C.a.h(u,V.Q(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.w(u,", ")
return a+"{"+s+"}"},
H:function(){return this.u("")}}
F.ii.prototype={
$1:function(a){var u,t
H.k(a,"$ia2")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:5}
F.ih.prototype={
$1:function(a){var u,t
H.k(a,"$ia2")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:5}
F.ia.prototype={
Y:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.h(P.r("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a2()
return!0},
ip:function(a,b,c,d,e,f,g,h,i){var u=F.i9(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bc:function(a,b,c,d,e,f){return this.ip(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
av:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].c6()
return!0},
c5:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].c4()
return!0},
iu:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.W(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.v(null)}}}}return!0},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
this.Y()
u=H.c([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
H:function(){return this.u("")},
shX:function(a){this.c=H.j(a,"$ib",[F.ao],"$ab")}}
F.ib.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
N:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a2]})
C.a.N(this.b,b)
C.a.N(this.c,new F.ic(this,b))
C.a.N(this.d,new F.id(this,b))},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
H:function(){return this.u("")},
sf9:function(a){this.b=H.j(a,"$ib",[F.a2],"$ab")},
sfa:function(a){this.c=H.j(a,"$ib",[F.a2],"$ab")},
sfb:function(a){this.d=H.j(a,"$ib",[F.a2],"$ab")}}
F.ic.prototype={
$1:function(a){H.k(a,"$ia2")
if(!J.W(a.a,this.a))this.b.$1(a)},
$S:5}
F.id.prototype={
$1:function(a){var u
H.k(a,"$ia2")
u=this.a
if(!J.W(a.a,u)&&!J.W(a.b,u))this.b.$1(a)},
$S:5}
F.ie.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
H:function(){return this.u("")},
sfl:function(a){this.b=H.j(a,"$ib",[F.b3],"$ab")},
sfm:function(a){this.c=H.j(a,"$ib",[F.b3],"$ab")}}
F.ig.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.H()},
u:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
H:function(){return this.u("")},
sbU:function(a){this.b=H.j(a,"$ib",[F.bq],"$ab")}}
O.dl.prototype={
gm:function(){var u=this.dy
if(u==null){u=D.J()
this.dy=u}return u},
P:function(a){var u
H.k(a,"$iv")
u=this.dy
if(u!=null)u.v(a)},
aS:function(){return this.P(null)},
da:function(a){H.k(a,"$iv")
this.a=null
this.P(a)},
hu:function(){return this.da(null)},
fC:function(a,b){var u=V.a6
u=new D.bm(a,H.j(b,"$id",[u],"$ad"),this,[u])
u.b=!0
this.P(u)},
fE:function(a,b){var u=V.a6
u=new D.bn(a,H.j(b,"$id",[u],"$ad"),this,[u])
u.b=!0
this.P(u)},
cW:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.a1(u.e.length+3,4)*4
s=C.h.a1(u.f.length+3,4)*4
r=C.h.a1(u.r.length+3,4)*4
q=C.h.a1(u.x.length+3,4)*4
p=C.h.a1(u.y.length+3,4)*4
o=C.h.a1(u.z.length+3,4)*4
n=C.h.a1(this.e.a.length+3,4)*4
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
a7=$.aB()
if(a0){b=$.be()
a7=new Z.aZ(a7.a|b.a)}if(a1){b=$.bd()
a7=new Z.aZ(a7.a|b.a)}if(a2){b=$.bf()
a7=new Z.aZ(a7.a|b.a)}if(a3){b=$.bg()
a7=new Z.aZ(a7.a|b.a)}if(a5){b=$.bc()
a7=new Z.aZ(a7.a|b.a)}return new A.fP(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
V:function(a,b){H.j(a,"$ib",[T.cp],"$ab")
if(b!=null)if(!C.a.aw(a,b)){b.a=a.length
C.a.h(a,b)}},
ah:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ae(u,u.length,0,[H.w(u,0)]);u.B();){t=u.d
t.toString
s=$.i8
if(s==null){s=new V.L(0,0,1)
$.i8=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cw(s)}}},
e8:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.cW()
t=H.k(a2.fr.j(0,u.ae),"$idm")
if(t==null){t=A.lj(u,a2.a)
a2.di(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bd
u=a3.e
if(!(u instanceof Z.bZ)){a3.e=null
u=null}if(u==null||!u.d.p(0,r)){u=s.r1
if(u)a3.d.av()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.c5()
p.a.c5()
p=p.e
if(p!=null)p.aB(0)}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.iu()
o=o.e
if(o!=null)o.aB(0)}m=a3.d.dn(new Z.dV(a2.a),r)
m.ax($.aB()).e=this.a.Q.c
if(u)m.ax($.be()).e=this.a.cx.c
if(q)m.ax($.bd()).e=this.a.ch.c
if(s.rx)m.ax($.bf()).e=this.a.cy.c
if(p)m.ax($.bg()).e=this.a.db.c
if(s.x1)m.ax($.bc()).e=this.a.dx.c
a3.e=m}u=T.cp
l=H.c([],[u])
this.a.X(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.gM(p)
q=q.dy
q.toString
q.ab(p.a7(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db
p=p.gM(p)
o=a2.dx
o=p.q(0,o.gM(o))
a2.cx=o
p=o}q=q.fr
q.toString
q.ab(p.a7(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gjg()
o=a2.dx
o=p.q(0,o.gM(o))
a2.ch=o
p=o}q=q.fy
q.toString
q.ab(p.a7(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ab(C.o.a7(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ab(C.o.a7(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ab(C.o.a7(p,!0))}if(s.an>0){k=this.e.a.length
q=this.a.k4
C.b.K(q.a,q.d,k)
for(q=[P.x],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.i(o,j)
o=o[j]
p.toString
H.k(o,"$ia6")
p=p.r1
if(j>=p.length)return H.i(p,j)
p=p[j]
i=new Float32Array(H.cM(H.j(o.a7(0,!0),"$ib",q,"$ab")))
C.b.ee(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.f:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.n(q.a,q.d,o,n,p)
break
case C.e:this.V(l,this.f.d)
q=this.a
p=this.f.d
q.ad(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
break
case C.d:this.V(l,this.f.e)
q=this.a
p=this.f.e
q.a8(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.f:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.n(q.a,q.d,o,n,p)
break
case C.e:this.V(l,this.r.d)
q=this.a
p=this.r.d
q.ad(q.y1,q.an,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
break
case C.d:this.V(l,this.r.e)
q=this.a
p=this.r.e
q.a8(q.y2,q.an,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
break}switch(s.c){case C.c:break
case C.f:q=this.a
p=this.x.f
q=q.ae
q.toString
o=p.a
n=p.b
p=p.c
C.b.n(q.a,q.d,o,n,p)
break
case C.e:this.V(l,this.x.d)
q=this.a
p=this.x.d
q.ad(q.bd,q.be,p)
p=this.a
q=this.x.f
p=p.ae
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
break
case C.d:this.V(l,this.x.e)
q=this.a
p=this.x.e
q.a8(q.dA,q.be,p)
p=this.a
q=this.x.f
p=p.ae
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
break}switch(s.d){case C.c:break
case C.f:q=this.a
p=this.y.f
q=q.bf
q.toString
o=p.a
n=p.b
p=p.c
C.b.n(q.a,q.d,o,n,p)
break
case C.e:this.V(l,this.y.d)
q=this.a
p=this.y.d
q.ad(q.dB,q.bg,p)
p=this.a
q=this.y.f
p=p.bf
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
break
case C.d:this.V(l,this.y.e)
q=this.a
p=this.y.e
q.a8(q.dC,q.bg,p)
p=this.a
q=this.y.f
p=p.bf
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.f:q=this.a
p=this.z.f
q=q.bh
q.toString
o=p.a
n=p.b
p=p.c
C.b.n(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bj
C.b.G(p.a,p.d,n)
break
case C.e:this.V(l,this.z.d)
q=this.a
p=this.z.d
q.ad(q.dD,q.bi,p)
p=this.a
q=this.z.f
p=p.bh
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bj
C.b.G(q.a,q.d,n)
break
case C.d:this.V(l,this.z.e)
q=this.a
p=this.z.e
q.a8(q.dE,q.bi,p)
p=this.a
q=this.z.f
p=p.bh
p.toString
o=q.a
n=q.b
q=q.c
C.b.n(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bj
C.b.G(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.dP
C.b.K(q.a,q.d,k)
q=a2.db
h=q.gM(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.cc
if(g>=o.length)return H.i(o,g)
d=o[g]
o=h.cw(e.a)
n=o.a
c=o.b
b=o.c
b=o.t(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.n(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.n(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.dQ
C.b.K(q.a,q.d,k)
q=a2.db
h=q.gM(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.cd
if(g>=o.length)return H.i(o,g)
d=o[g]
o=e.gb0(e)
n=d.b
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=h.b6(e.gb0(e))
n=d.c
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gam(e)
n=d.d
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gc0()
n=d.e
C.b.G(n.a,n.d,o)
o=e.gc1()
n=d.f
C.b.G(n.a,n.d,o)
o=e.gc2()
n=d.r
C.b.G(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.dR
C.b.K(q.a,q.d,k)
q=a2.db
h=q.gM(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.ce
if(g>=o.length)return H.i(o,g)
d=o[g]
o=e.gb0(e)
n=d.b
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gca(e).jz()
n=d.c
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=h.b6(e.gb0(e))
n=d.d
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gam(e)
n=d.e
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gjy()
n=d.f
C.b.G(n.a,n.d,o)
o=e.gjx()
n=d.r
C.b.G(n.a,n.d,o)
o=e.gc0()
n=d.x
C.b.G(n.a,n.d,o)
o=e.gc1()
n=d.y
C.b.G(n.a,n.d,o)
o=e.gc2()
n=d.z
C.b.G(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.dS
C.b.K(q.a,q.d,k)
q=a2.db
h=q.gM(q)
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
n=this.a.cf
if(g>=n.length)return H.i(n,g)
d=n[g]
n=e.gb3()
H.j(l,"$ib",o,"$ab")
if(!C.a.aw(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gca(e)
c=d.d
C.b.n(c.a,c.d,n.a,n.b,n.c)
n=e.gby()
c=d.b
C.b.n(c.a,c.d,n.a,n.b,n.c)
n=e.gbv(e)
c=d.c
C.b.n(c.a,c.d,n.a,n.b,n.c)
n=h.cw(e.gca(e))
c=n.a
b=n.b
a=n.c
a=n.t(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.n(b.a,b.d,c,n,a)
a=e.gam(e)
n=d.f
C.b.n(n.a,n.d,a.a,a.b,a.c)
a=e.gb3()
n=a.gbt(a)
if(!n){n=d.x
C.b.K(n.a,n.d,1)}else{n=d.r
c=a.gbt(a)
b=n.a
n=n.d
if(!c)C.b.K(b,n,0)
else C.b.K(b,n,a.giS(a))
n=d.x
C.b.K(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.dT
C.b.K(q.a,q.d,k)
q=a2.db
h=q.gM(q)
for(q=this.dx.y,p=q.length,o=[P.x],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
c=this.a.cg
if(g>=c.length)return H.i(c,g)
d=c[g]
c=e.gb3()
H.j(l,"$ib",n,"$ab")
if(!C.a.aw(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.q(0,e.gM(e))
c=e.gM(e)
b=$.cj
if(b==null){b=new V.ah(0,0,0)
$.cj=b}b=c.b6(b)
c=d.b
C.b.n(c.a,c.d,b.a,b.b,b.c)
c=$.cj
if(c==null){c=new V.ah(0,0,0)
$.cj=c}c=a0.b6(c)
b=d.c
C.b.n(b.a,b.d,c.a,c.b,c.c)
c=a0.cl(0)
b=d.d
i=new Float32Array(H.cM(H.j(new V.dn(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a7(0,!0),"$ib",o,"$ab")))
C.b.ed(b.a,b.d,!1,i)
b=e.gam(e)
c=d.e
C.b.n(c.a,c.d,b.a,b.b,b.c)
b=e.gb3()
c=b.gbt(b)
if(!c){c=d.r
C.b.K(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.K(a1,c,0)
else C.b.K(a1,c,b.a)
c=d.r
C.b.K(c.a,c.d,0)}c=e.gc0()
b=d.x
C.b.G(b.a,b.d,c)
c=e.gc1()
b=d.y
C.b.G(b.a,b.d,c)
c=e.gc2()
b=d.z
C.b.G(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.dU
C.b.K(q.a,q.d,k)
q=a2.db
h=q.gM(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.ci
if(g>=o.length)return H.i(o,g)
d=o[g]
o=e.gb3()
H.j(l,"$ib",u,"$ab")
if(!C.a.aw(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gb0(e)
n=d.b
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gca(e)
n=d.c
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gby()
n=d.d
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gbv(e)
n=d.e
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=h.b6(e.gb0(e))
n=d.f
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gb3()
n=o.gbt(o)
if(!n){o=d.x
C.b.K(o.a,o.d,1)}else{n=d.r
c=o.gbt(o)
b=n.a
n=n.d
if(!c)C.b.K(b,n,0)
else C.b.K(b,n,o.giS(o))
o=d.x
C.b.K(o.a,o.d,0)}o=e.gam(e)
n=d.y
C.b.n(n.a,n.d,o.a,o.b,o.c)
o=e.gjA()
n=d.z
C.b.G(n.a,n.d,o)
o=e.gjB()
n=d.Q
C.b.G(n.a,n.d,o)
o=e.gc0()
n=d.ch
C.b.G(n.a,n.d,o)
o=e.gc1()
n=d.cx
C.b.G(n.a,n.d,o)
o=e.gc2()
n=d.cy
C.b.G(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.f:break
case C.e:this.V(l,this.Q.d)
u=this.a
q=this.Q.d
u.ad(u.dF,u.bk,q)
break
case C.d:this.V(l,this.Q.e)
u=this.a
q=this.Q.e
u.a8(u.dG,u.bk,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.gM(q).cl(0)
a2.Q=q}u=u.id
u.toString
u.ab(q.a7(0,!0))}if(s.dy){this.V(l,this.ch)
u=this.a
q=this.ch
u.a8(u.dH,u.dI,q)
switch(s.r){case C.c:break
case C.f:u=this.a
q=this.cx.f
u=u.bl
u.toString
p=q.a
o=q.b
q=q.c
C.b.n(u.a,u.d,p,o,q)
break
case C.e:this.V(l,this.cx.d)
u=this.a
q=this.cx.d
u.ad(u.dJ,u.bm,q)
q=this.a
u=this.cx.f
q=q.bl
q.toString
p=u.a
o=u.b
u=u.c
C.b.n(q.a,q.d,p,o,u)
break
case C.d:this.V(l,this.cx.e)
u=this.a
q=this.cx.e
u.a8(u.dK,u.bm,q)
q=this.a
u=this.cx.f
q=q.bl
q.toString
p=u.a
o=u.b
u=u.c
C.b.n(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.f:u=this.a
q=this.cy.f
u=u.bo
u.toString
p=q.a
o=q.b
q=q.c
C.b.n(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bn
C.b.G(q.a,q.d,o)
break
case C.e:this.V(l,this.cy.d)
u=this.a
q=this.cy.d
u.ad(u.dL,u.bp,q)
q=this.a
u=this.cy.f
q=q.bo
q.toString
p=u.a
o=u.b
u=u.c
C.b.n(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bn
C.b.G(u.a,u.d,o)
break
case C.d:this.V(l,this.cy.e)
u=this.a
q=this.cy.e
u.a8(u.dM,u.bp,q)
q=this.a
u=this.cy.f
q=q.bo
q.toString
p=u.a
o=u.b
u=u.c
C.b.n(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bn
C.b.G(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.f:u=this.a
p=this.db.f
u=u.bq
C.b.G(u.a,u.d,p)
break
case C.e:this.V(l,this.db.d)
u=this.a
p=this.db.d
u.ad(u.dN,u.br,p)
p=this.a
u=this.db.f
p=p.bq
C.b.G(p.a,p.d,u)
break
case C.d:this.V(l,this.db.e)
u=this.a
p=this.db.e
u.a8(u.dO,u.br,p)
p=this.a
u=this.db.f
p=p.bq
C.b.G(p.a,p.d,u)
break}u=a2.a
C.b.cb(u,3042)
C.b.it(u,770,771)}for(j=0;j<l.length;++j)l[j].X(a2)
u=a3.e
u.X(a2)
u.a4(a2)
u.aC(a2)
if(q)C.b.iJ(a2.a,3042)
for(u=a2.a,j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.c_(u,33984+q.a)
C.b.au(u,34067,null)}}q=this.a
q.toString
C.b.cz(u,null)
q.x.du()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cW().ae},
seX:function(a){this.e=H.j(a,"$iS",[V.a6],"$aS")}}
O.fN.prototype={
hx:function(a){var u=this.f
if(!(Math.abs(u-a)<$.K().a)){this.f=a
u=new D.C(this.b,u,a,this,[P.x])
u.b=!0
this.a.P(u)}},
aj:function(){this.cK()
this.hx(1)}}
O.cc.prototype={
P:function(a){this.a.P(H.k(a,"$iv"))},
aS:function(){return this.P(null)},
aj:function(){},
hz:function(a){},
hA:function(a){var u,t
u=this.e
if(u!=a){if(u!=null)u.gm().O(0,this.gaI())
t=this.e
this.e=a
if(a!=null)a.gm().h(0,this.gaI())
u=new D.C(this.b+".textureCube",t,this.e,this,[T.cq])
u.b=!0
this.a.P(u)}},
sb4:function(a){var u=this.c
if(u!==C.d){if(u===C.c)this.aj()
this.c=C.d
this.hz(null)
u=this.a
u.a=null
u.P(null)}this.hA(a)}}
O.fO.prototype={}
O.aN.prototype={
dd:function(a){var u,t
if(!J.W(this.f,a)){u=this.f
this.f=a
t=new D.C(this.b+".color",u,a,this,[V.Y])
t.b=!0
this.a.P(t)}},
aj:function(){this.cK()
this.dd(new V.Y(1,1,1))},
sam:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.aj()
u=this.a
u.a=null
u.P(null)}this.dd(b)}}
O.fQ.prototype={
hy:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.K().a)){this.ch=a
u=new D.C(this.b+".refraction",u,a,this,[P.x])
u.b=!0
this.a.P(u)}},
aj:function(){this.bA()
this.hy(1)}}
O.fR.prototype={
bX:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.K().a)){this.ch=a
u=new D.C(this.b+".shininess",u,a,this,[P.x])
u.b=!0
this.a.P(u)}},
aj:function(){this.bA()
this.bX(100)}}
O.dy.prototype={
gm:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
P:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.v(a)},
aS:function(){return this.P(null)},
e8:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.k(a.fr.j(0,"Skybox"),"$idz")
if(u==null){t=a.a
u=new A.dz(t,"Skybox")
u.cL(t,"Skybox")
u.dW(0,$.lC,$.lB)
u.z=u.x.j(0,"posAttr")
u.Q=H.f(u.y.j(0,"fov"),"$iU")
u.ch=H.f(u.y.j(0,"ratio"),"$iU")
u.cx=H.f(u.y.j(0,"boxClr"),"$iF")
u.cy=H.f(u.y.j(0,"boxTxt"),"$iad")
u.db=H.f(u.y.j(0,"viewMat"),"$ial")
a.di(u)}this.a=u}if(b.e==null){t=b.d.dn(new Z.dV(a.a),$.aB())
t.ax($.aB()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.X(a)}t=a.d
s=a.c
r=this.a
r.X(a)
q=this.b
p=r.Q
C.b.G(p.a,p.d,q)
q=r.ch
C.b.G(q.a,q.d,t/s)
s=this.c
r.cy.cE(s)
s=this.d
t=r.cx
C.b.n(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gM(s).cl(0)
r=r.db
r.toString
r.ab(s.a7(0,!0))
t=b.e
if(t instanceof Z.bZ){t.X(a)
t.a4(a)
t.aC(a)}else b.e=null
t=this.a
t.toString
C.b.cz(a.a,null)
t.x.du()
t=this.c
if(t!=null)t.aC(a)}}
O.bs.prototype={}
T.cp.prototype={}
T.cq.prototype={
gm:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
X:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.c_(u,33984+this.a)
C.b.au(u,34067,this.b)}},
aC:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.c_(u,33984+this.a)
C.b.au(u,34067,null)}}}
T.hJ.prototype={
dZ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
u=a+"/"+d+"posx"+b
t=a+"/"+d+"posy"+b
s=a+"/"+d+"posz"+b
r=a+"/"+d+"negx"+b
q=a+"/"+d+"negy"+b
p=a+"/"+d+"negz"+b
o=this.a
n=o.createTexture()
C.b.au(o,34067,n)
C.b.bw(o,34067,10242,10497)
C.b.bw(o,34067,10243,10497)
C.b.bw(o,34067,10241,9729)
C.b.bw(o,34067,10240,9729)
C.b.au(o,34067,null)
m=new T.cq()
m.a=0
m.b=n
m.c=!1
m.d=0
this.aH(m,n,u,34069,!1,!1)
this.aH(m,n,r,34070,!1,!1)
this.aH(m,n,t,34071,!1,!1)
this.aH(m,n,q,34072,!1,!1)
this.aH(m,n,s,34073,!1,!1)
this.aH(m,n,p,34074,!1,!1)
return m},
dY:function(a){return this.dZ(a,".png",!1,"")},
iY:function(a,b){return this.dZ(a,b,!1,"")},
aH:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.l
W.a7(u,"load",H.n(new T.hK(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
hv:function(a,b,c){var u,t,s,r
b=V.jI(b,2)
u=V.jI(a.width,2)
t=V.jI(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jf(null,null)
s.width=u
s.height=t
r=H.k(C.m.ej(s,"2d"),"$ibC")
r.imageSmoothingEnabled=!1;(r&&C.r).iL(r,a,0,0,s.width,s.height)
return P.m3(C.r.fg(r,0,0,s.width,s.height))}}}
T.hK.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.hv(this.b,u.c,this.c)
s=u.a
C.b.au(s,34067,this.d)
C.b.jf(s,37440,this.e?1:0)
C.b.jn(s,this.f,0,6408,6408,5121,t)
C.b.au(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.iM()}++u.e},
$S:23}
V.eQ.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"},
$ib4:1}
V.b4.prototype={}
V.dk.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sas:function(a){this.a=H.j(a,"$ib",[V.b4],"$ab")},
$ib4:1}
V.b6.prototype={
aL:function(a,b){return!this.ew(0,b)},
i:function(a){return"!["+this.cJ(0)+"]"}}
V.hn.prototype={
eA:function(a){var u,t
if(a.a.length<=0)throw H.h(P.r("May not create a SetMatcher with zero characters."))
u=new H.aL([P.A,P.a5])
for(t=new H.di(a,a.gk(a),0,[H.ap(a,"u",0)]);t.B();)u.W(0,t.d,!0)
this.shw(u)},
aL:function(a,b){return this.a.ds(0,b)},
i:function(a){var u=this.a
return P.jr(new H.dh(u,[H.w(u,0)]),0,null)},
shw:function(a){this.a=H.j(a,"$iM",[P.A,P.a5],"$aM")},
$ib4:1}
V.cn.prototype={
w:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cs(this.a.I(0,b))
r.sas(H.c([],[V.b4]))
r.c=!1
C.a.h(this.c,r)
return r},
iO:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
shS:function(a){this.c=H.j(a,"$ib",[V.cs],"$ab")}}
V.dI.prototype={
i:function(a){var u,t
u=H.kG(this.b,"\n","\\n")
t=H.kG(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cr.prototype={
i:function(a){return this.b},
shr:function(a){var u=P.o
this.c=H.j(a,"$iM",[u,u],"$aM")}}
V.hN.prototype={
I:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cn(this,b)
u.shS(H.c([],[V.cs]))
u.d=null
this.a.W(0,b,u)}return u},
b5:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cr(this,a)
t=P.o
u.shr(new H.aL([t,t]))
this.b.W(0,a,u)}return u},
jt:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.dI])
t=this.c
s=[P.A]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.b7(a,o)
m=t.iO(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.jr(r,0,null)
throw H.h(P.r("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.jr(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dI(j==null?k.b:j,l,o)}++o}}},
shH:function(a){this.a=H.j(a,"$iM",[P.o,V.cn],"$aM")},
shL:function(a){this.b=H.j(a,"$iM",[P.o,V.cr],"$aM")}}
V.cs.prototype={
i:function(a){return this.b.b+": "+this.cJ(0)}}
X.bA.prototype={$iaQ:1}
X.ft.prototype={
gm:function(){var u=this.x
if(u==null){u=D.J()
this.x=u}return u},
ac:function(a){var u=this.x
if(u!=null)u.v(a)},
se7:function(a,b){var u,t
if(!J.W(this.r,b)){u=this.r
this.r=b
t=new D.C("region",u,b,this,[V.cl])
t.b=!0
this.ac(t)}},
X:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.is(u,36160,null)
C.b.cb(u,2884)
C.b.cb(u,2929)
C.b.iI(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.D(t)
p=C.i.ag(q*t)
q=r.b
if(typeof s!=="number")return H.D(s)
o=C.i.ag(q*s)
q=C.i.ag(r.c*t)
a.c=q
r=C.i.ag(r.d*s)
a.d=r
C.b.jv(u,p,o,q,r)
C.b.ix(u,this.c)
if(this.b){r=this.a
C.b.iw(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.iv(u,n)}}
X.fw.prototype={
gm:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
X:function(a){var u
a.cy.bu(V.bp())
u=V.bp()
a.db.bu(u)},
aC:function(a){a.cy.aA()
a.db.aA()},
$iaQ:1,
$ibA:1}
X.dt.prototype={
gm:function(){var u=this.f
if(u==null){u=D.J()
this.f=u}return u},
ac:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.v(a)},
eR:function(){return this.ac(null)},
X:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aO(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bu(n)
u=$.k1
if(u==null){u=V.k3()
t=V.kj()
s=$.kg
if(s==null){s=new V.L(0,0,-1)
$.kg=s}s=V.jX(u,t,s)
$.k1=s
m=s}else m=u
u=this.b
if(u!=null){l=u.aM(0,a,this)
if(l!=null)m=l.q(0,m)}a.db.bu(m)},
aC:function(a){a.cy.aA()
a.db.aA()},
$iaQ:1,
$ibA:1}
X.bL.prototype={}
V.jb.prototype={
$1:function(a){H.k(a,"$iaW")
P.jJ(C.i.ec(this.a.giQ(),2)+" fps")},
$S:36}
V.hr.prototype={
eB:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.q).Z(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.q.Z(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.Z(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.Z(q,p)}o=u.createElement("div")
this.a=o
C.l.Z(q,o)
this.b=null
o=W.l
W.a7(u,"scroll",H.n(new V.ht(s),{func:1,ret:-1,args:[o]}),!1,o)},
dh:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.j(a,"$ib",[P.o],"$ab")
this.hC()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jt(C.a.iV(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.Z(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.Z(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.Z(t,o)
break
case"Link":n=p.b
if(H.mm(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.i(m,1)
l.href=H.R(m[1])
l.textContent=H.R(m[0])
C.l.Z(t,l)}else{k=P.lP(C.M,n,C.w,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.l.Z(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.Z(t,o)
break}}C.l.Z(this.a,t)},
hC:function(){var u,t,s,r
if(this.b!=null)return
u=new V.hN()
t=P.o
u.shH(new H.aL([t,V.cn]))
u.shL(new H.aL([t,V.cr]))
u.c=null
u.c=u.I(0,"Start")
t=u.I(0,"Start").w(0,"Bold")
s=V.ac(new H.a0("*"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,"Bold").w(0,"Bold")
s=new V.b6()
r=[V.b4]
s.sas(H.c([],r))
C.a.h(t.a,s)
t=V.ac(new H.a0("*"))
C.a.h(s.a,t)
t=u.I(0,"Bold").w(0,"BoldEnd")
s=V.ac(new H.a0("*"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,"Start").w(0,"Italic")
s=V.ac(new H.a0("_"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,"Italic").w(0,"Italic")
s=new V.b6()
s.sas(H.c([],r))
C.a.h(t.a,s)
t=V.ac(new H.a0("_"))
C.a.h(s.a,t)
t=u.I(0,"Italic").w(0,"ItalicEnd")
s=V.ac(new H.a0("_"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,"Start").w(0,"Code")
s=V.ac(new H.a0("`"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,"Code").w(0,"Code")
s=new V.b6()
s.sas(H.c([],r))
C.a.h(t.a,s)
t=V.ac(new H.a0("`"))
C.a.h(s.a,t)
t=u.I(0,"Code").w(0,"CodeEnd")
s=V.ac(new H.a0("`"))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,"Start").w(0,"LinkHead")
s=V.ac(new H.a0("["))
C.a.h(t.a,s)
t.c=!0
t=u.I(0,"LinkHead").w(0,"LinkTail")
s=V.ac(new H.a0("|"))
C.a.h(t.a,s)
s=u.I(0,"LinkHead").w(0,"LinkEnd")
t=V.ac(new H.a0("]"))
C.a.h(s.a,t)
s.c=!0
s=u.I(0,"LinkHead").w(0,"LinkHead")
t=new V.b6()
t.sas(H.c([],r))
C.a.h(s.a,t)
s=V.ac(new H.a0("|]"))
C.a.h(t.a,s)
s=u.I(0,"LinkTail").w(0,"LinkEnd")
t=V.ac(new H.a0("]"))
C.a.h(s.a,t)
s.c=!0
s=u.I(0,"LinkTail").w(0,"LinkTail")
t=new V.b6()
t.sas(H.c([],r))
C.a.h(s.a,t)
s=V.ac(new H.a0("|]"))
C.a.h(t.a,s)
C.a.h(u.I(0,"Start").w(0,"Other").a,new V.eQ())
s=u.I(0,"Other").w(0,"Other")
t=new V.b6()
t.sas(H.c([],r))
C.a.h(s.a,t)
s=V.ac(new H.a0("*_`["))
C.a.h(t.a,s)
s=u.I(0,"BoldEnd")
s.d=s.a.b5("Bold")
s=u.I(0,"ItalicEnd")
s.d=s.a.b5("Italic")
s=u.I(0,"CodeEnd")
s.d=s.a.b5("Code")
s=u.I(0,"LinkEnd")
s.d=s.a.b5("Link")
s=u.I(0,"Other")
s.d=s.a.b5("Other")
this.b=u}}
V.ht.prototype={
$1:function(a){P.kb(C.n,new V.hs(this.a))},
$S:23}
V.hs.prototype={
$0:function(){var u,t,s
u=C.i.ag(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a.prototype
u.eu=u.i
u=J.de.prototype
u.ev=u.i
u=O.cc.prototype
u.cK=u.aj
u=O.aN.prototype
u.bA=u.aj
u=V.dk.prototype
u.ew=u.aL
u.cJ=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"lY","lI",10)
u(P,"lZ","lJ",10)
u(P,"m_","lK",10)
t(P,"kw","lX",3)
var n
s(n=E.ag.prototype,"ge5",0,0,null,["$1","$0"],["e6","j6"],0,0)
s(n,"ge3",0,0,null,["$1","$0"],["e4","j5"],0,0)
s(n,"ge1",0,0,null,["$1","$0"],["e2","j2"],0,0)
r(n,"gj0","j1",7)
r(n,"gj3","j4",7)
s(n=E.dH.prototype,"gcM",0,0,null,["$1","$0"],["cO","cN"],0,0)
q(n,"gji","e9",3)
p(n=X.dP.prototype,"gfR","fS",9)
p(n,"gfF","fG",9)
p(n,"gfL","fM",4)
p(n,"gfV","fW",18)
p(n,"gfT","fU",18)
p(n,"gfZ","h_",4)
p(n,"gh2","h3",4)
p(n,"gfP","fQ",4)
p(n,"gh0","h1",4)
p(n,"gfN","fO",4)
p(n,"gh4","h5",33)
p(n,"gh6","h7",9)
p(n,"ghk","hl",11)
p(n,"ghg","hh",11)
p(n,"ghi","hj",11)
s(D.b1.prototype,"geE",0,0,null,["$1","$0"],["ap","eF"],0,0)
s(n=D.dg.prototype,"gd5",0,0,null,["$1","$0"],["d6","fX"],0,0)
p(n,"gh8","h9",31)
r(n,"gfv","fw",19)
r(n,"ghc","hd",19)
o(V.P.prototype,"gk","cn",20)
o(V.L.prototype,"gk","cn",20)
s(n=U.c9.prototype,"gaF",0,0,null,["$1","$0"],["J","a3"],0,0)
r(n,"geG","eH",21)
r(n,"gha","hb",21)
s(n=U.dQ.prototype,"gaF",0,0,null,["$1","$0"],["J","a3"],0,0)
p(n,"gbL","bM",1)
p(n,"gbN","bO",1)
p(n,"gbP","bQ",1)
s(n=U.dR.prototype,"gaF",0,0,null,["$1","$0"],["J","a3"],0,0)
p(n,"gbL","bM",1)
p(n,"gbN","bO",1)
p(n,"gbP","bQ",1)
p(n,"gfo","fp",1)
p(n,"gfq","fs",1)
p(n,"ghQ","hR",1)
p(n,"ghO","hP",1)
p(n,"ghM","hN",1)
p(U.dS.prototype,"gft","fu",1)
s(M.d2.prototype,"gS",0,0,null,["$1","$0"],["T","aP"],0,0)
s(n=M.d6.prototype,"gS",0,0,null,["$1","$0"],["T","aP"],0,0)
r(n,"gfH","fI",7)
r(n,"gfJ","fK",7)
s(n=M.dC.prototype,"gS",0,0,null,["$1","$0"],["T","aP"],0,0)
r(n,"gfz","fA",16)
r(n,"ghe","hf",16)
s(n=O.dl.prototype,"gaI",0,0,null,["$1","$0"],["P","aS"],0,0)
s(n,"ght",0,0,null,["$1","$0"],["da","hu"],0,0)
r(n,"gfB","fC",22)
r(n,"gfD","fE",22)
s(O.cc.prototype,"gaI",0,0,null,["$1","$0"],["P","aS"],0,0)
s(O.dy.prototype,"gaI",0,0,null,["$1","$0"],["P","aS"],0,0)
s(X.dt.prototype,"geQ",0,0,null,["$1","$0"],["ac","eR"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.N,null)
s(P.N,[H.jl,J.a,J.ae,P.ea,P.d,H.di,P.aJ,H.bE,H.dO,H.hd,H.hS,P.bj,H.c_,H.er,P.ab,H.fE,H.fF,H.fA,P.ex,P.b0,P.as,P.dW,P.hB,P.co,P.hC,P.aW,P.af,P.iX,P.iR,P.cC,P.iL,P.u,P.c0,P.iW,P.a5,P.aj,P.a_,P.bi,P.h7,P.dB,P.e3,P.fs,P.b,P.M,P.H,P.ak,P.o,P.br,W.f5,W.y,W.d7,P.eC,P.iM,O.S,O.cd,E.eY,E.ag,E.hf,E.dH,Z.dU,Z.dV,Z.bZ,Z.bl,Z.aZ,D.f0,D.aG,D.v,X.d_,X.df,X.fC,X.fI,X.am,X.fY,X.hO,X.dP,D.b1,D.Z,D.du,D.dA,D.dE,D.dF,D.dG,V.Y,V.au,V.fi,V.dn,V.a6,V.a4,V.ah,V.b9,V.cl,V.P,V.L,U.dQ,U.dR,U.dS,M.d2,M.d6,M.bK,M.dC,A.cV,A.eT,A.fP,A.ct,A.cx,A.cv,A.cy,A.cw,A.cz,A.bD,A.dK,A.i0,F.a2,F.b3,F.bq,F.dx,F.ho,F.hp,F.hq,F.ao,F.ia,F.ib,F.ie,F.ig,O.bs,O.cc,T.hJ,V.eQ,V.b4,V.dk,V.hn,V.cn,V.dI,V.cr,V.hN,X.bA,X.bL,X.fw,X.dt,V.hr])
s(J.a,[J.fz,J.dc,J.de,J.aK,J.dd,J.cb,H.ch,W.e,W.eP,W.cW,W.bC,W.aE,W.aF,W.O,W.dY,W.f9,W.fa,W.e_,W.d5,W.e1,W.fc,W.l,W.e4,W.aI,W.fv,W.e6,W.bk,W.fH,W.fS,W.eb,W.ec,W.aP,W.ed,W.eg,W.aR,W.ek,W.em,W.aT,W.en,W.aU,W.es,W.ax,W.ev,W.hM,W.aX,W.ey,W.hQ,W.i5,W.eD,W.eF,W.eH,W.eJ,W.eL,P.b2,P.e8,P.b7,P.ei,P.hb,P.et,P.ba,P.eA,P.eU,P.dX,P.cY,P.d8,P.dv,P.bJ,P.dw,P.dD,P.dL,P.ep])
s(J.de,[J.h8,J.dM,J.bo])
t(J.jk,J.aK)
s(J.dd,[J.db,J.da])
t(P.fG,P.ea)
s(P.fG,[H.dN,W.it,W.is,P.fo])
t(H.a0,H.dN)
s(P.d,[H.ff,H.fL,H.il])
s(P.aJ,[H.fM,H.im])
s(P.bj,[H.h4,H.fB,H.i3,H.hU,H.f_,H.hl,P.ds,P.aC,P.i4,P.i2,P.hx,P.f3,P.f8])
s(H.c_,[H.jc,H.hG,H.j5,H.j6,H.j7,P.ip,P.io,P.iq,P.ir,P.iV,P.iU,P.iy,P.iC,P.iz,P.iA,P.iB,P.iF,P.iG,P.iE,P.iD,P.hD,P.hE,P.j0,P.iP,P.iO,P.iQ,P.fK,P.fd,P.fe,W.fU,W.fW,W.hk,W.hA,W.ix,P.j2,P.fp,P.fq,P.eW,E.hg,E.hh,E.hi,E.hL,D.fk,D.fl,F.iY,F.ii,F.ih,F.ic,F.id,T.hK,V.jb,V.ht,V.hs])
s(H.hG,[H.hy,H.bX])
t(P.fJ,P.ab)
t(H.aL,P.fJ)
t(H.dh,H.ff)
t(H.dp,H.ch)
s(H.dp,[H.cD,H.cF])
t(H.cE,H.cD)
t(H.cg,H.cE)
t(H.cG,H.cF)
t(H.dq,H.cG)
s(H.dq,[H.fZ,H.h_,H.h0,H.h1,H.h2,H.dr,H.h3])
t(P.iN,P.iX)
t(P.iK,P.iR)
t(P.d1,P.hC)
t(P.fg,P.c0)
t(P.i6,P.fg)
t(P.i7,P.d1)
s(P.a_,[P.x,P.A])
s(P.aC,[P.bI,P.fx])
s(W.e,[W.G,W.fn,W.aS,W.cH,W.aV,W.ay,W.cJ,W.ik,W.cA,P.eX,P.bz])
s(W.G,[W.a1,W.bh,W.c6])
s(W.a1,[W.q,P.p])
s(W.q,[W.eR,W.eS,W.cX,W.bB,W.c5,W.fr,W.ca,W.ce,W.hm])
s(W.aE,[W.c3,W.f6,W.f7])
t(W.f4,W.aF)
t(W.c4,W.dY)
t(W.e0,W.e_)
t(W.d4,W.e0)
t(W.e2,W.e1)
t(W.fb,W.e2)
t(W.aH,W.cW)
t(W.e5,W.e4)
t(W.fm,W.e5)
t(W.e7,W.e6)
t(W.bF,W.e7)
t(W.d9,W.c6)
t(W.bt,W.l)
s(W.bt,[W.aM,W.a9,W.az])
t(W.fT,W.eb)
t(W.fV,W.ec)
t(W.ee,W.ed)
t(W.fX,W.ee)
t(W.eh,W.eg)
t(W.ci,W.eh)
t(W.el,W.ek)
t(W.h9,W.el)
t(W.hj,W.em)
t(W.cI,W.cH)
t(W.hu,W.cI)
t(W.eo,W.en)
t(W.hv,W.eo)
t(W.hz,W.es)
t(W.ew,W.ev)
t(W.hH,W.ew)
t(W.cK,W.cJ)
t(W.hI,W.cK)
t(W.ez,W.ey)
t(W.hP,W.ez)
t(W.ij,W.ce)
t(W.b_,W.a9)
t(W.eE,W.eD)
t(W.iu,W.eE)
t(W.dZ,W.d5)
t(W.eG,W.eF)
t(W.iH,W.eG)
t(W.eI,W.eH)
t(W.ef,W.eI)
t(W.eK,W.eJ)
t(W.iS,W.eK)
t(W.eM,W.eL)
t(W.iT,W.eM)
t(W.iv,P.hB)
t(W.jv,W.iv)
t(W.iw,P.co)
t(P.aa,P.iM)
t(P.e9,P.e8)
t(P.fD,P.e9)
t(P.ej,P.ei)
t(P.h5,P.ej)
t(P.eu,P.et)
t(P.hF,P.eu)
t(P.eB,P.eA)
t(P.hR,P.eB)
t(P.eV,P.dX)
t(P.h6,P.bz)
t(P.eq,P.ep)
t(P.hw,P.eq)
s(E.eY,[Z.cZ,A.cm,T.cp])
s(D.v,[D.bm,D.bn,D.C,X.ha])
s(X.ha,[X.dj,X.b5,X.cf,X.dJ])
s(O.S,[D.dg,U.c9])
s(D.f0,[U.f2,U.a3])
t(U.c2,U.a3)
t(M.aw,M.bK)
s(A.cm,[A.dm,A.dz])
s(A.dK,[A.I,A.hX,A.hY,A.i_,A.hV,A.U,A.hW,A.F,A.hZ,A.i1,A.cu,A.al,A.ai,A.ad])
s(O.bs,[O.dl,O.dy])
s(O.cc,[O.fN,O.fO,O.aN])
s(O.aN,[O.fQ,O.fR])
t(T.cq,T.cp)
s(V.dk,[V.b6,V.cs])
t(X.ft,X.bL)
u(H.dN,H.dO)
u(H.cD,P.u)
u(H.cE,H.bE)
u(H.cF,P.u)
u(H.cG,H.bE)
u(P.ea,P.u)
u(W.dY,W.f5)
u(W.e_,P.u)
u(W.e0,W.y)
u(W.e1,P.u)
u(W.e2,W.y)
u(W.e4,P.u)
u(W.e5,W.y)
u(W.e6,P.u)
u(W.e7,W.y)
u(W.eb,P.ab)
u(W.ec,P.ab)
u(W.ed,P.u)
u(W.ee,W.y)
u(W.eg,P.u)
u(W.eh,W.y)
u(W.ek,P.u)
u(W.el,W.y)
u(W.em,P.ab)
u(W.cH,P.u)
u(W.cI,W.y)
u(W.en,P.u)
u(W.eo,W.y)
u(W.es,P.ab)
u(W.ev,P.u)
u(W.ew,W.y)
u(W.cJ,P.u)
u(W.cK,W.y)
u(W.ey,P.u)
u(W.ez,W.y)
u(W.eD,P.u)
u(W.eE,W.y)
u(W.eF,P.u)
u(W.eG,W.y)
u(W.eH,P.u)
u(W.eI,W.y)
u(W.eJ,P.u)
u(W.eK,W.y)
u(W.eL,P.u)
u(W.eM,W.y)
u(P.e8,P.u)
u(P.e9,W.y)
u(P.ei,P.u)
u(P.ej,W.y)
u(P.et,P.u)
u(P.eu,W.y)
u(P.eA,P.u)
u(P.eB,W.y)
u(P.dX,P.ab)
u(P.ep,P.u)
u(P.eq,W.y)})();(function constants(){var u=hunkHelpers.makeConstList
C.q=W.cX.prototype
C.m=W.bB.prototype
C.r=W.bC.prototype
C.l=W.c5.prototype
C.C=W.d9.prototype
C.D=J.a.prototype
C.a=J.aK.prototype
C.E=J.da.prototype
C.h=J.db.prototype
C.o=J.dc.prototype
C.i=J.dd.prototype
C.j=J.cb.prototype
C.L=J.bo.prototype
C.N=W.ci.prototype
C.v=J.h8.prototype
C.b=P.bJ.prototype
C.p=J.dM.prototype
C.x=W.b_.prototype
C.y=W.cA.prototype
C.z=new P.h7()
C.A=new P.i7()
C.k=new P.iN()
C.c=new A.bD(0,"ColorSourceType.None")
C.f=new A.bD(1,"ColorSourceType.Solid")
C.e=new A.bD(2,"ColorSourceType.Texture2D")
C.d=new A.bD(3,"ColorSourceType.TextureCube")
C.n=new P.bi(0)
C.B=new P.bi(5e6)
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.H=function(getTagFallback) {
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
C.I=function() {
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
C.K=function(hooks) {
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
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.M=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.w=new P.i6(!1)})();(function staticFields(){$.aD=0
$.bY=null
$.jO=null
$.jw=!1
$.kA=null
$.ku=null
$.kF=null
$.j3=null
$.j8=null
$.jF=null
$.bM=null
$.cN=null
$.cO=null
$.jx=!1
$.V=C.k
$.jZ=null
$.k2=null
$.cj=null
$.k7=null
$.kf=null
$.ki=null
$.kh=null
$.i8=null
$.kg=null
$.lC="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.lB="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.k1=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mu","kJ",function(){return H.kz("_$dart_dartClosure")})
u($,"mv","jK",function(){return H.kz("_$dart_js")})
u($,"my","kK",function(){return H.aY(H.hT({
toString:function(){return"$receiver$"}}))})
u($,"mz","kL",function(){return H.aY(H.hT({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mA","kM",function(){return H.aY(H.hT(null))})
u($,"mB","kN",function(){return H.aY(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mE","kQ",function(){return H.aY(H.hT(void 0))})
u($,"mF","kR",function(){return H.aY(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mD","kP",function(){return H.aY(H.kd(null))})
u($,"mC","kO",function(){return H.aY(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mH","kT",function(){return H.aY(H.kd(void 0))})
u($,"mG","kS",function(){return H.aY(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mX","jL",function(){return P.lH()})
u($,"mZ","cU",function(){return[]})
u($,"mY","kX",function(){return P.lw("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"mQ","kW",function(){return Z.ar(0)})
u($,"mK","kU",function(){return Z.ar(511)})
u($,"mS","aB",function(){return Z.ar(1)})
u($,"mR","be",function(){return Z.ar(2)})
u($,"mM","bd",function(){return Z.ar(4)})
u($,"mT","bf",function(){return Z.ar(8)})
u($,"mU","bg",function(){return Z.ar(16)})
u($,"mN","cS",function(){return Z.ar(32)})
u($,"mO","cT",function(){return Z.ar(64)})
u($,"mP","kV",function(){return Z.ar(96)})
u($,"mV","bU",function(){return Z.ar(128)})
u($,"mL","bc",function(){return Z.ar(256)})
u($,"mt","kI",function(){return new V.fi(1e-9)})
u($,"ms","K",function(){return $.kI()})})()
var v={mangledGlobalNames:{A:"int",x:"double",a_:"num",o:"String",a5:"bool",H:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[W.a9]},{func:1,ret:P.H,args:[F.a2]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.A,[P.d,E.ag]]},{func:1,ret:P.H,args:[D.v]},{func:1,ret:-1,args:[W.l]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.az]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.o,args:[P.A]},{func:1,ret:P.H,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[P.A,[P.d,M.aw]]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.aM]},{func:1,ret:-1,args:[P.A,[P.d,D.Z]]},{func:1,ret:P.x},{func:1,ret:-1,args:[P.A,[P.d,U.a3]]},{func:1,ret:-1,args:[P.A,[P.d,V.a6]]},{func:1,ret:P.H,args:[W.l]},{func:1,args:[W.l]},{func:1,ret:P.a5,args:[W.G]},{func:1,ret:W.a1,args:[W.G]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,args:[,P.o]},{func:1,ret:P.H,args:[P.a_]},{func:1,args:[P.o]},{func:1,ret:P.a5,args:[[P.d,D.Z]]},{func:1,ret:P.H,args:[,],opt:[P.ak]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:P.H,args:[F.ao,P.x,P.x]},{func:1,ret:[P.as,,],args:[,]},{func:1,ret:P.H,args:[P.aW]},{func:1,ret:-1,args:[P.o,P.o]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.ch,ArrayBufferView:H.ch,Float32Array:H.cg,Float64Array:H.cg,Int16Array:H.fZ,Int32Array:H.h_,Int8Array:H.h0,Uint16Array:H.h1,Uint32Array:H.h2,Uint8ClampedArray:H.dr,CanvasPixelArray:H.dr,Uint8Array:H.h3,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eP,HTMLAnchorElement:W.eR,HTMLAreaElement:W.eS,Blob:W.cW,HTMLBodyElement:W.cX,HTMLCanvasElement:W.bB,CanvasRenderingContext2D:W.bC,CDATASection:W.bh,CharacterData:W.bh,Comment:W.bh,ProcessingInstruction:W.bh,Text:W.bh,CSSNumericValue:W.c3,CSSUnitValue:W.c3,CSSPerspective:W.f4,CSSCharsetRule:W.O,CSSConditionRule:W.O,CSSFontFaceRule:W.O,CSSGroupingRule:W.O,CSSImportRule:W.O,CSSKeyframeRule:W.O,MozCSSKeyframeRule:W.O,WebKitCSSKeyframeRule:W.O,CSSKeyframesRule:W.O,MozCSSKeyframesRule:W.O,WebKitCSSKeyframesRule:W.O,CSSMediaRule:W.O,CSSNamespaceRule:W.O,CSSPageRule:W.O,CSSRule:W.O,CSSStyleRule:W.O,CSSSupportsRule:W.O,CSSViewportRule:W.O,CSSStyleDeclaration:W.c4,MSStyleCSSProperties:W.c4,CSS2Properties:W.c4,CSSImageValue:W.aE,CSSKeywordValue:W.aE,CSSPositionValue:W.aE,CSSResourceValue:W.aE,CSSURLImageValue:W.aE,CSSStyleValue:W.aE,CSSMatrixComponent:W.aF,CSSRotation:W.aF,CSSScale:W.aF,CSSSkew:W.aF,CSSTranslation:W.aF,CSSTransformComponent:W.aF,CSSTransformValue:W.f6,CSSUnparsedValue:W.f7,DataTransferItemList:W.f9,HTMLDivElement:W.c5,XMLDocument:W.c6,Document:W.c6,DOMException:W.fa,ClientRectList:W.d4,DOMRectList:W.d4,DOMRectReadOnly:W.d5,DOMStringList:W.fb,DOMTokenList:W.fc,Element:W.a1,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aH,FileList:W.fm,FileWriter:W.fn,HTMLFormElement:W.fr,Gamepad:W.aI,History:W.fv,HTMLCollection:W.bF,HTMLFormControlsCollection:W.bF,HTMLOptionsCollection:W.bF,HTMLDocument:W.d9,ImageData:W.bk,HTMLImageElement:W.ca,KeyboardEvent:W.aM,Location:W.fH,HTMLAudioElement:W.ce,HTMLMediaElement:W.ce,MediaList:W.fS,MIDIInputMap:W.fT,MIDIOutputMap:W.fV,MimeType:W.aP,MimeTypeArray:W.fX,PointerEvent:W.a9,MouseEvent:W.a9,DragEvent:W.a9,DocumentFragment:W.G,ShadowRoot:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.ci,RadioNodeList:W.ci,Plugin:W.aR,PluginArray:W.h9,RTCStatsReport:W.hj,HTMLSelectElement:W.hm,SourceBuffer:W.aS,SourceBufferList:W.hu,SpeechGrammar:W.aT,SpeechGrammarList:W.hv,SpeechRecognitionResult:W.aU,Storage:W.hz,CSSStyleSheet:W.ax,StyleSheet:W.ax,TextTrack:W.aV,TextTrackCue:W.ay,VTTCue:W.ay,TextTrackCueList:W.hH,TextTrackList:W.hI,TimeRanges:W.hM,Touch:W.aX,TouchEvent:W.az,TouchList:W.hP,TrackDefaultList:W.hQ,CompositionEvent:W.bt,FocusEvent:W.bt,TextEvent:W.bt,UIEvent:W.bt,URL:W.i5,HTMLVideoElement:W.ij,VideoTrackList:W.ik,WheelEvent:W.b_,Window:W.cA,DOMWindow:W.cA,CSSRuleList:W.iu,ClientRect:W.dZ,DOMRect:W.dZ,GamepadList:W.iH,NamedNodeMap:W.ef,MozNamedAttrMap:W.ef,SpeechRecognitionResultList:W.iS,StyleSheetList:W.iT,SVGLength:P.b2,SVGLengthList:P.fD,SVGNumber:P.b7,SVGNumberList:P.h5,SVGPointList:P.hb,SVGStringList:P.hF,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.ba,SVGTransformList:P.hR,AudioBuffer:P.eU,AudioParamMap:P.eV,AudioTrackList:P.eX,AudioContext:P.bz,webkitAudioContext:P.bz,BaseAudioContext:P.bz,OfflineAudioContext:P.h6,WebGLBuffer:P.cY,WebGLFramebuffer:P.d8,WebGLProgram:P.dv,WebGL2RenderingContext:P.bJ,WebGLShader:P.dw,WebGLTexture:P.dD,WebGLUniformLocation:P.dL,SQLResultSetRowList:P.hw})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dp.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.dq.$nativeSuperclassTag="ArrayBufferView"
W.cH.$nativeSuperclassTag="EventTarget"
W.cI.$nativeSuperclassTag="EventTarget"
W.cJ.$nativeSuperclassTag="EventTarget"
W.cK.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.kC,[])
else K.kC([])})})()
//# sourceMappingURL=test.dart.js.map
