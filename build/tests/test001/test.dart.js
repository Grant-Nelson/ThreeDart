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
a[c]=function(){a[c]=function(){H.mt(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jt(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jd:function jd(a){this.a=a},
fa:function(){return new P.c7("No element")},
ll:function(){return new P.c7("Too many elements")},
o:function o(a){this.a=a},
eM:function eM(){},
bo:function bo(){},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fq:function fq(a,b,c){this.a=a
this.b=b
this.$ti=c},
fr:function fr(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fs:function fs(a,b,c){this.a=a
this.b=b
this.$ti=c},
cf:function cf(a,b,c){this.a=a
this.b=b
this.$ti=c},
i5:function i5(a,b,c){this.a=a
this.b=b
this.$ti=c},
bl:function bl(){},
dl:function dl(){},
dk:function dk(){},
bE:function(a){var u,t
u=H.A(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
ma:function(a){return v.types[H.Y(a)]},
mh:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iz},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ao(a)
if(typeof u!=="string")throw H.f(H.be(a))
return u},
lz:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fb(u)
t=u[0]
s=u[1]
return new H.fS(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
c3:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
br:function(a){return H.lq(a)+H.jq(H.bf(a),0,null)},
lq:function(a){var u,t,s,r,q,p,o,n,m
u=J.Q(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.H||!!u.$iba){p=C.u(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bE(r.length>1&&C.d.ab(r,0)===36?C.d.aL(r,1):r)},
k4:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ly:function(a){var u,t,s,r
u=H.c([],[P.y])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.H)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.f(H.be(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.aA(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.f(H.be(r))}return H.k4(u)},
k5:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.be(s))
if(s<0)throw H.f(H.be(s))
if(s>65535)return H.ly(a)}return H.k4(a)},
jf:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.aA(u,10))>>>0,56320|u&1023)}throw H.f(P.ad(a,0,1114111,null,null))},
bq:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lx:function(a){var u=H.bq(a).getFullYear()+0
return u},
lv:function(a){var u=H.bq(a).getMonth()+1
return u},
lr:function(a){var u=H.bq(a).getDate()+0
return u},
ls:function(a){var u=H.bq(a).getHours()+0
return u},
lu:function(a){var u=H.bq(a).getMinutes()+0
return u},
lw:function(a){var u=H.bq(a).getSeconds()+0
return u},
lt:function(a){var u=H.bq(a).getMilliseconds()+0
return u},
bg:function(a){throw H.f(H.be(a))},
k:function(a,b){if(a==null)J.bi(a)
throw H.f(H.ct(a,b))},
ct:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ap(!0,b,"index",null)
u=H.Y(J.bi(a))
if(!(b<0)){if(typeof u!=="number")return H.bg(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,"index",null,u)
return P.d7(b,"index",null)},
m5:function(a,b,c){if(a>c)return new P.bs(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bs(a,c,!0,b,"end","Invalid value")
return new P.ap(!0,b,"end",null)},
be:function(a){return new P.ap(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.d2()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kI})
u.name=""}else u.toString=H.kI
return u},
kI:function(){return J.ao(this.dartException)},
a0:function(a){throw H.f(a)},
H:function(a){throw H.f(P.b0(a))},
aH:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hx(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ke:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k_:function(a,b){return new H.fJ(a,b==null?null:b.method)},
je:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fg(a,t,u?null:b.receiver)},
aa:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.j5(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.aA(s,16)&8191)===10)switch(r){case 438:return u.$1(H.je(H.h(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.k_(H.h(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.kL()
p=$.kM()
o=$.kN()
n=$.kO()
m=$.kR()
l=$.kS()
k=$.kQ()
$.kP()
j=$.kU()
i=$.kT()
h=q.U(t)
if(h!=null)return u.$1(H.je(H.A(t),h))
else{h=p.U(t)
if(h!=null){h.method="call"
return u.$1(H.je(H.A(t),h))}else{h=o.U(t)
if(h==null){h=n.U(t)
if(h==null){h=m.U(t)
if(h==null){h=l.U(t)
if(h==null){h=k.U(t)
if(h==null){h=n.U(t)
if(h==null){h=j.U(t)
if(h==null){h=i.U(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.k_(H.A(t),h))}}return u.$1(new H.hO(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dc()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.ap(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dc()
return a},
bB:function(a){var u
if(a==null)return new H.dY(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dY(a)},
m7:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.J(0,a[t],a[s])}return b},
mg:function(a,b,c,d,e,f){H.n(a,"$ib3")
switch(H.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.a2("Unsupported number of arguments for wrapped closure"))},
bA:function(a,b){var u
H.Y(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mg)
a.$identity=u
return u},
lb:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Q(d).$ib){u.$reflectionInfo=d
s=H.lz(u).r}else s=d
r=e?Object.create(new H.hc().constructor.prototype):Object.create(new H.bM(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aq
if(typeof p!=="number")return p.R()
$.aq=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jN(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.ma,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jL:H.j9
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.f("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jN(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
l8:function(a,b,c,d){var u=H.j9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jN:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.la(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l8(t,!r,u,b)
if(t===0){r=$.aq
if(typeof r!=="number")return r.R()
$.aq=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bN
if(q==null){q=H.eu("self")
$.bN=q}return new Function(r+H.h(q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aq
if(typeof r!=="number")return r.R()
$.aq=r+1
o+=r
r="return function("+o+"){return this."
q=$.bN
if(q==null){q=H.eu("self")
$.bN=q}return new Function(r+H.h(q)+"."+H.h(u)+"("+o+");}")()},
l9:function(a,b,c,d){var u,t
u=H.j9
t=H.jL
switch(b?-1:a){case 0:throw H.f(H.lD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
la:function(a,b){var u,t,s,r,q,p,o,n
u=$.bN
if(u==null){u=H.eu("self")
$.bN=u}t=$.jK
if(t==null){t=H.eu("receiver")
$.jK=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.l9(r,!p,s,b)
if(r===1){u="return function(){return this."+H.h(u)+"."+H.h(s)+"(this."+H.h(t)+");"
t=$.aq
if(typeof t!=="number")return t.R()
$.aq=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.h(u)+"."+H.h(s)+"(this."+H.h(t)+", "+n+");"
t=$.aq
if(typeof t!=="number")return t.R()
$.aq=t+1
return new Function(u+t+"}")()},
jt:function(a,b,c,d,e,f,g){return H.lb(a,b,H.Y(c),d,!!e,!!f,g)},
j9:function(a){return a.a},
jL:function(a){return a.c},
eu:function(a){var u,t,s,r,q
u=new H.bM("self","target","receiver","name")
t=J.fb(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
A:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.an(a,"String"))},
n9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.an(a,"double"))},
mm:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.an(a,"num"))},
jr:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.an(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.an(a,"int"))},
kG:function(a,b){throw H.f(H.an(a,H.bE(H.A(b).substring(2))))},
mo:function(a,b){throw H.f(H.l7(a,H.bE(H.A(b).substring(2))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.kG(a,b)},
bC:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.mo(a,b)},
jy:function(a){if(a==null)return a
if(!!J.Q(a).$ib)return a
throw H.f(H.an(a,"List<dynamic>"))},
mi:function(a,b){var u
if(a==null)return a
u=J.Q(a)
if(!!u.$ib)return a
if(u[b])return a
H.kG(a,b)},
kA:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.Y(u)]
else return a.$S()}return},
ek:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.kA(J.Q(a))
if(u==null)return!1
return H.kr(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.jn)return a
$.jn=!0
try{if(H.ek(a,b))return a
u=H.j2(b)
t=H.an(a,u)
throw H.f(t)}finally{$.jn=!1}},
ju:function(a,b){if(a!=null&&!H.js(a,b))H.a0(H.an(a,H.j2(b)))
return a},
an:function(a,b){return new H.hz("TypeError: "+P.eQ(a)+": type '"+H.kv(a)+"' is not a subtype of type '"+b+"'")},
l7:function(a,b){return new H.ev("CastError: "+P.eQ(a)+": type '"+H.kv(a)+"' is not a subtype of type '"+b+"'")},
kv:function(a){var u,t
u=J.Q(a)
if(!!u.$ibO){t=H.kA(u)
if(t!=null)return H.j2(t)
return"Closure"}return H.br(a)},
mt:function(a){throw H.f(new P.eC(H.A(a)))},
lD:function(a){return new H.fZ(a)},
kB:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bf:function(a){if(a==null)return
return a.$ti},
na:function(a,b,c){return H.bD(a["$a"+H.h(c)],H.bf(b))},
cv:function(a,b,c,d){var u
H.A(c)
H.Y(d)
u=H.bD(a["$a"+H.h(c)],H.bf(b))
return u==null?null:u[d]},
cu:function(a,b,c){var u
H.A(b)
H.Y(c)
u=H.bD(a["$a"+H.h(b)],H.bf(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.Y(b)
u=H.bf(a)
return u==null?null:u[b]},
j2:function(a){return H.bd(a,null)},
bd:function(a,b){var u,t
H.r(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bE(a[0].name)+H.jq(a,1,b)
if(typeof a=="function")return H.bE(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.k(b,t)
return H.h(b[t])}if('func' in a)return H.lU(a,b)
if('futureOr' in a)return"FutureOr<"+H.bd("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lU:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.e]
H.r(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.k(b,m)
o=C.d.R(o,b[m])
l=t[p]
if(l!=null&&l!==P.E)o+=" extends "+H.bd(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bd(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bd(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bd(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.m6(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.A(u[g])
i=i+h+H.bd(d[c],b)+(" "+H.h(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jq:function(a,b,c){var u,t,s,r,q,p
H.r(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.bu("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bd(p,c)}return"<"+u.i(0)+">"},
bD:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ej:function(a,b,c,d){var u,t
H.A(b)
H.jy(c)
H.A(d)
if(a==null)return!1
u=H.bf(a)
t=J.Q(a)
if(t[b]==null)return!1
return H.ky(H.bD(t[d],u),null,c,null)},
r:function(a,b,c,d){H.A(b)
H.jy(c)
H.A(d)
if(a==null)return a
if(H.ej(a,b,c,d))return a
throw H.f(H.an(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bE(b.substring(2))+H.jq(c,0,null),v.mangledGlobalNames)))},
ky:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ai(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ai(a[t],b,c[t],d))return!1
return!0},
n7:function(a,b,c){return a.apply(b,H.bD(J.Q(b)["$a"+H.h(c)],H.bf(b)))},
kD:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="E"||a.name==="C"||a===-1||a===-2||H.kD(u)}return!1},
js:function(a,b){var u,t
if(a==null)return b==null||b.name==="E"||b.name==="C"||b===-1||b===-2||H.kD(b)
if(b==null||b===-1||b.name==="E"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.js(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ek(a,b)}u=J.Q(a).constructor
t=H.bf(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ai(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.js(a,b))throw H.f(H.an(a,H.j2(b)))
return a},
ai:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="E"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="E"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ai(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="C")return!0
if('func' in c)return H.kr(a,b,c,d)
if('func' in a)return c.name==="b3"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ai("type" in a?a.type:null,b,s,d)
else if(H.ai(a,b,s,d))return!0
else{if(!('$i'+"bW" in t.prototype))return!1
r=t.prototype["$a"+"bW"]
q=H.bD(r,u?a.slice(1):null)
return H.ai(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.ky(H.bD(m,u),b,p,d)},
kr:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ai(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ai(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ai(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ai(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ml(h,b,g,d)},
ml:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ai(c[r],d,a[r],b))return!1}return!0},
n8:function(a,b,c){Object.defineProperty(a,H.A(b),{value:c,enumerable:false,writable:true,configurable:true})},
mj:function(a){var u,t,s,r,q,p
u=H.A($.kC.$1(a))
t=$.iT[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j_[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.A($.kx.$2(a,u))
if(u!=null){t=$.iT[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j_[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.j1(s)
$.iT[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.j_[u]=s
return s}if(q==="-"){p=H.j1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.kF(a,s)
if(q==="*")throw H.f(P.kf(u))
if(v.leafTags[u]===true){p=H.j1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.kF(a,s)},
kF:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jz(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j1:function(a){return J.jz(a,!1,null,!!a.$iz)},
mk:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j1(u)
else return J.jz(u,c,null,null)},
me:function(){if(!0===$.jx)return
$.jx=!0
H.mf()},
mf:function(){var u,t,s,r,q,p,o,n
$.iT=Object.create(null)
$.j_=Object.create(null)
H.md()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kH.$1(q)
if(p!=null){o=H.mk(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
md:function(){var u,t,s,r,q,p,o
u=C.L()
u=H.bz(C.I,H.bz(C.N,H.bz(C.t,H.bz(C.t,H.bz(C.M,H.bz(C.J,H.bz(C.K(C.u),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.kC=new H.iX(q)
$.kx=new H.iY(p)
$.kH=new H.iZ(o)},
bz:function(a,b){return a(b)||b},
ln:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.f0("Illegal RegExp pattern ("+String(r)+")",a,null))},
mr:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jB:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fS:function fS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hx:function hx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fJ:function fJ(a,b){this.a=a
this.b=b},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function hO(a){this.a=a},
j5:function j5(a){this.a=a},
dY:function dY(a){this.a=a
this.b=null},
bO:function bO(){},
hl:function hl(){},
hc:function hc(){},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hz:function hz(a){this.a=a},
ev:function ev(a){this.a=a},
fZ:function fZ(a){this.a=a},
ax:function ax(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fk:function fk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cV:function cV(a,b){this.a=a
this.$ti=b},
fl:function fl(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
ff:function ff(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jm:function(a){return a},
bc:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.ct(b,a))},
lT:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.m5(a,b,c))
return b},
c1:function c1(){},
cZ:function cZ(){},
c0:function c0(){},
d_:function d_(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
d0:function d0(){},
fF:function fF(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
cm:function cm(){},
m6:function(a){return J.jS(a?Object.keys(a):[],null)},
mn:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iW:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jx==null){H.me()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.f(P.kf("Return interceptor for "+H.h(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jD()]
if(q!=null)return q
q=H.mj(a)
if(q!=null)return q
if(typeof a=="function")return C.O
t=Object.getPrototypeOf(a)
if(t==null)return C.w
if(t===Object.prototype)return C.w
if(typeof r=="function"){Object.defineProperty(r,$.jD(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
lm:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.j8(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ad(a,0,4294967295,"length",null))
return J.jS(new Array(a),b)},
jS:function(a,b){return J.fb(H.c(a,[b]))},
fb:function(a){H.jy(a)
a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cS.prototype
return J.fd.prototype}if(typeof a=="string")return J.b4.prototype
if(a==null)return J.fe.prototype
if(typeof a=="boolean")return J.fc.prototype
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.E)return a
return J.iW(a)},
jv:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.E)return a
return J.iW(a)},
iV:function(a){if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.E)return a
return J.iW(a)},
m8:function(a){if(typeof a=="number")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.ba.prototype
return a},
m9:function(a){if(typeof a=="number")return J.bn.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.ba.prototype
return a},
jw:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.ba.prototype
return a},
a9:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.E)return a
return J.iW(a)},
S:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).n(a,b)},
jG:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m9(a).K(a,b)},
l_:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.m8(a).u(a,b)},
l0:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mh(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jv(a).m(a,b)},
el:function(a,b){return J.a9(a).eg(a,b)},
l1:function(a,b,c,d){return J.a9(a).eF(a,b,c,d)},
jH:function(a,b){return J.a9(a).p(a,b)},
j6:function(a,b){return J.iV(a).v(a,b)},
l2:function(a,b){return J.iV(a).F(a,b)},
l3:function(a){return J.a9(a).geK(a)},
cz:function(a){return J.Q(a).gD(a)},
bh:function(a){return J.iV(a).gH(a)},
bi:function(a){return J.jv(a).gk(a)},
l4:function(a){return J.a9(a).gfQ(a)},
j7:function(a,b){return J.a9(a).al(a,b)},
jI:function(a){return J.iV(a).fH(a)},
l5:function(a,b,c){return J.jw(a).av(a,b,c)},
l6:function(a){return J.jw(a).fU(a)},
ao:function(a){return J.Q(a).i(a)},
a:function a(){},
fc:function fc(){},
fe:function fe(){},
cT:function cT(){},
fN:function fN(){},
ba:function ba(){},
b5:function b5(){},
aw:function aw(a){this.$ti=a},
jc:function jc(a){this.$ti=a},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bn:function bn(){},
cS:function cS(){},
fd:function fd(){},
b4:function b4(){}},P={
lJ:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.m0()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bA(new P.i7(u),1)).observe(t,{childList:true})
return new P.i6(u,t,s)}else if(self.setImmediate!=null)return P.m1()
return P.m2()},
lK:function(a){self.scheduleImmediate(H.bA(new P.i8(H.j(a,{func:1,ret:-1})),0))},
lL:function(a){self.setImmediate(H.bA(new P.i9(H.j(a,{func:1,ret:-1})),0))},
lM:function(a){P.jh(C.l,H.j(a,{func:1,ret:-1}))},
jh:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.h.ag(a.a,1000)
return P.lR(u<0?0:u,b)},
kd:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.aF]})
u=C.h.ag(a.a,1000)
return P.lS(u<0?0:u,b)},
lR:function(a,b){var u=new P.e3(!0)
u.d5(a,b)
return u},
lS:function(a,b){var u=new P.e3(!1)
u.d6(a,b)
return u},
lN:function(a,b){var u,t,s
b.a=1
try{a.ck(new P.ij(b),new P.ik(b),null)}catch(s){u=H.aa(s)
t=H.bB(s)
P.mp(new P.il(b,u,t))}},
km:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.n(a.c,"$iah")
if(u>=4){t=b.b_()
b.a=a.a
b.c=a.c
P.ci(b,t)}else{t=H.n(b.c,"$iaK")
b.a=2
b.c=a
a.bJ(t)}},
ci:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.n(t.c,"$iZ")
t=t.b
p=q.a
o=q.b
t.toString
P.iO(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.ci(u.a,b)}t=u.a
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
if(k){H.n(m,"$iZ")
t=t.b
p=m.a
o=m.b
t.toString
P.iO(null,null,t,p,o)
return}j=$.N
if(j!=l)$.N=l
else j=null
t=b.c
if(t===8)new P.iq(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.ip(s,b,m).$0()}else if((t&2)!==0)new P.io(u,s,b).$0()
if(j!=null)$.N=j
t=s.b
if(!!J.Q(t).$ibW){if(t.a>=4){i=H.n(o.c,"$iaK")
o.c=null
b=o.az(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.km(t,o)
return}}h=b.b
i=H.n(h.c,"$iaK")
h.c=null
b=h.az(i)
t=s.a
p=s.b
if(!t){H.B(p,H.u(h,0))
h.a=4
h.c=p}else{H.n(p,"$iZ")
h.a=8
h.c=p}u.a=h
t=h}},
lX:function(a,b){if(H.ek(a,{func:1,args:[P.E,P.a6]}))return H.j(a,{func:1,ret:null,args:[P.E,P.a6]})
if(H.ek(a,{func:1,args:[P.E]}))return H.j(a,{func:1,ret:null,args:[P.E]})
throw H.f(P.j8(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lW:function(){var u,t
for(;u=$.by,u!=null;){$.cs=null
t=u.b
$.by=t
if(t==null)$.cr=null
u.a.$0()}},
m_:function(){$.jo=!0
try{P.lW()}finally{$.cs=null
$.jo=!1
if($.by!=null)$.jE().$1(P.kz())}},
ku:function(a){var u=new P.dq(H.j(a,{func:1,ret:-1}))
if($.by==null){$.cr=u
$.by=u
if(!$.jo)$.jE().$1(P.kz())}else{$.cr.b=u
$.cr=u}},
lZ:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.by
if(u==null){P.ku(a)
$.cs=$.cr
return}t=new P.dq(a)
s=$.cs
if(s==null){t.b=u
$.cs=t
$.by=t}else{t.b=s.b
s.b=t
$.cs=t
if(t.b==null)$.cr=t}},
mp:function(a){var u,t
u={func:1,ret:-1}
H.j(a,u)
t=$.N
if(C.f===t){P.iQ(null,null,C.f,a)
return}t.toString
P.iQ(null,null,t,H.j(t.b3(a),u))},
kc:function(a,b){var u,t
u={func:1,ret:-1}
H.j(b,u)
t=$.N
if(t===C.f){t.toString
return P.jh(a,b)}return P.jh(a,H.j(t.b3(b),u))},
lH:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aF]}
H.j(b,u)
t=$.N
if(t===C.f){t.toString
return P.kd(a,b)}s=t.bS(b,P.aF)
$.N.toString
return P.kd(a,H.j(s,u))},
iO:function(a,b,c,d,e){var u={}
u.a=d
P.lZ(new P.iP(u,e))},
ks:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.N
if(t===c)return d.$0()
$.N=c
u=t
try{t=d.$0()
return t}finally{$.N=u}},
kt:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.N
if(t===c)return d.$1(e)
$.N=c
u=t
try{t=d.$1(e)
return t}finally{$.N=u}},
lY:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.N
if(t===c)return d.$2(e,f)
$.N=c
u=t
try{t=d.$2(e,f)
return t}finally{$.N=u}},
iQ:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.b3(d):c.eL(d,-1)
P.ku(d)},
i7:function i7(a){this.a=a},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
e3:function e3(a){this.a=a
this.b=null
this.c=0},
iK:function iK(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aK:function aK(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ah:function ah(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
ii:function ii(a,b){this.a=a
this.b=b},
im:function im(a,b){this.a=a
this.b=b},
ij:function ij(a){this.a=a},
ik:function ik(a){this.a=a},
il:function il(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ir:function ir(a){this.a=a},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
dq:function dq(a){this.a=a
this.b=null},
hf:function hf(){},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
c8:function c8(){},
hg:function hg(){},
aF:function aF(){},
Z:function Z(a,b){this.a=a
this.b=b},
iN:function iN(){},
iP:function iP(a,b){this.a=a
this.b=b},
iw:function iw(){},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
ix:function ix(a,b){this.a=a
this.b=b},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function(a,b){return new H.ax([a,b])},
lo:function(a){return H.m7(a,new H.ax([null,null]))},
cW:function(a,b,c,d){return new P.iu([d])},
jl:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lQ:function(a,b,c){var u=new P.dF(a,b,[c])
u.c=a.e
return u},
lk:function(a,b,c){var u,t
if(P.jp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.e])
t=$.cy()
C.a.h(t,a)
try{P.lV(a,u)}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}t=P.ka(b,H.mi(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
jb:function(a,b,c){var u,t,s
if(P.jp(a))return b+"..."+c
u=new P.bu(b)
t=$.cy()
C.a.h(t,a)
try{s=u
s.a=P.ka(s.a,a,", ")}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jp:function(a){var u,t
for(u=0;t=$.cy(),u<t.length;++u)if(a===t[u])return!0
return!1},
lV:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.r(b,"$ib",[P.e],"$ab")
u=a.gH(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.q())return
r=H.h(u.gB(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.q()){if(s<=5)return
if(0>=b.length)return H.k(b,-1)
q=b.pop()
if(0>=b.length)return H.k(b,-1)
p=b.pop()}else{o=u.gB(u);++s
if(!u.q()){if(s<=4){C.a.h(b,H.h(o))
return}q=H.h(o)
if(0>=b.length)return H.k(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gB(u);++s
for(;u.q();o=n,n=m){m=u.gB(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.h(o)
q=H.h(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
jU:function(a,b){var u,t,s
u=P.cW(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.H)(a),++s)u.h(0,H.B(a[s],b))
return u},
jW:function(a){var u,t
u={}
if(P.jp(a))return"{...}"
t=new P.bu("")
try{C.a.h($.cy(),a)
t.a+="{"
u.a=!0
J.l2(a,new P.fp(u,t))
t.a+="}"}finally{u=$.cy()
if(0>=u.length)return H.k(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
iu:function iu(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bx:function bx(a){this.a=a
this.c=this.b=null},
dF:function dF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fm:function fm(){},
t:function t(){},
fo:function fo(){},
fp:function fp(a,b){this.a=a
this.b=b},
V:function V(){},
iB:function iB(){},
dG:function dG(){},
bP:function bP(){},
bQ:function bQ(){},
eO:function eO(){},
f6:function f6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f5:function f5(a){this.a=a},
hR:function hR(a){this.a=a},
hS:function hS(){},
iL:function iL(a){this.b=this.a=0
this.c=a},
li:function(a){if(a instanceof H.bO)return a.i(0)
return"Instance of '"+H.br(a)+"'"},
lp:function(a,b,c,d){var u,t
H.B(b,d)
u=J.lm(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.J(u,t,b)
return H.r(u,"$ib",[d],"$ab")},
jV:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=J.bh(a);s.q();)C.a.h(t,H.B(s.gB(s),c))
if(b)return t
return H.r(J.fb(t),"$ib",u,"$ab")},
jg:function(a,b,c){var u,t
u=P.y
H.r(a,"$ii",[u],"$ai")
if(a.constructor===Array){H.r(a,"$iaw",[u],"$aaw")
t=a.length
c=P.k6(b,c,t,null,null,null)
return H.k5(b>0||c<t?C.a.cQ(a,b,c):a)}return P.lF(a,b,c)},
lF:function(a,b,c){var u,t,s
H.r(a,"$ii",[P.y],"$ai")
u=J.bh(a)
for(t=0;t<b;++t)if(!u.q())throw H.f(P.ad(b,0,t,null,null))
s=[]
for(;u.q();)s.push(u.gB(u))
return H.k5(s)},
lA:function(a,b,c){return new H.ff(a,H.ln(a,!1,!0,!1))},
ka:function(a,b,c){var u=J.bh(b)
if(!u.q())return a
if(c.length===0){do a+=H.h(u.gB(u))
while(u.q())}else{a+=H.h(u.gB(u))
for(;u.q();)a=a+c+H.h(u.gB(u))}return a},
kq:function(a,b,c,d){var u,t,s,r,q,p
H.r(a,"$ib",[P.y],"$ab")
if(c===C.q){u=$.kZ().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.eT(H.B(b,H.cu(c,"bP",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.k(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jf(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lc:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ld:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cJ:function(a){if(a>=10)return""+a
return"0"+a},
jP:function(a,b,c,d,e,f){return new P.aM(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eQ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ao(a)
if(typeof a==="string")return JSON.stringify(a)
return P.li(a)},
j8:function(a,b,c){return new P.ap(!0,a,b,c)},
d7:function(a,b,c){return new P.bs(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.bs(b,c,!0,a,d,"Invalid value")},
k6:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.ad(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.ad(b,a,c,"end",f))
return b}return c},
L:function(a,b,c,d,e){var u=H.Y(e==null?J.bi(b):e)
return new P.f7(b,u,!0,a,c,"Index out of range")},
ae:function(a){return new P.hP(a)},
kf:function(a){return new P.hN(a)},
k9:function(a){return new P.c7(a)},
b0:function(a){return new P.ex(a)},
a2:function(a){return new P.dy(a)},
jA:function(a){H.mn(a)},
K:function K(){},
b1:function b1(a,b){this.a=a
this.b=b},
w:function w(){},
aM:function aM(a){this.a=a},
eK:function eK(){},
eL:function eL(){},
b2:function b2(){},
d2:function d2(){},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f7:function f7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hP:function hP(a){this.a=a},
hN:function hN(a){this.a=a},
c7:function c7(a){this.a=a},
ex:function ex(a){this.a=a},
fM:function fM(){},
dc:function dc(){},
eC:function eC(a){this.a=a},
dy:function dy(a){this.a=a},
f0:function f0(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(){},
y:function y(){},
i:function i(){},
av:function av(){},
b:function b(){},
F:function F(){},
C:function C(){},
T:function T(){},
E:function E(){},
a6:function a6(){},
e:function e(){},
bu:function bu(a){this.a=a},
aT:function(a){var u,t,s,r,q
if(a==null)return
u=P.jT(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r){q=H.A(t[r])
u.J(0,q,a[q])}return u},
m3:function(a,b){var u={}
a.F(0,new P.iR(u))
return u},
iR:function iR(a){this.a=a},
eX:function eX(a,b){this.a=a
this.b=b},
eY:function eY(){},
eZ:function eZ(){},
iv:function iv(){},
a5:function a5(){},
aP:function aP(){},
fi:function fi(){},
aR:function aR(){},
fK:function fK(){},
fQ:function fQ(){},
c4:function c4(){},
hj:function hj(){},
m:function m(){},
aS:function aS(){},
hw:function hw(){},
dD:function dD(){},
dE:function dE(){},
dO:function dO(){},
dP:function dP(){},
e_:function e_(){},
e0:function e0(){},
e6:function e6(){},
e7:function e7(){},
ep:function ep(){},
eq:function eq(){},
er:function er(a){this.a=a},
es:function es(){},
bj:function bj(){},
fL:function fL(){},
dr:function dr(){},
cD:function cD(){},
cP:function cP(){},
d5:function d5(){},
bt:function bt(){},
da:function da(){},
dj:function dj(){},
hb:function hb(){},
dW:function dW(){},
dX:function dX(){}},W={
jJ:function(a){var u=document.createElement("a")
return u},
jM:function(a,b){var u=document.createElement("canvas")
return u},
lg:function(a,b,c){var u,t
u=document.body
t=(u&&C.j).S(u,a,b,c)
t.toString
u=W.x
u=new H.cf(new W.a_(t),H.j(new W.eN(),{func:1,ret:P.K,args:[u]}),[u])
return H.n(u.ga8(u),"$iJ")},
lh:function(a){H.n(a,"$id")
return"wheel"},
bU:function(a){var u,t,s
u="element tag unavailable"
try{t=J.l4(a)
if(typeof t==="string")u=a.tagName}catch(s){H.aa(s)}return u},
it:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ko:function(a,b,c,d){var u,t
u=W.it(W.it(W.it(W.it(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
X:function(a,b,c,d,e){var u=W.kw(new W.ih(c),W.l)
if(u!=null&&!0)J.l1(a,b,u,!1)
return new W.ig(a,b,u,!1,[e])},
kn:function(a){var u,t
u=W.jJ(null)
t=window.location
u=new W.bb(new W.iA(u,t))
u.d1(a)
return u},
lO:function(a,b,c,d){H.n(a,"$iJ")
H.A(b)
H.A(c)
H.n(d,"$ibb")
return!0},
lP:function(a,b,c,d){var u,t,s
H.n(a,"$iJ")
H.A(b)
H.A(c)
u=H.n(d,"$ibb").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kp:function(){var u,t,s,r,q
u=P.e
t=P.jU(C.m,u)
s=H.u(C.m,0)
r=H.j(new W.iI(),{func:1,ret:u,args:[s]})
q=H.c(["TEMPLATE"],[u])
t=new W.iH(t,P.cW(null,null,null,u),P.cW(null,null,null,u),P.cW(null,null,null,u),null)
t.d4(null,new H.fs(C.m,r,[s,u]),q,null)
return t},
kw:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.N
if(u===C.f)return a
return u.bS(a,b)},
p:function p(){},
em:function em(){},
cA:function cA(){},
en:function en(){},
bL:function bL(){},
cC:function cC(){},
aV:function aV(){},
bk:function bk(){},
aW:function aW(){},
bR:function bR(){},
ey:function ey(){},
I:function I(){},
bS:function bS(){},
ez:function ez(){},
ar:function ar(){},
as:function as(){},
eA:function eA(){},
eB:function eB(){},
eE:function eE(){},
ab:function ab(){},
bT:function bT(){},
eH:function eH(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
eI:function eI(){},
eJ:function eJ(){},
ib:function ib(a,b){this.a=a
this.b=b},
J:function J(){},
eN:function eN(){},
l:function l(){},
d:function d(){},
at:function at(){},
eV:function eV(){},
eW:function eW(){},
f_:function f_(){},
au:function au(){},
cQ:function cQ(){},
f4:function f4(){},
bm:function bm(){},
cR:function cR(){},
ay:function ay(){},
cX:function cX(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(a){this.a=a},
fw:function fw(){},
fx:function fx(a){this.a=a},
az:function az(){},
fy:function fy(){},
W:function W(){},
a_:function a_(a){this.a=a},
x:function x(){},
c2:function c2(){},
aA:function aA(){},
fP:function fP(){},
d6:function d6(){},
fX:function fX(){},
fY:function fY(a){this.a=a},
h_:function h_(){},
aB:function aB(){},
h9:function h9(){},
aC:function aC(){},
ha:function ha(){},
aD:function aD(){},
hd:function hd(){},
he:function he(a){this.a=a},
ak:function ak(){},
bv:function bv(){},
dd:function dd(){},
de:function de(){},
hk:function hk(){},
c9:function c9(){},
aE:function aE(){},
al:function al(){},
hm:function hm(){},
hn:function hn(){},
hq:function hq(){},
aG:function aG(){},
am:function am(){},
hu:function hu(){},
hv:function hv(){},
b9:function b9(){},
hQ:function hQ(){},
i3:function i3(){},
aJ:function aJ(){},
cg:function cg(){},
ch:function ch(){},
ic:function ic(){},
dt:function dt(){},
is:function is(){},
dL:function dL(){},
iE:function iE(){},
iF:function iF(){},
ia:function ia(){},
id:function id(a){this.a=a},
ie:function ie(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jk:function jk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ig:function ig(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ih:function ih(a){this.a=a},
bb:function bb(a){this.a=a},
v:function v(){},
d1:function d1(a){this.a=a},
fH:function fH(a){this.a=a},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(){},
iC:function iC(){},
iD:function iD(){},
iH:function iH(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iI:function iI(){},
iG:function iG(){},
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
a8:function a8(){},
iA:function iA(a,b){this.a=a
this.b=b},
e8:function e8(a){this.a=a},
iM:function iM(a){this.a=a},
ds:function ds(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dM:function dM(){},
dN:function dN(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
cn:function cn(){},
co:function co(){},
dU:function dU(){},
dV:function dV(){},
dZ:function dZ(){},
e1:function e1(){},
e2:function e2(){},
cp:function cp(){},
cq:function cq(){},
e4:function e4(){},
e5:function e5(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){}},O={
jO:function(a){var u=new O.aY([a])
u.sdB(H.c([],[a]))
u.sbH(null)
u.sbG(null)
u.sbI(null)
return u},
aY:function aY(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bZ:function bZ(){this.b=this.a=null},
eF:function eF(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
bw:function bw(){}},E={
lC:function(a,b){var u=new E.fT(a,b)
u.cX(a,b)
return u},
lG:function(a,b,c,d,e){var u,t,s,r
u=J.Q(a)
if(!!u.$ibk)return E.kb(a,!0,!0,!0,!1)
t=W.jM(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gbU(a).h(0,t)
r=E.kb(t,!0,!0,!0,!1)
r.a=a
return r},
kb:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dg()
t=H.n(C.C.cB(a,"webgl2",P.lo(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibt")
if(t==null)H.a0(P.a2("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.lC(t,a)
s=new T.ho(t)
s.b=H.Y((t&&C.b).bf(t,3379))
s.c=H.Y(C.b.bf(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.dm(a)
r=new X.fh()
r.c=new X.aQ(!1,!1,!1)
r.sed(P.cW(null,null,null,P.y))
s.b=r
r=new X.fz(s)
r.f=0
r.r=V.d4()
r.x=V.d4()
r.Q=1
r.ch=1
s.c=r
r=new X.fn(s)
r.r=0
r.x=V.d4()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.ht(s)
r.e=0
r.f=V.d4()
r.r=V.d4()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sdk(H.c([],[[P.c8,P.E]]))
r=s.z
q=document
p=W.W
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.X(q,"contextmenu",H.j(s.gdK(),o),!1,p))
r=s.z
n=W.l
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.X(a,"focus",H.j(s.gdQ(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.X(a,"blur",H.j(s.gdE(),m),!1,n))
r=s.z
l=W.ay
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.X(q,"keyup",H.j(s.gdU(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.X(q,"keydown",H.j(s.gdS(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.X(a,"mousedown",H.j(s.gdX(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.X(a,"mouseup",H.j(s.ge0(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.X(a,"mousemove",H.j(s.gdZ(),o),!1,p))
l=s.z
k=W.aJ;(l&&C.a).h(l,W.X(a,H.A(W.lh(a)),H.j(s.ge2(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.X(q,"mousemove",H.j(s.gdM(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.X(q,"mouseup",H.j(s.gdO(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.X(q,"pointerlockchange",H.j(s.ge4(),m),!1,n))
n=s.z
m=W.am
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.X(a,"touchstart",H.j(s.geb(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.X(a,"touchend",H.j(s.ge7(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.X(a,"touchmove",H.j(s.ge9(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.b1(Date.now(),!1)
u.cy=0
u.bK()
return u},
et:function et(){},
a1:function a1(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fT:function fT(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
fW:function fW(a){this.a=a},
dg:function dg(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(a){this.a=a}},Z={
lI:function(a,b,c){var u
H.r(c,"$ib",[P.y],"$ab")
u=a.createBuffer()
C.b.a0(a,b,u)
C.b.bT(a,b,new Int16Array(H.jm(c)),35044)
C.b.a0(a,b,null)
return new Z.dp(b,u)},
ag:function(a){return new Z.dn(a)},
dp:function dp(a,b){this.a=a
this.b=b},
cE:function cE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
i4:function i4(a){this.a=a},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bX:function bX(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a){this.a=a}},D={
aO:function(){var u=new D.bV()
u.sad(null)
u.san(null)
u.c=null
u.d=0
return u},
ew:function ew(){},
bV:function bV(){var _=this
_.d=_.c=_.b=_.a=null},
eR:function eR(a){this.a=a},
eS:function eS(a){this.a=a},
D:function D(a){this.a=a
this.b=null},
f8:function f8(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
f9:function f9(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
P:function P(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e}},X={cG:function cG(a,b){this.a=a
this.b=b},cU:function cU(a,b){this.a=a
this.b=b},fh:function fh(){var _=this
_.d=_.c=_.b=_.a=null},fn:function fn(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aQ:function aQ(a,b,c){this.a=a
this.b=b
this.c=c},fz:function fz(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ht:function ht(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dm:function dm(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lj:function(a,b,c,d,e,f,g){var u,t
u=new X.f1()
t=new V.b_(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.k7
if(t==null){t=V.lB(0,0,1,1)
$.k7=t}u.r=t
return u},
cH:function cH(){},
f1:function f1(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d3:function d3(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){}},V={
jC:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cI(a-b,u)
return(a<0?a+u:a)+b},
G:function(a,b,c){if(a==null)return C.d.a6("null",c)
return C.d.a6(C.c.cm(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
iU:function(a,b,c){var u,t,s,r,q
H.r(a,"$ib",[P.w],"$ab")
u=H.c([],[P.e])
for(t=0,s=0;s<4;++s){r=V.G(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(u,r)}for(q=u.length-1;q>=0;--q){if(q>=u.length)return H.k(u,q)
C.a.J(u,q,C.d.a6(u[q],t))}return u},
jY:function(){var u=$.jX
if(u==null){u=V.b8(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.jX=u}return u},
b8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
d4:function(){var u=$.k2
if(u==null){u=new V.a4(0,0)
$.k2=u}return u},
lB:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d8(a,b,c,d)},
hT:function(){var u=$.kl
if(u==null){u=new V.R(0,0,0)
$.kl=u}return u},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eP:function eP(a){this.a=a},
b7:function b7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ac:function ac(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aI:function aI(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
M:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.a2("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.d.ab(a,0)
t=C.d.ab(b,0)
s=new V.fR()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
q:function(a){var u=new V.h0()
u.cY(a)
return u},
hs:function(){var u,t
u=new V.hr()
t=P.e
u.sez(new H.ax([t,V.c6]))
u.seB(new H.ax([t,V.ca]))
u.c=null
return u},
aL:function aL(){},
a7:function a7(){},
cY:function cY(){},
a3:function a3(){this.a=null},
fR:function fR(){this.b=this.a=null},
h0:function h0(){this.a=null},
c6:function c6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dh:function dh(a,b,c){this.a=a
this.b=b
this.c=c},
ca:function ca(a,b){this.a=a
this.b=b
this.c=null},
hr:function hr(){this.c=this.b=this.a=null},
cb:function cb(a){this.b=a
this.a=this.c=null},
mq:function(a){P.lH(C.E,new V.j3(a))},
lE:function(a,b){var u=new V.h4()
u.d_(a,!0)
return u},
aX:function aX(){},
j3:function j3(a){this.a=a},
eD:function eD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f2:function f2(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f3:function f3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fO:function fO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h4:function h4(){this.b=this.a=null},
h6:function h6(a){this.a=a},
h5:function h5(a){this.a=a},
h7:function h7(a){this.a=a}},U={cI:function cI(){this.b=this.a=null},c_:function c_(){},d9:function d9(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cN:function cN(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
ji:function(a,b,c,d,e){var u=new A.hC(a,b,c,e)
u.f=d
u.seD(P.lp(d,0,!1,P.y))
return u},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function eo(a){this.a=a},
eG:function eG(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
c5:function c5(){},
di:function di(){},
hI:function hI(a){this.a=a},
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
hF:function hF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hH:function hH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hC:function hC(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hG:function hG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hL:function hL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hM:function hM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
mu:function(a,b,c,d){return F.m4(c,a,d,b,new F.j4())},
m4:function(a,b,c,d,e){var u,t
u=F.ms(a,b,new F.iS(H.j(e,{func:1,ret:V.ac,args:[P.w]}),d,b,c),null)
if(u==null)return
t=u.e
if(t!=null)++t.d
u.d.b5()
u.a.b5()
t=u.e
if(t!=null)t.aG(0)
u.fn(new F.hZ(),new F.fI())
return u},
ms:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,{func:1,ret:-1,args:[F.af,P.w,P.w]})
if(a<1)return
if(b<1)return
u=new F.db()
t=new F.hU(u)
t.b=!1
s=[F.af]
t.seE(H.c([],s))
u.a=t
t=new F.h3(u)
t.saY(H.c([],[F.bp]))
u.b=t
t=new F.h2(u)
t.sdw(H.c([],[F.b6]))
u.c=t
t=new F.h1(u)
t.sdl(H.c([],[F.U]))
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
t.toString
o=F.jj(null,null,new V.b_(s,0,0,1),null,null,new V.a4(p,1),null,null,0)
t.h(0,o)
c.$3(o,p,0)
C.a.h(r,o.bX(d))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
k.toString
o=F.jj(null,null,new V.b_(j,i,h,1),null,null,new V.a4(p,m),null,null,0)
k.h(0,o)
c.$3(o,p,n)
C.a.h(r,o.bX(d))}}u.d.eG(a+1,b+1,r)
return u},
eT:function(a,b,c){var u,t
u=new F.U()
t=a.a
if(t==null)H.a0(P.a2("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.a0(P.a2("May not create a face with vertices attached to different shapes."))
u.eq(a)
u.er(b)
u.es(c)
C.a.h(u.a.a.d.b,u)
u.a.a.V()
return u},
jj:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.af()
t=new F.i1(u)
t.saY(H.c([],[F.bp]))
u.b=t
t=new F.hY(u)
s=[F.b6]
t.sdz(H.c([],s))
t.sdA(H.c([],s))
u.c=t
t=new F.hV(u)
s=[F.U]
t.sdm(H.c([],s))
t.sdn(H.c([],s))
t.sdq(H.c([],s))
u.d=t
h=$.kV()
u.e=0
t=$.aU()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bH().a)!==0?e:null
u.x=(s&$.bG().a)!==0?b:null
u.y=(s&$.bI().a)!==0?f:null
u.z=(s&$.bJ().a)!==0?g:null
u.Q=(s&$.kW().a)!==0?c:null
u.ch=(s&$.bK().a)!==0?i:0
u.cx=(s&$.bF().a)!==0?a:null
return u},
j4:function j4(){},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eU:function eU(){},
h8:function h8(){},
b6:function b6(){},
fj:function fj(){},
hA:function hA(){},
bp:function bp(){},
db:function db(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h1:function h1(a){this.a=a
this.b=null},
h2:function h2(a){this.a=a
this.b=null},
h3:function h3(a){this.a=a
this.b=null},
af:function af(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(a){this.a=a},
hU:function hU(a){this.a=a
this.c=this.b=null},
hV:function hV(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(a){this.a=a
this.c=this.b=null},
i_:function i_(){},
hZ:function hZ(){},
i0:function i0(){},
fI:function fI(){},
i1:function i1(a){this.a=a
this.b=null}},T={ho:function ho(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}},Y={
kE:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=V.lE("Test 001",!0)
t=W.jM(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.e.p(u.a,t)
s=[P.e]
u.bP(H.c(["Test of the Depth shader, a basic fog shader with a single auto-rotating shape."],s))
u.bP(H.c(["\xab[Back to Tests|../]"],s))
r=new E.a1()
r.a=""
r.b=!0
s=E.a1
r.sdd(0,O.jO(s))
r.y.bh(r.gfo(),r.gfs())
r.z=null
r.Q=null
r.ch=null
r.cx=null
r.cy=null
r.db=null
r.dx=null
r.dy=null
r.fr=null
r.fx=null
r.sbj(0,null)
r.sas(null)
r.sbj(0,F.mu(30,1,15,0.5))
q=new U.d9()
q.a=0
q.b=0
q.c=0
q.d=0
q.e=0
q.f=0
q.r=0
q.sct(0)
q.scb(0,0)
q.scg(0)
p=q.d
if(!(Math.abs(p-0.1)<$.O().a)){q.d=0.1
p=new D.P("deltaYaw",p,0.1,q,[P.w])
p.b=!0
q.ae(p)}p=q.e
if(!(Math.abs(p-0.21)<$.O().a)){q.e=0.21
p=new D.P("deltaPitch",p,0.21,q,[P.w])
p.b=!0
q.ae(p)}p=q.f
if(!(Math.abs(p-0.32)<$.O().a)){q.f=0.32
p=new D.P("deltaRoll",p,0.32,q,[P.w])
p.b=!0
q.ae(p)}r.sas(q)
o=new O.eF()
o.d=1
o.e=10
n=new V.aZ(1,1,1)
o.b=n
q=[V.aZ]
p=new D.P("objectColor",null,n,o,q)
p.b=!0
o.ax(p)
n=new V.aZ(0,0,0)
if(!J.S(o.c,n)){m=o.c
o.c=n
q=new D.P("fogColor",m,n,o,q)
q.b=!0
o.ax(q)}q=o.d
if(!(Math.abs(q-3)<$.O().a)){o.d=3
q=new D.P("fogStart",q,3,o,[P.w])
q.b=!0
o.ax(q)}q=o.e
if(!(Math.abs(q-6)<$.O().a)){o.e=6
q=new D.P("fogStop",q,6,o,[P.w])
q.b=!0
o.ax(q)}l=new M.cN()
l.sd2(0,O.jO(s))
l.d.bh(l.gdG(),l.gdI())
l.e=null
l.f=null
l.r=null
l.x=null
k=X.lj(!0,!0,!1,null,2000,null,0)
j=new X.d3()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.sas(null)
s=j.c
if(!(Math.abs(s-1.0471975511965976)<$.O().a)){j.c=1.0471975511965976
s=new D.P("fov",s,1.0471975511965976,j,[P.w])
s.b=!0
j.aa(s)}s=j.d
if(!(Math.abs(s-0.1)<$.O().a)){j.d=0.1
s=new D.P("near",s,0.1,j,[P.w])
s.b=!0
j.aa(s)}s=j.e
if(!(Math.abs(s-2000)<$.O().a)){j.e=2000
s=new D.P("far",s,2000,j,[P.w])
s.b=!0
j.aa(s)}s=l.a
if(s!==j){if(s!=null)s.gA().I(0,l.gY())
m=l.a
l.a=j
j.gA().h(0,l.gY())
s=new D.P("camera",m,l.a,l,[X.cH])
s.b=!0
l.a2(s)}s=l.b
if(s!==k){if(s!=null)s.gA().I(0,l.gY())
m=l.b
l.b=k
k.gA().h(0,l.gY())
s=new D.P("target",m,l.b,l,[X.df])
s.b=!0
l.a2(s)}l.scj(null)
s=l.d
q=H.u(s,0)
H.B(r,q)
q=[q]
if(s.e6(H.c([r],q))){p=s.a
i=p.length
C.a.h(p,r)
s.dD(i,H.c([r],q))}l.scj(o)
s=l.a
h=V.b8(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
q=new U.cI()
q.a=h
s.sas(q)
g=C.r.cC(document,"testCanvas")
if(g==null)H.a0(P.a2("Failed to find an element with the identifier, testCanvas."))
f=E.lG(g,!0,!0,!0,!1)
s=f.d
if(s!==l){if(s!=null)s.gA().I(0,f.gbm())
f.d=l
l.gA().h(0,f.gbm())
f.bn()}s=f.z
if(s==null){s=D.aO()
f.z=s}q={func:1,ret:-1,args:[D.D]}
p=H.j(new Y.j0(u,o),q)
if(s.b==null)s.san(H.c([],[q]))
s=s.b;(s&&C.a).h(s,p)
V.mq(f)},
j0:function j0(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,Y]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jd.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gD:function(a){return H.c3(a)},
i:function(a){return"Instance of '"+H.br(a)+"'"}}
J.fc.prototype={
i:function(a){return String(a)},
gD:function(a){return a?519018:218159},
$iK:1}
J.fe.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gD:function(a){return 0},
$iC:1}
J.cT.prototype={
gD:function(a){return 0},
i:function(a){return String(a)}}
J.fN.prototype={}
J.ba.prototype={}
J.b5.prototype={
i:function(a){var u=a[$.kK()]
if(u==null)return this.cT(a)
return"JavaScript function for "+H.h(J.ao(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ib3:1}
J.aw.prototype={
h:function(a,b){H.B(b,H.u(a,0))
if(!!a.fixed$length)H.a0(P.ae("add"))
a.push(b)},
fI:function(a,b){var u
if(!!a.fixed$length)H.a0(P.ae("removeAt"))
u=a.length
if(b>=u)throw H.f(P.d7(b,null,null))
return a.splice(b,1)[0]},
I:function(a,b){var u
if(!!a.fixed$length)H.a0(P.ae("remove"))
for(u=0;u<a.length;++u)if(J.S(a[u],b)){a.splice(u,1)
return!0}return!1},
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.b0(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.J(u,t,H.h(a[t]))
return u.join(b)},
fi:function(a){return this.l(a,"")},
fb:function(a,b,c){var u,t,s
H.j(b,{func:1,ret:P.K,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.f(P.b0(a))}throw H.f(H.fa())},
fa:function(a,b){return this.fb(a,b,null)},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
cQ:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.ad(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.ad(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
gf9:function(a){if(a.length>0)return a[0]
throw H.f(H.fa())},
gaE:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.fa())},
bQ:function(a,b){var u,t
H.j(b,{func:1,ret:P.K,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.f(P.b0(a))}return!1},
M:function(a,b){var u
for(u=0;u<a.length;++u)if(J.S(a[u],b))return!0
return!1},
i:function(a){return P.jb(a,"[","]")},
gH:function(a){return new J.aj(a,a.length,0,[H.u(a,0)])},
gD:function(a){return H.c3(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.a0(P.ae("set length"))
if(b<0)throw H.f(P.ad(b,0,null,"newLength",null))
a.length=b},
J:function(a,b,c){H.B(c,H.u(a,0))
if(!!a.immutable$list)H.a0(P.ae("indexed set"))
if(b>=a.length||b<0)throw H.f(H.ct(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.jc.prototype={}
J.aj.prototype={
gB:function(a){return this.d},
q:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.f(H.H(u))
s=this.c
if(s>=t){this.sbq(null)
return!1}this.sbq(u[s]);++this.c
return!0},
sbq:function(a){this.d=H.B(a,H.u(this,0))},
$iav:1}
J.bn.prototype={
c1:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.ae(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ae(""+a+".round()"))},
cm:function(a,b){var u,t
if(b>20)throw H.f(P.ad(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gD:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
u:function(a,b){if(typeof b!=="number")throw H.f(H.be(b))
return a-b},
K:function(a,b){if(typeof b!=="number")throw H.f(H.be(b))
return a*b},
cI:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cW:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bL(a,b)},
ag:function(a,b){return(a|0)===a?a/b|0:this.bL(a,b)},
bL:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ae("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
aA:function(a,b){var u
if(a>0)u=this.ey(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ey:function(a,b){return b>31?0:a>>>b},
$iw:1,
$iT:1}
J.cS.prototype={$iy:1}
J.fd.prototype={}
J.b4.prototype={
b6:function(a,b){if(b<0)throw H.f(H.ct(a,b))
if(b>=a.length)H.a0(H.ct(a,b))
return a.charCodeAt(b)},
ab:function(a,b){if(b>=a.length)throw H.f(H.ct(a,b))
return a.charCodeAt(b)},
R:function(a,b){if(typeof b!=="string")throw H.f(P.j8(b,null,null))
return a+b},
cP:function(a,b,c){var u
if(c>a.length)throw H.f(P.ad(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
aK:function(a,b){return this.cP(a,b,0)},
av:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.d7(b,null,null))
if(b>c)throw H.f(P.d7(b,null,null))
if(c>a.length)throw H.f(P.d7(c,null,null))
return a.substring(b,c)},
aL:function(a,b){return this.av(a,b,null)},
fU:function(a){return a.toLowerCase()},
K:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
fw:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.K(c,u)+a},
a6:function(a,b){return this.fw(a,b," ")},
i:function(a){return a},
gD:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ik0:1,
$ie:1}
H.o.prototype={
gk:function(a){return this.a.length},
m:function(a,b){return C.d.b6(this.a,b)},
$adl:function(){return[P.y]},
$at:function(){return[P.y]},
$ai:function(){return[P.y]},
$ab:function(){return[P.y]}}
H.eM.prototype={}
H.bo.prototype={
gH:function(a){return new H.bY(this,this.gk(this),0,[H.cu(this,"bo",0)])},
aH:function(a,b){return this.cS(0,H.j(b,{func:1,ret:P.K,args:[H.cu(this,"bo",0)]}))}}
H.bY.prototype={
gB:function(a){return this.d},
q:function(){var u,t,s,r
u=this.a
t=J.jv(u)
s=t.gk(u)
if(this.b!==s)throw H.f(P.b0(u))
r=this.c
if(r>=s){this.sam(null)
return!1}this.sam(t.v(u,r));++this.c
return!0},
sam:function(a){this.d=H.B(a,H.u(this,0))},
$iav:1}
H.fq.prototype={
gH:function(a){return new H.fr(J.bh(this.a),this.b,this.$ti)},
gk:function(a){return J.bi(this.a)},
v:function(a,b){return this.b.$1(J.j6(this.a,b))},
$ai:function(a,b){return[b]}}
H.fr.prototype={
q:function(){var u=this.b
if(u.q()){this.sam(this.c.$1(u.gB(u)))
return!0}this.sam(null)
return!1},
gB:function(a){return this.a},
sam:function(a){this.a=H.B(a,H.u(this,1))},
$aav:function(a,b){return[b]}}
H.fs.prototype={
gk:function(a){return J.bi(this.a)},
v:function(a,b){return this.b.$1(J.j6(this.a,b))},
$abo:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cf.prototype={
gH:function(a){return new H.i5(J.bh(this.a),this.b,this.$ti)}}
H.i5.prototype={
q:function(){var u,t
for(u=this.a,t=this.b;u.q();)if(t.$1(u.gB(u)))return!0
return!1},
gB:function(a){var u=this.a
return u.gB(u)}}
H.bl.prototype={}
H.dl.prototype={}
H.dk.prototype={}
H.fS.prototype={}
H.hx.prototype={
U:function(a){var u,t,s
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
H.fJ.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fg.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.h(this.a)+")"}}
H.hO.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j5.prototype={
$1:function(a){if(!!J.Q(a).$ib2)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.dY.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ia6:1}
H.bO.prototype={
i:function(a){return"Closure '"+H.br(this).trim()+"'"},
$ib3:1,
gfZ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hl.prototype={}
H.hc.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bE(u)+"'"}}
H.bM.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bM))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gD:function(a){var u,t
u=this.c
if(u==null)t=H.c3(this.a)
else t=typeof u!=="object"?J.cz(u):H.c3(u)
return(t^H.c3(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.br(u)+"'")}}
H.hz.prototype={
i:function(a){return this.a}}
H.ev.prototype={
i:function(a){return this.a}}
H.fZ.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.ax.prototype={
gk:function(a){return this.a},
gP:function(a){return new H.cV(this,[H.u(this,0)])},
bW:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.bA(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.bA(t,b)}else return this.ff(b)},
ff:function(a){var u=this.d
if(u==null)return!1
return this.b7(this.aR(u,J.cz(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.ay(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.ay(r,b)
s=t==null?null:t.b
return s}else return this.fg(b)},
fg:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.aR(u,J.cz(a)&0x3ffffff)
s=this.b7(t,a)
if(s<0)return
return t[s].b},
J:function(a,b,c){var u,t,s,r,q,p
H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.aW()
this.b=u}this.bs(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.aW()
this.c=t}this.bs(t,b,c)}else{s=this.d
if(s==null){s=this.aW()
this.d=s}r=J.cz(b)&0x3ffffff
q=this.aR(s,r)
if(q==null)this.b0(s,r,[this.aX(b,c)])
else{p=this.b7(q,b)
if(p>=0)q[p].b=c
else q.push(this.aX(b,c))}}},
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.b0(this))
u=u.c}},
bs:function(a,b,c){var u
H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
u=this.ay(a,b)
if(u==null)this.b0(a,b,this.aX(b,c))
else u.b=c},
dC:function(){this.r=this.r+1&67108863},
aX:function(a,b){var u,t
u=new H.fk(H.B(a,H.u(this,0)),H.B(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.dC()
return u},
b7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1},
i:function(a){return P.jW(this)},
ay:function(a,b){return a[b]},
aR:function(a,b){return a[b]},
b0:function(a,b,c){a[b]=c},
di:function(a,b){delete a[b]},
bA:function(a,b){return this.ay(a,b)!=null},
aW:function(){var u=Object.create(null)
this.b0(u,"<non-identifier-key>",u)
this.di(u,"<non-identifier-key>")
return u}}
H.fk.prototype={}
H.cV.prototype={
gk:function(a){return this.a.a},
gH:function(a){var u,t
u=this.a
t=new H.fl(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fl.prototype={
gB:function(a){return this.d},
q:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.b0(u))
else{u=this.c
if(u==null){this.sbr(null)
return!1}else{this.sbr(u.a)
this.c=this.c.c
return!0}}},
sbr:function(a){this.d=H.B(a,H.u(this,0))},
$iav:1}
H.iX.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.iY.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.iZ.prototype={
$1:function(a){return this.a(H.A(a))},
$S:29}
H.ff.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ik0:1}
H.c1.prototype={}
H.cZ.prototype={
gk:function(a){return a.length},
$iz:1,
$az:function(){}}
H.c0.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]},
$abl:function(){return[P.w]},
$at:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]},
$ib:1,
$ab:function(){return[P.w]}}
H.d_.prototype={
$abl:function(){return[P.y]},
$at:function(){return[P.y]},
$ii:1,
$ai:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.fA.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fB.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fC.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fD.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fE.prototype={
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.d0.prototype={
gk:function(a){return a.length},
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.fF.prototype={
gk:function(a){return a.length},
m:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.cj.prototype={}
H.ck.prototype={}
H.cl.prototype={}
H.cm.prototype={}
P.i7.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:14}
P.i6.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.i8.prototype={
$0:function(){this.a.$0()},
$S:0}
P.i9.prototype={
$0:function(){this.a.$0()},
$S:0}
P.e3.prototype={
d5:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bA(new P.iK(this,b),0),a)
else throw H.f(P.ae("`setTimeout()` not found."))},
d6:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bA(new P.iJ(this,a,Date.now(),b),0),a)
else throw H.f(P.ae("Periodic timer."))},
$iaF:1}
P.iK.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:1}
P.iJ.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.cW(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.aK.prototype={
fl:function(a){if(this.c!==6)return!0
return this.b.b.be(H.j(this.d,{func:1,ret:P.K,args:[P.E]}),a.a,P.K,P.E)},
fe:function(a){var u,t,s,r
u=this.e
t=P.E
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.ek(u,{func:1,args:[P.E,P.a6]}))return H.ju(r.fN(u,a.a,a.b,null,t,P.a6),s)
else return H.ju(r.be(H.j(u,{func:1,args:[P.E]}),a.a,null,t),s)}}
P.ah.prototype={
ck:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.N
if(t!==C.f){t.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.lX(b,t)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.ah(0,$.N,[c])
r=b==null?1:3
this.bt(new P.aK(s,r,a,b,[u,c]))
return s},
fR:function(a,b){return this.ck(a,null,b)},
bt:function(a){var u,t
u=this.a
if(u<=1){a.a=H.n(this.c,"$iaK")
this.c=a}else{if(u===2){t=H.n(this.c,"$iah")
u=t.a
if(u<4){t.bt(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iQ(null,null,u,H.j(new P.ii(this,a),{func:1,ret:-1}))}},
bJ:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.n(this.c,"$iaK")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.n(this.c,"$iah")
t=p.a
if(t<4){p.bJ(a)
return}this.a=t
this.c=p.c}u.a=this.az(a)
t=this.b
t.toString
P.iQ(null,null,t,H.j(new P.im(u,this),{func:1,ret:-1}))}},
b_:function(){var u=H.n(this.c,"$iaK")
this.c=null
return this.az(u)},
az:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
bx:function(a){var u,t,s
u=H.u(this,0)
H.ju(a,{futureOr:1,type:u})
t=this.$ti
if(H.ej(a,"$ibW",t,"$abW"))if(H.ej(a,"$iah",t,null))P.km(a,this)
else P.lN(a,this)
else{s=this.b_()
H.B(a,u)
this.a=4
this.c=a
P.ci(this,s)}},
by:function(a,b){var u
H.n(b,"$ia6")
u=this.b_()
this.a=8
this.c=new P.Z(a,b)
P.ci(this,u)},
$ibW:1}
P.ii.prototype={
$0:function(){P.ci(this.a,this.b)},
$S:0}
P.im.prototype={
$0:function(){P.ci(this.b,this.a.a)},
$S:0}
P.ij.prototype={
$1:function(a){var u=this.a
u.a=0
u.bx(a)},
$S:14}
P.ik.prototype={
$2:function(a,b){H.n(b,"$ia6")
this.a.by(a,b)},
$1:function(a){return this.$2(a,null)},
$S:31}
P.il.prototype={
$0:function(){this.a.by(this.b,this.c)},
$S:0}
P.iq.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.ci(H.j(r.d,{func:1}),null)}catch(q){t=H.aa(q)
s=H.bB(q)
if(this.d){r=H.n(this.a.a.c,"$iZ").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.n(this.a.a.c,"$iZ")
else p.b=new P.Z(t,s)
p.a=!0
return}if(!!J.Q(u).$ibW){if(u instanceof P.ah&&u.a>=4){if(u.a===8){r=this.b
r.b=H.n(u.c,"$iZ")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.fR(new P.ir(o),null)
r.a=!1}},
$S:1}
P.ir.prototype={
$1:function(a){return this.a},
$S:22}
P.ip.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.B(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.be(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aa(o)
t=H.bB(o)
s=this.a
s.b=new P.Z(u,t)
s.a=!0}},
$S:1}
P.io.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.n(this.a.a.c,"$iZ")
r=this.c
if(r.fl(u)&&r.e!=null){q=this.b
q.b=r.fe(u)
q.a=!1}}catch(p){t=H.aa(p)
s=H.bB(p)
r=H.n(this.a.a.c,"$iZ")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.Z(t,s)
n.a=!0}},
$S:1}
P.dq.prototype={}
P.hf.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.ah(0,$.N,[P.y])
u.a=0
s=H.u(this,0)
r=H.j(new P.hh(u,this),{func:1,ret:-1,args:[s]})
H.j(new P.hi(u,t),{func:1,ret:-1})
W.X(this.a,this.b,r,!1,s)
return t}}
P.hh.prototype={
$1:function(a){H.B(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.C,args:[H.u(this.b,0)]}}}
P.hi.prototype={
$0:function(){this.b.bx(this.a.a)},
$S:0}
P.c8.prototype={}
P.hg.prototype={}
P.aF.prototype={}
P.Z.prototype={
i:function(a){return H.h(this.a)},
$ib2:1}
P.iN.prototype={$in1:1}
P.iP.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.d2()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.f(u)
s=H.f(u)
s.stack=t.i(0)
throw s},
$S:0}
P.iw.prototype={
fO:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
try{if(C.f===$.N){a.$0()
return}P.ks(null,null,this,a,-1)}catch(s){u=H.aa(s)
t=H.bB(s)
P.iO(null,null,this,u,H.n(t,"$ia6"))}},
fP:function(a,b,c){var u,t,s
H.j(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.f===$.N){a.$1(b)
return}P.kt(null,null,this,a,b,-1,c)}catch(s){u=H.aa(s)
t=H.bB(s)
P.iO(null,null,this,u,H.n(t,"$ia6"))}},
eL:function(a,b){return new P.iy(this,H.j(a,{func:1,ret:b}),b)},
b3:function(a){return new P.ix(this,H.j(a,{func:1,ret:-1}))},
bS:function(a,b){return new P.iz(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
ci:function(a,b){H.j(a,{func:1,ret:b})
if($.N===C.f)return a.$0()
return P.ks(null,null,this,a,b)},
be:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.N===C.f)return a.$1(b)
return P.kt(null,null,this,a,b,c,d)},
fN:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.N===C.f)return a.$2(b,c)
return P.lY(null,null,this,a,b,c,d,e,f)}}
P.iy.prototype={
$0:function(){return this.a.ci(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ix.prototype={
$0:function(){return this.a.fO(this.b)},
$S:1}
P.iz.prototype={
$1:function(a){var u=this.c
return this.a.fP(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iu.prototype={
gH:function(a){var u=new P.dF(this,this.r,this.$ti)
u.c=this.e
return u},
gk:function(a){return this.a},
M:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.n(u[b],"$ibx")!=null}else{t=this.de(b)
return t}},
de:function(a){var u=this.d
if(u==null)return!1
return this.aQ(this.bD(u,a),a)>=0},
h:function(a,b){var u,t
H.B(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jl()
this.b=u}return this.bu(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jl()
this.c=t}return this.bu(t,b)}else return this.d8(0,b)},
d8:function(a,b){var u,t,s
H.B(b,H.u(this,0))
u=this.d
if(u==null){u=P.jl()
this.d=u}t=this.bz(b)
s=u[t]
if(s==null)u[t]=[this.aN(b)]
else{if(this.aQ(s,b)>=0)return!1
s.push(this.aN(b))}return!0},
I:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eh(this.c,b)
else return this.ee(0,b)},
ee:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.bD(u,b)
s=this.aQ(t,b)
if(s<0)return!1
this.bM(t.splice(s,1)[0])
return!0},
bu:function(a,b){H.B(b,H.u(this,0))
if(H.n(a[b],"$ibx")!=null)return!1
a[b]=this.aN(b)
return!0},
eh:function(a,b){var u
if(a==null)return!1
u=H.n(a[b],"$ibx")
if(u==null)return!1
this.bM(u)
delete a[b]
return!0},
bw:function(){this.r=1073741823&this.r+1},
aN:function(a){var u,t
u=new P.bx(H.B(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.bw()
return u},
bM:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.bw()},
bz:function(a){return J.cz(a)&1073741823},
bD:function(a,b){return a[this.bz(b)]},
aQ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1}}
P.bx.prototype={}
P.dF.prototype={
gB:function(a){return this.d},
q:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.b0(u))
else{u=this.c
if(u==null){this.sbv(null)
return!1}else{this.sbv(H.B(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sbv:function(a){this.d=H.B(a,H.u(this,0))},
$iav:1}
P.fm.prototype={$ii:1,$ib:1}
P.t.prototype={
gH:function(a){return new H.bY(a,this.gk(a),0,[H.cv(this,a,"t",0)])},
v:function(a,b){return this.m(a,b)},
fT:function(a,b){var u,t
u=H.c([],[H.cv(this,a,"t",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.J(u,t,this.m(a,t))
return u},
fS:function(a){return this.fT(a,!0)},
i:function(a){return P.jb(a,"[","]")}}
P.fo.prototype={}
P.fp.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.h(a)
u.a=t+": "
u.a+=H.h(b)},
$S:11}
P.V.prototype={
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.cv(this,a,"V",0),H.cv(this,a,"V",1)]})
for(u=J.bh(this.gP(a));u.q();){t=u.gB(u)
b.$2(t,this.m(a,t))}},
gk:function(a){return J.bi(this.gP(a))},
i:function(a){return P.jW(a)},
$iF:1}
P.iB.prototype={
Z:function(a,b){var u
for(u=J.bh(H.r(b,"$ii",this.$ti,"$ai"));u.q();)this.h(0,u.gB(u))},
i:function(a){return P.jb(this,"{","}")},
v:function(a,b){var u,t,s
if(b<0)H.a0(P.ad(b,0,null,"index",null))
for(u=P.lQ(this,this.r,H.u(this,0)),t=0;u.q();){s=u.d
if(b===t)return s;++t}throw H.f(P.L(b,this,"index",null,t))},
$ii:1,
$ik8:1}
P.dG.prototype={}
P.bP.prototype={}
P.bQ.prototype={}
P.eO.prototype={
$abP:function(){return[P.e,[P.b,P.y]]}}
P.f6.prototype={
i:function(a){return this.a}}
P.f5.prototype={
df:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.bu("")
if(r>b)q.a+=C.d.av(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.l5(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abQ:function(){return[P.e,P.e]}}
P.hR.prototype={}
P.hS.prototype={
eU:function(a,b,c){var u,t,s
c=P.k6(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iL(t)
if(s.dr(a,b,c)!==c)s.bN(C.d.b6(a,c-1),0)
return new Uint8Array(t.subarray(0,H.lT(0,s.b,t.length)))},
eT:function(a){return this.eU(a,0,null)},
$abQ:function(){return[P.e,[P.b,P.y]]}}
P.iL.prototype={
bN:function(a,b){var u,t,s,r,q
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
dr:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.d.b6(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.d.ab(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.bN(r,C.d.ab(a,p)))s=p}else if(r<=2047){q=this.b
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
P.K.prototype={}
P.b1.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a&&!0},
gD:function(a){var u=this.a
return(u^C.h.aA(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lc(H.lx(this))
t=P.cJ(H.lv(this))
s=P.cJ(H.lr(this))
r=P.cJ(H.ls(this))
q=P.cJ(H.lu(this))
p=P.cJ(H.lw(this))
o=P.ld(H.lt(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.w.prototype={}
P.aM.prototype={
u:function(a,b){return new P.aM(C.h.u(this.a,b.gh1()))},
n:function(a,b){if(b==null)return!1
return b instanceof P.aM&&this.a===b.a},
gD:function(a){return C.h.gD(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eL()
t=this.a
if(t<0)return"-"+new P.aM(0-t).i(0)
s=u.$1(C.h.ag(t,6e7)%60)
r=u.$1(C.h.ag(t,1e6)%60)
q=new P.eK().$1(t%1e6)
return""+C.h.ag(t,36e8)+":"+H.h(s)+":"+H.h(r)+"."+H.h(q)}}
P.eK.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.eL.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.b2.prototype={}
P.d2.prototype={
i:function(a){return"Throw of null."}}
P.ap.prototype={
gaP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaO:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gaP()+t+s
if(!this.a)return r
q=this.gaO()
p=P.eQ(this.b)
return r+q+": "+p}}
P.bs.prototype={
gaP:function(){return"RangeError"},
gaO:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.h(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.h(u)
else if(s>u)t=": Not in range "+H.h(u)+".."+H.h(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.h(u)}return t}}
P.f7.prototype={
gaP:function(){return"RangeError"},
gaO:function(){var u,t
u=H.Y(this.b)
if(typeof u!=="number")return u.h0()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.h(t)},
gk:function(a){return this.f}}
P.hP.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hN.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c7.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ex.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eQ(u)+"."}}
P.fM.prototype={
i:function(a){return"Out of Memory"},
$ib2:1}
P.dc.prototype={
i:function(a){return"Stack Overflow"},
$ib2:1}
P.eC.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dy.prototype={
i:function(a){return"Exception: "+this.a}}
P.f0.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.d.av(s,0,75)+"...":s
return t+"\n"+r}}
P.b3.prototype={}
P.y.prototype={}
P.i.prototype={
aH:function(a,b){var u=H.cu(this,"i",0)
return new H.cf(this,H.j(b,{func:1,ret:P.K,args:[u]}),[u])},
gk:function(a){var u,t
u=this.gH(this)
for(t=0;u.q();)++t
return t},
ga8:function(a){var u,t
u=this.gH(this)
if(!u.q())throw H.f(H.fa())
t=u.gB(u)
if(u.q())throw H.f(H.ll())
return t},
v:function(a,b){var u,t,s
if(b<0)H.a0(P.ad(b,0,null,"index",null))
for(u=this.gH(this),t=0;u.q();){s=u.gB(u)
if(b===t)return s;++t}throw H.f(P.L(b,this,"index",null,t))},
i:function(a){return P.lk(this,"(",")")}}
P.av.prototype={}
P.b.prototype={$ii:1}
P.F.prototype={}
P.C.prototype={
gD:function(a){return P.E.prototype.gD.call(this,this)},
i:function(a){return"null"}}
P.T.prototype={}
P.E.prototype={constructor:P.E,$iE:1,
n:function(a,b){return this===b},
gD:function(a){return H.c3(this)},
i:function(a){return"Instance of '"+H.br(this)+"'"},
toString:function(){return this.i(this)}}
P.a6.prototype={}
P.e.prototype={$ik0:1}
P.bu.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.p.prototype={}
W.em.prototype={
gk:function(a){return a.length}}
W.cA.prototype={
i:function(a){return String(a)},
$icA:1}
W.en.prototype={
i:function(a){return String(a)}}
W.bL.prototype={$ibL:1}
W.cC.prototype={}
W.aV.prototype={$iaV:1}
W.bk.prototype={
cB:function(a,b,c){var u=this.ds(a,b,P.m3(c,null))
return u},
ds:function(a,b,c){return a.getContext(b,c)},
$ibk:1}
W.aW.prototype={
gk:function(a){return a.length}}
W.bR.prototype={$ibR:1}
W.ey.prototype={
gk:function(a){return a.length}}
W.I.prototype={$iI:1}
W.bS.prototype={
gk:function(a){return a.length}}
W.ez.prototype={}
W.ar.prototype={}
W.as.prototype={}
W.eA.prototype={
gk:function(a){return a.length}}
W.eB.prototype={
gk:function(a){return a.length}}
W.eE.prototype={
gk:function(a){return a.length}}
W.ab.prototype={$iab:1}
W.bT.prototype={
eH:function(a,b){return a.adoptNode(b)},
cC:function(a,b){return a.getElementById(b)}}
W.eH.prototype={
i:function(a){return String(a)}}
W.cK.prototype={
eX:function(a,b){return a.createHTMLDocument(b)}}
W.cL.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[[P.a5,P.T]]},
$at:function(){return[[P.a5,P.T]]},
$ii:1,
$ai:function(){return[[P.a5,P.T]]},
$ib:1,
$ab:function(){return[[P.a5,P.T]]},
$av:function(){return[[P.a5,P.T]]}}
W.cM.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gak(a))+" x "+H.h(this.gai(a))},
n:function(a,b){var u
if(b==null)return!1
if(!H.ej(b,"$ia5",[P.T],"$aa5"))return!1
u=J.a9(b)
return a.left===u.gc3(b)&&a.top===u.gco(b)&&this.gak(a)===u.gak(b)&&this.gai(a)===u.gai(b)},
gD:function(a){return W.ko(C.c.gD(a.left),C.c.gD(a.top),C.c.gD(this.gak(a)),C.c.gD(this.gai(a)))},
gai:function(a){return a.height},
gc3:function(a){return a.left},
gco:function(a){return a.top},
gak:function(a){return a.width},
$ia5:1,
$aa5:function(){return[P.T]}}
W.eI.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[P.e]},
$at:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
W.eJ.prototype={
gk:function(a){return a.length}}
W.ib.prototype={
gk:function(a){return this.b.length},
m:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.k(u,b)
return H.n(u[b],"$iJ")},
h:function(a,b){J.jH(this.a,b)
return b},
gH:function(a){var u=this.fS(this)
return new J.aj(u,u.length,0,[H.u(u,0)])},
$at:function(){return[W.J]},
$ai:function(){return[W.J]},
$ab:function(){return[W.J]}}
W.J.prototype={
geK:function(a){return new W.id(a)},
gbU:function(a){return new W.ib(a,a.children)},
i:function(a){return a.localName},
S:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.jR
if(u==null){u=H.c([],[W.a8])
t=new W.d1(u)
C.a.h(u,W.kn(null))
C.a.h(u,W.kp())
$.jR=t
d=t}else d=u
u=$.jQ
if(u==null){u=new W.e8(d)
$.jQ=u
c=u}else{u.a=d
c=u}}if($.aN==null){u=document
t=u.implementation
t=(t&&C.D).eX(t,"")
$.aN=t
$.ja=t.createRange()
t=$.aN
t.toString
t=t.createElement("base")
H.n(t,"$ibL")
t.href=u.baseURI
u=$.aN.head;(u&&C.F).p(u,t)}u=$.aN
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.n(t,"$iaV")}u=$.aN
if(!!this.$iaV)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aN.body;(u&&C.j).p(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.M(C.Q,a.tagName)){u=$.ja;(u&&C.x).cK(u,s)
u=$.ja
r=(u&&C.x).eV(u,b)}else{s.innerHTML=b
r=$.aN.createDocumentFragment()
for(u=J.a9(r);t=s.firstChild,t!=null;)u.p(r,t)}u=$.aN.body
if(s==null?u!=null:s!==u)J.jI(s)
c.bg(r)
C.r.eH(document,r)
return r},
eW:function(a,b,c){return this.S(a,b,c,null)},
cN:function(a,b,c,d){a.textContent=null
this.p(a,this.S(a,b,c,d))},
cM:function(a,b){return this.cN(a,b,null,null)},
al:function(a,b){return a.getAttribute(b)},
ef:function(a,b){return a.removeAttribute(b)},
$iJ:1,
gfQ:function(a){return a.tagName}}
W.eN.prototype={
$1:function(a){return!!J.Q(H.n(a,"$ix")).$iJ},
$S:13}
W.l.prototype={$il:1}
W.d.prototype={
eF:function(a,b,c,d){H.j(c,{func:1,args:[W.l]})
if(c!=null)this.d9(a,b,c,!1)},
d9:function(a,b,c,d){return a.addEventListener(b,H.bA(H.j(c,{func:1,args:[W.l]}),1),!1)},
$id:1}
W.at.prototype={$iat:1}
W.eV.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.at]},
$at:function(){return[W.at]},
$ii:1,
$ai:function(){return[W.at]},
$ib:1,
$ab:function(){return[W.at]},
$av:function(){return[W.at]}}
W.eW.prototype={
gk:function(a){return a.length}}
W.f_.prototype={
gk:function(a){return a.length}}
W.au.prototype={$iau:1}
W.cQ.prototype={}
W.f4.prototype={
gk:function(a){return a.length}}
W.bm.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.x]},
$at:function(){return[W.x]},
$ii:1,
$ai:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$ibm:1,
$av:function(){return[W.x]}}
W.cR.prototype={}
W.ay.prototype={$iay:1}
W.cX.prototype={
i:function(a){return String(a)},
$icX:1}
W.ft.prototype={
gk:function(a){return a.length}}
W.fu.prototype={
m:function(a,b){return P.aT(a.get(H.A(b)))},
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aT(t.value[1]))}},
gP:function(a){var u=H.c([],[P.e])
this.F(a,new W.fv(u))
return u},
gk:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.fv.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fw.prototype={
m:function(a,b){return P.aT(a.get(H.A(b)))},
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aT(t.value[1]))}},
gP:function(a){var u=H.c([],[P.e])
this.F(a,new W.fx(u))
return u},
gk:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.fx.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.az.prototype={$iaz:1}
W.fy.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.az]},
$at:function(){return[W.az]},
$ii:1,
$ai:function(){return[W.az]},
$ib:1,
$ab:function(){return[W.az]},
$av:function(){return[W.az]}}
W.W.prototype={$iW:1}
W.a_.prototype={
ga8:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.f(P.k9("No elements"))
if(t>1)throw H.f(P.k9("More than one element"))
return u.firstChild},
Z:function(a,b){var u,t,s,r,q
H.r(b,"$ii",[W.x],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a9(t),q=0;q<s;++q)r.p(t,u.firstChild)
return},
gH:function(a){var u=this.a.childNodes
return new W.cO(u,u.length,-1,[H.cv(C.S,u,"v",0)])},
gk:function(a){return this.a.childNodes.length},
m:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
$at:function(){return[W.x]},
$ai:function(){return[W.x]},
$ab:function(){return[W.x]}}
W.x.prototype={
fH:function(a){var u=a.parentNode
if(u!=null)J.el(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.cR(a):u},
p:function(a,b){return a.appendChild(b)},
eg:function(a,b){return a.removeChild(b)},
$ix:1}
W.c2.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.x]},
$at:function(){return[W.x]},
$ii:1,
$ai:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$av:function(){return[W.x]}}
W.aA.prototype={$iaA:1,
gk:function(a){return a.length}}
W.fP.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aA]},
$at:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$av:function(){return[W.aA]}}
W.d6.prototype={
eV:function(a,b){return a.createContextualFragment(b)},
cK:function(a,b){return a.selectNodeContents(b)}}
W.fX.prototype={
m:function(a,b){return P.aT(a.get(H.A(b)))},
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aT(t.value[1]))}},
gP:function(a){var u=H.c([],[P.e])
this.F(a,new W.fY(u))
return u},
gk:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.fY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.h_.prototype={
gk:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.h9.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aB]},
$at:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$av:function(){return[W.aB]}}
W.aC.prototype={$iaC:1}
W.ha.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aC]},
$at:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$av:function(){return[W.aC]}}
W.aD.prototype={$iaD:1,
gk:function(a){return a.length}}
W.hd.prototype={
m:function(a,b){return this.bE(a,H.A(b))},
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.dv(a,u)
if(t==null)return
b.$2(t,this.bE(a,t))}},
gP:function(a){var u=H.c([],[P.e])
this.F(a,new W.he(u))
return u},
gk:function(a){return a.length},
bE:function(a,b){return a.getItem(b)},
dv:function(a,b){return a.key(b)},
$aV:function(){return[P.e,P.e]},
$iF:1,
$aF:function(){return[P.e,P.e]}}
W.he.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:26}
W.ak.prototype={$iak:1}
W.bv.prototype={}
W.dd.prototype={
S:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
u=W.lg("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a_(t).Z(0,new W.a_(u))
return t}}
W.de.prototype={
S:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.S(u.createElement("table"),b,c,d)
u.toString
u=new W.a_(u)
s=u.ga8(u)
s.toString
u=new W.a_(s)
r=u.ga8(u)
t.toString
r.toString
new W.a_(t).Z(0,new W.a_(r))
return t}}
W.hk.prototype={
S:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.S(u.createElement("table"),b,c,d)
u.toString
u=new W.a_(u)
s=u.ga8(u)
t.toString
s.toString
new W.a_(t).Z(0,new W.a_(s))
return t}}
W.c9.prototype={$ic9:1}
W.aE.prototype={$iaE:1}
W.al.prototype={$ial:1}
W.hm.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.al]},
$at:function(){return[W.al]},
$ii:1,
$ai:function(){return[W.al]},
$ib:1,
$ab:function(){return[W.al]},
$av:function(){return[W.al]}}
W.hn.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aE]},
$at:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$av:function(){return[W.aE]}}
W.hq.prototype={
gk:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.am.prototype={$iam:1}
W.hu.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aG]},
$at:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$av:function(){return[W.aG]}}
W.hv.prototype={
gk:function(a){return a.length}}
W.b9.prototype={}
W.hQ.prototype={
i:function(a){return String(a)}}
W.i3.prototype={
gk:function(a){return a.length}}
W.aJ.prototype={
gf2:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ae("deltaY is not supported"))},
gf1:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ae("deltaX is not supported"))},
$iaJ:1}
W.cg.prototype={
em:function(a,b){return a.requestAnimationFrame(H.bA(H.j(b,{func:1,ret:-1,args:[P.T]}),1))},
dj:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ch.prototype={$ich:1}
W.ic.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.I]},
$at:function(){return[W.I]},
$ii:1,
$ai:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$av:function(){return[W.I]}}
W.dt.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
n:function(a,b){var u
if(b==null)return!1
if(!H.ej(b,"$ia5",[P.T],"$aa5"))return!1
u=J.a9(b)
return a.left===u.gc3(b)&&a.top===u.gco(b)&&a.width===u.gak(b)&&a.height===u.gai(b)},
gD:function(a){return W.ko(C.c.gD(a.left),C.c.gD(a.top),C.c.gD(a.width),C.c.gD(a.height))},
gai:function(a){return a.height},
gak:function(a){return a.width}}
W.is.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.au]},
$at:function(){return[W.au]},
$ii:1,
$ai:function(){return[W.au]},
$ib:1,
$ab:function(){return[W.au]},
$av:function(){return[W.au]}}
W.dL.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.x]},
$at:function(){return[W.x]},
$ii:1,
$ai:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$av:function(){return[W.x]}}
W.iE.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aD]},
$at:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$av:function(){return[W.aD]}}
W.iF.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.ak]},
$at:function(){return[W.ak]},
$ii:1,
$ai:function(){return[W.ak]},
$ib:1,
$ab:function(){return[W.ak]},
$av:function(){return[W.ak]}}
W.ia.prototype={
F:function(a,b){var u,t,s,r,q,p
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gP(this),t=u.length,s=this.a,r=J.a9(s),q=0;q<u.length;u.length===t||(0,H.H)(u),++q){p=u[q]
b.$2(p,r.al(s,p))}},
gP:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.c([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.k(u,r)
q=H.n(u[r],"$ich")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aV:function(){return[P.e,P.e]},
$aF:function(){return[P.e,P.e]}}
W.id.prototype={
m:function(a,b){return J.j7(this.a,H.A(b))},
gk:function(a){return this.gP(this).length}}
W.ie.prototype={}
W.jk.prototype={}
W.ig.prototype={}
W.ih.prototype={
$1:function(a){return this.a.$1(H.n(a,"$il"))},
$S:23}
W.bb.prototype={
d1:function(a){var u,t
u=$.jF()
if(u.a===0){for(t=0;t<262;++t)u.J(0,C.P[t],W.mb())
for(t=0;t<12;++t)u.J(0,C.n[t],W.mc())}},
ah:function(a){return $.kY().M(0,W.bU(a))},
a_:function(a,b,c){var u,t,s
u=W.bU(a)
t=$.jF()
s=t.m(0,H.h(u)+"::"+b)
if(s==null)s=t.m(0,"*::"+b)
if(s==null)return!1
return H.jr(s.$4(a,b,c,this))},
$ia8:1}
W.v.prototype={
gH:function(a){return new W.cO(a,this.gk(a),-1,[H.cv(this,a,"v",0)])}}
W.d1.prototype={
ah:function(a){return C.a.bQ(this.a,new W.fH(a))},
a_:function(a,b,c){return C.a.bQ(this.a,new W.fG(a,b,c))},
$ia8:1}
W.fH.prototype={
$1:function(a){return H.n(a,"$ia8").ah(this.a)},
$S:16}
W.fG.prototype={
$1:function(a){return H.n(a,"$ia8").a_(this.a,this.b,this.c)},
$S:16}
W.dT.prototype={
d4:function(a,b,c,d){var u,t,s
this.a.Z(0,c)
u=b.aH(0,new W.iC())
t=b.aH(0,new W.iD())
this.b.Z(0,u)
s=this.c
s.Z(0,C.R)
s.Z(0,t)},
ah:function(a){return this.a.M(0,W.bU(a))},
a_:function(a,b,c){var u,t
u=W.bU(a)
t=this.c
if(t.M(0,H.h(u)+"::"+b))return this.d.eI(c)
else if(t.M(0,"*::"+b))return this.d.eI(c)
else{t=this.b
if(t.M(0,H.h(u)+"::"+b))return!0
else if(t.M(0,"*::"+b))return!0
else if(t.M(0,H.h(u)+"::*"))return!0
else if(t.M(0,"*::*"))return!0}return!1},
$ia8:1}
W.iC.prototype={
$1:function(a){return!C.a.M(C.n,H.A(a))},
$S:17}
W.iD.prototype={
$1:function(a){return C.a.M(C.n,H.A(a))},
$S:17}
W.iH.prototype={
a_:function(a,b,c){if(this.cV(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j7(a,"template")==="")return this.e.M(0,b)
return!1}}
W.iI.prototype={
$1:function(a){return"TEMPLATE::"+H.h(H.A(a))},
$S:24}
W.iG.prototype={
ah:function(a){var u=J.Q(a)
if(!!u.$ic4)return!1
u=!!u.$im
if(u&&W.bU(a)==="foreignObject")return!1
if(u)return!0
return!1},
a_:function(a,b,c){if(b==="is"||C.d.aK(b,"on"))return!1
return this.ah(a)},
$ia8:1}
W.cO.prototype={
q:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sbF(J.l0(this.a,u))
this.c=u
return!0}this.sbF(null)
this.c=t
return!1},
gB:function(a){return this.d},
sbF:function(a){this.d=H.B(a,H.u(this,0))},
$iav:1}
W.a8.prototype={}
W.iA.prototype={$imP:1}
W.e8.prototype={
bg:function(a){new W.iM(this).$2(a,null)},
ap:function(a,b){if(b==null)J.jI(a)
else J.el(b,a)},
eo:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.l3(a)
s=J.j7(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.aa(o)}q="element unprintable"
try{q=J.ao(a)}catch(o){H.aa(o)}try{p=W.bU(a)
this.en(H.n(a,"$iJ"),b,u,q,p,H.n(t,"$iF"),H.A(s))}catch(o){if(H.aa(o) instanceof P.ap)throw o
else{this.ap(a,b)
window
n="Removing corrupted element "+H.h(q)
if(typeof console!="undefined")window.console.warn(n)}}},
en:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.ap(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.ah(a)){this.ap(a,b)
window
u="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.a_(a,"is",g)){this.ap(a,b)
window
u="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gP(f)
t=H.c(u.slice(0),[H.u(u,0)])
for(s=f.gP(f).length-1,u=f.a,r=J.a9(u);s>=0;--s){if(s>=t.length)return H.k(t,s)
q=t[s]
if(!this.a.a_(a,J.l6(q),r.al(u,q))){window
p="Removing disallowed attribute <"+H.h(e)+" "+q+'="'+H.h(r.al(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.al(u,q)
r.ef(u,q)}}if(!!J.Q(a).$ic9)this.bg(a.content)},
$imB:1}
W.iM.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.eo(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.ap(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.aa(r)
q=H.n(u,"$ix")
if(s){p=q.parentNode
if(p!=null)J.el(p,q)}else J.el(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.n(t,"$ix")}},
$S:25}
W.ds.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.cn.prototype={}
W.co.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dZ.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.cp.prototype={}
W.cq.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
P.iR.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.eX.prototype={
gaS:function(){var u,t,s
u=this.b
t=H.cu(u,"t",0)
s=W.J
return new H.fq(new H.cf(u,H.j(new P.eY(),{func:1,ret:P.K,args:[t]}),[t]),H.j(new P.eZ(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.jH(this.b.a,b)},
gk:function(a){return J.bi(this.gaS().a)},
m:function(a,b){var u=this.gaS()
return u.b.$1(J.j6(u.a,b))},
gH:function(a){var u=P.jV(this.gaS(),!1,W.J)
return new J.aj(u,u.length,0,[H.u(u,0)])},
$at:function(){return[W.J]},
$ai:function(){return[W.J]},
$ab:function(){return[W.J]}}
P.eY.prototype={
$1:function(a){return!!J.Q(H.n(a,"$ix")).$iJ},
$S:13}
P.eZ.prototype={
$1:function(a){return H.bC(H.n(a,"$ix"),"$iJ")},
$S:38}
P.iv.prototype={}
P.a5.prototype={}
P.aP.prototype={$iaP:1}
P.fi.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return this.a1(a,b)},
v:function(a,b){return this.m(a,b)},
a1:function(a,b){return a.getItem(b)},
$at:function(){return[P.aP]},
$ii:1,
$ai:function(){return[P.aP]},
$ib:1,
$ab:function(){return[P.aP]},
$av:function(){return[P.aP]}}
P.aR.prototype={$iaR:1}
P.fK.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return this.a1(a,b)},
v:function(a,b){return this.m(a,b)},
a1:function(a,b){return a.getItem(b)},
$at:function(){return[P.aR]},
$ii:1,
$ai:function(){return[P.aR]},
$ib:1,
$ab:function(){return[P.aR]},
$av:function(){return[P.aR]}}
P.fQ.prototype={
gk:function(a){return a.length}}
P.c4.prototype={$ic4:1}
P.hj.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return this.a1(a,b)},
v:function(a,b){return this.m(a,b)},
a1:function(a,b){return a.getItem(b)},
$at:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
P.m.prototype={
gbU:function(a){return new P.eX(a,new W.a_(a))},
S:function(a,b,c,d){var u,t,s,r,q,p
u=H.c([],[W.a8])
C.a.h(u,W.kn(null))
C.a.h(u,W.kp())
C.a.h(u,new W.iG())
c=new W.e8(new W.d1(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.j).eW(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.a_(r)
p=u.ga8(u)
for(u=J.a9(q);s=p.firstChild,s!=null;)u.p(q,s)
return q},
$im:1}
P.aS.prototype={$iaS:1}
P.hw.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return this.a1(a,b)},
v:function(a,b){return this.m(a,b)},
a1:function(a,b){return a.getItem(b)},
$at:function(){return[P.aS]},
$ii:1,
$ai:function(){return[P.aS]},
$ib:1,
$ab:function(){return[P.aS]},
$av:function(){return[P.aS]}}
P.dD.prototype={}
P.dE.prototype={}
P.dO.prototype={}
P.dP.prototype={}
P.e_.prototype={}
P.e0.prototype={}
P.e6.prototype={}
P.e7.prototype={}
P.ep.prototype={
gk:function(a){return a.length}}
P.eq.prototype={
m:function(a,b){return P.aT(a.get(H.A(b)))},
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aT(t.value[1]))}},
gP:function(a){var u=H.c([],[P.e])
this.F(a,new P.er(u))
return u},
gk:function(a){return a.size},
$aV:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
P.er.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
P.es.prototype={
gk:function(a){return a.length}}
P.bj.prototype={}
P.fL.prototype={
gk:function(a){return a.length}}
P.dr.prototype={}
P.cD.prototype={$icD:1}
P.cP.prototype={$icP:1}
P.d5.prototype={$id5:1}
P.bt.prototype={
bR:function(a,b,c){return a.attachShader(b,c)},
a0:function(a,b,c){return a.bindBuffer(b,c)},
eM:function(a,b,c){return a.bindFramebuffer(b,c)},
bT:function(a,b,c,d){return a.bufferData(b,c,d)},
eP:function(a,b){return a.clear(b)},
eQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
eR:function(a,b){return a.clearDepth(b)},
eS:function(a,b){return a.compileShader(b)},
eY:function(a,b){return a.createShader(b)},
f_:function(a,b){return a.deleteProgram(b)},
f0:function(a,b){return a.deleteShader(b)},
f3:function(a,b){return a.depthFunc(b)},
bY:function(a,b){return a.disableVertexAttribArray(b)},
f5:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c_:function(a,b){return a.enable(b)},
c0:function(a,b){return a.enableVertexAttribArray(b)},
cv:function(a,b,c){return a.getActiveAttrib(b,c)},
cw:function(a,b,c){return a.getActiveUniform(b,c)},
cz:function(a,b,c){return a.getAttribLocation(b,c)},
bf:function(a,b){return a.getParameter(b)},
cD:function(a,b){return a.getProgramInfoLog(b)},
aI:function(a,b,c){return a.getProgramParameter(b,c)},
cE:function(a,b){return a.getShaderInfoLog(b)},
cF:function(a,b,c){return a.getShaderParameter(b,c)},
cG:function(a,b,c){return a.getUniformLocation(b,c)},
fj:function(a,b){return a.linkProgram(b)},
cO:function(a,b,c){return a.shaderSource(b,c)},
cp:function(a,b,c){return a.uniform1f(b,c)},
cq:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fW:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cs:function(a,b){return a.useProgram(b)},
fX:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fY:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibt:1}
P.da.prototype={$ida:1}
P.dj.prototype={$idj:1}
P.hb.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return P.aT(this.du(a,b))},
v:function(a,b){return this.m(a,b)},
du:function(a,b){return a.item(b)},
$at:function(){return[[P.F,,,]]},
$ii:1,
$ai:function(){return[[P.F,,,]]},
$ib:1,
$ab:function(){return[[P.F,,,]]},
$av:function(){return[[P.F,,,]]}}
P.dW.prototype={}
P.dX.prototype={}
O.aY.prototype={
cL:function(a,b,c){var u={func:1,ret:-1,args:[P.y,[P.i,H.u(this,0)]]}
H.j(a,u)
H.j(c,u)
this.sbH(b)
this.sbG(a)
this.sbI(c)},
bh:function(a,b){return this.cL(a,null,b)},
e6:function(a){H.r(a,"$ii",this.$ti,"$ai")
return!0},
dD:function(a,b){var u
H.r(b,"$ii",this.$ti,"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gH:function(a){var u=this.a
return new J.aj(u,u.length,0,[H.u(u,0)])},
v:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
sdB:function(a){this.a=H.r(a,"$ib",this.$ti,"$ab")},
sbH:function(a){this.b=H.j(a,{func:1,ret:P.K,args:[[P.i,H.u(this,0)]]})},
sbG:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.y,[P.i,H.u(this,0)]]})},
sbI:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.y,[P.i,H.u(this,0)]]})},
$ii:1}
O.bZ.prototype={
gk:function(a){return this.a.length},
gA:function(){var u=this.b
if(u==null){u=D.aO()
this.b=u}return u},
d0:function(a){var u=this.b
if(u!=null)u.T(a)},
a9:function(){return this.d0(null)},
gar:function(a){var u=this.a
if(u.length>0)return C.a.gaE(u)
else return V.jY()},
cd:function(a){var u=this.a
if(a==null)C.a.h(u,V.jY())
else C.a.h(u,a)
this.a9()},
bb:function(){var u=this.a
if(u.length>0){u.pop()
this.a9()}},
saU:function(a){this.a=H.r(a,"$ib",[V.b7],"$ab")}}
E.et.prototype={}
E.a1.prototype={
sbj:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gA().I(0,this.gc8())
t=this.c
if(t!=null)t.gA().h(0,this.gc8())
s=new D.P("shape",u,this.c,this,[F.db])
s.b=!0
this.W(s)}},
sas:function(a){var u,t
if(!J.S(this.r,a)){u=this.r
if(u!=null)u.gA().I(0,this.gc6())
if(a!=null)a.gA().h(0,this.gc6())
this.r=a
t=new D.P("mover",u,a,this,[U.c_])
t.b=!0
this.W(t)}},
cr:function(a,b){var u,t,s,r,q,p,o,n
u=this.r
if(u!=null){t=u.r
s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sct(u.a+u.d*b.y)
u.scb(0,u.b+u.e*b.y)
u.scg(u.c+u.f*b.y)
t=u.c
r=Math.cos(t)
q=Math.sin(t)
t=V.b8(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)
s=u.b
r=Math.cos(s)
q=Math.sin(s)
t=t.K(0,V.b8(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))
s=u.a
r=Math.cos(s)
q=Math.sin(s)
u.x=t.K(0,V.b8(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1))
t=u.y
if(t!=null)t.aG(0)}p=u.x}else p=null
if(!J.S(p,this.x)){o=this.x
this.x=p
n=new D.P("matrix",o,p,this,[V.b7])
n.b=!0
this.W(n)}for(u=this.y.a,u=new J.aj(u,u.length,0,[H.u(u,0)]);u.q();)u.d.cr(0,b)},
aj:function(a){var u,t,s,r,q,p,o,n,m
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gar(u))
else C.a.h(u.a,t.K(0,u.gar(u)))
u.a9()
a.ce(this.f)
u=a.dy
s=(u&&C.a).gaE(u)
if(s!=null&&this.d!=null){u=s.a
if(u==null){r=a.fr.m(0,"Depth")
if(r==null){u=a.a
r=new A.eG(u,"Depth")
r.cZ(u,"Depth")
t=$.lf
q=$.le
r.c=t
r.d=q
r.e=r.bC(t,35633)
r.f=r.bC(r.d,35632)
t=u.createProgram()
r.r=t
C.b.bR(u,t,r.e)
C.b.bR(u,r.r,r.f)
C.b.fj(u,r.r)
if(!H.jr(C.b.aI(u,r.r,35714))){p=C.b.cD(u,r.r)
C.b.f_(u,r.r)
H.a0(P.a2("Failed to link shader: "+H.h(p)))}r.eu()
r.ew()
r.z=r.x.m(0,"posAttr")
r.Q=H.bC(r.y.m(0,"objClr"),"$icd")
r.ch=H.bC(r.y.m(0,"fogClr"),"$icd")
r.cx=H.bC(r.y.m(0,"fogStart"),"$icc")
r.cy=H.bC(r.y.m(0,"fogStop"),"$icc")
r.db=H.bC(r.y.m(0,"viewObjMat"),"$ice")
r.dx=H.bC(r.y.m(0,"projMat"),"$ice")
if(a.fr.bW(0,"Depth"))H.a0(P.a2('Shader cache already contains a shader by the name "Depth".'))
a.fr.J(0,"Depth",r)}s.a=r
u=r}t=this.e
if(!(t instanceof Z.cF)){this.e=null
t=null}if(t==null){u=this.d.eO(new Z.i4(a.a),$.aU())
t=u.f7($.aU())
q=s.a
t.e=q.z.c
this.e=u
u=q}t=a.a
C.b.cs(t,u.r)
u.x.f6()
q=s.b
o=u.Q
o.toString
n=q.a
m=q.b
q=q.c
C.b.cq(o.a,o.d,n,m,q)
q=s.c
m=u.ch
m.toString
n=q.a
o=q.b
q=q.c
C.b.cq(m.a,m.d,n,o,q)
q=s.d
o=u.cx
C.b.cp(o.a,o.d,q)
q=s.e
o=u.cy
C.b.cp(o.a,o.d,q)
q=a.cy
q=q.gar(q)
o=u.dx
o.toString
o.bi(q.cl(0,!0))
q=a.cx
if(q==null){q=a.db
q=q.gar(q)
o=a.dx
o=q.K(0,o.gar(o))
a.cx=o
q=o}u=u.db
u.toString
u.bi(q.cl(0,!0))
q=this.e
q.b2(a)
q.aj(a)
q.fV(a)
q=s.a
q.toString
C.b.cs(t,null)
q.x.f4()}for(u=this.y.a,u=new J.aj(u,u.length,0,[H.u(u,0)]);u.q();)u.d.aj(a)
a.cc()
a.dx.bb()},
W:function(a){var u=this.z
if(u!=null)u.T(a)},
V:function(){return this.W(null)},
c9:function(a){H.n(a,"$iD")
this.e=null
this.W(a)},
fv:function(){return this.c9(null)},
c7:function(a){this.W(H.n(a,"$iD"))},
fu:function(){return this.c7(null)},
c5:function(a){this.W(H.n(a,"$iD"))},
fq:function(){return this.c5(null)},
fp:function(a,b){var u,t,s,r,q,p,o
H.r(b,"$ii",[E.a1],"$ai")
for(u=b.length,t=this.gc4(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bV()
o.sad(null)
o.san(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sad(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.V()},
ft:function(a,b){var u,t
H.r(b,"$ii",[E.a1],"$ai")
for(u=b.gH(b),t=this.gc4();u.q();)u.gB(u).gA().I(0,t)
this.V()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sdd:function(a,b){this.y=H.r(b,"$iaY",[E.a1],"$aaY")},
$ijZ:1}
E.fT.prototype={
cX:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.b1(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bZ()
t=[V.b7]
u.saU(H.c([],t))
u.b=null
u.gA().h(0,new E.fU(this))
this.cy=u
u=new O.bZ()
u.saU(H.c([],t))
u.b=null
u.gA().h(0,new E.fV(this))
this.db=u
u=new O.bZ()
u.saU(H.c([],t))
u.b=null
u.gA().h(0,new E.fW(this))
this.dx=u
this.seA(H.c([],[O.bw]))
u=this.dy;(u&&C.a).h(u,null)
this.sex(new H.ax([P.e,A.c5]))},
ce:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaE(u):a;(u&&C.a).h(u,t)},
cc:function(){var u=this.dy
if(u.length>1)u.pop()},
seA:function(a){this.dy=H.r(a,"$ib",[O.bw],"$ab")},
sex:function(a){this.fr=H.r(a,"$iF",[P.e,A.c5],"$aF")}}
E.fU.prototype={
$1:function(a){var u
H.n(a,"$iD")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.fV.prototype={
$1:function(a){var u
H.n(a,"$iD")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.fW.prototype={
$1:function(a){var u
H.n(a,"$iD")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.dg.prototype={
bo:function(a){H.n(a,"$iD")
this.cf()},
bn:function(){return this.bo(null)},
gfd:function(){var u,t,s
u=Date.now()
t=C.h.ag(P.jP(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.b1(u,!1)
return s/t},
bK:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.K()
if(typeof u!=="number")return H.bg(u)
s=C.c.c1(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.K()
r=C.c.c1(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kc(C.l,this.gfL())}},
cf:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.hp(this),{func:1,ret:-1,args:[P.T]})
C.z.dj(u)
C.z.em(u,W.kw(t,P.T))}},
fK:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.bK()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.b1(r,!1)
s.y=P.jP(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.a9()
r=s.db
C.a.sk(r.a,0)
r.a9()
r=s.dx
C.a.sk(r.a,0)
r.a9()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aj(this.e)}s=this.z
if(s!=null)s.T(null)}catch(q){u=H.aa(q)
t=H.bB(q)
P.jA("Error: "+H.h(u))
P.jA("Stack: "+H.h(t))
throw H.f(u)}}}
E.hp.prototype={
$1:function(a){var u
H.mm(a)
u=this.a
if(u.ch){u.ch=!1
u.fK()}},
$S:30}
Z.dp.prototype={$imv:1}
Z.cE.prototype={
b2:function(a){var u,t,s
try{t=a.a
C.b.c0(t,this.e)
C.b.fX(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aa(s)
t=P.a2('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.h(u))
throw H.f(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.h(this.e)+"]"}}
Z.i4.prototype={$imw:1}
Z.cF.prototype={
f7:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b2:function(a){var u,t
u=this.a
C.b.a0(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].b2(a)},
fV:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.bY(s,u[t].e)
C.b.a0(s,this.a.a,null)},
aj:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.k(r,s)
q=r[s]
r=q.c
p=r.a
C.b.a0(t,p,r.b)
C.b.f5(t,q.a,q.b,5123,0)
C.b.a0(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.H)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ao(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
sdt:function(a){this.b=H.r(a,"$ib",[Z.bX],"$ab")},
$imE:1}
Z.bX.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.br(this.c)+"'")+"]"}}
Z.dn.prototype={
gbk:function(a){var u,t
u=this.a
t=(u&$.aU().a)!==0?3:0
if((u&$.bH().a)!==0)t+=3
if((u&$.bG().a)!==0)t+=3
if((u&$.bI().a)!==0)t+=2
if((u&$.bJ().a)!==0)t+=3
if((u&$.cw().a)!==0)t+=3
if((u&$.cx().a)!==0)t+=4
if((u&$.bK().a)!==0)++t
return(u&$.bF().a)!==0?t+4:t},
eJ:function(a){var u,t,s
u=$.aU()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bH()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bG()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bI()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bJ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cw()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bK()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bF()
if((t&u.a)!==0)if(s===a)return u
return $.kX()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.dn))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.e])
t=this.a
if((t&$.aU().a)!==0)C.a.h(u,"Pos")
if((t&$.bH().a)!==0)C.a.h(u,"Norm")
if((t&$.bG().a)!==0)C.a.h(u,"Binm")
if((t&$.bI().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bJ().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cw().a)!==0)C.a.h(u,"Clr3")
if((t&$.cx().a)!==0)C.a.h(u,"Clr4")
if((t&$.bK().a)!==0)C.a.h(u,"Weight")
if((t&$.bF().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.ew.prototype={}
D.bV.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.D]}
H.j(b,u)
if(this.a==null)this.sad(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
I:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[D.D]})
u=this.a
u=u==null?null:C.a.M(u,b)
if(u===!0){u=this.a
t=(u&&C.a).I(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.M(u,b)
if(u===!0){u=this.b
t=(u&&C.a).I(u,b)||t}return t},
T:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.D(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.F(P.jV(t,!0,{func:1,ret:-1,args:[D.D]}),new D.eR(u))
t=this.b
if(t!=null){this.san(H.c([],[{func:1,ret:-1,args:[D.D]}]))
C.a.F(t,new D.eS(u))}return!0},
fM:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.T(t)}}},
aG:function(a){return this.fM(a,!0,!1)},
sad:function(a){this.a=H.r(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")},
san:function(a){this.b=H.r(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")}}
D.eR.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.eS.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.D.prototype={}
D.f8.prototype={}
D.f9.prototype={}
D.P.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.cG.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cG))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.cU.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cU))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.fh.prototype={
fD:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
fz:function(a){this.c=a.b
this.d.I(0,a.a)
return!1},
sed:function(a){this.d=H.r(a,"$ik8",[P.y],"$ak8")}}
X.fn.prototype={
ba:function(a,b){this.r=a.a
return!1},
au:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.cJ()
if(typeof u!=="number")return u.cu()
this.r=(u&~t)>>>0
return!1},
at:function(a,b){return!1},
fE:function(a){return!1},
dW:function(a,b,c){return}}
X.aQ.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aQ))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.fz.prototype={
ba:function(a,b){this.f=a.a
return!1},
au:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.cJ()
if(typeof u!=="number")return u.cu()
this.f=(u&~t)>>>0
return!1},
at:function(a,b){return!1},
fF:function(a,b){return!1}}
X.ht.prototype={
fC:function(a){H.r(a,"$ib",[V.a4],"$ab")
return!1},
fA:function(a){H.r(a,"$ib",[V.a4],"$ab")
return!1},
fB:function(a){H.r(a,"$ib",[V.a4],"$ab")
return!1}}
X.dm.prototype={
bB:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cU(u,new X.aQ(t,a.altKey,a.shiftKey))},
af:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aQ(t,a.altKey,a.shiftKey)},
b1:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aQ(t,a.altKey,a.shiftKey)},
a4:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=u.top
if(typeof s!=="number")return s.u()
return new V.a4(t-r,s-q)},
ao:function(a){return new V.aI(a.movementX,a.movementY)},
aZ:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.a4])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.H)(s),++q){p=s[q]
o=C.c.X(p.pageX)
C.c.X(p.pageY)
n=u.left
C.c.X(p.pageX)
C.a.h(t,new V.a4(o-n,C.c.X(p.pageY)-u.top))}return t},
a3:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cG(u,new X.aQ(t,a.altKey,a.shiftKey))},
aV:function(a){var u,t,s,r,q,p
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
dR:function(a){this.f=!0},
dF:function(a){this.f=!1},
dL:function(a){H.n(a,"$iW")
if(this.f&&this.aV(a))a.preventDefault()},
dV:function(a){var u
H.n(a,"$iay")
if(!this.f)return
u=this.bB(a)
this.b.fD(u)},
dT:function(a){var u
H.n(a,"$iay")
if(!this.f)return
u=this.bB(a)
this.b.fz(u)},
dY:function(a){var u,t,s,r
H.n(a,"$iW")
u=this.a
u.focus()
this.f=!0
this.af(a)
if(this.x){t=this.a3(a)
s=this.ao(a)
if(this.d.ba(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.a3(a)
r=this.a4(a)
if(this.c.ba(t,r))a.preventDefault()},
e1:function(a){var u,t,s
H.n(a,"$iW")
this.af(a)
u=this.a3(a)
if(this.x){t=this.ao(a)
if(this.d.au(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.au(u,s))a.preventDefault()},
dP:function(a){var u,t,s
H.n(a,"$iW")
if(!this.aV(a)){this.af(a)
u=this.a3(a)
if(this.x){t=this.ao(a)
if(this.d.au(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.au(u,s))a.preventDefault()}},
e_:function(a){var u,t,s
H.n(a,"$iW")
this.af(a)
u=this.a3(a)
if(this.x){t=this.ao(a)
if(this.d.at(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.at(u,s))a.preventDefault()},
dN:function(a){var u,t,s
H.n(a,"$iW")
if(!this.aV(a)){this.af(a)
u=this.a3(a)
if(this.x){t=this.ao(a)
if(this.d.at(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.at(u,s))a.preventDefault()}},
e3:function(a){var u,t
H.n(a,"$iaJ")
this.af(a)
u=new V.aI((a&&C.y).gf1(a),C.y.gf2(a)).L(0,180)
if(this.x){if(this.d.fE(u))a.preventDefault()
return}if(this.r)return
t=this.a4(a)
if(this.c.fF(u,t))a.preventDefault()},
e5:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.a3(this.y)
s=this.a4(this.y)
this.d.dW(t,s,u)}},
ec:function(a){var u
H.n(a,"$iam")
this.a.focus()
this.f=!0
this.b1(a)
u=this.aZ(a)
if(this.e.fC(u))a.preventDefault()},
e8:function(a){var u
H.n(a,"$iam")
this.b1(a)
u=this.aZ(a)
if(this.e.fA(u))a.preventDefault()},
ea:function(a){var u
H.n(a,"$iam")
this.b1(a)
u=this.aZ(a)
if(this.e.fB(u))a.preventDefault()},
sdk:function(a){this.z=H.r(a,"$ib",[[P.c8,P.E]],"$ab")}}
V.aZ.prototype={
u:function(a,b){var u,t,s
u=C.c.u(this.a,b.gfG())
t=C.c.u(this.b,b.gcH())
s=C.c.u(this.c,b.geN())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.aZ(u,t,s)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aZ))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.b_.prototype={
u:function(a,b){var u,t,s,r
u=C.c.u(this.a,b.gfG())
t=C.c.u(this.b,b.gcH())
s=C.c.u(this.c,b.geN())
r=C.c.u(this.d,b.gh2(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.b_(u,t,s,r)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b_))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}}
V.eP.prototype={}
V.b7.prototype={
cl:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return u},
K:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.b8(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b7))return!1
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
i:function(a){return this.G()},
c2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.w]
t=V.iU(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.iU(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.iU(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.iU(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
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
G:function(){return this.c2("",3,0)},
t:function(a){return this.c2(a,3,0)}}
V.a4.prototype={
u:function(a,b){return new V.a4(C.c.u(this.a,b.gh7(b)),C.c.u(this.b,b.gh8(b)))},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.ac.prototype={
u:function(a,b){return new V.ac(this.a-b.a,this.b-b.b,this.c-b.c)},
K:function(a,b){return new V.ac(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.d8.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d8))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}}
V.aI.prototype={
b8:function(a){var u,t
u=this.a
if(typeof u!=="number")return u.K()
t=this.b
if(typeof t!=="number")return t.K()
return Math.sqrt(u*u+t*t)},
u:function(a,b){var u,t,s
u=this.a
t=b.gh3(b)
if(typeof u!=="number")return u.u()
t=C.c.u(u,t)
u=this.b
s=b.gh4(b)
if(typeof u!=="number")return u.u()
return new V.aI(t,C.c.u(u,s))},
L:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.kg
if(u==null){u=new V.aI(0,0)
$.kg=u}return u}u=this.a
if(typeof u!=="number")return u.L()
t=this.b
if(typeof t!=="number")return t.L()
return new V.aI(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aI))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.bg(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.bg(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.R.prototype={
b8:function(a){return Math.sqrt(this.N(this))},
N:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aq:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.R(u*t-s*r,s*q-p*t,p*r-u*q)},
R:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
aJ:function(a){return new V.R(-this.a,-this.b,-this.c)},
K:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
L:function(a,b){if(Math.abs(b-0)<$.O().a)return V.hT()
return new V.R(this.a/b,this.b/b,this.c/b)},
fh:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
U.cI.prototype={
gA:function(){var u=this.b
if(u==null){u=D.aO()
this.b=u}return u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cI))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.t("          ")}}
U.c_.prototype={}
U.d9.prototype={
gA:function(){var u=this.y
if(u==null){u=D.aO()
this.y=u}return u},
ae:function(a){var u=this.y
if(u!=null)u.T(a)},
sct:function(a){var u
a=V.jC(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.O().a)){this.a=a
u=new D.P("yaw",u,a,this,[P.w])
u.b=!0
this.ae(u)}},
scb:function(a,b){var u
b=V.jC(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.O().a)){this.b=b
u=new D.P("pitch",u,b,this,[P.w])
u.b=!0
this.ae(u)}},
scg:function(a){var u
a=V.jC(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.O().a)){this.c=a
u=new D.P("roll",u,a,this,[P.w])
u.b=!0
this.ae(u)}},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d9))return!1
u=this.a
t=b.a
s=$.O().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"], ["+V.G(this.d,3,0)+", "+V.G(this.e,3,0)+", "+V.G(this.f,3,0)+"]"}}
M.cN.prototype={
a2:function(a){var u
H.n(a,"$iD")
u=this.x
if(u!=null)u.T(a)},
d3:function(){return this.a2(null)},
dH:function(a,b){var u,t,s,r,q,p,o,n
u=E.a1
H.r(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gY(),r={func:1,ret:-1,args:[D.D]},q=[r],p=0;p<b.length;b.length===t||(0,H.H)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bV()
n.sad(null)
n.san(null)
n.c=null
n.d=0
o.z=n}H.j(s,r)
if(n.a==null)n.sad(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.f8(a,b,this,[u])
u.b=!0
this.a2(u)},
dJ:function(a,b){var u,t,s
u=E.a1
H.r(b,"$ii",[u],"$ai")
for(t=b.gH(b),s=this.gY();t.q();)t.gB(t).gA().I(0,s)
u=new D.f9(a,b,this,[u])
u.b=!0
this.a2(u)},
scj:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gA().I(0,this.gY())
t=this.c
this.c=a
if(a!=null)a.gA().h(0,this.gY())
u=new D.P("technique",t,this.c,this,[O.bw])
u.b=!0
this.a2(u)}},
gA:function(){var u=this.x
if(u==null){u=D.aO()
this.x=u}return u},
aj:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.ce(this.c)
u=this.b
u.toString
t=a1.a
C.b.eM(t,36160,null)
C.b.c_(t,2884)
C.b.c_(t,2929)
C.b.f3(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.bg(s)
o=C.c.X(p*s)
p=q.b
if(typeof r!=="number")return H.bg(r)
n=C.c.X(p*r)
p=C.c.X(q.c*s)
a1.c=p
q=C.c.X(q.d*r)
a1.d=q
C.b.fY(t,o,n,p,q)
C.b.eR(t,u.c)
u=u.a
C.b.eQ(t,u.a,u.b,u.c,u.d)
C.b.eP(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b8(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.cd(i)
t=$.k1
if(t==null){t=$.k3
if(t==null){t=new V.ac(0,0,0)
$.k3=t}q=$.kj
if(q==null){q=new V.R(0,1,0)
$.kj=q}p=$.kh
if(p==null){p=new V.R(0,0,-1)
$.kh=p}h=p.L(0,Math.sqrt(p.N(p)))
q=q.aq(h)
g=q.L(0,Math.sqrt(q.N(q)))
f=h.aq(g)
e=new V.R(t.a,t.b,t.c)
d=g.aJ(0).N(e)
c=f.aJ(0).N(e)
b=h.aJ(0).N(e)
t=V.b8(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.k1=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.K(0,a)}a1.db.cd(a)
for(u=this.d.a,u=new J.aj(u,u.length,0,[H.u(u,0)]);u.q();)u.d.cr(0,a1)
for(u=this.d.a,u=new J.aj(u,u.length,0,[H.u(u,0)]);u.q();)u.d.aj(a1)
this.a.toString
a1.cy.bb()
a1.db.bb()
this.b.toString
a1.cc()},
sd2:function(a,b){this.d=H.r(b,"$iaY",[E.a1],"$aaY")},
$imC:1}
A.cB.prototype={}
A.eo.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
f6:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
C.b.c0(r.a,r.c)}},
f4:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
C.b.bY(r.a,r.c)}}}
A.eG.prototype={}
A.c5.prototype={
cZ:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bC:function(a,b){var u,t,s
u=this.a
t=C.b.eY(u,b)
C.b.cO(u,t,a)
C.b.eS(u,t)
if(!H.jr(C.b.cF(u,t,35713))){s=C.b.cE(u,t)
C.b.f0(u,t)
throw H.f(P.a2("Error compiling shader '"+H.h(t)+"': "+H.h(s)))}return t},
eu:function(){var u,t,s,r,q,p
u=H.c([],[A.cB])
t=this.a
s=H.Y(C.b.aI(t,this.r,35721))
if(typeof s!=="number")return H.bg(s)
r=0
for(;r<s;++r){q=C.b.cv(t,this.r,r)
p=C.b.cz(t,this.r,q.name)
C.a.h(u,new A.cB(t,q.name,p))}this.x=new A.eo(u)},
ew:function(){var u,t,s,r,q,p
u=H.c([],[A.di])
t=this.a
s=H.Y(C.b.aI(t,this.r,35718))
if(typeof s!=="number")return H.bg(s)
r=0
for(;r<s;++r){q=C.b.cw(t,this.r,r)
p=C.b.cG(t,this.r,q.name)
C.a.h(u,this.eZ(q.type,q.size,q.name,p))}this.y=new A.hI(u)},
ac:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.hB(u,t,b,c)
else return A.ji(u,t,b,a,c)},
dg:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.hL(u,t,b,c)
else return A.ji(u,t,b,a,c)},
dh:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.hM(u,t,b,c)
else return A.ji(u,t,b,a,c)},
aB:function(a,b){return new P.dy(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
eZ:function(a,b,c,d){switch(a){case 5120:return this.ac(b,c,d)
case 5121:return this.ac(b,c,d)
case 5122:return this.ac(b,c,d)
case 5123:return this.ac(b,c,d)
case 5124:return this.ac(b,c,d)
case 5125:return this.ac(b,c,d)
case 5126:return new A.cc(this.a,this.r,c,d)
case 35664:return new A.hD(this.a,this.r,c,d)
case 35665:return new A.cd(this.a,this.r,c,d)
case 35666:return new A.hG(this.a,this.r,c,d)
case 35667:return new A.hE(this.a,this.r,c,d)
case 35668:return new A.hF(this.a,this.r,c,d)
case 35669:return new A.hH(this.a,this.r,c,d)
case 35674:return new A.hJ(this.a,this.r,c,d)
case 35675:return new A.hK(this.a,this.r,c,d)
case 35676:return new A.ce(this.a,this.r,c,d)
case 35678:return this.dg(b,c,d)
case 35680:return this.dh(b,c,d)
case 35670:throw H.f(this.aB("BOOL",c))
case 35671:throw H.f(this.aB("BOOL_VEC2",c))
case 35672:throw H.f(this.aB("BOOL_VEC3",c))
case 35673:throw H.f(this.aB("BOOL_VEC4",c))
default:throw H.f(P.a2("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.di.prototype={}
A.hI.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.G()},
fc:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.H)(u),++r)s+=u[r].i(0)+a
return s},
G:function(){return this.fc("\n")}}
A.hB.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.hE.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.hF.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.hH.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.hC.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
seD:function(a){this.e=H.r(a,"$ib",[P.y],"$ab")}}
A.cc.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.hD.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.cd.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.hG.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.hJ.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.hK.prototype={
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.ce.prototype={
bi:function(a){var u=new Float32Array(H.jm(H.r(a,"$ib",[P.w],"$ab")))
C.b.fW(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.hL.prototype={
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.hM.prototype={
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.j4.prototype={
$1:function(a){return new V.ac(Math.cos(a),Math.sin(a),0)},
$S:33}
F.iS.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.jG(t.$1(u),s)
s=J.l_(J.jG(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.R(s.a,s.b,s.c)
q=s.L(0,Math.sqrt(s.N(s)))
t=$.ki
if(t==null){t=new V.R(1,0,0)
$.ki=t
p=t}else p=t
if(!J.S(q,p)){t=$.kk
if(t==null){t=new V.R(0,0,1)
$.kk=t
p=t}else p=t}t=q.aq(p)
o=t.L(0,Math.sqrt(t.N(t)))
t=o.aq(q)
p=t.L(0,Math.sqrt(t.N(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.K(0,t*s)
s=o.K(0,m*s)
s=new V.ac(r.a+(t.a-s.a),r.b+(t.b-s.b),r.c+(t.c-s.c))
if(!J.S(a.f,s)){a.f=s
t=a.a
if(t!=null)t.V()}},
$S:34}
F.U.prototype={
aD:function(){if(!this.gbZ()){C.a.I(this.a.a.d.b,this)
this.a.a.V()}this.ei()
this.ej()
this.ek()},
eq:function(a){this.a=a
C.a.h(a.d.b,this)},
er:function(a){this.b=a
C.a.h(a.d.c,this)},
es:function(a){this.c=a
C.a.h(a.d.d,this)},
ei:function(){var u=this.a
if(u!=null){C.a.I(u.d.b,this)
this.a=null}},
ej:function(){var u=this.b
if(u!=null){C.a.I(u.d.c,this)
this.b=null}},
ek:function(){var u=this.c
if(u!=null){C.a.I(u.d.d,this)
this.c=null}},
gbZ:function(){return this.a==null||this.b==null||this.c==null},
da:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.hT()
if(t!=null)q=q.R(0,t)
if(s!=null)q=q.R(0,s)
if(r!=null)q=q.R(0,r)
if(q.fh())return
return q.L(0,Math.sqrt(q.N(q)))},
dc:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.u(0,t)
u=new V.R(u.a,u.b,u.c)
q=u.L(0,Math.sqrt(u.N(u)))
u=r.u(0,t)
u=new V.R(u.a,u.b,u.c)
u=q.aq(u.L(0,Math.sqrt(u.N(u))))
return u.L(0,Math.sqrt(u.N(u)))},
b4:function(){if(this.d!=null)return!0
var u=this.da()
if(u==null){u=this.dc()
if(u==null)return!1}this.d=u
this.a.a.V()
return!0},
gbV:function(a){if(J.S(this.a,this.b))return!0
if(J.S(this.b,this.c))return!0
if(J.S(this.c,this.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
t:function(a){var u,t
if(this.gbZ())return a+"disposed"
u=a+C.d.a6(J.ao(this.a.e),0)+", "+C.d.a6(J.ao(this.b.e),0)+", "+C.d.a6(J.ao(this.c.e),0)+" {"
t=this.d
u=(t!=null?u+(t.i(0)+", "):u+"-, ")+"-}"
return u},
G:function(){return this.t("")}}
F.eU.prototype={}
F.h8.prototype={
b9:function(a,b,c){var u,t
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
F.b6.prototype={}
F.fj.prototype={}
F.hA.prototype={}
F.bp.prototype={}
F.db.prototype={
gA:function(){var u=this.e
if(u==null){u=D.aO()
this.e=u}return u},
fn:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.c(u.slice(0),[H.u(u,0)])
for(u=[F.af];t.length!==0;){s=C.a.gf9(t)
C.a.fI(t,0)
if(s!=null){r=H.c([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.H)(t),++p){o=t[p]
if(o!=null&&a.b9(0,s,o)){C.a.h(r,o)
C.a.I(t,o)}}if(r.length>1)b.fm(r)}}this.a.E()
this.c.bc()
this.d.bc()
this.b.fJ()
this.c.bd(new F.hA())
this.d.bd(new F.h8())
u=this.e
if(u!=null)u.aG(0)},
eO:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aU()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bH().a)!==0)++r
if((s&$.bG().a)!==0)++r
if((s&$.bI().a)!==0)++r
if((s&$.bJ().a)!==0)++r
if((s&$.cw().a)!==0)++r
if((s&$.cx().a)!==0)++r
if((s&$.bK().a)!==0)++r
if((s&$.bF().a)!==0)++r
q=a1.gbk(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.w
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.cE])
for(m=0,l=0;l<r;++l){k=a1.eJ(l)
j=k.gbk(k)
C.a.J(n,l,new Z.cE(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.k(t,i)
h=t[i].fk(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.J(o,g,h[f]);++g}}m+=j}H.r(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.a0(t,34962,e)
C.b.bT(t,34962,new Float32Array(H.jm(o)),35044)
C.b.a0(t,34962,null)
d=new Z.cF(new Z.dp(34962,e),n,a1)
d.sdt(H.c([],[Z.bX]))
this.b.b
this.c.b
if(this.d.b.length!==0){s=P.y
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].c
b.a.a.E()
C.a.h(c,b.e)}a=Z.lI(t,34963,H.r(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bX(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.t("   "))}this.b.b
this.c.b
if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.t("   "))}return C.a.l(u,"\n")},
W:function(a){var u=this.e
if(u!=null)u.T(a)},
V:function(){return this.W(null)},
$imD:1}
F.h1.prototype={
eG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.r(c,"$ib",[F.af],"$ab")
u=H.c([],[F.U])
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
C.a.h(u,F.eT(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.eT(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.eT(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.eT(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
bd:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.k(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.m(0,q)
for(o=q-1;o>=0;--o){n=r.d.m(0,o)
if(a.b9(0,p,n)){p.aD()
break}}}}},
bc:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.k(t,u)
s=t[u]
t=s.gbV(s)
if(t)s.aD()}},
b5:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.H)(u),++r)if(!u[r].b4())s=!1
return s},
i:function(a){return this.G()},
t:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)C.a.h(u,t[r].t(a))
return C.a.l(u,"\n")},
G:function(){return this.t("")},
sdl:function(a){this.b=H.r(a,"$ib",[F.U],"$ab")}}
F.h2.prototype={
gk:function(a){return 0},
bd:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.k(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.m(0,q)}},
bc:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.k(t,u)
s=t[u]
t=s.gbV(s)
if(t)s.aD()}},
i:function(a){return this.G()},
t:function(a){var u,t,s
u=H.c([],[P.e])
for(t=0;!1;++t){s=this.b
if(t>=0)return H.k(s,t)
C.a.h(u,s[t].t(a+(""+t+". ")))}return C.a.l(u,"\n")},
G:function(){return this.t("")},
sdw:function(a){this.b=H.r(a,"$ib",[F.b6],"$ab")}}
F.h3.prototype={
gk:function(a){return 0},
fJ:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.k(t,u)
t=t[u].gh6()
t=t.gh5(t)
if(t.gk(t).h_(0,1)){t=this.b
return H.k(t,u)
t[u].aD()}}},
i:function(a){return this.G()},
t:function(a){var u,t,s
u=H.c([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.k(t,s)
C.a.h(u,t[s].t(a))}return C.a.l(u,"\n")},
G:function(){return this.t("")},
saY:function(a){this.b=H.r(a,"$ib",[F.bp],"$ab")}}
F.af.prototype={
bX:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.jj(this.cx,s,p,u,t,r,q,a,o)},
fk:function(a){var u,t
if(a.n(0,$.aU())){u=this.f
t=[P.w]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bH())){u=this.r
t=[P.w]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bG())){u=H.c([0,0,1],[P.w])
return u}else if(a.n(0,$.bI())){u=this.y
t=[P.w]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.bJ())){u=H.c([0,0,0],[P.w])
return u}else if(a.n(0,$.cw())){u=this.Q
t=[P.w]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cx())){u=this.Q
t=[P.w]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bK()))return H.c([this.ch],[P.w])
else if(a.n(0,$.bF())){u=H.c([-1,-1,-1,-1],[P.w])
return u}else return H.c([],[P.w])},
b4:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.hT()
this.d.F(0,new F.i2(u))
u=u.a
this.r=u.L(0,Math.sqrt(u.N(u)))
u=this.a
if(u!=null){u.V()
u=this.a.e
if(u!=null)u.aG(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
t:function(a){var u,t,s
u=H.c([],[P.e])
C.a.h(u,C.d.a6(J.ao(this.e),0))
t=this.f
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.r
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,"-")
t=this.y
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,"-")
t=this.Q
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,V.G(this.ch,3,0))
C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
G:function(){return this.t("")}}
F.i2.prototype={
$1:function(a){var u,t
H.n(a,"$iU")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.R(0,u)}},
$S:9}
F.hU.prototype={
E:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.k(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.f(P.a2("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.V()
return!0},
gk:function(a){return this.c.length},
b5:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)u[s].b4()
return!0},
i:function(a){return this.G()},
t:function(a){var u,t,s,r
this.E()
u=H.c([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)C.a.h(u,t[r].t(a))
return C.a.l(u,"\n")},
G:function(){return this.t("")},
seE:function(a){this.c=H.r(a,"$ib",[F.af],"$ab")}}
F.hV.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
m:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.k(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.k(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
F:function(a,b){H.j(b,{func:1,ret:-1,args:[F.U]})
C.a.F(this.b,b)
C.a.F(this.c,new F.hW(this,b))
C.a.F(this.d,new F.hX(this,b))},
i:function(a){return this.G()},
t:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)C.a.h(u,t[r].t(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)C.a.h(u,t[r].t(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)C.a.h(u,t[r].t(a))
return C.a.l(u,"\n")},
G:function(){return this.t("")},
sdm:function(a){this.b=H.r(a,"$ib",[F.U],"$ab")},
sdn:function(a){this.c=H.r(a,"$ib",[F.U],"$ab")},
sdq:function(a){this.d=H.r(a,"$ib",[F.U],"$ab")}}
F.hW.prototype={
$1:function(a){H.n(a,"$iU")
if(!J.S(a.a,this.a))this.b.$1(a)},
$S:9}
F.hX.prototype={
$1:function(a){var u
H.n(a,"$iU")
u=this.a
if(!J.S(a.a,u)&&!J.S(a.b,u))this.b.$1(a)},
$S:9}
F.hY.prototype={
gk:function(a){return 0},
m:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.k(u,t)
return u[t]}else{u=this.b
return H.k(u,b)
return u[b]}},
i:function(a){return this.G()},
t:function(a){var u,t,s
u=H.c([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.k(t,s)
C.a.h(u,t[s].t(a))}for(t=this.c,s=0;!1;++s){if(s>=0)return H.k(t,s)
C.a.h(u,t[s].t(a))}return C.a.l(u,"\n")},
G:function(){return this.t("")},
sdz:function(a){this.b=H.r(a,"$ib",[F.b6],"$ab")},
sdA:function(a){this.c=H.r(a,"$ib",[F.b6],"$ab")}}
F.i_.prototype={}
F.hZ.prototype={
b9:function(a,b,c){return J.S(b.f,c.f)}}
F.i0.prototype={}
F.fI.prototype={
fm:function(a){var u,t,s,r,q,p,o,n,m
H.r(a,"$ib",[F.af],"$ab")
u=V.hT()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.R(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.L(0,Math.sqrt(u.N(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.H)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.L(0,Math.sqrt(o*o+n*n+m*m))}if(!J.S(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.T(null)}}}return}}
F.i1.prototype={
gk:function(a){return 0},
i:function(a){return this.G()},
t:function(a){var u,t,s
u=H.c([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.k(t,s)
C.a.h(u,t[s].t(a))}return C.a.l(u,"\n")},
G:function(){return this.t("")},
saY:function(a){this.b=H.r(a,"$ib",[F.bp],"$ab")}}
O.eF.prototype={
gA:function(){var u=this.f
if(u==null){u=D.aO()
this.f=u}return u},
ax:function(a){var u=this.f
if(u!=null)u.T(a)}}
O.bw.prototype={}
T.ho.prototype={}
V.aL.prototype={
a5:function(a,b){return!0},
i:function(a){return"all"},
$ia7:1}
V.a7.prototype={}
V.cY.prototype={
a5:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)if(u[s].a5(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.H)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sO:function(a){this.a=H.r(a,"$ib",[V.a7],"$ab")},
$ia7:1}
V.a3.prototype={
a5:function(a,b){return!this.cU(0,b)},
i:function(a){return"!["+this.bl(0)+"]"}}
V.fR.prototype={
a5:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.jf(this.a)
t=H.jf(this.b)
return u+".."+t},
$ia7:1}
V.h0.prototype={
cY:function(a){var u,t
if(a.a.length<=0)throw H.f(P.a2("May not create a SetMatcher with zero characters."))
u=new H.ax([P.y,P.K])
for(t=new H.bY(a,a.gk(a),0,[H.cu(a,"t",0)]);t.q();)u.J(0,t.d,!0)
this.sep(u)},
a5:function(a,b){return this.a.bW(0,b)},
i:function(a){var u=this.a
return P.jg(new H.cV(u,[H.u(u,0)]),0,null)},
sep:function(a){this.a=H.r(a,"$iF",[P.y,P.K],"$aF")},
$ia7:1}
V.c6.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cb(this.a.j(0,b))
r.sO(H.c([],[V.a7]))
r.c=!1
C.a.h(this.c,r)
return r},
f8:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
if(r.a5(0,a))return r}return},
i:function(a){return this.b},
seC:function(a){this.c=H.r(a,"$ib",[V.cb],"$ab")}}
V.dh.prototype={
i:function(a){var u,t
u=H.jB(this.b,"\n","\\n")
t=H.jB(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.ca.prototype={
a7:function(a,b,c){var u,t,s
H.r(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.H)(c),++t){s=c[t]
this.c.J(0,s,b)}},
i:function(a){return this.b},
sel:function(a){var u=P.e
this.c=H.r(a,"$iF",[u,u],"$aF")}}
V.hr.prototype={
j:function(a,b){var u=this.a.m(0,b)
if(u==null){u=new V.c6(this,b)
u.seC(H.c([],[V.cb]))
u.d=null
this.a.J(0,b,u)}return u},
C:function(a){var u,t
u=this.b.m(0,a)
if(u==null){u=new V.ca(this,a)
t=P.e
u.sel(new H.ax([t,t]))
this.b.J(0,a,u)}return u},
cn:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.dh])
t=this.c
s=[P.y]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.d.ab(a,o)
m=t.f8(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.jg(r,0,null)
throw H.f(P.a2("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.jg(r,0,null)
k=t.d
j=k.c.m(0,l)
p=new V.dh(j==null?k.b:j,l,o)}++o}}},
sez:function(a){this.a=H.r(a,"$iF",[P.e,V.c6],"$aF")},
seB:function(a){this.b=H.r(a,"$iF",[P.e,V.ca],"$aF")}}
V.cb.prototype={
i:function(a){return this.b.b+": "+this.bl(0)}}
X.cH.prototype={$ijZ:1}
X.f1.prototype={
gA:function(){var u=this.x
if(u==null){u=D.aO()
this.x=u}return u}}
X.d3.prototype={
gA:function(){var u=this.f
if(u==null){u=D.aO()
this.f=u}return u},
aa:function(a){var u
H.n(a,"$iD")
u=this.f
if(u!=null)u.T(a)},
d7:function(){return this.aa(null)},
sas:function(a){var u,t
if(!J.S(this.b,a)){u=this.b
if(u!=null)u.gA().I(0,this.gbp())
t=this.b
this.b=a
if(a!=null)a.gA().h(0,this.gbp())
u=new D.P("mover",t,this.b,this,[U.c_])
u.b=!0
this.aa(u)}},
$ijZ:1,
$icH:1}
X.df.prototype={}
V.aX.prototype={
aw:function(a){this.b=new P.f5(C.G)
this.c=null
this.saT(H.c([],[[P.b,W.ab]]))},
w:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.c([],[W.ab]))
t=a.split("\n")
for(u=t.length,s=[W.ab],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.c([],s))
o=document.createElement("div")
o.className="codePart"
H.A(p)
n=this.b.df(p,0,p.length)
m=n==null?p:n
C.e.cM(o,H.jB(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaE(this.d),o)}},
ca:function(a,b){var u,t,s,r
H.r(b,"$ib",[P.e],"$ab")
this.saT(H.c([],[[P.b,W.ab]]))
u=C.a.l(b,"\n")
t=this.c
if(t==null){t=this.aC()
this.c=t}for(t=t.cn(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)this.aF(t[r])},
saT:function(a){this.d=H.r(a,"$ib",[[P.b,W.ab]],"$ab")}}
V.j3.prototype={
$1:function(a){H.n(a,"$iaF")
P.jA(C.c.cm(this.a.gfd(),2)+" fps")},
$S:35}
V.eD.prototype={
aF:function(a){switch(a.a){case"Class":this.w(a.b,"#551")
break
case"Comment":this.w(a.b,"#777")
break
case"Id":this.w(a.b,"#111")
break
case"Num":this.w(a.b,"#191")
break
case"Reserved":this.w(a.b,"#119")
break
case"String":this.w(a.b,"#171")
break
case"Symbol":this.w(a.b,"#616")
break
case"Type":this.w(a.b,"#B11")
break
case"Whitespace":this.w(a.b,"#111")
break}},
aC:function(){var u,t,s,r
u=V.hs()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.q(new H.o("_"))
C.a.h(t.a,s)
s=V.M("a","z")
C.a.h(t.a,s)
s=V.M("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.q(new H.o("_"))
C.a.h(s.a,t)
t=V.M("0","9")
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.q(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.q(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.q(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"OpenDoubleStr")
t=V.q(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.q(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.q(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.q(new H.o('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.aL())
s=u.j(0,"Start").l(0,"OpenSingleStr")
t=V.q(new H.o("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.q(new H.o("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.q(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.q(new H.o("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.aL())
s=u.j(0,"Start").l(0,"Slash")
t=V.q(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.q(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").l(0,"EndComment")
t=V.q(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.a3()
r=[V.a7]
s.sO(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"MLComment")
s=V.q(new H.o("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").l(0,"MLCStar")
t=V.q(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"MLComment")
s=new V.a3()
s.sO(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"EndComment")
s=V.q(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Whitespace")
t=V.q(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").l(0,"Whitespace")
s=V.q(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.C("Num")
s=u.j(0,"Float")
s.d=s.a.C("Num")
s=u.j(0,"Sym")
s.d=s.a.C("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.C("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.C("String")
s=u.j(0,"EndComment")
s.d=s.a.C("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.C("Whitespace")
s=u.j(0,"Id")
t=s.a.C("Id")
s.d=t
s=[P.e]
t.a7(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.a7(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.a7(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.f2.prototype={
aF:function(a){switch(a.a){case"Builtin":this.w(a.b,"#411")
break
case"Comment":this.w(a.b,"#777")
break
case"Id":this.w(a.b,"#111")
break
case"Num":this.w(a.b,"#191")
break
case"Preprocess":this.w(a.b,"#737")
break
case"Reserved":this.w(a.b,"#119")
break
case"Symbol":this.w(a.b,"#611")
break
case"Type":this.w(a.b,"#171")
break
case"Whitespace":this.w(a.b,"#111")
break}},
aC:function(){var u,t,s,r
u=V.hs()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.q(new H.o("_"))
C.a.h(t.a,s)
s=V.M("a","z")
C.a.h(t.a,s)
s=V.M("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.q(new H.o("_"))
C.a.h(s.a,t)
t=V.M("0","9")
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.q(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.q(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.q(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Slash")
t=V.q(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.q(new H.o("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").l(0,"Sym").a,new V.aL())
s=u.j(0,"Comment").l(0,"EndComment")
t=V.q(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.a3()
r=[V.a7]
s.sO(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Preprocess")
s=V.q(new H.o("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"Preprocess")
t=new V.a3()
t.sO(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"EndPreprocess")
t=V.q(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Whitespace")
s=V.q(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").l(0,"Whitespace")
t=V.q(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.C("Num")
t=u.j(0,"Float")
t.d=t.a.C("Num")
t=u.j(0,"Sym")
t.d=t.a.C("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.C("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.C("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.C("Whitespace")
t=u.j(0,"Id")
s=t.a.C("Id")
t.d=s
t=[P.e]
s.a7(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.a7(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.a7(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return u}}
V.f3.prototype={
aF:function(a){switch(a.a){case"Attr":this.w(a.b,"#911")
this.w("=","#111")
break
case"Id":this.w(a.b,"#111")
break
case"Other":this.w(a.b,"#111")
break
case"Reserved":this.w(a.b,"#119")
break
case"String":this.w(a.b,"#171")
break
case"Symbol":this.w(a.b,"#616")
break}},
aC:function(){var u,t,s
u=V.hs()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.q(new H.o("_"))
C.a.h(t.a,s)
s=V.M("a","z")
C.a.h(t.a,s)
s=V.M("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.q(new H.o("_"))
C.a.h(s.a,t)
t=V.M("0","9")
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").l(0,"Attr")
s=V.q(new H.o("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Sym")
s=V.q(new H.o("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").l(0,"Sym")
t=V.q(new H.o("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"OpenStr")
s=V.q(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").l(0,"CloseStr")
t=V.q(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").l(0,"EscStr")
s=V.q(new H.o("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").l(0,"OpenStr")
t=V.q(new H.o('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").l(0,"OpenStr").a,new V.aL())
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aL())
t=u.j(0,"Other").l(0,"Other")
s=new V.a3()
s.sO(H.c([],[V.a7]))
C.a.h(t.a,s)
t=V.q(new H.o('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.C("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.C("String")
t=u.j(0,"Id")
s=t.a.C("Id")
t.d=s
s.a7(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.j(0,"Attr")
s.d=s.a.C("Attr")
s=u.j(0,"Other")
s.d=s.a.C("Other")
return u}}
V.fO.prototype={
ca:function(a,b){H.r(b,"$ib",[P.e],"$ab")
this.saT(H.c([],[[P.b,W.ab]]))
this.w(C.a.l(b,"\n"),"#111")},
aF:function(a){},
aC:function(){return}}
V.h4.prototype={
d_:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.j).p(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.j.p(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.e.p(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.e.p(q,p)}o=u.createElement("div")
this.a=o
C.e.p(q,o)
this.b=null
o=W.l
W.X(u,"scroll",H.j(new V.h6(s),{func:1,ret:-1,args:[o]}),!1,o)},
bP:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.r(a,"$ib",[P.e],"$ab")
this.ev()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.cn(C.a.fi(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.H)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.e.p(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.e.p(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.e.p(t,o)
break
case"Link":n=p.b
if(H.mr(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.k(m,1)
l.href=H.A(m[1])
l.textContent=H.A(m[0])
C.e.p(t,l)}else{k=P.kq(C.v,n,C.q,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.e.p(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.e.p(t,o)
break}}C.e.p(this.a,t)},
cA:function(a){var u,t,s,r
u=new V.eD("dart")
u.aw("dart")
t=new V.f2("glsl")
t.aw("glsl")
s=new V.f3("html")
s.aw("html")
r=C.a.fa(H.c([u,t,s],[V.aX]),new V.h7(a))
if(r!=null)return r
u=new V.fO("plain")
u.aw("plain")
return u},
bO:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.r(a7,"$ib",[P.e],"$ab")
u=H.c([],[P.y])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.jw(r).aK(r,"+")){C.a.J(a7,s,C.d.aL(r,1))
C.a.h(u,1)
t=!0}else if(C.d.aK(r,"-")){C.a.J(a7,s,C.d.aL(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.cA(a5)
q.ca(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.e.p(o,n)
C.e.p(this.a,o)
m=P.kq(C.v,a4,C.q,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.jJ(null)
i.href="#"+m
i.textContent=a4
C.e.p(j,i)
C.o.p(k,j)
C.i.p(l,k)
C.k.p(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.H)(r),++a0)C.o.p(a,r[a0])
C.i.p(e,d)
C.i.p(e,c)
C.i.p(e,a)
C.k.p(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.H)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gH(r);a3.q();)C.o.p(c,a3.gB(a3))
C.i.p(e,d)
C.i.p(e,c)
C.k.p(n,e)}},
ev:function(){var u,t,s,r
if(this.b!=null)return
u=V.hs()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Bold")
s=V.q(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").l(0,"Bold")
s=new V.a3()
r=[V.a7]
s.sO(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").l(0,"BoldEnd")
s=V.q(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Italic")
s=V.q(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").l(0,"Italic")
s=new V.a3()
s.sO(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").l(0,"ItalicEnd")
s=V.q(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Code")
s=V.q(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").l(0,"Code")
s=new V.a3()
s.sO(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").l(0,"CodeEnd")
s=V.q(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"LinkHead")
s=V.q(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").l(0,"LinkTail")
s=V.q(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").l(0,"LinkEnd")
t=V.q(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").l(0,"LinkHead")
t=new V.a3()
t.sO(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").l(0,"LinkEnd")
t=V.q(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").l(0,"LinkTail")
t=new V.a3()
t.sO(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aL())
s=u.j(0,"Other").l(0,"Other")
t=new V.a3()
t.sO(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.o("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.C("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.C("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.C("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.C("Link")
s=u.j(0,"Other")
s.d=s.a.C("Other")
this.b=u}}
V.h6.prototype={
$1:function(a){P.kc(C.l,new V.h5(this.a))},
$S:36}
V.h5.prototype={
$0:function(){var u,t,s
u=C.c.X(document.documentElement.scrollTop)
t=this.a.style
s=H.h(-0.01*u)+"px"
t.top=s},
$S:0}
V.h7.prototype={
$1:function(a){return H.n(a,"$iaX").a===this.a},
$S:37}
Y.j0.prototype={
$1:function(a){var u,t,s,r
H.n(a,"$iD")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.bO("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.bO("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a.prototype
u.cR=u.i
u=J.cT.prototype
u.cT=u.i
u=P.i.prototype
u.cS=u.aH
u=W.J.prototype
u.aM=u.S
u=W.dT.prototype
u.cV=u.a_
u=V.cY.prototype
u.cU=u.a5
u.bl=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"m0","lK",10)
u(P,"m1","lL",10)
u(P,"m2","lM",10)
t(P,"kz","m_",1)
s(W,"mb",4,null,["$4"],["lO"],19,0)
s(W,"mc",4,null,["$4"],["lP"],19,0)
var m
r(m=E.a1.prototype,"gc8",0,0,null,["$1","$0"],["c9","fv"],3,0)
r(m,"gc6",0,0,null,["$1","$0"],["c7","fu"],3,0)
r(m,"gc4",0,0,null,["$1","$0"],["c5","fq"],3,0)
q(m,"gfo","fp",5)
q(m,"gfs","ft",5)
r(m=E.dg.prototype,"gbm",0,0,null,["$1","$0"],["bo","bn"],3,0)
p(m,"gfL","cf",1)
o(m=X.dm.prototype,"gdQ","dR",7)
o(m,"gdE","dF",7)
o(m,"gdK","dL",2)
o(m,"gdU","dV",20)
o(m,"gdS","dT",20)
o(m,"gdX","dY",2)
o(m,"ge0","e1",2)
o(m,"gdO","dP",2)
o(m,"gdZ","e_",2)
o(m,"gdM","dN",2)
o(m,"ge2","e3",32)
o(m,"ge4","e5",7)
o(m,"geb","ec",8)
o(m,"ge7","e8",8)
o(m,"ge9","ea",8)
n(V.aI.prototype,"gk","b8",21)
n(V.R.prototype,"gk","b8",21)
r(m=M.cN.prototype,"gY",0,0,null,["$1","$0"],["a2","d3"],3,0)
q(m,"gdG","dH",5)
q(m,"gdI","dJ",5)
r(X.d3.prototype,"gbp",0,0,null,["$1","$0"],["aa","d7"],3,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.E,null)
s(P.E,[H.jd,J.a,J.aj,P.dG,P.i,H.bY,P.av,H.bl,H.dl,H.fS,H.hx,P.b2,H.bO,H.dY,P.V,H.fk,H.fl,H.ff,P.e3,P.aK,P.ah,P.dq,P.hf,P.c8,P.hg,P.aF,P.Z,P.iN,P.iB,P.bx,P.dF,P.t,P.bP,P.f6,P.iL,P.K,P.b1,P.T,P.aM,P.fM,P.dc,P.dy,P.f0,P.b3,P.b,P.F,P.C,P.a6,P.e,P.bu,W.ez,W.bb,W.v,W.d1,W.dT,W.iG,W.cO,W.a8,W.iA,W.e8,P.iv,O.aY,O.bZ,E.et,E.a1,E.fT,E.dg,Z.dp,Z.i4,Z.cF,Z.bX,Z.dn,D.ew,D.bV,D.D,X.cG,X.cU,X.fh,X.fn,X.aQ,X.fz,X.ht,X.dm,V.aZ,V.b_,V.eP,V.b7,V.a4,V.ac,V.d8,V.aI,V.R,M.cN,A.cB,A.eo,A.di,A.hI,F.U,F.eU,F.b6,F.fj,F.bp,F.db,F.h1,F.h2,F.h3,F.af,F.hU,F.hV,F.hY,F.i_,F.i0,F.i1,O.bw,T.ho,V.aL,V.a7,V.cY,V.fR,V.h0,V.c6,V.dh,V.ca,V.hr,X.cH,X.df,X.d3,V.aX,V.h4])
s(J.a,[J.fc,J.fe,J.cT,J.aw,J.bn,J.b4,H.c1,W.d,W.em,W.cC,W.ar,W.as,W.I,W.ds,W.eE,W.eH,W.cK,W.du,W.cM,W.dw,W.eJ,W.l,W.dz,W.au,W.f4,W.dB,W.cX,W.ft,W.dH,W.dI,W.az,W.dJ,W.dM,W.aA,W.dQ,W.d6,W.dS,W.aC,W.dU,W.aD,W.dZ,W.ak,W.e1,W.hq,W.aG,W.e4,W.hv,W.hQ,W.e9,W.eb,W.ed,W.ef,W.eh,P.aP,P.dD,P.aR,P.dO,P.fQ,P.e_,P.aS,P.e6,P.ep,P.dr,P.cD,P.cP,P.d5,P.bt,P.da,P.dj,P.dW])
s(J.cT,[J.fN,J.ba,J.b5])
t(J.jc,J.aw)
s(J.bn,[J.cS,J.fd])
t(P.fm,P.dG)
s(P.fm,[H.dk,W.ib,W.a_,P.eX])
t(H.o,H.dk)
s(P.i,[H.eM,H.fq,H.cf])
s(H.eM,[H.bo,H.cV])
s(P.av,[H.fr,H.i5])
t(H.fs,H.bo)
s(P.b2,[H.fJ,H.fg,H.hO,H.hz,H.ev,H.fZ,P.d2,P.ap,P.hP,P.hN,P.c7,P.ex,P.eC])
s(H.bO,[H.j5,H.hl,H.iX,H.iY,H.iZ,P.i7,P.i6,P.i8,P.i9,P.iK,P.iJ,P.ii,P.im,P.ij,P.ik,P.il,P.iq,P.ir,P.ip,P.io,P.hh,P.hi,P.iP,P.iy,P.ix,P.iz,P.fp,P.eK,P.eL,W.eN,W.fv,W.fx,W.fY,W.he,W.ih,W.fH,W.fG,W.iC,W.iD,W.iI,W.iM,P.iR,P.eY,P.eZ,P.er,E.fU,E.fV,E.fW,E.hp,D.eR,D.eS,F.j4,F.iS,F.i2,F.hW,F.hX,V.j3,V.h6,V.h5,V.h7,Y.j0])
s(H.hl,[H.hc,H.bM])
t(P.fo,P.V)
s(P.fo,[H.ax,W.ia])
t(H.cZ,H.c1)
s(H.cZ,[H.cj,H.cl])
t(H.ck,H.cj)
t(H.c0,H.ck)
t(H.cm,H.cl)
t(H.d_,H.cm)
s(H.d_,[H.fA,H.fB,H.fC,H.fD,H.fE,H.d0,H.fF])
t(P.iw,P.iN)
t(P.iu,P.iB)
t(P.bQ,P.hg)
t(P.eO,P.bP)
s(P.bQ,[P.f5,P.hS])
t(P.hR,P.eO)
s(P.T,[P.w,P.y])
s(P.ap,[P.bs,P.f7])
s(W.d,[W.x,W.eW,W.aB,W.cn,W.aE,W.al,W.cp,W.i3,W.cg,P.es,P.bj])
s(W.x,[W.J,W.aW,W.bT,W.ch])
s(W.J,[W.p,P.m])
s(W.p,[W.cA,W.en,W.bL,W.aV,W.bk,W.ab,W.f_,W.cQ,W.h_,W.bv,W.dd,W.de,W.hk,W.c9])
s(W.ar,[W.bR,W.eA,W.eB])
t(W.ey,W.as)
t(W.bS,W.ds)
t(W.dv,W.du)
t(W.cL,W.dv)
t(W.dx,W.dw)
t(W.eI,W.dx)
t(W.at,W.cC)
t(W.dA,W.dz)
t(W.eV,W.dA)
t(W.dC,W.dB)
t(W.bm,W.dC)
t(W.cR,W.bT)
t(W.b9,W.l)
s(W.b9,[W.ay,W.W,W.am])
t(W.fu,W.dH)
t(W.fw,W.dI)
t(W.dK,W.dJ)
t(W.fy,W.dK)
t(W.dN,W.dM)
t(W.c2,W.dN)
t(W.dR,W.dQ)
t(W.fP,W.dR)
t(W.fX,W.dS)
t(W.co,W.cn)
t(W.h9,W.co)
t(W.dV,W.dU)
t(W.ha,W.dV)
t(W.hd,W.dZ)
t(W.e2,W.e1)
t(W.hm,W.e2)
t(W.cq,W.cp)
t(W.hn,W.cq)
t(W.e5,W.e4)
t(W.hu,W.e5)
t(W.aJ,W.W)
t(W.ea,W.e9)
t(W.ic,W.ea)
t(W.dt,W.cM)
t(W.ec,W.eb)
t(W.is,W.ec)
t(W.ee,W.ed)
t(W.dL,W.ee)
t(W.eg,W.ef)
t(W.iE,W.eg)
t(W.ei,W.eh)
t(W.iF,W.ei)
t(W.id,W.ia)
t(W.ie,P.hf)
t(W.jk,W.ie)
t(W.ig,P.c8)
t(W.iH,W.dT)
t(P.a5,P.iv)
t(P.dE,P.dD)
t(P.fi,P.dE)
t(P.dP,P.dO)
t(P.fK,P.dP)
t(P.c4,P.m)
t(P.e0,P.e_)
t(P.hj,P.e0)
t(P.e7,P.e6)
t(P.hw,P.e7)
t(P.eq,P.dr)
t(P.fL,P.bj)
t(P.dX,P.dW)
t(P.hb,P.dX)
s(E.et,[Z.cE,A.c5])
s(D.D,[D.f8,D.f9,D.P])
t(U.c_,D.ew)
s(U.c_,[U.cI,U.d9])
t(A.eG,A.c5)
s(A.di,[A.hB,A.hE,A.hF,A.hH,A.hC,A.cc,A.hD,A.cd,A.hG,A.hJ,A.hK,A.ce,A.hL,A.hM])
t(F.h8,F.eU)
t(F.hA,F.fj)
t(F.hZ,F.i_)
t(F.fI,F.i0)
t(O.eF,O.bw)
s(V.cY,[V.a3,V.cb])
t(X.f1,X.df)
s(V.aX,[V.eD,V.f2,V.f3,V.fO])
u(H.dk,H.dl)
u(H.cj,P.t)
u(H.ck,H.bl)
u(H.cl,P.t)
u(H.cm,H.bl)
u(P.dG,P.t)
u(W.ds,W.ez)
u(W.du,P.t)
u(W.dv,W.v)
u(W.dw,P.t)
u(W.dx,W.v)
u(W.dz,P.t)
u(W.dA,W.v)
u(W.dB,P.t)
u(W.dC,W.v)
u(W.dH,P.V)
u(W.dI,P.V)
u(W.dJ,P.t)
u(W.dK,W.v)
u(W.dM,P.t)
u(W.dN,W.v)
u(W.dQ,P.t)
u(W.dR,W.v)
u(W.dS,P.V)
u(W.cn,P.t)
u(W.co,W.v)
u(W.dU,P.t)
u(W.dV,W.v)
u(W.dZ,P.V)
u(W.e1,P.t)
u(W.e2,W.v)
u(W.cp,P.t)
u(W.cq,W.v)
u(W.e4,P.t)
u(W.e5,W.v)
u(W.e9,P.t)
u(W.ea,W.v)
u(W.eb,P.t)
u(W.ec,W.v)
u(W.ed,P.t)
u(W.ee,W.v)
u(W.ef,P.t)
u(W.eg,W.v)
u(W.eh,P.t)
u(W.ei,W.v)
u(P.dD,P.t)
u(P.dE,W.v)
u(P.dO,P.t)
u(P.dP,W.v)
u(P.e_,P.t)
u(P.e0,W.v)
u(P.e6,P.t)
u(P.e7,W.v)
u(P.dr,P.V)
u(P.dW,P.t)
u(P.dX,W.v)})();(function constants(){var u=hunkHelpers.makeConstList
C.j=W.aV.prototype
C.C=W.bk.prototype
C.e=W.ab.prototype
C.D=W.cK.prototype
C.F=W.cQ.prototype
C.r=W.cR.prototype
C.H=J.a.prototype
C.a=J.aw.prototype
C.h=J.cS.prototype
C.c=J.bn.prototype
C.d=J.b4.prototype
C.O=J.b5.prototype
C.S=W.c2.prototype
C.w=J.fN.prototype
C.x=W.d6.prototype
C.b=P.bt.prototype
C.o=W.bv.prototype
C.k=W.dd.prototype
C.i=W.de.prototype
C.p=J.ba.prototype
C.y=W.aJ.prototype
C.z=W.cg.prototype
C.A=new P.fM()
C.B=new P.hS()
C.f=new P.iw()
C.l=new P.aM(0)
C.E=new P.aM(5e6)
C.G=new P.f6("element",!0,!1,!1,!1)
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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

C.K=function(getTagFallback) {
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
C.L=function() {
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
C.M=function(hooks) {
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
C.N=function(hooks) {
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
C.P=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.Q=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.R=H.c(u([]),[P.e])
C.v=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.m=H.c(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.n=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.q=new P.hR(!1)})();(function staticFields(){$.aq=0
$.bN=null
$.jK=null
$.jn=!1
$.kC=null
$.kx=null
$.kH=null
$.iT=null
$.j_=null
$.jx=null
$.by=null
$.cr=null
$.cs=null
$.jo=!1
$.N=C.f
$.aN=null
$.ja=null
$.jR=null
$.jQ=null
$.jX=null
$.k2=null
$.k3=null
$.k7=null
$.kg=null
$.kl=null
$.ki=null
$.kj=null
$.kk=null
$.kh=null
$.lf="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.le="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.k1=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mz","kK",function(){return H.kB("_$dart_dartClosure")})
u($,"mA","jD",function(){return H.kB("_$dart_js")})
u($,"mF","kL",function(){return H.aH(H.hy({
toString:function(){return"$receiver$"}}))})
u($,"mG","kM",function(){return H.aH(H.hy({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mH","kN",function(){return H.aH(H.hy(null))})
u($,"mI","kO",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mL","kR",function(){return H.aH(H.hy(void 0))})
u($,"mM","kS",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mK","kQ",function(){return H.aH(H.ke(null))})
u($,"mJ","kP",function(){return H.aH(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mO","kU",function(){return H.aH(H.ke(void 0))})
u($,"mN","kT",function(){return H.aH(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"n2","jE",function(){return P.lJ()})
u($,"n6","cy",function(){return[]})
u($,"n5","kZ",function(){return P.lA("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"n3","kY",function(){return P.jU(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"n4","jF",function(){return P.jT(P.e,P.b3)})
u($,"mW","kX",function(){return Z.ag(0)})
u($,"mQ","kV",function(){return Z.ag(511)})
u($,"mY","aU",function(){return Z.ag(1)})
u($,"mX","bH",function(){return Z.ag(2)})
u($,"mS","bG",function(){return Z.ag(4)})
u($,"mZ","bI",function(){return Z.ag(8)})
u($,"n_","bJ",function(){return Z.ag(16)})
u($,"mT","cw",function(){return Z.ag(32)})
u($,"mU","cx",function(){return Z.ag(64)})
u($,"mV","kW",function(){return Z.ag(96)})
u($,"n0","bK",function(){return Z.ag(128)})
u($,"mR","bF",function(){return Z.ag(256)})
u($,"my","kJ",function(){return new V.eP(1e-9)})
u($,"mx","O",function(){return $.kJ()})})()
var v={mangledGlobalNames:{y:"int",w:"double",T:"num",e:"String",K:"bool",C:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.C},{func:1,ret:-1},{func:1,ret:-1,args:[W.W]},{func:1,ret:-1,opt:[D.D]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.y,[P.i,E.a1]]},{func:1,ret:P.C,args:[D.D]},{func:1,ret:-1,args:[W.l]},{func:1,ret:-1,args:[W.am]},{func:1,ret:P.C,args:[F.U]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.C,args:[,,]},{func:1,ret:P.e,args:[P.y]},{func:1,ret:P.K,args:[W.x]},{func:1,ret:P.C,args:[,]},{func:1,args:[,]},{func:1,ret:P.K,args:[W.a8]},{func:1,ret:P.K,args:[P.e]},{func:1,ret:P.C,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:P.K,args:[W.J,P.e,P.e,W.bb]},{func:1,ret:-1,args:[W.ay]},{func:1,ret:P.w},{func:1,ret:[P.ah,,],args:[,]},{func:1,args:[W.l]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.x,W.x]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.C,args:[{func:1,ret:-1}]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.C,args:[P.T]},{func:1,ret:P.C,args:[,],opt:[P.a6]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:V.ac,args:[P.w]},{func:1,ret:P.C,args:[F.af,P.w,P.w]},{func:1,ret:P.C,args:[P.aF]},{func:1,ret:P.C,args:[W.l]},{func:1,ret:P.K,args:[V.aX]},{func:1,ret:W.J,args:[W.x]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c1,ArrayBufferView:H.c1,Float32Array:H.c0,Float64Array:H.c0,Int16Array:H.fA,Int32Array:H.fB,Int8Array:H.fC,Uint16Array:H.fD,Uint32Array:H.fE,Uint8ClampedArray:H.d0,CanvasPixelArray:H.d0,Uint8Array:H.fF,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLImageElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.em,HTMLAnchorElement:W.cA,HTMLAreaElement:W.en,HTMLBaseElement:W.bL,Blob:W.cC,HTMLBodyElement:W.aV,HTMLCanvasElement:W.bk,CDATASection:W.aW,CharacterData:W.aW,Comment:W.aW,ProcessingInstruction:W.aW,Text:W.aW,CSSNumericValue:W.bR,CSSUnitValue:W.bR,CSSPerspective:W.ey,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.bS,MSStyleCSSProperties:W.bS,CSS2Properties:W.bS,CSSImageValue:W.ar,CSSKeywordValue:W.ar,CSSPositionValue:W.ar,CSSResourceValue:W.ar,CSSURLImageValue:W.ar,CSSStyleValue:W.ar,CSSMatrixComponent:W.as,CSSRotation:W.as,CSSScale:W.as,CSSSkew:W.as,CSSTranslation:W.as,CSSTransformComponent:W.as,CSSTransformValue:W.eA,CSSUnparsedValue:W.eB,DataTransferItemList:W.eE,HTMLDivElement:W.ab,XMLDocument:W.bT,Document:W.bT,DOMException:W.eH,DOMImplementation:W.cK,ClientRectList:W.cL,DOMRectList:W.cL,DOMRectReadOnly:W.cM,DOMStringList:W.eI,DOMTokenList:W.eJ,Element:W.J,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.at,FileList:W.eV,FileWriter:W.eW,HTMLFormElement:W.f_,Gamepad:W.au,HTMLHeadElement:W.cQ,History:W.f4,HTMLCollection:W.bm,HTMLFormControlsCollection:W.bm,HTMLOptionsCollection:W.bm,HTMLDocument:W.cR,KeyboardEvent:W.ay,Location:W.cX,MediaList:W.ft,MIDIInputMap:W.fu,MIDIOutputMap:W.fw,MimeType:W.az,MimeTypeArray:W.fy,PointerEvent:W.W,MouseEvent:W.W,DragEvent:W.W,DocumentFragment:W.x,ShadowRoot:W.x,DocumentType:W.x,Node:W.x,NodeList:W.c2,RadioNodeList:W.c2,Plugin:W.aA,PluginArray:W.fP,Range:W.d6,RTCStatsReport:W.fX,HTMLSelectElement:W.h_,SourceBuffer:W.aB,SourceBufferList:W.h9,SpeechGrammar:W.aC,SpeechGrammarList:W.ha,SpeechRecognitionResult:W.aD,Storage:W.hd,CSSStyleSheet:W.ak,StyleSheet:W.ak,HTMLTableCellElement:W.bv,HTMLTableDataCellElement:W.bv,HTMLTableHeaderCellElement:W.bv,HTMLTableElement:W.dd,HTMLTableRowElement:W.de,HTMLTableSectionElement:W.hk,HTMLTemplateElement:W.c9,TextTrack:W.aE,TextTrackCue:W.al,VTTCue:W.al,TextTrackCueList:W.hm,TextTrackList:W.hn,TimeRanges:W.hq,Touch:W.aG,TouchEvent:W.am,TouchList:W.hu,TrackDefaultList:W.hv,CompositionEvent:W.b9,FocusEvent:W.b9,TextEvent:W.b9,UIEvent:W.b9,URL:W.hQ,VideoTrackList:W.i3,WheelEvent:W.aJ,Window:W.cg,DOMWindow:W.cg,Attr:W.ch,CSSRuleList:W.ic,ClientRect:W.dt,DOMRect:W.dt,GamepadList:W.is,NamedNodeMap:W.dL,MozNamedAttrMap:W.dL,SpeechRecognitionResultList:W.iE,StyleSheetList:W.iF,SVGLength:P.aP,SVGLengthList:P.fi,SVGNumber:P.aR,SVGNumberList:P.fK,SVGPointList:P.fQ,SVGScriptElement:P.c4,SVGStringList:P.hj,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aS,SVGTransformList:P.hw,AudioBuffer:P.ep,AudioParamMap:P.eq,AudioTrackList:P.es,AudioContext:P.bj,webkitAudioContext:P.bj,BaseAudioContext:P.bj,OfflineAudioContext:P.fL,WebGLBuffer:P.cD,WebGLFramebuffer:P.cP,WebGLProgram:P.d5,WebGL2RenderingContext:P.bt,WebGLShader:P.da,WebGLUniformLocation:P.dj,SQLResultSetRowList:P.hb})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.cl.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
W.cn.$nativeSuperclassTag="EventTarget"
W.co.$nativeSuperclassTag="EventTarget"
W.cp.$nativeSuperclassTag="EventTarget"
W.cq.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Y.kE,[])
else Y.kE([])})})()
//# sourceMappingURL=test.dart.js.map
