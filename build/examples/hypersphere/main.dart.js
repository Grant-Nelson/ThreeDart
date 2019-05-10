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
a[c]=function(){a[c]=function(){H.mD(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jT(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jE:function jE(a){this.a=a},
k9:function(){return new P.hH("No element")},
a8:function a8(a){this.a=a},
fj:function fj(){},
dq:function dq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fW:function fW(a,b,c){this.a=a
this.b=b
this.$ti=c},
fX:function fX(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iv:function iv(a,b,c){this.a=a
this.b=b
this.$ti=c},
iw:function iw(a,b,c){this.a=a
this.b=b
this.$ti=c},
bL:function bL(){},
dV:function dV(){},
dU:function dU(){},
c_:function(a){var u,t
u=H.V(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
mk:function(a){return v.types[H.ae(a)]},
mp:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.a7(a).$iF},
n:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aw(a)
if(typeof u!=="string")throw H.i(H.bB(a))
return u},
lR:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fH(u)
t=u[0]
s=u[1]
return new H.hn(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cq:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bR:function(a){return H.lH(a)+H.jR(H.bD(a),0,null)},
lH:function(a){var u,t,s,r,q,p,o,n,m
u=J.a7(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.C||!!u.$idT){p=C.u(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c_(r.length>1&&C.j.bj(r,0)===36?C.j.d0(r,1):r)},
kj:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
lQ:function(a){var u,t,s,r
u=H.c([],[P.A])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.B)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.i(H.bB(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.bn(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.i(H.bB(r))}return H.kj(u)},
kk:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bB(s))
if(s<0)throw H.i(H.bB(s))
if(s>65535)return H.lQ(a)}return H.kj(a)},
lP:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bn(u,10))>>>0,56320|u&1023)}throw H.i(P.aH(a,0,1114111,null,null))},
bQ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lO:function(a){var u=H.bQ(a).getFullYear()+0
return u},
lM:function(a){var u=H.bQ(a).getMonth()+1
return u},
lI:function(a){var u=H.bQ(a).getDate()+0
return u},
lJ:function(a){var u=H.bQ(a).getHours()+0
return u},
lL:function(a){var u=H.bQ(a).getMinutes()+0
return u},
lN:function(a){var u=H.bQ(a).getSeconds()+0
return u},
lK:function(a){var u=H.bQ(a).getMilliseconds()+0
return u},
C:function(a){throw H.i(H.bB(a))},
h:function(a,b){if(a==null)J.c2(a)
throw H.i(H.bC(a,b))},
bC:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.bb(!0,b,"index",null)
u=H.ae(J.c2(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.X(b,a,"index",null,u)
return P.dE(b,"index",null)},
mh:function(a,b,c){if(a>c)return new P.bS(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bS(a,c,!0,b,"end","Invalid value")
return new P.bb(!0,b,"end",null)},
bB:function(a){return new P.bb(!0,a,null,null)},
i:function(a){var u
if(a==null)a=new P.dA()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.l1})
u.name=""}else u.toString=H.l1
return u},
l1:function(){return J.aw(this.dartException)},
q:function(a){throw H.i(a)},
B:function(a){throw H.i(P.c7(a))},
b8:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i1:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ks:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ke:function(a,b){return new H.hf(a,b==null?null:b.method)},
jF:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fL(a,t,u?null:b.receiver)},
bE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jv(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.bn(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jF(H.n(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.ke(H.n(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.l4()
p=$.l5()
o=$.l6()
n=$.l7()
m=$.la()
l=$.lb()
k=$.l9()
$.l8()
j=$.ld()
i=$.lc()
h=q.af(t)
if(h!=null)return u.$1(H.jF(H.V(t),h))
else{h=p.af(t)
if(h!=null){h.method="call"
return u.$1(H.jF(H.V(t),h))}else{h=o.af(t)
if(h==null){h=n.af(t)
if(h==null){h=m.af(t)
if(h==null){h=l.af(t)
if(h==null){h=k.af(t)
if(h==null){h=n.af(t)
if(h==null){h=j.af(t)
if(h==null){h=i.af(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.ke(H.V(t),h))}}return u.$1(new H.ic(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dI()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.bb(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dI()
return a},
bY:function(a){var u
if(a==null)return new H.ey(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ey(a)},
mj:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.a2(0,a[t],a[s])}return b},
mo:function(a,b,c,d,e,f){H.j(a,"$ijB")
switch(H.ae(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.p("Unsupported number of arguments for wrapped closure"))},
cU:function(a,b){var u
H.ae(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mo)
a.$identity=u
return u},
lq:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.a7(d).$ib){u.$reflectionInfo=d
s=H.lR(u).r}else s=d
r=e?Object.create(new H.hI().constructor.prototype):Object.create(new H.c3(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aR
if(typeof p!=="number")return p.C()
$.aR=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.k7(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.mk,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.k5:H.jx
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.i("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.k7(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
ln:function(a,b,c,d){var u=H.jx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
k7:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lp(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ln(t,!r,u,b)
if(t===0){r=$.aR
if(typeof r!=="number")return r.C()
$.aR=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c4
if(q==null){q=H.f3("self")
$.c4=q}return new Function(r+H.n(q)+";return "+p+"."+H.n(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aR
if(typeof r!=="number")return r.C()
$.aR=r+1
o+=r
r="return function("+o+"){return this."
q=$.c4
if(q==null){q=H.f3("self")
$.c4=q}return new Function(r+H.n(q)+"."+H.n(u)+"("+o+");}")()},
lo:function(a,b,c,d){var u,t
u=H.jx
t=H.k5
switch(b?-1:a){case 0:throw H.i(H.lU("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lp:function(a,b){var u,t,s,r,q,p,o,n
u=$.c4
if(u==null){u=H.f3("self")
$.c4=u}t=$.k4
if(t==null){t=H.f3("receiver")
$.k4=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lo(r,!p,s,b)
if(r===1){u="return function(){return this."+H.n(u)+"."+H.n(s)+"(this."+H.n(t)+");"
t=$.aR
if(typeof t!=="number")return t.C()
$.aR=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.n(u)+"."+H.n(s)+"(this."+H.n(t)+", "+n+");"
t=$.aR
if(typeof t!=="number")return t.C()
$.aR=t+1
return new Function(u+t+"}")()},
jT:function(a,b,c,d,e,f,g){return H.lq(a,b,H.ae(c),d,!!e,!!f,g)},
jx:function(a){return a.a},
k5:function(a){return a.c},
f3:function(a){var u,t,s,r,q
u=new H.c3("self","target","receiver","name")
t=J.fH(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
V:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aM(a,"String"))},
nd:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aM(a,"double"))},
mu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aM(a,"num"))},
kO:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aM(a,"bool"))},
ae:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aM(a,"int"))},
kZ:function(a,b){throw H.i(H.aM(a,H.c_(H.V(b).substring(2))))},
mw:function(a,b){throw H.i(H.lm(a,H.c_(H.V(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.a7(a)[b])return a
H.kZ(a,b)},
f:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.a7(a)[b]
else u=!0
if(u)return a
H.mw(a,b)},
jZ:function(a){if(a==null)return a
if(!!J.a7(a).$ib)return a
throw H.i(H.aM(a,"List<dynamic>"))},
mq:function(a,b){var u
if(a==null)return a
u=J.a7(a)
if(!!u.$ib)return a
if(u[b])return a
H.kZ(a,b)},
kR:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ae(u)]
else return a.$S()}return},
eS:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.kR(J.a7(a))
if(u==null)return!1
return H.kF(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.jO)return a
$.jO=!0
try{if(H.eS(a,b))return a
u=H.jk(b)
t=H.aM(a,u)
throw H.i(t)}finally{$.jO=!1}},
jU:function(a,b){if(a!=null&&!H.jS(a,b))H.q(H.aM(a,H.jk(b)))
return a},
aM:function(a,b){return new H.i2("TypeError: "+P.fm(a)+": type '"+H.kJ(a)+"' is not a subtype of type '"+b+"'")},
lm:function(a,b){return new H.f4("CastError: "+P.fm(a)+": type '"+H.kJ(a)+"' is not a subtype of type '"+b+"'")},
kJ:function(a){var u,t
u=J.a7(a)
if(!!u.$ic5){t=H.kR(u)
if(t!=null)return H.jk(t)
return"Closure"}return H.bR(a)},
mD:function(a){throw H.i(new P.fc(H.V(a)))},
lU:function(a){return new H.hu(a)},
kS:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bD:function(a){if(a==null)return
return a.$ti},
ne:function(a,b,c){return H.bZ(a["$a"+H.n(c)],H.bD(b))},
cV:function(a,b,c,d){var u
H.V(c)
H.ae(d)
u=H.bZ(a["$a"+H.n(c)],H.bD(b))
return u==null?null:u[d]},
aE:function(a,b,c){var u
H.V(b)
H.ae(c)
u=H.bZ(a["$a"+H.n(b)],H.bD(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.ae(b)
u=H.bD(a)
return u==null?null:u[b]},
jk:function(a){return H.bA(a,null)},
bA:function(a,b){var u,t
H.k(b,"$ib",[P.o],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c_(a[0].name)+H.jR(a,1,b)
if(typeof a=="function")return H.c_(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ae(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.n(b[t])}if('func' in a)return H.m6(a,b)
if('futureOr' in a)return"FutureOr<"+H.bA("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.o]
H.k(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.h(b,m)
o=C.j.C(o,b[m])
l=t[p]
if(l!=null&&l!==P.T)o+=" extends "+H.bA(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bA(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bA(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bA(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.mi(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.V(u[g])
i=i+h+H.bA(d[c],b)+(" "+H.n(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jR:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.o],"$ab")
if(a==null)return""
u=new P.bv("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bA(p,c)}return"<"+u.i(0)+">"},
bZ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cT:function(a,b,c,d){var u,t
H.V(b)
H.jZ(c)
H.V(d)
if(a==null)return!1
u=H.bD(a)
t=J.a7(a)
if(t[b]==null)return!1
return H.kM(H.bZ(t[d],u),null,c,null)},
k:function(a,b,c,d){H.V(b)
H.jZ(c)
H.V(d)
if(a==null)return a
if(H.cT(a,b,c,d))return a
throw H.i(H.aM(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c_(b.substring(2))+H.jR(c,0,null),v.mangledGlobalNames)))},
kM:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aD(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aD(a[t],b,c[t],d))return!1
return!0},
nb:function(a,b,c){return a.apply(b,H.bZ(J.a7(b)["$a"+H.n(c)],H.bD(b)))},
kU:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="T"||a.name==="H"||a===-1||a===-2||H.kU(u)}return!1},
jS:function(a,b){var u,t
if(a==null)return b==null||b.name==="T"||b.name==="H"||b===-1||b===-2||H.kU(b)
if(b==null||b===-1||b.name==="T"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jS(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eS(a,b)}u=J.a7(a).constructor
t=H.bD(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aD(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.jS(a,b))throw H.i(H.aM(a,H.jk(b)))
return a},
aD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="T"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="T"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aD(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="H")return!0
if('func' in c)return H.kF(a,b,c,d)
if('func' in a)return c.name==="jB"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aD("type" in a?a.type:null,b,s,d)
else if(H.aD(a,b,s,d))return!0
else{if(!('$i'+"cf" in t.prototype))return!1
r=t.prototype["$a"+"cf"]
q=H.bZ(r,u?a.slice(1):null)
return H.aD(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.kM(H.bZ(m,u),b,p,d)},
kF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.mt(h,b,g,d)},
mt:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aD(c[r],d,a[r],b))return!1}return!0},
nc:function(a,b,c){Object.defineProperty(a,H.V(b),{value:c,enumerable:false,writable:true,configurable:true})},
mr:function(a){var u,t,s,r,q,p
u=H.V($.kT.$1(a))
t=$.jd[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ji[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.V($.kL.$2(a,u))
if(u!=null){t=$.jd[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ji[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jj(s)
$.jd[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.ji[u]=s
return s}if(q==="-"){p=H.jj(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.kX(a,s)
if(q==="*")throw H.i(P.kt(u))
if(v.leafTags[u]===true){p=H.jj(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.kX(a,s)},
kX:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.k_(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jj:function(a){return J.k_(a,!1,null,!!a.$iF)},
ms:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jj(u)
else return J.k_(u,c,null,null)},
mm:function(){if(!0===$.jX)return
$.jX=!0
H.mn()},
mn:function(){var u,t,s,r,q,p,o,n
$.jd=Object.create(null)
$.ji=Object.create(null)
H.ml()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l_.$1(q)
if(p!=null){o=H.ms(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ml:function(){var u,t,s,r,q,p,o
u=C.G()
u=H.bW(C.D,H.bW(C.I,H.bW(C.t,H.bW(C.t,H.bW(C.H,H.bW(C.E,H.bW(C.F(C.u),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.kT=new H.jf(q)
$.kL=new H.jg(p)
$.l_=new H.jh(o)},
bW:function(a,b){return a(b)||b},
lA:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.fw("Illegal RegExp pattern ("+String(r)+")",a,null))},
mB:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
l0:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hn:function hn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
i0:function i0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hf:function hf(a,b){this.a=a
this.b=b},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(a){this.a=a},
jv:function jv(a){this.a=a},
ey:function ey(a){this.a=a
this.b=null},
c5:function c5(){},
hQ:function hQ(){},
hI:function hI(){},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i2:function i2(a){this.a=a},
f4:function f4(a){this.a=a},
hu:function hu(a){this.a=a},
aF:function aF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fP:function fP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dp:function dp(a,b){this.a=a
this.$ti=b},
fQ:function fQ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
fK:function fK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cQ:function(a){return a},
bz:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.bC(b,a))},
m5:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.mh(a,b,c))
return b},
cn:function cn(){},
dx:function dx(){},
cm:function cm(){},
dy:function dy(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
dz:function dz(){},
he:function he(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
mi:function(a){return J.ka(a?Object.keys(a):[],null)},
mv:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
je:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jX==null){H.mm()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.i(P.kt("Return interceptor for "+H.n(t(a,u))))}r=a.constructor
q=r==null?null:r[$.k0()]
if(q!=null)return q
q=H.mr(a)
if(q!=null)return q
if(typeof a=="function")return C.J
t=Object.getPrototypeOf(a)
if(t==null)return C.w
if(t===Object.prototype)return C.w
if(typeof r=="function"){Object.defineProperty(r,$.k0(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
lz:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.jw(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.aH(a,0,4294967295,"length",null))
return J.ka(new Array(a),b)},
ka:function(a,b){return J.fH(H.c(a,[b]))},
fH:function(a){H.jZ(a)
a.fixed$length=Array
return a},
a7:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.di.prototype
return J.fJ.prototype}if(typeof a=="string")return J.ch.prototype
if(a==null)return J.dj.prototype
if(typeof a=="boolean")return J.fI.prototype
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.T)return a
return J.je(a)},
jV:function(a){if(typeof a=="string")return J.ch.prototype
if(a==null)return a
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.T)return a
return J.je(a)},
jW:function(a){if(a==null)return a
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.T)return a
return J.je(a)},
eT:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.T)return a
return J.je(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a7(a).u(a,b)},
li:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mp(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jV(a).j(a,b)},
lj:function(a,b,c,d){return J.eT(a).iY(a,b,c,d)},
k2:function(a,b){return J.eT(a).a_(a,b)},
k3:function(a,b){return J.jW(a).G(a,b)},
lk:function(a,b){return J.jW(a).H(a,b)},
bG:function(a){return J.a7(a).gI(a)},
c1:function(a){return J.jW(a).gW(a)},
c2:function(a){return J.jV(a).gk(a)},
aw:function(a){return J.a7(a).i(a)},
a:function a(){},
fI:function fI(){},
dj:function dj(){},
dl:function dl(){},
hj:function hj(){},
dT:function dT(){},
bt:function bt(){},
aY:function aY(a){this.$ti=a},
jD:function jD(a){this.$ti=a},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dk:function dk(){},
di:function di(){},
fJ:function fJ(){},
ch:function ch(){}},P={
lZ:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.md()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cU(new P.iy(u),1)).observe(t,{childList:true})
return new P.ix(u,t,s)}else if(self.setImmediate!=null)return P.me()
return P.mf()},
m_:function(a){self.scheduleImmediate(H.cU(new P.iz(H.l(a,{func:1,ret:-1})),0))},
m0:function(a){self.setImmediate(H.cU(new P.iA(H.l(a,{func:1,ret:-1})),0))},
m1:function(a){P.jK(C.o,H.l(a,{func:1,ret:-1}))},
jK:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.h.aa(a.a,1000)
return P.m4(u<0?0:u,b)},
m4:function(a,b){var u=new P.j2(!0)
u.fs(a,b)
return u},
m2:function(a,b){var u,t,s
b.a=1
try{a.eP(new P.iI(b),new P.iJ(b),null)}catch(s){u=H.bE(s)
t=H.bY(s)
P.mx(new P.iK(b,u,t))}},
kA:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iaC")
if(u>=4){t=b.c8()
b.a=a.a
b.c=a.c
P.cF(b,t)}else{t=H.j(b.c,"$iba")
b.a=2
b.c=a
a.dF(t)}},
cF:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.j(t.c,"$iam")
t=t.b
p=q.a
o=q.b
t.toString
P.j8(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cF(u.a,b)}t=u.a
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
if(k){H.j(m,"$iam")
t=t.b
p=m.a
o=m.b
t.toString
P.j8(null,null,t,p,o)
return}j=$.a2
if(j!=l)$.a2=l
else j=null
t=b.c
if(t===8)new P.iO(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.iN(s,b,m).$0()}else if((t&2)!==0)new P.iM(u,s,b).$0()
if(j!=null)$.a2=j
t=s.b
if(!!J.a7(t).$icf){if(t.a>=4){i=H.j(o.c,"$iba")
o.c=null
b=o.bm(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kA(t,o)
return}}h=b.b
i=H.j(h.c,"$iba")
h.c=null
b=h.bm(i)
t=s.a
p=s.b
if(!t){H.D(p,H.x(h,0))
h.a=4
h.c=p}else{H.j(p,"$iam")
h.a=8
h.c=p}u.a=h
t=h}},
m9:function(a,b){if(H.eS(a,{func:1,args:[P.T,P.at]}))return H.l(a,{func:1,ret:null,args:[P.T,P.at]})
if(H.eS(a,{func:1,args:[P.T]}))return H.l(a,{func:1,ret:null,args:[P.T]})
throw H.i(P.jw(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m8:function(){var u,t
for(;u=$.bV,u!=null;){$.cS=null
t=u.b
$.bV=t
if(t==null)$.cR=null
u.a.$0()}},
mc:function(){$.jP=!0
try{P.m8()}finally{$.cS=null
$.jP=!1
if($.bV!=null)$.k1().$1(P.kN())}},
kI:function(a){var u=new P.e2(H.l(a,{func:1,ret:-1}))
if($.bV==null){$.cR=u
$.bV=u
if(!$.jP)$.k1().$1(P.kN())}else{$.cR.b=u
$.cR=u}},
mb:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.bV
if(u==null){P.kI(a)
$.cS=$.cR
return}t=new P.e2(a)
s=$.cS
if(s==null){t.b=u
$.cS=t
$.bV=t}else{t.b=s.b
s.b=t
$.cS=t
if(t.b==null)$.cR=t}},
mx:function(a){var u,t
u={func:1,ret:-1}
H.l(a,u)
t=$.a2
if(C.l===t){P.ja(null,null,C.l,a)
return}t.toString
P.ja(null,null,t,H.l(t.cn(a),u))},
kr:function(a,b){var u,t
u={func:1,ret:-1}
H.l(b,u)
t=$.a2
if(t===C.l){t.toString
return P.jK(a,b)}return P.jK(a,H.l(t.cn(b),u))},
j8:function(a,b,c,d,e){var u={}
u.a=d
P.mb(new P.j9(u,e))},
kG:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.a2
if(t===c)return d.$0()
$.a2=c
u=t
try{t=d.$0()
return t}finally{$.a2=u}},
kH:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.a2
if(t===c)return d.$1(e)
$.a2=c
u=t
try{t=d.$1(e)
return t}finally{$.a2=u}},
ma:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.a2
if(t===c)return d.$2(e,f)
$.a2=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a2=u}},
ja:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cn(d):c.j4(d,-1)
P.kI(d)},
iy:function iy(a){this.a=a},
ix:function ix(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
j2:function j2(a){this.a=a
this.b=null
this.c=0},
j3:function j3(a,b){this.a=a
this.b=b},
ba:function ba(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aC:function aC(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iH:function iH(a,b){this.a=a
this.b=b},
iL:function iL(a,b){this.a=a
this.b=b},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
iK:function iK(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iP:function iP(a){this.a=a},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(a){this.a=a
this.b=null},
hL:function hL(){},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(a,b){this.a=a
this.b=b},
ct:function ct(){},
hM:function hM(){},
am:function am(a,b){this.a=a
this.b=b},
j5:function j5(){},
j9:function j9(a,b){this.a=a
this.b=b},
iW:function iW(){},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.c=c},
lB:function(a,b){return new H.aF([a,b])},
lC:function(a){return H.mj(a,new H.aF([null,null]))},
lD:function(a,b,c,d){return new P.iT([d])},
kD:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kC:function(a,b,c){var u=new P.iU(a,b,[c])
u.c=a.e
return u},
ly:function(a,b,c){var u,t
if(P.jQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.o])
t=$.cX()
C.a.h(t,a)
try{P.m7(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.kp(b,H.mq(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jC:function(a,b,c){var u,t,s
if(P.jQ(a))return b+"..."+c
u=new P.bv(b)
t=$.cX()
C.a.h(t,a)
try{s=u
s.a=P.kp(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jQ:function(a){var u,t
for(u=0;t=$.cX(),u<t.length;++u)if(a===t[u])return!0
return!1},
m7:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.o],"$ab")
u=a.gW(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.n(u.gL(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gL(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.n(o))
return}q=H.n(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL(u);++s
for(;u.B();o=n,n=m){m=u.gL(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.n(o)
q=H.n(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kc:function(a){var u,t
u={}
if(P.jQ(a))return"{...}"
t=new P.bv("")
try{C.a.h($.cX(),a)
t.a+="{"
u.a=!0
J.lk(a,new P.fV(u,t))
t.a+="}"}finally{u=$.cX()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
iT:function iT(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cG:function cG(a){this.a=a
this.c=this.b=null},
iU:function iU(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fR:function fR(){},
v:function v(){},
fU:function fU(){},
fV:function fV(a,b){this.a=a
this.b=b},
ag:function ag(){},
j_:function j_(){},
eh:function eh(){},
c6:function c6(){},
d7:function d7(){},
fk:function fk(){},
ig:function ig(a){this.a=a},
ih:function ih(){},
j4:function j4(a){this.b=this.a=0
this.c=a},
lv:function(a){if(a instanceof H.c5)return a.i(0)
return"Instance of '"+H.bR(a)+"'"},
lE:function(a,b,c,d){var u,t
H.D(b,d)
u=J.lz(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a2(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
kb:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=J.c1(a);s.B();)C.a.h(t,H.D(s.gL(s),c))
if(b)return t
return H.k(J.fH(t),"$ib",u,"$ab")},
jI:function(a,b,c){var u,t
u=P.A
H.k(a,"$ie",[u],"$ae")
if(a.constructor===Array){H.k(a,"$iaY",[u],"$aaY")
t=a.length
c=P.kl(b,c,t,null,null,null)
return H.kk(b>0||c<t?C.a.f7(a,b,c):a)}return P.lW(a,b,c)},
lW:function(a,b,c){var u,t,s
H.k(a,"$ie",[P.A],"$ae")
u=J.c1(a)
for(t=0;t<b;++t)if(!u.B())throw H.i(P.aH(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gL(u))
return H.kk(s)},
lS:function(a,b,c){return new H.fK(a,H.lA(a,!1,!0,!1))},
kp:function(a,b,c){var u=J.c1(b)
if(!u.B())return a
if(c.length===0){do a+=H.n(u.gL(u))
while(u.B())}else{a+=H.n(u.gL(u))
for(;u.B();)a=a+c+H.n(u.gL(u))}return a},
kE:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.A],"$ab")
if(c===C.q){u=$.lh().b
u=u.test(b)}else u=!1
if(u)return b
t=C.A.je(H.D(b,H.aE(c,"c6",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lP(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lr:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ls:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d8:function(a){if(a>=10)return""+a
return"0"+a},
lt:function(a,b,c,d,e,f){return new P.bK(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fm:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lv(a)},
jw:function(a,b,c){return new P.bb(!0,a,b,c)},
dE:function(a,b,c){return new P.bS(null,null,!0,a,b,"Value not in range")},
aH:function(a,b,c,d,e){return new P.bS(b,c,!0,a,d,"Invalid value")},
kl:function(a,b,c,d,e,f){if(0>a||a>c)throw H.i(P.aH(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.i(P.aH(b,a,c,"end",f))
return b}return c},
X:function(a,b,c,d,e){var u=H.ae(e==null?J.c2(b):e)
return new P.fA(b,u,!0,a,c,"Index out of range")},
aA:function(a){return new P.id(a)},
kt:function(a){return new P.ib(a)},
c7:function(a){return new P.f7(a)},
p:function(a){return new P.ea(a)},
kY:function(a){H.mv(a)},
a6:function a6(){},
au:function au(a,b){this.a=a
this.b=b},
w:function w(){},
bK:function bK(a){this.a=a},
fh:function fh(){},
fi:function fi(){},
bp:function bp(){},
dA:function dA(){},
bb:function bb(a,b,c,d){var _=this
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
fA:function fA(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
id:function id(a){this.a=a},
ib:function ib(a){this.a=a},
hH:function hH(a){this.a=a},
f7:function f7(a){this.a=a},
hi:function hi(){},
dI:function dI(){},
fc:function fc(a){this.a=a},
ea:function ea(a){this.a=a},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
A:function A(){},
e:function e(){},
aX:function aX(){},
b:function b(){},
O:function O(){},
H:function H(){},
a4:function a4(){},
T:function T(){},
at:function at(){},
o:function o(){},
bv:function bv(a){this.a=a},
bj:function(a){var u,t,s,r,q
if(a==null)return
u=P.lB(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=H.V(t[r])
u.a2(0,q,a[q])}return u},
mg:function(a,b){var u={}
a.H(0,new P.jb(u))
return u},
jb:function jb(a){this.a=a},
fs:function fs(a,b){this.a=a
this.b=b},
ft:function ft(){},
fu:function fu(){},
iS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m3:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iV:function iV(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bc:function bc(){},
fN:function fN(){},
bg:function bg(){},
hg:function hg(){},
hm:function hm(){},
hP:function hP(){},
r:function r(){},
bh:function bh(){},
i_:function i_(){},
ef:function ef(){},
eg:function eg(){},
ep:function ep(){},
eq:function eq(){},
eA:function eA(){},
eB:function eB(){},
eG:function eG(){},
eH:function eH(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(a){this.a=a},
f1:function f1(){},
bH:function bH(){},
hh:function hh(){},
e3:function e3(){},
d0:function d0(){},
de:function de(){},
dD:function dD(){},
bT:function bT(){},
dG:function dG(){},
dS:function dS(){},
hG:function hG(){},
ew:function ew(){},
ex:function ex(){}},W={
ll:function(a){var u=document.createElement("a")
return u},
k6:function(a,b){var u=document.createElement("canvas")
return u},
lu:function(a){H.j(a,"$id")
return"wheel"},
iR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kB:function(a,b,c,d){var u,t
u=W.iR(W.iR(W.iR(W.iR(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ad:function(a,b,c,d,e){var u=W.kK(new W.iG(c),W.m)
if(u!=null&&!0)J.lj(a,b,u,!1)
return new W.iF(a,b,u,!1,[e])},
kK:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.a2
if(u===C.l)return a
return u.j6(a,b)},
t:function t(){},
eU:function eU(){},
eW:function eW(){},
eX:function eX(){},
cZ:function cZ(){},
d_:function d_(){},
bI:function bI(){},
bo:function bo(){},
c8:function c8(){},
f8:function f8(){},
U:function U(){},
c9:function c9(){},
f9:function f9(){},
aS:function aS(){},
aT:function aT(){},
fa:function fa(){},
fb:function fb(){},
fd:function fd(){},
ca:function ca(){},
cb:function cb(){},
fe:function fe(){},
da:function da(){},
db:function db(){},
ff:function ff(){},
fg:function fg(){},
iC:function iC(a,b){this.a=a
this.b=b},
a9:function a9(){},
m:function m(){},
d:function d(){},
aU:function aU(){},
fq:function fq(){},
fr:function fr(){},
fv:function fv(){},
aV:function aV(){},
fz:function fz(){},
bM:function bM(){},
df:function df(){},
aZ:function aZ(){},
fS:function fS(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(a){this.a=a},
h5:function h5(){},
h6:function h6(a){this.a=a},
b1:function b1(){},
h7:function h7(){},
ab:function ab(){},
iB:function iB(a){this.a=a},
L:function L(){},
co:function co(){},
b2:function b2(){},
hk:function hk(){},
hs:function hs(){},
ht:function ht(a){this.a=a},
hv:function hv(){},
b3:function b3(){},
hE:function hE(){},
b4:function b4(){},
hF:function hF(){},
b5:function b5(){},
hJ:function hJ(){},
hK:function hK(a){this.a=a},
aJ:function aJ(){},
b6:function b6(){},
aK:function aK(){},
hR:function hR(){},
hS:function hS(){},
hV:function hV(){},
b7:function b7(){},
aL:function aL(){},
hY:function hY(){},
hZ:function hZ(){},
bx:function bx(){},
ie:function ie(){},
iu:function iu(){},
b9:function b9(){},
cE:function cE(){},
iD:function iD(){},
e5:function e5(){},
iQ:function iQ(){},
em:function em(){},
j0:function j0(){},
j1:function j1(){},
iE:function iE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jN:function jN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iF:function iF(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iG:function iG(a){this.a=a},
y:function y(){},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
en:function en(){},
eo:function eo(){},
er:function er(){},
es:function es(){},
et:function et(){},
cL:function cL(){},
cM:function cM(){},
eu:function eu(){},
ev:function ev(){},
ez:function ez(){},
eC:function eC(){},
eD:function eD(){},
cN:function cN(){},
cO:function cO(){},
eE:function eE(){},
eF:function eF(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){}},O={
jy:function(a){var u=new O.a0([a])
u.bh(a)
return u},
a0:function a0(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
ci:function ci(){this.b=this.a=null},
k8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var u=new O.dh()
u.b=V.ky()
u.c=new V.K(0.2,0.3,0.4,1)
u.d=new V.K(0.1,0.2,0.3,1)
u.e=new V.K(0.7,0.7,0.7,1)
u.f=new V.K(0.3,0.3,0.3,1)
u.r=new V.K(0.5,0.5,0.5,1)
u.x=new V.K(0.5,0.5,0.5,1)
u.y=new V.K(1,1,1,1)
u.z=new V.K(0.8,0.8,0.8,1)
u.Q=!1
u.ch=!1
u.cx=!1
u.cy=!1
u.db=!1
u.dx=!1
u.dy=!1
u.fr=!1
u.fx=!1
u.fy=!1
u.go=!1
u.id=!1
u.k1=!1
u.k2=!1
u.k3=!1
u.k4=!1
u.r1=!1
u.r2=r
return u},
bN:function(){var u,t,s
u=new O.du()
u.sfB(O.jy(V.ah))
u.e.aX(u.gha(),u.ghc())
t=new O.b_(u,"emission")
t.c=C.c
t.f=new V.a3(0,0,0)
u.f=t
t=new O.b_(u,"ambient")
t.c=C.c
t.f=new V.a3(0,0,0)
u.r=t
t=new O.b_(u,"diffuse")
t.c=C.c
t.f=new V.a3(0,0,0)
u.x=t
t=new O.b_(u,"invDiffuse")
t.c=C.c
t.f=new V.a3(0,0,0)
u.y=t
t=new O.h1(u,"specular")
t.c=C.c
t.f=new V.a3(0,0,0)
t.ch=100
u.z=t
t=new O.fZ(u,"bump")
t.c=C.c
u.Q=t
u.ch=null
t=new O.b_(u,"reflect")
t.c=C.c
t.f=new V.a3(0,0,0)
u.cx=t
t=new O.h0(u,"refract")
t.c=C.c
t.f=new V.a3(0,0,0)
t.ch=1
u.cy=t
t=new O.fY(u,"alpha")
t.c=C.c
t.f=1
u.db=t
t=new D.dn()
t.bh(D.a5)
t.sfh(H.c([],[D.d9]))
t.sfi(H.c([],[D.dC]))
t.sfj(H.c([],[D.dH]))
t.sfk(H.c([],[D.dL]))
t.sfl(H.c([],[D.dM]))
t.sfm(H.c([],[D.dN]))
t.Q=null
t.ch=null
t.cX(t.gh8(),t.ghI(),t.ghM())
u.dx=t
s=t.Q
if(s==null){s=D.S()
t.Q=s
t=s}else t=s
t.h(0,u.gi5())
t=u.dx
s=t.ch
if(s==null){s=D.S()
t.ch=s
t=s}else t=s
t.h(0,u.gfp())
u.dy=null
return u},
dh:function dh(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fB:function fB(a,b){this.a=a
this.b=b},
fC:function fC(a){this.a=a},
fE:function fE(a,b){this.a=a
this.b=b},
fD:function fD(a){this.a=a},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(a,b){this.a=a
this.b=b},
du:function du(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fY:function fY(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dv:function dv(){},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b_:function b_(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h0:function h0(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h1:function h1(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bw:function bw(){}},E={
ax:function(a,b,c,d,e,f){var u=new E.an()
u.a=d
u.b=!0
u.sfg(0,O.jy(E.an))
u.y.aX(u.gjD(),u.gjG())
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
u.sa3(0,e)
u.sa7(f)
u.sX(c)
return u},
lT:function(a,b){var u=new E.ho(a,b)
u.fc(a,b)
return u},
jJ:function(a,b,c,d,e){var u=C.B.f_(document,a)
if(u==null)throw H.i(P.p("Failed to find an element with the identifier, "+a+"."))
return E.lY(u,!0,!0,!0,!1)},
lY:function(a,b,c,d,e){var u,t,s,r
u=J.a7(a)
if(!!u.$ibI)return E.kq(a,!0,!0,!0,!1)
t=W.k6(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdX(a).h(0,t)
r=E.kq(t,!0,!0,!0,!1)
r.a=a
return r},
kq:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dO()
t=H.j(C.n.eZ(a,"webgl2",P.lC(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibT")
if(t==null)H.q(P.p("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.lT(t,a)
s=new T.hT(t)
s.b=H.ae((t&&C.b).cV(t,3379))
s.c=H.ae(C.b.cV(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.dW(a)
r=new X.fM()
r.c=new X.av(!1,!1,!1)
r.shZ(P.lD(null,null,null,P.A))
s.b=r
r=new X.h8(s)
r.f=0
r.r=V.aG()
r.x=V.aG()
r.Q=1
r.ch=1
s.c=r
r=new X.fT(s)
r.r=0
r.x=V.aG()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.hX(s)
r.e=0
r.f=V.aG()
r.r=V.aG()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sfN(H.c([],[[P.ct,P.T]]))
r=s.z
q=document
p=W.ab
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ad(q,"contextmenu",H.l(s.ghk(),o),!1,p))
r=s.z
n=W.m
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ad(a,"focus",H.l(s.ghq(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ad(a,"blur",H.l(s.ghe(),m),!1,n))
r=s.z
l=W.aZ
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ad(q,"keyup",H.l(s.ghu(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ad(q,"keydown",H.l(s.ghs(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ad(a,"mousedown",H.l(s.ghy(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ad(a,"mouseup",H.l(s.ghC(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ad(a,"mousemove",H.l(s.ghA(),o),!1,p))
l=s.z
k=W.b9;(l&&C.a).h(l,W.ad(a,H.V(W.lu(a)),H.l(s.ghE(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ad(q,"mousemove",H.l(s.ghm(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ad(q,"mouseup",H.l(s.gho(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ad(q,"pointerlockchange",H.l(s.ghG(),m),!1,n))
n=s.z
m=W.aL
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ad(a,"touchstart",H.l(s.ghW(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ad(a,"touchend",H.l(s.ghS(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ad(a,"touchmove",H.l(s.ghU(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.au(Date.now(),!1)
u.cy=0
u.dI()
return u},
f2:function f2(){},
an:function an(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ho:function ho(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
hr:function hr(a){this.a=a},
dO:function dO(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hU:function hU(a){this.a=a}},Z={
jM:function(a,b,c){var u
H.k(c,"$ib",[P.A],"$ab")
u=a.createBuffer()
C.b.ap(a,b,u)
C.b.dV(a,b,new Int16Array(H.cQ(c)),35044)
C.b.ap(a,b,null)
return new Z.e0(b,u)},
aB:function(a){return new Z.aN(a)},
e0:function e0(a,b){this.a=a
this.b=b},
d1:function d1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e1:function e1(a){this.a=a},
bn:function bn(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
d2:function d2(){this.a=null},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a){this.a=a}},D={
S:function(){var u=new D.cd()
u.san(null)
u.sbl(null)
u.c=null
u.d=0
return u},
f5:function f5(){},
cd:function cd(){var _=this
_.d=_.c=_.b=_.a=null},
fn:function fn(a){this.a=a},
fo:function fo(a){this.a=a},
u:function u(a){this.a=a
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
G:function G(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
d9:function d9(){},
a5:function a5(){},
dn:function dn(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dC:function dC(){},
dH:function dH(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){}},X={d3:function d3(a,b){this.a=a
this.b=b},dm:function dm(a,b){this.a=a
this.b=b},fM:function fM(){var _=this
_.d=_.c=_.b=_.a=null},dr:function dr(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fT:function fT(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},av:function av(a,b,c){this.a=a
this.b=b
this.c=c},ay:function ay(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},h8:function h8(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cl:function cl(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hl:function hl(){},dQ:function dQ(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hX:function hX(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dW:function dW(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fy:function(a,b,c,d,e,f,g){var u,t
u=new X.fx()
t=new V.K(0,0,0,1)
u.a=t
u.b=a
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kn
if(t==null){t=V.km(0,0,1,1)
$.kn=t}u.r=t
return u},
bP:function(a,b,c,d,e){var u,t
u=new X.dB()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
u.saG(e)
u.sX(c)
t=u.c
if(!(Math.abs(t-b)<$.J().a)){u.c=b
t=new D.G("fov",t,b,u,[P.w])
t.b=!0
u.av(t)}t=u.d
if(!(Math.abs(t-d)<$.J().a)){u.d=d
t=new D.G("near",t,d,u,[P.w])
t.b=!0
u.av(t)}t=u.e
if(!(Math.abs(t-a)<$.J().a)){u.e=a
t=new D.G("far",t,a,u,[P.w])
t.b=!0
u.av(t)}return u},
d4:function d4(){},
fx:function fx(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dB:function dB(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dJ:function dJ(){}},V={
mE:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.f4(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.j.ag("null",c)
return C.j.ag(C.i.k7(Math.abs(a-0)<$.J().a?0:a,b),c+b+1)},
bX:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.w],"$ab")
u=H.c([],[P.o])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.B)(a),++r){q=V.N(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.a2(u,p,C.j.ag(u[p],s))}return u},
ck:function(){var u=$.kd
if(u==null){u=V.b0(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kd=u}return u},
b0:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ai:function(a,b,c){return V.b0(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
bO:function(a,b,c,d){return V.b0(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
cj:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b0(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
jH:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b0(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
aG:function(){var u=$.kh
if(u==null){u=new V.W(0,0)
$.kh=u}return u},
ki:function(){var u=$.cp
if(u==null){u=new V.a1(0,0,0)
$.cp=u}return u},
km:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dF(a,b,c,d)},
bU:function(){var u=$.kx
if(u==null){u=new V.z(0,0,0)
$.kx=u}return u},
ky:function(){var u=$.kv
if(u==null){u=new V.z(0,0,-1)
$.kv=u}return u},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function fl(a){this.a=a},
dw:function dw(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ah:function ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
W:function W(a,b){this.a=a
this.b=b},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dF:function dF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
P:function P(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
bi:function bi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aj:function(a){var u=new V.hw()
u.fd(a)
return u},
eV:function eV(){},
bd:function bd(){},
ds:function ds(){},
bf:function bf(){this.a=null},
hw:function hw(){this.a=null},
cs:function cs(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dP:function dP(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a,b){this.a=a
this.b=b
this.c=null},
hW:function hW(){this.c=this.b=this.a=null},
cv:function cv(a){this.b=a
this.a=this.c=null},
lV:function(a,b){var u=new V.hA()
u.fe(a,!0)
return u},
hA:function hA(){this.b=this.a=null},
hC:function hC(a){this.a=a},
hB:function hB(a){this.a=a}},U={
jz:function(){var u=new U.f6()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
R:function(a){var u=new U.d6()
u.sJ(0,a)
return u},
aW:function(a){var u=new U.cg()
u.bh(U.aa)
u.aX(u.gfn(),u.ghK())
u.e=null
u.f=V.ck()
u.r=0
return u},
f6:function f6(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d6:function d6(){this.b=this.a=null},
cg:function cg(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
dX:function dX(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dY:function dY(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dZ:function dZ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
jA:function(a){var u=new M.d5()
u.bh(M.ao)
u.e=!1
u.f=null
u.aX(u.ghO(),u.ghQ())
u.cg(0,a)
return u},
cc:function(a,b,c,d,e){var u=new M.dc()
u.sfF(0,O.jy(E.an))
u.d.aX(u.ghg(),u.ghi())
u.e=null
u.f=null
u.r=null
u.x=null
d=X.fy(!0,!0,!1,c,2000,null,0)
u.saC(a)
u.sbK(0,d)
u.sa7(e)
return u},
d5:function d5(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},
dc:function dc(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ao:function ao(){},
my:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
t=E.jJ(a,!0,!0,!0,!1)
s=O.bN()
r=s.f
r.sV(0,new V.a3(0.4,0.6,0.8))
q=O.bN()
r=q.f
r.sV(0,new V.a3(0.8,0.6,0.4))
q.db.sbM(0,0.3)
p=O.bN()
r=p.f
r.sV(0,new V.a3(0.4,0.6,0.8))
p.db.sbM(0,0.3)
o=U.R(null)
n=U.R(null)
m=E.ax(null,!0,null,"",null,null)
m.sa7(s)
r=F.aI()
r.aF(F.jl(!0,2,null,2,0))
r.aF(F.kQ(-1,!1,!0,0,null,36))
m.sa3(0,r)
l=E.ax(null,!0,null,"",null,null)
l.sa7(q)
l.sa3(0,F.jY(null))
r=U.aW(null)
r.h(0,U.R(V.bO(1.3,1.3,1.3,1)))
r.h(0,U.R(V.cj(-1.5707963267948966)))
r.h(0,o)
l.sX(r)
k=E.ax(null,!0,null,"",null,null)
k.sa3(0,F.jY(null))
r=U.aW(null)
r.h(0,U.R(V.ai(0,0,0.1)))
k.sX(r)
j=E.ax(null,!0,null,"",null,null)
j.sa3(0,F.jY(null))
r=U.aW(null)
r.h(0,n)
j.sX(r)
i=M.cc(null,null,null,null,null)
i.sbK(0,X.fy(!1,!0,!1,null,2000,null,0))
r=X.bP(2000,1.0471975511965976,null,0.1,null)
r.saG(U.R(V.ai(-0.5,0,0)))
r.sX(U.R(V.ai(0,0,5)))
i.saC(r)
i.d.h(0,l)
i.d.h(0,m)
h=M.cc(null,null,null,null,null)
r=X.bP(2000,1.0471975511965976,null,0.1,null)
r.saG(U.R(V.ai(0.5,0,0)))
r.sX(U.R(V.ai(0,0,5)))
h.saC(r)
h.sa7(p)
h.d.h(0,j)
h.d.h(0,k)
u.a=0.5
u.b=!1
t.r.c.gb6().h(0,new M.jm(u))
t.r.c.gaH().h(0,new M.jn(u))
t.r.c.gba().h(0,new M.jo(u,o,k,j,n))
t.sbO(M.jA(H.c([h,i],[M.ao])))},
mz:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u={}
t=E.jJ(a,!0,!0,!0,!1)
s=O.k8(!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,1)
s.scZ(!0)
s.scY(!0)
s.se_(new V.K(0.2,0.3,0.4,0.2))
s.sdS(new V.K(0.1,0.2,0.3,0.2))
r=O.bN()
q=r.f
q.sV(0,new V.a3(0.8,0.6,0.4))
r.db.sbM(0,0.3)
p=O.bN()
q=p.f
q.sV(0,new V.a3(0.4,0.6,0.8))
o=U.R(null)
n=U.R(null)
m=U.aW(null)
m.h(0,U.R(V.cj(0.4)))
m.h(0,U.R(V.jH(0.4)))
l=E.ax(null,!0,null,"",null,null)
l.sa7(s)
q=F.aI()
q.aF(F.kP(1,null,null,1))
q.aF(F.kV(2))
l.sa3(0,q)
l.sX(m)
k=E.ax(null,!0,null,"",null,null)
k.sa7(r)
k.sa3(0,F.jl(!1,2,null,2,0))
q=U.aW(null)
q.h(0,U.R(V.bO(1.3,1.3,1.3,1)))
q.h(0,U.R(V.cj(-1.5707963267948966)))
q.h(0,o)
q.h(0,m)
k.sX(q)
j=E.ax(null,!0,null,"",null,null)
j.sa3(0,F.jl(!0,2,null,2,0))
i=E.ax(null,!0,null,"",null,null)
i.sa3(0,F.kQ(-1,!1,!0,0,null,36))
q=U.aW(null)
q.h(0,n)
i.sX(q)
h=M.cc(null,null,null,null,null)
h.sbK(0,X.fy(!1,!0,!1,null,2000,null,0))
q=X.bP(2000,1.0471975511965976,null,0.1,null)
q.saG(U.R(V.ai(-0.5,0,0)))
q.sX(U.R(V.ai(0,0,5)))
h.saC(q)
h.d.h(0,k)
h.d.h(0,l)
g=M.cc(null,null,null,null,null)
q=X.bP(2000,1.0471975511965976,null,0.1,null)
q.saG(U.R(V.ai(0.5,0,0)))
q.sX(U.R(V.ai(0,0,5)))
g.saC(q)
g.sa7(p)
g.d.h(0,i)
g.d.h(0,j)
u.a=0.5
u.b=!1
t.r.c.gb6().h(0,new M.jp(u))
t.r.c.gaH().h(0,new M.jq(u))
t.r.c.gba().h(0,new M.jr(u,o,j,i,n))
t.sbO(M.jA(H.c([g,h],[M.ao])))},
mA:function(b6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
u={}
t=E.jJ(b6,!0,!0,!0,!1)
s=O.bN()
r=s.f
r.sV(0,new V.a3(0.4,0.6,0.8))
q=O.bN()
r=q.f
r.sV(0,new V.a3(0.8,0.6,0.4))
q.db.sbM(0,0.3)
p=O.k8(!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,1)
p.scZ(!0)
p.scY(!0)
p.se_(new V.K(0.2,0.3,0.4,0.2))
p.sdS(new V.K(0.1,0.2,0.3,0.2))
o=U.R(null)
n=U.R(null)
m=U.aW(null)
m.h(0,U.R(V.cj(0.4)))
m.h(0,U.R(V.jH(0.4)))
l=U.aW(null)
k=F.aI()
j=k.a.Z(1,-1,1)
i=k.a.Z(1,1,1)
h=k.a.Z(1,1,-1)
g=k.a.Z(1,-1,-1)
f=k.a.Z(-1,-1,1)
e=k.a.Z(-1,1,1)
d=k.a.Z(-1,1,-1)
c=k.a.Z(-1,-1,-1)
b=k.a.Z(0.5,-0.5,0.5)
a=k.a.Z(0.5,0.5,0.5)
a0=k.a.Z(0.5,0.5,-0.5)
a1=k.a.Z(0.5,-0.5,-0.5)
a2=k.a.Z(-0.5,-0.5,0.5)
a3=k.a.Z(-0.5,0.5,0.5)
a4=k.a.Z(-0.5,0.5,-0.5)
a5=k.a.Z(-0.5,-0.5,-0.5)
k.c.j1(H.c([j,i,i,h,h,g,g,j,f,e,e,d,d,c,c,f,b,a,a,a0,a0,a1,a1,b,a2,a3,a3,a4,a4,a5,a5,a2,j,f,i,e,h,d,g,c,b,a2,a,a3,a0,a4,a1,a5,j,b,i,a,h,a0,g,a1,f,a2,e,a3,d,a4,c,a5],[F.Q]))
a6=E.ax(null,!0,null,"",null,null)
a6.sa7(s)
a6.sa3(0,k)
a6.sX(m)
a7=E.ax(null,!0,null,"",null,null)
a7.sa7(q)
a7.sa3(0,F.jl(!1,2,null,2,0))
r=U.aW(null)
r.h(0,U.R(V.bO(1.1,1.1,1.1,1)))
r.h(0,U.R(V.cj(-1.5707963267948966)))
r.h(0,o)
r.h(0,m)
a7.sX(r)
a8=E.ax(null,!0,null,"",null,null)
a8.sa3(0,F.kP(1,null,null,1))
a8.sX(l)
a9=E.ax(null,!0,null,"",null,null)
a9.sa3(0,F.kV(2))
r=U.aW(null)
r.h(0,n)
r.h(0,l)
a9.sX(r)
b0=M.cc(null,null,null,null,null)
b0.sbK(0,X.fy(!1,!0,!1,null,2000,null,0))
r=X.bP(2000,1.0471975511965976,null,0.1,null)
r.saG(U.R(V.ai(-0.5,0,0)))
r.sX(U.R(V.ai(0,0,5)))
b0.saC(r)
b0.d.h(0,a6)
b0.d.h(0,a7)
b1=M.cc(null,null,null,null,null)
r=X.bP(2000,1.0471975511965976,null,0.1,null)
r.saG(U.R(V.ai(0.5,0,0)))
r.sX(U.R(V.ai(0,0,5)))
b1.saC(r)
b1.sa7(p)
b1.d.h(0,a9)
b1.d.h(0,a8)
u.a=0.5
u.b=!1
t.r.c.gb6().h(0,new M.js(u))
t.r.c.gaH().h(0,new M.jt(u))
t.r.c.gba().h(0,new M.ju(u,o,a8,a9,n))
u=t.r
r=new U.dY()
b2=U.jz()
b2.scU(0,!0)
b2.scH(6.283185307179586)
b2.scJ(0)
b2.sa0(0,0)
b2.scI(100)
b2.sT(0)
b2.scu(0.5)
r.b=b2
b3=r.gaM()
b2.gq().h(0,b3)
b2=U.jz()
b2.scU(0,!0)
b2.scH(6.283185307179586)
b2.scJ(0)
b2.sa0(0,0)
b2.scI(100)
b2.sT(0)
b2.scu(0.5)
r.c=b2
b2.gq().h(0,b3)
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
b4=new X.av(!1,!1,!1)
b5=r.d
r.d=b4
b2=[X.av]
b3=new D.G("modifiers",b5,b4,r,b2)
b3.b=!0
r.O(b3)
b3=r.f
if(b3!==!1){r.f=!1
b3=new D.G("invertX",b3,!1,r,[P.a6])
b3.b=!0
r.O(b3)}b3=r.r
if(b3!==!0){r.r=!0
b3=new D.G("invertY",b3,!0,r,[P.a6])
b3.b=!0
r.O(b3)}r.b2(u)
l.h(0,r)
u=t.r
r=new U.dX()
b3=U.jz()
b3.scU(0,!0)
b3.scH(6.283185307179586)
b3.scJ(0)
b3.sa0(0,0)
b3.scI(100)
b3.sT(0)
b3.scu(0.2)
r.b=b3
b3.gq().h(0,r.gaM())
r.c=null
r.d=!1
r.e=2.5
r.f=2
r.r=4
r.y=!1
r.x=!1
r.z=0
r.Q=null
r.ch=0
r.cx=null
r.cy=null
b4=new X.av(!0,!1,!1)
b5=r.c
r.c=b4
b3=new D.G("modifiers",b5,b4,r,b2)
b3.b=!0
r.O(b3)
r.b2(u)
l.h(0,r)
u=t.r
r=new U.dZ()
r.c=0.01
r.d=0
r.e=0
b4=new X.av(!1,!1,!1)
r.b=b4
b2=new D.G("modifiers",null,b4,r,b2)
b2.b=!0
r.O(b2)
r.b2(u)
l.h(0,r)
t.sbO(M.jA(H.c([b1,b0],[M.ao])))},
kW:function(){var u,t
u=V.lV("Hypersphere",!0)
t=[P.o]
u.ai(H.c(["This is a simple example to help demonstrate why a hypersphere takes up ","so little space of the hypercube."],t))
u.ci(3,"2D: circle and square")
u.ai(H.c(["Imagine taking slices out of a circle inscribed in a square. Each slice is ","two lines, one from the circle and one from the square. When the slices ","are near the top, the line caused by the circle is small compared to the square. ","The corners of the square aren't covered by the circle."],t))
u.cj("target2D")
u.ai(H.c(["_Click and drag to move the location of the slice._"],t))
u.ci(3,"3D: sphere and cube")
u.ai(H.c(["Now imagine taking slices out of a sphere inscribed in a cube. Each slice is ","a circle inside a square. When the slice is in the middle, the circle touches ","the sides of the square. When the slice is near a side, the circle is almost a ","point but the square is still the same size. That is a lot of extra space for ","for the square not used by the circle."],t))
u.cj("target3D")
u.ai(H.c(["_Click and drag to move the location of the slice._"],t))
u.ci(3,"4D: hypersphere and hypercube")
u.ai(H.c(["Now imagine taking a slice out of a hypersphere inscribed in a hypercube. ","Each slice is a sphere and a cube (as shown in the graphics below). ","When the slice is near the edges, the sphere is a small point in the middle ","of a cube. As the slice moves down the sphere gets bigger until it touches all ","the sides of the cube, then it shrinks again. Once again, that's a lot of ","space in the cube not filled by the sphere."],t))
u.cj("target4D")
u.ai(H.c(["_The shape on the left is an artistic representation of a 4D hypercube._ ","_Click and drag on the left to move the location of the slice._","_Click and drag on the right to rotate the resulting 3D slice._"],t))
u.ai(H.c(["With each new dimension the hypersphere is small near the edges and only touching ","the sides of the hypersphere in the very middle."],t))
u.ai(H.c(["\xab[Back to Examples|../]"],t))
M.my("target2D")
M.mz("target3D")
M.mA("target4D")},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jp:function jp(a){this.a=a},
jq:function jq(a){this.a=a},
jr:function jr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},A={
lF:function(a,b){var u,t
u=a.aj
t=new A.dt(b,u)
t.d7(b,u)
t.fb(a,b)
return t},
jL:function(a,b,c,d,e){var u=new A.i4(a,b,c,e)
u.f=d
u.siy(P.lE(d,0,!1,P.A))
return u},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
eY:function eY(a){this.a=a},
dg:function dg(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dt:function dt(a,b){var _=this
_.bt=_.e6=_.bs=_.aj=_.as=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.em=_.cw=_.el=_.bG=_.ek=_.ej=_.bF=_.bE=_.ei=_.eh=_.bD=_.bC=_.bB=_.eg=_.ef=_.bA=_.ee=_.ed=_.bz=_.ec=_.eb=_.by=_.bx=_.ea=_.e9=_.bw=_.bv=_.e8=_.e7=_.bu=null
_.cD=_.eq=_.cC=_.ep=_.cB=_.eo=_.cA=_.en=_.cz=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h_:function h_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.as=b3
_.aj=b4
_.bs=b5},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cz:function cz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cC:function cC(a,b,c,d,e,f,g,h,i,j){var _=this
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
cA:function cA(a,b,c,d,e,f,g,h,i,j){var _=this
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
cD:function cD(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cr:function cr(){},
bJ:function bJ(a,b){this.a=a
this.b=b},
dR:function dR(){},
i9:function i9(a){this.a=a},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i6:function i6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i7:function i7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i8:function i8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i4:function i4(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
jY:function(a){var u,t,s,r,q,p
u=F.aI()
t=u.a
s=V.aG()
r=new V.z(-1,-1,0)
r=r.m(0,Math.sqrt(r.v(r)))
q=t.aP(new V.az(1,2,4,6),new V.K(1,0,0,1),new V.a1(-1,0,0),s,r,a)
t=u.a
s=new V.z(1,-1,0)
s=s.m(0,Math.sqrt(s.v(s)))
p=t.aP(new V.az(0,3,4,6),new V.K(0,0,1,1),new V.a1(1,0,0),new V.W(1,0),s,a)
u.c.cf(0,q,p)
return u},
jl:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l
u=F.aI()
t=u.a
s=-d*0.5
r=-b*0.5
q=new V.z(-1,-1,1)
q=q.m(0,Math.sqrt(q.v(q)))
p=t.aP(new V.az(1,2,4,6),new V.K(1,0,0,1),new V.a1(s,r,e),new V.W(0,1),q,c)
t=u.a
q=d*0.5
o=new V.z(1,-1,1)
o=o.m(0,Math.sqrt(o.v(o)))
n=t.aP(new V.az(0,3,4,6),new V.K(0,0,1,1),new V.a1(q,r,e),new V.W(1,1),o,c)
t=u.a
r=b*0.5
o=new V.z(1,1,1)
o=o.m(0,Math.sqrt(o.v(o)))
m=t.aP(new V.az(0,2,5,6),new V.K(0,1,0,1),new V.a1(q,r,e),new V.W(1,0),o,c)
t=u.a
q=V.aG()
o=new V.z(-1,1,1)
o=o.m(0,Math.sqrt(o.v(o)))
l=t.aP(new V.az(0,2,4,7),new V.K(1,1,0,1),new V.a1(s,r,e),q,o,c)
t=[F.Q]
if(a)u.c.dQ(H.c([p,n,m,l],t))
else u.d.iZ(H.c([p,n,m,l],t))
u.aq()
return u},
kP:function(a,b,c,d){var u=F.aI()
F.cP(u,b,c,d,a,1,0,0,1)
F.cP(u,b,c,d,a,0,1,0,3)
F.cP(u,b,c,d,a,0,0,1,2)
F.cP(u,b,c,d,a,-1,0,0,0)
F.cP(u,b,c,d,a,0,-1,0,0)
F.cP(u,b,c,d,a,0,0,-1,3)
u.aq()
return u},
j7:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cP:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.z(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.z(o+a3,n+a1,m+a2)
u.b=l
k=new V.z(o-a3,n-a1,m-a2)
u.c=k
j=new V.z(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.j7(t)
f=F.j7(u.b)
e=F.mC(d,a0,new F.j6(u,F.j7(u.c),F.j7(u.d),f,g,c),b)
if(e!=null)a.aF(e)},
kQ:function(a,b,c,d,e,f){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
e=new F.jc()
if(f<3)return
u=F.aI()
t=-6.283185307179586/f
s=H.c([],[F.Q])
for(r=0;r<=f;++r){q=t*r
p=Math.sin(q)
o=Math.cos(q)
n=e.$1(r/f)
m=u.a
if(typeof n!=="number")return H.C(n)
l=new V.z(p,o,1).m(0,Math.sqrt(p*p+o*o+1))
if(p<0)k=0
else k=p>1?1:p
j=o<0
if(j)i=0
else i=o>1?1:o
if(j)j=0
else j=o>1?1:o
m.toString
h=F.by(new V.az(a,-1,-1,-1),null,new V.K(k,i,j,1),new V.a1(p*n,o*n,d),new V.z(0,0,1),new V.W(p*0.5+0.5,o*0.5+0.5),l,null,0)
m.h(0,h)
C.a.h(s,h)}u.c.dQ(s)
return u},
kV:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=F.aI()
t=Math.sqrt(5)/2+0.5
s=F.as(u,new V.z(-1,t,0))
r=F.as(u,new V.z(1,t,0))
q=-t
p=F.as(u,new V.z(-1,q,0))
o=F.as(u,new V.z(1,q,0))
n=F.as(u,new V.z(0,-1,q))
m=F.as(u,new V.z(0,1,q))
l=F.as(u,new V.z(0,-1,t))
k=F.as(u,new V.z(0,1,t))
j=F.as(u,new V.z(t,0,1))
i=F.as(u,new V.z(t,0,-1))
h=F.as(u,new V.z(q,0,1))
g=F.as(u,new V.z(q,0,-1))
F.a_(u,s,g,m,a)
F.a_(u,s,m,r,a)
F.a_(u,s,r,k,a)
F.a_(u,s,k,h,a)
F.a_(u,s,h,g,a)
F.a_(u,r,m,i,a)
F.a_(u,m,g,n,a)
F.a_(u,g,h,p,a)
F.a_(u,h,k,l,a)
F.a_(u,k,r,j,a)
F.a_(u,o,i,n,a)
F.a_(u,o,n,p,a)
F.a_(u,o,p,l,a)
F.a_(u,o,l,j,a)
F.a_(u,o,j,i,a)
F.a_(u,n,i,m,a)
F.a_(u,p,n,g,a)
F.a_(u,l,p,h,a)
F.a_(u,j,l,k,a)
F.a_(u,i,j,r,a)
u.jC(new F.e_(),new F.im())
return u},
as:function(a,b){var u,t,s,r,q,p,o,n,m,l,k
b=b.m(0,Math.sqrt(b.v(b)))
u=b.a
t=b.b
s=b.c
r=F.by(null,null,null,new V.a1(u,t,s),b,null,null,null,0)
q=a.jp(r,new F.e_())
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
r.sV(0,new V.K(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.scP(new V.W(l,k<0?-k:k))
a.a.h(0,r)
return r},
a_:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.dP(0,b,d,c)
else{u=F.as(a,b.r.C(0,c.r).n(0,0.5))
t=F.as(a,c.r.C(0,d.r).n(0,0.5))
s=F.as(a,d.r.C(0,b.r).n(0,0.5))
r=e-1
F.a_(a,b,u,s,r)
F.a_(a,u,c,t,r)
F.a_(a,t,s,u,r)
F.a_(a,s,t,d,r)}},
mC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.Q,P.w,P.w]})
if(a<1)return
if(b<1)return
u=F.aI()
t=H.c([],[F.Q])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.by(null,null,new V.K(p,0,0,1),null,null,new V.W(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.ct(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.by(null,null,new V.K(j,i,h,1),null,null,new V.W(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.ct(d))}}u.d.j_(a+1,b+1,t)
return u},
ce:function(a,b,c){var u,t
u=new F.Y()
t=a.a
if(t==null)H.q(P.p("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.p("May not create a face with vertices attached to different shapes."))
u.b0(a)
u.b1(b)
u.dL(c)
C.a.h(u.a.a.d.b,u)
u.a.a.P()
return u},
jG:function(a,b){var u,t
u=new F.af()
if(a==null)H.q(P.p("May not create a line with a null start vertex."))
if(b==null)H.q(P.p("May not create a line with a null end vertex."))
t=a.a
if(t==null)H.q(P.p("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.p("May not create a line with vertices attached to different shapes."))
u.b0(a)
u.b1(b)
C.a.h(u.a.a.c.b,u)
u.a.a.P()
return u},
lG:function(a){var u=new F.bu()
if(a.a==null)H.q(P.p("May not create a point with a vertex which is not attached to a shape."))
u.i8(a)
C.a.h(u.a.a.b.b,u)
u.a.a.P()
return u},
aI:function(){var u,t
u=new F.ap()
t=new F.ii(u)
t.b=!1
t.siz(H.c([],[F.Q]))
u.a=t
t=new F.hz(u)
t.sc6(H.c([],[F.bu]))
u.b=t
t=new F.hy(u)
t.sfY(H.c([],[F.af]))
u.c=t
t=new F.hx(u)
t.sfO(H.c([],[F.Y]))
u.d=t
u.e=null
return u},
by:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.Q()
t=new F.ir(u)
t.sc6(H.c([],[F.bu]))
u.b=t
t=new F.io(u)
s=[F.af]
t.sfZ(H.c([],s))
t.sh_(H.c([],s))
u.c=t
t=new F.ij(u)
s=[F.Y]
t.sfP(H.c([],s))
t.sfQ(H.c([],s))
t.sfR(H.c([],s))
u.d=t
h=$.le()
u.e=0
t=$.aQ()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aP().a)!==0?e:null
u.x=(s&$.aO().a)!==0?b:null
u.y=(s&$.bl().a)!==0?f:null
u.z=(s&$.bm().a)!==0?g:null
u.Q=(s&$.lf().a)!==0?c:null
u.ch=(s&$.c0().a)!==0?i:0
u.cx=(s&$.bk().a)!==0?a:null
return u},
j6:function j6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jc:function jc(){},
Y:function Y(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fp:function fp(){},
hD:function hD(){},
af:function af(){this.b=this.a=null},
fO:function fO(){},
i3:function i3(){},
bu:function bu(){this.a=null},
ap:function ap(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hx:function hx(a){this.a=a
this.b=null},
hy:function hy(a){this.a=a
this.b=null},
hz:function hz(a){this.a=a
this.b=null},
Q:function Q(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
it:function it(a){this.a=a},
is:function is(a){this.a=a},
ii:function ii(a){this.a=a
this.c=this.b=null},
ij:function ij(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ik:function ik(a,b){this.a=a
this.b=b},
il:function il(a,b){this.a=a
this.b=b},
io:function io(a){this.a=a
this.c=this.b=null},
ip:function ip(){},
e_:function e_(){},
iq:function iq(){},
im:function im(){},
ir:function ir(a){this.a=a
this.b=null}},T={dK:function dK(){},hT:function hT(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jE.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gI:function(a){return H.cq(a)},
i:function(a){return"Instance of '"+H.bR(a)+"'"}}
J.fI.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$ia6:1}
J.dj.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0},
$iH:1}
J.dl.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hj.prototype={}
J.dT.prototype={}
J.bt.prototype={
i:function(a){var u=a[$.l3()]
if(u==null)return this.f9(a)
return"JavaScript function for "+H.n(J.aw(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijB:1}
J.aY.prototype={
h:function(a,b){H.D(b,H.x(a,0))
if(!!a.fixed$length)H.q(P.aA("add"))
a.push(b)},
eL:function(a,b){if(!!a.fixed$length)H.q(P.aA("removeAt"))
if(b<0||b>=a.length)throw H.i(P.dE(b,null,null))
return a.splice(b,1)[0]},
w:function(a,b){var u
if(!!a.fixed$length)H.q(P.aA("remove"))
for(u=0;u<a.length;++u)if(J.E(a[u],b)){a.splice(u,1)
return!0}return!1},
cg:function(a,b){var u,t
H.k(b,"$ie",[H.x(a,0)],"$ae")
if(!!a.fixed$length)H.q(P.aA("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.B)(b),++t)a.push(b[t])},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.c7(a))}},
D:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.a2(u,t,H.n(a[t]))
return u.join(b)},
jy:function(a){return this.D(a,"")},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
f7:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.aH(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.aH(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
gjs:function(a){if(a.length>0)return a[0]
throw H.i(H.k9())},
gcF:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.k9())},
aS:function(a,b){var u
for(u=0;u<a.length;++u)if(J.E(a[u],b))return!0
return!1},
i:function(a){return P.jC(a,"[","]")},
gW:function(a){return new J.al(a,a.length,0,[H.x(a,0)])},
gI:function(a){return H.cq(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.q(P.aA("set length"))
if(b<0)throw H.i(P.aH(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(H.bC(a,b))
if(b>=a.length||b<0)throw H.i(H.bC(a,b))
return a[b]},
a2:function(a,b,c){H.D(c,H.x(a,0))
if(!!a.immutable$list)H.q(P.aA("indexed set"))
if(b>=a.length||b<0)throw H.i(H.bC(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.jD.prototype={}
J.al.prototype={
gL:function(a){return this.d},
B:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.i(H.B(u))
s=this.c
if(s>=t){this.sdr(null)
return!1}this.sdr(u[s]);++this.c
return!0},
sdr:function(a){this.d=H.D(a,H.x(this,0))},
$iaX:1}
J.dk.prototype={
cr:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.h.gbH(b)
if(this.gbH(a)===u)return 0
if(this.gbH(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbH:function(a){return a===0?1/a<0:a<0},
es:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.aA(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.aA(""+a+".round()"))},
j7:function(a,b,c){if(C.h.cr(b,c)>0)throw H.i(H.bB(b))
if(this.cr(a,b)<0)return b
if(this.cr(a,c)>0)return c
return a},
k7:function(a,b){var u
if(b>20)throw H.i(P.aH(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbH(a))return"-"+u
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
n:function(a,b){if(typeof b!=="number")throw H.i(H.bB(b))
return a*b},
f4:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
aa:function(a,b){return(a|0)===a?a/b|0:this.ik(a,b)},
ik:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.aA("Result of truncating division is "+H.n(u)+": "+H.n(a)+" ~/ "+b))},
bn:function(a,b){var u
if(a>0)u=this.ih(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ih:function(a,b){return b>31?0:a>>>b},
$iw:1,
$ia4:1}
J.di.prototype={$iA:1}
J.fJ.prototype={}
J.ch.prototype={
cq:function(a,b){if(b<0)throw H.i(H.bC(a,b))
if(b>=a.length)H.q(H.bC(a,b))
return a.charCodeAt(b)},
bj:function(a,b){if(b>=a.length)throw H.i(H.bC(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.i(P.jw(b,null,null))
return a+b},
d1:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.dE(b,null,null))
if(b>c)throw H.i(P.dE(b,null,null))
if(c>a.length)throw H.i(P.dE(c,null,null))
return a.substring(b,c)},
d0:function(a,b){return this.d1(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.z)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jM:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.n(c,u)+a},
ag:function(a,b){return this.jM(a,b," ")},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ikf:1,
$io:1}
H.a8.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.cq(this.a,b)},
$adV:function(){return[P.A]},
$av:function(){return[P.A]},
$ae:function(){return[P.A]},
$ab:function(){return[P.A]}}
H.fj.prototype={}
H.dq.prototype={
gL:function(a){return this.d},
B:function(){var u,t,s,r
u=this.a
t=J.jV(u)
s=t.gk(u)
if(this.b!==s)throw H.i(P.c7(u))
r=this.c
if(r>=s){this.saY(null)
return!1}this.saY(t.G(u,r));++this.c
return!0},
saY:function(a){this.d=H.D(a,H.x(this,0))},
$iaX:1}
H.fW.prototype={
gW:function(a){return new H.fX(J.c1(this.a),this.b,this.$ti)},
gk:function(a){return J.c2(this.a)},
G:function(a,b){return this.b.$1(J.k3(this.a,b))},
$ae:function(a,b){return[b]}}
H.fX.prototype={
B:function(){var u=this.b
if(u.B()){this.saY(this.c.$1(u.gL(u)))
return!0}this.saY(null)
return!1},
gL:function(a){return this.a},
saY:function(a){this.a=H.D(a,H.x(this,1))},
$aaX:function(a,b){return[b]}}
H.iv.prototype={
gW:function(a){return new H.iw(J.c1(this.a),this.b,this.$ti)}}
H.iw.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gL(u)))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.bL.prototype={}
H.dV.prototype={}
H.dU.prototype={}
H.hn.prototype={}
H.i0.prototype={
af:function(a){var u,t,s
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
H.hf.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.n(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fL.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.n(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.n(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.n(this.a)+")"}}
H.ic.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jv.prototype={
$1:function(a){if(!!J.a7(a).$ibp)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.ey.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iat:1}
H.c5.prototype={
i:function(a){return"Closure '"+H.bR(this).trim()+"'"},
$ijB:1,
gkc:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hQ.prototype={}
H.hI.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c_(u)+"'"}}
H.c3.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c3))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gI:function(a){var u,t
u=this.c
if(u==null)t=H.cq(this.a)
else t=typeof u!=="object"?J.bG(u):H.cq(u)
return(t^H.cq(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.n(this.d)+"' of "+("Instance of '"+H.bR(u)+"'")}}
H.i2.prototype={
i:function(a){return this.a}}
H.f4.prototype={
i:function(a){return this.a}}
H.hu.prototype={
i:function(a){return"RuntimeError: "+H.n(this.a)}}
H.aF.prototype={
gk:function(a){return this.a},
gaE:function(a){return new H.dp(this,[H.x(this,0)])},
dZ:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dm(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dm(t,b)}else return this.jw(b)},
jw:function(a){var u=this.d
if(u==null)return!1
return this.cE(this.bV(u,J.bG(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bk(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bk(r,b)
s=t==null?null:t.b
return s}else return this.jx(b)},
jx:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bV(u,J.bG(a)&0x3ffffff)
s=this.cE(t,a)
if(s<0)return
return t[s].b},
a2:function(a,b,c){var u,t,s,r,q,p
H.D(b,H.x(this,0))
H.D(c,H.x(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c4()
this.b=u}this.de(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c4()
this.c=t}this.de(t,b,c)}else{s=this.d
if(s==null){s=this.c4()
this.d=s}r=J.bG(b)&0x3ffffff
q=this.bV(s,r)
if(q==null)this.cd(s,r,[this.c5(b,c)])
else{p=this.cE(q,b)
if(p>=0)q[p].b=c
else q.push(this.c5(b,c))}}},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.i(P.c7(this))
u=u.c}},
de:function(a,b,c){var u
H.D(b,H.x(this,0))
H.D(c,H.x(this,1))
u=this.bk(a,b)
if(u==null)this.cd(a,b,this.c5(b,c))
else u.b=c},
c5:function(a,b){var u,t
u=new H.fP(H.D(a,H.x(this,0)),H.D(b,H.x(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cE:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1},
i:function(a){return P.kc(this)},
bk:function(a,b){return a[b]},
bV:function(a,b){return a[b]},
cd:function(a,b,c){a[b]=c},
fK:function(a,b){delete a[b]},
dm:function(a,b){return this.bk(a,b)!=null},
c4:function(){var u=Object.create(null)
this.cd(u,"<non-identifier-key>",u)
this.fK(u,"<non-identifier-key>")
return u}}
H.fP.prototype={}
H.dp.prototype={
gk:function(a){return this.a.a},
gW:function(a){var u,t
u=this.a
t=new H.fQ(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fQ.prototype={
gL:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.c7(u))
else{u=this.c
if(u==null){this.sdd(null)
return!1}else{this.sdd(u.a)
this.c=this.c.c
return!0}}},
sdd:function(a){this.d=H.D(a,H.x(this,0))},
$iaX:1}
H.jf.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jg.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.jh.prototype={
$1:function(a){return this.a(H.V(a))},
$S:29}
H.fK.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikf:1}
H.cn.prototype={}
H.dx.prototype={
gk:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.cm.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]},
$abL:function(){return[P.w]},
$av:function(){return[P.w]},
$ie:1,
$ae:function(){return[P.w]},
$ib:1,
$ab:function(){return[P.w]}}
H.dy.prototype={
$abL:function(){return[P.A]},
$av:function(){return[P.A]},
$ie:1,
$ae:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.h9.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.ha.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.hb.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.hc.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.hd.prototype={
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.dz.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.he.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.cH.prototype={}
H.cI.prototype={}
H.cJ.prototype={}
H.cK.prototype={}
P.iy.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:14}
P.ix.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.iz.prototype={
$0:function(){this.a.$0()},
$S:3}
P.iA.prototype={
$0:function(){this.a.$0()},
$S:3}
P.j2.prototype={
fs:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cU(new P.j3(this,b),0),a)
else throw H.i(P.aA("`setTimeout()` not found."))}}
P.j3.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:4}
P.ba.prototype={
jB:function(a){if(this.c!==6)return!0
return this.b.b.cO(H.l(this.d,{func:1,ret:P.a6,args:[P.T]}),a.a,P.a6,P.T)},
jv:function(a){var u,t,s,r
u=this.e
t=P.T
s={futureOr:1,type:H.x(this,1)}
r=this.b.b
if(H.eS(u,{func:1,args:[P.T,P.at]}))return H.jU(r.jZ(u,a.a,a.b,null,t,P.at),s)
else return H.jU(r.cO(H.l(u,{func:1,args:[P.T]}),a.a,null,t),s)}}
P.aC.prototype={
eP:function(a,b,c){var u,t,s,r
u=H.x(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a2
if(t!==C.l){t.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.m9(b,t)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aC(0,$.a2,[c])
r=b==null?1:3
this.df(new P.ba(s,r,a,b,[u,c]))
return s},
k5:function(a,b){return this.eP(a,null,b)},
df:function(a){var u,t
u=this.a
if(u<=1){a.a=H.j(this.c,"$iba")
this.c=a}else{if(u===2){t=H.j(this.c,"$iaC")
u=t.a
if(u<4){t.df(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.ja(null,null,u,H.l(new P.iH(this,a),{func:1,ret:-1}))}},
dF:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.j(this.c,"$iba")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.j(this.c,"$iaC")
t=p.a
if(t<4){p.dF(a)
return}this.a=t
this.c=p.c}u.a=this.bm(a)
t=this.b
t.toString
P.ja(null,null,t,H.l(new P.iL(u,this),{func:1,ret:-1}))}},
c8:function(){var u=H.j(this.c,"$iba")
this.c=null
return this.bm(u)},
bm:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
di:function(a){var u,t,s
u=H.x(this,0)
H.jU(a,{futureOr:1,type:u})
t=this.$ti
if(H.cT(a,"$icf",t,"$acf"))if(H.cT(a,"$iaC",t,null))P.kA(a,this)
else P.m2(a,this)
else{s=this.c8()
H.D(a,u)
this.a=4
this.c=a
P.cF(this,s)}},
dj:function(a,b){var u
H.j(b,"$iat")
u=this.c8()
this.a=8
this.c=new P.am(a,b)
P.cF(this,u)},
$icf:1}
P.iH.prototype={
$0:function(){P.cF(this.a,this.b)},
$S:3}
P.iL.prototype={
$0:function(){P.cF(this.b,this.a.a)},
$S:3}
P.iI.prototype={
$1:function(a){var u=this.a
u.a=0
u.di(a)},
$S:14}
P.iJ.prototype={
$2:function(a,b){H.j(b,"$iat")
this.a.dj(a,b)},
$1:function(a){return this.$2(a,null)},
$S:42}
P.iK.prototype={
$0:function(){this.a.dj(this.b,this.c)},
$S:3}
P.iO.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eO(H.l(r.d,{func:1}),null)}catch(q){t=H.bE(q)
s=H.bY(q)
if(this.d){r=H.j(this.a.a.c,"$iam").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.j(this.a.a.c,"$iam")
else p.b=new P.am(t,s)
p.a=!0
return}if(!!J.a7(u).$icf){if(u instanceof P.aC&&u.a>=4){if(u.a===8){r=this.b
r.b=H.j(u.c,"$iam")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.k5(new P.iP(o),null)
r.a=!1}},
$S:4}
P.iP.prototype={
$1:function(a){return this.a},
$S:34}
P.iN.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.x(s,0)
q=H.D(this.c,r)
p=H.x(s,1)
this.a.b=s.b.b.cO(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bE(o)
t=H.bY(o)
s=this.a
s.b=new P.am(u,t)
s.a=!0}},
$S:4}
P.iM.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.j(this.a.a.c,"$iam")
r=this.c
if(r.jB(u)&&r.e!=null){q=this.b
q.b=r.jv(u)
q.a=!1}}catch(p){t=H.bE(p)
s=H.bY(p)
r=H.j(this.a.a.c,"$iam")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:4}
P.e2.prototype={}
P.hL.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.aC(0,$.a2,[P.A])
u.a=0
s=H.x(this,0)
r=H.l(new P.hN(u,this),{func:1,ret:-1,args:[s]})
H.l(new P.hO(u,t),{func:1,ret:-1})
W.ad(this.a,this.b,r,!1,s)
return t}}
P.hN.prototype={
$1:function(a){H.D(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.x(this.b,0)]}}}
P.hO.prototype={
$0:function(){this.b.di(this.a.a)},
$S:3}
P.ct.prototype={}
P.hM.prototype={}
P.am.prototype={
i:function(a){return H.n(this.a)},
$ibp:1}
P.j5.prototype={$in7:1}
P.j9.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dA()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.i(u)
s=H.i(u)
s.stack=t.i(0)
throw s},
$S:3}
P.iW.prototype={
k_:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
try{if(C.l===$.a2){a.$0()
return}P.kG(null,null,this,a,-1)}catch(s){u=H.bE(s)
t=H.bY(s)
P.j8(null,null,this,u,H.j(t,"$iat"))}},
k0:function(a,b,c){var u,t,s
H.l(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.l===$.a2){a.$1(b)
return}P.kH(null,null,this,a,b,-1,c)}catch(s){u=H.bE(s)
t=H.bY(s)
P.j8(null,null,this,u,H.j(t,"$iat"))}},
j4:function(a,b){return new P.iY(this,H.l(a,{func:1,ret:b}),b)},
cn:function(a){return new P.iX(this,H.l(a,{func:1,ret:-1}))},
j6:function(a,b){return new P.iZ(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eO:function(a,b){H.l(a,{func:1,ret:b})
if($.a2===C.l)return a.$0()
return P.kG(null,null,this,a,b)},
cO:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.a2===C.l)return a.$1(b)
return P.kH(null,null,this,a,b,c,d)},
jZ:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.a2===C.l)return a.$2(b,c)
return P.ma(null,null,this,a,b,c,d,e,f)}}
P.iY.prototype={
$0:function(){return this.a.eO(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iX.prototype={
$0:function(){return this.a.k_(this.b)},
$S:4}
P.iZ.prototype={
$1:function(a){var u=this.c
return this.a.k0(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iT.prototype={
gW:function(a){return P.kC(this,this.r,H.x(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u
H.D(b,H.x(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.kD()
this.c=u}return this.fG(u,b)}else return this.fu(0,b)},
fu:function(a,b){var u,t,s
H.D(b,H.x(this,0))
u=this.d
if(u==null){u=P.kD()
this.d=u}t=this.dk(b)
s=u[t]
if(s==null)u[t]=[this.bR(b)]
else{if(this.ds(s,b)>=0)return!1
s.push(this.bR(b))}return!0},
w:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.i0(this.c,b)
else return this.i_(0,b)},
i_:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.fT(u,b)
s=this.ds(t,b)
if(s<0)return!1
this.dM(t.splice(s,1)[0])
return!0},
fG:function(a,b){H.D(b,H.x(this,0))
if(H.j(a[b],"$icG")!=null)return!1
a[b]=this.bR(b)
return!0},
i0:function(a,b){var u
if(a==null)return!1
u=H.j(a[b],"$icG")
if(u==null)return!1
this.dM(u)
delete a[b]
return!0},
dv:function(){this.r=1073741823&this.r+1},
bR:function(a){var u,t
u=new P.cG(H.D(a,H.x(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dv()
return u},
dM:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dv()},
dk:function(a){return J.bG(a)&1073741823},
fT:function(a,b){return a[this.dk(b)]},
ds:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cG.prototype={}
P.iU.prototype={
gL:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.c7(u))
else{u=this.c
if(u==null){this.sdh(null)
return!1}else{this.sdh(H.D(u.a,H.x(this,0)))
this.c=this.c.b
return!0}}},
sdh:function(a){this.d=H.D(a,H.x(this,0))},
$iaX:1}
P.fR.prototype={$ie:1,$ib:1}
P.v.prototype={
gW:function(a){return new H.dq(a,this.gk(a),0,[H.cV(this,a,"v",0)])},
G:function(a,b){return this.j(a,b)},
k6:function(a,b){var u,t
u=H.c([],[H.cV(this,a,"v",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.a2(u,t,this.j(a,t))
return u},
cR:function(a){return this.k6(a,!0)},
i:function(a){return P.jC(a,"[","]")}}
P.fU.prototype={}
P.fV.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.n(a)
u.a=t+": "
u.a+=H.n(b)},
$S:21}
P.ag.prototype={
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.cV(this,a,"ag",0),H.cV(this,a,"ag",1)]})
for(u=J.c1(this.gaE(a));u.B();){t=u.gL(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.c2(this.gaE(a))},
i:function(a){return P.kc(a)},
$iO:1}
P.j_.prototype={
i:function(a){return P.jC(this,"{","}")},
G:function(a,b){var u,t,s
if(b<0)H.q(P.aH(b,0,null,"index",null))
for(u=P.kC(this,this.r,H.x(this,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.i(P.X(b,this,"index",null,t))},
$ie:1,
$iko:1}
P.eh.prototype={}
P.c6.prototype={}
P.d7.prototype={}
P.fk.prototype={
$ac6:function(){return[P.o,[P.b,P.A]]}}
P.ig.prototype={}
P.ih.prototype={
jf:function(a,b,c){var u,t,s
c=P.kl(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.j4(t)
if(s.fS(a,b,c)!==c)s.dO(C.j.cq(a,c-1),0)
return new Uint8Array(t.subarray(0,H.m5(0,s.b,t.length)))},
je:function(a){return this.jf(a,0,null)},
$ad7:function(){return[P.o,[P.b,P.A]]}}
P.j4.prototype={
dO:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.h(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.h(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.h(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.h(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.h(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.h(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.h(u,t)
u[t]=128|a&63
return!1}},
fS:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.cq(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.bj(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dO(r,C.j.bj(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.h(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.h(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.h(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.h(u,q)
u[q]=128|r&63}}return s}}
P.a6.prototype={}
P.au.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.au&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.h.bn(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lr(H.lO(this))
t=P.d8(H.lM(this))
s=P.d8(H.lI(this))
r=P.d8(H.lJ(this))
q=P.d8(H.lL(this))
p=P.d8(H.lN(this))
o=P.ls(H.lK(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.w.prototype={}
P.bK.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.bK&&this.a===b.a},
gI:function(a){return C.h.gI(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fi()
t=this.a
if(t<0)return"-"+new P.bK(0-t).i(0)
s=u.$1(C.h.aa(t,6e7)%60)
r=u.$1(C.h.aa(t,1e6)%60)
q=new P.fh().$1(t%1e6)
return""+C.h.aa(t,36e8)+":"+H.n(s)+":"+H.n(r)+"."+H.n(q)}}
P.fh.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:13}
P.fi.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:13}
P.bp.prototype={}
P.dA.prototype={
i:function(a){return"Throw of null."}}
P.bb.prototype={
gbT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbS:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbT()+t+s
if(!this.a)return r
q=this.gbS()
p=P.fm(this.b)
return r+q+": "+p}}
P.bS.prototype={
gbT:function(){return"RangeError"},
gbS:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.n(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.n(u)
else if(s>u)t=": Not in range "+H.n(u)+".."+H.n(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.n(u)}return t}}
P.fA.prototype={
gbT:function(){return"RangeError"},
gbS:function(){var u,t
u=H.ae(this.b)
if(typeof u!=="number")return u.aW()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.n(t)},
gk:function(a){return this.f}}
P.id.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ib.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hH.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f7.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fm(u)+"."}}
P.hi.prototype={
i:function(a){return"Out of Memory"},
$ibp:1}
P.dI.prototype={
i:function(a){return"Stack Overflow"},
$ibp:1}
P.fc.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ea.prototype={
i:function(a){return"Exception: "+this.a}}
P.fw.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.d1(s,0,75)+"...":s
return t+"\n"+r}}
P.A.prototype={}
P.e.prototype={
gk:function(a){var u,t
u=this.gW(this)
for(t=0;u.B();)++t
return t},
G:function(a,b){var u,t,s
if(b<0)H.q(P.aH(b,0,null,"index",null))
for(u=this.gW(this),t=0;u.B();){s=u.gL(u)
if(b===t)return s;++t}throw H.i(P.X(b,this,"index",null,t))},
i:function(a){return P.ly(this,"(",")")}}
P.aX.prototype={}
P.b.prototype={$ie:1}
P.O.prototype={}
P.H.prototype={
gI:function(a){return P.T.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a4.prototype={}
P.T.prototype={constructor:P.T,$iT:1,
u:function(a,b){return this===b},
gI:function(a){return H.cq(this)},
i:function(a){return"Instance of '"+H.bR(this)+"'"},
toString:function(){return this.i(this)}}
P.at.prototype={}
P.o.prototype={$ikf:1}
P.bv.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.eU.prototype={
gk:function(a){return a.length}}
W.eW.prototype={
i:function(a){return String(a)}}
W.eX.prototype={
i:function(a){return String(a)}}
W.cZ.prototype={}
W.d_.prototype={}
W.bI.prototype={
eZ:function(a,b,c){var u=this.fU(a,b,P.mg(c,null))
return u},
fU:function(a,b,c){return a.getContext(b,c)},
$ibI:1}
W.bo.prototype={
gk:function(a){return a.length}}
W.c8.prototype={$ic8:1}
W.f8.prototype={
gk:function(a){return a.length}}
W.U.prototype={$iU:1}
W.c9.prototype={
gk:function(a){return a.length}}
W.f9.prototype={}
W.aS.prototype={}
W.aT.prototype={}
W.fa.prototype={
gk:function(a){return a.length}}
W.fb.prototype={
gk:function(a){return a.length}}
W.fd.prototype={
gk:function(a){return a.length}}
W.ca.prototype={$ica:1}
W.cb.prototype={
f_:function(a,b){return a.getElementById(b)}}
W.fe.prototype={
i:function(a){return String(a)}}
W.da.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.ac,P.a4]]},
$av:function(){return[[P.ac,P.a4]]},
$ie:1,
$ae:function(){return[[P.ac,P.a4]]},
$ib:1,
$ab:function(){return[[P.ac,P.a4]]},
$ay:function(){return[[P.ac,P.a4]]}}
W.db.prototype={
i:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(this.gaI(a))+" x "+H.n(this.gaD(a))},
u:function(a,b){var u
if(b==null)return!1
if(!H.cT(b,"$iac",[P.a4],"$aac"))return!1
u=J.eT(b)
return a.left===u.gbI(b)&&a.top===u.gbL(b)&&this.gaI(a)===u.gaI(b)&&this.gaD(a)===u.gaD(b)},
gI:function(a){return W.kB(C.i.gI(a.left),C.i.gI(a.top),C.i.gI(this.gaI(a)),C.i.gI(this.gaD(a)))},
gdU:function(a){return a.bottom},
gaD:function(a){return a.height},
gbI:function(a){return a.left},
gbJ:function(a){return a.right},
gbL:function(a){return a.top},
gaI:function(a){return a.width},
$iac:1,
$aac:function(){return[P.a4]}}
W.ff.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.o]},
$av:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ay:function(){return[P.o]}}
W.fg.prototype={
gk:function(a){return a.length}}
W.iC.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.j(u[b],"$ia9")},
h:function(a,b){J.k2(this.a,b)
return b},
gW:function(a){var u=this.cR(this)
return new J.al(u,u.length,0,[H.x(u,0)])},
$av:function(){return[W.a9]},
$ae:function(){return[W.a9]},
$ab:function(){return[W.a9]}}
W.a9.prototype={
gdX:function(a){return new W.iC(a,a.children)},
gdY:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aW()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aW()
if(r<0)r=-r*0
return new P.ac(u,t,s,r,[P.a4])},
i:function(a){return a.localName},
$ia9:1}
W.m.prototype={$im:1}
W.d.prototype={
iY:function(a,b,c,d){H.l(c,{func:1,args:[W.m]})
if(c!=null)this.fv(a,b,c,!1)},
fv:function(a,b,c,d){return a.addEventListener(b,H.cU(H.l(c,{func:1,args:[W.m]}),1),!1)},
$id:1}
W.aU.prototype={$iaU:1}
W.fq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aU]},
$av:function(){return[W.aU]},
$ie:1,
$ae:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$ay:function(){return[W.aU]}}
W.fr.prototype={
gk:function(a){return a.length}}
W.fv.prototype={
gk:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.fz.prototype={
gk:function(a){return a.length}}
W.bM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.L]},
$av:function(){return[W.L]},
$ie:1,
$ae:function(){return[W.L]},
$ib:1,
$ab:function(){return[W.L]},
$ibM:1,
$ay:function(){return[W.L]}}
W.df.prototype={}
W.aZ.prototype={$iaZ:1}
W.fS.prototype={
i:function(a){return String(a)}}
W.h2.prototype={
gk:function(a){return a.length}}
W.h3.prototype={
j:function(a,b){return P.bj(a.get(H.V(b)))},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gaE:function(a){var u=H.c([],[P.o])
this.H(a,new W.h4(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
W.h4.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.h5.prototype={
j:function(a,b){return P.bj(a.get(H.V(b)))},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gaE:function(a){var u=H.c([],[P.o])
this.H(a,new W.h6(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
W.h6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.b1.prototype={$ib1:1}
W.h7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b1]},
$av:function(){return[W.b1]},
$ie:1,
$ae:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$ay:function(){return[W.b1]}}
W.ab.prototype={$iab:1}
W.iB.prototype={
gW:function(a){var u=this.a.childNodes
return new W.dd(u,u.length,-1,[H.cV(C.K,u,"y",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$av:function(){return[W.L]},
$ae:function(){return[W.L]},
$ab:function(){return[W.L]}}
W.L.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.f8(a):u},
a_:function(a,b){return a.appendChild(b)},
$iL:1}
W.co.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.L]},
$av:function(){return[W.L]},
$ie:1,
$ae:function(){return[W.L]},
$ib:1,
$ab:function(){return[W.L]},
$ay:function(){return[W.L]}}
W.b2.prototype={$ib2:1,
gk:function(a){return a.length}}
W.hk.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b2]},
$av:function(){return[W.b2]},
$ie:1,
$ae:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$ay:function(){return[W.b2]}}
W.hs.prototype={
j:function(a,b){return P.bj(a.get(H.V(b)))},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gaE:function(a){var u=H.c([],[P.o])
this.H(a,new W.ht(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
W.ht.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hv.prototype={
gk:function(a){return a.length}}
W.b3.prototype={$ib3:1}
W.hE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b3]},
$av:function(){return[W.b3]},
$ie:1,
$ae:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$ay:function(){return[W.b3]}}
W.b4.prototype={$ib4:1}
W.hF.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b4]},
$av:function(){return[W.b4]},
$ie:1,
$ae:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$ay:function(){return[W.b4]}}
W.b5.prototype={$ib5:1,
gk:function(a){return a.length}}
W.hJ.prototype={
j:function(a,b){return this.dt(a,H.V(b))},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,P.o]})
for(u=0;!0;++u){t=this.fX(a,u)
if(t==null)return
b.$2(t,this.dt(a,t))}},
gaE:function(a){var u=H.c([],[P.o])
this.H(a,new W.hK(u))
return u},
gk:function(a){return a.length},
dt:function(a,b){return a.getItem(b)},
fX:function(a,b){return a.key(b)},
$aag:function(){return[P.o,P.o]},
$iO:1,
$aO:function(){return[P.o,P.o]}}
W.hK.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:24}
W.aJ.prototype={$iaJ:1}
W.b6.prototype={$ib6:1}
W.aK.prototype={$iaK:1}
W.hR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aK]},
$av:function(){return[W.aK]},
$ie:1,
$ae:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$ay:function(){return[W.aK]}}
W.hS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b6]},
$av:function(){return[W.b6]},
$ie:1,
$ae:function(){return[W.b6]},
$ib:1,
$ab:function(){return[W.b6]},
$ay:function(){return[W.b6]}}
W.hV.prototype={
gk:function(a){return a.length}}
W.b7.prototype={$ib7:1}
W.aL.prototype={$iaL:1}
W.hY.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b7]},
$av:function(){return[W.b7]},
$ie:1,
$ae:function(){return[W.b7]},
$ib:1,
$ab:function(){return[W.b7]},
$ay:function(){return[W.b7]}}
W.hZ.prototype={
gk:function(a){return a.length}}
W.bx.prototype={}
W.ie.prototype={
i:function(a){return String(a)}}
W.iu.prototype={
gk:function(a){return a.length}}
W.b9.prototype={
gjl:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.aA("deltaY is not supported"))},
gjk:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.aA("deltaX is not supported"))},
$ib9:1}
W.cE.prototype={
i4:function(a,b){return a.requestAnimationFrame(H.cU(H.l(b,{func:1,ret:-1,args:[P.a4]}),1))},
fM:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.U]},
$av:function(){return[W.U]},
$ie:1,
$ae:function(){return[W.U]},
$ib:1,
$ab:function(){return[W.U]},
$ay:function(){return[W.U]}}
W.e5.prototype={
i:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(a.width)+" x "+H.n(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.cT(b,"$iac",[P.a4],"$aac"))return!1
u=J.eT(b)
return a.left===u.gbI(b)&&a.top===u.gbL(b)&&a.width===u.gaI(b)&&a.height===u.gaD(b)},
gI:function(a){return W.kB(C.i.gI(a.left),C.i.gI(a.top),C.i.gI(a.width),C.i.gI(a.height))},
gaD:function(a){return a.height},
gaI:function(a){return a.width}}
W.iQ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aV]},
$av:function(){return[W.aV]},
$ie:1,
$ae:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$ay:function(){return[W.aV]}}
W.em.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.L]},
$av:function(){return[W.L]},
$ie:1,
$ae:function(){return[W.L]},
$ib:1,
$ab:function(){return[W.L]},
$ay:function(){return[W.L]}}
W.j0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b5]},
$av:function(){return[W.b5]},
$ie:1,
$ae:function(){return[W.b5]},
$ib:1,
$ab:function(){return[W.b5]},
$ay:function(){return[W.b5]}}
W.j1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aJ]},
$av:function(){return[W.aJ]},
$ie:1,
$ae:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$ay:function(){return[W.aJ]}}
W.iE.prototype={}
W.jN.prototype={}
W.iF.prototype={}
W.iG.prototype={
$1:function(a){return this.a.$1(H.j(a,"$im"))},
$S:25}
W.y.prototype={
gW:function(a){return new W.dd(a,this.gk(a),-1,[H.cV(this,a,"y",0)])}}
W.dd.prototype={
B:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdu(J.li(this.a,u))
this.c=u
return!0}this.sdu(null)
this.c=t
return!1},
gL:function(a){return this.d},
sdu:function(a){this.d=H.D(a,H.x(this,0))},
$iaX:1}
W.e4.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.cL.prototype={}
W.cM.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ez.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
P.jb.prototype={
$2:function(a,b){this.a[a]=b},
$S:21}
P.fs.prototype={
gbW:function(){var u,t,s
u=this.b
t=H.aE(u,"v",0)
s=W.a9
return new H.fW(new H.iv(u,H.l(new P.ft(),{func:1,ret:P.a6,args:[t]}),[t]),H.l(new P.fu(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.k2(this.b.a,b)},
gk:function(a){return J.c2(this.gbW().a)},
j:function(a,b){var u=this.gbW()
return u.b.$1(J.k3(u.a,b))},
gW:function(a){var u=P.kb(this.gbW(),!1,W.a9)
return new J.al(u,u.length,0,[H.x(u,0)])},
$av:function(){return[W.a9]},
$ae:function(){return[W.a9]},
$ab:function(){return[W.a9]}}
P.ft.prototype={
$1:function(a){return!!J.a7(H.j(a,"$iL")).$ia9},
$S:31}
P.fu.prototype={
$1:function(a){return H.f(H.j(a,"$iL"),"$ia9")},
$S:26}
P.iV.prototype={
gbJ:function(a){var u=this.a
if(typeof u!=="number")return u.C()
return H.D(u+this.c,H.x(this,0))},
gdU:function(a){var u=this.b
if(typeof u!=="number")return u.C()
return H.D(u+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.n(this.a)+", "+H.n(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cT(b,"$iac",[P.a4],"$aac")){u=this.a
t=J.eT(b)
if(u==t.gbI(b)){s=this.b
if(s==t.gbL(b)){if(typeof u!=="number")return u.C()
r=H.x(this,0)
if(H.D(u+this.c,r)===t.gbJ(b)){if(typeof s!=="number")return s.C()
u=H.D(s+this.d,r)===t.gdU(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t,s,r,q
u=this.a
t=J.bG(u)
s=this.b
r=J.bG(s)
if(typeof u!=="number")return u.C()
q=H.x(this,0)
u=C.h.gI(H.D(u+this.c,q))
if(typeof s!=="number")return s.C()
q=C.h.gI(H.D(s+this.d,q))
return P.m3(P.iS(P.iS(P.iS(P.iS(0,t),r),u),q))}}
P.ac.prototype={
gbI:function(a){return this.a},
gbL:function(a){return this.b},
gaI:function(a){return this.c},
gaD:function(a){return this.d}}
P.bc.prototype={$ibc:1}
P.fN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return this.au(a,b)},
G:function(a,b){return this.j(a,b)},
au:function(a,b){return a.getItem(b)},
$av:function(){return[P.bc]},
$ie:1,
$ae:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$ay:function(){return[P.bc]}}
P.bg.prototype={$ibg:1}
P.hg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return this.au(a,b)},
G:function(a,b){return this.j(a,b)},
au:function(a,b){return a.getItem(b)},
$av:function(){return[P.bg]},
$ie:1,
$ae:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$ay:function(){return[P.bg]}}
P.hm.prototype={
gk:function(a){return a.length}}
P.hP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return this.au(a,b)},
G:function(a,b){return this.j(a,b)},
au:function(a,b){return a.getItem(b)},
$av:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ay:function(){return[P.o]}}
P.r.prototype={
gdX:function(a){return new P.fs(a,new W.iB(a))}}
P.bh.prototype={$ibh:1}
P.i_.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return this.au(a,b)},
G:function(a,b){return this.j(a,b)},
au:function(a,b){return a.getItem(b)},
$av:function(){return[P.bh]},
$ie:1,
$ae:function(){return[P.bh]},
$ib:1,
$ab:function(){return[P.bh]},
$ay:function(){return[P.bh]}}
P.ef.prototype={}
P.eg.prototype={}
P.ep.prototype={}
P.eq.prototype={}
P.eA.prototype={}
P.eB.prototype={}
P.eG.prototype={}
P.eH.prototype={}
P.eZ.prototype={
gk:function(a){return a.length}}
P.f_.prototype={
j:function(a,b){return P.bj(a.get(H.V(b)))},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gaE:function(a){var u=H.c([],[P.o])
this.H(a,new P.f0(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
P.f0.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.f1.prototype={
gk:function(a){return a.length}}
P.bH.prototype={}
P.hh.prototype={
gk:function(a){return a.length}}
P.e3.prototype={}
P.d0.prototype={$id0:1}
P.de.prototype={$ide:1}
P.dD.prototype={$idD:1}
P.bT.prototype={
dT:function(a,b,c){return a.attachShader(b,c)},
ap:function(a,b,c){return a.bindBuffer(b,c)},
j5:function(a,b,c){return a.bindFramebuffer(b,c)},
aB:function(a,b,c){return a.blendFunc(b,c)},
dV:function(a,b,c,d){return a.bufferData(b,c,d)},
j9:function(a,b){return a.clear(b)},
ja:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jb:function(a,b){return a.clearDepth(b)},
jd:function(a,b){return a.compileShader(b)},
jg:function(a,b){return a.createShader(b)},
ji:function(a,b){return a.deleteProgram(b)},
jj:function(a,b){return a.deleteShader(b)},
jm:function(a,b){return a.depthFunc(b)},
cv:function(a,b){return a.disable(b)},
e1:function(a,b){return a.disableVertexAttribArray(b)},
jn:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ar:function(a,b){return a.enable(b)},
e5:function(a,b){return a.enableVertexAttribArray(b)},
eW:function(a,b,c){return a.getActiveAttrib(b,c)},
eX:function(a,b,c){return a.getActiveUniform(b,c)},
eY:function(a,b,c){return a.getAttribLocation(b,c)},
cV:function(a,b){return a.getParameter(b)},
f0:function(a,b){return a.getProgramInfoLog(b)},
bN:function(a,b,c){return a.getProgramParameter(b,c)},
f1:function(a,b){return a.getShaderInfoLog(b)},
f2:function(a,b,c){return a.getShaderParameter(b,c)},
f3:function(a,b,c){return a.getUniformLocation(b,c)},
jz:function(a,b){return a.linkProgram(b)},
f6:function(a,b,c){return a.shaderSource(b,c)},
K:function(a,b,c){return a.uniform1f(b,c)},
S:function(a,b,c){return a.uniform1i(b,c)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
k9:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eR:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eS:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cT:function(a,b){return a.useProgram(b)},
ka:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kb:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibT:1}
P.dG.prototype={$idG:1}
P.dS.prototype={$idS:1}
P.hG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.X(b,a,null,null,null))
return P.bj(this.fW(a,b))},
G:function(a,b){return this.j(a,b)},
fW:function(a,b){return a.item(b)},
$av:function(){return[[P.O,,,]]},
$ie:1,
$ae:function(){return[[P.O,,,]]},
$ib:1,
$ab:function(){return[[P.O,,,]]},
$ay:function(){return[[P.O,,,]]}}
P.ew.prototype={}
P.ex.prototype={}
O.a0.prototype={
bh:function(a){this.sh0(H.c([],[a]))
this.sdD(null)
this.sdz(null)
this.sdE(null)},
cX:function(a,b,c){var u=H.aE(this,"a0",0)
H.l(b,{func:1,ret:P.a6,args:[[P.e,u]]})
u={func:1,ret:-1,args:[P.A,[P.e,u]]}
H.l(a,u)
H.l(c,u)
this.sdD(b)
this.sdz(a)
this.sdE(c)},
aX:function(a,b){return this.cX(a,null,b)},
dC:function(a){var u
H.k(a,"$ie",[H.aE(this,"a0",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dw:function(a,b){var u
H.k(b,"$ie",[H.aE(this,"a0",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gW:function(a){var u=this.a
return new J.al(u,u.length,0,[H.x(u,0)])},
G:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.aE(this,"a0",0)
H.D(b,u)
u=[u]
if(this.dC(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dw(s,H.c([b],u))}},
cg:function(a,b){var u,t
H.k(b,"$ie",[H.aE(this,"a0",0)],"$ae")
if(this.dC(b)){u=this.a
t=u.length
C.a.cg(u,b)
this.dw(t,b)}},
sh0:function(a){this.a=H.k(a,"$ib",[H.aE(this,"a0",0)],"$ab")},
sdD:function(a){this.b=H.l(a,{func:1,ret:P.a6,args:[[P.e,H.aE(this,"a0",0)]]})},
sdz:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.A,[P.e,H.aE(this,"a0",0)]]})},
sdE:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.A,[P.e,H.aE(this,"a0",0)]]})},
$ie:1}
O.ci.prototype={
gk:function(a){return this.a.length},
gq:function(){var u=this.b
if(u==null){u=D.S()
this.b=u}return u},
ff:function(a){var u=this.b
if(u!=null)u.E(a)},
aJ:function(){return this.ff(null)},
gJ:function(a){var u=this.a
if(u.length>0)return C.a.gcF(u)
else return V.ck()},
eJ:function(a){var u=this.a
if(a==null)C.a.h(u,V.ck())
else C.a.h(u,a)
this.aJ()},
cL:function(){var u=this.a
if(u.length>0){u.pop()
this.aJ()}},
sbX:function(a){this.a=H.k(a,"$ib",[V.ah],"$ab")}}
E.f2.prototype={}
E.an.prototype={
dg:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.al(u,u.length,0,[H.x(u,0)]);u.B();){t=u.d
if(t.f==null)t.dg()}},
sa3:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gq().w(0,this.geD())
t=this.c
if(t!=null)t.gq().h(0,this.geD())
s=new D.G("shape",u,this.c,this,[F.ap])
s.b=!0
this.ab(s)}},
sa7:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gq().w(0,this.geF())
t=this.f
this.f=a
if(a!=null)a.gq().h(0,this.geF())
this.dg()
s=new D.G("technique",t,this.f,this,[O.bw])
s.b=!0
this.ab(s)}},
sX:function(a){var u,t
if(!J.E(this.r,a)){u=this.r
if(u!=null)u.gq().w(0,this.geB())
if(a!=null)a.gq().h(0,this.geB())
this.r=a
t=new D.G("mover",u,a,this,[U.aa])
t.b=!0
this.ab(t)}},
ac:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.aV(0,b,this):null
if(!J.E(t,this.x)){s=this.x
this.x=t
r=new D.G("matrix",s,t,this,[V.ah])
r.b=!0
this.ab(r)}u=this.f
if(u!=null)u.ac(0,b)
for(u=this.y.a,u=new J.al(u,u.length,0,[H.x(u,0)]);u.B();)u.d.ac(0,b)},
ak:function(a){var u,t,s
if(!this.b)return
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gJ(u))
else C.a.h(u.a,t.n(0,u.gJ(u)))
u.aJ()
a.eK(this.f)
u=a.dy
s=(u&&C.a).gcF(u)
if(s!=null&&this.d!=null)s.eM(a,this)
for(u=this.y.a,u=new J.al(u,u.length,0,[H.x(u,0)]);u.B();)u.d.ak(a)
a.eH()
a.dx.cL()},
gq:function(){var u=this.z
if(u==null){u=D.S()
this.z=u}return u},
ab:function(a){var u=this.z
if(u!=null)u.E(a)},
P:function(){return this.ab(null)},
eE:function(a){H.j(a,"$iu")
this.e=null
this.ab(a)},
jJ:function(){return this.eE(null)},
eG:function(a){this.ab(H.j(a,"$iu"))},
jK:function(){return this.eG(null)},
eC:function(a){this.ab(H.j(a,"$iu"))},
jI:function(){return this.eC(null)},
eA:function(a){this.ab(H.j(a,"$iu"))},
jF:function(){return this.eA(null)},
jE:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ie",[E.an],"$ae")
for(u=b.length,t=this.gez(),s={func:1,ret:-1,args:[D.u]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cd()
o.san(null)
o.sbl(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.san(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.P()},
jH:function(a,b){var u,t
H.k(b,"$ie",[E.an],"$ae")
for(u=b.gW(b),t=this.gez();u.B();)u.gL(u).gq().w(0,t)
this.P()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfg:function(a,b){this.y=H.k(b,"$ia0",[E.an],"$aa0")},
$ibe:1}
E.ho.prototype={
fc:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.au(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.ci()
t=[V.ah]
u.sbX(H.c([],t))
u.b=null
u.gq().h(0,new E.hp(this))
this.cy=u
u=new O.ci()
u.sbX(H.c([],t))
u.b=null
u.gq().h(0,new E.hq(this))
this.db=u
u=new O.ci()
u.sbX(H.c([],t))
u.b=null
u.gq().h(0,new E.hr(this))
this.dx=u
this.sil(H.c([],[O.bw]))
u=this.dy;(u&&C.a).h(u,null)
this.sic(new H.aF([P.o,A.cr]))},
gjU:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.gJ(u)
t=this.db
t=u.n(0,t.gJ(t))
this.z=t
u=t}return u},
geI:function(){var u,t
u=this.ch
if(u==null){u=this.gjU()
t=this.dx
t=u.n(0,t.gJ(t))
this.ch=t
u=t}return u},
geT:function(){var u,t
u=this.cx
if(u==null){u=this.db
u=u.gJ(u)
t=this.dx
t=u.n(0,t.gJ(t))
this.cx=t
u=t}return u},
eK:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gcF(u):a;(u&&C.a).h(u,t)},
eH:function(){var u=this.dy
if(u.length>1)u.pop()},
dR:function(a){var u=a.b
if(u.length===0)throw H.i(P.p("May not cache a shader with no name."))
if(this.fr.dZ(0,u))throw H.i(P.p('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a2(0,u,a)},
sil:function(a){this.dy=H.k(a,"$ib",[O.bw],"$ab")},
sic:function(a){this.fr=H.k(a,"$iO",[P.o,A.cr],"$aO")}}
E.hp.prototype={
$1:function(a){var u
H.j(a,"$iu")
u=this.a
u.z=null
u.ch=null},
$S:1}
E.hq.prototype={
$1:function(a){var u
H.j(a,"$iu")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:1}
E.hr.prototype={
$1:function(a){var u
H.j(a,"$iu")
u=this.a
u.ch=null
u.cx=null},
$S:1}
E.dO.prototype={
da:function(a){H.j(a,"$iu")
this.eN()},
d9:function(){return this.da(null)},
sbO:function(a){var u=this.d
if(u!==a){if(u!=null)u.gq().w(0,this.gd8())
this.d=a
a.gq().h(0,this.gd8())
this.d9()}},
dI:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.n()
if(typeof u!=="number")return H.C(u)
s=C.i.es(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.n()
r=C.i.es(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kr(C.o,this.gjX())}},
eN:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.hU(this),{func:1,ret:-1,args:[P.a4]})
C.y.fM(u)
C.y.i4(u,W.kK(t,P.a4))}},
jW:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dI()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.au(r,!1)
s.y=P.lt(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aJ()
r=s.db
C.a.sk(r.a,0)
r.aJ()
r=s.dx
C.a.sk(r.a,0)
r.aJ()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ak(this.e)}}catch(q){u=H.bE(q)
t=H.bY(q)
P.kY("Error: "+H.n(u))
P.kY("Stack: "+H.n(t))
throw H.i(u)}}}
E.hU.prototype={
$1:function(a){var u
H.mu(a)
u=this.a
if(u.ch){u.ch=!1
u.jW()}},
$S:30}
Z.e0.prototype={$imF:1}
Z.d1.prototype={
ao:function(a){var u,t,s
try{t=a.a
C.b.e5(t,this.e)
C.b.ka(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.bE(s)
t=P.p('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.n(u))
throw H.i(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.n(this.e)+"]"}}
Z.e1.prototype={$imG:1}
Z.bn.prototype={
ae:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ao:function(a){var u,t
u=this.a
C.b.ap(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].ao(a)},
cS:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.e1(s,u[t].e)
C.b.ap(s,this.a.a,null)},
ak:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ap(t,p,r.b)
C.b.jn(t,q.a,q.b,5123,0)
C.b.ap(t,p,null)}},
jL:function(a){this.ao(a)
this.ak(a)
this.cS(a)},
i:function(a){var u,t,s,r,q,p
u=[P.o]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aw(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(t,", ")+"\nAttrs:   "+C.a.D(p,", ")},
sfV:function(a){this.b=H.k(a,"$ib",[Z.bq],"$ab")},
$ilX:1}
Z.d2.prototype={
sh5:function(a){this.a=H.k(a,"$iO",[P.o,Z.bn],"$aO")},
$ilX:1}
Z.bq.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bR(this.c)+"'")+"]"}}
Z.aN.prototype={
gd_:function(a){var u,t
u=this.a
t=(u&$.aQ().a)!==0?3:0
if((u&$.aP().a)!==0)t+=3
if((u&$.aO().a)!==0)t+=3
if((u&$.bl().a)!==0)t+=2
if((u&$.bm().a)!==0)t+=3
if((u&$.bF().a)!==0)t+=3
if((u&$.cW().a)!==0)t+=4
if((u&$.c0().a)!==0)++t
return(u&$.bk().a)!==0?t+4:t},
j3:function(a){var u,t,s
u=$.aQ()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aP()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aO()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bm()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bF()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cW()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c0()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bk()
if((t&u.a)!==0)if(s===a)return u
return $.lg()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aN))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.o])
t=this.a
if((t&$.aQ().a)!==0)C.a.h(u,"Pos")
if((t&$.aP().a)!==0)C.a.h(u,"Norm")
if((t&$.aO().a)!==0)C.a.h(u,"Binm")
if((t&$.bl().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bm().a)!==0)C.a.h(u,"TxtCube")
if((t&$.bF().a)!==0)C.a.h(u,"Clr3")
if((t&$.cW().a)!==0)C.a.h(u,"Clr4")
if((t&$.c0().a)!==0)C.a.h(u,"Weight")
if((t&$.bk().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.D(u,"|")}}
D.f5.prototype={}
D.cd.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.u]}
H.l(b,u)
if(this.a==null)this.san(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
w:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[D.u]})
u=this.a
u=u==null?null:C.a.aS(u,b)
if(u===!0){u=this.a
t=(u&&C.a).w(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.aS(u,b)
if(u===!0){u=this.b
t=(u&&C.a).w(u,b)||t}return t},
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
if(a==null){a=new D.u(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.H(P.kb(t,!0,{func:1,ret:-1,args:[D.u]}),new D.fn(u))
t=this.b
if(t!=null){this.sbl(H.c([],[{func:1,ret:-1,args:[D.u]}]))
C.a.H(t,new D.fo(u))}return!0},
jY:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.E(t)}}},
at:function(a){return this.jY(a,!0,!1)},
san:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.u]}],"$ab")},
sbl:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.u]}],"$ab")}}
D.fn.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.u]})
u=this.a.a
if(u.b)a.$1(u)},
$S:16}
D.fo.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.u]})
u=this.a.a
if(u.b)a.$1(u)},
$S:16}
D.u.prototype={}
D.br.prototype={}
D.bs.prototype={}
D.G.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.n(this.d)+" => "+H.n(this.e)}}
X.d3.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d3))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.n(this.a)}}
X.dm.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dm))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.n(this.a)}}
X.fM.prototype={
jR:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jN:function(a){this.c=a.b
this.d.w(0,a.a)
return!1},
shZ:function(a){this.d=H.k(a,"$iko",[P.A],"$ako")}}
X.dr.prototype={}
X.fT.prototype={
aZ:function(a,b){var u,t,s,r,q,p,o,n
u=new P.au(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.n()
q=b.b
p=this.ch
if(typeof q!=="number")return q.n()
o=t.C(0,new V.W(s*r,q*p))
p=this.a.gaR()
n=new X.ay(a,V.aG(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cK:function(a,b){this.r=a.a
return!1},
bc:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.f5()
if(typeof u!=="number")return u.eV()
this.r=(u&~t)>>>0
return!1},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.aZ(a,b))
return!0},
jS:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaR()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.n()
o=a.b
n=this.cy
if(typeof o!=="number")return o.n()
r=new X.cl(new V.P(q*p,o*n),t,s,new P.au(r,!1),this)
r.b=!0
u.E(r)
return!0},
hx:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.au(Date.now(),!1)
t=this.f
s=new X.dr(c,a,this.a.gaR(),b,u,this)
s.b=!0
t.E(s)
this.y=u
this.x=V.aG()}}
X.av.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.av))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ay.prototype={}
X.h8.prototype={
bU:function(a,b,c){var u,t,s
u=new P.au(Date.now(),!1)
t=this.a.gaR()
s=new X.ay(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cK:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bU(a,b,!0))
return!0},
bc:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.f5()
if(typeof u!=="number")return u.eV()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.E(this.bU(a,b,!0))
return!0},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bU(a,b,!1))
return!0},
jT:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaR()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.n()
p=a.b
o=this.ch
if(typeof p!=="number")return p.n()
s=new X.cl(new V.P(r*q,p*o),t,b,new P.au(s,!1),this)
s.b=!0
u.E(s)
return!0},
gb6:function(){var u=this.b
if(u==null){u=D.S()
this.b=u}return u},
gaH:function(){var u=this.c
if(u==null){u=D.S()
this.c=u}return u},
gba:function(){var u=this.d
if(u==null){u=D.S()
this.d=u}return u}}
X.cl.prototype={}
X.hl.prototype={}
X.dQ.prototype={}
X.hX.prototype={
aZ:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.W],"$ab")
u=new P.au(Date.now(),!1)
t=a.length>0?a[0]:V.aG()
s=this.a.gaR()
r=new X.dQ(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jQ:function(a){var u
H.k(a,"$ib",[V.W],"$ab")
u=this.b
if(u==null)return!1
u.E(this.aZ(a,!0))
return!0},
jO:function(a){var u
H.k(a,"$ib",[V.W],"$ab")
u=this.c
if(u==null)return!1
u.E(this.aZ(a,!0))
return!0},
jP:function(a){var u
H.k(a,"$ib",[V.W],"$ab")
u=this.d
if(u==null)return!1
u.E(this.aZ(a,!1))
return!0}}
X.dW.prototype={
gaR:function(){var u=this.a
return V.km(0,0,C.n.gdY(u).c,C.n.gdY(u).d)},
dn:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dm(u,new X.av(t,a.altKey,a.shiftKey))},
aO:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.av(t,a.altKey,a.shiftKey)},
ce:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.av(t,a.altKey,a.shiftKey)},
aA:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.F()
q=u.top
if(typeof s!=="number")return s.F()
return new V.W(t-r,s-q)},
b_:function(a){return new V.P(a.movementX,a.movementY)},
c7:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.W])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
o=C.i.al(p.pageX)
C.i.al(p.pageY)
n=u.left
C.i.al(p.pageX)
C.a.h(t,new V.W(o-n,C.i.al(p.pageY)-u.top))}return t},
aw:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d3(u,new X.av(t,a.altKey,a.shiftKey))},
bY:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.F()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.F()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
hr:function(a){this.f=!0},
hf:function(a){this.f=!1},
hl:function(a){H.j(a,"$iab")
if(this.f&&this.bY(a))a.preventDefault()},
hv:function(a){var u
H.j(a,"$iaZ")
if(!this.f)return
u=this.dn(a)
this.b.jR(u)},
ht:function(a){var u
H.j(a,"$iaZ")
if(!this.f)return
u=this.dn(a)
this.b.jN(u)},
hz:function(a){var u,t,s,r
H.j(a,"$iab")
u=this.a
u.focus()
this.f=!0
this.aO(a)
if(this.x){t=this.aw(a)
s=this.b_(a)
if(this.d.cK(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aw(a)
r=this.aA(a)
if(this.c.cK(t,r))a.preventDefault()},
hD:function(a){var u,t,s
H.j(a,"$iab")
this.aO(a)
u=this.aw(a)
if(this.x){t=this.b_(a)
if(this.d.bc(u,t))a.preventDefault()
return}if(this.r)return
s=this.aA(a)
if(this.c.bc(u,s))a.preventDefault()},
hp:function(a){var u,t,s
H.j(a,"$iab")
if(!this.bY(a)){this.aO(a)
u=this.aw(a)
if(this.x){t=this.b_(a)
if(this.d.bc(u,t))a.preventDefault()
return}if(this.r)return
s=this.aA(a)
if(this.c.bc(u,s))a.preventDefault()}},
hB:function(a){var u,t,s
H.j(a,"$iab")
this.aO(a)
u=this.aw(a)
if(this.x){t=this.b_(a)
if(this.d.bb(u,t))a.preventDefault()
return}if(this.r)return
s=this.aA(a)
if(this.c.bb(u,s))a.preventDefault()},
hn:function(a){var u,t,s
H.j(a,"$iab")
if(!this.bY(a)){this.aO(a)
u=this.aw(a)
if(this.x){t=this.b_(a)
if(this.d.bb(u,t))a.preventDefault()
return}if(this.r)return
s=this.aA(a)
if(this.c.bb(u,s))a.preventDefault()}},
hF:function(a){var u,t
H.j(a,"$ib9")
this.aO(a)
u=new V.P((a&&C.x).gjk(a),C.x.gjl(a)).m(0,180)
if(this.x){if(this.d.jS(u))a.preventDefault()
return}if(this.r)return
t=this.aA(a)
if(this.c.jT(u,t))a.preventDefault()},
hH:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aw(this.y)
s=this.aA(this.y)
this.d.hx(t,s,u)}},
hX:function(a){var u
H.j(a,"$iaL")
this.a.focus()
this.f=!0
this.ce(a)
u=this.c7(a)
if(this.e.jQ(u))a.preventDefault()},
hT:function(a){var u
H.j(a,"$iaL")
this.ce(a)
u=this.c7(a)
if(this.e.jO(u))a.preventDefault()},
hV:function(a){var u
H.j(a,"$iaL")
this.ce(a)
u=this.c7(a)
if(this.e.jP(u))a.preventDefault()},
sfN:function(a){this.z=H.k(a,"$ib",[[P.ct,P.T]],"$ab")}}
D.d9.prototype={$ia5:1,$ibe:1}
D.a5.prototype={$ibe:1}
D.dn.prototype={
gq:function(){var u=this.Q
if(u==null){u=D.S()
this.Q=u}return u},
dc:function(a){var u=this.Q
if(u!=null)u.E(a)},
dB:function(a){var u=this.ch
if(u!=null)u.E(a)},
hw:function(){return this.dB(null)},
hJ:function(a){var u,t,s
H.k(a,"$ie",[D.a5],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.B)(a),++t){s=a[t]
if(s==null||this.fH(s))return!1}return!0},
h9:function(a,b){var u,t,s,r,q
u=D.a5
H.k(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gdA(),r=0;r<b.length;b.length===t||(0,H.B)(b),++r){q=H.j(b[r],"$ia5")
q.gq().h(0,s)}u=new D.br(a,b,this,[u])
u.b=!0
this.dc(u)},
hN:function(a,b){var u,t,s,r
u=D.a5
H.k(b,"$ie",[u],"$ae")
for(t=b.gW(b),s=this.gdA();t.B();){r=t.gL(t)
C.a.w(this.e,r)
r.gq().w(0,s)}u=new D.bs(a,b,this,[u])
u.b=!0
this.dc(u)},
fH:function(a){var u=C.a.aS(this.e,a)
return u},
sfh:function(a){this.e=H.k(a,"$ib",[D.d9],"$ab")},
sfi:function(a){this.f=H.k(a,"$ib",[D.dC],"$ab")},
sfj:function(a){this.r=H.k(a,"$ib",[D.dH],"$ab")},
sfk:function(a){this.x=H.k(a,"$ib",[D.dL],"$ab")},
sfl:function(a){this.y=H.k(a,"$ib",[D.dM],"$ab")},
sfm:function(a){this.z=H.k(a,"$ib",[D.dN],"$ab")},
$ae:function(){return[D.a5]},
$aa0:function(){return[D.a5]}}
D.dC.prototype={$ia5:1,$ibe:1}
D.dH.prototype={$ia5:1,$ibe:1}
D.dL.prototype={$ia5:1,$ibe:1}
D.dM.prototype={$ia5:1,$ibe:1}
D.dN.prototype={$ia5:1,$ibe:1}
V.a3.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.K.prototype={
cR:function(a){return H.c([this.a,this.b,this.c,this.d],[P.w])},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}
V.fl.prototype={}
V.dw.prototype={
a4:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dw))return!1
u=b.a
t=$.J().a
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
u=[P.w]
t=V.bX(H.c([this.a,this.d,this.r],u),3,0)
s=V.bX(H.c([this.b,this.e,this.x],u),3,0)
r=V.bX(H.c([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.h(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.h(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.h(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.h(t,1)
n=" "+t[1]+", "
if(1>=p)return H.h(s,1)
n=n+s[1]+", "
if(1>=o)return H.h(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.h(t,2)
u=" "+t[2]+", "
if(2>=p)return H.h(s,2)
u=u+s[2]+", "
if(2>=o)return H.h(r,2)
return n+(u+r[2]+"]")}}
V.ah.prototype={
a4:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return u},
ew:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.J().a)return V.ck()
a8=1/a7
a9=-r
b0=-d
return V.b0((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
n:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.b0(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
eQ:function(a){return new V.z(C.i.n(this.a,a.ge2(a))+C.i.n(this.b,a.ge3(a))+C.i.n(this.c,a.ge4()),C.i.n(this.e,a.ge2(a))+C.i.n(this.f,a.ge3(a))+C.i.n(this.r,a.ge4()),C.i.n(this.y,a.ge2(a))+C.i.n(this.z,a.ge3(a))+C.i.n(this.Q,a.ge4()))},
bg:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a1(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=$.J().a
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
i:function(a){return this.M()},
eu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.w]
t=V.bX(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bX(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bX(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bX(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.h(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.h(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.h(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.h(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.h(t,1)
l=l+t[1]+", "
if(1>=o)return H.h(s,1)
l=l+s[1]+", "
if(1>=n)return H.h(r,1)
l=l+r[1]+", "
if(1>=m)return H.h(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.h(t,2)
p=p+t[2]+", "
if(2>=o)return H.h(s,2)
p=p+s[2]+", "
if(2>=n)return H.h(r,2)
p=p+r[2]+", "
if(2>=m)return H.h(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.h(t,3)
l=l+t[3]+", "
if(3>=o)return H.h(s,3)
l=l+s[3]+", "
if(3>=n)return H.h(r,3)
l=l+r[3]+", "
if(3>=m)return H.h(q,3)
return p+(l+q[3]+"]")},
M:function(){return this.eu("",3,0)},
A:function(a){return this.eu(a,3,0)}}
V.W.prototype={
C:function(a,b){return new V.W(this.a+b.a,this.b+b.b)},
F:function(a,b){return new V.W(this.a-b.a,this.b-b.b)},
m:function(a,b){if(Math.abs(b-0)<$.J().a)return V.aG()
return new V.W(this.a/b,this.b/b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.a1.prototype={
C:function(a,b){return new V.a1(this.a+b.a,this.b+b.b,this.c+b.c)},
F:function(a,b){return new V.a1(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){if(Math.abs(b-0)<$.J().a)return V.ki()
return new V.a1(this.a/b,this.b/b,this.c/b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.az.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.az))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}
V.dF.prototype={
ga1:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dF))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}
V.P.prototype={
b8:function(a){return Math.sqrt(this.v(this))},
v:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.C(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.C(r)
return u*t+s*r},
n:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.n()
t=this.b
if(typeof t!=="number")return t.n()
return new V.P(u*b,t*b)},
m:function(a,b){var u,t
if(Math.abs(b-0)<$.J().a){u=$.ku
if(u==null){u=new V.P(0,0)
$.ku=u}return u}u=this.a
if(typeof u!=="number")return u.m()
t=this.b
if(typeof t!=="number")return t.m()
return new V.P(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=this.a
s=$.J()
s.toString
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.C(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.C(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.z.prototype={
b8:function(a){return Math.sqrt(this.v(this))},
v:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cG:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b3:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.z(-this.a,-this.b,-this.c)},
n:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
m:function(a,b){if(Math.abs(b-0)<$.J().a)return V.bU()
return new V.z(this.a/b,this.b/b,this.c/b)},
ex:function(){var u=$.J().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.bi.prototype={
b8:function(a){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=this.d
return Math.sqrt(u*u+t*t+s*s+r*r)},
m:function(a,b){var u
if(Math.abs(b-0)<$.J().a){u=$.kz
if(u==null){u=new V.bi(0,0,0,0)
$.kz=u}return u}return new V.bi(this.a/b,this.b/b,this.c/b,this.d/b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bi))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}
U.f6.prototype={
bQ:function(a){var u=V.mE(a,this.c,this.b)
return u},
gq:function(){var u=this.y
if(u==null){u=D.S()
this.y=u}return u},
O:function(a){var u=this.y
if(u!=null)u.E(a)},
scU:function(a,b){},
scH:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.J().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bQ(t)}u=new D.G("maximumLocation",u,this.b,this,[P.w])
u.b=!0
this.O(u)}},
scJ:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.J().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bQ(t)}u=new D.G("minimumLocation",u,this.c,this,[P.w])
u.b=!0
this.O(u)}},
sa0:function(a,b){var u
b=this.bQ(b)
u=this.d
if(!(Math.abs(u-b)<$.J().a)){this.d=b
u=new D.G("location",u,b,this,[P.w])
u.b=!0
this.O(u)}},
scI:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.J().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.G("maximumVelocity",u,a,this,[P.w])
u.b=!0
this.O(u)}},
sT:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.J().a)){this.f=a
u=new D.G("velocity",u,a,this,[P.w])
u.b=!0
this.O(u)}},
scu:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.J().a)){this.x=a
u=new D.G("dampening",u,a,this,[P.w])
u.b=!0
this.O(u)}},
ac:function(a,b){var u,t,s,r,q
u=this.f
t=$.J().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa0(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.J().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sT(s)}}}
U.d6.prototype={
gq:function(){var u=this.b
if(u==null){u=D.S()
this.b=u}return u},
sJ:function(a,b){var u,t,s
if(b==null)b=V.ck()
if(!J.E(this.a,b)){u=this.a
this.a=b
t=new D.G("matrix",u,b,this,[V.ah])
t.b=!0
s=this.b
if(s!=null)s.E(t)}},
aV:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d6))return!1
return J.E(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.cg.prototype={
gq:function(){var u=this.e
if(u==null){u=D.S()
this.e=u}return u},
O:function(a){var u
H.j(a,"$iu")
u=this.e
if(u!=null)u.E(a)},
a6:function(){return this.O(null)},
fo:function(a,b){var u,t,s,r,q,p,o,n
u=U.aa
H.k(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gaM(),r={func:1,ret:-1,args:[D.u]},q=[r],p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.l(s,r)
if(n.a==null)n.san(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.br(a,b,this,[u])
u.b=!0
this.O(u)},
hL:function(a,b){var u,t,s
u=U.aa
H.k(b,"$ie",[u],"$ae")
for(t=b.gW(b),s=this.gaM();t.B();)t.gL(t).gq().w(0,s)
u=new D.bs(a,b,this,[u])
u.b=!0
this.O(u)},
aV:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.aW()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.al(u,u.length,0,[H.x(u,0)]),s=null;u.B();){t=u.d
if(t!=null){r=t.aV(0,b,c)
if(r!=null)s=s==null?r:r.n(0,s)}}this.f=s==null?V.ck():s
u=this.e
if(u!=null)u.at(0)}return this.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cg))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.E(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.aa]},
$aa0:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.dX.prototype={
gq:function(){var u=this.cy
if(u==null){u=D.S()
this.cy=u}return u},
O:function(a){var u
H.j(a,"$iu")
u=this.cy
if(u!=null)u.E(a)},
a6:function(){return this.O(null)},
b2:function(a){if(this.a!=null)return!1
this.a=a
a.c.gb6().h(0,this.gbZ())
this.a.c.gba().h(0,this.gc0())
this.a.c.gaH().h(0,this.gc2())
return!0},
c_:function(a){H.j(a,"$iu")
if(!J.E(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
c1:function(a){var u,t,s,r,q,p,o
a=H.f(H.j(a,"$iu"),"$iay")
if(!this.y)return
if(this.x){u=a.d.F(0,a.y)
u=new V.P(u.a,u.b)
u=u.v(u)
t=this.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.F(0,a.y)
u=new V.P(t.a,t.b).n(0,2).m(0,u.ga1())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.n()
s=this.e
if(typeof s!=="number")return H.C(s)
t.sT(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.P(s.a,s.b).n(0,2).m(0,u.ga1())
s=this.b
q=r.a
if(typeof q!=="number")return q.R()
p=this.e
if(typeof p!=="number")return H.C(p)
o=this.z
if(typeof o!=="number")return H.C(o)
s.sa0(0,-q*p+o)
this.b.sT(0)
t=t.F(0,a.z)
this.Q=new V.P(t.a,t.b).n(0,2).m(0,u.ga1())}this.a6()},
c3:function(a){var u,t,s
H.j(a,"$iu")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.v(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.n()
s=this.e
if(typeof s!=="number")return H.C(s)
u.sT(t*10*s)
this.a6()}},
aV:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.aW()
if(u<t){this.ch=t
s=b.y
this.b.ac(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.b0(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iaa:1}
U.dY.prototype={
gq:function(){var u=this.fx
if(u==null){u=D.S()
this.fx=u}return u},
O:function(a){var u
H.j(a,"$iu")
u=this.fx
if(u!=null)u.E(a)},
a6:function(){return this.O(null)},
b2:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gb6().h(0,this.gbZ())
this.a.c.gba().h(0,this.gc0())
this.a.c.gaH().h(0,this.gc2())
u=this.a.d
t=u.f
if(t==null){t=D.S()
u.f=t
u=t}else u=t
u.h(0,this.gh1())
u=this.a.d
t=u.d
if(t==null){t=D.S()
u.d=t
u=t}else u=t
u.h(0,this.gh3())
u=this.a.e
t=u.b
if(t==null){t=D.S()
u.b=t
u=t}else u=t
u.h(0,this.gis())
u=this.a.e
t=u.d
if(t==null){t=D.S()
u.d=t
u=t}else u=t
u.h(0,this.giq())
u=this.a.e
t=u.c
if(t==null){t=D.S()
u.c=t
u=t}else u=t
u.h(0,this.gio())
return!0},
am:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.R()
u=-u}if(this.r){if(typeof t!=="number")return t.R()
t=-t}return new V.P(u,t)},
c_:function(a){a=H.f(H.j(a,"$iu"),"$iay")
if(!J.E(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
c1:function(a){var u,t,s,r,q,p,o
a=H.f(H.j(a,"$iu"),"$iay")
if(!this.cx)return
if(this.ch){u=a.d.F(0,a.y)
u=new V.P(u.a,u.b)
u=u.v(u)
t=this.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.F(0,a.y)
u=this.am(new V.P(t.a,t.b).n(0,2).m(0,u.ga1()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.R()
s=this.y
if(typeof s!=="number")return H.C(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.R()
t=this.x
if(typeof t!=="number")return H.C(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=this.am(new V.P(s.a,s.b).n(0,2).m(0,u.ga1()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.C(p)
o=this.cy
if(typeof o!=="number")return H.C(o)
s.sa0(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.C(q)
s=this.db
if(typeof s!=="number")return H.C(s)
o.sa0(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.F(0,a.z)
this.dx=this.am(new V.P(t.a,t.b).n(0,2).m(0,u.ga1()))}this.a6()},
c3:function(a){var u,t,s
H.j(a,"$iu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.v(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.R()
s=this.y
if(typeof s!=="number")return H.C(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.R()
u=this.x
if(typeof u!=="number")return H.C(u)
s.sT(-t*10*u)
this.a6()}},
h2:function(a){if(H.f(H.j(a,"$iu"),"$idr").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
h4:function(a){var u,t,s,r,q,p,o
a=H.f(H.j(a,"$iu"),"$iay")
if(!J.E(this.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=this.am(new V.P(s.a,s.b).n(0,2).m(0,u.ga1()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.C(p)
o=this.cy
if(typeof o!=="number")return H.C(o)
s.sa0(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.C(q)
s=this.db
if(typeof s!=="number")return H.C(s)
o.sa0(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.F(0,a.z)
this.dx=this.am(new V.P(t.a,t.b).n(0,2).m(0,u.ga1()))
this.a6()},
it:function(a){H.j(a,"$iu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ir:function(a){var u,t,s,r,q,p,o
a=H.f(H.j(a,"$iu"),"$idQ")
if(!this.cx)return
if(this.ch){u=a.d.F(0,a.y)
u=new V.P(u.a,u.b)
u=u.v(u)
t=this.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.F(0,a.y)
u=this.am(new V.P(t.a,t.b).n(0,2).m(0,u.ga1()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.R()
s=this.y
if(typeof s!=="number")return H.C(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.R()
t=this.x
if(typeof t!=="number")return H.C(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=this.am(new V.P(s.a,s.b).n(0,2).m(0,u.ga1()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.C(p)
o=this.cy
if(typeof o!=="number")return H.C(o)
s.sa0(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.C(q)
s=this.db
if(typeof s!=="number")return H.C(s)
o.sa0(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.F(0,a.z)
this.dx=this.am(new V.P(t.a,t.b).n(0,2).m(0,u.ga1()))}this.a6()},
ip:function(a){var u,t,s
H.j(a,"$iu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.v(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.R()
s=this.y
if(typeof s!=="number")return H.C(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.R()
u=this.x
if(typeof u!=="number")return H.C(u)
s.sT(-t*10*u)
this.a6()}},
aV:function(a,b,c){var u,t,s
u=this.dy
t=b.e
if(typeof u!=="number")return u.aW()
if(u<t){this.dy=t
s=b.y
this.c.ac(0,s)
this.b.ac(0,s)
this.fr=V.cj(this.b.d).n(0,V.jH(this.c.d))}return this.fr},
$iaa:1}
U.dZ.prototype={
gq:function(){var u=this.r
if(u==null){u=D.S()
this.r=u}return u},
O:function(a){var u=this.r
if(u!=null)u.E(a)},
b2:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.S()
u.e=t
u=t}else u=t
t=this.gh6()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.S()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
h7:function(a){var u,t,s,r
H.j(a,"$iu")
if(!J.E(this.b,this.a.b.c))return
H.f(a,"$icl")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){this.d=r
u=new D.G("zoom",u,r,this,[P.w])
u.b=!0
this.O(u)}},
aV:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.bO(s,s,s,1)}return this.f},
$iaa:1}
M.d5.prototype={
gq:function(){var u=this.f
if(u==null){u=D.S()
this.f=u}return u},
a5:function(a){var u
H.j(a,"$iu")
u=this.f
if(u!=null)u.E(a)},
bP:function(){return this.a5(null)},
hP:function(a,b){var u,t,s,r,q,p,o,n
u=M.ao
H.k(b,"$ie",[u],"$ae")
for(t=b.length,s=this.ga9(),r={func:1,ret:-1,args:[D.u]},q=[r],p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.l(s,r)
if(n.a==null)n.san(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.br(a,b,this,[u])
u.b=!0
this.a5(u)},
hR:function(a,b){var u,t,s
u=M.ao
H.k(b,"$ie",[u],"$ae")
for(t=b.gW(b),s=this.ga9();t.B();)t.gL(t).gq().w(0,s)
u=new D.bs(a,b,this,[u])
u.b=!0
this.a5(u)},
ak:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.al(u,u.length,0,[H.x(u,0)]);u.B();){t=u.d
if(t!=null)t.ak(a)}this.e=!1},
$ae:function(){return[M.ao]},
$aa0:function(){return[M.ao]},
$iao:1}
M.dc.prototype={
a5:function(a){var u
H.j(a,"$iu")
u=this.x
if(u!=null)u.E(a)},
bP:function(){return this.a5(null)},
hh:function(a,b){var u,t,s,r,q,p,o,n
u=E.an
H.k(b,"$ie",[u],"$ae")
for(t=b.length,s=this.ga9(),r={func:1,ret:-1,args:[D.u]},q=[r],p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.cd()
n.san(null)
n.sbl(null)
n.c=null
n.d=0
o.z=n}H.l(s,r)
if(n.a==null)n.san(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.br(a,b,this,[u])
u.b=!0
this.a5(u)},
hj:function(a,b){var u,t,s
u=E.an
H.k(b,"$ie",[u],"$ae")
for(t=b.gW(b),s=this.ga9();t.B();)t.gL(t).gq().w(0,s)
u=new D.bs(a,b,this,[u])
u.b=!0
this.a5(u)},
saC:function(a){var u,t
if(a==null)a=X.bP(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gq().w(0,this.ga9())
t=this.a
this.a=a
a.gq().h(0,this.ga9())
u=new D.G("camera",t,this.a,this,[X.d4])
u.b=!0
this.a5(u)}},
sbK:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gq().w(0,this.ga9())
t=this.b
this.b=b
b.gq().h(0,this.ga9())
u=new D.G("target",t,this.b,this,[X.dJ])
u.b=!0
this.a5(u)}},
sa7:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().w(0,this.ga9())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.ga9())
u=new D.G("technique",t,this.c,this,[O.bw])
u.b=!0
this.a5(u)}},
gq:function(){var u=this.x
if(u==null){u=D.S()
this.x=u}return u},
ak:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
a2.eK(this.c)
u=this.b
u.toString
t=a2.a
C.b.j5(t,36160,null)
C.b.ar(t,2884)
C.b.ar(t,2929)
C.b.jm(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.C(s)
o=C.i.al(p*s)
p=q.b
if(typeof r!=="number")return H.C(r)
n=C.i.al(p*r)
p=C.i.al(q.c*s)
a2.c=p
q=C.i.al(q.d*r)
a2.d=q
C.b.kb(t,o,n,p,q)
C.b.jb(t,u.c)
if(u.b){u=u.a
C.b.ja(t,u.a,u.b,u.c,u.d)
m=16640}else m=256
C.b.j9(t,m)
u=this.a
t=a2.c
q=a2.d
p=u.c
l=u.d
k=u.e
j=k-l
i=1/Math.tan(p*0.5)
h=V.b0(-i/(t/q),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
t=u.a
if(t!=null){g=t.a
if(g!=null)h=g.n(0,h)}a2.cy.eJ(h)
t=$.kg
if(t==null){t=V.ki()
q=$.kw
if(q==null){q=new V.z(0,1,0)
$.kw=q}p=V.ky()
f=p.m(0,Math.sqrt(p.v(p)))
q=q.b3(f)
e=q.m(0,Math.sqrt(q.v(q)))
d=f.b3(e)
c=new V.z(t.a,t.b,t.c)
b=e.R(0).v(c)
a=d.R(0).v(c)
a0=f.R(0).v(c)
t=V.b0(e.a,d.a,f.a,b,e.b,d.b,f.b,a,e.c,d.c,f.c,a0,0,0,0,1)
$.kg=t
a1=t}else a1=t
u=u.b
if(u!=null){g=u.a
if(g!=null)a1=g.n(0,a1)}a2.db.eJ(a1)
u=this.c
if(u!=null)u.ac(0,a2)
for(u=this.d.a,u=new J.al(u,u.length,0,[H.x(u,0)]);u.B();)u.d.ac(0,a2)
for(u=this.d.a,u=new J.al(u,u.length,0,[H.x(u,0)]);u.B();)u.d.ak(a2)
this.a.toString
a2.cy.cL()
a2.db.cL()
this.b.toString
a2.eH()},
sfF:function(a,b){this.d=H.k(b,"$ia0",[E.an],"$aa0")},
$iao:1}
M.ao.prototype={}
A.cY.prototype={}
A.eY.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jo:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
C.b.e5(r.a,r.c)}},
e0:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
C.b.e1(r.a,r.c)}}}
A.dg.prototype={}
A.dt.prototype={
fb:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.bv("")
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
a6.iD(u)
a6.iK(u)
a6.iE(u)
a6.iS(u)
a6.iT(u)
a6.iM(u)
a6.iX(u)
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
u=new P.bv("")
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
q.iH(u)
q.iC(u)
q.iF(u)
q.iI(u)
q.iQ(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iO(u)
q.iP(u)}q.iL(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
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
m=u.a+="   return litClr*("+C.a.D(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iG(u)
q.iN(u)
q.iR(u)
q.iU(u)
q.iV(u)
q.iW(u)
q.iJ(u)}m=u.a+="// === Main ===\n"
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
i="vec4("+C.a.D(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.ev(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.f(this.y.l(0,"invViewMat"),"$iak")
if(t)this.dy=H.f(this.y.l(0,"objMat"),"$iak")
if(r)this.fr=H.f(this.y.l(0,"viewObjMat"),"$iak")
this.fy=H.f(this.y.l(0,"projViewObjMat"),"$iak")
if(a6.x2)this.k1=H.f(this.y.l(0,"txt2DMat"),"$icy")
if(a6.y1)this.k2=H.f(this.y.l(0,"txtCubeMat"),"$iak")
if(a6.y2)this.k3=H.f(this.y.l(0,"colorMat"),"$iak")
this.sfA(H.c([],[A.ak]))
t=a6.as
if(t>0){this.k4=H.j(this.y.l(0,"bendMatCount"),"$iM")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.q(P.p("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.f(g,"$iak"))}}t=a6.a
if(t!==C.c){this.r2=H.f(this.y.l(0,"emissionClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.d:this.rx=H.f(this.y.l(0,"emissionTxt"),"$iaq")
this.x1=H.f(this.y.l(0,"nullEmissionTxt"),"$iM")
break
case C.e:this.ry=H.f(this.y.l(0,"emissionTxt"),"$iar")
this.x1=H.f(this.y.l(0,"nullEmissionTxt"),"$iM")
break}}t=a6.b
if(t!==C.c){this.x2=H.f(this.y.l(0,"ambientClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.d:this.y1=H.f(this.y.l(0,"ambientTxt"),"$iaq")
this.as=H.f(this.y.l(0,"nullAmbientTxt"),"$iM")
break
case C.e:this.y2=H.f(this.y.l(0,"ambientTxt"),"$iar")
this.as=H.f(this.y.l(0,"nullAmbientTxt"),"$iM")
break}}t=a6.c
if(t!==C.c){this.aj=H.f(this.y.l(0,"diffuseClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.d:this.bs=H.f(this.y.l(0,"diffuseTxt"),"$iaq")
this.bt=H.f(this.y.l(0,"nullDiffuseTxt"),"$iM")
break
case C.e:this.e6=H.f(this.y.l(0,"diffuseTxt"),"$iar")
this.bt=H.f(this.y.l(0,"nullDiffuseTxt"),"$iM")
break}}t=a6.d
if(t!==C.c){this.bu=H.f(this.y.l(0,"invDiffuseClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.d:this.e7=H.f(this.y.l(0,"invDiffuseTxt"),"$iaq")
this.bv=H.f(this.y.l(0,"nullInvDiffuseTxt"),"$iM")
break
case C.e:this.e8=H.f(this.y.l(0,"invDiffuseTxt"),"$iar")
this.bv=H.f(this.y.l(0,"nullInvDiffuseTxt"),"$iM")
break}}t=a6.e
if(t!==C.c){this.by=H.f(this.y.l(0,"shininess"),"$iZ")
this.bw=H.f(this.y.l(0,"specularClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.d:this.e9=H.f(this.y.l(0,"specularTxt"),"$iaq")
this.bx=H.f(this.y.l(0,"nullSpecularTxt"),"$iM")
break
case C.e:this.ea=H.f(this.y.l(0,"specularTxt"),"$iar")
this.bx=H.f(this.y.l(0,"nullSpecularTxt"),"$iM")
break}}switch(a6.f){case C.c:break
case C.f:break
case C.d:this.eb=H.f(this.y.l(0,"bumpTxt"),"$iaq")
this.bz=H.f(this.y.l(0,"nullBumpTxt"),"$iM")
break
case C.e:this.ec=H.f(this.y.l(0,"bumpTxt"),"$iar")
this.bz=H.f(this.y.l(0,"nullBumpTxt"),"$iM")
break}if(a6.dy){this.ed=H.f(this.y.l(0,"envSampler"),"$iar")
this.ee=H.f(this.y.l(0,"nullEnvTxt"),"$iM")
t=a6.r
if(t!==C.c){this.bA=H.f(this.y.l(0,"reflectClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.d:this.ef=H.f(this.y.l(0,"reflectTxt"),"$iaq")
this.bB=H.f(this.y.l(0,"nullReflectTxt"),"$iM")
break
case C.e:this.eg=H.f(this.y.l(0,"reflectTxt"),"$iar")
this.bB=H.f(this.y.l(0,"nullReflectTxt"),"$iM")
break}}t=a6.x
if(t!==C.c){this.bC=H.f(this.y.l(0,"refraction"),"$iZ")
this.bD=H.f(this.y.l(0,"refractClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.d:this.eh=H.f(this.y.l(0,"refractTxt"),"$iaq")
this.bE=H.f(this.y.l(0,"nullRefractTxt"),"$iM")
break
case C.e:this.ei=H.f(this.y.l(0,"refractTxt"),"$iar")
this.bE=H.f(this.y.l(0,"nullRefractTxt"),"$iM")
break}}}t=a6.y
if(t!==C.c){this.bF=H.f(this.y.l(0,"alpha"),"$iZ")
switch(t){case C.c:break
case C.f:break
case C.d:this.ej=H.f(this.y.l(0,"alphaTxt"),"$iaq")
this.bG=H.f(this.y.l(0,"nullAlphaTxt"),"$iM")
break
case C.e:this.ek=H.f(this.y.l(0,"alphaTxt"),"$iar")
this.bG=H.f(this.y.l(0,"nullAlphaTxt"),"$iM")
break}}this.sfL(H.c([],[A.cx]))
this.shY(H.c([],[A.cz]))
this.sii(H.c([],[A.cA]))
this.siv(H.c([],[A.cB]))
this.siw(H.c([],[A.cC]))
this.six(H.c([],[A.cD]))
if(a6.k2){t=a6.z
if(t>0){this.el=H.j(this.y.l(0,"dirLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iI")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iI")
s=this.cw;(s&&C.a).h(s,new A.cx(h,g,f))}}t=a6.Q
if(t>0){this.em=H.j(this.y.l(0,"pntLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iI")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iI")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iI")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iZ")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iZ")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iZ")
s=this.cz;(s&&C.a).h(s,new A.cz(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.en=H.j(this.y.l(0,"spotLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iI")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iI")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iI")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iI")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iZ")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iZ")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iZ")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iZ")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iZ")
s=this.cA;(s&&C.a).h(s,new A.cA(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eo=H.j(this.y.l(0,"txtDirLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iI")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iI")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iI")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iI")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iI")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iM")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iaq")
s=this.cB;(s&&C.a).h(s,new A.cB(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.ep=H.j(this.y.l(0,"txtPntLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iI")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iI")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$icy")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iI")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iM")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iZ")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iZ")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iZ")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iar")
s=this.cC;(s&&C.a).h(s,new A.cC(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eq=H.j(this.y.l(0,"txtSpotLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iI")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iI")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iI")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iI")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iI")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iM")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iI")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iZ")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iZ")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a2,"$iZ")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a3,"$iZ")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a4,"$iZ")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a5,"$iaq")
s=this.cD;(s&&C.a).h(s,new A.cD(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ah:function(a,b,c){C.b.S(b.a,b.d,1)},
ad:function(a,b,c){C.b.S(b.a,b.d,1)},
sfA:function(a){this.r1=H.k(a,"$ib",[A.ak],"$ab")},
sfL:function(a){this.cw=H.k(a,"$ib",[A.cx],"$ab")},
shY:function(a){this.cz=H.k(a,"$ib",[A.cz],"$ab")},
sii:function(a){this.cA=H.k(a,"$ib",[A.cA],"$ab")},
siv:function(a){this.cB=H.k(a,"$ib",[A.cB],"$ab")},
siw:function(a){this.cC=H.k(a,"$ib",[A.cC],"$ab")},
six:function(a){this.cD=H.k(a,"$ib",[A.cD],"$ab")}}
A.h_.prototype={
iD:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.as+"];\n"
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
iK:function(a){var u
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
iE:function(a){var u
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
iS:function(a){var u,t
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
iT:function(a){var u,t
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
iM:function(a){var u
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
iX:function(a){var u
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
ax:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.h(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.d0(c,1))+"Txt;\n"
a.a=u
if(b===C.d)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iH:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.ax(a,u,"emission")
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
iC:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.ax(a,u,"ambient")
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
iF:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.ax(a,u,"diffuse")
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
iI:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.ax(a,u,"invDiffuse")
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
iQ:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.ax(a,u,"specular")
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
iL:function(a){var u,t
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
iO:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.ax(a,u,"reflect")
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
iP:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.ax(a,u,"refract")
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
iG:function(a){var u,t
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
iN:function(a){var u,t
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
iR:function(a){var u,t
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
iU:function(a){var u,t,s
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
iV:function(a){var u,t,s
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
iW:function(a){var u,t,s
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
iJ:function(a){var u
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
i:function(a){return this.aj}}
A.cx.prototype={}
A.cB.prototype={}
A.cz.prototype={}
A.cC.prototype={}
A.cA.prototype={}
A.cD.prototype={}
A.cr.prototype={
d7:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ev:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.dq(b,35633)
this.f=this.dq(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dT(u,t,this.e)
C.b.dT(u,this.r,this.f)
C.b.jz(u,this.r)
if(!H.kO(C.b.bN(u,this.r,35714))){s=C.b.f0(u,this.r)
C.b.ji(u,this.r)
H.q(P.p("Failed to link shader: "+H.n(s)))}this.i9()
this.ib()},
ao:function(a){C.b.cT(a.a,this.r)
this.x.jo()},
dq:function(a,b){var u,t,s
u=this.a
t=C.b.jg(u,b)
C.b.f6(u,t,a)
C.b.jd(u,t)
if(!H.kO(C.b.f2(u,t,35713))){s=C.b.f1(u,t)
C.b.jj(u,t)
throw H.i(P.p("Error compiling shader '"+H.n(t)+"': "+H.n(s)))}return t},
i9:function(){var u,t,s,r,q,p
u=H.c([],[A.cY])
t=this.a
s=H.ae(C.b.bN(t,this.r,35721))
if(typeof s!=="number")return H.C(s)
r=0
for(;r<s;++r){q=C.b.eW(t,this.r,r)
p=C.b.eY(t,this.r,q.name)
C.a.h(u,new A.cY(t,q.name,p))}this.x=new A.eY(u)},
ib:function(){var u,t,s,r,q,p
u=H.c([],[A.dR])
t=this.a
s=H.ae(C.b.bN(t,this.r,35718))
if(typeof s!=="number")return H.C(s)
r=0
for(;r<s;++r){q=C.b.eX(t,this.r,r)
p=C.b.f3(t,this.r,q.name)
C.a.h(u,this.jh(q.type,q.size,q.name,p))}this.y=new A.i9(u)},
aL:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.M(u,t,b,c)
else return A.jL(u,t,b,a,c)},
fI:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aq(u,t,b,c)
else return A.jL(u,t,b,a,c)},
fJ:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ar(u,t,b,c)
else return A.jL(u,t,b,a,c)},
bo:function(a,b){return new P.ea(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.n(b)+"."))},
jh:function(a,b,c,d){switch(a){case 5120:return this.aL(b,c,d)
case 5121:return this.aL(b,c,d)
case 5122:return this.aL(b,c,d)
case 5123:return this.aL(b,c,d)
case 5124:return this.aL(b,c,d)
case 5125:return this.aL(b,c,d)
case 5126:return new A.Z(this.a,this.r,c,d)
case 35664:return new A.i5(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.cw(this.a,this.r,c,d)
case 35667:return new A.i6(this.a,this.r,c,d)
case 35668:return new A.i7(this.a,this.r,c,d)
case 35669:return new A.i8(this.a,this.r,c,d)
case 35674:return new A.ia(this.a,this.r,c,d)
case 35675:return new A.cy(this.a,this.r,c,d)
case 35676:return new A.ak(this.a,this.r,c,d)
case 35678:return this.fI(b,c,d)
case 35680:return this.fJ(b,c,d)
case 35670:throw H.i(this.bo("BOOL",c))
case 35671:throw H.i(this.bo("BOOL_VEC2",c))
case 35672:throw H.i(this.bo("BOOL_VEC3",c))
case 35673:throw H.i(this.bo("BOOL_VEC4",c))
default:throw H.i(P.p("Unknown uniform variable type "+H.n(a)+" for "+H.n(c)+"."))}}}
A.bJ.prototype={
i:function(a){return this.b}}
A.dR.prototype={}
A.i9.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
l:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
ju:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r)s+=u[r].i(0)+a
return s},
M:function(){return this.ju("\n")}}
A.M.prototype={
i:function(a){return"Uniform1i: "+H.n(this.c)}}
A.i6.prototype={
i:function(a){return"Uniform2i: "+H.n(this.c)}}
A.i7.prototype={
i:function(a){return"Uniform3i: "+H.n(this.c)}}
A.i8.prototype={
i:function(a){return"Uniform4i: "+H.n(this.c)}}
A.i4.prototype={
i:function(a){return"Uniform1iv: "+H.n(this.c)},
siy:function(a){this.e=H.k(a,"$ib",[P.A],"$ab")}}
A.Z.prototype={
i:function(a){return"Uniform1f: "+H.n(this.c)}}
A.i5.prototype={
i:function(a){return"Uniform2f: "+H.n(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.n(this.c)}}
A.cw.prototype={
cW:function(a){return C.b.k9(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.n(this.c)}}
A.ia.prototype={
i:function(a){return"Uniform1Mat2 "+H.n(this.c)}}
A.cy.prototype={
a8:function(a){var u=new Float32Array(H.cQ(H.k(a,"$ib",[P.w],"$ab")))
C.b.eR(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.n(this.c)}}
A.ak.prototype={
a8:function(a){var u=new Float32Array(H.cQ(H.k(a,"$ib",[P.w],"$ab")))
C.b.eS(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.n(this.c)}}
A.aq.prototype={
i:function(a){return"UniformSampler2D: "+H.n(this.c)}}
A.ar.prototype={
i:function(a){return"UniformSamplerCube: "+H.n(this.c)}}
F.j6.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cG(u.b,b).cG(u.d.cG(u.c,b),c)
a.sa0(0,new V.a1(t.a,t.b,t.c))
a.scQ(t.m(0,Math.sqrt(t.v(t))))
u=1-b
s=1-c
s=new V.az(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.E(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.P()}},
$S:35}
F.jc.prototype={
$1:function(a){return 1},
$S:36}
F.Y.prototype={
b4:function(){if(!this.gb5()){C.a.w(this.a.a.d.b,this)
this.a.a.P()}this.c9()
this.ca()
this.i1()},
b0:function(a){this.a=a
C.a.h(a.d.b,this)},
b1:function(a){this.b=a
C.a.h(a.d.c,this)},
dL:function(a){this.c=a
C.a.h(a.d.d,this)},
c9:function(){var u=this.a
if(u!=null){C.a.w(u.d.b,this)
this.a=null}},
ca:function(){var u=this.b
if(u!=null){C.a.w(u.d.c,this)
this.b=null}},
i1:function(){var u=this.c
if(u!=null){C.a.w(u.d.d,this)
this.c=null}},
gb5:function(){return this.a==null||this.b==null||this.c==null},
fz:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.bU()
if(t!=null)q=q.C(0,t)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.ex())return
return q.m(0,Math.sqrt(q.v(q)))},
fE:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.F(0,t)
u=new V.z(u.a,u.b,u.c)
q=u.m(0,Math.sqrt(u.v(u)))
u=r.F(0,t)
u=new V.z(u.a,u.b,u.c)
u=q.b3(u.m(0,Math.sqrt(u.v(u))))
return u.m(0,Math.sqrt(u.v(u)))},
cp:function(){if(this.d!=null)return!0
var u=this.fz()
if(u==null){u=this.fE()
if(u==null)return!1}this.d=u
this.a.a.P()
return!0},
fw:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.bU()
if(t!=null)q=q.C(0,t)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.ex())return
return q.m(0,Math.sqrt(q.v(q)))},
fD:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.J().a){u=m.F(0,p)
u=new V.z(u.a,u.b,u.c)
h=u.m(0,Math.sqrt(u.v(u)))
if(j.a-k.a<0)h=h.R(0)}else{g=(u-l.b)/i
u=m.F(0,p)
u=new V.a1(u.a*g,u.b*g,u.c*g).C(0,p).F(0,s)
u=new V.z(u.a,u.b,u.c)
h=u.m(0,Math.sqrt(u.v(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.R(0)}u=this.d
if(u!=null){f=u.m(0,Math.sqrt(u.v(u)))
u=f.b3(h)
u=u.m(0,Math.sqrt(u.v(u))).b3(f)
h=u.m(0,Math.sqrt(u.v(u)))}return h},
co:function(){if(this.e!=null)return!0
var u=this.fw()
if(u==null){u=this.fD()
if(u==null)return!1}this.e=u
this.a.a.P()
return!0},
aK:function(a,b){var u=b.a
if(u==null)throw H.i(P.p("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.i(P.p("May not replace a face's vertex with a vertex attached to a different shape."))},
gjc:function(a){if(J.E(this.a,this.b))return!0
if(J.E(this.b,this.c))return!0
if(J.E(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
A:function(a){var u,t
if(this.gb5())return a+"disposed"
u=a+C.j.ag(J.aw(this.a.e),0)+", "+C.j.ag(J.aw(this.b.e),0)+", "+C.j.ag(J.aw(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
M:function(){return this.A("")}}
F.fp.prototype={}
F.hD.prototype={
aU:function(a,b,c){var u,t
u=b.a
u.a.a.p()
u=u.e
t=c.a
t.a.a.p()
if(u==t.e){u=b.b
u.a.a.p()
u=u.e
t=c.b
t.a.a.p()
if(u==t.e){u=b.c
u.a.a.p()
u=u.e
t=c.c
t.a.a.p()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.p()
u=u.e
t=c.b
t.a.a.p()
if(u==t.e){u=b.b
u.a.a.p()
u=u.e
t=c.c
t.a.a.p()
if(u==t.e){u=b.c
u.a.a.p()
u=u.e
t=c.a
t.a.a.p()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.p()
u=u.e
t=c.c
t.a.a.p()
if(u==t.e){u=b.b
u.a.a.p()
u=u.e
t=c.a
t.a.a.p()
if(u==t.e){u=b.c
u.a.a.p()
u=u.e
t=c.b
t.a.a.p()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.af.prototype={
b4:function(){if(!this.gb5()){C.a.w(this.a.a.c.b,this)
this.a.a.P()}this.c9()
this.ca()},
b0:function(a){this.a=a
C.a.h(a.c.b,this)},
b1:function(a){this.b=a
C.a.h(a.c.c,this)},
c9:function(){var u=this.a
if(u!=null){C.a.w(u.c.b,this)
this.a=null}},
ca:function(){var u=this.b
if(u!=null){C.a.w(u.c.c,this)
this.b=null}},
gb5:function(){return this.a==null||this.b==null},
aK:function(a,b){var u=b.a
if(u==null)throw H.i(P.p("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.i(P.p("May not replace a line's vertex with a vertex attached to a different shape."))},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
A:function(a){if(this.gb5())return a+"disposed"
return a+C.j.ag(J.aw(this.a.e),0)+", "+C.j.ag(J.aw(this.b.e),0)},
M:function(){return this.A("")}}
F.fO.prototype={}
F.i3.prototype={
aU:function(a,b,c){var u,t
u=b.a
u.a.a.p()
u=u.e
t=c.a
t.a.a.p()
if(u==t.e){u=b.b
u.a.a.p()
u=u.e
t=c.b
t.a.a.p()
return u==t.e}else{u=b.a
u.a.a.p()
u=u.e
t=c.b
t.a.a.p()
if(u==t.e){u=b.b
u.a.a.p()
u=u.e
t=c.a
t.a.a.p()
return u==t.e}else return!1}}}
F.bu.prototype={
i8:function(a){this.a=a
C.a.h(a.b.b,this)},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
A:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.ag(J.aw(u.e),0)},
M:function(){return this.A("")}}
F.ap.prototype={
gq:function(){var u=this.e
if(u==null){u=D.S()
this.e=u}return u},
aF:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.p()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.B)(u),++r){q=u[r]
this.a.h(0,q.cs())}this.a.p()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.B)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.p()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
m=o[n]
this.b.a.a.h(0,m)
F.lG(m)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.B)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.p()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.jG(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.B)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.p()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.p()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.ce(k,j,h)}u=this.e
if(u!=null)u.at(0)},
aq:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aq()||!1
if(!this.a.aq())t=!1
u=this.e
if(u!=null)u.at(0)
return t},
aQ:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aQ()||!1
if(!this.a.aQ())t=!1
u=this.e
if(u!=null)u.at(0)
return t},
bq:function(){var u=this.e
if(u!=null)++u.d
this.a.bq()
u=this.e
if(u!=null)u.at(0)
return!0},
jq:function(a,b,c){var u,t,s,r
u=this.a.c.length
for(t=c;t<u;++t){s=this.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
if(b.aU(0,a,r))return r}return},
jp:function(a,b){return this.jq(a,b,0)},
i3:function(a,b){var u,t,s,r,q,p
H.k(b,"$ib",[F.Q],"$ab")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.B)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.q(P.p("May not replace a face's vertex when the point has been disposed."))
if(J.E(q,s)){r.aK(s,a)
q=r.a
if(q!=null){C.a.w(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.E(r.b,s)){r.aK(s,a)
q=r.b
if(q!=null){C.a.w(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.E(r.c,s)){r.aK(s,a)
q=r.c
if(q!=null){C.a.w(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null)H.q(P.p("May not replace a line's vertex when the point has been disposed."))
if(J.E(q,s)){r.aK(s,a)
q=r.a
if(q!=null){C.a.w(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.E(r.b,s)){r.aK(s,a)
q=r.b
if(q!=null){C.a.w(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.q(P.p("May not replace a point's vertex when the point has been disposed."))
if(J.E(q,s)){if(a.a==null)H.q(P.p("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.w(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}this.a.w(0,s)}},
jC:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.c(u.slice(0),[H.x(u,0)])
for(u=[F.Q];t.length!==0;){s=C.a.gjs(t)
C.a.eL(t,0)
if(s!=null){r=H.c([],u)
C.a.h(r,s)
for(q=t.length-1;q>=0;--q){if(q>=t.length)return H.h(t,q)
p=t[q]
if(p!=null&&a.aU(0,s,p)){C.a.h(r,p)
C.a.eL(t,q)}}if(r.length>1){o=b.aF(r)
this.i3(o,r)
C.a.h(t,o)}}}this.a.p()
this.c.cM()
this.d.cM()
this.b.jV()
this.c.cN(new F.i3())
this.d.cN(new F.hD())
u=this.e
if(u!=null)u.at(0)},
dW:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aQ()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aP().a)!==0)++r
if((s&$.aO().a)!==0)++r
if((s&$.bl().a)!==0)++r
if((s&$.bm().a)!==0)++r
if((s&$.bF().a)!==0)++r
if((s&$.cW().a)!==0)++r
if((s&$.c0().a)!==0)++r
if((s&$.bk().a)!==0)++r
q=a1.gd_(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.w
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.d1])
for(m=0,l=0;l<r;++l){k=a1.j3(l)
j=k.gd_(k)
C.a.a2(n,l,new Z.d1(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].jA(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.a2(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.ap(t,34962,e)
C.b.dV(t,34962,new Float32Array(H.cQ(o)),35044)
C.b.ap(t,34962,null)
d=new Z.bn(new Z.e0(34962,e),n,a1)
d.sfV(H.c([],[Z.bq]))
if(this.b.b.length!==0){s=P.A
c=H.c([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.p()
C.a.h(c,b.e)}a=Z.jM(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bq(0,c.length,a))}if(this.c.b.length!==0){s=P.A
c=H.c([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.p()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.p()
C.a.h(c,b.e)}a=Z.jM(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bq(1,c.length,a))}if(this.d.b.length!==0){s=P.A
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.p()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.p()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].c
b.a.a.p()
C.a.h(c,b.e)}a=Z.jM(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bq(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.o])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.A("   "))}return C.a.D(u,"\n")},
ab:function(a){var u=this.e
if(u!=null)u.E(a)},
P:function(){return this.ab(null)},
$imL:1}
F.hx.prototype={
dP:function(a,b,c,d){var u,t
u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
t=new F.Y()
u=b.a
if(u==null)H.q(P.p("May not create a face with a first vertex which is not attached to a shape."))
if(u!=c.a||u!=d.a)H.q(P.p("May not create a face with vertices attached to different shapes."))
t.b0(b)
t.b1(c)
t.dL(d)
C.a.h(t.a.a.d.b,t)
t.a.a.P()
return t},
iZ:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.Q],"$ab")
u=H.c([],[F.Y])
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
C.a.h(u,F.ce(s,p,o))}}return u},
j_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.Q],"$ab")
u=H.c([],[F.Y])
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
C.a.h(u,F.ce(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ce(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ce(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ce(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cN:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aU(0,p,n)){p.b4()
break}}}}},
cM:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gjc(s)
if(t)s.b4()}},
aq:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].cp())s=!1
return s},
aQ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].co())s=!1
return s},
i:function(a){return this.M()},
A:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].A(a))
return C.a.D(u,"\n")},
M:function(){return this.A("")},
sfO:function(a){this.b=H.k(a,"$ib",[F.Y],"$ab")}}
F.hy.prototype={
cf:function(a,b,c){var u,t
u=this.a
u.a.h(0,b)
u.a.h(0,c)
u=new F.af()
if(b==null)H.q(P.p("May not create a line with a null start vertex."))
if(c==null)H.q(P.p("May not create a line with a null end vertex."))
t=b.a
if(t==null)H.q(P.p("May not create a line with a start vertex which is not attached to a shape."))
if(t!=c.a)H.q(P.p("May not create a line with vertices attached to different shapes."))
u.b0(b)
u.b1(c)
C.a.h(u.a.a.c.b,u)
u.a.a.P()
return u},
dQ:function(a){var u,t,s,r,q,p
H.k(a,"$ib",[F.Q],"$ab")
u=H.c([],[F.af])
t=a.length
if(t>0){for(s=this.a,r=1;r<t;++r){q=r-1
p=a.length
if(q>=p)return H.h(a,q)
q=a[q]
if(r>=p)return H.h(a,r)
p=a[r]
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.jG(q,p))}s=t-1
q=a.length
if(s>=q)return H.h(a,s)
s=a[s]
if(0>=q)return H.h(a,0)
C.a.h(u,this.cf(0,s,a[0]))}return u},
j1:function(a){var u,t,s,r,q
H.k(a,"$ib",[F.Q],"$ab")
u=H.c([],[F.af])
for(t=this.a,s=1;s<64;s+=2){r=a[s-1]
q=a[s]
t.a.h(0,r)
t.a.h(0,q)
C.a.h(u,F.jG(r,q))}return u},
gk:function(a){return this.b.length},
cN:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aU(0,p,n)){p.b4()
break}}}}},
cM:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.E(s.a,s.b)
if(t)s.b4()}},
i:function(a){return this.M()},
A:function(a){var u,t,s,r
u=H.c([],[P.o])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.h(r,s)
C.a.h(u,r[s].A(a+(""+s+". ")))}return C.a.D(u,"\n")},
M:function(){return this.A("")},
sfY:function(a){this.b=H.k(a,"$ib",[F.af],"$ab")}}
F.hz.prototype={
gk:function(a){return this.b.length},
jV:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.w(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.a.w(s.b.b,t)
t.a=null}}}},
i:function(a){return this.M()},
A:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].A(a))
return C.a.D(u,"\n")},
M:function(){return this.A("")},
sc6:function(a){this.b=H.k(a,"$ib",[F.bu],"$ab")}}
F.Q.prototype={
ct:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.by(this.cx,s,p,u,t,r,q,a,o)},
cs:function(){return this.ct(null)},
sa0:function(a,b){var u
if(!J.E(this.f,b)){this.f=b
u=this.a
if(u!=null)u.P()}},
sey:function(a){var u
a=a==null?null:a.m(0,Math.sqrt(a.v(a)))
if(!J.E(this.r,a)){this.r=a
u=this.a
if(u!=null)u.P()}},
sbp:function(a){var u
a=a==null?null:a.m(0,Math.sqrt(a.v(a)))
if(!J.E(this.x,a)){this.x=a
u=this.a
if(u!=null)u.P()}},
scP:function(a){var u
if(!J.E(this.y,a)){this.y=a
u=this.a
if(u!=null)u.P()}},
scQ:function(a){var u
if(!J.E(this.z,a)){this.z=a
u=this.a
if(u!=null)u.P()}},
sV:function(a,b){var u
if(!J.E(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.P()}},
seU:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.P()}},
jA:function(a){var u,t
if(a.u(0,$.aQ())){u=this.f
t=[P.w]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.aP())){u=this.r
t=[P.w]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.aO())){u=this.x
t=[P.w]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.bl())){u=this.y
t=[P.w]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.u(0,$.bm())){u=this.z
t=[P.w]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.bF())){u=this.Q
t=[P.w]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.cW())){u=this.Q
if(u==null)return H.c([1,1,1,1],[P.w])
else return u.cR(0)}else if(a.u(0,$.c0()))return H.c([this.ch],[P.w])
else if(a.u(0,$.bk())){u=this.cx
t=[P.w]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.w])},
cp:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.bU()
this.d.H(0,new F.it(u))
u=u.a
this.r=u.m(0,Math.sqrt(u.v(u)))
u=this.a
if(u!=null){u.P()
u=this.a.e
if(u!=null)u.at(0)}return!0},
co:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.bU()
this.d.H(0,new F.is(u))
u=u.a
this.x=u.m(0,Math.sqrt(u.v(u)))
u=this.a
if(u!=null){u.P()
u=this.a.e
if(u!=null)u.at(0)}return!0},
er:function(a){var u,t,s,r
u=this.c.b.length
for(t=0;t<u;++t){s=this.c.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.b
s.a.a.p()
s=s.e
a.a.a.p()
if(s==a.e)return r}return},
jt:function(a){var u=this.er(a)
if(u!=null)return u
return a.er(this)},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
A:function(a){var u,t,s
u=H.c([],[P.o])
C.a.h(u,C.j.ag(J.aw(this.e),0))
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
C.a.h(u,V.N(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.D(u,", ")
return a+"{"+s+"}"},
M:function(){return this.A("")}}
F.it.prototype={
$1:function(a){var u,t
H.j(a,"$iY")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:5}
F.is.prototype={
$1:function(a){var u,t
H.j(a,"$iY")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:5}
F.ii.prototype={
p:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.i(P.p("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.P()
return!0},
j2:function(a,b,c,d,e,f,g,h,i){var u=F.by(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
aP:function(a,b,c,d,e,f){return this.j2(a,null,b,c,null,d,e,f,0)},
Z:function(a,b,c){var u=F.by(null,null,null,new V.a1(a,b,c),null,null,null,null,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
w:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.i(P.p("May not remove a vertex without first making it empty."))
b.a=null
C.a.w(this.c,b)
u.P()
this.b=!0
return!0},
aq:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].cp()
return!0},
aQ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].co()
return!0},
bq:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.m(0,Math.sqrt(p*p+o*o+n*n))
if(!J.E(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.M()},
A:function(a){var u,t,s,r
this.p()
u=H.c([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].A(a))
return C.a.D(u,"\n")},
M:function(){return this.A("")},
siz:function(a){this.c=H.k(a,"$ib",[F.Q],"$ab")}}
F.ij.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.h(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.h(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
H:function(a,b){H.l(b,{func:1,ret:-1,args:[F.Y]})
C.a.H(this.b,b)
C.a.H(this.c,new F.ik(this,b))
C.a.H(this.d,new F.il(this,b))},
i:function(a){return this.M()},
A:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].A(a))
return C.a.D(u,"\n")},
M:function(){return this.A("")},
sfP:function(a){this.b=H.k(a,"$ib",[F.Y],"$ab")},
sfQ:function(a){this.c=H.k(a,"$ib",[F.Y],"$ab")},
sfR:function(a){this.d=H.k(a,"$ib",[F.Y],"$ab")}}
F.ik.prototype={
$1:function(a){H.j(a,"$iY")
if(!J.E(a.a,this.a))this.b.$1(a)},
$S:5}
F.il.prototype={
$1:function(a){var u
H.j(a,"$iY")
u=this.a
if(!J.E(a.a,u)&&!J.E(a.b,u))this.b.$1(a)},
$S:5}
F.io.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.h(u,s)
return u[s]}else{if(b<0)return H.h(u,b)
return u[b]}},
i:function(a){return this.M()},
A:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].A(a))
return C.a.D(u,"\n")},
M:function(){return this.A("")},
sfZ:function(a){this.b=H.k(a,"$ib",[F.af],"$ab")},
sh_:function(a){this.c=H.k(a,"$ib",[F.af],"$ab")}}
F.ip.prototype={}
F.e_.prototype={
aU:function(a,b,c){return J.E(b.f,c.f)}}
F.iq.prototype={}
F.im.prototype={
aF:function(a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a4,"$ib",[F.Q],"$ab")
for(u=a4.length,t=0,s=null,r=null,q=null,p=0,o=null,n=0,m=null,l=0,k=null,j=0,i=0,h=0;h<u;++h){g=a4[h]
f=g.f
if(f!=null){s=s==null?f:new V.a1(s.a+f.a,s.b+f.b,s.c+f.c);++t}e=g.r
if(e!=null)r=r==null?e:new V.z(r.a+e.a,r.b+e.b,r.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.z(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){m=m==null?c:new V.W(m.a+c.a,m.b+c.b);++n}b=g.z
if(b!=null){k=k==null?b:new V.z(k.a+b.a,k.b+b.b,k.c+b.c);++l}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(o==null){a=[a0,a1,a2,a]
o=new V.bi(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
o=new V.bi(o.a+a0,o.b+a1,o.c+a2,o.d+a)}++p}a=g.ch
if(typeof a!=="number")return H.C(a)
i+=a;++j}a3=F.by(null,null,null,null,null,null,null,null,0)
if(t<=0||s==null)a3.sa0(0,null)
else a3.sa0(0,s.m(0,t))
if(r==null)a3.sey(null)
else a3.sey(r.m(0,Math.sqrt(r.v(r))))
if(q==null)a3.sbp(null)
else a3.sbp(q.m(0,Math.sqrt(q.v(q))))
if(n<=0||m==null)a3.scP(null)
else a3.scP(m.m(0,n))
if(l<=0||k==null)a3.scQ(null)
else a3.scQ(k.m(0,l))
if(p<=0||o==null)a3.sV(0,null)
else{u=o.m(0,p)
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
a3.sV(0,new V.K(a,a0,a1,u))}if(j<=0)a3.seU(0,0)
else a3.seU(0,i/j)
return a3}}
F.ir.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.M()},
A:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].A(a))
return C.a.D(u,"\n")},
M:function(){return this.A("")},
sc6:function(a){this.b=H.k(a,"$ib",[F.bu],"$ab")}}
O.dh.prototype={
gq:function(){var u=this.rx
if(u==null){u=D.S()
this.rx=u}return u},
Y:function(a){var u=this.rx
if(u!=null)u.E(a)},
scY:function(a){var u
if(!this.Q){this.Q=!0
u=new D.G("showFilled",!1,!0,this,[P.a6])
u.b=!0
this.Y(u)}},
scZ:function(a){var u
if(!this.ch){this.ch=!0
u=new D.G("showWireFrame",!1,!0,this,[P.a6])
u.b=!0
this.Y(u)}},
se_:function(a){var u,t
if(!this.c.u(0,a)){u=this.c
this.c=a
t=new D.G("diffuse1",u,a,this,[V.K])
t.b=!0
this.Y(t)}},
sdS:function(a){var u,t
if(!this.d.u(0,a)){u=this.d
this.d=a
t=new D.G("ambient1",u,a,this,[V.K])
t.b=!0
this.Y(t)}},
ac:function(a,b){},
eM:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.j(a.fr.j(0,"Inspection"),"$idg")
if(u==null){t=a.a
u=new A.dg(t,"Inspection")
u.d7(t,"Inspection")
u.ev(0,$.lx,$.lw)
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"normAttr")
u.ch=u.x.j(0,"clrAttr")
u.cx=u.x.j(0,"binmAttr")
u.cy=H.f(u.y.j(0,"lightVec"),"$iI")
u.db=H.f(u.y.j(0,"ambientClr"),"$icw")
u.dx=H.f(u.y.j(0,"diffuseClr"),"$icw")
u.dy=H.f(u.y.j(0,"weightScalar"),"$iZ")
u.fr=H.f(u.y.j(0,"viewMat"),"$iak")
u.fx=H.f(u.y.j(0,"viewObjMatrix"),"$iak")
u.fy=H.f(u.y.j(0,"projViewObjMatrix"),"$iak")
a.dR(u)}this.a=u}if(b.e==null){b.d.aq()
b.d.aQ()
b.d.bq()
t=new Z.d2()
t.sh5(new H.aF([P.o,Z.bn]))
b.e=t}t=this.a
t.ao(a)
s=this.r2
r=t.dy
C.b.K(r.a,r.d,s)
s=this.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
C.b.t(r.a,r.d,q,p,s)
s=a.db
s=s.gJ(s)
p=t.fr
p.toString
p.a8(s.a4(0,!0))
s=a.geT()
p=t.fx
p.toString
p.a8(s.a4(0,!0))
s=a.geI()
t=t.fy
t.toString
t.a8(s.a4(0,!0))
t=b.e
if(t instanceof Z.d2){s=a.a
C.b.aB(s,1,1)
if(b.c==null){C.b.cv(s,2929)
C.b.ar(s,3042)
C.b.aB(s,1,1)
C.b.ar(s,2929)
C.b.aB(s,770,771)}else{C.b.ar(s,2929)
C.b.ar(s,3042)
C.b.aB(s,770,771)
if(this.Q)this.dG(a,t,b.c,"shapeFill",this.gie(),this.d,this.c)
C.b.cv(s,2929)
C.b.aB(s,1,1)
if(this.ch)this.dG(a,t,b.c,"wireFrame",this.giA(),this.f,this.e)
C.b.ar(s,2929)
C.b.aB(s,770,771)}}else b.e=null
t=this.a
t.toString
C.b.cT(a.a,null)
t.x.e0()},
dG:function(a,b,c,d,e,f,g){var u,t
H.l(e,{func:1,ret:F.ap,args:[F.ap]})
u=b.a.j(0,d)
if(u==null){u=this.fC(a,e.$1(c))
b.a.a2(0,d,u)}t=this.a
t.db.cW(f)
t.dx.cW(g)
u.jL(a)},
fC:function(a,b){var u,t,s
u=$.aQ()
t=$.aP()
s=b.dW(new Z.e1(a.a),new Z.aN(u.a|t.a|$.aO().a|$.bF().a))
s.ae($.aQ()).e=this.a.z.c
s.ae($.aP()).e=this.a.Q.c
s.ae($.bF()).e=this.a.ch.c
s.ae($.aO()).e=this.a.cx.c
return s},
ig:function(a){var u,t,s
u=F.aI()
t=a.a
t.toString
s=H.l(new O.fB(u,new V.K(1,1,1,1)),{func:1,ret:-1,args:[F.Q]})
C.a.H(t.c,s)
s=a.d
s.toString
t=H.l(new O.fC(u),{func:1,ret:-1,args:[F.Y]})
C.a.H(s.b,t)
return u},
dN:function(a,b){var u,t,s,r
u={}
u.a=b
t=F.aI()
u.a=new V.K(0,0.7,1,1)
s=a.a
s.toString
u=H.l(new O.fE(u,t),{func:1,ret:-1,args:[F.Q]})
C.a.H(s.c,u)
u=new O.fD(t)
s=a.c
s.toString
r=H.l(new O.fF(t,u),{func:1,ret:-1,args:[F.af]})
C.a.H(s.b,r)
r=a.d
r.toString
u=H.l(new O.fG(t,u),{func:1,ret:-1,args:[F.Y]})
C.a.H(r.b,u)
return t},
iB:function(a){return this.dN(a,null)}}
O.fB.prototype={
$1:function(a){var u,t
H.j(a,"$iQ")
u=this.a.a
t=a.cs()
t.sV(0,this.b)
t.sbp(V.bU())
u.h(0,t)},
$S:22}
O.fC.prototype={
$1:function(a){var u,t,s,r,q,p
H.j(a,"$iY")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.p()
t=t.e
q=C.a.j(s.c,t)
t=u.a
s=a.c
s.a.a.p()
s=s.e
p=C.a.j(t.c,s)
u.d.dP(0,r,q,p)},
$S:5}
O.fE.prototype={
$1:function(a){var u,t
H.j(a,"$iQ")
u=this.b.a
t=a.cs()
t.sV(0,this.a.a)
t.sbp(V.bU())
u.h(0,t)},
$S:22}
O.fD.prototype={
$2:function(a,b){if(a.jt(b)==null)this.a.c.cf(0,a,b)},
$S:39}
O.fF.prototype={
$1:function(a){var u,t,s,r
H.j(a,"$iaf")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.j(t.c,s)
u=u.a
s=a.b
s.a.a.p()
s=s.e
this.b.$2(r,C.a.j(u.c,s))},
$S:40}
O.fG.prototype={
$1:function(a){var u,t,s,r,q,p
H.j(a,"$iY")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.p()
t=t.e
q=C.a.j(s.c,t)
u=u.a
t=a.c
t.a.a.p()
t=t.e
p=C.a.j(u.c,t)
t=this.b
t.$2(r,q)
t.$2(q,p)
t.$2(p,r)},
$S:5}
O.du.prototype={
gq:function(){var u=this.dy
if(u==null){u=D.S()
this.dy=u}return u},
Y:function(a){var u
H.j(a,"$iu")
u=this.dy
if(u!=null)u.E(a)},
fq:function(){return this.Y(null)},
dH:function(a){H.j(a,"$iu")
this.a=null
this.Y(a)},
i6:function(){return this.dH(null)},
hb:function(a,b){var u=V.ah
u=new D.br(a,H.k(b,"$ie",[u],"$ae"),this,[u])
u.b=!0
this.Y(u)},
hd:function(a,b){var u=V.ah
u=new D.bs(a,H.k(b,"$ie",[u],"$ae"),this,[u])
u.b=!0
this.Y(u)},
dl:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.aa(u.e.length+3,4)*4
s=C.h.aa(u.f.length+3,4)*4
r=C.h.aa(u.r.length+3,4)*4
q=C.h.aa(u.x.length+3,4)*4
p=C.h.aa(u.y.length+3,4)*4
o=C.h.aa(u.z.length+3,4)*4
n=C.h.aa(this.e.a.length+3,4)*4
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
a7=$.aQ()
if(a0){b=$.aP()
a7=new Z.aN(a7.a|b.a)}if(a1){b=$.aO()
a7=new Z.aN(a7.a|b.a)}if(a2){b=$.bl()
a7=new Z.aN(a7.a|b.a)}if(a3){b=$.bm()
a7=new Z.aN(a7.a|b.a)}if(a5){b=$.bk()
a7=new Z.aN(a7.a|b.a)}return new A.h_(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
U:function(a,b){H.k(a,"$ib",[T.dK],"$ab")},
ac:function(a,b){var u
for(u=this.dx.a,u=new J.al(u,u.length,0,[H.x(u,0)]);u.B();)C.m.ac(u.d,b)},
eM:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dl()
t=H.j(a2.fr.j(0,u.aj),"$idt")
if(t==null){t=A.lF(u,a2.a)
a2.dR(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bs
u=a3.e
if(!(u instanceof Z.bn)){a3.e=null
u=null}if(u==null||!u.d.u(0,r)){u=s.r1
if(u)a3.d.aq()
q=s.r2
if(q)a3.d.aQ()
p=s.ry
if(p)a3.d.bq()
o=a3.d.dW(new Z.e1(a2.a),r)
o.ae($.aQ()).e=this.a.Q.c
if(u)o.ae($.aP()).e=this.a.cx.c
if(q)o.ae($.aO()).e=this.a.ch.c
if(s.rx)o.ae($.bl()).e=this.a.cy.c
if(p)o.ae($.bm()).e=this.a.db.c
if(s.x1)o.ae($.bk()).e=this.a.dx.c
a3.e=o}u=T.dK
n=H.c([],[u])
this.a.ao(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.gJ(p)
q=q.dy
q.toString
q.a8(p.a4(0,!0))}if(s.fy){q=this.a
p=a2.geT()
q=q.fr
q.toString
q.a8(p.a4(0,!0))}q=this.a
p=a2.geI()
q=q.fy
q.toString
q.a8(p.a4(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.a8(C.m.a4(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.a8(C.m.a4(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.a8(C.m.a4(p,!0))}if(s.as>0){m=this.e.a.length
q=this.a.k4
C.b.S(q.a,q.d,m)
for(q=[P.w],l=0;l<m;++l){p=this.a
k=this.e.a
if(l>=k.length)return H.h(k,l)
k=k[l]
p.toString
H.j(k,"$iah")
p=p.r1
if(l>=p.length)return H.h(p,l)
p=p[l]
j=new Float32Array(H.cQ(H.k(k.a4(0,!0),"$ib",q,"$ab")))
C.b.eS(p.a,p.d,!1,j)}}switch(s.a){case C.c:break
case C.f:q=this.a
p=this.f.f
q=q.r2
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.d:this.U(n,this.f.d)
q=this.a
p=this.f.d
q.ah(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.e:this.U(n,this.f.e)
q=this.a
p=this.f.e
q.ad(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.f:q=this.a
p=this.r.f
q=q.x2
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.d:this.U(n,this.r.d)
q=this.a
p=this.r.d
q.ah(q.y1,q.as,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.e:this.U(n,this.r.e)
q=this.a
p=this.r.e
q.ad(q.y2,q.as,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}switch(s.c){case C.c:break
case C.f:q=this.a
p=this.x.f
q=q.aj
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.d:this.U(n,this.x.d)
q=this.a
p=this.x.d
q.ah(q.bs,q.bt,p)
p=this.a
q=this.x.f
p=p.aj
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.e:this.U(n,this.x.e)
q=this.a
p=this.x.e
q.ad(q.e6,q.bt,p)
p=this.a
q=this.x.f
p=p.aj
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}switch(s.d){case C.c:break
case C.f:q=this.a
p=this.y.f
q=q.bu
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.d:this.U(n,this.y.d)
q=this.a
p=this.y.d
q.ah(q.e7,q.bv,p)
p=this.a
q=this.y.f
p=p.bu
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.e:this.U(n,this.y.e)
q=this.a
p=this.y.e
q.ad(q.e8,q.bv,p)
p=this.a
q=this.y.f
p=p.bu
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}switch(s.e){case C.c:break
case C.f:q=this.a
p=this.z.f
q=q.bw
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
p=this.a
i=this.z.ch
p=p.by
C.b.K(p.a,p.d,i)
break
case C.d:this.U(n,this.z.d)
q=this.a
p=this.z.d
q.ah(q.e9,q.bx,p)
p=this.a
q=this.z.f
p=p.bw
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.by
C.b.K(q.a,q.d,i)
break
case C.e:this.U(n,this.z.e)
q=this.a
p=this.z.e
q.ad(q.ea,q.bx,p)
p=this.a
q=this.z.f
p=p.bw
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.by
C.b.K(q.a,q.d,i)
break}if(s.z>0){m=this.dx.e.length
q=this.a.el
C.b.S(q.a,q.d,m)
q=a2.db
h=q.gJ(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.B)(q),++f){e=q[f]
k=this.a.cw
if(g>=k.length)return H.h(k,g)
d=k[g]
k=h.eQ(e.gbr(e))
i=k.a
c=k.b
b=k.c
b=k.m(0,Math.sqrt(i*i+c*c+b*b))
c=d.b
i=b.a
k=b.b
b=b.c
C.b.t(c.a,c.d,i,k,b)
b=e.gV(e)
k=d.c
C.b.t(k.a,k.d,b.a,b.b,b.c);++g}}if(s.Q>0){m=this.dx.f.length
q=this.a.em
C.b.S(q.a,q.d,m)
q=a2.db
h=q.gJ(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.B)(q),++f){e=q[f]
k=this.a.cz
if(g>=k.length)return H.h(k,g)
d=k[g]
k=e.gbd(e)
i=d.b
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=h.bg(e.gbd(e))
i=d.c
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gV(e)
i=d.d
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gck()
i=d.e
C.b.K(i.a,i.d,k)
k=e.gcl()
i=d.f
C.b.K(i.a,i.d,k)
k=e.gcm()
i=d.r
C.b.K(i.a,i.d,k);++g}}if(s.ch>0){m=this.dx.r.length
q=this.a.en
C.b.S(q.a,q.d,m)
q=a2.db
h=q.gJ(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.B)(q),++f){e=q[f]
k=this.a.cA
if(g>=k.length)return H.h(k,g)
d=k[g]
k=e.gbd(e)
i=d.b
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gbr(e).kf()
i=d.c
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=h.bg(e.gbd(e))
i=d.d
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gV(e)
i=d.e
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gke()
i=d.f
C.b.K(i.a,i.d,k)
k=e.gkd()
i=d.r
C.b.K(i.a,i.d,k)
k=e.gck()
i=d.x
C.b.K(i.a,i.d,k)
k=e.gcl()
i=d.y
C.b.K(i.a,i.d,k)
k=e.gcm()
i=d.z
C.b.K(i.a,i.d,k);++g}}if(s.cx>0){m=this.dx.x.length
q=this.a.eo
C.b.S(q.a,q.d,m)
q=a2.db
h=q.gJ(q)
for(q=this.dx.x,p=q.length,k=[u],g=0,f=0;f<q.length;q.length===p||(0,H.B)(q),++f){e=q[f]
i=this.a.cB
if(g>=i.length)return H.h(i,g)
d=i[g]
i=e.gbe()
H.k(n,"$ib",k,"$ab")
if(!C.a.aS(n,i)){i.sb7(0,n.length)
C.a.h(n,i)}i=e.gbr(e)
c=d.d
C.b.t(c.a,c.d,i.a,i.b,i.c)
i=e.gaH()
c=d.b
C.b.t(c.a,c.d,i.a,i.b,i.c)
i=e.gbJ(e)
c=d.c
C.b.t(c.a,c.d,i.a,i.b,i.c)
i=h.eQ(e.gbr(e))
c=i.a
b=i.b
a=i.c
a=i.m(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
i=a.b
a=a.c
C.b.t(b.a,b.d,c,i,a)
a=e.gV(e)
i=d.f
C.b.t(i.a,i.d,a.a,a.b,a.c)
a=e.gbe()
i=a.gb9(a)
if(!i){i=d.x
C.b.S(i.a,i.d,1)}else{i=d.r
c=a.gb9(a)
b=i.a
i=i.d
if(!c)C.b.S(b,i,0)
else C.b.S(b,i,a.gb7(a))
i=d.x
C.b.S(i.a,i.d,0)}++g}}if(s.cy>0){m=this.dx.y.length
q=this.a.ep
C.b.S(q.a,q.d,m)
q=a2.db
h=q.gJ(q)
for(q=this.dx.y,p=q.length,k=[P.w],i=[u],g=0,f=0;f<q.length;q.length===p||(0,H.B)(q),++f){e=q[f]
c=this.a.cC
if(g>=c.length)return H.h(c,g)
d=c[g]
c=e.gbe()
H.k(n,"$ib",i,"$ab")
if(!C.a.aS(n,c)){c.sb7(0,n.length)
C.a.h(n,c)}a0=h.n(0,e.gJ(e))
c=e.gJ(e)
b=$.cp
if(b==null){b=new V.a1(0,0,0)
$.cp=b}b=c.bg(b)
c=d.b
C.b.t(c.a,c.d,b.a,b.b,b.c)
c=$.cp
if(c==null){c=new V.a1(0,0,0)
$.cp=c}c=a0.bg(c)
b=d.c
C.b.t(b.a,b.d,c.a,c.b,c.c)
c=a0.ew(0)
b=d.d
j=new Float32Array(H.cQ(H.k(new V.dw(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a4(0,!0),"$ib",k,"$ab")))
C.b.eR(b.a,b.d,!1,j)
b=e.gV(e)
c=d.e
C.b.t(c.a,c.d,b.a,b.b,b.c)
b=e.gbe()
c=b.gb9(b)
if(!c){c=d.r
C.b.S(c.a,c.d,1)}else{c=d.f
a=b.gb9(b)
a1=c.a
c=c.d
if(!a)C.b.S(a1,c,0)
else C.b.S(a1,c,b.gb7(b))
c=d.r
C.b.S(c.a,c.d,0)}c=e.gck()
b=d.x
C.b.K(b.a,b.d,c)
c=e.gcl()
b=d.y
C.b.K(b.a,b.d,c)
c=e.gcm()
b=d.z
C.b.K(b.a,b.d,c);++g}}if(s.db>0){m=this.dx.z.length
q=this.a.eq
C.b.S(q.a,q.d,m)
q=a2.db
h=q.gJ(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.B)(q),++f){e=q[f]
k=this.a.cD
if(g>=k.length)return H.h(k,g)
d=k[g]
k=e.gbe()
H.k(n,"$ib",u,"$ab")
if(!C.a.aS(n,k)){k.sb7(0,n.length)
C.a.h(n,k)}k=e.gbd(e)
i=d.b
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gbr(e)
i=d.c
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gaH()
i=d.d
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gbJ(e)
i=d.e
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=h.bg(e.gbd(e))
i=d.f
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gbe()
i=k.gb9(k)
if(!i){k=d.x
C.b.S(k.a,k.d,1)}else{i=d.r
c=k.gb9(k)
b=i.a
i=i.d
if(!c)C.b.S(b,i,0)
else C.b.S(b,i,k.gb7(k))
k=d.x
C.b.S(k.a,k.d,0)}k=e.gV(e)
i=d.y
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gkg()
i=d.z
C.b.K(i.a,i.d,k)
k=e.gkh()
i=d.Q
C.b.K(i.a,i.d,k)
k=e.gck()
i=d.ch
C.b.K(i.a,i.d,k)
k=e.gcl()
i=d.cx
C.b.K(i.a,i.d,k)
k=e.gcm()
i=d.cy
C.b.K(i.a,i.d,k);++g}}}switch(s.f){case C.c:break
case C.f:break
case C.d:this.U(n,this.Q.d)
u=this.a
q=this.Q.d
u.ah(u.eb,u.bz,q)
break
case C.e:this.U(n,this.Q.e)
u=this.a
q=this.Q.e
u.ad(u.ec,u.bz,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.gJ(q).ew(0)
a2.Q=q}u=u.id
u.toString
u.a8(q.a4(0,!0))}if(s.dy){this.U(n,this.ch)
u=this.a
q=this.ch
u.ad(u.ed,u.ee,q)
switch(s.r){case C.c:break
case C.f:u=this.a
q=this.cx.f
u=u.bA
u.toString
p=q.a
k=q.b
q=q.c
C.b.t(u.a,u.d,p,k,q)
break
case C.d:this.U(n,this.cx.d)
u=this.a
q=this.cx.d
u.ah(u.ef,u.bB,q)
q=this.a
u=this.cx.f
q=q.bA
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
break
case C.e:this.U(n,this.cx.e)
u=this.a
q=this.cx.e
u.ad(u.eg,u.bB,q)
q=this.a
u=this.cx.f
q=q.bA
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
break}switch(s.x){case C.c:break
case C.f:u=this.a
q=this.cy.f
u=u.bD
u.toString
p=q.a
k=q.b
q=q.c
C.b.t(u.a,u.d,p,k,q)
q=this.a
k=this.cy.ch
q=q.bC
C.b.K(q.a,q.d,k)
break
case C.d:this.U(n,this.cy.d)
u=this.a
q=this.cy.d
u.ah(u.eh,u.bE,q)
q=this.a
u=this.cy.f
q=q.bD
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bC
C.b.K(u.a,u.d,k)
break
case C.e:this.U(n,this.cy.e)
u=this.a
q=this.cy.e
u.ad(u.ei,u.bE,q)
q=this.a
u=this.cy.f
q=q.bD
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bC
C.b.K(u.a,u.d,k)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.f:u=this.a
p=this.db.f
u=u.bF
C.b.K(u.a,u.d,p)
break
case C.d:this.U(n,this.db.d)
u=this.a
p=this.db.d
u.ah(u.ej,u.bG,p)
p=this.a
u=this.db.f
p=p.bF
C.b.K(p.a,p.d,u)
break
case C.e:this.U(n,this.db.e)
u=this.a
p=this.db.e
u.ad(u.ek,u.bG,p)
p=this.a
u=this.db.f
p=p.bF
C.b.K(p.a,p.d,u)
break}u=a2.a
C.b.ar(u,3042)
C.b.aB(u,770,771)}for(l=0;l<n.length;++l)n[l].ao(a2)
u=H.f(a3.e,"$ibn")
u.ao(a2)
u.ak(a2)
u.cS(a2)
if(q)C.b.cv(a2.a,3042)
for(l=0;l<n.length;++l)n[l].cS(a2)
u=this.a
u.toString
C.b.cT(a2.a,null)
u.x.e0()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dl().aj},
sfB:function(a){this.e=H.k(a,"$ia0",[V.ah],"$aa0")}}
O.fY.prototype={
cb:function(a){var u=this.f
if(!(Math.abs(u-a)<$.J().a)){this.f=a
u=new D.G(this.b,u,a,this,[P.w])
u.b=!0
this.a.Y(u)}},
az:function(){this.d3()
this.cb(1)},
sbM:function(a,b){var u
if(b<=0)this.j8(0)
else if(this.c===C.c){this.c=C.f
this.d4()
this.cb(1)
u=this.a
u.a=null
u.Y(null)}this.cb(b)}}
O.dv.prototype={
az:function(){},
aN:function(){},
j8:function(a){var u
if(this.c!==C.c){this.c=C.c
u=this.a
u.a=null
u.Y(null)}this.az()
this.a.Y(null)}}
O.fZ.prototype={}
O.b_.prototype={
cc:function(a){var u,t
if(!J.E(this.f,a)){u=this.f
this.f=a
t=new D.G(this.b+".color",u,a,this,[V.a3])
t.b=!0
this.a.Y(t)}},
az:function(){this.d3()
this.cc(new V.a3(0,0,0))},
aN:function(){this.d4()
this.cc(new V.a3(1,1,1))},
sV:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.aN()
u=this.a
u.a=null
u.Y(null)}this.cc(b)}}
O.h0.prototype={
dJ:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.J().a)){this.ch=a
u=new D.G(this.b+".refraction",u,a,this,[P.w])
u.b=!0
this.a.Y(u)}},
az:function(){this.d5()
this.dJ(1)},
aN:function(){this.d6()
this.dJ(1)}}
O.h1.prototype={
dK:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.J().a)){this.ch=a
u=new D.G(this.b+".shininess",u,a,this,[P.w])
u.b=!0
this.a.Y(u)}},
az:function(){this.d5()
this.dK(100)},
aN:function(){this.d6()
this.dK(100)}}
O.bw.prototype={}
T.dK.prototype={}
T.hT.prototype={}
V.eV.prototype={
aT:function(a,b){return!0},
i:function(a){return"all"},
$ibd:1}
V.bd.prototype={}
V.ds.prototype={
aT:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)if(u[s].aT(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
say:function(a){this.a=H.k(a,"$ib",[V.bd],"$ab")},
$ibd:1}
V.bf.prototype={
aT:function(a,b){return!this.fa(0,b)},
i:function(a){return"!["+this.d2(0)+"]"}}
V.hw.prototype={
fd:function(a){var u,t
if(a.a.length<=0)throw H.i(P.p("May not create a SetMatcher with zero characters."))
u=new H.aF([P.A,P.a6])
for(t=new H.dq(a,a.gk(a),0,[H.aE(a,"v",0)]);t.B();)u.a2(0,t.d,!0)
this.si7(u)},
aT:function(a,b){return this.a.dZ(0,b)},
i:function(a){var u=this.a
return P.jI(new H.dp(u,[H.x(u,0)]),0,null)},
si7:function(a){this.a=H.k(a,"$iO",[P.A,P.a6],"$aO")},
$ibd:1}
V.cs.prototype={
D:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cv(this.a.N(0,b))
r.say(H.c([],[V.bd]))
r.c=!1
C.a.h(this.c,r)
return r},
jr:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.aT(0,a))return r}return},
i:function(a){return this.b},
siu:function(a){this.c=H.k(a,"$ib",[V.cv],"$ab")}}
V.dP.prototype={
i:function(a){var u,t
u=H.l0(this.b,"\n","\\n")
t=H.l0(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cu.prototype={
i:function(a){return this.b},
si2:function(a){var u=P.o
this.c=H.k(a,"$iO",[u,u],"$aO")}}
V.hW.prototype={
N:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cs(this,b)
u.siu(H.c([],[V.cv]))
u.d=null
this.a.a2(0,b,u)}return u},
bf:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cu(this,a)
t=P.o
u.si2(new H.aF([t,t]))
this.b.a2(0,a,u)}return u},
k8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.dP])
t=this.c
s=[P.A]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.bj(a,o)
m=t.jr(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.jI(r,0,null)
throw H.i(P.p("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.jI(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dP(j==null?k.b:j,l,o)}++o}}},
sij:function(a){this.a=H.k(a,"$iO",[P.o,V.cs],"$aO")},
sim:function(a){this.b=H.k(a,"$iO",[P.o,V.cu],"$aO")}}
V.cv.prototype={
i:function(a){return this.b.b+": "+this.d2(0)}}
X.d4.prototype={$ibe:1}
X.fx.prototype={
gq:function(){var u=this.x
if(u==null){u=D.S()
this.x=u}return u}}
X.dB.prototype={
gq:function(){var u=this.f
if(u==null){u=D.S()
this.f=u}return u},
av:function(a){var u
H.j(a,"$iu")
u=this.f
if(u!=null)u.E(a)},
ft:function(){return this.av(null)},
sX:function(a){var u,t
if(!J.E(this.b,a)){u=this.b
if(u!=null)u.gq().w(0,this.gbi())
t=this.b
this.b=a
if(a!=null)a.gq().h(0,this.gbi())
u=new D.G("mover",t,this.b,this,[U.aa])
u.b=!0
this.av(u)}},
saG:function(a){var u,t
if(!J.E(this.a,a)){u=this.a
if(u!=null)u.gq().w(0,this.gbi())
t=this.a
this.a=a
if(a!=null)a.gq().h(0,this.gbi())
u=new D.G("premover",t,this.a,this,[U.aa])
u.b=!0
this.av(u)}},
$ibe:1,
$id4:1}
X.dJ.prototype={}
V.hA.prototype={
fe:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.r).a_(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.r.a_(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.a_(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.a_(q,p)}o=u.createElement("div")
this.a=o
C.k.a_(q,o)
this.b=null
o=W.m
W.ad(u,"scroll",H.l(new V.hC(s),{func:1,ret:-1,args:[o]}),!1,o)},
j0:function(a,b,c){var u,t,s,r
a=H.ae(C.h.j7(a,0,4))
if(c.length===0)c=P.kE(C.v,b,C.q,!1)
u=document.createElement("div")
u.className="textHeader"
u.id=c
t=u.style
s=""+(28-a*3)+"px"
t.fontSize=s
r=W.ll(null)
r.href="#"+c
r.textContent=b
C.k.a_(u,r)
C.k.a_(this.a,u)},
ci:function(a,b){return this.j0(a,b,"")},
ai:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.o],"$ab")
this.ia()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.k8(C.a.jy(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.a_(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.a_(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.a_(t,o)
break
case"Link":n=p.b
if(H.mB(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.V(m[1])
l.textContent=H.V(m[0])
C.k.a_(t,l)}else{k=P.kE(C.v,n,C.q,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.k.a_(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.a_(t,o)
break}}C.k.a_(this.a,t)},
cj:function(a){var u=W.k6(null,null)
u.className="pageLargeCanvas"
u.id=a
C.k.a_(this.a,u)},
ia:function(){var u,t,s,r
if(this.b!=null)return
u=new V.hW()
t=P.o
u.sij(new H.aF([t,V.cs]))
u.sim(new H.aF([t,V.cu]))
u.c=null
u.c=u.N(0,"Start")
t=u.N(0,"Start").D(0,"Bold")
s=V.aj(new H.a8("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Bold").D(0,"Bold")
s=new V.bf()
r=[V.bd]
s.say(H.c([],r))
C.a.h(t.a,s)
t=V.aj(new H.a8("*"))
C.a.h(s.a,t)
t=u.N(0,"Bold").D(0,"BoldEnd")
s=V.aj(new H.a8("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Start").D(0,"Italic")
s=V.aj(new H.a8("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Italic").D(0,"Italic")
s=new V.bf()
s.say(H.c([],r))
C.a.h(t.a,s)
t=V.aj(new H.a8("_"))
C.a.h(s.a,t)
t=u.N(0,"Italic").D(0,"ItalicEnd")
s=V.aj(new H.a8("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Start").D(0,"Code")
s=V.aj(new H.a8("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Code").D(0,"Code")
s=new V.bf()
s.say(H.c([],r))
C.a.h(t.a,s)
t=V.aj(new H.a8("`"))
C.a.h(s.a,t)
t=u.N(0,"Code").D(0,"CodeEnd")
s=V.aj(new H.a8("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Start").D(0,"LinkHead")
s=V.aj(new H.a8("["))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"LinkHead").D(0,"LinkTail")
s=V.aj(new H.a8("|"))
C.a.h(t.a,s)
s=u.N(0,"LinkHead").D(0,"LinkEnd")
t=V.aj(new H.a8("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,"LinkHead").D(0,"LinkHead")
t=new V.bf()
t.say(H.c([],r))
C.a.h(s.a,t)
s=V.aj(new H.a8("|]"))
C.a.h(t.a,s)
s=u.N(0,"LinkTail").D(0,"LinkEnd")
t=V.aj(new H.a8("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,"LinkTail").D(0,"LinkTail")
t=new V.bf()
t.say(H.c([],r))
C.a.h(s.a,t)
s=V.aj(new H.a8("|]"))
C.a.h(t.a,s)
C.a.h(u.N(0,"Start").D(0,"Other").a,new V.eV())
s=u.N(0,"Other").D(0,"Other")
t=new V.bf()
t.say(H.c([],r))
C.a.h(s.a,t)
s=V.aj(new H.a8("*_`["))
C.a.h(t.a,s)
s=u.N(0,"BoldEnd")
s.d=s.a.bf("Bold")
s=u.N(0,"ItalicEnd")
s.d=s.a.bf("Italic")
s=u.N(0,"CodeEnd")
s.d=s.a.bf("Code")
s=u.N(0,"LinkEnd")
s.d=s.a.bf("Link")
s=u.N(0,"Other")
s.d=s.a.bf("Other")
this.b=u}}
V.hC.prototype={
$1:function(a){P.kr(C.o,new V.hB(this.a))},
$S:41}
V.hB.prototype={
$0:function(){var u,t,s
u=C.i.al(document.documentElement.scrollTop)
t=this.a.style
s=H.n(-0.01*u)+"px"
t.top=s},
$S:3}
M.jm.prototype={
$1:function(a){H.j(a,"$iu")
this.a.b=!0},
$S:1}
M.jn.prototype={
$1:function(a){H.j(a,"$iu")
this.a.b=!1},
$S:1}
M.jo.prototype={
$1:function(a){var u,t,s,r,q,p
a=H.f(H.j(a,"$iu"),"$iay")
u=this.a
if(!u.b)return
t=u.a
s=a.c
r=a.d.F(0,a.z)
s=new V.P(r.a,r.b).n(0,2).m(0,s.ga1()).b
if(typeof s!=="number")return H.C(s)
q=t+s
u.a=q
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
this.b.sJ(0,V.ai(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=this.c
r=this.d
if(t){s.b=!1
r.b=!1}else{p=Math.sin(u*3.141592653589793)
this.e.sJ(0,V.bO(p,p,p,1))
s.b=!0
r.b=!0}},
$S:1}
M.jp.prototype={
$1:function(a){H.j(a,"$iu")
this.a.b=!0},
$S:1}
M.jq.prototype={
$1:function(a){H.j(a,"$iu")
this.a.b=!1},
$S:1}
M.jr.prototype={
$1:function(a){var u,t,s,r,q,p
a=H.f(H.j(a,"$iu"),"$iay")
u=this.a
if(!u.b)return
t=u.a
s=a.c
r=a.d.F(0,a.z)
s=new V.P(r.a,r.b).n(0,2).m(0,s.ga1()).b
if(typeof s!=="number")return H.C(s)
q=t+s
u.a=q
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
this.b.sJ(0,V.ai(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=this.c
r=this.d
if(t){s.b=!1
r.b=!1}else{p=Math.sin(u*3.141592653589793)
this.e.sJ(0,V.bO(p,p,p,1))
s.b=!0
r.b=!0}},
$S:1}
M.js.prototype={
$1:function(a){H.j(a,"$iu")
this.a.b=!0},
$S:1}
M.jt.prototype={
$1:function(a){H.j(a,"$iu")
this.a.b=!1},
$S:1}
M.ju.prototype={
$1:function(a){var u,t,s,r,q,p
a=H.f(H.j(a,"$iu"),"$iay")
u=this.a
if(!u.b)return
t=a.c
s=a.d
if(new V.W((s.a-t.a-t.c*0.5)*2,(s.b-t.b-t.d*0.5)*2).m(0,t.ga1()).a>0)return
r=u.a
s=s.F(0,a.z)
t=new V.P(s.a,s.b).n(0,2).m(0,t.ga1()).b
if(typeof t!=="number")return H.C(t)
q=r+t
u.a=q
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
this.b.sJ(0,V.ai(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=this.c
r=this.d
if(t){s.b=!1
r.b=!1}else{p=Math.sin(u*3.141592653589793)
this.e.sJ(0,V.bO(p,p,p,1))
s.b=!0
r.b=!0}a.b=!1},
$S:1};(function aliases(){var u=J.a.prototype
u.f8=u.i
u=J.dl.prototype
u.f9=u.i
u=O.dv.prototype
u.d3=u.az
u.d4=u.aN
u=O.b_.prototype
u.d5=u.az
u.d6=u.aN
u=V.ds.prototype
u.fa=u.aT
u.d2=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"md","m_",12)
u(P,"me","m0",12)
u(P,"mf","m1",12)
t(P,"kN","mc",4)
var n
s(n=E.an.prototype,"geD",0,0,null,["$1","$0"],["eE","jJ"],0,0)
s(n,"geF",0,0,null,["$1","$0"],["eG","jK"],0,0)
s(n,"geB",0,0,null,["$1","$0"],["eC","jI"],0,0)
s(n,"gez",0,0,null,["$1","$0"],["eA","jF"],0,0)
r(n,"gjD","jE",8)
r(n,"gjG","jH",8)
s(n=E.dO.prototype,"gd8",0,0,null,["$1","$0"],["da","d9"],0,0)
q(n,"gjX","eN",4)
p(n=X.dW.prototype,"ghq","hr",10)
p(n,"ghe","hf",10)
p(n,"ghk","hl",6)
p(n,"ghu","hv",17)
p(n,"ghs","ht",17)
p(n,"ghy","hz",6)
p(n,"ghC","hD",6)
p(n,"gho","hp",6)
p(n,"ghA","hB",6)
p(n,"ghm","hn",6)
p(n,"ghE","hF",32)
p(n,"ghG","hH",10)
p(n,"ghW","hX",11)
p(n,"ghS","hT",11)
p(n,"ghU","hV",11)
s(n=D.dn.prototype,"gdA",0,0,null,["$1","$0"],["dB","hw"],0,0)
p(n,"ghI","hJ",33)
r(n,"gh8","h9",18)
r(n,"ghM","hN",18)
o(V.P.prototype,"gk","b8",9)
o(V.z.prototype,"gk","b8",9)
o(V.bi.prototype,"gk","b8",9)
s(n=U.cg.prototype,"gaM",0,0,null,["$1","$0"],["O","a6"],0,0)
r(n,"gfn","fo",19)
r(n,"ghK","hL",19)
s(n=U.dX.prototype,"gaM",0,0,null,["$1","$0"],["O","a6"],0,0)
p(n,"gbZ","c_",2)
p(n,"gc0","c1",2)
p(n,"gc2","c3",2)
s(n=U.dY.prototype,"gaM",0,0,null,["$1","$0"],["O","a6"],0,0)
p(n,"gbZ","c_",2)
p(n,"gc0","c1",2)
p(n,"gc2","c3",2)
p(n,"gh1","h2",2)
p(n,"gh3","h4",2)
p(n,"gis","it",2)
p(n,"giq","ir",2)
p(n,"gio","ip",2)
p(U.dZ.prototype,"gh6","h7",2)
s(n=M.d5.prototype,"ga9",0,0,null,["$1","$0"],["a5","bP"],0,0)
r(n,"ghO","hP",20)
r(n,"ghQ","hR",20)
s(n=M.dc.prototype,"ga9",0,0,null,["$1","$0"],["a5","bP"],0,0)
r(n,"ghg","hh",8)
r(n,"ghi","hj",8)
p(n=O.dh.prototype,"gie","ig",37)
s(n,"giA",0,1,null,["$2$color","$1"],["dN","iB"],38,0)
s(n=O.du.prototype,"gfp",0,0,null,["$1","$0"],["Y","fq"],0,0)
s(n,"gi5",0,0,null,["$1","$0"],["dH","i6"],0,0)
r(n,"gha","hb",23)
r(n,"ghc","hd",23)
s(X.dB.prototype,"gbi",0,0,null,["$1","$0"],["av","ft"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.T,null)
s(P.T,[H.jE,J.a,J.al,P.eh,P.e,H.dq,P.aX,H.bL,H.dV,H.hn,H.i0,P.bp,H.c5,H.ey,P.ag,H.fP,H.fQ,H.fK,P.j2,P.ba,P.aC,P.e2,P.hL,P.ct,P.hM,P.am,P.j5,P.j_,P.cG,P.iU,P.v,P.c6,P.j4,P.a6,P.au,P.a4,P.bK,P.hi,P.dI,P.ea,P.fw,P.b,P.O,P.H,P.at,P.o,P.bv,W.f9,W.y,W.dd,P.iV,O.a0,O.ci,E.f2,E.an,E.ho,E.dO,Z.e0,Z.e1,Z.bn,Z.d2,Z.bq,Z.aN,D.f5,D.cd,D.u,X.d3,X.dm,X.fM,X.fT,X.av,X.h8,X.hX,X.dW,D.d9,D.a5,D.dC,D.dH,D.dL,D.dM,D.dN,V.a3,V.K,V.fl,V.dw,V.ah,V.W,V.a1,V.az,V.dF,V.P,V.z,V.bi,U.dX,U.dY,U.dZ,M.dc,M.ao,A.cY,A.eY,A.h_,A.cx,A.cB,A.cz,A.cC,A.cA,A.cD,A.bJ,A.dR,A.i9,F.Y,F.fp,F.af,F.fO,F.bu,F.ap,F.hx,F.hy,F.hz,F.Q,F.ii,F.ij,F.io,F.ip,F.iq,F.ir,O.bw,O.dv,T.hT,V.eV,V.bd,V.ds,V.hw,V.cs,V.dP,V.cu,V.hW,X.d4,X.dJ,X.dB,V.hA])
s(J.a,[J.fI,J.dj,J.dl,J.aY,J.dk,J.ch,H.cn,W.d,W.eU,W.cZ,W.aS,W.aT,W.U,W.e4,W.fd,W.fe,W.e6,W.db,W.e8,W.fg,W.m,W.eb,W.aV,W.fz,W.ed,W.fS,W.h2,W.ei,W.ej,W.b1,W.ek,W.en,W.b2,W.er,W.et,W.b4,W.eu,W.b5,W.ez,W.aJ,W.eC,W.hV,W.b7,W.eE,W.hZ,W.ie,W.eI,W.eK,W.eM,W.eO,W.eQ,P.bc,P.ef,P.bg,P.ep,P.hm,P.eA,P.bh,P.eG,P.eZ,P.e3,P.d0,P.de,P.dD,P.bT,P.dG,P.dS,P.ew])
s(J.dl,[J.hj,J.dT,J.bt])
t(J.jD,J.aY)
s(J.dk,[J.di,J.fJ])
t(P.fR,P.eh)
s(P.fR,[H.dU,W.iC,W.iB,P.fs])
t(H.a8,H.dU)
s(P.e,[H.fj,H.fW,H.iv])
s(P.aX,[H.fX,H.iw])
s(P.bp,[H.hf,H.fL,H.ic,H.i2,H.f4,H.hu,P.dA,P.bb,P.id,P.ib,P.hH,P.f7,P.fc])
s(H.c5,[H.jv,H.hQ,H.jf,H.jg,H.jh,P.iy,P.ix,P.iz,P.iA,P.j3,P.iH,P.iL,P.iI,P.iJ,P.iK,P.iO,P.iP,P.iN,P.iM,P.hN,P.hO,P.j9,P.iY,P.iX,P.iZ,P.fV,P.fh,P.fi,W.h4,W.h6,W.ht,W.hK,W.iG,P.jb,P.ft,P.fu,P.f0,E.hp,E.hq,E.hr,E.hU,D.fn,D.fo,F.j6,F.jc,F.it,F.is,F.ik,F.il,O.fB,O.fC,O.fE,O.fD,O.fF,O.fG,V.hC,V.hB,M.jm,M.jn,M.jo,M.jp,M.jq,M.jr,M.js,M.jt,M.ju])
s(H.hQ,[H.hI,H.c3])
t(P.fU,P.ag)
t(H.aF,P.fU)
t(H.dp,H.fj)
t(H.dx,H.cn)
s(H.dx,[H.cH,H.cJ])
t(H.cI,H.cH)
t(H.cm,H.cI)
t(H.cK,H.cJ)
t(H.dy,H.cK)
s(H.dy,[H.h9,H.ha,H.hb,H.hc,H.hd,H.dz,H.he])
t(P.iW,P.j5)
t(P.iT,P.j_)
t(P.d7,P.hM)
t(P.fk,P.c6)
t(P.ig,P.fk)
t(P.ih,P.d7)
s(P.a4,[P.w,P.A])
s(P.bb,[P.bS,P.fA])
s(W.d,[W.L,W.fr,W.b3,W.cL,W.b6,W.aK,W.cN,W.iu,W.cE,P.f1,P.bH])
s(W.L,[W.a9,W.bo,W.cb])
s(W.a9,[W.t,P.r])
s(W.t,[W.eW,W.eX,W.d_,W.bI,W.ca,W.fv,W.hv])
s(W.aS,[W.c8,W.fa,W.fb])
t(W.f8,W.aT)
t(W.c9,W.e4)
t(W.e7,W.e6)
t(W.da,W.e7)
t(W.e9,W.e8)
t(W.ff,W.e9)
t(W.aU,W.cZ)
t(W.ec,W.eb)
t(W.fq,W.ec)
t(W.ee,W.ed)
t(W.bM,W.ee)
t(W.df,W.cb)
t(W.bx,W.m)
s(W.bx,[W.aZ,W.ab,W.aL])
t(W.h3,W.ei)
t(W.h5,W.ej)
t(W.el,W.ek)
t(W.h7,W.el)
t(W.eo,W.en)
t(W.co,W.eo)
t(W.es,W.er)
t(W.hk,W.es)
t(W.hs,W.et)
t(W.cM,W.cL)
t(W.hE,W.cM)
t(W.ev,W.eu)
t(W.hF,W.ev)
t(W.hJ,W.ez)
t(W.eD,W.eC)
t(W.hR,W.eD)
t(W.cO,W.cN)
t(W.hS,W.cO)
t(W.eF,W.eE)
t(W.hY,W.eF)
t(W.b9,W.ab)
t(W.eJ,W.eI)
t(W.iD,W.eJ)
t(W.e5,W.db)
t(W.eL,W.eK)
t(W.iQ,W.eL)
t(W.eN,W.eM)
t(W.em,W.eN)
t(W.eP,W.eO)
t(W.j0,W.eP)
t(W.eR,W.eQ)
t(W.j1,W.eR)
t(W.iE,P.hL)
t(W.jN,W.iE)
t(W.iF,P.ct)
t(P.ac,P.iV)
t(P.eg,P.ef)
t(P.fN,P.eg)
t(P.eq,P.ep)
t(P.hg,P.eq)
t(P.eB,P.eA)
t(P.hP,P.eB)
t(P.eH,P.eG)
t(P.i_,P.eH)
t(P.f_,P.e3)
t(P.hh,P.bH)
t(P.ex,P.ew)
t(P.hG,P.ex)
s(E.f2,[Z.d1,A.cr,T.dK])
s(D.u,[D.br,D.bs,D.G,X.hl])
s(X.hl,[X.dr,X.ay,X.cl,X.dQ])
s(O.a0,[D.dn,U.cg,M.d5])
s(D.f5,[U.f6,U.aa])
t(U.d6,U.aa)
s(A.cr,[A.dg,A.dt])
s(A.dR,[A.M,A.i6,A.i7,A.i8,A.i4,A.Z,A.i5,A.I,A.cw,A.ia,A.cy,A.ak,A.aq,A.ar])
t(F.hD,F.fp)
t(F.i3,F.fO)
t(F.e_,F.ip)
t(F.im,F.iq)
s(O.bw,[O.dh,O.du])
s(O.dv,[O.fY,O.fZ,O.b_])
s(O.b_,[O.h0,O.h1])
s(V.ds,[V.bf,V.cv])
t(X.fx,X.dJ)
u(H.dU,H.dV)
u(H.cH,P.v)
u(H.cI,H.bL)
u(H.cJ,P.v)
u(H.cK,H.bL)
u(P.eh,P.v)
u(W.e4,W.f9)
u(W.e6,P.v)
u(W.e7,W.y)
u(W.e8,P.v)
u(W.e9,W.y)
u(W.eb,P.v)
u(W.ec,W.y)
u(W.ed,P.v)
u(W.ee,W.y)
u(W.ei,P.ag)
u(W.ej,P.ag)
u(W.ek,P.v)
u(W.el,W.y)
u(W.en,P.v)
u(W.eo,W.y)
u(W.er,P.v)
u(W.es,W.y)
u(W.et,P.ag)
u(W.cL,P.v)
u(W.cM,W.y)
u(W.eu,P.v)
u(W.ev,W.y)
u(W.ez,P.ag)
u(W.eC,P.v)
u(W.eD,W.y)
u(W.cN,P.v)
u(W.cO,W.y)
u(W.eE,P.v)
u(W.eF,W.y)
u(W.eI,P.v)
u(W.eJ,W.y)
u(W.eK,P.v)
u(W.eL,W.y)
u(W.eM,P.v)
u(W.eN,W.y)
u(W.eO,P.v)
u(W.eP,W.y)
u(W.eQ,P.v)
u(W.eR,W.y)
u(P.ef,P.v)
u(P.eg,W.y)
u(P.ep,P.v)
u(P.eq,W.y)
u(P.eA,P.v)
u(P.eB,W.y)
u(P.eG,P.v)
u(P.eH,W.y)
u(P.e3,P.ag)
u(P.ew,P.v)
u(P.ex,W.y)})();(function constants(){var u=hunkHelpers.makeConstList
C.r=W.d_.prototype
C.n=W.bI.prototype
C.k=W.ca.prototype
C.B=W.df.prototype
C.C=J.a.prototype
C.a=J.aY.prototype
C.h=J.di.prototype
C.m=J.dj.prototype
C.i=J.dk.prototype
C.j=J.ch.prototype
C.J=J.bt.prototype
C.K=W.co.prototype
C.w=J.hj.prototype
C.b=P.bT.prototype
C.p=J.dT.prototype
C.x=W.b9.prototype
C.y=W.cE.prototype
C.z=new P.hi()
C.A=new P.ih()
C.l=new P.iW()
C.c=new A.bJ(0,"ColorSourceType.None")
C.f=new A.bJ(1,"ColorSourceType.Solid")
C.d=new A.bJ(2,"ColorSourceType.Texture2D")
C.e=new A.bJ(3,"ColorSourceType.TextureCube")
C.o=new P.bK(0)
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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

C.F=function(getTagFallback) {
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
C.G=function() {
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
C.I=function(hooks) {
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
C.v=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.q=new P.ig(!1)})();(function staticFields(){$.aR=0
$.c4=null
$.k4=null
$.jO=!1
$.kT=null
$.kL=null
$.l_=null
$.jd=null
$.ji=null
$.jX=null
$.bV=null
$.cR=null
$.cS=null
$.jP=!1
$.a2=C.l
$.kd=null
$.kh=null
$.cp=null
$.kn=null
$.ku=null
$.kx=null
$.kw=null
$.kv=null
$.kz=null
$.lx="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.lw="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.kg=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mJ","l3",function(){return H.kS("_$dart_dartClosure")})
u($,"mK","k0",function(){return H.kS("_$dart_js")})
u($,"mM","l4",function(){return H.b8(H.i1({
toString:function(){return"$receiver$"}}))})
u($,"mN","l5",function(){return H.b8(H.i1({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mO","l6",function(){return H.b8(H.i1(null))})
u($,"mP","l7",function(){return H.b8(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mS","la",function(){return H.b8(H.i1(void 0))})
u($,"mT","lb",function(){return H.b8(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mR","l9",function(){return H.b8(H.ks(null))})
u($,"mQ","l8",function(){return H.b8(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mV","ld",function(){return H.b8(H.ks(void 0))})
u($,"mU","lc",function(){return H.b8(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"n8","k1",function(){return P.lZ()})
u($,"na","cX",function(){return[]})
u($,"n9","lh",function(){return P.lS("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"n1","lg",function(){return Z.aB(0)})
u($,"mW","le",function(){return Z.aB(511)})
u($,"n3","aQ",function(){return Z.aB(1)})
u($,"n2","aP",function(){return Z.aB(2)})
u($,"mY","aO",function(){return Z.aB(4)})
u($,"n4","bl",function(){return Z.aB(8)})
u($,"n5","bm",function(){return Z.aB(16)})
u($,"mZ","bF",function(){return Z.aB(32)})
u($,"n_","cW",function(){return Z.aB(64)})
u($,"n0","lf",function(){return Z.aB(96)})
u($,"n6","c0",function(){return Z.aB(128)})
u($,"mX","bk",function(){return Z.aB(256)})
u($,"mI","l2",function(){return new V.fl(1e-9)})
u($,"mH","J",function(){return $.l2()})})()
var v={mangledGlobalNames:{A:"int",w:"double",a4:"num",o:"String",a6:"bool",H:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.u]},{func:1,ret:P.H,args:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:P.H,args:[F.Y]},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.A,[P.e,E.an]]},{func:1,ret:P.w},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[W.aL]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.o,args:[P.A]},{func:1,ret:P.H,args:[,]},{func:1,args:[,]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:-1,args:[P.A,[P.e,D.a5]]},{func:1,ret:-1,args:[P.A,[P.e,U.aa]]},{func:1,ret:-1,args:[P.A,[P.e,M.ao]]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.H,args:[F.Q]},{func:1,ret:-1,args:[P.A,[P.e,V.ah]]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,args:[W.m]},{func:1,ret:W.a9,args:[W.L]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.H,args:[P.a4]},{func:1,ret:P.a6,args:[W.L]},{func:1,ret:-1,args:[W.b9]},{func:1,ret:P.a6,args:[[P.e,D.a5]]},{func:1,ret:[P.aC,,],args:[,]},{func:1,ret:P.H,args:[F.Q,P.w,P.w]},{func:1,ret:P.w,args:[P.w]},{func:1,ret:F.ap,args:[F.ap]},{func:1,ret:F.ap,args:[F.ap],named:{color:V.K}},{func:1,ret:-1,args:[F.Q,F.Q]},{func:1,ret:P.H,args:[F.af]},{func:1,ret:P.H,args:[W.m]},{func:1,ret:P.H,args:[,],opt:[P.at]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cn,ArrayBufferView:H.cn,Float32Array:H.cm,Float64Array:H.cm,Int16Array:H.h9,Int32Array:H.ha,Int8Array:H.hb,Uint16Array:H.hc,Uint32Array:H.hd,Uint8ClampedArray:H.dz,CanvasPixelArray:H.dz,Uint8Array:H.he,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLBaseElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLImageElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableCellElement:W.t,HTMLTableDataCellElement:W.t,HTMLTableHeaderCellElement:W.t,HTMLTableColElement:W.t,HTMLTableElement:W.t,HTMLTableRowElement:W.t,HTMLTableSectionElement:W.t,HTMLTemplateElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.eU,HTMLAnchorElement:W.eW,HTMLAreaElement:W.eX,Blob:W.cZ,HTMLBodyElement:W.d_,HTMLCanvasElement:W.bI,CDATASection:W.bo,CharacterData:W.bo,Comment:W.bo,ProcessingInstruction:W.bo,Text:W.bo,CSSNumericValue:W.c8,CSSUnitValue:W.c8,CSSPerspective:W.f8,CSSCharsetRule:W.U,CSSConditionRule:W.U,CSSFontFaceRule:W.U,CSSGroupingRule:W.U,CSSImportRule:W.U,CSSKeyframeRule:W.U,MozCSSKeyframeRule:W.U,WebKitCSSKeyframeRule:W.U,CSSKeyframesRule:W.U,MozCSSKeyframesRule:W.U,WebKitCSSKeyframesRule:W.U,CSSMediaRule:W.U,CSSNamespaceRule:W.U,CSSPageRule:W.U,CSSRule:W.U,CSSStyleRule:W.U,CSSSupportsRule:W.U,CSSViewportRule:W.U,CSSStyleDeclaration:W.c9,MSStyleCSSProperties:W.c9,CSS2Properties:W.c9,CSSImageValue:W.aS,CSSKeywordValue:W.aS,CSSPositionValue:W.aS,CSSResourceValue:W.aS,CSSURLImageValue:W.aS,CSSStyleValue:W.aS,CSSMatrixComponent:W.aT,CSSRotation:W.aT,CSSScale:W.aT,CSSSkew:W.aT,CSSTranslation:W.aT,CSSTransformComponent:W.aT,CSSTransformValue:W.fa,CSSUnparsedValue:W.fb,DataTransferItemList:W.fd,HTMLDivElement:W.ca,XMLDocument:W.cb,Document:W.cb,DOMException:W.fe,ClientRectList:W.da,DOMRectList:W.da,DOMRectReadOnly:W.db,DOMStringList:W.ff,DOMTokenList:W.fg,Element:W.a9,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aU,FileList:W.fq,FileWriter:W.fr,HTMLFormElement:W.fv,Gamepad:W.aV,History:W.fz,HTMLCollection:W.bM,HTMLFormControlsCollection:W.bM,HTMLOptionsCollection:W.bM,HTMLDocument:W.df,KeyboardEvent:W.aZ,Location:W.fS,MediaList:W.h2,MIDIInputMap:W.h3,MIDIOutputMap:W.h5,MimeType:W.b1,MimeTypeArray:W.h7,PointerEvent:W.ab,MouseEvent:W.ab,DragEvent:W.ab,DocumentFragment:W.L,ShadowRoot:W.L,Attr:W.L,DocumentType:W.L,Node:W.L,NodeList:W.co,RadioNodeList:W.co,Plugin:W.b2,PluginArray:W.hk,RTCStatsReport:W.hs,HTMLSelectElement:W.hv,SourceBuffer:W.b3,SourceBufferList:W.hE,SpeechGrammar:W.b4,SpeechGrammarList:W.hF,SpeechRecognitionResult:W.b5,Storage:W.hJ,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,TextTrack:W.b6,TextTrackCue:W.aK,VTTCue:W.aK,TextTrackCueList:W.hR,TextTrackList:W.hS,TimeRanges:W.hV,Touch:W.b7,TouchEvent:W.aL,TouchList:W.hY,TrackDefaultList:W.hZ,CompositionEvent:W.bx,FocusEvent:W.bx,TextEvent:W.bx,UIEvent:W.bx,URL:W.ie,VideoTrackList:W.iu,WheelEvent:W.b9,Window:W.cE,DOMWindow:W.cE,CSSRuleList:W.iD,ClientRect:W.e5,DOMRect:W.e5,GamepadList:W.iQ,NamedNodeMap:W.em,MozNamedAttrMap:W.em,SpeechRecognitionResultList:W.j0,StyleSheetList:W.j1,SVGLength:P.bc,SVGLengthList:P.fN,SVGNumber:P.bg,SVGNumberList:P.hg,SVGPointList:P.hm,SVGStringList:P.hP,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGScriptElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGTransform:P.bh,SVGTransformList:P.i_,AudioBuffer:P.eZ,AudioParamMap:P.f_,AudioTrackList:P.f1,AudioContext:P.bH,webkitAudioContext:P.bH,BaseAudioContext:P.bH,OfflineAudioContext:P.hh,WebGLBuffer:P.d0,WebGLFramebuffer:P.de,WebGLProgram:P.dD,WebGL2RenderingContext:P.bT,WebGLShader:P.dG,WebGLUniformLocation:P.dS,SQLResultSetRowList:P.hG})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dx.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.dy.$nativeSuperclassTag="ArrayBufferView"
W.cL.$nativeSuperclassTag="EventTarget"
W.cM.$nativeSuperclassTag="EventTarget"
W.cN.$nativeSuperclassTag="EventTarget"
W.cO.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.kW,[])
else M.kW([])})})()
//# sourceMappingURL=main.dart.js.map
