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
a[c]=function(){a[c]=function(){H.n8(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kb"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kb"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kb(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jV:function jV(a){this.a=a},
fN:function(){return new P.cs("No element")},
m_:function(){return new P.cs("Too many elements")},
q:function q(a){this.a=a},
fr:function fr(){},
bK:function bK(){},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
h0:function h0(a,b,c){this.a=a
this.b=b
this.$ti=c},
h1:function h1(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
h2:function h2(a,b,c){this.a=a
this.b=b
this.$ti=c},
cH:function cH(a,b,c){this.a=a
this.b=b
this.$ti=c},
iO:function iO(a,b,c){this.a=a
this.b=b
this.$ti=c},
bH:function bH(){},
e3:function e3(){},
e2:function e2(){},
c0:function(a){var u,t
u=H.F(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
mQ:function(a){return v.types[H.a6(a)]},
mX:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iE},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ah(a)
if(typeof u!=="string")throw H.f(H.bV(a))
return u},
me:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fO(u)
t=u[0]
s=u[1]
return new H.hy(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
co:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bN:function(a){return H.m5(a)+H.k8(H.bx(a),0,null)},
m5:function(a){var u,t,s,r,q,p,o,n,m
u=J.W(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.N||!!u.$icF){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c0(r.length>1&&C.i.av(r,0)===36?C.i.aW(r,1):r)},
kL:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
md:function(a){var u,t,s,r
u=H.c([],[P.B])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.f(H.bV(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.b1(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.f(H.bV(r))}return H.kL(u)},
kM:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bV(s))
if(s<0)throw H.f(H.bV(s))
if(s>65535)return H.md(a)}return H.kL(a)},
jY:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.b1(u,10))>>>0,56320|u&1023)}throw H.f(P.at(a,0,1114111,null,null))},
bM:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mc:function(a){var u=H.bM(a).getFullYear()+0
return u},
ma:function(a){var u=H.bM(a).getMonth()+1
return u},
m6:function(a){var u=H.bM(a).getDate()+0
return u},
m7:function(a){var u=H.bM(a).getHours()+0
return u},
m9:function(a){var u=H.bM(a).getMinutes()+0
return u},
mb:function(a){var u=H.bM(a).getSeconds()+0
return u},
m8:function(a){var u=H.bM(a).getMilliseconds()+0
return u},
by:function(a){throw H.f(H.bV(a))},
i:function(a,b){if(a==null)J.bA(a)
throw H.f(H.cX(a,b))},
cX:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ax(!0,b,"index",null)
u=H.a6(J.bA(a))
if(!(b<0)){if(typeof u!=="number")return H.by(u)
t=b>=u}else t=!0
if(t)return P.T(b,a,"index",null,u)
return P.dK(b,"index",null)},
mN:function(a,b,c){if(a>c)return new P.bO(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bO(a,c,!0,b,"end","Invalid value")
return new P.ax(!0,b,"end",null)},
bV:function(a){return new P.ax(!0,a,null,null)},
mJ:function(a){if(typeof a!=="number")throw H.f(H.bV(a))
return a},
f:function(a){var u
if(a==null)a=new P.dD()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lo})
u.name=""}else u.toString=H.lo
return u},
lo:function(){return J.ah(this.dartException)},
t:function(a){throw H.f(a)},
A:function(a){throw H.f(P.bj(a))},
aV:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ig(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ih:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kW:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kG:function(a,b){return new H.hp(a,b==null?null:b.method)},
jW:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fR(a,t,u?null:b.receiver)},
ap:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jL(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.b1(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jW(H.k(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kG(H.k(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lr()
p=$.ls()
o=$.lt()
n=$.lu()
m=$.lx()
l=$.ly()
k=$.lw()
$.lv()
j=$.lA()
i=$.lz()
h=q.a3(t)
if(h!=null)return u.$1(H.jW(H.F(t),h))
else{h=p.a3(t)
if(h!=null){h.method="call"
return u.$1(H.jW(H.F(t),h))}else{h=o.a3(t)
if(h==null){h=n.a3(t)
if(h==null){h=m.a3(t)
if(h==null){h=l.a3(t)
if(h==null){h=k.a3(t)
if(h==null){h=n.a3(t)
if(h==null){h=j.a3(t)
if(h==null){h=i.a3(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kG(H.F(t),h))}}return u.$1(new H.iu(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dQ()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.ax(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dQ()
return a},
bY:function(a){var u
if(a==null)return new H.eE(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eE(a)},
mP:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.S(0,a[t],a[s])}return b},
mW:function(a,b,c,d,e,f){H.o(a,"$ibo")
switch(H.a6(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.r("Unsupported number of arguments for wrapped closure"))},
bW:function(a,b){var u
H.a6(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mW)
a.$identity=u
return u},
lS:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.W(d).$ib){u.$reflectionInfo=d
s=H.me(u).r}else s=d
r=e?Object.create(new H.hT().constructor.prototype):Object.create(new H.c3(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aD
if(typeof p!=="number")return p.M()
$.aD=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.ku(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.mQ,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.ks:H.jP
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.f("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.ku(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lP:function(a,b,c,d){var u=H.jP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ku:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lR(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lP(t,!r,u,b)
if(t===0){r=$.aD
if(typeof r!=="number")return r.M()
$.aD=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c4
if(q==null){q=H.fb("self")
$.c4=q}return new Function(r+H.k(q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aD
if(typeof r!=="number")return r.M()
$.aD=r+1
o+=r
r="return function("+o+"){return this."
q=$.c4
if(q==null){q=H.fb("self")
$.c4=q}return new Function(r+H.k(q)+"."+H.k(u)+"("+o+");}")()},
lQ:function(a,b,c,d){var u,t
u=H.jP
t=H.ks
switch(b?-1:a){case 0:throw H.f(H.mi("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lR:function(a,b){var u,t,s,r,q,p,o,n
u=$.c4
if(u==null){u=H.fb("self")
$.c4=u}t=$.kr
if(t==null){t=H.fb("receiver")
$.kr=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lQ(r,!p,s,b)
if(r===1){u="return function(){return this."+H.k(u)+"."+H.k(s)+"(this."+H.k(t)+");"
t=$.aD
if(typeof t!=="number")return t.M()
$.aD=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.k(u)+"."+H.k(s)+"(this."+H.k(t)+", "+n+");"
t=$.aD
if(typeof t!=="number")return t.M()
$.aD=t+1
return new Function(u+t+"}")()},
kb:function(a,b,c,d,e,f,g){return H.lS(a,b,H.a6(c),d,!!e,!!f,g)},
jP:function(a){return a.a},
ks:function(a){return a.c},
fb:function(a){var u,t,s,r,q
u=new H.c3("self","target","receiver","name")
t=J.fO(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
F:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aC(a,"String"))},
nQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aC(a,"double"))},
n1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aC(a,"num"))},
k9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aC(a,"bool"))},
a6:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aC(a,"int"))},
lm:function(a,b){throw H.f(H.aC(a,H.c0(H.F(b).substring(2))))},
n3:function(a,b){throw H.f(H.lO(a,H.c0(H.F(b).substring(2))))},
o:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.lm(a,b)},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.n3(a,b)},
kg:function(a){if(a==null)return a
if(!!J.W(a).$ib)return a
throw H.f(H.aC(a,"List<dynamic>"))},
mY:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.lm(a,b)},
lg:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a6(u)]
else return a.$S()}return},
f1:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.lg(J.W(a))
if(u==null)return!1
return H.l7(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.k5)return a
$.k5=!0
try{if(H.f1(a,b))return a
u=H.jJ(b)
t=H.aC(a,u)
throw H.f(t)}finally{$.k5=!1}},
kc:function(a,b){if(a!=null&&!H.ka(a,b))H.t(H.aC(a,H.jJ(b)))
return a},
aC:function(a,b){return new H.ii("TypeError: "+P.fv(a)+": type '"+H.lb(a)+"' is not a subtype of type '"+b+"'")},
lO:function(a,b){return new H.fc("CastError: "+P.fv(a)+": type '"+H.lb(a)+"' is not a subtype of type '"+b+"'")},
lb:function(a){var u,t
u=J.W(a)
if(!!u.$ic5){t=H.lg(u)
if(t!=null)return H.jJ(t)
return"Closure"}return H.bN(a)},
n8:function(a){throw H.f(new P.fj(H.F(a)))},
mi:function(a){return new H.hF(a)},
lh:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bx:function(a){if(a==null)return
return a.$ti},
nR:function(a,b,c){return H.c_(a["$a"+H.k(c)],H.bx(b))},
cY:function(a,b,c,d){var u
H.F(c)
H.a6(d)
u=H.c_(a["$a"+H.k(c)],H.bx(b))
return u==null?null:u[d]},
ag:function(a,b,c){var u
H.F(b)
H.a6(c)
u=H.c_(a["$a"+H.k(b)],H.bx(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.a6(b)
u=H.bx(a)
return u==null?null:u[b]},
jJ:function(a){return H.bw(a,null)},
bw:function(a,b){var u,t
H.m(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c0(a[0].name)+H.k8(a,1,b)
if(typeof a=="function")return H.c0(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a6(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.i(b,t)
return H.k(b[t])}if('func' in a)return H.mz(a,b)
if('futureOr' in a)return"FutureOr<"+H.bw("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mz:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.e]
H.m(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.i(b,m)
o=C.i.M(o,b[m])
l=t[p]
if(l!=null&&l!==P.N)o+=" extends "+H.bw(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bw(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bw(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bw(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.mO(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.F(u[g])
i=i+h+H.bw(d[c],b)+(" "+H.k(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
k8:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.b6("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bw(p,c)}return"<"+u.i(0)+">"},
c_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
f0:function(a,b,c,d){var u,t
H.F(b)
H.kg(c)
H.F(d)
if(a==null)return!1
u=H.bx(a)
t=J.W(a)
if(t[b]==null)return!1
return H.le(H.c_(t[d],u),null,c,null)},
m:function(a,b,c,d){H.F(b)
H.kg(c)
H.F(d)
if(a==null)return a
if(H.f0(a,b,c,d))return a
throw H.f(H.aC(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c0(b.substring(2))+H.k8(c,0,null),v.mangledGlobalNames)))},
le:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aw(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aw(a[t],b,c[t],d))return!1
return!0},
nO:function(a,b,c){return a.apply(b,H.c_(J.W(b)["$a"+H.k(c)],H.bx(b)))},
lj:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="N"||a.name==="I"||a===-1||a===-2||H.lj(u)}return!1},
ka:function(a,b){var u,t
if(a==null)return b==null||b.name==="N"||b.name==="I"||b===-1||b===-2||H.lj(b)
if(b==null||b===-1||b.name==="N"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ka(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f1(a,b)}u=J.W(a).constructor
t=H.bx(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aw(u,null,b,null)},
G:function(a,b){if(a!=null&&!H.ka(a,b))throw H.f(H.aC(a,H.jJ(b)))
return a},
aw:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="N"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="N"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aw(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="I")return!0
if('func' in c)return H.l7(a,b,c,d)
if('func' in a)return c.name==="bo"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aw("type" in a?a.type:null,b,s,d)
else if(H.aw(a,b,s,d))return!0
else{if(!('$i'+"cc" in t.prototype))return!1
r=t.prototype["$a"+"cc"]
q=H.c_(r,u?a.slice(1):null)
return H.aw(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.le(H.c_(m,u),b,p,d)},
l7:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aw(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aw(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aw(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aw(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.n0(h,b,g,d)},
n0:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aw(c[r],d,a[r],b))return!1}return!0},
nP:function(a,b,c){Object.defineProperty(a,H.F(b),{value:c,enumerable:false,writable:true,configurable:true})},
mZ:function(a){var u,t,s,r,q,p
u=H.F($.li.$1(a))
t=$.jA[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jG[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.F($.ld.$2(a,u))
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
return p.i}if(q==="+")return H.ll(a,s)
if(q==="*")throw H.f(P.kX(u))
if(v.leafTags[u]===true){p=H.jI(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.ll(a,s)},
ll:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kh(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jI:function(a){return J.kh(a,!1,null,!!a.$iE)},
n_:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jI(u)
else return J.kh(u,c,null,null)},
mU:function(){if(!0===$.kf)return
$.kf=!0
H.mV()},
mV:function(){var u,t,s,r,q,p,o,n
$.jA=Object.create(null)
$.jG=Object.create(null)
H.mT()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ln.$1(q)
if(p!=null){o=H.n_(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mT:function(){var u,t,s,r,q,p,o
u=C.S()
u=H.bU(C.P,H.bU(C.U,H.bU(C.A,H.bU(C.A,H.bU(C.T,H.bU(C.Q,H.bU(C.R(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.li=new H.jD(q)
$.ld=new H.jE(p)
$.ln=new H.jF(o)},
bU:function(a,b){return a(b)||b},
m1:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.fF("Illegal RegExp pattern ("+String(r)+")",a,null))},
n6:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kj:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hy:function hy(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
ig:function ig(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hp:function hp(a,b){this.a=a
this.b=b},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(a){this.a=a},
jL:function jL(a){this.a=a},
eE:function eE(a){this.a=a
this.b=null},
c5:function c5(){},
i1:function i1(){},
hT:function hT(){},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ii:function ii(a){this.a=a},
fc:function fc(a){this.a=a},
hF:function hF(a){this.a=a},
aK:function aK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fV:function fV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dt:function dt(a,b){this.a=a
this.$ti=b},
fW:function fW(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
fQ:function fQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cU:function(a){return a},
bv:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cX(b,a))},
my:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.mN(a,b,c))
return b},
cl:function cl(){},
dz:function dz(){},
ck:function ck(){},
dA:function dA(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
dB:function dB(){},
hl:function hl(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
mO:function(a){return J.kz(a?Object.keys(a):[],null)},
n2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kh:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jC:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.kf==null){H.mU()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.f(P.kX("Return interceptor for "+H.k(t(a,u))))}r=a.constructor
q=r==null?null:r[$.kl()]
if(q!=null)return q
q=H.mZ(a)
if(q!=null)return q
if(typeof a=="function")return C.V
t=Object.getPrototypeOf(a)
if(t==null)return C.D
if(t===Object.prototype)return C.D
if(typeof r=="function"){Object.defineProperty(r,$.kl(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
m0:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jO(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.at(a,0,4294967295,"length",null))
return J.kz(new Array(a),b)},
kz:function(a,b){return J.fO(H.c(a,[b]))},
fO:function(a){H.kg(a)
a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dm.prototype
return J.dl.prototype}if(typeof a=="string")return J.bJ.prototype
if(a==null)return J.dn.prototype
if(typeof a=="boolean")return J.fP.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.N)return a
return J.jC(a)},
kd:function(a){if(typeof a=="string")return J.bJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.N)return a
return J.jC(a)},
jB:function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.N)return a
return J.jC(a)},
ke:function(a){if(typeof a=="string")return J.bJ.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.cF.prototype
return a},
ao:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.N)return a
return J.jC(a)},
Y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).t(a,b)},
lG:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mX(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.kd(a).j(a,b)},
f2:function(a,b){return J.ao(a).he(a,b)},
lH:function(a,b,c,d){return J.ao(a).i8(a,b,c,d)},
ko:function(a,b){return J.ao(a).v(a,b)},
jM:function(a,b){return J.jB(a).B(a,b)},
lI:function(a,b){return J.jB(a).L(a,b)},
lJ:function(a){return J.ao(a).gie(a)},
d1:function(a){return J.W(a).gJ(a)},
bz:function(a){return J.jB(a).gP(a)},
bA:function(a){return J.kd(a).gm(a)},
lK:function(a){return J.ao(a).gjq(a)},
jN:function(a,b){return J.ao(a).aH(a,b)},
kp:function(a){return J.jB(a).jf(a)},
lL:function(a,b,c){return J.ke(a).aX(a,b,c)},
lM:function(a){return J.ke(a).jy(a)},
ah:function(a){return J.W(a).i(a)},
a:function a(){},
fP:function fP(){},
dn:function dn(){},
dq:function dq(){},
ht:function ht(){},
cF:function cF(){},
br:function br(){},
aJ:function aJ(a){this.$ti=a},
jU:function jU(a){this.$ti=a},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dp:function dp(){},
dm:function dm(){},
dl:function dl(){},
bJ:function bJ(){}},P={
mo:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.mG()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bW(new P.iQ(u),1)).observe(t,{childList:true})
return new P.iP(u,t,s)}else if(self.setImmediate!=null)return P.mH()
return P.mI()},
mp:function(a){self.scheduleImmediate(H.bW(new P.iR(H.l(a,{func:1,ret:-1})),0))},
mq:function(a){self.setImmediate(H.bW(new P.iS(H.l(a,{func:1,ret:-1})),0))},
mr:function(a){P.k_(C.p,H.l(a,{func:1,ret:-1}))},
k_:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.h.Y(a.a,1000)
return P.mw(u<0?0:u,b)},
kV:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.aT]})
u=C.h.Y(a.a,1000)
return P.mx(u<0?0:u,b)},
mw:function(a,b){var u=new P.eK(!0)
u.eN(a,b)
return u},
mx:function(a,b){var u=new P.eK(!1)
u.eO(a,b)
return u},
ms:function(a,b){var u,t,s
b.a=1
try{a.dV(new P.j0(b),new P.j1(b),null)}catch(s){u=H.ap(s)
t=H.bY(s)
P.n4(new P.j2(b,u,t))}},
l2:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.o(a.c,"$iav")
if(u>=4){t=b.bI()
b.a=a.a
b.c=a.c
P.cK(b,t)}else{t=H.o(b.c,"$iaY")
b.a=2
b.c=a
a.cU(t)}},
cK:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.o(t.c,"$ia7")
t=t.b
p=q.a
o=q.b
t.toString
P.jw(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cK(u.a,b)}t=u.a
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
if(k){H.o(m,"$ia7")
t=t.b
p=m.a
o=m.b
t.toString
P.jw(null,null,t,p,o)
return}j=$.V
if(j!=l)$.V=l
else j=null
t=b.c
if(t===8)new P.j6(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.j5(s,b,m).$0()}else if((t&2)!==0)new P.j4(u,s,b).$0()
if(j!=null)$.V=j
t=s.b
if(!!J.W(t).$icc){if(t.a>=4){i=H.o(o.c,"$iaY")
o.c=null
b=o.b0(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.l2(t,o)
return}}h=b.b
i=H.o(h.c,"$iaY")
h.c=null
b=h.b0(i)
t=s.a
p=s.b
if(!t){H.G(p,H.x(h,0))
h.a=4
h.c=p}else{H.o(p,"$ia7")
h.a=8
h.c=p}u.a=h
t=h}},
mC:function(a,b){if(H.f1(a,{func:1,args:[P.N,P.af]}))return H.l(a,{func:1,ret:null,args:[P.N,P.af]})
if(H.f1(a,{func:1,args:[P.N]}))return H.l(a,{func:1,ret:null,args:[P.N]})
throw H.f(P.jO(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mB:function(){var u,t
for(;u=$.bT,u!=null;){$.cW=null
t=u.b
$.bT=t
if(t==null)$.cV=null
u.a.$0()}},
mF:function(){$.k6=!0
try{P.mB()}finally{$.cW=null
$.k6=!1
if($.bT!=null)$.km().$1(P.lf())}},
la:function(a){var u=new P.e6(H.l(a,{func:1,ret:-1}))
if($.bT==null){$.cV=u
$.bT=u
if(!$.k6)$.km().$1(P.lf())}else{$.cV.b=u
$.cV=u}},
mE:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.bT
if(u==null){P.la(a)
$.cW=$.cV
return}t=new P.e6(a)
s=$.cW
if(s==null){t.b=u
$.cW=t
$.bT=t}else{t.b=s.b
s.b=t
$.cW=t
if(t.b==null)$.cV=t}},
n4:function(a){var u,t
u={func:1,ret:-1}
H.l(a,u)
t=$.V
if(C.l===t){P.jy(null,null,C.l,a)
return}t.toString
P.jy(null,null,t,H.l(t.bS(a),u))},
kU:function(a,b){var u,t
u={func:1,ret:-1}
H.l(b,u)
t=$.V
if(t===C.l){t.toString
return P.k_(a,b)}return P.k_(a,H.l(t.bS(b),u))},
mm:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aT]}
H.l(b,u)
t=$.V
if(t===C.l){t.toString
return P.kV(a,b)}s=t.d5(b,P.aT)
$.V.toString
return P.kV(a,H.l(s,u))},
jw:function(a,b,c,d,e){var u={}
u.a=d
P.mE(new P.jx(u,e))},
l8:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.V
if(t===c)return d.$0()
$.V=c
u=t
try{t=d.$0()
return t}finally{$.V=u}},
l9:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.G(e,g)
t=$.V
if(t===c)return d.$1(e)
$.V=c
u=t
try{t=d.$1(e)
return t}finally{$.V=u}},
mD:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.G(e,h)
H.G(f,i)
t=$.V
if(t===c)return d.$2(e,f)
$.V=c
u=t
try{t=d.$2(e,f)
return t}finally{$.V=u}},
jy:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.bS(d):c.ig(d,-1)
P.la(d)},
iQ:function iQ(a){this.a=a},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
eK:function eK(a){this.a=a
this.b=null
this.c=0},
jq:function jq(a,b){this.a=a
this.b=b},
jp:function jp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aY:function aY(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
j_:function j_(a,b){this.a=a
this.b=b},
j3:function j3(a,b){this.a=a
this.b=b},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j7:function j7(a){this.a=a},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a){this.a=a
this.b=null},
hW:function hW(){},
hY:function hY(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
ct:function ct(){},
hX:function hX(){},
aT:function aT(){},
a7:function a7(a,b){this.a=a
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
kA:function(a,b){return new H.aK([a,b])},
m2:function(a){return H.mP(a,new H.aK([null,null]))},
du:function(a,b,c,d){return new P.ja([d])},
k4:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mv:function(a,b,c){var u=new P.el(a,b,[c])
u.c=a.e
return u},
lZ:function(a,b,c){var u,t
if(P.k7(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.e])
t=$.d0()
C.a.h(t,a)
try{P.mA(a,u)}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}t=P.kS(b,H.mY(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
jT:function(a,b,c){var u,t,s
if(P.k7(a))return b+"..."+c
u=new P.b6(b)
t=$.d0()
C.a.h(t,a)
try{s=u
s.a=P.kS(s.a,a,", ")}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
k7:function(a){var u,t
for(u=0;t=$.d0(),u<t.length;++u)if(a===t[u])return!0
return!1},
mA:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.e],"$ab")
u=a.gP(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.k(u.gE(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.i(b,-1)
q=b.pop()
if(0>=b.length)return H.i(b,-1)
p=b.pop()}else{o=u.gE(u);++s
if(!u.w()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.i(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gE(u);++s
for(;u.w();o=n,n=m){m=u.gE(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.k(o)
q=H.k(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kB:function(a,b){var u,t,s
u=P.du(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s)u.h(0,H.G(a[s],b))
return u},
kD:function(a){var u,t
u={}
if(P.k7(a))return"{...}"
t=new P.b6("")
try{C.a.h($.d0(),a)
t.a+="{"
u.a=!0
J.lI(a,new P.h_(u,t))
t.a+="}"}finally{u=$.d0()
if(0>=u.length)return H.i(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
ja:function ja(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bS:function bS(a){this.a=a
this.c=this.b=null},
el:function el(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fX:function fX(){},
v:function v(){},
fZ:function fZ(){},
h_:function h_(a,b){this.a=a
this.b=b},
a4:function a4(){},
jh:function jh(){},
em:function em(){},
c6:function c6(){},
c7:function c7(){},
ft:function ft(){},
fL:function fL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fK:function fK(a){this.a=a},
ix:function ix(a){this.a=a},
iy:function iy(){},
jr:function jr(a){this.b=this.a=0
this.c=a},
lX:function(a){if(a instanceof H.c5)return a.i(0)
return"Instance of '"+H.bN(a)+"'"},
m3:function(a,b,c,d){var u,t
H.G(b,d)
u=J.m0(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.S(u,t,b)
return H.m(u,"$ib",[d],"$ab")},
kC:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=J.bz(a);s.w();)C.a.h(t,H.G(s.gE(s),c))
if(b)return t
return H.m(J.fO(t),"$ib",u,"$ab")},
jZ:function(a,b,c){var u,t
u=P.B
H.m(a,"$ih",[u],"$ah")
if(a.constructor===Array){H.m(a,"$iaJ",[u],"$aaJ")
t=a.length
c=P.kN(b,c,t,null,null,null)
return H.kM(b>0||c<t?C.a.em(a,b,c):a)}return P.mk(a,b,c)},
mk:function(a,b,c){var u,t,s
H.m(a,"$ih",[P.B],"$ah")
u=J.bz(a)
for(t=0;t<b;++t)if(!u.w())throw H.f(P.at(b,0,t,null,null))
s=[]
for(;u.w();)s.push(u.gE(u))
return H.kM(s)},
mf:function(a,b,c){return new H.fQ(a,H.m1(a,!1,!0,!1))},
kS:function(a,b,c){var u=J.bz(b)
if(!u.w())return a
if(c.length===0){do a+=H.k(u.gE(u))
while(u.w())}else{a+=H.k(u.gE(u))
for(;u.w();)a=a+c+H.k(u.gE(u))}return a},
l6:function(a,b,c,d){var u,t,s,r,q,p
H.m(a,"$ib",[P.B],"$ab")
if(c===C.w){u=$.lF().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.ir(H.G(b,H.ag(c,"c6",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.i(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jY(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lT:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lU:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
db:function(a){if(a>=10)return""+a
return"0"+a},
kw:function(a,b,c,d,e,f){return new P.bm(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fv:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ah(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lX(a)},
lN:function(a){return new P.ax(!1,null,null,a)},
jO:function(a,b,c){return new P.ax(!0,a,b,c)},
dK:function(a,b,c){return new P.bO(null,null,!0,a,b,"Value not in range")},
at:function(a,b,c,d,e){return new P.bO(b,c,!0,a,d,"Invalid value")},
kN:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.at(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.at(b,a,c,"end",f))
return b}return c},
T:function(a,b,c,d,e){var u=H.a6(e==null?J.bA(b):e)
return new P.fM(b,u,!0,a,c,"Index out of range")},
am:function(a){return new P.iv(a)},
kX:function(a){return new P.it(a)},
kR:function(a){return new P.cs(a)},
bj:function(a){return new P.fe(a)},
r:function(a){return new P.ee(a)},
bZ:function(a){H.n2(a)},
O:function O(){},
bk:function bk(a,b){this.a=a
this.b=b},
z:function z(){},
bm:function bm(a){this.a=a},
fp:function fp(){},
fq:function fq(){},
bn:function bn(){},
dD:function dD(){},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fM:function fM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iv:function iv(a){this.a=a},
it:function it(a){this.a=a},
cs:function cs(a){this.a=a},
fe:function fe(a){this.a=a},
hs:function hs(){},
dQ:function dQ(){},
fj:function fj(a){this.a=a},
ee:function ee(a){this.a=a},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
bo:function bo(){},
B:function B(){},
h:function h(){},
aI:function aI(){},
b:function b(){},
L:function L(){},
I:function I(){},
a0:function a0(){},
N:function N(){},
af:function af(){},
e:function e(){},
b6:function b6(a){this.a=a},
mM:function(a){var u,t
u=J.W(a)
if(!!u.$ibp){t=u.gd9(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.eP(a.data,a.height,a.width)},
mL:function(a){if(a instanceof P.eP)return{data:a.a,height:a.b,width:a.c}
return a},
b9:function(a){var u,t,s,r,q
if(a==null)return
u=P.kA(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=H.F(t[r])
u.S(0,q,a[q])}return u},
mK:function(a,b){var u={}
a.L(0,new P.jz(u))
return u},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a){this.a=a},
fB:function fB(a,b){this.a=a
this.b=b},
fC:function fC(){},
fD:function fD(){},
jb:function jb(){},
ae:function ae(){},
b0:function b0(){},
fT:function fT(){},
b5:function b5(){},
hq:function hq(){},
hw:function hw(){},
cp:function cp(){},
i_:function i_(){},
p:function p(){},
b7:function b7(){},
ie:function ie(){},
ej:function ej(){},
ek:function ek(){},
eu:function eu(){},
ev:function ev(){},
eG:function eG(){},
eH:function eH(){},
eN:function eN(){},
eO:function eO(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(a){this.a=a},
f9:function f9(){},
bB:function bB(){},
hr:function hr(){},
e7:function e7(){},
d5:function d5(){},
di:function di(){},
dI:function dI(){},
bP:function bP(){},
dN:function dN(){},
dU:function dU(){},
e1:function e1(){},
hS:function hS(){},
eC:function eC(){},
eD:function eD(){}},W={
kq:function(a){var u=document.createElement("a")
return u},
jQ:function(a,b){var u=document.createElement("canvas")
return u},
lV:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).a2(u,a,b,c)
t.toString
u=W.C
u=new H.cH(new W.ab(t),H.l(new W.fs(),{func:1,ret:P.O,args:[u]}),[u])
return H.o(u.gas(u),"$iQ")},
lW:function(a){H.o(a,"$id")
return"wheel"},
cb:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lK(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ap(s)}return u},
j9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l4:function(a,b,c,d){var u,t
u=W.j9(W.j9(W.j9(W.j9(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a3:function(a,b,c,d,e){var u=W.lc(new W.iZ(c),W.n)
if(u!=null&&!0)J.lH(a,b,u,!1)
return new W.iY(a,b,u,!1,[e])},
l3:function(a){var u,t
u=W.kq(null)
t=window.location
u=new W.bu(new W.jg(u,t))
u.eA(a)
return u},
mt:function(a,b,c,d){H.o(a,"$iQ")
H.F(b)
H.F(c)
H.o(d,"$ibu")
return!0},
mu:function(a,b,c,d){var u,t,s
H.o(a,"$iQ")
H.F(b)
H.F(c)
u=H.o(d,"$ibu").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
l5:function(){var u,t,s,r,q
u=P.e
t=P.kB(C.r,u)
s=H.x(C.r,0)
r=H.l(new W.jo(),{func:1,ret:u,args:[s]})
q=H.c(["TEMPLATE"],[u])
t=new W.jn(t,P.du(null,null,null,u),P.du(null,null,null,u),P.du(null,null,null,u),null)
t.eM(null,new H.h2(C.r,r,[s,u]),q,null)
return t},
lc:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.V
if(u===C.l)return a
return u.d5(a,b)},
w:function w(){},
f3:function f3(){},
d2:function d2(){},
f4:function f4(){},
c2:function c2(){},
d4:function d4(){},
bg:function bg(){},
bC:function bC(){},
bD:function bD(){},
bh:function bh(){},
c8:function c8(){},
ff:function ff(){},
P:function P(){},
c9:function c9(){},
fg:function fg(){},
aE:function aE(){},
aF:function aF(){},
fh:function fh(){},
fi:function fi(){},
fl:function fl(){},
ar:function ar(){},
ca:function ca(){},
fm:function fm(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
fn:function fn(){},
fo:function fo(){},
iU:function iU(a,b){this.a=a
this.b=b},
Q:function Q(){},
fs:function fs(){},
n:function n(){},
d:function d(){},
aG:function aG(){},
fz:function fz(){},
fA:function fA(){},
fE:function fE(){},
aH:function aH(){},
dj:function dj(){},
fJ:function fJ(){},
bI:function bI(){},
dk:function dk(){},
bp:function bp(){},
cd:function cd(){},
aL:function aL(){},
dv:function dv(){},
cj:function cj(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(a){this.a=a},
hc:function hc(){},
hd:function hd(a){this.a=a},
aN:function aN(){},
he:function he(){},
a5:function a5(){},
ab:function ab(a){this.a=a},
C:function C(){},
cm:function cm(){},
aO:function aO(){},
hv:function hv(){},
dJ:function dJ(){},
hD:function hD(){},
hE:function hE(a){this.a=a},
hG:function hG(){},
aP:function aP(){},
hQ:function hQ(){},
aQ:function aQ(){},
hR:function hR(){},
aR:function aR(){},
hU:function hU(){},
hV:function hV(a){this.a=a},
az:function az(){},
bQ:function bQ(){},
dR:function dR(){},
dS:function dS(){},
i0:function i0(){},
cu:function cu(){},
aS:function aS(){},
aA:function aA(){},
i2:function i2(){},
i3:function i3(){},
i8:function i8(){},
aU:function aU(){},
aB:function aB(){},
ic:function ic(){},
id:function id(){},
bt:function bt(){},
iw:function iw(){},
iL:function iL(){},
iM:function iM(){},
aX:function aX(){},
cI:function cI(){},
cJ:function cJ(){},
iV:function iV(){},
e9:function e9(){},
j8:function j8(){},
er:function er(){},
jk:function jk(){},
jl:function jl(){},
iT:function iT(){},
iW:function iW(a){this.a=a},
iX:function iX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k3:function k3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iY:function iY(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iZ:function iZ(a){this.a=a},
bu:function bu(a){this.a=a},
y:function y(){},
dC:function dC(a){this.a=a},
hn:function hn(a){this.a=a},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
ez:function ez(){},
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
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aj:function aj(){},
jg:function jg(a,b){this.a=a
this.b=b},
eQ:function eQ(a){this.a=a},
js:function js(a){this.a=a},
e8:function e8(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
es:function es(){},
et:function et(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
cP:function cP(){},
cQ:function cQ(){},
eA:function eA(){},
eB:function eB(){},
eF:function eF(){},
eI:function eI(){},
eJ:function eJ(){},
cR:function cR(){},
cS:function cS(){},
eL:function eL(){},
eM:function eM(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){}},O={
jR:function(a){var u=new O.Z([a])
u.cr(a)
return u},
Z:function Z(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
ci:function ci(){this.b=this.a=null},
dx:function dx(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ch:function ch(){},
h5:function h5(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aM:function aM(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h7:function h7(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h8:function h8(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bR:function bR(){}},E={
mh:function(a,b){var u=new E.hz(a,b)
u.ev(a,b)
return u},
ml:function(a,b,c,d,e){var u,t,s,r
u=J.W(a)
if(!!u.$ibC)return E.kT(a,!0,!0,!0,!1)
t=W.jQ(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gd7(a).h(0,t)
r=E.kT(t,!0,!0,!0,!1)
r.a=a
return r},
kT:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dZ()
t=H.o(C.x.cj(a,"webgl2",P.m2(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibP")
if(t==null)H.t(P.r("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.mh(t,a)
s=new T.i5(t)
s.b=H.a6((t&&C.b).ck(t,3379))
s.c=H.a6(C.b.ck(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.e4(a)
r=new X.fS()
r.c=new X.b3(!1,!1,!1)
r.shb(P.du(null,null,null,P.B))
s.b=r
r=new X.hf(s)
r.f=0
r.r=V.dG()
r.x=V.dG()
r.Q=1
r.ch=1
s.c=r
r=new X.fY(s)
r.r=0
r.x=V.dG()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.ib(s)
r.e=0
r.f=V.dG()
r.r=V.dG()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sf5(H.c([],[[P.ct,P.N]]))
r=s.z
q=document
p=W.a5
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a3(q,"contextmenu",H.l(s.gfC(),o),!1,p))
r=s.z
n=W.n
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a3(a,"focus",H.l(s.gfI(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a3(a,"blur",H.l(s.gfu(),m),!1,n))
r=s.z
l=W.aL
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a3(q,"keyup",H.l(s.gfM(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a3(q,"keydown",H.l(s.gfK(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a3(a,"mousedown",H.l(s.gfQ(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a3(a,"mouseup",H.l(s.gfU(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a3(a,"mousemove",H.l(s.gfS(),o),!1,p))
l=s.z
k=W.aX;(l&&C.a).h(l,W.a3(a,H.F(W.lW(a)),H.l(s.gfW(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a3(q,"mousemove",H.l(s.gfE(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a3(q,"mouseup",H.l(s.gfG(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a3(q,"pointerlockchange",H.l(s.gfY(),m),!1,n))
n=s.z
m=W.aB
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a3(a,"touchstart",H.l(s.gh8(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a3(a,"touchend",H.l(s.gh4(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a3(a,"touchmove",H.l(s.gh6(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.bk(Date.now(),!1)
u.cy=0
u.cW()
return u},
fa:function fa(){},
ac:function ac(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hz:function hz(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
dZ:function dZ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i7:function i7(a){this.a=a}},Z={
k2:function(a,b,c){var u
H.m(c,"$ib",[P.B],"$ab")
u=a.createBuffer()
C.b.ag(a,b,u)
C.b.d6(a,b,new Int16Array(H.cU(c)),35044)
C.b.ag(a,b,null)
return new Z.e5(b,u)},
au:function(a){return new Z.aW(a)},
e5:function e5(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iN:function iN(a){this.a=a},
d7:function d7(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a){this.a=a}},D={
as:function(){var u=new D.bG()
u.sac(null)
u.say(null)
u.c=null
u.d=0
return u},
fd:function fd(){},
bG:function bG(){var _=this
_.d=_.c=_.b=_.a=null},
fw:function fw(a){this.a=a},
fx:function fx(a){this.a=a},
D:function D(a){this.a=a
this.b=null},
ce:function ce(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
cf:function cf(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
S:function S(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bl:function bl(){var _=this
_.d=_.c=_.b=_.a=null},
a_:function a_(){},
ds:function ds(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dF:function dF(){},
dP:function dP(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){}},X={d8:function d8(a,b){this.a=a
this.b=b},dr:function dr(a,b){this.a=a
this.b=b},fS:function fS(){var _=this
_.d=_.c=_.b=_.a=null},fY:function fY(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},hf:function hf(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ib:function ib(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e4:function e4(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lY:function(a,b,c,d,e,f,g){var u,t
u=new X.fG()
t=new V.bE(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kO
if(t==null){t=V.mg(0,0,1,1)
$.kO=t}u.r=t
return u},
d9:function d9(){},
fG:function fG(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dT:function dT(){}},V={
kk:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.ee(a-b,u)
return(a<0?a+u:a)+b},
K:function(a,b,c){if(a==null)return C.i.a4("null",c)
return C.i.a4(C.j.dW(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
bX:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.z],"$ab")
u=H.c([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.K(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.i(u,p)
C.a.S(u,p,C.i.a4(u[p],s))}return u},
ki:function(a,b){return C.j.jv(Math.pow(b,C.O.c5(Math.log(H.mJ(a))/Math.log(b))))},
jX:function(){var u=$.kF
if(u==null){u=V.b2(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kF=u}return u},
b2:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kE:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.I(0,Math.sqrt(c.O(c)))
t=b.aM(u)
s=t.I(0,Math.sqrt(t.O(t)))
r=u.aM(s)
q=new V.R(a.a,a.b,a.c)
p=s.aI(0).O(q)
o=r.aI(0).O(q)
n=u.aI(0).O(q)
return V.b2(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
dG:function(){var u=$.kJ
if(u==null){u=new V.ak(0,0)
$.kJ=u}return u},
kK:function(){var u=$.cn
if(u==null){u=new V.ay(0,0,0)
$.cn=u}return u},
mg:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dL(a,b,c,d)},
cG:function(){var u=$.l0
if(u==null){u=new V.R(0,0,0)
$.l0=u}return u},
l1:function(){var u=$.l_
if(u==null){u=new V.R(0,1,0)
$.l_=u}return u},
mn:function(){var u=$.iz
if(u==null){u=new V.R(0,0,1)
$.iz=u}return u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fu:function fu(a){this.a=a},
dy:function dy(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a8:function a8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ak:function ak(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
dH:function dH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b8:function b8(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
U:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.i.av(a,0)
t=C.i.av(b,0)
s=new V.hx()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.hH()
u.ew(a)
return u},
ia:function(){var u,t
u=new V.i9()
t=P.e
u.shC(new H.aK([t,V.cr]))
u.shG(new H.aK([t,V.cw]))
u.c=null
return u},
aZ:function aZ(){},
ai:function ai(){},
dw:function dw(){},
ad:function ad(){this.a=null},
hx:function hx(){this.b=this.a=null},
hH:function hH(){this.a=null},
cr:function cr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
cw:function cw(a,b){this.a=a
this.b=b
this.c=null},
i9:function i9(){this.c=this.b=this.a=null},
cx:function cx(a){this.b=a
this.a=this.c=null},
n5:function(a){P.mm(C.K,new V.jK(a))},
mj:function(a,b){var u=new V.hL()
u.ey(a,!0)
return u},
bi:function bi(){},
jK:function jK(a){this.a=a},
fk:function fk(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fH:function fH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fI:function fI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hu:function hu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hL:function hL(){this.b=this.a=null},
hN:function hN(a){this.a=a},
hM:function hM(a){this.a=a},
hO:function hO(a){this.a=a}},U={
kv:function(a){var u=new U.da()
u.a=a
return u},
da:function da(){this.b=this.a=null},
bL:function bL(){},
dM:function dM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={df:function df(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
m4:function(a,b){var u,t
u=a.a7
t=new A.h3(b,u)
t.ex(b,u)
t.eu(a,b)
return t},
k0:function(a,b,c,d,e){var u=new A.ik(a,b,c,e)
u.f=d
u.shL(P.m3(d,0,!1,P.B))
return u},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a){this.a=a},
h3:function h3(a,b){var _=this
_.b5=_.dd=_.b4=_.a7=_.ah=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dv=_.c_=_.du=_.bi=_.dt=_.ds=_.bh=_.bg=_.dr=_.dq=_.bf=_.be=_.bd=_.dn=_.dm=_.bc=_.dl=_.dk=_.bb=_.dj=_.di=_.ba=_.b9=_.dh=_.dg=_.b8=_.b7=_.df=_.de=_.b6=null
_.c4=_.dB=_.c3=_.dA=_.c2=_.dz=_.c1=_.dw=_.c0=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h6:function h6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ah=b3
_.a7=b4
_.b4=b5},
cy:function cy(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cA:function cA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
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
cB:function cB(a,b,c,d,e,f,g,h,i,j){var _=this
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
cE:function cE(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cq:function cq(){},
bF:function bF(a,b){this.a=a
this.b=b},
e0:function e0(){},
ir:function ir(a){this.a=a},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
io:function io(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iq:function iq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ik:function ik(a,b,c,d){var _=this
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
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
jv:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cT:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.R(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.R(o+a3,n+a1,m+a2)
u.b=l
k=new V.R(o-a3,n-a1,m-a2)
u.c=k
j=new V.R(t-a3,r-a1,q-a2)
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
e=F.n7(d,a0,new F.ju(u,F.jv(u.c),F.jv(u.d),f,g,c),b)
if(e!=null)a.cb(e)},
n7:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.an,P.z,P.z]})
if(a<1)return
if(b<1)return
u=F.kQ()
t=H.c([],[F.an])
P.bZ("FLAG A\n")
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.k1(null,null,new V.bE(p,0,0,1),null,null,new V.ak(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bX(d))}P.bZ("FLAG B\n")
for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.k1(null,null,new V.bE(j,i,h,1),null,null,new V.ak(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bX(d))}}P.bZ("FLAG C\n")
u.d.i9(a+1,b+1,t)
P.bZ("FLAG D\n")
return u},
dg:function(a,b,c){var u,t
u=new F.a2()
t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.ht(a)
u.hu(b)
u.hv(c)
C.a.h(u.a.a.d.b,u)
u.a.a.X()
return u},
kQ:function(){var u,t
u=new F.dO()
t=new F.iA(u)
t.b=!1
t.shM(H.c([],[F.an]))
u.a=t
t=new F.hK(u)
t.sbG(H.c([],[F.bs]))
u.b=t
t=new F.hJ(u)
t.sfh(H.c([],[F.b1]))
u.c=t
t=new F.hI(u)
t.sf6(H.c([],[F.a2]))
u.d=t
u.e=null
return u},
k1:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.an()
t=new F.iI(u)
t.sbG(H.c([],[F.bs]))
u.b=t
t=new F.iE(u)
s=[F.b1]
t.sfi(H.c([],s))
t.sfj(H.c([],s))
u.c=t
t=new F.iB(u)
s=[F.a2]
t.sf7(H.c([],s))
t.sf8(H.c([],s))
t.sf9(H.c([],s))
u.d=t
h=$.lB()
u.e=0
t=$.bd()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bc().a)!==0?e:null
u.x=(s&$.bb().a)!==0?b:null
u.y=(s&$.be().a)!==0?f:null
u.z=(s&$.bf().a)!==0?g:null
u.Q=(s&$.lC().a)!==0?c:null
u.ch=(s&$.c1().a)!==0?i:0
u.cx=(s&$.ba().a)!==0?a:null
return u},
ju:function ju(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a2:function a2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fy:function fy(){},
hP:function hP(){},
b1:function b1(){this.b=this.a=null},
fU:function fU(){},
ij:function ij(){},
bs:function bs(){this.a=null},
dO:function dO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hI:function hI(a){this.a=a
this.b=null},
hJ:function hJ(a){this.a=a
this.b=null},
hK:function hK(a){this.a=a
this.b=null},
an:function an(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iK:function iK(a){this.a=a},
iJ:function iJ(a){this.a=a},
iA:function iA(a){this.a=a
this.c=this.b=null},
iB:function iB(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a
this.c=this.b=null},
iG:function iG(){},
iF:function iF(){},
iH:function iH(){},
ho:function ho(){},
iI:function iI(a){this.a=a
this.b=null},
lk:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=V.mj("Test 005",!0)
t=W.jQ(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.v(u.a,t)
s=[P.e]
u.d2(H.c(["A test of the Material Lighting shader with 2D textures and directional ","lighting. This test has texturing for emission, ambient, diffuse, and ","specular. The same texture is used for ambient and diffuse. ","The emission texture makes the lights on the panel glow. ","The specular texture makes specific parts shiny and other parts not."],s))
u.d2(H.c(["\xab[Back to Tests|../]"],s))
r=C.z.e9(document,"testCanvas")
if(r==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
q=E.ml(r,!0,!0,!0,!1)
p=new E.ac()
p.a=""
p.b=!0
s=E.ac
p.seY(0,O.jR(s))
p.y.bq(p.giZ(),p.gj1())
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
p.scn(0,null)
p.saQ(null)
o=F.kQ()
F.cT(o,null,null,1,1,1,0,0,1)
F.cT(o,null,null,1,1,0,1,0,3)
F.cT(o,null,null,1,1,0,0,1,2)
F.cT(o,null,null,1,1,-1,0,0,0)
F.cT(o,null,null,1,1,0,-1,0,0)
F.cT(o,null,null,1,1,0,0,-1,3)
o.aC()
o.iY(new F.iF(),new F.ho())
p.scn(0,o)
n=new U.dM()
n.a=0
n.b=0
n.c=0
n.d=0
n.e=0
n.f=0
n.r=0
n.se1(0)
n.sdN(0,0)
n.sdS(0)
m=n.d
if(!(Math.abs(m-0.1)<$.M().a)){n.d=0.1
m=new D.S("deltaYaw",m,0.1,n,[P.z])
m.b=!0
n.ax(m)}m=n.e
if(!(Math.abs(m-0.21)<$.M().a)){n.e=0.21
m=new D.S("deltaPitch",m,0.21,n,[P.z])
m.b=!0
n.ax(m)}m=n.f
if(!(Math.abs(m-0.32)<$.M().a)){n.f=0.32
m=new D.S("deltaRoll",m,0.32,n,[P.z])
m.b=!0
n.ax(m)}p.saQ(n)
l=q.f.c9("../resources/CtrlPnlColor.png")
k=new O.dx()
k.seV(O.jR(V.a8))
k.e.bq(k.gfp(),k.gfs())
n=new O.aM(k,"emission")
n.c=C.c
n.f=new V.a1(0,0,0)
k.f=n
n=new O.aM(k,"ambient")
n.c=C.c
n.f=new V.a1(0,0,0)
k.r=n
n=new O.aM(k,"diffuse")
n.c=C.c
n.f=new V.a1(0,0,0)
k.x=n
n=new O.aM(k,"invDiffuse")
n.c=C.c
n.f=new V.a1(0,0,0)
k.y=n
n=new O.h8(k,"specular")
n.c=C.c
n.f=new V.a1(0,0,0)
n.ch=100
k.z=n
n=new O.h5(k,"bump")
n.c=C.c
k.Q=n
k.ch=null
n=new O.aM(k,"reflect")
n.c=C.c
n.f=new V.a1(0,0,0)
k.cx=n
n=new O.h7(k,"refract")
n.c=C.c
n.f=new V.a1(0,0,0)
n.ch=1
k.cy=n
n=new O.h4(k,"alpha")
n.c=C.c
n.f=1
k.db=n
n=new D.ds()
n.cr(D.a_)
n.sf3(H.c([],[D.bl]))
n.sha(H.c([],[D.dF]))
n.shB(H.c([],[D.dP]))
n.shI(H.c([],[D.dW]))
n.shJ(H.c([],[D.dX]))
n.shK(H.c([],[D.dY]))
n.Q=null
n.ch=null
n.cm(n.gfn(),n.gh0(),n.gh2())
k.dx=n
m=n.Q
if(m==null){m=D.as()
n.Q=m
n=m}else n=m
n.h(0,k.ghj())
n=k.dx
m=n.ch
if(m==null){m=D.as()
n.ch=m
n=m}else n=m
n.h(0,k.gaZ())
k.dy=null
n=k.dx
j=V.l1()
m=U.kv(V.kE(V.kK(),j,new V.R(1,-1,-3)))
i=new V.a1(1,1,1)
h=new D.bl()
h.c=new V.a1(1,1,1)
h.a=V.mn()
g=h.b
h.b=m
m.gA().h(0,h.geC())
m=new D.S("mover",g,h.b,h,[U.bL])
m.b=!0
h.ak(m)
if(!h.c.t(0,i)){g=h.c
h.c=i
m=new D.S("color",g,i,h,[V.a1])
m.b=!0
h.ak(m)}n.h(0,h)
k.f.sbm(q.f.c9("../resources/CtrlPnlEmission.png"))
n=k.r
n.sap(0,new V.a1(0.2,0.2,0.2))
n=k.x
n.sap(0,new V.a1(0.8,0.8,0.8))
k.r.sbm(l)
k.x.sbm(l)
k.z.sbm(q.f.c9("../resources/CtrlPnlSpecular.png"))
n=k.z
if(n.c===C.c){n.c=C.f
n.bt()
n.bL(100)
m=n.a
m.a=null
m.U(null)}n.bL(10)
n=new M.df()
n.seE(0,O.jR(s))
n.d.bq(n.gfw(),n.gfA())
n.e=null
n.f=null
n.r=null
n.x=null
f=X.lY(!0,!0,!1,null,2000,null,0)
e=new X.dE()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saQ(null)
s=e.c
if(!(Math.abs(s-1.0471975511965976)<$.M().a)){e.c=1.0471975511965976
s=new D.S("fov",s,1.0471975511965976,e,[P.z])
s.b=!0
e.au(s)}s=e.d
if(!(Math.abs(s-0.1)<$.M().a)){e.d=0.1
s=new D.S("near",s,0.1,e,[P.z])
s.b=!0
e.au(s)}s=e.e
if(!(Math.abs(s-2000)<$.M().a)){e.e=2000
s=new D.S("far",s,2000,e,[P.z])
s.b=!0
e.au(s)}s=n.a
if(s!==e){if(s!=null)s.gA().C(0,n.gab())
g=n.a
n.a=e
e.gA().h(0,n.gab())
s=new D.S("camera",g,n.a,n,[X.d9])
s.b=!0
n.al(s)}s=n.b
if(s!==f){if(s!=null)s.gA().C(0,n.gab())
g=n.b
n.b=f
f.gA().h(0,n.gab())
s=new D.S("target",g,n.b,n,[X.dT])
s.b=!0
n.al(s)}n.sdU(null)
n.sdU(k)
n.d.h(0,p)
n.a.saQ(U.kv(V.b2(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
s=q.d
if(s!==n){if(s!=null)s.gA().C(0,q.gcs())
q.d=n
n.gA().h(0,q.gcs())
q.ct()}s=q.z
if(s==null){s=D.as()
q.z=s}n={func:1,ret:-1,args:[D.D]}
m=H.l(new F.jH(u,k),n)
if(s.b==null)s.say(H.c([],[n]))
s=s.b;(s&&C.a).h(s,m)
V.n5(q)},
jH:function jH(a,b){this.a=a
this.b=b}},T={cv:function cv(){},dV:function dV(){},i4:function i4(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},i5:function i5(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},i6:function i6(a,b,c,d,e,f,g){var _=this
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
H.jV.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gJ:function(a){return H.co(a)},
i:function(a){return"Instance of '"+H.bN(a)+"'"}}
J.fP.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iO:1}
J.dn.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iI:1}
J.dq.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.ht.prototype={}
J.cF.prototype={}
J.br.prototype={
i:function(a){var u=a[$.lq()]
if(u==null)return this.ep(a)
return"JavaScript function for "+H.k(J.ah(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibo:1}
J.aJ.prototype={
h:function(a,b){H.G(b,H.x(a,0))
if(!!a.fixed$length)H.t(P.am("add"))
a.push(b)},
jg:function(a,b){var u
if(!!a.fixed$length)H.t(P.am("removeAt"))
u=a.length
if(b>=u)throw H.f(P.dK(b,null,null))
return a.splice(b,1)[0]},
C:function(a,b){var u
if(!!a.fixed$length)H.t(P.am("remove"))
for(u=0;u<a.length;++u)if(J.Y(a[u],b)){a.splice(u,1)
return!0}return!1},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bj(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.S(u,t,H.k(a[t]))
return u.join(b)},
iT:function(a){return this.l(a,"")},
iN:function(a,b,c){var u,t,s
H.l(b,{func:1,ret:P.O,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.f(P.bj(a))}throw H.f(H.fN())},
iM:function(a,b){return this.iN(a,b,null)},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
em:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.at(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.at(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
giL:function(a){if(a.length>0)return a[0]
throw H.f(H.fN())},
gbj:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.fN())},
d3:function(a,b){var u,t
H.l(b,{func:1,ret:P.O,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.f(P.bj(a))}return!1},
N:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Y(a[u],b))return!0
return!1},
i:function(a){return P.jT(a,"[","]")},
gP:function(a){return new J.aq(a,a.length,0,[H.x(a,0)])},
gJ:function(a){return H.co(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.t(P.am("set length"))
if(b<0)throw H.f(P.at(b,0,null,"newLength",null))
a.length=b},
S:function(a,b,c){H.G(c,H.x(a,0))
if(!!a.immutable$list)H.t(P.am("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cX(a,b))
a[b]=c},
$ih:1,
$ib:1}
J.jU.prototype={}
J.aq.prototype={
gE:function(a){return this.d},
w:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.f(H.A(u))
s=this.c
if(s>=t){this.scL(null)
return!1}this.scL(u[s]);++this.c
return!0},
scL:function(a){this.d=H.G(a,H.x(this,0))},
$iaI:1}
J.dp.prototype={
jv:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.am(""+a+".toInt()"))},
c5:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.am(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.am(""+a+".round()"))},
dW:function(a,b){var u,t
if(b>20)throw H.f(P.at(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
ee:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
es:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cY(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.cY(a,b)},
cY:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.am("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
b1:function(a,b){var u
if(a>0)u=this.hA(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hA:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia0:1}
J.dm.prototype={$iB:1}
J.dl.prototype={}
J.bJ.prototype={
bW:function(a,b){if(b<0)throw H.f(H.cX(a,b))
if(b>=a.length)H.t(H.cX(a,b))
return a.charCodeAt(b)},
av:function(a,b){if(b>=a.length)throw H.f(H.cX(a,b))
return a.charCodeAt(b)},
M:function(a,b){if(typeof b!=="string")throw H.f(P.jO(b,null,null))
return a+b},
el:function(a,b,c){var u
if(c>a.length)throw H.f(P.at(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
br:function(a,b){return this.el(a,b,0)},
aX:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.dK(b,null,null))
if(b>c)throw H.f(P.dK(b,null,null))
if(c>a.length)throw H.f(P.dK(c,null,null))
return a.substring(b,c)},
aW:function(a,b){return this.aX(a,b,null)},
jy:function(a){return a.toLowerCase()},
W:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
j5:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.W(c,u)+a},
a4:function(a,b){return this.j5(a,b," ")},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikH:1,
$ie:1}
H.q.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.i.bW(this.a,b)},
$ae3:function(){return[P.B]},
$av:function(){return[P.B]},
$ah:function(){return[P.B]},
$ab:function(){return[P.B]}}
H.fr.prototype={}
H.bK.prototype={
gP:function(a){return new H.cg(this,this.gm(this),0,[H.ag(this,"bK",0)])},
bo:function(a,b){return this.eo(0,H.l(b,{func:1,ret:P.O,args:[H.ag(this,"bK",0)]}))}}
H.cg.prototype={
gE:function(a){return this.d},
w:function(){var u,t,s,r
u=this.a
t=J.kd(u)
s=t.gm(u)
if(this.b!==s)throw H.f(P.bj(u))
r=this.c
if(r>=s){this.saJ(null)
return!1}this.saJ(t.B(u,r));++this.c
return!0},
saJ:function(a){this.d=H.G(a,H.x(this,0))},
$iaI:1}
H.h0.prototype={
gP:function(a){return new H.h1(J.bz(this.a),this.b,this.$ti)},
gm:function(a){return J.bA(this.a)},
B:function(a,b){return this.b.$1(J.jM(this.a,b))},
$ah:function(a,b){return[b]}}
H.h1.prototype={
w:function(){var u=this.b
if(u.w()){this.saJ(this.c.$1(u.gE(u)))
return!0}this.saJ(null)
return!1},
gE:function(a){return this.a},
saJ:function(a){this.a=H.G(a,H.x(this,1))},
$aaI:function(a,b){return[b]}}
H.h2.prototype={
gm:function(a){return J.bA(this.a)},
B:function(a,b){return this.b.$1(J.jM(this.a,b))},
$abK:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.cH.prototype={
gP:function(a){return new H.iO(J.bz(this.a),this.b,this.$ti)}}
H.iO.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gE(u)))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.bH.prototype={}
H.e3.prototype={}
H.e2.prototype={}
H.hy.prototype={}
H.ig.prototype={
a3:function(a){var u,t,s
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
H.hp.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fR.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.k(this.a)+")"}}
H.iu.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jL.prototype={
$1:function(a){if(!!J.W(a).$ibn)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:14}
H.eE.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaf:1}
H.c5.prototype={
i:function(a){return"Closure '"+H.bN(this).trim()+"'"},
$ibo:1,
gjD:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i1.prototype={}
H.hT.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c0(u)+"'"}}
H.c3.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c3))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.co(this.a)
else t=typeof u!=="object"?J.d1(u):H.co(u)
return(t^H.co(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bN(u)+"'")}}
H.ii.prototype={
i:function(a){return this.a}}
H.fc.prototype={
i:function(a){return this.a}}
H.hF.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.aK.prototype={
gm:function(a){return this.a},
ga_:function(a){return new H.dt(this,[H.x(this,0)])},
d8:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.cI(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.cI(t,b)}else return this.iR(b)},
iR:function(a){var u=this.d
if(u==null)return!1
return this.c6(this.bz(u,J.d1(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.b_(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.b_(r,b)
s=t==null?null:t.b
return s}else return this.iS(b)},
iS:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bz(u,J.d1(a)&0x3ffffff)
s=this.c6(t,a)
if(s<0)return
return t[s].b},
S:function(a,b,c){var u,t,s,r,q,p
H.G(b,H.x(this,0))
H.G(c,H.x(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bE()
this.b=u}this.cz(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bE()
this.c=t}this.cz(t,b,c)}else{s=this.d
if(s==null){s=this.bE()
this.d=s}r=J.d1(b)&0x3ffffff
q=this.bz(s,r)
if(q==null)this.bM(s,r,[this.bF(b,c)])
else{p=this.c6(q,b)
if(p>=0)q[p].b=c
else q.push(this.bF(b,c))}}},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.bj(this))
u=u.c}},
cz:function(a,b,c){var u
H.G(b,H.x(this,0))
H.G(c,H.x(this,1))
u=this.b_(a,b)
if(u==null)this.bM(a,b,this.bF(b,c))
else u.b=c},
fl:function(){this.r=this.r+1&67108863},
bF:function(a,b){var u,t
u=new H.fV(H.G(a,H.x(this,0)),H.G(b,H.x(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.fl()
return u},
c6:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1},
i:function(a){return P.kD(this)},
b_:function(a,b){return a[b]},
bz:function(a,b){return a[b]},
bM:function(a,b,c){a[b]=c},
f2:function(a,b){delete a[b]},
cI:function(a,b){return this.b_(a,b)!=null},
bE:function(){var u=Object.create(null)
this.bM(u,"<non-identifier-key>",u)
this.f2(u,"<non-identifier-key>")
return u}}
H.fV.prototype={}
H.dt.prototype={
gm:function(a){return this.a.a},
gP:function(a){var u,t
u=this.a
t=new H.fW(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fW.prototype={
gE:function(a){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.bj(u))
else{u=this.c
if(u==null){this.scw(null)
return!1}else{this.scw(u.a)
this.c=this.c.c
return!0}}},
scw:function(a){this.d=H.G(a,H.x(this,0))},
$iaI:1}
H.jD.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.jE.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.jF.prototype={
$1:function(a){return this.a(H.F(a))},
$S:31}
H.fQ.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikH:1}
H.cl.prototype={$int:1}
H.dz.prototype={
gm:function(a){return a.length},
$iE:1,
$aE:function(){}}
H.ck.prototype={
j:function(a,b){H.bv(b,a,a.length)
return a[b]},
$abH:function(){return[P.z]},
$av:function(){return[P.z]},
$ih:1,
$ah:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dA.prototype={
$abH:function(){return[P.B]},
$av:function(){return[P.B]},
$ih:1,
$ah:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.hg.prototype={
j:function(a,b){H.bv(b,a,a.length)
return a[b]}}
H.hh.prototype={
j:function(a,b){H.bv(b,a,a.length)
return a[b]}}
H.hi.prototype={
j:function(a,b){H.bv(b,a,a.length)
return a[b]}}
H.hj.prototype={
j:function(a,b){H.bv(b,a,a.length)
return a[b]}}
H.hk.prototype={
j:function(a,b){H.bv(b,a,a.length)
return a[b]}}
H.dB.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bv(b,a,a.length)
return a[b]},
$inu:1}
H.hl.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bv(b,a,a.length)
return a[b]}}
H.cL.prototype={}
H.cM.prototype={}
H.cN.prototype={}
H.cO.prototype={}
P.iQ.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:17}
P.iP.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:26}
P.iR.prototype={
$0:function(){this.a.$0()},
$S:1}
P.iS.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eK.prototype={
eN:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bW(new P.jq(this,b),0),a)
else throw H.f(P.am("`setTimeout()` not found."))},
eO:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bW(new P.jp(this,a,Date.now(),b),0),a)
else throw H.f(P.am("Periodic timer."))},
$iaT:1}
P.jq.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:2}
P.jp.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.es(r,s)}u.c=t
this.d.$1(u)},
$S:1}
P.aY.prototype={
iX:function(a){if(this.c!==6)return!0
return this.b.b.cg(H.l(this.d,{func:1,ret:P.O,args:[P.N]}),a.a,P.O,P.N)},
iQ:function(a){var u,t,s,r
u=this.e
t=P.N
s={futureOr:1,type:H.x(this,1)}
r=this.b.b
if(H.f1(u,{func:1,args:[P.N,P.af]}))return H.kc(r.jn(u,a.a,a.b,null,t,P.af),s)
else return H.kc(r.cg(H.l(u,{func:1,args:[P.N]}),a.a,null,t),s)}}
P.av.prototype={
dV:function(a,b,c){var u,t,s,r
u=H.x(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.V
if(t!==C.l){t.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.mC(b,t)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.av(0,$.V,[c])
r=b==null?1:3
this.cA(new P.aY(s,r,a,b,[u,c]))
return s},
ju:function(a,b){return this.dV(a,null,b)},
cA:function(a){var u,t
u=this.a
if(u<=1){a.a=H.o(this.c,"$iaY")
this.c=a}else{if(u===2){t=H.o(this.c,"$iav")
u=t.a
if(u<4){t.cA(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jy(null,null,u,H.l(new P.j_(this,a),{func:1,ret:-1}))}},
cU:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.o(this.c,"$iaY")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.o(this.c,"$iav")
t=p.a
if(t<4){p.cU(a)
return}this.a=t
this.c=p.c}u.a=this.b0(a)
t=this.b
t.toString
P.jy(null,null,t,H.l(new P.j3(u,this),{func:1,ret:-1}))}},
bI:function(){var u=H.o(this.c,"$iaY")
this.c=null
return this.b0(u)},
b0:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cE:function(a){var u,t,s
u=H.x(this,0)
H.kc(a,{futureOr:1,type:u})
t=this.$ti
if(H.f0(a,"$icc",t,"$acc"))if(H.f0(a,"$iav",t,null))P.l2(a,this)
else P.ms(a,this)
else{s=this.bI()
H.G(a,u)
this.a=4
this.c=a
P.cK(this,s)}},
cF:function(a,b){var u
H.o(b,"$iaf")
u=this.bI()
this.a=8
this.c=new P.a7(a,b)
P.cK(this,u)},
$icc:1}
P.j_.prototype={
$0:function(){P.cK(this.a,this.b)},
$S:1}
P.j3.prototype={
$0:function(){P.cK(this.b,this.a.a)},
$S:1}
P.j0.prototype={
$1:function(a){var u=this.a
u.a=0
u.cE(a)},
$S:17}
P.j1.prototype={
$2:function(a,b){H.o(b,"$iaf")
this.a.cF(a,b)},
$1:function(a){return this.$2(a,null)},
$S:40}
P.j2.prototype={
$0:function(){this.a.cF(this.b,this.c)},
$S:1}
P.j6.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.dT(H.l(r.d,{func:1}),null)}catch(q){t=H.ap(q)
s=H.bY(q)
if(this.d){r=H.o(this.a.a.c,"$ia7").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.o(this.a.a.c,"$ia7")
else p.b=new P.a7(t,s)
p.a=!0
return}if(!!J.W(u).$icc){if(u instanceof P.av&&u.a>=4){if(u.a===8){r=this.b
r.b=H.o(u.c,"$ia7")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.ju(new P.j7(o),null)
r.a=!1}},
$S:2}
P.j7.prototype={
$1:function(a){return this.a},
$S:25}
P.j5.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.x(s,0)
q=H.G(this.c,r)
p=H.x(s,1)
this.a.b=s.b.b.cg(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ap(o)
t=H.bY(o)
s=this.a
s.b=new P.a7(u,t)
s.a=!0}},
$S:2}
P.j4.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.o(this.a.a.c,"$ia7")
r=this.c
if(r.iX(u)&&r.e!=null){q=this.b
q.b=r.iQ(u)
q.a=!1}}catch(p){t=H.ap(p)
s=H.bY(p)
r=H.o(this.a.a.c,"$ia7")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a7(t,s)
n.a=!0}},
$S:2}
P.e6.prototype={}
P.hW.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.av(0,$.V,[P.B])
u.a=0
s=H.x(this,0)
r=H.l(new P.hY(u,this),{func:1,ret:-1,args:[s]})
H.l(new P.hZ(u,t),{func:1,ret:-1})
W.a3(this.a,this.b,r,!1,s)
return t}}
P.hY.prototype={
$1:function(a){H.G(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.x(this.b,0)]}}}
P.hZ.prototype={
$0:function(){this.b.cE(this.a.a)},
$S:1}
P.ct.prototype={}
P.hX.prototype={}
P.aT.prototype={}
P.a7.prototype={
i:function(a){return H.k(this.a)},
$ibn:1}
P.jt.prototype={$inI:1}
P.jx.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dD()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.f(u)
s=H.f(u)
s.stack=t.i(0)
throw s},
$S:1}
P.jc.prototype={
jo:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
try{if(C.l===$.V){a.$0()
return}P.l8(null,null,this,a,-1)}catch(s){u=H.ap(s)
t=H.bY(s)
P.jw(null,null,this,u,H.o(t,"$iaf"))}},
jp:function(a,b,c){var u,t,s
H.l(a,{func:1,ret:-1,args:[c]})
H.G(b,c)
try{if(C.l===$.V){a.$1(b)
return}P.l9(null,null,this,a,b,-1,c)}catch(s){u=H.ap(s)
t=H.bY(s)
P.jw(null,null,this,u,H.o(t,"$iaf"))}},
ig:function(a,b){return new P.je(this,H.l(a,{func:1,ret:b}),b)},
bS:function(a){return new P.jd(this,H.l(a,{func:1,ret:-1}))},
d5:function(a,b){return new P.jf(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dT:function(a,b){H.l(a,{func:1,ret:b})
if($.V===C.l)return a.$0()
return P.l8(null,null,this,a,b)},
cg:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.G(b,d)
if($.V===C.l)return a.$1(b)
return P.l9(null,null,this,a,b,c,d)},
jn:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.G(b,e)
H.G(c,f)
if($.V===C.l)return a.$2(b,c)
return P.mD(null,null,this,a,b,c,d,e,f)}}
P.je.prototype={
$0:function(){return this.a.dT(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jd.prototype={
$0:function(){return this.a.jo(this.b)},
$S:2}
P.jf.prototype={
$1:function(a){var u=this.c
return this.a.jp(this.b,H.G(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ja.prototype={
gP:function(a){var u=new P.el(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
N:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.o(u[b],"$ibS")!=null}else{t=this.eZ(b)
return t}},
eZ:function(a){var u=this.d
if(u==null)return!1
return this.by(this.cM(u,a),a)>=0},
h:function(a,b){var u,t
H.G(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.k4()
this.b=u}return this.cB(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.k4()
this.c=t}return this.cB(t,b)}else return this.eQ(0,b)},
eQ:function(a,b){var u,t,s
H.G(b,H.x(this,0))
u=this.d
if(u==null){u=P.k4()
this.d=u}t=this.cG(b)
s=u[t]
if(s==null)u[t]=[this.bv(b)]
else{if(this.by(s,b)>=0)return!1
s.push(this.bv(b))}return!0},
C:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hf(this.c,b)
else return this.hc(0,b)},
hc:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.cM(u,b)
s=this.by(t,b)
if(s<0)return!1
this.cZ(t.splice(s,1)[0])
return!0},
cB:function(a,b){H.G(b,H.x(this,0))
if(H.o(a[b],"$ibS")!=null)return!1
a[b]=this.bv(b)
return!0},
hf:function(a,b){var u
if(a==null)return!1
u=H.o(a[b],"$ibS")
if(u==null)return!1
this.cZ(u)
delete a[b]
return!0},
cD:function(){this.r=1073741823&this.r+1},
bv:function(a){var u,t
u=new P.bS(H.G(a,H.x(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.cD()
return u},
cZ:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.cD()},
cG:function(a){return J.d1(a)&1073741823},
cM:function(a,b){return a[this.cG(b)]},
by:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1}}
P.bS.prototype={}
P.el.prototype={
gE:function(a){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.bj(u))
else{u=this.c
if(u==null){this.scC(null)
return!1}else{this.scC(H.G(u.a,H.x(this,0)))
this.c=this.c.b
return!0}}},
scC:function(a){this.d=H.G(a,H.x(this,0))},
$iaI:1}
P.fX.prototype={$ih:1,$ib:1}
P.v.prototype={
gP:function(a){return new H.cg(a,this.gm(a),0,[H.cY(this,a,"v",0)])},
B:function(a,b){return this.j(a,b)},
jx:function(a,b){var u,t
u=H.c([],[H.cY(this,a,"v",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.S(u,t,this.j(a,t))
return u},
jw:function(a){return this.jx(a,!0)},
i:function(a){return P.jT(a,"[","]")}}
P.fZ.prototype={}
P.h_.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.k(a)
u.a=t+": "
u.a+=H.k(b)},
$S:11}
P.a4.prototype={
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.cY(this,a,"a4",0),H.cY(this,a,"a4",1)]})
for(u=J.bz(this.ga_(a));u.w();){t=u.gE(u)
b.$2(t,this.j(a,t))}},
gm:function(a){return J.bA(this.ga_(a))},
i:function(a){return P.kD(a)},
$iL:1}
P.jh.prototype={
ae:function(a,b){var u
for(u=J.bz(H.m(b,"$ih",this.$ti,"$ah"));u.w();)this.h(0,u.gE(u))},
i:function(a){return P.jT(this,"{","}")},
B:function(a,b){var u,t,s
if(b<0)H.t(P.at(b,0,null,"index",null))
for(u=P.mv(this,this.r,H.x(this,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.f(P.T(b,this,"index",null,t))},
$ih:1,
$ikP:1}
P.em.prototype={}
P.c6.prototype={}
P.c7.prototype={}
P.ft.prototype={
$ac6:function(){return[P.e,[P.b,P.B]]}}
P.fL.prototype={
i:function(a){return this.a}}
P.fK.prototype={
f_:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.i(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.b6("")
if(r>b)q.a+=C.i.aX(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lL(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$ac7:function(){return[P.e,P.e]}}
P.ix.prototype={}
P.iy.prototype={
is:function(a,b,c){var u,t,s
c=P.kN(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jr(t)
if(s.fa(a,b,c)!==c)s.d_(C.i.bW(a,c-1),0)
return new Uint8Array(t.subarray(0,H.my(0,s.b,t.length)))},
ir:function(a){return this.is(a,0,null)},
$ac7:function(){return[P.e,[P.b,P.B]]}}
P.jr.prototype={
d_:function(a,b){var u,t,s,r,q
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
fa:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.i.bW(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.i.av(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.d_(r,C.i.av(a,p)))s=p}else if(r<=2047){q=this.b
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
P.O.prototype={}
P.bk.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bk&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.h.b1(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lT(H.mc(this))
t=P.db(H.ma(this))
s=P.db(H.m6(this))
r=P.db(H.m7(this))
q=P.db(H.m9(this))
p=P.db(H.mb(this))
o=P.lU(H.m8(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.z.prototype={}
P.bm.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bm&&this.a===b.a},
gJ:function(a){return C.h.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fq()
t=this.a
if(t<0)return"-"+new P.bm(0-t).i(0)
s=u.$1(C.h.Y(t,6e7)%60)
r=u.$1(C.h.Y(t,1e6)%60)
q=new P.fp().$1(t%1e6)
return""+C.h.Y(t,36e8)+":"+H.k(s)+":"+H.k(r)+"."+H.k(q)}}
P.fp.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.fq.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.bn.prototype={}
P.dD.prototype={
i:function(a){return"Throw of null."}}
P.ax.prototype={
gbx:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbw:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbx()+t+s
if(!this.a)return r
q=this.gbw()
p=P.fv(this.b)
return r+q+": "+p}}
P.bO.prototype={
gbx:function(){return"RangeError"},
gbw:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.k(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.k(u)
else if(s>u)t=": Not in range "+H.k(u)+".."+H.k(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.k(u)}return t}}
P.fM.prototype={
gbx:function(){return"RangeError"},
gbw:function(){var u,t
u=H.a6(this.b)
if(typeof u!=="number")return u.jE()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.k(t)},
gm:function(a){return this.f}}
P.iv.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.it.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cs.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fe.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fv(u)+"."}}
P.hs.prototype={
i:function(a){return"Out of Memory"},
$ibn:1}
P.dQ.prototype={
i:function(a){return"Stack Overflow"},
$ibn:1}
P.fj.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ee.prototype={
i:function(a){return"Exception: "+this.a}}
P.fF.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.i.aX(s,0,75)+"...":s
return t+"\n"+r}}
P.bo.prototype={}
P.B.prototype={}
P.h.prototype={
bo:function(a,b){var u=H.ag(this,"h",0)
return new H.cH(this,H.l(b,{func:1,ret:P.O,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gP(this)
for(t=0;u.w();)++t
return t},
gas:function(a){var u,t
u=this.gP(this)
if(!u.w())throw H.f(H.fN())
t=u.gE(u)
if(u.w())throw H.f(H.m_())
return t},
B:function(a,b){var u,t,s
if(b<0)H.t(P.at(b,0,null,"index",null))
for(u=this.gP(this),t=0;u.w();){s=u.gE(u)
if(b===t)return s;++t}throw H.f(P.T(b,this,"index",null,t))},
i:function(a){return P.lZ(this,"(",")")}}
P.aI.prototype={}
P.b.prototype={$ih:1}
P.L.prototype={}
P.I.prototype={
gJ:function(a){return P.N.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a0.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
t:function(a,b){return this===b},
gJ:function(a){return H.co(this)},
i:function(a){return"Instance of '"+H.bN(this)+"'"},
toString:function(){return this.i(this)}}
P.af.prototype={}
P.e.prototype={$ikH:1}
P.b6.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.w.prototype={}
W.f3.prototype={
gm:function(a){return a.length}}
W.d2.prototype={
i:function(a){return String(a)},
$id2:1}
W.f4.prototype={
i:function(a){return String(a)}}
W.c2.prototype={$ic2:1}
W.d4.prototype={}
W.bg.prototype={$ibg:1}
W.bC.prototype={
cj:function(a,b,c){if(c!=null)return this.fb(a,b,P.mK(c,null))
return this.fc(a,b)},
e8:function(a,b){return this.cj(a,b,null)},
fb:function(a,b,c){return a.getContext(b,c)},
fc:function(a,b){return a.getContext(b)},
$ibC:1,
$ikt:1}
W.bD.prototype={
fd:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
iH:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibD:1}
W.bh.prototype={
gm:function(a){return a.length}}
W.c8.prototype={$ic8:1}
W.ff.prototype={
gm:function(a){return a.length}}
W.P.prototype={$iP:1}
W.c9.prototype={
gm:function(a){return a.length}}
W.fg.prototype={}
W.aE.prototype={}
W.aF.prototype={}
W.fh.prototype={
gm:function(a){return a.length}}
W.fi.prototype={
gm:function(a){return a.length}}
W.fl.prototype={
gm:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.ca.prototype={
ia:function(a,b){return a.adoptNode(b)},
e9:function(a,b){return a.getElementById(b)}}
W.fm.prototype={
i:function(a){return String(a)}}
W.dc.prototype={
iw:function(a,b){return a.createHTMLDocument(b)}}
W.dd.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[[P.ae,P.a0]]},
$av:function(){return[[P.ae,P.a0]]},
$ih:1,
$ah:function(){return[[P.ae,P.a0]]},
$ib:1,
$ab:function(){return[[P.ae,P.a0]]},
$ay:function(){return[[P.ae,P.a0]]}}
W.de.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaG(a))+" x "+H.k(this.gaE(a))},
t:function(a,b){var u
if(b==null)return!1
if(!H.f0(b,"$iae",[P.a0],"$aae"))return!1
u=J.ao(b)
return a.left===u.gdF(b)&&a.top===u.gdY(b)&&this.gaG(a)===u.gaG(b)&&this.gaE(a)===u.gaE(b)},
gJ:function(a){return W.l4(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(this.gaG(a)),C.j.gJ(this.gaE(a)))},
gaE:function(a){return a.height},
gdF:function(a){return a.left},
gdY:function(a){return a.top},
gaG:function(a){return a.width},
$iae:1,
$aae:function(){return[P.a0]}}
W.fn.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[P.e]},
$av:function(){return[P.e]},
$ih:1,
$ah:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$ay:function(){return[P.e]}}
W.fo.prototype={
gm:function(a){return a.length}}
W.iU.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.i(u,b)
return H.o(u[b],"$iQ")},
h:function(a,b){J.ko(this.a,b)
return b},
gP:function(a){var u=this.jw(this)
return new J.aq(u,u.length,0,[H.x(u,0)])},
$av:function(){return[W.Q]},
$ah:function(){return[W.Q]},
$ab:function(){return[W.Q]}}
W.Q.prototype={
gie:function(a){return new W.iW(a)},
gd7:function(a){return new W.iU(a,a.children)},
i:function(a){return a.localName},
a2:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.ky
if(u==null){u=H.c([],[W.aj])
t=new W.dC(u)
C.a.h(u,W.l3(null))
C.a.h(u,W.l5())
$.ky=t
d=t}else d=u
u=$.kx
if(u==null){u=new W.eQ(d)
$.kx=u
c=u}else{u.a=d
c=u}}if($.b_==null){u=document
t=u.implementation
t=(t&&C.J).iw(t,"")
$.b_=t
$.jS=t.createRange()
t=$.b_
t.toString
t=t.createElement("base")
H.o(t,"$ic2")
t.href=u.baseURI
u=$.b_.head;(u&&C.L).v(u,t)}u=$.b_
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.o(t,"$ibg")}u=$.b_
if(!!this.$ibg)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b_.body;(u&&C.n).v(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.N(C.X,a.tagName)){u=$.jS;(u&&C.E).eg(u,s)
u=$.jS
r=(u&&C.E).iu(u,b)}else{s.innerHTML=b
r=$.b_.createDocumentFragment()
for(u=J.ao(r);t=s.firstChild,t!=null;)u.v(r,t)}u=$.b_.body
if(s==null?u!=null:s!==u)J.kp(s)
c.cl(r)
C.z.ia(document,r)
return r},
iv:function(a,b,c){return this.a2(a,b,c,null)},
ei:function(a,b,c,d){a.textContent=null
this.v(a,this.a2(a,b,c,d))},
eh:function(a,b){return this.ei(a,b,null,null)},
aH:function(a,b){return a.getAttribute(b)},
hd:function(a,b){return a.removeAttribute(b)},
$iQ:1,
gjq:function(a){return a.tagName}}
W.fs.prototype={
$1:function(a){return!!J.W(H.o(a,"$iC")).$iQ},
$S:13}
W.n.prototype={$in:1}
W.d.prototype={
i8:function(a,b,c,d){H.l(c,{func:1,args:[W.n]})
if(c!=null)this.eR(a,b,c,!1)},
eR:function(a,b,c,d){return a.addEventListener(b,H.bW(H.l(c,{func:1,args:[W.n]}),1),!1)},
$id:1}
W.aG.prototype={$iaG:1}
W.fz.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aG]},
$av:function(){return[W.aG]},
$ih:1,
$ah:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$ay:function(){return[W.aG]}}
W.fA.prototype={
gm:function(a){return a.length}}
W.fE.prototype={
gm:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.dj.prototype={}
W.fJ.prototype={
gm:function(a){return a.length}}
W.bI.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.C]},
$av:function(){return[W.C]},
$ih:1,
$ah:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ibI:1,
$ay:function(){return[W.C]}}
W.dk.prototype={}
W.bp.prototype={$ibp:1,
gd9:function(a){return a.data}}
W.cd.prototype={$icd:1,$ikt:1}
W.aL.prototype={$iaL:1}
W.dv.prototype={
i:function(a){return String(a)},
$idv:1}
W.cj.prototype={}
W.h9.prototype={
gm:function(a){return a.length}}
W.ha.prototype={
j:function(a,b){return P.b9(a.get(H.F(b)))},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b9(t.value[1]))}},
ga_:function(a){var u=H.c([],[P.e])
this.L(a,new W.hb(u))
return u},
gm:function(a){return a.size},
$aa4:function(){return[P.e,null]},
$iL:1,
$aL:function(){return[P.e,null]}}
W.hb.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.hc.prototype={
j:function(a,b){return P.b9(a.get(H.F(b)))},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b9(t.value[1]))}},
ga_:function(a){var u=H.c([],[P.e])
this.L(a,new W.hd(u))
return u},
gm:function(a){return a.size},
$aa4:function(){return[P.e,null]},
$iL:1,
$aL:function(){return[P.e,null]}}
W.hd.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.aN.prototype={$iaN:1}
W.he.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aN]},
$av:function(){return[W.aN]},
$ih:1,
$ah:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$ay:function(){return[W.aN]}}
W.a5.prototype={$ia5:1}
W.ab.prototype={
gas:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.f(P.kR("No elements"))
if(t>1)throw H.f(P.kR("More than one element"))
return u.firstChild},
ae:function(a,b){var u,t,s,r,q
H.m(b,"$ih",[W.C],"$ah")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ao(t),q=0;q<s;++q)r.v(t,u.firstChild)
return},
gP:function(a){var u=this.a.childNodes
return new W.dh(u,u.length,-1,[H.cY(C.Z,u,"y",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
$av:function(){return[W.C]},
$ah:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
jf:function(a){var u=a.parentNode
if(u!=null)J.f2(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.en(a):u},
v:function(a,b){return a.appendChild(b)},
he:function(a,b){return a.removeChild(b)},
$iC:1}
W.cm.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.C]},
$av:function(){return[W.C]},
$ih:1,
$ah:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ay:function(){return[W.C]}}
W.aO.prototype={$iaO:1,
gm:function(a){return a.length}}
W.hv.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aO]},
$av:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$ay:function(){return[W.aO]}}
W.dJ.prototype={
iu:function(a,b){return a.createContextualFragment(b)},
eg:function(a,b){return a.selectNodeContents(b)}}
W.hD.prototype={
j:function(a,b){return P.b9(a.get(H.F(b)))},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b9(t.value[1]))}},
ga_:function(a){var u=H.c([],[P.e])
this.L(a,new W.hE(u))
return u},
gm:function(a){return a.size},
$aa4:function(){return[P.e,null]},
$iL:1,
$aL:function(){return[P.e,null]}}
W.hE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.hG.prototype={
gm:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.hQ.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aP]},
$av:function(){return[W.aP]},
$ih:1,
$ah:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$ay:function(){return[W.aP]}}
W.aQ.prototype={$iaQ:1}
W.hR.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aQ]},
$av:function(){return[W.aQ]},
$ih:1,
$ah:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$ay:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1,
gm:function(a){return a.length}}
W.hU.prototype={
j:function(a,b){return this.cN(a,H.F(b))},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.fg(a,u)
if(t==null)return
b.$2(t,this.cN(a,t))}},
ga_:function(a){var u=H.c([],[P.e])
this.L(a,new W.hV(u))
return u},
gm:function(a){return a.length},
cN:function(a,b){return a.getItem(b)},
fg:function(a,b){return a.key(b)},
$aa4:function(){return[P.e,P.e]},
$iL:1,
$aL:function(){return[P.e,P.e]}}
W.hV.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:27}
W.az.prototype={$iaz:1}
W.bQ.prototype={}
W.dR.prototype={
a2:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bs(a,b,c,d)
u=W.lV("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ab(t).ae(0,new W.ab(u))
return t}}
W.dS.prototype={
a2:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bs(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.a2(u.createElement("table"),b,c,d)
u.toString
u=new W.ab(u)
s=u.gas(u)
s.toString
u=new W.ab(s)
r=u.gas(u)
t.toString
r.toString
new W.ab(t).ae(0,new W.ab(r))
return t}}
W.i0.prototype={
a2:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bs(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.a2(u.createElement("table"),b,c,d)
u.toString
u=new W.ab(u)
s=u.gas(u)
t.toString
s.toString
new W.ab(t).ae(0,new W.ab(s))
return t}}
W.cu.prototype={$icu:1}
W.aS.prototype={$iaS:1}
W.aA.prototype={$iaA:1}
W.i2.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aA]},
$av:function(){return[W.aA]},
$ih:1,
$ah:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$ay:function(){return[W.aA]}}
W.i3.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aS]},
$av:function(){return[W.aS]},
$ih:1,
$ah:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$ay:function(){return[W.aS]}}
W.i8.prototype={
gm:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.aB.prototype={$iaB:1}
W.ic.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aU]},
$av:function(){return[W.aU]},
$ih:1,
$ah:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$ay:function(){return[W.aU]}}
W.id.prototype={
gm:function(a){return a.length}}
W.bt.prototype={}
W.iw.prototype={
i:function(a){return String(a)}}
W.iL.prototype={$ikt:1}
W.iM.prototype={
gm:function(a){return a.length}}
W.aX.prototype={
giC:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.am("deltaY is not supported"))},
giB:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.am("deltaX is not supported"))},
$iaX:1}
W.cI.prototype={
hi:function(a,b){return a.requestAnimationFrame(H.bW(H.l(b,{func:1,ret:-1,args:[P.a0]}),1))},
f4:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cJ.prototype={$icJ:1}
W.iV.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.P]},
$av:function(){return[W.P]},
$ih:1,
$ah:function(){return[W.P]},
$ib:1,
$ab:function(){return[W.P]},
$ay:function(){return[W.P]}}
W.e9.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.f0(b,"$iae",[P.a0],"$aae"))return!1
u=J.ao(b)
return a.left===u.gdF(b)&&a.top===u.gdY(b)&&a.width===u.gaG(b)&&a.height===u.gaE(b)},
gJ:function(a){return W.l4(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(a.width),C.j.gJ(a.height))},
gaE:function(a){return a.height},
gaG:function(a){return a.width}}
W.j8.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aH]},
$av:function(){return[W.aH]},
$ih:1,
$ah:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$ay:function(){return[W.aH]}}
W.er.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.C]},
$av:function(){return[W.C]},
$ih:1,
$ah:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ay:function(){return[W.C]}}
W.jk.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.aR]},
$av:function(){return[W.aR]},
$ih:1,
$ah:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$ay:function(){return[W.aR]}}
W.jl.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iE:1,
$aE:function(){return[W.az]},
$av:function(){return[W.az]},
$ih:1,
$ah:function(){return[W.az]},
$ib:1,
$ab:function(){return[W.az]},
$ay:function(){return[W.az]}}
W.iT.prototype={
L:function(a,b){var u,t,s,r,q,p
H.l(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.ga_(this),t=u.length,s=this.a,r=J.ao(s),q=0;q<u.length;u.length===t||(0,H.A)(u),++q){p=u[q]
b.$2(p,r.aH(s,p))}},
ga_:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.c([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.i(u,r)
q=H.o(u[r],"$icJ")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aa4:function(){return[P.e,P.e]},
$aL:function(){return[P.e,P.e]}}
W.iW.prototype={
j:function(a,b){return J.jN(this.a,H.F(b))},
gm:function(a){return this.ga_(this).length}}
W.iX.prototype={}
W.k3.prototype={}
W.iY.prototype={}
W.iZ.prototype={
$1:function(a){return this.a.$1(H.o(a,"$in"))},
$S:37}
W.bu.prototype={
eA:function(a){var u,t
u=$.kn()
if(u.a===0){for(t=0;t<262;++t)u.S(0,C.W[t],W.mR())
for(t=0;t<12;++t)u.S(0,C.t[t],W.mS())}},
aA:function(a){return $.lE().N(0,W.cb(a))},
af:function(a,b,c){var u,t,s
u=W.cb(a)
t=$.kn()
s=t.j(0,H.k(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.k9(s.$4(a,b,c,this))},
$iaj:1}
W.y.prototype={
gP:function(a){return new W.dh(a,this.gm(a),-1,[H.cY(this,a,"y",0)])}}
W.dC.prototype={
aA:function(a){return C.a.d3(this.a,new W.hn(a))},
af:function(a,b,c){return C.a.d3(this.a,new W.hm(a,b,c))},
$iaj:1}
W.hn.prototype={
$1:function(a){return H.o(a,"$iaj").aA(this.a)},
$S:15}
W.hm.prototype={
$1:function(a){return H.o(a,"$iaj").af(this.a,this.b,this.c)},
$S:15}
W.ez.prototype={
eM:function(a,b,c,d){var u,t,s
this.a.ae(0,c)
u=b.bo(0,new W.ji())
t=b.bo(0,new W.jj())
this.b.ae(0,u)
s=this.c
s.ae(0,C.Y)
s.ae(0,t)},
aA:function(a){return this.a.N(0,W.cb(a))},
af:function(a,b,c){var u,t
u=W.cb(a)
t=this.c
if(t.N(0,H.k(u)+"::"+b))return this.d.ib(c)
else if(t.N(0,"*::"+b))return this.d.ib(c)
else{t=this.b
if(t.N(0,H.k(u)+"::"+b))return!0
else if(t.N(0,"*::"+b))return!0
else if(t.N(0,H.k(u)+"::*"))return!0
else if(t.N(0,"*::*"))return!0}return!1},
$iaj:1}
W.ji.prototype={
$1:function(a){return!C.a.N(C.t,H.F(a))},
$S:16}
W.jj.prototype={
$1:function(a){return C.a.N(C.t,H.F(a))},
$S:16}
W.jn.prototype={
af:function(a,b,c){if(this.er(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jN(a,"template")==="")return this.e.N(0,b)
return!1}}
W.jo.prototype={
$1:function(a){return"TEMPLATE::"+H.k(H.F(a))},
$S:28}
W.jm.prototype={
aA:function(a){var u=J.W(a)
if(!!u.$icp)return!1
u=!!u.$ip
if(u&&W.cb(a)==="foreignObject")return!1
if(u)return!0
return!1},
af:function(a,b,c){if(b==="is"||C.i.br(b,"on"))return!1
return this.aA(a)},
$iaj:1}
W.dh.prototype={
w:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.scO(J.lG(this.a,u))
this.c=u
return!0}this.scO(null)
this.c=t
return!1},
gE:function(a){return this.d},
scO:function(a){this.d=H.G(a,H.x(this,0))},
$iaI:1}
W.aj.prototype={}
W.jg.prototype={$inv:1}
W.eQ.prototype={
cl:function(a){new W.js(this).$2(a,null)},
aL:function(a,b){if(b==null)J.kp(a)
else J.f2(b,a)},
hn:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lJ(a)
s=J.jN(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ap(o)}q="element unprintable"
try{q=J.ah(a)}catch(o){H.ap(o)}try{p=W.cb(a)
this.hm(H.o(a,"$iQ"),b,u,q,p,H.o(t,"$iL"),H.F(s))}catch(o){if(H.ap(o) instanceof P.ax)throw o
else{this.aL(a,b)
window
n="Removing corrupted element "+H.k(q)
if(typeof console!="undefined")window.console.warn(n)}}},
hm:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.aL(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aA(a)){this.aL(a,b)
window
u="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.af(a,"is",g)){this.aL(a,b)
window
u="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga_(f)
t=H.c(u.slice(0),[H.x(u,0)])
for(s=f.ga_(f).length-1,u=f.a,r=J.ao(u);s>=0;--s){if(s>=t.length)return H.i(t,s)
q=t[s]
if(!this.a.af(a,J.lM(q),r.aH(u,q))){window
p="Removing disallowed attribute <"+H.k(e)+" "+q+'="'+H.k(r.aH(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aH(u,q)
r.hd(u,q)}}if(!!J.W(a).$icu)this.cl(a.content)},
$inf:1}
W.js.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.hn(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.aL(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ap(r)
q=H.o(u,"$iC")
if(s){p=q.parentNode
if(p!=null)J.f2(p,q)}else J.f2(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.o(t,"$iC")}},
$S:29}
W.e8.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eF.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
P.eP.prototype={$ibp:1,
gd9:function(a){return this.a}}
P.jz.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.fB.prototype={
gbA:function(){var u,t,s
u=this.b
t=H.ag(u,"v",0)
s=W.Q
return new H.h0(new H.cH(u,H.l(new P.fC(),{func:1,ret:P.O,args:[t]}),[t]),H.l(new P.fD(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.ko(this.b.a,b)},
gm:function(a){return J.bA(this.gbA().a)},
j:function(a,b){var u=this.gbA()
return u.b.$1(J.jM(u.a,b))},
gP:function(a){var u=P.kC(this.gbA(),!1,W.Q)
return new J.aq(u,u.length,0,[H.x(u,0)])},
$av:function(){return[W.Q]},
$ah:function(){return[W.Q]},
$ab:function(){return[W.Q]}}
P.fC.prototype={
$1:function(a){return!!J.W(H.o(a,"$iC")).$iQ},
$S:13}
P.fD.prototype={
$1:function(a){return H.j(H.o(a,"$iC"),"$iQ")},
$S:30}
P.jb.prototype={}
P.ae.prototype={}
P.b0.prototype={$ib0:1}
P.fT.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return this.aj(a,b)},
B:function(a,b){return this.j(a,b)},
aj:function(a,b){return a.getItem(b)},
$av:function(){return[P.b0]},
$ih:1,
$ah:function(){return[P.b0]},
$ib:1,
$ab:function(){return[P.b0]},
$ay:function(){return[P.b0]}}
P.b5.prototype={$ib5:1}
P.hq.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return this.aj(a,b)},
B:function(a,b){return this.j(a,b)},
aj:function(a,b){return a.getItem(b)},
$av:function(){return[P.b5]},
$ih:1,
$ah:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$ay:function(){return[P.b5]}}
P.hw.prototype={
gm:function(a){return a.length}}
P.cp.prototype={$icp:1}
P.i_.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return this.aj(a,b)},
B:function(a,b){return this.j(a,b)},
aj:function(a,b){return a.getItem(b)},
$av:function(){return[P.e]},
$ih:1,
$ah:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$ay:function(){return[P.e]}}
P.p.prototype={
gd7:function(a){return new P.fB(a,new W.ab(a))},
a2:function(a,b,c,d){var u,t,s,r,q,p
u=H.c([],[W.aj])
C.a.h(u,W.l3(null))
C.a.h(u,W.l5())
C.a.h(u,new W.jm())
c=new W.eQ(new W.dC(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).iv(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ab(r)
p=u.gas(u)
for(u=J.ao(q);s=p.firstChild,s!=null;)u.v(q,s)
return q},
$ip:1}
P.b7.prototype={$ib7:1}
P.ie.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return this.aj(a,b)},
B:function(a,b){return this.j(a,b)},
aj:function(a,b){return a.getItem(b)},
$av:function(){return[P.b7]},
$ih:1,
$ah:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$ay:function(){return[P.b7]}}
P.ej.prototype={}
P.ek.prototype={}
P.eu.prototype={}
P.ev.prototype={}
P.eG.prototype={}
P.eH.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.f6.prototype={
gm:function(a){return a.length}}
P.f7.prototype={
j:function(a,b){return P.b9(a.get(H.F(b)))},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b9(t.value[1]))}},
ga_:function(a){var u=H.c([],[P.e])
this.L(a,new P.f8(u))
return u},
gm:function(a){return a.size},
$aa4:function(){return[P.e,null]},
$iL:1,
$aL:function(){return[P.e,null]}}
P.f8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
P.f9.prototype={
gm:function(a){return a.length}}
P.bB.prototype={}
P.hr.prototype={
gm:function(a){return a.length}}
P.e7.prototype={}
P.d5.prototype={$id5:1}
P.di.prototype={$idi:1}
P.dI.prototype={$idI:1}
P.bP.prototype={
d0:function(a,b){return a.activeTexture(b)},
d4:function(a,b,c){return a.attachShader(b,c)},
ag:function(a,b,c){return a.bindBuffer(b,c)},
ih:function(a,b,c){return a.bindFramebuffer(b,c)},
aB:function(a,b,c){return a.bindTexture(b,c)},
ii:function(a,b,c){return a.blendFunc(b,c)},
d6:function(a,b,c,d){return a.bufferData(b,c,d)},
il:function(a,b){return a.clear(b)},
im:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
io:function(a,b){return a.clearDepth(b)},
iq:function(a,b){return a.compileShader(b)},
ix:function(a,b){return a.createShader(b)},
iz:function(a,b){return a.deleteProgram(b)},
iA:function(a,b){return a.deleteShader(b)},
iD:function(a,b){return a.depthFunc(b)},
iE:function(a,b){return a.disable(b)},
da:function(a,b){return a.disableVertexAttribArray(b)},
iG:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bZ:function(a,b){return a.enable(b)},
dc:function(a,b){return a.enableVertexAttribArray(b)},
e3:function(a,b){return a.generateMipmap(b)},
e4:function(a,b,c){return a.getActiveAttrib(b,c)},
e5:function(a,b,c){return a.getActiveUniform(b,c)},
e6:function(a,b,c){return a.getAttribLocation(b,c)},
ck:function(a,b){return a.getParameter(b)},
ea:function(a,b){return a.getProgramInfoLog(b)},
bp:function(a,b,c){return a.getProgramParameter(b,c)},
eb:function(a,b){return a.getShaderInfoLog(b)},
ec:function(a,b,c){return a.getShaderParameter(b,c)},
ed:function(a,b,c){return a.getUniformLocation(b,c)},
iU:function(a,b){return a.linkProgram(b)},
jd:function(a,b,c){return a.pixelStorei(b,c)},
ek:function(a,b,c){return a.shaderSource(b,c)},
js:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.W(g)
if(!!u.$ibp)t=!0
else t=!1
if(t){this.hE(a,b,c,d,e,f,P.mL(g))
return}if(!!u.$icd)u=!0
else u=!1
if(u){this.hF(a,b,c,d,e,f,g)
return}throw H.f(P.lN("Incorrect number or type of arguments"))},
jr:function(a,b,c,d,e,f,g){return this.js(a,b,c,d,e,f,g,null,null,null)},
hE:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hF:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bl:function(a,b,c,d){return a.texParameteri(b,c,d)},
H:function(a,b,c){return a.uniform1f(b,c)},
K:function(a,b,c){return a.uniform1i(b,c)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dZ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
e_:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
e0:function(a,b){return a.useProgram(b)},
jB:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jC:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibP:1}
P.dN.prototype={$idN:1}
P.dU.prototype={$idU:1}
P.e1.prototype={$ie1:1}
P.hS.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.T(b,a,null,null,null))
return P.b9(this.ff(a,b))},
B:function(a,b){return this.j(a,b)},
ff:function(a,b){return a.item(b)},
$av:function(){return[[P.L,,,]]},
$ih:1,
$ah:function(){return[[P.L,,,]]},
$ib:1,
$ab:function(){return[[P.L,,,]]},
$ay:function(){return[[P.L,,,]]}}
P.eC.prototype={}
P.eD.prototype={}
O.Z.prototype={
cr:function(a){this.sfk(H.c([],[a]))
this.scS(null)
this.scP(null)
this.scT(null)},
cm:function(a,b,c){var u=H.ag(this,"Z",0)
H.l(b,{func:1,ret:P.O,args:[[P.h,u]]})
u={func:1,ret:-1,args:[P.B,[P.h,u]]}
H.l(a,u)
H.l(c,u)
this.scS(b)
this.scP(a)
this.scT(c)},
bq:function(a,b){return this.cm(a,null,b)},
h_:function(a){var u
H.m(a,"$ih",[H.ag(this,"Z",0)],"$ah")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fm:function(a,b){var u
H.m(b,"$ih",[H.ag(this,"Z",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.aq(u,u.length,0,[H.x(u,0)])},
B:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ag(this,"Z",0)
H.G(b,u)
u=[u]
if(this.h_(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fm(s,H.c([b],u))}},
sfk:function(a){this.a=H.m(a,"$ib",[H.ag(this,"Z",0)],"$ab")},
scS:function(a){this.b=H.l(a,{func:1,ret:P.O,args:[[P.h,H.ag(this,"Z",0)]]})},
scP:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.B,[P.h,H.ag(this,"Z",0)]]})},
scT:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.B,[P.h,H.ag(this,"Z",0)]]})},
$ih:1}
O.ci.prototype={
gm:function(a){return this.a.length},
gA:function(){var u=this.b
if(u==null){u=D.as()
this.b=u}return u},
ez:function(a){var u=this.b
if(u!=null)u.T(a)},
at:function(){return this.ez(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gbj(u)
else return V.jX()},
dP:function(a){var u=this.a
if(a==null)C.a.h(u,V.jX())
else C.a.h(u,a)
this.at()},
cd:function(){var u=this.a
if(u.length>0){u.pop()
this.at()}},
sbC:function(a){this.a=H.m(a,"$ib",[V.a8],"$ab")}}
E.fa.prototype={}
E.ac.prototype={
scn:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gA().C(0,this.gdK())
t=this.c
if(t!=null)t.gA().h(0,this.gdK())
s=new D.S("shape",u,this.c,this,[F.dO])
s.b=!0
this.a8(s)}},
saQ:function(a){var u,t
if(!J.Y(this.r,a)){u=this.r
if(u!=null)u.gA().C(0,this.gdI())
if(a!=null)a.gA().h(0,this.gdI())
this.r=a
t=new D.S("mover",u,a,this,[U.bL])
t.b=!0
this.a8(t)}},
bn:function(a,b){var u,t,s,r,q,p,o,n
u=this.r
if(u!=null){t=u.r
s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.se1(u.a+u.d*b.y)
u.sdN(0,u.b+u.e*b.y)
u.sdS(u.c+u.f*b.y)
t=u.c
r=Math.cos(t)
q=Math.sin(t)
t=V.b2(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)
s=u.b
r=Math.cos(s)
q=Math.sin(s)
t=t.W(0,V.b2(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))
s=u.a
r=Math.cos(s)
q=Math.sin(s)
u.x=t.W(0,V.b2(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1))
t=u.y
if(t!=null)t.ai(0)}p=u.x}else p=null
if(!J.Y(p,this.x)){o=this.x
this.x=p
n=new D.S("matrix",o,p,this,[V.a8])
n.b=!0
this.a8(n)}for(u=this.y.a,u=new J.aq(u,u.length,0,[H.x(u,0)]);u.w();)u.d.bn(0,b)},
aF:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gV(u))
else C.a.h(u.a,t.W(0,u.gV(u)))
u.at()
a.dQ(this.f)
u=a.dy
s=(u&&C.a).gbj(u)
if(s!=null&&this.d!=null)s.jj(a,this)
for(u=this.y.a,u=new J.aq(u,u.length,0,[H.x(u,0)]);u.w();)u.d.aF(a)
a.dO()
a.dx.cd()},
a8:function(a){var u=this.z
if(u!=null)u.T(a)},
X:function(){return this.a8(null)},
dL:function(a){H.o(a,"$iD")
this.e=null
this.a8(a)},
j4:function(){return this.dL(null)},
dJ:function(a){this.a8(H.o(a,"$iD"))},
j3:function(){return this.dJ(null)},
dH:function(a){this.a8(H.o(a,"$iD"))},
j0:function(){return this.dH(null)},
j_:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ih",[E.ac],"$ah")
for(u=b.length,t=this.gdG(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bG()
o.sac(null)
o.say(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.X()},
j2:function(a,b){var u,t
H.m(b,"$ih",[E.ac],"$ah")
for(u=b.gP(b),t=this.gdG();u.w();)u.gE(u).gA().C(0,t)
this.X()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
seY:function(a,b){this.y=H.m(b,"$iZ",[E.ac],"$aZ")},
$ib4:1}
E.hz.prototype={
ev:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.bk(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.ci()
t=[V.a8]
u.sbC(H.c([],t))
u.b=null
u.gA().h(0,new E.hA(this))
this.cy=u
u=new O.ci()
u.sbC(H.c([],t))
u.b=null
u.gA().h(0,new E.hB(this))
this.db=u
u=new O.ci()
u.sbC(H.c([],t))
u.b=null
u.gA().h(0,new E.hC(this))
this.dx=u
this.shD(H.c([],[O.bR]))
u=this.dy;(u&&C.a).h(u,null)
this.shz(new H.aK([P.e,A.cq]))},
gje:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.gV(u)
t=this.db
t=u.W(0,t.gV(t))
this.z=t
u=t}return u},
dQ:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbj(u):a;(u&&C.a).h(u,t)},
dO:function(){var u=this.dy
if(u.length>1)u.pop()},
shD:function(a){this.dy=H.m(a,"$ib",[O.bR],"$ab")},
shz:function(a){this.fr=H.m(a,"$iL",[P.e,A.cq],"$aL")}}
E.hA.prototype={
$1:function(a){var u
H.o(a,"$iD")
u=this.a
u.z=null
u.ch=null},
$S:5}
E.hB.prototype={
$1:function(a){var u
H.o(a,"$iD")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:5}
E.hC.prototype={
$1:function(a){var u
H.o(a,"$iD")
u=this.a
u.ch=null
u.cx=null},
$S:5}
E.dZ.prototype={
cu:function(a){H.o(a,"$iD")
this.dR()},
ct:function(){return this.cu(null)},
giP:function(){var u,t,s
u=Date.now()
t=C.h.Y(P.kw(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.bk(u,!1)
return s/t},
cW:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.W()
if(typeof u!=="number")return H.by(u)
s=C.j.c5(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.W()
r=C.j.c5(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kU(C.p,this.gjk())}},
dR:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.i7(this),{func:1,ret:-1,args:[P.a0]})
C.G.f4(u)
C.G.hi(u,W.lc(t,P.a0))}},
ji:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.cW()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.bk(r,!1)
s.y=P.kw(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.at()
r=s.db
C.a.sm(r.a,0)
r.at()
r=s.dx
C.a.sm(r.a,0)
r.at()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aF(this.e)}s=this.z
if(s!=null)s.T(null)}catch(q){u=H.ap(q)
t=H.bY(q)
P.bZ("Error: "+H.k(u))
P.bZ("Stack: "+H.k(t))
throw H.f(u)}}}
E.i7.prototype={
$1:function(a){var u
H.n1(a)
u=this.a
if(u.ch){u.ch=!1
u.ji()}},
$S:33}
Z.e5.prototype={$in9:1}
Z.d6.prototype={
bR:function(a){var u,t,s
try{t=a.a
C.b.dc(t,this.e)
C.b.jB(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ap(s)
t=P.r('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.k(u))
throw H.f(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}}
Z.iN.prototype={$ina:1}
Z.d7.prototype={
aD:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bR:function(a){var u,t
u=this.a
C.b.ag(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bR(a)},
jz:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.da(s,u[t].e)
C.b.ag(s,this.a.a,null)},
aF:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.i(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ag(t,p,r.b)
C.b.iG(t,q.a,q.b,5123,0)
C.b.ag(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ah(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
sfe:function(a){this.b=H.m(a,"$ib",[Z.bq],"$ab")},
$ini:1}
Z.bq.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bN(this.c)+"'")+"]"}}
Z.aW.prototype={
gco:function(a){var u,t
u=this.a
t=(u&$.bd().a)!==0?3:0
if((u&$.bc().a)!==0)t+=3
if((u&$.bb().a)!==0)t+=3
if((u&$.be().a)!==0)t+=2
if((u&$.bf().a)!==0)t+=3
if((u&$.cZ().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=4
if((u&$.c1().a)!==0)++t
return(u&$.ba().a)!==0?t+4:t},
ic:function(a){var u,t,s
u=$.bd()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bc()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bb()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.be()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bf()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cZ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d_()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c1()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ba()
if((t&u.a)!==0)if(s===a)return u
return $.lD()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aW))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.e])
t=this.a
if((t&$.bd().a)!==0)C.a.h(u,"Pos")
if((t&$.bc().a)!==0)C.a.h(u,"Norm")
if((t&$.bb().a)!==0)C.a.h(u,"Binm")
if((t&$.be().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bf().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cZ().a)!==0)C.a.h(u,"Clr3")
if((t&$.d_().a)!==0)C.a.h(u,"Clr4")
if((t&$.c1().a)!==0)C.a.h(u,"Weight")
if((t&$.ba().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.fd.prototype={}
D.bG.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.D]}
H.l(b,u)
if(this.a==null)this.sac(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[D.D]})
u=this.a
u=u==null?null:C.a.N(u,b)
if(u===!0){u=this.a
t=(u&&C.a).C(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.N(u,b)
if(u===!0){u=this.b
t=(u&&C.a).C(u,b)||t}return t},
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
return!0}if(!s)C.a.L(P.kC(t,!0,{func:1,ret:-1,args:[D.D]}),new D.fw(u))
t=this.b
if(t!=null){this.say(H.c([],[{func:1,ret:-1,args:[D.D]}]))
C.a.L(t,new D.fx(u))}return!0},
iI:function(){return this.T(null)},
jl:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.T(t)}}},
ai:function(a){return this.jl(a,!0,!1)},
sac:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")},
say:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")}}
D.fw.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.fx.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.D.prototype={}
D.ce.prototype={}
D.cf.prototype={}
D.S.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.d8.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.dr.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dr))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.fS.prototype={
ja:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j6:function(a){this.c=a.b
this.d.C(0,a.a)
return!1},
shb:function(a){this.d=H.m(a,"$ikP",[P.B],"$akP")}}
X.fY.prototype={
cc:function(a,b){this.r=a.a
return!1},
aS:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.ef()
if(typeof u!=="number")return u.e2()
this.r=(u&~t)>>>0
return!1},
aR:function(a,b){return!1},
jb:function(a){return!1},
fP:function(a,b,c){return}}
X.b3.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.b3))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.hf.prototype={
cc:function(a,b){this.f=a.a
return!1},
aS:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.ef()
if(typeof u!=="number")return u.e2()
this.f=(u&~t)>>>0
return!1},
aR:function(a,b){return!1},
jc:function(a,b){return!1}}
X.ib.prototype={
j9:function(a){H.m(a,"$ib",[V.ak],"$ab")
return!1},
j7:function(a){H.m(a,"$ib",[V.ak],"$ab")
return!1},
j8:function(a){H.m(a,"$ib",[V.ak],"$ab")
return!1}}
X.e4.prototype={
cJ:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dr(u,new X.b3(t,a.altKey,a.shiftKey))},
az:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.b3(t,a.altKey,a.shiftKey)},
bN:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.b3(t,a.altKey,a.shiftKey)},
ao:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.a0()
q=u.top
if(typeof s!=="number")return s.a0()
return new V.ak(t-r,s-q)},
aK:function(a){return new V.b8(a.movementX,a.movementY)},
bH:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.ak])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
o=C.j.a9(p.pageX)
C.j.a9(p.pageY)
n=u.left
C.j.a9(p.pageX)
C.a.h(t,new V.ak(o-n,C.j.a9(p.pageY)-u.top))}return t},
am:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d8(u,new X.b3(t,a.altKey,a.shiftKey))},
bD:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.a0()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.a0()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
fJ:function(a){this.f=!0},
fv:function(a){this.f=!1},
fD:function(a){H.o(a,"$ia5")
if(this.f&&this.bD(a))a.preventDefault()},
fN:function(a){var u
H.o(a,"$iaL")
if(!this.f)return
u=this.cJ(a)
this.b.ja(u)},
fL:function(a){var u
H.o(a,"$iaL")
if(!this.f)return
u=this.cJ(a)
this.b.j6(u)},
fR:function(a){var u,t,s,r
H.o(a,"$ia5")
u=this.a
u.focus()
this.f=!0
this.az(a)
if(this.x){t=this.am(a)
s=this.aK(a)
if(this.d.cc(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.am(a)
r=this.ao(a)
if(this.c.cc(t,r))a.preventDefault()},
fV:function(a){var u,t,s
H.o(a,"$ia5")
this.az(a)
u=this.am(a)
if(this.x){t=this.aK(a)
if(this.d.aS(u,t))a.preventDefault()
return}if(this.r)return
s=this.ao(a)
if(this.c.aS(u,s))a.preventDefault()},
fH:function(a){var u,t,s
H.o(a,"$ia5")
if(!this.bD(a)){this.az(a)
u=this.am(a)
if(this.x){t=this.aK(a)
if(this.d.aS(u,t))a.preventDefault()
return}if(this.r)return
s=this.ao(a)
if(this.c.aS(u,s))a.preventDefault()}},
fT:function(a){var u,t,s
H.o(a,"$ia5")
this.az(a)
u=this.am(a)
if(this.x){t=this.aK(a)
if(this.d.aR(u,t))a.preventDefault()
return}if(this.r)return
s=this.ao(a)
if(this.c.aR(u,s))a.preventDefault()},
fF:function(a){var u,t,s
H.o(a,"$ia5")
if(!this.bD(a)){this.az(a)
u=this.am(a)
if(this.x){t=this.aK(a)
if(this.d.aR(u,t))a.preventDefault()
return}if(this.r)return
s=this.ao(a)
if(this.c.aR(u,s))a.preventDefault()}},
fX:function(a){var u,t
H.o(a,"$iaX")
this.az(a)
u=new V.b8((a&&C.F).giB(a),C.F.giC(a)).I(0,180)
if(this.x){if(this.d.jb(u))a.preventDefault()
return}if(this.r)return
t=this.ao(a)
if(this.c.jc(u,t))a.preventDefault()},
fZ:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.am(this.y)
s=this.ao(this.y)
this.d.fP(t,s,u)}},
h9:function(a){var u
H.o(a,"$iaB")
this.a.focus()
this.f=!0
this.bN(a)
u=this.bH(a)
if(this.e.j9(u))a.preventDefault()},
h5:function(a){var u
H.o(a,"$iaB")
this.bN(a)
u=this.bH(a)
if(this.e.j7(u))a.preventDefault()},
h7:function(a){var u
H.o(a,"$iaB")
this.bN(a)
u=this.bH(a)
if(this.e.j8(u))a.preventDefault()},
sf5:function(a){this.z=H.m(a,"$ib",[[P.ct,P.N]],"$ab")}}
D.bl.prototype={
ak:function(a){var u
H.o(a,"$iD")
u=this.d
if(u!=null)u.T(a)},
eD:function(){return this.ak(null)},
$ia_:1,
$ib4:1}
D.a_.prototype={$ib4:1}
D.ds.prototype={
ak:function(a){var u=this.Q
if(u!=null)u.T(a)},
cR:function(a){var u
H.o(a,"$iD")
u=this.ch
if(u!=null)u.T(a)},
fO:function(){return this.cR(null)},
h1:function(a){var u,t,s
H.m(a,"$ih",[D.a_],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.eB(s))return!1}return!0},
fo:function(a,b){var u,t,s,r,q,p,o,n
u=D.a_
H.m(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gcQ(),r={func:1,ret:-1,args:[D.D]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=H.o(b[p],"$ia_")
if(o instanceof D.bl)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bG()
n.sac(null)
n.say(null)
n.c=null
n.d=0
o.d=n}H.l(s,r)
if(n.a==null)n.sac(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.ce(a,b,this,[u])
u.b=!0
this.ak(u)},
h3:function(a,b){var u,t,s,r
u=D.a_
H.m(b,"$ih",[u],"$ah")
for(t=b.gP(b),s=this.gcQ();t.w();){r=t.gE(t)
C.a.C(this.e,r)
r.gA().C(0,s)}u=new D.cf(a,b,this,[u])
u.b=!0
this.ak(u)},
eB:function(a){var u=C.a.N(this.e,a)
return u},
sf3:function(a){this.e=H.m(a,"$ib",[D.bl],"$ab")},
sha:function(a){this.f=H.m(a,"$ib",[D.dF],"$ab")},
shB:function(a){this.r=H.m(a,"$ib",[D.dP],"$ab")},
shI:function(a){this.x=H.m(a,"$ib",[D.dW],"$ab")},
shJ:function(a){this.y=H.m(a,"$ib",[D.dX],"$ab")},
shK:function(a){this.z=H.m(a,"$ib",[D.dY],"$ab")},
$ah:function(){return[D.a_]},
$aZ:function(){return[D.a_]}}
D.dF.prototype={$ia_:1,$ib4:1}
D.dP.prototype={$ia_:1,$ib4:1}
D.dW.prototype={$ia_:1,$ib4:1}
D.dX.prototype={$ia_:1,$ib4:1}
D.dY.prototype={$ia_:1,$ib4:1}
V.a1.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.bE.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bE))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}
V.fu.prototype={}
V.dy.prototype={
a5:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dy))return!1
u=b.a
t=$.M().a
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
u=[P.z]
t=V.bX(H.c([this.a,this.d,this.r],u),3,0)
s=V.bX(H.c([this.b,this.e,this.x],u),3,0)
r=V.bX(H.c([this.c,this.f,this.y],u),3,0)
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
V.a8.prototype={
a5:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.z])
return u},
dD:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.M().a)return V.jX()
a8=1/a7
a9=-r
b0=-d
return V.b2((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
W:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.b2(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
ci:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.R(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
aV:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.ay(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.M().a
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
i:function(a){return this.F()},
dC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.z]
t=V.bX(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bX(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bX(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bX(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
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
F:function(){return this.dC("",3,0)},
u:function(a){return this.dC(a,3,0)}}
V.ak.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.ay.prototype={
a0:function(a,b){return new V.ay(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.dH.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dH))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}
V.dL.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dL))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}
V.b8.prototype={
c7:function(a){var u,t
u=this.a
if(typeof u!=="number")return u.W()
t=this.b
if(typeof t!=="number")return t.W()
return Math.sqrt(u*u+t*t)},
I:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.kY
if(u==null){u=new V.b8(0,0)
$.kY=u}return u}u=this.a
if(typeof u!=="number")return u.I()
t=this.b
if(typeof t!=="number")return t.I()
return new V.b8(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b8))return!1
u=b.a
t=this.a
s=$.M()
s.toString
if(typeof u!=="number")return u.a0()
if(typeof t!=="number")return H.by(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.a0()
if(typeof t!=="number")return H.by(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.R.prototype={
c7:function(a){return Math.sqrt(this.O(this))},
O:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c8:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.R(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aM:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.R(u*t-s*r,s*q-p*t,p*r-u*q)},
M:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
aI:function(a){return new V.R(-this.a,-this.b,-this.c)},
I:function(a,b){if(Math.abs(b-0)<$.M().a)return V.cG()
return new V.R(this.a/b,this.b/b,this.c/b)},
dE:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
U.da.prototype={
gA:function(){var u=this.b
if(u==null){u=D.as()
this.b=u}return u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.da))return!1
return J.Y(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}}
U.bL.prototype={}
U.dM.prototype={
gA:function(){var u=this.y
if(u==null){u=D.as()
this.y=u}return u},
ax:function(a){var u=this.y
if(u!=null)u.T(a)},
se1:function(a){var u
a=V.kk(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.M().a)){this.a=a
u=new D.S("yaw",u,a,this,[P.z])
u.b=!0
this.ax(u)}},
sdN:function(a,b){var u
b=V.kk(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.M().a)){this.b=b
u=new D.S("pitch",u,b,this,[P.z])
u.b=!0
this.ax(u)}},
sdS:function(a){var u
a=V.kk(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.M().a)){this.c=a
u=new D.S("roll",u,a,this,[P.z])
u.b=!0
this.ax(u)}},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dM))return!1
u=this.a
t=b.a
s=$.M().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"], ["+V.K(this.d,3,0)+", "+V.K(this.e,3,0)+", "+V.K(this.f,3,0)+"]"}}
M.df.prototype={
al:function(a){var u
H.o(a,"$iD")
u=this.x
if(u!=null)u.T(a)},
eF:function(){return this.al(null)},
fz:function(a,b){var u,t,s,r,q,p,o,n
u=E.ac
H.m(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gab(),r={func:1,ret:-1,args:[D.D]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bG()
n.sac(null)
n.say(null)
n.c=null
n.d=0
o.z=n}H.l(s,r)
if(n.a==null)n.sac(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.ce(a,b,this,[u])
u.b=!0
this.al(u)},
fB:function(a,b){var u,t,s
u=E.ac
H.m(b,"$ih",[u],"$ah")
for(t=b.gP(b),s=this.gab();t.w();)t.gE(t).gA().C(0,s)
u=new D.cf(a,b,this,[u])
u.b=!0
this.al(u)},
sdU:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gA().C(0,this.gab())
t=this.c
this.c=a
if(a!=null)a.gA().h(0,this.gab())
u=new D.S("technique",t,this.c,this,[O.bR])
u.b=!0
this.al(u)}},
gA:function(){var u=this.x
if(u==null){u=D.as()
this.x=u}return u},
aF:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.dQ(this.c)
u=this.b
u.toString
t=a.a
C.b.ih(t,36160,null)
C.b.bZ(t,2884)
C.b.bZ(t,2929)
C.b.iD(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.by(s)
o=C.j.a9(p*s)
p=q.b
if(typeof r!=="number")return H.by(r)
n=C.j.a9(p*r)
p=C.j.a9(q.c*s)
a.c=p
q=C.j.a9(q.d*r)
a.d=q
C.b.jC(t,o,n,p,q)
C.b.io(t,u.c)
u=u.a
C.b.im(t,u.a,u.b,u.c,u.d)
C.b.il(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b2(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dP(i)
t=$.kI
if(t==null){t=V.kK()
q=V.l1()
p=$.kZ
if(p==null){p=new V.R(0,0,-1)
$.kZ=p}p=V.kE(t,q,p)
$.kI=p
h=p}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.W(0,h)}a.db.dP(h)
u=this.c
if(u!=null)u.bn(0,a)
for(u=this.d.a,u=new J.aq(u,u.length,0,[H.x(u,0)]);u.w();)u.d.bn(0,a)
for(u=this.d.a,u=new J.aq(u,u.length,0,[H.x(u,0)]);u.w();)u.d.aF(a)
this.a.toString
a.cy.cd()
a.db.cd()
this.b.toString
a.dO()},
seE:function(a,b){this.d=H.m(b,"$iZ",[E.ac],"$aZ")},
$ing:1}
A.d3.prototype={}
A.f5.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iJ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.dc(r.a,r.c)}},
iF:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.da(r.a,r.c)}}}
A.h3.prototype={
eu:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.b6("")
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
a7.hO(u)
a7.hV(u)
a7.hP(u)
a7.i2(u)
a7.i3(u)
a7.hX(u)
a7.i7(u)
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
u=new P.b6("")
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
s.hS(u)
s.hN(u)
s.hQ(u)
s.hT(u)
s.i0(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.hZ(u)
s.i_(u)}s.hW(u)
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
k=H.c([],[P.e])
if(s.b!==C.c)C.a.h(k,"ambient()")
if(s.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.hR(u)
s.hY(u)
s.i1(u)
s.i4(u)
s.i5(u)
s.i6(u)
s.hU(u)}m=u.a+="// === Main ===\n"
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
j=H.c([],[P.e])
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
this.e=this.cK(n,35633)
this.f=this.cK(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.d4(s,q,this.e)
C.b.d4(s,this.r,this.f)
C.b.iU(s,this.r)
if(!H.k9(C.b.bp(s,this.r,35714))){h=C.b.ea(s,this.r)
C.b.iz(s,this.r)
H.t(P.r("Failed to link shader: "+H.k(h)))}this.hw()
this.hy()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.j(this.y.n(0,"invViewMat"),"$ial")
if(t)this.dy=H.j(this.y.n(0,"objMat"),"$ial")
if(r)this.fr=H.j(this.y.n(0,"viewObjMat"),"$ial")
this.fy=H.j(this.y.n(0,"projViewObjMat"),"$ial")
if(a7.x2)this.k1=H.j(this.y.n(0,"txt2DMat"),"$icz")
if(a7.y1)this.k2=H.j(this.y.n(0,"txtCubeMat"),"$ial")
if(a7.y2)this.k3=H.j(this.y.n(0,"colorMat"),"$ial")
this.seU(H.c([],[A.al]))
t=a7.ah
if(t>0){this.k4=H.o(this.y.n(0,"bendMatCount"),"$iJ")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.r("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.j(f,"$ial"))}}t=a7.a
if(t!==C.c){this.r2=H.j(this.y.n(0,"emissionClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.d:this.rx=H.j(this.y.n(0,"emissionTxt"),"$ia9")
this.x1=H.j(this.y.n(0,"nullEmissionTxt"),"$iJ")
break
case C.e:this.ry=H.j(this.y.n(0,"emissionTxt"),"$iaa")
this.x1=H.j(this.y.n(0,"nullEmissionTxt"),"$iJ")
break}}t=a7.b
if(t!==C.c){this.x2=H.j(this.y.n(0,"ambientClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.d:this.y1=H.j(this.y.n(0,"ambientTxt"),"$ia9")
this.ah=H.j(this.y.n(0,"nullAmbientTxt"),"$iJ")
break
case C.e:this.y2=H.j(this.y.n(0,"ambientTxt"),"$iaa")
this.ah=H.j(this.y.n(0,"nullAmbientTxt"),"$iJ")
break}}t=a7.c
if(t!==C.c){this.a7=H.j(this.y.n(0,"diffuseClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.d:this.b4=H.j(this.y.n(0,"diffuseTxt"),"$ia9")
this.b5=H.j(this.y.n(0,"nullDiffuseTxt"),"$iJ")
break
case C.e:this.dd=H.j(this.y.n(0,"diffuseTxt"),"$iaa")
this.b5=H.j(this.y.n(0,"nullDiffuseTxt"),"$iJ")
break}}t=a7.d
if(t!==C.c){this.b6=H.j(this.y.n(0,"invDiffuseClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.d:this.de=H.j(this.y.n(0,"invDiffuseTxt"),"$ia9")
this.b7=H.j(this.y.n(0,"nullInvDiffuseTxt"),"$iJ")
break
case C.e:this.df=H.j(this.y.n(0,"invDiffuseTxt"),"$iaa")
this.b7=H.j(this.y.n(0,"nullInvDiffuseTxt"),"$iJ")
break}}t=a7.e
if(t!==C.c){this.ba=H.j(this.y.n(0,"shininess"),"$iX")
this.b8=H.j(this.y.n(0,"specularClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.d:this.dg=H.j(this.y.n(0,"specularTxt"),"$ia9")
this.b9=H.j(this.y.n(0,"nullSpecularTxt"),"$iJ")
break
case C.e:this.dh=H.j(this.y.n(0,"specularTxt"),"$iaa")
this.b9=H.j(this.y.n(0,"nullSpecularTxt"),"$iJ")
break}}switch(a7.f){case C.c:break
case C.f:break
case C.d:this.di=H.j(this.y.n(0,"bumpTxt"),"$ia9")
this.bb=H.j(this.y.n(0,"nullBumpTxt"),"$iJ")
break
case C.e:this.dj=H.j(this.y.n(0,"bumpTxt"),"$iaa")
this.bb=H.j(this.y.n(0,"nullBumpTxt"),"$iJ")
break}if(a7.dy){this.dk=H.j(this.y.n(0,"envSampler"),"$iaa")
this.dl=H.j(this.y.n(0,"nullEnvTxt"),"$iJ")
t=a7.r
if(t!==C.c){this.bc=H.j(this.y.n(0,"reflectClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.d:this.dm=H.j(this.y.n(0,"reflectTxt"),"$ia9")
this.bd=H.j(this.y.n(0,"nullReflectTxt"),"$iJ")
break
case C.e:this.dn=H.j(this.y.n(0,"reflectTxt"),"$iaa")
this.bd=H.j(this.y.n(0,"nullReflectTxt"),"$iJ")
break}}t=a7.x
if(t!==C.c){this.be=H.j(this.y.n(0,"refraction"),"$iX")
this.bf=H.j(this.y.n(0,"refractClr"),"$iH")
switch(t){case C.c:break
case C.f:break
case C.d:this.dq=H.j(this.y.n(0,"refractTxt"),"$ia9")
this.bg=H.j(this.y.n(0,"nullRefractTxt"),"$iJ")
break
case C.e:this.dr=H.j(this.y.n(0,"refractTxt"),"$iaa")
this.bg=H.j(this.y.n(0,"nullRefractTxt"),"$iJ")
break}}}t=a7.y
if(t!==C.c){this.bh=H.j(this.y.n(0,"alpha"),"$iX")
switch(t){case C.c:break
case C.f:break
case C.d:this.ds=H.j(this.y.n(0,"alphaTxt"),"$ia9")
this.bi=H.j(this.y.n(0,"nullAlphaTxt"),"$iJ")
break
case C.e:this.dt=H.j(this.y.n(0,"alphaTxt"),"$iaa")
this.bi=H.j(this.y.n(0,"nullAlphaTxt"),"$iJ")
break}}this.seG(H.c([],[A.cy]))
this.seH(H.c([],[A.cA]))
this.seI(H.c([],[A.cB]))
this.seJ(H.c([],[A.cC]))
this.seK(H.c([],[A.cD]))
this.seL(H.c([],[A.cE]))
if(a7.k2){t=a7.z
if(t>0){this.du=H.o(this.y.n(0,"dirLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iH")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iH")
s=this.c_;(s&&C.a).h(s,new A.cy(g,f,e))}}t=a7.Q
if(t>0){this.dv=H.o(this.y.n(0,"pntLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iH")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iH")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iH")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iX")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iX")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iX")
s=this.c0;(s&&C.a).h(s,new A.cA(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.dw=H.o(this.y.n(0,"spotLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iH")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iH")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iH")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iH")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iX")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iX")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iX")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iX")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iX")
s=this.c1;(s&&C.a).h(s,new A.cB(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.dz=H.o(this.y.n(0,"txtDirLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iH")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iH")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iH")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iH")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iH")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iJ")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$ia9")
s=this.c2;(s&&C.a).h(s,new A.cC(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.dA=H.o(this.y.n(0,"txtPntLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iH")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iH")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$icz")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iH")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iJ")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iX")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iX")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iX")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iaa")
s=this.c3;(s&&C.a).h(s,new A.cD(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.dB=H.o(this.y.n(0,"txtSpotLightCount"),"$iJ")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iH")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iH")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iH")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iH")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iH")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iJ")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iH")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iX")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iX")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a3,"$iX")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a4,"$iX")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a5,"$iX")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a6,"$ia9")
s=this.c4;(s&&C.a).h(s,new A.cE(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
a6:function(a,b,c){if(c==null||!c.d)C.b.K(b.a,b.d,1)
else{a.ej(c)
C.b.K(b.a,b.d,0)}},
a1:function(a,b,c){C.b.K(b.a,b.d,1)},
seU:function(a){this.r1=H.m(a,"$ib",[A.al],"$ab")},
seG:function(a){this.c_=H.m(a,"$ib",[A.cy],"$ab")},
seH:function(a){this.c0=H.m(a,"$ib",[A.cA],"$ab")},
seI:function(a){this.c1=H.m(a,"$ib",[A.cB],"$ab")},
seJ:function(a){this.c2=H.m(a,"$ib",[A.cC],"$ab")},
seK:function(a){this.c3=H.m(a,"$ib",[A.cD],"$ab")},
seL:function(a){this.c4=H.m(a,"$ib",[A.cE],"$ab")}}
A.h6.prototype={
hO:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ah+"];\n"
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
hV:function(a){var u
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
hP:function(a){var u
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
i2:function(a){var u,t
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
i3:function(a){var u,t
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
hX:function(a){var u
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
i7:function(a){var u
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
an:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.i(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.i.aW(c,1))+"Txt;\n"
a.a=u
if(b===C.d)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hS:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.an(a,u,"emission")
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
hN:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.an(a,u,"ambient")
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
hQ:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.an(a,u,"diffuse")
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
hT:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.an(a,u,"invDiffuse")
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
i0:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.an(a,u,"specular")
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
hW:function(a){var u,t
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
hZ:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.an(a,u,"reflect")
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
i_:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.an(a,u,"refract")
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
hR:function(a){var u,t
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
hY:function(a){var u,t
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
i1:function(a){var u,t
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
i4:function(a){var u,t,s
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
i5:function(a){var u,t,s
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
i6:function(a){var u,t,s
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
hU:function(a){var u
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
i:function(a){return this.a7}}
A.cy.prototype={}
A.cC.prototype={}
A.cA.prototype={}
A.cD.prototype={}
A.cB.prototype={}
A.cE.prototype={}
A.cq.prototype={
ex:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cK:function(a,b){var u,t,s
u=this.a
t=C.b.ix(u,b)
C.b.ek(u,t,a)
C.b.iq(u,t)
if(!H.k9(C.b.ec(u,t,35713))){s=C.b.eb(u,t)
C.b.iA(u,t)
throw H.f(P.r("Error compiling shader '"+H.k(t)+"': "+H.k(s)))}return t},
hw:function(){var u,t,s,r,q,p
u=H.c([],[A.d3])
t=this.a
s=H.a6(C.b.bp(t,this.r,35721))
if(typeof s!=="number")return H.by(s)
r=0
for(;r<s;++r){q=C.b.e4(t,this.r,r)
p=C.b.e6(t,this.r,q.name)
C.a.h(u,new A.d3(t,q.name,p))}this.x=new A.f5(u)},
hy:function(){var u,t,s,r,q,p
u=H.c([],[A.e0])
t=this.a
s=H.a6(C.b.bp(t,this.r,35718))
if(typeof s!=="number")return H.by(s)
r=0
for(;r<s;++r){q=C.b.e5(t,this.r,r)
p=C.b.ed(t,this.r,q.name)
C.a.h(u,this.iy(q.type,q.size,q.name,p))}this.y=new A.ir(u)},
aw:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.J(u,t,b,c)
else return A.k0(u,t,b,a,c)},
f0:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a9(u,t,b,c)
else return A.k0(u,t,b,a,c)},
f1:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aa(u,t,b,c)
else return A.k0(u,t,b,a,c)},
b2:function(a,b){return new P.ee(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
iy:function(a,b,c,d){switch(a){case 5120:return this.aw(b,c,d)
case 5121:return this.aw(b,c,d)
case 5122:return this.aw(b,c,d)
case 5123:return this.aw(b,c,d)
case 5124:return this.aw(b,c,d)
case 5125:return this.aw(b,c,d)
case 5126:return new A.X(this.a,this.r,c,d)
case 35664:return new A.il(this.a,this.r,c,d)
case 35665:return new A.H(this.a,this.r,c,d)
case 35666:return new A.ip(this.a,this.r,c,d)
case 35667:return new A.im(this.a,this.r,c,d)
case 35668:return new A.io(this.a,this.r,c,d)
case 35669:return new A.iq(this.a,this.r,c,d)
case 35674:return new A.is(this.a,this.r,c,d)
case 35675:return new A.cz(this.a,this.r,c,d)
case 35676:return new A.al(this.a,this.r,c,d)
case 35678:return this.f0(b,c,d)
case 35680:return this.f1(b,c,d)
case 35670:throw H.f(this.b2("BOOL",c))
case 35671:throw H.f(this.b2("BOOL_VEC2",c))
case 35672:throw H.f(this.b2("BOOL_VEC3",c))
case 35673:throw H.f(this.b2("BOOL_VEC4",c))
default:throw H.f(P.r("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.bF.prototype={
i:function(a){return this.b}}
A.e0.prototype={}
A.ir.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.f(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.F()},
iO:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+a
return s},
F:function(){return this.iO("\n")}}
A.J.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.im.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.io.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
shL:function(a){this.e=H.m(a,"$ib",[P.B],"$ab")}}
A.X.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.il.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.H.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.is.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.cz.prototype={
aa:function(a){var u=new Float32Array(H.cU(H.m(a,"$ib",[P.z],"$ab")))
C.b.dZ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.al.prototype={
aa:function(a){var u=new Float32Array(H.cU(H.m(a,"$ib",[P.z],"$ab")))
C.b.e_(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.a9.prototype={
ej:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.K(t,s,0)
else C.b.K(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.aa.prototype={
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.ju.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.c8(u.b,b).c8(u.d.c8(u.c,b),c)
u=new V.ay(t.a,t.b,t.c)
if(!J.Y(a.f,u)){a.f=u
u=a.a
if(u!=null)u.X()}a.sjt(t.I(0,Math.sqrt(t.O(t))))
u=1-b
s=1-c
s=new V.dH(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.Y(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.X()}},
$S:36}
F.a2.prototype={
aN:function(){if(!this.gaO()){C.a.C(this.a.a.d.b,this)
this.a.a.X()}this.bJ()
this.bK()
this.hg()},
ht:function(a){this.a=a
C.a.h(a.d.b,this)},
hu:function(a){this.b=a
C.a.h(a.d.c,this)},
hv:function(a){this.c=a
C.a.h(a.d.d,this)},
bJ:function(){var u=this.a
if(u!=null){C.a.C(u.d.b,this)
this.a=null}},
bK:function(){var u=this.b
if(u!=null){C.a.C(u.d.c,this)
this.b=null}},
hg:function(){var u=this.c
if(u!=null){C.a.C(u.d.d,this)
this.c=null}},
gaO:function(){return this.a==null||this.b==null||this.c==null},
eT:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cG()
if(t!=null)q=q.M(0,t)
if(s!=null)q=q.M(0,s)
if(r!=null)q=q.M(0,r)
if(q.dE())return
return q.I(0,Math.sqrt(q.O(q)))},
eX:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.a0(0,t)
u=new V.R(u.a,u.b,u.c)
q=u.I(0,Math.sqrt(u.O(u)))
u=r.a0(0,t)
u=new V.R(u.a,u.b,u.c)
u=q.aM(u.I(0,Math.sqrt(u.O(u))))
return u.I(0,Math.sqrt(u.O(u)))},
bV:function(){if(this.d!=null)return!0
var u=this.eT()
if(u==null){u=this.eX()
if(u==null)return!1}this.d=u
this.a.a.X()
return!0},
eS:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cG()
if(t!=null)q=q.M(0,t)
if(s!=null)q=q.M(0,s)
if(r!=null)q=q.M(0,r)
if(q.dE())return
return q.I(0,Math.sqrt(q.O(q)))},
eW:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.M().a){u=m.a0(0,p)
u=new V.R(u.a,u.b,u.c)
h=u.I(0,Math.sqrt(u.O(u)))
if(j.a-k.a<0)h=h.aI(0)}else{g=(u-l.b)/i
u=m.a0(0,p)
u=new V.ay(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).a0(0,s)
u=new V.R(u.a,u.b,u.c)
h=u.I(0,Math.sqrt(u.O(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.aI(0)}u=this.d
if(u!=null){f=u.I(0,Math.sqrt(u.O(u)))
u=f.aM(h)
u=u.I(0,Math.sqrt(u.O(u))).aM(f)
h=u.I(0,Math.sqrt(u.O(u)))}return h},
bT:function(){if(this.e!=null)return!0
var u=this.eS()
if(u==null){u=this.eW()
if(u==null)return!1}this.e=u
this.a.a.X()
return!0},
gip:function(a){if(J.Y(this.a,this.b))return!0
if(J.Y(this.b,this.c))return!0
if(J.Y(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
u:function(a){var u,t
if(this.gaO())return a+"disposed"
u=a+C.i.a4(J.ah(this.a.e),0)+", "+C.i.a4(J.ah(this.b.e),0)+", "+C.i.a4(J.ah(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
F:function(){return this.u("")}}
F.fy.prototype={}
F.hP.prototype={
aP:function(a,b,c){var u,t
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
F.b1.prototype={
aN:function(){if(!this.gaO()){C.a.C(this.a.a.c.b,this)
this.a.a.X()}this.bJ()
this.bK()},
bJ:function(){var u=this.a
if(u!=null){C.a.C(u.c.b,this)
this.a=null}},
bK:function(){var u=this.b
if(u!=null){C.a.C(u.c.c,this)
this.b=null}},
gaO:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
u:function(a){if(this.gaO())return a+"disposed"
return a+C.i.a4(J.ah(this.a.e),0)+", "+C.i.a4(J.ah(this.b.e),0)},
F:function(){return this.u("")}}
F.fU.prototype={}
F.ij.prototype={
aP:function(a,b,c){var u,t
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
F.bs.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
u:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.i.a4(J.ah(u.e),0)},
F:function(){return this.u("")}}
F.dO.prototype={
gA:function(){var u=this.e
if(u==null){u=D.as()
this.e=u}return u},
cb:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.q()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){q=u[r]
this.a.h(0,q.it())}this.a.q()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.M()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bs()
if(m.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.T(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.M()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.M()
o+=t
n=n.c
if(o>=n.length)return H.i(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
o=new F.b1()
n=k.a
if(n==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(n!=j.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
o.a=k
C.a.h(k.c.b,o)
o.b=j
C.a.h(j.c.c,o)
C.a.h(o.a.a.c.b,o)
o=o.a.a.e
if(o!=null)o.T(null)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.M()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.M()
o+=t
n=n.c
if(o>=n.length)return H.i(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.M()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.dg(k,j,h)}u=this.e
if(u!=null)u.ai(0)},
aC:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aC()||!1
if(!this.a.aC())t=!1
u=this.e
if(u!=null)u.ai(0)
return t},
iY:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.c(u.slice(0),[H.x(u,0)])
for(u=[F.an];t.length!==0;){s=C.a.giL(t)
C.a.jg(t,0)
if(s!=null){r=H.c([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.A)(t),++p){o=t[p]
if(o!=null&&a.aP(0,s,o)){C.a.h(r,o)
C.a.C(t,o)}}if(r.length>1)b.cb(r)}}this.a.q()
this.c.ce()
this.d.ce()
this.b.jh()
this.c.cf(new F.ij())
this.d.cf(new F.hP())
u=this.e
if(u!=null)u.ai(0)},
ij:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bd()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bc().a)!==0)++r
if((s&$.bb().a)!==0)++r
if((s&$.be().a)!==0)++r
if((s&$.bf().a)!==0)++r
if((s&$.cZ().a)!==0)++r
if((s&$.d_().a)!==0)++r
if((s&$.c1().a)!==0)++r
if((s&$.ba().a)!==0)++r
q=a1.gco(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.z
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.d6])
for(m=0,l=0;l<r;++l){k=a1.ic(l)
j=k.gco(k)
C.a.S(n,l,new Z.d6(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.i(t,i)
h=t[i].iV(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.S(o,g,h[f]);++g}}m+=j}H.m(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.ag(t,34962,e)
C.b.d6(t,34962,new Float32Array(H.cU(o)),35044)
C.b.ag(t,34962,null)
d=new Z.d7(new Z.e5(34962,e),n,a1)
d.sfe(H.c([],[Z.bq]))
if(this.b.b.length!==0){s=P.B
c=H.c([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.q()
C.a.h(c,b.e)}a=Z.k2(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bq(0,c.length,a))}if(this.c.b.length!==0){s=P.B
c=H.c([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.q()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.i(b,l)
b=b[l].b
b.a.a.q()
C.a.h(c,b.e)}a=Z.k2(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bq(1,c.length,a))}if(this.d.b.length!==0){s=P.B
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.q()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].b
b.a.a.q()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].c
b.a.a.q()
C.a.h(c,b.e)}a=Z.k2(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bq(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.u("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.u("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.u("   "))}return C.a.l(u,"\n")},
a8:function(a){var u=this.e
if(u!=null)u.T(a)},
X:function(){return this.a8(null)},
$inh:1}
F.hI.prototype={
i9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.an],"$ab")
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
C.a.h(u,F.dg(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dg(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dg(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dg(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
cf:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.i(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aP(0,p,n)){p.aN()
break}}}}},
ce:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.i(t,u)
s=t[u]
t=s.gip(s)
if(t)s.aN()}},
aC:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].bV())s=!1
return s},
bU:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].bT())s=!1
return s},
i:function(a){return this.F()},
u:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
return C.a.l(u,"\n")},
F:function(){return this.u("")},
sf6:function(a){this.b=H.m(a,"$ib",[F.a2],"$ab")}}
F.hJ.prototype={
gm:function(a){return this.b.length},
cf:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.i(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aP(0,p,n)){p.aN()
break}}}}},
ce:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.i(t,u)
s=t[u]
t=J.Y(s.a,s.b)
if(t)s.aN()}},
i:function(a){return this.F()},
u:function(a){var u,t,s,r
u=H.c([],[P.e])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.i(r,s)
C.a.h(u,r[s].u(a+(""+s+". ")))}return C.a.l(u,"\n")},
F:function(){return this.u("")},
sfh:function(a){this.b=H.m(a,"$ib",[F.b1],"$ab")}}
F.hK.prototype={
gm:function(a){return this.b.length},
jh:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.i(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.C(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.T(null)}s=t.a
if(s!=null){C.a.C(s.b.b,t)
t.a=null}}}},
i:function(a){return this.F()},
u:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
return C.a.l(u,"\n")},
F:function(){return this.u("")},
sbG:function(a){this.b=H.m(a,"$ib",[F.bs],"$ab")}}
F.an.prototype={
bX:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.k1(this.cx,s,p,u,t,r,q,a,o)},
it:function(){return this.bX(null)},
sjt:function(a){var u
if(!J.Y(this.z,a)){this.z=a
u=this.a
if(u!=null)u.X()}},
iV:function(a){var u,t
if(a.t(0,$.bd())){u=this.f
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bc())){u=this.r
t=[P.z]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bb())){u=this.x
t=[P.z]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.be())){u=this.y
t=[P.z]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bf())){u=this.z
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cZ())){u=this.Q
t=[P.z]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.d_())){u=this.Q
t=[P.z]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.c1()))return H.c([this.ch],[P.z])
else if(a.t(0,$.ba())){u=this.cx
t=[P.z]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.z])},
bV:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cG()
this.d.L(0,new F.iK(u))
u=u.a
this.r=u.I(0,Math.sqrt(u.O(u)))
u=this.a
if(u!=null){u.X()
u=this.a.e
if(u!=null)u.ai(0)}return!0},
bT:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cG()
this.d.L(0,new F.iJ(u))
u=u.a
this.x=u.I(0,Math.sqrt(u.O(u)))
u=this.a
if(u!=null){u.X()
u=this.a.e
if(u!=null)u.ai(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
u:function(a){var u,t,s
u=H.c([],[P.e])
C.a.h(u,C.i.a4(J.ah(this.e),0))
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
C.a.h(u,V.K(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
F:function(){return this.u("")}}
F.iK.prototype={
$1:function(a){var u,t
H.o(a,"$ia2")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.M(0,u)}},
$S:7}
F.iJ.prototype={
$1:function(a){var u,t
H.o(a,"$ia2")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.M(0,u)}},
$S:7}
F.iA.prototype={
q:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.i(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.f(P.r("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.X()
return!0},
gm:function(a){return this.c.length},
aC:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].bV()
return!0},
bU:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].bT()
return!0},
ik:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.I(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Y(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.T(null)}}}}return!0},
i:function(a){return this.F()},
u:function(a){var u,t,s,r
this.q()
u=H.c([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
return C.a.l(u,"\n")},
F:function(){return this.u("")},
shM:function(a){this.c=H.m(a,"$ib",[F.an],"$ab")}}
F.iB.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.i(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.i(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
L:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a2]})
C.a.L(this.b,b)
C.a.L(this.c,new F.iC(this,b))
C.a.L(this.d,new F.iD(this,b))},
i:function(a){return this.F()},
u:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
return C.a.l(u,"\n")},
F:function(){return this.u("")},
sf7:function(a){this.b=H.m(a,"$ib",[F.a2],"$ab")},
sf8:function(a){this.c=H.m(a,"$ib",[F.a2],"$ab")},
sf9:function(a){this.d=H.m(a,"$ib",[F.a2],"$ab")}}
F.iC.prototype={
$1:function(a){H.o(a,"$ia2")
if(!J.Y(a.a,this.a))this.b.$1(a)},
$S:7}
F.iD.prototype={
$1:function(a){var u
H.o(a,"$ia2")
u=this.a
if(!J.Y(a.a,u)&&!J.Y(a.b,u))this.b.$1(a)},
$S:7}
F.iE.prototype={
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.i(u,s)
return u[s]}else{if(b<0)return H.i(u,b)
return u[b]}},
i:function(a){return this.F()},
u:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
return C.a.l(u,"\n")},
F:function(){return this.u("")},
sfi:function(a){this.b=H.m(a,"$ib",[F.b1],"$ab")},
sfj:function(a){this.c=H.m(a,"$ib",[F.b1],"$ab")}}
F.iG.prototype={}
F.iF.prototype={
aP:function(a,b,c){return J.Y(b.f,c.f)}}
F.iH.prototype={}
F.ho.prototype={
cb:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.an],"$ab")
u=V.cG()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.R(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.I(0,Math.sqrt(u.O(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.I(0,Math.sqrt(o*o+n*n+m*m))}if(!J.Y(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.T(null)}}}return}}
F.iI.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.F()},
u:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
return C.a.l(u,"\n")},
F:function(){return this.u("")},
sbG:function(a){this.b=H.m(a,"$ib",[F.bs],"$ab")}}
O.dx.prototype={
gA:function(){var u=this.dy
if(u==null){u=D.as()
this.dy=u}return u},
U:function(a){var u
H.o(a,"$iD")
u=this.dy
if(u!=null)u.T(a)},
bu:function(){return this.U(null)},
cV:function(a){H.o(a,"$iD")
this.a=null
this.U(a)},
hk:function(){return this.cV(null)},
fq:function(a,b){var u=V.a8
u=new D.ce(a,H.m(b,"$ih",[u],"$ah"),this,[u])
u.b=!0
this.U(u)},
ft:function(a,b){var u=V.a8
u=new D.cf(a,H.m(b,"$ih",[u],"$ah"),this,[u])
u.b=!0
this.U(u)},
cH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.Y(u.e.length+3,4)*4
s=C.h.Y(u.f.length+3,4)*4
r=C.h.Y(u.r.length+3,4)*4
q=C.h.Y(u.x.length+3,4)*4
p=C.h.Y(u.y.length+3,4)*4
o=C.h.Y(u.z.length+3,4)*4
n=C.h.Y(this.e.a.length+3,4)*4
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
a7=$.bd()
if(a0){b=$.bc()
a7=new Z.aW(a7.a|b.a)}if(a1){b=$.bb()
a7=new Z.aW(a7.a|b.a)}if(a2){b=$.be()
a7=new Z.aW(a7.a|b.a)}if(a3){b=$.bf()
a7=new Z.aW(a7.a|b.a)}if(a5){b=$.ba()
a7=new Z.aW(a7.a|b.a)}return new A.h6(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
R:function(a,b){H.m(a,"$ib",[T.cv],"$ab")
if(b!=null)if(!C.a.N(a,b)){b.a=a.length
C.a.h(a,b)}},
bn:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.aq(u,u.length,0,[H.x(u,0)]);u.w();){t=u.d
t.toString
s=$.iz
if(s==null){s=new V.R(0,0,1)
$.iz=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.ci(s)}}},
jj:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.cH()
t=a4.fr.j(0,u.a7)
if(t==null){t=A.m4(u,a4.a)
s=t.b
if(s.length===0)H.t(P.r("May not cache a shader with no name."))
if(a4.fr.d8(0,s))H.t(P.r('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.S(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.b4
u=a5.e
if(!(u instanceof Z.d7)){a5.e=null
u=null}if(u==null||!u.d.t(0,q)){u=r.r1
if(u)a5.d.aC()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.bU()
o.a.bU()
o=o.e
if(o!=null)o.ai(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.ik()
n=n.e
if(n!=null)n.ai(0)}l=a5.d.ij(new Z.iN(a4.a),q)
l.aD($.bd()).e=this.a.Q.c
if(u)l.aD($.bc()).e=this.a.cx.c
if(p)l.aD($.bb()).e=this.a.ch.c
if(r.rx)l.aD($.be()).e=this.a.cy.c
if(o)l.aD($.bf()).e=this.a.db.c
if(r.x1)l.aD($.ba()).e=this.a.dx.c
a5.e=l}u=T.cv
k=H.c([],[u])
p=this.a
o=a4.a
C.b.e0(o,p.r)
p.x.iJ()
if(r.fx){p=this.a
n=a4.dx
n=n.gV(n)
p=p.dy
p.toString
p.aa(n.a5(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.gV(n)
m=a4.dx
m=n.W(0,m.gV(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.aa(n.a5(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gje()
m=a4.dx
m=n.W(0,m.gV(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.aa(n.a5(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.aa(C.q.a5(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.aa(C.q.a5(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.aa(C.q.a5(n,!0))}if(r.ah>0){j=this.e.a.length
p=this.a.k4
C.b.K(p.a,p.d,j)
for(p=[P.z],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.i(m,i)
m=m[i]
n.toString
H.o(m,"$ia8")
n=n.r1
if(i>=n.length)return H.i(n,i)
n=n[i]
h=new Float32Array(H.cU(H.m(m.a5(0,!0),"$ib",p,"$ab")))
C.b.e_(n.a,n.d,!1,h)}}switch(r.a){case C.c:break
case C.f:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.d:this.R(k,this.f.d)
p=this.a
n=this.f.d
p.a6(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.e:this.R(k,this.f.e)
p=this.a
n=this.f.e
p.a1(p.ry,p.x1,n)
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
case C.d:this.R(k,this.r.d)
p=this.a
n=this.r.d
p.a6(p.y1,p.ah,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.e:this.R(k,this.r.e)
p=this.a
n=this.r.e
p.a1(p.y2,p.ah,n)
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
p=p.a7
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.d:this.R(k,this.x.d)
p=this.a
n=this.x.d
p.a6(p.b4,p.b5,n)
n=this.a
p=this.x.f
n=n.a7
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.e:this.R(k,this.x.e)
p=this.a
n=this.x.e
p.a1(p.dd,p.b5,n)
n=this.a
p=this.x.f
n=n.a7
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.d){case C.c:break
case C.f:p=this.a
n=this.y.f
p=p.b6
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.d:this.R(k,this.y.d)
p=this.a
n=this.y.d
p.a6(p.de,p.b7,n)
n=this.a
p=this.y.f
n=n.b6
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.e:this.R(k,this.y.e)
p=this.a
n=this.y.e
p.a1(p.df,p.b7,n)
n=this.a
p=this.y.f
n=n.b6
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.e){case C.c:break
case C.f:p=this.a
n=this.z.f
p=p.b8
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.ba
C.b.H(n.a,n.d,g)
break
case C.d:this.R(k,this.z.d)
p=this.a
n=this.z.d
p.a6(p.dg,p.b9,n)
n=this.a
p=this.z.f
n=n.b8
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.ba
C.b.H(p.a,p.d,g)
break
case C.e:this.R(k,this.z.e)
p=this.a
n=this.z.e
p.a1(p.dh,p.b9,n)
n=this.a
p=this.z.f
n=n.b8
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.ba
C.b.H(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.du
C.b.K(p.a,p.d,j)
p=a4.db
f=p.gV(p)
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.A)(p),++d){c=p[d]
m=this.a.c_
if(e>=m.length)return H.i(m,e)
b=m[e]
m=f.ci(c.a)
g=m.a
a=m.b
a0=m.c
a0=m.I(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.p(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.p(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.dv
C.b.K(p.a,p.d,j)
p=a4.db
f=p.gV(p)
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.A)(p),++d){c=p[d]
m=this.a.c0
if(e>=m.length)return H.i(m,e)
b=m[e]
m=c.gaT(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.aV(c.gaT(c))
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gap(c)
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gbO()
g=b.e
C.b.H(g.a,g.d,m)
m=c.gbP()
g=b.f
C.b.H(g.a,g.d,m)
m=c.gbQ()
g=b.r
C.b.H(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.dw
C.b.K(p.a,p.d,j)
p=a4.db
f=p.gV(p)
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.A)(p),++d){c=p[d]
m=this.a.c1
if(e>=m.length)return H.i(m,e)
b=m[e]
m=c.gaT(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gbY(c).jI()
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.aV(c.gaT(c))
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gap(c)
g=b.e
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gjG()
g=b.f
C.b.H(g.a,g.d,m)
m=c.gjF()
g=b.r
C.b.H(g.a,g.d,m)
m=c.gbO()
g=b.x
C.b.H(g.a,g.d,m)
m=c.gbP()
g=b.y
C.b.H(g.a,g.d,m)
m=c.gbQ()
g=b.z
C.b.H(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.dz
C.b.K(p.a,p.d,j)
p=a4.db
f=p.gV(p)
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.A)(p),++d){c=p[d]
g=this.a.c2
if(e>=g.length)return H.i(g,e)
b=g[e]
g=c.gaU()
H.m(k,"$ib",m,"$ab")
if(!C.a.N(k,g)){g.a=k.length
C.a.h(k,g)}g=c.gbY(c)
a=b.d
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=c.gjA()
a=b.b
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=c.gjm(c)
a=b.c
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=f.ci(c.gbY(c))
a=g.a
a0=g.b
a1=g.c
a1=g.I(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.p(a0.a,a0.d,a,g,a1)
a1=c.gap(c)
g=b.f
C.b.p(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gaU()
g=a1.gca(a1)
if(!g){g=b.x
C.b.K(g.a,g.d,1)}else{g=b.r
a=a1.d
a0=g.a
g=g.d
if(!a)C.b.K(a0,g,0)
else C.b.K(a0,g,a1.a)
g=b.x
C.b.K(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.dA
C.b.K(p.a,p.d,j)
p=a4.db
f=p.gV(p)
for(p=this.dx.y,n=p.length,m=[P.z],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.A)(p),++d){c=p[d]
a=this.a.c3
if(e>=a.length)return H.i(a,e)
b=a[e]
a=c.gaU()
H.m(k,"$ib",g,"$ab")
if(!C.a.N(k,a)){a.a=k.length
C.a.h(k,a)}a2=f.W(0,c.gV(c))
a=c.gV(c)
a0=$.cn
if(a0==null){a0=new V.ay(0,0,0)
$.cn=a0}a0=a.aV(a0)
a=b.b
C.b.p(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cn
if(a==null){a=new V.ay(0,0,0)
$.cn=a}a=a2.aV(a)
a0=b.c
C.b.p(a0.a,a0.d,a.a,a.b,a.c)
a=a2.dD(0)
a0=b.d
h=new Float32Array(H.cU(H.m(new V.dy(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).a5(0,!0),"$ib",m,"$ab")))
C.b.dZ(a0.a,a0.d,!1,h)
a0=c.gap(c)
a=b.e
C.b.p(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gaU()
a=a0.gca(a0)
if(!a){a=b.r
C.b.K(a.a,a.d,1)}else{a=b.f
a1=a0.gca(a0)
a3=a.a
a=a.d
if(!a1)C.b.K(a3,a,0)
else C.b.K(a3,a,a0.gjH(a0))
a=b.r
C.b.K(a.a,a.d,0)}a=c.gbO()
a0=b.x
C.b.H(a0.a,a0.d,a)
a=c.gbP()
a0=b.y
C.b.H(a0.a,a0.d,a)
a=c.gbQ()
a0=b.z
C.b.H(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.dB
C.b.K(p.a,p.d,j)
p=a4.db
f=p.gV(p)
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.A)(p),++d){c=p[d]
m=this.a.c4
if(e>=m.length)return H.i(m,e)
b=m[e]
m=c.gaU()
H.m(k,"$ib",u,"$ab")
if(!C.a.N(k,m)){m.a=k.length
C.a.h(k,m)}m=c.gaT(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gbY(c)
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gjA()
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gjm(c)
g=b.e
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.aV(c.gaT(c))
g=b.f
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gaU()
g=m.gca(m)
if(!g){m=b.x
C.b.K(m.a,m.d,1)}else{g=b.r
a=m.d
a0=g.a
g=g.d
if(!a)C.b.K(a0,g,0)
else C.b.K(a0,g,m.a)
m=b.x
C.b.K(m.a,m.d,0)}m=c.gap(c)
g=b.y
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gjJ()
g=b.z
C.b.H(g.a,g.d,m)
m=c.gjK()
g=b.Q
C.b.H(g.a,g.d,m)
m=c.gbO()
g=b.ch
C.b.H(g.a,g.d,m)
m=c.gbP()
g=b.cx
C.b.H(g.a,g.d,m)
m=c.gbQ()
g=b.cy
C.b.H(g.a,g.d,m);++e}}}switch(r.f){case C.c:break
case C.f:break
case C.d:this.R(k,this.Q.d)
u=this.a
p=this.Q.d
u.a6(u.di,u.bb,p)
break
case C.e:this.R(k,this.Q.e)
u=this.a
p=this.Q.e
u.a1(u.dj,u.bb,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.gV(p).dD(0)
a4.Q=p}u=u.id
u.toString
u.aa(p.a5(0,!0))}if(r.dy){this.R(k,this.ch)
u=this.a
p=this.ch
u.a1(u.dk,u.dl,p)
switch(r.r){case C.c:break
case C.f:u=this.a
p=this.cx.f
u=u.bc
u.toString
n=p.a
m=p.b
p=p.c
C.b.p(u.a,u.d,n,m,p)
break
case C.d:this.R(k,this.cx.d)
u=this.a
p=this.cx.d
u.a6(u.dm,u.bd,p)
p=this.a
u=this.cx.f
p=p.bc
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
break
case C.e:this.R(k,this.cx.e)
u=this.a
p=this.cx.e
u.a1(u.dn,u.bd,p)
p=this.a
u=this.cx.f
p=p.bc
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
break}switch(r.x){case C.c:break
case C.f:u=this.a
p=this.cy.f
u=u.bf
u.toString
n=p.a
m=p.b
p=p.c
C.b.p(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.be
C.b.H(p.a,p.d,m)
break
case C.d:this.R(k,this.cy.d)
u=this.a
p=this.cy.d
u.a6(u.dq,u.bg,p)
p=this.a
u=this.cy.f
p=p.bf
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.be
C.b.H(u.a,u.d,m)
break
case C.e:this.R(k,this.cy.e)
u=this.a
p=this.cy.e
u.a1(u.dr,u.bg,p)
p=this.a
u=this.cy.f
p=p.bf
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.be
C.b.H(u.a,u.d,m)
break}}u=r.y
p=u!==C.c
if(p){switch(u){case C.c:break
case C.f:u=this.a
n=this.db.f
u=u.bh
C.b.H(u.a,u.d,n)
break
case C.d:this.R(k,this.db.d)
u=this.a
n=this.db.d
u.a6(u.ds,u.bi,n)
n=this.a
u=this.db.f
n=n.bh
C.b.H(n.a,n.d,u)
break
case C.e:this.R(k,this.db.e)
u=this.a
n=this.db.e
u.a1(u.dt,u.bi,n)
n=this.a
u=this.db.f
n=n.bh
C.b.H(n.a,n.d,u)
break}C.b.bZ(o,3042)
C.b.ii(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(!u.c&&u.d){u.c=!0
C.b.d0(o,33984+u.a)
C.b.aB(o,3553,u.b)}}u=a5.e
u.bR(a4)
u.aF(a4)
u.jz(a4)
if(p)C.b.iE(o,3042)
for(i=0;i<k.length;++i){u=k[i]
if(u.c){u.c=!1
C.b.d0(o,33984+u.a)
C.b.aB(o,3553,null)}}u=this.a
u.toString
C.b.e0(o,null)
u.x.iF()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cH().a7},
seV:function(a){this.e=H.m(a,"$iZ",[V.a8],"$aZ")}}
O.h4.prototype={
hp:function(a){var u=this.f
if(!(Math.abs(u-a)<$.M().a)){this.f=a
u=new D.S(this.b,u,a,this,[P.z])
u.b=!0
this.a.U(u)}},
ad:function(){this.cq()
this.hp(1)}}
O.ch.prototype={
U:function(a){this.a.U(H.o(a,"$iD"))},
bu:function(){return this.U(null)},
ad:function(){},
hr:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gA().C(0,this.gaZ())
t=this.d
this.d=a
if(a!=null)a.gA().h(0,this.gaZ())
u=new D.S(this.b+".texture2D",t,this.d,this,[T.dV])
u.b=!0
this.a.U(u)}},
hs:function(a){},
sbm:function(a){var u=this.c
if(u!==C.d){if(u===C.c)this.ad()
this.c=C.d
this.hs(null)
u=this.a
u.a=null
u.U(null)}this.hr(a)}}
O.h5.prototype={}
O.aM.prototype={
cX:function(a){var u,t
if(!J.Y(this.f,a)){u=this.f
this.f=a
t=new D.S(this.b+".color",u,a,this,[V.a1])
t.b=!0
this.a.U(t)}},
ad:function(){this.cq()
this.cX(new V.a1(1,1,1))},
sap:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.ad()
u=this.a
u.a=null
u.U(null)}this.cX(b)}}
O.h7.prototype={
hq:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.M().a)){this.ch=a
u=new D.S(this.b+".refraction",u,a,this,[P.z])
u.b=!0
this.a.U(u)}},
ad:function(){this.bt()
this.hq(1)}}
O.h8.prototype={
bL:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.M().a)){this.ch=a
u=new D.S(this.b+".shininess",u,a,this,[P.z])
u.b=!0
this.a.U(u)}},
ad:function(){this.bt()
this.bL(100)}}
O.bR.prototype={}
T.cv.prototype={}
T.dV.prototype={}
T.i4.prototype={
gA:function(){var u=this.y
if(u==null){u=D.as()
this.y=u}return u}}
T.i5.prototype={
iW:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.aB(u,3553,t)
C.b.bl(u,3553,10242,33071)
C.b.bl(u,3553,10243,33071)
C.b.bl(u,3553,10241,9729)
C.b.bl(u,3553,10240,9729)
C.b.aB(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.i4()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.n
W.a3(s,"load",H.l(new T.i6(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
c9:function(a){return this.iW(a,!1,!1,!1,!1)},
hl:function(a,b,c){var u,t,s,r
b=V.ki(b,2)
u=V.ki(a.width,2)
t=V.ki(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jQ(null,null)
s.width=u
s.height=t
r=H.o(C.x.e8(s,"2d"),"$ibD")
r.imageSmoothingEnabled=!1;(r&&C.y).iH(r,a,0,0,s.width,s.height)
return P.mM(C.y.fd(r,0,0,s.width,s.height))}}}
T.i6.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.hl(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.aB(t,3553,this.e)
C.b.jd(t,37440,this.f?1:0)
C.b.jr(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.e3(t,3553)
C.b.aB(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.iI()}++s.e},
$S:24}
V.aZ.prototype={
aq:function(a,b){return!0},
i:function(a){return"all"},
$iai:1}
V.ai.prototype={}
V.dw.prototype={
aq:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].aq(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sZ:function(a){this.a=H.m(a,"$ib",[V.ai],"$ab")},
$iai:1}
V.ad.prototype={
aq:function(a,b){return!this.eq(0,b)},
i:function(a){return"!["+this.cp(0)+"]"}}
V.hx.prototype={
aq:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.jY(this.a)
t=H.jY(this.b)
return u+".."+t},
$iai:1}
V.hH.prototype={
ew:function(a){var u,t
if(a.a.length<=0)throw H.f(P.r("May not create a SetMatcher with zero characters."))
u=new H.aK([P.B,P.O])
for(t=new H.cg(a,a.gm(a),0,[H.ag(a,"v",0)]);t.w();)u.S(0,t.d,!0)
this.sho(u)},
aq:function(a,b){return this.a.d8(0,b)},
i:function(a){var u=this.a
return P.jZ(new H.dt(u,[H.x(u,0)]),0,null)},
sho:function(a){this.a=H.m(a,"$iL",[P.B,P.O],"$aL")},
$iai:1}
V.cr.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cx(this.a.k(0,b))
r.sZ(H.c([],[V.ai]))
r.c=!1
C.a.h(this.c,r)
return r},
iK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.aq(0,a))return r}return},
i:function(a){return this.b},
shH:function(a){this.c=H.m(a,"$ib",[V.cx],"$ab")}}
V.e_.prototype={
i:function(a){var u,t
u=H.kj(this.b,"\n","\\n")
t=H.kj(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cw.prototype={
ar:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.A)(c),++t){s=c[t]
this.c.S(0,s,b)}},
i:function(a){return this.b},
shh:function(a){var u=P.e
this.c=H.m(a,"$iL",[u,u],"$aL")}}
V.i9.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cr(this,b)
u.shH(H.c([],[V.cx]))
u.d=null
this.a.S(0,b,u)}return u},
G:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cw(this,a)
t=P.e
u.shh(new H.aK([t,t]))
this.b.S(0,a,u)}return u},
dX:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.e_])
t=this.c
s=[P.B]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.i.av(a,o)
m=t.iK(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.jZ(r,0,null)
throw H.f(P.r("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.jZ(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.e_(j==null?k.b:j,l,o)}++o}}},
shC:function(a){this.a=H.m(a,"$iL",[P.e,V.cr],"$aL")},
shG:function(a){this.b=H.m(a,"$iL",[P.e,V.cw],"$aL")}}
V.cx.prototype={
i:function(a){return this.b.b+": "+this.cp(0)}}
X.d9.prototype={$ib4:1}
X.fG.prototype={
gA:function(){var u=this.x
if(u==null){u=D.as()
this.x=u}return u}}
X.dE.prototype={
gA:function(){var u=this.f
if(u==null){u=D.as()
this.f=u}return u},
au:function(a){var u
H.o(a,"$iD")
u=this.f
if(u!=null)u.T(a)},
eP:function(){return this.au(null)},
saQ:function(a){var u,t
if(!J.Y(this.b,a)){u=this.b
if(u!=null)u.gA().C(0,this.gcv())
t=this.b
this.b=a
if(a!=null)a.gA().h(0,this.gcv())
u=new D.S("mover",t,this.b,this,[U.bL])
u.b=!0
this.au(u)}},
$ib4:1,
$id9:1}
X.dT.prototype={}
V.bi.prototype={
aY:function(a){this.b=new P.fK(C.M)
this.c=null
this.sbB(H.c([],[[P.b,W.ar]]))},
D:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.c([],[W.ar]))
t=a.split("\n")
for(u=t.length,s=[W.ar],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.c([],s))
o=document.createElement("div")
o.className="codePart"
H.F(p)
n=this.b.f_(p,0,p.length)
m=n==null?p:n
C.k.eh(o,H.kj(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbj(this.d),o)}},
dM:function(a,b){var u,t,s,r
H.m(b,"$ib",[P.e],"$ab")
this.sbB(H.c([],[[P.b,W.ar]]))
u=C.a.l(b,"\n")
t=this.c
if(t==null){t=this.b3()
this.c=t}for(t=t.dX(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)this.bk(t[r])},
sbB:function(a){this.d=H.m(a,"$ib",[[P.b,W.ar]],"$ab")}}
V.jK.prototype={
$1:function(a){H.o(a,"$iaT")
P.bZ(C.j.dW(this.a.giP(),2)+" fps")},
$S:38}
V.fk.prototype={
bk:function(a){switch(a.a){case"Class":this.D(a.b,"#551")
break
case"Comment":this.D(a.b,"#777")
break
case"Id":this.D(a.b,"#111")
break
case"Num":this.D(a.b,"#191")
break
case"Reserved":this.D(a.b,"#119")
break
case"String":this.D(a.b,"#171")
break
case"Symbol":this.D(a.b,"#616")
break
case"Type":this.D(a.b,"#B11")
break
case"Whitespace":this.D(a.b,"#111")
break}},
b3:function(){var u,t,s,r
u=V.ia()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.u(new H.q("_"))
C.a.h(t.a,s)
s=V.U("a","z")
C.a.h(t.a,s)
s=V.U("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=V.U("0","9")
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Int")
s=V.U("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").l(0,"Int")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").l(0,"FloatDot")
s=V.u(new H.q("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").l(0,"Float")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").l(0,"Float")
s=V.U("0","9")
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
C.a.h(u.k(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.aZ())
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
C.a.h(u.k(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.aZ())
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
s=new V.ad()
r=[V.ai]
s.sZ(H.c([],r))
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
s=new V.ad()
s.sZ(H.c([],r))
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
s.d=s.a.G("Num")
s=u.k(0,"Float")
s.d=s.a.G("Num")
s=u.k(0,"Sym")
s.d=s.a.G("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.G("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.G("String")
s=u.k(0,"EndComment")
s.d=s.a.G("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.G("Whitespace")
s=u.k(0,"Id")
t=s.a.G("Id")
s.d=t
s=[P.e]
t.ar(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.ar(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.ar(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.fH.prototype={
bk:function(a){switch(a.a){case"Builtin":this.D(a.b,"#411")
break
case"Comment":this.D(a.b,"#777")
break
case"Id":this.D(a.b,"#111")
break
case"Num":this.D(a.b,"#191")
break
case"Preprocess":this.D(a.b,"#737")
break
case"Reserved":this.D(a.b,"#119")
break
case"Symbol":this.D(a.b,"#611")
break
case"Type":this.D(a.b,"#171")
break
case"Whitespace":this.D(a.b,"#111")
break}},
b3:function(){var u,t,s,r
u=V.ia()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.u(new H.q("_"))
C.a.h(t.a,s)
s=V.U("a","z")
C.a.h(t.a,s)
s=V.U("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=V.U("0","9")
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Int")
s=V.U("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").l(0,"Int")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").l(0,"FloatDot")
s=V.u(new H.q("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").l(0,"Float")
t=V.U("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").l(0,"Float")
s=V.U("0","9")
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
C.a.h(u.k(0,"Slash").l(0,"Sym").a,new V.aZ())
s=u.k(0,"Comment").l(0,"EndComment")
t=V.u(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").l(0,"Comment")
s=new V.ad()
r=[V.ai]
s.sZ(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Preprocess")
s=V.u(new H.q("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").l(0,"Preprocess")
t=new V.ad()
t.sZ(H.c([],r))
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
t.d=t.a.G("Num")
t=u.k(0,"Float")
t.d=t.a.G("Num")
t=u.k(0,"Sym")
t.d=t.a.G("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.G("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.G("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.G("Whitespace")
t=u.k(0,"Id")
s=t.a.G("Id")
t.d=s
t=[P.e]
s.ar(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.ar(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.ar(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return u}}
V.fI.prototype={
bk:function(a){switch(a.a){case"Attr":this.D(a.b,"#911")
this.D("=","#111")
break
case"Id":this.D(a.b,"#111")
break
case"Other":this.D(a.b,"#111")
break
case"Reserved":this.D(a.b,"#119")
break
case"String":this.D(a.b,"#171")
break
case"Symbol":this.D(a.b,"#616")
break}},
b3:function(){var u,t,s
u=V.ia()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.u(new H.q("_"))
C.a.h(t.a,s)
s=V.U("a","z")
C.a.h(t.a,s)
s=V.U("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=V.U("0","9")
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
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
C.a.h(u.k(0,"OpenStr").l(0,"OpenStr").a,new V.aZ())
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.aZ())
t=u.k(0,"Other").l(0,"Other")
s=new V.ad()
s.sZ(H.c([],[V.ai]))
C.a.h(t.a,s)
t=V.u(new H.q('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.U("a","z")
C.a.h(s.a,t)
t=V.U("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.G("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.G("String")
t=u.k(0,"Id")
s=t.a.G("Id")
t.d=s
s.ar(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.k(0,"Attr")
s.d=s.a.G("Attr")
s=u.k(0,"Other")
s.d=s.a.G("Other")
return u}}
V.hu.prototype={
dM:function(a,b){H.m(b,"$ib",[P.e],"$ab")
this.sbB(H.c([],[[P.b,W.ar]]))
this.D(C.a.l(b,"\n"),"#111")},
bk:function(a){},
b3:function(){return}}
V.hL.prototype={
ey:function(a,b){var u,t,s,r,q,p,o
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
o=W.n
W.a3(u,"scroll",H.l(new V.hN(s),{func:1,ret:-1,args:[o]}),!1,o)},
d2:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.e],"$ab")
this.hx()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dX(C.a.iT(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
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
if(H.n6(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.i(m,1)
l.href=H.F(m[1])
l.textContent=H.F(m[0])
C.k.v(t,l)}else{k=P.l6(C.C,n,C.w,!1)
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
e7:function(a){var u,t,s,r
u=new V.fk("dart")
u.aY("dart")
t=new V.fH("glsl")
t.aY("glsl")
s=new V.fI("html")
s.aY("html")
r=C.a.iM(H.c([u,t,s],[V.bi]),new V.hO(a))
if(r!=null)return r
u=new V.hu("plain")
u.aY("plain")
return u},
d1:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.m(a7,"$ib",[P.e],"$ab")
u=H.c([],[P.B])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.ke(r).br(r,"+")){C.a.S(a7,s,C.i.aW(r,1))
C.a.h(u,1)
t=!0}else if(C.i.br(r,"-")){C.a.S(a7,s,C.i.aW(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.e7(a5)
q.dM(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.v(o,n)
C.k.v(this.a,o)
m=P.l6(C.C,a4,C.w,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kq(null)
i.href="#"+m
i.textContent=a4
C.k.v(j,i)
C.u.v(k,j)
C.m.v(l,k)
C.o.v(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.i(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.A)(r),++a0)C.u.v(a,r[a0])
C.m.v(e,d)
C.m.v(e,c)
C.m.v(e,a)
C.o.v(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.A)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gP(r);a3.w();)C.u.v(c,a3.gE(a3))
C.m.v(e,d)
C.m.v(e,c)
C.o.v(n,e)}},
hx:function(){var u,t,s,r
if(this.b!=null)return
u=V.ia()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Bold")
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").l(0,"Bold")
s=new V.ad()
r=[V.ai]
s.sZ(H.c([],r))
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
s=new V.ad()
s.sZ(H.c([],r))
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
s=new V.ad()
s.sZ(H.c([],r))
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
t=new V.ad()
t.sZ(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").l(0,"LinkEnd")
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").l(0,"LinkTail")
t=new V.ad()
t.sZ(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.aZ())
s=u.k(0,"Other").l(0,"Other")
t=new V.ad()
t.sZ(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.G("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.G("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.G("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.G("Link")
s=u.k(0,"Other")
s.d=s.a.G("Other")
this.b=u}}
V.hN.prototype={
$1:function(a){P.kU(C.p,new V.hM(this.a))},
$S:24}
V.hM.prototype={
$0:function(){var u,t,s
u=C.j.a9(document.documentElement.scrollTop)
t=this.a.style
s=H.k(-0.01*u)+"px"
t.top=s},
$S:1}
V.hO.prototype={
$1:function(a){return H.o(a,"$ibi").a===this.a},
$S:39}
F.jH.prototype={
$1:function(a){var u,t,s,r
H.o(a,"$iD")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.d1("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.d1("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.en=u.i
u=J.dq.prototype
u.ep=u.i
u=P.h.prototype
u.eo=u.bo
u=W.Q.prototype
u.bs=u.a2
u=W.ez.prototype
u.er=u.af
u=O.ch.prototype
u.cq=u.ad
u=O.aM.prototype
u.bt=u.ad
u=V.dw.prototype
u.eq=u.aq
u.cp=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mG","mp",10)
u(P,"mH","mq",10)
u(P,"mI","mr",10)
t(P,"lf","mF",2)
s(W,"mR",4,null,["$4"],["mt"],19,0)
s(W,"mS",4,null,["$4"],["mu"],19,0)
var m
r(m=E.ac.prototype,"gdK",0,0,null,["$1","$0"],["dL","j4"],0,0)
r(m,"gdI",0,0,null,["$1","$0"],["dJ","j3"],0,0)
r(m,"gdG",0,0,null,["$1","$0"],["dH","j0"],0,0)
q(m,"giZ","j_",6)
q(m,"gj1","j2",6)
r(m=E.dZ.prototype,"gcs",0,0,null,["$1","$0"],["cu","ct"],0,0)
p(m,"gjk","dR",2)
o(m=X.e4.prototype,"gfI","fJ",8)
o(m,"gfu","fv",8)
o(m,"gfC","fD",3)
o(m,"gfM","fN",20)
o(m,"gfK","fL",20)
o(m,"gfQ","fR",3)
o(m,"gfU","fV",3)
o(m,"gfG","fH",3)
o(m,"gfS","fT",3)
o(m,"gfE","fF",3)
o(m,"gfW","fX",34)
o(m,"gfY","fZ",8)
o(m,"gh8","h9",9)
o(m,"gh4","h5",9)
o(m,"gh6","h7",9)
r(D.bl.prototype,"geC",0,0,null,["$1","$0"],["ak","eD"],0,0)
r(m=D.ds.prototype,"gcQ",0,0,null,["$1","$0"],["cR","fO"],0,0)
o(m,"gh0","h1",35)
q(m,"gfn","fo",21)
q(m,"gh2","h3",21)
n(V.b8.prototype,"gm","c7",22)
n(V.R.prototype,"gm","c7",22)
r(m=M.df.prototype,"gab",0,0,null,["$1","$0"],["al","eF"],0,0)
q(m,"gfw","fz",6)
q(m,"gfA","fB",6)
r(m=O.dx.prototype,"gaZ",0,0,null,["$1","$0"],["U","bu"],0,0)
r(m,"ghj",0,0,null,["$1","$0"],["cV","hk"],0,0)
q(m,"gfp","fq",23)
q(m,"gfs","ft",23)
r(O.ch.prototype,"gaZ",0,0,null,["$1","$0"],["U","bu"],0,0)
r(X.dE.prototype,"gcv",0,0,null,["$1","$0"],["au","eP"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.N,null)
s(P.N,[H.jV,J.a,J.aq,P.em,P.h,H.cg,P.aI,H.bH,H.e3,H.hy,H.ig,P.bn,H.c5,H.eE,P.a4,H.fV,H.fW,H.fQ,P.eK,P.aY,P.av,P.e6,P.hW,P.ct,P.hX,P.aT,P.a7,P.jt,P.jh,P.bS,P.el,P.v,P.c6,P.fL,P.jr,P.O,P.bk,P.a0,P.bm,P.hs,P.dQ,P.ee,P.fF,P.bo,P.b,P.L,P.I,P.af,P.e,P.b6,W.fg,W.bu,W.y,W.dC,W.ez,W.jm,W.dh,W.aj,W.jg,W.eQ,P.eP,P.jb,O.Z,O.ci,E.fa,E.ac,E.hz,E.dZ,Z.e5,Z.iN,Z.d7,Z.bq,Z.aW,D.fd,D.bG,D.D,X.d8,X.dr,X.fS,X.fY,X.b3,X.hf,X.ib,X.e4,D.bl,D.a_,D.dF,D.dP,D.dW,D.dX,D.dY,V.a1,V.bE,V.fu,V.dy,V.a8,V.ak,V.ay,V.dH,V.dL,V.b8,V.R,M.df,A.d3,A.f5,A.h6,A.cy,A.cC,A.cA,A.cD,A.cB,A.cE,A.bF,A.e0,A.ir,F.a2,F.fy,F.b1,F.fU,F.bs,F.dO,F.hI,F.hJ,F.hK,F.an,F.iA,F.iB,F.iE,F.iG,F.iH,F.iI,O.bR,O.ch,T.i5,V.aZ,V.ai,V.dw,V.hx,V.hH,V.cr,V.e_,V.cw,V.i9,X.d9,X.dT,X.dE,V.bi,V.hL])
s(J.a,[J.fP,J.dn,J.dq,J.aJ,J.dp,J.bJ,H.cl,W.d,W.f3,W.d4,W.bD,W.aE,W.aF,W.P,W.e8,W.fl,W.fm,W.dc,W.ea,W.de,W.ec,W.fo,W.n,W.ef,W.aH,W.fJ,W.eh,W.bp,W.dv,W.h9,W.en,W.eo,W.aN,W.ep,W.es,W.aO,W.ew,W.dJ,W.ey,W.aQ,W.eA,W.aR,W.eF,W.az,W.eI,W.i8,W.aU,W.eL,W.id,W.iw,W.eR,W.eT,W.eV,W.eX,W.eZ,P.b0,P.ej,P.b5,P.eu,P.hw,P.eG,P.b7,P.eN,P.f6,P.e7,P.d5,P.di,P.dI,P.bP,P.dN,P.dU,P.e1,P.eC])
s(J.dq,[J.ht,J.cF,J.br])
t(J.jU,J.aJ)
s(J.dp,[J.dm,J.dl])
t(P.fX,P.em)
s(P.fX,[H.e2,W.iU,W.ab,P.fB])
t(H.q,H.e2)
s(P.h,[H.fr,H.h0,H.cH])
s(H.fr,[H.bK,H.dt])
s(P.aI,[H.h1,H.iO])
t(H.h2,H.bK)
s(P.bn,[H.hp,H.fR,H.iu,H.ii,H.fc,H.hF,P.dD,P.ax,P.iv,P.it,P.cs,P.fe,P.fj])
s(H.c5,[H.jL,H.i1,H.jD,H.jE,H.jF,P.iQ,P.iP,P.iR,P.iS,P.jq,P.jp,P.j_,P.j3,P.j0,P.j1,P.j2,P.j6,P.j7,P.j5,P.j4,P.hY,P.hZ,P.jx,P.je,P.jd,P.jf,P.h_,P.fp,P.fq,W.fs,W.hb,W.hd,W.hE,W.hV,W.iZ,W.hn,W.hm,W.ji,W.jj,W.jo,W.js,P.jz,P.fC,P.fD,P.f8,E.hA,E.hB,E.hC,E.i7,D.fw,D.fx,F.ju,F.iK,F.iJ,F.iC,F.iD,T.i6,V.jK,V.hN,V.hM,V.hO,F.jH])
s(H.i1,[H.hT,H.c3])
t(P.fZ,P.a4)
s(P.fZ,[H.aK,W.iT])
t(H.dz,H.cl)
s(H.dz,[H.cL,H.cN])
t(H.cM,H.cL)
t(H.ck,H.cM)
t(H.cO,H.cN)
t(H.dA,H.cO)
s(H.dA,[H.hg,H.hh,H.hi,H.hj,H.hk,H.dB,H.hl])
t(P.jc,P.jt)
t(P.ja,P.jh)
t(P.c7,P.hX)
t(P.ft,P.c6)
s(P.c7,[P.fK,P.iy])
t(P.ix,P.ft)
s(P.a0,[P.z,P.B])
s(P.ax,[P.bO,P.fM])
s(W.d,[W.C,W.fA,W.aP,W.cP,W.aS,W.aA,W.cR,W.iM,W.cI,P.f9,P.bB])
s(W.C,[W.Q,W.bh,W.ca,W.cJ])
s(W.Q,[W.w,P.p])
s(W.w,[W.d2,W.f4,W.c2,W.bg,W.bC,W.ar,W.fE,W.dj,W.cd,W.cj,W.hG,W.bQ,W.dR,W.dS,W.i0,W.cu])
s(W.aE,[W.c8,W.fh,W.fi])
t(W.ff,W.aF)
t(W.c9,W.e8)
t(W.eb,W.ea)
t(W.dd,W.eb)
t(W.ed,W.ec)
t(W.fn,W.ed)
t(W.aG,W.d4)
t(W.eg,W.ef)
t(W.fz,W.eg)
t(W.ei,W.eh)
t(W.bI,W.ei)
t(W.dk,W.ca)
t(W.bt,W.n)
s(W.bt,[W.aL,W.a5,W.aB])
t(W.ha,W.en)
t(W.hc,W.eo)
t(W.eq,W.ep)
t(W.he,W.eq)
t(W.et,W.es)
t(W.cm,W.et)
t(W.ex,W.ew)
t(W.hv,W.ex)
t(W.hD,W.ey)
t(W.cQ,W.cP)
t(W.hQ,W.cQ)
t(W.eB,W.eA)
t(W.hR,W.eB)
t(W.hU,W.eF)
t(W.eJ,W.eI)
t(W.i2,W.eJ)
t(W.cS,W.cR)
t(W.i3,W.cS)
t(W.eM,W.eL)
t(W.ic,W.eM)
t(W.iL,W.cj)
t(W.aX,W.a5)
t(W.eS,W.eR)
t(W.iV,W.eS)
t(W.e9,W.de)
t(W.eU,W.eT)
t(W.j8,W.eU)
t(W.eW,W.eV)
t(W.er,W.eW)
t(W.eY,W.eX)
t(W.jk,W.eY)
t(W.f_,W.eZ)
t(W.jl,W.f_)
t(W.iW,W.iT)
t(W.iX,P.hW)
t(W.k3,W.iX)
t(W.iY,P.ct)
t(W.jn,W.ez)
t(P.ae,P.jb)
t(P.ek,P.ej)
t(P.fT,P.ek)
t(P.ev,P.eu)
t(P.hq,P.ev)
t(P.cp,P.p)
t(P.eH,P.eG)
t(P.i_,P.eH)
t(P.eO,P.eN)
t(P.ie,P.eO)
t(P.f7,P.e7)
t(P.hr,P.bB)
t(P.eD,P.eC)
t(P.hS,P.eD)
s(E.fa,[Z.d6,A.cq,T.cv])
s(D.D,[D.ce,D.cf,D.S])
t(D.ds,O.Z)
t(U.bL,D.fd)
s(U.bL,[U.da,U.dM])
t(A.h3,A.cq)
s(A.e0,[A.J,A.im,A.io,A.iq,A.ik,A.X,A.il,A.H,A.ip,A.is,A.cz,A.al,A.a9,A.aa])
t(F.hP,F.fy)
t(F.ij,F.fU)
t(F.iF,F.iG)
t(F.ho,F.iH)
t(O.dx,O.bR)
s(O.ch,[O.h4,O.h5,O.aM])
s(O.aM,[O.h7,O.h8])
t(T.dV,T.cv)
t(T.i4,T.dV)
s(V.dw,[V.ad,V.cx])
t(X.fG,X.dT)
s(V.bi,[V.fk,V.fH,V.fI,V.hu])
u(H.e2,H.e3)
u(H.cL,P.v)
u(H.cM,H.bH)
u(H.cN,P.v)
u(H.cO,H.bH)
u(P.em,P.v)
u(W.e8,W.fg)
u(W.ea,P.v)
u(W.eb,W.y)
u(W.ec,P.v)
u(W.ed,W.y)
u(W.ef,P.v)
u(W.eg,W.y)
u(W.eh,P.v)
u(W.ei,W.y)
u(W.en,P.a4)
u(W.eo,P.a4)
u(W.ep,P.v)
u(W.eq,W.y)
u(W.es,P.v)
u(W.et,W.y)
u(W.ew,P.v)
u(W.ex,W.y)
u(W.ey,P.a4)
u(W.cP,P.v)
u(W.cQ,W.y)
u(W.eA,P.v)
u(W.eB,W.y)
u(W.eF,P.a4)
u(W.eI,P.v)
u(W.eJ,W.y)
u(W.cR,P.v)
u(W.cS,W.y)
u(W.eL,P.v)
u(W.eM,W.y)
u(W.eR,P.v)
u(W.eS,W.y)
u(W.eT,P.v)
u(W.eU,W.y)
u(W.eV,P.v)
u(W.eW,W.y)
u(W.eX,P.v)
u(W.eY,W.y)
u(W.eZ,P.v)
u(W.f_,W.y)
u(P.ej,P.v)
u(P.ek,W.y)
u(P.eu,P.v)
u(P.ev,W.y)
u(P.eG,P.v)
u(P.eH,W.y)
u(P.eN,P.v)
u(P.eO,W.y)
u(P.e7,P.a4)
u(P.eC,P.v)
u(P.eD,W.y)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bg.prototype
C.x=W.bC.prototype
C.y=W.bD.prototype
C.k=W.ar.prototype
C.J=W.dc.prototype
C.L=W.dj.prototype
C.z=W.dk.prototype
C.N=J.a.prototype
C.a=J.aJ.prototype
C.O=J.dl.prototype
C.h=J.dm.prototype
C.q=J.dn.prototype
C.j=J.dp.prototype
C.i=J.bJ.prototype
C.V=J.br.prototype
C.Z=W.cm.prototype
C.D=J.ht.prototype
C.E=W.dJ.prototype
C.b=P.bP.prototype
C.u=W.bQ.prototype
C.o=W.dR.prototype
C.m=W.dS.prototype
C.v=J.cF.prototype
C.F=W.aX.prototype
C.G=W.cI.prototype
C.H=new P.hs()
C.I=new P.iy()
C.l=new P.jc()
C.c=new A.bF(0,"ColorSourceType.None")
C.f=new A.bF(1,"ColorSourceType.Solid")
C.d=new A.bF(2,"ColorSourceType.Texture2D")
C.e=new A.bF(3,"ColorSourceType.TextureCube")
C.p=new P.bm(0)
C.K=new P.bm(5e6)
C.M=new P.fL("element",!0,!1,!1,!1)
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
C.W=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.X=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.Y=H.c(u([]),[P.e])
C.C=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.r=H.c(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.t=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.w=new P.ix(!1)})();(function staticFields(){$.aD=0
$.c4=null
$.kr=null
$.k5=!1
$.li=null
$.ld=null
$.ln=null
$.jA=null
$.jG=null
$.kf=null
$.bT=null
$.cV=null
$.cW=null
$.k6=!1
$.V=C.l
$.b_=null
$.jS=null
$.ky=null
$.kx=null
$.kF=null
$.kJ=null
$.cn=null
$.kO=null
$.kY=null
$.l0=null
$.l_=null
$.iz=null
$.kZ=null
$.kI=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nd","lq",function(){return H.lh("_$dart_dartClosure")})
u($,"ne","kl",function(){return H.lh("_$dart_js")})
u($,"nj","lr",function(){return H.aV(H.ih({
toString:function(){return"$receiver$"}}))})
u($,"nk","ls",function(){return H.aV(H.ih({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nl","lt",function(){return H.aV(H.ih(null))})
u($,"nm","lu",function(){return H.aV(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"np","lx",function(){return H.aV(H.ih(void 0))})
u($,"nq","ly",function(){return H.aV(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"no","lw",function(){return H.aV(H.kW(null))})
u($,"nn","lv",function(){return H.aV(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ns","lA",function(){return H.aV(H.kW(void 0))})
u($,"nr","lz",function(){return H.aV(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nJ","km",function(){return P.mo()})
u($,"nN","d0",function(){return[]})
u($,"nM","lF",function(){return P.mf("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"nK","lE",function(){return P.kB(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"nL","kn",function(){return P.kA(P.e,P.bo)})
u($,"nC","lD",function(){return Z.au(0)})
u($,"nw","lB",function(){return Z.au(511)})
u($,"nE","bd",function(){return Z.au(1)})
u($,"nD","bc",function(){return Z.au(2)})
u($,"ny","bb",function(){return Z.au(4)})
u($,"nF","be",function(){return Z.au(8)})
u($,"nG","bf",function(){return Z.au(16)})
u($,"nz","cZ",function(){return Z.au(32)})
u($,"nA","d_",function(){return Z.au(64)})
u($,"nB","lC",function(){return Z.au(96)})
u($,"nH","c1",function(){return Z.au(128)})
u($,"nx","ba",function(){return Z.au(256)})
u($,"nc","lp",function(){return new V.fu(1e-9)})
u($,"nb","M",function(){return $.lp()})})()
var v={mangledGlobalNames:{B:"int",z:"double",a0:"num",e:"String",O:"bool",I:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.D]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.I,args:[D.D]},{func:1,ret:-1,args:[P.B,[P.h,E.ac]]},{func:1,ret:P.I,args:[F.a2]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[W.aB]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.e,args:[P.B]},{func:1,ret:P.O,args:[W.C]},{func:1,args:[,]},{func:1,ret:P.O,args:[W.aj]},{func:1,ret:P.O,args:[P.e]},{func:1,ret:P.I,args:[,]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:P.O,args:[W.Q,P.e,P.e,W.bu]},{func:1,ret:-1,args:[W.aL]},{func:1,ret:-1,args:[P.B,[P.h,D.a_]]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.B,[P.h,V.a8]]},{func:1,ret:P.I,args:[W.n]},{func:1,ret:[P.av,,],args:[,]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:W.Q,args:[W.C]},{func:1,args:[P.e]},{func:1,args:[,P.e]},{func:1,ret:P.I,args:[P.a0]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:P.O,args:[[P.h,D.a_]]},{func:1,ret:P.I,args:[F.an,P.z,P.z]},{func:1,args:[W.n]},{func:1,ret:P.I,args:[P.aT]},{func:1,ret:P.O,args:[V.bi]},{func:1,ret:P.I,args:[,],opt:[P.af]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cl,ArrayBufferView:H.cl,Float32Array:H.ck,Float64Array:H.ck,Int16Array:H.hg,Int32Array:H.hh,Int8Array:H.hi,Uint16Array:H.hj,Uint32Array:H.hk,Uint8ClampedArray:H.dB,CanvasPixelArray:H.dB,Uint8Array:H.hl,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLInputElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.f3,HTMLAnchorElement:W.d2,HTMLAreaElement:W.f4,HTMLBaseElement:W.c2,Blob:W.d4,HTMLBodyElement:W.bg,HTMLCanvasElement:W.bC,CanvasRenderingContext2D:W.bD,CDATASection:W.bh,CharacterData:W.bh,Comment:W.bh,ProcessingInstruction:W.bh,Text:W.bh,CSSNumericValue:W.c8,CSSUnitValue:W.c8,CSSPerspective:W.ff,CSSCharsetRule:W.P,CSSConditionRule:W.P,CSSFontFaceRule:W.P,CSSGroupingRule:W.P,CSSImportRule:W.P,CSSKeyframeRule:W.P,MozCSSKeyframeRule:W.P,WebKitCSSKeyframeRule:W.P,CSSKeyframesRule:W.P,MozCSSKeyframesRule:W.P,WebKitCSSKeyframesRule:W.P,CSSMediaRule:W.P,CSSNamespaceRule:W.P,CSSPageRule:W.P,CSSRule:W.P,CSSStyleRule:W.P,CSSSupportsRule:W.P,CSSViewportRule:W.P,CSSStyleDeclaration:W.c9,MSStyleCSSProperties:W.c9,CSS2Properties:W.c9,CSSImageValue:W.aE,CSSKeywordValue:W.aE,CSSPositionValue:W.aE,CSSResourceValue:W.aE,CSSURLImageValue:W.aE,CSSStyleValue:W.aE,CSSMatrixComponent:W.aF,CSSRotation:W.aF,CSSScale:W.aF,CSSSkew:W.aF,CSSTranslation:W.aF,CSSTransformComponent:W.aF,CSSTransformValue:W.fh,CSSUnparsedValue:W.fi,DataTransferItemList:W.fl,HTMLDivElement:W.ar,XMLDocument:W.ca,Document:W.ca,DOMException:W.fm,DOMImplementation:W.dc,ClientRectList:W.dd,DOMRectList:W.dd,DOMRectReadOnly:W.de,DOMStringList:W.fn,DOMTokenList:W.fo,Element:W.Q,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aG,FileList:W.fz,FileWriter:W.fA,HTMLFormElement:W.fE,Gamepad:W.aH,HTMLHeadElement:W.dj,History:W.fJ,HTMLCollection:W.bI,HTMLFormControlsCollection:W.bI,HTMLOptionsCollection:W.bI,HTMLDocument:W.dk,ImageData:W.bp,HTMLImageElement:W.cd,KeyboardEvent:W.aL,Location:W.dv,HTMLAudioElement:W.cj,HTMLMediaElement:W.cj,MediaList:W.h9,MIDIInputMap:W.ha,MIDIOutputMap:W.hc,MimeType:W.aN,MimeTypeArray:W.he,PointerEvent:W.a5,MouseEvent:W.a5,DragEvent:W.a5,DocumentFragment:W.C,ShadowRoot:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cm,RadioNodeList:W.cm,Plugin:W.aO,PluginArray:W.hv,Range:W.dJ,RTCStatsReport:W.hD,HTMLSelectElement:W.hG,SourceBuffer:W.aP,SourceBufferList:W.hQ,SpeechGrammar:W.aQ,SpeechGrammarList:W.hR,SpeechRecognitionResult:W.aR,Storage:W.hU,CSSStyleSheet:W.az,StyleSheet:W.az,HTMLTableCellElement:W.bQ,HTMLTableDataCellElement:W.bQ,HTMLTableHeaderCellElement:W.bQ,HTMLTableElement:W.dR,HTMLTableRowElement:W.dS,HTMLTableSectionElement:W.i0,HTMLTemplateElement:W.cu,TextTrack:W.aS,TextTrackCue:W.aA,VTTCue:W.aA,TextTrackCueList:W.i2,TextTrackList:W.i3,TimeRanges:W.i8,Touch:W.aU,TouchEvent:W.aB,TouchList:W.ic,TrackDefaultList:W.id,CompositionEvent:W.bt,FocusEvent:W.bt,TextEvent:W.bt,UIEvent:W.bt,URL:W.iw,HTMLVideoElement:W.iL,VideoTrackList:W.iM,WheelEvent:W.aX,Window:W.cI,DOMWindow:W.cI,Attr:W.cJ,CSSRuleList:W.iV,ClientRect:W.e9,DOMRect:W.e9,GamepadList:W.j8,NamedNodeMap:W.er,MozNamedAttrMap:W.er,SpeechRecognitionResultList:W.jk,StyleSheetList:W.jl,SVGLength:P.b0,SVGLengthList:P.fT,SVGNumber:P.b5,SVGNumberList:P.hq,SVGPointList:P.hw,SVGScriptElement:P.cp,SVGStringList:P.i_,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.b7,SVGTransformList:P.ie,AudioBuffer:P.f6,AudioParamMap:P.f7,AudioTrackList:P.f9,AudioContext:P.bB,webkitAudioContext:P.bB,BaseAudioContext:P.bB,OfflineAudioContext:P.hr,WebGLBuffer:P.d5,WebGLFramebuffer:P.di,WebGLProgram:P.dI,WebGL2RenderingContext:P.bP,WebGLShader:P.dN,WebGLTexture:P.dU,WebGLUniformLocation:P.e1,SQLResultSetRowList:P.hS})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dz.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.dA.$nativeSuperclassTag="ArrayBufferView"
W.cP.$nativeSuperclassTag="EventTarget"
W.cQ.$nativeSuperclassTag="EventTarget"
W.cR.$nativeSuperclassTag="EventTarget"
W.cS.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.lk,[])
else F.lk([])})})()
//# sourceMappingURL=test.dart.js.map
